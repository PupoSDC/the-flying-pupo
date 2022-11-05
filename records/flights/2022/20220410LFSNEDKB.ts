import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220410LFSNEDKB",
    callsign: "DETCY",
    name: "Cross Country from LFSN",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 3, 10, 12, 0).getTime(),
    arrival: new Date(2022, 3, 10, 14, 20).getTime(),
    singleEnginePistonTime: 140,
    picTime: 140,
    dualTime: 0,
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
      modes: "3D1229",
      registration: "D-ETCY",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Nancy Essey Airport",
      code: "LFSN",
      position: {
        latitude: 48.692081,
        "longitude": 6.22605
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
  track: [
    {
      "latitude": 48.70821,
      "longitude": 6.244354,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 25,
      "squawk": "0",
      "timestamp": 1649592528,
      "ems": null
    },
    {
      "latitude": 48.710724,
      "longitude": 6.246079,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 25,
      "squawk": "0",
      "timestamp": 1649592536,
      "ems": null
    },
    {
      "latitude": 48.712029,
      "longitude": 6.246956,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1649592540,
      "ems": null
    },
    {
      "latitude": 48.714218,
      "longitude": 6.248547,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1649592548,
      "ems": null
    },
    {
      "latitude": 48.718506,
      "longitude": 6.251854,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1649592564,
      "ems": null
    },
    {
      "latitude": 48.721386,
      "longitude": 6.253967,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1649592573,
      "ems": null
    },
    {
      "latitude": 48.723621,
      "longitude": 6.255558,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1649592580,
      "ems": null
    },
    {
      "latitude": 48.724091,
      "longitude": 6.25601,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1649592581,
      "ems": null
    },
    {
      "latitude": 48.725143,
      "longitude": 6.257277,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1649592586,
      "ems": null
    },
    {
      "latitude": 48.725807,
      "longitude": 6.258666,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1649592588,
      "ems": null
    },
    {
      "latitude": 48.726379,
      "longitude": 6.260728,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1649592592,
      "ems": null
    },
    {
      "latitude": 48.7267,
      "longitude": 6.262348,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1649592595,
      "ems": null
    },
    {
      "latitude": 48.726974,
      "longitude": 6.263968,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1649592598,
      "ems": null
    },
    {
      "latitude": 48.727253,
      "longitude": 6.265821,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1649592601,
      "ems": null
    },
    {
      "latitude": 48.727486,
      "longitude": 6.267411,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1649592604,
      "ems": null
    },
    {
      "latitude": 48.727764,
      "longitude": 6.269362,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1649592607,
      "ems": null
    },
    {
      "latitude": 48.728043,
      "longitude": 6.271387,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1649592610,
      "ems": null
    },
    {
      "latitude": 48.728184,
      "longitude": 6.273121,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1649592613,
      "ems": null
    },
    {
      "latitude": 48.728302,
      "longitude": 6.275024,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1649592616,
      "ems": null
    },
    {
      "latitude": 48.728367,
      "longitude": 6.276735,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1649592619,
      "ems": null
    },
    {
      "latitude": 48.728462,
      "longitude": 6.278759,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1649592622,
      "ems": null
    },
    {
      "latitude": 48.728485,
      "longitude": 6.280518,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1649592625,
      "ems": null
    },
    {
      "latitude": 48.728508,
      "longitude": 6.282662,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1649592628,
      "ems": null
    },
    {
      "latitude": 48.728508,
      "longitude": 6.284397,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1649592631,
      "ems": null
    },
    {
      "latitude": 48.728462,
      "longitude": 6.286203,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1649592634,
      "ems": null
    },
    {
      "latitude": 48.728416,
      "longitude": 6.288155,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1649592637,
      "ems": null
    },
    {
      "latitude": 48.728367,
      "longitude": 6.290396,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1649592640,
      "ems": null
    },
    {
      "latitude": 48.728256,
      "longitude": 6.292419,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1649592643,
      "ems": null
    },
    {
      "latitude": 48.728134,
      "longitude": 6.294226,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1649592646,
      "ems": null
    },
    {
      "latitude": 48.727997,
      "longitude": 6.296322,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1649592649,
      "ems": null
    },
    {
      "latitude": 48.72781,
      "longitude": 6.298274,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1649592652,
      "ems": null
    },
    {
      "latitude": 48.727661,
      "longitude": 6.300096,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1649592655,
      "ems": null
    },
    {
      "latitude": 48.727478,
      "longitude": 6.301927,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1649592659,
      "ems": null
    },
    {
      "latitude": 48.727249,
      "longitude": 6.303758,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1649592662,
      "ems": null
    },
    {
      "latitude": 48.72702,
      "longitude": 6.305863,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1649592665,
      "ems": null
    },
    {
      "latitude": 48.726788,
      "longitude": 6.30767,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1649592668,
      "ems": null
    },
    {
      "latitude": 48.726555,
      "longitude": 6.309405,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1649592671,
      "ems": null
    },
    {
      "latitude": 48.726322,
      "longitude": 6.311067,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1649592674,
      "ems": null
    },
    {
      "latitude": 48.725994,
      "longitude": 6.312946,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1649592677,
      "ems": null
    },
    {
      "latitude": 48.725555,
      "longitude": 6.314533,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1649592680,
      "ems": null
    },
    {
      "latitude": 48.724922,
      "longitude": 6.316416,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1649592683,
      "ems": null
    },
    {
      "latitude": 48.724457,
      "longitude": 6.318079,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1649592686,
      "ems": null
    },
    {
      "latitude": 48.723907,
      "longitude": 6.319815,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1649592689,
      "ems": null
    },
    {
      "latitude": 48.723343,
      "longitude": 6.321331,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1649592692,
      "ems": null
    },
    {
      "latitude": 48.722763,
      "longitude": 6.322914,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1649592695,
      "ems": null
    },
    {
      "latitude": 48.722271,
      "longitude": 6.324294,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1649592698,
      "ems": null
    },
    {
      "latitude": 48.721573,
      "longitude": 6.325871,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 121,
      "squawk": "4710",
      "timestamp": 1649592701,
      "ems": null
    },
    {
      "latitude": 48.721062,
      "longitude": 6.327185,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "4710",
      "timestamp": 1649592704,
      "ems": null
    },
    {
      "latitude": 48.720383,
      "longitude": 6.328618,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 125,
      "squawk": "4710",
      "timestamp": 1649592707,
      "ems": null
    },
    {
      "latitude": 48.719662,
      "longitude": 6.330077,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 127,
      "squawk": "4710",
      "timestamp": 1649592710,
      "ems": null
    },
    {
      "latitude": 48.718872,
      "longitude": 6.331522,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 128,
      "squawk": "4710",
      "timestamp": 1649592713,
      "ems": null
    },
    {
      "latitude": 48.718185,
      "longitude": 6.332843,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 130,
      "squawk": "4710",
      "timestamp": 1649592716,
      "ems": null
    },
    {
      "latitude": 48.717316,
      "longitude": 6.334252,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 132,
      "squawk": "4710",
      "timestamp": 1649592720,
      "ems": null
    },
    {
      "latitude": 48.716583,
      "longitude": 6.33552,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 131,
      "squawk": "4710",
      "timestamp": 1649592723,
      "ems": null
    },
    {
      "latitude": 48.715847,
      "longitude": 6.336798,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 131,
      "squawk": "4710",
      "timestamp": 1649592726,
      "ems": null
    },
    {
      "latitude": 48.71521,
      "longitude": 6.337844,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 132,
      "squawk": "4710",
      "timestamp": 1649592728,
      "ems": null
    },
    {
      "latitude": 48.714355,
      "longitude": 6.339256,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 132,
      "squawk": "4710",
      "timestamp": 1649592732,
      "ems": null
    },
    {
      "latitude": 48.713703,
      "longitude": 6.34034,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 132,
      "squawk": "4710",
      "timestamp": 1649592734,
      "ems": null
    },
    {
      "latitude": 48.71283,
      "longitude": 6.341787,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 132,
      "squawk": "4710",
      "timestamp": 1649592738,
      "ems": null
    },
    {
      "latitude": 48.712124,
      "longitude": 6.342942,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 133,
      "squawk": "4710",
      "timestamp": 1649592741,
      "ems": null
    },
    {
      "latitude": 48.711365,
      "longitude": 6.344041,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 133,
      "squawk": "4710",
      "timestamp": 1649592744,
      "ems": null
    },
    {
      "latitude": 48.709888,
      "longitude": 6.346484,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 132,
      "squawk": "4710",
      "timestamp": 1649592750,
      "ems": null
    },
    {
      "latitude": 48.708443,
      "longitude": 6.348941,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 130,
      "squawk": "4710",
      "timestamp": 1649592756,
      "ems": null
    },
    {
      "latitude": 48.707047,
      "longitude": 6.351471,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 127,
      "squawk": "4710",
      "timestamp": 1649592762,
      "ems": null
    },
    {
      "latitude": 48.706394,
      "longitude": 6.352989,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 118,
      "squawk": "4710",
      "timestamp": 1649592765,
      "ems": null
    },
    {
      "latitude": 48.705929,
      "longitude": 6.354434,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 112,
      "squawk": "4710",
      "timestamp": 1649592768,
      "ems": null
    },
    {
      "latitude": 48.705551,
      "longitude": 6.356295,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 106,
      "squawk": "4710",
      "timestamp": 1649592771,
      "ems": null
    },
    {
      "latitude": 48.705322,
      "longitude": 6.358056,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 98,
      "squawk": "4710",
      "timestamp": 1649592774,
      "ems": null
    },
    {
      "latitude": 48.70528,
      "longitude": 6.359494,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 92,
      "squawk": "4710",
      "timestamp": 1649592777,
      "ems": null
    },
    {
      "latitude": 48.705276,
      "longitude": 6.361366,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "4710",
      "timestamp": 1649592780,
      "ems": null
    },
    {
      "latitude": 48.705326,
      "longitude": 6.363542,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 86,
      "squawk": "4710",
      "timestamp": 1649592783,
      "ems": null
    },
    {
      "latitude": 48.705505,
      "longitude": 6.365239,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 78,
      "squawk": "4710",
      "timestamp": 1649592786,
      "ems": null
    },
    {
      "latitude": 48.705978,
      "longitude": 6.367156,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "4710",
      "timestamp": 1649592789,
      "ems": null
    },
    {
      "latitude": 48.706421,
      "longitude": 6.368901,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "4710",
      "timestamp": 1649592792,
      "ems": null
    },
    {
      "latitude": 48.706833,
      "longitude": 6.370521,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "4710",
      "timestamp": 1649592795,
      "ems": null
    },
    {
      "latitude": 48.707279,
      "longitude": 6.372143,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "4710",
      "timestamp": 1649592798,
      "ems": null
    },
    {
      "latitude": 48.707699,
      "longitude": 6.373805,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 69,
      "squawk": "4710",
      "timestamp": 1649592801,
      "ems": null
    },
    {
      "latitude": 48.708069,
      "longitude": 6.375592,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649592804,
      "ems": null
    },
    {
      "latitude": 48.708443,
      "longitude": 6.377275,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649592807,
      "ems": null
    },
    {
      "latitude": 48.708862,
      "longitude": 6.379226,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649592810,
      "ems": null
    },
    {
      "latitude": 48.709236,
      "longitude": 6.380888,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649592813,
      "ems": null
    },
    {
      "latitude": 48.709763,
      "longitude": 6.383479,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 73,
      "squawk": "4710",
      "timestamp": 1649592818,
      "ems": null
    },
    {
      "latitude": 48.710266,
      "longitude": 6.386155,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649592823,
      "ems": null
    },
    {
      "latitude": 48.710541,
      "longitude": 6.387899,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649592825,
      "ems": null
    },
    {
      "latitude": 48.710861,
      "longitude": 6.389606,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649592829,
      "ems": null
    },
    {
      "latitude": 48.711422,
      "longitude": 6.392959,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649592834,
      "ems": null
    },
    {
      "latitude": 48.711983,
      "longitude": 6.396284,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649592841,
      "ems": null
    },
    {
      "latitude": 48.712509,
      "longitude": 6.399466,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649592847,
      "ems": null
    },
    {
      "latitude": 48.712959,
      "longitude": 6.402572,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649592853,
      "ems": null
    },
    {
      "latitude": 48.713425,
      "longitude": 6.40568,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649592858,
      "ems": null
    },
    {
      "latitude": 48.71389,
      "longitude": 6.409005,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649592865,
      "ems": null
    },
    {
      "latitude": 48.71434,
      "longitude": 6.411931,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649592871,
      "ems": null
    },
    {
      "latitude": 48.714844,
      "longitude": 6.414959,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649592877,
      "ems": null
    },
    {
      "latitude": 48.715336,
      "longitude": 6.418256,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649592883,
      "ems": null
    },
    {
      "latitude": 48.715714,
      "longitude": 6.421368,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 80,
      "squawk": "4710",
      "timestamp": 1649592889,
      "ems": null
    },
    {
      "latitude": 48.71608,
      "longitude": 6.4244,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649592895,
      "ems": null
    },
    {
      "latitude": 48.71645,
      "longitude": 6.427725,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649592901,
      "ems": null
    },
    {
      "latitude": 48.716949,
      "longitude": 6.430946,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649592907,
      "ems": null
    },
    {
      "latitude": 48.717289,
      "longitude": 6.432712,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649592910,
      "ems": null
    },
    {
      "latitude": 48.717663,
      "longitude": 6.434302,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 72,
      "squawk": "4710",
      "timestamp": 1649592913,
      "ems": null
    },
    {
      "latitude": 48.717941,
      "longitude": 6.43582,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 72,
      "squawk": "4710",
      "timestamp": 1649592916,
      "ems": null
    },
    {
      "latitude": 48.718277,
      "longitude": 6.437355,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 73,
      "squawk": "4710",
      "timestamp": 1649592919,
      "ems": null
    },
    {
      "latitude": 48.718594,
      "longitude": 6.438856,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 72,
      "squawk": "4710",
      "timestamp": 1649592922,
      "ems": null
    },
    {
      "latitude": 48.718964,
      "longitude": 6.440662,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649592926,
      "ems": null
    },
    {
      "latitude": 48.71933,
      "longitude": 6.442002,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649592928,
      "ems": null
    },
    {
      "latitude": 48.719944,
      "longitude": 6.444638,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649592933,
      "ems": null
    },
    {
      "latitude": 48.720921,
      "longitude": 6.448613,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "4710",
      "timestamp": 1649592940,
      "ems": null
    },
    {
      "latitude": 48.721806,
      "longitude": 6.452227,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 68,
      "squawk": "4710",
      "timestamp": 1649592947,
      "ems": null
    },
    {
      "latitude": 48.722672,
      "longitude": 6.455665,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649592953,
      "ems": null
    },
    {
      "latitude": 48.72348,
      "longitude": 6.459238,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649592959,
      "ems": null
    },
    {
      "latitude": 48.724552,
      "longitude": 6.46437,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 73,
      "squawk": "4710",
      "timestamp": 1649592967,
      "ems": null
    },
    {
      "latitude": 48.724876,
      "longitude": 6.466249,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649592971,
      "ems": null
    },
    {
      "latitude": 48.725235,
      "longitude": 6.46813,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649592974,
      "ems": null
    },
    {
      "latitude": 48.725574,
      "longitude": 6.47008,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649592977,
      "ems": null
    },
    {
      "latitude": 48.725922,
      "longitude": 6.472074,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649592980,
      "ems": null
    },
    {
      "latitude": 48.726196,
      "longitude": 6.473976,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649592983,
      "ems": null
    },
    {
      "latitude": 48.726505,
      "longitude": 6.47579,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649592986,
      "ems": null
    },
    {
      "latitude": 48.726788,
      "longitude": 6.477741,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649592989,
      "ems": null
    },
    {
      "latitude": 48.727066,
      "longitude": 6.47962,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649592992,
      "ems": null
    },
    {
      "latitude": 48.727341,
      "longitude": 6.481652,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649592995,
      "ems": null
    },
    {
      "latitude": 48.727856,
      "longitude": 6.485403,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649593001,
      "ems": null
    },
    {
      "latitude": 48.728088,
      "longitude": 6.487282,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649593004,
      "ems": null
    },
    {
      "latitude": 48.728256,
      "longitude": 6.489117,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 81,
      "squawk": "4710",
      "timestamp": 1649593007,
      "ems": null
    },
    {
      "latitude": 48.728439,
      "longitude": 6.490878,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 81,
      "squawk": "4710",
      "timestamp": 1649593010,
      "ems": null
    },
    {
      "latitude": 48.728622,
      "longitude": 6.49299,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "4710",
      "timestamp": 1649593013,
      "ems": null
    },
    {
      "latitude": 48.728786,
      "longitude": 6.494799,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "4710",
      "timestamp": 1649593016,
      "ems": null
    },
    {
      "latitude": 48.729206,
      "longitude": 6.498558,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649593022,
      "ems": null
    },
    {
      "latitude": 48.730091,
      "longitude": 6.504051,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649593031,
      "ems": null
    },
    {
      "latitude": 48.730415,
      "longitude": 6.506002,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649593034,
      "ems": null
    },
    {
      "latitude": 48.730698,
      "longitude": 6.507737,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649593037,
      "ems": null
    },
    {
      "latitude": 48.730957,
      "longitude": 6.50954,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649593041,
      "ems": null
    },
    {
      "latitude": 48.731232,
      "longitude": 6.510949,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649593043,
      "ems": null
    },
    {
      "latitude": 48.731781,
      "longitude": 6.514541,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649593050,
      "ems": null
    },
    {
      "latitude": 48.732281,
      "longitude": 6.517928,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 78,
      "squawk": "4710",
      "timestamp": 1649593056,
      "ems": null
    },
    {
      "latitude": 48.732788,
      "longitude": 6.521231,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649593062,
      "ems": null
    },
    {
      "latitude": 48.733887,
      "longitude": 6.527639,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649593073,
      "ems": null
    },
    {
      "latitude": 48.73439,
      "longitude": 6.530527,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649593078,
      "ems": null
    },
    {
      "latitude": 48.735443,
      "longitude": 6.53607,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "4710",
      "timestamp": 1649593089,
      "ems": null
    },
    {
      "latitude": 48.735901,
      "longitude": 6.538696,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 78,
      "squawk": "4710",
      "timestamp": 1649593094,
      "ems": null
    },
    {
      "latitude": 48.735947,
      "longitude": 6.541513,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "4710",
      "timestamp": 1649593099,
      "ems": null
    },
    {
      "latitude": 48.735909,
      "longitude": 6.54431,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "4710",
      "timestamp": 1649593104,
      "ems": null
    },
    {
      "latitude": 48.735992,
      "longitude": 6.547147,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "4710",
      "timestamp": 1649593109,
      "ems": null
    },
    {
      "latitude": 48.736084,
      "longitude": 6.550176,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "4710",
      "timestamp": 1649593115,
      "ems": null
    },
    {
      "latitude": 48.736191,
      "longitude": 6.552911,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "4710",
      "timestamp": 1649593120,
      "ems": null
    },
    {
      "latitude": 48.736328,
      "longitude": 6.556019,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "4710",
      "timestamp": 1649593125,
      "ems": null
    },
    {
      "latitude": 48.736561,
      "longitude": 6.559127,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "4710",
      "timestamp": 1649593130,
      "ems": null
    },
    {
      "latitude": 48.736954,
      "longitude": 6.564895,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "4710",
      "timestamp": 1649593141,
      "ems": null
    },
    {
      "latitude": 48.737213,
      "longitude": 6.567801,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "4710",
      "timestamp": 1649593146,
      "ems": null
    },
    {
      "latitude": 48.737957,
      "longitude": 6.573944,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649593157,
      "ems": null
    },
    {
      "latitude": 48.738422,
      "longitude": 6.576835,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649593162,
      "ems": null
    },
    {
      "latitude": 48.738888,
      "longitude": 6.579799,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649593167,
      "ems": null
    },
    {
      "latitude": 48.739449,
      "longitude": 6.582762,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649593172,
      "ems": null
    },
    {
      "latitude": 48.739914,
      "longitude": 6.585436,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649593177,
      "ems": null
    },
    {
      "latitude": 48.740238,
      "longitude": 6.588689,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "4710",
      "timestamp": 1649593182,
      "ems": null
    },
    {
      "latitude": 48.740005,
      "longitude": 6.591869,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 98,
      "squawk": "4710",
      "timestamp": 1649593187,
      "ems": null
    },
    {
      "latitude": 48.739792,
      "longitude": 6.595037,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "4710",
      "timestamp": 1649593193,
      "ems": null
    },
    {
      "latitude": 48.739635,
      "longitude": 6.59794,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 94,
      "squawk": "4710",
      "timestamp": 1649593198,
      "ems": null
    },
    {
      "latitude": 48.739449,
      "longitude": 6.601337,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 95,
      "squawk": "4710",
      "timestamp": 1649593203,
      "ems": null
    },
    {
      "latitude": 48.739216,
      "longitude": 6.604229,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 95,
      "squawk": "4710",
      "timestamp": 1649593208,
      "ems": null
    },
    {
      "latitude": 48.738796,
      "longitude": 6.610517,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 95,
      "squawk": "4710",
      "timestamp": 1649593219,
      "ems": null
    },
    {
      "latitude": 48.738373,
      "longitude": 6.616727,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "4710",
      "timestamp": 1649593229,
      "ems": null
    },
    {
      "latitude": 48.738144,
      "longitude": 6.619545,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 96,
      "squawk": "4710",
      "timestamp": 1649593234,
      "ems": null
    },
    {
      "latitude": 48.737595,
      "longitude": 6.625812,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 98,
      "squawk": "4710",
      "timestamp": 1649593245,
      "ems": null
    },
    {
      "latitude": 48.737076,
      "longitude": 6.632056,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 97,
      "squawk": "4710",
      "timestamp": 1649593255,
      "ems": null
    },
    {
      "latitude": 48.736771,
      "longitude": 6.635108,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 97,
      "squawk": "4710",
      "timestamp": 1649593260,
      "ems": null
    },
    {
      "latitude": 48.736469,
      "longitude": 6.639501,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 94,
      "squawk": "4710",
      "timestamp": 1649593267,
      "ems": null
    },
    {
      "latitude": 48.736359,
      "longitude": 6.643066,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 93,
      "squawk": "4710",
      "timestamp": 1649593274,
      "ems": null
    },
    {
      "latitude": 48.736267,
      "longitude": 6.645602,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 91,
      "squawk": "4710",
      "timestamp": 1649593277,
      "ems": null
    },
    {
      "latitude": 48.736221,
      "longitude": 6.651658,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "4710",
      "timestamp": 1649593286,
      "ems": null
    },
    {
      "latitude": 48.736267,
      "longitude": 6.654898,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "4710",
      "timestamp": 1649593292,
      "ems": null
    },
    {
      "latitude": 48.736359,
      "longitude": 6.658067,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "4710",
      "timestamp": 1649593297,
      "ems": null
    },
    {
      "latitude": 48.736404,
      "longitude": 6.660743,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "4710",
      "timestamp": 1649593301,
      "ems": null
    },
    {
      "latitude": 48.735958,
      "longitude": 6.664148,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 107,
      "squawk": "4710",
      "timestamp": 1649593307,
      "ems": null
    },
    {
      "latitude": 48.735168,
      "longitude": 6.667293,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "4710",
      "timestamp": 1649593312,
      "ems": null
    },
    {
      "latitude": 48.734512,
      "longitude": 6.670074,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 108,
      "squawk": "4710",
      "timestamp": 1649593317,
      "ems": null
    },
    {
      "latitude": 48.733887,
      "longitude": 6.673138,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 105,
      "squawk": "4710",
      "timestamp": 1649593323,
      "ems": null
    },
    {
      "latitude": 48.733429,
      "longitude": 6.675955,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "4710",
      "timestamp": 1649593328,
      "ems": null
    },
    {
      "latitude": 48.733109,
      "longitude": 6.679194,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "4710",
      "timestamp": 1649593333,
      "ems": null
    },
    {
      "latitude": 48.732788,
      "longitude": 6.682152,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 99,
      "squawk": "4710",
      "timestamp": 1649593338,
      "ems": null
    },
    {
      "latitude": 48.732513,
      "longitude": 6.684675,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 99,
      "squawk": "4710",
      "timestamp": 1649593343,
      "ems": null
    },
    {
      "latitude": 48.732193,
      "longitude": 6.687645,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 100,
      "squawk": "4710",
      "timestamp": 1649593349,
      "ems": null
    },
    {
      "latitude": 48.731487,
      "longitude": 6.693709,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 99,
      "squawk": "4710",
      "timestamp": 1649593359,
      "ems": null
    },
    {
      "latitude": 48.73114,
      "longitude": 6.696871,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 98,
      "squawk": "4710",
      "timestamp": 1649593364,
      "ems": null
    },
    {
      "latitude": 48.730957,
      "longitude": 6.699618,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "4710",
      "timestamp": 1649593369,
      "ems": null
    },
    {
      "latitude": 48.730881,
      "longitude": 6.702744,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 90,
      "squawk": "4710",
      "timestamp": 1649593375,
      "ems": null
    },
    {
      "latitude": 48.730881,
      "longitude": 6.70578,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "4710",
      "timestamp": 1649593380,
      "ems": null
    },
    {
      "latitude": 48.730911,
      "longitude": 6.708844,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 87,
      "squawk": "4710",
      "timestamp": 1649593385,
      "ems": null
    },
    {
      "latitude": 48.731022,
      "longitude": 6.711996,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "4710",
      "timestamp": 1649593390,
      "ems": null
    },
    {
      "latitude": 48.731163,
      "longitude": 6.715104,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 85,
      "squawk": "4710",
      "timestamp": 1649593395,
      "ems": null
    },
    {
      "latitude": 48.73135,
      "longitude": 6.71814,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "4710",
      "timestamp": 1649593400,
      "ems": null
    },
    {
      "latitude": 48.731506,
      "longitude": 6.720816,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 83,
      "squawk": "4710",
      "timestamp": 1649593405,
      "ems": null
    },
    {
      "latitude": 48.731583,
      "longitude": 6.721681,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649593411,
      "ems": null
    },
    {
      "latitude": 48.732281,
      "longitude": 6.727174,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649593416,
      "ems": null
    },
    {
      "latitude": 48.732651,
      "longitude": 6.730138,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649593421,
      "ems": null
    },
    {
      "latitude": 48.733063,
      "longitude": 6.73314,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649593427,
      "ems": null
    },
    {
      "latitude": 48.733887,
      "longitude": 6.735816,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "4710",
      "timestamp": 1649593432,
      "ems": null
    },
    {
      "latitude": 48.734665,
      "longitude": 6.737154,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 48,
      "squawk": "4710",
      "timestamp": 1649593437,
      "ems": null
    },
    {
      "latitude": 48.736588,
      "longitude": 6.740042,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 43,
      "squawk": "4710",
      "timestamp": 1649593442,
      "ems": null
    },
    {
      "latitude": 48.737228,
      "longitude": 6.740957,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649593446,
      "ems": null
    },
    {
      "latitude": 48.739449,
      "longitude": 6.744232,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "4710",
      "timestamp": 1649593453,
      "ems": null
    },
    {
      "latitude": 48.740753,
      "longitude": 6.745957,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "4710",
      "timestamp": 1649593457,
      "ems": null
    },
    {
      "latitude": 48.742382,
      "longitude": 6.74828,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649593463,
      "ems": null
    },
    {
      "latitude": 48.745193,
      "longitude": 6.751944,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649593473,
      "ems": null
    },
    {
      "latitude": 48.746658,
      "longitude": 6.753563,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 34,
      "squawk": "4710",
      "timestamp": 1649593478,
      "ems": null
    },
    {
      "latitude": 48.749783,
      "longitude": 6.757604,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649593489,
      "ems": null
    },
    {
      "latitude": 48.750824,
      "longitude": 6.759127,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649593492,
      "ems": null
    },
    {
      "latitude": 48.75267,
      "longitude": 6.761796,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649593499,
      "ems": null
    },
    {
      "latitude": 48.754211,
      "longitude": 6.764127,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649593505,
      "ems": null
    },
    {
      "latitude": 48.757233,
      "longitude": 6.767723,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649593515,
      "ems": null
    },
    {
      "latitude": 48.759838,
      "longitude": 6.770903,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649593524,
      "ems": null
    },
    {
      "latitude": 48.763374,
      "longitude": 6.775673,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "4710",
      "timestamp": 1649593536,
      "ems": null
    },
    {
      "latitude": 48.764923,
      "longitude": 6.77779,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649593541,
      "ems": null
    },
    {
      "latitude": 48.767761,
      "longitude": 6.781452,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649593551,
      "ems": null
    },
    {
      "latitude": 48.770779,
      "longitude": 6.785286,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 38,
      "squawk": "4710",
      "timestamp": 1649593562,
      "ems": null
    },
    {
      "latitude": 48.774033,
      "longitude": 6.78934,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649593573,
      "ems": null
    },
    {
      "latitude": 48.777107,
      "longitude": 6.793092,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 38,
      "squawk": "4710",
      "timestamp": 1649593583,
      "ems": null
    },
    {
      "latitude": 48.779716,
      "longitude": 6.796851,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 46,
      "squawk": "4710",
      "timestamp": 1649593592,
      "ems": null
    },
    {
      "latitude": 48.781345,
      "longitude": 6.799308,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649593599,
      "ems": null
    },
    {
      "latitude": 48.784046,
      "longitude": 6.802995,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649593608,
      "ems": null
    },
    {
      "latitude": 48.785614,
      "longitude": 6.805044,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649593614,
      "ems": null
    },
    {
      "latitude": 48.788467,
      "longitude": 6.808994,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649593624,
      "ems": null
    },
    {
      "latitude": 48.791473,
      "longitude": 6.813073,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649593635,
      "ems": null
    },
    {
      "latitude": 48.794449,
      "longitude": 6.816805,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649593645,
      "ems": null
    },
    {
      "latitude": 48.796055,
      "longitude": 6.818823,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649593650,
      "ems": null
    },
    {
      "latitude": 48.798843,
      "longitude": 6.822299,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649593660,
      "ems": null
    },
    {
      "latitude": 48.800663,
      "longitude": 6.824244,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "4710",
      "timestamp": 1649593666,
      "ems": null
    },
    {
      "latitude": 48.802479,
      "longitude": 6.826051,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 32,
      "squawk": "4710",
      "timestamp": 1649593671,
      "ems": null
    },
    {
      "latitude": 48.804203,
      "longitude": 6.827858,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 33,
      "squawk": "4710",
      "timestamp": 1649593677,
      "ems": null
    },
    {
      "latitude": 48.807495,
      "longitude": 6.831243,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 31,
      "squawk": "4710",
      "timestamp": 1649593687,
      "ems": null
    },
    {
      "latitude": 48.811295,
      "longitude": 6.834693,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 32,
      "squawk": "4710",
      "timestamp": 1649593697,
      "ems": null
    },
    {
      "latitude": 48.814816,
      "longitude": 6.838483,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649593708,
      "ems": null
    },
    {
      "latitude": 48.816677,
      "longitude": 6.84058,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 38,
      "squawk": "4710",
      "timestamp": 1649593713,
      "ems": null
    },
    {
      "latitude": 48.81839,
      "longitude": 6.842511,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 36,
      "squawk": "4710",
      "timestamp": 1649593718,
      "ems": null
    },
    {
      "latitude": 48.820221,
      "longitude": 6.844764,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649593723,
      "ems": null
    },
    {
      "latitude": 48.823837,
      "longitude": 6.849131,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 38,
      "squawk": "4710",
      "timestamp": 1649593734,
      "ems": null
    },
    {
      "latitude": 48.827591,
      "longitude": 6.853497,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 36,
      "squawk": "4710",
      "timestamp": 1649593744,
      "ems": null
    },
    {
      "latitude": 48.829376,
      "longitude": 6.855469,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 36,
      "squawk": "4710",
      "timestamp": 1649593749,
      "ems": null
    },
    {
      "latitude": 48.833084,
      "longitude": 6.859413,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "4710",
      "timestamp": 1649593760,
      "ems": null
    },
    {
      "latitude": 48.8367,
      "longitude": 6.863075,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 33,
      "squawk": "4710",
      "timestamp": 1649593770,
      "ems": null
    },
    {
      "latitude": 48.839722,
      "longitude": 6.866244,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 33,
      "squawk": "4710",
      "timestamp": 1649593780,
      "ems": null
    },
    {
      "latitude": 48.843704,
      "longitude": 6.870258,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 33,
      "squawk": "4710",
      "timestamp": 1649593791,
      "ems": null
    },
    {
      "latitude": 48.847031,
      "longitude": 6.873394,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 32,
      "squawk": "4710",
      "timestamp": 1649593802,
      "ems": null
    },
    {
      "latitude": 48.850475,
      "longitude": 6.877586,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649593812,
      "ems": null
    },
    {
      "latitude": 48.851917,
      "longitude": 6.880044,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 51,
      "squawk": "4710",
      "timestamp": 1649593817,
      "ems": null
    },
    {
      "latitude": 48.853081,
      "longitude": 6.882573,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 54,
      "squawk": "4710",
      "timestamp": 1649593822,
      "ems": null
    },
    {
      "latitude": 48.854462,
      "longitude": 6.885259,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "4710",
      "timestamp": 1649593827,
      "ems": null
    },
    {
      "latitude": 48.855362,
      "longitude": 6.887199,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 53,
      "squawk": "4710",
      "timestamp": 1649593831,
      "ems": null
    },
    {
      "latitude": 48.858307,
      "longitude": 6.893428,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 54,
      "squawk": "4710",
      "timestamp": 1649593843,
      "ems": null
    },
    {
      "latitude": 48.860718,
      "longitude": 6.898908,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "4710",
      "timestamp": 1649593853,
      "ems": null
    },
    {
      "latitude": 48.862999,
      "longitude": 6.90404,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "4710",
      "timestamp": 1649593863,
      "ems": null
    },
    {
      "latitude": 48.865326,
      "longitude": 6.90881,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 54,
      "squawk": "4710",
      "timestamp": 1649593874,
      "ems": null
    },
    {
      "latitude": 48.867691,
      "longitude": 6.914485,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "4710",
      "timestamp": 1649593884,
      "ems": null
    },
    {
      "latitude": 48.868652,
      "longitude": 6.917302,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 63,
      "squawk": "4710",
      "timestamp": 1649593890,
      "ems": null
    },
    {
      "latitude": 48.869423,
      "longitude": 6.920158,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 68,
      "squawk": "4710",
      "timestamp": 1649593895,
      "ems": null
    },
    {
      "latitude": 48.870121,
      "longitude": 6.922904,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "4710",
      "timestamp": 1649593900,
      "ems": null
    },
    {
      "latitude": 48.870865,
      "longitude": 6.925724,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 68,
      "squawk": "4710",
      "timestamp": 1649593905,
      "ems": null
    },
    {
      "latitude": 48.871674,
      "longitude": 6.928852,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "4710",
      "timestamp": 1649593911,
      "ems": null
    },
    {
      "latitude": 48.872307,
      "longitude": 6.931506,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649593915,
      "ems": null
    },
    {
      "latitude": 48.873596,
      "longitude": 6.937444,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649593926,
      "ems": null
    },
    {
      "latitude": 48.874191,
      "longitude": 6.940542,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 73,
      "squawk": "4710",
      "timestamp": 1649593931,
      "ems": null
    },
    {
      "latitude": 48.874649,
      "longitude": 6.942726,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649593936,
      "ems": null
    },
    {
      "latitude": 48.875149,
      "longitude": 6.946684,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649593942,
      "ems": null
    },
    {
      "latitude": 48.875473,
      "longitude": 6.949697,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "4710",
      "timestamp": 1649593947,
      "ems": null
    },
    {
      "latitude": 48.875839,
      "longitude": 6.952374,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 78,
      "squawk": "4710",
      "timestamp": 1649593951,
      "ems": null
    },
    {
      "latitude": 48.876358,
      "longitude": 6.955647,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649593957,
      "ems": null
    },
    {
      "latitude": 48.877396,
      "longitude": 6.961599,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649593967,
      "ems": null
    },
    {
      "latitude": 48.878548,
      "longitude": 6.968296,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 73,
      "squawk": "4710",
      "timestamp": 1649593978,
      "ems": null
    },
    {
      "latitude": 48.879501,
      "longitude": 6.973994,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 76,
      "squawk": "4710",
      "timestamp": 1649593987,
      "ems": null
    },
    {
      "latitude": 48.880642,
      "longitude": 6.980511,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "4710",
      "timestamp": 1649593999,
      "ems": null
    },
    {
      "latitude": 48.88092,
      "longitude": 6.981882,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649594001,
      "ems": null
    },
    {
      "latitude": 48.881943,
      "longitude": 6.986293,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649594009,
      "ems": null
    },
    {
      "latitude": 48.882797,
      "longitude": 6.989347,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 66,
      "squawk": "4710",
      "timestamp": 1649594014,
      "ems": null
    },
    {
      "latitude": 48.883575,
      "longitude": 6.992094,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "4710",
      "timestamp": 1649594019,
      "ems": null
    },
    {
      "latitude": 48.884537,
      "longitude": 6.995051,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "4710",
      "timestamp": 1649594025,
      "ems": null
    },
    {
      "latitude": 48.885269,
      "longitude": 6.997305,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 66,
      "squawk": "4710",
      "timestamp": 1649594030,
      "ems": null
    },
    {
      "latitude": 48.887066,
      "longitude": 7.004146,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649594041,
      "ems": null
    },
    {
      "latitude": 48.888382,
      "longitude": 7.009489,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 68,
      "squawk": "4710",
      "timestamp": 1649594050,
      "ems": null
    },
    {
      "latitude": 48.889206,
      "longitude": 7.012588,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 69,
      "squawk": "4710",
      "timestamp": 1649594055,
      "ems": null
    },
    {
      "latitude": 48.889904,
      "longitude": 7.016216,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649594062,
      "ems": null
    },
    {
      "latitude": 48.890488,
      "longitude": 7.019278,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649594067,
      "ems": null
    },
    {
      "latitude": 48.890717,
      "longitude": 7.020475,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649594069,
      "ems": null
    },
    {
      "latitude": 48.89135,
      "longitude": 7.024384,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649594076,
      "ems": null
    },
    {
      "latitude": 48.891769,
      "longitude": 7.027447,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649594081,
      "ems": null
    },
    {
      "latitude": 48.892731,
      "longitude": 7.033081,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649594092,
      "ems": null
    },
    {
      "latitude": 48.893417,
      "longitude": 7.03787,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649594100,
      "ems": null
    },
    {
      "latitude": 48.893875,
      "longitude": 7.041461,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 78,
      "squawk": "4710",
      "timestamp": 1649594107,
      "ems": null
    },
    {
      "latitude": 48.894196,
      "longitude": 7.044631,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "4710",
      "timestamp": 1649594113,
      "ems": null
    },
    {
      "latitude": 48.894562,
      "longitude": 7.050124,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "4710",
      "timestamp": 1649594123,
      "ems": null
    },
    {
      "latitude": 48.894608,
      "longitude": 7.053716,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 89,
      "squawk": "4710",
      "timestamp": 1649594128,
      "ems": null
    },
    {
      "latitude": 48.894562,
      "longitude": 7.057871,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "4710",
      "timestamp": 1649594135,
      "ems": null
    },
    {
      "latitude": 48.894421,
      "longitude": 7.06139,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 92,
      "squawk": "4710",
      "timestamp": 1649594141,
      "ems": null
    },
    {
      "latitude": 48.894329,
      "longitude": 7.064137,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "4710",
      "timestamp": 1649594146,
      "ems": null
    },
    {
      "latitude": 48.894279,
      "longitude": 7.067245,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 90,
      "squawk": "4710",
      "timestamp": 1649594152,
      "ems": null
    },
    {
      "latitude": 48.894196,
      "longitude": 7.070758,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 92,
      "squawk": "4710",
      "timestamp": 1649594158,
      "ems": null
    },
    {
      "latitude": 48.894279,
      "longitude": 7.0744,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "4710",
      "timestamp": 1649594164,
      "ems": null
    },
    {
      "latitude": 48.894562,
      "longitude": 7.076424,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 77,
      "squawk": "4710",
      "timestamp": 1649594168,
      "ems": null
    },
    {
      "latitude": 48.894836,
      "longitude": 7.078224,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 75,
      "squawk": "4710",
      "timestamp": 1649594171,
      "ems": null
    },
    {
      "latitude": 48.895111,
      "longitude": 7.079562,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649594173,
      "ems": null
    },
    {
      "latitude": 48.895248,
      "longitude": 7.080337,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649594175,
      "ems": null
    },
    {
      "latitude": 48.895771,
      "longitude": 7.082423,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 65,
      "squawk": "4710",
      "timestamp": 1649594180,
      "ems": null
    },
    {
      "latitude": 48.896347,
      "longitude": 7.084139,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 60,
      "squawk": "4710",
      "timestamp": 1649594182,
      "ems": null
    },
    {
      "latitude": 48.896748,
      "longitude": 7.085025,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 55,
      "squawk": "4710",
      "timestamp": 1649594184,
      "ems": null
    },
    {
      "latitude": 48.897678,
      "longitude": 7.086977,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "4710",
      "timestamp": 1649594188,
      "ems": null
    },
    {
      "latitude": 48.898544,
      "longitude": 7.088717,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 53,
      "squawk": "4710",
      "timestamp": 1649594192,
      "ems": null
    },
    {
      "latitude": 48.899216,
      "longitude": 7.090085,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 52,
      "squawk": "4710",
      "timestamp": 1649594195,
      "ems": null
    },
    {
      "latitude": 48.899689,
      "longitude": 7.090971,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 52,
      "squawk": "4710",
      "timestamp": 1649594197,
      "ems": null
    },
    {
      "latitude": 48.900467,
      "longitude": 7.09252,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 52,
      "squawk": "4710",
      "timestamp": 1649594200,
      "ems": null
    },
    {
      "latitude": 48.901218,
      "longitude": 7.094132,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 54,
      "squawk": "4710",
      "timestamp": 1649594203,
      "ems": null
    },
    {
      "latitude": 48.901794,
      "longitude": 7.095407,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 54,
      "squawk": "4710",
      "timestamp": 1649594206,
      "ems": null
    },
    {
      "latitude": 48.902527,
      "longitude": 7.097027,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 55,
      "squawk": "4710",
      "timestamp": 1649594210,
      "ems": null
    },
    {
      "latitude": 48.902985,
      "longitude": 7.098013,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 54,
      "squawk": "4710",
      "timestamp": 1649594212,
      "ems": null
    },
    {
      "latitude": 48.90443,
      "longitude": 7.101432,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "4710",
      "timestamp": 1649594219,
      "ems": null
    },
    {
      "latitude": 48.904987,
      "longitude": 7.10295,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "4710",
      "timestamp": 1649594222,
      "ems": null
    },
    {
      "latitude": 48.905594,
      "longitude": 7.104829,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "4710",
      "timestamp": 1649594225,
      "ems": null
    },
    {
      "latitude": 48.905685,
      "longitude": 7.105119,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "4710",
      "timestamp": 1649594225,
      "ems": null
    },
    {
      "latitude": 48.906418,
      "longitude": 7.107309,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "4710",
      "timestamp": 1649594230,
      "ems": null
    },
    {
      "latitude": 48.907314,
      "longitude": 7.1096,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 60,
      "squawk": "4710",
      "timestamp": 1649594234,
      "ems": null
    },
    {
      "latitude": 48.908386,
      "longitude": 7.112028,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 55,
      "squawk": "4710",
      "timestamp": 1649594239,
      "ems": null
    },
    {
      "latitude": 48.909988,
      "longitude": 7.115479,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "4710",
      "timestamp": 1649594246,
      "ems": null
    },
    {
      "latitude": 48.911224,
      "longitude": 7.118436,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 56,
      "squawk": "4710",
      "timestamp": 1649594252,
      "ems": null
    },
    {
      "latitude": 48.912342,
      "longitude": 7.121309,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 61,
      "squawk": "4710",
      "timestamp": 1649594258,
      "ems": null
    },
    {
      "latitude": 48.913193,
      "longitude": 7.123859,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "4710",
      "timestamp": 1649594264,
      "ems": null
    },
    {
      "latitude": 48.913467,
      "longitude": 7.124634,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 63,
      "squawk": "4710",
      "timestamp": 1649594266,
      "ems": null
    },
    {
      "latitude": 48.914158,
      "longitude": 7.126657,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 63,
      "squawk": "4710",
      "timestamp": 1649594270,
      "ems": null
    },
    {
      "latitude": 48.914623,
      "longitude": 7.128175,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "4710",
      "timestamp": 1649594273,
      "ems": null
    },
    {
      "latitude": 48.915115,
      "longitude": 7.129563,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "4710",
      "timestamp": 1649594276,
      "ems": null
    },
    {
      "latitude": 48.915554,
      "longitude": 7.131067,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "4710",
      "timestamp": 1649594279,
      "ems": null
    },
    {
      "latitude": 48.915848,
      "longitude": 7.13238,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649594282,
      "ems": null
    },
    {
      "latitude": 48.916115,
      "longitude": 7.133741,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649594285,
      "ems": null
    },
    {
      "latitude": 48.916351,
      "longitude": 7.135056,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 74,
      "squawk": "4710",
      "timestamp": 1649594287,
      "ems": null
    },
    {
      "latitude": 48.916813,
      "longitude": 7.13721,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 72,
      "squawk": "4710",
      "timestamp": 1649594291,
      "ems": null
    },
    {
      "latitude": 48.917183,
      "longitude": 7.1388,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649594294,
      "ems": null
    },
    {
      "latitude": 48.917557,
      "longitude": 7.140607,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 71,
      "squawk": "4710",
      "timestamp": 1649594297,
      "ems": null
    },
    {
      "latitude": 48.917931,
      "longitude": 7.14227,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649594300,
      "ems": null
    },
    {
      "latitude": 48.91832,
      "longitude": 7.14386,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "4710",
      "timestamp": 1649594303,
      "ems": null
    },
    {
      "latitude": 48.919098,
      "longitude": 7.14724,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 70,
      "squawk": "4710",
      "timestamp": 1649594309,
      "ems": null
    },
    {
      "latitude": 48.919884,
      "longitude": 7.150654,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "4710",
      "timestamp": 1649594315,
      "ems": null
    },
    {
      "latitude": 48.920536,
      "longitude": 7.153617,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "4710",
      "timestamp": 1649594320,
      "ems": null
    },
    {
      "latitude": 48.921467,
      "longitude": 7.157231,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "4710",
      "timestamp": 1649594327,
      "ems": null
    },
    {
      "latitude": 48.922852,
      "longitude": 7.161889,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 65,
      "squawk": "4710",
      "timestamp": 1649594336,
      "ems": null
    },
    {
      "latitude": 48.923309,
      "longitude": 7.163438,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "4710",
      "timestamp": 1649594339,
      "ems": null
    },
    {
      "latitude": 48.92347,
      "longitude": 7.163953,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 66,
      "squawk": "4710",
      "timestamp": 1649594340,
      "ems": null
    },
    {
      "latitude": 48.924587,
      "longitude": 7.168073,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 64,
      "squawk": "4710",
      "timestamp": 1649594348,
      "ems": null
    },
    {
      "latitude": 48.925232,
      "longitude": 7.169917,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 61,
      "squawk": "4710",
      "timestamp": 1649594351,
      "ems": null
    },
    {
      "latitude": 48.92561,
      "longitude": 7.171037,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 61,
      "squawk": "4710",
      "timestamp": 1649594353,
      "ems": null
    },
    {
      "latitude": 48.926285,
      "longitude": 7.172945,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 61,
      "squawk": "4710",
      "timestamp": 1649594357,
      "ems": null
    },
    {
      "latitude": 48.926773,
      "longitude": 7.174289,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "4710",
      "timestamp": 1649594360,
      "ems": null
    },
    {
      "latitude": 48.927795,
      "longitude": 7.177101,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "4710",
      "timestamp": 1649594365,
      "ems": null
    },
    {
      "latitude": 48.928589,
      "longitude": 7.178915,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 56,
      "squawk": "4710",
      "timestamp": 1649594369,
      "ems": null
    },
    {
      "latitude": 48.929398,
      "longitude": 7.18041,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 47,
      "squawk": "4710",
      "timestamp": 1649594372,
      "ems": null
    },
    {
      "latitude": 48.930222,
      "longitude": 7.181678,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649594375,
      "ems": null
    },
    {
      "latitude": 48.931046,
      "longitude": 7.182876,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "4710",
      "timestamp": 1649594378,
      "ems": null
    },
    {
      "latitude": 48.931801,
      "longitude": 7.18383,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649594381,
      "ems": null
    },
    {
      "latitude": 48.932556,
      "longitude": 7.184918,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594384,
      "ems": null
    },
    {
      "latitude": 48.933712,
      "longitude": 7.186359,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594387,
      "ems": null
    },
    {
      "latitude": 48.934662,
      "longitude": 7.187594,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649594390,
      "ems": null
    },
    {
      "latitude": 48.935574,
      "longitude": 7.188817,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649594393,
      "ems": null
    },
    {
      "latitude": 48.936596,
      "longitude": 7.190118,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "4710",
      "timestamp": 1649594396,
      "ems": null
    },
    {
      "latitude": 48.937435,
      "longitude": 7.19113,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594399,
      "ems": null
    },
    {
      "latitude": 48.938366,
      "longitude": 7.192358,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594402,
      "ems": null
    },
    {
      "latitude": 48.939377,
      "longitude": 7.19358,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "4710",
      "timestamp": 1649594405,
      "ems": null
    },
    {
      "latitude": 48.941345,
      "longitude": 7.196115,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594411,
      "ems": null
    },
    {
      "latitude": 48.943222,
      "longitude": 7.19851,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594417,
      "ems": null
    },
    {
      "latitude": 48.944916,
      "longitude": 7.200552,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649594422,
      "ems": null
    },
    {
      "latitude": 48.946289,
      "longitude": 7.202172,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649594428,
      "ems": null
    },
    {
      "latitude": 48.949631,
      "longitude": 7.20573,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 32,
      "squawk": "4710",
      "timestamp": 1649594437,
      "ems": null
    },
    {
      "latitude": 48.951866,
      "longitude": 7.207826,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 32,
      "squawk": "4710",
      "timestamp": 1649594445,
      "ems": null
    },
    {
      "latitude": 48.954391,
      "longitude": 7.210271,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 32,
      "squawk": "4710",
      "timestamp": 1649594451,
      "ems": null
    },
    {
      "latitude": 48.956314,
      "longitude": 7.212454,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649594456,
      "ems": null
    },
    {
      "latitude": 48.958336,
      "longitude": 7.214838,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649594462,
      "ems": null
    },
    {
      "latitude": 48.959129,
      "longitude": 7.215777,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594465,
      "ems": null
    },
    {
      "latitude": 48.960159,
      "longitude": 7.217173,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594468,
      "ems": null
    },
    {
      "latitude": 48.96085,
      "longitude": 7.218018,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649594471,
      "ems": null
    },
    {
      "latitude": 48.961945,
      "longitude": 7.219497,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649594474,
      "ems": null
    },
    {
      "latitude": 48.962769,
      "longitude": 7.220623,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649594477,
      "ems": null
    },
    {
      "latitude": 48.963924,
      "longitude": 7.222137,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649594480,
      "ems": null
    },
    {
      "latitude": 48.96492,
      "longitude": 7.223511,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649594483,
      "ems": null
    },
    {
      "latitude": 48.96574,
      "longitude": 7.224595,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649594486,
      "ems": null
    },
    {
      "latitude": 48.966297,
      "longitude": 7.225462,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649594490,
      "ems": null
    },
    {
      "latitude": 48.968536,
      "longitude": 7.22837,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649594495,
      "ems": null
    },
    {
      "latitude": 48.970253,
      "longitude": 7.230811,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649594502,
      "ems": null
    },
    {
      "latitude": 48.972069,
      "longitude": 7.233196,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594507,
      "ems": null
    },
    {
      "latitude": 48.973663,
      "longitude": 7.235342,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 41,
      "squawk": "4710",
      "timestamp": 1649594513,
      "ems": null
    },
    {
      "latitude": 48.975586,
      "longitude": 7.238019,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "4710",
      "timestamp": 1649594519,
      "ems": null
    },
    {
      "latitude": 48.977463,
      "longitude": 7.240765,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649594525,
      "ems": null
    },
    {
      "latitude": 48.979191,
      "longitude": 7.243315,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649594531,
      "ems": null
    },
    {
      "latitude": 48.980988,
      "longitude": 7.245976,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 45,
      "squawk": "4710",
      "timestamp": 1649594538,
      "ems": null
    },
    {
      "latitude": 48.982731,
      "longitude": 7.248663,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649594544,
      "ems": null
    },
    {
      "latitude": 48.984329,
      "longitude": 7.250977,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649594549,
      "ems": null
    },
    {
      "latitude": 48.986362,
      "longitude": 7.25394,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649594556,
      "ems": null
    },
    {
      "latitude": 48.988178,
      "longitude": 7.256397,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594561,
      "ems": null
    },
    {
      "latitude": 48.989136,
      "longitude": 7.257596,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594565,
      "ems": null
    },
    {
      "latitude": 48.989899,
      "longitude": 7.258566,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594567,
      "ems": null
    },
    {
      "latitude": 48.990646,
      "longitude": 7.259568,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594570,
      "ems": null
    },
    {
      "latitude": 48.991806,
      "longitude": 7.261023,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 36,
      "squawk": "4710",
      "timestamp": 1649594574,
      "ems": null
    },
    {
      "latitude": 48.992786,
      "longitude": 7.262107,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 36,
      "squawk": "4710",
      "timestamp": 1649594576,
      "ems": null
    },
    {
      "latitude": 48.993851,
      "longitude": 7.26323,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "4710",
      "timestamp": 1649594580,
      "ems": null
    },
    {
      "latitude": 48.9944,
      "longitude": 7.263794,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 36,
      "squawk": "4710",
      "timestamp": 1649594582,
      "ems": null
    },
    {
      "latitude": 48.995361,
      "longitude": 7.264921,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 36,
      "squawk": "4710",
      "timestamp": 1649594585,
      "ems": null
    },
    {
      "latitude": 48.996185,
      "longitude": 7.265794,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "4710",
      "timestamp": 1649594588,
      "ems": null
    },
    {
      "latitude": 48.998291,
      "longitude": 7.26816,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "4710",
      "timestamp": 1649594595,
      "ems": null
    },
    {
      "latitude": 48.999069,
      "longitude": 7.269005,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 35,
      "squawk": "4710",
      "timestamp": 1649594598,
      "ems": null
    },
    {
      "latitude": 49.000141,
      "longitude": 7.27013,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "4710",
      "timestamp": 1649594601,
      "ems": null
    },
    {
      "latitude": 49.001957,
      "longitude": 7.272226,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649594607,
      "ems": null
    },
    {
      "latitude": 49.003773,
      "longitude": 7.274395,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 38,
      "squawk": "4710",
      "timestamp": 1649594613,
      "ems": null
    },
    {
      "latitude": 49.005524,
      "longitude": 7.276541,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "4710",
      "timestamp": 1649594619,
      "ems": null
    },
    {
      "latitude": 49.007355,
      "longitude": 7.278731,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594625,
      "ems": null
    },
    {
      "latitude": 49.00827,
      "longitude": 7.279922,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594628,
      "ems": null
    },
    {
      "latitude": 49.00914,
      "longitude": 7.281048,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594631,
      "ems": null
    },
    {
      "latitude": 49.01088,
      "longitude": 7.283231,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 39,
      "squawk": "4710",
      "timestamp": 1649594637,
      "ems": null
    },
    {
      "latitude": 49.012711,
      "longitude": 7.285526,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594643,
      "ems": null
    },
    {
      "latitude": 49.01445,
      "longitude": 7.287809,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 40,
      "squawk": "4710",
      "timestamp": 1649594649,
      "ems": null
    },
    {
      "latitude": 49.016247,
      "longitude": 7.290224,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4710",
      "timestamp": 1649594655,
      "ems": null
    },
    {
      "latitude": 49.01783,
      "longitude": 7.292464,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 43,
      "squawk": "4710",
      "timestamp": 1649594661,
      "ems": null
    },
    {
      "latitude": 49.019646,
      "longitude": 7.295066,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 45,
      "squawk": "4710",
      "timestamp": 1649594667,
      "ems": null
    },
    {
      "latitude": 49.020157,
      "longitude": 7.295934,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 45,
      "squawk": "4710",
      "timestamp": 1649594669,
      "ems": null
    },
    {
      "latitude": 49.022186,
      "longitude": 7.298936,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 44,
      "squawk": "4710",
      "timestamp": 1649594676,
      "ems": null
    },
    {
      "latitude": 49.023788,
      "longitude": 7.301282,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 43,
      "squawk": "4710",
      "timestamp": 1649594681,
      "ems": null
    },
    {
      "latitude": 49.025604,
      "longitude": 7.303957,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1649594688,
      "ems": null
    },
    {
      "latitude": 49.027451,
      "longitude": 7.306753,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1649594694,
      "ems": null
    },
    {
      "latitude": 49.02919,
      "longitude": 7.309305,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1649594700,
      "ems": null
    },
    {
      "latitude": 49.031052,
      "longitude": 7.311907,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1649594706,
      "ems": null
    },
    {
      "latitude": 49.032944,
      "longitude": 7.31457,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1649594712,
      "ems": null
    },
    {
      "latitude": 49.034592,
      "longitude": 7.317106,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1649594718,
      "ems": null
    },
    {
      "latitude": 49.036423,
      "longitude": 7.319993,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1649594724,
      "ems": null
    },
    {
      "latitude": 49.038174,
      "longitude": 7.322821,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1649594730,
      "ems": null
    },
    {
      "latitude": 49.039993,
      "longitude": 7.325768,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1649594736,
      "ems": null
    },
    {
      "latitude": 49.041779,
      "longitude": 7.328656,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1649594742,
      "ems": null
    },
    {
      "latitude": 49.044113,
      "longitude": 7.332177,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1649594751,
      "ems": null
    },
    {
      "latitude": 49.04631,
      "longitude": 7.335628,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1649594757,
      "ems": null
    },
    {
      "latitude": 49.048603,
      "longitude": 7.339084,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1649594765,
      "ems": null
    },
    {
      "latitude": 49.051628,
      "longitude": 7.343854,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1649594775,
      "ems": null
    },
    {
      "latitude": 49.053223,
      "longitude": 7.346473,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1649594781,
      "ems": null
    },
    {
      "latitude": 49.054234,
      "longitude": 7.348191,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1649594786,
      "ems": null
    },
    {
      "latitude": 49.056519,
      "longitude": 7.351685,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1649594793,
      "ems": null
    },
    {
      "latitude": 49.05835,
      "longitude": 7.354361,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649594799,
      "ems": null
    },
    {
      "latitude": 49.059822,
      "longitude": 7.356359,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649594804,
      "ems": null
    },
    {
      "latitude": 49.061874,
      "longitude": 7.359009,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649594811,
      "ems": null
    },
    {
      "latitude": 49.06266,
      "longitude": 7.359972,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649594813,
      "ems": null
    },
    {
      "latitude": 49.063732,
      "longitude": 7.361273,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649594817,
      "ems": null
    },
    {
      "latitude": 49.064198,
      "longitude": 7.36178,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649594818,
      "ems": null
    },
    {
      "latitude": 49.065491,
      "longitude": 7.363375,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649594822,
      "ems": null
    },
    {
      "latitude": 49.067223,
      "longitude": 7.365827,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649594828,
      "ems": null
    },
    {
      "latitude": 49.069244,
      "longitude": 7.368516,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594835,
      "ems": null
    },
    {
      "latitude": 49.072083,
      "longitude": 7.372178,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649594844,
      "ems": null
    },
    {
      "latitude": 49.073639,
      "longitude": 7.374291,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594849,
      "ems": null
    },
    {
      "latitude": 49.075741,
      "longitude": 7.377392,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649594856,
      "ems": null
    },
    {
      "latitude": 49.077667,
      "longitude": 7.379925,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594862,
      "ems": null
    },
    {
      "latitude": 49.080597,
      "longitude": 7.383799,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594871,
      "ems": null
    },
    {
      "latitude": 49.082397,
      "longitude": 7.386209,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594877,
      "ems": null
    },
    {
      "latitude": 49.084492,
      "longitude": 7.388956,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649594883,
      "ems": null
    },
    {
      "latitude": 49.085907,
      "longitude": 7.39077,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649594888,
      "ems": null
    },
    {
      "latitude": 49.087612,
      "longitude": 7.393004,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594893,
      "ems": null
    },
    {
      "latitude": 49.09185,
      "longitude": 7.398569,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594907,
      "ems": null
    },
    {
      "latitude": 49.094971,
      "longitude": 7.402813,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649594916,
      "ems": null
    },
    {
      "latitude": 49.096664,
      "longitude": 7.405208,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649594922,
      "ems": null
    },
    {
      "latitude": 49.099575,
      "longitude": 7.409411,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594931,
      "ems": null
    },
    {
      "latitude": 49.101204,
      "longitude": 7.411579,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594936,
      "ems": null
    },
    {
      "latitude": 49.103485,
      "longitude": 7.414687,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649594943,
      "ems": null
    },
    {
      "latitude": 49.106464,
      "longitude": 7.418301,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649594952,
      "ems": null
    },
    {
      "latitude": 49.107056,
      "longitude": 7.419011,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649594955,
      "ems": null
    },
    {
      "latitude": 49.109573,
      "longitude": 7.42204,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649594961,
      "ems": null
    },
    {
      "latitude": 49.111404,
      "longitude": 7.424152,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649594967,
      "ems": null
    },
    {
      "latitude": 49.113464,
      "longitude": 7.426547,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649594973,
      "ems": null
    },
    {
      "latitude": 49.115707,
      "longitude": 7.429223,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649594979,
      "ems": null
    },
    {
      "latitude": 49.117546,
      "longitude": 7.431601,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649594985,
      "ems": null
    },
    {
      "latitude": 49.119408,
      "longitude": 7.433913,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649594991,
      "ems": null
    },
    {
      "latitude": 49.121365,
      "longitude": 7.436588,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649594997,
      "ems": null
    },
    {
      "latitude": 49.121876,
      "longitude": 7.437311,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649594998,
      "ems": null
    },
    {
      "latitude": 49.124435,
      "longitude": 7.440852,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595007,
      "ems": null
    },
    {
      "latitude": 49.12611,
      "longitude": 7.443165,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595012,
      "ems": null
    },
    {
      "latitude": 49.127655,
      "longitude": 7.445209,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595017,
      "ems": null
    },
    {
      "latitude": 49.130207,
      "longitude": 7.448658,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595025,
      "ems": null
    },
    {
      "latitude": 49.132069,
      "longitude": 7.451116,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595031,
      "ems": null
    },
    {
      "latitude": 49.133698,
      "longitude": 7.453139,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595035,
      "ems": null
    },
    {
      "latitude": 49.135468,
      "longitude": 7.455452,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595041,
      "ems": null
    },
    {
      "latitude": 49.137562,
      "longitude": 7.458271,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595048,
      "ems": null
    },
    {
      "latitude": 49.13942,
      "longitude": 7.460703,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595054,
      "ems": null
    },
    {
      "latitude": 49.140518,
      "longitude": 7.46183,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649595057,
      "ems": null
    },
    {
      "latitude": 49.141613,
      "longitude": 7.462897,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1649595061,
      "ems": null
    },
    {
      "latitude": 49.142441,
      "longitude": 7.463661,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1649595063,
      "ems": null
    },
    {
      "latitude": 49.144501,
      "longitude": 7.465421,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1649595069,
      "ems": null
    },
    {
      "latitude": 49.145756,
      "longitude": 7.466511,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1649595073,
      "ems": null
    },
    {
      "latitude": 49.146595,
      "longitude": 7.467306,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1649595075,
      "ems": null
    },
    {
      "latitude": 49.147617,
      "longitude": 7.468246,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1649595078,
      "ems": null
    },
    {
      "latitude": 49.148575,
      "longitude": 7.469083,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1649595081,
      "ems": null
    },
    {
      "latitude": 49.149582,
      "longitude": 7.469928,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1649595084,
      "ems": null
    },
    {
      "latitude": 49.149944,
      "longitude": 7.47027,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1649595085,
      "ems": null
    },
    {
      "latitude": 49.152458,
      "longitude": 7.47251,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1649595093,
      "ems": null
    },
    {
      "latitude": 49.154507,
      "longitude": 7.474245,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 29,
      "squawk": "4451",
      "timestamp": 1649595099,
      "ems": null
    },
    {
      "latitude": 49.156322,
      "longitude": 7.475763,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1649595105,
      "ems": null
    },
    {
      "latitude": 49.158188,
      "longitude": 7.477323,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 27,
      "squawk": "4451",
      "timestamp": 1649595112,
      "ems": null
    },
    {
      "latitude": 49.160339,
      "longitude": 7.478943,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 26,
      "squawk": "4451",
      "timestamp": 1649595118,
      "ems": null
    },
    {
      "latitude": 49.162327,
      "longitude": 7.480533,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1649595123,
      "ems": null
    },
    {
      "latitude": 49.164516,
      "longitude": 7.482268,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1649595130,
      "ems": null
    },
    {
      "latitude": 49.166656,
      "longitude": 7.483872,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 24,
      "squawk": "4451",
      "timestamp": 1649595136,
      "ems": null
    },
    {
      "latitude": 49.167664,
      "longitude": 7.484507,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1649595139,
      "ems": null
    },
    {
      "latitude": 49.168762,
      "longitude": 7.485281,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 21,
      "squawk": "4451",
      "timestamp": 1649595142,
      "ems": null
    },
    {
      "latitude": 49.170776,
      "longitude": 7.486549,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "4451",
      "timestamp": 1649595147,
      "ems": null
    },
    {
      "latitude": 49.172928,
      "longitude": 7.488239,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1649595154,
      "ems": null
    },
    {
      "latitude": 49.173752,
      "longitude": 7.489225,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595157,
      "ems": null
    },
    {
      "latitude": 49.174576,
      "longitude": 7.490281,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1649595160,
      "ems": null
    },
    {
      "latitude": 49.175446,
      "longitude": 7.49176,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1649595163,
      "ems": null
    },
    {
      "latitude": 49.176529,
      "longitude": 7.493688,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1649595166,
      "ems": null
    },
    {
      "latitude": 49.177364,
      "longitude": 7.495205,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1649595169,
      "ems": null
    },
    {
      "latitude": 49.178101,
      "longitude": 7.496479,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1649595172,
      "ems": null
    },
    {
      "latitude": 49.179043,
      "longitude": 7.498096,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1649595175,
      "ems": null
    },
    {
      "latitude": 49.179924,
      "longitude": 7.499687,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1649595178,
      "ems": null
    },
    {
      "latitude": 49.180717,
      "longitude": 7.500988,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1649595181,
      "ems": null
    },
    {
      "latitude": 49.181648,
      "longitude": 7.502433,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1649595184,
      "ems": null
    },
    {
      "latitude": 49.182255,
      "longitude": 7.503445,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1649595185,
      "ems": null
    },
    {
      "latitude": 49.184582,
      "longitude": 7.507421,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1649595193,
      "ems": null
    },
    {
      "latitude": 49.186111,
      "longitude": 7.50993,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1649595198,
      "ems": null
    },
    {
      "latitude": 49.187885,
      "longitude": 7.512842,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1649595205,
      "ems": null
    },
    {
      "latitude": 49.189682,
      "longitude": 7.515705,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595210,
      "ems": null
    },
    {
      "latitude": 49.191891,
      "longitude": 7.518985,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649595217,
      "ems": null
    },
    {
      "latitude": 49.192822,
      "longitude": 7.520359,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595220,
      "ems": null
    },
    {
      "latitude": 49.194496,
      "longitude": 7.522816,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595226,
      "ems": null
    },
    {
      "latitude": 49.196594,
      "longitude": 7.525917,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595232,
      "ems": null
    },
    {
      "latitude": 49.197617,
      "longitude": 7.527297,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595235,
      "ems": null
    },
    {
      "latitude": 49.198219,
      "longitude": 7.528164,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595237,
      "ems": null
    },
    {
      "latitude": 49.200485,
      "longitude": 7.531128,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595244,
      "ems": null
    },
    {
      "latitude": 49.202362,
      "longitude": 7.533593,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649595250,
      "ems": null
    },
    {
      "latitude": 49.203434,
      "longitude": 7.534814,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649595253,
      "ems": null
    },
    {
      "latitude": 49.20446,
      "longitude": 7.535971,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649595256,
      "ems": null
    },
    {
      "latitude": 49.205566,
      "longitude": 7.537185,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1649595259,
      "ems": null
    },
    {
      "latitude": 49.206482,
      "longitude": 7.53817,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649595262,
      "ems": null
    },
    {
      "latitude": 49.207489,
      "longitude": 7.539227,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649595265,
      "ems": null
    },
    {
      "latitude": 49.209488,
      "longitude": 7.541536,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649595271,
      "ems": null
    },
    {
      "latitude": 49.210556,
      "longitude": 7.542678,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649595274,
      "ems": null
    },
    {
      "latitude": 49.21138,
      "longitude": 7.543523,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1649595277,
      "ems": null
    },
    {
      "latitude": 49.213348,
      "longitude": 7.545511,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1649595283,
      "ems": null
    },
    {
      "latitude": 49.215454,
      "longitude": 7.547748,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1649595289,
      "ems": null
    },
    {
      "latitude": 49.217468,
      "longitude": 7.549932,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649595295,
      "ems": null
    },
    {
      "latitude": 49.218979,
      "longitude": 7.551551,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649595301,
      "ems": null
    },
    {
      "latitude": 49.220985,
      "longitude": 7.553823,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649595306,
      "ems": null
    },
    {
      "latitude": 49.223312,
      "longitude": 7.556209,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1649595313,
      "ems": null
    },
    {
      "latitude": 49.22525,
      "longitude": 7.558312,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595319,
      "ems": null
    },
    {
      "latitude": 49.227222,
      "longitude": 7.560473,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649595325,
      "ems": null
    },
    {
      "latitude": 49.22913,
      "longitude": 7.562714,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595331,
      "ems": null
    },
    {
      "latitude": 49.2309,
      "longitude": 7.564954,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595337,
      "ems": null
    },
    {
      "latitude": 49.231796,
      "longitude": 7.566129,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595340,
      "ems": null
    },
    {
      "latitude": 49.232574,
      "longitude": 7.567195,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595343,
      "ems": null
    },
    {
      "latitude": 49.233444,
      "longitude": 7.568383,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595346,
      "ems": null
    },
    {
      "latitude": 49.234268,
      "longitude": 7.56951,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595349,
      "ems": null
    },
    {
      "latitude": 49.234951,
      "longitude": 7.570447,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595352,
      "ems": null
    },
    {
      "latitude": 49.235733,
      "longitude": 7.571622,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649595355,
      "ems": null
    },
    {
      "latitude": 49.236465,
      "longitude": 7.57282,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1649595358,
      "ems": null
    },
    {
      "latitude": 49.237232,
      "longitude": 7.574061,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1649595361,
      "ems": null
    },
    {
      "latitude": 49.238766,
      "longitude": 7.575941,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 31,
      "squawk": "4451",
      "timestamp": 1649595367,
      "ems": null
    },
    {
      "latitude": 49.239761,
      "longitude": 7.576834,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1649595370,
      "ems": null
    },
    {
      "latitude": 49.240582,
      "longitude": 7.577458,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1649595373,
      "ems": null
    },
    {
      "latitude": 49.241467,
      "longitude": 7.578181,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 28,
      "squawk": "4451",
      "timestamp": 1649595376,
      "ems": null
    },
    {
      "latitude": 49.242325,
      "longitude": 7.578947,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 30,
      "squawk": "4451",
      "timestamp": 1649595379,
      "ems": null
    },
    {
      "latitude": 49.243145,
      "longitude": 7.579699,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1649595382,
      "ems": null
    },
    {
      "latitude": 49.243927,
      "longitude": 7.580496,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649595385,
      "ems": null
    },
    {
      "latitude": 49.244705,
      "longitude": 7.581411,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649595388,
      "ems": null
    },
    {
      "latitude": 49.245472,
      "longitude": 7.582301,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595391,
      "ems": null
    },
    {
      "latitude": 49.246357,
      "longitude": 7.583313,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649595394,
      "ems": null
    },
    {
      "latitude": 49.247131,
      "longitude": 7.584229,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595397,
      "ems": null
    },
    {
      "latitude": 49.247955,
      "longitude": 7.585285,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595400,
      "ems": null
    },
    {
      "latitude": 49.248684,
      "longitude": 7.586493,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 49,
      "squawk": "4451",
      "timestamp": 1649595403,
      "ems": null
    },
    {
      "latitude": 49.249287,
      "longitude": 7.587577,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 50,
      "squawk": "4451",
      "timestamp": 1649595406,
      "ems": null
    },
    {
      "latitude": 49.249985,
      "longitude": 7.588951,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "4451",
      "timestamp": 1649595409,
      "ems": null
    },
    {
      "latitude": 49.250687,
      "longitude": 7.590324,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1649595412,
      "ems": null
    },
    {
      "latitude": 49.251244,
      "longitude": 7.59148,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1649595415,
      "ems": null
    },
    {
      "latitude": 49.251938,
      "longitude": 7.592891,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1649595418,
      "ems": null
    },
    {
      "latitude": 49.252625,
      "longitude": 7.59437,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1649595421,
      "ems": null
    },
    {
      "latitude": 49.253292,
      "longitude": 7.595745,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1649595424,
      "ems": null
    },
    {
      "latitude": 49.253899,
      "longitude": 7.597118,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1649595427,
      "ems": null
    },
    {
      "latitude": 49.254547,
      "longitude": 7.598564,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "4451",
      "timestamp": 1649595430,
      "ems": null
    },
    {
      "latitude": 49.255234,
      "longitude": 7.600144,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 56,
      "squawk": "4451",
      "timestamp": 1649595433,
      "ems": null
    },
    {
      "latitude": 49.255875,
      "longitude": 7.601624,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "4451",
      "timestamp": 1649595436,
      "ems": null
    },
    {
      "latitude": 49.257202,
      "longitude": 7.604707,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 56,
      "squawk": "4451",
      "timestamp": 1649595442,
      "ems": null
    },
    {
      "latitude": 49.257946,
      "longitude": 7.606586,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 58,
      "squawk": "4451",
      "timestamp": 1649595445,
      "ems": null
    },
    {
      "latitude": 49.259079,
      "longitude": 7.609581,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1649595451,
      "ems": null
    },
    {
      "latitude": 49.259762,
      "longitude": 7.611502,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1649595454,
      "ems": null
    },
    {
      "latitude": 49.260315,
      "longitude": 7.613032,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1649595457,
      "ems": null
    },
    {
      "latitude": 49.261002,
      "longitude": 7.614863,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1649595460,
      "ems": null
    },
    {
      "latitude": 49.261597,
      "longitude": 7.616554,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1649595463,
      "ems": null
    },
    {
      "latitude": 49.26223,
      "longitude": 7.618296,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "4451",
      "timestamp": 1649595466,
      "ems": null
    },
    {
      "latitude": 49.264137,
      "longitude": 7.623211,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 60,
      "squawk": "4451",
      "timestamp": 1649595475,
      "ems": null
    },
    {
      "latitude": 49.266129,
      "longitude": 7.628174,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 56,
      "squawk": "4451",
      "timestamp": 1649595484,
      "ems": null
    },
    {
      "latitude": 49.266907,
      "longitude": 7.629934,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 56,
      "squawk": "4451",
      "timestamp": 1649595487,
      "ems": null
    },
    {
      "latitude": 49.267548,
      "longitude": 7.631413,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "4451",
      "timestamp": 1649595490,
      "ems": null
    },
    {
      "latitude": 49.268188,
      "longitude": 7.632751,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "4451",
      "timestamp": 1649595493,
      "ems": null
    },
    {
      "latitude": 49.269058,
      "longitude": 7.634583,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "4451",
      "timestamp": 1649595496,
      "ems": null
    },
    {
      "latitude": 49.269863,
      "longitude": 7.636221,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1649595499,
      "ems": null
    },
    {
      "latitude": 49.27047,
      "longitude": 7.637377,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "4451",
      "timestamp": 1649595502,
      "ems": null
    },
    {
      "latitude": 49.271309,
      "longitude": 7.638895,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1649595505,
      "ems": null
    },
    {
      "latitude": 49.27224,
      "longitude": 7.640341,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595508,
      "ems": null
    },
    {
      "latitude": 49.273315,
      "longitude": 7.641836,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595511,
      "ems": null
    },
    {
      "latitude": 49.274139,
      "longitude": 7.643104,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649595514,
      "ems": null
    },
    {
      "latitude": 49.274845,
      "longitude": 7.644244,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1649595517,
      "ems": null
    },
    {
      "latitude": 49.275822,
      "longitude": 7.645834,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1649595520,
      "ems": null
    },
    {
      "latitude": 49.276703,
      "longitude": 7.647329,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1649595523,
      "ems": null
    },
    {
      "latitude": 49.277546,
      "longitude": 7.648798,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 48,
      "squawk": "4451",
      "timestamp": 1649595526,
      "ems": null
    },
    {
      "latitude": 49.279266,
      "longitude": 7.651766,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1649595532,
      "ems": null
    },
    {
      "latitude": 49.281097,
      "longitude": 7.654513,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649595538,
      "ems": null
    },
    {
      "latitude": 49.282516,
      "longitude": 7.656555,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595544,
      "ems": null
    },
    {
      "latitude": 49.28476,
      "longitude": 7.659856,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595550,
      "ems": null
    },
    {
      "latitude": 49.285721,
      "longitude": 7.661203,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595553,
      "ems": null
    },
    {
      "latitude": 49.287556,
      "longitude": 7.663904,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595560,
      "ems": null
    },
    {
      "latitude": 49.288391,
      "longitude": 7.66506,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595562,
      "ems": null
    },
    {
      "latitude": 49.289383,
      "longitude": 7.666274,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595565,
      "ems": null
    },
    {
      "latitude": 49.290302,
      "longitude": 7.667373,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595568,
      "ems": null
    },
    {
      "latitude": 49.292118,
      "longitude": 7.669686,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595574,
      "ems": null
    },
    {
      "latitude": 49.29314,
      "longitude": 7.670987,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595577,
      "ems": null
    },
    {
      "latitude": 49.294052,
      "longitude": 7.672119,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595580,
      "ems": null
    },
    {
      "latitude": 49.295097,
      "longitude": 7.673372,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595584,
      "ems": null
    },
    {
      "latitude": 49.296066,
      "longitude": 7.674584,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595587,
      "ems": null
    },
    {
      "latitude": 49.297806,
      "longitude": 7.676697,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595592,
      "ems": null
    },
    {
      "latitude": 49.299797,
      "longitude": 7.679226,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595599,
      "ems": null
    },
    {
      "latitude": 49.301613,
      "longitude": 7.681684,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595605,
      "ems": null
    },
    {
      "latitude": 49.303391,
      "longitude": 7.684092,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595610,
      "ems": null
    },
    {
      "latitude": 49.305336,
      "longitude": 7.686671,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595617,
      "ems": null
    },
    {
      "latitude": 49.306221,
      "longitude": 7.6879,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595620,
      "ems": null
    },
    {
      "latitude": 49.307991,
      "longitude": 7.69043,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595626,
      "ems": null
    },
    {
      "latitude": 49.308876,
      "longitude": 7.69173,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595628,
      "ems": null
    },
    {
      "latitude": 49.309761,
      "longitude": 7.693104,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595632,
      "ems": null
    },
    {
      "latitude": 49.311527,
      "longitude": 7.695634,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595638,
      "ems": null
    },
    {
      "latitude": 49.313324,
      "longitude": 7.698106,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595643,
      "ems": null
    },
    {
      "latitude": 49.315113,
      "longitude": 7.700549,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595649,
      "ems": null
    },
    {
      "latitude": 49.316929,
      "longitude": 7.702862,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595656,
      "ems": null
    },
    {
      "latitude": 49.318745,
      "longitude": 7.705319,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595662,
      "ems": null
    },
    {
      "latitude": 49.319595,
      "longitude": 7.706346,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595665,
      "ems": null
    },
    {
      "latitude": 49.320557,
      "longitude": 7.707473,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595667,
      "ems": null
    },
    {
      "latitude": 49.322468,
      "longitude": 7.709873,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595674,
      "ems": null
    },
    {
      "latitude": 49.324238,
      "longitude": 7.71233,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595680,
      "ems": null
    },
    {
      "latitude": 49.325912,
      "longitude": 7.714656,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595686,
      "ems": null
    },
    {
      "latitude": 49.327728,
      "longitude": 7.717245,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595692,
      "ems": null
    },
    {
      "latitude": 49.328568,
      "longitude": 7.718459,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595695,
      "ems": null
    },
    {
      "latitude": 49.329346,
      "longitude": 7.719727,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595697,
      "ems": null
    },
    {
      "latitude": 49.330261,
      "longitude": 7.721065,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595701,
      "ems": null
    },
    {
      "latitude": 49.331917,
      "longitude": 7.723606,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595707,
      "ems": null
    },
    {
      "latitude": 49.33374,
      "longitude": 7.726206,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595713,
      "ems": null
    },
    {
      "latitude": 49.335411,
      "longitude": 7.728665,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595719,
      "ems": null
    },
    {
      "latitude": 49.33704,
      "longitude": 7.730978,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595724,
      "ems": null
    },
    {
      "latitude": 49.338913,
      "longitude": 7.733389,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595731,
      "ems": null
    },
    {
      "latitude": 49.340019,
      "longitude": 7.734808,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595734,
      "ems": null
    },
    {
      "latitude": 49.341751,
      "longitude": 7.737051,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595740,
      "ems": null
    },
    {
      "latitude": 49.343788,
      "longitude": 7.739651,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595746,
      "ems": null
    },
    {
      "latitude": 49.34565,
      "longitude": 7.742036,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595752,
      "ems": null
    },
    {
      "latitude": 49.34742,
      "longitude": 7.744349,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595758,
      "ems": null
    },
    {
      "latitude": 49.349331,
      "longitude": 7.746879,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595764,
      "ems": null
    },
    {
      "latitude": 49.351135,
      "longitude": 7.749375,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595770,
      "ems": null
    },
    {
      "latitude": 49.353287,
      "longitude": 7.752372,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595776,
      "ems": null
    },
    {
      "latitude": 49.35553,
      "longitude": 7.755573,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595783,
      "ems": null
    },
    {
      "latitude": 49.357269,
      "longitude": 7.758179,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595790,
      "ems": null
    },
    {
      "latitude": 49.358688,
      "longitude": 7.760362,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595796,
      "ems": null
    },
    {
      "latitude": 49.360519,
      "longitude": 7.762756,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595799,
      "ems": null
    },
    {
      "latitude": 49.362362,
      "longitude": 7.765093,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595805,
      "ems": null
    },
    {
      "latitude": 49.364132,
      "longitude": 7.767406,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595810,
      "ems": null
    },
    {
      "latitude": 49.365761,
      "longitude": 7.769719,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595816,
      "ems": null
    },
    {
      "latitude": 49.368118,
      "longitude": 7.773038,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595823,
      "ems": null
    },
    {
      "latitude": 49.37027,
      "longitude": 7.775644,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649595830,
      "ems": null
    },
    {
      "latitude": 49.372375,
      "longitude": 7.777968,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595836,
      "ems": null
    },
    {
      "latitude": 49.374283,
      "longitude": 7.780272,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595842,
      "ems": null
    },
    {
      "latitude": 49.376083,
      "longitude": 7.782546,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595848,
      "ems": null
    },
    {
      "latitude": 49.378006,
      "longitude": 7.78494,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595854,
      "ems": null
    },
    {
      "latitude": 49.380985,
      "longitude": 7.788728,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595863,
      "ems": null
    },
    {
      "latitude": 49.38382,
      "longitude": 7.792405,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595872,
      "ems": null
    },
    {
      "latitude": 49.385742,
      "longitude": 7.79487,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595878,
      "ems": null
    },
    {
      "latitude": 49.387547,
      "longitude": 7.797329,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595884,
      "ems": null
    },
    {
      "latitude": 49.389542,
      "longitude": 7.800082,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595890,
      "ems": null
    },
    {
      "latitude": 49.391552,
      "longitude": 7.802895,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595896,
      "ems": null
    },
    {
      "latitude": 49.393227,
      "longitude": 7.80528,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595902,
      "ems": null
    },
    {
      "latitude": 49.39616,
      "longitude": 7.8094,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649595911,
      "ems": null
    },
    {
      "latitude": 49.397964,
      "longitude": 7.812265,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 47,
      "squawk": "4451",
      "timestamp": 1649595917,
      "ems": null
    },
    {
      "latitude": 49.398861,
      "longitude": 7.813737,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 46,
      "squawk": "4451",
      "timestamp": 1649595920,
      "ems": null
    },
    {
      "latitude": 49.400677,
      "longitude": 7.816556,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595926,
      "ems": null
    },
    {
      "latitude": 49.403469,
      "longitude": 7.82082,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649595935,
      "ems": null
    },
    {
      "latitude": 49.405334,
      "longitude": 7.823463,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595941,
      "ems": null
    },
    {
      "latitude": 49.406914,
      "longitude": 7.825735,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595946,
      "ems": null
    },
    {
      "latitude": 49.408916,
      "longitude": 7.828699,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649595953,
      "ems": null
    },
    {
      "latitude": 49.409683,
      "longitude": 7.829731,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595956,
      "ems": null
    },
    {
      "latitude": 49.410782,
      "longitude": 7.831069,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649595959,
      "ems": null
    },
    {
      "latitude": 49.41264,
      "longitude": 7.833541,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649595965,
      "ems": null
    },
    {
      "latitude": 49.413712,
      "longitude": 7.834872,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595968,
      "ems": null
    },
    {
      "latitude": 49.414581,
      "longitude": 7.835858,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595971,
      "ems": null
    },
    {
      "latitude": 49.41568,
      "longitude": 7.837125,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595974,
      "ems": null
    },
    {
      "latitude": 49.416595,
      "longitude": 7.838252,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649595977,
      "ems": null
    },
    {
      "latitude": 49.41774,
      "longitude": 7.83959,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649595980,
      "ems": null
    },
    {
      "latitude": 49.419617,
      "longitude": 7.842055,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649595986,
      "ems": null
    },
    {
      "latitude": 49.420273,
      "longitude": 7.843009,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649595989,
      "ems": null
    },
    {
      "latitude": 49.422184,
      "longitude": 7.845829,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595995,
      "ems": null
    },
    {
      "latitude": 49.423302,
      "longitude": 7.847418,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649595998,
      "ems": null
    },
    {
      "latitude": 49.424149,
      "longitude": 7.848675,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649596001,
      "ems": null
    },
    {
      "latitude": 49.424931,
      "longitude": 7.849804,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596004,
      "ems": null
    },
    {
      "latitude": 49.425751,
      "longitude": 7.850999,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596007,
      "ems": null
    },
    {
      "latitude": 49.427628,
      "longitude": 7.853675,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649596013,
      "ems": null
    },
    {
      "latitude": 49.429585,
      "longitude": 7.856486,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596019,
      "ems": null
    },
    {
      "latitude": 49.430515,
      "longitude": 7.8576,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649596022,
      "ems": null
    },
    {
      "latitude": 49.431519,
      "longitude": 7.858694,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649596025,
      "ems": null
    },
    {
      "latitude": 49.432526,
      "longitude": 7.859778,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1649596028,
      "ems": null
    },
    {
      "latitude": 49.43354,
      "longitude": 7.86094,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649596031,
      "ems": null
    },
    {
      "latitude": 49.435265,
      "longitude": 7.863019,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596037,
      "ems": null
    },
    {
      "latitude": 49.437267,
      "longitude": 7.865691,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596043,
      "ems": null
    },
    {
      "latitude": 49.438065,
      "longitude": 7.866789,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596046,
      "ems": null
    },
    {
      "latitude": 49.438896,
      "longitude": 7.867992,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596049,
      "ems": null
    },
    {
      "latitude": 49.439919,
      "longitude": 7.869477,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596052,
      "ems": null
    },
    {
      "latitude": 49.440811,
      "longitude": 7.870837,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649596055,
      "ems": null
    },
    {
      "latitude": 49.441547,
      "longitude": 7.871927,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649596058,
      "ems": null
    },
    {
      "latitude": 49.442551,
      "longitude": 7.873439,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649596062,
      "ems": null
    },
    {
      "latitude": 49.443317,
      "longitude": 7.874673,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649596064,
      "ems": null
    },
    {
      "latitude": 49.445133,
      "longitude": 7.87742,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596070,
      "ems": null
    },
    {
      "latitude": 49.446945,
      "longitude": 7.880088,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596076,
      "ems": null
    },
    {
      "latitude": 49.448856,
      "longitude": 7.882839,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649596082,
      "ems": null
    },
    {
      "latitude": 49.450653,
      "longitude": 7.885437,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596088,
      "ems": null
    },
    {
      "latitude": 49.452072,
      "longitude": 7.887533,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596094,
      "ems": null
    },
    {
      "latitude": 49.45435,
      "longitude": 7.890707,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596100,
      "ems": null
    },
    {
      "latitude": 49.456284,
      "longitude": 7.893532,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596107,
      "ems": null
    },
    {
      "latitude": 49.458355,
      "longitude": 7.896423,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596113,
      "ems": null
    },
    {
      "latitude": 49.460129,
      "longitude": 7.898953,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596119,
      "ems": null
    },
    {
      "latitude": 49.462189,
      "longitude": 7.901917,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596125,
      "ems": null
    },
    {
      "latitude": 49.464111,
      "longitude": 7.904591,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596131,
      "ems": null
    },
    {
      "latitude": 49.465942,
      "longitude": 7.907039,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596136,
      "ems": null
    },
    {
      "latitude": 49.467758,
      "longitude": 7.909414,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596142,
      "ems": null
    },
    {
      "latitude": 49.469879,
      "longitude": 7.912614,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649596149,
      "ems": null
    },
    {
      "latitude": 49.471664,
      "longitude": 7.915288,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596155,
      "ems": null
    },
    {
      "latitude": 49.473392,
      "longitude": 7.917505,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596160,
      "ems": null
    },
    {
      "latitude": 49.475189,
      "longitude": 7.919914,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596166,
      "ems": null
    },
    {
      "latitude": 49.477253,
      "longitude": 7.922627,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596172,
      "ems": null
    },
    {
      "latitude": 49.479351,
      "longitude": 7.925448,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596179,
      "ems": null
    },
    {
      "latitude": 49.481094,
      "longitude": 7.927937,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596184,
      "ems": null
    },
    {
      "latitude": 49.482933,
      "longitude": 7.930421,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596190,
      "ems": null
    },
    {
      "latitude": 49.484985,
      "longitude": 7.933358,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596196,
      "ems": null
    },
    {
      "latitude": 49.486893,
      "longitude": 7.936063,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596202,
      "ems": null
    },
    {
      "latitude": 49.488846,
      "longitude": 7.938735,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596208,
      "ems": null
    },
    {
      "latitude": 49.490845,
      "longitude": 7.941453,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596214,
      "ems": null
    },
    {
      "latitude": 49.492851,
      "longitude": 7.944303,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596221,
      "ems": null
    },
    {
      "latitude": 49.494644,
      "longitude": 7.946874,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596227,
      "ems": null
    },
    {
      "latitude": 49.496342,
      "longitude": 7.949128,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596231,
      "ems": null
    },
    {
      "latitude": 49.498669,
      "longitude": 7.95232,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596239,
      "ems": null
    },
    {
      "latitude": 49.501328,
      "longitude": 7.955908,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596247,
      "ems": null
    },
    {
      "latitude": 49.503185,
      "longitude": 7.958556,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "4451",
      "timestamp": 1649596252,
      "ems": null
    },
    {
      "latitude": 49.504951,
      "longitude": 7.961154,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649596258,
      "ems": null
    },
    {
      "latitude": 49.506729,
      "longitude": 7.963787,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596264,
      "ems": null
    },
    {
      "latitude": 49.508865,
      "longitude": 7.966647,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 39,
      "squawk": "4451",
      "timestamp": 1649596270,
      "ems": null
    },
    {
      "latitude": 49.510666,
      "longitude": 7.968702,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649596277,
      "ems": null
    },
    {
      "latitude": 49.511993,
      "longitude": 7.97022,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649596280,
      "ems": null
    },
    {
      "latitude": 49.5131,
      "longitude": 7.971546,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "4451",
      "timestamp": 1649596283,
      "ems": null
    },
    {
      "latitude": 49.513916,
      "longitude": 7.972533,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 38,
      "squawk": "4451",
      "timestamp": 1649596285,
      "ems": null
    },
    {
      "latitude": 49.516113,
      "longitude": 7.975351,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596292,
      "ems": null
    },
    {
      "latitude": 49.517475,
      "longitude": 7.977113,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596296,
      "ems": null
    },
    {
      "latitude": 49.52092,
      "longitude": 7.981712,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596306,
      "ems": null
    },
    {
      "latitude": 49.523853,
      "longitude": 7.985799,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596315,
      "ems": null
    },
    {
      "latitude": 49.526779,
      "longitude": 7.989735,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596324,
      "ems": null
    },
    {
      "latitude": 49.528656,
      "longitude": 7.992337,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596330,
      "ems": null
    },
    {
      "latitude": 49.530418,
      "longitude": 7.994855,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 44,
      "squawk": "4451",
      "timestamp": 1649596336,
      "ems": null
    },
    {
      "latitude": 49.53228,
      "longitude": 7.99775,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "4451",
      "timestamp": 1649596342,
      "ems": null
    },
    {
      "latitude": 49.535027,
      "longitude": 8.001981,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596351,
      "ems": null
    },
    {
      "latitude": 49.537678,
      "longitude": 8.005692,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596360,
      "ems": null
    },
    {
      "latitude": 49.539356,
      "longitude": 8.007919,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596366,
      "ems": null
    },
    {
      "latitude": 49.542755,
      "longitude": 8.012575,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "4451",
      "timestamp": 1649596376,
      "ems": null
    },
    {
      "latitude": 49.544617,
      "longitude": 8.015195,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "4451",
      "timestamp": 1649596385,
      "ems": null
    },
    {
      "latitude": 49.548019,
      "longitude": 8.019658,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "4451",
      "timestamp": 1649596393,
      "ems": null
    },
    {
      "latitude": 49.549393,
      "longitude": 8.021248,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649596397,
      "ems": null
    },
    {
      "latitude": 49.550247,
      "longitude": 8.022246,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 36,
      "squawk": "4451",
      "timestamp": 1649596400,
      "ems": null
    },
    {
      "latitude": 49.551132,
      "longitude": 8.0232,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "4451",
      "timestamp": 1649596403,
      "ems": null
    },
    {
      "latitude": 49.551926,
      "longitude": 8.024028,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1649596407,
      "ems": null
    },
    {
      "latitude": 49.553055,
      "longitude": 8.025224,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 34,
      "squawk": "4451",
      "timestamp": 1649596410,
      "ems": null
    },
    {
      "latitude": 49.55402,
      "longitude": 8.026181,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1649596412,
      "ems": null
    },
    {
      "latitude": 49.55484,
      "longitude": 8.026958,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 33,
      "squawk": "4451",
      "timestamp": 1649596415,
      "ems": null
    },
    {
      "latitude": 49.557137,
      "longitude": 8.029299,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 32,
      "squawk": "4451",
      "timestamp": 1649596422,
      "ems": null
    },
    {
      "latitude": 49.558182,
      "longitude": 8.029994,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "4451",
      "timestamp": 1649596425,
      "ems": null
    },
    {
      "latitude": 49.559326,
      "longitude": 8.03056,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1649596428,
      "ems": null
    },
    {
      "latitude": 49.560379,
      "longitude": 8.030861,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1649596431,
      "ems": null
    },
    {
      "latitude": 49.560955,
      "longitude": 8.030931,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1649596433,
      "ems": null
    },
    {
      "latitude": 49.562538,
      "longitude": 8.030931,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1649596437,
      "ems": null
    },
    {
      "latitude": 49.563492,
      "longitude": 8.030861,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1649596440,
      "ems": null
    },
    {
      "latitude": 49.564728,
      "longitude": 8.030789,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1649596442,
      "ems": null
    },
    {
      "latitude": 49.566101,
      "longitude": 8.030789,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1649596446,
      "ems": null
    },
    {
      "latitude": 49.567474,
      "longitude": 8.030783,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1649596449,
      "ems": null
    },
    {
      "latitude": 49.568573,
      "longitude": 8.030861,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1649596452,
      "ems": null
    },
    {
      "latitude": 49.570038,
      "longitude": 8.030861,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1649596455,
      "ems": null
    },
    {
      "latitude": 49.570869,
      "longitude": 8.030783,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1649596458,
      "ems": null
    },
    {
      "latitude": 49.572418,
      "longitude": 8.030789,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1649596461,
      "ems": null
    },
    {
      "latitude": 49.573334,
      "longitude": 8.030861,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1649596464,
      "ems": null
    },
    {
      "latitude": 49.576225,
      "longitude": 8.030931,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "4451",
      "timestamp": 1649596470,
      "ems": null
    },
    {
      "latitude": 49.579109,
      "longitude": 8.030931,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1649596478,
      "ems": null
    },
    {
      "latitude": 49.580704,
      "longitude": 8.030717,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1649596481,
      "ems": null
    },
    {
      "latitude": 49.581856,
      "longitude": 8.030264,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1649596484,
      "ems": null
    },
    {
      "latitude": 49.583069,
      "longitude": 8.02967,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1649596487,
      "ems": null
    },
    {
      "latitude": 49.584324,
      "longitude": 8.028928,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1649596490,
      "ems": null
    },
    {
      "latitude": 49.585537,
      "longitude": 8.028111,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1649596493,
      "ems": null
    },
    {
      "latitude": 49.586605,
      "longitude": 8.027443,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596496,
      "ems": null
    },
    {
      "latitude": 49.587399,
      "longitude": 8.026923,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596500,
      "ems": null
    },
    {
      "latitude": 49.589493,
      "longitude": 8.025438,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596504,
      "ems": null
    },
    {
      "latitude": 49.590866,
      "longitude": 8.024501,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596508,
      "ems": null
    },
    {
      "latitude": 49.592194,
      "longitude": 8.023582,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596511,
      "ems": null
    },
    {
      "latitude": 49.593124,
      "longitude": 8.022915,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596514,
      "ems": null
    },
    {
      "latitude": 49.596428,
      "longitude": 8.020688,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596523,
      "ems": null
    },
    {
      "latitude": 49.598476,
      "longitude": 8.019425,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596529,
      "ems": null
    },
    {
      "latitude": 49.600525,
      "longitude": 8.017996,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596535,
      "ems": null
    },
    {
      "latitude": 49.602493,
      "longitude": 8.016767,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596540,
      "ems": null
    },
    {
      "latitude": 49.604527,
      "longitude": 8.015491,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1649596546,
      "ems": null
    },
    {
      "latitude": 49.606529,
      "longitude": 8.014303,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649596552,
      "ems": null
    },
    {
      "latitude": 49.608627,
      "longitude": 8.013081,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596559,
      "ems": null
    },
    {
      "latitude": 49.610489,
      "longitude": 8.01178,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596565,
      "ems": null
    },
    {
      "latitude": 49.612396,
      "longitude": 8.010592,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596571,
      "ems": null
    },
    {
      "latitude": 49.614166,
      "longitude": 8.00925,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596576,
      "ems": null
    },
    {
      "latitude": 49.615082,
      "longitude": 8.008599,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649596579,
      "ems": null
    },
    {
      "latitude": 49.615982,
      "longitude": 8.007846,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649596583,
      "ems": null
    },
    {
      "latitude": 49.616863,
      "longitude": 8.007103,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649596585,
      "ems": null
    },
    {
      "latitude": 49.617702,
      "longitude": 8.006361,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649596589,
      "ems": null
    },
    {
      "latitude": 49.618446,
      "longitude": 8.005692,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649596592,
      "ems": null
    },
    {
      "latitude": 49.619339,
      "longitude": 8.004913,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649596594,
      "ems": null
    },
    {
      "latitude": 49.620216,
      "longitude": 8.004134,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649596598,
      "ems": null
    },
    {
      "latitude": 49.621902,
      "longitude": 8.002673,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596604,
      "ems": null
    },
    {
      "latitude": 49.623779,
      "longitude": 8.0013,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596610,
      "ems": null
    },
    {
      "latitude": 49.625523,
      "longitude": 8.000051,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596616,
      "ems": null
    },
    {
      "latitude": 49.626499,
      "longitude": 7.999383,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596618,
      "ems": null
    },
    {
      "latitude": 49.627487,
      "longitude": 7.99877,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596621,
      "ems": null
    },
    {
      "latitude": 49.628448,
      "longitude": 7.998047,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596625,
      "ems": null
    },
    {
      "latitude": 49.630363,
      "longitude": 7.996711,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596630,
      "ems": null
    },
    {
      "latitude": 49.632385,
      "longitude": 7.995156,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596637,
      "ems": null
    },
    {
      "latitude": 49.634369,
      "longitude": 7.993742,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596643,
      "ems": null
    },
    {
      "latitude": 49.636322,
      "longitude": 7.992481,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649596649,
      "ems": null
    },
    {
      "latitude": 49.638371,
      "longitude": 7.991218,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596655,
      "ems": null
    },
    {
      "latitude": 49.640327,
      "longitude": 7.989882,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596661,
      "ems": null
    },
    {
      "latitude": 49.64233,
      "longitude": 7.988471,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596667,
      "ems": null
    },
    {
      "latitude": 49.644379,
      "longitude": 7.986988,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596673,
      "ems": null
    },
    {
      "latitude": 49.64624,
      "longitude": 7.98565,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596679,
      "ems": null
    },
    {
      "latitude": 49.649506,
      "longitude": 7.983085,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596688,
      "ems": null
    },
    {
      "latitude": 49.651474,
      "longitude": 7.981567,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596694,
      "ems": null
    },
    {
      "latitude": 49.654247,
      "longitude": 7.979489,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596703,
      "ems": null
    },
    {
      "latitude": 49.656097,
      "longitude": 7.97817,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596709,
      "ems": null
    },
    {
      "latitude": 49.658016,
      "longitude": 7.976742,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596715,
      "ems": null
    },
    {
      "latitude": 49.659943,
      "longitude": 7.975351,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596721,
      "ems": null
    },
    {
      "latitude": 49.661774,
      "longitude": 7.974051,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596726,
      "ems": null
    },
    {
      "latitude": 49.663788,
      "longitude": 7.972808,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596733,
      "ems": null
    },
    {
      "latitude": 49.665939,
      "longitude": 7.971521,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649596739,
      "ems": null
    },
    {
      "latitude": 49.667953,
      "longitude": 7.970148,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596745,
      "ems": null
    },
    {
      "latitude": 49.669968,
      "longitude": 7.968774,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596751,
      "ems": null
    },
    {
      "latitude": 49.671795,
      "longitude": 7.967463,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596757,
      "ems": null
    },
    {
      "latitude": 49.673859,
      "longitude": 7.966028,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596763,
      "ems": null
    },
    {
      "latitude": 49.67487,
      "longitude": 7.965236,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649596766,
      "ems": null
    },
    {
      "latitude": 49.675613,
      "longitude": 7.964643,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649596769,
      "ems": null
    },
    {
      "latitude": 49.676926,
      "longitude": 7.963498,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649596772,
      "ems": null
    },
    {
      "latitude": 49.678825,
      "longitude": 7.962044,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596778,
      "ems": null
    },
    {
      "latitude": 49.68092,
      "longitude": 7.96056,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596784,
      "ems": null
    },
    {
      "latitude": 49.682831,
      "longitude": 7.959016,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649596790,
      "ems": null
    },
    {
      "latitude": 49.685165,
      "longitude": 7.957354,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596796,
      "ems": null
    },
    {
      "latitude": 49.68581,
      "longitude": 7.956996,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596799,
      "ems": null
    },
    {
      "latitude": 49.687225,
      "longitude": 7.956125,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649596802,
      "ems": null
    },
    {
      "latitude": 49.688091,
      "longitude": 7.95566,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1649596805,
      "ems": null
    },
    {
      "latitude": 49.690201,
      "longitude": 7.954246,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596811,
      "ems": null
    },
    {
      "latitude": 49.692169,
      "longitude": 7.952801,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596817,
      "ems": null
    },
    {
      "latitude": 49.694328,
      "longitude": 7.951132,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649596823,
      "ems": null
    },
    {
      "latitude": 49.695236,
      "longitude": 7.950271,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649596826,
      "ems": null
    },
    {
      "latitude": 49.696152,
      "longitude": 7.949331,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649596829,
      "ems": null
    },
    {
      "latitude": 49.697021,
      "longitude": 7.948536,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649596832,
      "ems": null
    },
    {
      "latitude": 49.699078,
      "longitude": 7.94705,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596838,
      "ems": null
    },
    {
      "latitude": 49.700089,
      "longitude": 7.946512,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649596841,
      "ems": null
    },
    {
      "latitude": 49.70192,
      "longitude": 7.945283,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649596847,
      "ems": null
    },
    {
      "latitude": 49.704071,
      "longitude": 7.943694,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596853,
      "ems": null
    },
    {
      "latitude": 49.704941,
      "longitude": 7.943041,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649596856,
      "ems": null
    },
    {
      "latitude": 49.705811,
      "longitude": 7.942392,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596859,
      "ems": null
    },
    {
      "latitude": 49.706909,
      "longitude": 7.941742,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649596862,
      "ems": null
    },
    {
      "latitude": 49.708099,
      "longitude": 7.941092,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1649596865,
      "ems": null
    },
    {
      "latitude": 49.710247,
      "longitude": 7.940294,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1649596871,
      "ems": null
    },
    {
      "latitude": 49.711029,
      "longitude": 7.940007,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1649596873,
      "ems": null
    },
    {
      "latitude": 49.712814,
      "longitude": 7.939357,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1649596878,
      "ems": null
    },
    {
      "latitude": 49.71439,
      "longitude": 7.93881,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1649596882,
      "ems": null
    },
    {
      "latitude": 49.715508,
      "longitude": 7.938438,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1649596885,
      "ems": null
    },
    {
      "latitude": 49.716476,
      "longitude": 7.938056,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1649596888,
      "ems": null
    },
    {
      "latitude": 49.717621,
      "longitude": 7.937622,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1649596891,
      "ems": null
    },
    {
      "latitude": 49.719452,
      "longitude": 7.936827,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1649596897,
      "ems": null
    },
    {
      "latitude": 49.722244,
      "longitude": 7.935526,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1649596905,
      "ems": null
    },
    {
      "latitude": 49.725796,
      "longitude": 7.933688,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1649596914,
      "ems": null
    },
    {
      "latitude": 49.726959,
      "longitude": 7.93302,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649596918,
      "ems": null
    },
    {
      "latitude": 49.728264,
      "longitude": 7.932277,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649596922,
      "ems": null
    },
    {
      "latitude": 49.730164,
      "longitude": 7.930973,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649596927,
      "ems": null
    },
    {
      "latitude": 49.731857,
      "longitude": 7.929961,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649596932,
      "ems": null
    },
    {
      "latitude": 49.733002,
      "longitude": 7.929238,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649596936,
      "ems": null
    },
    {
      "latitude": 49.735897,
      "longitude": 7.927675,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1649596945,
      "ems": null
    },
    {
      "latitude": 49.739365,
      "longitude": 7.925913,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1649596953,
      "ems": null
    },
    {
      "latitude": 49.742603,
      "longitude": 7.924335,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1649596962,
      "ems": null
    },
    {
      "latitude": 49.746368,
      "longitude": 7.922588,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1649596971,
      "ems": null
    },
    {
      "latitude": 49.74963,
      "longitude": 7.92092,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1649596980,
      "ems": null
    },
    {
      "latitude": 49.752659,
      "longitude": 7.919435,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1649596989,
      "ems": null
    },
    {
      "latitude": 49.755661,
      "longitude": 7.917601,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649596997,
      "ems": null
    },
    {
      "latitude": 49.757401,
      "longitude": 7.916372,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649597001,
      "ems": null
    },
    {
      "latitude": 49.76033,
      "longitude": 7.914638,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649597010,
      "ems": null
    },
    {
      "latitude": 49.763306,
      "longitude": 7.91312,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1649597018,
      "ems": null
    },
    {
      "latitude": 49.766064,
      "longitude": 7.911641,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1649597026,
      "ems": null
    },
    {
      "latitude": 49.768906,
      "longitude": 7.909934,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649597034,
      "ems": null
    },
    {
      "latitude": 49.770813,
      "longitude": 7.908746,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649597040,
      "ems": null
    },
    {
      "latitude": 49.772781,
      "longitude": 7.907554,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649597046,
      "ems": null
    },
    {
      "latitude": 49.7742,
      "longitude": 7.906542,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597049,
      "ems": null
    },
    {
      "latitude": 49.775253,
      "longitude": 7.905747,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597052,
      "ems": null
    },
    {
      "latitude": 49.775803,
      "longitude": 7.905313,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597055,
      "ems": null
    },
    {
      "latitude": 49.777359,
      "longitude": 7.904085,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597058,
      "ems": null
    },
    {
      "latitude": 49.778355,
      "longitude": 7.903327,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597061,
      "ems": null
    },
    {
      "latitude": 49.780518,
      "longitude": 7.901772,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597067,
      "ems": null
    },
    {
      "latitude": 49.782715,
      "longitude": 7.90011,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597073,
      "ems": null
    },
    {
      "latitude": 49.784821,
      "longitude": 7.898303,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597079,
      "ems": null
    },
    {
      "latitude": 49.787945,
      "longitude": 7.895978,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597088,
      "ems": null
    },
    {
      "latitude": 49.79018,
      "longitude": 7.89427,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597094,
      "ems": null
    },
    {
      "latitude": 49.792507,
      "longitude": 7.892415,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597100,
      "ems": null
    },
    {
      "latitude": 49.794617,
      "longitude": 7.890786,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597106,
      "ems": null
    },
    {
      "latitude": 49.796787,
      "longitude": 7.889149,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597112,
      "ems": null
    },
    {
      "latitude": 49.798691,
      "longitude": 7.887605,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649597118,
      "ems": null
    },
    {
      "latitude": 49.800842,
      "longitude": 7.885798,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597124,
      "ems": null
    },
    {
      "latitude": 49.802673,
      "longitude": 7.884353,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597130,
      "ems": null
    },
    {
      "latitude": 49.804657,
      "longitude": 7.882765,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597136,
      "ems": null
    },
    {
      "latitude": 49.806473,
      "longitude": 7.88128,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597142,
      "ems": null
    },
    {
      "latitude": 49.808193,
      "longitude": 7.879869,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597147,
      "ems": null
    },
    {
      "latitude": 49.810242,
      "longitude": 7.878162,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597154,
      "ems": null
    },
    {
      "latitude": 49.812378,
      "longitude": 7.876547,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597160,
      "ems": null
    },
    {
      "latitude": 49.813686,
      "longitude": 7.87549,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597166,
      "ems": null
    },
    {
      "latitude": 49.816132,
      "longitude": 7.873728,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597172,
      "ems": null
    },
    {
      "latitude": 49.818329,
      "longitude": 7.872066,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597178,
      "ems": null
    },
    {
      "latitude": 49.820389,
      "longitude": 7.870475,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597184,
      "ems": null
    },
    {
      "latitude": 49.823273,
      "longitude": 7.868235,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597193,
      "ems": null
    },
    {
      "latitude": 49.825241,
      "longitude": 7.866717,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597199,
      "ems": null
    },
    {
      "latitude": 49.827793,
      "longitude": 7.864578,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597207,
      "ems": null
    },
    {
      "latitude": 49.829544,
      "longitude": 7.863175,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597213,
      "ems": null
    },
    {
      "latitude": 49.832474,
      "longitude": 7.860718,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649597221,
      "ems": null
    },
    {
      "latitude": 49.835037,
      "longitude": 7.85855,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597229,
      "ems": null
    },
    {
      "latitude": 49.837662,
      "longitude": 7.856412,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597237,
      "ems": null
    },
    {
      "latitude": 49.840454,
      "longitude": 7.854334,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597245,
      "ems": null
    },
    {
      "latitude": 49.842922,
      "longitude": 7.852404,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597253,
      "ems": null
    },
    {
      "latitude": 49.845154,
      "longitude": 7.850454,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649597261,
      "ems": null
    },
    {
      "latitude": 49.846848,
      "longitude": 7.84872,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649597265,
      "ems": null
    },
    {
      "latitude": 49.847992,
      "longitude": 7.847563,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649597269,
      "ems": null
    },
    {
      "latitude": 49.849136,
      "longitude": 7.846406,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649597273,
      "ems": null
    },
    {
      "latitude": 49.850185,
      "longitude": 7.845426,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649597277,
      "ems": null
    },
    {
      "latitude": 49.852478,
      "longitude": 7.843443,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649597285,
      "ems": null
    },
    {
      "latitude": 49.854794,
      "longitude": 7.841343,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649597291,
      "ems": null
    },
    {
      "latitude": 49.856655,
      "longitude": 7.839784,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597297,
      "ems": null
    },
    {
      "latitude": 49.857914,
      "longitude": 7.838745,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597301,
      "ems": null
    },
    {
      "latitude": 49.860378,
      "longitude": 7.836667,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597309,
      "ems": null
    },
    {
      "latitude": 49.861496,
      "longitude": 7.835854,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649597313,
      "ems": null
    },
    {
      "latitude": 49.862473,
      "longitude": 7.835182,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649597316,
      "ems": null
    },
    {
      "latitude": 49.864014,
      "longitude": 7.834481,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1649597320,
      "ems": null
    },
    {
      "latitude": 49.865662,
      "longitude": 7.834192,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1649597325,
      "ems": null
    },
    {
      "latitude": 49.867401,
      "longitude": 7.833975,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1649597329,
      "ems": null
    },
    {
      "latitude": 49.868362,
      "longitude": 7.833902,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1649597333,
      "ems": null
    },
    {
      "latitude": 49.870064,
      "longitude": 7.833697,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1649597337,
      "ems": null
    },
    {
      "latitude": 49.871693,
      "longitude": 7.833697,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 359,
      "squawk": "4451",
      "timestamp": 1649597341,
      "ems": null
    },
    {
      "latitude": 49.873535,
      "longitude": 7.833758,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 360,
      "squawk": "4451",
      "timestamp": 1649597346,
      "ems": null
    },
    {
      "latitude": 49.87537,
      "longitude": 7.83392,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 2,
      "squawk": "4451",
      "timestamp": 1649597351,
      "ems": null
    },
    {
      "latitude": 49.876907,
      "longitude": 7.834068,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1649597355,
      "ems": null
    },
    {
      "latitude": 49.878395,
      "longitude": 7.834291,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1649597359,
      "ems": null
    },
    {
      "latitude": 49.879623,
      "longitude": 7.834408,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1649597363,
      "ems": null
    },
    {
      "latitude": 49.880997,
      "longitude": 7.834698,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1649597367,
      "ems": null
    },
    {
      "latitude": 49.882645,
      "longitude": 7.834987,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1649597372,
      "ems": null
    },
    {
      "latitude": 49.885208,
      "longitude": 7.835276,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1649597379,
      "ems": null
    },
    {
      "latitude": 49.887798,
      "longitude": 7.835553,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 4,
      "squawk": "4451",
      "timestamp": 1649597385,
      "ems": null
    },
    {
      "latitude": 49.890152,
      "longitude": 7.835926,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 5,
      "squawk": "4451",
      "timestamp": 1649597391,
      "ems": null
    },
    {
      "latitude": 49.8932,
      "longitude": 7.836444,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1649597400,
      "ems": null
    },
    {
      "latitude": 49.894547,
      "longitude": 7.836721,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1649597403,
      "ems": null
    },
    {
      "latitude": 49.896927,
      "longitude": 7.837299,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1649597409,
      "ems": null
    },
    {
      "latitude": 49.899063,
      "longitude": 7.837929,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1649597415,
      "ems": null
    },
    {
      "latitude": 49.901321,
      "longitude": 7.838528,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1649597421,
      "ems": null
    },
    {
      "latitude": 49.903439,
      "longitude": 7.839116,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1649597427,
      "ems": null
    },
    {
      "latitude": 49.905807,
      "longitude": 7.839901,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1649597433,
      "ems": null
    },
    {
      "latitude": 49.907913,
      "longitude": 7.840552,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1649597439,
      "ems": null
    },
    {
      "latitude": 49.910423,
      "longitude": 7.841269,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1649597445,
      "ems": null
    },
    {
      "latitude": 49.912674,
      "longitude": 7.841853,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1649597451,
      "ems": null
    },
    {
      "latitude": 49.914963,
      "longitude": 7.842215,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1649597457,
      "ems": null
    },
    {
      "latitude": 49.917358,
      "longitude": 7.842828,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1649597463,
      "ems": null
    },
    {
      "latitude": 49.918396,
      "longitude": 7.843009,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1649597466,
      "ems": null
    },
    {
      "latitude": 49.920776,
      "longitude": 7.843515,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1649597472,
      "ems": null
    },
    {
      "latitude": 49.923294,
      "longitude": 7.844166,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1649597478,
      "ems": null
    },
    {
      "latitude": 49.925552,
      "longitude": 7.844832,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1649597484,
      "ems": null
    },
    {
      "latitude": 49.926716,
      "longitude": 7.845352,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1649597487,
      "ems": null
    },
    {
      "latitude": 49.927925,
      "longitude": 7.845946,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1649597490,
      "ems": null
    },
    {
      "latitude": 49.929153,
      "longitude": 7.846551,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1649597493,
      "ems": null
    },
    {
      "latitude": 49.930252,
      "longitude": 7.846985,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1649597496,
      "ems": null
    },
    {
      "latitude": 49.931442,
      "longitude": 7.847418,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1649597499,
      "ems": null
    },
    {
      "latitude": 49.93277,
      "longitude": 7.847997,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1649597502,
      "ems": null
    },
    {
      "latitude": 49.933559,
      "longitude": 7.848321,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1649597505,
      "ems": null
    },
    {
      "latitude": 49.934738,
      "longitude": 7.848937,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "4451",
      "timestamp": 1649597508,
      "ems": null
    },
    {
      "latitude": 49.936073,
      "longitude": 7.849583,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 18,
      "squawk": "4451",
      "timestamp": 1649597511,
      "ems": null
    },
    {
      "latitude": 49.937943,
      "longitude": 7.850526,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 19,
      "squawk": "4451",
      "timestamp": 1649597517,
      "ems": null
    },
    {
      "latitude": 49.940544,
      "longitude": 7.85181,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1649597523,
      "ems": null
    },
    {
      "latitude": 49.943104,
      "longitude": 7.852775,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1649597529,
      "ems": null
    },
    {
      "latitude": 49.945522,
      "longitude": 7.853666,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1649597535,
      "ems": null
    },
    {
      "latitude": 49.946777,
      "longitude": 7.854068,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1649597538,
      "ems": null
    },
    {
      "latitude": 49.947758,
      "longitude": 7.854408,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 11,
      "squawk": "4451",
      "timestamp": 1649597541,
      "ems": null
    },
    {
      "latitude": 49.950256,
      "longitude": 7.855369,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1649597547,
      "ems": null
    },
    {
      "latitude": 49.952599,
      "longitude": 7.856338,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "4451",
      "timestamp": 1649597554,
      "ems": null
    },
    {
      "latitude": 49.954788,
      "longitude": 7.856959,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1649597560,
      "ems": null
    },
    {
      "latitude": 49.957077,
      "longitude": 7.857754,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1649597565,
      "ems": null
    },
    {
      "latitude": 49.95977,
      "longitude": 7.858639,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 10,
      "squawk": "4451",
      "timestamp": 1649597572,
      "ems": null
    },
    {
      "latitude": 49.962002,
      "longitude": 7.859456,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 13,
      "squawk": "4451",
      "timestamp": 1649597578,
      "ems": null
    },
    {
      "latitude": 49.964539,
      "longitude": 7.860573,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 17,
      "squawk": "4451",
      "timestamp": 1649597583,
      "ems": null
    },
    {
      "latitude": 49.965076,
      "longitude": 7.860792,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 15,
      "squawk": "4451",
      "timestamp": 1649597586,
      "ems": null
    },
    {
      "latitude": 49.967972,
      "longitude": 7.861947,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 14,
      "squawk": "4451",
      "timestamp": 1649597592,
      "ems": null
    },
    {
      "latitude": 49.970215,
      "longitude": 7.862597,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1649597598,
      "ems": null
    },
    {
      "latitude": 49.971542,
      "longitude": 7.862814,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1649597601,
      "ems": null
    },
    {
      "latitude": 49.972733,
      "longitude": 7.863103,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 8,
      "squawk": "4451",
      "timestamp": 1649597604,
      "ems": null
    },
    {
      "latitude": 49.973831,
      "longitude": 7.86332,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 6,
      "squawk": "4451",
      "timestamp": 1649597608,
      "ems": null
    },
    {
      "latitude": 49.974384,
      "longitude": 7.863464,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1649597610,
      "ems": null
    },
    {
      "latitude": 49.976212,
      "longitude": 7.863898,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "4451",
      "timestamp": 1649597613,
      "ems": null
    },
    {
      "latitude": 49.977459,
      "longitude": 7.864132,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "4451",
      "timestamp": 1649597617,
      "ems": null
    },
    {
      "latitude": 49.978592,
      "longitude": 7.864332,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "4451",
      "timestamp": 1649597619,
      "ems": null
    },
    {
      "latitude": 49.980019,
      "longitude": 7.864355,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1649597623,
      "ems": null
    },
    {
      "latitude": 49.981796,
      "longitude": 7.86397,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1649597627,
      "ems": null
    },
    {
      "latitude": 49.983261,
      "longitude": 7.863464,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1649597631,
      "ems": null
    },
    {
      "latitude": 49.984909,
      "longitude": 7.862814,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1649597635,
      "ems": null
    },
    {
      "latitude": 49.986488,
      "longitude": 7.862203,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1649597639,
      "ems": null
    },
    {
      "latitude": 49.988117,
      "longitude": 7.861534,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1649597643,
      "ems": null
    },
    {
      "latitude": 49.989761,
      "longitude": 7.86079,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1649597647,
      "ems": null
    },
    {
      "latitude": 49.991516,
      "longitude": 7.86005,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1649597651,
      "ems": null
    },
    {
      "latitude": 49.992874,
      "longitude": 7.859344,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1649597655,
      "ems": null
    },
    {
      "latitude": 49.994404,
      "longitude": 7.858417,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649597659,
      "ems": null
    },
    {
      "latitude": 49.996124,
      "longitude": 7.857248,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649597663,
      "ems": null
    },
    {
      "latitude": 49.996918,
      "longitude": 7.856635,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597667,
      "ems": null
    },
    {
      "latitude": 49.998825,
      "longitude": 7.855076,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649597671,
      "ems": null
    },
    {
      "latitude": 50.000244,
      "longitude": 7.853779,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649597675,
      "ems": null
    },
    {
      "latitude": 50.002075,
      "longitude": 7.8519,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649597680,
      "ems": null
    },
    {
      "latitude": 50.003296,
      "longitude": 7.850548,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649597684,
      "ems": null
    },
    {
      "latitude": 50.004135,
      "longitude": 7.849587,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1649597688,
      "ems": null
    },
    {
      "latitude": 50.005714,
      "longitude": 7.847801,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649597692,
      "ems": null
    },
    {
      "latitude": 50.007019,
      "longitude": 7.846391,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1649597696,
      "ems": null
    },
    {
      "latitude": 50.008301,
      "longitude": 7.844672,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649597700,
      "ems": null
    },
    {
      "latitude": 50.008926,
      "longitude": 7.843867,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1649597704,
      "ems": null
    },
    {
      "latitude": 50.010544,
      "longitude": 7.841853,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1649597708,
      "ems": null
    },
    {
      "latitude": 50.01321,
      "longitude": 7.838745,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1649597717,
      "ems": null
    },
    {
      "latitude": 50.015167,
      "longitude": 7.836221,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649597725,
      "ems": null
    },
    {
      "latitude": 50.016701,
      "longitude": 7.833994,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649597731,
      "ems": null
    },
    {
      "latitude": 50.018646,
      "longitude": 7.831228,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649597737,
      "ems": null
    },
    {
      "latitude": 50.020706,
      "longitude": 7.828409,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649597745,
      "ems": null
    },
    {
      "latitude": 50.023033,
      "longitude": 7.825309,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1649597753,
      "ems": null
    },
    {
      "latitude": 50.024242,
      "longitude": 7.823824,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1649597757,
      "ems": null
    },
    {
      "latitude": 50.026382,
      "longitude": 7.82082,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649597765,
      "ems": null
    },
    {
      "latitude": 50.028618,
      "longitude": 7.817738,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1649597773,
      "ems": null
    },
    {
      "latitude": 50.030949,
      "longitude": 7.814694,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1649597781,
      "ems": null
    },
    {
      "latitude": 50.032158,
      "longitude": 7.812987,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1649597785,
      "ems": null
    },
    {
      "latitude": 50.034027,
      "longitude": 7.810267,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1649597793,
      "ems": null
    },
    {
      "latitude": 50.03672,
      "longitude": 7.80638,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1649597802,
      "ems": null
    },
    {
      "latitude": 50.038956,
      "longitude": 7.803411,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1649597810,
      "ems": null
    },
    {
      "latitude": 50.040115,
      "longitude": 7.8021,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649597814,
      "ems": null
    },
    {
      "latitude": 50.040722,
      "longitude": 7.801481,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649597818,
      "ems": null
    },
    {
      "latitude": 50.04277,
      "longitude": 7.799426,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649597822,
      "ems": null
    },
    {
      "latitude": 50.044189,
      "longitude": 7.798197,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649597826,
      "ems": null
    },
    {
      "latitude": 50.045147,
      "longitude": 7.797546,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649597830,
      "ems": null
    },
    {
      "latitude": 50.045891,
      "longitude": 7.797027,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649597833,
      "ems": null
    },
    {
      "latitude": 50.046776,
      "longitude": 7.796433,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597835,
      "ems": null
    },
    {
      "latitude": 50.048683,
      "longitude": 7.794948,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597839,
      "ems": null
    },
    {
      "latitude": 50.050079,
      "longitude": 7.793909,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597843,
      "ems": null
    },
    {
      "latitude": 50.051834,
      "longitude": 7.792487,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597848,
      "ems": null
    },
    {
      "latitude": 50.052841,
      "longitude": 7.791836,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649597851,
      "ems": null
    },
    {
      "latitude": 50.054214,
      "longitude": 7.790969,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649597855,
      "ems": null
    },
    {
      "latitude": 50.054581,
      "longitude": 7.790752,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649597859,
      "ems": null
    },
    {
      "latitude": 50.058838,
      "longitude": 7.788584,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649597867,
      "ems": null
    },
    {
      "latitude": 50.060322,
      "longitude": 7.787525,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649597871,
      "ems": null
    },
    {
      "latitude": 50.063068,
      "longitude": 7.785001,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597878,
      "ems": null
    },
    {
      "latitude": 50.064423,
      "longitude": 7.783669,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649597882,
      "ems": null
    },
    {
      "latitude": 50.065292,
      "longitude": 7.782802,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649597886,
      "ems": null
    },
    {
      "latitude": 50.066605,
      "longitude": 7.78129,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649597890,
      "ems": null
    },
    {
      "latitude": 50.068096,
      "longitude": 7.779805,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649597894,
      "ems": null
    },
    {
      "latitude": 50.068329,
      "longitude": 7.779582,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649597894,
      "ems": null
    },
    {
      "latitude": 50.069633,
      "longitude": 7.77832,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649597898,
      "ems": null
    },
    {
      "latitude": 50.071774,
      "longitude": 7.776242,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649597905,
      "ems": null
    },
    {
      "latitude": 50.075359,
      "longitude": 7.773124,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649597915,
      "ems": null
    },
    {
      "latitude": 50.077835,
      "longitude": 7.770586,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649597923,
      "ems": null
    },
    {
      "latitude": 50.079666,
      "longitude": 7.768707,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649597929,
      "ems": null
    },
    {
      "latitude": 50.081551,
      "longitude": 7.76674,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649597935,
      "ems": null
    },
    {
      "latitude": 50.083832,
      "longitude": 7.764587,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597943,
      "ems": null
    },
    {
      "latitude": 50.085785,
      "longitude": 7.762954,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649597952,
      "ems": null
    },
    {
      "latitude": 50.088455,
      "longitude": 7.760756,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597958,
      "ems": null
    },
    {
      "latitude": 50.089882,
      "longitude": 7.759688,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597962,
      "ems": null
    },
    {
      "latitude": 50.09198,
      "longitude": 7.758082,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649597967,
      "ems": null
    },
    {
      "latitude": 50.094303,
      "longitude": 7.756273,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597975,
      "ems": null
    },
    {
      "latitude": 50.095917,
      "longitude": 7.75483,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649597980,
      "ems": null
    },
    {
      "latitude": 50.09882,
      "longitude": 7.752191,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649597989,
      "ems": null
    },
    {
      "latitude": 50.101799,
      "longitude": 7.749815,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649597998,
      "ems": null
    },
    {
      "latitude": 50.103516,
      "longitude": 7.748469,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649598004,
      "ems": null
    },
    {
      "latitude": 50.106812,
      "longitude": 7.745723,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598015,
      "ems": null
    },
    {
      "latitude": 50.109249,
      "longitude": 7.74358,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598021,
      "ems": null
    },
    {
      "latitude": 50.111938,
      "longitude": 7.740952,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649598030,
      "ems": null
    },
    {
      "latitude": 50.113678,
      "longitude": 7.739435,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598035,
      "ems": null
    },
    {
      "latitude": 50.116837,
      "longitude": 7.736905,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598044,
      "ems": null
    },
    {
      "latitude": 50.118557,
      "longitude": 7.735711,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598050,
      "ems": null
    },
    {
      "latitude": 50.122284,
      "longitude": 7.732594,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598061,
      "ems": null
    },
    {
      "latitude": 50.123585,
      "longitude": 7.73148,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598066,
      "ems": null
    },
    {
      "latitude": 50.126797,
      "longitude": 7.728734,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598076,
      "ems": null
    },
    {
      "latitude": 50.129883,
      "longitude": 7.725846,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598087,
      "ems": null
    },
    {
      "latitude": 50.132858,
      "longitude": 7.723389,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598097,
      "ems": null
    },
    {
      "latitude": 50.134369,
      "longitude": 7.722304,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598102,
      "ems": null
    },
    {
      "latitude": 50.13541,
      "longitude": 7.721607,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649598106,
      "ems": null
    },
    {
      "latitude": 50.136795,
      "longitude": 7.72057,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598111,
      "ems": null
    },
    {
      "latitude": 50.138435,
      "longitude": 7.71938,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598116,
      "ems": null
    },
    {
      "latitude": 50.140457,
      "longitude": 7.717751,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598123,
      "ems": null
    },
    {
      "latitude": 50.14183,
      "longitude": 7.716522,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649598128,
      "ems": null
    },
    {
      "latitude": 50.143185,
      "longitude": 7.715149,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649598133,
      "ems": null
    },
    {
      "latitude": 50.146072,
      "longitude": 7.711957,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649598144,
      "ems": null
    },
    {
      "latitude": 50.148972,
      "longitude": 7.709367,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598154,
      "ems": null
    },
    {
      "latitude": 50.150482,
      "longitude": 7.707994,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598159,
      "ems": null
    },
    {
      "latitude": 50.152222,
      "longitude": 7.706548,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598165,
      "ems": null
    },
    {
      "latitude": 50.155334,
      "longitude": 7.703657,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598175,
      "ems": null
    },
    {
      "latitude": 50.158447,
      "longitude": 7.700693,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649598185,
      "ems": null
    },
    {
      "latitude": 50.161972,
      "longitude": 7.697585,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598196,
      "ems": null
    },
    {
      "latitude": 50.163483,
      "longitude": 7.696368,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598201,
      "ems": null
    },
    {
      "latitude": 50.165543,
      "longitude": 7.694839,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649598206,
      "ems": null
    },
    {
      "latitude": 50.169296,
      "longitude": 7.69202,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598216,
      "ems": null
    },
    {
      "latitude": 50.171127,
      "longitude": 7.690574,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598221,
      "ems": null
    },
    {
      "latitude": 50.174698,
      "longitude": 7.687466,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598232,
      "ems": null
    },
    {
      "latitude": 50.178223,
      "longitude": 7.684575,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598242,
      "ems": null
    },
    {
      "latitude": 50.181404,
      "longitude": 7.682116,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598252,
      "ems": null
    },
    {
      "latitude": 50.184265,
      "longitude": 7.680022,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598260,
      "ems": null
    },
    {
      "latitude": 50.185638,
      "longitude": 7.679299,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1649598265,
      "ems": null
    },
    {
      "latitude": 50.188293,
      "longitude": 7.678359,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1649598270,
      "ems": null
    },
    {
      "latitude": 50.19017,
      "longitude": 7.677926,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "4451",
      "timestamp": 1649598275,
      "ems": null
    },
    {
      "latitude": 50.191414,
      "longitude": 7.677513,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1649598279,
      "ems": null
    },
    {
      "latitude": 50.19342,
      "longitude": 7.676986,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1649598284,
      "ems": null
    },
    {
      "latitude": 50.195526,
      "longitude": 7.676335,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1649598289,
      "ems": null
    },
    {
      "latitude": 50.199654,
      "longitude": 7.675138,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1649598299,
      "ems": null
    },
    {
      "latitude": 50.201839,
      "longitude": 7.674396,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1649598305,
      "ems": null
    },
    {
      "latitude": 50.20546,
      "longitude": 7.673083,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1649598315,
      "ems": null
    },
    {
      "latitude": 50.208069,
      "longitude": 7.672215,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1649598321,
      "ems": null
    },
    {
      "latitude": 50.211136,
      "longitude": 7.671059,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1649598330,
      "ems": null
    },
    {
      "latitude": 50.213058,
      "longitude": 7.670625,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1649598336,
      "ems": null
    },
    {
      "latitude": 50.214596,
      "longitude": 7.670313,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "4451",
      "timestamp": 1649598340,
      "ems": null
    },
    {
      "latitude": 50.218506,
      "longitude": 7.669348,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1649598351,
      "ems": null
    },
    {
      "latitude": 50.222763,
      "longitude": 7.66889,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "4451",
      "timestamp": 1649598361,
      "ems": null
    },
    {
      "latitude": 50.224789,
      "longitude": 7.668828,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "4451",
      "timestamp": 1649598367,
      "ems": null
    },
    {
      "latitude": 50.2267,
      "longitude": 7.668602,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1649598372,
      "ems": null
    },
    {
      "latitude": 50.230728,
      "longitude": 7.668024,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 355,
      "squawk": "4451",
      "timestamp": 1649598382,
      "ems": null
    },
    {
      "latitude": 50.234844,
      "longitude": 7.667566,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "4451",
      "timestamp": 1649598392,
      "ems": null
    },
    {
      "latitude": 50.23885,
      "longitude": 7.667195,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "4451",
      "timestamp": 1649598403,
      "ems": null
    },
    {
      "latitude": 50.240898,
      "longitude": 7.666601,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 348,
      "squawk": "4451",
      "timestamp": 1649598408,
      "ems": null
    },
    {
      "latitude": 50.243362,
      "longitude": 7.665855,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 349,
      "squawk": "4451",
      "timestamp": 1649598413,
      "ems": null
    },
    {
      "latitude": 50.245415,
      "longitude": 7.665117,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1649598418,
      "ems": null
    },
    {
      "latitude": 50.247742,
      "longitude": 7.6643,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 346,
      "squawk": "4451",
      "timestamp": 1649598424,
      "ems": null
    },
    {
      "latitude": 50.249863,
      "longitude": 7.663325,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1649598429,
      "ems": null
    },
    {
      "latitude": 50.251419,
      "longitude": 7.662519,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1649598433,
      "ems": null
    },
    {
      "latitude": 50.252304,
      "longitude": 7.662073,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "4451",
      "timestamp": 1649598435,
      "ems": null
    },
    {
      "latitude": 50.254166,
      "longitude": 7.661034,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649598439,
      "ems": null
    },
    {
      "latitude": 50.256351,
      "longitude": 7.659475,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649598444,
      "ems": null
    },
    {
      "latitude": 50.258514,
      "longitude": 7.657904,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598450,
      "ems": null
    },
    {
      "latitude": 50.260494,
      "longitude": 7.656357,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598455,
      "ems": null
    },
    {
      "latitude": 50.26236,
      "longitude": 7.654724,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598460,
      "ems": null
    },
    {
      "latitude": 50.264175,
      "longitude": 7.653314,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649598465,
      "ems": null
    },
    {
      "latitude": 50.268036,
      "longitude": 7.650315,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649598476,
      "ems": null
    },
    {
      "latitude": 50.269592,
      "longitude": 7.649375,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649598480,
      "ems": null
    },
    {
      "latitude": 50.271332,
      "longitude": 7.648219,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649598485,
      "ems": null
    },
    {
      "latitude": 50.274368,
      "longitude": 7.645965,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649598493,
      "ems": null
    },
    {
      "latitude": 50.276367,
      "longitude": 7.644388,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598501,
      "ems": null
    },
    {
      "latitude": 50.277954,
      "longitude": 7.642995,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598505,
      "ems": null
    },
    {
      "latitude": 50.27916,
      "longitude": 7.641931,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598509,
      "ems": null
    },
    {
      "latitude": 50.280624,
      "longitude": 7.640702,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598514,
      "ems": null
    },
    {
      "latitude": 50.283554,
      "longitude": 7.638678,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649598522,
      "ems": null
    },
    {
      "latitude": 50.286026,
      "longitude": 7.637016,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649598530,
      "ems": null
    },
    {
      "latitude": 50.287628,
      "longitude": 7.635931,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649598535,
      "ems": null
    },
    {
      "latitude": 50.290382,
      "longitude": 7.634088,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649598543,
      "ems": null
    },
    {
      "latitude": 50.292023,
      "longitude": 7.633257,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "4451",
      "timestamp": 1649598548,
      "ems": null
    },
    {
      "latitude": 50.29335,
      "longitude": 7.632679,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "4451",
      "timestamp": 1649598552,
      "ems": null
    },
    {
      "latitude": 50.294632,
      "longitude": 7.632101,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "4451",
      "timestamp": 1649598556,
      "ems": null
    },
    {
      "latitude": 50.295967,
      "longitude": 7.631341,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649598560,
      "ems": null
    },
    {
      "latitude": 50.297882,
      "longitude": 7.630077,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598568,
      "ems": null
    },
    {
      "latitude": 50.29985,
      "longitude": 7.628559,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598573,
      "ems": null
    },
    {
      "latitude": 50.301926,
      "longitude": 7.626887,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649598578,
      "ems": null
    },
    {
      "latitude": 50.302906,
      "longitude": 7.62607,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598582,
      "ems": null
    },
    {
      "latitude": 50.304199,
      "longitude": 7.624945,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598586,
      "ems": null
    },
    {
      "latitude": 50.305664,
      "longitude": 7.623572,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598590,
      "ems": null
    },
    {
      "latitude": 50.306538,
      "longitude": 7.622804,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598594,
      "ems": null
    },
    {
      "latitude": 50.310196,
      "longitude": 7.619741,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598605,
      "ems": null
    },
    {
      "latitude": 50.312759,
      "longitude": 7.617501,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649598615,
      "ems": null
    },
    {
      "latitude": 50.317245,
      "longitude": 7.613525,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598626,
      "ems": null
    },
    {
      "latitude": 50.318848,
      "longitude": 7.612297,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598631,
      "ems": null
    },
    {
      "latitude": 50.320641,
      "longitude": 7.61115,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598636,
      "ems": null
    },
    {
      "latitude": 50.322269,
      "longitude": 7.610036,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649598640,
      "ems": null
    },
    {
      "latitude": 50.323975,
      "longitude": 7.608683,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649598645,
      "ems": null
    },
    {
      "latitude": 50.326126,
      "longitude": 7.606876,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598651,
      "ems": null
    },
    {
      "latitude": 50.329239,
      "longitude": 7.604563,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "4451",
      "timestamp": 1649598660,
      "ems": null
    },
    {
      "latitude": 50.33284,
      "longitude": 7.602465,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "4451",
      "timestamp": 1649598669,
      "ems": null
    },
    {
      "latitude": 50.334049,
      "longitude": 7.601648,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 338,
      "squawk": "4451",
      "timestamp": 1649598673,
      "ems": null
    },
    {
      "latitude": 50.33725,
      "longitude": 7.599792,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649598682,
      "ems": null
    },
    {
      "latitude": 50.339081,
      "longitude": 7.598492,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649598687,
      "ems": null
    },
    {
      "latitude": 50.341869,
      "longitude": 7.596155,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649598695,
      "ems": null
    },
    {
      "latitude": 50.343639,
      "longitude": 7.594745,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598700,
      "ems": null
    },
    {
      "latitude": 50.34499,
      "longitude": 7.593483,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649598704,
      "ems": null
    },
    {
      "latitude": 50.346619,
      "longitude": 7.591775,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649598709,
      "ems": null
    },
    {
      "latitude": 50.348293,
      "longitude": 7.58992,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649598714,
      "ems": null
    },
    {
      "latitude": 50.349976,
      "longitude": 7.588011,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1649598719,
      "ems": null
    },
    {
      "latitude": 50.353226,
      "longitude": 7.584469,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598729,
      "ems": null
    },
    {
      "latitude": 50.35437,
      "longitude": 7.583602,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649598733,
      "ems": null
    },
    {
      "latitude": 50.355789,
      "longitude": 7.582663,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649598737,
      "ems": null
    },
    {
      "latitude": 50.357277,
      "longitude": 7.581605,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649598741,
      "ems": null
    },
    {
      "latitude": 50.358582,
      "longitude": 7.580494,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598745,
      "ems": null
    },
    {
      "latitude": 50.361282,
      "longitude": 7.577597,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649598753,
      "ems": null
    },
    {
      "latitude": 50.3624,
      "longitude": 7.576335,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649598757,
      "ems": null
    },
    {
      "latitude": 50.363754,
      "longitude": 7.574784,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1649598761,
      "ems": null
    },
    {
      "latitude": 50.364632,
      "longitude": 7.573812,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649598765,
      "ems": null
    },
    {
      "latitude": 50.366821,
      "longitude": 7.571387,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1649598771,
      "ems": null
    },
    {
      "latitude": 50.36998,
      "longitude": 7.567918,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1649598781,
      "ems": null
    },
    {
      "latitude": 50.373058,
      "longitude": 7.564384,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1649598791,
      "ems": null
    },
    {
      "latitude": 50.373917,
      "longitude": 7.563364,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1649598795,
      "ems": null
    },
    {
      "latitude": 50.376389,
      "longitude": 7.560256,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1649598803,
      "ems": null
    },
    {
      "latitude": 50.378319,
      "longitude": 7.557703,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1649598811,
      "ems": null
    },
    {
      "latitude": 50.379868,
      "longitude": 7.555269,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1649598816,
      "ems": null
    },
    {
      "latitude": 50.381241,
      "longitude": 7.552956,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1649598821,
      "ems": null
    },
    {
      "latitude": 50.383392,
      "longitude": 7.549993,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649598830,
      "ems": null
    },
    {
      "latitude": 50.385536,
      "longitude": 7.547978,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598835,
      "ems": null
    },
    {
      "latitude": 50.387558,
      "longitude": 7.546234,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598841,
      "ems": null
    },
    {
      "latitude": 50.389214,
      "longitude": 7.544713,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598846,
      "ems": null
    },
    {
      "latitude": 50.390762,
      "longitude": 7.543343,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649598850,
      "ems": null
    },
    {
      "latitude": 50.392456,
      "longitude": 7.541825,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598855,
      "ems": null
    },
    {
      "latitude": 50.395264,
      "longitude": 7.539219,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 330,
      "squawk": "4451",
      "timestamp": 1649598863,
      "ems": null
    },
    {
      "latitude": 50.397171,
      "longitude": 7.537488,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649598868,
      "ems": null
    },
    {
      "latitude": 50.400055,
      "longitude": 7.533947,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649598877,
      "ems": null
    },
    {
      "latitude": 50.401749,
      "longitude": 7.531706,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649598882,
      "ems": null
    },
    {
      "latitude": 50.403084,
      "longitude": 7.529495,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 308,
      "squawk": "4451",
      "timestamp": 1649598887,
      "ems": null
    },
    {
      "latitude": 50.404297,
      "longitude": 7.526896,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "4451",
      "timestamp": 1649598892,
      "ems": null
    },
    {
      "latitude": 50.405457,
      "longitude": 7.523973,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1649598898,
      "ems": null
    },
    {
      "latitude": 50.406391,
      "longitude": 7.521329,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1649598903,
      "ems": null
    },
    {
      "latitude": 50.407288,
      "longitude": 7.518335,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1649598908,
      "ems": null
    },
    {
      "latitude": 50.407883,
      "longitude": 7.516239,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1649598913,
      "ems": null
    },
    {
      "latitude": 50.408905,
      "longitude": 7.512793,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1649598918,
      "ems": null
    },
    {
      "latitude": 50.41008,
      "longitude": 7.509011,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1649598925,
      "ems": null
    },
    {
      "latitude": 50.411789,
      "longitude": 7.503439,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1649598936,
      "ems": null
    },
    {
      "latitude": 50.412582,
      "longitude": 7.500767,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1649598941,
      "ems": null
    },
    {
      "latitude": 50.413605,
      "longitude": 7.497157,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1649598947,
      "ems": null
    },
    {
      "latitude": 50.414955,
      "longitude": 7.492156,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 292,
      "squawk": "4451",
      "timestamp": 1649598956,
      "ems": null
    },
    {
      "latitude": 50.416679,
      "longitude": 7.486812,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1649598967,
      "ems": null
    },
    {
      "latitude": 50.417542,
      "longitude": 7.484147,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 296,
      "squawk": "4451",
      "timestamp": 1649598972,
      "ems": null
    },
    {
      "latitude": 50.419281,
      "longitude": 7.478943,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1649598982,
      "ems": null
    },
    {
      "latitude": 50.421204,
      "longitude": 7.473377,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 301,
      "squawk": "4451",
      "timestamp": 1649598992,
      "ems": null
    },
    {
      "latitude": 50.422775,
      "longitude": 7.469144,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1649599000,
      "ems": null
    },
    {
      "latitude": 50.424591,
      "longitude": 7.463428,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1649599011,
      "ems": null
    },
    {
      "latitude": 50.426743,
      "longitude": 7.457332,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1649599024,
      "ems": null
    },
    {
      "latitude": 50.428177,
      "longitude": 7.452368,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 290,
      "squawk": "4451",
      "timestamp": 1649599032,
      "ems": null
    },
    {
      "latitude": 50.42976,
      "longitude": 7.446504,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1649599043,
      "ems": null
    },
    {
      "latitude": 50.431412,
      "longitude": 7.441286,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1649599053,
      "ems": null
    },
    {
      "latitude": 50.432274,
      "longitude": 7.438635,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1649599059,
      "ems": null
    },
    {
      "latitude": 50.433151,
      "longitude": 7.436154,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1649599064,
      "ems": null
    },
    {
      "latitude": 50.433949,
      "longitude": 7.433736,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1649599070,
      "ems": null
    },
    {
      "latitude": 50.435532,
      "longitude": 7.427871,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 293,
      "squawk": "4451",
      "timestamp": 1649599080,
      "ems": null
    },
    {
      "latitude": 50.436184,
      "longitude": 7.425125,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 289,
      "squawk": "4451",
      "timestamp": 1649599085,
      "ems": null
    },
    {
      "latitude": 50.436996,
      "longitude": 7.421843,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1649599090,
      "ems": null
    },
    {
      "latitude": 50.439011,
      "longitude": 7.416133,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1649599101,
      "ems": null
    },
    {
      "latitude": 50.439926,
      "longitude": 7.413314,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 294,
      "squawk": "4451",
      "timestamp": 1649599106,
      "ems": null
    },
    {
      "latitude": 50.44162,
      "longitude": 7.40717,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "4451",
      "timestamp": 1649599116,
      "ems": null
    },
    {
      "latitude": 50.44281,
      "longitude": 7.403484,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 298,
      "squawk": "4451",
      "timestamp": 1649599123,
      "ems": null
    },
    {
      "latitude": 50.44455,
      "longitude": 7.39828,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 297,
      "squawk": "4451",
      "timestamp": 1649599132,
      "ems": null
    },
    {
      "latitude": 50.445511,
      "longitude": 7.395461,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 299,
      "squawk": "4451",
      "timestamp": 1649599138,
      "ems": null
    },
    {
      "latitude": 50.446609,
      "longitude": 7.392787,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "4451",
      "timestamp": 1649599143,
      "ems": null
    },
    {
      "latitude": 50.447727,
      "longitude": 7.39031,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 305,
      "squawk": "4451",
      "timestamp": 1649599148,
      "ems": null
    },
    {
      "latitude": 50.448753,
      "longitude": 7.388157,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 306,
      "squawk": "4451",
      "timestamp": 1649599152,
      "ems": null
    },
    {
      "latitude": 50.450008,
      "longitude": 7.385485,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 307,
      "squawk": "4451",
      "timestamp": 1649599158,
      "ems": null
    },
    {
      "latitude": 50.451313,
      "longitude": 7.382961,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 310,
      "squawk": "4451",
      "timestamp": 1649599163,
      "ems": null
    },
    {
      "latitude": 50.452835,
      "longitude": 7.380283,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 312,
      "squawk": "4451",
      "timestamp": 1649599169,
      "ems": null
    },
    {
      "latitude": 50.454155,
      "longitude": 7.378062,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 314,
      "squawk": "4451",
      "timestamp": 1649599174,
      "ems": null
    },
    {
      "latitude": 50.455582,
      "longitude": 7.375729,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1649599179,
      "ems": null
    },
    {
      "latitude": 50.456863,
      "longitude": 7.373561,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 313,
      "squawk": "4451",
      "timestamp": 1649599185,
      "ems": null
    },
    {
      "latitude": 50.459461,
      "longitude": 7.369377,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1649599195,
      "ems": null
    },
    {
      "latitude": 50.460949,
      "longitude": 7.367149,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649599201,
      "ems": null
    },
    {
      "latitude": 50.463882,
      "longitude": 7.362918,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649599211,
      "ems": null
    },
    {
      "latitude": 50.46542,
      "longitude": 7.360914,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1649599217,
      "ems": null
    },
    {
      "latitude": 50.467793,
      "longitude": 7.357796,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1649599225,
      "ems": null
    },
    {
      "latitude": 50.468304,
      "longitude": 7.357203,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1649599226,
      "ems": null
    },
    {
      "latitude": 50.47023,
      "longitude": 7.354913,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1649599232,
      "ems": null
    },
    {
      "latitude": 50.473381,
      "longitude": 7.351338,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649599243,
      "ems": null
    },
    {
      "latitude": 50.474358,
      "longitude": 7.350447,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649599247,
      "ems": null
    },
    {
      "latitude": 50.476173,
      "longitude": 7.348963,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649599251,
      "ems": null
    },
    {
      "latitude": 50.477757,
      "longitude": 7.347404,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649599257,
      "ems": null
    },
    {
      "latitude": 50.487671,
      "longitude": 7.33523,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1649599291,
      "ems": null
    },
    {
      "latitude": 50.489502,
      "longitude": 7.332651,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649599297,
      "ems": null
    },
    {
      "latitude": 50.491333,
      "longitude": 7.330266,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1649599303,
      "ems": null
    },
    {
      "latitude": 50.493164,
      "longitude": 7.328104,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649599309,
      "ems": null
    },
    {
      "latitude": 50.496964,
      "longitude": 7.323978,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649599320,
      "ems": null
    },
    {
      "latitude": 50.500626,
      "longitude": 7.31993,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649599331,
      "ems": null
    },
    {
      "latitude": 50.503963,
      "longitude": 7.316375,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649599341,
      "ems": null
    },
    {
      "latitude": 50.505615,
      "longitude": 7.314365,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649599346,
      "ems": null
    },
    {
      "latitude": 50.507126,
      "longitude": 7.312413,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649599351,
      "ems": null
    },
    {
      "latitude": 50.511272,
      "longitude": 7.307987,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649599364,
      "ems": null
    },
    {
      "latitude": 50.51318,
      "longitude": 7.306205,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 331,
      "squawk": "4451",
      "timestamp": 1649599370,
      "ems": null
    },
    {
      "latitude": 50.514999,
      "longitude": 7.304824,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 334,
      "squawk": "4451",
      "timestamp": 1649599376,
      "ems": null
    },
    {
      "latitude": 50.516628,
      "longitude": 7.303607,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649599380,
      "ems": null
    },
    {
      "latitude": 50.517559,
      "longitude": 7.303013,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649599384,
      "ems": null
    },
    {
      "latitude": 50.522964,
      "longitude": 7.299259,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649599398,
      "ems": null
    },
    {
      "latitude": 50.524796,
      "longitude": 7.297885,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 332,
      "squawk": "4451",
      "timestamp": 1649599404,
      "ems": null
    },
    {
      "latitude": 50.528545,
      "longitude": 7.295219,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "4451",
      "timestamp": 1649599415,
      "ems": null
    },
    {
      "latitude": 50.53236,
      "longitude": 7.292398,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "4451",
      "timestamp": 1649599426,
      "ems": null
    },
    {
      "latitude": 50.536194,
      "longitude": 7.290224,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649599437,
      "ems": null
    },
    {
      "latitude": 50.536697,
      "longitude": 7.290007,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649599441,
      "ems": null
    },
    {
      "latitude": 50.539719,
      "longitude": 7.288272,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 340,
      "squawk": "4451",
      "timestamp": 1649599447,
      "ems": null
    },
    {
      "latitude": 50.54158,
      "longitude": 7.287425,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "4451",
      "timestamp": 1649599453,
      "ems": null
    },
    {
      "latitude": 50.543381,
      "longitude": 7.286755,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1649599458,
      "ems": null
    },
    {
      "latitude": 50.544708,
      "longitude": 7.286104,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1649599462,
      "ems": null
    },
    {
      "latitude": 50.546127,
      "longitude": 7.285164,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "4451",
      "timestamp": 1649599467,
      "ems": null
    },
    {
      "latitude": 50.547863,
      "longitude": 7.283565,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "4451",
      "timestamp": 1649599473,
      "ems": null
    },
    {
      "latitude": 50.548874,
      "longitude": 7.282635,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "4451",
      "timestamp": 1649599476,
      "ems": null
    },
    {
      "latitude": 50.549633,
      "longitude": 7.281857,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649599479,
      "ems": null
    },
    {
      "latitude": 50.550751,
      "longitude": 7.280756,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 328,
      "squawk": "4451",
      "timestamp": 1649599482,
      "ems": null
    },
    {
      "latitude": 50.551727,
      "longitude": 7.279778,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649599486,
      "ems": null
    },
    {
      "latitude": 50.552658,
      "longitude": 7.278739,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "4451",
      "timestamp": 1649599488,
      "ems": null
    },
    {
      "latitude": 50.553589,
      "longitude": 7.277552,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1649599491,
      "ems": null
    },
    {
      "latitude": 50.55452,
      "longitude": 7.276438,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "4451",
      "timestamp": 1649599495,
      "ems": null
    },
    {
      "latitude": 50.555405,
      "longitude": 7.27525,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649599497,
      "ems": null
    },
    {
      "latitude": 50.556335,
      "longitude": 7.274034,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649599501,
      "ems": null
    },
    {
      "latitude": 50.557251,
      "longitude": 7.272805,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649599503,
      "ems": null
    },
    {
      "latitude": 50.557388,
      "longitude": 7.272588,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1649599504,
      "ems": null
    },
    {
      "latitude": 50.557983,
      "longitude": 7.27172,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1649599507,
      "ems": null
    },
    {
      "latitude": 50.559082,
      "longitude": 7.270058,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649599510,
      "ems": null
    },
    {
      "latitude": 50.559952,
      "longitude": 7.268757,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649599513,
      "ems": null
    },
    {
      "latitude": 50.561646,
      "longitude": 7.266516,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 318,
      "squawk": "4451",
      "timestamp": 1649599519,
      "ems": null
    },
    {
      "latitude": 50.563553,
      "longitude": 7.263744,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1649599525,
      "ems": null
    },
    {
      "latitude": 50.565079,
      "longitude": 7.261457,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1649599531,
      "ems": null
    },
    {
      "latitude": 50.567322,
      "longitude": 7.258177,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "4451",
      "timestamp": 1649599538,
      "ems": null
    },
    {
      "latitude": 50.569649,
      "longitude": 7.254539,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649599546,
      "ems": null
    },
    {
      "latitude": 50.57151,
      "longitude": 7.251867,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649599552,
      "ems": null
    },
    {
      "latitude": 50.573235,
      "longitude": 7.249418,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "4451",
      "timestamp": 1649599557,
      "ems": null
    },
    {
      "latitude": 50.57505,
      "longitude": 7.246894,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649599564,
      "ems": null
    },
    {
      "latitude": 50.576157,
      "longitude": 7.245556,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1649599567,
      "ems": null
    },
    {
      "latitude": 50.577053,
      "longitude": 7.244444,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "4451",
      "timestamp": 1649599570,
      "ems": null
    },
    {
      "latitude": 50.578819,
      "longitude": 7.241994,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 319,
      "squawk": "4451",
      "timestamp": 1649599576,
      "ems": null
    },
    {
      "latitude": 50.580589,
      "longitude": 7.239619,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1649599582,
      "ems": null
    },
    {
      "latitude": 50.582199,
      "longitude": 7.237316,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "4451",
      "timestamp": 1649599588,
      "ems": null
    },
    {
      "latitude": 50.584641,
      "longitude": 7.234126,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 320,
      "squawk": "4451",
      "timestamp": 1649599596,
      "ems": null
    },
    {
      "latitude": 50.586548,
      "longitude": 7.231823,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649599602,
      "ems": null
    },
    {
      "latitude": 50.58757,
      "longitude": 7.230711,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649599606,
      "ems": null
    },
    {
      "latitude": 50.588562,
      "longitude": 7.229582,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "4451",
      "timestamp": 1649599609,
      "ems": null
    },
    {
      "latitude": 50.589432,
      "longitude": 7.228642,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649599611,
      "ems": null
    },
    {
      "latitude": 50.590317,
      "longitude": 7.227668,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "4451",
      "timestamp": 1649599615,
      "ems": null
    },
    {
      "latitude": 50.591309,
      "longitude": 7.226546,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "4451",
      "timestamp": 1649599618,
      "ems": null
    },
    {
      "latitude": 50.592133,
      "longitude": 7.225738,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "4451",
      "timestamp": 1649599621,
      "ems": null
    },
    {
      "latitude": 50.59314,
      "longitude": 7.225101,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1649599624,
      "ems": null
    },
    {
      "latitude": 50.594044,
      "longitude": 7.224624,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1649599627,
      "ems": null
    },
    {
      "latitude": 50.595245,
      "longitude": 7.224089,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1649599630,
      "ems": null
    },
    {
      "latitude": 50.596024,
      "longitude": 7.2238,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1649599633,
      "ems": null
    },
    {
      "latitude": 50.597443,
      "longitude": 7.223366,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1649599636,
      "ems": null
    },
    {
      "latitude": 50.598267,
      "longitude": 7.223077,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1649599638,
      "ems": null
    },
    {
      "latitude": 50.599365,
      "longitude": 7.222716,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1649599641,
      "ems": null
    },
    {
      "latitude": 50.600235,
      "longitude": 7.222472,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1649599644,
      "ems": null
    },
    {
      "latitude": 50.601166,
      "longitude": 7.222249,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1649599648,
      "ems": null
    },
    {
      "latitude": 50.602142,
      "longitude": 7.221952,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1649599651,
      "ems": null
    },
    {
      "latitude": 50.603485,
      "longitude": 7.221559,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1649599653,
      "ems": null
    },
    {
      "latitude": 50.604702,
      "longitude": 7.22121,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1649599657,
      "ems": null
    },
    {
      "latitude": 50.607285,
      "longitude": 7.220403,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1649599664,
      "ems": null
    },
    {
      "latitude": 50.609894,
      "longitude": 7.219535,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1649599671,
      "ems": null
    },
    {
      "latitude": 50.613407,
      "longitude": 7.218463,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1649599681,
      "ems": null
    },
    {
      "latitude": 50.615433,
      "longitude": 7.217801,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1649599686,
      "ems": null
    },
    {
      "latitude": 50.618576,
      "longitude": 7.216533,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1649599696,
      "ems": null
    },
    {
      "latitude": 50.619694,
      "longitude": 7.215939,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1649599699,
      "ems": null
    },
    {
      "latitude": 50.621155,
      "longitude": 7.215271,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1649599703,
      "ems": null
    },
    {
      "latitude": 50.623901,
      "longitude": 7.214042,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1649599711,
      "ems": null
    },
    {
      "latitude": 50.62635,
      "longitude": 7.213118,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1649599719,
      "ems": null
    },
    {
      "latitude": 50.629623,
      "longitude": 7.211946,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1649599727,
      "ems": null
    },
    {
      "latitude": 50.631237,
      "longitude": 7.211411,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1649599731,
      "ems": null
    },
    {
      "latitude": 50.634064,
      "longitude": 7.210356,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1649599739,
      "ems": null
    },
    {
      "latitude": 50.637196,
      "longitude": 7.209258,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1649599747,
      "ems": null
    },
    {
      "latitude": 50.639805,
      "longitude": 7.208293,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1649599755,
      "ems": null
    },
    {
      "latitude": 50.64299,
      "longitude": 7.206887,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1649599763,
      "ems": null
    },
    {
      "latitude": 50.646469,
      "longitude": 7.205152,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1649599772,
      "ems": null
    },
    {
      "latitude": 50.648117,
      "longitude": 7.203996,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1649599776,
      "ems": null
    },
    {
      "latitude": 50.649345,
      "longitude": 7.202949,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1649599780,
      "ems": null
    },
    {
      "latitude": 50.650635,
      "longitude": 7.201827,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1649599784,
      "ems": null
    },
    {
      "latitude": 50.652008,
      "longitude": 7.200382,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1649599789,
      "ems": null
    },
    {
      "latitude": 50.653427,
      "longitude": 7.198864,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1649599793,
      "ems": null
    },
    {
      "latitude": 50.654514,
      "longitude": 7.197604,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1649599797,
      "ems": null
    },
    {
      "latitude": 50.655724,
      "longitude": 7.196193,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1649599801,
      "ems": null
    },
    {
      "latitude": 50.656815,
      "longitude": 7.194889,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1649599805,
      "ems": null
    },
    {
      "latitude": 50.657681,
      "longitude": 7.193818,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1649599808,
      "ems": null
    },
    {
      "latitude": 50.658844,
      "longitude": 7.192482,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1649599811,
      "ems": null
    },
    {
      "latitude": 50.661263,
      "longitude": 7.189884,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1649599819,
      "ems": null
    },
    {
      "latitude": 50.663544,
      "longitude": 7.187444,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1649599825,
      "ems": null
    },
    {
      "latitude": 50.664242,
      "longitude": 7.186692,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1649599828,
      "ems": null
    },
    {
      "latitude": 50.665512,
      "longitude": 7.185492,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1649599832,
      "ems": null
    },
    {
      "latitude": 50.666565,
      "longitude": 7.18448,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1649599835,
      "ems": null
    },
    {
      "latitude": 50.667454,
      "longitude": 7.183722,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1649599837,
      "ems": null
    },
    {
      "latitude": 50.668488,
      "longitude": 7.182745,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1649599840,
      "ems": null
    },
    {
      "latitude": 50.670528,
      "longitude": 7.180902,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1649599846,
      "ems": null
    },
    {
      "latitude": 50.671551,
      "longitude": 7.180099,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1649599850,
      "ems": null
    },
    {
      "latitude": 50.672607,
      "longitude": 7.179268,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1649599853,
      "ems": null
    },
    {
      "latitude": 50.673599,
      "longitude": 7.178574,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1649599856,
      "ems": null
    },
    {
      "latitude": 50.674713,
      "longitude": 7.177784,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1649599859,
      "ems": null
    },
    {
      "latitude": 50.675674,
      "longitude": 7.177116,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1649599862,
      "ems": null
    },
    {
      "latitude": 50.677734,
      "longitude": 7.175557,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1649599868,
      "ems": null
    },
    {
      "latitude": 50.679611,
      "longitude": 7.173998,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1649599874,
      "ems": null
    },
    {
      "latitude": 50.681561,
      "longitude": 7.172394,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1649599880,
      "ems": null
    },
    {
      "latitude": 50.683548,
      "longitude": 7.170806,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1649599886,
      "ems": null
    },
    {
      "latitude": 50.685658,
      "longitude": 7.169342,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1649599892,
      "ems": null
    },
    {
      "latitude": 50.688313,
      "longitude": 7.167206,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1649599900,
      "ems": null
    },
    {
      "latitude": 50.690643,
      "longitude": 7.165535,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1649599907,
      "ems": null
    },
    {
      "latitude": 50.692657,
      "longitude": 7.163902,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1649599913,
      "ems": null
    },
    {
      "latitude": 50.694595,
      "longitude": 7.162323,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1649599919,
      "ems": null
    },
    {
      "latitude": 50.696598,
      "longitude": 7.160721,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1649599925,
      "ems": null
    },
    {
      "latitude": 50.698471,
      "longitude": 7.1593,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1649599931,
      "ems": null
    },
    {
      "latitude": 50.700508,
      "longitude": 7.157669,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1649599937,
      "ems": null
    },
    {
      "latitude": 50.702591,
      "longitude": 7.155811,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1649599944,
      "ems": null
    },
    {
      "latitude": 50.705162,
      "longitude": 7.153549,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1649599952,
      "ems": null
    },
    {
      "latitude": 50.70628,
      "longitude": 7.15271,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1649599956,
      "ems": null
    },
    {
      "latitude": 50.708096,
      "longitude": 7.150879,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1649599961,
      "ems": null
    },
    {
      "latitude": 50.709915,
      "longitude": 7.149205,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1649599967,
      "ems": null
    },
    {
      "latitude": 50.711819,
      "longitude": 7.147598,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1649599973,
      "ems": null
    },
    {
      "latitude": 50.713589,
      "longitude": 7.146149,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1649599979,
      "ems": null
    },
    {
      "latitude": 50.715961,
      "longitude": 7.143784,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1649599987,
      "ems": null
    },
    {
      "latitude": 50.718475,
      "longitude": 7.141484,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1649599995,
      "ems": null
    },
    {
      "latitude": 50.721039,
      "longitude": 7.139183,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1649600003,
      "ems": null
    },
    {
      "latitude": 50.722946,
      "longitude": 7.137527,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1649600009,
      "ems": null
    },
    {
      "latitude": 50.723969,
      "longitude": 7.136841,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1649600012,
      "ems": null
    },
    {
      "latitude": 50.725693,
      "longitude": 7.135544,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1649600018,
      "ems": null
    },
    {
      "latitude": 50.726765,
      "longitude": 7.134781,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1649600021,
      "ems": null
    },
    {
      "latitude": 50.727814,
      "longitude": 7.134135,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1649600024,
      "ems": null
    },
    {
      "latitude": 50.728546,
      "longitude": 7.133764,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1649600027,
      "ems": null
    },
    {
      "latitude": 50.730022,
      "longitude": 7.133789,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1649600030,
      "ems": null
    },
    {
      "latitude": 50.731186,
      "longitude": 7.134323,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1649600033,
      "ems": null
    },
    {
      "latitude": 50.732208,
      "longitude": 7.134933,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1649600036,
      "ems": null
    },
    {
      "latitude": 50.733032,
      "longitude": 7.135472,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1649600039,
      "ems": null
    },
    {
      "latitude": 50.734406,
      "longitude": 7.136511,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1649600043,
      "ems": null
    },
    {
      "latitude": 50.735458,
      "longitude": 7.137476,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1649600047,
      "ems": null
    },
    {
      "latitude": 50.736538,
      "longitude": 7.138443,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1649600051,
      "ems": null
    },
    {
      "latitude": 50.737152,
      "longitude": 7.13896,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1649600055,
      "ems": null
    },
    {
      "latitude": 50.738773,
      "longitude": 7.140198,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1649600059,
      "ems": null
    },
    {
      "latitude": 50.740776,
      "longitude": 7.141647,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1649600067,
      "ems": null
    },
    {
      "latitude": 50.742966,
      "longitude": 7.143712,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1649600075,
      "ems": null
    },
    {
      "latitude": 50.74366,
      "longitude": 7.145462,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1649600079,
      "ems": null
    },
    {
      "latitude": 50.743942,
      "longitude": 7.146988,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1649600083,
      "ems": null
    },
    {
      "latitude": 50.744202,
      "longitude": 7.14965,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1649600087,
      "ems": null
    },
    {
      "latitude": 50.744267,
      "longitude": 7.151642,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1649600091,
      "ems": null
    },
    {
      "latitude": 50.744267,
      "longitude": 7.153473,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1649600095,
      "ems": null
    },
    {
      "latitude": 50.744247,
      "longitude": 7.155217,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1649600099,
      "ems": null
    },
    {
      "latitude": 50.744267,
      "longitude": 7.157135,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1649600103,
      "ems": null
    },
    {
      "latitude": 50.744267,
      "longitude": 7.159271,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1649600107,
      "ems": null
    },
    {
      "latitude": 50.744312,
      "longitude": 7.161636,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1649600111,
      "ems": null
    },
    {
      "latitude": 50.744453,
      "longitude": 7.164764,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1649600117,
      "ems": null
    },
    {
      "latitude": 50.744568,
      "longitude": 7.16754,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1649600122,
      "ems": null
    },
    {
      "latitude": 50.744778,
      "longitude": 7.169418,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1649600126,
      "ems": null
    },
    {
      "latitude": 50.745106,
      "longitude": 7.170715,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1649600128,
      "ems": null
    },
    {
      "latitude": 50.745525,
      "longitude": 7.172165,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1649600132,
      "ems": null
    },
    {
      "latitude": 50.745895,
      "longitude": 7.17333,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1649600134,
      "ems": null
    },
    {
      "latitude": 50.746407,
      "longitude": 7.174835,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1649600138,
      "ems": null
    },
    {
      "latitude": 50.746811,
      "longitude": 7.176003,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1649600140,
      "ems": null
    },
    {
      "latitude": 50.747246,
      "longitude": 7.177353,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1649600143,
      "ems": null
    },
    {
      "latitude": 50.747524,
      "longitude": 7.178268,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1649600145,
      "ems": null
    },
    {
      "latitude": 50.74791,
      "longitude": 7.179788,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1649600149,
      "ems": null
    },
    {
      "latitude": 50.748413,
      "longitude": 7.183797,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1649600157,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 7.186024,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1649600161,
      "ems": null
    },
    {
      "latitude": 50.748829,
      "longitude": 7.187881,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1649600165,
      "ems": null
    },
    {
      "latitude": 50.749016,
      "longitude": 7.18956,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1649600169,
      "ems": null
    },
    {
      "latitude": 50.749329,
      "longitude": 7.191962,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1649600173,
      "ems": null
    },
    {
      "latitude": 50.749668,
      "longitude": 7.193527,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1649600177,
      "ems": null
    },
    {
      "latitude": 50.750225,
      "longitude": 7.194977,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1649600181,
      "ems": null
    },
    {
      "latitude": 50.751484,
      "longitude": 7.196808,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1649600185,
      "ems": null
    },
    {
      "latitude": 50.752167,
      "longitude": 7.197604,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1649600189,
      "ems": null
    },
    {
      "latitude": 50.753265,
      "longitude": 7.198421,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1649600193,
      "ems": null
    },
    {
      "latitude": 50.754501,
      "longitude": 7.199014,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1649600197,
      "ems": null
    },
    {
      "latitude": 50.755859,
      "longitude": 7.199478,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1649600201,
      "ems": null
    },
    {
      "latitude": 50.756378,
      "longitude": 7.199608,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1649600204,
      "ems": null
    },
    {
      "latitude": 50.757294,
      "longitude": 7.199682,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1649600206,
      "ems": null
    },
    {
      "latitude": 50.758392,
      "longitude": 7.19946,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1649600210,
      "ems": null
    },
    {
      "latitude": 50.759071,
      "longitude": 7.199097,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1649600212,
      "ems": null
    },
    {
      "latitude": 50.759907,
      "longitude": 7.19841,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1649600216,
      "ems": null
    },
    {
      "latitude": 50.760544,
      "longitude": 7.197678,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1649600218,
      "ems": null
    },
    {
      "latitude": 50.761166,
      "longitude": 7.196655,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1649600222,
      "ems": null
    },
    {
      "latitude": 50.76149,
      "longitude": 7.195816,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1649600224,
      "ems": null
    },
    {
      "latitude": 50.761955,
      "longitude": 7.194443,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1649600228,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.193069,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1649600232,
      "ems": null
    },
    {
      "latitude": 50.76265,
      "longitude": 7.191591,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1649600236,
      "ems": null
    },
    {
      "latitude": 50.763027,
      "longitude": 7.189789,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1649600240,
      "ems": null
    },
    {
      "latitude": 50.763382,
      "longitude": 7.188325,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1649600244,
      "ems": null
    },
    {
      "latitude": 50.763702,
      "longitude": 7.187137,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1649600248,
      "ems": null
    },
    {
      "latitude": 50.76416,
      "longitude": 7.185207,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1649600253,
      "ems": null
    },
    {
      "latitude": 50.764469,
      "longitude": 7.183762,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1649600257,
      "ems": null
    },
    {
      "latitude": 50.764797,
      "longitude": 7.182083,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1649600261,
      "ems": null
    },
    {
      "latitude": 50.765579,
      "longitude": 7.178304,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1649600270,
      "ems": null
    },
    {
      "latitude": 50.766285,
      "longitude": 7.175446,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1649600278,
      "ems": null
    },
    {
      "latitude": 50.766937,
      "longitude": 7.172394,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1649600286,
      "ems": null
    },
    {
      "latitude": 50.767498,
      "longitude": 7.169724,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1649600296,
      "ems": null
    },
    {
      "latitude": 50.768188,
      "longitude": 7.166426,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1649600302,
      "ems": null
    },
    {
      "latitude": 50.768661,
      "longitude": 7.164307,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1649600309,
      "ems": null
    },
    {
      "latitude": 50.769032,
      "longitude": 7.162628,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 42.6,
        "kts": 23,
        "mph": 26.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1649600317,
      "ems": null
    }
  ]
};
