import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220214EDKBEDKB",
    callsign: "DEFCZ",
    name: "cross country Low approach EDDK EDDL",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 1, 14, 13, 40).getTime(),
    arrival: new Date(2022, 1, 14, 15, 40).getTime(),
    singleEnginePistonTime: 120,
    picTime: 120,
    dualTime: 0,
    landings: {
      day: 2,
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
      registration: "D-EFCZ",
      serialNo: "N/A",
    },
  },
  airport: {
    origin: {
      name: "Bonn Hangelar",
      code: "EDKB",
      position: {
        latitude: 50.7690965,
        longitude: 7.1620958,
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
      "latitude": 50.769173,
      "longitude": 7.162018,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 291,
      "squawk": "0",
      "timestamp": 1644846340,
      "ems": null
    },
    {
      "latitude": 50.770428,
      "longitude": 7.157593,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 293,
      "squawk": "0",
      "timestamp": 1644846348,
      "ems": null
    },
    {
      "latitude": 50.77071,
      "longitude": 7.156372,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 289,
      "squawk": "0",
      "timestamp": 1644846352,
      "ems": null
    },
    {
      "latitude": 50.770943,
      "longitude": 7.155228,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 288,
      "squawk": "0",
      "timestamp": 1644846355,
      "ems": null
    },
    {
      "latitude": 50.771164,
      "longitude": 7.154178,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 286,
      "squawk": "0",
      "timestamp": 1644846358,
      "ems": null
    },
    {
      "latitude": 50.771358,
      "longitude": 7.153015,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 285,
      "squawk": "0",
      "timestamp": 1644846361,
      "ems": null
    },
    {
      "latitude": 50.771545,
      "longitude": 7.1521,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 285,
      "squawk": "0",
      "timestamp": 1644846364,
      "ems": null
    },
    {
      "latitude": 50.771732,
      "longitude": 7.151108,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 284,
      "squawk": "0",
      "timestamp": 1644846367,
      "ems": null
    },
    {
      "latitude": 50.771896,
      "longitude": 7.150095,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 285,
      "squawk": "0",
      "timestamp": 1644846370,
      "ems": null
    },
    {
      "latitude": 50.772125,
      "longitude": 7.148462,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 282,
      "squawk": "0",
      "timestamp": 1644846374,
      "ems": null
    },
    {
      "latitude": 50.772263,
      "longitude": 7.147349,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 278,
      "squawk": "0",
      "timestamp": 1644846378,
      "ems": null
    },
    {
      "latitude": 50.772293,
      "longitude": 7.145615,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 276,
      "squawk": "0",
      "timestamp": 1644846382,
      "ems": null
    },
    {
      "latitude": 50.772243,
      "longitude": 7.144241,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1644846386,
      "ems": null
    },
    {
      "latitude": 50.771759,
      "longitude": 7.142672,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1644846390,
      "ems": null
    },
    {
      "latitude": 50.771175,
      "longitude": 7.141647,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1644846394,
      "ems": null
    },
    {
      "latitude": 50.77066,
      "longitude": 7.141039,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1644846397,
      "ems": null
    },
    {
      "latitude": 50.769928,
      "longitude": 7.140371,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1644846400,
      "ems": null
    },
    {
      "latitude": 50.769287,
      "longitude": 7.139777,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1644846403,
      "ems": null
    },
    {
      "latitude": 50.768463,
      "longitude": 7.139035,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1644846406,
      "ems": null
    },
    {
      "latitude": 50.767776,
      "longitude": 7.138441,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1644846409,
      "ems": null
    },
    {
      "latitude": 50.767044,
      "longitude": 7.137624,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1644846412,
      "ems": null
    },
    {
      "latitude": 50.766518,
      "longitude": 7.136765,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1644846415,
      "ems": null
    },
    {
      "latitude": 50.766052,
      "longitude": 7.135925,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1644846418,
      "ems": null
    },
    {
      "latitude": 50.765587,
      "longitude": 7.13501,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1644846421,
      "ems": null
    },
    {
      "latitude": 50.765167,
      "longitude": 7.134061,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1644846424,
      "ems": null
    },
    {
      "latitude": 50.764751,
      "longitude": 7.133026,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1644846427,
      "ems": null
    },
    {
      "latitude": 50.764378,
      "longitude": 7.132034,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1644846430,
      "ems": null
    },
    {
      "latitude": 50.763958,
      "longitude": 7.131042,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1644846433,
      "ems": null
    },
    {
      "latitude": 50.763519,
      "longitude": 7.130053,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1644846436,
      "ems": null
    },
    {
      "latitude": 50.763062,
      "longitude": 7.129014,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1644846439,
      "ems": null
    },
    {
      "latitude": 50.762608,
      "longitude": 7.127991,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1644846442,
      "ems": null
    },
    {
      "latitude": 50.762146,
      "longitude": 7.126935,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1644846445,
      "ems": null
    },
    {
      "latitude": 50.76112,
      "longitude": 7.124786,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1644846451,
      "ems": null
    },
    {
      "latitude": 50.76059,
      "longitude": 7.123595,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1644846454,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 7.121048,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1644846460,
      "ems": null
    },
    {
      "latitude": 50.758484,
      "longitude": 7.118473,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1644846466,
      "ems": null
    },
    {
      "latitude": 50.757385,
      "longitude": 7.115652,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1644846472,
      "ems": null
    },
    {
      "latitude": 50.756882,
      "longitude": 7.114316,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1644846475,
      "ems": null
    },
    {
      "latitude": 50.755783,
      "longitude": 7.111717,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1644846481,
      "ems": null
    },
    {
      "latitude": 50.754974,
      "longitude": 7.110443,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1644846484,
      "ems": null
    },
    {
      "latitude": 50.754181,
      "longitude": 7.109416,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1644846487,
      "ems": null
    },
    {
      "latitude": 50.753174,
      "longitude": 7.1086,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1644846490,
      "ems": null
    },
    {
      "latitude": 50.752087,
      "longitude": 7.107849,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1644846493,
      "ems": null
    },
    {
      "latitude": 50.750885,
      "longitude": 7.107412,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1644846496,
      "ems": null
    },
    {
      "latitude": 50.749668,
      "longitude": 7.107162,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1644846499,
      "ems": null
    },
    {
      "latitude": 50.748459,
      "longitude": 7.107338,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1644846502,
      "ems": null
    },
    {
      "latitude": 50.747154,
      "longitude": 7.107773,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1644846505,
      "ems": null
    },
    {
      "latitude": 50.745941,
      "longitude": 7.108303,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1644846508,
      "ems": null
    },
    {
      "latitude": 50.744659,
      "longitude": 7.108971,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1644846511,
      "ems": null
    },
    {
      "latitude": 50.74329,
      "longitude": 7.109833,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1644846514,
      "ems": null
    },
    {
      "latitude": 50.742081,
      "longitude": 7.110596,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1644846517,
      "ems": null
    },
    {
      "latitude": 50.740677,
      "longitude": 7.111346,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1644846520,
      "ems": null
    },
    {
      "latitude": 50.739304,
      "longitude": 7.112089,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1644846523,
      "ems": null
    },
    {
      "latitude": 50.737934,
      "longitude": 7.112732,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1644846526,
      "ems": null
    },
    {
      "latitude": 50.736603,
      "longitude": 7.113276,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1644846529,
      "ems": null
    },
    {
      "latitude": 50.735329,
      "longitude": 7.1138,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1644846532,
      "ems": null
    },
    {
      "latitude": 50.732536,
      "longitude": 7.114944,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1644846538,
      "ems": null
    },
    {
      "latitude": 50.730011,
      "longitude": 7.115949,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1644846544,
      "ems": null
    },
    {
      "latitude": 50.728672,
      "longitude": 7.116241,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1644846547,
      "ems": null
    },
    {
      "latitude": 50.727493,
      "longitude": 7.116542,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1644846550,
      "ems": null
    },
    {
      "latitude": 50.726212,
      "longitude": 7.116765,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1644846553,
      "ems": null
    },
    {
      "latitude": 50.72504,
      "longitude": 7.117081,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1644846556,
      "ems": null
    },
    {
      "latitude": 50.723923,
      "longitude": 7.117359,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1644846559,
      "ems": null
    },
    {
      "latitude": 50.721451,
      "longitude": 7.117953,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1644846565,
      "ems": null
    },
    {
      "latitude": 50.720245,
      "longitude": 7.118301,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1644846568,
      "ems": null
    },
    {
      "latitude": 50.717926,
      "longitude": 7.118992,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1644846574,
      "ems": null
    },
    {
      "latitude": 50.716736,
      "longitude": 7.119512,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1644846578,
      "ems": null
    },
    {
      "latitude": 50.715637,
      "longitude": 7.120254,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1644846581,
      "ems": null
    },
    {
      "latitude": 50.71431,
      "longitude": 7.121442,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1644846584,
      "ems": null
    },
    {
      "latitude": 50.713402,
      "longitude": 7.122726,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1644846586,
      "ems": null
    },
    {
      "latitude": 50.712433,
      "longitude": 7.124411,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1644846589,
      "ems": null
    },
    {
      "latitude": 50.711609,
      "longitude": 7.12597,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1644846592,
      "ems": null
    },
    {
      "latitude": 50.710693,
      "longitude": 7.127677,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1644846595,
      "ems": null
    },
    {
      "latitude": 50.709866,
      "longitude": 7.129364,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1644846598,
      "ems": null
    },
    {
      "latitude": 50.708889,
      "longitude": 7.131424,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1644846601,
      "ems": null
    },
    {
      "latitude": 50.70805,
      "longitude": 7.133179,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1644846604,
      "ems": null
    },
    {
      "latitude": 50.707214,
      "longitude": 7.134878,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1644846608,
      "ems": null
    },
    {
      "latitude": 50.706375,
      "longitude": 7.136765,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1644846610,
      "ems": null
    },
    {
      "latitude": 50.705536,
      "longitude": 7.138519,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1644846614,
      "ems": null
    },
    {
      "latitude": 50.704792,
      "longitude": 7.140274,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1644846617,
      "ems": null
    },
    {
      "latitude": 50.704056,
      "longitude": 7.142004,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1644846619,
      "ems": null
    },
    {
      "latitude": 50.703232,
      "longitude": 7.14386,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1644846622,
      "ems": null
    },
    {
      "latitude": 50.702461,
      "longitude": 7.145691,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1644846625,
      "ems": null
    },
    {
      "latitude": 50.701675,
      "longitude": 7.147572,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1644846629,
      "ems": null
    },
    {
      "latitude": 50.700974,
      "longitude": 7.149277,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1644846632,
      "ems": null
    },
    {
      "latitude": 50.699532,
      "longitude": 7.152939,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644846638,
      "ems": null
    },
    {
      "latitude": 50.698784,
      "longitude": 7.154846,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644846641,
      "ems": null
    },
    {
      "latitude": 50.698135,
      "longitude": 7.156677,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1644846644,
      "ems": null
    },
    {
      "latitude": 50.696777,
      "longitude": 7.160265,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644846650,
      "ems": null
    },
    {
      "latitude": 50.695404,
      "longitude": 7.163902,
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644846656,
      "ems": null
    },
    {
      "latitude": 50.693897,
      "longitude": 7.167664,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1644846662,
      "ems": null
    },
    {
      "latitude": 50.692268,
      "longitude": 7.171402,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644846668,
      "ems": null
    },
    {
      "latitude": 50.690689,
      "longitude": 7.17526,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1644846674,
      "ems": null
    },
    {
      "latitude": 50.690002,
      "longitude": 7.177487,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644846677,
      "ems": null
    },
    {
      "latitude": 50.689728,
      "longitude": 7.178972,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1644846680,
      "ems": null
    },
    {
      "latitude": 50.689453,
      "longitude": 7.182089,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 93,
      "squawk": "7742",
      "timestamp": 1644846683,
      "ems": null
    },
    {
      "latitude": 50.689453,
      "longitude": 7.184316,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 87,
      "squawk": "7742",
      "timestamp": 1644846686,
      "ems": null
    },
    {
      "latitude": 50.689568,
      "longitude": 7.186813,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1644846689,
      "ems": null
    },
    {
      "latitude": 50.689774,
      "longitude": 7.18877,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1644846692,
      "ems": null
    },
    {
      "latitude": 50.690174,
      "longitude": 7.191544,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1644846695,
      "ems": null
    },
    {
      "latitude": 50.690594,
      "longitude": 7.193909,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644846698,
      "ems": null
    },
    {
      "latitude": 50.690918,
      "longitude": 7.195816,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644846701,
      "ems": null
    },
    {
      "latitude": 50.691429,
      "longitude": 7.198715,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644846704,
      "ems": null
    },
    {
      "latitude": 50.691879,
      "longitude": 7.201018,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644846707,
      "ems": null
    },
    {
      "latitude": 50.692337,
      "longitude": 7.203394,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644846710,
      "ems": null
    },
    {
      "latitude": 50.692841,
      "longitude": 7.205621,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1644846712,
      "ems": null
    },
    {
      "latitude": 50.69339,
      "longitude": 7.208219,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644846716,
      "ems": null
    },
    {
      "latitude": 50.693985,
      "longitude": 7.210743,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644846719,
      "ems": null
    },
    {
      "latitude": 50.69455,
      "longitude": 7.212982,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644846722,
      "ems": null
    },
    {
      "latitude": 50.695107,
      "longitude": 7.215424,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644846725,
      "ems": null
    },
    {
      "latitude": 50.695667,
      "longitude": 7.217636,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644846728,
      "ems": null
    },
    {
      "latitude": 50.69632,
      "longitude": 7.220022,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644846731,
      "ems": null
    },
    {
      "latitude": 50.69696,
      "longitude": 7.222397,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644846734,
      "ems": null
    },
    {
      "latitude": 50.697666,
      "longitude": 7.224808,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644846737,
      "ems": null
    },
    {
      "latitude": 50.698273,
      "longitude": 7.227097,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644846740,
      "ems": null
    },
    {
      "latitude": 50.699661,
      "longitude": 7.232121,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7742",
      "timestamp": 1644846746,
      "ems": null
    },
    {
      "latitude": 50.700851,
      "longitude": 7.236576,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7742",
      "timestamp": 1644846752,
      "ems": null
    },
    {
      "latitude": 50.702137,
      "longitude": 7.241592,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846758,
      "ems": null
    },
    {
      "latitude": 50.703049,
      "longitude": 7.245632,
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644846764,
      "ems": null
    },
    {
      "latitude": 50.704327,
      "longitude": 7.250824,
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846770,
      "ems": null
    },
    {
      "latitude": 50.705536,
      "longitude": 7.255478,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846776,
      "ems": null
    },
    {
      "latitude": 50.706482,
      "longitude": 7.259439,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846782,
      "ems": null
    },
    {
      "latitude": 50.707771,
      "longitude": 7.264481,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846788,
      "ems": null
    },
    {
      "latitude": 50.708935,
      "longitude": 7.268906,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846794,
      "ems": null
    },
    {
      "latitude": 50.710144,
      "longitude": 7.273766,
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846800,
      "ems": null
    },
    {
      "latitude": 50.711308,
      "longitude": 7.27829,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846806,
      "ems": null
    },
    {
      "latitude": 50.712612,
      "longitude": 7.283249,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846812,
      "ems": null
    },
    {
      "latitude": 50.713821,
      "longitude": 7.287674,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644846818,
      "ems": null
    },
    {
      "latitude": 50.715031,
      "longitude": 7.292252,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846824,
      "ems": null
    },
    {
      "latitude": 50.716187,
      "longitude": 7.296407,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644846830,
      "ems": null
    },
    {
      "latitude": 50.717606,
      "longitude": 7.301454,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1644846836,
      "ems": null
    },
    {
      "latitude": 50.718941,
      "longitude": 7.306137,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644846842,
      "ems": null
    },
    {
      "latitude": 50.720215,
      "longitude": 7.310733,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644846848,
      "ems": null
    },
    {
      "latitude": 50.721405,
      "longitude": 7.315336,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846854,
      "ems": null
    },
    {
      "latitude": 50.722641,
      "longitude": 7.320012,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644846860,
      "ems": null
    },
    {
      "latitude": 50.723831,
      "longitude": 7.324905,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846866,
      "ems": null
    },
    {
      "latitude": 50.725113,
      "longitude": 7.329662,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846872,
      "ems": null
    },
    {
      "latitude": 50.726299,
      "longitude": 7.334137,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644846878,
      "ems": null
    },
    {
      "latitude": 50.727646,
      "longitude": 7.338867,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1644846884,
      "ems": null
    },
    {
      "latitude": 50.728996,
      "longitude": 7.343521,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1644846890,
      "ems": null
    },
    {
      "latitude": 50.730377,
      "longitude": 7.348295,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1644846896,
      "ems": null
    },
    {
      "latitude": 50.731792,
      "longitude": 7.353058,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1644846902,
      "ems": null
    },
    {
      "latitude": 50.733047,
      "longitude": 7.357254,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1644846908,
      "ems": null
    },
    {
      "latitude": 50.734539,
      "longitude": 7.362289,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1644846914,
      "ems": null
    },
    {
      "latitude": 50.73674,
      "longitude": 7.369228,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1644846923,
      "ems": null
    },
    {
      "latitude": 50.738682,
      "longitude": 7.376099,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846932,
      "ems": null
    },
    {
      "latitude": 50.739845,
      "longitude": 7.380829,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644846938,
      "ems": null
    },
    {
      "latitude": 50.741089,
      "longitude": 7.385782,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846944,
      "ems": null
    },
    {
      "latitude": 50.741592,
      "longitude": 7.388009,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644846947,
      "ems": null
    },
    {
      "latitude": 50.742126,
      "longitude": 7.390366,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1644846950,
      "ems": null
    },
    {
      "latitude": 50.742638,
      "longitude": 7.393036,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1644846953,
      "ems": null
    },
    {
      "latitude": 50.743057,
      "longitude": 7.395325,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644846956,
      "ems": null
    },
    {
      "latitude": 50.743332,
      "longitude": 7.396991,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1644846959,
      "ems": null
    },
    {
      "latitude": 50.74371,
      "longitude": 7.398911,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1644846962,
      "ems": null
    },
    {
      "latitude": 50.744705,
      "longitude": 7.404191,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1644846968,
      "ems": null
    },
    {
      "latitude": 50.74585,
      "longitude": 7.409313,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1644846974,
      "ems": null
    },
    {
      "latitude": 50.746948,
      "longitude": 7.414064,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644846980,
      "ems": null
    },
    {
      "latitude": 50.747543,
      "longitude": 7.416514,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846983,
      "ems": null
    },
    {
      "latitude": 50.748093,
      "longitude": 7.418592,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644846986,
      "ems": null
    },
    {
      "latitude": 50.748734,
      "longitude": 7.42119,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846990,
      "ems": null
    },
    {
      "latitude": 50.74934,
      "longitude": 7.42363,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644846992,
      "ems": null
    },
    {
      "latitude": 50.749924,
      "longitude": 7.425793,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644846995,
      "ems": null
    },
    {
      "latitude": 50.750381,
      "longitude": 7.427426,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1644846998,
      "ems": null
    },
    {
      "latitude": 50.751251,
      "longitude": 7.43042,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1644847001,
      "ems": null
    },
    {
      "latitude": 50.752365,
      "longitude": 7.434769,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1644847007,
      "ems": null
    },
    {
      "latitude": 50.753483,
      "longitude": 7.439804,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847013,
      "ems": null
    },
    {
      "latitude": 50.754089,
      "longitude": 7.44278,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1644847019,
      "ems": null
    },
    {
      "latitude": 50.754868,
      "longitude": 7.446949,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644847023,
      "ems": null
    },
    {
      "latitude": 50.755142,
      "longitude": 7.448879,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1644847025,
      "ems": null
    },
    {
      "latitude": 50.755234,
      "longitude": 7.449696,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1644847028,
      "ems": null
    },
    {
      "latitude": 50.755554,
      "longitude": 7.452516,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1644847031,
      "ems": null
    },
    {
      "latitude": 50.755905,
      "longitude": 7.456436,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1644847034,
      "ems": null
    },
    {
      "latitude": 50.756046,
      "longitude": 7.458572,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1644847037,
      "ems": null
    },
    {
      "latitude": 50.756287,
      "longitude": 7.461053,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 82,
      "squawk": "7742",
      "timestamp": 1644847040,
      "ems": null
    },
    {
      "latitude": 50.756512,
      "longitude": 7.463531,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "7742",
      "timestamp": 1644847044,
      "ems": null
    },
    {
      "latitude": 50.756882,
      "longitude": 7.466888,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1644847048,
      "ems": null
    },
    {
      "latitude": 50.757111,
      "longitude": 7.469441,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1644847051,
      "ems": null
    },
    {
      "latitude": 50.75758,
      "longitude": 7.474594,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "7742",
      "timestamp": 1644847057,
      "ems": null
    },
    {
      "latitude": 50.758045,
      "longitude": 7.479553,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1644847063,
      "ems": null
    },
    {
      "latitude": 50.758419,
      "longitude": 7.484589,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1644847069,
      "ems": null
    },
    {
      "latitude": 50.758896,
      "longitude": 7.490004,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "7742",
      "timestamp": 1644847075,
      "ems": null
    },
    {
      "latitude": 50.759674,
      "longitude": 7.495274,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644847081,
      "ems": null
    },
    {
      "latitude": 50.760189,
      "longitude": 7.497635,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847084,
      "ems": null
    },
    {
      "latitude": 50.760544,
      "longitude": 7.499431,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847086,
      "ems": null
    },
    {
      "latitude": 50.761322,
      "longitude": 7.503217,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847090,
      "ems": null
    },
    {
      "latitude": 50.761909,
      "longitude": 7.506027,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847094,
      "ems": null
    },
    {
      "latitude": 50.762604,
      "longitude": 7.509378,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847098,
      "ems": null
    },
    {
      "latitude": 50.763168,
      "longitude": 7.512283,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847102,
      "ems": null
    },
    {
      "latitude": 50.763771,
      "longitude": 7.515182,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1644847106,
      "ems": null
    },
    {
      "latitude": 50.764843,
      "longitude": 7.520294,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847114,
      "ems": null
    },
    {
      "latitude": 50.766285,
      "longitude": 7.527618,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1644847122,
      "ems": null
    },
    {
      "latitude": 50.767136,
      "longitude": 7.531722,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847127,
      "ems": null
    },
    {
      "latitude": 50.768242,
      "longitude": 7.536621,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644847134,
      "ems": null
    },
    {
      "latitude": 50.769127,
      "longitude": 7.540131,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644847140,
      "ems": null
    },
    {
      "latitude": 50.769516,
      "longitude": 7.541446,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644847142,
      "ems": null
    },
    {
      "latitude": 50.770477,
      "longitude": 7.544937,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644847146,
      "ems": null
    },
    {
      "latitude": 50.771027,
      "longitude": 7.547014,
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644847149,
      "ems": null
    },
    {
      "latitude": 50.77206,
      "longitude": 7.550964,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644847154,
      "ems": null
    },
    {
      "latitude": 50.772709,
      "longitude": 7.553177,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1644847158,
      "ems": null
    },
    {
      "latitude": 50.77327,
      "longitude": 7.555179,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1644847160,
      "ems": null
    },
    {
      "latitude": 50.77462,
      "longitude": 7.559586,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1644847167,
      "ems": null
    },
    {
      "latitude": 50.775921,
      "longitude": 7.563934,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 65,
      "squawk": "7742",
      "timestamp": 1644847173,
      "ems": null
    },
    {
      "latitude": 50.777134,
      "longitude": 7.568207,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644847179,
      "ems": null
    },
    {
      "latitude": 50.778389,
      "longitude": 7.572861,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644847184,
      "ems": null
    },
    {
      "latitude": 50.779926,
      "longitude": 7.578659,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644847192,
      "ems": null
    },
    {
      "latitude": 50.781136,
      "longitude": 7.58316,
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644847198,
      "ems": null
    },
    {
      "latitude": 50.782299,
      "longitude": 7.587509,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "7742",
      "timestamp": 1644847204,
      "ems": null
    },
    {
      "latitude": 50.783184,
      "longitude": 7.591324,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847210,
      "ems": null
    },
    {
      "latitude": 50.783695,
      "longitude": 7.594299,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1644847213,
      "ems": null
    },
    {
      "latitude": 50.783928,
      "longitude": 7.596588,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1644847216,
      "ems": null
    },
    {
      "latitude": 50.78421,
      "longitude": 7.598877,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1644847220,
      "ems": null
    },
    {
      "latitude": 50.784393,
      "longitude": 7.601277,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 83,
      "squawk": "7742",
      "timestamp": 1644847223,
      "ems": null
    },
    {
      "latitude": 50.784439,
      "longitude": 7.603652,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "7742",
      "timestamp": 1644847226,
      "ems": null
    },
    {
      "latitude": 50.78421,
      "longitude": 7.605879,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1644847229,
      "ems": null
    },
    {
      "latitude": 50.783752,
      "longitude": 7.607958,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644847232,
      "ems": null
    },
    {
      "latitude": 50.783203,
      "longitude": 7.609517,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644847234,
      "ems": null
    },
    {
      "latitude": 50.782253,
      "longitude": 7.611313,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1644847238,
      "ems": null
    },
    {
      "latitude": 50.781601,
      "longitude": 7.612115,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 136,
      "squawk": "7742",
      "timestamp": 1644847240,
      "ems": null
    },
    {
      "latitude": 50.779907,
      "longitude": 7.613006,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644847246,
      "ems": null
    },
    {
      "latitude": 50.778214,
      "longitude": 7.612412,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644847250,
      "ems": null
    },
    {
      "latitude": 50.777435,
      "longitude": 7.611372,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1644847254,
      "ems": null
    },
    {
      "latitude": 50.77676,
      "longitude": 7.609482,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1644847259,
      "ems": null
    },
    {
      "latitude": 50.776566,
      "longitude": 7.608403,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644847263,
      "ems": null
    },
    {
      "latitude": 50.776062,
      "longitude": 7.605896,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1644847267,
      "ems": null
    },
    {
      "latitude": 50.775696,
      "longitude": 7.604172,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644847271,
      "ems": null
    },
    {
      "latitude": 50.775364,
      "longitude": 7.602844,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1644847275,
      "ems": null
    },
    {
      "latitude": 50.774899,
      "longitude": 7.600861,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644847280,
      "ems": null
    },
    {
      "latitude": 50.774387,
      "longitude": 7.598801,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644847284,
      "ems": null
    },
    {
      "latitude": 50.774105,
      "longitude": 7.597809,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644847286,
      "ems": null
    },
    {
      "latitude": 50.773689,
      "longitude": 7.596054,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644847290,
      "ems": null
    },
    {
      "latitude": 50.77327,
      "longitude": 7.594528,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1644847294,
      "ems": null
    },
    {
      "latitude": 50.772537,
      "longitude": 7.591478,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644847302,
      "ems": null
    },
    {
      "latitude": 50.772263,
      "longitude": 7.589252,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "7742",
      "timestamp": 1644847306,
      "ems": null
    },
    {
      "latitude": 50.772034,
      "longitude": 7.587396,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1644847310,
      "ems": null
    },
    {
      "latitude": 50.771732,
      "longitude": 7.584915,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644847315,
      "ems": null
    },
    {
      "latitude": 50.771484,
      "longitude": 7.582942,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 258,
      "squawk": "7742",
      "timestamp": 1644847319,
      "ems": null
    },
    {
      "latitude": 50.771126,
      "longitude": 7.580338,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1644847324,
      "ems": null
    },
    {
      "latitude": 50.770893,
      "longitude": 7.57843,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847328,
      "ems": null
    },
    {
      "latitude": 50.770432,
      "longitude": 7.575073,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644847334,
      "ems": null
    },
    {
      "latitude": 50.770157,
      "longitude": 7.570991,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 280,
      "squawk": "7742",
      "timestamp": 1644847342,
      "ems": null
    },
    {
      "latitude": 50.770893,
      "longitude": 7.56897,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 302,
      "squawk": "7742",
      "timestamp": 1644847346,
      "ems": null
    },
    {
      "latitude": 50.771591,
      "longitude": 7.568054,
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
      "heading": 331,
      "squawk": "7742",
      "timestamp": 1644847350,
      "ems": null
    },
    {
      "latitude": 50.772991,
      "longitude": 7.567215,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "7742",
      "timestamp": 1644847353,
      "ems": null
    },
    {
      "latitude": 50.774387,
      "longitude": 7.567062,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1644847356,
      "ems": null
    },
    {
      "latitude": 50.775829,
      "longitude": 7.567596,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "7742",
      "timestamp": 1644847358,
      "ems": null
    },
    {
      "latitude": 50.777317,
      "longitude": 7.568817,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "7742",
      "timestamp": 1644847362,
      "ems": null
    },
    {
      "latitude": 50.778111,
      "longitude": 7.569885,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 49,
      "squawk": "7742",
      "timestamp": 1644847365,
      "ems": null
    },
    {
      "latitude": 50.778622,
      "longitude": 7.570877,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 60,
      "squawk": "7742",
      "timestamp": 1644847368,
      "ems": null
    },
    {
      "latitude": 50.779785,
      "longitude": 7.575226,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1644847373,
      "ems": null
    },
    {
      "latitude": 50.780228,
      "longitude": 7.577672,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1644847377,
      "ems": null
    },
    {
      "latitude": 50.78109,
      "longitude": 7.582779,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847382,
      "ems": null
    },
    {
      "latitude": 50.781555,
      "longitude": 7.585678,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644847386,
      "ems": null
    },
    {
      "latitude": 50.782379,
      "longitude": 7.58992,
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847391,
      "ems": null
    },
    {
      "latitude": 50.782837,
      "longitude": 7.592072,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847394,
      "ems": null
    },
    {
      "latitude": 50.78334,
      "longitude": 7.59467,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847397,
      "ems": null
    },
    {
      "latitude": 50.783981,
      "longitude": 7.599422,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "7742",
      "timestamp": 1644847403,
      "ems": null
    },
    {
      "latitude": 50.783844,
      "longitude": 7.6015,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 99,
      "squawk": "7742",
      "timestamp": 1644847406,
      "ems": null
    },
    {
      "latitude": 50.783279,
      "longitude": 7.603836,
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644847409,
      "ems": null
    },
    {
      "latitude": 50.782486,
      "longitude": 7.605667,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1644847412,
      "ems": null
    },
    {
      "latitude": 50.781696,
      "longitude": 7.606812,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1644847415,
      "ems": null
    },
    {
      "latitude": 50.780766,
      "longitude": 7.607651,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1644847419,
      "ems": null
    },
    {
      "latitude": 50.778576,
      "longitude": 7.608032,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644847423,
      "ems": null
    },
    {
      "latitude": 50.777023,
      "longitude": 7.606547,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 227,
      "squawk": "7742",
      "timestamp": 1644847429,
      "ems": null
    },
    {
      "latitude": 50.776474,
      "longitude": 7.604321,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1644847433,
      "ems": null
    },
    {
      "latitude": 50.776291,
      "longitude": 7.602094,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 261,
      "squawk": "7742",
      "timestamp": 1644847439,
      "ems": null
    },
    {
      "latitude": 50.775879,
      "longitude": 7.598976,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644847443,
      "ems": null
    },
    {
      "latitude": 50.775597,
      "longitude": 7.597046,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644847447,
      "ems": null
    },
    {
      "latitude": 50.775192,
      "longitude": 7.594448,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644847451,
      "ems": null
    },
    {
      "latitude": 50.774963,
      "longitude": 7.593112,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644847455,
      "ems": null
    },
    {
      "latitude": 50.774292,
      "longitude": 7.588654,
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
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644847462,
      "ems": null
    },
    {
      "latitude": 50.774014,
      "longitude": 7.587128,
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
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644847466,
      "ems": null
    },
    {
      "latitude": 50.773224,
      "longitude": 7.58168,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644847474,
      "ems": null
    },
    {
      "latitude": 50.772385,
      "longitude": 7.576904,
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644847482,
      "ems": null
    },
    {
      "latitude": 50.771824,
      "longitude": 7.57431,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1644847488,
      "ems": null
    },
    {
      "latitude": 50.770893,
      "longitude": 7.57019,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1644847496,
      "ems": null
    },
    {
      "latitude": 50.77066,
      "longitude": 7.56485,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 295,
      "squawk": "7742",
      "timestamp": 1644847506,
      "ems": null
    },
    {
      "latitude": 50.772011,
      "longitude": 7.562408,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 310,
      "squawk": "7742",
      "timestamp": 1644847511,
      "ems": null
    },
    {
      "latitude": 50.773083,
      "longitude": 7.561493,
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
      "heading": 337,
      "squawk": "7742",
      "timestamp": 1644847515,
      "ems": null
    },
    {
      "latitude": 50.774807,
      "longitude": 7.560959,
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
      "heading": 355,
      "squawk": "7742",
      "timestamp": 1644847517,
      "ems": null
    },
    {
      "latitude": 50.776108,
      "longitude": 7.561188,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1644847520,
      "ems": null
    },
    {
      "latitude": 50.777527,
      "longitude": 7.562008,
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
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1644847523,
      "ems": null
    },
    {
      "latitude": 50.778717,
      "longitude": 7.563248,
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
      "heading": 37,
      "squawk": "7742",
      "timestamp": 1644847526,
      "ems": null
    },
    {
      "latitude": 50.779816,
      "longitude": 7.565052,
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
      "heading": 52,
      "squawk": "7742",
      "timestamp": 1644847530,
      "ems": null
    },
    {
      "latitude": 50.780624,
      "longitude": 7.567444,
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
      "heading": 63,
      "squawk": "7742",
      "timestamp": 1644847533,
      "ems": null
    },
    {
      "latitude": 50.781097,
      "longitude": 7.569654,
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
      "heading": 72,
      "squawk": "7742",
      "timestamp": 1644847536,
      "ems": null
    },
    {
      "latitude": 50.781235,
      "longitude": 7.570396,
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
      "heading": 74,
      "squawk": "7742",
      "timestamp": 1644847537,
      "ems": null
    },
    {
      "latitude": 50.781738,
      "longitude": 7.57396,
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1644847542,
      "ems": null
    },
    {
      "latitude": 50.782196,
      "longitude": 7.577745,
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1644847546,
      "ems": null
    },
    {
      "latitude": 50.782425,
      "longitude": 7.580195,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1644847550,
      "ems": null
    },
    {
      "latitude": 50.782719,
      "longitude": 7.583084,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1644847555,
      "ems": null
    },
    {
      "latitude": 50.783047,
      "longitude": 7.586517,
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
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1644847558,
      "ems": null
    },
    {
      "latitude": 50.783184,
      "longitude": 7.588043,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 81,
      "squawk": "7742",
      "timestamp": 1644847560,
      "ems": null
    },
    {
      "latitude": 50.783478,
      "longitude": 7.590885,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1644847563,
      "ems": null
    },
    {
      "latitude": 50.783695,
      "longitude": 7.592926,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1644847566,
      "ems": null
    },
    {
      "latitude": 50.784027,
      "longitude": 7.595932,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 80,
      "squawk": "7742",
      "timestamp": 1644847570,
      "ems": null
    },
    {
      "latitude": 50.784115,
      "longitude": 7.598572,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 95,
      "squawk": "7742",
      "timestamp": 1644847575,
      "ems": null
    },
    {
      "latitude": 50.783066,
      "longitude": 7.602984,
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644847580,
      "ems": null
    },
    {
      "latitude": 50.78183,
      "longitude": 7.604766,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644847584,
      "ems": null
    },
    {
      "latitude": 50.781464,
      "longitude": 7.605137,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1644847585,
      "ems": null
    },
    {
      "latitude": 50.779541,
      "longitude": 7.605731,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1644847590,
      "ems": null
    },
    {
      "latitude": 50.777645,
      "longitude": 7.604446,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644847596,
      "ems": null
    },
    {
      "latitude": 50.776993,
      "longitude": 7.603073,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644847600,
      "ems": null
    },
    {
      "latitude": 50.776657,
      "longitude": 7.600238,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847605,
      "ems": null
    },
    {
      "latitude": 50.776482,
      "longitude": 7.598419,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7742",
      "timestamp": 1644847608,
      "ems": null
    },
    {
      "latitude": 50.776386,
      "longitude": 7.596512,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847611,
      "ems": null
    },
    {
      "latitude": 50.776199,
      "longitude": 7.595116,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 258,
      "squawk": "7742",
      "timestamp": 1644847614,
      "ems": null
    },
    {
      "latitude": 50.775787,
      "longitude": 7.592814,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847618,
      "ems": null
    },
    {
      "latitude": 50.77541,
      "longitude": 7.590714,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644847622,
      "ems": null
    },
    {
      "latitude": 50.775101,
      "longitude": 7.588435,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644847626,
      "ems": null
    },
    {
      "latitude": 50.774666,
      "longitude": 7.585678,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644847631,
      "ems": null
    },
    {
      "latitude": 50.774323,
      "longitude": 7.583461,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644847635,
      "ems": null
    },
    {
      "latitude": 50.7742,
      "longitude": 7.582626,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644847639,
      "ems": null
    },
    {
      "latitude": 50.773457,
      "longitude": 7.577057,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644847647,
      "ems": null
    },
    {
      "latitude": 50.772663,
      "longitude": 7.573166,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644847655,
      "ems": null
    },
    {
      "latitude": 50.772217,
      "longitude": 7.570842,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1644847659,
      "ems": null
    },
    {
      "latitude": 50.771358,
      "longitude": 7.566605,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1644847667,
      "ems": null
    },
    {
      "latitude": 50.771072,
      "longitude": 7.564235,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 271,
      "squawk": "7742",
      "timestamp": 1644847672,
      "ems": null
    },
    {
      "latitude": 50.771591,
      "longitude": 7.562256,
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
      "heading": 303,
      "squawk": "7742",
      "timestamp": 1644847676,
      "ems": null
    },
    {
      "latitude": 50.772663,
      "longitude": 7.560654,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 323,
      "squawk": "7742",
      "timestamp": 1644847680,
      "ems": null
    },
    {
      "latitude": 50.774338,
      "longitude": 7.559509,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 346,
      "squawk": "7742",
      "timestamp": 1644847684,
      "ems": null
    },
    {
      "latitude": 50.775318,
      "longitude": 7.559357,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "7742",
      "timestamp": 1644847687,
      "ems": null
    },
    {
      "latitude": 50.776428,
      "longitude": 7.559559,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1644847689,
      "ems": null
    },
    {
      "latitude": 50.777271,
      "longitude": 7.559891,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1644847691,
      "ems": null
    },
    {
      "latitude": 50.777847,
      "longitude": 7.560301,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1644847695,
      "ems": null
    },
    {
      "latitude": 50.779999,
      "longitude": 7.563196,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1644847699,
      "ems": null
    },
    {
      "latitude": 50.780823,
      "longitude": 7.565868,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 67,
      "squawk": "7742",
      "timestamp": 1644847702,
      "ems": null
    },
    {
      "latitude": 50.781189,
      "longitude": 7.567873,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1644847705,
      "ems": null
    },
    {
      "latitude": 50.781555,
      "longitude": 7.570693,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 77,
      "squawk": "7742",
      "timestamp": 1644847708,
      "ems": null
    },
    {
      "latitude": 50.781876,
      "longitude": 7.573143,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1644847711,
      "ems": null
    },
    {
      "latitude": 50.782207,
      "longitude": 7.575302,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847714,
      "ems": null
    },
    {
      "latitude": 50.782486,
      "longitude": 7.577438,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847717,
      "ems": null
    },
    {
      "latitude": 50.782764,
      "longitude": 7.579727,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1644847720,
      "ems": null
    },
    {
      "latitude": 50.783066,
      "longitude": 7.582125,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1644847723,
      "ems": null
    },
    {
      "latitude": 50.78334,
      "longitude": 7.584426,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1644847726,
      "ems": null
    },
    {
      "latitude": 50.783661,
      "longitude": 7.586802,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1644847729,
      "ems": null
    },
    {
      "latitude": 50.783928,
      "longitude": 7.589035,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 78,
      "squawk": "7742",
      "timestamp": 1644847732,
      "ems": null
    },
    {
      "latitude": 50.784622,
      "longitude": 7.593928,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847738,
      "ems": null
    },
    {
      "latitude": 50.784988,
      "longitude": 7.596378,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7742",
      "timestamp": 1644847743,
      "ems": null
    },
    {
      "latitude": 50.786118,
      "longitude": 7.603531,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 76,
      "squawk": "7742",
      "timestamp": 1644847751,
      "ems": null
    },
    {
      "latitude": 50.785858,
      "longitude": 7.606993,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1644847755,
      "ems": null
    },
    {
      "latitude": 50.784908,
      "longitude": 7.609482,
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
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1644847759,
      "ems": null
    },
    {
      "latitude": 50.783844,
      "longitude": 7.610927,
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
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1644847763,
      "ems": null
    },
    {
      "latitude": 50.782486,
      "longitude": 7.611771,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644847767,
      "ems": null
    },
    {
      "latitude": 50.780777,
      "longitude": 7.611818,
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1644847771,
      "ems": null
    },
    {
      "latitude": 50.779587,
      "longitude": 7.610853,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644847775,
      "ems": null
    },
    {
      "latitude": 50.778996,
      "longitude": 7.609634,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1644847779,
      "ems": null
    },
    {
      "latitude": 50.778717,
      "longitude": 7.607498,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 269,
      "squawk": "7742",
      "timestamp": 1644847783,
      "ems": null
    },
    {
      "latitude": 50.7789,
      "longitude": 7.606028,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 285,
      "squawk": "7742",
      "timestamp": 1644847786,
      "ems": null
    },
    {
      "latitude": 50.779358,
      "longitude": 7.604469,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 300,
      "squawk": "7742",
      "timestamp": 1644847789,
      "ems": null
    },
    {
      "latitude": 50.779881,
      "longitude": 7.603226,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 304,
      "squawk": "7742",
      "timestamp": 1644847791,
      "ems": null
    },
    {
      "latitude": 50.780319,
      "longitude": 7.602168,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 302,
      "squawk": "7742",
      "timestamp": 1644847794,
      "ems": null
    },
    {
      "latitude": 50.781006,
      "longitude": 7.600461,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 301,
      "squawk": "7742",
      "timestamp": 1644847798,
      "ems": null
    },
    {
      "latitude": 50.781601,
      "longitude": 7.598753,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 299,
      "squawk": "7742",
      "timestamp": 1644847801,
      "ems": null
    },
    {
      "latitude": 50.782059,
      "longitude": 7.597194,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 292,
      "squawk": "7742",
      "timestamp": 1644847804,
      "ems": null
    },
    {
      "latitude": 50.782345,
      "longitude": 7.595673,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 282,
      "squawk": "7742",
      "timestamp": 1644847807,
      "ems": null
    },
    {
      "latitude": 50.782379,
      "longitude": 7.592221,
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
      "heading": 262,
      "squawk": "7742",
      "timestamp": 1644847813,
      "ems": null
    },
    {
      "latitude": 50.782196,
      "longitude": 7.590588,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644847816,
      "ems": null
    },
    {
      "latitude": 50.781921,
      "longitude": 7.588954,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644847819,
      "ems": null
    },
    {
      "latitude": 50.781647,
      "longitude": 7.58728,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644847822,
      "ems": null
    },
    {
      "latitude": 50.781368,
      "longitude": 7.585831,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644847825,
      "ems": null
    },
    {
      "latitude": 50.781136,
      "longitude": 7.584457,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644847828,
      "ems": null
    },
    {
      "latitude": 50.780685,
      "longitude": 7.582645,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644847831,
      "ems": null
    },
    {
      "latitude": 50.780437,
      "longitude": 7.581787,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1644847833,
      "ems": null
    },
    {
      "latitude": 50.779785,
      "longitude": 7.579727,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1644847837,
      "ems": null
    },
    {
      "latitude": 50.779266,
      "longitude": 7.578191,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644847840,
      "ems": null
    },
    {
      "latitude": 50.778854,
      "longitude": 7.577057,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644847843,
      "ems": null
    },
    {
      "latitude": 50.778252,
      "longitude": 7.575378,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7742",
      "timestamp": 1644847846,
      "ems": null
    },
    {
      "latitude": 50.77771,
      "longitude": 7.57396,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1644847849,
      "ems": null
    },
    {
      "latitude": 50.777225,
      "longitude": 7.572632,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1644847852,
      "ems": null
    },
    {
      "latitude": 50.776749,
      "longitude": 7.571362,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7742",
      "timestamp": 1644847855,
      "ems": null
    },
    {
      "latitude": 50.776245,
      "longitude": 7.570025,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1644847858,
      "ems": null
    },
    {
      "latitude": 50.775688,
      "longitude": 7.568588,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644847861,
      "ems": null
    },
    {
      "latitude": 50.775177,
      "longitude": 7.567215,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1644847864,
      "ems": null
    },
    {
      "latitude": 50.77457,
      "longitude": 7.565613,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1644847869,
      "ems": null
    },
    {
      "latitude": 50.773315,
      "longitude": 7.562408,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1644847876,
      "ems": null
    },
    {
      "latitude": 50.772293,
      "longitude": 7.559662,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1644847882,
      "ems": null
    },
    {
      "latitude": 50.771313,
      "longitude": 7.556763,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644847888,
      "ems": null
    },
    {
      "latitude": 50.770523,
      "longitude": 7.55455,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644847894,
      "ems": null
    },
    {
      "latitude": 50.770058,
      "longitude": 7.553101,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1644847896,
      "ems": null
    },
    {
      "latitude": 50.769516,
      "longitude": 7.551393,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1644847900,
      "ems": null
    },
    {
      "latitude": 50.769264,
      "longitude": 7.550583,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1644847903,
      "ems": null
    },
    {
      "latitude": 50.768055,
      "longitude": 7.547073,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644847910,
      "ems": null
    },
    {
      "latitude": 50.76717,
      "longitude": 7.544708,
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
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1644847915,
      "ems": null
    },
    {
      "latitude": 50.765915,
      "longitude": 7.541656,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1644847922,
      "ems": null
    },
    {
      "latitude": 50.765633,
      "longitude": 7.541046,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1644847924,
      "ems": null
    },
    {
      "latitude": 50.764702,
      "longitude": 7.539291,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1644847928,
      "ems": null
    },
    {
      "latitude": 50.764114,
      "longitude": 7.538329,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644847930,
      "ems": null
    },
    {
      "latitude": 50.76329,
      "longitude": 7.537066,
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
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1644847934,
      "ems": null
    },
    {
      "latitude": 50.762562,
      "longitude": 7.535934,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1644847936,
      "ems": null
    },
    {
      "latitude": 50.762146,
      "longitude": 7.535285,
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644847940,
      "ems": null
    },
    {
      "latitude": 50.761074,
      "longitude": 7.533569,
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644847942,
      "ems": null
    },
    {
      "latitude": 50.760372,
      "longitude": 7.532425,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1644847945,
      "ems": null
    },
    {
      "latitude": 50.759628,
      "longitude": 7.530975,
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
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1644847949,
      "ems": null
    },
    {
      "latitude": 50.758209,
      "longitude": 7.528084,
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
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1644847954,
      "ems": null
    },
    {
      "latitude": 50.756649,
      "longitude": 7.525101,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1644847961,
      "ems": null
    },
    {
      "latitude": 50.756012,
      "longitude": 7.523853,
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
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1644847963,
      "ems": null
    },
    {
      "latitude": 50.755299,
      "longitude": 7.522507,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1644847966,
      "ems": null
    },
    {
      "latitude": 50.754368,
      "longitude": 7.520752,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1644847970,
      "ems": null
    },
    {
      "latitude": 50.753902,
      "longitude": 7.519836,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1644847972,
      "ems": null
    },
    {
      "latitude": 50.751717,
      "longitude": 7.515945,
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
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1644847980,
      "ems": null
    },
    {
      "latitude": 50.749878,
      "longitude": 7.512793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644847988,
      "ems": null
    },
    {
      "latitude": 50.748459,
      "longitude": 7.510343,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1644847994,
      "ems": null
    },
    {
      "latitude": 50.746689,
      "longitude": 7.507172,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1644848000,
      "ems": null
    },
    {
      "latitude": 50.745804,
      "longitude": 7.505741,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644848003,
      "ems": null
    },
    {
      "latitude": 50.74498,
      "longitude": 7.504478,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1644848006,
      "ems": null
    },
    {
      "latitude": 50.743523,
      "longitude": 7.502213,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1644848012,
      "ems": null
    },
    {
      "latitude": 50.741848,
      "longitude": 7.499466,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644848018,
      "ems": null
    },
    {
      "latitude": 50.740215,
      "longitude": 7.496872,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1644848024,
      "ems": null
    },
    {
      "latitude": 50.738983,
      "longitude": 7.494383,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 236,
      "squawk": "7742",
      "timestamp": 1644848030,
      "ems": null
    },
    {
      "latitude": 50.738342,
      "longitude": 7.492676,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1644848033,
      "ems": null
    },
    {
      "latitude": 50.737797,
      "longitude": 7.490845,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1644848036,
      "ems": null
    },
    {
      "latitude": 50.737236,
      "longitude": 7.489166,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1644848039,
      "ems": null
    },
    {
      "latitude": 50.736771,
      "longitude": 7.487488,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1644848042,
      "ems": null
    },
    {
      "latitude": 50.736355,
      "longitude": 7.486038,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1644848044,
      "ems": null
    },
    {
      "latitude": 50.735886,
      "longitude": 7.48436,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1644848048,
      "ems": null
    },
    {
      "latitude": 50.735275,
      "longitude": 7.482358,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1644848051,
      "ems": null
    },
    {
      "latitude": 50.734726,
      "longitude": 7.480724,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1644848054,
      "ems": null
    },
    {
      "latitude": 50.734222,
      "longitude": 7.479091,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1644848057,
      "ems": null
    },
    {
      "latitude": 50.733047,
      "longitude": 7.475891,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 236,
      "squawk": "7742",
      "timestamp": 1644848063,
      "ems": null
    },
    {
      "latitude": 50.732304,
      "longitude": 7.474213,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1644848066,
      "ems": null
    },
    {
      "latitude": 50.731697,
      "longitude": 7.472763,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1644848069,
      "ems": null
    },
    {
      "latitude": 50.730907,
      "longitude": 7.471008,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1644848072,
      "ems": null
    },
    {
      "latitude": 50.730286,
      "longitude": 7.469812,
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
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1644848075,
      "ems": null
    },
    {
      "latitude": 50.729462,
      "longitude": 7.468033,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1644848078,
      "ems": null
    },
    {
      "latitude": 50.728821,
      "longitude": 7.466695,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1644848081,
      "ems": null
    },
    {
      "latitude": 50.728115,
      "longitude": 7.465286,
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
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1644848084,
      "ems": null
    },
    {
      "latitude": 50.727356,
      "longitude": 7.463651,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 231,
      "squawk": "7742",
      "timestamp": 1644848087,
      "ems": null
    },
    {
      "latitude": 50.726715,
      "longitude": 7.462311,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1644848090,
      "ems": null
    },
    {
      "latitude": 50.725227,
      "longitude": 7.459183,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 236,
      "squawk": "7742",
      "timestamp": 1644848096,
      "ems": null
    },
    {
      "latitude": 50.724064,
      "longitude": 7.456131,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644848102,
      "ems": null
    },
    {
      "latitude": 50.723598,
      "longitude": 7.454834,
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644848105,
      "ems": null
    },
    {
      "latitude": 50.722961,
      "longitude": 7.453036,
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
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644848108,
      "ems": null
    },
    {
      "latitude": 50.722458,
      "longitude": 7.451477,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1644848111,
      "ems": null
    },
    {
      "latitude": 50.722,
      "longitude": 7.449992,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1644848114,
      "ems": null
    },
    {
      "latitude": 50.72155,
      "longitude": 7.448349,
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
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1644848117,
      "ems": null
    },
    {
      "latitude": 50.72113,
      "longitude": 7.446747,
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644848120,
      "ems": null
    },
    {
      "latitude": 50.720627,
      "longitude": 7.445168,
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
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1644848123,
      "ems": null
    },
    {
      "latitude": 50.7202,
      "longitude": 7.443619,
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
      "heading": 245,
      "squawk": "7742",
      "timestamp": 1644848126,
      "ems": null
    },
    {
      "latitude": 50.71978,
      "longitude": 7.442017,
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
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644848129,
      "ems": null
    },
    {
      "latitude": 50.71936,
      "longitude": 7.440338,
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
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644848132,
      "ems": null
    },
    {
      "latitude": 50.719025,
      "longitude": 7.438783,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1644848135,
      "ems": null
    },
    {
      "latitude": 50.718704,
      "longitude": 7.437224,
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
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1644848138,
      "ems": null
    },
    {
      "latitude": 50.718292,
      "longitude": 7.435369,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848141,
      "ems": null
    },
    {
      "latitude": 50.718018,
      "longitude": 7.43381,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644848144,
      "ems": null
    },
    {
      "latitude": 50.717731,
      "longitude": 7.432098,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644848147,
      "ems": null
    },
    {
      "latitude": 50.717468,
      "longitude": 7.430395,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644848150,
      "ems": null
    },
    {
      "latitude": 50.717266,
      "longitude": 7.428741,
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
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644848153,
      "ems": null
    },
    {
      "latitude": 50.717056,
      "longitude": 7.427278,
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
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644848156,
      "ems": null
    },
    {
      "latitude": 50.716415,
      "longitude": 7.423863,
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848162,
      "ems": null
    },
    {
      "latitude": 50.716141,
      "longitude": 7.42223,
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
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644848165,
      "ems": null
    },
    {
      "latitude": 50.715912,
      "longitude": 7.420522,
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
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1644848168,
      "ems": null
    },
    {
      "latitude": 50.715729,
      "longitude": 7.418741,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1644848171,
      "ems": null
    },
    {
      "latitude": 50.715546,
      "longitude": 7.417033,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 260,
      "squawk": "7742",
      "timestamp": 1644848174,
      "ems": null
    },
    {
      "latitude": 50.715225,
      "longitude": 7.413619,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848180,
      "ems": null
    },
    {
      "latitude": 50.71508,
      "longitude": 7.411957,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 262,
      "squawk": "7742",
      "timestamp": 1644848183,
      "ems": null
    },
    {
      "latitude": 50.714985,
      "longitude": 7.410431,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 263,
      "squawk": "7742",
      "timestamp": 1644848186,
      "ems": null
    },
    {
      "latitude": 50.714848,
      "longitude": 7.408447,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 263,
      "squawk": "7742",
      "timestamp": 1644848190,
      "ems": null
    },
    {
      "latitude": 50.714706,
      "longitude": 7.407303,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 262,
      "squawk": "7742",
      "timestamp": 1644848192,
      "ems": null
    },
    {
      "latitude": 50.714333,
      "longitude": 7.403488,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1644848198,
      "ems": null
    },
    {
      "latitude": 50.713943,
      "longitude": 7.39996,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 260,
      "squawk": "7742",
      "timestamp": 1644848205,
      "ems": null
    },
    {
      "latitude": 50.713634,
      "longitude": 7.396774,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 263,
      "squawk": "7742",
      "timestamp": 1644848211,
      "ems": null
    },
    {
      "latitude": 50.713402,
      "longitude": 7.392807,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 265,
      "squawk": "7742",
      "timestamp": 1644848217,
      "ems": null
    },
    {
      "latitude": 50.713215,
      "longitude": 7.389145,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848223,
      "ems": null
    },
    {
      "latitude": 50.713123,
      "longitude": 7.38739,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848226,
      "ems": null
    },
    {
      "latitude": 50.713078,
      "longitude": 7.385788,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 266,
      "squawk": "7742",
      "timestamp": 1644848228,
      "ems": null
    },
    {
      "latitude": 50.712982,
      "longitude": 7.38452,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 266,
      "squawk": "7742",
      "timestamp": 1644848232,
      "ems": null
    },
    {
      "latitude": 50.712891,
      "longitude": 7.381897,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848234,
      "ems": null
    },
    {
      "latitude": 50.712704,
      "longitude": 7.378387,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 264,
      "squawk": "7742",
      "timestamp": 1644848241,
      "ems": null
    },
    {
      "latitude": 50.712334,
      "longitude": 7.374954,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848247,
      "ems": null
    },
    {
      "latitude": 50.712112,
      "longitude": 7.373162,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 258,
      "squawk": "7742",
      "timestamp": 1644848250,
      "ems": null
    },
    {
      "latitude": 50.711929,
      "longitude": 7.371455,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1644848253,
      "ems": null
    },
    {
      "latitude": 50.711727,
      "longitude": 7.369766,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 258,
      "squawk": "7742",
      "timestamp": 1644848255,
      "ems": null
    },
    {
      "latitude": 50.711586,
      "longitude": 7.368774,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 258,
      "squawk": "7742",
      "timestamp": 1644848258,
      "ems": null
    },
    {
      "latitude": 50.711243,
      "longitude": 7.366481,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644848261,
      "ems": null
    },
    {
      "latitude": 50.711029,
      "longitude": 7.364731,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848264,
      "ems": null
    },
    {
      "latitude": 50.710785,
      "longitude": 7.363141,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644848267,
      "ems": null
    },
    {
      "latitude": 50.71051,
      "longitude": 7.361434,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848271,
      "ems": null
    },
    {
      "latitude": 50.710236,
      "longitude": 7.359924,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848273,
      "ems": null
    },
    {
      "latitude": 50.70977,
      "longitude": 7.356644,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848279,
      "ems": null
    },
    {
      "latitude": 50.709259,
      "longitude": 7.353439,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848285,
      "ems": null
    },
    {
      "latitude": 50.708794,
      "longitude": 7.350693,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848291,
      "ems": null
    },
    {
      "latitude": 50.708328,
      "longitude": 7.348785,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644848295,
      "ems": null
    },
    {
      "latitude": 50.707764,
      "longitude": 7.346587,
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644848298,
      "ems": null
    },
    {
      "latitude": 50.707352,
      "longitude": 7.34488,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644848301,
      "ems": null
    },
    {
      "latitude": 50.706699,
      "longitude": 7.34169,
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848306,
      "ems": null
    },
    {
      "latitude": 50.70607,
      "longitude": 7.338274,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644848313,
      "ems": null
    },
    {
      "latitude": 50.705475,
      "longitude": 7.335082,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848319,
      "ems": null
    },
    {
      "latitude": 50.705162,
      "longitude": 7.33345,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848322,
      "ems": null
    },
    {
      "latitude": 50.70488,
      "longitude": 7.331889,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848325,
      "ems": null
    },
    {
      "latitude": 50.704605,
      "longitude": 7.33033,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848328,
      "ems": null
    },
    {
      "latitude": 50.703999,
      "longitude": 7.327118,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848334,
      "ems": null
    },
    {
      "latitude": 50.703442,
      "longitude": 7.324066,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848340,
      "ems": null
    },
    {
      "latitude": 50.702866,
      "longitude": 7.321052,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848345,
      "ems": null
    },
    {
      "latitude": 50.702271,
      "longitude": 7.317934,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848351,
      "ems": null
    },
    {
      "latitude": 50.701721,
      "longitude": 7.31489,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848358,
      "ems": null
    },
    {
      "latitude": 50.70116,
      "longitude": 7.311859,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644848363,
      "ems": null
    },
    {
      "latitude": 50.700649,
      "longitude": 7.308578,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644848370,
      "ems": null
    },
    {
      "latitude": 50.700043,
      "longitude": 7.305222,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848376,
      "ems": null
    },
    {
      "latitude": 50.699345,
      "longitude": 7.302094,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644848382,
      "ems": null
    },
    {
      "latitude": 50.699017,
      "longitude": 7.300644,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644848385,
      "ems": null
    },
    {
      "latitude": 50.698608,
      "longitude": 7.299153,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644848388,
      "ems": null
    },
    {
      "latitude": 50.698196,
      "longitude": 7.297594,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644848391,
      "ems": null
    },
    {
      "latitude": 50.697784,
      "longitude": 7.296035,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644848394,
      "ems": null
    },
    {
      "latitude": 50.697388,
      "longitude": 7.294388,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644848397,
      "ems": null
    },
    {
      "latitude": 50.696598,
      "longitude": 7.291107,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1644848403,
      "ems": null
    },
    {
      "latitude": 50.695946,
      "longitude": 7.288132,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848409,
      "ems": null
    },
    {
      "latitude": 50.695267,
      "longitude": 7.284678,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848415,
      "ems": null
    },
    {
      "latitude": 50.694946,
      "longitude": 7.28297,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7742",
      "timestamp": 1644848418,
      "ems": null
    },
    {
      "latitude": 50.69426,
      "longitude": 7.279408,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848424,
      "ems": null
    },
    {
      "latitude": 50.693943,
      "longitude": 7.277908,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848427,
      "ems": null
    },
    {
      "latitude": 50.693298,
      "longitude": 7.274508,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848433,
      "ems": null
    },
    {
      "latitude": 50.692657,
      "longitude": 7.27139,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848439,
      "ems": null
    },
    {
      "latitude": 50.69194,
      "longitude": 7.267838,
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848445,
      "ems": null
    },
    {
      "latitude": 50.691338,
      "longitude": 7.264709,
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848451,
      "ems": null
    },
    {
      "latitude": 50.690598,
      "longitude": 7.261369,
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
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644848457,
      "ems": null
    },
    {
      "latitude": 50.689754,
      "longitude": 7.258072,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644848463,
      "ems": null
    },
    {
      "latitude": 50.689056,
      "longitude": 7.255173,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644848469,
      "ems": null
    },
    {
      "latitude": 50.688313,
      "longitude": 7.251968,
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
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1644848475,
      "ems": null
    },
    {
      "latitude": 50.687714,
      "longitude": 7.248601,
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
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644848481,
      "ems": null
    },
    {
      "latitude": 50.687439,
      "longitude": 7.246819,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644848484,
      "ems": null
    },
    {
      "latitude": 50.687149,
      "longitude": 7.245178,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644848487,
      "ems": null
    },
    {
      "latitude": 50.686844,
      "longitude": 7.243479,
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848490,
      "ems": null
    },
    {
      "latitude": 50.686214,
      "longitude": 7.240143,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848496,
      "ems": null
    },
    {
      "latitude": 50.685516,
      "longitude": 7.23665,
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
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848502,
      "ems": null
    },
    {
      "latitude": 50.684921,
      "longitude": 7.233458,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848508,
      "ems": null
    },
    {
      "latitude": 50.684235,
      "longitude": 7.229969,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "7742",
      "timestamp": 1644848514,
      "ems": null
    },
    {
      "latitude": 50.683548,
      "longitude": 7.226109,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644848520,
      "ems": null
    },
    {
      "latitude": 50.682861,
      "longitude": 7.222397,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644848526,
      "ems": null
    },
    {
      "latitude": 50.682175,
      "longitude": 7.21876,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644848532,
      "ems": null
    },
    {
      "latitude": 50.681656,
      "longitude": 7.215271,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 255,
      "squawk": "7742",
      "timestamp": 1644848538,
      "ems": null
    },
    {
      "latitude": 50.681049,
      "longitude": 7.211685,
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
      "heading": 254,
      "squawk": "7742",
      "timestamp": 1644848544,
      "ems": null
    },
    {
      "latitude": 50.680435,
      "longitude": 7.207996,
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
      "heading": 256,
      "squawk": "7742",
      "timestamp": 1644848550,
      "ems": null
    },
    {
      "latitude": 50.679886,
      "longitude": 7.20421,
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
      "heading": 257,
      "squawk": "7742",
      "timestamp": 1644848556,
      "ems": null
    },
    {
      "latitude": 50.679657,
      "longitude": 7.202429,
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
      "heading": 259,
      "squawk": "7742",
      "timestamp": 1644848559,
      "ems": null
    },
    {
      "latitude": 50.67942,
      "longitude": 7.200165,
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
      "heading": 263,
      "squawk": "7742",
      "timestamp": 1644848562,
      "ems": null
    },
    {
      "latitude": 50.679382,
      "longitude": 7.198569,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1644848565,
      "ems": null
    },
    {
      "latitude": 50.679337,
      "longitude": 7.19649,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1644848568,
      "ems": null
    },
    {
      "latitude": 50.679279,
      "longitude": 7.194824,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1644848571,
      "ems": null
    },
    {
      "latitude": 50.679291,
      "longitude": 7.192556,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1644848574,
      "ems": null
    },
    {
      "latitude": 50.679279,
      "longitude": 7.190552,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1644848577,
      "ems": null
    },
    {
      "latitude": 50.679245,
      "longitude": 7.188696,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1644848580,
      "ems": null
    },
    {
      "latitude": 50.679245,
      "longitude": 7.186617,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1644848583,
      "ems": null
    },
    {
      "latitude": 50.679325,
      "longitude": 7.184753,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1644848586,
      "ems": null
    },
    {
      "latitude": 50.679474,
      "longitude": 7.182832,
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1644848589,
      "ems": null
    },
    {
      "latitude": 50.679699,
      "longitude": 7.181244,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1644848592,
      "ems": null
    },
    {
      "latitude": 50.680115,
      "longitude": 7.179046,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644848595,
      "ems": null
    },
    {
      "latitude": 50.680584,
      "longitude": 7.1772,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1644848598,
      "ems": null
    },
    {
      "latitude": 50.681076,
      "longitude": 7.175483,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1644848601,
      "ems": null
    },
    {
      "latitude": 50.681839,
      "longitude": 7.173386,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1644848604,
      "ems": null
    },
    {
      "latitude": 50.682449,
      "longitude": 7.171845,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1644848607,
      "ems": null
    },
    {
      "latitude": 50.683189,
      "longitude": 7.170258,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1644848610,
      "ems": null
    },
    {
      "latitude": 50.683823,
      "longitude": 7.168876,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1644848613,
      "ems": null
    },
    {
      "latitude": 50.684875,
      "longitude": 7.16702,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1644848616,
      "ems": null
    },
    {
      "latitude": 50.685703,
      "longitude": 7.165604,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1644848619,
      "ems": null
    },
    {
      "latitude": 50.686588,
      "longitude": 7.164078,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "7040",
      "timestamp": 1644848622,
      "ems": null
    },
    {
      "latitude": 50.687565,
      "longitude": 7.162552,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644848625,
      "ems": null
    },
    {
      "latitude": 50.688404,
      "longitude": 7.161255,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "7040",
      "timestamp": 1644848628,
      "ems": null
    },
    {
      "latitude": 50.68927,
      "longitude": 7.159968,
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
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644848631,
      "ems": null
    },
    {
      "latitude": 50.690079,
      "longitude": 7.158737,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644848635,
      "ems": null
    },
    {
      "latitude": 50.691376,
      "longitude": 7.156628,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644848637,
      "ems": null
    },
    {
      "latitude": 50.692245,
      "longitude": 7.155366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644848640,
      "ems": null
    },
    {
      "latitude": 50.69334,
      "longitude": 7.153702,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644848644,
      "ems": null
    },
    {
      "latitude": 50.694946,
      "longitude": 7.151134,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644848650,
      "ems": null
    },
    {
      "latitude": 50.697189,
      "longitude": 7.147572,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644848655,
      "ems": null
    },
    {
      "latitude": 50.699203,
      "longitude": 7.144454,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 316,
      "squawk": "7040",
      "timestamp": 1644848662,
      "ems": null
    },
    {
      "latitude": 50.701218,
      "longitude": 7.141856,
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
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644848668,
      "ems": null
    },
    {
      "latitude": 50.702499,
      "longitude": 7.14052,
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
      "heading": 328,
      "squawk": "7040",
      "timestamp": 1644848671,
      "ems": null
    },
    {
      "latitude": 50.703735,
      "longitude": 7.139332,
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
      "heading": 328,
      "squawk": "7040",
      "timestamp": 1644848674,
      "ems": null
    },
    {
      "latitude": 50.704926,
      "longitude": 7.138218,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "7040",
      "timestamp": 1644848676,
      "ems": null
    },
    {
      "latitude": 50.706161,
      "longitude": 7.136956,
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
      "heading": 326,
      "squawk": "7040",
      "timestamp": 1644848679,
      "ems": null
    },
    {
      "latitude": 50.707397,
      "longitude": 7.13562,
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
      "heading": 326,
      "squawk": "7040",
      "timestamp": 1644848683,
      "ems": null
    },
    {
      "latitude": 50.708359,
      "longitude": 7.134581,
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
      "heading": 325,
      "squawk": "7040",
      "timestamp": 1644848686,
      "ems": null
    },
    {
      "latitude": 50.709686,
      "longitude": 7.133171,
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
      "heading": 325,
      "squawk": "7040",
      "timestamp": 1644848689,
      "ems": null
    },
    {
      "latitude": 50.710796,
      "longitude": 7.131958,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644848692,
      "ems": null
    },
    {
      "latitude": 50.711914,
      "longitude": 7.130661,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644848694,
      "ems": null
    },
    {
      "latitude": 50.713028,
      "longitude": 7.129311,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 322,
      "squawk": "7040",
      "timestamp": 1644848697,
      "ems": null
    },
    {
      "latitude": 50.714127,
      "longitude": 7.128048,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "7040",
      "timestamp": 1644848700,
      "ems": null
    },
    {
      "latitude": 50.715218,
      "longitude": 7.126694,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7040",
      "timestamp": 1644848704,
      "ems": null
    },
    {
      "latitude": 50.716194,
      "longitude": 7.125473,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7040",
      "timestamp": 1644848706,
      "ems": null
    },
    {
      "latitude": 50.71722,
      "longitude": 7.124176,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "7040",
      "timestamp": 1644848710,
      "ems": null
    },
    {
      "latitude": 50.718292,
      "longitude": 7.122778,
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
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644848713,
      "ems": null
    },
    {
      "latitude": 50.719299,
      "longitude": 7.121442,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644848715,
      "ems": null
    },
    {
      "latitude": 50.720291,
      "longitude": 7.120132,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644848719,
      "ems": null
    },
    {
      "latitude": 50.722229,
      "longitude": 7.117582,
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
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644848725,
      "ems": null
    },
    {
      "latitude": 50.724667,
      "longitude": 7.114334,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644848731,
      "ems": null
    },
    {
      "latitude": 50.726807,
      "longitude": 7.111717,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 321,
      "squawk": "7040",
      "timestamp": 1644848737,
      "ems": null
    },
    {
      "latitude": 50.728912,
      "longitude": 7.109045,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644848743,
      "ems": null
    },
    {
      "latitude": 50.730972,
      "longitude": 7.106224,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644848749,
      "ems": null
    },
    {
      "latitude": 50.733032,
      "longitude": 7.103404,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "7040",
      "timestamp": 1644848755,
      "ems": null
    },
    {
      "latitude": 50.73468,
      "longitude": 7.101102,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644848761,
      "ems": null
    },
    {
      "latitude": 50.736832,
      "longitude": 7.098356,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "7040",
      "timestamp": 1644848767,
      "ems": null
    },
    {
      "latitude": 50.739349,
      "longitude": 7.095387,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 323,
      "squawk": "7040",
      "timestamp": 1644848773,
      "ems": null
    },
    {
      "latitude": 50.741501,
      "longitude": 7.092863,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 322,
      "squawk": "7040",
      "timestamp": 1644848779,
      "ems": null
    },
    {
      "latitude": 50.74366,
      "longitude": 7.090225,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644848785,
      "ems": null
    },
    {
      "latitude": 50.74464,
      "longitude": 7.089157,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 326,
      "squawk": "7040",
      "timestamp": 1644848788,
      "ems": null
    },
    {
      "latitude": 50.745987,
      "longitude": 7.087815,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 327,
      "squawk": "7040",
      "timestamp": 1644848791,
      "ems": null
    },
    {
      "latitude": 50.747059,
      "longitude": 7.086716,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 327,
      "squawk": "7040",
      "timestamp": 1644848794,
      "ems": null
    },
    {
      "latitude": 50.749237,
      "longitude": 7.084548,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 329,
      "squawk": "7040",
      "timestamp": 1644848800,
      "ems": null
    },
    {
      "latitude": 50.750381,
      "longitude": 7.083509,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 331,
      "squawk": "7040",
      "timestamp": 1644848803,
      "ems": null
    },
    {
      "latitude": 50.751575,
      "longitude": 7.082443,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 331,
      "squawk": "7040",
      "timestamp": 1644848806,
      "ems": null
    },
    {
      "latitude": 50.752739,
      "longitude": 7.081451,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 330,
      "squawk": "7040",
      "timestamp": 1644848809,
      "ems": null
    },
    {
      "latitude": 50.753765,
      "longitude": 7.080536,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "7040",
      "timestamp": 1644848812,
      "ems": null
    },
    {
      "latitude": 50.755161,
      "longitude": 7.079391,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7040",
      "timestamp": 1644848815,
      "ems": null
    },
    {
      "latitude": 50.756416,
      "longitude": 7.078476,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644848818,
      "ems": null
    },
    {
      "latitude": 50.757675,
      "longitude": 7.077484,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644848821,
      "ems": null
    },
    {
      "latitude": 50.759125,
      "longitude": 7.076457,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 335,
      "squawk": "7040",
      "timestamp": 1644848824,
      "ems": null
    },
    {
      "latitude": 50.760189,
      "longitude": 7.075729,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 336,
      "squawk": "7040",
      "timestamp": 1644848827,
      "ems": null
    },
    {
      "latitude": 50.761631,
      "longitude": 7.074738,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 337,
      "squawk": "7040",
      "timestamp": 1644848830,
      "ems": null
    },
    {
      "latitude": 50.763027,
      "longitude": 7.073822,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644848833,
      "ems": null
    },
    {
      "latitude": 50.764572,
      "longitude": 7.072968,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644848836,
      "ems": null
    },
    {
      "latitude": 50.766098,
      "longitude": 7.072067,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644848839,
      "ems": null
    },
    {
      "latitude": 50.767227,
      "longitude": 7.07141,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644848842,
      "ems": null
    },
    {
      "latitude": 50.768753,
      "longitude": 7.070465,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644848845,
      "ems": null
    },
    {
      "latitude": 50.772034,
      "longitude": 7.068143,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 333,
      "squawk": "7040",
      "timestamp": 1644848851,
      "ems": null
    },
    {
      "latitude": 50.774597,
      "longitude": 7.065917,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 329,
      "squawk": "7040",
      "timestamp": 1644848857,
      "ems": null
    },
    {
      "latitude": 50.776016,
      "longitude": 7.06459,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 329,
      "squawk": "7040",
      "timestamp": 1644848860,
      "ems": null
    },
    {
      "latitude": 50.777573,
      "longitude": 7.063244,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 333,
      "squawk": "7040",
      "timestamp": 1644848863,
      "ems": null
    },
    {
      "latitude": 50.780685,
      "longitude": 7.061908,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644848869,
      "ems": null
    },
    {
      "latitude": 50.781742,
      "longitude": 7.061844,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 359,
      "squawk": "7040",
      "timestamp": 1644848871,
      "ems": null
    },
    {
      "latitude": 50.783745,
      "longitude": 7.062302,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 14,
      "squawk": "7040",
      "timestamp": 1644848875,
      "ems": null
    },
    {
      "latitude": 50.785583,
      "longitude": 7.063467,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 23,
      "squawk": "7040",
      "timestamp": 1644848878,
      "ems": null
    },
    {
      "latitude": 50.78714,
      "longitude": 7.064819,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 31,
      "squawk": "7040",
      "timestamp": 1644848881,
      "ems": null
    },
    {
      "latitude": 50.788445,
      "longitude": 7.066269,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 36,
      "squawk": "7040",
      "timestamp": 1644848884,
      "ems": null
    },
    {
      "latitude": 50.789841,
      "longitude": 7.0681,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "squawk": "7040",
      "timestamp": 1644848887,
      "ems": null
    },
    {
      "latitude": 50.790939,
      "longitude": 7.069777,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 44,
      "squawk": "7040",
      "timestamp": 1644848890,
      "ems": null
    },
    {
      "latitude": 50.792175,
      "longitude": 7.071706,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "7040",
      "timestamp": 1644848893,
      "ems": null
    },
    {
      "latitude": 50.793381,
      "longitude": 7.073746,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "7040",
      "timestamp": 1644848896,
      "ems": null
    },
    {
      "latitude": 50.794682,
      "longitude": 7.075806,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "7040",
      "timestamp": 1644848899,
      "ems": null
    },
    {
      "latitude": 50.795895,
      "longitude": 7.077789,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 45,
      "squawk": "7040",
      "timestamp": 1644848902,
      "ems": null
    },
    {
      "latitude": 50.797058,
      "longitude": 7.079697,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 46,
      "squawk": "7040",
      "timestamp": 1644848905,
      "ems": null
    },
    {
      "latitude": 50.798222,
      "longitude": 7.081757,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 48,
      "squawk": "7040",
      "timestamp": 1644848908,
      "ems": null
    },
    {
      "latitude": 50.799454,
      "longitude": 7.083955,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 48,
      "squawk": "7040",
      "timestamp": 1644848911,
      "ems": null
    },
    {
      "latitude": 50.800644,
      "longitude": 7.086033,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 48,
      "squawk": "7040",
      "timestamp": 1644848914,
      "ems": null
    },
    {
      "latitude": 50.801758,
      "longitude": 7.088165,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 49,
      "squawk": "7040",
      "timestamp": 1644848917,
      "ems": null
    },
    {
      "latitude": 50.802933,
      "longitude": 7.090264,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 49,
      "squawk": "7040",
      "timestamp": 1644848920,
      "ems": null
    },
    {
      "latitude": 50.80418,
      "longitude": 7.092667,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 50,
      "squawk": "7040",
      "timestamp": 1644848923,
      "ems": null
    },
    {
      "latitude": 50.805496,
      "longitude": 7.095164,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 50,
      "squawk": "7040",
      "timestamp": 1644848926,
      "ems": null
    },
    {
      "latitude": 50.806412,
      "longitude": 7.096871,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 51,
      "squawk": "7040",
      "timestamp": 1644848929,
      "ems": null
    },
    {
      "latitude": 50.807785,
      "longitude": 7.099544,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 50,
      "squawk": "7040",
      "timestamp": 1644848932,
      "ems": null
    },
    {
      "latitude": 50.809113,
      "longitude": 7.102203,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 51,
      "squawk": "7040",
      "timestamp": 1644848935,
      "ems": null
    },
    {
      "latitude": 50.811489,
      "longitude": 7.106934,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 52,
      "squawk": "7040",
      "timestamp": 1644848941,
      "ems": null
    },
    {
      "latitude": 50.813675,
      "longitude": 7.111435,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 51,
      "squawk": "7040",
      "timestamp": 1644848947,
      "ems": null
    },
    {
      "latitude": 50.816025,
      "longitude": 7.116097,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 52,
      "squawk": "7040",
      "timestamp": 1644848953,
      "ems": null
    },
    {
      "latitude": 50.818497,
      "longitude": 7.121294,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 51,
      "squawk": "7040",
      "timestamp": 1644848959,
      "ems": null
    },
    {
      "latitude": 50.820831,
      "longitude": 7.125822,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 49,
      "squawk": "7040",
      "timestamp": 1644848965,
      "ems": null
    },
    {
      "latitude": 50.823452,
      "longitude": 7.130737,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 50,
      "squawk": "7040",
      "timestamp": 1644848971,
      "ems": null
    },
    {
      "latitude": 50.825912,
      "longitude": 7.135546,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 51,
      "squawk": "7040",
      "timestamp": 1644848977,
      "ems": null
    },
    {
      "latitude": 50.828384,
      "longitude": 7.140223,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 49,
      "squawk": "7040",
      "timestamp": 1644848983,
      "ems": null
    },
    {
      "latitude": 50.830994,
      "longitude": 7.145081,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 49,
      "squawk": "7040",
      "timestamp": 1644848989,
      "ems": null
    },
    {
      "latitude": 50.833462,
      "longitude": 7.149734,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 50,
      "squawk": "7040",
      "timestamp": 1644848995,
      "ems": null
    },
    {
      "latitude": 50.835983,
      "longitude": 7.154624,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 50,
      "squawk": "7040",
      "timestamp": 1644849001,
      "ems": null
    },
    {
      "latitude": 50.838455,
      "longitude": 7.159374,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 49,
      "squawk": "7040",
      "timestamp": 1644849007,
      "ems": null
    },
    {
      "latitude": 50.840973,
      "longitude": 7.16368,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 46,
      "squawk": "7040",
      "timestamp": 1644849013,
      "ems": null
    },
    {
      "latitude": 50.841843,
      "longitude": 7.16509,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 43,
      "squawk": "7040",
      "timestamp": 1644849016,
      "ems": null
    },
    {
      "latitude": 50.843811,
      "longitude": 7.16754,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 36,
      "squawk": "7040",
      "timestamp": 1644849019,
      "ems": null
    },
    {
      "latitude": 50.845276,
      "longitude": 7.168876,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 27,
      "squawk": "7040",
      "timestamp": 1644849022,
      "ems": null
    },
    {
      "latitude": 50.847153,
      "longitude": 7.169915,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 17,
      "squawk": "7040",
      "timestamp": 1644849025,
      "ems": null
    },
    {
      "latitude": 50.848938,
      "longitude": 7.170435,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 7,
      "squawk": "7040",
      "timestamp": 1644849028,
      "ems": null
    },
    {
      "latitude": 50.849854,
      "longitude": 7.170509,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 2,
      "squawk": "7040",
      "timestamp": 1644849030,
      "ems": null
    },
    {
      "latitude": 50.852509,
      "longitude": 7.169544,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 348,
      "squawk": "7040",
      "timestamp": 1644849034,
      "ems": null
    },
    {
      "latitude": 50.853287,
      "longitude": 7.168802,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 329,
      "squawk": "7040",
      "timestamp": 1644849036,
      "ems": null
    },
    {
      "latitude": 50.855156,
      "longitude": 7.16629,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644849040,
      "ems": null
    },
    {
      "latitude": 50.856552,
      "longitude": 7.164001,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 313,
      "squawk": "7040",
      "timestamp": 1644849044,
      "ems": null
    },
    {
      "latitude": 50.858047,
      "longitude": 7.161527,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644849049,
      "ems": null
    },
    {
      "latitude": 50.860416,
      "longitude": 7.158203,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644849054,
      "ems": null
    },
    {
      "latitude": 50.862461,
      "longitude": 7.155151,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 317,
      "squawk": "7040",
      "timestamp": 1644849059,
      "ems": null
    },
    {
      "latitude": 50.863861,
      "longitude": 7.153168,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644849063,
      "ems": null
    },
    {
      "latitude": 50.86628,
      "longitude": 7.149658,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "squawk": "7040",
      "timestamp": 1644849070,
      "ems": null
    },
    {
      "latitude": 50.868576,
      "longitude": 7.146309,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644849079,
      "ems": null
    },
    {
      "latitude": 50.873215,
      "longitude": 7.139587,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 317,
      "squawk": "7040",
      "timestamp": 1644849090,
      "ems": null
    },
    {
      "latitude": 50.874207,
      "longitude": 7.138218,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 317,
      "squawk": "7040",
      "timestamp": 1644849094,
      "ems": null
    },
    {
      "latitude": 50.878098,
      "longitude": 7.132576,
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
        "fpm": 1664,
        "ms": 8.5
      },
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644849103,
      "ems": null
    },
    {
      "latitude": 50.879921,
      "longitude": 7.130051,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644849110,
      "ems": null
    },
    {
      "latitude": 50.881641,
      "longitude": 7.127762,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644849116,
      "ems": null
    },
    {
      "latitude": 50.883316,
      "longitude": 7.125673,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 323,
      "squawk": "7040",
      "timestamp": 1644849122,
      "ems": null
    },
    {
      "latitude": 50.88414,
      "longitude": 7.124782,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 323,
      "squawk": "7040",
      "timestamp": 1644849125,
      "ems": null
    },
    {
      "latitude": 50.88504,
      "longitude": 7.123718,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 323,
      "squawk": "7040",
      "timestamp": 1644849128,
      "ems": null
    },
    {
      "latitude": 50.885925,
      "longitude": 7.122726,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644849131,
      "ems": null
    },
    {
      "latitude": 50.887787,
      "longitude": 7.12059,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644849137,
      "ems": null
    },
    {
      "latitude": 50.889183,
      "longitude": 7.118912,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 322,
      "squawk": "7040",
      "timestamp": 1644849143,
      "ems": null
    },
    {
      "latitude": 50.891006,
      "longitude": 7.116617,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644849149,
      "ems": null
    },
    {
      "latitude": 50.891785,
      "longitude": 7.115429,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644849152,
      "ems": null
    },
    {
      "latitude": 50.892517,
      "longitude": 7.114167,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849155,
      "ems": null
    },
    {
      "latitude": 50.893234,
      "longitude": 7.112732,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 307,
      "squawk": "7040",
      "timestamp": 1644849158,
      "ems": null
    },
    {
      "latitude": 50.893887,
      "longitude": 7.111282,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 305,
      "squawk": "7040",
      "timestamp": 1644849161,
      "ems": null
    },
    {
      "latitude": 50.894485,
      "longitude": 7.109936,
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
      "heading": 304,
      "squawk": "7040",
      "timestamp": 1644849164,
      "ems": null
    },
    {
      "latitude": 50.895142,
      "longitude": 7.108307,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 302,
      "squawk": "7040",
      "timestamp": 1644849167,
      "ems": null
    },
    {
      "latitude": 50.895676,
      "longitude": 7.106893,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 297,
      "squawk": "7040",
      "timestamp": 1644849170,
      "ems": null
    },
    {
      "latitude": 50.896168,
      "longitude": 7.105255,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 293,
      "squawk": "7040",
      "timestamp": 1644849173,
      "ems": null
    },
    {
      "latitude": 50.896492,
      "longitude": 7.103882,
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
      "heading": 291,
      "squawk": "7040",
      "timestamp": 1644849176,
      "ems": null
    },
    {
      "latitude": 50.896957,
      "longitude": 7.102127,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 293,
      "squawk": "7040",
      "timestamp": 1644849179,
      "ems": null
    },
    {
      "latitude": 50.897324,
      "longitude": 7.100731,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 294,
      "squawk": "7040",
      "timestamp": 1644849182,
      "ems": null
    },
    {
      "latitude": 50.897827,
      "longitude": 7.098949,
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
      "heading": 295,
      "squawk": "7040",
      "timestamp": 1644849185,
      "ems": null
    },
    {
      "latitude": 50.898354,
      "longitude": 7.097397,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 296,
      "squawk": "7040",
      "timestamp": 1644849188,
      "ems": null
    },
    {
      "latitude": 50.898914,
      "longitude": 7.09549,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 295,
      "squawk": "7040",
      "timestamp": 1644849191,
      "ems": null
    },
    {
      "latitude": 50.89938,
      "longitude": 7.093887,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 295,
      "squawk": "7040",
      "timestamp": 1644849194,
      "ems": null
    },
    {
      "latitude": 50.899891,
      "longitude": 7.092209,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 295,
      "squawk": "7040",
      "timestamp": 1644849197,
      "ems": null
    },
    {
      "latitude": 50.901123,
      "longitude": 7.089077,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 308,
      "squawk": "7040",
      "timestamp": 1644849203,
      "ems": null
    },
    {
      "latitude": 50.901901,
      "longitude": 7.08774,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 310,
      "squawk": "7040",
      "timestamp": 1644849206,
      "ems": null
    },
    {
      "latitude": 50.902496,
      "longitude": 7.086553,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 310,
      "squawk": "7040",
      "timestamp": 1644849209,
      "ems": null
    },
    {
      "latitude": 50.90332,
      "longitude": 7.085068,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849212,
      "ems": null
    },
    {
      "latitude": 50.903915,
      "longitude": 7.08388,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849215,
      "ems": null
    },
    {
      "latitude": 50.904778,
      "longitude": 7.082291,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849218,
      "ems": null
    },
    {
      "latitude": 50.905426,
      "longitude": 7.081134,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 310,
      "squawk": "7040",
      "timestamp": 1644849221,
      "ems": null
    },
    {
      "latitude": 50.906204,
      "longitude": 7.079723,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 311,
      "squawk": "7040",
      "timestamp": 1644849224,
      "ems": null
    },
    {
      "latitude": 50.906937,
      "longitude": 7.078313,
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
      "heading": 311,
      "squawk": "7040",
      "timestamp": 1644849227,
      "ems": null
    },
    {
      "latitude": 50.907665,
      "longitude": 7.076874,
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
      "heading": 307,
      "squawk": "7040",
      "timestamp": 1644849230,
      "ems": null
    },
    {
      "latitude": 50.908218,
      "longitude": 7.075715,
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
      "heading": 305,
      "squawk": "7040",
      "timestamp": 1644849233,
      "ems": null
    },
    {
      "latitude": 50.908875,
      "longitude": 7.074127,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 303,
      "squawk": "7040",
      "timestamp": 1644849236,
      "ems": null
    },
    {
      "latitude": 50.909592,
      "longitude": 7.072523,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 303,
      "squawk": "7040",
      "timestamp": 1644849239,
      "ems": null
    },
    {
      "latitude": 50.910088,
      "longitude": 7.071304,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "squawk": "7040",
      "timestamp": 1644849242,
      "ems": null
    },
    {
      "latitude": 50.910324,
      "longitude": 7.070816,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 304,
      "squawk": "7040",
      "timestamp": 1644849243,
      "ems": null
    },
    {
      "latitude": 50.910923,
      "longitude": 7.069397,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 304,
      "squawk": "7040",
      "timestamp": 1644849246,
      "ems": null
    },
    {
      "latitude": 50.91153,
      "longitude": 7.0681,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 305,
      "squawk": "7040",
      "timestamp": 1644849249,
      "ems": null
    },
    {
      "latitude": 50.912182,
      "longitude": 7.06665,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "7040",
      "timestamp": 1644849252,
      "ems": null
    },
    {
      "latitude": 50.912888,
      "longitude": 7.064951,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 304,
      "squawk": "7040",
      "timestamp": 1644849255,
      "ems": null
    },
    {
      "latitude": 50.91394,
      "longitude": 7.062428,
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
      "heading": 302,
      "squawk": "7040",
      "timestamp": 1644849261,
      "ems": null
    },
    {
      "latitude": 50.915771,
      "longitude": 7.057899,
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
      "heading": 302,
      "squawk": "7040",
      "timestamp": 1644849268,
      "ems": null
    },
    {
      "latitude": 50.917099,
      "longitude": 7.054633,
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
      "heading": 300,
      "squawk": "7040",
      "timestamp": 1644849274,
      "ems": null
    },
    {
      "latitude": 50.918381,
      "longitude": 7.051292,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "7040",
      "timestamp": 1644849280,
      "ems": null
    },
    {
      "latitude": 50.919582,
      "longitude": 7.047958,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "7040",
      "timestamp": 1644849286,
      "ems": null
    },
    {
      "latitude": 50.920715,
      "longitude": 7.044538,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "7040",
      "timestamp": 1644849292,
      "ems": null
    },
    {
      "latitude": 50.922005,
      "longitude": 7.041168,
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
      "heading": 303,
      "squawk": "7040",
      "timestamp": 1644849298,
      "ems": null
    },
    {
      "latitude": 50.923447,
      "longitude": 7.038116,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849304,
      "ems": null
    },
    {
      "latitude": 50.92424,
      "longitude": 7.036595,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849307,
      "ems": null
    },
    {
      "latitude": 50.925064,
      "longitude": 7.03511,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849310,
      "ems": null
    },
    {
      "latitude": 50.925819,
      "longitude": 7.033615,
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
      "heading": 308,
      "squawk": "7040",
      "timestamp": 1644849313,
      "ems": null
    },
    {
      "latitude": 50.926567,
      "longitude": 7.032013,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849316,
      "ems": null
    },
    {
      "latitude": 50.927357,
      "longitude": 7.030563,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849319,
      "ems": null
    },
    {
      "latitude": 50.928055,
      "longitude": 7.029114,
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
      "heading": 308,
      "squawk": "7040",
      "timestamp": 1644849322,
      "ems": null
    },
    {
      "latitude": 50.929596,
      "longitude": 7.026128,
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
      "heading": 307,
      "squawk": "7040",
      "timestamp": 1644849328,
      "ems": null
    },
    {
      "latitude": 50.93108,
      "longitude": 7.022858,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 306,
      "squawk": "7040",
      "timestamp": 1644849334,
      "ems": null
    },
    {
      "latitude": 50.932571,
      "longitude": 7.019818,
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
      "heading": 307,
      "squawk": "7040",
      "timestamp": 1644849340,
      "ems": null
    },
    {
      "latitude": 50.933968,
      "longitude": 7.016907,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 307,
      "squawk": "7040",
      "timestamp": 1644849346,
      "ems": null
    },
    {
      "latitude": 50.934723,
      "longitude": 7.015216,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 302,
      "squawk": "7040",
      "timestamp": 1644849349,
      "ems": null
    },
    {
      "latitude": 50.935272,
      "longitude": 7.013702,
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
      "heading": 297,
      "squawk": "7040",
      "timestamp": 1644849352,
      "ems": null
    },
    {
      "latitude": 50.935822,
      "longitude": 7.011876,
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
      "heading": 295,
      "squawk": "7040",
      "timestamp": 1644849355,
      "ems": null
    },
    {
      "latitude": 50.93634,
      "longitude": 7.009964,
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
      "heading": 294,
      "squawk": "7040",
      "timestamp": 1644849358,
      "ems": null
    },
    {
      "latitude": 50.936619,
      "longitude": 7.009048,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 296,
      "squawk": "7040",
      "timestamp": 1644849361,
      "ems": null
    },
    {
      "latitude": 50.937504,
      "longitude": 7.006302,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "7040",
      "timestamp": 1644849364,
      "ems": null
    },
    {
      "latitude": 50.93811,
      "longitude": 7.004675,
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
      "heading": 299,
      "squawk": "7040",
      "timestamp": 1644849367,
      "ems": null
    },
    {
      "latitude": 50.938797,
      "longitude": 7.002968,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 301,
      "squawk": "7040",
      "timestamp": 1644849370,
      "ems": null
    },
    {
      "latitude": 50.940067,
      "longitude": 6.999741,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 303,
      "squawk": "7040",
      "timestamp": 1644849376,
      "ems": null
    },
    {
      "latitude": 50.941509,
      "longitude": 6.996384,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "7040",
      "timestamp": 1644849382,
      "ems": null
    },
    {
      "latitude": 50.942253,
      "longitude": 6.994705,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 305,
      "squawk": "7040",
      "timestamp": 1644849385,
      "ems": null
    },
    {
      "latitude": 50.943092,
      "longitude": 6.992874,
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
      "heading": 306,
      "squawk": "7040",
      "timestamp": 1644849388,
      "ems": null
    },
    {
      "latitude": 50.943882,
      "longitude": 6.991272,
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
      "heading": 306,
      "squawk": "7040",
      "timestamp": 1644849391,
      "ems": null
    },
    {
      "latitude": 50.944347,
      "longitude": 6.990128,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "7040",
      "timestamp": 1644849394,
      "ems": null
    },
    {
      "latitude": 50.945976,
      "longitude": 6.98616,
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
      "heading": 301,
      "squawk": "7040",
      "timestamp": 1644849400,
      "ems": null
    },
    {
      "latitude": 50.947048,
      "longitude": 6.983337,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 300,
      "squawk": "7040",
      "timestamp": 1644849406,
      "ems": null
    },
    {
      "latitude": 50.947887,
      "longitude": 6.981049,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 299,
      "squawk": "7040",
      "timestamp": 1644849409,
      "ems": null
    },
    {
      "latitude": 50.948444,
      "longitude": 6.979294,
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
      "heading": 297,
      "squawk": "7040",
      "timestamp": 1644849412,
      "ems": null
    },
    {
      "latitude": 50.949051,
      "longitude": 6.977463,
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
      "heading": 298,
      "squawk": "7040",
      "timestamp": 1644849415,
      "ems": null
    },
    {
      "latitude": 50.949646,
      "longitude": 6.975873,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7040",
      "timestamp": 1644849418,
      "ems": null
    },
    {
      "latitude": 50.950306,
      "longitude": 6.974106,
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
      "heading": 300,
      "squawk": "7040",
      "timestamp": 1644849421,
      "ems": null
    },
    {
      "latitude": 50.951656,
      "longitude": 6.970444,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "7040",
      "timestamp": 1644849427,
      "ems": null
    },
    {
      "latitude": 50.952805,
      "longitude": 6.96704,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 298,
      "squawk": "7040",
      "timestamp": 1644849433,
      "ems": null
    },
    {
      "latitude": 50.954731,
      "longitude": 6.961975,
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
      "heading": 302,
      "squawk": "7040",
      "timestamp": 1644849441,
      "ems": null
    },
    {
      "latitude": 50.955643,
      "longitude": 6.959987,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 307,
      "squawk": "7040",
      "timestamp": 1644849445,
      "ems": null
    },
    {
      "latitude": 50.956406,
      "longitude": 6.958466,
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
      "heading": 311,
      "squawk": "7040",
      "timestamp": 1644849448,
      "ems": null
    },
    {
      "latitude": 50.957291,
      "longitude": 6.956863,
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
      "heading": 310,
      "squawk": "7040",
      "timestamp": 1644849451,
      "ems": null
    },
    {
      "latitude": 50.958126,
      "longitude": 6.955414,
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
      "heading": 311,
      "squawk": "7040",
      "timestamp": 1644849454,
      "ems": null
    },
    {
      "latitude": 50.958893,
      "longitude": 6.953975,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849457,
      "ems": null
    },
    {
      "latitude": 50.959618,
      "longitude": 6.952591,
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
      "heading": 308,
      "squawk": "7040",
      "timestamp": 1644849460,
      "ems": null
    },
    {
      "latitude": 50.960175,
      "longitude": 6.951447,
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
      "heading": 308,
      "squawk": "7040",
      "timestamp": 1644849462,
      "ems": null
    },
    {
      "latitude": 50.960678,
      "longitude": 6.950486,
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
      "heading": 308,
      "squawk": "7040",
      "timestamp": 1644849464,
      "ems": null
    },
    {
      "latitude": 50.961548,
      "longitude": 6.948853,
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
      "heading": 309,
      "squawk": "7040",
      "timestamp": 1644849468,
      "ems": null
    },
    {
      "latitude": 50.963379,
      "longitude": 6.945512,
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
      "heading": 311,
      "squawk": "7040",
      "timestamp": 1644849474,
      "ems": null
    },
    {
      "latitude": 50.965065,
      "longitude": 6.942673,
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
      "heading": 313,
      "squawk": "7040",
      "timestamp": 1644849480,
      "ems": null
    },
    {
      "latitude": 50.966553,
      "longitude": 6.939774,
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
      "heading": 308,
      "squawk": "7040",
      "timestamp": 1644849486,
      "ems": null
    },
    {
      "latitude": 50.96809,
      "longitude": 6.936569,
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
      "heading": 306,
      "squawk": "7040",
      "timestamp": 1644849492,
      "ems": null
    },
    {
      "latitude": 50.969345,
      "longitude": 6.93367,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 303,
      "squawk": "7040",
      "timestamp": 1644849498,
      "ems": null
    },
    {
      "latitude": 50.970093,
      "longitude": 6.931915,
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
      "heading": 303,
      "squawk": "7040",
      "timestamp": 1644849501,
      "ems": null
    },
    {
      "latitude": 50.970795,
      "longitude": 6.930295,
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
      "heading": 302,
      "squawk": "7040",
      "timestamp": 1644849504,
      "ems": null
    },
    {
      "latitude": 50.971394,
      "longitude": 6.928711,
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
      "heading": 301,
      "squawk": "7040",
      "timestamp": 1644849507,
      "ems": null
    },
    {
      "latitude": 50.972076,
      "longitude": 6.927028,
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
      "heading": 302,
      "squawk": "7040",
      "timestamp": 1644849510,
      "ems": null
    },
    {
      "latitude": 50.972698,
      "longitude": 6.92543,
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
      "heading": 301,
      "squawk": "7040",
      "timestamp": 1644849513,
      "ems": null
    },
    {
      "latitude": 50.973305,
      "longitude": 6.923752,
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
      "heading": 299,
      "squawk": "7040",
      "timestamp": 1644849516,
      "ems": null
    },
    {
      "latitude": 50.973816,
      "longitude": 6.922203,
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
      "heading": 299,
      "squawk": "7040",
      "timestamp": 1644849519,
      "ems": null
    },
    {
      "latitude": 50.974457,
      "longitude": 6.920273,
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
      "heading": 298,
      "squawk": "7040",
      "timestamp": 1644849522,
      "ems": null
    },
    {
      "latitude": 50.975025,
      "longitude": 6.91864,
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
      "heading": 298,
      "squawk": "7040",
      "timestamp": 1644849525,
      "ems": null
    },
    {
      "latitude": 50.97554,
      "longitude": 6.917114,
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
      "heading": 297,
      "squawk": "7040",
      "timestamp": 1644849528,
      "ems": null
    },
    {
      "latitude": 50.976051,
      "longitude": 6.915512,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 296,
      "squawk": "7040",
      "timestamp": 1644849531,
      "ems": null
    },
    {
      "latitude": 50.976608,
      "longitude": 6.913681,
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
      "heading": 296,
      "squawk": "7040",
      "timestamp": 1644849534,
      "ems": null
    },
    {
      "latitude": 50.977215,
      "longitude": 6.911774,
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
      "heading": 296,
      "squawk": "7040",
      "timestamp": 1644849537,
      "ems": null
    },
    {
      "latitude": 50.977615,
      "longitude": 6.910623,
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
      "heading": 296,
      "squawk": "7040",
      "timestamp": 1644849539,
      "ems": null
    },
    {
      "latitude": 50.978146,
      "longitude": 6.908875,
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
      "heading": 296,
      "squawk": "7040",
      "timestamp": 1644849543,
      "ems": null
    },
    {
      "latitude": 50.979122,
      "longitude": 6.905594,
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
      "heading": 295,
      "squawk": "7040",
      "timestamp": 1644849548,
      "ems": null
    },
    {
      "latitude": 50.980331,
      "longitude": 6.902313,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1644849555,
      "ems": null
    },
    {
      "latitude": 50.981216,
      "longitude": 6.900482,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1644849558,
      "ems": null
    },
    {
      "latitude": 50.982334,
      "longitude": 6.898651,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1644849562,
      "ems": null
    },
    {
      "latitude": 50.983219,
      "longitude": 6.897278,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1644849565,
      "ems": null
    },
    {
      "latitude": 50.984104,
      "longitude": 6.895981,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1644849568,
      "ems": null
    },
    {
      "latitude": 50.984989,
      "longitude": 6.894608,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1644849571,
      "ems": null
    },
    {
      "latitude": 50.985966,
      "longitude": 6.893234,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1644849574,
      "ems": null
    },
    {
      "latitude": 50.986816,
      "longitude": 6.891991,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1644849577,
      "ems": null
    },
    {
      "latitude": 50.987732,
      "longitude": 6.890803,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1644849580,
      "ems": null
    },
    {
      "latitude": 50.988693,
      "longitude": 6.889616,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1644849583,
      "ems": null
    },
    {
      "latitude": 50.989223,
      "longitude": 6.889038,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1644849586,
      "ems": null
    },
    {
      "latitude": 50.990669,
      "longitude": 6.887589,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1644849589,
      "ems": null
    },
    {
      "latitude": 50.991924,
      "longitude": 6.88652,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1644849592,
      "ems": null
    },
    {
      "latitude": 50.992855,
      "longitude": 6.885757,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1644849595,
      "ems": null
    },
    {
      "latitude": 50.994049,
      "longitude": 6.884939,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1644849598,
      "ems": null
    },
    {
      "latitude": 50.995148,
      "longitude": 6.884196,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1644849601,
      "ems": null
    },
    {
      "latitude": 50.9963,
      "longitude": 6.883316,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644849604,
      "ems": null
    },
    {
      "latitude": 50.997345,
      "longitude": 6.882415,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1644849607,
      "ems": null
    },
    {
      "latitude": 50.998398,
      "longitude": 6.881524,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1644849610,
      "ems": null
    },
    {
      "latitude": 50.999496,
      "longitude": 6.880633,
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
      "squawk": "7000",
      "timestamp": 1644849613,
      "ems": null
    },
    {
      "latitude": 51.000725,
      "longitude": 6.879654,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1644849616,
      "ems": null
    },
    {
      "latitude": 51.001694,
      "longitude": 6.878926,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1644849619,
      "ems": null
    },
    {
      "latitude": 51.00412,
      "longitude": 6.87707,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1644849625,
      "ems": null
    },
    {
      "latitude": 51.006592,
      "longitude": 6.875363,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1644849631,
      "ems": null
    },
    {
      "latitude": 51.008926,
      "longitude": 6.87373,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1644849637,
      "ems": null
    },
    {
      "latitude": 51.011196,
      "longitude": 6.872025,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1644849643,
      "ems": null
    },
    {
      "latitude": 51.013573,
      "longitude": 6.870193,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1644849649,
      "ems": null
    },
    {
      "latitude": 51.01506,
      "longitude": 6.869499,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644849652,
      "ems": null
    },
    {
      "latitude": 51.016365,
      "longitude": 6.869049,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1644849655,
      "ems": null
    },
    {
      "latitude": 51.01767,
      "longitude": 6.868831,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1644849658,
      "ems": null
    },
    {
      "latitude": 51.019157,
      "longitude": 6.86882,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1644849661,
      "ems": null
    },
    {
      "latitude": 51.020554,
      "longitude": 6.868973,
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1644849664,
      "ems": null
    },
    {
      "latitude": 51.021973,
      "longitude": 6.869276,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1644849667,
      "ems": null
    },
    {
      "latitude": 51.023487,
      "longitude": 6.869812,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1644849670,
      "ems": null
    },
    {
      "latitude": 51.024994,
      "longitude": 6.870389,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1644849673,
      "ems": null
    },
    {
      "latitude": 51.026367,
      "longitude": 6.870909,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1644849676,
      "ems": null
    },
    {
      "latitude": 51.026608,
      "longitude": 6.871033,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "7000",
      "timestamp": 1644849679,
      "ems": null
    },
    {
      "latitude": 51.029354,
      "longitude": 6.87233,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1644849682,
      "ems": null
    },
    {
      "latitude": 51.030796,
      "longitude": 6.873169,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1644849685,
      "ems": null
    },
    {
      "latitude": 51.032318,
      "longitude": 6.873878,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1644849688,
      "ems": null
    },
    {
      "latitude": 51.033554,
      "longitude": 6.874472,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1644849691,
      "ems": null
    },
    {
      "latitude": 51.035294,
      "longitude": 6.875363,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1644849694,
      "ems": null
    },
    {
      "latitude": 51.03804,
      "longitude": 6.876625,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1644849701,
      "ems": null
    },
    {
      "latitude": 51.040943,
      "longitude": 6.877975,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1644849706,
      "ems": null
    },
    {
      "latitude": 51.04369,
      "longitude": 6.879425,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1644849713,
      "ems": null
    },
    {
      "latitude": 51.046669,
      "longitude": 6.881027,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1644849718,
      "ems": null
    },
    {
      "latitude": 51.051407,
      "longitude": 6.883083,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1644849729,
      "ems": null
    },
    {
      "latitude": 51.055141,
      "longitude": 6.884232,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1644849737,
      "ems": null
    },
    {
      "latitude": 51.056396,
      "longitude": 6.884568,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1644849740,
      "ems": null
    },
    {
      "latitude": 51.057953,
      "longitude": 6.884939,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1644849743,
      "ems": null
    },
    {
      "latitude": 51.059464,
      "longitude": 6.885458,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1644849746,
      "ems": null
    },
    {
      "latitude": 51.062263,
      "longitude": 6.88652,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1644849752,
      "ems": null
    },
    {
      "latitude": 51.06501,
      "longitude": 6.887589,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1644849758,
      "ems": null
    },
    {
      "latitude": 51.068069,
      "longitude": 6.88865,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1644849764,
      "ems": null
    },
    {
      "latitude": 51.069443,
      "longitude": 6.88917,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1644849767,
      "ems": null
    },
    {
      "latitude": 51.070923,
      "longitude": 6.889725,
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1644849770,
      "ems": null
    },
    {
      "latitude": 51.073811,
      "longitude": 6.890793,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 13,
      "squawk": "7003",
      "timestamp": 1644849775,
      "ems": null
    },
    {
      "latitude": 51.076767,
      "longitude": 6.891991,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 14,
      "squawk": "7003",
      "timestamp": 1644849782,
      "ems": null
    },
    {
      "latitude": 51.079742,
      "longitude": 6.893253,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849788,
      "ems": null
    },
    {
      "latitude": 51.082794,
      "longitude": 6.894531,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 14,
      "squawk": "7003",
      "timestamp": 1644849794,
      "ems": null
    },
    {
      "latitude": 51.085773,
      "longitude": 6.895752,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849800,
      "ems": null
    },
    {
      "latitude": 51.088799,
      "longitude": 6.896973,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644849806,
      "ems": null
    },
    {
      "latitude": 51.091778,
      "longitude": 6.897964,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644849812,
      "ems": null
    },
    {
      "latitude": 51.094666,
      "longitude": 6.898956,
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
      "heading": 11,
      "squawk": "7003",
      "timestamp": 1644849818,
      "ems": null
    },
    {
      "latitude": 51.097641,
      "longitude": 6.899859,
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
      "heading": 10,
      "squawk": "7003",
      "timestamp": 1644849824,
      "ems": null
    },
    {
      "latitude": 51.100437,
      "longitude": 6.900711,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 10,
      "squawk": "7003",
      "timestamp": 1644849829,
      "ems": null
    },
    {
      "latitude": 51.101322,
      "longitude": 6.90094,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 9,
      "squawk": "7003",
      "timestamp": 1644849833,
      "ems": null
    },
    {
      "latitude": 51.104965,
      "longitude": 6.902012,
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644849839,
      "ems": null
    },
    {
      "latitude": 51.107849,
      "longitude": 6.903126,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 14,
      "squawk": "7003",
      "timestamp": 1644849844,
      "ems": null
    },
    {
      "latitude": 51.110687,
      "longitude": 6.904314,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849850,
      "ems": null
    },
    {
      "latitude": 51.113567,
      "longitude": 6.905518,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 13,
      "squawk": "7003",
      "timestamp": 1644849856,
      "ems": null
    },
    {
      "latitude": 51.11705,
      "longitude": 6.906911,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 14,
      "squawk": "7003",
      "timestamp": 1644849863,
      "ems": null
    },
    {
      "latitude": 51.118595,
      "longitude": 6.907578,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 16,
      "squawk": "7003",
      "timestamp": 1644849866,
      "ems": null
    },
    {
      "latitude": 51.121807,
      "longitude": 6.909027,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 16,
      "squawk": "7003",
      "timestamp": 1644849872,
      "ems": null
    },
    {
      "latitude": 51.124878,
      "longitude": 6.910475,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 16,
      "squawk": "7003",
      "timestamp": 1644849878,
      "ems": null
    },
    {
      "latitude": 51.12822,
      "longitude": 6.911959,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849884,
      "ems": null
    },
    {
      "latitude": 51.13121,
      "longitude": 6.9133,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849890,
      "ems": null
    },
    {
      "latitude": 51.134468,
      "longitude": 6.914673,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849896,
      "ems": null
    },
    {
      "latitude": 51.137375,
      "longitude": 6.915894,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 14,
      "squawk": "7003",
      "timestamp": 1644849902,
      "ems": null
    },
    {
      "latitude": 51.140427,
      "longitude": 6.917038,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644849908,
      "ems": null
    },
    {
      "latitude": 51.14378,
      "longitude": 6.918182,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644849914,
      "ems": null
    },
    {
      "latitude": 51.146759,
      "longitude": 6.91916,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644849920,
      "ems": null
    },
    {
      "latitude": 51.149876,
      "longitude": 6.920242,
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644849926,
      "ems": null
    },
    {
      "latitude": 51.152668,
      "longitude": 6.921082,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 8,
      "squawk": "7003",
      "timestamp": 1644849932,
      "ems": null
    },
    {
      "latitude": 51.155731,
      "longitude": 6.921832,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 9,
      "squawk": "7003",
      "timestamp": 1644849938,
      "ems": null
    },
    {
      "latitude": 51.158676,
      "longitude": 6.922684,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "squawk": "7003",
      "timestamp": 1644849944,
      "ems": null
    },
    {
      "latitude": 51.161049,
      "longitude": 6.923447,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "7003",
      "timestamp": 1644849950,
      "ems": null
    },
    {
      "latitude": 51.16468,
      "longitude": 6.924744,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 13,
      "squawk": "7003",
      "timestamp": 1644849956,
      "ems": null
    },
    {
      "latitude": 51.167751,
      "longitude": 6.925964,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849962,
      "ems": null
    },
    {
      "latitude": 51.169006,
      "longitude": 6.926509,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849964,
      "ems": null
    },
    {
      "latitude": 51.170563,
      "longitude": 6.927177,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849968,
      "ems": null
    },
    {
      "latitude": 51.172119,
      "longitude": 6.927919,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 16,
      "squawk": "7003",
      "timestamp": 1644849971,
      "ems": null
    },
    {
      "latitude": 51.175014,
      "longitude": 6.929245,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 16,
      "squawk": "7003",
      "timestamp": 1644849977,
      "ems": null
    },
    {
      "latitude": 51.177979,
      "longitude": 6.930592,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 15,
      "squawk": "7003",
      "timestamp": 1644849983,
      "ems": null
    },
    {
      "latitude": 51.181229,
      "longitude": 6.932225,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 17,
      "squawk": "7003",
      "timestamp": 1644849989,
      "ems": null
    },
    {
      "latitude": 51.184093,
      "longitude": 6.93367,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 18,
      "squawk": "7003",
      "timestamp": 1644849995,
      "ems": null
    },
    {
      "latitude": 51.187073,
      "longitude": 6.935425,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 20,
      "squawk": "7003",
      "timestamp": 1644850001,
      "ems": null
    },
    {
      "latitude": 51.190006,
      "longitude": 6.93718,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 21,
      "squawk": "7003",
      "timestamp": 1644850007,
      "ems": null
    },
    {
      "latitude": 51.193123,
      "longitude": 6.938705,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644850013,
      "ems": null
    },
    {
      "latitude": 51.194427,
      "longitude": 6.938934,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "7003",
      "timestamp": 1644850016,
      "ems": null
    },
    {
      "latitude": 51.195923,
      "longitude": 6.938831,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 351,
      "squawk": "7003",
      "timestamp": 1644850019,
      "ems": null
    },
    {
      "latitude": 51.197361,
      "longitude": 6.938248,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 341,
      "squawk": "7003",
      "timestamp": 1644850022,
      "ems": null
    },
    {
      "latitude": 51.198662,
      "longitude": 6.937256,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 328,
      "squawk": "7003",
      "timestamp": 1644850025,
      "ems": null
    },
    {
      "latitude": 51.199768,
      "longitude": 6.935788,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 317,
      "squawk": "7003",
      "timestamp": 1644850028,
      "ems": null
    },
    {
      "latitude": 51.20076,
      "longitude": 6.934357,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 315,
      "squawk": "7003",
      "timestamp": 1644850031,
      "ems": null
    },
    {
      "latitude": 51.201691,
      "longitude": 6.932818,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 315,
      "squawk": "7003",
      "timestamp": 1644850034,
      "ems": null
    },
    {
      "latitude": 51.202805,
      "longitude": 6.930923,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 314,
      "squawk": "7003",
      "timestamp": 1644850037,
      "ems": null
    },
    {
      "latitude": 51.203751,
      "longitude": 6.929552,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 316,
      "squawk": "7003",
      "timestamp": 1644850040,
      "ems": null
    },
    {
      "latitude": 51.204712,
      "longitude": 6.928142,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 317,
      "squawk": "7003",
      "timestamp": 1644850043,
      "ems": null
    },
    {
      "latitude": 51.205647,
      "longitude": 6.926804,
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
      "heading": 316,
      "squawk": "7003",
      "timestamp": 1644850046,
      "ems": null
    },
    {
      "latitude": 51.206345,
      "longitude": 6.925735,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 316,
      "squawk": "7003",
      "timestamp": 1644850049,
      "ems": null
    },
    {
      "latitude": 51.20723,
      "longitude": 6.924438,
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
      "heading": 317,
      "squawk": "7003",
      "timestamp": 1644850052,
      "ems": null
    },
    {
      "latitude": 51.208237,
      "longitude": 6.922945,
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
      "heading": 317,
      "squawk": "7003",
      "timestamp": 1644850055,
      "ems": null
    },
    {
      "latitude": 51.210022,
      "longitude": 6.920199,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "7003",
      "timestamp": 1644850061,
      "ems": null
    },
    {
      "latitude": 51.211651,
      "longitude": 6.917572,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 314,
      "squawk": "7003",
      "timestamp": 1644850067,
      "ems": null
    },
    {
      "latitude": 51.213226,
      "longitude": 6.914928,
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
      "heading": 313,
      "squawk": "7003",
      "timestamp": 1644850073,
      "ems": null
    },
    {
      "latitude": 51.214817,
      "longitude": 6.912231,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 312,
      "squawk": "7003",
      "timestamp": 1644850079,
      "ems": null
    },
    {
      "latitude": 51.216446,
      "longitude": 6.909409,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 312,
      "squawk": "7003",
      "timestamp": 1644850085,
      "ems": null
    },
    {
      "latitude": 51.218079,
      "longitude": 6.906615,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "7003",
      "timestamp": 1644850091,
      "ems": null
    },
    {
      "latitude": 51.219635,
      "longitude": 6.903868,
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
      "heading": 310,
      "squawk": "7003",
      "timestamp": 1644850097,
      "ems": null
    },
    {
      "latitude": 51.221241,
      "longitude": 6.900864,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 311,
      "squawk": "7003",
      "timestamp": 1644850103,
      "ems": null
    },
    {
      "latitude": 51.22261,
      "longitude": 6.898301,
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
      "heading": 308,
      "squawk": "7003",
      "timestamp": 1644850109,
      "ems": null
    },
    {
      "latitude": 51.223618,
      "longitude": 6.896222,
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
      "heading": 308,
      "squawk": "7003",
      "timestamp": 1644850112,
      "ems": null
    },
    {
      "latitude": 51.224762,
      "longitude": 6.893995,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 308,
      "squawk": "7003",
      "timestamp": 1644850118,
      "ems": null
    },
    {
      "latitude": 51.226501,
      "longitude": 6.89064,
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
      "heading": 311,
      "squawk": "7003",
      "timestamp": 1644850124,
      "ems": null
    },
    {
      "latitude": 51.228271,
      "longitude": 6.887436,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "7003",
      "timestamp": 1644850130,
      "ems": null
    },
    {
      "latitude": 51.229759,
      "longitude": 6.884689,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 311,
      "squawk": "7003",
      "timestamp": 1644850136,
      "ems": null
    },
    {
      "latitude": 51.231491,
      "longitude": 6.881598,
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
      "heading": 313,
      "squawk": "7003",
      "timestamp": 1644850142,
      "ems": null
    },
    {
      "latitude": 51.23204,
      "longitude": 6.880782,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 315,
      "squawk": "7003",
      "timestamp": 1644850145,
      "ems": null
    },
    {
      "latitude": 51.232971,
      "longitude": 6.879272,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 315,
      "squawk": "7003",
      "timestamp": 1644850148,
      "ems": null
    },
    {
      "latitude": 51.234043,
      "longitude": 6.877518,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 314,
      "squawk": "7003",
      "timestamp": 1644850151,
      "ems": null
    },
    {
      "latitude": 51.23595,
      "longitude": 6.874237,
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
      "heading": 312,
      "squawk": "7003",
      "timestamp": 1644850157,
      "ems": null
    },
    {
      "latitude": 51.237579,
      "longitude": 6.871428,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 311,
      "squawk": "7003",
      "timestamp": 1644850163,
      "ems": null
    },
    {
      "latitude": 51.238979,
      "longitude": 6.868744,
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
      "heading": 307,
      "squawk": "7003",
      "timestamp": 1644850169,
      "ems": null
    },
    {
      "latitude": 51.239914,
      "longitude": 6.866752,
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
      "heading": 305,
      "squawk": "7003",
      "timestamp": 1644850172,
      "ems": null
    },
    {
      "latitude": 51.240234,
      "longitude": 6.865935,
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
      "heading": 303,
      "squawk": "7003",
      "timestamp": 1644850174,
      "ems": null
    },
    {
      "latitude": 51.241211,
      "longitude": 6.86348,
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
      "heading": 301,
      "squawk": "7003",
      "timestamp": 1644850178,
      "ems": null
    },
    {
      "latitude": 51.241653,
      "longitude": 6.862224,
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
      "heading": 299,
      "squawk": "7003",
      "timestamp": 1644850181,
      "ems": null
    },
    {
      "latitude": 51.242329,
      "longitude": 6.860275,
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
      "heading": 299,
      "squawk": "7003",
      "timestamp": 1644850184,
      "ems": null
    },
    {
      "latitude": 51.242935,
      "longitude": 6.858661,
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
      "heading": 301,
      "squawk": "7003",
      "timestamp": 1644850187,
      "ems": null
    },
    {
      "latitude": 51.243401,
      "longitude": 6.857529,
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
      "heading": 303,
      "squawk": "7003",
      "timestamp": 1644850190,
      "ems": null
    },
    {
      "latitude": 51.244984,
      "longitude": 6.853943,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 304,
      "squawk": "7003",
      "timestamp": 1644850196,
      "ems": null
    },
    {
      "latitude": 51.24646,
      "longitude": 6.850718,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 307,
      "squawk": "7003",
      "timestamp": 1644850201,
      "ems": null
    },
    {
      "latitude": 51.247147,
      "longitude": 6.849382,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 309,
      "squawk": "7003",
      "timestamp": 1644850204,
      "ems": null
    },
    {
      "latitude": 51.248154,
      "longitude": 6.847526,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 313,
      "squawk": "7003",
      "timestamp": 1644850207,
      "ems": null
    },
    {
      "latitude": 51.249252,
      "longitude": 6.845967,
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
      "heading": 318,
      "squawk": "7003",
      "timestamp": 1644850211,
      "ems": null
    },
    {
      "latitude": 51.250244,
      "longitude": 6.844788,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "7003",
      "timestamp": 1644850214,
      "ems": null
    },
    {
      "latitude": 51.251221,
      "longitude": 6.843643,
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
      "heading": 321,
      "squawk": "7003",
      "timestamp": 1644850217,
      "ems": null
    },
    {
      "latitude": 51.25243,
      "longitude": 6.841965,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 315,
      "squawk": "7003",
      "timestamp": 1644850219,
      "ems": null
    },
    {
      "latitude": 51.253876,
      "longitude": 6.838913,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 305,
      "squawk": "7003",
      "timestamp": 1644850225,
      "ems": null
    },
    {
      "latitude": 51.255272,
      "longitude": 6.835709,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 302,
      "squawk": "7003",
      "timestamp": 1644850232,
      "ems": null
    },
    {
      "latitude": 51.256027,
      "longitude": 6.833422,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 297,
      "squawk": "7003",
      "timestamp": 1644850236,
      "ems": null
    },
    {
      "latitude": 51.25676,
      "longitude": 6.831512,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 301,
      "squawk": "7003",
      "timestamp": 1644850240,
      "ems": null
    },
    {
      "latitude": 51.257877,
      "longitude": 6.82869,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 302,
      "squawk": "7003",
      "timestamp": 1644850244,
      "ems": null
    },
    {
      "latitude": 51.258717,
      "longitude": 6.826477,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 300,
      "squawk": "7003",
      "timestamp": 1644850248,
      "ems": null
    },
    {
      "latitude": 51.259552,
      "longitude": 6.824143,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 299,
      "squawk": "7003",
      "timestamp": 1644850252,
      "ems": null
    },
    {
      "latitude": 51.260437,
      "longitude": 6.821671,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 298,
      "squawk": "7003",
      "timestamp": 1644850256,
      "ems": null
    },
    {
      "latitude": 51.262115,
      "longitude": 6.817017,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 300,
      "squawk": "7003",
      "timestamp": 1644850264,
      "ems": null
    },
    {
      "latitude": 51.264175,
      "longitude": 6.811894,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 302,
      "squawk": "7003",
      "timestamp": 1644850276,
      "ems": null
    },
    {
      "latitude": 51.266373,
      "longitude": 6.806401,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "7003",
      "timestamp": 1644850284,
      "ems": null
    },
    {
      "latitude": 51.267235,
      "longitude": 6.804428,
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
      "heading": 306,
      "squawk": "7003",
      "timestamp": 1644850288,
      "ems": null
    },
    {
      "latitude": 51.268387,
      "longitude": 6.80269,
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
      "heading": 322,
      "squawk": "7003",
      "timestamp": 1644850292,
      "ems": null
    },
    {
      "latitude": 51.270123,
      "longitude": 6.8013,
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
      "heading": 332,
      "squawk": "7003",
      "timestamp": 1644850296,
      "ems": null
    },
    {
      "latitude": 51.271042,
      "longitude": 6.800834,
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
      "heading": 345,
      "squawk": "7003",
      "timestamp": 1644850299,
      "ems": null
    },
    {
      "latitude": 51.272121,
      "longitude": 6.800461,
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
      "heading": 345,
      "squawk": "7003",
      "timestamp": 1644850301,
      "ems": null
    },
    {
      "latitude": 51.273285,
      "longitude": 6.800461,
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
      "heading": 355,
      "squawk": "7003",
      "timestamp": 1644850305,
      "ems": null
    },
    {
      "latitude": 51.275986,
      "longitude": 6.802139,
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
      "heading": 31,
      "squawk": "7003",
      "timestamp": 1644850309,
      "ems": null
    },
    {
      "latitude": 51.277267,
      "longitude": 6.803729,
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
      "heading": 42,
      "squawk": "7003",
      "timestamp": 1644850313,
      "ems": null
    },
    {
      "latitude": 51.278408,
      "longitude": 6.80542,
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
      "heading": 38,
      "squawk": "7003",
      "timestamp": 1644850317,
      "ems": null
    },
    {
      "latitude": 51.280106,
      "longitude": 6.808109,
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
      "heading": 43,
      "squawk": "7003",
      "timestamp": 1644850321,
      "ems": null
    },
    {
      "latitude": 51.281246,
      "longitude": 6.809921,
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
      "heading": 44,
      "squawk": "7003",
      "timestamp": 1644850325,
      "ems": null
    },
    {
      "latitude": 51.283035,
      "longitude": 6.812562,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 44,
      "squawk": "7003",
      "timestamp": 1644850329,
      "ems": null
    },
    {
      "latitude": 51.284637,
      "longitude": 6.814938,
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
      "heading": 40,
      "squawk": "7003",
      "timestamp": 1644850333,
      "ems": null
    },
    {
      "latitude": 51.285576,
      "longitude": 6.81633,
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
      "heading": 44,
      "squawk": "7003",
      "timestamp": 1644850337,
      "ems": null
    },
    {
      "latitude": 51.288509,
      "longitude": 6.820984,
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
      "heading": 41,
      "squawk": "7003",
      "timestamp": 1644850345,
      "ems": null
    },
    {
      "latitude": 51.290791,
      "longitude": 6.824036,
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
      "heading": 39,
      "squawk": "7003",
      "timestamp": 1644850353,
      "ems": null
    },
    {
      "latitude": 51.292511,
      "longitude": 6.826221,
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
      "heading": 35,
      "squawk": "7003",
      "timestamp": 1644850357,
      "ems": null
    },
    {
      "latitude": 51.296329,
      "longitude": 6.830673,
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
      "heading": 37,
      "squawk": "7003",
      "timestamp": 1644850365,
      "ems": null
    },
    {
      "latitude": 51.297867,
      "longitude": 6.832275,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 28,
      "squawk": "7003",
      "timestamp": 1644850369,
      "ems": null
    },
    {
      "latitude": 51.299587,
      "longitude": 6.833115,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 9,
      "squawk": "7003",
      "timestamp": 1644850373,
      "ems": null
    },
    {
      "latitude": 51.301575,
      "longitude": 6.832828,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 349,
      "squawk": "7003",
      "timestamp": 1644850377,
      "ems": null
    },
    {
      "latitude": 51.30368,
      "longitude": 6.831343,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 327,
      "squawk": "7003",
      "timestamp": 1644850381,
      "ems": null
    },
    {
      "latitude": 51.304916,
      "longitude": 6.829859,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "7003",
      "timestamp": 1644850385,
      "ems": null
    },
    {
      "latitude": 51.306152,
      "longitude": 6.827698,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 309,
      "squawk": "7003",
      "timestamp": 1644850389,
      "ems": null
    },
    {
      "latitude": 51.307159,
      "longitude": 6.825256,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 295,
      "squawk": "7003",
      "timestamp": 1644850393,
      "ems": null
    },
    {
      "latitude": 51.307709,
      "longitude": 6.822955,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 286,
      "squawk": "7003",
      "timestamp": 1644850397,
      "ems": null
    },
    {
      "latitude": 51.308075,
      "longitude": 6.820283,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 280,
      "squawk": "7003",
      "timestamp": 1644850401,
      "ems": null
    },
    {
      "latitude": 51.308342,
      "longitude": 6.817245,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 276,
      "squawk": "7003",
      "timestamp": 1644850405,
      "ems": null
    },
    {
      "latitude": 51.308212,
      "longitude": 6.814122,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 261,
      "squawk": "7003",
      "timestamp": 1644850409,
      "ems": null
    },
    {
      "latitude": 51.307709,
      "longitude": 6.811152,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 248,
      "squawk": "7003",
      "timestamp": 1644850413,
      "ems": null
    },
    {
      "latitude": 51.30685,
      "longitude": 6.809006,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1644850417,
      "ems": null
    },
    {
      "latitude": 51.3055,
      "longitude": 6.806488,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 228,
      "squawk": "7003",
      "timestamp": 1644850421,
      "ems": null
    },
    {
      "latitude": 51.304916,
      "longitude": 6.805288,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 235,
      "squawk": "7003",
      "timestamp": 1644850425,
      "ems": null
    },
    {
      "latitude": 51.303497,
      "longitude": 6.801948,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 236,
      "squawk": "7003",
      "timestamp": 1644850429,
      "ems": null
    },
    {
      "latitude": 51.302399,
      "longitude": 6.799646,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 233,
      "squawk": "7003",
      "timestamp": 1644850433,
      "ems": null
    },
    {
      "latitude": 51.301266,
      "longitude": 6.797333,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1644850437,
      "ems": null
    },
    {
      "latitude": 51.300247,
      "longitude": 6.795267,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 230,
      "squawk": "7003",
      "timestamp": 1644850441,
      "ems": null
    },
    {
      "latitude": 51.298004,
      "longitude": 6.790543,
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
      "heading": 233,
      "squawk": "7003",
      "timestamp": 1644850449,
      "ems": null
    },
    {
      "latitude": 51.297775,
      "longitude": 6.790071,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 233,
      "squawk": "7003",
      "timestamp": 1644850450,
      "ems": null
    },
    {
      "latitude": 51.294559,
      "longitude": 6.783447,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1644850462,
      "ems": null
    },
    {
      "latitude": 51.293015,
      "longitude": 6.780123,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 234,
      "squawk": "7003",
      "timestamp": 1644850468,
      "ems": null
    },
    {
      "latitude": 51.292007,
      "longitude": 6.777971,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 233,
      "squawk": "7003",
      "timestamp": 1644850473,
      "ems": null
    },
    {
      "latitude": 51.288712,
      "longitude": 6.771067,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1644850485,
      "ems": null
    },
    {
      "latitude": 51.287205,
      "longitude": 6.76796,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1644850490,
      "ems": null
    },
    {
      "latitude": 51.284225,
      "longitude": 6.761703,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 232,
      "squawk": "7003",
      "timestamp": 1644850502,
      "ems": null
    },
    {
      "latitude": 51.282688,
      "longitude": 6.758423,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 233,
      "squawk": "7003",
      "timestamp": 1644850508,
      "ems": null
    },
    {
      "latitude": 51.28162,
      "longitude": 6.756134,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 1984,
        "ms": 10.1
      },
      "heading": 233,
      "squawk": "7003",
      "timestamp": 1644850514,
      "ems": null
    },
    {
      "latitude": 51.279526,
      "longitude": 6.751175,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 237,
      "squawk": "7003",
      "timestamp": 1644850524,
      "ems": null
    },
    {
      "latitude": 51.27887,
      "longitude": 6.749465,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 238,
      "squawk": "7003",
      "timestamp": 1644850528,
      "ems": null
    },
    {
      "latitude": 51.277943,
      "longitude": 6.74736,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 231,
      "squawk": "7003",
      "timestamp": 1644850535,
      "ems": null
    },
    {
      "latitude": 51.277451,
      "longitude": 6.746644,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 221,
      "squawk": "7003",
      "timestamp": 1644850537,
      "ems": null
    },
    {
      "latitude": 51.277058,
      "longitude": 6.746216,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 217,
      "squawk": "7003",
      "timestamp": 1644850542,
      "ems": null
    },
    {
      "latitude": 51.275482,
      "longitude": 6.745234,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 194,
      "squawk": "7003",
      "timestamp": 1644850546,
      "ems": null
    },
    {
      "latitude": 51.274731,
      "longitude": 6.745071,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 185,
      "squawk": "7003",
      "timestamp": 1644850550,
      "ems": null
    },
    {
      "latitude": 51.273239,
      "longitude": 6.744919,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 180,
      "squawk": "7003",
      "timestamp": 1644850554,
      "ems": null
    },
    {
      "latitude": 51.272141,
      "longitude": 6.745012,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 175,
      "squawk": "7003",
      "timestamp": 1644850558,
      "ems": null
    },
    {
      "latitude": 51.271088,
      "longitude": 6.74516,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 175,
      "squawk": "7003",
      "timestamp": 1644850562,
      "ems": null
    },
    {
      "latitude": 51.270264,
      "longitude": 6.745234,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 176,
      "squawk": "7003",
      "timestamp": 1644850566,
      "ems": null
    },
    {
      "latitude": 51.269283,
      "longitude": 6.745224,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 180,
      "squawk": "7003",
      "timestamp": 1644850570,
      "ems": null
    },
    {
      "latitude": 51.268524,
      "longitude": 6.745308,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 178,
      "squawk": "7003",
      "timestamp": 1644850572,
      "ems": null
    },
    {
      "latitude": 51.268295,
      "longitude": 6.745308,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 178,
      "squawk": "7003",
      "timestamp": 1644850575,
      "ems": null
    },
    {
      "latitude": 51.267235,
      "longitude": 6.7453,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 177,
      "squawk": "7003",
      "timestamp": 1644850577,
      "ems": null
    },
    {
      "latitude": 51.266098,
      "longitude": 6.745383,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 175,
      "squawk": "7003",
      "timestamp": 1644850584,
      "ems": null
    },
    {
      "latitude": 51.26458,
      "longitude": 6.745682,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 170,
      "squawk": "7003",
      "timestamp": 1644850588,
      "ems": null
    },
    {
      "latitude": 51.263672,
      "longitude": 6.746051,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 164,
      "squawk": "7003",
      "timestamp": 1644850592,
      "ems": null
    },
    {
      "latitude": 51.262985,
      "longitude": 6.746348,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 164,
      "squawk": "7003",
      "timestamp": 1644850595,
      "ems": null
    },
    {
      "latitude": 51.262024,
      "longitude": 6.746719,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 164,
      "squawk": "7003",
      "timestamp": 1644850598,
      "ems": null
    },
    {
      "latitude": 51.261383,
      "longitude": 6.74709,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 160,
      "squawk": "7003",
      "timestamp": 1644850601,
      "ems": null
    },
    {
      "latitude": 51.260284,
      "longitude": 6.74761,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 161,
      "squawk": "7003",
      "timestamp": 1644850604,
      "ems": null
    },
    {
      "latitude": 51.259552,
      "longitude": 6.747981,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 166,
      "squawk": "7003",
      "timestamp": 1644850607,
      "ems": null
    },
    {
      "latitude": 51.258728,
      "longitude": 6.748278,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 166,
      "squawk": "7003",
      "timestamp": 1644850610,
      "ems": null
    },
    {
      "latitude": 51.257996,
      "longitude": 6.748575,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 165,
      "squawk": "7003",
      "timestamp": 1644850613,
      "ems": null
    },
    {
      "latitude": 51.257217,
      "longitude": 6.748872,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 164,
      "squawk": "7003",
      "timestamp": 1644850616,
      "ems": null
    },
    {
      "latitude": 51.255432,
      "longitude": 6.749688,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 166,
      "squawk": "7003",
      "timestamp": 1644850622,
      "ems": null
    },
    {
      "latitude": 51.254387,
      "longitude": 6.750107,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 167,
      "squawk": "7003",
      "timestamp": 1644850628,
      "ems": null
    },
    {
      "latitude": 51.252476,
      "longitude": 6.750793,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 165,
      "squawk": "7003",
      "timestamp": 1644850631,
      "ems": null
    },
    {
      "latitude": 51.25071,
      "longitude": 6.751633,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "7003",
      "timestamp": 1644850636,
      "ems": null
    },
    {
      "latitude": 51.249359,
      "longitude": 6.752472,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 159,
      "squawk": "7003",
      "timestamp": 1644850640,
      "ems": null
    },
    {
      "latitude": 51.247776,
      "longitude": 6.753616,
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
      "heading": 156,
      "squawk": "7003",
      "timestamp": 1644850644,
      "ems": null
    },
    {
      "latitude": 51.246567,
      "longitude": 6.754379,
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
      "heading": 157,
      "squawk": "7003",
      "timestamp": 1644850647,
      "ems": null
    },
    {
      "latitude": 51.245499,
      "longitude": 6.755107,
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
      "heading": 157,
      "squawk": "7003",
      "timestamp": 1644850650,
      "ems": null
    },
    {
      "latitude": 51.244423,
      "longitude": 6.755753,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 158,
      "squawk": "7003",
      "timestamp": 1644850653,
      "ems": null
    },
    {
      "latitude": 51.24321,
      "longitude": 6.756517,
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
      "heading": 157,
      "squawk": "7003",
      "timestamp": 1644850656,
      "ems": null
    },
    {
      "latitude": 51.242111,
      "longitude": 6.75726,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "7003",
      "timestamp": 1644850659,
      "ems": null
    },
    {
      "latitude": 51.239868,
      "longitude": 6.758373,
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
      "heading": 166,
      "squawk": "7003",
      "timestamp": 1644850665,
      "ems": null
    },
    {
      "latitude": 51.238953,
      "longitude": 6.75867,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 167,
      "squawk": "7003",
      "timestamp": 1644850667,
      "ems": null
    },
    {
      "latitude": 51.237488,
      "longitude": 6.75919,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 167,
      "squawk": "7003",
      "timestamp": 1644850671,
      "ems": null
    },
    {
      "latitude": 51.236416,
      "longitude": 6.759567,
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
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850674,
      "ems": null
    },
    {
      "latitude": 51.235298,
      "longitude": 6.759872,
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
      "heading": 169,
      "squawk": "7003",
      "timestamp": 1644850677,
      "ems": null
    },
    {
      "latitude": 51.234276,
      "longitude": 6.760254,
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
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850680,
      "ems": null
    },
    {
      "latitude": 51.233391,
      "longitude": 6.760483,
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
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850682,
      "ems": null
    },
    {
      "latitude": 51.232086,
      "longitude": 6.760864,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7003",
      "timestamp": 1644850686,
      "ems": null
    },
    {
      "latitude": 51.230831,
      "longitude": 6.761017,
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
      "heading": 176,
      "squawk": "7003",
      "timestamp": 1644850690,
      "ems": null
    },
    {
      "latitude": 51.229481,
      "longitude": 6.761093,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 176,
      "squawk": "7003",
      "timestamp": 1644850694,
      "ems": null
    },
    {
      "latitude": 51.227806,
      "longitude": 6.761322,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "7003",
      "timestamp": 1644850698,
      "ems": null
    },
    {
      "latitude": 51.226547,
      "longitude": 6.761565,
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
      "heading": 173,
      "squawk": "7003",
      "timestamp": 1644850702,
      "ems": null
    },
    {
      "latitude": 51.223251,
      "longitude": 6.762233,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7003",
      "timestamp": 1644850710,
      "ems": null
    },
    {
      "latitude": 51.221649,
      "longitude": 6.762605,
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
      "heading": 170,
      "squawk": "7003",
      "timestamp": 1644850716,
      "ems": null
    },
    {
      "latitude": 51.219471,
      "longitude": 6.763306,
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
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850720,
      "ems": null
    },
    {
      "latitude": 51.218262,
      "longitude": 6.763687,
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
      "heading": 167,
      "squawk": "7003",
      "timestamp": 1644850724,
      "ems": null
    },
    {
      "latitude": 51.216568,
      "longitude": 6.764312,
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
      "heading": 166,
      "squawk": "7003",
      "timestamp": 1644850728,
      "ems": null
    },
    {
      "latitude": 51.215195,
      "longitude": 6.76498,
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
      "heading": 163,
      "squawk": "7003",
      "timestamp": 1644850732,
      "ems": null
    },
    {
      "latitude": 51.213745,
      "longitude": 6.765671,
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
      "heading": 163,
      "squawk": "7003",
      "timestamp": 1644850736,
      "ems": null
    },
    {
      "latitude": 51.212128,
      "longitude": 6.766465,
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
      "heading": 162,
      "squawk": "7003",
      "timestamp": 1644850740,
      "ems": null
    },
    {
      "latitude": 51.210487,
      "longitude": 6.767197,
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
      "heading": 163,
      "squawk": "7003",
      "timestamp": 1644850744,
      "ems": null
    },
    {
      "latitude": 51.207916,
      "longitude": 6.768321,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 167,
      "squawk": "7003",
      "timestamp": 1644850752,
      "ems": null
    },
    {
      "latitude": 51.204762,
      "longitude": 6.769257,
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
      "heading": 170,
      "squawk": "7003",
      "timestamp": 1644850760,
      "ems": null
    },
    {
      "latitude": 51.203133,
      "longitude": 6.769562,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 173,
      "squawk": "7003",
      "timestamp": 1644850764,
      "ems": null
    },
    {
      "latitude": 51.201736,
      "longitude": 6.769791,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "7003",
      "timestamp": 1644850768,
      "ems": null
    },
    {
      "latitude": 51.200245,
      "longitude": 6.770096,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "7003",
      "timestamp": 1644850772,
      "ems": null
    },
    {
      "latitude": 51.197342,
      "longitude": 6.770918,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 169,
      "squawk": "7003",
      "timestamp": 1644850780,
      "ems": null
    },
    {
      "latitude": 51.194504,
      "longitude": 6.771735,
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
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850788,
      "ems": null
    },
    {
      "latitude": 51.191711,
      "longitude": 6.772403,
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
      "heading": 173,
      "squawk": "7003",
      "timestamp": 1644850796,
      "ems": null
    },
    {
      "latitude": 51.189331,
      "longitude": 6.772774,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "7003",
      "timestamp": 1644850802,
      "ems": null
    },
    {
      "latitude": 51.187271,
      "longitude": 6.77322,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 171,
      "squawk": "7003",
      "timestamp": 1644850809,
      "ems": null
    },
    {
      "latitude": 51.185349,
      "longitude": 6.773814,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850814,
      "ems": null
    },
    {
      "latitude": 51.182968,
      "longitude": 6.774407,
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
      "heading": 171,
      "squawk": "7003",
      "timestamp": 1644850821,
      "ems": null
    },
    {
      "latitude": 51.180832,
      "longitude": 6.774902,
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
      "heading": 170,
      "squawk": "7003",
      "timestamp": 1644850827,
      "ems": null
    },
    {
      "latitude": 51.17981,
      "longitude": 6.775224,
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
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850829,
      "ems": null
    },
    {
      "latitude": 51.17902,
      "longitude": 6.775513,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850832,
      "ems": null
    },
    {
      "latitude": 51.177761,
      "longitude": 6.775894,
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
      "heading": 168,
      "squawk": "7003",
      "timestamp": 1644850836,
      "ems": null
    },
    {
      "latitude": 51.175621,
      "longitude": 6.776581,
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
      "heading": 166,
      "squawk": "7003",
      "timestamp": 1644850842,
      "ems": null
    },
    {
      "latitude": 51.174637,
      "longitude": 6.777006,
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
      "heading": 165,
      "squawk": "7003",
      "timestamp": 1644850844,
      "ems": null
    },
    {
      "latitude": 51.173386,
      "longitude": 6.777496,
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
      "heading": 164,
      "squawk": "7003",
      "timestamp": 1644850848,
      "ems": null
    },
    {
      "latitude": 51.172501,
      "longitude": 6.777878,
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
      "heading": 164,
      "squawk": "7003",
      "timestamp": 1644850850,
      "ems": null
    },
    {
      "latitude": 51.171383,
      "longitude": 6.778336,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "7003",
      "timestamp": 1644850854,
      "ems": null
    },
    {
      "latitude": 51.16901,
      "longitude": 6.779251,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 167,
      "squawk": "7003",
      "timestamp": 1644850860,
      "ems": null
    },
    {
      "latitude": 51.166962,
      "longitude": 6.78009,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 165,
      "squawk": "7003",
      "timestamp": 1644850865,
      "ems": null
    },
    {
      "latitude": 51.164494,
      "longitude": 6.781006,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 167,
      "squawk": "7003",
      "timestamp": 1644850872,
      "ems": null
    },
    {
      "latitude": 51.161957,
      "longitude": 6.781979,
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
      "heading": 166,
      "squawk": "7003",
      "timestamp": 1644850879,
      "ems": null
    },
    {
      "latitude": 51.159233,
      "longitude": 6.783066,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 165,
      "squawk": "7003",
      "timestamp": 1644850887,
      "ems": null
    },
    {
      "latitude": 51.156509,
      "longitude": 6.784355,
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
      "heading": 162,
      "squawk": "7003",
      "timestamp": 1644850895,
      "ems": null
    },
    {
      "latitude": 51.155045,
      "longitude": 6.785171,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7003",
      "timestamp": 1644850899,
      "ems": null
    },
    {
      "latitude": 51.154037,
      "longitude": 6.785839,
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
      "heading": 157,
      "squawk": "7003",
      "timestamp": 1644850902,
      "ems": null
    },
    {
      "latitude": 51.153183,
      "longitude": 6.786423,
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
      "heading": 156,
      "squawk": "7003",
      "timestamp": 1644850905,
      "ems": null
    },
    {
      "latitude": 51.152023,
      "longitude": 6.787175,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "7003",
      "timestamp": 1644850907,
      "ems": null
    },
    {
      "latitude": 51.151108,
      "longitude": 6.787843,
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
      "heading": 156,
      "squawk": "7003",
      "timestamp": 1644850911,
      "ems": null
    },
    {
      "latitude": 51.149921,
      "longitude": 6.788635,
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
      "heading": 156,
      "squawk": "7003",
      "timestamp": 1644850914,
      "ems": null
    },
    {
      "latitude": 51.148819,
      "longitude": 6.789402,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "7003",
      "timestamp": 1644850917,
      "ems": null
    },
    {
      "latitude": 51.147858,
      "longitude": 6.790144,
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
      "heading": 155,
      "squawk": "7003",
      "timestamp": 1644850919,
      "ems": null
    },
    {
      "latitude": 51.145687,
      "longitude": 6.791611,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 155,
      "squawk": "7003",
      "timestamp": 1644850926,
      "ems": null
    },
    {
      "latitude": 51.143372,
      "longitude": 6.793188,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 158,
      "squawk": "7003",
      "timestamp": 1644850932,
      "ems": null
    },
    {
      "latitude": 51.141171,
      "longitude": 6.79451,
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
      "heading": 160,
      "squawk": "7003",
      "timestamp": 1644850938,
      "ems": null
    },
    {
      "latitude": 51.139069,
      "longitude": 6.795712,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "7003",
      "timestamp": 1644850944,
      "ems": null
    },
    {
      "latitude": 51.136749,
      "longitude": 6.797256,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 155,
      "squawk": "7003",
      "timestamp": 1644850950,
      "ems": null
    },
    {
      "latitude": 51.134628,
      "longitude": 6.79883,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1644850956,
      "ems": null
    },
    {
      "latitude": 51.132511,
      "longitude": 6.800461,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1644850962,
      "ems": null
    },
    {
      "latitude": 51.131535,
      "longitude": 6.801224,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1644850965,
      "ems": null
    },
    {
      "latitude": 51.130417,
      "longitude": 6.802063,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1644850968,
      "ems": null
    },
    {
      "latitude": 51.12941,
      "longitude": 6.802838,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1644850971,
      "ems": null
    },
    {
      "latitude": 51.128277,
      "longitude": 6.803818,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1644850974,
      "ems": null
    },
    {
      "latitude": 51.127251,
      "longitude": 6.804657,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1644850977,
      "ems": null
    },
    {
      "latitude": 51.126228,
      "longitude": 6.805573,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1644850980,
      "ems": null
    },
    {
      "latitude": 51.124321,
      "longitude": 6.807175,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1644850986,
      "ems": null
    },
    {
      "latitude": 51.122272,
      "longitude": 6.808472,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1644850992,
      "ems": null
    },
    {
      "latitude": 51.121078,
      "longitude": 6.809148,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1644850995,
      "ems": null
    },
    {
      "latitude": 51.120209,
      "longitude": 6.809593,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1644850998,
      "ems": null
    },
    {
      "latitude": 51.119244,
      "longitude": 6.810074,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1644851001,
      "ems": null
    },
    {
      "latitude": 51.118176,
      "longitude": 6.810532,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1644851004,
      "ems": null
    },
    {
      "latitude": 51.117279,
      "longitude": 6.810855,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1644851007,
      "ems": null
    },
    {
      "latitude": 51.116264,
      "longitude": 6.811295,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1644851010,
      "ems": null
    },
    {
      "latitude": 51.115173,
      "longitude": 6.811746,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1644851013,
      "ems": null
    },
    {
      "latitude": 51.113388,
      "longitude": 6.812637,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1644851019,
      "ems": null
    },
    {
      "latitude": 51.111465,
      "longitude": 6.813676,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851025,
      "ems": null
    },
    {
      "latitude": 51.10936,
      "longitude": 6.81479,
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644851031,
      "ems": null
    },
    {
      "latitude": 51.108307,
      "longitude": 6.815309,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851034,
      "ems": null
    },
    {
      "latitude": 51.106155,
      "longitude": 6.816497,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851040,
      "ems": null
    },
    {
      "latitude": 51.104004,
      "longitude": 6.817388,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851046,
      "ems": null
    },
    {
      "latitude": 51.101742,
      "longitude": 6.818619,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851052,
      "ems": null
    },
    {
      "latitude": 51.099602,
      "longitude": 6.819992,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851058,
      "ems": null
    },
    {
      "latitude": 51.097271,
      "longitude": 6.821365,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851064,
      "ems": null
    },
    {
      "latitude": 51.094807,
      "longitude": 6.822739,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644851070,
      "ems": null
    },
    {
      "latitude": 51.092476,
      "longitude": 6.823959,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851076,
      "ems": null
    },
    {
      "latitude": 51.089996,
      "longitude": 6.825405,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851082,
      "ems": null
    },
    {
      "latitude": 51.087589,
      "longitude": 6.826706,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851088,
      "ems": null
    },
    {
      "latitude": 51.085052,
      "longitude": 6.828151,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851094,
      "ems": null
    },
    {
      "latitude": 51.082657,
      "longitude": 6.8293,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851100,
      "ems": null
    },
    {
      "latitude": 51.080654,
      "longitude": 6.830139,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644851106,
      "ems": null
    },
    {
      "latitude": 51.078838,
      "longitude": 6.830826,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851109,
      "ems": null
    },
    {
      "latitude": 51.077637,
      "longitude": 6.831195,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644851112,
      "ems": null
    },
    {
      "latitude": 51.076557,
      "longitude": 6.831512,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851115,
      "ems": null
    },
    {
      "latitude": 51.075211,
      "longitude": 6.831937,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644851118,
      "ems": null
    },
    {
      "latitude": 51.074043,
      "longitude": 6.832352,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644851121,
      "ems": null
    },
    {
      "latitude": 51.072739,
      "longitude": 6.83268,
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644851124,
      "ems": null
    },
    {
      "latitude": 51.071529,
      "longitude": 6.833038,
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644851127,
      "ems": null
    },
    {
      "latitude": 51.070366,
      "longitude": 6.833267,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851130,
      "ems": null
    },
    {
      "latitude": 51.069351,
      "longitude": 6.833496,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851133,
      "ems": null
    },
    {
      "latitude": 51.066502,
      "longitude": 6.834183,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851139,
      "ems": null
    },
    {
      "latitude": 51.063988,
      "longitude": 6.834717,
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851145,
      "ems": null
    },
    {
      "latitude": 51.062759,
      "longitude": 6.834907,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644851148,
      "ems": null
    },
    {
      "latitude": 51.060287,
      "longitude": 6.835426,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644851154,
      "ems": null
    },
    {
      "latitude": 51.058868,
      "longitude": 6.83602,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851157,
      "ems": null
    },
    {
      "latitude": 51.057632,
      "longitude": 6.83654,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851160,
      "ems": null
    },
    {
      "latitude": 51.0564,
      "longitude": 6.837082,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644851163,
      "ems": null
    },
    {
      "latitude": 51.053833,
      "longitude": 6.837801,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851169,
      "ems": null
    },
    {
      "latitude": 51.051315,
      "longitude": 6.838321,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851175,
      "ems": null
    },
    {
      "latitude": 51.048752,
      "longitude": 6.838767,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851181,
      "ems": null
    },
    {
      "latitude": 51.046234,
      "longitude": 6.839509,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851187,
      "ems": null
    },
    {
      "latitude": 51.043644,
      "longitude": 6.840515,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851193,
      "ems": null
    },
    {
      "latitude": 51.042389,
      "longitude": 6.841068,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851196,
      "ems": null
    },
    {
      "latitude": 51.041107,
      "longitude": 6.841661,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851199,
      "ems": null
    },
    {
      "latitude": 51.040054,
      "longitude": 6.842107,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851202,
      "ems": null
    },
    {
      "latitude": 51.038712,
      "longitude": 6.842651,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851205,
      "ems": null
    },
    {
      "latitude": 51.037544,
      "longitude": 6.843185,
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644851208,
      "ems": null
    },
    {
      "latitude": 51.036381,
      "longitude": 6.843796,
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644851211,
      "ems": null
    },
    {
      "latitude": 51.033966,
      "longitude": 6.845002,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851217,
      "ems": null
    },
    {
      "latitude": 51.031631,
      "longitude": 6.846116,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851223,
      "ems": null
    },
    {
      "latitude": 51.029167,
      "longitude": 6.847076,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851229,
      "ems": null
    },
    {
      "latitude": 51.026886,
      "longitude": 6.847763,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644851235,
      "ems": null
    },
    {
      "latitude": 51.025536,
      "longitude": 6.848145,
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644851239,
      "ems": null
    },
    {
      "latitude": 51.024418,
      "longitude": 6.84845,
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
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644851241,
      "ems": null
    },
    {
      "latitude": 51.023254,
      "longitude": 6.848788,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851244,
      "ems": null
    },
    {
      "latitude": 51.022182,
      "longitude": 6.849136,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851247,
      "ems": null
    },
    {
      "latitude": 51.021057,
      "longitude": 6.849456,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851250,
      "ems": null
    },
    {
      "latitude": 51.018906,
      "longitude": 6.850124,
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644851256,
      "ems": null
    },
    {
      "latitude": 51.016552,
      "longitude": 6.850739,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851262,
      "ems": null
    },
    {
      "latitude": 51.014317,
      "longitude": 6.851349,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851268,
      "ems": null
    },
    {
      "latitude": 51.011803,
      "longitude": 6.852188,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851275,
      "ems": null
    },
    {
      "latitude": 51.009476,
      "longitude": 6.853093,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851280,
      "ems": null
    },
    {
      "latitude": 51.007149,
      "longitude": 6.854019,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851286,
      "ems": null
    },
    {
      "latitude": 51.005936,
      "longitude": 6.854553,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851289,
      "ems": null
    },
    {
      "latitude": 51.004715,
      "longitude": 6.855098,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851293,
      "ems": null
    },
    {
      "latitude": 51.003571,
      "longitude": 6.855543,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851295,
      "ems": null
    },
    {
      "latitude": 51.001049,
      "longitude": 6.856613,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851302,
      "ems": null
    },
    {
      "latitude": 50.998718,
      "longitude": 6.857547,
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
      "squawk": "7742",
      "timestamp": 1644851307,
      "ems": null
    },
    {
      "latitude": 50.996475,
      "longitude": 6.858438,
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
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644851313,
      "ems": null
    },
    {
      "latitude": 50.993786,
      "longitude": 6.85936,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851320,
      "ems": null
    },
    {
      "latitude": 50.991531,
      "longitude": 6.860219,
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
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644851326,
      "ems": null
    },
    {
      "latitude": 50.989059,
      "longitude": 6.861185,
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
      "squawk": "7742",
      "timestamp": 1644851331,
      "ems": null
    },
    {
      "latitude": 50.986588,
      "longitude": 6.86215,
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
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644851338,
      "ems": null
    },
    {
      "latitude": 50.982788,
      "longitude": 6.863783,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851347,
      "ems": null
    },
    {
      "latitude": 50.980331,
      "longitude": 6.8647,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851353,
      "ems": null
    },
    {
      "latitude": 50.977818,
      "longitude": 6.865692,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851359,
      "ems": null
    },
    {
      "latitude": 50.975353,
      "longitude": 6.866684,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644851365,
      "ems": null
    },
    {
      "latitude": 50.973118,
      "longitude": 6.867599,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851371,
      "ems": null
    },
    {
      "latitude": 50.970417,
      "longitude": 6.868896,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851377,
      "ems": null
    },
    {
      "latitude": 50.967999,
      "longitude": 6.870117,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851383,
      "ems": null
    },
    {
      "latitude": 50.966881,
      "longitude": 6.87088,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644851386,
      "ems": null
    },
    {
      "latitude": 50.965717,
      "longitude": 6.871567,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851389,
      "ems": null
    },
    {
      "latitude": 50.9646,
      "longitude": 6.87233,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851392,
      "ems": null
    },
    {
      "latitude": 50.963436,
      "longitude": 6.873016,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851395,
      "ems": null
    },
    {
      "latitude": 50.962234,
      "longitude": 6.873804,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851398,
      "ems": null
    },
    {
      "latitude": 50.961227,
      "longitude": 6.874398,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851401,
      "ems": null
    },
    {
      "latitude": 50.959991,
      "longitude": 6.875153,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851404,
      "ems": null
    },
    {
      "latitude": 50.95771,
      "longitude": 6.876526,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851410,
      "ems": null
    },
    {
      "latitude": 50.955475,
      "longitude": 6.877899,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644851416,
      "ems": null
    },
    {
      "latitude": 50.953217,
      "longitude": 6.879372,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851422,
      "ems": null
    },
    {
      "latitude": 50.950912,
      "longitude": 6.880646,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851428,
      "ems": null
    },
    {
      "latitude": 50.948776,
      "longitude": 6.881821,
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644851434,
      "ems": null
    },
    {
      "latitude": 50.947586,
      "longitude": 6.882341,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851437,
      "ems": null
    },
    {
      "latitude": 50.946487,
      "longitude": 6.88286,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851440,
      "ems": null
    },
    {
      "latitude": 50.945328,
      "longitude": 6.883392,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851443,
      "ems": null
    },
    {
      "latitude": 50.944023,
      "longitude": 6.884003,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851446,
      "ems": null
    },
    {
      "latitude": 50.942825,
      "longitude": 6.884568,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851449,
      "ems": null
    },
    {
      "latitude": 50.940624,
      "longitude": 6.885529,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851455,
      "ems": null
    },
    {
      "latitude": 50.938019,
      "longitude": 6.886646,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851461,
      "ems": null
    },
    {
      "latitude": 50.935684,
      "longitude": 6.887982,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851467,
      "ems": null
    },
    {
      "latitude": 50.934677,
      "longitude": 6.88865,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1644851470,
      "ems": null
    },
    {
      "latitude": 50.933174,
      "longitude": 6.889496,
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
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1644851473,
      "ems": null
    },
    {
      "latitude": 50.932022,
      "longitude": 6.890284,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851476,
      "ems": null
    },
    {
      "latitude": 50.930832,
      "longitude": 6.891026,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851479,
      "ems": null
    },
    {
      "latitude": 50.929688,
      "longitude": 6.891768,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851482,
      "ems": null
    },
    {
      "latitude": 50.928635,
      "longitude": 6.892436,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1644851485,
      "ems": null
    },
    {
      "latitude": 50.927261,
      "longitude": 6.893327,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851488,
      "ems": null
    },
    {
      "latitude": 50.924789,
      "longitude": 6.894737,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851494,
      "ems": null
    },
    {
      "latitude": 50.923553,
      "longitude": 6.895554,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644851497,
      "ems": null
    },
    {
      "latitude": 50.922546,
      "longitude": 6.896519,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1644851500,
      "ems": null
    },
    {
      "latitude": 50.921444,
      "longitude": 6.897736,
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
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1644851503,
      "ems": null
    },
    {
      "latitude": 50.920532,
      "longitude": 6.898894,
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1644851506,
      "ems": null
    },
    {
      "latitude": 50.919769,
      "longitude": 6.899796,
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
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1644851509,
      "ems": null
    },
    {
      "latitude": 50.918652,
      "longitude": 6.901093,
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
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1644851512,
      "ems": null
    },
    {
      "latitude": 50.917374,
      "longitude": 6.902458,
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
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1644851515,
      "ems": null
    },
    {
      "latitude": 50.916412,
      "longitude": 6.903571,
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
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1644851518,
      "ems": null
    },
    {
      "latitude": 50.915314,
      "longitude": 6.904685,
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
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1644851521,
      "ems": null
    },
    {
      "latitude": 50.913162,
      "longitude": 6.906615,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1644851527,
      "ems": null
    },
    {
      "latitude": 50.912136,
      "longitude": 6.907425,
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644851530,
      "ems": null
    },
    {
      "latitude": 50.911064,
      "longitude": 6.908264,
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1644851533,
      "ems": null
    },
    {
      "latitude": 50.909992,
      "longitude": 6.90918,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644851536,
      "ems": null
    },
    {
      "latitude": 50.908829,
      "longitude": 6.910095,
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644851539,
      "ems": null
    },
    {
      "latitude": 50.907711,
      "longitude": 6.910934,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1644851542,
      "ems": null
    },
    {
      "latitude": 50.906548,
      "longitude": 6.911697,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1644851545,
      "ems": null
    },
    {
      "latitude": 50.90538,
      "longitude": 6.912553,
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
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1644851548,
      "ems": null
    },
    {
      "latitude": 50.904499,
      "longitude": 6.913147,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1644851551,
      "ems": null
    },
    {
      "latitude": 50.903194,
      "longitude": 6.914063,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644851554,
      "ems": null
    },
    {
      "latitude": 50.900894,
      "longitude": 6.915523,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644851560,
      "ems": null
    },
    {
      "latitude": 50.89854,
      "longitude": 6.917114,
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
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1644851566,
      "ems": null
    },
    {
      "latitude": 50.896122,
      "longitude": 6.918869,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1644851572,
      "ems": null
    },
    {
      "latitude": 50.893654,
      "longitude": 6.9207,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1644851578,
      "ems": null
    },
    {
      "latitude": 50.891739,
      "longitude": 6.922129,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1644851584,
      "ems": null
    },
    {
      "latitude": 50.888947,
      "longitude": 6.924059,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1644851590,
      "ems": null
    },
    {
      "latitude": 50.886715,
      "longitude": 6.925583,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644851596,
      "ems": null
    },
    {
      "latitude": 50.885422,
      "longitude": 6.926286,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851599,
      "ems": null
    },
    {
      "latitude": 50.883877,
      "longitude": 6.927109,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851603,
      "ems": null
    },
    {
      "latitude": 50.882805,
      "longitude": 6.927643,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851606,
      "ems": null
    },
    {
      "latitude": 50.880432,
      "longitude": 6.929107,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644851611,
      "ems": null
    },
    {
      "latitude": 50.878151,
      "longitude": 6.930542,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 159,
      "squawk": "7742",
      "timestamp": 1644851618,
      "ems": null
    },
    {
      "latitude": 50.877033,
      "longitude": 6.931152,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644851621,
      "ems": null
    },
    {
      "latitude": 50.874706,
      "longitude": 6.932144,
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851627,
      "ems": null
    },
    {
      "latitude": 50.873543,
      "longitude": 6.932602,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851630,
      "ems": null
    },
    {
      "latitude": 50.872425,
      "longitude": 6.932983,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851633,
      "ems": null
    },
    {
      "latitude": 50.871277,
      "longitude": 6.933264,
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644851636,
      "ems": null
    },
    {
      "latitude": 50.870132,
      "longitude": 6.933486,
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644851639,
      "ems": null
    },
    {
      "latitude": 50.868889,
      "longitude": 6.933746,
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644851642,
      "ems": null
    },
    {
      "latitude": 50.867676,
      "longitude": 6.933975,
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644851645,
      "ems": null
    },
    {
      "latitude": 50.866467,
      "longitude": 6.93428,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851648,
      "ems": null
    },
    {
      "latitude": 50.865303,
      "longitude": 6.934586,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851651,
      "ems": null
    },
    {
      "latitude": 50.864044,
      "longitude": 6.934814,
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644851654,
      "ems": null
    },
    {
      "latitude": 50.861858,
      "longitude": 6.935272,
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644851660,
      "ems": null
    },
    {
      "latitude": 50.860794,
      "longitude": 6.935491,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644851663,
      "ems": null
    },
    {
      "latitude": 50.858551,
      "longitude": 6.935806,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644851669,
      "ems": null
    },
    {
      "latitude": 50.856262,
      "longitude": 6.936085,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1644851675,
      "ems": null
    },
    {
      "latitude": 50.854065,
      "longitude": 6.936456,
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851681,
      "ems": null
    },
    {
      "latitude": 50.851662,
      "longitude": 6.937027,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644851687,
      "ems": null
    },
    {
      "latitude": 50.850449,
      "longitude": 6.937346,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644851690,
      "ems": null
    },
    {
      "latitude": 50.848022,
      "longitude": 6.938015,
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
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644851696,
      "ems": null
    },
    {
      "latitude": 50.846634,
      "longitude": 6.938477,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851699,
      "ems": null
    },
    {
      "latitude": 50.845413,
      "longitude": 6.938905,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851702,
      "ems": null
    },
    {
      "latitude": 50.844269,
      "longitude": 6.939351,
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
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644851705,
      "ems": null
    },
    {
      "latitude": 50.843143,
      "longitude": 6.939774,
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644851708,
      "ems": null
    },
    {
      "latitude": 50.842072,
      "longitude": 6.940316,
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644851711,
      "ems": null
    },
    {
      "latitude": 50.840908,
      "longitude": 6.941071,
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1644851714,
      "ems": null
    },
    {
      "latitude": 50.83984,
      "longitude": 6.941757,
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644851717,
      "ems": null
    },
    {
      "latitude": 50.838722,
      "longitude": 6.942368,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851720,
      "ems": null
    },
    {
      "latitude": 50.837723,
      "longitude": 6.942914,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851723,
      "ems": null
    },
    {
      "latitude": 50.836533,
      "longitude": 6.943588,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851726,
      "ems": null
    },
    {
      "latitude": 50.834438,
      "longitude": 6.944504,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644851732,
      "ems": null
    },
    {
      "latitude": 50.83223,
      "longitude": 6.945364,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851738,
      "ems": null
    },
    {
      "latitude": 50.830109,
      "longitude": 6.946182,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851744,
      "ems": null
    },
    {
      "latitude": 50.829037,
      "longitude": 6.946564,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644851747,
      "ems": null
    },
    {
      "latitude": 50.826805,
      "longitude": 6.947556,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851753,
      "ems": null
    },
    {
      "latitude": 50.824661,
      "longitude": 6.948624,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851759,
      "ems": null
    },
    {
      "latitude": 50.823544,
      "longitude": 6.949234,
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
      "squawk": "7742",
      "timestamp": 1644851762,
      "ems": null
    },
    {
      "latitude": 50.821358,
      "longitude": 6.950302,
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644851768,
      "ems": null
    },
    {
      "latitude": 50.819031,
      "longitude": 6.951523,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851774,
      "ems": null
    },
    {
      "latitude": 50.816666,
      "longitude": 6.952638,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851780,
      "ems": null
    },
    {
      "latitude": 50.814423,
      "longitude": 6.953678,
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644851786,
      "ems": null
    },
    {
      "latitude": 50.812225,
      "longitude": 6.954939,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644851792,
      "ems": null
    },
    {
      "latitude": 50.811256,
      "longitude": 6.955643,
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1644851795,
      "ems": null
    },
    {
      "latitude": 50.810211,
      "longitude": 6.956499,
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
      "heading": 151,
      "squawk": "7742",
      "timestamp": 1644851798,
      "ems": null
    },
    {
      "latitude": 50.809158,
      "longitude": 6.957463,
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644851801,
      "ems": null
    },
    {
      "latitude": 50.808151,
      "longitude": 6.958428,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644851804,
      "ems": null
    },
    {
      "latitude": 50.807159,
      "longitude": 6.959381,
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644851807,
      "ems": null
    },
    {
      "latitude": 50.806137,
      "longitude": 6.960284,
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644851810,
      "ems": null
    },
    {
      "latitude": 50.805157,
      "longitude": 6.961212,
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644851813,
      "ems": null
    },
    {
      "latitude": 50.80418,
      "longitude": 6.962204,
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
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644851816,
      "ems": null
    },
    {
      "latitude": 50.803154,
      "longitude": 6.963196,
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
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1644851819,
      "ems": null
    },
    {
      "latitude": 50.802223,
      "longitude": 6.964188,
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
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1644851822,
      "ems": null
    },
    {
      "latitude": 50.801239,
      "longitude": 6.965109,
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
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644851825,
      "ems": null
    },
    {
      "latitude": 50.799042,
      "longitude": 6.966891,
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644851831,
      "ems": null
    },
    {
      "latitude": 50.797848,
      "longitude": 6.967545,
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
      "heading": 163,
      "squawk": "7742",
      "timestamp": 1644851834,
      "ems": null
    },
    {
      "latitude": 50.796799,
      "longitude": 6.96793,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851837,
      "ems": null
    },
    {
      "latitude": 50.795662,
      "longitude": 6.968307,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851840,
      "ems": null
    },
    {
      "latitude": 50.794544,
      "longitude": 6.968689,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851843,
      "ems": null
    },
    {
      "latitude": 50.793503,
      "longitude": 6.969044,
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
      "heading": 167,
      "squawk": "7742",
      "timestamp": 1644851846,
      "ems": null
    },
    {
      "latitude": 50.792355,
      "longitude": 6.969452,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851849,
      "ems": null
    },
    {
      "latitude": 50.791397,
      "longitude": 6.969712,
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644851852,
      "ems": null
    },
    {
      "latitude": 50.790207,
      "longitude": 6.969934,
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644851855,
      "ems": null
    },
    {
      "latitude": 50.789063,
      "longitude": 6.970305,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851858,
      "ems": null
    },
    {
      "latitude": 50.786957,
      "longitude": 6.970978,
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
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644851864,
      "ems": null
    },
    {
      "latitude": 50.783791,
      "longitude": 6.972046,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851873,
      "ems": null
    },
    {
      "latitude": 50.782608,
      "longitude": 6.972236,
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
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644851876,
      "ems": null
    },
    {
      "latitude": 50.781509,
      "longitude": 6.972458,
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
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644851879,
      "ems": null
    },
    {
      "latitude": 50.779274,
      "longitude": 6.972733,
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
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644851885,
      "ems": null
    },
    {
      "latitude": 50.778168,
      "longitude": 6.972829,
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
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1644851888,
      "ems": null
    },
    {
      "latitude": 50.777084,
      "longitude": 6.972961,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1644851891,
      "ems": null
    },
    {
      "latitude": 50.775925,
      "longitude": 6.973126,
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851894,
      "ems": null
    },
    {
      "latitude": 50.773689,
      "longitude": 6.973648,
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
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851900,
      "ems": null
    },
    {
      "latitude": 50.771255,
      "longitude": 6.97424,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644851906,
      "ems": null
    },
    {
      "latitude": 50.768799,
      "longitude": 6.974716,
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851912,
      "ems": null
    },
    {
      "latitude": 50.766815,
      "longitude": 6.975057,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851918,
      "ems": null
    },
    {
      "latitude": 50.764618,
      "longitude": 6.975353,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 177,
      "squawk": "7742",
      "timestamp": 1644851924,
      "ems": null
    },
    {
      "latitude": 50.76368,
      "longitude": 6.975403,
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
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1644851927,
      "ems": null
    },
    {
      "latitude": 50.762749,
      "longitude": 6.975403,
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644851930,
      "ems": null
    },
    {
      "latitude": 50.761734,
      "longitude": 6.975353,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644851933,
      "ems": null
    },
    {
      "latitude": 50.760838,
      "longitude": 6.975174,
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644851936,
      "ems": null
    },
    {
      "latitude": 50.759724,
      "longitude": 6.975021,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644851939,
      "ems": null
    },
    {
      "latitude": 50.758713,
      "longitude": 6.974908,
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644851942,
      "ems": null
    },
    {
      "latitude": 50.757706,
      "longitude": 6.97476,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644851945,
      "ems": null
    },
    {
      "latitude": 50.756649,
      "longitude": 6.974564,
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644851948,
      "ems": null
    },
    {
      "latitude": 50.755783,
      "longitude": 6.974388,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644851951,
      "ems": null
    },
    {
      "latitude": 50.754787,
      "longitude": 6.974182,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1644851954,
      "ems": null
    },
    {
      "latitude": 50.753204,
      "longitude": 6.974106,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1644851960,
      "ems": null
    },
    {
      "latitude": 50.751389,
      "longitude": 6.974092,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644851966,
      "ems": null
    },
    {
      "latitude": 50.750519,
      "longitude": 6.974165,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1644851969,
      "ems": null
    },
    {
      "latitude": 50.749619,
      "longitude": 6.974335,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851972,
      "ems": null
    },
    {
      "latitude": 50.748875,
      "longitude": 6.974411,
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851975,
      "ems": null
    },
    {
      "latitude": 50.747944,
      "longitude": 6.97464,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644851978,
      "ems": null
    },
    {
      "latitude": 50.747177,
      "longitude": 6.97476,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644851981,
      "ems": null
    },
    {
      "latitude": 50.746269,
      "longitude": 6.974945,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644851984,
      "ems": null
    },
    {
      "latitude": 50.745525,
      "longitude": 6.975098,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1644851987,
      "ems": null
    },
    {
      "latitude": 50.743652,
      "longitude": 6.974982,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1644851993,
      "ems": null
    },
    {
      "latitude": 50.742779,
      "longitude": 6.974716,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1644851996,
      "ems": null
    },
    {
      "latitude": 50.741913,
      "longitude": 6.974388,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1644851999,
      "ems": null
    },
    {
      "latitude": 50.741135,
      "longitude": 6.974092,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1644852002,
      "ems": null
    },
    {
      "latitude": 50.740498,
      "longitude": 6.973801,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1644852005,
      "ems": null
    },
    {
      "latitude": 50.739613,
      "longitude": 6.973495,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1644852008,
      "ems": null
    },
    {
      "latitude": 50.738632,
      "longitude": 6.97319,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644852012,
      "ems": null
    },
    {
      "latitude": 50.737839,
      "longitude": 6.972978,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1644852014,
      "ems": null
    },
    {
      "latitude": 50.736237,
      "longitude": 6.972904,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644852020,
      "ems": null
    },
    {
      "latitude": 50.735413,
      "longitude": 6.972904,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644852023,
      "ems": null
    },
    {
      "latitude": 50.734497,
      "longitude": 6.972978,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1644852026,
      "ems": null
    },
    {
      "latitude": 50.733654,
      "longitude": 6.973038,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644852029,
      "ems": null
    },
    {
      "latitude": 50.732803,
      "longitude": 6.973126,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644852032,
      "ems": null
    },
    {
      "latitude": 50.731976,
      "longitude": 6.973114,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644852035,
      "ems": null
    },
    {
      "latitude": 50.731018,
      "longitude": 6.973126,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644852038,
      "ems": null
    },
    {
      "latitude": 50.730148,
      "longitude": 6.973126,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644852042,
      "ems": null
    },
    {
      "latitude": 50.729324,
      "longitude": 6.973114,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1644852044,
      "ems": null
    },
    {
      "latitude": 50.728455,
      "longitude": 6.972978,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644852048,
      "ems": null
    },
    {
      "latitude": 50.7276,
      "longitude": 6.972809,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644852051,
      "ems": null
    },
    {
      "latitude": 50.726856,
      "longitude": 6.972656,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644852053,
      "ems": null
    },
    {
      "latitude": 50.725983,
      "longitude": 6.972533,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644852057,
      "ems": null
    },
    {
      "latitude": 50.725067,
      "longitude": 6.97231,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1644852060,
      "ems": null
    },
    {
      "latitude": 50.72438,
      "longitude": 6.972013,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1644852062,
      "ems": null
    },
    {
      "latitude": 50.723553,
      "longitude": 6.971741,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1644852066,
      "ems": null
    },
    {
      "latitude": 50.722668,
      "longitude": 6.971436,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644852069,
      "ems": null
    },
    {
      "latitude": 50.721874,
      "longitude": 6.971207,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644852072,
      "ems": null
    },
    {
      "latitude": 50.721039,
      "longitude": 6.970978,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1644852075,
      "ems": null
    },
    {
      "latitude": 50.719574,
      "longitude": 6.970677,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1644852081,
      "ems": null
    },
    {
      "latitude": 50.71806,
      "longitude": 6.970444,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1644852087,
      "ems": null
    },
    {
      "latitude": 50.717285,
      "longitude": 6.970454,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644852089,
      "ems": null
    },
    {
      "latitude": 50.716461,
      "longitude": 6.970454,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644852092,
      "ems": null
    },
    {
      "latitude": 50.715683,
      "longitude": 6.970367,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1644852096,
      "ems": null
    },
    {
      "latitude": 50.713943,
      "longitude": 6.970083,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1644852101,
      "ems": null
    },
    {
      "latitude": 50.712517,
      "longitude": 6.969528,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1644852107,
      "ems": null
    },
    {
      "latitude": 50.711819,
      "longitude": 6.969223,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644852110,
      "ems": null
    },
    {
      "latitude": 50.710876,
      "longitude": 6.968747,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1644852113,
      "ems": null
    },
    {
      "latitude": 50.710007,
      "longitude": 6.968376,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644852117,
      "ems": null
    },
    {
      "latitude": 50.709213,
      "longitude": 6.968002,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644852119,
      "ems": null
    },
    {
      "latitude": 50.708237,
      "longitude": 6.967545,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644852122,
      "ems": null
    },
    {
      "latitude": 50.707352,
      "longitude": 6.967113,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644852125,
      "ems": null
    },
    {
      "latitude": 50.70639,
      "longitude": 6.966594,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644852129,
      "ems": null
    },
    {
      "latitude": 50.705395,
      "longitude": 6.966019,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644852131,
      "ems": null
    },
    {
      "latitude": 50.704372,
      "longitude": 6.965408,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644852135,
      "ems": null
    },
    {
      "latitude": 50.702415,
      "longitude": 6.964417,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644852140,
      "ems": null
    },
    {
      "latitude": 50.700394,
      "longitude": 6.963253,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644852146,
      "ems": null
    },
    {
      "latitude": 50.69838,
      "longitude": 6.962066,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644852152,
      "ems": null
    },
    {
      "latitude": 50.696274,
      "longitude": 6.960952,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644852159,
      "ems": null
    },
    {
      "latitude": 50.694176,
      "longitude": 6.959915,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644852164,
      "ems": null
    },
    {
      "latitude": 50.691971,
      "longitude": 6.958725,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644852170,
      "ems": null
    },
    {
      "latitude": 50.689774,
      "longitude": 6.957686,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644852176,
      "ems": null
    },
    {
      "latitude": 50.687531,
      "longitude": 6.956499,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644852183,
      "ems": null
    },
    {
      "latitude": 50.685379,
      "longitude": 6.955236,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644852189,
      "ems": null
    },
    {
      "latitude": 50.683468,
      "longitude": 6.954041,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644852195,
      "ems": null
    },
    {
      "latitude": 50.681049,
      "longitude": 6.952591,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644852201,
      "ems": null
    },
    {
      "latitude": 50.679932,
      "longitude": 6.95197,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644852204,
      "ems": null
    },
    {
      "latitude": 50.678925,
      "longitude": 6.951228,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644852207,
      "ems": null
    },
    {
      "latitude": 50.677883,
      "longitude": 6.950531,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644852210,
      "ems": null
    },
    {
      "latitude": 50.676861,
      "longitude": 6.949692,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644852213,
      "ems": null
    },
    {
      "latitude": 50.675858,
      "longitude": 6.949001,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644852216,
      "ems": null
    },
    {
      "latitude": 50.67374,
      "longitude": 6.947556,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644852222,
      "ems": null
    },
    {
      "latitude": 50.671551,
      "longitude": 6.946259,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644852228,
      "ems": null
    },
    {
      "latitude": 50.670483,
      "longitude": 6.945735,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644852231,
      "ems": null
    },
    {
      "latitude": 50.669224,
      "longitude": 6.945215,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1644852234,
      "ems": null
    },
    {
      "latitude": 50.66806,
      "longitude": 6.944844,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1644852237,
      "ems": null
    },
    {
      "latitude": 50.667084,
      "longitude": 6.944695,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "7742",
      "timestamp": 1644852240,
      "ems": null
    },
    {
      "latitude": 50.665733,
      "longitude": 6.94477,
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
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644852243,
      "ems": null
    },
    {
      "latitude": 50.664505,
      "longitude": 6.945166,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644852246,
      "ems": null
    },
    {
      "latitude": 50.663498,
      "longitude": 6.945745,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644852249,
      "ems": null
    },
    {
      "latitude": 50.662613,
      "longitude": 6.947219,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1644852251,
      "ems": null
    },
    {
      "latitude": 50.66272,
      "longitude": 6.950226,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 73,
      "squawk": "7742",
      "timestamp": 1644852255,
      "ems": null
    },
    {
      "latitude": 50.663639,
      "longitude": 6.951896,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1644852258,
      "ems": null
    },
    {
      "latitude": 50.664894,
      "longitude": 6.953455,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1644852261,
      "ems": null
    },
    {
      "latitude": 50.666153,
      "longitude": 6.954939,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1644852264,
      "ems": null
    },
    {
      "latitude": 50.667252,
      "longitude": 6.956297,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1644852267,
      "ems": null
    },
    {
      "latitude": 50.668625,
      "longitude": 6.958104,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1644852270,
      "ems": null
    },
    {
      "latitude": 50.669632,
      "longitude": 6.959766,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 47,
      "squawk": "7742",
      "timestamp": 1644852273,
      "ems": null
    },
    {
      "latitude": 50.670483,
      "longitude": 6.961546,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 59,
      "squawk": "7742",
      "timestamp": 1644852276,
      "ems": null
    },
    {
      "latitude": 50.67067,
      "longitude": 6.964367,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 99,
      "squawk": "7742",
      "timestamp": 1644852279,
      "ems": null
    },
    {
      "latitude": 50.66983,
      "longitude": 6.966,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1644852282,
      "ems": null
    },
    {
      "latitude": 50.668804,
      "longitude": 6.966297,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644852285,
      "ems": null
    },
    {
      "latitude": 50.667892,
      "longitude": 6.965765,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644852288,
      "ems": null
    },
    {
      "latitude": 50.667023,
      "longitude": 6.965115,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644852291,
      "ems": null
    },
    {
      "latitude": 50.665966,
      "longitude": 6.964516,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1644852294,
      "ems": null
    },
    {
      "latitude": 50.665035,
      "longitude": 6.964293,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1644852297,
      "ems": null
    },
    {
      "latitude": 50.663963,
      "longitude": 6.964516,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 164,
      "squawk": "7742",
      "timestamp": 1644852300,
      "ems": null
    },
    {
      "latitude": 50.663406,
      "longitude": 6.964899,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1644852302,
      "ems": null
    },
    {
      "latitude": 50.662308,
      "longitude": 6.967356,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644852305,
      "ems": null
    },
    {
      "latitude": 50.6628,
      "longitude": 6.970083,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644852309,
      "ems": null
    },
    {
      "latitude": 50.663174,
      "longitude": 6.971642,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 68,
      "squawk": "7742",
      "timestamp": 1644852312,
      "ems": null
    },
    {
      "latitude": 50.663872,
      "longitude": 6.974388,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644852315,
      "ems": null
    },
    {
      "latitude": 50.664459,
      "longitude": 6.976969,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 69,
      "squawk": "7742",
      "timestamp": 1644852318,
      "ems": null
    },
    {
      "latitude": 50.664963,
      "longitude": 6.979426,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 70,
      "squawk": "7742",
      "timestamp": 1644852321,
      "ems": null
    },
    {
      "latitude": 50.665329,
      "longitude": 6.981884,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 79,
      "squawk": "7742",
      "timestamp": 1644852324,
      "ems": null
    },
    {
      "latitude": 50.665546,
      "longitude": 6.984484,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "squawk": "7742",
      "timestamp": 1644852327,
      "ems": null
    },
    {
      "latitude": 50.665688,
      "longitude": 6.986859,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 84,
      "squawk": "7742",
      "timestamp": 1644852330,
      "ems": null
    },
    {
      "latitude": 50.665787,
      "longitude": 6.989039,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1644852333,
      "ems": null
    },
    {
      "latitude": 50.665874,
      "longitude": 6.991684,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 87,
      "squawk": "7742",
      "timestamp": 1644852336,
      "ems": null
    },
    {
      "latitude": 50.665878,
      "longitude": 6.993954,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 90,
      "squawk": "7742",
      "timestamp": 1644852339,
      "ems": null
    },
    {
      "latitude": 50.665825,
      "longitude": 6.996287,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 91,
      "squawk": "7742",
      "timestamp": 1644852342,
      "ems": null
    },
    {
      "latitude": 50.665825,
      "longitude": 6.998291,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1644852345,
      "ems": null
    },
    {
      "latitude": 50.665874,
      "longitude": 7.000592,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 89,
      "squawk": "7742",
      "timestamp": 1644852348,
      "ems": null
    },
    {
      "latitude": 50.665878,
      "longitude": 7.002628,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 88,
      "squawk": "7742",
      "timestamp": 1644852351,
      "ems": null
    },
    {
      "latitude": 50.665924,
      "longitude": 7.004941,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 88,
      "squawk": "7742",
      "timestamp": 1644852354,
      "ems": null
    },
    {
      "latitude": 50.665966,
      "longitude": 7.007051,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "7742",
      "timestamp": 1644852357,
      "ems": null
    },
    {
      "latitude": 50.666153,
      "longitude": 7.011653,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 86,
      "squawk": "7742",
      "timestamp": 1644852363,
      "ems": null
    },
    {
      "latitude": 50.666199,
      "longitude": 7.015855,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "7742",
      "timestamp": 1644852369,
      "ems": null
    },
    {
      "latitude": 50.666199,
      "longitude": 7.020047,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "squawk": "7742",
      "timestamp": 1644852375,
      "ems": null
    },
    {
      "latitude": 50.666519,
      "longitude": 7.024095,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 75,
      "squawk": "7742",
      "timestamp": 1644852381,
      "ems": null
    },
    {
      "latitude": 50.66684,
      "longitude": 7.025757,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 71,
      "squawk": "7742",
      "timestamp": 1644852384,
      "ems": null
    },
    {
      "latitude": 50.667252,
      "longitude": 7.027347,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 64,
      "squawk": "7742",
      "timestamp": 1644852386,
      "ems": null
    },
    {
      "latitude": 50.668121,
      "longitude": 7.029588,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 54,
      "squawk": "7742",
      "timestamp": 1644852390,
      "ems": null
    },
    {
      "latitude": 50.668991,
      "longitude": 7.031322,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 48,
      "squawk": "7742",
      "timestamp": 1644852393,
      "ems": null
    },
    {
      "latitude": 50.669861,
      "longitude": 7.03284,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 46,
      "squawk": "7742",
      "timestamp": 1644852396,
      "ems": null
    },
    {
      "latitude": 50.670807,
      "longitude": 7.034368,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 46,
      "squawk": "7742",
      "timestamp": 1644852399,
      "ems": null
    },
    {
      "latitude": 50.671738,
      "longitude": 7.035828,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "7742",
      "timestamp": 1644852402,
      "ems": null
    },
    {
      "latitude": 50.672531,
      "longitude": 7.037048,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 43,
      "squawk": "7742",
      "timestamp": 1644852405,
      "ems": null
    },
    {
      "latitude": 50.673569,
      "longitude": 7.038599,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1644852408,
      "ems": null
    },
    {
      "latitude": 50.674625,
      "longitude": 7.040024,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1644852411,
      "ems": null
    },
    {
      "latitude": 50.675583,
      "longitude": 7.04142,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 41,
      "squawk": "7742",
      "timestamp": 1644852414,
      "ems": null
    },
    {
      "latitude": 50.676628,
      "longitude": 7.04277,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 37,
      "squawk": "7742",
      "timestamp": 1644852417,
      "ems": null
    },
    {
      "latitude": 50.677792,
      "longitude": 7.044144,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1644852420,
      "ems": null
    },
    {
      "latitude": 50.678925,
      "longitude": 7.045503,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 37,
      "squawk": "7742",
      "timestamp": 1644852423,
      "ems": null
    },
    {
      "latitude": 50.680023,
      "longitude": 7.04689,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1644852426,
      "ems": null
    },
    {
      "latitude": 50.681076,
      "longitude": 7.048175,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1644852429,
      "ems": null
    },
    {
      "latitude": 50.682072,
      "longitude": 7.049561,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 40,
      "squawk": "7742",
      "timestamp": 1644852432,
      "ems": null
    },
    {
      "latitude": 50.684307,
      "longitude": 7.05246,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 38,
      "squawk": "7742",
      "timestamp": 1644852438,
      "ems": null
    },
    {
      "latitude": 50.685379,
      "longitude": 7.053742,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1644852441,
      "ems": null
    },
    {
      "latitude": 50.686523,
      "longitude": 7.055004,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1644852444,
      "ems": null
    },
    {
      "latitude": 50.688778,
      "longitude": 7.057419,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 36,
      "squawk": "7742",
      "timestamp": 1644852450,
      "ems": null
    },
    {
      "latitude": 50.691151,
      "longitude": 7.060394,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 39,
      "squawk": "7742",
      "timestamp": 1644852456,
      "ems": null
    },
    {
      "latitude": 50.693115,
      "longitude": 7.063244,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 42,
      "squawk": "7742",
      "timestamp": 1644852462,
      "ems": null
    },
    {
      "latitude": 50.695248,
      "longitude": 7.066116,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1644852468,
      "ems": null
    },
    {
      "latitude": 50.69751,
      "longitude": 7.068886,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1644852474,
      "ems": null
    },
    {
      "latitude": 50.698563,
      "longitude": 7.070222,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1644852477,
      "ems": null
    },
    {
      "latitude": 50.700623,
      "longitude": 7.072746,
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1644852483,
      "ems": null
    },
    {
      "latitude": 50.702557,
      "longitude": 7.075348,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1644852489,
      "ems": null
    },
    {
      "latitude": 50.704651,
      "longitude": 7.077868,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1644852495,
      "ems": null
    },
    {
      "latitude": 50.706665,
      "longitude": 7.080317,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1644852501,
      "ems": null
    },
    {
      "latitude": 50.708633,
      "longitude": 7.082767,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1644852507,
      "ems": null
    },
    {
      "latitude": 50.710796,
      "longitude": 7.085419,
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1644852513,
      "ems": null
    },
    {
      "latitude": 50.712845,
      "longitude": 7.087708,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1644852519,
      "ems": null
    },
    {
      "latitude": 50.714996,
      "longitude": 7.090339,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1644852525,
      "ems": null
    },
    {
      "latitude": 50.715958,
      "longitude": 7.091675,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1644852528,
      "ems": null
    },
    {
      "latitude": 50.716892,
      "longitude": 7.093048,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1644852531,
      "ems": null
    },
    {
      "latitude": 50.718708,
      "longitude": 7.095642,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1644852537,
      "ems": null
    },
    {
      "latitude": 50.71978,
      "longitude": 7.097244,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1644852540,
      "ems": null
    },
    {
      "latitude": 50.720711,
      "longitude": 7.098541,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1644852543,
      "ems": null
    },
    {
      "latitude": 50.721542,
      "longitude": 7.09984,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1644852546,
      "ems": null
    },
    {
      "latitude": 50.722572,
      "longitude": 7.10144,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1644852549,
      "ems": null
    },
    {
      "latitude": 50.723598,
      "longitude": 7.10289,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1644852552,
      "ems": null
    },
    {
      "latitude": 50.725296,
      "longitude": 7.105705,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1644852558,
      "ems": null
    },
    {
      "latitude": 50.727089,
      "longitude": 7.108612,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1644852564,
      "ems": null
    },
    {
      "latitude": 50.729046,
      "longitude": 7.111511,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1644852570,
      "ems": null
    },
    {
      "latitude": 50.730953,
      "longitude": 7.114182,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1644852576,
      "ems": null
    },
    {
      "latitude": 50.732849,
      "longitude": 7.116914,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1644852582,
      "ems": null
    },
    {
      "latitude": 50.734722,
      "longitude": 7.119751,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1644852588,
      "ems": null
    },
    {
      "latitude": 50.736446,
      "longitude": 7.122574,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1644852594,
      "ems": null
    },
    {
      "latitude": 50.738297,
      "longitude": 7.12545,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1644852601,
      "ems": null
    },
    {
      "latitude": 50.740078,
      "longitude": 7.128143,
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1644852606,
      "ems": null
    },
    {
      "latitude": 50.741848,
      "longitude": 7.13089,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1644852612,
      "ems": null
    },
    {
      "latitude": 50.743607,
      "longitude": 7.133764,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1644852618,
      "ems": null
    },
    {
      "latitude": 50.745209,
      "longitude": 7.136511,
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1644852624,
      "ems": null
    },
    {
      "latitude": 50.745941,
      "longitude": 7.137909,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1644852627,
      "ems": null
    },
    {
      "latitude": 50.746639,
      "longitude": 7.139359,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1644852630,
      "ems": null
    },
    {
      "latitude": 50.747223,
      "longitude": 7.141113,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1644852633,
      "ems": null
    },
    {
      "latitude": 50.747524,
      "longitude": 7.142944,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1644852636,
      "ems": null
    },
    {
      "latitude": 50.747635,
      "longitude": 7.144676,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1644852639,
      "ems": null
    },
    {
      "latitude": 50.747711,
      "longitude": 7.146378,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1644852642,
      "ems": null
    },
    {
      "latitude": 50.747772,
      "longitude": 7.148165,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1644852645,
      "ems": null
    },
    {
      "latitude": 50.747852,
      "longitude": 7.149887,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1644852648,
      "ems": null
    },
    {
      "latitude": 50.747852,
      "longitude": 7.151566,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1644852651,
      "ems": null
    },
    {
      "latitude": 50.747864,
      "longitude": 7.153213,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1644852654,
      "ems": null
    },
    {
      "latitude": 50.747772,
      "longitude": 7.154994,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1644852657,
      "ems": null
    },
    {
      "latitude": 50.747665,
      "longitude": 7.156677,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1644852660,
      "ems": null
    },
    {
      "latitude": 50.747574,
      "longitude": 7.158279,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1644852663,
      "ems": null
    },
    {
      "latitude": 50.747406,
      "longitude": 7.15982,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1644852666,
      "ems": null
    },
    {
      "latitude": 50.7472,
      "longitude": 7.161331,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1644852669,
      "ems": null
    },
    {
      "latitude": 50.747013,
      "longitude": 7.162857,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1644852672,
      "ems": null
    },
    {
      "latitude": 50.746735,
      "longitude": 7.164383,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1644852675,
      "ems": null
    },
    {
      "latitude": 50.74649,
      "longitude": 7.166055,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1644852679,
      "ems": null
    },
    {
      "latitude": 50.746361,
      "longitude": 7.167664,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1644852682,
      "ems": null
    },
    {
      "latitude": 50.746407,
      "longitude": 7.169418,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1644852685,
      "ems": null
    },
    {
      "latitude": 50.746719,
      "longitude": 7.171326,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1644852688,
      "ems": null
    },
    {
      "latitude": 50.747059,
      "longitude": 7.173004,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1644852691,
      "ems": null
    },
    {
      "latitude": 50.747341,
      "longitude": 7.174606,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1644852694,
      "ems": null
    },
    {
      "latitude": 50.747635,
      "longitude": 7.176522,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1644852697,
      "ems": null
    },
    {
      "latitude": 50.747898,
      "longitude": 7.178116,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1644852700,
      "ems": null
    },
    {
      "latitude": 50.748138,
      "longitude": 7.180011,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1644852703,
      "ems": null
    },
    {
      "latitude": 50.748318,
      "longitude": 7.181702,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1644852706,
      "ems": null
    },
    {
      "latitude": 50.748459,
      "longitude": 7.1835,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1644852709,
      "ems": null
    },
    {
      "latitude": 50.74855,
      "longitude": 7.184906,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1644852712,
      "ems": null
    },
    {
      "latitude": 50.749062,
      "longitude": 7.188568,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1644852718,
      "ems": null
    },
    {
      "latitude": 50.749481,
      "longitude": 7.190018,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1644852720,
      "ems": null
    },
    {
      "latitude": 50.749924,
      "longitude": 7.191368,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1644852723,
      "ems": null
    },
    {
      "latitude": 50.750519,
      "longitude": 7.193224,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1644852727,
      "ems": null
    },
    {
      "latitude": 50.750977,
      "longitude": 7.194486,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1644852729,
      "ems": null
    },
    {
      "latitude": 50.751572,
      "longitude": 7.195822,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1644852732,
      "ems": null
    },
    {
      "latitude": 50.752415,
      "longitude": 7.197418,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1644852735,
      "ems": null
    },
    {
      "latitude": 50.753265,
      "longitude": 7.198421,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1644852738,
      "ems": null
    },
    {
      "latitude": 50.754227,
      "longitude": 7.199089,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1644852742,
      "ems": null
    },
    {
      "latitude": 50.755161,
      "longitude": 7.199478,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1644852745,
      "ems": null
    },
    {
      "latitude": 50.756512,
      "longitude": 7.199783,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1644852748,
      "ems": null
    },
    {
      "latitude": 50.757488,
      "longitude": 7.199707,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1644852750,
      "ems": null
    },
    {
      "latitude": 50.758667,
      "longitude": 7.199311,
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1644852754,
      "ems": null
    },
    {
      "latitude": 50.759537,
      "longitude": 7.198866,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1644852757,
      "ems": null
    },
    {
      "latitude": 50.760372,
      "longitude": 7.198257,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1644852760,
      "ems": null
    },
    {
      "latitude": 50.761074,
      "longitude": 7.197418,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1644852763,
      "ems": null
    },
    {
      "latitude": 50.761642,
      "longitude": 7.196416,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1644852766,
      "ems": null
    },
    {
      "latitude": 50.762005,
      "longitude": 7.195282,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1644852769,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.194189,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644852772,
      "ems": null
    },
    {
      "latitude": 50.762516,
      "longitude": 7.193069,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644852775,
      "ems": null
    },
    {
      "latitude": 50.762695,
      "longitude": 7.192037,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1644852778,
      "ems": null
    },
    {
      "latitude": 50.76297,
      "longitude": 7.190774,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644852781,
      "ems": null
    },
    {
      "latitude": 50.763199,
      "longitude": 7.189661,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644852784,
      "ems": null
    },
    {
      "latitude": 50.763474,
      "longitude": 7.188548,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644852786,
      "ems": null
    },
    {
      "latitude": 50.763771,
      "longitude": 7.187271,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644852790,
      "ems": null
    },
    {
      "latitude": 50.76416,
      "longitude": 7.185578,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1644852794,
      "ems": null
    },
    {
      "latitude": 50.764389,
      "longitude": 7.184465,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644852798,
      "ems": null
    },
    {
      "latitude": 50.765076,
      "longitude": 7.181199,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1644852806,
      "ems": null
    },
    {
      "latitude": 50.765717,
      "longitude": 7.178304,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1644852814,
      "ems": null
    },
    {
      "latitude": 50.76638,
      "longitude": 7.174988,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644852823,
      "ems": null
    },
    {
      "latitude": 50.767033,
      "longitude": 7.17186,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644852831,
      "ems": null
    },
    {
      "latitude": 50.767868,
      "longitude": 7.168059,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644852840,
      "ems": null
    },
    {
      "latitude": 50.768661,
      "longitude": 7.164383,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644852852,
      "ems": null
    },
    {
      "latitude": 50.769516,
      "longitude": 7.160414,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644852862,
      "ems": null
    },
    {
      "latitude": 50.770336,
      "longitude": 7.156754,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644852871,
      "ems": null
    },
    {
      "latitude": 50.771393,
      "longitude": 7.152842,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1644852880,
      "ems": null
    },
    {
      "latitude": 50.772011,
      "longitude": 7.15065,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1644852886,
      "ems": null
    },
    {
      "latitude": 50.772476,
      "longitude": 7.148819,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1644852890,
      "ems": null
    },
    {
      "latitude": 50.772995,
      "longitude": 7.146013,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1644852898,
      "ems": null
    },
    {
      "latitude": 50.77285,
      "longitude": 7.144547,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1644852902,
      "ems": null
    },
    {
      "latitude": 50.771824,
      "longitude": 7.142487,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1644852907,
      "ems": null
    },
    {
      "latitude": 50.771027,
      "longitude": 7.14141,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1644852910,
      "ems": null
    },
    {
      "latitude": 50.770248,
      "longitude": 7.14052,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1644852913,
      "ems": null
    },
    {
      "latitude": 50.769241,
      "longitude": 7.13948,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1644852916,
      "ems": null
    },
    {
      "latitude": 50.768326,
      "longitude": 7.138738,
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
        "fpm": 1600,
        "ms": 8.1
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1644852919,
      "ems": null
    },
    {
      "latitude": 50.767498,
      "longitude": 7.138138,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1644852922,
      "ems": null
    },
    {
      "latitude": 50.766705,
      "longitude": 7.13768,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1644852925,
      "ems": null
    },
    {
      "latitude": 50.765717,
      "longitude": 7.137328,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1644852928,
      "ems": null
    },
    {
      "latitude": 50.764755,
      "longitude": 7.137031,
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1644852931,
      "ems": null
    },
    {
      "latitude": 50.763702,
      "longitude": 7.136808,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1644852934,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.136765,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1644852937,
      "ems": null
    },
    {
      "latitude": 50.761307,
      "longitude": 7.136841,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1644852940,
      "ems": null
    },
    {
      "latitude": 50.760189,
      "longitude": 7.136993,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1644852943,
      "ems": null
    },
    {
      "latitude": 50.759033,
      "longitude": 7.137253,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1644852946,
      "ems": null
    },
    {
      "latitude": 50.757813,
      "longitude": 7.137604,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1644852949,
      "ems": null
    },
    {
      "latitude": 50.756649,
      "longitude": 7.138138,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1644852952,
      "ems": null
    },
    {
      "latitude": 50.755581,
      "longitude": 7.138901,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1644852955,
      "ems": null
    },
    {
      "latitude": 50.754593,
      "longitude": 7.140074,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1644852958,
      "ems": null
    },
    {
      "latitude": 50.753811,
      "longitude": 7.142105,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1644852961,
      "ems": null
    },
    {
      "latitude": 50.753483,
      "longitude": 7.143784,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1644852964,
      "ems": null
    },
    {
      "latitude": 50.753174,
      "longitude": 7.14579,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1644852967,
      "ems": null
    },
    {
      "latitude": 50.752926,
      "longitude": 7.147522,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1644852970,
      "ems": null
    },
    {
      "latitude": 50.752579,
      "longitude": 7.149205,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1644852973,
      "ems": null
    },
    {
      "latitude": 50.752228,
      "longitude": 7.150574,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1644852976,
      "ems": null
    },
    {
      "latitude": 50.751808,
      "longitude": 7.1521,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1644852979,
      "ems": null
    },
    {
      "latitude": 50.75148,
      "longitude": 7.15351,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1644852982,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 7.154994,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1644852985,
      "ems": null
    },
    {
      "latitude": 50.750748,
      "longitude": 7.156331,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1644852988,
      "ems": null
    },
    {
      "latitude": 50.750427,
      "longitude": 7.157667,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1644852991,
      "ems": null
    },
    {
      "latitude": 50.750107,
      "longitude": 7.159078,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1644852994,
      "ems": null
    },
    {
      "latitude": 50.749805,
      "longitude": 7.160568,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1644852997,
      "ems": null
    },
    {
      "latitude": 50.749283,
      "longitude": 7.163457,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1644853003,
      "ems": null
    },
    {
      "latitude": 50.749008,
      "longitude": 7.164942,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1644853006,
      "ems": null
    },
    {
      "latitude": 50.748737,
      "longitude": 7.166367,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1644853009,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.168059,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1644853012,
      "ems": null
    },
    {
      "latitude": 50.748409,
      "longitude": 7.169724,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1644853015,
      "ems": null
    },
    {
      "latitude": 50.748459,
      "longitude": 7.171177,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1644853018,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 7.173033,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1644853021,
      "ems": null
    },
    {
      "latitude": 50.748829,
      "longitude": 7.174454,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1644853024,
      "ems": null
    },
    {
      "latitude": 50.749062,
      "longitude": 7.176208,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1644853027,
      "ems": null
    },
    {
      "latitude": 50.749329,
      "longitude": 7.17771,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1644853030,
      "ems": null
    },
    {
      "latitude": 50.749619,
      "longitude": 7.179337,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1644853033,
      "ems": null
    },
    {
      "latitude": 50.749947,
      "longitude": 7.180939,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1644853036,
      "ems": null
    },
    {
      "latitude": 50.750225,
      "longitude": 7.182465,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1644853039,
      "ems": null
    },
    {
      "latitude": 50.750553,
      "longitude": 7.184219,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1644853042,
      "ems": null
    },
    {
      "latitude": 50.750839,
      "longitude": 7.185875,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1644853045,
      "ems": null
    },
    {
      "latitude": 50.75116,
      "longitude": 7.187582,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1644853048,
      "ems": null
    },
    {
      "latitude": 50.751434,
      "longitude": 7.189216,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1644853051,
      "ems": null
    },
    {
      "latitude": 50.751801,
      "longitude": 7.190997,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1644853054,
      "ems": null
    },
    {
      "latitude": 50.752213,
      "longitude": 7.192482,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1644853057,
      "ems": null
    },
    {
      "latitude": 50.752762,
      "longitude": 7.194041,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1644853060,
      "ems": null
    },
    {
      "latitude": 50.75354,
      "longitude": 7.195674,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1644853063,
      "ems": null
    },
    {
      "latitude": 50.754368,
      "longitude": 7.196655,
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1644853066,
      "ems": null
    },
    {
      "latitude": 50.75502,
      "longitude": 7.197113,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1644853069,
      "ems": null
    },
    {
      "latitude": 50.756416,
      "longitude": 7.197647,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1644853072,
      "ems": null
    },
    {
      "latitude": 50.757111,
      "longitude": 7.197752,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1644853074,
      "ems": null
    },
    {
      "latitude": 50.758118,
      "longitude": 7.197604,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1644853077,
      "ems": null
    },
    {
      "latitude": 50.758743,
      "longitude": 7.197418,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1644853079,
      "ems": null
    },
    {
      "latitude": 50.760235,
      "longitude": 7.196579,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1644853084,
      "ems": null
    },
    {
      "latitude": 50.761211,
      "longitude": 7.195435,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1644853088,
      "ems": null
    },
    {
      "latitude": 50.761864,
      "longitude": 7.194214,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1644853091,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 7.19315,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1644853094,
      "ems": null
    },
    {
      "latitude": 50.76265,
      "longitude": 7.191962,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1644853097,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 7.1907,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1644853100,
      "ems": null
    },
    {
      "latitude": 50.76329,
      "longitude": 7.189587,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644853103,
      "ems": null
    },
    {
      "latitude": 50.763584,
      "longitude": 7.188339,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644853106,
      "ems": null
    },
    {
      "latitude": 50.763866,
      "longitude": 7.187042,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1644853109,
      "ems": null
    },
    {
      "latitude": 50.764114,
      "longitude": 7.185875,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644853112,
      "ems": null
    },
    {
      "latitude": 50.764378,
      "longitude": 7.184753,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644853115,
      "ems": null
    },
    {
      "latitude": 50.764755,
      "longitude": 7.182832,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644853119,
      "ems": null
    },
    {
      "latitude": 50.765076,
      "longitude": 7.181347,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644853123,
      "ems": null
    },
    {
      "latitude": 50.7654,
      "longitude": 7.179871,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1644853127,
      "ems": null
    },
    {
      "latitude": 50.766098,
      "longitude": 7.176361,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1644853136,
      "ems": null
    },
    {
      "latitude": 50.766769,
      "longitude": 7.173107,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1644853145,
      "ems": null
    },
    {
      "latitude": 50.76741,
      "longitude": 7.170212,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1644853154,
      "ems": null
    },
    {
      "latitude": 50.768147,
      "longitude": 7.166595,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644853162,
      "ems": null
    },
    {
      "latitude": 50.768372,
      "longitude": 7.16561,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644853166,
      "ems": null
    },
    {
      "latitude": 50.768894,
      "longitude": 7.163239,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 48.2,
        "kts": 26,
        "mph": 29.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1644853177,
      "ems": null
    }
  ],
};
