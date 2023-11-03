import { createTRPCRouter } from '@/server/api/trpc';
import { exampleRouter } from '@/server/api/routers/example';
import { projectRouter } from '@/server/api/routers/project';
import { subscriptionRouter } from '@/server/api/routers/subscribe';
import { userRouter } from '@/server/api/routers/user';
import { loginRouter } from '@/server/api/routers/login';
import { signinRouter } from '@/server/api/routers/signin';
import { searchRouter } from './routers/search';
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  project: projectRouter,
  subscribe: subscriptionRouter,
  user: userRouter,
  login: loginRouter,
  signin: signinRouter,
  search: searchRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
