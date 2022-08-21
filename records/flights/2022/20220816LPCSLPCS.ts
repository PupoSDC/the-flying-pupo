import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220816LPCSLPCS",
    callsign: "RVP272",
    name: "Night Cross Country",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 7, 16, 19, 30).getTime(),
    arrival: new Date(2022, 7, 16, 20, 40).getTime(),
    singleEnginePistonTime: 70,
    picTime: 0,
    dualTime: 70,
    landings: {
      day: 0,
      night: 1,
    },
  },
  aircraft: {
    model: {
      code: "P208",
      text: "Tecnam P-2008JC",
    },
    identification: {
      modes: "3D3720",
      registration: "CS-DHV",
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
      "latitude": 38.718533,
      "longitude": -9.352365,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 198,
      "squawk": "0",
      "timestamp": 1660679228,
      "ems": null
    },
    {
      "latitude": 38.718487,
      "longitude": -9.352574,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 271,
      "squawk": "0",
      "timestamp": 1660679235,
      "ems": null
    },
    {
      "latitude": 38.718567,
      "longitude": -9.352798,
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
      "heading": 306,
      "squawk": "0",
      "timestamp": 1660679240,
      "ems": null
    },
    {
      "latitude": 38.718773,
      "longitude": -9.352903,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 306,
      "squawk": "0",
      "timestamp": 1660679252,
      "ems": null
    },
    {
      "latitude": 38.719048,
      "longitude": -9.352992,
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
      "heading": 343,
      "squawk": "0",
      "timestamp": 1660679256,
      "ems": null
    },
    {
      "latitude": 38.719254,
      "longitude": -9.353073,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 50,
        "kts": 27,
        "mph": 31.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "0",
      "timestamp": 1660679259,
      "ems": null
    },
    {
      "latitude": 38.719551,
      "longitude": -9.353187,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 61.1,
        "kts": 33,
        "mph": 38
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "0",
      "timestamp": 1660679260,
      "ems": null
    },
    {
      "latitude": 38.719906,
      "longitude": -9.353317,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 343,
      "squawk": "0",
      "timestamp": 1660679262,
      "ems": null
    },
    {
      "latitude": 38.720112,
      "longitude": -9.353395,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660679263,
      "ems": null
    },
    {
      "latitude": 38.720547,
      "longitude": -9.353546,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660679266,
      "ems": null
    },
    {
      "latitude": 38.721497,
      "longitude": -9.353903,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660679270,
      "ems": null
    },
    {
      "latitude": 38.722851,
      "longitude": -9.354431,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660679276,
      "ems": null
    },
    {
      "latitude": 38.724976,
      "longitude": -9.355157,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660679283,
      "ems": null
    },
    {
      "latitude": 38.726486,
      "longitude": -9.355695,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 342,
      "squawk": "1370",
      "timestamp": 1660679289,
      "ems": null
    },
    {
      "latitude": 38.728016,
      "longitude": -9.356323,
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
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660679295,
      "ems": null
    },
    {
      "latitude": 38.73011,
      "longitude": -9.357056,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 342,
      "squawk": "1370",
      "timestamp": 1660679304,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660679310,
      "ems": null
    },
    {
      "latitude": 38.733418,
      "longitude": -9.358215,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660679318,
      "ems": null
    },
    {
      "latitude": 38.734905,
      "longitude": -9.358765,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660679324,
      "ems": null
    },
    {
      "latitude": 38.736557,
      "longitude": -9.359277,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660679330,
      "ems": null
    },
    {
      "latitude": 38.737976,
      "longitude": -9.359934,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 335,
      "squawk": "1370",
      "timestamp": 1660679336,
      "ems": null
    },
    {
      "latitude": 38.738583,
      "longitude": -9.360291,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 332,
      "squawk": "1370",
      "timestamp": 1660679339,
      "ems": null
    },
    {
      "latitude": 38.739143,
      "longitude": -9.360779,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 321,
      "squawk": "1370",
      "timestamp": 1660679341,
      "ems": null
    },
    {
      "latitude": 38.7397,
      "longitude": -9.361511,
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
      "heading": 311,
      "squawk": "1370",
      "timestamp": 1660679344,
      "ems": null
    },
    {
      "latitude": 38.739944,
      "longitude": -9.361904,
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
      "heading": 311,
      "squawk": "1370",
      "timestamp": 1660679346,
      "ems": null
    },
    {
      "latitude": 38.740356,
      "longitude": -9.363277,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 281,
      "squawk": "1370",
      "timestamp": 1660679350,
      "ems": null
    },
    {
      "latitude": 38.740402,
      "longitude": -9.364532,
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
      "heading": 264,
      "squawk": "1370",
      "timestamp": 1660679353,
      "ems": null
    },
    {
      "latitude": 38.740173,
      "longitude": -9.365845,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 255,
      "squawk": "1370",
      "timestamp": 1660679356,
      "ems": null
    },
    {
      "latitude": 38.739796,
      "longitude": -9.367371,
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
      "heading": 250,
      "squawk": "1370",
      "timestamp": 1660679359,
      "ems": null
    },
    {
      "latitude": 38.739376,
      "longitude": -9.368652,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 247,
      "squawk": "1370",
      "timestamp": 1660679362,
      "ems": null
    },
    {
      "latitude": 38.738815,
      "longitude": -9.369934,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 237,
      "squawk": "1370",
      "timestamp": 1660679365,
      "ems": null
    },
    {
      "latitude": 38.738113,
      "longitude": -9.371219,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 232,
      "squawk": "1370",
      "timestamp": 1660679368,
      "ems": null
    },
    {
      "latitude": 38.737335,
      "longitude": -9.372473,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 230,
      "squawk": "1370",
      "timestamp": 1660679371,
      "ems": null
    },
    {
      "latitude": 38.736443,
      "longitude": -9.373657,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 227,
      "squawk": "1370",
      "timestamp": 1660679374,
      "ems": null
    },
    {
      "latitude": 38.735596,
      "longitude": -9.374801,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 226,
      "squawk": "1370",
      "timestamp": 1660679377,
      "ems": null
    },
    {
      "latitude": 38.734726,
      "longitude": -9.376055,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 227,
      "squawk": "1370",
      "timestamp": 1660679380,
      "ems": null
    },
    {
      "latitude": 38.733856,
      "longitude": -9.377249,
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
      "heading": 229,
      "squawk": "1370",
      "timestamp": 1660679383,
      "ems": null
    },
    {
      "latitude": 38.733139,
      "longitude": -9.378418,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 231,
      "squawk": "1370",
      "timestamp": 1660679386,
      "ems": null
    },
    {
      "latitude": 38.732346,
      "longitude": -9.379757,
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
      "heading": 234,
      "squawk": "1370",
      "timestamp": 1660679389,
      "ems": null
    },
    {
      "latitude": 38.731567,
      "longitude": -9.381189,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 234,
      "squawk": "1370",
      "timestamp": 1660679392,
      "ems": null
    },
    {
      "latitude": 38.730019,
      "longitude": -9.383911,
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
      "heading": 234,
      "squawk": "1370",
      "timestamp": 1660679398,
      "ems": null
    },
    {
      "latitude": 38.729233,
      "longitude": -9.385369,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 235,
      "squawk": "1370",
      "timestamp": 1660679401,
      "ems": null
    },
    {
      "latitude": 38.728481,
      "longitude": -9.386841,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 237,
      "squawk": "1370",
      "timestamp": 1660679404,
      "ems": null
    },
    {
      "latitude": 38.727737,
      "longitude": -9.388367,
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
      "heading": 238,
      "squawk": "1370",
      "timestamp": 1660679407,
      "ems": null
    },
    {
      "latitude": 38.726994,
      "longitude": -9.389954,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 240,
      "squawk": "1370",
      "timestamp": 1660679410,
      "ems": null
    },
    {
      "latitude": 38.72625,
      "longitude": -9.391663,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 241,
      "squawk": "1370",
      "timestamp": 1660679413,
      "ems": null
    },
    {
      "latitude": 38.725552,
      "longitude": -9.393311,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 240,
      "squawk": "1370",
      "timestamp": 1660679416,
      "ems": null
    },
    {
      "latitude": 38.724899,
      "longitude": -9.394775,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 239,
      "squawk": "1370",
      "timestamp": 1660679419,
      "ems": null
    },
    {
      "latitude": 38.723221,
      "longitude": -9.398193,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 236,
      "squawk": "1370",
      "timestamp": 1660679425,
      "ems": null
    },
    {
      "latitude": 38.721592,
      "longitude": -9.401367,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 236,
      "squawk": "1370",
      "timestamp": 1660679432,
      "ems": null
    },
    {
      "latitude": 38.719986,
      "longitude": -9.404476,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 235,
      "squawk": "1370",
      "timestamp": 1660679437,
      "ems": null
    },
    {
      "latitude": 38.719078,
      "longitude": -9.406067,
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
      "heading": 235,
      "squawk": "1370",
      "timestamp": 1660679441,
      "ems": null
    },
    {
      "latitude": 38.718201,
      "longitude": -9.40776,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 236,
      "squawk": "1370",
      "timestamp": 1660679444,
      "ems": null
    },
    {
      "latitude": 38.716599,
      "longitude": -9.411163,
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
      "heading": 238,
      "squawk": "1370",
      "timestamp": 1660679450,
      "ems": null
    },
    {
      "latitude": 38.714981,
      "longitude": -9.414368,
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
      "heading": 237,
      "squawk": "1370",
      "timestamp": 1660679456,
      "ems": null
    },
    {
      "latitude": 38.713257,
      "longitude": -9.417911,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 237,
      "squawk": "1370",
      "timestamp": 1660679462,
      "ems": null
    },
    {
      "latitude": 38.712524,
      "longitude": -9.419582,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 243,
      "squawk": "1370",
      "timestamp": 1660679465,
      "ems": null
    },
    {
      "latitude": 38.71191,
      "longitude": -9.421448,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 250,
      "squawk": "1370",
      "timestamp": 1660679468,
      "ems": null
    },
    {
      "latitude": 38.711517,
      "longitude": -9.423045,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 255,
      "squawk": "1370",
      "timestamp": 1660679471,
      "ems": null
    },
    {
      "latitude": 38.711288,
      "longitude": -9.424836,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 261,
      "squawk": "1370",
      "timestamp": 1660679474,
      "ems": null
    },
    {
      "latitude": 38.711166,
      "longitude": -9.426392,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 268,
      "squawk": "1370",
      "timestamp": 1660679477,
      "ems": null
    },
    {
      "latitude": 38.711243,
      "longitude": -9.428001,
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
      "heading": 274,
      "squawk": "1370",
      "timestamp": 1660679480,
      "ems": null
    },
    {
      "latitude": 38.71138,
      "longitude": -9.429375,
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
      "heading": 279,
      "squawk": "1370",
      "timestamp": 1660679483,
      "ems": null
    },
    {
      "latitude": 38.711609,
      "longitude": -9.430867,
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
      "heading": 281,
      "squawk": "1370",
      "timestamp": 1660679486,
      "ems": null
    },
    {
      "latitude": 38.711864,
      "longitude": -9.432495,
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
      "heading": 281,
      "squawk": "1370",
      "timestamp": 1660679489,
      "ems": null
    },
    {
      "latitude": 38.712067,
      "longitude": -9.433852,
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
      "heading": 279,
      "squawk": "1370",
      "timestamp": 1660679492,
      "ems": null
    },
    {
      "latitude": 38.712234,
      "longitude": -9.435303,
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
      "heading": 275,
      "squawk": "1370",
      "timestamp": 1660679495,
      "ems": null
    },
    {
      "latitude": 38.712296,
      "longitude": -9.437077,
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
      "heading": 273,
      "squawk": "1370",
      "timestamp": 1660679498,
      "ems": null
    },
    {
      "latitude": 38.71233,
      "longitude": -9.438721,
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
      "heading": 270,
      "squawk": "1370",
      "timestamp": 1660679501,
      "ems": null
    },
    {
      "latitude": 38.712376,
      "longitude": -9.440369,
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
      "heading": 270,
      "squawk": "1370",
      "timestamp": 1660679504,
      "ems": null
    },
    {
      "latitude": 38.712387,
      "longitude": -9.443705,
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
      "heading": 271,
      "squawk": "1370",
      "timestamp": 1660679510,
      "ems": null
    },
    {
      "latitude": 38.712433,
      "longitude": -9.445197,
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
      "heading": 272,
      "squawk": "1370",
      "timestamp": 1660679513,
      "ems": null
    },
    {
      "latitude": 38.712517,
      "longitude": -9.446899,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 272,
      "squawk": "1370",
      "timestamp": 1660679516,
      "ems": null
    },
    {
      "latitude": 38.71257,
      "longitude": -9.448601,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 273,
      "squawk": "1370",
      "timestamp": 1660679519,
      "ems": null
    },
    {
      "latitude": 38.712749,
      "longitude": -9.451538,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 276,
      "squawk": "1370",
      "timestamp": 1660679525,
      "ems": null
    },
    {
      "latitude": 38.712887,
      "longitude": -9.453064,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 276,
      "squawk": "1370",
      "timestamp": 1660679528,
      "ems": null
    },
    {
      "latitude": 38.713028,
      "longitude": -9.454407,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 277,
      "squawk": "1370",
      "timestamp": 1660679531,
      "ems": null
    },
    {
      "latitude": 38.713211,
      "longitude": -9.456064,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 277,
      "squawk": "1370",
      "timestamp": 1660679535,
      "ems": null
    },
    {
      "latitude": 38.713352,
      "longitude": -9.457397,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 277,
      "squawk": "1370",
      "timestamp": 1660679538,
      "ems": null
    },
    {
      "latitude": 38.713448,
      "longitude": -9.45874,
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
      "heading": 277,
      "squawk": "1370",
      "timestamp": 1660679540,
      "ems": null
    },
    {
      "latitude": 38.713726,
      "longitude": -9.461548,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 277,
      "squawk": "1370",
      "timestamp": 1660679546,
      "ems": null
    },
    {
      "latitude": 38.713989,
      "longitude": -9.464363,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 276,
      "squawk": "1370",
      "timestamp": 1660679553,
      "ems": null
    },
    {
      "latitude": 38.714329,
      "longitude": -9.46814,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 276,
      "squawk": "1370",
      "timestamp": 1660679561,
      "ems": null
    },
    {
      "latitude": 38.714539,
      "longitude": -9.470752,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 275,
      "squawk": "1370",
      "timestamp": 1660679567,
      "ems": null
    },
    {
      "latitude": 38.714748,
      "longitude": -9.473206,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 276,
      "squawk": "1370",
      "timestamp": 1660679573,
      "ems": null
    },
    {
      "latitude": 38.71489,
      "longitude": -9.474792,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 279,
      "squawk": "1370",
      "timestamp": 1660679578,
      "ems": null
    },
    {
      "latitude": 38.715214,
      "longitude": -9.476746,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 282,
      "squawk": "1370",
      "timestamp": 1660679582,
      "ems": null
    },
    {
      "latitude": 38.715454,
      "longitude": -9.477977,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 284,
      "squawk": "1370",
      "timestamp": 1660679585,
      "ems": null
    },
    {
      "latitude": 38.715679,
      "longitude": -9.479004,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 285,
      "squawk": "1370",
      "timestamp": 1660679588,
      "ems": null
    },
    {
      "latitude": 38.715912,
      "longitude": -9.480103,
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
      "heading": 287,
      "squawk": "1370",
      "timestamp": 1660679591,
      "ems": null
    },
    {
      "latitude": 38.716187,
      "longitude": -9.481201,
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
      "heading": 288,
      "squawk": "1370",
      "timestamp": 1660679594,
      "ems": null
    },
    {
      "latitude": 38.716473,
      "longitude": -9.482239,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 290,
      "squawk": "1370",
      "timestamp": 1660679597,
      "ems": null
    },
    {
      "latitude": 38.716827,
      "longitude": -9.483232,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 291,
      "squawk": "1370",
      "timestamp": 1660679600,
      "ems": null
    },
    {
      "latitude": 38.717102,
      "longitude": -9.484127,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 293,
      "squawk": "1370",
      "timestamp": 1660679603,
      "ems": null
    },
    {
      "latitude": 38.717422,
      "longitude": -9.485083,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 295,
      "squawk": "1370",
      "timestamp": 1660679606,
      "ems": null
    },
    {
      "latitude": 38.717834,
      "longitude": -9.486097,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 298,
      "squawk": "1370",
      "timestamp": 1660679609,
      "ems": null
    },
    {
      "latitude": 38.718193,
      "longitude": -9.486938,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 301,
      "squawk": "1370",
      "timestamp": 1660679612,
      "ems": null
    },
    {
      "latitude": 38.718613,
      "longitude": -9.487732,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 303,
      "squawk": "1370",
      "timestamp": 1660679615,
      "ems": null
    },
    {
      "latitude": 38.71907,
      "longitude": -9.488605,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 305,
      "squawk": "1370",
      "timestamp": 1660679618,
      "ems": null
    },
    {
      "latitude": 38.719498,
      "longitude": -9.489319,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 306,
      "squawk": "1370",
      "timestamp": 1660679621,
      "ems": null
    },
    {
      "latitude": 38.719963,
      "longitude": -9.490112,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 307,
      "squawk": "1370",
      "timestamp": 1660679624,
      "ems": null
    },
    {
      "latitude": 38.720444,
      "longitude": -9.490874,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 308,
      "squawk": "1370",
      "timestamp": 1660679627,
      "ems": null
    },
    {
      "latitude": 38.720947,
      "longitude": -9.491651,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660679630,
      "ems": null
    },
    {
      "latitude": 38.7215,
      "longitude": -9.492432,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 312,
      "squawk": "1370",
      "timestamp": 1660679633,
      "ems": null
    },
    {
      "latitude": 38.722103,
      "longitude": -9.493164,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 315,
      "squawk": "1370",
      "timestamp": 1660679636,
      "ems": null
    },
    {
      "latitude": 38.722755,
      "longitude": -9.493896,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 320,
      "squawk": "1370",
      "timestamp": 1660679639,
      "ems": null
    },
    {
      "latitude": 38.723408,
      "longitude": -9.494568,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 320,
      "squawk": "1370",
      "timestamp": 1660679642,
      "ems": null
    },
    {
      "latitude": 38.724014,
      "longitude": -9.495239,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 319,
      "squawk": "1370",
      "timestamp": 1660679645,
      "ems": null
    },
    {
      "latitude": 38.724712,
      "longitude": -9.495972,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 320,
      "squawk": "1370",
      "timestamp": 1660679648,
      "ems": null
    },
    {
      "latitude": 38.725479,
      "longitude": -9.496725,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "1370",
      "timestamp": 1660679651,
      "ems": null
    },
    {
      "latitude": 38.72612,
      "longitude": -9.497322,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 325,
      "squawk": "1370",
      "timestamp": 1660679654,
      "ems": null
    },
    {
      "latitude": 38.726898,
      "longitude": -9.497925,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 327,
      "squawk": "1370",
      "timestamp": 1660679657,
      "ems": null
    },
    {
      "latitude": 38.727676,
      "longitude": -9.498576,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "1370",
      "timestamp": 1660679660,
      "ems": null
    },
    {
      "latitude": 38.728436,
      "longitude": -9.499207,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 327,
      "squawk": "1370",
      "timestamp": 1660679663,
      "ems": null
    },
    {
      "latitude": 38.729366,
      "longitude": -9.499939,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 326,
      "squawk": "1370",
      "timestamp": 1660679666,
      "ems": null
    },
    {
      "latitude": 38.730148,
      "longitude": -9.500607,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 325,
      "squawk": "1370",
      "timestamp": 1660679669,
      "ems": null
    },
    {
      "latitude": 38.730949,
      "longitude": -9.501343,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 325,
      "squawk": "1370",
      "timestamp": 1660679673,
      "ems": null
    },
    {
      "latitude": 38.731796,
      "longitude": -9.502039,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 326,
      "squawk": "1370",
      "timestamp": 1660679676,
      "ems": null
    },
    {
      "latitude": 38.732578,
      "longitude": -9.502625,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 329,
      "squawk": "1370",
      "timestamp": 1660679678,
      "ems": null
    },
    {
      "latitude": 38.733463,
      "longitude": -9.503235,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 334,
      "squawk": "1370",
      "timestamp": 1660679681,
      "ems": null
    },
    {
      "latitude": 38.734303,
      "longitude": -9.503723,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 337,
      "squawk": "1370",
      "timestamp": 1660679684,
      "ems": null
    },
    {
      "latitude": 38.735229,
      "longitude": -9.504189,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "1370",
      "timestamp": 1660679687,
      "ems": null
    },
    {
      "latitude": 38.736053,
      "longitude": -9.504607,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 340,
      "squawk": "1370",
      "timestamp": 1660679690,
      "ems": null
    },
    {
      "latitude": 38.737015,
      "longitude": -9.505025,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660679693,
      "ems": null
    },
    {
      "latitude": 38.7384,
      "longitude": -9.505371,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "1370",
      "timestamp": 1660679697,
      "ems": null
    },
    {
      "latitude": 38.738754,
      "longitude": -9.505503,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "1370",
      "timestamp": 1660679699,
      "ems": null
    },
    {
      "latitude": 38.740128,
      "longitude": -9.505741,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "1370",
      "timestamp": 1660679702,
      "ems": null
    },
    {
      "latitude": 38.740997,
      "longitude": -9.50592,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 352,
      "squawk": "1370",
      "timestamp": 1660679705,
      "ems": null
    },
    {
      "latitude": 38.742447,
      "longitude": -9.506104,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "1370",
      "timestamp": 1660679709,
      "ems": null
    },
    {
      "latitude": 38.743607,
      "longitude": -9.506159,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 357,
      "squawk": "1370",
      "timestamp": 1660679712,
      "ems": null
    },
    {
      "latitude": 38.744591,
      "longitude": -9.506165,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 360,
      "squawk": "1370",
      "timestamp": 1660679715,
      "ems": null
    },
    {
      "latitude": 38.745567,
      "longitude": -9.506165,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 1,
      "squawk": "1370",
      "timestamp": 1660679718,
      "ems": null
    },
    {
      "latitude": 38.746445,
      "longitude": -9.5061,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 3,
      "squawk": "1370",
      "timestamp": 1660679721,
      "ems": null
    },
    {
      "latitude": 38.747269,
      "longitude": -9.50604,
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
      "heading": 5,
      "squawk": "1370",
      "timestamp": 1660679724,
      "ems": null
    },
    {
      "latitude": 38.748268,
      "longitude": -9.50592,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 7,
      "squawk": "1370",
      "timestamp": 1660679727,
      "ems": null
    },
    {
      "latitude": 38.749104,
      "longitude": -9.505737,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "1370",
      "timestamp": 1660679730,
      "ems": null
    },
    {
      "latitude": 38.749878,
      "longitude": -9.505622,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "1370",
      "timestamp": 1660679733,
      "ems": null
    },
    {
      "latitude": 38.750641,
      "longitude": -9.505493,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 8,
      "squawk": "1370",
      "timestamp": 1660679736,
      "ems": null
    },
    {
      "latitude": 38.751343,
      "longitude": -9.505323,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "1370",
      "timestamp": 1660679739,
      "ems": null
    },
    {
      "latitude": 38.752167,
      "longitude": -9.505144,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "1370",
      "timestamp": 1660679742,
      "ems": null
    },
    {
      "latitude": 38.752945,
      "longitude": -9.504965,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "1370",
      "timestamp": 1660679745,
      "ems": null
    },
    {
      "latitude": 38.753677,
      "longitude": -9.504726,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 12,
      "squawk": "1370",
      "timestamp": 1660679748,
      "ems": null
    },
    {
      "latitude": 38.754272,
      "longitude": -9.504547,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660679751,
      "ems": null
    },
    {
      "latitude": 38.754959,
      "longitude": -9.504309,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 16,
      "squawk": "1370",
      "timestamp": 1660679754,
      "ems": null
    },
    {
      "latitude": 38.755764,
      "longitude": -9.503967,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 16,
      "squawk": "1370",
      "timestamp": 1660679757,
      "ems": null
    },
    {
      "latitude": 38.756424,
      "longitude": -9.503711,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660679760,
      "ems": null
    },
    {
      "latitude": 38.757111,
      "longitude": -9.503357,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660679763,
      "ems": null
    },
    {
      "latitude": 38.757343,
      "longitude": -9.503296,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 22,
      "squawk": "1370",
      "timestamp": 1660679765,
      "ems": null
    },
    {
      "latitude": 38.758041,
      "longitude": -9.50293,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660679767,
      "ems": null
    },
    {
      "latitude": 38.758392,
      "longitude": -9.502756,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660679771,
      "ems": null
    },
    {
      "latitude": 38.759392,
      "longitude": -9.502319,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 20,
      "squawk": "1370",
      "timestamp": 1660679773,
      "ems": null
    },
    {
      "latitude": 38.760132,
      "longitude": -9.50198,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "1370",
      "timestamp": 1660679777,
      "ems": null
    },
    {
      "latitude": 38.761551,
      "longitude": -9.501323,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "1370",
      "timestamp": 1660679783,
      "ems": null
    },
    {
      "latitude": 38.762886,
      "longitude": -9.500793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660679788,
      "ems": null
    },
    {
      "latitude": 38.764343,
      "longitude": -9.500248,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660679794,
      "ems": null
    },
    {
      "latitude": 38.765076,
      "longitude": -9.499949,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "1370",
      "timestamp": 1660679798,
      "ems": null
    },
    {
      "latitude": 38.765762,
      "longitude": -9.49977,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 7,
      "squawk": "1370",
      "timestamp": 1660679801,
      "ems": null
    },
    {
      "latitude": 38.766563,
      "longitude": -9.499756,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 356,
      "squawk": "1370",
      "timestamp": 1660679804,
      "ems": null
    },
    {
      "latitude": 38.767181,
      "longitude": -9.499949,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660679807,
      "ems": null
    },
    {
      "latitude": 38.767818,
      "longitude": -9.500244,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 338,
      "squawk": "1370",
      "timestamp": 1660679810,
      "ems": null
    },
    {
      "latitude": 38.768471,
      "longitude": -9.500549,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660679813,
      "ems": null
    },
    {
      "latitude": 38.769169,
      "longitude": -9.500977,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660679816,
      "ems": null
    },
    {
      "latitude": 38.769775,
      "longitude": -9.501282,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660679819,
      "ems": null
    },
    {
      "latitude": 38.770428,
      "longitude": -9.501648,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660679822,
      "ems": null
    },
    {
      "latitude": 38.771072,
      "longitude": -9.50198,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660679825,
      "ems": null
    },
    {
      "latitude": 38.771824,
      "longitude": -9.50238,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660679828,
      "ems": null
    },
    {
      "latitude": 38.772381,
      "longitude": -9.502686,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660679831,
      "ems": null
    },
    {
      "latitude": 38.773125,
      "longitude": -9.503113,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660679834,
      "ems": null
    },
    {
      "latitude": 38.773823,
      "longitude": -9.503479,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "1370",
      "timestamp": 1660679837,
      "ems": null
    },
    {
      "latitude": 38.775101,
      "longitude": -9.504069,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "1370",
      "timestamp": 1660679843,
      "ems": null
    },
    {
      "latitude": 38.776386,
      "longitude": -9.504639,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 340,
      "squawk": "1370",
      "timestamp": 1660679849,
      "ems": null
    },
    {
      "latitude": 38.777596,
      "longitude": -9.505188,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 339,
      "squawk": "1370",
      "timestamp": 1660679855,
      "ems": null
    },
    {
      "latitude": 38.778763,
      "longitude": -9.505801,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 337,
      "squawk": "1370",
      "timestamp": 1660679861,
      "ems": null
    },
    {
      "latitude": 38.779968,
      "longitude": -9.506287,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660679867,
      "ems": null
    },
    {
      "latitude": 38.780529,
      "longitude": -9.50647,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660679870,
      "ems": null
    },
    {
      "latitude": 38.78104,
      "longitude": -9.506653,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660679873,
      "ems": null
    },
    {
      "latitude": 38.781281,
      "longitude": -9.506697,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 346,
      "squawk": "1370",
      "timestamp": 1660679874,
      "ems": null
    },
    {
      "latitude": 38.781693,
      "longitude": -9.506836,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660679877,
      "ems": null
    },
    {
      "latitude": 38.782993,
      "longitude": -9.507324,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660679883,
      "ems": null
    },
    {
      "latitude": 38.783569,
      "longitude": -9.507473,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "1370",
      "timestamp": 1660679886,
      "ems": null
    },
    {
      "latitude": 38.784161,
      "longitude": -9.50769,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "1370",
      "timestamp": 1660679889,
      "ems": null
    },
    {
      "latitude": 38.784714,
      "longitude": -9.507831,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 347,
      "squawk": "1370",
      "timestamp": 1660679892,
      "ems": null
    },
    {
      "latitude": 38.785835,
      "longitude": -9.508057,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 353,
      "squawk": "1370",
      "timestamp": 1660679899,
      "ems": null
    },
    {
      "latitude": 38.786442,
      "longitude": -9.508118,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 356,
      "squawk": "1370",
      "timestamp": 1660679901,
      "ems": null
    },
    {
      "latitude": 38.786999,
      "longitude": -9.508179,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 358,
      "squawk": "1370",
      "timestamp": 1660679904,
      "ems": null
    },
    {
      "latitude": 38.787323,
      "longitude": -9.508179,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 360,
      "squawk": "1370",
      "timestamp": 1660679906,
      "ems": null
    },
    {
      "latitude": 38.787872,
      "longitude": -9.50813,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 1,
      "squawk": "1370",
      "timestamp": 1660679909,
      "ems": null
    },
    {
      "latitude": 38.788486,
      "longitude": -9.508118,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 1,
      "squawk": "1370",
      "timestamp": 1660679912,
      "ems": null
    },
    {
      "latitude": 38.788956,
      "longitude": -9.508118,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 3,
      "squawk": "1370",
      "timestamp": 1660679914,
      "ems": null
    },
    {
      "latitude": 38.789429,
      "longitude": -9.50807,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 2,
      "squawk": "1370",
      "timestamp": 1660679917,
      "ems": null
    },
    {
      "latitude": 38.789932,
      "longitude": -9.507996,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 2,
      "squawk": "1370",
      "timestamp": 1660679920,
      "ems": null
    },
    {
      "latitude": 38.790802,
      "longitude": -9.507951,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 5,
      "squawk": "1370",
      "timestamp": 1660679923,
      "ems": null
    },
    {
      "latitude": 38.79126,
      "longitude": -9.507891,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 7,
      "squawk": "1370",
      "timestamp": 1660679927,
      "ems": null
    },
    {
      "latitude": 38.791935,
      "longitude": -9.507751,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 9,
      "squawk": "1370",
      "timestamp": 1660679929,
      "ems": null
    },
    {
      "latitude": 38.792538,
      "longitude": -9.507629,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 9,
      "squawk": "1370",
      "timestamp": 1660679932,
      "ems": null
    },
    {
      "latitude": 38.793144,
      "longitude": -9.507446,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 11,
      "squawk": "1370",
      "timestamp": 1660679936,
      "ems": null
    },
    {
      "latitude": 38.793823,
      "longitude": -9.507294,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 11,
      "squawk": "1370",
      "timestamp": 1660679939,
      "ems": null
    },
    {
      "latitude": 38.794418,
      "longitude": -9.507114,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 12,
      "squawk": "1370",
      "timestamp": 1660679941,
      "ems": null
    },
    {
      "latitude": 38.795052,
      "longitude": -9.506897,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 14,
      "squawk": "1370",
      "timestamp": 1660679944,
      "ems": null
    },
    {
      "latitude": 38.795609,
      "longitude": -9.506697,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660679948,
      "ems": null
    },
    {
      "latitude": 38.796295,
      "longitude": -9.506398,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660679950,
      "ems": null
    },
    {
      "latitude": 38.796982,
      "longitude": -9.50604,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660679953,
      "ems": null
    },
    {
      "latitude": 38.797611,
      "longitude": -9.505676,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660679956,
      "ems": null
    },
    {
      "latitude": 38.798309,
      "longitude": -9.505249,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 25,
      "squawk": "1370",
      "timestamp": 1660679959,
      "ems": null
    },
    {
      "latitude": 38.79895,
      "longitude": -9.504846,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660679963,
      "ems": null
    },
    {
      "latitude": 38.799774,
      "longitude": -9.504368,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660679965,
      "ems": null
    },
    {
      "latitude": 38.800545,
      "longitude": -9.503906,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660679969,
      "ems": null
    },
    {
      "latitude": 38.801193,
      "longitude": -9.503592,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660679971,
      "ems": null
    },
    {
      "latitude": 38.801834,
      "longitude": -9.503234,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660679974,
      "ems": null
    },
    {
      "latitude": 38.80357,
      "longitude": -9.502319,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 22,
      "squawk": "1370",
      "timestamp": 1660679980,
      "ems": null
    },
    {
      "latitude": 38.804874,
      "longitude": -9.501648,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660679986,
      "ems": null
    },
    {
      "latitude": 38.806923,
      "longitude": -9.500549,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 22,
      "squawk": "1370",
      "timestamp": 1660679992,
      "ems": null
    },
    {
      "latitude": 38.80846,
      "longitude": -9.499695,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660679998,
      "ems": null
    },
    {
      "latitude": 38.810696,
      "longitude": -9.498474,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660680005,
      "ems": null
    },
    {
      "latitude": 38.812462,
      "longitude": -9.497437,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 25,
      "squawk": "1370",
      "timestamp": 1660680011,
      "ems": null
    },
    {
      "latitude": 38.814331,
      "longitude": -9.496367,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 25,
      "squawk": "1370",
      "timestamp": 1660680017,
      "ems": null
    },
    {
      "latitude": 38.816116,
      "longitude": -9.495233,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 25,
      "squawk": "1370",
      "timestamp": 1660680023,
      "ems": null
    },
    {
      "latitude": 38.818085,
      "longitude": -9.494039,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 25,
      "squawk": "1370",
      "timestamp": 1660680029,
      "ems": null
    },
    {
      "latitude": 38.819958,
      "longitude": -9.492859,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 26,
      "squawk": "1370",
      "timestamp": 1660680035,
      "ems": null
    },
    {
      "latitude": 38.822006,
      "longitude": -9.491516,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 28,
      "squawk": "1370",
      "timestamp": 1660680041,
      "ems": null
    },
    {
      "latitude": 38.823822,
      "longitude": -9.490295,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 26,
      "squawk": "1370",
      "timestamp": 1660680047,
      "ems": null
    },
    {
      "latitude": 38.825592,
      "longitude": -9.489258,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680053,
      "ems": null
    },
    {
      "latitude": 38.827377,
      "longitude": -9.488187,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680059,
      "ems": null
    },
    {
      "latitude": 38.82922,
      "longitude": -9.487061,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 26,
      "squawk": "1370",
      "timestamp": 1660680065,
      "ems": null
    },
    {
      "latitude": 38.830948,
      "longitude": -9.485918,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 28,
      "squawk": "1370",
      "timestamp": 1660680071,
      "ems": null
    },
    {
      "latitude": 38.832619,
      "longitude": -9.484741,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 30,
      "squawk": "1370",
      "timestamp": 1660680077,
      "ems": null
    },
    {
      "latitude": 38.833466,
      "longitude": -9.484067,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 30,
      "squawk": "1370",
      "timestamp": 1660680080,
      "ems": null
    },
    {
      "latitude": 38.834381,
      "longitude": -9.483351,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 31,
      "squawk": "1370",
      "timestamp": 1660680083,
      "ems": null
    },
    {
      "latitude": 38.835114,
      "longitude": -9.482754,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 31,
      "squawk": "1370",
      "timestamp": 1660680086,
      "ems": null
    },
    {
      "latitude": 38.836113,
      "longitude": -9.481995,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 33,
      "squawk": "1370",
      "timestamp": 1660680089,
      "ems": null
    },
    {
      "latitude": 38.836853,
      "longitude": -9.48132,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 34,
      "squawk": "1370",
      "timestamp": 1660680092,
      "ems": null
    },
    {
      "latitude": 38.837769,
      "longitude": -9.480544,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 34,
      "squawk": "1370",
      "timestamp": 1660680095,
      "ems": null
    },
    {
      "latitude": 38.838593,
      "longitude": -9.479828,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 34,
      "squawk": "1370",
      "timestamp": 1660680098,
      "ems": null
    },
    {
      "latitude": 38.839462,
      "longitude": -9.479065,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 34,
      "squawk": "1370",
      "timestamp": 1660680101,
      "ems": null
    },
    {
      "latitude": 38.840256,
      "longitude": -9.478333,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 35,
      "squawk": "1370",
      "timestamp": 1660680104,
      "ems": null
    },
    {
      "latitude": 38.840973,
      "longitude": -9.477678,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 36,
      "squawk": "1370",
      "timestamp": 1660680107,
      "ems": null
    },
    {
      "latitude": 38.841743,
      "longitude": -9.476929,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 36,
      "squawk": "1370",
      "timestamp": 1660680110,
      "ems": null
    },
    {
      "latitude": 38.842484,
      "longitude": -9.476245,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 36,
      "squawk": "1370",
      "timestamp": 1660680113,
      "ems": null
    },
    {
      "latitude": 38.843353,
      "longitude": -9.47541,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 38,
      "squawk": "1370",
      "timestamp": 1660680117,
      "ems": null
    },
    {
      "latitude": 38.843948,
      "longitude": -9.474752,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 39,
      "squawk": "1370",
      "timestamp": 1660680120,
      "ems": null
    },
    {
      "latitude": 38.844631,
      "longitude": -9.47406,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 39,
      "squawk": "1370",
      "timestamp": 1660680123,
      "ems": null
    },
    {
      "latitude": 38.845421,
      "longitude": -9.473206,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 39,
      "squawk": "1370",
      "timestamp": 1660680126,
      "ems": null
    },
    {
      "latitude": 38.84668,
      "longitude": -9.471985,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 35,
      "squawk": "1370",
      "timestamp": 1660680132,
      "ems": null
    },
    {
      "latitude": 38.848076,
      "longitude": -9.470825,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 31,
      "squawk": "1370",
      "timestamp": 1660680138,
      "ems": null
    },
    {
      "latitude": 38.848801,
      "longitude": -9.470275,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 29,
      "squawk": "1370",
      "timestamp": 1660680141,
      "ems": null
    },
    {
      "latitude": 38.849518,
      "longitude": -9.469788,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 28,
      "squawk": "1370",
      "timestamp": 1660680144,
      "ems": null
    },
    {
      "latitude": 38.850128,
      "longitude": -9.469378,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "1370",
      "timestamp": 1660680147,
      "ems": null
    },
    {
      "latitude": 38.850868,
      "longitude": -9.468872,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 27,
      "squawk": "1370",
      "timestamp": 1660680150,
      "ems": null
    },
    {
      "latitude": 38.851521,
      "longitude": -9.468445,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 26,
      "squawk": "1370",
      "timestamp": 1660680153,
      "ems": null
    },
    {
      "latitude": 38.852219,
      "longitude": -9.468018,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680156,
      "ems": null
    },
    {
      "latitude": 38.852871,
      "longitude": -9.467651,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680159,
      "ems": null
    },
    {
      "latitude": 38.853607,
      "longitude": -9.46723,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680162,
      "ems": null
    },
    {
      "latitude": 38.854294,
      "longitude": -9.466811,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 25,
      "squawk": "1370",
      "timestamp": 1660680165,
      "ems": null
    },
    {
      "latitude": 38.855667,
      "longitude": -9.466035,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660680171,
      "ems": null
    },
    {
      "latitude": 38.856361,
      "longitude": -9.465637,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660680174,
      "ems": null
    },
    {
      "latitude": 38.857105,
      "longitude": -9.465271,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660680177,
      "ems": null
    },
    {
      "latitude": 38.857819,
      "longitude": -9.464901,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660680180,
      "ems": null
    },
    {
      "latitude": 38.859192,
      "longitude": -9.464065,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 26,
      "squawk": "1370",
      "timestamp": 1660680186,
      "ems": null
    },
    {
      "latitude": 38.860645,
      "longitude": -9.463196,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680192,
      "ems": null
    },
    {
      "latitude": 38.862133,
      "longitude": -9.46228,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 26,
      "squawk": "1370",
      "timestamp": 1660680198,
      "ems": null
    },
    {
      "latitude": 38.862831,
      "longitude": -9.461792,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 26,
      "squawk": "1370",
      "timestamp": 1660680201,
      "ems": null
    },
    {
      "latitude": 38.86367,
      "longitude": -9.461243,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 26,
      "squawk": "1370",
      "timestamp": 1660680204,
      "ems": null
    },
    {
      "latitude": 38.865189,
      "longitude": -9.460363,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 25,
      "squawk": "1370",
      "timestamp": 1660680210,
      "ems": null
    },
    {
      "latitude": 38.865997,
      "longitude": -9.459961,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 20,
      "squawk": "1370",
      "timestamp": 1660680213,
      "ems": null
    },
    {
      "latitude": 38.866745,
      "longitude": -9.459587,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 20,
      "squawk": "1370",
      "timestamp": 1660680216,
      "ems": null
    },
    {
      "latitude": 38.867615,
      "longitude": -9.459229,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 19,
      "squawk": "1370",
      "timestamp": 1660680220,
      "ems": null
    },
    {
      "latitude": 38.868324,
      "longitude": -9.458923,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 17,
      "squawk": "1370",
      "timestamp": 1660680223,
      "ems": null
    },
    {
      "latitude": 38.869255,
      "longitude": -9.458557,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660680226,
      "ems": null
    },
    {
      "latitude": 38.869949,
      "longitude": -9.458333,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660680229,
      "ems": null
    },
    {
      "latitude": 38.870865,
      "longitude": -9.457974,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 16,
      "squawk": "1370",
      "timestamp": 1660680232,
      "ems": null
    },
    {
      "latitude": 38.871597,
      "longitude": -9.457676,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "1370",
      "timestamp": 1660680235,
      "ems": null
    },
    {
      "latitude": 38.87233,
      "longitude": -9.457438,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660680237,
      "ems": null
    },
    {
      "latitude": 38.873199,
      "longitude": -9.457139,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 14,
      "squawk": "1370",
      "timestamp": 1660680241,
      "ems": null
    },
    {
      "latitude": 38.873959,
      "longitude": -9.456848,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 14,
      "squawk": "1370",
      "timestamp": 1660680244,
      "ems": null
    },
    {
      "latitude": 38.87471,
      "longitude": -9.456601,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 14,
      "squawk": "1370",
      "timestamp": 1660680247,
      "ems": null
    },
    {
      "latitude": 38.876221,
      "longitude": -9.456064,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 16,
      "squawk": "1370",
      "timestamp": 1660680253,
      "ems": null
    },
    {
      "latitude": 38.877869,
      "longitude": -9.455407,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 17,
      "squawk": "1370",
      "timestamp": 1660680259,
      "ems": null
    },
    {
      "latitude": 38.879406,
      "longitude": -9.454834,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660680265,
      "ems": null
    },
    {
      "latitude": 38.880981,
      "longitude": -9.454272,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660680271,
      "ems": null
    },
    {
      "latitude": 38.882492,
      "longitude": -9.453735,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 16,
      "squawk": "1370",
      "timestamp": 1660680277,
      "ems": null
    },
    {
      "latitude": 38.884094,
      "longitude": -9.453078,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 17,
      "squawk": "1370",
      "timestamp": 1660680283,
      "ems": null
    },
    {
      "latitude": 38.885696,
      "longitude": -9.452362,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660680289,
      "ems": null
    },
    {
      "latitude": 38.887253,
      "longitude": -9.451705,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 17,
      "squawk": "1370",
      "timestamp": 1660680295,
      "ems": null
    },
    {
      "latitude": 38.888809,
      "longitude": -9.451168,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 14,
      "squawk": "1370",
      "timestamp": 1660680301,
      "ems": null
    },
    {
      "latitude": 38.890366,
      "longitude": -9.45063,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660680307,
      "ems": null
    },
    {
      "latitude": 38.892021,
      "longitude": -9.450012,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660680313,
      "ems": null
    },
    {
      "latitude": 38.893524,
      "longitude": -9.449496,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 14,
      "squawk": "1370",
      "timestamp": 1660680319,
      "ems": null
    },
    {
      "latitude": 38.895233,
      "longitude": -9.448975,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 12,
      "squawk": "1370",
      "timestamp": 1660680325,
      "ems": null
    },
    {
      "latitude": 38.896816,
      "longitude": -9.448547,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 10,
      "squawk": "1370",
      "timestamp": 1660680331,
      "ems": null
    },
    {
      "latitude": 38.897552,
      "longitude": -9.448361,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 10,
      "squawk": "1370",
      "timestamp": 1660680334,
      "ems": null
    },
    {
      "latitude": 38.898285,
      "longitude": -9.448182,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 9,
      "squawk": "1370",
      "timestamp": 1660680337,
      "ems": null
    },
    {
      "latitude": 38.899841,
      "longitude": -9.447824,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 11,
      "squawk": "1370",
      "timestamp": 1660680343,
      "ems": null
    },
    {
      "latitude": 38.901283,
      "longitude": -9.44751,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 9,
      "squawk": "1370",
      "timestamp": 1660680349,
      "ems": null
    },
    {
      "latitude": 38.901936,
      "longitude": -9.447327,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 8,
      "squawk": "1370",
      "timestamp": 1660680353,
      "ems": null
    },
    {
      "latitude": 38.90324,
      "longitude": -9.447144,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "1370",
      "timestamp": 1660680358,
      "ems": null
    },
    {
      "latitude": 38.903915,
      "longitude": -9.447048,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 5,
      "squawk": "1370",
      "timestamp": 1660680362,
      "ems": null
    },
    {
      "latitude": 38.905197,
      "longitude": -9.446809,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 6,
      "squawk": "1370",
      "timestamp": 1660680368,
      "ems": null
    },
    {
      "latitude": 38.906406,
      "longitude": -9.446594,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 10,
      "squawk": "1370",
      "timestamp": 1660680373,
      "ems": null
    },
    {
      "latitude": 38.907669,
      "longitude": -9.446332,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 9,
      "squawk": "1370",
      "timestamp": 1660680379,
      "ems": null
    },
    {
      "latitude": 38.909042,
      "longitude": -9.446033,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 9,
      "squawk": "1370",
      "timestamp": 1660680386,
      "ems": null
    },
    {
      "latitude": 38.909729,
      "longitude": -9.445854,
      "altitude": {
        "feet": 4300,
        "meters": 1311
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 10,
      "squawk": "1370",
      "timestamp": 1660680389,
      "ems": null
    },
    {
      "latitude": 38.911057,
      "longitude": -9.445675,
      "altitude": {
        "feet": 4300,
        "meters": 1311
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 1,
      "squawk": "1370",
      "timestamp": 1660680395,
      "ems": null
    },
    {
      "latitude": 38.911743,
      "longitude": -9.445734,
      "altitude": {
        "feet": 4300,
        "meters": 1311
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 358,
      "squawk": "1370",
      "timestamp": 1660680398,
      "ems": null
    },
    {
      "latitude": 38.912476,
      "longitude": -9.445794,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 355,
      "squawk": "1370",
      "timestamp": 1660680401,
      "ems": null
    },
    {
      "latitude": 38.913116,
      "longitude": -9.445854,
      "altitude": {
        "feet": 4400,
        "meters": 1341
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 353,
      "squawk": "1370",
      "timestamp": 1660680403,
      "ems": null
    },
    {
      "latitude": 38.913761,
      "longitude": -9.445984,
      "altitude": {
        "feet": 4400,
        "meters": 1341
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 354,
      "squawk": "1370",
      "timestamp": 1660680407,
      "ems": null
    },
    {
      "latitude": 38.914505,
      "longitude": -9.446045,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 355,
      "squawk": "1370",
      "timestamp": 1660680409,
      "ems": null
    },
    {
      "latitude": 38.915157,
      "longitude": -9.446106,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 356,
      "squawk": "1370",
      "timestamp": 1660680413,
      "ems": null
    },
    {
      "latitude": 38.915901,
      "longitude": -9.446167,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 358,
      "squawk": "1370",
      "timestamp": 1660680416,
      "ems": null
    },
    {
      "latitude": 38.916504,
      "longitude": -9.446153,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 1,
      "squawk": "1370",
      "timestamp": 1660680419,
      "ems": null
    },
    {
      "latitude": 38.917206,
      "longitude": -9.446106,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 2,
      "squawk": "1370",
      "timestamp": 1660680422,
      "ems": null
    },
    {
      "latitude": 38.917858,
      "longitude": -9.446045,
      "altitude": {
        "feet": 4600,
        "meters": 1402
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 3,
      "squawk": "1370",
      "timestamp": 1660680425,
      "ems": null
    },
    {
      "latitude": 38.918427,
      "longitude": -9.445973,
      "altitude": {
        "feet": 4600,
        "meters": 1402
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 7,
      "squawk": "1370",
      "timestamp": 1660680428,
      "ems": null
    },
    {
      "latitude": 38.919022,
      "longitude": -9.445854,
      "altitude": {
        "feet": 4600,
        "meters": 1402
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 8,
      "squawk": "1370",
      "timestamp": 1660680431,
      "ems": null
    },
    {
      "latitude": 38.919662,
      "longitude": -9.445734,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 8,
      "squawk": "1370",
      "timestamp": 1660680434,
      "ems": null
    },
    {
      "latitude": 38.920258,
      "longitude": -9.445615,
      "altitude": {
        "feet": 4700,
        "meters": 1433
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 9,
      "squawk": "1370",
      "timestamp": 1660680437,
      "ems": null
    },
    {
      "latitude": 38.920837,
      "longitude": -9.445496,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 10,
      "squawk": "1370",
      "timestamp": 1660680440,
      "ems": null
    },
    {
      "latitude": 38.92149,
      "longitude": -9.445313,
      "altitude": {
        "feet": 4700,
        "meters": 1433
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 11,
      "squawk": "1370",
      "timestamp": 1660680443,
      "ems": null
    },
    {
      "latitude": 38.922138,
      "longitude": -9.445129,
      "altitude": {
        "feet": 4700,
        "meters": 1433
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 12,
      "squawk": "1370",
      "timestamp": 1660680446,
      "ems": null
    },
    {
      "latitude": 38.922775,
      "longitude": -9.444959,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660680449,
      "ems": null
    },
    {
      "latitude": 38.923397,
      "longitude": -9.444702,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 16,
      "squawk": "1370",
      "timestamp": 1660680452,
      "ems": null
    },
    {
      "latitude": 38.923965,
      "longitude": -9.444481,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 17,
      "squawk": "1370",
      "timestamp": 1660680455,
      "ems": null
    },
    {
      "latitude": 38.924698,
      "longitude": -9.444182,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660680459,
      "ems": null
    },
    {
      "latitude": 38.925259,
      "longitude": -9.443909,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 22,
      "squawk": "1370",
      "timestamp": 1660680462,
      "ems": null
    },
    {
      "latitude": 38.925888,
      "longitude": -9.443525,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680465,
      "ems": null
    },
    {
      "latitude": 38.926517,
      "longitude": -9.443176,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680468,
      "ems": null
    },
    {
      "latitude": 38.927078,
      "longitude": -9.442809,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660680471,
      "ems": null
    },
    {
      "latitude": 38.927765,
      "longitude": -9.442451,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 24,
      "squawk": "1370",
      "timestamp": 1660680474,
      "ems": null
    },
    {
      "latitude": 38.928406,
      "longitude": -9.442092,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660680477,
      "ems": null
    },
    {
      "latitude": 38.92923,
      "longitude": -9.441674,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 22,
      "squawk": "1370",
      "timestamp": 1660680480,
      "ems": null
    },
    {
      "latitude": 38.930786,
      "longitude": -9.440898,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 20,
      "squawk": "1370",
      "timestamp": 1660680486,
      "ems": null
    },
    {
      "latitude": 38.932343,
      "longitude": -9.440122,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 21,
      "squawk": "1370",
      "timestamp": 1660680492,
      "ems": null
    },
    {
      "latitude": 38.933033,
      "longitude": -9.439819,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 19,
      "squawk": "1370",
      "timestamp": 1660680495,
      "ems": null
    },
    {
      "latitude": 38.93401,
      "longitude": -9.439392,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660680498,
      "ems": null
    },
    {
      "latitude": 38.93486,
      "longitude": -9.438988,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 17,
      "squawk": "1370",
      "timestamp": 1660680501,
      "ems": null
    },
    {
      "latitude": 38.936646,
      "longitude": -9.438271,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660680507,
      "ems": null
    },
    {
      "latitude": 38.938339,
      "longitude": -9.4375,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "1370",
      "timestamp": 1660680514,
      "ems": null
    },
    {
      "latitude": 38.94017,
      "longitude": -9.436719,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660680520,
      "ems": null
    },
    {
      "latitude": 38.941879,
      "longitude": -9.436096,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "1370",
      "timestamp": 1660680526,
      "ems": null
    },
    {
      "latitude": 38.942688,
      "longitude": -9.436002,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "1370",
      "timestamp": 1660680529,
      "ems": null
    },
    {
      "latitude": 38.943649,
      "longitude": -9.436181,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 348,
      "squawk": "1370",
      "timestamp": 1660680532,
      "ems": null
    },
    {
      "latitude": 38.944439,
      "longitude": -9.436462,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 340,
      "squawk": "1370",
      "timestamp": 1660680535,
      "ems": null
    },
    {
      "latitude": 38.945229,
      "longitude": -9.436829,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 339,
      "squawk": "1370",
      "timestamp": 1660680538,
      "ems": null
    },
    {
      "latitude": 38.946022,
      "longitude": -9.437195,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 339,
      "squawk": "1370",
      "timestamp": 1660680541,
      "ems": null
    },
    {
      "latitude": 38.946854,
      "longitude": -9.437614,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 338,
      "squawk": "1370",
      "timestamp": 1660680544,
      "ems": null
    },
    {
      "latitude": 38.947742,
      "longitude": -9.43811,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 337,
      "squawk": "1370",
      "timestamp": 1660680547,
      "ems": null
    },
    {
      "latitude": 38.948536,
      "longitude": -9.438538,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660680550,
      "ems": null
    },
    {
      "latitude": 38.94928,
      "longitude": -9.438988,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660680553,
      "ems": null
    },
    {
      "latitude": 38.95015,
      "longitude": -9.439405,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660680556,
      "ems": null
    },
    {
      "latitude": 38.950954,
      "longitude": -9.439819,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 341,
      "squawk": "1370",
      "timestamp": 1660680559,
      "ems": null
    },
    {
      "latitude": 38.951885,
      "longitude": -9.440186,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 341,
      "squawk": "1370",
      "timestamp": 1660680562,
      "ems": null
    },
    {
      "latitude": 38.953518,
      "longitude": -9.44104,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "1370",
      "timestamp": 1660680568,
      "ems": null
    },
    {
      "latitude": 38.955276,
      "longitude": -9.441913,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 338,
      "squawk": "1370",
      "timestamp": 1660680574,
      "ems": null
    },
    {
      "latitude": 38.957016,
      "longitude": -9.442749,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 338,
      "squawk": "1370",
      "timestamp": 1660680581,
      "ems": null
    },
    {
      "latitude": 38.958729,
      "longitude": -9.443665,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 337,
      "squawk": "1370",
      "timestamp": 1660680587,
      "ems": null
    },
    {
      "latitude": 38.960453,
      "longitude": -9.44458,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 337,
      "squawk": "1370",
      "timestamp": 1660680593,
      "ems": null
    },
    {
      "latitude": 38.962269,
      "longitude": -9.445557,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 336,
      "squawk": "1370",
      "timestamp": 1660680599,
      "ems": null
    },
    {
      "latitude": 38.963974,
      "longitude": -9.44651,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 335,
      "squawk": "1370",
      "timestamp": 1660680605,
      "ems": null
    },
    {
      "latitude": 38.965714,
      "longitude": -9.447466,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 337,
      "squawk": "1370",
      "timestamp": 1660680611,
      "ems": null
    },
    {
      "latitude": 38.967636,
      "longitude": -9.448421,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 340,
      "squawk": "1370",
      "timestamp": 1660680617,
      "ems": null
    },
    {
      "latitude": 38.969482,
      "longitude": -9.44928,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 341,
      "squawk": "1370",
      "timestamp": 1660680623,
      "ems": null
    },
    {
      "latitude": 38.970383,
      "longitude": -9.449615,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660680626,
      "ems": null
    },
    {
      "latitude": 38.971298,
      "longitude": -9.449974,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660680630,
      "ems": null
    },
    {
      "latitude": 38.972275,
      "longitude": -9.450256,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660680633,
      "ems": null
    },
    {
      "latitude": 38.973114,
      "longitude": -9.450562,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660680635,
      "ems": null
    },
    {
      "latitude": 38.974091,
      "longitude": -9.450867,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660680639,
      "ems": null
    },
    {
      "latitude": 38.975071,
      "longitude": -9.451172,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 346,
      "squawk": "1370",
      "timestamp": 1660680642,
      "ems": null
    },
    {
      "latitude": 38.976196,
      "longitude": -9.451526,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 347,
      "squawk": "1370",
      "timestamp": 1660680646,
      "ems": null
    },
    {
      "latitude": 38.977158,
      "longitude": -9.451765,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 348,
      "squawk": "1370",
      "timestamp": 1660680649,
      "ems": null
    },
    {
      "latitude": 38.978142,
      "longitude": -9.452026,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 349,
      "squawk": "1370",
      "timestamp": 1660680652,
      "ems": null
    },
    {
      "latitude": 38.979073,
      "longitude": -9.452209,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 349,
      "squawk": "1370",
      "timestamp": 1660680655,
      "ems": null
    },
    {
      "latitude": 38.979904,
      "longitude": -9.452422,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "1370",
      "timestamp": 1660680658,
      "ems": null
    },
    {
      "latitude": 38.981689,
      "longitude": -9.452959,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 347,
      "squawk": "1370",
      "timestamp": 1660680664,
      "ems": null
    },
    {
      "latitude": 38.983635,
      "longitude": -9.45343,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 350,
      "squawk": "1370",
      "timestamp": 1660680670,
      "ems": null
    },
    {
      "latitude": 38.984566,
      "longitude": -9.453613,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 352,
      "squawk": "1370",
      "timestamp": 1660680673,
      "ems": null
    },
    {
      "latitude": 38.986523,
      "longitude": -9.453979,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 350,
      "squawk": "1370",
      "timestamp": 1660680680,
      "ems": null
    },
    {
      "latitude": 38.988373,
      "longitude": -9.454392,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 350,
      "squawk": "1370",
      "timestamp": 1660680686,
      "ems": null
    },
    {
      "latitude": 38.990387,
      "longitude": -9.454834,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 348,
      "squawk": "1370",
      "timestamp": 1660680692,
      "ems": null
    },
    {
      "latitude": 38.992218,
      "longitude": -9.455347,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 347,
      "squawk": "1370",
      "timestamp": 1660680698,
      "ems": null
    },
    {
      "latitude": 38.994003,
      "longitude": -9.455825,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 348,
      "squawk": "1370",
      "timestamp": 1660680704,
      "ems": null
    },
    {
      "latitude": 38.995789,
      "longitude": -9.456363,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660680710,
      "ems": null
    },
    {
      "latitude": 38.996994,
      "longitude": -9.456726,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 352,
      "squawk": "1370",
      "timestamp": 1660680717,
      "ems": null
    },
    {
      "latitude": 38.998901,
      "longitude": -9.456601,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 11,
      "squawk": "1370",
      "timestamp": 1660680721,
      "ems": null
    },
    {
      "latitude": 38.999771,
      "longitude": -9.456244,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 22,
      "squawk": "1370",
      "timestamp": 1660680724,
      "ems": null
    },
    {
      "latitude": 39.00058,
      "longitude": -9.45575,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 28,
      "squawk": "1370",
      "timestamp": 1660680726,
      "ems": null
    },
    {
      "latitude": 39.001278,
      "longitude": -9.455078,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 35,
      "squawk": "1370",
      "timestamp": 1660680729,
      "ems": null
    },
    {
      "latitude": 39.002106,
      "longitude": -9.454213,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 42,
      "squawk": "1370",
      "timestamp": 1660680733,
      "ems": null
    },
    {
      "latitude": 39.002747,
      "longitude": -9.453318,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 45,
      "squawk": "1370",
      "timestamp": 1660680736,
      "ems": null
    },
    {
      "latitude": 39.003387,
      "longitude": -9.452422,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 50,
      "squawk": "1370",
      "timestamp": 1660680739,
      "ems": null
    },
    {
      "latitude": 39.003937,
      "longitude": -9.451526,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 55,
      "squawk": "1370",
      "timestamp": 1660680742,
      "ems": null
    },
    {
      "latitude": 39.00449,
      "longitude": -9.450256,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 60,
      "squawk": "1370",
      "timestamp": 1660680745,
      "ems": null
    },
    {
      "latitude": 39.004955,
      "longitude": -9.448975,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 69,
      "squawk": "1370",
      "timestamp": 1660680748,
      "ems": null
    },
    {
      "latitude": 39.005219,
      "longitude": -9.447645,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 78,
      "squawk": "1370",
      "timestamp": 1660680751,
      "ems": null
    },
    {
      "latitude": 39.005329,
      "longitude": -9.446106,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 88,
      "squawk": "1370",
      "timestamp": 1660680754,
      "ems": null
    },
    {
      "latitude": 39.005234,
      "longitude": -9.444519,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 95,
      "squawk": "1370",
      "timestamp": 1660680757,
      "ems": null
    },
    {
      "latitude": 39.004955,
      "longitude": -9.442932,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "squawk": "1370",
      "timestamp": 1660680760,
      "ems": null
    },
    {
      "latitude": 39.004349,
      "longitude": -9.441257,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 121,
      "squawk": "1370",
      "timestamp": 1660680763,
      "ems": null
    },
    {
      "latitude": 39.003513,
      "longitude": -9.43988,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 128,
      "squawk": "1370",
      "timestamp": 1660680766,
      "ems": null
    },
    {
      "latitude": 39.002956,
      "longitude": -9.439148,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 134,
      "squawk": "1370",
      "timestamp": 1660680767,
      "ems": null
    },
    {
      "latitude": 39.002243,
      "longitude": -9.438391,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 134,
      "squawk": "1370",
      "timestamp": 1660680769,
      "ems": null
    },
    {
      "latitude": 39.000641,
      "longitude": -9.437077,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 151,
      "squawk": "1370",
      "timestamp": 1660680773,
      "ems": null
    },
    {
      "latitude": 38.99968,
      "longitude": -9.43648,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 155,
      "squawk": "1370",
      "timestamp": 1660680775,
      "ems": null
    },
    {
      "latitude": 38.998859,
      "longitude": -9.436096,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 157,
      "squawk": "1370",
      "timestamp": 1660680777,
      "ems": null
    },
    {
      "latitude": 38.99762,
      "longitude": -9.435465,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 159,
      "squawk": "1370",
      "timestamp": 1660680779,
      "ems": null
    },
    {
      "latitude": 38.997116,
      "longitude": -9.435286,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 161,
      "squawk": "1370",
      "timestamp": 1660680781,
      "ems": null
    },
    {
      "latitude": 38.995789,
      "longitude": -9.434748,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 160,
      "squawk": "1370",
      "timestamp": 1660680783,
      "ems": null
    },
    {
      "latitude": 38.99369,
      "longitude": -9.433899,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 162,
      "squawk": "1370",
      "timestamp": 1660680787,
      "ems": null
    },
    {
      "latitude": 38.992172,
      "longitude": -9.433315,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 163,
      "squawk": "1370",
      "timestamp": 1660680790,
      "ems": null
    },
    {
      "latitude": 38.990616,
      "longitude": -9.432718,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 164,
      "squawk": "1370",
      "timestamp": 1660680793,
      "ems": null
    },
    {
      "latitude": 38.988987,
      "longitude": -9.43219,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "squawk": "1370",
      "timestamp": 1660680796,
      "ems": null
    },
    {
      "latitude": 38.987545,
      "longitude": -9.431702,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 165,
      "squawk": "1370",
      "timestamp": 1660680799,
      "ems": null
    },
    {
      "latitude": 38.985809,
      "longitude": -9.431106,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 167,
      "squawk": "1370",
      "timestamp": 1660680802,
      "ems": null
    },
    {
      "latitude": 38.984436,
      "longitude": -9.430926,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 177,
      "squawk": "1370",
      "timestamp": 1660680805,
      "ems": null
    },
    {
      "latitude": 38.982796,
      "longitude": -9.431091,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 189,
      "squawk": "1370",
      "timestamp": 1660680808,
      "ems": null
    },
    {
      "latitude": 38.981369,
      "longitude": -9.431583,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 201,
      "squawk": "1370",
      "timestamp": 1660680811,
      "ems": null
    },
    {
      "latitude": 38.980331,
      "longitude": -9.432251,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 208,
      "squawk": "1370",
      "timestamp": 1660680813,
      "ems": null
    },
    {
      "latitude": 38.979538,
      "longitude": -9.432983,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 216,
      "squawk": "1370",
      "timestamp": 1660680815,
      "ems": null
    },
    {
      "latitude": 38.97821,
      "longitude": -9.434748,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 231,
      "squawk": "1370",
      "timestamp": 1660680819,
      "ems": null
    },
    {
      "latitude": 38.977352,
      "longitude": -9.436157,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 232,
      "squawk": "1370",
      "timestamp": 1660680822,
      "ems": null
    },
    {
      "latitude": 38.976563,
      "longitude": -9.437554,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 232,
      "squawk": "1370",
      "timestamp": 1660680825,
      "ems": null
    },
    {
      "latitude": 38.975861,
      "longitude": -9.438721,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 232,
      "squawk": "1370",
      "timestamp": 1660680827,
      "ems": null
    },
    {
      "latitude": 38.974915,
      "longitude": -9.440182,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 229,
      "squawk": "1370",
      "timestamp": 1660680831,
      "ems": null
    },
    {
      "latitude": 38.973999,
      "longitude": -9.441436,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 226,
      "squawk": "1370",
      "timestamp": 1660680833,
      "ems": null
    },
    {
      "latitude": 38.972977,
      "longitude": -9.442749,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 225,
      "squawk": "1370",
      "timestamp": 1660680837,
      "ems": null
    },
    {
      "latitude": 38.972076,
      "longitude": -9.443943,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 225,
      "squawk": "1370",
      "timestamp": 1660680839,
      "ems": null
    },
    {
      "latitude": 38.971024,
      "longitude": -9.445316,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 224,
      "squawk": "1370",
      "timestamp": 1660680842,
      "ems": null
    },
    {
      "latitude": 38.970154,
      "longitude": -9.446451,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 225,
      "squawk": "1370",
      "timestamp": 1660680845,
      "ems": null
    },
    {
      "latitude": 38.969997,
      "longitude": -9.446655,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 225,
      "squawk": "1370",
      "timestamp": 1660680845,
      "ems": null
    },
    {
      "latitude": 38.968689,
      "longitude": -9.448481,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 225,
      "squawk": "1370",
      "timestamp": 1660680850,
      "ems": null
    },
    {
      "latitude": 38.967297,
      "longitude": -9.450317,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 227,
      "squawk": "1370",
      "timestamp": 1660680854,
      "ems": null
    },
    {
      "latitude": 38.966225,
      "longitude": -9.451843,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 226,
      "squawk": "1370",
      "timestamp": 1660680857,
      "ems": null
    },
    {
      "latitude": 38.964222,
      "longitude": -9.45459,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 229,
      "squawk": "1370",
      "timestamp": 1660680863,
      "ems": null
    },
    {
      "latitude": 38.962315,
      "longitude": -9.45752,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 231,
      "squawk": "1370",
      "timestamp": 1660680870,
      "ems": null
    },
    {
      "latitude": 38.961456,
      "longitude": -9.45887,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 231,
      "squawk": "1370",
      "timestamp": 1660680873,
      "ems": null
    },
    {
      "latitude": 38.960499,
      "longitude": -9.460449,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 231,
      "squawk": "1370",
      "timestamp": 1660680876,
      "ems": null
    },
    {
      "latitude": 38.958664,
      "longitude": -9.463288,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 230,
      "squawk": "1370",
      "timestamp": 1660680882,
      "ems": null
    },
    {
      "latitude": 38.956833,
      "longitude": -9.466095,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 229,
      "squawk": "1370",
      "timestamp": 1660680889,
      "ems": null
    },
    {
      "latitude": 38.954914,
      "longitude": -9.469116,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 231,
      "squawk": "1370",
      "timestamp": 1660680895,
      "ems": null
    },
    {
      "latitude": 38.953217,
      "longitude": -9.471947,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 233,
      "squawk": "1370",
      "timestamp": 1660680901,
      "ems": null
    },
    {
      "latitude": 38.951477,
      "longitude": -9.475051,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 234,
      "squawk": "1370",
      "timestamp": 1660680907,
      "ems": null
    },
    {
      "latitude": 38.949783,
      "longitude": -9.478096,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 235,
      "squawk": "1370",
      "timestamp": 1660680914,
      "ems": null
    },
    {
      "latitude": 38.948025,
      "longitude": -9.481323,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 235,
      "squawk": "1370",
      "timestamp": 1660680920,
      "ems": null
    },
    {
      "latitude": 38.946259,
      "longitude": -9.484664,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 236,
      "squawk": "1370",
      "timestamp": 1660680926,
      "ems": null
    },
    {
      "latitude": 38.944656,
      "longitude": -9.487829,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 237,
      "squawk": "1370",
      "timestamp": 1660680932,
      "ems": null
    },
    {
      "latitude": 38.943043,
      "longitude": -9.490967,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 236,
      "squawk": "1370",
      "timestamp": 1660680938,
      "ems": null
    },
    {
      "latitude": 38.941505,
      "longitude": -9.493958,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 236,
      "squawk": "1370",
      "timestamp": 1660680944,
      "ems": null
    },
    {
      "latitude": 38.939758,
      "longitude": -9.497084,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 231,
      "squawk": "1370",
      "timestamp": 1660680950,
      "ems": null
    },
    {
      "latitude": 38.938618,
      "longitude": -9.498718,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 226,
      "squawk": "1370",
      "timestamp": 1660680954,
      "ems": null
    },
    {
      "latitude": 38.937504,
      "longitude": -9.500061,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 222,
      "squawk": "1370",
      "timestamp": 1660680957,
      "ems": null
    },
    {
      "latitude": 38.936279,
      "longitude": -9.501442,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 220,
      "squawk": "1370",
      "timestamp": 1660680960,
      "ems": null
    },
    {
      "latitude": 38.935135,
      "longitude": -9.502696,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 221,
      "squawk": "1370",
      "timestamp": 1660680963,
      "ems": null
    },
    {
      "latitude": 38.934082,
      "longitude": -9.50389,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 221,
      "squawk": "1370",
      "timestamp": 1660680965,
      "ems": null
    },
    {
      "latitude": 38.9328,
      "longitude": -9.505383,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 222,
      "squawk": "1370",
      "timestamp": 1660680969,
      "ems": null
    },
    {
      "latitude": 38.931728,
      "longitude": -9.506653,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 221,
      "squawk": "1370",
      "timestamp": 1660680972,
      "ems": null
    },
    {
      "latitude": 38.930473,
      "longitude": -9.508057,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 221,
      "squawk": "1370",
      "timestamp": 1660680975,
      "ems": null
    },
    {
      "latitude": 38.92923,
      "longitude": -9.509383,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 220,
      "squawk": "1370",
      "timestamp": 1660680978,
      "ems": null
    },
    {
      "latitude": 38.92804,
      "longitude": -9.510697,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 220,
      "squawk": "1370",
      "timestamp": 1660680981,
      "ems": null
    },
    {
      "latitude": 38.926796,
      "longitude": -9.512085,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 220,
      "squawk": "1370",
      "timestamp": 1660680984,
      "ems": null
    },
    {
      "latitude": 38.924423,
      "longitude": -9.514578,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 217,
      "squawk": "1370",
      "timestamp": 1660680990,
      "ems": null
    },
    {
      "latitude": 38.923069,
      "longitude": -9.515747,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 213,
      "squawk": "1370",
      "timestamp": 1660680993,
      "ems": null
    },
    {
      "latitude": 38.921585,
      "longitude": -9.517026,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 213,
      "squawk": "1370",
      "timestamp": 1660680996,
      "ems": null
    },
    {
      "latitude": 38.920349,
      "longitude": -9.518042,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 211,
      "squawk": "1370",
      "timestamp": 1660680999,
      "ems": null
    },
    {
      "latitude": 38.91888,
      "longitude": -9.519104,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 210,
      "squawk": "1370",
      "timestamp": 1660681002,
      "ems": null
    },
    {
      "latitude": 38.917648,
      "longitude": -9.520012,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 208,
      "squawk": "1370",
      "timestamp": 1660681005,
      "ems": null
    },
    {
      "latitude": 38.916042,
      "longitude": -9.521118,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 208,
      "squawk": "1370",
      "timestamp": 1660681008,
      "ems": null
    },
    {
      "latitude": 38.914627,
      "longitude": -9.522041,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 207,
      "squawk": "1370",
      "timestamp": 1660681011,
      "ems": null
    },
    {
      "latitude": 38.913162,
      "longitude": -9.523057,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 207,
      "squawk": "1370",
      "timestamp": 1660681014,
      "ems": null
    },
    {
      "latitude": 38.911617,
      "longitude": -9.524048,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 206,
      "squawk": "1370",
      "timestamp": 1660681017,
      "ems": null
    },
    {
      "latitude": 38.910095,
      "longitude": -9.525027,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 206,
      "squawk": "1370",
      "timestamp": 1660681020,
      "ems": null
    },
    {
      "latitude": 38.908592,
      "longitude": -9.52594,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 204,
      "squawk": "1370",
      "timestamp": 1660681023,
      "ems": null
    },
    {
      "latitude": 38.90712,
      "longitude": -9.526758,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 204,
      "squawk": "1370",
      "timestamp": 1660681026,
      "ems": null
    },
    {
      "latitude": 38.905754,
      "longitude": -9.527527,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 203,
      "squawk": "1370",
      "timestamp": 1660681029,
      "ems": null
    },
    {
      "latitude": 38.904099,
      "longitude": -9.52849,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 203,
      "squawk": "1370",
      "timestamp": 1660681032,
      "ems": null
    },
    {
      "latitude": 38.902634,
      "longitude": -9.529266,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 202,
      "squawk": "1370",
      "timestamp": 1660681035,
      "ems": null
    },
    {
      "latitude": 38.901516,
      "longitude": -9.529846,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 202,
      "squawk": "1370",
      "timestamp": 1660681037,
      "ems": null
    },
    {
      "latitude": 38.899933,
      "longitude": -9.53064,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 202,
      "squawk": "1370",
      "timestamp": 1660681041,
      "ems": null
    },
    {
      "latitude": 38.897552,
      "longitude": -9.532013,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 204,
      "squawk": "1370",
      "timestamp": 1660681047,
      "ems": null
    },
    {
      "latitude": 38.894348,
      "longitude": -9.533752,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 201,
      "squawk": "1370",
      "timestamp": 1660681053,
      "ems": null
    },
    {
      "latitude": 38.892883,
      "longitude": -9.534342,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 196,
      "squawk": "1370",
      "timestamp": 1660681056,
      "ems": null
    },
    {
      "latitude": 38.89119,
      "longitude": -9.534939,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 194,
      "squawk": "1370",
      "timestamp": 1660681059,
      "ems": null
    },
    {
      "latitude": 38.889599,
      "longitude": -9.5354,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 193,
      "squawk": "1370",
      "timestamp": 1660681061,
      "ems": null
    },
    {
      "latitude": 38.887939,
      "longitude": -9.535954,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 193,
      "squawk": "1370",
      "timestamp": 1660681065,
      "ems": null
    },
    {
      "latitude": 38.886429,
      "longitude": -9.536431,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 194,
      "squawk": "1370",
      "timestamp": 1660681067,
      "ems": null
    },
    {
      "latitude": 38.884827,
      "longitude": -9.536909,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 194,
      "squawk": "1370",
      "timestamp": 1660681070,
      "ems": null
    },
    {
      "latitude": 38.883083,
      "longitude": -9.537476,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 193,
      "squawk": "1370",
      "timestamp": 1660681074,
      "ems": null
    },
    {
      "latitude": 38.881577,
      "longitude": -9.537924,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 193,
      "squawk": "1370",
      "timestamp": 1660681076,
      "ems": null
    },
    {
      "latitude": 38.880009,
      "longitude": -9.538452,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 193,
      "squawk": "1370",
      "timestamp": 1660681080,
      "ems": null
    },
    {
      "latitude": 38.876659,
      "longitude": -9.539368,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 189,
      "squawk": "1370",
      "timestamp": 1660681086,
      "ems": null
    },
    {
      "latitude": 38.875031,
      "longitude": -9.539551,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 182,
      "squawk": "1370",
      "timestamp": 1660681089,
      "ems": null
    },
    {
      "latitude": 38.873306,
      "longitude": -9.539429,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 172,
      "squawk": "1370",
      "timestamp": 1660681092,
      "ems": null
    },
    {
      "latitude": 38.87178,
      "longitude": -9.539059,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 167,
      "squawk": "1370",
      "timestamp": 1660681095,
      "ems": null
    },
    {
      "latitude": 38.870361,
      "longitude": -9.538462,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 161,
      "squawk": "1370",
      "timestamp": 1660681098,
      "ems": null
    },
    {
      "latitude": 38.86853,
      "longitude": -9.537625,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 157,
      "squawk": "1370",
      "timestamp": 1660681101,
      "ems": null
    },
    {
      "latitude": 38.867157,
      "longitude": -9.53679,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 153,
      "squawk": "1370",
      "timestamp": 1660681104,
      "ems": null
    },
    {
      "latitude": 38.865692,
      "longitude": -9.535715,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 151,
      "squawk": "1370",
      "timestamp": 1660681107,
      "ems": null
    },
    {
      "latitude": 38.864323,
      "longitude": -9.534607,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 146,
      "squawk": "1370",
      "timestamp": 1660681110,
      "ems": null
    },
    {
      "latitude": 38.863159,
      "longitude": -9.53363,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 146,
      "squawk": "1370",
      "timestamp": 1660681113,
      "ems": null
    },
    {
      "latitude": 38.86171,
      "longitude": -9.532431,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 147,
      "squawk": "1370",
      "timestamp": 1660681116,
      "ems": null
    },
    {
      "latitude": 38.860794,
      "longitude": -9.531714,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 147,
      "squawk": "1370",
      "timestamp": 1660681118,
      "ems": null
    },
    {
      "latitude": 38.859249,
      "longitude": -9.530457,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 148,
      "squawk": "1370",
      "timestamp": 1660681122,
      "ems": null
    },
    {
      "latitude": 38.858036,
      "longitude": -9.529541,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 148,
      "squawk": "1370",
      "timestamp": 1660681124,
      "ems": null
    },
    {
      "latitude": 38.856537,
      "longitude": -9.528371,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 148,
      "squawk": "1370",
      "timestamp": 1660681128,
      "ems": null
    },
    {
      "latitude": 38.855057,
      "longitude": -9.527283,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 148,
      "squawk": "1370",
      "timestamp": 1660681131,
      "ems": null
    },
    {
      "latitude": 38.853928,
      "longitude": -9.526401,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 148,
      "squawk": "1370",
      "timestamp": 1660681134,
      "ems": null
    },
    {
      "latitude": 38.851089,
      "longitude": -9.524072,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 146,
      "squawk": "1370",
      "timestamp": 1660681140,
      "ems": null
    },
    {
      "latitude": 38.848495,
      "longitude": -9.521912,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 146,
      "squawk": "1370",
      "timestamp": 1660681146,
      "ems": null
    },
    {
      "latitude": 38.845734,
      "longitude": -9.519653,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 148,
      "squawk": "1370",
      "timestamp": 1660681152,
      "ems": null
    },
    {
      "latitude": 38.842953,
      "longitude": -9.517517,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 149,
      "squawk": "1370",
      "timestamp": 1660681158,
      "ems": null
    },
    {
      "latitude": 38.840103,
      "longitude": -9.515414,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 150,
      "squawk": "1370",
      "timestamp": 1660681164,
      "ems": null
    },
    {
      "latitude": 38.83667,
      "longitude": -9.512966,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 151,
      "squawk": "1370",
      "timestamp": 1660681171,
      "ems": null
    },
    {
      "latitude": 38.833969,
      "longitude": -9.511047,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 151,
      "squawk": "1370",
      "timestamp": 1660681177,
      "ems": null
    },
    {
      "latitude": 38.831501,
      "longitude": -9.508789,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 137,
      "squawk": "1370",
      "timestamp": 1660681183,
      "ems": null
    },
    {
      "latitude": 38.830387,
      "longitude": -9.507385,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 133,
      "squawk": "1370",
      "timestamp": 1660681186,
      "ems": null
    },
    {
      "latitude": 38.829208,
      "longitude": -9.505562,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 127,
      "squawk": "1370",
      "timestamp": 1660681189,
      "ems": null
    },
    {
      "latitude": 38.828247,
      "longitude": -9.50395,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 123,
      "squawk": "1370",
      "timestamp": 1660681192,
      "ems": null
    },
    {
      "latitude": 38.827641,
      "longitude": -9.502563,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 123,
      "squawk": "1370",
      "timestamp": 1660681194,
      "ems": null
    },
    {
      "latitude": 38.826828,
      "longitude": -9.500607,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 115,
      "squawk": "1370",
      "timestamp": 1660681198,
      "ems": null
    },
    {
      "latitude": 38.826324,
      "longitude": -9.498935,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 110,
      "squawk": "1370",
      "timestamp": 1660681200,
      "ems": null
    },
    {
      "latitude": 38.825867,
      "longitude": -9.496904,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 102,
      "squawk": "1370",
      "timestamp": 1660681204,
      "ems": null
    },
    {
      "latitude": 38.825638,
      "longitude": -9.495053,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 96,
      "squawk": "1370",
      "timestamp": 1660681206,
      "ems": null
    },
    {
      "latitude": 38.825546,
      "longitude": -9.492845,
      "altitude": {
        "feet": 4700,
        "meters": 1433
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 90,
      "squawk": "1370",
      "timestamp": 1660681210,
      "ems": null
    },
    {
      "latitude": 38.825638,
      "longitude": -9.491333,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 83,
      "squawk": "1370",
      "timestamp": 1660681212,
      "ems": null
    },
    {
      "latitude": 38.825912,
      "longitude": -9.489202,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 78,
      "squawk": "1370",
      "timestamp": 1660681216,
      "ems": null
    },
    {
      "latitude": 38.826233,
      "longitude": -9.487709,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 71,
      "squawk": "1370",
      "timestamp": 1660681218,
      "ems": null
    },
    {
      "latitude": 38.826782,
      "longitude": -9.486157,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 62,
      "squawk": "1370",
      "timestamp": 1660681222,
      "ems": null
    },
    {
      "latitude": 38.827545,
      "longitude": -9.48468,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 53,
      "squawk": "1370",
      "timestamp": 1660681225,
      "ems": null
    },
    {
      "latitude": 38.828293,
      "longitude": -9.483589,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 48,
      "squawk": "1370",
      "timestamp": 1660681228,
      "ems": null
    },
    {
      "latitude": 38.8293,
      "longitude": -9.482455,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 39,
      "squawk": "1370",
      "timestamp": 1660681231,
      "ems": null
    },
    {
      "latitude": 38.830215,
      "longitude": -9.481619,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 32,
      "squawk": "1370",
      "timestamp": 1660681234,
      "ems": null
    },
    {
      "latitude": 38.831177,
      "longitude": -9.480963,
      "altitude": {
        "feet": 4600,
        "meters": 1402
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
      "heading": 27,
      "squawk": "1370",
      "timestamp": 1660681237,
      "ems": null
    },
    {
      "latitude": 38.83223,
      "longitude": -9.480306,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 23,
      "squawk": "1370",
      "timestamp": 1660681240,
      "ems": null
    },
    {
      "latitude": 38.833099,
      "longitude": -9.479888,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 18,
      "squawk": "1370",
      "timestamp": 1660681242,
      "ems": null
    },
    {
      "latitude": 38.834343,
      "longitude": -9.479553,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 8,
      "squawk": "1370",
      "timestamp": 1660681246,
      "ems": null
    },
    {
      "latitude": 38.834702,
      "longitude": -9.479529,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 5,
      "squawk": "1370",
      "timestamp": 1660681247,
      "ems": null
    },
    {
      "latitude": 38.83625,
      "longitude": -9.479553,
      "altitude": {
        "feet": 4500,
        "meters": 1372
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
      "heading": 352,
      "squawk": "1370",
      "timestamp": 1660681251,
      "ems": null
    },
    {
      "latitude": 38.837265,
      "longitude": -9.479888,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660681254,
      "ems": null
    },
    {
      "latitude": 38.838345,
      "longitude": -9.480408,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 334,
      "squawk": "1370",
      "timestamp": 1660681258,
      "ems": null
    },
    {
      "latitude": 38.839371,
      "longitude": -9.481201,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 325,
      "squawk": "1370",
      "timestamp": 1660681260,
      "ems": null
    },
    {
      "latitude": 38.840347,
      "longitude": -9.482178,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 320,
      "squawk": "1370",
      "timestamp": 1660681263,
      "ems": null
    },
    {
      "latitude": 38.841202,
      "longitude": -9.483291,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 314,
      "squawk": "1370",
      "timestamp": 1660681267,
      "ems": null
    },
    {
      "latitude": 38.841934,
      "longitude": -9.484365,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 307,
      "squawk": "1370",
      "timestamp": 1660681270,
      "ems": null
    },
    {
      "latitude": 38.842628,
      "longitude": -9.485779,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 300,
      "squawk": "1370",
      "timestamp": 1660681273,
      "ems": null
    },
    {
      "latitude": 38.84317,
      "longitude": -9.486993,
      "altitude": {
        "feet": 4300,
        "meters": 1311
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 299,
      "squawk": "1370",
      "timestamp": 1660681275,
      "ems": null
    },
    {
      "latitude": 38.843792,
      "longitude": -9.488281,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 303,
      "squawk": "1370",
      "timestamp": 1660681279,
      "ems": null
    },
    {
      "latitude": 38.844585,
      "longitude": -9.489624,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 309,
      "squawk": "1370",
      "timestamp": 1660681282,
      "ems": null
    },
    {
      "latitude": 38.845234,
      "longitude": -9.490601,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 312,
      "squawk": "1370",
      "timestamp": 1660681285,
      "ems": null
    },
    {
      "latitude": 38.845982,
      "longitude": -9.491638,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 312,
      "squawk": "1370",
      "timestamp": 1660681287,
      "ems": null
    },
    {
      "latitude": 38.846878,
      "longitude": -9.492904,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 311,
      "squawk": "1370",
      "timestamp": 1660681291,
      "ems": null
    },
    {
      "latitude": 38.847515,
      "longitude": -9.493896,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660681294,
      "ems": null
    },
    {
      "latitude": 38.848343,
      "longitude": -9.495113,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 309,
      "squawk": "1370",
      "timestamp": 1660681297,
      "ems": null
    },
    {
      "latitude": 38.849751,
      "longitude": -9.497314,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 309,
      "squawk": "1370",
      "timestamp": 1660681303,
      "ems": null
    },
    {
      "latitude": 38.850449,
      "longitude": -9.498397,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 309,
      "squawk": "1370",
      "timestamp": 1660681306,
      "ems": null
    },
    {
      "latitude": 38.850998,
      "longitude": -9.499173,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 309,
      "squawk": "1370",
      "timestamp": 1660681309,
      "ems": null
    },
    {
      "latitude": 38.85273,
      "longitude": -9.501892,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 309,
      "squawk": "1370",
      "timestamp": 1660681315,
      "ems": null
    },
    {
      "latitude": 38.854126,
      "longitude": -9.504028,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660681321,
      "ems": null
    },
    {
      "latitude": 38.855576,
      "longitude": -9.506219,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660681327,
      "ems": null
    },
    {
      "latitude": 38.85704,
      "longitude": -9.508429,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660681333,
      "ems": null
    },
    {
      "latitude": 38.858597,
      "longitude": -9.510681,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660681339,
      "ems": null
    },
    {
      "latitude": 38.85997,
      "longitude": -9.512787,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 309,
      "squawk": "1370",
      "timestamp": 1660681345,
      "ems": null
    },
    {
      "latitude": 38.861572,
      "longitude": -9.515175,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660681351,
      "ems": null
    },
    {
      "latitude": 38.863018,
      "longitude": -9.517334,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660681358,
      "ems": null
    },
    {
      "latitude": 38.864555,
      "longitude": -9.519531,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 312,
      "squawk": "1370",
      "timestamp": 1660681364,
      "ems": null
    },
    {
      "latitude": 38.865906,
      "longitude": -9.521484,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 311,
      "squawk": "1370",
      "timestamp": 1660681370,
      "ems": null
    },
    {
      "latitude": 38.867393,
      "longitude": -9.523743,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 310,
      "squawk": "1370",
      "timestamp": 1660681376,
      "ems": null
    },
    {
      "latitude": 38.868622,
      "longitude": -9.525683,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 307,
      "squawk": "1370",
      "timestamp": 1660681383,
      "ems": null
    },
    {
      "latitude": 38.869255,
      "longitude": -9.526855,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 304,
      "squawk": "1370",
      "timestamp": 1660681385,
      "ems": null
    },
    {
      "latitude": 38.869816,
      "longitude": -9.528015,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 300,
      "squawk": "1370",
      "timestamp": 1660681389,
      "ems": null
    },
    {
      "latitude": 38.870316,
      "longitude": -9.529087,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 300,
      "squawk": "1370",
      "timestamp": 1660681391,
      "ems": null
    },
    {
      "latitude": 38.870911,
      "longitude": -9.530401,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 301,
      "squawk": "1370",
      "timestamp": 1660681395,
      "ems": null
    },
    {
      "latitude": 38.87146,
      "longitude": -9.531535,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 300,
      "squawk": "1370",
      "timestamp": 1660681398,
      "ems": null
    },
    {
      "latitude": 38.871956,
      "longitude": -9.532837,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 294,
      "squawk": "1370",
      "timestamp": 1660681401,
      "ems": null
    },
    {
      "latitude": 38.872284,
      "longitude": -9.534102,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 284,
      "squawk": "1370",
      "timestamp": 1660681404,
      "ems": null
    },
    {
      "latitude": 38.872513,
      "longitude": -9.535774,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 278,
      "squawk": "1370",
      "timestamp": 1660681407,
      "ems": null
    },
    {
      "latitude": 38.87265,
      "longitude": -9.537268,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 275,
      "squawk": "1370",
      "timestamp": 1660681410,
      "ems": null
    },
    {
      "latitude": 38.872742,
      "longitude": -9.538819,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 275,
      "squawk": "1370",
      "timestamp": 1660681413,
      "ems": null
    },
    {
      "latitude": 38.872887,
      "longitude": -9.540405,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 275,
      "squawk": "1370",
      "timestamp": 1660681417,
      "ems": null
    },
    {
      "latitude": 38.873016,
      "longitude": -9.542223,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 276,
      "squawk": "1370",
      "timestamp": 1660681420,
      "ems": null
    },
    {
      "latitude": 38.873199,
      "longitude": -9.543656,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 277,
      "squawk": "1370",
      "timestamp": 1660681423,
      "ems": null
    },
    {
      "latitude": 38.873337,
      "longitude": -9.545328,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 276,
      "squawk": "1370",
      "timestamp": 1660681426,
      "ems": null
    },
    {
      "latitude": 38.873447,
      "longitude": -9.546753,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 275,
      "squawk": "1370",
      "timestamp": 1660681429,
      "ems": null
    },
    {
      "latitude": 38.87352,
      "longitude": -9.548612,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 268,
      "squawk": "1370",
      "timestamp": 1660681432,
      "ems": null
    },
    {
      "latitude": 38.873306,
      "longitude": -9.550171,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 260,
      "squawk": "1370",
      "timestamp": 1660681435,
      "ems": null
    },
    {
      "latitude": 38.872841,
      "longitude": -9.551819,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 247,
      "squawk": "1370",
      "timestamp": 1660681438,
      "ems": null
    },
    {
      "latitude": 38.872009,
      "longitude": -9.553687,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 236,
      "squawk": "1370",
      "timestamp": 1660681442,
      "ems": null
    },
    {
      "latitude": 38.871094,
      "longitude": -9.55518,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 229,
      "squawk": "1370",
      "timestamp": 1660681445,
      "ems": null
    },
    {
      "latitude": 38.870049,
      "longitude": -9.556458,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 222,
      "squawk": "1370",
      "timestamp": 1660681448,
      "ems": null
    },
    {
      "latitude": 38.868851,
      "longitude": -9.557628,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 213,
      "squawk": "1370",
      "timestamp": 1660681451,
      "ems": null
    },
    {
      "latitude": 38.867439,
      "longitude": -9.558594,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 207,
      "squawk": "1370",
      "timestamp": 1660681454,
      "ems": null
    },
    {
      "latitude": 38.865952,
      "longitude": -9.559387,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 199,
      "squawk": "1370",
      "timestamp": 1660681457,
      "ems": null
    },
    {
      "latitude": 38.86441,
      "longitude": -9.559957,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 192,
      "squawk": "1370",
      "timestamp": 1660681460,
      "ems": null
    },
    {
      "latitude": 38.862534,
      "longitude": -9.560255,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 185,
      "squawk": "1370",
      "timestamp": 1660681463,
      "ems": null
    },
    {
      "latitude": 38.860832,
      "longitude": -9.560242,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 178,
      "squawk": "1370",
      "timestamp": 1660681466,
      "ems": null
    },
    {
      "latitude": 38.859295,
      "longitude": -9.560059,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 169,
      "squawk": "1370",
      "timestamp": 1660681469,
      "ems": null
    },
    {
      "latitude": 38.857635,
      "longitude": -9.559479,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 162,
      "squawk": "1370",
      "timestamp": 1660681472,
      "ems": null
    },
    {
      "latitude": 38.856079,
      "longitude": -9.558702,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 156,
      "squawk": "1370",
      "timestamp": 1660681475,
      "ems": null
    },
    {
      "latitude": 38.854733,
      "longitude": -9.557678,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 147,
      "squawk": "1370",
      "timestamp": 1660681478,
      "ems": null
    },
    {
      "latitude": 38.85347,
      "longitude": -9.556553,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 140,
      "squawk": "1370",
      "timestamp": 1660681481,
      "ems": null
    },
    {
      "latitude": 38.85228,
      "longitude": -9.55506,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 132,
      "squawk": "1370",
      "timestamp": 1660681484,
      "ems": null
    },
    {
      "latitude": 38.851521,
      "longitude": -9.553894,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 126,
      "squawk": "1370",
      "timestamp": 1660681487,
      "ems": null
    },
    {
      "latitude": 38.850494,
      "longitude": -9.551955,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 120,
      "squawk": "1370",
      "timestamp": 1660681490,
      "ems": null
    },
    {
      "latitude": 38.849716,
      "longitude": -9.550104,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 118,
      "squawk": "1370",
      "timestamp": 1660681493,
      "ems": null
    },
    {
      "latitude": 38.849285,
      "longitude": -9.549133,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 118,
      "squawk": "1370",
      "timestamp": 1660681496,
      "ems": null
    },
    {
      "latitude": 38.848206,
      "longitude": -9.546641,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 118,
      "squawk": "1370",
      "timestamp": 1660681499,
      "ems": null
    },
    {
      "latitude": 38.847424,
      "longitude": -9.5448,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 118,
      "squawk": "1370",
      "timestamp": 1660681502,
      "ems": null
    },
    {
      "latitude": 38.84668,
      "longitude": -9.542969,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 118,
      "squawk": "1370",
      "timestamp": 1660681505,
      "ems": null
    },
    {
      "latitude": 38.846008,
      "longitude": -9.541388,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 117,
      "squawk": "1370",
      "timestamp": 1660681508,
      "ems": null
    },
    {
      "latitude": 38.845184,
      "longitude": -9.539357,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 117,
      "squawk": "1370",
      "timestamp": 1660681511,
      "ems": null
    },
    {
      "latitude": 38.844452,
      "longitude": -9.537566,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 117,
      "squawk": "1370",
      "timestamp": 1660681514,
      "ems": null
    },
    {
      "latitude": 38.843746,
      "longitude": -9.535828,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 116,
      "squawk": "1370",
      "timestamp": 1660681517,
      "ems": null
    },
    {
      "latitude": 38.842438,
      "longitude": -9.532192,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 114,
      "squawk": "1370",
      "timestamp": 1660681523,
      "ems": null
    },
    {
      "latitude": 38.841705,
      "longitude": -9.530222,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 113,
      "squawk": "1370",
      "timestamp": 1660681526,
      "ems": null
    },
    {
      "latitude": 38.841064,
      "longitude": -9.528192,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 113,
      "squawk": "1370",
      "timestamp": 1660681530,
      "ems": null
    },
    {
      "latitude": 38.83979,
      "longitude": -9.524536,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 114,
      "squawk": "1370",
      "timestamp": 1660681535,
      "ems": null
    },
    {
      "latitude": 38.838486,
      "longitude": -9.520935,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 115,
      "squawk": "1370",
      "timestamp": 1660681542,
      "ems": null
    },
    {
      "latitude": 38.837044,
      "longitude": -9.517151,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 115,
      "squawk": "1370",
      "timestamp": 1660681548,
      "ems": null
    },
    {
      "latitude": 38.835892,
      "longitude": -9.513922,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 115,
      "squawk": "1370",
      "timestamp": 1660681553,
      "ems": null
    },
    {
      "latitude": 38.834015,
      "longitude": -9.509682,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 125,
      "squawk": "1370",
      "timestamp": 1660681560,
      "ems": null
    },
    {
      "latitude": 38.832947,
      "longitude": -9.508057,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 132,
      "squawk": "1370",
      "timestamp": 1660681562,
      "ems": null
    },
    {
      "latitude": 38.831596,
      "longitude": -9.506592,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 141,
      "squawk": "1370",
      "timestamp": 1660681566,
      "ems": null
    },
    {
      "latitude": 38.831131,
      "longitude": -9.506165,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 142,
      "squawk": "1370",
      "timestamp": 1660681568,
      "ems": null
    },
    {
      "latitude": 38.828663,
      "longitude": -9.504333,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 153,
      "squawk": "1370",
      "timestamp": 1660681571,
      "ems": null
    },
    {
      "latitude": 38.826965,
      "longitude": -9.503412,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 158,
      "squawk": "1370",
      "timestamp": 1660681575,
      "ems": null
    },
    {
      "latitude": 38.825542,
      "longitude": -9.502869,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 163,
      "squawk": "1370",
      "timestamp": 1660681577,
      "ems": null
    },
    {
      "latitude": 38.823715,
      "longitude": -9.502278,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 167,
      "squawk": "1370",
      "timestamp": 1660681580,
      "ems": null
    },
    {
      "latitude": 38.821701,
      "longitude": -9.50198,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 176,
      "squawk": "1370",
      "timestamp": 1660681584,
      "ems": null
    },
    {
      "latitude": 38.819958,
      "longitude": -9.502075,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 184,
      "squawk": "1370",
      "timestamp": 1660681587,
      "ems": null
    },
    {
      "latitude": 38.818188,
      "longitude": -9.502319,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 187,
      "squawk": "1370",
      "timestamp": 1660681590,
      "ems": null
    },
    {
      "latitude": 38.816299,
      "longitude": -9.502696,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 189,
      "squawk": "1370",
      "timestamp": 1660681593,
      "ems": null
    },
    {
      "latitude": 38.81456,
      "longitude": -9.503114,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 191,
      "squawk": "1370",
      "timestamp": 1660681596,
      "ems": null
    },
    {
      "latitude": 38.812729,
      "longitude": -9.503652,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 192,
      "squawk": "1370",
      "timestamp": 1660681599,
      "ems": null
    },
    {
      "latitude": 38.811111,
      "longitude": -9.504089,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 193,
      "squawk": "1370",
      "timestamp": 1660681602,
      "ems": null
    },
    {
      "latitude": 38.80925,
      "longitude": -9.504666,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 193,
      "squawk": "1370",
      "timestamp": 1660681605,
      "ems": null
    },
    {
      "latitude": 38.80748,
      "longitude": -9.505249,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 193,
      "squawk": "1370",
      "timestamp": 1660681608,
      "ems": null
    },
    {
      "latitude": 38.805714,
      "longitude": -9.505737,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 192,
      "squawk": "1370",
      "timestamp": 1660681612,
      "ems": null
    },
    {
      "latitude": 38.80394,
      "longitude": -9.506219,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 191,
      "squawk": "1370",
      "timestamp": 1660681615,
      "ems": null
    },
    {
      "latitude": 38.800312,
      "longitude": -9.507141,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 191,
      "squawk": "1370",
      "timestamp": 1660681621,
      "ems": null
    },
    {
      "latitude": 38.796707,
      "longitude": -9.50813,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 192,
      "squawk": "1370",
      "timestamp": 1660681627,
      "ems": null
    },
    {
      "latitude": 38.793182,
      "longitude": -9.509085,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 192,
      "squawk": "1370",
      "timestamp": 1660681633,
      "ems": null
    },
    {
      "latitude": 38.789658,
      "longitude": -9.50998,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 190,
      "squawk": "1370",
      "timestamp": 1660681639,
      "ems": null
    },
    {
      "latitude": 38.785721,
      "longitude": -9.510877,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 189,
      "squawk": "1370",
      "timestamp": 1660681645,
      "ems": null
    },
    {
      "latitude": 38.782059,
      "longitude": -9.511593,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 187,
      "squawk": "1370",
      "timestamp": 1660681651,
      "ems": null
    },
    {
      "latitude": 38.780247,
      "longitude": -9.511841,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 185,
      "squawk": "1370",
      "timestamp": 1660681654,
      "ems": null
    },
    {
      "latitude": 38.778618,
      "longitude": -9.511963,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 182,
      "squawk": "1370",
      "timestamp": 1660681657,
      "ems": null
    },
    {
      "latitude": 38.776524,
      "longitude": -9.512085,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 181,
      "squawk": "1370",
      "timestamp": 1660681660,
      "ems": null
    },
    {
      "latitude": 38.774963,
      "longitude": -9.512071,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 178,
      "squawk": "1370",
      "timestamp": 1660681663,
      "ems": null
    },
    {
      "latitude": 38.772614,
      "longitude": -9.511963,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 177,
      "squawk": "1370",
      "timestamp": 1660681666,
      "ems": null
    },
    {
      "latitude": 38.770798,
      "longitude": -9.511772,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 175,
      "squawk": "1370",
      "timestamp": 1660681669,
      "ems": null
    },
    {
      "latitude": 38.768967,
      "longitude": -9.511593,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 175,
      "squawk": "1370",
      "timestamp": 1660681672,
      "ems": null
    },
    {
      "latitude": 38.766724,
      "longitude": -9.511414,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 175,
      "squawk": "1370",
      "timestamp": 1660681675,
      "ems": null
    },
    {
      "latitude": 38.764847,
      "longitude": -9.511234,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 176,
      "squawk": "1370",
      "timestamp": 1660681678,
      "ems": null
    },
    {
      "latitude": 38.762741,
      "longitude": -9.511115,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 176,
      "squawk": "1370",
      "timestamp": 1660681681,
      "ems": null
    },
    {
      "latitude": 38.760727,
      "longitude": -9.510936,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 176,
      "squawk": "1370",
      "timestamp": 1660681684,
      "ems": null
    },
    {
      "latitude": 38.758759,
      "longitude": -9.510756,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 175,
      "squawk": "1370",
      "timestamp": 1660681687,
      "ems": null
    },
    {
      "latitude": 38.757343,
      "longitude": -9.51062,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 175,
      "squawk": "1370",
      "timestamp": 1660681690,
      "ems": null
    },
    {
      "latitude": 38.752945,
      "longitude": -9.51004,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 172,
      "squawk": "1370",
      "timestamp": 1660681696,
      "ems": null
    },
    {
      "latitude": 38.749008,
      "longitude": -9.509324,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 169,
      "squawk": "1370",
      "timestamp": 1660681702,
      "ems": null
    },
    {
      "latitude": 38.746902,
      "longitude": -9.508786,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 167,
      "squawk": "1370",
      "timestamp": 1660681705,
      "ems": null
    },
    {
      "latitude": 38.74498,
      "longitude": -9.50813,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 165,
      "squawk": "1370",
      "timestamp": 1660681708,
      "ems": null
    },
    {
      "latitude": 38.743378,
      "longitude": -9.507629,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 164,
      "squawk": "1370",
      "timestamp": 1660681711,
      "ems": null
    },
    {
      "latitude": 38.741135,
      "longitude": -9.506816,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 164,
      "squawk": "1370",
      "timestamp": 1660681714,
      "ems": null
    },
    {
      "latitude": 38.739285,
      "longitude": -9.506165,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 163,
      "squawk": "1370",
      "timestamp": 1660681717,
      "ems": null
    },
    {
      "latitude": 38.73756,
      "longitude": -9.505432,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 162,
      "squawk": "1370",
      "timestamp": 1660681720,
      "ems": null
    },
    {
      "latitude": 38.73542,
      "longitude": -9.504578,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 161,
      "squawk": "1370",
      "timestamp": 1660681723,
      "ems": null
    },
    {
      "latitude": 38.733444,
      "longitude": -9.503771,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 161,
      "squawk": "1370",
      "timestamp": 1660681726,
      "ems": null
    },
    {
      "latitude": 38.731567,
      "longitude": -9.502995,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 162,
      "squawk": "1370",
      "timestamp": 1660681729,
      "ems": null
    },
    {
      "latitude": 38.727905,
      "longitude": -9.501621,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 164,
      "squawk": "1370",
      "timestamp": 1660681735,
      "ems": null
    },
    {
      "latitude": 38.724106,
      "longitude": -9.500366,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 165,
      "squawk": "1370",
      "timestamp": 1660681741,
      "ems": null
    },
    {
      "latitude": 38.720104,
      "longitude": -9.498901,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 163,
      "squawk": "1370",
      "timestamp": 1660681747,
      "ems": null
    },
    {
      "latitude": 38.716278,
      "longitude": -9.497442,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 162,
      "squawk": "1370",
      "timestamp": 1660681753,
      "ems": null
    },
    {
      "latitude": 38.712654,
      "longitude": -9.495911,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 162,
      "squawk": "1370",
      "timestamp": 1660681759,
      "ems": null
    },
    {
      "latitude": 38.709137,
      "longitude": -9.494337,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 158,
      "squawk": "1370",
      "timestamp": 1660681765,
      "ems": null
    },
    {
      "latitude": 38.707161,
      "longitude": -9.493286,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 155,
      "squawk": "1370",
      "timestamp": 1660681768,
      "ems": null
    },
    {
      "latitude": 38.705441,
      "longitude": -9.492126,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "1370",
      "timestamp": 1660681771,
      "ems": null
    },
    {
      "latitude": 38.703735,
      "longitude": -9.490993,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 152,
      "squawk": "1370",
      "timestamp": 1660681774,
      "ems": null
    },
    {
      "latitude": 38.702087,
      "longitude": -9.489929,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 153,
      "squawk": "1370",
      "timestamp": 1660681777,
      "ems": null
    },
    {
      "latitude": 38.700691,
      "longitude": -9.489014,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 153,
      "squawk": "1370",
      "timestamp": 1660681780,
      "ems": null
    },
    {
      "latitude": 38.699249,
      "longitude": -9.488068,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 151,
      "squawk": "1370",
      "timestamp": 1660681783,
      "ems": null
    },
    {
      "latitude": 38.697876,
      "longitude": -9.487053,
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
      "heading": 149,
      "squawk": "1370",
      "timestamp": 1660681786,
      "ems": null
    },
    {
      "latitude": 38.696594,
      "longitude": -9.486023,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "1370",
      "timestamp": 1660681789,
      "ems": null
    },
    {
      "latitude": 38.695175,
      "longitude": -9.484784,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 146,
      "squawk": "1370",
      "timestamp": 1660681792,
      "ems": null
    },
    {
      "latitude": 38.694031,
      "longitude": -9.483768,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 144,
      "squawk": "1370",
      "timestamp": 1660681795,
      "ems": null
    },
    {
      "latitude": 38.692638,
      "longitude": -9.482483,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "1370",
      "timestamp": 1660681798,
      "ems": null
    },
    {
      "latitude": 38.691193,
      "longitude": -9.481018,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 140,
      "squawk": "1370",
      "timestamp": 1660681802,
      "ems": null
    },
    {
      "latitude": 38.690094,
      "longitude": -9.479768,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 137,
      "squawk": "1370",
      "timestamp": 1660681804,
      "ems": null
    },
    {
      "latitude": 38.688911,
      "longitude": -9.478271,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 134,
      "squawk": "1370",
      "timestamp": 1660681807,
      "ems": null
    },
    {
      "latitude": 38.687798,
      "longitude": -9.476746,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 132,
      "squawk": "1370",
      "timestamp": 1660681810,
      "ems": null
    },
    {
      "latitude": 38.686661,
      "longitude": -9.475051,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 129,
      "squawk": "1370",
      "timestamp": 1660681813,
      "ems": null
    },
    {
      "latitude": 38.685699,
      "longitude": -9.473379,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 126,
      "squawk": "1370",
      "timestamp": 1660681816,
      "ems": null
    },
    {
      "latitude": 38.684692,
      "longitude": -9.471588,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 124,
      "squawk": "1370",
      "timestamp": 1660681820,
      "ems": null
    },
    {
      "latitude": 38.683868,
      "longitude": -9.470036,
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
      "heading": 123,
      "squawk": "1370",
      "timestamp": 1660681822,
      "ems": null
    },
    {
      "latitude": 38.682999,
      "longitude": -9.468364,
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
      "heading": 123,
      "squawk": "1370",
      "timestamp": 1660681825,
      "ems": null
    },
    {
      "latitude": 38.682209,
      "longitude": -9.466797,
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
      "heading": 123,
      "squawk": "1370",
      "timestamp": 1660681829,
      "ems": null
    },
    {
      "latitude": 38.681396,
      "longitude": -9.465259,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 123,
      "squawk": "1370",
      "timestamp": 1660681832,
      "ems": null
    },
    {
      "latitude": 38.680618,
      "longitude": -9.463826,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 125,
      "squawk": "1370",
      "timestamp": 1660681834,
      "ems": null
    },
    {
      "latitude": 38.679462,
      "longitude": -9.461853,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 128,
      "squawk": "1370",
      "timestamp": 1660681837,
      "ems": null
    },
    {
      "latitude": 38.677414,
      "longitude": -9.458692,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 128,
      "squawk": "1370",
      "timestamp": 1660681844,
      "ems": null
    },
    {
      "latitude": 38.675739,
      "longitude": -9.455322,
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
      "heading": 116,
      "squawk": "1370",
      "timestamp": 1660681849,
      "ems": null
    },
    {
      "latitude": 38.675133,
      "longitude": -9.453552,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 112,
      "squawk": "1370",
      "timestamp": 1660681852,
      "ems": null
    },
    {
      "latitude": 38.674713,
      "longitude": -9.451782,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 106,
      "squawk": "1370",
      "timestamp": 1660681855,
      "ems": null
    },
    {
      "latitude": 38.674343,
      "longitude": -9.450012,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "1370",
      "timestamp": 1660681859,
      "ems": null
    },
    {
      "latitude": 38.674015,
      "longitude": -9.448059,
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
      "heading": 102,
      "squawk": "1370",
      "timestamp": 1660681862,
      "ems": null
    },
    {
      "latitude": 38.673706,
      "longitude": -9.446451,
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
      "heading": 103,
      "squawk": "1370",
      "timestamp": 1660681865,
      "ems": null
    },
    {
      "latitude": 38.673386,
      "longitude": -9.4446,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 102,
      "squawk": "1370",
      "timestamp": 1660681868,
      "ems": null
    },
    {
      "latitude": 38.67313,
      "longitude": -9.442993,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 100,
      "squawk": "1370",
      "timestamp": 1660681871,
      "ems": null
    },
    {
      "latitude": 38.672928,
      "longitude": -9.441316,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 99,
      "squawk": "1370",
      "timestamp": 1660681874,
      "ems": null
    },
    {
      "latitude": 38.672745,
      "longitude": -9.439644,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 97,
      "squawk": "1370",
      "timestamp": 1660681876,
      "ems": null
    },
    {
      "latitude": 38.672607,
      "longitude": -9.437793,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 95,
      "squawk": "1370",
      "timestamp": 1660681880,
      "ems": null
    },
    {
      "latitude": 38.672432,
      "longitude": -9.436096,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 96,
      "squawk": "1370",
      "timestamp": 1660681882,
      "ems": null
    },
    {
      "latitude": 38.672333,
      "longitude": -9.434271,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 95,
      "squawk": "1370",
      "timestamp": 1660681886,
      "ems": null
    },
    {
      "latitude": 38.672249,
      "longitude": -9.432678,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 92,
      "squawk": "1370",
      "timestamp": 1660681889,
      "ems": null
    },
    {
      "latitude": 38.672195,
      "longitude": -9.430748,
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
      "heading": 92,
      "squawk": "1370",
      "timestamp": 1660681892,
      "ems": null
    },
    {
      "latitude": 38.672153,
      "longitude": -9.429199,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 91,
      "squawk": "1370",
      "timestamp": 1660681894,
      "ems": null
    },
    {
      "latitude": 38.67215,
      "longitude": -9.427344,
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
      "heading": 89,
      "squawk": "1370",
      "timestamp": 1660681897,
      "ems": null
    },
    {
      "latitude": 38.672195,
      "longitude": -9.425612,
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
      "heading": 88,
      "squawk": "1370",
      "timestamp": 1660681900,
      "ems": null
    },
    {
      "latitude": 38.672195,
      "longitude": -9.423821,
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
      "heading": 89,
      "squawk": "1370",
      "timestamp": 1660681904,
      "ems": null
    },
    {
      "latitude": 38.672195,
      "longitude": -9.42209,
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
      "heading": 90,
      "squawk": "1370",
      "timestamp": 1660681907,
      "ems": null
    },
    {
      "latitude": 38.672153,
      "longitude": -9.419067,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 93,
      "squawk": "1370",
      "timestamp": 1660681913,
      "ems": null
    },
    {
      "latitude": 38.671967,
      "longitude": -9.415642,
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
      "heading": 93,
      "squawk": "1370",
      "timestamp": 1660681919,
      "ems": null
    },
    {
      "latitude": 38.671738,
      "longitude": -9.412597,
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
      "heading": 98,
      "squawk": "1370",
      "timestamp": 1660681925,
      "ems": null
    },
    {
      "latitude": 38.671509,
      "longitude": -9.411044,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 99,
      "squawk": "1370",
      "timestamp": 1660681928,
      "ems": null
    },
    {
      "latitude": 38.671326,
      "longitude": -9.409552,
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
      "heading": 97,
      "squawk": "1370",
      "timestamp": 1660681931,
      "ems": null
    },
    {
      "latitude": 38.671188,
      "longitude": -9.408118,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 97,
      "squawk": "1370",
      "timestamp": 1660681934,
      "ems": null
    },
    {
      "latitude": 38.671036,
      "longitude": -9.406372,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 97,
      "squawk": "1370",
      "timestamp": 1660681937,
      "ems": null
    },
    {
      "latitude": 38.670868,
      "longitude": -9.404834,
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
      "heading": 96,
      "squawk": "1370",
      "timestamp": 1660681940,
      "ems": null
    },
    {
      "latitude": 38.670731,
      "longitude": -9.401849,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 92,
      "squawk": "1370",
      "timestamp": 1660681946,
      "ems": null
    },
    {
      "latitude": 38.670685,
      "longitude": -9.399998,
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
      "heading": 90,
      "squawk": "1370",
      "timestamp": 1660681949,
      "ems": null
    },
    {
      "latitude": 38.670731,
      "longitude": -9.398624,
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
      "heading": 87,
      "squawk": "1370",
      "timestamp": 1660681951,
      "ems": null
    },
    {
      "latitude": 38.670822,
      "longitude": -9.397251,
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
      "heading": 84,
      "squawk": "1370",
      "timestamp": 1660681954,
      "ems": null
    },
    {
      "latitude": 38.671143,
      "longitude": -9.395042,
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
      "heading": 78,
      "squawk": "1370",
      "timestamp": 1660681958,
      "ems": null
    },
    {
      "latitude": 38.671501,
      "longitude": -9.393311,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 74,
      "squawk": "1370",
      "timestamp": 1660681961,
      "ems": null
    },
    {
      "latitude": 38.671875,
      "longitude": -9.391699,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 72,
      "squawk": "1370",
      "timestamp": 1660681964,
      "ems": null
    },
    {
      "latitude": 38.672249,
      "longitude": -9.39032,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 71,
      "squawk": "1370",
      "timestamp": 1660681967,
      "ems": null
    },
    {
      "latitude": 38.672619,
      "longitude": -9.388794,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 70,
      "squawk": "1370",
      "timestamp": 1660681970,
      "ems": null
    },
    {
      "latitude": 38.673065,
      "longitude": -9.38728,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 69,
      "squawk": "1370",
      "timestamp": 1660681973,
      "ems": null
    },
    {
      "latitude": 38.673523,
      "longitude": -9.385787,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 67,
      "squawk": "1370",
      "timestamp": 1660681976,
      "ems": null
    },
    {
      "latitude": 38.674065,
      "longitude": -9.384521,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 61,
      "squawk": "1370",
      "timestamp": 1660681979,
      "ems": null
    },
    {
      "latitude": 38.674622,
      "longitude": -9.383179,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 61,
      "squawk": "1370",
      "timestamp": 1660681982,
      "ems": null
    },
    {
      "latitude": 38.675179,
      "longitude": -9.381897,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 62,
      "squawk": "1370",
      "timestamp": 1660681985,
      "ems": null
    },
    {
      "latitude": 38.67572,
      "longitude": -9.380414,
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
      "heading": 64,
      "squawk": "1370",
      "timestamp": 1660681988,
      "ems": null
    },
    {
      "latitude": 38.676483,
      "longitude": -9.377625,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 72,
      "squawk": "1370",
      "timestamp": 1660681994,
      "ems": null
    },
    {
      "latitude": 38.677322,
      "longitude": -9.374756,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 71,
      "squawk": "1370",
      "timestamp": 1660682000,
      "ems": null
    },
    {
      "latitude": 38.678055,
      "longitude": -9.371875,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 70,
      "squawk": "1370",
      "timestamp": 1660682006,
      "ems": null
    },
    {
      "latitude": 38.678486,
      "longitude": -9.370483,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 69,
      "squawk": "1370",
      "timestamp": 1660682009,
      "ems": null
    },
    {
      "latitude": 38.678925,
      "longitude": -9.369069,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 69,
      "squawk": "1370",
      "timestamp": 1660682012,
      "ems": null
    },
    {
      "latitude": 38.679337,
      "longitude": -9.367636,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "1370",
      "timestamp": 1660682015,
      "ems": null
    },
    {
      "latitude": 38.680161,
      "longitude": -9.364868,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 68,
      "squawk": "1370",
      "timestamp": 1660682021,
      "ems": null
    },
    {
      "latitude": 38.680984,
      "longitude": -9.362143,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 70,
      "squawk": "1370",
      "timestamp": 1660682027,
      "ems": null
    },
    {
      "latitude": 38.681839,
      "longitude": -9.359253,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 68,
      "squawk": "1370",
      "timestamp": 1660682033,
      "ems": null
    },
    {
      "latitude": 38.682674,
      "longitude": -9.356384,
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
      "heading": 72,
      "squawk": "1370",
      "timestamp": 1660682039,
      "ems": null
    },
    {
      "latitude": 38.682953,
      "longitude": -9.355103,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 76,
      "squawk": "1370",
      "timestamp": 1660682042,
      "ems": null
    },
    {
      "latitude": 38.683186,
      "longitude": -9.35376,
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
      "heading": 77,
      "squawk": "1370",
      "timestamp": 1660682045,
      "ems": null
    },
    {
      "latitude": 38.683372,
      "longitude": -9.352417,
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
      "heading": 81,
      "squawk": "1370",
      "timestamp": 1660682048,
      "ems": null
    },
    {
      "latitude": 38.683514,
      "longitude": -9.351135,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "1370",
      "timestamp": 1660682051,
      "ems": null
    },
    {
      "latitude": 38.683594,
      "longitude": -9.349962,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "1370",
      "timestamp": 1660682054,
      "ems": null
    },
    {
      "latitude": 38.683651,
      "longitude": -9.348572,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 86,
      "squawk": "1370",
      "timestamp": 1660682057,
      "ems": null
    },
    {
      "latitude": 38.683746,
      "longitude": -9.347412,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 83,
      "squawk": "1370",
      "timestamp": 1660682060,
      "ems": null
    },
    {
      "latitude": 38.683914,
      "longitude": -9.34632,
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
      "heading": 76,
      "squawk": "1370",
      "timestamp": 1660682063,
      "ems": null
    },
    {
      "latitude": 38.684258,
      "longitude": -9.345276,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 62,
      "squawk": "1370",
      "timestamp": 1660682066,
      "ems": null
    },
    {
      "latitude": 38.684738,
      "longitude": -9.344469,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 49,
      "squawk": "1370",
      "timestamp": 1660682069,
      "ems": null
    },
    {
      "latitude": 38.685284,
      "longitude": -9.343811,
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
      "heading": 36,
      "squawk": "1370",
      "timestamp": 1660682072,
      "ems": null
    },
    {
      "latitude": 38.685932,
      "longitude": -9.343323,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 27,
      "squawk": "1370",
      "timestamp": 1660682075,
      "ems": null
    },
    {
      "latitude": 38.686661,
      "longitude": -9.342916,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 19,
      "squawk": "1370",
      "timestamp": 1660682078,
      "ems": null
    },
    {
      "latitude": 38.687378,
      "longitude": -9.342651,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 13,
      "squawk": "1370",
      "timestamp": 1660682081,
      "ems": null
    },
    {
      "latitude": 38.68803,
      "longitude": -9.342529,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 7,
      "squawk": "1370",
      "timestamp": 1660682084,
      "ems": null
    },
    {
      "latitude": 38.688995,
      "longitude": -9.342559,
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
      "heading": 356,
      "squawk": "1370",
      "timestamp": 1660682087,
      "ems": null
    },
    {
      "latitude": 38.689659,
      "longitude": -9.342712,
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
      "heading": 348,
      "squawk": "1370",
      "timestamp": 1660682090,
      "ems": null
    },
    {
      "latitude": 38.69046,
      "longitude": -9.342916,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 350,
      "squawk": "1370",
      "timestamp": 1660682093,
      "ems": null
    },
    {
      "latitude": 38.691055,
      "longitude": -9.343036,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "1370",
      "timestamp": 1660682096,
      "ems": null
    },
    {
      "latitude": 38.691696,
      "longitude": -9.343275,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "1370",
      "timestamp": 1660682099,
      "ems": null
    },
    {
      "latitude": 38.692383,
      "longitude": -9.343454,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 348,
      "squawk": "1370",
      "timestamp": 1660682102,
      "ems": null
    },
    {
      "latitude": 38.693024,
      "longitude": -9.343634,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 346,
      "squawk": "1370",
      "timestamp": 1660682105,
      "ems": null
    },
    {
      "latitude": 38.693665,
      "longitude": -9.343812,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 347,
      "squawk": "1370",
      "timestamp": 1660682108,
      "ems": null
    },
    {
      "latitude": 38.694313,
      "longitude": -9.344055,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660682111,
      "ems": null
    },
    {
      "latitude": 38.695038,
      "longitude": -9.344231,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660682114,
      "ems": null
    },
    {
      "latitude": 38.695618,
      "longitude": -9.344421,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682117,
      "ems": null
    },
    {
      "latitude": 38.696274,
      "longitude": -9.344708,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682120,
      "ems": null
    },
    {
      "latitude": 38.696918,
      "longitude": -9.34491,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660682123,
      "ems": null
    },
    {
      "latitude": 38.697571,
      "longitude": -9.345093,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "1370",
      "timestamp": 1660682126,
      "ems": null
    },
    {
      "latitude": 38.698837,
      "longitude": -9.345604,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682132,
      "ems": null
    },
    {
      "latitude": 38.70018,
      "longitude": -9.34613,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682138,
      "ems": null
    },
    {
      "latitude": 38.702133,
      "longitude": -9.346863,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682147,
      "ems": null
    },
    {
      "latitude": 38.703506,
      "longitude": -9.347335,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682153,
      "ems": null
    },
    {
      "latitude": 38.704788,
      "longitude": -9.347813,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682159,
      "ems": null
    },
    {
      "latitude": 38.706161,
      "longitude": -9.34829,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682165,
      "ems": null
    },
    {
      "latitude": 38.707535,
      "longitude": -9.348816,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660682171,
      "ems": null
    },
    {
      "latitude": 38.708885,
      "longitude": -9.349304,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660682177,
      "ems": null
    },
    {
      "latitude": 38.710236,
      "longitude": -9.349854,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "1370",
      "timestamp": 1660682183,
      "ems": null
    },
    {
      "latitude": 38.7117,
      "longitude": -9.35038,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682190,
      "ems": null
    },
    {
      "latitude": 38.713165,
      "longitude": -9.350918,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660682196,
      "ems": null
    },
    {
      "latitude": 38.714611,
      "longitude": -9.35144,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660682202,
      "ems": null
    },
    {
      "latitude": 38.716232,
      "longitude": -9.351993,
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
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682208,
      "ems": null
    },
    {
      "latitude": 38.717915,
      "longitude": -9.3526,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "squawk": "1370",
      "timestamp": 1660682214,
      "ems": null
    },
    {
      "latitude": 38.719482,
      "longitude": -9.353187,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "squawk": "1370",
      "timestamp": 1660682220,
      "ems": null
    },
    {
      "latitude": 38.721268,
      "longitude": -9.353844,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682226,
      "ems": null
    },
    {
      "latitude": 38.722549,
      "longitude": -9.354321,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 343,
      "squawk": "1370",
      "timestamp": 1660682232,
      "ems": null
    },
    {
      "latitude": 38.723454,
      "longitude": -9.354614,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 59.3,
        "kts": 32,
        "mph": 36.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "1370",
      "timestamp": 1660682238,
      "ems": null
    },
    {
      "latitude": 38.724247,
      "longitude": -9.354919,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 48.2,
        "kts": 26,
        "mph": 29.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "1370",
      "timestamp": 1660682244,
      "ems": null
    },
    {
      "latitude": 38.72493,
      "longitude": -9.355157,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 342,
      "squawk": "1370",
      "timestamp": 1660682250,
      "ems": null
    },
    {
      "latitude": 38.725502,
      "longitude": -9.355408,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660682256,
      "ems": null
    },
    {
      "latitude": 38.726017,
      "longitude": -9.355591,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 33.3,
        "kts": 18,
        "mph": 20.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "1370",
      "timestamp": 1660682262,
      "ems": null
    },
    {
      "latitude": 38.72644,
      "longitude": -9.355754,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 27.8,
        "kts": 15,
        "mph": 17.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "1370",
      "timestamp": 1660682268,
      "ems": null
    },
    {
      "latitude": 38.726715,
      "longitude": -9.355774,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 15,
      "squawk": "1370",
      "timestamp": 1660682274,
      "ems": null
    },
    {
      "latitude": 38.726807,
      "longitude": -9.355515,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 105,
      "squawk": "1370",
      "timestamp": 1660682283,
      "ems": null
    },
    {
      "latitude": 38.72662,
      "longitude": -9.355286,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 18.5,
        "kts": 10,
        "mph": 11.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "1370",
      "timestamp": 1660682289,
      "ems": null
    },
    {
      "latitude": 38.726395,
      "longitude": -9.355157,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 167,
      "squawk": "1370",
      "timestamp": 1660682295,
      "ems": null
    },
    {
      "latitude": 38.726154,
      "longitude": -9.355042,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 14.8,
        "kts": 8,
        "mph": 9.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "1370",
      "timestamp": 1660682301,
      "ems": null
    }
  ],
};
