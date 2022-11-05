import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220711LPCSLPCS",
    callsign: "RVP237",
    name: "RVP237 RWY35",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 6, 11, 21, 0).getTime(),
    arrival: new Date(2022, 6, 11, 22, 0).getTime(),
    singleEnginePistonTime: 60,
    picTime: 0,
    dualTime: 60,
    nightTime: 60,
    landings: {
      day: 0,
      night: 6,
    },
  },
  aircraft: {
    model: {
      code: "P208",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "3D1229",
      registration: "CS-DHU",
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
  track: [
    {
      "latitude": 38.718487,
      "longitude": -9.352634,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 13,
        "kts": 7,
        "mph": 8.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 283,
      "squawk": "0",
      "timestamp": 1657574061,
      "ems": null
    },
    {
      "latitude": 38.718647,
      "longitude": -9.352844,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 13,
        "kts": 7,
        "mph": 8.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "0",
      "timestamp": 1657574068,
      "ems": null
    },
    {
      "latitude": 38.718922,
      "longitude": -9.352948,
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
      "heading": 343,
      "squawk": "0",
      "timestamp": 1657574086,
      "ems": null
    },
    {
      "latitude": 38.719139,
      "longitude": -9.353037,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 38.9,
        "kts": 21,
        "mph": 24.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "0",
      "timestamp": 1657574089,
      "ems": null
    },
    {
      "latitude": 38.719872,
      "longitude": -9.353302,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574094,
      "ems": null
    },
    {
      "latitude": 38.720272,
      "longitude": -9.35344,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574097,
      "ems": null
    },
    {
      "latitude": 38.720486,
      "longitude": -9.353516,
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574098,
      "ems": null
    },
    {
      "latitude": 38.720798,
      "longitude": -9.353649,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574099,
      "ems": null
    },
    {
      "latitude": 38.722687,
      "longitude": -9.354381,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657574108,
      "ems": null
    },
    {
      "latitude": 38.72406,
      "longitude": -9.354918,
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
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657574114,
      "ems": null
    },
    {
      "latitude": 38.725479,
      "longitude": -9.355515,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574120,
      "ems": null
    },
    {
      "latitude": 38.726852,
      "longitude": -9.356052,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657574126,
      "ems": null
    },
    {
      "latitude": 38.728016,
      "longitude": -9.356384,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657574132,
      "ems": null
    },
    {
      "latitude": 38.728455,
      "longitude": -9.35653,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657574135,
      "ems": null
    },
    {
      "latitude": 38.729233,
      "longitude": -9.356709,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657574139,
      "ems": null
    },
    {
      "latitude": 38.729507,
      "longitude": -9.35675,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657574140,
      "ems": null
    },
    {
      "latitude": 38.730377,
      "longitude": -9.357008,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574146,
      "ems": null
    },
    {
      "latitude": 38.731979,
      "longitude": -9.357486,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 348,
      "squawk": "3273",
      "timestamp": 1657574154,
      "ems": null
    },
    {
      "latitude": 38.732487,
      "longitude": -9.357605,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657574156,
      "ems": null
    },
    {
      "latitude": 38.733276,
      "longitude": -9.357727,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 355,
      "squawk": "3273",
      "timestamp": 1657574160,
      "ems": null
    },
    {
      "latitude": 38.733856,
      "longitude": -9.357784,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657574163,
      "ems": null
    },
    {
      "latitude": 38.735275,
      "longitude": -9.358083,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657574169,
      "ems": null
    },
    {
      "latitude": 38.736488,
      "longitude": -9.358337,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657574175,
      "ems": null
    },
    {
      "latitude": 38.737106,
      "longitude": -9.358441,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657574178,
      "ems": null
    },
    {
      "latitude": 38.737976,
      "longitude": -9.35862,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657574181,
      "ems": null
    },
    {
      "latitude": 38.739422,
      "longitude": -9.358948,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657574187,
      "ems": null
    },
    {
      "latitude": 38.740173,
      "longitude": -9.359097,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657574190,
      "ems": null
    },
    {
      "latitude": 38.741657,
      "longitude": -9.359375,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657574196,
      "ems": null
    },
    {
      "latitude": 38.743332,
      "longitude": -9.359619,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657574202,
      "ems": null
    },
    {
      "latitude": 38.74498,
      "longitude": -9.359815,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "3273",
      "timestamp": 1657574208,
      "ems": null
    },
    {
      "latitude": 38.746628,
      "longitude": -9.360172,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574214,
      "ems": null
    },
    {
      "latitude": 38.747383,
      "longitude": -9.360657,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 328,
      "squawk": "3273",
      "timestamp": 1657574217,
      "ems": null
    },
    {
      "latitude": 38.748127,
      "longitude": -9.36145,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 313,
      "squawk": "3273",
      "timestamp": 1657574220,
      "ems": null
    },
    {
      "latitude": 38.748688,
      "longitude": -9.362382,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 301,
      "squawk": "3273",
      "timestamp": 1657574223,
      "ems": null
    },
    {
      "latitude": 38.749153,
      "longitude": -9.363708,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 292,
      "squawk": "3273",
      "timestamp": 1657574226,
      "ems": null
    },
    {
      "latitude": 38.749466,
      "longitude": -9.365248,
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
      "heading": 281,
      "squawk": "3273",
      "timestamp": 1657574229,
      "ems": null
    },
    {
      "latitude": 38.749603,
      "longitude": -9.366859,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 274,
      "squawk": "3273",
      "timestamp": 1657574232,
      "ems": null
    },
    {
      "latitude": 38.749523,
      "longitude": -9.368652,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "3273",
      "timestamp": 1657574235,
      "ems": null
    },
    {
      "latitude": 38.74929,
      "longitude": -9.370056,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "3273",
      "timestamp": 1657574238,
      "ems": null
    },
    {
      "latitude": 38.748779,
      "longitude": -9.372009,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 248,
      "squawk": "3273",
      "timestamp": 1657574241,
      "ems": null
    },
    {
      "latitude": 38.748093,
      "longitude": -9.374084,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 246,
      "squawk": "3273",
      "timestamp": 1657574244,
      "ems": null
    },
    {
      "latitude": 38.74757,
      "longitude": -9.375366,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 239,
      "squawk": "3273",
      "timestamp": 1657574247,
      "ems": null
    },
    {
      "latitude": 38.74649,
      "longitude": -9.37719,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 229,
      "squawk": "3273",
      "timestamp": 1657574250,
      "ems": null
    },
    {
      "latitude": 38.745255,
      "longitude": -9.378563,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 217,
      "squawk": "3273",
      "timestamp": 1657574253,
      "ems": null
    },
    {
      "latitude": 38.74501,
      "longitude": -9.378723,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 215,
      "squawk": "3273",
      "timestamp": 1657574254,
      "ems": null
    },
    {
      "latitude": 38.742962,
      "longitude": -9.379883,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "3273",
      "timestamp": 1657574259,
      "ems": null
    },
    {
      "latitude": 38.741318,
      "longitude": -9.380175,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 182,
      "squawk": "3273",
      "timestamp": 1657574262,
      "ems": null
    },
    {
      "latitude": 38.739796,
      "longitude": -9.380127,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657574265,
      "ems": null
    },
    {
      "latitude": 38.738617,
      "longitude": -9.379936,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 173,
      "squawk": "3273",
      "timestamp": 1657574268,
      "ems": null
    },
    {
      "latitude": 38.737198,
      "longitude": -9.379757,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "3273",
      "timestamp": 1657574270,
      "ems": null
    },
    {
      "latitude": 38.735558,
      "longitude": -9.379517,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "3273",
      "timestamp": 1657574274,
      "ems": null
    },
    {
      "latitude": 38.734314,
      "longitude": -9.379398,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "3273",
      "timestamp": 1657574277,
      "ems": null
    },
    {
      "latitude": 38.732849,
      "longitude": -9.379219,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "3273",
      "timestamp": 1657574280,
      "ems": null
    },
    {
      "latitude": 38.73143,
      "longitude": -9.3791,
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
      "heading": 175,
      "squawk": "3273",
      "timestamp": 1657574283,
      "ems": null
    },
    {
      "latitude": 38.730206,
      "longitude": -9.379028,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657574285,
      "ems": null
    },
    {
      "latitude": 38.728901,
      "longitude": -9.378906,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657574289,
      "ems": null
    },
    {
      "latitude": 38.727539,
      "longitude": -9.378801,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657574292,
      "ems": null
    },
    {
      "latitude": 38.72493,
      "longitude": -9.378563,
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
      "heading": 175,
      "squawk": "3273",
      "timestamp": 1657574298,
      "ems": null
    },
    {
      "latitude": 38.722618,
      "longitude": -9.378357,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "3273",
      "timestamp": 1657574303,
      "ems": null
    },
    {
      "latitude": 38.719639,
      "longitude": -9.378113,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657574310,
      "ems": null
    },
    {
      "latitude": 38.716984,
      "longitude": -9.377869,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657574315,
      "ems": null
    },
    {
      "latitude": 38.713959,
      "longitude": -9.377625,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657574322,
      "ems": null
    },
    {
      "latitude": 38.711445,
      "longitude": -9.37738,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657574327,
      "ems": null
    },
    {
      "latitude": 38.708633,
      "longitude": -9.37719,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 177,
      "squawk": "3273",
      "timestamp": 1657574334,
      "ems": null
    },
    {
      "latitude": 38.706326,
      "longitude": -9.377075,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 179,
      "squawk": "3273",
      "timestamp": 1657574340,
      "ems": null
    },
    {
      "latitude": 38.703735,
      "longitude": -9.376891,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "3273",
      "timestamp": 1657574346,
      "ems": null
    },
    {
      "latitude": 38.702454,
      "longitude": -9.376533,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 163,
      "squawk": "3273",
      "timestamp": 1657574349,
      "ems": null
    },
    {
      "latitude": 38.702087,
      "longitude": -9.376353,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657574350,
      "ems": null
    },
    {
      "latitude": 38.700878,
      "longitude": -9.375305,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "3273",
      "timestamp": 1657574354,
      "ems": null
    },
    {
      "latitude": 38.700272,
      "longitude": -9.374329,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 125,
      "squawk": "3273",
      "timestamp": 1657574357,
      "ems": null
    },
    {
      "latitude": 38.699806,
      "longitude": -9.37323,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 117,
      "squawk": "3273",
      "timestamp": 1657574360,
      "ems": null
    },
    {
      "latitude": 38.699432,
      "longitude": -9.372413,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 116,
      "squawk": "3273",
      "timestamp": 1657574363,
      "ems": null
    },
    {
      "latitude": 38.69902,
      "longitude": -9.371278,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "3273",
      "timestamp": 1657574366,
      "ems": null
    },
    {
      "latitude": 38.698746,
      "longitude": -9.370442,
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
      "heading": 114,
      "squawk": "3273",
      "timestamp": 1657574369,
      "ems": null
    },
    {
      "latitude": 38.69838,
      "longitude": -9.369308,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 107,
      "squawk": "3273",
      "timestamp": 1657574372,
      "ems": null
    },
    {
      "latitude": 38.698223,
      "longitude": -9.368286,
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
      "heading": 99,
      "squawk": "3273",
      "timestamp": 1657574375,
      "ems": null
    },
    {
      "latitude": 38.698132,
      "longitude": -9.367432,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 97,
      "squawk": "3273",
      "timestamp": 1657574378,
      "ems": null
    },
    {
      "latitude": 38.698036,
      "longitude": -9.366455,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "3273",
      "timestamp": 1657574381,
      "ems": null
    },
    {
      "latitude": 38.69799,
      "longitude": -9.36554,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 94,
      "squawk": "3273",
      "timestamp": 1657574384,
      "ems": null
    },
    {
      "latitude": 38.697945,
      "longitude": -9.364624,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 93,
      "squawk": "3273",
      "timestamp": 1657574387,
      "ems": null
    },
    {
      "latitude": 38.697945,
      "longitude": -9.36377,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 92,
      "squawk": "3273",
      "timestamp": 1657574390,
      "ems": null
    },
    {
      "latitude": 38.697899,
      "longitude": -9.362915,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 91,
      "squawk": "3273",
      "timestamp": 1657574393,
      "ems": null
    },
    {
      "latitude": 38.697922,
      "longitude": -9.362322,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 90,
      "squawk": "3273",
      "timestamp": 1657574396,
      "ems": null
    },
    {
      "latitude": 38.697968,
      "longitude": -9.361009,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 84,
      "squawk": "3273",
      "timestamp": 1657574399,
      "ems": null
    },
    {
      "latitude": 38.698059,
      "longitude": -9.360053,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 81,
      "squawk": "3273",
      "timestamp": 1657574402,
      "ems": null
    },
    {
      "latitude": 38.698177,
      "longitude": -9.359253,
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
      "heading": 77,
      "squawk": "3273",
      "timestamp": 1657574405,
      "ems": null
    },
    {
      "latitude": 38.698425,
      "longitude": -9.358142,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 73,
      "squawk": "3273",
      "timestamp": 1657574408,
      "ems": null
    },
    {
      "latitude": 38.698643,
      "longitude": -9.357239,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "3273",
      "timestamp": 1657574411,
      "ems": null
    },
    {
      "latitude": 38.698975,
      "longitude": -9.356172,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 68,
      "squawk": "3273",
      "timestamp": 1657574414,
      "ems": null
    },
    {
      "latitude": 38.699387,
      "longitude": -9.355097,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "3273",
      "timestamp": 1657574417,
      "ems": null
    },
    {
      "latitude": 38.699852,
      "longitude": -9.354126,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 58,
      "squawk": "3273",
      "timestamp": 1657574420,
      "ems": null
    },
    {
      "latitude": 38.700256,
      "longitude": -9.353306,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 58,
      "squawk": "3273",
      "timestamp": 1657574423,
      "ems": null
    },
    {
      "latitude": 38.700668,
      "longitude": -9.35247,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 57,
      "squawk": "3273",
      "timestamp": 1657574426,
      "ems": null
    },
    {
      "latitude": 38.701157,
      "longitude": -9.351563,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 51,
      "squawk": "3273",
      "timestamp": 1657574429,
      "ems": null
    },
    {
      "latitude": 38.701714,
      "longitude": -9.350769,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 47,
      "squawk": "3273",
      "timestamp": 1657574432,
      "ems": null
    },
    {
      "latitude": 38.702179,
      "longitude": -9.350159,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 41,
      "squawk": "3273",
      "timestamp": 1657574435,
      "ems": null
    },
    {
      "latitude": 38.702831,
      "longitude": -9.349609,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 32,
      "squawk": "3273",
      "timestamp": 1657574437,
      "ems": null
    },
    {
      "latitude": 38.703781,
      "longitude": -9.349007,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "3273",
      "timestamp": 1657574441,
      "ems": null
    },
    {
      "latitude": 38.704601,
      "longitude": -9.348694,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 10,
      "squawk": "3273",
      "timestamp": 1657574444,
      "ems": null
    },
    {
      "latitude": 38.705578,
      "longitude": -9.348694,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 357,
      "squawk": "3273",
      "timestamp": 1657574447,
      "ems": null
    },
    {
      "latitude": 38.706558,
      "longitude": -9.348877,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657574450,
      "ems": null
    },
    {
      "latitude": 38.707348,
      "longitude": -9.348999,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657574452,
      "ems": null
    },
    {
      "latitude": 38.708279,
      "longitude": -9.349243,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574456,
      "ems": null
    },
    {
      "latitude": 38.709,
      "longitude": -9.349545,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574459,
      "ems": null
    },
    {
      "latitude": 38.709862,
      "longitude": -9.349854,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574462,
      "ems": null
    },
    {
      "latitude": 38.710747,
      "longitude": -9.350098,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574465,
      "ems": null
    },
    {
      "latitude": 38.711609,
      "longitude": -9.35044,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657574468,
      "ems": null
    },
    {
      "latitude": 38.71233,
      "longitude": -9.350708,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574471,
      "ems": null
    },
    {
      "latitude": 38.713165,
      "longitude": -9.350977,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574474,
      "ems": null
    },
    {
      "latitude": 38.713898,
      "longitude": -9.351275,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657574477,
      "ems": null
    },
    {
      "latitude": 38.715542,
      "longitude": -9.351807,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574483,
      "ems": null
    },
    {
      "latitude": 38.717239,
      "longitude": -9.35241,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574489,
      "ems": null
    },
    {
      "latitude": 38.718658,
      "longitude": -9.352905,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574495,
      "ems": null
    },
    {
      "latitude": 38.720104,
      "longitude": -9.353455,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574500,
      "ems": null
    },
    {
      "latitude": 38.72168,
      "longitude": -9.354022,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574507,
      "ems": null
    },
    {
      "latitude": 38.72287,
      "longitude": -9.354441,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574513,
      "ems": null
    },
    {
      "latitude": 38.723969,
      "longitude": -9.354858,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657574519,
      "ems": null
    },
    {
      "latitude": 38.725269,
      "longitude": -9.355347,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657574526,
      "ems": null
    },
    {
      "latitude": 38.726669,
      "longitude": -9.355814,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574532,
      "ems": null
    },
    {
      "latitude": 38.728226,
      "longitude": -9.356411,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657574538,
      "ems": null
    },
    {
      "latitude": 38.729366,
      "longitude": -9.356812,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574544,
      "ems": null
    },
    {
      "latitude": 38.730392,
      "longitude": -9.357178,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 348,
      "squawk": "3273",
      "timestamp": 1657574550,
      "ems": null
    },
    {
      "latitude": 38.730881,
      "longitude": -9.357246,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657574553,
      "ems": null
    },
    {
      "latitude": 38.731415,
      "longitude": -9.357361,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 68.5,
        "kts": 37,
        "mph": 42.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657574556,
      "ems": null
    },
    {
      "latitude": 38.731976,
      "longitude": -9.357422,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657574559,
      "ems": null
    },
    {
      "latitude": 38.732254,
      "longitude": -9.357483,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657574560,
      "ems": null
    },
    {
      "latitude": 38.732533,
      "longitude": -9.357544,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657574562,
      "ems": null
    },
    {
      "latitude": 38.733627,
      "longitude": -9.357964,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 336,
      "squawk": "3273",
      "timestamp": 1657574568,
      "ems": null
    },
    {
      "latitude": 38.734131,
      "longitude": -9.358262,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 337,
      "squawk": "3273",
      "timestamp": 1657574572,
      "ems": null
    },
    {
      "latitude": 38.735325,
      "longitude": -9.358643,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574578,
      "ems": null
    },
    {
      "latitude": 38.737106,
      "longitude": -9.358799,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 358,
      "squawk": "3273",
      "timestamp": 1657574586,
      "ems": null
    },
    {
      "latitude": 38.737747,
      "longitude": -9.358826,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 1,
      "squawk": "3273",
      "timestamp": 1657574589,
      "ems": null
    },
    {
      "latitude": 38.739029,
      "longitude": -9.358978,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574595,
      "ems": null
    },
    {
      "latitude": 38.7397,
      "longitude": -9.359253,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657574598,
      "ems": null
    },
    {
      "latitude": 38.740311,
      "longitude": -9.359515,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574601,
      "ems": null
    },
    {
      "latitude": 38.741516,
      "longitude": -9.359924,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574607,
      "ems": null
    },
    {
      "latitude": 38.742233,
      "longitude": -9.360172,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574610,
      "ems": null
    },
    {
      "latitude": 38.742867,
      "longitude": -9.360352,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657574613,
      "ems": null
    },
    {
      "latitude": 38.743519,
      "longitude": -9.360535,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657574615,
      "ems": null
    },
    {
      "latitude": 38.744217,
      "longitude": -9.360779,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574618,
      "ems": null
    },
    {
      "latitude": 38.744961,
      "longitude": -9.360962,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574622,
      "ems": null
    },
    {
      "latitude": 38.746353,
      "longitude": -9.361426,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574627,
      "ems": null
    },
    {
      "latitude": 38.74704,
      "longitude": -9.361606,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657574630,
      "ems": null
    },
    {
      "latitude": 38.747757,
      "longitude": -9.361755,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657574633,
      "ems": null
    },
    {
      "latitude": 38.748501,
      "longitude": -9.361877,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657574636,
      "ems": null
    },
    {
      "latitude": 38.749329,
      "longitude": -9.362382,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 330,
      "squawk": "3273",
      "timestamp": 1657574640,
      "ems": null
    },
    {
      "latitude": 38.749924,
      "longitude": -9.362979,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 316,
      "squawk": "3273",
      "timestamp": 1657574642,
      "ems": null
    },
    {
      "latitude": 38.750381,
      "longitude": -9.363755,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 309,
      "squawk": "3273",
      "timestamp": 1657574645,
      "ems": null
    },
    {
      "latitude": 38.750793,
      "longitude": -9.365129,
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
      "heading": 285,
      "squawk": "3273",
      "timestamp": 1657574648,
      "ems": null
    },
    {
      "latitude": 38.750919,
      "longitude": -9.366638,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 273,
      "squawk": "3273",
      "timestamp": 1657574651,
      "ems": null
    },
    {
      "latitude": 38.750748,
      "longitude": -9.368412,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 260,
      "squawk": "3273",
      "timestamp": 1657574654,
      "ems": null
    },
    {
      "latitude": 38.750336,
      "longitude": -9.369905,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 246,
      "squawk": "3273",
      "timestamp": 1657574657,
      "ems": null
    },
    {
      "latitude": 38.749603,
      "longitude": -9.371576,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 238,
      "squawk": "3273",
      "timestamp": 1657574661,
      "ems": null
    },
    {
      "latitude": 38.748779,
      "longitude": -9.373047,
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
      "heading": 234,
      "squawk": "3273",
      "timestamp": 1657574663,
      "ems": null
    },
    {
      "latitude": 38.747772,
      "longitude": -9.374801,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 233,
      "squawk": "3273",
      "timestamp": 1657574667,
      "ems": null
    },
    {
      "latitude": 38.746216,
      "longitude": -9.376712,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 217,
      "squawk": "3273",
      "timestamp": 1657574671,
      "ems": null
    },
    {
      "latitude": 38.744751,
      "longitude": -9.377667,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "3273",
      "timestamp": 1657574675,
      "ems": null
    },
    {
      "latitude": 38.743103,
      "longitude": -9.378144,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 188,
      "squawk": "3273",
      "timestamp": 1657574678,
      "ems": null
    },
    {
      "latitude": 38.741684,
      "longitude": -9.378085,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 174,
      "squawk": "3273",
      "timestamp": 1657574681,
      "ems": null
    },
    {
      "latitude": 38.740398,
      "longitude": -9.377747,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657574684,
      "ems": null
    },
    {
      "latitude": 38.739143,
      "longitude": -9.377319,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 163,
      "squawk": "3273",
      "timestamp": 1657574687,
      "ems": null
    },
    {
      "latitude": 38.737793,
      "longitude": -9.376771,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657574690,
      "ems": null
    },
    {
      "latitude": 38.736694,
      "longitude": -9.376353,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "3273",
      "timestamp": 1657574693,
      "ems": null
    },
    {
      "latitude": 38.735233,
      "longitude": -9.375793,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657574696,
      "ems": null
    },
    {
      "latitude": 38.734039,
      "longitude": -9.375398,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657574699,
      "ems": null
    },
    {
      "latitude": 38.732765,
      "longitude": -9.375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "3273",
      "timestamp": 1657574702,
      "ems": null
    },
    {
      "latitude": 38.73151,
      "longitude": -9.374634,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 167,
      "squawk": "3273",
      "timestamp": 1657574706,
      "ems": null
    },
    {
      "latitude": 38.730286,
      "longitude": -9.374323,
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
      "heading": 167,
      "squawk": "3273",
      "timestamp": 1657574708,
      "ems": null
    },
    {
      "latitude": 38.727676,
      "longitude": -9.373548,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 167,
      "squawk": "3273",
      "timestamp": 1657574714,
      "ems": null
    },
    {
      "latitude": 38.7262,
      "longitude": -9.373169,
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
      "heading": 167,
      "squawk": "3273",
      "timestamp": 1657574718,
      "ems": null
    },
    {
      "latitude": 38.723419,
      "longitude": -9.372353,
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
      "heading": 167,
      "squawk": "3273",
      "timestamp": 1657574724,
      "ems": null
    },
    {
      "latitude": 38.720615,
      "longitude": -9.371643,
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
      "heading": 169,
      "squawk": "3273",
      "timestamp": 1657574729,
      "ems": null
    },
    {
      "latitude": 38.717682,
      "longitude": -9.370911,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 168,
      "squawk": "3273",
      "timestamp": 1657574735,
      "ems": null
    },
    {
      "latitude": 38.714859,
      "longitude": -9.370203,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 168,
      "squawk": "3273",
      "timestamp": 1657574741,
      "ems": null
    },
    {
      "latitude": 38.711655,
      "longitude": -9.369428,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 170,
      "squawk": "3273",
      "timestamp": 1657574748,
      "ems": null
    },
    {
      "latitude": 38.710186,
      "longitude": -9.369141,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "3273",
      "timestamp": 1657574751,
      "ems": null
    },
    {
      "latitude": 38.707397,
      "longitude": -9.368651,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 172,
      "squawk": "3273",
      "timestamp": 1657574757,
      "ems": null
    },
    {
      "latitude": 38.704971,
      "longitude": -9.368054,
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
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657574763,
      "ems": null
    },
    {
      "latitude": 38.703857,
      "longitude": -9.367554,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657574766,
      "ems": null
    },
    {
      "latitude": 38.702831,
      "longitude": -9.366821,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 145,
      "squawk": "3273",
      "timestamp": 1657574769,
      "ems": null
    },
    {
      "latitude": 38.702087,
      "longitude": -9.365784,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 127,
      "squawk": "3273",
      "timestamp": 1657574772,
      "ems": null
    },
    {
      "latitude": 38.70163,
      "longitude": -9.36483,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 112,
      "squawk": "3273",
      "timestamp": 1657574775,
      "ems": null
    },
    {
      "latitude": 38.701447,
      "longitude": -9.363576,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 97,
      "squawk": "3273",
      "timestamp": 1657574778,
      "ems": null
    },
    {
      "latitude": 38.701389,
      "longitude": -9.362488,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 90,
      "squawk": "3273",
      "timestamp": 1657574781,
      "ems": null
    },
    {
      "latitude": 38.701435,
      "longitude": -9.361206,
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
      "heading": 87,
      "squawk": "3273",
      "timestamp": 1657574785,
      "ems": null
    },
    {
      "latitude": 38.701481,
      "longitude": -9.360168,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "3273",
      "timestamp": 1657574788,
      "ems": null
    },
    {
      "latitude": 38.701576,
      "longitude": -9.359131,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "3273",
      "timestamp": 1657574790,
      "ems": null
    },
    {
      "latitude": 38.701622,
      "longitude": -9.358093,
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
      "heading": 86,
      "squawk": "3273",
      "timestamp": 1657574794,
      "ems": null
    },
    {
      "latitude": 38.701721,
      "longitude": -9.357068,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 81,
      "squawk": "3273",
      "timestamp": 1657574797,
      "ems": null
    },
    {
      "latitude": 38.701859,
      "longitude": -9.355993,
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
      "heading": 81,
      "squawk": "3273",
      "timestamp": 1657574800,
      "ems": null
    },
    {
      "latitude": 38.70195,
      "longitude": -9.355097,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 78,
      "squawk": "3273",
      "timestamp": 1657574803,
      "ems": null
    },
    {
      "latitude": 38.702179,
      "longitude": -9.353903,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 77,
      "squawk": "3273",
      "timestamp": 1657574806,
      "ems": null
    },
    {
      "latitude": 38.702408,
      "longitude": -9.353007,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "3273",
      "timestamp": 1657574809,
      "ems": null
    },
    {
      "latitude": 38.702728,
      "longitude": -9.351813,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 66,
      "squawk": "3273",
      "timestamp": 1657574812,
      "ems": null
    },
    {
      "latitude": 38.703064,
      "longitude": -9.351135,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 56,
      "squawk": "3273",
      "timestamp": 1657574815,
      "ems": null
    },
    {
      "latitude": 38.703506,
      "longitude": -9.3505,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 56,
      "squawk": "3273",
      "timestamp": 1657574816,
      "ems": null
    },
    {
      "latitude": 38.704514,
      "longitude": -9.349724,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 25,
      "squawk": "3273",
      "timestamp": 1657574821,
      "ems": null
    },
    {
      "latitude": 38.705345,
      "longitude": -9.349304,
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
      "heading": 17,
      "squawk": "3273",
      "timestamp": 1657574824,
      "ems": null
    },
    {
      "latitude": 38.706184,
      "longitude": -9.34906,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 9,
      "squawk": "3273",
      "timestamp": 1657574827,
      "ems": null
    },
    {
      "latitude": 38.707302,
      "longitude": -9.34906,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "3273",
      "timestamp": 1657574830,
      "ems": null
    },
    {
      "latitude": 38.708176,
      "longitude": -9.349246,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657574833,
      "ems": null
    },
    {
      "latitude": 38.709091,
      "longitude": -9.349545,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574836,
      "ems": null
    },
    {
      "latitude": 38.709961,
      "longitude": -9.349783,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574839,
      "ems": null
    },
    {
      "latitude": 38.710934,
      "longitude": -9.350159,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657574842,
      "ems": null
    },
    {
      "latitude": 38.711723,
      "longitude": -9.350403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574845,
      "ems": null
    },
    {
      "latitude": 38.712662,
      "longitude": -9.350739,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657574848,
      "ems": null
    },
    {
      "latitude": 38.71344,
      "longitude": -9.351037,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574851,
      "ems": null
    },
    {
      "latitude": 38.714378,
      "longitude": -9.351379,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574854,
      "ems": null
    },
    {
      "latitude": 38.715309,
      "longitude": -9.351746,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574857,
      "ems": null
    },
    {
      "latitude": 38.716984,
      "longitude": -9.352295,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574863,
      "ems": null
    },
    {
      "latitude": 38.718613,
      "longitude": -9.352905,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574869,
      "ems": null
    },
    {
      "latitude": 38.720261,
      "longitude": -9.353485,
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
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574875,
      "ems": null
    },
    {
      "latitude": 38.721817,
      "longitude": -9.354082,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657574882,
      "ems": null
    },
    {
      "latitude": 38.72287,
      "longitude": -9.354441,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574887,
      "ems": null
    },
    {
      "latitude": 38.723923,
      "longitude": -9.354798,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 68.5,
        "kts": 37,
        "mph": 42.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574893,
      "ems": null
    },
    {
      "latitude": 38.724991,
      "longitude": -9.355164,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574900,
      "ems": null
    },
    {
      "latitude": 38.7262,
      "longitude": -9.355652,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657574906,
      "ems": null
    },
    {
      "latitude": 38.727585,
      "longitude": -9.356172,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657574912,
      "ems": null
    },
    {
      "latitude": 38.729042,
      "longitude": -9.356689,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574918,
      "ems": null
    },
    {
      "latitude": 38.730423,
      "longitude": -9.357127,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657574924,
      "ems": null
    },
    {
      "latitude": 38.731647,
      "longitude": -9.357422,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 348,
      "squawk": "3273",
      "timestamp": 1657574930,
      "ems": null
    },
    {
      "latitude": 38.732857,
      "longitude": -9.357788,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657574937,
      "ems": null
    },
    {
      "latitude": 38.733463,
      "longitude": -9.35791,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657574939,
      "ems": null
    },
    {
      "latitude": 38.73444,
      "longitude": -9.358215,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657574945,
      "ems": null
    },
    {
      "latitude": 38.735687,
      "longitude": -9.3585,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 348,
      "squawk": "3273",
      "timestamp": 1657574952,
      "ems": null
    },
    {
      "latitude": 38.736908,
      "longitude": -9.358765,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657574958,
      "ems": null
    },
    {
      "latitude": 38.737747,
      "longitude": -9.359097,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657574962,
      "ems": null
    },
    {
      "latitude": 38.73835,
      "longitude": -9.359314,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657574965,
      "ems": null
    },
    {
      "latitude": 38.738708,
      "longitude": -9.359456,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657574968,
      "ems": null
    },
    {
      "latitude": 38.740311,
      "longitude": -9.359934,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657574974,
      "ems": null
    },
    {
      "latitude": 38.741547,
      "longitude": -9.360232,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657574980,
      "ems": null
    },
    {
      "latitude": 38.743008,
      "longitude": -9.360535,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657574986,
      "ems": null
    },
    {
      "latitude": 38.743706,
      "longitude": -9.360657,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657574989,
      "ems": null
    },
    {
      "latitude": 38.744358,
      "longitude": -9.360779,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657574992,
      "ems": null
    },
    {
      "latitude": 38.745026,
      "longitude": -9.360888,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657574995,
      "ems": null
    },
    {
      "latitude": 38.746174,
      "longitude": -9.361206,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 348,
      "squawk": "3273",
      "timestamp": 1657575000,
      "ems": null
    },
    {
      "latitude": 38.746822,
      "longitude": -9.361267,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657575003,
      "ems": null
    },
    {
      "latitude": 38.747681,
      "longitude": -9.361188,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 12,
      "squawk": "3273",
      "timestamp": 1657575007,
      "ems": null
    },
    {
      "latitude": 38.748268,
      "longitude": -9.36084,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 31,
      "squawk": "3273",
      "timestamp": 1657575010,
      "ems": null
    },
    {
      "latitude": 38.748734,
      "longitude": -9.360232,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 49,
      "squawk": "3273",
      "timestamp": 1657575013,
      "ems": null
    },
    {
      "latitude": 38.748871,
      "longitude": -9.359993,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 55,
      "squawk": "3273",
      "timestamp": 1657575014,
      "ems": null
    },
    {
      "latitude": 38.74929,
      "longitude": -9.358948,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 59,
      "squawk": "3273",
      "timestamp": 1657575017,
      "ems": null
    },
    {
      "latitude": 38.749523,
      "longitude": -9.357849,
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
      "heading": 79,
      "squawk": "3273",
      "timestamp": 1657575020,
      "ems": null
    },
    {
      "latitude": 38.749664,
      "longitude": -9.355835,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 86,
      "squawk": "3273",
      "timestamp": 1657575024,
      "ems": null
    },
    {
      "latitude": 38.749741,
      "longitude": -9.3545,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 86,
      "squawk": "3273",
      "timestamp": 1657575027,
      "ems": null
    },
    {
      "latitude": 38.749802,
      "longitude": -9.35321,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 88,
      "squawk": "3273",
      "timestamp": 1657575031,
      "ems": null
    },
    {
      "latitude": 38.749741,
      "longitude": -9.351933,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 98,
      "squawk": "3273",
      "timestamp": 1657575033,
      "ems": null
    },
    {
      "latitude": 38.74942,
      "longitude": -9.3505,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 108,
      "squawk": "3273",
      "timestamp": 1657575036,
      "ems": null
    },
    {
      "latitude": 38.748825,
      "longitude": -9.348999,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "3273",
      "timestamp": 1657575040,
      "ems": null
    },
    {
      "latitude": 38.74794,
      "longitude": -9.347656,
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
      "heading": 136,
      "squawk": "3273",
      "timestamp": 1657575043,
      "ems": null
    },
    {
      "latitude": 38.746685,
      "longitude": -9.346497,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 148,
      "squawk": "3273",
      "timestamp": 1657575046,
      "ems": null
    },
    {
      "latitude": 38.74538,
      "longitude": -9.345703,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 158,
      "squawk": "3273",
      "timestamp": 1657575049,
      "ems": null
    },
    {
      "latitude": 38.743797,
      "longitude": -9.345154,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 166,
      "squawk": "3273",
      "timestamp": 1657575052,
      "ems": null
    },
    {
      "latitude": 38.742233,
      "longitude": -9.344648,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 166,
      "squawk": "3273",
      "timestamp": 1657575054,
      "ems": null
    },
    {
      "latitude": 38.740631,
      "longitude": -9.344171,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 166,
      "squawk": "3273",
      "timestamp": 1657575058,
      "ems": null
    },
    {
      "latitude": 38.738937,
      "longitude": -9.343634,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657575061,
      "ems": null
    },
    {
      "latitude": 38.737469,
      "longitude": -9.34314,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657575063,
      "ems": null
    },
    {
      "latitude": 38.735699,
      "longitude": -9.342529,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657575067,
      "ems": null
    },
    {
      "latitude": 38.734314,
      "longitude": -9.342021,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657575070,
      "ems": null
    },
    {
      "latitude": 38.732674,
      "longitude": -9.341431,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 163,
      "squawk": "3273",
      "timestamp": 1657575073,
      "ems": null
    },
    {
      "latitude": 38.731228,
      "longitude": -9.34082,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657575076,
      "ems": null
    },
    {
      "latitude": 38.728409,
      "longitude": -9.339274,
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
      "heading": 153,
      "squawk": "3273",
      "timestamp": 1657575082,
      "ems": null
    },
    {
      "latitude": 38.727081,
      "longitude": -9.338439,
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
      "heading": 154,
      "squawk": "3273",
      "timestamp": 1657575085,
      "ems": null
    },
    {
      "latitude": 38.725735,
      "longitude": -9.337646,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "3273",
      "timestamp": 1657575088,
      "ems": null
    },
    {
      "latitude": 38.724426,
      "longitude": -9.336826,
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
      "heading": 154,
      "squawk": "3273",
      "timestamp": 1657575091,
      "ems": null
    },
    {
      "latitude": 38.723129,
      "longitude": -9.336121,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "3273",
      "timestamp": 1657575094,
      "ems": null
    },
    {
      "latitude": 38.721863,
      "longitude": -9.335334,
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
      "heading": 155,
      "squawk": "3273",
      "timestamp": 1657575097,
      "ems": null
    },
    {
      "latitude": 38.720474,
      "longitude": -9.334595,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "3273",
      "timestamp": 1657575100,
      "ems": null
    },
    {
      "latitude": 38.717823,
      "longitude": -9.333374,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657575106,
      "ems": null
    },
    {
      "latitude": 38.715179,
      "longitude": -9.332109,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "3273",
      "timestamp": 1657575112,
      "ems": null
    },
    {
      "latitude": 38.714005,
      "longitude": -9.331604,
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
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657575115,
      "ems": null
    },
    {
      "latitude": 38.712749,
      "longitude": -9.331177,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657575118,
      "ems": null
    },
    {
      "latitude": 38.711609,
      "longitude": -9.330796,
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
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657575121,
      "ems": null
    },
    {
      "latitude": 38.710606,
      "longitude": -9.330444,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 166,
      "squawk": "3273",
      "timestamp": 1657575124,
      "ems": null
    },
    {
      "latitude": 38.70932,
      "longitude": -9.330079,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 167,
      "squawk": "3273",
      "timestamp": 1657575127,
      "ems": null
    },
    {
      "latitude": 38.708187,
      "longitude": -9.329712,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 166,
      "squawk": "3273",
      "timestamp": 1657575130,
      "ems": null
    },
    {
      "latitude": 38.706894,
      "longitude": -9.329423,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 171,
      "squawk": "3273",
      "timestamp": 1657575133,
      "ems": null
    },
    {
      "latitude": 38.705578,
      "longitude": -9.329224,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 176,
      "squawk": "3273",
      "timestamp": 1657575137,
      "ems": null
    },
    {
      "latitude": 38.704147,
      "longitude": -9.329244,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "3273",
      "timestamp": 1657575140,
      "ems": null
    },
    {
      "latitude": 38.702831,
      "longitude": -9.329468,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 190,
      "squawk": "3273",
      "timestamp": 1657575143,
      "ems": null
    },
    {
      "latitude": 38.700668,
      "longitude": -9.330318,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 202,
      "squawk": "3273",
      "timestamp": 1657575148,
      "ems": null
    },
    {
      "latitude": 38.700119,
      "longitude": -9.330617,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 207,
      "squawk": "3273",
      "timestamp": 1657575149,
      "ems": null
    },
    {
      "latitude": 38.698975,
      "longitude": -9.331573,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 215,
      "squawk": "3273",
      "timestamp": 1657575152,
      "ems": null
    },
    {
      "latitude": 38.698059,
      "longitude": -9.332647,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 224,
      "squawk": "3273",
      "timestamp": 1657575155,
      "ems": null
    },
    {
      "latitude": 38.697433,
      "longitude": -9.333618,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 230,
      "squawk": "3273",
      "timestamp": 1657575158,
      "ems": null
    },
    {
      "latitude": 38.696503,
      "longitude": -9.335449,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 242,
      "squawk": "3273",
      "timestamp": 1657575162,
      "ems": null
    },
    {
      "latitude": 38.696091,
      "longitude": -9.336826,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 251,
      "squawk": "3273",
      "timestamp": 1657575165,
      "ems": null
    },
    {
      "latitude": 38.69585,
      "longitude": -9.338013,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 256,
      "squawk": "3273",
      "timestamp": 1657575168,
      "ems": null
    },
    {
      "latitude": 38.695679,
      "longitude": -9.339514,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 266,
      "squawk": "3273",
      "timestamp": 1657575171,
      "ems": null
    },
    {
      "latitude": 38.69577,
      "longitude": -9.340589,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 282,
      "squawk": "3273",
      "timestamp": 1657575174,
      "ems": null
    },
    {
      "latitude": 38.696175,
      "longitude": -9.341858,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 293,
      "squawk": "3273",
      "timestamp": 1657575177,
      "ems": null
    },
    {
      "latitude": 38.696594,
      "longitude": -9.342797,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 302,
      "squawk": "3273",
      "timestamp": 1657575180,
      "ems": null
    },
    {
      "latitude": 38.69706,
      "longitude": -9.343689,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 308,
      "squawk": "3273",
      "timestamp": 1657575183,
      "ems": null
    },
    {
      "latitude": 38.697666,
      "longitude": -9.344482,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 317,
      "squawk": "3273",
      "timestamp": 1657575186,
      "ems": null
    },
    {
      "latitude": 38.698425,
      "longitude": -9.345126,
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
      "heading": 330,
      "squawk": "3273",
      "timestamp": 1657575189,
      "ems": null
    },
    {
      "latitude": 38.699249,
      "longitude": -9.345581,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 337,
      "squawk": "3273",
      "timestamp": 1657575192,
      "ems": null
    },
    {
      "latitude": 38.699982,
      "longitude": -9.346022,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "3273",
      "timestamp": 1657575195,
      "ems": null
    },
    {
      "latitude": 38.700668,
      "longitude": -9.34632,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657575198,
      "ems": null
    },
    {
      "latitude": 38.701584,
      "longitude": -9.346679,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575201,
      "ems": null
    },
    {
      "latitude": 38.702408,
      "longitude": -9.347036,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "3273",
      "timestamp": 1657575204,
      "ems": null
    },
    {
      "latitude": 38.703094,
      "longitude": -9.347335,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657575207,
      "ems": null
    },
    {
      "latitude": 38.703827,
      "longitude": -9.347574,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575210,
      "ems": null
    },
    {
      "latitude": 38.704605,
      "longitude": -9.347873,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657575213,
      "ems": null
    },
    {
      "latitude": 38.705338,
      "longitude": -9.348171,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657575216,
      "ems": null
    },
    {
      "latitude": 38.706139,
      "longitude": -9.34845,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575219,
      "ems": null
    },
    {
      "latitude": 38.70694,
      "longitude": -9.348708,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575222,
      "ems": null
    },
    {
      "latitude": 38.708603,
      "longitude": -9.349304,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575228,
      "ems": null
    },
    {
      "latitude": 38.709442,
      "longitude": -9.349609,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575231,
      "ems": null
    },
    {
      "latitude": 38.711117,
      "longitude": -9.35022,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575237,
      "ems": null
    },
    {
      "latitude": 38.713028,
      "longitude": -9.350891,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575244,
      "ems": null
    },
    {
      "latitude": 38.715042,
      "longitude": -9.351634,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575250,
      "ems": null
    },
    {
      "latitude": 38.716938,
      "longitude": -9.352295,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575255,
      "ems": null
    },
    {
      "latitude": 38.719437,
      "longitude": -9.353187,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575264,
      "ems": null
    },
    {
      "latitude": 38.721172,
      "longitude": -9.353821,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575270,
      "ems": null
    },
    {
      "latitude": 38.722569,
      "longitude": -9.354309,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575276,
      "ems": null
    },
    {
      "latitude": 38.723785,
      "longitude": -9.354739,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575282,
      "ems": null
    },
    {
      "latitude": 38.725067,
      "longitude": -9.355276,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575288,
      "ems": null
    },
    {
      "latitude": 38.726395,
      "longitude": -9.355754,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575294,
      "ems": null
    },
    {
      "latitude": 38.727879,
      "longitude": -9.356262,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575300,
      "ems": null
    },
    {
      "latitude": 38.729324,
      "longitude": -9.356829,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657575306,
      "ems": null
    },
    {
      "latitude": 38.730515,
      "longitude": -9.357187,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657575312,
      "ems": null
    },
    {
      "latitude": 38.731789,
      "longitude": -9.357605,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575318,
      "ems": null
    },
    {
      "latitude": 38.732849,
      "longitude": -9.358023,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575324,
      "ems": null
    },
    {
      "latitude": 38.734024,
      "longitude": -9.358459,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575331,
      "ems": null
    },
    {
      "latitude": 38.734863,
      "longitude": -9.35868,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657575336,
      "ems": null
    },
    {
      "latitude": 38.73555,
      "longitude": -9.358799,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657575340,
      "ems": null
    },
    {
      "latitude": 38.736721,
      "longitude": -9.35907,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657575346,
      "ems": null
    },
    {
      "latitude": 38.737282,
      "longitude": -9.359192,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657575349,
      "ems": null
    },
    {
      "latitude": 38.737934,
      "longitude": -9.359314,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657575352,
      "ems": null
    },
    {
      "latitude": 38.738491,
      "longitude": -9.359375,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 354,
      "squawk": "3273",
      "timestamp": 1657575355,
      "ems": null
    },
    {
      "latitude": 38.739075,
      "longitude": -9.359456,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657575358,
      "ems": null
    },
    {
      "latitude": 38.740448,
      "longitude": -9.359863,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575364,
      "ems": null
    },
    {
      "latitude": 38.741051,
      "longitude": -9.360107,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575367,
      "ems": null
    },
    {
      "latitude": 38.741776,
      "longitude": -9.360352,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575370,
      "ems": null
    },
    {
      "latitude": 38.74324,
      "longitude": -9.36084,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657575376,
      "ems": null
    },
    {
      "latitude": 38.744495,
      "longitude": -9.361206,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657575382,
      "ems": null
    },
    {
      "latitude": 38.745193,
      "longitude": -9.361389,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657575385,
      "ems": null
    },
    {
      "latitude": 38.745895,
      "longitude": -9.361606,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657575388,
      "ems": null
    },
    {
      "latitude": 38.746628,
      "longitude": -9.361725,
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
      "heading": 358,
      "squawk": "3273",
      "timestamp": 1657575391,
      "ems": null
    },
    {
      "latitude": 38.747314,
      "longitude": -9.361546,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "3273",
      "timestamp": 1657575394,
      "ems": null
    },
    {
      "latitude": 38.747894,
      "longitude": -9.361023,
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
      "heading": 44,
      "squawk": "3273",
      "timestamp": 1657575397,
      "ems": null
    },
    {
      "latitude": 38.748322,
      "longitude": -9.360291,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 58,
      "squawk": "3273",
      "timestamp": 1657575400,
      "ems": null
    },
    {
      "latitude": 38.748638,
      "longitude": -9.359314,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "3273",
      "timestamp": 1657575403,
      "ems": null
    },
    {
      "latitude": 38.748825,
      "longitude": -9.358215,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "3273",
      "timestamp": 1657575406,
      "ems": null
    },
    {
      "latitude": 38.74892,
      "longitude": -9.356873,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 87,
      "squawk": "3273",
      "timestamp": 1657575409,
      "ems": null
    },
    {
      "latitude": 38.748962,
      "longitude": -9.355814,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 87,
      "squawk": "3273",
      "timestamp": 1657575412,
      "ems": null
    },
    {
      "latitude": 38.748966,
      "longitude": -9.354492,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 93,
      "squawk": "3273",
      "timestamp": 1657575415,
      "ems": null
    },
    {
      "latitude": 38.748779,
      "longitude": -9.35321,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 103,
      "squawk": "3273",
      "timestamp": 1657575418,
      "ems": null
    },
    {
      "latitude": 38.748405,
      "longitude": -9.351868,
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
      "heading": 112,
      "squawk": "3273",
      "timestamp": 1657575421,
      "ems": null
    },
    {
      "latitude": 38.74791,
      "longitude": -9.3505,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 119,
      "squawk": "3273",
      "timestamp": 1657575424,
      "ems": null
    },
    {
      "latitude": 38.747131,
      "longitude": -9.349067,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 125,
      "squawk": "3273",
      "timestamp": 1657575427,
      "ems": null
    },
    {
      "latitude": 38.746307,
      "longitude": -9.347813,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "3273",
      "timestamp": 1657575430,
      "ems": null
    },
    {
      "latitude": 38.74538,
      "longitude": -9.34668,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 139,
      "squawk": "3273",
      "timestamp": 1657575433,
      "ems": null
    },
    {
      "latitude": 38.744358,
      "longitude": -9.345703,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "3273",
      "timestamp": 1657575436,
      "ems": null
    },
    {
      "latitude": 38.743057,
      "longitude": -9.344828,
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
      "heading": 155,
      "squawk": "3273",
      "timestamp": 1657575439,
      "ems": null
    },
    {
      "latitude": 38.741592,
      "longitude": -9.344051,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 161,
      "squawk": "3273",
      "timestamp": 1657575442,
      "ems": null
    },
    {
      "latitude": 38.740219,
      "longitude": -9.343513,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 163,
      "squawk": "3273",
      "timestamp": 1657575446,
      "ems": null
    },
    {
      "latitude": 38.738632,
      "longitude": -9.342957,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657575449,
      "ems": null
    },
    {
      "latitude": 38.737373,
      "longitude": -9.342529,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657575451,
      "ems": null
    },
    {
      "latitude": 38.735641,
      "longitude": -9.341962,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657575455,
      "ems": null
    },
    {
      "latitude": 38.734406,
      "longitude": -9.341484,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657575457,
      "ems": null
    },
    {
      "latitude": 38.732941,
      "longitude": -9.341006,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657575461,
      "ems": null
    },
    {
      "latitude": 38.731369,
      "longitude": -9.340515,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657575464,
      "ems": null
    },
    {
      "latitude": 38.730057,
      "longitude": -9.340111,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657575466,
      "ems": null
    },
    {
      "latitude": 38.728668,
      "longitude": -9.339661,
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
      "heading": 167,
      "squawk": "3273",
      "timestamp": 1657575469,
      "ems": null
    },
    {
      "latitude": 38.72699,
      "longitude": -9.339155,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 166,
      "squawk": "3273",
      "timestamp": 1657575473,
      "ems": null
    },
    {
      "latitude": 38.724152,
      "longitude": -9.338319,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "3273",
      "timestamp": 1657575479,
      "ems": null
    },
    {
      "latitude": 38.721313,
      "longitude": -9.337524,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "3273",
      "timestamp": 1657575485,
      "ems": null
    },
    {
      "latitude": 38.718567,
      "longitude": -9.336609,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 164,
      "squawk": "3273",
      "timestamp": 1657575491,
      "ems": null
    },
    {
      "latitude": 38.715912,
      "longitude": -9.33551,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657575497,
      "ems": null
    },
    {
      "latitude": 38.715225,
      "longitude": -9.335155,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "3273",
      "timestamp": 1657575498,
      "ems": null
    },
    {
      "latitude": 38.71405,
      "longitude": -9.334595,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "3273",
      "timestamp": 1657575501,
      "ems": null
    },
    {
      "latitude": 38.713074,
      "longitude": -9.334106,
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
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657575504,
      "ems": null
    },
    {
      "latitude": 38.711536,
      "longitude": -9.333313,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 158,
      "squawk": "3273",
      "timestamp": 1657575508,
      "ems": null
    },
    {
      "latitude": 38.709953,
      "longitude": -9.33252,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657575512,
      "ems": null
    },
    {
      "latitude": 38.709274,
      "longitude": -9.332229,
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
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657575514,
      "ems": null
    },
    {
      "latitude": 38.70837,
      "longitude": -9.331787,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657575516,
      "ems": null
    },
    {
      "latitude": 38.704975,
      "longitude": -9.330139,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657575525,
      "ems": null
    },
    {
      "latitude": 38.703781,
      "longitude": -9.329841,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 171,
      "squawk": "3273",
      "timestamp": 1657575528,
      "ems": null
    },
    {
      "latitude": 38.702507,
      "longitude": -9.329773,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 180,
      "squawk": "3273",
      "timestamp": 1657575531,
      "ems": null
    },
    {
      "latitude": 38.701435,
      "longitude": -9.329956,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 190,
      "squawk": "3273",
      "timestamp": 1657575534,
      "ems": null
    },
    {
      "latitude": 38.700119,
      "longitude": -9.330498,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "3273",
      "timestamp": 1657575538,
      "ems": null
    },
    {
      "latitude": 38.6987,
      "longitude": -9.331452,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 210,
      "squawk": "3273",
      "timestamp": 1657575541,
      "ems": null
    },
    {
      "latitude": 38.69783,
      "longitude": -9.332289,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 216,
      "squawk": "3273",
      "timestamp": 1657575543,
      "ems": null
    },
    {
      "latitude": 38.69706,
      "longitude": -9.333191,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 227,
      "squawk": "3273",
      "timestamp": 1657575547,
      "ems": null
    },
    {
      "latitude": 38.696175,
      "longitude": -9.334717,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 234,
      "squawk": "3273",
      "timestamp": 1657575549,
      "ems": null
    },
    {
      "latitude": 38.695663,
      "longitude": -9.335876,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 244,
      "squawk": "3273",
      "timestamp": 1657575553,
      "ems": null
    },
    {
      "latitude": 38.69529,
      "longitude": -9.337219,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "3273",
      "timestamp": 1657575555,
      "ems": null
    },
    {
      "latitude": 38.695084,
      "longitude": -9.33814,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 257,
      "squawk": "3273",
      "timestamp": 1657575558,
      "ems": null
    },
    {
      "latitude": 38.695011,
      "longitude": -9.340332,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 273,
      "squawk": "3273",
      "timestamp": 1657575563,
      "ems": null
    },
    {
      "latitude": 38.695198,
      "longitude": -9.341492,
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
      "heading": 285,
      "squawk": "3273",
      "timestamp": 1657575566,
      "ems": null
    },
    {
      "latitude": 38.695385,
      "longitude": -9.342163,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 296,
      "squawk": "3273",
      "timestamp": 1657575569,
      "ems": null
    },
    {
      "latitude": 38.695942,
      "longitude": -9.343323,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 307,
      "squawk": "3273",
      "timestamp": 1657575571,
      "ems": null
    },
    {
      "latitude": 38.696091,
      "longitude": -9.343574,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 320,
      "squawk": "3273",
      "timestamp": 1657575575,
      "ems": null
    },
    {
      "latitude": 38.696827,
      "longitude": -9.344421,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 326,
      "squawk": "3273",
      "timestamp": 1657575577,
      "ems": null
    },
    {
      "latitude": 38.697758,
      "longitude": -9.345093,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 333,
      "squawk": "3273",
      "timestamp": 1657575581,
      "ems": null
    },
    {
      "latitude": 38.698517,
      "longitude": -9.345544,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 334,
      "squawk": "3273",
      "timestamp": 1657575584,
      "ems": null
    },
    {
      "latitude": 38.699066,
      "longitude": -9.345842,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 337,
      "squawk": "3273",
      "timestamp": 1657575586,
      "ems": null
    },
    {
      "latitude": 38.699799,
      "longitude": -9.346201,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 338,
      "squawk": "3273",
      "timestamp": 1657575589,
      "ems": null
    },
    {
      "latitude": 38.700531,
      "longitude": -9.346499,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575592,
      "ems": null
    },
    {
      "latitude": 38.701248,
      "longitude": -9.346741,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575595,
      "ems": null
    },
    {
      "latitude": 38.701668,
      "longitude": -9.346924,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575597,
      "ems": null
    },
    {
      "latitude": 38.702591,
      "longitude": -9.347156,
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
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657575601,
      "ems": null
    },
    {
      "latitude": 38.703579,
      "longitude": -9.347595,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 338,
      "squawk": "3273",
      "timestamp": 1657575605,
      "ems": null
    },
    {
      "latitude": 38.704193,
      "longitude": -9.347873,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 338,
      "squawk": "3273",
      "timestamp": 1657575608,
      "ems": null
    },
    {
      "latitude": 38.705021,
      "longitude": -9.348206,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575611,
      "ems": null
    },
    {
      "latitude": 38.705795,
      "longitude": -9.34847,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657575614,
      "ems": null
    },
    {
      "latitude": 38.706573,
      "longitude": -9.348649,
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
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657575617,
      "ems": null
    },
    {
      "latitude": 38.707394,
      "longitude": -9.348877,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575620,
      "ems": null
    },
    {
      "latitude": 38.708954,
      "longitude": -9.349425,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575626,
      "ems": null
    },
    {
      "latitude": 38.710651,
      "longitude": -9.350037,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575632,
      "ems": null
    },
    {
      "latitude": 38.711609,
      "longitude": -9.35038,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575635,
      "ems": null
    },
    {
      "latitude": 38.71312,
      "longitude": -9.350952,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575641,
      "ems": null
    },
    {
      "latitude": 38.714798,
      "longitude": -9.351501,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 348,
      "squawk": "3273",
      "timestamp": 1657575647,
      "ems": null
    },
    {
      "latitude": 38.716518,
      "longitude": -9.352173,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657575653,
      "ems": null
    },
    {
      "latitude": 38.718246,
      "longitude": -9.352769,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575659,
      "ems": null
    },
    {
      "latitude": 38.719265,
      "longitude": -9.353149,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575664,
      "ems": null
    },
    {
      "latitude": 38.721542,
      "longitude": -9.353963,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575672,
      "ems": null
    },
    {
      "latitude": 38.722412,
      "longitude": -9.354261,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575676,
      "ems": null
    },
    {
      "latitude": 38.72406,
      "longitude": -9.354858,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575684,
      "ems": null
    },
    {
      "latitude": 38.725315,
      "longitude": -9.355347,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575690,
      "ems": null
    },
    {
      "latitude": 38.726852,
      "longitude": -9.355873,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575696,
      "ems": null
    },
    {
      "latitude": 38.728317,
      "longitude": -9.35647,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575702,
      "ems": null
    },
    {
      "latitude": 38.729782,
      "longitude": -9.357008,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575708,
      "ems": null
    },
    {
      "latitude": 38.731045,
      "longitude": -9.357422,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575714,
      "ems": null
    },
    {
      "latitude": 38.732208,
      "longitude": -9.357784,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 348,
      "squawk": "3273",
      "timestamp": 1657575720,
      "ems": null
    },
    {
      "latitude": 38.733418,
      "longitude": -9.358154,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657575727,
      "ems": null
    },
    {
      "latitude": 38.734535,
      "longitude": -9.358459,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657575733,
      "ems": null
    },
    {
      "latitude": 38.735825,
      "longitude": -9.358859,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657575740,
      "ems": null
    },
    {
      "latitude": 38.736832,
      "longitude": -9.359038,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657575744,
      "ems": null
    },
    {
      "latitude": 38.737381,
      "longitude": -9.359158,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657575746,
      "ems": null
    },
    {
      "latitude": 38.738167,
      "longitude": -9.359314,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657575750,
      "ems": null
    },
    {
      "latitude": 38.738815,
      "longitude": -9.359375,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657575753,
      "ems": null
    },
    {
      "latitude": 38.739468,
      "longitude": -9.359436,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 356,
      "squawk": "3273",
      "timestamp": 1657575756,
      "ems": null
    },
    {
      "latitude": 38.73967,
      "longitude": -9.359456,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 356,
      "squawk": "3273",
      "timestamp": 1657575757,
      "ems": null
    },
    {
      "latitude": 38.74054,
      "longitude": -9.359515,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 355,
      "squawk": "3273",
      "timestamp": 1657575761,
      "ems": null
    },
    {
      "latitude": 38.741005,
      "longitude": -9.359619,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 355,
      "squawk": "3273",
      "timestamp": 1657575763,
      "ems": null
    },
    {
      "latitude": 38.741425,
      "longitude": -9.359619,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "3273",
      "timestamp": 1657575765,
      "ems": null
    },
    {
      "latitude": 38.742783,
      "longitude": -9.359815,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657575771,
      "ems": null
    },
    {
      "latitude": 38.744125,
      "longitude": -9.360046,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 352,
      "squawk": "3273",
      "timestamp": 1657575777,
      "ems": null
    },
    {
      "latitude": 38.745392,
      "longitude": -9.360291,
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
      "heading": 348,
      "squawk": "3273",
      "timestamp": 1657575782,
      "ems": null
    },
    {
      "latitude": 38.746685,
      "longitude": -9.360718,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657575789,
      "ems": null
    },
    {
      "latitude": 38.74736,
      "longitude": -9.360949,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "3273",
      "timestamp": 1657575792,
      "ems": null
    },
    {
      "latitude": 38.74855,
      "longitude": -9.360829,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "3273",
      "timestamp": 1657575797,
      "ems": null
    },
    {
      "latitude": 38.749199,
      "longitude": -9.360291,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 42,
      "squawk": "3273",
      "timestamp": 1657575801,
      "ems": null
    },
    {
      "latitude": 38.749664,
      "longitude": -9.359497,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 60,
      "squawk": "3273",
      "timestamp": 1657575804,
      "ems": null
    },
    {
      "latitude": 38.749924,
      "longitude": -9.358381,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 80,
      "squawk": "3273",
      "timestamp": 1657575807,
      "ems": null
    },
    {
      "latitude": 38.749989,
      "longitude": -9.357361,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 90,
      "squawk": "3273",
      "timestamp": 1657575810,
      "ems": null
    },
    {
      "latitude": 38.749969,
      "longitude": -9.356292,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 93,
      "squawk": "3273",
      "timestamp": 1657575813,
      "ems": null
    },
    {
      "latitude": 38.749878,
      "longitude": -9.354798,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 97,
      "squawk": "3273",
      "timestamp": 1657575816,
      "ems": null
    },
    {
      "latitude": 38.749619,
      "longitude": -9.353455,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 107,
      "squawk": "3273",
      "timestamp": 1657575819,
      "ems": null
    },
    {
      "latitude": 38.749153,
      "longitude": -9.352173,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 118,
      "squawk": "3273",
      "timestamp": 1657575822,
      "ems": null
    },
    {
      "latitude": 38.748501,
      "longitude": -9.351135,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 132,
      "squawk": "3273",
      "timestamp": 1657575825,
      "ems": null
    },
    {
      "latitude": 38.74736,
      "longitude": -9.349783,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 145,
      "squawk": "3273",
      "timestamp": 1657575828,
      "ems": null
    },
    {
      "latitude": 38.745941,
      "longitude": -9.348816,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657575831,
      "ems": null
    },
    {
      "latitude": 38.744591,
      "longitude": -9.348267,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 163,
      "squawk": "3273",
      "timestamp": 1657575834,
      "ems": null
    },
    {
      "latitude": 38.742962,
      "longitude": -9.347656,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 163,
      "squawk": "3273",
      "timestamp": 1657575837,
      "ems": null
    },
    {
      "latitude": 38.741455,
      "longitude": -9.347096,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657575840,
      "ems": null
    },
    {
      "latitude": 38.740028,
      "longitude": -9.346497,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657575843,
      "ems": null
    },
    {
      "latitude": 38.738708,
      "longitude": -9.345962,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 161,
      "squawk": "3273",
      "timestamp": 1657575846,
      "ems": null
    },
    {
      "latitude": 38.737152,
      "longitude": -9.345245,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657575849,
      "ems": null
    },
    {
      "latitude": 38.734222,
      "longitude": -9.343634,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657575856,
      "ems": null
    },
    {
      "latitude": 38.731743,
      "longitude": -9.342346,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657575860,
      "ems": null
    },
    {
      "latitude": 38.730103,
      "longitude": -9.341424,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657575864,
      "ems": null
    },
    {
      "latitude": 38.728683,
      "longitude": -9.340648,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657575867,
      "ems": null
    },
    {
      "latitude": 38.727364,
      "longitude": -9.339905,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657575871,
      "ems": null
    },
    {
      "latitude": 38.726295,
      "longitude": -9.339294,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657575873,
      "ems": null
    },
    {
      "latitude": 38.723694,
      "longitude": -9.337842,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657575880,
      "ems": null
    },
    {
      "latitude": 38.721081,
      "longitude": -9.336365,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657575886,
      "ems": null
    },
    {
      "latitude": 38.718754,
      "longitude": -9.335083,
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
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657575892,
      "ems": null
    },
    {
      "latitude": 38.716003,
      "longitude": -9.333602,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657575898,
      "ems": null
    },
    {
      "latitude": 38.713623,
      "longitude": -9.332527,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657575904,
      "ems": null
    },
    {
      "latitude": 38.712421,
      "longitude": -9.332031,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "3273",
      "timestamp": 1657575906,
      "ems": null
    },
    {
      "latitude": 38.711197,
      "longitude": -9.331692,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "3273",
      "timestamp": 1657575910,
      "ems": null
    },
    {
      "latitude": 38.710003,
      "longitude": -9.331421,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "3273",
      "timestamp": 1657575913,
      "ems": null
    },
    {
      "latitude": 38.708633,
      "longitude": -9.331274,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 174,
      "squawk": "3273",
      "timestamp": 1657575916,
      "ems": null
    },
    {
      "latitude": 38.707581,
      "longitude": -9.331154,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 174,
      "squawk": "3273",
      "timestamp": 1657575918,
      "ems": null
    },
    {
      "latitude": 38.706276,
      "longitude": -9.331055,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 181,
      "squawk": "3273",
      "timestamp": 1657575922,
      "ems": null
    },
    {
      "latitude": 38.705887,
      "longitude": -9.331095,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "3273",
      "timestamp": 1657575923,
      "ems": null
    },
    {
      "latitude": 38.70451,
      "longitude": -9.33136,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 193,
      "squawk": "3273",
      "timestamp": 1657575926,
      "ems": null
    },
    {
      "latitude": 38.703232,
      "longitude": -9.33193,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 198,
      "squawk": "3273",
      "timestamp": 1657575929,
      "ems": null
    },
    {
      "latitude": 38.702957,
      "longitude": -9.332109,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 203,
      "squawk": "3273",
      "timestamp": 1657575930,
      "ems": null
    },
    {
      "latitude": 38.701248,
      "longitude": -9.333557,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 219,
      "squawk": "3273",
      "timestamp": 1657575934,
      "ems": null
    },
    {
      "latitude": 38.700439,
      "longitude": -9.334677,
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
      "heading": 229,
      "squawk": "3273",
      "timestamp": 1657575937,
      "ems": null
    },
    {
      "latitude": 38.69976,
      "longitude": -9.335999,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "3273",
      "timestamp": 1657575940,
      "ems": null
    },
    {
      "latitude": 38.699249,
      "longitude": -9.337341,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "3273",
      "timestamp": 1657575943,
      "ems": null
    },
    {
      "latitude": 38.698792,
      "longitude": -9.339036,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 251,
      "squawk": "3273",
      "timestamp": 1657575947,
      "ems": null
    },
    {
      "latitude": 38.698608,
      "longitude": -9.340289,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 263,
      "squawk": "3273",
      "timestamp": 1657575949,
      "ems": null
    },
    {
      "latitude": 38.698563,
      "longitude": -9.341603,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 272,
      "squawk": "3273",
      "timestamp": 1657575952,
      "ems": null
    },
    {
      "latitude": 38.698643,
      "longitude": -9.342834,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 278,
      "squawk": "3273",
      "timestamp": 1657575955,
      "ems": null
    },
    {
      "latitude": 38.698875,
      "longitude": -9.343872,
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
      "heading": 285,
      "squawk": "3273",
      "timestamp": 1657575959,
      "ems": null
    },
    {
      "latitude": 38.699249,
      "longitude": -9.344971,
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
      "heading": 302,
      "squawk": "3273",
      "timestamp": 1657575961,
      "ems": null
    },
    {
      "latitude": 38.69976,
      "longitude": -9.345642,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 326,
      "squawk": "3273",
      "timestamp": 1657575965,
      "ems": null
    },
    {
      "latitude": 38.700394,
      "longitude": -9.346082,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 335,
      "squawk": "3273",
      "timestamp": 1657575968,
      "ems": null
    },
    {
      "latitude": 38.701065,
      "longitude": -9.346497,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 336,
      "squawk": "3273",
      "timestamp": 1657575970,
      "ems": null
    },
    {
      "latitude": 38.701855,
      "longitude": -9.346802,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575974,
      "ems": null
    },
    {
      "latitude": 38.702545,
      "longitude": -9.347096,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657575976,
      "ems": null
    },
    {
      "latitude": 38.703278,
      "longitude": -9.347395,
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575980,
      "ems": null
    },
    {
      "latitude": 38.703918,
      "longitude": -9.347633,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575982,
      "ems": null
    },
    {
      "latitude": 38.704788,
      "longitude": -9.347932,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657575986,
      "ems": null
    },
    {
      "latitude": 38.705441,
      "longitude": -9.348206,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657575989,
      "ems": null
    },
    {
      "latitude": 38.706161,
      "longitude": -9.34847,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657575992,
      "ems": null
    },
    {
      "latitude": 38.706882,
      "longitude": -9.348694,
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657575995,
      "ems": null
    },
    {
      "latitude": 38.707256,
      "longitude": -9.348877,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 340,
      "squawk": "3273",
      "timestamp": 1657575997,
      "ems": null
    },
    {
      "latitude": 38.708092,
      "longitude": -9.349182,
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
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576001,
      "ems": null
    },
    {
      "latitude": 38.710373,
      "longitude": -9.350037,
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
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576008,
      "ems": null
    },
    {
      "latitude": 38.712143,
      "longitude": -9.350647,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657576014,
      "ems": null
    },
    {
      "latitude": 38.713959,
      "longitude": -9.351257,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576020,
      "ems": null
    },
    {
      "latitude": 38.715588,
      "longitude": -9.351807,
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
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576026,
      "ems": null
    },
    {
      "latitude": 38.717285,
      "longitude": -9.35241,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576032,
      "ems": null
    },
    {
      "latitude": 38.718979,
      "longitude": -9.353007,
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
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576038,
      "ems": null
    },
    {
      "latitude": 38.720398,
      "longitude": -9.353485,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576044,
      "ems": null
    },
    {
      "latitude": 38.722183,
      "longitude": -9.354201,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576050,
      "ems": null
    },
    {
      "latitude": 38.723408,
      "longitude": -9.354614,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576056,
      "ems": null
    },
    {
      "latitude": 38.724472,
      "longitude": -9.355038,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576063,
      "ems": null
    },
    {
      "latitude": 38.725891,
      "longitude": -9.355515,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576069,
      "ems": null
    },
    {
      "latitude": 38.727413,
      "longitude": -9.356079,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576075,
      "ems": null
    },
    {
      "latitude": 38.728901,
      "longitude": -9.356628,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657576081,
      "ems": null
    },
    {
      "latitude": 38.730251,
      "longitude": -9.357117,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657576087,
      "ems": null
    },
    {
      "latitude": 38.731659,
      "longitude": -9.357605,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576093,
      "ems": null
    },
    {
      "latitude": 38.732811,
      "longitude": -9.357971,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576099,
      "ems": null
    },
    {
      "latitude": 38.73349,
      "longitude": -9.358202,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 61.1,
        "kts": 33,
        "mph": 38
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657576103,
      "ems": null
    },
    {
      "latitude": 38.734268,
      "longitude": -9.358381,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657576108,
      "ems": null
    },
    {
      "latitude": 38.734818,
      "longitude": -9.3585,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657576111,
      "ems": null
    },
    {
      "latitude": 38.735367,
      "longitude": -9.35862,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 354,
      "squawk": "3273",
      "timestamp": 1657576113,
      "ems": null
    },
    {
      "latitude": 38.73587,
      "longitude": -9.35868,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657576116,
      "ems": null
    },
    {
      "latitude": 38.736374,
      "longitude": -9.35874,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 354,
      "squawk": "3273",
      "timestamp": 1657576120,
      "ems": null
    },
    {
      "latitude": 38.736923,
      "longitude": -9.358799,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657576122,
      "ems": null
    },
    {
      "latitude": 38.737701,
      "longitude": -9.358918,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 354,
      "squawk": "3273",
      "timestamp": 1657576126,
      "ems": null
    },
    {
      "latitude": 38.738167,
      "longitude": -9.359009,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 351,
      "squawk": "3273",
      "timestamp": 1657576129,
      "ems": null
    },
    {
      "latitude": 38.73877,
      "longitude": -9.359192,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 339,
      "squawk": "3273",
      "timestamp": 1657576132,
      "ems": null
    },
    {
      "latitude": 38.739048,
      "longitude": -9.359314,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 337,
      "squawk": "3273",
      "timestamp": 1657576134,
      "ems": null
    },
    {
      "latitude": 38.739841,
      "longitude": -9.359741,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 339,
      "squawk": "3273",
      "timestamp": 1657576137,
      "ems": null
    },
    {
      "latitude": 38.740448,
      "longitude": -9.359985,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657576140,
      "ems": null
    },
    {
      "latitude": 38.740677,
      "longitude": -9.360053,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657576141,
      "ems": null
    },
    {
      "latitude": 38.741238,
      "longitude": -9.360291,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576144,
      "ems": null
    },
    {
      "latitude": 38.741913,
      "longitude": -9.360531,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657576147,
      "ems": null
    },
    {
      "latitude": 38.742496,
      "longitude": -9.360657,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657576150,
      "ems": null
    },
    {
      "latitude": 38.743378,
      "longitude": -9.360888,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 353,
      "squawk": "3273",
      "timestamp": 1657576155,
      "ems": null
    },
    {
      "latitude": 38.744705,
      "longitude": -9.361009,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3273",
      "timestamp": 1657576160,
      "ems": null
    },
    {
      "latitude": 38.745426,
      "longitude": -9.361023,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 357,
      "squawk": "3273",
      "timestamp": 1657576163,
      "ems": null
    },
    {
      "latitude": 38.745987,
      "longitude": -9.360962,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 6,
      "squawk": "3273",
      "timestamp": 1657576166,
      "ems": null
    },
    {
      "latitude": 38.746582,
      "longitude": -9.360888,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 6,
      "squawk": "3273",
      "timestamp": 1657576169,
      "ems": null
    },
    {
      "latitude": 38.747314,
      "longitude": -9.360829,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 2,
      "squawk": "3273",
      "timestamp": 1657576172,
      "ems": null
    },
    {
      "latitude": 38.747894,
      "longitude": -9.360779,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 6,
      "squawk": "3273",
      "timestamp": 1657576175,
      "ems": null
    },
    {
      "latitude": 38.748501,
      "longitude": -9.360535,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 24,
      "squawk": "3273",
      "timestamp": 1657576178,
      "ems": null
    },
    {
      "latitude": 38.749008,
      "longitude": -9.360053,
      "altitude": {
        "feet": 900,
        "meters": 274
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 47,
      "squawk": "3273",
      "timestamp": 1657576181,
      "ems": null
    },
    {
      "latitude": 38.749432,
      "longitude": -9.359253,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 65,
      "squawk": "3273",
      "timestamp": 1657576184,
      "ems": null
    },
    {
      "latitude": 38.749603,
      "longitude": -9.358321,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "3273",
      "timestamp": 1657576187,
      "ems": null
    },
    {
      "latitude": 38.749802,
      "longitude": -9.357239,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 78,
      "squawk": "3273",
      "timestamp": 1657576190,
      "ems": null
    },
    {
      "latitude": 38.749924,
      "longitude": -9.356232,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 87,
      "squawk": "3273",
      "timestamp": 1657576193,
      "ems": null
    },
    {
      "latitude": 38.749878,
      "longitude": -9.354978,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 94,
      "squawk": "3273",
      "timestamp": 1657576196,
      "ems": null
    },
    {
      "latitude": 38.74971,
      "longitude": -9.353821,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 102,
      "squawk": "3273",
      "timestamp": 1657576199,
      "ems": null
    },
    {
      "latitude": 38.749336,
      "longitude": -9.352478,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "3273",
      "timestamp": 1657576202,
      "ems": null
    },
    {
      "latitude": 38.748734,
      "longitude": -9.351097,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 121,
      "squawk": "3273",
      "timestamp": 1657576205,
      "ems": null
    },
    {
      "latitude": 38.748001,
      "longitude": -9.349843,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 128,
      "squawk": "3273",
      "timestamp": 1657576208,
      "ems": null
    },
    {
      "latitude": 38.747131,
      "longitude": -9.348708,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 136,
      "squawk": "3273",
      "timestamp": 1657576211,
      "ems": null
    },
    {
      "latitude": 38.746216,
      "longitude": -9.347813,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 142,
      "squawk": "3273",
      "timestamp": 1657576214,
      "ems": null
    },
    {
      "latitude": 38.744888,
      "longitude": -9.346738,
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
      "heading": 151,
      "squawk": "3273",
      "timestamp": 1657576217,
      "ems": null
    },
    {
      "latitude": 38.743519,
      "longitude": -9.346008,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657576220,
      "ems": null
    },
    {
      "latitude": 38.742123,
      "longitude": -9.345398,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "3273",
      "timestamp": 1657576223,
      "ems": null
    },
    {
      "latitude": 38.740864,
      "longitude": -9.344849,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "3273",
      "timestamp": 1657576226,
      "ems": null
    },
    {
      "latitude": 38.739441,
      "longitude": -9.344171,
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
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657576229,
      "ems": null
    },
    {
      "latitude": 38.738297,
      "longitude": -9.343634,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657576232,
      "ems": null
    },
    {
      "latitude": 38.736908,
      "longitude": -9.342957,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657576235,
      "ems": null
    },
    {
      "latitude": 38.735653,
      "longitude": -9.342285,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657576238,
      "ems": null
    },
    {
      "latitude": 38.734303,
      "longitude": -9.341492,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "3273",
      "timestamp": 1657576241,
      "ems": null
    },
    {
      "latitude": 38.731789,
      "longitude": -9.340027,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657576247,
      "ems": null
    },
    {
      "latitude": 38.729233,
      "longitude": -9.338677,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657576254,
      "ems": null
    },
    {
      "latitude": 38.72662,
      "longitude": -9.33728,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657576260,
      "ems": null
    },
    {
      "latitude": 38.724106,
      "longitude": -9.335931,
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
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657576265,
      "ems": null
    },
    {
      "latitude": 38.721638,
      "longitude": -9.334595,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657576271,
      "ems": null
    },
    {
      "latitude": 38.71907,
      "longitude": -9.333244,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 158,
      "squawk": "3273",
      "timestamp": 1657576278,
      "ems": null
    },
    {
      "latitude": 38.71666,
      "longitude": -9.332092,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "3273",
      "timestamp": 1657576283,
      "ems": null
    },
    {
      "latitude": 38.714191,
      "longitude": -9.330811,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "3273",
      "timestamp": 1657576290,
      "ems": null
    },
    {
      "latitude": 38.711609,
      "longitude": -9.329423,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "3273",
      "timestamp": 1657576296,
      "ems": null
    },
    {
      "latitude": 38.709412,
      "longitude": -9.328109,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 154,
      "squawk": "3273",
      "timestamp": 1657576302,
      "ems": null
    },
    {
      "latitude": 38.707115,
      "longitude": -9.32666,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "3273",
      "timestamp": 1657576308,
      "ems": null
    },
    {
      "latitude": 38.704647,
      "longitude": -9.325317,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 159,
      "squawk": "3273",
      "timestamp": 1657576314,
      "ems": null
    },
    {
      "latitude": 38.702461,
      "longitude": -9.32428,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 158,
      "squawk": "3273",
      "timestamp": 1657576320,
      "ems": null
    },
    {
      "latitude": 38.69989,
      "longitude": -9.323034,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 160,
      "squawk": "3273",
      "timestamp": 1657576326,
      "ems": null
    },
    {
      "latitude": 38.698502,
      "longitude": -9.322449,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "3273",
      "timestamp": 1657576329,
      "ems": null
    },
    {
      "latitude": 38.697693,
      "longitude": -9.322079,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "3273",
      "timestamp": 1657576332,
      "ems": null
    },
    {
      "latitude": 38.696083,
      "longitude": -9.321411,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657576335,
      "ems": null
    },
    {
      "latitude": 38.694855,
      "longitude": -9.320885,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 162,
      "squawk": "3273",
      "timestamp": 1657576338,
      "ems": null
    },
    {
      "latitude": 38.693802,
      "longitude": -9.320526,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "3273",
      "timestamp": 1657576341,
      "ems": null
    },
    {
      "latitude": 38.692291,
      "longitude": -9.320168,
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
      "heading": 171,
      "squawk": "3273",
      "timestamp": 1657576344,
      "ems": null
    },
    {
      "latitude": 38.69101,
      "longitude": -9.320068,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 179,
      "squawk": "3273",
      "timestamp": 1657576347,
      "ems": null
    },
    {
      "latitude": 38.689705,
      "longitude": -9.32019,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 187,
      "squawk": "3273",
      "timestamp": 1657576350,
      "ems": null
    },
    {
      "latitude": 38.6884,
      "longitude": -9.320618,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 195,
      "squawk": "3273",
      "timestamp": 1657576353,
      "ems": null
    },
    {
      "latitude": 38.687027,
      "longitude": -9.321242,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 203,
      "squawk": "3273",
      "timestamp": 1657576356,
      "ems": null
    },
    {
      "latitude": 38.685974,
      "longitude": -9.322079,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 210,
      "squawk": "3273",
      "timestamp": 1657576359,
      "ems": null
    },
    {
      "latitude": 38.684864,
      "longitude": -9.323181,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 222,
      "squawk": "3273",
      "timestamp": 1657576362,
      "ems": null
    },
    {
      "latitude": 38.684143,
      "longitude": -9.324168,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 231,
      "squawk": "3273",
      "timestamp": 1657576365,
      "ems": null
    },
    {
      "latitude": 38.683273,
      "longitude": -9.325781,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "3273",
      "timestamp": 1657576368,
      "ems": null
    },
    {
      "latitude": 38.682632,
      "longitude": -9.327393,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 245,
      "squawk": "3273",
      "timestamp": 1657576372,
      "ems": null
    },
    {
      "latitude": 38.682209,
      "longitude": -9.328918,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 250,
      "squawk": "3273",
      "timestamp": 1657576375,
      "ems": null
    },
    {
      "latitude": 38.681885,
      "longitude": -9.330505,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 260,
      "squawk": "3273",
      "timestamp": 1657576378,
      "ems": null
    },
    {
      "latitude": 38.681808,
      "longitude": -9.331811,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 267,
      "squawk": "3273",
      "timestamp": 1657576380,
      "ems": null
    },
    {
      "latitude": 38.681839,
      "longitude": -9.333496,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "squawk": "3273",
      "timestamp": 1657576384,
      "ems": null
    },
    {
      "latitude": 38.681931,
      "longitude": -9.334778,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "3273",
      "timestamp": 1657576387,
      "ems": null
    },
    {
      "latitude": 38.682037,
      "longitude": -9.336229,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 277,
      "squawk": "3273",
      "timestamp": 1657576390,
      "ems": null
    },
    {
      "latitude": 38.682358,
      "longitude": -9.337543,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 290,
      "squawk": "3273",
      "timestamp": 1657576393,
      "ems": null
    },
    {
      "latitude": 38.68277,
      "longitude": -9.33844,
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
      "heading": 304,
      "squawk": "3273",
      "timestamp": 1657576396,
      "ems": null
    },
    {
      "latitude": 38.683418,
      "longitude": -9.339294,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 318,
      "squawk": "3273",
      "timestamp": 1657576399,
      "ems": null
    },
    {
      "latitude": 38.68396,
      "longitude": -9.339812,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "3273",
      "timestamp": 1657576402,
      "ems": null
    },
    {
      "latitude": 38.684631,
      "longitude": -9.340271,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 331,
      "squawk": "3273",
      "timestamp": 1657576405,
      "ems": null
    },
    {
      "latitude": 38.685333,
      "longitude": -9.340708,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "3273",
      "timestamp": 1657576408,
      "ems": null
    },
    {
      "latitude": 38.685974,
      "longitude": -9.341006,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 340,
      "squawk": "3273",
      "timestamp": 1657576411,
      "ems": null
    },
    {
      "latitude": 38.686584,
      "longitude": -9.341309,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 340,
      "squawk": "3273",
      "timestamp": 1657576414,
      "ems": null
    },
    {
      "latitude": 38.687164,
      "longitude": -9.341543,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657576417,
      "ems": null
    },
    {
      "latitude": 38.687748,
      "longitude": -9.341797,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657576420,
      "ems": null
    },
    {
      "latitude": 38.688446,
      "longitude": -9.342081,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657576423,
      "ems": null
    },
    {
      "latitude": 38.688995,
      "longitude": -9.342319,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "3273",
      "timestamp": 1657576426,
      "ems": null
    },
    {
      "latitude": 38.68959,
      "longitude": -9.342559,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657576429,
      "ems": null
    },
    {
      "latitude": 38.690231,
      "longitude": -9.342737,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657576432,
      "ems": null
    },
    {
      "latitude": 38.690823,
      "longitude": -9.342957,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576435,
      "ems": null
    },
    {
      "latitude": 38.692173,
      "longitude": -9.343506,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 340,
      "squawk": "3273",
      "timestamp": 1657576441,
      "ems": null
    },
    {
      "latitude": 38.693382,
      "longitude": -9.343994,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657576447,
      "ems": null
    },
    {
      "latitude": 38.694077,
      "longitude": -9.344171,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 346,
      "squawk": "3273",
      "timestamp": 1657576450,
      "ems": null
    },
    {
      "latitude": 38.695572,
      "longitude": -9.344788,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 340,
      "squawk": "3273",
      "timestamp": 1657576457,
      "ems": null
    },
    {
      "latitude": 38.69706,
      "longitude": -9.345337,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576462,
      "ems": null
    },
    {
      "latitude": 38.698643,
      "longitude": -9.345825,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "3273",
      "timestamp": 1657576469,
      "ems": null
    },
    {
      "latitude": 38.700302,
      "longitude": -9.34632,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576475,
      "ems": null
    },
    {
      "latitude": 38.702042,
      "longitude": -9.346977,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657576481,
      "ems": null
    },
    {
      "latitude": 38.703598,
      "longitude": -9.347514,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576487,
      "ems": null
    },
    {
      "latitude": 38.705391,
      "longitude": -9.348145,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "3273",
      "timestamp": 1657576493,
      "ems": null
    },
    {
      "latitude": 38.706928,
      "longitude": -9.348755,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576499,
      "ems": null
    },
    {
      "latitude": 38.708633,
      "longitude": -9.349305,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576505,
      "ems": null
    },
    {
      "latitude": 38.710281,
      "longitude": -9.349843,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576511,
      "ems": null
    },
    {
      "latitude": 38.712204,
      "longitude": -9.350559,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576517,
      "ems": null
    },
    {
      "latitude": 38.713806,
      "longitude": -9.351097,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 342,
      "squawk": "3273",
      "timestamp": 1657576523,
      "ems": null
    },
    {
      "latitude": 38.7155,
      "longitude": -9.351813,
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
      "heading": 341,
      "squawk": "3273",
      "timestamp": 1657576529,
      "ems": null
    },
    {
      "latitude": 38.717312,
      "longitude": -9.352417,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 345,
      "squawk": "3273",
      "timestamp": 1657576536,
      "ems": null
    },
    {
      "latitude": 38.718887,
      "longitude": -9.353007,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576541,
      "ems": null
    },
    {
      "latitude": 38.720535,
      "longitude": -9.353545,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "3273",
      "timestamp": 1657576548,
      "ems": null
    },
    {
      "latitude": 38.722244,
      "longitude": -9.354187,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576554,
      "ems": null
    },
    {
      "latitude": 38.723419,
      "longitude": -9.35462,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576559,
      "ems": null
    },
    {
      "latitude": 38.724426,
      "longitude": -9.354978,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576565,
      "ems": null
    },
    {
      "latitude": 38.725365,
      "longitude": -9.355347,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 55.6,
        "kts": 30,
        "mph": 34.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576572,
      "ems": null
    },
    {
      "latitude": 38.726154,
      "longitude": -9.355591,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576578,
      "ems": null
    },
    {
      "latitude": 38.726715,
      "longitude": -9.355835,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 344,
      "squawk": "3273",
      "timestamp": 1657576584,
      "ems": null
    },
    {
      "latitude": 38.726807,
      "longitude": -9.355515,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 16.7,
        "kts": 9,
        "mph": 10.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 130,
      "squawk": "3273",
      "timestamp": 1657576596,
      "ems": null
    }
  ]
};
