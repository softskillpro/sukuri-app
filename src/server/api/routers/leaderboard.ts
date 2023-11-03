import { z } from 'zod';
import { createTRPCRouter, publicProcedure, primeProcedure } from '@/server/api/trpc';
import { verifyEthereumSignature } from '@/lib/auth';
import { Prisma, LeaderboardPosition as PrismaPostion } from '@prisma/client';
import { AlchemyProvider, Contract } from 'ethers';
import ABI from '@/contract/primeAbi.json';

const GetInput = z.object({
    address: z.string().optional(),
    sortBy: z.string().optional(),
    asc: z.boolean().optional().default(true),
});

const UpdateInput = z.object({
    address: z.string()

});

const provider = new AlchemyProvider(
    'mainnet',
    process.env.NEXT_PUBLIC_ALCHEMY_KEY,
);

const contract = new Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
    '0x1A97A257917640319EBe6D8f773Fd2888E80291B',
    ABI,
    provider,
);

/**
 * @module get
 * A router module that handles leaderboard operations.
 * Uses tRPC, a toolkit for building end-to-end typesafe APIs.
 */
export const leaderboardRouter = createTRPCRouter({
    /**
     * Get leaderboard data.
     *
     * @function get
     * @param {GetInput} input - The address from the client.
     * @param {Object} ctx - The context object.
     * @returns {PrismaPostion|PrismaPostion[]} - Prisma Leaderboard Position Object
     * @throws {Error} Throws an error if registration fails.
     */
    get: publicProcedure
        .input(GetInput)
        .mutation(async ({ input, ctx }) => {
            if (input.address) {
                const position = await ctx.prisma.leaderboardPosition.findUnique({
                    where: { address: input.address },
                });

                return position as PrismaPostion | null;
            }

            const sortBy = input.sortBy || 'points';
            const order = input.asc ? 'asc' : 'desc';

            const positions = await ctx.prisma.leaderboardPosition.findMany({
                orderBy: {
                    [sortBy]: order,
                },
            });
            return positions as PrismaPostion[] | null;
        }),
    /**
* Register a new user based on their Ethereum signature.
*
* @function update
* @param {UpdateInput} input - The registration details from the client.
* @param {Object} ctx - The context object.
* @returns {Object} - Object indicating if the registration was successful.
* @throws {Error} Throws an error if registration fails.
*/
// In progress
    update: primeProcedure
        .input(UpdateInput)
        .mutation(async ({ input, ctx }) => {

            if (!input.address) {
                throw new Error('Address Does not exist in leaderboard');
            }
            const leaderboard = await ctx.prisma.leaderboardPosition.findUnique({
                where: {
                    address: input.address,
                },
            });
            if (leaderboard && contract && BigInt(leaderboard?.last_updated) <= BigInt(new Date().getTime() - 3600)) {

            }
            return {
                exists: true,
                //points: totalPoints.toString(),
                //last_updated: _newLB.last_updated.toString(),
            };
        }),
});