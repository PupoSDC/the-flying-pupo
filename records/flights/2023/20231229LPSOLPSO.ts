import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231229LPSOLPSO",
    callsign: "RVP104",
    name: "NAV 5",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 11, 29, 8, 30).getTime(),
    arrival: new Date(2023, 11, 29, 11, 45).getTime(),
    singleEnginePistonTime: 195,
    multiEnginePistonTime: 0,
    picTime: 195,
    dualTime: 0,
    ifrTime: 0,
    nightTime: 0,
    landings: {
      day: 1,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "P208",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "48B048",
      registration: "CS-ECD",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656,
      },
    },
    destination: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656,
      },
    },
  },
  track: [],
};
