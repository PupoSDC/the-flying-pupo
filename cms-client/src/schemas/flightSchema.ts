import { buildSchema } from "@camberi/firecms";
import { FlightTrackField } from "../components/FlightTrackField";

export const flightSchema = buildSchema({
    customId: false,
    name: 'Flight',
    defaultValues: {
        pilotLog: {
            dayLandings: 0,
            nightLandings: 0,
        },
        track: [],
    },
    properties: {
        identification: {
            title: "Identification",
            dataType: "map",
            properties: {
                name: {
                    title: 'Name',
                    dataType: 'string',
                    validation: { required: true },
                },
                description: {
                    title: 'Description',
                    dataType: 'string',
                },
                callsign: {
                    title: 'Code',
                    dataType: 'string',
                    validation: { required: true },
                },
            }
        },
        pilotLog: {
            title: "Pilot log",
            dataType: "map",
            properties: {
                departure: {
                    title: "departure",
                    dataType: "timestamp",
                    validation: { required: true }  
                },
                arrival: {
                    title: "arrival",
                    dataType: "timestamp",
                    validation: { required: true }  
                },
                singleEnginePistonTime: {
                    title: "singleEnginePistonTime",
                    dataType: "number",
                    validation: { required: false }
                },
                nightTime: {
                    title: "nightTime",
                    dataType: "number",
                    validation: { required: false }
                },
                ifrTime: {
                    title: "ifrTime",
                    dataType: "number",
                    validation: { required: false }
                },
                picTime: {
                    title: "picTime",
                    dataType: "number",
                    validation: { required: false }
                },
                dualTime: {
                    title: "dualTime",
                    dataType: "number",
                    validation: { required: false }
                },
                fiTime: {
                    title: "Flight Instructor Time",
                    dataType: "number",
                    validation: { required: false }
                },
                dayLandings: {
                    title: "Day Landings",
                    dataType: "number",
                    validation: { required: true },
                },
                nightLandings: {
                    title: "Night Landings",
                    dataType: "number",
                    validation: { required: true }
                },
            }
        },
        aircraft: {
            title: "Aircraft",
            dataType: "reference",
            collectionPath: "aircraft",
            validation: { required: true },
        },
        origin: {
            title: "Origin",
            dataType: "reference",
            collectionPath: "airport",
            validation: { required: true },
        },
        destination: {
            title: "Destination",
            dataType: "reference",
            collectionPath: "airport",
            validation: { required: true },
        },
        track: {
            title: "Track",
            dataType: "array",
            config: {
                field: FlightTrackField,
                preview: () => null,
            },
            of: {
                dataType: 'map',
                properties: {
                    latitude: {
                        title: "Latitude",
                        dataType: "number",
                        validation: { required: true },
                    },
                    longitude: {
                        title: "Longitudes",
                        dataType: "number",
                        validation: { required: true },
                    },
                    heading: {
                        title: "Heading",
                        dataType: "number",
                        validation: { required: true },
                    },
                    squawk: {
                        title: "Squawk",
                        dataType: "string",
                        validation: { required: true },
                    },
                    timestamp: {
                        title: "Timestamp",
                        dataType: "timestamp",
                        validation: { required: true },
                    },
                    speed: {
                        title: "Speed",
                        dataType: "map",
                        properties: {
                            kmh: {
                                dataType: "number",
                                title: "kmh",
                                validation: { required: true }
                            },
                            kts: {
                                dataType: "number",
                                title: "kts",
                                validation: { required: true }
                            },
                            mph: {
                                dataType: "number",
                                title: "mph",
                                validation: { required: true }
                            },
                        },
                    },
                    altitude: {
                        title: "Altitude",
                        dataType: "map",
                        properties: {
                            feet: {
                                dataType: "number",
                                title: "feet",
                                validation: { required: true }
                            },
                            meters: {
                                dataType: "number",
                                title: "meters",
                                validation: { required: true }
                            },
                        },
                    },
                    verticalSpeed: {
                        title: "Vertical Speed",
                        dataType: "map",
                        properties: {
                            fpm: {
                                dataType: "number",
                                title: "fpm",
                                validation: { required: true }
                            },
                            ms: {
                                dataType: "number",
                                title: "ms",
                                validation: { required: true }
                            },
                        },
                    }
                }
            }
        }

    }
});