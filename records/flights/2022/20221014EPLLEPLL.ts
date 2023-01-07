import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20221014EPLLEPLL",
    callsign: "BNI6D",
    name: "MEP class 1",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 9, 14, 12, 33).getTime(),
    arrival: new Date(2022, 9, 14, 14, 50).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 137,
    picTime: 0,
    dualTime: 137,
    landings: {
      day: 5,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "P06T",
      text: "Tecnam P-2006T",
    },
    identification: {
      modes: "48B048",
      registration: "SP-SID",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
    destination: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
  },
  track: [],
};
