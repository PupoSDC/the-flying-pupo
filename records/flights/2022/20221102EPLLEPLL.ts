import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20221102EPLLEPLL",
    callsign: "BNI8I",
    name: "CP1/02 - Nav to EPWR",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 10, 2, 12, 0).getTime(),
    arrival: new Date(2022, 10, 2, 15, 35).getTime(),
    singleEnginePistonTime: 215,
    multiEnginePistonTime: 0,
    picTime: 0,
    dualTime: 215,
    landings: {
      day: 4,
      night: 0,
    },
  },
  aircraft: {
    model: {
      code: "P208",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "3D3720",
      registration: "SP-HSI",
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
  track: [
    {
      "latitude": 51.720795,
      "longitude": 19.393467,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 248,
      "squawk": "0",
      "timestamp": 1667391248,
      "ems": null
    },
    {
      "latitude": 51.720421,
      "longitude": 19.391861,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 250,
      "squawk": "0",
      "timestamp": 1667391252,
      "ems": null
    },
    {
      "latitude": 51.719604,
      "longitude": 19.388271,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 249,
      "squawk": "0",
      "timestamp": 1667391261,
      "ems": null
    },
    {
      "latitude": 51.718884,
      "longitude": 19.385223,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 248,
      "squawk": "0",
      "timestamp": 1667391269,
      "ems": null
    },
    {
      "latitude": 51.718323,
      "longitude": 19.382853,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 248,
      "squawk": "0",
      "timestamp": 1667391275,
      "ems": null
    },
    {
      "latitude": 51.717674,
      "longitude": 19.380569,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 245,
      "squawk": "0",
      "timestamp": 1667391280,
      "ems": null
    },
    {
      "latitude": 51.717041,
      "longitude": 19.377878,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 250,
      "squawk": "0",
      "timestamp": 1667391287,
      "ems": null
    },
    {
      "latitude": 51.716583,
      "longitude": 19.375429,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 253,
      "squawk": "0",
      "timestamp": 1667391293,
      "ems": null
    },
    {
      "latitude": 51.716045,
      "longitude": 19.372864,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667391299,
      "ems": null
    },
    {
      "latitude": 51.715805,
      "longitude": 19.371569,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667391302,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.370117,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667391305,
      "ems": null
    },
    {
      "latitude": 51.715252,
      "longitude": 19.368896,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667391308,
      "ems": null
    },
    {
      "latitude": 51.715019,
      "longitude": 19.367523,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667391311,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.36615,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667391314,
      "ems": null
    },
    {
      "latitude": 51.714882,
      "longitude": 19.364548,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667391317,
      "ems": null
    },
    {
      "latitude": 51.715118,
      "longitude": 19.363255,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667391320,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.361994,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1667391323,
      "ems": null
    },
    {
      "latitude": 51.71608,
      "longitude": 19.360731,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1667391326,
      "ems": null
    },
    {
      "latitude": 51.716698,
      "longitude": 19.359665,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667391329,
      "ems": null
    },
    {
      "latitude": 51.717316,
      "longitude": 19.35895,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667391332,
      "ems": null
    },
    {
      "latitude": 51.718369,
      "longitude": 19.357985,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1667391335,
      "ems": null
    },
    {
      "latitude": 51.719257,
      "longitude": 19.357376,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1667391338,
      "ems": null
    },
    {
      "latitude": 51.720234,
      "longitude": 19.356918,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667391341,
      "ems": null
    },
    {
      "latitude": 51.721115,
      "longitude": 19.356573,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1667391344,
      "ems": null
    },
    {
      "latitude": 51.722141,
      "longitude": 19.356155,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1667391347,
      "ems": null
    },
    {
      "latitude": 51.723213,
      "longitude": 19.355774,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1667391350,
      "ems": null
    },
    {
      "latitude": 51.724228,
      "longitude": 19.355387,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667391353,
      "ems": null
    },
    {
      "latitude": 51.725189,
      "longitude": 19.354866,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667391356,
      "ems": null
    },
    {
      "latitude": 51.726192,
      "longitude": 19.354401,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667391359,
      "ems": null
    },
    {
      "latitude": 51.727077,
      "longitude": 19.354019,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1667391362,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 19.352936,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1667391368,
      "ems": null
    },
    {
      "latitude": 51.730042,
      "longitude": 19.352417,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1667391371,
      "ems": null
    },
    {
      "latitude": 51.731186,
      "longitude": 19.351675,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1667391375,
      "ems": null
    },
    {
      "latitude": 51.733246,
      "longitude": 19.350859,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1667391380,
      "ems": null
    },
    {
      "latitude": 51.735443,
      "longitude": 19.349968,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667391386,
      "ems": null
    },
    {
      "latitude": 51.737823,
      "longitude": 19.349003,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1667391393,
      "ems": null
    },
    {
      "latitude": 51.740158,
      "longitude": 19.347963,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1667391399,
      "ems": null
    },
    {
      "latitude": 51.742401,
      "longitude": 19.346552,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1667391405,
      "ems": null
    },
    {
      "latitude": 51.743408,
      "longitude": 19.345587,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667391408,
      "ems": null
    },
    {
      "latitude": 51.744278,
      "longitude": 19.344549,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667391410,
      "ems": null
    },
    {
      "latitude": 51.745281,
      "longitude": 19.343262,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667391414,
      "ems": null
    },
    {
      "latitude": 51.746212,
      "longitude": 19.342041,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667391416,
      "ems": null
    },
    {
      "latitude": 51.74707,
      "longitude": 19.340912,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667391419,
      "ems": null
    },
    {
      "latitude": 51.748119,
      "longitude": 19.3396,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667391423,
      "ems": null
    },
    {
      "latitude": 51.749004,
      "longitude": 19.338608,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667391426,
      "ems": null
    },
    {
      "latitude": 51.749588,
      "longitude": 19.337942,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667391427,
      "ems": null
    },
    {
      "latitude": 51.750916,
      "longitude": 19.336456,
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
      "squawk": "7000",
      "timestamp": 1667391432,
      "ems": null
    },
    {
      "latitude": 51.752869,
      "longitude": 19.334488,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667391437,
      "ems": null
    },
    {
      "latitude": 51.753937,
      "longitude": 19.333496,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667391440,
      "ems": null
    },
    {
      "latitude": 51.755009,
      "longitude": 19.332504,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667391443,
      "ems": null
    },
    {
      "latitude": 51.75618,
      "longitude": 19.331484,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1667391447,
      "ems": null
    },
    {
      "latitude": 51.757198,
      "longitude": 19.33075,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1667391449,
      "ems": null
    },
    {
      "latitude": 51.75824,
      "longitude": 19.329851,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667391452,
      "ems": null
    },
    {
      "latitude": 51.760361,
      "longitude": 19.327621,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667391459,
      "ems": null
    },
    {
      "latitude": 51.762505,
      "longitude": 19.325485,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667391465,
      "ems": null
    },
    {
      "latitude": 51.764599,
      "longitude": 19.323425,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667391471,
      "ems": null
    },
    {
      "latitude": 51.766739,
      "longitude": 19.321289,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667391476,
      "ems": null
    },
    {
      "latitude": 51.767899,
      "longitude": 19.320126,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667391480,
      "ems": null
    },
    {
      "latitude": 51.770233,
      "longitude": 19.31778,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667391486,
      "ems": null
    },
    {
      "latitude": 51.772476,
      "longitude": 19.315449,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667391492,
      "ems": null
    },
    {
      "latitude": 51.774765,
      "longitude": 19.312925,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667391498,
      "ems": null
    },
    {
      "latitude": 51.777008,
      "longitude": 19.310253,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667391504,
      "ems": null
    },
    {
      "latitude": 51.779263,
      "longitude": 19.307632,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667391510,
      "ems": null
    },
    {
      "latitude": 51.781586,
      "longitude": 19.305132,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667391516,
      "ems": null
    },
    {
      "latitude": 51.783966,
      "longitude": 19.30275,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667391522,
      "ems": null
    },
    {
      "latitude": 51.786572,
      "longitude": 19.300308,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667391528,
      "ems": null
    },
    {
      "latitude": 51.787903,
      "longitude": 19.299044,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667391531,
      "ems": null
    },
    {
      "latitude": 51.789177,
      "longitude": 19.297867,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667391534,
      "ems": null
    },
    {
      "latitude": 51.790527,
      "longitude": 19.296646,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667391537,
      "ems": null
    },
    {
      "latitude": 51.791794,
      "longitude": 19.295555,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667391540,
      "ems": null
    },
    {
      "latitude": 51.793182,
      "longitude": 19.294357,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1667391543,
      "ems": null
    },
    {
      "latitude": 51.795509,
      "longitude": 19.292145,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667391549,
      "ems": null
    },
    {
      "latitude": 51.797791,
      "longitude": 19.289703,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667391555,
      "ems": null
    },
    {
      "latitude": 51.800072,
      "longitude": 19.287491,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667391561,
      "ems": null
    },
    {
      "latitude": 51.802353,
      "longitude": 19.285202,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667391567,
      "ems": null
    },
    {
      "latitude": 51.804703,
      "longitude": 19.282713,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667391573,
      "ems": null
    },
    {
      "latitude": 51.805618,
      "longitude": 19.281525,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667391576,
      "ems": null
    },
    {
      "latitude": 51.806671,
      "longitude": 19.279818,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1667391579,
      "ems": null
    },
    {
      "latitude": 51.807449,
      "longitude": 19.278185,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1667391582,
      "ems": null
    },
    {
      "latitude": 51.808125,
      "longitude": 19.276505,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667391585,
      "ems": null
    },
    {
      "latitude": 51.808731,
      "longitude": 19.274622,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667391588,
      "ems": null
    },
    {
      "latitude": 51.809143,
      "longitude": 19.272692,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1667391591,
      "ems": null
    },
    {
      "latitude": 51.809383,
      "longitude": 19.270859,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1667391594,
      "ems": null
    },
    {
      "latitude": 51.809555,
      "longitude": 19.268831,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667391597,
      "ems": null
    },
    {
      "latitude": 51.809521,
      "longitude": 19.266739,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667391600,
      "ems": null
    },
    {
      "latitude": 51.809334,
      "longitude": 19.264908,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667391603,
      "ems": null
    },
    {
      "latitude": 51.80896,
      "longitude": 19.263042,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667391606,
      "ems": null
    },
    {
      "latitude": 51.808365,
      "longitude": 19.261187,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667391609,
      "ems": null
    },
    {
      "latitude": 51.807861,
      "longitude": 19.259701,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391612,
      "ems": null
    },
    {
      "latitude": 51.807285,
      "longitude": 19.258041,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391615,
      "ems": null
    },
    {
      "latitude": 51.806683,
      "longitude": 19.256363,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391618,
      "ems": null
    },
    {
      "latitude": 51.806122,
      "longitude": 19.254837,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391621,
      "ems": null
    },
    {
      "latitude": 51.805519,
      "longitude": 19.253235,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391624,
      "ems": null
    },
    {
      "latitude": 51.805054,
      "longitude": 19.251938,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391627,
      "ems": null
    },
    {
      "latitude": 51.80452,
      "longitude": 19.250347,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391630,
      "ems": null
    },
    {
      "latitude": 51.80397,
      "longitude": 19.248789,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391633,
      "ems": null
    },
    {
      "latitude": 51.802864,
      "longitude": 19.245682,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391639,
      "ems": null
    },
    {
      "latitude": 51.801842,
      "longitude": 19.242783,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391645,
      "ems": null
    },
    {
      "latitude": 51.80072,
      "longitude": 19.239658,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391651,
      "ems": null
    },
    {
      "latitude": 51.799652,
      "longitude": 19.236679,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391657,
      "ems": null
    },
    {
      "latitude": 51.798477,
      "longitude": 19.233572,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391663,
      "ems": null
    },
    {
      "latitude": 51.797417,
      "longitude": 19.230652,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391669,
      "ems": null
    },
    {
      "latitude": 51.795319,
      "longitude": 19.225332,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667391680,
      "ems": null
    },
    {
      "latitude": 51.794067,
      "longitude": 19.222183,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667391685,
      "ems": null
    },
    {
      "latitude": 51.792755,
      "longitude": 19.218725,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391692,
      "ems": null
    },
    {
      "latitude": 51.791565,
      "longitude": 19.215607,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667391698,
      "ems": null
    },
    {
      "latitude": 51.79034,
      "longitude": 19.212341,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667391703,
      "ems": null
    },
    {
      "latitude": 51.789139,
      "longitude": 19.209002,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391710,
      "ems": null
    },
    {
      "latitude": 51.787827,
      "longitude": 19.205627,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667391716,
      "ems": null
    },
    {
      "latitude": 51.786247,
      "longitude": 19.201202,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391724,
      "ems": null
    },
    {
      "latitude": 51.785175,
      "longitude": 19.198151,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391729,
      "ems": null
    },
    {
      "latitude": 51.784103,
      "longitude": 19.194946,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391736,
      "ems": null
    },
    {
      "latitude": 51.783508,
      "longitude": 19.192966,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667391739,
      "ems": null
    },
    {
      "latitude": 51.783035,
      "longitude": 19.191513,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667391742,
      "ems": null
    },
    {
      "latitude": 51.781906,
      "longitude": 19.188068,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391748,
      "ems": null
    },
    {
      "latitude": 51.780807,
      "longitude": 19.184801,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667391754,
      "ems": null
    },
    {
      "latitude": 51.779709,
      "longitude": 19.181387,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391760,
      "ems": null
    },
    {
      "latitude": 51.778519,
      "longitude": 19.177933,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391766,
      "ems": null
    },
    {
      "latitude": 51.777328,
      "longitude": 19.174631,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391772,
      "ems": null
    },
    {
      "latitude": 51.775497,
      "longitude": 19.169659,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391781,
      "ems": null
    },
    {
      "latitude": 51.774467,
      "longitude": 19.16687,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391787,
      "ems": null
    },
    {
      "latitude": 51.773396,
      "longitude": 19.163818,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391793,
      "ems": null
    },
    {
      "latitude": 51.772293,
      "longitude": 19.160675,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391799,
      "ems": null
    },
    {
      "latitude": 51.771194,
      "longitude": 19.157558,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667391805,
      "ems": null
    },
    {
      "latitude": 51.770004,
      "longitude": 19.154291,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667391811,
      "ems": null
    },
    {
      "latitude": 51.768883,
      "longitude": 19.151077,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667391817,
      "ems": null
    },
    {
      "latitude": 51.767807,
      "longitude": 19.147907,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667391823,
      "ems": null
    },
    {
      "latitude": 51.766788,
      "longitude": 19.144592,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667391829,
      "ems": null
    },
    {
      "latitude": 51.765808,
      "longitude": 19.141312,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391835,
      "ems": null
    },
    {
      "latitude": 51.765289,
      "longitude": 19.139593,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391838,
      "ems": null
    },
    {
      "latitude": 51.764236,
      "longitude": 19.136179,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391844,
      "ems": null
    },
    {
      "latitude": 51.763809,
      "longitude": 19.134674,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667391847,
      "ems": null
    },
    {
      "latitude": 51.763321,
      "longitude": 19.132765,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667391850,
      "ems": null
    },
    {
      "latitude": 51.762405,
      "longitude": 19.129425,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667391856,
      "ems": null
    },
    {
      "latitude": 51.761295,
      "longitude": 19.126129,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391862,
      "ems": null
    },
    {
      "latitude": 51.760223,
      "longitude": 19.122925,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391868,
      "ems": null
    },
    {
      "latitude": 51.759109,
      "longitude": 19.119625,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391874,
      "ems": null
    },
    {
      "latitude": 51.758549,
      "longitude": 19.117813,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391877,
      "ems": null
    },
    {
      "latitude": 51.757416,
      "longitude": 19.114132,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391884,
      "ems": null
    },
    {
      "latitude": 51.756359,
      "longitude": 19.110641,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391889,
      "ems": null
    },
    {
      "latitude": 51.755241,
      "longitude": 19.107056,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667391895,
      "ems": null
    },
    {
      "latitude": 51.753983,
      "longitude": 19.10285,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667391902,
      "ems": null
    },
    {
      "latitude": 51.752914,
      "longitude": 19.099274,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391907,
      "ems": null
    },
    {
      "latitude": 51.751648,
      "longitude": 19.095129,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667391913,
      "ems": null
    },
    {
      "latitude": 51.750446,
      "longitude": 19.09111,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391920,
      "ems": null
    },
    {
      "latitude": 51.749283,
      "longitude": 19.087067,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391925,
      "ems": null
    },
    {
      "latitude": 51.748074,
      "longitude": 19.083023,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667391931,
      "ems": null
    },
    {
      "latitude": 51.746841,
      "longitude": 19.078798,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667391938,
      "ems": null
    },
    {
      "latitude": 51.745373,
      "longitude": 19.075012,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1667391944,
      "ems": null
    },
    {
      "latitude": 51.744534,
      "longitude": 19.073181,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667391947,
      "ems": null
    },
    {
      "latitude": 51.743603,
      "longitude": 19.071579,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667391950,
      "ems": null
    },
    {
      "latitude": 51.742535,
      "longitude": 19.070053,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1667391953,
      "ems": null
    },
    {
      "latitude": 51.741508,
      "longitude": 19.06868,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1667391956,
      "ems": null
    },
    {
      "latitude": 51.740753,
      "longitude": 19.067663,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1667391958,
      "ems": null
    },
    {
      "latitude": 51.739563,
      "longitude": 19.066105,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1667391962,
      "ems": null
    },
    {
      "latitude": 51.738647,
      "longitude": 19.064917,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1667391964,
      "ems": null
    },
    {
      "latitude": 51.737553,
      "longitude": 19.063492,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1667391968,
      "ems": null
    },
    {
      "latitude": 51.736526,
      "longitude": 19.062042,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1667391971,
      "ems": null
    },
    {
      "latitude": 51.735672,
      "longitude": 19.060907,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1667391974,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 19.059372,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667391977,
      "ems": null
    },
    {
      "latitude": 51.733082,
      "longitude": 19.056396,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667391983,
      "ems": null
    },
    {
      "latitude": 51.732384,
      "longitude": 19.054947,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667391986,
      "ems": null
    },
    {
      "latitude": 51.731686,
      "longitude": 19.053268,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667391989,
      "ems": null
    },
    {
      "latitude": 51.731174,
      "longitude": 19.051743,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667391992,
      "ems": null
    },
    {
      "latitude": 51.730755,
      "longitude": 19.050217,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667391995,
      "ems": null
    },
    {
      "latitude": 51.730381,
      "longitude": 19.048462,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667391998,
      "ems": null
    },
    {
      "latitude": 51.730179,
      "longitude": 19.046879,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667392001,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.045246,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667392004,
      "ems": null
    },
    {
      "latitude": 51.730042,
      "longitude": 19.043686,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667392007,
      "ems": null
    },
    {
      "latitude": 51.730057,
      "longitude": 19.04213,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667392010,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.040421,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667392013,
      "ems": null
    },
    {
      "latitude": 51.730103,
      "longitude": 19.038925,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667392016,
      "ems": null
    },
    {
      "latitude": 51.730133,
      "longitude": 19.037525,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667392019,
      "ems": null
    },
    {
      "latitude": 51.730133,
      "longitude": 19.036114,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667392022,
      "ems": null
    },
    {
      "latitude": 51.730179,
      "longitude": 19.034555,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667392025,
      "ems": null
    },
    {
      "latitude": 51.730133,
      "longitude": 19.032848,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667392028,
      "ems": null
    },
    {
      "latitude": 51.730103,
      "longitude": 19.031525,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667392031,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.028395,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667392037,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.025723,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667392043,
      "ems": null
    },
    {
      "latitude": 51.730103,
      "longitude": 19.022598,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667392049,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.021269,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667392052,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 19.018076,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392058,
      "ems": null
    },
    {
      "latitude": 51.729813,
      "longitude": 19.014959,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392064,
      "ems": null
    },
    {
      "latitude": 51.729683,
      "longitude": 19.011765,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392070,
      "ems": null
    },
    {
      "latitude": 51.729591,
      "longitude": 19.010162,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392073,
      "ems": null
    },
    {
      "latitude": 51.7295,
      "longitude": 19.00856,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392076,
      "ems": null
    },
    {
      "latitude": 51.729355,
      "longitude": 19.005383,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667392082,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.002043,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667392088,
      "ems": null
    },
    {
      "latitude": 51.728939,
      "longitude": 18.998642,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667392094,
      "ems": null
    },
    {
      "latitude": 51.728714,
      "longitude": 18.995436,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392100,
      "ems": null
    },
    {
      "latitude": 51.728474,
      "longitude": 18.992081,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667392106,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 18.988495,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667392112,
      "ems": null
    },
    {
      "latitude": 51.727962,
      "longitude": 18.985214,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667392118,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 18.981552,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392124,
      "ems": null
    },
    {
      "latitude": 51.727634,
      "longitude": 18.977585,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392131,
      "ems": null
    },
    {
      "latitude": 51.727402,
      "longitude": 18.973923,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667392136,
      "ems": null
    },
    {
      "latitude": 51.727158,
      "longitude": 18.9699,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667392143,
      "ems": null
    },
    {
      "latitude": 51.726883,
      "longitude": 18.966263,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667392148,
      "ems": null
    },
    {
      "latitude": 51.726654,
      "longitude": 18.961884,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392155,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 18.957596,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667392161,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 18.953791,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667392166,
      "ems": null
    },
    {
      "latitude": 51.726147,
      "longitude": 18.949738,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667392173,
      "ems": null
    },
    {
      "latitude": 51.72596,
      "longitude": 18.945923,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667392179,
      "ems": null
    },
    {
      "latitude": 51.725822,
      "longitude": 18.942413,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667392185,
      "ems": null
    },
    {
      "latitude": 51.725922,
      "longitude": 18.940504,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667392187,
      "ems": null
    },
    {
      "latitude": 51.726013,
      "longitude": 18.938648,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667392190,
      "ems": null
    },
    {
      "latitude": 51.725922,
      "longitude": 18.934937,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667392196,
      "ems": null
    },
    {
      "latitude": 51.72559,
      "longitude": 18.930893,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667392203,
      "ems": null
    },
    {
      "latitude": 51.725327,
      "longitude": 18.926994,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667392209,
      "ems": null
    },
    {
      "latitude": 51.725357,
      "longitude": 18.925247,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667392212,
      "ems": null
    },
    {
      "latitude": 51.72583,
      "longitude": 18.921427,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667392218,
      "ems": null
    },
    {
      "latitude": 51.726147,
      "longitude": 18.919907,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1667392221,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 18.917923,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1667392224,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 18.916527,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667392227,
      "ems": null
    },
    {
      "latitude": 51.72789,
      "longitude": 18.914968,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1667392230,
      "ems": null
    },
    {
      "latitude": 51.728287,
      "longitude": 18.913727,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667392233,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 18.912048,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1667392236,
      "ems": null
    },
    {
      "latitude": 51.729355,
      "longitude": 18.910589,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1667392239,
      "ems": null
    },
    {
      "latitude": 51.729904,
      "longitude": 18.909103,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1667392242,
      "ems": null
    },
    {
      "latitude": 51.730431,
      "longitude": 18.907776,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667392245,
      "ems": null
    },
    {
      "latitude": 51.730957,
      "longitude": 18.906208,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1667392248,
      "ems": null
    },
    {
      "latitude": 51.731461,
      "longitude": 18.904799,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1667392251,
      "ems": null
    },
    {
      "latitude": 51.732376,
      "longitude": 18.902052,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1667392257,
      "ems": null
    },
    {
      "latitude": 51.733337,
      "longitude": 18.89938,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667392263,
      "ems": null
    },
    {
      "latitude": 51.734436,
      "longitude": 18.896559,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667392269,
      "ems": null
    },
    {
      "latitude": 51.735672,
      "longitude": 18.893738,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1667392275,
      "ems": null
    },
    {
      "latitude": 51.736313,
      "longitude": 18.892328,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1667392278,
      "ems": null
    },
    {
      "latitude": 51.7369,
      "longitude": 18.891068,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1667392281,
      "ems": null
    },
    {
      "latitude": 51.737553,
      "longitude": 18.889771,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1667392284,
      "ems": null
    },
    {
      "latitude": 51.738251,
      "longitude": 18.888474,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1667392287,
      "ems": null
    },
    {
      "latitude": 51.739334,
      "longitude": 18.885647,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667392293,
      "ems": null
    },
    {
      "latitude": 51.739788,
      "longitude": 18.883896,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667392296,
      "ems": null
    },
    {
      "latitude": 51.74025,
      "longitude": 18.882233,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667392299,
      "ems": null
    },
    {
      "latitude": 51.740707,
      "longitude": 18.880598,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667392302,
      "ems": null
    },
    {
      "latitude": 51.741165,
      "longitude": 18.878965,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667392305,
      "ems": null
    },
    {
      "latitude": 51.741604,
      "longitude": 18.877411,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1667392308,
      "ems": null
    },
    {
      "latitude": 51.742069,
      "longitude": 18.875809,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667392311,
      "ems": null
    },
    {
      "latitude": 51.742584,
      "longitude": 18.874289,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1667392314,
      "ems": null
    },
    {
      "latitude": 51.743137,
      "longitude": 18.872681,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667392317,
      "ems": null
    },
    {
      "latitude": 51.744507,
      "longitude": 18.869835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1667392323,
      "ems": null
    },
    {
      "latitude": 51.745285,
      "longitude": 18.8685,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667392326,
      "ems": null
    },
    {
      "latitude": 51.746063,
      "longitude": 18.867237,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392329,
      "ems": null
    },
    {
      "latitude": 51.74691,
      "longitude": 18.865967,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392332,
      "ems": null
    },
    {
      "latitude": 51.7477,
      "longitude": 18.864822,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392335,
      "ems": null
    },
    {
      "latitude": 51.748581,
      "longitude": 18.863451,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392338,
      "ems": null
    },
    {
      "latitude": 51.749451,
      "longitude": 18.861967,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1667392341,
      "ems": null
    },
    {
      "latitude": 51.750183,
      "longitude": 18.860407,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1667392344,
      "ems": null
    },
    {
      "latitude": 51.750916,
      "longitude": 18.858923,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1667392347,
      "ems": null
    },
    {
      "latitude": 51.75174,
      "longitude": 18.857439,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1667392350,
      "ems": null
    },
    {
      "latitude": 51.753296,
      "longitude": 18.854839,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392356,
      "ems": null
    },
    {
      "latitude": 51.7551,
      "longitude": 18.851929,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392362,
      "ems": null
    },
    {
      "latitude": 51.756733,
      "longitude": 18.849411,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392368,
      "ems": null
    },
    {
      "latitude": 51.75771,
      "longitude": 18.847809,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667392372,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 18.844967,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667392377,
      "ems": null
    },
    {
      "latitude": 51.761154,
      "longitude": 18.842087,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392383,
      "ems": null
    },
    {
      "latitude": 51.762085,
      "longitude": 18.840885,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392386,
      "ems": null
    },
    {
      "latitude": 51.763046,
      "longitude": 18.839771,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392389,
      "ems": null
    },
    {
      "latitude": 51.764145,
      "longitude": 18.838509,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667392393,
      "ems": null
    },
    {
      "latitude": 51.765064,
      "longitude": 18.837433,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667392395,
      "ems": null
    },
    {
      "latitude": 51.766182,
      "longitude": 18.836136,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392399,
      "ems": null
    },
    {
      "latitude": 51.767113,
      "longitude": 18.834991,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392401,
      "ems": null
    },
    {
      "latitude": 51.768135,
      "longitude": 18.833771,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392404,
      "ems": null
    },
    {
      "latitude": 51.769226,
      "longitude": 18.832497,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392407,
      "ems": null
    },
    {
      "latitude": 51.770325,
      "longitude": 18.83116,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392411,
      "ems": null
    },
    {
      "latitude": 51.772385,
      "longitude": 18.828859,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392416,
      "ems": null
    },
    {
      "latitude": 51.774513,
      "longitude": 18.826294,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392422,
      "ems": null
    },
    {
      "latitude": 51.77655,
      "longitude": 18.823885,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392428,
      "ems": null
    },
    {
      "latitude": 51.778519,
      "longitude": 18.821335,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392434,
      "ems": null
    },
    {
      "latitude": 51.780659,
      "longitude": 18.818665,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392441,
      "ems": null
    },
    {
      "latitude": 51.782661,
      "longitude": 18.816147,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392447,
      "ems": null
    },
    {
      "latitude": 51.784698,
      "longitude": 18.813494,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392453,
      "ems": null
    },
    {
      "latitude": 51.786758,
      "longitude": 18.810959,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392459,
      "ems": null
    },
    {
      "latitude": 51.788727,
      "longitude": 18.808519,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392465,
      "ems": null
    },
    {
      "latitude": 51.790668,
      "longitude": 18.806,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392470,
      "ems": null
    },
    {
      "latitude": 51.792618,
      "longitude": 18.803619,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392476,
      "ems": null
    },
    {
      "latitude": 51.794907,
      "longitude": 18.800873,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667392483,
      "ems": null
    },
    {
      "latitude": 51.797138,
      "longitude": 18.798294,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392489,
      "ems": null
    },
    {
      "latitude": 51.799255,
      "longitude": 18.795677,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392495,
      "ems": null
    },
    {
      "latitude": 51.801468,
      "longitude": 18.79303,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392501,
      "ems": null
    },
    {
      "latitude": 51.803558,
      "longitude": 18.790407,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392507,
      "ems": null
    },
    {
      "latitude": 51.805706,
      "longitude": 18.787842,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392513,
      "ems": null
    },
    {
      "latitude": 51.807755,
      "longitude": 18.785248,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392519,
      "ems": null
    },
    {
      "latitude": 51.809849,
      "longitude": 18.78273,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392525,
      "ems": null
    },
    {
      "latitude": 51.811943,
      "longitude": 18.78006,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392531,
      "ems": null
    },
    {
      "latitude": 51.814453,
      "longitude": 18.776897,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392538,
      "ems": null
    },
    {
      "latitude": 51.816971,
      "longitude": 18.773804,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392545,
      "ems": null
    },
    {
      "latitude": 51.819031,
      "longitude": 18.77133,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392551,
      "ems": null
    },
    {
      "latitude": 51.821411,
      "longitude": 18.768063,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667392558,
      "ems": null
    },
    {
      "latitude": 51.822277,
      "longitude": 18.766708,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392561,
      "ems": null
    },
    {
      "latitude": 51.822697,
      "longitude": 18.766022,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392562,
      "ems": null
    },
    {
      "latitude": 51.823627,
      "longitude": 18.764496,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392566,
      "ems": null
    },
    {
      "latitude": 51.824978,
      "longitude": 18.762436,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392570,
      "ems": null
    },
    {
      "latitude": 51.825851,
      "longitude": 18.761011,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392573,
      "ems": null
    },
    {
      "latitude": 51.826767,
      "longitude": 18.759453,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667392576,
      "ems": null
    },
    {
      "latitude": 51.827682,
      "longitude": 18.757967,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392579,
      "ems": null
    },
    {
      "latitude": 51.828655,
      "longitude": 18.756485,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392582,
      "ems": null
    },
    {
      "latitude": 51.830704,
      "longitude": 18.753586,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667392588,
      "ems": null
    },
    {
      "latitude": 51.832611,
      "longitude": 18.750839,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667392594,
      "ems": null
    },
    {
      "latitude": 51.834335,
      "longitude": 18.748169,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667392600,
      "ems": null
    },
    {
      "latitude": 51.836105,
      "longitude": 18.745571,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392606,
      "ems": null
    },
    {
      "latitude": 51.837872,
      "longitude": 18.742676,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667392612,
      "ems": null
    },
    {
      "latitude": 51.839676,
      "longitude": 18.739632,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667392618,
      "ems": null
    },
    {
      "latitude": 51.8405,
      "longitude": 18.738222,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1667392621,
      "ems": null
    },
    {
      "latitude": 51.842285,
      "longitude": 18.735327,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392627,
      "ems": null
    },
    {
      "latitude": 51.844109,
      "longitude": 18.732681,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667392633,
      "ems": null
    },
    {
      "latitude": 51.845993,
      "longitude": 18.730131,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667392639,
      "ems": null
    },
    {
      "latitude": 51.847786,
      "longitude": 18.727417,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392645,
      "ems": null
    },
    {
      "latitude": 51.849472,
      "longitude": 18.724787,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667392651,
      "ems": null
    },
    {
      "latitude": 51.85112,
      "longitude": 18.72204,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392657,
      "ems": null
    },
    {
      "latitude": 51.853046,
      "longitude": 18.718948,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392663,
      "ems": null
    },
    {
      "latitude": 51.855148,
      "longitude": 18.715803,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667392670,
      "ems": null
    },
    {
      "latitude": 51.856911,
      "longitude": 18.713303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667392675,
      "ems": null
    },
    {
      "latitude": 51.859131,
      "longitude": 18.710089,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667392682,
      "ems": null
    },
    {
      "latitude": 51.861053,
      "longitude": 18.707193,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667392688,
      "ems": null
    },
    {
      "latitude": 51.86301,
      "longitude": 18.704224,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667392693,
      "ems": null
    },
    {
      "latitude": 51.865036,
      "longitude": 18.701105,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392699,
      "ems": null
    },
    {
      "latitude": 51.867107,
      "longitude": 18.697815,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667392706,
      "ems": null
    },
    {
      "latitude": 51.869064,
      "longitude": 18.694647,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667392712,
      "ems": null
    },
    {
      "latitude": 51.870987,
      "longitude": 18.691605,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667392718,
      "ems": null
    },
    {
      "latitude": 51.872772,
      "longitude": 18.688412,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1667392724,
      "ems": null
    },
    {
      "latitude": 51.873672,
      "longitude": 18.686752,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1667392727,
      "ems": null
    },
    {
      "latitude": 51.875198,
      "longitude": 18.684107,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667392733,
      "ems": null
    },
    {
      "latitude": 51.877258,
      "longitude": 18.680618,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667392739,
      "ems": null
    },
    {
      "latitude": 51.879181,
      "longitude": 18.677425,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1667392745,
      "ems": null
    },
    {
      "latitude": 51.881027,
      "longitude": 18.674393,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392751,
      "ems": null
    },
    {
      "latitude": 51.882004,
      "longitude": 18.672943,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392754,
      "ems": null
    },
    {
      "latitude": 51.882889,
      "longitude": 18.671646,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667392757,
      "ems": null
    },
    {
      "latitude": 51.884766,
      "longitude": 18.668816,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667392763,
      "ems": null
    },
    {
      "latitude": 51.886703,
      "longitude": 18.665924,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667392769,
      "ems": null
    },
    {
      "latitude": 51.888802,
      "longitude": 18.662949,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667392775,
      "ems": null
    },
    {
      "latitude": 51.889755,
      "longitude": 18.661615,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667392778,
      "ems": null
    },
    {
      "latitude": 51.891861,
      "longitude": 18.658794,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392784,
      "ems": null
    },
    {
      "latitude": 51.8936,
      "longitude": 18.656387,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1667392790,
      "ems": null
    },
    {
      "latitude": 51.895737,
      "longitude": 18.653608,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392796,
      "ems": null
    },
    {
      "latitude": 51.89772,
      "longitude": 18.651123,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392802,
      "ems": null
    },
    {
      "latitude": 51.899872,
      "longitude": 18.648453,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392808,
      "ems": null
    },
    {
      "latitude": 51.901836,
      "longitude": 18.646074,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392814,
      "ems": null
    },
    {
      "latitude": 51.903992,
      "longitude": 18.643417,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392820,
      "ems": null
    },
    {
      "latitude": 51.906097,
      "longitude": 18.640747,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392826,
      "ems": null
    },
    {
      "latitude": 51.908295,
      "longitude": 18.638077,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392832,
      "ems": null
    },
    {
      "latitude": 51.910492,
      "longitude": 18.635244,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1667392838,
      "ems": null
    },
    {
      "latitude": 51.912216,
      "longitude": 18.633047,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392844,
      "ems": null
    },
    {
      "latitude": 51.914589,
      "longitude": 18.630066,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667392850,
      "ems": null
    },
    {
      "latitude": 51.916683,
      "longitude": 18.627241,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392857,
      "ems": null
    },
    {
      "latitude": 51.918777,
      "longitude": 18.624649,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392863,
      "ems": null
    },
    {
      "latitude": 51.920689,
      "longitude": 18.622454,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667392868,
      "ems": null
    },
    {
      "latitude": 51.922783,
      "longitude": 18.6201,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667392874,
      "ems": null
    },
    {
      "latitude": 51.924923,
      "longitude": 18.617666,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667392880,
      "ems": null
    },
    {
      "latitude": 51.925964,
      "longitude": 18.616562,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667392883,
      "ems": null
    },
    {
      "latitude": 51.927979,
      "longitude": 18.61412,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392890,
      "ems": null
    },
    {
      "latitude": 51.930325,
      "longitude": 18.611389,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667392895,
      "ems": null
    },
    {
      "latitude": 51.932465,
      "longitude": 18.609009,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667392902,
      "ems": null
    },
    {
      "latitude": 51.934708,
      "longitude": 18.606415,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667392908,
      "ems": null
    },
    {
      "latitude": 51.936722,
      "longitude": 18.604202,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667392914,
      "ems": null
    },
    {
      "latitude": 51.938889,
      "longitude": 18.601736,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667392919,
      "ems": null
    },
    {
      "latitude": 51.941071,
      "longitude": 18.599243,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392925,
      "ems": null
    },
    {
      "latitude": 51.943314,
      "longitude": 18.596558,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392932,
      "ems": null
    },
    {
      "latitude": 51.945282,
      "longitude": 18.593979,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392937,
      "ems": null
    },
    {
      "latitude": 51.947433,
      "longitude": 18.591232,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667392944,
      "ems": null
    },
    {
      "latitude": 51.949722,
      "longitude": 18.588486,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667392950,
      "ems": null
    },
    {
      "latitude": 51.951736,
      "longitude": 18.585968,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667392956,
      "ems": null
    },
    {
      "latitude": 51.953796,
      "longitude": 18.583145,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1667392962,
      "ems": null
    },
    {
      "latitude": 51.955601,
      "longitude": 18.580549,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667392967,
      "ems": null
    },
    {
      "latitude": 51.958675,
      "longitude": 18.576548,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667392976,
      "ems": null
    },
    {
      "latitude": 51.960983,
      "longitude": 18.574066,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667392982,
      "ems": null
    },
    {
      "latitude": 51.962082,
      "longitude": 18.572998,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667392985,
      "ems": null
    },
    {
      "latitude": 51.963425,
      "longitude": 18.57176,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667392988,
      "ems": null
    },
    {
      "latitude": 51.964542,
      "longitude": 18.570662,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667392991,
      "ems": null
    },
    {
      "latitude": 51.965706,
      "longitude": 18.569563,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667392994,
      "ems": null
    },
    {
      "latitude": 51.967056,
      "longitude": 18.568386,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667392998,
      "ems": null
    },
    {
      "latitude": 51.968033,
      "longitude": 18.567444,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667393000,
      "ems": null
    },
    {
      "latitude": 51.970367,
      "longitude": 18.565216,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667393006,
      "ems": null
    },
    {
      "latitude": 51.972748,
      "longitude": 18.562698,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667393013,
      "ems": null
    },
    {
      "latitude": 51.974945,
      "longitude": 18.56041,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667393019,
      "ems": null
    },
    {
      "latitude": 51.977142,
      "longitude": 18.558044,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667393025,
      "ems": null
    },
    {
      "latitude": 51.979252,
      "longitude": 18.555908,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667393030,
      "ems": null
    },
    {
      "latitude": 51.981628,
      "longitude": 18.553543,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667393037,
      "ems": null
    },
    {
      "latitude": 51.983906,
      "longitude": 18.551279,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667393043,
      "ems": null
    },
    {
      "latitude": 51.986206,
      "longitude": 18.548889,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667393049,
      "ems": null
    },
    {
      "latitude": 51.988358,
      "longitude": 18.546524,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667393055,
      "ems": null
    },
    {
      "latitude": 51.990646,
      "longitude": 18.544235,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1667393061,
      "ems": null
    },
    {
      "latitude": 51.992985,
      "longitude": 18.541861,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667393067,
      "ems": null
    },
    {
      "latitude": 51.995312,
      "longitude": 18.539351,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1667393073,
      "ems": null
    },
    {
      "latitude": 51.997547,
      "longitude": 18.536997,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667393079,
      "ems": null
    },
    {
      "latitude": 51.999733,
      "longitude": 18.534563,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667393085,
      "ems": null
    },
    {
      "latitude": 52.001827,
      "longitude": 18.532131,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667393091,
      "ems": null
    },
    {
      "latitude": 52.004295,
      "longitude": 18.529226,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667393097,
      "ems": null
    },
    {
      "latitude": 52.005203,
      "longitude": 18.527908,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1667393101,
      "ems": null
    },
    {
      "latitude": 52.006027,
      "longitude": 18.526382,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1667393103,
      "ems": null
    },
    {
      "latitude": 52.006672,
      "longitude": 18.524754,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667393106,
      "ems": null
    },
    {
      "latitude": 52.007172,
      "longitude": 18.522949,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1667393109,
      "ems": null
    },
    {
      "latitude": 52.007492,
      "longitude": 18.521271,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667393113,
      "ems": null
    },
    {
      "latitude": 52.007694,
      "longitude": 18.51926,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1667393115,
      "ems": null
    },
    {
      "latitude": 52.007786,
      "longitude": 18.517691,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667393118,
      "ems": null
    },
    {
      "latitude": 52.007786,
      "longitude": 18.515102,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393121,
      "ems": null
    },
    {
      "latitude": 52.007786,
      "longitude": 18.514082,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393123,
      "ems": null
    },
    {
      "latitude": 52.007721,
      "longitude": 18.511429,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393127,
      "ems": null
    },
    {
      "latitude": 52.007694,
      "longitude": 18.509531,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393130,
      "ems": null
    },
    {
      "latitude": 52.007629,
      "longitude": 18.507843,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393133,
      "ems": null
    },
    {
      "latitude": 52.007584,
      "longitude": 18.506012,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393136,
      "ems": null
    },
    {
      "latitude": 52.007462,
      "longitude": 18.504038,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393139,
      "ems": null
    },
    {
      "latitude": 52.00737,
      "longitude": 18.502232,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393142,
      "ems": null
    },
    {
      "latitude": 52.007172,
      "longitude": 18.500366,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667393145,
      "ems": null
    },
    {
      "latitude": 52.006943,
      "longitude": 18.498459,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667393148,
      "ems": null
    },
    {
      "latitude": 52.00676,
      "longitude": 18.496475,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667393151,
      "ems": null
    },
    {
      "latitude": 52.006531,
      "longitude": 18.494385,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667393154,
      "ems": null
    },
    {
      "latitude": 52.006393,
      "longitude": 18.492508,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667393157,
      "ems": null
    },
    {
      "latitude": 52.006165,
      "longitude": 18.490524,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667393160,
      "ems": null
    },
    {
      "latitude": 52.00589,
      "longitude": 18.488541,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667393163,
      "ems": null
    },
    {
      "latitude": 52.005615,
      "longitude": 18.486633,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667393166,
      "ems": null
    },
    {
      "latitude": 52.005432,
      "longitude": 18.485184,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667393169,
      "ems": null
    },
    {
      "latitude": 52.005039,
      "longitude": 18.482849,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667393172,
      "ems": null
    },
    {
      "latitude": 52.004528,
      "longitude": 18.479004,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667393178,
      "ems": null
    },
    {
      "latitude": 52.00425,
      "longitude": 18.477041,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667393181,
      "ems": null
    },
    {
      "latitude": 52.003876,
      "longitude": 18.473358,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667393187,
      "ems": null
    },
    {
      "latitude": 52.003693,
      "longitude": 18.471392,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393190,
      "ems": null
    },
    {
      "latitude": 52.003601,
      "longitude": 18.469391,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393194,
      "ems": null
    },
    {
      "latitude": 52.003601,
      "longitude": 18.467484,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667393197,
      "ems": null
    },
    {
      "latitude": 52.003555,
      "longitude": 18.465881,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667393199,
      "ems": null
    },
    {
      "latitude": 52.003597,
      "longitude": 18.464016,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393202,
      "ems": null
    },
    {
      "latitude": 52.003601,
      "longitude": 18.462219,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393205,
      "ems": null
    },
    {
      "latitude": 52.003643,
      "longitude": 18.460327,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393209,
      "ems": null
    },
    {
      "latitude": 52.003693,
      "longitude": 18.458523,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393212,
      "ems": null
    },
    {
      "latitude": 52.003784,
      "longitude": 18.457108,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667393214,
      "ems": null
    },
    {
      "latitude": 52.00383,
      "longitude": 18.455276,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393217,
      "ems": null
    },
    {
      "latitude": 52.003925,
      "longitude": 18.453186,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667393221,
      "ems": null
    },
    {
      "latitude": 52.004013,
      "longitude": 18.451462,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667393224,
      "ems": null
    },
    {
      "latitude": 52.004108,
      "longitude": 18.447927,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393229,
      "ems": null
    },
    {
      "latitude": 52.004108,
      "longitude": 18.444319,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667393236,
      "ems": null
    },
    {
      "latitude": 52.004063,
      "longitude": 18.440317,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393242,
      "ems": null
    },
    {
      "latitude": 52.003971,
      "longitude": 18.438511,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393245,
      "ems": null
    },
    {
      "latitude": 52.003876,
      "longitude": 18.436966,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393247,
      "ems": null
    },
    {
      "latitude": 52.003784,
      "longitude": 18.435059,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393250,
      "ems": null
    },
    {
      "latitude": 52.003693,
      "longitude": 18.433096,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667393254,
      "ems": null
    },
    {
      "latitude": 52.003551,
      "longitude": 18.431135,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393257,
      "ems": null
    },
    {
      "latitude": 52.003506,
      "longitude": 18.429409,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393260,
      "ems": null
    },
    {
      "latitude": 52.003372,
      "longitude": 18.425598,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393266,
      "ems": null
    },
    {
      "latitude": 52.003227,
      "longitude": 18.42156,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667393272,
      "ems": null
    },
    {
      "latitude": 52.003189,
      "longitude": 18.417587,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393278,
      "ems": null
    },
    {
      "latitude": 52.003189,
      "longitude": 18.415451,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393281,
      "ems": null
    },
    {
      "latitude": 52.003227,
      "longitude": 18.413635,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393284,
      "ems": null
    },
    {
      "latitude": 52.003227,
      "longitude": 18.411438,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393287,
      "ems": null
    },
    {
      "latitude": 52.003189,
      "longitude": 18.407211,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667393293,
      "ems": null
    },
    {
      "latitude": 52.003178,
      "longitude": 18.403198,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393299,
      "ems": null
    },
    {
      "latitude": 52.003189,
      "longitude": 18.399048,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393305,
      "ems": null
    },
    {
      "latitude": 52.003235,
      "longitude": 18.395004,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393311,
      "ems": null
    },
    {
      "latitude": 52.003235,
      "longitude": 18.391037,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393317,
      "ems": null
    },
    {
      "latitude": 52.003281,
      "longitude": 18.386993,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393323,
      "ems": null
    },
    {
      "latitude": 52.003319,
      "longitude": 18.383108,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393329,
      "ems": null
    },
    {
      "latitude": 52.00341,
      "longitude": 18.37895,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393335,
      "ems": null
    },
    {
      "latitude": 52.003464,
      "longitude": 18.374863,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393341,
      "ems": null
    },
    {
      "latitude": 52.00341,
      "longitude": 18.370789,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667393347,
      "ems": null
    },
    {
      "latitude": 52.003326,
      "longitude": 18.366547,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393353,
      "ems": null
    },
    {
      "latitude": 52.003235,
      "longitude": 18.364563,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393356,
      "ems": null
    },
    {
      "latitude": 52.002995,
      "longitude": 18.362471,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667393359,
      "ems": null
    },
    {
      "latitude": 52.002777,
      "longitude": 18.360519,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667393362,
      "ems": null
    },
    {
      "latitude": 52.002621,
      "longitude": 18.358625,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667393365,
      "ems": null
    },
    {
      "latitude": 52.00248,
      "longitude": 18.356663,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393368,
      "ems": null
    },
    {
      "latitude": 52.002228,
      "longitude": 18.352737,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393374,
      "ems": null
    },
    {
      "latitude": 52.00206,
      "longitude": 18.348894,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667393381,
      "ems": null
    },
    {
      "latitude": 52.001877,
      "longitude": 18.345442,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393386,
      "ems": null
    },
    {
      "latitude": 52.001816,
      "longitude": 18.343048,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393389,
      "ems": null
    },
    {
      "latitude": 52.001724,
      "longitude": 18.340988,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393393,
      "ems": null
    },
    {
      "latitude": 52.001595,
      "longitude": 18.337358,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393398,
      "ems": null
    },
    {
      "latitude": 52.00145,
      "longitude": 18.333435,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393404,
      "ems": null
    },
    {
      "latitude": 52.001316,
      "longitude": 18.329433,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393411,
      "ems": null
    },
    {
      "latitude": 52.001129,
      "longitude": 18.325424,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393417,
      "ems": null
    },
    {
      "latitude": 52.000946,
      "longitude": 18.321533,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393423,
      "ems": null
    },
    {
      "latitude": 52.000809,
      "longitude": 18.31749,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393429,
      "ems": null
    },
    {
      "latitude": 52.000626,
      "longitude": 18.313828,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393435,
      "ems": null
    },
    {
      "latitude": 52.000488,
      "longitude": 18.309631,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393441,
      "ems": null
    },
    {
      "latitude": 52.000305,
      "longitude": 18.305893,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393447,
      "ems": null
    },
    {
      "latitude": 52.000248,
      "longitude": 18.301731,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667393453,
      "ems": null
    },
    {
      "latitude": 52.000259,
      "longitude": 18.297958,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393459,
      "ems": null
    },
    {
      "latitude": 52.000294,
      "longitude": 18.295925,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393462,
      "ems": null
    },
    {
      "latitude": 52.000385,
      "longitude": 18.292236,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393468,
      "ems": null
    },
    {
      "latitude": 52.000397,
      "longitude": 18.290176,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393471,
      "ems": null
    },
    {
      "latitude": 52.000385,
      "longitude": 18.288313,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393474,
      "ems": null
    },
    {
      "latitude": 52.000443,
      "longitude": 18.283386,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393482,
      "ems": null
    },
    {
      "latitude": 52.000526,
      "longitude": 18.278347,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393490,
      "ems": null
    },
    {
      "latitude": 52.000526,
      "longitude": 18.273325,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393498,
      "ems": null
    },
    {
      "latitude": 52.000385,
      "longitude": 18.270657,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393502,
      "ems": null
    },
    {
      "latitude": 52.000107,
      "longitude": 18.267595,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667393506,
      "ems": null
    },
    {
      "latitude": 51.99992,
      "longitude": 18.264927,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667393510,
      "ems": null
    },
    {
      "latitude": 51.99971,
      "longitude": 18.262939,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667393513,
      "ems": null
    },
    {
      "latitude": 51.999546,
      "longitude": 18.261003,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667393516,
      "ems": null
    },
    {
      "latitude": 51.999435,
      "longitude": 18.258972,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667393519,
      "ems": null
    },
    {
      "latitude": 51.999298,
      "longitude": 18.257065,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393522,
      "ems": null
    },
    {
      "latitude": 51.998989,
      "longitude": 18.253157,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667393528,
      "ems": null
    },
    {
      "latitude": 51.998711,
      "longitude": 18.24939,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667393534,
      "ems": null
    },
    {
      "latitude": 51.998291,
      "longitude": 18.244839,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393540,
      "ems": null
    },
    {
      "latitude": 51.998016,
      "longitude": 18.240891,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667393546,
      "ems": null
    },
    {
      "latitude": 51.997833,
      "longitude": 18.239059,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667393549,
      "ems": null
    },
    {
      "latitude": 51.997501,
      "longitude": 18.236834,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667393552,
      "ems": null
    },
    {
      "latitude": 51.997219,
      "longitude": 18.234793,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667393555,
      "ems": null
    },
    {
      "latitude": 51.996754,
      "longitude": 18.230791,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667393562,
      "ems": null
    },
    {
      "latitude": 51.996277,
      "longitude": 18.227081,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667393567,
      "ems": null
    },
    {
      "latitude": 51.99601,
      "longitude": 18.225298,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667393570,
      "ems": null
    },
    {
      "latitude": 51.995731,
      "longitude": 18.223337,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667393573,
      "ems": null
    },
    {
      "latitude": 51.995403,
      "longitude": 18.219412,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667393580,
      "ems": null
    },
    {
      "latitude": 51.995087,
      "longitude": 18.21579,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667393585,
      "ems": null
    },
    {
      "latitude": 51.994629,
      "longitude": 18.211746,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667393592,
      "ems": null
    },
    {
      "latitude": 51.994354,
      "longitude": 18.208084,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393598,
      "ems": null
    },
    {
      "latitude": 51.99424,
      "longitude": 18.206308,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393600,
      "ems": null
    },
    {
      "latitude": 51.994125,
      "longitude": 18.204498,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393604,
      "ems": null
    },
    {
      "latitude": 51.993916,
      "longitude": 18.2005,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393610,
      "ems": null
    },
    {
      "latitude": 51.993774,
      "longitude": 18.196812,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393616,
      "ems": null
    },
    {
      "latitude": 51.993713,
      "longitude": 18.195038,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393619,
      "ems": null
    },
    {
      "latitude": 51.993587,
      "longitude": 18.191633,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393625,
      "ems": null
    },
    {
      "latitude": 51.993587,
      "longitude": 18.189514,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393628,
      "ems": null
    },
    {
      "latitude": 51.993622,
      "longitude": 18.187714,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393631,
      "ems": null
    },
    {
      "latitude": 51.993637,
      "longitude": 18.185904,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393634,
      "ems": null
    },
    {
      "latitude": 51.993576,
      "longitude": 18.182297,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393640,
      "ems": null
    },
    {
      "latitude": 51.993439,
      "longitude": 18.178558,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667393646,
      "ems": null
    },
    {
      "latitude": 51.99345,
      "longitude": 18.174839,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667393652,
      "ems": null
    },
    {
      "latitude": 51.993404,
      "longitude": 18.170837,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393658,
      "ems": null
    },
    {
      "latitude": 51.993355,
      "longitude": 18.168955,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667393661,
      "ems": null
    },
    {
      "latitude": 51.993217,
      "longitude": 18.166992,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393664,
      "ems": null
    },
    {
      "latitude": 51.993076,
      "longitude": 18.16511,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667393667,
      "ems": null
    },
    {
      "latitude": 51.992844,
      "longitude": 18.161697,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667393673,
      "ems": null
    },
    {
      "latitude": 51.992661,
      "longitude": 18.159637,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667393676,
      "ems": null
    },
    {
      "latitude": 51.992424,
      "longitude": 18.15781,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667393679,
      "ems": null
    },
    {
      "latitude": 51.992157,
      "longitude": 18.155823,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667393682,
      "ems": null
    },
    {
      "latitude": 51.991974,
      "longitude": 18.154221,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667393685,
      "ems": null
    },
    {
      "latitude": 51.991745,
      "longitude": 18.152313,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667393688,
      "ems": null
    },
    {
      "latitude": 51.991562,
      "longitude": 18.148422,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667393694,
      "ems": null
    },
    {
      "latitude": 51.991589,
      "longitude": 18.146667,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393697,
      "ems": null
    },
    {
      "latitude": 51.99168,
      "longitude": 18.144785,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667393700,
      "ems": null
    },
    {
      "latitude": 51.991726,
      "longitude": 18.142822,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393703,
      "ems": null
    },
    {
      "latitude": 51.991745,
      "longitude": 18.141098,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393706,
      "ems": null
    },
    {
      "latitude": 51.991776,
      "longitude": 18.139526,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393709,
      "ems": null
    },
    {
      "latitude": 51.991821,
      "longitude": 18.137329,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393712,
      "ems": null
    },
    {
      "latitude": 51.991867,
      "longitude": 18.135603,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393715,
      "ems": null
    },
    {
      "latitude": 51.991882,
      "longitude": 18.133774,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393718,
      "ems": null
    },
    {
      "latitude": 51.991959,
      "longitude": 18.132071,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393721,
      "ems": null
    },
    {
      "latitude": 51.992157,
      "longitude": 18.128052,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667393727,
      "ems": null
    },
    {
      "latitude": 51.992332,
      "longitude": 18.124224,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667393733,
      "ems": null
    },
    {
      "latitude": 51.992432,
      "longitude": 18.122253,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667393736,
      "ems": null
    },
    {
      "latitude": 51.992569,
      "longitude": 18.120499,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667393739,
      "ems": null
    },
    {
      "latitude": 51.992615,
      "longitude": 18.116684,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667393745,
      "ems": null
    },
    {
      "latitude": 51.992661,
      "longitude": 18.112717,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393751,
      "ems": null
    },
    {
      "latitude": 51.992798,
      "longitude": 18.108921,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393757,
      "ems": null
    },
    {
      "latitude": 51.992939,
      "longitude": 18.105312,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393763,
      "ems": null
    },
    {
      "latitude": 51.992985,
      "longitude": 18.101624,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393769,
      "ems": null
    },
    {
      "latitude": 51.993076,
      "longitude": 18.097935,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393775,
      "ems": null
    },
    {
      "latitude": 51.993263,
      "longitude": 18.094168,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667393781,
      "ems": null
    },
    {
      "latitude": 51.993496,
      "longitude": 18.090559,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667393787,
      "ems": null
    },
    {
      "latitude": 51.993759,
      "longitude": 18.086777,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667393793,
      "ems": null
    },
    {
      "latitude": 51.993916,
      "longitude": 18.084751,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667393797,
      "ems": null
    },
    {
      "latitude": 51.994125,
      "longitude": 18.082733,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1667393800,
      "ems": null
    },
    {
      "latitude": 51.994308,
      "longitude": 18.080978,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1667393802,
      "ems": null
    },
    {
      "latitude": 51.994492,
      "longitude": 18.078995,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1667393805,
      "ems": null
    },
    {
      "latitude": 51.99472,
      "longitude": 18.077087,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1667393808,
      "ems": null
    },
    {
      "latitude": 51.994949,
      "longitude": 18.075104,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1667393811,
      "ems": null
    },
    {
      "latitude": 51.995361,
      "longitude": 18.07106,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1667393817,
      "ems": null
    },
    {
      "latitude": 51.99559,
      "longitude": 18.069057,
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1667393820,
      "ems": null
    },
    {
      "latitude": 51.996048,
      "longitude": 18.064728,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667393827,
      "ems": null
    },
    {
      "latitude": 51.996368,
      "longitude": 18.06076,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667393833,
      "ems": null
    },
    {
      "latitude": 51.99646,
      "longitude": 18.058701,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393836,
      "ems": null
    },
    {
      "latitude": 51.996521,
      "longitude": 18.056501,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393839,
      "ems": null
    },
    {
      "latitude": 51.996552,
      "longitude": 18.054428,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667393842,
      "ems": null
    },
    {
      "latitude": 51.996567,
      "longitude": 18.052263,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393845,
      "ems": null
    },
    {
      "latitude": 51.996662,
      "longitude": 18.049988,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393848,
      "ems": null
    },
    {
      "latitude": 51.996735,
      "longitude": 18.048096,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667393851,
      "ems": null
    },
    {
      "latitude": 51.996826,
      "longitude": 18.046188,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393853,
      "ems": null
    },
    {
      "latitude": 51.996895,
      "longitude": 18.044024,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393857,
      "ems": null
    },
    {
      "latitude": 51.996964,
      "longitude": 18.041916,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393860,
      "ems": null
    },
    {
      "latitude": 51.997082,
      "longitude": 18.037825,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393866,
      "ems": null
    },
    {
      "latitude": 51.997192,
      "longitude": 18.033829,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667393872,
      "ems": null
    },
    {
      "latitude": 51.99736,
      "longitude": 18.029585,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667393878,
      "ems": null
    },
    {
      "latitude": 51.99765,
      "longitude": 18.025894,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667393884,
      "ems": null
    },
    {
      "latitude": 51.997833,
      "longitude": 18.023987,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667393887,
      "ems": null
    },
    {
      "latitude": 51.998104,
      "longitude": 18.02009,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667393893,
      "ems": null
    },
    {
      "latitude": 51.998245,
      "longitude": 18.016281,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393899,
      "ems": null
    },
    {
      "latitude": 51.998337,
      "longitude": 18.012466,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393905,
      "ems": null
    },
    {
      "latitude": 51.998474,
      "longitude": 18.008652,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393911,
      "ems": null
    },
    {
      "latitude": 51.99852,
      "longitude": 18.006973,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393914,
      "ems": null
    },
    {
      "latitude": 51.998749,
      "longitude": 18.003159,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667393920,
      "ems": null
    },
    {
      "latitude": 51.999023,
      "longitude": 17.999344,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667393926,
      "ems": null
    },
    {
      "latitude": 51.999161,
      "longitude": 17.995453,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393932,
      "ems": null
    },
    {
      "latitude": 51.999268,
      "longitude": 17.991682,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393938,
      "ems": null
    },
    {
      "latitude": 51.999363,
      "longitude": 17.987915,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393944,
      "ems": null
    },
    {
      "latitude": 51.999409,
      "longitude": 17.986189,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393947,
      "ems": null
    },
    {
      "latitude": 51.999454,
      "longitude": 17.984226,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393950,
      "ems": null
    },
    {
      "latitude": 51.999573,
      "longitude": 17.979965,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667393957,
      "ems": null
    },
    {
      "latitude": 51.999596,
      "longitude": 17.976223,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667393962,
      "ems": null
    },
    {
      "latitude": 51.999573,
      "longitude": 17.972412,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393969,
      "ems": null
    },
    {
      "latitude": 51.999546,
      "longitude": 17.970572,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393972,
      "ems": null
    },
    {
      "latitude": 51.999481,
      "longitude": 17.968674,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393975,
      "ems": null
    },
    {
      "latitude": 51.999435,
      "longitude": 17.966766,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393978,
      "ems": null
    },
    {
      "latitude": 51.99939,
      "longitude": 17.965012,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667393980,
      "ems": null
    },
    {
      "latitude": 51.99939,
      "longitude": 17.963028,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667393984,
      "ems": null
    },
    {
      "latitude": 51.999313,
      "longitude": 17.959351,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667393989,
      "ems": null
    },
    {
      "latitude": 51.999268,
      "longitude": 17.955427,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667393996,
      "ems": null
    },
    {
      "latitude": 51.999115,
      "longitude": 17.951813,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667394002,
      "ems": null
    },
    {
      "latitude": 51.998989,
      "longitude": 17.94805,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667394008,
      "ems": null
    },
    {
      "latitude": 51.998802,
      "longitude": 17.944441,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667394014,
      "ems": null
    },
    {
      "latitude": 51.998703,
      "longitude": 17.940674,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394020,
      "ems": null
    },
    {
      "latitude": 51.998478,
      "longitude": 17.936985,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394026,
      "ems": null
    },
    {
      "latitude": 51.998383,
      "longitude": 17.933273,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394032,
      "ems": null
    },
    {
      "latitude": 51.998291,
      "longitude": 17.929766,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394038,
      "ems": null
    },
    {
      "latitude": 51.998291,
      "longitude": 17.92778,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394041,
      "ems": null
    },
    {
      "latitude": 51.998337,
      "longitude": 17.924118,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394047,
      "ems": null
    },
    {
      "latitude": 51.998291,
      "longitude": 17.920151,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394053,
      "ems": null
    },
    {
      "latitude": 51.998199,
      "longitude": 17.916582,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394059,
      "ems": null
    },
    {
      "latitude": 51.998058,
      "longitude": 17.912737,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394065,
      "ems": null
    },
    {
      "latitude": 51.997967,
      "longitude": 17.908657,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394071,
      "ems": null
    },
    {
      "latitude": 51.997917,
      "longitude": 17.90489,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394077,
      "ems": null
    },
    {
      "latitude": 51.997879,
      "longitude": 17.90123,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394083,
      "ems": null
    },
    {
      "latitude": 51.997826,
      "longitude": 17.897278,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394089,
      "ems": null
    },
    {
      "latitude": 51.997696,
      "longitude": 17.893753,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394095,
      "ems": null
    },
    {
      "latitude": 51.997604,
      "longitude": 17.890015,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394101,
      "ems": null
    },
    {
      "latitude": 51.997467,
      "longitude": 17.886429,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394107,
      "ems": null
    },
    {
      "latitude": 51.997452,
      "longitude": 17.883152,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667394113,
      "ems": null
    },
    {
      "latitude": 51.99736,
      "longitude": 17.879385,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394119,
      "ems": null
    },
    {
      "latitude": 51.997238,
      "longitude": 17.875443,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394125,
      "ems": null
    },
    {
      "latitude": 51.997128,
      "longitude": 17.871616,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394131,
      "ems": null
    },
    {
      "latitude": 51.996918,
      "longitude": 17.868042,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667394137,
      "ems": null
    },
    {
      "latitude": 51.99678,
      "longitude": 17.866211,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394140,
      "ems": null
    },
    {
      "latitude": 51.996662,
      "longitude": 17.864475,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394143,
      "ems": null
    },
    {
      "latitude": 51.996475,
      "longitude": 17.862514,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394147,
      "ems": null
    },
    {
      "latitude": 51.996334,
      "longitude": 17.860867,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394149,
      "ems": null
    },
    {
      "latitude": 51.99614,
      "longitude": 17.858887,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394152,
      "ems": null
    },
    {
      "latitude": 51.996002,
      "longitude": 17.857132,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394155,
      "ems": null
    },
    {
      "latitude": 51.995731,
      "longitude": 17.853411,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667394161,
      "ems": null
    },
    {
      "latitude": 51.995499,
      "longitude": 17.849655,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667394167,
      "ems": null
    },
    {
      "latitude": 51.995125,
      "longitude": 17.84572,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667394173,
      "ems": null
    },
    {
      "latitude": 51.994766,
      "longitude": 17.841949,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667394180,
      "ems": null
    },
    {
      "latitude": 51.994446,
      "longitude": 17.83844,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394185,
      "ems": null
    },
    {
      "latitude": 51.994217,
      "longitude": 17.834473,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394192,
      "ems": null
    },
    {
      "latitude": 51.994125,
      "longitude": 17.830887,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394198,
      "ems": null
    },
    {
      "latitude": 51.99408,
      "longitude": 17.829361,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394200,
      "ems": null
    },
    {
      "latitude": 51.993851,
      "longitude": 17.825089,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394207,
      "ems": null
    },
    {
      "latitude": 51.993774,
      "longitude": 17.823435,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394210,
      "ems": null
    },
    {
      "latitude": 51.993668,
      "longitude": 17.82135,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394213,
      "ems": null
    },
    {
      "latitude": 51.99353,
      "longitude": 17.817764,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394219,
      "ems": null
    },
    {
      "latitude": 51.993347,
      "longitude": 17.81395,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394225,
      "ems": null
    },
    {
      "latitude": 51.993164,
      "longitude": 17.810059,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667394231,
      "ems": null
    },
    {
      "latitude": 51.993027,
      "longitude": 17.806244,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667394237,
      "ems": null
    },
    {
      "latitude": 51.992889,
      "longitude": 17.802481,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394243,
      "ems": null
    },
    {
      "latitude": 51.992844,
      "longitude": 17.798635,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394249,
      "ems": null
    },
    {
      "latitude": 51.992752,
      "longitude": 17.79479,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394255,
      "ems": null
    },
    {
      "latitude": 51.992706,
      "longitude": 17.791025,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394261,
      "ems": null
    },
    {
      "latitude": 51.992752,
      "longitude": 17.787247,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394267,
      "ems": null
    },
    {
      "latitude": 51.992657,
      "longitude": 17.783648,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394273,
      "ems": null
    },
    {
      "latitude": 51.992424,
      "longitude": 17.779646,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394280,
      "ems": null
    },
    {
      "latitude": 51.992332,
      "longitude": 17.775879,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667394286,
      "ems": null
    },
    {
      "latitude": 51.992378,
      "longitude": 17.772268,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394291,
      "ems": null
    },
    {
      "latitude": 51.992378,
      "longitude": 17.768345,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394297,
      "ems": null
    },
    {
      "latitude": 51.992378,
      "longitude": 17.764578,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394304,
      "ems": null
    },
    {
      "latitude": 51.992294,
      "longitude": 17.760849,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394309,
      "ems": null
    },
    {
      "latitude": 51.992203,
      "longitude": 17.756882,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394316,
      "ems": null
    },
    {
      "latitude": 51.992191,
      "longitude": 17.754141,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394321,
      "ems": null
    },
    {
      "latitude": 51.992065,
      "longitude": 17.749786,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394328,
      "ems": null
    },
    {
      "latitude": 51.991974,
      "longitude": 17.745972,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394333,
      "ems": null
    },
    {
      "latitude": 51.991959,
      "longitude": 17.742685,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667394339,
      "ems": null
    },
    {
      "latitude": 51.991913,
      "longitude": 17.73876,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394346,
      "ems": null
    },
    {
      "latitude": 51.991959,
      "longitude": 17.735151,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394352,
      "ems": null
    },
    {
      "latitude": 51.991974,
      "longitude": 17.733536,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667394355,
      "ems": null
    },
    {
      "latitude": 51.992054,
      "longitude": 17.732012,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667394358,
      "ems": null
    },
    {
      "latitude": 51.9921,
      "longitude": 17.730207,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667394361,
      "ems": null
    },
    {
      "latitude": 51.992146,
      "longitude": 17.726597,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667394367,
      "ems": null
    },
    {
      "latitude": 51.992191,
      "longitude": 17.723379,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667394373,
      "ems": null
    },
    {
      "latitude": 51.992241,
      "longitude": 17.720083,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394379,
      "ems": null
    },
    {
      "latitude": 51.992241,
      "longitude": 17.716867,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394384,
      "ems": null
    },
    {
      "latitude": 51.992241,
      "longitude": 17.712473,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394391,
      "ems": null
    },
    {
      "latitude": 51.992332,
      "longitude": 17.708941,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667394397,
      "ems": null
    },
    {
      "latitude": 51.992424,
      "longitude": 17.705566,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667394403,
      "ems": null
    },
    {
      "latitude": 51.992519,
      "longitude": 17.701643,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667394409,
      "ems": null
    },
    {
      "latitude": 51.992565,
      "longitude": 17.697641,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394416,
      "ems": null
    },
    {
      "latitude": 51.992611,
      "longitude": 17.693953,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667394421,
      "ems": null
    },
    {
      "latitude": 51.992798,
      "longitude": 17.691116,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667394427,
      "ems": null
    },
    {
      "latitude": 51.992889,
      "longitude": 17.686996,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667394433,
      "ems": null
    },
    {
      "latitude": 51.992889,
      "longitude": 17.681396,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667394443,
      "ems": null
    },
    {
      "latitude": 51.993027,
      "longitude": 17.677994,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667394448,
      "ems": null
    },
    {
      "latitude": 51.993073,
      "longitude": 17.676086,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394451,
      "ems": null
    },
    {
      "latitude": 51.993076,
      "longitude": 17.674177,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394454,
      "ems": null
    },
    {
      "latitude": 51.993118,
      "longitude": 17.670288,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667394461,
      "ems": null
    },
    {
      "latitude": 51.993073,
      "longitude": 17.666397,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394467,
      "ems": null
    },
    {
      "latitude": 51.992935,
      "longitude": 17.664795,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394469,
      "ems": null
    },
    {
      "latitude": 51.992706,
      "longitude": 17.662876,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394473,
      "ems": null
    },
    {
      "latitude": 51.992523,
      "longitude": 17.661209,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394476,
      "ems": null
    },
    {
      "latitude": 51.992378,
      "longitude": 17.657383,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667394481,
      "ems": null
    },
    {
      "latitude": 51.992424,
      "longitude": 17.653225,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667394488,
      "ems": null
    },
    {
      "latitude": 51.992706,
      "longitude": 17.649302,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667394494,
      "ems": null
    },
    {
      "latitude": 51.992844,
      "longitude": 17.647495,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667394497,
      "ems": null
    },
    {
      "latitude": 51.992889,
      "longitude": 17.64522,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667394500,
      "ems": null
    },
    {
      "latitude": 51.992889,
      "longitude": 17.643356,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394503,
      "ems": null
    },
    {
      "latitude": 51.992889,
      "longitude": 17.641678,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394506,
      "ems": null
    },
    {
      "latitude": 51.992935,
      "longitude": 17.63916,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667394509,
      "ems": null
    },
    {
      "latitude": 51.993031,
      "longitude": 17.635019,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667394515,
      "ems": null
    },
    {
      "latitude": 51.993164,
      "longitude": 17.630692,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667394521,
      "ems": null
    },
    {
      "latitude": 51.99321,
      "longitude": 17.628632,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667394524,
      "ems": null
    },
    {
      "latitude": 51.993393,
      "longitude": 17.622528,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667394533,
      "ems": null
    },
    {
      "latitude": 51.993301,
      "longitude": 17.618179,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667394539,
      "ems": null
    },
    {
      "latitude": 51.993217,
      "longitude": 17.615086,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667394544,
      "ems": null
    },
    {
      "latitude": 51.993172,
      "longitude": 17.613438,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394548,
      "ems": null
    },
    {
      "latitude": 51.993118,
      "longitude": 17.611084,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667394551,
      "ems": null
    },
    {
      "latitude": 51.993118,
      "longitude": 17.60788,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394556,
      "ems": null
    },
    {
      "latitude": 51.993073,
      "longitude": 17.60231,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394566,
      "ems": null
    },
    {
      "latitude": 51.993031,
      "longitude": 17.597979,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667394572,
      "ems": null
    },
    {
      "latitude": 51.992985,
      "longitude": 17.595547,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394577,
      "ems": null
    },
    {
      "latitude": 51.993076,
      "longitude": 17.591543,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667394583,
      "ems": null
    },
    {
      "latitude": 51.993164,
      "longitude": 17.585602,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667394592,
      "ems": null
    },
    {
      "latitude": 51.992985,
      "longitude": 17.581499,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394599,
      "ems": null
    },
    {
      "latitude": 51.992844,
      "longitude": 17.579575,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667394602,
      "ems": null
    },
    {
      "latitude": 51.992706,
      "longitude": 17.577576,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394605,
      "ems": null
    },
    {
      "latitude": 51.992477,
      "longitude": 17.575684,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394608,
      "ems": null
    },
    {
      "latitude": 51.992157,
      "longitude": 17.573776,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667394611,
      "ems": null
    },
    {
      "latitude": 51.991726,
      "longitude": 17.571768,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667394614,
      "ems": null
    },
    {
      "latitude": 51.991402,
      "longitude": 17.570278,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667394617,
      "ems": null
    },
    {
      "latitude": 51.991123,
      "longitude": 17.568865,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667394620,
      "ems": null
    },
    {
      "latitude": 51.990471,
      "longitude": 17.56604,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667394623,
      "ems": null
    },
    {
      "latitude": 51.990097,
      "longitude": 17.564621,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667394626,
      "ems": null
    },
    {
      "latitude": 51.989586,
      "longitude": 17.562666,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667394629,
      "ems": null
    },
    {
      "latitude": 51.989136,
      "longitude": 17.561111,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667394631,
      "ems": null
    },
    {
      "latitude": 51.988358,
      "longitude": 17.558899,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667394635,
      "ems": null
    },
    {
      "latitude": 51.987488,
      "longitude": 17.556839,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667394639,
      "ems": null
    },
    {
      "latitude": 51.986698,
      "longitude": 17.554897,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667394642,
      "ems": null
    },
    {
      "latitude": 51.986023,
      "longitude": 17.553253,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667394645,
      "ems": null
    },
    {
      "latitude": 51.985382,
      "longitude": 17.551498,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667394648,
      "ems": null
    },
    {
      "latitude": 51.985256,
      "longitude": 17.551208,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667394650,
      "ems": null
    },
    {
      "latitude": 51.984009,
      "longitude": 17.548065,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1667394654,
      "ems": null
    },
    {
      "latitude": 51.983276,
      "longitude": 17.546463,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667394657,
      "ems": null
    },
    {
      "latitude": 51.98259,
      "longitude": 17.544937,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667394660,
      "ems": null
    },
    {
      "latitude": 51.981903,
      "longitude": 17.543411,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667394663,
      "ems": null
    },
    {
      "latitude": 51.981255,
      "longitude": 17.541948,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667394666,
      "ems": null
    },
    {
      "latitude": 51.979996,
      "longitude": 17.538967,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667394672,
      "ems": null
    },
    {
      "latitude": 51.979294,
      "longitude": 17.537537,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667394675,
      "ems": null
    },
    {
      "latitude": 51.978554,
      "longitude": 17.536062,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1667394678,
      "ems": null
    },
    {
      "latitude": 51.97776,
      "longitude": 17.534729,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1667394681,
      "ems": null
    },
    {
      "latitude": 51.976868,
      "longitude": 17.533112,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1667394684,
      "ems": null
    },
    {
      "latitude": 51.976227,
      "longitude": 17.532043,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667394686,
      "ems": null
    },
    {
      "latitude": 51.974735,
      "longitude": 17.529001,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667394693,
      "ems": null
    },
    {
      "latitude": 51.973804,
      "longitude": 17.527273,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1667394696,
      "ems": null
    },
    {
      "latitude": 51.972965,
      "longitude": 17.525784,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667394699,
      "ems": null
    },
    {
      "latitude": 51.97208,
      "longitude": 17.52437,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667394702,
      "ems": null
    },
    {
      "latitude": 51.971199,
      "longitude": 17.522879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1667394705,
      "ems": null
    },
    {
      "latitude": 51.969498,
      "longitude": 17.519836,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1667394711,
      "ems": null
    },
    {
      "latitude": 51.967892,
      "longitude": 17.517073,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667394717,
      "ems": null
    },
    {
      "latitude": 51.967056,
      "longitude": 17.515659,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667394720,
      "ems": null
    },
    {
      "latitude": 51.965424,
      "longitude": 17.513071,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1667394726,
      "ems": null
    },
    {
      "latitude": 51.963638,
      "longitude": 17.509995,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1667394732,
      "ems": null
    },
    {
      "latitude": 51.96212,
      "longitude": 17.507029,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667394738,
      "ems": null
    },
    {
      "latitude": 51.961422,
      "longitude": 17.505301,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667394741,
      "ems": null
    },
    {
      "latitude": 51.960983,
      "longitude": 17.50412,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667394743,
      "ems": null
    },
    {
      "latitude": 51.960388,
      "longitude": 17.502213,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667394747,
      "ems": null
    },
    {
      "latitude": 51.959839,
      "longitude": 17.500229,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667394750,
      "ems": null
    },
    {
      "latitude": 51.959518,
      "longitude": 17.498474,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667394753,
      "ems": null
    },
    {
      "latitude": 51.959187,
      "longitude": 17.496511,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667394756,
      "ems": null
    },
    {
      "latitude": 51.959,
      "longitude": 17.495022,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667394758,
      "ems": null
    },
    {
      "latitude": 51.958767,
      "longitude": 17.492746,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394762,
      "ems": null
    },
    {
      "latitude": 51.958488,
      "longitude": 17.490784,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394765,
      "ems": null
    },
    {
      "latitude": 51.958302,
      "longitude": 17.488979,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394768,
      "ems": null
    },
    {
      "latitude": 51.958054,
      "longitude": 17.487259,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394770,
      "ems": null
    },
    {
      "latitude": 51.957779,
      "longitude": 17.485123,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667394774,
      "ems": null
    },
    {
      "latitude": 51.957504,
      "longitude": 17.483292,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667394777,
      "ems": null
    },
    {
      "latitude": 51.957321,
      "longitude": 17.481918,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667394779,
      "ems": null
    },
    {
      "latitude": 51.957138,
      "longitude": 17.480698,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394781,
      "ems": null
    },
    {
      "latitude": 51.956909,
      "longitude": 17.477798,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667394786,
      "ems": null
    },
    {
      "latitude": 51.95668,
      "longitude": 17.474365,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667394791,
      "ems": null
    },
    {
      "latitude": 51.956535,
      "longitude": 17.472263,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667394795,
      "ems": null
    },
    {
      "latitude": 51.956486,
      "longitude": 17.471165,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394796,
      "ems": null
    },
    {
      "latitude": 51.95636,
      "longitude": 17.467957,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667394801,
      "ems": null
    },
    {
      "latitude": 51.956207,
      "longitude": 17.465908,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394804,
      "ems": null
    },
    {
      "latitude": 51.95607,
      "longitude": 17.464573,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394808,
      "ems": null
    },
    {
      "latitude": 51.955673,
      "longitude": 17.459488,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394814,
      "ems": null
    },
    {
      "latitude": 51.955368,
      "longitude": 17.455235,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667394820,
      "ems": null
    },
    {
      "latitude": 51.955215,
      "longitude": 17.451477,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667394825,
      "ems": null
    },
    {
      "latitude": 51.954987,
      "longitude": 17.447662,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667394831,
      "ems": null
    },
    {
      "latitude": 51.95472,
      "longitude": 17.443699,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394838,
      "ems": null
    },
    {
      "latitude": 51.954437,
      "longitude": 17.44009,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394843,
      "ems": null
    },
    {
      "latitude": 51.954113,
      "longitude": 17.43593,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394850,
      "ems": null
    },
    {
      "latitude": 51.953835,
      "longitude": 17.432478,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394856,
      "ems": null
    },
    {
      "latitude": 51.953476,
      "longitude": 17.428818,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667394862,
      "ems": null
    },
    {
      "latitude": 51.953323,
      "longitude": 17.427456,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394865,
      "ems": null
    },
    {
      "latitude": 51.953018,
      "longitude": 17.425156,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394868,
      "ems": null
    },
    {
      "latitude": 51.952835,
      "longitude": 17.423477,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394871,
      "ems": null
    },
    {
      "latitude": 51.952423,
      "longitude": 17.420197,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667394877,
      "ems": null
    },
    {
      "latitude": 51.95211,
      "longitude": 17.418118,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667394880,
      "ems": null
    },
    {
      "latitude": 51.951691,
      "longitude": 17.414398,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667394886,
      "ems": null
    },
    {
      "latitude": 51.951275,
      "longitude": 17.41074,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394892,
      "ems": null
    },
    {
      "latitude": 51.950775,
      "longitude": 17.407074,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394898,
      "ems": null
    },
    {
      "latitude": 51.950344,
      "longitude": 17.403364,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667394904,
      "ems": null
    },
    {
      "latitude": 51.94997,
      "longitude": 17.399754,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394910,
      "ems": null
    },
    {
      "latitude": 51.949692,
      "longitude": 17.39583,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667394916,
      "ems": null
    },
    {
      "latitude": 51.949356,
      "longitude": 17.391891,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667394922,
      "ems": null
    },
    {
      "latitude": 51.949219,
      "longitude": 17.390213,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394925,
      "ems": null
    },
    {
      "latitude": 51.948761,
      "longitude": 17.386093,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667394931,
      "ems": null
    },
    {
      "latitude": 51.948257,
      "longitude": 17.382355,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394937,
      "ems": null
    },
    {
      "latitude": 51.948063,
      "longitude": 17.380527,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394940,
      "ems": null
    },
    {
      "latitude": 51.947781,
      "longitude": 17.378489,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394943,
      "ems": null
    },
    {
      "latitude": 51.947548,
      "longitude": 17.376604,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667394946,
      "ems": null
    },
    {
      "latitude": 51.947113,
      "longitude": 17.372742,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667394952,
      "ems": null
    },
    {
      "latitude": 51.946758,
      "longitude": 17.368992,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394958,
      "ems": null
    },
    {
      "latitude": 51.946472,
      "longitude": 17.365417,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667394964,
      "ems": null
    },
    {
      "latitude": 51.946106,
      "longitude": 17.361773,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667394970,
      "ems": null
    },
    {
      "latitude": 51.945686,
      "longitude": 17.358006,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667394976,
      "ems": null
    },
    {
      "latitude": 51.945282,
      "longitude": 17.354279,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667394982,
      "ems": null
    },
    {
      "latitude": 51.944824,
      "longitude": 17.350388,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394989,
      "ems": null
    },
    {
      "latitude": 51.944382,
      "longitude": 17.346863,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667394994,
      "ems": null
    },
    {
      "latitude": 51.943825,
      "longitude": 17.342939,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395000,
      "ems": null
    },
    {
      "latitude": 51.943592,
      "longitude": 17.341135,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395003,
      "ems": null
    },
    {
      "latitude": 51.943081,
      "longitude": 17.337368,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395010,
      "ems": null
    },
    {
      "latitude": 51.942661,
      "longitude": 17.333445,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395016,
      "ems": null
    },
    {
      "latitude": 51.942242,
      "longitude": 17.32999,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395022,
      "ems": null
    },
    {
      "latitude": 51.941849,
      "longitude": 17.326355,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395028,
      "ems": null
    },
    {
      "latitude": 51.941452,
      "longitude": 17.322693,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395034,
      "ems": null
    },
    {
      "latitude": 51.941078,
      "longitude": 17.319241,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395040,
      "ems": null
    },
    {
      "latitude": 51.940754,
      "longitude": 17.315708,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395045,
      "ems": null
    },
    {
      "latitude": 51.940613,
      "longitude": 17.313982,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667395049,
      "ems": null
    },
    {
      "latitude": 51.940384,
      "longitude": 17.310333,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667395055,
      "ems": null
    },
    {
      "latitude": 51.940292,
      "longitude": 17.308502,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667395058,
      "ems": null
    },
    {
      "latitude": 51.940193,
      "longitude": 17.306763,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667395061,
      "ems": null
    },
    {
      "latitude": 51.940018,
      "longitude": 17.303543,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395066,
      "ems": null
    },
    {
      "latitude": 51.939541,
      "longitude": 17.299622,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395072,
      "ems": null
    },
    {
      "latitude": 51.939308,
      "longitude": 17.297895,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395075,
      "ems": null
    },
    {
      "latitude": 51.93903,
      "longitude": 17.295776,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395079,
      "ems": null
    },
    {
      "latitude": 51.938782,
      "longitude": 17.294006,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395082,
      "ems": null
    },
    {
      "latitude": 51.938519,
      "longitude": 17.292246,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395085,
      "ems": null
    },
    {
      "latitude": 51.93824,
      "longitude": 17.290205,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395088,
      "ems": null
    },
    {
      "latitude": 51.938007,
      "longitude": 17.288321,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395091,
      "ems": null
    },
    {
      "latitude": 51.937775,
      "longitude": 17.286438,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395094,
      "ems": null
    },
    {
      "latitude": 51.937225,
      "longitude": 17.282562,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395100,
      "ems": null
    },
    {
      "latitude": 51.936768,
      "longitude": 17.278748,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395105,
      "ems": null
    },
    {
      "latitude": 51.936218,
      "longitude": 17.274399,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395111,
      "ems": null
    },
    {
      "latitude": 51.935577,
      "longitude": 17.27005,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395117,
      "ems": null
    },
    {
      "latitude": 51.934887,
      "longitude": 17.265799,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667395123,
      "ems": null
    },
    {
      "latitude": 51.93428,
      "longitude": 17.261875,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395129,
      "ems": null
    },
    {
      "latitude": 51.933723,
      "longitude": 17.257952,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395135,
      "ems": null
    },
    {
      "latitude": 51.933289,
      "longitude": 17.254105,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395141,
      "ems": null
    },
    {
      "latitude": 51.932831,
      "longitude": 17.249603,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395147,
      "ems": null
    },
    {
      "latitude": 51.932652,
      "longitude": 17.247671,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395150,
      "ems": null
    },
    {
      "latitude": 51.932465,
      "longitude": 17.245867,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395153,
      "ems": null
    },
    {
      "latitude": 51.93187,
      "longitude": 17.241669,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395159,
      "ems": null
    },
    {
      "latitude": 51.931274,
      "longitude": 17.238083,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667395165,
      "ems": null
    },
    {
      "latitude": 51.930882,
      "longitude": 17.235979,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667395168,
      "ems": null
    },
    {
      "latitude": 51.930542,
      "longitude": 17.234039,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667395171,
      "ems": null
    },
    {
      "latitude": 51.930233,
      "longitude": 17.232449,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667395174,
      "ems": null
    },
    {
      "latitude": 51.929768,
      "longitude": 17.230486,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667395177,
      "ems": null
    },
    {
      "latitude": 51.929443,
      "longitude": 17.228622,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667395180,
      "ems": null
    },
    {
      "latitude": 51.929123,
      "longitude": 17.226791,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395184,
      "ems": null
    },
    {
      "latitude": 51.928619,
      "longitude": 17.223892,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667395189,
      "ems": null
    },
    {
      "latitude": 51.927841,
      "longitude": 17.220306,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395195,
      "ems": null
    },
    {
      "latitude": 51.927532,
      "longitude": 17.217539,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395201,
      "ems": null
    },
    {
      "latitude": 51.927299,
      "longitude": 17.215183,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395204,
      "ems": null
    },
    {
      "latitude": 51.927246,
      "longitude": 17.214279,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395206,
      "ems": null
    },
    {
      "latitude": 51.926971,
      "longitude": 17.211731,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395210,
      "ems": null
    },
    {
      "latitude": 51.926285,
      "longitude": 17.207947,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667395217,
      "ems": null
    },
    {
      "latitude": 51.925671,
      "longitude": 17.204512,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667395223,
      "ems": null
    },
    {
      "latitude": 51.925343,
      "longitude": 17.202785,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667395226,
      "ems": null
    },
    {
      "latitude": 51.924973,
      "longitude": 17.200979,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667395229,
      "ems": null
    },
    {
      "latitude": 51.924683,
      "longitude": 17.199631,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667395231,
      "ems": null
    },
    {
      "latitude": 51.924362,
      "longitude": 17.197876,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667395234,
      "ems": null
    },
    {
      "latitude": 51.923992,
      "longitude": 17.196115,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667395238,
      "ems": null
    },
    {
      "latitude": 51.923481,
      "longitude": 17.193132,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395244,
      "ems": null
    },
    {
      "latitude": 51.923172,
      "longitude": 17.19101,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395247,
      "ems": null
    },
    {
      "latitude": 51.92297,
      "longitude": 17.189209,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395250,
      "ems": null
    },
    {
      "latitude": 51.92276,
      "longitude": 17.187576,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395253,
      "ems": null
    },
    {
      "latitude": 51.922577,
      "longitude": 17.186127,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395256,
      "ems": null
    },
    {
      "latitude": 51.921944,
      "longitude": 17.182224,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395262,
      "ems": null
    },
    {
      "latitude": 51.921387,
      "longitude": 17.178694,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395268,
      "ems": null
    },
    {
      "latitude": 51.920883,
      "longitude": 17.17514,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395274,
      "ems": null
    },
    {
      "latitude": 51.920517,
      "longitude": 17.171783,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395280,
      "ems": null
    },
    {
      "latitude": 51.920059,
      "longitude": 17.168274,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395286,
      "ems": null
    },
    {
      "latitude": 51.919647,
      "longitude": 17.164764,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395292,
      "ems": null
    },
    {
      "latitude": 51.919479,
      "longitude": 17.162998,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395295,
      "ems": null
    },
    {
      "latitude": 51.919098,
      "longitude": 17.159576,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395301,
      "ems": null
    },
    {
      "latitude": 51.918781,
      "longitude": 17.15625,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395307,
      "ems": null
    },
    {
      "latitude": 51.918503,
      "longitude": 17.152786,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395313,
      "ems": null
    },
    {
      "latitude": 51.918137,
      "longitude": 17.149658,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667395319,
      "ems": null
    },
    {
      "latitude": 51.917908,
      "longitude": 17.148056,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395322,
      "ems": null
    },
    {
      "latitude": 51.917664,
      "longitude": 17.146441,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667395325,
      "ems": null
    },
    {
      "latitude": 51.917313,
      "longitude": 17.144699,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667395328,
      "ems": null
    },
    {
      "latitude": 51.916965,
      "longitude": 17.14291,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667395331,
      "ems": null
    },
    {
      "latitude": 51.916489,
      "longitude": 17.139511,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395337,
      "ems": null
    },
    {
      "latitude": 51.916214,
      "longitude": 17.13768,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395340,
      "ems": null
    },
    {
      "latitude": 51.915985,
      "longitude": 17.136154,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395343,
      "ems": null
    },
    {
      "latitude": 51.915707,
      "longitude": 17.134512,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395346,
      "ems": null
    },
    {
      "latitude": 51.915161,
      "longitude": 17.13089,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395352,
      "ems": null
    },
    {
      "latitude": 51.914658,
      "longitude": 17.127762,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667395358,
      "ems": null
    },
    {
      "latitude": 51.914017,
      "longitude": 17.124329,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667395364,
      "ems": null
    },
    {
      "latitude": 51.913559,
      "longitude": 17.122345,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667395367,
      "ems": null
    },
    {
      "latitude": 51.913193,
      "longitude": 17.12059,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667395370,
      "ems": null
    },
    {
      "latitude": 51.912827,
      "longitude": 17.118912,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667395373,
      "ems": null
    },
    {
      "latitude": 51.912369,
      "longitude": 17.117081,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1667395376,
      "ems": null
    },
    {
      "latitude": 51.912003,
      "longitude": 17.115555,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1667395380,
      "ems": null
    },
    {
      "latitude": 51.911472,
      "longitude": 17.113796,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667395382,
      "ems": null
    },
    {
      "latitude": 51.910912,
      "longitude": 17.111912,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667395386,
      "ems": null
    },
    {
      "latitude": 51.910767,
      "longitude": 17.111359,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667395387,
      "ems": null
    },
    {
      "latitude": 51.910217,
      "longitude": 17.10968,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667395390,
      "ems": null
    },
    {
      "latitude": 51.909302,
      "longitude": 17.106934,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667395395,
      "ems": null
    },
    {
      "latitude": 51.908772,
      "longitude": 17.105398,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667395398,
      "ems": null
    },
    {
      "latitude": 51.908306,
      "longitude": 17.103987,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395400,
      "ems": null
    },
    {
      "latitude": 51.907745,
      "longitude": 17.102509,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667395403,
      "ems": null
    },
    {
      "latitude": 51.907288,
      "longitude": 17.101135,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395406,
      "ems": null
    },
    {
      "latitude": 51.906723,
      "longitude": 17.099592,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667395410,
      "ems": null
    },
    {
      "latitude": 51.905823,
      "longitude": 17.096939,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667395415,
      "ems": null
    },
    {
      "latitude": 51.904907,
      "longitude": 17.094099,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667395422,
      "ems": null
    },
    {
      "latitude": 51.9039,
      "longitude": 17.091141,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395427,
      "ems": null
    },
    {
      "latitude": 51.902802,
      "longitude": 17.088089,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667395434,
      "ems": null
    },
    {
      "latitude": 51.901836,
      "longitude": 17.085232,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667395440,
      "ems": null
    },
    {
      "latitude": 51.900623,
      "longitude": 17.082327,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667395446,
      "ems": null
    },
    {
      "latitude": 51.900112,
      "longitude": 17.081072,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667395448,
      "ems": null
    },
    {
      "latitude": 51.898911,
      "longitude": 17.077942,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395455,
      "ems": null
    },
    {
      "latitude": 51.897903,
      "longitude": 17.074966,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667395460,
      "ems": null
    },
    {
      "latitude": 51.8969,
      "longitude": 17.07189,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667395466,
      "ems": null
    },
    {
      "latitude": 51.895752,
      "longitude": 17.068863,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395473,
      "ems": null
    },
    {
      "latitude": 51.895176,
      "longitude": 17.067183,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667395476,
      "ems": null
    },
    {
      "latitude": 51.894665,
      "longitude": 17.065613,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395479,
      "ems": null
    },
    {
      "latitude": 51.893463,
      "longitude": 17.062454,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395485,
      "ems": null
    },
    {
      "latitude": 51.892456,
      "longitude": 17.059614,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395490,
      "ems": null
    },
    {
      "latitude": 51.891174,
      "longitude": 17.056126,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395497,
      "ems": null
    },
    {
      "latitude": 51.89003,
      "longitude": 17.053156,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667395502,
      "ems": null
    },
    {
      "latitude": 51.888748,
      "longitude": 17.049593,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667395509,
      "ems": null
    },
    {
      "latitude": 51.887604,
      "longitude": 17.046253,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667395515,
      "ems": null
    },
    {
      "latitude": 51.886597,
      "longitude": 17.04306,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667395521,
      "ems": null
    },
    {
      "latitude": 51.88554,
      "longitude": 17.039871,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667395527,
      "ems": null
    },
    {
      "latitude": 51.885132,
      "longitude": 17.038311,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667395530,
      "ems": null
    },
    {
      "latitude": 51.884796,
      "longitude": 17.036819,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667395533,
      "ems": null
    },
    {
      "latitude": 51.884518,
      "longitude": 17.034988,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395536,
      "ems": null
    },
    {
      "latitude": 51.884331,
      "longitude": 17.03331,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395539,
      "ems": null
    },
    {
      "latitude": 51.884239,
      "longitude": 17.031555,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395542,
      "ems": null
    },
    {
      "latitude": 51.884144,
      "longitude": 17.029724,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667395545,
      "ems": null
    },
    {
      "latitude": 51.884079,
      "longitude": 17.027918,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667395548,
      "ems": null
    },
    {
      "latitude": 51.883987,
      "longitude": 17.026136,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395551,
      "ems": null
    },
    {
      "latitude": 51.883896,
      "longitude": 17.024578,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667395554,
      "ems": null
    },
    {
      "latitude": 51.883896,
      "longitude": 17.022573,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667395557,
      "ems": null
    },
    {
      "latitude": 51.88385,
      "longitude": 17.020941,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667395560,
      "ems": null
    },
    {
      "latitude": 51.88382,
      "longitude": 17.018967,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667395563,
      "ems": null
    },
    {
      "latitude": 51.883774,
      "longitude": 17.017212,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667395566,
      "ems": null
    },
    {
      "latitude": 51.883541,
      "longitude": 17.013779,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395572,
      "ems": null
    },
    {
      "latitude": 51.883259,
      "longitude": 17.010345,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395578,
      "ems": null
    },
    {
      "latitude": 51.882889,
      "longitude": 17.006531,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395584,
      "ems": null
    },
    {
      "latitude": 51.882702,
      "longitude": 17.004776,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395587,
      "ems": null
    },
    {
      "latitude": 51.882515,
      "longitude": 17.003174,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395590,
      "ems": null
    },
    {
      "latitude": 51.882328,
      "longitude": 17.001343,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395593,
      "ems": null
    },
    {
      "latitude": 51.882111,
      "longitude": 16.999413,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395596,
      "ems": null
    },
    {
      "latitude": 51.88168,
      "longitude": 16.995468,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395603,
      "ems": null
    },
    {
      "latitude": 51.881104,
      "longitude": 16.989614,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395612,
      "ems": null
    },
    {
      "latitude": 51.880653,
      "longitude": 16.98616,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395618,
      "ems": null
    },
    {
      "latitude": 51.880329,
      "longitude": 16.984177,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667395621,
      "ems": null
    },
    {
      "latitude": 51.880047,
      "longitude": 16.982422,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667395624,
      "ems": null
    },
    {
      "latitude": 51.879677,
      "longitude": 16.980438,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667395627,
      "ems": null
    },
    {
      "latitude": 51.879318,
      "longitude": 16.978554,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667395630,
      "ems": null
    },
    {
      "latitude": 51.878933,
      "longitude": 16.976852,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1667395633,
      "ems": null
    },
    {
      "latitude": 51.878513,
      "longitude": 16.975021,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667395636,
      "ems": null
    },
    {
      "latitude": 51.878174,
      "longitude": 16.973284,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667395639,
      "ems": null
    },
    {
      "latitude": 51.877853,
      "longitude": 16.971649,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667395642,
      "ems": null
    },
    {
      "latitude": 51.877396,
      "longitude": 16.968458,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395648,
      "ems": null
    },
    {
      "latitude": 51.877213,
      "longitude": 16.966751,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395651,
      "ems": null
    },
    {
      "latitude": 51.877022,
      "longitude": 16.964951,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395654,
      "ems": null
    },
    {
      "latitude": 51.876801,
      "longitude": 16.963188,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395657,
      "ems": null
    },
    {
      "latitude": 51.876556,
      "longitude": 16.961288,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395660,
      "ems": null
    },
    {
      "latitude": 51.876324,
      "longitude": 16.959686,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395663,
      "ems": null
    },
    {
      "latitude": 51.876068,
      "longitude": 16.957916,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667395666,
      "ems": null
    },
    {
      "latitude": 51.875839,
      "longitude": 16.956209,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395669,
      "ems": null
    },
    {
      "latitude": 51.875656,
      "longitude": 16.954428,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395672,
      "ems": null
    },
    {
      "latitude": 51.875252,
      "longitude": 16.950531,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395678,
      "ems": null
    },
    {
      "latitude": 51.874969,
      "longitude": 16.947079,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395684,
      "ems": null
    },
    {
      "latitude": 51.874882,
      "longitude": 16.945343,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667395687,
      "ems": null
    },
    {
      "latitude": 51.874786,
      "longitude": 16.943436,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395690,
      "ems": null
    },
    {
      "latitude": 51.874741,
      "longitude": 16.941734,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667395693,
      "ems": null
    },
    {
      "latitude": 51.874649,
      "longitude": 16.93973,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667395696,
      "ems": null
    },
    {
      "latitude": 51.874557,
      "longitude": 16.937948,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667395699,
      "ems": null
    },
    {
      "latitude": 51.874374,
      "longitude": 16.934608,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395705,
      "ems": null
    },
    {
      "latitude": 51.874229,
      "longitude": 16.930923,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667395711,
      "ems": null
    },
    {
      "latitude": 51.874184,
      "longitude": 16.927719,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667395717,
      "ems": null
    },
    {
      "latitude": 51.874229,
      "longitude": 16.925735,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667395721,
      "ems": null
    },
    {
      "latitude": 51.874275,
      "longitude": 16.923981,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667395724,
      "ems": null
    },
    {
      "latitude": 51.874371,
      "longitude": 16.922226,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667395727,
      "ems": null
    },
    {
      "latitude": 51.874462,
      "longitude": 16.920624,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667395729,
      "ems": null
    },
    {
      "latitude": 51.874557,
      "longitude": 16.918871,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667395732,
      "ems": null
    },
    {
      "latitude": 51.874695,
      "longitude": 16.916941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1667395735,
      "ems": null
    },
    {
      "latitude": 51.874832,
      "longitude": 16.915085,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667395738,
      "ems": null
    },
    {
      "latitude": 51.874928,
      "longitude": 16.913376,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667395741,
      "ems": null
    },
    {
      "latitude": 51.875069,
      "longitude": 16.911697,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667395744,
      "ems": null
    },
    {
      "latitude": 51.875206,
      "longitude": 16.910172,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667395748,
      "ems": null
    },
    {
      "latitude": 51.875381,
      "longitude": 16.908108,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667395750,
      "ems": null
    },
    {
      "latitude": 51.87561,
      "longitude": 16.90447,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667395756,
      "ems": null
    },
    {
      "latitude": 51.875885,
      "longitude": 16.90061,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667395763,
      "ems": null
    },
    {
      "latitude": 51.87616,
      "longitude": 16.896898,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667395769,
      "ems": null
    },
    {
      "latitude": 51.876369,
      "longitude": 16.893158,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667395775,
      "ems": null
    },
    {
      "latitude": 51.876324,
      "longitude": 16.891632,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667395777,
      "ems": null
    },
    {
      "latitude": 51.876137,
      "longitude": 16.89003,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395780,
      "ems": null
    },
    {
      "latitude": 51.87595,
      "longitude": 16.888123,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395784,
      "ems": null
    },
    {
      "latitude": 51.875748,
      "longitude": 16.886505,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395787,
      "ems": null
    },
    {
      "latitude": 51.875656,
      "longitude": 16.885021,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667395790,
      "ems": null
    },
    {
      "latitude": 51.875473,
      "longitude": 16.882868,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395793,
      "ems": null
    },
    {
      "latitude": 51.875336,
      "longitude": 16.881235,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395796,
      "ems": null
    },
    {
      "latitude": 51.875206,
      "longitude": 16.879501,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395799,
      "ems": null
    },
    {
      "latitude": 51.875015,
      "longitude": 16.877672,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667395802,
      "ems": null
    },
    {
      "latitude": 51.874832,
      "longitude": 16.87604,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1667395805,
      "ems": null
    },
    {
      "latitude": 51.874462,
      "longitude": 16.874237,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667395808,
      "ems": null
    },
    {
      "latitude": 51.874043,
      "longitude": 16.872559,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667395811,
      "ems": null
    },
    {
      "latitude": 51.873413,
      "longitude": 16.870844,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667395814,
      "ems": null
    },
    {
      "latitude": 51.872787,
      "longitude": 16.869202,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667395817,
      "ems": null
    },
    {
      "latitude": 51.872227,
      "longitude": 16.867599,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667395820,
      "ems": null
    },
    {
      "latitude": 51.871857,
      "longitude": 16.866241,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667395822,
      "ems": null
    },
    {
      "latitude": 51.871437,
      "longitude": 16.864471,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667395825,
      "ems": null
    },
    {
      "latitude": 51.871109,
      "longitude": 16.862564,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667395829,
      "ems": null
    },
    {
      "latitude": 51.870598,
      "longitude": 16.859055,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395835,
      "ems": null
    },
    {
      "latitude": 51.870438,
      "longitude": 16.857258,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395838,
      "ems": null
    },
    {
      "latitude": 51.870255,
      "longitude": 16.855476,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667395841,
      "ems": null
    },
    {
      "latitude": 51.870132,
      "longitude": 16.853943,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667395844,
      "ems": null
    },
    {
      "latitude": 51.870041,
      "longitude": 16.851959,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667395847,
      "ems": null
    },
    {
      "latitude": 51.869946,
      "longitude": 16.850204,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395850,
      "ems": null
    },
    {
      "latitude": 51.869843,
      "longitude": 16.848499,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395853,
      "ems": null
    },
    {
      "latitude": 51.869751,
      "longitude": 16.846643,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395856,
      "ems": null
    },
    {
      "latitude": 51.869659,
      "longitude": 16.845085,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395859,
      "ems": null
    },
    {
      "latitude": 51.869526,
      "longitude": 16.843185,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395862,
      "ems": null
    },
    {
      "latitude": 51.869293,
      "longitude": 16.840036,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395868,
      "ems": null
    },
    {
      "latitude": 51.869064,
      "longitude": 16.836548,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667395874,
      "ems": null
    },
    {
      "latitude": 51.868744,
      "longitude": 16.833134,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667395880,
      "ems": null
    },
    {
      "latitude": 51.868423,
      "longitude": 16.829792,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395886,
      "ems": null
    },
    {
      "latitude": 51.868179,
      "longitude": 16.826553,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395892,
      "ems": null
    },
    {
      "latitude": 51.86792,
      "longitude": 16.823187,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667395898,
      "ems": null
    },
    {
      "latitude": 51.86771,
      "longitude": 16.819916,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667395904,
      "ems": null
    },
    {
      "latitude": 51.867432,
      "longitude": 16.816406,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667395910,
      "ems": null
    },
    {
      "latitude": 51.867188,
      "longitude": 16.812943,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667395916,
      "ems": null
    },
    {
      "latitude": 51.866959,
      "longitude": 16.809601,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395922,
      "ems": null
    },
    {
      "latitude": 51.866734,
      "longitude": 16.805954,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667395928,
      "ems": null
    },
    {
      "latitude": 51.866638,
      "longitude": 16.802624,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667395934,
      "ems": null
    },
    {
      "latitude": 51.866547,
      "longitude": 16.800545,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667395937,
      "ems": null
    },
    {
      "latitude": 51.866547,
      "longitude": 16.798782,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667395940,
      "ems": null
    },
    {
      "latitude": 51.866501,
      "longitude": 16.797056,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667395943,
      "ems": null
    },
    {
      "latitude": 51.866455,
      "longitude": 16.795275,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667395946,
      "ems": null
    },
    {
      "latitude": 51.866455,
      "longitude": 16.793344,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667395949,
      "ems": null
    },
    {
      "latitude": 51.866501,
      "longitude": 16.791534,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667395952,
      "ems": null
    },
    {
      "latitude": 51.866501,
      "longitude": 16.78978,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667395955,
      "ems": null
    },
    {
      "latitude": 51.866547,
      "longitude": 16.787851,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667395958,
      "ems": null
    },
    {
      "latitude": 51.866592,
      "longitude": 16.786144,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667395961,
      "ems": null
    },
    {
      "latitude": 51.866642,
      "longitude": 16.78421,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667395964,
      "ems": null
    },
    {
      "latitude": 51.86673,
      "longitude": 16.782581,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667395967,
      "ems": null
    },
    {
      "latitude": 51.866821,
      "longitude": 16.780651,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1667395970,
      "ems": null
    },
    {
      "latitude": 51.866966,
      "longitude": 16.77681,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667395976,
      "ems": null
    },
    {
      "latitude": 51.867096,
      "longitude": 16.773376,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1667395982,
      "ems": null
    },
    {
      "latitude": 51.86734,
      "longitude": 16.769638,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667395988,
      "ems": null
    },
    {
      "latitude": 51.867477,
      "longitude": 16.765976,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667395995,
      "ems": null
    },
    {
      "latitude": 51.867462,
      "longitude": 16.764246,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667395998,
      "ems": null
    },
    {
      "latitude": 51.867416,
      "longitude": 16.762241,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667396001,
      "ems": null
    },
    {
      "latitude": 51.867371,
      "longitude": 16.760609,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667396003,
      "ems": null
    },
    {
      "latitude": 51.86734,
      "longitude": 16.758957,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667396006,
      "ems": null
    },
    {
      "latitude": 51.867294,
      "longitude": 16.756973,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667396010,
      "ems": null
    },
    {
      "latitude": 51.867294,
      "longitude": 16.755295,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667396012,
      "ems": null
    },
    {
      "latitude": 51.867279,
      "longitude": 16.753408,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667396015,
      "ems": null
    },
    {
      "latitude": 51.867279,
      "longitude": 16.749697,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667396022,
      "ems": null
    },
    {
      "latitude": 51.867294,
      "longitude": 16.74614,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667396027,
      "ems": null
    },
    {
      "latitude": 51.867294,
      "longitude": 16.742401,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667396033,
      "ems": null
    },
    {
      "latitude": 51.867153,
      "longitude": 16.738586,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1667396040,
      "ems": null
    },
    {
      "latitude": 51.867012,
      "longitude": 16.735077,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667396045,
      "ems": null
    },
    {
      "latitude": 51.867096,
      "longitude": 16.731585,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667396051,
      "ems": null
    },
    {
      "latitude": 51.867325,
      "longitude": 16.729654,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667396055,
      "ems": null
    },
    {
      "latitude": 51.867737,
      "longitude": 16.727724,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1667396058,
      "ems": null
    },
    {
      "latitude": 51.868149,
      "longitude": 16.726017,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1667396061,
      "ems": null
    },
    {
      "latitude": 51.868271,
      "longitude": 16.725311,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1667396062,
      "ems": null
    },
    {
      "latitude": 51.868504,
      "longitude": 16.724091,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667396064,
      "ems": null
    },
    {
      "latitude": 51.868927,
      "longitude": 16.721266,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1667396068,
      "ems": null
    },
    {
      "latitude": 51.86911,
      "longitude": 16.719208,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1667396072,
      "ems": null
    },
    {
      "latitude": 51.869339,
      "longitude": 16.714289,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667396080,
      "ems": null
    },
    {
      "latitude": 51.869385,
      "longitude": 16.71258,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667396083,
      "ems": null
    },
    {
      "latitude": 51.869385,
      "longitude": 16.710798,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667396086,
      "ems": null
    },
    {
      "latitude": 51.869434,
      "longitude": 16.708908,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667396089,
      "ems": null
    },
    {
      "latitude": 51.869431,
      "longitude": 16.707161,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667396092,
      "ems": null
    },
    {
      "latitude": 51.869385,
      "longitude": 16.705305,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1667396095,
      "ems": null
    },
    {
      "latitude": 51.869339,
      "longitude": 16.704044,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667396097,
      "ems": null
    },
    {
      "latitude": 51.869293,
      "longitude": 16.702347,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667396100,
      "ems": null
    },
    {
      "latitude": 51.869202,
      "longitude": 16.699371,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667396104,
      "ems": null
    },
    {
      "latitude": 51.869156,
      "longitude": 16.698761,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667396107,
      "ems": null
    },
    {
      "latitude": 51.868877,
      "longitude": 16.695938,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667396110,
      "ems": null
    },
    {
      "latitude": 51.868698,
      "longitude": 16.694393,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667396112,
      "ems": null
    },
    {
      "latitude": 51.868458,
      "longitude": 16.692047,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667396116,
      "ems": null
    },
    {
      "latitude": 51.868423,
      "longitude": 16.691795,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667396117,
      "ems": null
    },
    {
      "latitude": 51.86813,
      "longitude": 16.689301,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667396121,
      "ems": null
    },
    {
      "latitude": 51.867874,
      "longitude": 16.687342,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667396124,
      "ems": null
    },
    {
      "latitude": 51.867599,
      "longitude": 16.685709,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667396127,
      "ems": null
    },
    {
      "latitude": 51.867294,
      "longitude": 16.683884,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667396130,
      "ems": null
    },
    {
      "latitude": 51.866966,
      "longitude": 16.681976,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667396133,
      "ems": null
    },
    {
      "latitude": 51.866734,
      "longitude": 16.680298,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1667396136,
      "ems": null
    },
    {
      "latitude": 51.866226,
      "longitude": 16.6768,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667396142,
      "ems": null
    },
    {
      "latitude": 51.865723,
      "longitude": 16.673162,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667396148,
      "ems": null
    },
    {
      "latitude": 51.865311,
      "longitude": 16.6696,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667396154,
      "ems": null
    },
    {
      "latitude": 51.86515,
      "longitude": 16.668091,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1667396157,
      "ems": null
    },
    {
      "latitude": 51.865036,
      "longitude": 16.666409,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667396160,
      "ems": null
    },
    {
      "latitude": 51.864872,
      "longitude": 16.664429,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667396163,
      "ems": null
    },
    {
      "latitude": 51.86478,
      "longitude": 16.662827,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667396166,
      "ems": null
    },
    {
      "latitude": 51.864639,
      "longitude": 16.660919,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1667396169,
      "ems": null
    },
    {
      "latitude": 51.864498,
      "longitude": 16.659393,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1667396172,
      "ems": null
    },
    {
      "latitude": 51.864407,
      "longitude": 16.657639,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667396175,
      "ems": null
    },
    {
      "latitude": 51.864315,
      "longitude": 16.655807,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667396178,
      "ems": null
    },
    {
      "latitude": 51.864212,
      "longitude": 16.65379,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1667396181,
      "ems": null
    },
    {
      "latitude": 51.863895,
      "longitude": 16.650085,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667396187,
      "ems": null
    },
    {
      "latitude": 51.86348,
      "longitude": 16.646515,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667396193,
      "ems": null
    },
    {
      "latitude": 51.863243,
      "longitude": 16.644669,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1667396196,
      "ems": null
    },
    {
      "latitude": 51.862839,
      "longitude": 16.640947,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667396202,
      "ems": null
    },
    {
      "latitude": 51.862656,
      "longitude": 16.639166,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667396205,
      "ems": null
    },
    {
      "latitude": 51.862289,
      "longitude": 16.635824,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667396211,
      "ems": null
    },
    {
      "latitude": 51.861832,
      "longitude": 16.632038,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667396217,
      "ems": null
    },
    {
      "latitude": 51.861328,
      "longitude": 16.628254,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1667396224,
      "ems": null
    },
    {
      "latitude": 51.860962,
      "longitude": 16.626358,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667396227,
      "ems": null
    },
    {
      "latitude": 51.860596,
      "longitude": 16.624689,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667396229,
      "ems": null
    },
    {
      "latitude": 51.860275,
      "longitude": 16.622908,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667396232,
      "ems": null
    },
    {
      "latitude": 51.859909,
      "longitude": 16.621201,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1667396235,
      "ems": null
    },
    {
      "latitude": 51.859497,
      "longitude": 16.619419,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667396239,
      "ems": null
    },
    {
      "latitude": 51.859085,
      "longitude": 16.617786,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1667396242,
      "ems": null
    },
    {
      "latitude": 51.858627,
      "longitude": 16.616154,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1667396245,
      "ems": null
    },
    {
      "latitude": 51.85817,
      "longitude": 16.614609,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396248,
      "ems": null
    },
    {
      "latitude": 51.857658,
      "longitude": 16.613083,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396250,
      "ems": null
    },
    {
      "latitude": 51.857239,
      "longitude": 16.611557,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1667396253,
      "ems": null
    },
    {
      "latitude": 51.856911,
      "longitude": 16.610489,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396255,
      "ems": null
    },
    {
      "latitude": 51.856567,
      "longitude": 16.609249,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396258,
      "ems": null
    },
    {
      "latitude": 51.855793,
      "longitude": 16.60675,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396262,
      "ems": null
    },
    {
      "latitude": 51.855423,
      "longitude": 16.605453,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396265,
      "ems": null
    },
    {
      "latitude": 51.855095,
      "longitude": 16.604385,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667396267,
      "ems": null
    },
    {
      "latitude": 51.853931,
      "longitude": 16.600876,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396274,
      "ems": null
    },
    {
      "latitude": 51.852859,
      "longitude": 16.597521,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667396280,
      "ems": null
    },
    {
      "latitude": 51.851746,
      "longitude": 16.594162,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667396286,
      "ems": null
    },
    {
      "latitude": 51.850582,
      "longitude": 16.591034,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396292,
      "ems": null
    },
    {
      "latitude": 51.84993,
      "longitude": 16.589508,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667396295,
      "ems": null
    },
    {
      "latitude": 51.849232,
      "longitude": 16.58783,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667396298,
      "ems": null
    },
    {
      "latitude": 51.848602,
      "longitude": 16.586535,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667396301,
      "ems": null
    },
    {
      "latitude": 51.847836,
      "longitude": 16.58493,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667396304,
      "ems": null
    },
    {
      "latitude": 51.847229,
      "longitude": 16.583714,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667396306,
      "ems": null
    },
    {
      "latitude": 51.846344,
      "longitude": 16.581955,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667396310,
      "ems": null
    },
    {
      "latitude": 51.845787,
      "longitude": 16.580887,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667396312,
      "ems": null
    },
    {
      "latitude": 51.844856,
      "longitude": 16.578979,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667396316,
      "ems": null
    },
    {
      "latitude": 51.84407,
      "longitude": 16.577478,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667396319,
      "ems": null
    },
    {
      "latitude": 51.843643,
      "longitude": 16.576538,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667396321,
      "ems": null
    },
    {
      "latitude": 51.842575,
      "longitude": 16.574478,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667396325,
      "ems": null
    },
    {
      "latitude": 51.841095,
      "longitude": 16.571688,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667396331,
      "ems": null
    },
    {
      "latitude": 51.839642,
      "longitude": 16.568832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667396336,
      "ems": null
    },
    {
      "latitude": 51.83815,
      "longitude": 16.565475,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667396343,
      "ems": null
    },
    {
      "latitude": 51.8367,
      "longitude": 16.562336,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1667396349,
      "ems": null
    },
    {
      "latitude": 51.835236,
      "longitude": 16.559366,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1667396355,
      "ems": null
    },
    {
      "latitude": 51.833961,
      "longitude": 16.556625,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667396361,
      "ems": null
    },
    {
      "latitude": 51.832626,
      "longitude": 16.553799,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667396366,
      "ems": null
    },
    {
      "latitude": 51.831345,
      "longitude": 16.55068,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1667396373,
      "ems": null
    },
    {
      "latitude": 51.830006,
      "longitude": 16.547318,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396379,
      "ems": null
    },
    {
      "latitude": 51.829514,
      "longitude": 16.546078,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667396382,
      "ems": null
    },
    {
      "latitude": 51.82901,
      "longitude": 16.544743,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667396384,
      "ems": null
    },
    {
      "latitude": 51.82869,
      "longitude": 16.543703,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396387,
      "ems": null
    },
    {
      "latitude": 51.828049,
      "longitude": 16.541138,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667396391,
      "ems": null
    },
    {
      "latitude": 51.827774,
      "longitude": 16.539249,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1667396395,
      "ems": null
    },
    {
      "latitude": 51.827724,
      "longitude": 16.53801,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1667396397,
      "ems": null
    },
    {
      "latitude": 51.827816,
      "longitude": 16.536102,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667396401,
      "ems": null
    },
    {
      "latitude": 51.828049,
      "longitude": 16.534201,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1667396404,
      "ems": null
    },
    {
      "latitude": 51.828094,
      "longitude": 16.532516,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667396407,
      "ems": null
    },
    {
      "latitude": 51.82814,
      "longitude": 16.532049,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1667396408,
      "ems": null
    },
    {
      "latitude": 51.828655,
      "longitude": 16.529388,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667396412,
      "ems": null
    },
    {
      "latitude": 51.829239,
      "longitude": 16.52804,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1667396415,
      "ems": null
    },
    {
      "latitude": 51.830143,
      "longitude": 16.526489,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1667396418,
      "ems": null
    },
    {
      "latitude": 51.831215,
      "longitude": 16.524811,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1667396421,
      "ems": null
    },
    {
      "latitude": 51.832077,
      "longitude": 16.523735,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667396424,
      "ems": null
    },
    {
      "latitude": 51.833263,
      "longitude": 16.522369,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667396428,
      "ems": null
    },
    {
      "latitude": 51.834286,
      "longitude": 16.521301,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1667396431,
      "ems": null
    },
    {
      "latitude": 51.835968,
      "longitude": 16.519207,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667396436,
      "ems": null
    },
    {
      "latitude": 51.836849,
      "longitude": 16.518097,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667396438,
      "ems": null
    },
    {
      "latitude": 51.838432,
      "longitude": 16.51619,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1667396443,
      "ems": null
    },
    {
      "latitude": 51.839493,
      "longitude": 16.5149,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1667396446,
      "ems": null
    },
    {
      "latitude": 51.840481,
      "longitude": 16.513824,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667396449,
      "ems": null
    },
    {
      "latitude": 51.84127,
      "longitude": 16.513138,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1667396452,
      "ems": null
    },
    {
      "latitude": 51.842789,
      "longitude": 16.512154,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667396455,
      "ems": null
    },
    {
      "latitude": 51.844109,
      "longitude": 16.511841,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1667396458,
      "ems": null
    },
    {
      "latitude": 51.845413,
      "longitude": 16.511917,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1667396462,
      "ems": null
    },
    {
      "latitude": 51.846672,
      "longitude": 16.512375,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1667396464,
      "ems": null
    },
    {
      "latitude": 51.847824,
      "longitude": 16.513268,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1667396467,
      "ems": null
    },
    {
      "latitude": 51.848904,
      "longitude": 16.514511,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667396470,
      "ems": null
    },
    {
      "latitude": 51.84993,
      "longitude": 16.516113,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667396473,
      "ems": null
    },
    {
      "latitude": 51.850628,
      "longitude": 16.517563,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667396476,
      "ems": null
    },
    {
      "latitude": 51.851578,
      "longitude": 16.519503,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667396479,
      "ems": null
    },
    {
      "latitude": 51.852356,
      "longitude": 16.521284,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667396482,
      "ems": null
    },
    {
      "latitude": 51.853046,
      "longitude": 16.522827,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667396485,
      "ems": null
    },
    {
      "latitude": 51.853638,
      "longitude": 16.524179,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667396488,
      "ems": null
    },
    {
      "latitude": 51.854462,
      "longitude": 16.526035,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667396491,
      "ems": null
    },
    {
      "latitude": 51.855095,
      "longitude": 16.527557,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667396494,
      "ems": null
    },
    {
      "latitude": 51.855515,
      "longitude": 16.528397,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667396496,
      "ems": null
    },
    {
      "latitude": 51.8564,
      "longitude": 16.530838,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667396500,
      "ems": null
    },
    {
      "latitude": 51.856796,
      "longitude": 16.53294,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667396503,
      "ems": null
    },
    {
      "latitude": 51.856934,
      "longitude": 16.535686,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667396508,
      "ems": null
    },
    {
      "latitude": 51.856586,
      "longitude": 16.539383,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1667396513,
      "ems": null
    },
    {
      "latitude": 51.855656,
      "longitude": 16.542892,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1667396518,
      "ems": null
    },
    {
      "latitude": 51.854782,
      "longitude": 16.544891,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1667396522,
      "ems": null
    },
    {
      "latitude": 51.853977,
      "longitude": 16.546326,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1667396525,
      "ems": null
    },
    {
      "latitude": 51.85318,
      "longitude": 16.547638,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667396527,
      "ems": null
    },
    {
      "latitude": 51.852211,
      "longitude": 16.54892,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1667396530,
      "ems": null
    },
    {
      "latitude": 51.85112,
      "longitude": 16.550013,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1667396534,
      "ems": null
    },
    {
      "latitude": 51.850159,
      "longitude": 16.55068,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667396536,
      "ems": null
    },
    {
      "latitude": 51.848923,
      "longitude": 16.551126,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1667396540,
      "ems": null
    },
    {
      "latitude": 51.848251,
      "longitude": 16.551132,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667396542,
      "ems": null
    },
    {
      "latitude": 51.846344,
      "longitude": 16.550293,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667396549,
      "ems": null
    },
    {
      "latitude": 51.8456,
      "longitude": 16.549301,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1667396552,
      "ems": null
    },
    {
      "latitude": 51.845135,
      "longitude": 16.548233,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667396555,
      "ems": null
    },
    {
      "latitude": 51.844669,
      "longitude": 16.547089,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1667396558,
      "ems": null
    },
    {
      "latitude": 51.844254,
      "longitude": 16.546152,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667396561,
      "ems": null
    },
    {
      "latitude": 51.843887,
      "longitude": 16.545187,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667396563,
      "ems": null
    },
    {
      "latitude": 51.843597,
      "longitude": 16.544342,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396566,
      "ems": null
    },
    {
      "latitude": 51.843201,
      "longitude": 16.54311,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667396570,
      "ems": null
    },
    {
      "latitude": 51.842834,
      "longitude": 16.54207,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396573,
      "ems": null
    },
    {
      "latitude": 51.842514,
      "longitude": 16.541327,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396575,
      "ems": null
    },
    {
      "latitude": 51.842056,
      "longitude": 16.540215,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667396578,
      "ems": null
    },
    {
      "latitude": 51.84169,
      "longitude": 16.53923,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667396582,
      "ems": null
    },
    {
      "latitude": 51.841003,
      "longitude": 16.537617,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396588,
      "ems": null
    },
    {
      "latitude": 51.840107,
      "longitude": 16.53511,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1667396594,
      "ems": null
    },
    {
      "latitude": 51.839733,
      "longitude": 16.534195,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667396597,
      "ems": null
    },
    {
      "latitude": 51.83913,
      "longitude": 16.532745,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396601,
      "ems": null
    },
    {
      "latitude": 51.830154,
      "longitude": 16.511709,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1667396662,
      "ems": null
    },
    {
      "latitude": 51.828979,
      "longitude": 16.508865,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1667396669,
      "ems": null
    },
    {
      "latitude": 51.828377,
      "longitude": 16.507111,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1667396673,
      "ems": null
    },
    {
      "latitude": 51.827866,
      "longitude": 16.505177,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667396678,
      "ems": null
    },
    {
      "latitude": 51.827583,
      "longitude": 16.50383,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1667396681,
      "ems": null
    },
    {
      "latitude": 51.827362,
      "longitude": 16.50243,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1667396684,
      "ems": null
    },
    {
      "latitude": 51.827316,
      "longitude": 16.501242,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1667396687,
      "ems": null
    },
    {
      "latitude": 51.827362,
      "longitude": 16.499832,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1667396690,
      "ems": null
    },
    {
      "latitude": 51.827679,
      "longitude": 16.49826,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1667396693,
      "ems": null
    },
    {
      "latitude": 51.828094,
      "longitude": 16.496788,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1667396696,
      "ems": null
    },
    {
      "latitude": 51.828701,
      "longitude": 16.495438,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1667396699,
      "ems": null
    },
    {
      "latitude": 51.829285,
      "longitude": 16.494413,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1667396702,
      "ems": null
    },
    {
      "latitude": 51.829773,
      "longitude": 16.49353,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667396704,
      "ems": null
    },
    {
      "latitude": 51.830933,
      "longitude": 16.492186,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1667396708,
      "ems": null
    },
    {
      "latitude": 51.831867,
      "longitude": 16.491318,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1667396711,
      "ems": null
    },
    {
      "latitude": 51.83289,
      "longitude": 16.490707,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1667396714,
      "ems": null
    },
    {
      "latitude": 51.833637,
      "longitude": 16.490402,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1667396716,
      "ems": null
    },
    {
      "latitude": 51.835266,
      "longitude": 16.489944,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1667396720,
      "ems": null
    },
    {
      "latitude": 51.836243,
      "longitude": 16.489811,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1667396723,
      "ems": null
    },
    {
      "latitude": 51.837826,
      "longitude": 16.489716,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1667396726,
      "ems": null
    },
    {
      "latitude": 51.839127,
      "longitude": 16.490032,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1667396729,
      "ems": null
    },
    {
      "latitude": 51.840431,
      "longitude": 16.490707,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1667396732,
      "ems": null
    },
    {
      "latitude": 51.84137,
      "longitude": 16.491369,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1667396735,
      "ems": null
    },
    {
      "latitude": 51.842606,
      "longitude": 16.492483,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1667396738,
      "ems": null
    },
    {
      "latitude": 51.844666,
      "longitude": 16.495378,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1667396744,
      "ems": null
    },
    {
      "latitude": 51.846039,
      "longitude": 16.498272,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667396749,
      "ems": null
    },
    {
      "latitude": 51.847275,
      "longitude": 16.501167,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667396753,
      "ems": null
    },
    {
      "latitude": 51.84819,
      "longitude": 16.503246,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667396756,
      "ems": null
    },
    {
      "latitude": 51.849045,
      "longitude": 16.505203,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667396759,
      "ems": null
    },
    {
      "latitude": 51.849743,
      "longitude": 16.506958,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667396762,
      "ems": null
    },
    {
      "latitude": 51.850067,
      "longitude": 16.507721,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667396763,
      "ems": null
    },
    {
      "latitude": 51.85231,
      "longitude": 16.513119,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667396771,
      "ems": null
    },
    {
      "latitude": 51.854691,
      "longitude": 16.518686,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667396780,
      "ems": null
    },
    {
      "latitude": 51.85643,
      "longitude": 16.522844,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667396786,
      "ems": null
    },
    {
      "latitude": 51.857891,
      "longitude": 16.52626,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667396792,
      "ems": null
    },
    {
      "latitude": 51.859085,
      "longitude": 16.529228,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667396797,
      "ems": null
    },
    {
      "latitude": 51.859772,
      "longitude": 16.531305,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667396800,
      "ems": null
    },
    {
      "latitude": 51.860229,
      "longitude": 16.533607,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1667396803,
      "ems": null
    },
    {
      "latitude": 51.86031,
      "longitude": 16.537018,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1667396808,
      "ems": null
    },
    {
      "latitude": 51.859985,
      "longitude": 16.539001,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1667396811,
      "ems": null
    },
    {
      "latitude": 51.85947,
      "longitude": 16.540527,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1667396813,
      "ems": null
    },
    {
      "latitude": 51.858719,
      "longitude": 16.542145,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1667396816,
      "ems": null
    },
    {
      "latitude": 51.857803,
      "longitude": 16.543554,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667396820,
      "ems": null
    },
    {
      "latitude": 51.856911,
      "longitude": 16.544724,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667396823,
      "ems": null
    },
    {
      "latitude": 51.856064,
      "longitude": 16.545856,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667396826,
      "ems": null
    },
    {
      "latitude": 51.855145,
      "longitude": 16.547012,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667396829,
      "ems": null
    },
    {
      "latitude": 51.854351,
      "longitude": 16.548233,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667396832,
      "ems": null
    },
    {
      "latitude": 51.853512,
      "longitude": 16.549301,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667396834,
      "ems": null
    },
    {
      "latitude": 51.852535,
      "longitude": 16.550369,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667396838,
      "ems": null
    },
    {
      "latitude": 51.851559,
      "longitude": 16.551132,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1667396841,
      "ems": null
    },
    {
      "latitude": 51.850582,
      "longitude": 16.55159,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1667396844,
      "ems": null
    },
    {
      "latitude": 51.849697,
      "longitude": 16.551743,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1667396846,
      "ems": null
    },
    {
      "latitude": 51.848694,
      "longitude": 16.55172,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667396850,
      "ems": null
    },
    {
      "latitude": 51.84774,
      "longitude": 16.551285,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667396853,
      "ems": null
    },
    {
      "latitude": 51.847042,
      "longitude": 16.550751,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667396855,
      "ems": null
    },
    {
      "latitude": 51.846176,
      "longitude": 16.549864,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1667396859,
      "ems": null
    },
    {
      "latitude": 51.845581,
      "longitude": 16.548973,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1667396862,
      "ems": null
    },
    {
      "latitude": 51.845123,
      "longitude": 16.548231,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1667396865,
      "ems": null
    },
    {
      "latitude": 51.844624,
      "longitude": 16.547012,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396868,
      "ems": null
    },
    {
      "latitude": 51.844208,
      "longitude": 16.545929,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667396871,
      "ems": null
    },
    {
      "latitude": 51.843796,
      "longitude": 16.544817,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667396874,
      "ems": null
    },
    {
      "latitude": 51.84343,
      "longitude": 16.543777,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667396877,
      "ems": null
    },
    {
      "latitude": 51.843086,
      "longitude": 16.542816,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667396880,
      "ems": null
    },
    {
      "latitude": 51.842651,
      "longitude": 16.541698,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667396883,
      "ems": null
    },
    {
      "latitude": 51.842388,
      "longitude": 16.540985,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667396886,
      "ems": null
    },
    {
      "latitude": 51.841877,
      "longitude": 16.539688,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1667396889,
      "ems": null
    },
    {
      "latitude": 51.841507,
      "longitude": 16.538803,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396892,
      "ems": null
    },
    {
      "latitude": 51.841095,
      "longitude": 16.537689,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667396895,
      "ems": null
    },
    {
      "latitude": 51.840294,
      "longitude": 16.535568,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667396901,
      "ems": null
    },
    {
      "latitude": 51.839447,
      "longitude": 16.533459,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1667396907,
      "ems": null
    },
    {
      "latitude": 51.830475,
      "longitude": 16.51156,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667396970,
      "ems": null
    },
    {
      "latitude": 51.829926,
      "longitude": 16.509853,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667396975,
      "ems": null
    },
    {
      "latitude": 51.82933,
      "longitude": 16.5077,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1667396981,
      "ems": null
    },
    {
      "latitude": 51.82869,
      "longitude": 16.50473,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667396987,
      "ems": null
    },
    {
      "latitude": 51.828323,
      "longitude": 16.502949,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1667396991,
      "ems": null
    },
    {
      "latitude": 51.828236,
      "longitude": 16.501694,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1667396994,
      "ems": null
    },
    {
      "latitude": 51.828232,
      "longitude": 16.5005,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1667396997,
      "ems": null
    },
    {
      "latitude": 51.828377,
      "longitude": 16.4991,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1667397000,
      "ems": null
    },
    {
      "latitude": 51.828655,
      "longitude": 16.497955,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667397003,
      "ems": null
    },
    {
      "latitude": 51.828701,
      "longitude": 16.497726,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667397005,
      "ems": null
    },
    {
      "latitude": 51.829727,
      "longitude": 16.495667,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667397009,
      "ems": null
    },
    {
      "latitude": 51.829926,
      "longitude": 16.495378,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1667397011,
      "ems": null
    },
    {
      "latitude": 51.831306,
      "longitude": 16.494141,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1667397016,
      "ems": null
    },
    {
      "latitude": 51.832993,
      "longitude": 16.493448,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1667397021,
      "ems": null
    },
    {
      "latitude": 51.834148,
      "longitude": 16.493301,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1667397024,
      "ems": null
    },
    {
      "latitude": 51.835281,
      "longitude": 16.493374,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1667397027,
      "ems": null
    },
    {
      "latitude": 51.836243,
      "longitude": 16.493597,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1667397030,
      "ems": null
    },
    {
      "latitude": 51.837685,
      "longitude": 16.494293,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1667397034,
      "ems": null
    },
    {
      "latitude": 51.838531,
      "longitude": 16.494783,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1667397036,
      "ems": null
    },
    {
      "latitude": 51.838989,
      "longitude": 16.495132,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1667397039,
      "ems": null
    },
    {
      "latitude": 51.840729,
      "longitude": 16.496937,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1667397042,
      "ems": null
    },
    {
      "latitude": 51.841873,
      "longitude": 16.498793,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667397046,
      "ems": null
    },
    {
      "latitude": 51.84304,
      "longitude": 16.501236,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667397050,
      "ems": null
    },
    {
      "latitude": 51.843796,
      "longitude": 16.503098,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667397053,
      "ems": null
    },
    {
      "latitude": 51.84462,
      "longitude": 16.505251,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667397056,
      "ems": null
    },
    {
      "latitude": 51.845306,
      "longitude": 16.507256,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667397059,
      "ems": null
    },
    {
      "latitude": 51.846039,
      "longitude": 16.509481,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667397063,
      "ems": null
    },
    {
      "latitude": 51.846531,
      "longitude": 16.511154,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667397065,
      "ems": null
    },
    {
      "latitude": 51.847321,
      "longitude": 16.513596,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667397069,
      "ems": null
    },
    {
      "latitude": 51.84774,
      "longitude": 16.514969,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667397071,
      "ems": null
    },
    {
      "latitude": 51.848347,
      "longitude": 16.517029,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667397074,
      "ems": null
    },
    {
      "latitude": 51.84874,
      "longitude": 16.518391,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667397076,
      "ems": null
    },
    {
      "latitude": 51.849289,
      "longitude": 16.520393,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667397079,
      "ems": null
    },
    {
      "latitude": 51.849884,
      "longitude": 16.522621,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667397083,
      "ems": null
    },
    {
      "latitude": 51.850582,
      "longitude": 16.524887,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667397086,
      "ems": null
    },
    {
      "latitude": 51.852024,
      "longitude": 16.529922,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667397094,
      "ems": null
    },
    {
      "latitude": 51.853142,
      "longitude": 16.53389,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667397100,
      "ems": null
    },
    {
      "latitude": 51.854187,
      "longitude": 16.537838,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667397106,
      "ems": null
    },
    {
      "latitude": 51.855423,
      "longitude": 16.541519,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667397112,
      "ems": null
    },
    {
      "latitude": 51.856773,
      "longitude": 16.54541,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667397118,
      "ems": null
    },
    {
      "latitude": 51.857983,
      "longitude": 16.549225,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667397124,
      "ems": null
    },
    {
      "latitude": 51.859192,
      "longitude": 16.553497,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667397130,
      "ems": null
    },
    {
      "latitude": 51.859726,
      "longitude": 16.555878,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667397133,
      "ems": null
    },
    {
      "latitude": 51.860077,
      "longitude": 16.558075,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667397136,
      "ems": null
    },
    {
      "latitude": 51.860321,
      "longitude": 16.560627,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667397139,
      "ems": null
    },
    {
      "latitude": 51.860367,
      "longitude": 16.563078,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667397142,
      "ems": null
    },
    {
      "latitude": 51.860275,
      "longitude": 16.565378,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667397145,
      "ems": null
    },
    {
      "latitude": 51.859909,
      "longitude": 16.56805,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1667397148,
      "ems": null
    },
    {
      "latitude": 51.85947,
      "longitude": 16.570358,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1667397151,
      "ems": null
    },
    {
      "latitude": 51.858959,
      "longitude": 16.572723,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1667397154,
      "ems": null
    },
    {
      "latitude": 51.858402,
      "longitude": 16.574936,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1667397157,
      "ems": null
    },
    {
      "latitude": 51.85775,
      "longitude": 16.577377,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1667397160,
      "ems": null
    },
    {
      "latitude": 51.857006,
      "longitude": 16.579819,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1667397163,
      "ems": null
    },
    {
      "latitude": 51.8564,
      "longitude": 16.58165,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1667397165,
      "ems": null
    },
    {
      "latitude": 51.85561,
      "longitude": 16.583862,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1667397169,
      "ems": null
    },
    {
      "latitude": 51.854736,
      "longitude": 16.586386,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1667397172,
      "ems": null
    },
    {
      "latitude": 51.85384,
      "longitude": 16.588669,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1667397175,
      "ems": null
    },
    {
      "latitude": 51.853001,
      "longitude": 16.590958,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1667397178,
      "ems": null
    },
    {
      "latitude": 51.852036,
      "longitude": 16.59329,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1667397181,
      "ems": null
    },
    {
      "latitude": 51.851166,
      "longitude": 16.595221,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1667397184,
      "ems": null
    },
    {
      "latitude": 51.849976,
      "longitude": 16.597672,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1667397187,
      "ems": null
    },
    {
      "latitude": 51.849045,
      "longitude": 16.599579,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1667397190,
      "ems": null
    },
    {
      "latitude": 51.847961,
      "longitude": 16.60153,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1667397193,
      "ems": null
    },
    {
      "latitude": 51.846718,
      "longitude": 16.603622,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667397196,
      "ems": null
    },
    {
      "latitude": 51.845627,
      "longitude": 16.605389,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397199,
      "ems": null
    },
    {
      "latitude": 51.844482,
      "longitude": 16.607098,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397202,
      "ems": null
    },
    {
      "latitude": 51.843227,
      "longitude": 16.608963,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397205,
      "ems": null
    },
    {
      "latitude": 51.841969,
      "longitude": 16.610641,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667397208,
      "ems": null
    },
    {
      "latitude": 51.840759,
      "longitude": 16.612396,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667397211,
      "ems": null
    },
    {
      "latitude": 51.839401,
      "longitude": 16.614223,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397214,
      "ems": null
    },
    {
      "latitude": 51.838337,
      "longitude": 16.615753,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397217,
      "ems": null
    },
    {
      "latitude": 51.837112,
      "longitude": 16.617638,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397220,
      "ems": null
    },
    {
      "latitude": 51.836014,
      "longitude": 16.619196,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397223,
      "ems": null
    },
    {
      "latitude": 51.834961,
      "longitude": 16.620756,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397226,
      "ems": null
    },
    {
      "latitude": 51.832901,
      "longitude": 16.623724,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397232,
      "ems": null
    },
    {
      "latitude": 51.83075,
      "longitude": 16.626816,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667397238,
      "ems": null
    },
    {
      "latitude": 51.828369,
      "longitude": 16.630035,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667397244,
      "ems": null
    },
    {
      "latitude": 51.826309,
      "longitude": 16.632854,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397250,
      "ems": null
    },
    {
      "latitude": 51.823929,
      "longitude": 16.636864,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1667397256,
      "ems": null
    },
    {
      "latitude": 51.822876,
      "longitude": 16.63872,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667397259,
      "ems": null
    },
    {
      "latitude": 51.82045,
      "longitude": 16.642654,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397265,
      "ems": null
    },
    {
      "latitude": 51.818321,
      "longitude": 16.646118,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397271,
      "ems": null
    },
    {
      "latitude": 51.815994,
      "longitude": 16.649628,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397277,
      "ems": null
    },
    {
      "latitude": 51.813572,
      "longitude": 16.653442,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397284,
      "ems": null
    },
    {
      "latitude": 51.811432,
      "longitude": 16.656799,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397289,
      "ems": null
    },
    {
      "latitude": 51.809288,
      "longitude": 16.660233,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1667397295,
      "ems": null
    },
    {
      "latitude": 51.807037,
      "longitude": 16.663885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1667397301,
      "ems": null
    },
    {
      "latitude": 51.804703,
      "longitude": 16.667744,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667397308,
      "ems": null
    },
    {
      "latitude": 51.80254,
      "longitude": 16.671295,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397314,
      "ems": null
    },
    {
      "latitude": 51.800304,
      "longitude": 16.674881,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397320,
      "ems": null
    },
    {
      "latitude": 51.798069,
      "longitude": 16.678467,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397326,
      "ems": null
    },
    {
      "latitude": 51.795883,
      "longitude": 16.681824,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397331,
      "ems": null
    },
    {
      "latitude": 51.793625,
      "longitude": 16.685337,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397337,
      "ems": null
    },
    {
      "latitude": 51.790924,
      "longitude": 16.689272,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397344,
      "ems": null
    },
    {
      "latitude": 51.787643,
      "longitude": 16.693802,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397353,
      "ems": null
    },
    {
      "latitude": 51.785248,
      "longitude": 16.69714,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667397359,
      "ems": null
    },
    {
      "latitude": 51.782753,
      "longitude": 16.700439,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667397365,
      "ems": null
    },
    {
      "latitude": 51.780472,
      "longitude": 16.70372,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397371,
      "ems": null
    },
    {
      "latitude": 51.778107,
      "longitude": 16.707458,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397377,
      "ems": null
    },
    {
      "latitude": 51.775818,
      "longitude": 16.711121,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397383,
      "ems": null
    },
    {
      "latitude": 51.773582,
      "longitude": 16.714706,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397389,
      "ems": null
    },
    {
      "latitude": 51.772373,
      "longitude": 16.716614,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397392,
      "ems": null
    },
    {
      "latitude": 51.769913,
      "longitude": 16.720449,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397398,
      "ems": null
    },
    {
      "latitude": 51.767765,
      "longitude": 16.72348,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667397404,
      "ems": null
    },
    {
      "latitude": 51.765388,
      "longitude": 16.726761,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397410,
      "ems": null
    },
    {
      "latitude": 51.762863,
      "longitude": 16.730396,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397416,
      "ems": null
    },
    {
      "latitude": 51.760574,
      "longitude": 16.733662,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397422,
      "ems": null
    },
    {
      "latitude": 51.758083,
      "longitude": 16.737213,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397428,
      "ems": null
    },
    {
      "latitude": 51.755722,
      "longitude": 16.740566,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397434,
      "ems": null
    },
    {
      "latitude": 51.753342,
      "longitude": 16.74398,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397440,
      "ems": null
    },
    {
      "latitude": 51.750912,
      "longitude": 16.74736,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667397446,
      "ems": null
    },
    {
      "latitude": 51.748489,
      "longitude": 16.750662,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667397452,
      "ems": null
    },
    {
      "latitude": 51.746246,
      "longitude": 16.753927,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397458,
      "ems": null
    },
    {
      "latitude": 51.743958,
      "longitude": 16.757343,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397464,
      "ems": null
    },
    {
      "latitude": 51.741508,
      "longitude": 16.760559,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1667397470,
      "ems": null
    },
    {
      "latitude": 51.73909,
      "longitude": 16.763535,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1667397476,
      "ems": null
    },
    {
      "latitude": 51.736668,
      "longitude": 16.76651,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667397482,
      "ems": null
    },
    {
      "latitude": 51.734341,
      "longitude": 16.769562,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667397488,
      "ems": null
    },
    {
      "latitude": 51.733036,
      "longitude": 16.771164,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667397491,
      "ems": null
    },
    {
      "latitude": 51.730637,
      "longitude": 16.774342,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667397497,
      "ems": null
    },
    {
      "latitude": 51.728256,
      "longitude": 16.77746,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667397503,
      "ems": null
    },
    {
      "latitude": 51.725876,
      "longitude": 16.780577,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667397509,
      "ems": null
    },
    {
      "latitude": 51.72345,
      "longitude": 16.78414,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667397515,
      "ems": null
    },
    {
      "latitude": 51.720978,
      "longitude": 16.787567,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397522,
      "ems": null
    },
    {
      "latitude": 51.719879,
      "longitude": 16.789337,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667397525,
      "ems": null
    },
    {
      "latitude": 51.718792,
      "longitude": 16.791153,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667397527,
      "ems": null
    },
    {
      "latitude": 51.717682,
      "longitude": 16.793049,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1667397530,
      "ems": null
    },
    {
      "latitude": 51.716583,
      "longitude": 16.794903,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667397533,
      "ems": null
    },
    {
      "latitude": 51.715534,
      "longitude": 16.796646,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1667397536,
      "ems": null
    },
    {
      "latitude": 51.713345,
      "longitude": 16.800232,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397543,
      "ems": null
    },
    {
      "latitude": 51.712322,
      "longitude": 16.801758,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397546,
      "ems": null
    },
    {
      "latitude": 51.71022,
      "longitude": 16.805073,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397551,
      "ems": null
    },
    {
      "latitude": 51.707932,
      "longitude": 16.808489,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667397557,
      "ems": null
    },
    {
      "latitude": 51.705711,
      "longitude": 16.811829,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397564,
      "ems": null
    },
    {
      "latitude": 51.703663,
      "longitude": 16.815109,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1667397569,
      "ems": null
    },
    {
      "latitude": 51.701523,
      "longitude": 16.818659,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1667397576,
      "ems": null
    },
    {
      "latitude": 51.699463,
      "longitude": 16.822147,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1667397581,
      "ems": null
    },
    {
      "latitude": 51.697266,
      "longitude": 16.826008,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1667397588,
      "ems": null
    },
    {
      "latitude": 51.695095,
      "longitude": 16.829529,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667397594,
      "ems": null
    },
    {
      "latitude": 51.692909,
      "longitude": 16.832733,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667397600,
      "ems": null
    },
    {
      "latitude": 51.69072,
      "longitude": 16.836176,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1667397606,
      "ems": null
    },
    {
      "latitude": 51.688766,
      "longitude": 16.8396,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1667397612,
      "ems": null
    },
    {
      "latitude": 51.68692,
      "longitude": 16.843006,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1667397617,
      "ems": null
    },
    {
      "latitude": 51.684669,
      "longitude": 16.847076,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1667397624,
      "ems": null
    },
    {
      "latitude": 51.683533,
      "longitude": 16.849092,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1667397627,
      "ems": null
    },
    {
      "latitude": 51.681595,
      "longitude": 16.852417,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667397633,
      "ems": null
    },
    {
      "latitude": 51.679504,
      "longitude": 16.855997,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1667397639,
      "ems": null
    },
    {
      "latitude": 51.67749,
      "longitude": 16.859486,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1667397645,
      "ems": null
    },
    {
      "latitude": 51.675404,
      "longitude": 16.862946,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667397651,
      "ems": null
    },
    {
      "latitude": 51.674377,
      "longitude": 16.86446,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667397654,
      "ems": null
    },
    {
      "latitude": 51.673264,
      "longitude": 16.865845,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1667397657,
      "ems": null
    },
    {
      "latitude": 51.6721,
      "longitude": 16.867065,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1667397660,
      "ems": null
    },
    {
      "latitude": 51.670898,
      "longitude": 16.868467,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667397663,
      "ems": null
    },
    {
      "latitude": 51.669632,
      "longitude": 16.869812,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667397666,
      "ems": null
    },
    {
      "latitude": 51.668472,
      "longitude": 16.871065,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1667397669,
      "ems": null
    },
    {
      "latitude": 51.667191,
      "longitude": 16.872625,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1667397672,
      "ems": null
    },
    {
      "latitude": 51.666046,
      "longitude": 16.873812,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1667397675,
      "ems": null
    },
    {
      "latitude": 51.664719,
      "longitude": 16.875223,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667397678,
      "ems": null
    },
    {
      "latitude": 51.663528,
      "longitude": 16.876263,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1667397681,
      "ems": null
    },
    {
      "latitude": 51.66209,
      "longitude": 16.877289,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1667397684,
      "ems": null
    },
    {
      "latitude": 51.660919,
      "longitude": 16.878119,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1667397687,
      "ems": null
    },
    {
      "latitude": 51.659576,
      "longitude": 16.878891,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1667397690,
      "ems": null
    },
    {
      "latitude": 51.658272,
      "longitude": 16.879578,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667397693,
      "ems": null
    },
    {
      "latitude": 51.656891,
      "longitude": 16.880121,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1667397696,
      "ems": null
    },
    {
      "latitude": 51.655525,
      "longitude": 16.880569,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1667397699,
      "ems": null
    },
    {
      "latitude": 51.654282,
      "longitude": 16.881086,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1667397702,
      "ems": null
    },
    {
      "latitude": 51.653011,
      "longitude": 16.881409,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667397705,
      "ems": null
    },
    {
      "latitude": 51.651478,
      "longitude": 16.88179,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667397708,
      "ems": null
    },
    {
      "latitude": 51.650208,
      "longitude": 16.882051,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667397711,
      "ems": null
    },
    {
      "latitude": 51.649799,
      "longitude": 16.882172,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667397712,
      "ems": null
    },
    {
      "latitude": 51.648193,
      "longitude": 16.882498,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1667397716,
      "ems": null
    },
    {
      "latitude": 51.647003,
      "longitude": 16.882647,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667397719,
      "ems": null
    },
    {
      "latitude": 51.645538,
      "longitude": 16.882868,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667397722,
      "ems": null
    },
    {
      "latitude": 51.644356,
      "longitude": 16.883011,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667397724,
      "ems": null
    },
    {
      "latitude": 51.642929,
      "longitude": 16.883165,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667397727,
      "ems": null
    },
    {
      "latitude": 51.641747,
      "longitude": 16.88324,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667397731,
      "ems": null
    },
    {
      "latitude": 51.640072,
      "longitude": 16.88324,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667397734,
      "ems": null
    },
    {
      "latitude": 51.639141,
      "longitude": 16.88324,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667397736,
      "ems": null
    },
    {
      "latitude": 51.637756,
      "longitude": 16.88324,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1667397738,
      "ems": null
    },
    {
      "latitude": 51.636349,
      "longitude": 16.88324,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667397742,
      "ems": null
    },
    {
      "latitude": 51.63501,
      "longitude": 16.88324,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667397744,
      "ems": null
    },
    {
      "latitude": 51.63382,
      "longitude": 16.883165,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667397748,
      "ems": null
    },
    {
      "latitude": 51.632156,
      "longitude": 16.882935,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667397751,
      "ems": null
    },
    {
      "latitude": 51.630936,
      "longitude": 16.882572,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1667397753,
      "ems": null
    },
    {
      "latitude": 51.629642,
      "longitude": 16.882019,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667397757,
      "ems": null
    },
    {
      "latitude": 51.628387,
      "longitude": 16.881485,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1667397760,
      "ems": null
    },
    {
      "latitude": 51.627178,
      "longitude": 16.880951,
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1667397763,
      "ems": null
    },
    {
      "latitude": 51.625809,
      "longitude": 16.88027,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667397766,
      "ems": null
    },
    {
      "latitude": 51.624802,
      "longitude": 16.87973,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667397768,
      "ems": null
    },
    {
      "latitude": 51.62336,
      "longitude": 16.878815,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1667397772,
      "ems": null
    },
    {
      "latitude": 51.622334,
      "longitude": 16.878281,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667397775,
      "ems": null
    },
    {
      "latitude": 51.621002,
      "longitude": 16.877523,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667397778,
      "ems": null
    },
    {
      "latitude": 51.619774,
      "longitude": 16.876831,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667397781,
      "ems": null
    },
    {
      "latitude": 51.618843,
      "longitude": 16.876297,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667397783,
      "ems": null
    },
    {
      "latitude": 51.616192,
      "longitude": 16.875305,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667397790,
      "ems": null
    },
    {
      "latitude": 51.614914,
      "longitude": 16.875,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667397793,
      "ems": null
    },
    {
      "latitude": 51.613678,
      "longitude": 16.874702,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667397796,
      "ems": null
    },
    {
      "latitude": 51.612305,
      "longitude": 16.874481,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667397799,
      "ems": null
    },
    {
      "latitude": 51.610931,
      "longitude": 16.874332,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397802,
      "ems": null
    },
    {
      "latitude": 51.609581,
      "longitude": 16.874084,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667397805,
      "ems": null
    },
    {
      "latitude": 51.608139,
      "longitude": 16.873886,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397808,
      "ems": null
    },
    {
      "latitude": 51.606903,
      "longitude": 16.873812,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667397811,
      "ems": null
    },
    {
      "latitude": 51.605392,
      "longitude": 16.873663,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667397814,
      "ems": null
    },
    {
      "latitude": 51.60434,
      "longitude": 16.87359,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397816,
      "ems": null
    },
    {
      "latitude": 51.601807,
      "longitude": 16.873245,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397822,
      "ems": null
    },
    {
      "latitude": 51.59906,
      "longitude": 16.87294,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667397829,
      "ems": null
    },
    {
      "latitude": 51.596218,
      "longitude": 16.872635,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397835,
      "ems": null
    },
    {
      "latitude": 51.593521,
      "longitude": 16.872253,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397841,
      "ems": null
    },
    {
      "latitude": 51.590836,
      "longitude": 16.871956,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397846,
      "ems": null
    },
    {
      "latitude": 51.587173,
      "longitude": 16.871363,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667397855,
      "ems": null
    },
    {
      "latitude": 51.584442,
      "longitude": 16.871185,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667397861,
      "ems": null
    },
    {
      "latitude": 51.583054,
      "longitude": 16.871214,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667397864,
      "ems": null
    },
    {
      "latitude": 51.581955,
      "longitude": 16.871288,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1667397866,
      "ems": null
    },
    {
      "latitude": 51.578949,
      "longitude": 16.871262,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667397873,
      "ems": null
    },
    {
      "latitude": 51.576157,
      "longitude": 16.871185,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667397879,
      "ems": null
    },
    {
      "latitude": 51.573532,
      "longitude": 16.870916,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397885,
      "ems": null
    },
    {
      "latitude": 51.570831,
      "longitude": 16.870621,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397891,
      "ems": null
    },
    {
      "latitude": 51.5695,
      "longitude": 16.870422,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667397894,
      "ems": null
    },
    {
      "latitude": 51.56815,
      "longitude": 16.870193,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667397897,
      "ems": null
    },
    {
      "latitude": 51.566849,
      "longitude": 16.870026,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667397900,
      "ems": null
    },
    {
      "latitude": 51.565567,
      "longitude": 16.86973,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667397903,
      "ems": null
    },
    {
      "latitude": 51.564285,
      "longitude": 16.869507,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667397906,
      "ems": null
    },
    {
      "latitude": 51.562889,
      "longitude": 16.869202,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667397909,
      "ems": null
    },
    {
      "latitude": 51.561813,
      "longitude": 16.868914,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667397912,
      "ems": null
    },
    {
      "latitude": 51.559162,
      "longitude": 16.868286,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667397918,
      "ems": null
    },
    {
      "latitude": 51.556686,
      "longitude": 16.867725,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667397924,
      "ems": null
    },
    {
      "latitude": 51.554184,
      "longitude": 16.867065,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667397930,
      "ems": null
    },
    {
      "latitude": 51.551788,
      "longitude": 16.866537,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667397936,
      "ems": null
    },
    {
      "latitude": 51.549202,
      "longitude": 16.865845,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1667397943,
      "ems": null
    },
    {
      "latitude": 51.54678,
      "longitude": 16.865311,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667397948,
      "ems": null
    },
    {
      "latitude": 51.54451,
      "longitude": 16.86483,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1667397955,
      "ems": null
    },
    {
      "latitude": 51.541763,
      "longitude": 16.864386,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667397961,
      "ems": null
    },
    {
      "latitude": 51.540497,
      "longitude": 16.864319,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667397964,
      "ems": null
    },
    {
      "latitude": 51.5392,
      "longitude": 16.864386,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667397966,
      "ems": null
    },
    {
      "latitude": 51.537872,
      "longitude": 16.864681,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667397969,
      "ems": null
    },
    {
      "latitude": 51.536446,
      "longitude": 16.865158,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1667397973,
      "ems": null
    },
    {
      "latitude": 51.535172,
      "longitude": 16.865721,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1667397976,
      "ems": null
    },
    {
      "latitude": 51.534492,
      "longitude": 16.866074,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1667397979,
      "ems": null
    },
    {
      "latitude": 51.532303,
      "longitude": 16.867218,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1667397982,
      "ems": null
    },
    {
      "latitude": 51.530952,
      "longitude": 16.867905,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1667397985,
      "ems": null
    },
    {
      "latitude": 51.529541,
      "longitude": 16.86869,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1667397988,
      "ems": null
    },
    {
      "latitude": 51.528393,
      "longitude": 16.869354,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1667397991,
      "ems": null
    },
    {
      "latitude": 51.526951,
      "longitude": 16.87027,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1667397994,
      "ems": null
    },
    {
      "latitude": 51.525505,
      "longitude": 16.871185,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1667397997,
      "ems": null
    },
    {
      "latitude": 51.524204,
      "longitude": 16.872101,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398000,
      "ems": null
    },
    {
      "latitude": 51.522858,
      "longitude": 16.873144,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398003,
      "ems": null
    },
    {
      "latitude": 51.521503,
      "longitude": 16.874161,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398006,
      "ems": null
    },
    {
      "latitude": 51.518921,
      "longitude": 16.875519,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1667398012,
      "ems": null
    },
    {
      "latitude": 51.517361,
      "longitude": 16.875992,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667398015,
      "ems": null
    },
    {
      "latitude": 51.516037,
      "longitude": 16.87641,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1667398018,
      "ems": null
    },
    {
      "latitude": 51.514801,
      "longitude": 16.876707,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667398021,
      "ems": null
    },
    {
      "latitude": 51.513401,
      "longitude": 16.876984,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1667398024,
      "ems": null
    },
    {
      "latitude": 51.512146,
      "longitude": 16.877365,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1667398027,
      "ems": null
    },
    {
      "latitude": 51.510544,
      "longitude": 16.878265,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1667398030,
      "ems": null
    },
    {
      "latitude": 51.508003,
      "longitude": 16.880035,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1667398036,
      "ems": null
    },
    {
      "latitude": 51.50647,
      "longitude": 16.881235,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398039,
      "ems": null
    },
    {
      "latitude": 51.505142,
      "longitude": 16.8822,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667398042,
      "ems": null
    },
    {
      "latitude": 51.50386,
      "longitude": 16.88324,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667398045,
      "ems": null
    },
    {
      "latitude": 51.502762,
      "longitude": 16.884205,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1667398048,
      "ems": null
    },
    {
      "latitude": 51.501392,
      "longitude": 16.885452,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667398051,
      "ems": null
    },
    {
      "latitude": 51.500137,
      "longitude": 16.886749,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1667398054,
      "ems": null
    },
    {
      "latitude": 51.498962,
      "longitude": 16.888065,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667398057,
      "ems": null
    },
    {
      "latitude": 51.497715,
      "longitude": 16.88942,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667398060,
      "ems": null
    },
    {
      "latitude": 51.496552,
      "longitude": 16.890793,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1667398063,
      "ems": null
    },
    {
      "latitude": 51.495346,
      "longitude": 16.892221,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1667398066,
      "ems": null
    },
    {
      "latitude": 51.494202,
      "longitude": 16.893633,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1667398070,
      "ems": null
    },
    {
      "latitude": 51.493011,
      "longitude": 16.895042,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1667398072,
      "ems": null
    },
    {
      "latitude": 51.491821,
      "longitude": 16.896454,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1667398075,
      "ems": null
    },
    {
      "latitude": 51.490593,
      "longitude": 16.897888,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1667398079,
      "ems": null
    },
    {
      "latitude": 51.488216,
      "longitude": 16.900177,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1667398084,
      "ems": null
    },
    {
      "latitude": 51.486923,
      "longitude": 16.901056,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398087,
      "ems": null
    },
    {
      "latitude": 51.485687,
      "longitude": 16.901649,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398090,
      "ems": null
    },
    {
      "latitude": 51.484356,
      "longitude": 16.902084,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667398094,
      "ems": null
    },
    {
      "latitude": 51.48317,
      "longitude": 16.902391,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1667398096,
      "ems": null
    },
    {
      "latitude": 51.481888,
      "longitude": 16.90254,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667398100,
      "ems": null
    },
    {
      "latitude": 51.480629,
      "longitude": 16.902618,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1667398103,
      "ems": null
    },
    {
      "latitude": 51.479511,
      "longitude": 16.902466,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667398105,
      "ems": null
    },
    {
      "latitude": 51.4785,
      "longitude": 16.902168,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667398108,
      "ems": null
    },
    {
      "latitude": 51.477402,
      "longitude": 16.901575,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667398112,
      "ems": null
    },
    {
      "latitude": 51.476349,
      "longitude": 16.900864,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667398115,
      "ems": null
    },
    {
      "latitude": 51.475388,
      "longitude": 16.900166,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398117,
      "ems": null
    },
    {
      "latitude": 51.474251,
      "longitude": 16.899338,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398121,
      "ems": null
    },
    {
      "latitude": 51.47319,
      "longitude": 16.898531,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398124,
      "ems": null
    },
    {
      "latitude": 51.472412,
      "longitude": 16.897863,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667398126,
      "ems": null
    },
    {
      "latitude": 51.47118,
      "longitude": 16.896896,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667398130,
      "ems": null
    },
    {
      "latitude": 51.470528,
      "longitude": 16.896286,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398132,
      "ems": null
    },
    {
      "latitude": 51.469299,
      "longitude": 16.895266,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667398136,
      "ems": null
    },
    {
      "latitude": 51.468201,
      "longitude": 16.894379,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667398139,
      "ems": null
    },
    {
      "latitude": 51.466232,
      "longitude": 16.892963,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398145,
      "ems": null
    },
    {
      "latitude": 51.464245,
      "longitude": 16.891479,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398151,
      "ems": null
    },
    {
      "latitude": 51.462112,
      "longitude": 16.889847,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667398157,
      "ems": null
    },
    {
      "latitude": 51.460102,
      "longitude": 16.888123,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667398163,
      "ems": null
    },
    {
      "latitude": 51.458054,
      "longitude": 16.88652,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667398169,
      "ems": null
    },
    {
      "latitude": 51.455959,
      "longitude": 16.884918,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398175,
      "ems": null
    },
    {
      "latitude": 51.454514,
      "longitude": 16.883926,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398179,
      "ems": null
    },
    {
      "latitude": 51.451035,
      "longitude": 16.881235,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667398188,
      "ems": null
    },
    {
      "latitude": 51.448929,
      "longitude": 16.879654,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667398194,
      "ems": null
    },
    {
      "latitude": 51.446732,
      "longitude": 16.878119,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667398200,
      "ems": null
    },
    {
      "latitude": 51.444763,
      "longitude": 16.87693,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1667398206,
      "ems": null
    },
    {
      "latitude": 51.442291,
      "longitude": 16.875149,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667398213,
      "ems": null
    },
    {
      "latitude": 51.440456,
      "longitude": 16.873627,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667398218,
      "ems": null
    },
    {
      "latitude": 51.438454,
      "longitude": 16.871872,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398224,
      "ems": null
    },
    {
      "latitude": 51.437336,
      "longitude": 16.87088,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398228,
      "ems": null
    },
    {
      "latitude": 51.436386,
      "longitude": 16.870026,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667398231,
      "ems": null
    },
    {
      "latitude": 51.435471,
      "longitude": 16.869209,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667398233,
      "ems": null
    },
    {
      "latitude": 51.434464,
      "longitude": 16.868244,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667398237,
      "ems": null
    },
    {
      "latitude": 51.433548,
      "longitude": 16.867428,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398239,
      "ems": null
    },
    {
      "latitude": 51.43161,
      "longitude": 16.865768,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398246,
      "ems": null
    },
    {
      "latitude": 51.429611,
      "longitude": 16.863791,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667398252,
      "ems": null
    },
    {
      "latitude": 51.427608,
      "longitude": 16.861954,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398258,
      "ems": null
    },
    {
      "latitude": 51.425652,
      "longitude": 16.860199,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667398264,
      "ems": null
    },
    {
      "latitude": 51.423744,
      "longitude": 16.858521,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667398270,
      "ems": null
    },
    {
      "latitude": 51.421967,
      "longitude": 16.856813,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667398276,
      "ems": null
    },
    {
      "latitude": 51.419834,
      "longitude": 16.854935,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667398282,
      "ems": null
    },
    {
      "latitude": 51.417984,
      "longitude": 16.853474,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398288,
      "ems": null
    },
    {
      "latitude": 51.416016,
      "longitude": 16.851654,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667398294,
      "ems": null
    },
    {
      "latitude": 51.414001,
      "longitude": 16.849834,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667398300,
      "ems": null
    },
    {
      "latitude": 51.412125,
      "longitude": 16.848202,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667398306,
      "ems": null
    },
    {
      "latitude": 51.410011,
      "longitude": 16.846466,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398312,
      "ems": null
    },
    {
      "latitude": 51.407917,
      "longitude": 16.844711,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667398318,
      "ems": null
    },
    {
      "latitude": 51.406998,
      "longitude": 16.84412,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667398321,
      "ems": null
    },
    {
      "latitude": 51.404846,
      "longitude": 16.842413,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667398327,
      "ems": null
    },
    {
      "latitude": 51.40274,
      "longitude": 16.840704,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1667398333,
      "ems": null
    },
    {
      "latitude": 51.400681,
      "longitude": 16.838923,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398339,
      "ems": null
    },
    {
      "latitude": 51.398804,
      "longitude": 16.83729,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398345,
      "ems": null
    },
    {
      "latitude": 51.397812,
      "longitude": 16.836472,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398348,
      "ems": null
    },
    {
      "latitude": 51.395859,
      "longitude": 16.834793,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398354,
      "ems": null
    },
    {
      "latitude": 51.393951,
      "longitude": 16.833355,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1667398360,
      "ems": null
    },
    {
      "latitude": 51.391994,
      "longitude": 16.831894,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667398366,
      "ems": null
    },
    {
      "latitude": 51.390041,
      "longitude": 16.830444,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667398372,
      "ems": null
    },
    {
      "latitude": 51.388039,
      "longitude": 16.828842,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667398378,
      "ems": null
    },
    {
      "latitude": 51.386124,
      "longitude": 16.827343,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667398384,
      "ems": null
    },
    {
      "latitude": 51.384064,
      "longitude": 16.825785,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398390,
      "ems": null
    },
    {
      "latitude": 51.38205,
      "longitude": 16.824078,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398396,
      "ems": null
    },
    {
      "latitude": 51.381149,
      "longitude": 16.823273,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667398399,
      "ems": null
    },
    {
      "latitude": 51.379192,
      "longitude": 16.821594,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667398405,
      "ems": null
    },
    {
      "latitude": 51.377335,
      "longitude": 16.819845,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1667398411,
      "ems": null
    },
    {
      "latitude": 51.376419,
      "longitude": 16.81888,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1667398414,
      "ems": null
    },
    {
      "latitude": 51.375916,
      "longitude": 16.818436,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667398416,
      "ems": null
    },
    {
      "latitude": 51.375412,
      "longitude": 16.817915,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667398417,
      "ems": null
    },
    {
      "latitude": 51.37326,
      "longitude": 16.815763,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1667398425,
      "ems": null
    },
    {
      "latitude": 51.371521,
      "longitude": 16.814203,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667398430,
      "ems": null
    },
    {
      "latitude": 51.369278,
      "longitude": 16.812286,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667398437,
      "ems": null
    },
    {
      "latitude": 51.368393,
      "longitude": 16.8116,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667398440,
      "ems": null
    },
    {
      "latitude": 51.366253,
      "longitude": 16.809692,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1667398446,
      "ems": null
    },
    {
      "latitude": 51.364243,
      "longitude": 16.807894,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1667398452,
      "ems": null
    },
    {
      "latitude": 51.363132,
      "longitude": 16.807175,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667398455,
      "ems": null
    },
    {
      "latitude": 51.361038,
      "longitude": 16.80542,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1667398461,
      "ems": null
    },
    {
      "latitude": 51.359127,
      "longitude": 16.803589,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1667398467,
      "ems": null
    },
    {
      "latitude": 51.358292,
      "longitude": 16.80275,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1667398470,
      "ems": null
    },
    {
      "latitude": 51.357174,
      "longitude": 16.801605,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1667398473,
      "ems": null
    },
    {
      "latitude": 51.356277,
      "longitude": 16.800545,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1667398476,
      "ems": null
    },
    {
      "latitude": 51.355312,
      "longitude": 16.799469,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1667398479,
      "ems": null
    },
    {
      "latitude": 51.353119,
      "longitude": 16.798021,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667398485,
      "ems": null
    },
    {
      "latitude": 51.352055,
      "longitude": 16.797791,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667398488,
      "ems": null
    },
    {
      "latitude": 51.350704,
      "longitude": 16.797791,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667398491,
      "ems": null
    },
    {
      "latitude": 51.349167,
      "longitude": 16.798248,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1667398494,
      "ems": null
    },
    {
      "latitude": 51.3479,
      "longitude": 16.798838,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1667398497,
      "ems": null
    },
    {
      "latitude": 51.346527,
      "longitude": 16.799505,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667398500,
      "ems": null
    },
    {
      "latitude": 51.34549,
      "longitude": 16.799927,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398503,
      "ems": null
    },
    {
      "latitude": 51.343964,
      "longitude": 16.800619,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1667398506,
      "ems": null
    },
    {
      "latitude": 51.34259,
      "longitude": 16.801214,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667398509,
      "ems": null
    },
    {
      "latitude": 51.341301,
      "longitude": 16.801834,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667398512,
      "ems": null
    },
    {
      "latitude": 51.340027,
      "longitude": 16.802401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1667398515,
      "ems": null
    },
    {
      "latitude": 51.338562,
      "longitude": 16.802996,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1667398518,
      "ems": null
    },
    {
      "latitude": 51.337234,
      "longitude": 16.803514,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1667398521,
      "ems": null
    },
    {
      "latitude": 51.336365,
      "longitude": 16.803886,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667398524,
      "ems": null
    },
    {
      "latitude": 51.333294,
      "longitude": 16.805191,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398530,
      "ems": null
    },
    {
      "latitude": 51.331013,
      "longitude": 16.806259,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398536,
      "ems": null
    },
    {
      "latitude": 51.328354,
      "longitude": 16.807449,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398542,
      "ems": null
    },
    {
      "latitude": 51.325657,
      "longitude": 16.808701,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398548,
      "ems": null
    },
    {
      "latitude": 51.323143,
      "longitude": 16.809845,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398554,
      "ems": null
    },
    {
      "latitude": 51.320675,
      "longitude": 16.810989,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "squawk": "7000",
      "timestamp": 1667398560,
      "ems": null
    },
    {
      "latitude": 51.3181,
      "longitude": 16.812347,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1667398566,
      "ems": null
    },
    {
      "latitude": 51.315556,
      "longitude": 16.813736,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1667398572,
      "ems": null
    },
    {
      "latitude": 51.312836,
      "longitude": 16.815022,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667398578,
      "ems": null
    },
    {
      "latitude": 51.310154,
      "longitude": 16.816177,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1667398585,
      "ems": null
    },
    {
      "latitude": 51.307526,
      "longitude": 16.817173,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1667398590,
      "ems": null
    },
    {
      "latitude": 51.304897,
      "longitude": 16.818237,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398597,
      "ems": null
    },
    {
      "latitude": 51.302429,
      "longitude": 16.819382,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1667398602,
      "ems": null
    },
    {
      "latitude": 51.299915,
      "longitude": 16.820526,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667398608,
      "ems": null
    },
    {
      "latitude": 51.297318,
      "longitude": 16.821924,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1667398614,
      "ems": null
    },
    {
      "latitude": 51.29599,
      "longitude": 16.822741,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1667398618,
      "ems": null
    },
    {
      "latitude": 51.294754,
      "longitude": 16.823408,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1667398620,
      "ems": null
    },
    {
      "latitude": 51.293518,
      "longitude": 16.824224,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398623,
      "ems": null
    },
    {
      "latitude": 51.292236,
      "longitude": 16.825043,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398626,
      "ems": null
    },
    {
      "latitude": 51.290909,
      "longitude": 16.825933,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1667398630,
      "ems": null
    },
    {
      "latitude": 51.289856,
      "longitude": 16.826675,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1667398632,
      "ems": null
    },
    {
      "latitude": 51.288509,
      "longitude": 16.827698,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1667398636,
      "ems": null
    },
    {
      "latitude": 51.287205,
      "longitude": 16.82869,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398639,
      "ems": null
    },
    {
      "latitude": 51.28624,
      "longitude": 16.829422,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398641,
      "ems": null
    },
    {
      "latitude": 51.283493,
      "longitude": 16.831203,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398648,
      "ems": null
    },
    {
      "latitude": 51.280876,
      "longitude": 16.832886,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398654,
      "ems": null
    },
    {
      "latitude": 51.278267,
      "longitude": 16.834641,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1667398660,
      "ems": null
    },
    {
      "latitude": 51.275616,
      "longitude": 16.836395,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1667398666,
      "ems": null
    },
    {
      "latitude": 51.272964,
      "longitude": 16.838329,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667398672,
      "ems": null
    },
    {
      "latitude": 51.270355,
      "longitude": 16.840286,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398678,
      "ems": null
    },
    {
      "latitude": 51.267792,
      "longitude": 16.842264,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1667398684,
      "ems": null
    },
    {
      "latitude": 51.265141,
      "longitude": 16.844254,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398690,
      "ems": null
    },
    {
      "latitude": 51.262531,
      "longitude": 16.846161,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398696,
      "ems": null
    },
    {
      "latitude": 51.259872,
      "longitude": 16.848276,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1667398702,
      "ems": null
    },
    {
      "latitude": 51.257504,
      "longitude": 16.850433,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1667398708,
      "ems": null
    },
    {
      "latitude": 51.256157,
      "longitude": 16.852036,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1667398711,
      "ems": null
    },
    {
      "latitude": 51.25502,
      "longitude": 16.853474,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1667398714,
      "ems": null
    },
    {
      "latitude": 51.253922,
      "longitude": 16.855181,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1667398717,
      "ems": null
    },
    {
      "latitude": 51.252777,
      "longitude": 16.856813,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667398720,
      "ems": null
    },
    {
      "latitude": 51.25164,
      "longitude": 16.858597,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667398723,
      "ems": null
    },
    {
      "latitude": 51.250477,
      "longitude": 16.860352,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667398726,
      "ems": null
    },
    {
      "latitude": 51.24939,
      "longitude": 16.862009,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1667398729,
      "ems": null
    },
    {
      "latitude": 51.248287,
      "longitude": 16.863785,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1667398732,
      "ems": null
    },
    {
      "latitude": 51.247192,
      "longitude": 16.865276,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667398735,
      "ems": null
    },
    {
      "latitude": 51.244843,
      "longitude": 16.86821,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1667398741,
      "ems": null
    },
    {
      "latitude": 51.242607,
      "longitude": 16.87088,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667398747,
      "ems": null
    },
    {
      "latitude": 51.241489,
      "longitude": 16.872406,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667398750,
      "ems": null
    },
    {
      "latitude": 51.239502,
      "longitude": 16.875074,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667398756,
      "ems": null
    },
    {
      "latitude": 51.238358,
      "longitude": 16.876558,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667398758,
      "ems": null
    },
    {
      "latitude": 51.236046,
      "longitude": 16.879654,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1667398764,
      "ems": null
    },
    {
      "latitude": 51.233826,
      "longitude": 16.882647,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1667398770,
      "ems": null
    },
    {
      "latitude": 51.231388,
      "longitude": 16.885757,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1667398777,
      "ems": null
    },
    {
      "latitude": 51.229065,
      "longitude": 16.888659,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1667398783,
      "ems": null
    },
    {
      "latitude": 51.227943,
      "longitude": 16.889877,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667398785,
      "ems": null
    },
    {
      "latitude": 51.225479,
      "longitude": 16.892624,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667398792,
      "ems": null
    },
    {
      "latitude": 51.224258,
      "longitude": 16.893854,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1667398795,
      "ems": null
    },
    {
      "latitude": 51.223068,
      "longitude": 16.895117,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1667398798,
      "ems": null
    },
    {
      "latitude": 51.221924,
      "longitude": 16.896231,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1667398800,
      "ems": null
    },
    {
      "latitude": 51.220734,
      "longitude": 16.897419,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667398804,
      "ems": null
    },
    {
      "latitude": 51.21936,
      "longitude": 16.898754,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667398807,
      "ems": null
    },
    {
      "latitude": 51.218262,
      "longitude": 16.899719,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667398810,
      "ems": null
    },
    {
      "latitude": 51.217007,
      "longitude": 16.900864,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1667398813,
      "ems": null
    },
    {
      "latitude": 51.215702,
      "longitude": 16.902008,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667398816,
      "ems": null
    },
    {
      "latitude": 51.214539,
      "longitude": 16.903,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667398819,
      "ems": null
    },
    {
      "latitude": 51.212025,
      "longitude": 16.905289,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667398825,
      "ems": null
    },
    {
      "latitude": 51.209557,
      "longitude": 16.907425,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667398830,
      "ems": null
    },
    {
      "latitude": 51.207092,
      "longitude": 16.909666,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667398836,
      "ems": null
    },
    {
      "latitude": 51.204388,
      "longitude": 16.912003,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1667398843,
      "ems": null
    },
    {
      "latitude": 51.201874,
      "longitude": 16.914291,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1667398849,
      "ems": null
    },
    {
      "latitude": 51.199547,
      "longitude": 16.91658,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1667398854,
      "ems": null
    },
    {
      "latitude": 51.197113,
      "longitude": 16.919168,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1667398861,
      "ems": null
    },
    {
      "latitude": 51.195786,
      "longitude": 16.920578,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667398864,
      "ems": null
    },
    {
      "latitude": 51.194733,
      "longitude": 16.921766,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1667398866,
      "ems": null
    },
    {
      "latitude": 51.193542,
      "longitude": 16.923065,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1667398869,
      "ems": null
    },
    {
      "latitude": 51.190887,
      "longitude": 16.925922,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1667398876,
      "ems": null
    },
    {
      "latitude": 51.188553,
      "longitude": 16.928299,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667398881,
      "ems": null
    },
    {
      "latitude": 51.186001,
      "longitude": 16.930695,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1667398887,
      "ems": null
    },
    {
      "latitude": 51.183578,
      "longitude": 16.93306,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1667398893,
      "ems": null
    },
    {
      "latitude": 51.182144,
      "longitude": 16.934385,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1667398897,
      "ems": null
    },
    {
      "latitude": 51.180954,
      "longitude": 16.935499,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1667398900,
      "ems": null
    },
    {
      "latitude": 51.179623,
      "longitude": 16.936646,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1667398903,
      "ems": null
    },
    {
      "latitude": 51.178253,
      "longitude": 16.937725,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398906,
      "ems": null
    },
    {
      "latitude": 51.177017,
      "longitude": 16.938629,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1667398909,
      "ems": null
    },
    {
      "latitude": 51.175735,
      "longitude": 16.939434,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398911,
      "ems": null
    },
    {
      "latitude": 51.174458,
      "longitude": 16.940155,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1667398915,
      "ems": null
    },
    {
      "latitude": 51.173107,
      "longitude": 16.940842,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1667398917,
      "ems": null
    },
    {
      "latitude": 51.171661,
      "longitude": 16.941681,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1667398921,
      "ems": null
    },
    {
      "latitude": 51.17038,
      "longitude": 16.942402,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1667398923,
      "ems": null
    },
    {
      "latitude": 51.169006,
      "longitude": 16.943218,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398926,
      "ems": null
    },
    {
      "latitude": 51.16766,
      "longitude": 16.944046,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398930,
      "ems": null
    },
    {
      "latitude": 51.166626,
      "longitude": 16.944704,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1667398932,
      "ems": null
    },
    {
      "latitude": 51.163609,
      "longitude": 16.946793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398939,
      "ems": null
    },
    {
      "latitude": 51.162445,
      "longitude": 16.947708,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667398941,
      "ems": null
    },
    {
      "latitude": 51.161087,
      "longitude": 16.948786,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1667398945,
      "ems": null
    },
    {
      "latitude": 51.159668,
      "longitude": 16.9499,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1667398948,
      "ems": null
    },
    {
      "latitude": 51.156967,
      "longitude": 16.951681,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1667398954,
      "ems": null
    },
    {
      "latitude": 51.15564,
      "longitude": 16.952351,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1667398957,
      "ems": null
    },
    {
      "latitude": 51.154312,
      "longitude": 16.952944,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1667398960,
      "ems": null
    },
    {
      "latitude": 51.153168,
      "longitude": 16.953388,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1667398962,
      "ems": null
    },
    {
      "latitude": 51.151657,
      "longitude": 16.953983,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1667398966,
      "ems": null
    },
    {
      "latitude": 51.15033,
      "longitude": 16.954428,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1667398969,
      "ems": null
    },
    {
      "latitude": 51.14904,
      "longitude": 16.954803,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1667398972,
      "ems": null
    },
    {
      "latitude": 51.14772,
      "longitude": 16.95517,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1667398975,
      "ems": null
    },
    {
      "latitude": 51.14621,
      "longitude": 16.955542,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1667398978,
      "ems": null
    },
    {
      "latitude": 51.144894,
      "longitude": 16.955795,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1667398981,
      "ems": null
    },
    {
      "latitude": 51.143417,
      "longitude": 16.95606,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667398984,
      "ems": null
    },
    {
      "latitude": 51.142334,
      "longitude": 16.956177,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667398986,
      "ems": null
    },
    {
      "latitude": 51.140625,
      "longitude": 16.956432,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667398990,
      "ems": null
    },
    {
      "latitude": 51.139122,
      "longitude": 16.956635,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1667398993,
      "ems": null
    },
    {
      "latitude": 51.137634,
      "longitude": 16.956863,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667398996,
      "ems": null
    },
    {
      "latitude": 51.136276,
      "longitude": 16.9571,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667398999,
      "ems": null
    },
    {
      "latitude": 51.134701,
      "longitude": 16.957321,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1667399002,
      "ems": null
    },
    {
      "latitude": 51.133026,
      "longitude": 16.957474,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1667399005,
      "ems": null
    },
    {
      "latitude": 51.13147,
      "longitude": 16.957621,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667399008,
      "ems": null
    },
    {
      "latitude": 51.128647,
      "longitude": 16.957779,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1667399014,
      "ems": null
    },
    {
      "latitude": 51.12561,
      "longitude": 16.957844,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1667399020,
      "ems": null
    },
    {
      "latitude": 51.124226,
      "longitude": 16.957779,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1667399023,
      "ems": null
    },
    {
      "latitude": 51.122921,
      "longitude": 16.957626,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667399026,
      "ems": null
    },
    {
      "latitude": 51.121433,
      "longitude": 16.957474,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667399029,
      "ems": null
    },
    {
      "latitude": 51.120224,
      "longitude": 16.957397,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667399032,
      "ems": null
    },
    {
      "latitude": 51.118874,
      "longitude": 16.957245,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1667399035,
      "ems": null
    },
    {
      "latitude": 51.117737,
      "longitude": 16.9571,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1667399038,
      "ems": null
    },
    {
      "latitude": 51.116638,
      "longitude": 16.956951,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667399041,
      "ems": null
    },
    {
      "latitude": 51.115242,
      "longitude": 16.956711,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1667399044,
      "ems": null
    },
    {
      "latitude": 51.114079,
      "longitude": 16.956482,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1667399047,
      "ems": null
    },
    {
      "latitude": 51.113159,
      "longitude": 16.956284,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1667399050,
      "ems": null
    },
    {
      "latitude": 51.112061,
      "longitude": 16.955988,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1667399053,
      "ems": null
    },
    {
      "latitude": 51.111053,
      "longitude": 16.955542,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1667399056,
      "ems": null
    },
    {
      "latitude": 51.110027,
      "longitude": 16.955032,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667399059,
      "ems": null
    },
    {
      "latitude": 51.108856,
      "longitude": 16.954353,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667399062,
      "ems": null
    },
    {
      "latitude": 51.108032,
      "longitude": 16.953835,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1667399065,
      "ems": null
    },
    {
      "latitude": 51.107094,
      "longitude": 16.953278,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1667399068,
      "ems": null
    },
    {
      "latitude": 51.106026,
      "longitude": 16.952667,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667399071,
      "ems": null
    },
    {
      "latitude": 51.105103,
      "longitude": 16.952202,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667399074,
      "ems": null
    },
    {
      "latitude": 51.104069,
      "longitude": 16.951675,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1667399077,
      "ems": null
    },
    {
      "latitude": 51.102951,
      "longitude": 16.951088,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1667399080,
      "ems": null
    },
    {
      "latitude": 51.102127,
      "longitude": 16.950642,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1667399083,
      "ems": null
    },
    {
      "latitude": 51.101166,
      "longitude": 16.950048,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1667399086,
      "ems": null
    },
    {
      "latitude": 51.099289,
      "longitude": 16.949083,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1667399092,
      "ems": null
    },
    {
      "latitude": 51.098202,
      "longitude": 16.948624,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1667399095,
      "ems": null
    },
    {
      "latitude": 51.096359,
      "longitude": 16.947525,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1667399101,
      "ems": null
    },
    {
      "latitude": 51.094528,
      "longitude": 16.946262,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1667399107,
      "ems": null
    },
    {
      "latitude": 51.093643,
      "longitude": 16.945572,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1667399110,
      "ems": null
    },
    {
      "latitude": 51.092804,
      "longitude": 16.944885,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1667399113,
      "ems": null
    },
    {
      "latitude": 51.09201,
      "longitude": 16.943962,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1667399116,
      "ems": null
    },
    {
      "latitude": 51.091362,
      "longitude": 16.942902,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1667399119,
      "ems": null
    },
    {
      "latitude": 51.090866,
      "longitude": 16.941734,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1667399122,
      "ems": null
    },
    {
      "latitude": 51.090382,
      "longitude": 16.94046,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1667399125,
      "ems": null
    },
    {
      "latitude": 51.089951,
      "longitude": 16.93936,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1667399128,
      "ems": null
    },
    {
      "latitude": 51.089497,
      "longitude": 16.938171,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1667399131,
      "ems": null
    },
    {
      "latitude": 51.089172,
      "longitude": 16.937103,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1667399134,
      "ems": null
    },
    {
      "latitude": 51.088715,
      "longitude": 16.935425,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1667399137,
      "ems": null
    },
    {
      "latitude": 51.088531,
      "longitude": 16.934162,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1667399140,
      "ems": null
    },
    {
      "latitude": 51.088474,
      "longitude": 16.932602,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1667399143,
      "ems": null
    },
    {
      "latitude": 51.088615,
      "longitude": 16.931229,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1667399146,
      "ems": null
    },
    {
      "latitude": 51.088989,
      "longitude": 16.929932,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667399149,
      "ems": null
    },
    {
      "latitude": 51.089451,
      "longitude": 16.928558,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1667399152,
      "ems": null
    },
    {
      "latitude": 51.089813,
      "longitude": 16.927483,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1667399155,
      "ems": null
    },
    {
      "latitude": 51.090317,
      "longitude": 16.925997,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667399158,
      "ems": null
    },
    {
      "latitude": 51.090637,
      "longitude": 16.92481,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399161,
      "ems": null
    },
    {
      "latitude": 51.091095,
      "longitude": 16.923399,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667399165,
      "ems": null
    },
    {
      "latitude": 51.091461,
      "longitude": 16.922211,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667399167,
      "ems": null
    },
    {
      "latitude": 51.091782,
      "longitude": 16.921173,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667399170,
      "ems": null
    },
    {
      "latitude": 51.092152,
      "longitude": 16.920166,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667399173,
      "ems": null
    },
    {
      "latitude": 51.092476,
      "longitude": 16.919022,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1667399176,
      "ems": null
    },
    {
      "latitude": 51.092743,
      "longitude": 16.917906,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1667399179,
      "ems": null
    },
    {
      "latitude": 51.092991,
      "longitude": 16.916885,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667399182,
      "ems": null
    },
    {
      "latitude": 51.093689,
      "longitude": 16.914749,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667399188,
      "ems": null
    },
    {
      "latitude": 51.094387,
      "longitude": 16.912766,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399194,
      "ems": null
    },
    {
      "latitude": 51.09499,
      "longitude": 16.910706,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399201,
      "ems": null
    },
    {
      "latitude": 51.095596,
      "longitude": 16.908722,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399207,
      "ems": null
    },
    {
      "latitude": 51.095856,
      "longitude": 16.90781,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667399209,
      "ems": null
    },
    {
      "latitude": 51.096527,
      "longitude": 16.90567,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667399216,
      "ems": null
    },
    {
      "latitude": 51.097275,
      "longitude": 16.903282,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667399222,
      "ems": null
    },
    {
      "latitude": 51.098007,
      "longitude": 16.901056,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667399227,
      "ems": null
    },
    {
      "latitude": 51.098557,
      "longitude": 16.899347,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399232,
      "ems": null
    },
    {
      "latitude": 51.099506,
      "longitude": 16.896057,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399241,
      "ems": null
    },
    {
      "latitude": 51.10025,
      "longitude": 16.893633,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399248,
      "ems": null
    },
    {
      "latitude": 51.100754,
      "longitude": 16.892073,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 68.5,
        "kts": 37,
        "mph": 42.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399254,
      "ems": null
    },
    {
      "latitude": 51.101303,
      "longitude": 16.890217,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399261,
      "ems": null
    },
    {
      "latitude": 51.102161,
      "longitude": 16.887436,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1667399268,
      "ems": null
    },
    {
      "latitude": 51.103138,
      "longitude": 16.884308,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1667399275,
      "ems": null
    },
    {
      "latitude": 51.104233,
      "longitude": 16.880642,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1667399285,
      "ems": null
    },
    {
      "latitude": 51.105286,
      "longitude": 16.877153,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1667399294,
      "ems": null
    },
    {
      "latitude": 51.106258,
      "longitude": 16.873932,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1667399302,
      "ems": null
    },
    {
      "latitude": 51.106979,
      "longitude": 16.871881,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1667399308,
      "ems": null
    },
    {
      "latitude": 51.107346,
      "longitude": 16.87077,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1667399310,
      "ems": null
    },
    {
      "latitude": 51.107792,
      "longitude": 16.869507,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667399314,
      "ems": null
    },
    {
      "latitude": 51.108215,
      "longitude": 16.868467,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1667399318,
      "ems": null
    },
    {
      "latitude": 51.10854,
      "longitude": 16.867599,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1667399320,
      "ems": null
    },
    {
      "latitude": 51.109188,
      "longitude": 16.86615,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1667399324,
      "ems": null
    },
    {
      "latitude": 51.109909,
      "longitude": 16.864904,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1667399329,
      "ems": null
    },
    {
      "latitude": 51.110725,
      "longitude": 16.863785,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1667399333,
      "ems": null
    },
    {
      "latitude": 51.111423,
      "longitude": 16.863174,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667399335,
      "ems": null
    },
    {
      "latitude": 51.112263,
      "longitude": 16.86264,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1667399339,
      "ems": null
    },
    {
      "latitude": 51.113663,
      "longitude": 16.862158,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1667399343,
      "ems": null
    },
    {
      "latitude": 51.114449,
      "longitude": 16.86203,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1667399346,
      "ems": null
    },
    {
      "latitude": 51.115723,
      "longitude": 16.862158,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1667399350,
      "ems": null
    },
    {
      "latitude": 51.116638,
      "longitude": 16.86253,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1667399352,
      "ems": null
    },
    {
      "latitude": 51.117756,
      "longitude": 16.863174,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1667399355,
      "ems": null
    },
    {
      "latitude": 51.118595,
      "longitude": 16.863708,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1667399358,
      "ems": null
    },
    {
      "latitude": 51.119663,
      "longitude": 16.864471,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1667399361,
      "ems": null
    },
    {
      "latitude": 51.121124,
      "longitude": 16.865572,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1667399364,
      "ems": null
    },
    {
      "latitude": 51.122223,
      "longitude": 16.866537,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1667399367,
      "ems": null
    },
    {
      "latitude": 51.123276,
      "longitude": 16.867502,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1667399370,
      "ems": null
    },
    {
      "latitude": 51.124374,
      "longitude": 16.868914,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1667399373,
      "ems": null
    },
    {
      "latitude": 51.125343,
      "longitude": 16.870422,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667399376,
      "ems": null
    },
    {
      "latitude": 51.126389,
      "longitude": 16.872328,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667399380,
      "ems": null
    },
    {
      "latitude": 51.127213,
      "longitude": 16.873886,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399382,
      "ems": null
    },
    {
      "latitude": 51.128174,
      "longitude": 16.875668,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667399385,
      "ems": null
    },
    {
      "latitude": 51.129162,
      "longitude": 16.877441,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "squawk": "7000",
      "timestamp": 1667399388,
      "ems": null
    },
    {
      "latitude": 51.130138,
      "longitude": 16.879196,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667399391,
      "ems": null
    },
    {
      "latitude": 51.131149,
      "longitude": 16.881161,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399395,
      "ems": null
    },
    {
      "latitude": 51.131973,
      "longitude": 16.882942,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667399398,
      "ems": null
    },
    {
      "latitude": 51.132751,
      "longitude": 16.884798,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667399401,
      "ems": null
    },
    {
      "latitude": 51.133492,
      "longitude": 16.886673,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667399404,
      "ems": null
    },
    {
      "latitude": 51.134079,
      "longitude": 16.888287,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667399406,
      "ems": null
    },
    {
      "latitude": 51.13472,
      "longitude": 16.890291,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667399410,
      "ems": null
    },
    {
      "latitude": 51.135399,
      "longitude": 16.892395,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667399413,
      "ems": null
    },
    {
      "latitude": 51.136051,
      "longitude": 16.894302,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667399416,
      "ems": null
    },
    {
      "latitude": 51.136654,
      "longitude": 16.896286,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667399419,
      "ems": null
    },
    {
      "latitude": 51.137169,
      "longitude": 16.898041,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667399421,
      "ems": null
    },
    {
      "latitude": 51.137772,
      "longitude": 16.900177,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667399425,
      "ems": null
    },
    {
      "latitude": 51.13829,
      "longitude": 16.902094,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667399427,
      "ems": null
    },
    {
      "latitude": 51.138885,
      "longitude": 16.904322,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667399431,
      "ems": null
    },
    {
      "latitude": 51.13945,
      "longitude": 16.906357,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667399433,
      "ems": null
    },
    {
      "latitude": 51.140148,
      "longitude": 16.908798,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667399437,
      "ems": null
    },
    {
      "latitude": 51.141312,
      "longitude": 16.912994,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667399443,
      "ems": null
    },
    {
      "latitude": 51.142456,
      "longitude": 16.917164,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667399449,
      "ems": null
    },
    {
      "latitude": 51.143593,
      "longitude": 16.921539,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667399455,
      "ems": null
    },
    {
      "latitude": 51.144711,
      "longitude": 16.926117,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667399461,
      "ems": null
    },
    {
      "latitude": 51.145222,
      "longitude": 16.928558,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667399464,
      "ems": null
    },
    {
      "latitude": 51.145615,
      "longitude": 16.930674,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1667399467,
      "ems": null
    },
    {
      "latitude": 51.146072,
      "longitude": 16.933346,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667399470,
      "ems": null
    },
    {
      "latitude": 51.146385,
      "longitude": 16.935959,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667399473,
      "ems": null
    },
    {
      "latitude": 51.146709,
      "longitude": 16.938553,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667399476,
      "ems": null
    },
    {
      "latitude": 51.147038,
      "longitude": 16.941147,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667399479,
      "ems": null
    },
    {
      "latitude": 51.1474,
      "longitude": 16.943888,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667399482,
      "ems": null
    },
    {
      "latitude": 51.147781,
      "longitude": 16.946487,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667399485,
      "ems": null
    },
    {
      "latitude": 51.148224,
      "longitude": 16.949232,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667399488,
      "ems": null
    },
    {
      "latitude": 51.14941,
      "longitude": 16.954498,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667399494,
      "ems": null
    },
    {
      "latitude": 51.150017,
      "longitude": 16.956558,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1667399497,
      "ems": null
    },
    {
      "latitude": 51.150879,
      "longitude": 16.959105,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1667399500,
      "ems": null
    },
    {
      "latitude": 51.151691,
      "longitude": 16.961288,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667399503,
      "ems": null
    },
    {
      "latitude": 51.152718,
      "longitude": 16.964035,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667399506,
      "ems": null
    },
    {
      "latitude": 51.153599,
      "longitude": 16.966324,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667399509,
      "ems": null
    },
    {
      "latitude": 51.154533,
      "longitude": 16.968689,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667399512,
      "ems": null
    },
    {
      "latitude": 51.155457,
      "longitude": 16.97113,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399515,
      "ems": null
    },
    {
      "latitude": 51.156372,
      "longitude": 16.973431,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399518,
      "ems": null
    },
    {
      "latitude": 51.15728,
      "longitude": 16.975632,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399521,
      "ems": null
    },
    {
      "latitude": 51.158249,
      "longitude": 16.978033,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399524,
      "ems": null
    },
    {
      "latitude": 51.159142,
      "longitude": 16.980286,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399527,
      "ems": null
    },
    {
      "latitude": 51.160957,
      "longitude": 16.984787,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399533,
      "ems": null
    },
    {
      "latitude": 51.162964,
      "longitude": 16.98954,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667399539,
      "ems": null
    },
    {
      "latitude": 51.163971,
      "longitude": 16.991766,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667399542,
      "ems": null
    },
    {
      "latitude": 51.165024,
      "longitude": 16.993919,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667399545,
      "ems": null
    },
    {
      "latitude": 51.166031,
      "longitude": 16.996002,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667399548,
      "ems": null
    },
    {
      "latitude": 51.167038,
      "longitude": 16.998077,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399551,
      "ems": null
    },
    {
      "latitude": 51.168091,
      "longitude": 17.000154,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399554,
      "ems": null
    },
    {
      "latitude": 51.169147,
      "longitude": 17.002335,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667399557,
      "ems": null
    },
    {
      "latitude": 51.170151,
      "longitude": 17.004313,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399560,
      "ems": null
    },
    {
      "latitude": 51.171291,
      "longitude": 17.006378,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667399563,
      "ems": null
    },
    {
      "latitude": 51.172546,
      "longitude": 17.008362,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667399566,
      "ems": null
    },
    {
      "latitude": 51.173851,
      "longitude": 17.010117,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667399569,
      "ems": null
    },
    {
      "latitude": 51.175186,
      "longitude": 17.01181,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667399572,
      "ems": null
    },
    {
      "latitude": 51.176411,
      "longitude": 17.013474,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667399575,
      "ems": null
    },
    {
      "latitude": 51.177574,
      "longitude": 17.014923,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667399578,
      "ems": null
    },
    {
      "latitude": 51.178925,
      "longitude": 17.016602,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667399581,
      "ems": null
    },
    {
      "latitude": 51.180134,
      "longitude": 17.018127,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1667399584,
      "ems": null
    },
    {
      "latitude": 51.181458,
      "longitude": 17.019678,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1667399587,
      "ems": null
    },
    {
      "latitude": 51.182835,
      "longitude": 17.021179,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1667399591,
      "ems": null
    },
    {
      "latitude": 51.184021,
      "longitude": 17.022425,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1667399593,
      "ems": null
    },
    {
      "latitude": 51.185394,
      "longitude": 17.023834,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1667399596,
      "ems": null
    },
    {
      "latitude": 51.186745,
      "longitude": 17.025223,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1667399599,
      "ems": null
    },
    {
      "latitude": 51.188324,
      "longitude": 17.02673,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1667399603,
      "ems": null
    },
    {
      "latitude": 51.189541,
      "longitude": 17.027893,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1667399605,
      "ems": null
    },
    {
      "latitude": 51.190937,
      "longitude": 17.02919,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1667399609,
      "ems": null
    },
    {
      "latitude": 51.192146,
      "longitude": 17.030334,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1667399611,
      "ems": null
    },
    {
      "latitude": 51.194752,
      "longitude": 17.033157,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1667399618,
      "ems": null
    },
    {
      "latitude": 51.196976,
      "longitude": 17.035934,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667399624,
      "ems": null
    },
    {
      "latitude": 51.198059,
      "longitude": 17.037354,
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667399627,
      "ems": null
    },
    {
      "latitude": 51.199127,
      "longitude": 17.038956,
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667399630,
      "ems": null
    },
    {
      "latitude": 51.200272,
      "longitude": 17.040537,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667399633,
      "ems": null
    },
    {
      "latitude": 51.201271,
      "longitude": 17.042007,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667399635,
      "ems": null
    },
    {
      "latitude": 51.202572,
      "longitude": 17.043991,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667399639,
      "ems": null
    },
    {
      "latitude": 51.203568,
      "longitude": 17.04566,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667399642,
      "ems": null
    },
    {
      "latitude": 51.204483,
      "longitude": 17.047218,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667399644,
      "ems": null
    },
    {
      "latitude": 51.20549,
      "longitude": 17.049,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667399648,
      "ems": null
    },
    {
      "latitude": 51.206497,
      "longitude": 17.050856,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399650,
      "ems": null
    },
    {
      "latitude": 51.206856,
      "longitude": 17.05162,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667399652,
      "ems": null
    },
    {
      "latitude": 51.208145,
      "longitude": 17.054121,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399655,
      "ems": null
    },
    {
      "latitude": 51.209335,
      "longitude": 17.056498,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399659,
      "ems": null
    },
    {
      "latitude": 51.210159,
      "longitude": 17.058056,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399661,
      "ems": null
    },
    {
      "latitude": 51.211075,
      "longitude": 17.059912,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399664,
      "ems": null
    },
    {
      "latitude": 51.212116,
      "longitude": 17.06192,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399667,
      "ems": null
    },
    {
      "latitude": 51.214211,
      "longitude": 17.065735,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667399674,
      "ems": null
    },
    {
      "latitude": 51.216446,
      "longitude": 17.069855,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667399680,
      "ems": null
    },
    {
      "latitude": 51.218491,
      "longitude": 17.07357,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667399686,
      "ems": null
    },
    {
      "latitude": 51.220505,
      "longitude": 17.077728,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667399692,
      "ems": null
    },
    {
      "latitude": 51.221878,
      "longitude": 17.080547,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667399696,
      "ems": null
    },
    {
      "latitude": 51.224854,
      "longitude": 17.086933,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667399706,
      "ems": null
    },
    {
      "latitude": 51.225849,
      "longitude": 17.089081,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667399709,
      "ems": null
    },
    {
      "latitude": 51.226734,
      "longitude": 17.091217,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667399712,
      "ems": null
    },
    {
      "latitude": 51.227619,
      "longitude": 17.09343,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667399715,
      "ems": null
    },
    {
      "latitude": 51.228504,
      "longitude": 17.095566,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399718,
      "ems": null
    },
    {
      "latitude": 51.229294,
      "longitude": 17.097473,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399720,
      "ems": null
    },
    {
      "latitude": 51.23027,
      "longitude": 17.099915,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399724,
      "ems": null
    },
    {
      "latitude": 51.23204,
      "longitude": 17.104155,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667399730,
      "ems": null
    },
    {
      "latitude": 51.233902,
      "longitude": 17.108612,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667399736,
      "ems": null
    },
    {
      "latitude": 51.235748,
      "longitude": 17.112988,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667399742,
      "ems": null
    },
    {
      "latitude": 51.237442,
      "longitude": 17.117218,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399748,
      "ems": null
    },
    {
      "latitude": 51.239212,
      "longitude": 17.121582,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667399754,
      "ems": null
    },
    {
      "latitude": 51.240967,
      "longitude": 17.12583,
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667399760,
      "ems": null
    },
    {
      "latitude": 51.242889,
      "longitude": 17.13028,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667399766,
      "ems": null
    },
    {
      "latitude": 51.245407,
      "longitude": 17.135925,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667399774,
      "ems": null
    },
    {
      "latitude": 51.247147,
      "longitude": 17.139711,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667399780,
      "ems": null
    },
    {
      "latitude": 51.248615,
      "longitude": 17.142715,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399784,
      "ems": null
    },
    {
      "latitude": 51.249638,
      "longitude": 17.144699,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399787,
      "ems": null
    },
    {
      "latitude": 51.25058,
      "longitude": 17.14654,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399790,
      "ems": null
    },
    {
      "latitude": 51.251778,
      "longitude": 17.148819,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399793,
      "ems": null
    },
    {
      "latitude": 51.253876,
      "longitude": 17.152863,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399799,
      "ems": null
    },
    {
      "latitude": 51.256073,
      "longitude": 17.157305,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399805,
      "ems": null
    },
    {
      "latitude": 51.258205,
      "longitude": 17.161255,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667399811,
      "ems": null
    },
    {
      "latitude": 51.260345,
      "longitude": 17.165451,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399817,
      "ems": null
    },
    {
      "latitude": 51.262482,
      "longitude": 17.169701,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399823,
      "ems": null
    },
    {
      "latitude": 51.264629,
      "longitude": 17.17392,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399829,
      "ems": null
    },
    {
      "latitude": 51.266678,
      "longitude": 17.177887,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399835,
      "ems": null
    },
    {
      "latitude": 51.268707,
      "longitude": 17.181652,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667399841,
      "ems": null
    },
    {
      "latitude": 51.270859,
      "longitude": 17.186552,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399847,
      "ems": null
    },
    {
      "latitude": 51.271797,
      "longitude": 17.189026,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399850,
      "ems": null
    },
    {
      "latitude": 51.272736,
      "longitude": 17.191229,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667399853,
      "ems": null
    },
    {
      "latitude": 51.274796,
      "longitude": 17.195608,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667399859,
      "ems": null
    },
    {
      "latitude": 51.276764,
      "longitude": 17.199764,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667399865,
      "ems": null
    },
    {
      "latitude": 51.277863,
      "longitude": 17.202141,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667399868,
      "ems": null
    },
    {
      "latitude": 51.279896,
      "longitude": 17.20665,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667399874,
      "ems": null
    },
    {
      "latitude": 51.281021,
      "longitude": 17.20882,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667399877,
      "ems": null
    },
    {
      "latitude": 51.281898,
      "longitude": 17.210388,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667399880,
      "ems": null
    },
    {
      "latitude": 51.283264,
      "longitude": 17.212681,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667399883,
      "ems": null
    },
    {
      "latitude": 51.284504,
      "longitude": 17.214737,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667399886,
      "ems": null
    },
    {
      "latitude": 51.285622,
      "longitude": 17.216568,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667399889,
      "ems": null
    },
    {
      "latitude": 51.286739,
      "longitude": 17.218323,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667399892,
      "ems": null
    },
    {
      "latitude": 51.288044,
      "longitude": 17.220306,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667399895,
      "ems": null
    },
    {
      "latitude": 51.289261,
      "longitude": 17.222258,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667399898,
      "ems": null
    },
    {
      "latitude": 51.290604,
      "longitude": 17.224274,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667399901,
      "ems": null
    },
    {
      "latitude": 51.291779,
      "longitude": 17.226044,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667399904,
      "ems": null
    },
    {
      "latitude": 51.293026,
      "longitude": 17.227936,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667399907,
      "ems": null
    },
    {
      "latitude": 51.294327,
      "longitude": 17.229767,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667399910,
      "ems": null
    },
    {
      "latitude": 51.295578,
      "longitude": 17.231537,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667399913,
      "ems": null
    },
    {
      "latitude": 51.29805,
      "longitude": 17.2351,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667399919,
      "ems": null
    },
    {
      "latitude": 51.300613,
      "longitude": 17.239256,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667399925,
      "ems": null
    },
    {
      "latitude": 51.301544,
      "longitude": 17.241211,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667399928,
      "ems": null
    },
    {
      "latitude": 51.302567,
      "longitude": 17.243347,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667399931,
      "ems": null
    },
    {
      "latitude": 51.303497,
      "longitude": 17.245714,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1667399934,
      "ems": null
    },
    {
      "latitude": 51.304413,
      "longitude": 17.248238,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667399937,
      "ems": null
    },
    {
      "latitude": 51.305191,
      "longitude": 17.25054,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667399941,
      "ems": null
    },
    {
      "latitude": 51.305923,
      "longitude": 17.252766,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667399943,
      "ems": null
    },
    {
      "latitude": 51.306656,
      "longitude": 17.255142,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667399946,
      "ems": null
    },
    {
      "latitude": 51.307343,
      "longitude": 17.25774,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667399949,
      "ems": null
    },
    {
      "latitude": 51.307968,
      "longitude": 17.260056,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667399952,
      "ems": null
    },
    {
      "latitude": 51.308388,
      "longitude": 17.261658,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667399954,
      "ems": null
    },
    {
      "latitude": 51.309223,
      "longitude": 17.264786,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667399958,
      "ems": null
    },
    {
      "latitude": 51.309906,
      "longitude": 17.267242,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1667399961,
      "ems": null
    },
    {
      "latitude": 51.310593,
      "longitude": 17.269468,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667399964,
      "ems": null
    },
    {
      "latitude": 51.311321,
      "longitude": 17.271881,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667399967,
      "ems": null
    },
    {
      "latitude": 51.312744,
      "longitude": 17.276817,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667399973,
      "ems": null
    },
    {
      "latitude": 51.314026,
      "longitude": 17.281122,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1667399979,
      "ems": null
    },
    {
      "latitude": 51.314766,
      "longitude": 17.283173,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1667399982,
      "ems": null
    },
    {
      "latitude": 51.315628,
      "longitude": 17.28528,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399985,
      "ems": null
    },
    {
      "latitude": 51.316452,
      "longitude": 17.287434,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1667399988,
      "ems": null
    },
    {
      "latitude": 51.317368,
      "longitude": 17.289585,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667399991,
      "ems": null
    },
    {
      "latitude": 51.318161,
      "longitude": 17.291412,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667399994,
      "ems": null
    },
    {
      "latitude": 51.319046,
      "longitude": 17.29332,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667399997,
      "ems": null
    },
    {
      "latitude": 51.320023,
      "longitude": 17.295227,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400000,
      "ems": null
    },
    {
      "latitude": 51.320957,
      "longitude": 17.296753,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400003,
      "ems": null
    },
    {
      "latitude": 51.322037,
      "longitude": 17.298716,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400007,
      "ems": null
    },
    {
      "latitude": 51.32309,
      "longitude": 17.300348,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400010,
      "ems": null
    },
    {
      "latitude": 51.324051,
      "longitude": 17.302057,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400013,
      "ems": null
    },
    {
      "latitude": 51.324921,
      "longitude": 17.303467,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400015,
      "ems": null
    },
    {
      "latitude": 51.325928,
      "longitude": 17.305248,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400018,
      "ems": null
    },
    {
      "latitude": 51.326962,
      "longitude": 17.307129,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400022,
      "ems": null
    },
    {
      "latitude": 51.327705,
      "longitude": 17.308426,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400024,
      "ems": null
    },
    {
      "latitude": 51.328449,
      "longitude": 17.309723,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400026,
      "ems": null
    },
    {
      "latitude": 51.329895,
      "longitude": 17.312012,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400031,
      "ems": null
    },
    {
      "latitude": 51.332565,
      "longitude": 17.316086,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400039,
      "ems": null
    },
    {
      "latitude": 51.334873,
      "longitude": 17.319565,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400045,
      "ems": null
    },
    {
      "latitude": 51.336086,
      "longitude": 17.32132,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400049,
      "ems": null
    },
    {
      "latitude": 51.338039,
      "longitude": 17.324448,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400055,
      "ems": null
    },
    {
      "latitude": 51.339901,
      "longitude": 17.327271,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400060,
      "ems": null
    },
    {
      "latitude": 51.341812,
      "longitude": 17.33017,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400066,
      "ems": null
    },
    {
      "latitude": 51.344048,
      "longitude": 17.333527,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400073,
      "ems": null
    },
    {
      "latitude": 51.345932,
      "longitude": 17.336649,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400079,
      "ems": null
    },
    {
      "latitude": 51.347763,
      "longitude": 17.33984,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400085,
      "ems": null
    },
    {
      "latitude": 51.349503,
      "longitude": 17.342958,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400091,
      "ems": null
    },
    {
      "latitude": 51.350418,
      "longitude": 17.34474,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400094,
      "ems": null
    },
    {
      "latitude": 51.351242,
      "longitude": 17.346298,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400097,
      "ems": null
    },
    {
      "latitude": 51.352158,
      "longitude": 17.34808,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400100,
      "ems": null
    },
    {
      "latitude": 51.353119,
      "longitude": 17.35001,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400103,
      "ems": null
    },
    {
      "latitude": 51.354904,
      "longitude": 17.353203,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400109,
      "ems": null
    },
    {
      "latitude": 51.356846,
      "longitude": 17.35672,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400115,
      "ems": null
    },
    {
      "latitude": 51.359035,
      "longitude": 17.360535,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400121,
      "ems": null
    },
    {
      "latitude": 51.361176,
      "longitude": 17.363966,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400127,
      "ems": null
    },
    {
      "latitude": 51.362366,
      "longitude": 17.365896,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400130,
      "ems": null
    },
    {
      "latitude": 51.363319,
      "longitude": 17.367401,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400132,
      "ems": null
    },
    {
      "latitude": 51.365646,
      "longitude": 17.371445,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400139,
      "ems": null
    },
    {
      "latitude": 51.367882,
      "longitude": 17.375565,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400145,
      "ems": null
    },
    {
      "latitude": 51.370102,
      "longitude": 17.379555,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400151,
      "ems": null
    },
    {
      "latitude": 51.372349,
      "longitude": 17.383347,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400157,
      "ems": null
    },
    {
      "latitude": 51.37463,
      "longitude": 17.387085,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400163,
      "ems": null
    },
    {
      "latitude": 51.37706,
      "longitude": 17.390911,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400169,
      "ems": null
    },
    {
      "latitude": 51.379379,
      "longitude": 17.394791,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400175,
      "ems": null
    },
    {
      "latitude": 51.381775,
      "longitude": 17.398855,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400181,
      "ems": null
    },
    {
      "latitude": 51.384266,
      "longitude": 17.403107,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400187,
      "ems": null
    },
    {
      "latitude": 51.386642,
      "longitude": 17.40715,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400193,
      "ems": null
    },
    {
      "latitude": 51.388828,
      "longitude": 17.410889,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400199,
      "ems": null
    },
    {
      "latitude": 51.391296,
      "longitude": 17.414703,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400205,
      "ems": null
    },
    {
      "latitude": 51.392738,
      "longitude": 17.416687,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400208,
      "ems": null
    },
    {
      "latitude": 51.395187,
      "longitude": 17.420233,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400214,
      "ems": null
    },
    {
      "latitude": 51.396561,
      "longitude": 17.422163,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400217,
      "ems": null
    },
    {
      "latitude": 51.398804,
      "longitude": 17.425505,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400222,
      "ems": null
    },
    {
      "latitude": 51.401413,
      "longitude": 17.429512,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400229,
      "ems": null
    },
    {
      "latitude": 51.403656,
      "longitude": 17.432928,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400234,
      "ems": null
    },
    {
      "latitude": 51.40638,
      "longitude": 17.437286,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400241,
      "ems": null
    },
    {
      "latitude": 51.408798,
      "longitude": 17.441254,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400247,
      "ems": null
    },
    {
      "latitude": 51.410103,
      "longitude": 17.443619,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400250,
      "ems": null
    },
    {
      "latitude": 51.411129,
      "longitude": 17.445374,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400253,
      "ems": null
    },
    {
      "latitude": 51.412262,
      "longitude": 17.447403,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400256,
      "ems": null
    },
    {
      "latitude": 51.413502,
      "longitude": 17.449722,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400259,
      "ems": null
    },
    {
      "latitude": 51.414711,
      "longitude": 17.452011,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400262,
      "ems": null
    },
    {
      "latitude": 51.415878,
      "longitude": 17.454231,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400265,
      "ems": null
    },
    {
      "latitude": 51.416805,
      "longitude": 17.455978,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400268,
      "ems": null
    },
    {
      "latitude": 51.417877,
      "longitude": 17.458191,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667400271,
      "ems": null
    },
    {
      "latitude": 51.419037,
      "longitude": 17.460394,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400274,
      "ems": null
    },
    {
      "latitude": 51.421276,
      "longitude": 17.464676,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400280,
      "ems": null
    },
    {
      "latitude": 51.423752,
      "longitude": 17.469078,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400286,
      "ems": null
    },
    {
      "latitude": 51.426117,
      "longitude": 17.473297,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400292,
      "ems": null
    },
    {
      "latitude": 51.428307,
      "longitude": 17.477493,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400298,
      "ems": null
    },
    {
      "latitude": 51.430634,
      "longitude": 17.481766,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400304,
      "ems": null
    },
    {
      "latitude": 51.432961,
      "longitude": 17.486038,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400310,
      "ems": null
    },
    {
      "latitude": 51.435287,
      "longitude": 17.490309,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400316,
      "ems": null
    },
    {
      "latitude": 51.437622,
      "longitude": 17.494614,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400322,
      "ems": null
    },
    {
      "latitude": 51.43985,
      "longitude": 17.498932,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400328,
      "ems": null
    },
    {
      "latitude": 51.442177,
      "longitude": 17.503433,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400334,
      "ems": null
    },
    {
      "latitude": 51.444305,
      "longitude": 17.507679,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667400340,
      "ems": null
    },
    {
      "latitude": 51.446693,
      "longitude": 17.512665,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667400346,
      "ems": null
    },
    {
      "latitude": 51.448929,
      "longitude": 17.517242,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1667400352,
      "ems": null
    },
    {
      "latitude": 51.451126,
      "longitude": 17.521709,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667400358,
      "ems": null
    },
    {
      "latitude": 51.453396,
      "longitude": 17.526398,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667400364,
      "ems": null
    },
    {
      "latitude": 51.455521,
      "longitude": 17.531136,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667400370,
      "ems": null
    },
    {
      "latitude": 51.457493,
      "longitude": 17.535629,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667400376,
      "ems": null
    },
    {
      "latitude": 51.459595,
      "longitude": 17.540489,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667400382,
      "ems": null
    },
    {
      "latitude": 51.461609,
      "longitude": 17.545017,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667400388,
      "ems": null
    },
    {
      "latitude": 51.463684,
      "longitude": 17.549744,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667400394,
      "ems": null
    },
    {
      "latitude": 51.465828,
      "longitude": 17.55455,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667400400,
      "ems": null
    },
    {
      "latitude": 51.467743,
      "longitude": 17.558825,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1667400406,
      "ems": null
    },
    {
      "latitude": 51.46983,
      "longitude": 17.563629,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667400413,
      "ems": null
    },
    {
      "latitude": 51.471817,
      "longitude": 17.567955,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667400418,
      "ems": null
    },
    {
      "latitude": 51.473881,
      "longitude": 17.572327,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1667400424,
      "ems": null
    },
    {
      "latitude": 51.475834,
      "longitude": 17.576447,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1667400430,
      "ems": null
    },
    {
      "latitude": 51.476898,
      "longitude": 17.578423,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400433,
      "ems": null
    },
    {
      "latitude": 51.477978,
      "longitude": 17.58049,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400436,
      "ems": null
    },
    {
      "latitude": 51.478909,
      "longitude": 17.582321,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400440,
      "ems": null
    },
    {
      "latitude": 51.480148,
      "longitude": 17.584658,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400442,
      "ems": null
    },
    {
      "latitude": 51.481327,
      "longitude": 17.586746,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400446,
      "ems": null
    },
    {
      "latitude": 51.483517,
      "longitude": 17.59079,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400451,
      "ems": null
    },
    {
      "latitude": 51.485752,
      "longitude": 17.594986,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1667400458,
      "ems": null
    },
    {
      "latitude": 51.487885,
      "longitude": 17.598835,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400463,
      "ems": null
    },
    {
      "latitude": 51.490265,
      "longitude": 17.602768,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400469,
      "ems": null
    },
    {
      "latitude": 51.491547,
      "longitude": 17.6047,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400472,
      "ems": null
    },
    {
      "latitude": 51.492691,
      "longitude": 17.606407,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400476,
      "ems": null
    },
    {
      "latitude": 51.493942,
      "longitude": 17.608261,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400478,
      "ems": null
    },
    {
      "latitude": 51.4953,
      "longitude": 17.610268,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400482,
      "ems": null
    },
    {
      "latitude": 51.496506,
      "longitude": 17.612,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400485,
      "ems": null
    },
    {
      "latitude": 51.497761,
      "longitude": 17.613831,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400488,
      "ems": null
    },
    {
      "latitude": 51.498871,
      "longitude": 17.615389,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400490,
      "ems": null
    },
    {
      "latitude": 51.50029,
      "longitude": 17.617393,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400494,
      "ems": null
    },
    {
      "latitude": 51.501526,
      "longitude": 17.619101,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400497,
      "ems": null
    },
    {
      "latitude": 51.504047,
      "longitude": 17.622681,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400503,
      "ems": null
    },
    {
      "latitude": 51.506512,
      "longitude": 17.626343,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400509,
      "ems": null
    },
    {
      "latitude": 51.508934,
      "longitude": 17.629929,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400515,
      "ems": null
    },
    {
      "latitude": 51.511402,
      "longitude": 17.633514,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400521,
      "ems": null
    },
    {
      "latitude": 51.513821,
      "longitude": 17.637253,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400527,
      "ems": null
    },
    {
      "latitude": 51.516174,
      "longitude": 17.640924,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400533,
      "ems": null
    },
    {
      "latitude": 51.518463,
      "longitude": 17.644415,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400539,
      "ems": null
    },
    {
      "latitude": 51.520889,
      "longitude": 17.647829,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400545,
      "ems": null
    },
    {
      "latitude": 51.523361,
      "longitude": 17.651169,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667400551,
      "ems": null
    },
    {
      "latitude": 51.524597,
      "longitude": 17.652729,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667400554,
      "ems": null
    },
    {
      "latitude": 51.52602,
      "longitude": 17.654495,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1667400557,
      "ems": null
    },
    {
      "latitude": 51.527252,
      "longitude": 17.655994,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1667400560,
      "ems": null
    },
    {
      "latitude": 51.528625,
      "longitude": 17.657701,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667400563,
      "ems": null
    },
    {
      "latitude": 51.529697,
      "longitude": 17.659073,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667400566,
      "ems": null
    },
    {
      "latitude": 51.53249,
      "longitude": 17.662888,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400572,
      "ems": null
    },
    {
      "latitude": 51.534668,
      "longitude": 17.66609,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400578,
      "ems": null
    },
    {
      "latitude": 51.537323,
      "longitude": 17.66995,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400583,
      "ems": null
    },
    {
      "latitude": 51.538635,
      "longitude": 17.67189,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400586,
      "ems": null
    },
    {
      "latitude": 51.540077,
      "longitude": 17.67395,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400590,
      "ems": null
    },
    {
      "latitude": 51.542496,
      "longitude": 17.677448,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400595,
      "ems": null
    },
    {
      "latitude": 51.545338,
      "longitude": 17.681198,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667400602,
      "ems": null
    },
    {
      "latitude": 51.547806,
      "longitude": 17.68425,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667400607,
      "ems": null
    },
    {
      "latitude": 51.550831,
      "longitude": 17.688141,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667400614,
      "ems": null
    },
    {
      "latitude": 51.553486,
      "longitude": 17.69165,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1667400620,
      "ems": null
    },
    {
      "latitude": 51.556046,
      "longitude": 17.695084,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667400626,
      "ems": null
    },
    {
      "latitude": 51.558697,
      "longitude": 17.698593,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667400632,
      "ems": null
    },
    {
      "latitude": 51.560654,
      "longitude": 17.701416,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400636,
      "ems": null
    },
    {
      "latitude": 51.564331,
      "longitude": 17.706833,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400645,
      "ems": null
    },
    {
      "latitude": 51.566849,
      "longitude": 17.71048,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400651,
      "ems": null
    },
    {
      "latitude": 51.56945,
      "longitude": 17.714462,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1667400657,
      "ems": null
    },
    {
      "latitude": 51.571873,
      "longitude": 17.718124,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400663,
      "ems": null
    },
    {
      "latitude": 51.574356,
      "longitude": 17.721912,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400669,
      "ems": null
    },
    {
      "latitude": 51.576809,
      "longitude": 17.725525,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400675,
      "ems": null
    },
    {
      "latitude": 51.579437,
      "longitude": 17.729485,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400681,
      "ems": null
    },
    {
      "latitude": 51.581955,
      "longitude": 17.733196,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400687,
      "ems": null
    },
    {
      "latitude": 51.584518,
      "longitude": 17.736834,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1667400693,
      "ems": null
    },
    {
      "latitude": 51.587093,
      "longitude": 17.740402,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400699,
      "ems": null
    },
    {
      "latitude": 51.589657,
      "longitude": 17.744064,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400705,
      "ems": null
    },
    {
      "latitude": 51.592262,
      "longitude": 17.747803,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400712,
      "ems": null
    },
    {
      "latitude": 51.59473,
      "longitude": 17.751236,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400717,
      "ems": null
    },
    {
      "latitude": 51.597244,
      "longitude": 17.754871,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400723,
      "ems": null
    },
    {
      "latitude": 51.599487,
      "longitude": 17.758062,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400729,
      "ems": null
    },
    {
      "latitude": 51.602417,
      "longitude": 17.762146,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1667400736,
      "ems": null
    },
    {
      "latitude": 51.605064,
      "longitude": 17.765732,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667400741,
      "ems": null
    },
    {
      "latitude": 51.607903,
      "longitude": 17.769394,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667400748,
      "ems": null
    },
    {
      "latitude": 51.610649,
      "longitude": 17.772751,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1667400754,
      "ems": null
    },
    {
      "latitude": 51.613266,
      "longitude": 17.776102,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667400759,
      "ems": null
    },
    {
      "latitude": 51.615829,
      "longitude": 17.779367,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1667400765,
      "ems": null
    },
    {
      "latitude": 51.618301,
      "longitude": 17.78256,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1667400771,
      "ems": null
    },
    {
      "latitude": 51.62117,
      "longitude": 17.786407,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1667400777,
      "ems": null
    },
    {
      "latitude": 51.62233,
      "longitude": 17.788054,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400780,
      "ems": null
    },
    {
      "latitude": 51.623657,
      "longitude": 17.790131,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1667400783,
      "ems": null
    },
    {
      "latitude": 51.625031,
      "longitude": 17.792358,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400787,
      "ems": null
    },
    {
      "latitude": 51.626221,
      "longitude": 17.794363,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400790,
      "ems": null
    },
    {
      "latitude": 51.626999,
      "longitude": 17.795773,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400792,
      "ems": null
    },
    {
      "latitude": 51.628464,
      "longitude": 17.798445,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1667400795,
      "ems": null
    },
    {
      "latitude": 51.629738,
      "longitude": 17.800751,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1667400799,
      "ems": null
    },
    {
      "latitude": 51.630901,
      "longitude": 17.802734,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400802,
      "ems": null
    },
    {
      "latitude": 51.632111,
      "longitude": 17.804794,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400805,
      "ems": null
    },
    {
      "latitude": 51.634533,
      "longitude": 17.808762,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400811,
      "ems": null
    },
    {
      "latitude": 51.636932,
      "longitude": 17.812773,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1667400817,
      "ems": null
    },
    {
      "latitude": 51.639542,
      "longitude": 17.817003,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400823,
      "ems": null
    },
    {
      "latitude": 51.641979,
      "longitude": 17.820816,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1667400829,
      "ems": null
    },
    {
      "latitude": 51.644356,
      "longitude": 17.824402,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1667400835,
      "ems": null
    },
    {
      "latitude": 51.645721,
      "longitude": 17.826876,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1667400838,
      "ems": null
    },
    {
      "latitude": 51.646317,
      "longitude": 17.828064,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1667400840,
      "ems": null
    },
    {
      "latitude": 51.64769,
      "longitude": 17.831257,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1667400843,
      "ems": null
    },
    {
      "latitude": 51.648605,
      "longitude": 17.83378,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1667400846,
      "ems": null
    },
    {
      "latitude": 51.649288,
      "longitude": 17.835922,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1667400850,
      "ems": null
    },
    {
      "latitude": 51.650032,
      "longitude": 17.838745,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1667400852,
      "ems": null
    },
    {
      "latitude": 51.650406,
      "longitude": 17.8405,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667400856,
      "ems": null
    },
    {
      "latitude": 51.651123,
      "longitude": 17.844469,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667400858,
      "ems": null
    },
    {
      "latitude": 51.651615,
      "longitude": 17.847748,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667400862,
      "ems": null
    },
    {
      "latitude": 51.651993,
      "longitude": 17.850037,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667400865,
      "ems": null
    },
    {
      "latitude": 51.652405,
      "longitude": 17.852486,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667400867,
      "ems": null
    },
    {
      "latitude": 51.652817,
      "longitude": 17.854639,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667400870,
      "ems": null
    },
    {
      "latitude": 51.653759,
      "longitude": 17.858658,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667400874,
      "ems": null
    },
    {
      "latitude": 51.654411,
      "longitude": 17.861404,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667400877,
      "ems": null
    },
    {
      "latitude": 51.654602,
      "longitude": 17.862211,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667400879,
      "ems": null
    },
    {
      "latitude": 51.655621,
      "longitude": 17.866669,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1667400883,
      "ems": null
    },
    {
      "latitude": 51.656551,
      "longitude": 17.872162,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667400889,
      "ems": null
    },
    {
      "latitude": 51.657295,
      "longitude": 17.878113,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667400895,
      "ems": null
    },
    {
      "latitude": 51.657528,
      "longitude": 17.880936,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667400898,
      "ems": null
    },
    {
      "latitude": 51.657715,
      "longitude": 17.883377,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667400901,
      "ems": null
    },
    {
      "latitude": 51.657902,
      "longitude": 17.886581,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667400904,
      "ems": null
    },
    {
      "latitude": 51.65799,
      "longitude": 17.889008,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667400907,
      "ems": null
    },
    {
      "latitude": 51.658089,
      "longitude": 17.891235,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667400910,
      "ems": null
    },
    {
      "latitude": 51.658272,
      "longitude": 17.894287,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667400913,
      "ems": null
    },
    {
      "latitude": 51.658401,
      "longitude": 17.897247,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667400915,
      "ems": null
    },
    {
      "latitude": 51.6586,
      "longitude": 17.900848,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667400919,
      "ems": null
    },
    {
      "latitude": 51.658737,
      "longitude": 17.9039,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667400922,
      "ems": null
    },
    {
      "latitude": 51.659088,
      "longitude": 17.908829,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667400927,
      "ems": null
    },
    {
      "latitude": 51.659576,
      "longitude": 17.914429,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667400933,
      "ems": null
    },
    {
      "latitude": 51.659912,
      "longitude": 17.918182,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667400937,
      "ems": null
    },
    {
      "latitude": 51.660049,
      "longitude": 17.919741,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667400940,
      "ems": null
    },
    {
      "latitude": 51.660507,
      "longitude": 17.92366,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667400942,
      "ems": null
    },
    {
      "latitude": 51.660873,
      "longitude": 17.926422,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667400946,
      "ems": null
    },
    {
      "latitude": 51.661392,
      "longitude": 17.930756,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667400951,
      "ems": null
    },
    {
      "latitude": 51.661999,
      "longitude": 17.938766,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667400959,
      "ems": null
    },
    {
      "latitude": 51.662338,
      "longitude": 17.944386,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667400966,
      "ems": null
    },
    {
      "latitude": 51.662834,
      "longitude": 17.950974,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667400972,
      "ems": null
    },
    {
      "latitude": 51.663391,
      "longitude": 17.95797,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667400980,
      "ems": null
    },
    {
      "latitude": 51.663673,
      "longitude": 17.962494,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667400986,
      "ems": null
    },
    {
      "latitude": 51.66423,
      "longitude": 17.969818,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667400992,
      "ems": null
    },
    {
      "latitude": 51.665131,
      "longitude": 17.976231,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667400999,
      "ems": null
    },
    {
      "latitude": 51.665768,
      "longitude": 17.979889,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667401003,
      "ems": null
    },
    {
      "latitude": 51.666733,
      "longitude": 17.988182,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401012,
      "ems": null
    },
    {
      "latitude": 51.667259,
      "longitude": 17.993927,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401018,
      "ems": null
    },
    {
      "latitude": 51.667694,
      "longitude": 17.999466,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401023,
      "ems": null
    },
    {
      "latitude": 51.667912,
      "longitude": 18.002243,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401026,
      "ems": null
    },
    {
      "latitude": 51.668095,
      "longitude": 18.005142,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401030,
      "ems": null
    },
    {
      "latitude": 51.668289,
      "longitude": 18.008076,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401033,
      "ems": null
    },
    {
      "latitude": 51.668701,
      "longitude": 18.013916,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401039,
      "ems": null
    },
    {
      "latitude": 51.669205,
      "longitude": 18.019508,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401045,
      "ems": null
    },
    {
      "latitude": 51.669819,
      "longitude": 18.025436,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667401051,
      "ems": null
    },
    {
      "latitude": 51.670395,
      "longitude": 18.030865,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667401057,
      "ems": null
    },
    {
      "latitude": 51.67075,
      "longitude": 18.033752,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667401060,
      "ems": null
    },
    {
      "latitude": 51.671028,
      "longitude": 18.03627,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667401062,
      "ems": null
    },
    {
      "latitude": 51.671726,
      "longitude": 18.042374,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667401069,
      "ems": null
    },
    {
      "latitude": 51.672379,
      "longitude": 18.048096,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667401075,
      "ems": null
    },
    {
      "latitude": 51.672867,
      "longitude": 18.053432,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401081,
      "ems": null
    },
    {
      "latitude": 51.67337,
      "longitude": 18.059296,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401087,
      "ems": null
    },
    {
      "latitude": 51.67387,
      "longitude": 18.065262,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401093,
      "ems": null
    },
    {
      "latitude": 51.674377,
      "longitude": 18.071173,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401099,
      "ems": null
    },
    {
      "latitude": 51.674847,
      "longitude": 18.076859,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401105,
      "ems": null
    },
    {
      "latitude": 51.675293,
      "longitude": 18.082457,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401111,
      "ems": null
    },
    {
      "latitude": 51.675751,
      "longitude": 18.088247,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401117,
      "ems": null
    },
    {
      "latitude": 51.676151,
      "longitude": 18.094101,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401123,
      "ems": null
    },
    {
      "latitude": 51.676617,
      "longitude": 18.100052,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401129,
      "ems": null
    },
    {
      "latitude": 51.677124,
      "longitude": 18.105394,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667401135,
      "ems": null
    },
    {
      "latitude": 51.677765,
      "longitude": 18.111185,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667401141,
      "ems": null
    },
    {
      "latitude": 51.678383,
      "longitude": 18.116226,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667401146,
      "ems": null
    },
    {
      "latitude": 51.679035,
      "longitude": 18.122711,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401153,
      "ems": null
    },
    {
      "latitude": 51.679642,
      "longitude": 18.127975,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667401159,
      "ems": null
    },
    {
      "latitude": 51.68042,
      "longitude": 18.133528,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667401165,
      "ems": null
    },
    {
      "latitude": 51.681335,
      "longitude": 18.139244,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667401171,
      "ems": null
    },
    {
      "latitude": 51.682201,
      "longitude": 18.145218,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1667401177,
      "ems": null
    },
    {
      "latitude": 51.682713,
      "longitude": 18.150101,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667401182,
      "ems": null
    },
    {
      "latitude": 51.683578,
      "longitude": 18.156837,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667401189,
      "ems": null
    },
    {
      "latitude": 51.684341,
      "longitude": 18.162155,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667401195,
      "ems": null
    },
    {
      "latitude": 51.685043,
      "longitude": 18.167749,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667401201,
      "ems": null
    },
    {
      "latitude": 51.685364,
      "longitude": 18.171238,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401204,
      "ems": null
    },
    {
      "latitude": 51.685833,
      "longitude": 18.177109,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401210,
      "ems": null
    },
    {
      "latitude": 51.686066,
      "longitude": 18.180389,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401213,
      "ems": null
    },
    {
      "latitude": 51.686234,
      "longitude": 18.182966,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401216,
      "ems": null
    },
    {
      "latitude": 51.686462,
      "longitude": 18.186457,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401219,
      "ems": null
    },
    {
      "latitude": 51.686577,
      "longitude": 18.189392,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401222,
      "ems": null
    },
    {
      "latitude": 51.686737,
      "longitude": 18.19232,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401225,
      "ems": null
    },
    {
      "latitude": 51.686874,
      "longitude": 18.195587,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401228,
      "ems": null
    },
    {
      "latitude": 51.687241,
      "longitude": 18.201897,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401234,
      "ems": null
    },
    {
      "latitude": 51.687553,
      "longitude": 18.208008,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401240,
      "ems": null
    },
    {
      "latitude": 51.687927,
      "longitude": 18.214293,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401246,
      "ems": null
    },
    {
      "latitude": 51.688251,
      "longitude": 18.220291,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401252,
      "ems": null
    },
    {
      "latitude": 51.68858,
      "longitude": 18.226471,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401258,
      "ems": null
    },
    {
      "latitude": 51.688843,
      "longitude": 18.232479,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401264,
      "ems": null
    },
    {
      "latitude": 51.689163,
      "longitude": 18.23827,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401270,
      "ems": null
    },
    {
      "latitude": 51.689484,
      "longitude": 18.243689,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401275,
      "ems": null
    },
    {
      "latitude": 51.689789,
      "longitude": 18.249588,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401282,
      "ems": null
    },
    {
      "latitude": 51.690163,
      "longitude": 18.255997,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401288,
      "ems": null
    },
    {
      "latitude": 51.690491,
      "longitude": 18.261726,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401294,
      "ems": null
    },
    {
      "latitude": 51.690533,
      "longitude": 18.264465,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667401297,
      "ems": null
    },
    {
      "latitude": 51.690487,
      "longitude": 18.267288,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667401300,
      "ems": null
    },
    {
      "latitude": 51.690628,
      "longitude": 18.273315,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401306,
      "ems": null
    },
    {
      "latitude": 51.690907,
      "longitude": 18.279343,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401312,
      "ems": null
    },
    {
      "latitude": 51.691132,
      "longitude": 18.284813,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401318,
      "ems": null
    },
    {
      "latitude": 51.69128,
      "longitude": 18.290024,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401324,
      "ems": null
    },
    {
      "latitude": 51.691498,
      "longitude": 18.294834,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401329,
      "ems": null
    },
    {
      "latitude": 51.691792,
      "longitude": 18.301239,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401336,
      "ems": null
    },
    {
      "latitude": 51.69207,
      "longitude": 18.306122,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401342,
      "ems": null
    },
    {
      "latitude": 51.692303,
      "longitude": 18.310699,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401348,
      "ems": null
    },
    {
      "latitude": 51.692677,
      "longitude": 18.31749,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401354,
      "ems": null
    },
    {
      "latitude": 51.693001,
      "longitude": 18.322525,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401360,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 18.328094,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401366,
      "ems": null
    },
    {
      "latitude": 51.693653,
      "longitude": 18.33374,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401372,
      "ems": null
    },
    {
      "latitude": 51.69397,
      "longitude": 18.340338,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401379,
      "ems": null
    },
    {
      "latitude": 51.69429,
      "longitude": 18.345535,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401384,
      "ems": null
    },
    {
      "latitude": 51.694656,
      "longitude": 18.352215,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401391,
      "ems": null
    },
    {
      "latitude": 51.695095,
      "longitude": 18.358383,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401397,
      "ems": null
    },
    {
      "latitude": 51.695526,
      "longitude": 18.364019,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401403,
      "ems": null
    },
    {
      "latitude": 51.695892,
      "longitude": 18.369364,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401408,
      "ems": null
    },
    {
      "latitude": 51.696354,
      "longitude": 18.376083,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401415,
      "ems": null
    },
    {
      "latitude": 51.696762,
      "longitude": 18.382427,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401421,
      "ems": null
    },
    {
      "latitude": 51.697098,
      "longitude": 18.387909,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401427,
      "ems": null
    },
    {
      "latitude": 51.697472,
      "longitude": 18.39386,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401433,
      "ems": null
    },
    {
      "latitude": 51.697983,
      "longitude": 18.400192,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401439,
      "ems": null
    },
    {
      "latitude": 51.698364,
      "longitude": 18.406034,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401445,
      "ems": null
    },
    {
      "latitude": 51.698727,
      "longitude": 18.411026,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401451,
      "ems": null
    },
    {
      "latitude": 51.699097,
      "longitude": 18.416798,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401457,
      "ems": null
    },
    {
      "latitude": 51.699463,
      "longitude": 18.423033,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401463,
      "ems": null
    },
    {
      "latitude": 51.699829,
      "longitude": 18.4286,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401469,
      "ems": null
    },
    {
      "latitude": 51.700241,
      "longitude": 18.433649,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401475,
      "ems": null
    },
    {
      "latitude": 51.700684,
      "longitude": 18.439407,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401481,
      "ems": null
    },
    {
      "latitude": 51.701157,
      "longitude": 18.444708,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401488,
      "ems": null
    },
    {
      "latitude": 51.70166,
      "longitude": 18.450775,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401493,
      "ems": null
    },
    {
      "latitude": 51.702118,
      "longitude": 18.456438,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401500,
      "ems": null
    },
    {
      "latitude": 51.702591,
      "longitude": 18.461533,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401505,
      "ems": null
    },
    {
      "latitude": 51.703102,
      "longitude": 18.46756,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401511,
      "ems": null
    },
    {
      "latitude": 51.703522,
      "longitude": 18.473129,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401517,
      "ems": null
    },
    {
      "latitude": 51.703949,
      "longitude": 18.47893,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401524,
      "ems": null
    },
    {
      "latitude": 51.704453,
      "longitude": 18.485565,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401530,
      "ems": null
    },
    {
      "latitude": 51.704872,
      "longitude": 18.491287,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401537,
      "ems": null
    },
    {
      "latitude": 51.705429,
      "longitude": 18.499451,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401545,
      "ems": null
    },
    {
      "latitude": 51.7061,
      "longitude": 18.507286,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401553,
      "ems": null
    },
    {
      "latitude": 51.706512,
      "longitude": 18.513151,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401559,
      "ems": null
    },
    {
      "latitude": 51.706734,
      "longitude": 18.518295,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401565,
      "ems": null
    },
    {
      "latitude": 51.70697,
      "longitude": 18.524731,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667401571,
      "ems": null
    },
    {
      "latitude": 51.707062,
      "longitude": 18.52807,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667401574,
      "ems": null
    },
    {
      "latitude": 51.707153,
      "longitude": 18.530966,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667401577,
      "ems": null
    },
    {
      "latitude": 51.707199,
      "longitude": 18.533712,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667401580,
      "ems": null
    },
    {
      "latitude": 51.707291,
      "longitude": 18.536831,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667401583,
      "ems": null
    },
    {
      "latitude": 51.70734,
      "longitude": 18.5392,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667401586,
      "ems": null
    },
    {
      "latitude": 51.707382,
      "longitude": 18.545515,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667401592,
      "ems": null
    },
    {
      "latitude": 51.707386,
      "longitude": 18.551254,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667401598,
      "ems": null
    },
    {
      "latitude": 51.707432,
      "longitude": 18.557053,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1667401604,
      "ems": null
    },
    {
      "latitude": 51.707527,
      "longitude": 18.563538,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667401611,
      "ems": null
    },
    {
      "latitude": 51.707565,
      "longitude": 18.571274,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667401619,
      "ems": null
    },
    {
      "latitude": 51.707664,
      "longitude": 18.577042,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667401625,
      "ems": null
    },
    {
      "latitude": 51.707943,
      "longitude": 18.582611,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401631,
      "ems": null
    },
    {
      "latitude": 51.708176,
      "longitude": 18.585052,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401634,
      "ems": null
    },
    {
      "latitude": 51.708458,
      "longitude": 18.588181,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401637,
      "ems": null
    },
    {
      "latitude": 51.708645,
      "longitude": 18.59024,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401640,
      "ems": null
    },
    {
      "latitude": 51.708923,
      "longitude": 18.593369,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401643,
      "ems": null
    },
    {
      "latitude": 51.709156,
      "longitude": 18.59642,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401646,
      "ems": null
    },
    {
      "latitude": 51.709442,
      "longitude": 18.599482,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401649,
      "ems": null
    },
    {
      "latitude": 51.709621,
      "longitude": 18.601837,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401652,
      "ems": null
    },
    {
      "latitude": 51.710041,
      "longitude": 18.607483,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401658,
      "ems": null
    },
    {
      "latitude": 51.710506,
      "longitude": 18.613663,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401664,
      "ems": null
    },
    {
      "latitude": 51.710876,
      "longitude": 18.61908,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401670,
      "ems": null
    },
    {
      "latitude": 51.711273,
      "longitude": 18.624498,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401676,
      "ems": null
    },
    {
      "latitude": 51.711594,
      "longitude": 18.628729,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401681,
      "ems": null
    },
    {
      "latitude": 51.71209,
      "longitude": 18.635483,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401688,
      "ems": null
    },
    {
      "latitude": 51.712601,
      "longitude": 18.641201,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401694,
      "ems": null
    },
    {
      "latitude": 51.713112,
      "longitude": 18.647079,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401700,
      "ems": null
    },
    {
      "latitude": 51.713531,
      "longitude": 18.65181,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401705,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 18.657013,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401712,
      "ems": null
    },
    {
      "latitude": 51.714569,
      "longitude": 18.663916,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401718,
      "ems": null
    },
    {
      "latitude": 51.715073,
      "longitude": 18.669781,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401724,
      "ems": null
    },
    {
      "latitude": 51.71553,
      "longitude": 18.675421,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401730,
      "ems": null
    },
    {
      "latitude": 51.716034,
      "longitude": 18.681658,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401736,
      "ems": null
    },
    {
      "latitude": 51.716465,
      "longitude": 18.687668,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401742,
      "ems": null
    },
    {
      "latitude": 51.716976,
      "longitude": 18.693924,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401748,
      "ems": null
    },
    {
      "latitude": 51.717442,
      "longitude": 18.699951,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401754,
      "ems": null
    },
    {
      "latitude": 51.717819,
      "longitude": 18.705486,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401760,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 18.711624,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401766,
      "ems": null
    },
    {
      "latitude": 51.718781,
      "longitude": 18.717882,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401772,
      "ems": null
    },
    {
      "latitude": 51.719303,
      "longitude": 18.723755,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401778,
      "ems": null
    },
    {
      "latitude": 51.719769,
      "longitude": 18.728333,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667401785,
      "ems": null
    },
    {
      "latitude": 51.72084,
      "longitude": 18.740448,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401795,
      "ems": null
    },
    {
      "latitude": 51.721252,
      "longitude": 18.746239,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401801,
      "ems": null
    },
    {
      "latitude": 51.721676,
      "longitude": 18.75206,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401806,
      "ems": null
    },
    {
      "latitude": 51.722095,
      "longitude": 18.758011,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401812,
      "ems": null
    },
    {
      "latitude": 51.722443,
      "longitude": 18.764202,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401819,
      "ems": null
    },
    {
      "latitude": 51.722748,
      "longitude": 18.76976,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401825,
      "ems": null
    },
    {
      "latitude": 51.723038,
      "longitude": 18.775042,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401830,
      "ems": null
    },
    {
      "latitude": 51.723312,
      "longitude": 18.780905,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401836,
      "ems": null
    },
    {
      "latitude": 51.723633,
      "longitude": 18.786926,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401842,
      "ems": null
    },
    {
      "latitude": 51.723907,
      "longitude": 18.793154,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401848,
      "ems": null
    },
    {
      "latitude": 51.724182,
      "longitude": 18.799538,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401855,
      "ems": null
    },
    {
      "latitude": 51.724411,
      "longitude": 18.804289,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667401861,
      "ems": null
    },
    {
      "latitude": 51.724686,
      "longitude": 18.809113,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667401866,
      "ems": null
    },
    {
      "latitude": 51.725052,
      "longitude": 18.814606,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401871,
      "ems": null
    },
    {
      "latitude": 51.72559,
      "longitude": 18.822327,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401879,
      "ems": null
    },
    {
      "latitude": 51.726059,
      "longitude": 18.827671,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401885,
      "ems": null
    },
    {
      "latitude": 51.726521,
      "longitude": 18.83316,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401891,
      "ems": null
    },
    {
      "latitude": 51.727066,
      "longitude": 18.838881,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667401897,
      "ems": null
    },
    {
      "latitude": 51.727634,
      "longitude": 18.843918,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667401903,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 18.848953,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667401909,
      "ems": null
    },
    {
      "latitude": 51.728714,
      "longitude": 18.854023,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401915,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 18.859295,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401921,
      "ems": null
    },
    {
      "latitude": 51.729546,
      "longitude": 18.864136,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401927,
      "ems": null
    },
    {
      "latitude": 51.729965,
      "longitude": 18.869324,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401933,
      "ems": null
    },
    {
      "latitude": 51.730408,
      "longitude": 18.87414,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401939,
      "ems": null
    },
    {
      "latitude": 51.730911,
      "longitude": 18.879486,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401945,
      "ems": null
    },
    {
      "latitude": 51.731407,
      "longitude": 18.884583,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401951,
      "ems": null
    },
    {
      "latitude": 51.731873,
      "longitude": 18.889507,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667401957,
      "ems": null
    },
    {
      "latitude": 51.732384,
      "longitude": 18.894653,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667401963,
      "ems": null
    },
    {
      "latitude": 51.732788,
      "longitude": 18.899454,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667401969,
      "ems": null
    },
    {
      "latitude": 51.7332,
      "longitude": 18.904501,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401975,
      "ems": null
    },
    {
      "latitude": 51.733547,
      "longitude": 18.909683,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401981,
      "ems": null
    },
    {
      "latitude": 51.733841,
      "longitude": 18.91482,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667401987,
      "ems": null
    },
    {
      "latitude": 51.734154,
      "longitude": 18.919754,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667401993,
      "ems": null
    },
    {
      "latitude": 51.7342,
      "longitude": 18.922501,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667401996,
      "ems": null
    },
    {
      "latitude": 51.734116,
      "longitude": 18.924767,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667401999,
      "ems": null
    },
    {
      "latitude": 51.733887,
      "longitude": 18.927439,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667402002,
      "ems": null
    },
    {
      "latitude": 51.733658,
      "longitude": 18.930111,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1667402006,
      "ems": null
    },
    {
      "latitude": 51.733547,
      "longitude": 18.932495,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1667402008,
      "ems": null
    },
    {
      "latitude": 51.733795,
      "longitude": 18.937311,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667402014,
      "ems": null
    },
    {
      "latitude": 51.734386,
      "longitude": 18.942413,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667402020,
      "ems": null
    },
    {
      "latitude": 51.734619,
      "longitude": 18.944931,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667402023,
      "ems": null
    },
    {
      "latitude": 51.734852,
      "longitude": 18.947449,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402026,
      "ems": null
    },
    {
      "latitude": 51.735077,
      "longitude": 18.950153,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402030,
      "ems": null
    },
    {
      "latitude": 51.73526,
      "longitude": 18.95253,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402032,
      "ems": null
    },
    {
      "latitude": 51.735489,
      "longitude": 18.955276,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667402036,
      "ems": null
    },
    {
      "latitude": 51.735737,
      "longitude": 18.957825,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402039,
      "ems": null
    },
    {
      "latitude": 51.735924,
      "longitude": 18.96019,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402041,
      "ems": null
    },
    {
      "latitude": 51.736313,
      "longitude": 18.965149,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402047,
      "ems": null
    },
    {
      "latitude": 51.736816,
      "longitude": 18.970865,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667402054,
      "ems": null
    },
    {
      "latitude": 51.73732,
      "longitude": 18.976061,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667402060,
      "ems": null
    },
    {
      "latitude": 51.737923,
      "longitude": 18.981018,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667402065,
      "ems": null
    },
    {
      "latitude": 51.738327,
      "longitude": 18.983707,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402069,
      "ems": null
    },
    {
      "latitude": 51.738739,
      "longitude": 18.986231,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667402072,
      "ems": null
    },
    {
      "latitude": 51.739136,
      "longitude": 18.988495,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402075,
      "ems": null
    },
    {
      "latitude": 51.739601,
      "longitude": 18.991394,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402078,
      "ems": null
    },
    {
      "latitude": 51.740021,
      "longitude": 18.993877,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402081,
      "ems": null
    },
    {
      "latitude": 51.740341,
      "longitude": 18.995955,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402083,
      "ems": null
    },
    {
      "latitude": 51.74081,
      "longitude": 18.998871,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402087,
      "ems": null
    },
    {
      "latitude": 51.741276,
      "longitude": 19.001541,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667402090,
      "ems": null
    },
    {
      "latitude": 51.741669,
      "longitude": 19.003899,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667402093,
      "ems": null
    },
    {
      "latitude": 51.74258,
      "longitude": 19.008942,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1667402099,
      "ems": null
    },
    {
      "latitude": 51.743454,
      "longitude": 19.013845,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402105,
      "ems": null
    },
    {
      "latitude": 51.744301,
      "longitude": 19.018784,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1667402111,
      "ems": null
    },
    {
      "latitude": 51.745239,
      "longitude": 19.02342,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1667402117,
      "ems": null
    },
    {
      "latitude": 51.74588,
      "longitude": 19.02602,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667402120,
      "ems": null
    },
    {
      "latitude": 51.74649,
      "longitude": 19.02832,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1667402123,
      "ems": null
    },
    {
      "latitude": 51.74707,
      "longitude": 19.030621,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1667402126,
      "ems": null
    },
    {
      "latitude": 51.748169,
      "longitude": 19.035744,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667402132,
      "ems": null
    },
    {
      "latitude": 51.749191,
      "longitude": 19.040604,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667402138,
      "ems": null
    },
    {
      "latitude": 51.750275,
      "longitude": 19.045616,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667402144,
      "ems": null
    },
    {
      "latitude": 51.751282,
      "longitude": 19.050591,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1667402150,
      "ems": null
    },
    {
      "latitude": 51.751785,
      "longitude": 19.053188,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1667402153,
      "ems": null
    },
    {
      "latitude": 51.752197,
      "longitude": 19.055563,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402156,
      "ems": null
    },
    {
      "latitude": 51.752541,
      "longitude": 19.058075,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1667402159,
      "ems": null
    },
    {
      "latitude": 51.752869,
      "longitude": 19.060898,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667402162,
      "ems": null
    },
    {
      "latitude": 51.753056,
      "longitude": 19.063492,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667402165,
      "ems": null
    },
    {
      "latitude": 51.753204,
      "longitude": 19.065882,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667402168,
      "ems": null
    },
    {
      "latitude": 51.753334,
      "longitude": 19.068604,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667402171,
      "ems": null
    },
    {
      "latitude": 51.753521,
      "longitude": 19.071579,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667402174,
      "ems": null
    },
    {
      "latitude": 51.753704,
      "longitude": 19.073792,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667402177,
      "ems": null
    },
    {
      "latitude": 51.753891,
      "longitude": 19.076571,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667402180,
      "ems": null
    },
    {
      "latitude": 51.754124,
      "longitude": 19.079285,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402183,
      "ems": null
    },
    {
      "latitude": 51.754303,
      "longitude": 19.081842,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667402186,
      "ems": null
    },
    {
      "latitude": 51.754868,
      "longitude": 19.087524,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667402192,
      "ems": null
    },
    {
      "latitude": 51.755383,
      "longitude": 19.092789,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667402198,
      "ems": null
    },
    {
      "latitude": 51.755894,
      "longitude": 19.097977,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667402204,
      "ems": null
    },
    {
      "latitude": 51.756226,
      "longitude": 19.100473,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667402207,
      "ems": null
    },
    {
      "latitude": 51.756638,
      "longitude": 19.102776,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1667402210,
      "ems": null
    },
    {
      "latitude": 51.757004,
      "longitude": 19.105373,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1667402213,
      "ems": null
    },
    {
      "latitude": 51.757645,
      "longitude": 19.110643,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1667402219,
      "ems": null
    },
    {
      "latitude": 51.758011,
      "longitude": 19.115988,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1667402225,
      "ems": null
    },
    {
      "latitude": 51.758083,
      "longitude": 19.118729,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667402228,
      "ems": null
    },
    {
      "latitude": 51.758034,
      "longitude": 19.121399,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667402231,
      "ems": null
    },
    {
      "latitude": 51.757919,
      "longitude": 19.124079,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1667402234,
      "ems": null
    },
    {
      "latitude": 51.757755,
      "longitude": 19.126663,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1667402237,
      "ems": null
    },
    {
      "latitude": 51.757614,
      "longitude": 19.129486,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1667402240,
      "ems": null
    },
    {
      "latitude": 51.757507,
      "longitude": 19.1318,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1667402243,
      "ems": null
    },
    {
      "latitude": 51.757381,
      "longitude": 19.134521,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1667402246,
      "ems": null
    },
    {
      "latitude": 51.757278,
      "longitude": 19.13759,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667402250,
      "ems": null
    },
    {
      "latitude": 51.757324,
      "longitude": 19.142414,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667402255,
      "ems": null
    },
    {
      "latitude": 51.757477,
      "longitude": 19.144974,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667402258,
      "ems": null
    },
    {
      "latitude": 51.757645,
      "longitude": 19.147686,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402261,
      "ems": null
    },
    {
      "latitude": 51.757942,
      "longitude": 19.15062,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667402264,
      "ems": null
    },
    {
      "latitude": 51.758175,
      "longitude": 19.153061,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1667402267,
      "ems": null
    },
    {
      "latitude": 51.758423,
      "longitude": 19.155851,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1667402270,
      "ems": null
    },
    {
      "latitude": 51.758652,
      "longitude": 19.158672,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1667402274,
      "ems": null
    },
    {
      "latitude": 51.758835,
      "longitude": 19.161196,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1667402277,
      "ems": null
    },
    {
      "latitude": 51.758965,
      "longitude": 19.163742,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1667402279,
      "ems": null
    },
    {
      "latitude": 51.759151,
      "longitude": 19.166412,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1667402282,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.171906,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1667402288,
      "ems": null
    },
    {
      "latitude": 51.75943,
      "longitude": 19.174482,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667402291,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.177399,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667402295,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.179829,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667402297,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.182434,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667402300,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.185104,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667402303,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.187994,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1667402307,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.190443,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667402309,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.193041,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667402312,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.195786,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667402315,
      "ems": null
    },
    {
      "latitude": 51.759293,
      "longitude": 19.201202,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667402322,
      "ems": null
    },
    {
      "latitude": 51.759109,
      "longitude": 19.206476,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1667402328,
      "ems": null
    },
    {
      "latitude": 51.758919,
      "longitude": 19.211578,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667402334,
      "ems": null
    },
    {
      "latitude": 51.758743,
      "longitude": 19.216795,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1667402340,
      "ems": null
    },
    {
      "latitude": 51.758549,
      "longitude": 19.219666,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1667402343,
      "ems": null
    },
    {
      "latitude": 51.758408,
      "longitude": 19.222107,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1667402346,
      "ems": null
    },
    {
      "latitude": 51.758129,
      "longitude": 19.227448,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1667402352,
      "ems": null
    },
    {
      "latitude": 51.757942,
      "longitude": 19.23233,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667402357,
      "ems": null
    },
    {
      "latitude": 51.757847,
      "longitude": 19.237671,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1667402364,
      "ems": null
    },
    {
      "latitude": 51.757755,
      "longitude": 19.243164,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1667402370,
      "ems": null
};