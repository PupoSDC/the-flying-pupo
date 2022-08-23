import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220518LPCSLPCS",
    callsign: "CSDHW",
    name: "First Night Flight",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 4, 18, 21, 0).getTime(),
    arrival: new Date(2022, 4, 18, 21, 45).getTime(),
    singleEnginePistonTime: 45,
    picTime: 0,
    dualTime: 45,
    nightTime: 45,
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
      modes: "3D1229",
      registration: "CS-DHW",
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
      "latitude": 38.718601,
      "longitude": -9.352336,
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
      "heading": 199,
      "squawk": "0",
      "timestamp": 1652908670,
      "ems": null
    },
    {
      "latitude": 38.718475,
      "longitude": -9.352545,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 7.4,
        "kts": 4,
        "mph": 4.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 271,
      "squawk": "0",
      "timestamp": 1652908679,
      "ems": null
    },
    {
      "latitude": 38.718567,
      "longitude": -9.352768,
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
      "timestamp": 1652908686,
      "ems": null
    },
    {
      "latitude": 38.718777,
      "longitude": -9.352905,
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
      "heading": 345,
      "squawk": "0",
      "timestamp": 1652908703,
      "ems": null
    },
    {
      "latitude": 38.719036,
      "longitude": -9.352992,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 35.2,
        "kts": 19,
        "mph": 21.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652908707,
      "ems": null
    },
    {
      "latitude": 38.719334,
      "longitude": -9.353104,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 51.9,
        "kts": 28,
        "mph": 32.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652908710,
      "ems": null
    },
    {
      "latitude": 38.719608,
      "longitude": -9.353202,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652908712,
      "ems": null
    },
    {
      "latitude": 38.719837,
      "longitude": -9.353292,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652908714,
      "ems": null
    },
    {
      "latitude": 38.720314,
      "longitude": -9.353455,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652908716,
      "ems": null
    },
    {
      "latitude": 38.720547,
      "longitude": -9.353545,
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
      "squawk": "3225",
      "timestamp": 1652908717,
      "ems": null
    },
    {
      "latitude": 38.722153,
      "longitude": -9.354187,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652908724,
      "ems": null
    },
    {
      "latitude": 38.723736,
      "longitude": -9.354736,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652908730,
      "ems": null
    },
    {
      "latitude": 38.725204,
      "longitude": -9.355336,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 340,
      "squawk": "3225",
      "timestamp": 1652908736,
      "ems": null
    },
    {
      "latitude": 38.727226,
      "longitude": -9.356079,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652908745,
      "ems": null
    },
    {
      "latitude": 38.728436,
      "longitude": -9.356506,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652908751,
      "ems": null
    },
    {
      "latitude": 38.729736,
      "longitude": -9.356889,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 348,
      "squawk": "3225",
      "timestamp": 1652908757,
      "ems": null
    },
    {
      "latitude": 38.731091,
      "longitude": -9.357239,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 1600,
        "ms": 8.1
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652908763,
      "ems": null
    },
    {
      "latitude": 38.731693,
      "longitude": -9.357422,
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
        "fpm": 1664,
        "ms": 8.5
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652908766,
      "ems": null
    },
    {
      "latitude": 38.7323,
      "longitude": -9.357545,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652908769,
      "ems": null
    },
    {
      "latitude": 38.732857,
      "longitude": -9.357666,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "3225",
      "timestamp": 1652908772,
      "ems": null
    },
    {
      "latitude": 38.73349,
      "longitude": -9.357784,
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
      "squawk": "3225",
      "timestamp": 1652908775,
      "ems": null
    },
    {
      "latitude": 38.734024,
      "longitude": -9.35791,
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
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652908778,
      "ems": null
    },
    {
      "latitude": 38.734726,
      "longitude": -9.358142,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652908781,
      "ems": null
    },
    {
      "latitude": 38.735466,
      "longitude": -9.358459,
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
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652908784,
      "ems": null
    },
    {
      "latitude": 38.736191,
      "longitude": -9.358799,
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
      "heading": 340,
      "squawk": "3225",
      "timestamp": 1652908787,
      "ems": null
    },
    {
      "latitude": 38.737015,
      "longitude": -9.359097,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652908790,
      "ems": null
    },
    {
      "latitude": 38.738724,
      "longitude": -9.359741,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652908796,
      "ems": null
    },
    {
      "latitude": 38.739716,
      "longitude": -9.360053,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652908800,
      "ems": null
    },
    {
      "latitude": 38.741379,
      "longitude": -9.360596,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 346,
      "squawk": "3225",
      "timestamp": 1652908805,
      "ems": null
    },
    {
      "latitude": 38.743195,
      "longitude": -9.361084,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652908811,
      "ems": null
    },
    {
      "latitude": 38.743973,
      "longitude": -9.361307,
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
      "heading": 348,
      "squawk": "3225",
      "timestamp": 1652908814,
      "ems": null
    },
    {
      "latitude": 38.744778,
      "longitude": -9.361511,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652908817,
      "ems": null
    },
    {
      "latitude": 38.746265,
      "longitude": -9.362183,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 332,
      "squawk": "3225",
      "timestamp": 1652908823,
      "ems": null
    },
    {
      "latitude": 38.746674,
      "longitude": -9.362501,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 320,
      "squawk": "3225",
      "timestamp": 1652908825,
      "ems": null
    },
    {
      "latitude": 38.747314,
      "longitude": -9.363935,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 291,
      "squawk": "3225",
      "timestamp": 1652908830,
      "ems": null
    },
    {
      "latitude": 38.747383,
      "longitude": -9.365234,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 265,
      "squawk": "3225",
      "timestamp": 1652908833,
      "ems": null
    },
    {
      "latitude": 38.747177,
      "longitude": -9.366502,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 251,
      "squawk": "3225",
      "timestamp": 1652908836,
      "ems": null
    },
    {
      "latitude": 38.746719,
      "longitude": -9.367875,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 245,
      "squawk": "3225",
      "timestamp": 1652908839,
      "ems": null
    },
    {
      "latitude": 38.746265,
      "longitude": -9.369019,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 243,
      "squawk": "3225",
      "timestamp": 1652908841,
      "ems": null
    },
    {
      "latitude": 38.745712,
      "longitude": -9.370382,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 244,
      "squawk": "3225",
      "timestamp": 1652908845,
      "ems": null
    },
    {
      "latitude": 38.745392,
      "longitude": -9.371338,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 245,
      "squawk": "3225",
      "timestamp": 1652908847,
      "ems": null
    },
    {
      "latitude": 38.744797,
      "longitude": -9.37307,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 246,
      "squawk": "3225",
      "timestamp": 1652908850,
      "ems": null
    },
    {
      "latitude": 38.744171,
      "longitude": -9.374573,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 241,
      "squawk": "3225",
      "timestamp": 1652908853,
      "ems": null
    },
    {
      "latitude": 38.743103,
      "longitude": -9.375995,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 223,
      "squawk": "3225",
      "timestamp": 1652908857,
      "ems": null
    },
    {
      "latitude": 38.741795,
      "longitude": -9.376953,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 207,
      "squawk": "3225",
      "timestamp": 1652908860,
      "ems": null
    },
    {
      "latitude": 38.740173,
      "longitude": -9.377547,
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
      "heading": 190,
      "squawk": "3225",
      "timestamp": 1652908863,
      "ems": null
    },
    {
      "latitude": 38.738663,
      "longitude": -9.377547,
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
      "heading": 176,
      "squawk": "3225",
      "timestamp": 1652908866,
      "ems": null
    },
    {
      "latitude": 38.737049,
      "longitude": -9.377136,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 166,
      "squawk": "3225",
      "timestamp": 1652908869,
      "ems": null
    },
    {
      "latitude": 38.73542,
      "longitude": -9.376587,
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
      "heading": 164,
      "squawk": "3225",
      "timestamp": 1652908872,
      "ems": null
    },
    {
      "latitude": 38.733974,
      "longitude": -9.376099,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 165,
      "squawk": "3225",
      "timestamp": 1652908875,
      "ems": null
    },
    {
      "latitude": 38.732437,
      "longitude": -9.375637,
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
      "heading": 166,
      "squawk": "3225",
      "timestamp": 1652908878,
      "ems": null
    },
    {
      "latitude": 38.730881,
      "longitude": -9.375159,
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
      "heading": 167,
      "squawk": "3225",
      "timestamp": 1652908881,
      "ems": null
    },
    {
      "latitude": 38.729275,
      "longitude": -9.374695,
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
      "heading": 167,
      "squawk": "3225",
      "timestamp": 1652908884,
      "ems": null
    },
    {
      "latitude": 38.727631,
      "longitude": -9.374264,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 168,
      "squawk": "3225",
      "timestamp": 1652908887,
      "ems": null
    },
    {
      "latitude": 38.726109,
      "longitude": -9.373901,
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
      "heading": 169,
      "squawk": "3225",
      "timestamp": 1652908890,
      "ems": null
    },
    {
      "latitude": 38.72438,
      "longitude": -9.373548,
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
      "heading": 171,
      "squawk": "3225",
      "timestamp": 1652908893,
      "ems": null
    },
    {
      "latitude": 38.722988,
      "longitude": -9.373291,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 171,
      "squawk": "3225",
      "timestamp": 1652908896,
      "ems": null
    },
    {
      "latitude": 38.721497,
      "longitude": -9.37301,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 172,
      "squawk": "3225",
      "timestamp": 1652908899,
      "ems": null
    },
    {
      "latitude": 38.719639,
      "longitude": -9.372742,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 173,
      "squawk": "3225",
      "timestamp": 1652908902,
      "ems": null
    },
    {
      "latitude": 38.718147,
      "longitude": -9.372559,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 173,
      "squawk": "3225",
      "timestamp": 1652908905,
      "ems": null
    },
    {
      "latitude": 38.716473,
      "longitude": -9.372314,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652908908,
      "ems": null
    },
    {
      "latitude": 38.715042,
      "longitude": -9.372174,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652908911,
      "ems": null
    },
    {
      "latitude": 38.713486,
      "longitude": -9.371995,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652908914,
      "ems": null
    },
    {
      "latitude": 38.7117,
      "longitude": -9.371756,
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
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652908917,
      "ems": null
    },
    {
      "latitude": 38.710236,
      "longitude": -9.371576,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652908920,
      "ems": null
    },
    {
      "latitude": 38.707069,
      "longitude": -9.371277,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652908926,
      "ems": null
    },
    {
      "latitude": 38.703995,
      "longitude": -9.370911,
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
      "heading": 172,
      "squawk": "3225",
      "timestamp": 1652908932,
      "ems": null
    },
    {
      "latitude": 38.702553,
      "longitude": -9.370422,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 158,
      "squawk": "3225",
      "timestamp": 1652908935,
      "ems": null
    },
    {
      "latitude": 38.701298,
      "longitude": -9.369446,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 144,
      "squawk": "3225",
      "timestamp": 1652908938,
      "ems": null
    },
    {
      "latitude": 38.700439,
      "longitude": -9.368293,
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
      "heading": 130,
      "squawk": "3225",
      "timestamp": 1652908941,
      "ems": null
    },
    {
      "latitude": 38.69989,
      "longitude": -9.367099,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "3225",
      "timestamp": 1652908944,
      "ems": null
    },
    {
      "latitude": 38.699478,
      "longitude": -9.365606,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 104,
      "squawk": "3225",
      "timestamp": 1652908948,
      "ems": null
    },
    {
      "latitude": 38.699341,
      "longitude": -9.364471,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 96,
      "squawk": "3225",
      "timestamp": 1652908951,
      "ems": null
    },
    {
      "latitude": 38.699295,
      "longitude": -9.363098,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 91,
      "squawk": "3225",
      "timestamp": 1652908954,
      "ems": null
    },
    {
      "latitude": 38.699295,
      "longitude": -9.361904,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 89,
      "squawk": "3225",
      "timestamp": 1652908957,
      "ems": null
    },
    {
      "latitude": 38.699341,
      "longitude": -9.360718,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 86,
      "squawk": "3225",
      "timestamp": 1652908960,
      "ems": null
    },
    {
      "latitude": 38.699387,
      "longitude": -9.359694,
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
      "heading": 83,
      "squawk": "3225",
      "timestamp": 1652908963,
      "ems": null
    },
    {
      "latitude": 38.699528,
      "longitude": -9.358459,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 82,
      "squawk": "3225",
      "timestamp": 1652908966,
      "ems": null
    },
    {
      "latitude": 38.699661,
      "longitude": -9.357426,
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
      "heading": 80,
      "squawk": "3225",
      "timestamp": 1652908968,
      "ems": null
    },
    {
      "latitude": 38.699799,
      "longitude": -9.356351,
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
      "heading": 80,
      "squawk": "3225",
      "timestamp": 1652908971,
      "ems": null
    },
    {
      "latitude": 38.700039,
      "longitude": -9.355103,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 75,
      "squawk": "3225",
      "timestamp": 1652908975,
      "ems": null
    },
    {
      "latitude": 38.700211,
      "longitude": -9.354201,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 74,
      "squawk": "3225",
      "timestamp": 1652908978,
      "ems": null
    },
    {
      "latitude": 38.700485,
      "longitude": -9.353187,
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
      "heading": 70,
      "squawk": "3225",
      "timestamp": 1652908981,
      "ems": null
    },
    {
      "latitude": 38.70076,
      "longitude": -9.352172,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 69,
      "squawk": "3225",
      "timestamp": 1652908984,
      "ems": null
    },
    {
      "latitude": 38.701035,
      "longitude": -9.351275,
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
      "heading": 67,
      "squawk": "3225",
      "timestamp": 1652908987,
      "ems": null
    },
    {
      "latitude": 38.701401,
      "longitude": -9.350202,
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
      "heading": 63,
      "squawk": "3225",
      "timestamp": 1652908990,
      "ems": null
    },
    {
      "latitude": 38.701809,
      "longitude": -9.349426,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 54,
      "squawk": "3225",
      "timestamp": 1652908993,
      "ems": null
    },
    {
      "latitude": 38.702229,
      "longitude": -9.348816,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 42,
      "squawk": "3225",
      "timestamp": 1652908996,
      "ems": null
    },
    {
      "latitude": 38.702927,
      "longitude": -9.348206,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 25,
      "squawk": "3225",
      "timestamp": 1652908999,
      "ems": null
    },
    {
      "latitude": 38.703625,
      "longitude": -9.3479,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 9,
      "squawk": "3225",
      "timestamp": 1652909002,
      "ems": null
    },
    {
      "latitude": 38.70433,
      "longitude": -9.347932,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 354,
      "squawk": "3225",
      "timestamp": 1652909005,
      "ems": null
    },
    {
      "latitude": 38.705112,
      "longitude": -9.348083,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652909008,
      "ems": null
    },
    {
      "latitude": 38.705765,
      "longitude": -9.348328,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909011,
      "ems": null
    },
    {
      "latitude": 38.706482,
      "longitude": -9.348529,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 346,
      "squawk": "3225",
      "timestamp": 1652909014,
      "ems": null
    },
    {
      "latitude": 38.707214,
      "longitude": -9.348768,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909017,
      "ems": null
    },
    {
      "latitude": 38.707813,
      "longitude": -9.348999,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909020,
      "ems": null
    },
    {
      "latitude": 38.708744,
      "longitude": -9.349304,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909023,
      "ems": null
    },
    {
      "latitude": 38.709457,
      "longitude": -9.349545,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909026,
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
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909029,
      "ems": null
    },
    {
      "latitude": 38.710968,
      "longitude": -9.350142,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909032,
      "ems": null
    },
    {
      "latitude": 38.712467,
      "longitude": -9.350647,
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909038,
      "ems": null
    },
    {
      "latitude": 38.713852,
      "longitude": -9.351156,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909044,
      "ems": null
    },
    {
      "latitude": 38.715309,
      "longitude": -9.351685,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909050,
      "ems": null
    },
    {
      "latitude": 38.716644,
      "longitude": -9.352172,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909056,
      "ems": null
    },
    {
      "latitude": 38.718193,
      "longitude": -9.352722,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909063,
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
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909069,
      "ems": null
    },
    {
      "latitude": 38.721085,
      "longitude": -9.353784,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909075,
      "ems": null
    },
    {
      "latitude": 38.722198,
      "longitude": -9.354187,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909080,
      "ems": null
    },
    {
      "latitude": 38.723175,
      "longitude": -9.354553,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "squawk": "3225",
      "timestamp": 1652909086,
      "ems": null
    },
    {
      "latitude": 38.724106,
      "longitude": -9.354858,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909093,
      "ems": null
    },
    {
      "latitude": 38.725571,
      "longitude": -9.355395,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909099,
      "ems": null
    },
    {
      "latitude": 38.726852,
      "longitude": -9.355873,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909105,
      "ems": null
    },
    {
      "latitude": 38.728481,
      "longitude": -9.356506,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909111,
      "ems": null
    },
    {
      "latitude": 38.729832,
      "longitude": -9.356934,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652909117,
      "ems": null
    },
    {
      "latitude": 38.731064,
      "longitude": -9.357367,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "squawk": "3225",
      "timestamp": 1652909123,
      "ems": null
    },
    {
      "latitude": 38.731613,
      "longitude": -9.357486,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652909126,
      "ems": null
    },
    {
      "latitude": 38.732071,
      "longitude": -9.357545,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 351,
      "squawk": "3225",
      "timestamp": 1652909128,
      "ems": null
    },
    {
      "latitude": 38.732346,
      "longitude": -9.357605,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 353,
      "squawk": "3225",
      "timestamp": 1652909130,
      "ems": null
    },
    {
      "latitude": 38.732666,
      "longitude": -9.357665,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "3225",
      "timestamp": 1652909131,
      "ems": null
    },
    {
      "latitude": 38.732998,
      "longitude": -9.357727,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909133,
      "ems": null
    },
    {
      "latitude": 38.733444,
      "longitude": -9.357843,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909135,
      "ems": null
    },
    {
      "latitude": 38.734268,
      "longitude": -9.358023,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909139,
      "ems": null
    },
    {
      "latitude": 38.734634,
      "longitude": -9.358083,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 352,
      "squawk": "3225",
      "timestamp": 1652909140,
      "ems": null
    },
    {
      "latitude": 38.734863,
      "longitude": -9.358142,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 351,
      "squawk": "3225",
      "timestamp": 1652909143,
      "ems": null
    },
    {
      "latitude": 38.735733,
      "longitude": -9.358321,
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
      "heading": 351,
      "squawk": "3225",
      "timestamp": 1652909146,
      "ems": null
    },
    {
      "latitude": 38.736923,
      "longitude": -9.35862,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 348,
      "squawk": "3225",
      "timestamp": 1652909152,
      "ems": null
    },
    {
      "latitude": 38.738068,
      "longitude": -9.358918,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 348,
      "squawk": "3225",
      "timestamp": 1652909158,
      "ems": null
    },
    {
      "latitude": 38.739624,
      "longitude": -9.359277,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652909164,
      "ems": null
    },
    {
      "latitude": 38.741096,
      "longitude": -9.359741,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909170,
      "ems": null
    },
    {
      "latitude": 38.74173,
      "longitude": -9.359993,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909173,
      "ems": null
    },
    {
      "latitude": 38.74231,
      "longitude": -9.360229,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909176,
      "ems": null
    },
    {
      "latitude": 38.743099,
      "longitude": -9.360474,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909179,
      "ems": null
    },
    {
      "latitude": 38.74366,
      "longitude": -9.360718,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652909183,
      "ems": null
    },
    {
      "latitude": 38.744476,
      "longitude": -9.361068,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652909185,
      "ems": null
    },
    {
      "latitude": 38.745102,
      "longitude": -9.361328,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652909188,
      "ems": null
    },
    {
      "latitude": 38.745754,
      "longitude": -9.361633,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652909191,
      "ems": null
    },
    {
      "latitude": 38.74649,
      "longitude": -9.362023,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 339,
      "squawk": "3225",
      "timestamp": 1652909194,
      "ems": null
    },
    {
      "latitude": 38.746822,
      "longitude": -9.362244,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 327,
      "squawk": "3225",
      "timestamp": 1652909198,
      "ems": null
    },
    {
      "latitude": 38.747635,
      "longitude": -9.363038,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 315,
      "squawk": "3225",
      "timestamp": 1652909200,
      "ems": null
    },
    {
      "latitude": 38.748184,
      "longitude": -9.364591,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 282,
      "squawk": "3225",
      "timestamp": 1652909205,
      "ems": null
    },
    {
      "latitude": 38.748184,
      "longitude": -9.365785,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 265,
      "squawk": "3225",
      "timestamp": 1652909208,
      "ems": null
    },
    {
      "latitude": 38.747955,
      "longitude": -9.367158,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 252,
      "squawk": "3225",
      "timestamp": 1652909211,
      "ems": null
    },
    {
      "latitude": 38.747524,
      "longitude": -9.368652,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 247,
      "squawk": "3225",
      "timestamp": 1652909214,
      "ems": null
    },
    {
      "latitude": 38.747009,
      "longitude": -9.370117,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 247,
      "squawk": "3225",
      "timestamp": 1652909217,
      "ems": null
    },
    {
      "latitude": 38.746498,
      "longitude": -9.371582,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 242,
      "squawk": "3225",
      "timestamp": 1652909220,
      "ems": null
    },
    {
      "latitude": 38.745846,
      "longitude": -9.372864,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 230,
      "squawk": "3225",
      "timestamp": 1652909223,
      "ems": null
    },
    {
      "latitude": 38.745056,
      "longitude": -9.373779,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 219,
      "squawk": "3225",
      "timestamp": 1652909225,
      "ems": null
    },
    {
      "latitude": 38.743332,
      "longitude": -9.37498,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 202,
      "squawk": "3225",
      "timestamp": 1652909229,
      "ems": null
    },
    {
      "latitude": 38.741913,
      "longitude": -9.375398,
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
      "heading": 189,
      "squawk": "3225",
      "timestamp": 1652909232,
      "ems": null
    },
    {
      "latitude": 38.740265,
      "longitude": -9.375458,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 178,
      "squawk": "3225",
      "timestamp": 1652909235,
      "ems": null
    },
    {
      "latitude": 38.738956,
      "longitude": -9.375305,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652909238,
      "ems": null
    },
    {
      "latitude": 38.737335,
      "longitude": -9.375099,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 173,
      "squawk": "3225",
      "timestamp": 1652909241,
      "ems": null
    },
    {
      "latitude": 38.735779,
      "longitude": -9.374861,
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
      "heading": 172,
      "squawk": "3225",
      "timestamp": 1652909244,
      "ems": null
    },
    {
      "latitude": 38.734177,
      "longitude": -9.374681,
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
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652909247,
      "ems": null
    },
    {
      "latitude": 38.732533,
      "longitude": -9.374451,
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
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652909250,
      "ems": null
    },
    {
      "latitude": 38.731018,
      "longitude": -9.374264,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909253,
      "ems": null
    },
    {
      "latitude": 38.729321,
      "longitude": -9.374084,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909256,
      "ems": null
    },
    {
      "latitude": 38.727585,
      "longitude": -9.373905,
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
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909259,
      "ems": null
    },
    {
      "latitude": 38.72612,
      "longitude": -9.373786,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909262,
      "ems": null
    },
    {
      "latitude": 38.723175,
      "longitude": -9.373474,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909268,
      "ems": null
    },
    {
      "latitude": 38.719986,
      "longitude": -9.373189,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909274,
      "ems": null
    },
    {
      "latitude": 38.717102,
      "longitude": -9.37283,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652909280,
      "ems": null
    },
    {
      "latitude": 38.714378,
      "longitude": -9.372498,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652909286,
      "ems": null
    },
    {
      "latitude": 38.711819,
      "longitude": -9.372253,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909292,
      "ems": null
    },
    {
      "latitude": 38.709274,
      "longitude": -9.371995,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652909298,
      "ems": null
    },
    {
      "latitude": 38.706509,
      "longitude": -9.371521,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 170,
      "squawk": "3225",
      "timestamp": 1652909304,
      "ems": null
    },
    {
      "latitude": 38.705441,
      "longitude": -9.371155,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 158,
      "squawk": "3225",
      "timestamp": 1652909307,
      "ems": null
    },
    {
      "latitude": 38.704323,
      "longitude": -9.370361,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "3225",
      "timestamp": 1652909310,
      "ems": null
    },
    {
      "latitude": 38.703297,
      "longitude": -9.369202,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 132,
      "squawk": "3225",
      "timestamp": 1652909314,
      "ems": null
    },
    {
      "latitude": 38.702728,
      "longitude": -9.368054,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 118,
      "squawk": "3225",
      "timestamp": 1652909317,
      "ems": null
    },
    {
      "latitude": 38.70232,
      "longitude": -9.366821,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 107,
      "squawk": "3225",
      "timestamp": 1652909320,
      "ems": null
    },
    {
      "latitude": 38.702133,
      "longitude": -9.365665,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 100,
      "squawk": "3225",
      "timestamp": 1652909322,
      "ems": null
    },
    {
      "latitude": 38.702042,
      "longitude": -9.364411,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 93,
      "squawk": "3225",
      "timestamp": 1652909326,
      "ems": null
    },
    {
      "latitude": 38.702042,
      "longitude": -9.363277,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 87,
      "squawk": "3225",
      "timestamp": 1652909329,
      "ems": null
    },
    {
      "latitude": 38.702087,
      "longitude": -9.362122,
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
      "heading": 86,
      "squawk": "3225",
      "timestamp": 1652909331,
      "ems": null
    },
    {
      "latitude": 38.702179,
      "longitude": -9.360901,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 85,
      "squawk": "3225",
      "timestamp": 1652909335,
      "ems": null
    },
    {
      "latitude": 38.702225,
      "longitude": -9.359755,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 85,
      "squawk": "3225",
      "timestamp": 1652909338,
      "ems": null
    },
    {
      "latitude": 38.70232,
      "longitude": -9.358765,
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
      "heading": 84,
      "squawk": "3225",
      "timestamp": 1652909341,
      "ems": null
    },
    {
      "latitude": 38.702408,
      "longitude": -9.357545,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 83,
      "squawk": "3225",
      "timestamp": 1652909344,
      "ems": null
    },
    {
      "latitude": 38.702545,
      "longitude": -9.35659,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 81,
      "squawk": "3225",
      "timestamp": 1652909347,
      "ems": null
    },
    {
      "latitude": 38.702694,
      "longitude": -9.355469,
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
      "heading": 80,
      "squawk": "3225",
      "timestamp": 1652909350,
      "ems": null
    },
    {
      "latitude": 38.702831,
      "longitude": -9.354431,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 79,
      "squawk": "3225",
      "timestamp": 1652909353,
      "ems": null
    },
    {
      "latitude": 38.703018,
      "longitude": -9.353394,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 77,
      "squawk": "3225",
      "timestamp": 1652909356,
      "ems": null
    },
    {
      "latitude": 38.703186,
      "longitude": -9.35253,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 76,
      "squawk": "3225",
      "timestamp": 1652909359,
      "ems": null
    },
    {
      "latitude": 38.703392,
      "longitude": -9.35144,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 70,
      "squawk": "3225",
      "timestamp": 1652909362,
      "ems": null
    },
    {
      "latitude": 38.703735,
      "longitude": -9.350559,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 59,
      "squawk": "3225",
      "timestamp": 1652909365,
      "ems": null
    },
    {
      "latitude": 38.704193,
      "longitude": -9.349843,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 50,
      "squawk": "3225",
      "timestamp": 1652909368,
      "ems": null
    },
    {
      "latitude": 38.704693,
      "longitude": -9.349365,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 31,
      "squawk": "3225",
      "timestamp": 1652909371,
      "ems": null
    },
    {
      "latitude": 38.705345,
      "longitude": -9.348999,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 17,
      "squawk": "3225",
      "timestamp": 1652909374,
      "ems": null
    },
    {
      "latitude": 38.706024,
      "longitude": -9.348887,
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
      "heading": 5,
      "squawk": "3225",
      "timestamp": 1652909377,
      "ems": null
    },
    {
      "latitude": 38.706696,
      "longitude": -9.348816,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 3,
      "squawk": "3225",
      "timestamp": 1652909380,
      "ems": null
    },
    {
      "latitude": 38.707348,
      "longitude": -9.348816,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 358,
      "squawk": "3225",
      "timestamp": 1652909383,
      "ems": null
    },
    {
      "latitude": 38.707993,
      "longitude": -9.348948,
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
      "heading": 348,
      "squawk": "3225",
      "timestamp": 1652909386,
      "ems": null
    },
    {
      "latitude": 38.708725,
      "longitude": -9.349186,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652909389,
      "ems": null
    },
    {
      "latitude": 38.709351,
      "longitude": -9.349426,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909392,
      "ems": null
    },
    {
      "latitude": 38.710049,
      "longitude": -9.349731,
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909395,
      "ems": null
    },
    {
      "latitude": 38.710747,
      "longitude": -9.349976,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652909398,
      "ems": null
    },
    {
      "latitude": 38.711517,
      "longitude": -9.350261,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909401,
      "ems": null
    },
    {
      "latitude": 38.712204,
      "longitude": -9.3505,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909404,
      "ems": null
    },
    {
      "latitude": 38.712936,
      "longitude": -9.350858,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "3225",
      "timestamp": 1652909407,
      "ems": null
    },
    {
      "latitude": 38.713806,
      "longitude": -9.351156,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909410,
      "ems": null
    },
    {
      "latitude": 38.714447,
      "longitude": -9.351396,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909413,
      "ems": null
    },
    {
      "latitude": 38.715912,
      "longitude": -9.351873,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909419,
      "ems": null
    },
    {
      "latitude": 38.717545,
      "longitude": -9.352478,
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909425,
      "ems": null
    },
    {
      "latitude": 38.718933,
      "longitude": -9.353007,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909431,
      "ems": null
    },
    {
      "latitude": 38.720383,
      "longitude": -9.353516,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909437,
      "ems": null
    },
    {
      "latitude": 38.721592,
      "longitude": -9.353943,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909443,
      "ems": null
    },
    {
      "latitude": 38.722549,
      "longitude": -9.354261,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909449,
      "ems": null
    },
    {
      "latitude": 38.723602,
      "longitude": -9.354679,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "squawk": "3225",
      "timestamp": 1652909455,
      "ems": null
    },
    {
      "latitude": 38.724976,
      "longitude": -9.355217,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909462,
      "ems": null
    },
    {
      "latitude": 38.726395,
      "longitude": -9.355695,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909467,
      "ems": null
    },
    {
      "latitude": 38.727676,
      "longitude": -9.356172,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909473,
      "ems": null
    },
    {
      "latitude": 38.729004,
      "longitude": -9.356709,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "squawk": "3225",
      "timestamp": 1652909480,
      "ems": null
    },
    {
      "latitude": 38.730286,
      "longitude": -9.357127,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652909486,
      "ems": null
    },
    {
      "latitude": 38.731567,
      "longitude": -9.357486,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 348,
      "squawk": "3225",
      "timestamp": 1652909492,
      "ems": null
    },
    {
      "latitude": 38.732437,
      "longitude": -9.357665,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909496,
      "ems": null
    },
    {
      "latitude": 38.733555,
      "longitude": -9.357971,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909500,
      "ems": null
    },
    {
      "latitude": 38.73436,
      "longitude": -9.358142,
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
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652909504,
      "ems": null
    },
    {
      "latitude": 38.735092,
      "longitude": -9.358321,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909507,
      "ems": null
    },
    {
      "latitude": 38.735836,
      "longitude": -9.358459,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652909510,
      "ems": null
    },
    {
      "latitude": 38.736351,
      "longitude": -9.358582,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652909512,
      "ems": null
    },
    {
      "latitude": 38.737701,
      "longitude": -9.358887,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909518,
      "ems": null
    },
    {
      "latitude": 38.739189,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "3225",
      "timestamp": 1652909524,
      "ems": null
    },
    {
      "latitude": 38.739933,
      "longitude": -9.359497,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909528,
      "ems": null
    },
    {
      "latitude": 38.740772,
      "longitude": -9.359802,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909531,
      "ems": null
    },
    {
      "latitude": 38.741638,
      "longitude": -9.360172,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909534,
      "ems": null
    },
    {
      "latitude": 38.742264,
      "longitude": -9.360413,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909537,
      "ems": null
    },
    {
      "latitude": 38.744064,
      "longitude": -9.360888,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909543,
      "ems": null
    },
    {
      "latitude": 38.745621,
      "longitude": -9.361247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909549,
      "ems": null
    },
    {
      "latitude": 38.746307,
      "longitude": -9.361665,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 331,
      "squawk": "3225",
      "timestamp": 1652909552,
      "ems": null
    },
    {
      "latitude": 38.746822,
      "longitude": -9.362244,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "3225",
      "timestamp": 1652909554,
      "ems": null
    },
    {
      "latitude": 38.74736,
      "longitude": -9.363755,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 283,
      "squawk": "3225",
      "timestamp": 1652909559,
      "ems": null
    },
    {
      "latitude": 38.747406,
      "longitude": -9.36483,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "3225",
      "timestamp": 1652909562,
      "ems": null
    },
    {
      "latitude": 38.747131,
      "longitude": -9.366442,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 256,
      "squawk": "3225",
      "timestamp": 1652909565,
      "ems": null
    },
    {
      "latitude": 38.746857,
      "longitude": -9.367696,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 255,
      "squawk": "3225",
      "timestamp": 1652909568,
      "ems": null
    },
    {
      "latitude": 38.746536,
      "longitude": -9.369428,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 255,
      "squawk": "3225",
      "timestamp": 1652909571,
      "ems": null
    },
    {
      "latitude": 38.74622,
      "longitude": -9.37085,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "3225",
      "timestamp": 1652909574,
      "ems": null
    },
    {
      "latitude": 38.745575,
      "longitude": -9.372473,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 239,
      "squawk": "3225",
      "timestamp": 1652909577,
      "ems": null
    },
    {
      "latitude": 38.744728,
      "longitude": -9.373779,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 229,
      "squawk": "3225",
      "timestamp": 1652909580,
      "ems": null
    },
    {
      "latitude": 38.743565,
      "longitude": -9.374878,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 217,
      "squawk": "3225",
      "timestamp": 1652909583,
      "ems": null
    },
    {
      "latitude": 38.742077,
      "longitude": -9.375793,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 203,
      "squawk": "3225",
      "timestamp": 1652909586,
      "ems": null
    },
    {
      "latitude": 38.740677,
      "longitude": -9.376234,
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
      "heading": 190,
      "squawk": "3225",
      "timestamp": 1652909589,
      "ems": null
    },
    {
      "latitude": 38.738956,
      "longitude": -9.376404,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 180,
      "squawk": "3225",
      "timestamp": 1652909592,
      "ems": null
    },
    {
      "latitude": 38.737606,
      "longitude": -9.376282,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 173,
      "squawk": "3225",
      "timestamp": 1652909595,
      "ems": null
    },
    {
      "latitude": 38.735825,
      "longitude": -9.375995,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 172,
      "squawk": "3225",
      "timestamp": 1652909598,
      "ems": null
    },
    {
      "latitude": 38.734406,
      "longitude": -9.375756,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 172,
      "squawk": "3225",
      "timestamp": 1652909601,
      "ems": null
    },
    {
      "latitude": 38.732895,
      "longitude": -9.375518,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 173,
      "squawk": "3225",
      "timestamp": 1652909604,
      "ems": null
    },
    {
      "latitude": 38.731415,
      "longitude": -9.375305,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 173,
      "squawk": "3225",
      "timestamp": 1652909607,
      "ems": null
    },
    {
      "latitude": 38.729874,
      "longitude": -9.37504,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 172,
      "squawk": "3225",
      "timestamp": 1652909610,
      "ems": null
    },
    {
      "latitude": 38.728363,
      "longitude": -9.374801,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "squawk": "3225",
      "timestamp": 1652909613,
      "ems": null
    },
    {
      "latitude": 38.726852,
      "longitude": -9.374621,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909616,
      "ems": null
    },
    {
      "latitude": 38.725269,
      "longitude": -9.374451,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 176,
      "squawk": "3225",
      "timestamp": 1652909619,
      "ems": null
    },
    {
      "latitude": 38.723782,
      "longitude": -9.374329,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 175,
      "squawk": "3225",
      "timestamp": 1652909622,
      "ems": null
    },
    {
      "latitude": 38.720707,
      "longitude": -9.373962,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652909628,
      "ems": null
    },
    {
      "latitude": 38.71788,
      "longitude": -9.373726,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 177,
      "squawk": "3225",
      "timestamp": 1652909634,
      "ems": null
    },
    {
      "latitude": 38.715076,
      "longitude": -9.373474,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 174,
      "squawk": "3225",
      "timestamp": 1652909640,
      "ems": null
    },
    {
      "latitude": 38.712387,
      "longitude": -9.373248,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 177,
      "squawk": "3225",
      "timestamp": 1652909646,
      "ems": null
    },
    {
      "latitude": 38.708324,
      "longitude": -9.372742,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 166,
      "squawk": "3225",
      "timestamp": 1652909655,
      "ems": null
    },
    {
      "latitude": 38.707161,
      "longitude": -9.372131,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 153,
      "squawk": "3225",
      "timestamp": 1652909658,
      "ems": null
    },
    {
      "latitude": 38.70607,
      "longitude": -9.371219,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 142,
      "squawk": "3225",
      "timestamp": 1652909661,
      "ems": null
    },
    {
      "latitude": 38.7052,
      "longitude": -9.369965,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "3225",
      "timestamp": 1652909664,
      "ems": null
    },
    {
      "latitude": 38.704697,
      "longitude": -9.36883,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 115,
      "squawk": "3225",
      "timestamp": 1652909667,
      "ems": null
    },
    {
      "latitude": 38.704414,
      "longitude": -9.367554,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "3225",
      "timestamp": 1652909670,
      "ems": null
    },
    {
      "latitude": 38.704277,
      "longitude": -9.366333,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 97,
      "squawk": "3225",
      "timestamp": 1652909673,
      "ems": null
    },
    {
      "latitude": 38.704193,
      "longitude": -9.364949,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 94,
      "squawk": "3225",
      "timestamp": 1652909677,
      "ems": null
    },
    {
      "latitude": 38.704136,
      "longitude": -9.363831,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 93,
      "squawk": "3225",
      "timestamp": 1652909680,
      "ems": null
    },
    {
      "latitude": 38.704102,
      "longitude": -9.36268,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 91,
      "squawk": "3225",
      "timestamp": 1652909683,
      "ems": null
    },
    {
      "latitude": 38.704044,
      "longitude": -9.36145,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 90,
      "squawk": "3225",
      "timestamp": 1652909686,
      "ems": null
    },
    {
      "latitude": 38.704056,
      "longitude": -9.360172,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 89,
      "squawk": "3225",
      "timestamp": 1652909689,
      "ems": null
    },
    {
      "latitude": 38.704102,
      "longitude": -9.359158,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 86,
      "squawk": "3225",
      "timestamp": 1652909692,
      "ems": null
    },
    {
      "latitude": 38.704193,
      "longitude": -9.358083,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 85,
      "squawk": "3225",
      "timestamp": 1652909695,
      "ems": null
    },
    {
      "latitude": 38.704239,
      "longitude": -9.357008,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 84,
      "squawk": "3225",
      "timestamp": 1652909698,
      "ems": null
    },
    {
      "latitude": 38.704376,
      "longitude": -9.355873,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 81,
      "squawk": "3225",
      "timestamp": 1652909701,
      "ems": null
    },
    {
      "latitude": 38.704605,
      "longitude": -9.354798,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 72,
      "squawk": "3225",
      "timestamp": 1652909704,
      "ems": null
    },
    {
      "latitude": 38.70488,
      "longitude": -9.353943,
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
      "heading": 64,
      "squawk": "3225",
      "timestamp": 1652909707,
      "ems": null
    },
    {
      "latitude": 38.705208,
      "longitude": -9.353088,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 65,
      "squawk": "3225",
      "timestamp": 1652909710,
      "ems": null
    },
    {
      "latitude": 38.705532,
      "longitude": -9.352295,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 58,
      "squawk": "3225",
      "timestamp": 1652909713,
      "ems": null
    },
    {
      "latitude": 38.705978,
      "longitude": -9.351515,
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
      "heading": 48,
      "squawk": "3225",
      "timestamp": 1652909716,
      "ems": null
    },
    {
      "latitude": 38.706604,
      "longitude": -9.350769,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "3225",
      "timestamp": 1652909719,
      "ems": null
    },
    {
      "latitude": 38.707069,
      "longitude": -9.350281,
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
      "heading": 35,
      "squawk": "3225",
      "timestamp": 1652909722,
      "ems": null
    },
    {
      "latitude": 38.707767,
      "longitude": -9.349792,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 22,
      "squawk": "3225",
      "timestamp": 1652909725,
      "ems": null
    },
    {
      "latitude": 38.708359,
      "longitude": -9.349724,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 5,
      "squawk": "3225",
      "timestamp": 1652909728,
      "ems": null
    },
    {
      "latitude": 38.708954,
      "longitude": -9.349783,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 351,
      "squawk": "3225",
      "timestamp": 1652909731,
      "ems": null
    },
    {
      "latitude": 38.709732,
      "longitude": -9.349902,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 352,
      "squawk": "3225",
      "timestamp": 1652909734,
      "ems": null
    },
    {
      "latitude": 38.710419,
      "longitude": -9.350037,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 353,
      "squawk": "3225",
      "timestamp": 1652909737,
      "ems": null
    },
    {
      "latitude": 38.711117,
      "longitude": -9.35022,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652909740,
      "ems": null
    },
    {
      "latitude": 38.711929,
      "longitude": -9.35044,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909743,
      "ems": null
    },
    {
      "latitude": 38.712708,
      "longitude": -9.350739,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909746,
      "ems": null
    },
    {
      "latitude": 38.713398,
      "longitude": -9.351013,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909749,
      "ems": null
    },
    {
      "latitude": 38.714127,
      "longitude": -9.351275,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909752,
      "ems": null
    },
    {
      "latitude": 38.714703,
      "longitude": -9.35144,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 346,
      "squawk": "3225",
      "timestamp": 1652909755,
      "ems": null
    },
    {
      "latitude": 38.715408,
      "longitude": -9.351694,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909758,
      "ems": null
    },
    {
      "latitude": 38.716053,
      "longitude": -9.35199,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909762,
      "ems": null
    },
    {
      "latitude": 38.716827,
      "longitude": -9.352231,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909764,
      "ems": null
    },
    {
      "latitude": 38.718384,
      "longitude": -9.352769,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909770,
      "ems": null
    },
    {
      "latitude": 38.719265,
      "longitude": -9.353088,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909777,
      "ems": null
    },
    {
      "latitude": 38.721222,
      "longitude": -9.353821,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909782,
      "ems": null
    },
    {
      "latitude": 38.722412,
      "longitude": -9.354261,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909788,
      "ems": null
    },
    {
      "latitude": 38.723686,
      "longitude": -9.354736,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909795,
      "ems": null
    },
    {
      "latitude": 38.725037,
      "longitude": -9.355225,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909801,
      "ems": null
    },
    {
      "latitude": 38.726532,
      "longitude": -9.355754,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909808,
      "ems": null
    },
    {
      "latitude": 38.727924,
      "longitude": -9.356262,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909814,
      "ems": null
    },
    {
      "latitude": 38.729095,
      "longitude": -9.356649,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652909820,
      "ems": null
    },
    {
      "latitude": 38.729782,
      "longitude": -9.356829,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652909823,
      "ems": null
    },
    {
      "latitude": 38.730206,
      "longitude": -9.356934,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 352,
      "squawk": "3225",
      "timestamp": 1652909826,
      "ems": null
    },
    {
      "latitude": 38.731136,
      "longitude": -9.357056,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 353,
      "squawk": "3225",
      "timestamp": 1652909829,
      "ems": null
    },
    {
      "latitude": 38.731834,
      "longitude": -9.357178,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 352,
      "squawk": "3225",
      "timestamp": 1652909832,
      "ems": null
    },
    {
      "latitude": 38.732483,
      "longitude": -9.357246,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 353,
      "squawk": "3225",
      "timestamp": 1652909835,
      "ems": null
    },
    {
      "latitude": 38.733582,
      "longitude": -9.357486,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652909841,
      "ems": null
    },
    {
      "latitude": 38.734177,
      "longitude": -9.357605,
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
      "heading": 349,
      "squawk": "3225",
      "timestamp": 1652909844,
      "ems": null
    },
    {
      "latitude": 38.734768,
      "longitude": -9.357727,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 350,
      "squawk": "3225",
      "timestamp": 1652909847,
      "ems": null
    },
    {
      "latitude": 38.735977,
      "longitude": -9.358032,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652909853,
      "ems": null
    },
    {
      "latitude": 38.736557,
      "longitude": -9.358262,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909856,
      "ems": null
    },
    {
      "latitude": 38.737152,
      "longitude": -9.3585,
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
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909859,
      "ems": null
    },
    {
      "latitude": 38.737839,
      "longitude": -9.358765,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652909862,
      "ems": null
    },
    {
      "latitude": 38.73835,
      "longitude": -9.358948,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652909865,
      "ems": null
    },
    {
      "latitude": 38.73912,
      "longitude": -9.359217,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909868,
      "ems": null
    },
    {
      "latitude": 38.740494,
      "longitude": -9.35968,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909874,
      "ems": null
    },
    {
      "latitude": 38.74118,
      "longitude": -9.359934,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652909877,
      "ems": null
    },
    {
      "latitude": 38.741638,
      "longitude": -9.360113,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652909880,
      "ems": null
    },
    {
      "latitude": 38.74324,
      "longitude": -9.36071,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909886,
      "ems": null
    },
    {
      "latitude": 38.744568,
      "longitude": -9.361128,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652909892,
      "ems": null
    },
    {
      "latitude": 38.745335,
      "longitude": -9.36145,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "3225",
      "timestamp": 1652909895,
      "ems": null
    },
    {
      "latitude": 38.745987,
      "longitude": -9.361785,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 337,
      "squawk": "3225",
      "timestamp": 1652909898,
      "ems": null
    },
    {
      "latitude": 38.746311,
      "longitude": -9.361938,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 339,
      "squawk": "3225",
      "timestamp": 1652909900,
      "ems": null
    },
    {
      "latitude": 38.747429,
      "longitude": -9.361816,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "3225",
      "timestamp": 1652909904,
      "ems": null
    },
    {
      "latitude": 38.748455,
      "longitude": -9.361084,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 40,
      "squawk": "3225",
      "timestamp": 1652909909,
      "ems": null
    },
    {
      "latitude": 38.748966,
      "longitude": -9.360291,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 53,
      "squawk": "3225",
      "timestamp": 1652909912,
      "ems": null
    },
    {
      "latitude": 38.749477,
      "longitude": -9.359375,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 58,
      "squawk": "3225",
      "timestamp": 1652909915,
      "ems": null
    },
    {
      "latitude": 38.749851,
      "longitude": -9.358398,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 65,
      "squawk": "3225",
      "timestamp": 1652909918,
      "ems": null
    },
    {
      "latitude": 38.750221,
      "longitude": -9.3573,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 65,
      "squawk": "3225",
      "timestamp": 1652909921,
      "ems": null
    },
    {
      "latitude": 38.750641,
      "longitude": -9.356201,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 66,
      "squawk": "3225",
      "timestamp": 1652909924,
      "ems": null
    },
    {
      "latitude": 38.750977,
      "longitude": -9.355097,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 70,
      "squawk": "3225",
      "timestamp": 1652909927,
      "ems": null
    },
    {
      "latitude": 38.751251,
      "longitude": -9.353724,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 78,
      "squawk": "3225",
      "timestamp": 1652909930,
      "ems": null
    },
    {
      "latitude": 38.751293,
      "longitude": -9.352295,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 91,
      "squawk": "3225",
      "timestamp": 1652909933,
      "ems": null
    },
    {
      "latitude": 38.751114,
      "longitude": -9.350799,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 100,
      "squawk": "3225",
      "timestamp": 1652909936,
      "ems": null
    },
    {
      "latitude": 38.750828,
      "longitude": -9.349304,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 107,
      "squawk": "3225",
      "timestamp": 1652909939,
      "ems": null
    },
    {
      "latitude": 38.750317,
      "longitude": -9.347717,
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
      "heading": 115,
      "squawk": "3225",
      "timestamp": 1652909942,
      "ems": null
    },
    {
      "latitude": 38.749466,
      "longitude": -9.345902,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 125,
      "squawk": "3225",
      "timestamp": 1652909945,
      "ems": null
    },
    {
      "latitude": 38.748592,
      "longitude": -9.344788,
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
      "heading": 142,
      "squawk": "3225",
      "timestamp": 1652909948,
      "ems": null
    },
    {
      "latitude": 38.747177,
      "longitude": -9.343872,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 156,
      "squawk": "3225",
      "timestamp": 1652909951,
      "ems": null
    },
    {
      "latitude": 38.745575,
      "longitude": -9.343096,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 161,
      "squawk": "3225",
      "timestamp": 1652909954,
      "ems": null
    },
    {
      "latitude": 38.743973,
      "longitude": -9.342439,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "3225",
      "timestamp": 1652909957,
      "ems": null
    },
    {
      "latitude": 38.742554,
      "longitude": -9.341902,
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
      "heading": 163,
      "squawk": "3225",
      "timestamp": 1652909960,
      "ems": null
    },
    {
      "latitude": 38.741005,
      "longitude": -9.341248,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "3225",
      "timestamp": 1652909963,
      "ems": null
    },
    {
      "latitude": 38.739487,
      "longitude": -9.340708,
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
      "heading": 162,
      "squawk": "3225",
      "timestamp": 1652909967,
      "ems": null
    },
    {
      "latitude": 38.73793,
      "longitude": -9.340051,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 161,
      "squawk": "3225",
      "timestamp": 1652909970,
      "ems": null
    },
    {
      "latitude": 38.736603,
      "longitude": -9.339454,
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
      "heading": 162,
      "squawk": "3225",
      "timestamp": 1652909973,
      "ems": null
    },
    {
      "latitude": 38.734955,
      "longitude": -9.338857,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 162,
      "squawk": "3225",
      "timestamp": 1652909976,
      "ems": null
    },
    {
      "latitude": 38.733463,
      "longitude": -9.338196,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 161,
      "squawk": "3225",
      "timestamp": 1652909979,
      "ems": null
    },
    {
      "latitude": 38.732208,
      "longitude": -9.337708,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 161,
      "squawk": "3225",
      "timestamp": 1652909982,
      "ems": null
    },
    {
      "latitude": 38.729095,
      "longitude": -9.336349,
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
      "heading": 161,
      "squawk": "3225",
      "timestamp": 1652909988,
      "ems": null
    },
    {
      "latitude": 38.726528,
      "longitude": -9.335266,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 161,
      "squawk": "3225",
      "timestamp": 1652909994,
      "ems": null
    },
    {
      "latitude": 38.723595,
      "longitude": -9.334045,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 162,
      "squawk": "3225",
      "timestamp": 1652910000,
      "ems": null
    },
    {
      "latitude": 38.720764,
      "longitude": -9.332886,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 161,
      "squawk": "3225",
      "timestamp": 1652910006,
      "ems": null
    },
    {
      "latitude": 38.718018,
      "longitude": -9.331751,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 162,
      "squawk": "3225",
      "timestamp": 1652910012,
      "ems": null
    },
    {
      "latitude": 38.715271,
      "longitude": -9.330736,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "3225",
      "timestamp": 1652910018,
      "ems": null
    },
    {
      "latitude": 38.713863,
      "longitude": -9.330322,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 166,
      "squawk": "3225",
      "timestamp": 1652910021,
      "ems": null
    },
    {
      "latitude": 38.712467,
      "longitude": -9.329895,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 166,
      "squawk": "3225",
      "timestamp": 1652910025,
      "ems": null
    },
    {
      "latitude": 38.709503,
      "longitude": -9.328885,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 166,
      "squawk": "3225",
      "timestamp": 1652910031,
      "ems": null
    },
    {
      "latitude": 38.708221,
      "longitude": -9.328527,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "squawk": "3225",
      "timestamp": 1652910034,
      "ems": null
    },
    {
      "latitude": 38.706848,
      "longitude": -9.328348,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 177,
      "squawk": "3225",
      "timestamp": 1652910037,
      "ems": null
    },
    {
      "latitude": 38.705486,
      "longitude": -9.328552,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 188,
      "squawk": "3225",
      "timestamp": 1652910040,
      "ems": null
    },
    {
      "latitude": 38.704422,
      "longitude": -9.328945,
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
      "heading": 200,
      "squawk": "3225",
      "timestamp": 1652910042,
      "ems": null
    },
    {
      "latitude": 38.70314,
      "longitude": -9.329841,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 212,
      "squawk": "3225",
      "timestamp": 1652910046,
      "ems": null
    },
    {
      "latitude": 38.702225,
      "longitude": -9.330855,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 222,
      "squawk": "3225",
      "timestamp": 1652910049,
      "ems": null
    },
    {
      "latitude": 38.701481,
      "longitude": -9.331909,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 231,
      "squawk": "3225",
      "timestamp": 1652910051,
      "ems": null
    },
    {
      "latitude": 38.700924,
      "longitude": -9.332947,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 235,
      "squawk": "3225",
      "timestamp": 1652910055,
      "ems": null
    },
    {
      "latitude": 38.700302,
      "longitude": -9.33414,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 235,
      "squawk": "3225",
      "timestamp": 1652910057,
      "ems": null
    },
    {
      "latitude": 38.699753,
      "longitude": -9.335394,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 243,
      "squawk": "3225",
      "timestamp": 1652910061,
      "ems": null
    },
    {
      "latitude": 38.699432,
      "longitude": -9.336528,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 255,
      "squawk": "3225",
      "timestamp": 1652910063,
      "ems": null
    },
    {
      "latitude": 38.699341,
      "longitude": -9.337769,
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
      "heading": 264,
      "squawk": "3225",
      "timestamp": 1652910067,
      "ems": null
    },
    {
      "latitude": 38.699295,
      "longitude": -9.338806,
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
      "heading": 267,
      "squawk": "3225",
      "timestamp": 1652910070,
      "ems": null
    },
    {
      "latitude": 38.699249,
      "longitude": -9.340111,
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
      "heading": 268,
      "squawk": "3225",
      "timestamp": 1652910073,
      "ems": null
    },
    {
      "latitude": 38.699203,
      "longitude": -9.341065,
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
      "heading": 270,
      "squawk": "3225",
      "timestamp": 1652910076,
      "ems": null
    },
    {
      "latitude": 38.699249,
      "longitude": -9.342081,
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
      "heading": 271,
      "squawk": "3225",
      "timestamp": 1652910079,
      "ems": null
    },
    {
      "latitude": 38.699295,
      "longitude": -9.343262,
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
      "heading": 275,
      "squawk": "3225",
      "timestamp": 1652910082,
      "ems": null
    },
    {
      "latitude": 38.699432,
      "longitude": -9.344171,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 284,
      "squawk": "3225",
      "timestamp": 1652910085,
      "ems": null
    },
    {
      "latitude": 38.699753,
      "longitude": -9.345126,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 299,
      "squawk": "3225",
      "timestamp": 1652910088,
      "ems": null
    },
    {
      "latitude": 38.700211,
      "longitude": -9.345842,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 314,
      "squawk": "3225",
      "timestamp": 1652910091,
      "ems": null
    },
    {
      "latitude": 38.70076,
      "longitude": -9.34632,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 326,
      "squawk": "3225",
      "timestamp": 1652910094,
      "ems": null
    },
    {
      "latitude": 38.701401,
      "longitude": -9.346559,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652910097,
      "ems": null
    },
    {
      "latitude": 38.701904,
      "longitude": -9.346798,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652910100,
      "ems": null
    },
    {
      "latitude": 38.702454,
      "longitude": -9.346977,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652910102,
      "ems": null
    },
    {
      "latitude": 38.703094,
      "longitude": -9.347216,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652910106,
      "ems": null
    },
    {
      "latitude": 38.703716,
      "longitude": -9.347473,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652910109,
      "ems": null
    },
    {
      "latitude": 38.70433,
      "longitude": -9.347693,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652910112,
      "ems": null
    },
    {
      "latitude": 38.704926,
      "longitude": -9.3479,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652910115,
      "ems": null
    },
    {
      "latitude": 38.705624,
      "longitude": -9.348206,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "heading": 341,
      "squawk": "3225",
      "timestamp": 1652910118,
      "ems": null
    },
    {
      "latitude": 38.70623,
      "longitude": -9.348389,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652910121,
      "ems": null
    },
    {
      "latitude": 38.706741,
      "longitude": -9.348572,
      "altitude": {
        "feet": 300,
        "meters": 91
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
      "squawk": "3225",
      "timestamp": 1652910124,
      "ems": null
    },
    {
      "latitude": 38.708138,
      "longitude": -9.34906,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652910130,
      "ems": null
    },
    {
      "latitude": 38.70932,
      "longitude": -9.349484,
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652910135,
      "ems": null
    },
    {
      "latitude": 38.710831,
      "longitude": -9.350081,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652910141,
      "ems": null
    },
    {
      "latitude": 38.712479,
      "longitude": -9.350678,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "3225",
      "timestamp": 1652910148,
      "ems": null
    },
    {
      "latitude": 38.713852,
      "longitude": -9.351156,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652910154,
      "ems": null
    },
    {
      "latitude": 38.715122,
      "longitude": -9.351624,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652910160,
      "ems": null
    },
    {
      "latitude": 38.716286,
      "longitude": -9.352051,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652910166,
      "ems": null
    },
    {
      "latitude": 38.717697,
      "longitude": -9.35253,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 345,
      "squawk": "3225",
      "timestamp": 1652910172,
      "ems": null
    },
    {
      "latitude": 38.719032,
      "longitude": -9.353027,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "squawk": "3225",
      "timestamp": 1652910178,
      "ems": null
    },
    {
      "latitude": 38.720306,
      "longitude": -9.353485,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652910184,
      "ems": null
    },
    {
      "latitude": 38.721313,
      "longitude": -9.353844,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 61.1,
        "kts": 33,
        "mph": 38
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 344,
      "squawk": "3225",
      "timestamp": 1652910190,
      "ems": null
    },
    {
      "latitude": 38.722012,
      "longitude": -9.354126,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "squawk": "3225",
      "timestamp": 1652910196,
      "ems": null
    },
    {
      "latitude": 38.722412,
      "longitude": -9.354261,
      "altitude": {
        "feet": 100,
        "meters": 30
      },
      "speed": {
        "kmh": 24.1,
        "kts": 13,
        "mph": 15
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "3225",
      "timestamp": 1652910202,
      "ems": null
    },
    {
      "latitude": 38.722755,
      "longitude": -9.35437,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 343,
      "squawk": "3225",
      "timestamp": 1652910208,
      "ems": null
    },
    {
      "latitude": 38.723007,
      "longitude": -9.354321,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 20,
      "squawk": "3225",
      "timestamp": 1652910214,
      "ems": null
    },
    {
      "latitude": 38.723145,
      "longitude": -9.354082,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 78,
      "squawk": "3225",
      "timestamp": 1652910225,
      "ems": null
    },
    {
      "latitude": 38.722897,
      "longitude": -9.35437,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 68,
      "squawk": "3225",
      "timestamp": 1652910231,
      "ems": null
    }
  ]
};