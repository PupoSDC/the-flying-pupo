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
    dayLandings: number;
    nightLandings: number;
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
    origin: Airport;
    destination: Airport;
    track: Array<TrackEntry>;
};

