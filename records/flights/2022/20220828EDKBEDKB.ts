import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220828EDKBEDKB",
    callsign: "DEFCZ",
    name: "Traffic pattern with horrible landings :(",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 7, 28, 12, 40).getTime(),
    arrival: new Date(2022, 7, 28, 13, 20).getTime(),
    singleEnginePistonTime: 40,
    picTime: 40,
    dualTime: 0,
    landings: {
      day: 4,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "P208",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "3D3720",
      registration: "D-EFCZ",
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
