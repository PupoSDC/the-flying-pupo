import { z } from "zod";

export const yamlAircraft = z.object({
  model: z.string(),
  code: z.string(),
  registration: z.string(),
  serialNo: z.string(),
  modes: z.string(),
});

export type YamlAircraft = z.infer<typeof yamlAircraft>;
