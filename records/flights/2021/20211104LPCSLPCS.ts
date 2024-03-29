import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20211104LPCSLPCS",
    callsign: "SEVAIR116",
    name: "UPRT class 2",
    description: "",
  },
  pilotLog: {
    departure: new Date(2021, 10, 4, 14, 35).getTime(),
    arrival: new Date(2021, 10, 4, 16, 15).getTime(),
    singleEnginePistonTime: 100,
    picTime: 0,
    dualTime: 100,
    landings: {
      day: 1,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "C152",
      text: "Cessna 152",
    },
    identification: {
      registration: "CS-DAT",
    },
  },
  airport: {
    origin: {
      name: "Cascais Municipal Aerodrome",
      code: "LPCS",
      position: {
        latitude: 38.725555,
        longitude: -9.355278,
      },
    },
    destination: {
      name: "Cascais Municipal Aerodrome",
      code: "LPCS",
      position: {
        latitude: 38.725555,
        longitude: -9.355278,
      },
    },
  },
  track: [],
};
