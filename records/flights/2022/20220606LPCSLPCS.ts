import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220606LPCSLPCS",
    callsign: "CSDHU",
    name: "flight with dad :D",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 5, 6, 9, 55).getTime(),
    arrival: new Date(2022, 5, 6, 11, 40).getTime(),
    singleEnginePistonTime: 105,
    picTime: 105,
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
      "latitude": 38.718845,
      "longitude": -9.352386,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 0,
        "kts": 0,
        "mph": 0
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 180,
      "squawk": "0",
      "timestamp": 1654423373,
      "ems": null
    },
    {
      "latitude": 38.718636,
      "longitude": -9.352325,
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
      "heading": 177,
      "squawk": "0",
      "timestamp": 1654423380,
      "ems": null
    },
    {
      "latitude": 38.718449,
      "longitude": -9.352539,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 253,
      "squawk": "0",
      "timestamp": 1654423388,
      "ems": null
    },
    {
      "latitude": 38.718475,
      "longitude": -9.352769,
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
      "heading": 292,
      "squawk": "0",
      "timestamp": 1654423393,
      "ems": null
    },
    {
      "latitude": 38.718704,
      "longitude": -9.352873,
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
      "heading": 343,
      "squawk": "0",
      "timestamp": 1654423403,
      "ems": null
    },
    {
      "latitude": 38.718941,
      "longitude": -9.352951,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 40.7,
        "kts": 22,
        "mph": 25.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "0",
      "timestamp": 1654423405,
      "ems": null
    },
    {
      "latitude": 38.719162,
      "longitude": -9.353037,
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
      "squawk": "3255",
      "timestamp": 1654423407,
      "ems": null
    },
    {
      "latitude": 38.719372,
      "longitude": -9.353119,
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
      "squawk": "3255",
      "timestamp": 1654423409,
      "ems": null
    },
    {
      "latitude": 38.71965,
      "longitude": -9.353226,
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
      "squawk": "3255",
      "timestamp": 1654423411,
      "ems": null
    },
    {
      "latitude": 38.720058,
      "longitude": -9.353363,
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
      "squawk": "3255",
      "timestamp": 1654423413,
      "ems": null
    },
    {
      "latitude": 38.720364,
      "longitude": -9.353485,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654423414,
      "ems": null
    },
    {
      "latitude": 38.720581,
      "longitude": -9.353559,
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
      "squawk": "3255",
      "timestamp": 1654423415,
      "ems": null
    },
    {
      "latitude": 38.721313,
      "longitude": -9.353882,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654423419,
      "ems": null
    },
    {
      "latitude": 38.722103,
      "longitude": -9.354126,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 342,
      "squawk": "3255",
      "timestamp": 1654423422,
      "ems": null
    },
    {
      "latitude": 38.723549,
      "longitude": -9.354675,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654423428,
      "ems": null
    },
    {
      "latitude": 38.725204,
      "longitude": -9.355336,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654423434,
      "ems": null
    },
    {
      "latitude": 38.726807,
      "longitude": -9.355896,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654423440,
      "ems": null
    },
    {
      "latitude": 38.728363,
      "longitude": -9.35647,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654423446,
      "ems": null
    },
    {
      "latitude": 38.729965,
      "longitude": -9.357008,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 346,
      "squawk": "3255",
      "timestamp": 1654423452,
      "ems": null
    },
    {
      "latitude": 38.731461,
      "longitude": -9.357483,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 346,
      "squawk": "3255",
      "timestamp": 1654423458,
      "ems": null
    },
    {
      "latitude": 38.733261,
      "longitude": -9.357964,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654423464,
      "ems": null
    },
    {
      "latitude": 38.734863,
      "longitude": -9.358441,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654423470,
      "ems": null
    },
    {
      "latitude": 38.736721,
      "longitude": -9.35907,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 342,
      "squawk": "3255",
      "timestamp": 1654423477,
      "ems": null
    },
    {
      "latitude": 38.738892,
      "longitude": -9.359815,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654423484,
      "ems": null
    },
    {
      "latitude": 38.740585,
      "longitude": -9.360168,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 349,
      "squawk": "3255",
      "timestamp": 1654423490,
      "ems": null
    },
    {
      "latitude": 38.742508,
      "longitude": -9.36065,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 349,
      "squawk": "3255",
      "timestamp": 1654423497,
      "ems": null
    },
    {
      "latitude": 38.744358,
      "longitude": -9.361084,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3255",
      "timestamp": 1654423503,
      "ems": null
    },
    {
      "latitude": 38.745255,
      "longitude": -9.361247,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "3255",
      "timestamp": 1654423506,
      "ems": null
    },
    {
      "latitude": 38.747055,
      "longitude": -9.362061,
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
      "heading": 331,
      "squawk": "3255",
      "timestamp": 1654423512,
      "ems": null
    },
    {
      "latitude": 38.74791,
      "longitude": -9.36286,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "3255",
      "timestamp": 1654423515,
      "ems": null
    },
    {
      "latitude": 38.748547,
      "longitude": -9.364014,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 302,
      "squawk": "3255",
      "timestamp": 1654423518,
      "ems": null
    },
    {
      "latitude": 38.749058,
      "longitude": -9.365906,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 279,
      "squawk": "3255",
      "timestamp": 1654423522,
      "ems": null
    },
    {
      "latitude": 38.749058,
      "longitude": -9.367493,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654423525,
      "ems": null
    },
    {
      "latitude": 38.748779,
      "longitude": -9.369141,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 252,
      "squawk": "3255",
      "timestamp": 1654423528,
      "ems": null
    },
    {
      "latitude": 38.748184,
      "longitude": -9.370801,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 239,
      "squawk": "3255",
      "timestamp": 1654423531,
      "ems": null
    },
    {
      "latitude": 38.745575,
      "longitude": -9.374084,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 215,
      "squawk": "3255",
      "timestamp": 1654423539,
      "ems": null
    },
    {
      "latitude": 38.744308,
      "longitude": -9.375061,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 206,
      "squawk": "3255",
      "timestamp": 1654423542,
      "ems": null
    },
    {
      "latitude": 38.742874,
      "longitude": -9.375756,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654423545,
      "ems": null
    },
    {
      "latitude": 38.741455,
      "longitude": -9.376115,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654423548,
      "ems": null
    },
    {
      "latitude": 38.739887,
      "longitude": -9.376343,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654423551,
      "ems": null
    },
    {
      "latitude": 38.738434,
      "longitude": -9.376472,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654423554,
      "ems": null
    },
    {
      "latitude": 38.737049,
      "longitude": -9.376587,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654423557,
      "ems": null
    },
    {
      "latitude": 38.735321,
      "longitude": -9.376771,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654423560,
      "ems": null
    },
    {
      "latitude": 38.733948,
      "longitude": -9.376891,
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
      "heading": 182,
      "squawk": "3255",
      "timestamp": 1654423563,
      "ems": null
    },
    {
      "latitude": 38.732437,
      "longitude": -9.37695,
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
      "heading": 182,
      "squawk": "3255",
      "timestamp": 1654423566,
      "ems": null
    },
    {
      "latitude": 38.730835,
      "longitude": -9.37701,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 182,
      "squawk": "3255",
      "timestamp": 1654423570,
      "ems": null
    },
    {
      "latitude": 38.729416,
      "longitude": -9.37713,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654423572,
      "ems": null
    },
    {
      "latitude": 38.727951,
      "longitude": -9.377309,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654423575,
      "ems": null
    },
    {
      "latitude": 38.725082,
      "longitude": -9.377686,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 186,
      "squawk": "3255",
      "timestamp": 1654423582,
      "ems": null
    },
    {
      "latitude": 38.722137,
      "longitude": -9.378144,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 188,
      "squawk": "3255",
      "timestamp": 1654423588,
      "ems": null
    },
    {
      "latitude": 38.719219,
      "longitude": -9.378784,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654423593,
      "ems": null
    },
    {
      "latitude": 38.717697,
      "longitude": -9.3791,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654423597,
      "ems": null
    },
    {
      "latitude": 38.716278,
      "longitude": -9.379398,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 190,
      "squawk": "3255",
      "timestamp": 1654423600,
      "ems": null
    },
    {
      "latitude": 38.714935,
      "longitude": -9.379761,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 190,
      "squawk": "3255",
      "timestamp": 1654423603,
      "ems": null
    },
    {
      "latitude": 38.71368,
      "longitude": -9.380005,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654423606,
      "ems": null
    },
    {
      "latitude": 38.71225,
      "longitude": -9.380414,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 190,
      "squawk": "3255",
      "timestamp": 1654423609,
      "ems": null
    },
    {
      "latitude": 38.709457,
      "longitude": -9.38107,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654423615,
      "ems": null
    },
    {
      "latitude": 38.706558,
      "longitude": -9.381836,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654423621,
      "ems": null
    },
    {
      "latitude": 38.703671,
      "longitude": -9.382751,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654423627,
      "ems": null
    },
    {
      "latitude": 38.700989,
      "longitude": -9.383578,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654423633,
      "ems": null
    },
    {
      "latitude": 38.699665,
      "longitude": -9.384155,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654423636,
      "ems": null
    },
    {
      "latitude": 38.698196,
      "longitude": -9.384832,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654423639,
      "ems": null
    },
    {
      "latitude": 38.697006,
      "longitude": -9.385549,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 205,
      "squawk": "3255",
      "timestamp": 1654423642,
      "ems": null
    },
    {
      "latitude": 38.69545,
      "longitude": -9.386623,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 211,
      "squawk": "3255",
      "timestamp": 1654423646,
      "ems": null
    },
    {
      "latitude": 38.694172,
      "longitude": -9.387756,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 216,
      "squawk": "3255",
      "timestamp": 1654423649,
      "ems": null
    },
    {
      "latitude": 38.693058,
      "longitude": -9.388977,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 222,
      "squawk": "3255",
      "timestamp": 1654423652,
      "ems": null
    },
    {
      "latitude": 38.692108,
      "longitude": -9.390205,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "3255",
      "timestamp": 1654423655,
      "ems": null
    },
    {
      "latitude": 38.691288,
      "longitude": -9.391663,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 234,
      "squawk": "3255",
      "timestamp": 1654423658,
      "ems": null
    },
    {
      "latitude": 38.690598,
      "longitude": -9.392952,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 238,
      "squawk": "3255",
      "timestamp": 1654423661,
      "ems": null
    },
    {
      "latitude": 38.689892,
      "longitude": -9.394592,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 242,
      "squawk": "3255",
      "timestamp": 1654423664,
      "ems": null
    },
    {
      "latitude": 38.689331,
      "longitude": -9.396118,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 246,
      "squawk": "3255",
      "timestamp": 1654423667,
      "ems": null
    },
    {
      "latitude": 38.68882,
      "longitude": -9.397766,
      "altitude": {
        "feet": 700,
        "meters": 213
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 248,
      "squawk": "3255",
      "timestamp": 1654423670,
      "ems": null
    },
    {
      "latitude": 38.688309,
      "longitude": -9.399536,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 250,
      "squawk": "3255",
      "timestamp": 1654423673,
      "ems": null
    },
    {
      "latitude": 38.687843,
      "longitude": -9.401367,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 251,
      "squawk": "3255",
      "timestamp": 1654423676,
      "ems": null
    },
    {
      "latitude": 38.687424,
      "longitude": -9.403137,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 254,
      "squawk": "3255",
      "timestamp": 1654423679,
      "ems": null
    },
    {
      "latitude": 38.687119,
      "longitude": -9.404834,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 257,
      "squawk": "3255",
      "timestamp": 1654423682,
      "ems": null
    },
    {
      "latitude": 38.686817,
      "longitude": -9.406677,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 259,
      "squawk": "3255",
      "timestamp": 1654423685,
      "ems": null
    },
    {
      "latitude": 38.686615,
      "longitude": -9.408357,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654423688,
      "ems": null
    },
    {
      "latitude": 38.686352,
      "longitude": -9.410339,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 261,
      "squawk": "3255",
      "timestamp": 1654423691,
      "ems": null
    },
    {
      "latitude": 38.686165,
      "longitude": -9.411987,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 263,
      "squawk": "3255",
      "timestamp": 1654423694,
      "ems": null
    },
    {
      "latitude": 38.686073,
      "longitude": -9.413818,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654423697,
      "ems": null
    },
    {
      "latitude": 38.685982,
      "longitude": -9.415222,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654423701,
      "ems": null
    },
    {
      "latitude": 38.685932,
      "longitude": -9.417358,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 269,
      "squawk": "3255",
      "timestamp": 1654423704,
      "ems": null
    },
    {
      "latitude": 38.685928,
      "longitude": -9.419224,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654423707,
      "ems": null
    },
    {
      "latitude": 38.685974,
      "longitude": -9.421015,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654423710,
      "ems": null
    },
    {
      "latitude": 38.686028,
      "longitude": -9.422729,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 273,
      "squawk": "3255",
      "timestamp": 1654423713,
      "ems": null
    },
    {
      "latitude": 38.686119,
      "longitude": -9.424622,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 273,
      "squawk": "3255",
      "timestamp": 1654423716,
      "ems": null
    },
    {
      "latitude": 38.686165,
      "longitude": -9.426392,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654423719,
      "ems": null
    },
    {
      "latitude": 38.686295,
      "longitude": -9.428121,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654423722,
      "ems": null
    },
    {
      "latitude": 38.686398,
      "longitude": -9.429749,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654423725,
      "ems": null
    },
    {
      "latitude": 38.686493,
      "longitude": -9.431396,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654423728,
      "ems": null
    },
    {
      "latitude": 38.686569,
      "longitude": -9.433017,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "squawk": "3255",
      "timestamp": 1654423731,
      "ems": null
    },
    {
      "latitude": 38.686817,
      "longitude": -9.436584,
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
      "heading": 276,
      "squawk": "3255",
      "timestamp": 1654423737,
      "ems": null
    },
    {
      "latitude": 38.686958,
      "longitude": -9.437988,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 279,
      "squawk": "3255",
      "timestamp": 1654423740,
      "ems": null
    },
    {
      "latitude": 38.687237,
      "longitude": -9.439636,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 281,
      "squawk": "3255",
      "timestamp": 1654423743,
      "ems": null
    },
    {
      "latitude": 38.687515,
      "longitude": -9.441284,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 283,
      "squawk": "3255",
      "timestamp": 1654423746,
      "ems": null
    },
    {
      "latitude": 38.687889,
      "longitude": -9.443054,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 285,
      "squawk": "3255",
      "timestamp": 1654423749,
      "ems": null
    },
    {
      "latitude": 38.688263,
      "longitude": -9.44458,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 286,
      "squawk": "3255",
      "timestamp": 1654423752,
      "ems": null
    },
    {
      "latitude": 38.688675,
      "longitude": -9.44651,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 284,
      "squawk": "3255",
      "timestamp": 1654423755,
      "ems": null
    },
    {
      "latitude": 38.688995,
      "longitude": -9.448242,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 283,
      "squawk": "3255",
      "timestamp": 1654423758,
      "ems": null
    },
    {
      "latitude": 38.68927,
      "longitude": -9.449795,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 284,
      "squawk": "3255",
      "timestamp": 1654423761,
      "ems": null
    },
    {
      "latitude": 38.689636,
      "longitude": -9.451467,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "3255",
      "timestamp": 1654423764,
      "ems": null
    },
    {
      "latitude": 38.690048,
      "longitude": -9.453318,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 286,
      "squawk": "3255",
      "timestamp": 1654423767,
      "ems": null
    },
    {
      "latitude": 38.690414,
      "longitude": -9.45487,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 287,
      "squawk": "3255",
      "timestamp": 1654423770,
      "ems": null
    },
    {
      "latitude": 38.690826,
      "longitude": -9.456482,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "3255",
      "timestamp": 1654423773,
      "ems": null
    },
    {
      "latitude": 38.691376,
      "longitude": -9.458273,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 291,
      "squawk": "3255",
      "timestamp": 1654423776,
      "ems": null
    },
    {
      "latitude": 38.692245,
      "longitude": -9.461199,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "3255",
      "timestamp": 1654423782,
      "ems": null
    },
    {
      "latitude": 38.692825,
      "longitude": -9.462952,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "3255",
      "timestamp": 1654423785,
      "ems": null
    },
    {
      "latitude": 38.693336,
      "longitude": -9.464417,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 294,
      "squawk": "3255",
      "timestamp": 1654423788,
      "ems": null
    },
    {
      "latitude": 38.693848,
      "longitude": -9.46582,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 295,
      "squawk": "3255",
      "timestamp": 1654423791,
      "ems": null
    },
    {
      "latitude": 38.694359,
      "longitude": -9.467102,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "3255",
      "timestamp": 1654423794,
      "ems": null
    },
    {
      "latitude": 38.69492,
      "longitude": -9.468567,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "3255",
      "timestamp": 1654423798,
      "ems": null
    },
    {
      "latitude": 38.695404,
      "longitude": -9.469737,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "3255",
      "timestamp": 1654423801,
      "ems": null
    },
    {
      "latitude": 38.696407,
      "longitude": -9.472656,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "3255",
      "timestamp": 1654423807,
      "ems": null
    },
    {
      "latitude": 38.697338,
      "longitude": -9.475464,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 292,
      "squawk": "3255",
      "timestamp": 1654423813,
      "ems": null
    },
    {
      "latitude": 38.698334,
      "longitude": -9.478395,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 295,
      "squawk": "3255",
      "timestamp": 1654423819,
      "ems": null
    },
    {
      "latitude": 38.699432,
      "longitude": -9.481261,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 296,
      "squawk": "3255",
      "timestamp": 1654423825,
      "ems": null
    },
    {
      "latitude": 38.70055,
      "longitude": -9.484009,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 300,
      "squawk": "3255",
      "timestamp": 1654423831,
      "ems": null
    },
    {
      "latitude": 38.701157,
      "longitude": -9.485229,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 303,
      "squawk": "3255",
      "timestamp": 1654423834,
      "ems": null
    },
    {
      "latitude": 38.701904,
      "longitude": -9.486456,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 309,
      "squawk": "3255",
      "timestamp": 1654423837,
      "ems": null
    },
    {
      "latitude": 38.702774,
      "longitude": -9.48765,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 316,
      "squawk": "3255",
      "timestamp": 1654423840,
      "ems": null
    },
    {
      "latitude": 38.703812,
      "longitude": -9.488647,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 324,
      "squawk": "3255",
      "timestamp": 1654423843,
      "ems": null
    },
    {
      "latitude": 38.704693,
      "longitude": -9.48938,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 331,
      "squawk": "3255",
      "timestamp": 1654423846,
      "ems": null
    },
    {
      "latitude": 38.705811,
      "longitude": -9.48999,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "3255",
      "timestamp": 1654423849,
      "ems": null
    },
    {
      "latitude": 38.706837,
      "longitude": -9.490417,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 341,
      "squawk": "3255",
      "timestamp": 1654423852,
      "ems": null
    },
    {
      "latitude": 38.707901,
      "longitude": -9.490814,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654423855,
      "ems": null
    },
    {
      "latitude": 38.708977,
      "longitude": -9.49115,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654423858,
      "ems": null
    },
    {
      "latitude": 38.709961,
      "longitude": -9.491411,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "3255",
      "timestamp": 1654423861,
      "ems": null
    },
    {
      "latitude": 38.711014,
      "longitude": -9.491651,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "3255",
      "timestamp": 1654423864,
      "ems": null
    },
    {
      "latitude": 38.712097,
      "longitude": -9.491821,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "3255",
      "timestamp": 1654423867,
      "ems": null
    },
    {
      "latitude": 38.713394,
      "longitude": -9.491949,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 356,
      "squawk": "3255",
      "timestamp": 1654423870,
      "ems": null
    },
    {
      "latitude": 38.714493,
      "longitude": -9.492008,
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
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654423873,
      "ems": null
    },
    {
      "latitude": 38.715679,
      "longitude": -9.492004,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654423876,
      "ems": null
    },
    {
      "latitude": 38.716751,
      "longitude": -9.492004,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 1,
      "squawk": "3255",
      "timestamp": 1654423879,
      "ems": null
    },
    {
      "latitude": 38.717869,
      "longitude": -9.491943,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654423882,
      "ems": null
    },
    {
      "latitude": 38.719173,
      "longitude": -9.491882,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654423885,
      "ems": null
    },
    {
      "latitude": 38.720261,
      "longitude": -9.491829,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654423888,
      "ems": null
    },
    {
      "latitude": 38.721405,
      "longitude": -9.49177,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654423891,
      "ems": null
    },
    {
      "latitude": 38.722523,
      "longitude": -9.491699,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 5,
      "squawk": "3255",
      "timestamp": 1654423894,
      "ems": null
    },
    {
      "latitude": 38.72374,
      "longitude": -9.49153,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 6,
      "squawk": "3255",
      "timestamp": 1654423897,
      "ems": null
    },
    {
      "latitude": 38.724884,
      "longitude": -9.491351,
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
      "heading": 6,
      "squawk": "3255",
      "timestamp": 1654423900,
      "ems": null
    },
    {
      "latitude": 38.725983,
      "longitude": -9.491232,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 6,
      "squawk": "3255",
      "timestamp": 1654423903,
      "ems": null
    },
    {
      "latitude": 38.727272,
      "longitude": -9.491028,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 6,
      "squawk": "3255",
      "timestamp": 1654423907,
      "ems": null
    },
    {
      "latitude": 38.728409,
      "longitude": -9.490814,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654423910,
      "ems": null
    },
    {
      "latitude": 38.729599,
      "longitude": -9.490601,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654423913,
      "ems": null
    },
    {
      "latitude": 38.732025,
      "longitude": -9.490396,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654423919,
      "ems": null
    },
    {
      "latitude": 38.733215,
      "longitude": -9.490516,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 353,
      "squawk": "3255",
      "timestamp": 1654423922,
      "ems": null
    },
    {
      "latitude": 38.734406,
      "longitude": -9.490814,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654423925,
      "ems": null
    },
    {
      "latitude": 38.73555,
      "longitude": -9.491292,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "3255",
      "timestamp": 1654423928,
      "ems": null
    },
    {
      "latitude": 38.736721,
      "longitude": -9.491882,
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
      "heading": 337,
      "squawk": "3255",
      "timestamp": 1654423931,
      "ems": null
    },
    {
      "latitude": 38.737934,
      "longitude": -9.492554,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 335,
      "squawk": "3255",
      "timestamp": 1654423934,
      "ems": null
    },
    {
      "latitude": 38.738892,
      "longitude": -9.493143,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 334,
      "squawk": "3255",
      "timestamp": 1654423937,
      "ems": null
    },
    {
      "latitude": 38.73999,
      "longitude": -9.493799,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "3255",
      "timestamp": 1654423940,
      "ems": null
    },
    {
      "latitude": 38.741089,
      "longitude": -9.494516,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 331,
      "squawk": "3255",
      "timestamp": 1654423943,
      "ems": null
    },
    {
      "latitude": 38.742168,
      "longitude": -9.4953,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 331,
      "squawk": "3255",
      "timestamp": 1654423946,
      "ems": null
    },
    {
      "latitude": 38.743149,
      "longitude": -9.495949,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "3255",
      "timestamp": 1654423949,
      "ems": null
    },
    {
      "latitude": 38.744217,
      "longitude": -9.496643,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 333,
      "squawk": "3255",
      "timestamp": 1654423952,
      "ems": null
    },
    {
      "latitude": 38.745289,
      "longitude": -9.497314,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 335,
      "squawk": "3255",
      "timestamp": 1654423955,
      "ems": null
    },
    {
      "latitude": 38.746445,
      "longitude": -9.497979,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "3255",
      "timestamp": 1654423958,
      "ems": null
    },
    {
      "latitude": 38.748642,
      "longitude": -9.499114,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "3255",
      "timestamp": 1654423964,
      "ems": null
    },
    {
      "latitude": 38.749756,
      "longitude": -9.499634,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 340,
      "squawk": "3255",
      "timestamp": 1654423967,
      "ems": null
    },
    {
      "latitude": 38.750793,
      "longitude": -9.500069,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 340,
      "squawk": "3255",
      "timestamp": 1654423970,
      "ems": null
    },
    {
      "latitude": 38.751892,
      "longitude": -9.500546,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "3255",
      "timestamp": 1654423973,
      "ems": null
    },
    {
      "latitude": 38.753036,
      "longitude": -9.501024,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654423977,
      "ems": null
    },
    {
      "latitude": 38.754086,
      "longitude": -9.501404,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654423979,
      "ems": null
    },
    {
      "latitude": 38.755157,
      "longitude": -9.501831,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "3255",
      "timestamp": 1654423983,
      "ems": null
    },
    {
      "latitude": 38.757717,
      "longitude": -9.503418,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 327,
      "squawk": "3255",
      "timestamp": 1654423990,
      "ems": null
    },
    {
      "latitude": 38.758621,
      "longitude": -9.504309,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 317,
      "squawk": "3255",
      "timestamp": 1654423993,
      "ems": null
    },
    {
      "latitude": 38.759399,
      "longitude": -9.505443,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654423996,
      "ems": null
    },
    {
      "latitude": 38.760185,
      "longitude": -9.506836,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 304,
      "squawk": "3255",
      "timestamp": 1654423999,
      "ems": null
    },
    {
      "latitude": 38.760773,
      "longitude": -9.507951,
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
      "heading": 305,
      "squawk": "3255",
      "timestamp": 1654424002,
      "ems": null
    },
    {
      "latitude": 38.761536,
      "longitude": -9.509216,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654424005,
      "ems": null
    },
    {
      "latitude": 38.76228,
      "longitude": -9.510437,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654424008,
      "ems": null
    },
    {
      "latitude": 38.763119,
      "longitude": -9.511902,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654424011,
      "ems": null
    },
    {
      "latitude": 38.76384,
      "longitude": -9.513085,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654424014,
      "ems": null
    },
    {
      "latitude": 38.764606,
      "longitude": -9.514404,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654424017,
      "ems": null
    },
    {
      "latitude": 38.76535,
      "longitude": -9.515594,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654424020,
      "ems": null
    },
    {
      "latitude": 38.766861,
      "longitude": -9.518042,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 308,
      "squawk": "3255",
      "timestamp": 1654424026,
      "ems": null
    },
    {
      "latitude": 38.768379,
      "longitude": -9.52063,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 306,
      "squawk": "3255",
      "timestamp": 1654424033,
      "ems": null
    },
    {
      "latitude": 38.769775,
      "longitude": -9.52301,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654424039,
      "ems": null
    },
    {
      "latitude": 38.771393,
      "longitude": -9.525505,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 314,
      "squawk": "3255",
      "timestamp": 1654424045,
      "ems": null
    },
    {
      "latitude": 38.772335,
      "longitude": -9.526489,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 323,
      "squawk": "3255",
      "timestamp": 1654424048,
      "ems": null
    },
    {
      "latitude": 38.773312,
      "longitude": -9.527283,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 333,
      "squawk": "3255",
      "timestamp": 1654424051,
      "ems": null
    },
    {
      "latitude": 38.774384,
      "longitude": -9.527832,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 342,
      "squawk": "3255",
      "timestamp": 1654424055,
      "ems": null
    },
    {
      "latitude": 38.775925,
      "longitude": -9.528192,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 351,
      "squawk": "3255",
      "timestamp": 1654424058,
      "ems": null
    },
    {
      "latitude": 38.777035,
      "longitude": -9.528259,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654424061,
      "ems": null
    },
    {
      "latitude": 38.778122,
      "longitude": -9.528252,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654424064,
      "ems": null
    },
    {
      "latitude": 38.779224,
      "longitude": -9.528198,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654424067,
      "ems": null
    },
    {
      "latitude": 38.779953,
      "longitude": -9.528131,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "3255",
      "timestamp": 1654424070,
      "ems": null
    },
    {
      "latitude": 38.781601,
      "longitude": -9.527833,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 10,
      "squawk": "3255",
      "timestamp": 1654424073,
      "ems": null
    },
    {
      "latitude": 38.7827,
      "longitude": -9.527534,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "3255",
      "timestamp": 1654424076,
      "ems": null
    },
    {
      "latitude": 38.783798,
      "longitude": -9.527177,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424080,
      "ems": null
    },
    {
      "latitude": 38.784904,
      "longitude": -9.526733,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "3255",
      "timestamp": 1654424082,
      "ems": null
    },
    {
      "latitude": 38.785675,
      "longitude": -9.526401,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "3255",
      "timestamp": 1654424085,
      "ems": null
    },
    {
      "latitude": 38.787277,
      "longitude": -9.525696,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "3255",
      "timestamp": 1654424088,
      "ems": null
    },
    {
      "latitude": 38.788284,
      "longitude": -9.525207,
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
      "heading": 19,
      "squawk": "3255",
      "timestamp": 1654424091,
      "ems": null
    },
    {
      "latitude": 38.789474,
      "longitude": -9.524669,
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
      "heading": 19,
      "squawk": "3255",
      "timestamp": 1654424094,
      "ems": null
    },
    {
      "latitude": 38.790535,
      "longitude": -9.52417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 20,
      "squawk": "3255",
      "timestamp": 1654424097,
      "ems": null
    },
    {
      "latitude": 38.791653,
      "longitude": -9.523621,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "3255",
      "timestamp": 1654424100,
      "ems": null
    },
    {
      "latitude": 38.792679,
      "longitude": -9.523057,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "3255",
      "timestamp": 1654424103,
      "ems": null
    },
    {
      "latitude": 38.79398,
      "longitude": -9.5224,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 22,
      "squawk": "3255",
      "timestamp": 1654424107,
      "ems": null
    },
    {
      "latitude": 38.79451,
      "longitude": -9.522101,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 23,
      "squawk": "3255",
      "timestamp": 1654424109,
      "ems": null
    },
    {
      "latitude": 38.795746,
      "longitude": -9.521444,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 23,
      "squawk": "3255",
      "timestamp": 1654424112,
      "ems": null
    },
    {
      "latitude": 38.796448,
      "longitude": -9.521057,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 24,
      "squawk": "3255",
      "timestamp": 1654424113,
      "ems": null
    },
    {
      "latitude": 38.798355,
      "longitude": -9.519892,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 25,
      "squawk": "3255",
      "timestamp": 1654424118,
      "ems": null
    },
    {
      "latitude": 38.799473,
      "longitude": -9.519226,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 26,
      "squawk": "3255",
      "timestamp": 1654424121,
      "ems": null
    },
    {
      "latitude": 38.80022,
      "longitude": -9.518738,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 26,
      "squawk": "3255",
      "timestamp": 1654424123,
      "ems": null
    },
    {
      "latitude": 38.803246,
      "longitude": -9.516724,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 27,
      "squawk": "3255",
      "timestamp": 1654424132,
      "ems": null
    },
    {
      "latitude": 38.804966,
      "longitude": -9.515503,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 29,
      "squawk": "3255",
      "timestamp": 1654424137,
      "ems": null
    },
    {
      "latitude": 38.807014,
      "longitude": -9.513977,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 29,
      "squawk": "3255",
      "timestamp": 1654424142,
      "ems": null
    },
    {
      "latitude": 38.808784,
      "longitude": -9.512634,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 30,
      "squawk": "3255",
      "timestamp": 1654424147,
      "ems": null
    },
    {
      "latitude": 38.810555,
      "longitude": -9.511292,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 31,
      "squawk": "3255",
      "timestamp": 1654424152,
      "ems": null
    },
    {
      "latitude": 38.814186,
      "longitude": -9.508362,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 32,
      "squawk": "3255",
      "timestamp": 1654424163,
      "ems": null
    },
    {
      "latitude": 38.817863,
      "longitude": -9.505249,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 33,
      "squawk": "3255",
      "timestamp": 1654424173,
      "ems": null
    },
    {
      "latitude": 38.819641,
      "longitude": -9.503771,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 33,
      "squawk": "3255",
      "timestamp": 1654424178,
      "ems": null
    },
    {
      "latitude": 38.82317,
      "longitude": -9.500671,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 35,
      "squawk": "3255",
      "timestamp": 1654424189,
      "ems": null
    },
    {
      "latitude": 38.826008,
      "longitude": -9.497986,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "squawk": "3255",
      "timestamp": 1654424196,
      "ems": null
    },
    {
      "latitude": 38.827965,
      "longitude": -9.496033,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 38,
      "squawk": "3255",
      "timestamp": 1654424203,
      "ems": null
    },
    {
      "latitude": 38.829941,
      "longitude": -9.494039,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 36,
      "squawk": "3255",
      "timestamp": 1654424209,
      "ems": null
    },
    {
      "latitude": 38.831688,
      "longitude": -9.492432,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 34,
      "squawk": "3255",
      "timestamp": 1654424215,
      "ems": null
    },
    {
      "latitude": 38.833603,
      "longitude": -9.490814,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 29,
      "squawk": "3255",
      "timestamp": 1654424221,
      "ems": null
    },
    {
      "latitude": 38.83461,
      "longitude": -9.490217,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 24,
      "squawk": "3255",
      "timestamp": 1654424224,
      "ems": null
    },
    {
      "latitude": 38.835598,
      "longitude": -9.489685,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 22,
      "squawk": "3255",
      "timestamp": 1654424227,
      "ems": null
    },
    {
      "latitude": 38.836811,
      "longitude": -9.489075,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 20,
      "squawk": "3255",
      "timestamp": 1654424230,
      "ems": null
    },
    {
      "latitude": 38.837769,
      "longitude": -9.488665,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 19,
      "squawk": "3255",
      "timestamp": 1654424233,
      "ems": null
    },
    {
      "latitude": 38.838684,
      "longitude": -9.488247,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 18,
      "squawk": "3255",
      "timestamp": 1654424236,
      "ems": null
    },
    {
      "latitude": 38.839928,
      "longitude": -9.487732,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 17,
      "squawk": "3255",
      "timestamp": 1654424239,
      "ems": null
    },
    {
      "latitude": 38.840881,
      "longitude": -9.487351,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 17,
      "squawk": "3255",
      "timestamp": 1654424242,
      "ems": null
    },
    {
      "latitude": 38.842026,
      "longitude": -9.486874,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 17,
      "squawk": "3255",
      "timestamp": 1654424245,
      "ems": null
    },
    {
      "latitude": 38.843124,
      "longitude": -9.486456,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 18,
      "squawk": "3255",
      "timestamp": 1654424248,
      "ems": null
    },
    {
      "latitude": 38.844257,
      "longitude": -9.485901,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "3255",
      "timestamp": 1654424251,
      "ems": null
    },
    {
      "latitude": 38.845375,
      "longitude": -9.485413,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 19,
      "squawk": "3255",
      "timestamp": 1654424254,
      "ems": null
    },
    {
      "latitude": 38.847565,
      "longitude": -9.484497,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 19,
      "squawk": "3255",
      "timestamp": 1654424260,
      "ems": null
    },
    {
      "latitude": 38.849796,
      "longitude": -9.483398,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 21,
      "squawk": "3255",
      "timestamp": 1654424266,
      "ems": null
    },
    {
      "latitude": 38.850952,
      "longitude": -9.482813,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 23,
      "squawk": "3255",
      "timestamp": 1654424269,
      "ems": null
    },
    {
      "latitude": 38.852127,
      "longitude": -9.482117,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 23,
      "squawk": "3255",
      "timestamp": 1654424272,
      "ems": null
    },
    {
      "latitude": 38.853149,
      "longitude": -9.48156,
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
      "heading": 24,
      "squawk": "3255",
      "timestamp": 1654424275,
      "ems": null
    },
    {
      "latitude": 38.854065,
      "longitude": -9.481022,
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
      "heading": 24,
      "squawk": "3255",
      "timestamp": 1654424278,
      "ems": null
    },
    {
      "latitude": 38.856548,
      "longitude": -9.479614,
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
      "heading": 23,
      "squawk": "3255",
      "timestamp": 1654424284,
      "ems": null
    },
    {
      "latitude": 38.858784,
      "longitude": -9.478333,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "3255",
      "timestamp": 1654424290,
      "ems": null
    },
    {
      "latitude": 38.859993,
      "longitude": -9.4776,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "3255",
      "timestamp": 1654424293,
      "ems": null
    },
    {
      "latitude": 38.862122,
      "longitude": -9.476305,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 26,
      "squawk": "3255",
      "timestamp": 1654424299,
      "ems": null
    },
    {
      "latitude": 38.864323,
      "longitude": -9.474854,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 27,
      "squawk": "3255",
      "timestamp": 1654424305,
      "ems": null
    },
    {
      "latitude": 38.866608,
      "longitude": -9.47332,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 28,
      "squawk": "3255",
      "timestamp": 1654424311,
      "ems": null
    },
    {
      "latitude": 38.868885,
      "longitude": -9.471741,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 27,
      "squawk": "3255",
      "timestamp": 1654424317,
      "ems": null
    },
    {
      "latitude": 38.871185,
      "longitude": -9.470215,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 27,
      "squawk": "3255",
      "timestamp": 1654424323,
      "ems": null
    },
    {
      "latitude": 38.873447,
      "longitude": -9.468689,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 28,
      "squawk": "3255",
      "timestamp": 1654424329,
      "ems": null
    },
    {
      "latitude": 38.875587,
      "longitude": -9.467224,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 28,
      "squawk": "3255",
      "timestamp": 1654424335,
      "ems": null
    },
    {
      "latitude": 38.877869,
      "longitude": -9.465617,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 29,
      "squawk": "3255",
      "timestamp": 1654424341,
      "ems": null
    },
    {
      "latitude": 38.880058,
      "longitude": -9.463989,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 30,
      "squawk": "3255",
      "timestamp": 1654424347,
      "ems": null
    },
    {
      "latitude": 38.882244,
      "longitude": -9.46228,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 31,
      "squawk": "3255",
      "timestamp": 1654424353,
      "ems": null
    },
    {
      "latitude": 38.884552,
      "longitude": -9.460483,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 32,
      "squawk": "3255",
      "timestamp": 1654424359,
      "ems": null
    },
    {
      "latitude": 38.886658,
      "longitude": -9.458751,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 31,
      "squawk": "3255",
      "timestamp": 1654424365,
      "ems": null
    },
    {
      "latitude": 38.888809,
      "longitude": -9.457092,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 31,
      "squawk": "3255",
      "timestamp": 1654424371,
      "ems": null
    },
    {
      "latitude": 38.891045,
      "longitude": -9.455383,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 30,
      "squawk": "3255",
      "timestamp": 1654424377,
      "ems": null
    },
    {
      "latitude": 38.893093,
      "longitude": -9.453857,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 29,
      "squawk": "3255",
      "timestamp": 1654424383,
      "ems": null
    },
    {
      "latitude": 38.895279,
      "longitude": -9.452271,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 28,
      "squawk": "3255",
      "timestamp": 1654424389,
      "ems": null
    },
    {
      "latitude": 38.897415,
      "longitude": -9.45087,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 25,
      "squawk": "3255",
      "timestamp": 1654424395,
      "ems": null
    },
    {
      "latitude": 38.898605,
      "longitude": -9.450212,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 23,
      "squawk": "3255",
      "timestamp": 1654424398,
      "ems": null
    },
    {
      "latitude": 38.899704,
      "longitude": -9.449615,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 21,
      "squawk": "3255",
      "timestamp": 1654424401,
      "ems": null
    },
    {
      "latitude": 38.900864,
      "longitude": -9.449097,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 21,
      "squawk": "3255",
      "timestamp": 1654424404,
      "ems": null
    },
    {
      "latitude": 38.901947,
      "longitude": -9.448541,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 20,
      "squawk": "3255",
      "timestamp": 1654424407,
      "ems": null
    },
    {
      "latitude": 38.903053,
      "longitude": -9.448059,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 19,
      "squawk": "3255",
      "timestamp": 1654424410,
      "ems": null
    },
    {
      "latitude": 38.904144,
      "longitude": -9.447585,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 18,
      "squawk": "3255",
      "timestamp": 1654424413,
      "ems": null
    },
    {
      "latitude": 38.905289,
      "longitude": -9.447083,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 17,
      "squawk": "3255",
      "timestamp": 1654424416,
      "ems": null
    },
    {
      "latitude": 38.906479,
      "longitude": -9.44663,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424419,
      "ems": null
    },
    {
      "latitude": 38.907616,
      "longitude": -9.446228,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424422,
      "ems": null
    },
    {
      "latitude": 38.908733,
      "longitude": -9.445862,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424425,
      "ems": null
    },
    {
      "latitude": 38.910004,
      "longitude": -9.445376,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424428,
      "ems": null
    },
    {
      "latitude": 38.91106,
      "longitude": -9.445007,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424431,
      "ems": null
    },
    {
      "latitude": 38.912132,
      "longitude": -9.444641,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424434,
      "ems": null
    },
    {
      "latitude": 38.913345,
      "longitude": -9.444182,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424437,
      "ems": null
    },
    {
      "latitude": 38.915634,
      "longitude": -9.443346,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424443,
      "ems": null
    },
    {
      "latitude": 38.917923,
      "longitude": -9.442451,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424449,
      "ems": null
    },
    {
      "latitude": 38.920139,
      "longitude": -9.441589,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424455,
      "ems": null
    },
    {
      "latitude": 38.922371,
      "longitude": -9.440735,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424461,
      "ems": null
    },
    {
      "latitude": 38.924835,
      "longitude": -9.439823,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424467,
      "ems": null
    },
    {
      "latitude": 38.92712,
      "longitude": -9.439026,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424473,
      "ems": null
    },
    {
      "latitude": 38.92923,
      "longitude": -9.438211,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424479,
      "ems": null
    },
    {
      "latitude": 38.931747,
      "longitude": -9.437375,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654424485,
      "ems": null
    },
    {
      "latitude": 38.93401,
      "longitude": -9.436584,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654424491,
      "ems": null
    },
    {
      "latitude": 38.936462,
      "longitude": -9.435763,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424497,
      "ems": null
    },
    {
      "latitude": 38.938713,
      "longitude": -9.434875,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424503,
      "ems": null
    },
    {
      "latitude": 38.94104,
      "longitude": -9.434021,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424509,
      "ems": null
    },
    {
      "latitude": 38.943321,
      "longitude": -9.433228,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424515,
      "ems": null
    },
    {
      "latitude": 38.945663,
      "longitude": -9.43242,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654424522,
      "ems": null
    },
    {
      "latitude": 38.947815,
      "longitude": -9.431763,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 9,
      "squawk": "3255",
      "timestamp": 1654424528,
      "ems": null
    },
    {
      "latitude": 38.949093,
      "longitude": -9.431641,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654424530,
      "ems": null
    },
    {
      "latitude": 38.950302,
      "longitude": -9.431702,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 357,
      "squawk": "3255",
      "timestamp": 1654424533,
      "ems": null
    },
    {
      "latitude": 38.951469,
      "longitude": -9.431824,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 352,
      "squawk": "3255",
      "timestamp": 1654424536,
      "ems": null
    },
    {
      "latitude": 38.952621,
      "longitude": -9.432121,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 348,
      "squawk": "3255",
      "timestamp": 1654424540,
      "ems": null
    },
    {
      "latitude": 38.953766,
      "longitude": -9.432479,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 346,
      "squawk": "3255",
      "timestamp": 1654424543,
      "ems": null
    },
    {
      "latitude": 38.95491,
      "longitude": -9.432837,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654424546,
      "ems": null
    },
    {
      "latitude": 38.956009,
      "longitude": -9.433196,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654424549,
      "ems": null
    },
    {
      "latitude": 38.957062,
      "longitude": -9.433554,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654424551,
      "ems": null
    },
    {
      "latitude": 38.958309,
      "longitude": -9.43396,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654424555,
      "ems": null
    },
    {
      "latitude": 38.959244,
      "longitude": -9.434326,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654424558,
      "ems": null
    },
    {
      "latitude": 38.960453,
      "longitude": -9.434631,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 346,
      "squawk": "3255",
      "timestamp": 1654424560,
      "ems": null
    },
    {
      "latitude": 38.961521,
      "longitude": -9.434937,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654424564,
      "ems": null
    },
    {
      "latitude": 38.963745,
      "longitude": -9.435584,
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
      "heading": 348,
      "squawk": "3255",
      "timestamp": 1654424569,
      "ems": null
    },
    {
      "latitude": 38.966084,
      "longitude": -9.436157,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "3255",
      "timestamp": 1654424575,
      "ems": null
    },
    {
      "latitude": 38.967251,
      "longitude": -9.436401,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "3255",
      "timestamp": 1654424579,
      "ems": null
    },
    {
      "latitude": 38.968506,
      "longitude": -9.436599,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "3255",
      "timestamp": 1654424582,
      "ems": null
    },
    {
      "latitude": 38.969578,
      "longitude": -9.436829,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "3255",
      "timestamp": 1654424585,
      "ems": null
    },
    {
      "latitude": 38.970879,
      "longitude": -9.437012,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3255",
      "timestamp": 1654424588,
      "ems": null
    },
    {
      "latitude": 38.972042,
      "longitude": -9.437256,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3255",
      "timestamp": 1654424591,
      "ems": null
    },
    {
      "latitude": 38.97316,
      "longitude": -9.437378,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "3255",
      "timestamp": 1654424594,
      "ems": null
    },
    {
      "latitude": 38.975395,
      "longitude": -9.437805,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "3255",
      "timestamp": 1654424599,
      "ems": null
    },
    {
      "latitude": 38.977936,
      "longitude": -9.438271,
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
      "heading": 351,
      "squawk": "3255",
      "timestamp": 1654424606,
      "ems": null
    },
    {
      "latitude": 38.980236,
      "longitude": -9.43866,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "3255",
      "timestamp": 1654424612,
      "ems": null
    },
    {
      "latitude": 38.982651,
      "longitude": -9.439107,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "3255",
      "timestamp": 1654424618,
      "ems": null
    },
    {
      "latitude": 38.985031,
      "longitude": -9.439453,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 353,
      "squawk": "3255",
      "timestamp": 1654424624,
      "ems": null
    },
    {
      "latitude": 38.987503,
      "longitude": -9.439764,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "3255",
      "timestamp": 1654424630,
      "ems": null
    },
    {
      "latitude": 38.988617,
      "longitude": -9.43988,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 356,
      "squawk": "3255",
      "timestamp": 1654424633,
      "ems": null
    },
    {
      "latitude": 38.989792,
      "longitude": -9.440002,
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
      "heading": 356,
      "squawk": "3255",
      "timestamp": 1654424635,
      "ems": null
    },
    {
      "latitude": 38.991165,
      "longitude": -9.440063,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654424639,
      "ems": null
    },
    {
      "latitude": 38.992218,
      "longitude": -9.440122,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654424641,
      "ems": null
    },
    {
      "latitude": 38.993454,
      "longitude": -9.440122,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 360,
      "squawk": "3255",
      "timestamp": 1654424645,
      "ems": null
    },
    {
      "latitude": 38.994717,
      "longitude": -9.440125,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 360,
      "squawk": "3255",
      "timestamp": 1654424648,
      "ems": null
    },
    {
      "latitude": 38.995972,
      "longitude": -9.440063,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 1,
      "squawk": "3255",
      "timestamp": 1654424651,
      "ems": null
    },
    {
      "latitude": 38.997089,
      "longitude": -9.440002,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654424654,
      "ems": null
    },
    {
      "latitude": 38.998535,
      "longitude": -9.439942,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654424657,
      "ems": null
    },
    {
      "latitude": 38.999725,
      "longitude": -9.439823,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654424660,
      "ems": null
    },
    {
      "latitude": 39.000908,
      "longitude": -9.439758,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 4,
      "squawk": "3255",
      "timestamp": 1654424663,
      "ems": null
    },
    {
      "latitude": 39.002071,
      "longitude": -9.439575,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 5,
      "squawk": "3255",
      "timestamp": 1654424666,
      "ems": null
    },
    {
      "latitude": 39.003342,
      "longitude": -9.439466,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 5,
      "squawk": "3255",
      "timestamp": 1654424669,
      "ems": null
    },
    {
      "latitude": 39.00444,
      "longitude": -9.439286,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 5,
      "squawk": "3255",
      "timestamp": 1654424672,
      "ems": null
    },
    {
      "latitude": 39.00584,
      "longitude": -9.439148,
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
      "heading": 5,
      "squawk": "3255",
      "timestamp": 1654424675,
      "ems": null
    },
    {
      "latitude": 39.00705,
      "longitude": -9.438988,
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
      "heading": 5,
      "squawk": "3255",
      "timestamp": 1654424678,
      "ems": null
    },
    {
      "latitude": 39.008148,
      "longitude": -9.438808,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 6,
      "squawk": "3255",
      "timestamp": 1654424681,
      "ems": null
    },
    {
      "latitude": 39.00938,
      "longitude": -9.438599,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654424684,
      "ems": null
    },
    {
      "latitude": 39.010574,
      "longitude": -9.438391,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 8,
      "squawk": "3255",
      "timestamp": 1654424687,
      "ems": null
    },
    {
      "latitude": 39.011799,
      "longitude": -9.438171,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 9,
      "squawk": "3255",
      "timestamp": 1654424690,
      "ems": null
    },
    {
      "latitude": 39.013008,
      "longitude": -9.437866,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 11,
      "squawk": "3255",
      "timestamp": 1654424693,
      "ems": null
    },
    {
      "latitude": 39.014126,
      "longitude": -9.437561,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 11,
      "squawk": "3255",
      "timestamp": 1654424696,
      "ems": null
    },
    {
      "latitude": 39.015564,
      "longitude": -9.437196,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424699,
      "ems": null
    },
    {
      "latitude": 39.016735,
      "longitude": -9.43689,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 11,
      "squawk": "3255",
      "timestamp": 1654424702,
      "ems": null
    },
    {
      "latitude": 39.017757,
      "longitude": -9.436584,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424705,
      "ems": null
    },
    {
      "latitude": 39.018997,
      "longitude": -9.436241,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424708,
      "ems": null
    },
    {
      "latitude": 39.02018,
      "longitude": -9.435913,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 13,
      "squawk": "3255",
      "timestamp": 1654424711,
      "ems": null
    },
    {
      "latitude": 39.021423,
      "longitude": -9.435524,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 13,
      "squawk": "3255",
      "timestamp": 1654424714,
      "ems": null
    },
    {
      "latitude": 39.022552,
      "longitude": -9.435181,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654424717,
      "ems": null
    },
    {
      "latitude": 39.023857,
      "longitude": -9.434753,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654424720,
      "ems": null
    },
    {
      "latitude": 39.026276,
      "longitude": -9.433912,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654424726,
      "ems": null
    },
    {
      "latitude": 39.02861,
      "longitude": -9.433196,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 13,
      "squawk": "3255",
      "timestamp": 1654424732,
      "ems": null
    },
    {
      "latitude": 39.031071,
      "longitude": -9.432495,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 11,
      "squawk": "3255",
      "timestamp": 1654424738,
      "ems": null
    },
    {
      "latitude": 39.033417,
      "longitude": -9.432001,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 8,
      "squawk": "3255",
      "timestamp": 1654424744,
      "ems": null
    },
    {
      "latitude": 39.034607,
      "longitude": -9.431763,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654424747,
      "ems": null
    },
    {
      "latitude": 39.03598,
      "longitude": -9.431524,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654424750,
      "ems": null
    },
    {
      "latitude": 39.037029,
      "longitude": -9.431335,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654424753,
      "ems": null
    },
    {
      "latitude": 39.038288,
      "longitude": -9.431152,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654424756,
      "ems": null
    },
    {
      "latitude": 39.039505,
      "longitude": -9.430986,
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
      "heading": 6,
      "squawk": "3255",
      "timestamp": 1654424759,
      "ems": null
    },
    {
      "latitude": 39.040695,
      "longitude": -9.430807,
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
      "heading": 6,
      "squawk": "3255",
      "timestamp": 1654424762,
      "ems": null
    },
    {
      "latitude": 39.041733,
      "longitude": -9.430664,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 4,
      "squawk": "3255",
      "timestamp": 1654424765,
      "ems": null
    },
    {
      "latitude": 39.043037,
      "longitude": -9.430603,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654424768,
      "ems": null
    },
    {
      "latitude": 39.044128,
      "longitude": -9.430509,
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
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654424771,
      "ems": null
    },
    {
      "latitude": 39.045364,
      "longitude": -9.430542,
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
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654424774,
      "ems": null
    },
    {
      "latitude": 39.046528,
      "longitude": -9.430603,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 357,
      "squawk": "3255",
      "timestamp": 1654424777,
      "ems": null
    },
    {
      "latitude": 39.047783,
      "longitude": -9.430725,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3255",
      "timestamp": 1654424780,
      "ems": null
    },
    {
      "latitude": 39.048855,
      "longitude": -9.430786,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 356,
      "squawk": "3255",
      "timestamp": 1654424783,
      "ems": null
    },
    {
      "latitude": 39.049988,
      "longitude": -9.430867,
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
      "heading": 355,
      "squawk": "3255",
      "timestamp": 1654424786,
      "ems": null
    },
    {
      "latitude": 39.051178,
      "longitude": -9.430986,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "3255",
      "timestamp": 1654424789,
      "ems": null
    },
    {
      "latitude": 39.052551,
      "longitude": -9.431166,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 353,
      "squawk": "3255",
      "timestamp": 1654424792,
      "ems": null
    },
    {
      "latitude": 39.053558,
      "longitude": -9.431285,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 353,
      "squawk": "3255",
      "timestamp": 1654424795,
      "ems": null
    },
    {
      "latitude": 39.054794,
      "longitude": -9.431524,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 351,
      "squawk": "3255",
      "timestamp": 1654424798,
      "ems": null
    },
    {
      "latitude": 39.055885,
      "longitude": -9.431763,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "3255",
      "timestamp": 1654424801,
      "ems": null
    },
    {
      "latitude": 39.056992,
      "longitude": -9.432061,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654424804,
      "ems": null
    },
    {
      "latitude": 39.058121,
      "longitude": -9.432373,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654424807,
      "ems": null
    },
    {
      "latitude": 39.05928,
      "longitude": -9.432718,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654424810,
      "ems": null
    },
    {
      "latitude": 39.060608,
      "longitude": -9.433076,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "3255",
      "timestamp": 1654424813,
      "ems": null
    },
    {
      "latitude": 39.061611,
      "longitude": -9.43335,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 348,
      "squawk": "3255",
      "timestamp": 1654424816,
      "ems": null
    },
    {
      "latitude": 39.062943,
      "longitude": -9.433673,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 349,
      "squawk": "3255",
      "timestamp": 1654424819,
      "ems": null
    },
    {
      "latitude": 39.065323,
      "longitude": -9.434151,
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
      "heading": 352,
      "squawk": "3255",
      "timestamp": 1654424825,
      "ems": null
    },
    {
      "latitude": 39.067932,
      "longitude": -9.434509,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "3255",
      "timestamp": 1654424831,
      "ems": null
    },
    {
      "latitude": 39.069153,
      "longitude": -9.434692,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 354,
      "squawk": "3255",
      "timestamp": 1654424834,
      "ems": null
    },
    {
      "latitude": 39.070362,
      "longitude": -9.434814,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "3255",
      "timestamp": 1654424837,
      "ems": null
    },
    {
      "latitude": 39.070816,
      "longitude": -9.434868,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "3255",
      "timestamp": 1654424838,
      "ems": null
    },
    {
      "latitude": 39.072735,
      "longitude": -9.435059,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 356,
      "squawk": "3255",
      "timestamp": 1654424842,
      "ems": null
    },
    {
      "latitude": 39.074249,
      "longitude": -9.435166,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3255",
      "timestamp": 1654424846,
      "ems": null
    },
    {
      "latitude": 39.074936,
      "longitude": -9.435166,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "3255",
      "timestamp": 1654424848,
      "ems": null
    },
    {
      "latitude": 39.076859,
      "longitude": -9.435225,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 359,
      "squawk": "3255",
      "timestamp": 1654424852,
      "ems": null
    },
    {
      "latitude": 39.078278,
      "longitude": -9.435242,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "3255",
      "timestamp": 1654424855,
      "ems": null
    },
    {
      "latitude": 39.079578,
      "longitude": -9.435181,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 1,
      "squawk": "3255",
      "timestamp": 1654424858,
      "ems": null
    },
    {
      "latitude": 39.080883,
      "longitude": -9.43512,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 2,
      "squawk": "3255",
      "timestamp": 1654424861,
      "ems": null
    },
    {
      "latitude": 39.082077,
      "longitude": -9.435046,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654424864,
      "ems": null
    },
    {
      "latitude": 39.083443,
      "longitude": -9.434998,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654424867,
      "ems": null
    },
    {
      "latitude": 39.084732,
      "longitude": -9.434868,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654424870,
      "ems": null
    },
    {
      "latitude": 39.086105,
      "longitude": -9.434748,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654424873,
      "ems": null
    },
    {
      "latitude": 39.087399,
      "longitude": -9.434631,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "3255",
      "timestamp": 1654424876,
      "ems": null
    },
    {
      "latitude": 39.08889,
      "longitude": -9.434448,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 5,
      "squawk": "3255",
      "timestamp": 1654424879,
      "ems": null
    },
    {
      "latitude": 39.090179,
      "longitude": -9.434271,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 5,
      "squawk": "3255",
      "timestamp": 1654424882,
      "ems": null
    },
    {
      "latitude": 39.091507,
      "longitude": -9.434092,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654424885,
      "ems": null
    },
    {
      "latitude": 39.092567,
      "longitude": -9.433899,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 9,
      "squawk": "3255",
      "timestamp": 1654424888,
      "ems": null
    },
    {
      "latitude": 39.093796,
      "longitude": -9.433614,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 11,
      "squawk": "3255",
      "timestamp": 1654424891,
      "ems": null
    },
    {
      "latitude": 39.095081,
      "longitude": -9.433289,
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
      "heading": 11,
      "squawk": "3255",
      "timestamp": 1654424894,
      "ems": null
    },
    {
      "latitude": 39.096153,
      "longitude": -9.432983,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424897,
      "ems": null
    },
    {
      "latitude": 39.097137,
      "longitude": -9.432658,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424900,
      "ems": null
    },
    {
      "latitude": 39.098202,
      "longitude": -9.432373,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424903,
      "ems": null
    },
    {
      "latitude": 39.099178,
      "longitude": -9.432068,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424906,
      "ems": null
    },
    {
      "latitude": 39.100155,
      "longitude": -9.431824,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424909,
      "ems": null
    },
    {
      "latitude": 39.100525,
      "longitude": -9.431703,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424910,
      "ems": null
    },
    {
      "latitude": 39.10146,
      "longitude": -9.431458,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424913,
      "ems": null
    },
    {
      "latitude": 39.1035,
      "longitude": -9.430807,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 13,
      "squawk": "3255",
      "timestamp": 1654424920,
      "ems": null
    },
    {
      "latitude": 39.105278,
      "longitude": -9.430298,
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
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424926,
      "ems": null
    },
    {
      "latitude": 39.10709,
      "longitude": -9.429749,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424932,
      "ems": null
    },
    {
      "latitude": 39.109047,
      "longitude": -9.429199,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424938,
      "ems": null
    },
    {
      "latitude": 39.110909,
      "longitude": -9.42865,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 12,
      "squawk": "3255",
      "timestamp": 1654424945,
      "ems": null
    },
    {
      "latitude": 39.112747,
      "longitude": -9.428121,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654424951,
      "ems": null
    },
    {
      "latitude": 39.114586,
      "longitude": -9.427368,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424957,
      "ems": null
    },
    {
      "latitude": 39.116402,
      "longitude": -9.426758,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424963,
      "ems": null
    },
    {
      "latitude": 39.117966,
      "longitude": -9.426209,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424969,
      "ems": null
    },
    {
      "latitude": 39.119427,
      "longitude": -9.425659,
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424974,
      "ems": null
    },
    {
      "latitude": 39.121616,
      "longitude": -9.424866,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 17,
      "squawk": "3255",
      "timestamp": 1654424981,
      "ems": null
    },
    {
      "latitude": 39.123245,
      "longitude": -9.424255,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654424988,
      "ems": null
    },
    {
      "latitude": 39.124969,
      "longitude": -9.423645,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654424994,
      "ems": null
    },
    {
      "latitude": 39.125851,
      "longitude": -9.423218,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 21,
      "squawk": "3255",
      "timestamp": 1654424997,
      "ems": null
    },
    {
      "latitude": 39.126133,
      "longitude": -9.423096,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 22,
      "squawk": "3255",
      "timestamp": 1654424998,
      "ems": null
    },
    {
      "latitude": 39.126526,
      "longitude": -9.422807,
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
      "heading": 30,
      "squawk": "3255",
      "timestamp": 1654425000,
      "ems": null
    },
    {
      "latitude": 39.127575,
      "longitude": -9.421875,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 38,
      "squawk": "3255",
      "timestamp": 1654425003,
      "ems": null
    },
    {
      "latitude": 39.128319,
      "longitude": -9.421021,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 41,
      "squawk": "3255",
      "timestamp": 1654425007,
      "ems": null
    },
    {
      "latitude": 39.12888,
      "longitude": -9.420166,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 50,
      "squawk": "3255",
      "timestamp": 1654425009,
      "ems": null
    },
    {
      "latitude": 39.129532,
      "longitude": -9.419128,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 52,
      "squawk": "3255",
      "timestamp": 1654425013,
      "ems": null
    },
    {
      "latitude": 39.130089,
      "longitude": -9.418091,
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
      "heading": 54,
      "squawk": "3255",
      "timestamp": 1654425016,
      "ems": null
    },
    {
      "latitude": 39.1306,
      "longitude": -9.417074,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 56,
      "squawk": "3255",
      "timestamp": 1654425019,
      "ems": null
    },
    {
      "latitude": 39.131065,
      "longitude": -9.416138,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425022,
      "ems": null
    },
    {
      "latitude": 39.131653,
      "longitude": -9.414925,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 59,
      "squawk": "3255",
      "timestamp": 1654425025,
      "ems": null
    },
    {
      "latitude": 39.132111,
      "longitude": -9.41397,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425028,
      "ems": null
    },
    {
      "latitude": 39.132614,
      "longitude": -9.412895,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 56,
      "squawk": "3255",
      "timestamp": 1654425031,
      "ems": null
    },
    {
      "latitude": 39.13316,
      "longitude": -9.411865,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 55,
      "squawk": "3255",
      "timestamp": 1654425033,
      "ems": null
    },
    {
      "latitude": 39.133804,
      "longitude": -9.410626,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425037,
      "ems": null
    },
    {
      "latitude": 39.134399,
      "longitude": -9.409492,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425040,
      "ems": null
    },
    {
      "latitude": 39.135956,
      "longitude": -9.406327,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425048,
      "ems": null
    },
    {
      "latitude": 39.137398,
      "longitude": -9.403442,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425055,
      "ems": null
    },
    {
      "latitude": 39.138561,
      "longitude": -9.401184,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 55,
      "squawk": "3255",
      "timestamp": 1654425060,
      "ems": null
    },
    {
      "latitude": 39.139801,
      "longitude": -9.398864,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 54,
      "squawk": "3255",
      "timestamp": 1654425067,
      "ems": null
    },
    {
      "latitude": 39.141174,
      "longitude": -9.396356,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 55,
      "squawk": "3255",
      "timestamp": 1654425073,
      "ems": null
    },
    {
      "latitude": 39.142181,
      "longitude": -9.394505,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 55,
      "squawk": "3255",
      "timestamp": 1654425079,
      "ems": null
    },
    {
      "latitude": 39.143692,
      "longitude": -9.391758,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 55,
      "squawk": "3255",
      "timestamp": 1654425085,
      "ems": null
    },
    {
      "latitude": 39.144928,
      "longitude": -9.389489,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "3255",
      "timestamp": 1654425091,
      "ems": null
    },
    {
      "latitude": 39.146301,
      "longitude": -9.386803,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425097,
      "ems": null
    },
    {
      "latitude": 39.147591,
      "longitude": -9.384277,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425103,
      "ems": null
    },
    {
      "latitude": 39.148956,
      "longitude": -9.381429,
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
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425109,
      "ems": null
    },
    {
      "latitude": 39.150284,
      "longitude": -9.378622,
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
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425115,
      "ems": null
    },
    {
      "latitude": 39.151596,
      "longitude": -9.375793,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425121,
      "ems": null
    },
    {
      "latitude": 39.152946,
      "longitude": -9.373108,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425127,
      "ems": null
    },
    {
      "latitude": 39.154358,
      "longitude": -9.370203,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425133,
      "ems": null
    },
    {
      "latitude": 39.15564,
      "longitude": -9.367577,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425139,
      "ems": null
    },
    {
      "latitude": 39.157276,
      "longitude": -9.364197,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425145,
      "ems": null
    },
    {
      "latitude": 39.158661,
      "longitude": -9.361247,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 59,
      "squawk": "3255",
      "timestamp": 1654425151,
      "ems": null
    },
    {
      "latitude": 39.159943,
      "longitude": -9.358262,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654425157,
      "ems": null
    },
    {
      "latitude": 39.160583,
      "longitude": -9.356709,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425160,
      "ems": null
    },
    {
      "latitude": 39.161186,
      "longitude": -9.355225,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425163,
      "ems": null
    },
    {
      "latitude": 39.161789,
      "longitude": -9.353699,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425166,
      "ems": null
    },
    {
      "latitude": 39.163055,
      "longitude": -9.350619,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "3255",
      "timestamp": 1654425172,
      "ems": null
    },
    {
      "latitude": 39.16449,
      "longitude": -9.347717,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425178,
      "ems": null
    },
    {
      "latitude": 39.165848,
      "longitude": -9.344828,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "3255",
      "timestamp": 1654425184,
      "ems": null
    },
    {
      "latitude": 39.167099,
      "longitude": -9.34198,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654425190,
      "ems": null
    },
    {
      "latitude": 39.168449,
      "longitude": -9.338928,
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
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425196,
      "ems": null
    },
    {
      "latitude": 39.16951,
      "longitude": -9.336289,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425201,
      "ems": null
    },
    {
      "latitude": 39.170151,
      "longitude": -9.334677,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425205,
      "ems": null
    },
    {
      "latitude": 39.170635,
      "longitude": -9.333374,
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
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425208,
      "ems": null
    },
    {
      "latitude": 39.171242,
      "longitude": -9.331665,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425211,
      "ems": null
    },
    {
      "latitude": 39.171707,
      "longitude": -9.330438,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425213,
      "ems": null
    },
    {
      "latitude": 39.172302,
      "longitude": -9.328706,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425217,
      "ems": null
    },
    {
      "latitude": 39.172916,
      "longitude": -9.326904,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425220,
      "ems": null
    },
    {
      "latitude": 39.173428,
      "longitude": -9.3255,
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
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425223,
      "ems": null
    },
    {
      "latitude": 39.173859,
      "longitude": -9.324049,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425226,
      "ems": null
    },
    {
      "latitude": 39.174316,
      "longitude": -9.322198,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 72,
      "squawk": "3255",
      "timestamp": 1654425229,
      "ems": null
    },
    {
      "latitude": 39.174637,
      "longitude": -9.320825,
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
      "heading": 75,
      "squawk": "3255",
      "timestamp": 1654425232,
      "ems": null
    },
    {
      "latitude": 39.175011,
      "longitude": -9.318848,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "3255",
      "timestamp": 1654425235,
      "ems": null
    },
    {
      "latitude": 39.175339,
      "longitude": -9.3172,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "3255",
      "timestamp": 1654425238,
      "ems": null
    },
    {
      "latitude": 39.175663,
      "longitude": -9.315796,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 73,
      "squawk": "3255",
      "timestamp": 1654425241,
      "ems": null
    },
    {
      "latitude": 39.176147,
      "longitude": -9.313839,
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
      "heading": 72,
      "squawk": "3255",
      "timestamp": 1654425244,
      "ems": null
    },
    {
      "latitude": 39.17688,
      "longitude": -9.310973,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425250,
      "ems": null
    },
    {
      "latitude": 39.177803,
      "longitude": -9.307495,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425256,
      "ems": null
    },
    {
      "latitude": 39.178688,
      "longitude": -9.304016,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 72,
      "squawk": "3255",
      "timestamp": 1654425262,
      "ems": null
    },
    {
      "latitude": 39.179482,
      "longitude": -9.300781,
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
      "heading": 72,
      "squawk": "3255",
      "timestamp": 1654425268,
      "ems": null
    },
    {
      "latitude": 39.180412,
      "longitude": -9.297302,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425274,
      "ems": null
    },
    {
      "latitude": 39.181297,
      "longitude": -9.293823,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425280,
      "ems": null
    },
    {
      "latitude": 39.182274,
      "longitude": -9.290344,
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
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425286,
      "ems": null
    },
    {
      "latitude": 39.183151,
      "longitude": -9.28703,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425292,
      "ems": null
    },
    {
      "latitude": 39.184021,
      "longitude": -9.283686,
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
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425298,
      "ems": null
    },
    {
      "latitude": 39.184982,
      "longitude": -9.280402,
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
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425304,
      "ems": null
    },
    {
      "latitude": 39.185577,
      "longitude": -9.278809,
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
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425307,
      "ems": null
    },
    {
      "latitude": 39.186172,
      "longitude": -9.277417,
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
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654425310,
      "ems": null
    },
    {
      "latitude": 39.186859,
      "longitude": -9.275865,
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
      "heading": 59,
      "squawk": "3255",
      "timestamp": 1654425313,
      "ems": null
    },
    {
      "latitude": 39.187443,
      "longitude": -9.274536,
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
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425316,
      "ems": null
    },
    {
      "latitude": 39.188141,
      "longitude": -9.27301,
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
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425319,
      "ems": null
    },
    {
      "latitude": 39.18869,
      "longitude": -9.271745,
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
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425322,
      "ems": null
    },
    {
      "latitude": 39.18935,
      "longitude": -9.270203,
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
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425325,
      "ems": null
    },
    {
      "latitude": 39.190048,
      "longitude": -9.268738,
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
      "heading": 59,
      "squawk": "3255",
      "timestamp": 1654425328,
      "ems": null
    },
    {
      "latitude": 39.190701,
      "longitude": -9.267273,
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
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425331,
      "ems": null
    },
    {
      "latitude": 39.192001,
      "longitude": -9.264343,
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
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654425337,
      "ems": null
    },
    {
      "latitude": 39.193176,
      "longitude": -9.261415,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425344,
      "ems": null
    },
    {
      "latitude": 39.194458,
      "longitude": -9.25831,
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
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425350,
      "ems": null
    },
    {
      "latitude": 39.195648,
      "longitude": -9.255324,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425356,
      "ems": null
    },
    {
      "latitude": 39.196239,
      "longitude": -9.253845,
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
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425359,
      "ems": null
    },
    {
      "latitude": 39.197479,
      "longitude": -9.250488,
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
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425365,
      "ems": null
    },
    {
      "latitude": 39.198708,
      "longitude": -9.247192,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425372,
      "ems": null
    },
    {
      "latitude": 39.199905,
      "longitude": -9.2441,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425378,
      "ems": null
    },
    {
      "latitude": 39.20108,
      "longitude": -9.240845,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425384,
      "ems": null
    },
    {
      "latitude": 39.20224,
      "longitude": -9.23777,
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
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425390,
      "ems": null
    },
    {
      "latitude": 39.203522,
      "longitude": -9.234666,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425397,
      "ems": null
    },
    {
      "latitude": 39.204803,
      "longitude": -9.231201,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425403,
      "ems": null
    },
    {
      "latitude": 39.205994,
      "longitude": -9.227501,
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
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425410,
      "ems": null
    },
    {
      "latitude": 39.206993,
      "longitude": -9.224121,
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
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425415,
      "ems": null
    },
    {
      "latitude": 39.207504,
      "longitude": -9.222306,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425419,
      "ems": null
    },
    {
      "latitude": 39.207924,
      "longitude": -9.220642,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425422,
      "ems": null
    },
    {
      "latitude": 39.208328,
      "longitude": -9.219141,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425424,
      "ems": null
    },
    {
      "latitude": 39.208763,
      "longitude": -9.21759,
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
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425428,
      "ems": null
    },
    {
      "latitude": 39.209881,
      "longitude": -9.214111,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425434,
      "ems": null
    },
    {
      "latitude": 39.210846,
      "longitude": -9.210544,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 72,
      "squawk": "3255",
      "timestamp": 1654425440,
      "ems": null
    },
    {
      "latitude": 39.21109,
      "longitude": -9.209656,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 73,
      "squawk": "3255",
      "timestamp": 1654425442,
      "ems": null
    },
    {
      "latitude": 39.212036,
      "longitude": -9.205289,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 73,
      "squawk": "3255",
      "timestamp": 1654425449,
      "ems": null
    },
    {
      "latitude": 39.21244,
      "longitude": -9.203552,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 75,
      "squawk": "3255",
      "timestamp": 1654425451,
      "ems": null
    },
    {
      "latitude": 39.212723,
      "longitude": -9.201945,
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
      "heading": 76,
      "squawk": "3255",
      "timestamp": 1654425454,
      "ems": null
    },
    {
      "latitude": 39.213089,
      "longitude": -9.199796,
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
      "heading": 76,
      "squawk": "3255",
      "timestamp": 1654425458,
      "ems": null
    },
    {
      "latitude": 39.213326,
      "longitude": -9.198608,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 77,
      "squawk": "3255",
      "timestamp": 1654425460,
      "ems": null
    },
    {
      "latitude": 39.213696,
      "longitude": -9.196411,
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
      "heading": 75,
      "squawk": "3255",
      "timestamp": 1654425464,
      "ems": null
    },
    {
      "latitude": 39.214645,
      "longitude": -9.193048,
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
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425470,
      "ems": null
    },
    {
      "latitude": 39.21524,
      "longitude": -9.191556,
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
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654425473,
      "ems": null
    },
    {
      "latitude": 39.215927,
      "longitude": -9.189884,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425476,
      "ems": null
    },
    {
      "latitude": 39.216721,
      "longitude": -9.188171,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425479,
      "ems": null
    },
    {
      "latitude": 39.217327,
      "longitude": -9.186768,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425481,
      "ems": null
    },
    {
      "latitude": 39.217804,
      "longitude": -9.185526,
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
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425484,
      "ems": null
    },
    {
      "latitude": 39.218628,
      "longitude": -9.183316,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425488,
      "ems": null
    },
    {
      "latitude": 39.219234,
      "longitude": -9.181763,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425491,
      "ems": null
    },
    {
      "latitude": 39.219887,
      "longitude": -9.180176,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425494,
      "ems": null
    },
    {
      "latitude": 39.220505,
      "longitude": -9.178599,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425497,
      "ems": null
    },
    {
      "latitude": 39.221786,
      "longitude": -9.175554,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654425503,
      "ems": null
    },
    {
      "latitude": 39.223068,
      "longitude": -9.172449,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425509,
      "ems": null
    },
    {
      "latitude": 39.224312,
      "longitude": -9.16925,
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
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425515,
      "ems": null
    },
    {
      "latitude": 39.22538,
      "longitude": -9.165955,
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
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425521,
      "ems": null
    },
    {
      "latitude": 39.226543,
      "longitude": -9.16272,
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
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425527,
      "ems": null
    },
    {
      "latitude": 39.227051,
      "longitude": -9.161404,
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
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425530,
      "ems": null
    },
    {
      "latitude": 39.227692,
      "longitude": -9.159433,
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
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425533,
      "ems": null
    },
    {
      "latitude": 39.228222,
      "longitude": -9.157898,
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
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425536,
      "ems": null
    },
    {
      "latitude": 39.22934,
      "longitude": -9.154776,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425542,
      "ems": null
    },
    {
      "latitude": 39.230438,
      "longitude": -9.151791,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425548,
      "ems": null
    },
    {
      "latitude": 39.231621,
      "longitude": -9.148743,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425554,
      "ems": null
    },
    {
      "latitude": 39.232819,
      "longitude": -9.14564,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425560,
      "ems": null
    },
    {
      "latitude": 39.233902,
      "longitude": -9.142456,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425566,
      "ems": null
    },
    {
      "latitude": 39.234924,
      "longitude": -9.139013,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425572,
      "ems": null
    },
    {
      "latitude": 39.235344,
      "longitude": -9.137573,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425575,
      "ems": null
    },
    {
      "latitude": 39.235855,
      "longitude": -9.135681,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425578,
      "ems": null
    },
    {
      "latitude": 39.23632,
      "longitude": -9.134033,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425581,
      "ems": null
    },
    {
      "latitude": 39.23674,
      "longitude": -9.132446,
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
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425584,
      "ems": null
    },
    {
      "latitude": 39.237251,
      "longitude": -9.130676,
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
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425587,
      "ems": null
    },
    {
      "latitude": 39.238091,
      "longitude": -9.127502,
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
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425593,
      "ems": null
    },
    {
      "latitude": 39.238998,
      "longitude": -9.124623,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425599,
      "ems": null
    },
    {
      "latitude": 39.240093,
      "longitude": -9.121399,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425605,
      "ems": null
    },
    {
      "latitude": 39.240784,
      "longitude": -9.119608,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425608,
      "ems": null
    },
    {
      "latitude": 39.241302,
      "longitude": -9.118103,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425611,
      "ems": null
    },
    {
      "latitude": 39.241928,
      "longitude": -9.116443,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425614,
      "ems": null
    },
    {
      "latitude": 39.242981,
      "longitude": -9.11304,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425620,
      "ems": null
    },
    {
      "latitude": 39.243988,
      "longitude": -9.109636,
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
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425626,
      "ems": null
    },
    {
      "latitude": 39.244793,
      "longitude": -9.107117,
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
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425630,
      "ems": null
    },
    {
      "latitude": 39.245316,
      "longitude": -9.105158,
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
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425634,
      "ems": null
    },
    {
      "latitude": 39.24577,
      "longitude": -9.103333,
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
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425637,
      "ems": null
    },
    {
      "latitude": 39.246284,
      "longitude": -9.101624,
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
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425640,
      "ems": null
    },
    {
      "latitude": 39.247353,
      "longitude": -9.098389,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425646,
      "ems": null
    },
    {
      "latitude": 39.248516,
      "longitude": -9.094849,
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
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425652,
      "ems": null
    },
    {
      "latitude": 39.249573,
      "longitude": -9.091067,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425658,
      "ems": null
    },
    {
      "latitude": 39.250351,
      "longitude": -9.088202,
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
      "heading": 72,
      "squawk": "3255",
      "timestamp": 1654425663,
      "ems": null
    },
    {
      "latitude": 39.251358,
      "longitude": -9.083801,
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
      "heading": 73,
      "squawk": "3255",
      "timestamp": 1654425670,
      "ems": null
    },
    {
      "latitude": 39.251816,
      "longitude": -9.08217,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425673,
      "ems": null
    },
    {
      "latitude": 39.252731,
      "longitude": -9.079065,
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
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425679,
      "ems": null
    },
    {
      "latitude": 39.254009,
      "longitude": -9.075195,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425685,
      "ems": null
    },
    {
      "latitude": 39.255066,
      "longitude": -9.071841,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425691,
      "ems": null
    },
    {
      "latitude": 39.255547,
      "longitude": -9.070374,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425694,
      "ems": null
    },
    {
      "latitude": 39.256012,
      "longitude": -9.068787,
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
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425697,
      "ems": null
    },
    {
      "latitude": 39.256989,
      "longitude": -9.065572,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425703,
      "ems": null
    },
    {
      "latitude": 39.257595,
      "longitude": -9.063477,
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
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425708,
      "ems": null
    },
    {
      "latitude": 39.259132,
      "longitude": -9.059204,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425715,
      "ems": null
    },
    {
      "latitude": 39.26025,
      "longitude": -9.055908,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425721,
      "ems": null
    },
    {
      "latitude": 39.261475,
      "longitude": -9.052317,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425727,
      "ems": null
    },
    {
      "latitude": 39.262711,
      "longitude": -9.048853,
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
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425733,
      "ems": null
    },
    {
      "latitude": 39.263626,
      "longitude": -9.046047,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425739,
      "ems": null
    },
    {
      "latitude": 39.264908,
      "longitude": -9.042704,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425745,
      "ems": null
    },
    {
      "latitude": 39.266441,
      "longitude": -9.038879,
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
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654425751,
      "ems": null
    },
    {
      "latitude": 39.267605,
      "longitude": -9.035645,
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
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425757,
      "ems": null
    },
    {
      "latitude": 39.268673,
      "longitude": -9.032104,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425763,
      "ems": null
    },
    {
      "latitude": 39.269623,
      "longitude": -9.028612,
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
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425769,
      "ems": null
    },
    {
      "latitude": 39.270081,
      "longitude": -9.02712,
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
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425772,
      "ems": null
    },
    {
      "latitude": 39.270584,
      "longitude": -9.025208,
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
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425775,
      "ems": null
    },
    {
      "latitude": 39.271133,
      "longitude": -9.023417,
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
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425778,
      "ems": null
    },
    {
      "latitude": 39.272167,
      "longitude": -9.020081,
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
      "heading": 68,
      "squawk": "3255",
      "timestamp": 1654425784,
      "ems": null
    },
    {
      "latitude": 39.273285,
      "longitude": -9.016551,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425790,
      "ems": null
    },
    {
      "latitude": 39.273834,
      "longitude": -9.014998,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425793,
      "ems": null
    },
    {
      "latitude": 39.274399,
      "longitude": -9.013428,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425796,
      "ems": null
    },
    {
      "latitude": 39.275528,
      "longitude": -9.010102,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425802,
      "ems": null
    },
    {
      "latitude": 39.276123,
      "longitude": -9.008491,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425805,
      "ems": null
    },
    {
      "latitude": 39.277241,
      "longitude": -9.00531,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425811,
      "ems": null
    },
    {
      "latitude": 39.278404,
      "longitude": -9.002258,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 62,
      "squawk": "3255",
      "timestamp": 1654425817,
      "ems": null
    },
    {
      "latitude": 39.279739,
      "longitude": -8.998938,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425823,
      "ems": null
    },
    {
      "latitude": 39.280975,
      "longitude": -8.995952,
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
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425830,
      "ems": null
    },
    {
      "latitude": 39.281616,
      "longitude": -8.994507,
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
      "heading": 59,
      "squawk": "3255",
      "timestamp": 1654425832,
      "ems": null
    },
    {
      "latitude": 39.28236,
      "longitude": -8.99292,
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
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425835,
      "ems": null
    },
    {
      "latitude": 39.283058,
      "longitude": -8.991394,
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
      "heading": 59,
      "squawk": "3255",
      "timestamp": 1654425838,
      "ems": null
    },
    {
      "latitude": 39.284363,
      "longitude": -8.988525,
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
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425844,
      "ems": null
    },
    {
      "latitude": 39.285759,
      "longitude": -8.985535,
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
      "heading": 58,
      "squawk": "3255",
      "timestamp": 1654425851,
      "ems": null
    },
    {
      "latitude": 39.287251,
      "longitude": -8.982422,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425857,
      "ems": null
    },
    {
      "latitude": 39.288647,
      "longitude": -8.979614,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425863,
      "ems": null
    },
    {
      "latitude": 39.29018,
      "longitude": -8.976562,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425869,
      "ems": null
    },
    {
      "latitude": 39.291626,
      "longitude": -8.973633,
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
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654425874,
      "ems": null
    },
    {
      "latitude": 39.29306,
      "longitude": -8.970575,
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
      "heading": 60,
      "squawk": "3255",
      "timestamp": 1654425881,
      "ems": null
    },
    {
      "latitude": 39.293655,
      "longitude": -8.969143,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425884,
      "ems": null
    },
    {
      "latitude": 39.294205,
      "longitude": -8.96759,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425887,
      "ems": null
    },
    {
      "latitude": 39.294743,
      "longitude": -8.966064,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425890,
      "ems": null
    },
    {
      "latitude": 39.295349,
      "longitude": -8.964426,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425893,
      "ems": null
    },
    {
      "latitude": 39.295944,
      "longitude": -8.962813,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425895,
      "ems": null
    },
    {
      "latitude": 39.296585,
      "longitude": -8.961202,
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
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425898,
      "ems": null
    },
    {
      "latitude": 39.297211,
      "longitude": -8.959534,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425902,
      "ems": null
    },
    {
      "latitude": 39.297771,
      "longitude": -8.957886,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425904,
      "ems": null
    },
    {
      "latitude": 39.29837,
      "longitude": -8.956186,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425908,
      "ems": null
    },
    {
      "latitude": 39.299026,
      "longitude": -8.954285,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425912,
      "ems": null
    },
    {
      "latitude": 39.30043,
      "longitude": -8.949857,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425920,
      "ems": null
    },
    {
      "latitude": 39.301712,
      "longitude": -8.946334,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654425926,
      "ems": null
    },
    {
      "latitude": 39.302891,
      "longitude": -8.943359,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425931,
      "ems": null
    },
    {
      "latitude": 39.304611,
      "longitude": -8.939087,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654425939,
      "ems": null
    },
    {
      "latitude": 39.30587,
      "longitude": -8.93573,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425945,
      "ems": null
    },
    {
      "latitude": 39.307034,
      "longitude": -8.932312,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425951,
      "ems": null
    },
    {
      "latitude": 39.308197,
      "longitude": -8.929016,
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
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654425957,
      "ems": null
    },
    {
      "latitude": 39.309357,
      "longitude": -8.925496,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654425963,
      "ems": null
    },
    {
      "latitude": 39.30986,
      "longitude": -8.923824,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 69,
      "squawk": "3255",
      "timestamp": 1654425966,
      "ems": null
    },
    {
      "latitude": 39.309998,
      "longitude": -8.923286,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654425967,
      "ems": null
    },
    {
      "latitude": 39.310387,
      "longitude": -8.921753,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 72,
      "squawk": "3255",
      "timestamp": 1654425969,
      "ems": null
    },
    {
      "latitude": 39.310757,
      "longitude": -8.920166,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 73,
      "squawk": "3255",
      "timestamp": 1654425972,
      "ems": null
    },
    {
      "latitude": 39.311131,
      "longitude": -8.918457,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 74,
      "squawk": "3255",
      "timestamp": 1654425975,
      "ems": null
    },
    {
      "latitude": 39.311554,
      "longitude": -8.916599,
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
      "heading": 74,
      "squawk": "3255",
      "timestamp": 1654425979,
      "ems": null
    },
    {
      "latitude": 39.31192,
      "longitude": -8.914868,
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
      "heading": 72,
      "squawk": "3255",
      "timestamp": 1654425982,
      "ems": null
    },
    {
      "latitude": 39.312386,
      "longitude": -8.913086,
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
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654425985,
      "ems": null
    },
    {
      "latitude": 39.313385,
      "longitude": -8.909972,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654425990,
      "ems": null
    },
    {
      "latitude": 39.314388,
      "longitude": -8.907837,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 55,
      "squawk": "3255",
      "timestamp": 1654425995,
      "ems": null
    },
    {
      "latitude": 39.315041,
      "longitude": -8.906738,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 49,
      "squawk": "3255",
      "timestamp": 1654425997,
      "ems": null
    },
    {
      "latitude": 39.316158,
      "longitude": -8.905212,
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
      "heading": 42,
      "squawk": "3255",
      "timestamp": 1654426001,
      "ems": null
    },
    {
      "latitude": 39.31723,
      "longitude": -8.90412,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 39,
      "squawk": "3255",
      "timestamp": 1654426004,
      "ems": null
    },
    {
      "latitude": 39.318207,
      "longitude": -8.90332,
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
      "heading": 28,
      "squawk": "3255",
      "timestamp": 1654426007,
      "ems": null
    },
    {
      "latitude": 39.319603,
      "longitude": -8.902649,
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654426010,
      "ems": null
    },
    {
      "latitude": 39.32103,
      "longitude": -8.902389,
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
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654426013,
      "ems": null
    },
    {
      "latitude": 39.321442,
      "longitude": -8.902389,
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
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654426014,
      "ems": null
    },
    {
      "latitude": 39.322998,
      "longitude": -8.902807,
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
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654426018,
      "ems": null
    },
    {
      "latitude": 39.324024,
      "longitude": -8.903259,
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
      "heading": 338,
      "squawk": "3255",
      "timestamp": 1654426020,
      "ems": null
    },
    {
      "latitude": 39.324585,
      "longitude": -8.903564,
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
      "heading": 336,
      "squawk": "3255",
      "timestamp": 1654426022,
      "ems": null
    },
    {
      "latitude": 39.325748,
      "longitude": -8.904419,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 331,
      "squawk": "3255",
      "timestamp": 1654426025,
      "ems": null
    },
    {
      "latitude": 39.326889,
      "longitude": -8.905554,
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
      "heading": 321,
      "squawk": "3255",
      "timestamp": 1654426028,
      "ems": null
    },
    {
      "latitude": 39.327621,
      "longitude": -8.906449,
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
      "heading": 318,
      "squawk": "3255",
      "timestamp": 1654426031,
      "ems": null
    },
    {
      "latitude": 39.328903,
      "longitude": -8.9083,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 308,
      "squawk": "3255",
      "timestamp": 1654426035,
      "ems": null
    },
    {
      "latitude": 39.329681,
      "longitude": -8.909733,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 305,
      "squawk": "3255",
      "timestamp": 1654426038,
      "ems": null
    },
    {
      "latitude": 39.330368,
      "longitude": -8.910927,
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
      "heading": 306,
      "squawk": "3255",
      "timestamp": 1654426041,
      "ems": null
    },
    {
      "latitude": 39.3311,
      "longitude": -8.9123,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "3255",
      "timestamp": 1654426044,
      "ems": null
    },
    {
      "latitude": 39.331707,
      "longitude": -8.913696,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 298,
      "squawk": "3255",
      "timestamp": 1654426047,
      "ems": null
    },
    {
      "latitude": 39.332199,
      "longitude": -8.915167,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 291,
      "squawk": "3255",
      "timestamp": 1654426050,
      "ems": null
    },
    {
      "latitude": 39.33252,
      "longitude": -8.91654,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 285,
      "squawk": "3255",
      "timestamp": 1654426053,
      "ems": null
    },
    {
      "latitude": 39.332794,
      "longitude": -8.918092,
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
      "heading": 279,
      "squawk": "3255",
      "timestamp": 1654426056,
      "ems": null
    },
    {
      "latitude": 39.332916,
      "longitude": -8.919678,
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
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426059,
      "ems": null
    },
    {
      "latitude": 39.332977,
      "longitude": -8.921435,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426062,
      "ems": null
    },
    {
      "latitude": 39.333012,
      "longitude": -8.923096,
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
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426065,
      "ems": null
    },
    {
      "latitude": 39.333023,
      "longitude": -8.92472,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426068,
      "ems": null
    },
    {
      "latitude": 39.333023,
      "longitude": -8.926571,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426071,
      "ems": null
    },
    {
      "latitude": 39.333069,
      "longitude": -8.928422,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426074,
      "ems": null
    },
    {
      "latitude": 39.333023,
      "longitude": -8.930094,
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
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654426077,
      "ems": null
    },
    {
      "latitude": 39.332932,
      "longitude": -8.931825,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654426080,
      "ems": null
    },
    {
      "latitude": 39.332825,
      "longitude": -8.933716,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654426083,
      "ems": null
    },
    {
      "latitude": 39.332729,
      "longitude": -8.935486,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654426086,
      "ems": null
    },
    {
      "latitude": 39.332611,
      "longitude": -8.937199,
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
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654426089,
      "ems": null
    },
    {
      "latitude": 39.332497,
      "longitude": -8.939026,
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
      "heading": 264,
      "squawk": "3255",
      "timestamp": 1654426093,
      "ems": null
    },
    {
      "latitude": 39.332359,
      "longitude": -8.940552,
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
      "heading": 263,
      "squawk": "3255",
      "timestamp": 1654426095,
      "ems": null
    },
    {
      "latitude": 39.332199,
      "longitude": -8.942334,
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
      "heading": 264,
      "squawk": "3255",
      "timestamp": 1654426098,
      "ems": null
    },
    {
      "latitude": 39.332016,
      "longitude": -8.946035,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 266,
      "squawk": "3255",
      "timestamp": 1654426105,
      "ems": null
    },
    {
      "latitude": 39.33194,
      "longitude": -8.949402,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426110,
      "ems": null
    },
    {
      "latitude": 39.33197,
      "longitude": -8.95123,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426113,
      "ems": null
    },
    {
      "latitude": 39.331879,
      "longitude": -8.954872,
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
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654426120,
      "ems": null
    },
    {
      "latitude": 39.331833,
      "longitude": -8.956664,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 269,
      "squawk": "3255",
      "timestamp": 1654426123,
      "ems": null
    },
    {
      "latitude": 39.331879,
      "longitude": -8.958157,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426125,
      "ems": null
    },
    {
      "latitude": 39.332062,
      "longitude": -8.960127,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 276,
      "squawk": "3255",
      "timestamp": 1654426129,
      "ems": null
    },
    {
      "latitude": 39.332245,
      "longitude": -8.961799,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 277,
      "squawk": "3255",
      "timestamp": 1654426132,
      "ems": null
    },
    {
      "latitude": 39.332382,
      "longitude": -8.963531,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 276,
      "squawk": "3255",
      "timestamp": 1654426135,
      "ems": null
    },
    {
      "latitude": 39.33252,
      "longitude": -8.965202,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 275,
      "squawk": "3255",
      "timestamp": 1654426137,
      "ems": null
    },
    {
      "latitude": 39.332638,
      "longitude": -8.96698,
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
      "heading": 275,
      "squawk": "3255",
      "timestamp": 1654426141,
      "ems": null
    },
    {
      "latitude": 39.332779,
      "longitude": -8.968872,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 275,
      "squawk": "3255",
      "timestamp": 1654426144,
      "ems": null
    },
    {
      "latitude": 39.33287,
      "longitude": -8.970581,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426147,
      "ems": null
    },
    {
      "latitude": 39.332977,
      "longitude": -8.972069,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426150,
      "ems": null
    },
    {
      "latitude": 39.333115,
      "longitude": -8.974218,
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
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426153,
      "ems": null
    },
    {
      "latitude": 39.333195,
      "longitude": -8.977356,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426159,
      "ems": null
    },
    {
      "latitude": 39.333252,
      "longitude": -8.979413,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426162,
      "ems": null
    },
    {
      "latitude": 39.333298,
      "longitude": -8.981144,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426165,
      "ems": null
    },
    {
      "latitude": 39.333336,
      "longitude": -8.982727,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426168,
      "ems": null
    },
    {
      "latitude": 39.33329,
      "longitude": -8.984558,
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
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654426171,
      "ems": null
    },
    {
      "latitude": 39.333252,
      "longitude": -8.98604,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 266,
      "squawk": "3255",
      "timestamp": 1654426173,
      "ems": null
    },
    {
      "latitude": 39.333149,
      "longitude": -8.987915,
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
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654426177,
      "ems": null
    },
    {
      "latitude": 39.332962,
      "longitude": -8.989563,
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
      "heading": 262,
      "squawk": "3255",
      "timestamp": 1654426180,
      "ems": null
    },
    {
      "latitude": 39.332748,
      "longitude": -8.991295,
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
      "heading": 258,
      "squawk": "3255",
      "timestamp": 1654426183,
      "ems": null
    },
    {
      "latitude": 39.332474,
      "longitude": -8.992727,
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
      "heading": 257,
      "squawk": "3255",
      "timestamp": 1654426185,
      "ems": null
    },
    {
      "latitude": 39.332264,
      "longitude": -8.99408,
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
      "heading": 258,
      "squawk": "3255",
      "timestamp": 1654426188,
      "ems": null
    },
    {
      "latitude": 39.331879,
      "longitude": -8.99625,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "3255",
      "timestamp": 1654426192,
      "ems": null
    },
    {
      "latitude": 39.331512,
      "longitude": -8.997863,
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
      "heading": 254,
      "squawk": "3255",
      "timestamp": 1654426195,
      "ems": null
    },
    {
      "latitude": 39.331146,
      "longitude": -8.999512,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 255,
      "squawk": "3255",
      "timestamp": 1654426198,
      "ems": null
    },
    {
      "latitude": 39.330914,
      "longitude": -9.000854,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 256,
      "squawk": "3255",
      "timestamp": 1654426201,
      "ems": null
    },
    {
      "latitude": 39.330597,
      "longitude": -9.002699,
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
      "heading": 256,
      "squawk": "3255",
      "timestamp": 1654426204,
      "ems": null
    },
    {
      "latitude": 39.330311,
      "longitude": -9.004272,
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
      "heading": 256,
      "squawk": "3255",
      "timestamp": 1654426207,
      "ems": null
    },
    {
      "latitude": 39.329983,
      "longitude": -9.00592,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "3255",
      "timestamp": 1654426210,
      "ems": null
    },
    {
      "latitude": 39.329636,
      "longitude": -9.007476,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654426213,
      "ems": null
    },
    {
      "latitude": 39.328995,
      "longitude": -9.010282,
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
      "heading": 254,
      "squawk": "3255",
      "timestamp": 1654426219,
      "ems": null
    },
    {
      "latitude": 39.328262,
      "longitude": -9.013685,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654426225,
      "ems": null
    },
    {
      "latitude": 39.32761,
      "longitude": -9.016357,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654426231,
      "ems": null
    },
    {
      "latitude": 39.326843,
      "longitude": -9.019537,
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
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654426237,
      "ems": null
    },
    {
      "latitude": 39.326157,
      "longitude": -9.022701,
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
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654426243,
      "ems": null
    },
    {
      "latitude": 39.325375,
      "longitude": -9.026001,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 254,
      "squawk": "3255",
      "timestamp": 1654426249,
      "ems": null
    },
    {
      "latitude": 39.324738,
      "longitude": -9.029269,
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
      "heading": 257,
      "squawk": "3255",
      "timestamp": 1654426255,
      "ems": null
    },
    {
      "latitude": 39.324509,
      "longitude": -9.031,
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
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654426258,
      "ems": null
    },
    {
      "latitude": 39.324352,
      "longitude": -9.032104,
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
      "heading": 261,
      "squawk": "3255",
      "timestamp": 1654426260,
      "ems": null
    },
    {
      "latitude": 39.324142,
      "longitude": -9.034464,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654426264,
      "ems": null
    },
    {
      "latitude": 39.324097,
      "longitude": -9.036374,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654426267,
      "ems": null
    },
    {
      "latitude": 39.324051,
      "longitude": -9.038285,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654426270,
      "ems": null
    },
    {
      "latitude": 39.324024,
      "longitude": -9.039917,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654426273,
      "ems": null
    },
    {
      "latitude": 39.323978,
      "longitude": -9.041992,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654426276,
      "ems": null
    },
    {
      "latitude": 39.323978,
      "longitude": -9.042297,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654426277,
      "ems": null
    },
    {
      "latitude": 39.323978,
      "longitude": -9.044983,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426281,
      "ems": null
    },
    {
      "latitude": 39.324005,
      "longitude": -9.046704,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426284,
      "ems": null
    },
    {
      "latitude": 39.324005,
      "longitude": -9.047898,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426286,
      "ems": null
    },
    {
      "latitude": 39.324097,
      "longitude": -9.049391,
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
      "heading": 273,
      "squawk": "3255",
      "timestamp": 1654426289,
      "ems": null
    },
    {
      "latitude": 39.324142,
      "longitude": -9.051123,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426292,
      "ems": null
    },
    {
      "latitude": 39.324211,
      "longitude": -9.054688,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426298,
      "ems": null
    },
    {
      "latitude": 39.324257,
      "longitude": -9.058105,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426304,
      "ems": null
    },
    {
      "latitude": 39.324306,
      "longitude": -9.059875,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426307,
      "ems": null
    },
    {
      "latitude": 39.324463,
      "longitude": -9.063243,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426313,
      "ems": null
    },
    {
      "latitude": 39.324677,
      "longitude": -9.066833,
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
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426319,
      "ems": null
    },
    {
      "latitude": 39.324783,
      "longitude": -9.07005,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426325,
      "ems": null
    },
    {
      "latitude": 39.324863,
      "longitude": -9.073425,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426331,
      "ems": null
    },
    {
      "latitude": 39.324955,
      "longitude": -9.077148,
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
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426338,
      "ems": null
    },
    {
      "latitude": 39.324966,
      "longitude": -9.080916,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426344,
      "ems": null
    },
    {
      "latitude": 39.325005,
      "longitude": -9.084412,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426349,
      "ems": null
    },
    {
      "latitude": 39.32505,
      "longitude": -9.088196,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426355,
      "ems": null
    },
    {
      "latitude": 39.325188,
      "longitude": -9.09198,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426361,
      "ems": null
    },
    {
      "latitude": 39.325283,
      "longitude": -9.095642,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426368,
      "ems": null
    },
    {
      "latitude": 39.325333,
      "longitude": -9.099188,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426374,
      "ems": null
    },
    {
      "latitude": 39.32542,
      "longitude": -9.102478,
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
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426380,
      "ems": null
    },
    {
      "latitude": 39.325562,
      "longitude": -9.106323,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426386,
      "ems": null
    },
    {
      "latitude": 39.325607,
      "longitude": -9.109741,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426392,
      "ems": null
    },
    {
      "latitude": 39.325607,
      "longitude": -9.11322,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "3255",
      "timestamp": 1654426397,
      "ems": null
    },
    {
      "latitude": 39.325562,
      "longitude": -9.116638,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654426403,
      "ems": null
    },
    {
      "latitude": 39.32547,
      "longitude": -9.118652,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 266,
      "squawk": "3255",
      "timestamp": 1654426407,
      "ems": null
    },
    {
      "latitude": 39.32542,
      "longitude": -9.119934,
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
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654426409,
      "ems": null
    },
    {
      "latitude": 39.325378,
      "longitude": -9.123309,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426415,
      "ems": null
    },
    {
      "latitude": 39.32547,
      "longitude": -9.12738,
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
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426423,
      "ems": null
    },
    {
      "latitude": 39.32547,
      "longitude": -9.130475,
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
      "heading": 266,
      "squawk": "3255",
      "timestamp": 1654426428,
      "ems": null
    },
    {
      "latitude": 39.325237,
      "longitude": -9.132568,
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
      "heading": 259,
      "squawk": "3255",
      "timestamp": 1654426432,
      "ems": null
    },
    {
      "latitude": 39.324863,
      "longitude": -9.134033,
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
      "heading": 248,
      "squawk": "3255",
      "timestamp": 1654426434,
      "ems": null
    },
    {
      "latitude": 39.324097,
      "longitude": -9.135789,
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
      "heading": 236,
      "squawk": "3255",
      "timestamp": 1654426438,
      "ems": null
    },
    {
      "latitude": 39.323189,
      "longitude": -9.137024,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 223,
      "squawk": "3255",
      "timestamp": 1654426441,
      "ems": null
    },
    {
      "latitude": 39.322208,
      "longitude": -9.138062,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 216,
      "squawk": "3255",
      "timestamp": 1654426444,
      "ems": null
    },
    {
      "latitude": 39.320625,
      "longitude": -9.139221,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 205,
      "squawk": "3255",
      "timestamp": 1654426446,
      "ems": null
    },
    {
      "latitude": 39.319046,
      "longitude": -9.139832,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654426450,
      "ems": null
    },
    {
      "latitude": 39.317463,
      "longitude": -9.140076,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 186,
      "squawk": "3255",
      "timestamp": 1654426453,
      "ems": null
    },
    {
      "latitude": 39.316158,
      "longitude": -9.140015,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 174,
      "squawk": "3255",
      "timestamp": 1654426456,
      "ems": null
    },
    {
      "latitude": 39.31517,
      "longitude": -9.139789,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 170,
      "squawk": "3255",
      "timestamp": 1654426457,
      "ems": null
    },
    {
      "latitude": 39.31366,
      "longitude": -9.139252,
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
      "heading": 159,
      "squawk": "3255",
      "timestamp": 1654426460,
      "ems": null
    },
    {
      "latitude": 39.311829,
      "longitude": -9.138062,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 149,
      "squawk": "3255",
      "timestamp": 1654426464,
      "ems": null
    },
    {
      "latitude": 39.310291,
      "longitude": -9.136475,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "3255",
      "timestamp": 1654426468,
      "ems": null
    },
    {
      "latitude": 39.309265,
      "longitude": -9.134953,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "3255",
      "timestamp": 1654426471,
      "ems": null
    },
    {
      "latitude": 39.308395,
      "longitude": -9.133042,
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
      "heading": 118,
      "squawk": "3255",
      "timestamp": 1654426474,
      "ems": null
    },
    {
      "latitude": 39.308212,
      "longitude": -9.132385,
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
      "heading": 112,
      "squawk": "3255",
      "timestamp": 1654426475,
      "ems": null
    },
    {
      "latitude": 39.307827,
      "longitude": -9.130371,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 100,
      "squawk": "3255",
      "timestamp": 1654426479,
      "ems": null
    },
    {
      "latitude": 39.307777,
      "longitude": -9.12854,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 87,
      "squawk": "3255",
      "timestamp": 1654426482,
      "ems": null
    },
    {
      "latitude": 39.308029,
      "longitude": -9.126773,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 75,
      "squawk": "3255",
      "timestamp": 1654426485,
      "ems": null
    },
    {
      "latitude": 39.308525,
      "longitude": -9.125122,
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
      "heading": 66,
      "squawk": "3255",
      "timestamp": 1654426488,
      "ems": null
    },
    {
      "latitude": 39.309223,
      "longitude": -9.123596,
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
      "heading": 56,
      "squawk": "3255",
      "timestamp": 1654426491,
      "ems": null
    },
    {
      "latitude": 39.310059,
      "longitude": -9.122314,
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
      "heading": 49,
      "squawk": "3255",
      "timestamp": 1654426494,
      "ems": null
    },
    {
      "latitude": 39.311096,
      "longitude": -9.12122,
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
      "heading": 34,
      "squawk": "3255",
      "timestamp": 1654426497,
      "ems": null
    },
    {
      "latitude": 39.312202,
      "longitude": -9.120422,
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
      "heading": 26,
      "squawk": "3255",
      "timestamp": 1654426500,
      "ems": null
    },
    {
      "latitude": 39.313522,
      "longitude": -9.119906,
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
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654426503,
      "ems": null
    },
    {
      "latitude": 39.314854,
      "longitude": -9.11969,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654426506,
      "ems": null
    },
    {
      "latitude": 39.315948,
      "longitude": -9.119727,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 356,
      "squawk": "3255",
      "timestamp": 1654426508,
      "ems": null
    },
    {
      "latitude": 39.317368,
      "longitude": -9.120117,
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
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654426512,
      "ems": null
    },
    {
      "latitude": 39.318375,
      "longitude": -9.120623,
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
      "heading": 333,
      "squawk": "3255",
      "timestamp": 1654426515,
      "ems": null
    },
    {
      "latitude": 39.31929,
      "longitude": -9.121399,
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
      "heading": 320,
      "squawk": "3255",
      "timestamp": 1654426518,
      "ems": null
    },
    {
      "latitude": 39.320534,
      "longitude": -9.123108,
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
      "heading": 307,
      "squawk": "3255",
      "timestamp": 1654426521,
      "ems": null
    },
    {
      "latitude": 39.321304,
      "longitude": -9.124504,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 304,
      "squawk": "3255",
      "timestamp": 1654426524,
      "ems": null
    },
    {
      "latitude": 39.322083,
      "longitude": -9.125937,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "3255",
      "timestamp": 1654426527,
      "ems": null
    },
    {
      "latitude": 39.322674,
      "longitude": -9.127197,
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
      "heading": 297,
      "squawk": "3255",
      "timestamp": 1654426529,
      "ems": null
    },
    {
      "latitude": 39.323189,
      "longitude": -9.12915,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 288,
      "squawk": "3255",
      "timestamp": 1654426533,
      "ems": null
    },
    {
      "latitude": 39.323318,
      "longitude": -9.131191,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426536,
      "ems": null
    },
    {
      "latitude": 39.323273,
      "longitude": -9.132863,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654426539,
      "ems": null
    },
    {
      "latitude": 39.323139,
      "longitude": -9.134888,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 264,
      "squawk": "3255",
      "timestamp": 1654426542,
      "ems": null
    },
    {
      "latitude": 39.322998,
      "longitude": -9.136804,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 264,
      "squawk": "3255",
      "timestamp": 1654426545,
      "ems": null
    },
    {
      "latitude": 39.322906,
      "longitude": -9.138916,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654426548,
      "ems": null
    },
    {
      "latitude": 39.322861,
      "longitude": -9.140924,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654426551,
      "ems": null
    },
    {
      "latitude": 39.322861,
      "longitude": -9.142761,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654426554,
      "ems": null
    },
    {
      "latitude": 39.322815,
      "longitude": -9.143849,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654426557,
      "ems": null
    },
    {
      "latitude": 39.322815,
      "longitude": -9.146596,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426560,
      "ems": null
    },
    {
      "latitude": 39.322861,
      "longitude": -9.148088,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426563,
      "ems": null
    },
    {
      "latitude": 39.322952,
      "longitude": -9.152089,
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
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426569,
      "ems": null
    },
    {
      "latitude": 39.323048,
      "longitude": -9.153809,
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
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426572,
      "ems": null
    },
    {
      "latitude": 39.323189,
      "longitude": -9.155579,
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
      "heading": 276,
      "squawk": "3255",
      "timestamp": 1654426575,
      "ems": null
    },
    {
      "latitude": 39.323326,
      "longitude": -9.157349,
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
      "heading": 275,
      "squawk": "3255",
      "timestamp": 1654426578,
      "ems": null
    },
    {
      "latitude": 39.323513,
      "longitude": -9.15918,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 276,
      "squawk": "3255",
      "timestamp": 1654426581,
      "ems": null
    },
    {
      "latitude": 39.323639,
      "longitude": -9.160807,
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
      "heading": 277,
      "squawk": "3255",
      "timestamp": 1654426584,
      "ems": null
    },
    {
      "latitude": 39.323776,
      "longitude": -9.162538,
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
      "heading": 275,
      "squawk": "3255",
      "timestamp": 1654426587,
      "ems": null
    },
    {
      "latitude": 39.323959,
      "longitude": -9.165881,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 273,
      "squawk": "3255",
      "timestamp": 1654426593,
      "ems": null
    },
    {
      "latitude": 39.324097,
      "longitude": -9.169106,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426599,
      "ems": null
    },
    {
      "latitude": 39.324165,
      "longitude": -9.172729,
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
      "heading": 269,
      "squawk": "3255",
      "timestamp": 1654426605,
      "ems": null
    },
    {
      "latitude": 39.32428,
      "longitude": -9.176211,
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
      "heading": 273,
      "squawk": "3255",
      "timestamp": 1654426611,
      "ems": null
    },
    {
      "latitude": 39.324306,
      "longitude": -9.177551,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426613,
      "ems": null
    },
    {
      "latitude": 39.324509,
      "longitude": -9.181406,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "3255",
      "timestamp": 1654426620,
      "ems": null
    },
    {
      "latitude": 39.324692,
      "longitude": -9.186004,
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
      "heading": 273,
      "squawk": "3255",
      "timestamp": 1654426628,
      "ems": null
    },
    {
      "latitude": 39.324875,
      "longitude": -9.189944,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426635,
      "ems": null
    },
    {
      "latitude": 39.324955,
      "longitude": -9.193604,
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
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426642,
      "ems": null
    },
    {
      "latitude": 39.325012,
      "longitude": -9.197348,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654426649,
      "ems": null
    },
    {
      "latitude": 39.325012,
      "longitude": -9.201408,
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
      "heading": 269,
      "squawk": "3255",
      "timestamp": 1654426655,
      "ems": null
    },
    {
      "latitude": 39.325012,
      "longitude": -9.204811,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426661,
      "ems": null
    },
    {
      "latitude": 39.325096,
      "longitude": -9.209473,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426668,
      "ems": null
    },
    {
      "latitude": 39.325012,
      "longitude": -9.21323,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654426674,
      "ems": null
    },
    {
      "latitude": 39.325012,
      "longitude": -9.216872,
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
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426680,
      "ems": null
    },
    {
      "latitude": 39.32505,
      "longitude": -9.220459,
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
      "heading": 270,
      "squawk": "3255",
      "timestamp": 1654426686,
      "ems": null
    },
    {
      "latitude": 39.32515,
      "longitude": -9.223978,
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
      "heading": 273,
      "squawk": "3255",
      "timestamp": 1654426692,
      "ems": null
    },
    {
      "latitude": 39.325287,
      "longitude": -9.225709,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 275,
      "squawk": "3255",
      "timestamp": 1654426695,
      "ems": null
    },
    {
      "latitude": 39.325378,
      "longitude": -9.227381,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 274,
      "squawk": "3255",
      "timestamp": 1654426698,
      "ems": null
    },
    {
      "latitude": 39.325287,
      "longitude": -9.230844,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "3255",
      "timestamp": 1654426704,
      "ems": null
    },
    {
      "latitude": 39.325005,
      "longitude": -9.232727,
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
      "heading": 256,
      "squawk": "3255",
      "timestamp": 1654426707,
      "ems": null
    },
    {
      "latitude": 39.324585,
      "longitude": -9.234558,
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
      "heading": 251,
      "squawk": "3255",
      "timestamp": 1654426710,
      "ems": null
    },
    {
      "latitude": 39.32407,
      "longitude": -9.236328,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 247,
      "squawk": "3255",
      "timestamp": 1654426713,
      "ems": null
    },
    {
      "latitude": 39.323456,
      "longitude": -9.238069,
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
      "heading": 245,
      "squawk": "3255",
      "timestamp": 1654426716,
      "ems": null
    },
    {
      "latitude": 39.322952,
      "longitude": -9.239502,
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
      "heading": 244,
      "squawk": "3255",
      "timestamp": 1654426719,
      "ems": null
    },
    {
      "latitude": 39.322258,
      "longitude": -9.241272,
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
      "heading": 243,
      "squawk": "3255",
      "timestamp": 1654426722,
      "ems": null
    },
    {
      "latitude": 39.321625,
      "longitude": -9.242965,
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
      "heading": 242,
      "squawk": "3255",
      "timestamp": 1654426725,
      "ems": null
    },
    {
      "latitude": 39.320999,
      "longitude": -9.244507,
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
      "heading": 242,
      "squawk": "3255",
      "timestamp": 1654426728,
      "ems": null
    },
    {
      "latitude": 39.320343,
      "longitude": -9.24607,
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
      "heading": 242,
      "squawk": "3255",
      "timestamp": 1654426731,
      "ems": null
    },
    {
      "latitude": 39.319695,
      "longitude": -9.247559,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "3255",
      "timestamp": 1654426734,
      "ems": null
    },
    {
      "latitude": 39.31897,
      "longitude": -9.249234,
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
      "heading": 238,
      "squawk": "3255",
      "timestamp": 1654426737,
      "ems": null
    },
    {
      "latitude": 39.318146,
      "longitude": -9.250906,
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
      "heading": 237,
      "squawk": "3255",
      "timestamp": 1654426740,
      "ems": null
    },
    {
      "latitude": 39.317413,
      "longitude": -9.252339,
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
      "heading": 237,
      "squawk": "3255",
      "timestamp": 1654426743,
      "ems": null
    },
    {
      "latitude": 39.316635,
      "longitude": -9.254011,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 238,
      "squawk": "3255",
      "timestamp": 1654426746,
      "ems": null
    },
    {
      "latitude": 39.315994,
      "longitude": -9.255384,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 239,
      "squawk": "3255",
      "timestamp": 1654426749,
      "ems": null
    },
    {
      "latitude": 39.314758,
      "longitude": -9.258131,
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
      "heading": 240,
      "squawk": "3255",
      "timestamp": 1654426755,
      "ems": null
    },
    {
      "latitude": 39.313133,
      "longitude": -9.261963,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "3255",
      "timestamp": 1654426761,
      "ems": null
    },
    {
      "latitude": 39.31192,
      "longitude": -9.265137,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 244,
      "squawk": "3255",
      "timestamp": 1654426767,
      "ems": null
    },
    {
      "latitude": 39.311234,
      "longitude": -9.266968,
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
      "heading": 244,
      "squawk": "3255",
      "timestamp": 1654426770,
      "ems": null
    },
    {
      "latitude": 39.310619,
      "longitude": -9.268677,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 245,
      "squawk": "3255",
      "timestamp": 1654426773,
      "ems": null
    },
    {
      "latitude": 39.310059,
      "longitude": -9.270325,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 246,
      "squawk": "3255",
      "timestamp": 1654426777,
      "ems": null
    },
    {
      "latitude": 39.30954,
      "longitude": -9.271804,
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
      "heading": 244,
      "squawk": "3255",
      "timestamp": 1654426779,
      "ems": null
    },
    {
      "latitude": 39.307663,
      "longitude": -9.276581,
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
      "heading": 241,
      "squawk": "3255",
      "timestamp": 1654426788,
      "ems": null
    },
    {
      "latitude": 39.306335,
      "longitude": -9.279745,
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
      "heading": 241,
      "squawk": "3255",
      "timestamp": 1654426794,
      "ems": null
    },
    {
      "latitude": 39.304798,
      "longitude": -9.283142,
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
      "heading": 239,
      "squawk": "3255",
      "timestamp": 1654426801,
      "ems": null
    },
    {
      "latitude": 39.304184,
      "longitude": -9.284582,
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
      "heading": 240,
      "squawk": "3255",
      "timestamp": 1654426803,
      "ems": null
    },
    {
      "latitude": 39.303543,
      "longitude": -9.286072,
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
      "heading": 240,
      "squawk": "3255",
      "timestamp": 1654426806,
      "ems": null
    },
    {
      "latitude": 39.302261,
      "longitude": -9.28912,
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
      "heading": 241,
      "squawk": "3255",
      "timestamp": 1654426813,
      "ems": null
    },
    {
      "latitude": 39.301075,
      "longitude": -9.292114,
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
      "heading": 243,
      "squawk": "3255",
      "timestamp": 1654426818,
      "ems": null
    },
    {
      "latitude": 39.300423,
      "longitude": -9.293823,
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
      "heading": 246,
      "squawk": "3255",
      "timestamp": 1654426822,
      "ems": null
    },
    {
      "latitude": 39.299927,
      "longitude": -9.295389,
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
      "heading": 246,
      "squawk": "3255",
      "timestamp": 1654426824,
      "ems": null
    },
    {
      "latitude": 39.298702,
      "longitude": -9.298767,
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
      "heading": 243,
      "squawk": "3255",
      "timestamp": 1654426830,
      "ems": null
    },
    {
      "latitude": 39.297489,
      "longitude": -9.302002,
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
      "heading": 245,
      "squawk": "3255",
      "timestamp": 1654426837,
      "ems": null
    },
    {
      "latitude": 39.296906,
      "longitude": -9.303688,
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
      "heading": 247,
      "squawk": "3255",
      "timestamp": 1654426840,
      "ems": null
    },
    {
      "latitude": 39.296371,
      "longitude": -9.305359,
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
      "heading": 248,
      "squawk": "3255",
      "timestamp": 1654426843,
      "ems": null
    },
    {
      "latitude": 39.295956,
      "longitude": -9.306824,
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
      "heading": 249,
      "squawk": "3255",
      "timestamp": 1654426845,
      "ems": null
    },
    {
      "latitude": 39.29549,
      "longitude": -9.308533,
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
      "heading": 251,
      "squawk": "3255",
      "timestamp": 1654426849,
      "ems": null
    },
    {
      "latitude": 39.294605,
      "longitude": -9.31189,
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
      "heading": 250,
      "squawk": "3255",
      "timestamp": 1654426854,
      "ems": null
    },
    {
      "latitude": 39.294159,
      "longitude": -9.31354,
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
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654426857,
      "ems": null
    },
    {
      "latitude": 39.293766,
      "longitude": -9.315369,
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
      "heading": 255,
      "squawk": "3255",
      "timestamp": 1654426860,
      "ems": null
    },
    {
      "latitude": 39.293488,
      "longitude": -9.317017,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 257,
      "squawk": "3255",
      "timestamp": 1654426863,
      "ems": null
    },
    {
      "latitude": 39.293255,
      "longitude": -9.318481,
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
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654426867,
      "ems": null
    },
    {
      "latitude": 39.292976,
      "longitude": -9.320557,
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
      "heading": 261,
      "squawk": "3255",
      "timestamp": 1654426869,
      "ems": null
    },
    {
      "latitude": 39.292789,
      "longitude": -9.322327,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654426872,
      "ems": null
    },
    {
      "latitude": 39.292557,
      "longitude": -9.323914,
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
      "heading": 261,
      "squawk": "3255",
      "timestamp": 1654426875,
      "ems": null
    },
    {
      "latitude": 39.292328,
      "longitude": -9.325959,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "3255",
      "timestamp": 1654426879,
      "ems": null
    },
    {
      "latitude": 39.292137,
      "longitude": -9.327637,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654426882,
      "ems": null
    },
    {
      "latitude": 39.29187,
      "longitude": -9.329482,
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
      "heading": 258,
      "squawk": "3255",
      "timestamp": 1654426885,
      "ems": null
    },
    {
      "latitude": 39.291161,
      "longitude": -9.333496,
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
      "heading": 256,
      "squawk": "3255",
      "timestamp": 1654426892,
      "ems": null
    },
    {
      "latitude": 39.290817,
      "longitude": -9.335155,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 255,
      "squawk": "3255",
      "timestamp": 1654426895,
      "ems": null
    },
    {
      "latitude": 39.290413,
      "longitude": -9.33728,
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
      "heading": 256,
      "squawk": "3255",
      "timestamp": 1654426898,
      "ems": null
    },
    {
      "latitude": 39.289719,
      "longitude": -9.341186,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "3255",
      "timestamp": 1654426905,
      "ems": null
    },
    {
      "latitude": 39.289307,
      "longitude": -9.343036,
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
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654426908,
      "ems": null
    },
    {
      "latitude": 39.288712,
      "longitude": -9.344648,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 240,
      "squawk": "3255",
      "timestamp": 1654426911,
      "ems": null
    },
    {
      "latitude": 39.287716,
      "longitude": -9.34613,
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
      "heading": 225,
      "squawk": "3255",
      "timestamp": 1654426914,
      "ems": null
    },
    {
      "latitude": 39.286457,
      "longitude": -9.34729,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 212,
      "squawk": "3255",
      "timestamp": 1654426918,
      "ems": null
    },
    {
      "latitude": 39.284828,
      "longitude": -9.348267,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654426921,
      "ems": null
    },
    {
      "latitude": 39.283245,
      "longitude": -9.348816,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654426924,
      "ems": null
    },
    {
      "latitude": 39.281342,
      "longitude": -9.349186,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 187,
      "squawk": "3255",
      "timestamp": 1654426927,
      "ems": null
    },
    {
      "latitude": 39.279785,
      "longitude": -9.349425,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 186,
      "squawk": "3255",
      "timestamp": 1654426930,
      "ems": null
    },
    {
      "latitude": 39.278091,
      "longitude": -9.349664,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654426933,
      "ems": null
    },
    {
      "latitude": 39.276215,
      "longitude": -9.349902,
      "altitude": {
        "feet": 1200,
        "meters": 366
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654426937,
      "ems": null
    },
    {
      "latitude": 39.274261,
      "longitude": -9.350159,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654426940,
      "ems": null
    },
    {
      "latitude": 39.272827,
      "longitude": -9.350321,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654426942,
      "ems": null
    },
    {
      "latitude": 39.271141,
      "longitude": -9.350403,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 181,
      "squawk": "3255",
      "timestamp": 1654426945,
      "ems": null
    },
    {
      "latitude": 39.269165,
      "longitude": -9.350321,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 178,
      "squawk": "3255",
      "timestamp": 1654426949,
      "ems": null
    },
    {
      "latitude": 39.267418,
      "longitude": -9.350281,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 178,
      "squawk": "3255",
      "timestamp": 1654426952,
      "ems": null
    },
    {
      "latitude": 39.266068,
      "longitude": -9.35022,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 180,
      "squawk": "3255",
      "timestamp": 1654426954,
      "ems": null
    },
    {
      "latitude": 39.264439,
      "longitude": -9.350342,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 182,
      "squawk": "3255",
      "timestamp": 1654426957,
      "ems": null
    },
    {
      "latitude": 39.26104,
      "longitude": -9.350586,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654426964,
      "ems": null
    },
    {
      "latitude": 39.257904,
      "longitude": -9.351037,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 187,
      "squawk": "3255",
      "timestamp": 1654426970,
      "ems": null
    },
    {
      "latitude": 39.255966,
      "longitude": -9.351379,
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
      "heading": 188,
      "squawk": "3255",
      "timestamp": 1654426975,
      "ems": null
    },
    {
      "latitude": 39.253593,
      "longitude": -9.351807,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 188,
      "squawk": "3255",
      "timestamp": 1654426978,
      "ems": null
    },
    {
      "latitude": 39.252567,
      "longitude": -9.352051,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654426982,
      "ems": null
    },
    {
      "latitude": 39.250809,
      "longitude": -9.35241,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654426984,
      "ems": null
    },
    {
      "latitude": 39.249069,
      "longitude": -9.352769,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 188,
      "squawk": "3255",
      "timestamp": 1654426988,
      "ems": null
    },
    {
      "latitude": 39.247101,
      "longitude": -9.353247,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654426991,
      "ems": null
    },
    {
      "latitude": 39.245071,
      "longitude": -9.353638,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654426995,
      "ems": null
    },
    {
      "latitude": 39.239811,
      "longitude": -9.354553,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654427005,
      "ems": null
    },
    {
      "latitude": 39.236847,
      "longitude": -9.354918,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654427011,
      "ems": null
    },
    {
      "latitude": 39.235298,
      "longitude": -9.355103,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654427015,
      "ems": null
    },
    {
      "latitude": 39.232315,
      "longitude": -9.355395,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654427021,
      "ems": null
    },
    {
      "latitude": 39.231857,
      "longitude": -9.355455,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654427023,
      "ems": null
    },
    {
      "latitude": 39.228409,
      "longitude": -9.355835,
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
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654427030,
      "ems": null
    },
    {
      "latitude": 39.224869,
      "longitude": -9.356323,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 186,
      "squawk": "3255",
      "timestamp": 1654427037,
      "ems": null
    },
    {
      "latitude": 39.221748,
      "longitude": -9.356873,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654427043,
      "ems": null
    },
    {
      "latitude": 39.220306,
      "longitude": -9.357239,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654427046,
      "ems": null
    },
    {
      "latitude": 39.21891,
      "longitude": -9.357605,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "3255",
      "timestamp": 1654427049,
      "ems": null
    },
    {
      "latitude": 39.217255,
      "longitude": -9.358142,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 193,
      "squawk": "3255",
      "timestamp": 1654427053,
      "ems": null
    },
    {
      "latitude": 39.215744,
      "longitude": -9.358582,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 192,
      "squawk": "3255",
      "timestamp": 1654427056,
      "ems": null
    },
    {
      "latitude": 39.214417,
      "longitude": -9.358918,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654427059,
      "ems": null
    },
    {
      "latitude": 39.212811,
      "longitude": -9.359375,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 192,
      "squawk": "3255",
      "timestamp": 1654427062,
      "ems": null
    },
    {
      "latitude": 39.211349,
      "longitude": -9.359934,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427065,
      "ems": null
    },
    {
      "latitude": 39.210022,
      "longitude": -9.36065,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "3255",
      "timestamp": 1654427068,
      "ems": null
    },
    {
      "latitude": 39.208557,
      "longitude": -9.361606,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 209,
      "squawk": "3255",
      "timestamp": 1654427071,
      "ems": null
    },
    {
      "latitude": 39.207413,
      "longitude": -9.36261,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 213,
      "squawk": "3255",
      "timestamp": 1654427074,
      "ems": null
    },
    {
      "latitude": 39.206039,
      "longitude": -9.363874,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 217,
      "squawk": "3255",
      "timestamp": 1654427078,
      "ems": null
    },
    {
      "latitude": 39.204712,
      "longitude": -9.365248,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 219,
      "squawk": "3255",
      "timestamp": 1654427081,
      "ems": null
    },
    {
      "latitude": 39.203594,
      "longitude": -9.366455,
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
      "heading": 221,
      "squawk": "3255",
      "timestamp": 1654427084,
      "ems": null
    },
    {
      "latitude": 39.202606,
      "longitude": -9.367636,
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
      "heading": 223,
      "squawk": "3255",
      "timestamp": 1654427088,
      "ems": null
    },
    {
      "latitude": 39.20137,
      "longitude": -9.369128,
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
      "heading": 224,
      "squawk": "3255",
      "timestamp": 1654427091,
      "ems": null
    },
    {
      "latitude": 39.200363,
      "longitude": -9.370442,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 224,
      "squawk": "3255",
      "timestamp": 1654427094,
      "ems": null
    },
    {
      "latitude": 39.199356,
      "longitude": -9.371696,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 223,
      "squawk": "3255",
      "timestamp": 1654427097,
      "ems": null
    },
    {
      "latitude": 39.198288,
      "longitude": -9.372986,
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
      "heading": 224,
      "squawk": "3255",
      "timestamp": 1654427100,
      "ems": null
    },
    {
      "latitude": 39.197079,
      "longitude": -9.374573,
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
      "heading": 225,
      "squawk": "3255",
      "timestamp": 1654427104,
      "ems": null
    },
    {
      "latitude": 39.195961,
      "longitude": -9.375977,
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
      "heading": 226,
      "squawk": "3255",
      "timestamp": 1654427107,
      "ems": null
    },
    {
      "latitude": 39.194962,
      "longitude": -9.377309,
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
      "heading": 226,
      "squawk": "3255",
      "timestamp": 1654427110,
      "ems": null
    },
    {
      "latitude": 39.194138,
      "longitude": -9.378503,
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
      "heading": 226,
      "squawk": "3255",
      "timestamp": 1654427113,
      "ems": null
    },
    {
      "latitude": 39.191986,
      "longitude": -9.381249,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 224,
      "squawk": "3255",
      "timestamp": 1654427119,
      "ems": null
    },
    {
      "latitude": 39.18988,
      "longitude": -9.383877,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 224,
      "squawk": "3255",
      "timestamp": 1654427125,
      "ems": null
    },
    {
      "latitude": 39.187775,
      "longitude": -9.386444,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 222,
      "squawk": "3255",
      "timestamp": 1654427132,
      "ems": null
    },
    {
      "latitude": 39.186741,
      "longitude": -9.387573,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "3255",
      "timestamp": 1654427135,
      "ems": null
    },
    {
      "latitude": 39.185532,
      "longitude": -9.388733,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 215,
      "squawk": "3255",
      "timestamp": 1654427138,
      "ems": null
    },
    {
      "latitude": 39.184433,
      "longitude": -9.389668,
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
      "heading": 211,
      "squawk": "3255",
      "timestamp": 1654427141,
      "ems": null
    },
    {
      "latitude": 39.183197,
      "longitude": -9.390504,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 206,
      "squawk": "3255",
      "timestamp": 1654427145,
      "ems": null
    },
    {
      "latitude": 39.181778,
      "longitude": -9.391459,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3255",
      "timestamp": 1654427148,
      "ems": null
    },
    {
      "latitude": 39.180405,
      "longitude": -9.392296,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 205,
      "squawk": "3255",
      "timestamp": 1654427151,
      "ems": null
    },
    {
      "latitude": 39.179077,
      "longitude": -9.393072,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 205,
      "squawk": "3255",
      "timestamp": 1654427154,
      "ems": null
    },
    {
      "latitude": 39.177704,
      "longitude": -9.393908,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427157,
      "ems": null
    },
    {
      "latitude": 39.176468,
      "longitude": -9.394565,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427160,
      "ems": null
    },
    {
      "latitude": 39.174957,
      "longitude": -9.395341,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427164,
      "ems": null
    },
    {
      "latitude": 39.173447,
      "longitude": -9.396176,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427167,
      "ems": null
    },
    {
      "latitude": 39.171894,
      "longitude": -9.396912,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427170,
      "ems": null
    },
    {
      "latitude": 39.170517,
      "longitude": -9.39761,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427173,
      "ems": null
    },
    {
      "latitude": 39.169327,
      "longitude": -9.398147,
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
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427176,
      "ems": null
    },
    {
      "latitude": 39.167725,
      "longitude": -9.398923,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427179,
      "ems": null
    },
    {
      "latitude": 39.166763,
      "longitude": -9.399341,
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427182,
      "ems": null
    },
    {
      "latitude": 39.164932,
      "longitude": -9.400117,
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427186,
      "ems": null
    },
    {
      "latitude": 39.162209,
      "longitude": -9.401245,
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427192,
      "ems": null
    },
    {
      "latitude": 39.159302,
      "longitude": -9.402446,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427198,
      "ems": null
    },
    {
      "latitude": 39.156281,
      "longitude": -9.40364,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427205,
      "ems": null
    },
    {
      "latitude": 39.153442,
      "longitude": -9.404775,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654427211,
      "ems": null
    },
    {
      "latitude": 39.150757,
      "longitude": -9.405762,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654427217,
      "ems": null
    },
    {
      "latitude": 39.147491,
      "longitude": -9.406924,
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
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654427224,
      "ems": null
    },
    {
      "latitude": 39.144661,
      "longitude": -9.407898,
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654427230,
      "ems": null
    },
    {
      "latitude": 39.14196,
      "longitude": -9.408936,
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654427236,
      "ems": null
    },
    {
      "latitude": 39.139069,
      "longitude": -9.409969,
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
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654427243,
      "ems": null
    },
    {
      "latitude": 39.13623,
      "longitude": -9.410865,
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
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654427249,
      "ems": null
    },
    {
      "latitude": 39.133118,
      "longitude": -9.41182,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "3255",
      "timestamp": 1654427256,
      "ems": null
    },
    {
      "latitude": 39.131699,
      "longitude": -9.412238,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654427259,
      "ems": null
    },
    {
      "latitude": 39.130322,
      "longitude": -9.412598,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654427262,
      "ems": null
    },
    {
      "latitude": 39.128647,
      "longitude": -9.412964,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 190,
      "squawk": "3255",
      "timestamp": 1654427265,
      "ems": null
    },
    {
      "latitude": 39.127167,
      "longitude": -9.413313,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654427268,
      "ems": null
    },
    {
      "latitude": 39.125618,
      "longitude": -9.413574,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "3255",
      "timestamp": 1654427272,
      "ems": null
    },
    {
      "latitude": 39.124039,
      "longitude": -9.413757,
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
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654427275,
      "ems": null
    },
    {
      "latitude": 39.122639,
      "longitude": -9.41394,
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
      "heading": 186,
      "squawk": "3255",
      "timestamp": 1654427278,
      "ems": null
    },
    {
      "latitude": 39.119568,
      "longitude": -9.414612,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 192,
      "squawk": "3255",
      "timestamp": 1654427285,
      "ems": null
    },
    {
      "latitude": 39.116547,
      "longitude": -9.415582,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654427291,
      "ems": null
    },
    {
      "latitude": 39.115147,
      "longitude": -9.416077,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654427294,
      "ems": null
    },
    {
      "latitude": 39.113892,
      "longitude": -9.416596,
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
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427297,
      "ems": null
    },
    {
      "latitude": 39.112259,
      "longitude": -9.417419,
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
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427301,
      "ems": null
    },
    {
      "latitude": 39.11087,
      "longitude": -9.418149,
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
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427304,
      "ems": null
    },
    {
      "latitude": 39.110001,
      "longitude": -9.418627,
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
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427306,
      "ems": null
    },
    {
      "latitude": 39.108536,
      "longitude": -9.419434,
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
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427311,
      "ems": null
    },
    {
      "latitude": 39.107464,
      "longitude": -9.420044,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427313,
      "ems": null
    },
    {
      "latitude": 39.10537,
      "longitude": -9.421143,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427317,
      "ems": null
    },
    {
      "latitude": 39.104111,
      "longitude": -9.421753,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427320,
      "ems": null
    },
    {
      "latitude": 39.102856,
      "longitude": -9.422363,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427323,
      "ems": null
    },
    {
      "latitude": 39.10025,
      "longitude": -9.423645,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427329,
      "ems": null
    },
    {
      "latitude": 39.097687,
      "longitude": -9.425015,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427336,
      "ems": null
    },
    {
      "latitude": 39.095306,
      "longitude": -9.42633,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427341,
      "ems": null
    },
    {
      "latitude": 39.092789,
      "longitude": -9.427822,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "3255",
      "timestamp": 1654427348,
      "ems": null
    },
    {
      "latitude": 39.091644,
      "longitude": -9.428598,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "3255",
      "timestamp": 1654427351,
      "ems": null
    },
    {
      "latitude": 39.090427,
      "longitude": -9.429443,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "3255",
      "timestamp": 1654427353,
      "ems": null
    },
    {
      "latitude": 39.089172,
      "longitude": -9.43027,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "3255",
      "timestamp": 1654427356,
      "ems": null
    },
    {
      "latitude": 39.086746,
      "longitude": -9.431882,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "3255",
      "timestamp": 1654427362,
      "ems": null
    },
    {
      "latitude": 39.084187,
      "longitude": -9.433472,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 205,
      "squawk": "3255",
      "timestamp": 1654427369,
      "ems": null
    },
    {
      "latitude": 39.081848,
      "longitude": -9.434868,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427374,
      "ems": null
    },
    {
      "latitude": 39.080612,
      "longitude": -9.435524,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427377,
      "ems": null
    },
    {
      "latitude": 39.079468,
      "longitude": -9.436181,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427381,
      "ems": null
    },
    {
      "latitude": 39.078049,
      "longitude": -9.436957,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427384,
      "ems": null
    },
    {
      "latitude": 39.076538,
      "longitude": -9.437734,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427387,
      "ems": null
    },
    {
      "latitude": 39.075203,
      "longitude": -9.438354,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427390,
      "ems": null
    },
    {
      "latitude": 39.073761,
      "longitude": -9.438965,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427394,
      "ems": null
    },
    {
      "latitude": 39.071594,
      "longitude": -9.439704,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "3255",
      "timestamp": 1654427399,
      "ems": null
    },
    {
      "latitude": 39.070316,
      "longitude": -9.440002,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654427402,
      "ems": null
    },
    {
      "latitude": 39.068939,
      "longitude": -9.440361,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654427405,
      "ems": null
    },
    {
      "latitude": 39.067566,
      "longitude": -9.440719,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "3255",
      "timestamp": 1654427408,
      "ems": null
    },
    {
      "latitude": 39.066147,
      "longitude": -9.441077,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "3255",
      "timestamp": 1654427411,
      "ems": null
    },
    {
      "latitude": 39.065193,
      "longitude": -9.441284,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 190,
      "squawk": "3255",
      "timestamp": 1654427413,
      "ems": null
    },
    {
      "latitude": 39.063564,
      "longitude": -9.44165,
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
      "heading": 188,
      "squawk": "3255",
      "timestamp": 1654427416,
      "ems": null
    },
    {
      "latitude": 39.062214,
      "longitude": -9.441833,
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
      "heading": 186,
      "squawk": "3255",
      "timestamp": 1654427420,
      "ems": null
    },
    {
      "latitude": 39.060791,
      "longitude": -9.442033,
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
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654427423,
      "ems": null
    },
    {
      "latitude": 39.059326,
      "longitude": -9.442212,
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
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654427426,
      "ems": null
    },
    {
      "latitude": 39.057888,
      "longitude": -9.442322,
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
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654427429,
      "ems": null
    },
    {
      "latitude": 39.05658,
      "longitude": -9.442511,
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
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654427432,
      "ems": null
    },
    {
      "latitude": 39.05542,
      "longitude": -9.442627,
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
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654427435,
      "ems": null
    },
    {
      "latitude": 39.054016,
      "longitude": -9.442809,
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
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654427437,
      "ems": null
    },
    {
      "latitude": 39.052486,
      "longitude": -9.442871,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 181,
      "squawk": "3255",
      "timestamp": 1654427441,
      "ems": null
    },
    {
      "latitude": 39.051182,
      "longitude": -9.442871,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "3255",
      "timestamp": 1654427444,
      "ems": null
    },
    {
      "latitude": 39.049648,
      "longitude": -9.442871,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 178,
      "squawk": "3255",
      "timestamp": 1654427447,
      "ems": null
    },
    {
      "latitude": 39.048298,
      "longitude": -9.442749,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 175,
      "squawk": "3255",
      "timestamp": 1654427450,
      "ems": null
    },
    {
      "latitude": 39.047134,
      "longitude": -9.442566,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "3255",
      "timestamp": 1654427452,
      "ems": null
    },
    {
      "latitude": 39.045639,
      "longitude": -9.44239,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "3255",
      "timestamp": 1654427455,
      "ems": null
    },
    {
      "latitude": 39.044434,
      "longitude": -9.442261,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "3255",
      "timestamp": 1654427458,
      "ems": null
    },
    {
      "latitude": 39.043037,
      "longitude": -9.442078,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 173,
      "squawk": "3255",
      "timestamp": 1654427462,
      "ems": null
    },
    {
      "latitude": 39.041748,
      "longitude": -9.441854,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 173,
      "squawk": "3255",
      "timestamp": 1654427465,
      "ems": null
    },
    {
      "latitude": 39.040237,
      "longitude": -9.441734,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "3255",
      "timestamp": 1654427468,
      "ems": null
    },
    {
      "latitude": 39.038956,
      "longitude": -9.441614,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "3255",
      "timestamp": 1654427471,
      "ems": null
    },
    {
      "latitude": 39.037682,
      "longitude": -9.441467,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 173,
      "squawk": "3255",
      "timestamp": 1654427474,
      "ems": null
    },
    {
      "latitude": 39.036564,
      "longitude": -9.441284,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 172,
      "squawk": "3255",
      "timestamp": 1654427477,
      "ems": null
    },
    {
      "latitude": 39.033737,
      "longitude": -9.440779,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 172,
      "squawk": "3255",
      "timestamp": 1654427483,
      "ems": null
    },
    {
      "latitude": 39.031353,
      "longitude": -9.44043,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 175,
      "squawk": "3255",
      "timestamp": 1654427489,
      "ems": null
    },
    {
      "latitude": 39.029953,
      "longitude": -9.440308,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "3255",
      "timestamp": 1654427492,
      "ems": null
    },
    {
      "latitude": 39.028744,
      "longitude": -9.440308,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 181,
      "squawk": "3255",
      "timestamp": 1654427495,
      "ems": null
    },
    {
      "latitude": 39.027283,
      "longitude": -9.44042,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654427498,
      "ems": null
    },
    {
      "latitude": 39.025909,
      "longitude": -9.44048,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654427501,
      "ems": null
    },
    {
      "latitude": 39.024765,
      "longitude": -9.440599,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654427504,
      "ems": null
    },
    {
      "latitude": 39.023438,
      "longitude": -9.44066,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654427507,
      "ems": null
    },
    {
      "latitude": 39.022087,
      "longitude": -9.440796,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654427510,
      "ems": null
    },
    {
      "latitude": 39.020782,
      "longitude": -9.440898,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654427513,
      "ems": null
    },
    {
      "latitude": 39.019527,
      "longitude": -9.440979,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 182,
      "squawk": "3255",
      "timestamp": 1654427516,
      "ems": null
    },
    {
      "latitude": 39.0168,
      "longitude": -9.440839,
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
      "heading": 173,
      "squawk": "3255",
      "timestamp": 1654427522,
      "ems": null
    },
    {
      "latitude": 39.015572,
      "longitude": -9.440613,
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
      "heading": 171,
      "squawk": "3255",
      "timestamp": 1654427525,
      "ems": null
    },
    {
      "latitude": 39.014313,
      "longitude": -9.440369,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 171,
      "squawk": "3255",
      "timestamp": 1654427528,
      "ems": null
    },
    {
      "latitude": 39.012917,
      "longitude": -9.440125,
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
      "heading": 172,
      "squawk": "3255",
      "timestamp": 1654427531,
      "ems": null
    },
    {
      "latitude": 39.011707,
      "longitude": -9.439941,
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
      "heading": 171,
      "squawk": "3255",
      "timestamp": 1654427534,
      "ems": null
    },
    {
      "latitude": 39.010403,
      "longitude": -9.439636,
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
      "heading": 170,
      "squawk": "3255",
      "timestamp": 1654427537,
      "ems": null
    },
    {
      "latitude": 39.009155,
      "longitude": -9.439405,
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
      "heading": 173,
      "squawk": "3255",
      "timestamp": 1654427540,
      "ems": null
    },
    {
      "latitude": 39.006493,
      "longitude": -9.439514,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654427546,
      "ems": null
    },
    {
      "latitude": 39.005188,
      "longitude": -9.440002,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427549,
      "ems": null
    },
    {
      "latitude": 39.003933,
      "longitude": -9.440674,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "3255",
      "timestamp": 1654427552,
      "ems": null
    },
    {
      "latitude": 39.002769,
      "longitude": -9.441528,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "3255",
      "timestamp": 1654427555,
      "ems": null
    },
    {
      "latitude": 39.001785,
      "longitude": -9.442511,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "3255",
      "timestamp": 1654427557,
      "ems": null
    },
    {
      "latitude": 39.000858,
      "longitude": -9.443787,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 228,
      "squawk": "3255",
      "timestamp": 1654427561,
      "ems": null
    },
    {
      "latitude": 39.000275,
      "longitude": -9.444779,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 237,
      "squawk": "3255",
      "timestamp": 1654427564,
      "ems": null
    },
    {
      "latitude": 38.999588,
      "longitude": -9.44657,
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
      "heading": 250,
      "squawk": "3255",
      "timestamp": 1654427567,
      "ems": null
    },
    {
      "latitude": 38.999275,
      "longitude": -9.448181,
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
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654427570,
      "ems": null
    },
    {
      "latitude": 38.999222,
      "longitude": -9.449795,
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
      "heading": 271,
      "squawk": "3255",
      "timestamp": 1654427572,
      "ems": null
    },
    {
      "latitude": 38.999371,
      "longitude": -9.451294,
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
      "heading": 281,
      "squawk": "3255",
      "timestamp": 1654427576,
      "ems": null
    },
    {
      "latitude": 38.999695,
      "longitude": -9.452637,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 289,
      "squawk": "3255",
      "timestamp": 1654427579,
      "ems": null
    },
    {
      "latitude": 39.00016,
      "longitude": -9.453979,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "3255",
      "timestamp": 1654427582,
      "ems": null
    },
    {
      "latitude": 39.000824,
      "longitude": -9.455228,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 308,
      "squawk": "3255",
      "timestamp": 1654427585,
      "ems": null
    },
    {
      "latitude": 39.001602,
      "longitude": -9.456244,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "3255",
      "timestamp": 1654427588,
      "ems": null
    },
    {
      "latitude": 39.002487,
      "longitude": -9.457092,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "3255",
      "timestamp": 1654427590,
      "ems": null
    },
    {
      "latitude": 39.003422,
      "longitude": -9.457642,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 338,
      "squawk": "3255",
      "timestamp": 1654427593,
      "ems": null
    },
    {
      "latitude": 39.004669,
      "longitude": -9.458094,
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
      "heading": 350,
      "squawk": "3255",
      "timestamp": 1654427597,
      "ems": null
    },
    {
      "latitude": 39.005722,
      "longitude": -9.458154,
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
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654427599,
      "ems": null
    },
    {
      "latitude": 39.00668,
      "longitude": -9.458069,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 7,
      "squawk": "3255",
      "timestamp": 1654427602,
      "ems": null
    },
    {
      "latitude": 39.007935,
      "longitude": -9.457703,
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
      "heading": 15,
      "squawk": "3255",
      "timestamp": 1654427605,
      "ems": null
    },
    {
      "latitude": 39.008865,
      "longitude": -9.457153,
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
      "heading": 27,
      "squawk": "3255",
      "timestamp": 1654427608,
      "ems": null
    },
    {
      "latitude": 39.009842,
      "longitude": -9.456303,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 36,
      "squawk": "3255",
      "timestamp": 1654427612,
      "ems": null
    },
    {
      "latitude": 39.010712,
      "longitude": -9.455288,
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
      "heading": 46,
      "squawk": "3255",
      "timestamp": 1654427615,
      "ems": null
    },
    {
      "latitude": 39.011379,
      "longitude": -9.453979,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 56,
      "squawk": "3255",
      "timestamp": 1654427618,
      "ems": null
    },
    {
      "latitude": 39.011894,
      "longitude": -9.452515,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "3255",
      "timestamp": 1654427621,
      "ems": null
    },
    {
      "latitude": 39.012039,
      "longitude": -9.451586,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "3255",
      "timestamp": 1654427623,
      "ems": null
    },
    {
      "latitude": 39.012085,
      "longitude": -9.449257,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 96,
      "squawk": "3255",
      "timestamp": 1654427627,
      "ems": null
    },
    {
      "latitude": 39.011799,
      "longitude": -9.447693,
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
      "heading": 108,
      "squawk": "3255",
      "timestamp": 1654427630,
      "ems": null
    },
    {
      "latitude": 39.011215,
      "longitude": -9.446033,
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
      "heading": 121,
      "squawk": "3255",
      "timestamp": 1654427632,
      "ems": null
    },
    {
      "latitude": 39.010345,
      "longitude": -9.444659,
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
      "heading": 131,
      "squawk": "3255",
      "timestamp": 1654427636,
      "ems": null
    },
    {
      "latitude": 39.009155,
      "longitude": -9.443465,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "3255",
      "timestamp": 1654427639,
      "ems": null
    },
    {
      "latitude": 39.008167,
      "longitude": -9.44281,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "3255",
      "timestamp": 1654427642,
      "ems": null
    },
    {
      "latitude": 39.006817,
      "longitude": -9.442322,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 168,
      "squawk": "3255",
      "timestamp": 1654427644,
      "ems": null
    },
    {
      "latitude": 39.005127,
      "longitude": -9.442152,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 180,
      "squawk": "3255",
      "timestamp": 1654427647,
      "ems": null
    },
    {
      "latitude": 39.003616,
      "longitude": -9.44239,
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
      "heading": 189,
      "squawk": "3255",
      "timestamp": 1654427651,
      "ems": null
    },
    {
      "latitude": 39.002396,
      "longitude": -9.442749,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 192,
      "squawk": "3255",
      "timestamp": 1654427654,
      "ems": null
    },
    {
      "latitude": 39.000916,
      "longitude": -9.443227,
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654427657,
      "ems": null
    },
    {
      "latitude": 38.999603,
      "longitude": -9.443787,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427660,
      "ems": null
    },
    {
      "latitude": 38.998215,
      "longitude": -9.4446,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 205,
      "squawk": "3255",
      "timestamp": 1654427664,
      "ems": null
    },
    {
      "latitude": 38.996948,
      "longitude": -9.445435,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 208,
      "squawk": "3255",
      "timestamp": 1654427667,
      "ems": null
    },
    {
      "latitude": 38.995785,
      "longitude": -9.446228,
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
      "heading": 209,
      "squawk": "3255",
      "timestamp": 1654427670,
      "ems": null
    },
    {
      "latitude": 38.99469,
      "longitude": -9.446988,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "3255",
      "timestamp": 1654427673,
      "ems": null
    },
    {
      "latitude": 38.993454,
      "longitude": -9.447824,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 207,
      "squawk": "3255",
      "timestamp": 1654427676,
      "ems": null
    },
    {
      "latitude": 38.99231,
      "longitude": -9.448541,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 205,
      "squawk": "3255",
      "timestamp": 1654427679,
      "ems": null
    },
    {
      "latitude": 38.991119,
      "longitude": -9.449257,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3255",
      "timestamp": 1654427682,
      "ems": null
    },
    {
      "latitude": 38.989929,
      "longitude": -9.449914,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3255",
      "timestamp": 1654427685,
      "ems": null
    },
    {
      "latitude": 38.988739,
      "longitude": -9.45063,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427688,
      "ems": null
    },
    {
      "latitude": 38.986496,
      "longitude": -9.451884,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427694,
      "ems": null
    },
    {
      "latitude": 38.985264,
      "longitude": -9.452576,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427697,
      "ems": null
    },
    {
      "latitude": 38.983932,
      "longitude": -9.453318,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "3255",
      "timestamp": 1654427700,
      "ems": null
    },
    {
      "latitude": 38.981506,
      "longitude": -9.454691,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "3255",
      "timestamp": 1654427706,
      "ems": null
    },
    {
      "latitude": 38.97908,
      "longitude": -9.456004,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427712,
      "ems": null
    },
    {
      "latitude": 38.976559,
      "longitude": -9.457275,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427718,
      "ems": null
    },
    {
      "latitude": 38.974277,
      "longitude": -9.458313,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427724,
      "ems": null
    },
    {
      "latitude": 38.972927,
      "longitude": -9.458923,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427727,
      "ems": null
    },
    {
      "latitude": 38.971672,
      "longitude": -9.459412,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427730,
      "ems": null
    },
    {
      "latitude": 38.970413,
      "longitude": -9.459961,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427733,
      "ems": null
    },
    {
      "latitude": 38.969017,
      "longitude": -9.46051,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427736,
      "ems": null
    },
    {
      "latitude": 38.967682,
      "longitude": -9.46108,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427739,
      "ems": null
    },
    {
      "latitude": 38.965256,
      "longitude": -9.462094,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427745,
      "ems": null
    },
    {
      "latitude": 38.962463,
      "longitude": -9.463169,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654427751,
      "ems": null
    },
    {
      "latitude": 38.95966,
      "longitude": -9.464294,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654427757,
      "ems": null
    },
    {
      "latitude": 38.957008,
      "longitude": -9.465332,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427764,
      "ems": null
    },
    {
      "latitude": 38.954132,
      "longitude": -9.466573,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427770,
      "ems": null
    },
    {
      "latitude": 38.951374,
      "longitude": -9.467712,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427776,
      "ems": null
    },
    {
      "latitude": 38.948593,
      "longitude": -9.468781,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654427781,
      "ems": null
    },
    {
      "latitude": 38.945755,
      "longitude": -9.469856,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654427788,
      "ems": null
    },
    {
      "latitude": 38.942997,
      "longitude": -9.470947,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427794,
      "ems": null
    },
    {
      "latitude": 38.940125,
      "longitude": -9.472006,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654427800,
      "ems": null
    },
    {
      "latitude": 38.937176,
      "longitude": -9.473022,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654427806,
      "ems": null
    },
    {
      "latitude": 38.934338,
      "longitude": -9.474182,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427812,
      "ems": null
    },
    {
      "latitude": 38.933266,
      "longitude": -9.474731,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427815,
      "ems": null
    },
    {
      "latitude": 38.931637,
      "longitude": -9.475525,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427818,
      "ems": null
    },
    {
      "latitude": 38.92889,
      "longitude": -9.476807,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427824,
      "ems": null
    },
    {
      "latitude": 38.926208,
      "longitude": -9.478037,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427830,
      "ems": null
    },
    {
      "latitude": 38.924747,
      "longitude": -9.478638,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427833,
      "ems": null
    },
    {
      "latitude": 38.921906,
      "longitude": -9.480007,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427839,
      "ems": null
    },
    {
      "latitude": 38.919392,
      "longitude": -9.481262,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427844,
      "ems": null
    },
    {
      "latitude": 38.916321,
      "longitude": -9.482788,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427851,
      "ems": null
    },
    {
      "latitude": 38.91362,
      "longitude": -9.484067,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427857,
      "ems": null
    },
    {
      "latitude": 38.911102,
      "longitude": -9.485381,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427863,
      "ems": null
    },
    {
      "latitude": 38.908264,
      "longitude": -9.486754,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427869,
      "ems": null
    },
    {
      "latitude": 38.905426,
      "longitude": -9.488247,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427875,
      "ems": null
    },
    {
      "latitude": 38.902679,
      "longitude": -9.489685,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 201,
      "squawk": "3255",
      "timestamp": 1654427881,
      "ems": null
    },
    {
      "latitude": 38.900074,
      "longitude": -9.490967,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "3255",
      "timestamp": 1654427887,
      "ems": null
    },
    {
      "latitude": 38.897232,
      "longitude": -9.492486,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "3255",
      "timestamp": 1654427893,
      "ems": null
    },
    {
      "latitude": 38.893616,
      "longitude": -9.494039,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427901,
      "ems": null
    },
    {
      "latitude": 38.891045,
      "longitude": -9.495117,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427907,
      "ems": null
    },
    {
      "latitude": 38.888031,
      "longitude": -9.496367,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427913,
      "ems": null
    },
    {
      "latitude": 38.886658,
      "longitude": -9.496904,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427916,
      "ems": null
    },
    {
      "latitude": 38.885319,
      "longitude": -9.497437,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427919,
      "ems": null
    },
    {
      "latitude": 38.882572,
      "longitude": -9.498535,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427925,
      "ems": null
    },
    {
      "latitude": 38.879791,
      "longitude": -9.499711,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427931,
      "ems": null
    },
    {
      "latitude": 38.877029,
      "longitude": -9.500916,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427937,
      "ems": null
    },
    {
      "latitude": 38.874207,
      "longitude": -9.502159,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427943,
      "ems": null
    },
    {
      "latitude": 38.871304,
      "longitude": -9.503479,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427949,
      "ems": null
    },
    {
      "latitude": 38.868759,
      "longitude": -9.504666,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427954,
      "ems": null
    },
    {
      "latitude": 38.866043,
      "longitude": -9.50592,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 199,
      "squawk": "3255",
      "timestamp": 1654427961,
      "ems": null
    },
    {
      "latitude": 38.863174,
      "longitude": -9.507234,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654427967,
      "ems": null
    },
    {
      "latitude": 38.860428,
      "longitude": -9.508429,
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
      "heading": 197,
      "squawk": "3255",
      "timestamp": 1654427973,
      "ems": null
    },
    {
      "latitude": 38.857773,
      "longitude": -9.509503,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654427979,
      "ems": null
    },
    {
      "latitude": 38.854965,
      "longitude": -9.510498,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654427985,
      "ems": null
    },
    {
      "latitude": 38.853382,
      "longitude": -9.511047,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654427988,
      "ems": null
    },
    {
      "latitude": 38.851959,
      "longitude": -9.511533,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654427991,
      "ems": null
    },
    {
      "latitude": 38.850681,
      "longitude": -9.511902,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654427994,
      "ems": null
    },
    {
      "latitude": 38.847839,
      "longitude": -9.512847,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654428000,
      "ems": null
    },
    {
      "latitude": 38.84523,
      "longitude": -9.513742,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654428006,
      "ems": null
    },
    {
      "latitude": 38.842304,
      "longitude": -9.514709,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654428012,
      "ems": null
    },
    {
      "latitude": 38.839462,
      "longitude": -9.515747,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654428018,
      "ems": null
    },
    {
      "latitude": 38.836853,
      "longitude": -9.516668,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654428024,
      "ems": null
    },
    {
      "latitude": 38.833878,
      "longitude": -9.517802,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654428030,
      "ems": null
    },
    {
      "latitude": 38.831642,
      "longitude": -9.518677,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654428035,
      "ems": null
    },
    {
      "latitude": 38.828987,
      "longitude": -9.519714,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654428041,
      "ems": null
    },
    {
      "latitude": 38.825638,
      "longitude": -9.520935,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654428048,
      "ems": null
    },
    {
      "latitude": 38.822937,
      "longitude": -9.521982,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 196,
      "squawk": "3255",
      "timestamp": 1654428054,
      "ems": null
    },
    {
      "latitude": 38.819092,
      "longitude": -9.523415,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654428062,
      "ems": null
    },
    {
      "latitude": 38.815384,
      "longitude": -9.524669,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 194,
      "squawk": "3255",
      "timestamp": 1654428071,
      "ems": null
    },
    {
      "latitude": 38.812508,
      "longitude": -9.525635,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654428076,
      "ems": null
    },
    {
      "latitude": 38.807648,
      "longitude": -9.527296,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 195,
      "squawk": "3255",
      "timestamp": 1654428087,
      "ems": null
    },
    {
      "latitude": 38.802521,
      "longitude": -9.528968,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 191,
      "squawk": "3255",
      "timestamp": 1654428097,
      "ems": null
    },
    {
      "latitude": 38.799911,
      "longitude": -9.529446,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 185,
      "squawk": "3255",
      "timestamp": 1654428102,
      "ems": null
    },
    {
      "latitude": 38.798359,
      "longitude": -9.529602,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 184,
      "squawk": "3255",
      "timestamp": 1654428105,
      "ems": null
    },
    {
      "latitude": 38.797165,
      "longitude": -9.529684,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 182,
      "squawk": "3255",
      "timestamp": 1654428107,
      "ems": null
    },
    {
      "latitude": 38.795795,
      "longitude": -9.529724,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 180,
      "squawk": "3255",
      "timestamp": 1654428110,
      "ems": null
    },
    {
      "latitude": 38.794373,
      "longitude": -9.529684,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 178,
      "squawk": "3255",
      "timestamp": 1654428113,
      "ems": null
    },
    {
      "latitude": 38.793049,
      "longitude": -9.529663,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 177,
      "squawk": "3255",
      "timestamp": 1654428116,
      "ems": null
    },
    {
      "latitude": 38.791946,
      "longitude": -9.529565,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 177,
      "squawk": "3255",
      "timestamp": 1654428119,
      "ems": null
    },
    {
      "latitude": 38.790527,
      "longitude": -9.529446,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 176,
      "squawk": "3255",
      "timestamp": 1654428122,
      "ems": null
    },
    {
      "latitude": 38.788971,
      "longitude": -9.529326,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 176,
      "squawk": "3255",
      "timestamp": 1654428125,
      "ems": null
    },
    {
      "latitude": 38.787605,
      "longitude": -9.529175,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 175,
      "squawk": "3255",
      "timestamp": 1654428128,
      "ems": null
    },
    {
      "latitude": 38.786224,
      "longitude": -9.529028,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 174,
      "squawk": "3255",
      "timestamp": 1654428131,
      "ems": null
    },
    {
      "latitude": 38.784859,
      "longitude": -9.52887,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "3255",
      "timestamp": 1654428134,
      "ems": null
    },
    {
      "latitude": 38.783432,
      "longitude": -9.528609,
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
      "heading": 172,
      "squawk": "3255",
      "timestamp": 1654428137,
      "ems": null
    },
    {
      "latitude": 38.782017,
      "longitude": -9.52832,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 171,
      "squawk": "3255",
      "timestamp": 1654428140,
      "ems": null
    },
    {
      "latitude": 38.780716,
      "longitude": -9.528076,
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
      "heading": 171,
      "squawk": "3255",
      "timestamp": 1654428143,
      "ems": null
    },
    {
      "latitude": 38.779266,
      "longitude": -9.527774,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "3255",
      "timestamp": 1654428146,
      "ems": null
    },
    {
      "latitude": 38.777828,
      "longitude": -9.527527,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 171,
      "squawk": "3255",
      "timestamp": 1654428149,
      "ems": null
    },
    {
      "latitude": 38.776245,
      "longitude": -9.527236,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 171,
      "squawk": "3255",
      "timestamp": 1654428152,
      "ems": null
    },
    {
      "latitude": 38.77494,
      "longitude": -9.526978,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 170,
      "squawk": "3255",
      "timestamp": 1654428155,
      "ems": null
    },
    {
      "latitude": 38.773499,
      "longitude": -9.526639,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 169,
      "squawk": "3255",
      "timestamp": 1654428158,
      "ems": null
    },
    {
      "latitude": 38.772034,
      "longitude": -9.526281,
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
      "heading": 168,
      "squawk": "3255",
      "timestamp": 1654428161,
      "ems": null
    },
    {
      "latitude": 38.770844,
      "longitude": -9.525923,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 166,
      "squawk": "3255",
      "timestamp": 1654428164,
      "ems": null
    },
    {
      "latitude": 38.76973,
      "longitude": -9.525574,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 164,
      "squawk": "3255",
      "timestamp": 1654428167,
      "ems": null
    },
    {
      "latitude": 38.768097,
      "longitude": -9.525024,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 165,
      "squawk": "3255",
      "timestamp": 1654428170,
      "ems": null
    },
    {
      "latitude": 38.766586,
      "longitude": -9.524549,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 165,
      "squawk": "3255",
      "timestamp": 1654428173,
      "ems": null
    },
    {
      "latitude": 38.765259,
      "longitude": -9.524048,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 164,
      "squawk": "3255",
      "timestamp": 1654428176,
      "ems": null
    },
    {
      "latitude": 38.763817,
      "longitude": -9.52356,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 164,
      "squawk": "3255",
      "timestamp": 1654428179,
      "ems": null
    },
    {
      "latitude": 38.762421,
      "longitude": -9.52301,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 163,
      "squawk": "3255",
      "timestamp": 1654428182,
      "ems": null
    },
    {
      "latitude": 38.76107,
      "longitude": -9.522522,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "3255",
      "timestamp": 1654428185,
      "ems": null
    },
    {
      "latitude": 38.760223,
      "longitude": -9.522161,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "3255",
      "timestamp": 1654428187,
      "ems": null
    },
    {
      "latitude": 38.758461,
      "longitude": -9.521484,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "3255",
      "timestamp": 1654428191,
      "ems": null
    },
    {
      "latitude": 38.757156,
      "longitude": -9.520907,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "3255",
      "timestamp": 1654428194,
      "ems": null
    },
    {
      "latitude": 38.754459,
      "longitude": -9.519714,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "3255",
      "timestamp": 1654428200,
      "ems": null
    },
    {
      "latitude": 38.751709,
      "longitude": -9.518459,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "3255",
      "timestamp": 1654428206,
      "ems": null
    },
    {
      "latitude": 38.749008,
      "longitude": -9.517145,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "3255",
      "timestamp": 1654428212,
      "ems": null
    },
    {
      "latitude": 38.746498,
      "longitude": -9.515991,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "3255",
      "timestamp": 1654428218,
      "ems": null
    },
    {
      "latitude": 38.743752,
      "longitude": -9.514832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "3255",
      "timestamp": 1654428224,
      "ems": null
    },
    {
      "latitude": 38.740913,
      "longitude": -9.513733,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 163,
      "squawk": "3255",
      "timestamp": 1654428230,
      "ems": null
    },
    {
      "latitude": 38.738167,
      "longitude": -9.512695,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "3255",
      "timestamp": 1654428236,
      "ems": null
    },
    {
      "latitude": 38.735458,
      "longitude": -9.511593,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "3255",
      "timestamp": 1654428242,
      "ems": null
    },
    {
      "latitude": 38.733044,
      "longitude": -9.51062,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 161,
      "squawk": "3255",
      "timestamp": 1654428248,
      "ems": null
    },
    {
      "latitude": 38.729927,
      "longitude": -9.509216,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "3255",
      "timestamp": 1654428255,
      "ems": null
    },
    {
      "latitude": 38.728577,
      "longitude": -9.508545,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 157,
      "squawk": "3255",
      "timestamp": 1654428257,
      "ems": null
    },
    {
      "latitude": 38.727364,
      "longitude": -9.507812,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "3255",
      "timestamp": 1654428260,
      "ems": null
    },
    {
      "latitude": 38.726109,
      "longitude": -9.507019,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "3255",
      "timestamp": 1654428263,
      "ems": null
    },
    {
      "latitude": 38.72493,
      "longitude": -9.506159,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "3255",
      "timestamp": 1654428267,
      "ems": null
    },
    {
      "latitude": 38.72364,
      "longitude": -9.505249,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "3255",
      "timestamp": 1654428270,
      "ems": null
    },
    {
      "latitude": 38.722431,
      "longitude": -9.504272,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "3255",
      "timestamp": 1654428273,
      "ems": null
    },
    {
      "latitude": 38.721268,
      "longitude": -9.503357,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "3255",
      "timestamp": 1654428276,
      "ems": null
    },
    {
      "latitude": 38.720032,
      "longitude": -9.502337,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "3255",
      "timestamp": 1654428278,
      "ems": null
    },
    {
      "latitude": 38.718845,
      "longitude": -9.501404,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 148,
      "squawk": "3255",
      "timestamp": 1654428281,
      "ems": null
    },
    {
      "latitude": 38.717545,
      "longitude": -9.500366,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 147,
      "squawk": "3255",
      "timestamp": 1654428285,
      "ems": null
    },
    {
      "latitude": 38.71637,
      "longitude": -9.499472,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "3255",
      "timestamp": 1654428288,
      "ems": null
    },
    {
      "latitude": 38.715042,
      "longitude": -9.498397,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 148,
      "squawk": "3255",
      "timestamp": 1654428291,
      "ems": null
    },
    {
      "latitude": 38.712421,
      "longitude": -9.496338,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 147,
      "squawk": "3255",
      "timestamp": 1654428297,
      "ems": null
    },
    {
      "latitude": 38.710186,
      "longitude": -9.494446,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "3255",
      "timestamp": 1654428303,
      "ems": null
    },
    {
      "latitude": 38.709072,
      "longitude": -9.493347,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 141,
      "squawk": "3255",
      "timestamp": 1654428306,
      "ems": null
    },
    {
      "latitude": 38.707764,
      "longitude": -9.491949,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "3255",
      "timestamp": 1654428309,
      "ems": null
    },
    {
      "latitude": 38.706711,
      "longitude": -9.490754,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "3255",
      "timestamp": 1654428312,
      "ems": null
    },
    {
      "latitude": 38.705658,
      "longitude": -9.48962,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "3255",
      "timestamp": 1654428315,
      "ems": null
    },
    {
      "latitude": 38.70446,
      "longitude": -9.488342,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "3255",
      "timestamp": 1654428318,
      "ems": null
    },
    {
      "latitude": 38.703529,
      "longitude": -9.487305,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "3255",
      "timestamp": 1654428321,
      "ems": null
    },
    {
      "latitude": 38.702461,
      "longitude": -9.485962,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "3255",
      "timestamp": 1654428324,
      "ems": null
    },
    {
      "latitude": 38.70153,
      "longitude": -9.484741,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 132,
      "squawk": "3255",
      "timestamp": 1654428327,
      "ems": null
    },
    {
      "latitude": 38.700504,
      "longitude": -9.483215,
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
      "heading": 129,
      "squawk": "3255",
      "timestamp": 1654428330,
      "ems": null
    },
    {
      "latitude": 38.699799,
      "longitude": -9.482038,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "3255",
      "timestamp": 1654428333,
      "ems": null
    },
    {
      "latitude": 38.698875,
      "longitude": -9.480286,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 122,
      "squawk": "3255",
      "timestamp": 1654428336,
      "ems": null
    },
    {
      "latitude": 38.698151,
      "longitude": -9.478693,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 119,
      "squawk": "3255",
      "timestamp": 1654428339,
      "ems": null
    },
    {
      "latitude": 38.69751,
      "longitude": -9.477141,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "3255",
      "timestamp": 1654428342,
      "ems": null
    },
    {
      "latitude": 38.69696,
      "longitude": -9.475708,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "3255",
      "timestamp": 1654428345,
      "ems": null
    },
    {
      "latitude": 38.696362,
      "longitude": -9.473999,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "3255",
      "timestamp": 1654428348,
      "ems": null
    },
    {
      "latitude": 38.695896,
      "longitude": -9.472534,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "3255",
      "timestamp": 1654428351,
      "ems": null
    },
    {
      "latitude": 38.695477,
      "longitude": -9.470886,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "3255",
      "timestamp": 1654428354,
      "ems": null
    },
    {
      "latitude": 38.695103,
      "longitude": -9.46936,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "3255",
      "timestamp": 1654428357,
      "ems": null
    },
    {
      "latitude": 38.694824,
      "longitude": -9.467651,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 101,
      "squawk": "3255",
      "timestamp": 1654428360,
      "ems": null
    },
    {
      "latitude": 38.694592,
      "longitude": -9.465942,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 99,
      "squawk": "3255",
      "timestamp": 1654428363,
      "ems": null
    },
    {
      "latitude": 38.694351,
      "longitude": -9.464363,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 100,
      "squawk": "3255",
      "timestamp": 1654428366,
      "ems": null
    },
    {
      "latitude": 38.694122,
      "longitude": -9.462811,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 101,
      "squawk": "3255",
      "timestamp": 1654428369,
      "ems": null
    },
    {
      "latitude": 38.693939,
      "longitude": -9.461318,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 98,
      "squawk": "3255",
      "timestamp": 1654428372,
      "ems": null
    },
    {
      "latitude": 38.693756,
      "longitude": -9.459717,
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
      "heading": 97,
      "squawk": "3255",
      "timestamp": 1654428376,
      "ems": null
    },
    {
      "latitude": 38.693569,
      "longitude": -9.457947,
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
      "heading": 97,
      "squawk": "3255",
      "timestamp": 1654428379,
      "ems": null
    },
    {
      "latitude": 38.693436,
      "longitude": -9.456482,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "3255",
      "timestamp": 1654428382,
      "ems": null
    },
    {
      "latitude": 38.693207,
      "longitude": -9.454691,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 98,
      "squawk": "3255",
      "timestamp": 1654428385,
      "ems": null
    },
    {
      "latitude": 38.693008,
      "longitude": -9.453186,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "3255",
      "timestamp": 1654428388,
      "ems": null
    },
    {
      "latitude": 38.692871,
      "longitude": -9.45166,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 95,
      "squawk": "3255",
      "timestamp": 1654428391,
      "ems": null
    },
    {
      "latitude": 38.692841,
      "longitude": -9.450152,
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
      "heading": 90,
      "squawk": "3255",
      "timestamp": 1654428394,
      "ems": null
    },
    {
      "latitude": 38.692841,
      "longitude": -9.448421,
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
      "heading": 88,
      "squawk": "3255",
      "timestamp": 1654428397,
      "ems": null
    },
    {
      "latitude": 38.692886,
      "longitude": -9.446988,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 87,
      "squawk": "3255",
      "timestamp": 1654428400,
      "ems": null
    },
    {
      "latitude": 38.692963,
      "longitude": -9.445251,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 86,
      "squawk": "3255",
      "timestamp": 1654428403,
      "ems": null
    },
    {
      "latitude": 38.693058,
      "longitude": -9.443848,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "3255",
      "timestamp": 1654428406,
      "ems": null
    },
    {
      "latitude": 38.693241,
      "longitude": -9.442078,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 82,
      "squawk": "3255",
      "timestamp": 1654428409,
      "ems": null
    },
    {
      "latitude": 38.693382,
      "longitude": -9.440735,
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
      "heading": 82,
      "squawk": "3255",
      "timestamp": 1654428412,
      "ems": null
    },
    {
      "latitude": 38.693527,
      "longitude": -9.439047,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "3255",
      "timestamp": 1654428415,
      "ems": null
    },
    {
      "latitude": 38.693707,
      "longitude": -9.437683,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "3255",
      "timestamp": 1654428418,
      "ems": null
    },
    {
      "latitude": 38.693939,
      "longitude": -9.436002,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "3255",
      "timestamp": 1654428421,
      "ems": null
    },
    {
      "latitude": 38.694168,
      "longitude": -9.434449,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "3255",
      "timestamp": 1654428424,
      "ems": null
    },
    {
      "latitude": 38.694214,
      "longitude": -9.434092,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "3255",
      "timestamp": 1654428425,
      "ems": null
    },
    {
      "latitude": 38.694405,
      "longitude": -9.432495,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "3255",
      "timestamp": 1654428428,
      "ems": null
    },
    {
      "latitude": 38.694592,
      "longitude": -9.430786,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 81,
      "squawk": "3255",
      "timestamp": 1654428431,
      "ems": null
    },
    {
      "latitude": 38.694946,
      "longitude": -9.42824,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "3255",
      "timestamp": 1654428436,
      "ems": null
    },
    {
      "latitude": 38.695175,
      "longitude": -9.425911,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 83,
      "squawk": "3255",
      "timestamp": 1654428443,
      "ems": null
    },
    {
      "latitude": 38.695572,
      "longitude": -9.422119,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 80,
      "squawk": "3255",
      "timestamp": 1654428447,
      "ems": null
    },
    {
      "latitude": 38.696228,
      "longitude": -9.417074,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 83,
      "squawk": "3255",
      "timestamp": 1654428457,
      "ems": null
    },
    {
      "latitude": 38.696407,
      "longitude": -9.413574,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "3255",
      "timestamp": 1654428463,
      "ems": null
    },
    {
      "latitude": 38.696594,
      "longitude": -9.410626,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "3255",
      "timestamp": 1654428469,
      "ems": null
    },
    {
      "latitude": 38.696781,
      "longitude": -9.40741,
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
      "heading": 86,
      "squawk": "3255",
      "timestamp": 1654428475,
      "ems": null
    },
    {
      "latitude": 38.696827,
      "longitude": -9.405823,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "3255",
      "timestamp": 1654428478,
      "ems": null
    },
    {
      "latitude": 38.696968,
      "longitude": -9.403992,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "3255",
      "timestamp": 1654428481,
      "ems": null
    },
    {
      "latitude": 38.697281,
      "longitude": -9.400953,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 81,
      "squawk": "3255",
      "timestamp": 1654428487,
      "ems": null
    },
    {
      "latitude": 38.697666,
      "longitude": -9.397522,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "3255",
      "timestamp": 1654428493,
      "ems": null
    },
    {
      "latitude": 38.697803,
      "longitude": -9.394409,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 86,
      "squawk": "3255",
      "timestamp": 1654428499,
      "ems": null
    },
    {
      "latitude": 38.698013,
      "longitude": -9.392774,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 76,
      "squawk": "3255",
      "timestamp": 1654428502,
      "ems": null
    },
    {
      "latitude": 38.698563,
      "longitude": -9.391042,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654428505,
      "ems": null
    },
    {
      "latitude": 38.698975,
      "longitude": -9.390146,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "3255",
      "timestamp": 1654428507,
      "ems": null
    },
    {
      "latitude": 38.699936,
      "longitude": -9.388832,
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
      "heading": 43,
      "squawk": "3255",
      "timestamp": 1654428511,
      "ems": null
    },
    {
      "latitude": 38.700832,
      "longitude": -9.387939,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 33,
      "squawk": "3255",
      "timestamp": 1654428514,
      "ems": null
    },
    {
      "latitude": 38.701767,
      "longitude": -9.3874,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "3255",
      "timestamp": 1654428517,
      "ems": null
    },
    {
      "latitude": 38.702877,
      "longitude": -9.387024,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "3255",
      "timestamp": 1654428520,
      "ems": null
    },
    {
      "latitude": 38.704056,
      "longitude": -9.386981,
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
      "heading": 358,
      "squawk": "3255",
      "timestamp": 1654428522,
      "ems": null
    },
    {
      "latitude": 38.705154,
      "longitude": -9.38716,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "3255",
      "timestamp": 1654428526,
      "ems": null
    },
    {
      "latitude": 38.706253,
      "longitude": -9.387579,
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
      "heading": 340,
      "squawk": "3255",
      "timestamp": 1654428529,
      "ems": null
    },
    {
      "latitude": 38.707161,
      "longitude": -9.388245,
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
      "heading": 324,
      "squawk": "3255",
      "timestamp": 1654428532,
      "ems": null
    },
    {
      "latitude": 38.708046,
      "longitude": -9.389343,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 310,
      "squawk": "3255",
      "timestamp": 1654428535,
      "ems": null
    },
    {
      "latitude": 38.708557,
      "longitude": -9.390442,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "3255",
      "timestamp": 1654428537,
      "ems": null
    },
    {
      "latitude": 38.709023,
      "longitude": -9.392029,
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
      "heading": 287,
      "squawk": "3255",
      "timestamp": 1654428541,
      "ems": null
    },
    {
      "latitude": 38.709255,
      "longitude": -9.393433,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 278,
      "squawk": "3255",
      "timestamp": 1654428544,
      "ems": null
    },
    {
      "latitude": 38.709351,
      "longitude": -9.394897,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 273,
      "squawk": "3255",
      "timestamp": 1654428547,
      "ems": null
    },
    {
      "latitude": 38.709366,
      "longitude": -9.396773,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 268,
      "squawk": "3255",
      "timestamp": 1654428550,
      "ems": null
    },
    {
      "latitude": 38.709255,
      "longitude": -9.398254,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 265,
      "squawk": "3255",
      "timestamp": 1654428553,
      "ems": null
    },
    {
      "latitude": 38.709137,
      "longitude": -9.399759,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "3255",
      "timestamp": 1654428556,
      "ems": null
    },
    {
      "latitude": 38.708954,
      "longitude": -9.401252,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654428559,
      "ems": null
    },
    {
      "latitude": 38.708771,
      "longitude": -9.402685,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654428562,
      "ems": null
    },
    {
      "latitude": 38.708633,
      "longitude": -9.40376,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654428563,
      "ems": null
    },
    {
      "latitude": 38.70842,
      "longitude": -9.405273,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654428566,
      "ems": null
    },
    {
      "latitude": 38.708267,
      "longitude": -9.406207,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 257,
      "squawk": "3255",
      "timestamp": 1654428569,
      "ems": null
    },
    {
      "latitude": 38.708046,
      "longitude": -9.407227,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654428572,
      "ems": null
    },
    {
      "latitude": 38.707394,
      "longitude": -9.408997,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "3255",
      "timestamp": 1654428574,
      "ems": null
    },
    {
      "latitude": 38.706161,
      "longitude": -9.410686,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 220,
      "squawk": "3255",
      "timestamp": 1654428578,
      "ems": null
    },
    {
      "latitude": 38.705067,
      "longitude": -9.41156,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "3255",
      "timestamp": 1654428581,
      "ems": null
    },
    {
      "latitude": 38.703827,
      "longitude": -9.412059,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "3255",
      "timestamp": 1654428584,
      "ems": null
    },
    {
      "latitude": 38.702499,
      "longitude": -9.412298,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 180,
      "squawk": "3255",
      "timestamp": 1654428587,
      "ems": null
    },
    {
      "latitude": 38.701015,
      "longitude": -9.412048,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 168,
      "squawk": "3255",
      "timestamp": 1654428590,
      "ems": null
    },
    {
      "latitude": 38.699947,
      "longitude": -9.41156,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 157,
      "squawk": "3255",
      "timestamp": 1654428593,
      "ems": null
    },
    {
      "latitude": 38.698654,
      "longitude": -9.410566,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "3255",
      "timestamp": 1654428596,
      "ems": null
    },
    {
      "latitude": 38.697876,
      "longitude": -9.409552,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 130,
      "squawk": "3255",
      "timestamp": 1654428599,
      "ems": null
    },
    {
      "latitude": 38.697247,
      "longitude": -9.408203,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 116,
      "squawk": "3255",
      "timestamp": 1654428602,
      "ems": null
    },
    {
      "latitude": 38.696777,
      "longitude": -9.405849,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 94,
      "squawk": "3255",
      "timestamp": 1654428607,
      "ems": null
    },
    {
      "latitude": 38.696823,
      "longitude": -9.404595,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "3255",
      "timestamp": 1654428610,
      "ems": null
    },
    {
      "latitude": 38.696968,
      "longitude": -9.403076,
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
      "heading": 79,
      "squawk": "3255",
      "timestamp": 1654428613,
      "ems": null
    },
    {
      "latitude": 38.697189,
      "longitude": -9.401789,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 78,
      "squawk": "3255",
      "timestamp": 1654428616,
      "ems": null
    },
    {
      "latitude": 38.697384,
      "longitude": -9.400269,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "3255",
      "timestamp": 1654428619,
      "ems": null
    },
    {
      "latitude": 38.697525,
      "longitude": -9.398804,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "3255",
      "timestamp": 1654428622,
      "ems": null
    },
    {
      "latitude": 38.697601,
      "longitude": -9.397311,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "3255",
      "timestamp": 1654428625,
      "ems": null
    },
    {
      "latitude": 38.697666,
      "longitude": -9.395813,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 89,
      "squawk": "3255",
      "timestamp": 1654428628,
      "ems": null
    },
    {
      "latitude": 38.697712,
      "longitude": -9.39447,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 86,
      "squawk": "3255",
      "timestamp": 1654428631,
      "ems": null
    },
    {
      "latitude": 38.697922,
      "longitude": -9.391877,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 82,
      "squawk": "3255",
      "timestamp": 1654428637,
      "ems": null
    },
    {
      "latitude": 38.698086,
      "longitude": -9.389404,
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
      "heading": 85,
      "squawk": "3255",
      "timestamp": 1654428643,
      "ems": null
    },
    {
      "latitude": 38.698517,
      "longitude": -9.386862,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "3255",
      "timestamp": 1654428649,
      "ems": null
    },
    {
      "latitude": 38.69902,
      "longitude": -9.385728,
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
      "heading": 54,
      "squawk": "3255",
      "timestamp": 1654428652,
      "ems": null
    },
    {
      "latitude": 38.699715,
      "longitude": -9.384766,
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
      "heading": 40,
      "squawk": "3255",
      "timestamp": 1654428655,
      "ems": null
    },
    {
      "latitude": 38.700577,
      "longitude": -9.384056,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 29,
      "squawk": "3255",
      "timestamp": 1654428658,
      "ems": null
    },
    {
      "latitude": 38.70163,
      "longitude": -9.383518,
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
      "heading": 16,
      "squawk": "3255",
      "timestamp": 1654428662,
      "ems": null
    },
    {
      "latitude": 38.702927,
      "longitude": -9.383484,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "3255",
      "timestamp": 1654428666,
      "ems": null
    },
    {
      "latitude": 38.703903,
      "longitude": -9.383667,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654428669,
      "ems": null
    },
    {
      "latitude": 38.704834,
      "longitude": -9.384094,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "3255",
      "timestamp": 1654428672,
      "ems": null
    },
    {
      "latitude": 38.70575,
      "longitude": -9.384772,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "3255",
      "timestamp": 1654428675,
      "ems": null
    },
    {
      "latitude": 38.706463,
      "longitude": -9.38562,
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
      "heading": 314,
      "squawk": "3255",
      "timestamp": 1654428678,
      "ems": null
    },
    {
      "latitude": 38.707077,
      "longitude": -9.386683,
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
      "heading": 300,
      "squawk": "3255",
      "timestamp": 1654428681,
      "ems": null
    },
    {
      "latitude": 38.707489,
      "longitude": -9.387878,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 290,
      "squawk": "3255",
      "timestamp": 1654428684,
      "ems": null
    },
    {
      "latitude": 38.707764,
      "longitude": -9.38931,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 279,
      "squawk": "3255",
      "timestamp": 1654428687,
      "ems": null
    },
    {
      "latitude": 38.707767,
      "longitude": -9.390564,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 267,
      "squawk": "3255",
      "timestamp": 1654428690,
      "ems": null
    },
    {
      "latitude": 38.707722,
      "longitude": -9.391968,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "3255",
      "timestamp": 1654428693,
      "ems": null
    },
    {
      "latitude": 38.707535,
      "longitude": -9.39349,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "3255",
      "timestamp": 1654428696,
      "ems": null
    },
    {
      "latitude": 38.707443,
      "longitude": -9.395042,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 264,
      "squawk": "3255",
      "timestamp": 1654428699,
      "ems": null
    },
    {
      "latitude": 38.707256,
      "longitude": -9.396606,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 263,
      "squawk": "3255",
      "timestamp": 1654428702,
      "ems": null
    },
    {
      "latitude": 38.707115,
      "longitude": -9.398071,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 262,
      "squawk": "3255",
      "timestamp": 1654428705,
      "ems": null
    },
    {
      "latitude": 38.706985,
      "longitude": -9.399699,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "3255",
      "timestamp": 1654428708,
      "ems": null
    },
    {
      "latitude": 38.706711,
      "longitude": -9.401431,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 258,
      "squawk": "3255",
      "timestamp": 1654428711,
      "ems": null
    },
    {
      "latitude": 38.706482,
      "longitude": -9.402804,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 258,
      "squawk": "3255",
      "timestamp": 1654428714,
      "ems": null
    },
    {
      "latitude": 38.706253,
      "longitude": -9.404357,
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
      "heading": 260,
      "squawk": "3255",
      "timestamp": 1654428717,
      "ems": null
    },
    {
      "latitude": 38.706089,
      "longitude": -9.405762,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 259,
      "squawk": "3255",
      "timestamp": 1654428720,
      "ems": null
    },
    {
      "latitude": 38.705811,
      "longitude": -9.407532,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 257,
      "squawk": "3255",
      "timestamp": 1654428723,
      "ems": null
    },
    {
      "latitude": 38.705475,
      "longitude": -9.409074,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 255,
      "squawk": "3255",
      "timestamp": 1654428726,
      "ems": null
    },
    {
      "latitude": 38.7052,
      "longitude": -9.410686,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 255,
      "squawk": "3255",
      "timestamp": 1654428729,
      "ems": null
    },
    {
      "latitude": 38.70488,
      "longitude": -9.412238,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 254,
      "squawk": "3255",
      "timestamp": 1654428732,
      "ems": null
    },
    {
      "latitude": 38.70446,
      "longitude": -9.413879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 251,
      "squawk": "3255",
      "timestamp": 1654428735,
      "ems": null
    },
    {
      "latitude": 38.703995,
      "longitude": -9.415405,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "3255",
      "timestamp": 1654428738,
      "ems": null
    },
    {
      "latitude": 38.703323,
      "longitude": -9.416717,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 230,
      "squawk": "3255",
      "timestamp": 1654428741,
      "ems": null
    },
    {
      "latitude": 38.702274,
      "longitude": -9.417908,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "3255",
      "timestamp": 1654428744,
      "ems": null
    },
    {
      "latitude": 38.701111,
      "longitude": -9.418579,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 198,
      "squawk": "3255",
      "timestamp": 1654428747,
      "ems": null
    },
    {
      "latitude": 38.699707,
      "longitude": -9.418866,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 183,
      "squawk": "3255",
      "timestamp": 1654428750,
      "ems": null
    },
    {
      "latitude": 38.698132,
      "longitude": -9.418762,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 172,
      "squawk": "3255",
      "timestamp": 1654428753,
      "ems": null
    },
    {
      "latitude": 38.696915,
      "longitude": -9.418268,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 159,
      "squawk": "3255",
      "timestamp": 1654428756,
      "ems": null
    },
    {
      "latitude": 38.695663,
      "longitude": -9.417358,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 144,
      "squawk": "3255",
      "timestamp": 1654428759,
      "ems": null
    },
    {
      "latitude": 38.694637,
      "longitude": -9.416138,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 134,
      "squawk": "3255",
      "timestamp": 1654428762,
      "ems": null
    },
    {
      "latitude": 38.693802,
      "longitude": -9.414734,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 125,
      "squawk": "3255",
      "timestamp": 1654428765,
      "ems": null
    },
    {
      "latitude": 38.692978,
      "longitude": -9.413134,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 122,
      "squawk": "3255",
      "timestamp": 1654428768,
      "ems": null
    },
    {
      "latitude": 38.692356,
      "longitude": -9.411926,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 122,
      "squawk": "3255",
      "timestamp": 1654428771,
      "ems": null
    },
    {
      "latitude": 38.691559,
      "longitude": -9.410208,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 119,
      "squawk": "3255",
      "timestamp": 1654428774,
      "ems": null
    },
    {
      "latitude": 38.691055,
      "longitude": -9.408954,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 117,
      "squawk": "3255",
      "timestamp": 1654428777,
      "ems": null
    },
    {
      "latitude": 38.690369,
      "longitude": -9.407282,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 117,
      "squawk": "3255",
      "timestamp": 1654428780,
      "ems": null
    },
    {
      "latitude": 38.689751,
      "longitude": -9.405701,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 116,
      "squawk": "3255",
      "timestamp": 1654428783,
      "ems": null
    },
    {
      "latitude": 38.689178,
      "longitude": -9.404297,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 115,
      "squawk": "3255",
      "timestamp": 1654428786,
      "ems": null
    },
    {
      "latitude": 38.688492,
      "longitude": -9.402565,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 117,
      "squawk": "3255",
      "timestamp": 1654428789,
      "ems": null
    },
    {
      "latitude": 38.687935,
      "longitude": -9.401184,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 116,
      "squawk": "3255",
      "timestamp": 1654428792,
      "ems": null
    },
    {
      "latitude": 38.687393,
      "longitude": -9.399699,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "3255",
      "timestamp": 1654428796,
      "ems": null
    },
    {
      "latitude": 38.686817,
      "longitude": -9.397949,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "3255",
      "timestamp": 1654428799,
      "ems": null
    },
    {
      "latitude": 38.68626,
      "longitude": -9.396301,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "3255",
      "timestamp": 1654428802,
      "ems": null
    },
    {
      "latitude": 38.685749,
      "longitude": -9.394714,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "3255",
      "timestamp": 1654428805,
      "ems": null
    },
    {
      "latitude": 38.685234,
      "longitude": -9.393127,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "3255",
      "timestamp": 1654428808,
      "ems": null
    },
    {
      "latitude": 38.684784,
      "longitude": -9.391758,
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
      "heading": 112,
      "squawk": "3255",
      "timestamp": 1654428811,
      "ems": null
    },
    {
      "latitude": 38.683685,
      "longitude": -9.388474,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "3255",
      "timestamp": 1654428816,
      "ems": null
    },
    {
      "latitude": 38.682583,
      "longitude": -9.385437,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "3255",
      "timestamp": 1654428822,
      "ems": null
    },
    {
      "latitude": 38.681419,
      "longitude": -9.382385,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 116,
      "squawk": "3255",
      "timestamp": 1654428829,
      "ems": null
    },
    {
      "latitude": 38.680813,
      "longitude": -9.380981,
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
      "heading": 117,
      "squawk": "3255",
      "timestamp": 1654428832,
      "ems": null
    },
    {
      "latitude": 38.680206,
      "longitude": -9.379578,
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
      "heading": 118,
      "squawk": "3255",
      "timestamp": 1654428835,
      "ems": null
    },
    {
      "latitude": 38.679657,
      "longitude": -9.378204,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "3255",
      "timestamp": 1654428838,
      "ems": null
    },
    {
      "latitude": 38.679016,
      "longitude": -9.376652,
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
      "heading": 117,
      "squawk": "3255",
      "timestamp": 1654428841,
      "ems": null
    },
    {
      "latitude": 38.677975,
      "longitude": -9.373779,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 112,
      "squawk": "3255",
      "timestamp": 1654428847,
      "ems": null
    },
    {
      "latitude": 38.677509,
      "longitude": -9.372192,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 109,
      "squawk": "3255",
      "timestamp": 1654428850,
      "ems": null
    },
    {
      "latitude": 38.677094,
      "longitude": -9.370442,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 105,
      "squawk": "3255",
      "timestamp": 1654428853,
      "ems": null
    },
    {
      "latitude": 38.676773,
      "longitude": -9.36883,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 104,
      "squawk": "3255",
      "timestamp": 1654428856,
      "ems": null
    },
    {
      "latitude": 38.676407,
      "longitude": -9.367158,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 105,
      "squawk": "3255",
      "timestamp": 1654428859,
      "ems": null
    },
    {
      "latitude": 38.675995,
      "longitude": -9.365248,
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
      "heading": 106,
      "squawk": "3255",
      "timestamp": 1654428862,
      "ems": null
    },
    {
      "latitude": 38.675674,
      "longitude": -9.363814,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 106,
      "squawk": "3255",
      "timestamp": 1654428865,
      "ems": null
    },
    {
      "latitude": 38.675308,
      "longitude": -9.362203,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 104,
      "squawk": "3255",
      "timestamp": 1654428868,
      "ems": null
    },
    {
      "latitude": 38.675034,
      "longitude": -9.36059,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 104,
      "squawk": "3255",
      "timestamp": 1654428871,
      "ems": null
    },
    {
      "latitude": 38.674667,
      "longitude": -9.358948,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 106,
      "squawk": "3255",
      "timestamp": 1654428874,
      "ems": null
    },
    {
      "latitude": 38.674248,
      "longitude": -9.357117,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 104,
      "squawk": "3255",
      "timestamp": 1654428877,
      "ems": null
    },
    {
      "latitude": 38.674015,
      "longitude": -9.35553,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "3255",
      "timestamp": 1654428880,
      "ems": null
    },
    {
      "latitude": 38.673889,
      "longitude": -9.354082,
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
      "heading": 91,
      "squawk": "3255",
      "timestamp": 1654428883,
      "ems": null
    },
    {
      "latitude": 38.673969,
      "longitude": -9.352539,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "3255",
      "timestamp": 1654428886,
      "ems": null
    },
    {
      "latitude": 38.674202,
      "longitude": -9.350952,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 76,
      "squawk": "3255",
      "timestamp": 1654428889,
      "ems": null
    },
    {
      "latitude": 38.67453,
      "longitude": -9.349604,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654428892,
      "ems": null
    },
    {
      "latitude": 38.674896,
      "longitude": -9.34841,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 65,
      "squawk": "3255",
      "timestamp": 1654428895,
      "ems": null
    },
    {
      "latitude": 38.675365,
      "longitude": -9.347229,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654428898,
      "ems": null
    },
    {
      "latitude": 38.675739,
      "longitude": -9.346252,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 63,
      "squawk": "3255",
      "timestamp": 1654428901,
      "ems": null
    },
    {
      "latitude": 38.676178,
      "longitude": -9.345185,
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
      "heading": 64,
      "squawk": "3255",
      "timestamp": 1654428904,
      "ems": null
    },
    {
      "latitude": 38.67659,
      "longitude": -9.344171,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 61,
      "squawk": "3255",
      "timestamp": 1654428907,
      "ems": null
    },
    {
      "latitude": 38.677002,
      "longitude": -9.343275,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 57,
      "squawk": "3255",
      "timestamp": 1654428910,
      "ems": null
    },
    {
      "latitude": 38.677597,
      "longitude": -9.3422,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 52,
      "squawk": "3255",
      "timestamp": 1654428913,
      "ems": null
    },
    {
      "latitude": 38.678146,
      "longitude": -9.341484,
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
      "heading": 42,
      "squawk": "3255",
      "timestamp": 1654428916,
      "ems": null
    },
    {
      "latitude": 38.678925,
      "longitude": -9.340767,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 33,
      "squawk": "3255",
      "timestamp": 1654428919,
      "ems": null
    },
    {
      "latitude": 38.679657,
      "longitude": -9.34023,
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
      "heading": 24,
      "squawk": "3255",
      "timestamp": 1654428922,
      "ems": null
    },
    {
      "latitude": 38.680527,
      "longitude": -9.339871,
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
      "heading": 14,
      "squawk": "3255",
      "timestamp": 1654428925,
      "ems": null
    },
    {
      "latitude": 38.681442,
      "longitude": -9.339752,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 3,
      "squawk": "3255",
      "timestamp": 1654428928,
      "ems": null
    },
    {
      "latitude": 38.682312,
      "longitude": -9.339871,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "3255",
      "timestamp": 1654428931,
      "ems": null
    },
    {
      "latitude": 38.683182,
      "longitude": -9.339991,
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
      "heading": 350,
      "squawk": "3255",
      "timestamp": 1654428934,
      "ems": null
    },
    {
      "latitude": 38.684006,
      "longitude": -9.34023,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654428937,
      "ems": null
    },
    {
      "latitude": 38.68483,
      "longitude": -9.340589,
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
      "heading": 341,
      "squawk": "3255",
      "timestamp": 1654428941,
      "ems": null
    },
    {
      "latitude": 38.685608,
      "longitude": -9.340887,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654428943,
      "ems": null
    },
    {
      "latitude": 38.686386,
      "longitude": -9.341125,
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
      "heading": 348,
      "squawk": "3255",
      "timestamp": 1654428946,
      "ems": null
    },
    {
      "latitude": 38.687164,
      "longitude": -9.341364,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654428949,
      "ems": null
    },
    {
      "latitude": 38.687981,
      "longitude": -9.341675,
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
      "heading": 342,
      "squawk": "3255",
      "timestamp": 1654428952,
      "ems": null
    },
    {
      "latitude": 38.68882,
      "longitude": -9.341919,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654428955,
      "ems": null
    },
    {
      "latitude": 38.689682,
      "longitude": -9.34226,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "3255",
      "timestamp": 1654428959,
      "ems": null
    },
    {
      "latitude": 38.69138,
      "longitude": -9.342712,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "3255",
      "timestamp": 1654428964,
      "ems": null
    },
    {
      "latitude": 38.693069,
      "longitude": -9.343335,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654428970,
      "ems": null
    },
    {
      "latitude": 38.693848,
      "longitude": -9.343693,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 339,
      "squawk": "3255",
      "timestamp": 1654428974,
      "ems": null
    },
    {
      "latitude": 38.694687,
      "longitude": -9.344055,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 342,
      "squawk": "3255",
      "timestamp": 1654428977,
      "ems": null
    },
    {
      "latitude": 38.69664,
      "longitude": -9.344768,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654428983,
      "ems": null
    },
    {
      "latitude": 38.698318,
      "longitude": -9.345459,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "3255",
      "timestamp": 1654428989,
      "ems": null
    },
    {
      "latitude": 38.699154,
      "longitude": -9.345764,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654428992,
      "ems": null
    },
    {
      "latitude": 38.700737,
      "longitude": -9.346313,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654428998,
      "ems": null
    },
    {
      "latitude": 38.701492,
      "longitude": -9.346619,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654429001,
      "ems": null
    },
    {
      "latitude": 38.702225,
      "longitude": -9.346857,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654429004,
      "ems": null
    },
    {
      "latitude": 38.703735,
      "longitude": -9.347395,
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
      "squawk": "3255",
      "timestamp": 1654429010,
      "ems": null
    },
    {
      "latitude": 38.705208,
      "longitude": -9.347961,
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
      "squawk": "3255",
      "timestamp": 1654429016,
      "ems": null
    },
    {
      "latitude": 38.706665,
      "longitude": -9.34841,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654429022,
      "ems": null
    },
    {
      "latitude": 38.708038,
      "longitude": -9.349007,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654429028,
      "ems": null
    },
    {
      "latitude": 38.709641,
      "longitude": -9.349604,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 343,
      "squawk": "3255",
      "timestamp": 1654429034,
      "ems": null
    },
    {
      "latitude": 38.711197,
      "longitude": -9.350142,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 341,
      "squawk": "3255",
      "timestamp": 1654429040,
      "ems": null
    },
    {
      "latitude": 38.712654,
      "longitude": -9.350708,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "3255",
      "timestamp": 1654429046,
      "ems": null
    },
    {
      "latitude": 38.71405,
      "longitude": -9.351257,
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
      "heading": 342,
      "squawk": "3255",
      "timestamp": 1654429052,
      "ems": null
    },
    {
      "latitude": 38.715542,
      "longitude": -9.351746,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654429059,
      "ems": null
    },
    {
      "latitude": 38.716919,
      "longitude": -9.352231,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654429065,
      "ems": null
    },
    {
      "latitude": 38.718243,
      "longitude": -9.352722,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "squawk": "3255",
      "timestamp": 1654429071,
      "ems": null
    },
    {
      "latitude": 38.719452,
      "longitude": -9.353149,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654429076,
      "ems": null
    },
    {
      "latitude": 38.720581,
      "longitude": -9.353604,
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
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654429082,
      "ems": null
    },
    {
      "latitude": 38.721405,
      "longitude": -9.353903,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "3255",
      "timestamp": 1654429088,
      "ems": null
    },
    {
      "latitude": 38.722092,
      "longitude": -9.354142,
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
      "heading": 344,
      "squawk": "3255",
      "timestamp": 1654429095,
      "ems": null
    },
    {
      "latitude": 38.722569,
      "longitude": -9.354309,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 340,
      "squawk": "3255",
      "timestamp": 1654429100,
      "ems": null
    },
    {
      "latitude": 38.722916,
      "longitude": -9.354381,
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
      "heading": 355,
      "squawk": "3255",
      "timestamp": 1654429106,
      "ems": null
    },
    {
      "latitude": 38.723145,
      "longitude": -9.354142,
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
      "heading": 71,
      "squawk": "3255",
      "timestamp": 1654429115,
      "ems": null
    },
    {
      "latitude": 38.72319,
      "longitude": -9.353844,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 16.7,
        "kts": 9,
        "mph": 10.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "3255",
      "timestamp": 1654429121,
      "ems": null
    }
  ]
};
