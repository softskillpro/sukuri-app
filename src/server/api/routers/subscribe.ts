import { z } from 'zod';
import { protectedProcedure, publicProcedure, createTRPCRouter } from '@/server/api/trpc';
import { Subscription as PrismSubscription } from '@prisma/client';

const SubscriptionInput = z.object({
  projectId: z.string(),
  tierId: z.string(),
});

const GetInput = z.object({
  id: z.string().optional(),
  sortBy: z.string().optional(),
  asc: z.boolean().optional().default(true),
});

const GetSortInput = z.object({
  sortBy: z.string().optional(),
  asc: z.boolean().optional().default(true),
});

/**
 * subscriptionRouter defines the necessary operations for managing subscriptions.
 * @type {TRPCRouter}
 */
export const subscriptionRouter = createTRPCRouter({

  /**
   * @function get
   * Get a subscription by its ID or get all subscriptions if no ID is provided.
   *
   * @param {object} input - The input object.
   * @param {string} [input.id] - Optional ID of the subscription to retrieve.
   * @param {string} [input.sortBy] - Optional attribute to sort by when retrieving multiple subscriptions.
   * @param {boolean} [input.asc] - Optional flag to order results in ascending or descending order. Defaults to true (ascending) if not provided.
   * @returns {Promise<Subscription | Subscription[] | null>} - The requested subscription, or an array of subscriptions, or null if not found.
   */
  get: publicProcedure
    .input(GetInput)
    .query(async ({ input, ctx }) => {
      if (input.id) {
        const subscription = await ctx.prisma.subscription.findUnique({
          where: { id: input.id },
          include: {
            tier: true,
          },
        });
        return subscription as PrismSubscription || null;
      }

      const sortBy = input.sortBy || 'last_processed';
      const order = input.asc ? 'asc' : 'desc';

      const subscriptions = await ctx.prisma.subscription.findMany({
        orderBy: {
          [sortBy]: order,
        },
        include: {
          tier: true,
        },
      });
      return subscriptions as PrismSubscription[] || null;
    }),
  /**
 * @function getActive
 * Get all Active subscriptions orderd by expires or a column of choice
 *
 * @param {object} input - The input object.
 * @param {string} [input.sortBy] - Optional attribute to sort by when retrieving multiple subscriptions.
 * @param {boolean} [input.asc] - Optional flag to order results in ascending or descending order. Defaults to true (ascending) if not provided.
 * @returns {Promise<Subscription | Subscription[] | null>} - The requested subscription, or an array of subscriptions, or null if not found.
 */
  getActive: publicProcedure
    .input(GetSortInput)
    .query(async ({ input, ctx }) => {
      const sortBy = input.sortBy || 'expires';
      const order = input.asc ? 'asc' : 'desc';

      const now = new Date();

      const activeSubscriptions = await ctx.prisma.subscription.findMany({
        where: {
          expires: {
            gt: now,
          },
        },
        include: {
          tier: true,
        },
        orderBy: {
          [sortBy]: order,
        },
      });
      return activeSubscriptions as PrismSubscription[]|| null;
    }),
  /**
   * subscribe is a protected procedure that creates a new subscription given a projectId and a tierId.
   * It throws an error if the user is not authenticated, if the user, project, or tier do not exist,
   * or if the user is already subscribed to the tier.
   * @returns {Promise<{success: boolean, message: string, data: Prisma.SubscriptionCreateOutput}>}
   */
  subscribe: publicProcedure // Update to protectedProcedure when auth ready
    .input(SubscriptionInput)
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session?.user?.id;
      if (!userId) {
        throw new Error('Not authenticated');
      }

      const { projectId, tierId } = input;

      const user = await ctx.prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        throw new Error('User not found');
      }

      const project = await ctx.prisma.project.findUnique({
        where: { id: projectId },
      });
      if (!project) {
        throw new Error('Project not found');
      }

      const tier = await ctx.prisma.projectTier.findUnique({
        where: { id: tierId },
      });
      if (!tier || tier.projectId !== projectId) {
        throw new Error(
          'Mismatched IDs: The tier does not belong to the specified project',
        );
      }

      const existingSubscription = await ctx.prisma.subscription.findFirst({
        where: {
          userId: userId,
          projectId: projectId,
          tierId: tierId,
        },
      });

      if (existingSubscription) {
        throw new Error(
          'Already Subscribed: You are already subscribed to this tier',
        );
      }

      const subscription = await ctx.prisma.subscription.create({
        data: {
          userId: userId,
          projectId: projectId,
          tierId: tierId,
          last_processed: new Date(),
          expires: new Date(),
          should_continue: true,
          priority: 1
        },
      });

      return {
        success: true,
        message: 'Subscription successful',
        data: subscription,
      };
    }),
});
