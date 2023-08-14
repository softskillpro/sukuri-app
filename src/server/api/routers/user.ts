import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { Prisma } from '@prisma/client';

/**
 * User input validation schema
 * @typedef {Object} UserInputSchema
 * @property {string} [name] - The name of the user.
 * @property {string} [email] - The email of the user.
 * @property {string} username - The username of the user.
 * @property {string} address - The address of the user.
 * @property {string} [sukuriPassId] - The SukuriPass ID of the user.
 */
const UserInput = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    username: z.string(),
    address: z.string(),
    sukuriPassId: z.string().optional(),
});

const PartialUserInput = UserInput.partial();

/**
 * @module userRouter
 * A router module that handles requests related to users.
 * Uses tRPC, a toolkit for building end-to-end typesafe APIs.
 */
export const userRouter = createTRPCRouter({
    /**
     * Fetch a user by their ID.
     *
     * @function get
     * @param {string} input - The ID of the user.
     * @param {Object} ctx - The context object.
     * @returns {Object} - The requested user.
     */
    get: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
        const user = await ctx.prisma.user.findUnique({
            where: { id: input },
        });
        return user;
    }),

    /**
     * Add a new user.
     *
     * @function create
     * @param {UserInputSchema} input - The user data to create.
     * @param {Object} ctx - The context object.
     * @returns {Object} - The newly created user.
     */
    create: publicProcedure.input(UserInput).mutation(async ({ input, ctx }) => {

        const userData: Prisma.UserCreateInput = { ...input };

        const user = await ctx.prisma.user.create({
            data: userData,
        });

        return user;
    }),

    /**
     * Update an existing user.
     *
     * @function update
     * @param {Object} input - An object containing the ID and the new data of the user.
     * @param {string} input.id - The ID of the user to update.
     * @param {Partial<UserInputSchema>} input.data - The new user data.
     * @param {Object} ctx - The context object.
     * @returns {Object} - The updated user.
     */
    update: publicProcedure.input(
        z.object({
            id: z.string(),
            data: PartialUserInput,
        })
    ).mutation(async ({ input, ctx }) => {
        const userId = 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e'; //ctx.session?.user?.id;
        if (!userId) {
            throw new Error('Not authenticated');
        }

        const user = await ctx.prisma.user.update({
            where: { id: input.id },
            data: input.data,
        });

        return user;
    }),

    /**
     * Remove a user by ID.
     *
     * @function delete
     * @param {string} input - The ID of the user to delete.
     * @param {Object} ctx - The context object.
     * @returns {boolean} - Returns true on successful deletion.
     */
    delete: publicProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
        const userId = 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e'; //ctx.session?.user?.id;
        if (!userId) {
            throw new Error('Not authenticated');
        }

        const user = await ctx.prisma.user.findUnique({
            where: { id: input },
        });

        if (!user) {
            throw new Error('User does not exist');
        }
        if (user.id !== userId) {
            throw new Error('You do not have permission to delete this user');
        }

        await ctx.prisma.user.delete({
            where: { id: input },
        });

        return true;
    }),
});
