import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { Prisma, Project as PrismaProject } from '@prisma/client';

const ProjectPaymentInput = z.object({
  token: z.string(),
});

const GetInput = z.object({
  id: z.string().optional(),
  sortBy: z.string().optional(),
  asc: z.boolean().optional().default(true),
});

const ImageInput = z.object({
  key: z.string(),
  url: z.string(),
  type: z.string(),
  description: z.string().optional(),
});

const ProjectInput = z.object({
  name: z.string(),
  short_description: z.string(),
  long_description: z.string(),
  thumbnail_image: z.string().optional(),
  large_image: z.string().optional(),
  chain_id: z.number(),
  member_count: z.number().optional(),
  is_erc721: z.boolean(),
  is_featured: z.boolean().optional(),
  accepted_payments: z.array(ProjectPaymentInput).optional(),
  website_url: z.string().optional(),
  twitter_url: z.string().optional(),
  instagram_url: z.string().optional(),
  medium_url: z.string().optional(),
  telegram_url: z.string().optional(),
  discord_url: z.string().optional(),
  images: z.array(ImageInput).optional(),
});


const PartialProjectInput = ProjectInput.partial();


/**
 * @module projectRouter
 * A router module that handles requests related to projects.
 * Uses tRPC, a toolkit for building end-to-end typesafe APIs.
 */
export const projectRouter = createTRPCRouter({
  /**
   * @function get
   * Get a project by its ID.
   *
   * @param {string} id - The ID of the project.
   * @returns {Project/Project[]} - The requested project.
   */
  get: publicProcedure
    .input(GetInput)
    .query(async ({ input, ctx }) => {
      if (input.id) {
        const project = await ctx.prisma.project.findUnique({
          where: { id: input.id },
          include: {
            tiers: true,
          },
        });
        return project as PrismaProject || null;
      }

      const sortBy = input.sortBy || 'name';
      const order = input.asc ? 'asc' : 'desc';

      const projects = await ctx.prisma.project.findMany({
        orderBy: {
          [sortBy]: order,
        },
        include: {
          tiers: true,
        },
      });
      return projects as PrismaProject[] || null;
    }),

  /**
   * @function create
   * Create a new project.
   *
   * @param {Project} project - The project to create.
   * @returns {Project} - The newly created project.
   * @throws {Error} - If the user is not authenticated.
   */
  // Change to protectedProcedure when auth is working
  create: publicProcedure
    .input(ProjectInput)
    .mutation(async ({ input, ctx }) => {
      const userId = 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e'; //ctx.session?.user?.id;
      if (!userId) {
        throw new Error('Not authenticated');
      }
      const { accepted_payments, images, ...rest } = input;

      const projectData: Prisma.ProjectCreateInput = {
        ...rest,
        User: {
          connect: {
            id: userId,
          },
        },
        accepted_payments: accepted_payments
          ? {
            create: await Promise.all(
              accepted_payments.map(async (payment) => {
                const paymentOption =
                  await ctx.prisma.paymentOption.findUnique({
                    where: { token: payment.token },
                  });

                if (!paymentOption) {
                  throw new Error(
                    `Payment option for token "${payment.token}" not found.`,
                  );
                }

                return { token: payment.token };
              }),
            ),
          }
          : undefined,
        Image: images
          ? {
            create: images.map((image) => ({
              key: image.key,
              url: image.url,
              type: image.type,
              description: image.description,
            })),
          }
          : undefined,
      };

      const project = await ctx.prisma.project.create({
        data: projectData,
      });

      return project as PrismaProject;
    }),

  /**
   * @function update
   * Update an existing project. The update can contain the full project payload
   * or any partial fields. If accepted payments are provided, it will add new payments
   * to the existing ones.
   *
   * @param {Object} args - An object containing the ID and the new data of the project.
   * @param {string} args.id - The ID of the project to update.
   * @param {Partial<ProjectInput>} args.data - The new project data.
   * @returns {Project} - The updated project.
   * @throws {Error} - If the user is not authenticated.
   */
  // Change to ownerProcedure when auth is working
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        data: PartialProjectInput,
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userId = 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e'; //ctx.session?.user?.id;
      if (!userId) {
        throw new Error('Not authenticated');
      }
      const { accepted_payments, ...rest } = input.data;
      const projectData: Prisma.ProjectUpdateInput = {
        ...rest,
        User: {
          connect: {
            id: userId,
          },
        },
      };
      const project = await ctx.prisma.project.update({
        where: { id: input.id },
        data: projectData,
      });
      if (accepted_payments) {
        await Promise.all(
          accepted_payments.map((payment) =>
            ctx.prisma.projectPayment.upsert({
              where: {
                projectId_token: {
                  projectId: project.id,
                  token: payment.token,
                },
              },
              update: {},
              create: {
                projectId: project.id,
                token: payment.token,
              },
            }),
          ),
        );
      }
      return project as PrismaProject;
    }),

  /**
  * @function updateImages
  * Update an existing image on a project. Can delete all images or just append.
  *
  * @param {Object} args - An object containing the ID and the new image data of the project.
  * @param {string} args.id - The ID of the project to update.
  * @param {Partial<ProjectInput>} args.data - The new project data.
  * @returns {Object} - Response with success and message.
  * @throws {Error} - If the user is not authenticated.
  */
  // Change to ownerProcedure when auth is working
  updateImages: publicProcedure
    .input(
      z.object({
        projectId: z.string(),
        images: z.array(ImageInput),
        delete: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { projectId, images, delete: deleteImages } = input;

      await ctx.prisma.$transaction(async prisma => {
        if (deleteImages) {
          await prisma.image.deleteMany({
            where: { projectId },
          });
        }

        if (images && images.length > 0) {
          await prisma.image.createMany({
            data: images.map(image => ({
              ...image,
              projectId,
            })),
          });
        }
      });

      return { success: true, message: 'Images updated successfully' };
    }),

  /**
   * @function delete
   * Deletes an existing project and its associated payments.
   *
   * @param {string} id - The ID of the project to delete.
   * @returns {boolean} - Returns true on successful deletion.
   * @throws {Error} - If the user is not authenticated or if they do not own the project.
   */
  // Change to protectedProcedure when auth is working
  delete: publicProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
    const userId = 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e'; //ctx.session?.user?.id;
    if (!userId) {
      throw new Error('Not authenticated');
    }
    const project = await ctx.prisma.project.findUnique({
      where: { id: input },
    });
    if (!project) {
      throw new Error('Project does not exist');
    }
    if (project.userId !== userId) {
      throw new Error('You do not have permission to delete this project');
    }
    await ctx.prisma.projectPayment.deleteMany({
      where: {
        projectId: input,
      },
    });
    await ctx.prisma.project.delete({
      where: { id: input },
    });

    return true;
  }),
});
