import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220930EPLLEPLL",
    callsign: "BNI8IX",
    name: "Hour building flight to poznan (diverted)",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 8, 30, 13, 43).getTime(),
    arrival: new Date(2022, 8, 30, 16, 28).getTime(),
    singleEnginePistonTime: 165,
    multiEnginePistonTime: 0,
    picTime: 165,
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
      "latitude": 51.720188,
      "longitude": 19.390945,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 249,
      "squawk": "0",
      "timestamp": 1664545847,
      "ems": null
    },
    {
      "latitude": 51.71933,
      "longitude": 19.387455,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 247,
      "squawk": "0",
      "timestamp": 1664545853,
      "ems": null
    },
    {
      "latitude": 51.717907,
      "longitude": 19.381332,
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
      "heading": 248,
      "squawk": "0",
      "timestamp": 1664545865,
      "ems": null
    },
    {
      "latitude": 51.716629,
      "longitude": 19.37632,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664545876,
      "ems": null
    },
    {
      "latitude": 51.715019,
      "longitude": 19.370804,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664545886,
      "ems": null
    },
    {
      "latitude": 51.713928,
      "longitude": 19.36615,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664545895,
      "ems": null
    },
    {
      "latitude": 51.713623,
      "longitude": 19.363251,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1664545899,
      "ems": null
    },
    {
      "latitude": 51.713562,
      "longitude": 19.361324,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664545903,
      "ems": null
    },
    {
      "latitude": 51.713791,
      "longitude": 19.358133,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664545908,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 19.355906,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664545912,
      "ems": null
    },
    {
      "latitude": 51.71434,
      "longitude": 19.353605,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664545916,
      "ems": null
    },
    {
      "latitude": 51.714844,
      "longitude": 19.351303,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664545920,
      "ems": null
    },
    {
      "latitude": 51.715717,
      "longitude": 19.348984,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664545924,
      "ems": null
    },
    {
      "latitude": 51.716766,
      "longitude": 19.347221,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664545928,
      "ems": null
    },
    {
      "latitude": 51.717865,
      "longitude": 19.346033,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1664545932,
      "ems": null
    },
    {
      "latitude": 51.719395,
      "longitude": 19.34494,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1664545936,
      "ems": null
    },
    {
      "latitude": 51.720428,
      "longitude": 19.344624,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1664545940,
      "ems": null
    },
    {
      "latitude": 51.722168,
      "longitude": 19.3444,
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1664545944,
      "ems": null
    },
    {
      "latitude": 51.723492,
      "longitude": 19.344482,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1664545948,
      "ems": null
    },
    {
      "latitude": 51.724731,
      "longitude": 19.344696,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1664545952,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.345016,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1664545956,
      "ems": null
    },
    {
      "latitude": 51.727936,
      "longitude": 19.345217,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1664545960,
      "ems": null
    },
    {
      "latitude": 51.729218,
      "longitude": 19.345366,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1664545964,
      "ems": null
    },
    {
      "latitude": 51.730408,
      "longitude": 19.345587,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664545968,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.345932,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664545972,
      "ems": null
    },
    {
      "latitude": 51.734711,
      "longitude": 19.346405,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1664545980,
      "ems": null
    },
    {
      "latitude": 51.738098,
      "longitude": 19.346775,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1664545988,
      "ems": null
    },
    {
      "latitude": 51.740486,
      "longitude": 19.346924,
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1664545996,
      "ems": null
    },
    {
      "latitude": 51.741604,
      "longitude": 19.346848,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1664546000,
      "ems": null
    },
    {
      "latitude": 51.744278,
      "longitude": 19.345736,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1664546004,
      "ems": null
    },
    {
      "latitude": 51.74593,
      "longitude": 19.343643,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546009,
      "ems": null
    },
    {
      "latitude": 51.747574,
      "longitude": 19.339947,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664546015,
      "ems": null
    },
    {
      "latitude": 51.748856,
      "longitude": 19.336679,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664546020,
      "ems": null
    },
    {
      "latitude": 51.750046,
      "longitude": 19.333414,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664546025,
      "ems": null
    },
    {
      "latitude": 51.751556,
      "longitude": 19.329405,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664546030,
      "ems": null
    },
    {
      "latitude": 51.752262,
      "longitude": 19.327316,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664546035,
      "ems": null
    },
    {
      "latitude": 51.753433,
      "longitude": 19.32406,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664546039,
      "ems": null
    },
    {
      "latitude": 51.755402,
      "longitude": 19.318195,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664546047,
      "ems": null
    },
    {
      "latitude": 51.756729,
      "longitude": 19.314114,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664546053,
      "ems": null
    },
    {
      "latitude": 51.758499,
      "longitude": 19.308014,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664546061,
      "ems": null
    },
    {
      "latitude": 51.759109,
      "longitude": 19.305279,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664546065,
      "ems": null
    },
    {
      "latitude": 51.759705,
      "longitude": 19.30246,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664546069,
      "ems": null
    },
    {
      "latitude": 51.760315,
      "longitude": 19.299469,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664546073,
      "ems": null
    },
    {
      "latitude": 51.76078,
      "longitude": 19.297104,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664546077,
      "ems": null
    },
    {
      "latitude": 51.761528,
      "longitude": 19.29306,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664546081,
      "ems": null
    },
    {
      "latitude": 51.762085,
      "longitude": 19.289856,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664546085,
      "ems": null
    },
    {
      "latitude": 51.762405,
      "longitude": 19.287909,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664546087,
      "ems": null
    },
    {
      "latitude": 51.762924,
      "longitude": 19.285202,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664546091,
      "ems": null
    },
    {
      "latitude": 51.76376,
      "longitude": 19.280548,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664546096,
      "ems": null
    },
    {
      "latitude": 51.764236,
      "longitude": 19.277517,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664546100,
      "ems": null
    },
    {
      "latitude": 51.764366,
      "longitude": 19.274368,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664546104,
      "ems": null
    },
    {
      "latitude": 51.764088,
      "longitude": 19.270172,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664546109,
      "ems": null
    },
    {
      "latitude": 51.76355,
      "longitude": 19.26668,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664546113,
      "ems": null
    },
    {
      "latitude": 51.763092,
      "longitude": 19.263933,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664546117,
      "ems": null
    },
    {
      "latitude": 51.762596,
      "longitude": 19.261398,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664546120,
      "ems": null
    },
    {
      "latitude": 51.762085,
      "longitude": 19.258959,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664546123,
      "ems": null
    },
    {
      "latitude": 51.761806,
      "longitude": 19.257736,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664546124,
      "ems": null
    },
    {
      "latitude": 51.760986,
      "longitude": 19.254208,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664546129,
      "ems": null
    },
    {
      "latitude": 51.760269,
      "longitude": 19.251175,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664546133,
      "ems": null
    },
    {
      "latitude": 51.759571,
      "longitude": 19.248047,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664546137,
      "ems": null
    },
    {
      "latitude": 51.758083,
      "longitude": 19.241257,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664546145,
      "ems": null
    },
    {
      "latitude": 51.757336,
      "longitude": 19.238205,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664546150,
      "ems": null
    },
    {
      "latitude": 51.756313,
      "longitude": 19.234238,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664546155,
      "ems": null
    },
    {
      "latitude": 51.753937,
      "longitude": 19.226379,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664546165,
      "ems": null
    },
    {
      "latitude": 51.752106,
      "longitude": 19.218948,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664546175,
      "ems": null
    },
    {
      "latitude": 51.751423,
      "longitude": 19.215698,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664546180,
      "ems": null
    },
    {
      "latitude": 51.750912,
      "longitude": 19.213409,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664546183,
      "ems": null
    },
    {
      "latitude": 51.750412,
      "longitude": 19.210783,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664546186,
      "ems": null
    },
    {
      "latitude": 51.750076,
      "longitude": 19.209213,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664546188,
      "ems": null
    },
    {
      "latitude": 51.748947,
      "longitude": 19.20373,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664546195,
      "ems": null
    },
    {
      "latitude": 51.748211,
      "longitude": 19.200439,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664546200,
      "ems": null
    },
    {
      "latitude": 51.746979,
      "longitude": 19.194897,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664546207,
      "ems": null
    },
    {
      "latitude": 51.745651,
      "longitude": 19.189682,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664546215,
      "ems": null
    },
    {
      "latitude": 51.744736,
      "longitude": 19.186954,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664546219,
      "ems": null
    },
    {
      "latitude": 51.743835,
      "longitude": 19.184189,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664546223,
      "ems": null
    },
    {
      "latitude": 51.742859,
      "longitude": 19.181015,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664546227,
      "ems": null
    },
    {
      "latitude": 51.74165,
      "longitude": 19.175949,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664546234,
      "ems": null
    },
    {
      "latitude": 51.740765,
      "longitude": 19.172058,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664546239,
      "ems": null
    },
    {
      "latitude": 51.740437,
      "longitude": 19.170609,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664546242,
      "ems": null
    },
    {
      "latitude": 51.739746,
      "longitude": 19.16758,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664546246,
      "ems": null
    },
    {
      "latitude": 51.73904,
      "longitude": 19.164734,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664546249,
      "ems": null
    },
    {
      "latitude": 51.738529,
      "longitude": 19.162674,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664546252,
      "ems": null
    },
    {
      "latitude": 51.73774,
      "longitude": 19.159546,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664546258,
      "ems": null
    },
    {
      "latitude": 51.736248,
      "longitude": 19.153519,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664546265,
      "ems": null
    },
    {
      "latitude": 51.735176,
      "longitude": 19.149475,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664546270,
      "ems": null
    },
    {
      "latitude": 51.734299,
      "longitude": 19.146275,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664546276,
      "ems": null
    },
    {
      "latitude": 51.732971,
      "longitude": 19.141449,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664546282,
      "ems": null
    },
    {
      "latitude": 51.731186,
      "longitude": 19.134844,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664546291,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.130909,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664546296,
      "ems": null
    },
    {
      "latitude": 51.728256,
      "longitude": 19.124748,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664546305,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.118809,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664546313,
      "ems": null
    },
    {
      "latitude": 51.725075,
      "longitude": 19.113998,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664546320,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.109381,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664546326,
      "ems": null
    },
    {
      "latitude": 51.722561,
      "longitude": 19.105377,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664546332,
      "ems": null
    },
    {
      "latitude": 51.721027,
      "longitude": 19.100113,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664546339,
      "ems": null
    },
    {
      "latitude": 51.718929,
      "longitude": 19.093933,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664546348,
      "ems": null
    },
    {
      "latitude": 51.717499,
      "longitude": 19.089636,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664546354,
      "ems": null
    },
    {
      "latitude": 51.716183,
      "longitude": 19.084778,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664546361,
      "ems": null
    },
    {
      "latitude": 51.715767,
      "longitude": 19.082642,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664546363,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 19.080582,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664546367,
      "ems": null
    },
    {
      "latitude": 51.715069,
      "longitude": 19.078598,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664546369,
      "ems": null
    },
    {
      "latitude": 51.714787,
      "longitude": 19.075775,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664546372,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.073008,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664546376,
      "ems": null
    },
    {
      "latitude": 51.714603,
      "longitude": 19.070892,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664546379,
      "ems": null
    },
    {
      "latitude": 51.714523,
      "longitude": 19.06848,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664546382,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.066238,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664546385,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.063721,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664546388,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.062119,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664546390,
      "ems": null
    },
    {
      "latitude": 51.714478,
      "longitude": 19.0592,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664546393,
      "ems": null
    },
    {
      "latitude": 51.714508,
      "longitude": 19.056625,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664546397,
      "ems": null
    },
    {
      "latitude": 51.714478,
      "longitude": 19.054302,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664546400,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.052353,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664546402,
      "ems": null
    },
    {
      "latitude": 51.714417,
      "longitude": 19.047546,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664546409,
      "ems": null
    },
    {
      "latitude": 51.71434,
      "longitude": 19.042425,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664546415,
      "ems": null
    },
    {
      "latitude": 51.714275,
      "longitude": 19.037781,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664546421,
      "ems": null
    },
    {
      "latitude": 51.714138,
      "longitude": 19.033127,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664546427,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 19.028767,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664546433,
      "ems": null
    },
    {
      "latitude": 51.713902,
      "longitude": 19.023743,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664546438,
      "ems": null
    },
    {
      "latitude": 51.713902,
      "longitude": 19.01886,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1664546445,
      "ems": null
    },
    {
      "latitude": 51.713997,
      "longitude": 19.016266,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1664546448,
      "ems": null
    },
    {
      "latitude": 51.714088,
      "longitude": 19.014053,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1664546451,
      "ems": null
    },
    {
      "latitude": 51.714184,
      "longitude": 19.01207,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664546453,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.009552,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664546457,
      "ems": null
    },
    {
      "latitude": 51.714706,
      "longitude": 19.007164,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664546460,
      "ems": null
    },
    {
      "latitude": 51.714844,
      "longitude": 19.005531,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664546462,
      "ems": null
    },
    {
      "latitude": 51.714973,
      "longitude": 19.002991,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664546465,
      "ems": null
    },
    {
      "latitude": 51.715164,
      "longitude": 19.000557,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664546469,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 18.998257,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664546472,
      "ems": null
    },
    {
      "latitude": 51.715576,
      "longitude": 18.995955,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664546475,
      "ems": null
    },
    {
      "latitude": 51.715988,
      "longitude": 18.991205,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664546481,
      "ems": null
    },
    {
      "latitude": 51.716324,
      "longitude": 18.986969,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664546486,
      "ems": null
    },
    {
      "latitude": 51.716766,
      "longitude": 18.982668,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664546492,
      "ems": null
    },
    {
      "latitude": 51.71735,
      "longitude": 18.977814,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664546499,
      "ems": null
    },
    {
      "latitude": 51.717815,
      "longitude": 18.973541,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664546504,
      "ems": null
    },
    {
      "latitude": 51.718323,
      "longitude": 18.968342,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664546511,
      "ems": null
    },
    {
      "latitude": 51.718781,
      "longitude": 18.964109,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664546516,
      "ems": null
    },
    {
      "latitude": 51.719238,
      "longitude": 18.959581,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664546522,
      "ems": null
    },
    {
      "latitude": 51.719723,
      "longitude": 18.954773,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664546529,
      "ems": null
    },
    {
      "latitude": 51.720062,
      "longitude": 18.95149,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664546533,
      "ems": null
    },
    {
      "latitude": 51.720978,
      "longitude": 18.945236,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664546542,
      "ems": null
    },
    {
      "latitude": 51.72163,
      "longitude": 18.942337,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664546546,
      "ems": null
    },
    {
      "latitude": 51.722095,
      "longitude": 18.939972,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664546549,
      "ems": null
    },
    {
      "latitude": 51.722488,
      "longitude": 18.938129,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664546552,
      "ems": null
    },
    {
      "latitude": 51.723038,
      "longitude": 18.93553,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664546555,
      "ems": null
    },
    {
      "latitude": 51.723122,
      "longitude": 18.935165,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664546556,
      "ems": null
    },
    {
      "latitude": 51.724319,
      "longitude": 18.931818,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664546560,
      "ems": null
    },
    {
      "latitude": 51.725307,
      "longitude": 18.929825,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664546564,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 18.928146,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546568,
      "ems": null
    },
    {
      "latitude": 51.727524,
      "longitude": 18.926178,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546570,
      "ems": null
    },
    {
      "latitude": 51.728519,
      "longitude": 18.924561,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546573,
      "ems": null
    },
    {
      "latitude": 51.729824,
      "longitude": 18.922501,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546577,
      "ems": null
    },
    {
      "latitude": 51.730865,
      "longitude": 18.920832,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546580,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 18.919125,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546583,
      "ems": null
    },
    {
      "latitude": 51.732925,
      "longitude": 18.917492,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546586,
      "ems": null
    },
    {
      "latitude": 51.733643,
      "longitude": 18.916245,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546588,
      "ems": null
    },
    {
      "latitude": 51.735764,
      "longitude": 18.912592,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664546595,
      "ems": null
    },
    {
      "latitude": 51.73764,
      "longitude": 18.909401,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546601,
      "ems": null
    },
    {
      "latitude": 51.739792,
      "longitude": 18.905689,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546607,
      "ems": null
    },
    {
      "latitude": 51.741787,
      "longitude": 18.902206,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546613,
      "ems": null
    },
    {
      "latitude": 51.743698,
      "longitude": 18.899002,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546619,
      "ems": null
    },
    {
      "latitude": 51.745789,
      "longitude": 18.895668,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546625,
      "ems": null
    },
    {
      "latitude": 51.746304,
      "longitude": 18.894958,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664546627,
      "ems": null
    },
    {
      "latitude": 51.747887,
      "longitude": 18.89267,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664546631,
      "ems": null
    },
    {
      "latitude": 51.748631,
      "longitude": 18.891602,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664546633,
      "ems": null
    },
    {
      "latitude": 51.749794,
      "longitude": 18.889999,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664546637,
      "ems": null
    },
    {
      "latitude": 51.751144,
      "longitude": 18.888092,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664546640,
      "ems": null
    },
    {
      "latitude": 51.753204,
      "longitude": 18.884979,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546646,
      "ems": null
    },
    {
      "latitude": 51.755241,
      "longitude": 18.881836,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546652,
      "ems": null
    },
    {
      "latitude": 51.757336,
      "longitude": 18.878555,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546658,
      "ems": null
    },
    {
      "latitude": 51.759659,
      "longitude": 18.874884,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546664,
      "ems": null
    },
    {
      "latitude": 51.761478,
      "longitude": 18.871918,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546670,
      "ems": null
    },
    {
      "latitude": 51.763504,
      "longitude": 18.868721,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546675,
      "ems": null
    },
    {
      "latitude": 51.765671,
      "longitude": 18.864975,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664546682,
      "ems": null
    },
    {
      "latitude": 51.767761,
      "longitude": 18.861225,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664546688,
      "ems": null
    },
    {
      "latitude": 51.769814,
      "longitude": 18.85788,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546694,
      "ems": null
    },
    {
      "latitude": 51.771561,
      "longitude": 18.855137,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546700,
      "ems": null
    },
    {
      "latitude": 51.773849,
      "longitude": 18.851351,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546706,
      "ems": null
    },
    {
      "latitude": 51.775909,
      "longitude": 18.848085,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546712,
      "ems": null
    },
    {
      "latitude": 51.778008,
      "longitude": 18.844604,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546719,
      "ems": null
    },
    {
      "latitude": 51.779663,
      "longitude": 18.841702,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664546724,
      "ems": null
    },
    {
      "latitude": 51.781918,
      "longitude": 18.837662,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664546730,
      "ems": null
    },
    {
      "latitude": 51.783188,
      "longitude": 18.835613,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546737,
      "ems": null
    },
    {
      "latitude": 51.786106,
      "longitude": 18.8311,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546743,
      "ems": null
    },
    {
      "latitude": 51.788086,
      "longitude": 18.827894,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546748,
      "ems": null
    },
    {
      "latitude": 51.790375,
      "longitude": 18.824331,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546755,
      "ems": null
    },
    {
      "latitude": 51.792389,
      "longitude": 18.821064,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546760,
      "ems": null
    },
    {
      "latitude": 51.794449,
      "longitude": 18.817575,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546766,
      "ems": null
    },
    {
      "latitude": 51.796509,
      "longitude": 18.814161,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546772,
      "ems": null
    },
    {
      "latitude": 51.798347,
      "longitude": 18.811188,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546778,
      "ems": null
    },
    {
      "latitude": 51.800491,
      "longitude": 18.807777,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546784,
      "ems": null
    },
    {
      "latitude": 51.802734,
      "longitude": 18.804289,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546790,
      "ems": null
    },
    {
      "latitude": 51.804401,
      "longitude": 18.801651,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546795,
      "ems": null
    },
    {
      "latitude": 51.808273,
      "longitude": 18.796198,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664546805,
      "ems": null
    },
    {
      "latitude": 51.810928,
      "longitude": 18.792189,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546813,
      "ems": null
    },
    {
      "latitude": 51.812828,
      "longitude": 18.789368,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546818,
      "ems": null
    },
    {
      "latitude": 51.815002,
      "longitude": 18.786102,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546824,
      "ems": null
    },
    {
      "latitude": 51.817566,
      "longitude": 18.782316,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664546831,
      "ems": null
    },
    {
      "latitude": 51.819809,
      "longitude": 18.778992,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546837,
      "ems": null
    },
    {
      "latitude": 51.821671,
      "longitude": 18.776093,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546843,
      "ems": null
    },
    {
      "latitude": 51.823532,
      "longitude": 18.773117,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546848,
      "ems": null
    },
    {
      "latitude": 51.82608,
      "longitude": 18.768953,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664546855,
      "ems": null
    },
    {
      "latitude": 51.82814,
      "longitude": 18.765539,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546862,
      "ems": null
    },
    {
      "latitude": 51.830563,
      "longitude": 18.761597,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546869,
      "ems": null
    },
    {
      "latitude": 51.832535,
      "longitude": 18.758339,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546874,
      "ems": null
    },
    {
      "latitude": 51.834427,
      "longitude": 18.755188,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546880,
      "ems": null
    },
    {
      "latitude": 51.8368,
      "longitude": 18.751144,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546887,
      "ems": null
    },
    {
      "latitude": 51.838898,
      "longitude": 18.747711,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546893,
      "ems": null
    },
    {
      "latitude": 51.841412,
      "longitude": 18.743744,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664546900,
      "ems": null
    },
    {
      "latitude": 51.844994,
      "longitude": 18.737869,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546910,
      "ems": null
    },
    {
      "latitude": 51.848236,
      "longitude": 18.732431,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546919,
      "ems": null
    },
    {
      "latitude": 51.85025,
      "longitude": 18.729092,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546925,
      "ems": null
    },
    {
      "latitude": 51.852036,
      "longitude": 18.726048,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664546930,
      "ems": null
    },
    {
      "latitude": 51.854259,
      "longitude": 18.721848,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664546937,
      "ems": null
    },
    {
      "latitude": 51.857071,
      "longitude": 18.716473,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664546946,
      "ems": null
    },
    {
      "latitude": 51.858765,
      "longitude": 18.713131,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664546951,
      "ems": null
    },
    {
      "latitude": 51.859844,
      "longitude": 18.711014,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664546955,
      "ems": null
    },
    {
      "latitude": 51.862591,
      "longitude": 18.705521,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664546964,
      "ems": null
    },
    {
      "latitude": 51.865173,
      "longitude": 18.700289,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664546972,
      "ems": null
    },
    {
      "latitude": 51.867432,
      "longitude": 18.69545,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664546979,
      "ems": null
    },
    {
      "latitude": 51.86911,
      "longitude": 18.692347,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664546984,
      "ems": null
    },
    {
      "latitude": 51.870274,
      "longitude": 18.690414,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664546988,
      "ems": null
    },
    {
      "latitude": 51.871437,
      "longitude": 18.688583,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664546991,
      "ems": null
    },
    {
      "latitude": 51.872555,
      "longitude": 18.686981,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664546994,
      "ems": null
    },
    {
      "latitude": 51.873779,
      "longitude": 18.685221,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664546997,
      "ems": null
    },
    {
      "latitude": 51.873951,
      "longitude": 18.684921,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664546998,
      "ems": null
    },
    {
      "latitude": 51.875019,
      "longitude": 18.683319,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664547002,
      "ems": null
    },
    {
      "latitude": 51.877167,
      "longitude": 18.680321,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664547006,
      "ems": null
    },
    {
      "latitude": 51.878094,
      "longitude": 18.679047,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664547009,
      "ems": null
    },
    {
      "latitude": 51.879349,
      "longitude": 18.677216,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664547012,
      "ems": null
    },
    {
      "latitude": 51.880512,
      "longitude": 18.675613,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664547015,
      "ems": null
    },
    {
      "latitude": 51.88163,
      "longitude": 18.674088,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664547018,
      "ems": null
    },
    {
      "latitude": 51.88382,
      "longitude": 18.671112,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664547024,
      "ems": null
    },
    {
      "latitude": 51.88591,
      "longitude": 18.668146,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664547030,
      "ems": null
    },
    {
      "latitude": 51.888241,
      "longitude": 18.664932,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664547037,
      "ems": null
    },
    {
      "latitude": 51.890335,
      "longitude": 18.662033,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664547043,
      "ems": null
    },
    {
      "latitude": 51.892548,
      "longitude": 18.65909,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664547049,
      "ems": null
    },
    {
      "latitude": 51.894791,
      "longitude": 18.656082,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664547055,
      "ems": null
    },
    {
      "latitude": 51.897133,
      "longitude": 18.653215,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547061,
      "ems": null
    },
    {
      "latitude": 51.89946,
      "longitude": 18.65036,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547066,
      "ems": null
    },
    {
      "latitude": 51.901928,
      "longitude": 18.647251,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664547073,
      "ems": null
    },
    {
      "latitude": 51.903854,
      "longitude": 18.644791,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664547078,
      "ems": null
    },
    {
      "latitude": 51.906601,
      "longitude": 18.641281,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547085,
      "ems": null
    },
    {
      "latitude": 51.908936,
      "longitude": 18.638306,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664547091,
      "ems": null
    },
    {
      "latitude": 51.911331,
      "longitude": 18.635324,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547097,
      "ems": null
    },
    {
      "latitude": 51.913696,
      "longitude": 18.632507,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547103,
      "ems": null
    },
    {
      "latitude": 51.91608,
      "longitude": 18.629673,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547109,
      "ems": null
    },
    {
      "latitude": 51.918503,
      "longitude": 18.626785,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547115,
      "ems": null
    },
    {
      "latitude": 51.920746,
      "longitude": 18.624191,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547120,
      "ems": null
    },
    {
      "latitude": 51.923264,
      "longitude": 18.62114,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547127,
      "ems": null
    },
    {
      "latitude": 51.92569,
      "longitude": 18.618011,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664547133,
      "ems": null
    },
    {
      "latitude": 51.927811,
      "longitude": 18.615156,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664547139,
      "ems": null
    },
    {
      "latitude": 51.930138,
      "longitude": 18.611938,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664547145,
      "ems": null
    },
    {
      "latitude": 51.93251,
      "longitude": 18.60878,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664547151,
      "ems": null
    },
    {
      "latitude": 51.934708,
      "longitude": 18.605957,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664547157,
      "ems": null
    },
    {
      "latitude": 51.937042,
      "longitude": 18.603134,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547163,
      "ems": null
    },
    {
      "latitude": 51.939102,
      "longitude": 18.600464,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664547169,
      "ems": null
    },
    {
      "latitude": 51.94117,
      "longitude": 18.597578,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664547175,
      "ems": null
    },
    {
      "latitude": 51.943314,
      "longitude": 18.594675,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664547181,
      "ems": null
    },
    {
      "latitude": 51.945499,
      "longitude": 18.591457,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664547187,
      "ems": null
    },
    {
      "latitude": 51.947571,
      "longitude": 18.588486,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1664547193,
      "ems": null
    },
    {
      "latitude": 51.949585,
      "longitude": 18.58551,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664547199,
      "ems": null
    },
    {
      "latitude": 51.951786,
      "longitude": 18.582747,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547205,
      "ems": null
    },
    {
      "latitude": 51.953182,
      "longitude": 18.581099,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547208,
      "ems": null
    },
    {
      "latitude": 51.954437,
      "longitude": 18.579685,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547211,
      "ems": null
    },
    {
      "latitude": 51.955601,
      "longitude": 18.578274,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547214,
      "ems": null
    },
    {
      "latitude": 51.956818,
      "longitude": 18.576813,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547217,
      "ems": null
    },
    {
      "latitude": 51.958008,
      "longitude": 18.575439,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547220,
      "ems": null
    },
    {
      "latitude": 51.959198,
      "longitude": 18.574066,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547223,
      "ems": null
    },
    {
      "latitude": 51.961514,
      "longitude": 18.571289,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547229,
      "ems": null
    },
    {
      "latitude": 51.963821,
      "longitude": 18.568573,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547235,
      "ems": null
    },
    {
      "latitude": 51.966156,
      "longitude": 18.565598,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547241,
      "ems": null
    },
    {
      "latitude": 51.968491,
      "longitude": 18.562698,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547248,
      "ems": null
    },
    {
      "latitude": 51.970596,
      "longitude": 18.560104,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547253,
      "ems": null
    },
    {
      "latitude": 51.973015,
      "longitude": 18.557163,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1664547260,
      "ems": null
    },
    {
      "latitude": 51.97522,
      "longitude": 18.554459,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547266,
      "ems": null
    },
    {
      "latitude": 51.977158,
      "longitude": 18.552298,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664547271,
      "ems": null
    },
    {
      "latitude": 51.979439,
      "longitude": 18.549709,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664547278,
      "ems": null
    },
    {
      "latitude": 51.981537,
      "longitude": 18.547211,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547283,
      "ems": null
    },
    {
      "latitude": 51.983952,
      "longitude": 18.544373,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547290,
      "ems": null
    },
    {
      "latitude": 51.986069,
      "longitude": 18.542023,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1664547295,
      "ems": null
    },
    {
      "latitude": 51.988632,
      "longitude": 18.539276,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664547302,
      "ems": null
    },
    {
      "latitude": 51.991104,
      "longitude": 18.536758,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1664547308,
      "ems": null
    },
    {
      "latitude": 51.993683,
      "longitude": 18.53417,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1664547314,
      "ems": null
    },
    {
      "latitude": 51.996151,
      "longitude": 18.531345,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547320,
      "ems": null
    },
    {
      "latitude": 51.998615,
      "longitude": 18.528521,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547326,
      "ems": null
    },
    {
      "latitude": 52.001083,
      "longitude": 18.525696,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1664547332,
      "ems": null
    },
    {
      "latitude": 52.003601,
      "longitude": 18.52272,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547338,
      "ems": null
    },
    {
      "latitude": 52.006157,
      "longitude": 18.519732,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1664547344,
      "ems": null
    },
    {
      "latitude": 52.008591,
      "longitude": 18.516693,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664547350,
      "ems": null
    },
    {
      "latitude": 52.010906,
      "longitude": 18.513767,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664547356,
      "ems": null
    },
    {
      "latitude": 52.011978,
      "longitude": 18.512041,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664547359,
      "ems": null
    },
    {
      "latitude": 52.013,
      "longitude": 18.51,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664547362,
      "ems": null
    },
    {
      "latitude": 52.013763,
      "longitude": 18.507996,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664547365,
      "ems": null
    },
    {
      "latitude": 52.014492,
      "longitude": 18.505449,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664547368,
      "ems": null
    },
    {
      "latitude": 52.014999,
      "longitude": 18.503494,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664547370,
      "ems": null
    },
    {
      "latitude": 52.015457,
      "longitude": 18.501129,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664547373,
      "ems": null
    },
    {
      "latitude": 52.015915,
      "longitude": 18.498535,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664547377,
      "ems": null
    },
    {
      "latitude": 52.016445,
      "longitude": 18.496267,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664547380,
      "ems": null
    },
    {
      "latitude": 52.017143,
      "longitude": 18.493757,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664547383,
      "ems": null
    },
    {
      "latitude": 52.0177,
      "longitude": 18.491745,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664547386,
      "ems": null
    },
    {
      "latitude": 52.018448,
      "longitude": 18.489363,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664547389,
      "ems": null
    },
    {
      "latitude": 52.019119,
      "longitude": 18.487015,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664547392,
      "ems": null
    },
    {
      "latitude": 52.019714,
      "longitude": 18.484879,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664547395,
      "ems": null
    },
    {
      "latitude": 52.021008,
      "longitude": 18.480652,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547401,
      "ems": null
    },
    {
      "latitude": 52.022266,
      "longitude": 18.476492,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547406,
      "ems": null
    },
    {
      "latitude": 52.023151,
      "longitude": 18.473667,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664547410,
      "ems": null
    },
    {
      "latitude": 52.023895,
      "longitude": 18.471548,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664547413,
      "ems": null
    },
    {
      "latitude": 52.024639,
      "longitude": 18.469431,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664547416,
      "ems": null
    },
    {
      "latitude": 52.025391,
      "longitude": 18.467255,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664547419,
      "ems": null
    },
    {
      "latitude": 52.026131,
      "longitude": 18.465271,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664547422,
      "ems": null
    },
    {
      "latitude": 52.027542,
      "longitude": 18.461227,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664547428,
      "ems": null
    },
    {
      "latitude": 52.028969,
      "longitude": 18.457109,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664547434,
      "ems": null
    },
    {
      "latitude": 52.030411,
      "longitude": 18.452951,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664547440,
      "ems": null
    },
    {
      "latitude": 52.031845,
      "longitude": 18.448639,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664547446,
      "ems": null
    },
    {
      "latitude": 52.032944,
      "longitude": 18.444977,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547452,
      "ems": null
    },
    {
      "latitude": 52.034042,
      "longitude": 18.441162,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664547458,
      "ems": null
    },
    {
      "latitude": 52.035187,
      "longitude": 18.437347,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547464,
      "ems": null
    },
    {
      "latitude": 52.036148,
      "longitude": 18.433456,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664547470,
      "ems": null
    },
    {
      "latitude": 52.036789,
      "longitude": 18.430193,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664547475,
      "ems": null
    },
    {
      "latitude": 52.037338,
      "longitude": 18.427582,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664547479,
      "ems": null
    },
    {
      "latitude": 52.038025,
      "longitude": 18.424377,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664547483,
      "ems": null
    },
    {
      "latitude": 52.038254,
      "longitude": 18.423233,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664547485,
      "ems": null
    },
    {
      "latitude": 52.039032,
      "longitude": 18.419647,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664547490,
      "ems": null
    },
    {
      "latitude": 52.039398,
      "longitude": 18.417952,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664547493,
      "ems": null
    },
    {
      "latitude": 52.039673,
      "longitude": 18.416519,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664547495,
      "ems": null
    },
    {
      "latitude": 52.040588,
      "longitude": 18.412323,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664547501,
      "ems": null
    },
    {
      "latitude": 52.041321,
      "longitude": 18.408966,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664547506,
      "ems": null
    },
    {
      "latitude": 52.042236,
      "longitude": 18.404465,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664547513,
      "ems": null
    },
    {
      "latitude": 52.043026,
      "longitude": 18.400766,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664547519,
      "ems": null
    },
    {
      "latitude": 52.043976,
      "longitude": 18.396301,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664547525,
      "ems": null
    },
    {
      "latitude": 52.044659,
      "longitude": 18.392839,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664547531,
      "ems": null
    },
    {
      "latitude": 52.045635,
      "longitude": 18.388838,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664547536,
      "ems": null
    },
    {
      "latitude": 52.046658,
      "longitude": 18.384521,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664547542,
      "ems": null
    },
    {
      "latitude": 52.047684,
      "longitude": 18.38028,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664547548,
      "ems": null
    },
    {
      "latitude": 52.048801,
      "longitude": 18.375811,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664547555,
      "ems": null
    },
    {
      "latitude": 52.049824,
      "longitude": 18.371572,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664547560,
      "ems": null
    },
    {
      "latitude": 52.050896,
      "longitude": 18.367022,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664547567,
      "ems": null
    },
    {
      "latitude": 52.051872,
      "longitude": 18.362627,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664547573,
      "ems": null
    },
    {
      "latitude": 52.052719,
      "longitude": 18.358154,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664547579,
      "ems": null
    },
    {
      "latitude": 52.053085,
      "longitude": 18.356018,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664547581,
      "ems": null
    },
    {
      "latitude": 52.053501,
      "longitude": 18.353525,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664547585,
      "ems": null
    },
    {
      "latitude": 52.053875,
      "longitude": 18.351406,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664547588,
      "ems": null
    },
    {
      "latitude": 52.054245,
      "longitude": 18.349131,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664547591,
      "ems": null
    },
    {
      "latitude": 52.054619,
      "longitude": 18.346933,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664547593,
      "ems": null
    },
    {
      "latitude": 52.054993,
      "longitude": 18.344421,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664547597,
      "ems": null
    },
    {
      "latitude": 52.055271,
      "longitude": 18.342381,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664547599,
      "ems": null
    },
    {
      "latitude": 52.055603,
      "longitude": 18.339539,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664547603,
      "ems": null
    },
    {
      "latitude": 52.055878,
      "longitude": 18.337097,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664547606,
      "ems": null
    },
    {
      "latitude": 52.056435,
      "longitude": 18.332415,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664547612,
      "ems": null
    },
    {
      "latitude": 52.056713,
      "longitude": 18.330061,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664547615,
      "ems": null
    },
    {
      "latitude": 52.056976,
      "longitude": 18.327637,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664547618,
      "ems": null
    },
    {
      "latitude": 52.057178,
      "longitude": 18.32543,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664547620,
      "ems": null
    },
    {
      "latitude": 52.057411,
      "longitude": 18.323154,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1664547624,
      "ems": null
    },
    {
      "latitude": 52.057846,
      "longitude": 18.318558,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664547630,
      "ems": null
    },
    {
      "latitude": 52.058212,
      "longitude": 18.313828,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664547636,
      "ems": null
    },
    {
      "latitude": 52.058578,
      "longitude": 18.309326,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664547642,
      "ems": null
    },
    {
      "latitude": 52.059227,
      "longitude": 18.304949,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664547648,
      "ems": null
    },
    {
      "latitude": 52.059769,
      "longitude": 18.30307,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664547651,
      "ems": null
    },
    {
      "latitude": 52.060719,
      "longitude": 18.301025,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664547654,
      "ems": null
    },
    {
      "latitude": 52.061554,
      "longitude": 18.299255,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664547657,
      "ems": null
    },
    {
      "latitude": 52.062469,
      "longitude": 18.297424,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664547660,
      "ems": null
    },
    {
      "latitude": 52.063385,
      "longitude": 18.295593,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664547663,
      "ems": null
    },
    {
      "latitude": 52.064392,
      "longitude": 18.29361,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664547666,
      "ems": null
    },
    {
      "latitude": 52.065353,
      "longitude": 18.291855,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664547669,
      "ems": null
    },
    {
      "latitude": 52.066315,
      "longitude": 18.2901,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664547672,
      "ems": null
    },
    {
      "latitude": 52.06723,
      "longitude": 18.288345,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664547675,
      "ems": null
    },
    {
      "latitude": 52.068165,
      "longitude": 18.286587,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664547678,
      "ems": null
    },
    {
      "latitude": 52.069191,
      "longitude": 18.284624,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664547681,
      "ems": null
    },
    {
      "latitude": 52.071007,
      "longitude": 18.281328,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664547687,
      "ems": null
    },
    {
      "latitude": 52.072815,
      "longitude": 18.27774,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664547693,
      "ems": null
    },
    {
      "latitude": 52.074554,
      "longitude": 18.274307,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664547699,
      "ems": null
    },
    {
      "latitude": 52.076405,
      "longitude": 18.270735,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664547705,
      "ems": null
    },
    {
      "latitude": 52.078175,
      "longitude": 18.267202,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664547711,
      "ems": null
    },
    {
      "latitude": 52.079945,
      "longitude": 18.263672,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664547717,
      "ems": null
    },
    {
      "latitude": 52.081879,
      "longitude": 18.260269,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664547723,
      "ems": null
    },
    {
      "latitude": 52.083759,
      "longitude": 18.257002,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664547729,
      "ems": null
    },
    {
      "latitude": 52.08469,
      "longitude": 18.255432,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664547732,
      "ems": null
    },
    {
      "latitude": 52.08567,
      "longitude": 18.253784,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "timestamp": 1664547735,
      "ems": null
    },
    {
      "latitude": 52.086739,
      "longitude": 18.252058,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1664547738,
      "ems": null
    },
    {
      "latitude": 52.087673,
      "longitude": 18.250645,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664547741,
      "ems": null
    },
    {
      "latitude": 52.089706,
      "longitude": 18.247299,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664547747,
      "ems": null
    },
    {
      "latitude": 52.092747,
      "longitude": 18.241856,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664547756,
      "ems": null
    },
    {
      "latitude": 52.094513,
      "longitude": 18.238602,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664547762,
      "ems": null
    },
    {
      "latitude": 52.096516,
      "longitude": 18.234951,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664547768,
      "ems": null
    },
    {
      "latitude": 52.097492,
      "longitude": 18.233225,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664547771,
      "ems": null
    },
    {
      "latitude": 52.099403,
      "longitude": 18.229692,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664547777,
      "ems": null
    },
    {
      "latitude": 52.101379,
      "longitude": 18.226166,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664547783,
      "ems": null
    },
    {
      "latitude": 52.103359,
      "longitude": 18.222788,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664547789,
      "ems": null
    },
    {
      "latitude": 52.105316,
      "longitude": 18.219452,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664547795,
      "ems": null
    },
    {
      "latitude": 52.107056,
      "longitude": 18.216476,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664547801,
      "ems": null
    },
    {
      "latitude": 52.109299,
      "longitude": 18.212357,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664547807,
      "ems": null
    },
    {
      "latitude": 52.111221,
      "longitude": 18.208618,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664547813,
      "ems": null
    },
    {
      "latitude": 52.113136,
      "longitude": 18.204817,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664547819,
      "ems": null
    },
    {
      "latitude": 52.114204,
      "longitude": 18.202776,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1664547823,
      "ems": null
    },
    {
      "latitude": 52.115883,
      "longitude": 18.199324,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664547828,
      "ems": null
    },
    {
      "latitude": 52.116859,
      "longitude": 18.197283,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664547832,
      "ems": null
    },
    {
      "latitude": 52.117584,
      "longitude": 18.195419,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664547834,
      "ems": null
    },
    {
      "latitude": 52.118317,
      "longitude": 18.193665,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664547837,
      "ems": null
    },
    {
      "latitude": 52.119141,
      "longitude": 18.191528,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664547840,
      "ems": null
    },
    {
      "latitude": 52.119873,
      "longitude": 18.189697,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664547844,
      "ems": null
    },
    {
      "latitude": 52.120697,
      "longitude": 18.187637,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664547846,
      "ems": null
    },
    {
      "latitude": 52.121468,
      "longitude": 18.185591,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664547850,
      "ems": null
    },
    {
      "latitude": 52.122253,
      "longitude": 18.18367,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664547852,
      "ems": null
    },
    {
      "latitude": 52.123032,
      "longitude": 18.18161,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664547856,
      "ems": null
    },
    {
      "latitude": 52.124405,
      "longitude": 18.177872,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664547861,
      "ems": null
    },
    {
      "latitude": 52.125938,
      "longitude": 18.173899,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664547867,
      "ems": null
    },
    {
      "latitude": 52.127426,
      "longitude": 18.169861,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664547873,
      "ems": null
    },
    {
      "latitude": 52.128078,
      "longitude": 18.167856,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664547876,
      "ems": null
    },
    {
      "latitude": 52.128799,
      "longitude": 18.165512,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664547880,
      "ems": null
    },
    {
      "latitude": 52.129395,
      "longitude": 18.163452,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547882,
      "ems": null
    },
    {
      "latitude": 52.130779,
      "longitude": 18.159145,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664547889,
      "ems": null
    },
    {
      "latitude": 52.132187,
      "longitude": 18.154984,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664547894,
      "ems": null
    },
    {
      "latitude": 52.133526,
      "longitude": 18.150827,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664547900,
      "ems": null
    },
    {
      "latitude": 52.134796,
      "longitude": 18.146515,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664547907,
      "ems": null
    },
    {
      "latitude": 52.136177,
      "longitude": 18.142117,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664547913,
      "ems": null
    },
    {
      "latitude": 52.137497,
      "longitude": 18.137894,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547918,
      "ems": null
    },
    {
      "latitude": 52.138878,
      "longitude": 18.133406,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664547925,
      "ems": null
    },
    {
      "latitude": 52.140091,
      "longitude": 18.129246,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664547931,
      "ems": null
    },
    {
      "latitude": 52.141342,
      "longitude": 18.124847,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664547937,
      "ems": null
    },
    {
      "latitude": 52.142555,
      "longitude": 18.120615,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664547943,
      "ems": null
    },
    {
      "latitude": 52.143768,
      "longitude": 18.116074,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664547949,
      "ems": null
    },
    {
      "latitude": 52.144279,
      "longitude": 18.113943,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664547952,
      "ems": null
    },
    {
      "latitude": 52.145489,
      "longitude": 18.109549,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547958,
      "ems": null
    },
    {
      "latitude": 52.146744,
      "longitude": 18.105621,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664547964,
      "ems": null
    },
    {
      "latitude": 52.148422,
      "longitude": 18.100368,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664547971,
      "ems": null
    },
    {
      "latitude": 52.150097,
      "longitude": 18.09511,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664547979,
      "ems": null
    },
    {
      "latitude": 52.150658,
      "longitude": 18.093227,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547982,
      "ems": null
    },
    {
      "latitude": 52.152054,
      "longitude": 18.088833,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547988,
      "ems": null
    },
    {
      "latitude": 52.153217,
      "longitude": 18.085066,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664547994,
      "ems": null
    },
    {
      "latitude": 52.154526,
      "longitude": 18.081055,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548000,
      "ems": null
    },
    {
      "latitude": 52.155869,
      "longitude": 18.076904,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548006,
      "ems": null
    },
    {
      "latitude": 52.157127,
      "longitude": 18.073294,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548012,
      "ems": null
    },
    {
      "latitude": 52.158646,
      "longitude": 18.069077,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548018,
      "ems": null
    },
    {
      "latitude": 52.159363,
      "longitude": 18.067017,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548021,
      "ems": null
    },
    {
      "latitude": 52.160797,
      "longitude": 18.063126,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548027,
      "ems": null
    },
    {
      "latitude": 52.162201,
      "longitude": 18.05917,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548033,
      "ems": null
    },
    {
      "latitude": 52.163681,
      "longitude": 18.055115,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548039,
      "ems": null
    },
    {
      "latitude": 52.165192,
      "longitude": 18.051147,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548045,
      "ems": null
    },
    {
      "latitude": 52.166672,
      "longitude": 18.047241,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548051,
      "ems": null
    },
    {
      "latitude": 52.168346,
      "longitude": 18.043003,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548057,
      "ems": null
    },
    {
      "latitude": 52.169815,
      "longitude": 18.039322,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548063,
      "ems": null
    },
    {
      "latitude": 52.172211,
      "longitude": 18.033194,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548072,
      "ems": null
    },
    {
      "latitude": 52.173706,
      "longitude": 18.029251,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548078,
      "ems": null
    },
    {
      "latitude": 52.175144,
      "longitude": 18.025269,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548084,
      "ems": null
    },
    {
      "latitude": 52.176636,
      "longitude": 18.02124,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548090,
      "ems": null
    },
    {
      "latitude": 52.178215,
      "longitude": 18.017029,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548096,
      "ems": null
    },
    {
      "latitude": 52.179703,
      "longitude": 18.013229,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548102,
      "ems": null
    },
    {
      "latitude": 52.181381,
      "longitude": 18.009104,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548108,
      "ems": null
    },
    {
      "latitude": 52.182999,
      "longitude": 18.005219,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1664548114,
      "ems": null
    },
    {
      "latitude": 52.184734,
      "longitude": 18.001099,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548120,
      "ems": null
    },
    {
      "latitude": 52.186314,
      "longitude": 17.997019,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548127,
      "ems": null
    },
    {
      "latitude": 52.187714,
      "longitude": 17.99333,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548132,
      "ems": null
    },
    {
      "latitude": 52.189201,
      "longitude": 17.989328,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548138,
      "ems": null
    },
    {
      "latitude": 52.190784,
      "longitude": 17.984854,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548145,
      "ems": null
    },
    {
      "latitude": 52.192276,
      "longitude": 17.980774,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548150,
      "ems": null
    },
    {
      "latitude": 52.193756,
      "longitude": 17.976608,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548157,
      "ems": null
    },
    {
      "latitude": 52.195084,
      "longitude": 17.972641,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548162,
      "ems": null
    },
    {
      "latitude": 52.19664,
      "longitude": 17.968445,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548168,
      "ems": null
    },
    {
      "latitude": 52.198326,
      "longitude": 17.964451,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664548174,
      "ems": null
    },
    {
      "latitude": 52.199909,
      "longitude": 17.960056,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548181,
      "ems": null
    },
    {
      "latitude": 52.201214,
      "longitude": 17.955976,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548187,
      "ems": null
    },
    {
      "latitude": 52.202515,
      "longitude": 17.951817,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548192,
      "ems": null
    },
    {
      "latitude": 52.203918,
      "longitude": 17.947464,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548198,
      "ems": null
    },
    {
      "latitude": 52.204659,
      "longitude": 17.945147,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548202,
      "ems": null
    },
    {
      "latitude": 52.205933,
      "longitude": 17.941055,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548208,
      "ems": null
    },
    {
      "latitude": 52.207352,
      "longitude": 17.936554,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548214,
      "ems": null
    },
    {
      "latitude": 52.208633,
      "longitude": 17.932434,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548220,
      "ems": null
    },
    {
      "latitude": 52.209961,
      "longitude": 17.928238,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548226,
      "ems": null
    },
    {
      "latitude": 52.210693,
      "longitude": 17.926331,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548229,
      "ems": null
    },
    {
      "latitude": 52.211563,
      "longitude": 17.924347,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1664548232,
      "ems": null
    },
    {
      "latitude": 52.212433,
      "longitude": 17.922781,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664548234,
      "ems": null
    },
    {
      "latitude": 52.213455,
      "longitude": 17.921213,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1664548238,
      "ems": null
    },
    {
      "latitude": 52.214432,
      "longitude": 17.919565,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1664548241,
      "ems": null
    },
    {
      "latitude": 52.215408,
      "longitude": 17.917786,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1664548244,
      "ems": null
    },
    {
      "latitude": 52.21669,
      "longitude": 17.914352,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548249,
      "ems": null
    },
    {
      "latitude": 52.217651,
      "longitude": 17.910614,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664548256,
      "ems": null
    },
    {
      "latitude": 52.218246,
      "longitude": 17.908401,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664548258,
      "ems": null
    },
    {
      "latitude": 52.218857,
      "longitude": 17.906382,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548262,
      "ems": null
    },
    {
      "latitude": 52.219482,
      "longitude": 17.904358,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548265,
      "ems": null
    },
    {
      "latitude": 52.220066,
      "longitude": 17.902615,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548268,
      "ems": null
    },
    {
      "latitude": 52.220673,
      "longitude": 17.90073,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548271,
      "ems": null
    },
    {
      "latitude": 52.221184,
      "longitude": 17.899082,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548274,
      "ems": null
    },
    {
      "latitude": 52.221817,
      "longitude": 17.89711,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548277,
      "ems": null
    },
    {
      "latitude": 52.222904,
      "longitude": 17.893354,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664548283,
      "ems": null
    },
    {
      "latitude": 52.224243,
      "longitude": 17.889252,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548289,
      "ems": null
    },
    {
      "latitude": 52.225605,
      "longitude": 17.885508,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548295,
      "ems": null
    },
    {
      "latitude": 52.22699,
      "longitude": 17.88147,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548301,
      "ems": null
    },
    {
      "latitude": 52.228306,
      "longitude": 17.877346,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548307,
      "ems": null
    },
    {
      "latitude": 52.229424,
      "longitude": 17.873972,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548312,
      "ems": null
    },
    {
      "latitude": 52.231064,
      "longitude": 17.869492,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548319,
      "ems": null
    },
    {
      "latitude": 52.232494,
      "longitude": 17.865183,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548325,
      "ems": null
    },
    {
      "latitude": 52.233902,
      "longitude": 17.860947,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548331,
      "ems": null
    },
    {
      "latitude": 52.235287,
      "longitude": 17.856943,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548337,
      "ems": null
    },
    {
      "latitude": 52.23674,
      "longitude": 17.853012,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548343,
      "ems": null
    },
    {
      "latitude": 52.238022,
      "longitude": 17.849274,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548348,
      "ems": null
    },
    {
      "latitude": 52.24041,
      "longitude": 17.842581,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548358,
      "ems": null
    },
    {
      "latitude": 52.24173,
      "longitude": 17.838974,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548364,
      "ems": null
    },
    {
      "latitude": 52.243202,
      "longitude": 17.83489,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548370,
      "ems": null
    },
    {
      "latitude": 52.244568,
      "longitude": 17.830658,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548376,
      "ems": null
    },
    {
      "latitude": 52.245949,
      "longitude": 17.826338,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548382,
      "ems": null
    },
    {
      "latitude": 52.247269,
      "longitude": 17.822266,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548388,
      "ems": null
    },
    {
      "latitude": 52.24865,
      "longitude": 17.818098,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548395,
      "ems": null
    },
    {
      "latitude": 52.249905,
      "longitude": 17.814959,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548399,
      "ems": null
    },
    {
      "latitude": 52.251583,
      "longitude": 17.810329,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548407,
      "ems": null
    },
    {
      "latitude": 52.252979,
      "longitude": 17.806248,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548412,
      "ems": null
    },
    {
      "latitude": 52.254318,
      "longitude": 17.802277,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548418,
      "ems": null
    },
    {
      "latitude": 52.255726,
      "longitude": 17.798166,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548424,
      "ems": null
    },
    {
      "latitude": 52.257339,
      "longitude": 17.793427,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548431,
      "ems": null
    },
    {
      "latitude": 52.258751,
      "longitude": 17.789377,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548438,
      "ems": null
    },
    {
      "latitude": 52.260006,
      "longitude": 17.785452,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548443,
      "ems": null
    },
    {
      "latitude": 52.261311,
      "longitude": 17.781765,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548449,
      "ems": null
    },
    {
      "latitude": 52.262661,
      "longitude": 17.778076,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548455,
      "ems": null
    },
    {
      "latitude": 52.263931,
      "longitude": 17.774124,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548462,
      "ems": null
    },
    {
      "latitude": 52.265121,
      "longitude": 17.770157,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548468,
      "ems": null
    },
    {
      "latitude": 52.266449,
      "longitude": 17.766266,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548473,
      "ems": null
    },
    {
      "latitude": 52.26796,
      "longitude": 17.762375,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548479,
      "ems": null
    },
    {
      "latitude": 52.26955,
      "longitude": 17.758379,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548485,
      "ems": null
    },
    {
      "latitude": 52.271118,
      "longitude": 17.754211,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548492,
      "ems": null
    },
    {
      "latitude": 52.271713,
      "longitude": 17.752533,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548494,
      "ems": null
    },
    {
      "latitude": 52.273273,
      "longitude": 17.74802,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548501,
      "ems": null
    },
    {
      "latitude": 52.274551,
      "longitude": 17.744217,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548506,
      "ems": null
    },
    {
      "latitude": 52.276154,
      "longitude": 17.739944,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548513,
      "ems": null
    },
    {
      "latitude": 52.277653,
      "longitude": 17.735857,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548519,
      "ems": null
    },
    {
      "latitude": 52.279232,
      "longitude": 17.731619,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548525,
      "ems": null
    },
    {
      "latitude": 52.280685,
      "longitude": 17.727661,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548530,
      "ems": null
    },
    {
      "latitude": 52.282307,
      "longitude": 17.723223,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548537,
      "ems": null
    },
    {
      "latitude": 52.283707,
      "longitude": 17.71904,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548543,
      "ems": null
    },
    {
      "latitude": 52.285172,
      "longitude": 17.714844,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548549,
      "ems": null
    },
    {
      "latitude": 52.286636,
      "longitude": 17.710724,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548555,
      "ems": null
    },
    {
      "latitude": 52.28801,
      "longitude": 17.706757,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548561,
      "ems": null
    },
    {
      "latitude": 52.289429,
      "longitude": 17.702663,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548567,
      "ems": null
    },
    {
      "latitude": 52.290871,
      "longitude": 17.698425,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548573,
      "ems": null
    },
    {
      "latitude": 52.292221,
      "longitude": 17.694502,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548579,
      "ems": null
    },
    {
      "latitude": 52.293617,
      "longitude": 17.690107,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548585,
      "ems": null
    },
    {
      "latitude": 52.294876,
      "longitude": 17.686157,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548591,
      "ems": null
    },
    {
      "latitude": 52.296318,
      "longitude": 17.681789,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548597,
      "ems": null
    },
    {
      "latitude": 52.297714,
      "longitude": 17.677708,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548603,
      "ems": null
    },
    {
      "latitude": 52.299019,
      "longitude": 17.67355,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548609,
      "ems": null
    },
    {
      "latitude": 52.300232,
      "longitude": 17.669449,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548615,
      "ems": null
    },
    {
      "latitude": 52.301422,
      "longitude": 17.665558,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548621,
      "ems": null
    },
    {
      "latitude": 52.302883,
      "longitude": 17.661306,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548627,
      "ems": null
    },
    {
      "latitude": 52.304184,
      "longitude": 17.657148,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548633,
      "ems": null
    },
    {
      "latitude": 52.305397,
      "longitude": 17.653147,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664548639,
      "ems": null
    },
    {
      "latitude": 52.306515,
      "longitude": 17.649221,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664548645,
      "ems": null
    },
    {
      "latitude": 52.307648,
      "longitude": 17.644958,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664548651,
      "ems": null
    },
    {
      "latitude": 52.308151,
      "longitude": 17.642822,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664548654,
      "ems": null
    },
    {
      "latitude": 52.308609,
      "longitude": 17.640991,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664548657,
      "ems": null
    },
    {
      "latitude": 52.309113,
      "longitude": 17.638855,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664548660,
      "ems": null
    },
    {
      "latitude": 52.309525,
      "longitude": 17.636948,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664548662,
      "ems": null
    },
    {
      "latitude": 52.310051,
      "longitude": 17.63447,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664548666,
      "ems": null
    },
    {
      "latitude": 52.31131,
      "longitude": 17.630075,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548672,
      "ems": null
    },
    {
      "latitude": 52.311958,
      "longitude": 17.628191,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548675,
      "ems": null
    },
    {
      "latitude": 52.312775,
      "longitude": 17.626114,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548678,
      "ems": null
    },
    {
      "latitude": 52.313507,
      "longitude": 17.624054,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548681,
      "ems": null
    },
    {
      "latitude": 52.31424,
      "longitude": 17.621994,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1664548684,
      "ems": null
    },
    {
      "latitude": 52.314938,
      "longitude": 17.619951,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548687,
      "ems": null
    },
    {
      "latitude": 52.315613,
      "longitude": 17.617874,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664548690,
      "ems": null
    },
    {
      "latitude": 52.316429,
      "longitude": 17.615479,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548693,
      "ems": null
    },
    {
      "latitude": 52.317123,
      "longitude": 17.613602,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1664548696,
      "ems": null
    },
    {
      "latitude": 52.317871,
      "longitude": 17.611712,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548699,
      "ems": null
    },
    {
      "latitude": 52.319504,
      "longitude": 17.607498,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548705,
      "ems": null
    },
    {
      "latitude": 52.321178,
      "longitude": 17.603472,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548711,
      "ems": null
    },
    {
      "latitude": 52.323029,
      "longitude": 17.59903,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548717,
      "ems": null
    },
    {
      "latitude": 52.323784,
      "longitude": 17.597036,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548720,
      "ems": null
    },
    {
      "latitude": 52.325508,
      "longitude": 17.592564,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548726,
      "ems": null
    },
    {
      "latitude": 52.327194,
      "longitude": 17.588196,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548732,
      "ems": null
    },
    {
      "latitude": 52.329025,
      "longitude": 17.583466,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548738,
      "ems": null
    },
    {
      "latitude": 52.330948,
      "longitude": 17.57843,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548744,
      "ems": null
    },
    {
      "latitude": 52.332916,
      "longitude": 17.573395,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664548750,
      "ems": null
    },
    {
      "latitude": 52.33477,
      "longitude": 17.568708,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1664548756,
      "ems": null
    },
    {
      "latitude": 52.33667,
      "longitude": 17.563629,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664548762,
      "ems": null
    },
    {
      "latitude": 52.337402,
      "longitude": 17.561493,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548765,
      "ems": null
    },
    {
      "latitude": 52.338272,
      "longitude": 17.558517,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664548768,
      "ems": null
    },
    {
      "latitude": 52.338959,
      "longitude": 17.555771,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664548771,
      "ems": null
    },
    {
      "latitude": 52.339462,
      "longitude": 17.553329,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664548774,
      "ems": null
    },
    {
      "latitude": 52.33992,
      "longitude": 17.550735,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664548777,
      "ems": null
    },
    {
      "latitude": 52.340424,
      "longitude": 17.547836,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664548780,
      "ems": null
    },
    {
      "latitude": 52.340881,
      "longitude": 17.545166,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664548783,
      "ems": null
    },
    {
      "latitude": 52.341248,
      "longitude": 17.542953,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664548786,
      "ems": null
    },
    {
      "latitude": 52.34166,
      "longitude": 17.540222,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664548789,
      "ems": null
    },
    {
      "latitude": 52.342125,
      "longitude": 17.537554,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664548792,
      "ems": null
    },
    {
      "latitude": 52.342403,
      "longitude": 17.535435,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664548795,
      "ems": null
    },
    {
      "latitude": 52.342823,
      "longitude": 17.532375,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664548798,
      "ems": null
    },
    {
      "latitude": 52.34317,
      "longitude": 17.529602,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664548801,
      "ems": null
    },
    {
      "latitude": 52.343445,
      "longitude": 17.526932,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664548804,
      "ems": null
    },
    {
      "latitude": 52.343754,
      "longitude": 17.52437,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664548807,
      "ems": null
    },
    {
      "latitude": 52.344685,
      "longitude": 17.516758,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664548816,
      "ems": null
    },
    {
      "latitude": 52.345524,
      "longitude": 17.511108,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664548822,
      "ems": null
    },
    {
      "latitude": 52.346008,
      "longitude": 17.507935,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664548828,
      "ems": null
    },
    {
      "latitude": 52.347015,
      "longitude": 17.501526,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664548834,
      "ems": null
    },
    {
      "latitude": 52.347572,
      "longitude": 17.498474,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664548837,
      "ems": null
    },
    {
      "latitude": 52.347805,
      "longitude": 17.497141,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664548839,
      "ems": null
    },
    {
      "latitude": 52.348782,
      "longitude": 17.491882,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664548846,
      "ems": null
    },
    {
      "latitude": 52.34935,
      "longitude": 17.48909,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664548849,
      "ems": null
    },
    {
      "latitude": 52.35041,
      "longitude": 17.484192,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664548855,
      "ems": null
    },
    {
      "latitude": 52.35083,
      "longitude": 17.482229,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664548858,
      "ems": null
    },
    {
      "latitude": 52.351391,
      "longitude": 17.479876,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664548861,
      "ems": null
    },
    {
      "latitude": 52.3526,
      "longitude": 17.474518,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664548867,
      "ems": null
    },
    {
      "latitude": 52.353561,
      "longitude": 17.470398,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664548873,
      "ems": null
    },
    {
      "latitude": 52.355026,
      "longitude": 17.465286,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548879,
      "ems": null
    },
    {
      "latitude": 52.355671,
      "longitude": 17.46324,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664548882,
      "ems": null
    },
    {
      "latitude": 52.356323,
      "longitude": 17.461199,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548885,
      "ems": null
    },
    {
      "latitude": 52.356838,
      "longitude": 17.459551,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664548888,
      "ems": null
    },
    {
      "latitude": 52.35759,
      "longitude": 17.457199,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548891,
      "ems": null
    },
    {
      "latitude": 52.35791,
      "longitude": 17.456055,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548893,
      "ems": null
    },
    {
      "latitude": 52.358734,
      "longitude": 17.453384,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664548897,
      "ems": null
    },
    {
      "latitude": 52.359257,
      "longitude": 17.451626,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664548899,
      "ems": null
    },
    {
      "latitude": 52.360283,
      "longitude": 17.448093,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664548904,
      "ems": null
    },
    {
      "latitude": 52.361629,
      "longitude": 17.442915,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664548912,
      "ems": null
    },
    {
      "latitude": 52.362469,
      "longitude": 17.439383,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664548917,
      "ems": null
    },
    {
      "latitude": 52.363354,
      "longitude": 17.435617,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664548921,
      "ems": null
    },
    {
      "latitude": 52.363586,
      "longitude": 17.43454,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664548923,
      "ems": null
    },
    {
      "latitude": 52.364426,
      "longitude": 17.430908,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664548928,
      "ems": null
    },
    {
      "latitude": 52.365234,
      "longitude": 17.427216,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664548933,
      "ems": null
    },
    {
      "latitude": 52.3661,
      "longitude": 17.423061,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664548938,
      "ems": null
    },
    {
      "latitude": 52.366745,
      "longitude": 17.419052,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664548943,
      "ems": null
    },
    {
      "latitude": 52.367405,
      "longitude": 17.414743,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664548948,
      "ems": null
    },
    {
      "latitude": 52.368073,
      "longitude": 17.41066,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664548953,
      "ems": null
    },
    {
      "latitude": 52.368576,
      "longitude": 17.407761,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664548957,
      "ems": null
    },
    {
      "latitude": 52.369404,
      "longitude": 17.402658,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664548963,
      "ems": null
    },
    {
      "latitude": 52.371037,
      "longitude": 17.395437,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664548973,
      "ems": null
    },
    {
      "latitude": 52.372059,
      "longitude": 17.391672,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1664548978,
      "ems": null
    },
    {
      "latitude": 52.373154,
      "longitude": 17.387543,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664548983,
      "ems": null
    },
    {
      "latitude": 52.373966,
      "longitude": 17.383982,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664548987,
      "ems": null
    },
    {
      "latitude": 52.374939,
      "longitude": 17.380142,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664548993,
      "ems": null
    },
    {
      "latitude": 52.376247,
      "longitude": 17.374485,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664549001,
      "ems": null
    },
    {
      "latitude": 52.376667,
      "longitude": 17.372524,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664549004,
      "ems": null
    },
    {
      "latitude": 52.378063,
      "longitude": 17.365854,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664549011,
      "ems": null
    },
    {
      "latitude": 52.378483,
      "longitude": 17.363264,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664549015,
      "ems": null
    },
    {
      "latitude": 52.378811,
      "longitude": 17.36138,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664549017,
      "ems": null
    },
    {
      "latitude": 52.379833,
      "longitude": 17.356985,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664549023,
      "ems": null
    },
    {
      "latitude": 52.380844,
      "longitude": 17.352905,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664549030,
      "ems": null
    },
    {
      "latitude": 52.381603,
      "longitude": 17.349295,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664549035,
      "ems": null
    },
    {
      "latitude": 52.382446,
      "longitude": 17.344131,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664549042,
      "ems": null
    },
    {
      "latitude": 52.382904,
      "longitude": 17.340506,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1664549047,
      "ems": null
    },
    {
      "latitude": 52.383041,
      "longitude": 17.338715,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664549049,
      "ems": null
    },
    {
      "latitude": 52.383224,
      "longitude": 17.336349,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664549054,
      "ems": null
    },
    {
      "latitude": 52.383499,
      "longitude": 17.331924,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664549059,
      "ems": null
    },
    {
      "latitude": 52.383743,
      "longitude": 17.32897,
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664549063,
      "ems": null
    },
    {
      "latitude": 52.384628,
      "longitude": 17.322693,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664549071,
      "ems": null
    },
    {
      "latitude": 52.385788,
      "longitude": 17.315979,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664549080,
      "ems": null
    },
    {
      "latitude": 52.386444,
      "longitude": 17.312412,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664549084,
      "ems": null
    },
    {
      "latitude": 52.386841,
      "longitude": 17.310181,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664549087,
      "ems": null
    },
    {
      "latitude": 52.387283,
      "longitude": 17.307783,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664549090,
      "ems": null
    },
    {
      "latitude": 52.387749,
      "longitude": 17.305586,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664549093,
      "ems": null
    },
    {
      "latitude": 52.388214,
      "longitude": 17.303389,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664549096,
      "ems": null
    },
    {
      "latitude": 52.388672,
      "longitude": 17.301407,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1664549098,
      "ems": null
    },
    {
      "latitude": 52.389359,
      "longitude": 17.298965,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664549102,
      "ems": null
    },
    {
      "latitude": 52.39003,
      "longitude": 17.296797,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664549105,
      "ems": null
    },
    {
      "latitude": 52.39064,
      "longitude": 17.294693,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1664549108,
      "ems": null
    },
    {
      "latitude": 52.391239,
      "longitude": 17.292795,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664549110,
      "ems": null
    },
    {
      "latitude": 52.392242,
      "longitude": 17.288055,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664549117,
      "ems": null
    },
    {
      "latitude": 52.392929,
      "longitude": 17.283783,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664549122,
      "ems": null
    },
    {
      "latitude": 52.393379,
      "longitude": 17.281101,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664549126,
      "ems": null
    },
    {
      "latitude": 52.393753,
      "longitude": 17.278976,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664549129,
      "ems": null
    },
    {
      "latitude": 52.394173,
      "longitude": 17.276707,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664549132,
      "ems": null
    },
    {
      "latitude": 52.394638,
      "longitude": 17.274746,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664549135,
      "ems": null
    },
    {
      "latitude": 52.395081,
      "longitude": 17.272644,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664549137,
      "ems": null
    },
    {
      "latitude": 52.395584,
      "longitude": 17.270508,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664549141,
      "ems": null
    },
    {
      "latitude": 52.396545,
      "longitude": 17.266235,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664549147,
      "ems": null
    },
    {
      "latitude": 52.397385,
      "longitude": 17.262112,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664549153,
      "ems": null
    },
    {
      "latitude": 52.398239,
      "longitude": 17.257843,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664549159,
      "ems": null
    },
    {
      "latitude": 52.399292,
      "longitude": 17.253265,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664549166,
      "ems": null
    },
    {
      "latitude": 52.40041,
      "longitude": 17.248613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1664549172,
      "ems": null
    },
    {
      "latitude": 52.40134,
      "longitude": 17.244534,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664549178,
      "ems": null
    },
    {
      "latitude": 52.402084,
      "longitude": 17.240295,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664549184,
      "ems": null
    },
    {
      "latitude": 52.402313,
      "longitude": 17.23877,
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664549187,
      "ems": null
    },
    {
      "latitude": 52.40255,
      "longitude": 17.235823,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1664549190,
      "ems": null
    },
    {
      "latitude": 52.402817,
      "longitude": 17.233353,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1664549193,
      "ems": null
    },
    {
      "latitude": 52.403156,
      "longitude": 17.231113,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664549196,
      "ems": null
    },
    {
      "latitude": 52.404465,
      "longitude": 17.227249,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664549202,
      "ems": null
    },
    {
      "latitude": 52.405334,
      "longitude": 17.2258,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664549205,
      "ems": null
    },
    {
      "latitude": 52.406509,
      "longitude": 17.22468,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664549208,
      "ems": null
    },
    {
      "latitude": 52.40781,
      "longitude": 17.223972,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1664549211,
      "ems": null
    },
    {
      "latitude": 52.409042,
      "longitude": 17.223816,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1664549214,
      "ems": null
    },
    {
      "latitude": 52.410233,
      "longitude": 17.224121,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664549217,
      "ems": null
    },
    {
      "latitude": 52.41135,
      "longitude": 17.224758,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1664549220,
      "ems": null
    },
    {
      "latitude": 52.412247,
      "longitude": 17.2258,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1664549223,
      "ems": null
    },
    {
      "latitude": 52.413212,
      "longitude": 17.227818,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1664549226,
      "ems": null
    },
    {
      "latitude": 52.413677,
      "longitude": 17.229702,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664549229,
      "ems": null
    },
    {
      "latitude": 52.413723,
      "longitude": 17.231663,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664549232,
      "ems": null
    },
    {
      "latitude": 52.413528,
      "longitude": 17.233047,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664549234,
      "ems": null
    },
    {
      "latitude": 52.412838,
      "longitude": 17.235273,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664549238,
      "ems": null
    },
    {
      "latitude": 52.412109,
      "longitude": 17.23671,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664549241,
      "ems": null
    },
    {
      "latitude": 52.411377,
      "longitude": 17.238159,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664549244,
      "ems": null
    },
    {
      "latitude": 52.41069,
      "longitude": 17.239761,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664549247,
      "ems": null
    },
    {
      "latitude": 52.410004,
      "longitude": 17.241516,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664549250,
      "ems": null
    },
    {
      "latitude": 52.409454,
      "longitude": 17.243195,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664549253,
      "ems": null
    },
    {
      "latitude": 52.408905,
      "longitude": 17.244949,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664549256,
      "ems": null
    },
    {
      "latitude": 52.408356,
      "longitude": 17.246704,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664549259,
      "ems": null
    },
    {
      "latitude": 52.40781,
      "longitude": 17.248457,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664549262,
      "ems": null
    },
    {
      "latitude": 52.407299,
      "longitude": 17.250183,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664549265,
      "ems": null
    },
    {
      "latitude": 52.406788,
      "longitude": 17.252146,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664549268,
      "ems": null
    },
    {
      "latitude": 52.406296,
      "longitude": 17.254028,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664549271,
      "ems": null
    },
    {
      "latitude": 52.405762,
      "longitude": 17.255991,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664549274,
      "ems": null
    },
    {
      "latitude": 52.405392,
      "longitude": 17.257559,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664549277,
      "ems": null
    },
    {
      "latitude": 52.404739,
      "longitude": 17.260132,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664549280,
      "ems": null
    },
    {
      "latitude": 52.404236,
      "longitude": 17.262192,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664549283,
      "ems": null
    },
    {
      "latitude": 52.403111,
      "longitude": 17.266191,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664549290,
      "ems": null
    },
    {
      "latitude": 52.401852,
      "longitude": 17.269958,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664549296,
      "ems": null
    },
    {
      "latitude": 52.400967,
      "longitude": 17.274118,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664549302,
      "ems": null
    },
    {
      "latitude": 52.400642,
      "longitude": 17.276236,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664549305,
      "ems": null
    },
    {
      "latitude": 52.400364,
      "longitude": 17.27812,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664549307,
      "ems": null
    },
    {
      "latitude": 52.400024,
      "longitude": 17.280273,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664549310,
      "ems": null
    },
    {
      "latitude": 52.399712,
      "longitude": 17.282593,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664549314,
      "ems": null
    },
    {
      "latitude": 52.399429,
      "longitude": 17.284317,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664549317,
      "ems": null
    },
    {
      "latitude": 52.399105,
      "longitude": 17.286753,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664549320,
      "ems": null
    },
    {
      "latitude": 52.398827,
      "longitude": 17.288557,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664549322,
      "ems": null
    },
    {
      "latitude": 52.398453,
      "longitude": 17.290911,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549326,
      "ems": null
    },
    {
      "latitude": 52.398056,
      "longitude": 17.293015,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664549329,
      "ems": null
    },
    {
      "latitude": 52.397755,
      "longitude": 17.294756,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664549331,
      "ems": null
    },
    {
      "latitude": 52.397243,
      "longitude": 17.297031,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664549335,
      "ems": null
    },
    {
      "latitude": 52.396866,
      "longitude": 17.298813,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664549337,
      "ems": null
    },
    {
      "latitude": 52.396362,
      "longitude": 17.301025,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664549340,
      "ems": null
    },
    {
      "latitude": 52.395905,
      "longitude": 17.303009,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664549344,
      "ems": null
    },
    {
      "latitude": 52.395493,
      "longitude": 17.305069,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664549346,
      "ems": null
    },
    {
      "latitude": 52.394989,
      "longitude": 17.307281,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664549350,
      "ems": null
    },
    {
      "latitude": 52.394588,
      "longitude": 17.309116,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664549352,
      "ems": null
    },
    {
      "latitude": 52.394032,
      "longitude": 17.311392,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664549356,
      "ems": null
    },
    {
      "latitude": 52.393661,
      "longitude": 17.312775,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664549358,
      "ems": null
    },
    {
      "latitude": 52.392914,
      "longitude": 17.314924,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664549362,
      "ems": null
    },
    {
      "latitude": 52.392262,
      "longitude": 17.316807,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664549365,
      "ems": null
    },
    {
      "latitude": 52.391739,
      "longitude": 17.318192,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664549368,
      "ems": null
    },
    {
      "latitude": 52.391052,
      "longitude": 17.320251,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664549370,
      "ems": null
    },
    {
      "latitude": 52.390308,
      "longitude": 17.3223,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664549374,
      "ems": null
    },
    {
      "latitude": 52.389679,
      "longitude": 17.324066,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664549377,
      "ems": null
    },
    {
      "latitude": 52.388992,
      "longitude": 17.325745,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664549380,
      "ems": null
    },
    {
      "latitude": 52.388489,
      "longitude": 17.327118,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664549382,
      "ems": null
    },
    {
      "latitude": 52.387573,
      "longitude": 17.329483,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664549386,
      "ems": null
    },
    {
      "latitude": 52.386887,
      "longitude": 17.331238,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664549389,
      "ems": null
    },
    {
      "latitude": 52.385468,
      "longitude": 17.3347,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664549395,
      "ems": null
    },
    {
      "latitude": 52.384022,
      "longitude": 17.33823,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664549401,
      "ems": null
    },
    {
      "latitude": 52.382538,
      "longitude": 17.341766,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664549407,
      "ems": null
    },
    {
      "latitude": 52.380997,
      "longitude": 17.345449,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664549413,
      "ems": null
    },
    {
      "latitude": 52.379471,
      "longitude": 17.349319,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664549419,
      "ems": null
    },
    {
      "latitude": 52.378143,
      "longitude": 17.3526,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664549424,
      "ems": null
    },
    {
      "latitude": 52.376541,
      "longitude": 17.356644,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664549431,
      "ems": null
    },
    {
      "latitude": 52.374432,
      "longitude": 17.361773,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664549440,
      "ems": null
    },
    {
      "latitude": 52.373154,
      "longitude": 17.364883,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664549445,
      "ems": null
    },
    {
      "latitude": 52.371593,
      "longitude": 17.368679,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664549452,
      "ems": null
    },
    {
      "latitude": 52.371269,
      "longitude": 17.369934,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664549455,
      "ems": null
    },
    {
      "latitude": 52.370895,
      "longitude": 17.371897,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549457,
      "ems": null
    },
    {
      "latitude": 52.370476,
      "longitude": 17.374563,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549461,
      "ems": null
    },
    {
      "latitude": 52.370152,
      "longitude": 17.376448,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549464,
      "ems": null
    },
    {
      "latitude": 52.369812,
      "longitude": 17.378769,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664549467,
      "ems": null
    },
    {
      "latitude": 52.369499,
      "longitude": 17.38092,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664549470,
      "ems": null
    },
    {
      "latitude": 52.369221,
      "longitude": 17.383039,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664549473,
      "ems": null
    },
    {
      "latitude": 52.368988,
      "longitude": 17.384922,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664549476,
      "ems": null
    },
    {
      "latitude": 52.368759,
      "longitude": 17.387314,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664549479,
      "ems": null
    },
    {
      "latitude": 52.368568,
      "longitude": 17.389395,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664549482,
      "ems": null
    },
    {
      "latitude": 52.368336,
      "longitude": 17.391514,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664549485,
      "ems": null
    },
    {
      "latitude": 52.367798,
      "longitude": 17.395706,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664549491,
      "ems": null
    },
    {
      "latitude": 52.367077,
      "longitude": 17.401402,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664549499,
      "ems": null
    },
    {
      "latitude": 52.366241,
      "longitude": 17.40715,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549507,
      "ems": null
    },
    {
      "latitude": 52.365868,
      "longitude": 17.40925,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664549511,
      "ems": null
    },
    {
      "latitude": 52.36517,
      "longitude": 17.412703,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664549515,
      "ems": null
    },
    {
      "latitude": 52.364868,
      "longitude": 17.41394,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664549517,
      "ems": null
    },
    {
      "latitude": 52.364285,
      "longitude": 17.416311,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664549521,
      "ems": null
    },
    {
      "latitude": 52.364044,
      "longitude": 17.417297,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664549522,
      "ems": null
    },
    {
      "latitude": 52.363262,
      "longitude": 17.420156,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664549527,
      "ems": null
    },
    {
      "latitude": 52.362442,
      "longitude": 17.422867,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664549531,
      "ems": null
    },
    {
      "latitude": 52.361618,
      "longitude": 17.425461,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664549535,
      "ems": null
    },
    {
      "latitude": 52.361069,
      "longitude": 17.427444,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664549538,
      "ems": null
    },
    {
      "latitude": 52.360107,
      "longitude": 17.431335,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664549544,
      "ems": null
    },
    {
      "latitude": 52.359238,
      "longitude": 17.435379,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664549550,
      "ems": null
    },
    {
      "latitude": 52.358322,
      "longitude": 17.439346,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664549556,
      "ems": null
    },
    {
      "latitude": 52.357407,
      "longitude": 17.443161,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664549561,
      "ems": null
    },
    {
      "latitude": 52.356903,
      "longitude": 17.445297,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664549565,
      "ems": null
    },
    {
      "latitude": 52.35651,
      "longitude": 17.447309,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664549568,
      "ems": null
    },
    {
      "latitude": 52.355766,
      "longitude": 17.451233,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549573,
      "ems": null
    },
    {
      "latitude": 52.355484,
      "longitude": 17.453156,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664549577,
      "ems": null
    },
    {
      "latitude": 52.355392,
      "longitude": 17.45343,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664549577,
      "ems": null
    },
    {
      "latitude": 52.354889,
      "longitude": 17.456284,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664549581,
      "ems": null
    },
    {
      "latitude": 52.354431,
      "longitude": 17.458725,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664549585,
      "ems": null
    },
    {
      "latitude": 52.353836,
      "longitude": 17.461472,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664549589,
      "ems": null
    },
    {
      "latitude": 52.352646,
      "longitude": 17.467117,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664549598,
      "ems": null
    },
    {
      "latitude": 52.352005,
      "longitude": 17.470703,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664549603,
      "ems": null
    },
    {
      "latitude": 52.350998,
      "longitude": 17.47612,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664549612,
      "ems": null
    },
    {
      "latitude": 52.350227,
      "longitude": 17.480268,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664549618,
      "ems": null
    },
    {
      "latitude": 52.349442,
      "longitude": 17.48497,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549625,
      "ems": null
    },
    {
      "latitude": 52.348663,
      "longitude": 17.489471,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549631,
      "ems": null
    },
    {
      "latitude": 52.348068,
      "longitude": 17.49321,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664549637,
      "ems": null
    },
    {
      "latitude": 52.34734,
      "longitude": 17.497061,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664549643,
      "ems": null
    },
    {
      "latitude": 52.34655,
      "longitude": 17.501064,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664549649,
      "ems": null
    },
    {
      "latitude": 52.346329,
      "longitude": 17.501984,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664549651,
      "ems": null
    },
    {
      "latitude": 52.34557,
      "longitude": 17.504831,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664549655,
      "ems": null
    },
    {
      "latitude": 52.345104,
      "longitude": 17.506243,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664549658,
      "ems": null
    },
    {
      "latitude": 52.34436,
      "longitude": 17.508698,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664549661,
      "ems": null
    },
    {
      "latitude": 52.343895,
      "longitude": 17.510481,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664549664,
      "ems": null
    },
    {
      "latitude": 52.343384,
      "longitude": 17.512363,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664549667,
      "ems": null
    },
    {
      "latitude": 52.342484,
      "longitude": 17.516327,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664549673,
      "ems": null
    },
    {
      "latitude": 52.34166,
      "longitude": 17.520218,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664549679,
      "ems": null
    },
    {
      "latitude": 52.341103,
      "longitude": 17.522017,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664549682,
      "ems": null
    },
    {
      "latitude": 52.340424,
      "longitude": 17.523727,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664549685,
      "ems": null
    },
    {
      "latitude": 52.33992,
      "longitude": 17.524872,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664549687,
      "ems": null
    },
    {
      "latitude": 52.338959,
      "longitude": 17.526646,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664549691,
      "ems": null
    },
    {
      "latitude": 52.338078,
      "longitude": 17.528059,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664549694,
      "ems": null
    },
    {
      "latitude": 52.337402,
      "longitude": 17.529297,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664549697,
      "ems": null
    },
    {
      "latitude": 52.336349,
      "longitude": 17.531052,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664549700,
      "ems": null
    },
    {
      "latitude": 52.335434,
      "longitude": 17.532425,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664549703,
      "ems": null
    },
    {
      "latitude": 52.334656,
      "longitude": 17.533569,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664549706,
      "ems": null
    },
    {
      "latitude": 52.333607,
      "longitude": 17.535044,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664549709,
      "ems": null
    },
    {
      "latitude": 52.33263,
      "longitude": 17.536299,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664549712,
      "ems": null
    },
    {
      "latitude": 52.331604,
      "longitude": 17.537476,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664549715,
      "ems": null
    },
    {
      "latitude": 52.330582,
      "longitude": 17.538681,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664549718,
      "ems": null
    },
    {
      "latitude": 52.329605,
      "longitude": 17.539907,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664549721,
      "ems": null
    },
    {
      "latitude": 52.328659,
      "longitude": 17.541046,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664549724,
      "ems": null
    },
    {
      "latitude": 52.327835,
      "longitude": 17.542105,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664549727,
      "ems": null
    },
    {
      "latitude": 52.325741,
      "longitude": 17.545088,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664549733,
      "ems": null
    },
    {
      "latitude": 52.323971,
      "longitude": 17.547756,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664549739,
      "ems": null
    },
    {
      "latitude": 52.322014,
      "longitude": 17.550425,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664549745,
      "ems": null
    },
    {
      "latitude": 52.320248,
      "longitude": 17.552856,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664549751,
      "ems": null
    },
    {
      "latitude": 52.319138,
      "longitude": 17.55394,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664549754,
      "ems": null
    },
    {
      "latitude": 52.318222,
      "longitude": 17.55455,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664549756,
      "ems": null
    },
    {
      "latitude": 52.316711,
      "longitude": 17.555161,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664549760,
      "ems": null
    },
    {
      "latitude": 52.31559,
      "longitude": 17.555288,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664549763,
      "ems": null
    },
    {
      "latitude": 52.314102,
      "longitude": 17.555161,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664549766,
      "ems": null
    },
    {
      "latitude": 52.312893,
      "longitude": 17.555132,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664549769,
      "ems": null
    },
    {
      "latitude": 52.311722,
      "longitude": 17.555084,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664549772,
      "ems": null
    },
    {
      "latitude": 52.310425,
      "longitude": 17.555054,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664549775,
      "ems": null
    },
    {
      "latitude": 52.309772,
      "longitude": 17.555054,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664549777,
      "ems": null
    },
    {
      "latitude": 52.308517,
      "longitude": 17.555008,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664549781,
      "ems": null
    },
    {
      "latitude": 52.306915,
      "longitude": 17.555008,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664549784,
      "ems": null
    },
    {
      "latitude": 52.306183,
      "longitude": 17.554932,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664549786,
      "ems": null
    },
    {
      "latitude": 52.304581,
      "longitude": 17.554779,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664549790,
      "ems": null
    },
    {
      "latitude": 52.301239,
      "longitude": 17.554703,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664549799,
      "ems": null
    },
    {
      "latitude": 52.298786,
      "longitude": 17.554661,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664549805,
      "ems": null
    },
    {
      "latitude": 52.296249,
      "longitude": 17.554703,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664549811,
      "ems": null
    },
    {
      "latitude": 52.294098,
      "longitude": 17.554855,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664549817,
      "ems": null
    },
    {
      "latitude": 52.292828,
      "longitude": 17.554976,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664549820,
      "ems": null
    },
    {
      "latitude": 52.291718,
      "longitude": 17.555161,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664549823,
      "ems": null
    },
    {
      "latitude": 52.290501,
      "longitude": 17.555368,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664549826,
      "ems": null
    },
    {
      "latitude": 52.289291,
      "longitude": 17.555466,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664549829,
      "ems": null
    },
    {
      "latitude": 52.287987,
      "longitude": 17.555681,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664549833,
      "ems": null
    },
    {
      "latitude": 52.285843,
      "longitude": 17.555996,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664549838,
      "ems": null
    },
    {
      "latitude": 52.283329,
      "longitude": 17.556387,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664549844,
      "ems": null
    },
    {
      "latitude": 52.281097,
      "longitude": 17.556534,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664549850,
      "ems": null
    },
    {
      "latitude": 52.278534,
      "longitude": 17.556623,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664549856,
      "ems": null
    },
    {
      "latitude": 52.275928,
      "longitude": 17.55678,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664549862,
      "ems": null
    },
    {
      "latitude": 52.274113,
      "longitude": 17.557016,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664549867,
      "ems": null
    },
    {
      "latitude": 52.271255,
      "longitude": 17.557526,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664549874,
      "ems": null
    },
    {
      "latitude": 52.268295,
      "longitude": 17.557957,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664549881,
      "ems": null
    },
    {
      "latitude": 52.265945,
      "longitude": 17.558365,
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
      "squawk": "7000",
      "timestamp": 1664549886,
      "ems": null
    },
    {
      "latitude": 52.263382,
      "longitude": 17.55867,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664549892,
      "ems": null
    },
    {
      "latitude": 52.260754,
      "longitude": 17.559134,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664549898,
      "ems": null
    },
    {
      "latitude": 52.258163,
      "longitude": 17.559662,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664549904,
      "ems": null
    },
    {
      "latitude": 52.256748,
      "longitude": 17.560076,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664549908,
      "ems": null
    },
    {
      "latitude": 52.255493,
      "longitude": 17.560469,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664549911,
      "ems": null
    },
    {
      "latitude": 52.254456,
      "longitude": 17.560883,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664549913,
      "ems": null
    },
    {
      "latitude": 52.253357,
      "longitude": 17.56134,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664549916,
      "ems": null
    },
    {
      "latitude": 52.251907,
      "longitude": 17.56196,
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
      "squawk": "7000",
      "timestamp": 1664549919,
      "ems": null
    },
    {
      "latitude": 52.250698,
      "longitude": 17.562429,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664549922,
      "ems": null
    },
    {
      "latitude": 52.249485,
      "longitude": 17.562979,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664549926,
      "ems": null
    },
    {
      "latitude": 52.248138,
      "longitude": 17.563528,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664549929,
      "ems": null
    },
    {
      "latitude": 52.24704,
      "longitude": 17.564011,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664549931,
      "ems": null
    },
    {
      "latitude": 52.244751,
      "longitude": 17.564774,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664549937,
      "ems": null
    },
    {
      "latitude": 52.242691,
      "longitude": 17.565569,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664549943,
      "ems": null
    },
    {
      "latitude": 52.240036,
      "longitude": 17.566681,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664549949,
      "ems": null
    },
    {
      "latitude": 52.237793,
      "longitude": 17.56752,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664549956,
      "ems": null
    },
    {
      "latitude": 52.235367,
      "longitude": 17.568512,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664549961,
      "ems": null
    },
    {
      "latitude": 52.233006,
      "longitude": 17.569492,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664549967,
      "ems": null
    },
    {
      "latitude": 52.230515,
      "longitude": 17.570343,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664549973,
      "ems": null
    },
    {
      "latitude": 52.22905,
      "longitude": 17.570724,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664549977,
      "ems": null
    },
    {
      "latitude": 52.227795,
      "longitude": 17.570984,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664549980,
      "ems": null
    },
    {
      "latitude": 52.226536,
      "longitude": 17.571299,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664549983,
      "ems": null
    },
    {
      "latitude": 52.22514,
      "longitude": 17.571611,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664549986,
      "ems": null
    },
    {
      "latitude": 52.222626,
      "longitude": 17.572317,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664549992,
      "ems": null
    },
    {
      "latitude": 52.221508,
      "longitude": 17.572632,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664549995,
      "ems": null
    },
    {
      "latitude": 52.21907,
      "longitude": 17.573242,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664550000,
      "ems": null
    },
    {
      "latitude": 52.216919,
      "longitude": 17.573853,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664550006,
      "ems": null
    },
    {
      "latitude": 52.214016,
      "longitude": 17.574673,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664550013,
      "ems": null
    },
    {
      "latitude": 52.211563,
      "longitude": 17.575455,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664550019,
      "ems": null
    },
    {
      "latitude": 52.209183,
      "longitude": 17.576218,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664550024,
      "ems": null
    },
    {
      "latitude": 52.207172,
      "longitude": 17.576633,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664550029,
      "ems": null
    },
    {
      "latitude": 52.205029,
      "longitude": 17.576633,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664550034,
      "ems": null
    },
    {
      "latitude": 52.20369,
      "longitude": 17.576523,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664550037,
      "ems": null
    },
    {
      "latitude": 52.202087,
      "longitude": 17.576447,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664550041,
      "ems": null
    },
    {
      "latitude": 52.199863,
      "longitude": 17.576321,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664550046,
      "ems": null
    },
    {
      "latitude": 52.19902,
      "longitude": 17.576294,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664550049,
      "ems": null
    },
    {
      "latitude": 52.197327,
      "longitude": 17.576141,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664550052,
      "ems": null
    },
    {
      "latitude": 52.195766,
      "longitude": 17.576084,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664550056,
      "ems": null
    },
    {
      "latitude": 52.192226,
      "longitude": 17.576162,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664550063,
      "ems": null
    },
    {
      "latitude": 52.189865,
      "longitude": 17.576141,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664550069,
      "ems": null
    },
    {
      "latitude": 52.187016,
      "longitude": 17.576162,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664550076,
      "ems": null
    },
    {
      "latitude": 52.184464,
      "longitude": 17.576294,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664550082,
      "ems": null
    },
    {
      "latitude": 52.182453,
      "longitude": 17.576399,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664550087,
      "ems": null
    },
    {
      "latitude": 52.179474,
      "longitude": 17.576523,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664550094,
      "ems": null
    },
    {
      "latitude": 52.179062,
      "longitude": 17.576599,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550096,
      "ems": null
    },
    {
      "latitude": 52.17561,
      "longitude": 17.57687,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550103,
      "ems": null
    },
    {
      "latitude": 52.173889,
      "longitude": 17.577133,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550107,
      "ems": null
    },
    {
      "latitude": 52.170673,
      "longitude": 17.577576,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550115,
      "ems": null
    },
    {
      "latitude": 52.168255,
      "longitude": 17.577969,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550121,
      "ems": null
    },
    {
      "latitude": 52.165558,
      "longitude": 17.57843,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550127,
      "ems": null
    },
    {
      "latitude": 52.162342,
      "longitude": 17.578989,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664550135,
      "ems": null
    },
    {
      "latitude": 52.159641,
      "longitude": 17.579538,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664550142,
      "ems": null
    },
    {
      "latitude": 52.157501,
      "longitude": 17.579956,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664550147,
      "ems": null
    },
    {
      "latitude": 52.153564,
      "longitude": 17.580719,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664550157,
      "ems": null
    },
    {
      "latitude": 52.14949,
      "longitude": 17.581482,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664550166,
      "ems": null
    },
    {
      "latitude": 52.147118,
      "longitude": 17.581892,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664550174,
      "ems": null
    },
    {
      "latitude": 52.142883,
      "longitude": 17.582912,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664550182,
      "ems": null
    },
    {
      "latitude": 52.139019,
      "longitude": 17.583933,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664550191,
      "ems": null
    },
    {
      "latitude": 52.136738,
      "longitude": 17.58456,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664550196,
      "ems": null
    },
    {
      "latitude": 52.133194,
      "longitude": 17.585602,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664550205,
      "ems": null
    },
    {
      "latitude": 52.12944,
      "longitude": 17.586823,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664550214,
      "ems": null
    },
    {
      "latitude": 52.12645,
      "longitude": 17.587463,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1664550221,
      "ems": null
    },
    {
      "latitude": 52.122299,
      "longitude": 17.588272,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 2560,
        "ms": 13
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664550232,
      "ems": null
    },
    {
      "latitude": 52.120304,
      "longitude": 17.588955,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664550240,
      "ems": null
    },
    {
      "latitude": 52.119461,
      "longitude": 17.589264,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664550244,
      "ems": null
    },
    {
      "latitude": 52.117744,
      "longitude": 17.589817,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664550250,
      "ems": null
    },
    {
      "latitude": 52.117233,
      "longitude": 17.589975,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664550252,
      "ems": null
    },
    {
      "latitude": 52.116211,
      "longitude": 17.590332,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664550256,
      "ems": null
    },
    {
      "latitude": 52.114159,
      "longitude": 17.591074,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664550262,
      "ems": null
    },
    {
      "latitude": 52.112438,
      "longitude": 17.59178,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664550268,
      "ems": null
    },
    {
      "latitude": 52.110489,
      "longitude": 17.592621,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664550274,
      "ems": null
    },
    {
      "latitude": 52.108665,
      "longitude": 17.593191,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664550280,
      "ems": null
    },
    {
      "latitude": 52.107269,
      "longitude": 17.593428,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550283,
      "ems": null
    },
    {
      "latitude": 52.106106,
      "longitude": 17.593662,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550287,
      "ems": null
    },
    {
      "latitude": 52.105087,
      "longitude": 17.593842,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550289,
      "ems": null
    },
    {
      "latitude": 52.104198,
      "longitude": 17.593977,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550292,
      "ems": null
    },
    {
      "latitude": 52.10294,
      "longitude": 17.594133,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550295,
      "ems": null
    },
    {
      "latitude": 52.101974,
      "longitude": 17.594299,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550298,
      "ems": null
    },
    {
      "latitude": 52.100784,
      "longitude": 17.594452,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550301,
      "ems": null
    },
    {
      "latitude": 52.09996,
      "longitude": 17.594528,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550303,
      "ems": null
    },
    {
      "latitude": 52.09861,
      "longitude": 17.594761,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550307,
      "ems": null
    },
    {
      "latitude": 52.096146,
      "longitude": 17.595076,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550314,
      "ems": null
    },
    {
      "latitude": 52.093872,
      "longitude": 17.595367,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550319,
      "ems": null
    },
    {
      "latitude": 52.091534,
      "longitude": 17.595547,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550326,
      "ems": null
    },
    {
      "latitude": 52.089203,
      "longitude": 17.595901,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550331,
      "ems": null
    },
    {
      "latitude": 52.086823,
      "longitude": 17.596207,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550338,
      "ems": null
    },
    {
      "latitude": 52.083801,
      "longitude": 17.596588,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550347,
      "ems": null
    },
    {
      "latitude": 52.081341,
      "longitude": 17.596802,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550353,
      "ems": null
    },
    {
      "latitude": 52.079086,
      "longitude": 17.597046,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664550359,
      "ems": null
    },
    {
      "latitude": 52.07645,
      "longitude": 17.596958,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664550366,
      "ems": null
    },
    {
      "latitude": 52.075012,
      "longitude": 17.596893,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664550370,
      "ems": null
    },
    {
      "latitude": 52.072998,
      "longitude": 17.596817,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664550375,
      "ems": null
    },
    {
      "latitude": 52.071533,
      "longitude": 17.596664,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664550379,
      "ems": null
    },
    {
      "latitude": 52.069611,
      "longitude": 17.596409,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664550383,
      "ems": null
    },
    {
      "latitude": 52.067322,
      "longitude": 17.596512,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550389,
      "ems": null
    },
    {
      "latitude": 52.064816,
      "longitude": 17.596802,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550395,
      "ems": null
    },
    {
      "latitude": 52.062485,
      "longitude": 17.596958,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664550401,
      "ems": null
    },
    {
      "latitude": 52.060207,
      "longitude": 17.596958,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664550407,
      "ems": null
    },
    {
      "latitude": 52.057598,
      "longitude": 17.596958,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664550414,
      "ems": null
    },
    {
      "latitude": 52.055878,
      "longitude": 17.596893,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664550418,
      "ems": null
    },
    {
      "latitude": 52.054138,
      "longitude": 17.596817,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664550422,
      "ems": null
    },
    {
      "latitude": 52.052902,
      "longitude": 17.596741,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664550425,
      "ems": null
    },
    {
      "latitude": 52.051685,
      "longitude": 17.596645,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664550428,
      "ems": null
    },
    {
      "latitude": 52.050755,
      "longitude": 17.596487,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664550431,
      "ems": null
    },
    {
      "latitude": 52.04924,
      "longitude": 17.596359,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664550434,
      "ems": null
    },
    {
      "latitude": 52.04694,
      "longitude": 17.596252,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664550440,
      "ems": null
    },
    {
      "latitude": 52.044426,
      "longitude": 17.596018,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664550446,
      "ems": null
    },
    {
      "latitude": 52.042145,
      "longitude": 17.595673,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664550452,
      "ems": null
    },
    {
      "latitude": 52.039768,
      "longitude": 17.59531,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664550458,
      "ems": null
    },
    {
      "latitude": 52.036194,
      "longitude": 17.594223,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664550467,
      "ems": null
    },
    {
      "latitude": 52.035233,
      "longitude": 17.593918,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664550470,
      "ems": null
    },
    {
      "latitude": 52.033905,
      "longitude": 17.593428,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1664550473,
      "ems": null
    },
    {
      "latitude": 52.032715,
      "longitude": 17.593079,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664550476,
      "ems": null
    },
    {
      "latitude": 52.031708,
      "longitude": 17.59285,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664550479,
      "ems": null
    },
    {
      "latitude": 52.029343,
      "longitude": 17.592251,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664550486,
      "ems": null
    },
    {
      "latitude": 52.026966,
      "longitude": 17.591858,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664550492,
      "ems": null
    },
    {
      "latitude": 52.023384,
      "longitude": 17.59123,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664550500,
      "ems": null
    },
    {
      "latitude": 52.021008,
      "longitude": 17.590759,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664550505,
      "ems": null
    },
    {
      "latitude": 52.01952,
      "longitude": 17.590525,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664550509,
      "ems": null
    },
    {
      "latitude": 52.018295,
      "longitude": 17.590408,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664550512,
      "ems": null
    },
    {
      "latitude": 52.015961,
      "longitude": 17.590179,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664550518,
      "ems": null
    },
    {
      "latitude": 52.014538,
      "longitude": 17.59021,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664550521,
      "ems": null
    },
    {
      "latitude": 52.013466,
      "longitude": 17.590288,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550524,
      "ems": null
    },
    {
      "latitude": 52.012257,
      "longitude": 17.590525,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550527,
      "ems": null
    },
    {
      "latitude": 52.011154,
      "longitude": 17.590637,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550530,
      "ems": null
    },
    {
      "latitude": 52.009827,
      "longitude": 17.590866,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550534,
      "ems": null
    },
    {
      "latitude": 52.008865,
      "longitude": 17.591019,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550536,
      "ems": null
    },
    {
      "latitude": 52.007694,
      "longitude": 17.59123,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550539,
      "ems": null
    },
    {
      "latitude": 52.007088,
      "longitude": 17.591309,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550541,
      "ems": null
    },
    {
      "latitude": 52.005226,
      "longitude": 17.591543,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664550545,
      "ems": null
    },
    {
      "latitude": 52.003235,
      "longitude": 17.591705,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550550,
      "ems": null
    },
    {
      "latitude": 51.999313,
      "longitude": 17.592251,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664550560,
      "ems": null
    },
    {
      "latitude": 51.997036,
      "longitude": 17.592485,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664550565,
      "ems": null
    },
    {
      "latitude": 51.994938,
      "longitude": 17.592642,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664550572,
      "ems": null
    },
    {
      "latitude": 51.990005,
      "longitude": 17.593271,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664550581,
      "ems": null
    },
    {
      "latitude": 51.987629,
      "longitude": 17.593899,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664550587,
      "ems": null
    },
    {
      "latitude": 51.986374,
      "longitude": 17.59429,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664550590,
      "ems": null
    },
    {
      "latitude": 51.985153,
      "longitude": 17.594757,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664550593,
      "ems": null
    },
    {
      "latitude": 51.984138,
      "longitude": 17.595076,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664550595,
      "ems": null
    },
    {
      "latitude": 51.982681,
      "longitude": 17.595673,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664550599,
      "ems": null
    },
    {
      "latitude": 51.981346,
      "longitude": 17.596096,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664550602,
      "ems": null
    },
    {
      "latitude": 51.980228,
      "longitude": 17.596567,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664550605,
      "ems": null
    },
    {
      "latitude": 51.979111,
      "longitude": 17.597036,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664550608,
      "ems": null
    },
    {
      "latitude": 51.977829,
      "longitude": 17.597504,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664550611,
      "ems": null
    },
    {
      "latitude": 51.976639,
      "longitude": 17.598114,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664550614,
      "ems": null
    },
    {
      "latitude": 51.975357,
      "longitude": 17.598801,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664550617,
      "ems": null
    },
    {
      "latitude": 51.974178,
      "longitude": 17.599392,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664550620,
      "ems": null
    },
    {
      "latitude": 51.973061,
      "longitude": 17.599941,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664550623,
      "ems": null
    },
    {
      "latitude": 51.972034,
      "longitude": 17.600569,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664550626,
      "ems": null
    },
    {
      "latitude": 51.970547,
      "longitude": 17.601511,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664550630,
      "ems": null
    },
    {
      "latitude": 51.969498,
      "longitude": 17.60231,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664550632,
      "ems": null
    },
    {
      "latitude": 51.968498,
      "longitude": 17.603001,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664550635,
      "ems": null
    },
    {
      "latitude": 51.967072,
      "longitude": 17.604065,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664550639,
      "ems": null
    },
    {
      "latitude": 51.966156,
      "longitude": 17.604752,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664550641,
      "ems": null
    },
    {
      "latitude": 51.964077,
      "longitude": 17.606375,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664550647,
      "ems": null
    },
    {
      "latitude": 51.962723,
      "longitude": 17.607346,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664550651,
      "ems": null
    },
    {
      "latitude": 51.95961,
      "longitude": 17.609634,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664550659,
      "ems": null
    },
    {
      "latitude": 51.95723,
      "longitude": 17.611542,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664550665,
      "ems": null
    },
    {
      "latitude": 51.95602,
      "longitude": 17.612576,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664550668,
      "ems": null
    },
    {
      "latitude": 51.953384,
      "longitude": 17.614822,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664550676,
      "ems": null
    },
    {
      "latitude": 51.950226,
      "longitude": 17.617569,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664550683,
      "ems": null
    },
    {
      "latitude": 51.948013,
      "longitude": 17.61948,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664550689,
      "ems": null
    },
    {
      "latitude": 51.946198,
      "longitude": 17.621286,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664550695,
      "ems": null
    },
    {
      "latitude": 51.944988,
      "longitude": 17.622541,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664550698,
      "ems": null
    },
    {
      "latitude": 51.943909,
      "longitude": 17.623749,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664550701,
      "ems": null
    },
    {
      "latitude": 51.942856,
      "longitude": 17.624893,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664550704,
      "ems": null
    },
    {
      "latitude": 51.941986,
      "longitude": 17.625885,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664550707,
      "ems": null
    },
    {
      "latitude": 51.940754,
      "longitude": 17.627171,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664550710,
      "ems": null
    },
    {
      "latitude": 51.939743,
      "longitude": 17.628174,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664550713,
      "ems": null
    },
    {
      "latitude": 51.937866,
      "longitude": 17.63031,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664550719,
      "ems": null
    },
    {
      "latitude": 51.935444,
      "longitude": 17.632742,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664550726,
      "ems": null
    },
    {
      "latitude": 51.93214,
      "longitude": 17.636587,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664550738,
      "ems": null
    },
    {
      "latitude": 51.93045,
      "longitude": 17.639618,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664550743,
      "ems": null
    },
    {
      "latitude": 51.929718,
      "longitude": 17.641296,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664550746,
      "ems": null
    },
    {
      "latitude": 51.929077,
      "longitude": 17.642899,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664550748,
      "ems": null
    },
    {
      "latitude": 51.928116,
      "longitude": 17.645264,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664550752,
      "ems": null
    },
    {
      "latitude": 51.927475,
      "longitude": 17.646866,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664550755,
      "ems": null
    },
    {
      "latitude": 51.927021,
      "longitude": 17.648045,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664550757,
      "ems": null
    },
    {
      "latitude": 51.926376,
      "longitude": 17.649765,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664550761,
      "ems": null
    },
    {
      "latitude": 51.924911,
      "longitude": 17.653809,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664550767,
      "ems": null
    },
    {
      "latitude": 51.92363,
      "longitude": 17.657394,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664550773,
      "ems": null
    },
    {
      "latitude": 51.922348,
      "longitude": 17.660751,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550779,
      "ems": null
    },
    {
      "latitude": 51.921108,
      "longitude": 17.664289,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550785,
      "ems": null
    },
    {
      "latitude": 51.919895,
      "longitude": 17.667585,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550791,
      "ems": null
    },
    {
      "latitude": 51.918594,
      "longitude": 17.671194,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550798,
      "ems": null
    },
    {
      "latitude": 51.917336,
      "longitude": 17.674648,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550804,
      "ems": null
    },
    {
      "latitude": 51.916122,
      "longitude": 17.677994,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550810,
      "ems": null
    },
    {
      "latitude": 51.914822,
      "longitude": 17.681475,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664550816,
      "ems": null
    },
    {
      "latitude": 51.912918,
      "longitude": 17.686691,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550824,
      "ems": null
    },
    {
      "latitude": 51.911751,
      "longitude": 17.690186,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664550830,
      "ems": null
    },
    {
      "latitude": 51.911179,
      "longitude": 17.692032,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664550833,
      "ems": null
    },
    {
      "latitude": 51.910725,
      "longitude": 17.693716,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664550836,
      "ems": null
    },
    {
      "latitude": 51.910126,
      "longitude": 17.695694,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664550840,
      "ems": null
    },
    {
      "latitude": 51.908203,
      "longitude": 17.700806,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664550848,
      "ems": null
    },
    {
      "latitude": 51.907047,
      "longitude": 17.703526,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664550852,
      "ems": null
    },
    {
      "latitude": 51.906326,
      "longitude": 17.705231,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664550855,
      "ems": null
    },
    {
      "latitude": 51.905685,
      "longitude": 17.70668,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664550858,
      "ems": null
    },
    {
      "latitude": 51.90556,
      "longitude": 17.70698,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664550859,
      "ems": null
    },
    {
      "latitude": 51.904396,
      "longitude": 17.709726,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664550864,
      "ems": null
    },
    {
      "latitude": 51.904163,
      "longitude": 17.710354,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664550865,
      "ems": null
    },
    {
      "latitude": 51.903931,
      "longitude": 17.710903,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664550866,
      "ems": null
    },
    {
      "latitude": 51.902985,
      "longitude": 17.713165,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664550869,
      "ems": null
    },
    {
      "latitude": 51.90081,
      "longitude": 17.718594,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664550879,
      "ems": null
    },
    {
      "latitude": 51.899826,
      "longitude": 17.721024,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664550883,
      "ems": null
    },
    {
      "latitude": 51.897831,
      "longitude": 17.726048,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664550891,
      "ems": null
    },
    {
      "latitude": 51.896759,
      "longitude": 17.728872,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550897,
      "ems": null
    },
    {
      "latitude": 51.896248,
      "longitude": 17.730207,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550898,
      "ems": null
    },
    {
      "latitude": 51.896156,
      "longitude": 17.730442,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550899,
      "ems": null
    },
    {
      "latitude": 51.894386,
      "longitude": 17.735151,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664550906,
      "ems": null
    },
    {
      "latitude": 51.892776,
      "longitude": 17.739134,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664550913,
      "ems": null
    },
    {
      "latitude": 51.891548,
      "longitude": 17.742157,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664550918,
      "ems": null
    },
    {
      "latitude": 51.889252,
      "longitude": 17.747597,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664550927,
      "ems": null
    },
    {
      "latitude": 51.887917,
      "longitude": 17.750778,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664550932,
      "ems": null
    },
    {
      "latitude": 51.886185,
      "longitude": 17.754797,
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
      "squawk": "7000",
      "timestamp": 1664550939,
      "ems": null
    },
    {
      "latitude": 51.883911,
      "longitude": 17.760086,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664550948,
      "ems": null
    },
    {
      "latitude": 51.882568,
      "longitude": 17.763186,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664550955,
      "ems": null
    },
    {
      "latitude": 51.880737,
      "longitude": 17.767416,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664550961,
      "ems": null
    },
    {
      "latitude": 51.879318,
      "longitude": 17.770683,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664550966,
      "ems": null
    },
    {
      "latitude": 51.877209,
      "longitude": 17.77504,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664550975,
      "ems": null
    },
    {
      "latitude": 51.875473,
      "longitude": 17.7787,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664550981,
      "ems": null
    },
    {
      "latitude": 51.873997,
      "longitude": 17.781677,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664550986,
      "ems": null
    },
    {
      "latitude": 51.87302,
      "longitude": 17.783508,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664550990,
      "ems": null
    },
    {
      "latitude": 51.87236,
      "longitude": 17.784861,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664550993,
      "ems": null
    },
    {
      "latitude": 51.870785,
      "longitude": 17.787781,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664550999,
      "ems": null
    },
    {
      "latitude": 51.868736,
      "longitude": 17.791519,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664551005,
      "ems": null
    },
    {
      "latitude": 51.867245,
      "longitude": 17.794495,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664551011,
      "ems": null
    },
    {
      "latitude": 51.865631,
      "longitude": 17.797703,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664551017,
      "ems": null
    },
    {
      "latitude": 51.864033,
      "longitude": 17.801132,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664551023,
      "ems": null
    },
    {
      "latitude": 51.863243,
      "longitude": 17.802734,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551026,
      "ems": null
    },
    {
      "latitude": 51.862778,
      "longitude": 17.803879,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664551028,
      "ems": null
    },
    {
      "latitude": 51.861969,
      "longitude": 17.805794,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664551032,
      "ems": null
    },
    {
      "latitude": 51.861195,
      "longitude": 17.807693,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664551035,
      "ems": null
    },
    {
      "latitude": 51.860588,
      "longitude": 17.809219,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664551038,
      "ems": null
    },
    {
      "latitude": 51.859798,
      "longitude": 17.811127,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664551041,
      "ems": null
    },
    {
      "latitude": 51.859085,
      "longitude": 17.812922,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664551044,
      "ems": null
    },
    {
      "latitude": 51.857758,
      "longitude": 17.816187,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664551050,
      "ems": null
    },
    {
      "latitude": 51.856354,
      "longitude": 17.819519,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664551056,
      "ems": null
    },
    {
      "latitude": 51.855049,
      "longitude": 17.822418,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551062,
      "ems": null
    },
    {
      "latitude": 51.853363,
      "longitude": 17.826134,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551068,
      "ems": null
    },
    {
      "latitude": 51.85207,
      "longitude": 17.829132,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551074,
      "ems": null
    },
    {
      "latitude": 51.850674,
      "longitude": 17.832413,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664551080,
      "ems": null
    },
    {
      "latitude": 51.849419,
      "longitude": 17.835236,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551085,
      "ems": null
    },
    {
      "latitude": 51.847786,
      "longitude": 17.838821,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551092,
      "ems": null
    },
    {
      "latitude": 51.846577,
      "longitude": 17.841568,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551098,
      "ems": null
    },
    {
      "latitude": 51.845169,
      "longitude": 17.844767,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551103,
      "ems": null
    },
    {
      "latitude": 51.843796,
      "longitude": 17.847809,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551109,
      "ems": null
    },
    {
      "latitude": 51.842331,
      "longitude": 17.851076,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551116,
      "ems": null
    },
    {
      "latitude": 51.84082,
      "longitude": 17.854416,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551122,
      "ems": null
    },
    {
      "latitude": 51.839447,
      "longitude": 17.85746,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551128,
      "ems": null
    },
    {
      "latitude": 51.838211,
      "longitude": 17.860132,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551133,
      "ems": null
    },
    {
      "latitude": 51.8367,
      "longitude": 17.863398,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551140,
      "ems": null
    },
    {
      "latitude": 51.835358,
      "longitude": 17.866364,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664551146,
      "ems": null
    },
    {
      "latitude": 51.834045,
      "longitude": 17.869263,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551152,
      "ems": null
    },
    {
      "latitude": 51.832535,
      "longitude": 17.872528,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551158,
      "ems": null
    },
    {
      "latitude": 51.831215,
      "longitude": 17.875443,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551164,
      "ems": null
    },
    {
      "latitude": 51.829834,
      "longitude": 17.878691,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551170,
      "ems": null
    },
    {
      "latitude": 51.828461,
      "longitude": 17.881733,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664551176,
      "ems": null
    },
    {
      "latitude": 51.827026,
      "longitude": 17.884903,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551182,
      "ems": null
    },
    {
      "latitude": 51.825851,
      "longitude": 17.887747,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664551188,
      "ems": null
    },
    {
      "latitude": 51.82428,
      "longitude": 17.891464,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664551194,
      "ems": null
    },
    {
      "latitude": 51.822922,
      "longitude": 17.894798,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664551200,
      "ems": null
    },
    {
      "latitude": 51.821579,
      "longitude": 17.898102,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664551206,
      "ems": null
    },
    {
      "latitude": 51.820221,
      "longitude": 17.901554,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664551212,
      "ems": null
    },
    {
      "latitude": 51.818974,
      "longitude": 17.904739,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664551218,
      "ems": null
    },
    {
      "latitude": 51.817841,
      "longitude": 17.907864,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664551223,
      "ems": null
    },
    {
      "latitude": 51.817108,
      "longitude": 17.909927,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664551227,
      "ems": null
    },
    {
      "latitude": 51.815918,
      "longitude": 17.913431,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664551233,
      "ems": null
    },
    {
      "latitude": 51.814865,
      "longitude": 17.916845,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664551239,
      "ems": null
    },
    {
      "latitude": 51.814457,
      "longitude": 17.918015,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664551242,
      "ems": null
    },
    {
      "latitude": 51.813812,
      "longitude": 17.920408,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664551245,
      "ems": null
    },
    {
      "latitude": 51.813385,
      "longitude": 17.922058,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664551248,
      "ems": null
    },
    {
      "latitude": 51.812851,
      "longitude": 17.924046,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664551251,
      "ems": null
    },
    {
      "latitude": 51.812347,
      "longitude": 17.925901,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664551254,
      "ems": null
    },
    {
      "latitude": 51.811897,
      "longitude": 17.927628,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664551257,
      "ems": null
    },
    {
      "latitude": 51.811523,
      "longitude": 17.929382,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664551260,
      "ems": null
    },
    {
      "latitude": 51.811199,
      "longitude": 17.930832,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664551263,
      "ems": null
    },
    {
      "latitude": 51.810699,
      "longitude": 17.933027,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664551267,
      "ems": null
    },
    {
      "latitude": 51.810268,
      "longitude": 17.935028,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664551269,
      "ems": null
    },
    {
      "latitude": 51.809895,
      "longitude": 17.93663,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664551272,
      "ems": null
    },
    {
      "latitude": 51.80896,
      "longitude": 17.940823,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664551278,
      "ems": null
    },
    {
      "latitude": 51.808033,
      "longitude": 17.944641,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664551284,
      "ems": null
    },
    {
      "latitude": 51.807037,
      "longitude": 17.948542,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664551291,
      "ems": null
    },
    {
      "latitude": 51.806122,
      "longitude": 17.951965,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664551296,
      "ems": null
    },
    {
      "latitude": 51.805054,
      "longitude": 17.956314,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664551302,
      "ems": null
    },
    {
      "latitude": 51.804062,
      "longitude": 17.960567,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664551309,
      "ems": null
    },
    {
      "latitude": 51.803284,
      "longitude": 17.964056,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664551314,
      "ems": null
    },
    {
      "latitude": 51.802963,
      "longitude": 17.965912,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664551317,
      "ems": null
    },
    {
      "latitude": 51.802864,
      "longitude": 17.966537,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664551319,
      "ems": null
    },
    {
      "latitude": 51.802307,
      "longitude": 17.969666,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664551323,
      "ems": null
    },
    {
      "latitude": 51.801682,
      "longitude": 17.972891,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664551328,
      "ems": null
    },
    {
      "latitude": 51.801041,
      "longitude": 17.976082,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664551333,
      "ems": null
    },
    {
      "latitude": 51.800072,
      "longitude": 17.980499,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664551339,
      "ems": null
    },
    {
      "latitude": 51.799164,
      "longitude": 17.983877,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664551345,
      "ems": null
    },
    {
      "latitude": 51.798721,
      "longitude": 17.985611,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664551347,
      "ems": null
    },
    {
      "latitude": 51.798302,
      "longitude": 17.987366,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664551350,
      "ems": null
    },
    {
      "latitude": 51.797745,
      "longitude": 17.989666,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664551354,
      "ems": null
    },
    {
      "latitude": 51.796906,
      "longitude": 17.993622,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664551360,
      "ems": null
    },
    {
      "latitude": 51.79628,
      "longitude": 17.996943,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664551365,
      "ems": null
    },
    {
      "latitude": 51.795914,
      "longitude": 17.999243,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664551368,
      "ems": null
    },
    {
      "latitude": 51.795547,
      "longitude": 18.001471,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664551372,
      "ems": null
    },
    {
      "latitude": 51.795319,
      "longitude": 18.003548,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551374,
      "ems": null
    },
    {
      "latitude": 51.795044,
      "longitude": 18.005478,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551377,
      "ems": null
    },
    {
      "latitude": 51.794811,
      "longitude": 18.007584,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551381,
      "ems": null
    },
    {
      "latitude": 51.794632,
      "longitude": 18.009487,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551383,
      "ems": null
    },
    {
      "latitude": 51.794403,
      "longitude": 18.011566,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664551387,
      "ems": null
    },
    {
      "latitude": 51.794159,
      "longitude": 18.013535,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551389,
      "ems": null
    },
    {
      "latitude": 51.7939,
      "longitude": 18.015797,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551393,
      "ems": null
    },
    {
      "latitude": 51.79335,
      "longitude": 18.019657,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664551398,
      "ems": null
    },
    {
      "latitude": 51.792763,
      "longitude": 18.023758,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664551404,
      "ems": null
    },
    {
      "latitude": 51.792206,
      "longitude": 18.027954,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551410,
      "ems": null
    },
    {
      "latitude": 51.791702,
      "longitude": 18.031904,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664551416,
      "ems": null
    },
    {
      "latitude": 51.791107,
      "longitude": 18.036211,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664551423,
      "ems": null
    },
    {
      "latitude": 51.790482,
      "longitude": 18.041229,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551430,
      "ems": null
    },
    {
      "latitude": 51.790009,
      "longitude": 18.045044,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551436,
      "ems": null
    },
    {
      "latitude": 51.789459,
      "longitude": 18.049572,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551442,
      "ems": null
    },
    {
      "latitude": 51.788994,
      "longitude": 18.053589,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551448,
      "ems": null
    },
    {
      "latitude": 51.788574,
      "longitude": 18.05748,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551453,
      "ems": null
    },
    {
      "latitude": 51.788269,
      "longitude": 18.061821,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664551459,
      "ems": null
    },
    {
      "latitude": 51.788155,
      "longitude": 18.06427,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664551463,
      "ems": null
    },
    {
      "latitude": 51.78804,
      "longitude": 18.066275,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664551466,
      "ems": null
    },
    {
      "latitude": 51.788013,
      "longitude": 18.067703,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664551468,
      "ems": null
    },
    {
      "latitude": 51.787903,
      "longitude": 18.07058,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664551472,
      "ems": null
    },
    {
      "latitude": 51.787876,
      "longitude": 18.072662,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551475,
      "ems": null
    },
    {
      "latitude": 51.787857,
      "longitude": 18.07444,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551477,
      "ems": null
    },
    {
      "latitude": 51.787827,
      "longitude": 18.076477,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551480,
      "ems": null
    },
    {
      "latitude": 51.787781,
      "longitude": 18.0793,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551484,
      "ems": null
    },
    {
      "latitude": 51.787766,
      "longitude": 18.081196,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551487,
      "ems": null
    },
    {
      "latitude": 51.787643,
      "longitude": 18.085556,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664551493,
      "ems": null
    },
    {
      "latitude": 51.787457,
      "longitude": 18.089447,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664551499,
      "ems": null
    },
    {
      "latitude": 51.78717,
      "longitude": 18.093517,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664551505,
      "ems": null
    },
    {
      "latitude": 51.786991,
      "longitude": 18.095703,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664551508,
      "ems": null
    },
    {
      "latitude": 51.786804,
      "longitude": 18.097675,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664551511,
      "ems": null
    },
    {
      "latitude": 51.786484,
      "longitude": 18.099901,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664551514,
      "ems": null
    },
    {
      "latitude": 51.786293,
      "longitude": 18.100739,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664551517,
      "ems": null
    },
    {
      "latitude": 51.785706,
      "longitude": 18.103168,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664551519,
      "ems": null
    },
    {
      "latitude": 51.785019,
      "longitude": 18.10532,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664551523,
      "ems": null
    },
    {
      "latitude": 51.78429,
      "longitude": 18.106995,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664551526,
      "ems": null
    },
    {
      "latitude": 51.783508,
      "longitude": 18.108364,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664551529,
      "ems": null
    },
    {
      "latitude": 51.782566,
      "longitude": 18.109894,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664551532,
      "ems": null
    },
    {
      "latitude": 51.781448,
      "longitude": 18.111481,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664551535,
      "ems": null
    },
    {
      "latitude": 51.780426,
      "longitude": 18.112869,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664551538,
      "ems": null
    },
    {
      "latitude": 51.779495,
      "longitude": 18.114319,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664551541,
      "ems": null
    },
    {
      "latitude": 51.778519,
      "longitude": 18.115788,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664551544,
      "ems": null
    },
    {
      "latitude": 51.77774,
      "longitude": 18.116901,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664551547,
      "ems": null
    },
    {
      "latitude": 51.776608,
      "longitude": 18.118591,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664551550,
      "ems": null
    },
    {
      "latitude": 51.775497,
      "longitude": 18.120167,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664551553,
      "ems": null
    },
    {
      "latitude": 51.774673,
      "longitude": 18.121725,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664551556,
      "ems": null
    },
    {
      "latitude": 51.774189,
      "longitude": 18.12294,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664551559,
      "ems": null
    },
    {
      "latitude": 51.773678,
      "longitude": 18.125229,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664551562,
      "ems": null
    },
    {
      "latitude": 51.773445,
      "longitude": 18.126526,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664551564,
      "ems": null
    },
    {
      "latitude": 51.77298,
      "longitude": 18.129501,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551569,
      "ems": null
    },
    {
      "latitude": 51.772797,
      "longitude": 18.131227,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664551572,
      "ems": null
    },
    {
      "latitude": 51.772606,
      "longitude": 18.133011,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551574,
      "ems": null
    },
    {
      "latitude": 51.772202,
      "longitude": 18.13583,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664551578,
      "ems": null
    },
    {
      "latitude": 51.771908,
      "longitude": 18.137894,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664551581,
      "ems": null
    },
    {
      "latitude": 51.771606,
      "longitude": 18.139912,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664551583,
      "ems": null
    },
    {
      "latitude": 51.771488,
      "longitude": 18.140717,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664551585,
      "ems": null
    },
    {
      "latitude": 51.771023,
      "longitude": 18.144073,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551589,
      "ems": null
    },
    {
      "latitude": 51.770737,
      "longitude": 18.146221,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664551593,
      "ems": null
    },
    {
      "latitude": 51.770092,
      "longitude": 18.151169,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551600,
      "ems": null
    },
    {
      "latitude": 51.769581,
      "longitude": 18.155441,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551606,
      "ems": null
    },
    {
      "latitude": 51.76902,
      "longitude": 18.15979,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664551612,
      "ems": null
    },
    {
      "latitude": 51.768463,
      "longitude": 18.164139,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551618,
      "ems": null
    },
    {
      "latitude": 51.767902,
      "longitude": 18.168411,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551624,
      "ems": null
    },
    {
      "latitude": 51.767391,
      "longitude": 18.172455,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551630,
      "ems": null
    },
    {
      "latitude": 51.767021,
      "longitude": 18.176498,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551636,
      "ems": null
    },
    {
      "latitude": 51.766617,
      "longitude": 18.180889,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664551642,
      "ems": null
    },
    {
      "latitude": 51.766136,
      "longitude": 18.184967,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551648,
      "ems": null
    },
    {
      "latitude": 51.765701,
      "longitude": 18.189203,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664551654,
      "ems": null
    },
    {
      "latitude": 51.765343,
      "longitude": 18.193207,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551660,
      "ems": null
    },
    {
      "latitude": 51.764969,
      "longitude": 18.197369,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664551666,
      "ems": null
    },
    {
      "latitude": 51.764599,
      "longitude": 18.201141,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664551672,
      "ems": null
    },
    {
      "latitude": 51.764099,
      "longitude": 18.205683,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551678,
      "ems": null
    },
    {
      "latitude": 51.763596,
      "longitude": 18.209839,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551684,
      "ems": null
    },
    {
      "latitude": 51.762924,
      "longitude": 18.215866,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664551693,
      "ems": null
    },
    {
      "latitude": 51.76268,
      "longitude": 18.220158,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551699,
      "ems": null
    },
    {
      "latitude": 51.762691,
      "longitude": 18.22197,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664551702,
      "ems": null
    },
    {
      "latitude": 51.762691,
      "longitude": 18.224411,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551705,
      "ems": null
    },
    {
      "latitude": 51.762642,
      "longitude": 18.226624,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551708,
      "ems": null
    },
    {
      "latitude": 51.762543,
      "longitude": 18.228767,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664551711,
      "ems": null
    },
    {
      "latitude": 51.762409,
      "longitude": 18.230209,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664551713,
      "ems": null
    },
    {
      "latitude": 51.761898,
      "longitude": 18.235703,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664551720,
      "ems": null
    },
    {
      "latitude": 51.761528,
      "longitude": 18.239746,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551726,
      "ems": null
    },
    {
      "latitude": 51.761353,
      "longitude": 18.241461,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551729,
      "ems": null
    },
    {
      "latitude": 51.7612,
      "longitude": 18.243942,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551732,
      "ems": null
    },
    {
      "latitude": 51.761032,
      "longitude": 18.246063,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664551735,
      "ems": null
    },
    {
      "latitude": 51.760712,
      "longitude": 18.249998,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664551741,
      "ems": null
    },
    {
      "latitude": 51.760315,
      "longitude": 18.255157,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551749,
      "ems": null
    },
    {
      "latitude": 51.759991,
      "longitude": 18.25943,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664551755,
      "ems": null
    },
    {
      "latitude": 51.759659,
      "longitude": 18.263212,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551761,
      "ems": null
    },
    {
      "latitude": 51.759155,
      "longitude": 18.267294,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664551767,
      "ems": null
    },
    {
      "latitude": 51.758827,
      "longitude": 18.270721,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664551772,
      "ems": null
    },
    {
      "latitude": 51.758362,
      "longitude": 18.275452,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664551779,
      "ems": null
    },
    {
      "latitude": 51.757828,
      "longitude": 18.28125,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551788,
      "ems": null
    },
    {
      "latitude": 51.757507,
      "longitude": 18.285036,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664551794,
      "ems": null
    },
    {
      "latitude": 51.757141,
      "longitude": 18.289415,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664551800,
      "ems": null
    },
    {
      "latitude": 51.756779,
      "longitude": 18.29361,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664551806,
      "ems": null
    },
    {
      "latitude": 51.756363,
      "longitude": 18.297878,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664551812,
      "ems": null
    },
    {
      "latitude": 51.755905,
      "longitude": 18.30196,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551818,
      "ems": null
    },
    {
      "latitude": 51.755264,
      "longitude": 18.307158,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664551826,
      "ems": null
    },
    {
      "latitude": 51.754852,
      "longitude": 18.311909,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664551833,
      "ems": null
    },
    {
      "latitude": 51.754852,
      "longitude": 18.312576,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664551834,
      "ems": null
    },
    {
      "latitude": 51.754776,
      "longitude": 18.315659,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664551839,
      "ems": null
    },
    {
      "latitude": 51.754635,
      "longitude": 18.318939,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664551843,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 18.321632,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664551847,
      "ems": null
    },
    {
      "latitude": 51.754452,
      "longitude": 18.324051,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551851,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 18.326977,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664551855,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 18.329798,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664551859,
      "ems": null
    },
    {
      "latitude": 51.75444,
      "longitude": 18.335068,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664551866,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 18.337147,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664551869,
      "ems": null
    },
    {
      "latitude": 51.754543,
      "longitude": 18.33931,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664551873,
      "ems": null
    },
    {
      "latitude": 51.754543,
      "longitude": 18.342056,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551878,
      "ems": null
    },
    {
      "latitude": 51.754498,
      "longitude": 18.347092,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551884,
      "ems": null
    },
    {
      "latitude": 51.754402,
      "longitude": 18.352509,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551892,
      "ems": null
    },
    {
      "latitude": 51.754349,
      "longitude": 18.356745,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551898,
      "ems": null
    },
    {
      "latitude": 51.754257,
      "longitude": 18.360901,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664551904,
      "ems": null
    },
    {
      "latitude": 51.754074,
      "longitude": 18.364464,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664551910,
      "ems": null
    },
    {
      "latitude": 51.753986,
      "longitude": 18.36853,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664551916,
      "ems": null
    },
    {
      "latitude": 51.753799,
      "longitude": 18.373108,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664551922,
      "ems": null
    },
    {
      "latitude": 51.753567,
      "longitude": 18.377457,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664551928,
      "ems": null
    },
    {
      "latitude": 51.753479,
      "longitude": 18.381685,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551934,
      "ems": null
    },
    {
      "latitude": 51.753426,
      "longitude": 18.385315,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551939,
      "ems": null
    },
    {
      "latitude": 51.753342,
      "longitude": 18.389555,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551945,
      "ems": null
    },
    {
      "latitude": 51.753296,
      "longitude": 18.394009,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551952,
      "ems": null
    },
    {
      "latitude": 51.753296,
      "longitude": 18.398165,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551957,
      "ems": null
    },
    {
      "latitude": 51.753288,
      "longitude": 18.402634,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551964,
      "ems": null
    },
    {
      "latitude": 51.753334,
      "longitude": 18.406906,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664551970,
      "ems": null
    },
    {
      "latitude": 51.75338,
      "longitude": 18.411255,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664551976,
      "ems": null
    },
    {
      "latitude": 51.753387,
      "longitude": 18.415461,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551982,
      "ems": null
    },
    {
      "latitude": 51.753426,
      "longitude": 18.419876,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664551988,
      "ems": null
    },
    {
      "latitude": 51.753471,
      "longitude": 18.423996,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664551994,
      "ems": null
    },
    {
      "latitude": 51.753433,
      "longitude": 18.428228,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664551999,
      "ems": null
    },
    {
      "latitude": 51.75338,
      "longitude": 18.431778,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552005,
      "ems": null
    },
    {
      "latitude": 51.753288,
      "longitude": 18.436966,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552012,
      "ems": null
    },
    {
      "latitude": 51.753288,
      "longitude": 18.44101,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664552018,
      "ems": null
    },
    {
      "latitude": 51.753288,
      "longitude": 18.445435,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552024,
      "ems": null
    },
    {
      "latitude": 51.753239,
      "longitude": 18.449707,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552030,
      "ems": null
    },
    {
      "latitude": 51.753159,
      "longitude": 18.453913,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552036,
      "ems": null
    },
    {
      "latitude": 51.753113,
      "longitude": 18.458368,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552042,
      "ems": null
    },
    {
      "latitude": 51.753021,
      "longitude": 18.462301,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664552048,
      "ems": null
    },
    {
      "latitude": 51.752914,
      "longitude": 18.468094,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552056,
      "ems": null
    },
    {
      "latitude": 51.752655,
      "longitude": 18.472322,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664552062,
      "ems": null
    },
    {
      "latitude": 51.752518,
      "longitude": 18.474327,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664552065,
      "ems": null
    },
    {
      "latitude": 51.75238,
      "longitude": 18.476406,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664552068,
      "ems": null
    },
    {
      "latitude": 51.752151,
      "longitude": 18.480488,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664552074,
      "ems": null
    },
    {
      "latitude": 51.751984,
      "longitude": 18.484726,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664552080,
      "ems": null
    },
    {
      "latitude": 51.751923,
      "longitude": 18.488802,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552086,
      "ems": null
    },
    {
      "latitude": 51.751877,
      "longitude": 18.490881,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552089,
      "ems": null
    },
    {
      "latitude": 51.751877,
      "longitude": 18.49296,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552092,
      "ems": null
    },
    {
      "latitude": 51.751842,
      "longitude": 18.495102,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552095,
      "ems": null
    },
    {
      "latitude": 51.751831,
      "longitude": 18.497265,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552098,
      "ems": null
    },
    {
      "latitude": 51.751797,
      "longitude": 18.501282,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552104,
      "ems": null
    },
    {
      "latitude": 51.75174,
      "longitude": 18.505505,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664552110,
      "ems": null
    },
    {
      "latitude": 51.751648,
      "longitude": 18.509588,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664552116,
      "ems": null
    },
    {
      "latitude": 51.751511,
      "longitude": 18.513893,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664552122,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 18.517754,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552128,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 18.52191,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552134,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 18.526068,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552140,
      "ems": null
    },
    {
      "latitude": 51.751465,
      "longitude": 18.530521,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664552146,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 18.534678,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664552152,
      "ems": null
    },
    {
      "latitude": 51.75119,
      "longitude": 18.538982,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664552158,
      "ems": null
    },
    {
      "latitude": 51.750957,
      "longitude": 18.543015,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664552164,
      "ems": null
    },
    {
      "latitude": 51.750732,
      "longitude": 18.547222,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664552170,
      "ems": null
    },
    {
      "latitude": 51.750641,
      "longitude": 18.54945,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664552173,
      "ems": null
    },
    {
      "latitude": 51.750492,
      "longitude": 18.553162,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664552179,
      "ems": null
    },
    {
      "latitude": 51.750355,
      "longitude": 18.557816,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664552185,
      "ems": null
    },
    {
      "latitude": 51.750229,
      "longitude": 18.561773,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664552191,
      "ems": null
    },
    {
      "latitude": 51.750214,
      "longitude": 18.56636,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664552198,
      "ems": null
    },
    {
      "latitude": 51.750309,
      "longitude": 18.56842,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664552201,
      "ems": null
    },
    {
      "latitude": 51.750446,
      "longitude": 18.57048,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664552204,
      "ems": null
    },
    {
      "latitude": 51.750587,
      "longitude": 18.572235,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664552206,
      "ems": null
    },
    {
      "latitude": 51.750961,
      "longitude": 18.574392,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664552210,
      "ems": null
    },
    {
      "latitude": 51.751377,
      "longitude": 18.575897,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664552212,
      "ems": null
    },
    {
      "latitude": 51.752029,
      "longitude": 18.577423,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1664552215,
      "ems": null
    },
    {
      "latitude": 51.753006,
      "longitude": 18.578873,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1664552218,
      "ems": null
    },
    {
      "latitude": 51.754032,
      "longitude": 18.579941,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1664552222,
      "ems": null
    },
    {
      "latitude": 51.755009,
      "longitude": 18.580933,
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1664552225,
      "ems": null
    },
    {
      "latitude": 51.755802,
      "longitude": 18.582153,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1664552228,
      "ems": null
    },
    {
      "latitude": 51.756226,
      "longitude": 18.583076,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664552230,
      "ems": null
    },
    {
      "latitude": 51.756821,
      "longitude": 18.585304,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664552233,
      "ems": null
    },
    {
      "latitude": 51.756775,
      "longitude": 18.589239,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664552240,
      "ems": null
    },
    {
      "latitude": 51.756405,
      "longitude": 18.591156,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664552243,
      "ems": null
    },
    {
      "latitude": 51.755905,
      "longitude": 18.592951,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664552246,
      "ems": null
    },
    {
      "latitude": 51.755402,
      "longitude": 18.594584,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664552248,
      "ems": null
    },
    {
      "latitude": 51.75473,
      "longitude": 18.596573,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664552252,
      "ems": null
    },
    {
      "latitude": 51.753891,
      "longitude": 18.598175,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664552255,
      "ems": null
    },
    {
      "latitude": 51.752975,
      "longitude": 18.599556,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664552258,
      "ems": null
    },
    {
      "latitude": 51.751923,
      "longitude": 18.601042,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664552261,
      "ems": null
    },
    {
      "latitude": 51.750916,
      "longitude": 18.602377,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664552264,
      "ems": null
    },
    {
      "latitude": 51.750259,
      "longitude": 18.60321,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664552266,
      "ems": null
    },
    {
      "latitude": 51.748772,
      "longitude": 18.604889,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664552270,
      "ems": null
    },
    {
      "latitude": 51.747849,
      "longitude": 18.605719,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552272,
      "ems": null
    },
    {
      "latitude": 51.746384,
      "longitude": 18.606609,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664552276,
      "ems": null
    },
    {
      "latitude": 51.745056,
      "longitude": 18.6075,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664552279,
      "ems": null
    },
    {
      "latitude": 51.744022,
      "longitude": 18.60817,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664552281,
      "ems": null
    },
    {
      "latitude": 51.742676,
      "longitude": 18.609058,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664552285,
      "ems": null
    },
    {
      "latitude": 51.741486,
      "longitude": 18.610023,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552288,
      "ems": null
    },
    {
      "latitude": 51.740341,
      "longitude": 18.610914,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552291,
      "ems": null
    },
    {
      "latitude": 51.739151,
      "longitude": 18.611879,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552294,
      "ems": null
    },
    {
      "latitude": 51.738098,
      "longitude": 18.61277,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552297,
      "ems": null
    },
    {
      "latitude": 51.7369,
      "longitude": 18.613739,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552300,
      "ems": null
    },
    {
      "latitude": 51.734711,
      "longitude": 18.615517,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552306,
      "ems": null
    },
    {
      "latitude": 51.733547,
      "longitude": 18.616486,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664552309,
      "ems": null
    },
    {
      "latitude": 51.732616,
      "longitude": 18.617249,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664552312,
      "ems": null
    },
    {
      "latitude": 51.731552,
      "longitude": 18.618263,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664552315,
      "ems": null
    },
    {
      "latitude": 51.729546,
      "longitude": 18.620148,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664552321,
      "ems": null
    },
    {
      "latitude": 51.727158,
      "longitude": 18.622198,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552327,
      "ems": null
    },
    {
      "latitude": 51.725143,
      "longitude": 18.62398,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664552333,
      "ems": null
    },
    {
      "latitude": 51.722935,
      "longitude": 18.625793,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664552339,
      "ems": null
    },
    {
      "latitude": 51.72163,
      "longitude": 18.626556,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664552342,
      "ems": null
    },
    {
      "latitude": 51.720474,
      "longitude": 18.626873,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664552345,
      "ems": null
    },
    {
      "latitude": 51.719257,
      "longitude": 18.626785,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664552348,
      "ems": null
    },
    {
      "latitude": 51.718002,
      "longitude": 18.626354,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664552351,
      "ems": null
    },
    {
      "latitude": 51.716766,
      "longitude": 18.625389,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1664552354,
      "ems": null
    },
    {
      "latitude": 51.715767,
      "longitude": 18.624191,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664552357,
      "ems": null
    },
    {
      "latitude": 51.714836,
      "longitude": 18.622665,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664552360,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 18.621159,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664552363,
      "ems": null
    },
    {
      "latitude": 51.713333,
      "longitude": 18.619377,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664552366,
      "ems": null
    },
    {
      "latitude": 51.712788,
      "longitude": 18.617554,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664552369,
      "ems": null
    },
    {
      "latitude": 51.712372,
      "longitude": 18.615517,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664552372,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 18.613512,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1664552375,
      "ems": null
    },
    {
      "latitude": 51.71204,
      "longitude": 18.611755,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664552377,
      "ems": null
    },
    {
      "latitude": 51.712181,
      "longitude": 18.609085,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664552381,
      "ems": null
    },
    {
      "latitude": 51.712414,
      "longitude": 18.607101,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1664552384,
      "ems": null
    },
    {
      "latitude": 51.712833,
      "longitude": 18.60527,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664552387,
      "ems": null
    },
    {
      "latitude": 51.713486,
      "longitude": 18.603134,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1664552390,
      "ems": null
    },
    {
      "latitude": 51.714138,
      "longitude": 18.601532,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1664552393,
      "ems": null
    },
    {
      "latitude": 51.715019,
      "longitude": 18.599854,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1664552396,
      "ems": null
    },
    {
      "latitude": 51.715904,
      "longitude": 18.59848,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1664552399,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 18.59726,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1664552402,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 18.596439,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664552405,
      "ems": null
    },
    {
      "latitude": 51.719444,
      "longitude": 18.595886,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1664552408,
      "ems": null
    },
    {
      "latitude": 51.720657,
      "longitude": 18.595919,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1664552411,
      "ems": null
    },
    {
      "latitude": 51.721344,
      "longitude": 18.595993,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1664552412,
      "ems": null
    },
    {
      "latitude": 51.723309,
      "longitude": 18.596649,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1664552417,
      "ems": null
    },
    {
      "latitude": 51.724705,
      "longitude": 18.597107,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664552420,
      "ems": null
    },
    {
      "latitude": 51.725922,
      "longitude": 18.597479,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552423,
      "ems": null
    },
    {
      "latitude": 51.727249,
      "longitude": 18.597849,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552426,
      "ems": null
    },
    {
      "latitude": 51.728569,
      "longitude": 18.598175,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552429,
      "ems": null
    },
    {
      "latitude": 51.729813,
      "longitude": 18.598516,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664552432,
      "ems": null
    },
    {
      "latitude": 51.731083,
      "longitude": 18.598862,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664552435,
      "ems": null
    },
    {
      "latitude": 51.732479,
      "longitude": 18.599167,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664552438,
      "ems": null
    },
    {
      "latitude": 51.73513,
      "longitude": 18.599701,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664552444,
      "ems": null
    },
    {
      "latitude": 51.737553,
      "longitude": 18.600235,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552450,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 18.600893,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664552456,
      "ems": null
    },
    {
      "latitude": 51.74144,
      "longitude": 18.601116,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1664552459,
      "ems": null
    },
    {
      "latitude": 51.744114,
      "longitude": 18.601456,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1664552465,
      "ems": null
    },
    {
      "latitude": 51.746582,
      "longitude": 18.601837,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1664552471,
      "ems": null
    },
    {
      "latitude": 51.749268,
      "longitude": 18.602228,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664552477,
      "ems": null
    },
    {
      "latitude": 51.75161,
      "longitude": 18.603363,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1664552483,
      "ems": null
    },
    {
      "latitude": 51.752792,
      "longitude": 18.604382,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1664552486,
      "ems": null
    },
    {
      "latitude": 51.753845,
      "longitude": 18.605576,
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1664552489,
      "ems": null
    },
    {
      "latitude": 51.754311,
      "longitude": 18.606186,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1664552492,
      "ems": null
    },
    {
      "latitude": 51.755585,
      "longitude": 18.608465,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1664552495,
      "ems": null
    },
    {
      "latitude": 51.756226,
      "longitude": 18.610172,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664552498,
      "ems": null
    },
    {
      "latitude": 51.756683,
      "longitude": 18.611954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664552501,
      "ems": null
    },
    {
      "latitude": 51.756966,
      "longitude": 18.613815,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664552504,
      "ems": null
    },
    {
      "latitude": 51.757095,
      "longitude": 18.615294,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664552507,
      "ems": null
    },
    {
      "latitude": 51.757011,
      "longitude": 18.617706,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664552510,
      "ems": null
    },
    {
      "latitude": 51.756775,
      "longitude": 18.619673,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664552513,
      "ems": null
    },
    {
      "latitude": 51.756405,
      "longitude": 18.621368,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664552516,
      "ems": null
    },
    {
      "latitude": 51.755802,
      "longitude": 18.623123,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664552519,
      "ems": null
    },
    {
      "latitude": 51.755054,
      "longitude": 18.624649,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664552523,
      "ems": null
    },
    {
      "latitude": 51.754257,
      "longitude": 18.625835,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664552526,
      "ems": null
    },
    {
      "latitude": 51.75325,
      "longitude": 18.626873,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664552529,
      "ems": null
    },
    {
      "latitude": 51.752354,
      "longitude": 18.627472,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664552531,
      "ems": null
    },
    {
      "latitude": 51.751099,
      "longitude": 18.62793,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664552534,
      "ems": null
    },
    {
      "latitude": 51.749725,
      "longitude": 18.627987,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664552538,
      "ems": null
    },
    {
      "latitude": 51.748489,
      "longitude": 18.627766,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664552541,
      "ems": null
    },
    {
      "latitude": 51.74728,
      "longitude": 18.627472,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664552543,
      "ems": null
    },
    {
      "latitude": 51.746017,
      "longitude": 18.627245,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664552547,
      "ems": null
    },
    {
      "latitude": 51.744827,
      "longitude": 18.627096,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664552549,
      "ems": null
    },
    {
      "latitude": 51.743744,
      "longitude": 18.626862,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664552552,
      "ems": null
    },
    {
      "latitude": 51.742348,
      "longitude": 18.626633,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664552556,
      "ems": null
    },
    {
      "latitude": 51.741211,
      "longitude": 18.626429,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664552559,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 18.626205,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664552561,
      "ems": null
    },
    {
      "latitude": 51.738949,
      "longitude": 18.626022,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664552564,
      "ems": null
    },
    {
      "latitude": 51.737549,
      "longitude": 18.625835,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664552568,
      "ems": null
    },
    {
      "latitude": 51.735176,
      "longitude": 18.625488,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664552573,
      "ems": null
    },
    {
      "latitude": 51.732651,
      "longitude": 18.625166,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664552580,
      "ems": null
    },
    {
      "latitude": 51.730289,
      "longitude": 18.624802,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664552585,
      "ems": null
    },
    {
      "latitude": 51.727707,
      "longitude": 18.624573,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664552592,
      "ems": null
    },
    {
      "latitude": 51.725235,
      "longitude": 18.62435,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664552598,
      "ems": null
    },
    {
      "latitude": 51.722889,
      "longitude": 18.624039,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664552603,
      "ems": null
    },
    {
      "latitude": 51.720337,
      "longitude": 18.623831,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664552609,
      "ems": null
    },
    {
      "latitude": 51.717815,
      "longitude": 18.623505,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664552616,
      "ems": null
    },
    {
      "latitude": 51.716511,
      "longitude": 18.622894,
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1664552619,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 18.622055,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1664552622,
      "ems": null
    },
    {
      "latitude": 51.71434,
      "longitude": 18.62101,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664552625,
      "ems": null
    },
    {
      "latitude": 51.713333,
      "longitude": 18.619747,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664552628,
      "ems": null
    },
    {
      "latitude": 51.712418,
      "longitude": 18.618263,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1664552631,
      "ems": null
    },
    {
      "latitude": 51.711575,
      "longitude": 18.616486,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664552634,
      "ems": null
    },
    {
      "latitude": 51.711018,
      "longitude": 18.614807,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664552637,
      "ems": null
    },
    {
      "latitude": 51.710587,
      "longitude": 18.61277,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664552640,
      "ems": null
    },
    {
      "latitude": 51.710266,
      "longitude": 18.610765,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664552643,
      "ems": null
    },
    {
      "latitude": 51.710041,
      "longitude": 18.60878,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664552646,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 18.60672,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664552649,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 18.605042,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664552652,
      "ems": null
    },
    {
      "latitude": 51.710037,
      "longitude": 18.6026,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664552655,
      "ems": null
    },
    {
      "latitude": 51.710224,
      "longitude": 18.600769,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664552658,
      "ems": null
    },
    {
      "latitude": 51.710598,
      "longitude": 18.59848,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1664552661,
      "ems": null
    },
    {
      "latitude": 51.710999,
      "longitude": 18.596439,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664552664,
      "ems": null
    },
    {
      "latitude": 51.711483,
      "longitude": 18.594818,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1664552666,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 18.592758,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1664552670,
      "ems": null
    },
    {
      "latitude": 51.71283,
      "longitude": 18.591614,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664552673,
      "ems": null
    },
    {
      "latitude": 51.714066,
      "longitude": 18.589907,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664552676,
      "ems": null
    },
    {
      "latitude": 51.715206,
      "longitude": 18.588715,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1664552679,
      "ems": null
    },
    {
      "latitude": 51.716511,
      "longitude": 18.587799,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664552682,
      "ems": null
    },
    {
      "latitude": 51.717815,
      "longitude": 18.587341,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1664552685,
      "ems": null
    },
    {
      "latitude": 51.719193,
      "longitude": 18.587383,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1664552688,
      "ems": null
    },
    {
      "latitude": 51.720562,
      "longitude": 18.587723,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552691,
      "ems": null
    },
    {
      "latitude": 51.721848,
      "longitude": 18.588051,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552694,
      "ems": null
    },
    {
      "latitude": 51.723175,
      "longitude": 18.588421,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664552697,
      "ems": null
    },
    {
      "latitude": 51.724503,
      "longitude": 18.588793,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664552700,
      "ems": null
    },
    {
      "latitude": 51.725922,
      "longitude": 18.589165,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664552703,
      "ems": null
    },
    {
      "latitude": 51.727264,
      "longitude": 18.589478,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552706,
      "ems": null
    },
    {
      "latitude": 51.728336,
      "longitude": 18.589859,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664552709,
      "ems": null
    },
    {
      "latitude": 51.729733,
      "longitude": 18.590317,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1664552712,
      "ems": null
    },
    {
      "latitude": 51.730911,
      "longitude": 18.590649,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664552715,
      "ems": null
    },
    {
      "latitude": 51.732105,
      "longitude": 18.591003,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664552718,
      "ems": null
    },
    {
      "latitude": 51.734619,
      "longitude": 18.592148,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1664552724,
      "ems": null
    },
    {
      "latitude": 51.735691,
      "longitude": 18.592758,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1664552727,
      "ems": null
    },
    {
      "latitude": 51.736908,
      "longitude": 18.593618,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664552730,
      "ems": null
    },
    {
      "latitude": 51.73811,
      "longitude": 18.594437,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664552733,
      "ems": null
    },
    {
      "latitude": 51.739182,
      "longitude": 18.595276,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664552736,
      "ems": null
    },
    {
      "latitude": 51.740391,
      "longitude": 18.596115,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664552739,
      "ems": null
    },
    {
      "latitude": 51.741531,
      "longitude": 18.597033,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664552742,
      "ems": null
    },
    {
      "latitude": 51.742538,
      "longitude": 18.597775,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664552745,
      "ems": null
    },
    {
      "latitude": 51.743774,
      "longitude": 18.598665,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664552748,
      "ems": null
    },
    {
      "latitude": 51.744736,
      "longitude": 18.599335,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1664552751,
      "ems": null
    },
    {
      "latitude": 51.74728,
      "longitude": 18.600693,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664552757,
      "ems": null
    },
    {
      "latitude": 51.748585,
      "longitude": 18.601074,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552760,
      "ems": null
    },
    {
      "latitude": 51.749935,
      "longitude": 18.601532,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664552763,
      "ems": null
    },
    {
      "latitude": 51.752171,
      "longitude": 18.60321,
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1664552769,
      "ems": null
    },
    {
      "latitude": 51.753159,
      "longitude": 18.604382,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1664552772,
      "ems": null
    },
    {
      "latitude": 51.754166,
      "longitude": 18.606163,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1664552775,
      "ems": null
    },
    {
      "latitude": 51.754761,
      "longitude": 18.607647,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664552778,
      "ems": null
    },
    {
      "latitude": 51.755287,
      "longitude": 18.609467,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664552781,
      "ems": null
    },
    {
      "latitude": 51.755585,
      "longitude": 18.610989,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664552784,
      "ems": null
    },
    {
      "latitude": 51.755802,
      "longitude": 18.613052,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664552787,
      "ems": null
    },
    {
      "latitude": 51.755814,
      "longitude": 18.614996,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664552790,
      "ems": null
    },
    {
      "latitude": 51.755676,
      "longitude": 18.616852,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664552793,
      "ems": null
    },
    {
      "latitude": 51.755337,
      "longitude": 18.618774,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664552796,
      "ems": null
    },
    {
      "latitude": 51.754868,
      "longitude": 18.620529,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664552799,
      "ems": null
    },
    {
      "latitude": 51.754303,
      "longitude": 18.621975,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664552802,
      "ems": null
    },
    {
      "latitude": 51.753754,
      "longitude": 18.623089,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664552805,
      "ems": null
    },
    {
      "latitude": 51.752884,
      "longitude": 18.624498,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664552808,
      "ems": null
    },
    {
      "latitude": 51.751842,
      "longitude": 18.625641,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664552811,
      "ems": null
    },
    {
      "latitude": 51.750492,
      "longitude": 18.626709,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664552814,
      "ems": null
    },
    {
      "latitude": 51.749176,
      "longitude": 18.627319,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664552817,
      "ems": null
    },
    {
      "latitude": 51.74826,
      "longitude": 18.627472,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664552820,
      "ems": null
    },
    {
      "latitude": 51.747002,
      "longitude": 18.627548,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664552823,
      "ems": null
    },
    {
      "latitude": 51.74556,
      "longitude": 18.627243,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664552826,
      "ems": null
    },
    {
      "latitude": 51.744164,
      "longitude": 18.626938,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664552829,
      "ems": null
    },
    {
      "latitude": 51.742813,
      "longitude": 18.626709,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664552833,
      "ems": null
    },
    {
      "latitude": 51.741806,
      "longitude": 18.626503,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664552835,
      "ems": null
    },
    {
      "latitude": 51.740902,
      "longitude": 18.626328,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664552837,
      "ems": null
    },
    {
      "latitude": 51.739136,
      "longitude": 18.626022,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664552841,
      "ems": null
    },
    {
      "latitude": 51.737915,
      "longitude": 18.625835,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664552844,
      "ems": null
    },
    {
      "latitude": 51.736481,
      "longitude": 18.625488,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664552847,
      "ems": null
    },
    {
      "latitude": 51.73558,
      "longitude": 18.625315,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1664552849,
      "ems": null
    },
    {
      "latitude": 51.733887,
      "longitude": 18.625019,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664552853,
      "ems": null
    },
    {
      "latitude": 51.731506,
      "longitude": 18.624722,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664552859,
      "ems": null
    },
    {
      "latitude": 51.730453,
      "longitude": 18.624647,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664552862,
      "ems": null
    },
    {
      "latitude": 51.728851,
      "longitude": 18.624573,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664552865,
      "ems": null
    },
    {
      "latitude": 51.727478,
      "longitude": 18.624573,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664552869,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 18.624573,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664552871,
      "ems": null
    },
    {
      "latitude": 51.724888,
      "longitude": 18.624573,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1664552875,
      "ems": null
    },
    {
      "latitude": 51.723724,
      "longitude": 18.624647,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664552877,
      "ems": null
    },
    {
      "latitude": 51.722378,
      "longitude": 18.624649,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664552880,
      "ems": null
    },
    {
      "latitude": 51.721298,
      "longitude": 18.624647,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664552883,
      "ems": null
    },
    {
      "latitude": 51.719955,
      "longitude": 18.624725,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664552886,
      "ems": null
    },
    {
      "latitude": 51.717815,
      "longitude": 18.624725,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664552891,
      "ems": null
    },
    {
      "latitude": 51.715904,
      "longitude": 18.623962,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664552895,
      "ems": null
    },
    {
      "latitude": 51.714523,
      "longitude": 18.623014,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1664552899,
      "ems": null
    },
    {
      "latitude": 51.71347,
      "longitude": 18.621901,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1664552902,
      "ems": null
    },
    {
      "latitude": 51.712463,
      "longitude": 18.620564,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1664552905,
      "ems": null
    },
    {
      "latitude": 51.711502,
      "longitude": 18.618782,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664552908,
      "ems": null
    },
    {
      "latitude": 51.710815,
      "longitude": 18.617075,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1664552911,
      "ems": null
    },
    {
      "latitude": 51.71032,
      "longitude": 18.615417,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664552913,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 18.613438,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1664552917,
      "ems": null
    },
    {
      "latitude": 51.709621,
      "longitude": 18.610916,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1664552920,
      "ems": null
    },
    {
      "latitude": 51.709576,
      "longitude": 18.608551,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664552923,
      "ems": null
    },
    {
      "latitude": 51.709717,
      "longitude": 18.606461,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664552926,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 18.605347,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664552929,
      "ems": null
    },
    {
      "latitude": 51.710552,
      "longitude": 18.602142,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1664552932,
      "ems": null
    },
    {
      "latitude": 51.711044,
      "longitude": 18.60067,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1664552934,
      "ems": null
    },
    {
      "latitude": 51.712051,
      "longitude": 18.598516,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664552938,
      "ems": null
    },
    {
      "latitude": 51.712971,
      "longitude": 18.597107,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1664552941,
      "ems": null
    },
    {
      "latitude": 51.714184,
      "longitude": 18.59581,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1664552944,
      "ems": null
    },
    {
      "latitude": 51.715439,
      "longitude": 18.594807,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1664552947,
      "ems": null
    },
    {
      "latitude": 51.716835,
      "longitude": 18.594284,
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1664552950,
      "ems": null
    },
    {
      "latitude": 51.71814,
      "longitude": 18.594137,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1664552953,
      "ems": null
    },
    {
      "latitude": 51.719444,
      "longitude": 18.594284,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1664552956,
      "ems": null
    },
    {
      "latitude": 51.720329,
      "longitude": 18.594589,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664552958,
      "ems": null
    },
    {
      "latitude": 51.721664,
      "longitude": 18.595177,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664552962,
      "ems": null
    },
    {
      "latitude": 51.723309,
      "longitude": 18.59581,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1664552965,
      "ems": null
    },
    {
      "latitude": 51.72464,
      "longitude": 18.596216,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664552968,
      "ems": null
    },
    {
      "latitude": 51.72583,
      "longitude": 18.596588,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664552971,
      "ems": null
    },
    {
      "latitude": 51.727112,
      "longitude": 18.597033,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664552974,
      "ems": null
    },
    {
      "latitude": 51.728519,
      "longitude": 18.597412,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664552977,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 18.597717,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664552979,
      "ems": null
    },
    {
      "latitude": 51.73114,
      "longitude": 18.598146,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552983,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 18.598709,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664552988,
      "ems": null
    },
    {
      "latitude": 51.736343,
      "longitude": 18.599625,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664552995,
      "ems": null
    },
    {
      "latitude": 51.738739,
      "longitude": 18.6003,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664553001,
      "ems": null
    },
    {
      "latitude": 51.741302,
      "longitude": 18.600967,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553007,
      "ems": null
    },
    {
      "latitude": 51.743233,
      "longitude": 18.601456,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664553012,
      "ems": null
    },
    {
      "latitude": 51.74649,
      "longitude": 18.602295,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664553019,
      "ems": null
    },
    {
      "latitude": 51.74905,
      "longitude": 18.602982,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664553025,
      "ems": null
    },
    {
      "latitude": 51.750912,
      "longitude": 18.603668,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553029,
      "ems": null
    },
    {
      "latitude": 51.752029,
      "longitude": 18.604431,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1664553032,
      "ems": null
    },
    {
      "latitude": 51.752975,
      "longitude": 18.605272,
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1664553036,
      "ems": null
    },
    {
      "latitude": 51.754623,
      "longitude": 18.607351,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1664553039,
      "ems": null
    },
    {
      "latitude": 51.755337,
      "longitude": 18.608551,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1664553042,
      "ems": null
    },
    {
      "latitude": 51.755905,
      "longitude": 18.609949,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664553044,
      "ems": null
    },
    {
      "latitude": 51.756592,
      "longitude": 18.612177,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664553048,
      "ems": null
    },
    {
      "latitude": 51.757004,
      "longitude": 18.614403,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664553052,
      "ems": null
    },
    {
      "latitude": 51.757187,
      "longitude": 18.616333,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664553055,
      "ems": null
    },
    {
      "latitude": 51.757187,
      "longitude": 18.618263,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664553058,
      "ems": null
    },
    {
      "latitude": 51.757011,
      "longitude": 18.6203,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664553061,
      "ems": null
    },
    {
      "latitude": 51.756638,
      "longitude": 18.622049,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664553064,
      "ems": null
    },
    {
      "latitude": 51.756042,
      "longitude": 18.623905,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664553067,
      "ems": null
    },
    {
      "latitude": 51.755383,
      "longitude": 18.625488,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664553070,
      "ems": null
    },
    {
      "latitude": 51.754402,
      "longitude": 18.626938,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664553073,
      "ems": null
    },
    {
      "latitude": 51.753525,
      "longitude": 18.627987,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664553076,
      "ems": null
    },
    {
      "latitude": 51.752354,
      "longitude": 18.628922,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664553079,
      "ems": null
    },
    {
      "latitude": 51.751144,
      "longitude": 18.629532,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664553082,
      "ems": null
    },
    {
      "latitude": 51.749889,
      "longitude": 18.629837,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664553085,
      "ems": null
    },
    {
      "latitude": 51.748718,
      "longitude": 18.629917,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664553088,
      "ems": null
    },
    {
      "latitude": 51.74728,
      "longitude": 18.629761,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1664553091,
      "ems": null
    },
    {
      "latitude": 51.745972,
      "longitude": 18.629398,
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
      "squawk": "7000",
      "timestamp": 1664553094,
      "ems": null
    },
    {
      "latitude": 51.744534,
      "longitude": 18.628998,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1664553097,
      "ems": null
    },
    {
      "latitude": 51.743324,
      "longitude": 18.628616,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664553100,
      "ems": null
    },
    {
      "latitude": 51.742401,
      "longitude": 18.628359,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1664553103,
      "ems": null
    },
    {
      "latitude": 51.74057,
      "longitude": 18.627838,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664553107,
      "ems": null
    },
    {
      "latitude": 51.739288,
      "longitude": 18.627691,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664553109,
      "ems": null
    },
    {
      "latitude": 51.737972,
      "longitude": 18.627472,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664553112,
      "ems": null
    },
    {
      "latitude": 51.736622,
      "longitude": 18.627243,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664553115,
      "ems": null
    },
    {
      "latitude": 51.73378,
      "longitude": 18.626862,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664553121,
      "ems": null
    },
    {
      "latitude": 51.732422,
      "longitude": 18.626726,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1664553124,
      "ems": null
    },
    {
      "latitude": 51.731129,
      "longitude": 18.626556,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664553127,
      "ems": null
    },
    {
      "latitude": 51.729675,
      "longitude": 18.626503,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664553130,
      "ems": null
    },
    {
      "latitude": 51.728615,
      "longitude": 18.62648,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664553133,
      "ems": null
    },
    {
      "latitude": 51.725418,
      "longitude": 18.626131,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664553140,
      "ems": null
    },
    {
      "latitude": 51.722809,
      "longitude": 18.625687,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664553145,
      "ems": null
    },
    {
      "latitude": 51.720108,
      "longitude": 18.625389,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1664553151,
      "ems": null
    },
    {
      "latitude": 51.717499,
      "longitude": 18.625092,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1664553157,
      "ems": null
    },
    {
      "latitude": 51.715073,
      "longitude": 18.624945,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664553164,
      "ems": null
    },
    {
      "latitude": 51.71339,
      "longitude": 18.624496,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664553167,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 18.623756,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1664553170,
      "ems": null
    },
    {
      "latitude": 51.71109,
      "longitude": 18.622866,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1664553172,
      "ems": null
    },
    {
      "latitude": 51.710087,
      "longitude": 18.621597,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664553176,
      "ems": null
    },
    {
      "latitude": 51.709122,
      "longitude": 18.620045,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664553179,
      "ems": null
    },
    {
      "latitude": 51.708504,
      "longitude": 18.618622,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1664553181,
      "ems": null
    },
    {
      "latitude": 51.707806,
      "longitude": 18.616638,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664553184,
      "ems": null
    },
    {
      "latitude": 51.707382,
      "longitude": 18.614849,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664553187,
      "ems": null
    },
    {
      "latitude": 51.707012,
      "longitude": 18.612442,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664553190,
      "ems": null
    },
    {
      "latitude": 51.706879,
      "longitude": 18.610172,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664553194,
      "ems": null
    },
    {
      "latitude": 51.706921,
      "longitude": 18.607941,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664553197,
      "ems": null
    },
    {
      "latitude": 51.707108,
      "longitude": 18.60594,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664553199,
      "ems": null
    },
    {
      "latitude": 51.70734,
      "longitude": 18.604431,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664553201,
      "ems": null
    },
    {
      "latitude": 51.708084,
      "longitude": 18.601913,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1664553205,
      "ems": null
    },
    {
      "latitude": 51.708893,
      "longitude": 18.600002,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664553208,
      "ems": null
    },
    {
      "latitude": 51.709763,
      "longitude": 18.598665,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1664553211,
      "ems": null
    },
    {
      "latitude": 51.710739,
      "longitude": 18.597412,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664553214,
      "ems": null
    },
    {
      "latitude": 51.712322,
      "longitude": 18.596191,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1664553217,
      "ems": null
    },
    {
      "latitude": 51.713425,
      "longitude": 18.595697,
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1664553220,
      "ems": null
    },
    {
      "latitude": 51.714523,
      "longitude": 18.595474,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1664553223,
      "ems": null
    },
    {
      "latitude": 51.716263,
      "longitude": 18.595623,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1664553226,
      "ems": null
    },
    {
      "latitude": 51.717407,
      "longitude": 18.595919,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664553229,
      "ems": null
    },
    {
      "latitude": 51.718643,
      "longitude": 18.596142,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553231,
      "ems": null
    },
    {
      "latitude": 51.719376,
      "longitude": 18.596365,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553233,
      "ems": null
    },
    {
      "latitude": 51.721344,
      "longitude": 18.596809,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553238,
      "ems": null
    },
    {
      "latitude": 51.723724,
      "longitude": 18.597412,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553243,
      "ems": null
    },
    {
      "latitude": 51.725636,
      "longitude": 18.597946,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664553247,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 18.598251,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664553250,
      "ems": null
    },
    {
      "latitude": 51.727871,
      "longitude": 18.598557,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664553253,
      "ems": null
    },
    {
      "latitude": 51.730431,
      "longitude": 18.599396,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664553259,
      "ems": null
    },
    {
      "latitude": 51.733017,
      "longitude": 18.600372,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664553265,
      "ems": null
    },
    {
      "latitude": 51.735901,
      "longitude": 18.601191,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553271,
      "ems": null
    },
    {
      "latitude": 51.73851,
      "longitude": 18.601635,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1664553277,
      "ems": null
    },
    {
      "latitude": 51.739792,
      "longitude": 18.601784,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1664553280,
      "ems": null
    },
    {
      "latitude": 51.742439,
      "longitude": 18.602676,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1664553286,
      "ems": null
    },
    {
      "latitude": 51.743465,
      "longitude": 18.603287,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1664553289,
      "ems": null
    },
    {
      "latitude": 51.744999,
      "longitude": 18.604126,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1664553292,
      "ems": null
    },
    {
      "latitude": 51.74762,
      "longitude": 18.605272,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553298,
      "ems": null
    },
    {
      "latitude": 51.748077,
      "longitude": 18.605495,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553301,
      "ems": null
    },
    {
      "latitude": 51.749702,
      "longitude": 18.60611,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1664553303,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 18.606831,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553307,
      "ems": null
    },
    {
      "latitude": 51.752495,
      "longitude": 18.60733,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553309,
      "ems": null
    },
    {
      "latitude": 51.753937,
      "longitude": 18.607941,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553313,
      "ems": null
    },
    {
      "latitude": 51.756683,
      "longitude": 18.609238,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1664553319,
      "ems": null
    },
    {
      "latitude": 51.758499,
      "longitude": 18.610077,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1664553324,
      "ems": null
    },
    {
      "latitude": 51.761581,
      "longitude": 18.611359,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664553331,
      "ems": null
    },
    {
      "latitude": 51.764053,
      "longitude": 18.612028,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553337,
      "ems": null
    },
    {
      "latitude": 51.764786,
      "longitude": 18.612213,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553339,
      "ems": null
    },
    {
      "latitude": 51.766506,
      "longitude": 18.612518,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1664553343,
      "ems": null
    },
    {
      "latitude": 51.768044,
      "longitude": 18.6129,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1664553347,
      "ems": null
    },
    {
      "latitude": 51.769951,
      "longitude": 18.613434,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1664553351,
      "ems": null
    },
    {
      "latitude": 51.77298,
      "longitude": 18.614426,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664553358,
      "ems": null
    },
    {
      "latitude": 51.775726,
      "longitude": 18.615265,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1664553364,
      "ems": null
    },
    {
      "latitude": 51.778244,
      "longitude": 18.616184,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553370,
      "ems": null
    },
    {
      "latitude": 51.779663,
      "longitude": 18.616779,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553373,
      "ems": null
    },
    {
      "latitude": 51.780937,
      "longitude": 18.617401,
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1664553377,
      "ems": null
    },
    {
      "latitude": 51.783371,
      "longitude": 18.618412,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553383,
      "ems": null
    },
    {
      "latitude": 51.785568,
      "longitude": 18.619526,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1664553388,
      "ems": null
    },
    {
      "latitude": 51.787315,
      "longitude": 18.6203,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1664553392,
      "ems": null
    },
    {
      "latitude": 51.789551,
      "longitude": 18.621233,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553397,
      "ems": null
    },
    {
      "latitude": 51.79211,
      "longitude": 18.622208,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1664553403,
      "ems": null
    },
    {
      "latitude": 51.793694,
      "longitude": 18.622665,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553406,
      "ems": null
    },
    {
      "latitude": 51.79509,
      "longitude": 18.622894,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664553410,
      "ems": null
    },
    {
      "latitude": 51.796463,
      "longitude": 18.623163,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664553413,
      "ems": null
    },
    {
      "latitude": 51.797512,
      "longitude": 18.623428,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1664553415,
      "ems": null
    },
    {
      "latitude": 51.798615,
      "longitude": 18.623608,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664553418,
      "ems": null
    },
    {
      "latitude": 51.800163,
      "longitude": 18.623962,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664553421,
      "ems": null
    },
    {
      "latitude": 51.801559,
      "longitude": 18.624344,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553424,
      "ems": null
    },
    {
      "latitude": 51.803192,
      "longitude": 18.624725,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553428,
      "ems": null
    },
    {
      "latitude": 51.805099,
      "longitude": 18.625107,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1664553432,
      "ems": null
    },
    {
      "latitude": 51.808319,
      "longitude": 18.625835,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553440,
      "ems": null
    },
    {
      "latitude": 51.812027,
      "longitude": 18.626801,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1664553448,
      "ems": null
    },
    {
      "latitude": 51.815807,
      "longitude": 18.62854,
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1664553457,
      "ems": null
    },
    {
      "latitude": 51.816971,
      "longitude": 18.629761,
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1664553461,
      "ems": null
    },
    {
      "latitude": 51.81818,
      "longitude": 18.631287,
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1664553465,
      "ems": null
    },
    {
      "latitude": 51.819717,
      "longitude": 18.633331,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1664553469,
      "ems": null
    },
    {
      "latitude": 51.820972,
      "longitude": 18.634872,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1664553473,
      "ems": null
    },
    {
      "latitude": 51.821625,
      "longitude": 18.635712,
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1664553475,
      "ems": null
    },
    {
      "latitude": 51.823162,
      "longitude": 18.637772,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1664553479,
      "ems": null
    },
    {
      "latitude": 51.825623,
      "longitude": 18.640978,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1664553487,
      "ems": null
    },
    {
      "latitude": 51.828236,
      "longitude": 18.644409,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1664553495,
      "ems": null
    },
    {
      "latitude": 51.830238,
      "longitude": 18.646927,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1664553501,
      "ems": null
    },
    {
      "latitude": 51.832241,
      "longitude": 18.649445,
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
      "squawk": "7000",
      "timestamp": 1664553507,
      "ems": null
    },
    {
      "latitude": 51.83424,
      "longitude": 18.651886,
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1664553512,
      "ems": null
    },
    {
      "latitude": 51.836151,
      "longitude": 18.654327,
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1664553518,
      "ems": null
    },
    {
      "latitude": 51.838245,
      "longitude": 18.657074,
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
      "squawk": "7000",
      "timestamp": 1664553524,
      "ems": null
    },
    {
      "latitude": 51.839218,
      "longitude": 18.658794,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1664553527,
      "ems": null
    },
    {
      "latitude": 51.839874,
      "longitude": 18.660431,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664553530,
      "ems": null
    },
    {
      "latitude": 51.840431,
      "longitude": 18.662643,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664553534,
      "ems": null
    },
    {
      "latitude": 51.840683,
      "longitude": 18.664288,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664553536,
      "ems": null
    },
    {
      "latitude": 51.840759,
      "longitude": 18.666,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664553539,
      "ems": null
    },
    {
      "latitude": 51.840683,
      "longitude": 18.668295,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664553542,
      "ems": null
    },
    {
      "latitude": 51.84034,
      "longitude": 18.670502,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664553545,
      "ems": null
    },
    {
      "latitude": 51.839951,
      "longitude": 18.672155,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664553548,
      "ems": null
    },
    {
      "latitude": 51.839035,
      "longitude": 18.674393,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664553552,
      "ems": null
    },
    {
      "latitude": 51.838291,
      "longitude": 18.675766,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664553554,
      "ems": null
    },
    {
      "latitude": 51.837498,
      "longitude": 18.676834,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664553558,
      "ems": null
    },
    {
      "latitude": 51.836884,
      "longitude": 18.6775,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664553558,
      "ems": null
    },
    {
      "latitude": 51.835419,
      "longitude": 18.678762,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664553562,
      "ems": null
    },
    {
      "latitude": 51.833771,
      "longitude": 18.679653,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664553566,
      "ems": null
    },
    {
      "latitude": 51.833359,
      "longitude": 18.679728,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1664553570,
      "ems": null
    },
    {
      "latitude": 51.831482,
      "longitude": 18.679876,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1664553572,
      "ems": null
    },
    {
      "latitude": 51.829651,
      "longitude": 18.67943,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1664553576,
      "ems": null
    },
    {
      "latitude": 51.828415,
      "longitude": 18.678762,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1664553579,
      "ems": null
    },
    {
      "latitude": 51.827305,
      "longitude": 18.677902,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1664553582,
      "ems": null
    },
    {
      "latitude": 51.826141,
      "longitude": 18.676529,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1664553585,
      "ems": null
    },
    {
      "latitude": 51.825302,
      "longitude": 18.675274,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664553587,
      "ems": null
    },
    {
      "latitude": 51.824432,
      "longitude": 18.673492,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664553590,
      "ems": null
    },
    {
      "latitude": 51.823746,
      "longitude": 18.671413,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664553594,
      "ems": null
    },
    {
      "latitude": 51.823208,
      "longitude": 18.669128,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664553597,
      "ems": null
    },
    {
      "latitude": 51.822651,
      "longitude": 18.66684,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664553600,
      "ems": null
    },
    {
      "latitude": 51.822098,
      "longitude": 18.664732,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1664553603,
      "ems": null
    },
    {
      "latitude": 51.821438,
      "longitude": 18.662567,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664553606,
      "ems": null
    },
    {
      "latitude": 51.821045,
      "longitude": 18.661095,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664553608,
      "ems": null
    },
    {
      "latitude": 51.82037,
      "longitude": 18.658676,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664553612,
      "ems": null
    },
    {
      "latitude": 51.819763,
      "longitude": 18.65654,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664553615,
      "ems": null
    },
    {
      "latitude": 51.818985,
      "longitude": 18.654043,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664553618,
      "ems": null
    },
    {
      "latitude": 51.818344,
      "longitude": 18.651964,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1664553621,
      "ems": null
    },
    {
      "latitude": 51.817337,
      "longitude": 18.647882,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664553627,
      "ems": null
    },
    {
      "latitude": 51.816273,
      "longitude": 18.643417,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664553633,
      "ems": null
    },
    {
      "latitude": 51.815186,
      "longitude": 18.638899,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664553639,
      "ems": null
    },
    {
      "latitude": 51.813995,
      "longitude": 18.633926,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664553647,
      "ems": null
    },
    {
      "latitude": 51.813293,
      "longitude": 18.630981,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1664553650,
      "ems": null
    },
    {
      "latitude": 51.812408,
      "longitude": 18.627396,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664553655,
      "ems": null
    },
    {
      "latitude": 51.811802,
      "longitude": 18.620224,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664553665,
      "ems": null
    },
    {
      "latitude": 51.812347,
      "longitude": 18.616259,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664553670,
      "ems": null
    },
    {
      "latitude": 51.813339,
      "longitude": 18.613052,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1664553675,
      "ems": null
    },
    {
      "latitude": 51.814178,
      "longitude": 18.611221,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1664553678,
      "ems": null
    },
    {
      "latitude": 51.814827,
      "longitude": 18.610077,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1664553681,
      "ems": null
    },
    {
      "latitude": 51.816376,
      "longitude": 18.60787,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1664553684,
      "ems": null
    },
    {
      "latitude": 51.817341,
      "longitude": 18.606873,
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
      "timestamp": 1664553687,
      "ems": null
    },
    {
      "latitude": 51.818848,
      "longitude": 18.60594,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1664553690,
      "ems": null
    },
    {
      "latitude": 51.820084,
      "longitude": 18.605865,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1664553693,
      "ems": null
    },
    {
      "latitude": 51.821346,
      "longitude": 18.606415,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1664553696,
      "ems": null
    },
    {
      "latitude": 51.82251,
      "longitude": 18.607796,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1664553699,
      "ems": null
    },
    {
      "latitude": 51.823254,
      "longitude": 18.609619,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664553702,
      "ems": null
    },
    {
      "latitude": 51.823532,
      "longitude": 18.611298,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664553705,
      "ems": null
    },
    {
      "latitude": 51.823441,
      "longitude": 18.613586,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664553708,
      "ems": null
    },
    {
      "latitude": 51.822929,
      "longitude": 18.615723,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553711,
      "ems": null
    },
    {
      "latitude": 51.822464,
      "longitude": 18.617249,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664553713,
      "ems": null
    },
    {
      "latitude": 51.821903,
      "longitude": 18.619461,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664553717,
      "ems": null
    },
    {
      "latitude": 51.821487,
      "longitude": 18.621368,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664553720,
      "ems": null
    },
    {
      "latitude": 51.821301,
      "longitude": 18.622208,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664553721,
      "ems": null
    },
    {
      "latitude": 51.820835,
      "longitude": 18.624725,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664553726,
      "ems": null
    },
    {
      "latitude": 51.820274,
      "longitude": 18.627472,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664553731,
      "ems": null
    },
    {
      "latitude": 51.819763,
      "longitude": 18.630438,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664553735,
      "ems": null
    },
    {
      "latitude": 51.819489,
      "longitude": 18.631996,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664553738,
      "ems": null
    },
    {
      "latitude": 51.819111,
      "longitude": 18.633881,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664553741,
      "ems": null
    },
    {
      "latitude": 51.818802,
      "longitude": 18.635857,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664553744,
      "ems": null
    },
    {
      "latitude": 51.818459,
      "longitude": 18.637924,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664553747,
      "ems": null
    },
    {
      "latitude": 51.817806,
      "longitude": 18.641357,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664553753,
      "ems": null
    },
    {
      "latitude": 51.817017,
      "longitude": 18.645061,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664553759,
      "ems": null
    },
    {
      "latitude": 51.816559,
      "longitude": 18.646843,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664553762,
      "ems": null
    },
    {
      "latitude": 51.816238,
      "longitude": 18.648104,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664553765,
      "ems": null
    },
    {
      "latitude": 51.815479,
      "longitude": 18.650665,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664553768,
      "ems": null
    },
    {
      "latitude": 51.814911,
      "longitude": 18.652557,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664553771,
      "ems": null
    },
    {
      "latitude": 51.814316,
      "longitude": 18.654488,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664553774,
      "ems": null
    },
    {
      "latitude": 51.813766,
      "longitude": 18.656195,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664553777,
      "ems": null
    },
    {
      "latitude": 51.813217,
      "longitude": 18.658125,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664553780,
      "ems": null
    },
    {
      "latitude": 51.812595,
      "longitude": 18.660049,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664553783,
      "ems": null
    },
    {
      "latitude": 51.812027,
      "longitude": 18.661911,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664553786,
      "ems": null
    },
    {
      "latitude": 51.811523,
      "longitude": 18.663471,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664553789,
      "ems": null
    },
    {
      "latitude": 51.81036,
      "longitude": 18.667526,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553796,
      "ems": null
    },
    {
      "latitude": 51.809235,
      "longitude": 18.671488,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664553802,
      "ems": null
    },
    {
      "latitude": 51.808228,
      "longitude": 18.674976,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664553807,
      "ems": null
    },
    {
      "latitude": 51.807194,
      "longitude": 18.678665,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553813,
      "ems": null
    },
    {
      "latitude": 51.806171,
      "longitude": 18.682556,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553819,
      "ems": null
    },
    {
      "latitude": 51.805344,
      "longitude": 18.685516,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553825,
      "ems": null
    },
    {
      "latitude": 51.804108,
      "longitude": 18.690268,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664553831,
      "ems": null
    },
    {
      "latitude": 51.80365,
      "longitude": 18.692272,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664553834,
      "ems": null
    },
    {
      "latitude": 51.803329,
      "longitude": 18.693848,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664553837,
      "ems": null
    },
    {
      "latitude": 51.80246,
      "longitude": 18.697321,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553842,
      "ems": null
    },
    {
      "latitude": 51.801224,
      "longitude": 18.702145,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664553850,
      "ems": null
    },
    {
      "latitude": 51.800446,
      "longitude": 18.70575,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664553856,
      "ems": null
    },
    {
      "latitude": 51.799118,
      "longitude": 18.710831,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664553862,
      "ems": null
    },
    {
      "latitude": 51.798523,
      "longitude": 18.712835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664553865,
      "ems": null
    },
    {
      "latitude": 51.797379,
      "longitude": 18.71714,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553871,
      "ems": null
    },
    {
      "latitude": 51.796417,
      "longitude": 18.720703,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553876,
      "ems": null
    },
    {
      "latitude": 51.795502,
      "longitude": 18.724117,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553881,
      "ems": null
    },
    {
      "latitude": 51.794487,
      "longitude": 18.727875,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553888,
      "ems": null
    },
    {
      "latitude": 51.792763,
      "longitude": 18.734131,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553896,
      "ems": null
    },
    {
      "latitude": 51.792019,
      "longitude": 18.736954,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553900,
      "ems": null
    },
    {
      "latitude": 51.790512,
      "longitude": 18.742899,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664553909,
      "ems": null
    },
    {
      "latitude": 51.789925,
      "longitude": 18.74527,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664553912,
      "ems": null
    },
    {
      "latitude": 51.788059,
      "longitude": 18.75267,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664553923,
      "ems": null
    },
    {
      "latitude": 51.786713,
      "longitude": 18.757671,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553930,
      "ems": null
    },
    {
      "latitude": 51.785267,
      "longitude": 18.763275,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664553938,
      "ems": null
    },
    {
      "latitude": 51.784424,
      "longitude": 18.766653,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664553943,
      "ems": null
    },
    {
      "latitude": 51.78336,
      "longitude": 18.771439,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664553950,
      "ems": null
    },
    {
      "latitude": 51.782089,
      "longitude": 18.776525,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664553958,
      "ems": null
    },
    {
      "latitude": 51.780991,
      "longitude": 18.780756,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664553964,
      "ems": null
    },
    {
      "latitude": 51.780148,
      "longitude": 18.784409,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664553969,
      "ems": null
    },
    {
      "latitude": 51.779205,
      "longitude": 18.788996,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664553976,
      "ems": null
    },
    {
      "latitude": 51.778519,
      "longitude": 18.792191,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664553981,
      "ems": null
    },
    {
      "latitude": 51.778008,
      "longitude": 18.794861,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664553985,
      "ems": null
    },
    {
      "latitude": 51.777821,
      "longitude": 18.795776,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664553988,
      "ems": null
    },
    {
      "latitude": 51.777374,
      "longitude": 18.798349,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664553990,
      "ems": null
    },
    {
      "latitude": 51.776608,
      "longitude": 18.802567,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664553996,
      "ems": null
    },
    {
      "latitude": 51.775726,
      "longitude": 18.807331,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664554003,
      "ems": null
    },
    {
      "latitude": 51.774902,
      "longitude": 18.811117,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664554009,
      "ems": null
    },
    {
      "latitude": 51.774235,
      "longitude": 18.813629,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664554012,
      "ems": null
    },
    {
      "latitude": 51.773861,
      "longitude": 18.814926,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554014,
      "ems": null
    },
    {
      "latitude": 51.773212,
      "longitude": 18.817215,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554018,
      "ems": null
    },
    {
      "latitude": 51.772652,
      "longitude": 18.819199,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554021,
      "ems": null
    },
    {
      "latitude": 51.772156,
      "longitude": 18.820917,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554024,
      "ems": null
    },
    {
      "latitude": 51.771767,
      "longitude": 18.822327,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664554026,
      "ems": null
    },
    {
      "latitude": 51.771347,
      "longitude": 18.823776,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664554028,
      "ems": null
    },
    {
      "latitude": 51.770092,
      "longitude": 18.828735,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664554036,
      "ems": null
    },
    {
      "latitude": 51.769089,
      "longitude": 18.832497,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664554042,
      "ems": null
    },
    {
      "latitude": 51.767719,
      "longitude": 18.837433,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554051,
      "ems": null
    },
    {
      "latitude": 51.766617,
      "longitude": 18.84133,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554057,
      "ems": null
    },
    {
      "latitude": 51.765564,
      "longitude": 18.844967,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664554063,
      "ems": null
    },
    {
      "latitude": 51.764553,
      "longitude": 18.848343,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664554069,
      "ems": null
    },
    {
      "latitude": 51.762783,
      "longitude": 18.853912,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664554078,
      "ems": null
    },
    {
      "latitude": 51.761536,
      "longitude": 18.858032,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664554085,
      "ems": null
    },
    {
      "latitude": 51.76041,
      "longitude": 18.862152,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664554092,
      "ems": null
    },
    {
      "latitude": 51.759338,
      "longitude": 18.866123,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664554098,
      "ems": null
    },
    {
      "latitude": 51.758377,
      "longitude": 18.869537,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554104,
      "ems": null
    },
    {
      "latitude": 51.756966,
      "longitude": 18.874207,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664554111,
      "ems": null
    },
    {
      "latitude": 51.756317,
      "longitude": 18.876368,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664554115,
      "ems": null
    },
    {
      "latitude": 51.754761,
      "longitude": 18.882233,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664554125,
      "ems": null
    },
    {
      "latitude": 51.753845,
      "longitude": 18.88587,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664554130,
      "ems": null
    },
    {
      "latitude": 51.75293,
      "longitude": 18.889507,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664554136,
      "ems": null
    },
    {
      "latitude": 51.751877,
      "longitude": 18.893589,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664554143,
      "ems": null
    },
    {
      "latitude": 51.750725,
      "longitude": 18.897705,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554149,
      "ems": null
    },
    {
      "latitude": 51.749702,
      "longitude": 18.90152,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554155,
      "ems": null
    },
    {
      "latitude": 51.748585,
      "longitude": 18.90564,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554161,
      "ems": null
    },
    {
      "latitude": 51.747608,
      "longitude": 18.908844,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664554167,
      "ems": null
    },
    {
      "latitude": 51.745651,
      "longitude": 18.915482,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664554177,
      "ems": null
    },
    {
      "latitude": 51.744022,
      "longitude": 18.920364,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664554185,
      "ems": null
    },
    {
      "latitude": 51.743324,
      "longitude": 18.922348,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664554188,
      "ems": null
    },
    {
      "latitude": 51.74231,
      "longitude": 18.925287,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664554193,
      "ems": null
    },
    {
      "latitude": 51.740936,
      "longitude": 18.92922,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664554199,
      "ems": null
    },
    {
      "latitude": 51.739368,
      "longitude": 18.933182,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664554206,
      "ems": null
    },
    {
      "latitude": 51.738903,
      "longitude": 18.934402,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664554208,
      "ems": null
    },
    {
      "latitude": 51.738052,
      "longitude": 18.93642,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664554211,
      "ems": null
    },
    {
      "latitude": 51.736481,
      "longitude": 18.940277,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664554218,
      "ems": null
    },
    {
      "latitude": 51.735176,
      "longitude": 18.943863,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664554224,
      "ems": null
    },
    {
      "latitude": 51.733967,
      "longitude": 18.947067,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664554230,
      "ems": null
    },
    {
      "latitude": 51.732662,
      "longitude": 18.950653,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664554236,
      "ems": null
    },
    {
      "latitude": 51.73201,
      "longitude": 18.952753,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664554239,
      "ems": null
    },
    {
      "latitude": 51.731548,
      "longitude": 18.954391,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554242,
      "ems": null
    },
    {
      "latitude": 51.731049,
      "longitude": 18.956093,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554245,
      "ems": null
    },
    {
      "latitude": 51.730522,
      "longitude": 18.957977,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554248,
      "ems": null
    },
    {
      "latitude": 51.730011,
      "longitude": 18.959808,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664554251,
      "ems": null
    },
    {
      "latitude": 51.729538,
      "longitude": 18.961586,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664554254,
      "ems": null
    },
    {
      "latitude": 51.729218,
      "longitude": 18.96286,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664554257,
      "ems": null
    },
    {
      "latitude": 51.728577,
      "longitude": 18.965446,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664554260,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 18.967361,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664554263,
      "ems": null
    },
    {
      "latitude": 51.727753,
      "longitude": 18.969084,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664554266,
      "ems": null
    },
    {
      "latitude": 51.727478,
      "longitude": 18.970791,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664554268,
      "ems": null
    },
    {
      "latitude": 51.727112,
      "longitude": 18.973314,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664554272,
      "ems": null
    },
    {
      "latitude": 51.726883,
      "longitude": 18.975393,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664554275,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 18.97644,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664554277,
      "ems": null
    },
    {
      "latitude": 51.726612,
      "longitude": 18.9785,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664554279,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 18.981705,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664554284,
      "ems": null
    },
    {
      "latitude": 51.726196,
      "longitude": 18.984003,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664554287,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 18.986053,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664554290,
      "ems": null
    },
    {
      "latitude": 51.726521,
      "longitude": 18.988266,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664554293,
      "ems": null
    },
    {
      "latitude": 51.726704,
      "longitude": 18.988953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664554294,
      "ems": null
    },
    {
      "latitude": 51.727661,
      "longitude": 18.992168,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664554299,
      "ems": null
    },
    {
      "latitude": 51.728241,
      "longitude": 18.99353,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1664554302,
      "ems": null
    },
    {
      "latitude": 51.728668,
      "longitude": 18.994396,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1664554303,
      "ems": null
    },
    {
      "latitude": 51.729584,
      "longitude": 18.996401,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1664554307,
      "ems": null
    },
    {
      "latitude": 51.730381,
      "longitude": 18.99826,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1664554310,
      "ems": null
    },
    {
      "latitude": 51.730499,
      "longitude": 18.998554,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1664554310,
      "ems": null
    },
    {
      "latitude": 51.731407,
      "longitude": 19.000854,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664554314,
      "ems": null
    },
    {
      "latitude": 51.732105,
      "longitude": 19.002914,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664554317,
      "ems": null
    },
    {
      "latitude": 51.732468,
      "longitude": 19.00412,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664554320,
      "ems": null
    },
    {
      "latitude": 51.733501,
      "longitude": 19.008255,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664554326,
      "ems": null
    },
    {
      "latitude": 51.733978,
      "longitude": 19.010578,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664554329,
      "ems": null
    },
    {
      "latitude": 51.734253,
      "longitude": 19.011692,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664554331,
      "ems": null
    },
    {
      "latitude": 51.734898,
      "longitude": 19.013062,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664554333,
      "ems": null
    },
    {
      "latitude": 51.736633,
      "longitude": 19.012657,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1664554338,
      "ems": null
    },
    {
      "latitude": 51.736809,
      "longitude": 19.009705,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664554343,
      "ems": null
    },
    {
      "latitude": 51.735626,
      "longitude": 19.008352,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664554347,
      "ems": null
    },
    {
      "latitude": 51.734802,
      "longitude": 19.008797,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664554349,
      "ems": null
    },
    {
      "latitude": 51.73407,
      "longitude": 19.010653,
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
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664554353,
      "ems": null
    },
    {
      "latitude": 51.734802,
      "longitude": 19.014513,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664554358,
      "ems": null
    },
    {
      "latitude": 51.735271,
      "longitude": 19.017792,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664554362,
      "ems": null
    },
    {
      "latitude": 51.735443,
      "longitude": 19.019932,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664554365,
      "ems": null
    },
    {
      "latitude": 51.735641,
      "longitude": 19.021912,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664554368,
      "ems": null
    },
    {
      "latitude": 51.735828,
      "longitude": 19.024506,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664554371,
      "ems": null
    },
    {
      "latitude": 51.735992,
      "longitude": 19.027058,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664554374,
      "ems": null
    },
    {
      "latitude": 51.736202,
      "longitude": 19.029388,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664554377,
      "ems": null
    },
    {
      "latitude": 51.736343,
      "longitude": 19.030838,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664554379,
      "ems": null
    },
    {
      "latitude": 51.736542,
      "longitude": 19.033367,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664554383,
      "ems": null
    },
    {
      "latitude": 51.736725,
      "longitude": 19.034927,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664554386,
      "ems": null
    },
    {
      "latitude": 51.737228,
      "longitude": 19.0399,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664554392,
      "ems": null
    },
    {
      "latitude": 51.737686,
      "longitude": 19.043835,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664554398,
      "ems": null
    },
    {
      "latitude": 51.73811,
      "longitude": 19.047546,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664554403,
      "ems": null
    },
    {
      "latitude": 51.738647,
      "longitude": 19.052446,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664554410,
      "ems": null
    },
    {
      "latitude": 51.739151,
      "longitude": 19.056826,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664554416,
      "ems": null
    },
    {
      "latitude": 51.739647,
      "longitude": 19.060745,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664554422,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 19.063284,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664554425,
      "ems": null
    },
    {
      "latitude": 51.740387,
      "longitude": 19.065065,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664554428,
      "ems": null
    },
    {
      "latitude": 51.740753,
      "longitude": 19.066996,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664554430,
      "ems": null
    },
    {
      "latitude": 51.741074,
      "longitude": 19.068703,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664554433,
      "ems": null
    },
    {
      "latitude": 51.741852,
      "longitude": 19.072712,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664554439,
      "ems": null
    },
    {
      "latitude": 51.742672,
      "longitude": 19.078064,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664554447,
      "ems": null
    },
    {
      "latitude": 51.743416,
      "longitude": 19.083862,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664554455,
      "ems": null
    },
    {
      "latitude": 51.744114,
      "longitude": 19.088974,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664554463,
      "ems": null
    },
    {
      "latitude": 51.744907,
      "longitude": 19.094543,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664554471,
      "ems": null
    },
    {
      "latitude": 51.745239,
      "longitude": 19.099657,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664554478,
      "ems": null
    },
    {
      "latitude": 51.745419,
      "longitude": 19.102631,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664554482,
      "ems": null
    },
    {
      "latitude": 51.745884,
      "longitude": 19.107132,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664554488,
      "ems": null
    },
    {
      "latitude": 51.746704,
      "longitude": 19.111832,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664554494,
      "ems": null
    },
    {
      "latitude": 51.747189,
      "longitude": 19.113846,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664554497,
      "ems": null
    },
    {
      "latitude": 51.747345,
      "longitude": 19.114504,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1664554500,
      "ems": null
    },
    {
      "latitude": 51.748444,
      "longitude": 19.118118,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664554504,
      "ems": null
    },
    {
      "latitude": 51.749561,
      "longitude": 19.120941,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664554508,
      "ems": null
    },
    {
      "latitude": 51.750401,
      "longitude": 19.123077,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1664554512,
      "ems": null
    },
    {
      "latitude": 51.751007,
      "longitude": 19.124451,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1664554514,
      "ems": null
    },
    {
      "latitude": 51.751842,
      "longitude": 19.126434,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554517,
      "ems": null
    },
    {
      "latitude": 51.753616,
      "longitude": 19.130463,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554524,
      "ems": null
    },
    {
      "latitude": 51.755035,
      "longitude": 19.133879,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554530,
      "ems": null
    },
    {
      "latitude": 51.757507,
      "longitude": 19.139816,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1664554540,
      "ems": null
    },
    {
      "latitude": 51.759991,
      "longitude": 19.145889,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554550,
      "ems": null
    },
    {
      "latitude": 51.762131,
      "longitude": 19.150877,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554558,
      "ems": null
    },
    {
      "latitude": 51.763962,
      "longitude": 19.155554,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664554566,
      "ems": null
    },
    {
      "latitude": 51.765015,
      "longitude": 19.158449,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664554570,
      "ems": null
    },
    {
      "latitude": 51.765808,
      "longitude": 19.160843,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664554574,
      "ems": null
    },
    {
      "latitude": 51.766571,
      "longitude": 19.163052,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664554578,
      "ems": null
    },
    {
      "latitude": 51.767441,
      "longitude": 19.165575,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664554582,
      "ems": null
    },
    {
      "latitude": 51.768402,
      "longitude": 19.168322,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664554586,
      "ems": null
    },
    {
      "latitude": 51.769302,
      "longitude": 19.171066,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664554590,
      "ems": null
    },
    {
      "latitude": 51.77121,
      "longitude": 19.176788,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664554599,
      "ems": null
    },
    {
      "latitude": 51.772934,
      "longitude": 19.18198,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664554607,
      "ems": null
    },
    {
      "latitude": 51.774765,
      "longitude": 19.187029,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664554615,
      "ems": null
    },
    {
      "latitude": 51.777191,
      "longitude": 19.193413,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664554625,
      "ems": null
    },
    {
      "latitude": 51.77916,
      "longitude": 19.19846,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664554633,
      "ems": null
    },
    {
      "latitude": 51.781635,
      "longitude": 19.204483,
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1664554642,
      "ems": null
    },
    {
      "latitude": 51.783501,
      "longitude": 19.208832,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554649,
      "ems": null
    },
    {
      "latitude": 51.7855,
      "longitude": 19.213562,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554657,
      "ems": null
    },
    {
      "latitude": 51.787457,
      "longitude": 19.218063,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1664554665,
      "ems": null
    },
    {
      "latitude": 51.789368,
      "longitude": 19.222734,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664554673,
      "ems": null
    },
    {
      "latitude": 51.791134,
      "longitude": 19.227448,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664554681,
      "ems": null
    },
    {
      "latitude": 51.792763,
      "longitude": 19.231491,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1664554689,
      "ems": null
    },
    {
      "latitude": 51.794765,
      "longitude": 19.237061,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664554697,
      "ems": null
    },
    {
      "latitude": 51.796646,
      "longitude": 19.242405,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664554705,
      "ems": null
    },
    {
      "latitude": 51.79821,
      "longitude": 19.24675,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664554713,
      "ems": null
    },
    {
      "latitude": 51.800812,
      "longitude": 19.253614,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1664554723,
      "ems": null
    },
    {
      "latitude": 51.802864,
      "longitude": 19.258652,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554731,
      "ems": null
    },
    {
      "latitude": 51.805161,
      "longitude": 19.26408,
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1664554741,
      "ems": null
    },
    {
      "latitude": 51.80724,
      "longitude": 19.269867,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664554750,
      "ems": null
    },
    {
      "latitude": 51.807705,
      "longitude": 19.272461,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664554754,
      "ems": null
    },
    {
      "latitude": 51.80777,
      "longitude": 19.274994,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664554758,
      "ems": null
    },
    {
      "latitude": 51.807358,
      "longitude": 19.277666,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664554762,
      "ems": null
    },
    {
      "latitude": 51.806496,
      "longitude": 19.279861,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664554766,
      "ems": null
    },
    {
      "latitude": 51.804977,
      "longitude": 19.28212,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664554771,
      "ems": null
    },
    {
      "latitude": 51.803146,
      "longitude": 19.284346,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664554776,
      "ems": null
    },
    {
      "latitude": 51.801327,
      "longitude": 19.286499,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664554781,
      "ems": null
    },
    {
      "latitude": 51.800171,
      "longitude": 19.287909,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664554785,
      "ems": null
    },
    {
      "latitude": 51.798676,
      "longitude": 19.289627,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664554789,
      "ems": null
    },
    {
      "latitude": 51.797287,
      "longitude": 19.291325,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664554793,
      "ems": null
    },
    {
      "latitude": 51.794765,
      "longitude": 19.294586,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664554801,
      "ems": null
    },
    {
      "latitude": 51.791878,
      "longitude": 19.298553,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664554810,
      "ems": null
    },
    {
      "latitude": 51.790512,
      "longitude": 19.300529,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664554814,
      "ems": null
    },
    {
      "latitude": 51.789185,
      "longitude": 19.302607,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664554819,
      "ems": null
    },
    {
      "latitude": 51.78772,
      "longitude": 19.304983,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664554824,
      "ems": null
    },
    {
      "latitude": 51.784286,
      "longitude": 19.309881,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664554834,
      "ems": null
    },
    {
      "latitude": 51.782043,
      "longitude": 19.313593,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664554842,
      "ems": null
    },
    {
      "latitude": 51.780579,
      "longitude": 19.315598,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664554846,
      "ems": null
    },
    {
      "latitude": 51.779388,
      "longitude": 19.317009,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664554850,
      "ems": null
    },
    {
      "latitude": 51.777958,
      "longitude": 19.318542,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664554854,
      "ems": null
    },
    {
      "latitude": 51.77647,
      "longitude": 19.320068,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1664554859,
      "ems": null
    },
    {
      "latitude": 51.774536,
      "longitude": 19.322205,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664554864,
      "ems": null
    },
    {
      "latitude": 51.773163,
      "longitude": 19.323689,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664554868,
      "ems": null
    },
    {
      "latitude": 51.771744,
      "longitude": 19.3251,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664554872,
      "ems": null
    },
    {
      "latitude": 51.770184,
      "longitude": 19.326706,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664554876,
      "ems": null
    },
    {
      "latitude": 51.766739,
      "longitude": 19.330139,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664554886,
      "ems": null
    },
    {
      "latitude": 51.76432,
      "longitude": 19.332428,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664554893,
      "ems": null
    },
    {
      "latitude": 51.761108,
      "longitude": 19.335861,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664554902,
      "ems": null
    },
    {
      "latitude": 51.759571,
      "longitude": 19.337692,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664554907,
      "ems": null
    },
    {
      "latitude": 51.758423,
      "longitude": 19.33913,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664554912,
      "ems": null
    },
    {
      "latitude": 51.75618,
      "longitude": 19.341579,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664554917,
      "ems": null
    },
    {
      "latitude": 51.753616,
      "longitude": 19.343954,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664554925,
      "ems": null
    },
    {
      "latitude": 51.752243,
      "longitude": 19.344919,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664554929,
      "ems": null
    },
    {
      "latitude": 51.750916,
      "longitude": 19.345587,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664554933,
      "ems": null
    },
    {
      "latitude": 51.749954,
      "longitude": 19.345736,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664554937,
      "ems": null
    },
    {
      "latitude": 51.748398,
      "longitude": 19.345245,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664554941,
      "ems": null
    },
    {
      "latitude": 51.747189,
      "longitude": 19.344025,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664554945,
      "ems": null
    },
    {
      "latitude": 51.746117,
      "longitude": 19.342346,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664554949,
      "ems": null
    },
    {
      "latitude": 51.744919,
      "longitude": 19.340168,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664554953,
      "ems": null
    },
    {
      "latitude": 51.744114,
      "longitude": 19.338531,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664554957,
      "ems": null
    },
    {
      "latitude": 51.743092,
      "longitude": 19.336548,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664554961,
      "ems": null
    },
    {
      "latitude": 51.742115,
      "longitude": 19.334564,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1664554965,
      "ems": null
    },
    {
      "latitude": 51.741322,
      "longitude": 19.333038,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664554969,
      "ems": null
    },
    {
      "latitude": 51.740299,
      "longitude": 19.33136,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1664554973,
      "ems": null
    },
    {
      "latitude": 51.738007,
      "longitude": 19.327698,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1664554982,
      "ems": null
    },
    {
      "latitude": 51.736816,
      "longitude": 19.326065,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1664554986,
      "ems": null
    },
    {
      "latitude": 51.735458,
      "longitude": 19.325256,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1664554990,
      "ems": null
    },
    {
      "latitude": 51.734154,
      "longitude": 19.32518,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664554994,
      "ems": null
    },
    {
      "latitude": 51.732697,
      "longitude": 19.325693,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664554998,
      "ems": null
    },
    {
      "latitude": 51.731316,
      "longitude": 19.326324,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664555002,
      "ems": null
    },
    {
      "latitude": 51.729916,
      "longitude": 19.327011,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664555006,
      "ems": null
    },
    {
      "latitude": 51.728439,
      "longitude": 19.327772,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664555010,
      "ems": null
    },
    {
      "latitude": 51.727066,
      "longitude": 19.32844,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664555014,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.329107,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664555018,
      "ems": null
    },
    {
      "latitude": 51.723999,
      "longitude": 19.329926,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664555022,
      "ems": null
    },
    {
      "latitude": 51.722626,
      "longitude": 19.330667,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664555026,
      "ems": null
    },
    {
      "latitude": 51.719444,
      "longitude": 19.332581,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664555035,
      "ems": null
    },
    {
      "latitude": 51.716675,
      "longitude": 19.33423,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664555043,
      "ems": null
    },
    {
      "latitude": 51.715717,
      "longitude": 19.334869,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664555047,
      "ems": null
    },
    {
      "latitude": 51.713791,
      "longitude": 19.336161,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664555052,
      "ems": null
    },
    {
      "latitude": 51.712788,
      "longitude": 19.336929,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664555056,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 19.338684,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664555060,
      "ems": null
    },
    {
      "latitude": 51.71069,
      "longitude": 19.34082,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664555064,
      "ems": null
    },
    {
      "latitude": 51.710457,
      "longitude": 19.343033,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664555068,
      "ems": null
    },
    {
      "latitude": 51.71077,
      "longitude": 19.346033,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664555072,
      "ems": null
    },
    {
      "latitude": 51.711296,
      "longitude": 19.348907,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664555078,
      "ems": null
    },
    {
      "latitude": 51.711868,
      "longitude": 19.351749,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664555083,
      "ems": null
    },
    {
      "latitude": 51.712326,
      "longitude": 19.353827,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664555087,
      "ems": null
    },
    {
      "latitude": 51.712509,
      "longitude": 19.354792,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664555091,
      "ems": null
    },
    {
      "latitude": 51.713196,
      "longitude": 19.357613,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664555095,
      "ems": null
    },
    {
      "latitude": 51.713974,
      "longitude": 19.361845,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664555104,
      "ems": null
    },
    {
      "latitude": 51.714478,
      "longitude": 19.363626,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664555108,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 19.368229,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664555118,
      "ems": null
    },
    {
      "latitude": 51.716446,
      "longitude": 19.373201,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664555128,
      "ems": null
    },
    {
      "latitude": 51.723446,
      "longitude": 19.406281,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 11.1,
        "kts": 6,
        "mph": 6.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664555247,
      "ems": null
    },
    {
      "latitude": 51.715858,
      "longitude": 19.370575,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 11.1,
        "kts": 6,
        "mph": 6.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664555253,
      "ems": null
    }
  ]
};