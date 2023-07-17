import { z } from "zod";
import { SerialPort } from "serialport";
import { ReadlineParser } from "serialport";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const readingRouter = createTRPCRouter({
  createph: publicProcedure
    // .input(z.string())
    .mutation(async ({ ctx, input }) => {
      console.log("POST REQUEST");

      console.log(input);

      // return ctx.prisma.ph.create({
      //   data: { ph: input.ph },
      // });
      return {
        status: "Data received !",
        message: input,
      };
    }),

  getph: publicProcedure
    .meta({
      openapi: { method: "GET", path: "/getph/", enabled: true },
    })
    .input(z.void())
    .output(
      z.array(
        z.object({
          id: z.string(),
          createdAt: z.date(),
          ph: z.string(),
        })
      )
    )
    .query(async ({ ctx }) => {
      return await ctx.prisma.ph.findMany();
    }),

  getconductivity: publicProcedure
    .meta({
      openapi: { method: "GET", path: "/getconductivity/", enabled: true },
    })
    .input(z.void())
    .output(
      z.array(
        z.object({
          id: z.string(),
          createdAt: z.date(),
          conductivity: z.string(),
        })
      )
    )
    .query(async ({ ctx }) => {
      return await ctx.prisma.conductivity.findMany();
    }),

  createPh: publicProcedure
    .meta({
      openapi: { method: "POST", path: "/createph/", enabled: true },
    })
    .input(z.object({ ph: z.string() }))
    .output(z.object({ ph: z.string() }))
    .mutation(async ({ input, ctx }) => {
      console.log(input.ph);

      return await ctx.prisma.ph.create({
        data: { ph: input.ph },
      });
    }),

  createConductivity: publicProcedure
    .meta({
      openapi: { method: "POST", path: "/createconductivity/", enabled: true },
    })
    .input(z.object({ conductivity: z.string() }))
    .output(z.object({ conductivity: z.string() }))
    .mutation(async ({ input, ctx }) => {
      console.log(input.conductivity);

      return await ctx.prisma.conductivity.create({
        data: { conductivity: input.conductivity },
      });
    }),

  createTurbidity: publicProcedure
    .meta({
      openapi: { method: "POST", path: "/createturbidity/", enabled: true },
    })
    .input(z.object({ turbidity: z.string() }))
    .output(z.object({ turbidity: z.string() }))
    .mutation(async ({ input, ctx }) => {
      console.log(input.turbidity);

      return await ctx.prisma.turbidity.create({
        data: { turbidity: input.turbidity },
      });
    }),

  deleteph: publicProcedure
    .meta({
      openapi: { method: "DELETE", path: "/deleteph/", enabled: true },
    })
    .input(z.void())
    .output(z.object({ message: z.string() }))
    .mutation(async ({ ctx }) => {
      const deletePh = await ctx.prisma.ph.deleteMany();

      return {
        message: "Deleted",
      };
    }),

  deleteconductivity: publicProcedure
    .meta({
      openapi: {
        method: "DELETE",
        path: "/deleteconductivity/",
        enabled: true,
      },
    })
    .input(z.void())
    .output(z.object({ message: z.string() }))
    .mutation(async ({ ctx }) => {
      const deletePh = await ctx.prisma.conductivity.deleteMany();

      return {
        message: "Deleted",
      };
    }),
});
