import { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import { getServerSession } from "next-auth/next"
import authOptions from "./auth/[...nextauth]";
import { prisma } from '../../server/db';
import { z } from 'zod';
import { ZodError } from 'zod';

/**
 * @typedef SubscriptionData
 * @type {object}
 * @property {string} projectId - Project ID
 * @property {number} tierId - Tier ID
 */

// Create a Zod schema for validating subscription data
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
 * @throws {Error} If the record is not found.
 */
async function findOrThrow<T>(promise: Promise<T | null>, error: string): Promise<T> {
    const record = await promise;
    if (record === null) {
        throw new Error(error);
    }
    return record;
}

/**
 * Handles the POST method for the subscription API route.
 * 
 * @param {NextApiRequest} req - The API request.
 * @param {NextApiResponse} res - The API response.
 * @returns {Promise<void>}
 * 
 * @throws {ZodError} If the request body does not conform to the SubscriptionData schema.
 * @throws {Error} If the requested user, project, or tier cannot be found in the database.
 * @throws {Error} If the user is already subscribed to the requested tier.
 */
export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    // Test User
    const userIdTest = 'af7d39af-84a9-4a4b-b6a2-18563e42bc6e';

    // Get the session from next-auth
    const session: Session | null = await getServerSession(req, res, authOptions);

    // Not Signed in throw error - uncomment when session is set by auth
    // if (!session) {
    //     res.status(401).json({ error: 'Unauthorized' });
    //     return;
    // }

    const userId = session?.user.id || userIdTest;

    if (req.method === 'POST') {
        try {
            const parsedData = subscriptionSchema.safeParse(req.body);
            if (!parsedData.success) {
                return res.status(400).json({
                    error: 'Invalid request data',
                    details: (parsedData.error as ZodError).errors,
                    message: 'Ensure your request data is in the correct format'
                });
            }

            const { projectId, tierId } = parsedData.data as SubscriptionData;

            if (userId !== userId) { // stand in for if we add userId in the subscribe api call
                return res.status(403).json({
                    error: 'Forbidden',
                    message: 'You are not authorized to make this action'
                });
            }

            // db calls that serve to check if data exists for user and project
            try {
                // Make sure user exists
                await findOrThrow(prisma.user.findUnique({ where: { id: userId } }), 'User not found');
                
                await findOrThrow(prisma.project.findUnique({ where: { id: projectId } }), 'Project not found');
                
            } catch (error) {
                // If an error was thrown in the findOrThrow function, return the error message
                if (error instanceof Error) {
                    return res.status(404).json({ error: error.message });
                }
            }
            const tier = await findOrThrow(prisma.projectTier.findUnique({ where: { tier_id: tierId } }), 'Tier not found');

            if (tier.projectId !== projectId) {
                return res.status(404).json({
                    error: 'Mismatched IDs',
                    message: 'The tier does not belong to the specified project'
                });
            }

            const existingSubscription = await prisma.userProject.findFirst({
                where: {
                    userId: userIdTest,
                    projectId: projectId,
                    tierId: tierId
                }
            });

            if (existingSubscription) {
                return res.status(409).json({
                    error: 'Already Subscribed',
                    message: 'You are already subscribed to this tier'
                });
            }

            const subscription = await prisma.userProject.create({
                data: {
                    userId: userIdTest,
                    projectId: projectId,
                    tierId: tierId
                }
            });

            return res.status(200).json({
                success: true,
                message: 'Subscription successful',
                data: subscription
            });

        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                return res.status(500).json({
                    error: 'Internal Server Error',
                    message: error.message
                });
            }
        }
    } else {
        res.status(405).json({
            error: 'Method Not Allowed',
            message: 'Ensure you are using the correct HTTP method for this route'
        });
    }
}
