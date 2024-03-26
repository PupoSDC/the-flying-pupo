import { DateTime } from "luxon";
import { z } from "zod";

export const yamlFlight = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  callsign: z.string(),
  aircraft: z.string(),
  origin: z.string(),
  destination: z.string(),
  pilotLog: z.object({
    departure: z.string().transform((v) => DateTime.fromISO(v)),
    arrival: z.string().transform((v) => DateTime.fromISO(v)),
    singleEnginePistonTimeMinutes: z.number(),
    multiEnginePistonTimeMinutes: z.number(),
    multiPilotTimeMinutes: z.number(),
    picTimeMinutes: z.number(),
    dualTimeMinutes: z.number(),
    copilotTimeMinutes: z.number(),
    instructorTimeMinutes: z.number(),
    nightTimeMinutes: z.number(),
    ifrTimeMinutes: z.number(),
    landings: z.object({
      day: z.number(),
      night: z.number(),
    }),
    takeoffs: z.object({
      day: z.number(),
      night: z.number(),
    }),
  }),
  track: z.array(
    z.object({
      lat: z.number(),
      lng: z.number(),
      altitude: z.number(),
      speed: z.number(),
      verticalSpeed: z.number(),
      heading: z.number(),
      timestamp: z.number(),
      squawk: z.string(),
    }),
  ),
});

export type YamlFlight = z.infer<typeof yamlFlight>;
