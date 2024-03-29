import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220526LPVZLPBG",
    callsign: "CSAVC",
    name: "Second leg triangle 80NM",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 4, 26, 12, 15).getTime(),
    arrival: new Date(2022, 4, 26, 13, 35).getTime(),
    singleEnginePistonTime: 80,
    picTime: 80,
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
      name: "Viseu Airport",
      code: "LPVZ",
      position: {
        latitude: 40.725498,
        longitude: -7.88899,
      },
    },
    destination: {
      name: "Bragança Airport",
      code: "LPBG",
      position: {
        latitude: 41.8578,
        longitude: -6.70712,
      },
    },
  },
  track: [],
};
