import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { getSession } from "next-auth/react";

import { prisma } from '../../server/db';
import { z } from 'zod';
import { ZodError } from 'zod';

const subscriptionSchema = z.object({    
    projectId: z.string(),
    tierId: z.number()
});

type SubscriptionData = z.infer<typeof subscriptionSchema>;

/**
 * Fetches a record using the Prisma client, or throws an error if not found.
 * @param {Promise<T | null>} promise - The Prisma client promise.
 * @param {string} error - The error message to throw if the record is not found.
 * @returns {Promise<T>}
 */
async function findOrThrow<T>(promise: Promise<T | null>, error: string): Promise<T> {
    const record = await promise;
    if (record === null) {
        throw new Error(error);
    }
    return record;
}

/**
 * Handles the API request.
 * @param {NextApiRequest} req - The API request.
 * @param {NextApiResponse} res - The API response.
 * @returns {Promise<void>}
 */
export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    // const session: Session | null = await getSession({ req });
    // console.log(`Session:${Session}`)
    // if (!session) {
    //     res.status(401).json({ error: 'Unauthorized' });
    //     return;
    // }
    const userIdTest = 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e';
    console.log(userIdTest);
    console.log(req.body)
    if (req.method === 'POST') {
        try {
            const parsedData = subscriptionSchema.safeParse(req.body);
            console.log(parsedData);
            if (!parsedData.success) {
                return res.status(400).json({ error: 'Invalid request data', details: (parsedData.error as ZodError).errors });
            }

            const { projectId, tierId } = parsedData.data as SubscriptionData;
            console.log(projectId);
            console.log(projectId);
            // Ensure the logged in user is the same as the user trying to subscribe
            if (userIdTest !== userIdTest) {
                return res.status(403).json({ error: 'Forbidden' });
            }

            // Make sure user exists
            const user = await findOrThrow(prisma.user.findUnique({ where: { id: userIdTest } }), 'User not found');

            // Make sure project exists
            const project = await findOrThrow(prisma.project.findUnique({ where: { id: projectId } }), 'Project not found');

            // Make sure the tier exists and belongs to the project
            const tier = await findOrThrow(prisma.projectTier.findUnique({ where: { tier_id: tierId} }), 'Tier not found');

            if (tier.projectId !== projectId) {
                return res.status(404).json({ error: 'Tier does not belong to the specified project' });
            }
            
            // Subscribe the user to the project under a specific tier
            const subscription = await prisma.userProject.create({
                data: {
                    userId: userIdTest,
                    projectId: projectId,
                    tierId: tierId
                }
            });

            return res.status(200).json(subscription);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while processing your request.' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
