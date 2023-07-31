import { z } from "zod";

export const weatherType = {
  longitude: z.number(),
  latitude: z.number(),
};
