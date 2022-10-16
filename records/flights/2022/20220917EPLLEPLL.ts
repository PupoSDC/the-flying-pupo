import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220917EPLLEPLL",
    callsign: "BNI8E",
    name: "First flight in Bartolini",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 8, 17, 15, 41).getTime(),
    arrival: new Date(2022, 8, 17, 16, 51).getTime(),
    singleEnginePistonTime: 70,
    picTime: 0,
    dualTime: 70,
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
      registration: "DP_DME",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Lodz Wladyslaw Reymont Airport",
      code: "EPLL",
      position: {
        latitude: 51.721882,
        longitude: 19.39813,
      },
    },
    destination: {
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
      "latitude": 51.723049,
      "longitude": 19.403458,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "0",
      "timestamp": 1663430131,
      "ems": null
    },
    {
      "latitude": 51.722626,
      "longitude": 19.401484,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 250,
      "squawk": "0",
      "timestamp": 1663430136,
      "ems": null
    },
    {
      "latitude": 51.72171,
      "longitude": 19.397179,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 251,
      "squawk": "0",
      "timestamp": 1663430146,
      "ems": null
    },
    {
      "latitude": 51.720886,
      "longitude": 19.393318,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 250,
      "squawk": "0",
      "timestamp": 1663430155,
      "ems": null
    },
    {
      "latitude": 51.720097,
      "longitude": 19.389877,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 249,
      "squawk": "0",
      "timestamp": 1663430163,
      "ems": null
    },
    {
      "latitude": 51.719212,
      "longitude": 19.386139,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "0",
      "timestamp": 1663430171,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.381516,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 251,
      "squawk": "0",
      "timestamp": 1663430180,
      "ems": null
    },
    {
      "latitude": 51.717728,
      "longitude": 19.378769,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663430186,
      "ems": null
    },
    {
      "latitude": 51.717255,
      "longitude": 19.376144,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663430192,
      "ems": null
    },
    {
      "latitude": 51.716835,
      "longitude": 19.373779,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "timestamp": 1663430198,
      "ems": null
    },
    {
      "latitude": 51.716602,
      "longitude": 19.37233,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663430202,
      "ems": null
    },
    {
      "latitude": 51.71637,
      "longitude": 19.370956,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1663430204,
      "ems": null
    },
    {
      "latitude": 51.716278,
      "longitude": 19.369659,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1663430207,
      "ems": null
    },
    {
      "latitude": 51.71637,
      "longitude": 19.368134,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1663430210,
      "ems": null
    },
    {
      "latitude": 51.716629,
      "longitude": 19.366817,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1663430213,
      "ems": null
    },
    {
      "latitude": 51.717068,
      "longitude": 19.365463,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1663430216,
      "ems": null
    },
    {
      "latitude": 51.717583,
      "longitude": 19.364243,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1663430219,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.363255,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1663430223,
      "ems": null
    },
    {
      "latitude": 51.71907,
      "longitude": 19.362183,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1663430225,
      "ems": null
    },
    {
      "latitude": 51.719864,
      "longitude": 19.361343,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1663430228,
      "ems": null
    },
    {
      "latitude": 51.720703,
      "longitude": 19.360582,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663430232,
      "ems": null
    },
    {
      "latitude": 51.721481,
      "longitude": 19.359915,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663430234,
      "ems": null
    },
    {
      "latitude": 51.722561,
      "longitude": 19.359207,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1663430238,
      "ems": null
    },
    {
      "latitude": 51.7234,
      "longitude": 19.358749,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663430240,
      "ems": null
    },
    {
      "latitude": 51.724457,
      "longitude": 19.358133,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663430244,
      "ems": null
    },
    {
      "latitude": 51.725281,
      "longitude": 19.357687,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663430246,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.357071,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1663430250,
      "ems": null
    },
    {
      "latitude": 51.727356,
      "longitude": 19.356613,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663430252,
      "ems": null
    },
    {
      "latitude": 51.728394,
      "longitude": 19.356129,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663430256,
      "ems": null
    },
    {
      "latitude": 51.729404,
      "longitude": 19.355698,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663430259,
      "ems": null
    },
    {
      "latitude": 51.730225,
      "longitude": 19.355387,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663430261,
      "ems": null
    },
    {
      "latitude": 51.731266,
      "longitude": 19.354935,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663430264,
      "ems": null
    },
    {
      "latitude": 51.73233,
      "longitude": 19.354496,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663430267,
      "ems": null
    },
    {
      "latitude": 51.733315,
      "longitude": 19.354095,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663430270,
      "ems": null
    },
    {
      "latitude": 51.734528,
      "longitude": 19.353561,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663430274,
      "ems": null
    },
    {
      "latitude": 51.735641,
      "longitude": 19.353104,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663430277,
      "ems": null
    },
    {
      "latitude": 51.737972,
      "longitude": 19.352264,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1663430282,
      "ems": null
    },
    {
      "latitude": 51.739273,
      "longitude": 19.351883,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1663430286,
      "ems": null
    },
    {
      "latitude": 51.740479,
      "longitude": 19.351601,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1663430289,
      "ems": null
    },
    {
      "latitude": 51.74165,
      "longitude": 19.351273,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1663430292,
      "ems": null
    },
    {
      "latitude": 51.742859,
      "longitude": 19.350933,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1663430294,
      "ems": null
    },
    {
      "latitude": 51.744164,
      "longitude": 19.350586,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1663430297,
      "ems": null
    },
    {
      "latitude": 51.745464,
      "longitude": 19.350281,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1663430301,
      "ems": null
    },
    {
      "latitude": 51.746658,
      "longitude": 19.349968,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1663430303,
      "ems": null
    },
    {
      "latitude": 51.746933,
      "longitude": 19.349894,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1663430304,
      "ems": null
    },
    {
      "latitude": 51.749176,
      "longitude": 19.34878,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663430310,
      "ems": null
    },
    {
      "latitude": 51.750446,
      "longitude": 19.347916,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430313,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 19.347147,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663430316,
      "ems": null
    },
    {
      "latitude": 51.752636,
      "longitude": 19.346313,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663430319,
      "ems": null
    },
    {
      "latitude": 51.753845,
      "longitude": 19.345398,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430322,
      "ems": null
    },
    {
      "latitude": 51.754852,
      "longitude": 19.344624,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430324,
      "ems": null
    },
    {
      "latitude": 51.756088,
      "longitude": 19.343731,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430328,
      "ems": null
    },
    {
      "latitude": 51.757324,
      "longitude": 19.34284,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430331,
      "ems": null
    },
    {
      "latitude": 51.75864,
      "longitude": 19.341812,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430334,
      "ems": null
    },
    {
      "latitude": 51.759796,
      "longitude": 19.340984,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430337,
      "ems": null
    },
    {
      "latitude": 51.762272,
      "longitude": 19.339066,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663430343,
      "ems": null
    },
    {
      "latitude": 51.764648,
      "longitude": 19.337126,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1663430349,
      "ems": null
    },
    {
      "latitude": 51.767021,
      "longitude": 19.335175,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1663430355,
      "ems": null
    },
    {
      "latitude": 51.76944,
      "longitude": 19.333115,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1663430361,
      "ems": null
    },
    {
      "latitude": 51.771835,
      "longitude": 19.331186,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1663430367,
      "ems": null
    },
    {
      "latitude": 51.774189,
      "longitude": 19.329071,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663430373,
      "ems": null
    },
    {
      "latitude": 51.776596,
      "longitude": 19.326733,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663430379,
      "ems": null
    },
    {
      "latitude": 51.778839,
      "longitude": 19.324579,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663430385,
      "ems": null
    },
    {
      "latitude": 51.780991,
      "longitude": 19.322651,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663430391,
      "ems": null
    },
    {
      "latitude": 51.783279,
      "longitude": 19.320498,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663430397,
      "ems": null
    },
    {
      "latitude": 51.785873,
      "longitude": 19.318085,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663430403,
      "ems": null
    },
    {
      "latitude": 51.788177,
      "longitude": 19.315969,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663430409,
      "ems": null
    },
    {
      "latitude": 51.790436,
      "longitude": 19.31366,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1663430415,
      "ems": null
    },
    {
      "latitude": 51.791519,
      "longitude": 19.312555,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430418,
      "ems": null
    },
    {
      "latitude": 51.793945,
      "longitude": 19.309956,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430424,
      "ems": null
    },
    {
      "latitude": 51.796234,
      "longitude": 19.307507,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430430,
      "ems": null
    },
    {
      "latitude": 51.798477,
      "longitude": 19.305058,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430436,
      "ems": null
    },
    {
      "latitude": 51.800537,
      "longitude": 19.302902,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430442,
      "ems": null
    },
    {
      "latitude": 51.802773,
      "longitude": 19.300537,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430448,
      "ems": null
    },
    {
      "latitude": 51.805161,
      "longitude": 19.297857,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1663430454,
      "ems": null
    },
    {
      "latitude": 51.806171,
      "longitude": 19.296417,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1663430457,
      "ems": null
    },
    {
      "latitude": 51.806946,
      "longitude": 19.295258,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1663430460,
      "ems": null
    },
    {
      "latitude": 51.807659,
      "longitude": 19.293442,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1663430463,
      "ems": null
    },
    {
      "latitude": 51.807907,
      "longitude": 19.291473,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1663430466,
      "ems": null
    },
    {
      "latitude": 51.807705,
      "longitude": 19.289398,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1663430469,
      "ems": null
    },
    {
      "latitude": 51.807426,
      "longitude": 19.28833,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1663430471,
      "ems": null
    },
    {
      "latitude": 51.806396,
      "longitude": 19.286573,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1663430475,
      "ems": null
    },
    {
      "latitude": 51.805378,
      "longitude": 19.285812,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1663430478,
      "ems": null
    },
    {
      "latitude": 51.804169,
      "longitude": 19.285507,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1663430481,
      "ems": null
    },
    {
      "latitude": 51.802872,
      "longitude": 19.285906,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1663430484,
      "ems": null
    },
    {
      "latitude": 51.801792,
      "longitude": 19.28688,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1663430487,
      "ems": null
    },
    {
      "latitude": 51.800861,
      "longitude": 19.28833,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1663430490,
      "ems": null
    },
    {
      "latitude": 51.800171,
      "longitude": 19.290136,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1663430493,
      "ems": null
    },
    {
      "latitude": 51.799759,
      "longitude": 19.292364,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1663430496,
      "ems": null
    },
    {
      "latitude": 51.799698,
      "longitude": 19.294815,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1663430499,
      "ems": null
    },
    {
      "latitude": 51.800026,
      "longitude": 19.297104,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1663430502,
      "ems": null
    },
    {
      "latitude": 51.800629,
      "longitude": 19.299164,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1663430505,
      "ems": null
    },
    {
      "latitude": 51.801609,
      "longitude": 19.300842,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1663430508,
      "ems": null
    },
    {
      "latitude": 51.802727,
      "longitude": 19.30191,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1663430511,
      "ems": null
    },
    {
      "latitude": 51.804123,
      "longitude": 19.302521,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1663430514,
      "ems": null
    },
    {
      "latitude": 51.805527,
      "longitude": 19.302385,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1663430517,
      "ems": null
    },
    {
      "latitude": 51.806534,
      "longitude": 19.301716,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430520,
      "ems": null
    },
    {
      "latitude": 51.807613,
      "longitude": 19.300613,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430523,
      "ems": null
    },
    {
      "latitude": 51.808731,
      "longitude": 19.299416,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1663430526,
      "ems": null
    },
    {
      "latitude": 51.809753,
      "longitude": 19.298401,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1663430529,
      "ems": null
    },
    {
      "latitude": 51.810966,
      "longitude": 19.297256,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663430532,
      "ems": null
    },
    {
      "latitude": 51.811935,
      "longitude": 19.296371,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663430535,
      "ems": null
    },
    {
      "latitude": 51.81292,
      "longitude": 19.295425,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1663430538,
      "ems": null
    },
    {
      "latitude": 51.813675,
      "longitude": 19.294664,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663430541,
      "ems": null
    },
    {
      "latitude": 51.81469,
      "longitude": 19.293671,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663430544,
      "ems": null
    },
    {
      "latitude": 51.815575,
      "longitude": 19.292831,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663430547,
      "ems": null
    },
    {
      "latitude": 51.817154,
      "longitude": 19.29125,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430553,
      "ems": null
    },
    {
      "latitude": 51.818691,
      "longitude": 19.289551,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430559,
      "ems": null
    },
    {
      "latitude": 51.820129,
      "longitude": 19.287983,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663430565,
      "ems": null
    },
    {
      "latitude": 51.821766,
      "longitude": 19.286575,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663430571,
      "ems": null
    },
    {
      "latitude": 51.822651,
      "longitude": 19.286041,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663430574,
      "ems": null
    },
    {
      "latitude": 51.823486,
      "longitude": 19.285507,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663430577,
      "ems": null
    },
    {
      "latitude": 51.824371,
      "longitude": 19.284973,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663430581,
      "ems": null
    },
    {
      "latitude": 51.825443,
      "longitude": 19.284515,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663430583,
      "ems": null
    },
    {
      "latitude": 51.826447,
      "longitude": 19.284199,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1663430587,
      "ems": null
    },
    {
      "latitude": 51.827316,
      "longitude": 19.284124,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1663430589,
      "ems": null
    },
    {
      "latitude": 51.828461,
      "longitude": 19.284271,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1663430593,
      "ems": null
    },
    {
      "latitude": 51.829422,
      "longitude": 19.284569,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1663430595,
      "ems": null
    },
    {
      "latitude": 51.830475,
      "longitude": 19.285089,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1663430598,
      "ems": null
    },
    {
      "latitude": 51.831665,
      "longitude": 19.28598,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1663430602,
      "ems": null
    },
    {
      "latitude": 51.832581,
      "longitude": 19.286871,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1663430605,
      "ems": null
    },
    {
      "latitude": 51.833588,
      "longitude": 19.288057,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1663430608,
      "ems": null
    },
    {
      "latitude": 51.834335,
      "longitude": 19.289246,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1663430610,
      "ems": null
    },
    {
      "latitude": 51.835171,
      "longitude": 19.290924,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1663430613,
      "ems": null
    },
    {
      "latitude": 51.835693,
      "longitude": 19.292141,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1663430616,
      "ems": null
    },
    {
      "latitude": 51.83638,
      "longitude": 19.294071,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1663430619,
      "ems": null
    },
    {
      "latitude": 51.836884,
      "longitude": 19.295927,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663430622,
      "ems": null
    },
    {
      "latitude": 51.837265,
      "longitude": 19.298248,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1663430626,
      "ems": null
    },
    {
      "latitude": 51.837452,
      "longitude": 19.300003,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1663430628,
      "ems": null
    },
    {
      "latitude": 51.837498,
      "longitude": 19.302139,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1663430631,
      "ems": null
    },
    {
      "latitude": 51.837452,
      "longitude": 19.304428,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1663430634,
      "ems": null
    },
    {
      "latitude": 51.837296,
      "longitude": 19.306839,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1663430637,
      "ems": null
    },
    {
      "latitude": 51.837128,
      "longitude": 19.309158,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1663430640,
      "ems": null
    },
    {
      "latitude": 51.836884,
      "longitude": 19.311665,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1663430643,
      "ems": null
    },
    {
      "latitude": 51.836655,
      "longitude": 19.314114,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1663430646,
      "ems": null
    },
    {
      "latitude": 51.83638,
      "longitude": 19.316711,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1663430650,
      "ems": null
    },
    {
      "latitude": 51.836102,
      "longitude": 19.318848,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1663430653,
      "ems": null
    },
    {
      "latitude": 51.83551,
      "longitude": 19.321165,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1663430655,
      "ems": null
    },
    {
      "latitude": 51.83466,
      "longitude": 19.322586,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1663430659,
      "ems": null
    },
    {
      "latitude": 51.833176,
      "longitude": 19.323393,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1663430661,
      "ems": null
    },
    {
      "latitude": 51.832005,
      "longitude": 19.322662,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1663430664,
      "ems": null
    },
    {
      "latitude": 51.831436,
      "longitude": 19.321314,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1663430667,
      "ems": null
    },
    {
      "latitude": 51.831589,
      "longitude": 19.319611,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1663430670,
      "ems": null
    },
    {
      "latitude": 51.832581,
      "longitude": 19.318344,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1663430674,
      "ems": null
    },
    {
      "latitude": 51.833771,
      "longitude": 19.318121,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1663430677,
      "ems": null
    },
    {
      "latitude": 51.835033,
      "longitude": 19.319153,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1663430680,
      "ems": null
    },
    {
      "latitude": 51.835777,
      "longitude": 19.320908,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1663430682,
      "ems": null
    },
    {
      "latitude": 51.835964,
      "longitude": 19.32373,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1663430686,
      "ems": null
    },
    {
      "latitude": 51.835785,
      "longitude": 19.326214,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1663430689,
      "ems": null
    },
    {
      "latitude": 51.835602,
      "longitude": 19.328812,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1663430692,
      "ems": null
    },
    {
      "latitude": 51.835464,
      "longitude": 19.331409,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1663430695,
      "ems": null
    },
    {
      "latitude": 51.835312,
      "longitude": 19.334106,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1663430698,
      "ems": null
    },
    {
      "latitude": 51.835079,
      "longitude": 19.3367,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1663430701,
      "ems": null
    },
    {
      "latitude": 51.834869,
      "longitude": 19.339277,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1663430704,
      "ems": null
    },
    {
      "latitude": 51.834614,
      "longitude": 19.341965,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1663430707,
      "ems": null
    },
    {
      "latitude": 51.834503,
      "longitude": 19.344549,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1663430710,
      "ems": null
    },
    {
      "latitude": 51.834549,
      "longitude": 19.347221,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1663430713,
      "ems": null
    },
    {
      "latitude": 51.834988,
      "longitude": 19.349899,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1663430716,
      "ems": null
    },
    {
      "latitude": 51.835648,
      "longitude": 19.351749,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1663430719,
      "ems": null
    },
    {
      "latitude": 51.836617,
      "longitude": 19.353409,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1663430722,
      "ems": null
    },
    {
      "latitude": 51.837826,
      "longitude": 19.354477,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1663430725,
      "ems": null
    },
    {
      "latitude": 51.839081,
      "longitude": 19.354782,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1663430728,
      "ems": null
    },
    {
      "latitude": 51.8405,
      "longitude": 19.354422,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663430731,
      "ems": null
    },
    {
      "latitude": 51.841457,
      "longitude": 19.353638,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1663430733,
      "ems": null
    },
    {
      "latitude": 51.842342,
      "longitude": 19.352264,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1663430737,
      "ems": null
    },
    {
      "latitude": 51.843109,
      "longitude": 19.349894,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1663430741,
      "ems": null
    },
    {
      "latitude": 51.843338,
      "longitude": 19.346701,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1663430746,
      "ems": null
    },
    {
      "latitude": 51.843292,
      "longitude": 19.344624,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1663430749,
      "ems": null
    },
    {
      "latitude": 51.843155,
      "longitude": 19.342693,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1663430752,
      "ems": null
    },
    {
      "latitude": 51.843086,
      "longitude": 19.341049,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1663430754,
      "ems": null
    },
    {
      "latitude": 51.842972,
      "longitude": 19.339277,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 1856,
        "ms": 9.4
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1663430758,
      "ems": null
    },
    {
      "latitude": 51.842926,
      "longitude": 19.338165,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1663430761,
      "ems": null
    },
    {
      "latitude": 51.842834,
      "longitude": 19.337126,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1663430764,
      "ems": null
    },
    {
      "latitude": 51.842743,
      "longitude": 19.336309,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1663430767,
      "ems": null
    },
    {
      "latitude": 51.842621,
      "longitude": 19.33548,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 68.5,
        "kts": 37,
        "mph": 42.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1663430770,
      "ems": null
    },
    {
      "latitude": 51.842575,
      "longitude": 19.333496,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -3392,
        "ms": -17.2
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1663430776,
      "ems": null
    },
    {
      "latitude": 51.842621,
      "longitude": 19.331894,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663430779,
      "ems": null
    },
    {
      "latitude": 51.842606,
      "longitude": 19.33037,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1663430782,
      "ems": null
    },
    {
      "latitude": 51.842514,
      "longitude": 19.327326,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1663430788,
      "ems": null
    },
    {
      "latitude": 51.842377,
      "longitude": 19.324579,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1663430794,
      "ems": null
    },
    {
      "latitude": 51.842342,
      "longitude": 19.323273,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1663430797,
      "ems": null
    },
    {
      "latitude": 51.842293,
      "longitude": 19.322052,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1663430800,
      "ems": null
    },
    {
      "latitude": 51.842155,
      "longitude": 19.320374,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 46.3,
        "kts": 25,
        "mph": 28.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663430806,
      "ems": null
    },
    {
      "latitude": 51.84201,
      "longitude": 19.319756,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 59.3,
        "kts": 32,
        "mph": 36.8
      },
      "verticalSpeed": {
        "fpm": -3200,
        "ms": -16.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1663430809,
      "ems": null
    },
    {
      "latitude": 51.841827,
      "longitude": 19.318642,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -4672,
        "ms": -23.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1663430812,
      "ems": null
    },
    {
      "latitude": 51.84169,
      "longitude": 19.315491,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1663430818,
      "ems": null
    },
    {
      "latitude": 51.841503,
      "longitude": 19.311829,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 1792,
        "ms": 9.1
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1663430824,
      "ems": null
    },
    {
      "latitude": 51.841412,
      "longitude": 19.309769,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1663430830,
      "ems": null
    },
    {
      "latitude": 51.841141,
      "longitude": 19.308546,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": -3072,
        "ms": -15.6
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1663430836,
      "ems": null
    },
    {
      "latitude": 51.840759,
      "longitude": 19.307632,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -3776,
        "ms": -19.2
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1663430839,
      "ems": null
    },
    {
      "latitude": 51.840317,
      "longitude": 19.306023,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -1792,
        "ms": -9.1
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1663430842,
      "ems": null
    },
    {
      "latitude": 51.839905,
      "longitude": 19.304241,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663430845,
      "ems": null
    },
    {
      "latitude": 51.839546,
      "longitude": 19.302597,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 2240,
        "ms": 11.4
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663430848,
      "ems": null
    },
    {
      "latitude": 51.839363,
      "longitude": 19.3013,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 2048,
        "ms": 10.4
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663430851,
      "ems": null
    },
    {
      "latitude": 51.839176,
      "longitude": 19.300156,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 2048,
        "ms": 10.4
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663430854,
      "ems": null
    },
    {
      "latitude": 51.838989,
      "longitude": 19.299316,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 61.1,
        "kts": 33,
        "mph": 38
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663430857,
      "ems": null
    },
    {
      "latitude": 51.838898,
      "longitude": 19.298782,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 38.9,
        "kts": 21,
        "mph": 24.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1663430860,
      "ems": null
    },
    {
      "latitude": 51.838757,
      "longitude": 19.298325,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 48.2,
        "kts": 26,
        "mph": 29.9
      },
      "verticalSpeed": {
        "fpm": -2432,
        "ms": -12.4
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1663430863,
      "ems": null
    },
    {
      "latitude": 51.838577,
      "longitude": 19.297634,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": -2432,
        "ms": -12.4
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663430866,
      "ems": null
    },
    {
      "latitude": 51.838531,
      "longitude": 19.296743,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1663430869,
      "ems": null
    },
    {
      "latitude": 51.838531,
      "longitude": 19.296001,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 44.4,
        "kts": 24,
        "mph": 27.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663430872,
      "ems": null
    },
    {
      "latitude": 51.838478,
      "longitude": 19.295654,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 35.2,
        "kts": 19,
        "mph": 21.9
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1663430875,
      "ems": null
    },
    {
      "latitude": 51.837967,
      "longitude": 19.295273,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -2816,
        "ms": -14.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1663430878,
      "ems": null
    },
    {
      "latitude": 51.837387,
      "longitude": 19.294664,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1663430881,
      "ems": null
    },
    {
      "latitude": 51.836849,
      "longitude": 19.293976,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1663430884,
      "ems": null
    },
    {
      "latitude": 51.836384,
      "longitude": 19.293137,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1663430887,
      "ems": null
    },
    {
      "latitude": 51.835869,
      "longitude": 19.292374,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1663430890,
      "ems": null
    },
    {
      "latitude": 51.835453,
      "longitude": 19.291611,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1663430893,
      "ems": null
    },
    {
      "latitude": 51.834892,
      "longitude": 19.290619,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1663430896,
      "ems": null
    },
    {
      "latitude": 51.834381,
      "longitude": 19.289551,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1663430899,
      "ems": null
    },
    {
      "latitude": 51.83382,
      "longitude": 19.288406,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1663430902,
      "ems": null
    },
    {
      "latitude": 51.833542,
      "longitude": 19.287186,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663430905,
      "ems": null
    },
    {
      "latitude": 51.833542,
      "longitude": 19.285757,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1663430908,
      "ems": null
    },
    {
      "latitude": 51.833771,
      "longitude": 19.284346,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1663430911,
      "ems": null
    },
    {
      "latitude": 51.834229,
      "longitude": 19.283085,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1663430914,
      "ems": null
    },
    {
      "latitude": 51.834938,
      "longitude": 19.281845,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1663430917,
      "ems": null
    },
    {
      "latitude": 51.835785,
      "longitude": 19.280783,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1663430920,
      "ems": null
    },
    {
      "latitude": 51.836617,
      "longitude": 19.280167,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663430923,
      "ems": null
    },
    {
      "latitude": 51.837479,
      "longitude": 19.279669,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663430926,
      "ems": null
    },
    {
      "latitude": 51.838394,
      "longitude": 19.279448,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "timestamp": 1663430929,
      "ems": null
    },
    {
      "latitude": 51.839539,
      "longitude": 19.279448,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1663430932,
      "ems": null
    },
    {
      "latitude": 51.840527,
      "longitude": 19.279785,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1663430935,
      "ems": null
    },
    {
      "latitude": 51.841644,
      "longitude": 19.280472,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1663430938,
      "ems": null
    },
    {
      "latitude": 51.842525,
      "longitude": 19.281235,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1663430941,
      "ems": null
    },
    {
      "latitude": 51.843613,
      "longitude": 19.28249,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "7000",
      "timestamp": 1663430945,
      "ems": null
    },
    {
      "latitude": 51.844391,
      "longitude": 19.283524,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1663430947,
      "ems": null
    },
    {
      "latitude": 51.844902,
      "longitude": 19.28421,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1663430949,
      "ems": null
    },
    {
      "latitude": 51.846222,
      "longitude": 19.286499,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1663430954,
      "ems": null
    },
    {
      "latitude": 51.846951,
      "longitude": 19.288025,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1663430956,
      "ems": null
    },
    {
      "latitude": 51.847412,
      "longitude": 19.289246,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1663430959,
      "ems": null
    },
    {
      "latitude": 51.847694,
      "longitude": 19.290771,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1663430961,
      "ems": null
    },
    {
      "latitude": 51.847042,
      "longitude": 19.293365,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -1984,
        "ms": -10.1
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1663430965,
      "ems": null
    },
    {
      "latitude": 51.845627,
      "longitude": 19.294292,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1663430968,
      "ems": null
    },
    {
      "latitude": 51.844669,
      "longitude": 19.293671,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1663430971,
      "ems": null
    },
    {
      "latitude": 51.844158,
      "longitude": 19.291763,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -1856,
        "ms": -9.4
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663430974,
      "ems": null
    },
    {
      "latitude": 51.84407,
      "longitude": 19.289913,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1663430977,
      "ems": null
    },
    {
      "latitude": 51.84407,
      "longitude": 19.287983,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663430980,
      "ems": null
    },
    {
      "latitude": 51.844162,
      "longitude": 19.286573,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1663430983,
      "ems": null
    },
    {
      "latitude": 51.844204,
      "longitude": 19.284973,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1663430987,
      "ems": null
    },
    {
      "latitude": 51.844299,
      "longitude": 19.283306,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1663430989,
      "ems": null
    },
    {
      "latitude": 51.844391,
      "longitude": 19.281897,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1663430992,
      "ems": null
    },
    {
      "latitude": 51.844391,
      "longitude": 19.280487,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663430995,
      "ems": null
    },
    {
      "latitude": 51.844391,
      "longitude": 19.279099,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663430998,
      "ems": null
    },
    {
      "latitude": 51.844391,
      "longitude": 19.277496,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663431002,
      "ems": null
    },
    {
      "latitude": 51.844391,
      "longitude": 19.276199,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663431005,
      "ems": null
    },
    {
      "latitude": 51.844345,
      "longitude": 19.273359,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1663431011,
      "ems": null
    },
    {
      "latitude": 51.844341,
      "longitude": 19.271851,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1663431014,
      "ems": null
    },
    {
      "latitude": 51.84425,
      "longitude": 19.270477,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1663431016,
      "ems": null
    },
    {
      "latitude": 51.844116,
      "longitude": 19.269648,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663431018,
      "ems": null
    },
    {
      "latitude": 51.843365,
      "longitude": 19.26857,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1663431022,
      "ems": null
    },
    {
      "latitude": 51.84206,
      "longitude": 19.269104,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -1792,
        "ms": -9.1
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1663431025,
      "ems": null
    },
    {
      "latitude": 51.841362,
      "longitude": 19.271164,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1663431028,
      "ems": null
    },
    {
      "latitude": 51.841179,
      "longitude": 19.273758,
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
        "fpm": -2752,
        "ms": -14
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1663431031,
      "ems": null
    },
    {
      "latitude": 51.841049,
      "longitude": 19.276701,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1663431035,
      "ems": null
    },
    {
      "latitude": 51.840946,
      "longitude": 19.279327,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1663431037,
      "ems": null
    },
    {
      "latitude": 51.840851,
      "longitude": 19.281616,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1663431040,
      "ems": null
    },
    {
      "latitude": 51.840714,
      "longitude": 19.284515,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1663431044,
      "ems": null
    },
    {
      "latitude": 51.840591,
      "longitude": 19.287018,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1663431047,
      "ems": null
    },
    {
      "latitude": 51.840527,
      "longitude": 19.289169,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1663431049,
      "ems": null
    },
    {
      "latitude": 51.840481,
      "longitude": 19.291458,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1663431053,
      "ems": null
    },
    {
      "latitude": 51.840454,
      "longitude": 19.293774,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1663431056,
      "ems": null
    },
    {
      "latitude": 51.840481,
      "longitude": 19.296036,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1663431059,
      "ems": null
    },
    {
      "latitude": 51.8405,
      "longitude": 19.298153,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1663431062,
      "ems": null
    },
    {
      "latitude": 51.840546,
      "longitude": 19.300306,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1663431065,
      "ems": null
    },
    {
      "latitude": 51.840591,
      "longitude": 19.302385,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1663431068,
      "ems": null
    },
    {
      "latitude": 51.840714,
      "longitude": 19.304657,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1663431071,
      "ems": null
    },
    {
      "latitude": 51.84082,
      "longitude": 19.30669,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1663431074,
      "ems": null
    },
    {
      "latitude": 51.840992,
      "longitude": 19.309006,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1663431077,
      "ems": null
    },
    {
      "latitude": 51.841179,
      "longitude": 19.310913,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1663431079,
      "ems": null
    },
    {
      "latitude": 51.841736,
      "longitude": 19.313354,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663431083,
      "ems": null
    },
    {
      "latitude": 51.842468,
      "longitude": 19.315004,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1663431086,
      "ems": null
    },
    {
      "latitude": 51.843506,
      "longitude": 19.316483,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1663431089,
      "ems": null
    },
    {
      "latitude": 51.844624,
      "longitude": 19.317322,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "7000",
      "timestamp": 1663431092,
      "ems": null
    },
    {
      "latitude": 51.845718,
      "longitude": 19.317602,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1663431094,
      "ems": null
    },
    {
      "latitude": 51.846954,
      "longitude": 19.317305,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663431098,
      "ems": null
    },
    {
      "latitude": 51.848007,
      "longitude": 19.316488,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663431101,
      "ems": null
    },
    {
      "latitude": 51.848602,
      "longitude": 19.315523,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1663431103,
      "ems": null
    },
    {
      "latitude": 51.849106,
      "longitude": 19.31389,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1663431107,
      "ems": null
    },
    {
      "latitude": 51.849232,
      "longitude": 19.312363,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1663431110,
      "ems": null
    },
    {
      "latitude": 51.849243,
      "longitude": 19.310772,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663431113,
      "ems": null
    },
    {
      "latitude": 51.849232,
      "longitude": 19.309082,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1663431116,
      "ems": null
    },
    {
      "latitude": 51.849186,
      "longitude": 19.307327,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1663431119,
      "ems": null
    },
    {
      "latitude": 51.849106,
      "longitude": 19.305799,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1663431122,
      "ems": null
    },
    {
      "latitude": 51.848923,
      "longitude": 19.304167,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1663431125,
      "ems": null
    },
    {
      "latitude": 51.848484,
      "longitude": 19.30275,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1663431128,
      "ems": null
    },
    {
      "latitude": 51.847927,
      "longitude": 19.301376,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1663431131,
      "ems": null
    },
    {
      "latitude": 51.847416,
      "longitude": 19.299927,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1663431134,
      "ems": null
    },
    {
      "latitude": 51.846909,
      "longitude": 19.298376,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1663431137,
      "ems": null
    },
    {
      "latitude": 51.846485,
      "longitude": 19.296951,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1663431140,
      "ems": null
    },
    {
      "latitude": 51.845924,
      "longitude": 19.295197,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1663431143,
      "ems": null
    },
    {
      "latitude": 51.84549,
      "longitude": 19.293699,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1663431146,
      "ems": null
    },
    {
      "latitude": 51.844986,
      "longitude": 19.292215,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1663431149,
      "ems": null
    },
    {
      "latitude": 51.844761,
      "longitude": 19.291534,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1663431151,
      "ems": null
    },
    {
      "latitude": 51.844528,
      "longitude": 19.290848,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1663431152,
      "ems": null
    },
    {
      "latitude": 51.843658,
      "longitude": 19.288132,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1663431159,
      "ems": null
    },
    {
      "latitude": 51.84288,
      "longitude": 19.285683,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1663431165,
      "ems": null
    },
    {
      "latitude": 51.84248,
      "longitude": 19.284592,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1663431169,
      "ems": null
    },
    {
      "latitude": 51.841644,
      "longitude": 19.282269,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1663431176,
      "ems": null
    },
    {
      "latitude": 51.841003,
      "longitude": 19.280708,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1663431182,
      "ems": null
    },
    {
      "latitude": 51.840591,
      "longitude": 19.279743,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1663431185,
      "ems": null
    },
    {
      "latitude": 51.840271,
      "longitude": 19.278927,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1663431188,
      "ems": null
    },
    {
      "latitude": 51.83992,
      "longitude": 19.27803,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1663431191,
      "ems": null
    },
    {
      "latitude": 51.839222,
      "longitude": 19.276199,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1663431197,
      "ems": null
    },
    {
      "latitude": 51.838577,
      "longitude": 19.274473,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1663431203,
      "ems": null
    },
    {
      "latitude": 51.837891,
      "longitude": 19.272617,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1663431209,
      "ems": null
    },
    {
      "latitude": 51.837296,
      "longitude": 19.27091,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1663431215,
      "ems": null
    },
    {
      "latitude": 51.836662,
      "longitude": 19.26918,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1663431221,
      "ems": null
    },
    {
      "latitude": 51.83601,
      "longitude": 19.267349,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1663431227,
      "ems": null
    },
    {
      "latitude": 51.835403,
      "longitude": 19.265518,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1663431233,
      "ems": null
    },
    {
      "latitude": 51.834801,
      "longitude": 19.263687,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1663431239,
      "ems": null
    },
    {
      "latitude": 51.834045,
      "longitude": 19.261333,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1663431245,
      "ems": null
    },
    {
      "latitude": 51.833729,
      "longitude": 19.26033,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1663431248,
      "ems": null
    },
    {
      "latitude": 51.83345,
      "longitude": 19.259186,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1663431251,
      "ems": null
    },
    {
      "latitude": 51.833176,
      "longitude": 19.257994,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663431254,
      "ems": null
    },
    {
      "latitude": 51.832947,
      "longitude": 19.256733,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663431257,
      "ems": null
    },
    {
      "latitude": 51.832752,
      "longitude": 19.255447,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1663431260,
      "ems": null
    },
    {
      "latitude": 51.832565,
      "longitude": 19.254227,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1663431263,
      "ems": null
    },
    {
      "latitude": 51.832424,
      "longitude": 19.25293,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1663431266,
      "ems": null
    },
    {
      "latitude": 51.832306,
      "longitude": 19.25161,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1663431269,
      "ems": null
    },
    {
      "latitude": 51.832241,
      "longitude": 19.250488,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1663431272,
      "ems": null
    },
    {
      "latitude": 51.832191,
      "longitude": 19.249268,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1663431275,
      "ems": null
    },
    {
      "latitude": 51.832146,
      "longitude": 19.248123,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1663431279,
      "ems": null
    },
    {
      "latitude": 51.832169,
      "longitude": 19.247156,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1663431281,
      "ems": null
    },
    {
      "latitude": 51.832214,
      "longitude": 19.245968,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1663431284,
      "ems": null
    },
    {
      "latitude": 51.832306,
      "longitude": 19.244707,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1663431287,
      "ems": null
    },
    {
      "latitude": 51.832474,
      "longitude": 19.243622,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1663431290,
      "ems": null
    },
    {
      "latitude": 51.832581,
      "longitude": 19.242405,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1663431293,
      "ems": null
    },
    {
      "latitude": 51.832718,
      "longitude": 19.241217,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1663431296,
      "ems": null
    },
    {
      "latitude": 51.83289,
      "longitude": 19.240036,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1663431300,
      "ems": null
    },
    {
      "latitude": 51.833172,
      "longitude": 19.239044,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1663431302,
      "ems": null
    },
    {
      "latitude": 51.833725,
      "longitude": 19.238174,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1663431305,
      "ems": null
    },
    {
      "latitude": 51.834457,
      "longitude": 19.237654,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663431308,
      "ems": null
    },
    {
      "latitude": 51.835453,
      "longitude": 19.237442,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1663431311,
      "ems": null
    },
    {
      "latitude": 51.836475,
      "longitude": 19.237671,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1663431315,
      "ems": null
    },
    {
      "latitude": 51.83757,
      "longitude": 19.238174,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1663431317,
      "ems": null
    },
    {
      "latitude": 51.838711,
      "longitude": 19.238815,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1663431320,
      "ems": null
    },
    {
      "latitude": 51.839733,
      "longitude": 19.239426,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1663431323,
      "ems": null
    },
    {
      "latitude": 51.840805,
      "longitude": 19.240189,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1663431326,
      "ems": null
    },
    {
      "latitude": 51.841827,
      "longitude": 19.241028,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1663431330,
      "ems": null
    },
    {
      "latitude": 51.842899,
      "longitude": 19.241867,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1663431332,
      "ems": null
    },
    {
      "latitude": 51.843876,
      "longitude": 19.242859,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1663431335,
      "ems": null
    },
    {
      "latitude": 51.844902,
      "longitude": 19.244232,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1663431339,
      "ems": null
    },
    {
      "latitude": 51.845627,
      "longitude": 19.2453,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1663431341,
      "ems": null
    },
    {
      "latitude": 51.846542,
      "longitude": 19.246859,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1663431345,
      "ems": null
    },
    {
      "latitude": 51.847321,
      "longitude": 19.248428,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1663431348,
      "ems": null
    },
    {
      "latitude": 51.848007,
      "longitude": 19.250051,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1663431351,
      "ems": null
    },
    {
      "latitude": 51.848534,
      "longitude": 19.251709,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1663431353,
      "ems": null
    },
    {
      "latitude": 51.849045,
      "longitude": 19.253464,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663431356,
      "ems": null
    },
    {
      "latitude": 51.849426,
      "longitude": 19.255396,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1663431360,
      "ems": null
    },
    {
      "latitude": 51.849651,
      "longitude": 19.257202,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1663431362,
      "ems": null
    },
    {
      "latitude": 51.849701,
      "longitude": 19.259182,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1663431366,
      "ems": null
    },
    {
      "latitude": 51.849564,
      "longitude": 19.260666,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1663431369,
      "ems": null
    },
    {
      "latitude": 51.849232,
      "longitude": 19.262543,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1663431371,
      "ems": null
    },
    {
      "latitude": 51.848721,
      "longitude": 19.263992,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1663431375,
      "ems": null
    },
    {
      "latitude": 51.847961,
      "longitude": 19.265343,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1663431377,
      "ems": null
    },
    {
      "latitude": 51.847137,
      "longitude": 19.266308,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1663431381,
      "ems": null
    },
    {
      "latitude": 51.84613,
      "longitude": 19.266975,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1663431384,
      "ems": null
    },
    {
      "latitude": 51.845215,
      "longitude": 19.267347,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1663431387,
      "ems": null
    },
    {
      "latitude": 51.844299,
      "longitude": 19.267719,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1663431390,
      "ems": null
    },
    {
      "latitude": 51.84341,
      "longitude": 19.26796,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1663431393,
      "ems": null
    },
    {
      "latitude": 51.842834,
      "longitude": 19.268164,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1663431394,
      "ems": null
    },
    {
      "latitude": 51.841461,
      "longitude": 19.268238,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1663431399,
      "ems": null
    },
    {
      "latitude": 51.840546,
      "longitude": 19.268238,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1663431402,
      "ems": null
    },
    {
      "latitude": 51.839546,
      "longitude": 19.268265,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1663431405,
      "ems": null
    },
    {
      "latitude": 51.83857,
      "longitude": 19.268341,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1663431408,
      "ems": null
    },
    {
      "latitude": 51.837708,
      "longitude": 19.268461,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1663431411,
      "ems": null
    },
    {
      "latitude": 51.836792,
      "longitude": 19.26861,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1663431414,
      "ems": null
    },
    {
      "latitude": 51.835964,
      "longitude": 19.268723,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1663431417,
      "ems": null
    },
    {
      "latitude": 51.835236,
      "longitude": 19.268906,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1663431419,
      "ems": null
    },
    {
      "latitude": 51.833267,
      "longitude": 19.269352,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1663431426,
      "ems": null
    },
    {
      "latitude": 51.832287,
      "longitude": 19.269562,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1663431429,
      "ems": null
    },
    {
      "latitude": 51.831345,
      "longitude": 19.269722,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1663431432,
      "ems": null
    },
    {
      "latitude": 51.830425,
      "longitude": 19.269943,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1663431435,
      "ems": null
    },
    {
      "latitude": 51.829559,
      "longitude": 19.270243,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1663431438,
      "ems": null
    },
    {
      "latitude": 51.828609,
      "longitude": 19.270477,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1663431441,
      "ems": null
    },
    {
      "latitude": 51.827911,
      "longitude": 19.270687,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1663431443,
      "ems": null
    },
    {
      "latitude": 51.82695,
      "longitude": 19.270985,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1663431447,
      "ems": null
    },
    {
      "latitude": 51.826046,
      "longitude": 19.271317,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1663431450,
      "ems": null
    },
    {
      "latitude": 51.824184,
      "longitude": 19.271927,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1663431456,
      "ems": null
    },
    {
      "latitude": 51.822601,
      "longitude": 19.272469,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1663431461,
      "ems": null
    },
    {
      "latitude": 51.820404,
      "longitude": 19.273212,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1663431468,
      "ems": null
    },
    {
      "latitude": 51.818207,
      "longitude": 19.274176,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1663431475,
      "ems": null
    },
    {
      "latitude": 51.815292,
      "longitude": 19.275589,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1663431483,
      "ems": null
    },
    {
      "latitude": 51.814224,
      "longitude": 19.276047,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1663431486,
      "ems": null
    },
    {
      "latitude": 51.81308,
      "longitude": 19.276627,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1663431489,
      "ems": null
    },
    {
      "latitude": 51.812035,
      "longitude": 19.277191,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1663431492,
      "ems": null
    },
    {
      "latitude": 51.810917,
      "longitude": 19.277802,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663431495,
      "ems": null
    },
    {
      "latitude": 51.809799,
      "longitude": 19.278488,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663431498,
      "ems": null
    },
    {
      "latitude": 51.808823,
      "longitude": 19.279001,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663431501,
      "ems": null
    },
    {
      "latitude": 51.807678,
      "longitude": 19.279818,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1663431504,
      "ems": null
    },
    {
      "latitude": 51.80658,
      "longitude": 19.280783,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1663431507,
      "ems": null
    },
    {
      "latitude": 51.80571,
      "longitude": 19.281599,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1663431510,
      "ems": null
    },
    {
      "latitude": 51.80468,
      "longitude": 19.282684,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431513,
      "ems": null
    },
    {
      "latitude": 51.803608,
      "longitude": 19.283752,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431516,
      "ems": null
    },
    {
      "latitude": 51.802631,
      "longitude": 19.284821,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1663431519,
      "ems": null
    },
    {
      "latitude": 51.801746,
      "longitude": 19.285812,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1663431522,
      "ems": null
    },
    {
      "latitude": 51.800812,
      "longitude": 19.286871,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1663431525,
      "ems": null
    },
    {
      "latitude": 51.799759,
      "longitude": 19.287983,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1663431528,
      "ems": null
    },
    {
      "latitude": 51.798752,
      "longitude": 19.289022,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1663431531,
      "ems": null
    },
    {
      "latitude": 51.797791,
      "longitude": 19.290085,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1663431534,
      "ems": null
    },
    {
      "latitude": 51.79686,
      "longitude": 19.291077,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1663431537,
      "ems": null
    },
    {
      "latitude": 51.79472,
      "longitude": 19.293442,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1663431543,
      "ems": null
    },
    {
      "latitude": 51.792618,
      "longitude": 19.295555,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431549,
      "ems": null
    },
    {
      "latitude": 51.790573,
      "longitude": 19.297638,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431555,
      "ems": null
    },
    {
      "latitude": 51.788452,
      "longitude": 19.299786,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1663431561,
      "ems": null
    },
    {
      "latitude": 51.78648,
      "longitude": 19.301834,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431567,
      "ems": null
    },
    {
      "latitude": 51.784382,
      "longitude": 19.30397,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1663431573,
      "ems": null
    },
    {
      "latitude": 51.782272,
      "longitude": 19.306244,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431579,
      "ems": null
    },
    {
      "latitude": 51.779617,
      "longitude": 19.309065,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1663431587,
      "ems": null
    },
    {
      "latitude": 51.777493,
      "longitude": 19.311142,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1663431593,
      "ems": null
    },
    {
      "latitude": 51.775444,
      "longitude": 19.313126,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1663431598,
      "ems": null
    },
    {
      "latitude": 51.773628,
      "longitude": 19.314957,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431603,
      "ems": null
    },
    {
      "latitude": 51.770931,
      "longitude": 19.317627,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431611,
      "ems": null
    },
    {
      "latitude": 51.768219,
      "longitude": 19.320721,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1663431618,
      "ems": null
    },
    {
      "latitude": 51.767166,
      "longitude": 19.322056,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1663431621,
      "ems": null
    },
    {
      "latitude": 51.766068,
      "longitude": 19.323393,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1663431624,
      "ems": null
    },
    {
      "latitude": 51.764973,
      "longitude": 19.324722,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1663431627,
      "ems": null
    },
    {
      "latitude": 51.762737,
      "longitude": 19.327164,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1663431633,
      "ems": null
    },
    {
      "latitude": 51.760391,
      "longitude": 19.329479,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1663431640,
      "ems": null
    },
    {
      "latitude": 51.759293,
      "longitude": 19.330368,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1663431642,
      "ems": null
    },
    {
      "latitude": 51.758057,
      "longitude": 19.331409,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663431645,
      "ems": null
    },
    {
      "latitude": 51.756824,
      "longitude": 19.332428,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663431648,
      "ems": null
    },
    {
      "latitude": 51.755569,
      "longitude": 19.33342,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663431651,
      "ems": null
    },
    {
      "latitude": 51.754303,
      "longitude": 19.334379,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663431654,
      "ems": null
    },
    {
      "latitude": 51.753342,
      "longitude": 19.335196,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663431657,
      "ems": null
    },
    {
      "latitude": 51.751968,
      "longitude": 19.336235,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1663431660,
      "ems": null
    },
    {
      "latitude": 51.750824,
      "longitude": 19.337051,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663431663,
      "ems": null
    },
    {
      "latitude": 51.748539,
      "longitude": 19.339142,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1663431670,
      "ems": null
    },
    {
      "latitude": 51.746536,
      "longitude": 19.341049,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1663431675,
      "ems": null
    },
    {
      "latitude": 51.745373,
      "longitude": 19.342346,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1663431679,
      "ems": null
    },
    {
      "latitude": 51.74437,
      "longitude": 19.34351,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1663431681,
      "ems": null
    },
    {
      "latitude": 51.7435,
      "longitude": 19.344549,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1663431684,
      "ems": null
    },
    {
      "latitude": 51.742264,
      "longitude": 19.345959,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1663431688,
      "ems": null
    },
    {
      "latitude": 51.741322,
      "longitude": 19.347153,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1663431690,
      "ems": null
    },
    {
      "latitude": 51.740299,
      "longitude": 19.34845,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1663431693,
      "ems": null
    },
    {
      "latitude": 51.739288,
      "longitude": 19.349819,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1663431697,
      "ems": null
    },
    {
      "latitude": 51.738373,
      "longitude": 19.351154,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1663431699,
      "ems": null
    },
    {
      "latitude": 51.737366,
      "longitude": 19.352722,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1663431703,
      "ems": null
    },
    {
      "latitude": 51.736542,
      "longitude": 19.354124,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1663431705,
      "ems": null
    },
    {
      "latitude": 51.735535,
      "longitude": 19.355831,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1663431708,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.357605,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1663431711,
      "ems": null
    },
    {
      "latitude": 51.733688,
      "longitude": 19.359665,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1663431715,
      "ems": null
    },
    {
      "latitude": 51.733177,
      "longitude": 19.361725,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1663431718,
      "ems": null
    },
    {
      "latitude": 51.732925,
      "longitude": 19.364071,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1663431720,
      "ems": null
    },
    {
      "latitude": 51.73299,
      "longitude": 19.366379,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1663431723,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 19.368973,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1663431726,
      "ems": null
    },
    {
      "latitude": 51.733688,
      "longitude": 19.371262,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663431729,
      "ems": null
    },
    {
      "latitude": 51.7342,
      "longitude": 19.37355,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663431732,
      "ems": null
    },
    {
      "latitude": 51.734756,
      "longitude": 19.375652,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663431735,
      "ems": null
    },
    {
      "latitude": 51.735397,
      "longitude": 19.378101,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663431739,
      "ems": null
    },
    {
      "latitude": 51.73597,
      "longitude": 19.380188,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663431742,
      "ems": null
    },
    {
      "latitude": 51.736435,
      "longitude": 19.382019,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663431744,
      "ems": null
    },
    {
      "latitude": 51.737087,
      "longitude": 19.384384,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663431748,
      "ems": null
    },
    {
      "latitude": 51.737598,
      "longitude": 19.386292,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663431750,
      "ems": null
    },
    {
      "latitude": 51.73811,
      "longitude": 19.388428,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663431754,
      "ems": null
    },
    {
      "latitude": 51.738602,
      "longitude": 19.39035,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663431757,
      "ems": null
    },
    {
      "latitude": 51.739151,
      "longitude": 19.392427,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663431760,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 19.39621,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663431766,
      "ems": null
    },
    {
      "latitude": 51.740997,
      "longitude": 19.400101,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663431772,
      "ems": null
    },
    {
      "latitude": 51.741928,
      "longitude": 19.404144,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663431778,
      "ems": null
    },
    {
      "latitude": 51.742767,
      "longitude": 19.407883,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663431784,
      "ems": null
    },
    {
      "latitude": 51.743637,
      "longitude": 19.411505,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663431790,
      "ems": null
    },
    {
      "latitude": 51.744488,
      "longitude": 19.415054,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663431795,
      "ems": null
    },
    {
      "latitude": 51.745422,
      "longitude": 19.419077,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663431802,
      "ems": null
    },
    {
      "latitude": 51.746071,
      "longitude": 19.42276,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1663431808,
      "ems": null
    },
    {
      "latitude": 51.746117,
      "longitude": 19.424667,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1663431811,
      "ems": null
    },
    {
      "latitude": 51.745926,
      "longitude": 19.426426,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1663431814,
      "ems": null
    },
    {
      "latitude": 51.74556,
      "longitude": 19.427912,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1663431816,
      "ems": null
    },
    {
      "latitude": 51.744862,
      "longitude": 19.429626,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1663431820,
      "ems": null
    },
    {
      "latitude": 51.744209,
      "longitude": 19.430618,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1663431823,
      "ems": null
    },
    {
      "latitude": 51.743225,
      "longitude": 19.431622,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1663431826,
      "ems": null
    },
    {
      "latitude": 51.742355,
      "longitude": 19.432291,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1663431829,
      "ems": null
    },
    {
      "latitude": 51.741417,
      "longitude": 19.432983,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1663431832,
      "ems": null
    },
    {
      "latitude": 51.74057,
      "longitude": 19.433552,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1663431835,
      "ems": null
    },
    {
      "latitude": 51.739609,
      "longitude": 19.434221,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1663431838,
      "ems": null
    },
    {
      "latitude": 51.738808,
      "longitude": 19.434662,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663431841,
      "ems": null
    },
    {
      "latitude": 51.737823,
      "longitude": 19.435186,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1663431844,
      "ems": null
    },
    {
      "latitude": 51.736862,
      "longitude": 19.435631,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1663431847,
      "ems": null
    },
    {
      "latitude": 51.735874,
      "longitude": 19.436035,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1663431850,
      "ems": null
    },
    {
      "latitude": 51.734943,
      "longitude": 19.436493,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1663431853,
      "ems": null
    },
    {
      "latitude": 51.734024,
      "longitude": 19.436819,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1663431856,
      "ems": null
    },
    {
      "latitude": 51.733036,
      "longitude": 19.437027,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1663431859,
      "ems": null
    },
    {
      "latitude": 51.732197,
      "longitude": 19.436951,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1663431862,
      "ems": null
    },
    {
      "latitude": 51.731415,
      "longitude": 19.436522,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1663431865,
      "ems": null
    },
    {
      "latitude": 51.731174,
      "longitude": 19.43634,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1663431865,
      "ems": null
    },
    {
      "latitude": 51.730289,
      "longitude": 19.435043,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1663431870,
      "ems": null
    },
    {
      "latitude": 51.729637,
      "longitude": 19.433289,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1663431874,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.432068,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1663431877,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.431076,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1663431879,
      "ems": null
    },
    {
      "latitude": 51.728752,
      "longitude": 19.429703,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663431883,
      "ems": null
    },
    {
      "latitude": 51.728569,
      "longitude": 19.428711,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663431886,
      "ems": null
    },
    {
      "latitude": 51.728348,
      "longitude": 19.427614,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663431889,
      "ems": null
    },
    {
      "latitude": 51.72821,
      "longitude": 19.426872,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663431891,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.425125,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663431895,
      "ems": null
    },
    {
      "latitude": 51.727634,
      "longitude": 19.42421,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663431897,
      "ems": null
    },
    {
      "latitude": 51.727077,
      "longitude": 19.421921,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1663431904,
      "ems": null
    },
    {
      "latitude": 51.726608,
      "longitude": 19.419819,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663431910,
      "ems": null
    },
    {
      "latitude": 51.725681,
      "longitude": 19.415817,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1663431921,
      "ems": null
    },
    {
      "latitude": 51.724777,
      "longitude": 19.411432,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1663431932,
      "ems": null
    },
    {
      "latitude": 51.724331,
      "longitude": 19.409561,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1663431937,
      "ems": null
    },
    {
      "latitude": 51.723587,
      "longitude": 19.405939,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663431946,
      "ems": null
    },
    {
      "latitude": 51.723083,
      "longitude": 19.403711,
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
      "timestamp": 1663431951,
      "ems": null
    },
    {
      "latitude": 51.722656,
      "longitude": 19.401627,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663431957,
      "ems": null
    },
    {
      "latitude": 51.719814,
      "longitude": 19.388657,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663431992,
      "ems": null
    },
    {
      "latitude": 51.71907,
      "longitude": 19.384766,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432001,
      "ems": null
    },
    {
      "latitude": 51.71846,
      "longitude": 19.381813,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663432009,
      "ems": null
    },
    {
      "latitude": 51.717953,
      "longitude": 19.37912,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432015,
      "ems": null
    },
    {
      "latitude": 51.717396,
      "longitude": 19.37645,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432021,
      "ems": null
    },
    {
      "latitude": 51.716949,
      "longitude": 19.374092,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663432027,
      "ems": null
    },
    {
      "latitude": 51.716557,
      "longitude": 19.371414,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1663432033,
      "ems": null
    },
    {
      "latitude": 51.716034,
      "longitude": 19.368748,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1663432039,
      "ems": null
    },
    {
      "latitude": 51.715622,
      "longitude": 19.367634,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1663432042,
      "ems": null
    },
    {
      "latitude": 51.715073,
      "longitude": 19.366669,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1663432045,
      "ems": null
    },
    {
      "latitude": 51.714371,
      "longitude": 19.365845,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1663432048,
      "ems": null
    },
    {
      "latitude": 51.713623,
      "longitude": 19.365234,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1663432052,
      "ems": null
    },
    {
      "latitude": 51.712788,
      "longitude": 19.364777,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1663432054,
      "ems": null
    },
    {
      "latitude": 51.711948,
      "longitude": 19.364624,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1663432057,
      "ems": null
    },
    {
      "latitude": 51.711155,
      "longitude": 19.364624,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1663432060,
      "ems": null
    },
    {
      "latitude": 51.71032,
      "longitude": 19.364853,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1663432063,
      "ems": null
    },
    {
      "latitude": 51.709396,
      "longitude": 19.365334,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1663432066,
      "ems": null
    },
    {
      "latitude": 51.708389,
      "longitude": 19.365852,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663432070,
      "ems": null
    },
    {
      "latitude": 51.707474,
      "longitude": 19.366373,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1663432072,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.367041,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1663432076,
      "ems": null
    },
    {
      "latitude": 51.70557,
      "longitude": 19.367599,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1663432078,
      "ems": null
    },
    {
      "latitude": 51.704453,
      "longitude": 19.368303,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1663432082,
      "ems": null
    },
    {
      "latitude": 51.703583,
      "longitude": 19.368822,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1663432084,
      "ems": null
    },
    {
      "latitude": 51.702621,
      "longitude": 19.36949,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1663432087,
      "ems": null
    },
    {
      "latitude": 51.701569,
      "longitude": 19.370117,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663432090,
      "ems": null
    },
    {
      "latitude": 51.700653,
      "longitude": 19.370604,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1663432093,
      "ems": null
    },
    {
      "latitude": 51.698547,
      "longitude": 19.372162,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1663432100,
      "ems": null
    },
    {
      "latitude": 51.697723,
      "longitude": 19.37335,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1663432102,
      "ems": null
    },
    {
      "latitude": 51.696991,
      "longitude": 19.375057,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1663432106,
      "ems": null
    },
    {
      "latitude": 51.696625,
      "longitude": 19.37669,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1663432108,
      "ems": null
    },
    {
      "latitude": 51.696445,
      "longitude": 19.379044,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1663432112,
      "ems": null
    },
    {
      "latitude": 51.696541,
      "longitude": 19.38118,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1663432115,
      "ems": null
    },
    {
      "latitude": 51.696774,
      "longitude": 19.383163,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1663432117,
      "ems": null
    },
    {
      "latitude": 51.697037,
      "longitude": 19.385302,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1663432121,
      "ems": null
    },
    {
      "latitude": 51.697357,
      "longitude": 19.387381,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1663432124,
      "ems": null
    },
    {
      "latitude": 51.697659,
      "longitude": 19.389496,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1663432127,
      "ems": null
    },
    {
      "latitude": 51.697983,
      "longitude": 19.391403,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1663432130,
      "ems": null
    },
    {
      "latitude": 51.698318,
      "longitude": 19.393541,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1663432133,
      "ems": null
    },
    {
      "latitude": 51.698685,
      "longitude": 19.395695,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1663432136,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.397659,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1663432139,
      "ems": null
    },
    {
      "latitude": 51.699326,
      "longitude": 19.399555,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1663432141,
      "ems": null
    },
    {
      "latitude": 51.699753,
      "longitude": 19.401932,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1663432145,
      "ems": null
    },
    {
      "latitude": 51.700169,
      "longitude": 19.403915,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663432148,
      "ems": null
    },
    {
      "latitude": 51.700562,
      "longitude": 19.406086,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663432151,
      "ems": null
    },
    {
      "latitude": 51.701019,
      "longitude": 19.408165,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663432154,
      "ems": null
    },
    {
      "latitude": 51.701477,
      "longitude": 19.410244,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663432157,
      "ems": null
    },
    {
      "latitude": 51.701893,
      "longitude": 19.412079,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663432159,
      "ems": null
    },
    {
      "latitude": 51.702438,
      "longitude": 19.414251,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663432163,
      "ems": null
    },
    {
      "latitude": 51.702915,
      "longitude": 19.416199,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663432166,
      "ems": null
    },
    {
      "latitude": 51.70343,
      "longitude": 19.418259,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663432169,
      "ems": null
    },
    {
      "latitude": 51.703949,
      "longitude": 19.420265,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663432172,
      "ems": null
    },
    {
      "latitude": 51.704594,
      "longitude": 19.422455,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663432175,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 19.424286,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1663432178,
      "ems": null
    },
    {
      "latitude": 51.705662,
      "longitude": 19.426117,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1663432181,
      "ems": null
    },
    {
      "latitude": 51.706547,
      "longitude": 19.429779,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663432187,
      "ems": null
    },
    {
      "latitude": 51.707382,
      "longitude": 19.433626,
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
      "squawk": "7000",
      "timestamp": 1663432193,
      "ems": null
    },
    {
      "latitude": 51.708206,
      "longitude": 19.437189,
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
      "timestamp": 1663432199,
      "ems": null
    },
    {
      "latitude": 51.709015,
      "longitude": 19.440689,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663432205,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 19.444242,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663432211,
      "ems": null
    },
    {
      "latitude": 51.710953,
      "longitude": 19.448029,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663432217,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 19.449957,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663432220,
      "ems": null
    },
    {
      "latitude": 51.712189,
      "longitude": 19.453817,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1663432226,
      "ems": null
    },
    {
      "latitude": 51.712326,
      "longitude": 19.455822,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1663432229,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 19.457397,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1663432232,
      "ems": null
    },
    {
      "latitude": 51.711948,
      "longitude": 19.459381,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1663432235,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 19.461241,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1663432238,
      "ems": null
    },
    {
      "latitude": 51.710815,
      "longitude": 19.462727,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1663432241,
      "ems": null
    },
    {
      "latitude": 51.710037,
      "longitude": 19.464062,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1663432244,
      "ems": null
    },
    {
      "latitude": 51.709351,
      "longitude": 19.464952,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1663432247,
      "ems": null
    },
    {
      "latitude": 51.708481,
      "longitude": 19.465769,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1663432250,
      "ems": null
    },
    {
      "latitude": 51.70734,
      "longitude": 19.466324,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1663432253,
      "ems": null
    },
    {
      "latitude": 51.706364,
      "longitude": 19.466248,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1663432256,
      "ems": null
    },
    {
      "latitude": 51.705524,
      "longitude": 19.465866,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1663432259,
      "ems": null
    },
    {
      "latitude": 51.704681,
      "longitude": 19.465176,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1663432262,
      "ems": null
    },
    {
      "latitude": 51.704086,
      "longitude": 19.464508,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1663432265,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.463654,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1663432268,
      "ems": null
    },
    {
      "latitude": 51.702942,
      "longitude": 19.462727,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1663432271,
      "ems": null
    },
    {
      "latitude": 51.702404,
      "longitude": 19.461517,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1663432274,
      "ems": null
    },
    {
      "latitude": 51.701981,
      "longitude": 19.460276,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1663432277,
      "ems": null
    },
    {
      "latitude": 51.701706,
      "longitude": 19.458923,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663432280,
      "ems": null
    },
    {
      "latitude": 51.701614,
      "longitude": 19.457321,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1663432283,
      "ems": null
    },
    {
      "latitude": 51.701752,
      "longitude": 19.455971,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1663432286,
      "ems": null
    },
    {
      "latitude": 51.701981,
      "longitude": 19.454708,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1663432289,
      "ems": null
    },
    {
      "latitude": 51.702267,
      "longitude": 19.453201,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1663432292,
      "ems": null
    },
    {
      "latitude": 51.702484,
      "longitude": 19.451887,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1663432295,
      "ems": null
    },
    {
      "latitude": 51.702713,
      "longitude": 19.450552,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1663432298,
      "ems": null
    },
    {
      "latitude": 51.702965,
      "longitude": 19.44931,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1663432301,
      "ems": null
    },
    {
      "latitude": 51.703197,
      "longitude": 19.447937,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1663432304,
      "ems": null
    },
    {
      "latitude": 51.703537,
      "longitude": 19.446617,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1663432307,
      "ems": null
    },
    {
      "latitude": 51.703949,
      "longitude": 19.445503,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1663432310,
      "ems": null
    },
    {
      "latitude": 51.704544,
      "longitude": 19.444391,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1663432313,
      "ems": null
    },
    {
      "latitude": 51.705246,
      "longitude": 19.443512,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1663432316,
      "ems": null
    },
    {
      "latitude": 51.705803,
      "longitude": 19.443054,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1663432318,
      "ems": null
    },
    {
      "latitude": 51.707108,
      "longitude": 19.442444,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1663432322,
      "ems": null
    },
    {
      "latitude": 51.70816,
      "longitude": 19.442238,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1663432325,
      "ems": null
    },
    {
      "latitude": 51.709248,
      "longitude": 19.442368,
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1663432328,
      "ems": null
    },
    {
      "latitude": 51.71032,
      "longitude": 19.442749,
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1663432331,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 19.443426,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1663432334,
      "ems": null
    },
    {
      "latitude": 51.712418,
      "longitude": 19.444242,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1663432337,
      "ems": null
    },
    {
      "latitude": 51.713299,
      "longitude": 19.445267,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1663432340,
      "ems": null
    },
    {
      "latitude": 51.714184,
      "longitude": 19.446793,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1663432343,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.447403,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1663432345,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.45015,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1663432349,
      "ems": null
    },
    {
      "latitude": 51.71637,
      "longitude": 19.45137,
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1663432352,
      "ems": null
    },
    {
      "latitude": 51.717499,
      "longitude": 19.45211,
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1663432355,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.45211,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1663432358,
      "ems": null
    },
    {
      "latitude": 51.71965,
      "longitude": 19.451666,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1663432361,
      "ems": null
    },
    {
      "latitude": 51.720566,
      "longitude": 19.451145,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663432364,
      "ems": null
    },
    {
      "latitude": 51.721527,
      "longitude": 19.450552,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663432367,
      "ems": null
    },
    {
      "latitude": 51.722328,
      "longitude": 19.449997,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1663432370,
      "ems": null
    },
    {
      "latitude": 51.7234,
      "longitude": 19.44931,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1663432373,
      "ems": null
    },
    {
      "latitude": 51.724548,
      "longitude": 19.448473,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663432376,
      "ems": null
    },
    {
      "latitude": 51.72551,
      "longitude": 19.447731,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663432379,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.446945,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663432382,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 19.446247,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1663432385,
      "ems": null
    },
    {
      "latitude": 51.728165,
      "longitude": 19.445503,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663432388,
      "ems": null
    },
    {
      "latitude": 51.728985,
      "longitude": 19.444656,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663432391,
      "ems": null
    },
    {
      "latitude": 51.729813,
      "longitude": 19.443352,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1663432395,
      "ems": null
    },
    {
      "latitude": 51.730179,
      "longitude": 19.442461,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1663432397,
      "ems": null
    },
    {
      "latitude": 51.730545,
      "longitude": 19.440826,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1663432400,
      "ems": null
    },
    {
      "latitude": 51.730568,
      "longitude": 19.43924,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1663432403,
      "ems": null
    },
    {
      "latitude": 51.730408,
      "longitude": 19.43808,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663432406,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.436596,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663432409,
      "ems": null
    },
    {
      "latitude": 51.729904,
      "longitude": 19.435556,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663432413,
      "ems": null
    },
    {
      "latitude": 51.729591,
      "longitude": 19.434128,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663432415,
      "ems": null
    },
    {
      "latitude": 51.729401,
      "longitude": 19.432959,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663432419,
      "ems": null
    },
    {
      "latitude": 51.729359,
      "longitude": 19.432755,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432419,
      "ems": null
    },
    {
      "latitude": 51.728897,
      "longitude": 19.430954,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1663432424,
      "ems": null
    },
    {
      "latitude": 51.728569,
      "longitude": 19.429855,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1663432428,
      "ems": null
    },
    {
      "latitude": 51.728287,
      "longitude": 19.428253,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1663432432,
      "ems": null
    },
    {
      "latitude": 51.727798,
      "longitude": 19.425312,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663432440,
      "ems": null
    },
    {
      "latitude": 51.727077,
      "longitude": 19.42215,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1663432448,
      "ems": null
    },
    {
      "latitude": 51.726612,
      "longitude": 19.419937,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432453,
      "ems": null
    },
    {
      "latitude": 51.726242,
      "longitude": 19.418261,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432457,
      "ems": null
    },
    {
      "latitude": 51.725914,
      "longitude": 19.416733,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663432461,
      "ems": null
    },
    {
      "latitude": 51.725006,
      "longitude": 19.41247,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432472,
      "ems": null
    },
    {
      "latitude": 51.724609,
      "longitude": 19.410782,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432476,
      "ems": null
    },
    {
      "latitude": 51.72377,
      "longitude": 19.406902,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432486,
      "ems": null
    },
    {
      "latitude": 51.722992,
      "longitude": 19.403339,
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
      "timestamp": 1663432495,
      "ems": null
    },
    {
      "latitude": 51.722626,
      "longitude": 19.401484,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432499,
      "ems": null
    },
    {
      "latitude": 51.71991,
      "longitude": 19.389038,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432534,
      "ems": null
    },
    {
      "latitude": 51.718735,
      "longitude": 19.383595,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663432546,
      "ems": null
    },
    {
      "latitude": 51.717911,
      "longitude": 19.379585,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432555,
      "ems": null
    },
    {
      "latitude": 51.717453,
      "longitude": 19.376913,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1663432560,
      "ems": null
    },
    {
      "latitude": 51.716995,
      "longitude": 19.374241,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1663432566,
      "ems": null
    },
    {
      "latitude": 51.716789,
      "longitude": 19.372864,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1663432569,
      "ems": null
    },
    {
      "latitude": 51.716602,
      "longitude": 19.37149,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "timestamp": 1663432572,
      "ems": null
    },
    {
      "latitude": 51.7164,
      "longitude": 19.370234,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1663432575,
      "ems": null
    },
    {
      "latitude": 51.715759,
      "longitude": 19.367931,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1663432581,
      "ems": null
    },
    {
      "latitude": 51.71521,
      "longitude": 19.367041,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1663432584,
      "ems": null
    },
    {
      "latitude": 51.714523,
      "longitude": 19.366299,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1663432587,
      "ems": null
    },
    {
      "latitude": 51.713764,
      "longitude": 19.365921,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1663432590,
      "ems": null
    },
    {
      "latitude": 51.712879,
      "longitude": 19.365845,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1663432593,
      "ems": null
    },
    {
      "latitude": 51.71196,
      "longitude": 19.366001,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1663432596,
      "ems": null
    },
    {
      "latitude": 51.711063,
      "longitude": 19.366379,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1663432599,
      "ems": null
    },
    {
      "latitude": 51.710175,
      "longitude": 19.366817,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1663432602,
      "ems": null
    },
    {
      "latitude": 51.709213,
      "longitude": 19.367413,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1663432605,
      "ems": null
    },
    {
      "latitude": 51.708298,
      "longitude": 19.368006,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1663432608,
      "ems": null
    },
    {
      "latitude": 51.707294,
      "longitude": 19.368515,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663432611,
      "ems": null
    },
    {
      "latitude": 51.706314,
      "longitude": 19.369049,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1663432614,
      "ems": null
    },
    {
      "latitude": 51.705276,
      "longitude": 19.369638,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663432617,
      "ems": null
    },
    {
      "latitude": 51.704361,
      "longitude": 19.370193,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1663432620,
      "ems": null
    },
    {
      "latitude": 51.703335,
      "longitude": 19.370728,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1663432623,
      "ems": null
    },
    {
      "latitude": 51.702358,
      "longitude": 19.371338,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1663432626,
      "ems": null
    },
    {
      "latitude": 51.70031,
      "longitude": 19.37233,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1663432632,
      "ems": null
    },
    {
      "latitude": 51.699146,
      "longitude": 19.372787,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1663432635,
      "ems": null
    },
    {
      "latitude": 51.695793,
      "longitude": 19.374619,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1663432644,
      "ems": null
    },
    {
      "latitude": 51.694912,
      "longitude": 19.375763,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1663432647,
      "ems": null
    },
    {
      "latitude": 51.694164,
      "longitude": 19.377441,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1663432650,
      "ems": null
    },
    {
      "latitude": 51.693741,
      "longitude": 19.379511,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1663432653,
      "ems": null
    },
    {
      "latitude": 51.693649,
      "longitude": 19.381887,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1663432656,
      "ems": null
    },
    {
      "latitude": 51.693832,
      "longitude": 19.384113,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1663432659,
      "ems": null
    },
    {
      "latitude": 51.694061,
      "longitude": 19.386044,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1663432663,
      "ems": null
    },
    {
      "latitude": 51.694397,
      "longitude": 19.388657,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1663432665,
      "ems": null
    },
    {
      "latitude": 51.694656,
      "longitude": 19.390795,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1663432668,
      "ems": null
    },
    {
      "latitude": 51.694958,
      "longitude": 19.392929,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1663432671,
      "ems": null
    },
    {
      "latitude": 51.695297,
      "longitude": 19.395248,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1663432674,
      "ems": null
    },
    {
      "latitude": 51.695709,
      "longitude": 19.397402,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663432677,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.39949,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663432680,
      "ems": null
    },
    {
      "latitude": 51.696579,
      "longitude": 19.401632,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663432683,
      "ems": null
    },
    {
      "latitude": 51.697052,
      "longitude": 19.403763,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663432687,
      "ems": null
    },
    {
      "latitude": 51.697472,
      "longitude": 19.405746,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663432689,
      "ems": null
    },
    {
      "latitude": 51.697937,
      "longitude": 19.407959,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663432692,
      "ems": null
    },
    {
      "latitude": 51.698318,
      "longitude": 19.409872,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663432695,
      "ems": null
    },
    {
      "latitude": 51.69873,
      "longitude": 19.411951,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663432699,
      "ems": null
    },
    {
      "latitude": 51.699142,
      "longitude": 19.413733,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663432701,
      "ems": null
    },
    {
      "latitude": 51.699703,
      "longitude": 19.416275,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663432705,
      "ems": null
    },
    {
      "latitude": 51.700588,
      "longitude": 19.420166,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663432711,
      "ems": null
    },
    {
      "latitude": 51.701569,
      "longitude": 19.4242,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663432716,
      "ems": null
    },
    {
      "latitude": 51.702545,
      "longitude": 19.428024,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663432723,
      "ems": null
    },
    {
      "latitude": 51.703033,
      "longitude": 19.42984,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663432725,
      "ems": null
    },
    {
      "latitude": 51.703995,
      "longitude": 19.433924,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663432732,
      "ems": null
    },
    {
      "latitude": 51.704819,
      "longitude": 19.437784,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663432738,
      "ems": null
    },
    {
      "latitude": 51.705662,
      "longitude": 19.441605,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663432744,
      "ems": null
    },
    {
      "latitude": 51.70665,
      "longitude": 19.445429,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1663432750,
      "ems": null
    },
    {
      "latitude": 51.707386,
      "longitude": 19.447098,
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1663432753,
      "ems": null
    },
    {
      "latitude": 51.708176,
      "longitude": 19.448395,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1663432755,
      "ems": null
    },
    {
      "latitude": 51.709248,
      "longitude": 19.449615,
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1663432758,
      "ems": null
    },
    {
      "latitude": 51.710312,
      "longitude": 19.450403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1663432761,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 19.450848,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1663432764,
      "ems": null
    },
    {
      "latitude": 51.712646,
      "longitude": 19.450912,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1663432767,
      "ems": null
    },
    {
      "latitude": 51.71381,
      "longitude": 19.45076,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1663432771,
      "ems": null
    },
    {
      "latitude": 51.714184,
      "longitude": 19.450607,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1663432772,
      "ems": null
    },
    {
      "latitude": 51.715206,
      "longitude": 19.450302,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1663432775,
      "ems": null
    },
    {
      "latitude": 51.716976,
      "longitude": 19.449615,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663432779,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 19.449066,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663432783,
      "ems": null
    },
    {
      "latitude": 51.719257,
      "longitude": 19.448547,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663432786,
      "ems": null
    },
    {
      "latitude": 51.7202,
      "longitude": 19.448101,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1663432789,
      "ems": null
    },
    {
      "latitude": 51.721306,
      "longitude": 19.447556,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1663432792,
      "ems": null
    },
    {
      "latitude": 51.722328,
      "longitude": 19.447021,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663432795,
      "ems": null
    },
    {
      "latitude": 51.723404,
      "longitude": 19.446394,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663432798,
      "ems": null
    },
    {
      "latitude": 51.724422,
      "longitude": 19.445801,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663432801,
      "ems": null
    },
    {
      "latitude": 51.725449,
      "longitude": 19.44519,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663432803,
      "ems": null
    },
    {
      "latitude": 51.726517,
      "longitude": 19.444538,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663432807,
      "ems": null
    },
    {
      "latitude": 51.727589,
      "longitude": 19.443817,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1663432810,
      "ems": null
    },
    {
      "latitude": 51.728439,
      "longitude": 19.443054,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663432813,
      "ems": null
    },
    {
      "latitude": 51.729263,
      "longitude": 19.441866,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1663432816,
      "ems": null
    },
    {
      "latitude": 51.729813,
      "longitude": 19.440754,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1663432819,
      "ems": null
    },
    {
      "latitude": 51.730179,
      "longitude": 19.439268,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1663432822,
      "ems": null
    },
    {
      "latitude": 51.730225,
      "longitude": 19.437933,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1663432825,
      "ems": null
    },
    {
      "latitude": 51.730103,
      "longitude": 19.436874,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1663432828,
      "ems": null
    },
    {
      "latitude": 51.729813,
      "longitude": 19.435261,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1663432831,
      "ems": null
    },
    {
      "latitude": 51.729584,
      "longitude": 19.433998,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663432834,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.433136,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663432836,
      "ems": null
    },
    {
      "latitude": 51.729218,
      "longitude": 19.431919,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432839,
      "ems": null
    },
    {
      "latitude": 51.728897,
      "longitude": 19.430435,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663432843,
      "ems": null
    },
    {
      "latitude": 51.728569,
      "longitude": 19.429016,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432846,
      "ems": null
    },
    {
      "latitude": 51.728287,
      "longitude": 19.427795,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432849,
      "ems": null
    },
    {
      "latitude": 51.728054,
      "longitude": 19.426575,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432852,
      "ems": null
    },
    {
      "latitude": 51.727753,
      "longitude": 19.425312,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432855,
      "ems": null
    },
    {
      "latitude": 51.727478,
      "longitude": 19.424126,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432858,
      "ems": null
    },
    {
      "latitude": 51.726986,
      "longitude": 19.421768,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432864,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.418633,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432870,
      "ems": null
    },
    {
      "latitude": 51.725636,
      "longitude": 19.415283,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663432878,
      "ems": null
    },
    {
      "latitude": 51.724869,
      "longitude": 19.411802,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1663432885,
      "ems": null
    },
    {
      "latitude": 51.72382,
      "longitude": 19.407043,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432895,
      "ems": null
    },
    {
      "latitude": 51.723492,
      "longitude": 19.405518,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432898,
      "ems": null
    },
    {
      "latitude": 51.722672,
      "longitude": 19.40193,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432906,
      "ems": null
    },
    {
      "latitude": 51.722515,
      "longitude": 19.401016,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663432908,
      "ems": null
    },
    {
      "latitude": 51.71933,
      "longitude": 19.385895,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663432943,
      "ems": null
    },
    {
      "latitude": 51.718697,
      "longitude": 19.382629,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663432951,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.379957,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1663432957,
      "ems": null
    },
    {
      "latitude": 51.717766,
      "longitude": 19.377518,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432963,
      "ems": null
    },
    {
      "latitude": 51.717316,
      "longitude": 19.37528,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "squawk": "7000",
      "timestamp": 1663432969,
      "ems": null
    },
    {
      "latitude": 51.716812,
      "longitude": 19.372831,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663432975,
      "ems": null
    },
    {
      "latitude": 51.716557,
      "longitude": 19.371719,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1663432978,
      "ems": null
    },
    {
      "latitude": 51.716137,
      "longitude": 19.370651,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1663432981,
      "ems": null
    },
    {
      "latitude": 51.715534,
      "longitude": 19.369812,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1663432984,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.369268,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1663432987,
      "ems": null
    },
    {
      "latitude": 51.713974,
      "longitude": 19.368896,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1663432990,
      "ems": null
    },
    {
      "latitude": 51.713066,
      "longitude": 19.368973,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1663432993,
      "ems": null
    },
    {
      "latitude": 51.712135,
      "longitude": 19.369278,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1663432996,
      "ems": null
    },
    {
      "latitude": 51.711205,
      "longitude": 19.370041,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1663432999,
      "ems": null
    },
    {
      "latitude": 51.710129,
      "longitude": 19.370975,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1663433003,
      "ems": null
    },
    {
      "latitude": 51.709351,
      "longitude": 19.371643,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663433005,
      "ems": null
    },
    {
      "latitude": 51.708435,
      "longitude": 19.372385,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663433008,
      "ems": null
    },
    {
      "latitude": 51.707565,
      "longitude": 19.373053,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663433011,
      "ems": null
    },
    {
      "latitude": 51.706688,
      "longitude": 19.373779,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663433014,
      "ems": null
    },
    {
      "latitude": 51.705826,
      "longitude": 19.374464,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1663433017,
      "ems": null
    },
    {
      "latitude": 51.704918,
      "longitude": 19.375229,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1663433020,
      "ems": null
    },
    {
      "latitude": 51.704033,
      "longitude": 19.375916,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1663433023,
      "ems": null
    },
    {
      "latitude": 51.703011,
      "longitude": 19.376678,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1663433026,
      "ems": null
    },
    {
      "latitude": 51.701111,
      "longitude": 19.378176,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1663433032,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.379654,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1663433038,
      "ems": null
    },
    {
      "latitude": 51.697952,
      "longitude": 19.380402,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1663433041,
      "ems": null
    },
    {
      "latitude": 51.695934,
      "longitude": 19.382095,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1663433047,
      "ems": null
    },
    {
      "latitude": 51.695004,
      "longitude": 19.38385,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1663433051,
      "ems": null
    },
    {
      "latitude": 51.694492,
      "longitude": 19.385529,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1663433054,
      "ems": null
    },
    {
      "latitude": 51.694164,
      "longitude": 19.387665,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1663433057,
      "ems": null
    },
    {
      "latitude": 51.694199,
      "longitude": 19.390127,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1663433060,
      "ems": null
    },
    {
      "latitude": 51.694473,
      "longitude": 19.392206,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1663433063,
      "ems": null
    },
    {
      "latitude": 51.694912,
      "longitude": 19.394302,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663433065,
      "ems": null
    },
    {
      "latitude": 51.695423,
      "longitude": 19.396439,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663433069,
      "ems": null
    },
    {
      "latitude": 51.69598,
      "longitude": 19.398499,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663433072,
      "ems": null
    },
    {
      "latitude": 51.696533,
      "longitude": 19.400518,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663433075,
      "ems": null
    },
    {
      "latitude": 51.697037,
      "longitude": 19.402374,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663433078,
      "ems": null
    },
    {
      "latitude": 51.697563,
      "longitude": 19.404297,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663433081,
      "ems": null
    },
    {
      "latitude": 51.697952,
      "longitude": 19.405939,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663433084,
      "ems": null
    },
    {
      "latitude": 51.69841,
      "longitude": 19.407646,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663433086,
      "ems": null
    },
    {
      "latitude": 51.698868,
      "longitude": 19.409485,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663433089,
      "ems": null
    },
    {
      "latitude": 51.699326,
      "longitude": 19.411432,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663433093,
      "ems": null
    },
    {
      "latitude": 51.700195,
      "longitude": 19.414921,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663433099,
      "ems": null
    },
    {
      "latitude": 51.701019,
      "longitude": 19.418409,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663433105,
      "ems": null
    },
    {
      "latitude": 51.701889,
      "longitude": 19.422195,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663433111,
      "ems": null
    },
    {
      "latitude": 51.702637,
      "longitude": 19.425354,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663433117,
      "ems": null
    },
    {
      "latitude": 51.703674,
      "longitude": 19.429247,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663433123,
      "ems": null
    },
    {
      "latitude": 51.704685,
      "longitude": 19.432755,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1663433129,
      "ems": null
    },
    {
      "latitude": 51.705662,
      "longitude": 19.436035,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1663433135,
      "ems": null
    },
    {
      "latitude": 51.706238,
      "longitude": 19.437933,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1663433138,
      "ems": null
    },
    {
      "latitude": 51.706734,
      "longitude": 19.439468,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1663433141,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.441147,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1663433144,
      "ems": null
    },
    {
      "latitude": 51.707851,
      "longitude": 19.44252,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1663433146,
      "ems": null
    },
    {
      "latitude": 51.708923,
      "longitude": 19.444046,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1663433150,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 19.444613,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1663433153,
      "ems": null
    },
    {
      "latitude": 51.711155,
      "longitude": 19.444885,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1663433156,
      "ems": null
    },
    {
      "latitude": 51.712273,
      "longitude": 19.44458,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1663433159,
      "ems": null
    },
    {
      "latitude": 51.713196,
      "longitude": 19.443945,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1663433162,
      "ems": null
    },
    {
      "latitude": 51.713951,
      "longitude": 19.443207,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1663433165,
      "ems": null
    },
    {
      "latitude": 51.714615,
      "longitude": 19.442089,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1663433168,
      "ems": null
    },
    {
      "latitude": 51.71516,
      "longitude": 19.440918,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1663433171,
      "ems": null
    },
    {
      "latitude": 51.715714,
      "longitude": 19.439417,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1663433174,
      "ems": null
    },
    {
      "latitude": 51.716091,
      "longitude": 19.438171,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1663433177,
      "ems": null
    },
    {
      "latitude": 51.716511,
      "longitude": 19.436951,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1663433180,
      "ems": null
    },
    {
      "latitude": 51.716885,
      "longitude": 19.435654,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1663433183,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.434443,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1663433186,
      "ems": null
    },
    {
      "latitude": 51.717628,
      "longitude": 19.433212,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1663433189,
      "ems": null
    },
    {
      "latitude": 51.717957,
      "longitude": 19.431919,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1663433191,
      "ems": null
    },
    {
      "latitude": 51.718464,
      "longitude": 19.430237,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1663433195,
      "ems": null
    },
    {
      "latitude": 51.718838,
      "longitude": 19.42894,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1663433198,
      "ems": null
    },
    {
      "latitude": 51.719193,
      "longitude": 19.427614,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1663433201,
      "ems": null
    },
    {
      "latitude": 51.719536,
      "longitude": 19.42627,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1663433204,
      "ems": null
    },
    {
      "latitude": 51.719864,
      "longitude": 19.424896,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1663433207,
      "ems": null
    },
    {
      "latitude": 51.720188,
      "longitude": 19.423523,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1663433210,
      "ems": null
    },
    {
      "latitude": 51.720608,
      "longitude": 19.421768,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1663433214,
      "ems": null
    },
    {
      "latitude": 51.72171,
      "longitude": 19.417295,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1663433224,
      "ems": null
    },
    {
      "latitude": 51.722672,
      "longitude": 19.412767,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1663433234,
      "ems": null
    },
    {
      "latitude": 51.723083,
      "longitude": 19.410393,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1663433240,
      "ems": null
    },
    {
      "latitude": 51.723404,
      "longitude": 19.408016,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1663433244,
      "ems": null
    },
    {
      "latitude": 51.723354,
      "longitude": 19.405975,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1663433249,
      "ems": null
    },
    {
      "latitude": 51.722946,
      "longitude": 19.403414,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663433256,
      "ems": null
    },
    {
      "latitude": 51.72261,
      "longitude": 19.401703,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663433261,
      "ems": null
    },
    {
      "latitude": 51.721981,
      "longitude": 19.398575,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 25.9,
        "kts": 14,
        "mph": 16.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663433312,
      "ems": null
    }
  ]
};
