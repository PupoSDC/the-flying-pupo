import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220526LPCSLPVZ",
    callsign: "CSAVC",
    name: "First leg triangle 131NM",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 4, 26, 9, 35).getTime(),
    arrival: new Date(2022, 4, 26, 11, 45).getTime(),
    singleEnginePistonTime: 130,
    picTime: 130,
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
      name: "Cascais Municipal Aerodrome",
      code: "LPCS",
      position: {
        latitude: 38.725555,
        longitude: -9.355278,
      },
    },
    destination: {
      name: "Viseu Airport",
      code: "LPVZ",
      position: {
        latitude: 40.725498,
        longitude: -7.88899,
      },
    },
  },
  track: [],
};
