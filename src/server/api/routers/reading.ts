import { z } from "zod";
import { SerialPort } from "serialport";
import { ReadlineParser } from "serialport";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const readingRouter = createTRPCRouter({
  create: publicProcedure.mutation(async ({ ctx, input }) => {
    console.log(input);

    // return ctx.prisma.readings.create({
    //   data: { input },
    // });
  }),
});
