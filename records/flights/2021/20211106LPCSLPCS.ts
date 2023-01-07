import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20211106LPCSLPCS",
    callsign: "SEVAIR116",
    name: "UPRT class 3",
    description: "",
  },
  pilotLog: {
    departure: new Date(2021, 10, 6, 14, 5).getTime(),
    arrival: new Date(2021, 10, 6, 15, 25).getTime(),
    singleEnginePistonTime: 80,
    picTime: 0,
    dualTime: 80,
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
    identification: {},
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
