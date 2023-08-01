import { number, z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const readingRouter = createTRPCRouter({
  getpower: publicProcedure
    .meta({
      openapi: { method: "GET", path: "/getpower/", enabled: true },
    })
    .input(z.void())
    .output(
      z.array(
        z.object({
          id: z.string(),
          createdAt: z.date(),
          power: z.string(),
        })
      )
    )
    .query(async ({ ctx }) => {
      return await ctx.prisma.power.findMany();
    }),

  createPower: publicProcedure
    .meta({
      openapi: { method: "POST", path: "/createpower/", enabled: true },
    })
    .input(z.object({ power: z.string() }))
    .output(z.object({ power: z.string() }))
    .mutation(async ({ input, ctx }) => {
      console.log(input.power);

      return await ctx.prisma.power.create({
        data: { power: input.power },
      });
    }),

  deletepower: publicProcedure
    .meta({
      openapi: { method: "DELETE", path: "/deletepower/", enabled: true },
    })
    .input(z.void())
    .output(z.object({ message: z.string() }))
    .mutation(async ({ ctx }) => {
      const deletePh = await ctx.prisma.power.deleteMany();

      return {
        message: "Deleted",
      };
    }),
});
