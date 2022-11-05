import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220726LPCSLPEV",
    callsign: "CSDHS",
    name: "RWY01 PAX Tiago Almeida",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 6, 26, 18, 10).getTime(),
    arrival: new Date(2022, 6, 26, 19, 20).getTime(),
    singleEnginePistonTime: 70,
    picTime: 70,
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
      name: "Evora Aerodrome",
      code: "LPEV",
      position: {
        latitude: 38.5353648,
        longitude: -7.8925403,
      },
    },
  },
  track: [
    {
      "latitude": 38.718647,
      "longitude": -9.35231,
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
      "heading": 163,
      "squawk": "0",
      "timestamp": 1658859701,
      "ems": null
    },
    {
      "latitude": 38.718464,
      "longitude": -9.35259,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 264,
      "squawk": "0",
      "timestamp": 1658859710,
      "ems": null
    },
    {
      "latitude": 38.718533,
      "longitude": -9.352814,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 9.3,
        "kts": 5,
        "mph": 5.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 300,
      "squawk": "0",
      "timestamp": 1658859717,
      "ems": null
    },
    {
      "latitude": 38.718903,
      "longitude": -9.352936,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 31.5,
        "kts": 17,
        "mph": 19.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "1357",
      "timestamp": 1658859735,
      "ems": null
    },
    {
      "latitude": 38.719563,
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
      "heading": 343,
      "squawk": "1357",
      "timestamp": 1658859741,
      "ems": null
    },
    {
      "latitude": 38.720112,
      "longitude": -9.35338,
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
      "squawk": "1357",
      "timestamp": 1658859744,
      "ems": null
    },
    {
      "latitude": 38.720325,
      "longitude": -9.353455,
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
      "squawk": "1357",
      "timestamp": 1658859745,
      "ems": null
    },
    {
      "latitude": 38.721313,
      "longitude": -9.353882,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 344,
      "squawk": "1357",
      "timestamp": 1658859749,
      "ems": null
    },
    {
      "latitude": 38.722942,
      "longitude": -9.354492,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 342,
      "squawk": "1357",
      "timestamp": 1658859757,
      "ems": null
    },
    {
      "latitude": 38.723602,
      "longitude": -9.354798,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 339,
      "squawk": "1357",
      "timestamp": 1658859760,
      "ems": null
    },
    {
      "latitude": 38.724976,
      "longitude": -9.355276,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 344,
      "squawk": "1357",
      "timestamp": 1658859766,
      "ems": null
    },
    {
      "latitude": 38.72644,
      "longitude": -9.355814,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 345,
      "squawk": "1357",
      "timestamp": 1658859772,
      "ems": null
    },
    {
      "latitude": 38.727829,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 347,
      "squawk": "1357",
      "timestamp": 1658859778,
      "ems": null
    },
    {
      "latitude": 38.729275,
      "longitude": -9.35675,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 343,
      "squawk": "1357",
      "timestamp": 1658859784,
      "ems": null
    },
    {
      "latitude": 38.730019,
      "longitude": -9.356995,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 345,
      "squawk": "1357",
      "timestamp": 1658859787,
      "ems": null
    },
    {
      "latitude": 38.731293,
      "longitude": -9.357486,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 342,
      "squawk": "1357",
      "timestamp": 1658859793,
      "ems": null
    },
    {
      "latitude": 38.733231,
      "longitude": -9.358215,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 344,
      "squawk": "1357",
      "timestamp": 1658859801,
      "ems": null
    },
    {
      "latitude": 38.734772,
      "longitude": -9.35862,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 349,
      "squawk": "1357",
      "timestamp": 1658859807,
      "ems": null
    },
    {
      "latitude": 38.736374,
      "longitude": -9.359097,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 346,
      "squawk": "1357",
      "timestamp": 1658859812,
      "ems": null
    },
    {
      "latitude": 38.737976,
      "longitude": -9.359694,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 343,
      "squawk": "1357",
      "timestamp": 1658859819,
      "ems": null
    },
    {
      "latitude": 38.739395,
      "longitude": -9.360291,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 341,
      "squawk": "1357",
      "timestamp": 1658859825,
      "ems": null
    },
    {
      "latitude": 38.740952,
      "longitude": -9.360888,
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
      "heading": 345,
      "squawk": "1357",
      "timestamp": 1658859831,
      "ems": null
    },
    {
      "latitude": 38.741192,
      "longitude": -9.360962,
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
      "heading": 349,
      "squawk": "1357",
      "timestamp": 1658859833,
      "ems": null
    },
    {
      "latitude": 38.742874,
      "longitude": -9.361247,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "1357",
      "timestamp": 1658859837,
      "ems": null
    },
    {
      "latitude": 38.743473,
      "longitude": -9.361267,
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
      "heading": 358,
      "squawk": "1357",
      "timestamp": 1658859840,
      "ems": null
    },
    {
      "latitude": 38.744308,
      "longitude": -9.361328,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "1357",
      "timestamp": 1658859841,
      "ems": null
    },
    {
      "latitude": 38.745117,
      "longitude": -9.361307,
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
      "heading": 359,
      "squawk": "1357",
      "timestamp": 1658859844,
      "ems": null
    },
    {
      "latitude": 38.74617,
      "longitude": -9.361188,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 10,
      "squawk": "1357",
      "timestamp": 1658859848,
      "ems": null
    },
    {
      "latitude": 38.748001,
      "longitude": -9.360113,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 34,
      "squawk": "1357",
      "timestamp": 1658859853,
      "ems": null
    },
    {
      "latitude": 38.748825,
      "longitude": -9.359097,
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
      "heading": 49,
      "squawk": "1357",
      "timestamp": 1658859856,
      "ems": null
    },
    {
      "latitude": 38.749432,
      "longitude": -9.35791,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 59,
      "squawk": "1357",
      "timestamp": 1658859859,
      "ems": null
    },
    {
      "latitude": 38.749989,
      "longitude": -9.356506,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "squawk": "1357",
      "timestamp": 1658859862,
      "ems": null
    },
    {
      "latitude": 38.750362,
      "longitude": -9.354797,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 75,
      "squawk": "1357",
      "timestamp": 1658859865,
      "ems": null
    },
    {
      "latitude": 38.750702,
      "longitude": -9.353067,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 76,
      "squawk": "1357",
      "timestamp": 1658859868,
      "ems": null
    },
    {
      "latitude": 38.750969,
      "longitude": -9.351563,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 78,
      "squawk": "1357",
      "timestamp": 1658859871,
      "ems": null
    },
    {
      "latitude": 38.751205,
      "longitude": -9.349843,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 78,
      "squawk": "1357",
      "timestamp": 1658859874,
      "ems": null
    },
    {
      "latitude": 38.751434,
      "longitude": -9.34823,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 84,
      "squawk": "1357",
      "timestamp": 1658859877,
      "ems": null
    },
    {
      "latitude": 38.751434,
      "longitude": -9.346436,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658859880,
      "ems": null
    },
    {
      "latitude": 38.75106,
      "longitude": -9.344421,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 105,
      "squawk": "1357",
      "timestamp": 1658859883,
      "ems": null
    },
    {
      "latitude": 38.750454,
      "longitude": -9.342712,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "1357",
      "timestamp": 1658859886,
      "ems": null
    },
    {
      "latitude": 38.749569,
      "longitude": -9.341125,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 127,
      "squawk": "1357",
      "timestamp": 1658859889,
      "ems": null
    },
    {
      "latitude": 38.748547,
      "longitude": -9.339783,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 136,
      "squawk": "1357",
      "timestamp": 1658859892,
      "ems": null
    },
    {
      "latitude": 38.747314,
      "longitude": -9.338558,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 145,
      "squawk": "1357",
      "timestamp": 1658859895,
      "ems": null
    },
    {
      "latitude": 38.745941,
      "longitude": -9.337402,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 146,
      "squawk": "1357",
      "timestamp": 1658859898,
      "ems": null
    },
    {
      "latitude": 38.744522,
      "longitude": -9.336229,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 147,
      "squawk": "1357",
      "timestamp": 1658859901,
      "ems": null
    },
    {
      "latitude": 38.743195,
      "longitude": -9.335144,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 147,
      "squawk": "1357",
      "timestamp": 1658859904,
      "ems": null
    },
    {
      "latitude": 38.741959,
      "longitude": -9.334199,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 148,
      "squawk": "1357",
      "timestamp": 1658859907,
      "ems": null
    },
    {
      "latitude": 38.74054,
      "longitude": -9.333065,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "1357",
      "timestamp": 1658859910,
      "ems": null
    },
    {
      "latitude": 38.73912,
      "longitude": -9.332049,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "1357",
      "timestamp": 1658859913,
      "ems": null
    },
    {
      "latitude": 38.737564,
      "longitude": -9.330855,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "1357",
      "timestamp": 1658859916,
      "ems": null
    },
    {
      "latitude": 38.736629,
      "longitude": -9.330078,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "1357",
      "timestamp": 1658859918,
      "ems": null
    },
    {
      "latitude": 38.734909,
      "longitude": -9.328766,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 148,
      "squawk": "1357",
      "timestamp": 1658859922,
      "ems": null
    },
    {
      "latitude": 38.732986,
      "longitude": -9.327213,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "1357",
      "timestamp": 1658859926,
      "ems": null
    },
    {
      "latitude": 38.728546,
      "longitude": -9.323392,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 144,
      "squawk": "1357",
      "timestamp": 1658859936,
      "ems": null
    },
    {
      "latitude": 38.726017,
      "longitude": -9.321228,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 145,
      "squawk": "1357",
      "timestamp": 1658859942,
      "ems": null
    },
    {
      "latitude": 38.72319,
      "longitude": -9.318794,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 146,
      "squawk": "1357",
      "timestamp": 1658859948,
      "ems": null
    },
    {
      "latitude": 38.720337,
      "longitude": -9.316223,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 145,
      "squawk": "1357",
      "timestamp": 1658859955,
      "ems": null
    },
    {
      "latitude": 38.717728,
      "longitude": -9.313843,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 143,
      "squawk": "1357",
      "timestamp": 1658859961,
      "ems": null
    },
    {
      "latitude": 38.715309,
      "longitude": -9.311462,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 141,
      "squawk": "1357",
      "timestamp": 1658859967,
      "ems": null
    },
    {
      "latitude": 38.714005,
      "longitude": -9.310059,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 140,
      "squawk": "1357",
      "timestamp": 1658859970,
      "ems": null
    },
    {
      "latitude": 38.712753,
      "longitude": -9.308824,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 140,
      "squawk": "1357",
      "timestamp": 1658859973,
      "ems": null
    },
    {
      "latitude": 38.711445,
      "longitude": -9.307373,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 139,
      "squawk": "1357",
      "timestamp": 1658859976,
      "ems": null
    },
    {
      "latitude": 38.710052,
      "longitude": -9.305838,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 137,
      "squawk": "1357",
      "timestamp": 1658859980,
      "ems": null
    },
    {
      "latitude": 38.70879,
      "longitude": -9.304382,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 137,
      "squawk": "1357",
      "timestamp": 1658859983,
      "ems": null
    },
    {
      "latitude": 38.707626,
      "longitude": -9.30304,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 137,
      "squawk": "1357",
      "timestamp": 1658859985,
      "ems": null
    },
    {
      "latitude": 38.70639,
      "longitude": -9.301599,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 137,
      "squawk": "1357",
      "timestamp": 1658859989,
      "ems": null
    },
    {
      "latitude": 38.704056,
      "longitude": -9.298971,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 138,
      "squawk": "1357",
      "timestamp": 1658859994,
      "ems": null
    },
    {
      "latitude": 38.701668,
      "longitude": -9.296204,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 138,
      "squawk": "1357",
      "timestamp": 1658860001,
      "ems": null
    },
    {
      "latitude": 38.699341,
      "longitude": -9.29364,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 138,
      "squawk": "1357",
      "timestamp": 1658860007,
      "ems": null
    },
    {
      "latitude": 38.69664,
      "longitude": -9.290588,
      "altitude": {
        "feet": 800,
        "meters": 244
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 137,
      "squawk": "1357",
      "timestamp": 1658860013,
      "ems": null
    },
    {
      "latitude": 38.694405,
      "longitude": -9.287903,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 138,
      "squawk": "1357",
      "timestamp": 1658860019,
      "ems": null
    },
    {
      "latitude": 38.69194,
      "longitude": -9.285095,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 137,
      "squawk": "1357",
      "timestamp": 1658860025,
      "ems": null
    },
    {
      "latitude": 38.689453,
      "longitude": -9.282372,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 140,
      "squawk": "1357",
      "timestamp": 1658860031,
      "ems": null
    },
    {
      "latitude": 38.685608,
      "longitude": -9.278442,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 142,
      "squawk": "1357",
      "timestamp": 1658860040,
      "ems": null
    },
    {
      "latitude": 38.684326,
      "longitude": -9.277178,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 142,
      "squawk": "1357",
      "timestamp": 1658860043,
      "ems": null
    },
    {
      "latitude": 38.683228,
      "longitude": -9.276103,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 141,
      "squawk": "1357",
      "timestamp": 1658860046,
      "ems": null
    },
    {
      "latitude": 38.680721,
      "longitude": -9.27356,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 140,
      "squawk": "1357",
      "timestamp": 1658860052,
      "ems": null
    },
    {
      "latitude": 38.678253,
      "longitude": -9.271057,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 142,
      "squawk": "1357",
      "timestamp": 1658860058,
      "ems": null
    },
    {
      "latitude": 38.675812,
      "longitude": -9.26846,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 140,
      "squawk": "1357",
      "timestamp": 1658860064,
      "ems": null
    },
    {
      "latitude": 38.673225,
      "longitude": -9.265808,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 141,
      "squawk": "1357",
      "timestamp": 1658860070,
      "ems": null
    },
    {
      "latitude": 38.670757,
      "longitude": -9.263367,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 142,
      "squawk": "1357",
      "timestamp": 1658860076,
      "ems": null
    },
    {
      "latitude": 38.668289,
      "longitude": -9.260925,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 142,
      "squawk": "1357",
      "timestamp": 1658860082,
      "ems": null
    },
    {
      "latitude": 38.665833,
      "longitude": -9.258549,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 142,
      "squawk": "1357",
      "timestamp": 1658860088,
      "ems": null
    },
    {
      "latitude": 38.663261,
      "longitude": -9.256226,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 145,
      "squawk": "1357",
      "timestamp": 1658860094,
      "ems": null
    },
    {
      "latitude": 38.661896,
      "longitude": -9.255026,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 146,
      "squawk": "1357",
      "timestamp": 1658860097,
      "ems": null
    },
    {
      "latitude": 38.66061,
      "longitude": -9.253967,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 147,
      "squawk": "1357",
      "timestamp": 1658860100,
      "ems": null
    },
    {
      "latitude": 38.659073,
      "longitude": -9.252808,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 147,
      "squawk": "1357",
      "timestamp": 1658860103,
      "ems": null
    },
    {
      "latitude": 38.657768,
      "longitude": -9.25177,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 148,
      "squawk": "1357",
      "timestamp": 1658860106,
      "ems": null
    },
    {
      "latitude": 38.656677,
      "longitude": -9.250906,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 148,
      "squawk": "1357",
      "timestamp": 1658860109,
      "ems": null
    },
    {
      "latitude": 38.655304,
      "longitude": -9.249817,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 149,
      "squawk": "1357",
      "timestamp": 1658860112,
      "ems": null
    },
    {
      "latitude": 38.653954,
      "longitude": -9.24884,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 150,
      "squawk": "1357",
      "timestamp": 1658860115,
      "ems": null
    },
    {
      "latitude": 38.652416,
      "longitude": -9.247803,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "1357",
      "timestamp": 1658860118,
      "ems": null
    },
    {
      "latitude": 38.651253,
      "longitude": -9.247009,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "1357",
      "timestamp": 1658860121,
      "ems": null
    },
    {
      "latitude": 38.649715,
      "longitude": -9.245972,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "1357",
      "timestamp": 1658860124,
      "ems": null
    },
    {
      "latitude": 38.648411,
      "longitude": -9.245056,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 151,
      "squawk": "1357",
      "timestamp": 1658860127,
      "ems": null
    },
    {
      "latitude": 38.64576,
      "longitude": -9.243164,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 150,
      "squawk": "1357",
      "timestamp": 1658860133,
      "ems": null
    },
    {
      "latitude": 38.643082,
      "longitude": -9.241234,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 150,
      "squawk": "1357",
      "timestamp": 1658860139,
      "ems": null
    },
    {
      "latitude": 38.640545,
      "longitude": -9.239441,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 151,
      "squawk": "1357",
      "timestamp": 1658860145,
      "ems": null
    },
    {
      "latitude": 38.637589,
      "longitude": -9.237292,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "1357",
      "timestamp": 1658860153,
      "ems": null
    },
    {
      "latitude": 38.634354,
      "longitude": -9.234863,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "1357",
      "timestamp": 1658860160,
      "ems": null
    },
    {
      "latitude": 38.631329,
      "longitude": -9.232727,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 151,
      "squawk": "1357",
      "timestamp": 1658860167,
      "ems": null
    },
    {
      "latitude": 38.628628,
      "longitude": -9.230835,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 151,
      "squawk": "1357",
      "timestamp": 1658860172,
      "ems": null
    },
    {
      "latitude": 38.625973,
      "longitude": -9.229065,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 152,
      "squawk": "1357",
      "timestamp": 1658860179,
      "ems": null
    },
    {
      "latitude": 38.623215,
      "longitude": -9.227262,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 153,
      "squawk": "1357",
      "timestamp": 1658860185,
      "ems": null
    },
    {
      "latitude": 38.62056,
      "longitude": -9.225531,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "1357",
      "timestamp": 1658860191,
      "ems": null
    },
    {
      "latitude": 38.617874,
      "longitude": -9.223755,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 152,
      "squawk": "1357",
      "timestamp": 1658860197,
      "ems": null
    },
    {
      "latitude": 38.614975,
      "longitude": -9.221828,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 151,
      "squawk": "1357",
      "timestamp": 1658860203,
      "ems": null
    },
    {
      "latitude": 38.612503,
      "longitude": -9.220216,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 152,
      "squawk": "1357",
      "timestamp": 1658860208,
      "ems": null
    },
    {
      "latitude": 38.60931,
      "longitude": -9.218201,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 155,
      "squawk": "1357",
      "timestamp": 1658860215,
      "ems": null
    },
    {
      "latitude": 38.606506,
      "longitude": -9.216515,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 154,
      "squawk": "1357",
      "timestamp": 1658860221,
      "ems": null
    },
    {
      "latitude": 38.603668,
      "longitude": -9.214783,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 154,
      "squawk": "1357",
      "timestamp": 1658860227,
      "ems": null
    },
    {
      "latitude": 38.601013,
      "longitude": -9.213111,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "1357",
      "timestamp": 1658860233,
      "ems": null
    },
    {
      "latitude": 38.598541,
      "longitude": -9.211558,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 154,
      "squawk": "1357",
      "timestamp": 1658860238,
      "ems": null
    },
    {
      "latitude": 38.595482,
      "longitude": -9.209717,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "1357",
      "timestamp": 1658860245,
      "ems": null
    },
    {
      "latitude": 38.592781,
      "longitude": -9.208008,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 155,
      "squawk": "1357",
      "timestamp": 1658860251,
      "ems": null
    },
    {
      "latitude": 38.589981,
      "longitude": -9.206364,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "1357",
      "timestamp": 1658860257,
      "ems": null
    },
    {
      "latitude": 38.587418,
      "longitude": -9.204871,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 156,
      "squawk": "1357",
      "timestamp": 1658860263,
      "ems": null
    },
    {
      "latitude": 38.584541,
      "longitude": -9.203186,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 155,
      "squawk": "1357",
      "timestamp": 1658860269,
      "ems": null
    },
    {
      "latitude": 38.581741,
      "longitude": -9.201587,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "1357",
      "timestamp": 1658860275,
      "ems": null
    },
    {
      "latitude": 38.579098,
      "longitude": -9.199951,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 154,
      "squawk": "1357",
      "timestamp": 1658860281,
      "ems": null
    },
    {
      "latitude": 38.576385,
      "longitude": -9.198363,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 155,
      "squawk": "1357",
      "timestamp": 1658860287,
      "ems": null
    },
    {
      "latitude": 38.573868,
      "longitude": -9.19693,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 155,
      "squawk": "1357",
      "timestamp": 1658860293,
      "ems": null
    },
    {
      "latitude": 38.570808,
      "longitude": -9.195251,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 157,
      "squawk": "1357",
      "timestamp": 1658860299,
      "ems": null
    },
    {
      "latitude": 38.569244,
      "longitude": -9.194482,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 158,
      "squawk": "1357",
      "timestamp": 1658860302,
      "ems": null
    },
    {
      "latitude": 38.567642,
      "longitude": -9.193706,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 159,
      "squawk": "1357",
      "timestamp": 1658860305,
      "ems": null
    },
    {
      "latitude": 38.56625,
      "longitude": -9.193054,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 160,
      "squawk": "1357",
      "timestamp": 1658860308,
      "ems": null
    },
    {
      "latitude": 38.564667,
      "longitude": -9.192451,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 163,
      "squawk": "1357",
      "timestamp": 1658860311,
      "ems": null
    },
    {
      "latitude": 38.563156,
      "longitude": -9.191915,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 166,
      "squawk": "1357",
      "timestamp": 1658860314,
      "ems": null
    },
    {
      "latitude": 38.561737,
      "longitude": -9.191497,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 166,
      "squawk": "1357",
      "timestamp": 1658860317,
      "ems": null
    },
    {
      "latitude": 38.560135,
      "longitude": -9.190959,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 166,
      "squawk": "1357",
      "timestamp": 1658860320,
      "ems": null
    },
    {
      "latitude": 38.558659,
      "longitude": -9.190491,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 166,
      "squawk": "1357",
      "timestamp": 1658860323,
      "ems": null
    },
    {
      "latitude": 38.557125,
      "longitude": -9.190125,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 169,
      "squawk": "1357",
      "timestamp": 1658860326,
      "ems": null
    },
    {
      "latitude": 38.555679,
      "longitude": -9.189819,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 171,
      "squawk": "1357",
      "timestamp": 1658860329,
      "ems": null
    },
    {
      "latitude": 38.55405,
      "longitude": -9.189575,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 173,
      "squawk": "1357",
      "timestamp": 1658860332,
      "ems": null
    },
    {
      "latitude": 38.5527,
      "longitude": -9.189514,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 178,
      "squawk": "1357",
      "timestamp": 1658860335,
      "ems": null
    },
    {
      "latitude": 38.550934,
      "longitude": -9.189527,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "1357",
      "timestamp": 1658860338,
      "ems": null
    },
    {
      "latitude": 38.549442,
      "longitude": -9.189575,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 181,
      "squawk": "1357",
      "timestamp": 1658860341,
      "ems": null
    },
    {
      "latitude": 38.547958,
      "longitude": -9.189586,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 180,
      "squawk": "1357",
      "timestamp": 1658860344,
      "ems": null
    },
    {
      "latitude": 38.546371,
      "longitude": -9.189514,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 177,
      "squawk": "1357",
      "timestamp": 1658860347,
      "ems": null
    },
    {
      "latitude": 38.544846,
      "longitude": -9.189466,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 177,
      "squawk": "1357",
      "timestamp": 1658860350,
      "ems": null
    },
    {
      "latitude": 38.543518,
      "longitude": -9.189347,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 176,
      "squawk": "1357",
      "timestamp": 1658860353,
      "ems": null
    },
    {
      "latitude": 38.541779,
      "longitude": -9.189227,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 174,
      "squawk": "1357",
      "timestamp": 1658860356,
      "ems": null
    },
    {
      "latitude": 38.538597,
      "longitude": -9.188721,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 173,
      "squawk": "1357",
      "timestamp": 1658860362,
      "ems": null
    },
    {
      "latitude": 38.535801,
      "longitude": -9.188416,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 174,
      "squawk": "1357",
      "timestamp": 1658860368,
      "ems": null
    },
    {
      "latitude": 38.534088,
      "longitude": -9.188153,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 174,
      "squawk": "1357",
      "timestamp": 1658860371,
      "ems": null
    },
    {
      "latitude": 38.532669,
      "longitude": -9.187974,
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
      "heading": 173,
      "squawk": "1357",
      "timestamp": 1658860374,
      "ems": null
    },
    {
      "latitude": 38.531147,
      "longitude": -9.187744,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 172,
      "squawk": "1357",
      "timestamp": 1658860377,
      "ems": null
    },
    {
      "latitude": 38.529659,
      "longitude": -9.187378,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 169,
      "squawk": "1357",
      "timestamp": 1658860380,
      "ems": null
    },
    {
      "latitude": 38.528168,
      "longitude": -9.186951,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 164,
      "squawk": "1357",
      "timestamp": 1658860383,
      "ems": null
    },
    {
      "latitude": 38.526947,
      "longitude": -9.186421,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 160,
      "squawk": "1357",
      "timestamp": 1658860386,
      "ems": null
    },
    {
      "latitude": 38.525421,
      "longitude": -9.18573,
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
      "heading": 159,
      "squawk": "1357",
      "timestamp": 1658860389,
      "ems": null
    },
    {
      "latitude": 38.524109,
      "longitude": -9.185048,
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
      "heading": 159,
      "squawk": "1357",
      "timestamp": 1658860392,
      "ems": null
    },
    {
      "latitude": 38.52269,
      "longitude": -9.184451,
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
      "heading": 160,
      "squawk": "1357",
      "timestamp": 1658860395,
      "ems": null
    },
    {
      "latitude": 38.521324,
      "longitude": -9.183838,
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
      "heading": 160,
      "squawk": "1357",
      "timestamp": 1658860398,
      "ems": null
    },
    {
      "latitude": 38.519836,
      "longitude": -9.183167,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 159,
      "squawk": "1357",
      "timestamp": 1658860401,
      "ems": null
    },
    {
      "latitude": 38.518478,
      "longitude": -9.182302,
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
      "heading": 152,
      "squawk": "1357",
      "timestamp": 1658860404,
      "ems": null
    },
    {
      "latitude": 38.517471,
      "longitude": -9.181585,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "1357",
      "timestamp": 1658860407,
      "ems": null
    },
    {
      "latitude": 38.516159,
      "longitude": -9.180176,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 136,
      "squawk": "1357",
      "timestamp": 1658860410,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -9.178839,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "1357",
      "timestamp": 1658860413,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -9.177405,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 118,
      "squawk": "1357",
      "timestamp": 1658860416,
      "ems": null
    },
    {
      "latitude": 38.513969,
      "longitude": -9.17572,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 107,
      "squawk": "1357",
      "timestamp": 1658860419,
      "ems": null
    },
    {
      "latitude": 38.513645,
      "longitude": -9.173828,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 96,
      "squawk": "1357",
      "timestamp": 1658860422,
      "ems": null
    },
    {
      "latitude": 38.513596,
      "longitude": -9.17218,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860425,
      "ems": null
    },
    {
      "latitude": 38.513672,
      "longitude": -9.170539,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860428,
      "ems": null
    },
    {
      "latitude": 38.513672,
      "longitude": -9.169106,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860431,
      "ems": null
    },
    {
      "latitude": 38.513626,
      "longitude": -9.167613,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 93,
      "squawk": "1357",
      "timestamp": 1658860434,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -9.166138,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 94,
      "squawk": "1357",
      "timestamp": 1658860437,
      "ems": null
    },
    {
      "latitude": 38.513443,
      "longitude": -9.164628,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658860440,
      "ems": null
    },
    {
      "latitude": 38.513306,
      "longitude": -9.163255,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658860443,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -9.162109,
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
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658860446,
      "ems": null
    },
    {
      "latitude": 38.513039,
      "longitude": -9.159363,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658860452,
      "ems": null
    },
    {
      "latitude": 38.512897,
      "longitude": -9.157715,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658860455,
      "ems": null
    },
    {
      "latitude": 38.512802,
      "longitude": -9.156328,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658860458,
      "ems": null
    },
    {
      "latitude": 38.512802,
      "longitude": -9.153701,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860464,
      "ems": null
    },
    {
      "latitude": 38.512806,
      "longitude": -9.152222,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860467,
      "ems": null
    },
    {
      "latitude": 38.512852,
      "longitude": -9.150757,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860470,
      "ems": null
    },
    {
      "latitude": 38.512894,
      "longitude": -9.149163,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860473,
      "ems": null
    },
    {
      "latitude": 38.512897,
      "longitude": -9.147705,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860476,
      "ems": null
    },
    {
      "latitude": 38.512947,
      "longitude": -9.146179,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860480,
      "ems": null
    },
    {
      "latitude": 38.512985,
      "longitude": -9.144566,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860483,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -9.142894,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860486,
      "ems": null
    },
    {
      "latitude": 38.513084,
      "longitude": -9.141357,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860488,
      "ems": null
    },
    {
      "latitude": 38.513168,
      "longitude": -9.138296,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860494,
      "ems": null
    },
    {
      "latitude": 38.513123,
      "longitude": -9.134833,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658860500,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -9.131371,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860506,
      "ems": null
    },
    {
      "latitude": 38.513084,
      "longitude": -9.127869,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860512,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -9.124265,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860519,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -9.120802,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860525,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -9.117279,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860531,
      "ems": null
    },
    {
      "latitude": 38.513039,
      "longitude": -9.113708,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860537,
      "ems": null
    },
    {
      "latitude": 38.513077,
      "longitude": -9.110293,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860542,
      "ems": null
    },
    {
      "latitude": 38.513168,
      "longitude": -9.10671,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860548,
      "ems": null
    },
    {
      "latitude": 38.513168,
      "longitude": -9.103068,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860555,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -9.099609,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860561,
      "ems": null
    },
    {
      "latitude": 38.51326,
      "longitude": -9.095724,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860566,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.091919,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860573,
      "ems": null
    },
    {
      "latitude": 38.51326,
      "longitude": -9.088141,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860579,
      "ems": null
    },
    {
      "latitude": 38.51318,
      "longitude": -9.084839,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860585,
      "ems": null
    },
    {
      "latitude": 38.513226,
      "longitude": -9.080811,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860590,
      "ems": null
    },
    {
      "latitude": 38.513271,
      "longitude": -9.077209,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860597,
      "ems": null
    },
    {
      "latitude": 38.513412,
      "longitude": -9.073547,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860603,
      "ems": null
    },
    {
      "latitude": 38.51355,
      "longitude": -9.069946,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658860609,
      "ems": null
    },
    {
      "latitude": 38.513691,
      "longitude": -9.066467,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860615,
      "ems": null
    },
    {
      "latitude": 38.513763,
      "longitude": -9.062944,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860620,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -9.059387,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860627,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -9.055908,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860633,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -9.052673,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860639,
      "ems": null
    },
    {
      "latitude": 38.513828,
      "longitude": -9.049316,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860644,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -9.045715,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860651,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -9.04248,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860656,
      "ems": null
    },
    {
      "latitude": 38.513855,
      "longitude": -9.038941,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658860663,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -9.035777,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860669,
      "ems": null
    },
    {
      "latitude": 38.513809,
      "longitude": -9.032254,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658860675,
      "ems": null
    },
    {
      "latitude": 38.513763,
      "longitude": -9.02915,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658860681,
      "ems": null
    },
    {
      "latitude": 38.513718,
      "longitude": -9.025746,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860687,
      "ems": null
    },
    {
      "latitude": 38.513783,
      "longitude": -9.022217,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658860693,
      "ems": null
    },
    {
      "latitude": 38.513878,
      "longitude": -9.01886,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860699,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -9.015625,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860705,
      "ems": null
    },
    {
      "latitude": 38.513947,
      "longitude": -9.012133,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860711,
      "ems": null
    },
    {
      "latitude": 38.513947,
      "longitude": -9.00861,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860717,
      "ems": null
    },
    {
      "latitude": 38.513924,
      "longitude": -9.004944,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860723,
      "ems": null
    },
    {
      "latitude": 38.514015,
      "longitude": -9.001709,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860728,
      "ems": null
    },
    {
      "latitude": 38.51413,
      "longitude": -8.99822,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860735,
      "ems": null
    },
    {
      "latitude": 38.514267,
      "longitude": -8.994578,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658860741,
      "ems": null
    },
    {
      "latitude": 38.514343,
      "longitude": -8.993103,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658860744,
      "ems": null
    },
    {
      "latitude": 38.514496,
      "longitude": -8.989325,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860750,
      "ems": null
    },
    {
      "latitude": 38.514576,
      "longitude": -8.985901,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860756,
      "ems": null
    },
    {
      "latitude": 38.514725,
      "longitude": -8.982398,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658860762,
      "ems": null
    },
    {
      "latitude": 38.514862,
      "longitude": -8.979054,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860768,
      "ems": null
    },
    {
      "latitude": 38.514999,
      "longitude": -8.975592,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860774,
      "ems": null
    },
    {
      "latitude": 38.515045,
      "longitude": -8.972367,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860779,
      "ems": null
    },
    {
      "latitude": 38.515045,
      "longitude": -8.968427,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860786,
      "ems": null
    },
    {
      "latitude": 38.515045,
      "longitude": -8.964426,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860793,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -8.961082,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860799,
      "ems": null
    },
    {
      "latitude": 38.515179,
      "longitude": -8.955872,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658860808,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.952783,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860813,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.949951,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860818,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.944125,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658860828,
      "ems": null
    },
    {
      "latitude": 38.515137,
      "longitude": -8.942393,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 93,
      "squawk": "1357",
      "timestamp": 1658860831,
      "ems": null
    },
    {
      "latitude": 38.515041,
      "longitude": -8.937927,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860839,
      "ems": null
    },
    {
      "latitude": 38.515137,
      "longitude": -8.934333,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860844,
      "ems": null
    },
    {
      "latitude": 38.515182,
      "longitude": -8.930451,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860851,
      "ems": null
    },
    {
      "latitude": 38.515137,
      "longitude": -8.927705,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860856,
      "ems": null
    },
    {
      "latitude": 38.515137,
      "longitude": -8.923108,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658860864,
      "ems": null
    },
    {
      "latitude": 38.514999,
      "longitude": -8.919287,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658860870,
      "ems": null
    },
    {
      "latitude": 38.514946,
      "longitude": -8.915527,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860876,
      "ems": null
    },
    {
      "latitude": 38.514908,
      "longitude": -8.912062,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860882,
      "ems": null
    },
    {
      "latitude": 38.514954,
      "longitude": -8.908539,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860888,
      "ems": null
    },
    {
      "latitude": 38.514999,
      "longitude": -8.905016,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860894,
      "ems": null
    },
    {
      "latitude": 38.515045,
      "longitude": -8.901672,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860900,
      "ems": null
    },
    {
      "latitude": 38.515087,
      "longitude": -8.898193,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860906,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.894592,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860912,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.891296,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658860918,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.886475,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860926,
      "ems": null
    },
    {
      "latitude": 38.51532,
      "longitude": -8.881531,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860935,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.878113,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658860940,
      "ems": null
    },
    {
      "latitude": 38.515087,
      "longitude": -8.874573,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658860947,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -8.871101,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860953,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -8.867519,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860959,
      "ems": null
    },
    {
      "latitude": 38.515137,
      "longitude": -8.864116,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860965,
      "ems": null
    },
    {
      "latitude": 38.515137,
      "longitude": -8.860712,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860971,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.857239,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860977,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.854004,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860983,
      "ems": null
    },
    {
      "latitude": 38.515182,
      "longitude": -8.850681,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658860989,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.847168,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658860995,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -8.843934,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861001,
      "ems": null
    },
    {
      "latitude": 38.515087,
      "longitude": -8.84082,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861007,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.837341,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861013,
      "ems": null
    },
    {
      "latitude": 38.515179,
      "longitude": -8.834045,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861019,
      "ems": null
    },
    {
      "latitude": 38.515179,
      "longitude": -8.830933,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861025,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.829366,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861028,
      "ems": null
    },
    {
      "latitude": 38.51532,
      "longitude": -8.827694,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658861031,
      "ems": null
    },
    {
      "latitude": 38.515461,
      "longitude": -8.825928,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 84,
      "squawk": "1357",
      "timestamp": 1658861034,
      "ems": null
    },
    {
      "latitude": 38.515507,
      "longitude": -8.822388,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861040,
      "ems": null
    },
    {
      "latitude": 38.515461,
      "longitude": -8.818848,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861046,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.815155,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658861052,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -8.811572,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861058,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.809781,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861061,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -8.80799,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861064,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -8.804706,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658861070,
      "ems": null
    },
    {
      "latitude": 38.51532,
      "longitude": -8.800885,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861076,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.797546,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861082,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.793899,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861088,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.790405,
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
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658861094,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -8.786853,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658861100,
      "ems": null
    },
    {
      "latitude": 38.515087,
      "longitude": -8.783386,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861106,
      "ems": null
    },
    {
      "latitude": 38.515087,
      "longitude": -8.780029,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861112,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -8.776643,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861118,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -8.77324,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861124,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.769836,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861130,
      "ems": null
    },
    {
      "latitude": 38.515133,
      "longitude": -8.766479,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861136,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.763062,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861142,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.759705,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861148,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.756043,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861154,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -8.75276,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861160,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.749023,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861166,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.745416,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861172,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.742669,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861178,
      "ems": null
    },
    {
      "latitude": 38.515457,
      "longitude": -8.737773,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861185,
      "ems": null
    },
    {
      "latitude": 38.515411,
      "longitude": -8.73407,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658861191,
      "ems": null
    },
    {
      "latitude": 38.515274,
      "longitude": -8.730286,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658861198,
      "ems": null
    },
    {
      "latitude": 38.515091,
      "longitude": -8.726428,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 93,
      "squawk": "1357",
      "timestamp": 1658861204,
      "ems": null
    },
    {
      "latitude": 38.514999,
      "longitude": -8.722487,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861210,
      "ems": null
    },
    {
      "latitude": 38.515087,
      "longitude": -8.718994,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861216,
      "ems": null
    },
    {
      "latitude": 38.515228,
      "longitude": -8.717293,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 84,
      "squawk": "1357",
      "timestamp": 1658861219,
      "ems": null
    },
    {
      "latitude": 38.515366,
      "longitude": -8.715562,
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
      "heading": 83,
      "squawk": "1357",
      "timestamp": 1658861222,
      "ems": null
    },
    {
      "latitude": 38.515594,
      "longitude": -8.713592,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "1357",
      "timestamp": 1658861225,
      "ems": null
    },
    {
      "latitude": 38.515877,
      "longitude": -8.711975,
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
      "heading": 78,
      "squawk": "1357",
      "timestamp": 1658861228,
      "ems": null
    },
    {
      "latitude": 38.516098,
      "longitude": -8.710188,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "1357",
      "timestamp": 1658861231,
      "ems": null
    },
    {
      "latitude": 38.516159,
      "longitude": -8.706604,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861237,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -8.703064,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861243,
      "ems": null
    },
    {
      "latitude": 38.516235,
      "longitude": -8.701232,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861247,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -8.699524,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861250,
      "ems": null
    },
    {
      "latitude": 38.51619,
      "longitude": -8.697589,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861253,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -8.695984,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861256,
      "ems": null
    },
    {
      "latitude": 38.516144,
      "longitude": -8.693947,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658861259,
      "ems": null
    },
    {
      "latitude": 38.516144,
      "longitude": -8.692216,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861262,
      "ems": null
    },
    {
      "latitude": 38.51619,
      "longitude": -8.688574,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861268,
      "ems": null
    },
    {
      "latitude": 38.516251,
      "longitude": -8.685059,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861274,
      "ems": null
    },
    {
      "latitude": 38.516281,
      "longitude": -8.681409,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861280,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -8.677612,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658861286,
      "ems": null
    },
    {
      "latitude": 38.516144,
      "longitude": -8.674184,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861292,
      "ems": null
    },
    {
      "latitude": 38.516109,
      "longitude": -8.670227,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861299,
      "ems": null
    },
    {
      "latitude": 38.516098,
      "longitude": -8.666601,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861305,
      "ems": null
    },
    {
      "latitude": 38.516064,
      "longitude": -8.662964,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861311,
      "ems": null
    },
    {
      "latitude": 38.516064,
      "longitude": -8.659546,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861317,
      "ems": null
    },
    {
      "latitude": 38.516064,
      "longitude": -8.656006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861323,
      "ems": null
    },
    {
      "latitude": 38.516052,
      "longitude": -8.65239,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861329,
      "ems": null
    },
    {
      "latitude": 38.516144,
      "longitude": -8.648628,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861335,
      "ems": null
    },
    {
      "latitude": 38.516205,
      "longitude": -8.645081,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861341,
      "ems": null
    },
    {
      "latitude": 38.516235,
      "longitude": -8.641583,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861347,
      "ems": null
    },
    {
      "latitude": 38.516296,
      "longitude": -8.637878,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861353,
      "ems": null
    },
    {
      "latitude": 38.516373,
      "longitude": -8.634298,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861360,
      "ems": null
    },
    {
      "latitude": 38.516464,
      "longitude": -8.630836,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861365,
      "ems": null
    },
    {
      "latitude": 38.516624,
      "longitude": -8.626892,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861372,
      "ems": null
    },
    {
      "latitude": 38.516647,
      "longitude": -8.623551,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861378,
      "ems": null
    },
    {
      "latitude": 38.516693,
      "longitude": -8.620088,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861384,
      "ems": null
    },
    {
      "latitude": 38.516624,
      "longitude": -8.61615,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861390,
      "ems": null
    },
    {
      "latitude": 38.516624,
      "longitude": -8.612732,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861396,
      "ems": null
    },
    {
      "latitude": 38.516647,
      "longitude": -8.609161,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861403,
      "ems": null
    },
    {
      "latitude": 38.516647,
      "longitude": -8.605758,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861409,
      "ems": null
    },
    {
      "latitude": 38.516647,
      "longitude": -8.602355,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861415,
      "ems": null
    },
    {
      "latitude": 38.516602,
      "longitude": -8.598891,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "squawk": "1357",
      "timestamp": 1658861421,
      "ems": null
    },
    {
      "latitude": 38.516556,
      "longitude": -8.595548,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658861427,
      "ems": null
    },
    {
      "latitude": 38.516483,
      "longitude": -8.592102,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658861433,
      "ems": null
    },
    {
      "latitude": 38.516438,
      "longitude": -8.588684,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861439,
      "ems": null
    },
    {
      "latitude": 38.516418,
      "longitude": -8.585039,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861446,
      "ems": null
    },
    {
      "latitude": 38.516392,
      "longitude": -8.581726,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861451,
      "ems": null
    },
    {
      "latitude": 38.516373,
      "longitude": -8.578113,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861458,
      "ems": null
    },
    {
      "latitude": 38.516464,
      "longitude": -8.574471,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861464,
      "ems": null
    },
    {
      "latitude": 38.516575,
      "longitude": -8.570862,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861470,
      "ems": null
    },
    {
      "latitude": 38.516693,
      "longitude": -8.567007,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861476,
      "ems": null
    },
    {
      "latitude": 38.516876,
      "longitude": -8.563365,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861482,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -8.559663,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861488,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -8.555663,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861494,
      "ems": null
    },
    {
      "latitude": 38.516968,
      "longitude": -8.551961,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861500,
      "ems": null
    },
    {
      "latitude": 38.516994,
      "longitude": -8.548584,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861506,
      "ems": null
    },
    {
      "latitude": 38.516994,
      "longitude": -8.545044,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861512,
      "ems": null
    },
    {
      "latitude": 38.51709,
      "longitude": -8.541199,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861518,
      "ems": null
    },
    {
      "latitude": 38.517197,
      "longitude": -8.537571,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861524,
      "ems": null
    },
    {
      "latitude": 38.517277,
      "longitude": -8.534119,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861530,
      "ems": null
    },
    {
      "latitude": 38.51738,
      "longitude": -8.530525,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861536,
      "ems": null
    },
    {
      "latitude": 38.517509,
      "longitude": -8.5271,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861543,
      "ems": null
    },
    {
      "latitude": 38.517647,
      "longitude": -8.522949,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861551,
      "ems": null
    },
    {
      "latitude": 38.517792,
      "longitude": -8.518883,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861557,
      "ems": null
    },
    {
      "latitude": 38.517834,
      "longitude": -8.514465,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861565,
      "ems": null
    },
    {
      "latitude": 38.517879,
      "longitude": -8.510437,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861572,
      "ems": null
    },
    {
      "latitude": 38.518021,
      "longitude": -8.506958,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861577,
      "ems": null
    },
    {
      "latitude": 38.518158,
      "longitude": -8.503537,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861583,
      "ems": null
    },
    {
      "latitude": 38.518204,
      "longitude": -8.500074,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861590,
      "ems": null
    },
    {
      "latitude": 38.518295,
      "longitude": -8.497029,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861596,
      "ems": null
    },
    {
      "latitude": 38.518391,
      "longitude": -8.494263,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861601,
      "ems": null
    },
    {
      "latitude": 38.518532,
      "longitude": -8.491272,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658861608,
      "ems": null
    },
    {
      "latitude": 38.518719,
      "longitude": -8.488464,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658861614,
      "ems": null
    },
    {
      "latitude": 38.51889,
      "longitude": -8.485625,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658861620,
      "ems": null
    },
    {
      "latitude": 38.519138,
      "longitude": -8.482849,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 84,
      "squawk": "1357",
      "timestamp": 1658861626,
      "ems": null
    },
    {
      "latitude": 38.51923,
      "longitude": -8.479919,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861632,
      "ems": null
    },
    {
      "latitude": 38.519321,
      "longitude": -8.477173,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861638,
      "ems": null
    },
    {
      "latitude": 38.519463,
      "longitude": -8.474365,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861644,
      "ems": null
    },
    {
      "latitude": 38.519485,
      "longitude": -8.472609,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861648,
      "ems": null
    },
    {
      "latitude": 38.519485,
      "longitude": -8.471713,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861649,
      "ems": null
    },
    {
      "latitude": 38.519463,
      "longitude": -8.471191,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861651,
      "ems": null
    },
    {
      "latitude": 38.519604,
      "longitude": -8.468262,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658861657,
      "ems": null
    },
    {
      "latitude": 38.519741,
      "longitude": -8.465698,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861662,
      "ems": null
    },
    {
      "latitude": 38.519882,
      "longitude": -8.46167,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861670,
      "ems": null
    },
    {
      "latitude": 38.519989,
      "longitude": -8.458696,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861676,
      "ems": null
    },
    {
      "latitude": 38.520081,
      "longitude": -8.457204,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658861680,
      "ems": null
    },
    {
      "latitude": 38.520264,
      "longitude": -8.454576,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658861685,
      "ems": null
    },
    {
      "latitude": 38.520393,
      "longitude": -8.451477,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861691,
      "ems": null
    },
    {
      "latitude": 38.520489,
      "longitude": -8.448547,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861698,
      "ems": null
    },
    {
      "latitude": 38.520489,
      "longitude": -8.445618,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861703,
      "ems": null
    },
    {
      "latitude": 38.52058,
      "longitude": -8.442688,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861710,
      "ems": null
    },
    {
      "latitude": 38.52063,
      "longitude": -8.43947,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861715,
      "ems": null
    },
    {
      "latitude": 38.520767,
      "longitude": -8.435303,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861724,
      "ems": null
    },
    {
      "latitude": 38.520767,
      "longitude": -8.430542,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861732,
      "ems": null
    },
    {
      "latitude": 38.520813,
      "longitude": -8.427588,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861738,
      "ems": null
    },
    {
      "latitude": 38.520905,
      "longitude": -8.424066,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861744,
      "ems": null
    },
    {
      "latitude": 38.520996,
      "longitude": -8.421498,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861749,
      "ems": null
    },
    {
      "latitude": 38.521137,
      "longitude": -8.417542,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861756,
      "ems": null
    },
    {
      "latitude": 38.521317,
      "longitude": -8.414214,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658861762,
      "ems": null
    },
    {
      "latitude": 38.521454,
      "longitude": -8.41081,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861768,
      "ems": null
    },
    {
      "latitude": 38.521603,
      "longitude": -8.407532,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861773,
      "ems": null
    },
    {
      "latitude": 38.521774,
      "longitude": -8.404123,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861779,
      "ems": null
    },
    {
      "latitude": 38.521885,
      "longitude": -8.400635,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861786,
      "ems": null
    },
    {
      "latitude": 38.521976,
      "longitude": -8.397095,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861792,
      "ems": null
    },
    {
      "latitude": 38.522141,
      "longitude": -8.393734,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861798,
      "ems": null
    },
    {
      "latitude": 38.522232,
      "longitude": -8.39039,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861804,
      "ems": null
    },
    {
      "latitude": 38.522396,
      "longitude": -8.386963,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861809,
      "ems": null
    },
    {
      "latitude": 38.522583,
      "longitude": -8.383423,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861816,
      "ems": null
    },
    {
      "latitude": 38.52269,
      "longitude": -8.379703,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861822,
      "ems": null
    },
    {
      "latitude": 38.522816,
      "longitude": -8.37616,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861828,
      "ems": null
    },
    {
      "latitude": 38.522919,
      "longitude": -8.372597,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861834,
      "ems": null
    },
    {
      "latitude": 38.523048,
      "longitude": -8.369141,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861840,
      "ems": null
    },
    {
      "latitude": 38.523102,
      "longitude": -8.365492,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861846,
      "ems": null
    },
    {
      "latitude": 38.523193,
      "longitude": -8.361909,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861852,
      "ems": null
    },
    {
      "latitude": 38.523373,
      "longitude": -8.358459,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861858,
      "ems": null
    },
    {
      "latitude": 38.523468,
      "longitude": -8.355042,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861864,
      "ems": null
    },
    {
      "latitude": 38.523468,
      "longitude": -8.351699,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861871,
      "ems": null
    },
    {
      "latitude": 38.523514,
      "longitude": -8.348057,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861877,
      "ems": null
    },
    {
      "latitude": 38.523605,
      "longitude": -8.344971,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861883,
      "ems": null
    },
    {
      "latitude": 38.523701,
      "longitude": -8.34137,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861889,
      "ems": null
    },
    {
      "latitude": 38.523743,
      "longitude": -8.337966,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861895,
      "ems": null
    },
    {
      "latitude": 38.523834,
      "longitude": -8.334384,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861901,
      "ems": null
    },
    {
      "latitude": 38.523926,
      "longitude": -8.33104,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861907,
      "ems": null
    },
    {
      "latitude": 38.523972,
      "longitude": -8.327816,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658861913,
      "ems": null
    },
    {
      "latitude": 38.523972,
      "longitude": -8.325009,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658861919,
      "ems": null
    },
    {
      "latitude": 38.524071,
      "longitude": -8.321106,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861925,
      "ems": null
    },
    {
      "latitude": 38.524166,
      "longitude": -8.317932,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861931,
      "ems": null
    },
    {
      "latitude": 38.524292,
      "longitude": -8.314501,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861937,
      "ems": null
    },
    {
      "latitude": 38.524429,
      "longitude": -8.311038,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861943,
      "ems": null
    },
    {
      "latitude": 38.524475,
      "longitude": -8.307455,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861949,
      "ems": null
    },
    {
      "latitude": 38.524521,
      "longitude": -8.304172,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658861955,
      "ems": null
    },
    {
      "latitude": 38.524658,
      "longitude": -8.300469,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861961,
      "ems": null
    },
    {
      "latitude": 38.524796,
      "longitude": -8.297245,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861967,
      "ems": null
    },
    {
      "latitude": 38.524956,
      "longitude": -8.294006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861973,
      "ems": null
    },
    {
      "latitude": 38.52507,
      "longitude": -8.290379,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861979,
      "ems": null
    },
    {
      "latitude": 38.525208,
      "longitude": -8.286916,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861985,
      "ems": null
    },
    {
      "latitude": 38.525299,
      "longitude": -8.283512,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658861991,
      "ems": null
    },
    {
      "latitude": 38.525421,
      "longitude": -8.280212,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658861997,
      "ems": null
    },
    {
      "latitude": 38.525574,
      "longitude": -8.277004,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862003,
      "ems": null
    },
    {
      "latitude": 38.525665,
      "longitude": -8.27378,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862009,
      "ems": null
    },
    {
      "latitude": 38.525803,
      "longitude": -8.270376,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862015,
      "ems": null
    },
    {
      "latitude": 38.52594,
      "longitude": -8.267093,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862021,
      "ems": null
    },
    {
      "latitude": 38.526073,
      "longitude": -8.263672,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862027,
      "ems": null
    },
    {
      "latitude": 38.526306,
      "longitude": -8.260285,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862033,
      "ems": null
    },
    {
      "latitude": 38.526535,
      "longitude": -8.256883,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "1357",
      "timestamp": 1658862039,
      "ems": null
    },
    {
      "latitude": 38.526672,
      "longitude": -8.253717,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862045,
      "ems": null
    },
    {
      "latitude": 38.526718,
      "longitude": -8.250374,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862051,
      "ems": null
    },
    {
      "latitude": 38.526772,
      "longitude": -8.246582,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862057,
      "ems": null
    },
    {
      "latitude": 38.52681,
      "longitude": -8.243209,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658862064,
      "ems": null
    },
    {
      "latitude": 38.526855,
      "longitude": -8.240105,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862069,
      "ems": null
    },
    {
      "latitude": 38.526901,
      "longitude": -8.23682,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862075,
      "ems": null
    },
    {
      "latitude": 38.526901,
      "longitude": -8.233835,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862081,
      "ems": null
    },
    {
      "latitude": 38.526855,
      "longitude": -8.229297,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862088,
      "ems": null
    },
    {
      "latitude": 38.526772,
      "longitude": -8.225891,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862094,
      "ems": null
    },
    {
      "latitude": 38.526772,
      "longitude": -8.222595,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862099,
      "ems": null
    },
    {
      "latitude": 38.526764,
      "longitude": -8.219207,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862106,
      "ems": null
    },
    {
      "latitude": 38.526901,
      "longitude": -8.215982,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862112,
      "ems": null
    },
    {
      "latitude": 38.526993,
      "longitude": -8.212817,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862117,
      "ems": null
    },
    {
      "latitude": 38.527084,
      "longitude": -8.209295,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862124,
      "ems": null
    },
    {
      "latitude": 38.527222,
      "longitude": -8.206011,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862130,
      "ems": null
    },
    {
      "latitude": 38.527378,
      "longitude": -8.202698,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862136,
      "ems": null
    },
    {
      "latitude": 38.52747,
      "longitude": -8.199524,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862142,
      "ems": null
    },
    {
      "latitude": 38.527542,
      "longitude": -8.196218,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862148,
      "ems": null
    },
    {
      "latitude": 38.527611,
      "longitude": -8.192688,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658862154,
      "ems": null
    },
    {
      "latitude": 38.527588,
      "longitude": -8.189412,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862160,
      "ems": null
    },
    {
      "latitude": 38.527634,
      "longitude": -8.186008,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862166,
      "ems": null
    },
    {
      "latitude": 38.527798,
      "longitude": -8.182678,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862172,
      "ems": null
    },
    {
      "latitude": 38.527954,
      "longitude": -8.179261,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862178,
      "ems": null
    },
    {
      "latitude": 38.528137,
      "longitude": -8.175738,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862184,
      "ems": null
    },
    {
      "latitude": 38.528229,
      "longitude": -8.17341,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862190,
      "ems": null
    },
    {
      "latitude": 38.5284,
      "longitude": -8.168884,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862196,
      "ems": null
    },
    {
      "latitude": 38.528496,
      "longitude": -8.165283,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862202,
      "ems": null
    },
    {
      "latitude": 38.528549,
      "longitude": -8.161767,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658862208,
      "ems": null
    },
    {
      "latitude": 38.528587,
      "longitude": -8.159302,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862214,
      "ems": null
    },
    {
      "latitude": 38.528633,
      "longitude": -8.155518,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862219,
      "ems": null
    },
    {
      "latitude": 38.528732,
      "longitude": -8.151975,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862225,
      "ems": null
    },
    {
      "latitude": 38.52882,
      "longitude": -8.148438,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862231,
      "ems": null
    },
    {
      "latitude": 38.52887,
      "longitude": -8.144929,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862237,
      "ems": null
    },
    {
      "latitude": 38.528961,
      "longitude": -8.141108,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862244,
      "ems": null
    },
    {
      "latitude": 38.529099,
      "longitude": -8.136292,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862252,
      "ems": null
    },
    {
      "latitude": 38.52919,
      "longitude": -8.132689,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862258,
      "ems": null
    },
    {
      "latitude": 38.529236,
      "longitude": -8.129226,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862264,
      "ems": null
    },
    {
      "latitude": 38.529331,
      "longitude": -8.125732,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862270,
      "ems": null
    },
    {
      "latitude": 38.529427,
      "longitude": -8.122498,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862276,
      "ems": null
    },
    {
      "latitude": 38.52961,
      "longitude": -8.119019,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862282,
      "ems": null
    },
    {
      "latitude": 38.529739,
      "longitude": -8.115971,
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
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862288,
      "ems": null
    },
    {
      "latitude": 38.529877,
      "longitude": -8.112329,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862294,
      "ems": null
    },
    {
      "latitude": 38.53006,
      "longitude": -8.109045,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862300,
      "ems": null
    },
    {
      "latitude": 38.530216,
      "longitude": -8.105835,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862306,
      "ems": null
    },
    {
      "latitude": 38.530289,
      "longitude": -8.102536,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862312,
      "ems": null
    },
    {
      "latitude": 38.530449,
      "longitude": -8.099243,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862318,
      "ems": null
    },
    {
      "latitude": 38.530727,
      "longitude": -8.095947,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 84,
      "squawk": "1357",
      "timestamp": 1658862325,
      "ems": null
    },
    {
      "latitude": 38.53096,
      "longitude": -8.092957,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 83,
      "squawk": "1357",
      "timestamp": 1658862330,
      "ems": null
    },
    {
      "latitude": 38.53125,
      "longitude": -8.08946,
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
      "heading": 84,
      "squawk": "1357",
      "timestamp": 1658862337,
      "ems": null
    },
    {
      "latitude": 38.53138,
      "longitude": -8.088135,
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
      "heading": 83,
      "squawk": "1357",
      "timestamp": 1658862339,
      "ems": null
    },
    {
      "latitude": 38.531708,
      "longitude": -8.084839,
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
      "heading": 81,
      "squawk": "1357",
      "timestamp": 1658862345,
      "ems": null
    },
    {
      "latitude": 38.532028,
      "longitude": -8.081579,
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
      "heading": 83,
      "squawk": "1357",
      "timestamp": 1658862351,
      "ems": null
    },
    {
      "latitude": 38.532257,
      "longitude": -8.078295,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862358,
      "ems": null
    },
    {
      "latitude": 38.532394,
      "longitude": -8.074891,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862364,
      "ems": null
    },
    {
      "latitude": 38.532452,
      "longitude": -8.073059,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862367,
      "ems": null
    },
    {
      "latitude": 38.532543,
      "longitude": -8.069641,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862372,
      "ems": null
    },
    {
      "latitude": 38.532497,
      "longitude": -8.067993,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862375,
      "ems": null
    },
    {
      "latitude": 38.532497,
      "longitude": -8.065918,
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
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862379,
      "ems": null
    },
    {
      "latitude": 38.532452,
      "longitude": -8.064941,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862381,
      "ems": null
    },
    {
      "latitude": 38.532356,
      "longitude": -8.0625,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862385,
      "ems": null
    },
    {
      "latitude": 38.532303,
      "longitude": -8.059427,
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
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862390,
      "ems": null
    },
    {
      "latitude": 38.532166,
      "longitude": -8.055427,
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
      "heading": 93,
      "squawk": "1357",
      "timestamp": 1658862397,
      "ems": null
    },
    {
      "latitude": 38.532074,
      "longitude": -8.053695,
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
      "heading": 93,
      "squawk": "1357",
      "timestamp": 1658862400,
      "ems": null
    },
    {
      "latitude": 38.531937,
      "longitude": -8.050292,
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
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862406,
      "ems": null
    },
    {
      "latitude": 38.531937,
      "longitude": -8.046948,
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
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862411,
      "ems": null
    },
    {
      "latitude": 38.531845,
      "longitude": -8.043701,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862417,
      "ems": null
    },
    {
      "latitude": 38.531754,
      "longitude": -8.040405,
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
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862424,
      "ems": null
    },
    {
      "latitude": 38.531754,
      "longitude": -8.037231,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862430,
      "ems": null
    },
    {
      "latitude": 38.531799,
      "longitude": -8.035663,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862433,
      "ems": null
    },
    {
      "latitude": 38.531891,
      "longitude": -8.03226,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862439,
      "ems": null
    },
    {
      "latitude": 38.53194,
      "longitude": -8.029053,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658862445,
      "ems": null
    },
    {
      "latitude": 38.531986,
      "longitude": -8.025879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862451,
      "ems": null
    },
    {
      "latitude": 38.532028,
      "longitude": -8.022587,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658862457,
      "ems": null
    },
    {
      "latitude": 38.532074,
      "longitude": -8.019303,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862463,
      "ems": null
    },
    {
      "latitude": 38.532173,
      "longitude": -8.015869,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862469,
      "ems": null
    },
    {
      "latitude": 38.532173,
      "longitude": -8.012451,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862475,
      "ems": null
    },
    {
      "latitude": 38.532032,
      "longitude": -8.008789,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "1357",
      "timestamp": 1658862481,
      "ems": null
    },
    {
      "latitude": 38.531891,
      "longitude": -8.005127,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862487,
      "ems": null
    },
    {
      "latitude": 38.531754,
      "longitude": -8.001451,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862493,
      "ems": null
    },
    {
      "latitude": 38.531658,
      "longitude": -7.998108,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862499,
      "ems": null
    },
    {
      "latitude": 38.531567,
      "longitude": -7.994263,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862505,
      "ems": null
    },
    {
      "latitude": 38.531475,
      "longitude": -7.990356,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862511,
      "ems": null
    },
    {
      "latitude": 38.531479,
      "longitude": -7.986941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862517,
      "ems": null
    },
    {
      "latitude": 38.531425,
      "longitude": -7.983093,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862523,
      "ems": null
    },
    {
      "latitude": 38.531334,
      "longitude": -7.979675,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862529,
      "ems": null
    },
    {
      "latitude": 38.531242,
      "longitude": -7.975708,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862535,
      "ems": null
    },
    {
      "latitude": 38.531242,
      "longitude": -7.972107,
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
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862541,
      "ems": null
    },
    {
      "latitude": 38.531193,
      "longitude": -7.968323,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862547,
      "ems": null
    },
    {
      "latitude": 38.531193,
      "longitude": -7.964539,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862553,
      "ems": null
    },
    {
      "latitude": 38.531193,
      "longitude": -7.960938,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862559,
      "ems": null
    },
    {
      "latitude": 38.531204,
      "longitude": -7.957505,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 90,
      "squawk": "1357",
      "timestamp": 1658862565,
      "ems": null
    },
    {
      "latitude": 38.531158,
      "longitude": -7.953982,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862571,
      "ems": null
    },
    {
      "latitude": 38.531101,
      "longitude": -7.949829,
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
      "heading": 89,
      "squawk": "1357",
      "timestamp": 1658862579,
      "ems": null
    },
    {
      "latitude": 38.531204,
      "longitude": -7.946518,
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
      "heading": 87,
      "squawk": "1357",
      "timestamp": 1658862584,
      "ems": null
    },
    {
      "latitude": 38.531296,
      "longitude": -7.944548,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862588,
      "ems": null
    },
    {
      "latitude": 38.53138,
      "longitude": -7.943359,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862589,
      "ems": null
    },
    {
      "latitude": 38.531479,
      "longitude": -7.941384,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862593,
      "ems": null
    },
    {
      "latitude": 38.531612,
      "longitude": -7.93988,
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
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862596,
      "ems": null
    },
    {
      "latitude": 38.531658,
      "longitude": -7.938965,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 85,
      "squawk": "1357",
      "timestamp": 1658862597,
      "ems": null
    },
    {
      "latitude": 38.531754,
      "longitude": -7.937085,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "1357",
      "timestamp": 1658862601,
      "ems": null
    },
    {
      "latitude": 38.531891,
      "longitude": -7.933594,
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
      "heading": 88,
      "squawk": "1357",
      "timestamp": 1658862607,
      "ems": null
    },
    {
      "latitude": 38.531799,
      "longitude": -7.929979,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862613,
      "ems": null
    },
    {
      "latitude": 38.531754,
      "longitude": -7.928284,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862616,
      "ems": null
    },
    {
      "latitude": 38.531662,
      "longitude": -7.926517,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862619,
      "ems": null
    },
    {
      "latitude": 38.531616,
      "longitude": -7.925083,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862622,
      "ems": null
    },
    {
      "latitude": 38.531521,
      "longitude": -7.923096,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "1357",
      "timestamp": 1658862625,
      "ems": null
    },
    {
      "latitude": 38.53138,
      "longitude": -7.921387,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 96,
      "squawk": "1357",
      "timestamp": 1658862628,
      "ems": null
    },
    {
      "latitude": 38.531242,
      "longitude": -7.919739,
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
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658862631,
      "ems": null
    },
    {
      "latitude": 38.531147,
      "longitude": -7.918091,
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
      "heading": 95,
      "squawk": "1357",
      "timestamp": 1658862634,
      "ems": null
    },
    {
      "latitude": 38.53093,
      "longitude": -7.914873,
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
      "heading": 94,
      "squawk": "1357",
      "timestamp": 1658862640,
      "ems": null
    },
    {
      "latitude": 38.530727,
      "longitude": -7.911377,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "1357",
      "timestamp": 1658862646,
      "ems": null
    },
    {
      "latitude": 38.530563,
      "longitude": -7.907947,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862652,
      "ems": null
    },
    {
      "latitude": 38.530426,
      "longitude": -7.904902,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 94,
      "squawk": "1357",
      "timestamp": 1658862658,
      "ems": null
    },
    {
      "latitude": 38.530243,
      "longitude": -7.90132,
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
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862664,
      "ems": null
    },
    {
      "latitude": 38.53017,
      "longitude": -7.897949,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862670,
      "ems": null
    },
    {
      "latitude": 38.53006,
      "longitude": -7.892722,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "1357",
      "timestamp": 1658862679,
      "ems": null
    },
    {
      "latitude": 38.529922,
      "longitude": -7.889318,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 92,
      "squawk": "1357",
      "timestamp": 1658862685,
      "ems": null
    },
    {
      "latitude": 38.529797,
      "longitude": -7.885864,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 93,
      "squawk": "1357",
      "timestamp": 1658862691,
      "ems": null
    },
    {
      "latitude": 38.529648,
      "longitude": -7.882452,
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
      "heading": 94,
      "squawk": "1357",
      "timestamp": 1658862697,
      "ems": null
    },
    {
      "latitude": 38.529427,
      "longitude": -7.87915,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 94,
      "squawk": "1357",
      "timestamp": 1658862703,
      "ems": null
    },
    {
      "latitude": 38.529144,
      "longitude": -7.875824,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 94,
      "squawk": "1357",
      "timestamp": 1658862709,
      "ems": null
    },
    {
      "latitude": 38.528633,
      "longitude": -7.871399,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 108,
      "squawk": "1357",
      "timestamp": 1658862718,
      "ems": null
    },
    {
      "latitude": 38.528046,
      "longitude": -7.869674,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 117,
      "squawk": "1357",
      "timestamp": 1658862721,
      "ems": null
    },
    {
      "latitude": 38.527817,
      "longitude": -7.869137,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 122,
      "squawk": "1357",
      "timestamp": 1658862723,
      "ems": null
    },
    {
      "latitude": 38.525528,
      "longitude": -7.866151,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 145,
      "squawk": "1357",
      "timestamp": 1658862729,
      "ems": null
    },
    {
      "latitude": 38.52356,
      "longitude": -7.865077,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "1357",
      "timestamp": 1658862733,
      "ems": null
    },
    {
      "latitude": 38.522507,
      "longitude": -7.864838,
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
      "heading": 169,
      "squawk": "1357",
      "timestamp": 1658862736,
      "ems": null
    },
    {
      "latitude": 38.521179,
      "longitude": -7.864539,
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
      "heading": 170,
      "squawk": "1357",
      "timestamp": 1658862739,
      "ems": null
    },
    {
      "latitude": 38.520218,
      "longitude": -7.8643,
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
      "heading": 169,
      "squawk": "1357",
      "timestamp": 1658862742,
      "ems": null
    },
    {
      "latitude": 38.518707,
      "longitude": -7.863942,
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
      "heading": 169,
      "squawk": "1357",
      "timestamp": 1658862745,
      "ems": null
    },
    {
      "latitude": 38.518158,
      "longitude": -7.863822,
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
      "heading": 169,
      "squawk": "1357",
      "timestamp": 1658862747,
      "ems": null
    },
    {
      "latitude": 38.517059,
      "longitude": -7.863584,
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
      "heading": 170,
      "squawk": "1357",
      "timestamp": 1658862750,
      "ems": null
    },
    {
      "latitude": 38.515926,
      "longitude": -7.863281,
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
      "squawk": "1357",
      "timestamp": 1658862752,
      "ems": null
    },
    {
      "latitude": 38.514084,
      "longitude": -7.862987,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 175,
      "squawk": "1357",
      "timestamp": 1658862758,
      "ems": null
    },
    {
      "latitude": 38.512062,
      "longitude": -7.862854,
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
      "heading": 177,
      "squawk": "1357",
      "timestamp": 1658862763,
      "ems": null
    },
    {
      "latitude": 38.509918,
      "longitude": -7.862808,
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
      "heading": 178,
      "squawk": "1357",
      "timestamp": 1658862769,
      "ems": null
    },
    {
      "latitude": 38.507996,
      "longitude": -7.862808,
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
      "heading": 181,
      "squawk": "1357",
      "timestamp": 1658862773,
      "ems": null
    },
    {
      "latitude": 38.505917,
      "longitude": -7.862915,
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
      "heading": 182,
      "squawk": "1357",
      "timestamp": 1658862779,
      "ems": null
    },
    {
      "latitude": 38.50415,
      "longitude": -7.863046,
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
      "heading": 183,
      "squawk": "1357",
      "timestamp": 1658862784,
      "ems": null
    },
    {
      "latitude": 38.502007,
      "longitude": -7.863159,
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
      "heading": 182,
      "squawk": "1357",
      "timestamp": 1658862790,
      "ems": null
    },
    {
      "latitude": 38.500004,
      "longitude": -7.86322,
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
      "heading": 181,
      "squawk": "1357",
      "timestamp": 1658862795,
      "ems": null
    },
    {
      "latitude": 38.498611,
      "longitude": -7.863405,
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
      "heading": 188,
      "squawk": "1357",
      "timestamp": 1658862799,
      "ems": null
    },
    {
      "latitude": 38.497559,
      "longitude": -7.863703,
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
      "heading": 196,
      "squawk": "1357",
      "timestamp": 1658862803,
      "ems": null
    },
    {
      "latitude": 38.496559,
      "longitude": -7.864197,
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
      "heading": 204,
      "squawk": "1357",
      "timestamp": 1658862806,
      "ems": null
    },
    {
      "latitude": 38.49559,
      "longitude": -7.864897,
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
      "heading": 210,
      "squawk": "1357",
      "timestamp": 1658862809,
      "ems": null
    },
    {
      "latitude": 38.495224,
      "longitude": -7.865256,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "1357",
      "timestamp": 1658862811,
      "ems": null
    },
    {
      "latitude": 38.494278,
      "longitude": -7.866516,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "1357",
      "timestamp": 1658862814,
      "ems": null
    },
    {
      "latitude": 38.493858,
      "longitude": -7.867371,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 233,
      "squawk": "1357",
      "timestamp": 1658862817,
      "ems": null
    },
    {
      "latitude": 38.493488,
      "longitude": -7.868286,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 245,
      "squawk": "1357",
      "timestamp": 1658862821,
      "ems": null
    },
    {
      "latitude": 38.492981,
      "longitude": -7.870271,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 246,
      "squawk": "1357",
      "timestamp": 1658862826,
      "ems": null
    },
    {
      "latitude": 38.492844,
      "longitude": -7.871346,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 264,
      "squawk": "1357",
      "timestamp": 1658862830,
      "ems": null
    },
    {
      "latitude": 38.492844,
      "longitude": -7.872182,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 266,
      "squawk": "1357",
      "timestamp": 1658862832,
      "ems": null
    },
    {
      "latitude": 38.49279,
      "longitude": -7.872986,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 266,
      "squawk": "1357",
      "timestamp": 1658862835,
      "ems": null
    },
    {
      "latitude": 38.492752,
      "longitude": -7.874212,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 266,
      "squawk": "1357",
      "timestamp": 1658862838,
      "ems": null
    },
    {
      "latitude": 38.492741,
      "longitude": -7.875122,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 268,
      "squawk": "1357",
      "timestamp": 1658862841,
      "ems": null
    },
    {
      "latitude": 38.492695,
      "longitude": -7.876282,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 268,
      "squawk": "1357",
      "timestamp": 1658862845,
      "ems": null
    },
    {
      "latitude": 38.492695,
      "longitude": -7.877258,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 268,
      "squawk": "1357",
      "timestamp": 1658862848,
      "ems": null
    },
    {
      "latitude": 38.492695,
      "longitude": -7.878113,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "1357",
      "timestamp": 1658862851,
      "ems": null
    },
    {
      "latitude": 38.492706,
      "longitude": -7.879108,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 271,
      "squawk": "1357",
      "timestamp": 1658862854,
      "ems": null
    },
    {
      "latitude": 38.49279,
      "longitude": -7.880066,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 275,
      "squawk": "1357",
      "timestamp": 1658862857,
      "ems": null
    },
    {
      "latitude": 38.492836,
      "longitude": -7.880859,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 274,
      "squawk": "1357",
      "timestamp": 1658862859,
      "ems": null
    },
    {
      "latitude": 38.492928,
      "longitude": -7.881897,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 276,
      "squawk": "1357",
      "timestamp": 1658862863,
      "ems": null
    },
    {
      "latitude": 38.492981,
      "longitude": -7.88281,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 276,
      "squawk": "1357",
      "timestamp": 1658862865,
      "ems": null
    },
    {
      "latitude": 38.493118,
      "longitude": -7.883884,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 277,
      "squawk": "1357",
      "timestamp": 1658862869,
      "ems": null
    },
    {
      "latitude": 38.493206,
      "longitude": -7.884949,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 278,
      "squawk": "1357",
      "timestamp": 1658862872,
      "ems": null
    },
    {
      "latitude": 38.493347,
      "longitude": -7.885915,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 281,
      "squawk": "1357",
      "timestamp": 1658862875,
      "ems": null
    },
    {
      "latitude": 38.493626,
      "longitude": -7.886902,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 291,
      "squawk": "1357",
      "timestamp": 1658862878,
      "ems": null
    },
    {
      "latitude": 38.493942,
      "longitude": -7.887706,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 302,
      "squawk": "1357",
      "timestamp": 1658862881,
      "ems": null
    },
    {
      "latitude": 38.49437,
      "longitude": -7.888489,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 309,
      "squawk": "1357",
      "timestamp": 1658862883,
      "ems": null
    },
    {
      "latitude": 38.494976,
      "longitude": -7.889282,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 315,
      "squawk": "1357",
      "timestamp": 1658862887,
      "ems": null
    },
    {
      "latitude": 38.495453,
      "longitude": -7.889855,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 321,
      "squawk": "1357",
      "timestamp": 1658862890,
      "ems": null
    },
    {
      "latitude": 38.496048,
      "longitude": -7.890393,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 310,
      "squawk": "1357",
      "timestamp": 1658862892,
      "ems": null
    },
    {
      "latitude": 38.496418,
      "longitude": -7.890625,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 337,
      "squawk": "1357",
      "timestamp": 1658862895,
      "ems": null
    },
    {
      "latitude": 38.496979,
      "longitude": -7.890869,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 337,
      "squawk": "1357",
      "timestamp": 1658862896,
      "ems": null
    },
    {
      "latitude": 38.498421,
      "longitude": -7.891235,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 351,
      "squawk": "1357",
      "timestamp": 1658862901,
      "ems": null
    },
    {
      "latitude": 38.499435,
      "longitude": -7.891348,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 353,
      "squawk": "1357",
      "timestamp": 1658862905,
      "ems": null
    },
    {
      "latitude": 38.500282,
      "longitude": -7.891479,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 356,
      "squawk": "1357",
      "timestamp": 1658862908,
      "ems": null
    },
    {
      "latitude": 38.500889,
      "longitude": -7.891479,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 356,
      "squawk": "1357",
      "timestamp": 1658862910,
      "ems": null
    },
    {
      "latitude": 38.501122,
      "longitude": -7.891418,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 1,
      "squawk": "1357",
      "timestamp": 1658862911,
      "ems": null
    },
    {
      "latitude": 38.502892,
      "longitude": -7.891418,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 360,
      "squawk": "1357",
      "timestamp": 1658862917,
      "ems": null
    },
    {
      "latitude": 38.504101,
      "longitude": -7.891479,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 357,
      "squawk": "1357",
      "timestamp": 1658862922,
      "ems": null
    },
    {
      "latitude": 38.505753,
      "longitude": -7.891527,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 359,
      "squawk": "1357",
      "timestamp": 1658862928,
      "ems": null
    },
    {
      "latitude": 38.507172,
      "longitude": -7.891357,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 3,
      "squawk": "1357",
      "timestamp": 1658862933,
      "ems": null
    },
    {
      "latitude": 38.508636,
      "longitude": -7.891288,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 1,
      "squawk": "1357",
      "timestamp": 1658862939,
      "ems": null
    },
    {
      "latitude": 38.511749,
      "longitude": -7.891109,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 3,
      "squawk": "1357",
      "timestamp": 1658862949,
      "ems": null
    },
    {
      "latitude": 38.514668,
      "longitude": -7.891296,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 358,
      "squawk": "1357",
      "timestamp": 1658862960,
      "ems": null
    },
    {
      "latitude": 38.516342,
      "longitude": -7.891235,
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
      "heading": 3,
      "squawk": "1357",
      "timestamp": 1658862966,
      "ems": null
    },
    {
      "latitude": 38.519463,
      "longitude": -7.890869,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 5,
      "squawk": "1357",
      "timestamp": 1658862976,
      "ems": null
    },
    {
      "latitude": 38.520859,
      "longitude": -7.890869,
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
      "heading": 359,
      "squawk": "1357",
      "timestamp": 1658862981,
      "ems": null
    },
    {
      "latitude": 38.52388,
      "longitude": -7.890632,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 3,
      "squawk": "1357",
      "timestamp": 1658862992,
      "ems": null
    },
    {
      "latitude": 38.527145,
      "longitude": -7.89032,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 6,
      "squawk": "1357",
      "timestamp": 1658863003,
      "ems": null
    },
    {
      "latitude": 38.528679,
      "longitude": -7.890198,
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
      "heading": 4,
      "squawk": "1357",
      "timestamp": 1658863008,
      "ems": null
    },
    {
      "latitude": 38.53138,
      "longitude": -7.889954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "1357",
      "timestamp": 1658863019,
      "ems": null
    },
    {
      "latitude": 38.532452,
      "longitude": -7.889832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "1357",
      "timestamp": 1658863024,
      "ems": null
    },
    {
      "latitude": 38.533371,
      "longitude": -7.889709,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 22.2,
        "kts": 12,
        "mph": 13.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 11,
      "squawk": "1357",
      "timestamp": 1658863032,
      "ems": null
    },
    {
      "latitude": 38.53347,
      "longitude": -7.889452,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 115,
      "squawk": "1357",
      "timestamp": 1658863039,
      "ems": null
    },
    {
      "latitude": 38.53336,
      "longitude": -7.889236,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 129,
      "squawk": "1357",
      "timestamp": 1658863044,
      "ems": null
    }
  ]
};
