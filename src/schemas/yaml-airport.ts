import { z } from "zod";

export const yamlAirport = z.object({
  name: z.string(),
  code: z.string(),
  country: z.string(),
  lat: z.number(),
  lng: z.number(),
});

export type YamlAirport = z.infer<typeof yamlAirport>;
