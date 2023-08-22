import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { verifyEthereumSignature } from '@/lib/auth';

/**
 * Login input validation schema
 * @typedef {Object} LoginInputSchema
 * @property {string} signature - The signed message from the client's wallet.
 * @property {string} ethAddress - The Ethereum address associated with the user's wallet.
 * @property {string} timestamp - The timestamp at which the user signed the message.
 * @property {string} nonce - The unique nonce associated with this request.
 */
const LoginInput = z.object({
    signature: z.string(),
    ethAddress: z.string(),
    timestamp: z.string(),
    nonce: z.string(),
});

/**
 * @module loginRouter
 * A router module that handles user login using Ethereum signatures.
 * Uses tRPC, a toolkit for building end-to-end typesafe APIs.
 */
export const loginRouter = createTRPCRouter({
    /**
     * Authenticate a user based on their Ethereum signature.
     *
     * @function login
     * @param {LoginInputSchema} input - The authentication details from the client.
     * @param {Object} ctx - The context object.
     * @returns {Object} - Object indicating if the authentication was successful.
     * @throws {Error} Throws an error if authentication fails.
     */
    login: publicProcedure.input(LoginInput).mutation(async ({ input, ctx }) => {
        // 1. Verify the signature with the user's Ethereum address
        const isValidSignature = await verifyEthereumSignature(input.signature, input.ethAddress, input.timestamp, input.nonce);

        if (!isValidSignature) {
            throw new Error('Invalid signature or Ethereum address');
        }

        // 2. Fetch the user from the database using the Ethereum address
        const user = await ctx.prisma.user.findUnique({
            where: { address: input.ethAddress.toLowerCase() },
        });

        if (!user) {
            throw new Error('User not registered');
        }

        // 3. Set the user's ID in the session and send a session cookie to the client
        if (!ctx.session) {
            throw new Error('Session is not initialized');
        }

        ctx.session.user.id = user.id;

        // Depending on the session library you are using, you may need additional setup 
        // or commands to finalize the session and send the cookie.

        return { success: true };
    }),
});
