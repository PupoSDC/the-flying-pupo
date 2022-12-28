import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20221214EPLLEPLL",
    callsign: "BNI8TX",
    name: "VFR refresher with Matthieu Maes",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 11, 14, 14, 12).getTime(),
    arrival: new Date(2022, 11, 14, 15, 2).getTime(),
    singleEnginePistonTime: 50,
    multiEnginePistonTime: 0,
    picTime: 50,
    dualTime: 0,
    nightTime: 0,
    landings: {
      day: 4,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "P06T",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "3D3720",
      registration: "SP-ELT",
      serialNo: "N/A",
    },
  },
  airport: {
    destination: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
    origin: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
  },
  track: []
};
