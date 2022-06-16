import { Flight } from "../../../types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220615EDKBEDKB",
    callsign: "DEFCZ",
    name: "Trip into belgium with Adriana",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 5, 15, 16, 45).getTime(),
    arrival: new Date(2022, 5, 15, 17, 50).getTime(),
    singleEnginePistonTime: 65,
    picTime: 65,
    dualTime: 0,
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
      "latitude": 50.770706,
      "longitude": 7.155217,
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
        "fpm": 1920,
        "ms": 9.8
      },
      "heading": 292,
      "squawk": "0",
      "timestamp": 1655312156,
      "ems": null
    },
    {
      "latitude": 50.771393,
      "longitude": 7.152545,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 292,
      "squawk": "0",
      "timestamp": 1655312164,
      "ems": null
    },
    {
      "latitude": 50.771778,
      "longitude": 7.151184,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 297,
      "squawk": "0",
      "timestamp": 1655312168,
      "ems": null
    },
    {
      "latitude": 50.772354,
      "longitude": 7.149576,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 299,
      "squawk": "0",
      "timestamp": 1655312172,
      "ems": null
    },
    {
      "latitude": 50.772709,
      "longitude": 7.148743,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 302,
      "squawk": "0",
      "timestamp": 1655312175,
      "ems": null
    },
    {
      "latitude": 50.773041,
      "longitude": 7.147868,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 302,
      "squawk": "0",
      "timestamp": 1655312178,
      "ems": null
    },
    {
      "latitude": 50.773544,
      "longitude": 7.146606,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 302,
      "squawk": "0",
      "timestamp": 1655312181,
      "ems": null
    },
    {
      "latitude": 50.773922,
      "longitude": 7.145538,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 299,
      "squawk": "0",
      "timestamp": 1655312184,
      "ems": null
    },
    {
      "latitude": 50.774231,
      "longitude": 7.144825,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 300,
      "squawk": "0",
      "timestamp": 1655312187,
      "ems": null
    },
    {
      "latitude": 50.774479,
      "longitude": 7.144089,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 300,
      "squawk": "0",
      "timestamp": 1655312189,
      "ems": null
    },
    {
      "latitude": 50.774872,
      "longitude": 7.142301,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1655312193,
      "ems": null
    },
    {
      "latitude": 50.774872,
      "longitude": 7.140371,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1655312197,
      "ems": null
    },
    {
      "latitude": 50.774479,
      "longitude": 7.137985,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1655312201,
      "ems": null
    },
    {
      "latitude": 50.774059,
      "longitude": 7.136688,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1655312205,
      "ems": null
    },
    {
      "latitude": 50.772991,
      "longitude": 7.134094,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1655312209,
      "ems": null
    },
    {
      "latitude": 50.772125,
      "longitude": 7.132131,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1655312213,
      "ems": null
    },
    {
      "latitude": 50.771393,
      "longitude": 7.130275,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1655312217,
      "ems": null
    },
    {
      "latitude": 50.770889,
      "longitude": 7.128939,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1655312221,
      "ems": null
    },
    {
      "latitude": 50.770157,
      "longitude": 7.126861,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1655312225,
      "ems": null
    },
    {
      "latitude": 50.769684,
      "longitude": 7.125244,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1655312229,
      "ems": null
    },
    {
      "latitude": 50.768429,
      "longitude": 7.120895,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1655312238,
      "ems": null
    },
    {
      "latitude": 50.767868,
      "longitude": 7.118992,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1655312242,
      "ems": null
    },
    {
      "latitude": 50.767502,
      "longitude": 7.117805,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1655312244,
      "ems": null
    },
    {
      "latitude": 50.766659,
      "longitude": 7.115097,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1655312250,
      "ems": null
    },
    {
      "latitude": 50.765762,
      "longitude": 7.112534,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1655312256,
      "ems": null
    },
    {
      "latitude": 50.765263,
      "longitude": 7.11113,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1655312259,
      "ems": null
    },
    {
      "latitude": 50.764755,
      "longitude": 7.109787,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1655312262,
      "ems": null
    },
    {
      "latitude": 50.764252,
      "longitude": 7.108451,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1655312266,
      "ems": null
    },
    {
      "latitude": 50.763794,
      "longitude": 7.107338,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1655312268,
      "ems": null
    },
    {
      "latitude": 50.763153,
      "longitude": 7.105927,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1655312272,
      "ems": null
    },
    {
      "latitude": 50.762608,
      "longitude": 7.104721,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1655312274,
      "ems": null
    },
    {
      "latitude": 50.762051,
      "longitude": 7.103424,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1655312277,
      "ems": null
    },
    {
      "latitude": 50.76149,
      "longitude": 7.10228,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1655312280,
      "ems": null
    },
    {
      "latitude": 50.760887,
      "longitude": 7.100983,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1655312283,
      "ems": null
    },
    {
      "latitude": 50.760281,
      "longitude": 7.099686,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1655312286,
      "ems": null
    },
    {
      "latitude": 50.759163,
      "longitude": 7.097244,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1655312293,
      "ems": null
    },
    {
      "latitude": 50.758621,
      "longitude": 7.09598,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1655312296,
      "ems": null
    },
    {
      "latitude": 50.757393,
      "longitude": 7.093353,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1655312302,
      "ems": null
    },
    {
      "latitude": 50.756184,
      "longitude": 7.090759,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1655312307,
      "ems": null
    },
    {
      "latitude": 50.755005,
      "longitude": 7.087889,
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
      "timestamp": 1655312313,
      "ems": null
    },
    {
      "latitude": 50.75441,
      "longitude": 7.086256,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1655312316,
      "ems": null
    },
    {
      "latitude": 50.753811,
      "longitude": 7.084656,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1655312319,
      "ems": null
    },
    {
      "latitude": 50.753391,
      "longitude": 7.083282,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1655312322,
      "ems": null
    },
    {
      "latitude": 50.752899,
      "longitude": 7.081654,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1655312325,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.079872,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1655312329,
      "ems": null
    },
    {
      "latitude": 50.751984,
      "longitude": 7.077422,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1655312333,
      "ems": null
    },
    {
      "latitude": 50.75153,
      "longitude": 7.075272,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1655312337,
      "ems": null
    },
    {
      "latitude": 50.750931,
      "longitude": 7.073042,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1655312341,
      "ems": null
    },
    {
      "latitude": 50.749527,
      "longitude": 7.069397,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1655312349,
      "ems": null
    },
    {
      "latitude": 50.748093,
      "longitude": 7.067253,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1655312353,
      "ems": null
    },
    {
      "latitude": 50.747154,
      "longitude": 7.066193,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1655312356,
      "ems": null
    },
    {
      "latitude": 50.746174,
      "longitude": 7.065506,
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1655312359,
      "ems": null
    },
    {
      "latitude": 50.744247,
      "longitude": 7.064654,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1655312363,
      "ems": null
    },
    {
      "latitude": 50.742916,
      "longitude": 7.064362,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1655312367,
      "ems": null
    },
    {
      "latitude": 50.741196,
      "longitude": 7.064362,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1655312371,
      "ems": null
    },
    {
      "latitude": 50.739937,
      "longitude": 7.064514,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1655312374,
      "ems": null
    },
    {
      "latitude": 50.738663,
      "longitude": 7.064877,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1655312377,
      "ems": null
    },
    {
      "latitude": 50.737656,
      "longitude": 7.065322,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1655312380,
      "ems": null
    },
    {
      "latitude": 50.73642,
      "longitude": 7.066065,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1655312383,
      "ems": null
    },
    {
      "latitude": 50.735329,
      "longitude": 7.066956,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1655312386,
      "ems": null
    },
    {
      "latitude": 50.734543,
      "longitude": 7.067995,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655312389,
      "ems": null
    },
    {
      "latitude": 50.733536,
      "longitude": 7.069777,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1655312392,
      "ems": null
    },
    {
      "latitude": 50.732849,
      "longitude": 7.071484,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1655312395,
      "ems": null
    },
    {
      "latitude": 50.732391,
      "longitude": 7.073042,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1655312398,
      "ems": null
    },
    {
      "latitude": 50.731979,
      "longitude": 7.074824,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1655312401,
      "ems": null
    },
    {
      "latitude": 50.731659,
      "longitude": 7.07668,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1655312404,
      "ems": null
    },
    {
      "latitude": 50.731464,
      "longitude": 7.078552,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1655312407,
      "ems": null
    },
    {
      "latitude": 50.731384,
      "longitude": 7.080614,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1655312410,
      "ems": null
    },
    {
      "latitude": 50.731373,
      "longitude": 7.082291,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1655312413,
      "ems": null
    },
    {
      "latitude": 50.73151,
      "longitude": 7.084122,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1655312416,
      "ems": null
    },
    {
      "latitude": 50.73175,
      "longitude": 7.085885,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1655312419,
      "ems": null
    },
    {
      "latitude": 50.732117,
      "longitude": 7.087479,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1655312422,
      "ems": null
    },
    {
      "latitude": 50.732666,
      "longitude": 7.089077,
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1655312424,
      "ems": null
    },
    {
      "latitude": 50.733398,
      "longitude": 7.090413,
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1655312427,
      "ems": null
    },
    {
      "latitude": 50.734257,
      "longitude": 7.091599,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1655312430,
      "ems": null
    },
    {
      "latitude": 50.735229,
      "longitude": 7.092343,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1655312434,
      "ems": null
    },
    {
      "latitude": 50.736214,
      "longitude": 7.092743,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1655312437,
      "ems": null
    },
    {
      "latitude": 50.737518,
      "longitude": 7.092788,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1655312441,
      "ems": null
    },
    {
      "latitude": 50.738449,
      "longitude": 7.092514,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 347,
      "squawk": "7042",
      "timestamp": 1655312445,
      "ems": null
    },
    {
      "latitude": 50.740078,
      "longitude": 7.091827,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655312449,
      "ems": null
    },
    {
      "latitude": 50.740631,
      "longitude": 7.0916,
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
      "heading": 344,
      "squawk": "7042",
      "timestamp": 1655312453,
      "ems": null
    },
    {
      "latitude": 50.742783,
      "longitude": 7.090636,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655312457,
      "ems": null
    },
    {
      "latitude": 50.743973,
      "longitude": 7.089893,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312461,
      "ems": null
    },
    {
      "latitude": 50.745243,
      "longitude": 7.089005,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312465,
      "ems": null
    },
    {
      "latitude": 50.746445,
      "longitude": 7.088112,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312469,
      "ems": null
    },
    {
      "latitude": 50.747635,
      "longitude": 7.087369,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312473,
      "ems": null
    },
    {
      "latitude": 50.749992,
      "longitude": 7.085953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7042",
      "timestamp": 1655312481,
      "ems": null
    },
    {
      "latitude": 50.752365,
      "longitude": 7.084732,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1655312489,
      "ems": null
    },
    {
      "latitude": 50.753948,
      "longitude": 7.084045,
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
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655312493,
      "ems": null
    },
    {
      "latitude": 50.755142,
      "longitude": 7.083435,
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
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655312497,
      "ems": null
    },
    {
      "latitude": 50.756424,
      "longitude": 7.082841,
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
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655312501,
      "ems": null
    },
    {
      "latitude": 50.758419,
      "longitude": 7.081909,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655312507,
      "ems": null
    },
    {
      "latitude": 50.761002,
      "longitude": 7.080763,
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
      "heading": 344,
      "squawk": "7042",
      "timestamp": 1655312514,
      "ems": null
    },
    {
      "latitude": 50.763634,
      "longitude": 7.079544,
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
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1655312522,
      "ems": null
    },
    {
      "latitude": 50.766006,
      "longitude": 7.078171,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1655312530,
      "ems": null
    },
    {
      "latitude": 50.768417,
      "longitude": 7.076754,
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
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1655312538,
      "ems": null
    },
    {
      "latitude": 50.771118,
      "longitude": 7.07527,
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1655312545,
      "ems": null
    },
    {
      "latitude": 50.772106,
      "longitude": 7.074661,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312548,
      "ems": null
    },
    {
      "latitude": 50.774059,
      "longitude": 7.073288,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312554,
      "ems": null
    },
    {
      "latitude": 50.775055,
      "longitude": 7.072523,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312557,
      "ems": null
    },
    {
      "latitude": 50.776062,
      "longitude": 7.071706,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312560,
      "ems": null
    },
    {
      "latitude": 50.77718,
      "longitude": 7.070847,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312563,
      "ems": null
    },
    {
      "latitude": 50.778065,
      "longitude": 7.07016,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312566,
      "ems": null
    },
    {
      "latitude": 50.779087,
      "longitude": 7.069397,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312569,
      "ems": null
    },
    {
      "latitude": 50.780136,
      "longitude": 7.068589,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312572,
      "ems": null
    },
    {
      "latitude": 50.782253,
      "longitude": 7.066879,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312578,
      "ems": null
    },
    {
      "latitude": 50.784393,
      "longitude": 7.065277,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312584,
      "ems": null
    },
    {
      "latitude": 50.78635,
      "longitude": 7.063675,
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
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1655312590,
      "ems": null
    },
    {
      "latitude": 50.78849,
      "longitude": 7.061996,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312596,
      "ems": null
    },
    {
      "latitude": 50.790619,
      "longitude": 7.060423,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312602,
      "ems": null
    },
    {
      "latitude": 50.792862,
      "longitude": 7.058716,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312608,
      "ems": null
    },
    {
      "latitude": 50.795929,
      "longitude": 7.056266,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312617,
      "ems": null
    },
    {
      "latitude": 50.799179,
      "longitude": 7.053742,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312626,
      "ems": null
    },
    {
      "latitude": 50.801105,
      "longitude": 7.052155,
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
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1655312632,
      "ems": null
    },
    {
      "latitude": 50.804489,
      "longitude": 7.049363,
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
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1655312642,
      "ems": null
    },
    {
      "latitude": 50.806599,
      "longitude": 7.047501,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312648,
      "ems": null
    },
    {
      "latitude": 50.808788,
      "longitude": 7.045975,
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1655312654,
      "ems": null
    },
    {
      "latitude": 50.80986,
      "longitude": 7.045288,
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1655312657,
      "ems": null
    },
    {
      "latitude": 50.810978,
      "longitude": 7.044601,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312660,
      "ems": null
    },
    {
      "latitude": 50.812088,
      "longitude": 7.043869,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312663,
      "ems": null
    },
    {
      "latitude": 50.814236,
      "longitude": 7.042465,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312669,
      "ems": null
    },
    {
      "latitude": 50.815166,
      "longitude": 7.041855,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312672,
      "ems": null
    },
    {
      "latitude": 50.816391,
      "longitude": 7.041049,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312675,
      "ems": null
    },
    {
      "latitude": 50.818314,
      "longitude": 7.039861,
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1655312681,
      "ems": null
    },
    {
      "latitude": 50.82066,
      "longitude": 7.038345,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312687,
      "ems": null
    },
    {
      "latitude": 50.822708,
      "longitude": 7.03704,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312693,
      "ems": null
    },
    {
      "latitude": 50.825779,
      "longitude": 7.034988,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312702,
      "ems": null
    },
    {
      "latitude": 50.827782,
      "longitude": 7.033615,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312708,
      "ems": null
    },
    {
      "latitude": 50.829922,
      "longitude": 7.032089,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312714,
      "ems": null
    },
    {
      "latitude": 50.831879,
      "longitude": 7.030792,
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1655312720,
      "ems": null
    },
    {
      "latitude": 50.834427,
      "longitude": 7.029097,
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1655312728,
      "ems": null
    },
    {
      "latitude": 50.836899,
      "longitude": 7.027093,
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
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1655312736,
      "ems": null
    },
    {
      "latitude": 50.839325,
      "longitude": 7.025146,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312744,
      "ems": null
    },
    {
      "latitude": 50.842026,
      "longitude": 7.023239,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655312752,
      "ems": null
    },
    {
      "latitude": 50.842819,
      "longitude": 7.022781,
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
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1655312755,
      "ems": null
    },
    {
      "latitude": 50.843857,
      "longitude": 7.02212,
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
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1655312758,
      "ems": null
    },
    {
      "latitude": 50.844681,
      "longitude": 7.021637,
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
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1655312761,
      "ems": null
    },
    {
      "latitude": 50.845612,
      "longitude": 7.021103,
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1655312764,
      "ems": null
    },
    {
      "latitude": 50.846542,
      "longitude": 7.020493,
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
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1655312767,
      "ems": null
    },
    {
      "latitude": 50.847382,
      "longitude": 7.020035,
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
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1655312770,
      "ems": null
    },
    {
      "latitude": 50.848572,
      "longitude": 7.019447,
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
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1655312773,
      "ems": null
    },
    {
      "latitude": 50.850403,
      "longitude": 7.01826,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312779,
      "ems": null
    },
    {
      "latitude": 50.852314,
      "longitude": 7.016983,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312785,
      "ems": null
    },
    {
      "latitude": 50.854065,
      "longitude": 7.01581,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312791,
      "ems": null
    },
    {
      "latitude": 50.856033,
      "longitude": 7.0144,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312797,
      "ems": null
    },
    {
      "latitude": 50.857018,
      "longitude": 7.013702,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312800,
      "ems": null
    },
    {
      "latitude": 50.85804,
      "longitude": 7.012939,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312803,
      "ems": null
    },
    {
      "latitude": 50.859833,
      "longitude": 7.011579,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312809,
      "ems": null
    },
    {
      "latitude": 50.86153,
      "longitude": 7.010345,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312815,
      "ems": null
    },
    {
      "latitude": 50.863533,
      "longitude": 7.009048,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655312821,
      "ems": null
    },
    {
      "latitude": 50.865349,
      "longitude": 7.007751,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312827,
      "ems": null
    },
    {
      "latitude": 50.867249,
      "longitude": 7.006308,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312833,
      "ems": null
    },
    {
      "latitude": 50.869034,
      "longitude": 7.004823,
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
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1655312839,
      "ems": null
    },
    {
      "latitude": 50.871094,
      "longitude": 7.003191,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312846,
      "ems": null
    },
    {
      "latitude": 50.872982,
      "longitude": 7.001724,
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
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1655312852,
      "ems": null
    },
    {
      "latitude": 50.873917,
      "longitude": 7.000885,
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1655312855,
      "ems": null
    },
    {
      "latitude": 50.874847,
      "longitude": 6.999969,
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1655312858,
      "ems": null
    },
    {
      "latitude": 50.876846,
      "longitude": 6.998215,
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
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1655312864,
      "ems": null
    },
    {
      "latitude": 50.878784,
      "longitude": 6.996583,
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
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1655312870,
      "ems": null
    },
    {
      "latitude": 50.880806,
      "longitude": 6.994934,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312876,
      "ems": null
    },
    {
      "latitude": 50.882996,
      "longitude": 6.993318,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312882,
      "ems": null
    },
    {
      "latitude": 50.884762,
      "longitude": 6.991959,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655312888,
      "ems": null
    },
    {
      "latitude": 50.885971,
      "longitude": 6.991043,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312891,
      "ems": null
    },
    {
      "latitude": 50.886948,
      "longitude": 6.990356,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312894,
      "ems": null
    },
    {
      "latitude": 50.88802,
      "longitude": 6.989517,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312897,
      "ems": null
    },
    {
      "latitude": 50.889977,
      "longitude": 6.988068,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655312903,
      "ems": null
    },
    {
      "latitude": 50.892059,
      "longitude": 6.986488,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312909,
      "ems": null
    },
    {
      "latitude": 50.893982,
      "longitude": 6.985078,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312915,
      "ems": null
    },
    {
      "latitude": 50.896088,
      "longitude": 6.98337,
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
      "heading": 332,
      "squawk": "7042",
      "timestamp": 1655312921,
      "ems": null
    },
    {
      "latitude": 50.898262,
      "longitude": 6.981888,
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
      "heading": 338,
      "squawk": "7042",
      "timestamp": 1655312929,
      "ems": null
    },
    {
      "latitude": 50.901306,
      "longitude": 6.979881,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655312937,
      "ems": null
    },
    {
      "latitude": 50.903961,
      "longitude": 6.977506,
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
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1655312945,
      "ems": null
    },
    {
      "latitude": 50.905197,
      "longitude": 6.975937,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 319,
      "squawk": "7042",
      "timestamp": 1655312949,
      "ems": null
    },
    {
      "latitude": 50.906174,
      "longitude": 6.97464,
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
      "heading": 319,
      "squawk": "7042",
      "timestamp": 1655312953,
      "ems": null
    },
    {
      "latitude": 50.907341,
      "longitude": 6.972885,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 313,
      "squawk": "7042",
      "timestamp": 1655312957,
      "ems": null
    },
    {
      "latitude": 50.908363,
      "longitude": 6.971359,
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
      "heading": 319,
      "squawk": "7042",
      "timestamp": 1655312961,
      "ems": null
    },
    {
      "latitude": 50.909573,
      "longitude": 6.969757,
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
      "heading": 321,
      "squawk": "7042",
      "timestamp": 1655312965,
      "ems": null
    },
    {
      "latitude": 50.910141,
      "longitude": 6.969118,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1655312969,
      "ems": null
    },
    {
      "latitude": 50.911716,
      "longitude": 6.967468,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1655312973,
      "ems": null
    },
    {
      "latitude": 50.912888,
      "longitude": 6.966371,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1655312977,
      "ems": null
    },
    {
      "latitude": 50.913803,
      "longitude": 6.965406,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1655312981,
      "ems": null
    },
    {
      "latitude": 50.9146,
      "longitude": 6.964569,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1655312984,
      "ems": null
    },
    {
      "latitude": 50.915531,
      "longitude": 6.963501,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1655312987,
      "ems": null
    },
    {
      "latitude": 50.916138,
      "longitude": 6.962891,
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
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1655312989,
      "ems": null
    },
    {
      "latitude": 50.917053,
      "longitude": 6.961917,
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
      "heading": 326,
      "squawk": "7042",
      "timestamp": 1655312993,
      "ems": null
    },
    {
      "latitude": 50.91893,
      "longitude": 6.959991,
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1655312998,
      "ems": null
    },
    {
      "latitude": 50.920746,
      "longitude": 6.958237,
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1655313004,
      "ems": null
    },
    {
      "latitude": 50.922562,
      "longitude": 6.956558,
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
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1655313011,
      "ems": null
    },
    {
      "latitude": 50.92424,
      "longitude": 6.955014,
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1655313017,
      "ems": null
    },
    {
      "latitude": 50.925308,
      "longitude": 6.954041,
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
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1655313020,
      "ems": null
    },
    {
      "latitude": 50.926052,
      "longitude": 6.953354,
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
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1655313023,
      "ems": null
    },
    {
      "latitude": 50.927216,
      "longitude": 6.952438,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655313026,
      "ems": null
    },
    {
      "latitude": 50.92804,
      "longitude": 6.951822,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655313029,
      "ems": null
    },
    {
      "latitude": 50.92923,
      "longitude": 6.951005,
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
      "heading": 339,
      "squawk": "7042",
      "timestamp": 1655313032,
      "ems": null
    },
    {
      "latitude": 50.930103,
      "longitude": 6.950531,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7042",
      "timestamp": 1655313035,
      "ems": null
    },
    {
      "latitude": 50.931335,
      "longitude": 6.949966,
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
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655313038,
      "ems": null
    },
    {
      "latitude": 50.93206,
      "longitude": 6.949615,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655313040,
      "ems": null
    },
    {
      "latitude": 50.933224,
      "longitude": 6.949005,
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
      "heading": 340,
      "squawk": "7042",
      "timestamp": 1655313043,
      "ems": null
    },
    {
      "latitude": 50.934341,
      "longitude": 6.948318,
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
      "heading": 340,
      "squawk": "7042",
      "timestamp": 1655313047,
      "ems": null
    },
    {
      "latitude": 50.935501,
      "longitude": 6.947739,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "7042",
      "timestamp": 1655313050,
      "ems": null
    },
    {
      "latitude": 50.9366,
      "longitude": 6.947294,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "7042",
      "timestamp": 1655313053,
      "ems": null
    },
    {
      "latitude": 50.937744,
      "longitude": 6.947071,
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
      "heading": 355,
      "squawk": "7042",
      "timestamp": 1655313056,
      "ems": null
    },
    {
      "latitude": 50.93866,
      "longitude": 6.947071,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 3,
      "squawk": "7042",
      "timestamp": 1655313058,
      "ems": null
    },
    {
      "latitude": 50.939713,
      "longitude": 6.947442,
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
      "heading": 16,
      "squawk": "7042",
      "timestamp": 1655313062,
      "ems": null
    },
    {
      "latitude": 50.94067,
      "longitude": 6.94809,
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
      "heading": 27,
      "squawk": "7042",
      "timestamp": 1655313065,
      "ems": null
    },
    {
      "latitude": 50.941589,
      "longitude": 6.949001,
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
      "heading": 34,
      "squawk": "7042",
      "timestamp": 1655313067,
      "ems": null
    },
    {
      "latitude": 50.942486,
      "longitude": 6.950226,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 44,
      "squawk": "7042",
      "timestamp": 1655313071,
      "ems": null
    },
    {
      "latitude": 50.943184,
      "longitude": 6.951523,
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
      "heading": 52,
      "squawk": "7042",
      "timestamp": 1655313073,
      "ems": null
    },
    {
      "latitude": 50.943604,
      "longitude": 6.952564,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 60,
      "squawk": "7042",
      "timestamp": 1655313076,
      "ems": null
    },
    {
      "latitude": 50.944107,
      "longitude": 6.954865,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7042",
      "timestamp": 1655313080,
      "ems": null
    },
    {
      "latitude": 50.944244,
      "longitude": 6.956424,
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
      "heading": 85,
      "squawk": "7042",
      "timestamp": 1655313083,
      "ems": null
    },
    {
      "latitude": 50.944256,
      "longitude": 6.95816,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "7042",
      "timestamp": 1655313086,
      "ems": null
    },
    {
      "latitude": 50.944023,
      "longitude": 6.959915,
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
      "heading": 106,
      "squawk": "7042",
      "timestamp": 1655313089,
      "ems": null
    },
    {
      "latitude": 50.943558,
      "longitude": 6.961695,
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
      "heading": 116,
      "squawk": "7042",
      "timestamp": 1655313092,
      "ems": null
    },
    {
      "latitude": 50.942905,
      "longitude": 6.963348,
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
      "heading": 125,
      "squawk": "7042",
      "timestamp": 1655313095,
      "ems": null
    },
    {
      "latitude": 50.941818,
      "longitude": 6.965035,
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
      "heading": 141,
      "squawk": "7042",
      "timestamp": 1655313099,
      "ems": null
    },
    {
      "latitude": 50.940578,
      "longitude": 6.966324,
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
      "heading": 152,
      "squawk": "7042",
      "timestamp": 1655313103,
      "ems": null
    },
    {
      "latitude": 50.938995,
      "longitude": 6.967239,
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
      "heading": 165,
      "squawk": "7042",
      "timestamp": 1655313107,
      "ems": null
    },
    {
      "latitude": 50.937321,
      "longitude": 6.967392,
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
      "heading": 180,
      "squawk": "7042",
      "timestamp": 1655313111,
      "ems": null
    },
    {
      "latitude": 50.935501,
      "longitude": 6.966743,
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
      "heading": 197,
      "squawk": "7042",
      "timestamp": 1655313115,
      "ems": null
    },
    {
      "latitude": 50.934265,
      "longitude": 6.96548,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 219,
      "squawk": "7042",
      "timestamp": 1655313119,
      "ems": null
    },
    {
      "latitude": 50.933167,
      "longitude": 6.963624,
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
      "heading": 231,
      "squawk": "7042",
      "timestamp": 1655313123,
      "ems": null
    },
    {
      "latitude": 50.932571,
      "longitude": 6.961992,
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
      "heading": 243,
      "squawk": "7042",
      "timestamp": 1655313126,
      "ems": null
    },
    {
      "latitude": 50.932243,
      "longitude": 6.960297,
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
      "heading": 258,
      "squawk": "7042",
      "timestamp": 1655313128,
      "ems": null
    },
    {
      "latitude": 50.932106,
      "longitude": 6.958542,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 264,
      "squawk": "7042",
      "timestamp": 1655313131,
      "ems": null
    },
    {
      "latitude": 50.932152,
      "longitude": 6.956711,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 274,
      "squawk": "7042",
      "timestamp": 1655313134,
      "ems": null
    },
    {
      "latitude": 50.932343,
      "longitude": 6.954939,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 283,
      "squawk": "7042",
      "timestamp": 1655313137,
      "ems": null
    },
    {
      "latitude": 50.932663,
      "longitude": 6.953278,
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
      "heading": 289,
      "squawk": "7042",
      "timestamp": 1655313140,
      "ems": null
    },
    {
      "latitude": 50.933121,
      "longitude": 6.951674,
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
      "heading": 294,
      "squawk": "7042",
      "timestamp": 1655313144,
      "ems": null
    },
    {
      "latitude": 50.933624,
      "longitude": 6.950189,
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
      "heading": 303,
      "squawk": "7042",
      "timestamp": 1655313146,
      "ems": null
    },
    {
      "latitude": 50.934402,
      "longitude": 6.948704,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "7042",
      "timestamp": 1655313150,
      "ems": null
    },
    {
      "latitude": 50.935223,
      "longitude": 6.947784,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1655313153,
      "ems": null
    },
    {
      "latitude": 50.935959,
      "longitude": 6.947219,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7042",
      "timestamp": 1655313155,
      "ems": null
    },
    {
      "latitude": 50.937241,
      "longitude": 6.946997,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 359,
      "squawk": "7042",
      "timestamp": 1655313159,
      "ems": null
    },
    {
      "latitude": 50.938156,
      "longitude": 6.94725,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 12,
      "squawk": "7042",
      "timestamp": 1655313161,
      "ems": null
    },
    {
      "latitude": 50.939274,
      "longitude": 6.947937,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 30,
      "squawk": "7042",
      "timestamp": 1655313165,
      "ems": null
    },
    {
      "latitude": 50.940346,
      "longitude": 6.949463,
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
      "heading": 51,
      "squawk": "7042",
      "timestamp": 1655313169,
      "ems": null
    },
    {
      "latitude": 50.940998,
      "longitude": 6.951218,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7042",
      "timestamp": 1655313173,
      "ems": null
    },
    {
      "latitude": 50.941223,
      "longitude": 6.952564,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "7042",
      "timestamp": 1655313176,
      "ems": null
    },
    {
      "latitude": 50.941231,
      "longitude": 6.954422,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 93,
      "squawk": "7042",
      "timestamp": 1655313178,
      "ems": null
    },
    {
      "latitude": 50.940903,
      "longitude": 6.9561,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 111,
      "squawk": "7042",
      "timestamp": 1655313182,
      "ems": null
    },
    {
      "latitude": 50.940445,
      "longitude": 6.957241,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 127,
      "squawk": "7042",
      "timestamp": 1655313185,
      "ems": null
    },
    {
      "latitude": 50.939667,
      "longitude": 6.958503,
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
      "heading": 141,
      "squawk": "7042",
      "timestamp": 1655313187,
      "ems": null
    },
    {
      "latitude": 50.938751,
      "longitude": 6.959319,
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
      "heading": 153,
      "squawk": "7042",
      "timestamp": 1655313190,
      "ems": null
    },
    {
      "latitude": 50.937458,
      "longitude": 6.959839,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 169,
      "squawk": "7042",
      "timestamp": 1655313193,
      "ems": null
    },
    {
      "latitude": 50.936279,
      "longitude": 6.959839,
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
      "heading": 183,
      "squawk": "7042",
      "timestamp": 1655313196,
      "ems": null
    },
    {
      "latitude": 50.935181,
      "longitude": 6.959394,
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
      "heading": 196,
      "squawk": "7042",
      "timestamp": 1655313199,
      "ems": null
    },
    {
      "latitude": 50.934036,
      "longitude": 6.958428,
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
      "heading": 215,
      "squawk": "7042",
      "timestamp": 1655313202,
      "ems": null
    },
    {
      "latitude": 50.933258,
      "longitude": 6.957241,
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
      "heading": 227,
      "squawk": "7042",
      "timestamp": 1655313205,
      "ems": null
    },
    {
      "latitude": 50.932663,
      "longitude": 6.955566,
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
      "heading": 248,
      "squawk": "7042",
      "timestamp": 1655313209,
      "ems": null
    },
    {
      "latitude": 50.932434,
      "longitude": 6.953826,
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
      "heading": 261,
      "squawk": "7042",
      "timestamp": 1655313212,
      "ems": null
    },
    {
      "latitude": 50.93243,
      "longitude": 6.952057,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 278,
      "squawk": "7042",
      "timestamp": 1655313215,
      "ems": null
    },
    {
      "latitude": 50.93285,
      "longitude": 6.95015,
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
      "heading": 294,
      "squawk": "7042",
      "timestamp": 1655313217,
      "ems": null
    },
    {
      "latitude": 50.933502,
      "longitude": 6.948776,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 310,
      "squawk": "7042",
      "timestamp": 1655313220,
      "ems": null
    },
    {
      "latitude": 50.9342,
      "longitude": 6.947861,
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
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1655313223,
      "ems": null
    },
    {
      "latitude": 50.935131,
      "longitude": 6.947021,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655313226,
      "ems": null
    },
    {
      "latitude": 50.936108,
      "longitude": 6.946259,
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
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655313230,
      "ems": null
    },
    {
      "latitude": 50.937149,
      "longitude": 6.945512,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655313232,
      "ems": null
    },
    {
      "latitude": 50.938293,
      "longitude": 6.944695,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655313236,
      "ems": null
    },
    {
      "latitude": 50.939529,
      "longitude": 6.943879,
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
      "heading": 336,
      "squawk": "7042",
      "timestamp": 1655313240,
      "ems": null
    },
    {
      "latitude": 50.940948,
      "longitude": 6.942988,
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
      "heading": 337,
      "squawk": "7042",
      "timestamp": 1655313244,
      "ems": null
    },
    {
      "latitude": 50.942253,
      "longitude": 6.942291,
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
      "heading": 341,
      "squawk": "7042",
      "timestamp": 1655313248,
      "ems": null
    },
    {
      "latitude": 50.943649,
      "longitude": 6.941578,
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
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655313252,
      "ems": null
    },
    {
      "latitude": 50.944656,
      "longitude": 6.941133,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "7042",
      "timestamp": 1655313255,
      "ems": null
    },
    {
      "latitude": 50.945755,
      "longitude": 6.940613,
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
      "heading": 345,
      "squawk": "7042",
      "timestamp": 1655313257,
      "ems": null
    },
    {
      "latitude": 50.946762,
      "longitude": 6.940167,
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
      "heading": 344,
      "squawk": "7042",
      "timestamp": 1655313260,
      "ems": null
    },
    {
      "latitude": 50.948956,
      "longitude": 6.938858,
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
      "heading": 335,
      "squawk": "7042",
      "timestamp": 1655313266,
      "ems": null
    },
    {
      "latitude": 50.951065,
      "longitude": 6.937421,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "7042",
      "timestamp": 1655313273,
      "ems": null
    },
    {
      "latitude": 50.952164,
      "longitude": 6.93653,
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
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1655313276,
      "ems": null
    },
    {
      "latitude": 50.952988,
      "longitude": 6.935788,
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1655313279,
      "ems": null
    },
    {
      "latitude": 50.954086,
      "longitude": 6.934749,
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
      "heading": 331,
      "squawk": "7042",
      "timestamp": 1655313282,
      "ems": null
    },
    {
      "latitude": 50.955009,
      "longitude": 6.934052,
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
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655313285,
      "ems": null
    },
    {
      "latitude": 50.956009,
      "longitude": 6.933264,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7042",
      "timestamp": 1655313288,
      "ems": null
    },
    {
      "latitude": 50.95697,
      "longitude": 6.932373,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1655313291,
      "ems": null
    },
    {
      "latitude": 50.957943,
      "longitude": 6.931458,
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1655313294,
      "ems": null
    },
    {
      "latitude": 50.958847,
      "longitude": 6.930517,
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
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1655313297,
      "ems": null
    },
    {
      "latitude": 50.959896,
      "longitude": 6.929474,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "7042",
      "timestamp": 1655313300,
      "ems": null
    },
    {
      "latitude": 50.960781,
      "longitude": 6.928558,
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
      "heading": 326,
      "squawk": "7042",
      "timestamp": 1655313303,
      "ems": null
    },
    {
      "latitude": 50.961712,
      "longitude": 6.927567,
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
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1655313306,
      "ems": null
    },
    {
      "latitude": 50.962456,
      "longitude": 6.926727,
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
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1655313308,
      "ems": null
    },
    {
      "latitude": 50.963528,
      "longitude": 6.925507,
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
      "heading": 326,
      "squawk": "7042",
      "timestamp": 1655313312,
      "ems": null
    },
    {
      "latitude": 50.964523,
      "longitude": 6.924504,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 326,
      "squawk": "7042",
      "timestamp": 1655313315,
      "ems": null
    },
    {
      "latitude": 50.96553,
      "longitude": 6.923465,
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1655313318,
      "ems": null
    },
    {
      "latitude": 50.967316,
      "longitude": 6.921832,
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1655313324,
      "ems": null
    },
    {
      "latitude": 50.969421,
      "longitude": 6.919828,
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
      "heading": 329,
      "squawk": "7042",
      "timestamp": 1655313330,
      "ems": null
    },
    {
      "latitude": 50.971436,
      "longitude": 6.917898,
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
      "heading": 327,
      "squawk": "7042",
      "timestamp": 1655313336,
      "ems": null
    },
    {
      "latitude": 50.973351,
      "longitude": 6.915894,
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
      "heading": 325,
      "squawk": "7042",
      "timestamp": 1655313342,
      "ems": null
    },
    {
      "latitude": 50.975235,
      "longitude": 6.913741,
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
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1655313348,
      "ems": null
    },
    {
      "latitude": 50.976143,
      "longitude": 6.912766,
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
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1655313351,
      "ems": null
    },
    {
      "latitude": 50.977169,
      "longitude": 6.911621,
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
      "heading": 323,
      "squawk": "7042",
      "timestamp": 1655313354,
      "ems": null
    },
    {
      "latitude": 50.977798,
      "longitude": 6.910846,
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
      "heading": 324,
      "squawk": "7042",
      "timestamp": 1655313357,
      "ems": null
    },
    {
      "latitude": 50.979774,
      "longitude": 6.908798,
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
      "heading": 330,
      "squawk": "7042",
      "timestamp": 1655313363,
      "ems": null
    },
    {
      "latitude": 50.981644,
      "longitude": 6.907134,
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
      "heading": 328,
      "squawk": "7042",
      "timestamp": 1655313369,
      "ems": null
    },
    {
      "latitude": 50.983521,
      "longitude": 6.905278,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1655313375,
      "ems": null
    },
    {
      "latitude": 50.984528,
      "longitude": 6.904387,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1655313378,
      "ems": null
    },
    {
      "latitude": 50.985546,
      "longitude": 6.903381,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1655313381,
      "ems": null
    },
    {
      "latitude": 50.986618,
      "longitude": 6.90239,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1655313384,
      "ems": null
    },
    {
      "latitude": 50.987549,
      "longitude": 6.901493,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1655313387,
      "ems": null
    },
    {
      "latitude": 50.989689,
      "longitude": 6.89949,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1655313394,
      "ems": null
    },
    {
      "latitude": 50.992157,
      "longitude": 6.897202,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1655313402,
      "ems": null
    },
    {
      "latitude": 50.994999,
      "longitude": 6.894455,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1655313410,
      "ems": null
    },
    {
      "latitude": 50.997559,
      "longitude": 6.892319,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1655313418,
      "ems": null
    },
    {
      "latitude": 50.999977,
      "longitude": 6.890335,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1655313426,
      "ems": null
    },
    {
      "latitude": 51.001839,
      "longitude": 6.888733,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1655313434,
      "ems": null
    },
    {
      "latitude": 51.004726,
      "longitude": 6.886826,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1655313442,
      "ems": null
    },
    {
      "latitude": 51.006821,
      "longitude": 6.885236,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1655313449,
      "ems": null
    },
    {
      "latitude": 51.009289,
      "longitude": 6.883163,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1655313458,
      "ems": null
    },
    {
      "latitude": 51.010437,
      "longitude": 6.882044,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1655313461,
      "ems": null
    },
    {
      "latitude": 51.011353,
      "longitude": 6.881079,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1655313464,
      "ems": null
    },
    {
      "latitude": 51.012222,
      "longitude": 6.880112,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1655313467,
      "ems": null
    },
    {
      "latitude": 51.013058,
      "longitude": 6.87912,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1655313470,
      "ems": null
    },
    {
      "latitude": 51.013805,
      "longitude": 6.878204,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1655313473,
      "ems": null
    },
    {
      "latitude": 51.01474,
      "longitude": 6.876699,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1655313476,
      "ems": null
    },
    {
      "latitude": 51.015335,
      "longitude": 6.875437,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1655313479,
      "ems": null
    },
    {
      "latitude": 51.0159,
      "longitude": 6.874008,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1655313482,
      "ems": null
    },
    {
      "latitude": 51.016365,
      "longitude": 6.872482,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1655313484,
      "ems": null
    },
    {
      "latitude": 51.016552,
      "longitude": 6.870728,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1655313488,
      "ems": null
    },
    {
      "latitude": 51.016479,
      "longitude": 6.868905,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1655313491,
      "ems": null
    },
    {
      "latitude": 51.016205,
      "longitude": 6.867123,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1655313494,
      "ems": null
    },
    {
      "latitude": 51.015759,
      "longitude": 6.865158,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1655313497,
      "ems": null
    },
    {
      "latitude": 51.015427,
      "longitude": 6.86356,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1655313500,
      "ems": null
    },
    {
      "latitude": 51.015244,
      "longitude": 6.862447,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1655313502,
      "ems": null
    },
    {
      "latitude": 51.014736,
      "longitude": 6.85997,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1655313506,
      "ems": null
    },
    {
      "latitude": 51.014145,
      "longitude": 6.858067,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1655313509,
      "ems": null
    },
    {
      "latitude": 51.013573,
      "longitude": 6.856537,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1655313512,
      "ems": null
    },
    {
      "latitude": 51.012772,
      "longitude": 6.854949,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1655313515,
      "ems": null
    },
    {
      "latitude": 51.011902,
      "longitude": 6.853465,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1655313518,
      "ems": null
    },
    {
      "latitude": 51.010895,
      "longitude": 6.852202,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1655313521,
      "ems": null
    },
    {
      "latitude": 51.009708,
      "longitude": 6.850967,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1655313524,
      "ems": null
    },
    {
      "latitude": 51.008743,
      "longitude": 6.850273,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1655313527,
      "ems": null
    },
    {
      "latitude": 51.00769,
      "longitude": 6.849679,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1655313530,
      "ems": null
    },
    {
      "latitude": 51.00631,
      "longitude": 6.849136,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1655313532,
      "ems": null
    },
    {
      "latitude": 51.005081,
      "longitude": 6.848862,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1655313536,
      "ems": null
    },
    {
      "latitude": 51.003387,
      "longitude": 6.848937,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1655313540,
      "ems": null
    },
    {
      "latitude": 51.002445,
      "longitude": 6.849213,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1655313542,
      "ems": null
    },
    {
      "latitude": 51.000908,
      "longitude": 6.849899,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1655313546,
      "ems": null
    },
    {
      "latitude": 50.999725,
      "longitude": 6.850569,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1655313549,
      "ems": null
    },
    {
      "latitude": 50.998814,
      "longitude": 6.851044,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313551,
      "ems": null
    },
    {
      "latitude": 50.997299,
      "longitude": 6.852054,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313555,
      "ems": null
    },
    {
      "latitude": 50.996246,
      "longitude": 6.852722,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313557,
      "ems": null
    },
    {
      "latitude": 50.995056,
      "longitude": 6.85339,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655313560,
      "ems": null
    },
    {
      "latitude": 50.993866,
      "longitude": 6.85391,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1655313564,
      "ems": null
    },
    {
      "latitude": 50.992531,
      "longitude": 6.854477,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1655313567,
      "ems": null
    },
    {
      "latitude": 50.99144,
      "longitude": 6.854875,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1655313570,
      "ems": null
    },
    {
      "latitude": 50.988991,
      "longitude": 6.855774,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1655313576,
      "ems": null
    },
    {
      "latitude": 50.987961,
      "longitude": 6.856062,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1655313579,
      "ems": null
    },
    {
      "latitude": 50.986679,
      "longitude": 6.856508,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1655313581,
      "ems": null
    },
    {
      "latitude": 50.985455,
      "longitude": 6.856766,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1655313585,
      "ems": null
    },
    {
      "latitude": 50.984299,
      "longitude": 6.857102,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1655313588,
      "ems": null
    },
    {
      "latitude": 50.983063,
      "longitude": 6.857399,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1655313591,
      "ems": null
    },
    {
      "latitude": 50.980801,
      "longitude": 6.858139,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1655313597,
      "ems": null
    },
    {
      "latitude": 50.97821,
      "longitude": 6.859254,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1655313603,
      "ems": null
    },
    {
      "latitude": 50.97702,
      "longitude": 6.859848,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1655313606,
      "ems": null
    },
    {
      "latitude": 50.975864,
      "longitude": 6.860504,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313609,
      "ems": null
    },
    {
      "latitude": 50.974747,
      "longitude": 6.861267,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313612,
      "ems": null
    },
    {
      "latitude": 50.973442,
      "longitude": 6.86203,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313615,
      "ems": null
    },
    {
      "latitude": 50.972279,
      "longitude": 6.862793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313618,
      "ems": null
    },
    {
      "latitude": 50.971256,
      "longitude": 6.863403,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313621,
      "ems": null
    },
    {
      "latitude": 50.970291,
      "longitude": 6.864006,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313624,
      "ems": null
    },
    {
      "latitude": 50.968975,
      "longitude": 6.864853,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313627,
      "ems": null
    },
    {
      "latitude": 50.967819,
      "longitude": 6.865639,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1655313630,
      "ems": null
    },
    {
      "latitude": 50.966537,
      "longitude": 6.866529,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1655313633,
      "ems": null
    },
    {
      "latitude": 50.965763,
      "longitude": 6.867065,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1655313636,
      "ems": null
    },
    {
      "latitude": 50.96347,
      "longitude": 6.868534,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313642,
      "ems": null
    },
    {
      "latitude": 50.961044,
      "longitude": 6.86987,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1655313648,
      "ems": null
    },
    {
      "latitude": 50.958344,
      "longitude": 6.871206,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1655313656,
      "ems": null
    },
    {
      "latitude": 50.956787,
      "longitude": 6.872023,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1655313660,
      "ems": null
    },
    {
      "latitude": 50.954498,
      "longitude": 6.873245,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1655313666,
      "ems": null
    },
    {
      "latitude": 50.953491,
      "longitude": 6.87373,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1655313669,
      "ems": null
    },
    {
      "latitude": 50.951469,
      "longitude": 6.874771,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1655313675,
      "ems": null
    },
    {
      "latitude": 50.949284,
      "longitude": 6.875916,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1655313681,
      "ems": null
    },
    {
      "latitude": 50.945976,
      "longitude": 6.877899,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655313690,
      "ems": null
    },
    {
      "latitude": 50.943741,
      "longitude": 6.879372,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1655313696,
      "ems": null
    },
    {
      "latitude": 50.942673,
      "longitude": 6.880188,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1655313699,
      "ems": null
    },
    {
      "latitude": 50.941635,
      "longitude": 6.88093,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1655313702,
      "ems": null
    },
    {
      "latitude": 50.940533,
      "longitude": 6.881714,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1655313705,
      "ems": null
    },
    {
      "latitude": 50.939602,
      "longitude": 6.882401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1655313708,
      "ems": null
    },
    {
      "latitude": 50.937038,
      "longitude": 6.884232,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1655313714,
      "ems": null
    },
    {
      "latitude": 50.934769,
      "longitude": 6.885756,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1655313720,
      "ems": null
    },
    {
      "latitude": 50.93327,
      "longitude": 6.886826,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1655313726,
      "ems": null
    },
    {
      "latitude": 50.931198,
      "longitude": 6.888502,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1655313732,
      "ems": null
    },
    {
      "latitude": 50.930012,
      "longitude": 6.889496,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1655313735,
      "ems": null
    },
    {
      "latitude": 50.929081,
      "longitude": 6.890335,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1655313738,
      "ems": null
    },
    {
      "latitude": 50.92804,
      "longitude": 6.891249,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1655313741,
      "ems": null
    },
    {
      "latitude": 50.92717,
      "longitude": 6.892065,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1655313744,
      "ems": null
    },
    {
      "latitude": 50.926426,
      "longitude": 6.892776,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1655313747,
      "ems": null
    },
    {
      "latitude": 50.925293,
      "longitude": 6.893847,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1655313750,
      "ems": null
    },
    {
      "latitude": 50.924423,
      "longitude": 6.894684,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1655313753,
      "ems": null
    },
    {
      "latitude": 50.922096,
      "longitude": 6.896591,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1655313759,
      "ems": null
    },
    {
      "latitude": 50.920002,
      "longitude": 6.898117,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1655313765,
      "ems": null
    },
    {
      "latitude": 50.917786,
      "longitude": 6.899859,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313771,
      "ems": null
    },
    {
      "latitude": 50.916687,
      "longitude": 6.900676,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313774,
      "ems": null
    },
    {
      "latitude": 50.914398,
      "longitude": 6.902532,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313780,
      "ems": null
    },
    {
      "latitude": 50.912201,
      "longitude": 6.904387,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1655313786,
      "ems": null
    },
    {
      "latitude": 50.910179,
      "longitude": 6.906052,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1655313792,
      "ems": null
    },
    {
      "latitude": 50.908039,
      "longitude": 6.908035,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1655313798,
      "ems": null
    },
    {
      "latitude": 50.907154,
      "longitude": 6.908875,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1655313801,
      "ems": null
    },
    {
      "latitude": 50.904831,
      "longitude": 6.91092,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1655313807,
      "ems": null
    },
    {
      "latitude": 50.902916,
      "longitude": 6.91246,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1655313813,
      "ems": null
    },
    {
      "latitude": 50.900436,
      "longitude": 6.914483,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1655313819,
      "ems": null
    },
    {
      "latitude": 50.899334,
      "longitude": 6.915207,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313822,
      "ems": null
    },
    {
      "latitude": 50.898148,
      "longitude": 6.916042,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313825,
      "ems": null
    },
    {
      "latitude": 50.897003,
      "longitude": 6.916784,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313828,
      "ems": null
    },
    {
      "latitude": 50.896042,
      "longitude": 6.917378,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313831,
      "ems": null
    },
    {
      "latitude": 50.894676,
      "longitude": 6.918259,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313834,
      "ems": null
    },
    {
      "latitude": 50.89357,
      "longitude": 6.918937,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655313837,
      "ems": null
    },
    {
      "latitude": 50.892536,
      "longitude": 6.919556,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655313840,
      "ems": null
    },
    {
      "latitude": 50.890999,
      "longitude": 6.920471,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655313843,
      "ems": null
    },
    {
      "latitude": 50.889999,
      "longitude": 6.92109,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1655313846,
      "ems": null
    },
    {
      "latitude": 50.888535,
      "longitude": 6.921832,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1655313849,
      "ems": null
    },
    {
      "latitude": 50.887436,
      "longitude": 6.922352,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1655313852,
      "ems": null
    },
    {
      "latitude": 50.886429,
      "longitude": 6.922723,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1655313855,
      "ems": null
    },
    {
      "latitude": 50.884949,
      "longitude": 6.923218,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1655313858,
      "ems": null
    },
    {
      "latitude": 50.883453,
      "longitude": 6.923762,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1655313861,
      "ems": null
    },
    {
      "latitude": 50.882263,
      "longitude": 6.924208,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1655313864,
      "ems": null
    },
    {
      "latitude": 50.880989,
      "longitude": 6.924667,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1655313867,
      "ems": null
    },
    {
      "latitude": 50.880154,
      "longitude": 6.924896,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1655313870,
      "ems": null
    },
    {
      "latitude": 50.878281,
      "longitude": 6.925247,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1655313873,
      "ems": null
    },
    {
      "latitude": 50.87709,
      "longitude": 6.925395,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1655313876,
      "ems": null
    },
    {
      "latitude": 50.875916,
      "longitude": 6.925583,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1655313879,
      "ems": null
    },
    {
      "latitude": 50.874756,
      "longitude": 6.925766,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1655313882,
      "ems": null
    },
    {
      "latitude": 50.873497,
      "longitude": 6.925888,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1655313885,
      "ems": null
    },
    {
      "latitude": 50.870911,
      "longitude": 6.926732,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1655313891,
      "ems": null
    },
    {
      "latitude": 50.8694,
      "longitude": 6.92749,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1655313894,
      "ems": null
    },
    {
      "latitude": 50.868237,
      "longitude": 6.928253,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1655313897,
      "ems": null
    },
    {
      "latitude": 50.866093,
      "longitude": 6.929932,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313903,
      "ems": null
    },
    {
      "latitude": 50.864742,
      "longitude": 6.930923,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313906,
      "ems": null
    },
    {
      "latitude": 50.863346,
      "longitude": 6.932144,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1655313909,
      "ems": null
    },
    {
      "latitude": 50.862511,
      "longitude": 6.932831,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1655313912,
      "ems": null
    },
    {
      "latitude": 50.861526,
      "longitude": 6.933635,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1655313914,
      "ems": null
    },
    {
      "latitude": 50.859997,
      "longitude": 6.934891,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1655313918,
      "ems": null
    },
    {
      "latitude": 50.858871,
      "longitude": 6.935713,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1655313921,
      "ems": null
    },
    {
      "latitude": 50.856537,
      "longitude": 6.937421,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1655313927,
      "ems": null
    },
    {
      "latitude": 50.853058,
      "longitude": 6.940079,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313936,
      "ems": null
    },
    {
      "latitude": 50.850906,
      "longitude": 6.941801,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1655313942,
      "ems": null
    },
    {
      "latitude": 50.847797,
      "longitude": 6.94397,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655313948,
      "ems": null
    },
    {
      "latitude": 50.84523,
      "longitude": 6.945586,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655313955,
      "ems": null
    },
    {
      "latitude": 50.842712,
      "longitude": 6.947071,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1655313961,
      "ems": null
    },
    {
      "latitude": 50.84156,
      "longitude": 6.947708,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1655313964,
      "ems": null
    },
    {
      "latitude": 50.840256,
      "longitude": 6.948471,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655313967,
      "ems": null
    },
    {
      "latitude": 50.837814,
      "longitude": 6.949892,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1655313973,
      "ems": null
    },
    {
      "latitude": 50.835182,
      "longitude": 6.95137,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655313979,
      "ems": null
    },
    {
      "latitude": 50.832779,
      "longitude": 6.952935,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1655313985,
      "ems": null
    },
    {
      "latitude": 50.831646,
      "longitude": 6.953735,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1655313988,
      "ems": null
    },
    {
      "latitude": 50.830399,
      "longitude": 6.954717,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313991,
      "ems": null
    },
    {
      "latitude": 50.829163,
      "longitude": 6.955682,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313994,
      "ems": null
    },
    {
      "latitude": 50.828018,
      "longitude": 6.956573,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655313997,
      "ems": null
    },
    {
      "latitude": 50.826805,
      "longitude": 6.957474,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655314000,
      "ems": null
    },
    {
      "latitude": 50.825642,
      "longitude": 6.958389,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655314003,
      "ems": null
    },
    {
      "latitude": 50.824478,
      "longitude": 6.959305,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655314006,
      "ems": null
    },
    {
      "latitude": 50.822113,
      "longitude": 6.960952,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655314012,
      "ems": null
    },
    {
      "latitude": 50.819687,
      "longitude": 6.962437,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1655314018,
      "ems": null
    },
    {
      "latitude": 50.817307,
      "longitude": 6.964111,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1655314024,
      "ems": null
    },
    {
      "latitude": 50.814934,
      "longitude": 6.965942,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655314030,
      "ems": null
    },
    {
      "latitude": 50.812683,
      "longitude": 6.967633,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1655314036,
      "ems": null
    },
    {
      "latitude": 50.810394,
      "longitude": 6.969118,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655314042,
      "ems": null
    },
    {
      "latitude": 50.807766,
      "longitude": 6.970596,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1655314048,
      "ems": null
    },
    {
      "latitude": 50.805435,
      "longitude": 6.972122,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655314054,
      "ems": null
    },
    {
      "latitude": 50.804226,
      "longitude": 6.972809,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1655314057,
      "ems": null
    },
    {
      "latitude": 50.802971,
      "longitude": 6.973343,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1655314060,
      "ems": null
    },
    {
      "latitude": 50.801853,
      "longitude": 6.973953,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1655314063,
      "ems": null
    },
    {
      "latitude": 50.799408,
      "longitude": 6.975353,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655314069,
      "ems": null
    },
    {
      "latitude": 50.798401,
      "longitude": 6.976096,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1655314072,
      "ems": null
    },
    {
      "latitude": 50.797119,
      "longitude": 6.977135,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1655314075,
      "ems": null
    },
    {
      "latitude": 50.795895,
      "longitude": 6.978302,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1655314078,
      "ems": null
    },
    {
      "latitude": 50.794914,
      "longitude": 6.979218,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1655314081,
      "ems": null
    },
    {
      "latitude": 50.793915,
      "longitude": 6.980327,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1655314084,
      "ems": null
    },
    {
      "latitude": 50.792728,
      "longitude": 6.981583,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1655314087,
      "ems": null
    },
    {
      "latitude": 50.791843,
      "longitude": 6.982498,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1655314090,
      "ems": null
    },
    {
      "latitude": 50.790848,
      "longitude": 6.983519,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1655314093,
      "ems": null
    },
    {
      "latitude": 50.789795,
      "longitude": 6.984706,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1655314096,
      "ems": null
    },
    {
      "latitude": 50.789063,
      "longitude": 6.985597,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1655314099,
      "ems": null
    },
    {
      "latitude": 50.787735,
      "longitude": 6.987156,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1655314102,
      "ems": null
    },
    {
      "latitude": 50.786682,
      "longitude": 6.988344,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1655314105,
      "ems": null
    },
    {
      "latitude": 50.785557,
      "longitude": 6.98967,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1655314108,
      "ems": null
    },
    {
      "latitude": 50.783615,
      "longitude": 6.991907,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1655314114,
      "ems": null
    },
    {
      "latitude": 50.781555,
      "longitude": 6.994553,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314120,
      "ems": null
    },
    {
      "latitude": 50.780949,
      "longitude": 6.995468,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314123,
      "ems": null
    },
    {
      "latitude": 50.779724,
      "longitude": 6.9974,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314126,
      "ems": null
    },
    {
      "latitude": 50.778854,
      "longitude": 6.998672,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314129,
      "ems": null
    },
    {
      "latitude": 50.777985,
      "longitude": 6.999924,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1655314132,
      "ems": null
    },
    {
      "latitude": 50.777115,
      "longitude": 7.001186,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314135,
      "ems": null
    },
    {
      "latitude": 50.776295,
      "longitude": 7.002487,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314138,
      "ems": null
    },
    {
      "latitude": 50.775375,
      "longitude": 7.003859,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314141,
      "ems": null
    },
    {
      "latitude": 50.77457,
      "longitude": 7.005157,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314144,
      "ems": null
    },
    {
      "latitude": 50.773773,
      "longitude": 7.006456,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1655314147,
      "ems": null
    },
    {
      "latitude": 50.771965,
      "longitude": 7.009125,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314153,
      "ems": null
    },
    {
      "latitude": 50.770149,
      "longitude": 7.012024,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1655314159,
      "ems": null
    },
    {
      "latitude": 50.768463,
      "longitude": 7.014696,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314165,
      "ems": null
    },
    {
      "latitude": 50.765488,
      "longitude": 7.019076,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1655314174,
      "ems": null
    },
    {
      "latitude": 50.764656,
      "longitude": 7.020187,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1655314177,
      "ems": null
    },
    {
      "latitude": 50.762794,
      "longitude": 7.022705,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1655314183,
      "ems": null
    },
    {
      "latitude": 50.760887,
      "longitude": 7.025223,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1655314189,
      "ems": null
    },
    {
      "latitude": 50.759071,
      "longitude": 7.027817,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1655314195,
      "ems": null
    },
    {
      "latitude": 50.758072,
      "longitude": 7.029097,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1655314198,
      "ems": null
    },
    {
      "latitude": 50.757065,
      "longitude": 7.030285,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1655314201,
      "ems": null
    },
    {
      "latitude": 50.754974,
      "longitude": 7.032623,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1655314207,
      "ems": null
    },
    {
      "latitude": 50.754044,
      "longitude": 7.0337,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1655314210,
      "ems": null
    },
    {
      "latitude": 50.753174,
      "longitude": 7.03459,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1655314213,
      "ems": null
    },
    {
      "latitude": 50.752132,
      "longitude": 7.035599,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1655314216,
      "ems": null
    },
    {
      "latitude": 50.751156,
      "longitude": 7.036667,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1655314219,
      "ems": null
    },
    {
      "latitude": 50.750153,
      "longitude": 7.037708,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1655314222,
      "ems": null
    },
    {
      "latitude": 50.74934,
      "longitude": 7.038574,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1655314225,
      "ems": null
    },
    {
      "latitude": 50.748222,
      "longitude": 7.039719,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1655314228,
      "ems": null
    },
    {
      "latitude": 50.746216,
      "longitude": 7.041939,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1655314234,
      "ems": null
    },
    {
      "latitude": 50.744358,
      "longitude": 7.043839,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1655314240,
      "ems": null
    },
    {
      "latitude": 50.742416,
      "longitude": 7.045948,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1655314246,
      "ems": null
    },
    {
      "latitude": 50.741364,
      "longitude": 7.04721,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1655314249,
      "ems": null
    },
    {
      "latitude": 50.739532,
      "longitude": 7.049437,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1655314255,
      "ems": null
    },
    {
      "latitude": 50.738708,
      "longitude": 7.050624,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1655314258,
      "ems": null
    },
    {
      "latitude": 50.737888,
      "longitude": 7.052231,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1655314261,
      "ems": null
    },
    {
      "latitude": 50.737286,
      "longitude": 7.053833,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1655314264,
      "ems": null
    },
    {
      "latitude": 50.736771,
      "longitude": 7.055206,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1655314267,
      "ems": null
    },
    {
      "latitude": 50.736118,
      "longitude": 7.057037,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1655314270,
      "ems": null
    },
    {
      "latitude": 50.73547,
      "longitude": 7.058563,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1655314273,
      "ems": null
    },
    {
      "latitude": 50.734909,
      "longitude": 7.060126,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1655314276,
      "ems": null
    },
    {
      "latitude": 50.734268,
      "longitude": 7.061611,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1655314279,
      "ems": null
    },
    {
      "latitude": 50.733608,
      "longitude": 7.063217,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1655314282,
      "ems": null
    },
    {
      "latitude": 50.733032,
      "longitude": 7.064654,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1655314285,
      "ems": null
    },
    {
      "latitude": 50.732346,
      "longitude": 7.066139,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1655314288,
      "ems": null
    },
    {
      "latitude": 50.731476,
      "longitude": 7.067698,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1655314291,
      "ems": null
    },
    {
      "latitude": 50.730766,
      "longitude": 7.069016,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1655314294,
      "ems": null
    },
    {
      "latitude": 50.729836,
      "longitude": 7.070541,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1655314297,
      "ems": null
    },
    {
      "latitude": 50.729046,
      "longitude": 7.071991,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1655314300,
      "ems": null
    },
    {
      "latitude": 50.728161,
      "longitude": 7.073441,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1655314303,
      "ems": null
    },
    {
      "latitude": 50.72731,
      "longitude": 7.075047,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1655314306,
      "ems": null
    },
    {
      "latitude": 50.726578,
      "longitude": 7.076383,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1655314309,
      "ems": null
    },
    {
      "latitude": 50.724884,
      "longitude": 7.079649,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1655314315,
      "ems": null
    },
    {
      "latitude": 50.72327,
      "longitude": 7.082825,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1655314321,
      "ems": null
    },
    {
      "latitude": 50.721725,
      "longitude": 7.085811,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1655314327,
      "ems": null
    },
    {
      "latitude": 50.720154,
      "longitude": 7.088699,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1655314333,
      "ems": null
    },
    {
      "latitude": 50.718521,
      "longitude": 7.0916,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1655314339,
      "ems": null
    },
    {
      "latitude": 50.717545,
      "longitude": 7.093277,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1655314342,
      "ems": null
    },
    {
      "latitude": 50.715958,
      "longitude": 7.096055,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1655314348,
      "ems": null
    },
    {
      "latitude": 50.715088,
      "longitude": 7.097391,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314351,
      "ems": null
    },
    {
      "latitude": 50.714195,
      "longitude": 7.098846,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314354,
      "ems": null
    },
    {
      "latitude": 50.71257,
      "longitude": 7.101473,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1655314360,
      "ems": null
    },
    {
      "latitude": 50.710831,
      "longitude": 7.104146,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1655314366,
      "ems": null
    },
    {
      "latitude": 50.709911,
      "longitude": 7.105408,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1655314369,
      "ems": null
    },
    {
      "latitude": 50.708981,
      "longitude": 7.106628,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1655314372,
      "ems": null
    },
    {
      "latitude": 50.708221,
      "longitude": 7.107783,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314375,
      "ems": null
    },
    {
      "latitude": 50.70639,
      "longitude": 7.110678,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1655314381,
      "ems": null
    },
    {
      "latitude": 50.705627,
      "longitude": 7.112122,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1655314384,
      "ems": null
    },
    {
      "latitude": 50.704792,
      "longitude": 7.113724,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1655314387,
      "ems": null
    },
    {
      "latitude": 50.704102,
      "longitude": 7.115058,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1655314390,
      "ems": null
    },
    {
      "latitude": 50.702511,
      "longitude": 7.11792,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1655314396,
      "ems": null
    },
    {
      "latitude": 50.70153,
      "longitude": 7.119598,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1655314399,
      "ems": null
    },
    {
      "latitude": 50.699799,
      "longitude": 7.122481,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1655314405,
      "ems": null
    },
    {
      "latitude": 50.698925,
      "longitude": 7.123871,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1655314408,
      "ems": null
    },
    {
      "latitude": 50.697994,
      "longitude": 7.125397,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1655314411,
      "ems": null
    },
    {
      "latitude": 50.697109,
      "longitude": 7.126846,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314414,
      "ems": null
    },
    {
      "latitude": 50.696178,
      "longitude": 7.12822,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314417,
      "ems": null
    },
    {
      "latitude": 50.695221,
      "longitude": 7.129682,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314420,
      "ems": null
    },
    {
      "latitude": 50.694351,
      "longitude": 7.130943,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314423,
      "ems": null
    },
    {
      "latitude": 50.692501,
      "longitude": 7.133789,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314429,
      "ems": null
    },
    {
      "latitude": 50.690735,
      "longitude": 7.136511,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314435,
      "ems": null
    },
    {
      "latitude": 50.688858,
      "longitude": 7.139257,
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1655314441,
      "ems": null
    },
    {
      "latitude": 50.686066,
      "longitude": 7.143266,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1655314450,
      "ems": null
    },
    {
      "latitude": 50.684216,
      "longitude": 7.145844,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1655314456,
      "ems": null
    },
    {
      "latitude": 50.682304,
      "longitude": 7.148361,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1655314462,
      "ems": null
    },
    {
      "latitude": 50.680481,
      "longitude": 7.150838,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1655314468,
      "ems": null
    },
    {
      "latitude": 50.67765,
      "longitude": 7.154999,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1655314477,
      "ems": null
    },
    {
      "latitude": 50.675812,
      "longitude": 7.157815,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314483,
      "ems": null
    },
    {
      "latitude": 50.673706,
      "longitude": 7.16071,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1655314489,
      "ems": null
    },
    {
      "latitude": 50.6716,
      "longitude": 7.163606,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1655314495,
      "ems": null
    },
    {
      "latitude": 50.669643,
      "longitude": 7.166426,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1655314501,
      "ems": null
    },
    {
      "latitude": 50.667618,
      "longitude": 7.16988,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1655314507,
      "ems": null
    },
    {
      "latitude": 50.666748,
      "longitude": 7.171687,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1655314510,
      "ems": null
    },
    {
      "latitude": 50.665966,
      "longitude": 7.173701,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1655314513,
      "ems": null
    },
    {
      "latitude": 50.665558,
      "longitude": 7.175735,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1655314516,
      "ems": null
    },
    {
      "latitude": 50.665512,
      "longitude": 7.177686,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1655314520,
      "ems": null
    },
    {
      "latitude": 50.666153,
      "longitude": 7.180604,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1655314524,
      "ems": null
    },
    {
      "latitude": 50.666943,
      "longitude": 7.182832,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1655314528,
      "ems": null
    },
    {
      "latitude": 50.667782,
      "longitude": 7.185356,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1655314532,
      "ems": null
    },
    {
      "latitude": 50.668488,
      "longitude": 7.187444,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1655314536,
      "ems": null
    },
    {
      "latitude": 50.669312,
      "longitude": 7.189467,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1655314540,
      "ems": null
    },
    {
      "latitude": 50.670135,
      "longitude": 7.191347,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1655314544,
      "ems": null
    },
    {
      "latitude": 50.670994,
      "longitude": 7.193447,
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1655314548,
      "ems": null
    },
    {
      "latitude": 50.672436,
      "longitude": 7.198105,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1655314556,
      "ems": null
    },
    {
      "latitude": 50.672928,
      "longitude": 7.199905,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1655314560,
      "ems": null
    },
    {
      "latitude": 50.673367,
      "longitude": 7.202301,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1655314564,
      "ems": null
    },
    {
      "latitude": 50.673477,
      "longitude": 7.204062,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1655314568,
      "ems": null
    },
    {
      "latitude": 50.673386,
      "longitude": 7.206141,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1655314571,
      "ems": null
    },
    {
      "latitude": 50.673088,
      "longitude": 7.208099,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1655314574,
      "ems": null
    },
    {
      "latitude": 50.672668,
      "longitude": 7.209625,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1655314577,
      "ems": null
    },
    {
      "latitude": 50.672104,
      "longitude": 7.211188,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1655314580,
      "ems": null
    },
    {
      "latitude": 50.671463,
      "longitude": 7.212452,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1655314583,
      "ems": null
    },
    {
      "latitude": 50.670437,
      "longitude": 7.214009,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1655314586,
      "ems": null
    },
    {
      "latitude": 50.669357,
      "longitude": 7.215199,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1655314589,
      "ems": null
    },
    {
      "latitude": 50.668339,
      "longitude": 7.216087,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1655314591,
      "ems": null
    },
    {
      "latitude": 50.66713,
      "longitude": 7.21683,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1655314594,
      "ems": null
    },
    {
      "latitude": 50.665924,
      "longitude": 7.217295,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1655314597,
      "ems": null
    },
    {
      "latitude": 50.664707,
      "longitude": 7.217572,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1655314600,
      "ems": null
    },
    {
      "latitude": 50.663498,
      "longitude": 7.217512,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1655314604,
      "ems": null
    },
    {
      "latitude": 50.662354,
      "longitude": 7.217295,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1655314607,
      "ems": null
    },
    {
      "latitude": 50.660938,
      "longitude": 7.216533,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1655314609,
      "ems": null
    },
    {
      "latitude": 50.65979,
      "longitude": 7.215488,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1655314612,
      "ems": null
    },
    {
      "latitude": 50.659149,
      "longitude": 7.214621,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1655314616,
      "ems": null
    },
    {
      "latitude": 50.658234,
      "longitude": 7.212741,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1655314618,
      "ems": null
    },
    {
      "latitude": 50.657772,
      "longitude": 7.210669,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1655314621,
      "ems": null
    },
    {
      "latitude": 50.657772,
      "longitude": 7.210298,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1655314622,
      "ems": null
    },
    {
      "latitude": 50.65773,
      "longitude": 7.207393,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1655314626,
      "ems": null
    },
    {
      "latitude": 50.658051,
      "longitude": 7.205695,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1655314629,
      "ems": null
    },
    {
      "latitude": 50.658691,
      "longitude": 7.203923,
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1655314632,
      "ems": null
    },
    {
      "latitude": 50.659561,
      "longitude": 7.202478,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1655314635,
      "ems": null
    },
    {
      "latitude": 50.660332,
      "longitude": 7.201464,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1655314638,
      "ems": null
    },
    {
      "latitude": 50.661346,
      "longitude": 7.200309,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1655314641,
      "ems": null
    },
    {
      "latitude": 50.66238,
      "longitude": 7.199237,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1655314644,
      "ems": null
    },
    {
      "latitude": 50.663219,
      "longitude": 7.198421,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1655314647,
      "ems": null
    },
    {
      "latitude": 50.664459,
      "longitude": 7.197346,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655314650,
      "ems": null
    },
    {
      "latitude": 50.665649,
      "longitude": 7.196406,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655314653,
      "ems": null
    },
    {
      "latitude": 50.666618,
      "longitude": 7.195525,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655314656,
      "ems": null
    },
    {
      "latitude": 50.667755,
      "longitude": 7.194527,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655314659,
      "ems": null
    },
    {
      "latitude": 50.668713,
      "longitude": 7.193744,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1655314662,
      "ems": null
    },
    {
      "latitude": 50.669785,
      "longitude": 7.192705,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1655314665,
      "ems": null
    },
    {
      "latitude": 50.6702,
      "longitude": 7.192333,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655314668,
      "ems": null
    },
    {
      "latitude": 50.671692,
      "longitude": 7.191072,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655314671,
      "ems": null
    },
    {
      "latitude": 50.673973,
      "longitude": 7.189026,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1655314677,
      "ems": null
    },
    {
      "latitude": 50.676022,
      "longitude": 7.187195,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1655314683,
      "ems": null
    },
    {
      "latitude": 50.677975,
      "longitude": 7.185287,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1655314689,
      "ems": null
    },
    {
      "latitude": 50.679977,
      "longitude": 7.183456,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1655314695,
      "ems": null
    },
    {
      "latitude": 50.681934,
      "longitude": 7.181778,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1655314701,
      "ems": null
    },
    {
      "latitude": 50.684052,
      "longitude": 7.180011,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655314707,
      "ems": null
    },
    {
      "latitude": 50.686249,
      "longitude": 7.178304,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1655314713,
      "ems": null
    },
    {
      "latitude": 50.687347,
      "longitude": 7.177561,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1655314716,
      "ems": null
    },
    {
      "latitude": 50.688217,
      "longitude": 7.176895,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1655314718,
      "ems": null
    },
    {
      "latitude": 50.68895,
      "longitude": 7.176448,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1655314722,
      "ems": null
    },
    {
      "latitude": 50.690506,
      "longitude": 7.175408,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1655314726,
      "ems": null
    },
    {
      "latitude": 50.691895,
      "longitude": 7.174606,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1655314730,
      "ems": null
    },
    {
      "latitude": 50.693573,
      "longitude": 7.173479,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1655314734,
      "ems": null
    },
    {
      "latitude": 50.696178,
      "longitude": 7.17186,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1655314742,
      "ems": null
    },
    {
      "latitude": 50.698288,
      "longitude": 7.170509,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1655314748,
      "ems": null
    },
    {
      "latitude": 50.700043,
      "longitude": 7.169342,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1655314754,
      "ems": null
    },
    {
      "latitude": 50.701115,
      "longitude": 7.168503,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1655314757,
      "ems": null
    },
    {
      "latitude": 50.702362,
      "longitude": 7.167466,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1655314760,
      "ems": null
    },
    {
      "latitude": 50.703346,
      "longitude": 7.166595,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1655314763,
      "ems": null
    },
    {
      "latitude": 50.705521,
      "longitude": 7.164942,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1655314769,
      "ems": null
    },
    {
      "latitude": 50.706299,
      "longitude": 7.164348,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1655314772,
      "ems": null
    },
    {
      "latitude": 50.707581,
      "longitude": 7.163309,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655314775,
      "ems": null
    },
    {
      "latitude": 50.708542,
      "longitude": 7.162344,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1655314778,
      "ems": null
    },
    {
      "latitude": 50.708889,
      "longitude": 7.162018,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1655314781,
      "ems": null
    },
    {
      "latitude": 50.71019,
      "longitude": 7.160568,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1655314784,
      "ems": null
    },
    {
      "latitude": 50.711121,
      "longitude": 7.159271,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1655314787,
      "ems": null
    },
    {
      "latitude": 50.712067,
      "longitude": 7.157964,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1655314790,
      "ems": null
    },
    {
      "latitude": 50.712845,
      "longitude": 7.156999,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1655314793,
      "ems": null
    },
    {
      "latitude": 50.713913,
      "longitude": 7.155762,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1655314795,
      "ems": null
    },
    {
      "latitude": 50.714939,
      "longitude": 7.154617,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1655314799,
      "ems": null
    },
    {
      "latitude": 50.71587,
      "longitude": 7.153625,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1655314802,
      "ems": null
    },
    {
      "latitude": 50.716736,
      "longitude": 7.152619,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1655314805,
      "ems": null
    },
    {
      "latitude": 50.717056,
      "longitude": 7.152322,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1655314808,
      "ems": null
    },
    {
      "latitude": 50.719406,
      "longitude": 7.149429,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1655314814,
      "ems": null
    },
    {
      "latitude": 50.72113,
      "longitude": 7.147141,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1655314820,
      "ems": null
    },
    {
      "latitude": 50.722824,
      "longitude": 7.144973,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1655314826,
      "ems": null
    },
    {
      "latitude": 50.724575,
      "longitude": 7.142868,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1655314832,
      "ems": null
    },
    {
      "latitude": 50.726303,
      "longitude": 7.140668,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1655314838,
      "ems": null
    },
    {
      "latitude": 50.727997,
      "longitude": 7.13896,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1655314844,
      "ems": null
    },
    {
      "latitude": 50.729279,
      "longitude": 7.138218,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1655314848,
      "ems": null
    },
    {
      "latitude": 50.729603,
      "longitude": 7.138062,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1655314852,
      "ems": null
    },
    {
      "latitude": 50.731838,
      "longitude": 7.137833,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1655314856,
      "ems": null
    },
    {
      "latitude": 50.733139,
      "longitude": 7.138138,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1655314860,
      "ems": null
    },
    {
      "latitude": 50.734444,
      "longitude": 7.138519,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1655314864,
      "ems": null
    },
    {
      "latitude": 50.735779,
      "longitude": 7.139183,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1655314868,
      "ems": null
    },
    {
      "latitude": 50.736511,
      "longitude": 7.139628,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1655314871,
      "ems": null
    },
    {
      "latitude": 50.737564,
      "longitude": 7.140427,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1655314874,
      "ems": null
    },
    {
      "latitude": 50.738525,
      "longitude": 7.141039,
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1655314877,
      "ems": null
    },
    {
      "latitude": 50.73938,
      "longitude": 7.141571,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1655314880,
      "ems": null
    },
    {
      "latitude": 50.740356,
      "longitude": 7.142227,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1655314883,
      "ems": null
    },
    {
      "latitude": 50.741226,
      "longitude": 7.142821,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1655314886,
      "ems": null
    },
    {
      "latitude": 50.742096,
      "longitude": 7.143489,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1655314889,
      "ems": null
    },
    {
      "latitude": 50.743057,
      "longitude": 7.144305,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1655314892,
      "ems": null
    },
    {
      "latitude": 50.743755,
      "longitude": 7.144928,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1655314895,
      "ems": null
    },
    {
      "latitude": 50.744312,
      "longitude": 7.145538,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1655314898,
      "ems": null
    },
    {
      "latitude": 50.745338,
      "longitude": 7.147446,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1655314901,
      "ems": null
    },
    {
      "latitude": 50.745708,
      "longitude": 7.149124,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1655314904,
      "ems": null
    },
    {
      "latitude": 50.745758,
      "longitude": 7.150764,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1655314907,
      "ems": null
    },
    {
      "latitude": 50.745758,
      "longitude": 7.151566,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1655314910,
      "ems": null
    },
    {
      "latitude": 50.745667,
      "longitude": 7.153733,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1655314913,
      "ems": null
    },
    {
      "latitude": 50.745571,
      "longitude": 7.155533,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1655314916,
      "ems": null
    },
    {
      "latitude": 50.745525,
      "longitude": 7.156982,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1655314919,
      "ems": null
    },
    {
      "latitude": 50.745476,
      "longitude": 7.158356,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1655314922,
      "ems": null
    },
    {
      "latitude": 50.745438,
      "longitude": 7.159968,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1655314925,
      "ems": null
    },
    {
      "latitude": 50.745483,
      "longitude": 7.161304,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1655314928,
      "ems": null
    },
    {
      "latitude": 50.745476,
      "longitude": 7.162628,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1655314931,
      "ems": null
    },
    {
      "latitude": 50.745483,
      "longitude": 7.164942,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1655314937,
      "ems": null
    },
    {
      "latitude": 50.745483,
      "longitude": 7.166798,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1655314940,
      "ems": null
    },
    {
      "latitude": 50.745525,
      "longitude": 7.167969,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1655314943,
      "ems": null
    },
    {
      "latitude": 50.745571,
      "longitude": 7.169266,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1655314946,
      "ems": null
    },
    {
      "latitude": 50.745667,
      "longitude": 7.170658,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1655314949,
      "ems": null
    },
    {
      "latitude": 50.745712,
      "longitude": 7.171548,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1655314952,
      "ems": null
    },
    {
      "latitude": 50.745804,
      "longitude": 7.173256,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1655314955,
      "ems": null
    },
    {
      "latitude": 50.745895,
      "longitude": 7.174443,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1655314958,
      "ems": null
    },
    {
      "latitude": 50.74617,
      "longitude": 7.176076,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1655314961,
      "ems": null
    },
    {
      "latitude": 50.746502,
      "longitude": 7.1772,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1655314964,
      "ems": null
    },
    {
      "latitude": 50.746826,
      "longitude": 7.178497,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1655314967,
      "ems": null
    },
    {
      "latitude": 50.7472,
      "longitude": 7.179871,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1655314970,
      "ems": null
    },
    {
      "latitude": 50.747524,
      "longitude": 7.181091,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1655314973,
      "ems": null
    },
    {
      "latitude": 50.747864,
      "longitude": 7.182312,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1655314976,
      "ems": null
    },
    {
      "latitude": 50.748272,
      "longitude": 7.183609,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1655314979,
      "ems": null
    },
    {
      "latitude": 50.748596,
      "longitude": 7.184677,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1655314982,
      "ems": null
    },
    {
      "latitude": 50.749062,
      "longitude": 7.186356,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1655314985,
      "ems": null
    },
    {
      "latitude": 50.749695,
      "longitude": 7.188993,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1655314991,
      "ems": null
    },
    {
      "latitude": 50.749947,
      "longitude": 7.190323,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1655314994,
      "ems": null
    },
    {
      "latitude": 50.750134,
      "longitude": 7.191467,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1655314997,
      "ems": null
    },
    {
      "latitude": 50.750923,
      "longitude": 7.193985,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1655315003,
      "ems": null
    },
    {
      "latitude": 50.751663,
      "longitude": 7.195154,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1655315006,
      "ems": null
    },
    {
      "latitude": 50.752396,
      "longitude": 7.195971,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1655315009,
      "ems": null
    },
    {
      "latitude": 50.753128,
      "longitude": 7.196639,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1655315012,
      "ems": null
    },
    {
      "latitude": 50.753948,
      "longitude": 7.197342,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1655315015,
      "ems": null
    },
    {
      "latitude": 50.75473,
      "longitude": 7.197901,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1655315018,
      "ems": null
    },
    {
      "latitude": 50.75528,
      "longitude": 7.198272,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1655315021,
      "ems": null
    },
    {
      "latitude": 50.756279,
      "longitude": 7.198715,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1655315024,
      "ems": null
    },
    {
      "latitude": 50.757301,
      "longitude": 7.199097,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1655315027,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 7.199097,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1655315034,
      "ems": null
    },
    {
      "latitude": 50.759861,
      "longitude": 7.198868,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1655315038,
      "ems": null
    },
    {
      "latitude": 50.760513,
      "longitude": 7.198181,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1655315039,
      "ems": null
    },
    {
      "latitude": 50.761353,
      "longitude": 7.196884,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1655315043,
      "ems": null
    },
    {
      "latitude": 50.76178,
      "longitude": 7.195302,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1655315047,
      "ems": null
    },
    {
      "latitude": 50.762142,
      "longitude": 7.193604,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1655315051,
      "ems": null
    },
    {
      "latitude": 50.762516,
      "longitude": 7.192001,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1655315055,
      "ems": null
    },
    {
      "latitude": 50.762886,
      "longitude": 7.19017,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1655315059,
      "ems": null
    },
    {
      "latitude": 50.763351,
      "longitude": 7.188263,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1655315063,
      "ems": null
    },
    {
      "latitude": 50.763725,
      "longitude": 7.186813,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1655315067,
      "ems": null
    },
    {
      "latitude": 50.764191,
      "longitude": 7.184753,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1655315071,
      "ems": null
    },
    {
      "latitude": 50.764843,
      "longitude": 7.182007,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1655315078,
      "ems": null
    },
    {
      "latitude": 50.764984,
      "longitude": 7.181091,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1655315079,
      "ems": null
    },
    {
      "latitude": 50.765808,
      "longitude": 7.177264,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1655315088,
      "ems": null
    },
    {
      "latitude": 50.766724,
      "longitude": 7.173182,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1655315097,
      "ems": null
    },
    {
      "latitude": 50.767044,
      "longitude": 7.167985,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1655315107,
      "ems": null
    },
    {
      "latitude": 50.767124,
      "longitude": 7.166061,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1655315111,
      "ems": null
    },
    {
      "latitude": 50.767265,
      "longitude": 7.164078,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1655315115,
      "ems": null
    },
    {
      "latitude": 50.767498,
      "longitude": 7.162552,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1655315119,
      "ems": null
    },
    {
      "latitude": 50.768147,
      "longitude": 7.158661,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1655315127,
      "ems": null
    },
    {
      "latitude": 50.769264,
      "longitude": 7.154007,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1655315135,
      "ems": null
    },
    {
      "latitude": 50.769653,
      "longitude": 7.152545,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1655315139,
      "ems": null
    },
    {
      "latitude": 50.770615,
      "longitude": 7.149947,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1655315143,
      "ems": null
    },
    {
      "latitude": 50.771301,
      "longitude": 7.148091,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1655315147,
      "ems": null
    },
    {
      "latitude": 50.77206,
      "longitude": 7.14592,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1655315151,
      "ems": null
    },
    {
      "latitude": 50.772446,
      "longitude": 7.144751,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1655315153,
      "ems": null
    },
    {
      "latitude": 50.772766,
      "longitude": 7.142598,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1655315157,
      "ems": null
    },
    {
      "latitude": 50.772526,
      "longitude": 7.140961,
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
        "fpm": 2112,
        "ms": 10.7
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1655315160,
      "ems": null
    },
    {
      "latitude": 50.772125,
      "longitude": 7.14,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1655315163,
      "ems": null
    },
    {
      "latitude": 50.7715,
      "longitude": 7.13913,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1655315164,
      "ems": null
    },
    {
      "latitude": 50.770203,
      "longitude": 7.137996,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1655315168,
      "ems": null
    },
    {
      "latitude": 50.769077,
      "longitude": 7.137299,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1655315171,
      "ems": null
    },
    {
      "latitude": 50.768051,
      "longitude": 7.136734,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1655315174,
      "ems": null
    },
    {
      "latitude": 50.766953,
      "longitude": 7.13614,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1655315177,
      "ems": null
    },
    {
      "latitude": 50.765915,
      "longitude": 7.135696,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1655315180,
      "ems": null
    },
    {
      "latitude": 50.764656,
      "longitude": 7.135162,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1655315183,
      "ems": null
    },
    {
      "latitude": 50.763584,
      "longitude": 7.134705,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1655315187,
      "ems": null
    },
    {
      "latitude": 50.762329,
      "longitude": 7.134323,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1655315190,
      "ems": null
    },
    {
      "latitude": 50.761139,
      "longitude": 7.134061,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1655315193,
      "ems": null
    },
    {
      "latitude": 50.759815,
      "longitude": 7.134094,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1655315196,
      "ems": null
    },
    {
      "latitude": 50.758606,
      "longitude": 7.134171,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1655315199,
      "ems": null
    },
    {
      "latitude": 50.757442,
      "longitude": 7.134552,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1655315202,
      "ems": null
    },
    {
      "latitude": 50.756287,
      "longitude": 7.1351,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1655315205,
      "ems": null
    },
    {
      "latitude": 50.75544,
      "longitude": 7.135773,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1655315208,
      "ems": null
    },
    {
      "latitude": 50.754318,
      "longitude": 7.137031,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1655315211,
      "ems": null
    },
    {
      "latitude": 50.753677,
      "longitude": 7.138144,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1655315214,
      "ems": null
    },
    {
      "latitude": 50.752899,
      "longitude": 7.139777,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1655315217,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.141113,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1655315220,
      "ems": null
    },
    {
      "latitude": 50.752087,
      "longitude": 7.142715,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1655315223,
      "ems": null
    },
    {
      "latitude": 50.751808,
      "longitude": 7.14447,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1655315226,
      "ems": null
    },
    {
      "latitude": 50.75148,
      "longitude": 7.146235,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1655315229,
      "ems": null
    },
    {
      "latitude": 50.751251,
      "longitude": 7.147943,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1655315232,
      "ems": null
    },
    {
      "latitude": 50.750885,
      "longitude": 7.149576,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1655315235,
      "ems": null
    },
    {
      "latitude": 50.750565,
      "longitude": 7.150912,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1655315238,
      "ems": null
    },
    {
      "latitude": 50.750134,
      "longitude": 7.152557,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1655315241,
      "ems": null
    },
    {
      "latitude": 50.74976,
      "longitude": 7.154083,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1655315244,
      "ems": null
    },
    {
      "latitude": 50.749374,
      "longitude": 7.155737,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1655315247,
      "ems": null
    },
    {
      "latitude": 50.749016,
      "longitude": 7.157516,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1655315250,
      "ems": null
    },
    {
      "latitude": 50.748322,
      "longitude": 7.160414,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1655315256,
      "ems": null
    },
    {
      "latitude": 50.748131,
      "longitude": 7.161255,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1655315257,
      "ems": null
    },
    {
      "latitude": 50.747574,
      "longitude": 7.163162,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1655315261,
      "ems": null
    },
    {
      "latitude": 50.747131,
      "longitude": 7.165758,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1655315268,
      "ems": null
    },
    {
      "latitude": 50.747223,
      "longitude": 7.167094,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1655315271,
      "ems": null
    },
    {
      "latitude": 50.747341,
      "longitude": 7.168503,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1655315274,
      "ems": null
    },
    {
      "latitude": 50.747452,
      "longitude": 7.169767,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1655315276,
      "ems": null
    },
    {
      "latitude": 50.747635,
      "longitude": 7.171251,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1655315280,
      "ems": null
    },
    {
      "latitude": 50.747726,
      "longitude": 7.172216,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1655315283,
      "ems": null
    },
    {
      "latitude": 50.747852,
      "longitude": 7.173615,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1655315286,
      "ems": null
    },
    {
      "latitude": 50.748039,
      "longitude": 7.174911,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1655315289,
      "ems": null
    },
    {
      "latitude": 50.748222,
      "longitude": 7.176361,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1655315292,
      "ems": null
    },
    {
      "latitude": 50.748413,
      "longitude": 7.177487,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1655315294,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 7.178802,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1655315297,
      "ems": null
    },
    {
      "latitude": 50.748829,
      "longitude": 7.180099,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1655315301,
      "ems": null
    },
    {
      "latitude": 50.749062,
      "longitude": 7.182617,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1655315306,
      "ems": null
    },
    {
      "latitude": 50.749294,
      "longitude": 7.185516,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1655315312,
      "ems": null
    },
    {
      "latitude": 50.749603,
      "longitude": 7.188622,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1655315319,
      "ems": null
    },
    {
      "latitude": 50.749969,
      "longitude": 7.191294,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1655315325,
      "ems": null
    },
    {
      "latitude": 50.750225,
      "longitude": 7.192612,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1655315328,
      "ems": null
    },
    {
      "latitude": 50.750645,
      "longitude": 7.193985,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1655315331,
      "ems": null
    },
    {
      "latitude": 50.751068,
      "longitude": 7.195154,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1655315334,
      "ems": null
    },
    {
      "latitude": 50.751484,
      "longitude": 7.196198,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1655315337,
      "ems": null
    },
    {
      "latitude": 50.752075,
      "longitude": 7.197307,
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1655315340,
      "ems": null
    },
    {
      "latitude": 50.752598,
      "longitude": 7.198257,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1655315343,
      "ems": null
    },
    {
      "latitude": 50.75322,
      "longitude": 7.199237,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1655315346,
      "ems": null
    },
    {
      "latitude": 50.753769,
      "longitude": 7.199979,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1655315349,
      "ems": null
    },
    {
      "latitude": 50.754509,
      "longitude": 7.200775,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1655315352,
      "ems": null
    },
    {
      "latitude": 50.755299,
      "longitude": 7.201233,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1655315355,
      "ems": null
    },
    {
      "latitude": 50.756058,
      "longitude": 7.20139,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1655315358,
      "ems": null
    },
    {
      "latitude": 50.757069,
      "longitude": 7.201157,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1655315361,
      "ems": null
    },
    {
      "latitude": 50.757797,
      "longitude": 7.20087,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1655315364,
      "ems": null
    },
    {
      "latitude": 50.758392,
      "longitude": 7.200647,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1655315367,
      "ems": null
    },
    {
      "latitude": 50.759399,
      "longitude": 7.200128,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1655315370,
      "ems": null
    },
    {
      "latitude": 50.759995,
      "longitude": 7.199608,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1655315373,
      "ems": null
    },
    {
      "latitude": 50.760773,
      "longitude": 7.198792,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1655315376,
      "ems": null
    },
    {
      "latitude": 50.761368,
      "longitude": 7.19753,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1655315379,
      "ems": null
    },
    {
      "latitude": 50.761585,
      "longitude": 7.196579,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1655315382,
      "ems": null
    },
    {
      "latitude": 50.761909,
      "longitude": 7.194901,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1655315385,
      "ems": null
    },
    {
      "latitude": 50.7621,
      "longitude": 7.193521,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1655315388,
      "ems": null
    },
    {
      "latitude": 50.762375,
      "longitude": 7.19223,
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1655315391,
      "ems": null
    },
    {
      "latitude": 50.76265,
      "longitude": 7.191145,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1655315394,
      "ems": null
    },
    {
      "latitude": 50.763016,
      "longitude": 7.189958,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1655315397,
      "ems": null
    },
    {
      "latitude": 50.76326,
      "longitude": 7.188797,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1655315400,
      "ems": null
    },
    {
      "latitude": 50.763565,
      "longitude": 7.187582,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1655315403,
      "ems": null
    },
    {
      "latitude": 50.763725,
      "longitude": 7.186508,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1655315405,
      "ems": null
    },
    {
      "latitude": 50.764004,
      "longitude": 7.185059,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1655315409,
      "ems": null
    },
    {
      "latitude": 50.764519,
      "longitude": 7.182617,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1655315415,
      "ems": null
    },
    {
      "latitude": 50.765579,
      "longitude": 7.178378,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1655315425,
      "ems": null
    },
    {
      "latitude": 50.766052,
      "longitude": 7.176361,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1655315430,
      "ems": null
    },
    {
      "latitude": 50.767044,
      "longitude": 7.171771,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1655315440,
      "ems": null
    }
  ]
};
