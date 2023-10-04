import { z } from 'zod';
import { protectedProcedure, publicProcedure, createTRPCRouter } from '@/server/api/trpc';
import { Subscription } from '@prisma/client';

const SubscriptionInput = z.object({
  projectId: z.string(),
  tierId: z.string(),
});

/**
 * subscriptionRouter defines the necessary operations for managing subscriptions.
 * @type {TRPCRouter}
 */
export const subscriptionRouter = createTRPCRouter({
  /**
 * @function get
 * Get a subscription by its ID.
 *
 * @param {string} id - The ID of the subscription.
 * @returns {ProjectTier} - The requested subscription.
 */
  get: publicProcedure
    .input(z.string()).query(async ({ input, ctx }) => {
      const subscription = await ctx.prisma.subscription.findUnique({
        where: { id: input },
      });
      return subscription;
    }),
  /**
   * subscribe is a protected procedure that creates a new subscription given a projectId and a tierId.
   * It throws an error if the user is not authenticated, if the user, project, or tier do not exist,
   * or if the user is already subscribed to the tier.
   * @returns {Promise<{success: boolean, message: string, data: Prisma.SubscriptionCreateOutput}>}
   */
  subscribe: protectedProcedure
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
