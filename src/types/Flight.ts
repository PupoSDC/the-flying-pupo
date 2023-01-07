export type TimeInMillis = number;

export type RawFlight = {
  identification: Identification;
  pilotLog: PilotLog;
  aircraft: Aircraft;
  airport: {
    origin: Airport;
    destination: Airport;
  };
  track: Array<TrackEntity>;
};

export type Flight = RawFlight & {
  tripDistance: number;
  tripDistanceCovered: number;
};

export type Identification = {
  id: string;
  name: string;
  description: string;
  callsign: string;
};

export type PilotLog = {
  departure: TimeInMillis;
  arrival: TimeInMillis;
  singleEnginePistonTime?: number;
  multiEnginePistonTime?: number;
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

export type FlightLogCarryOver = Required<
  Omit<PilotLog, "departure" | "arrival">
> & {
    totalTime?: number;
};

export interface Aircraft {
  model: {
    code: string;
    text: string;
  };
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
  region?: {
    city: string;
  };
};

export interface Country {
  name: string;
  code: string;
  id: number;
}

export type TrackEntity = {
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
