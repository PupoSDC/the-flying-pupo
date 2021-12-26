import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20210612EDKBEDKB",
    callsign: "DEFPT",
    name: "Re-introduction to C152",
    description: "No flight log",
  },
  pilotLog: {
    departure: new Date(2021, 5, 12, 10, 31).getTime(),
    arrival: new Date(2021, 5, 12, 11, 33).getTime(),
    singleEnginePistonTime: 62,
    picTime: 0,
    dualTime: 62,
    landings: {
      day: 3,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "C152",
      text: "Cessna 152",
    },
    identification: {
      modes: "3D1375",
      registration: "D-EFPT",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
      },
    },
    destination: {
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
      },
    },
  },
  track: [],
};
