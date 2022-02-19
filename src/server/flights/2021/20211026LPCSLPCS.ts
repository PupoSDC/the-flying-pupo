import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20211026LPCSLPCS",
    callsign: "SEVAIR116",
    name: "UPRT class 1",
    description: "",
  },
  pilotLog: {
    departure: new Date(2021, 9, 26, 9, 25).getTime(),
    arrival: new Date(2021, 9, 26, 10, 55).getTime(),
    singleEnginePistonTime: 90,
    picTime: 0,
    dualTime: 90,
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
