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
number:  {
    default: string;
    };
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
code: Code;
position: Position;
timezone: Timezone;
}

export interface Position {
latitude: number;
longitude: number;
country: Country;
region: Region;
}

export interface Country {
name: string;
code: string;
id: number;
}

export interface Region {
city: string;
}
export interface Timezone {
name: string;
offset: number;
abbr: string;
abbrName: string;
isDst: boolean;
}
export interface Median {
time?: null;
delay?: null;
timestamp?: null;
}
export interface TrackEntity {
latitude: number;
longitude: number;
altitude: Altitude;
speed: Speed;
verticalSpeed: VerticalSpeed;
heading: number;
squawk: string;
timestamp: number;
ems?: null;
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
export interface Availability {
ems: boolean;
}
  