import { Aircraft } from "./Aircraft";
import { Airport } from "./Airport";

export type PilotLogentry = {
    departure: Date;
    arrival: Date;
    singleEnginePistonTime?: number;
    nightTime?: number;
    ifrTime?: number;
    picTime?: number;
    dualTime?: number;
    fiTime?: number;
    landings: {
        day: number;
        night: number;
    };
};

export interface Altitude {
    feet: number;
    meters: number;
}

export interface Speed {
    kmh: number;
    kts: number;
    mph: number;
}

export interface VerticalSpeed {
    fpm: number;
    ms: number;
}

export type TrackEntry = {
    latitude: number;
    longitude: number;
    altitude: Altitude;
    speed: Speed;
    verticalSpeed: VerticalSpeed;
    heading: number;
    squawk: string;

    /** In seconds */
    timestamp: number;
    ems?: unknown;
};

export type Flight = {
    identification: {
        id: string;
        name: string;
        description: string;
        callsign: string;
    }
    pilotLog: PilotLogentry;
    aircraft: Aircraft;
    airport: {
        origin: Airport;
        destination: Airport;
    };
    track: Array<TrackEntry>;
};

