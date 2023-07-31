import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";
import { weatherType } from "@/types";

export const weatherRouter = createTRPCRouter({
  getweather: publicProcedure
    .input(z.object({ longitude: z.number(), latitude: z.number() }))
    .query(async ({ ctx, input }) => {
      const weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather/?lat=${input.latitude}&lon=${input.longitude}&units=metric&APPID=${process.env.WEATHER_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });

      console.log("WEATHER", weather);
      return weather;
      //   return await ctx.prisma.power.findMany();
    }),
});
