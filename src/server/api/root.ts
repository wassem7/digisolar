import { readingRouter } from "@/server/api/routers/reading";
import { createTRPCRouter } from "@/server/api/trpc";
import { weatherRouter } from "./routers/weather";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  reading: readingRouter,
  weather: weatherRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
