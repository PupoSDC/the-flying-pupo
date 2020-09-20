export type Flight = {
    identification: Identification;
    aircraft: Aircraft;
    airport: {
        origin: Airport;
        destination: Airport;
    }
    track: Array<TrackEntity>;
  }

export type Identification = {
    id: string;
    name: string,
    description: string,
    callsign: string;
}

export interface Aircraft {
    model: {
        code: string;
        text: string;
    },
    identification: {
        modes?: string;
        registration?: string;
        serialNo?: string;
    };
}
 
export interface Airport {
    name: string;
    code: string;
    position: Position;
}

export type Position = {
    latitude: number;
    longitude: number;
    country?: Country;
    region?: Region;
}

export interface Country {
    name: string;
    code: string;
    id: number;
}

export interface Region {
    city: string;
}

export type TrackEntity = {
    latitude: number;
    longitude: number;
    altitude: Altitude;
    speed: Speed;
    verticalSpeed: VerticalSpeed;
    heading: number;
    squawk: string;
    timestamp: number;
    ems?: unknown;
}

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

  