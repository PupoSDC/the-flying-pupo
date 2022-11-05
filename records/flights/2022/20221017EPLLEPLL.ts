import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20221017EPLLEPLL",
    callsign: "BNI8S",
    name: "First CPL class CP1/01",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 9, 17, 13, 16).getTime(),
    arrival: new Date(2022, 9, 17, 14, 33).getTime(),
    singleEnginePistonTime: 77,
    multiEnginePistonTime: 0,
    picTime: 0,
    dualTime: 77,
    landings: {
      day: 5,
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
      registration: "SP-FIS",
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
        "latitude": 51.723633,
        "longitude": 19.40616,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 1.9,
            "kts": 1,
            "mph": 1.2
        },
        "verticalSpeed": {
            "fpm": 0,
            "ms": 0
        },
        "heading": 89,
        "squawk": "0",
        "timestamp": 1666013239,
        "ems": null
    },
    {
        "latitude": 51.723541,
        "longitude": 19.405727,
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
        "heading": 250,
        "squawk": "0",
        "timestamp": 1666013270,
        "ems": null
    },
    {
        "latitude": 51.72205,
        "longitude": 19.398727,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "0",
        "timestamp": 1666013290,
        "ems": null
    },
    {
        "latitude": 51.721073,
        "longitude": 19.39415,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "0",
        "timestamp": 1666013300,
        "ems": null
    },
    {
        "latitude": 51.720291,
        "longitude": 19.390572,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666013307,
        "ems": null
    },
    {
        "latitude": 51.719677,
        "longitude": 19.38797,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 118.5,
            "kts": 64,
            "mph": 73.6
        },
        "verticalSpeed": {
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666013312,
        "ems": null
    },
    {
        "latitude": 51.718964,
        "longitude": 19.385078,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 118.5,
            "kts": 64,
            "mph": 73.6
        },
        "verticalSpeed": {
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666013319,
        "ems": null
    },
    {
        "latitude": 51.718369,
        "longitude": 19.382332,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666013325,
        "ems": null
    },
    {
        "latitude": 51.717773,
        "longitude": 19.380032,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666013330,
        "ems": null
    },
    {
        "latitude": 51.717117,
        "longitude": 19.376755,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666013336,
        "ems": null
    },
    {
        "latitude": 51.716446,
        "longitude": 19.37335,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 254,
        "squawk": "7000",
        "timestamp": 1666013343,
        "ems": null
    },
    {
        "latitude": 51.716217,
        "longitude": 19.371792,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 255,
        "squawk": "7000",
        "timestamp": 1666013346,
        "ems": null
    },
    {
        "latitude": 51.715988,
        "longitude": 19.370234,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666013349,
        "ems": null
    },
    {
        "latitude": 51.715759,
        "longitude": 19.368673,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666013352,
        "ems": null
    },
    {
        "latitude": 51.71558,
        "longitude": 19.367676,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 255,
        "squawk": "7000",
        "timestamp": 1666013354,
        "ems": null
    },
    {
        "latitude": 51.714741,
        "longitude": 19.364014,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 133.3,
            "kts": 72,
            "mph": 82.9
        },
        "verticalSpeed": {
            "fpm": 832,
            "ms": 4.2
        },
        "heading": 242,
        "squawk": "7000",
        "timestamp": 1666013361,
        "ems": null
    },
    {
        "latitude": 51.714203,
        "longitude": 19.362661,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 127.8,
            "kts": 69,
            "mph": 79.4
        },
        "verticalSpeed": {
            "fpm": 896,
            "ms": 4.6
        },
        "heading": 236,
        "squawk": "7000",
        "timestamp": 1666013364,
        "ems": null
    },
    {
        "latitude": 51.71381,
        "longitude": 19.361801,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 232,
        "squawk": "7000",
        "timestamp": 1666013366,
        "ems": null
    },
    {
        "latitude": 51.712971,
        "longitude": 19.360352,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 226,
        "squawk": "7000",
        "timestamp": 1666013370,
        "ems": null
    },
    {
        "latitude": 51.712273,
        "longitude": 19.359436,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 214,
        "squawk": "7000",
        "timestamp": 1666013373,
        "ems": null
    },
    {
        "latitude": 51.711502,
        "longitude": 19.358727,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 210,
        "squawk": "7000",
        "timestamp": 1666013376,
        "ems": null
    },
    {
        "latitude": 51.710724,
        "longitude": 19.357985,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 209,
        "squawk": "7000",
        "timestamp": 1666013379,
        "ems": null
    },
    {
        "latitude": 51.709854,
        "longitude": 19.357452,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 200,
        "squawk": "7000",
        "timestamp": 1666013382,
        "ems": null
    },
    {
        "latitude": 51.709015,
        "longitude": 19.357071,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 195,
        "squawk": "7000",
        "timestamp": 1666013385,
        "ems": null
    },
    {
        "latitude": 51.708736,
        "longitude": 19.356918,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 188,
        "squawk": "7000",
        "timestamp": 1666013388,
        "ems": null
    },
    {
        "latitude": 51.707245,
        "longitude": 19.356722,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 180,
        "squawk": "7000",
        "timestamp": 1666013391,
        "ems": null
    },
    {
        "latitude": 51.706364,
        "longitude": 19.356842,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 174,
        "squawk": "7000",
        "timestamp": 1666013394,
        "ems": null
    },
    {
        "latitude": 51.70557,
        "longitude": 19.357071,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 122.2,
            "kts": 66,
            "mph": 76
        },
        "verticalSpeed": {
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 168,
        "squawk": "7000",
        "timestamp": 1666013397,
        "ems": null
    },
    {
        "latitude": 51.704498,
        "longitude": 19.357529,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 122.2,
            "kts": 66,
            "mph": 76
        },
        "verticalSpeed": {
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 168,
        "squawk": "7000",
        "timestamp": 1666013400,
        "ems": null
    },
    {
        "latitude": 51.703629,
        "longitude": 19.358059,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 156,
        "squawk": "7000",
        "timestamp": 1666013403,
        "ems": null
    },
    {
        "latitude": 51.702869,
        "longitude": 19.358673,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 151,
        "squawk": "7000",
        "timestamp": 1666013406,
        "ems": null
    },
    {
        "latitude": 51.702164,
        "longitude": 19.35932,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 149,
        "squawk": "7000",
        "timestamp": 1666013409,
        "ems": null
    },
    {
        "latitude": 51.701157,
        "longitude": 19.360285,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 149,
        "squawk": "7000",
        "timestamp": 1666013412,
        "ems": null
    },
    {
        "latitude": 51.70031,
        "longitude": 19.361191,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 145,
        "squawk": "7000",
        "timestamp": 1666013415,
        "ems": null
    },
    {
        "latitude": 51.699509,
        "longitude": 19.362141,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 143,
        "squawk": "7000",
        "timestamp": 1666013418,
        "ems": null
    },
    {
        "latitude": 51.69873,
        "longitude": 19.363106,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 141,
        "squawk": "7000",
        "timestamp": 1666013421,
        "ems": null
    },
    {
        "latitude": 51.697952,
        "longitude": 19.364145,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 138,
        "squawk": "7000",
        "timestamp": 1666013424,
        "ems": null
    },
    {
        "latitude": 51.697189,
        "longitude": 19.365387,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 135,
        "squawk": "7000",
        "timestamp": 1666013427,
        "ems": null
    },
    {
        "latitude": 51.696487,
        "longitude": 19.366447,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 137,
        "squawk": "7000",
        "timestamp": 1666013430,
        "ems": null
    },
    {
        "latitude": 51.695656,
        "longitude": 19.367599,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 138,
        "squawk": "7000",
        "timestamp": 1666013433,
        "ems": null
    },
    {
        "latitude": 51.694817,
        "longitude": 19.36882,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 136,
        "squawk": "7000",
        "timestamp": 1666013437,
        "ems": null
    },
    {
        "latitude": 51.694027,
        "longitude": 19.370041,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 137,
        "squawk": "7000",
        "timestamp": 1666013439,
        "ems": null
    },
    {
        "latitude": 51.693237,
        "longitude": 19.371124,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 139,
        "squawk": "7000",
        "timestamp": 1666013443,
        "ems": null
    },
    {
        "latitude": 51.691372,
        "longitude": 19.373398,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 143,
        "squawk": "7000",
        "timestamp": 1666013448,
        "ems": null
    },
    {
        "latitude": 51.689484,
        "longitude": 19.375652,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 142,
        "squawk": "7000",
        "timestamp": 1666013454,
        "ems": null
    },
    {
        "latitude": 51.688522,
        "longitude": 19.376839,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 143,
        "squawk": "7000",
        "timestamp": 1666013458,
        "ems": null
    },
    {
        "latitude": 51.687653,
        "longitude": 19.377804,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 144,
        "squawk": "7000",
        "timestamp": 1666013460,
        "ems": null
    },
    {
        "latitude": 51.686737,
        "longitude": 19.378843,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 144,
        "squawk": "7000",
        "timestamp": 1666013463,
        "ems": null
    },
    {
        "latitude": 51.685738,
        "longitude": 19.379959,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 145,
        "squawk": "7000",
        "timestamp": 1666013467,
        "ems": null
    },
    {
        "latitude": 51.684769,
        "longitude": 19.380997,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 147,
        "squawk": "7000",
        "timestamp": 1666013470,
        "ems": null
    },
    {
        "latitude": 51.683971,
        "longitude": 19.38179,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 150,
        "squawk": "7000",
        "timestamp": 1666013472,
        "ems": null
    },
    {
        "latitude": 51.682945,
        "longitude": 19.382706,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 149,
        "squawk": "7000",
        "timestamp": 1666013475,
        "ems": null
    },
    {
        "latitude": 51.681061,
        "longitude": 19.38493,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 139,
        "squawk": "7000",
        "timestamp": 1666013482,
        "ems": null
    },
    {
        "latitude": 51.680191,
        "longitude": 19.386267,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013485,
        "ems": null
    },
    {
        "latitude": 51.679409,
        "longitude": 19.387741,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 128,
        "squawk": "7000",
        "timestamp": 1666013488,
        "ems": null
    },
    {
        "latitude": 51.679081,
        "longitude": 19.388504,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 130,
        "squawk": "7000",
        "timestamp": 1666013489,
        "ems": null
    },
    {
        "latitude": 51.677994,
        "longitude": 19.390795,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 127,
        "squawk": "7000",
        "timestamp": 1666013494,
        "ems": null
    },
    {
        "latitude": 51.677307,
        "longitude": 19.392353,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 126,
        "squawk": "7000",
        "timestamp": 1666013497,
        "ems": null
    },
    {
        "latitude": 51.676708,
        "longitude": 19.393616,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 124,
        "squawk": "7000",
        "timestamp": 1666013499,
        "ems": null
    },
    {
        "latitude": 51.676117,
        "longitude": 19.3951,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 123,
        "squawk": "7000",
        "timestamp": 1666013502,
        "ems": null
    },
    {
        "latitude": 51.675591,
        "longitude": 19.396744,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 115,
        "squawk": "7000",
        "timestamp": 1666013505,
        "ems": null
    },
    {
        "latitude": 51.675034,
        "longitude": 19.399033,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 109,
        "squawk": "7000",
        "timestamp": 1666013509,
        "ems": null
    },
    {
        "latitude": 51.674835,
        "longitude": 19.400223,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 113,
        "squawk": "7000",
        "timestamp": 1666013510,
        "ems": null
    },
    {
        "latitude": 51.674515,
        "longitude": 19.403118,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 96,
        "squawk": "7000",
        "timestamp": 1666013515,
        "ems": null
    },
    {
        "latitude": 51.674469,
        "longitude": 19.403786,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 93,
        "squawk": "7000",
        "timestamp": 1666013517,
        "ems": null
    },
    {
        "latitude": 51.674377,
        "longitude": 19.407572,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 91,
        "squawk": "7000",
        "timestamp": 1666013522,
        "ems": null
    },
    {
        "latitude": 51.674332,
        "longitude": 19.408907,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 92,
        "squawk": "7000",
        "timestamp": 1666013524,
        "ems": null
    },
    {
        "latitude": 51.674286,
        "longitude": 19.409943,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 93,
        "squawk": "7000",
        "timestamp": 1666013525,
        "ems": null
    },
    {
        "latitude": 51.674149,
        "longitude": 19.412916,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 95,
        "squawk": "7000",
        "timestamp": 1666013530,
        "ems": null
    },
    {
        "latitude": 51.674007,
        "longitude": 19.414139,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 97,
        "squawk": "7000",
        "timestamp": 1666013531,
        "ems": null
    },
    {
        "latitude": 51.673775,
        "longitude": 19.417038,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 99,
        "squawk": "7000",
        "timestamp": 1666013536,
        "ems": null
    },
    {
        "latitude": 51.673508,
        "longitude": 19.419003,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 101,
        "squawk": "7000",
        "timestamp": 1666013539,
        "ems": null
    },
    {
        "latitude": 51.673187,
        "longitude": 19.421082,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666013542,
        "ems": null
    },
    {
        "latitude": 51.672798,
        "longitude": 19.422913,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 108,
        "squawk": "7000",
        "timestamp": 1666013545,
        "ems": null
    },
    {
        "latitude": 51.672333,
        "longitude": 19.424744,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 112,
        "squawk": "7000",
        "timestamp": 1666013548,
        "ems": null
    },
    {
        "latitude": 51.671906,
        "longitude": 19.426203,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 118,
        "squawk": "7000",
        "timestamp": 1666013551,
        "ems": null
    },
    {
        "latitude": 51.671402,
        "longitude": 19.42754,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 120,
        "squawk": "7000",
        "timestamp": 1666013553,
        "ems": null
    },
    {
        "latitude": 51.670898,
        "longitude": 19.428728,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 121,
        "squawk": "7000",
        "timestamp": 1666013555,
        "ems": null
    },
    {
        "latitude": 51.669724,
        "longitude": 19.431229,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 129,
        "squawk": "7000",
        "timestamp": 1666013560,
        "ems": null
    },
    {
        "latitude": 51.669022,
        "longitude": 19.432514,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 132,
        "squawk": "7000",
        "timestamp": 1666013563,
        "ems": null
    },
    {
        "latitude": 51.668198,
        "longitude": 19.433924,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013566,
        "ems": null
    },
    {
        "latitude": 51.667236,
        "longitude": 19.435482,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 135,
        "squawk": "7000",
        "timestamp": 1666013569,
        "ems": null
    },
    {
        "latitude": 51.666374,
        "longitude": 19.436722,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 137,
        "squawk": "7000",
        "timestamp": 1666013572,
        "ems": null
    },
    {
        "latitude": 51.665489,
        "longitude": 19.437943,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 138,
        "squawk": "7000",
        "timestamp": 1666013575,
        "ems": null
    },
    {
        "latitude": 51.664581,
        "longitude": 19.438971,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 145,
        "squawk": "7000",
        "timestamp": 1666013578,
        "ems": null
    },
    {
        "latitude": 51.663719,
        "longitude": 19.43985,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 148,
        "squawk": "7000",
        "timestamp": 1666013581,
        "ems": null
    },
    {
        "latitude": 51.662521,
        "longitude": 19.440975,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 151,
        "squawk": "7000",
        "timestamp": 1666013584,
        "ems": null
    },
    {
        "latitude": 51.662018,
        "longitude": 19.441347,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 154,
        "squawk": "7000",
        "timestamp": 1666013586,
        "ems": null
    },
    {
        "latitude": 51.660416,
        "longitude": 19.442461,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 154,
        "squawk": "7000",
        "timestamp": 1666013591,
        "ems": null
    },
    {
        "latitude": 51.659225,
        "longitude": 19.443573,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013594,
        "ems": null
    },
    {
        "latitude": 51.657528,
        "longitude": 19.446259,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 131,
        "squawk": "7000",
        "timestamp": 1666013600,
        "ems": null
    },
    {
        "latitude": 51.656845,
        "longitude": 19.447582,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 127,
        "squawk": "7000",
        "timestamp": 1666013603,
        "ems": null
    },
    {
        "latitude": 51.656158,
        "longitude": 19.449141,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 124,
        "squawk": "7000",
        "timestamp": 1666013606,
        "ems": null
    },
    {
        "latitude": 51.655479,
        "longitude": 19.45076,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 123,
        "squawk": "7000",
        "timestamp": 1666013609,
        "ems": null
    },
    {
        "latitude": 51.654785,
        "longitude": 19.452408,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 124,
        "squawk": "7000",
        "timestamp": 1666013612,
        "ems": null
    },
    {
        "latitude": 51.654083,
        "longitude": 19.454117,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 124,
        "squawk": "7000",
        "timestamp": 1666013615,
        "ems": null
    },
    {
        "latitude": 51.653431,
        "longitude": 19.455643,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 123,
        "squawk": "7000",
        "timestamp": 1666013618,
        "ems": null
    },
    {
        "latitude": 51.652779,
        "longitude": 19.457245,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 122,
        "squawk": "7000",
        "timestamp": 1666013621,
        "ems": null
    },
    {
        "latitude": 51.65213,
        "longitude": 19.458923,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 122,
        "squawk": "7000",
        "timestamp": 1666013624,
        "ems": null
    },
    {
        "latitude": 51.651398,
        "longitude": 19.460796,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 121,
        "squawk": "7000",
        "timestamp": 1666013627,
        "ems": null
    },
    {
        "latitude": 51.650757,
        "longitude": 19.462503,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 121,
        "squawk": "7000",
        "timestamp": 1666013630,
        "ems": null
    },
    {
        "latitude": 51.650173,
        "longitude": 19.464035,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 121,
        "squawk": "7000",
        "timestamp": 1666013633,
        "ems": null
    },
    {
        "latitude": 51.648788,
        "longitude": 19.467773,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013639,
        "ems": null
    },
    {
        "latitude": 51.64817,
        "longitude": 19.469452,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 119,
        "squawk": "7000",
        "timestamp": 1666013642,
        "ems": null
    },
    {
        "latitude": 51.647568,
        "longitude": 19.471207,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 119,
        "squawk": "7000",
        "timestamp": 1666013645,
        "ems": null
    },
    {
        "latitude": 51.646317,
        "longitude": 19.474751,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 118,
        "squawk": "7000",
        "timestamp": 1666013651,
        "ems": null
    },
    {
        "latitude": 51.645126,
        "longitude": 19.478241,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 118,
        "squawk": "7000",
        "timestamp": 1666013657,
        "ems": null
    },
    {
        "latitude": 51.644028,
        "longitude": 19.48143,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 118,
        "squawk": "7000",
        "timestamp": 1666013662,
        "ems": null
    },
    {
        "latitude": 51.642864,
        "longitude": 19.484863,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013668,
        "ems": null
    },
    {
        "latitude": 51.641693,
        "longitude": 19.488113,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 120,
        "squawk": "7000",
        "timestamp": 1666013674,
        "ems": null
    },
    {
        "latitude": 51.640411,
        "longitude": 19.491899,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 117,
        "squawk": "7000",
        "timestamp": 1666013680,
        "ems": null
    },
    {
        "latitude": 51.639278,
        "longitude": 19.495544,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 115,
        "squawk": "7000",
        "timestamp": 1666013687,
        "ems": null
    },
    {
        "latitude": 51.63826,
        "longitude": 19.499025,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 116,
        "squawk": "7000",
        "timestamp": 1666013692,
        "ems": null
    },
    {
        "latitude": 51.637115,
        "longitude": 19.502811,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013699,
        "ems": null
    },
    {
        "latitude": 51.636383,
        "longitude": 19.50526,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 115,
        "squawk": "7000",
        "timestamp": 1666013703,
        "ems": null
    },
    {
        "latitude": 51.635136,
        "longitude": 19.509659,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 111,
        "squawk": "7000",
        "timestamp": 1666013710,
        "ems": null
    },
    {
        "latitude": 51.634624,
        "longitude": 19.511871,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 108,
        "squawk": "7000",
        "timestamp": 1666013714,
        "ems": null
    },
    {
        "latitude": 51.634251,
        "longitude": 19.513702,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 109,
        "squawk": "7000",
        "timestamp": 1666013717,
        "ems": null
    },
    {
        "latitude": 51.633881,
        "longitude": 19.515228,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 110,
        "squawk": "7000",
        "timestamp": 1666013720,
        "ems": null
    },
    {
        "latitude": 51.63295,
        "longitude": 19.519068,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 109,
        "squawk": "7000",
        "timestamp": 1666013726,
        "ems": null
    },
    {
        "latitude": 51.632584,
        "longitude": 19.520924,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666013729,
        "ems": null
    },
    {
        "latitude": 51.632309,
        "longitude": 19.522408,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 107,
        "squawk": "7000",
        "timestamp": 1666013732,
        "ems": null
    },
    {
        "latitude": 51.631924,
        "longitude": 19.524307,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 107,
        "squawk": "7000",
        "timestamp": 1666013734,
        "ems": null
    },
    {
        "latitude": 51.631504,
        "longitude": 19.526596,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 107,
        "squawk": "7000",
        "timestamp": 1666013738,
        "ems": null
    },
    {
        "latitude": 51.631027,
        "longitude": 19.529089,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013743,
        "ems": null
    },
    {
        "latitude": 51.630249,
        "longitude": 19.533081,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666013749,
        "ems": null
    },
    {
        "latitude": 51.629929,
        "longitude": 19.534954,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666013752,
        "ems": null
    },
    {
        "latitude": 51.629105,
        "longitude": 19.539333,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666013759,
        "ems": null
    },
    {
        "latitude": 51.628479,
        "longitude": 19.542847,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013764,
        "ems": null
    },
    {
        "latitude": 51.627731,
        "longitude": 19.546682,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666013771,
        "ems": null
    },
    {
        "latitude": 51.627045,
        "longitude": 19.550764,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666013777,
        "ems": null
    },
    {
        "latitude": 51.626293,
        "longitude": 19.554749,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666013784,
        "ems": null
    },
    {
        "latitude": 51.625641,
        "longitude": 19.558563,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666013790,
        "ems": null
    },
    {
        "latitude": 51.624664,
        "longitude": 19.563829,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666013798,
        "ems": null
    },
    {
        "latitude": 51.624104,
        "longitude": 19.566803,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013803,
        "ems": null
    },
    {
        "latitude": 51.623264,
        "longitude": 19.571152,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 107,
        "squawk": "7000",
        "timestamp": 1666013809,
        "ems": null
    },
    {
        "latitude": 51.622383,
        "longitude": 19.575577,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 163,
            "kts": 88,
            "mph": 101.3
        },
        "verticalSpeed": {
            "fpm": 832,
            "ms": 4.2
        },
        "heading": 107,
        "squawk": "7000",
        "timestamp": 1666013816,
        "ems": null
    },
    {
        "latitude": 51.621689,
        "longitude": 19.579121,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 107,
        "squawk": "7000",
        "timestamp": 1666013822,
        "ems": null
    },
    {
        "latitude": 51.621033,
        "longitude": 19.582672,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666013828,
        "ems": null
    },
    {
        "latitude": 51.620224,
        "longitude": 19.58699,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666013835,
        "ems": null
    },
    {
        "latitude": 51.619587,
        "longitude": 19.590836,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 150,
            "kts": 81,
            "mph": 93.2
        },
        "verticalSpeed": {
            "fpm": 832,
            "ms": 4.2
        },
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666013841,
        "ems": null
    },
    {
        "latitude": 51.619034,
        "longitude": 19.594265,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 144.5,
            "kts": 78,
            "mph": 89.8
        },
        "verticalSpeed": {
            "fpm": 640,
            "ms": 3.3
        },
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666013848,
        "ems": null
    },
    {
        "latitude": 51.618519,
        "longitude": 19.597702,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 102,
        "squawk": "7000",
        "timestamp": 1666013854,
        "ems": null
    },
    {
        "latitude": 51.618191,
        "longitude": 19.600067,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 103,
        "squawk": "7000",
        "timestamp": 1666013859,
        "ems": null
    },
    {
        "latitude": 51.617477,
        "longitude": 19.604584,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 103,
        "squawk": "7000",
        "timestamp": 1666013866,
        "ems": null
    },
    {
        "latitude": 51.616982,
        "longitude": 19.607925,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666013872,
        "ems": null
    },
    {
        "latitude": 51.616283,
        "longitude": 19.612122,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666013878,
        "ems": null
    },
    {
        "latitude": 51.615692,
        "longitude": 19.615643,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666013884,
        "ems": null
    },
    {
        "latitude": 51.614979,
        "longitude": 19.619827,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666013890,
        "ems": null
    },
    {
        "latitude": 51.614456,
        "longitude": 19.62277,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666013895,
        "ems": null
    },
    {
        "latitude": 51.613628,
        "longitude": 19.627304,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666013902,
        "ems": null
    },
    {
        "latitude": 51.612991,
        "longitude": 19.631306,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666013908,
        "ems": null
    },
    {
        "latitude": 51.612328,
        "longitude": 19.635696,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 102,
        "squawk": "7000",
        "timestamp": 1666013916,
        "ems": null
    },
    {
        "latitude": 51.611938,
        "longitude": 19.63858,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 101,
        "squawk": "7000",
        "timestamp": 1666013921,
        "ems": null
    },
    {
        "latitude": 51.611721,
        "longitude": 19.640427,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 100,
        "squawk": "7000",
        "timestamp": 1666013924,
        "ems": null
    },
    {
        "latitude": 51.611572,
        "longitude": 19.641699,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 100,
        "squawk": "7000",
        "timestamp": 1666013927,
        "ems": null
    },
    {
        "latitude": 51.611389,
        "longitude": 19.64348,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 99,
        "squawk": "7000",
        "timestamp": 1666013930,
        "ems": null
    },
    {
        "latitude": 51.611298,
        "longitude": 19.644594,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 99,
        "squawk": "7000",
        "timestamp": 1666013932,
        "ems": null
    },
    {
        "latitude": 51.611069,
        "longitude": 19.646748,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 98,
        "squawk": "7000",
        "timestamp": 1666013936,
        "ems": null
    },
    {
        "latitude": 51.610882,
        "longitude": 19.648666,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 98,
        "squawk": "7000",
        "timestamp": 1666013940,
        "ems": null
    },
    {
        "latitude": 51.610657,
        "longitude": 19.651571,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 96,
        "squawk": "7000",
        "timestamp": 1666013946,
        "ems": null
    },
    {
        "latitude": 51.610558,
        "longitude": 19.653397,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 95,
        "squawk": "7000",
        "timestamp": 1666013949,
        "ems": null
    },
    {
        "latitude": 51.610416,
        "longitude": 19.655151,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 95,
        "squawk": "7000",
        "timestamp": 1666013952,
        "ems": null
    },
    {
        "latitude": 51.610336,
        "longitude": 19.656471,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 94,
        "squawk": "7000",
        "timestamp": 1666013955,
        "ems": null
    },
    {
        "latitude": 51.610279,
        "longitude": 19.657974,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 94,
        "squawk": "7000",
        "timestamp": 1666013959,
        "ems": null
    },
    {
        "latitude": 51.610199,
        "longitude": 19.659811,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 94,
        "squawk": "7000",
        "timestamp": 1666013961,
        "ems": null
    },
    {
        "latitude": 51.610062,
        "longitude": 19.662334,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 93,
        "squawk": "7000",
        "timestamp": 1666013966,
        "ems": null
    },
    {
        "latitude": 51.610046,
        "longitude": 19.663467,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 93,
        "squawk": "7000",
        "timestamp": 1666013969,
        "ems": null
    },
    {
        "latitude": 51.609951,
        "longitude": 19.665833,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 92,
        "squawk": "7000",
        "timestamp": 1666013973,
        "ems": null
    },
    {
        "latitude": 51.609879,
        "longitude": 19.668646,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 91,
        "squawk": "7000",
        "timestamp": 1666013978,
        "ems": null
    },
    {
        "latitude": 51.609627,
        "longitude": 19.672318,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 103,
        "squawk": "7000",
        "timestamp": 1666013985,
        "ems": null
    },
    {
        "latitude": 51.609467,
        "longitude": 19.673248,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666013987,
        "ems": null
    },
    {
        "latitude": 51.609116,
        "longitude": 19.675217,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666013991,
        "ems": null
    },
    {
        "latitude": 51.608883,
        "longitude": 19.676666,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666013994,
        "ems": null
    },
    {
        "latitude": 51.608643,
        "longitude": 19.677998,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666013996,
        "ems": null
    },
    {
        "latitude": 51.608368,
        "longitude": 19.679558,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666014000,
        "ems": null
    },
    {
        "latitude": 51.608185,
        "longitude": 19.68071,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666014002,
        "ems": null
    },
    {
        "latitude": 51.607864,
        "longitude": 19.682379,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 106,
        "squawk": "7000",
        "timestamp": 1666014006,
        "ems": null
    },
    {
        "latitude": 51.607635,
        "longitude": 19.683565,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666014008,
        "ems": null
    },
    {
        "latitude": 51.607487,
        "longitude": 19.684601,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666014010,
        "ems": null
    },
    {
        "latitude": 51.606949,
        "longitude": 19.687798,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666014017,
        "ems": null
    },
    {
        "latitude": 51.606445,
        "longitude": 19.690765,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666014024,
        "ems": null
    },
    {
        "latitude": 51.606136,
        "longitude": 19.692688,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 103,
        "squawk": "7000",
        "timestamp": 1666014029,
        "ems": null
    },
    {
        "latitude": 51.605667,
        "longitude": 19.696037,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 102,
        "squawk": "7000",
        "timestamp": 1666014035,
        "ems": null
    },
    {
        "latitude": 51.605301,
        "longitude": 19.698486,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 104,
        "squawk": "7000",
        "timestamp": 1666014042,
        "ems": null
    },
    {
        "latitude": 51.604973,
        "longitude": 19.700775,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 103,
        "squawk": "7000",
        "timestamp": 1666014047,
        "ems": null
    },
    {
        "latitude": 51.604507,
        "longitude": 19.703827,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 103,
        "squawk": "7000",
        "timestamp": 1666014052,
        "ems": null
    },
    {
        "latitude": 51.603855,
        "longitude": 19.708099,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 103,
        "squawk": "7000",
        "timestamp": 1666014060,
        "ems": null
    },
    {
        "latitude": 51.603333,
        "longitude": 19.711626,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 102,
        "squawk": "7000",
        "timestamp": 1666014066,
        "ems": null
    },
    {
        "latitude": 51.602829,
        "longitude": 19.715338,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 102,
        "squawk": "7000",
        "timestamp": 1666014072,
        "ems": null
    },
    {
        "latitude": 51.602325,
        "longitude": 19.718975,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 102,
        "squawk": "7000",
        "timestamp": 1666014079,
        "ems": null
    },
    {
        "latitude": 51.601913,
        "longitude": 19.722612,
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
        "heading": 99,
        "squawk": "7000",
        "timestamp": 1666014087,
        "ems": null
    },
    {
        "latitude": 51.601292,
        "longitude": 19.724655,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 107.4,
            "kts": 58,
            "mph": 66.7
        },
        "verticalSpeed": {
            "fpm": -3904,
            "ms": -19.8
        },
        "heading": 119,
        "squawk": "7000",
        "timestamp": 1666014092,
        "ems": null
    },
    {
        "latitude": 51.600494,
        "longitude": 19.726175,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 129,
        "squawk": "7000",
        "timestamp": 1666014096,
        "ems": null
    },
    {
        "latitude": 51.599804,
        "longitude": 19.727707,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 128,
        "squawk": "7000",
        "timestamp": 1666014099,
        "ems": null
    },
    {
        "latitude": 51.599339,
        "longitude": 19.728851,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 155.6,
            "kts": 84,
            "mph": 96.7
        },
        "verticalSpeed": {
            "fpm": 1408,
            "ms": 7.2
        },
        "heading": 124,
        "squawk": "7000",
        "timestamp": 1666014101,
        "ems": null
    },
    {
        "latitude": 51.598526,
        "longitude": 19.730629,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 144.5,
            "kts": 78,
            "mph": 89.8
        },
        "verticalSpeed": {
            "fpm": 1024,
            "ms": 5.2
        },
        "heading": 125,
        "squawk": "7000",
        "timestamp": 1666014105,
        "ems": null
    },
    {
        "latitude": 51.597988,
        "longitude": 19.731827,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 125.9,
            "kts": 68,
            "mph": 78.3
        },
        "verticalSpeed": {
            "fpm": 1280,
            "ms": 6.5
        },
        "heading": 125,
        "squawk": "7000",
        "timestamp": 1666014108,
        "ems": null
    },
    {
        "latitude": 51.597382,
        "longitude": 19.733152,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 122.2,
            "kts": 66,
            "mph": 76
        },
        "verticalSpeed": {
            "fpm": 1024,
            "ms": 5.2
        },
        "heading": 125,
        "squawk": "7000",
        "timestamp": 1666014111,
        "ems": null
    },
    {
        "latitude": 51.596638,
        "longitude": 19.734879,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 125,
        "squawk": "7000",
        "timestamp": 1666014115,
        "ems": null
    },
    {
        "latitude": 51.596313,
        "longitude": 19.735565,
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
            "fpm": 0,
            "ms": 0
        },
        "heading": 126,
        "squawk": "7000",
        "timestamp": 1666014117,
        "ems": null
    },
    {
        "latitude": 51.595287,
        "longitude": 19.737625,
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
            "fpm": -512,
            "ms": -2.6
        },
        "heading": 132,
        "squawk": "7000",
        "timestamp": 1666014124,
        "ems": null
    },
    {
        "latitude": 51.588638,
        "longitude": 19.731594,
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
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 266,
        "squawk": "7000",
        "timestamp": 1666014184,
        "ems": null
    },
    {
        "latitude": 51.588455,
        "longitude": 19.728401,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666014193,
        "ems": null
    },
    {
        "latitude": 51.588364,
        "longitude": 19.72625,
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
            "fpm": -256,
            "ms": -1.3
        },
        "heading": 266,
        "squawk": "7000",
        "timestamp": 1666014199,
        "ems": null
    },
    {
        "latitude": 51.58812,
        "longitude": 19.724731,
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
            "fpm": -128,
            "ms": -0.7
        },
        "heading": 243,
        "squawk": "7000",
        "timestamp": 1666014204,
        "ems": null
    },
    {
        "latitude": 51.586956,
        "longitude": 19.724197,
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
            "fpm": -2688,
            "ms": -13.7
        },
        "heading": 187,
        "squawk": "7000",
        "timestamp": 1666014210,
        "ems": null
    },
    {
        "latitude": 51.586212,
        "longitude": 19.72374,
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
            "fpm": 832,
            "ms": 4.2
        },
        "heading": 200,
        "squawk": "7000",
        "timestamp": 1666014214,
        "ems": null
    },
    {
        "latitude": 51.585514,
        "longitude": 19.723358,
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
            "fpm": 960,
            "ms": 4.9
        },
        "heading": 199,
        "squawk": "7000",
        "timestamp": 1666014216,
        "ems": null
    },
    {
        "latitude": 51.584793,
        "longitude": 19.722982,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 197,
        "squawk": "7000",
        "timestamp": 1666014220,
        "ems": null
    },
    {
        "latitude": 51.583977,
        "longitude": 19.722595,
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
            "fpm": -64,
            "ms": -0.3
        },
        "heading": 196,
        "squawk": "7000",
        "timestamp": 1666014223,
        "ems": null
    },
    {
        "latitude": 51.583282,
        "longitude": 19.722315,
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
            "fpm": 576,
            "ms": 2.9
        },
        "heading": 194,
        "squawk": "7000",
        "timestamp": 1666014226,
        "ems": null
    },
    {
        "latitude": 51.582718,
        "longitude": 19.722061,
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
            "fpm": 832,
            "ms": 4.2
        },
        "heading": 195,
        "squawk": "7000",
        "timestamp": 1666014229,
        "ems": null
    },
    {
        "latitude": 51.581882,
        "longitude": 19.721756,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 194,
        "squawk": "7000",
        "timestamp": 1666014231,
        "ems": null
    },
    {
        "latitude": 51.580673,
        "longitude": 19.721275,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 194,
        "squawk": "7000",
        "timestamp": 1666014236,
        "ems": null
    },
    {
        "latitude": 51.579693,
        "longitude": 19.720917,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 193,
        "squawk": "7000",
        "timestamp": 1666014239,
        "ems": null
    },
    {
        "latitude": 51.578762,
        "longitude": 19.720535,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 192,
        "squawk": "7000",
        "timestamp": 1666014242,
        "ems": null
    },
    {
        "latitude": 51.577927,
        "longitude": 19.720236,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 193,
        "squawk": "7000",
        "timestamp": 1666014245,
        "ems": null
    },
    {
        "latitude": 51.576157,
        "longitude": 19.719391,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 197,
        "squawk": "7000",
        "timestamp": 1666014251,
        "ems": null
    },
    {
        "latitude": 51.575363,
        "longitude": 19.718933,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 199,
        "squawk": "7000",
        "timestamp": 1666014254,
        "ems": null
    },
    {
        "latitude": 51.574493,
        "longitude": 19.71838,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 202,
        "squawk": "7000",
        "timestamp": 1666014257,
        "ems": null
    },
    {
        "latitude": 51.573734,
        "longitude": 19.717789,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 205,
        "squawk": "7000",
        "timestamp": 1666014260,
        "ems": null
    },
    {
        "latitude": 51.573128,
        "longitude": 19.717255,
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
            "fpm": 128,
            "ms": 0.7
        },
        "heading": 208,
        "squawk": "7000",
        "timestamp": 1666014262,
        "ems": null
    },
    {
        "latitude": 51.572296,
        "longitude": 19.716524,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 210,
        "squawk": "7000",
        "timestamp": 1666014266,
        "ems": null
    },
    {
        "latitude": 51.571793,
        "longitude": 19.716005,
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
            "fpm": -128,
            "ms": -0.7
        },
        "heading": 212,
        "squawk": "7000",
        "timestamp": 1666014269,
        "ems": null
    },
    {
        "latitude": 51.571243,
        "longitude": 19.715338,
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
            "fpm": -128,
            "ms": -0.7
        },
        "heading": 212,
        "squawk": "7000",
        "timestamp": 1666014272,
        "ems": null
    },
    {
        "latitude": 51.570847,
        "longitude": 19.714661,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 231,
        "squawk": "7000",
        "timestamp": 1666014275,
        "ems": null
    },
    {
        "latitude": 51.570786,
        "longitude": 19.714298,
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
            "fpm": 128,
            "ms": 0.7
        },
        "heading": 235,
        "squawk": "7000",
        "timestamp": 1666014277,
        "ems": null
    },
    {
        "latitude": 51.570831,
        "longitude": 19.71311,
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
            "fpm": -2560,
            "ms": -13
        },
        "heading": 282,
        "squawk": "7000",
        "timestamp": 1666014281,
        "ems": null
    },
    {
        "latitude": 51.570988,
        "longitude": 19.711533,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 274,
        "squawk": "7000",
        "timestamp": 1666014284,
        "ems": null
    },
    {
        "latitude": 51.570969,
        "longitude": 19.709991,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 270,
        "squawk": "7000",
        "timestamp": 1666014287,
        "ems": null
    },
    {
        "latitude": 51.570942,
        "longitude": 19.708862,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 267,
        "squawk": "7000",
        "timestamp": 1666014289,
        "ems": null
    },
    {
        "latitude": 51.570896,
        "longitude": 19.707031,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666014293,
        "ems": null
    },
    {
        "latitude": 51.570847,
        "longitude": 19.705734,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 267,
        "squawk": "7000",
        "timestamp": 1666014296,
        "ems": null
    },
    {
        "latitude": 51.570786,
        "longitude": 19.704203,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 267,
        "squawk": "7000",
        "timestamp": 1666014299,
        "ems": null
    },
    {
        "latitude": 51.57074,
        "longitude": 19.70294,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 267,
        "squawk": "7000",
        "timestamp": 1666014302,
        "ems": null
    },
    {
        "latitude": 51.570694,
        "longitude": 19.701307,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 266,
        "squawk": "7000",
        "timestamp": 1666014306,
        "ems": null
    },
    {
        "latitude": 51.570663,
        "longitude": 19.700012,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 267,
        "squawk": "7000",
        "timestamp": 1666014308,
        "ems": null
    },
    {
        "latitude": 51.570847,
        "longitude": 19.69841,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 140.8,
            "kts": 76,
            "mph": 87.5
        },
        "verticalSpeed": {
            "fpm": -768,
            "ms": -3.9
        },
        "heading": 289,
        "squawk": "7000",
        "timestamp": 1666014311,
        "ems": null
    },
    {
        "latitude": 51.571106,
        "longitude": 19.697819,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 146.3,
            "kts": 79,
            "mph": 90.9
        },
        "verticalSpeed": {
            "fpm": -1088,
            "ms": -5.5
        },
        "heading": 298,
        "squawk": "7000",
        "timestamp": 1666014312,
        "ems": null
    },
    {
        "latitude": 51.573029,
        "longitude": 19.698709,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 207.4,
            "kts": 112,
            "mph": 128.9
        },
        "verticalSpeed": {
            "fpm": -5248,
            "ms": -26.7
        },
        "heading": 81,
        "squawk": "7000",
        "timestamp": 1666014319,
        "ems": null
    },
    {
        "latitude": 51.57312,
        "longitude": 19.70257,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 214.8,
            "kts": 116,
            "mph": 133.5
        },
        "verticalSpeed": {
            "fpm": 1472,
            "ms": 7.5
        },
        "heading": 84,
        "squawk": "7000",
        "timestamp": 1666014324,
        "ems": null
    },
    {
        "latitude": 51.573395,
        "longitude": 19.706059,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 190.8,
            "kts": 103,
            "mph": 118.5
        },
        "verticalSpeed": {
            "fpm": 1408,
            "ms": 7.2
        },
        "heading": 81,
        "squawk": "7000",
        "timestamp": 1666014328,
        "ems": null
    },
    {
        "latitude": 51.573734,
        "longitude": 19.709702,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 170.4,
            "kts": 92,
            "mph": 105.9
        },
        "verticalSpeed": {
            "fpm": 1088,
            "ms": 5.5
        },
        "heading": 82,
        "squawk": "7000",
        "timestamp": 1666014332,
        "ems": null
    },
    {
        "latitude": 51.573853,
        "longitude": 19.711552,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 170.4,
            "kts": 92,
            "mph": 105.9
        },
        "verticalSpeed": {
            "fpm": 1088,
            "ms": 5.5
        },
        "heading": 82,
        "squawk": "7000",
        "timestamp": 1666014335,
        "ems": null
    },
    {
        "latitude": 51.574062,
        "longitude": 19.713669,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 81,
        "squawk": "7000",
        "timestamp": 1666014338,
        "ems": null
    },
    {
        "latitude": 51.574265,
        "longitude": 19.715931,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 81,
        "squawk": "7000",
        "timestamp": 1666014342,
        "ems": null
    },
    {
        "latitude": 51.574478,
        "longitude": 19.717712,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 80,
        "squawk": "7000",
        "timestamp": 1666014345,
        "ems": null
    },
    {
        "latitude": 51.57486,
        "longitude": 19.720978,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 151.9,
            "kts": 82,
            "mph": 94.4
        },
        "verticalSpeed": {
            "fpm": 1088,
            "ms": 5.5
        },
        "heading": 79,
        "squawk": "7000",
        "timestamp": 1666014350,
        "ems": null
    },
    {
        "latitude": 51.575085,
        "longitude": 19.7229,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 78,
        "squawk": "7000",
        "timestamp": 1666014353,
        "ems": null
    },
    {
        "latitude": 51.575638,
        "longitude": 19.725952,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 67,
        "squawk": "7000",
        "timestamp": 1666014359,
        "ems": null
    },
    {
        "latitude": 51.576107,
        "longitude": 19.727097,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 60,
        "squawk": "7000",
        "timestamp": 1666014361,
        "ems": null
    },
    {
        "latitude": 51.577377,
        "longitude": 19.729071,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 38,
        "squawk": "7000",
        "timestamp": 1666014366,
        "ems": null
    },
    {
        "latitude": 51.578339,
        "longitude": 19.730036,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 31,
        "squawk": "7000",
        "timestamp": 1666014369,
        "ems": null
    },
    {
        "latitude": 51.57946,
        "longitude": 19.730911,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 25,
        "squawk": "7000",
        "timestamp": 1666014372,
        "ems": null
    },
    {
        "latitude": 51.58017,
        "longitude": 19.731371,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 18,
        "squawk": "7000",
        "timestamp": 1666014375,
        "ems": null
    },
    {
        "latitude": 51.580902,
        "longitude": 19.731743,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 16,
        "squawk": "7000",
        "timestamp": 1666014376,
        "ems": null
    },
    {
        "latitude": 51.582439,
        "longitude": 19.732132,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 7,
        "squawk": "7000",
        "timestamp": 1666014380,
        "ems": null
    },
    {
        "latitude": 51.583466,
        "longitude": 19.732208,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 2,
        "squawk": "7000",
        "timestamp": 1666014383,
        "ems": null
    },
    {
        "latitude": 51.584629,
        "longitude": 19.732132,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 354,
        "squawk": "7000",
        "timestamp": 1666014386,
        "ems": null
    },
    {
        "latitude": 51.585606,
        "longitude": 19.731827,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 349,
        "squawk": "7000",
        "timestamp": 1666014389,
        "ems": null
    },
    {
        "latitude": 51.586536,
        "longitude": 19.731445,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 343,
        "squawk": "7000",
        "timestamp": 1666014392,
        "ems": null
    },
    {
        "latitude": 51.587376,
        "longitude": 19.730911,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 338,
        "squawk": "7000",
        "timestamp": 1666014394,
        "ems": null
    },
    {
        "latitude": 51.588398,
        "longitude": 19.730072,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 330,
        "squawk": "7000",
        "timestamp": 1666014398,
        "ems": null
    },
    {
        "latitude": 51.58873,
        "longitude": 19.729738,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 131.5,
            "kts": 71,
            "mph": 81.7
        },
        "verticalSpeed": {
            "fpm": 448,
            "ms": 2.3
        },
        "heading": 327,
        "squawk": "7000",
        "timestamp": 1666014400,
        "ems": null
    },
    {
        "latitude": 51.589981,
        "longitude": 19.728088,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 317,
        "squawk": "7000",
        "timestamp": 1666014404,
        "ems": null
    },
    {
        "latitude": 51.590446,
        "longitude": 19.727402,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 124.1,
            "kts": 67,
            "mph": 77.1
        },
        "verticalSpeed": {
            "fpm": 640,
            "ms": 3.3
        },
        "heading": 313,
        "squawk": "7000",
        "timestamp": 1666014406,
        "ems": null
    },
    {
        "latitude": 51.591064,
        "longitude": 19.726398,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 316,
        "squawk": "7000",
        "timestamp": 1666014409,
        "ems": null
    },
    {
        "latitude": 51.592121,
        "longitude": 19.725494,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 336,
        "squawk": "7000",
        "timestamp": 1666014412,
        "ems": null
    },
    {
        "latitude": 51.593353,
        "longitude": 19.724913,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 336,
        "squawk": "7000",
        "timestamp": 1666014416,
        "ems": null
    },
    {
        "latitude": 51.595276,
        "longitude": 19.724615,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 357,
        "squawk": "7000",
        "timestamp": 1666014421,
        "ems": null
    },
    {
        "latitude": 51.5961,
        "longitude": 19.724615,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 357,
        "squawk": "7000",
        "timestamp": 1666014423,
        "ems": null
    },
    {
        "latitude": 51.597473,
        "longitude": 19.724543,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 137,
            "kts": 74,
            "mph": 85.2
        },
        "verticalSpeed": {
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666014427,
        "ems": null
    },
    {
        "latitude": 51.598312,
        "longitude": 19.724579,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 1,
        "squawk": "7000",
        "timestamp": 1666014430,
        "ems": null
    },
    {
        "latitude": 51.599663,
        "longitude": 19.724579,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 1,
        "squawk": "7000",
        "timestamp": 1666014434,
        "ems": null
    },
    {
        "latitude": 51.600769,
        "longitude": 19.724543,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666014437,
        "ems": null
    },
    {
        "latitude": 51.601479,
        "longitude": 19.724579,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666014439,
        "ems": null
    },
    {
        "latitude": 51.60297,
        "longitude": 19.724426,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 357,
        "squawk": "7000",
        "timestamp": 1666014443,
        "ems": null
    },
    {
        "latitude": 51.604038,
        "longitude": 19.72435,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 357,
        "squawk": "7000",
        "timestamp": 1666014446,
        "ems": null
    },
    {
        "latitude": 51.606079,
        "longitude": 19.724096,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 353,
        "squawk": "7000",
        "timestamp": 1666014451,
        "ems": null
    },
    {
        "latitude": 51.607452,
        "longitude": 19.723724,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 350,
        "squawk": "7000",
        "timestamp": 1666014455,
        "ems": null
    },
    {
        "latitude": 51.608505,
        "longitude": 19.723354,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 348,
        "squawk": "7000",
        "timestamp": 1666014458,
        "ems": null
    },
    {
        "latitude": 51.60965,
        "longitude": 19.723057,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 348,
        "squawk": "7000",
        "timestamp": 1666014461,
        "ems": null
    },
    {
        "latitude": 51.610001,
        "longitude": 19.7229,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 348,
        "squawk": "7000",
        "timestamp": 1666014462,
        "ems": null
    },
    {
        "latitude": 51.610977,
        "longitude": 19.721298,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 131.5,
            "kts": 71,
            "mph": 81.7
        },
        "verticalSpeed": {
            "fpm": -2624,
            "ms": -13.3
        },
        "heading": 317,
        "squawk": "7000",
        "timestamp": 1666014466,
        "ems": null
    },
    {
        "latitude": 51.610199,
        "longitude": 19.720236,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 146.3,
            "kts": 79,
            "mph": 90.9
        },
        "verticalSpeed": {
            "fpm": -4544,
            "ms": -23.1
        },
        "heading": 213,
        "squawk": "7000",
        "timestamp": 1666014469,
        "ems": null
    },
    {
        "latitude": 51.609066,
        "longitude": 19.719009,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 170.4,
            "kts": 92,
            "mph": 105.9
        },
        "verticalSpeed": {
            "fpm": -1152,
            "ms": -5.9
        },
        "heading": 212,
        "squawk": "7000",
        "timestamp": 1666014473,
        "ems": null
    },
    {
        "latitude": 51.608276,
        "longitude": 19.718159,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 142.6,
            "kts": 77,
            "mph": 88.6
        },
        "verticalSpeed": {
            "fpm": 1408,
            "ms": 7.2
        },
        "heading": 213,
        "squawk": "7000",
        "timestamp": 1666014475,
        "ems": null
    },
    {
        "latitude": 51.607407,
        "longitude": 19.71734,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 135.2,
            "kts": 73,
            "mph": 84
        },
        "verticalSpeed": {
            "fpm": 1408,
            "ms": 7.2
        },
        "heading": 212,
        "squawk": "7000",
        "timestamp": 1666014478,
        "ems": null
    },
    {
        "latitude": 51.606766,
        "longitude": 19.716673,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 124.1,
            "kts": 67,
            "mph": 77.1
        },
        "verticalSpeed": {
            "fpm": 1088,
            "ms": 5.5
        },
        "heading": 211,
        "squawk": "7000",
        "timestamp": 1666014481,
        "ems": null
    },
    {
        "latitude": 51.606087,
        "longitude": 19.715958,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 120.4,
            "kts": 65,
            "mph": 74.8
        },
        "verticalSpeed": {
            "fpm": 960,
            "ms": 4.9
        },
        "heading": 211,
        "squawk": "7000",
        "timestamp": 1666014484,
        "ems": null
    },
    {
        "latitude": 51.605484,
        "longitude": 19.715424,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 212,
        "squawk": "7000",
        "timestamp": 1666014486,
        "ems": null
    },
    {
        "latitude": 51.604294,
        "longitude": 19.714298,
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
            "fpm": 896,
            "ms": 4.6
        },
        "heading": 210,
        "squawk": "7000",
        "timestamp": 1666014491,
        "ems": null
    },
    {
        "latitude": 51.603527,
        "longitude": 19.713593,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 208,
        "squawk": "7000",
        "timestamp": 1666014494,
        "ems": null
    },
    {
        "latitude": 51.602921,
        "longitude": 19.713184,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 204,
        "squawk": "7000",
        "timestamp": 1666014497,
        "ems": null
    },
    {
        "latitude": 51.602272,
        "longitude": 19.712753,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 200,
        "squawk": "7000",
        "timestamp": 1666014500,
        "ems": null
    },
    {
        "latitude": 51.601501,
        "longitude": 19.712368,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 197,
        "squawk": "7000",
        "timestamp": 1666014503,
        "ems": null
    },
    {
        "latitude": 51.600906,
        "longitude": 19.71207,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 94.5,
            "kts": 51,
            "mph": 58.7
        },
        "verticalSpeed": {
            "fpm": 384,
            "ms": 2
        },
        "heading": 194,
        "squawk": "7000",
        "timestamp": 1666014505,
        "ems": null
    },
    {
        "latitude": 51.600082,
        "longitude": 19.711838,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 191,
        "squawk": "7000",
        "timestamp": 1666014509,
        "ems": null
    },
    {
        "latitude": 51.599304,
        "longitude": 19.711552,
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
            "fpm": -64,
            "ms": -0.3
        },
        "heading": 190,
        "squawk": "7000",
        "timestamp": 1666014512,
        "ems": null
    },
    {
        "latitude": 51.598801,
        "longitude": 19.711403,
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
            "fpm": 0,
            "ms": 0
        },
        "heading": 193,
        "squawk": "7000",
        "timestamp": 1666014515,
        "ems": null
    },
    {
        "latitude": 51.597847,
        "longitude": 19.711075,
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
            "fpm": 0,
            "ms": 0
        },
        "heading": 192,
        "squawk": "7000",
        "timestamp": 1666014518,
        "ems": null
    },
    {
        "latitude": 51.596966,
        "longitude": 19.71077,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 191,
        "squawk": "7000",
        "timestamp": 1666014521,
        "ems": null
    },
    {
        "latitude": 51.596127,
        "longitude": 19.710464,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 191,
        "squawk": "7000",
        "timestamp": 1666014524,
        "ems": null
    },
    {
        "latitude": 51.59552,
        "longitude": 19.710312,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 192,
        "squawk": "7000",
        "timestamp": 1666014526,
        "ems": null
    },
    {
        "latitude": 51.594357,
        "longitude": 19.709854,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 192,
        "squawk": "7000",
        "timestamp": 1666014529,
        "ems": null
    },
    {
        "latitude": 51.593491,
        "longitude": 19.709547,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 192,
        "squawk": "7000",
        "timestamp": 1666014532,
        "ems": null
    },
    {
        "latitude": 51.591797,
        "longitude": 19.708405,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 213,
        "squawk": "7000",
        "timestamp": 1666014537,
        "ems": null
    },
    {
        "latitude": 51.591751,
        "longitude": 19.706503,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 213,
        "squawk": "7000",
        "timestamp": 1666014541,
        "ems": null
    },
    {
        "latitude": 51.593102,
        "longitude": 19.706039,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 196.3,
            "kts": 106,
            "mph": 122
        },
        "verticalSpeed": {
            "fpm": -4672,
            "ms": -23.7
        },
        "heading": 349,
        "squawk": "7000",
        "timestamp": 1666014544,
        "ems": null
    },
    {
        "latitude": 51.595001,
        "longitude": 19.705984,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 237.1,
            "kts": 128,
            "mph": 147.3
        },
        "verticalSpeed": {
            "fpm": -1216,
            "ms": -6.2
        },
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666014547,
        "ems": null
    },
    {
        "latitude": 51.596966,
        "longitude": 19.705963,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 201.9,
            "kts": 109,
            "mph": 125.4
        },
        "verticalSpeed": {
            "fpm": 1472,
            "ms": 7.5
        },
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666014551,
        "ems": null
    },
    {
        "latitude": 51.598251,
        "longitude": 19.705984,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 187.1,
            "kts": 101,
            "mph": 116.2
        },
        "verticalSpeed": {
            "fpm": 1344,
            "ms": 6.8
        },
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666014554,
        "ems": null
    },
    {
        "latitude": 51.599625,
        "longitude": 19.705984,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 181.5,
            "kts": 98,
            "mph": 112.8
        },
        "verticalSpeed": {
            "fpm": 640,
            "ms": 3.3
        },
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666014557,
        "ems": null
    },
    {
        "latitude": 51.60078,
        "longitude": 19.705887,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 355,
        "squawk": "7000",
        "timestamp": 1666014559,
        "ems": null
    },
    {
        "latitude": 51.602551,
        "longitude": 19.705505,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 349,
        "squawk": "7000",
        "timestamp": 1666014563,
        "ems": null
    },
    {
        "latitude": 51.603745,
        "longitude": 19.705019,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 164.8,
            "kts": 89,
            "mph": 102.4
        },
        "verticalSpeed": {
            "fpm": 2176,
            "ms": 11.1
        },
        "heading": 345,
        "squawk": "7000",
        "timestamp": 1666014566,
        "ems": null
    },
    {
        "latitude": 51.604889,
        "longitude": 19.704426,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 146.3,
            "kts": 79,
            "mph": 90.9
        },
        "verticalSpeed": {
            "fpm": 1600,
            "ms": 8.1
        },
        "heading": 340,
        "squawk": "7000",
        "timestamp": 1666014569,
        "ems": null
    },
    {
        "latitude": 51.605717,
        "longitude": 19.703751,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 336,
        "squawk": "7000",
        "timestamp": 1666014571,
        "ems": null
    },
    {
        "latitude": 51.606693,
        "longitude": 19.702606,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 168.5,
            "kts": 91,
            "mph": 104.7
        },
        "verticalSpeed": {
            "fpm": -1280,
            "ms": -6.5
        },
        "heading": 315,
        "squawk": "7000",
        "timestamp": 1666014575,
        "ems": null
    },
    {
        "latitude": 51.60767,
        "longitude": 19.700699,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 305,
        "squawk": "7000",
        "timestamp": 1666014578,
        "ems": null
    },
    {
        "latitude": 51.608185,
        "longitude": 19.699005,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 144.5,
            "kts": 78,
            "mph": 89.8
        },
        "verticalSpeed": {
            "fpm": 3264,
            "ms": 16.6
        },
        "heading": 290,
        "squawk": "7000",
        "timestamp": 1666014581,
        "ems": null
    },
    {
        "latitude": 51.608276,
        "longitude": 19.6978,
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
            "fpm": 3456,
            "ms": 17.6
        },
        "heading": 274,
        "squawk": "7000",
        "timestamp": 1666014584,
        "ems": null
    },
    {
        "latitude": 51.608231,
        "longitude": 19.696928,
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
            "fpm": 256,
            "ms": 1.3
        },
        "heading": 257,
        "squawk": "7000",
        "timestamp": 1666014587,
        "ems": null
    },
    {
        "latitude": 51.607864,
        "longitude": 19.696112,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 96.3,
            "kts": 52,
            "mph": 59.8
        },
        "verticalSpeed": {
            "fpm": -2368,
            "ms": -12
        },
        "heading": 228,
        "squawk": "7000",
        "timestamp": 1666014590,
        "ems": null
    },
    {
        "latitude": 51.607346,
        "longitude": 19.695511,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 144.5,
            "kts": 78,
            "mph": 89.8
        },
        "verticalSpeed": {
            "fpm": -1664,
            "ms": -8.5
        },
        "heading": 203,
        "squawk": "7000",
        "timestamp": 1666014593,
        "ems": null
    },
    {
        "latitude": 51.606602,
        "longitude": 19.695053,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 150,
            "kts": 81,
            "mph": 93.2
        },
        "verticalSpeed": {
            "fpm": -1216,
            "ms": -6.2
        },
        "heading": 202,
        "squawk": "7000",
        "timestamp": 1666014594,
        "ems": null
    },
    {
        "latitude": 51.605301,
        "longitude": 19.694256,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 201,
        "squawk": "7000",
        "timestamp": 1666014598,
        "ems": null
    },
    {
        "latitude": 51.604248,
        "longitude": 19.693586,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 201,
        "squawk": "7000",
        "timestamp": 1666014601,
        "ems": null
    },
    {
        "latitude": 51.603203,
        "longitude": 19.692917,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 200,
        "squawk": "7000",
        "timestamp": 1666014604,
        "ems": null
    },
    {
        "latitude": 51.602234,
        "longitude": 19.692251,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 203,
        "squawk": "7000",
        "timestamp": 1666014607,
        "ems": null
    },
    {
        "latitude": 51.601292,
        "longitude": 19.691544,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 203,
        "squawk": "7000",
        "timestamp": 1666014610,
        "ems": null
    },
    {
        "latitude": 51.600315,
        "longitude": 19.69101,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 199,
        "squawk": "7000",
        "timestamp": 1666014613,
        "ems": null
    },
    {
        "latitude": 51.599213,
        "longitude": 19.690544,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 192,
        "squawk": "7000",
        "timestamp": 1666014616,
        "ems": null
    },
    {
        "latitude": 51.598206,
        "longitude": 19.690247,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 140.8,
            "kts": 76,
            "mph": 87.5
        },
        "verticalSpeed": {
            "fpm": -704,
            "ms": -3.6
        },
        "heading": 188,
        "squawk": "7000",
        "timestamp": 1666014619,
        "ems": null
    },
    {
        "latitude": 51.59697,
        "longitude": 19.689949,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 159.3,
            "kts": 86,
            "mph": 99
        },
        "verticalSpeed": {
            "fpm": -1216,
            "ms": -6.2
        },
        "heading": 190,
        "squawk": "7000",
        "timestamp": 1666014622,
        "ems": null
    },
    {
        "latitude": 51.594864,
        "longitude": 19.688019,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 164.8,
            "kts": 89,
            "mph": 102.4
        },
        "verticalSpeed": {
            "fpm": 1216,
            "ms": 6.2
        },
        "heading": 227,
        "squawk": "7000",
        "timestamp": 1666014628,
        "ems": null
    },
    {
        "latitude": 51.594543,
        "longitude": 19.686312,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 125.9,
            "kts": 68,
            "mph": 78.3
        },
        "verticalSpeed": {
            "fpm": 3264,
            "ms": 16.6
        },
        "heading": 266,
        "squawk": "7000",
        "timestamp": 1666014631,
        "ems": null
    },
    {
        "latitude": 51.594681,
        "longitude": 19.6852,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 113,
            "kts": 61,
            "mph": 70.2
        },
        "verticalSpeed": {
            "fpm": 1728,
            "ms": 8.8
        },
        "heading": 288,
        "squawk": "7000",
        "timestamp": 1666014634,
        "ems": null
    },
    {
        "latitude": 51.595009,
        "longitude": 19.684143,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 298,
        "squawk": "7000",
        "timestamp": 1666014636,
        "ems": null
    },
    {
        "latitude": 51.59594,
        "longitude": 19.682693,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 150,
            "kts": 81,
            "mph": 93.2
        },
        "verticalSpeed": {
            "fpm": -1152,
            "ms": -5.9
        },
        "heading": 321,
        "squawk": "7000",
        "timestamp": 1666014640,
        "ems": null
    },
    {
        "latitude": 51.596832,
        "longitude": 19.681635,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 323,
        "squawk": "7000",
        "timestamp": 1666014643,
        "ems": null
    },
    {
        "latitude": 51.597839,
        "longitude": 19.680449,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 322,
        "squawk": "7000",
        "timestamp": 1666014646,
        "ems": null
    },
    {
        "latitude": 51.598827,
        "longitude": 19.679184,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 320,
        "squawk": "7000",
        "timestamp": 1666014649,
        "ems": null
    },
    {
        "latitude": 51.599712,
        "longitude": 19.67804,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 319,
        "squawk": "7000",
        "timestamp": 1666014652,
        "ems": null
    },
    {
        "latitude": 51.60054,
        "longitude": 19.676886,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 318,
        "squawk": "7000",
        "timestamp": 1666014655,
        "ems": null
    },
    {
        "latitude": 51.601387,
        "longitude": 19.675598,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 316,
        "squawk": "7000",
        "timestamp": 1666014658,
        "ems": null
    },
    {
        "latitude": 51.602177,
        "longitude": 19.674301,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 151.9,
            "kts": 82,
            "mph": 94.4
        },
        "verticalSpeed": {
            "fpm": -448,
            "ms": -2.3
        },
        "heading": 315,
        "squawk": "7000",
        "timestamp": 1666014661,
        "ems": null
    },
    {
        "latitude": 51.603012,
        "longitude": 19.672876,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 313,
        "squawk": "7000",
        "timestamp": 1666014664,
        "ems": null
    },
    {
        "latitude": 51.603836,
        "longitude": 19.671467,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 312,
        "squawk": "7000",
        "timestamp": 1666014667,
        "ems": null
    },
    {
        "latitude": 51.603973,
        "longitude": 19.671169,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 312,
        "squawk": "7000",
        "timestamp": 1666014668,
        "ems": null
    },
    {
        "latitude": 51.605072,
        "longitude": 19.669313,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 313,
        "squawk": "7000",
        "timestamp": 1666014672,
        "ems": null
    },
    {
        "latitude": 51.605854,
        "longitude": 19.667969,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 313,
        "squawk": "7000",
        "timestamp": 1666014675,
        "ems": null
    },
    {
        "latitude": 51.607021,
        "longitude": 19.666214,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 318,
        "squawk": "7000",
        "timestamp": 1666014680,
        "ems": null
    },
    {
        "latitude": 51.608418,
        "longitude": 19.664383,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 324,
        "squawk": "7000",
        "timestamp": 1666014687,
        "ems": null
    },
    {
        "latitude": 51.608742,
        "longitude": 19.66423,
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
            "fpm": -1024,
            "ms": -5.2
        },
        "heading": 354,
        "squawk": "7000",
        "timestamp": 1666014690,
        "ems": null
    },
    {
        "latitude": 51.609787,
        "longitude": 19.664265,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 120.4,
            "kts": 65,
            "mph": 74.8
        },
        "verticalSpeed": {
            "fpm": -3776,
            "ms": -19.2
        },
        "heading": 13,
        "squawk": "7000",
        "timestamp": 1666014693,
        "ems": null
    },
    {
        "latitude": 51.610199,
        "longitude": 19.664488,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 129.6,
            "kts": 70,
            "mph": 80.6
        },
        "verticalSpeed": {
            "fpm": -3584,
            "ms": -18.2
        },
        "heading": 15,
        "squawk": "7000",
        "timestamp": 1666014694,
        "ems": null
    },
    {
        "latitude": 51.611938,
        "longitude": 19.665155,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 161.1,
            "kts": 87,
            "mph": 100.1
        },
        "verticalSpeed": {
            "fpm": 768,
            "ms": 3.9
        },
        "heading": 11,
        "squawk": "7000",
        "timestamp": 1666014699,
        "ems": null
    },
    {
        "latitude": 51.612839,
        "longitude": 19.665451,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 11,
        "squawk": "7000",
        "timestamp": 1666014701,
        "ems": null
    },
    {
        "latitude": 51.614189,
        "longitude": 19.665833,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 9,
        "squawk": "7000",
        "timestamp": 1666014704,
        "ems": null
    },
    {
        "latitude": 51.615307,
        "longitude": 19.666061,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 8,
        "squawk": "7000",
        "timestamp": 1666014707,
        "ems": null
    },
    {
        "latitude": 51.616329,
        "longitude": 19.66629,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 7,
        "squawk": "7000",
        "timestamp": 1666014710,
        "ems": null
    },
    {
        "latitude": 51.617661,
        "longitude": 19.666567,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 8,
        "squawk": "7000",
        "timestamp": 1666014714,
        "ems": null
    },
    {
        "latitude": 51.618759,
        "longitude": 19.666864,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 155.6,
            "kts": 84,
            "mph": 96.7
        },
        "verticalSpeed": {
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 8,
        "squawk": "7000",
        "timestamp": 1666014716,
        "ems": null
    },
    {
        "latitude": 51.619858,
        "longitude": 19.66716,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 9,
        "squawk": "7000",
        "timestamp": 1666014719,
        "ems": null
    },
    {
        "latitude": 51.621964,
        "longitude": 19.66774,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 8,
        "squawk": "7000",
        "timestamp": 1666014725,
        "ems": null
    },
    {
        "latitude": 51.623566,
        "longitude": 19.668125,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 8,
        "squawk": "7000",
        "timestamp": 1666014729,
        "ems": null
    },
    {
        "latitude": 51.627457,
        "longitude": 19.669266,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 12,
        "squawk": "7000",
        "timestamp": 1666014739,
        "ems": null
    },
    {
        "latitude": 51.629791,
        "longitude": 19.669981,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 9,
        "squawk": "7000",
        "timestamp": 1666014745,
        "ems": null
    },
    {
        "latitude": 51.632252,
        "longitude": 19.67041,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 4,
        "squawk": "7000",
        "timestamp": 1666014751,
        "ems": null
    },
    {
        "latitude": 51.633415,
        "longitude": 19.670181,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666014754,
        "ems": null
    },
    {
        "latitude": 51.634392,
        "longitude": 19.669571,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 340,
        "squawk": "7000",
        "timestamp": 1666014756,
        "ems": null
    },
    {
        "latitude": 51.63533,
        "longitude": 19.668348,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 320,
        "squawk": "7000",
        "timestamp": 1666014760,
        "ems": null
    },
    {
        "latitude": 51.636063,
        "longitude": 19.666864,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 305,
        "squawk": "7000",
        "timestamp": 1666014763,
        "ems": null
    },
    {
        "latitude": 51.636475,
        "longitude": 19.665304,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 292,
        "squawk": "7000",
        "timestamp": 1666014766,
        "ems": null
    },
    {
        "latitude": 51.636749,
        "longitude": 19.663969,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 286,
        "squawk": "7000",
        "timestamp": 1666014769,
        "ems": null
    },
    {
        "latitude": 51.636997,
        "longitude": 19.662094,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 281,
        "squawk": "7000",
        "timestamp": 1666014772,
        "ems": null
    },
    {
        "latitude": 51.637161,
        "longitude": 19.660406,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 278,
        "squawk": "7000",
        "timestamp": 1666014775,
        "ems": null
    },
    {
        "latitude": 51.637299,
        "longitude": 19.658846,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 276,
        "squawk": "7000",
        "timestamp": 1666014778,
        "ems": null
    },
    {
        "latitude": 51.637371,
        "longitude": 19.657211,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 274,
        "squawk": "7000",
        "timestamp": 1666014781,
        "ems": null
    },
    {
        "latitude": 51.63739,
        "longitude": 19.656916,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 273,
        "squawk": "7000",
        "timestamp": 1666014782,
        "ems": null
    },
    {
        "latitude": 51.637482,
        "longitude": 19.654318,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014786,
        "ems": null
    },
    {
        "latitude": 51.637512,
        "longitude": 19.652557,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014789,
        "ems": null
    },
    {
        "latitude": 51.637558,
        "longitude": 19.652176,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014791,
        "ems": null
    },
    {
        "latitude": 51.637604,
        "longitude": 19.6492,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014795,
        "ems": null
    },
    {
        "latitude": 51.63765,
        "longitude": 19.647446,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014798,
        "ems": null
    },
    {
        "latitude": 51.637745,
        "longitude": 19.645615,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014801,
        "ems": null
    },
    {
        "latitude": 51.637791,
        "longitude": 19.64386,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014804,
        "ems": null
    },
    {
        "latitude": 51.637939,
        "longitude": 19.640215,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 274,
        "squawk": "7000",
        "timestamp": 1666014811,
        "ems": null
    },
    {
        "latitude": 51.638165,
        "longitude": 19.636154,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 275,
        "squawk": "7000",
        "timestamp": 1666014818,
        "ems": null
    },
    {
        "latitude": 51.638351,
        "longitude": 19.632643,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 274,
        "squawk": "7000",
        "timestamp": 1666014824,
        "ems": null
    },
    {
        "latitude": 51.638489,
        "longitude": 19.629059,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 273,
        "squawk": "7000",
        "timestamp": 1666014830,
        "ems": null
    },
    {
        "latitude": 51.63858,
        "longitude": 19.625887,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014836,
        "ems": null
    },
    {
        "latitude": 51.638718,
        "longitude": 19.62225,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 140.8,
            "kts": 76,
            "mph": 87.5
        },
        "verticalSpeed": {
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 273,
        "squawk": "7000",
        "timestamp": 1666014842,
        "ems": null
    },
    {
        "latitude": 51.638813,
        "longitude": 19.618835,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 272,
        "squawk": "7000",
        "timestamp": 1666014848,
        "ems": null
    },
    {
        "latitude": 51.638908,
        "longitude": 19.615326,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 273,
        "squawk": "7000",
        "timestamp": 1666014854,
        "ems": null
    },
    {
        "latitude": 51.639084,
        "longitude": 19.612154,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 273,
        "squawk": "7000",
        "timestamp": 1666014859,
        "ems": null
    },
    {
        "latitude": 51.639038,
        "longitude": 19.608147,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 267,
        "squawk": "7000",
        "timestamp": 1666014866,
        "ems": null
    },
    {
        "latitude": 51.638954,
        "longitude": 19.6064,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 265,
        "squawk": "7000",
        "timestamp": 1666014869,
        "ems": null
    },
    {
        "latitude": 51.638855,
        "longitude": 19.604731,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 264,
        "squawk": "7000",
        "timestamp": 1666014872,
        "ems": null
    },
    {
        "latitude": 51.638809,
        "longitude": 19.602802,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 268,
        "squawk": "7000",
        "timestamp": 1666014875,
        "ems": null
    },
    {
        "latitude": 51.638855,
        "longitude": 19.599312,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 270,
        "squawk": "7000",
        "timestamp": 1666014881,
        "ems": null
    },
    {
        "latitude": 51.638813,
        "longitude": 19.594955,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 268,
        "squawk": "7000",
        "timestamp": 1666014889,
        "ems": null
    },
    {
        "latitude": 51.638809,
        "longitude": 19.590776,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 271,
        "squawk": "7000",
        "timestamp": 1666014897,
        "ems": null
    },
    {
        "latitude": 51.638767,
        "longitude": 19.587631,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 265,
        "squawk": "7000",
        "timestamp": 1666014903,
        "ems": null
    },
    {
        "latitude": 51.638397,
        "longitude": 19.584614,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666014908,
        "ems": null
    },
    {
        "latitude": 51.638168,
        "longitude": 19.583055,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 255,
        "squawk": "7000",
        "timestamp": 1666014911,
        "ems": null
    },
    {
        "latitude": 51.638023,
        "longitude": 19.581528,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 138.9,
            "kts": 75,
            "mph": 86.3
        },
        "verticalSpeed": {
            "fpm": -640,
            "ms": -3.3
        },
        "heading": 258,
        "squawk": "7000",
        "timestamp": 1666014913,
        "ems": null
    },
    {
        "latitude": 51.637848,
        "longitude": 19.579418,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 263,
        "squawk": "7000",
        "timestamp": 1666014917,
        "ems": null
    },
    {
        "latitude": 51.63765,
        "longitude": 19.576035,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 265,
        "squawk": "7000",
        "timestamp": 1666014923,
        "ems": null
    },
    {
        "latitude": 51.637417,
        "longitude": 19.572296,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 263,
        "squawk": "7000",
        "timestamp": 1666014929,
        "ems": null
    },
    {
        "latitude": 51.637371,
        "longitude": 19.570694,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 268,
        "squawk": "7000",
        "timestamp": 1666014932,
        "ems": null
    },
    {
        "latitude": 51.63765,
        "longitude": 19.56871,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 268,
        "squawk": "7000",
        "timestamp": 1666014935,
        "ems": null
    },
    {
        "latitude": 51.638397,
        "longitude": 19.566879,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 164.8,
            "kts": 89,
            "mph": 102.4
        },
        "verticalSpeed": {
            "fpm": -1152,
            "ms": -5.9
        },
        "heading": 305,
        "squawk": "7000",
        "timestamp": 1666014939,
        "ems": null
    },
    {
        "latitude": 51.638901,
        "longitude": 19.565983,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 170.4,
            "kts": 92,
            "mph": 105.9
        },
        "verticalSpeed": {
            "fpm": -960,
            "ms": -4.9
        },
        "heading": 310,
        "squawk": "7000",
        "timestamp": 1666014941,
        "ems": null
    },
    {
        "latitude": 51.640213,
        "longitude": 19.563904,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 314,
        "squawk": "7000",
        "timestamp": 1666014945,
        "ems": null
    },
    {
        "latitude": 51.64156,
        "longitude": 19.561081,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666014950,
        "ems": null
    },
    {
        "latitude": 51.642242,
        "longitude": 19.559227,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 298,
        "squawk": "7000",
        "timestamp": 1666014954,
        "ems": null
    },
    {
        "latitude": 51.6427,
        "longitude": 19.557594,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 294,
        "squawk": "7000",
        "timestamp": 1666014957,
        "ems": null
    },
    {
        "latitude": 51.643112,
        "longitude": 19.555962,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 290,
        "squawk": "7000",
        "timestamp": 1666014960,
        "ems": null
    },
    {
        "latitude": 51.64333,
        "longitude": 19.55513,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 289,
        "squawk": "7000",
        "timestamp": 1666014961,
        "ems": null
    },
    {
        "latitude": 51.643703,
        "longitude": 19.552841,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 283,
        "squawk": "7000",
        "timestamp": 1666014965,
        "ems": null
    },
    {
        "latitude": 51.64389,
        "longitude": 19.551136,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 138.9,
            "kts": 75,
            "mph": 86.3
        },
        "verticalSpeed": {
            "fpm": 320,
            "ms": 1.6
        },
        "heading": 279,
        "squawk": "7000",
        "timestamp": 1666014968,
        "ems": null
    },
    {
        "latitude": 51.644028,
        "longitude": 19.549503,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 274,
        "squawk": "7000",
        "timestamp": 1666014971,
        "ems": null
    },
    {
        "latitude": 51.643982,
        "longitude": 19.547882,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 270,
        "squawk": "7000",
        "timestamp": 1666014974,
        "ems": null
    },
    {
        "latitude": 51.643936,
        "longitude": 19.546432,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 265,
        "squawk": "7000",
        "timestamp": 1666014977,
        "ems": null
    },
    {
        "latitude": 51.643841,
        "longitude": 19.545059,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 262,
        "squawk": "7000",
        "timestamp": 1666014980,
        "ems": null
    },
    {
        "latitude": 51.643707,
        "longitude": 19.543713,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 261,
        "squawk": "7000",
        "timestamp": 1666014982,
        "ems": null
    },
    {
        "latitude": 51.643471,
        "longitude": 19.541168,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666014987,
        "ems": null
    },
    {
        "latitude": 51.643341,
        "longitude": 19.539408,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666014990,
        "ems": null
    },
    {
        "latitude": 51.643204,
        "longitude": 19.537848,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 263,
        "squawk": "7000",
        "timestamp": 1666014993,
        "ems": null
    },
    {
        "latitude": 51.643112,
        "longitude": 19.536215,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 263,
        "squawk": "7000",
        "timestamp": 1666014996,
        "ems": null
    },
    {
        "latitude": 51.643005,
        "longitude": 19.534607,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 263,
        "squawk": "7000",
        "timestamp": 1666014999,
        "ems": null
    },
    {
        "latitude": 51.642864,
        "longitude": 19.532928,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666015002,
        "ems": null
    },
    {
        "latitude": 51.642677,
        "longitude": 19.529495,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 265,
        "squawk": "7000",
        "timestamp": 1666015008,
        "ems": null
    },
    {
        "latitude": 51.642517,
        "longitude": 19.525898,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 266,
        "squawk": "7000",
        "timestamp": 1666015014,
        "ems": null
    },
    {
        "latitude": 51.642471,
        "longitude": 19.524338,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 267,
        "squawk": "7000",
        "timestamp": 1666015017,
        "ems": null
    },
    {
        "latitude": 51.642307,
        "longitude": 19.519424,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 267,
        "squawk": "7000",
        "timestamp": 1666015025,
        "ems": null
    },
    {
        "latitude": 51.642166,
        "longitude": 19.514999,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 265,
        "squawk": "7000",
        "timestamp": 1666015033,
        "ems": null
    },
    {
        "latitude": 51.641922,
        "longitude": 19.511347,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 264,
        "squawk": "7000",
        "timestamp": 1666015039,
        "ems": null
    },
    {
        "latitude": 51.641876,
        "longitude": 19.50823,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 268,
        "squawk": "7000",
        "timestamp": 1666015044,
        "ems": null
    },
    {
        "latitude": 51.641968,
        "longitude": 19.505779,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 275,
        "squawk": "7000",
        "timestamp": 1666015048,
        "ems": null
    },
    {
        "latitude": 51.642212,
        "longitude": 19.503937,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 283,
        "squawk": "7000",
        "timestamp": 1666015051,
        "ems": null
    },
    {
        "latitude": 51.642654,
        "longitude": 19.502216,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 293,
        "squawk": "7000",
        "timestamp": 1666015054,
        "ems": null
    },
    {
        "latitude": 51.643284,
        "longitude": 19.500351,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 301,
        "squawk": "7000",
        "timestamp": 1666015057,
        "ems": null
    },
    {
        "latitude": 51.643982,
        "longitude": 19.498877,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 308,
        "squawk": "7000",
        "timestamp": 1666015060,
        "ems": null
    },
    {
        "latitude": 51.644867,
        "longitude": 19.497452,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 315,
        "squawk": "7000",
        "timestamp": 1666015062,
        "ems": null
    },
    {
        "latitude": 51.646088,
        "longitude": 19.495832,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 323,
        "squawk": "7000",
        "timestamp": 1666015066,
        "ems": null
    },
    {
        "latitude": 51.647148,
        "longitude": 19.494705,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 327,
        "squawk": "7000",
        "timestamp": 1666015069,
        "ems": null
    },
    {
        "latitude": 51.648266,
        "longitude": 19.493637,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 330,
        "squawk": "7000",
        "timestamp": 1666015072,
        "ems": null
    },
    {
        "latitude": 51.649429,
        "longitude": 19.492645,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 332,
        "squawk": "7000",
        "timestamp": 1666015075,
        "ems": null
    },
    {
        "latitude": 51.650593,
        "longitude": 19.491653,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 333,
        "squawk": "7000",
        "timestamp": 1666015078,
        "ems": null
    },
    {
        "latitude": 51.651802,
        "longitude": 19.490738,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 334,
        "squawk": "7000",
        "timestamp": 1666015081,
        "ems": null
    },
    {
        "latitude": 51.652908,
        "longitude": 19.489969,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 335,
        "squawk": "7000",
        "timestamp": 1666015084,
        "ems": null
    },
    {
        "latitude": 51.654007,
        "longitude": 19.489153,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 335,
        "squawk": "7000",
        "timestamp": 1666015087,
        "ems": null
    },
    {
        "latitude": 51.655334,
        "longitude": 19.488262,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 337,
        "squawk": "7000",
        "timestamp": 1666015090,
        "ems": null
    },
    {
        "latitude": 51.656551,
        "longitude": 19.487534,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 341,
        "squawk": "7000",
        "timestamp": 1666015093,
        "ems": null
    },
    {
        "latitude": 51.657669,
        "longitude": 19.487,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 342,
        "squawk": "7000",
        "timestamp": 1666015096,
        "ems": null
    },
    {
        "latitude": 51.659042,
        "longitude": 19.486332,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 343,
        "squawk": "7000",
        "timestamp": 1666015099,
        "ems": null
    },
    {
        "latitude": 51.660141,
        "longitude": 19.485737,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 342,
        "squawk": "7000",
        "timestamp": 1666015102,
        "ems": null
    },
    {
        "latitude": 51.661533,
        "longitude": 19.485016,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 342,
        "squawk": "7000",
        "timestamp": 1666015105,
        "ems": null
    },
    {
        "latitude": 51.662567,
        "longitude": 19.48455,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 342,
        "squawk": "7000",
        "timestamp": 1666015108,
        "ems": null
    },
    {
        "latitude": 51.66386,
        "longitude": 19.483871,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 341,
        "squawk": "7000",
        "timestamp": 1666015111,
        "ems": null
    },
    {
        "latitude": 51.665176,
        "longitude": 19.483139,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 341,
        "squawk": "7000",
        "timestamp": 1666015114,
        "ems": null
    },
    {
        "latitude": 51.666233,
        "longitude": 19.482574,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 341,
        "squawk": "7000",
        "timestamp": 1666015117,
        "ems": null
    },
    {
        "latitude": 51.66861,
        "longitude": 19.481209,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 338,
        "squawk": "7000",
        "timestamp": 1666015123,
        "ems": null
    },
    {
        "latitude": 51.669846,
        "longitude": 19.480318,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 335,
        "squawk": "7000",
        "timestamp": 1666015126,
        "ems": null
    },
    {
        "latitude": 51.670944,
        "longitude": 19.479427,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 332,
        "squawk": "7000",
        "timestamp": 1666015129,
        "ems": null
    },
    {
        "latitude": 51.672005,
        "longitude": 19.478531,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666015132,
        "ems": null
    },
    {
        "latitude": 51.673096,
        "longitude": 19.477423,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 328,
        "squawk": "7000",
        "timestamp": 1666015135,
        "ems": null
    },
    {
        "latitude": 51.674053,
        "longitude": 19.476395,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 325,
        "squawk": "7000",
        "timestamp": 1666015138,
        "ems": null
    },
    {
        "latitude": 51.675064,
        "longitude": 19.475197,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 323,
        "squawk": "7000",
        "timestamp": 1666015141,
        "ems": null
    },
    {
        "latitude": 51.676117,
        "longitude": 19.47386,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 322,
        "squawk": "7000",
        "timestamp": 1666015144,
        "ems": null
    },
    {
        "latitude": 51.676941,
        "longitude": 19.47282,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 321,
        "squawk": "7000",
        "timestamp": 1666015147,
        "ems": null
    },
    {
        "latitude": 51.677902,
        "longitude": 19.47156,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 320,
        "squawk": "7000",
        "timestamp": 1666015150,
        "ems": null
    },
    {
        "latitude": 51.678898,
        "longitude": 19.470139,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 318,
        "squawk": "7000",
        "timestamp": 1666015153,
        "ems": null
    },
    {
        "latitude": 51.679962,
        "longitude": 19.46859,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 317,
        "squawk": "7000",
        "timestamp": 1666015156,
        "ems": null
    },
    {
        "latitude": 51.680878,
        "longitude": 19.467106,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666015159,
        "ems": null
    },
    {
        "latitude": 51.681782,
        "longitude": 19.465637,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 313,
        "squawk": "7000",
        "timestamp": 1666015162,
        "ems": null
    },
    {
        "latitude": 51.682713,
        "longitude": 19.464035,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 312,
        "squawk": "7000",
        "timestamp": 1666015165,
        "ems": null
    },
    {
        "latitude": 51.683598,
        "longitude": 19.462433,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 312,
        "squawk": "7000",
        "timestamp": 1666015168,
        "ems": null
    },
    {
        "latitude": 51.684357,
        "longitude": 19.461166,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 311,
        "squawk": "7000",
        "timestamp": 1666015171,
        "ems": null
    },
    {
        "latitude": 51.685368,
        "longitude": 19.459305,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 312,
        "squawk": "7000",
        "timestamp": 1666015174,
        "ems": null
    },
    {
        "latitude": 51.686188,
        "longitude": 19.457827,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 312,
        "squawk": "7000",
        "timestamp": 1666015177,
        "ems": null
    },
    {
        "latitude": 51.687138,
        "longitude": 19.456253,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 313,
        "squawk": "7000",
        "timestamp": 1666015180,
        "ems": null
    },
    {
        "latitude": 51.687881,
        "longitude": 19.454956,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 312,
        "squawk": "7000",
        "timestamp": 1666015183,
        "ems": null
    },
    {
        "latitude": 51.688766,
        "longitude": 19.453354,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 311,
        "squawk": "7000",
        "timestamp": 1666015186,
        "ems": null
    },
    {
        "latitude": 51.690765,
        "longitude": 19.450455,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 325,
        "squawk": "7000",
        "timestamp": 1666015192,
        "ems": null
    },
    {
        "latitude": 51.691772,
        "longitude": 19.449512,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 332,
        "squawk": "7000",
        "timestamp": 1666015195,
        "ems": null
    },
    {
        "latitude": 51.69548,
        "longitude": 19.44721,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 339,
        "squawk": "7000",
        "timestamp": 1666015203,
        "ems": null
    },
    {
        "latitude": 51.696808,
        "longitude": 19.446543,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 345,
        "squawk": "7000",
        "timestamp": 1666015206,
        "ems": null
    },
    {
        "latitude": 51.698044,
        "longitude": 19.446173,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 348,
        "squawk": "7000",
        "timestamp": 1666015209,
        "ems": null
    },
    {
        "latitude": 51.69928,
        "longitude": 19.44595,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 354,
        "squawk": "7000",
        "timestamp": 1666015212,
        "ems": null
    },
    {
        "latitude": 51.700871,
        "longitude": 19.445801,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 357,
        "squawk": "7000",
        "timestamp": 1666015216,
        "ems": null
    },
    {
        "latitude": 51.701569,
        "longitude": 19.445724,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 357,
        "squawk": "7000",
        "timestamp": 1666015217,
        "ems": null
    },
    {
        "latitude": 51.70343,
        "longitude": 19.445648,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 357,
        "squawk": "7000",
        "timestamp": 1666015222,
        "ems": null
    },
    {
        "latitude": 51.704639,
        "longitude": 19.445572,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 358,
        "squawk": "7000",
        "timestamp": 1666015224,
        "ems": null
    },
    {
        "latitude": 51.705917,
        "longitude": 19.445578,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 360,
        "squawk": "7000",
        "timestamp": 1666015228,
        "ems": null
    },
    {
        "latitude": 51.707062,
        "longitude": 19.445648,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 2,
        "squawk": "7000",
        "timestamp": 1666015230,
        "ems": null
    },
    {
        "latitude": 51.708344,
        "longitude": 19.445726,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 161.1,
            "kts": 87,
            "mph": 100.1
        },
        "verticalSpeed": {
            "fpm": -768,
            "ms": -3.9
        },
        "heading": 3,
        "squawk": "7000",
        "timestamp": 1666015234,
        "ems": null
    },
    {
        "latitude": 51.709534,
        "longitude": 19.445875,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 161.1,
            "kts": 87,
            "mph": 100.1
        },
        "verticalSpeed": {
            "fpm": -832,
            "ms": -4.2
        },
        "heading": 3,
        "squawk": "7000",
        "timestamp": 1666015237,
        "ems": null
    },
    {
        "latitude": 51.710815,
        "longitude": 19.446024,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 161.1,
            "kts": 87,
            "mph": 100.1
        },
        "verticalSpeed": {
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 5,
        "squawk": "7000",
        "timestamp": 1666015240,
        "ems": null
    },
    {
        "latitude": 51.71196,
        "longitude": 19.446173,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 4,
        "squawk": "7000",
        "timestamp": 1666015243,
        "ems": null
    },
    {
        "latitude": 51.713112,
        "longitude": 19.446259,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 3,
        "squawk": "7000",
        "timestamp": 1666015245,
        "ems": null
    },
    {
        "latitude": 51.714066,
        "longitude": 19.446394,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 2,
        "squawk": "7000",
        "timestamp": 1666015248,
        "ems": null
    },
    {
        "latitude": 51.716602,
        "longitude": 19.446335,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 357,
        "squawk": "7000",
        "timestamp": 1666015254,
        "ems": null
    },
    {
        "latitude": 51.717815,
        "longitude": 19.446182,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 355,
        "squawk": "7000",
        "timestamp": 1666015258,
        "ems": null
    },
    {
        "latitude": 51.718918,
        "longitude": 19.446024,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 355,
        "squawk": "7000",
        "timestamp": 1666015261,
        "ems": null
    },
    {
        "latitude": 51.720062,
        "longitude": 19.445875,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 353,
        "squawk": "7000",
        "timestamp": 1666015264,
        "ems": null
    },
    {
        "latitude": 51.721306,
        "longitude": 19.445419,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 344,
        "squawk": "7000",
        "timestamp": 1666015267,
        "ems": null
    },
    {
        "latitude": 51.722397,
        "longitude": 19.444687,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 338,
        "squawk": "7000",
        "timestamp": 1666015270,
        "ems": null
    },
    {
        "latitude": 51.723309,
        "longitude": 19.444122,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 336,
        "squawk": "7000",
        "timestamp": 1666015272,
        "ems": null
    },
    {
        "latitude": 51.724411,
        "longitude": 19.443352,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 334,
        "squawk": "7000",
        "timestamp": 1666015276,
        "ems": null
    },
    {
        "latitude": 51.725555,
        "longitude": 19.442387,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 333,
        "squawk": "7000",
        "timestamp": 1666015279,
        "ems": null
    },
    {
        "latitude": 51.726566,
        "longitude": 19.441528,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 331,
        "squawk": "7000",
        "timestamp": 1666015282,
        "ems": null
    },
    {
        "latitude": 51.727497,
        "longitude": 19.440613,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 326,
        "squawk": "7000",
        "timestamp": 1666015285,
        "ems": null
    },
    {
        "latitude": 51.727684,
        "longitude": 19.440384,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 326,
        "squawk": "7000",
        "timestamp": 1666015285,
        "ems": null
    },
    {
        "latitude": 51.729126,
        "longitude": 19.437866,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 305,
        "squawk": "7000",
        "timestamp": 1666015291,
        "ems": null
    },
    {
        "latitude": 51.729584,
        "longitude": 19.436373,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 294,
        "squawk": "7000",
        "timestamp": 1666015294,
        "ems": null
    },
    {
        "latitude": 51.729824,
        "longitude": 19.434586,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 279,
        "squawk": "7000",
        "timestamp": 1666015297,
        "ems": null
    },
    {
        "latitude": 51.729733,
        "longitude": 19.433289,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 262,
        "squawk": "7000",
        "timestamp": 1666015300,
        "ems": null
    },
    {
        "latitude": 51.729404,
        "longitude": 19.431686,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 253,
        "squawk": "7000",
        "timestamp": 1666015303,
        "ems": null
    },
    {
        "latitude": 51.729172,
        "longitude": 19.430466,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666015306,
        "ems": null
    },
    {
        "latitude": 51.728851,
        "longitude": 19.429024,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666015309,
        "ems": null
    },
    {
        "latitude": 51.728569,
        "longitude": 19.427948,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666015312,
        "ems": null
    },
    {
        "latitude": 51.728394,
        "longitude": 19.427094,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666015314,
        "ems": null
    },
    {
        "latitude": 51.727936,
        "longitude": 19.425238,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666015318,
        "ems": null
    },
    {
        "latitude": 51.727634,
        "longitude": 19.423904,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666015321,
        "ems": null
    },
    {
        "latitude": 51.727356,
        "longitude": 19.422531,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666015324,
        "ems": null
    },
    {
        "latitude": 51.72702,
        "longitude": 19.421305,
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
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 246,
        "squawk": "7000",
        "timestamp": 1666015327,
        "ems": null
    },
    {
        "latitude": 51.726746,
        "longitude": 19.420116,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666015330,
        "ems": null
    },
    {
        "latitude": 51.726196,
        "longitude": 19.417667,
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
            "fpm": -512,
            "ms": -2.6
        },
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666015336,
        "ems": null
    },
    {
        "latitude": 51.725681,
        "longitude": 19.415054,
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
            "fpm": -448,
            "ms": -2.3
        },
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666015342,
        "ems": null
    },
    {
        "latitude": 51.725235,
        "longitude": 19.413139,
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
            "fpm": -512,
            "ms": -2.6
        },
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666015347,
        "ems": null
    },
    {
        "latitude": 51.724655,
        "longitude": 19.410782,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 113,
            "kts": 61,
            "mph": 70.2
        },
        "verticalSpeed": {
            "fpm": -512,
            "ms": -2.6
        },
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666015353,
        "ems": null
    },
    {
        "latitude": 51.719212,
        "longitude": 19.385605,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666015413,
        "ems": null
    },
    {
        "latitude": 51.718464,
        "longitude": 19.382172,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666015421,
        "ems": null
    },
    {
        "latitude": 51.718231,
        "longitude": 19.381145,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 254,
        "squawk": "7000",
        "timestamp": 1666015423,
        "ems": null
    },
    {
        "latitude": 51.717953,
        "longitude": 19.379425,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 255,
        "squawk": "7000",
        "timestamp": 1666015427,
        "ems": null
    },
    {
        "latitude": 51.717819,
        "longitude": 19.378325,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666015429,
        "ems": null
    },
    {
        "latitude": 51.717728,
        "longitude": 19.377804,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666015430,
        "ems": null
    },
    {
        "latitude": 51.717533,
        "longitude": 19.37645,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 257,
        "squawk": "7000",
        "timestamp": 1666015433,
        "ems": null
    },
    {
        "latitude": 51.717361,
        "longitude": 19.375206,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666015436,
        "ems": null
    },
    {
        "latitude": 51.717163,
        "longitude": 19.373779,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666015438,
        "ems": null
    },
    {
        "latitude": 51.716904,
        "longitude": 19.372015,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666015442,
        "ems": null
    },
    {
        "latitude": 51.716629,
        "longitude": 19.37038,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 255,
        "squawk": "7000",
        "timestamp": 1666015445,
        "ems": null
    },
    {
        "latitude": 51.716354,
        "longitude": 19.36845,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 144.5,
            "kts": 78,
            "mph": 89.8
        },
        "verticalSpeed": {
            "fpm": 640,
            "ms": 3.3
        },
        "heading": 257,
        "squawk": "7000",
        "timestamp": 1666015448,
        "ems": null
    },
    {
        "latitude": 51.715897,
        "longitude": 19.365631,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 140.8,
            "kts": 76,
            "mph": 87.5
        },
        "verticalSpeed": {
            "fpm": 832,
            "ms": 4.2
        },
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666015453,
        "ems": null
    },
    {
        "latitude": 51.715393,
        "longitude": 19.363785,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 244,
        "squawk": "7000",
        "timestamp": 1666015457,
        "ems": null
    },
    {
        "latitude": 51.714836,
        "longitude": 19.362488,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 232,
        "squawk": "7000",
        "timestamp": 1666015460,
        "ems": null
    },
    {
        "latitude": 51.714157,
        "longitude": 19.361324,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 223,
        "squawk": "7000",
        "timestamp": 1666015463,
        "ems": null
    },
    {
        "latitude": 51.71339,
        "longitude": 19.360428,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 211,
        "squawk": "7000",
        "timestamp": 1666015466,
        "ems": null
    },
    {
        "latitude": 51.712509,
        "longitude": 19.359766,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 202,
        "squawk": "7000",
        "timestamp": 1666015469,
        "ems": null
    },
    {
        "latitude": 51.711594,
        "longitude": 19.359394,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 190,
        "squawk": "7000",
        "timestamp": 1666015472,
        "ems": null
    },
    {
        "latitude": 51.710506,
        "longitude": 19.359207,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 182,
        "squawk": "7000",
        "timestamp": 1666015475,
        "ems": null
    },
    {
        "latitude": 51.709621,
        "longitude": 19.359283,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 122.2,
            "kts": 66,
            "mph": 76
        },
        "verticalSpeed": {
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 174,
        "squawk": "7000",
        "timestamp": 1666015478,
        "ems": null
    },
    {
        "latitude": 51.708664,
        "longitude": 19.359543,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 167,
        "squawk": "7000",
        "timestamp": 1666015481,
        "ems": null
    },
    {
        "latitude": 51.70784,
        "longitude": 19.359915,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 163,
        "squawk": "7000",
        "timestamp": 1666015484,
        "ems": null
    },
    {
        "latitude": 51.706829,
        "longitude": 19.360428,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 160,
        "squawk": "7000",
        "timestamp": 1666015487,
        "ems": null
    },
    {
        "latitude": 51.705898,
        "longitude": 19.361038,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 157,
        "squawk": "7000",
        "timestamp": 1666015490,
        "ems": null
    },
    {
        "latitude": 51.705048,
        "longitude": 19.361845,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 148,
        "squawk": "7000",
        "timestamp": 1666015493,
        "ems": null
    },
    {
        "latitude": 51.704224,
        "longitude": 19.362957,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 137,
        "squawk": "7000",
        "timestamp": 1666015496,
        "ems": null
    },
    {
        "latitude": 51.703476,
        "longitude": 19.364471,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 125,
        "squawk": "7000",
        "timestamp": 1666015499,
        "ems": null
    },
    {
        "latitude": 51.702988,
        "longitude": 19.366076,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 115,
        "squawk": "7000",
        "timestamp": 1666015502,
        "ems": null
    },
    {
        "latitude": 51.702499,
        "longitude": 19.367905,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 109,
        "squawk": "7000",
        "timestamp": 1666015505,
        "ems": null
    },
    {
        "latitude": 51.702126,
        "longitude": 19.369965,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 105,
        "squawk": "7000",
        "timestamp": 1666015508,
        "ems": null
    },
    {
        "latitude": 51.701889,
        "longitude": 19.371941,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 101,
        "squawk": "7000",
        "timestamp": 1666015511,
        "ems": null
    },
    {
        "latitude": 51.701706,
        "longitude": 19.373856,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 95,
        "squawk": "7000",
        "timestamp": 1666015514,
        "ems": null
    },
    {
        "latitude": 51.70166,
        "longitude": 19.375504,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 90,
        "squawk": "7000",
        "timestamp": 1666015517,
        "ems": null
    },
    {
        "latitude": 51.701797,
        "longitude": 19.377953,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 82,
        "squawk": "7000",
        "timestamp": 1666015520,
        "ems": null
    },
    {
        "latitude": 51.70208,
        "longitude": 19.379807,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 75,
        "squawk": "7000",
        "timestamp": 1666015523,
        "ems": null
    },
    {
        "latitude": 51.702545,
        "longitude": 19.382019,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 68,
        "squawk": "7000",
        "timestamp": 1666015526,
        "ems": null
    },
    {
        "latitude": 51.702988,
        "longitude": 19.383669,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 68,
        "squawk": "7000",
        "timestamp": 1666015529,
        "ems": null
    },
    {
        "latitude": 51.703537,
        "longitude": 19.385969,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666015532,
        "ems": null
    },
    {
        "latitude": 51.703949,
        "longitude": 19.387676,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666015535,
        "ems": null
    },
    {
        "latitude": 51.704361,
        "longitude": 19.38942,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666015537,
        "ems": null
    },
    {
        "latitude": 51.704964,
        "longitude": 19.391937,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 69,
        "squawk": "7000",
        "timestamp": 1666015541,
        "ems": null
    },
    {
        "latitude": 51.705429,
        "longitude": 19.394073,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 70,
        "squawk": "7000",
        "timestamp": 1666015544,
        "ems": null
    },
    {
        "latitude": 51.705826,
        "longitude": 19.39599,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015547,
        "ems": null
    },
    {
        "latitude": 51.706642,
        "longitude": 19.399872,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666015553,
        "ems": null
    },
    {
        "latitude": 51.707016,
        "longitude": 19.401781,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 73,
        "squawk": "7000",
        "timestamp": 1666015556,
        "ems": null
    },
    {
        "latitude": 51.707748,
        "longitude": 19.405939,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 75,
        "squawk": "7000",
        "timestamp": 1666015563,
        "ems": null
    },
    {
        "latitude": 51.708069,
        "longitude": 19.407942,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 75,
        "squawk": "7000",
        "timestamp": 1666015565,
        "ems": null
    },
    {
        "latitude": 51.708363,
        "longitude": 19.410019,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 76,
        "squawk": "7000",
        "timestamp": 1666015568,
        "ems": null
    },
    {
        "latitude": 51.708458,
        "longitude": 19.410629,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 77,
        "squawk": "7000",
        "timestamp": 1666015569,
        "ems": null
    },
    {
        "latitude": 51.708923,
        "longitude": 19.41391,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 76,
        "squawk": "7000",
        "timestamp": 1666015574,
        "ems": null
    },
    {
        "latitude": 51.709167,
        "longitude": 19.415663,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 77,
        "squawk": "7000",
        "timestamp": 1666015577,
        "ems": null
    },
    {
        "latitude": 51.709396,
        "longitude": 19.417444,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 78,
        "squawk": "7000",
        "timestamp": 1666015580,
        "ems": null
    },
    {
        "latitude": 51.709576,
        "longitude": 19.418945,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 79,
        "squawk": "7000",
        "timestamp": 1666015583,
        "ems": null
    },
    {
        "latitude": 51.709763,
        "longitude": 19.42123,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 82,
        "squawk": "7000",
        "timestamp": 1666015586,
        "ems": null
    },
    {
        "latitude": 51.709946,
        "longitude": 19.423065,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 82,
        "squawk": "7000",
        "timestamp": 1666015589,
        "ems": null
    },
    {
        "latitude": 51.710087,
        "longitude": 19.42482,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 83,
        "squawk": "7000",
        "timestamp": 1666015593,
        "ems": null
    },
    {
        "latitude": 51.710175,
        "longitude": 19.426723,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 83,
        "squawk": "7000",
        "timestamp": 1666015596,
        "ems": null
    },
    {
        "latitude": 51.71032,
        "longitude": 19.428482,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 82,
        "squawk": "7000",
        "timestamp": 1666015598,
        "ems": null
    },
    {
        "latitude": 51.710632,
        "longitude": 19.432068,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 82,
        "squawk": "7000",
        "timestamp": 1666015604,
        "ems": null
    },
    {
        "latitude": 51.711296,
        "longitude": 19.43573,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 69,
        "squawk": "7000",
        "timestamp": 1666015611,
        "ems": null
    },
    {
        "latitude": 51.711914,
        "longitude": 19.437115,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 53,
        "squawk": "7000",
        "timestamp": 1666015613,
        "ems": null
    },
    {
        "latitude": 51.712833,
        "longitude": 19.438324,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 35,
        "squawk": "7000",
        "timestamp": 1666015616,
        "ems": null
    },
    {
        "latitude": 51.714088,
        "longitude": 19.439316,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 163,
            "kts": 88,
            "mph": 101.3
        },
        "verticalSpeed": {
            "fpm": -512,
            "ms": -2.6
        },
        "heading": 22,
        "squawk": "7000",
        "timestamp": 1666015620,
        "ems": null
    },
    {
        "latitude": 51.715256,
        "longitude": 19.439789,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 164.8,
            "kts": 89,
            "mph": 102.4
        },
        "verticalSpeed": {
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 12,
        "squawk": "7000",
        "timestamp": 1666015623,
        "ems": null
    },
    {
        "latitude": 51.716446,
        "longitude": 19.44001,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 4,
        "squawk": "7000",
        "timestamp": 1666015626,
        "ems": null
    },
    {
        "latitude": 51.717728,
        "longitude": 19.440159,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 2,
        "squawk": "7000",
        "timestamp": 1666015629,
        "ems": null
    },
    {
        "latitude": 51.718929,
        "longitude": 19.440231,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 1,
        "squawk": "7000",
        "timestamp": 1666015632,
        "ems": null
    },
    {
        "latitude": 51.720097,
        "longitude": 19.440155,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666015635,
        "ems": null
    },
    {
        "latitude": 51.721252,
        "longitude": 19.439789,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 347,
        "squawk": "7000",
        "timestamp": 1666015638,
        "ems": null
    },
    {
        "latitude": 51.722305,
        "longitude": 19.439342,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 342,
        "squawk": "7000",
        "timestamp": 1666015641,
        "ems": null
    },
    {
        "latitude": 51.7234,
        "longitude": 19.438782,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 341,
        "squawk": "7000",
        "timestamp": 1666015644,
        "ems": null
    },
    {
        "latitude": 51.724548,
        "longitude": 19.438154,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 340,
        "squawk": "7000",
        "timestamp": 1666015647,
        "ems": null
    },
    {
        "latitude": 51.725418,
        "longitude": 19.437487,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 335,
        "squawk": "7000",
        "timestamp": 1666015650,
        "ems": null
    },
    {
        "latitude": 51.726334,
        "longitude": 19.436569,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 325,
        "squawk": "7000",
        "timestamp": 1666015653,
        "ems": null
    },
    {
        "latitude": 51.727871,
        "longitude": 19.434128,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 140.8,
            "kts": 76,
            "mph": 87.5
        },
        "verticalSpeed": {
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 309,
        "squawk": "7000",
        "timestamp": 1666015659,
        "ems": null
    },
    {
        "latitude": 51.727962,
        "longitude": 19.433823,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 291,
        "squawk": "7000",
        "timestamp": 1666015662,
        "ems": null
    },
    {
        "latitude": 51.728569,
        "longitude": 19.430923,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 283,
        "squawk": "7000",
        "timestamp": 1666015665,
        "ems": null
    },
    {
        "latitude": 51.728519,
        "longitude": 19.429321,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 131.5,
            "kts": 71,
            "mph": 81.7
        },
        "verticalSpeed": {
            "fpm": -640,
            "ms": -3.3
        },
        "heading": 266,
        "squawk": "7000",
        "timestamp": 1666015668,
        "ems": null
    },
    {
        "latitude": 51.728382,
        "longitude": 19.428024,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 258,
        "squawk": "7000",
        "timestamp": 1666015671,
        "ems": null
    },
    {
        "latitude": 51.728104,
        "longitude": 19.42627,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666015674,
        "ems": null
    },
    {
        "latitude": 51.72789,
        "longitude": 19.425091,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 125.9,
            "kts": 68,
            "mph": 78.3
        },
        "verticalSpeed": {
            "fpm": -512,
            "ms": -2.6
        },
        "heading": 253,
        "squawk": "7000",
        "timestamp": 1666015677,
        "ems": null
    },
    {
        "latitude": 51.727524,
        "longitude": 19.423382,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666015680,
        "ems": null
    },
    {
        "latitude": 51.726936,
        "longitude": 19.4207,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 127.8,
            "kts": 69,
            "mph": 79.4
        },
        "verticalSpeed": {
            "fpm": -704,
            "ms": -3.6
        },
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666015685,
        "ems": null
    },
    {
        "latitude": 51.726753,
        "longitude": 19.419785,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666015688,
        "ems": null
    },
    {
        "latitude": 51.725967,
        "longitude": 19.416628,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666015694,
        "ems": null
    },
    {
        "latitude": 51.725647,
        "longitude": 19.41507,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666015698,
        "ems": null
    },
    {
        "latitude": 51.725327,
        "longitude": 19.413584,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666015701,
        "ems": null
    },
    {
        "latitude": 51.724655,
        "longitude": 19.410782,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 247,
        "squawk": "7000",
        "timestamp": 1666015707,
        "ems": null
    },
    {
        "latitude": 51.724098,
        "longitude": 19.40834,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666015713,
        "ems": null
    },
    {
        "latitude": 51.723679,
        "longitude": 19.406509,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666015717,
        "ems": null
    },
    {
        "latitude": 51.718838,
        "longitude": 19.383392,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666015770,
        "ems": null
    },
    {
        "latitude": 51.718323,
        "longitude": 19.380848,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 122.2,
            "kts": 66,
            "mph": 76
        },
        "verticalSpeed": {
            "fpm": 448,
            "ms": 2.3
        },
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666015776,
        "ems": null
    },
    {
        "latitude": 51.717819,
        "longitude": 19.378473,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 122.2,
            "kts": 66,
            "mph": 76
        },
        "verticalSpeed": {
            "fpm": 448,
            "ms": 2.3
        },
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666015781,
        "ems": null
    },
    {
        "latitude": 51.716995,
        "longitude": 19.374762,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 135.2,
            "kts": 73,
            "mph": 84
        },
        "verticalSpeed": {
            "fpm": 768,
            "ms": 3.9
        },
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666015788,
        "ems": null
    },
    {
        "latitude": 51.716415,
        "longitude": 19.371796,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 135.2,
            "kts": 73,
            "mph": 84
        },
        "verticalSpeed": {
            "fpm": 768,
            "ms": 3.9
        },
        "heading": 255,
        "squawk": "7000",
        "timestamp": 1666015794,
        "ems": null
    },
    {
        "latitude": 51.716171,
        "longitude": 19.370085,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 257,
        "squawk": "7000",
        "timestamp": 1666015797,
        "ems": null
    },
    {
        "latitude": 51.715942,
        "longitude": 19.36808,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 260,
        "squawk": "7000",
        "timestamp": 1666015801,
        "ems": null
    },
    {
        "latitude": 51.715805,
        "longitude": 19.366596,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 263,
        "squawk": "7000",
        "timestamp": 1666015803,
        "ems": null
    },
    {
        "latitude": 51.715714,
        "longitude": 19.365036,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 135.2,
            "kts": 73,
            "mph": 84
        },
        "verticalSpeed": {
            "fpm": 768,
            "ms": 3.9
        },
        "heading": 264,
        "squawk": "7000",
        "timestamp": 1666015806,
        "ems": null
    },
    {
        "latitude": 51.71558,
        "longitude": 19.363403,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 260,
        "squawk": "7000",
        "timestamp": 1666015809,
        "ems": null
    },
    {
        "latitude": 51.714882,
        "longitude": 19.360504,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 239,
        "squawk": "7000",
        "timestamp": 1666015815,
        "ems": null
    },
    {
        "latitude": 51.714294,
        "longitude": 19.359394,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 122.2,
            "kts": 66,
            "mph": 76
        },
        "verticalSpeed": {
            "fpm": 704,
            "ms": 3.6
        },
        "heading": 226,
        "squawk": "7000",
        "timestamp": 1666015819,
        "ems": null
    },
    {
        "latitude": 51.713608,
        "longitude": 19.358429,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 215,
        "squawk": "7000",
        "timestamp": 1666015822,
        "ems": null
    },
    {
        "latitude": 51.712788,
        "longitude": 19.357758,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 206,
        "squawk": "7000",
        "timestamp": 1666015824,
        "ems": null
    },
    {
        "latitude": 51.71196,
        "longitude": 19.357317,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 195,
        "squawk": "7000",
        "timestamp": 1666015827,
        "ems": null
    },
    {
        "latitude": 51.711109,
        "longitude": 19.357071,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 187,
        "squawk": "7000",
        "timestamp": 1666015830,
        "ems": null
    },
    {
        "latitude": 51.710175,
        "longitude": 19.357094,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 177,
        "squawk": "7000",
        "timestamp": 1666015834,
        "ems": null
    },
    {
        "latitude": 51.709389,
        "longitude": 19.357224,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 114.8,
            "kts": 62,
            "mph": 71.3
        },
        "verticalSpeed": {
            "fpm": 768,
            "ms": 3.9
        },
        "heading": 168,
        "squawk": "7000",
        "timestamp": 1666015837,
        "ems": null
    },
    {
        "latitude": 51.708458,
        "longitude": 19.357681,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 163,
        "squawk": "7000",
        "timestamp": 1666015840,
        "ems": null
    },
    {
        "latitude": 51.707664,
        "longitude": 19.358139,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 159,
        "squawk": "7000",
        "timestamp": 1666015843,
        "ems": null
    },
    {
        "latitude": 51.706921,
        "longitude": 19.358597,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 116.7,
            "kts": 63,
            "mph": 72.5
        },
        "verticalSpeed": {
            "fpm": 448,
            "ms": 2.3
        },
        "heading": 158,
        "squawk": "7000",
        "timestamp": 1666015846,
        "ems": null
    },
    {
        "latitude": 51.70599,
        "longitude": 19.359131,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 160,
        "squawk": "7000",
        "timestamp": 1666015849,
        "ems": null
    },
    {
        "latitude": 51.705246,
        "longitude": 19.359589,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 162,
        "squawk": "7000",
        "timestamp": 1666015852,
        "ems": null
    },
    {
        "latitude": 51.704269,
        "longitude": 19.359989,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 165,
        "squawk": "7000",
        "timestamp": 1666015854,
        "ems": null
    },
    {
        "latitude": 51.703217,
        "longitude": 19.360434,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 163,
        "squawk": "7000",
        "timestamp": 1666015858,
        "ems": null
    },
    {
        "latitude": 51.702301,
        "longitude": 19.360954,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 161,
        "squawk": "7000",
        "timestamp": 1666015861,
        "ems": null
    },
    {
        "latitude": 51.701336,
        "longitude": 19.36142,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 161,
        "squawk": "7000",
        "timestamp": 1666015864,
        "ems": null
    },
    {
        "latitude": 51.700405,
        "longitude": 19.36203,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 159,
        "squawk": "7000",
        "timestamp": 1666015867,
        "ems": null
    },
    {
        "latitude": 51.699463,
        "longitude": 19.362736,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 151,
        "squawk": "7000",
        "timestamp": 1666015870,
        "ems": null
    },
    {
        "latitude": 51.698685,
        "longitude": 19.363701,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 140,
        "squawk": "7000",
        "timestamp": 1666015873,
        "ems": null
    },
    {
        "latitude": 51.697891,
        "longitude": 19.365082,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 129,
        "squawk": "7000",
        "timestamp": 1666015876,
        "ems": null
    },
    {
        "latitude": 51.69733,
        "longitude": 19.366608,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 117,
        "squawk": "7000",
        "timestamp": 1666015879,
        "ems": null
    },
    {
        "latitude": 51.696854,
        "longitude": 19.368599,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 108,
        "squawk": "7000",
        "timestamp": 1666015882,
        "ems": null
    },
    {
        "latitude": 51.696625,
        "longitude": 19.37038,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 99,
        "squawk": "7000",
        "timestamp": 1666015885,
        "ems": null
    },
    {
        "latitude": 51.696541,
        "longitude": 19.37233,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 91,
        "squawk": "7000",
        "timestamp": 1666015887,
        "ems": null
    },
    {
        "latitude": 51.696671,
        "longitude": 19.374613,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 82,
        "squawk": "7000",
        "timestamp": 1666015891,
        "ems": null
    },
    {
        "latitude": 51.696957,
        "longitude": 19.37645,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 75,
        "squawk": "7000",
        "timestamp": 1666015893,
        "ems": null
    },
    {
        "latitude": 51.697357,
        "longitude": 19.378399,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 70,
        "squawk": "7000",
        "timestamp": 1666015896,
        "ems": null
    },
    {
        "latitude": 51.697842,
        "longitude": 19.380798,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015900,
        "ems": null
    },
    {
        "latitude": 51.698227,
        "longitude": 19.382629,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666015903,
        "ems": null
    },
    {
        "latitude": 51.698635,
        "longitude": 19.384842,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666015906,
        "ems": null
    },
    {
        "latitude": 51.699005,
        "longitude": 19.386786,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015909,
        "ems": null
    },
    {
        "latitude": 51.699463,
        "longitude": 19.38879,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 70,
        "squawk": "7000",
        "timestamp": 1666015912,
        "ems": null
    },
    {
        "latitude": 51.699875,
        "longitude": 19.390795,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015915,
        "ems": null
    },
    {
        "latitude": 51.700333,
        "longitude": 19.392948,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015918,
        "ems": null
    },
    {
        "latitude": 51.700745,
        "longitude": 19.394953,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 70,
        "squawk": "7000",
        "timestamp": 1666015921,
        "ems": null
    },
    {
        "latitude": 51.701202,
        "longitude": 19.396881,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 70,
        "squawk": "7000",
        "timestamp": 1666015924,
        "ems": null
    },
    {
        "latitude": 51.70208,
        "longitude": 19.400711,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 69,
        "squawk": "7000",
        "timestamp": 1666015930,
        "ems": null
    },
    {
        "latitude": 51.703011,
        "longitude": 19.404755,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015936,
        "ems": null
    },
    {
        "latitude": 51.7038,
        "longitude": 19.408646,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666015942,
        "ems": null
    },
    {
        "latitude": 51.704544,
        "longitude": 19.41247,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015948,
        "ems": null
    },
    {
        "latitude": 51.705292,
        "longitude": 19.416122,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015954,
        "ems": null
    },
    {
        "latitude": 51.706081,
        "longitude": 19.419785,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 71,
        "squawk": "7000",
        "timestamp": 1666015960,
        "ems": null
    },
    {
        "latitude": 51.706829,
        "longitude": 19.423294,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 70,
        "squawk": "7000",
        "timestamp": 1666015966,
        "ems": null
    },
    {
        "latitude": 51.707527,
        "longitude": 19.426651,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666015972,
        "ems": null
    },
    {
        "latitude": 51.708115,
        "longitude": 19.42984,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 73,
        "squawk": "7000",
        "timestamp": 1666015978,
        "ems": null
    },
    {
        "latitude": 51.708782,
        "longitude": 19.433441,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666015984,
        "ems": null
    },
    {
        "latitude": 51.709667,
        "longitude": 19.436798,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 59,
        "squawk": "7000",
        "timestamp": 1666015990,
        "ems": null
    },
    {
        "latitude": 51.710365,
        "longitude": 19.438095,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 47,
        "squawk": "7000",
        "timestamp": 1666015993,
        "ems": null
    },
    {
        "latitude": 51.711319,
        "longitude": 19.439342,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 34,
        "squawk": "7000",
        "timestamp": 1666015996,
        "ems": null
    },
    {
        "latitude": 51.712372,
        "longitude": 19.440233,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 23,
        "squawk": "7000",
        "timestamp": 1666015999,
        "ems": null
    },
    {
        "latitude": 51.713486,
        "longitude": 19.440765,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 14,
        "squawk": "7000",
        "timestamp": 1666016002,
        "ems": null
    },
    {
        "latitude": 51.714741,
        "longitude": 19.440994,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 4,
        "squawk": "7000",
        "timestamp": 1666016005,
        "ems": null
    },
    {
        "latitude": 51.715851,
        "longitude": 19.440975,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 358,
        "squawk": "7000",
        "timestamp": 1666016008,
        "ems": null
    },
    {
        "latitude": 51.717087,
        "longitude": 19.440826,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 164.8,
            "kts": 89,
            "mph": 102.4
        },
        "verticalSpeed": {
            "fpm": -704,
            "ms": -3.6
        },
        "heading": 356,
        "squawk": "7000",
        "timestamp": 1666016011,
        "ems": null
    },
    {
        "latitude": 51.718323,
        "longitude": 19.44068,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 355,
        "squawk": "7000",
        "timestamp": 1666016014,
        "ems": null
    },
    {
        "latitude": 51.71965,
        "longitude": 19.440531,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 168.5,
            "kts": 91,
            "mph": 104.7
        },
        "verticalSpeed": {
            "fpm": -704,
            "ms": -3.6
        },
        "heading": 354,
        "squawk": "7000",
        "timestamp": 1666016017,
        "ems": null
    },
    {
        "latitude": 51.720932,
        "longitude": 19.440384,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 356,
        "squawk": "7000",
        "timestamp": 1666016020,
        "ems": null
    },
    {
        "latitude": 51.722141,
        "longitude": 19.440231,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 356,
        "squawk": "7000",
        "timestamp": 1666016023,
        "ems": null
    },
    {
        "latitude": 51.723358,
        "longitude": 19.440084,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 355,
        "squawk": "7000",
        "timestamp": 1666016026,
        "ems": null
    },
    {
        "latitude": 51.724472,
        "longitude": 19.439926,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 151.9,
            "kts": 82,
            "mph": 94.4
        },
        "verticalSpeed": {
            "fpm": -448,
            "ms": -2.3
        },
        "heading": 355,
        "squawk": "7000",
        "timestamp": 1666016029,
        "ems": null
    },
    {
        "latitude": 51.72554,
        "longitude": 19.439697,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 353,
        "squawk": "7000",
        "timestamp": 1666016032,
        "ems": null
    },
    {
        "latitude": 51.726746,
        "longitude": 19.439268,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 344,
        "squawk": "7000",
        "timestamp": 1666016035,
        "ems": null
    },
    {
        "latitude": 51.727524,
        "longitude": 19.438601,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 336,
        "squawk": "7000",
        "timestamp": 1666016038,
        "ems": null
    },
    {
        "latitude": 51.728195,
        "longitude": 19.43779,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 336,
        "squawk": "7000",
        "timestamp": 1666016040,
        "ems": null
    },
    {
        "latitude": 51.728989,
        "longitude": 19.436152,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 305,
        "squawk": "7000",
        "timestamp": 1666016044,
        "ems": null
    },
    {
        "latitude": 51.729401,
        "longitude": 19.434296,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 131.5,
            "kts": 71,
            "mph": 81.7
        },
        "verticalSpeed": {
            "fpm": -448,
            "ms": -2.3
        },
        "heading": 282,
        "squawk": "7000",
        "timestamp": 1666016047,
        "ems": null
    },
    {
        "latitude": 51.729359,
        "longitude": 19.432526,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 263,
        "squawk": "7000",
        "timestamp": 1666016050,
        "ems": null
    },
    {
        "latitude": 51.729126,
        "longitude": 19.431177,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 253,
        "squawk": "7000",
        "timestamp": 1666016053,
        "ems": null
    },
    {
        "latitude": 51.728851,
        "longitude": 19.429768,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666016056,
        "ems": null
    },
    {
        "latitude": 51.728661,
        "longitude": 19.428711,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016059,
        "ems": null
    },
    {
        "latitude": 51.728336,
        "longitude": 19.427185,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 113,
            "kts": 61,
            "mph": 70.2
        },
        "verticalSpeed": {
            "fpm": -512,
            "ms": -2.6
        },
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666016062,
        "ems": null
    },
    {
        "latitude": 51.728073,
        "longitude": 19.425982,
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
            "fpm": -512,
            "ms": -2.6
        },
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666016065,
        "ems": null
    },
    {
        "latitude": 51.727776,
        "longitude": 19.424667,
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
            "fpm": -320,
            "ms": -1.6
        },
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016069,
        "ems": null
    },
    {
        "latitude": 51.72757,
        "longitude": 19.423531,
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
            "fpm": -320,
            "ms": -1.6
        },
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016071,
        "ems": null
    },
    {
        "latitude": 51.727341,
        "longitude": 19.422344,
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
            "fpm": -384,
            "ms": -2
        },
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666016074,
        "ems": null
    },
    {
        "latitude": 51.727158,
        "longitude": 19.421379,
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
            "fpm": -448,
            "ms": -2.3
        },
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016077,
        "ems": null
    },
    {
        "latitude": 51.726746,
        "longitude": 19.419598,
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
            "fpm": -640,
            "ms": -3.3
        },
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666016081,
        "ems": null
    },
    {
        "latitude": 51.726425,
        "longitude": 19.418564,
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
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 246,
        "squawk": "7000",
        "timestamp": 1666016084,
        "ems": null
    },
    {
        "latitude": 51.726055,
        "longitude": 19.416962,
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
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666016088,
        "ems": null
    },
    {
        "latitude": 51.725636,
        "longitude": 19.414902,
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
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016093,
        "ems": null
    },
    {
        "latitude": 51.72464,
        "longitude": 19.410542,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666016105,
        "ems": null
    },
    {
        "latitude": 51.72084,
        "longitude": 19.392874,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016150,
        "ems": null
    },
    {
        "latitude": 51.720329,
        "longitude": 19.390411,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016156,
        "ems": null
    },
    {
        "latitude": 51.719696,
        "longitude": 19.387529,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016162,
        "ems": null
    },
    {
        "latitude": 51.718964,
        "longitude": 19.383892,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016170,
        "ems": null
    },
    {
        "latitude": 51.718372,
        "longitude": 19.381027,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016177,
        "ems": null
    },
    {
        "latitude": 51.71772,
        "longitude": 19.378204,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666016183,
        "ems": null
    },
    {
        "latitude": 51.717041,
        "longitude": 19.375206,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666016189,
        "ems": null
    },
    {
        "latitude": 51.716465,
        "longitude": 19.37294,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 247,
        "squawk": "7000",
        "timestamp": 1666016194,
        "ems": null
    },
    {
        "latitude": 51.71558,
        "longitude": 19.370728,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 122.2,
            "kts": 66,
            "mph": 76
        },
        "verticalSpeed": {
            "fpm": -1344,
            "ms": -6.8
        },
        "heading": 234,
        "squawk": "7000",
        "timestamp": 1666016199,
        "ems": null
    },
    {
        "latitude": 51.714462,
        "longitude": 19.369049,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 220,
        "squawk": "7000",
        "timestamp": 1666016204,
        "ems": null
    },
    {
        "latitude": 51.713623,
        "longitude": 19.36821,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 205,
        "squawk": "7000",
        "timestamp": 1666016207,
        "ems": null
    },
    {
        "latitude": 51.712879,
        "longitude": 19.367981,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 190,
        "squawk": "7000",
        "timestamp": 1666016210,
        "ems": null
    },
    {
        "latitude": 51.71196,
        "longitude": 19.368303,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 159,
        "squawk": "7000",
        "timestamp": 1666016213,
        "ems": null
    },
    {
        "latitude": 51.711365,
        "longitude": 19.36912,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 138,
        "squawk": "7000",
        "timestamp": 1666016216,
        "ems": null
    },
    {
        "latitude": 51.71109,
        "longitude": 19.37001,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 116,
        "squawk": "7000",
        "timestamp": 1666016218,
        "ems": null
    },
    {
        "latitude": 51.711018,
        "longitude": 19.371948,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 127.8,
            "kts": 69,
            "mph": 79.4
        },
        "verticalSpeed": {
            "fpm": -832,
            "ms": -4.2
        },
        "heading": 91,
        "squawk": "7000",
        "timestamp": 1666016222,
        "ems": null
    },
    {
        "latitude": 51.711136,
        "longitude": 19.372534,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666016223,
        "ems": null
    },
    {
        "latitude": 51.712505,
        "longitude": 19.374847,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 30,
        "squawk": "7000",
        "timestamp": 1666016229,
        "ems": null
    },
    {
        "latitude": 51.71347,
        "longitude": 19.375578,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 25,
        "squawk": "7000",
        "timestamp": 1666016232,
        "ems": null
    },
    {
        "latitude": 51.71434,
        "longitude": 19.376245,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 24,
        "squawk": "7000",
        "timestamp": 1666016235,
        "ems": null
    },
    {
        "latitude": 51.715302,
        "longitude": 19.376987,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 24,
        "squawk": "7000",
        "timestamp": 1666016238,
        "ems": null
    },
    {
        "latitude": 51.716263,
        "longitude": 19.377583,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 23,
        "squawk": "7000",
        "timestamp": 1666016241,
        "ems": null
    },
    {
        "latitude": 51.721619,
        "longitude": 19.396734,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 69,
        "squawk": "7000",
        "timestamp": 1666016286,
        "ems": null
    },
    {
        "latitude": 51.722351,
        "longitude": 19.399776,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 70,
        "squawk": "7000",
        "timestamp": 1666016293,
        "ems": null
    },
    {
        "latitude": 51.722992,
        "longitude": 19.402672,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 69,
        "squawk": "7000",
        "timestamp": 1666016298,
        "ems": null
    },
    {
        "latitude": 51.723999,
        "longitude": 19.406755,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 67,
        "squawk": "7000",
        "timestamp": 1666016306,
        "ems": null
    },
    {
        "latitude": 51.724564,
        "longitude": 19.409027,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 67,
        "squawk": "7000",
        "timestamp": 1666016312,
        "ems": null
    },
    {
        "latitude": 51.725647,
        "longitude": 19.412916,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 133.3,
            "kts": 72,
            "mph": 82.9
        },
        "verticalSpeed": {
            "fpm": 896,
            "ms": 4.6
        },
        "heading": 65,
        "squawk": "7000",
        "timestamp": 1666016319,
        "ems": null
    },
    {
        "latitude": 51.726059,
        "longitude": 19.414326,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 63,
        "squawk": "7000",
        "timestamp": 1666016322,
        "ems": null
    },
    {
        "latitude": 51.726471,
        "longitude": 19.415512,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 62,
        "squawk": "7000",
        "timestamp": 1666016324,
        "ems": null
    },
    {
        "latitude": 51.727077,
        "longitude": 19.416885,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 50,
        "squawk": "7000",
        "timestamp": 1666016327,
        "ems": null
    },
    {
        "latitude": 51.728027,
        "longitude": 19.418112,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 36,
        "squawk": "7000",
        "timestamp": 1666016330,
        "ems": null
    },
    {
        "latitude": 51.728943,
        "longitude": 19.418854,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 25,
        "squawk": "7000",
        "timestamp": 1666016333,
        "ems": null
    },
    {
        "latitude": 51.730103,
        "longitude": 19.419403,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 12,
        "squawk": "7000",
        "timestamp": 1666016336,
        "ems": null
    },
    {
        "latitude": 51.73122,
        "longitude": 19.419479,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 359,
        "squawk": "7000",
        "timestamp": 1666016339,
        "ems": null
    },
    {
        "latitude": 51.732525,
        "longitude": 19.419174,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 348,
        "squawk": "7000",
        "timestamp": 1666016343,
        "ems": null
    },
    {
        "latitude": 51.733612,
        "longitude": 19.418633,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 339,
        "squawk": "7000",
        "timestamp": 1666016346,
        "ems": null
    },
    {
        "latitude": 51.734619,
        "longitude": 19.417953,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 337,
        "squawk": "7000",
        "timestamp": 1666016348,
        "ems": null
    },
    {
        "latitude": 51.73555,
        "longitude": 19.417191,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 330,
        "squawk": "7000",
        "timestamp": 1666016351,
        "ems": null
    },
    {
        "latitude": 51.73645,
        "longitude": 19.41596,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 320,
        "squawk": "7000",
        "timestamp": 1666016354,
        "ems": null
    },
    {
        "latitude": 51.737179,
        "longitude": 19.414291,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 299,
        "squawk": "7000",
        "timestamp": 1666016358,
        "ems": null
    },
    {
        "latitude": 51.737507,
        "longitude": 19.412918,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 288,
        "squawk": "7000",
        "timestamp": 1666016360,
        "ems": null
    },
    {
        "latitude": 51.737686,
        "longitude": 19.41106,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 276,
        "squawk": "7000",
        "timestamp": 1666016364,
        "ems": null
    },
    {
        "latitude": 51.737732,
        "longitude": 19.409576,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 269,
        "squawk": "7000",
        "timestamp": 1666016366,
        "ems": null
    },
    {
        "latitude": 51.737553,
        "longitude": 19.40773,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 131.5,
            "kts": 71,
            "mph": 81.7
        },
        "verticalSpeed": {
            "fpm": 896,
            "ms": 4.6
        },
        "heading": 260,
        "squawk": "7000",
        "timestamp": 1666016370,
        "ems": null
    },
    {
        "latitude": 51.737366,
        "longitude": 19.406357,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 255,
        "squawk": "7000",
        "timestamp": 1666016372,
        "ems": null
    },
    {
        "latitude": 51.737,
        "longitude": 19.404825,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666016376,
        "ems": null
    },
    {
        "latitude": 51.736622,
        "longitude": 19.403305,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 247,
        "squawk": "7000",
        "timestamp": 1666016379,
        "ems": null
    },
    {
        "latitude": 51.736221,
        "longitude": 19.401781,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 248,
        "squawk": "7000",
        "timestamp": 1666016382,
        "ems": null
    },
    {
        "latitude": 51.735924,
        "longitude": 19.400482,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666016384,
        "ems": null
    },
    {
        "latitude": 51.735535,
        "longitude": 19.398811,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666016388,
        "ems": null
    },
    {
        "latitude": 51.735123,
        "longitude": 19.39703,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666016391,
        "ems": null
    },
    {
        "latitude": 51.73476,
        "longitude": 19.395447,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666016394,
        "ems": null
    },
    {
        "latitude": 51.734386,
        "longitude": 19.393845,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 249,
        "squawk": "7000",
        "timestamp": 1666016397,
        "ems": null
    },
    {
        "latitude": 51.734013,
        "longitude": 19.392242,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666016399,
        "ems": null
    },
    {
        "latitude": 51.733688,
        "longitude": 19.39064,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 250,
        "squawk": "7000",
        "timestamp": 1666016403,
        "ems": null
    },
    {
        "latitude": 51.732971,
        "longitude": 19.387232,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016409,
        "ems": null
    },
    {
        "latitude": 51.732246,
        "longitude": 19.383621,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 254,
        "squawk": "7000",
        "timestamp": 1666016415,
        "ems": null
    },
    {
        "latitude": 51.732105,
        "longitude": 19.382706,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 255,
        "squawk": "7000",
        "timestamp": 1666016416,
        "ems": null
    },
    {
        "latitude": 51.731964,
        "longitude": 19.381866,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 256,
        "squawk": "7000",
        "timestamp": 1666016418,
        "ems": null
    },
    {
        "latitude": 51.731644,
        "longitude": 19.378992,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 259,
        "squawk": "7000",
        "timestamp": 1666016423,
        "ems": null
    },
    {
        "latitude": 51.731453,
        "longitude": 19.377136,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 264,
        "squawk": "7000",
        "timestamp": 1666016425,
        "ems": null
    },
    {
        "latitude": 51.731499,
        "longitude": 19.375153,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 275,
        "squawk": "7000",
        "timestamp": 1666016429,
        "ems": null
    },
    {
        "latitude": 51.73164,
        "longitude": 19.374237,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 280,
        "squawk": "7000",
        "timestamp": 1666016430,
        "ems": null
    },
    {
        "latitude": 51.731873,
        "longitude": 19.373053,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 168.5,
            "kts": 91,
            "mph": 104.7
        },
        "verticalSpeed": {
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 289,
        "squawk": "7000",
        "timestamp": 1666016432,
        "ems": null
    },
    {
        "latitude": 51.732147,
        "longitude": 19.372162,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 295,
        "squawk": "7000",
        "timestamp": 1666016433,
        "ems": null
    },
    {
        "latitude": 51.732697,
        "longitude": 19.370827,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 304,
        "squawk": "7000",
        "timestamp": 1666016436,
        "ems": null
    },
    {
        "latitude": 51.735764,
        "longitude": 19.367783,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 343,
        "squawk": "7000",
        "timestamp": 1666016443,
        "ems": null
    },
    {
        "latitude": 51.737228,
        "longitude": 19.367487,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 356,
        "squawk": "7000",
        "timestamp": 1666016447,
        "ems": null
    },
    {
        "latitude": 51.738529,
        "longitude": 19.367676,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 7,
        "squawk": "7000",
        "timestamp": 1666016449,
        "ems": null
    },
    {
        "latitude": 51.73988,
        "longitude": 19.36821,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 17,
        "squawk": "7000",
        "timestamp": 1666016452,
        "ems": null
    },
    {
        "latitude": 51.741184,
        "longitude": 19.369431,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 32,
        "squawk": "7000",
        "timestamp": 1666016456,
        "ems": null
    },
    {
        "latitude": 51.742069,
        "longitude": 19.370575,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 42,
        "squawk": "7000",
        "timestamp": 1666016458,
        "ems": null
    },
    {
        "latitude": 51.742813,
        "longitude": 19.372162,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 54,
        "squawk": "7000",
        "timestamp": 1666016461,
        "ems": null
    },
    {
        "latitude": 51.743465,
        "longitude": 19.374161,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666016465,
        "ems": null
    },
    {
        "latitude": 51.743744,
        "longitude": 19.375992,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 78,
        "squawk": "7000",
        "timestamp": 1666016468,
        "ems": null
    },
    {
        "latitude": 51.74379,
        "longitude": 19.377823,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 89,
        "squawk": "7000",
        "timestamp": 1666016471,
        "ems": null
    },
    {
        "latitude": 51.743649,
        "longitude": 19.379501,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 100,
        "squawk": "7000",
        "timestamp": 1666016474,
        "ems": null
    },
    {
        "latitude": 51.743279,
        "longitude": 19.381256,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 114,
        "squawk": "7000",
        "timestamp": 1666016477,
        "ems": null
    },
    {
        "latitude": 51.742722,
        "longitude": 19.382629,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 127,
        "squawk": "7000",
        "timestamp": 1666016480,
        "ems": null
    },
    {
        "latitude": 51.741882,
        "longitude": 19.383926,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 142,
        "squawk": "7000",
        "timestamp": 1666016483,
        "ems": null
    },
    {
        "latitude": 51.740997,
        "longitude": 19.384766,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 154,
        "squawk": "7000",
        "timestamp": 1666016486,
        "ems": null
    },
    {
        "latitude": 51.740021,
        "longitude": 19.385153,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 170,
        "squawk": "7000",
        "timestamp": 1666016489,
        "ems": null
    },
    {
        "latitude": 51.739059,
        "longitude": 19.385078,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 183,
        "squawk": "7000",
        "timestamp": 1666016492,
        "ems": null
    },
    {
        "latitude": 51.738144,
        "longitude": 19.384708,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 199,
        "squawk": "7000",
        "timestamp": 1666016495,
        "ems": null
    },
    {
        "latitude": 51.737549,
        "longitude": 19.384188,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 208,
        "squawk": "7000",
        "timestamp": 1666016497,
        "ems": null
    },
    {
        "latitude": 51.736633,
        "longitude": 19.382778,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 228,
        "squawk": "7000",
        "timestamp": 1666016501,
        "ems": null
    },
    {
        "latitude": 51.736156,
        "longitude": 19.381485,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 243,
        "squawk": "7000",
        "timestamp": 1666016504,
        "ems": null
    },
    {
        "latitude": 51.735855,
        "longitude": 19.379808,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 259,
        "squawk": "7000",
        "timestamp": 1666016507,
        "ems": null
    },
    {
        "latitude": 51.735874,
        "longitude": 19.377899,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666016510,
        "ems": null
    },
    {
        "latitude": 51.736294,
        "longitude": 19.375916,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 295,
        "squawk": "7000",
        "timestamp": 1666016513,
        "ems": null
    },
    {
        "latitude": 51.736954,
        "longitude": 19.374315,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 307,
        "squawk": "7000",
        "timestamp": 1666016516,
        "ems": null
    },
    {
        "latitude": 51.737915,
        "longitude": 19.372906,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 321,
        "squawk": "7000",
        "timestamp": 1666016519,
        "ems": null
    },
    {
        "latitude": 51.739059,
        "longitude": 19.371866,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 333,
        "squawk": "7000",
        "timestamp": 1666016522,
        "ems": null
    },
    {
        "latitude": 51.740341,
        "longitude": 19.371271,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 347,
        "squawk": "7000",
        "timestamp": 1666016525,
        "ems": null
    },
    {
        "latitude": 51.743092,
        "longitude": 19.371414,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 11,
        "squawk": "7000",
        "timestamp": 1666016531,
        "ems": null
    },
    {
        "latitude": 51.744396,
        "longitude": 19.372253,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 26,
        "squawk": "7000",
        "timestamp": 1666016534,
        "ems": null
    },
    {
        "latitude": 51.745514,
        "longitude": 19.37355,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 39,
        "squawk": "7000",
        "timestamp": 1666016537,
        "ems": null
    },
    {
        "latitude": 51.746395,
        "longitude": 19.375153,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 53,
        "squawk": "7000",
        "timestamp": 1666016540,
        "ems": null
    },
    {
        "latitude": 51.746979,
        "longitude": 19.376913,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 67,
        "squawk": "7000",
        "timestamp": 1666016543,
        "ems": null
    },
    {
        "latitude": 51.747208,
        "longitude": 19.379066,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 86,
        "squawk": "7000",
        "timestamp": 1666016547,
        "ems": null
    },
    {
        "latitude": 51.74707,
        "longitude": 19.380699,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 99,
        "squawk": "7000",
        "timestamp": 1666016549,
        "ems": null
    },
    {
        "latitude": 51.746628,
        "longitude": 19.382401,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 117,
        "squawk": "7000",
        "timestamp": 1666016552,
        "ems": null
    },
    {
        "latitude": 51.745884,
        "longitude": 19.383621,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 141,
        "squawk": "7000",
        "timestamp": 1666016555,
        "ems": null
    },
    {
        "latitude": 51.744965,
        "longitude": 19.384336,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 159,
        "squawk": "7000",
        "timestamp": 1666016558,
        "ems": null
    },
    {
        "latitude": 51.743931,
        "longitude": 19.38446,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 183,
        "squawk": "7000",
        "timestamp": 1666016562,
        "ems": null
    },
    {
        "latitude": 51.743137,
        "longitude": 19.384155,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 199,
        "squawk": "7000",
        "timestamp": 1666016564,
        "ems": null
    },
    {
        "latitude": 51.742302,
        "longitude": 19.383087,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 223,
        "squawk": "7000",
        "timestamp": 1666016568,
        "ems": null
    },
    {
        "latitude": 51.74176,
        "longitude": 19.381813,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 238,
        "squawk": "7000",
        "timestamp": 1666016571,
        "ems": null
    },
    {
        "latitude": 51.741367,
        "longitude": 19.380188,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666016574,
        "ems": null
    },
    {
        "latitude": 51.741257,
        "longitude": 19.378473,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 264,
        "squawk": "7000",
        "timestamp": 1666016577,
        "ems": null
    },
    {
        "latitude": 51.741322,
        "longitude": 19.376984,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 277,
        "squawk": "7000",
        "timestamp": 1666016579,
        "ems": null
    },
    {
        "latitude": 51.741669,
        "longitude": 19.375132,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 288,
        "squawk": "7000",
        "timestamp": 1666016582,
        "ems": null
    },
    {
        "latitude": 51.742161,
        "longitude": 19.373322,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 298,
        "squawk": "7000",
        "timestamp": 1666016585,
        "ems": null
    },
    {
        "latitude": 51.743,
        "longitude": 19.371567,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 309,
        "squawk": "7000",
        "timestamp": 1666016589,
        "ems": null
    },
    {
        "latitude": 51.743866,
        "longitude": 19.370306,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 320,
        "squawk": "7000",
        "timestamp": 1666016592,
        "ems": null
    },
    {
        "latitude": 51.744965,
        "longitude": 19.369194,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 331,
        "squawk": "7000",
        "timestamp": 1666016595,
        "ems": null
    },
    {
        "latitude": 51.746109,
        "longitude": 19.36845,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 340,
        "squawk": "7000",
        "timestamp": 1666016598,
        "ems": null
    },
    {
        "latitude": 51.749191,
        "longitude": 19.368057,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 8,
        "squawk": "7000",
        "timestamp": 1666016605,
        "ems": null
    },
    {
        "latitude": 51.750687,
        "longitude": 19.368748,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 19,
        "squawk": "7000",
        "timestamp": 1666016608,
        "ems": null
    },
    {
        "latitude": 51.751888,
        "longitude": 19.369812,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 32,
        "squawk": "7000",
        "timestamp": 1666016610,
        "ems": null
    },
    {
        "latitude": 51.752914,
        "longitude": 19.371262,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 44,
        "squawk": "7000",
        "timestamp": 1666016614,
        "ems": null
    },
    {
        "latitude": 51.753662,
        "longitude": 19.373053,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 58,
        "squawk": "7000",
        "timestamp": 1666016617,
        "ems": null
    },
    {
        "latitude": 51.754169,
        "longitude": 19.375076,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666016620,
        "ems": null
    },
    {
        "latitude": 51.754349,
        "longitude": 19.377062,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 86,
        "squawk": "7000",
        "timestamp": 1666016623,
        "ems": null
    },
    {
        "latitude": 51.754219,
        "longitude": 19.378891,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 98,
        "squawk": "7000",
        "timestamp": 1666016625,
        "ems": null
    },
    {
        "latitude": 51.753845,
        "longitude": 19.380699,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 112,
        "squawk": "7000",
        "timestamp": 1666016629,
        "ems": null
    },
    {
        "latitude": 51.753239,
        "longitude": 19.382172,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 128,
        "squawk": "7000",
        "timestamp": 1666016631,
        "ems": null
    },
    {
        "latitude": 51.752403,
        "longitude": 19.38324,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 148,
        "squawk": "7000",
        "timestamp": 1666016635,
        "ems": null
    },
    {
        "latitude": 51.751328,
        "longitude": 19.383966,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 163,
        "squawk": "7000",
        "timestamp": 1666016638,
        "ems": null
    },
    {
        "latitude": 51.750366,
        "longitude": 19.384113,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 171,
        "squawk": "7000",
        "timestamp": 1666016641,
        "ems": null
    },
    {
        "latitude": 51.749359,
        "longitude": 19.383818,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 190,
        "squawk": "7000",
        "timestamp": 1666016644,
        "ems": null
    },
    {
        "latitude": 51.748398,
        "longitude": 19.383087,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 211,
        "squawk": "7000",
        "timestamp": 1666016647,
        "ems": null
    },
    {
        "latitude": 51.747665,
        "longitude": 19.381962,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 226,
        "squawk": "7000",
        "timestamp": 1666016650,
        "ems": null
    },
    {
        "latitude": 51.747047,
        "longitude": 19.380417,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 242,
        "squawk": "7000",
        "timestamp": 1666016653,
        "ems": null
    },
    {
        "latitude": 51.74675,
        "longitude": 19.379066,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666016655,
        "ems": null
    },
    {
        "latitude": 51.746567,
        "longitude": 19.376913,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 266,
        "squawk": "7000",
        "timestamp": 1666016659,
        "ems": null
    },
    {
        "latitude": 51.746658,
        "longitude": 19.37528,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 276,
        "squawk": "7000",
        "timestamp": 1666016662,
        "ems": null
    },
    {
        "latitude": 51.747047,
        "longitude": 19.373169,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 290,
        "squawk": "7000",
        "timestamp": 1666016665,
        "ems": null
    },
    {
        "latitude": 51.747665,
        "longitude": 19.371346,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 302,
        "squawk": "7000",
        "timestamp": 1666016668,
        "ems": null
    },
    {
        "latitude": 51.748444,
        "longitude": 19.369862,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 313,
        "squawk": "7000",
        "timestamp": 1666016671,
        "ems": null
    },
    {
        "latitude": 51.749424,
        "longitude": 19.368591,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 323,
        "squawk": "7000",
        "timestamp": 1666016674,
        "ems": null
    },
    {
        "latitude": 51.750679,
        "longitude": 19.367523,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 335,
        "squawk": "7000",
        "timestamp": 1666016677,
        "ems": null
    },
    {
        "latitude": 51.751877,
        "longitude": 19.366966,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 346,
        "squawk": "7000",
        "timestamp": 1666016680,
        "ems": null
    },
    {
        "latitude": 51.753426,
        "longitude": 19.366837,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 358,
        "squawk": "7000",
        "timestamp": 1666016683,
        "ems": null
    },
    {
        "latitude": 51.754543,
        "longitude": 19.367065,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 10,
        "squawk": "7000",
        "timestamp": 1666016686,
        "ems": null
    },
    {
        "latitude": 51.755848,
        "longitude": 19.367828,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 22,
        "squawk": "7000",
        "timestamp": 1666016689,
        "ems": null
    },
    {
        "latitude": 51.757004,
        "longitude": 19.369045,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 36,
        "squawk": "7000",
        "timestamp": 1666016692,
        "ems": null
    },
    {
        "latitude": 51.757477,
        "longitude": 19.369736,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 29,
        "squawk": "7000",
        "timestamp": 1666016693,
        "ems": null
    },
    {
        "latitude": 51.758549,
        "longitude": 19.372253,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666016698,
        "ems": null
    },
    {
        "latitude": 51.758919,
        "longitude": 19.374084,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 74,
        "squawk": "7000",
        "timestamp": 1666016701,
        "ems": null
    },
    {
        "latitude": 51.75906,
        "longitude": 19.375839,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 85,
        "squawk": "7000",
        "timestamp": 1666016704,
        "ems": null
    },
    {
        "latitude": 51.758965,
        "longitude": 19.377747,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 98,
        "squawk": "7000",
        "timestamp": 1666016707,
        "ems": null
    },
    {
        "latitude": 51.758606,
        "longitude": 19.379511,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 112,
        "squawk": "7000",
        "timestamp": 1666016710,
        "ems": null
    },
    {
        "latitude": 51.757942,
        "longitude": 19.380875,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 130,
        "squawk": "7000",
        "timestamp": 1666016713,
        "ems": null
    },
    {
        "latitude": 51.757198,
        "longitude": 19.38179,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 146,
        "squawk": "7000",
        "timestamp": 1666016716,
        "ems": null
    },
    {
        "latitude": 51.756268,
        "longitude": 19.382401,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 163,
        "squawk": "7000",
        "timestamp": 1666016719,
        "ems": null
    },
    {
        "latitude": 51.75531,
        "longitude": 19.382481,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 179,
        "squawk": "7000",
        "timestamp": 1666016722,
        "ems": null
    },
    {
        "latitude": 51.75444,
        "longitude": 19.382257,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 194,
        "squawk": "7000",
        "timestamp": 1666016725,
        "ems": null
    },
    {
        "latitude": 51.753525,
        "longitude": 19.38159,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 209,
        "squawk": "7000",
        "timestamp": 1666016728,
        "ems": null
    },
    {
        "latitude": 51.752682,
        "longitude": 19.380569,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 223,
        "squawk": "7000",
        "timestamp": 1666016731,
        "ems": null
    },
    {
        "latitude": 51.752106,
        "longitude": 19.379215,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666016734,
        "ems": null
    },
    {
        "latitude": 51.751511,
        "longitude": 19.377953,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 231,
        "squawk": "7000",
        "timestamp": 1666016737,
        "ems": null
    },
    {
        "latitude": 51.750778,
        "longitude": 19.377062,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 209,
        "squawk": "7000",
        "timestamp": 1666016740,
        "ems": null
    },
    {
        "latitude": 51.749889,
        "longitude": 19.376678,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 189,
        "squawk": "7000",
        "timestamp": 1666016743,
        "ems": null
    },
    {
        "latitude": 51.748909,
        "longitude": 19.376602,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 177,
        "squawk": "7000",
        "timestamp": 1666016746,
        "ems": null
    },
    {
        "latitude": 51.747002,
        "longitude": 19.377594,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 154,
        "squawk": "7000",
        "timestamp": 1666016752,
        "ems": null
    },
    {
        "latitude": 51.746155,
        "longitude": 19.378473,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 145,
        "squawk": "7000",
        "timestamp": 1666016755,
        "ems": null
    },
    {
        "latitude": 51.745327,
        "longitude": 19.379501,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 140,
        "squawk": "7000",
        "timestamp": 1666016758,
        "ems": null
    },
    {
        "latitude": 51.744507,
        "longitude": 19.38055,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 141,
        "squawk": "7000",
        "timestamp": 1666016761,
        "ems": null
    },
    {
        "latitude": 51.743546,
        "longitude": 19.38159,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 147,
        "squawk": "7000",
        "timestamp": 1666016764,
        "ems": null
    },
    {
        "latitude": 51.74263,
        "longitude": 19.382406,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 151,
        "squawk": "7000",
        "timestamp": 1666016767,
        "ems": null
    },
    {
        "latitude": 51.74165,
        "longitude": 19.383163,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 154,
        "squawk": "7000",
        "timestamp": 1666016770,
        "ems": null
    },
    {
        "latitude": 51.740765,
        "longitude": 19.383698,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 159,
        "squawk": "7000",
        "timestamp": 1666016773,
        "ems": null
    },
    {
        "latitude": 51.739834,
        "longitude": 19.384155,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 166,
        "squawk": "7000",
        "timestamp": 1666016776,
        "ems": null
    },
    {
        "latitude": 51.738808,
        "longitude": 19.384232,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 179,
        "squawk": "7000",
        "timestamp": 1666016779,
        "ems": null
    },
    {
        "latitude": 51.737823,
        "longitude": 19.383966,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 192,
        "squawk": "7000",
        "timestamp": 1666016782,
        "ems": null
    },
    {
        "latitude": 51.736908,
        "longitude": 19.383223,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 207,
        "squawk": "7000",
        "timestamp": 1666016785,
        "ems": null
    },
    {
        "latitude": 51.736156,
        "longitude": 19.382248,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 222,
        "squawk": "7000",
        "timestamp": 1666016788,
        "ems": null
    },
    {
        "latitude": 51.735535,
        "longitude": 19.380922,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "squawk": "7000",
        "timestamp": 1666016791,
        "ems": null
    },
    {
        "latitude": 51.735031,
        "longitude": 19.37929,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 245,
        "squawk": "7000",
        "timestamp": 1666016794,
        "ems": null
    },
    {
        "latitude": 51.73476,
        "longitude": 19.377899,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 253,
        "squawk": "7000",
        "timestamp": 1666016797,
        "ems": null
    },
    {
        "latitude": 51.734528,
        "longitude": 19.376297,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "timestamp": 1666016800,
        "ems": null
    },
    {
        "latitude": 51.734295,
        "longitude": 19.374771,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 258,
        "squawk": "7000",
        "timestamp": 1666016803,
        "ems": null
    },
    {
        "latitude": 51.734108,
        "longitude": 19.373169,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 257,
        "squawk": "7000",
        "timestamp": 1666016806,
        "ems": null
    },
    {
        "latitude": 51.733875,
        "longitude": 19.371796,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 254,
        "squawk": "7000",
        "timestamp": 1666016809,
        "ems": null
    },
    {
        "latitude": 51.733566,
        "longitude": 19.370234,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666016813,
        "ems": null
    },
    {
        "latitude": 51.733269,
        "longitude": 19.36882,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016815,
        "ems": null
    },
    {
        "latitude": 51.732971,
        "longitude": 19.367264,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016818,
        "ems": null
    },
    {
        "latitude": 51.732697,
        "longitude": 19.365927,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 252,
        "squawk": "7000",
        "timestamp": 1666016821,
        "ems": null
    },
    {
        "latitude": 51.732147,
        "longitude": 19.36318,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016827,
        "ems": null
    },
    {
        "latitude": 51.731873,
        "longitude": 19.361877,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016830,
        "ems": null
    },
    {
        "latitude": 51.731594,
        "longitude": 19.360504,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 251,
        "squawk": "7000",
        "timestamp": 1666016833,
        "ems": null
    },
    {
        "latitude": 51.731174,
        "longitude": 19.359131,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 241,
        "squawk": "7000",
        "timestamp": 1666016836,
        "ems": null
    },
    {
        "latitude": 51.730663,
        "longitude": 19.358139,
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
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 216,
        "squawk": "7000",
        "timestamp": 1666016840,
        "ems": null
    },
    {
        "latitude": 51.730011,
        "longitude": 19.357681,
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
            "fpm": -640,
            "ms": -3.3
        },
        "heading": 199,
        "squawk": "7000",
        "timestamp": 1666016842,
        "ems": null
    },
    {
        "latitude": 51.729172,
        "longitude": 19.357758,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 172,
        "squawk": "7000",
        "timestamp": 1666016846,
        "ems": null
    },
    {
        "latitude": 51.728519,
        "longitude": 19.358139,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 156,
        "squawk": "7000",
        "timestamp": 1666016849,
        "ems": null
    },
    {
        "latitude": 51.727917,
        "longitude": 19.358673,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 148,
        "squawk": "7000",
        "timestamp": 1666016852,
        "ems": null
    },
    {
        "latitude": 51.727249,
        "longitude": 19.359247,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 153,
        "squawk": "7000",
        "timestamp": 1666016855,
        "ems": null
    },
    {
        "latitude": 51.726612,
        "longitude": 19.359741,
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
            "fpm": -448,
            "ms": -2.3
        },
        "heading": 155,
        "squawk": "7000",
        "timestamp": 1666016858,
        "ems": null
    },
    {
        "latitude": 51.726013,
        "longitude": 19.36021,
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
            "fpm": -640,
            "ms": -3.3
        },
        "heading": 151,
        "squawk": "7000",
        "timestamp": 1666016861,
        "ems": null
    },
    {
        "latitude": 51.72551,
        "longitude": 19.360731,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 147,
        "squawk": "7000",
        "timestamp": 1666016863,
        "ems": null
    },
    {
        "latitude": 51.724796,
        "longitude": 19.361496,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 147,
        "squawk": "7000",
        "timestamp": 1666016866,
        "ems": null
    },
    {
        "latitude": 51.724239,
        "longitude": 19.362183,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 144,
        "squawk": "7000",
        "timestamp": 1666016870,
        "ems": null
    },
    {
        "latitude": 51.723587,
        "longitude": 19.362885,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 98.2,
            "kts": 53,
            "mph": 61
        },
        "verticalSpeed": {
            "fpm": -640,
            "ms": -3.3
        },
        "heading": 144,
        "squawk": "7000",
        "timestamp": 1666016873,
        "ems": null
    },
    {
        "latitude": 51.723122,
        "longitude": 19.363403,
        "altitude": {
            "feet": 0,
            "meters": 0
        },
        "speed": {
            "kmh": 96.3,
            "kts": 52,
            "mph": 59.8
        },
        "verticalSpeed": {
            "fpm": -704,
            "ms": -3.6
        },
        "heading": 145,
        "squawk": "7000",
        "timestamp": 1666016875,
        "ems": null
    },
    {
        "latitude": 51.722397,
        "longitude": 19.36422,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 145,
        "squawk": "7000",
        "timestamp": 1666016878,
        "ems": null
    },
    {
        "latitude": 51.721771,
        "longitude": 19.365005,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 143,
        "squawk": "7000",
        "timestamp": 1666016882,
        "ems": null
    },
    {
        "latitude": 51.721344,
        "longitude": 19.365482,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 148,
        "squawk": "7000",
        "timestamp": 1666016884,
        "ems": null
    },
    {
        "latitude": 51.720108,
        "longitude": 19.366596,
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
            "fpm": -576,
            "ms": -2.9
        },
        "heading": 151,
        "squawk": "7000",
        "timestamp": 1666016889,
        "ems": null
    },
    {
        "latitude": 51.718418,
        "longitude": 19.367981,
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
            "fpm": -704,
            "ms": -3.6
        },
        "heading": 153,
        "squawk": "7000",
        "timestamp": 1666016897,
        "ems": null
    },
    {
        "latitude": 51.718048,
        "longitude": 19.368362,
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
            "fpm": -704,
            "ms": -3.6
        },
        "heading": 152,
        "squawk": "7000",
        "timestamp": 1666016899,
        "ems": null
    },
    {
        "latitude": 51.716602,
        "longitude": 19.37027,
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
            "fpm": -704,
            "ms": -3.6
        },
        "heading": 126,
        "squawk": "7000",
        "timestamp": 1666016906,
        "ems": null
    },
    {
        "latitude": 51.716511,
        "longitude": 19.370651,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 114,
        "squawk": "7000",
        "timestamp": 1666016908,
        "ems": null
    },
    {
        "latitude": 51.716446,
        "longitude": 19.373053,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 86,
        "squawk": "7000",
        "timestamp": 1666016912,
        "ems": null
    },
    {
        "latitude": 51.716675,
        "longitude": 19.373943,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 86,
        "squawk": "7000",
        "timestamp": 1666016914,
        "ems": null
    },
    {
        "latitude": 51.717117,
        "longitude": 19.375839,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 69,
        "squawk": "7000",
        "timestamp": 1666016918,
        "ems": null
    },
    {
        "latitude": 51.717361,
        "longitude": 19.377136,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 73,
        "squawk": "7000",
        "timestamp": 1666016921,
        "ems": null
    },
    {
        "latitude": 51.717628,
        "longitude": 19.378586,
        "altitude": {
            "feet": 0,
            "meters": 0
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
        "heading": 72,
        "squawk": "7000",
        "timestamp": 1666016924,
        "ems": null
    }
]
};
