import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { Prisma, User as PrismaUser } from '@prisma/client';

const UserInput = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    username: z.string().optional(),
    address: z.string(),
    sukuriPassId: z.string().optional(),
});

const GetInput = z.object({
    id: z.string().optional(),
    sortBy: z.string().optional(),
    asc: z.boolean().optional().default(true),
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
     * @returns {User/User[]} - The requested user/users.
     */
    get: publicProcedure
        .input(GetInput)
        .query(async ({ input, ctx }) => {
            if (input.id) {
                const user = await ctx.prisma.user.findUnique({
                    where: { id: input.id },
                });
                return user as PrismaUser | null;

            }

            const sortBy = input.sortBy || 'created_date';
            const order = input.asc ? 'asc' : 'desc';

            const users = await ctx.prisma.user.findMany({
                orderBy: {
                    [sortBy]: order,
                },
            });
            return users as PrismaUser[] | null;

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
        const username = input.username || input.address;
        const { address, ...rest } = input;
        
        const userData: Prisma.UserCreateInput = {
            ...input,
            address: address.toLowerCase(),
            username: username.toLowerCase(),
        };
        const user = await ctx.prisma.user.create({
            data: userData,
        });

        return user as PrismaUser;
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

        return user as PrismaUser;
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
