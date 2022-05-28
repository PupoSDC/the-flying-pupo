import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220526LPCSLPCS",
    callsign: "CSAVC",
    name: "Familiarisation with C152",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 4, 26, 7, 30).getTime(),
    arrival: new Date(2022, 4, 26, 8, 30).getTime(),
    singleEnginePistonTime: 60,
    picTime: 0,
    dualTime: 60,
    landings: {
      day: 5,
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
