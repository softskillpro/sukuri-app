import { z } from 'zod';
import { protectedProcedure, createTRPCRouter, publicProcedure } from '@/server/api/trpc';
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
const PaymentOption = z.object({
    token: z.string(),
    name: z.string(),
    symbol: z.string(),
    is_eth: z.boolean(),
});

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
    create: publicProcedure.input(ProjectInput).mutation(async ({ input, ctx }) => {
        const userId = 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e'//ctx.session?.user?.id;
        if (!userId) {
            throw new Error("Not authenticated");
        }
        const projectData: Prisma.ProjectCreateInput = {
            ...input,
            User: {
                connect: {
                    id: userId,
                },
            },
        };
        const project = await ctx.prisma.project.create({
            data: projectData,
        });
        if (input.accepted_payments) {
            await Promise.all(input.accepted_payments.map(payment =>
                ctx.prisma.projectPayment.create({
                    data: {
                        projectId: project.id,
                        token: payment.token,
                    },
                }),
            ));
        }
        return project;
    }),
    /**
     * @function update
     * Update an existing project.
     *
     * @param {string} id - The ID of the project to update.
     * @param {Project} project - The new project data.
     * @returns {Project} - The updated project.
     * @throws {Error} - If the user is not authenticated.
     */
    update: protectedProcedure.input(z.object({
        id: z.string(),
        data: ProjectInput,
    })).mutation(async ({ input, ctx }) => {
        const userId = ctx.session?.user?.id;
        if (!userId) {
            throw new Error("Not authenticated");
        }
        const projectData: Prisma.ProjectUpdateInput = {
            ...input.data,
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
        if (input.data.accepted_payments) {
            await Promise.all(input.data.accepted_payments.map(payment =>
                ctx.prisma.projectPayment.create({
                    data: {
                        projectId: project.id,
                        token: payment.token,
                    },
                }),
            ));
        }
        return project;
    }),
});
