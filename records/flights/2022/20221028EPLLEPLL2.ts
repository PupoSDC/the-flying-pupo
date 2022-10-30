import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20221028EPLLEPLL2",
    callsign: "BNI8MX",
    name: "Sunset flying!",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 9, 28, 14, 35).getTime(),
    arrival: new Date(2022, 9, 28, 16, 30).getTime(),
    singleEnginePistonTime: 115,
    multiEnginePistonTime: 0,
    picTime: 115,
    nightTime: 40,
    dualTime: 0,
    landings: {
      day: 0,
      night: 4,
    },
  },
  aircraft: {
    model: {
      code: "P208",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "3D3720",
      registration: "SP-CRM",
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
      "latitude": 51.72126,
      "longitude": 19.393997,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 256,
      "squawk": "0",
      "timestamp": 1666968246,
      "ems": null
    },
    {
      "latitude": 51.720978,
      "longitude": 19.391708,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666968252,
      "ems": null
    },
    {
      "latitude": 51.720795,
      "longitude": 19.389904,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666968256,
      "ems": null
    },
    {
      "latitude": 51.72028,
      "longitude": 19.386673,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666968264,
      "ems": null
    },
    {
      "latitude": 51.720016,
      "longitude": 19.38545,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666968267,
      "ems": null
    },
    {
      "latitude": 51.719788,
      "longitude": 19.384336,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666968270,
      "ems": null
    },
    {
      "latitude": 51.71965,
      "longitude": 19.383743,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666968273,
      "ems": null
    },
    {
      "latitude": 51.719376,
      "longitude": 19.382183,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666968276,
      "ems": null
    },
    {
      "latitude": 51.719147,
      "longitude": 19.380848,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666968279,
      "ems": null
    },
    {
      "latitude": 51.718918,
      "longitude": 19.37966,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666968282,
      "ems": null
    },
    {
      "latitude": 51.718414,
      "longitude": 19.377062,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666968288,
      "ems": null
    },
    {
      "latitude": 51.718002,
      "longitude": 19.374315,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666968294,
      "ems": null
    },
    {
      "latitude": 51.717209,
      "longitude": 19.369812,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666968303,
      "ems": null
    },
    {
      "latitude": 51.716648,
      "longitude": 19.367142,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666968308,
      "ems": null
    },
    {
      "latitude": 51.716232,
      "longitude": 19.365234,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666968312,
      "ems": null
    },
    {
      "latitude": 51.715813,
      "longitude": 19.364166,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1666968315,
      "ems": null
    },
    {
      "latitude": 51.715302,
      "longitude": 19.363098,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1666968318,
      "ems": null
    },
    {
      "latitude": 51.714706,
      "longitude": 19.362141,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666968321,
      "ems": null
    },
    {
      "latitude": 51.714111,
      "longitude": 19.361473,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1666968324,
      "ems": null
    },
    {
      "latitude": 51.713253,
      "longitude": 19.360733,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1666968327,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 19.360123,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1666968330,
      "ems": null
    },
    {
      "latitude": 51.711227,
      "longitude": 19.35984,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1666968333,
      "ems": null
    },
    {
      "latitude": 51.71022,
      "longitude": 19.359692,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1666968336,
      "ems": null
    },
    {
      "latitude": 51.70911,
      "longitude": 19.359818,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1666968339,
      "ems": null
    },
    {
      "latitude": 51.708115,
      "longitude": 19.36021,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1666968342,
      "ems": null
    },
    {
      "latitude": 51.70697,
      "longitude": 19.360806,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1666968345,
      "ems": null
    },
    {
      "latitude": 51.706192,
      "longitude": 19.361324,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1666968348,
      "ems": null
    },
    {
      "latitude": 51.70491,
      "longitude": 19.362513,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1666968351,
      "ems": null
    },
    {
      "latitude": 51.703903,
      "longitude": 19.363626,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "timestamp": 1666968354,
      "ems": null
    },
    {
      "latitude": 51.702915,
      "longitude": 19.365005,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1666968357,
      "ems": null
    },
    {
      "latitude": 51.702301,
      "longitude": 19.366076,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1666968359,
      "ems": null
    },
    {
      "latitude": 51.70134,
      "longitude": 19.368303,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1666968363,
      "ems": null
    },
    {
      "latitude": 51.700729,
      "longitude": 19.370346,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1666968366,
      "ems": null
    },
    {
      "latitude": 51.700241,
      "longitude": 19.372311,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1666968369,
      "ems": null
    },
    {
      "latitude": 51.699738,
      "longitude": 19.374613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1666968372,
      "ems": null
    },
    {
      "latitude": 51.699287,
      "longitude": 19.376755,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1666968375,
      "ems": null
    },
    {
      "latitude": 51.698868,
      "longitude": 19.378695,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1666968378,
      "ems": null
    },
    {
      "latitude": 51.698357,
      "longitude": 19.381104,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1666968381,
      "ems": null
    },
    {
      "latitude": 51.697952,
      "longitude": 19.383148,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1666968384,
      "ems": null
    },
    {
      "latitude": 51.69754,
      "longitude": 19.385302,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1666968387,
      "ems": null
    },
    {
      "latitude": 51.697098,
      "longitude": 19.387512,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1666968390,
      "ems": null
    },
    {
      "latitude": 51.696625,
      "longitude": 19.389681,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1666968394,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.391708,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1666968396,
      "ems": null
    },
    {
      "latitude": 51.695328,
      "longitude": 19.395981,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1666968403,
      "ems": null
    },
    {
      "latitude": 51.695068,
      "longitude": 19.398144,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1666968405,
      "ems": null
    },
    {
      "latitude": 51.694794,
      "longitude": 19.400372,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1666968408,
      "ems": null
    },
    {
      "latitude": 51.694584,
      "longitude": 19.402542,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1666968411,
      "ems": null
    },
    {
      "latitude": 51.694351,
      "longitude": 19.404755,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1666968414,
      "ems": null
    },
    {
      "latitude": 51.694107,
      "longitude": 19.406902,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1666968418,
      "ems": null
    },
    {
      "latitude": 51.693924,
      "longitude": 19.408981,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1666968421,
      "ems": null
    },
    {
      "latitude": 51.693745,
      "longitude": 19.411011,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1666968424,
      "ems": null
    },
    {
      "latitude": 51.693512,
      "longitude": 19.413214,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1666968427,
      "ems": null
    },
    {
      "latitude": 51.693375,
      "longitude": 19.414978,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1666968429,
      "ems": null
    },
    {
      "latitude": 51.693047,
      "longitude": 19.41925,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1666968436,
      "ems": null
    },
    {
      "latitude": 51.692734,
      "longitude": 19.423161,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1666968441,
      "ems": null
    },
    {
      "latitude": 51.692413,
      "longitude": 19.427094,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1666968448,
      "ems": null
    },
    {
      "latitude": 51.692116,
      "longitude": 19.431076,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1666968454,
      "ems": null
    },
    {
      "latitude": 51.691792,
      "longitude": 19.434967,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1666968460,
      "ems": null
    },
    {
      "latitude": 51.691372,
      "longitude": 19.438934,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1666968466,
      "ems": null
    },
    {
      "latitude": 51.691132,
      "longitude": 19.440975,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1666968469,
      "ems": null
    },
    {
      "latitude": 51.690811,
      "longitude": 19.442831,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1666968472,
      "ems": null
    },
    {
      "latitude": 51.690163,
      "longitude": 19.445953,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1666968477,
      "ems": null
    },
    {
      "latitude": 51.689301,
      "longitude": 19.448622,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1666968481,
      "ems": null
    },
    {
      "latitude": 51.688671,
      "longitude": 19.450073,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1666968484,
      "ems": null
    },
    {
      "latitude": 51.687881,
      "longitude": 19.45174,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1666968487,
      "ems": null
    },
    {
      "latitude": 51.687103,
      "longitude": 19.45315,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1666968490,
      "ems": null
    },
    {
      "latitude": 51.686234,
      "longitude": 19.454559,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1666968493,
      "ems": null
    },
    {
      "latitude": 51.685505,
      "longitude": 19.455643,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1666968495,
      "ems": null
    },
    {
      "latitude": 51.684341,
      "longitude": 19.457169,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666968499,
      "ems": null
    },
    {
      "latitude": 51.683411,
      "longitude": 19.458313,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1666968502,
      "ems": null
    },
    {
      "latitude": 51.682526,
      "longitude": 19.459311,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1666968505,
      "ems": null
    },
    {
      "latitude": 51.681549,
      "longitude": 19.460449,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1666968508,
      "ems": null
    },
    {
      "latitude": 51.680664,
      "longitude": 19.461517,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1666968511,
      "ems": null
    },
    {
      "latitude": 51.679829,
      "longitude": 19.462509,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1666968514,
      "ems": null
    },
    {
      "latitude": 51.678955,
      "longitude": 19.463543,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666968517,
      "ems": null
    },
    {
      "latitude": 51.677963,
      "longitude": 19.464798,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666968520,
      "ems": null
    },
    {
      "latitude": 51.677219,
      "longitude": 19.465714,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666968523,
      "ems": null
    },
    {
      "latitude": 51.675499,
      "longitude": 19.46785,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666968529,
      "ems": null
    },
    {
      "latitude": 51.673775,
      "longitude": 19.46991,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1666968535,
      "ems": null
    },
    {
      "latitude": 51.671959,
      "longitude": 19.472046,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666968541,
      "ems": null
    },
    {
      "latitude": 51.670258,
      "longitude": 19.474157,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1666968547,
      "ems": null
    },
    {
      "latitude": 51.668427,
      "longitude": 19.476013,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1666968553,
      "ems": null
    },
    {
      "latitude": 51.667492,
      "longitude": 19.477005,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1666968556,
      "ems": null
    },
    {
      "latitude": 51.66563,
      "longitude": 19.478912,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1666968562,
      "ems": null
    },
    {
      "latitude": 51.66386,
      "longitude": 19.480743,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1666968568,
      "ems": null
    },
    {
      "latitude": 51.662796,
      "longitude": 19.481878,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1666968571,
      "ems": null
    },
    {
      "latitude": 51.661652,
      "longitude": 19.48299,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1666968574,
      "ems": null
    },
    {
      "latitude": 51.659454,
      "longitude": 19.485218,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1666968580,
      "ems": null
    },
    {
      "latitude": 51.656971,
      "longitude": 19.487534,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1666968587,
      "ems": null
    },
    {
      "latitude": 51.655807,
      "longitude": 19.488602,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666968589,
      "ems": null
    },
    {
      "latitude": 51.654781,
      "longitude": 19.489441,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666968592,
      "ems": null
    },
    {
      "latitude": 51.654556,
      "longitude": 19.489672,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666968593,
      "ems": null
    },
    {
      "latitude": 51.652596,
      "longitude": 19.491196,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1666968598,
      "ems": null
    },
    {
      "latitude": 51.650894,
      "longitude": 19.492493,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1666968602,
      "ems": null
    },
    {
      "latitude": 51.649612,
      "longitude": 19.493532,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1666968605,
      "ems": null
    },
    {
      "latitude": 51.648403,
      "longitude": 19.494476,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1666968607,
      "ems": null
    },
    {
      "latitude": 51.647141,
      "longitude": 19.495388,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1666968611,
      "ems": null
    },
    {
      "latitude": 51.643425,
      "longitude": 19.498596,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1666968619,
      "ems": null
    },
    {
      "latitude": 51.642307,
      "longitude": 19.500122,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1666968622,
      "ems": null
    },
    {
      "latitude": 51.641327,
      "longitude": 19.501801,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1666968625,
      "ems": null
    },
    {
      "latitude": 51.640457,
      "longitude": 19.503925,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1666968628,
      "ems": null
    },
    {
      "latitude": 51.639679,
      "longitude": 19.506449,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1666968631,
      "ems": null
    },
    {
      "latitude": 51.639278,
      "longitude": 19.508667,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1666968634,
      "ems": null
    },
    {
      "latitude": 51.63913,
      "longitude": 19.510235,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1666968636,
      "ems": null
    },
    {
      "latitude": 51.638992,
      "longitude": 19.513649,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1666968640,
      "ems": null
    },
    {
      "latitude": 51.63913,
      "longitude": 19.516396,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1666968643,
      "ems": null
    },
    {
      "latitude": 51.639328,
      "longitude": 19.51889,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1666968646,
      "ems": null
    },
    {
      "latitude": 51.639771,
      "longitude": 19.521666,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "timestamp": 1666968649,
      "ems": null
    },
    {
      "latitude": 51.640259,
      "longitude": 19.524078,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1666968652,
      "ems": null
    },
    {
      "latitude": 51.640724,
      "longitude": 19.526367,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1666968655,
      "ems": null
    },
    {
      "latitude": 51.64119,
      "longitude": 19.528503,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666968658,
      "ems": null
    },
    {
      "latitude": 51.641876,
      "longitude": 19.531317,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1666968661,
      "ems": null
    },
    {
      "latitude": 51.642471,
      "longitude": 19.533766,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1666968664,
      "ems": null
    },
    {
      "latitude": 51.643143,
      "longitude": 19.536514,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666968667,
      "ems": null
    },
    {
      "latitude": 51.643707,
      "longitude": 19.538738,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666968670,
      "ems": null
    },
    {
      "latitude": 51.644402,
      "longitude": 19.541473,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666968673,
      "ems": null
    },
    {
      "latitude": 51.6451,
      "longitude": 19.543915,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968677,
      "ems": null
    },
    {
      "latitude": 51.645767,
      "longitude": 19.546385,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666968680,
      "ems": null
    },
    {
      "latitude": 51.646404,
      "longitude": 19.548569,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1666968682,
      "ems": null
    },
    {
      "latitude": 51.647102,
      "longitude": 19.550934,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1666968685,
      "ems": null
    },
    {
      "latitude": 51.647846,
      "longitude": 19.553299,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1666968688,
      "ems": null
    },
    {
      "latitude": 51.648605,
      "longitude": 19.55559,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1666968691,
      "ems": null
    },
    {
      "latitude": 51.649384,
      "longitude": 19.557877,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666968694,
      "ems": null
    },
    {
      "latitude": 51.650314,
      "longitude": 19.560471,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1666968698,
      "ems": null
    },
    {
      "latitude": 51.651077,
      "longitude": 19.562716,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1666968700,
      "ems": null
    },
    {
      "latitude": 51.652313,
      "longitude": 19.567169,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968706,
      "ems": null
    },
    {
      "latitude": 51.653618,
      "longitude": 19.572296,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666968712,
      "ems": null
    },
    {
      "latitude": 51.654736,
      "longitude": 19.576569,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968718,
      "ems": null
    },
    {
      "latitude": 51.655434,
      "longitude": 19.579391,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1666968721,
      "ems": null
    },
    {
      "latitude": 51.656067,
      "longitude": 19.581867,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666968724,
      "ems": null
    },
    {
      "latitude": 51.656525,
      "longitude": 19.583797,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666968727,
      "ems": null
    },
    {
      "latitude": 51.657108,
      "longitude": 19.586258,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1666968731,
      "ems": null
    },
    {
      "latitude": 51.658447,
      "longitude": 19.59137,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968736,
      "ems": null
    },
    {
      "latitude": 51.659672,
      "longitude": 19.596329,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666968743,
      "ems": null
    },
    {
      "latitude": 51.660645,
      "longitude": 19.600946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1666968748,
      "ems": null
    },
    {
      "latitude": 51.661102,
      "longitude": 19.60347,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1666968751,
      "ems": null
    },
    {
      "latitude": 51.661484,
      "longitude": 19.606094,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666968755,
      "ems": null
    },
    {
      "latitude": 51.661743,
      "longitude": 19.608665,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1666968757,
      "ems": null
    },
    {
      "latitude": 51.66209,
      "longitude": 19.611359,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1666968761,
      "ems": null
    },
    {
      "latitude": 51.66251,
      "longitude": 19.613876,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666968763,
      "ems": null
    },
    {
      "latitude": 51.663483,
      "longitude": 19.618464,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666968769,
      "ems": null
    },
    {
      "latitude": 51.66465,
      "longitude": 19.623718,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666968776,
      "ems": null
    },
    {
      "latitude": 51.665314,
      "longitude": 19.626556,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666968779,
      "ems": null
    },
    {
      "latitude": 51.665813,
      "longitude": 19.62883,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1666968782,
      "ems": null
    },
    {
      "latitude": 51.666458,
      "longitude": 19.63138,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666968785,
      "ems": null
    },
    {
      "latitude": 51.667118,
      "longitude": 19.633713,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968788,
      "ems": null
    },
    {
      "latitude": 51.667816,
      "longitude": 19.63623,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968791,
      "ems": null
    },
    {
      "latitude": 51.668381,
      "longitude": 19.638285,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968794,
      "ems": null
    },
    {
      "latitude": 51.669159,
      "longitude": 19.64118,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968797,
      "ems": null
    },
    {
      "latitude": 51.670395,
      "longitude": 19.645855,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968803,
      "ems": null
    },
    {
      "latitude": 51.671726,
      "longitude": 19.650574,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1666968808,
      "ems": null
    },
    {
      "latitude": 51.673187,
      "longitude": 19.655432,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1666968815,
      "ems": null
    },
    {
      "latitude": 51.674469,
      "longitude": 19.65996,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666968821,
      "ems": null
    },
    {
      "latitude": 51.675842,
      "longitude": 19.664488,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1666968827,
      "ems": null
    },
    {
      "latitude": 51.677216,
      "longitude": 19.668867,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1666968833,
      "ems": null
    },
    {
      "latitude": 51.678616,
      "longitude": 19.673309,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1666968838,
      "ems": null
    },
    {
      "latitude": 51.680191,
      "longitude": 19.677776,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1666968845,
      "ems": null
    },
    {
      "latitude": 51.681129,
      "longitude": 19.680176,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1666968848,
      "ems": null
    },
    {
      "latitude": 51.682667,
      "longitude": 19.684448,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1666968854,
      "ems": null
    },
    {
      "latitude": 51.684017,
      "longitude": 19.689102,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666968860,
      "ems": null
    },
    {
      "latitude": 51.685364,
      "longitude": 19.693958,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666968866,
      "ems": null
    },
    {
      "latitude": 51.68597,
      "longitude": 19.696121,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968869,
      "ems": null
    },
    {
      "latitude": 51.686623,
      "longitude": 19.698563,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968872,
      "ems": null
    },
    {
      "latitude": 51.687149,
      "longitude": 19.700491,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968875,
      "ems": null
    },
    {
      "latitude": 51.687744,
      "longitude": 19.702791,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968878,
      "ems": null
    },
    {
      "latitude": 51.688385,
      "longitude": 19.705242,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968881,
      "ems": null
    },
    {
      "latitude": 51.689667,
      "longitude": 19.709919,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666968887,
      "ems": null
    },
    {
      "latitude": 51.690857,
      "longitude": 19.714594,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666968893,
      "ems": null
    },
    {
      "latitude": 51.692165,
      "longitude": 19.719391,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666968899,
      "ems": null
    },
    {
      "latitude": 51.693558,
      "longitude": 19.724096,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1666968905,
      "ems": null
    },
    {
      "latitude": 51.695004,
      "longitude": 19.728622,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1666968911,
      "ems": null
    },
    {
      "latitude": 51.695709,
      "longitude": 19.730852,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1666968914,
      "ems": null
    },
    {
      "latitude": 51.696487,
      "longitude": 19.733152,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1666968917,
      "ems": null
    },
    {
      "latitude": 51.697311,
      "longitude": 19.735676,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1666968920,
      "ems": null
    },
    {
      "latitude": 51.698124,
      "longitude": 19.73793,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666968923,
      "ems": null
    },
    {
      "latitude": 51.698959,
      "longitude": 19.740353,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666968926,
      "ems": null
    },
    {
      "latitude": 51.699738,
      "longitude": 19.74258,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1666968929,
      "ems": null
    },
    {
      "latitude": 51.700542,
      "longitude": 19.744797,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1666968932,
      "ems": null
    },
    {
      "latitude": 51.701382,
      "longitude": 19.747009,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1666968935,
      "ems": null
    },
    {
      "latitude": 51.702312,
      "longitude": 19.749374,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968938,
      "ems": null
    },
    {
      "latitude": 51.703941,
      "longitude": 19.753647,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968944,
      "ems": null
    },
    {
      "latitude": 51.705757,
      "longitude": 19.758072,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968950,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.761963,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1666968955,
      "ems": null
    },
    {
      "latitude": 51.709122,
      "longitude": 19.766779,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968962,
      "ems": null
    },
    {
      "latitude": 51.710861,
      "longitude": 19.771307,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1666968968,
      "ems": null
    },
    {
      "latitude": 51.712601,
      "longitude": 19.775763,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968974,
      "ems": null
    },
    {
      "latitude": 51.713951,
      "longitude": 19.779129,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968980,
      "ems": null
    },
    {
      "latitude": 51.715988,
      "longitude": 19.784149,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968986,
      "ems": null
    },
    {
      "latitude": 51.717728,
      "longitude": 19.788456,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968992,
      "ems": null
    },
    {
      "latitude": 51.719421,
      "longitude": 19.792761,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666968998,
      "ems": null
    },
    {
      "latitude": 51.721119,
      "longitude": 19.797058,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1666969004,
      "ems": null
    },
    {
      "latitude": 51.722946,
      "longitude": 19.801447,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1666969010,
      "ems": null
    },
    {
      "latitude": 51.724705,
      "longitude": 19.805832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1666969016,
      "ems": null
    },
    {
      "latitude": 51.726521,
      "longitude": 19.809952,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1666969022,
      "ems": null
    },
    {
      "latitude": 51.728302,
      "longitude": 19.813694,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1666969029,
      "ems": null
    },
    {
      "latitude": 51.7295,
      "longitude": 19.815979,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1666969031,
      "ems": null
    },
    {
      "latitude": 51.730618,
      "longitude": 19.81781,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1666969034,
      "ems": null
    },
    {
      "latitude": 51.731827,
      "longitude": 19.819412,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1666969037,
      "ems": null
    },
    {
      "latitude": 51.733246,
      "longitude": 19.820894,
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1666969040,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 19.822083,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969043,
      "ems": null
    },
    {
      "latitude": 51.736061,
      "longitude": 19.822998,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969046,
      "ems": null
    },
    {
      "latitude": 51.737228,
      "longitude": 19.823641,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969049,
      "ems": null
    },
    {
      "latitude": 51.737778,
      "longitude": 19.823864,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1666969052,
      "ems": null
    },
    {
      "latitude": 51.740295,
      "longitude": 19.824903,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1666969055,
      "ems": null
    },
    {
      "latitude": 51.741714,
      "longitude": 19.825348,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1666969058,
      "ems": null
    },
    {
      "latitude": 51.743179,
      "longitude": 19.825794,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1666969061,
      "ems": null
    },
    {
      "latitude": 51.744766,
      "longitude": 19.826202,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1666969065,
      "ems": null
    },
    {
      "latitude": 51.745838,
      "longitude": 19.826431,
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1666969067,
      "ems": null
    },
    {
      "latitude": 51.747189,
      "longitude": 19.826813,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1666969070,
      "ems": null
    },
    {
      "latitude": 51.749634,
      "longitude": 19.827501,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1666969075,
      "ems": null
    },
    {
      "latitude": 51.751938,
      "longitude": 19.828186,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1666969079,
      "ems": null
    },
    {
      "latitude": 51.754715,
      "longitude": 19.828985,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1666969085,
      "ems": null
    },
    {
      "latitude": 51.757755,
      "longitude": 19.830093,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1666969093,
      "ems": null
    },
    {
      "latitude": 51.75985,
      "longitude": 19.831085,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969097,
      "ems": null
    },
    {
      "latitude": 51.761665,
      "longitude": 19.832001,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969101,
      "ems": null
    },
    {
      "latitude": 51.762829,
      "longitude": 19.832611,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969103,
      "ems": null
    },
    {
      "latitude": 51.764225,
      "longitude": 19.833298,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969106,
      "ems": null
    },
    {
      "latitude": 51.765518,
      "longitude": 19.834108,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666969109,
      "ems": null
    },
    {
      "latitude": 51.767075,
      "longitude": 19.834999,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666969113,
      "ems": null
    },
    {
      "latitude": 51.769348,
      "longitude": 19.836349,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666969117,
      "ems": null
    },
    {
      "latitude": 51.772839,
      "longitude": 19.838409,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666969126,
      "ems": null
    },
    {
      "latitude": 51.775307,
      "longitude": 19.840088,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969131,
      "ems": null
    },
    {
      "latitude": 51.776657,
      "longitude": 19.84108,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969133,
      "ems": null
    },
    {
      "latitude": 51.780704,
      "longitude": 19.84375,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1666969143,
      "ems": null
    },
    {
      "latitude": 51.783417,
      "longitude": 19.845392,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666969149,
      "ems": null
    },
    {
      "latitude": 51.78606,
      "longitude": 19.846878,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666969155,
      "ems": null
    },
    {
      "latitude": 51.788315,
      "longitude": 19.848211,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666969160,
      "ems": null
    },
    {
      "latitude": 51.790192,
      "longitude": 19.849251,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969164,
      "ems": null
    },
    {
      "latitude": 51.791519,
      "longitude": 19.84992,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969167,
      "ems": null
    },
    {
      "latitude": 51.792664,
      "longitude": 19.850513,
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
      "squawk": "7000",
      "timestamp": 1666969169,
      "ems": null
    },
    {
      "latitude": 51.795364,
      "longitude": 19.851849,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969175,
      "ems": null
    },
    {
      "latitude": 51.798203,
      "longitude": 19.85326,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969182,
      "ems": null
    },
    {
      "latitude": 51.800861,
      "longitude": 19.854736,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969188,
      "ems": null
    },
    {
      "latitude": 51.803516,
      "longitude": 19.85611,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969193,
      "ems": null
    },
    {
      "latitude": 51.806217,
      "longitude": 19.857559,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969199,
      "ems": null
    },
    {
      "latitude": 51.809143,
      "longitude": 19.859051,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969206,
      "ems": null
    },
    {
      "latitude": 51.81208,
      "longitude": 19.860535,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1666969212,
      "ems": null
    },
    {
      "latitude": 51.814781,
      "longitude": 19.861832,
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
      "squawk": "7000",
      "timestamp": 1666969218,
      "ems": null
    },
    {
      "latitude": 51.817669,
      "longitude": 19.863281,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1666969224,
      "ems": null
    },
    {
      "latitude": 51.820038,
      "longitude": 19.86447,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1666969229,
      "ems": null
    },
    {
      "latitude": 51.823116,
      "longitude": 19.865952,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969236,
      "ems": null
    },
    {
      "latitude": 51.825813,
      "longitude": 19.867325,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969242,
      "ems": null
    },
    {
      "latitude": 51.828423,
      "longitude": 19.868698,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969248,
      "ems": null
    },
    {
      "latitude": 51.831161,
      "longitude": 19.870111,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969254,
      "ems": null
    },
    {
      "latitude": 51.833916,
      "longitude": 19.871445,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969260,
      "ems": null
    },
    {
      "latitude": 51.835636,
      "longitude": 19.872284,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969265,
      "ems": null
    },
    {
      "latitude": 51.839264,
      "longitude": 19.874119,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969272,
      "ems": null
    },
    {
      "latitude": 51.842155,
      "longitude": 19.875717,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969278,
      "ems": null
    },
    {
      "latitude": 51.843658,
      "longitude": 19.876568,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666969281,
      "ems": null
    },
    {
      "latitude": 51.847961,
      "longitude": 19.879168,
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666969291,
      "ems": null
    },
    {
      "latitude": 51.850952,
      "longitude": 19.881058,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969298,
      "ems": null
    },
    {
      "latitude": 51.852539,
      "longitude": 19.88221,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969301,
      "ems": null
    },
    {
      "latitude": 51.853233,
      "longitude": 19.88266,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969303,
      "ems": null
    },
    {
      "latitude": 51.85675,
      "longitude": 19.88518,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969310,
      "ems": null
    },
    {
      "latitude": 51.860123,
      "longitude": 19.887466,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969318,
      "ems": null
    },
    {
      "latitude": 51.862839,
      "longitude": 19.889263,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1666969324,
      "ems": null
    },
    {
      "latitude": 51.866592,
      "longitude": 19.891638,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666969332,
      "ems": null
    },
    {
      "latitude": 51.868973,
      "longitude": 19.892975,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969339,
      "ems": null
    },
    {
      "latitude": 51.870621,
      "longitude": 19.893791,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969341,
      "ems": null
    },
    {
      "latitude": 51.871811,
      "longitude": 19.894384,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969344,
      "ems": null
    },
    {
      "latitude": 51.873413,
      "longitude": 19.895201,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969347,
      "ems": null
    },
    {
      "latitude": 51.873871,
      "longitude": 19.895424,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969348,
      "ems": null
    },
    {
      "latitude": 51.876091,
      "longitude": 19.896545,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969353,
      "ems": null
    },
    {
      "latitude": 51.879639,
      "longitude": 19.898468,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969361,
      "ems": null
    },
    {
      "latitude": 51.883026,
      "longitude": 19.900131,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1666969369,
      "ems": null
    },
    {
      "latitude": 51.88554,
      "longitude": 19.901123,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1666969374,
      "ems": null
    },
    {
      "latitude": 51.888519,
      "longitude": 19.902496,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969380,
      "ems": null
    },
    {
      "latitude": 51.8909,
      "longitude": 19.903738,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969385,
      "ems": null
    },
    {
      "latitude": 51.89378,
      "longitude": 19.905344,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666969393,
      "ems": null
    },
    {
      "latitude": 51.896294,
      "longitude": 19.906834,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666969398,
      "ems": null
    },
    {
      "latitude": 51.899323,
      "longitude": 19.908482,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969403,
      "ems": null
    },
    {
      "latitude": 51.902023,
      "longitude": 19.909897,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969409,
      "ems": null
    },
    {
      "latitude": 51.904999,
      "longitude": 19.911386,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969415,
      "ems": null
    },
    {
      "latitude": 51.907841,
      "longitude": 19.912798,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1666969421,
      "ems": null
    },
    {
      "latitude": 51.910725,
      "longitude": 19.914133,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1666969427,
      "ems": null
    },
    {
      "latitude": 51.9142,
      "longitude": 19.915695,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1666969435,
      "ems": null
    },
    {
      "latitude": 51.918175,
      "longitude": 19.917585,
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969443,
      "ems": null
    },
    {
      "latitude": 51.920929,
      "longitude": 19.919128,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969449,
      "ems": null
    },
    {
      "latitude": 51.924042,
      "longitude": 19.921036,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1666969456,
      "ems": null
    },
    {
      "latitude": 51.925415,
      "longitude": 19.921951,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969459,
      "ems": null
    },
    {
      "latitude": 51.926926,
      "longitude": 19.923,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969462,
      "ems": null
    },
    {
      "latitude": 51.928276,
      "longitude": 19.923862,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969465,
      "ems": null
    },
    {
      "latitude": 51.929626,
      "longitude": 19.924774,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969468,
      "ems": null
    },
    {
      "latitude": 51.931961,
      "longitude": 19.926376,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969473,
      "ems": null
    },
    {
      "latitude": 51.935074,
      "longitude": 19.928513,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969480,
      "ems": null
    },
    {
      "latitude": 51.937027,
      "longitude": 19.929983,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969486,
      "ems": null
    },
    {
      "latitude": 51.94038,
      "longitude": 19.932261,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969492,
      "ems": null
    },
    {
      "latitude": 51.943039,
      "longitude": 19.934006,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969498,
      "ems": null
    },
    {
      "latitude": 51.946339,
      "longitude": 19.936262,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969506,
      "ems": null
    },
    {
      "latitude": 51.950226,
      "longitude": 19.93866,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666969514,
      "ems": null
    },
    {
      "latitude": 51.954021,
      "longitude": 19.940891,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666969522,
      "ems": null
    },
    {
      "latitude": 51.956589,
      "longitude": 19.942398,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969528,
      "ems": null
    },
    {
      "latitude": 51.959747,
      "longitude": 19.944109,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969534,
      "ems": null
    },
    {
      "latitude": 51.962677,
      "longitude": 19.945297,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1666969540,
      "ems": null
    },
    {
      "latitude": 51.963425,
      "longitude": 19.945364,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1666969542,
      "ems": null
    },
    {
      "latitude": 51.965519,
      "longitude": 19.945051,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1666969546,
      "ems": null
    },
    {
      "latitude": 51.966961,
      "longitude": 19.944345,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1666969550,
      "ems": null
    },
    {
      "latitude": 51.968452,
      "longitude": 19.942932,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1666969554,
      "ems": null
    },
    {
      "latitude": 51.969521,
      "longitude": 19.941441,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1666969558,
      "ems": null
    },
    {
      "latitude": 51.970734,
      "longitude": 19.939087,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1666969562,
      "ems": null
    },
    {
      "latitude": 51.971558,
      "longitude": 19.937134,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1666969566,
      "ems": null
    },
    {
      "latitude": 51.972382,
      "longitude": 19.935455,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1666969570,
      "ems": null
    },
    {
      "latitude": 51.973431,
      "longitude": 19.933279,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1666969574,
      "ems": null
    },
    {
      "latitude": 51.974457,
      "longitude": 19.931162,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1666969578,
      "ems": null
    },
    {
      "latitude": 51.975815,
      "longitude": 19.929199,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1666969582,
      "ems": null
    },
    {
      "latitude": 51.977463,
      "longitude": 19.927902,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1666969587,
      "ems": null
    },
    {
      "latitude": 51.979298,
      "longitude": 19.927317,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1666969591,
      "ems": null
    },
    {
      "latitude": 51.981125,
      "longitude": 19.927444,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1666969594,
      "ems": null
    },
    {
      "latitude": 51.982544,
      "longitude": 19.928055,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1666969598,
      "ems": null
    },
    {
      "latitude": 51.984512,
      "longitude": 19.929428,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969602,
      "ems": null
    },
    {
      "latitude": 51.986389,
      "longitude": 19.930954,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1666969606,
      "ems": null
    },
    {
      "latitude": 51.987717,
      "longitude": 19.932175,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1666969609,
      "ems": null
    },
    {
      "latitude": 51.987957,
      "longitude": 19.932339,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1666969609,
      "ems": null
    },
    {
      "latitude": 51.989639,
      "longitude": 19.934006,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1666969613,
      "ems": null
    },
    {
      "latitude": 51.99115,
      "longitude": 19.935379,
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1666969617,
      "ems": null
    },
    {
      "latitude": 51.992935,
      "longitude": 19.936905,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1666969621,
      "ems": null
    },
    {
      "latitude": 51.994568,
      "longitude": 19.938303,
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1666969625,
      "ems": null
    },
    {
      "latitude": 51.998703,
      "longitude": 19.941483,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969634,
      "ems": null
    },
    {
      "latitude": 52.001038,
      "longitude": 19.943161,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969639,
      "ems": null
    },
    {
      "latitude": 52.002136,
      "longitude": 19.943924,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969643,
      "ems": null
    },
    {
      "latitude": 52.004608,
      "longitude": 19.945602,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969647,
      "ems": null
    },
    {
      "latitude": 52.006439,
      "longitude": 19.946747,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1666969651,
      "ems": null
    },
    {
      "latitude": 52.008224,
      "longitude": 19.947891,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1666969655,
      "ems": null
    },
    {
      "latitude": 52.010742,
      "longitude": 19.949341,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969660,
      "ems": null
    },
    {
      "latitude": 52.012348,
      "longitude": 19.95023,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969664,
      "ems": null
    },
    {
      "latitude": 52.01561,
      "longitude": 19.951956,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1666969672,
      "ems": null
    },
    {
      "latitude": 52.019806,
      "longitude": 19.954147,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666969680,
      "ems": null
    },
    {
      "latitude": 52.023384,
      "longitude": 19.956194,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666969688,
      "ems": null
    },
    {
      "latitude": 52.027481,
      "longitude": 19.958862,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666969697,
      "ems": null
    },
    {
      "latitude": 52.028595,
      "longitude": 19.959717,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969699,
      "ems": null
    },
    {
      "latitude": 52.030365,
      "longitude": 19.960981,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969703,
      "ems": null
    },
    {
      "latitude": 52.031483,
      "longitude": 19.961765,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969705,
      "ems": null
    },
    {
      "latitude": 52.033035,
      "longitude": 19.962997,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969709,
      "ems": null
    },
    {
      "latitude": 52.034416,
      "longitude": 19.964041,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969712,
      "ems": null
    },
    {
      "latitude": 52.035347,
      "longitude": 19.964748,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969714,
      "ems": null
    },
    {
      "latitude": 52.037117,
      "longitude": 19.96616,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969718,
      "ems": null
    },
    {
      "latitude": 52.038574,
      "longitude": 19.96727,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1666969721,
      "ems": null
    },
    {
      "latitude": 52.041321,
      "longitude": 19.969406,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969727,
      "ems": null
    },
    {
      "latitude": 52.042969,
      "longitude": 19.970627,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969732,
      "ems": null
    },
    {
      "latitude": 52.047451,
      "longitude": 19.974009,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969740,
      "ems": null
    },
    {
      "latitude": 52.051025,
      "longitude": 19.976807,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969748,
      "ems": null
    },
    {
      "latitude": 52.053314,
      "longitude": 19.978638,
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1666969754,
      "ems": null
    },
    {
      "latitude": 52.057251,
      "longitude": 19.981689,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969763,
      "ems": null
    },
    {
      "latitude": 52.059601,
      "longitude": 19.983503,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969768,
      "ems": null
    },
    {
      "latitude": 52.063202,
      "longitude": 19.986115,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969775,
      "ems": null
    },
    {
      "latitude": 52.065308,
      "longitude": 19.987717,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666969781,
      "ems": null
    },
    {
      "latitude": 52.06842,
      "longitude": 19.990082,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969786,
      "ems": null
    },
    {
      "latitude": 52.071442,
      "longitude": 19.992523,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1666969793,
      "ems": null
    },
    {
      "latitude": 52.074123,
      "longitude": 19.994802,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1666969799,
      "ems": null
    },
    {
      "latitude": 52.076778,
      "longitude": 19.997,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1666969805,
      "ems": null
    },
    {
      "latitude": 52.079681,
      "longitude": 19.99939,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1666969811,
      "ems": null
    },
    {
      "latitude": 52.083527,
      "longitude": 20.002518,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1666969819,
      "ems": null
    },
    {
      "latitude": 52.086506,
      "longitude": 20.005005,
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1666969826,
      "ems": null
    },
    {
      "latitude": 52.08902,
      "longitude": 20.006943,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969831,
      "ems": null
    },
    {
      "latitude": 52.09214,
      "longitude": 20.009399,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969838,
      "ems": null
    },
    {
      "latitude": 52.095016,
      "longitude": 20.011597,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666969844,
      "ems": null
    },
    {
      "latitude": 52.097725,
      "longitude": 20.013479,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666969850,
      "ems": null
    },
    {
      "latitude": 52.099457,
      "longitude": 20.014343,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1666969853,
      "ems": null
    },
    {
      "latitude": 52.099682,
      "longitude": 20.014421,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1666969854,
      "ems": null
    },
    {
      "latitude": 52.100555,
      "longitude": 20.014648,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1666969855,
      "ems": null
    },
    {
      "latitude": 52.102158,
      "longitude": 20.014954,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1666969859,
      "ems": null
    },
    {
      "latitude": 52.102894,
      "longitude": 20.014893,
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1666969860,
      "ems": null
    },
    {
      "latitude": 52.104477,
      "longitude": 20.014578,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1666969864,
      "ems": null
    },
    {
      "latitude": 52.106339,
      "longitude": 20.013794,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1666969868,
      "ems": null
    },
    {
      "latitude": 52.107513,
      "longitude": 20.013123,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1666969870,
      "ems": null
    },
    {
      "latitude": 52.108807,
      "longitude": 20.012224,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1666969874,
      "ems": null
    },
    {
      "latitude": 52.110714,
      "longitude": 20.010498,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1666969878,
      "ems": null
    },
    {
      "latitude": 52.112183,
      "longitude": 20.008926,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1666969882,
      "ems": null
    },
    {
      "latitude": 52.113373,
      "longitude": 20.007477,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1666969885,
      "ems": null
    },
    {
      "latitude": 52.114563,
      "longitude": 20.006027,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1666969889,
      "ems": null
    },
    {
      "latitude": 52.115604,
      "longitude": 20.004534,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1666969892,
      "ems": null
    },
    {
      "latitude": 52.116119,
      "longitude": 20.003815,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1666969894,
      "ems": null
    },
    {
      "latitude": 52.11763,
      "longitude": 20.001297,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1666969898,
      "ems": null
    },
    {
      "latitude": 52.117859,
      "longitude": 20.000839,
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1666969899,
      "ems": null
    },
    {
      "latitude": 52.119278,
      "longitude": 19.998169,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1666969904,
      "ems": null
    },
    {
      "latitude": 52.119514,
      "longitude": 19.997629,
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1666969905,
      "ems": null
    },
    {
      "latitude": 52.120163,
      "longitude": 19.996216,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1666969908,
      "ems": null
    },
    {
      "latitude": 52.121098,
      "longitude": 19.993862,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1666969913,
      "ems": null
    },
    {
      "latitude": 52.121422,
      "longitude": 19.99292,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1666969914,
      "ems": null
    },
    {
      "latitude": 52.122025,
      "longitude": 19.991074,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1666969917,
      "ems": null
    },
    {
      "latitude": 52.122574,
      "longitude": 19.989014,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1666969920,
      "ems": null
    },
    {
      "latitude": 52.122894,
      "longitude": 19.987793,
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1666969922,
      "ems": null
    },
    {
      "latitude": 52.123398,
      "longitude": 19.985275,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1666969926,
      "ems": null
    },
    {
      "latitude": 52.123581,
      "longitude": 19.984283,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1666969929,
      "ems": null
    },
    {
      "latitude": 52.124027,
      "longitude": 19.979971,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1666969934,
      "ems": null
    },
    {
      "latitude": 52.124084,
      "longitude": 19.977875,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1666969938,
      "ems": null
    },
    {
      "latitude": 52.123981,
      "longitude": 19.975342,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1666969942,
      "ems": null
    },
    {
      "latitude": 52.123718,
      "longitude": 19.973068,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666969946,
      "ems": null
    },
    {
      "latitude": 52.123215,
      "longitude": 19.970932,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666969950,
      "ems": null
    },
    {
      "latitude": 52.12254,
      "longitude": 19.968906,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1666969954,
      "ems": null
    },
    {
      "latitude": 52.121796,
      "longitude": 19.966709,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1666969958,
      "ems": null
    },
    {
      "latitude": 52.121246,
      "longitude": 19.96521,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1666969962,
      "ems": null
    },
    {
      "latitude": 52.120697,
      "longitude": 19.963684,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1666969964,
      "ems": null
    },
    {
      "latitude": 52.120148,
      "longitude": 19.962387,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1666969967,
      "ems": null
    },
    {
      "latitude": 52.119553,
      "longitude": 19.960938,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1666969970,
      "ems": null
    },
    {
      "latitude": 52.118958,
      "longitude": 19.959412,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666969974,
      "ems": null
    },
    {
      "latitude": 52.118408,
      "longitude": 19.958038,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1666969977,
      "ems": null
    },
    {
      "latitude": 52.117813,
      "longitude": 19.956741,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1666969980,
      "ems": null
    },
    {
      "latitude": 52.117512,
      "longitude": 19.956038,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1666969983,
      "ems": null
    },
    {
      "latitude": 52.116394,
      "longitude": 19.953526,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1666969987,
      "ems": null
    },
    {
      "latitude": 52.11525,
      "longitude": 19.95079,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1666969993,
      "ems": null
    },
    {
      "latitude": 52.114067,
      "longitude": 19.948111,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1666969998,
      "ems": null
    },
    {
      "latitude": 52.112808,
      "longitude": 19.945364,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1666970005,
      "ems": null
    },
    {
      "latitude": 52.112686,
      "longitude": 19.945145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1666970007,
      "ems": null
    },
    {
      "latitude": 52.111313,
      "longitude": 19.942398,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1666970011,
      "ems": null
    },
    {
      "latitude": 52.110489,
      "longitude": 19.940872,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1666970015,
      "ems": null
    },
    {
      "latitude": 52.109737,
      "longitude": 19.939402,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1666970019,
      "ems": null
    },
    {
      "latitude": 52.108433,
      "longitude": 19.936733,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1666970024,
      "ems": null
    },
    {
      "latitude": 52.107269,
      "longitude": 19.934065,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1666970030,
      "ems": null
    },
    {
      "latitude": 52.105957,
      "longitude": 19.931183,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1666970037,
      "ems": null
    },
    {
      "latitude": 52.104431,
      "longitude": 19.928415,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1666970043,
      "ems": null
    },
    {
      "latitude": 52.102894,
      "longitude": 19.925825,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666970049,
      "ems": null
    },
    {
      "latitude": 52.102066,
      "longitude": 19.924622,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666970052,
      "ems": null
    },
    {
      "latitude": 52.101357,
      "longitude": 19.923628,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666970054,
      "ems": null
    },
    {
      "latitude": 52.100471,
      "longitude": 19.922373,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666970058,
      "ems": null
    },
    {
      "latitude": 52.099728,
      "longitude": 19.921274,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666970060,
      "ems": null
    },
    {
      "latitude": 52.098907,
      "longitude": 19.919968,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666970064,
      "ems": null
    },
    {
      "latitude": 52.097401,
      "longitude": 19.917585,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666970069,
      "ems": null
    },
    {
      "latitude": 52.095886,
      "longitude": 19.915085,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666970076,
      "ems": null
    },
    {
      "latitude": 52.09433,
      "longitude": 19.912643,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666970081,
      "ems": null
    },
    {
      "latitude": 52.092361,
      "longitude": 19.910278,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666970088,
      "ems": null
    },
    {
      "latitude": 52.092049,
      "longitude": 19.909817,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666970089,
      "ems": null
    },
    {
      "latitude": 52.090603,
      "longitude": 19.908247,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666970094,
      "ems": null
    },
    {
      "latitude": 52.089844,
      "longitude": 19.907303,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666970098,
      "ems": null
    },
    {
      "latitude": 52.088058,
      "longitude": 19.905243,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666970102,
      "ems": null
    },
    {
      "latitude": 52.086693,
      "longitude": 19.903696,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666970106,
      "ems": null
    },
    {
      "latitude": 52.084972,
      "longitude": 19.901577,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1666970112,
      "ems": null
    },
    {
      "latitude": 52.08218,
      "longitude": 19.898281,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1666970123,
      "ems": null
    },
    {
      "latitude": 52.079151,
      "longitude": 19.895142,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1666970133,
      "ems": null
    },
    {
      "latitude": 52.076591,
      "longitude": 19.892317,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1666970142,
      "ems": null
    },
    {
      "latitude": 52.075104,
      "longitude": 19.890747,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1666970146,
      "ems": null
    },
    {
      "latitude": 52.07338,
      "longitude": 19.889021,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1666970152,
      "ems": null
    },
    {
      "latitude": 52.071579,
      "longitude": 19.887238,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1666970158,
      "ems": null
    },
    {
      "latitude": 52.06929,
      "longitude": 19.884567,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1666970166,
      "ems": null
    },
    {
      "latitude": 52.068787,
      "longitude": 19.883957,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970169,
      "ems": null
    },
    {
      "latitude": 52.067642,
      "longitude": 19.882431,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970172,
      "ems": null
    },
    {
      "latitude": 52.066818,
      "longitude": 19.881363,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970175,
      "ems": null
    },
    {
      "latitude": 52.066025,
      "longitude": 19.880388,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970178,
      "ems": null
    },
    {
      "latitude": 52.06572,
      "longitude": 19.87999,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970179,
      "ems": null
    },
    {
      "latitude": 52.064816,
      "longitude": 19.878819,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1666970183,
      "ems": null
    },
    {
      "latitude": 52.063065,
      "longitude": 19.876785,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666970189,
      "ems": null
    },
    {
      "latitude": 52.061371,
      "longitude": 19.874878,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1666970194,
      "ems": null
    },
    {
      "latitude": 52.05954,
      "longitude": 19.872742,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666970201,
      "ems": null
    },
    {
      "latitude": 52.057831,
      "longitude": 19.870737,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666970207,
      "ems": null
    },
    {
      "latitude": 52.05629,
      "longitude": 19.869003,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1666970213,
      "ems": null
    },
    {
      "latitude": 52.054413,
      "longitude": 19.866867,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1666970218,
      "ems": null
    },
    {
      "latitude": 52.052261,
      "longitude": 19.864655,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1666970225,
      "ems": null
    },
    {
      "latitude": 52.050476,
      "longitude": 19.862888,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1666970231,
      "ems": null
    },
    {
      "latitude": 52.048519,
      "longitude": 19.860928,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1666970237,
      "ems": null
    },
    {
      "latitude": 52.046677,
      "longitude": 19.859161,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1666970243,
      "ems": null
    },
    {
      "latitude": 52.044891,
      "longitude": 19.857407,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1666970248,
      "ems": null
    },
    {
      "latitude": 52.043015,
      "longitude": 19.855576,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1666970254,
      "ems": null
    },
    {
      "latitude": 52.042004,
      "longitude": 19.854336,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666970258,
      "ems": null
    },
    {
      "latitude": 52.041027,
      "longitude": 19.853079,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1666970261,
      "ems": null
    },
    {
      "latitude": 52.040543,
      "longitude": 19.852524,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970263,
      "ems": null
    },
    {
      "latitude": 52.039398,
      "longitude": 19.850962,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970267,
      "ems": null
    },
    {
      "latitude": 52.038651,
      "longitude": 19.850019,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970269,
      "ems": null
    },
    {
      "latitude": 52.037907,
      "longitude": 19.848999,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666970272,
      "ems": null
    },
    {
      "latitude": 52.037067,
      "longitude": 19.847822,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666970275,
      "ems": null
    },
    {
      "latitude": 52.035954,
      "longitude": 19.846331,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1666970279,
      "ems": null
    },
    {
      "latitude": 52.035049,
      "longitude": 19.845123,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970287,
      "ems": null
    },
    {
      "latitude": 52.032555,
      "longitude": 19.841936,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666970293,
      "ems": null
    },
    {
      "latitude": 52.030041,
      "longitude": 19.838797,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1666970300,
      "ems": null
    },
    {
      "latitude": 52.028595,
      "longitude": 19.83696,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1666970305,
      "ems": null
    },
    {
      "latitude": 52.027107,
      "longitude": 19.834873,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1666970312,
      "ems": null
    },
    {
      "latitude": 52.02507,
      "longitude": 19.832153,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666970318,
      "ems": null
    },
    {
      "latitude": 52.023617,
      "longitude": 19.829929,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666970324,
      "ems": null
    },
    {
      "latitude": 52.022778,
      "longitude": 19.828674,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666970327,
      "ems": null
    },
    {
      "latitude": 52.022003,
      "longitude": 19.827423,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666970330,
      "ems": null
    },
    {
      "latitude": 52.021286,
      "longitude": 19.826162,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1666970334,
      "ems": null
    },
    {
      "latitude": 52.020676,
      "longitude": 19.825134,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666970336,
      "ems": null
    },
    {
      "latitude": 52.020081,
      "longitude": 19.824066,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1666970339,
      "ems": null
    },
    {
      "latitude": 52.019302,
      "longitude": 19.822617,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1666970342,
      "ems": null
    },
    {
      "latitude": 52.018589,
      "longitude": 19.821377,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1666970345,
      "ems": null
    },
    {
      "latitude": 52.018028,
      "longitude": 19.820356,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666970348,
      "ems": null
    },
    {
      "latitude": 52.017151,
      "longitude": 19.818802,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666970351,
      "ems": null
    },
    {
      "latitude": 52.015236,
      "longitude": 19.815647,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666970360,
      "ems": null
    },
    {
      "latitude": 52.013931,
      "longitude": 19.813686,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666970365,
      "ems": null
    },
    {
      "latitude": 52.013306,
      "longitude": 19.812775,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666970368,
      "ems": null
    },
    {
      "latitude": 52.012344,
      "longitude": 19.81163,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1666970371,
      "ems": null
    },
    {
      "latitude": 52.011108,
      "longitude": 19.810257,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666970375,
      "ems": null
    },
    {
      "latitude": 52.00993,
      "longitude": 19.809214,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1666970379,
      "ems": null
    },
    {
      "latitude": 52.009186,
      "longitude": 19.808578,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1666970381,
      "ems": null
    },
    {
      "latitude": 52.008068,
      "longitude": 19.807486,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1666970385,
      "ems": null
    },
    {
      "latitude": 52.007137,
      "longitude": 19.806623,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1666970388,
      "ems": null
    },
    {
      "latitude": 52.006302,
      "longitude": 19.805679,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666970391,
      "ems": null
    },
    {
      "latitude": 52.004761,
      "longitude": 19.803328,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1666970397,
      "ems": null
    },
    {
      "latitude": 52.004105,
      "longitude": 19.802017,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1666970400,
      "ems": null
    },
    {
      "latitude": 52.003738,
      "longitude": 19.801025,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1666970402,
      "ems": null
    },
    {
      "latitude": 52.003365,
      "longitude": 19.799795,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666970406,
      "ems": null
    },
    {
      "latitude": 52.00304,
      "longitude": 19.797678,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666970408,
      "ems": null
    },
    {
      "latitude": 52.003006,
      "longitude": 19.796829,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1666970410,
      "ems": null
    },
    {
      "latitude": 52.002995,
      "longitude": 19.795166,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1666970413,
      "ems": null
    },
    {
      "latitude": 52.00304,
      "longitude": 19.794382,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1666970415,
      "ems": null
    },
    {
      "latitude": 52.003235,
      "longitude": 19.792404,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1666970418,
      "ems": null
    },
    {
      "latitude": 52.00351,
      "longitude": 19.78981,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1666970422,
      "ems": null
    },
    {
      "latitude": 52.003738,
      "longitude": 19.787369,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1666970427,
      "ems": null
    },
    {
      "latitude": 52.003925,
      "longitude": 19.785044,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1666970431,
      "ems": null
    },
    {
      "latitude": 52.004059,
      "longitude": 19.782791,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1666970435,
      "ems": null
    },
    {
      "latitude": 52.004196,
      "longitude": 19.780273,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1666970439,
      "ems": null
    },
    {
      "latitude": 52.004242,
      "longitude": 19.775085,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1666970448,
      "ems": null
    },
    {
      "latitude": 52.004196,
      "longitude": 19.773636,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1666970451,
      "ems": null
    },
    {
      "latitude": 52.004158,
      "longitude": 19.77178,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1666970454,
      "ems": null
    },
    {
      "latitude": 52.004105,
      "longitude": 19.770584,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1666970456,
      "ems": null
    },
    {
      "latitude": 52.004017,
      "longitude": 19.768328,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1666970460,
      "ems": null
    },
    {
      "latitude": 52.003922,
      "longitude": 19.766998,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1666970463,
      "ems": null
    },
    {
      "latitude": 52.003876,
      "longitude": 19.765896,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1666970465,
      "ems": null
    },
    {
      "latitude": 52.003738,
      "longitude": 19.764099,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1666970469,
      "ems": null
    },
    {
      "latitude": 52.003643,
      "longitude": 19.762285,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1666970472,
      "ems": null
    },
    {
      "latitude": 52.003506,
      "longitude": 19.759932,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1666970476,
      "ems": null
    },
    {
      "latitude": 52.003372,
      "longitude": 19.758224,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666970480,
      "ems": null
    },
    {
      "latitude": 52.003143,
      "longitude": 19.755783,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1666970484,
      "ems": null
    },
    {
      "latitude": 52.00304,
      "longitude": 19.75436,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1666970487,
      "ems": null
    },
    {
      "latitude": 52.002945,
      "longitude": 19.75334,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1666970489,
      "ems": null
    },
    {
      "latitude": 52.002666,
      "longitude": 19.751064,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1666970493,
      "ems": null
    },
    {
      "latitude": 52.002388,
      "longitude": 19.748159,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1666970499,
      "ems": null
    },
    {
      "latitude": 52.00209,
      "longitude": 19.745102,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666970505,
      "ems": null
    },
    {
      "latitude": 52.001781,
      "longitude": 19.741489,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666970511,
      "ems": null
    },
    {
      "latitude": 52.001495,
      "longitude": 19.737854,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1666970518,
      "ems": null
    },
    {
      "latitude": 52.001312,
      "longitude": 19.735336,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666970523,
      "ems": null
    },
    {
      "latitude": 52.001038,
      "longitude": 19.73176,
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
      "timestamp": 1666970530,
      "ems": null
    },
    {
      "latitude": 52.000626,
      "longitude": 19.727783,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1666970536,
      "ems": null
    },
    {
      "latitude": 52.000248,
      "longitude": 19.724697,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666970541,
      "ems": null
    },
    {
      "latitude": 52.000015,
      "longitude": 19.723049,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666970544,
      "ems": null
    },
    {
      "latitude": 51.999828,
      "longitude": 19.721323,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666970547,
      "ems": null
    },
    {
      "latitude": 51.999596,
      "longitude": 19.719753,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666970550,
      "ems": null
    },
    {
      "latitude": 51.999527,
      "longitude": 19.719315,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666970551,
      "ems": null
    },
    {
      "latitude": 51.99913,
      "longitude": 19.716614,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666970556,
      "ems": null
    },
    {
      "latitude": 51.998566,
      "longitude": 19.711685,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1666970564,
      "ems": null
    },
    {
      "latitude": 51.998058,
      "longitude": 19.707197,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1666970572,
      "ems": null
    },
    {
      "latitude": 51.997684,
      "longitude": 19.704058,
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
      "timestamp": 1666970577,
      "ems": null
    },
    {
      "latitude": 51.997192,
      "longitude": 19.699631,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1666970585,
      "ems": null
    },
    {
      "latitude": 51.996506,
      "longitude": 19.694061,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1666970594,
      "ems": null
    },
    {
      "latitude": 51.995911,
      "longitude": 19.68956,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666970602,
      "ems": null
    },
    {
      "latitude": 51.995224,
      "longitude": 19.685059,
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
      "timestamp": 1666970610,
      "ems": null
    },
    {
      "latitude": 51.994537,
      "longitude": 19.680939,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666970618,
      "ems": null
    },
    {
      "latitude": 51.994217,
      "longitude": 19.679184,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666970622,
      "ems": null
    },
    {
      "latitude": 51.993439,
      "longitude": 19.675903,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666970626,
      "ems": null
    },
    {
      "latitude": 51.992706,
      "longitude": 19.673767,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666970630,
      "ems": null
    },
    {
      "latitude": 51.992065,
      "longitude": 19.671936,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1666970634,
      "ems": null
    },
    {
      "latitude": 51.991425,
      "longitude": 19.670029,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666970638,
      "ems": null
    },
    {
      "latitude": 51.990841,
      "longitude": 19.668352,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1666970642,
      "ems": null
    },
    {
      "latitude": 51.990143,
      "longitude": 19.666548,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1666970646,
      "ems": null
    },
    {
      "latitude": 51.989273,
      "longitude": 19.664383,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666970650,
      "ems": null
    },
    {
      "latitude": 51.988907,
      "longitude": 19.663544,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666970652,
      "ems": null
    },
    {
      "latitude": 51.988796,
      "longitude": 19.66333,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666970653,
      "ems": null
    },
    {
      "latitude": 51.987862,
      "longitude": 19.660898,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1666970658,
      "ems": null
    },
    {
      "latitude": 51.986328,
      "longitude": 19.656424,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666970668,
      "ems": null
    },
    {
      "latitude": 51.985023,
      "longitude": 19.652737,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1666970676,
      "ems": null
    },
    {
      "latitude": 51.982834,
      "longitude": 19.648264,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666970685,
      "ems": null
    },
    {
      "latitude": 51.981308,
      "longitude": 19.646378,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1666970690,
      "ems": null
    },
    {
      "latitude": 51.980072,
      "longitude": 19.645386,
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
      "timestamp": 1666970694,
      "ems": null
    },
    {
      "latitude": 51.978378,
      "longitude": 19.64447,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1666970699,
      "ems": null
    },
    {
      "latitude": 51.977203,
      "longitude": 19.644104,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1666970702,
      "ems": null
    },
    {
      "latitude": 51.975128,
      "longitude": 19.643784,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1666970707,
      "ems": null
    },
    {
      "latitude": 51.973709,
      "longitude": 19.643631,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1666970711,
      "ems": null
    },
    {
      "latitude": 51.97348,
      "longitude": 19.643631,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1666970711,
      "ems": null
    },
    {
      "latitude": 51.971512,
      "longitude": 19.643631,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1666970716,
      "ems": null
    },
    {
      "latitude": 51.971149,
      "longitude": 19.643633,
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1666970720,
      "ems": null
    },
    {
      "latitude": 51.968403,
      "longitude": 19.643948,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1666970724,
      "ems": null
    },
    {
      "latitude": 51.966934,
      "longitude": 19.644318,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1666970728,
      "ems": null
    },
    {
      "latitude": 51.965378,
      "longitude": 19.645081,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1666970732,
      "ems": null
    },
    {
      "latitude": 51.963776,
      "longitude": 19.646378,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1666970736,
      "ems": null
    },
    {
      "latitude": 51.962399,
      "longitude": 19.647871,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1666970740,
      "ems": null
    },
    {
      "latitude": 51.961048,
      "longitude": 19.649675,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1666970744,
      "ems": null
    },
    {
      "latitude": 51.959839,
      "longitude": 19.65156,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1666970748,
      "ems": null
    },
    {
      "latitude": 51.958584,
      "longitude": 19.654148,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1666970752,
      "ems": null
    },
    {
      "latitude": 51.957687,
      "longitude": 19.656601,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1666970756,
      "ems": null
    },
    {
      "latitude": 51.95686,
      "longitude": 19.65925,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1666970760,
      "ems": null
    },
    {
      "latitude": 51.956177,
      "longitude": 19.662399,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1666970764,
      "ems": null
    },
    {
      "latitude": 51.955975,
      "longitude": 19.663486,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1666970765,
      "ems": null
    },
    {
      "latitude": 51.955856,
      "longitude": 19.664307,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1666970769,
      "ems": null
    },
    {
      "latitude": 51.955509,
      "longitude": 19.667803,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1666970771,
      "ems": null
    },
    {
      "latitude": 51.955418,
      "longitude": 19.669373,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1666970773,
      "ems": null
    },
    {
      "latitude": 51.955368,
      "longitude": 19.672119,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1666970777,
      "ems": null
    },
    {
      "latitude": 51.955353,
      "longitude": 19.673157,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1666970778,
      "ems": null
    },
    {
      "latitude": 51.955444,
      "longitude": 19.676437,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1666970782,
      "ems": null
    },
    {
      "latitude": 51.955555,
      "longitude": 19.678162,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1666970784,
      "ems": null
    },
    {
      "latitude": 51.955811,
      "longitude": 19.68071,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1666970787,
      "ems": null
    },
    {
      "latitude": 51.955948,
      "longitude": 19.681778,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1666970789,
      "ems": null
    },
    {
      "latitude": 51.956406,
      "longitude": 19.685059,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1666970793,
      "ems": null
    },
    {
      "latitude": 51.956635,
      "longitude": 19.686279,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1666970794,
      "ems": null
    },
    {
      "latitude": 51.957138,
      "longitude": 19.688913,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1666970798,
      "ems": null
    },
    {
      "latitude": 51.957275,
      "longitude": 19.689713,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1666970799,
      "ems": null
    },
    {
      "latitude": 51.957882,
      "longitude": 19.692444,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666970804,
      "ems": null
    },
    {
      "latitude": 51.959015,
      "longitude": 19.69696,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666970809,
      "ems": null
    },
    {
      "latitude": 51.95961,
      "longitude": 19.699173,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666970813,
      "ems": null
    },
    {
      "latitude": 51.960754,
      "longitude": 19.703064,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1666970818,
      "ems": null
    },
    {
      "latitude": 51.96199,
      "longitude": 19.706879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1666970823,
      "ems": null
    },
    {
      "latitude": 51.963192,
      "longitude": 19.710415,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666970827,
      "ems": null
    },
    {
      "latitude": 51.963913,
      "longitude": 19.712448,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666970831,
      "ems": null
    },
    {
      "latitude": 51.964828,
      "longitude": 19.715118,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666970835,
      "ems": null
    },
    {
      "latitude": 51.967072,
      "longitude": 19.721756,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1666970844,
      "ems": null
    },
    {
      "latitude": 51.969753,
      "longitude": 19.729641,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666970854,
      "ems": null
    },
    {
      "latitude": 51.972408,
      "longitude": 19.736704,
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1666970864,
      "ems": null
    },
    {
      "latitude": 51.974533,
      "longitude": 19.742355,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1666970872,
      "ems": null
    },
    {
      "latitude": 51.976784,
      "longitude": 19.748081,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666970880,
      "ems": null
    },
    {
      "latitude": 51.978973,
      "longitude": 19.753571,
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1666970888,
      "ems": null
    },
    {
      "latitude": 51.981113,
      "longitude": 19.759146,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666970896,
      "ems": null
    },
    {
      "latitude": 51.983276,
      "longitude": 19.765701,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1666970905,
      "ems": null
    },
    {
      "latitude": 51.984558,
      "longitude": 19.769516,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1666970909,
      "ems": null
    },
    {
      "latitude": 51.986839,
      "longitude": 19.776333,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666970918,
      "ems": null
    },
    {
      "latitude": 51.98877,
      "longitude": 19.781799,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666970926,
      "ems": null
    },
    {
      "latitude": 51.991013,
      "longitude": 19.787903,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1666970936,
      "ems": null
    },
    {
      "latitude": 51.994034,
      "longitude": 19.795837,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666970944,
      "ems": null
    },
    {
      "latitude": 51.996094,
      "longitude": 19.80072,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1666970952,
      "ems": null
    },
    {
      "latitude": 51.997501,
      "longitude": 19.803013,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1666970956,
      "ems": null
    },
    {
      "latitude": 51.999454,
      "longitude": 19.80521,
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1666970960,
      "ems": null
    },
    {
      "latitude": 52.000626,
      "longitude": 19.806213,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1666970964,
      "ems": null
    },
    {
      "latitude": 52.00304,
      "longitude": 19.807644,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1666970969,
      "ems": null
    },
    {
      "latitude": 52.005249,
      "longitude": 19.808884,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1666970974,
      "ems": null
    },
    {
      "latitude": 52.007355,
      "longitude": 19.809952,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1666970978,
      "ems": null
    },
    {
      "latitude": 52.009186,
      "longitude": 19.810715,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1666970982,
      "ems": null
    },
    {
      "latitude": 52.011139,
      "longitude": 19.811253,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1666970986,
      "ems": null
    },
    {
      "latitude": 52.013489,
      "longitude": 19.811554,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1666970992,
      "ems": null
    },
    {
      "latitude": 52.015793,
      "longitude": 19.81188,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1666970997,
      "ems": null
    },
    {
      "latitude": 52.017563,
      "longitude": 19.812088,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1666971001,
      "ems": null
    },
    {
      "latitude": 52.019333,
      "longitude": 19.812273,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1666971005,
      "ems": null
    },
    {
      "latitude": 52.021847,
      "longitude": 19.81251,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1666971010,
      "ems": null
    },
    {
      "latitude": 52.025436,
      "longitude": 19.812927,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1666971019,
      "ems": null
    },
    {
      "latitude": 52.029202,
      "longitude": 19.813215,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1666971027,
      "ems": null
    },
    {
      "latitude": 52.031017,
      "longitude": 19.812979,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1666971031,
      "ems": null
    },
    {
      "latitude": 52.032578,
      "longitude": 19.812164,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1666971035,
      "ems": null
    },
    {
      "latitude": 52.033905,
      "longitude": 19.811018,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1666971039,
      "ems": null
    },
    {
      "latitude": 52.03537,
      "longitude": 19.808807,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1666971044,
      "ems": null
    },
    {
      "latitude": 52.036186,
      "longitude": 19.806702,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1666971048,
      "ems": null
    },
    {
      "latitude": 52.03656,
      "longitude": 19.804993,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1666971052,
      "ems": null
    },
    {
      "latitude": 52.036652,
      "longitude": 19.802542,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1666971056,
      "ems": null
    },
    {
      "latitude": 52.036469,
      "longitude": 19.800644,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666971060,
      "ems": null
    },
    {
      "latitude": 52.036148,
      "longitude": 19.799347,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1666971064,
      "ems": null
    },
    {
      "latitude": 52.035114,
      "longitude": 19.796736,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1666971068,
      "ems": null
    },
    {
      "latitude": 52.03418,
      "longitude": 19.795456,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666971072,
      "ems": null
    },
    {
      "latitude": 52.032787,
      "longitude": 19.794382,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1666971076,
      "ems": null
    },
    {
      "latitude": 52.032272,
      "longitude": 19.794146,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1666971077,
      "ems": null
    },
    {
      "latitude": 52.030884,
      "longitude": 19.79393,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1666971081,
      "ems": null
    },
    {
      "latitude": 52.029648,
      "longitude": 19.794083,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1666971084,
      "ems": null
    },
    {
      "latitude": 52.028275,
      "longitude": 19.794464,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1666971087,
      "ems": null
    },
    {
      "latitude": 52.027664,
      "longitude": 19.794773,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1666971089,
      "ems": null
    },
    {
      "latitude": 52.025711,
      "longitude": 19.795872,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1666971094,
      "ems": null
    },
    {
      "latitude": 52.024452,
      "longitude": 19.796892,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666971097,
      "ems": null
    },
    {
      "latitude": 52.023605,
      "longitude": 19.797745,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1666971099,
      "ems": null
    },
    {
      "latitude": 52.022278,
      "longitude": 19.799042,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1666971102,
      "ems": null
    },
    {
      "latitude": 52.021008,
      "longitude": 19.80011,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666971105,
      "ems": null
    },
    {
      "latitude": 52.019806,
      "longitude": 19.801025,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666971108,
      "ems": null
    },
    {
      "latitude": 52.018772,
      "longitude": 19.801601,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1666971112,
      "ems": null
    },
    {
      "latitude": 52.017288,
      "longitude": 19.802017,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1666971114,
      "ems": null
    },
    {
      "latitude": 52.015888,
      "longitude": 19.802073,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1666971118,
      "ems": null
    },
    {
      "latitude": 52.014908,
      "longitude": 19.802094,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1666971120,
      "ems": null
    },
    {
      "latitude": 52.01342,
      "longitude": 19.801836,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1666971124,
      "ems": null
    },
    {
      "latitude": 52.012207,
      "longitude": 19.801712,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1666971127,
      "ems": null
    },
    {
      "latitude": 52.011185,
      "longitude": 19.801601,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1666971129,
      "ems": null
    },
    {
      "latitude": 52.00993,
      "longitude": 19.801365,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1666971132,
      "ems": null
    },
    {
      "latitude": 52.008812,
      "longitude": 19.80113,
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1666971135,
      "ems": null
    },
    {
      "latitude": 52.007507,
      "longitude": 19.800737,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1666971139,
      "ems": null
    },
    {
      "latitude": 52.006344,
      "longitude": 19.800344,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1666971142,
      "ems": null
    },
    {
      "latitude": 52.005226,
      "longitude": 19.800032,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1666971145,
      "ems": null
    },
    {
      "latitude": 52.004059,
      "longitude": 19.799728,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1666971148,
      "ems": null
    },
    {
      "latitude": 52.00346,
      "longitude": 19.799561,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1666971149,
      "ems": null
    },
    {
      "latitude": 52.002411,
      "longitude": 19.799271,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1666971152,
      "ems": null
    },
    {
      "latitude": 52.000061,
      "longitude": 19.798697,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1666971158,
      "ems": null
    },
    {
      "latitude": 51.997101,
      "longitude": 19.798126,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1666971166,
      "ems": null
    },
    {
      "latitude": 51.993961,
      "longitude": 19.79752,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1666971174,
      "ems": null
    },
    {
      "latitude": 51.990936,
      "longitude": 19.795794,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1666971183,
      "ems": null
    },
    {
      "latitude": 51.989677,
      "longitude": 19.794382,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971187,
      "ems": null
    },
    {
      "latitude": 51.98877,
      "longitude": 19.793015,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666971191,
      "ems": null
    },
    {
      "latitude": 51.987862,
      "longitude": 19.790693,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1666971196,
      "ems": null
    },
    {
      "latitude": 51.987488,
      "longitude": 19.788818,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666971200,
      "ems": null
    },
    {
      "latitude": 51.987305,
      "longitude": 19.786301,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1666971204,
      "ems": null
    },
    {
      "latitude": 51.987442,
      "longitude": 19.784393,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1666971208,
      "ems": null
    },
    {
      "latitude": 51.987537,
      "longitude": 19.78363,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1666971209,
      "ems": null
    },
    {
      "latitude": 51.987957,
      "longitude": 19.781668,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1666971213,
      "ems": null
    },
    {
      "latitude": 51.988422,
      "longitude": 19.779236,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1666971217,
      "ems": null
    },
    {
      "latitude": 51.988815,
      "longitude": 19.777374,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1666971221,
      "ems": null
    },
    {
      "latitude": 51.989819,
      "longitude": 19.77492,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1666971226,
      "ems": null
    },
    {
      "latitude": 51.991261,
      "longitude": 19.77335,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1666971230,
      "ems": null
    },
    {
      "latitude": 51.993164,
      "longitude": 19.77272,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1666971234,
      "ems": null
    },
    {
      "latitude": 51.994766,
      "longitude": 19.772873,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1666971237,
      "ems": null
    },
    {
      "latitude": 51.996243,
      "longitude": 19.77335,
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1666971240,
      "ems": null
    },
    {
      "latitude": 51.996708,
      "longitude": 19.773586,
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1666971241,
      "ems": null
    },
    {
      "latitude": 51.998016,
      "longitude": 19.774094,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1666971245,
      "ems": null
    },
    {
      "latitude": 52.000107,
      "longitude": 19.774841,
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1666971249,
      "ems": null
    },
    {
      "latitude": 52.002411,
      "longitude": 19.775696,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1666971254,
      "ems": null
    },
    {
      "latitude": 52.004059,
      "longitude": 19.77623,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1666971258,
      "ems": null
    },
    {
      "latitude": 52.006111,
      "longitude": 19.776882,
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1666971262,
      "ems": null
    },
    {
      "latitude": 52.008408,
      "longitude": 19.777527,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1666971267,
      "ems": null
    },
    {
      "latitude": 52.010674,
      "longitude": 19.777981,
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1666971272,
      "ems": null
    },
    {
      "latitude": 52.012814,
      "longitude": 19.778372,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1666971277,
      "ems": null
    },
    {
      "latitude": 52.015366,
      "longitude": 19.7789,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1666971283,
      "ems": null
    },
    {
      "latitude": 52.017517,
      "longitude": 19.779236,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1666971287,
      "ems": null
    },
    {
      "latitude": 52.019009,
      "longitude": 19.779392,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1666971291,
      "ems": null
    },
    {
      "latitude": 52.022644,
      "longitude": 19.779892,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1666971299,
      "ems": null
    },
    {
      "latitude": 52.027012,
      "longitude": 19.780569,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1666971308,
      "ems": null
    },
    {
      "latitude": 52.031528,
      "longitude": 19.781355,
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1666971319,
      "ems": null
    },
    {
      "latitude": 52.033997,
      "longitude": 19.782061,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1666971323,
      "ems": null
    },
    {
      "latitude": 52.03474,
      "longitude": 19.782454,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1666971327,
      "ems": null
    },
    {
      "latitude": 52.037476,
      "longitude": 19.784851,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1666971331,
      "ems": null
    },
    {
      "latitude": 52.039024,
      "longitude": 19.786926,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1666971335,
      "ems": null
    },
    {
      "latitude": 52.040142,
      "longitude": 19.788809,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1666971338,
      "ems": null
    },
    {
      "latitude": 52.040886,
      "longitude": 19.790537,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1666971340,
      "ems": null
    },
    {
      "latitude": 52.04163,
      "longitude": 19.792576,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1666971344,
      "ems": null
    },
    {
      "latitude": 52.042843,
      "longitude": 19.79854,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1666971350,
      "ems": null
    },
    {
      "latitude": 52.04298,
      "longitude": 19.802542,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1666971355,
      "ems": null
    },
    {
      "latitude": 52.042831,
      "longitude": 19.805298,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1666971359,
      "ems": null
    },
    {
      "latitude": 52.042419,
      "longitude": 19.807968,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1666971362,
      "ems": null
    },
    {
      "latitude": 52.042099,
      "longitude": 19.80957,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1666971365,
      "ems": null
    },
    {
      "latitude": 52.041916,
      "longitude": 19.810333,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1666971365,
      "ems": null
    },
    {
      "latitude": 52.040653,
      "longitude": 19.813765,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1666971371,
      "ems": null
    },
    {
      "latitude": 52.039673,
      "longitude": 19.815445,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1666971375,
      "ems": null
    },
    {
      "latitude": 52.037628,
      "longitude": 19.81761,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1666971379,
      "ems": null
    },
    {
      "latitude": 52.036137,
      "longitude": 19.818394,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1666971383,
      "ems": null
    },
    {
      "latitude": 52.03474,
      "longitude": 19.818552,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1666971387,
      "ems": null
    },
    {
      "latitude": 52.033344,
      "longitude": 19.818552,
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
      "timestamp": 1666971391,
      "ems": null
    },
    {
      "latitude": 52.031391,
      "longitude": 19.818316,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1666971395,
      "ems": null
    },
    {
      "latitude": 52.030319,
      "longitude": 19.818159,
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1666971398,
      "ems": null
    },
    {
      "latitude": 52.02911,
      "longitude": 19.817766,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1666971401,
      "ems": null
    },
    {
      "latitude": 52.028362,
      "longitude": 19.817373,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1666971404,
      "ems": null
    },
    {
      "latitude": 52.026222,
      "longitude": 19.816118,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1666971409,
      "ems": null
    },
    {
      "latitude": 52.025059,
      "longitude": 19.815413,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1666971413,
      "ems": null
    },
    {
      "latitude": 52.023788,
      "longitude": 19.814529,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1666971417,
      "ems": null
    },
    {
      "latitude": 52.022034,
      "longitude": 19.813137,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1666971422,
      "ems": null
    },
    {
      "latitude": 52.021103,
      "longitude": 19.812429,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1666971427,
      "ems": null
    },
    {
      "latitude": 52.018494,
      "longitude": 19.810154,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1666971432,
      "ems": null
    },
    {
      "latitude": 52.01738,
      "longitude": 19.809113,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1666971437,
      "ems": null
    },
    {
      "latitude": 52.015842,
      "longitude": 19.807722,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1666971441,
      "ems": null
    },
    {
      "latitude": 52.014214,
      "longitude": 19.806231,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1666971446,
      "ems": null
    },
    {
      "latitude": 52.011604,
      "longitude": 19.803955,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1666971454,
      "ems": null
    },
    {
      "latitude": 52.0103,
      "longitude": 19.802622,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1666971458,
      "ems": null
    },
    {
      "latitude": 52.009369,
      "longitude": 19.801365,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666971462,
      "ems": null
    },
    {
      "latitude": 52.008865,
      "longitude": 19.800644,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971463,
      "ems": null
    },
    {
      "latitude": 52.007996,
      "longitude": 19.799271,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666971467,
      "ems": null
    },
    {
      "latitude": 52.006943,
      "longitude": 19.797745,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971471,
      "ems": null
    },
    {
      "latitude": 52.006165,
      "longitude": 19.7966,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971473,
      "ems": null
    },
    {
      "latitude": 52.005661,
      "longitude": 19.795837,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971476,
      "ems": null
    },
    {
      "latitude": 52.0047,
      "longitude": 19.794388,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971480,
      "ems": null
    },
    {
      "latitude": 52.003925,
      "longitude": 19.793203,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666971482,
      "ems": null
    },
    {
      "latitude": 52.003086,
      "longitude": 19.791948,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666971485,
      "ems": null
    },
    {
      "latitude": 52.002342,
      "longitude": 19.790771,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971488,
      "ems": null
    },
    {
      "latitude": 52.001175,
      "longitude": 19.789124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971493,
      "ems": null
    },
    {
      "latitude": 51.999596,
      "longitude": 19.786612,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1666971501,
      "ems": null
    },
    {
      "latitude": 51.998665,
      "longitude": 19.784729,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1666971504,
      "ems": null
    },
    {
      "latitude": 51.997787,
      "longitude": 19.782639,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666971508,
      "ems": null
    },
    {
      "latitude": 51.996918,
      "longitude": 19.780502,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1666971513,
      "ems": null
    },
    {
      "latitude": 51.996708,
      "longitude": 19.779942,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666971514,
      "ems": null
    },
    {
      "latitude": 51.995819,
      "longitude": 19.777679,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1666971518,
      "ems": null
    },
    {
      "latitude": 51.994938,
      "longitude": 19.775547,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1666971523,
      "ems": null
    },
    {
      "latitude": 51.994194,
      "longitude": 19.773821,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1666971527,
      "ems": null
    },
    {
      "latitude": 51.992054,
      "longitude": 19.770212,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666971536,
      "ems": null
    },
    {
      "latitude": 51.991058,
      "longitude": 19.768982,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666971540,
      "ems": null
    },
    {
      "latitude": 51.98991,
      "longitude": 19.7677,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1666971544,
      "ems": null
    },
    {
      "latitude": 51.988907,
      "longitude": 19.766541,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666971548,
      "ems": null
    },
    {
      "latitude": 51.987537,
      "longitude": 19.764797,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1666971553,
      "ems": null
    },
    {
      "latitude": 51.986526,
      "longitude": 19.763489,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1666971557,
      "ems": null
    },
    {
      "latitude": 51.985519,
      "longitude": 19.762039,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666971561,
      "ems": null
    },
    {
      "latitude": 51.984375,
      "longitude": 19.760437,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666971565,
      "ems": null
    },
    {
      "latitude": 51.983414,
      "longitude": 19.759064,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666971569,
      "ems": null
    },
    {
      "latitude": 51.98251,
      "longitude": 19.757734,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666971573,
      "ems": null
    },
    {
      "latitude": 51.981533,
      "longitude": 19.756243,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666971577,
      "ems": null
    },
    {
      "latitude": 51.980602,
      "longitude": 19.754831,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1666971581,
      "ems": null
    },
    {
      "latitude": 51.979385,
      "longitude": 19.752884,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1666971586,
      "ems": null
    },
    {
      "latitude": 51.978287,
      "longitude": 19.751129,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1666971591,
      "ems": null
    },
    {
      "latitude": 51.9776,
      "longitude": 19.749908,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666971593,
      "ems": null
    },
    {
      "latitude": 51.976913,
      "longitude": 19.748535,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1666971597,
      "ems": null
    },
    {
      "latitude": 51.976086,
      "longitude": 19.746748,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1666971601,
      "ems": null
    },
    {
      "latitude": 51.975109,
      "longitude": 19.744314,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1666971606,
      "ems": null
    },
    {
      "latitude": 51.974411,
      "longitude": 19.742903,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1666971610,
      "ems": null
    },
    {
      "latitude": 51.974213,
      "longitude": 19.742432,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1666971611,
      "ems": null
    },
    {
      "latitude": 51.972702,
      "longitude": 19.739685,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666971618,
      "ems": null
    },
    {
      "latitude": 51.971336,
      "longitude": 19.73741,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1666971623,
      "ems": null
    },
    {
      "latitude": 51.970268,
      "longitude": 19.735683,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666971627,
      "ems": null
    },
    {
      "latitude": 51.969452,
      "longitude": 19.734497,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666971631,
      "ems": null
    },
    {
      "latitude": 51.96817,
      "longitude": 19.732859,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971635,
      "ems": null
    },
    {
      "latitude": 51.966915,
      "longitude": 19.731289,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1666971639,
      "ems": null
    },
    {
      "latitude": 51.966614,
      "longitude": 19.730911,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666971641,
      "ems": null
    },
    {
      "latitude": 51.965515,
      "longitude": 19.729614,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666971644,
      "ems": null
    },
    {
      "latitude": 51.964462,
      "longitude": 19.728394,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666971648,
      "ems": null
    },
    {
      "latitude": 51.96389,
      "longitude": 19.727678,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666971649,
      "ems": null
    },
    {
      "latitude": 51.960663,
      "longitude": 19.723434,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1666971661,
      "ems": null
    },
    {
      "latitude": 51.958443,
      "longitude": 19.720224,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666971669,
      "ems": null
    },
    {
      "latitude": 51.95755,
      "longitude": 19.718857,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666971673,
      "ems": null
    },
    {
      "latitude": 51.956348,
      "longitude": 19.716928,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666971677,
      "ems": null
    },
    {
      "latitude": 51.955975,
      "longitude": 19.716379,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666971681,
      "ems": null
    },
    {
      "latitude": 51.954346,
      "longitude": 19.713745,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1666971685,
      "ems": null
    },
    {
      "latitude": 51.952194,
      "longitude": 19.710159,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666971694,
      "ems": null
    },
    {
      "latitude": 51.950157,
      "longitude": 19.706648,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666971702,
      "ems": null
    },
    {
      "latitude": 51.948154,
      "longitude": 19.703115,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666971710,
      "ems": null
    },
    {
      "latitude": 51.946106,
      "longitude": 19.699585,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1666971718,
      "ems": null
    },
    {
      "latitude": 51.943966,
      "longitude": 19.696054,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666971728,
      "ems": null
    },
    {
      "latitude": 51.941162,
      "longitude": 19.691696,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971736,
      "ems": null
    },
    {
      "latitude": 51.939075,
      "longitude": 19.688599,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1666971744,
      "ems": null
    },
    {
      "latitude": 51.936005,
      "longitude": 19.684282,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666971755,
      "ems": null
    },
    {
      "latitude": 51.934654,
      "longitude": 19.682556,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971760,
      "ems": null
    },
    {
      "latitude": 51.932697,
      "longitude": 19.680044,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1666971768,
      "ems": null
    },
    {
      "latitude": 51.930557,
      "longitude": 19.677456,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1666971776,
      "ems": null
    },
    {
      "latitude": 51.92767,
      "longitude": 19.673689,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666971786,
      "ems": null
    },
    {
      "latitude": 51.925949,
      "longitude": 19.671255,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666971793,
      "ems": null
    },
    {
      "latitude": 51.92363,
      "longitude": 19.668198,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971802,
      "ems": null
    },
    {
      "latitude": 51.920975,
      "longitude": 19.664612,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666971812,
      "ems": null
    },
    {
      "latitude": 51.918182,
      "longitude": 19.660797,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1666971823,
      "ems": null
    },
    {
      "latitude": 51.915573,
      "longitude": 19.657059,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1666971833,
      "ems": null
    },
    {
      "latitude": 51.914169,
      "longitude": 19.655169,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971838,
      "ems": null
    },
    {
      "latitude": 51.91127,
      "longitude": 19.651413,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1666971849,
      "ems": null
    },
    {
      "latitude": 51.909283,
      "longitude": 19.648813,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971856,
      "ems": null
    },
    {
      "latitude": 51.907471,
      "longitude": 19.646454,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971862,
      "ems": null
    },
    {
      "latitude": 51.905823,
      "longitude": 19.644318,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971868,
      "ems": null
    },
    {
      "latitude": 51.904678,
      "longitude": 19.642639,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1666971873,
      "ems": null
    },
    {
      "latitude": 51.903305,
      "longitude": 19.640503,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666971878,
      "ems": null
    },
    {
      "latitude": 51.902485,
      "longitude": 19.639238,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1666971882,
      "ems": null
    },
    {
      "latitude": 51.901428,
      "longitude": 19.637527,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666971886,
      "ems": null
    },
    {
      "latitude": 51.900532,
      "longitude": 19.636021,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1666971890,
      "ems": null
    },
    {
      "latitude": 51.899551,
      "longitude": 19.634247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1666971894,
      "ems": null
    },
    {
      "latitude": 51.898296,
      "longitude": 19.631863,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1666971899,
      "ems": null
    },
    {
      "latitude": 51.896393,
      "longitude": 19.62822,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1666971908,
      "ems": null
    },
    {
      "latitude": 51.894619,
      "longitude": 19.624722,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1666971916,
      "ems": null
    },
    {
      "latitude": 51.893646,
      "longitude": 19.622345,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1666971921,
      "ems": null
    },
    {
      "latitude": 51.893509,
      "longitude": 19.62204,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1666971922,
      "ems": null
    },
    {
      "latitude": 51.892731,
      "longitude": 19.619577,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1666971926,
      "ems": null
    },
    {
      "latitude": 51.892292,
      "longitude": 19.617844,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666971930,
      "ems": null
    },
    {
      "latitude": 51.892014,
      "longitude": 19.616318,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666971933,
      "ems": null
    },
    {
      "latitude": 51.891781,
      "longitude": 19.614868,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666971936,
      "ems": null
    },
    {
      "latitude": 51.891586,
      "longitude": 19.613491,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666971938,
      "ems": null
    },
    {
      "latitude": 51.891312,
      "longitude": 19.611858,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666971942,
      "ems": null
    },
    {
      "latitude": 51.891083,
      "longitude": 19.610214,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666971945,
      "ems": null
    },
    {
      "latitude": 51.890854,
      "longitude": 19.60874,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666971948,
      "ems": null
    },
    {
      "latitude": 51.890617,
      "longitude": 19.60701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666971951,
      "ems": null
    },
    {
      "latitude": 51.890533,
      "longitude": 19.60644,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666971952,
      "ems": null
    },
    {
      "latitude": 51.890102,
      "longitude": 19.603882,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666971957,
      "ems": null
    },
    {
      "latitude": 51.889893,
      "longitude": 19.602505,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666971959,
      "ems": null
    },
    {
      "latitude": 51.889664,
      "longitude": 19.600946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666971963,
      "ems": null
    },
    {
      "latitude": 51.889172,
      "longitude": 19.597092,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666971970,
      "ems": null
    },
    {
      "latitude": 51.888931,
      "longitude": 19.595081,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1666971974,
      "ems": null
    },
    {
      "latitude": 51.888794,
      "longitude": 19.593374,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666971977,
      "ems": null
    },
    {
      "latitude": 51.888657,
      "longitude": 19.591593,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666971980,
      "ems": null
    },
    {
      "latitude": 51.888569,
      "longitude": 19.58992,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1666971983,
      "ems": null
    },
    {
      "latitude": 51.888474,
      "longitude": 19.588318,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1666971986,
      "ems": null
    },
    {
      "latitude": 51.888382,
      "longitude": 19.586916,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1666971988,
      "ems": null
    },
    {
      "latitude": 51.888016,
      "longitude": 19.583797,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666971994,
      "ems": null
    },
    {
      "latitude": 51.887684,
      "longitude": 19.581985,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666971998,
      "ems": null
    },
    {
      "latitude": 51.887238,
      "longitude": 19.580086,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666972002,
      "ems": null
    },
    {
      "latitude": 51.886642,
      "longitude": 19.578009,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972006,
      "ems": null
    },
    {
      "latitude": 51.886093,
      "longitude": 19.576078,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972010,
      "ems": null
    },
    {
      "latitude": 51.885544,
      "longitude": 19.574223,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1666972014,
      "ems": null
    },
    {
      "latitude": 51.884983,
      "longitude": 19.572449,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1666972018,
      "ems": null
    },
    {
      "latitude": 51.884331,
      "longitude": 19.570389,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972022,
      "ems": null
    },
    {
      "latitude": 51.883865,
      "longitude": 19.568787,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972026,
      "ems": null
    },
    {
      "latitude": 51.883121,
      "longitude": 19.566422,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1666972030,
      "ems": null
    },
    {
      "latitude": 51.882202,
      "longitude": 19.563681,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1666972038,
      "ems": null
    },
    {
      "latitude": 51.881241,
      "longitude": 19.56086,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666972046,
      "ems": null
    },
    {
      "latitude": 51.87941,
      "longitude": 19.555218,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972053,
      "ems": null
    },
    {
      "latitude": 51.878696,
      "longitude": 19.552841,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972058,
      "ems": null
    },
    {
      "latitude": 51.877674,
      "longitude": 19.549026,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972066,
      "ems": null
    },
    {
      "latitude": 51.877121,
      "longitude": 19.547127,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972070,
      "ems": null
    },
    {
      "latitude": 51.876114,
      "longitude": 19.543638,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972077,
      "ems": null
    },
    {
      "latitude": 51.875717,
      "longitude": 19.542007,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666972080,
      "ems": null
    },
    {
      "latitude": 51.875336,
      "longitude": 19.540594,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666972083,
      "ems": null
    },
    {
      "latitude": 51.874603,
      "longitude": 19.537477,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666972089,
      "ems": null
    },
    {
      "latitude": 51.873825,
      "longitude": 19.534433,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972095,
      "ems": null
    },
    {
      "latitude": 51.873093,
      "longitude": 19.531761,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972101,
      "ems": null
    },
    {
      "latitude": 51.872269,
      "longitude": 19.528645,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972107,
      "ems": null
    },
    {
      "latitude": 51.871342,
      "longitude": 19.525528,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972113,
      "ems": null
    },
    {
      "latitude": 51.869991,
      "longitude": 19.521027,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1666972122,
      "ems": null
    },
    {
      "latitude": 51.869621,
      "longitude": 19.519882,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1666972125,
      "ems": null
    },
    {
      "latitude": 51.868973,
      "longitude": 19.518251,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1666972128,
      "ems": null
    },
    {
      "latitude": 51.868423,
      "longitude": 19.51684,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666972131,
      "ems": null
    },
    {
      "latitude": 51.86792,
      "longitude": 19.515579,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666972134,
      "ems": null
    },
    {
      "latitude": 51.867386,
      "longitude": 19.514236,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666972137,
      "ems": null
    },
    {
      "latitude": 51.866779,
      "longitude": 19.512787,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1666972140,
      "ems": null
    },
    {
      "latitude": 51.866226,
      "longitude": 19.511347,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1666972143,
      "ems": null
    },
    {
      "latitude": 51.865711,
      "longitude": 19.509964,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666972146,
      "ems": null
    },
    {
      "latitude": 51.864594,
      "longitude": 19.507217,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1666972152,
      "ems": null
    },
    {
      "latitude": 51.863342,
      "longitude": 19.504072,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1666972158,
      "ems": null
    },
    {
      "latitude": 51.862312,
      "longitude": 19.501266,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666972164,
      "ems": null
    },
    {
      "latitude": 51.861237,
      "longitude": 19.498135,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666972170,
      "ems": null
    },
    {
      "latitude": 51.860218,
      "longitude": 19.495316,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1666972176,
      "ems": null
    },
    {
      "latitude": 51.859131,
      "longitude": 19.492344,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1666972182,
      "ems": null
    },
    {
      "latitude": 51.858074,
      "longitude": 19.489517,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1666972188,
      "ems": null
    },
    {
      "latitude": 51.857025,
      "longitude": 19.486628,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666972194,
      "ems": null
    },
    {
      "latitude": 51.856167,
      "longitude": 19.483719,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666972200,
      "ems": null
    },
    {
      "latitude": 51.855793,
      "longitude": 19.482193,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666972203,
      "ems": null
    },
    {
      "latitude": 51.855469,
      "longitude": 19.480667,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666972206,
      "ems": null
    },
    {
      "latitude": 51.854645,
      "longitude": 19.476532,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666972214,
      "ems": null
    },
    {
      "latitude": 51.854599,
      "longitude": 19.476236,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666972215,
      "ems": null
    },
    {
      "latitude": 51.854324,
      "longitude": 19.474825,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666972218,
      "ems": null
    },
    {
      "latitude": 51.853886,
      "longitude": 19.472809,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666972222,
      "ems": null
    },
    {
      "latitude": 51.853683,
      "longitude": 19.471783,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666972224,
      "ems": null
    },
    {
      "latitude": 51.853363,
      "longitude": 19.470297,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666972227,
      "ems": null
    },
    {
      "latitude": 51.852585,
      "longitude": 19.466364,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666972235,
      "ems": null
    },
    {
      "latitude": 51.851883,
      "longitude": 19.462738,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666972242,
      "ems": null
    },
    {
      "latitude": 51.85128,
      "longitude": 19.46022,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972248,
      "ems": null
    },
    {
      "latitude": 51.850845,
      "longitude": 19.458792,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972250,
      "ems": null
    },
    {
      "latitude": 51.850441,
      "longitude": 19.457397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972253,
      "ems": null
    },
    {
      "latitude": 51.84993,
      "longitude": 19.455748,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1666972257,
      "ems": null
    },
    {
      "latitude": 51.849426,
      "longitude": 19.454189,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666972260,
      "ems": null
    },
    {
      "latitude": 51.848953,
      "longitude": 19.452896,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666972263,
      "ems": null
    },
    {
      "latitude": 51.848438,
      "longitude": 19.451447,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1666972266,
      "ems": null
    },
    {
      "latitude": 51.848053,
      "longitude": 19.45018,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972269,
      "ems": null
    },
    {
      "latitude": 51.846817,
      "longitude": 19.446098,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1666972278,
      "ems": null
    },
    {
      "latitude": 51.846039,
      "longitude": 19.443573,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1666972283,
      "ems": null
    },
    {
      "latitude": 51.844856,
      "longitude": 19.440155,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666972291,
      "ems": null
    },
    {
      "latitude": 51.843971,
      "longitude": 19.437408,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972297,
      "ems": null
    },
    {
      "latitude": 51.843178,
      "longitude": 19.434662,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972303,
      "ems": null
    },
    {
      "latitude": 51.842434,
      "longitude": 19.431915,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666972309,
      "ems": null
    },
    {
      "latitude": 51.84206,
      "longitude": 19.430313,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666972312,
      "ems": null
    },
    {
      "latitude": 51.841736,
      "longitude": 19.428787,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666972315,
      "ems": null
    },
    {
      "latitude": 51.841415,
      "longitude": 19.427094,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666972318,
      "ems": null
    },
    {
      "latitude": 51.841084,
      "longitude": 19.42543,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666972321,
      "ems": null
    },
    {
      "latitude": 51.84082,
      "longitude": 19.4242,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666972323,
      "ems": null
    },
    {
      "latitude": 51.840431,
      "longitude": 19.422379,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666972327,
      "ems": null
    },
    {
      "latitude": 51.839676,
      "longitude": 19.419374,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666972333,
      "ems": null
    },
    {
      "latitude": 51.838898,
      "longitude": 19.41633,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666972339,
      "ems": null
    },
    {
      "latitude": 51.838074,
      "longitude": 19.413214,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972345,
      "ems": null
    },
    {
      "latitude": 51.837639,
      "longitude": 19.411545,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972348,
      "ems": null
    },
    {
      "latitude": 51.837204,
      "longitude": 19.409946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972351,
      "ems": null
    },
    {
      "latitude": 51.836884,
      "longitude": 19.408686,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972353,
      "ems": null
    },
    {
      "latitude": 51.836384,
      "longitude": 19.406967,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972357,
      "ems": null
    },
    {
      "latitude": 51.835499,
      "longitude": 19.403992,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972363,
      "ems": null
    },
    {
      "latitude": 51.834614,
      "longitude": 19.401016,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972369,
      "ems": null
    },
    {
      "latitude": 51.833771,
      "longitude": 19.397846,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666972375,
      "ems": null
    },
    {
      "latitude": 51.833031,
      "longitude": 19.394989,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666972381,
      "ems": null
    },
    {
      "latitude": 51.832146,
      "longitude": 19.391785,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972387,
      "ems": null
    },
    {
      "latitude": 51.831299,
      "longitude": 19.388716,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972393,
      "ems": null
    },
    {
      "latitude": 51.830471,
      "longitude": 19.385681,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972399,
      "ems": null
    },
    {
      "latitude": 51.829632,
      "longitude": 19.382629,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972405,
      "ems": null
    },
    {
      "latitude": 51.828873,
      "longitude": 19.37966,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972411,
      "ems": null
    },
    {
      "latitude": 51.828003,
      "longitude": 19.376678,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666972417,
      "ems": null
    },
    {
      "latitude": 51.827164,
      "longitude": 19.373856,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972423,
      "ems": null
    },
    {
      "latitude": 51.826767,
      "longitude": 19.372683,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666972426,
      "ems": null
    },
    {
      "latitude": 51.826233,
      "longitude": 19.371262,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666972429,
      "ems": null
    },
    {
      "latitude": 51.825581,
      "longitude": 19.369812,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1666972432,
      "ems": null
    },
    {
      "latitude": 51.824932,
      "longitude": 19.368439,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1666972435,
      "ems": null
    },
    {
      "latitude": 51.824387,
      "longitude": 19.367115,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1666972438,
      "ems": null
    },
    {
      "latitude": 51.823627,
      "longitude": 19.363937,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666972444,
      "ems": null
    },
    {
      "latitude": 51.82338,
      "longitude": 19.362438,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666972447,
      "ems": null
    },
    {
      "latitude": 51.823254,
      "longitude": 19.36142,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666972449,
      "ems": null
    },
    {
      "latitude": 51.823116,
      "longitude": 19.360657,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666972451,
      "ems": null
    },
    {
      "latitude": 51.822975,
      "longitude": 19.359283,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666972455,
      "ems": null
    },
    {
      "latitude": 51.822693,
      "longitude": 19.356871,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666972457,
      "ems": null
    },
    {
      "latitude": 51.822464,
      "longitude": 19.354496,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1666972461,
      "ems": null
    },
    {
      "latitude": 51.822327,
      "longitude": 19.35301,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1666972464,
      "ems": null
    },
    {
      "latitude": 51.822281,
      "longitude": 19.352491,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666972467,
      "ems": null
    },
    {
      "latitude": 51.822052,
      "longitude": 19.34967,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666972470,
      "ems": null
    },
    {
      "latitude": 51.821903,
      "longitude": 19.348145,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1666972473,
      "ems": null
    },
    {
      "latitude": 51.821823,
      "longitude": 19.346552,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1666972476,
      "ems": null
    },
    {
      "latitude": 51.821671,
      "longitude": 19.344635,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1666972480,
      "ems": null
    },
    {
      "latitude": 51.821671,
      "longitude": 19.343872,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1666972481,
      "ems": null
    },
    {
      "latitude": 51.821533,
      "longitude": 19.341354,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1666972486,
      "ems": null
    },
    {
      "latitude": 51.821346,
      "longitude": 19.339218,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1666972490,
      "ems": null
    },
    {
      "latitude": 51.821018,
      "longitude": 19.336853,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666972494,
      "ems": null
    },
    {
      "latitude": 51.820724,
      "longitude": 19.335047,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666972498,
      "ems": null
    },
    {
      "latitude": 51.820507,
      "longitude": 19.333572,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666972501,
      "ems": null
    },
    {
      "latitude": 51.820274,
      "longitude": 19.332199,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666972504,
      "ems": null
    },
    {
      "latitude": 51.820084,
      "longitude": 19.330593,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666972507,
      "ems": null
    },
    {
      "latitude": 51.819855,
      "longitude": 19.32896,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666972510,
      "ems": null
    },
    {
      "latitude": 51.819672,
      "longitude": 19.327475,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666972513,
      "ems": null
    },
    {
      "latitude": 51.819443,
      "longitude": 19.325916,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1666972516,
      "ems": null
    },
    {
      "latitude": 51.819214,
      "longitude": 19.324284,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666972519,
      "ems": null
    },
    {
      "latitude": 51.818756,
      "longitude": 19.321388,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666972525,
      "ems": null
    },
    {
      "latitude": 51.818161,
      "longitude": 19.318493,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666972531,
      "ems": null
    },
    {
      "latitude": 51.817856,
      "longitude": 19.317017,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666972534,
      "ems": null
    },
    {
      "latitude": 51.817528,
      "longitude": 19.315414,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666972537,
      "ems": null
    },
    {
      "latitude": 51.817204,
      "longitude": 19.313965,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666972540,
      "ems": null
    },
    {
      "latitude": 51.81683,
      "longitude": 19.312286,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666972543,
      "ems": null
    },
    {
      "latitude": 51.816467,
      "longitude": 19.310846,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666972546,
      "ems": null
    },
    {
      "latitude": 51.816101,
      "longitude": 19.309437,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666972549,
      "ems": null
    },
    {
      "latitude": 51.815712,
      "longitude": 19.307938,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972552,
      "ems": null
    },
    {
      "latitude": 51.815369,
      "longitude": 19.306541,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666972555,
      "ems": null
    },
    {
      "latitude": 51.814957,
      "longitude": 19.305058,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666972558,
      "ems": null
    },
    {
      "latitude": 51.81427,
      "longitude": 19.302216,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666972564,
      "ems": null
    },
    {
      "latitude": 51.813572,
      "longitude": 19.29924,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666972570,
      "ems": null
    },
    {
      "latitude": 51.812759,
      "longitude": 19.296297,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666972576,
      "ems": null
    },
    {
      "latitude": 51.812302,
      "longitude": 19.294739,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1666972579,
      "ems": null
    },
    {
      "latitude": 51.811707,
      "longitude": 19.293402,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1666972582,
      "ems": null
    },
    {
      "latitude": 51.811066,
      "longitude": 19.29229,
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666972585,
      "ems": null
    },
    {
      "latitude": 51.810314,
      "longitude": 19.291306,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1666972588,
      "ems": null
    },
    {
      "latitude": 51.809334,
      "longitude": 19.290543,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1666972591,
      "ems": null
    },
    {
      "latitude": 51.808266,
      "longitude": 19.290085,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1666972594,
      "ems": null
    },
    {
      "latitude": 51.80722,
      "longitude": 19.289913,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1666972597,
      "ems": null
    },
    {
      "latitude": 51.806122,
      "longitude": 19.290009,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1666972600,
      "ems": null
    },
    {
      "latitude": 51.805008,
      "longitude": 19.290161,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1666972603,
      "ems": null
    },
    {
      "latitude": 51.803741,
      "longitude": 19.290434,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1666972606,
      "ems": null
    },
    {
      "latitude": 51.80254,
      "longitude": 19.290771,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1666972609,
      "ems": null
    },
    {
      "latitude": 51.801422,
      "longitude": 19.291077,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1666972612,
      "ems": null
    },
    {
      "latitude": 51.80035,
      "longitude": 19.291382,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1666972615,
      "ems": null
    },
    {
      "latitude": 51.79921,
      "longitude": 19.291843,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1666972618,
      "ems": null
    },
    {
      "latitude": 51.798111,
      "longitude": 19.292585,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1666972621,
      "ems": null
    },
    {
      "latitude": 51.797001,
      "longitude": 19.293442,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1666972624,
      "ems": null
    },
    {
      "latitude": 51.795929,
      "longitude": 19.294357,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666972627,
      "ems": null
    },
    {
      "latitude": 51.794998,
      "longitude": 19.295185,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1666972630,
      "ems": null
    },
    {
      "latitude": 51.793854,
      "longitude": 19.296076,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1666972633,
      "ems": null
    },
    {
      "latitude": 51.792892,
      "longitude": 19.296967,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666972636,
      "ems": null
    },
    {
      "latitude": 51.791832,
      "longitude": 19.297943,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1666972639,
      "ems": null
    },
    {
      "latitude": 51.790806,
      "longitude": 19.298935,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1666972642,
      "ems": null
    },
    {
      "latitude": 51.789734,
      "longitude": 19.300083,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1666972645,
      "ems": null
    },
    {
      "latitude": 51.788773,
      "longitude": 19.301048,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666972648,
      "ems": null
    },
    {
      "latitude": 51.786572,
      "longitude": 19.302521,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1666972654,
      "ems": null
    },
    {
      "latitude": 51.785267,
      "longitude": 19.302902,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1666972657,
      "ems": null
    },
    {
      "latitude": 51.783966,
      "longitude": 19.30336,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1666972661,
      "ems": null
    },
    {
      "latitude": 51.782913,
      "longitude": 19.303795,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1666972663,
      "ems": null
    },
    {
      "latitude": 51.781631,
      "longitude": 19.304388,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1666972666,
      "ems": null
    },
    {
      "latitude": 51.780521,
      "longitude": 19.305038,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666972670,
      "ems": null
    },
    {
      "latitude": 51.779404,
      "longitude": 19.305878,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1666972672,
      "ems": null
    },
    {
      "latitude": 51.777401,
      "longitude": 19.30809,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666972678,
      "ems": null
    },
    {
      "latitude": 51.776329,
      "longitude": 19.30954,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1666972681,
      "ems": null
    },
    {
      "latitude": 51.775314,
      "longitude": 19.310846,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1666972685,
      "ems": null
    },
    {
      "latitude": 51.774376,
      "longitude": 19.312134,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1666972687,
      "ems": null
    },
    {
      "latitude": 51.773346,
      "longitude": 19.313519,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1666972691,
      "ems": null
    },
    {
      "latitude": 51.772419,
      "longitude": 19.31488,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1666972693,
      "ems": null
    },
    {
      "latitude": 51.771469,
      "longitude": 19.316339,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1666972696,
      "ems": null
    },
    {
      "latitude": 51.770557,
      "longitude": 19.317703,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1666972699,
      "ems": null
    },
    {
      "latitude": 51.769592,
      "longitude": 19.319309,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1666972703,
      "ems": null
    },
    {
      "latitude": 51.768768,
      "longitude": 19.320572,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1666972706,
      "ems": null
    },
    {
      "latitude": 51.767857,
      "longitude": 19.322128,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1666972708,
      "ems": null
    },
    {
      "latitude": 51.766891,
      "longitude": 19.323614,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1666972712,
      "ems": null
    },
    {
      "latitude": 51.766022,
      "longitude": 19.3251,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1666972714,
      "ems": null
    },
    {
      "latitude": 51.764145,
      "longitude": 19.327921,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1666972721,
      "ems": null
    },
    {
      "latitude": 51.762272,
      "longitude": 19.330597,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1666972727,
      "ems": null
    },
    {
      "latitude": 51.7612,
      "longitude": 19.332047,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1666972730,
      "ems": null
    },
    {
      "latitude": 51.760178,
      "longitude": 19.333267,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666972733,
      "ems": null
    },
    {
      "latitude": 51.759293,
      "longitude": 19.334454,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666972735,
      "ems": null
    },
    {
      "latitude": 51.758175,
      "longitude": 19.335785,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1666972739,
      "ems": null
    },
    {
      "latitude": 51.757233,
      "longitude": 19.336903,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1666972742,
      "ems": null
    },
    {
      "latitude": 51.756218,
      "longitude": 19.338074,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1666972745,
      "ems": null
    },
    {
      "latitude": 51.75515,
      "longitude": 19.339142,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1666972748,
      "ems": null
    },
    {
      "latitude": 51.754032,
      "longitude": 19.340286,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1666972751,
      "ems": null
    },
    {
      "latitude": 51.753021,
      "longitude": 19.341282,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1666972754,
      "ems": null
    },
    {
      "latitude": 51.751923,
      "longitude": 19.342247,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1666972757,
      "ems": null
    },
    {
      "latitude": 51.75082,
      "longitude": 19.343262,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1666972760,
      "ems": null
    },
    {
      "latitude": 51.749794,
      "longitude": 19.344177,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1666972763,
      "ems": null
    },
    {
      "latitude": 51.748676,
      "longitude": 19.345322,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1666972766,
      "ems": null
    },
    {
      "latitude": 51.746677,
      "longitude": 19.34761,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1666972772,
      "ems": null
    },
    {
      "latitude": 51.745651,
      "longitude": 19.348928,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1666972775,
      "ems": null
    },
    {
      "latitude": 51.744644,
      "longitude": 19.350487,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1666972778,
      "ems": null
    },
    {
      "latitude": 51.743835,
      "longitude": 19.352036,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1666972781,
      "ems": null
    },
    {
      "latitude": 51.743137,
      "longitude": 19.35379,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1666972784,
      "ems": null
    },
    {
      "latitude": 51.742447,
      "longitude": 19.356203,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1666972787,
      "ems": null
    },
    {
      "latitude": 51.742081,
      "longitude": 19.358133,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1666972790,
      "ems": null
    },
    {
      "latitude": 51.741852,
      "longitude": 19.360434,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1666972793,
      "ems": null
    },
    {
      "latitude": 51.74176,
      "longitude": 19.36281,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1666972796,
      "ems": null
    },
    {
      "latitude": 51.741787,
      "longitude": 19.365158,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1666972799,
      "ems": null
    },
    {
      "latitude": 51.741974,
      "longitude": 19.367981,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1666972802,
      "ems": null
    },
    {
      "latitude": 51.742264,
      "longitude": 19.370306,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1666972805,
      "ems": null
    },
    {
      "latitude": 51.74263,
      "longitude": 19.372906,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1666972808,
      "ems": null
    },
    {
      "latitude": 51.743046,
      "longitude": 19.375229,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1666972811,
      "ems": null
    },
    {
      "latitude": 51.743591,
      "longitude": 19.377655,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666972814,
      "ems": null
    },
    {
      "latitude": 51.744049,
      "longitude": 19.379808,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666972817,
      "ems": null
    },
    {
      "latitude": 51.744644,
      "longitude": 19.382111,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666972820,
      "ems": null
    },
    {
      "latitude": 51.745281,
      "longitude": 19.38446,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666972823,
      "ems": null
    },
    {
      "latitude": 51.745838,
      "longitude": 19.386673,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666972826,
      "ems": null
    },
    {
      "latitude": 51.746384,
      "longitude": 19.388641,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666972829,
      "ems": null
    },
    {
      "latitude": 51.747002,
      "longitude": 19.390793,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1666972832,
      "ems": null
    },
    {
      "latitude": 51.7477,
      "longitude": 19.393158,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666972835,
      "ems": null
    },
    {
      "latitude": 51.748169,
      "longitude": 19.394953,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666972838,
      "ems": null
    },
    {
      "latitude": 51.748672,
      "longitude": 19.396809,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1666972841,
      "ems": null
    },
    {
      "latitude": 51.74968,
      "longitude": 19.400518,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1666972847,
      "ems": null
    },
    {
      "latitude": 51.750687,
      "longitude": 19.404676,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666972853,
      "ems": null
    },
    {
      "latitude": 51.751564,
      "longitude": 19.408417,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666972859,
      "ems": null
    },
    {
      "latitude": 51.752449,
      "longitude": 19.412155,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666972865,
      "ems": null
    },
    {
      "latitude": 51.753426,
      "longitude": 19.416046,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666972871,
      "ems": null
    },
    {
      "latitude": 51.753799,
      "longitude": 19.417877,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1666972874,
      "ems": null
    },
    {
      "latitude": 51.754124,
      "longitude": 19.419708,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666972877,
      "ems": null
    },
    {
      "latitude": 51.75444,
      "longitude": 19.4216,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1666972880,
      "ems": null
    },
    {
      "latitude": 51.754684,
      "longitude": 19.423218,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666972883,
      "ems": null
    },
    {
      "latitude": 51.754852,
      "longitude": 19.425016,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1666972886,
      "ems": null
    },
    {
      "latitude": 51.754944,
      "longitude": 19.426352,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1666972889,
      "ems": null
    },
    {
      "latitude": 51.755127,
      "longitude": 19.428949,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666972892,
      "ems": null
    },
    {
      "latitude": 51.756081,
      "longitude": 19.431839,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1666972898,
      "ems": null
    },
    {
      "latitude": 51.756405,
      "longitude": 19.432373,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1666972901,
      "ems": null
    },
    {
      "latitude": 51.757965,
      "longitude": 19.433701,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1666972904,
      "ems": null
    },
    {
      "latitude": 51.759247,
      "longitude": 19.433849,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1666972907,
      "ems": null
    },
    {
      "latitude": 51.760036,
      "longitude": 19.433441,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1666972910,
      "ems": null
    },
    {
      "latitude": 51.760803,
      "longitude": 19.43244,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1666972913,
      "ems": null
    },
    {
      "latitude": 51.761215,
      "longitude": 19.431177,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1666972916,
      "ems": null
    },
    {
      "latitude": 51.761295,
      "longitude": 19.429703,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1666972920,
      "ems": null
    },
    {
      "latitude": 51.761078,
      "longitude": 19.428728,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666972922,
      "ems": null
    },
    {
      "latitude": 51.760502,
      "longitude": 19.427872,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1666972925,
      "ems": null
    },
    {
      "latitude": 51.75975,
      "longitude": 19.427614,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1666972928,
      "ems": null
    },
    {
      "latitude": 51.75906,
      "longitude": 19.427719,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1666972932,
      "ems": null
    },
    {
      "latitude": 51.758129,
      "longitude": 19.428101,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1666972934,
      "ems": null
    },
    {
      "latitude": 51.757141,
      "longitude": 19.428579,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1666972937,
      "ems": null
    },
    {
      "latitude": 51.756134,
      "longitude": 19.429098,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1666972941,
      "ems": null
    },
    {
      "latitude": 51.75531,
      "longitude": 19.42947,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1666972943,
      "ems": null
    },
    {
      "latitude": 51.754257,
      "longitude": 19.429989,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1666972947,
      "ems": null
    },
    {
      "latitude": 51.752682,
      "longitude": 19.430847,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1666972952,
      "ems": null
    },
    {
      "latitude": 51.751564,
      "longitude": 19.431381,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1666972956,
      "ems": null
    },
    {
      "latitude": 51.750309,
      "longitude": 19.432144,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1666972960,
      "ems": null
    },
    {
      "latitude": 51.749191,
      "longitude": 19.432907,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666972964,
      "ems": null
    },
    {
      "latitude": 51.748306,
      "longitude": 19.433441,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1666972968,
      "ems": null
    },
    {
      "latitude": 51.747025,
      "longitude": 19.434296,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666972972,
      "ems": null
    },
    {
      "latitude": 51.746162,
      "longitude": 19.434891,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666972976,
      "ems": null
    },
    {
      "latitude": 51.744953,
      "longitude": 19.43573,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666972980,
      "ems": null
    },
    {
      "latitude": 51.743046,
      "longitude": 19.437027,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666972988,
      "ems": null
    },
    {
      "latitude": 51.740799,
      "longitude": 19.438452,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1666972995,
      "ems": null
    },
    {
      "latitude": 51.739014,
      "longitude": 19.439566,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1666973001,
      "ems": null
    },
    {
      "latitude": 51.73732,
      "longitude": 19.440384,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1666973007,
      "ems": null
    },
    {
      "latitude": 51.73645,
      "longitude": 19.440531,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1666973009,
      "ems": null
    },
    {
      "latitude": 51.735924,
      "longitude": 19.44046,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1666973012,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.440155,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1666973016,
      "ems": null
    },
    {
      "latitude": 51.733921,
      "longitude": 19.43985,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1666973018,
      "ems": null
    },
    {
      "latitude": 51.732944,
      "longitude": 19.439316,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1666973022,
      "ems": null
    },
    {
      "latitude": 51.732292,
      "longitude": 19.438782,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1666973025,
      "ems": null
    },
    {
      "latitude": 51.73164,
      "longitude": 19.438095,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1666973028,
      "ems": null
    },
    {
      "latitude": 51.730942,
      "longitude": 19.437103,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1666973031,
      "ems": null
    },
    {
      "latitude": 51.730476,
      "longitude": 19.436264,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1666973033,
      "ems": null
    },
    {
      "latitude": 51.729965,
      "longitude": 19.434891,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1666973037,
      "ems": null
    },
    {
      "latitude": 51.729721,
      "longitude": 19.433775,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973039,
      "ems": null
    },
    {
      "latitude": 51.729492,
      "longitude": 19.432735,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973042,
      "ems": null
    },
    {
      "latitude": 51.729313,
      "longitude": 19.431992,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973044,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.430618,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973048,
      "ems": null
    },
    {
      "latitude": 51.728519,
      "longitude": 19.428711,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666973053,
      "ems": null
    },
    {
      "latitude": 51.728104,
      "longitude": 19.42688,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973058,
      "ems": null
    },
    {
      "latitude": 51.72757,
      "longitude": 19.424274,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666973063,
      "ems": null
    },
    {
      "latitude": 51.727203,
      "longitude": 19.42264,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666973067,
      "ems": null
    },
    {
      "latitude": 51.726704,
      "longitude": 19.420395,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666973072,
      "ems": null
    },
    {
      "latitude": 51.726242,
      "longitude": 19.418037,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973077,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.41507,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973085,
      "ems": null
    },
    {
      "latitude": 51.724869,
      "longitude": 19.411951,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973092,
      "ems": null
    },
    {
      "latitude": 51.723866,
      "longitude": 19.407349,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666973102,
      "ems": null
    },
    {
      "latitude": 51.723587,
      "longitude": 19.406128,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973105,
      "ems": null
    },
    {
      "latitude": 51.719536,
      "longitude": 19.387054,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666973151,
      "ems": null
    },
    {
      "latitude": 51.719116,
      "longitude": 19.38446,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666973156,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.381516,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666973163,
      "ems": null
    },
    {
      "latitude": 51.71814,
      "longitude": 19.379578,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973168,
      "ems": null
    },
    {
      "latitude": 51.717674,
      "longitude": 19.377747,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666973172,
      "ems": null
    },
    {
      "latitude": 51.717361,
      "longitude": 19.376469,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973175,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.374847,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973178,
      "ems": null
    },
    {
      "latitude": 51.716721,
      "longitude": 19.373648,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973181,
      "ems": null
    },
    {
      "latitude": 51.716446,
      "longitude": 19.372311,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973184,
      "ems": null
    },
    {
      "latitude": 51.716183,
      "longitude": 19.371109,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973187,
      "ems": null
    },
    {
      "latitude": 51.715759,
      "longitude": 19.36845,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1666973193,
      "ems": null
    },
    {
      "latitude": 51.715672,
      "longitude": 19.367065,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1666973196,
      "ems": null
    },
    {
      "latitude": 51.715672,
      "longitude": 19.365387,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1666973200,
      "ems": null
    },
    {
      "latitude": 51.715767,
      "longitude": 19.36409,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1666973202,
      "ems": null
    },
    {
      "latitude": 51.715942,
      "longitude": 19.362736,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1666973205,
      "ems": null
    },
    {
      "latitude": 51.716232,
      "longitude": 19.361191,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1666973209,
      "ems": null
    },
    {
      "latitude": 51.716602,
      "longitude": 19.35997,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1666973211,
      "ems": null
    },
    {
      "latitude": 51.717209,
      "longitude": 19.358597,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1666973215,
      "ems": null
    },
    {
      "latitude": 51.717766,
      "longitude": 19.357758,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1666973217,
      "ems": null
    },
    {
      "latitude": 51.718792,
      "longitude": 19.356613,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1666973221,
      "ems": null
    },
    {
      "latitude": 51.71991,
      "longitude": 19.35585,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1666973224,
      "ems": null
    },
    {
      "latitude": 51.720932,
      "longitude": 19.355392,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1666973227,
      "ems": null
    },
    {
      "latitude": 51.722031,
      "longitude": 19.355089,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1666973229,
      "ems": null
    },
    {
      "latitude": 51.723083,
      "longitude": 19.354792,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1666973232,
      "ems": null
    },
    {
      "latitude": 51.724564,
      "longitude": 19.354401,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1666973235,
      "ems": null
    },
    {
      "latitude": 51.725262,
      "longitude": 19.354248,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1666973238,
      "ems": null
    },
    {
      "latitude": 51.726658,
      "longitude": 19.353867,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1666973240,
      "ems": null
    },
    {
      "latitude": 51.728439,
      "longitude": 19.353382,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1666973244,
      "ems": null
    },
    {
      "latitude": 51.729538,
      "longitude": 19.353085,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1666973248,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.35257,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1666973252,
      "ems": null
    },
    {
      "latitude": 51.7332,
      "longitude": 19.352491,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1666973254,
      "ems": null
    },
    {
      "latitude": 51.734852,
      "longitude": 19.352875,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1666973258,
      "ems": null
    },
    {
      "latitude": 51.736313,
      "longitude": 19.35368,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1666973261,
      "ems": null
    },
    {
      "latitude": 51.737507,
      "longitude": 19.354706,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1666973263,
      "ems": null
    },
    {
      "latitude": 51.738903,
      "longitude": 19.356537,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1666973267,
      "ems": null
    },
    {
      "latitude": 51.740295,
      "longitude": 19.359098,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1666973271,
      "ems": null
    },
    {
      "latitude": 51.741508,
      "longitude": 19.362411,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1666973275,
      "ems": null
    },
    {
      "latitude": 51.742035,
      "longitude": 19.364592,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666973278,
      "ems": null
    },
    {
      "latitude": 51.742626,
      "longitude": 19.366989,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666973281,
      "ems": null
    },
    {
      "latitude": 51.743183,
      "longitude": 19.369507,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666973284,
      "ems": null
    },
    {
      "latitude": 51.743683,
      "longitude": 19.371866,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1666973287,
      "ems": null
    },
    {
      "latitude": 51.744114,
      "longitude": 19.374237,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666973290,
      "ems": null
    },
    {
      "latitude": 51.744534,
      "longitude": 19.376678,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666973293,
      "ems": null
    },
    {
      "latitude": 51.74501,
      "longitude": 19.37929,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666973296,
      "ems": null
    },
    {
      "latitude": 51.745464,
      "longitude": 19.38179,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666973299,
      "ems": null
    },
    {
      "latitude": 51.74593,
      "longitude": 19.384384,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666973302,
      "ems": null
    },
    {
      "latitude": 51.746349,
      "longitude": 19.386749,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1666973305,
      "ems": null
    },
    {
      "latitude": 51.746677,
      "longitude": 19.388809,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1666973308,
      "ems": null
    },
    {
      "latitude": 51.747047,
      "longitude": 19.391174,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1666973311,
      "ems": null
    },
    {
      "latitude": 51.747421,
      "longitude": 19.393768,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666973314,
      "ems": null
    },
    {
      "latitude": 51.7477,
      "longitude": 19.395981,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666973317,
      "ems": null
    },
    {
      "latitude": 51.74826,
      "longitude": 19.400024,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1666973323,
      "ems": null
    },
    {
      "latitude": 51.748489,
      "longitude": 19.402004,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1666973326,
      "ems": null
    },
    {
      "latitude": 51.748718,
      "longitude": 19.404156,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1666973329,
      "ems": null
    },
    {
      "latitude": 51.748901,
      "longitude": 19.40616,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1666973332,
      "ems": null
    },
    {
      "latitude": 51.749096,
      "longitude": 19.408035,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1666973335,
      "ems": null
    },
    {
      "latitude": 51.749237,
      "longitude": 19.410019,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1666973338,
      "ems": null
    },
    {
      "latitude": 51.749424,
      "longitude": 19.412231,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1666973341,
      "ems": null
    },
    {
      "latitude": 51.749542,
      "longitude": 19.414326,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1666973344,
      "ems": null
    },
    {
      "latitude": 51.749561,
      "longitude": 19.416733,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1666973347,
      "ems": null
    },
    {
      "latitude": 51.749424,
      "longitude": 19.418564,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1666973350,
      "ems": null
    },
    {
      "latitude": 51.749084,
      "longitude": 19.420635,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1666973353,
      "ems": null
    },
    {
      "latitude": 51.748581,
      "longitude": 19.422565,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1666973356,
      "ems": null
    },
    {
      "latitude": 51.748028,
      "longitude": 19.424057,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1666973359,
      "ems": null
    },
    {
      "latitude": 51.747253,
      "longitude": 19.425684,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1666973362,
      "ems": null
    },
    {
      "latitude": 51.746521,
      "longitude": 19.426947,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1666973365,
      "ems": null
    },
    {
      "latitude": 51.745697,
      "longitude": 19.428177,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1666973368,
      "ems": null
    },
    {
      "latitude": 51.745094,
      "longitude": 19.429016,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1666973371,
      "ems": null
    },
    {
      "latitude": 51.744022,
      "longitude": 19.430389,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1666973375,
      "ems": null
    },
    {
      "latitude": 51.743233,
      "longitude": 19.431305,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1666973377,
      "ems": null
    },
    {
      "latitude": 51.742401,
      "longitude": 19.432217,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1666973380,
      "ems": null
    },
    {
      "latitude": 51.741486,
      "longitude": 19.433182,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1666973384,
      "ems": null
    },
    {
      "latitude": 51.740616,
      "longitude": 19.433924,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666973386,
      "ems": null
    },
    {
      "latitude": 51.739788,
      "longitude": 19.434662,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666973389,
      "ems": null
    },
    {
      "latitude": 51.738922,
      "longitude": 19.435261,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1666973392,
      "ems": null
    },
    {
      "latitude": 51.738098,
      "longitude": 19.435854,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666973395,
      "ems": null
    },
    {
      "latitude": 51.737133,
      "longitude": 19.436493,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1666973399,
      "ems": null
    },
    {
      "latitude": 51.736389,
      "longitude": 19.436951,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1666973401,
      "ems": null
    },
    {
      "latitude": 51.73555,
      "longitude": 19.437408,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1666973404,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.43771,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1666973407,
      "ems": null
    },
    {
      "latitude": 51.733643,
      "longitude": 19.43779,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1666973411,
      "ems": null
    },
    {
      "latitude": 51.732803,
      "longitude": 19.437637,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1666973414,
      "ems": null
    },
    {
      "latitude": 51.73201,
      "longitude": 19.437189,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1666973417,
      "ems": null
    },
    {
      "latitude": 51.731323,
      "longitude": 19.436447,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1666973420,
      "ems": null
    },
    {
      "latitude": 51.730801,
      "longitude": 19.43573,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1666973423,
      "ems": null
    },
    {
      "latitude": 51.730289,
      "longitude": 19.434738,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1666973426,
      "ems": null
    },
    {
      "latitude": 51.729965,
      "longitude": 19.433823,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1666973429,
      "ems": null
    },
    {
      "latitude": 51.72963,
      "longitude": 19.43281,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666973431,
      "ems": null
    },
    {
      "latitude": 51.729404,
      "longitude": 19.431915,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666973434,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.430618,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973438,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 19.429626,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973441,
      "ems": null
    },
    {
      "latitude": 51.728615,
      "longitude": 19.428558,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973444,
      "ems": null
    },
    {
      "latitude": 51.728348,
      "longitude": 19.427614,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1666973446,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.426804,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666973449,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.42543,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973453,
      "ems": null
    },
    {
      "latitude": 51.727661,
      "longitude": 19.424644,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666973454,
      "ems": null
    },
    {
      "latitude": 51.727264,
      "longitude": 19.422913,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973459,
      "ems": null
    },
    {
      "latitude": 51.727066,
      "longitude": 19.421898,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973461,
      "ems": null
    },
    {
      "latitude": 51.726746,
      "longitude": 19.420488,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973465,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.419077,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973468,
      "ems": null
    },
    {
      "latitude": 51.725636,
      "longitude": 19.415283,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666973477,
      "ems": null
    },
    {
      "latitude": 51.725189,
      "longitude": 19.413361,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666973483,
      "ems": null
    },
    {
      "latitude": 51.72419,
      "longitude": 19.408875,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666973493,
      "ems": null
    },
    {
      "latitude": 51.724007,
      "longitude": 19.407959,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666973495,
      "ems": null
    },
    {
      "latitude": 51.721893,
      "longitude": 19.398293,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666973521,
      "ems": null
    },
    {
      "latitude": 51.721027,
      "longitude": 19.393845,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973531,
      "ems": null
    },
    {
      "latitude": 51.720654,
      "longitude": 19.392471,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666973534,
      "ems": null
    },
    {
      "latitude": 51.720108,
      "longitude": 19.390127,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973540,
      "ems": null
    },
    {
      "latitude": 51.719582,
      "longitude": 19.387894,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973545,
      "ems": null
    },
    {
      "latitude": 51.719025,
      "longitude": 19.385376,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666973552,
      "ems": null
    },
    {
      "latitude": 51.718697,
      "longitude": 19.38324,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666973558,
      "ems": null
    },
    {
      "latitude": 51.718464,
      "longitude": 19.381714,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1666973561,
      "ems": null
    },
    {
      "latitude": 51.718277,
      "longitude": 19.380625,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1666973563,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 19.379215,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666973566,
      "ems": null
    },
    {
      "latitude": 51.717957,
      "longitude": 19.378176,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1666973569,
      "ems": null
    },
    {
      "latitude": 51.717819,
      "longitude": 19.37669,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1666973573,
      "ems": null
    },
    {
      "latitude": 51.717682,
      "longitude": 19.375355,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1666973576,
      "ems": null
    },
    {
      "latitude": 51.717163,
      "longitude": 19.373322,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1666973582,
      "ems": null
    },
    {
      "latitude": 51.716698,
      "longitude": 19.372482,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1666973585,
      "ems": null
    },
    {
      "latitude": 51.716137,
      "longitude": 19.371948,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1666973588,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 19.37142,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1666973591,
      "ems": null
    },
    {
      "latitude": 51.714615,
      "longitude": 19.371124,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1666973594,
      "ems": null
    },
    {
      "latitude": 51.713928,
      "longitude": 19.370975,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1666973597,
      "ems": null
    },
    {
      "latitude": 51.713112,
      "longitude": 19.370956,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1666973600,
      "ems": null
    },
    {
      "latitude": 51.712322,
      "longitude": 19.371109,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1666973603,
      "ems": null
    },
    {
      "latitude": 51.711437,
      "longitude": 19.37149,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1666973606,
      "ems": null
    },
    {
      "latitude": 51.710724,
      "longitude": 19.371941,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666973609,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.372534,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1666973612,
      "ems": null
    },
    {
      "latitude": 51.709061,
      "longitude": 19.373169,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1666973615,
      "ems": null
    },
    {
      "latitude": 51.708176,
      "longitude": 19.373932,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1666973618,
      "ems": null
    },
    {
      "latitude": 51.707294,
      "longitude": 19.374771,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1666973621,
      "ems": null
    },
    {
      "latitude": 51.706547,
      "longitude": 19.375534,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1666973624,
      "ems": null
    },
    {
      "latitude": 51.705616,
      "longitude": 19.376678,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1666973627,
      "ems": null
    },
    {
      "latitude": 51.704964,
      "longitude": 19.377899,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1666973630,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.379425,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1666973633,
      "ems": null
    },
    {
      "latitude": 51.703766,
      "longitude": 19.381367,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1666973636,
      "ems": null
    },
    {
      "latitude": 51.7034,
      "longitude": 19.383148,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1666973639,
      "ems": null
    },
    {
      "latitude": 51.703125,
      "longitude": 19.385525,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1666973642,
      "ems": null
    },
    {
      "latitude": 51.702988,
      "longitude": 19.387676,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1666973645,
      "ems": null
    },
    {
      "latitude": 51.703011,
      "longitude": 19.389572,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1666973648,
      "ems": null
    },
    {
      "latitude": 51.703033,
      "longitude": 19.390423,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1666973649,
      "ems": null
    },
    {
      "latitude": 51.703491,
      "longitude": 19.39369,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1666973653,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.396288,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666973657,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 19.398193,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1666973660,
      "ems": null
    },
    {
      "latitude": 51.706131,
      "longitude": 19.400482,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1666973663,
      "ems": null
    },
    {
      "latitude": 51.707108,
      "longitude": 19.40239,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1666973666,
      "ems": null
    },
    {
      "latitude": 51.707977,
      "longitude": 19.404305,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1666973669,
      "ems": null
    },
    {
      "latitude": 51.708969,
      "longitude": 19.406281,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1666973672,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.408239,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1666973675,
      "ems": null
    },
    {
      "latitude": 51.710644,
      "longitude": 19.410172,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1666973678,
      "ems": null
    },
    {
      "latitude": 51.711227,
      "longitude": 19.4121,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1666973681,
      "ems": null
    },
    {
      "latitude": 51.711914,
      "longitude": 19.414549,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666973684,
      "ems": null
    },
    {
      "latitude": 51.712372,
      "longitude": 19.416405,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666973687,
      "ems": null
    },
    {
      "latitude": 51.712967,
      "longitude": 19.418928,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666973690,
      "ems": null
    },
    {
      "latitude": 51.713436,
      "longitude": 19.420929,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666973693,
      "ems": null
    },
    {
      "latitude": 51.713997,
      "longitude": 19.42337,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1666973696,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.425354,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666973699,
      "ems": null
    },
    {
      "latitude": 51.715027,
      "longitude": 19.427984,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666973702,
      "ems": null
    },
    {
      "latitude": 51.715534,
      "longitude": 19.430237,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1666973705,
      "ems": null
    },
    {
      "latitude": 51.715858,
      "longitude": 19.432068,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1666973708,
      "ems": null
    },
    {
      "latitude": 51.716171,
      "longitude": 19.434443,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666973711,
      "ems": null
    },
    {
      "latitude": 51.716465,
      "longitude": 19.436646,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "timestamp": 1666973714,
      "ems": null
    },
    {
      "latitude": 51.716675,
      "longitude": 19.438675,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1666973717,
      "ems": null
    },
    {
      "latitude": 51.716904,
      "longitude": 19.44068,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1666973720,
      "ems": null
    },
    {
      "latitude": 51.717087,
      "longitude": 19.442757,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1666973723,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.445059,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1666973726,
      "ems": null
    },
    {
      "latitude": 51.717361,
      "longitude": 19.446692,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1666973729,
      "ems": null
    },
    {
      "latitude": 51.717499,
      "longitude": 19.449141,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1666973732,
      "ems": null
    },
    {
      "latitude": 51.717533,
      "longitude": 19.449768,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1666973733,
      "ems": null
    },
    {
      "latitude": 51.717628,
      "longitude": 19.452362,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1666973737,
      "ems": null
    },
    {
      "latitude": 51.717636,
      "longitude": 19.452703,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1666973738,
      "ems": null
    },
    {
      "latitude": 51.71772,
      "longitude": 19.456406,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "timestamp": 1666973742,
      "ems": null
    },
    {
      "latitude": 51.717766,
      "longitude": 19.458542,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1666973745,
      "ems": null
    },
    {
      "latitude": 51.717773,
      "longitude": 19.460424,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "timestamp": 1666973748,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.462662,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1666973751,
      "ems": null
    },
    {
      "latitude": 51.718048,
      "longitude": 19.464655,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666973754,
      "ems": null
    },
    {
      "latitude": 51.718464,
      "longitude": 19.466553,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1666973757,
      "ems": null
    },
    {
      "latitude": 51.719212,
      "longitude": 19.468613,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1666973760,
      "ems": null
    },
    {
      "latitude": 51.71991,
      "longitude": 19.470062,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1666973763,
      "ems": null
    },
    {
      "latitude": 51.720566,
      "longitude": 19.471039,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1666973765,
      "ems": null
    },
    {
      "latitude": 51.722004,
      "longitude": 19.47258,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1666973769,
      "ems": null
    },
    {
      "latitude": 51.723129,
      "longitude": 19.473415,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1666973772,
      "ems": null
    },
    {
      "latitude": 51.724457,
      "longitude": 19.474157,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1666973775,
      "ems": null
    },
    {
      "latitude": 51.725235,
      "longitude": 19.474455,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1666973777,
      "ems": null
    },
    {
      "latitude": 51.726883,
      "longitude": 19.474899,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1666973781,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.475174,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1666973785,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.475122,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1666973787,
      "ems": null
    },
    {
      "latitude": 51.730453,
      "longitude": 19.474974,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1666973791,
      "ems": null
    },
    {
      "latitude": 51.73122,
      "longitude": 19.474716,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1666973792,
      "ems": null
    },
    {
      "latitude": 51.732803,
      "longitude": 19.474106,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1666973797,
      "ems": null
    },
    {
      "latitude": 51.733795,
      "longitude": 19.473341,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1666973799,
      "ems": null
    },
    {
      "latitude": 51.734619,
      "longitude": 19.47245,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1666973802,
      "ems": null
    },
    {
      "latitude": 51.735363,
      "longitude": 19.47113,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1666973806,
      "ems": null
    },
    {
      "latitude": 51.735809,
      "longitude": 19.469927,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1666973809,
      "ems": null
    },
    {
      "latitude": 51.73613,
      "longitude": 19.468292,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1666973812,
      "ems": null
    },
    {
      "latitude": 51.736248,
      "longitude": 19.466858,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1666973815,
      "ems": null
    },
    {
      "latitude": 51.736176,
      "longitude": 19.46562,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1666973818,
      "ems": null
    },
    {
      "latitude": 51.736061,
      "longitude": 19.464264,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1666973821,
      "ems": null
    },
    {
      "latitude": 51.73597,
      "longitude": 19.463196,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1666973824,
      "ems": null
    },
    {
      "latitude": 51.735783,
      "longitude": 19.462128,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666973827,
      "ems": null
    },
    {
      "latitude": 51.73555,
      "longitude": 19.461136,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973830,
      "ems": null
    },
    {
      "latitude": 51.735317,
      "longitude": 19.460144,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973833,
      "ems": null
    },
    {
      "latitude": 51.73513,
      "longitude": 19.459152,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666973836,
      "ems": null
    },
    {
      "latitude": 51.73494,
      "longitude": 19.458124,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666973839,
      "ems": null
    },
    {
      "latitude": 51.734711,
      "longitude": 19.457092,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666973842,
      "ems": null
    },
    {
      "latitude": 51.734482,
      "longitude": 19.456045,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973845,
      "ems": null
    },
    {
      "latitude": 51.734295,
      "longitude": 19.455032,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973848,
      "ems": null
    },
    {
      "latitude": 51.734108,
      "longitude": 19.454193,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973850,
      "ems": null
    },
    {
      "latitude": 51.73378,
      "longitude": 19.452667,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666973854,
      "ems": null
    },
    {
      "latitude": 51.733315,
      "longitude": 19.450378,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973860,
      "ems": null
    },
    {
      "latitude": 51.732803,
      "longitude": 19.448166,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666973866,
      "ems": null
    },
    {
      "latitude": 51.732742,
      "longitude": 19.447954,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666973866,
      "ems": null
    },
    {
      "latitude": 51.731964,
      "longitude": 19.444656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973874,
      "ems": null
    },
    {
      "latitude": 51.731506,
      "longitude": 19.442163,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666973880,
      "ems": null
    },
    {
      "latitude": 51.731049,
      "longitude": 19.43964,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666973887,
      "ems": null
    },
    {
      "latitude": 51.730728,
      "longitude": 19.438452,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1666973890,
      "ems": null
    },
    {
      "latitude": 51.730011,
      "longitude": 19.435577,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973897,
      "ems": null
    },
    {
      "latitude": 51.729218,
      "longitude": 19.431919,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973906,
      "ems": null
    },
    {
      "latitude": 51.728615,
      "longitude": 19.429016,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666973913,
      "ems": null
    },
    {
      "latitude": 51.728256,
      "longitude": 19.427168,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973917,
      "ems": null
    },
    {
      "latitude": 51.727753,
      "longitude": 19.425165,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1666973922,
      "ems": null
    },
    {
      "latitude": 51.726845,
      "longitude": 19.421005,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666973932,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.418484,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666973938,
      "ems": null
    },
    {
      "latitude": 51.72551,
      "longitude": 19.414921,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666973946,
      "ems": null
    },
    {
      "latitude": 51.724609,
      "longitude": 19.410706,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973956,
      "ems": null
    },
    {
      "latitude": 51.724144,
      "longitude": 19.408646,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973961,
      "ems": null
    },
    {
      "latitude": 51.72345,
      "longitude": 19.405493,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666973968,
      "ems": null
    },
    {
      "latitude": 51.719696,
      "longitude": 19.387899,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666974011,
      "ems": null
    },
    {
      "latitude": 51.719193,
      "longitude": 19.385525,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666974016,
      "ems": null
    },
    {
      "latitude": 51.718513,
      "longitude": 19.382248,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666974024,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.379196,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666974030,
      "ems": null
    },
    {
      "latitude": 51.717396,
      "longitude": 19.376602,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666974036,
      "ems": null
    },
    {
      "latitude": 51.716904,
      "longitude": 19.374092,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666974042,
      "ems": null
    },
    {
      "latitude": 51.716446,
      "longitude": 19.371569,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666974048,
      "ems": null
    },
    {
      "latitude": 51.715988,
      "longitude": 19.36912,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666974054,
      "ems": null
    },
    {
      "latitude": 51.715759,
      "longitude": 19.367931,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1666974057,
      "ems": null
    },
    {
      "latitude": 51.715302,
      "longitude": 19.366837,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1666974060,
      "ems": null
    },
    {
      "latitude": 51.714695,
      "longitude": 19.36615,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1666974063,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 19.365778,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1666974066,
      "ems": null
    },
    {
      "latitude": 51.713203,
      "longitude": 19.36554,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1666974069,
      "ems": null
    },
    {
      "latitude": 51.712326,
      "longitude": 19.365557,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1666974072,
      "ems": null
    },
    {
      "latitude": 51.711411,
      "longitude": 19.365704,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1666974075,
      "ems": null
    },
    {
      "latitude": 51.710449,
      "longitude": 19.366076,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1666974079,
      "ems": null
    },
    {
      "latitude": 51.709534,
      "longitude": 19.366522,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1666974081,
      "ems": null
    },
    {
      "latitude": 51.708572,
      "longitude": 19.366966,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1666974084,
      "ems": null
    },
    {
      "latitude": 51.707748,
      "longitude": 19.367413,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1666974087,
      "ems": null
    },
    {
      "latitude": 51.706779,
      "longitude": 19.368057,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1666974090,
      "ems": null
    },
    {
      "latitude": 51.705688,
      "longitude": 19.368971,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1666974093,
      "ems": null
    },
    {
      "latitude": 51.704773,
      "longitude": 19.370085,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1666974096,
      "ems": null
    },
    {
      "latitude": 51.703995,
      "longitude": 19.371569,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1666974100,
      "ems": null
    },
    {
      "latitude": 51.703289,
      "longitude": 19.373398,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1666974103,
      "ems": null
    },
    {
      "latitude": 51.702805,
      "longitude": 19.375355,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1666974105,
      "ems": null
    },
    {
      "latitude": 51.702404,
      "longitude": 19.377518,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1666974109,
      "ems": null
    },
    {
      "latitude": 51.702126,
      "longitude": 19.37973,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1666974112,
      "ems": null
    },
    {
      "latitude": 51.702026,
      "longitude": 19.381962,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1666974114,
      "ems": null
    },
    {
      "latitude": 51.702026,
      "longitude": 19.382257,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1666974115,
      "ems": null
    },
    {
      "latitude": 51.702255,
      "longitude": 19.385748,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1666974119,
      "ems": null
    },
    {
      "latitude": 51.702347,
      "longitude": 19.38649,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1666974120,
      "ems": null
    },
    {
      "latitude": 51.702637,
      "longitude": 19.38858,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1666974123,
      "ems": null
    },
    {
      "latitude": 51.703102,
      "longitude": 19.391251,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666974127,
      "ems": null
    },
    {
      "latitude": 51.703568,
      "longitude": 19.393692,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666974130,
      "ems": null
    },
    {
      "latitude": 51.704041,
      "longitude": 19.396065,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1666974133,
      "ems": null
    },
    {
      "latitude": 51.704498,
      "longitude": 19.398367,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1666974136,
      "ems": null
    },
    {
      "latitude": 51.70491,
      "longitude": 19.400297,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1666974138,
      "ems": null
    },
    {
      "latitude": 51.70546,
      "longitude": 19.402895,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1666974142,
      "ems": null
    },
    {
      "latitude": 51.705872,
      "longitude": 19.404974,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1666974145,
      "ems": null
    },
    {
      "latitude": 51.706364,
      "longitude": 19.407501,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1666974148,
      "ems": null
    },
    {
      "latitude": 51.706734,
      "longitude": 19.409866,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1666974151,
      "ems": null
    },
    {
      "latitude": 51.707153,
      "longitude": 19.4121,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1666974154,
      "ems": null
    },
    {
      "latitude": 51.707897,
      "longitude": 19.416733,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1666974160,
      "ems": null
    },
    {
      "latitude": 51.708645,
      "longitude": 19.421539,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1666974166,
      "ems": null
    },
    {
      "latitude": 51.708969,
      "longitude": 19.423904,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1666974169,
      "ems": null
    },
    {
      "latitude": 51.709293,
      "longitude": 19.426041,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666974172,
      "ems": null
    },
    {
      "latitude": 51.709625,
      "longitude": 19.428431,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1666974175,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.430618,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1666974178,
      "ems": null
    },
    {
      "latitude": 51.710175,
      "longitude": 19.432884,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1666974181,
      "ems": null
    },
    {
      "latitude": 51.710876,
      "longitude": 19.437103,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1666974187,
      "ems": null
    },
    {
      "latitude": 51.711624,
      "longitude": 19.439392,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1666974190,
      "ems": null
    },
    {
      "latitude": 51.712372,
      "longitude": 19.44105,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1666974193,
      "ems": null
    },
    {
      "latitude": 51.713299,
      "longitude": 19.442673,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1666974196,
      "ems": null
    },
    {
      "latitude": 51.714554,
      "longitude": 19.444275,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1666974199,
      "ems": null
    },
    {
      "latitude": 51.715672,
      "longitude": 19.445267,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1666974202,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.446106,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1666974205,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.44664,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1666974208,
      "ems": null
    },
    {
      "latitude": 51.719513,
      "longitude": 19.446915,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1666974211,
      "ems": null
    },
    {
      "latitude": 51.720703,
      "longitude": 19.447063,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1666974214,
      "ems": null
    },
    {
      "latitude": 51.722004,
      "longitude": 19.447021,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1666974217,
      "ems": null
    },
    {
      "latitude": 51.723038,
      "longitude": 19.446915,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1666974220,
      "ems": null
    },
    {
      "latitude": 51.724136,
      "longitude": 19.446692,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1666974223,
      "ems": null
    },
    {
      "latitude": 51.725029,
      "longitude": 19.446335,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1666974225,
      "ems": null
    },
    {
      "latitude": 51.726196,
      "longitude": 19.445503,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1666974229,
      "ems": null
    },
    {
      "latitude": 51.72702,
      "longitude": 19.444687,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1666974232,
      "ems": null
    },
    {
      "latitude": 51.727798,
      "longitude": 19.443722,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1666974235,
      "ems": null
    },
    {
      "latitude": 51.728336,
      "longitude": 19.442902,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1666974237,
      "ems": null
    },
    {
      "latitude": 51.728802,
      "longitude": 19.441986,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1666974240,
      "ems": null
    },
    {
      "latitude": 51.729446,
      "longitude": 19.440233,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1666974244,
      "ems": null
    },
    {
      "latitude": 51.729778,
      "longitude": 19.439011,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1666974247,
      "ems": null
    },
    {
      "latitude": 51.729965,
      "longitude": 19.437866,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1666974250,
      "ems": null
    },
    {
      "latitude": 51.729996,
      "longitude": 19.436298,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1666974253,
      "ems": null
    },
    {
      "latitude": 51.730011,
      "longitude": 19.435959,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1666974254,
      "ems": null
    },
    {
      "latitude": 51.729767,
      "longitude": 19.434443,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1666974258,
      "ems": null
    },
    {
      "latitude": 51.729584,
      "longitude": 19.433331,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666974261,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.432831,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666974262,
      "ems": null
    },
    {
      "latitude": 51.729263,
      "longitude": 19.431993,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1666974266,
      "ems": null
    },
    {
      "latitude": 51.728989,
      "longitude": 19.430286,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1666974270,
      "ems": null
    },
    {
      "latitude": 51.728661,
      "longitude": 19.428864,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1666974274,
      "ems": null
    },
    {
      "latitude": 51.72821,
      "longitude": 19.427021,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1666974279,
      "ems": null
    },
    {
      "latitude": 51.727871,
      "longitude": 19.425354,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666974283,
      "ems": null
    },
    {
      "latitude": 51.727386,
      "longitude": 19.423456,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1666974288,
      "ems": null
    },
    {
      "latitude": 51.726883,
      "longitude": 19.42123,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666974294,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.4193,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666974299,
      "ems": null
    },
    {
      "latitude": 51.725784,
      "longitude": 19.416035,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666974307,
      "ems": null
    },
    {
      "latitude": 51.725075,
      "longitude": 19.412766,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666974315,
      "ems": null
    },
    {
      "latitude": 51.724503,
      "longitude": 19.410244,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1666974322,
      "ems": null
    }
  ]
};
