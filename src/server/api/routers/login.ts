import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { verifyEthereumSignature } from '@/lib/auth';
import { SignInInputSchema, SignUpInputSchema } from '@/lib/models';

const SignInput = z.object({
    signature: z.string(),
    username: z.string().optional(),
    ethAddress: z.string(),
    timestamp: z.string(),
    nonce: z.string(),
});

/**
 * @module signinRouter
 * A router module that handles user sign-in and sign-up using Ethereum signatures.
 * Uses tRPC, a toolkit for building end-to-end typesafe APIs.
 */
export const loginRouter = createTRPCRouter({
    /**
   * Register a new user based on their Ethereum signature.
   *
   * @function signin
   * @param {SigninInputSchema} input - The registration details from the client.
   * @param {Object} ctx - The context object.
   * @returns {Object} - Object indicating if the registration was successful.
   * @throws {Error} Throws an error if registration fails.
   */
    signin: publicProcedure
        .input(SignInput)
        .mutation(async ({ input, ctx }) => {
            const username = input.username || input.ethAddress;
            const isValidSignature = await verifyEthereumSignature(
                input.signature,
                input.ethAddress,
                input.timestamp,
                input.nonce,
            );

            if (!isValidSignature) {
                throw new Error('Invalid signature or Ethereum address');
            }

            const existingUser = await ctx.prisma.user.findUnique({
                where: { address: input.ethAddress.toLowerCase() },
            });

            if (!existingUser) {
                throw new Error('User not registered');
            }

            if (!ctx.session) {
                throw new Error('Session is not initialized');
            }

            ctx.session.user.id = existingUser.id;

            return { success: true };
        }),
    /**
* Register a new user based on their Ethereum signature.
*
* @function signup
* @param {SignUpInputSchema} input - The registration details from the client.
* @param {Object} ctx - The context object.
* @returns {Object} - Object indicating if the registration was successful.
* @throws {Error} Throws an error if registration fails.
*/
    signup: publicProcedure
        .input(SignInput)
        .mutation(async ({ input, ctx }) => {
            const username = input.username || input.ethAddress;
            const isValidSignature = await verifyEthereumSignature(
                input.signature,
                input.ethAddress,
                input.timestamp,
                input.nonce,
            );

            if (!isValidSignature) {
                throw new Error('Invalid signature or Ethereum address');
            }

            const existingUser = await ctx.prisma.user.findUnique({
                where: { address: input.ethAddress.toLowerCase() },
            });

            if (existingUser) {
                throw new Error('User already registered');
            }

            const user = await ctx.prisma.user.create({
                data: {
                    address: input.ethAddress.toLowerCase(),
                    username: username.toLowerCase(),
                },
            });

            if (!ctx.session) {
                throw new Error('Session is not initialized');
            }

            ctx.session.user.id = user.id;

            return { success: true };
        }),
});