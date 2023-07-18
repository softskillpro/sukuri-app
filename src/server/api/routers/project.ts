import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { Prisma } from '@prisma/client';

/**
 * @typedef {Object} ProjectPaymentInput
 * @property {string} token - The payment token.
 */
const ProjectPaymentInput = z.object({
  token: z.string(),
});

/**
 * @typedef {Object} PaymentOption
 * @property {string} token - The token of the payment option.
 * @property {string} name - The name of the payment option.
 * @property {string} symbol - The symbol of the payment option.
 * @property {boolean} is_eth - A flag indicating if the payment option is Ethereum.
 */
// const PaymentOption = z.object({
//   token: z.string(),
//   name: z.string(),
//   symbol: z.string(),
//   is_eth: z.boolean(),
// });

/**
 * @typedef {Object} Project
 * @property {string} name - The name of the project.
 * @property {string} short_description - A short description of the project.
 * @property {string} long_description - A detailed description of the project.
 * @property {string} [thumbnail_image] - A URL for the project's thumbnail image.
 * @property {string} [large_image] - A URL for the project's large image.
 * @property {number} chain_id - The chain id of the project.
 * @property {number} [member_count] - The number of members in the project.
 * @property {boolean} is_erc721 - A flag indicating if the project is ERC721.
 * @property {boolean} [is_featured] - A flag indicating if the project is featured.
 * @property {ProjectPaymentInput[]} [accepted_payments] - A list of accepted payment methods.
 */

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
   * @returns {Project} - The requested project.
   */
  get: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const project = await ctx.prisma.project.findUnique({
      where: { id: input },
    });
    return project;
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
      const { accepted_payments, ...rest } = input;

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
      };

      const project = await ctx.prisma.project.create({
        data: projectData,
      });

      return project;
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
  // Change to protectedProcedure when auth is working
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
      return project;
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
