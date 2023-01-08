import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20221229EPLLEPLL",
    callsign: "BNI6F",
    name: "First IFR flight",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 11, 29, 15, 11).getTime(),
    arrival: new Date(2022, 11, 29, 17, 18).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 127,
    picTime: 0,
    dualTime: 127,
    nightTime: 127,
    ifrTime: 127,
    landings: {
      day: 0,
      night: 1,
    },
  },
  aircraft: {
    model: {
      code: "P06T",
      text: "Tecnam P-2006T",
    },
    identification: {
      modes: "48B048",
      registration: "SP-IAF",
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
  track: [],
};
