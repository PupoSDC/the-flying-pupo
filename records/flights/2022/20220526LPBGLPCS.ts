import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220526LPBGLPCS",
    callsign: "CSAVC",
    name: "Third leg triangle 224NM: Total 448NM",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 4, 26, 16, 10).getTime(),
    arrival: new Date(2022, 4, 26, 18, 55).getTime(),
    singleEnginePistonTime: 165,
    picTime: 165,
    dualTime: 0,
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
      modes: "3D1229",
      registration: "CS-AVC",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Bragança Airport",
      code: "LPBG",
      position: {
        latitude: 41.8578,
        longitude: -6.70712,
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
  track: []
};
