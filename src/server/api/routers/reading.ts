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

  all: publicProcedure.query(async ({ ctx }) => {
    console.log("yo");

    return {
      data: "Hello this is a get request !",
    };
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

  // createConductivity: publicProcedure
  //   .meta({
  //     openapi: { method: "POST", path: "/createconductivity/", enabled: true },
  //   })
  //   .input(z.object({ ph: z.string() }))
  //   .output(z.object({ ph: z.string() }))
  //   .mutation(async ({ input, ctx }) => {
  //     console.log(input.ph);

  //     return await ctx.prisma.conductivity.create({
  //       data: { ph: input.ph },
  //     });
  //   }),

  // createTurbidity: publicProcedure
  //   .meta({
  //     openapi: { method: "POST", path: "/createturbidity/", enabled: true },
  //   })
  //   .input(z.object({ turbidity: z.string() }))
  //   .output(z.object({ turbidity: z.string() }))
  //   .mutation(async ({ input, ctx }) => {
  //     console.log(input.turbidity);

  //     return await ctx.prisma.turbidity.create({
  //       data: { turbidity: input.turbidity },
  //     });
  //   }),
});
