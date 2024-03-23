import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20240305LPSOLPCS",
    callsign: "RVP102",
    name: "NAV 18",
    description: "",
  },
  pilotLog: {
    departure: new Date(2024, 2, 5, 15, 10).getTime(),
    arrival: new Date(2024, 2, 5, 16, 35).getTime(),
    singleEnginePistonTime: 85,
    multiEnginePistonTime: 0,
    picTime: 85,
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
      registration: "CS-DHT",
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
