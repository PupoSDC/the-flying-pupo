import { z } from "zod";

export const flightRadarData = z.object({
    result: z.object({
        response: z.object({
            data: z.object({
                flight: z.object({
                    identification: z.object({
                        callsign: z.string(),
                    }),
                    aircraft: z.object({
                        model: z.object({
                            code: z.string(),
                            text: z.string(),
                        }),
                        identification: z.object({
                            modes: z.string(),
                            registration: z.string(),
                        }),
                    }),
                    airport: z.object({
                        origin: z.object({
                            code: z.object({
                                icao: z.string(),
                            }),
                            position: z.object({
                                latitude: z.number(),
                                longitude: z.number(),
                            }),
                        }),
                        destination: z.object({
                            code: z.object({
                                icao: z.string(),
                            }),
                            position: z.object({
                                latitude: z.number(),
                                longitude: z.number(),
                            }),
                        }),
                    }),
                    track: z.array(
                        z.object({
                            latitude: z.number(),
                            longitude: z.number(),
                            altitude: z.object({
                                feet: z.number(),
                            }),
                            speed: z.object({
                                kts: z.number(),
                            }),
                            verticalSpeed: z.object({
                                fpm: z.number(),
                            }),
                            heading: z.number(),
                            squawk: z.string(),
                            timestamp: z.number(),
                        }),
                    ),
                }),
            }),
        }),
    }),
});

export type FlightRadarData = z.infer<typeof flightRadarData>;