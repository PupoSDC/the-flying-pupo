import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20231113LPSOLPSO",
    callsign: "RVP102",
    name: "Nav17",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 10, 13, 13, 10).getTime(),
    arrival: new Date(2023, 10, 13, 16, 10).getTime(),
    singleEnginePistonTime: 180,
    multiEnginePistonTime: 0,
    picTime: 180,
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
      registration: "CS-DHW",
      serialNo: "N/A",
    },
  },
  airport: {
    destination: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656
      },
    },
    origin: {
      name: "Ponte de Sor",
      code: "LPSO",
      position: {
        latitude: 39.211723,
        longitude: -8.057656
      },
    },
  },
  track: [
    {
      "latitude": 39.209461,
      "longitude": -8.05896,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 207,
      "squawk": "0",
      "timestamp": 1699881752,
      "ems": null
    },
    {
      "latitude": 39.20787,
      "longitude": -8.059964,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 207,
      "squawk": "0",
      "timestamp": 1699881758,
      "ems": null
    },
    {
      "latitude": 39.205734,
      "longitude": -8.061279,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "0",
      "timestamp": 1699881767,
      "ems": null
    },
    {
      "latitude": 39.204201,
      "longitude": -8.062073,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 200,
      "squawk": "0",
      "timestamp": 1699881773,
      "ems": null
    },
    {
      "latitude": 39.203457,
      "longitude": -8.062439,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 200,
      "squawk": "0",
      "timestamp": 1699881776,
      "ems": null
    },
    {
      "latitude": 39.202477,
      "longitude": -8.062927,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 200,
      "squawk": "0",
      "timestamp": 1699881780,
      "ems": null
    },
    {
      "latitude": 39.201691,
      "longitude": -8.063249,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 198,
      "squawk": "0",
      "timestamp": 1699881782,
      "ems": null
    },
    {
      "latitude": 39.20071,
      "longitude": -8.063599,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 192,
      "squawk": "0",
      "timestamp": 1699881786,
      "ems": null
    },
    {
      "latitude": 39.199814,
      "longitude": -8.063726,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 184,
      "squawk": "0",
      "timestamp": 1699881789,
      "ems": null
    },
    {
      "latitude": 39.198898,
      "longitude": -8.063666,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 174,
      "squawk": "0",
      "timestamp": 1699881792,
      "ems": null
    },
    {
      "latitude": 39.197891,
      "longitude": -8.063428,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 169,
      "squawk": "0",
      "timestamp": 1699881795,
      "ems": null
    },
    {
      "latitude": 39.197079,
      "longitude": -8.063293,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 174,
      "squawk": "0",
      "timestamp": 1699881797,
      "ems": null
    },
    {
      "latitude": 39.196014,
      "longitude": -8.063308,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 181,
      "squawk": "0",
      "timestamp": 1699881801,
      "ems": null
    },
    {
      "latitude": 39.195007,
      "longitude": -8.063547,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 193,
      "squawk": "0",
      "timestamp": 1699881804,
      "ems": null
    },
    {
      "latitude": 39.193352,
      "longitude": -8.064697,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 219,
      "squawk": "0",
      "timestamp": 1699881810,
      "ems": null
    },
    {
      "latitude": 39.192608,
      "longitude": -8.065674,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 228,
      "squawk": "0",
      "timestamp": 1699881813,
      "ems": null
    },
    {
      "latitude": 39.192123,
      "longitude": -8.066831,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 244,
      "squawk": "0",
      "timestamp": 1699881816,
      "ems": null
    },
    {
      "latitude": 39.191818,
      "longitude": -8.068176,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 255,
      "squawk": "0",
      "timestamp": 1699881819,
      "ems": null
    },
    {
      "latitude": 39.191586,
      "longitude": -8.069458,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 256,
      "squawk": "0",
      "timestamp": 1699881822,
      "ems": null
    },
    {
      "latitude": 39.191166,
      "longitude": -8.070679,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 234,
      "squawk": "0",
      "timestamp": 1699881825,
      "ems": null
    },
    {
      "latitude": 39.190475,
      "longitude": -8.071368,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 212,
      "squawk": "0",
      "timestamp": 1699881827,
      "ems": null
    },
    {
      "latitude": 39.188507,
      "longitude": -8.071249,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 158,
      "squawk": "0",
      "timestamp": 1699881833,
      "ems": null
    },
    {
      "latitude": 39.187546,
      "longitude": -8.070354,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 142,
      "squawk": "0",
      "timestamp": 1699881837,
      "ems": null
    },
    {
      "latitude": 39.186836,
      "longitude": -8.069519,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 134,
      "squawk": "1347",
      "timestamp": 1699881839,
      "ems": null
    },
    {
      "latitude": 39.186092,
      "longitude": -8.06842,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 130,
      "squawk": "1347",
      "timestamp": 1699881843,
      "ems": null
    },
    {
      "latitude": 39.185394,
      "longitude": -8.067308,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 127,
      "squawk": "1347",
      "timestamp": 1699881846,
      "ems": null
    },
    {
      "latitude": 39.184799,
      "longitude": -8.066114,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 122,
      "squawk": "1347",
      "timestamp": 1699881849,
      "ems": null
    },
    {
      "latitude": 39.184322,
      "longitude": -8.064758,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 115,
      "squawk": "1347",
      "timestamp": 1699881852,
      "ems": null
    },
    {
      "latitude": 39.183903,
      "longitude": -8.063354,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 110,
      "squawk": "1347",
      "timestamp": 1699881855,
      "ems": null
    },
    {
      "latitude": 39.183563,
      "longitude": -8.062055,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 107,
      "squawk": "1347",
      "timestamp": 1699881858,
      "ems": null
    },
    {
      "latitude": 39.183296,
      "longitude": -8.060608,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 104,
      "squawk": "1347",
      "timestamp": 1699881861,
      "ems": null
    },
    {
      "latitude": 39.183064,
      "longitude": -8.059509,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 103,
      "squawk": "1347",
      "timestamp": 1699881863,
      "ems": null
    },
    {
      "latitude": 39.182785,
      "longitude": -8.058054,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 104,
      "squawk": "1347",
      "timestamp": 1699881867,
      "ems": null
    },
    {
      "latitude": 39.182507,
      "longitude": -8.056946,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 107,
      "squawk": "1347",
      "timestamp": 1699881870,
      "ems": null
    },
    {
      "latitude": 39.182144,
      "longitude": -8.055307,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 107,
      "squawk": "1347",
      "timestamp": 1699881873,
      "ems": null
    },
    {
      "latitude": 39.181824,
      "longitude": -8.054053,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 107,
      "squawk": "1347",
      "timestamp": 1699881876,
      "ems": null
    },
    {
      "latitude": 39.181458,
      "longitude": -8.052501,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 106,
      "squawk": "1347",
      "timestamp": 1699881879,
      "ems": null
    },
    {
      "latitude": 39.181137,
      "longitude": -8.051127,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 107,
      "squawk": "1347",
      "timestamp": 1699881882,
      "ems": null
    },
    {
      "latitude": 39.180222,
      "longitude": -8.047665,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 112,
      "squawk": "1347",
      "timestamp": 1699881890,
      "ems": null
    },
    {
      "latitude": 39.179764,
      "longitude": -8.04635,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 114,
      "squawk": "1347",
      "timestamp": 1699881893,
      "ems": null
    },
    {
      "latitude": 39.17934,
      "longitude": -8.045166,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 114,
      "squawk": "1347",
      "timestamp": 1699881895,
      "ems": null
    },
    {
      "latitude": 39.178848,
      "longitude": -8.043724,
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
      "heading": 115,
      "squawk": "1347",
      "timestamp": 1699881899,
      "ems": null
    },
    {
      "latitude": 39.178345,
      "longitude": -8.04241,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699881902,
      "ems": null
    },
    {
      "latitude": 39.177841,
      "longitude": -8.041276,
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
      "heading": 119,
      "squawk": "1347",
      "timestamp": 1699881904,
      "ems": null
    },
    {
      "latitude": 39.177246,
      "longitude": -8.040039,
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
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699881907,
      "ems": null
    },
    {
      "latitude": 39.176743,
      "longitude": -8.039007,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "1347",
      "timestamp": 1699881910,
      "ems": null
    },
    {
      "latitude": 39.176147,
      "longitude": -8.037693,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "1347",
      "timestamp": 1699881914,
      "ems": null
    },
    {
      "latitude": 39.175476,
      "longitude": -8.036255,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "1347",
      "timestamp": 1699881917,
      "ems": null
    },
    {
      "latitude": 39.174919,
      "longitude": -8.035095,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699881919,
      "ems": null
    },
    {
      "latitude": 39.174313,
      "longitude": -8.033875,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699881922,
      "ems": null
    },
    {
      "latitude": 39.173721,
      "longitude": -8.032558,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699881926,
      "ems": null
    },
    {
      "latitude": 39.173149,
      "longitude": -8.031372,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699881929,
      "ems": null
    },
    {
      "latitude": 39.172543,
      "longitude": -8.030151,
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
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699881931,
      "ems": null
    },
    {
      "latitude": 39.170914,
      "longitude": -8.026428,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699881940,
      "ems": null
    },
    {
      "latitude": 39.170681,
      "longitude": -8.025818,
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
      "heading": 115,
      "squawk": "1347",
      "timestamp": 1699881942,
      "ems": null
    },
    {
      "latitude": 39.170013,
      "longitude": -8.023841,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "1347",
      "timestamp": 1699881946,
      "ems": null
    },
    {
      "latitude": 39.169601,
      "longitude": -8.022587,
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
      "heading": 112,
      "squawk": "1347",
      "timestamp": 1699881949,
      "ems": null
    },
    {
      "latitude": 39.169052,
      "longitude": -8.020996,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 113,
      "squawk": "1347",
      "timestamp": 1699881952,
      "ems": null
    },
    {
      "latitude": 39.168449,
      "longitude": -8.019409,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699881955,
      "ems": null
    },
    {
      "latitude": 39.167908,
      "longitude": -8.017989,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699881958,
      "ems": null
    },
    {
      "latitude": 39.167332,
      "longitude": -8.016479,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699881961,
      "ems": null
    },
    {
      "latitude": 39.16547,
      "longitude": -8.01178,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699881970,
      "ems": null
    },
    {
      "latitude": 39.163792,
      "longitude": -8.00708,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 114,
      "squawk": "1347",
      "timestamp": 1699881979,
      "ems": null
    },
    {
      "latitude": 39.162071,
      "longitude": -8.002197,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699881988,
      "ems": null
    },
    {
      "latitude": 39.160625,
      "longitude": -7.999084,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "1347",
      "timestamp": 1699881994,
      "ems": null
    },
    {
      "latitude": 39.159882,
      "longitude": -7.997803,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 127,
      "squawk": "1347",
      "timestamp": 1699881998,
      "ems": null
    },
    {
      "latitude": 39.159042,
      "longitude": -7.996399,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 126,
      "squawk": "1347",
      "timestamp": 1699882000,
      "ems": null
    },
    {
      "latitude": 39.158253,
      "longitude": -7.994995,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 126,
      "squawk": "1347",
      "timestamp": 1699882004,
      "ems": null
    },
    {
      "latitude": 39.157463,
      "longitude": -7.993652,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 127,
      "squawk": "1347",
      "timestamp": 1699882006,
      "ems": null
    },
    {
      "latitude": 39.156509,
      "longitude": -7.992255,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 131,
      "squawk": "1347",
      "timestamp": 1699882010,
      "ems": null
    },
    {
      "latitude": 39.15564,
      "longitude": -7.991061,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 134,
      "squawk": "1347",
      "timestamp": 1699882013,
      "ems": null
    },
    {
      "latitude": 39.154762,
      "longitude": -7.989929,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "1347",
      "timestamp": 1699882016,
      "ems": null
    },
    {
      "latitude": 39.153809,
      "longitude": -7.988732,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "1347",
      "timestamp": 1699882019,
      "ems": null
    },
    {
      "latitude": 39.152901,
      "longitude": -7.987549,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "1347",
      "timestamp": 1699882022,
      "ems": null
    },
    {
      "latitude": 39.152107,
      "longitude": -7.986633,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 137,
      "squawk": "1347",
      "timestamp": 1699882024,
      "ems": null
    },
    {
      "latitude": 39.151085,
      "longitude": -7.985413,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 137,
      "squawk": "1347",
      "timestamp": 1699882028,
      "ems": null
    },
    {
      "latitude": 39.150154,
      "longitude": -7.984314,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "1347",
      "timestamp": 1699882031,
      "ems": null
    },
    {
      "latitude": 39.149231,
      "longitude": -7.983299,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "1347",
      "timestamp": 1699882034,
      "ems": null
    },
    {
      "latitude": 39.148361,
      "longitude": -7.982284,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "1347",
      "timestamp": 1699882037,
      "ems": null
    },
    {
      "latitude": 39.147358,
      "longitude": -7.981201,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 139,
      "squawk": "1347",
      "timestamp": 1699882040,
      "ems": null
    },
    {
      "latitude": 39.146439,
      "longitude": -7.980194,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 139,
      "squawk": "1347",
      "timestamp": 1699882042,
      "ems": null
    },
    {
      "latitude": 39.145309,
      "longitude": -7.979004,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 140,
      "squawk": "1347",
      "timestamp": 1699882046,
      "ems": null
    },
    {
      "latitude": 39.144333,
      "longitude": -7.977966,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 140,
      "squawk": "1347",
      "timestamp": 1699882049,
      "ems": null
    },
    {
      "latitude": 39.143311,
      "longitude": -7.976929,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699882052,
      "ems": null
    },
    {
      "latitude": 39.14238,
      "longitude": -7.976074,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 145,
      "squawk": "1347",
      "timestamp": 1699882055,
      "ems": null
    },
    {
      "latitude": 39.141399,
      "longitude": -7.975281,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699882058,
      "ems": null
    },
    {
      "latitude": 39.140377,
      "longitude": -7.974487,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 148,
      "squawk": "1347",
      "timestamp": 1699882061,
      "ems": null
    },
    {
      "latitude": 39.139252,
      "longitude": -7.973626,
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
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699882064,
      "ems": null
    },
    {
      "latitude": 39.138245,
      "longitude": -7.972909,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699882067,
      "ems": null
    },
    {
      "latitude": 39.137375,
      "longitude": -7.972253,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699882070,
      "ems": null
    },
    {
      "latitude": 39.13623,
      "longitude": -7.971417,
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
      "heading": 149,
      "squawk": "1347",
      "timestamp": 1699882073,
      "ems": null
    },
    {
      "latitude": 39.135269,
      "longitude": -7.970581,
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
      "heading": 148,
      "squawk": "1347",
      "timestamp": 1699882076,
      "ems": null
    },
    {
      "latitude": 39.134277,
      "longitude": -7.969788,
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
      "heading": 145,
      "squawk": "1347",
      "timestamp": 1699882079,
      "ems": null
    },
    {
      "latitude": 39.131344,
      "longitude": -7.967102,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "1347",
      "timestamp": 1699882088,
      "ems": null
    },
    {
      "latitude": 39.129204,
      "longitude": -7.96521,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "1347",
      "timestamp": 1699882094,
      "ems": null
    },
    {
      "latitude": 39.128227,
      "longitude": -7.964294,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 142,
      "squawk": "1347",
      "timestamp": 1699882097,
      "ems": null
    },
    {
      "latitude": 39.127167,
      "longitude": -7.963237,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699882100,
      "ems": null
    },
    {
      "latitude": 39.126068,
      "longitude": -7.962162,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 142,
      "squawk": "1347",
      "timestamp": 1699882103,
      "ems": null
    },
    {
      "latitude": 39.123199,
      "longitude": -7.959534,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 144,
      "squawk": "1347",
      "timestamp": 1699882112,
      "ems": null
    },
    {
      "latitude": 39.120453,
      "longitude": -7.956848,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 141,
      "squawk": "1347",
      "timestamp": 1699882121,
      "ems": null
    },
    {
      "latitude": 39.117645,
      "longitude": -7.954161,
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
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699882131,
      "ems": null
    },
    {
      "latitude": 39.114716,
      "longitude": -7.951474,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699882140,
      "ems": null
    },
    {
      "latitude": 39.111794,
      "longitude": -7.948608,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 142,
      "squawk": "1347",
      "timestamp": 1699882149,
      "ems": null
    },
    {
      "latitude": 39.108673,
      "longitude": -7.945557,
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
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699882158,
      "ems": null
    },
    {
      "latitude": 39.105648,
      "longitude": -7.942627,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 141,
      "squawk": "1347",
      "timestamp": 1699882167,
      "ems": null
    },
    {
      "latitude": 39.102448,
      "longitude": -7.939473,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 142,
      "squawk": "1347",
      "timestamp": 1699882176,
      "ems": null
    },
    {
      "latitude": 39.099014,
      "longitude": -7.936368,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699882185,
      "ems": null
    },
    {
      "latitude": 39.095581,
      "longitude": -7.933443,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699882194,
      "ems": null
    },
    {
      "latitude": 39.094242,
      "longitude": -7.932373,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699882197,
      "ems": null
    },
    {
      "latitude": 39.092941,
      "longitude": -7.931396,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 149,
      "squawk": "1347",
      "timestamp": 1699882200,
      "ems": null
    },
    {
      "latitude": 39.091782,
      "longitude": -7.930517,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 148,
      "squawk": "1347",
      "timestamp": 1699882203,
      "ems": null
    },
    {
      "latitude": 39.090866,
      "longitude": -7.92974,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 148,
      "squawk": "1347",
      "timestamp": 1699882205,
      "ems": null
    },
    {
      "latitude": 39.089539,
      "longitude": -7.928785,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 149,
      "squawk": "1347",
      "timestamp": 1699882209,
      "ems": null
    },
    {
      "latitude": 39.088192,
      "longitude": -7.927795,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699882212,
      "ems": null
    },
    {
      "latitude": 39.084839,
      "longitude": -7.925171,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "1347",
      "timestamp": 1699882221,
      "ems": null
    },
    {
      "latitude": 39.081299,
      "longitude": -7.922158,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "1347",
      "timestamp": 1699882230,
      "ems": null
    },
    {
      "latitude": 39.078873,
      "longitude": -7.920068,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 145,
      "squawk": "1347",
      "timestamp": 1699882236,
      "ems": null
    },
    {
      "latitude": 39.077625,
      "longitude": -7.918884,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699882239,
      "ems": null
    },
    {
      "latitude": 39.076508,
      "longitude": -7.917786,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 141,
      "squawk": "1347",
      "timestamp": 1699882242,
      "ems": null
    },
    {
      "latitude": 39.075436,
      "longitude": -7.916687,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 141,
      "squawk": "1347",
      "timestamp": 1699882245,
      "ems": null
    },
    {
      "latitude": 39.07457,
      "longitude": -7.915769,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "1347",
      "timestamp": 1699882248,
      "ems": null
    },
    {
      "latitude": 39.073483,
      "longitude": -7.914612,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "1347",
      "timestamp": 1699882251,
      "ems": null
    },
    {
      "latitude": 39.072319,
      "longitude": -7.91333,
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
      "heading": 140,
      "squawk": "1347",
      "timestamp": 1699882254,
      "ems": null
    },
    {
      "latitude": 39.071293,
      "longitude": -7.912231,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "1347",
      "timestamp": 1699882257,
      "ems": null
    },
    {
      "latitude": 39.070312,
      "longitude": -7.911111,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 137,
      "squawk": "1347",
      "timestamp": 1699882260,
      "ems": null
    },
    {
      "latitude": 39.069397,
      "longitude": -7.910037,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "1347",
      "timestamp": 1699882263,
      "ems": null
    },
    {
      "latitude": 39.068359,
      "longitude": -7.908813,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "1347",
      "timestamp": 1699882267,
      "ems": null
    },
    {
      "latitude": 39.067337,
      "longitude": -7.907593,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 138,
      "squawk": "1347",
      "timestamp": 1699882269,
      "ems": null
    },
    {
      "latitude": 39.064453,
      "longitude": -7.904544,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "1347",
      "timestamp": 1699882278,
      "ems": null
    },
    {
      "latitude": 39.061249,
      "longitude": -7.9012,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 142,
      "squawk": "1347",
      "timestamp": 1699882288,
      "ems": null
    },
    {
      "latitude": 39.060287,
      "longitude": -7.900304,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699882291,
      "ems": null
    },
    {
      "latitude": 39.059143,
      "longitude": -7.89923,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 144,
      "squawk": "1347",
      "timestamp": 1699882294,
      "ems": null
    },
    {
      "latitude": 39.058121,
      "longitude": -7.898315,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 144,
      "squawk": "1347",
      "timestamp": 1699882297,
      "ems": null
    },
    {
      "latitude": 39.05722,
      "longitude": -7.897558,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 146,
      "squawk": "1347",
      "timestamp": 1699882300,
      "ems": null
    },
    {
      "latitude": 39.056168,
      "longitude": -7.896722,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699882303,
      "ems": null
    },
    {
      "latitude": 39.054813,
      "longitude": -7.895569,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 148,
      "squawk": "1347",
      "timestamp": 1699882306,
      "ems": null
    },
    {
      "latitude": 39.053604,
      "longitude": -7.894653,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 149,
      "squawk": "1347",
      "timestamp": 1699882309,
      "ems": null
    },
    {
      "latitude": 39.052414,
      "longitude": -7.893856,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "1347",
      "timestamp": 1699882312,
      "ems": null
    },
    {
      "latitude": 39.051228,
      "longitude": -7.89325,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "1347",
      "timestamp": 1699882315,
      "ems": null
    },
    {
      "latitude": 39.049988,
      "longitude": -7.892722,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "1347",
      "timestamp": 1699882318,
      "ems": null
    },
    {
      "latitude": 39.048622,
      "longitude": -7.892334,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 168,
      "squawk": "1347",
      "timestamp": 1699882321,
      "ems": null
    },
    {
      "latitude": 39.047333,
      "longitude": -7.892124,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 173,
      "squawk": "1347",
      "timestamp": 1699882324,
      "ems": null
    },
    {
      "latitude": 39.045959,
      "longitude": -7.892005,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "1347",
      "timestamp": 1699882327,
      "ems": null
    },
    {
      "latitude": 39.044724,
      "longitude": -7.892065,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699882330,
      "ems": null
    },
    {
      "latitude": 39.043221,
      "longitude": -7.892334,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699882333,
      "ems": null
    },
    {
      "latitude": 39.042011,
      "longitude": -7.892761,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699882336,
      "ems": null
    },
    {
      "latitude": 39.040833,
      "longitude": -7.893319,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 201,
      "squawk": "1347",
      "timestamp": 1699882339,
      "ems": null
    },
    {
      "latitude": 39.039497,
      "longitude": -7.894043,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699882342,
      "ems": null
    },
    {
      "latitude": 39.038315,
      "longitude": -7.894692,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699882345,
      "ems": null
    },
    {
      "latitude": 39.037125,
      "longitude": -7.895229,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699882348,
      "ems": null
    },
    {
      "latitude": 39.03582,
      "longitude": -7.895691,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699882351,
      "ems": null
    },
    {
      "latitude": 39.034698,
      "longitude": -7.896005,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699882354,
      "ems": null
    },
    {
      "latitude": 39.033169,
      "longitude": -7.896423,
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699882357,
      "ems": null
    },
    {
      "latitude": 39.031769,
      "longitude": -7.896842,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699882360,
      "ems": null
    },
    {
      "latitude": 39.028061,
      "longitude": -7.898036,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699882369,
      "ems": null
    },
    {
      "latitude": 39.026825,
      "longitude": -7.898513,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699882372,
      "ems": null
    },
    {
      "latitude": 39.025719,
      "longitude": -7.898987,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699882375,
      "ems": null
    },
    {
      "latitude": 39.023026,
      "longitude": -7.900185,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699882381,
      "ems": null
    },
    {
      "latitude": 39.021763,
      "longitude": -7.900757,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "1347",
      "timestamp": 1699882384,
      "ems": null
    },
    {
      "latitude": 39.01918,
      "longitude": -7.901498,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699882391,
      "ems": null
    },
    {
      "latitude": 39.017899,
      "longitude": -7.901489,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699882393,
      "ems": null
    },
    {
      "latitude": 39.016571,
      "longitude": -7.901021,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699882397,
      "ems": null
    },
    {
      "latitude": 39.015335,
      "longitude": -7.900245,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "1347",
      "timestamp": 1699882400,
      "ems": null
    },
    {
      "latitude": 39.014008,
      "longitude": -7.89923,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699882403,
      "ems": null
    },
    {
      "latitude": 39.012909,
      "longitude": -7.898274,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699882406,
      "ems": null
    },
    {
      "latitude": 39.011845,
      "longitude": -7.897339,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699882409,
      "ems": null
    },
    {
      "latitude": 39.010822,
      "longitude": -7.89624,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 139,
      "squawk": "1347",
      "timestamp": 1699882412,
      "ems": null
    },
    {
      "latitude": 39.00975,
      "longitude": -7.89511,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 137,
      "squawk": "1347",
      "timestamp": 1699882415,
      "ems": null
    },
    {
      "latitude": 39.008789,
      "longitude": -7.893916,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 136,
      "squawk": "1347",
      "timestamp": 1699882418,
      "ems": null
    },
    {
      "latitude": 39.007797,
      "longitude": -7.8927,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 136,
      "squawk": "1347",
      "timestamp": 1699882421,
      "ems": null
    },
    {
      "latitude": 39.006912,
      "longitude": -7.891587,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 135,
      "squawk": "1347",
      "timestamp": 1699882424,
      "ems": null
    },
    {
      "latitude": 39.005951,
      "longitude": -7.890393,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 135,
      "squawk": "1347",
      "timestamp": 1699882427,
      "ems": null
    },
    {
      "latitude": 39.005035,
      "longitude": -7.889199,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 135,
      "squawk": "1347",
      "timestamp": 1699882430,
      "ems": null
    },
    {
      "latitude": 39.003979,
      "longitude": -7.887939,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 135,
      "squawk": "1347",
      "timestamp": 1699882433,
      "ems": null
    },
    {
      "latitude": 39.003021,
      "longitude": -7.886691,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 136,
      "squawk": "1347",
      "timestamp": 1699882436,
      "ems": null
    },
    {
      "latitude": 39.001976,
      "longitude": -7.885437,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 136,
      "squawk": "1347",
      "timestamp": 1699882439,
      "ems": null
    },
    {
      "latitude": 39.000069,
      "longitude": -7.88324,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "1347",
      "timestamp": 1699882445,
      "ems": null
    },
    {
      "latitude": 38.996902,
      "longitude": -7.8797,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 138,
      "squawk": "1347",
      "timestamp": 1699882454,
      "ems": null
    },
    {
      "latitude": 38.994202,
      "longitude": -7.876099,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 132,
      "squawk": "1347",
      "timestamp": 1699882463,
      "ems": null
    },
    {
      "latitude": 38.993271,
      "longitude": -7.874749,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 130,
      "squawk": "1347",
      "timestamp": 1699882467,
      "ems": null
    },
    {
      "latitude": 38.992493,
      "longitude": -7.873496,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 127,
      "squawk": "1347",
      "timestamp": 1699882470,
      "ems": null
    },
    {
      "latitude": 38.991734,
      "longitude": -7.872192,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 125,
      "squawk": "1347",
      "timestamp": 1699882472,
      "ems": null
    },
    {
      "latitude": 38.990898,
      "longitude": -7.870667,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 124,
      "squawk": "1347",
      "timestamp": 1699882476,
      "ems": null
    },
    {
      "latitude": 38.990154,
      "longitude": -7.869263,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 124,
      "squawk": "1347",
      "timestamp": 1699882479,
      "ems": null
    },
    {
      "latitude": 38.989655,
      "longitude": -7.868301,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 124,
      "squawk": "1347",
      "timestamp": 1699882481,
      "ems": null
    },
    {
      "latitude": 38.988647,
      "longitude": -7.86645,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 125,
      "squawk": "1347",
      "timestamp": 1699882485,
      "ems": null
    },
    {
      "latitude": 38.987915,
      "longitude": -7.865077,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 125,
      "squawk": "1347",
      "timestamp": 1699882488,
      "ems": null
    },
    {
      "latitude": 38.987175,
      "longitude": -7.863647,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 124,
      "squawk": "1347",
      "timestamp": 1699882491,
      "ems": null
    },
    {
      "latitude": 38.986477,
      "longitude": -7.862427,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 125,
      "squawk": "1347",
      "timestamp": 1699882494,
      "ems": null
    },
    {
      "latitude": 38.9841,
      "longitude": -7.858582,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 130,
      "squawk": "1347",
      "timestamp": 1699882503,
      "ems": null
    },
    {
      "latitude": 38.983246,
      "longitude": -7.857315,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 129,
      "squawk": "1347",
      "timestamp": 1699882506,
      "ems": null
    },
    {
      "latitude": 38.981735,
      "longitude": -7.854926,
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
      "heading": 130,
      "squawk": "1347",
      "timestamp": 1699882512,
      "ems": null
    },
    {
      "latitude": 38.980843,
      "longitude": -7.853516,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 130,
      "squawk": "1347",
      "timestamp": 1699882515,
      "ems": null
    },
    {
      "latitude": 38.979813,
      "longitude": -7.85206,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 131,
      "squawk": "1347",
      "timestamp": 1699882518,
      "ems": null
    },
    {
      "latitude": 38.978943,
      "longitude": -7.850806,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 132,
      "squawk": "1347",
      "timestamp": 1699882521,
      "ems": null
    },
    {
      "latitude": 38.978165,
      "longitude": -7.849672,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 132,
      "squawk": "1347",
      "timestamp": 1699882524,
      "ems": null
    },
    {
      "latitude": 38.977066,
      "longitude": -7.848239,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 134,
      "squawk": "1347",
      "timestamp": 1699882527,
      "ems": null
    },
    {
      "latitude": 38.974319,
      "longitude": -7.844418,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 131,
      "squawk": "1347",
      "timestamp": 1699882536,
      "ems": null
    },
    {
      "latitude": 38.971527,
      "longitude": -7.840357,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "1347",
      "timestamp": 1699882545,
      "ems": null
    },
    {
      "latitude": 38.96883,
      "longitude": -7.836487,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "1347",
      "timestamp": 1699882554,
      "ems": null
    },
    {
      "latitude": 38.966034,
      "longitude": -7.832535,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 131,
      "squawk": "1347",
      "timestamp": 1699882563,
      "ems": null
    },
    {
      "latitude": 38.963291,
      "longitude": -7.828674,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 131,
      "squawk": "1347",
      "timestamp": 1699882572,
      "ems": null
    },
    {
      "latitude": 38.960587,
      "longitude": -7.824833,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 132,
      "squawk": "1347",
      "timestamp": 1699882582,
      "ems": null
    },
    {
      "latitude": 38.957706,
      "longitude": -7.820923,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "1347",
      "timestamp": 1699882591,
      "ems": null
    },
    {
      "latitude": 38.95575,
      "longitude": -7.818481,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 138,
      "squawk": "1347",
      "timestamp": 1699882597,
      "ems": null
    },
    {
      "latitude": 38.954681,
      "longitude": -7.81731,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 139,
      "squawk": "1347",
      "timestamp": 1699882600,
      "ems": null
    },
    {
      "latitude": 38.953655,
      "longitude": -7.816345,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 144,
      "squawk": "1347",
      "timestamp": 1699882602,
      "ems": null
    },
    {
      "latitude": 38.952713,
      "longitude": -7.815638,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 151,
      "squawk": "1347",
      "timestamp": 1699882605,
      "ems": null
    },
    {
      "latitude": 38.951096,
      "longitude": -7.814819,
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
      "heading": 162,
      "squawk": "1347",
      "timestamp": 1699882609,
      "ems": null
    },
    {
      "latitude": 38.949978,
      "longitude": -7.814514,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 169,
      "squawk": "1347",
      "timestamp": 1699882612,
      "ems": null
    },
    {
      "latitude": 38.948639,
      "longitude": -7.814324,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699882615,
      "ems": null
    },
    {
      "latitude": 38.947357,
      "longitude": -7.814324,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699882618,
      "ems": null
    },
    {
      "latitude": 38.946121,
      "longitude": -7.814563,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699882621,
      "ems": null
    },
    {
      "latitude": 38.944885,
      "longitude": -7.814862,
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
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699882624,
      "ems": null
    },
    {
      "latitude": 38.943462,
      "longitude": -7.815247,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699882627,
      "ems": null
    },
    {
      "latitude": 38.94239,
      "longitude": -7.815491,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699882630,
      "ems": null
    },
    {
      "latitude": 38.941132,
      "longitude": -7.815817,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699882633,
      "ems": null
    },
    {
      "latitude": 38.939831,
      "longitude": -7.816223,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699882636,
      "ems": null
    },
    {
      "latitude": 38.938618,
      "longitude": -7.81665,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699882639,
      "ems": null
    },
    {
      "latitude": 38.937332,
      "longitude": -7.817131,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "1347",
      "timestamp": 1699882642,
      "ems": null
    },
    {
      "latitude": 38.936058,
      "longitude": -7.817566,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699882645,
      "ems": null
    },
    {
      "latitude": 38.93486,
      "longitude": -7.817966,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699882648,
      "ems": null
    },
    {
      "latitude": 38.933716,
      "longitude": -7.818385,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699882651,
      "ems": null
    },
    {
      "latitude": 38.931404,
      "longitude": -7.819275,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699882657,
      "ems": null
    },
    {
      "latitude": 38.930145,
      "longitude": -7.819818,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 198,
      "squawk": "1347",
      "timestamp": 1699882660,
      "ems": null
    },
    {
      "latitude": 38.929184,
      "longitude": -7.820295,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699882663,
      "ems": null
    },
    {
      "latitude": 38.928223,
      "longitude": -7.820833,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699882666,
      "ems": null
    },
    {
      "latitude": 38.926842,
      "longitude": -7.821716,
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
      "heading": 207,
      "squawk": "1347",
      "timestamp": 1699882670,
      "ems": null
    },
    {
      "latitude": 38.926025,
      "longitude": -7.822266,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 205,
      "squawk": "1347",
      "timestamp": 1699882672,
      "ems": null
    },
    {
      "latitude": 38.924702,
      "longitude": -7.822937,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "1347",
      "timestamp": 1699882675,
      "ems": null
    },
    {
      "latitude": 38.921257,
      "longitude": -7.824036,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699882684,
      "ems": null
    },
    {
      "latitude": 38.919708,
      "longitude": -7.824475,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699882688,
      "ems": null
    },
    {
      "latitude": 38.918518,
      "longitude": -7.824773,
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699882690,
      "ems": null
    },
    {
      "latitude": 38.917282,
      "longitude": -7.825072,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699882693,
      "ems": null
    },
    {
      "latitude": 38.915901,
      "longitude": -7.825439,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699882697,
      "ems": null
    },
    {
      "latitude": 38.914581,
      "longitude": -7.825729,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699882700,
      "ems": null
    },
    {
      "latitude": 38.913254,
      "longitude": -7.826027,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699882703,
      "ems": null
    },
    {
      "latitude": 38.9119,
      "longitude": -7.826416,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699882706,
      "ems": null
    },
    {
      "latitude": 38.90799,
      "longitude": -7.82752,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699882715,
      "ems": null
    },
    {
      "latitude": 38.904053,
      "longitude": -7.828237,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699882724,
      "ems": null
    },
    {
      "latitude": 38.902771,
      "longitude": -7.828415,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699882727,
      "ems": null
    },
    {
      "latitude": 38.90147,
      "longitude": -7.828491,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699882730,
      "ems": null
    },
    {
      "latitude": 38.899982,
      "longitude": -7.828674,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699882733,
      "ems": null
    },
    {
      "latitude": 38.898651,
      "longitude": -7.828834,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699882736,
      "ems": null
    },
    {
      "latitude": 38.897324,
      "longitude": -7.828893,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699882739,
      "ems": null
    },
    {
      "latitude": 38.896133,
      "longitude": -7.828893,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699882742,
      "ems": null
    },
    {
      "latitude": 38.894806,
      "longitude": -7.828953,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699882745,
      "ems": null
    },
    {
      "latitude": 38.893463,
      "longitude": -7.828979,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699882748,
      "ems": null
    },
    {
      "latitude": 38.889679,
      "longitude": -7.829251,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699882757,
      "ems": null
    },
    {
      "latitude": 38.885651,
      "longitude": -7.829431,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699882766,
      "ems": null
    },
    {
      "latitude": 38.883133,
      "longitude": -7.829311,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699882772,
      "ems": null
    },
    {
      "latitude": 38.88187,
      "longitude": -7.829224,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699882775,
      "ems": null
    },
    {
      "latitude": 38.879078,
      "longitude": -7.829163,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699882781,
      "ems": null
    },
    {
      "latitude": 38.875076,
      "longitude": -7.829132,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699882791,
      "ems": null
    },
    {
      "latitude": 38.873932,
      "longitude": -7.829192,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699882793,
      "ems": null
    },
    {
      "latitude": 38.872467,
      "longitude": -7.829346,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699882797,
      "ems": null
    },
    {
      "latitude": 38.871231,
      "longitude": -7.829431,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699882800,
      "ems": null
    },
    {
      "latitude": 38.867432,
      "longitude": -7.829431,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699882809,
      "ems": null
    },
    {
      "latitude": 38.863541,
      "longitude": -7.82955,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699882818,
      "ems": null
    },
    {
      "latitude": 38.859833,
      "longitude": -7.829789,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699882827,
      "ems": null
    },
    {
      "latitude": 38.857315,
      "longitude": -7.830028,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699882833,
      "ems": null
    },
    {
      "latitude": 38.856033,
      "longitude": -7.830266,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699882836,
      "ems": null
    },
    {
      "latitude": 38.85498,
      "longitude": -7.830505,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699882838,
      "ems": null
    },
    {
      "latitude": 38.853745,
      "longitude": -7.830804,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699882842,
      "ems": null
    },
    {
      "latitude": 38.852417,
      "longitude": -7.831162,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699882844,
      "ems": null
    },
    {
      "latitude": 38.851639,
      "longitude": -7.831341,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699882847,
      "ems": null
    },
    {
      "latitude": 38.849945,
      "longitude": -7.831819,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699882850,
      "ems": null
    },
    {
      "latitude": 38.848663,
      "longitude": -7.832237,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699882853,
      "ems": null
    },
    {
      "latitude": 38.847237,
      "longitude": -7.832581,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699882856,
      "ems": null
    },
    {
      "latitude": 38.845982,
      "longitude": -7.832886,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699882859,
      "ems": null
    },
    {
      "latitude": 38.844723,
      "longitude": -7.833435,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699882863,
      "ems": null
    },
    {
      "latitude": 38.8437,
      "longitude": -7.834045,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699882866,
      "ems": null
    },
    {
      "latitude": 38.842674,
      "longitude": -7.834778,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699882868,
      "ems": null
    },
    {
      "latitude": 38.841751,
      "longitude": -7.83558,
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
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699882871,
      "ems": null
    },
    {
      "latitude": 38.840813,
      "longitude": -7.836548,
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
      "heading": 218,
      "squawk": "1347",
      "timestamp": 1699882874,
      "ems": null
    },
    {
      "latitude": 38.839928,
      "longitude": -7.837524,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699882877,
      "ems": null
    },
    {
      "latitude": 38.839096,
      "longitude": -7.838506,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699882880,
      "ems": null
    },
    {
      "latitude": 38.838272,
      "longitude": -7.839581,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699882883,
      "ems": null
    },
    {
      "latitude": 38.837402,
      "longitude": -7.840715,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699882887,
      "ems": null
    },
    {
      "latitude": 38.83667,
      "longitude": -7.841675,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699882889,
      "ems": null
    },
    {
      "latitude": 38.835785,
      "longitude": -7.842896,
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699882892,
      "ems": null
    },
    {
      "latitude": 38.8349,
      "longitude": -7.844177,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 229,
      "squawk": "1347",
      "timestamp": 1699882896,
      "ems": null
    },
    {
      "latitude": 38.834202,
      "longitude": -7.845276,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 231,
      "squawk": "1347",
      "timestamp": 1699882898,
      "ems": null
    },
    {
      "latitude": 38.833374,
      "longitude": -7.846627,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699882901,
      "ems": null
    },
    {
      "latitude": 38.832596,
      "longitude": -7.848,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 233,
      "squawk": "1347",
      "timestamp": 1699882905,
      "ems": null
    },
    {
      "latitude": 38.831863,
      "longitude": -7.849254,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 234,
      "squawk": "1347",
      "timestamp": 1699882908,
      "ems": null
    },
    {
      "latitude": 38.831131,
      "longitude": -7.850627,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 234,
      "squawk": "1347",
      "timestamp": 1699882911,
      "ems": null
    },
    {
      "latitude": 38.830399,
      "longitude": -7.851881,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 233,
      "squawk": "1347",
      "timestamp": 1699882914,
      "ems": null
    },
    {
      "latitude": 38.829594,
      "longitude": -7.853271,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 233,
      "squawk": "1347",
      "timestamp": 1699882917,
      "ems": null
    },
    {
      "latitude": 38.82885,
      "longitude": -7.854553,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 233,
      "squawk": "1347",
      "timestamp": 1699882920,
      "ems": null
    },
    {
      "latitude": 38.826462,
      "longitude": -7.858329,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699882929,
      "ems": null
    },
    {
      "latitude": 38.824612,
      "longitude": -7.861084,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699882935,
      "ems": null
    },
    {
      "latitude": 38.823715,
      "longitude": -7.86227,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699882938,
      "ems": null
    },
    {
      "latitude": 38.822754,
      "longitude": -7.863584,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699882941,
      "ems": null
    },
    {
      "latitude": 38.822285,
      "longitude": -7.864258,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699882943,
      "ems": null
    },
    {
      "latitude": 38.821289,
      "longitude": -7.865674,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699882947,
      "ems": null
    },
    {
      "latitude": 38.820564,
      "longitude": -7.866699,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699882949,
      "ems": null
    },
    {
      "latitude": 38.819412,
      "longitude": -7.868241,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699882953,
      "ems": null
    },
    {
      "latitude": 38.817719,
      "longitude": -7.87051,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699882959,
      "ems": null
    },
    {
      "latitude": 38.815384,
      "longitude": -7.873734,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699882968,
      "ems": null
    },
    {
      "latitude": 38.812317,
      "longitude": -7.878272,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699882978,
      "ems": null
    },
    {
      "latitude": 38.811531,
      "longitude": -7.879517,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699882980,
      "ems": null
    },
    {
      "latitude": 38.808884,
      "longitude": -7.883347,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699882990,
      "ems": null
    },
    {
      "latitude": 38.806599,
      "longitude": -7.886597,
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
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699882998,
      "ems": null
    },
    {
      "latitude": 38.803898,
      "longitude": -7.89032,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699883008,
      "ems": null
    },
    {
      "latitude": 38.801605,
      "longitude": -7.894095,
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
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699883017,
      "ems": null
    },
    {
      "latitude": 38.799316,
      "longitude": -7.897797,
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
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699883026,
      "ems": null
    },
    {
      "latitude": 38.796799,
      "longitude": -7.90132,
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
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699883035,
      "ems": null
    },
    {
      "latitude": 38.795883,
      "longitude": -7.902454,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883038,
      "ems": null
    },
    {
      "latitude": 38.79496,
      "longitude": -7.903687,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699883041,
      "ems": null
    },
    {
      "latitude": 38.794029,
      "longitude": -7.904846,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699883044,
      "ems": null
    },
    {
      "latitude": 38.793182,
      "longitude": -7.905977,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883047,
      "ems": null
    },
    {
      "latitude": 38.792221,
      "longitude": -7.907111,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883050,
      "ems": null
    },
    {
      "latitude": 38.791283,
      "longitude": -7.908142,
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
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883053,
      "ems": null
    },
    {
      "latitude": 38.790211,
      "longitude": -7.909302,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883056,
      "ems": null
    },
    {
      "latitude": 38.789188,
      "longitude": -7.910461,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883059,
      "ems": null
    },
    {
      "latitude": 38.787231,
      "longitude": -7.912724,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699883066,
      "ems": null
    },
    {
      "latitude": 38.786179,
      "longitude": -7.913978,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883068,
      "ems": null
    },
    {
      "latitude": 38.785137,
      "longitude": -7.9151,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 219,
      "squawk": "1347",
      "timestamp": 1699883071,
      "ems": null
    },
    {
      "latitude": 38.784119,
      "longitude": -7.916068,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "1347",
      "timestamp": 1699883074,
      "ems": null
    },
    {
      "latitude": 38.780853,
      "longitude": -7.919373,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 216,
      "squawk": "1347",
      "timestamp": 1699883084,
      "ems": null
    },
    {
      "latitude": 38.779816,
      "longitude": -7.920307,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 215,
      "squawk": "1347",
      "timestamp": 1699883087,
      "ems": null
    },
    {
      "latitude": 38.778759,
      "longitude": -7.921265,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 216,
      "squawk": "1347",
      "timestamp": 1699883090,
      "ems": null
    },
    {
      "latitude": 38.775696,
      "longitude": -7.924307,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 217,
      "squawk": "1347",
      "timestamp": 1699883098,
      "ems": null
    },
    {
      "latitude": 38.772709,
      "longitude": -7.927551,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699883108,
      "ems": null
    },
    {
      "latitude": 38.770798,
      "longitude": -7.92981,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883113,
      "ems": null
    },
    {
      "latitude": 38.769882,
      "longitude": -7.930935,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883116,
      "ems": null
    },
    {
      "latitude": 38.768936,
      "longitude": -7.93219,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699883119,
      "ems": null
    },
    {
      "latitude": 38.768051,
      "longitude": -7.933383,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883123,
      "ems": null
    },
    {
      "latitude": 38.767181,
      "longitude": -7.934577,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699883125,
      "ems": null
    },
    {
      "latitude": 38.766312,
      "longitude": -7.935711,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699883128,
      "ems": null
    },
    {
      "latitude": 38.765305,
      "longitude": -7.937012,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699883131,
      "ems": null
    },
    {
      "latitude": 38.762512,
      "longitude": -7.940608,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883141,
      "ems": null
    },
    {
      "latitude": 38.75972,
      "longitude": -7.94397,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883150,
      "ems": null
    },
    {
      "latitude": 38.756927,
      "longitude": -7.947414,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883159,
      "ems": null
    },
    {
      "latitude": 38.754272,
      "longitude": -7.950684,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883168,
      "ems": null
    },
    {
      "latitude": 38.751389,
      "longitude": -7.954042,
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
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883177,
      "ems": null
    },
    {
      "latitude": 38.748459,
      "longitude": -7.957266,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883186,
      "ems": null
    },
    {
      "latitude": 38.745476,
      "longitude": -7.960571,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "1347",
      "timestamp": 1699883195,
      "ems": null
    },
    {
      "latitude": 38.744476,
      "longitude": -7.961505,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 216,
      "squawk": "1347",
      "timestamp": 1699883198,
      "ems": null
    },
    {
      "latitude": 38.740997,
      "longitude": -7.964909,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "1347",
      "timestamp": 1699883208,
      "ems": null
    },
    {
      "latitude": 38.738026,
      "longitude": -7.968018,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883217,
      "ems": null
    },
    {
      "latitude": 38.734863,
      "longitude": -7.971417,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883226,
      "ems": null
    },
    {
      "latitude": 38.73188,
      "longitude": -7.974792,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699883235,
      "ems": null
    },
    {
      "latitude": 38.730858,
      "longitude": -7.975952,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883238,
      "ems": null
    },
    {
      "latitude": 38.729874,
      "longitude": -7.977149,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883241,
      "ems": null
    },
    {
      "latitude": 38.728947,
      "longitude": -7.978333,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883244,
      "ems": null
    },
    {
      "latitude": 38.726109,
      "longitude": -7.981567,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883253,
      "ems": null
    },
    {
      "latitude": 38.724293,
      "longitude": -7.983704,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883259,
      "ems": null
    },
    {
      "latitude": 38.721588,
      "longitude": -7.987061,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699883269,
      "ems": null
    },
    {
      "latitude": 38.71875,
      "longitude": -7.990225,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883278,
      "ems": null
    },
    {
      "latitude": 38.716053,
      "longitude": -7.99353,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883287,
      "ems": null
    },
    {
      "latitude": 38.713303,
      "longitude": -7.997092,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699883296,
      "ems": null
    },
    {
      "latitude": 38.712517,
      "longitude": -7.998108,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883298,
      "ems": null
    },
    {
      "latitude": 38.711399,
      "longitude": -7.999634,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699883302,
      "ems": null
    },
    {
      "latitude": 38.710651,
      "longitude": -8.000671,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883304,
      "ems": null
    },
    {
      "latitude": 38.709442,
      "longitude": -8.002319,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883308,
      "ems": null
    },
    {
      "latitude": 38.708652,
      "longitude": -8.003479,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699883311,
      "ems": null
    },
    {
      "latitude": 38.707581,
      "longitude": -8.005033,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "1347",
      "timestamp": 1699883314,
      "ems": null
    },
    {
      "latitude": 38.705067,
      "longitude": -8.008728,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "1347",
      "timestamp": 1699883323,
      "ems": null
    },
    {
      "latitude": 38.702087,
      "longitude": -8.012573,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 219,
      "squawk": "1347",
      "timestamp": 1699883332,
      "ems": null
    },
    {
      "latitude": 38.701126,
      "longitude": -8.013571,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883335,
      "ems": null
    },
    {
      "latitude": 38.699993,
      "longitude": -8.014832,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883338,
      "ems": null
    },
    {
      "latitude": 38.698921,
      "longitude": -8.015991,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883341,
      "ems": null
    },
    {
      "latitude": 38.697945,
      "longitude": -8.01709,
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
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883344,
      "ems": null
    },
    {
      "latitude": 38.696968,
      "longitude": -8.018188,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883347,
      "ems": null
    },
    {
      "latitude": 38.696129,
      "longitude": -8.019165,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883350,
      "ems": null
    },
    {
      "latitude": 38.695541,
      "longitude": -8.01984,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883353,
      "ems": null
    },
    {
      "latitude": 38.693939,
      "longitude": -8.021606,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883356,
      "ems": null
    },
    {
      "latitude": 38.691753,
      "longitude": -8.023865,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 217,
      "squawk": "1347",
      "timestamp": 1699883362,
      "ems": null
    },
    {
      "latitude": 38.688263,
      "longitude": -8.0271,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 215,
      "squawk": "1347",
      "timestamp": 1699883371,
      "ems": null
    },
    {
      "latitude": 38.687099,
      "longitude": -8.028076,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699883374,
      "ems": null
    },
    {
      "latitude": 38.685974,
      "longitude": -8.029096,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699883377,
      "ems": null
    },
    {
      "latitude": 38.684647,
      "longitude": -8.03023,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699883381,
      "ems": null
    },
    {
      "latitude": 38.683548,
      "longitude": -8.031185,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 213,
      "squawk": "1347",
      "timestamp": 1699883383,
      "ems": null
    },
    {
      "latitude": 38.68235,
      "longitude": -8.032227,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "1347",
      "timestamp": 1699883386,
      "ems": null
    },
    {
      "latitude": 38.678905,
      "longitude": -8.035156,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699883395,
      "ems": null
    },
    {
      "latitude": 38.675354,
      "longitude": -8.03829,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 216,
      "squawk": "1347",
      "timestamp": 1699883404,
      "ems": null
    },
    {
      "latitude": 38.672333,
      "longitude": -8.041335,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 219,
      "squawk": "1347",
      "timestamp": 1699883414,
      "ems": null
    },
    {
      "latitude": 38.670776,
      "longitude": -8.043007,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883417,
      "ems": null
    },
    {
      "latitude": 38.66964,
      "longitude": -8.04425,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883420,
      "ems": null
    },
    {
      "latitude": 38.6689,
      "longitude": -8.045037,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883423,
      "ems": null
    },
    {
      "latitude": 38.667591,
      "longitude": -8.046448,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883426,
      "ems": null
    },
    {
      "latitude": 38.666611,
      "longitude": -8.047485,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883429,
      "ems": null
    },
    {
      "latitude": 38.665604,
      "longitude": -8.04862,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 219,
      "squawk": "1347",
      "timestamp": 1699883432,
      "ems": null
    },
    {
      "latitude": 38.662537,
      "longitude": -8.051904,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883441,
      "ems": null
    },
    {
      "latitude": 38.65947,
      "longitude": -8.055367,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883450,
      "ems": null
    },
    {
      "latitude": 38.65654,
      "longitude": -8.05883,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883459,
      "ems": null
    },
    {
      "latitude": 38.655537,
      "longitude": -8.060059,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883462,
      "ems": null
    },
    {
      "latitude": 38.654884,
      "longitude": -8.060913,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883465,
      "ems": null
    },
    {
      "latitude": 38.651871,
      "longitude": -8.064681,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699883474,
      "ems": null
    },
    {
      "latitude": 38.649033,
      "longitude": -8.068204,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883483,
      "ems": null
    },
    {
      "latitude": 38.646225,
      "longitude": -8.072021,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699883492,
      "ems": null
    },
    {
      "latitude": 38.64362,
      "longitude": -8.075439,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699883501,
      "ems": null
    },
    {
      "latitude": 38.640427,
      "longitude": -8.079131,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699883510,
      "ems": null
    },
    {
      "latitude": 38.638451,
      "longitude": -8.08136,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883516,
      "ems": null
    },
    {
      "latitude": 38.637287,
      "longitude": -8.082581,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 219,
      "squawk": "1347",
      "timestamp": 1699883519,
      "ems": null
    },
    {
      "latitude": 38.636261,
      "longitude": -8.083728,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883523,
      "ems": null
    },
    {
      "latitude": 38.633514,
      "longitude": -8.08728,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883532,
      "ems": null
    },
    {
      "latitude": 38.632553,
      "longitude": -8.088565,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883535,
      "ems": null
    },
    {
      "latitude": 38.631683,
      "longitude": -8.089819,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883538,
      "ems": null
    },
    {
      "latitude": 38.630817,
      "longitude": -8.091064,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699883541,
      "ems": null
    },
    {
      "latitude": 38.629932,
      "longitude": -8.092285,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699883544,
      "ems": null
    },
    {
      "latitude": 38.629028,
      "longitude": -8.09358,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883547,
      "ems": null
    },
    {
      "latitude": 38.628296,
      "longitude": -8.094595,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699883550,
      "ems": null
    },
    {
      "latitude": 38.62738,
      "longitude": -8.095909,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699883553,
      "ems": null
    },
    {
      "latitude": 38.626465,
      "longitude": -8.097342,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 229,
      "squawk": "1347",
      "timestamp": 1699883556,
      "ems": null
    },
    {
      "latitude": 38.623856,
      "longitude": -8.101104,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699883565,
      "ems": null
    },
    {
      "latitude": 38.62183,
      "longitude": -8.103638,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883571,
      "ems": null
    },
    {
      "latitude": 38.620014,
      "longitude": -8.105835,
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
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883577,
      "ems": null
    },
    {
      "latitude": 38.618713,
      "longitude": -8.107239,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "1347",
      "timestamp": 1699883581,
      "ems": null
    },
    {
      "latitude": 38.617733,
      "longitude": -8.108276,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "1347",
      "timestamp": 1699883583,
      "ems": null
    },
    {
      "latitude": 38.616669,
      "longitude": -8.109403,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883587,
      "ems": null
    },
    {
      "latitude": 38.615845,
      "longitude": -8.110358,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699883589,
      "ems": null
    },
    {
      "latitude": 38.612705,
      "longitude": -8.114014,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699883598,
      "ems": null
    },
    {
      "latitude": 38.609776,
      "longitude": -8.117554,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699883607,
      "ems": null
    },
    {
      "latitude": 38.608612,
      "longitude": -8.11908,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883610,
      "ems": null
    },
    {
      "latitude": 38.60796,
      "longitude": -8.119934,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699883612,
      "ems": null
    },
    {
      "latitude": 38.604935,
      "longitude": -8.123718,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699883622,
      "ems": null
    },
    {
      "latitude": 38.601883,
      "longitude": -8.127495,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699883631,
      "ems": null
    },
    {
      "latitude": 38.598999,
      "longitude": -8.131316,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883640,
      "ems": null
    },
    {
      "latitude": 38.596985,
      "longitude": -8.134182,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699883646,
      "ems": null
    },
    {
      "latitude": 38.593918,
      "longitude": -8.137705,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883655,
      "ems": null
    },
    {
      "latitude": 38.592922,
      "longitude": -8.138794,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883658,
      "ems": null
    },
    {
      "latitude": 38.590733,
      "longitude": -8.141235,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "1347",
      "timestamp": 1699883665,
      "ems": null
    },
    {
      "latitude": 38.589664,
      "longitude": -8.142334,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 218,
      "squawk": "1347",
      "timestamp": 1699883668,
      "ems": null
    },
    {
      "latitude": 38.588516,
      "longitude": -8.143497,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 218,
      "squawk": "1347",
      "timestamp": 1699883671,
      "ems": null
    },
    {
      "latitude": 38.587418,
      "longitude": -8.14463,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 217,
      "squawk": "1347",
      "timestamp": 1699883674,
      "ems": null
    },
    {
      "latitude": 38.586357,
      "longitude": -8.145691,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 217,
      "squawk": "1347",
      "timestamp": 1699883677,
      "ems": null
    },
    {
      "latitude": 38.585335,
      "longitude": -8.146606,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 215,
      "squawk": "1347",
      "timestamp": 1699883680,
      "ems": null
    },
    {
      "latitude": 38.58403,
      "longitude": -8.147827,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699883683,
      "ems": null
    },
    {
      "latitude": 38.582962,
      "longitude": -8.148743,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699883685,
      "ems": null
    },
    {
      "latitude": 38.581512,
      "longitude": -8.150004,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "1347",
      "timestamp": 1699883689,
      "ems": null
    },
    {
      "latitude": 38.580399,
      "longitude": -8.150879,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "1347",
      "timestamp": 1699883692,
      "ems": null
    },
    {
      "latitude": 38.579132,
      "longitude": -8.151855,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "1347",
      "timestamp": 1699883695,
      "ems": null
    },
    {
      "latitude": 38.577942,
      "longitude": -8.15287,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "1347",
      "timestamp": 1699883698,
      "ems": null
    },
    {
      "latitude": 38.576752,
      "longitude": -8.153886,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "1347",
      "timestamp": 1699883701,
      "ems": null
    },
    {
      "latitude": 38.573227,
      "longitude": -8.156871,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699883710,
      "ems": null
    },
    {
      "latitude": 38.569931,
      "longitude": -8.159737,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699883719,
      "ems": null
    },
    {
      "latitude": 38.566635,
      "longitude": -8.162305,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699883728,
      "ems": null
    },
    {
      "latitude": 38.565411,
      "longitude": -8.162842,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 196,
      "squawk": "1347",
      "timestamp": 1699883731,
      "ems": null
    },
    {
      "latitude": 38.563919,
      "longitude": -8.163208,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699883734,
      "ems": null
    },
    {
      "latitude": 38.562561,
      "longitude": -8.16332,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699883737,
      "ems": null
    },
    {
      "latitude": 38.561188,
      "longitude": -8.16332,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699883740,
      "ems": null
    },
    {
      "latitude": 38.559906,
      "longitude": -8.163439,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699883743,
      "ems": null
    },
    {
      "latitude": 38.558754,
      "longitude": -8.163635,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699883746,
      "ems": null
    },
    {
      "latitude": 38.557388,
      "longitude": -8.163977,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699883749,
      "ems": null
    },
    {
      "latitude": 38.55624,
      "longitude": -8.164307,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699883752,
      "ems": null
    },
    {
      "latitude": 38.552608,
      "longitude": -8.165894,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699883762,
      "ems": null
    },
    {
      "latitude": 38.551445,
      "longitude": -8.166443,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 201,
      "squawk": "1347",
      "timestamp": 1699883764,
      "ems": null
    },
    {
      "latitude": 38.550282,
      "longitude": -8.167053,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699883767,
      "ems": null
    },
    {
      "latitude": 38.549194,
      "longitude": -8.167738,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699883770,
      "ems": null
    },
    {
      "latitude": 38.548092,
      "longitude": -8.168518,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699883774,
      "ems": null
    },
    {
      "latitude": 38.546741,
      "longitude": -8.16925,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699883777,
      "ems": null
    },
    {
      "latitude": 38.54425,
      "longitude": -8.169708,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699883783,
      "ems": null
    },
    {
      "latitude": 38.543106,
      "longitude": -8.169708,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699883786,
      "ems": null
    },
    {
      "latitude": 38.541576,
      "longitude": -8.169495,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699883789,
      "ems": null
    },
    {
      "latitude": 38.540413,
      "longitude": -8.169189,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 169,
      "squawk": "1347",
      "timestamp": 1699883792,
      "ems": null
    },
    {
      "latitude": 38.5392,
      "longitude": -8.168884,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 167,
      "squawk": "1347",
      "timestamp": 1699883794,
      "ems": null
    },
    {
      "latitude": 38.537899,
      "longitude": -8.168518,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 167,
      "squawk": "1347",
      "timestamp": 1699883798,
      "ems": null
    },
    {
      "latitude": 38.537109,
      "longitude": -8.168335,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 169,
      "squawk": "1347",
      "timestamp": 1699883800,
      "ems": null
    },
    {
      "latitude": 38.535736,
      "longitude": -8.167976,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 169,
      "squawk": "1347",
      "timestamp": 1699883804,
      "ems": null
    },
    {
      "latitude": 38.534683,
      "longitude": -8.167678,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 164,
      "squawk": "1347",
      "timestamp": 1699883807,
      "ems": null
    },
    {
      "latitude": 38.533585,
      "longitude": -8.1672,
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
      "heading": 161,
      "squawk": "1347",
      "timestamp": 1699883810,
      "ems": null
    },
    {
      "latitude": 38.532349,
      "longitude": -8.166782,
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
      "heading": 166,
      "squawk": "1347",
      "timestamp": 1699883813,
      "ems": null
    },
    {
      "latitude": 38.531158,
      "longitude": -8.166544,
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
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699883816,
      "ems": null
    },
    {
      "latitude": 38.529053,
      "longitude": -8.16626,
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
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699883822,
      "ems": null
    },
    {
      "latitude": 38.527588,
      "longitude": -8.166185,
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
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699883825,
      "ems": null
    },
    {
      "latitude": 38.526489,
      "longitude": -8.166125,
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
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699883828,
      "ems": null
    },
    {
      "latitude": 38.525253,
      "longitude": -8.166006,
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
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699883831,
      "ems": null
    },
    {
      "latitude": 38.523884,
      "longitude": -8.165894,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 174,
      "squawk": "1347",
      "timestamp": 1699883834,
      "ems": null
    },
    {
      "latitude": 38.522598,
      "longitude": -8.165648,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699883837,
      "ems": null
    },
    {
      "latitude": 38.521,
      "longitude": -8.165344,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699883840,
      "ems": null
    },
    {
      "latitude": 38.516922,
      "longitude": -8.164334,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 169,
      "squawk": "1347",
      "timestamp": 1699883849,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.164036,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699883852,
      "ems": null
    },
    {
      "latitude": 38.514015,
      "longitude": -8.163757,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 170,
      "squawk": "1347",
      "timestamp": 1699883855,
      "ems": null
    },
    {
      "latitude": 38.512665,
      "longitude": -8.163439,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 167,
      "squawk": "1347",
      "timestamp": 1699883858,
      "ems": null
    },
    {
      "latitude": 38.511246,
      "longitude": -8.163021,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 168,
      "squawk": "1347",
      "timestamp": 1699883861,
      "ems": null
    },
    {
      "latitude": 38.507359,
      "longitude": -8.162292,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 173,
      "squawk": "1347",
      "timestamp": 1699883870,
      "ems": null
    },
    {
      "latitude": 38.506027,
      "longitude": -8.162185,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699883873,
      "ems": null
    },
    {
      "latitude": 38.504562,
      "longitude": -8.162066,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699883876,
      "ems": null
    },
    {
      "latitude": 38.500351,
      "longitude": -8.161588,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "1347",
      "timestamp": 1699883885,
      "ems": null
    },
    {
      "latitude": 38.497585,
      "longitude": -8.161194,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 173,
      "squawk": "1347",
      "timestamp": 1699883891,
      "ems": null
    },
    {
      "latitude": 38.493534,
      "longitude": -8.160706,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 173,
      "squawk": "1347",
      "timestamp": 1699883900,
      "ems": null
    },
    {
      "latitude": 38.489761,
      "longitude": -8.160339,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699883909,
      "ems": null
    },
    {
      "latitude": 38.487576,
      "longitude": -8.159973,
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
      "heading": 165,
      "squawk": "1347",
      "timestamp": 1699883916,
      "ems": null
    },
    {
      "latitude": 38.486298,
      "longitude": -8.159379,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 156,
      "squawk": "1347",
      "timestamp": 1699883918,
      "ems": null
    },
    {
      "latitude": 38.485107,
      "longitude": -8.158691,
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
      "heading": 154,
      "squawk": "1347",
      "timestamp": 1699883922,
      "ems": null
    },
    {
      "latitude": 38.483917,
      "longitude": -8.158065,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "1347",
      "timestamp": 1699883925,
      "ems": null
    },
    {
      "latitude": 38.482773,
      "longitude": -8.157587,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "1347",
      "timestamp": 1699883928,
      "ems": null
    },
    {
      "latitude": 38.481617,
      "longitude": -8.157166,
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
      "heading": 163,
      "squawk": "1347",
      "timestamp": 1699883931,
      "ems": null
    },
    {
      "latitude": 38.480484,
      "longitude": -8.156692,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 161,
      "squawk": "1347",
      "timestamp": 1699883934,
      "ems": null
    },
    {
      "latitude": 38.479156,
      "longitude": -8.156155,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699883937,
      "ems": null
    },
    {
      "latitude": 38.477985,
      "longitude": -8.155701,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "1347",
      "timestamp": 1699883939,
      "ems": null
    },
    {
      "latitude": 38.475632,
      "longitude": -8.155378,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699883945,
      "ems": null
    },
    {
      "latitude": 38.474487,
      "longitude": -8.155199,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 170,
      "squawk": "1347",
      "timestamp": 1699883948,
      "ems": null
    },
    {
      "latitude": 38.473206,
      "longitude": -8.154721,
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
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699883951,
      "ems": null
    },
    {
      "latitude": 38.470779,
      "longitude": -8.153289,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699883958,
      "ems": null
    },
    {
      "latitude": 38.469452,
      "longitude": -8.152392,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699883961,
      "ems": null
    },
    {
      "latitude": 38.46817,
      "longitude": -8.151497,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 152,
      "squawk": "1347",
      "timestamp": 1699883964,
      "ems": null
    },
    {
      "latitude": 38.465508,
      "longitude": -8.150024,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 157,
      "squawk": "1347",
      "timestamp": 1699883969,
      "ems": null
    },
    {
      "latitude": 38.464066,
      "longitude": -8.149536,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 167,
      "squawk": "1347",
      "timestamp": 1699883973,
      "ems": null
    },
    {
      "latitude": 38.460983,
      "longitude": -8.149228,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "1347",
      "timestamp": 1699883979,
      "ems": null
    },
    {
      "latitude": 38.459366,
      "longitude": -8.149292,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699883982,
      "ems": null
    },
    {
      "latitude": 38.457829,
      "longitude": -8.149475,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699883985,
      "ems": null
    },
    {
      "latitude": 38.456497,
      "longitude": -8.149766,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699883987,
      "ems": null
    },
    {
      "latitude": 38.454803,
      "longitude": -8.150244,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699883991,
      "ems": null
    },
    {
      "latitude": 38.453358,
      "longitude": -8.150696,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699883994,
      "ems": null
    },
    {
      "latitude": 38.452381,
      "longitude": -8.151001,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699883995,
      "ems": null
    },
    {
      "latitude": 38.450912,
      "longitude": -8.151497,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699883999,
      "ems": null
    },
    {
      "latitude": 38.449539,
      "longitude": -8.151975,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699884002,
      "ems": null
    },
    {
      "latitude": 38.44812,
      "longitude": -8.152214,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699884005,
      "ems": null
    },
    {
      "latitude": 38.445538,
      "longitude": -8.1521,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "1347",
      "timestamp": 1699884010,
      "ems": null
    },
    {
      "latitude": 38.443863,
      "longitude": -8.151855,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699884014,
      "ems": null
    },
    {
      "latitude": 38.442444,
      "longitude": -8.151557,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699884017,
      "ems": null
    },
    {
      "latitude": 38.441349,
      "longitude": -8.151367,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "1347",
      "timestamp": 1699884019,
      "ems": null
    },
    {
      "latitude": 38.439835,
      "longitude": -8.151139,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 173,
      "squawk": "1347",
      "timestamp": 1699884023,
      "ems": null
    },
    {
      "latitude": 38.438507,
      "longitude": -8.151019,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699884026,
      "ems": null
    },
    {
      "latitude": 38.437111,
      "longitude": -8.150879,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699884029,
      "ems": null
    },
    {
      "latitude": 38.435715,
      "longitude": -8.150841,
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
      "heading": 179,
      "squawk": "1347",
      "timestamp": 1699884032,
      "ems": null
    },
    {
      "latitude": 38.431641,
      "longitude": -8.151019,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699884041,
      "ems": null
    },
    {
      "latitude": 38.430359,
      "longitude": -8.151079,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699884044,
      "ems": null
    },
    {
      "latitude": 38.428825,
      "longitude": -8.151184,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699884047,
      "ems": null
    },
    {
      "latitude": 38.427383,
      "longitude": -8.151306,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699884050,
      "ems": null
    },
    {
      "latitude": 38.426239,
      "longitude": -8.151438,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699884053,
      "ems": null
    },
    {
      "latitude": 38.424637,
      "longitude": -8.151611,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699884056,
      "ems": null
    },
    {
      "latitude": 38.423401,
      "longitude": -8.151736,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699884059,
      "ems": null
    },
    {
      "latitude": 38.421982,
      "longitude": -8.151917,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699884062,
      "ems": null
    },
    {
      "latitude": 38.420654,
      "longitude": -8.152094,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699884065,
      "ems": null
    },
    {
      "latitude": 38.419235,
      "longitude": -8.152392,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699884068,
      "ems": null
    },
    {
      "latitude": 38.417934,
      "longitude": -8.152588,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699884071,
      "ems": null
    },
    {
      "latitude": 38.416489,
      "longitude": -8.152832,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699884074,
      "ems": null
    },
    {
      "latitude": 38.415161,
      "longitude": -8.153049,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699884077,
      "ems": null
    },
    {
      "latitude": 38.411041,
      "longitude": -8.15355,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699884086,
      "ems": null
    },
    {
      "latitude": 38.406807,
      "longitude": -8.154364,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699884095,
      "ems": null
    },
    {
      "latitude": 38.404152,
      "longitude": -8.155139,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699884101,
      "ems": null
    },
    {
      "latitude": 38.402893,
      "longitude": -8.155596,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 196,
      "squawk": "1347",
      "timestamp": 1699884104,
      "ems": null
    },
    {
      "latitude": 38.401703,
      "longitude": -8.156179,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "1347",
      "timestamp": 1699884107,
      "ems": null
    },
    {
      "latitude": 38.40057,
      "longitude": -8.156871,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699884110,
      "ems": null
    },
    {
      "latitude": 38.399452,
      "longitude": -8.157707,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699884113,
      "ems": null
    },
    {
      "latitude": 38.398335,
      "longitude": -8.158543,
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
      "heading": 211,
      "squawk": "1347",
      "timestamp": 1699884116,
      "ems": null
    },
    {
      "latitude": 38.397125,
      "longitude": -8.15957,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "1347",
      "timestamp": 1699884120,
      "ems": null
    },
    {
      "latitude": 38.396145,
      "longitude": -8.160394,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "1347",
      "timestamp": 1699884122,
      "ems": null
    },
    {
      "latitude": 38.395203,
      "longitude": -8.161147,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "1347",
      "timestamp": 1699884125,
      "ems": null
    },
    {
      "latitude": 38.393829,
      "longitude": -8.162374,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699884129,
      "ems": null
    },
    {
      "latitude": 38.392746,
      "longitude": -8.16332,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699884132,
      "ems": null
    },
    {
      "latitude": 38.391632,
      "longitude": -8.164303,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699884135,
      "ems": null
    },
    {
      "latitude": 38.390533,
      "longitude": -8.165297,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "1347",
      "timestamp": 1699884138,
      "ems": null
    },
    {
      "latitude": 38.38765,
      "longitude": -8.167459,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "1347",
      "timestamp": 1699884146,
      "ems": null
    },
    {
      "latitude": 38.383808,
      "longitude": -8.170424,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699884156,
      "ems": null
    },
    {
      "latitude": 38.382599,
      "longitude": -8.17132,
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
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699884159,
      "ems": null
    },
    {
      "latitude": 38.381241,
      "longitude": -8.172251,
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
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699884162,
      "ems": null
    },
    {
      "latitude": 38.380051,
      "longitude": -8.173068,
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
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699884165,
      "ems": null
    },
    {
      "latitude": 38.376526,
      "longitude": -8.175581,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699884174,
      "ems": null
    },
    {
      "latitude": 38.375244,
      "longitude": -8.176455,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "1347",
      "timestamp": 1699884177,
      "ems": null
    },
    {
      "latitude": 38.374222,
      "longitude": -8.177112,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699884180,
      "ems": null
    },
    {
      "latitude": 38.373001,
      "longitude": -8.177918,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699884183,
      "ems": null
    },
    {
      "latitude": 38.369385,
      "longitude": -8.180198,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699884192,
      "ems": null
    },
    {
      "latitude": 38.365723,
      "longitude": -8.182593,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699884201,
      "ems": null
    },
    {
      "latitude": 38.362164,
      "longitude": -8.184934,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "1347",
      "timestamp": 1699884210,
      "ems": null
    },
    {
      "latitude": 38.358719,
      "longitude": -8.187083,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699884219,
      "ems": null
    },
    {
      "latitude": 38.355042,
      "longitude": -8.189352,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699884228,
      "ems": null
    },
    {
      "latitude": 38.352852,
      "longitude": -8.190725,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699884234,
      "ems": null
    },
    {
      "latitude": 38.348942,
      "longitude": -8.193353,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699884244,
      "ems": null
    },
    {
      "latitude": 38.347824,
      "longitude": -8.194129,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699884247,
      "ems": null
    },
    {
      "latitude": 38.346661,
      "longitude": -8.194964,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699884250,
      "ems": null
    },
    {
      "latitude": 38.343475,
      "longitude": -8.197145,
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
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699884258,
      "ems": null
    },
    {
      "latitude": 38.340145,
      "longitude": -8.199503,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699884267,
      "ems": null
    },
    {
      "latitude": 38.336838,
      "longitude": -8.201995,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "1347",
      "timestamp": 1699884277,
      "ems": null
    },
    {
      "latitude": 38.33345,
      "longitude": -8.204625,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699884285,
      "ems": null
    },
    {
      "latitude": 38.330044,
      "longitude": -8.207086,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699884295,
      "ems": null
    },
    {
      "latitude": 38.326767,
      "longitude": -8.209416,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699884303,
      "ems": null
    },
    {
      "latitude": 38.323471,
      "longitude": -8.211929,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699884312,
      "ems": null
    },
    {
      "latitude": 38.320732,
      "longitude": -8.213952,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699884319,
      "ems": null
    },
    {
      "latitude": 38.317425,
      "longitude": -8.21634,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699884328,
      "ems": null
    },
    {
      "latitude": 38.314167,
      "longitude": -8.218729,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699884337,
      "ems": null
    },
    {
      "latitude": 38.311794,
      "longitude": -8.220699,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 216,
      "squawk": "1347",
      "timestamp": 1699884343,
      "ems": null
    },
    {
      "latitude": 38.310928,
      "longitude": -8.221572,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "1347",
      "timestamp": 1699884346,
      "ems": null
    },
    {
      "latitude": 38.309883,
      "longitude": -8.222789,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699884349,
      "ems": null
    },
    {
      "latitude": 38.309097,
      "longitude": -8.223792,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699884352,
      "ems": null
    },
    {
      "latitude": 38.308228,
      "longitude": -8.225019,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699884355,
      "ems": null
    },
    {
      "latitude": 38.307186,
      "longitude": -8.226491,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699884358,
      "ems": null
    },
    {
      "latitude": 38.30658,
      "longitude": -8.227416,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 229,
      "squawk": "1347",
      "timestamp": 1699884361,
      "ems": null
    },
    {
      "latitude": 38.305649,
      "longitude": -8.22882,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 231,
      "squawk": "1347",
      "timestamp": 1699884364,
      "ems": null
    },
    {
      "latitude": 38.304886,
      "longitude": -8.230045,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699884367,
      "ems": null
    },
    {
      "latitude": 38.304016,
      "longitude": -8.231565,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 234,
      "squawk": "1347",
      "timestamp": 1699884370,
      "ems": null
    },
    {
      "latitude": 38.303284,
      "longitude": -8.232909,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 235,
      "squawk": "1347",
      "timestamp": 1699884373,
      "ems": null
    },
    {
      "latitude": 38.302578,
      "longitude": -8.234253,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 235,
      "squawk": "1347",
      "timestamp": 1699884376,
      "ems": null
    },
    {
      "latitude": 38.301819,
      "longitude": -8.235656,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 235,
      "squawk": "1347",
      "timestamp": 1699884379,
      "ems": null
    },
    {
      "latitude": 38.301041,
      "longitude": -8.237058,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 235,
      "squawk": "1347",
      "timestamp": 1699884382,
      "ems": null
    },
    {
      "latitude": 38.300354,
      "longitude": -8.238343,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 234,
      "squawk": "1347",
      "timestamp": 1699884385,
      "ems": null
    },
    {
      "latitude": 38.299549,
      "longitude": -8.239686,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 234,
      "squawk": "1347",
      "timestamp": 1699884388,
      "ems": null
    },
    {
      "latitude": 38.298615,
      "longitude": -8.241323,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 234,
      "squawk": "1347",
      "timestamp": 1699884392,
      "ems": null
    },
    {
      "latitude": 38.296143,
      "longitude": -8.24559,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699884401,
      "ems": null
    },
    {
      "latitude": 38.293671,
      "longitude": -8.249739,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 233,
      "squawk": "1347",
      "timestamp": 1699884410,
      "ems": null
    },
    {
      "latitude": 38.291199,
      "longitude": -8.25383,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 231,
      "squawk": "1347",
      "timestamp": 1699884419,
      "ems": null
    },
    {
      "latitude": 38.288727,
      "longitude": -8.257628,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 229,
      "squawk": "1347",
      "timestamp": 1699884427,
      "ems": null
    },
    {
      "latitude": 38.286003,
      "longitude": -8.2616,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 229,
      "squawk": "1347",
      "timestamp": 1699884437,
      "ems": null
    },
    {
      "latitude": 38.283676,
      "longitude": -8.265122,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699884445,
      "ems": null
    },
    {
      "latitude": 38.281021,
      "longitude": -8.269003,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699884455,
      "ems": null
    },
    {
      "latitude": 38.27829,
      "longitude": -8.272763,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699884464,
      "ems": null
    },
    {
      "latitude": 38.275635,
      "longitude": -8.276504,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699884473,
      "ems": null
    },
    {
      "latitude": 38.272781,
      "longitude": -8.280348,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699884482,
      "ems": null
    },
    {
      "latitude": 38.270035,
      "longitude": -8.284348,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699884491,
      "ems": null
    },
    {
      "latitude": 38.267487,
      "longitude": -8.288366,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699884500,
      "ems": null
    },
    {
      "latitude": 38.265747,
      "longitude": -8.291055,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699884506,
      "ems": null
    },
    {
      "latitude": 38.265106,
      "longitude": -8.292165,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699884508,
      "ems": null
    },
    {
      "latitude": 38.264263,
      "longitude": -8.293543,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 233,
      "squawk": "1347",
      "timestamp": 1699884512,
      "ems": null
    },
    {
      "latitude": 38.261982,
      "longitude": -8.297364,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 233,
      "squawk": "1347",
      "timestamp": 1699884521,
      "ems": null
    },
    {
      "latitude": 38.259468,
      "longitude": -8.301544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699884530,
      "ems": null
    },
    {
      "latitude": 38.257233,
      "longitude": -8.305139,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699884539,
      "ems": null
    },
    {
      "latitude": 38.254944,
      "longitude": -8.30882,
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
      "heading": 231,
      "squawk": "1347",
      "timestamp": 1699884548,
      "ems": null
    },
    {
      "latitude": 38.253342,
      "longitude": -8.311391,
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
      "heading": 231,
      "squawk": "1347",
      "timestamp": 1699884554,
      "ems": null
    },
    {
      "latitude": 38.25095,
      "longitude": -8.315039,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "1347",
      "timestamp": 1699884563,
      "ems": null
    },
    {
      "latitude": 38.249275,
      "longitude": -8.317427,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699884569,
      "ems": null
    },
    {
      "latitude": 38.248577,
      "longitude": -8.318382,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 227,
      "squawk": "1347",
      "timestamp": 1699884572,
      "ems": null
    },
    {
      "latitude": 38.245926,
      "longitude": -8.322144,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 228,
      "squawk": "1347",
      "timestamp": 1699884582,
      "ems": null
    },
    {
      "latitude": 38.243595,
      "longitude": -8.325606,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 231,
      "squawk": "1347",
      "timestamp": 1699884590,
      "ems": null
    },
    {
      "latitude": 38.242767,
      "longitude": -8.327403,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 242,
      "squawk": "1347",
      "timestamp": 1699884593,
      "ems": null
    },
    {
      "latitude": 38.242336,
      "longitude": -8.328651,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884597,
      "ems": null
    },
    {
      "latitude": 38.241917,
      "longitude": -8.330563,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884599,
      "ems": null
    },
    {
      "latitude": 38.241577,
      "longitude": -8.332078,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884602,
      "ems": null
    },
    {
      "latitude": 38.241173,
      "longitude": -8.333608,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699884605,
      "ems": null
    },
    {
      "latitude": 38.240803,
      "longitude": -8.335219,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699884608,
      "ems": null
    },
    {
      "latitude": 38.240341,
      "longitude": -8.336987,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884612,
      "ems": null
    },
    {
      "latitude": 38.239975,
      "longitude": -8.338565,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884615,
      "ems": null
    },
    {
      "latitude": 38.239639,
      "longitude": -8.339996,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699884617,
      "ems": null
    },
    {
      "latitude": 38.239288,
      "longitude": -8.341721,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884620,
      "ems": null
    },
    {
      "latitude": 38.238892,
      "longitude": -8.3434,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884623,
      "ems": null
    },
    {
      "latitude": 38.237591,
      "longitude": -8.348654,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884633,
      "ems": null
    },
    {
      "latitude": 38.236378,
      "longitude": -8.353192,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884641,
      "ems": null
    },
    {
      "latitude": 38.235718,
      "longitude": -8.355161,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 246,
      "squawk": "1347",
      "timestamp": 1699884645,
      "ems": null
    },
    {
      "latitude": 38.235123,
      "longitude": -8.356739,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 244,
      "squawk": "1347",
      "timestamp": 1699884648,
      "ems": null
    },
    {
      "latitude": 38.234562,
      "longitude": -8.358267,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "1347",
      "timestamp": 1699884651,
      "ems": null
    },
    {
      "latitude": 38.234161,
      "longitude": -8.359486,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "1347",
      "timestamp": 1699884653,
      "ems": null
    },
    {
      "latitude": 38.232655,
      "longitude": -8.364954,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699884663,
      "ems": null
    },
    {
      "latitude": 38.231964,
      "longitude": -8.368134,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699884669,
      "ems": null
    },
    {
      "latitude": 38.231644,
      "longitude": -8.369887,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699884672,
      "ems": null
    },
    {
      "latitude": 38.231369,
      "longitude": -8.37129,
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
      "heading": 255,
      "squawk": "1347",
      "timestamp": 1699884675,
      "ems": null
    },
    {
      "latitude": 38.231117,
      "longitude": -8.372597,
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
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699884678,
      "ems": null
    },
    {
      "latitude": 38.230728,
      "longitude": -8.37468,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699884681,
      "ems": null
    },
    {
      "latitude": 38.230419,
      "longitude": -8.376359,
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
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699884684,
      "ems": null
    },
    {
      "latitude": 38.230141,
      "longitude": -8.377732,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699884687,
      "ems": null
    },
    {
      "latitude": 38.229862,
      "longitude": -8.379285,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699884690,
      "ems": null
    },
    {
      "latitude": 38.228851,
      "longitude": -8.384263,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699884699,
      "ems": null
    },
    {
      "latitude": 38.228119,
      "longitude": -8.387185,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 250,
      "squawk": "1347",
      "timestamp": 1699884705,
      "ems": null
    },
    {
      "latitude": 38.227673,
      "longitude": -8.388598,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 249,
      "squawk": "1347",
      "timestamp": 1699884708,
      "ems": null
    },
    {
      "latitude": 38.227249,
      "longitude": -8.390165,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 250,
      "squawk": "1347",
      "timestamp": 1699884711,
      "ems": null
    },
    {
      "latitude": 38.226837,
      "longitude": -8.391764,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884714,
      "ems": null
    },
    {
      "latitude": 38.226509,
      "longitude": -8.393018,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884717,
      "ems": null
    },
    {
      "latitude": 38.226089,
      "longitude": -8.394569,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884720,
      "ems": null
    },
    {
      "latitude": 38.225372,
      "longitude": -8.397236,
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
      "heading": 249,
      "squawk": "1347",
      "timestamp": 1699884726,
      "ems": null
    },
    {
      "latitude": 38.224693,
      "longitude": -8.399286,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 247,
      "squawk": "1347",
      "timestamp": 1699884729,
      "ems": null
    },
    {
      "latitude": 38.224274,
      "longitude": -8.400509,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 247,
      "squawk": "1347",
      "timestamp": 1699884732,
      "ems": null
    },
    {
      "latitude": 38.222763,
      "longitude": -8.405535,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 248,
      "squawk": "1347",
      "timestamp": 1699884741,
      "ems": null
    },
    {
      "latitude": 38.221207,
      "longitude": -8.410443,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "1347",
      "timestamp": 1699884750,
      "ems": null
    },
    {
      "latitude": 38.219761,
      "longitude": -8.415348,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884759,
      "ems": null
    },
    {
      "latitude": 38.219421,
      "longitude": -8.41693,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699884762,
      "ems": null
    },
    {
      "latitude": 38.219055,
      "longitude": -8.418625,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 255,
      "squawk": "1347",
      "timestamp": 1699884765,
      "ems": null
    },
    {
      "latitude": 38.218781,
      "longitude": -8.420125,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699884768,
      "ems": null
    },
    {
      "latitude": 38.218502,
      "longitude": -8.421857,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699884771,
      "ems": null
    },
    {
      "latitude": 38.218178,
      "longitude": -8.423648,
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
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699884774,
      "ems": null
    },
    {
      "latitude": 38.217957,
      "longitude": -8.425286,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 259,
      "squawk": "1347",
      "timestamp": 1699884777,
      "ems": null
    },
    {
      "latitude": 38.217728,
      "longitude": -8.426923,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699884780,
      "ems": null
    },
    {
      "latitude": 38.217525,
      "longitude": -8.428544,
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
      "heading": 261,
      "squawk": "1347",
      "timestamp": 1699884783,
      "ems": null
    },
    {
      "latitude": 38.217361,
      "longitude": -8.430079,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "1347",
      "timestamp": 1699884786,
      "ems": null
    },
    {
      "latitude": 38.217224,
      "longitude": -8.431481,
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
      "heading": 263,
      "squawk": "1347",
      "timestamp": 1699884789,
      "ems": null
    },
    {
      "latitude": 38.217133,
      "longitude": -8.433351,
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
      "heading": 266,
      "squawk": "1347",
      "timestamp": 1699884792,
      "ems": null
    },
    {
      "latitude": 38.217087,
      "longitude": -8.434929,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 266,
      "squawk": "1347",
      "timestamp": 1699884795,
      "ems": null
    },
    {
      "latitude": 38.217014,
      "longitude": -8.436544,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 266,
      "squawk": "1347",
      "timestamp": 1699884799,
      "ems": null
    },
    {
      "latitude": 38.216919,
      "longitude": -8.437978,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "1347",
      "timestamp": 1699884801,
      "ems": null
    },
    {
      "latitude": 38.216827,
      "longitude": -8.43965,
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
      "heading": 266,
      "squawk": "1347",
      "timestamp": 1699884805,
      "ems": null
    },
    {
      "latitude": 38.216721,
      "longitude": -8.441181,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "1347",
      "timestamp": 1699884807,
      "ems": null
    },
    {
      "latitude": 38.216629,
      "longitude": -8.442935,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "1347",
      "timestamp": 1699884811,
      "ems": null
    },
    {
      "latitude": 38.216221,
      "longitude": -8.44777,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "1347",
      "timestamp": 1699884819,
      "ems": null
    },
    {
      "latitude": 38.216034,
      "longitude": -8.449382,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699884823,
      "ems": null
    },
    {
      "latitude": 38.215851,
      "longitude": -8.450815,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699884825,
      "ems": null
    },
    {
      "latitude": 38.215668,
      "longitude": -8.452402,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699884828,
      "ems": null
    },
    {
      "latitude": 38.215439,
      "longitude": -8.454038,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "1347",
      "timestamp": 1699884831,
      "ems": null
    },
    {
      "latitude": 38.215199,
      "longitude": -8.456129,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699884835,
      "ems": null
    },
    {
      "latitude": 38.214966,
      "longitude": -8.457622,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699884838,
      "ems": null
    },
    {
      "latitude": 38.214687,
      "longitude": -8.459234,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699884841,
      "ems": null
    },
    {
      "latitude": 38.214359,
      "longitude": -8.460906,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699884844,
      "ems": null
    },
    {
      "latitude": 38.214066,
      "longitude": -8.462453,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "1347",
      "timestamp": 1699884847,
      "ems": null
    },
    {
      "latitude": 38.213707,
      "longitude": -8.46401,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699884850,
      "ems": null
    },
    {
      "latitude": 38.213379,
      "longitude": -8.465491,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884853,
      "ems": null
    },
    {
      "latitude": 38.212967,
      "longitude": -8.46707,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699884856,
      "ems": null
    },
    {
      "latitude": 38.212555,
      "longitude": -8.468706,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699884859,
      "ems": null
    },
    {
      "latitude": 38.212219,
      "longitude": -8.470221,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699884862,
      "ems": null
    },
    {
      "latitude": 38.211868,
      "longitude": -8.471569,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884864,
      "ems": null
    },
    {
      "latitude": 38.210728,
      "longitude": -8.476668,
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
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699884874,
      "ems": null
    },
    {
      "latitude": 38.209797,
      "longitude": -8.481625,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699884883,
      "ems": null
    },
    {
      "latitude": 38.209518,
      "longitude": -8.483356,
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
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699884886,
      "ems": null
    },
    {
      "latitude": 38.20924,
      "longitude": -8.484908,
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
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699884889,
      "ems": null
    },
    {
      "latitude": 38.208214,
      "longitude": -8.489804,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884898,
      "ems": null
    },
    {
      "latitude": 38.206959,
      "longitude": -8.49488,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699884907,
      "ems": null
    },
    {
      "latitude": 38.206558,
      "longitude": -8.496464,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884910,
      "ems": null
    },
    {
      "latitude": 38.206238,
      "longitude": -8.497808,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884913,
      "ems": null
    },
    {
      "latitude": 38.2057,
      "longitude": -8.499835,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884916,
      "ems": null
    },
    {
      "latitude": 38.20528,
      "longitude": -8.501328,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884919,
      "ems": null
    },
    {
      "latitude": 38.204041,
      "longitude": -8.506047,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699884928,
      "ems": null
    },
    {
      "latitude": 38.202488,
      "longitude": -8.511478,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "1347",
      "timestamp": 1699884937,
      "ems": null
    },
    {
      "latitude": 38.201187,
      "longitude": -8.516435,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699884946,
      "ems": null
    },
    {
      "latitude": 38.200104,
      "longitude": -8.521534,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699884955,
      "ems": null
    },
    {
      "latitude": 38.199051,
      "longitude": -8.526384,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699884964,
      "ems": null
    },
    {
      "latitude": 38.198021,
      "longitude": -8.531421,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699884973,
      "ems": null
    },
    {
      "latitude": 38.197083,
      "longitude": -8.536552,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699884982,
      "ems": null
    },
    {
      "latitude": 38.19611,
      "longitude": -8.541632,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 255,
      "squawk": "1347",
      "timestamp": 1699884992,
      "ems": null
    },
    {
      "latitude": 38.195042,
      "longitude": -8.546706,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 255,
      "squawk": "1347",
      "timestamp": 1699885000,
      "ems": null
    },
    {
      "latitude": 38.19397,
      "longitude": -8.551571,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699885009,
      "ems": null
    },
    {
      "latitude": 38.193039,
      "longitude": -8.556678,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699885019,
      "ems": null
    },
    {
      "latitude": 38.192139,
      "longitude": -8.561563,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699885028,
      "ems": null
    },
    {
      "latitude": 38.191269,
      "longitude": -8.566122,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 255,
      "squawk": "1347",
      "timestamp": 1699885036,
      "ems": null
    },
    {
      "latitude": 38.190292,
      "longitude": -8.571068,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699885045,
      "ems": null
    },
    {
      "latitude": 38.189266,
      "longitude": -8.576382,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 255,
      "squawk": "1347",
      "timestamp": 1699885055,
      "ems": null
    },
    {
      "latitude": 38.188019,
      "longitude": -8.581374,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699885064,
      "ems": null
    },
    {
      "latitude": 38.186783,
      "longitude": -8.586166,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699885072,
      "ems": null
    },
    {
      "latitude": 38.185589,
      "longitude": -8.59107,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699885082,
      "ems": null
    },
    {
      "latitude": 38.184494,
      "longitude": -8.596101,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "1347",
      "timestamp": 1699885091,
      "ems": null
    },
    {
      "latitude": 38.183441,
      "longitude": -8.601068,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699885100,
      "ems": null
    },
    {
      "latitude": 38.182194,
      "longitude": -8.605878,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 251,
      "squawk": "1347",
      "timestamp": 1699885109,
      "ems": null
    },
    {
      "latitude": 38.181015,
      "longitude": -8.610535,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 253,
      "squawk": "1347",
      "timestamp": 1699885118,
      "ems": null
    },
    {
      "latitude": 38.180237,
      "longitude": -8.613461,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 249,
      "squawk": "1347",
      "timestamp": 1699885124,
      "ems": null
    },
    {
      "latitude": 38.179733,
      "longitude": -8.615151,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 248,
      "squawk": "1347",
      "timestamp": 1699885127,
      "ems": null
    },
    {
      "latitude": 38.178955,
      "longitude": -8.617956,
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
      "heading": 250,
      "squawk": "1347",
      "timestamp": 1699885133,
      "ems": null
    },
    {
      "latitude": 38.177631,
      "longitude": -8.622477,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 248,
      "squawk": "1347",
      "timestamp": 1699885142,
      "ems": null
    },
    {
      "latitude": 38.176235,
      "longitude": -8.627014,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 249,
      "squawk": "1347",
      "timestamp": 1699885151,
      "ems": null
    },
    {
      "latitude": 38.174927,
      "longitude": -8.63128,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 247,
      "squawk": "1347",
      "timestamp": 1699885160,
      "ems": null
    },
    {
      "latitude": 38.173489,
      "longitude": -8.635672,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "1347",
      "timestamp": 1699885170,
      "ems": null
    },
    {
      "latitude": 38.172043,
      "longitude": -8.640162,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 249,
      "squawk": "1347",
      "timestamp": 1699885179,
      "ems": null
    },
    {
      "latitude": 38.170761,
      "longitude": -8.644663,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "1347",
      "timestamp": 1699885188,
      "ems": null
    },
    {
      "latitude": 38.169483,
      "longitude": -8.649285,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "1347",
      "timestamp": 1699885197,
      "ems": null
    },
    {
      "latitude": 38.168274,
      "longitude": -8.653883,
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
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699885206,
      "ems": null
    },
    {
      "latitude": 38.167099,
      "longitude": -8.658629,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699885216,
      "ems": null
    },
    {
      "latitude": 38.166,
      "longitude": -8.663245,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "1347",
      "timestamp": 1699885225,
      "ems": null
    },
    {
      "latitude": 38.165726,
      "longitude": -8.664765,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699885228,
      "ems": null
    },
    {
      "latitude": 38.165451,
      "longitude": -8.666343,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699885231,
      "ems": null
    },
    {
      "latitude": 38.164307,
      "longitude": -8.671077,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 250,
      "squawk": "1347",
      "timestamp": 1699885240,
      "ems": null
    },
    {
      "latitude": 38.163116,
      "longitude": -8.675752,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 252,
      "squawk": "1347",
      "timestamp": 1699885249,
      "ems": null
    },
    {
      "latitude": 38.16222,
      "longitude": -8.679915,
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
      "heading": 256,
      "squawk": "1347",
      "timestamp": 1699885258,
      "ems": null
    },
    {
      "latitude": 38.161476,
      "longitude": -8.684692,
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
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699885267,
      "ems": null
    },
    {
      "latitude": 38.161198,
      "longitude": -8.686304,
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
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699885270,
      "ems": null
    },
    {
      "latitude": 38.160873,
      "longitude": -8.688024,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699885273,
      "ems": null
    },
    {
      "latitude": 38.160645,
      "longitude": -8.689425,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699885276,
      "ems": null
    },
    {
      "latitude": 38.16037,
      "longitude": -8.691004,
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
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699885279,
      "ems": null
    },
    {
      "latitude": 38.160095,
      "longitude": -8.692757,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "1347",
      "timestamp": 1699885282,
      "ems": null
    },
    {
      "latitude": 38.159893,
      "longitude": -8.694366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699885285,
      "ems": null
    },
    {
      "latitude": 38.1595,
      "longitude": -8.697841,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "1347",
      "timestamp": 1699885291,
      "ems": null
    },
    {
      "latitude": 38.159409,
      "longitude": -8.699302,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 263,
      "squawk": "1347",
      "timestamp": 1699885294,
      "ems": null
    },
    {
      "latitude": 38.159225,
      "longitude": -8.70088,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 263,
      "squawk": "1347",
      "timestamp": 1699885298,
      "ems": null
    },
    {
      "latitude": 38.159054,
      "longitude": -8.702963,
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
      "heading": 262,
      "squawk": "1347",
      "timestamp": 1699885301,
      "ems": null
    },
    {
      "latitude": 38.158905,
      "longitude": -8.704561,
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
      "heading": 263,
      "squawk": "1347",
      "timestamp": 1699885304,
      "ems": null
    },
    {
      "latitude": 38.158768,
      "longitude": -8.706022,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 264,
      "squawk": "1347",
      "timestamp": 1699885307,
      "ems": null
    },
    {
      "latitude": 38.158684,
      "longitude": -8.707621,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 266,
      "squawk": "1347",
      "timestamp": 1699885309,
      "ems": null
    },
    {
      "latitude": 38.158676,
      "longitude": -8.709353,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 270,
      "squawk": "1347",
      "timestamp": 1699885313,
      "ems": null
    },
    {
      "latitude": 38.15873,
      "longitude": -8.711023,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 273,
      "squawk": "1347",
      "timestamp": 1699885316,
      "ems": null
    },
    {
      "latitude": 38.158916,
      "longitude": -8.713054,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 276,
      "squawk": "1347",
      "timestamp": 1699885319,
      "ems": null
    },
    {
      "latitude": 38.159054,
      "longitude": -8.714546,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 278,
      "squawk": "1347",
      "timestamp": 1699885322,
      "ems": null
    },
    {
      "latitude": 38.159286,
      "longitude": -8.716278,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 278,
      "squawk": "1347",
      "timestamp": 1699885325,
      "ems": null
    },
    {
      "latitude": 38.159454,
      "longitude": -8.718002,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 278,
      "squawk": "1347",
      "timestamp": 1699885328,
      "ems": null
    },
    {
      "latitude": 38.159615,
      "longitude": -8.719682,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 276,
      "squawk": "1347",
      "timestamp": 1699885331,
      "ems": null
    },
    {
      "latitude": 38.159683,
      "longitude": -8.721158,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 273,
      "squawk": "1347",
      "timestamp": 1699885333,
      "ems": null
    },
    {
      "latitude": 38.159729,
      "longitude": -8.722853,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "1347",
      "timestamp": 1699885336,
      "ems": null
    },
    {
      "latitude": 38.159637,
      "longitude": -8.727878,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 268,
      "squawk": "1347",
      "timestamp": 1699885346,
      "ems": null
    },
    {
      "latitude": 38.159615,
      "longitude": -8.729533,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 268,
      "squawk": "1347",
      "timestamp": 1699885349,
      "ems": null
    },
    {
      "latitude": 38.159569,
      "longitude": -8.731026,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "1347",
      "timestamp": 1699885352,
      "ems": null
    },
    {
      "latitude": 38.1595,
      "longitude": -8.732962,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "1347",
      "timestamp": 1699885355,
      "ems": null
    },
    {
      "latitude": 38.159454,
      "longitude": -8.734248,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "1347",
      "timestamp": 1699885358,
      "ems": null
    },
    {
      "latitude": 38.159286,
      "longitude": -8.736041,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "1347",
      "timestamp": 1699885361,
      "ems": null
    },
    {
      "latitude": 38.15918,
      "longitude": -8.737696,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "1347",
      "timestamp": 1699885364,
      "ems": null
    },
    {
      "latitude": 38.159054,
      "longitude": -8.739265,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 263,
      "squawk": "1347",
      "timestamp": 1699885367,
      "ems": null
    },
    {
      "latitude": 38.158859,
      "longitude": -8.740851,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 261,
      "squawk": "1347",
      "timestamp": 1699885370,
      "ems": null
    },
    {
      "latitude": 38.158768,
      "longitude": -8.741786,
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
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699885373,
      "ems": null
    },
    {
      "latitude": 38.158451,
      "longitude": -8.744102,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699885376,
      "ems": null
    },
    {
      "latitude": 38.158173,
      "longitude": -8.745654,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699885379,
      "ems": null
    },
    {
      "latitude": 38.157986,
      "longitude": -8.746849,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699885382,
      "ems": null
    },
    {
      "latitude": 38.157658,
      "longitude": -8.7487,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699885385,
      "ems": null
    },
    {
      "latitude": 38.15744,
      "longitude": -8.750319,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699885388,
      "ems": null
    },
    {
      "latitude": 38.157211,
      "longitude": -8.751838,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 259,
      "squawk": "1347",
      "timestamp": 1699885391,
      "ems": null
    },
    {
      "latitude": 38.156982,
      "longitude": -8.753415,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 259,
      "squawk": "1347",
      "timestamp": 1699885394,
      "ems": null
    },
    {
      "latitude": 38.156307,
      "longitude": -8.758253,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699885403,
      "ems": null
    },
    {
      "latitude": 38.155563,
      "longitude": -8.763058,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699885412,
      "ems": null
    },
    {
      "latitude": 38.155052,
      "longitude": -8.766314,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699885418,
      "ems": null
    },
    {
      "latitude": 38.154556,
      "longitude": -8.770597,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 262,
      "squawk": "1347",
      "timestamp": 1699885427,
      "ems": null
    },
    {
      "latitude": 38.15419,
      "longitude": -8.77457,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "1347",
      "timestamp": 1699885433,
      "ems": null
    },
    {
      "latitude": 38.15332,
      "longitude": -8.779362,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 244,
      "squawk": "1347",
      "timestamp": 1699885443,
      "ems": null
    },
    {
      "latitude": 38.152771,
      "longitude": -8.780524,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 238,
      "squawk": "1347",
      "timestamp": 1699885445,
      "ems": null
    },
    {
      "latitude": 38.152039,
      "longitude": -8.781875,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 234,
      "squawk": "1347",
      "timestamp": 1699885448,
      "ems": null
    },
    {
      "latitude": 38.151329,
      "longitude": -8.783092,
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
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699885451,
      "ems": null
    },
    {
      "latitude": 38.15049,
      "longitude": -8.784465,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 232,
      "squawk": "1347",
      "timestamp": 1699885455,
      "ems": null
    },
    {
      "latitude": 38.149796,
      "longitude": -8.785673,
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
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 234,
      "squawk": "1347",
      "timestamp": 1699885457,
      "ems": null
    },
    {
      "latitude": 38.149017,
      "longitude": -8.787076,
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
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 233,
      "squawk": "1347",
      "timestamp": 1699885461,
      "ems": null
    },
    {
      "latitude": 38.148209,
      "longitude": -8.788286,
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
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 230,
      "squawk": "1347",
      "timestamp": 1699885464,
      "ems": null
    },
    {
      "latitude": 38.147369,
      "longitude": -8.78953,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699885467,
      "ems": null
    },
    {
      "latitude": 38.146454,
      "longitude": -8.790699,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699885469,
      "ems": null
    },
    {
      "latitude": 38.145741,
      "longitude": -8.79163,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699885472,
      "ems": null
    },
    {
      "latitude": 38.144852,
      "longitude": -8.792744,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -1600,
        "ms": -8.1
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699885474,
      "ems": null
    },
    {
      "latitude": 38.14325,
      "longitude": -8.794438,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699885479,
      "ems": null
    },
    {
      "latitude": 38.141876,
      "longitude": -8.79549,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -1600,
        "ms": -8.1
      },
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699885483,
      "ems": null
    },
    {
      "latitude": 38.140686,
      "longitude": -8.796192,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699885485,
      "ems": null
    },
    {
      "latitude": 38.139458,
      "longitude": -8.796824,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885488,
      "ems": null
    },
    {
      "latitude": 38.138062,
      "longitude": -8.797482,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 199,
      "squawk": "1347",
      "timestamp": 1699885492,
      "ems": null
    },
    {
      "latitude": 38.136711,
      "longitude": -8.798018,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1600,
        "ms": -8.1
      },
      "heading": 196,
      "squawk": "1347",
      "timestamp": 1699885494,
      "ems": null
    },
    {
      "latitude": 38.135452,
      "longitude": -8.798437,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699885497,
      "ems": null
    },
    {
      "latitude": 38.134323,
      "longitude": -8.798821,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699885500,
      "ems": null
    },
    {
      "latitude": 38.132755,
      "longitude": -8.799273,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699885503,
      "ems": null
    },
    {
      "latitude": 38.131302,
      "longitude": -8.799698,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699885507,
      "ems": null
    },
    {
      "latitude": 38.130112,
      "longitude": -8.800107,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699885509,
      "ems": null
    },
    {
      "latitude": 38.128609,
      "longitude": -8.800646,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 196,
      "squawk": "1347",
      "timestamp": 1699885513,
      "ems": null
    },
    {
      "latitude": 38.127399,
      "longitude": -8.801124,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 196,
      "squawk": "1347",
      "timestamp": 1699885516,
      "ems": null
    },
    {
      "latitude": 38.126083,
      "longitude": -8.801626,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699885519,
      "ems": null
    },
    {
      "latitude": 38.122139,
      "longitude": -8.803273,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 198,
      "squawk": "1347",
      "timestamp": 1699885528,
      "ems": null
    },
    {
      "latitude": 38.118439,
      "longitude": -8.804666,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699885536,
      "ems": null
    },
    {
      "latitude": 38.113998,
      "longitude": -8.806418,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 198,
      "squawk": "1347",
      "timestamp": 1699885546,
      "ems": null
    },
    {
      "latitude": 38.110409,
      "longitude": -8.80799,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 199,
      "squawk": "1347",
      "timestamp": 1699885555,
      "ems": null
    },
    {
      "latitude": 38.10672,
      "longitude": -8.809516,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699885564,
      "ems": null
    },
    {
      "latitude": 38.103012,
      "longitude": -8.811035,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699885573,
      "ems": null
    },
    {
      "latitude": 38.099422,
      "longitude": -8.812469,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 197,
      "squawk": "1347",
      "timestamp": 1699885581,
      "ems": null
    },
    {
      "latitude": 38.095688,
      "longitude": -8.813782,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699885590,
      "ems": null
    },
    {
      "latitude": 38.091557,
      "longitude": -8.815454,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 201,
      "squawk": "1347",
      "timestamp": 1699885600,
      "ems": null
    },
    {
      "latitude": 38.090252,
      "longitude": -8.816111,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699885603,
      "ems": null
    },
    {
      "latitude": 38.089233,
      "longitude": -8.816762,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699885606,
      "ems": null
    },
    {
      "latitude": 38.088062,
      "longitude": -8.817603,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699885609,
      "ems": null
    },
    {
      "latitude": 38.087265,
      "longitude": -8.818165,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699885611,
      "ems": null
    },
    {
      "latitude": 38.085754,
      "longitude": -8.819158,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699885615,
      "ems": null
    },
    {
      "latitude": 38.084572,
      "longitude": -8.819872,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699885618,
      "ems": null
    },
    {
      "latitude": 38.083466,
      "longitude": -8.820502,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699885621,
      "ems": null
    },
    {
      "latitude": 38.082336,
      "longitude": -8.821066,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699885624,
      "ems": null
    },
    {
      "latitude": 38.081219,
      "longitude": -8.821723,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699885627,
      "ems": null
    },
    {
      "latitude": 38.077728,
      "longitude": -8.823812,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 207,
      "squawk": "1347",
      "timestamp": 1699885636,
      "ems": null
    },
    {
      "latitude": 38.076473,
      "longitude": -8.824828,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699885639,
      "ems": null
    },
    {
      "latitude": 38.075821,
      "longitude": -8.825484,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 218,
      "squawk": "1347",
      "timestamp": 1699885641,
      "ems": null
    },
    {
      "latitude": 38.074612,
      "longitude": -8.826978,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 226,
      "squawk": "1347",
      "timestamp": 1699885645,
      "ems": null
    },
    {
      "latitude": 38.073631,
      "longitude": -8.828112,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699885648,
      "ems": null
    },
    {
      "latitude": 38.072563,
      "longitude": -8.829186,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 215,
      "squawk": "1347",
      "timestamp": 1699885651,
      "ems": null
    },
    {
      "latitude": 38.071518,
      "longitude": -8.830028,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699885654,
      "ems": null
    },
    {
      "latitude": 38.069164,
      "longitude": -8.831276,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 198,
      "squawk": "1347",
      "timestamp": 1699885660,
      "ems": null
    },
    {
      "latitude": 38.068001,
      "longitude": -8.831635,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699885663,
      "ems": null
    },
    {
      "latitude": 38.066895,
      "longitude": -8.831898,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699885666,
      "ems": null
    },
    {
      "latitude": 38.065624,
      "longitude": -8.832171,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699885669,
      "ems": null
    },
    {
      "latitude": 38.064556,
      "longitude": -8.832471,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699885672,
      "ems": null
    },
    {
      "latitude": 38.063049,
      "longitude": -8.833125,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 199,
      "squawk": "1347",
      "timestamp": 1699885675,
      "ems": null
    },
    {
      "latitude": 38.061768,
      "longitude": -8.833768,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885678,
      "ems": null
    },
    {
      "latitude": 38.060806,
      "longitude": -8.834177,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 198,
      "squawk": "1347",
      "timestamp": 1699885681,
      "ems": null
    },
    {
      "latitude": 38.059433,
      "longitude": -8.83468,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699885684,
      "ems": null
    },
    {
      "latitude": 38.058014,
      "longitude": -8.835112,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699885687,
      "ems": null
    },
    {
      "latitude": 38.056961,
      "longitude": -8.835345,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699885690,
      "ems": null
    },
    {
      "latitude": 38.053288,
      "longitude": -8.836172,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699885699,
      "ems": null
    },
    {
      "latitude": 38.050869,
      "longitude": -8.836889,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699885705,
      "ems": null
    },
    {
      "latitude": 38.049316,
      "longitude": -8.837391,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699885708,
      "ems": null
    },
    {
      "latitude": 38.048172,
      "longitude": -8.837683,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699885711,
      "ems": null
    },
    {
      "latitude": 38.0457,
      "longitude": -8.838263,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699885717,
      "ems": null
    },
    {
      "latitude": 38.041836,
      "longitude": -8.839158,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699885726,
      "ems": null
    },
    {
      "latitude": 38.03788,
      "longitude": -8.840292,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699885735,
      "ems": null
    },
    {
      "latitude": 38.035538,
      "longitude": -8.841072,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699885741,
      "ems": null
    },
    {
      "latitude": 38.033157,
      "longitude": -8.841832,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699885747,
      "ems": null
    },
    {
      "latitude": 38.029453,
      "longitude": -8.843039,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699885757,
      "ems": null
    },
    {
      "latitude": 38.027081,
      "longitude": -8.843934,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 198,
      "squawk": "1347",
      "timestamp": 1699885763,
      "ems": null
    },
    {
      "latitude": 38.025833,
      "longitude": -8.844461,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699885765,
      "ems": null
    },
    {
      "latitude": 38.024689,
      "longitude": -8.845046,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885769,
      "ems": null
    },
    {
      "latitude": 38.02359,
      "longitude": -8.845631,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885771,
      "ems": null
    },
    {
      "latitude": 38.022285,
      "longitude": -8.846323,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 201,
      "squawk": "1347",
      "timestamp": 1699885775,
      "ems": null
    },
    {
      "latitude": 38.021309,
      "longitude": -8.846801,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885777,
      "ems": null
    },
    {
      "latitude": 38.020157,
      "longitude": -8.847383,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885781,
      "ems": null
    },
    {
      "latitude": 38.019012,
      "longitude": -8.848026,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699885783,
      "ems": null
    },
    {
      "latitude": 38.017868,
      "longitude": -8.848611,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885787,
      "ems": null
    },
    {
      "latitude": 38.016697,
      "longitude": -8.849249,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699885789,
      "ems": null
    },
    {
      "latitude": 38.015625,
      "longitude": -8.849896,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699885793,
      "ems": null
    },
    {
      "latitude": 38.014389,
      "longitude": -8.850597,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 205,
      "squawk": "1347",
      "timestamp": 1699885795,
      "ems": null
    },
    {
      "latitude": 38.012089,
      "longitude": -8.852055,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 207,
      "squawk": "1347",
      "timestamp": 1699885802,
      "ems": null
    },
    {
      "latitude": 38.011047,
      "longitude": -8.852759,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 211,
      "squawk": "1347",
      "timestamp": 1699885804,
      "ems": null
    },
    {
      "latitude": 38.009903,
      "longitude": -8.853726,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699885808,
      "ems": null
    },
    {
      "latitude": 38.008621,
      "longitude": -8.854863,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699885811,
      "ems": null
    },
    {
      "latitude": 38.00766,
      "longitude": -8.855681,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "1347",
      "timestamp": 1699885814,
      "ems": null
    },
    {
      "latitude": 38.00647,
      "longitude": -8.856558,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "1347",
      "timestamp": 1699885816,
      "ems": null
    },
    {
      "latitude": 38.005062,
      "longitude": -8.857548,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699885820,
      "ems": null
    },
    {
      "latitude": 38.001568,
      "longitude": -8.859817,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699885829,
      "ems": null
    },
    {
      "latitude": 38.00029,
      "longitude": -8.860474,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885832,
      "ems": null
    },
    {
      "latitude": 37.998917,
      "longitude": -8.861234,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699885835,
      "ems": null
    },
    {
      "latitude": 37.997681,
      "longitude": -8.861817,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699885838,
      "ems": null
    },
    {
      "latitude": 37.996449,
      "longitude": -8.862384,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699885841,
      "ems": null
    },
    {
      "latitude": 37.995144,
      "longitude": -8.862982,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699885844,
      "ems": null
    },
    {
      "latitude": 37.993652,
      "longitude": -8.863688,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "1347",
      "timestamp": 1699885847,
      "ems": null
    },
    {
      "latitude": 37.992538,
      "longitude": -8.864295,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699885850,
      "ems": null
    },
    {
      "latitude": 37.988937,
      "longitude": -8.866376,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 205,
      "squawk": "1347",
      "timestamp": 1699885859,
      "ems": null
    },
    {
      "latitude": 37.986374,
      "longitude": -8.868012,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 207,
      "squawk": "1347",
      "timestamp": 1699885865,
      "ems": null
    },
    {
      "latitude": 37.985229,
      "longitude": -8.868772,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "1347",
      "timestamp": 1699885868,
      "ems": null
    },
    {
      "latitude": 37.983582,
      "longitude": -8.869883,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699885872,
      "ems": null
    },
    {
      "latitude": 37.982941,
      "longitude": -8.87035,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 208,
      "squawk": "1347",
      "timestamp": 1699885874,
      "ems": null
    },
    {
      "latitude": 37.981644,
      "longitude": -8.871222,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699885877,
      "ems": null
    },
    {
      "latitude": 37.980293,
      "longitude": -8.872236,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "1347",
      "timestamp": 1699885880,
      "ems": null
    },
    {
      "latitude": 37.979179,
      "longitude": -8.873132,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "1347",
      "timestamp": 1699885883,
      "ems": null
    },
    {
      "latitude": 37.977997,
      "longitude": -8.874148,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 214,
      "squawk": "1347",
      "timestamp": 1699885886,
      "ems": null
    },
    {
      "latitude": 37.976944,
      "longitude": -8.8752,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 219,
      "squawk": "1347",
      "timestamp": 1699885889,
      "ems": null
    },
    {
      "latitude": 37.975918,
      "longitude": -8.876416,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699885892,
      "ems": null
    },
    {
      "latitude": 37.975082,
      "longitude": -8.87755,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699885895,
      "ems": null
    },
    {
      "latitude": 37.974106,
      "longitude": -8.878706,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699885898,
      "ems": null
    },
    {
      "latitude": 37.973099,
      "longitude": -8.879817,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 223,
      "squawk": "1347",
      "timestamp": 1699885901,
      "ems": null
    },
    {
      "latitude": 37.972504,
      "longitude": -8.880576,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699885904,
      "ems": null
    },
    {
      "latitude": 37.971355,
      "longitude": -8.881849,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 221,
      "squawk": "1347",
      "timestamp": 1699885907,
      "ems": null
    },
    {
      "latitude": 37.97049,
      "longitude": -8.882855,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 222,
      "squawk": "1347",
      "timestamp": 1699885910,
      "ems": null
    },
    {
      "latitude": 37.969494,
      "longitude": -8.883999,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 224,
      "squawk": "1347",
      "timestamp": 1699885913,
      "ems": null
    },
    {
      "latitude": 37.968658,
      "longitude": -8.885076,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 225,
      "squawk": "1347",
      "timestamp": 1699885916,
      "ems": null
    },
    {
      "latitude": 37.96619,
      "longitude": -8.887403,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 209,
      "squawk": "1347",
      "timestamp": 1699885924,
      "ems": null
    },
    {
      "latitude": 37.964813,
      "longitude": -8.888231,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699885928,
      "ems": null
    },
    {
      "latitude": 37.963768,
      "longitude": -8.888776,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 200,
      "squawk": "1347",
      "timestamp": 1699885931,
      "ems": null
    },
    {
      "latitude": 37.96265,
      "longitude": -8.889253,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 198,
      "squawk": "1347",
      "timestamp": 1699885934,
      "ems": null
    },
    {
      "latitude": 37.961582,
      "longitude": -8.889671,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699885937,
      "ems": null
    },
    {
      "latitude": 37.960369,
      "longitude": -8.890029,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699885940,
      "ems": null
    },
    {
      "latitude": 37.959255,
      "longitude": -8.890268,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699885943,
      "ems": null
    },
    {
      "latitude": 37.95837,
      "longitude": -8.890448,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699885946,
      "ems": null
    },
    {
      "latitude": 37.957077,
      "longitude": -8.890628,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699885949,
      "ems": null
    },
    {
      "latitude": 37.955978,
      "longitude": -8.890803,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699885952,
      "ems": null
    },
    {
      "latitude": 37.954834,
      "longitude": -8.891153,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699885956,
      "ems": null
    },
    {
      "latitude": 37.95195,
      "longitude": -8.892323,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699885964,
      "ems": null
    },
    {
      "latitude": 37.949711,
      "longitude": -8.892656,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699885970,
      "ems": null
    },
    {
      "latitude": 37.948593,
      "longitude": -8.892656,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699885973,
      "ems": null
    },
    {
      "latitude": 37.947556,
      "longitude": -8.892556,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 174,
      "squawk": "1347",
      "timestamp": 1699885976,
      "ems": null
    },
    {
      "latitude": 37.946411,
      "longitude": -8.892323,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699885979,
      "ems": null
    },
    {
      "latitude": 37.945358,
      "longitude": -8.891796,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 159,
      "squawk": "1347",
      "timestamp": 1699885982,
      "ems": null
    },
    {
      "latitude": 37.944351,
      "longitude": -8.891153,
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
      "heading": 149,
      "squawk": "1347",
      "timestamp": 1699885985,
      "ems": null
    },
    {
      "latitude": 37.94371,
      "longitude": -8.890569,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699885988,
      "ems": null
    },
    {
      "latitude": 37.942566,
      "longitude": -8.889225,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 140,
      "squawk": "1347",
      "timestamp": 1699885991,
      "ems": null
    },
    {
      "latitude": 37.941742,
      "longitude": -8.888057,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 128,
      "squawk": "1347",
      "timestamp": 1699885994,
      "ems": null
    },
    {
      "latitude": 37.941006,
      "longitude": -8.886745,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 123,
      "squawk": "1347",
      "timestamp": 1699885998,
      "ems": null
    },
    {
      "latitude": 37.940399,
      "longitude": -8.885551,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699886001,
      "ems": null
    },
    {
      "latitude": 37.939682,
      "longitude": -8.884024,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 122,
      "squawk": "1347",
      "timestamp": 1699886003,
      "ems": null
    },
    {
      "latitude": 37.93895,
      "longitude": -8.88268,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 123,
      "squawk": "1347",
      "timestamp": 1699886006,
      "ems": null
    },
    {
      "latitude": 37.938217,
      "longitude": -8.881336,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 124,
      "squawk": "1347",
      "timestamp": 1699886009,
      "ems": null
    },
    {
      "latitude": 37.937466,
      "longitude": -8.879938,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 124,
      "squawk": "1347",
      "timestamp": 1699886013,
      "ems": null
    },
    {
      "latitude": 37.936752,
      "longitude": -8.878648,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 123,
      "squawk": "1347",
      "timestamp": 1699886015,
      "ems": null
    },
    {
      "latitude": 37.936069,
      "longitude": -8.877252,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 122,
      "squawk": "1347",
      "timestamp": 1699886019,
      "ems": null
    },
    {
      "latitude": 37.935371,
      "longitude": -8.875878,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699886022,
      "ems": null
    },
    {
      "latitude": 37.934692,
      "longitude": -8.874498,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 121,
      "squawk": "1347",
      "timestamp": 1699886024,
      "ems": null
    },
    {
      "latitude": 37.932579,
      "longitude": -8.870325,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 123,
      "squawk": "1347",
      "timestamp": 1699886033,
      "ems": null
    },
    {
      "latitude": 37.930115,
      "longitude": -8.865675,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 123,
      "squawk": "1347",
      "timestamp": 1699886043,
      "ems": null
    },
    {
      "latitude": 37.928062,
      "longitude": -8.861668,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 122,
      "squawk": "1347",
      "timestamp": 1699886051,
      "ems": null
    },
    {
      "latitude": 37.926201,
      "longitude": -8.858205,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 125,
      "squawk": "1347",
      "timestamp": 1699886058,
      "ems": null
    },
    {
      "latitude": 37.924015,
      "longitude": -8.854264,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 123,
      "squawk": "1347",
      "timestamp": 1699886066,
      "ems": null
    },
    {
      "latitude": 37.921452,
      "longitude": -8.849547,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 128,
      "squawk": "1347",
      "timestamp": 1699886076,
      "ems": null
    },
    {
      "latitude": 37.920521,
      "longitude": -8.848114,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 129,
      "squawk": "1347",
      "timestamp": 1699886079,
      "ems": null
    },
    {
      "latitude": 37.919636,
      "longitude": -8.846801,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 129,
      "squawk": "1347",
      "timestamp": 1699886082,
      "ems": null
    },
    {
      "latitude": 37.91716,
      "longitude": -8.842182,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "1347",
      "timestamp": 1699886091,
      "ems": null
    },
    {
      "latitude": 37.916519,
      "longitude": -8.84059,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699886094,
      "ems": null
    },
    {
      "latitude": 37.915867,
      "longitude": -8.838979,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "1347",
      "timestamp": 1699886097,
      "ems": null
    },
    {
      "latitude": 37.915169,
      "longitude": -8.837068,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "1347",
      "timestamp": 1699886100,
      "ems": null
    },
    {
      "latitude": 37.914597,
      "longitude": -8.835579,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699886103,
      "ems": null
    },
    {
      "latitude": 37.913818,
      "longitude": -8.833709,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699886106,
      "ems": null
    },
    {
      "latitude": 37.913212,
      "longitude": -8.832112,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "1347",
      "timestamp": 1699886109,
      "ems": null
    },
    {
      "latitude": 37.912563,
      "longitude": -8.83062,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "1347",
      "timestamp": 1699886112,
      "ems": null
    },
    {
      "latitude": 37.911816,
      "longitude": -8.828888,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "1347",
      "timestamp": 1699886115,
      "ems": null
    },
    {
      "latitude": 37.910328,
      "longitude": -8.825843,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 124,
      "squawk": "1347",
      "timestamp": 1699886121,
      "ems": null
    },
    {
      "latitude": 37.90947,
      "longitude": -8.824359,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 128,
      "squawk": "1347",
      "timestamp": 1699886124,
      "ems": null
    },
    {
      "latitude": 37.908558,
      "longitude": -8.823096,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 131,
      "squawk": "1347",
      "timestamp": 1699886127,
      "ems": null
    },
    {
      "latitude": 37.907536,
      "longitude": -8.821783,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "1347",
      "timestamp": 1699886130,
      "ems": null
    },
    {
      "latitude": 37.906403,
      "longitude": -8.820678,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699886133,
      "ems": null
    },
    {
      "latitude": 37.905487,
      "longitude": -8.819872,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 146,
      "squawk": "1347",
      "timestamp": 1699886136,
      "ems": null
    },
    {
      "latitude": 37.904251,
      "longitude": -8.818924,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 148,
      "squawk": "1347",
      "timestamp": 1699886139,
      "ems": null
    },
    {
      "latitude": 37.903061,
      "longitude": -8.818048,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 149,
      "squawk": "1347",
      "timestamp": 1699886142,
      "ems": null
    },
    {
      "latitude": 37.901871,
      "longitude": -8.817171,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 151,
      "squawk": "1347",
      "timestamp": 1699886145,
      "ems": null
    },
    {
      "latitude": 37.900551,
      "longitude": -8.81629,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 152,
      "squawk": "1347",
      "timestamp": 1699886148,
      "ems": null
    },
    {
      "latitude": 37.899353,
      "longitude": -8.815535,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 152,
      "squawk": "1347",
      "timestamp": 1699886151,
      "ems": null
    },
    {
      "latitude": 37.897991,
      "longitude": -8.814618,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "1347",
      "timestamp": 1699886154,
      "ems": null
    },
    {
      "latitude": 37.896965,
      "longitude": -8.813961,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 152,
      "squawk": "1347",
      "timestamp": 1699886157,
      "ems": null
    },
    {
      "latitude": 37.895508,
      "longitude": -8.813081,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 154,
      "squawk": "1347",
      "timestamp": 1699886160,
      "ems": null
    },
    {
      "latitude": 37.894272,
      "longitude": -8.812379,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 156,
      "squawk": "1347",
      "timestamp": 1699886163,
      "ems": null
    },
    {
      "latitude": 37.89299,
      "longitude": -8.811678,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 158,
      "squawk": "1347",
      "timestamp": 1699886166,
      "ems": null
    },
    {
      "latitude": 37.891705,
      "longitude": -8.811095,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699886169,
      "ems": null
    },
    {
      "latitude": 37.890427,
      "longitude": -8.81051,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 161,
      "squawk": "1347",
      "timestamp": 1699886172,
      "ems": null
    },
    {
      "latitude": 37.889145,
      "longitude": -8.809983,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 163,
      "squawk": "1347",
      "timestamp": 1699886175,
      "ems": null
    },
    {
      "latitude": 37.887726,
      "longitude": -8.809458,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 163,
      "squawk": "1347",
      "timestamp": 1699886178,
      "ems": null
    },
    {
      "latitude": 37.886444,
      "longitude": -8.809065,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 164,
      "squawk": "1347",
      "timestamp": 1699886181,
      "ems": null
    },
    {
      "latitude": 37.885098,
      "longitude": -8.808587,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 165,
      "squawk": "1347",
      "timestamp": 1699886184,
      "ems": null
    },
    {
      "latitude": 37.883835,
      "longitude": -8.80823,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "1347",
      "timestamp": 1699886187,
      "ems": null
    },
    {
      "latitude": 37.882584,
      "longitude": -8.807871,
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
      "heading": 167,
      "squawk": "1347",
      "timestamp": 1699886190,
      "ems": null
    },
    {
      "latitude": 37.881325,
      "longitude": -8.807512,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 167,
      "squawk": "1347",
      "timestamp": 1699886193,
      "ems": null
    },
    {
      "latitude": 37.879944,
      "longitude": -8.807119,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 168,
      "squawk": "1347",
      "timestamp": 1699886196,
      "ems": null
    },
    {
      "latitude": 37.878662,
      "longitude": -8.806828,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "1347",
      "timestamp": 1699886199,
      "ems": null
    },
    {
      "latitude": 37.877556,
      "longitude": -8.806557,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "1347",
      "timestamp": 1699886202,
      "ems": null
    },
    {
      "latitude": 37.876236,
      "longitude": -8.806302,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699886205,
      "ems": null
    },
    {
      "latitude": 37.874992,
      "longitude": -8.806139,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699886208,
      "ems": null
    },
    {
      "latitude": 37.873829,
      "longitude": -8.806079,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886211,
      "ems": null
    },
    {
      "latitude": 37.872711,
      "longitude": -8.806009,
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
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886214,
      "ems": null
    },
    {
      "latitude": 37.87175,
      "longitude": -8.805951,
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
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886217,
      "ems": null
    },
    {
      "latitude": 37.870422,
      "longitude": -8.805893,
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
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886220,
      "ems": null
    },
    {
      "latitude": 37.869083,
      "longitude": -8.80584,
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
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886223,
      "ems": null
    },
    {
      "latitude": 37.86795,
      "longitude": -8.805776,
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
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699886226,
      "ems": null
    },
    {
      "latitude": 37.866714,
      "longitude": -8.805659,
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
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699886229,
      "ems": null
    },
    {
      "latitude": 37.863682,
      "longitude": -8.805304,
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
      "heading": 174,
      "squawk": "1347",
      "timestamp": 1699886237,
      "ems": null
    },
    {
      "latitude": 37.859711,
      "longitude": -8.805191,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886247,
      "ems": null
    },
    {
      "latitude": 37.858337,
      "longitude": -8.805308,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886250,
      "ems": null
    },
    {
      "latitude": 37.855728,
      "longitude": -8.805367,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886257,
      "ems": null
    },
    {
      "latitude": 37.851902,
      "longitude": -8.805304,
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
      "heading": 178,
      "squawk": "1347",
      "timestamp": 1699886267,
      "ems": null
    },
    {
      "latitude": 37.847717,
      "longitude": -8.805075,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "1347",
      "timestamp": 1699886276,
      "ems": null
    },
    {
      "latitude": 37.846298,
      "longitude": -8.805017,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886280,
      "ems": null
    },
    {
      "latitude": 37.845013,
      "longitude": -8.804945,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699886283,
      "ems": null
    },
    {
      "latitude": 37.842316,
      "longitude": -8.804766,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699886289,
      "ems": null
    },
    {
      "latitude": 37.838013,
      "longitude": -8.804315,
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
      "heading": 174,
      "squawk": "1347",
      "timestamp": 1699886299,
      "ems": null
    },
    {
      "latitude": 37.835423,
      "longitude": -8.804049,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699886305,
      "ems": null
    },
    {
      "latitude": 37.831696,
      "longitude": -8.803789,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886314,
      "ems": null
    },
    {
      "latitude": 37.827988,
      "longitude": -8.803496,
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
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699886323,
      "ems": null
    },
    {
      "latitude": 37.824097,
      "longitude": -8.803087,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699886333,
      "ems": null
    },
    {
      "latitude": 37.819969,
      "longitude": -8.802975,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699886342,
      "ems": null
    },
    {
      "latitude": 37.818741,
      "longitude": -8.803087,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699886345,
      "ems": null
    },
    {
      "latitude": 37.817459,
      "longitude": -8.803146,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886348,
      "ems": null
    },
    {
      "latitude": 37.816292,
      "longitude": -8.803273,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699886351,
      "ems": null
    },
    {
      "latitude": 37.814941,
      "longitude": -8.803392,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886354,
      "ems": null
    },
    {
      "latitude": 37.813778,
      "longitude": -8.803452,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886357,
      "ems": null
    },
    {
      "latitude": 37.812428,
      "longitude": -8.803572,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699886360,
      "ems": null
    },
    {
      "latitude": 37.810959,
      "longitude": -8.803789,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699886363,
      "ems": null
    },
    {
      "latitude": 37.809036,
      "longitude": -8.804139,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699886368,
      "ems": null
    },
    {
      "latitude": 37.805027,
      "longitude": -8.804945,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699886377,
      "ems": null
    },
    {
      "latitude": 37.803543,
      "longitude": -8.805308,
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699886381,
      "ems": null
    },
    {
      "latitude": 37.802307,
      "longitude": -8.805659,
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699886384,
      "ems": null
    },
    {
      "latitude": 37.800835,
      "longitude": -8.806079,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699886388,
      "ems": null
    },
    {
      "latitude": 37.799515,
      "longitude": -8.806418,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699886391,
      "ems": null
    },
    {
      "latitude": 37.798229,
      "longitude": -8.806736,
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699886394,
      "ems": null
    },
    {
      "latitude": 37.794224,
      "longitude": -8.807692,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699886403,
      "ems": null
    },
    {
      "latitude": 37.791527,
      "longitude": -8.808349,
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699886410,
      "ems": null
    },
    {
      "latitude": 37.787567,
      "longitude": -8.809244,
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699886419,
      "ems": null
    },
    {
      "latitude": 37.783951,
      "longitude": -8.810041,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699886429,
      "ems": null
    },
    {
      "latitude": 37.781433,
      "longitude": -8.81051,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699886436,
      "ems": null
    },
    {
      "latitude": 37.780197,
      "longitude": -8.810626,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699886439,
      "ems": null
    },
    {
      "latitude": 37.778816,
      "longitude": -8.810797,
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
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699886442,
      "ems": null
    },
    {
      "latitude": 37.777653,
      "longitude": -8.810856,
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
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886445,
      "ems": null
    },
    {
      "latitude": 37.776489,
      "longitude": -8.810916,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886448,
      "ems": null
    },
    {
      "latitude": 37.77528,
      "longitude": -8.810975,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886452,
      "ems": null
    },
    {
      "latitude": 37.774021,
      "longitude": -8.810916,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 178,
      "squawk": "1347",
      "timestamp": 1699886455,
      "ems": null
    },
    {
      "latitude": 37.772766,
      "longitude": -8.810916,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 178,
      "squawk": "1347",
      "timestamp": 1699886458,
      "ems": null
    },
    {
      "latitude": 37.7715,
      "longitude": -8.810918,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886461,
      "ems": null
    },
    {
      "latitude": 37.770172,
      "longitude": -8.810918,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886464,
      "ems": null
    },
    {
      "latitude": 37.768623,
      "longitude": -8.810916,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886468,
      "ems": null
    },
    {
      "latitude": 37.767365,
      "longitude": -8.810916,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "1347",
      "timestamp": 1699886471,
      "ems": null
    },
    {
      "latitude": 37.763443,
      "longitude": -8.81086,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886481,
      "ems": null
    },
    {
      "latitude": 37.759186,
      "longitude": -8.811035,
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
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886491,
      "ems": null
    },
    {
      "latitude": 37.75489,
      "longitude": -8.811214,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886500,
      "ems": null
    },
    {
      "latitude": 37.751862,
      "longitude": -8.811334,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886507,
      "ems": null
    },
    {
      "latitude": 37.748978,
      "longitude": -8.811274,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 178,
      "squawk": "1347",
      "timestamp": 1699886513,
      "ems": null
    },
    {
      "latitude": 37.744537,
      "longitude": -8.811035,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "1347",
      "timestamp": 1699886522,
      "ems": null
    },
    {
      "latitude": 37.741608,
      "longitude": -8.810802,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886529,
      "ems": null
    },
    {
      "latitude": 37.737534,
      "longitude": -8.810626,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886538,
      "ems": null
    },
    {
      "latitude": 37.733662,
      "longitude": -8.81014,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 170,
      "squawk": "1347",
      "timestamp": 1699886547,
      "ems": null
    },
    {
      "latitude": 37.732407,
      "longitude": -8.809808,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 167,
      "squawk": "1347",
      "timestamp": 1699886550,
      "ems": null
    },
    {
      "latitude": 37.731033,
      "longitude": -8.80934,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 164,
      "squawk": "1347",
      "timestamp": 1699886553,
      "ems": null
    },
    {
      "latitude": 37.72966,
      "longitude": -8.808756,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 161,
      "squawk": "1347",
      "timestamp": 1699886556,
      "ems": null
    },
    {
      "latitude": 37.728378,
      "longitude": -8.80823,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699886559,
      "ems": null
    },
    {
      "latitude": 37.727142,
      "longitude": -8.807704,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 162,
      "squawk": "1347",
      "timestamp": 1699886562,
      "ems": null
    },
    {
      "latitude": 37.725933,
      "longitude": -8.807274,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 163,
      "squawk": "1347",
      "timestamp": 1699886565,
      "ems": null
    },
    {
      "latitude": 37.724762,
      "longitude": -8.806828,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "1347",
      "timestamp": 1699886568,
      "ems": null
    },
    {
      "latitude": 37.72356,
      "longitude": -8.806437,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 165,
      "squawk": "1347",
      "timestamp": 1699886571,
      "ems": null
    },
    {
      "latitude": 37.72221,
      "longitude": -8.80602,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 166,
      "squawk": "1347",
      "timestamp": 1699886574,
      "ems": null
    },
    {
      "latitude": 37.718353,
      "longitude": -8.804899,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 168,
      "squawk": "1347",
      "timestamp": 1699886583,
      "ems": null
    },
    {
      "latitude": 37.717117,
      "longitude": -8.804607,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 170,
      "squawk": "1347",
      "timestamp": 1699886586,
      "ems": null
    },
    {
      "latitude": 37.71574,
      "longitude": -8.804407,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 173,
      "squawk": "1347",
      "timestamp": 1699886589,
      "ems": null
    },
    {
      "latitude": 37.714249,
      "longitude": -8.804229,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "1347",
      "timestamp": 1699886592,
      "ems": null
    },
    {
      "latitude": 37.712814,
      "longitude": -8.804139,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886595,
      "ems": null
    },
    {
      "latitude": 37.711594,
      "longitude": -8.804109,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886598,
      "ems": null
    },
    {
      "latitude": 37.710247,
      "longitude": -8.804109,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699886601,
      "ems": null
    },
    {
      "latitude": 37.708878,
      "longitude": -8.804198,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886604,
      "ems": null
    },
    {
      "latitude": 37.707596,
      "longitude": -8.804256,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886607,
      "ems": null
    },
    {
      "latitude": 37.706287,
      "longitude": -8.804348,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886610,
      "ems": null
    },
    {
      "latitude": 37.704895,
      "longitude": -8.804373,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886613,
      "ems": null
    },
    {
      "latitude": 37.703636,
      "longitude": -8.804527,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699886616,
      "ems": null
    },
    {
      "latitude": 37.702145,
      "longitude": -8.804706,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699886619,
      "ems": null
    },
    {
      "latitude": 37.700935,
      "longitude": -8.804885,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699886622,
      "ems": null
    },
    {
      "latitude": 37.699539,
      "longitude": -8.805064,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699886626,
      "ems": null
    },
    {
      "latitude": 37.698257,
      "longitude": -8.80525,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699886629,
      "ems": null
    },
    {
      "latitude": 37.694595,
      "longitude": -8.805542,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886637,
      "ems": null
    },
    {
      "latitude": 37.690887,
      "longitude": -8.805951,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699886646,
      "ems": null
    },
    {
      "latitude": 37.687134,
      "longitude": -8.806536,
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
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699886655,
      "ems": null
    },
    {
      "latitude": 37.683243,
      "longitude": -8.807237,
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
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699886665,
      "ems": null
    },
    {
      "latitude": 37.682144,
      "longitude": -8.80747,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699886667,
      "ems": null
    },
    {
      "latitude": 37.680824,
      "longitude": -8.807811,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699886671,
      "ems": null
    },
    {
      "latitude": 37.679615,
      "longitude": -8.808109,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699886673,
      "ems": null
    },
    {
      "latitude": 37.67807,
      "longitude": -8.808522,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699886677,
      "ems": null
    },
    {
      "latitude": 37.676727,
      "longitude": -8.808946,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699886680,
      "ems": null
    },
    {
      "latitude": 37.675285,
      "longitude": -8.809363,
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
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699886683,
      "ems": null
    },
    {
      "latitude": 37.674026,
      "longitude": -8.809722,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699886686,
      "ems": null
    },
    {
      "latitude": 37.672806,
      "longitude": -8.810101,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "1347",
      "timestamp": 1699886689,
      "ems": null
    },
    {
      "latitude": 37.668594,
      "longitude": -8.811327,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699886699,
      "ems": null
    },
    {
      "latitude": 37.664532,
      "longitude": -8.812348,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699886709,
      "ems": null
    },
    {
      "latitude": 37.662205,
      "longitude": -8.812767,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699886715,
      "ems": null
    },
    {
      "latitude": 37.658432,
      "longitude": -8.813663,
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699886725,
      "ems": null
    },
    {
      "latitude": 37.657036,
      "longitude": -8.813961,
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
      "heading": 188,
      "squawk": "1347",
      "timestamp": 1699886729,
      "ems": null
    },
    {
      "latitude": 37.655594,
      "longitude": -8.814199,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 189,
      "squawk": "1347",
      "timestamp": 1699886732,
      "ems": null
    },
    {
      "latitude": 37.651775,
      "longitude": -8.815215,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699886742,
      "ems": null
    },
    {
      "latitude": 37.65052,
      "longitude": -8.815633,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699886745,
      "ems": null
    },
    {
      "latitude": 37.649403,
      "longitude": -8.815991,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699886747,
      "ems": null
    },
    {
      "latitude": 37.645538,
      "longitude": -8.817125,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699886757,
      "ems": null
    },
    {
      "latitude": 37.642731,
      "longitude": -8.817872,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699886764,
      "ems": null
    },
    {
      "latitude": 37.638748,
      "longitude": -8.818866,
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
      "heading": 191,
      "squawk": "1347",
      "timestamp": 1699886773,
      "ems": null
    },
    {
      "latitude": 37.63623,
      "longitude": -8.81945,
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
      "heading": 190,
      "squawk": "1347",
      "timestamp": 1699886780,
      "ems": null
    },
    {
      "latitude": 37.632225,
      "longitude": -8.82023,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699886789,
      "ems": null
    },
    {
      "latitude": 37.629501,
      "longitude": -8.820678,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 187,
      "squawk": "1347",
      "timestamp": 1699886795,
      "ems": null
    },
    {
      "latitude": 37.628082,
      "longitude": -8.820887,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699886799,
      "ems": null
    },
    {
      "latitude": 37.626869,
      "longitude": -8.821007,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886802,
      "ems": null
    },
    {
      "latitude": 37.625801,
      "longitude": -8.821126,
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
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886804,
      "ems": null
    },
    {
      "latitude": 37.624451,
      "longitude": -8.821185,
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
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886808,
      "ems": null
    },
    {
      "latitude": 37.62323,
      "longitude": -8.821321,
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
      "heading": 183,
      "squawk": "1347",
      "timestamp": 1699886811,
      "ems": null
    },
    {
      "latitude": 37.620586,
      "longitude": -8.821544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699886818,
      "ems": null
    },
    {
      "latitude": 37.619431,
      "longitude": -8.821612,
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
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699886820,
      "ems": null
    },
    {
      "latitude": 37.618195,
      "longitude": -8.821612,
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
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886824,
      "ems": null
    },
    {
      "latitude": 37.617004,
      "longitude": -8.821612,
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
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699886827,
      "ems": null
    },
    {
      "latitude": 37.613022,
      "longitude": -8.821554,
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
      "heading": 177,
      "squawk": "1347",
      "timestamp": 1699886836,
      "ems": null
    },
    {
      "latitude": 37.611786,
      "longitude": -8.821424,
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
      "heading": 174,
      "squawk": "1347",
      "timestamp": 1699886840,
      "ems": null
    },
    {
      "latitude": 37.610641,
      "longitude": -8.821261,
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
      "heading": 172,
      "squawk": "1347",
      "timestamp": 1699886842,
      "ems": null
    },
    {
      "latitude": 37.609367,
      "longitude": -8.821066,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699886846,
      "ems": null
    },
    {
      "latitude": 37.608158,
      "longitude": -8.820827,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699886849,
      "ems": null
    },
    {
      "latitude": 37.60704,
      "longitude": -8.820588,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "1347",
      "timestamp": 1699886852,
      "ems": null
    },
    {
      "latitude": 37.605736,
      "longitude": -8.82041,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "1347",
      "timestamp": 1699886855,
      "ems": null
    },
    {
      "latitude": 37.60437,
      "longitude": -8.820151,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "1347",
      "timestamp": 1699886858,
      "ems": null
    },
    {
      "latitude": 37.603546,
      "longitude": -8.820035,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 171,
      "squawk": "1347",
      "timestamp": 1699886860,
      "ems": null
    },
    {
      "latitude": 37.6008,
      "longitude": -8.81945,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "1347",
      "timestamp": 1699886867,
      "ems": null
    },
    {
      "latitude": 37.599636,
      "longitude": -8.819096,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 167,
      "squawk": "1347",
      "timestamp": 1699886870,
      "ems": null
    },
    {
      "latitude": 37.59824,
      "longitude": -8.818678,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "1347",
      "timestamp": 1699886873,
      "ems": null
    },
    {
      "latitude": 37.597092,
      "longitude": -8.81834,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "1347",
      "timestamp": 1699886876,
      "ems": null
    },
    {
      "latitude": 37.595901,
      "longitude": -8.817931,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 164,
      "squawk": "1347",
      "timestamp": 1699886879,
      "ems": null
    },
    {
      "latitude": 37.594704,
      "longitude": -8.817484,
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
      "heading": 163,
      "squawk": "1347",
      "timestamp": 1699886882,
      "ems": null
    },
    {
      "latitude": 37.593567,
      "longitude": -8.817054,
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
      "heading": 161,
      "squawk": "1347",
      "timestamp": 1699886885,
      "ems": null
    },
    {
      "latitude": 37.592377,
      "longitude": -8.816528,
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
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699886888,
      "ems": null
    },
    {
      "latitude": 37.591492,
      "longitude": -8.81617,
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
      "heading": 161,
      "squawk": "1347",
      "timestamp": 1699886891,
      "ems": null
    },
    {
      "latitude": 37.590225,
      "longitude": -8.815594,
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
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699886894,
      "ems": null
    },
    {
      "latitude": 37.589035,
      "longitude": -8.815067,
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
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699886897,
      "ems": null
    },
    {
      "latitude": 37.587906,
      "longitude": -8.814558,
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
      "heading": 159,
      "squawk": "1347",
      "timestamp": 1699886900,
      "ems": null
    },
    {
      "latitude": 37.586697,
      "longitude": -8.81402,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "1347",
      "timestamp": 1699886903,
      "ems": null
    },
    {
      "latitude": 37.585484,
      "longitude": -8.813423,
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
      "heading": 159,
      "squawk": "1347",
      "timestamp": 1699886906,
      "ems": null
    },
    {
      "latitude": 37.58432,
      "longitude": -8.812945,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "1347",
      "timestamp": 1699886909,
      "ems": null
    },
    {
      "latitude": 37.580978,
      "longitude": -8.811386,
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
      "heading": 159,
      "squawk": "1347",
      "timestamp": 1699886918,
      "ems": null
    },
    {
      "latitude": 37.577591,
      "longitude": -8.809808,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "1347",
      "timestamp": 1699886927,
      "ems": null
    },
    {
      "latitude": 37.574081,
      "longitude": -8.808349,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "1347",
      "timestamp": 1699886936,
      "ems": null
    },
    {
      "latitude": 37.571777,
      "longitude": -8.80747,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 162,
      "squawk": "1347",
      "timestamp": 1699886942,
      "ems": null
    },
    {
      "latitude": 37.568027,
      "longitude": -8.80602,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 163,
      "squawk": "1347",
      "timestamp": 1699886951,
      "ems": null
    },
    {
      "latitude": 37.56435,
      "longitude": -8.804646,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 162,
      "squawk": "1347",
      "timestamp": 1699886960,
      "ems": null
    },
    {
      "latitude": 37.560516,
      "longitude": -8.803146,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 162,
      "squawk": "1347",
      "timestamp": 1699886969,
      "ems": null
    },
    {
      "latitude": 37.556717,
      "longitude": -8.801422,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 157,
      "squawk": "1347",
      "timestamp": 1699886978,
      "ems": null
    },
    {
      "latitude": 37.555573,
      "longitude": -8.800809,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 155,
      "squawk": "1347",
      "timestamp": 1699886981,
      "ems": null
    },
    {
      "latitude": 37.554245,
      "longitude": -8.799991,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 153,
      "squawk": "1347",
      "timestamp": 1699886984,
      "ems": null
    },
    {
      "latitude": 37.552853,
      "longitude": -8.799034,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699886988,
      "ems": null
    },
    {
      "latitude": 37.551636,
      "longitude": -8.798062,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "1347",
      "timestamp": 1699886991,
      "ems": null
    },
    {
      "latitude": 37.5504,
      "longitude": -8.797185,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699886994,
      "ems": null
    },
    {
      "latitude": 37.548988,
      "longitude": -8.796227,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "1347",
      "timestamp": 1699886998,
      "ems": null
    },
    {
      "latitude": 37.547928,
      "longitude": -8.795432,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 148,
      "squawk": "1347",
      "timestamp": 1699887001,
      "ems": null
    },
    {
      "latitude": 37.546783,
      "longitude": -8.794497,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699887003,
      "ems": null
    },
    {
      "latitude": 37.546005,
      "longitude": -8.793913,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699887006,
      "ems": null
    },
    {
      "latitude": 37.542892,
      "longitude": -8.791985,
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
        "fpm": 1600,
        "ms": 8.1
      },
      "heading": 166,
      "squawk": "1347",
      "timestamp": 1699887013,
      "ems": null
    },
    {
      "latitude": 37.541519,
      "longitude": -8.791985,
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
        "fpm": 1600,
        "ms": 8.1
      },
      "heading": 186,
      "squawk": "1347",
      "timestamp": 1699887017,
      "ems": null
    },
    {
      "latitude": 37.540512,
      "longitude": -8.792569,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 205,
      "squawk": "1347",
      "timestamp": 1699887020,
      "ems": null
    },
    {
      "latitude": 37.539772,
      "longitude": -8.793779,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 240,
      "squawk": "1347",
      "timestamp": 1699887023,
      "ems": null
    },
    {
      "latitude": 37.539585,
      "longitude": -8.79557,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 273,
      "squawk": "1347",
      "timestamp": 1699887026,
      "ems": null
    },
    {
      "latitude": 37.5401,
      "longitude": -8.797069,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 299,
      "squawk": "1347",
      "timestamp": 1699887029,
      "ems": null
    },
    {
      "latitude": 37.541107,
      "longitude": -8.798237,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 316,
      "squawk": "1347",
      "timestamp": 1699887032,
      "ems": null
    },
    {
      "latitude": 37.542572,
      "longitude": -8.798997,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "1347",
      "timestamp": 1699887035,
      "ems": null
    },
    {
      "latitude": 37.544083,
      "longitude": -8.799348,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699887039,
      "ems": null
    },
    {
      "latitude": 37.545593,
      "longitude": -8.799582,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699887042,
      "ems": null
    },
    {
      "latitude": 37.547379,
      "longitude": -8.799815,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699887045,
      "ems": null
    },
    {
      "latitude": 37.549034,
      "longitude": -8.800168,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699887049,
      "ems": null
    },
    {
      "latitude": 37.550526,
      "longitude": -8.800467,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699887052,
      "ems": null
    },
    {
      "latitude": 37.552155,
      "longitude": -8.800825,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699887055,
      "ems": null
    },
    {
      "latitude": 37.553513,
      "longitude": -8.801159,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699887058,
      "ems": null
    },
    {
      "latitude": 37.555069,
      "longitude": -8.801393,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699887061,
      "ems": null
    },
    {
      "latitude": 37.556576,
      "longitude": -8.801541,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699887064,
      "ems": null
    },
    {
      "latitude": 37.558228,
      "longitude": -8.801685,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887068,
      "ems": null
    },
    {
      "latitude": 37.561234,
      "longitude": -8.801781,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "1347",
      "timestamp": 1699887074,
      "ems": null
    },
    {
      "latitude": 37.562675,
      "longitude": -8.801721,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887077,
      "ems": null
    },
    {
      "latitude": 37.564087,
      "longitude": -8.801626,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699887080,
      "ems": null
    },
    {
      "latitude": 37.565689,
      "longitude": -8.801452,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 6,
      "squawk": "1347",
      "timestamp": 1699887083,
      "ems": null
    },
    {
      "latitude": 37.567097,
      "longitude": -8.801184,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 6,
      "squawk": "1347",
      "timestamp": 1699887086,
      "ems": null
    },
    {
      "latitude": 37.568527,
      "longitude": -8.800983,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699887090,
      "ems": null
    },
    {
      "latitude": 37.570129,
      "longitude": -8.800633,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699887093,
      "ems": null
    },
    {
      "latitude": 37.571659,
      "longitude": -8.800287,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699887096,
      "ems": null
    },
    {
      "latitude": 37.573055,
      "longitude": -8.800049,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887100,
      "ems": null
    },
    {
      "latitude": 37.574615,
      "longitude": -8.799815,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887103,
      "ems": null
    },
    {
      "latitude": 37.579247,
      "longitude": -8.799571,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699887112,
      "ems": null
    },
    {
      "latitude": 37.58226,
      "longitude": -8.799406,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887119,
      "ems": null
    },
    {
      "latitude": 37.583622,
      "longitude": -8.799392,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887122,
      "ems": null
    },
    {
      "latitude": 37.585159,
      "longitude": -8.799392,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887125,
      "ems": null
    },
    {
      "latitude": 37.586884,
      "longitude": -8.799289,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887128,
      "ems": null
    },
    {
      "latitude": 37.591396,
      "longitude": -8.798914,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699887138,
      "ems": null
    },
    {
      "latitude": 37.592743,
      "longitude": -8.79853,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699887141,
      "ems": null
    },
    {
      "latitude": 37.594345,
      "longitude": -8.798003,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699887144,
      "ems": null
    },
    {
      "latitude": 37.595867,
      "longitude": -8.797482,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699887147,
      "ems": null
    },
    {
      "latitude": 37.597321,
      "longitude": -8.79701,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699887150,
      "ems": null
    },
    {
      "latitude": 37.598518,
      "longitude": -8.796586,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699887154,
      "ems": null
    },
    {
      "latitude": 37.600388,
      "longitude": -8.796017,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699887157,
      "ems": null
    },
    {
      "latitude": 37.601917,
      "longitude": -8.795451,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699887160,
      "ems": null
    },
    {
      "latitude": 37.603592,
      "longitude": -8.794847,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699887164,
      "ems": null
    },
    {
      "latitude": 37.604828,
      "longitude": -8.794322,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 17,
      "squawk": "1347",
      "timestamp": 1699887167,
      "ems": null
    },
    {
      "latitude": 37.609406,
      "longitude": -8.792627,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699887176,
      "ems": null
    },
    {
      "latitude": 37.614075,
      "longitude": -8.791049,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699887185,
      "ems": null
    },
    {
      "latitude": 37.618607,
      "longitude": -8.789588,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699887195,
      "ems": null
    },
    {
      "latitude": 37.621841,
      "longitude": -8.788465,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699887202,
      "ems": null
    },
    {
      "latitude": 37.626358,
      "longitude": -8.786734,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 17,
      "squawk": "1347",
      "timestamp": 1699887211,
      "ems": null
    },
    {
      "latitude": 37.629337,
      "longitude": -8.78548,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 18,
      "squawk": "1347",
      "timestamp": 1699887218,
      "ems": null
    },
    {
      "latitude": 37.630875,
      "longitude": -8.784883,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699887220,
      "ems": null
    },
    {
      "latitude": 37.635315,
      "longitude": -8.782927,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 18,
      "squawk": "1347",
      "timestamp": 1699887230,
      "ems": null
    },
    {
      "latitude": 37.638107,
      "longitude": -8.781757,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 18,
      "squawk": "1347",
      "timestamp": 1699887236,
      "ems": null
    },
    {
      "latitude": 37.642372,
      "longitude": -8.780046,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "1347",
      "timestamp": 1699887246,
      "ems": null
    },
    {
      "latitude": 37.645432,
      "longitude": -8.778836,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 17,
      "squawk": "1347",
      "timestamp": 1699887253,
      "ems": null
    },
    {
      "latitude": 37.64698,
      "longitude": -8.778255,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699887256,
      "ems": null
    },
    {
      "latitude": 37.648472,
      "longitude": -8.777838,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699887259,
      "ems": null
    },
    {
      "latitude": 37.649918,
      "longitude": -8.777551,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699887263,
      "ems": null
    },
    {
      "latitude": 37.651474,
      "longitude": -8.777258,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 6,
      "squawk": "1347",
      "timestamp": 1699887266,
      "ems": null
    },
    {
      "latitude": 37.653122,
      "longitude": -8.777082,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699887269,
      "ems": null
    },
    {
      "latitude": 37.654587,
      "longitude": -8.776907,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887272,
      "ems": null
    },
    {
      "latitude": 37.656246,
      "longitude": -8.776763,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887276,
      "ems": null
    },
    {
      "latitude": 37.65778,
      "longitude": -8.776643,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699887279,
      "ems": null
    },
    {
      "latitude": 37.65913,
      "longitude": -8.776524,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699887282,
      "ems": null
    },
    {
      "latitude": 37.660812,
      "longitude": -8.776499,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699887285,
      "ems": null
    },
    {
      "latitude": 37.662109,
      "longitude": -8.776404,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887288,
      "ems": null
    },
    {
      "latitude": 37.663738,
      "longitude": -8.776404,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887291,
      "ems": null
    },
    {
      "latitude": 37.665298,
      "longitude": -8.776323,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887295,
      "ems": null
    },
    {
      "latitude": 37.670025,
      "longitude": -8.776106,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699887304,
      "ems": null
    },
    {
      "latitude": 37.674728,
      "longitude": -8.775855,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887314,
      "ems": null
    },
    {
      "latitude": 37.677704,
      "longitude": -8.775797,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887321,
      "ems": null
    },
    {
      "latitude": 37.682175,
      "longitude": -8.775927,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887330,
      "ems": null
    },
    {
      "latitude": 37.683472,
      "longitude": -8.776031,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 356,
      "squawk": "1347",
      "timestamp": 1699887334,
      "ems": null
    },
    {
      "latitude": 37.685303,
      "longitude": -8.776148,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887338,
      "ems": null
    },
    {
      "latitude": 37.689438,
      "longitude": -8.776344,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887346,
      "ems": null
    },
    {
      "latitude": 37.693581,
      "longitude": -8.776584,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887355,
      "ems": null
    },
    {
      "latitude": 37.697815,
      "longitude": -8.776703,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887365,
      "ems": null
    },
    {
      "latitude": 37.702286,
      "longitude": -8.776643,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887374,
      "ems": null
    },
    {
      "latitude": 37.706615,
      "longitude": -8.776703,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887382,
      "ems": null
    },
    {
      "latitude": 37.711121,
      "longitude": -8.777024,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699887392,
      "ems": null
    },
    {
      "latitude": 37.712585,
      "longitude": -8.777258,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699887394,
      "ems": null
    },
    {
      "latitude": 37.714108,
      "longitude": -8.777598,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699887398,
      "ems": null
    },
    {
      "latitude": 37.715607,
      "longitude": -8.778018,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 348,
      "squawk": "1347",
      "timestamp": 1699887401,
      "ems": null
    },
    {
      "latitude": 37.717041,
      "longitude": -8.778375,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "1347",
      "timestamp": 1699887404,
      "ems": null
    },
    {
      "latitude": 37.718445,
      "longitude": -8.778777,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 348,
      "squawk": "1347",
      "timestamp": 1699887407,
      "ems": null
    },
    {
      "latitude": 37.720093,
      "longitude": -8.779186,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699887410,
      "ems": null
    },
    {
      "latitude": 37.721416,
      "longitude": -8.779569,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 346,
      "squawk": "1347",
      "timestamp": 1699887413,
      "ems": null
    },
    {
      "latitude": 37.722565,
      "longitude": -8.779946,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 346,
      "squawk": "1347",
      "timestamp": 1699887416,
      "ems": null
    },
    {
      "latitude": 37.724213,
      "longitude": -8.780414,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699887419,
      "ems": null
    },
    {
      "latitude": 37.728333,
      "longitude": -8.781466,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699887428,
      "ems": null
    },
    {
      "latitude": 37.732635,
      "longitude": -8.782793,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 346,
      "squawk": "1347",
      "timestamp": 1699887437,
      "ems": null
    },
    {
      "latitude": 37.736755,
      "longitude": -8.783803,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699887446,
      "ems": null
    },
    {
      "latitude": 37.738178,
      "longitude": -8.784047,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699887449,
      "ems": null
    },
    {
      "latitude": 37.739456,
      "longitude": -8.784212,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699887452,
      "ems": null
    },
    {
      "latitude": 37.740967,
      "longitude": -8.784329,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "1347",
      "timestamp": 1699887455,
      "ems": null
    },
    {
      "latitude": 37.742413,
      "longitude": -8.784406,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887458,
      "ems": null
    },
    {
      "latitude": 37.743896,
      "longitude": -8.784504,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887461,
      "ems": null
    },
    {
      "latitude": 37.745255,
      "longitude": -8.784584,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887464,
      "ems": null
    },
    {
      "latitude": 37.746929,
      "longitude": -8.784584,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887467,
      "ems": null
    },
    {
      "latitude": 37.748337,
      "longitude": -8.784504,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887470,
      "ems": null
    },
    {
      "latitude": 37.749619,
      "longitude": -8.784504,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887473,
      "ems": null
    },
    {
      "latitude": 37.751404,
      "longitude": -8.784446,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887476,
      "ems": null
    },
    {
      "latitude": 37.752842,
      "longitude": -8.784346,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887479,
      "ems": null
    },
    {
      "latitude": 37.75433,
      "longitude": -8.784346,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887482,
      "ems": null
    },
    {
      "latitude": 37.758545,
      "longitude": -8.784388,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "1347",
      "timestamp": 1699887491,
      "ems": null
    },
    {
      "latitude": 37.762619,
      "longitude": -8.784504,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887500,
      "ems": null
    },
    {
      "latitude": 37.766758,
      "longitude": -8.784644,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887509,
      "ems": null
    },
    {
      "latitude": 37.771088,
      "longitude": -8.784704,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "1347",
      "timestamp": 1699887518,
      "ems": null
    },
    {
      "latitude": 37.774063,
      "longitude": -8.784679,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887524,
      "ems": null
    },
    {
      "latitude": 37.778351,
      "longitude": -8.784525,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699887534,
      "ems": null
    },
    {
      "latitude": 37.780884,
      "longitude": -8.78427,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887540,
      "ems": null
    },
    {
      "latitude": 37.782944,
      "longitude": -8.784095,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887543,
      "ems": null
    },
    {
      "latitude": 37.787476,
      "longitude": -8.783803,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699887552,
      "ems": null
    },
    {
      "latitude": 37.792099,
      "longitude": -8.783569,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699887561,
      "ems": null
    },
    {
      "latitude": 37.796814,
      "longitude": -8.783218,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887570,
      "ems": null
    },
    {
      "latitude": 37.801254,
      "longitude": -8.782809,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887579,
      "ems": null
    },
    {
      "latitude": 37.806015,
      "longitude": -8.782342,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887588,
      "ems": null
    },
    {
      "latitude": 37.810318,
      "longitude": -8.781933,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887597,
      "ems": null
    },
    {
      "latitude": 37.815174,
      "longitude": -8.78148,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887606,
      "ems": null
    },
    {
      "latitude": 37.819702,
      "longitude": -8.781056,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699887615,
      "ems": null
    },
    {
      "latitude": 37.824577,
      "longitude": -8.780763,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699887624,
      "ems": null
    },
    {
      "latitude": 37.829224,
      "longitude": -8.780531,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699887633,
      "ems": null
    },
    {
      "latitude": 37.834309,
      "longitude": -8.780405,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 360,
      "squawk": "1347",
      "timestamp": 1699887642,
      "ems": null
    },
    {
      "latitude": 37.837463,
      "longitude": -8.780472,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887648,
      "ems": null
    },
    {
      "latitude": 37.838684,
      "longitude": -8.780524,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887651,
      "ems": null
    },
    {
      "latitude": 37.840546,
      "longitude": -8.780643,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887654,
      "ems": null
    },
    {
      "latitude": 37.842224,
      "longitude": -8.780705,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887657,
      "ems": null
    },
    {
      "latitude": 37.84346,
      "longitude": -8.780765,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699887660,
      "ems": null
    },
    {
      "latitude": 37.846691,
      "longitude": -8.780942,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887666,
      "ems": null
    },
    {
      "latitude": 37.851105,
      "longitude": -8.78094,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 360,
      "squawk": "1347",
      "timestamp": 1699887675,
      "ems": null
    },
    {
      "latitude": 37.855721,
      "longitude": -8.78124,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699887684,
      "ems": null
    },
    {
      "latitude": 37.857376,
      "longitude": -8.781524,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699887687,
      "ems": null
    },
    {
      "latitude": 37.858513,
      "longitude": -8.781778,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699887690,
      "ems": null
    },
    {
      "latitude": 37.86047,
      "longitude": -8.782315,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699887694,
      "ems": null
    },
    {
      "latitude": 37.861084,
      "longitude": -8.782517,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699887696,
      "ems": null
    },
    {
      "latitude": 37.865917,
      "longitude": -8.782555,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887705,
      "ems": null
    },
    {
      "latitude": 37.867493,
      "longitude": -8.782226,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699887708,
      "ems": null
    },
    {
      "latitude": 37.869083,
      "longitude": -8.781898,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699887712,
      "ems": null
    },
    {
      "latitude": 37.870331,
      "longitude": -8.781641,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887714,
      "ems": null
    },
    {
      "latitude": 37.871796,
      "longitude": -8.781348,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887717,
      "ems": null
    },
    {
      "latitude": 37.873215,
      "longitude": -8.781115,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887720,
      "ems": null
    },
    {
      "latitude": 37.874771,
      "longitude": -8.780765,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699887724,
      "ems": null
    },
    {
      "latitude": 37.87619,
      "longitude": -8.780472,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887726,
      "ems": null
    },
    {
      "latitude": 37.877369,
      "longitude": -8.780286,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887729,
      "ems": null
    },
    {
      "latitude": 37.879089,
      "longitude": -8.779927,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699887733,
      "ems": null
    },
    {
      "latitude": 37.883327,
      "longitude": -8.778613,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699887742,
      "ems": null
    },
    {
      "latitude": 37.887329,
      "longitude": -8.777658,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887750,
      "ems": null
    },
    {
      "latitude": 37.891708,
      "longitude": -8.776849,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887759,
      "ems": null
    },
    {
      "latitude": 37.896687,
      "longitude": -8.775927,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699887768,
      "ems": null
    },
    {
      "latitude": 37.899994,
      "longitude": -8.77533,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699887775,
      "ems": null
    },
    {
      "latitude": 37.904846,
      "longitude": -8.774453,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699887784,
      "ems": null
    },
    {
      "latitude": 37.908371,
      "longitude": -8.773869,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 6,
      "squawk": "1347",
      "timestamp": 1699887791,
      "ems": null
    },
    {
      "latitude": 37.913177,
      "longitude": -8.77305,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699887800,
      "ems": null
    },
    {
      "latitude": 37.916336,
      "longitude": -8.772291,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699887806,
      "ems": null
    },
    {
      "latitude": 37.920822,
      "longitude": -8.771239,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699887816,
      "ems": null
    },
    {
      "latitude": 37.922382,
      "longitude": -8.770792,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699887819,
      "ems": null
    },
    {
      "latitude": 37.923981,
      "longitude": -8.770304,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699887822,
      "ems": null
    },
    {
      "latitude": 37.925457,
      "longitude": -8.769836,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699887825,
      "ems": null
    },
    {
      "latitude": 37.930115,
      "longitude": -8.768434,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699887835,
      "ems": null
    },
    {
      "latitude": 37.933273,
      "longitude": -8.767441,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699887841,
      "ems": null
    },
    {
      "latitude": 37.937347,
      "longitude": -8.766096,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699887849,
      "ems": null
    },
    {
      "latitude": 37.942215,
      "longitude": -8.764642,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699887859,
      "ems": null
    },
    {
      "latitude": 37.946136,
      "longitude": -8.763525,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699887868,
      "ems": null
    },
    {
      "latitude": 37.950829,
      "longitude": -8.762194,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699887877,
      "ems": null
    },
    {
      "latitude": 37.955296,
      "longitude": -8.76076,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699887886,
      "ems": null
    },
    {
      "latitude": 37.959625,
      "longitude": -8.759626,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699887895,
      "ems": null
    },
    {
      "latitude": 37.964035,
      "longitude": -8.758441,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699887904,
      "ems": null
    },
    {
      "latitude": 37.968376,
      "longitude": -8.757537,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699887913,
      "ems": null
    },
    {
      "latitude": 37.969849,
      "longitude": -8.757447,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699887916,
      "ems": null
    },
    {
      "latitude": 37.971268,
      "longitude": -8.757447,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699887919,
      "ems": null
    },
    {
      "latitude": 37.972569,
      "longitude": -8.757537,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "1347",
      "timestamp": 1699887922,
      "ems": null
    },
    {
      "latitude": 37.973923,
      "longitude": -8.757681,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699887925,
      "ems": null
    },
    {
      "latitude": 37.975388,
      "longitude": -8.757915,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699887928,
      "ems": null
    },
    {
      "latitude": 37.97699,
      "longitude": -8.758149,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699887931,
      "ems": null
    },
    {
      "latitude": 37.978271,
      "longitude": -8.758325,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699887934,
      "ems": null
    },
    {
      "latitude": 37.979828,
      "longitude": -8.758558,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699887937,
      "ems": null
    },
    {
      "latitude": 37.981228,
      "longitude": -8.75879,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699887940,
      "ems": null
    },
    {
      "latitude": 37.982712,
      "longitude": -8.759026,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699887943,
      "ems": null
    },
    {
      "latitude": 37.984177,
      "longitude": -8.759317,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699887946,
      "ems": null
    },
    {
      "latitude": 37.985554,
      "longitude": -8.759626,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699887949,
      "ems": null
    },
    {
      "latitude": 37.987152,
      "longitude": -8.760019,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699887952,
      "ems": null
    },
    {
      "latitude": 37.988617,
      "longitude": -8.760487,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699887955,
      "ems": null
    },
    {
      "latitude": 37.989899,
      "longitude": -8.760837,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 348,
      "squawk": "1347",
      "timestamp": 1699887958,
      "ems": null
    },
    {
      "latitude": 37.991421,
      "longitude": -8.761179,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 348,
      "squawk": "1347",
      "timestamp": 1699887961,
      "ems": null
    },
    {
      "latitude": 37.996075,
      "longitude": -8.762373,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699887971,
      "ems": null
    },
    {
      "latitude": 38.000565,
      "longitude": -8.763291,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699887979,
      "ems": null
    },
    {
      "latitude": 38.005154,
      "longitude": -8.764642,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "1347",
      "timestamp": 1699887989,
      "ems": null
    },
    {
      "latitude": 38.006332,
      "longitude": -8.765044,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "1347",
      "timestamp": 1699887991,
      "ems": null
    },
    {
      "latitude": 38.007809,
      "longitude": -8.765597,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "1347",
      "timestamp": 1699887994,
      "ems": null
    },
    {
      "latitude": 38.010818,
      "longitude": -8.766739,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "1347",
      "timestamp": 1699888001,
      "ems": null
    },
    {
      "latitude": 38.012009,
      "longitude": -8.767148,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 343,
      "squawk": "1347",
      "timestamp": 1699888003,
      "ems": null
    },
    {
      "latitude": 38.013519,
      "longitude": -8.767733,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "1347",
      "timestamp": 1699888006,
      "ems": null
    },
    {
      "latitude": 38.014893,
      "longitude": -8.7682,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 343,
      "squawk": "1347",
      "timestamp": 1699888009,
      "ems": null
    },
    {
      "latitude": 38.019012,
      "longitude": -8.769485,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699888018,
      "ems": null
    },
    {
      "latitude": 38.023041,
      "longitude": -8.770597,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699888028,
      "ems": null
    },
    {
      "latitude": 38.02438,
      "longitude": -8.770971,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 348,
      "squawk": "1347",
      "timestamp": 1699888031,
      "ems": null
    },
    {
      "latitude": 38.02858,
      "longitude": -8.772291,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 346,
      "squawk": "1347",
      "timestamp": 1699888040,
      "ems": null
    },
    {
      "latitude": 38.032562,
      "longitude": -8.773577,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699888049,
      "ems": null
    },
    {
      "latitude": 38.036858,
      "longitude": -8.774733,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699888058,
      "ems": null
    },
    {
      "latitude": 38.041183,
      "longitude": -8.775747,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699888067,
      "ems": null
    },
    {
      "latitude": 38.042404,
      "longitude": -8.776031,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699888069,
      "ems": null
    },
    {
      "latitude": 38.046677,
      "longitude": -8.7773,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "1347",
      "timestamp": 1699888079,
      "ems": null
    },
    {
      "latitude": 38.051102,
      "longitude": -8.778852,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699888088,
      "ems": null
    },
    {
      "latitude": 38.055222,
      "longitude": -8.780005,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699888097,
      "ems": null
    },
    {
      "latitude": 38.056641,
      "longitude": -8.78018,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "1347",
      "timestamp": 1699888100,
      "ems": null
    },
    {
      "latitude": 38.058083,
      "longitude": -8.780226,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 360,
      "squawk": "1347",
      "timestamp": 1699888103,
      "ems": null
    },
    {
      "latitude": 38.059574,
      "longitude": -8.780107,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699888106,
      "ems": null
    },
    {
      "latitude": 38.060989,
      "longitude": -8.779888,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 6,
      "squawk": "1347",
      "timestamp": 1699888109,
      "ems": null
    },
    {
      "latitude": 38.062275,
      "longitude": -8.779629,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888112,
      "ems": null
    },
    {
      "latitude": 38.06369,
      "longitude": -8.779128,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699888115,
      "ems": null
    },
    {
      "latitude": 38.065018,
      "longitude": -8.778602,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699888118,
      "ems": null
    },
    {
      "latitude": 38.066254,
      "longitude": -8.778018,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888121,
      "ems": null
    },
    {
      "latitude": 38.067673,
      "longitude": -8.777258,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699888124,
      "ems": null
    },
    {
      "latitude": 38.069,
      "longitude": -8.776499,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 23,
      "squawk": "1347",
      "timestamp": 1699888127,
      "ems": null
    },
    {
      "latitude": 38.070328,
      "longitude": -8.775739,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888130,
      "ems": null
    },
    {
      "latitude": 38.071518,
      "longitude": -8.775096,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888133,
      "ems": null
    },
    {
      "latitude": 38.072933,
      "longitude": -8.774255,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888136,
      "ems": null
    },
    {
      "latitude": 38.074402,
      "longitude": -8.773343,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699888139,
      "ems": null
    },
    {
      "latitude": 38.075272,
      "longitude": -8.772817,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699888142,
      "ems": null
    },
    {
      "latitude": 38.076599,
      "longitude": -8.771998,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699888144,
      "ems": null
    },
    {
      "latitude": 38.080994,
      "longitude": -8.769485,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888154,
      "ems": null
    },
    {
      "latitude": 38.085129,
      "longitude": -8.76709,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699888163,
      "ems": null
    },
    {
      "latitude": 38.088043,
      "longitude": -8.765395,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888170,
      "ems": null
    },
    {
      "latitude": 38.092022,
      "longitude": -8.76297,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699888179,
      "ems": null
    },
    {
      "latitude": 38.095779,
      "longitude": -8.760545,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699888188,
      "ems": null
    },
    {
      "latitude": 38.098206,
      "longitude": -8.759084,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888194,
      "ems": null
    },
    {
      "latitude": 38.101593,
      "longitude": -8.757273,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699888203,
      "ems": null
    },
    {
      "latitude": 38.102356,
      "longitude": -8.75688,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888205,
      "ems": null
    },
    {
      "latitude": 38.103985,
      "longitude": -8.756104,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699888209,
      "ems": null
    },
    {
      "latitude": 38.105289,
      "longitude": -8.755507,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 20,
      "squawk": "1347",
      "timestamp": 1699888212,
      "ems": null
    },
    {
      "latitude": 38.106403,
      "longitude": -8.754969,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888215,
      "ems": null
    },
    {
      "latitude": 38.10759,
      "longitude": -8.754351,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888218,
      "ems": null
    },
    {
      "latitude": 38.111618,
      "longitude": -8.752188,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 23,
      "squawk": "1347",
      "timestamp": 1699888227,
      "ems": null
    },
    {
      "latitude": 38.115574,
      "longitude": -8.749953,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888236,
      "ems": null
    },
    {
      "latitude": 38.116833,
      "longitude": -8.749237,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888239,
      "ems": null
    },
    {
      "latitude": 38.120834,
      "longitude": -8.746849,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699888248,
      "ems": null
    },
    {
      "latitude": 38.124985,
      "longitude": -8.744299,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699888257,
      "ems": null
    },
    {
      "latitude": 38.129124,
      "longitude": -8.741654,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699888266,
      "ems": null
    },
    {
      "latitude": 38.133358,
      "longitude": -8.738788,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699888275,
      "ems": null
    },
    {
      "latitude": 38.136063,
      "longitude": -8.73676,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699888281,
      "ems": null
    },
    {
      "latitude": 38.137501,
      "longitude": -8.735683,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699888284,
      "ems": null
    },
    {
      "latitude": 38.141602,
      "longitude": -8.732436,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699888293,
      "ems": null
    },
    {
      "latitude": 38.142975,
      "longitude": -8.731326,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699888296,
      "ems": null
    },
    {
      "latitude": 38.144344,
      "longitude": -8.73019,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699888299,
      "ems": null
    },
    {
      "latitude": 38.145676,
      "longitude": -8.729047,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699888302,
      "ems": null
    },
    {
      "latitude": 38.146866,
      "longitude": -8.727937,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "1347",
      "timestamp": 1699888305,
      "ems": null
    },
    {
      "latitude": 38.14793,
      "longitude": -8.726966,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 36,
      "squawk": "1347",
      "timestamp": 1699888308,
      "ems": null
    },
    {
      "latitude": 38.1492,
      "longitude": -8.725599,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 43,
      "squawk": "1347",
      "timestamp": 1699888310,
      "ems": null
    },
    {
      "latitude": 38.150116,
      "longitude": -8.723981,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 60,
      "squawk": "1347",
      "timestamp": 1699888314,
      "ems": null
    },
    {
      "latitude": 38.150631,
      "longitude": -8.72213,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "1347",
      "timestamp": 1699888317,
      "ems": null
    },
    {
      "latitude": 38.150848,
      "longitude": -8.720865,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888320,
      "ems": null
    },
    {
      "latitude": 38.151215,
      "longitude": -8.718528,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888323,
      "ems": null
    },
    {
      "latitude": 38.151421,
      "longitude": -8.716994,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888326,
      "ems": null
    },
    {
      "latitude": 38.151749,
      "longitude": -8.714845,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888329,
      "ems": null
    },
    {
      "latitude": 38.152073,
      "longitude": -8.712695,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888332,
      "ems": null
    },
    {
      "latitude": 38.152306,
      "longitude": -8.711083,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888335,
      "ems": null
    },
    {
      "latitude": 38.152634,
      "longitude": -8.709061,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 78,
      "squawk": "1347",
      "timestamp": 1699888338,
      "ems": null
    },
    {
      "latitude": 38.152912,
      "longitude": -8.707143,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888341,
      "ems": null
    },
    {
      "latitude": 38.153191,
      "longitude": -8.705352,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888344,
      "ems": null
    },
    {
      "latitude": 38.153469,
      "longitude": -8.70362,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888347,
      "ems": null
    },
    {
      "latitude": 38.154263,
      "longitude": -8.698187,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 80,
      "squawk": "1347",
      "timestamp": 1699888356,
      "ems": null
    },
    {
      "latitude": 38.155243,
      "longitude": -8.69264,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 75,
      "squawk": "1347",
      "timestamp": 1699888365,
      "ems": null
    },
    {
      "latitude": 38.156296,
      "longitude": -8.687088,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 76,
      "squawk": "1347",
      "timestamp": 1699888374,
      "ems": null
    },
    {
      "latitude": 38.157349,
      "longitude": -8.68142,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "1347",
      "timestamp": 1699888383,
      "ems": null
    },
    {
      "latitude": 38.158543,
      "longitude": -8.675796,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "1347",
      "timestamp": 1699888392,
      "ems": null
    },
    {
      "latitude": 38.159519,
      "longitude": -8.670243,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 84,
      "squawk": "1347",
      "timestamp": 1699888401,
      "ems": null
    },
    {
      "latitude": 38.159592,
      "longitude": -8.668096,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "1347",
      "timestamp": 1699888404,
      "ems": null
    },
    {
      "latitude": 38.159615,
      "longitude": -8.666063,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "1347",
      "timestamp": 1699888407,
      "ems": null
    },
    {
      "latitude": 38.159683,
      "longitude": -8.664063,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 86,
      "squawk": "1347",
      "timestamp": 1699888410,
      "ems": null
    },
    {
      "latitude": 38.159821,
      "longitude": -8.662077,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 84,
      "squawk": "1347",
      "timestamp": 1699888413,
      "ems": null
    },
    {
      "latitude": 38.159939,
      "longitude": -8.660451,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 83,
      "squawk": "1347",
      "timestamp": 1699888416,
      "ems": null
    },
    {
      "latitude": 38.160126,
      "longitude": -8.657943,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 84,
      "squawk": "1347",
      "timestamp": 1699888419,
      "ems": null
    },
    {
      "latitude": 38.160324,
      "longitude": -8.655883,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 82,
      "squawk": "1347",
      "timestamp": 1699888422,
      "ems": null
    },
    {
      "latitude": 38.161243,
      "longitude": -8.651495,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 71,
      "squawk": "1347",
      "timestamp": 1699888429,
      "ems": null
    },
    {
      "latitude": 38.16185,
      "longitude": -8.649465,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "1347",
      "timestamp": 1699888432,
      "ems": null
    },
    {
      "latitude": 38.162521,
      "longitude": -8.647409,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "1347",
      "timestamp": 1699888435,
      "ems": null
    },
    {
      "latitude": 38.163162,
      "longitude": -8.645539,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "1347",
      "timestamp": 1699888438,
      "ems": null
    },
    {
      "latitude": 38.163849,
      "longitude": -8.643792,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 63,
      "squawk": "1347",
      "timestamp": 1699888441,
      "ems": null
    },
    {
      "latitude": 38.164581,
      "longitude": -8.641974,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 62,
      "squawk": "1347",
      "timestamp": 1699888444,
      "ems": null
    },
    {
      "latitude": 38.165314,
      "longitude": -8.640222,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 62,
      "squawk": "1347",
      "timestamp": 1699888447,
      "ems": null
    },
    {
      "latitude": 38.165993,
      "longitude": -8.638418,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "1347",
      "timestamp": 1699888450,
      "ems": null
    },
    {
      "latitude": 38.166595,
      "longitude": -8.636627,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 67,
      "squawk": "1347",
      "timestamp": 1699888453,
      "ems": null
    },
    {
      "latitude": 38.167557,
      "longitude": -8.633208,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 73,
      "squawk": "1347",
      "timestamp": 1699888459,
      "ems": null
    },
    {
      "latitude": 38.167923,
      "longitude": -8.631514,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 74,
      "squawk": "1347",
      "timestamp": 1699888462,
      "ems": null
    },
    {
      "latitude": 38.168289,
      "longitude": -8.629878,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 75,
      "squawk": "1347",
      "timestamp": 1699888465,
      "ems": null
    },
    {
      "latitude": 38.168507,
      "longitude": -8.628686,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 75,
      "squawk": "1347",
      "timestamp": 1699888467,
      "ems": null
    },
    {
      "latitude": 38.168972,
      "longitude": -8.626596,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 74,
      "squawk": "1347",
      "timestamp": 1699888471,
      "ems": null
    },
    {
      "latitude": 38.169342,
      "longitude": -8.624865,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 74,
      "squawk": "1347",
      "timestamp": 1699888474,
      "ems": null
    },
    {
      "latitude": 38.16967,
      "longitude": -8.623253,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 78,
      "squawk": "1347",
      "timestamp": 1699888477,
      "ems": null
    },
    {
      "latitude": 38.169949,
      "longitude": -8.621222,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 80,
      "squawk": "1347",
      "timestamp": 1699888480,
      "ems": null
    },
    {
      "latitude": 38.170135,
      "longitude": -8.619491,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 81,
      "squawk": "1347",
      "timestamp": 1699888483,
      "ems": null
    },
    {
      "latitude": 38.170349,
      "longitude": -8.617781,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 81,
      "squawk": "1347",
      "timestamp": 1699888486,
      "ems": null
    },
    {
      "latitude": 38.170578,
      "longitude": -8.616086,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 80,
      "squawk": "1347",
      "timestamp": 1699888489,
      "ems": null
    },
    {
      "latitude": 38.170834,
      "longitude": -8.614237,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "1347",
      "timestamp": 1699888492,
      "ems": null
    },
    {
      "latitude": 38.171345,
      "longitude": -8.610654,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888498,
      "ems": null
    },
    {
      "latitude": 38.171623,
      "longitude": -8.608744,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 79,
      "squawk": "1347",
      "timestamp": 1699888502,
      "ems": null
    },
    {
      "latitude": 38.172184,
      "longitude": -8.603728,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "1347",
      "timestamp": 1699888510,
      "ems": null
    },
    {
      "latitude": 38.172928,
      "longitude": -8.597578,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 80,
      "squawk": "1347",
      "timestamp": 1699888519,
      "ems": null
    },
    {
      "latitude": 38.173737,
      "longitude": -8.592069,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 78,
      "squawk": "1347",
      "timestamp": 1699888528,
      "ems": null
    },
    {
      "latitude": 38.174698,
      "longitude": -8.586283,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "1347",
      "timestamp": 1699888537,
      "ems": null
    },
    {
      "latitude": 38.175064,
      "longitude": -8.584121,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "1347",
      "timestamp": 1699888541,
      "ems": null
    },
    {
      "latitude": 38.17543,
      "longitude": -8.582251,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "1347",
      "timestamp": 1699888544,
      "ems": null
    },
    {
      "latitude": 38.175766,
      "longitude": -8.580382,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "1347",
      "timestamp": 1699888547,
      "ems": null
    },
    {
      "latitude": 38.176979,
      "longitude": -8.574292,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 75,
      "squawk": "1347",
      "timestamp": 1699888556,
      "ems": null
    },
    {
      "latitude": 38.177811,
      "longitude": -8.570505,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "1347",
      "timestamp": 1699888563,
      "ems": null
    },
    {
      "latitude": 38.178818,
      "longitude": -8.566823,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 63,
      "squawk": "1347",
      "timestamp": 1699888569,
      "ems": null
    },
    {
      "latitude": 38.179863,
      "longitude": -8.564978,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 50,
      "squawk": "1347",
      "timestamp": 1699888572,
      "ems": null
    },
    {
      "latitude": 38.180923,
      "longitude": -8.563843,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 38,
      "squawk": "1347",
      "timestamp": 1699888575,
      "ems": null
    },
    {
      "latitude": 38.182343,
      "longitude": -8.562674,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699888578,
      "ems": null
    },
    {
      "latitude": 38.184082,
      "longitude": -8.561563,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699888581,
      "ems": null
    },
    {
      "latitude": 38.185043,
      "longitude": -8.560979,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 23,
      "squawk": "1347",
      "timestamp": 1699888584,
      "ems": null
    },
    {
      "latitude": 38.187172,
      "longitude": -8.560021,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699888588,
      "ems": null
    },
    {
      "latitude": 38.188198,
      "longitude": -8.559544,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 18,
      "squawk": "1347",
      "timestamp": 1699888591,
      "ems": null
    },
    {
      "latitude": 38.190994,
      "longitude": -8.558525,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699888595,
      "ems": null
    },
    {
      "latitude": 38.192596,
      "longitude": -8.55794,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699888598,
      "ems": null
    },
    {
      "latitude": 38.194107,
      "longitude": -8.557473,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699888601,
      "ems": null
    },
    {
      "latitude": 38.195786,
      "longitude": -8.557036,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888604,
      "ems": null
    },
    {
      "latitude": 38.197227,
      "longitude": -8.556678,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888607,
      "ems": null
    },
    {
      "latitude": 38.199089,
      "longitude": -8.5562,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888610,
      "ems": null
    },
    {
      "latitude": 38.200653,
      "longitude": -8.555779,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699888613,
      "ems": null
    },
    {
      "latitude": 38.202209,
      "longitude": -8.555365,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699888616,
      "ems": null
    },
    {
      "latitude": 38.203857,
      "longitude": -8.554902,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699888619,
      "ems": null
    },
    {
      "latitude": 38.205513,
      "longitude": -8.554588,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699888622,
      "ems": null
    },
    {
      "latitude": 38.20705,
      "longitude": -8.554349,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 6,
      "squawk": "1347",
      "timestamp": 1699888625,
      "ems": null
    },
    {
      "latitude": 38.20871,
      "longitude": -8.554142,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699888628,
      "ems": null
    },
    {
      "latitude": 38.210403,
      "longitude": -8.55405,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699888631,
      "ems": null
    },
    {
      "latitude": 38.211754,
      "longitude": -8.55405,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699888633,
      "ems": null
    },
    {
      "latitude": 38.213661,
      "longitude": -8.553931,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699888637,
      "ems": null
    },
    {
      "latitude": 38.218315,
      "longitude": -8.552796,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699888646,
      "ems": null
    },
    {
      "latitude": 38.219528,
      "longitude": -8.552379,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699888649,
      "ems": null
    },
    {
      "latitude": 38.220978,
      "longitude": -8.551805,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 17,
      "squawk": "1347",
      "timestamp": 1699888652,
      "ems": null
    },
    {
      "latitude": 38.222488,
      "longitude": -8.55122,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699888655,
      "ems": null
    },
    {
      "latitude": 38.223953,
      "longitude": -8.550694,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699888658,
      "ems": null
    },
    {
      "latitude": 38.225437,
      "longitude": -8.55011,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699888661,
      "ems": null
    },
    {
      "latitude": 38.226883,
      "longitude": -8.549573,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699888664,
      "ems": null
    },
    {
      "latitude": 38.228371,
      "longitude": -8.548975,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 17,
      "squawk": "1347",
      "timestamp": 1699888667,
      "ems": null
    },
    {
      "latitude": 38.229767,
      "longitude": -8.548415,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 18,
      "squawk": "1347",
      "timestamp": 1699888670,
      "ems": null
    },
    {
      "latitude": 38.231167,
      "longitude": -8.547781,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699888673,
      "ems": null
    },
    {
      "latitude": 38.232796,
      "longitude": -8.547065,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 20,
      "squawk": "1347",
      "timestamp": 1699888676,
      "ems": null
    },
    {
      "latitude": 38.234005,
      "longitude": -8.546468,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "1347",
      "timestamp": 1699888679,
      "ems": null
    },
    {
      "latitude": 38.236938,
      "longitude": -8.544975,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699888685,
      "ems": null
    },
    {
      "latitude": 38.238426,
      "longitude": -8.544199,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699888688,
      "ems": null
    },
    {
      "latitude": 38.242619,
      "longitude": -8.542407,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699888697,
      "ems": null
    },
    {
      "latitude": 38.245743,
      "longitude": -8.541345,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699888703,
      "ems": null
    },
    {
      "latitude": 38.246933,
      "longitude": -8.541052,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888706,
      "ems": null
    },
    {
      "latitude": 38.248436,
      "longitude": -8.540676,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888709,
      "ems": null
    },
    {
      "latitude": 38.250298,
      "longitude": -8.540198,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888712,
      "ems": null
    },
    {
      "latitude": 38.251923,
      "longitude": -8.539766,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888716,
      "ems": null
    },
    {
      "latitude": 38.253464,
      "longitude": -8.539362,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888718,
      "ems": null
    },
    {
      "latitude": 38.25499,
      "longitude": -8.539006,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888721,
      "ems": null
    },
    {
      "latitude": 38.2565,
      "longitude": -8.538598,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699888724,
      "ems": null
    },
    {
      "latitude": 38.258102,
      "longitude": -8.538305,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699888727,
      "ems": null
    },
    {
      "latitude": 38.259468,
      "longitude": -8.538168,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699888730,
      "ems": null
    },
    {
      "latitude": 38.261215,
      "longitude": -8.537954,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699888733,
      "ems": null
    },
    {
      "latitude": 38.262589,
      "longitude": -8.537838,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699888736,
      "ems": null
    },
    {
      "latitude": 38.267429,
      "longitude": -8.536914,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699888745,
      "ems": null
    },
    {
      "latitude": 38.271973,
      "longitude": -8.535792,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699888754,
      "ems": null
    },
    {
      "latitude": 38.276413,
      "longitude": -8.535442,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699888763,
      "ems": null
    },
    {
      "latitude": 38.277859,
      "longitude": -8.535541,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 356,
      "squawk": "1347",
      "timestamp": 1699888767,
      "ems": null
    },
    {
      "latitude": 38.278973,
      "longitude": -8.535661,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699888769,
      "ems": null
    },
    {
      "latitude": 38.280716,
      "longitude": -8.535734,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699888773,
      "ems": null
    },
    {
      "latitude": 38.282093,
      "longitude": -8.53578,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "1347",
      "timestamp": 1699888775,
      "ems": null
    },
    {
      "latitude": 38.283646,
      "longitude": -8.535676,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699888778,
      "ems": null
    },
    {
      "latitude": 38.28511,
      "longitude": -8.535501,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699888782,
      "ems": null
    },
    {
      "latitude": 38.289642,
      "longitude": -8.534682,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699888791,
      "ems": null
    },
    {
      "latitude": 38.291218,
      "longitude": -8.534347,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699888794,
      "ems": null
    },
    {
      "latitude": 38.292892,
      "longitude": -8.533922,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699888797,
      "ems": null
    },
    {
      "latitude": 38.294312,
      "longitude": -8.533572,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699888800,
      "ems": null
    },
    {
      "latitude": 38.295918,
      "longitude": -8.533213,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699888803,
      "ems": null
    },
    {
      "latitude": 38.297379,
      "longitude": -8.532812,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699888805,
      "ems": null
    },
    {
      "latitude": 38.299179,
      "longitude": -8.532257,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699888809,
      "ems": null
    },
    {
      "latitude": 38.300766,
      "longitude": -8.531818,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699888812,
      "ems": null
    },
    {
      "latitude": 38.30246,
      "longitude": -8.531293,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699888815,
      "ems": null
    },
    {
      "latitude": 38.303879,
      "longitude": -8.530884,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699888818,
      "ems": null
    },
    {
      "latitude": 38.305801,
      "longitude": -8.530183,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699888821,
      "ems": null
    },
    {
      "latitude": 38.307278,
      "longitude": -8.52969,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699888824,
      "ems": null
    },
    {
      "latitude": 38.308731,
      "longitude": -8.529131,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699888827,
      "ems": null
    },
    {
      "latitude": 38.310257,
      "longitude": -8.528496,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "1347",
      "timestamp": 1699888830,
      "ems": null
    },
    {
      "latitude": 38.311661,
      "longitude": -8.527904,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699888833,
      "ems": null
    },
    {
      "latitude": 38.312943,
      "longitude": -8.527319,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 20,
      "squawk": "1347",
      "timestamp": 1699888835,
      "ems": null
    },
    {
      "latitude": 38.314774,
      "longitude": -8.526384,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699888839,
      "ems": null
    },
    {
      "latitude": 38.31575,
      "longitude": -8.525868,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888841,
      "ems": null
    },
    {
      "latitude": 38.317566,
      "longitude": -8.524981,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699888845,
      "ems": null
    },
    {
      "latitude": 38.322006,
      "longitude": -8.523111,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 18,
      "squawk": "1347",
      "timestamp": 1699888854,
      "ems": null
    },
    {
      "latitude": 38.326038,
      "longitude": -8.521749,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699888863,
      "ems": null
    },
    {
      "latitude": 38.327621,
      "longitude": -8.521211,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699888866,
      "ems": null
    },
    {
      "latitude": 38.329018,
      "longitude": -8.520793,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699888869,
      "ems": null
    },
    {
      "latitude": 38.330135,
      "longitude": -8.520555,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699888872,
      "ems": null
    },
    {
      "latitude": 38.331665,
      "longitude": -8.520365,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699888875,
      "ems": null
    },
    {
      "latitude": 38.333176,
      "longitude": -8.520248,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699888878,
      "ems": null
    },
    {
      "latitude": 38.334557,
      "longitude": -8.520136,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699888881,
      "ems": null
    },
    {
      "latitude": 38.336151,
      "longitude": -8.520015,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699888884,
      "ems": null
    },
    {
      "latitude": 38.33749,
      "longitude": -8.519897,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699888887,
      "ems": null
    },
    {
      "latitude": 38.338943,
      "longitude": -8.519722,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699888890,
      "ems": null
    },
    {
      "latitude": 38.340424,
      "longitude": -8.519539,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 6,
      "squawk": "1347",
      "timestamp": 1699888893,
      "ems": null
    },
    {
      "latitude": 38.341919,
      "longitude": -8.519313,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699888896,
      "ems": null
    },
    {
      "latitude": 38.346085,
      "longitude": -8.518261,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699888905,
      "ems": null
    },
    {
      "latitude": 38.347275,
      "longitude": -8.517911,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699888908,
      "ems": null
    },
    {
      "latitude": 38.348385,
      "longitude": -8.517569,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699888911,
      "ems": null
    },
    {
      "latitude": 38.350204,
      "longitude": -8.516917,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699888914,
      "ems": null
    },
    {
      "latitude": 38.351578,
      "longitude": -8.516391,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699888917,
      "ems": null
    },
    {
      "latitude": 38.352905,
      "longitude": -8.515865,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "1347",
      "timestamp": 1699888920,
      "ems": null
    },
    {
      "latitude": 38.354202,
      "longitude": -8.5153,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699888923,
      "ems": null
    },
    {
      "latitude": 38.355412,
      "longitude": -8.514703,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888926,
      "ems": null
    },
    {
      "latitude": 38.356762,
      "longitude": -8.514046,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888929,
      "ems": null
    },
    {
      "latitude": 38.358032,
      "longitude": -8.513411,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888932,
      "ems": null
    },
    {
      "latitude": 38.359371,
      "longitude": -8.512733,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888935,
      "ems": null
    },
    {
      "latitude": 38.360672,
      "longitude": -8.512075,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699888938,
      "ems": null
    },
    {
      "latitude": 38.362061,
      "longitude": -8.511249,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699888942,
      "ems": null
    },
    {
      "latitude": 38.363205,
      "longitude": -8.510255,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699888944,
      "ems": null
    },
    {
      "latitude": 38.363373,
      "longitude": -8.510046,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 46,
      "squawk": "1347",
      "timestamp": 1699888945,
      "ems": null
    },
    {
      "latitude": 38.364349,
      "longitude": -8.508374,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 59,
      "squawk": "1347",
      "timestamp": 1699888949,
      "ems": null
    },
    {
      "latitude": 38.365097,
      "longitude": -8.506582,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 62,
      "squawk": "1347",
      "timestamp": 1699888952,
      "ems": null
    },
    {
      "latitude": 38.365841,
      "longitude": -8.50491,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 60,
      "squawk": "1347",
      "timestamp": 1699888955,
      "ems": null
    },
    {
      "latitude": 38.366638,
      "longitude": -8.503184,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 59,
      "squawk": "1347",
      "timestamp": 1699888958,
      "ems": null
    },
    {
      "latitude": 38.367424,
      "longitude": -8.501508,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 59,
      "squawk": "1347",
      "timestamp": 1699888961,
      "ems": null
    },
    {
      "latitude": 38.367935,
      "longitude": -8.500373,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 59,
      "squawk": "1347",
      "timestamp": 1699888963,
      "ems": null
    },
    {
      "latitude": 38.368679,
      "longitude": -8.49888,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 59,
      "squawk": "1347",
      "timestamp": 1699888965,
      "ems": null
    },
    {
      "latitude": 38.369659,
      "longitude": -8.49685,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "1347",
      "timestamp": 1699888969,
      "ems": null
    },
    {
      "latitude": 38.370392,
      "longitude": -8.49547,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 57,
      "squawk": "1347",
      "timestamp": 1699888971,
      "ems": null
    },
    {
      "latitude": 38.371334,
      "longitude": -8.493626,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 57,
      "squawk": "1347",
      "timestamp": 1699888975,
      "ems": null
    },
    {
      "latitude": 38.372173,
      "longitude": -8.491954,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 57,
      "squawk": "1347",
      "timestamp": 1699888978,
      "ems": null
    },
    {
      "latitude": 38.373009,
      "longitude": -8.490282,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 57,
      "squawk": "1347",
      "timestamp": 1699888981,
      "ems": null
    },
    {
      "latitude": 38.374733,
      "longitude": -8.487118,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 54,
      "squawk": "1347",
      "timestamp": 1699888987,
      "ems": null
    },
    {
      "latitude": 38.375477,
      "longitude": -8.485804,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699888989,
      "ems": null
    },
    {
      "latitude": 38.376572,
      "longitude": -8.484075,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "1347",
      "timestamp": 1699888993,
      "ems": null
    },
    {
      "latitude": 38.37748,
      "longitude": -8.482699,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 49,
      "squawk": "1347",
      "timestamp": 1699888996,
      "ems": null
    },
    {
      "latitude": 38.37854,
      "longitude": -8.481153,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 49,
      "squawk": "1347",
      "timestamp": 1699888999,
      "ems": null
    },
    {
      "latitude": 38.379013,
      "longitude": -8.480431,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 49,
      "squawk": "1347",
      "timestamp": 1699889002,
      "ems": null
    },
    {
      "latitude": 38.380188,
      "longitude": -8.478699,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "1347",
      "timestamp": 1699889004,
      "ems": null
    },
    {
      "latitude": 38.381287,
      "longitude": -8.477062,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "1347",
      "timestamp": 1699889007,
      "ems": null
    },
    {
      "latitude": 38.382248,
      "longitude": -8.475543,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "1347",
      "timestamp": 1699889011,
      "ems": null
    },
    {
      "latitude": 38.383205,
      "longitude": -8.474042,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 51,
      "squawk": "1347",
      "timestamp": 1699889014,
      "ems": null
    },
    {
      "latitude": 38.385719,
      "longitude": -8.469444,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 57,
      "squawk": "1347",
      "timestamp": 1699889023,
      "ems": null
    },
    {
      "latitude": 38.386505,
      "longitude": -8.467946,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 54,
      "squawk": "1347",
      "timestamp": 1699889026,
      "ems": null
    },
    {
      "latitude": 38.389301,
      "longitude": -8.463593,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 48,
      "squawk": "1347",
      "timestamp": 1699889035,
      "ems": null
    },
    {
      "latitude": 38.392235,
      "longitude": -8.459293,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "1347",
      "timestamp": 1699889044,
      "ems": null
    },
    {
      "latitude": 38.393188,
      "longitude": -8.457953,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 46,
      "squawk": "1347",
      "timestamp": 1699889047,
      "ems": null
    },
    {
      "latitude": 38.394196,
      "longitude": -8.456609,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 48,
      "squawk": "1347",
      "timestamp": 1699889050,
      "ems": null
    },
    {
      "latitude": 38.395168,
      "longitude": -8.455234,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 48,
      "squawk": "1347",
      "timestamp": 1699889053,
      "ems": null
    },
    {
      "latitude": 38.396099,
      "longitude": -8.4538,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 49,
      "squawk": "1347",
      "timestamp": 1699889056,
      "ems": null
    },
    {
      "latitude": 38.398846,
      "longitude": -8.4498,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "1347",
      "timestamp": 1699889065,
      "ems": null
    },
    {
      "latitude": 38.402069,
      "longitude": -8.445039,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 46,
      "squawk": "1347",
      "timestamp": 1699889074,
      "ems": null
    },
    {
      "latitude": 38.404861,
      "longitude": -8.441065,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "1347",
      "timestamp": 1699889083,
      "ems": null
    },
    {
      "latitude": 38.407425,
      "longitude": -8.436799,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 53,
      "squawk": "1347",
      "timestamp": 1699889091,
      "ems": null
    },
    {
      "latitude": 38.410252,
      "longitude": -8.432126,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 51,
      "squawk": "1347",
      "timestamp": 1699889101,
      "ems": null
    },
    {
      "latitude": 38.411182,
      "longitude": -8.430634,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 51,
      "squawk": "1347",
      "timestamp": 1699889104,
      "ems": null
    },
    {
      "latitude": 38.412186,
      "longitude": -8.429085,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 51,
      "squawk": "1347",
      "timestamp": 1699889107,
      "ems": null
    },
    {
      "latitude": 38.412998,
      "longitude": -8.427734,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889110,
      "ems": null
    },
    {
      "latitude": 38.415802,
      "longitude": -8.422991,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "1347",
      "timestamp": 1699889119,
      "ems": null
    },
    {
      "latitude": 38.418457,
      "longitude": -8.418692,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 51,
      "squawk": "1347",
      "timestamp": 1699889128,
      "ems": null
    },
    {
      "latitude": 38.421425,
      "longitude": -8.414307,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "1347",
      "timestamp": 1699889137,
      "ems": null
    },
    {
      "latitude": 38.423332,
      "longitude": -8.411499,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "1347",
      "timestamp": 1699889143,
      "ems": null
    },
    {
      "latitude": 38.424316,
      "longitude": -8.410153,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 47,
      "squawk": "1347",
      "timestamp": 1699889145,
      "ems": null
    },
    {
      "latitude": 38.425381,
      "longitude": -8.408752,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "1347",
      "timestamp": 1699889149,
      "ems": null
    },
    {
      "latitude": 38.426422,
      "longitude": -8.407407,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 44,
      "squawk": "1347",
      "timestamp": 1699889152,
      "ems": null
    },
    {
      "latitude": 38.427292,
      "longitude": -8.406332,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 45,
      "squawk": "1347",
      "timestamp": 1699889154,
      "ems": null
    },
    {
      "latitude": 38.43045,
      "longitude": -8.402212,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 46,
      "squawk": "1347",
      "timestamp": 1699889163,
      "ems": null
    },
    {
      "latitude": 38.433388,
      "longitude": -8.398254,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "1347",
      "timestamp": 1699889172,
      "ems": null
    },
    {
      "latitude": 38.436401,
      "longitude": -8.394152,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 46,
      "squawk": "1347",
      "timestamp": 1699889181,
      "ems": null
    },
    {
      "latitude": 38.439438,
      "longitude": -8.390076,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 47,
      "squawk": "1347",
      "timestamp": 1699889190,
      "ems": null
    },
    {
      "latitude": 38.442093,
      "longitude": -8.386414,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 47,
      "squawk": "1347",
      "timestamp": 1699889198,
      "ems": null
    },
    {
      "latitude": 38.444466,
      "longitude": -8.383179,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 47,
      "squawk": "1347",
      "timestamp": 1699889205,
      "ems": null
    },
    {
      "latitude": 38.447632,
      "longitude": -8.378845,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 46,
      "squawk": "1347",
      "timestamp": 1699889214,
      "ems": null
    },
    {
      "latitude": 38.450333,
      "longitude": -8.375061,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "1347",
      "timestamp": 1699889223,
      "ems": null
    },
    {
      "latitude": 38.453339,
      "longitude": -8.370328,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889232,
      "ems": null
    },
    {
      "latitude": 38.454288,
      "longitude": -8.368713,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889235,
      "ems": null
    },
    {
      "latitude": 38.455269,
      "longitude": -8.367126,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889238,
      "ems": null
    },
    {
      "latitude": 38.456245,
      "longitude": -8.36554,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889242,
      "ems": null
    },
    {
      "latitude": 38.456944,
      "longitude": -8.364319,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889244,
      "ems": null
    },
    {
      "latitude": 38.459831,
      "longitude": -8.359619,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "1347",
      "timestamp": 1699889253,
      "ems": null
    },
    {
      "latitude": 38.46254,
      "longitude": -8.355222,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889263,
      "ems": null
    },
    {
      "latitude": 38.465378,
      "longitude": -8.350565,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889271,
      "ems": null
    },
    {
      "latitude": 38.468124,
      "longitude": -8.345848,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 53,
      "squawk": "1347",
      "timestamp": 1699889280,
      "ems": null
    },
    {
      "latitude": 38.470955,
      "longitude": -8.340942,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 54,
      "squawk": "1347",
      "timestamp": 1699889290,
      "ems": null
    },
    {
      "latitude": 38.473801,
      "longitude": -8.335816,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "1347",
      "timestamp": 1699889299,
      "ems": null
    },
    {
      "latitude": 38.476273,
      "longitude": -8.331458,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 53,
      "squawk": "1347",
      "timestamp": 1699889307,
      "ems": null
    },
    {
      "latitude": 38.47929,
      "longitude": -8.326477,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 52,
      "squawk": "1347",
      "timestamp": 1699889317,
      "ems": null
    },
    {
      "latitude": 38.482174,
      "longitude": -8.321655,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 53,
      "squawk": "1347",
      "timestamp": 1699889326,
      "ems": null
    },
    {
      "latitude": 38.484829,
      "longitude": -8.317078,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 53,
      "squawk": "1347",
      "timestamp": 1699889334,
      "ems": null
    },
    {
      "latitude": 38.485886,
      "longitude": -8.315456,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 47,
      "squawk": "1347",
      "timestamp": 1699889338,
      "ems": null
    },
    {
      "latitude": 38.486984,
      "longitude": -8.314083,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "1347",
      "timestamp": 1699889341,
      "ems": null
    },
    {
      "latitude": 38.488266,
      "longitude": -8.31271,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "1347",
      "timestamp": 1699889344,
      "ems": null
    },
    {
      "latitude": 38.489365,
      "longitude": -8.311754,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699889347,
      "ems": null
    },
    {
      "latitude": 38.490601,
      "longitude": -8.31074,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699889350,
      "ems": null
    },
    {
      "latitude": 38.491718,
      "longitude": -8.309937,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699889352,
      "ems": null
    },
    {
      "latitude": 38.493347,
      "longitude": -8.308777,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699889356,
      "ems": null
    },
    {
      "latitude": 38.494884,
      "longitude": -8.307739,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889359,
      "ems": null
    },
    {
      "latitude": 38.496048,
      "longitude": -8.307007,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699889362,
      "ems": null
    },
    {
      "latitude": 38.497513,
      "longitude": -8.306142,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699889365,
      "ems": null
    },
    {
      "latitude": 38.498932,
      "longitude": -8.305298,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699889368,
      "ems": null
    },
    {
      "latitude": 38.500423,
      "longitude": -8.304443,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699889371,
      "ems": null
    },
    {
      "latitude": 38.501587,
      "longitude": -8.303711,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699889374,
      "ems": null
    },
    {
      "latitude": 38.502983,
      "longitude": -8.302917,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699889377,
      "ems": null
    },
    {
      "latitude": 38.504379,
      "longitude": -8.302081,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699889380,
      "ems": null
    },
    {
      "latitude": 38.508316,
      "longitude": -8.299634,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889389,
      "ems": null
    },
    {
      "latitude": 38.512386,
      "longitude": -8.297058,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889398,
      "ems": null
    },
    {
      "latitude": 38.515972,
      "longitude": -8.294678,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889407,
      "ems": null
    },
    {
      "latitude": 38.520401,
      "longitude": -8.291931,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889416,
      "ems": null
    },
    {
      "latitude": 38.524612,
      "longitude": -8.289185,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889425,
      "ems": null
    },
    {
      "latitude": 38.528961,
      "longitude": -8.286255,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889434,
      "ems": null
    },
    {
      "latitude": 38.531616,
      "longitude": -8.284528,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889440,
      "ems": null
    },
    {
      "latitude": 38.535645,
      "longitude": -8.28196,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889449,
      "ems": null
    },
    {
      "latitude": 38.539852,
      "longitude": -8.279297,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889458,
      "ems": null
    },
    {
      "latitude": 38.543716,
      "longitude": -8.276672,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699889467,
      "ems": null
    },
    {
      "latitude": 38.547638,
      "longitude": -8.273959,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699889477,
      "ems": null
    },
    {
      "latitude": 38.551392,
      "longitude": -8.271332,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699889485,
      "ems": null
    },
    {
      "latitude": 38.555214,
      "longitude": -8.268616,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699889494,
      "ems": null
    },
    {
      "latitude": 38.559124,
      "longitude": -8.265991,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889504,
      "ems": null
    },
    {
      "latitude": 38.562881,
      "longitude": -8.26357,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889513,
      "ems": null
    },
    {
      "latitude": 38.566528,
      "longitude": -8.261353,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889521,
      "ems": null
    },
    {
      "latitude": 38.570343,
      "longitude": -8.25885,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889530,
      "ems": null
    },
    {
      "latitude": 38.574371,
      "longitude": -8.256345,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889540,
      "ems": null
    },
    {
      "latitude": 38.578213,
      "longitude": -8.253845,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889549,
      "ems": null
    },
    {
      "latitude": 38.581329,
      "longitude": -8.251747,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889558,
      "ems": null
    },
    {
      "latitude": 38.585613,
      "longitude": -8.249023,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889567,
      "ems": null
    },
    {
      "latitude": 38.589478,
      "longitude": -8.246493,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889576,
      "ems": null
    },
    {
      "latitude": 38.593185,
      "longitude": -8.243985,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699889585,
      "ems": null
    },
    {
      "latitude": 38.596481,
      "longitude": -8.241597,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699889593,
      "ems": null
    },
    {
      "latitude": 38.600372,
      "longitude": -8.23897,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889603,
      "ems": null
    },
    {
      "latitude": 38.604,
      "longitude": -8.236694,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699889612,
      "ems": null
    },
    {
      "latitude": 38.607681,
      "longitude": -8.234436,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889621,
      "ems": null
    },
    {
      "latitude": 38.611267,
      "longitude": -8.232163,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699889630,
      "ems": null
    },
    {
      "latitude": 38.614616,
      "longitude": -8.230103,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699889639,
      "ems": null
    },
    {
      "latitude": 38.616199,
      "longitude": -8.229004,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699889642,
      "ems": null
    },
    {
      "latitude": 38.616943,
      "longitude": -8.228461,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699889644,
      "ems": null
    },
    {
      "latitude": 38.620514,
      "longitude": -8.226013,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889654,
      "ems": null
    },
    {
      "latitude": 38.624344,
      "longitude": -8.223694,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699889663,
      "ems": null
    },
    {
      "latitude": 38.626694,
      "longitude": -8.222311,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699889669,
      "ems": null
    },
    {
      "latitude": 38.62793,
      "longitude": -8.221595,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699889672,
      "ems": null
    },
    {
      "latitude": 38.62928,
      "longitude": -8.220764,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699889675,
      "ems": null
    },
    {
      "latitude": 38.633057,
      "longitude": -8.21855,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699889684,
      "ems": null
    },
    {
      "latitude": 38.636215,
      "longitude": -8.216519,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699889693,
      "ems": null
    },
    {
      "latitude": 38.640171,
      "longitude": -8.21405,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699889702,
      "ems": null
    },
    {
      "latitude": 38.642899,
      "longitude": -8.212519,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699889709,
      "ems": null
    },
    {
      "latitude": 38.644913,
      "longitude": -8.211802,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "1347",
      "timestamp": 1699889713,
      "ems": null
    },
    {
      "latitude": 38.646225,
      "longitude": -8.21167,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699889716,
      "ems": null
    },
    {
      "latitude": 38.647751,
      "longitude": -8.211623,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699889719,
      "ems": null
    },
    {
      "latitude": 38.649033,
      "longitude": -8.211564,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699889722,
      "ems": null
    },
    {
      "latitude": 38.650543,
      "longitude": -8.211504,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699889725,
      "ems": null
    },
    {
      "latitude": 38.651917,
      "longitude": -8.211385,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699889729,
      "ems": null
    },
    {
      "latitude": 38.65329,
      "longitude": -8.211266,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699889732,
      "ems": null
    },
    {
      "latitude": 38.654789,
      "longitude": -8.211182,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699889735,
      "ems": null
    },
    {
      "latitude": 38.655945,
      "longitude": -8.211086,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699889737,
      "ems": null
    },
    {
      "latitude": 38.657501,
      "longitude": -8.210967,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699889741,
      "ems": null
    },
    {
      "latitude": 38.661484,
      "longitude": -8.210669,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699889749,
      "ems": null
    },
    {
      "latitude": 38.66573,
      "longitude": -8.210327,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699889759,
      "ems": null
    },
    {
      "latitude": 38.669861,
      "longitude": -8.209951,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699889768,
      "ems": null
    },
    {
      "latitude": 38.674164,
      "longitude": -8.209772,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699889777,
      "ems": null
    },
    {
      "latitude": 38.678284,
      "longitude": -8.209534,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699889786,
      "ems": null
    },
    {
      "latitude": 38.682255,
      "longitude": -8.209229,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699889795,
      "ems": null
    },
    {
      "latitude": 38.685932,
      "longitude": -8.208984,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699889803,
      "ems": null
    },
    {
      "latitude": 38.690323,
      "longitude": -8.208817,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699889813,
      "ems": null
    },
    {
      "latitude": 38.694672,
      "longitude": -8.208638,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699889822,
      "ems": null
    },
    {
      "latitude": 38.698502,
      "longitude": -8.208496,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699889831,
      "ems": null
    },
    {
      "latitude": 38.70282,
      "longitude": -8.20834,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699889840,
      "ems": null
    },
    {
      "latitude": 38.706791,
      "longitude": -8.208008,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699889849,
      "ems": null
    },
    {
      "latitude": 38.708138,
      "longitude": -8.20813,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699889852,
      "ems": null
    },
    {
      "latitude": 38.709457,
      "longitude": -8.20822,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699889855,
      "ems": null
    },
    {
      "latitude": 38.710793,
      "longitude": -8.208374,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699889858,
      "ems": null
    },
    {
      "latitude": 38.712143,
      "longitude": -8.208496,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699889861,
      "ems": null
    },
    {
      "latitude": 38.713623,
      "longitude": -8.208697,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699889864,
      "ems": null
    },
    {
      "latitude": 38.715031,
      "longitude": -8.208862,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699889867,
      "ems": null
    },
    {
      "latitude": 38.716427,
      "longitude": -8.209106,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699889870,
      "ems": null
    },
    {
      "latitude": 38.717728,
      "longitude": -8.209351,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699889873,
      "ems": null
    },
    {
      "latitude": 38.719162,
      "longitude": -8.209713,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699889876,
      "ems": null
    },
    {
      "latitude": 38.720535,
      "longitude": -8.210011,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699889879,
      "ems": null
    },
    {
      "latitude": 38.722012,
      "longitude": -8.210388,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699889882,
      "ems": null
    },
    {
      "latitude": 38.723408,
      "longitude": -8.210693,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699889885,
      "ems": null
    },
    {
      "latitude": 38.723923,
      "longitude": -8.210788,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699889888,
      "ems": null
    },
    {
      "latitude": 38.728764,
      "longitude": -8.211731,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699889897,
      "ems": null
    },
    {
      "latitude": 38.732986,
      "longitude": -8.212399,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699889906,
      "ems": null
    },
    {
      "latitude": 38.736649,
      "longitude": -8.213176,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699889914,
      "ems": null
    },
    {
      "latitude": 38.740818,
      "longitude": -8.214355,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699889924,
      "ems": null
    },
    {
      "latitude": 38.742077,
      "longitude": -8.214722,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699889927,
      "ems": null
    },
    {
      "latitude": 38.743332,
      "longitude": -8.215146,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699889930,
      "ems": null
    },
    {
      "latitude": 38.744614,
      "longitude": -8.215564,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699889933,
      "ems": null
    },
    {
      "latitude": 38.747105,
      "longitude": -8.216309,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699889939,
      "ems": null
    },
    {
      "latitude": 38.74823,
      "longitude": -8.216699,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 344,
      "squawk": "1347",
      "timestamp": 1699889941,
      "ems": null
    },
    {
      "latitude": 38.749557,
      "longitude": -8.217237,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 343,
      "squawk": "1347",
      "timestamp": 1699889945,
      "ems": null
    },
    {
      "latitude": 38.750782,
      "longitude": -8.217773,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 341,
      "squawk": "1347",
      "timestamp": 1699889948,
      "ems": null
    },
    {
      "latitude": 38.75235,
      "longitude": -8.218431,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 340,
      "squawk": "1347",
      "timestamp": 1699889952,
      "ems": null
    },
    {
      "latitude": 38.752781,
      "longitude": -8.218628,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 340,
      "squawk": "1347",
      "timestamp": 1699889953,
      "ems": null
    },
    {
      "latitude": 38.754318,
      "longitude": -8.219326,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 340,
      "squawk": "1347",
      "timestamp": 1699889957,
      "ems": null
    },
    {
      "latitude": 38.757717,
      "longitude": -8.220825,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 341,
      "squawk": "1347",
      "timestamp": 1699889965,
      "ems": null
    },
    {
      "latitude": 38.760742,
      "longitude": -8.222168,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 340,
      "squawk": "1347",
      "timestamp": 1699889973,
      "ems": null
    },
    {
      "latitude": 38.764389,
      "longitude": -8.223864,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 340,
      "squawk": "1347",
      "timestamp": 1699889982,
      "ems": null
    },
    {
      "latitude": 38.767868,
      "longitude": -8.224998,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699889991,
      "ems": null
    },
    {
      "latitude": 38.769287,
      "longitude": -8.225237,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699889993,
      "ems": null
    },
    {
      "latitude": 38.770752,
      "longitude": -8.225464,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699889997,
      "ems": null
    },
    {
      "latitude": 38.772034,
      "longitude": -8.225595,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699890000,
      "ems": null
    },
    {
      "latitude": 38.773407,
      "longitude": -8.225775,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699890003,
      "ems": null
    },
    {
      "latitude": 38.774734,
      "longitude": -8.225894,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699890006,
      "ems": null
    },
    {
      "latitude": 38.776154,
      "longitude": -8.226074,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699890009,
      "ems": null
    },
    {
      "latitude": 38.777222,
      "longitude": -8.226257,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699890011,
      "ems": null
    },
    {
      "latitude": 38.778809,
      "longitude": -8.22655,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699890015,
      "ems": null
    },
    {
      "latitude": 38.781052,
      "longitude": -8.227207,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "1347",
      "timestamp": 1699890020,
      "ems": null
    },
    {
      "latitude": 38.782204,
      "longitude": -8.2276,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "1347",
      "timestamp": 1699890022,
      "ems": null
    },
    {
      "latitude": 38.783787,
      "longitude": -8.228088,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699890026,
      "ems": null
    },
    {
      "latitude": 38.785172,
      "longitude": -8.228521,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "1347",
      "timestamp": 1699890029,
      "ems": null
    },
    {
      "latitude": 38.786133,
      "longitude": -8.22882,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "1347",
      "timestamp": 1699890031,
      "ems": null
    },
    {
      "latitude": 38.788071,
      "longitude": -8.229309,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699890035,
      "ems": null
    },
    {
      "latitude": 38.792259,
      "longitude": -8.229858,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699890044,
      "ems": null
    },
    {
      "latitude": 38.793686,
      "longitude": -8.229835,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699890047,
      "ems": null
    },
    {
      "latitude": 38.795059,
      "longitude": -8.229655,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699890050,
      "ems": null
    },
    {
      "latitude": 38.796215,
      "longitude": -8.22937,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699890053,
      "ems": null
    },
    {
      "latitude": 38.797844,
      "longitude": -8.22876,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 20,
      "squawk": "1347",
      "timestamp": 1699890056,
      "ems": null
    },
    {
      "latitude": 38.799133,
      "longitude": -8.227983,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699890059,
      "ems": null
    },
    {
      "latitude": 38.800278,
      "longitude": -8.227148,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699890062,
      "ems": null
    },
    {
      "latitude": 38.80143,
      "longitude": -8.226074,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 35,
      "squawk": "1347",
      "timestamp": 1699890065,
      "ems": null
    },
    {
      "latitude": 38.802017,
      "longitude": -8.225535,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 37,
      "squawk": "1347",
      "timestamp": 1699890067,
      "ems": null
    },
    {
      "latitude": 38.803436,
      "longitude": -8.223983,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 41,
      "squawk": "1347",
      "timestamp": 1699890071,
      "ems": null
    },
    {
      "latitude": 38.804443,
      "longitude": -8.222849,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "1347",
      "timestamp": 1699890073,
      "ems": null
    },
    {
      "latitude": 38.805542,
      "longitude": -8.221595,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 41,
      "squawk": "1347",
      "timestamp": 1699890076,
      "ems": null
    },
    {
      "latitude": 38.806503,
      "longitude": -8.22058,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 41,
      "squawk": "1347",
      "timestamp": 1699890079,
      "ems": null
    },
    {
      "latitude": 38.807529,
      "longitude": -8.219421,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "1347",
      "timestamp": 1699890082,
      "ems": null
    },
    {
      "latitude": 38.808647,
      "longitude": -8.218262,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "1347",
      "timestamp": 1699890086,
      "ems": null
    },
    {
      "latitude": 38.809616,
      "longitude": -8.217237,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "1347",
      "timestamp": 1699890088,
      "ems": null
    },
    {
      "latitude": 38.810715,
      "longitude": -8.216042,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "1347",
      "timestamp": 1699890092,
      "ems": null
    },
    {
      "latitude": 38.811531,
      "longitude": -8.215027,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "1347",
      "timestamp": 1699890094,
      "ems": null
    },
    {
      "latitude": 38.812363,
      "longitude": -8.214012,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "1347",
      "timestamp": 1699890097,
      "ems": null
    },
    {
      "latitude": 38.815536,
      "longitude": -8.210144,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 44,
      "squawk": "1347",
      "timestamp": 1699890106,
      "ems": null
    },
    {
      "latitude": 38.818607,
      "longitude": -8.206726,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 40,
      "squawk": "1347",
      "timestamp": 1699890116,
      "ems": null
    },
    {
      "latitude": 38.821587,
      "longitude": -8.203247,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "1347",
      "timestamp": 1699890125,
      "ems": null
    },
    {
      "latitude": 38.824242,
      "longitude": -8.200317,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "1347",
      "timestamp": 1699890132,
      "ems": null
    },
    {
      "latitude": 38.827686,
      "longitude": -8.196899,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 36,
      "squawk": "1347",
      "timestamp": 1699890142,
      "ems": null
    },
    {
      "latitude": 38.82885,
      "longitude": -8.195862,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699890145,
      "ems": null
    },
    {
      "latitude": 38.830032,
      "longitude": -8.194845,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699890148,
      "ems": null
    },
    {
      "latitude": 38.830994,
      "longitude": -8.194069,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699890151,
      "ems": null
    },
    {
      "latitude": 38.832367,
      "longitude": -8.192935,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890154,
      "ems": null
    },
    {
      "latitude": 38.833549,
      "longitude": -8.191956,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699890157,
      "ems": null
    },
    {
      "latitude": 38.834518,
      "longitude": -8.191144,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699890160,
      "ems": null
    },
    {
      "latitude": 38.835571,
      "longitude": -8.190248,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699890163,
      "ems": null
    },
    {
      "latitude": 38.836899,
      "longitude": -8.189054,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699890166,
      "ems": null
    },
    {
      "latitude": 38.840195,
      "longitude": -8.186128,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 36,
      "squawk": "1347",
      "timestamp": 1699890175,
      "ems": null
    },
    {
      "latitude": 38.843418,
      "longitude": -8.183167,
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
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699890184,
      "ems": null
    },
    {
      "latitude": 38.846771,
      "longitude": -8.180359,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890193,
      "ems": null
    },
    {
      "latitude": 38.85022,
      "longitude": -8.17753,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699890202,
      "ems": null
    },
    {
      "latitude": 38.851135,
      "longitude": -8.176873,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699890205,
      "ems": null
    },
    {
      "latitude": 38.852638,
      "longitude": -8.175903,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699890208,
      "ems": null
    },
    {
      "latitude": 38.853836,
      "longitude": -8.175261,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699890211,
      "ems": null
    },
    {
      "latitude": 38.855026,
      "longitude": -8.174664,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699890214,
      "ems": null
    },
    {
      "latitude": 38.856407,
      "longitude": -8.17395,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 21,
      "squawk": "1347",
      "timestamp": 1699890217,
      "ems": null
    },
    {
      "latitude": 38.85759,
      "longitude": -8.17335,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 20,
      "squawk": "1347",
      "timestamp": 1699890220,
      "ems": null
    },
    {
      "latitude": 38.858829,
      "longitude": -8.172852,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699890223,
      "ems": null
    },
    {
      "latitude": 38.860134,
      "longitude": -8.172424,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699890226,
      "ems": null
    },
    {
      "latitude": 38.861389,
      "longitude": -8.171997,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "1347",
      "timestamp": 1699890229,
      "ems": null
    },
    {
      "latitude": 38.862366,
      "longitude": -8.171753,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699890231,
      "ems": null
    },
    {
      "latitude": 38.863907,
      "longitude": -8.17132,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699890235,
      "ems": null
    },
    {
      "latitude": 38.865208,
      "longitude": -8.171082,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699890238,
      "ems": null
    },
    {
      "latitude": 38.866508,
      "longitude": -8.170898,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699890241,
      "ems": null
    },
    {
      "latitude": 38.867954,
      "longitude": -8.170715,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699890244,
      "ems": null
    },
    {
      "latitude": 38.869263,
      "longitude": -8.170604,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699890247,
      "ems": null
    },
    {
      "latitude": 38.870499,
      "longitude": -8.170485,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699890250,
      "ems": null
    },
    {
      "latitude": 38.872055,
      "longitude": -8.170424,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699890253,
      "ems": null
    },
    {
      "latitude": 38.873428,
      "longitude": -8.170305,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699890256,
      "ems": null
    },
    {
      "latitude": 38.874893,
      "longitude": -8.170126,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699890259,
      "ems": null
    },
    {
      "latitude": 38.87624,
      "longitude": -8.169983,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699890262,
      "ems": null
    },
    {
      "latitude": 38.877544,
      "longitude": -8.169861,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699890265,
      "ems": null
    },
    {
      "latitude": 38.87915,
      "longitude": -8.169708,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1347",
      "timestamp": 1699890268,
      "ems": null
    },
    {
      "latitude": 38.883408,
      "longitude": -8.169678,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890278,
      "ems": null
    },
    {
      "latitude": 38.886017,
      "longitude": -8.169739,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699890283,
      "ems": null
    },
    {
      "latitude": 38.887573,
      "longitude": -8.169827,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699890287,
      "ems": null
    },
    {
      "latitude": 38.888809,
      "longitude": -8.169888,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890289,
      "ems": null
    },
    {
      "latitude": 38.890182,
      "longitude": -8.169947,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890292,
      "ems": null
    },
    {
      "latitude": 38.894394,
      "longitude": -8.169947,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "1347",
      "timestamp": 1699890302,
      "ems": null
    },
    {
      "latitude": 38.897095,
      "longitude": -8.169827,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "1347",
      "timestamp": 1699890308,
      "ems": null
    },
    {
      "latitude": 38.898193,
      "longitude": -8.169648,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699890311,
      "ems": null
    },
    {
      "latitude": 38.899887,
      "longitude": -8.16935,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699890314,
      "ems": null
    },
    {
      "latitude": 38.901192,
      "longitude": -8.169067,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699890317,
      "ems": null
    },
    {
      "latitude": 38.902588,
      "longitude": -8.168694,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699890320,
      "ems": null
    },
    {
      "latitude": 38.903915,
      "longitude": -8.168216,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699890323,
      "ems": null
    },
    {
      "latitude": 38.905243,
      "longitude": -8.167738,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699890326,
      "ems": null
    },
    {
      "latitude": 38.906498,
      "longitude": -8.167297,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699890329,
      "ems": null
    },
    {
      "latitude": 38.907806,
      "longitude": -8.166902,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "1347",
      "timestamp": 1699890332,
      "ems": null
    },
    {
      "latitude": 38.909134,
      "longitude": -8.166603,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699890334,
      "ems": null
    },
    {
      "latitude": 38.910553,
      "longitude": -8.166245,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "1347",
      "timestamp": 1699890338,
      "ems": null
    },
    {
      "latitude": 38.914364,
      "longitude": -8.165405,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699890346,
      "ems": null
    },
    {
      "latitude": 38.915817,
      "longitude": -8.165111,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699890350,
      "ems": null
    },
    {
      "latitude": 38.917206,
      "longitude": -8.164856,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699890353,
      "ems": null
    },
    {
      "latitude": 38.918381,
      "longitude": -8.164633,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699890355,
      "ems": null
    },
    {
      "latitude": 38.919765,
      "longitude": -8.164429,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699890358,
      "ems": null
    },
    {
      "latitude": 38.923965,
      "longitude": -8.163678,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699890368,
      "ems": null
    },
    {
      "latitude": 38.928085,
      "longitude": -8.162961,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699890377,
      "ems": null
    },
    {
      "latitude": 38.932011,
      "longitude": -8.162231,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "1347",
      "timestamp": 1699890385,
      "ems": null
    },
    {
      "latitude": 38.935364,
      "longitude": -8.161707,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "1347",
      "timestamp": 1699890394,
      "ems": null
    },
    {
      "latitude": 38.938248,
      "longitude": -8.161469,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "1347",
      "timestamp": 1699890399,
      "ems": null
    },
    {
      "latitude": 38.939877,
      "longitude": -8.161499,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 357,
      "squawk": "1347",
      "timestamp": 1699890403,
      "ems": null
    },
    {
      "latitude": 38.941086,
      "longitude": -8.161707,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699890406,
      "ems": null
    },
    {
      "latitude": 38.94239,
      "longitude": -8.161987,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699890409,
      "ems": null
    },
    {
      "latitude": 38.943878,
      "longitude": -8.162245,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699890412,
      "ems": null
    },
    {
      "latitude": 38.945324,
      "longitude": -8.162415,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699890415,
      "ems": null
    },
    {
      "latitude": 38.946487,
      "longitude": -8.162537,
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
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699890418,
      "ems": null
    },
    {
      "latitude": 38.947742,
      "longitude": -8.162659,
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
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699890421,
      "ems": null
    },
    {
      "latitude": 38.948769,
      "longitude": -8.162842,
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
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699890423,
      "ems": null
    },
    {
      "latitude": 38.950119,
      "longitude": -8.163086,
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
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699890426,
      "ems": null
    },
    {
      "latitude": 38.951653,
      "longitude": -8.163391,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "1347",
      "timestamp": 1699890430,
      "ems": null
    },
    {
      "latitude": 38.952713,
      "longitude": -8.163618,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699890432,
      "ems": null
    },
    {
      "latitude": 38.95668,
      "longitude": -8.164368,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699890442,
      "ems": null
    },
    {
      "latitude": 38.960129,
      "longitude": -8.164812,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699890450,
      "ems": null
    },
    {
      "latitude": 38.96199,
      "longitude": -8.164978,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890454,
      "ems": null
    },
    {
      "latitude": 38.9632,
      "longitude": -8.164978,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890457,
      "ems": null
    },
    {
      "latitude": 38.964432,
      "longitude": -8.164931,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699890460,
      "ems": null
    },
    {
      "latitude": 38.965942,
      "longitude": -8.164872,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699890463,
      "ems": null
    },
    {
      "latitude": 38.966969,
      "longitude": -8.164856,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 359,
      "squawk": "1347",
      "timestamp": 1699890466,
      "ems": null
    },
    {
      "latitude": 38.968414,
      "longitude": -8.164931,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 356,
      "squawk": "1347",
      "timestamp": 1699890469,
      "ems": null
    },
    {
      "latitude": 38.972324,
      "longitude": -8.165466,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699890478,
      "ems": null
    },
    {
      "latitude": 38.97345,
      "longitude": -8.165768,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 347,
      "squawk": "1347",
      "timestamp": 1699890481,
      "ems": null
    },
    {
      "latitude": 38.974838,
      "longitude": -8.166138,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699890484,
      "ems": null
    },
    {
      "latitude": 38.976151,
      "longitude": -8.166425,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 351,
      "squawk": "1347",
      "timestamp": 1699890487,
      "ems": null
    },
    {
      "latitude": 38.977722,
      "longitude": -8.166626,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699890490,
      "ems": null
    },
    {
      "latitude": 38.98196,
      "longitude": -8.16687,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890500,
      "ems": null
    },
    {
      "latitude": 38.984753,
      "longitude": -8.167053,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "1347",
      "timestamp": 1699890506,
      "ems": null
    },
    {
      "latitude": 38.986084,
      "longitude": -8.1672,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699890509,
      "ems": null
    },
    {
      "latitude": 38.990337,
      "longitude": -8.167786,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699890518,
      "ems": null
    },
    {
      "latitude": 38.994202,
      "longitude": -8.168091,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 356,
      "squawk": "1347",
      "timestamp": 1699890527,
      "ems": null
    },
    {
      "latitude": 38.998123,
      "longitude": -8.168036,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699890536,
      "ems": null
    },
    {
      "latitude": 38.999405,
      "longitude": -8.167976,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699890539,
      "ems": null
    },
    {
      "latitude": 39.000767,
      "longitude": -8.167908,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699890542,
      "ems": null
    },
    {
      "latitude": 39.002014,
      "longitude": -8.167917,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699890545,
      "ems": null
    },
    {
      "latitude": 39.003281,
      "longitude": -8.167908,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 1,
      "squawk": "1347",
      "timestamp": 1699890548,
      "ems": null
    },
    {
      "latitude": 39.004623,
      "longitude": -8.167917,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890551,
      "ems": null
    },
    {
      "latitude": 39.008606,
      "longitude": -8.168156,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890560,
      "ems": null
    },
    {
      "latitude": 39.011429,
      "longitude": -8.168274,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 356,
      "squawk": "1347",
      "timestamp": 1699890566,
      "ems": null
    },
    {
      "latitude": 39.012825,
      "longitude": -8.168457,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699890569,
      "ems": null
    },
    {
      "latitude": 39.014191,
      "longitude": -8.168694,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699890572,
      "ems": null
    },
    {
      "latitude": 39.015518,
      "longitude": -8.168872,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "1347",
      "timestamp": 1699890575,
      "ems": null
    },
    {
      "latitude": 39.016891,
      "longitude": -8.169111,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "1347",
      "timestamp": 1699890578,
      "ems": null
    },
    {
      "latitude": 39.018364,
      "longitude": -8.169434,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "1347",
      "timestamp": 1699890581,
      "ems": null
    },
    {
      "latitude": 39.019638,
      "longitude": -8.169768,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "1347",
      "timestamp": 1699890584,
      "ems": null
    },
    {
      "latitude": 39.021057,
      "longitude": -8.170305,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 342,
      "squawk": "1347",
      "timestamp": 1699890587,
      "ems": null
    },
    {
      "latitude": 39.022339,
      "longitude": -8.170843,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "1347",
      "timestamp": 1699890590,
      "ems": null
    },
    {
      "latitude": 39.023666,
      "longitude": -8.17138,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "1347",
      "timestamp": 1699890593,
      "ems": null
    },
    {
      "latitude": 39.024834,
      "longitude": -8.171936,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 340,
      "squawk": "1347",
      "timestamp": 1699890596,
      "ems": null
    },
    {
      "latitude": 39.026184,
      "longitude": -8.172546,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "1347",
      "timestamp": 1699890599,
      "ems": null
    },
    {
      "latitude": 39.02742,
      "longitude": -8.173112,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "1347",
      "timestamp": 1699890602,
      "ems": null
    },
    {
      "latitude": 39.028885,
      "longitude": -8.173828,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "1347",
      "timestamp": 1699890605,
      "ems": null
    },
    {
      "latitude": 39.030003,
      "longitude": -8.174377,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "1347",
      "timestamp": 1699890608,
      "ems": null
    },
    {
      "latitude": 39.031311,
      "longitude": -8.175022,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "1347",
      "timestamp": 1699890611,
      "ems": null
    },
    {
      "latitude": 39.032639,
      "longitude": -8.175619,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "1347",
      "timestamp": 1699890614,
      "ems": null
    },
    {
      "latitude": 39.035202,
      "longitude": -8.176754,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 344,
      "squawk": "1347",
      "timestamp": 1699890620,
      "ems": null
    },
    {
      "latitude": 39.03653,
      "longitude": -8.176992,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699890623,
      "ems": null
    },
    {
      "latitude": 39.037823,
      "longitude": -8.177063,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699890626,
      "ems": null
    },
    {
      "latitude": 39.038895,
      "longitude": -8.17688,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 7,
      "squawk": "1347",
      "timestamp": 1699890629,
      "ems": null
    },
    {
      "latitude": 39.0401,
      "longitude": -8.176575,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699890632,
      "ems": null
    },
    {
      "latitude": 39.041359,
      "longitude": -8.176147,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699890635,
      "ems": null
    },
    {
      "latitude": 39.042572,
      "longitude": -8.175781,
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
      "heading": 14,
      "squawk": "1347",
      "timestamp": 1699890638,
      "ems": null
    },
    {
      "latitude": 39.043808,
      "longitude": -8.175381,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 15,
      "squawk": "1347",
      "timestamp": 1699890642,
      "ems": null
    },
    {
      "latitude": 39.044998,
      "longitude": -8.174903,
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
      "heading": 16,
      "squawk": "1347",
      "timestamp": 1699890644,
      "ems": null
    },
    {
      "latitude": 39.046108,
      "longitude": -8.174377,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 20,
      "squawk": "1347",
      "timestamp": 1699890647,
      "ems": null
    },
    {
      "latitude": 39.047241,
      "longitude": -8.173828,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699890650,
      "ems": null
    },
    {
      "latitude": 39.048431,
      "longitude": -8.173171,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699890653,
      "ems": null
    },
    {
      "latitude": 39.049648,
      "longitude": -8.172485,
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
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699890657,
      "ems": null
    },
    {
      "latitude": 39.050674,
      "longitude": -8.171798,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699890659,
      "ems": null
    },
    {
      "latitude": 39.051743,
      "longitude": -8.171082,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699890662,
      "ems": null
    },
    {
      "latitude": 39.053009,
      "longitude": -8.170245,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699890666,
      "ems": null
    },
    {
      "latitude": 39.054161,
      "longitude": -8.169373,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699890669,
      "ems": null
    },
    {
      "latitude": 39.055325,
      "longitude": -8.168579,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699890672,
      "ems": null
    },
    {
      "latitude": 39.056488,
      "longitude": -8.167798,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699890675,
      "ems": null
    },
    {
      "latitude": 39.057587,
      "longitude": -8.167081,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699890678,
      "ems": null
    },
    {
      "latitude": 39.060913,
      "longitude": -8.164978,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699890686,
      "ems": null
    },
    {
      "latitude": 39.064495,
      "longitude": -8.162659,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699890696,
      "ems": null
    },
    {
      "latitude": 39.067795,
      "longitude": -8.160454,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699890705,
      "ems": null
    },
    {
      "latitude": 39.071247,
      "longitude": -8.158203,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699890714,
      "ems": null
    },
    {
      "latitude": 39.074753,
      "longitude": -8.155796,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699890723,
      "ems": null
    },
    {
      "latitude": 39.078186,
      "longitude": -8.15311,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699890732,
      "ems": null
    },
    {
      "latitude": 39.080521,
      "longitude": -8.151198,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890738,
      "ems": null
    },
    {
      "latitude": 39.081722,
      "longitude": -8.150208,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890741,
      "ems": null
    },
    {
      "latitude": 39.082809,
      "longitude": -8.149347,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890744,
      "ems": null
    },
    {
      "latitude": 39.083954,
      "longitude": -8.148438,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890747,
      "ems": null
    },
    {
      "latitude": 39.087399,
      "longitude": -8.145752,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699890756,
      "ems": null
    },
    {
      "latitude": 39.090683,
      "longitude": -8.143079,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890765,
      "ems": null
    },
    {
      "latitude": 39.094025,
      "longitude": -8.140511,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699890774,
      "ems": null
    },
    {
      "latitude": 39.096268,
      "longitude": -8.138959,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699890780,
      "ems": null
    },
    {
      "latitude": 39.097458,
      "longitude": -8.138183,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699890783,
      "ems": null
    },
    {
      "latitude": 39.098713,
      "longitude": -8.137451,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699890786,
      "ems": null
    },
    {
      "latitude": 39.099838,
      "longitude": -8.136749,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699890789,
      "ems": null
    },
    {
      "latitude": 39.101212,
      "longitude": -8.135973,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699890793,
      "ems": null
    },
    {
      "latitude": 39.102448,
      "longitude": -8.135197,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699890795,
      "ems": null
    },
    {
      "latitude": 39.103683,
      "longitude": -8.13448,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699890799,
      "ems": null
    },
    {
      "latitude": 39.107044,
      "longitude": -8.132202,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699890807,
      "ems": null
    },
    {
      "latitude": 39.109589,
      "longitude": -8.130301,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699890813,
      "ems": null
    },
    {
      "latitude": 39.110733,
      "longitude": -8.129346,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699890816,
      "ems": null
    },
    {
      "latitude": 39.111832,
      "longitude": -8.12851,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890819,
      "ems": null
    },
    {
      "latitude": 39.112865,
      "longitude": -8.127686,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699890822,
      "ems": null
    },
    {
      "latitude": 39.114307,
      "longitude": -8.126526,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699890826,
      "ems": null
    },
    {
      "latitude": 39.115425,
      "longitude": -8.12561,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699890829,
      "ems": null
    },
    {
      "latitude": 39.116589,
      "longitude": -8.124573,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 35,
      "squawk": "1347",
      "timestamp": 1699890832,
      "ems": null
    },
    {
      "latitude": 39.117611,
      "longitude": -8.123596,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "1347",
      "timestamp": 1699890834,
      "ems": null
    },
    {
      "latitude": 39.118778,
      "longitude": -8.122559,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 35,
      "squawk": "1347",
      "timestamp": 1699890838,
      "ems": null
    },
    {
      "latitude": 39.119892,
      "longitude": -8.121521,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 35,
      "squawk": "1347",
      "timestamp": 1699890840,
      "ems": null
    },
    {
      "latitude": 39.123367,
      "longitude": -8.118538,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699890849,
      "ems": null
    },
    {
      "latitude": 39.126114,
      "longitude": -8.11609,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699890857,
      "ems": null
    },
    {
      "latitude": 39.129044,
      "longitude": -8.113523,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699890865,
      "ems": null
    },
    {
      "latitude": 39.133026,
      "longitude": -8.11006,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699890875,
      "ems": null
    },
    {
      "latitude": 39.136791,
      "longitude": -8.107056,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890884,
      "ems": null
    },
    {
      "latitude": 39.140076,
      "longitude": -8.104327,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890893,
      "ems": null
    },
    {
      "latitude": 39.143448,
      "longitude": -8.101624,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699890902,
      "ems": null
    },
    {
      "latitude": 39.145248,
      "longitude": -8.099909,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "1347",
      "timestamp": 1699890908,
      "ems": null
    },
    {
      "latitude": 39.147591,
      "longitude": -8.097717,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 36,
      "squawk": "1347",
      "timestamp": 1699890914,
      "ems": null
    },
    {
      "latitude": 39.150013,
      "longitude": -8.095581,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699890921,
      "ems": null
    },
    {
      "latitude": 39.153225,
      "longitude": -8.093079,
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
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890930,
      "ems": null
    },
    {
      "latitude": 39.156784,
      "longitude": -8.090117,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890940,
      "ems": null
    },
    {
      "latitude": 39.160126,
      "longitude": -8.087311,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699890949,
      "ems": null
    },
    {
      "latitude": 39.163559,
      "longitude": -8.084595,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699890958,
      "ems": null
    },
    {
      "latitude": 39.16584,
      "longitude": -8.083008,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699890963,
      "ems": null
    },
    {
      "latitude": 39.167377,
      "longitude": -8.082092,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699890967,
      "ems": null
    },
    {
      "latitude": 39.16864,
      "longitude": -8.08134,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699890970,
      "ems": null
    },
    {
      "latitude": 39.169876,
      "longitude": -8.080564,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699890973,
      "ems": null
    },
    {
      "latitude": 39.171341,
      "longitude": -8.079728,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699890976,
      "ems": null
    },
    {
      "latitude": 39.17231,
      "longitude": -8.079163,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699890979,
      "ems": null
    },
    {
      "latitude": 39.173801,
      "longitude": -8.078308,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699890982,
      "ems": null
    },
    {
      "latitude": 39.175049,
      "longitude": -8.077518,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699890985,
      "ems": null
    },
    {
      "latitude": 39.178574,
      "longitude": -8.07513,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699890994,
      "ems": null
    },
    {
      "latitude": 39.181995,
      "longitude": -8.072937,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699891003,
      "ems": null
    },
    {
      "latitude": 39.184368,
      "longitude": -8.071472,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 26,
      "squawk": "1347",
      "timestamp": 1699891009,
      "ems": null
    },
    {
      "latitude": 39.188278,
      "longitude": -8.06904,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 24,
      "squawk": "1347",
      "timestamp": 1699891018,
      "ems": null
    },
    {
      "latitude": 39.191723,
      "longitude": -8.067078,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699891027,
      "ems": null
    },
    {
      "latitude": 39.19519,
      "longitude": -8.065219,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "1347",
      "timestamp": 1699891035,
      "ems": null
    },
    {
      "latitude": 39.199036,
      "longitude": -8.063128,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "1347",
      "timestamp": 1699891045,
      "ems": null
    },
    {
      "latitude": 39.203064,
      "longitude": -8.061158,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 22,
      "squawk": "1347",
      "timestamp": 1699891054,
      "ems": null
    },
    {
      "latitude": 39.206772,
      "longitude": -8.059009,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 25,
      "squawk": "1347",
      "timestamp": 1699891063,
      "ems": null
    },
    {
      "latitude": 39.210716,
      "longitude": -8.056885,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "1347",
      "timestamp": 1699891072,
      "ems": null
    },
    {
      "latitude": 39.212162,
      "longitude": -8.056763,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 358,
      "squawk": "1347",
      "timestamp": 1699891075,
      "ems": null
    },
    {
      "latitude": 39.213364,
      "longitude": -8.057098,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 343,
      "squawk": "1347",
      "timestamp": 1699891078,
      "ems": null
    },
    {
      "latitude": 39.214783,
      "longitude": -8.057875,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "1347",
      "timestamp": 1699891081,
      "ems": null
    },
    {
      "latitude": 39.215836,
      "longitude": -8.058889,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 320,
      "squawk": "1347",
      "timestamp": 1699891084,
      "ems": null
    },
    {
      "latitude": 39.216705,
      "longitude": -8.060143,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 306,
      "squawk": "1347",
      "timestamp": 1699891087,
      "ems": null
    },
    {
      "latitude": 39.217327,
      "longitude": -8.061462,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "1347",
      "timestamp": 1699891090,
      "ems": null
    },
    {
      "latitude": 39.217896,
      "longitude": -8.063009,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "1347",
      "timestamp": 1699891093,
      "ems": null
    },
    {
      "latitude": 39.218491,
      "longitude": -8.064514,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 296,
      "squawk": "1347",
      "timestamp": 1699891096,
      "ems": null
    },
    {
      "latitude": 39.219223,
      "longitude": -8.066294,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 298,
      "squawk": "1347",
      "timestamp": 1699891099,
      "ems": null
    },
    {
      "latitude": 39.219887,
      "longitude": -8.067749,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 299,
      "squawk": "1347",
      "timestamp": 1699891102,
      "ems": null
    },
    {
      "latitude": 39.220493,
      "longitude": -8.069153,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "1347",
      "timestamp": 1699891105,
      "ems": null
    },
    {
      "latitude": 39.221146,
      "longitude": -8.07074,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "1347",
      "timestamp": 1699891108,
      "ems": null
    },
    {
      "latitude": 39.221786,
      "longitude": -8.072205,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "1347",
      "timestamp": 1699891111,
      "ems": null
    },
    {
      "latitude": 39.222519,
      "longitude": -8.074056,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 296,
      "squawk": "1347",
      "timestamp": 1699891114,
      "ems": null
    },
    {
      "latitude": 39.223022,
      "longitude": -8.075369,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 297,
      "squawk": "1347",
      "timestamp": 1699891117,
      "ems": null
    },
    {
      "latitude": 39.224304,
      "longitude": -8.078176,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 300,
      "squawk": "1347",
      "timestamp": 1699891123,
      "ems": null
    },
    {
      "latitude": 39.226078,
      "longitude": -8.082092,
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
      "heading": 300,
      "squawk": "1347",
      "timestamp": 1699891132,
      "ems": null
    },
    {
      "latitude": 39.227875,
      "longitude": -8.085938,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 300,
      "squawk": "1347",
      "timestamp": 1699891141,
      "ems": null
    },
    {
      "latitude": 39.229843,
      "longitude": -8.090356,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 298,
      "squawk": "1347",
      "timestamp": 1699891150,
      "ems": null
    },
    {
      "latitude": 39.231812,
      "longitude": -8.095014,
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
      "heading": 297,
      "squawk": "1347",
      "timestamp": 1699891160,
      "ems": null
    },
    {
      "latitude": 39.232365,
      "longitude": -8.096497,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 295,
      "squawk": "1347",
      "timestamp": 1699891163,
      "ems": null
    },
    {
      "latitude": 39.232784,
      "longitude": -8.097717,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 292,
      "squawk": "1347",
      "timestamp": 1699891165,
      "ems": null
    },
    {
      "latitude": 39.233154,
      "longitude": -8.099243,
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
      "heading": 283,
      "squawk": "1347",
      "timestamp": 1699891168,
      "ems": null
    },
    {
      "latitude": 39.233322,
      "longitude": -8.101104,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "1347",
      "timestamp": 1699891172,
      "ems": null
    },
    {
      "latitude": 39.233109,
      "longitude": -8.102783,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699891175,
      "ems": null
    },
    {
      "latitude": 39.232727,
      "longitude": -8.104805,
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
      "heading": 257,
      "squawk": "1347",
      "timestamp": 1699891179,
      "ems": null
    },
    {
      "latitude": 39.232452,
      "longitude": -8.106537,
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
      "heading": 258,
      "squawk": "1347",
      "timestamp": 1699891182,
      "ems": null
    },
    {
      "latitude": 39.232224,
      "longitude": -8.108032,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "1347",
      "timestamp": 1699891185,
      "ems": null
    },
    {
      "latitude": 39.232086,
      "longitude": -8.109582,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "1347",
      "timestamp": 1699891188,
      "ems": null
    },
    {
      "latitude": 39.232086,
      "longitude": -8.111433,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 273,
      "squawk": "1347",
      "timestamp": 1699891191,
      "ems": null
    },
    {
      "latitude": 39.232315,
      "longitude": -8.112986,
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
      "heading": 282,
      "squawk": "1347",
      "timestamp": 1699891194,
      "ems": null
    },
    {
      "latitude": 39.233017,
      "longitude": -8.11615,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 287,
      "squawk": "1347",
      "timestamp": 1699891200,
      "ems": null
    },
    {
      "latitude": 39.233528,
      "longitude": -8.117554,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "1347",
      "timestamp": 1699891203,
      "ems": null
    },
    {
      "latitude": 39.234375,
      "longitude": -8.118836,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 313,
      "squawk": "1347",
      "timestamp": 1699891206,
      "ems": null
    },
    {
      "latitude": 39.235291,
      "longitude": -8.119792,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 326,
      "squawk": "1347",
      "timestamp": 1699891209,
      "ems": null
    },
    {
      "latitude": 39.236553,
      "longitude": -8.120422,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "1347",
      "timestamp": 1699891212,
      "ems": null
    },
    {
      "latitude": 39.237762,
      "longitude": -8.120687,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "1347",
      "timestamp": 1699891215,
      "ems": null
    },
    {
      "latitude": 39.239182,
      "longitude": -8.120508,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 6,
      "squawk": "1347",
      "timestamp": 1699891218,
      "ems": null
    },
    {
      "latitude": 39.240463,
      "longitude": -8.119934,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 23,
      "squawk": "1347",
      "timestamp": 1699891221,
      "ems": null
    },
    {
      "latitude": 39.241562,
      "longitude": -8.119016,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "squawk": "1347",
      "timestamp": 1699891224,
      "ems": null
    },
    {
      "latitude": 39.242466,
      "longitude": -8.11792,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 49,
      "squawk": "1347",
      "timestamp": 1699891227,
      "ems": null
    },
    {
      "latitude": 39.243118,
      "longitude": -8.116508,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 63,
      "squawk": "1347",
      "timestamp": 1699891230,
      "ems": null
    },
    {
      "latitude": 39.243443,
      "longitude": -8.115173,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 75,
      "squawk": "1347",
      "timestamp": 1699891233,
      "ems": null
    },
    {
      "latitude": 39.243488,
      "longitude": -8.113159,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 93,
      "squawk": "1347",
      "timestamp": 1699891236,
      "ems": null
    },
    {
      "latitude": 39.243164,
      "longitude": -8.111612,
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
      "heading": 107,
      "squawk": "1347",
      "timestamp": 1699891239,
      "ems": null
    },
    {
      "latitude": 39.242607,
      "longitude": -8.109924,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 117,
      "squawk": "1347",
      "timestamp": 1699891242,
      "ems": null
    },
    {
      "latitude": 39.241859,
      "longitude": -8.108521,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 124,
      "squawk": "1347",
      "timestamp": 1699891245,
      "ems": null
    },
    {
      "latitude": 39.240784,
      "longitude": -8.106895,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 133,
      "squawk": "1347",
      "timestamp": 1699891248,
      "ems": null
    },
    {
      "latitude": 39.239822,
      "longitude": -8.105761,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 140,
      "squawk": "1347",
      "timestamp": 1699891251,
      "ems": null
    },
    {
      "latitude": 39.238461,
      "longitude": -8.104858,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 156,
      "squawk": "1347",
      "timestamp": 1699891255,
      "ems": null
    },
    {
      "latitude": 39.23716,
      "longitude": -8.104492,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 172,
      "squawk": "1347",
      "timestamp": 1699891257,
      "ems": null
    },
    {
      "latitude": 39.235622,
      "longitude": -8.104492,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699891261,
      "ems": null
    },
    {
      "latitude": 39.234283,
      "longitude": -8.104567,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699891263,
      "ems": null
    },
    {
      "latitude": 39.232819,
      "longitude": -8.104627,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699891266,
      "ems": null
    },
    {
      "latitude": 39.231262,
      "longitude": -8.104686,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 180,
      "squawk": "1347",
      "timestamp": 1699891269,
      "ems": null
    },
    {
      "latitude": 39.229851,
      "longitude": -8.104614,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 178,
      "squawk": "1347",
      "timestamp": 1699891272,
      "ems": null
    },
    {
      "latitude": 39.228222,
      "longitude": -8.104675,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 181,
      "squawk": "1347",
      "timestamp": 1699891276,
      "ems": null
    },
    {
      "latitude": 39.226776,
      "longitude": -8.104736,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699891279,
      "ems": null
    },
    {
      "latitude": 39.225475,
      "longitude": -8.104858,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 184,
      "squawk": "1347",
      "timestamp": 1699891282,
      "ems": null
    },
    {
      "latitude": 39.223938,
      "longitude": -8.105042,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 185,
      "squawk": "1347",
      "timestamp": 1699891285,
      "ems": null
    },
    {
      "latitude": 39.222961,
      "longitude": -8.105164,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 182,
      "squawk": "1347",
      "timestamp": 1699891287,
      "ems": null
    },
    {
      "latitude": 39.221191,
      "longitude": -8.104925,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 170,
      "squawk": "1347",
      "timestamp": 1699891291,
      "ems": null
    },
    {
      "latitude": 39.219654,
      "longitude": -8.10437,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 161,
      "squawk": "1347",
      "timestamp": 1699891294,
      "ems": null
    },
    {
      "latitude": 39.218582,
      "longitude": -8.10373,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 155,
      "squawk": "1347",
      "timestamp": 1699891296,
      "ems": null
    },
    {
      "latitude": 39.217514,
      "longitude": -8.102966,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 147,
      "squawk": "1347",
      "timestamp": 1699891300,
      "ems": null
    },
    {
      "latitude": 39.216064,
      "longitude": -8.101701,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 143,
      "squawk": "1347",
      "timestamp": 1699891303,
      "ems": null
    },
    {
      "latitude": 39.214966,
      "longitude": -8.100447,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 137,
      "squawk": "1347",
      "timestamp": 1699891306,
      "ems": null
    },
    {
      "latitude": 39.214554,
      "longitude": -8.099969,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 136,
      "squawk": "1347",
      "timestamp": 1699891307,
      "ems": null
    },
    {
      "latitude": 39.213547,
      "longitude": -8.098416,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 128,
      "squawk": "1347",
      "timestamp": 1699891311,
      "ems": null
    },
    {
      "latitude": 39.212952,
      "longitude": -8.097222,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 123,
      "squawk": "1347",
      "timestamp": 1699891313,
      "ems": null
    },
    {
      "latitude": 39.212265,
      "longitude": -8.09549,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 114,
      "squawk": "1347",
      "timestamp": 1699891316,
      "ems": null
    },
    {
      "latitude": 39.211834,
      "longitude": -8.093994,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 108,
      "squawk": "1347",
      "timestamp": 1699891319,
      "ems": null
    },
    {
      "latitude": 39.211601,
      "longitude": -8.092102,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 94,
      "squawk": "1347",
      "timestamp": 1699891323,
      "ems": null
    },
    {
      "latitude": 39.21167,
      "longitude": -8.090714,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 83,
      "squawk": "1347",
      "timestamp": 1699891325,
      "ems": null
    },
    {
      "latitude": 39.212067,
      "longitude": -8.089111,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 67,
      "squawk": "1347",
      "timestamp": 1699891328,
      "ems": null
    },
    {
      "latitude": 39.212723,
      "longitude": -8.087729,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "1347",
      "timestamp": 1699891331,
      "ems": null
    },
    {
      "latitude": 39.213501,
      "longitude": -8.086595,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 46,
      "squawk": "1347",
      "timestamp": 1699891335,
      "ems": null
    },
    {
      "latitude": 39.214207,
      "longitude": -8.085754,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 38,
      "squawk": "1347",
      "timestamp": 1699891338,
      "ems": null
    },
    {
      "latitude": 39.215378,
      "longitude": -8.084683,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 34,
      "squawk": "1347",
      "timestamp": 1699891340,
      "ems": null
    },
    {
      "latitude": 39.215881,
      "longitude": -8.084266,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 33,
      "squawk": "1347",
      "timestamp": 1699891343,
      "ems": null
    },
    {
      "latitude": 39.217281,
      "longitude": -8.08313,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 30,
      "squawk": "1347",
      "timestamp": 1699891346,
      "ems": null
    },
    {
      "latitude": 39.218353,
      "longitude": -8.082355,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699891349,
      "ems": null
    },
    {
      "latitude": 39.219543,
      "longitude": -8.081459,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699891353,
      "ems": null
    },
    {
      "latitude": 39.220634,
      "longitude": -8.08075,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699891356,
      "ems": null
    },
    {
      "latitude": 39.221466,
      "longitude": -8.080146,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699891359,
      "ems": null
    },
    {
      "latitude": 39.222336,
      "longitude": -8.079608,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "1347",
      "timestamp": 1699891362,
      "ems": null
    },
    {
      "latitude": 39.223564,
      "longitude": -8.078674,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699891365,
      "ems": null
    },
    {
      "latitude": 39.224545,
      "longitude": -8.078003,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699891368,
      "ems": null
    },
    {
      "latitude": 39.225521,
      "longitude": -8.077332,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699891371,
      "ems": null
    },
    {
      "latitude": 39.228268,
      "longitude": -8.075256,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 31,
      "squawk": "1347",
      "timestamp": 1699891380,
      "ems": null
    },
    {
      "latitude": 39.230827,
      "longitude": -8.073303,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699891389,
      "ems": null
    },
    {
      "latitude": 39.231621,
      "longitude": -8.072632,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699891392,
      "ems": null
    },
    {
      "latitude": 39.2341,
      "longitude": -8.070652,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699891401,
      "ems": null
    },
    {
      "latitude": 39.236618,
      "longitude": -8.068563,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 32,
      "squawk": "1347",
      "timestamp": 1699891410,
      "ems": null
    },
    {
      "latitude": 39.239273,
      "longitude": -8.066592,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 28,
      "squawk": "1347",
      "timestamp": 1699891419,
      "ems": null
    },
    {
      "latitude": 39.24115,
      "longitude": -8.065278,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 29,
      "squawk": "1347",
      "timestamp": 1699891425,
      "ems": null
    },
    {
      "latitude": 39.243816,
      "longitude": -8.062988,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 36,
      "squawk": "1347",
      "timestamp": 1699891434,
      "ems": null
    },
    {
      "latitude": 39.244747,
      "longitude": -8.062134,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 38,
      "squawk": "1347",
      "timestamp": 1699891437,
      "ems": null
    },
    {
      "latitude": 39.245537,
      "longitude": -8.061096,
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
      "heading": 48,
      "squawk": "1347",
      "timestamp": 1699891440,
      "ems": null
    },
    {
      "latitude": 39.246094,
      "longitude": -8.059964,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 62,
      "squawk": "1347",
      "timestamp": 1699891443,
      "ems": null
    },
    {
      "latitude": 39.246552,
      "longitude": -8.058472,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 73,
      "squawk": "1347",
      "timestamp": 1699891447,
      "ems": null
    },
    {
      "latitude": 39.246655,
      "longitude": -8.057129,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 85,
      "squawk": "1347",
      "timestamp": 1699891449,
      "ems": null
    },
    {
      "latitude": 39.246609,
      "longitude": -8.055664,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 94,
      "squawk": "1347",
      "timestamp": 1699891453,
      "ems": null
    },
    {
      "latitude": 39.24646,
      "longitude": -8.054292,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 98,
      "squawk": "1347",
      "timestamp": 1699891456,
      "ems": null
    },
    {
      "latitude": 39.246231,
      "longitude": -8.052799,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 104,
      "squawk": "1347",
      "timestamp": 1699891459,
      "ems": null
    },
    {
      "latitude": 39.245956,
      "longitude": -8.051636,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 109,
      "squawk": "1347",
      "timestamp": 1699891462,
      "ems": null
    },
    {
      "latitude": 39.245537,
      "longitude": -8.050354,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 112,
      "squawk": "1347",
      "timestamp": 1699891464,
      "ems": null
    },
    {
      "latitude": 39.245132,
      "longitude": -8.049157,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 114,
      "squawk": "1347",
      "timestamp": 1699891468,
      "ems": null
    },
    {
      "latitude": 39.244675,
      "longitude": -8.047963,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 116,
      "squawk": "1347",
      "timestamp": 1699891471,
      "ems": null
    },
    {
      "latitude": 39.244141,
      "longitude": -8.046692,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 118,
      "squawk": "1347",
      "timestamp": 1699891474,
      "ems": null
    },
    {
      "latitude": 39.243629,
      "longitude": -8.045532,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 120,
      "squawk": "1347",
      "timestamp": 1699891477,
      "ems": null
    },
    {
      "latitude": 39.243073,
      "longitude": -8.044559,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 128,
      "squawk": "1347",
      "timestamp": 1699891480,
      "ems": null
    },
    {
      "latitude": 39.242325,
      "longitude": -8.043701,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 142,
      "squawk": "1347",
      "timestamp": 1699891483,
      "ems": null
    },
    {
      "latitude": 39.241489,
      "longitude": -8.043091,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 154,
      "squawk": "1347",
      "timestamp": 1699891486,
      "ems": null
    },
    {
      "latitude": 39.240742,
      "longitude": -8.042786,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 165,
      "squawk": "1347",
      "timestamp": 1699891489,
      "ems": null
    },
    {
      "latitude": 39.239731,
      "longitude": -8.042649,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 178,
      "squawk": "1347",
      "timestamp": 1699891492,
      "ems": null
    },
    {
      "latitude": 39.238861,
      "longitude": -8.042829,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 192,
      "squawk": "1347",
      "timestamp": 1699891495,
      "ems": null
    },
    {
      "latitude": 39.238045,
      "longitude": -8.043213,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699891498,
      "ems": null
    },
    {
      "latitude": 39.237122,
      "longitude": -8.043604,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 195,
      "squawk": "1347",
      "timestamp": 1699891501,
      "ems": null
    },
    {
      "latitude": 39.236229,
      "longitude": -8.043884,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 194,
      "squawk": "1347",
      "timestamp": 1699891504,
      "ems": null
    },
    {
      "latitude": 39.235428,
      "longitude": -8.044261,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 198,
      "squawk": "1347",
      "timestamp": 1699891507,
      "ems": null
    },
    {
      "latitude": 39.23455,
      "longitude": -8.044617,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 199,
      "squawk": "1347",
      "timestamp": 1699891510,
      "ems": null
    },
    {
      "latitude": 39.233761,
      "longitude": -8.045044,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 201,
      "squawk": "1347",
      "timestamp": 1699891513,
      "ems": null
    },
    {
      "latitude": 39.233017,
      "longitude": -8.04541,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "1347",
      "timestamp": 1699891516,
      "ems": null
    },
    {
      "latitude": 39.232315,
      "longitude": -8.045874,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 206,
      "squawk": "1347",
      "timestamp": 1699891519,
      "ems": null
    },
    {
      "latitude": 39.231434,
      "longitude": -8.046387,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 203,
      "squawk": "1347",
      "timestamp": 1699891522,
      "ems": null
    },
    {
      "latitude": 39.22998,
      "longitude": -8.047127,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 201,
      "squawk": "1347",
      "timestamp": 1699891528,
      "ems": null
    },
    {
      "latitude": 39.22934,
      "longitude": -8.047485,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 202,
      "squawk": "1347",
      "timestamp": 1699891530,
      "ems": null
    },
    {
      "latitude": 39.228779,
      "longitude": -8.047791,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699891533,
      "ems": null
    },
    {
      "latitude": 39.227783,
      "longitude": -8.048441,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699891537,
      "ems": null
    },
    {
      "latitude": 39.22728,
      "longitude": -8.048739,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 204,
      "squawk": "1347",
      "timestamp": 1699891539,
      "ems": null
    }
  ]
};
