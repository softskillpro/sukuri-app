import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { verifyEthereumSignature } from '@/lib/auth';

/**
 * Signin input validation schema
 * @typedef {Object} SigninInputSchema
 * @property {string} signature - The signed message from the client's wallet.
 * @property {string} username - The username created by the user.
 * @property {string} ethAddress - The Ethereum address associated with the user's wallet.
 * @property {string} timestamp - The timestamp at which the user signed the message.
 * @property {string} nonce - The unique nonce associated with this request.
 */
const SigninInput = z.object({
  signature: z.string(),
  username: z.string(),
  ethAddress: z.string(),
  timestamp: z.string(),
  nonce: z.string(),
});

/**
 * @module signinRouter
 * A router module that handles user sign-in using Ethereum signatures.
 * Uses tRPC, a toolkit for building end-to-end typesafe APIs.
 */
export const signinRouter = createTRPCRouter({
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
    .input(SigninInput)
    .mutation(async ({ input, ctx }) => {
      // 1. Verify the signature with the user's Ethereum address
      const isValidSignature = await verifyEthereumSignature(
        input.signature,
        input.ethAddress,
        input.timestamp,
        input.nonce,
      );

      if (!isValidSignature) {
        throw new Error('Invalid signature or Ethereum address');
      }

      // 2. Check if the user already exists
      const existingUser = await ctx.prisma.user.findUnique({
        where: { address: input.ethAddress.toLowerCase() },
      });

      if (existingUser) {
        throw new Error('User already registered');
      }

      // 3. Create the new user in the database
      const user = await ctx.prisma.user.create({
        data: {
          address: input.ethAddress.toLowerCase(),
          username: input.username.toLowerCase(),
        },
      });

      // 4. Set the user's ID in the session and send a session cookie to the client
      if (!ctx.session) {
        throw new Error('Session is not initialized');
      }

      ctx.session.user.id = user.id;

      // As before, depending on the session library, you might need additional setup
      // or commands to finalize the session and send the cookie.

      return { success: true };
    }),
});
