import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220923EPLLEPLL",
    callsign: "BNI8E",
    name: "Cross Country to Pietrokow",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 8, 23, 8, 33).getTime(),
    arrival: new Date(2022, 8, 23, 10, 25).getTime(),
    singleEnginePistonTime: 112,
    picTime: 0,
    dualTime: 112,
    landings: {
      day: 3,
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
      registration: "SP-DME",
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
      "latitude": 51.720886,
      "longitude": 19.393616,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 250,
      "squawk": "0",
      "timestamp": 1663922488,
      "ems": null
    },
    {
      "latitude": 51.720474,
      "longitude": 19.391834,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663922492,
      "ems": null
    },
    {
      "latitude": 51.719444,
      "longitude": 19.387054,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1663922503,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.382629,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663922511,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.379578,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663922517,
      "ems": null
    },
    {
      "latitude": 51.717255,
      "longitude": 19.376755,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1663922523,
      "ems": null
    },
    {
      "latitude": 51.716648,
      "longitude": 19.373779,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663922529,
      "ems": null
    },
    {
      "latitude": 51.716045,
      "longitude": 19.371033,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663922535,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.368378,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1663922541,
      "ems": null
    },
    {
      "latitude": 51.715256,
      "longitude": 19.366669,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1663922544,
      "ems": null
    },
    {
      "latitude": 51.715252,
      "longitude": 19.364929,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1663922547,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.363552,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1663922550,
      "ems": null
    },
    {
      "latitude": 51.71595,
      "longitude": 19.362183,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1663922553,
      "ems": null
    },
    {
      "latitude": 51.716766,
      "longitude": 19.361029,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1663922556,
      "ems": null
    },
    {
      "latitude": 51.717682,
      "longitude": 19.36021,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1663922559,
      "ems": null
    },
    {
      "latitude": 51.718643,
      "longitude": 19.359617,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663922562,
      "ems": null
    },
    {
      "latitude": 51.719604,
      "longitude": 19.359098,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663922565,
      "ems": null
    },
    {
      "latitude": 51.720375,
      "longitude": 19.358673,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1663922568,
      "ems": null
    },
    {
      "latitude": 51.721539,
      "longitude": 19.357986,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663922571,
      "ems": null
    },
    {
      "latitude": 51.722515,
      "longitude": 19.357376,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663922574,
      "ems": null
    },
    {
      "latitude": 51.723587,
      "longitude": 19.356766,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663922577,
      "ems": null
    },
    {
      "latitude": 51.724731,
      "longitude": 19.356054,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1663922581,
      "ems": null
    },
    {
      "latitude": 51.725876,
      "longitude": 19.355461,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1663922584,
      "ems": null
    },
    {
      "latitude": 51.726883,
      "longitude": 19.355015,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1663922586,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.354401,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663922589,
      "ems": null
    },
    {
      "latitude": 51.729404,
      "longitude": 19.353943,
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1663922592,
      "ems": null
    },
    {
      "latitude": 51.730663,
      "longitude": 19.353561,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1663922595,
      "ems": null
    },
    {
      "latitude": 51.731781,
      "longitude": 19.353256,
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1663922598,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 19.353027,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1663922602,
      "ems": null
    },
    {
      "latitude": 51.734482,
      "longitude": 19.352936,
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1663922605,
      "ems": null
    },
    {
      "latitude": 51.735718,
      "longitude": 19.352715,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1663922608,
      "ems": null
    },
    {
      "latitude": 51.736816,
      "longitude": 19.352417,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1663922610,
      "ems": null
    },
    {
      "latitude": 51.738155,
      "longitude": 19.352036,
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1663922614,
      "ems": null
    },
    {
      "latitude": 51.739227,
      "longitude": 19.351807,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1663922616,
      "ems": null
    },
    {
      "latitude": 51.740578,
      "longitude": 19.351654,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1663922619,
      "ems": null
    },
    {
      "latitude": 51.741741,
      "longitude": 19.351883,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1663922622,
      "ems": null
    },
    {
      "latitude": 51.743046,
      "longitude": 19.352875,
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1663922626,
      "ems": null
    },
    {
      "latitude": 51.743958,
      "longitude": 19.35368,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1663922628,
      "ems": null
    },
    {
      "latitude": 51.745232,
      "longitude": 19.35463,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1663922632,
      "ems": null
    },
    {
      "latitude": 51.746292,
      "longitude": 19.355089,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1663922634,
      "ems": null
    },
    {
      "latitude": 51.747421,
      "longitude": 19.355164,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1663922637,
      "ems": null
    },
    {
      "latitude": 51.749889,
      "longitude": 19.354477,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1663922643,
      "ems": null
    },
    {
      "latitude": 51.751286,
      "longitude": 19.353867,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1663922647,
      "ems": null
    },
    {
      "latitude": 51.752335,
      "longitude": 19.353233,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1663922649,
      "ems": null
    },
    {
      "latitude": 51.753613,
      "longitude": 19.352341,
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1663922652,
      "ems": null
    },
    {
      "latitude": 51.754822,
      "longitude": 19.351273,
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1663922656,
      "ems": null
    },
    {
      "latitude": 51.755859,
      "longitude": 19.350412,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663922658,
      "ems": null
    },
    {
      "latitude": 51.757198,
      "longitude": 19.349136,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663922662,
      "ems": null
    },
    {
      "latitude": 51.75824,
      "longitude": 19.348112,
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1663922665,
      "ems": null
    },
    {
      "latitude": 51.759293,
      "longitude": 19.346998,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1663922668,
      "ems": null
    },
    {
      "latitude": 51.76041,
      "longitude": 19.345779,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1663922671,
      "ems": null
    },
    {
      "latitude": 51.761478,
      "longitude": 19.344559,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1663922674,
      "ems": null
    },
    {
      "latitude": 51.762596,
      "longitude": 19.343262,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1663922677,
      "ems": null
    },
    {
      "latitude": 51.763577,
      "longitude": 19.342194,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1663922680,
      "ems": null
    },
    {
      "latitude": 51.764553,
      "longitude": 19.340973,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1663922683,
      "ems": null
    },
    {
      "latitude": 51.765621,
      "longitude": 19.3396,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1663922686,
      "ems": null
    },
    {
      "latitude": 51.766434,
      "longitude": 19.33861,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1663922688,
      "ems": null
    },
    {
      "latitude": 51.767532,
      "longitude": 19.337347,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1663922691,
      "ems": null
    },
    {
      "latitude": 51.769592,
      "longitude": 19.334972,
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1663922698,
      "ems": null
    },
    {
      "latitude": 51.77179,
      "longitude": 19.332819,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1663922704,
      "ems": null
    },
    {
      "latitude": 51.773758,
      "longitude": 19.330891,
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1663922710,
      "ems": null
    },
    {
      "latitude": 51.774933,
      "longitude": 19.329758,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1663922713,
      "ems": null
    },
    {
      "latitude": 51.776001,
      "longitude": 19.328812,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663922716,
      "ems": null
    },
    {
      "latitude": 51.777054,
      "longitude": 19.327772,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663922719,
      "ems": null
    },
    {
      "latitude": 51.778152,
      "longitude": 19.326807,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1663922722,
      "ems": null
    },
    {
      "latitude": 51.780396,
      "longitude": 19.324579,
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1663922728,
      "ems": null
    },
    {
      "latitude": 51.78241,
      "longitude": 19.32213,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1663922734,
      "ems": null
    },
    {
      "latitude": 51.78336,
      "longitude": 19.320908,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1663922737,
      "ems": null
    },
    {
      "latitude": 51.784245,
      "longitude": 19.319687,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1663922740,
      "ems": null
    },
    {
      "latitude": 51.785221,
      "longitude": 19.31839,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1663922743,
      "ems": null
    },
    {
      "latitude": 51.786118,
      "longitude": 19.317158,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1663922746,
      "ems": null
    },
    {
      "latitude": 51.787083,
      "longitude": 19.315796,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1663922749,
      "ems": null
    },
    {
      "latitude": 51.788013,
      "longitude": 19.314423,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1663922752,
      "ems": null
    },
    {
      "latitude": 51.789047,
      "longitude": 19.312925,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1663922755,
      "ems": null
    },
    {
      "latitude": 51.790009,
      "longitude": 19.31159,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1663922758,
      "ems": null
    },
    {
      "latitude": 51.790901,
      "longitude": 19.310226,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1663922761,
      "ems": null
    },
    {
      "latitude": 51.792854,
      "longitude": 19.30748,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1663922767,
      "ems": null
    },
    {
      "latitude": 51.794724,
      "longitude": 19.304686,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1663922773,
      "ems": null
    },
    {
      "latitude": 51.796535,
      "longitude": 19.30191,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1663922779,
      "ems": null
    },
    {
      "latitude": 51.798294,
      "longitude": 19.299341,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1663922785,
      "ems": null
    },
    {
      "latitude": 51.80035,
      "longitude": 19.296646,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1663922791,
      "ems": null
    },
    {
      "latitude": 51.801376,
      "longitude": 19.295502,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1663922794,
      "ems": null
    },
    {
      "latitude": 51.802307,
      "longitude": 19.294586,
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1663922797,
      "ems": null
    },
    {
      "latitude": 51.803658,
      "longitude": 19.293823,
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1663922800,
      "ems": null
    },
    {
      "latitude": 51.804977,
      "longitude": 19.293402,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1663922803,
      "ems": null
    },
    {
      "latitude": 51.806259,
      "longitude": 19.293476,
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1663922806,
      "ems": null
    },
    {
      "latitude": 51.807522,
      "longitude": 19.293747,
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1663922809,
      "ems": null
    },
    {
      "latitude": 51.808594,
      "longitude": 19.294367,
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1663922812,
      "ems": null
    },
    {
      "latitude": 51.809875,
      "longitude": 19.295332,
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1663922815,
      "ems": null
    },
    {
      "latitude": 51.810966,
      "longitude": 19.29657,
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1663922818,
      "ems": null
    },
    {
      "latitude": 51.81189,
      "longitude": 19.297932,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1663922821,
      "ems": null
    },
    {
      "latitude": 51.812759,
      "longitude": 19.299639,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1663922824,
      "ems": null
    },
    {
      "latitude": 51.813526,
      "longitude": 19.301453,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1663922827,
      "ems": null
    },
    {
      "latitude": 51.814178,
      "longitude": 19.303207,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1663922830,
      "ems": null
    },
    {
      "latitude": 51.81469,
      "longitude": 19.30481,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1663922833,
      "ems": null
    },
    {
      "latitude": 51.815342,
      "longitude": 19.306946,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1663922836,
      "ems": null
    },
    {
      "latitude": 51.815872,
      "longitude": 19.308769,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663922839,
      "ems": null
    },
    {
      "latitude": 51.81633,
      "longitude": 19.310625,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663922842,
      "ems": null
    },
    {
      "latitude": 51.816833,
      "longitude": 19.312851,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922845,
      "ems": null
    },
    {
      "latitude": 51.817295,
      "longitude": 19.314728,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922848,
      "ems": null
    },
    {
      "latitude": 51.817749,
      "longitude": 19.316711,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663922851,
      "ems": null
    },
    {
      "latitude": 51.81818,
      "longitude": 19.318848,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663922854,
      "ems": null
    },
    {
      "latitude": 51.818619,
      "longitude": 19.320721,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922857,
      "ems": null
    },
    {
      "latitude": 51.819168,
      "longitude": 19.323021,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922860,
      "ems": null
    },
    {
      "latitude": 51.819626,
      "longitude": 19.3251,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663922863,
      "ems": null
    },
    {
      "latitude": 51.820087,
      "longitude": 19.327011,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922866,
      "ems": null
    },
    {
      "latitude": 51.820999,
      "longitude": 19.331038,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922872,
      "ems": null
    },
    {
      "latitude": 51.821953,
      "longitude": 19.335022,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922878,
      "ems": null
    },
    {
      "latitude": 51.82283,
      "longitude": 19.338758,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663922884,
      "ems": null
    },
    {
      "latitude": 51.823746,
      "longitude": 19.34284,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663922890,
      "ems": null
    },
    {
      "latitude": 51.824661,
      "longitude": 19.346849,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663922896,
      "ems": null
    },
    {
      "latitude": 51.825439,
      "longitude": 19.350784,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663922902,
      "ems": null
    },
    {
      "latitude": 51.825806,
      "longitude": 19.352936,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1663922905,
      "ems": null
    },
    {
      "latitude": 51.826096,
      "longitude": 19.354782,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1663922908,
      "ems": null
    },
    {
      "latitude": 51.826492,
      "longitude": 19.356945,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1663922912,
      "ems": null
    },
    {
      "latitude": 51.826794,
      "longitude": 19.358749,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1663922914,
      "ems": null
    },
    {
      "latitude": 51.827118,
      "longitude": 19.360733,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1663922917,
      "ems": null
    },
    {
      "latitude": 51.827911,
      "longitude": 19.364962,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663922924,
      "ems": null
    },
    {
      "latitude": 51.828701,
      "longitude": 19.368744,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663922929,
      "ems": null
    },
    {
      "latitude": 51.829445,
      "longitude": 19.372635,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663922935,
      "ems": null
    },
    {
      "latitude": 51.830292,
      "longitude": 19.376543,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663922942,
      "ems": null
    },
    {
      "latitude": 51.831123,
      "longitude": 19.380569,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663922948,
      "ems": null
    },
    {
      "latitude": 51.831867,
      "longitude": 19.384155,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663922953,
      "ems": null
    },
    {
      "latitude": 51.832657,
      "longitude": 19.388428,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663922959,
      "ems": null
    },
    {
      "latitude": 51.833405,
      "longitude": 19.392206,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663922966,
      "ems": null
    },
    {
      "latitude": 51.834194,
      "longitude": 19.395752,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663922971,
      "ems": null
    },
    {
      "latitude": 51.835144,
      "longitude": 19.400148,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663922978,
      "ems": null
    },
    {
      "latitude": 51.835823,
      "longitude": 19.403458,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663922983,
      "ems": null
    },
    {
      "latitude": 51.8368,
      "longitude": 19.407959,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922990,
      "ems": null
    },
    {
      "latitude": 51.837708,
      "longitude": 19.412025,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663922996,
      "ems": null
    },
    {
      "latitude": 51.838711,
      "longitude": 19.415894,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663923002,
      "ems": null
    },
    {
      "latitude": 51.839222,
      "longitude": 19.417877,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663923005,
      "ems": null
    },
    {
      "latitude": 51.839767,
      "longitude": 19.419744,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663923008,
      "ems": null
    },
    {
      "latitude": 51.84034,
      "longitude": 19.421768,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663923011,
      "ems": null
    },
    {
      "latitude": 51.841084,
      "longitude": 19.42543,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923017,
      "ems": null
    },
    {
      "latitude": 51.841873,
      "longitude": 19.429173,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923023,
      "ems": null
    },
    {
      "latitude": 51.842667,
      "longitude": 19.432907,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923029,
      "ems": null
    },
    {
      "latitude": 51.84304,
      "longitude": 19.434738,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923032,
      "ems": null
    },
    {
      "latitude": 51.84341,
      "longitude": 19.436569,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923035,
      "ems": null
    },
    {
      "latitude": 51.843796,
      "longitude": 19.438303,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923038,
      "ems": null
    },
    {
      "latitude": 51.84425,
      "longitude": 19.44046,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663923041,
      "ems": null
    },
    {
      "latitude": 51.844986,
      "longitude": 19.444242,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663923047,
      "ems": null
    },
    {
      "latitude": 51.845787,
      "longitude": 19.448166,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663923053,
      "ems": null
    },
    {
      "latitude": 51.846771,
      "longitude": 19.451962,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663923059,
      "ems": null
    },
    {
      "latitude": 51.847229,
      "longitude": 19.453812,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663923062,
      "ems": null
    },
    {
      "latitude": 51.847733,
      "longitude": 19.455673,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663923065,
      "ems": null
    },
    {
      "latitude": 51.848251,
      "longitude": 19.457626,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663923068,
      "ems": null
    },
    {
      "latitude": 51.848766,
      "longitude": 19.459457,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1663923071,
      "ems": null
    },
    {
      "latitude": 51.849655,
      "longitude": 19.46332,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923077,
      "ems": null
    },
    {
      "latitude": 51.850487,
      "longitude": 19.467392,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923083,
      "ems": null
    },
    {
      "latitude": 51.851349,
      "longitude": 19.471411,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923089,
      "ems": null
    },
    {
      "latitude": 51.852116,
      "longitude": 19.47525,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923095,
      "ems": null
    },
    {
      "latitude": 51.852489,
      "longitude": 19.476929,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923098,
      "ems": null
    },
    {
      "latitude": 51.852955,
      "longitude": 19.479141,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923101,
      "ems": null
    },
    {
      "latitude": 51.853683,
      "longitude": 19.482769,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923107,
      "ems": null
    },
    {
      "latitude": 51.854584,
      "longitude": 19.486847,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923113,
      "ems": null
    },
    {
      "latitude": 51.855331,
      "longitude": 19.490562,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1663923118,
      "ems": null
    },
    {
      "latitude": 51.856247,
      "longitude": 19.495239,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923125,
      "ems": null
    },
    {
      "latitude": 51.857098,
      "longitude": 19.499359,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923131,
      "ems": null
    },
    {
      "latitude": 51.858032,
      "longitude": 19.503851,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923137,
      "ems": null
    },
    {
      "latitude": 51.858868,
      "longitude": 19.50798,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923143,
      "ems": null
    },
    {
      "latitude": 51.859726,
      "longitude": 19.512165,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923149,
      "ems": null
    },
    {
      "latitude": 51.860588,
      "longitude": 19.51622,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663923155,
      "ems": null
    },
    {
      "latitude": 51.861465,
      "longitude": 19.520182,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663923161,
      "ems": null
    },
    {
      "latitude": 51.862499,
      "longitude": 19.524689,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663923167,
      "ems": null
    },
    {
      "latitude": 51.863388,
      "longitude": 19.528645,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663923173,
      "ems": null
    },
    {
      "latitude": 51.864212,
      "longitude": 19.532133,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663923179,
      "ems": null
    },
    {
      "latitude": 51.865311,
      "longitude": 19.536512,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663923185,
      "ems": null
    },
    {
      "latitude": 51.866222,
      "longitude": 19.540253,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663923191,
      "ems": null
    },
    {
      "latitude": 51.867199,
      "longitude": 19.544525,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663923197,
      "ems": null
    },
    {
      "latitude": 51.867828,
      "longitude": 19.547573,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1663923202,
      "ems": null
    },
    {
      "latitude": 51.868923,
      "longitude": 19.552765,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663923209,
      "ems": null
    },
    {
      "latitude": 51.869797,
      "longitude": 19.556406,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663923215,
      "ems": null
    },
    {
      "latitude": 51.870667,
      "longitude": 19.56049,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663923221,
      "ems": null
    },
    {
      "latitude": 51.871536,
      "longitude": 19.564646,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663923227,
      "ems": null
    },
    {
      "latitude": 51.872406,
      "longitude": 19.568283,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663923233,
      "ems": null
    },
    {
      "latitude": 51.873367,
      "longitude": 19.572441,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663923239,
      "ems": null
    },
    {
      "latitude": 51.874146,
      "longitude": 19.575855,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663923244,
      "ems": null
    },
    {
      "latitude": 51.875439,
      "longitude": 19.580917,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663923251,
      "ems": null
    },
    {
      "latitude": 51.876419,
      "longitude": 19.584503,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663923257,
      "ems": null
    },
    {
      "latitude": 51.876835,
      "longitude": 19.586029,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663923259,
      "ems": null
    },
    {
      "latitude": 51.877853,
      "longitude": 19.589514,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663923265,
      "ems": null
    },
    {
      "latitude": 51.879089,
      "longitude": 19.594191,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663923272,
      "ems": null
    },
    {
      "latitude": 51.879864,
      "longitude": 19.597702,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663923278,
      "ems": null
    },
    {
      "latitude": 51.881104,
      "longitude": 19.603172,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1663923286,
      "ems": null
    },
    {
      "latitude": 51.882191,
      "longitude": 19.607544,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1663923293,
      "ems": null
    },
    {
      "latitude": 51.883209,
      "longitude": 19.612005,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663923300,
      "ems": null
    },
    {
      "latitude": 51.884007,
      "longitude": 19.615784,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1663923305,
      "ems": null
    },
    {
      "latitude": 51.884842,
      "longitude": 19.619522,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1663923311,
      "ems": null
    },
    {
      "latitude": 51.886093,
      "longitude": 19.624701,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1663923319,
      "ems": null
    },
    {
      "latitude": 51.887238,
      "longitude": 19.628931,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1663923324,
      "ems": null
    },
    {
      "latitude": 51.888107,
      "longitude": 19.634424,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1663923332,
      "ems": null
    },
    {
      "latitude": 51.887589,
      "longitude": 19.638062,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1663923336,
      "ems": null
    },
    {
      "latitude": 51.88678,
      "longitude": 19.640808,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1663923340,
      "ems": null
    },
    {
      "latitude": 51.886002,
      "longitude": 19.643555,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1663923344,
      "ems": null
    },
    {
      "latitude": 51.88554,
      "longitude": 19.645309,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1663923347,
      "ems": null
    },
    {
      "latitude": 51.88475,
      "longitude": 19.64859,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1663923352,
      "ems": null
    },
    {
      "latitude": 51.884052,
      "longitude": 19.651337,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1663923356,
      "ems": null
    },
    {
      "latitude": 51.883213,
      "longitude": 19.655228,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1663923361,
      "ems": null
    },
    {
      "latitude": 51.882145,
      "longitude": 19.660263,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1663923369,
      "ems": null
    },
    {
      "latitude": 51.881195,
      "longitude": 19.664488,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1663923375,
      "ems": null
    },
    {
      "latitude": 51.880417,
      "longitude": 19.667828,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1663923380,
      "ems": null
    },
    {
      "latitude": 51.879272,
      "longitude": 19.672728,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1663923387,
      "ems": null
    },
    {
      "latitude": 51.878372,
      "longitude": 19.67659,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1663923392,
      "ems": null
    },
    {
      "latitude": 51.877163,
      "longitude": 19.682236,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1663923400,
      "ems": null
    },
    {
      "latitude": 51.876389,
      "longitude": 19.686386,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1663923407,
      "ems": null
    },
    {
      "latitude": 51.87558,
      "longitude": 19.690857,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1663923414,
      "ems": null
    },
    {
      "latitude": 51.874882,
      "longitude": 19.694366,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1663923419,
      "ems": null
    },
    {
      "latitude": 51.873688,
      "longitude": 19.700268,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1663923428,
      "ems": null
    },
    {
      "latitude": 51.873158,
      "longitude": 19.702682,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1663923431,
      "ems": null
    },
    {
      "latitude": 51.871529,
      "longitude": 19.710541,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1663923443,
      "ems": null
    },
    {
      "latitude": 51.870667,
      "longitude": 19.714373,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1663923449,
      "ems": null
    },
    {
      "latitude": 51.869522,
      "longitude": 19.719345,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1663923455,
      "ems": null
    },
    {
      "latitude": 51.868607,
      "longitude": 19.723429,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1663923464,
      "ems": null
    },
    {
      "latitude": 51.866547,
      "longitude": 19.731297,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1663923473,
      "ems": null
    },
    {
      "latitude": 51.865494,
      "longitude": 19.735157,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1663923479,
      "ems": null
    },
    {
      "latitude": 51.864361,
      "longitude": 19.73938,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1663923485,
      "ems": null
    },
    {
      "latitude": 51.863384,
      "longitude": 19.743042,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1663923490,
      "ems": null
    },
    {
      "latitude": 51.86208,
      "longitude": 19.74762,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 114,
      "squawk": "7473",
      "timestamp": 1663923497,
      "ems": null
    },
    {
      "latitude": 51.860729,
      "longitude": 19.752197,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 116,
      "squawk": "7473",
      "timestamp": 1663923503,
      "ems": null
    },
    {
      "latitude": 51.859192,
      "longitude": 19.757385,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7473",
      "timestamp": 1663923512,
      "ems": null
    },
    {
      "latitude": 51.857098,
      "longitude": 19.764481,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 116,
      "squawk": "7473",
      "timestamp": 1663923522,
      "ems": null
    },
    {
      "latitude": 51.856384,
      "longitude": 19.766853,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "7473",
      "timestamp": 1663923528,
      "ems": null
    },
    {
      "latitude": 51.854073,
      "longitude": 19.774475,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "7473",
      "timestamp": 1663923536,
      "ems": null
    },
    {
      "latitude": 51.852402,
      "longitude": 19.779621,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "7473",
      "timestamp": 1663923544,
      "ems": null
    },
    {
      "latitude": 51.850861,
      "longitude": 19.784393,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "7473",
      "timestamp": 1663923552,
      "ems": null
    },
    {
      "latitude": 51.849323,
      "longitude": 19.789047,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 118,
      "squawk": "7473",
      "timestamp": 1663923558,
      "ems": null
    },
    {
      "latitude": 51.848236,
      "longitude": 19.792242,
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
      "heading": 118,
      "squawk": "7473",
      "timestamp": 1663923564,
      "ems": null
    },
    {
      "latitude": 51.846344,
      "longitude": 19.798279,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 115,
      "squawk": "7473",
      "timestamp": 1663923572,
      "ems": null
    },
    {
      "latitude": 51.844894,
      "longitude": 19.802931,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "7473",
      "timestamp": 1663923579,
      "ems": null
    },
    {
      "latitude": 51.843643,
      "longitude": 19.806976,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "7473",
      "timestamp": 1663923585,
      "ems": null
    },
    {
      "latitude": 51.842834,
      "longitude": 19.81028,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923590,
      "ems": null
    },
    {
      "latitude": 51.842102,
      "longitude": 19.81362,
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
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923594,
      "ems": null
    },
    {
      "latitude": 51.841553,
      "longitude": 19.816217,
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
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923598,
      "ems": null
    },
    {
      "latitude": 51.840958,
      "longitude": 19.819262,
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
      "heading": 107,
      "squawk": "7473",
      "timestamp": 1663923602,
      "ems": null
    },
    {
      "latitude": 51.840527,
      "longitude": 19.82132,
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
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663923606,
      "ems": null
    },
    {
      "latitude": 51.840088,
      "longitude": 19.823271,
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
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663923608,
      "ems": null
    },
    {
      "latitude": 51.8395,
      "longitude": 19.82605,
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
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663923612,
      "ems": null
    },
    {
      "latitude": 51.838669,
      "longitude": 19.830322,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "7473",
      "timestamp": 1663923618,
      "ems": null
    },
    {
      "latitude": 51.837936,
      "longitude": 19.833811,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 107,
      "squawk": "7473",
      "timestamp": 1663923623,
      "ems": null
    },
    {
      "latitude": 51.836617,
      "longitude": 19.840775,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 106,
      "squawk": "7473",
      "timestamp": 1663923632,
      "ems": null
    },
    {
      "latitude": 51.835918,
      "longitude": 19.844589,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 106,
      "squawk": "7473",
      "timestamp": 1663923638,
      "ems": null
    },
    {
      "latitude": 51.835079,
      "longitude": 19.849319,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 105,
      "squawk": "7473",
      "timestamp": 1663923644,
      "ems": null
    },
    {
      "latitude": 51.834286,
      "longitude": 19.85321,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663923651,
      "ems": null
    },
    {
      "latitude": 51.833172,
      "longitude": 19.858322,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923656,
      "ems": null
    },
    {
      "latitude": 51.831848,
      "longitude": 19.863949,
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
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923664,
      "ems": null
    },
    {
      "latitude": 51.831074,
      "longitude": 19.867249,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923668,
      "ems": null
    },
    {
      "latitude": 51.830475,
      "longitude": 19.870037,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923672,
      "ems": null
    },
    {
      "latitude": 51.829651,
      "longitude": 19.87397,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663923678,
      "ems": null
    },
    {
      "latitude": 51.828747,
      "longitude": 19.878082,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923684,
      "ems": null
    },
    {
      "latitude": 51.827911,
      "longitude": 19.881914,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923690,
      "ems": null
    },
    {
      "latitude": 51.826931,
      "longitude": 19.885941,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923696,
      "ems": null
    },
    {
      "latitude": 51.826035,
      "longitude": 19.889782,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923702,
      "ems": null
    },
    {
      "latitude": 51.825027,
      "longitude": 19.893791,
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
      "heading": 112,
      "squawk": "7473",
      "timestamp": 1663923708,
      "ems": null
    },
    {
      "latitude": 51.823975,
      "longitude": 19.897947,
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
      "heading": 112,
      "squawk": "7473",
      "timestamp": 1663923714,
      "ems": null
    },
    {
      "latitude": 51.823013,
      "longitude": 19.901733,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "7473",
      "timestamp": 1663923719,
      "ems": null
    },
    {
      "latitude": 51.821953,
      "longitude": 19.906006,
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
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923726,
      "ems": null
    },
    {
      "latitude": 51.820881,
      "longitude": 19.910431,
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
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923732,
      "ems": null
    },
    {
      "latitude": 51.819901,
      "longitude": 19.914501,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923738,
      "ems": null
    },
    {
      "latitude": 51.818878,
      "longitude": 19.918976,
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
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923744,
      "ems": null
    },
    {
      "latitude": 51.817806,
      "longitude": 19.923248,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923750,
      "ems": null
    },
    {
      "latitude": 51.816788,
      "longitude": 19.927343,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923756,
      "ems": null
    },
    {
      "latitude": 51.815735,
      "longitude": 19.931648,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "7473",
      "timestamp": 1663923762,
      "ems": null
    },
    {
      "latitude": 51.814827,
      "longitude": 19.93515,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "7473",
      "timestamp": 1663923768,
      "ems": null
    },
    {
      "latitude": 51.813618,
      "longitude": 19.940109,
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
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923774,
      "ems": null
    },
    {
      "latitude": 51.812546,
      "longitude": 19.944763,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923780,
      "ems": null
    },
    {
      "latitude": 51.81171,
      "longitude": 19.948196,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923784,
      "ems": null
    },
    {
      "latitude": 51.81015,
      "longitude": 19.95466,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923793,
      "ems": null
    },
    {
      "latitude": 51.808685,
      "longitude": 19.960674,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923801,
      "ems": null
    },
    {
      "latitude": 51.807632,
      "longitude": 19.964905,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923806,
      "ems": null
    },
    {
      "latitude": 51.806763,
      "longitude": 19.968765,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923813,
      "ems": null
    },
    {
      "latitude": 51.805378,
      "longitude": 19.974213,
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
      "heading": 112,
      "squawk": "7473",
      "timestamp": 1663923819,
      "ems": null
    },
    {
      "latitude": 51.804108,
      "longitude": 19.978861,
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
      "heading": 114,
      "squawk": "7473",
      "timestamp": 1663923825,
      "ems": null
    },
    {
      "latitude": 51.802864,
      "longitude": 19.983215,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7473",
      "timestamp": 1663923831,
      "ems": null
    },
    {
      "latitude": 51.802414,
      "longitude": 19.984873,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 116,
      "squawk": "7473",
      "timestamp": 1663923834,
      "ems": null
    },
    {
      "latitude": 51.801727,
      "longitude": 19.987101,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 116,
      "squawk": "7473",
      "timestamp": 1663923837,
      "ems": null
    },
    {
      "latitude": 51.800911,
      "longitude": 19.989624,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 116,
      "squawk": "7473",
      "timestamp": 1663923840,
      "ems": null
    },
    {
      "latitude": 51.799713,
      "longitude": 19.993633,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 115,
      "squawk": "7473",
      "timestamp": 1663923846,
      "ems": null
    },
    {
      "latitude": 51.798721,
      "longitude": 19.997177,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "7473",
      "timestamp": 1663923852,
      "ems": null
    },
    {
      "latitude": 51.79747,
      "longitude": 20.001501,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7473",
      "timestamp": 1663923858,
      "ems": null
    },
    {
      "latitude": 51.796326,
      "longitude": 20.005287,
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
      "heading": 115,
      "squawk": "7473",
      "timestamp": 1663923863,
      "ems": null
    },
    {
      "latitude": 51.794903,
      "longitude": 20.010529,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7473",
      "timestamp": 1663923871,
      "ems": null
    },
    {
      "latitude": 51.793762,
      "longitude": 20.014715,
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
      "heading": 114,
      "squawk": "7473",
      "timestamp": 1663923877,
      "ems": null
    },
    {
      "latitude": 51.791977,
      "longitude": 20.020876,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7473",
      "timestamp": 1663923885,
      "ems": null
    },
    {
      "latitude": 51.790901,
      "longitude": 20.02449,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7473",
      "timestamp": 1663923890,
      "ems": null
    },
    {
      "latitude": 51.78904,
      "longitude": 20.030365,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 120,
      "squawk": "7473",
      "timestamp": 1663923899,
      "ems": null
    },
    {
      "latitude": 51.787968,
      "longitude": 20.032959,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 125,
      "squawk": "7473",
      "timestamp": 1663923903,
      "ems": null
    },
    {
      "latitude": 51.787037,
      "longitude": 20.034943,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 127,
      "squawk": "7473",
      "timestamp": 1663923907,
      "ems": null
    },
    {
      "latitude": 51.786301,
      "longitude": 20.036539,
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
      "heading": 126,
      "squawk": "7473",
      "timestamp": 1663923909,
      "ems": null
    },
    {
      "latitude": 51.786209,
      "longitude": 20.036762,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7473",
      "timestamp": 1663923911,
      "ems": null
    },
    {
      "latitude": 51.785362,
      "longitude": 20.038681,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7473",
      "timestamp": 1663923913,
      "ems": null
    },
    {
      "latitude": 51.783966,
      "longitude": 20.044556,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 100,
      "squawk": "7473",
      "timestamp": 1663923921,
      "ems": null
    },
    {
      "latitude": 51.783737,
      "longitude": 20.047153,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 98,
      "squawk": "7473",
      "timestamp": 1663923925,
      "ems": null
    },
    {
      "latitude": 51.783405,
      "longitude": 20.049591,
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
      "heading": 100,
      "squawk": "7473",
      "timestamp": 1663923929,
      "ems": null
    },
    {
      "latitude": 51.782848,
      "longitude": 20.052795,
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
      "heading": 106,
      "squawk": "7473",
      "timestamp": 1663923933,
      "ems": null
    },
    {
      "latitude": 51.782242,
      "longitude": 20.055771,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923937,
      "ems": null
    },
    {
      "latitude": 51.781815,
      "longitude": 20.057842,
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
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663923940,
      "ems": null
    },
    {
      "latitude": 51.781498,
      "longitude": 20.059204,
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
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923941,
      "ems": null
    },
    {
      "latitude": 51.780987,
      "longitude": 20.061646,
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
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923945,
      "ems": null
    },
    {
      "latitude": 51.780334,
      "longitude": 20.064468,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663923949,
      "ems": null
    },
    {
      "latitude": 51.779938,
      "longitude": 20.066231,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 110,
      "squawk": "7473",
      "timestamp": 1663923951,
      "ems": null
    },
    {
      "latitude": 51.779526,
      "longitude": 20.068012,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923954,
      "ems": null
    },
    {
      "latitude": 51.778938,
      "longitude": 20.070419,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923957,
      "ems": null
    },
    {
      "latitude": 51.778839,
      "longitude": 20.070759,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663923958,
      "ems": null
    },
    {
      "latitude": 51.778145,
      "longitude": 20.073547,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "7473",
      "timestamp": 1663923962,
      "ems": null
    },
    {
      "latitude": 51.77684,
      "longitude": 20.078659,
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
      "heading": 113,
      "squawk": "7473",
      "timestamp": 1663923970,
      "ems": null
    },
    {
      "latitude": 51.776138,
      "longitude": 20.081226,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 114,
      "squawk": "7473",
      "timestamp": 1663923975,
      "ems": null
    },
    {
      "latitude": 51.774994,
      "longitude": 20.085012,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 118,
      "squawk": "7473",
      "timestamp": 1663923979,
      "ems": null
    },
    {
      "latitude": 51.774513,
      "longitude": 20.086288,
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
      "heading": 118,
      "squawk": "7473",
      "timestamp": 1663923984,
      "ems": null
    },
    {
      "latitude": 51.772385,
      "longitude": 20.094885,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 106,
      "squawk": "7473",
      "timestamp": 1663923994,
      "ems": null
    },
    {
      "latitude": 51.771954,
      "longitude": 20.097275,
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
      "heading": 105,
      "squawk": "7473",
      "timestamp": 1663923997,
      "ems": null
    },
    {
      "latitude": 51.771675,
      "longitude": 20.09903,
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
      "heading": 104,
      "squawk": "7473",
      "timestamp": 1663923999,
      "ems": null
    },
    {
      "latitude": 51.771286,
      "longitude": 20.101641,
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
      "heading": 103,
      "squawk": "7473",
      "timestamp": 1663924003,
      "ems": null
    },
    {
      "latitude": 51.771023,
      "longitude": 20.103683,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 101,
      "squawk": "7473",
      "timestamp": 1663924005,
      "ems": null
    },
    {
      "latitude": 51.770828,
      "longitude": 20.105871,
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
      "heading": 99,
      "squawk": "7473",
      "timestamp": 1663924008,
      "ems": null
    },
    {
      "latitude": 51.770512,
      "longitude": 20.108337,
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
      "heading": 100,
      "squawk": "7473",
      "timestamp": 1663924012,
      "ems": null
    },
    {
      "latitude": 51.770279,
      "longitude": 20.11025,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 101,
      "squawk": "7473",
      "timestamp": 1663924014,
      "ems": null
    },
    {
      "latitude": 51.769958,
      "longitude": 20.112848,
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
      "heading": 100,
      "squawk": "7473",
      "timestamp": 1663924018,
      "ems": null
    },
    {
      "latitude": 51.769226,
      "longitude": 20.117229,
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
      "heading": 107,
      "squawk": "7473",
      "timestamp": 1663924024,
      "ems": null
    },
    {
      "latitude": 51.768356,
      "longitude": 20.121609,
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
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663924030,
      "ems": null
    },
    {
      "latitude": 51.767532,
      "longitude": 20.125988,
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
      "heading": 105,
      "squawk": "7473",
      "timestamp": 1663924036,
      "ems": null
    },
    {
      "latitude": 51.767113,
      "longitude": 20.128403,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "7473",
      "timestamp": 1663924039,
      "ems": null
    },
    {
      "latitude": 51.7668,
      "longitude": 20.130367,
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
      "heading": 105,
      "squawk": "7473",
      "timestamp": 1663924042,
      "ems": null
    },
    {
      "latitude": 51.766369,
      "longitude": 20.132599,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 106,
      "squawk": "7473",
      "timestamp": 1663924045,
      "ems": null
    },
    {
      "latitude": 51.765995,
      "longitude": 20.134811,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 106,
      "squawk": "7473",
      "timestamp": 1663924048,
      "ems": null
    },
    {
      "latitude": 51.765251,
      "longitude": 20.139008,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 106,
      "squawk": "7473",
      "timestamp": 1663924054,
      "ems": null
    },
    {
      "latitude": 51.764412,
      "longitude": 20.142975,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663924059,
      "ems": null
    },
    {
      "latitude": 51.763622,
      "longitude": 20.14679,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663924066,
      "ems": null
    },
    {
      "latitude": 51.762543,
      "longitude": 20.151896,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "7473",
      "timestamp": 1663924072,
      "ems": null
    },
    {
      "latitude": 51.761032,
      "longitude": 20.158798,
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
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663924082,
      "ems": null
    },
    {
      "latitude": 51.759979,
      "longitude": 20.164217,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 106,
      "squawk": "7473",
      "timestamp": 1663924089,
      "ems": null
    },
    {
      "latitude": 51.758926,
      "longitude": 20.170675,
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
      "heading": 102,
      "squawk": "7473",
      "timestamp": 1663924098,
      "ems": null
    },
    {
      "latitude": 51.758499,
      "longitude": 20.173721,
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
      "heading": 100,
      "squawk": "7473",
      "timestamp": 1663924102,
      "ems": null
    },
    {
      "latitude": 51.758286,
      "longitude": 20.175945,
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
      "heading": 100,
      "squawk": "7473",
      "timestamp": 1663924105,
      "ems": null
    },
    {
      "latitude": 51.758034,
      "longitude": 20.178299,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 99,
      "squawk": "7473",
      "timestamp": 1663924108,
      "ems": null
    },
    {
      "latitude": 51.757782,
      "longitude": 20.181217,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 98,
      "squawk": "7473",
      "timestamp": 1663924112,
      "ems": null
    },
    {
      "latitude": 51.757614,
      "longitude": 20.182953,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 97,
      "squawk": "7473",
      "timestamp": 1663924116,
      "ems": null
    },
    {
      "latitude": 51.757381,
      "longitude": 20.186768,
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
      "heading": 95,
      "squawk": "7473",
      "timestamp": 1663924120,
      "ems": null
    },
    {
      "latitude": 51.757187,
      "longitude": 20.189234,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "7473",
      "timestamp": 1663924123,
      "ems": null
    },
    {
      "latitude": 51.756912,
      "longitude": 20.19339,
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
      "heading": 95,
      "squawk": "7473",
      "timestamp": 1663924129,
      "ems": null
    },
    {
      "latitude": 51.75687,
      "longitude": 20.194016,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 94,
      "squawk": "7473",
      "timestamp": 1663924132,
      "ems": null
    },
    {
      "latitude": 51.756775,
      "longitude": 20.197399,
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
      "heading": 92,
      "squawk": "7473",
      "timestamp": 1663924135,
      "ems": null
    },
    {
      "latitude": 51.756775,
      "longitude": 20.200665,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 88,
      "squawk": "7473",
      "timestamp": 1663924139,
      "ems": null
    },
    {
      "latitude": 51.756824,
      "longitude": 20.203094,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 87,
      "squawk": "7473",
      "timestamp": 1663924143,
      "ems": null
    },
    {
      "latitude": 51.756958,
      "longitude": 20.205862,
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
      "heading": 83,
      "squawk": "7473",
      "timestamp": 1663924147,
      "ems": null
    },
    {
      "latitude": 51.757149,
      "longitude": 20.20813,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "7473",
      "timestamp": 1663924149,
      "ems": null
    },
    {
      "latitude": 51.757381,
      "longitude": 20.210266,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 79,
      "squawk": "7473",
      "timestamp": 1663924152,
      "ems": null
    },
    {
      "latitude": 51.757568,
      "longitude": 20.212173,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 78,
      "squawk": "7473",
      "timestamp": 1663924157,
      "ems": null
    },
    {
      "latitude": 51.757988,
      "longitude": 20.215073,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 77,
      "squawk": "7473",
      "timestamp": 1663924159,
      "ems": null
    },
    {
      "latitude": 51.758331,
      "longitude": 20.21759,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "7473",
      "timestamp": 1663924163,
      "ems": null
    },
    {
      "latitude": 51.758606,
      "longitude": 20.219818,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "7473",
      "timestamp": 1663924166,
      "ems": null
    },
    {
      "latitude": 51.758781,
      "longitude": 20.220871,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "7473",
      "timestamp": 1663924167,
      "ems": null
    },
    {
      "latitude": 51.759247,
      "longitude": 20.22438,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "7473",
      "timestamp": 1663924172,
      "ems": null
    },
    {
      "latitude": 51.759804,
      "longitude": 20.230331,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7473",
      "timestamp": 1663924180,
      "ems": null
    },
    {
      "latitude": 51.759933,
      "longitude": 20.23303,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "7473",
      "timestamp": 1663924184,
      "ems": null
    },
    {
      "latitude": 51.759888,
      "longitude": 20.236668,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 95,
      "squawk": "7473",
      "timestamp": 1663924189,
      "ems": null
    },
    {
      "latitude": 51.759197,
      "longitude": 20.240402,
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
      "heading": 107,
      "squawk": "7473",
      "timestamp": 1663924194,
      "ems": null
    },
    {
      "latitude": 51.757568,
      "longitude": 20.243759,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 135,
      "squawk": "7473",
      "timestamp": 1663924199,
      "ems": null
    },
    {
      "latitude": 51.757011,
      "longitude": 20.244522,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 138,
      "squawk": "7473",
      "timestamp": 1663924201,
      "ems": null
    },
    {
      "latitude": 51.755356,
      "longitude": 20.246319,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 149,
      "squawk": "7473",
      "timestamp": 1663924205,
      "ems": null
    },
    {
      "latitude": 51.753193,
      "longitude": 20.247803,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 160,
      "squawk": "7473",
      "timestamp": 1663924210,
      "ems": null
    },
    {
      "latitude": 51.751328,
      "longitude": 20.248396,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 170,
      "squawk": "7473",
      "timestamp": 1663924214,
      "ems": null
    },
    {
      "latitude": 51.750446,
      "longitude": 20.248489,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 174,
      "squawk": "7473",
      "timestamp": 1663924218,
      "ems": null
    },
    {
      "latitude": 51.747841,
      "longitude": 20.247879,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 193,
      "squawk": "7473",
      "timestamp": 1663924222,
      "ems": null
    },
    {
      "latitude": 51.746212,
      "longitude": 20.246887,
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
      "heading": 202,
      "squawk": "7473",
      "timestamp": 1663924226,
      "ems": null
    },
    {
      "latitude": 51.745049,
      "longitude": 20.245895,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663924228,
      "ems": null
    },
    {
      "latitude": 51.744022,
      "longitude": 20.244675,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 218,
      "squawk": "7473",
      "timestamp": 1663924231,
      "ems": null
    },
    {
      "latitude": 51.743092,
      "longitude": 20.243149,
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
      "heading": 227,
      "squawk": "7473",
      "timestamp": 1663924234,
      "ems": null
    },
    {
      "latitude": 51.742161,
      "longitude": 20.241165,
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
      "heading": 235,
      "squawk": "7473",
      "timestamp": 1663924238,
      "ems": null
    },
    {
      "latitude": 51.741928,
      "longitude": 20.240555,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 240,
      "squawk": "7473",
      "timestamp": 1663924240,
      "ems": null
    },
    {
      "latitude": 51.741165,
      "longitude": 20.238226,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "7473",
      "timestamp": 1663924242,
      "ems": null
    },
    {
      "latitude": 51.740707,
      "longitude": 20.236444,
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
      "heading": 248,
      "squawk": "7473",
      "timestamp": 1663924247,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 20.233477,
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
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663924249,
      "ems": null
    },
    {
      "latitude": 51.739883,
      "longitude": 20.231174,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 266,
      "squawk": "7473",
      "timestamp": 1663924253,
      "ems": null
    },
    {
      "latitude": 51.739929,
      "longitude": 20.230507,
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
      "heading": 272,
      "squawk": "7473",
      "timestamp": 1663924254,
      "ems": null
    },
    {
      "latitude": 51.740391,
      "longitude": 20.227585,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 266,
      "squawk": "7473",
      "timestamp": 1663924258,
      "ems": null
    },
    {
      "latitude": 51.741028,
      "longitude": 20.225904,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7473",
      "timestamp": 1663924262,
      "ems": null
    },
    {
      "latitude": 51.742252,
      "longitude": 20.224075,
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
      "heading": 322,
      "squawk": "7473",
      "timestamp": 1663924266,
      "ems": null
    },
    {
      "latitude": 51.742767,
      "longitude": 20.223541,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 327,
      "squawk": "7473",
      "timestamp": 1663924267,
      "ems": null
    },
    {
      "latitude": 51.743977,
      "longitude": 20.222702,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 339,
      "squawk": "7473",
      "timestamp": 1663924270,
      "ems": null
    },
    {
      "latitude": 51.746338,
      "longitude": 20.222342,
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
      "heading": 343,
      "squawk": "7473",
      "timestamp": 1663924276,
      "ems": null
    },
    {
      "latitude": 51.747608,
      "longitude": 20.222931,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 20,
      "squawk": "7473",
      "timestamp": 1663924279,
      "ems": null
    },
    {
      "latitude": 51.748856,
      "longitude": 20.224049,
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
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663924282,
      "ems": null
    },
    {
      "latitude": 51.749844,
      "longitude": 20.225525,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 42,
      "squawk": "7473",
      "timestamp": 1663924286,
      "ems": null
    },
    {
      "latitude": 51.750732,
      "longitude": 20.227612,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 59,
      "squawk": "7473",
      "timestamp": 1663924289,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 20.230877,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 77,
      "squawk": "7473",
      "timestamp": 1663924294,
      "ems": null
    },
    {
      "latitude": 51.751511,
      "longitude": 20.233551,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 98,
      "squawk": "7473",
      "timestamp": 1663924299,
      "ems": null
    },
    {
      "latitude": 51.750679,
      "longitude": 20.238647,
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
      "heading": 113,
      "squawk": "7473",
      "timestamp": 1663924304,
      "ems": null
    },
    {
      "latitude": 51.750027,
      "longitude": 20.240631,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 117,
      "squawk": "7473",
      "timestamp": 1663924307,
      "ems": null
    },
    {
      "latitude": 51.74947,
      "longitude": 20.242004,
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
      "heading": 123,
      "squawk": "7473",
      "timestamp": 1663924309,
      "ems": null
    },
    {
      "latitude": 51.748535,
      "longitude": 20.243793,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 132,
      "squawk": "7473",
      "timestamp": 1663924312,
      "ems": null
    },
    {
      "latitude": 51.747528,
      "longitude": 20.245131,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "7473",
      "timestamp": 1663924315,
      "ems": null
    },
    {
      "latitude": 51.74649,
      "longitude": 20.246048,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7473",
      "timestamp": 1663924319,
      "ems": null
    },
    {
      "latitude": 51.744507,
      "longitude": 20.246912,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 169,
      "squawk": "7473",
      "timestamp": 1663924322,
      "ems": null
    },
    {
      "latitude": 51.743465,
      "longitude": 20.246887,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 185,
      "squawk": "7473",
      "timestamp": 1663924325,
      "ems": null
    },
    {
      "latitude": 51.741882,
      "longitude": 20.246201,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "7473",
      "timestamp": 1663924328,
      "ems": null
    },
    {
      "latitude": 51.740902,
      "longitude": 20.245209,
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
      "heading": 217,
      "squawk": "7473",
      "timestamp": 1663924331,
      "ems": null
    },
    {
      "latitude": 51.740021,
      "longitude": 20.243683,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 232,
      "squawk": "7473",
      "timestamp": 1663924334,
      "ems": null
    },
    {
      "latitude": 51.739506,
      "longitude": 20.242157,
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
      "heading": 244,
      "squawk": "7473",
      "timestamp": 1663924336,
      "ems": null
    },
    {
      "latitude": 51.738857,
      "longitude": 20.239639,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 246,
      "squawk": "7473",
      "timestamp": 1663924340,
      "ems": null
    },
    {
      "latitude": 51.738464,
      "longitude": 20.238005,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663924343,
      "ems": null
    },
    {
      "latitude": 51.738098,
      "longitude": 20.236444,
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
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663924345,
      "ems": null
    },
    {
      "latitude": 51.737553,
      "longitude": 20.233994,
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
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663924349,
      "ems": null
    },
    {
      "latitude": 51.737133,
      "longitude": 20.232086,
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
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663924352,
      "ems": null
    },
    {
      "latitude": 51.736809,
      "longitude": 20.230484,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663924354,
      "ems": null
    },
    {
      "latitude": 51.736343,
      "longitude": 20.228119,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663924358,
      "ems": null
    },
    {
      "latitude": 51.735924,
      "longitude": 20.22583,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663924361,
      "ems": null
    },
    {
      "latitude": 51.735641,
      "longitude": 20.224075,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663924364,
      "ems": null
    },
    {
      "latitude": 51.735363,
      "longitude": 20.222397,
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
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663924366,
      "ems": null
    },
    {
      "latitude": 51.735031,
      "longitude": 20.220263,
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
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663924370,
      "ems": null
    },
    {
      "latitude": 51.734253,
      "longitude": 20.215734,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663924376,
      "ems": null
    },
    {
      "latitude": 51.733456,
      "longitude": 20.211563,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 253,
      "squawk": "7473",
      "timestamp": 1663924382,
      "ems": null
    },
    {
      "latitude": 51.732651,
      "longitude": 20.207644,
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
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663924388,
      "ems": null
    },
    {
      "latitude": 51.731964,
      "longitude": 20.203934,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663924394,
      "ems": null
    },
    {
      "latitude": 51.731361,
      "longitude": 20.200195,
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
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663924400,
      "ems": null
    },
    {
      "latitude": 51.730865,
      "longitude": 20.19688,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 257,
      "squawk": "7473",
      "timestamp": 1663924406,
      "ems": null
    },
    {
      "latitude": 51.730381,
      "longitude": 20.19371,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663924412,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 20.190941,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663924417,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 20.187378,
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
      "heading": 257,
      "squawk": "7473",
      "timestamp": 1663924421,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 20.185003,
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
      "heading": 257,
      "squawk": "7473",
      "timestamp": 1663924425,
      "ems": null
    },
    {
      "latitude": 51.728439,
      "longitude": 20.178841,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663924434,
      "ems": null
    },
    {
      "latitude": 51.727753,
      "longitude": 20.174017,
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
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663924442,
      "ems": null
    },
    {
      "latitude": 51.726845,
      "longitude": 20.168381,
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
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663924450,
      "ems": null
    },
    {
      "latitude": 51.726059,
      "longitude": 20.163698,
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
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663924458,
      "ems": null
    },
    {
      "latitude": 51.724842,
      "longitude": 20.156708,
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
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663924467,
      "ems": null
    },
    {
      "latitude": 51.724091,
      "longitude": 20.152119,
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
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663924475,
      "ems": null
    },
    {
      "latitude": 51.723076,
      "longitude": 20.146255,
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
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663924483,
      "ems": null
    },
    {
      "latitude": 51.722214,
      "longitude": 20.142096,
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
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663924491,
      "ems": null
    },
    {
      "latitude": 51.72163,
      "longitude": 20.139389,
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
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663924495,
      "ems": null
    },
    {
      "latitude": 51.720886,
      "longitude": 20.136261,
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
      "heading": 246,
      "squawk": "7473",
      "timestamp": 1663924499,
      "ems": null
    },
    {
      "latitude": 51.720108,
      "longitude": 20.133337,
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
      "heading": 248,
      "squawk": "7473",
      "timestamp": 1663924504,
      "ems": null
    },
    {
      "latitude": 51.719513,
      "longitude": 20.130442,
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
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663924508,
      "ems": null
    },
    {
      "latitude": 51.718414,
      "longitude": 20.124874,
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
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663924517,
      "ems": null
    },
    {
      "latitude": 51.717999,
      "longitude": 20.122757,
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
      "heading": 253,
      "squawk": "7473",
      "timestamp": 1663924521,
      "ems": null
    },
    {
      "latitude": 51.717453,
      "longitude": 20.119902,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 253,
      "squawk": "7473",
      "timestamp": 1663924525,
      "ems": null
    },
    {
      "latitude": 51.716583,
      "longitude": 20.115225,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663924534,
      "ems": null
    },
    {
      "latitude": 51.715626,
      "longitude": 20.108719,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663924544,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 20.105438,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663924548,
      "ems": null
    },
    {
      "latitude": 51.715027,
      "longitude": 20.10268,
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
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663924553,
      "ems": null
    },
    {
      "latitude": 51.714249,
      "longitude": 20.097187,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "7473",
      "timestamp": 1663924561,
      "ems": null
    },
    {
      "latitude": 51.713623,
      "longitude": 20.092392,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663924569,
      "ems": null
    },
    {
      "latitude": 51.713058,
      "longitude": 20.087908,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663924575,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 20.083973,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663924580,
      "ems": null
    },
    {
      "latitude": 51.71196,
      "longitude": 20.07937,
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
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663924587,
      "ems": null
    },
    {
      "latitude": 51.711365,
      "longitude": 20.073952,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663924594,
      "ems": null
    },
    {
      "latitude": 51.710831,
      "longitude": 20.06897,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663924602,
      "ems": null
    },
    {
      "latitude": 51.710587,
      "longitude": 20.065786,
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
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663924606,
      "ems": null
    },
    {
      "latitude": 51.710449,
      "longitude": 20.063335,
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
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663924610,
      "ems": null
    },
    {
      "latitude": 51.710274,
      "longitude": 20.060959,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663924614,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 20.055096,
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
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663924622,
      "ems": null
    },
    {
      "latitude": 51.709713,
      "longitude": 20.052795,
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
      "heading": 265,
      "squawk": "7473",
      "timestamp": 1663924626,
      "ems": null
    },
    {
      "latitude": 51.709202,
      "longitude": 20.046844,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663924634,
      "ems": null
    },
    {
      "latitude": 51.708618,
      "longitude": 20.043962,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663924638,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 20.041735,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7473",
      "timestamp": 1663924641,
      "ems": null
    },
    {
      "latitude": 51.707474,
      "longitude": 20.040176,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 240,
      "squawk": "7473",
      "timestamp": 1663924644,
      "ems": null
    },
    {
      "latitude": 51.706966,
      "longitude": 20.03891,
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
      "heading": 235,
      "squawk": "7473",
      "timestamp": 1663924646,
      "ems": null
    },
    {
      "latitude": 51.705616,
      "longitude": 20.036316,
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
      "heading": 226,
      "squawk": "7473",
      "timestamp": 1663924650,
      "ems": null
    },
    {
      "latitude": 51.704361,
      "longitude": 20.034485,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 221,
      "squawk": "7473",
      "timestamp": 1663924654,
      "ems": null
    },
    {
      "latitude": 51.70253,
      "longitude": 20.032232,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 215,
      "squawk": "7473",
      "timestamp": 1663924658,
      "ems": null
    },
    {
      "latitude": 51.701202,
      "longitude": 20.030897,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663924662,
      "ems": null
    },
    {
      "latitude": 51.699692,
      "longitude": 20.029339,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663924666,
      "ems": null
    },
    {
      "latitude": 51.698364,
      "longitude": 20.027927,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "7473",
      "timestamp": 1663924670,
      "ems": null
    },
    {
      "latitude": 51.696865,
      "longitude": 20.026169,
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
      "heading": 215,
      "squawk": "7473",
      "timestamp": 1663924674,
      "ems": null
    },
    {
      "latitude": 51.69561,
      "longitude": 20.024719,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663924678,
      "ems": null
    },
    {
      "latitude": 51.693607,
      "longitude": 20.022354,
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
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663924682,
      "ems": null
    },
    {
      "latitude": 51.69165,
      "longitude": 20.019989,
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
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663924690,
      "ems": null
    },
    {
      "latitude": 51.689884,
      "longitude": 20.018005,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 214,
      "squawk": "7473",
      "timestamp": 1663924694,
      "ems": null
    },
    {
      "latitude": 51.686531,
      "longitude": 20.014496,
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
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663924702,
      "ems": null
    },
    {
      "latitude": 51.683853,
      "longitude": 20.011745,
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
      "heading": 213,
      "squawk": "7473",
      "timestamp": 1663924711,
      "ems": null
    },
    {
      "latitude": 51.683178,
      "longitude": 20.011063,
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
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663924713,
      "ems": null
    },
    {
      "latitude": 51.680145,
      "longitude": 20.007959,
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
      "heading": 213,
      "squawk": "7473",
      "timestamp": 1663924721,
      "ems": null
    },
    {
      "latitude": 51.676476,
      "longitude": 20.004272,
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
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663924731,
      "ems": null
    },
    {
      "latitude": 51.674568,
      "longitude": 20.002365,
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
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663924738,
      "ems": null
    },
    {
      "latitude": 51.670944,
      "longitude": 19.998457,
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
      "heading": 213,
      "squawk": "7473",
      "timestamp": 1663924748,
      "ems": null
    },
    {
      "latitude": 51.669479,
      "longitude": 19.997047,
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
      "heading": 209,
      "squawk": "7473",
      "timestamp": 1663924752,
      "ems": null
    },
    {
      "latitude": 51.665771,
      "longitude": 19.993559,
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
      "heading": 211,
      "squawk": "7473",
      "timestamp": 1663924761,
      "ems": null
    },
    {
      "latitude": 51.662743,
      "longitude": 19.990463,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663924769,
      "ems": null
    },
    {
      "latitude": 51.660786,
      "longitude": 19.988327,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "7473",
      "timestamp": 1663924775,
      "ems": null
    },
    {
      "latitude": 51.658997,
      "longitude": 19.986284,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663924780,
      "ems": null
    },
    {
      "latitude": 51.657341,
      "longitude": 19.984131,
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
      "heading": 219,
      "squawk": "7473",
      "timestamp": 1663924785,
      "ems": null
    },
    {
      "latitude": 51.655518,
      "longitude": 19.981682,
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
      "heading": 220,
      "squawk": "7473",
      "timestamp": 1663924790,
      "ems": null
    },
    {
      "latitude": 51.653851,
      "longitude": 19.979401,
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
      "heading": 219,
      "squawk": "7473",
      "timestamp": 1663924795,
      "ems": null
    },
    {
      "latitude": 51.653431,
      "longitude": 19.978867,
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
      "heading": 219,
      "squawk": "7473",
      "timestamp": 1663924796,
      "ems": null
    },
    {
      "latitude": 51.650547,
      "longitude": 19.975204,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 217,
      "squawk": "7473",
      "timestamp": 1663924804,
      "ems": null
    },
    {
      "latitude": 51.648357,
      "longitude": 19.97261,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "7473",
      "timestamp": 1663924810,
      "ems": null
    },
    {
      "latitude": 51.646362,
      "longitude": 19.970547,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 211,
      "squawk": "7473",
      "timestamp": 1663924816,
      "ems": null
    },
    {
      "latitude": 51.644165,
      "longitude": 19.968319,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "7473",
      "timestamp": 1663924821,
      "ems": null
    },
    {
      "latitude": 51.642105,
      "longitude": 19.966093,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "7473",
      "timestamp": 1663924827,
      "ems": null
    },
    {
      "latitude": 51.639999,
      "longitude": 19.963791,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663924832,
      "ems": null
    },
    {
      "latitude": 51.637939,
      "longitude": 19.961786,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "7473",
      "timestamp": 1663924837,
      "ems": null
    },
    {
      "latitude": 51.634872,
      "longitude": 19.958521,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 214,
      "squawk": "7473",
      "timestamp": 1663924845,
      "ems": null
    },
    {
      "latitude": 51.632065,
      "longitude": 19.955215,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663924853,
      "ems": null
    },
    {
      "latitude": 51.628666,
      "longitude": 19.951096,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 217,
      "squawk": "7473",
      "timestamp": 1663924862,
      "ems": null
    },
    {
      "latitude": 51.627045,
      "longitude": 19.949167,
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
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663924866,
      "ems": null
    },
    {
      "latitude": 51.62429,
      "longitude": 19.945831,
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
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663924873,
      "ems": null
    },
    {
      "latitude": 51.621872,
      "longitude": 19.942932,
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
      "heading": 217,
      "squawk": "7473",
      "timestamp": 1663924881,
      "ems": null
    },
    {
      "latitude": 51.619869,
      "longitude": 19.940414,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7473",
      "timestamp": 1663924886,
      "ems": null
    },
    {
      "latitude": 51.616425,
      "longitude": 19.935684,
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
      "heading": 221,
      "squawk": "7473",
      "timestamp": 1663924895,
      "ems": null
    },
    {
      "latitude": 51.613163,
      "longitude": 19.931107,
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
      "heading": 221,
      "squawk": "7473",
      "timestamp": 1663924904,
      "ems": null
    },
    {
      "latitude": 51.611301,
      "longitude": 19.928741,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 215,
      "squawk": "7473",
      "timestamp": 1663924909,
      "ems": null
    },
    {
      "latitude": 51.609253,
      "longitude": 19.926605,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663924915,
      "ems": null
    },
    {
      "latitude": 51.607132,
      "longitude": 19.924969,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 200,
      "squawk": "7473",
      "timestamp": 1663924920,
      "ems": null
    },
    {
      "latitude": 51.605026,
      "longitude": 19.924078,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 193,
      "squawk": "7473",
      "timestamp": 1663924925,
      "ems": null
    },
    {
      "latitude": 51.602829,
      "longitude": 19.923929,
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
      "heading": 181,
      "squawk": "7473",
      "timestamp": 1663924930,
      "ems": null
    },
    {
      "latitude": 51.600494,
      "longitude": 19.924597,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 164,
      "squawk": "7473",
      "timestamp": 1663924935,
      "ems": null
    },
    {
      "latitude": 51.599762,
      "longitude": 19.924969,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 161,
      "squawk": "7473",
      "timestamp": 1663924939,
      "ems": null
    },
    {
      "latitude": 51.597012,
      "longitude": 19.926834,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 157,
      "squawk": "7473",
      "timestamp": 1663924943,
      "ems": null
    },
    {
      "latitude": 51.594681,
      "longitude": 19.928606,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 153,
      "squawk": "7473",
      "timestamp": 1663924948,
      "ems": null
    },
    {
      "latitude": 51.593399,
      "longitude": 19.929497,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 157,
      "squawk": "7473",
      "timestamp": 1663924952,
      "ems": null
    },
    {
      "latitude": 51.59124,
      "longitude": 19.930801,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 160,
      "squawk": "7473",
      "timestamp": 1663924956,
      "ems": null
    },
    {
      "latitude": 51.590168,
      "longitude": 19.931412,
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
      "heading": 160,
      "squawk": "7473",
      "timestamp": 1663924960,
      "ems": null
    },
    {
      "latitude": 51.588089,
      "longitude": 19.932539,
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
      "heading": 162,
      "squawk": "7473",
      "timestamp": 1663924965,
      "ems": null
    },
    {
      "latitude": 51.585281,
      "longitude": 19.933929,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "7473",
      "timestamp": 1663924970,
      "ems": null
    },
    {
      "latitude": 51.582813,
      "longitude": 19.93515,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 163,
      "squawk": "7473",
      "timestamp": 1663924977,
      "ems": null
    },
    {
      "latitude": 51.580158,
      "longitude": 19.936371,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7473",
      "timestamp": 1663924982,
      "ems": null
    },
    {
      "latitude": 51.577599,
      "longitude": 19.937592,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7473",
      "timestamp": 1663924987,
      "ems": null
    },
    {
      "latitude": 51.573578,
      "longitude": 19.939444,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 164,
      "squawk": "7473",
      "timestamp": 1663924996,
      "ems": null
    },
    {
      "latitude": 51.568268,
      "longitude": 19.94219,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 160,
      "squawk": "7473",
      "timestamp": 1663925009,
      "ems": null
    },
    {
      "latitude": 51.566147,
      "longitude": 19.943695,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "7473",
      "timestamp": 1663925014,
      "ems": null
    },
    {
      "latitude": 51.563957,
      "longitude": 19.945221,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "7473",
      "timestamp": 1663925019,
      "ems": null
    },
    {
      "latitude": 51.563599,
      "longitude": 19.94553,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 156,
      "squawk": "7473",
      "timestamp": 1663925020,
      "ems": null
    },
    {
      "latitude": 51.561996,
      "longitude": 19.946569,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 157,
      "squawk": "7473",
      "timestamp": 1663925024,
      "ems": null
    },
    {
      "latitude": 51.560165,
      "longitude": 19.947832,
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
      "heading": 157,
      "squawk": "7473",
      "timestamp": 1663925028,
      "ems": null
    },
    {
      "latitude": 51.557785,
      "longitude": 19.94939,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7473",
      "timestamp": 1663925034,
      "ems": null
    },
    {
      "latitude": 51.555176,
      "longitude": 19.951172,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 157,
      "squawk": "7473",
      "timestamp": 1663925040,
      "ems": null
    },
    {
      "latitude": 51.551559,
      "longitude": 19.953695,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 155,
      "squawk": "7473",
      "timestamp": 1663925049,
      "ems": null
    },
    {
      "latitude": 51.548923,
      "longitude": 19.955521,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "7473",
      "timestamp": 1663925055,
      "ems": null
    },
    {
      "latitude": 51.546021,
      "longitude": 19.957779,
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
      "heading": 154,
      "squawk": "7473",
      "timestamp": 1663925062,
      "ems": null
    },
    {
      "latitude": 51.542591,
      "longitude": 19.96048,
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
      "heading": 152,
      "squawk": "7473",
      "timestamp": 1663925071,
      "ems": null
    },
    {
      "latitude": 51.540573,
      "longitude": 19.962158,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 152,
      "squawk": "7473",
      "timestamp": 1663925076,
      "ems": null
    },
    {
      "latitude": 51.538559,
      "longitude": 19.96394,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 150,
      "squawk": "7473",
      "timestamp": 1663925081,
      "ems": null
    },
    {
      "latitude": 51.536167,
      "longitude": 19.966125,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 150,
      "squawk": "7473",
      "timestamp": 1663925087,
      "ems": null
    },
    {
      "latitude": 51.531979,
      "longitude": 19.970016,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7473",
      "timestamp": 1663925097,
      "ems": null
    },
    {
      "latitude": 51.528069,
      "longitude": 19.973602,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 150,
      "squawk": "7473",
      "timestamp": 1663925106,
      "ems": null
    },
    {
      "latitude": 51.524155,
      "longitude": 19.976883,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "7473",
      "timestamp": 1663925115,
      "ems": null
    },
    {
      "latitude": 51.521347,
      "longitude": 19.979084,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "7473",
      "timestamp": 1663925121,
      "ems": null
    },
    {
      "latitude": 51.518757,
      "longitude": 19.981155,
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
      "heading": 153,
      "squawk": "7473",
      "timestamp": 1663925127,
      "ems": null
    },
    {
      "latitude": 51.515171,
      "longitude": 19.984207,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 151,
      "squawk": "7473",
      "timestamp": 1663925136,
      "ems": null
    },
    {
      "latitude": 51.513775,
      "longitude": 19.985428,
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
      "heading": 150,
      "squawk": "7473",
      "timestamp": 1663925140,
      "ems": null
    },
    {
      "latitude": 51.510681,
      "longitude": 19.988361,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7473",
      "timestamp": 1663925148,
      "ems": null
    },
    {
      "latitude": 51.507111,
      "longitude": 19.99148,
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
      "heading": 152,
      "squawk": "7473",
      "timestamp": 1663925157,
      "ems": null
    },
    {
      "latitude": 51.504776,
      "longitude": 19.993336,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "7473",
      "timestamp": 1663925163,
      "ems": null
    },
    {
      "latitude": 51.502789,
      "longitude": 19.994888,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 155,
      "squawk": "7473",
      "timestamp": 1663925169,
      "ems": null
    },
    {
      "latitude": 51.498878,
      "longitude": 19.997711,
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
      "heading": 156,
      "squawk": "7473",
      "timestamp": 1663925179,
      "ems": null
    },
    {
      "latitude": 51.497669,
      "longitude": 19.99855,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 156,
      "squawk": "7473",
      "timestamp": 1663925181,
      "ems": null
    },
    {
      "latitude": 51.495163,
      "longitude": 20.000238,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 157,
      "squawk": "7473",
      "timestamp": 1663925188,
      "ems": null
    },
    {
      "latitude": 51.492733,
      "longitude": 20.001984,
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
      "heading": 154,
      "squawk": "7473",
      "timestamp": 1663925194,
      "ems": null
    },
    {
      "latitude": 51.490494,
      "longitude": 20.003876,
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
      "heading": 150,
      "squawk": "7473",
      "timestamp": 1663925200,
      "ems": null
    },
    {
      "latitude": 51.488937,
      "longitude": 20.005287,
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
      "heading": 151,
      "squawk": "7473",
      "timestamp": 1663925204,
      "ems": null
    },
    {
      "latitude": 51.487846,
      "longitude": 20.006256,
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
      "heading": 151,
      "squawk": "7473",
      "timestamp": 1663925208,
      "ems": null
    },
    {
      "latitude": 51.485657,
      "longitude": 20.008011,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "7473",
      "timestamp": 1663925214,
      "ems": null
    },
    {
      "latitude": 51.482677,
      "longitude": 20.009995,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 163,
      "squawk": "7473",
      "timestamp": 1663925220,
      "ems": null
    },
    {
      "latitude": 51.480881,
      "longitude": 20.010408,
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
      "heading": 177,
      "squawk": "7473",
      "timestamp": 1663925224,
      "ems": null
    },
    {
      "latitude": 51.480103,
      "longitude": 20.010334,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 184,
      "squawk": "7473",
      "timestamp": 1663925226,
      "ems": null
    },
    {
      "latitude": 51.47818,
      "longitude": 20.009518,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 198,
      "squawk": "7473",
      "timestamp": 1663925230,
      "ems": null
    },
    {
      "latitude": 51.47723,
      "longitude": 20.008774,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 206,
      "squawk": "7473",
      "timestamp": 1663925233,
      "ems": null
    },
    {
      "latitude": 51.476067,
      "longitude": 20.007706,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663925236,
      "ems": null
    },
    {
      "latitude": 51.475113,
      "longitude": 20.006622,
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
      "heading": 215,
      "squawk": "7473",
      "timestamp": 1663925239,
      "ems": null
    },
    {
      "latitude": 51.474289,
      "longitude": 20.005732,
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
      "heading": 215,
      "squawk": "7473",
      "timestamp": 1663925241,
      "ems": null
    },
    {
      "latitude": 51.473831,
      "longitude": 20.005213,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "7473",
      "timestamp": 1663925243,
      "ems": null
    },
    {
      "latitude": 51.472252,
      "longitude": 20.002975,
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
      "heading": 225,
      "squawk": "7473",
      "timestamp": 1663925247,
      "ems": null
    },
    {
      "latitude": 51.471226,
      "longitude": 20.001068,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925251,
      "ems": null
    },
    {
      "latitude": 51.47049,
      "longitude": 19.999496,
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
      "heading": 234,
      "squawk": "7473",
      "timestamp": 1663925254,
      "ems": null
    },
    {
      "latitude": 51.469757,
      "longitude": 19.997789,
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
      "heading": 234,
      "squawk": "7473",
      "timestamp": 1663925257,
      "ems": null
    },
    {
      "latitude": 51.469116,
      "longitude": 19.996454,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 232,
      "squawk": "7473",
      "timestamp": 1663925260,
      "ems": null
    },
    {
      "latitude": 51.468201,
      "longitude": 19.994583,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 232,
      "squawk": "7473",
      "timestamp": 1663925263,
      "ems": null
    },
    {
      "latitude": 51.46769,
      "longitude": 19.993591,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925265,
      "ems": null
    },
    {
      "latitude": 51.466572,
      "longitude": 19.991455,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925268,
      "ems": null
    },
    {
      "latitude": 51.465637,
      "longitude": 19.989698,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925272,
      "ems": null
    },
    {
      "latitude": 51.464859,
      "longitude": 19.988287,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925275,
      "ems": null
    },
    {
      "latitude": 51.462521,
      "longitude": 19.983978,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "7473",
      "timestamp": 1663925282,
      "ems": null
    },
    {
      "latitude": 51.461334,
      "longitude": 19.981756,
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
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925287,
      "ems": null
    },
    {
      "latitude": 51.459778,
      "longitude": 19.978861,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925292,
      "ems": null
    },
    {
      "latitude": 51.457489,
      "longitude": 19.974628,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 228,
      "squawk": "7473",
      "timestamp": 1663925300,
      "ems": null
    },
    {
      "latitude": 51.455338,
      "longitude": 19.970621,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925308,
      "ems": null
    },
    {
      "latitude": 51.454468,
      "longitude": 19.968914,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925312,
      "ems": null
    },
    {
      "latitude": 51.45076,
      "longitude": 19.962084,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "7473",
      "timestamp": 1663925324,
      "ems": null
    },
    {
      "latitude": 51.44944,
      "longitude": 19.959869,
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
      "heading": 225,
      "squawk": "7473",
      "timestamp": 1663925329,
      "ems": null
    },
    {
      "latitude": 51.447018,
      "longitude": 19.955902,
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
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925337,
      "ems": null
    },
    {
      "latitude": 51.446552,
      "longitude": 19.955215,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 223,
      "squawk": "7473",
      "timestamp": 1663925338,
      "ems": null
    },
    {
      "latitude": 51.44553,
      "longitude": 19.95369,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 223,
      "squawk": "7473",
      "timestamp": 1663925342,
      "ems": null
    },
    {
      "latitude": 51.444645,
      "longitude": 19.952316,
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
      "heading": 223,
      "squawk": "7473",
      "timestamp": 1663925346,
      "ems": null
    },
    {
      "latitude": 51.442612,
      "longitude": 19.949167,
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
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925352,
      "ems": null
    },
    {
      "latitude": 51.440918,
      "longitude": 19.946569,
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
      "heading": 223,
      "squawk": "7473",
      "timestamp": 1663925358,
      "ems": null
    },
    {
      "latitude": 51.439133,
      "longitude": 19.943823,
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
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925364,
      "ems": null
    },
    {
      "latitude": 51.437523,
      "longitude": 19.941406,
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
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925370,
      "ems": null
    },
    {
      "latitude": 51.435616,
      "longitude": 19.938507,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925376,
      "ems": null
    },
    {
      "latitude": 51.433846,
      "longitude": 19.93576,
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
      "heading": 223,
      "squawk": "7473",
      "timestamp": 1663925382,
      "ems": null
    },
    {
      "latitude": 51.432129,
      "longitude": 19.933283,
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
      "heading": 221,
      "squawk": "7473",
      "timestamp": 1663925388,
      "ems": null
    },
    {
      "latitude": 51.430298,
      "longitude": 19.930536,
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
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925394,
      "ems": null
    },
    {
      "latitude": 51.428726,
      "longitude": 19.927979,
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
      "heading": 225,
      "squawk": "7473",
      "timestamp": 1663925400,
      "ems": null
    },
    {
      "latitude": 51.427002,
      "longitude": 19.92519,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925406,
      "ems": null
    },
    {
      "latitude": 51.425217,
      "longitude": 19.922443,
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
      "heading": 222,
      "squawk": "7473",
      "timestamp": 1663925412,
      "ems": null
    },
    {
      "latitude": 51.423157,
      "longitude": 19.919697,
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
      "heading": 219,
      "squawk": "7473",
      "timestamp": 1663925418,
      "ems": null
    },
    {
      "latitude": 51.421234,
      "longitude": 19.917099,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 222,
      "squawk": "7473",
      "timestamp": 1663925424,
      "ems": null
    },
    {
      "latitude": 51.419369,
      "longitude": 19.914169,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 225,
      "squawk": "7473",
      "timestamp": 1663925430,
      "ems": null
    },
    {
      "latitude": 51.417786,
      "longitude": 19.911423,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 227,
      "squawk": "7473",
      "timestamp": 1663925436,
      "ems": null
    },
    {
      "latitude": 51.416855,
      "longitude": 19.909744,
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
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925439,
      "ems": null
    },
    {
      "latitude": 51.416107,
      "longitude": 19.908266,
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
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925442,
      "ems": null
    },
    {
      "latitude": 51.415237,
      "longitude": 19.906633,
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
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925445,
      "ems": null
    },
    {
      "latitude": 51.414413,
      "longitude": 19.905148,
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
      "heading": 228,
      "squawk": "7473",
      "timestamp": 1663925448,
      "ems": null
    },
    {
      "latitude": 51.413635,
      "longitude": 19.903812,
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
      "heading": 228,
      "squawk": "7473",
      "timestamp": 1663925451,
      "ems": null
    },
    {
      "latitude": 51.412849,
      "longitude": 19.902344,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925454,
      "ems": null
    },
    {
      "latitude": 51.412079,
      "longitude": 19.900694,
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
      "heading": 233,
      "squawk": "7473",
      "timestamp": 1663925457,
      "ems": null
    },
    {
      "latitude": 51.411392,
      "longitude": 19.899136,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 233,
      "squawk": "7473",
      "timestamp": 1663925460,
      "ems": null
    },
    {
      "latitude": 51.409779,
      "longitude": 19.896011,
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
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925466,
      "ems": null
    },
    {
      "latitude": 51.408054,
      "longitude": 19.892654,
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
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925472,
      "ems": null
    },
    {
      "latitude": 51.40654,
      "longitude": 19.889931,
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
      "heading": 227,
      "squawk": "7473",
      "timestamp": 1663925478,
      "ems": null
    },
    {
      "latitude": 51.404797,
      "longitude": 19.886856,
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
      "heading": 227,
      "squawk": "7473",
      "timestamp": 1663925484,
      "ems": null
    },
    {
      "latitude": 51.403839,
      "longitude": 19.885403,
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
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925487,
      "ems": null
    },
    {
      "latitude": 51.402981,
      "longitude": 19.883957,
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
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925490,
      "ems": null
    },
    {
      "latitude": 51.402054,
      "longitude": 19.882507,
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
      "heading": 225,
      "squawk": "7473",
      "timestamp": 1663925493,
      "ems": null
    },
    {
      "latitude": 51.400375,
      "longitude": 19.879684,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 226,
      "squawk": "7473",
      "timestamp": 1663925499,
      "ems": null
    },
    {
      "latitude": 51.39856,
      "longitude": 19.876328,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 232,
      "squawk": "7473",
      "timestamp": 1663925505,
      "ems": null
    },
    {
      "latitude": 51.397842,
      "longitude": 19.87464,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7473",
      "timestamp": 1663925508,
      "ems": null
    },
    {
      "latitude": 51.397064,
      "longitude": 19.872709,
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
      "heading": 237,
      "squawk": "7473",
      "timestamp": 1663925512,
      "ems": null
    },
    {
      "latitude": 51.396465,
      "longitude": 19.87114,
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
      "heading": 238,
      "squawk": "7473",
      "timestamp": 1663925514,
      "ems": null
    },
    {
      "latitude": 51.395767,
      "longitude": 19.869232,
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
      "heading": 238,
      "squawk": "7473",
      "timestamp": 1663925517,
      "ems": null
    },
    {
      "latitude": 51.395142,
      "longitude": 19.867661,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 237,
      "squawk": "7473",
      "timestamp": 1663925520,
      "ems": null
    },
    {
      "latitude": 51.394318,
      "longitude": 19.86573,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 237,
      "squawk": "7473",
      "timestamp": 1663925524,
      "ems": null
    },
    {
      "latitude": 51.393631,
      "longitude": 19.863874,
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
      "heading": 237,
      "squawk": "7473",
      "timestamp": 1663925527,
      "ems": null
    },
    {
      "latitude": 51.392925,
      "longitude": 19.862137,
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
      "heading": 238,
      "squawk": "7473",
      "timestamp": 1663925529,
      "ems": null
    },
    {
      "latitude": 51.392303,
      "longitude": 19.860386,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 241,
      "squawk": "7473",
      "timestamp": 1663925532,
      "ems": null
    },
    {
      "latitude": 51.391022,
      "longitude": 19.856749,
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
      "heading": 239,
      "squawk": "7473",
      "timestamp": 1663925539,
      "ems": null
    },
    {
      "latitude": 51.389713,
      "longitude": 19.853287,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 237,
      "squawk": "7473",
      "timestamp": 1663925545,
      "ems": null
    },
    {
      "latitude": 51.388363,
      "longitude": 19.850464,
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
      "heading": 229,
      "squawk": "7473",
      "timestamp": 1663925551,
      "ems": null
    },
    {
      "latitude": 51.387634,
      "longitude": 19.849251,
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
      "heading": 225,
      "squawk": "7473",
      "timestamp": 1663925554,
      "ems": null
    },
    {
      "latitude": 51.386902,
      "longitude": 19.848139,
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
      "heading": 222,
      "squawk": "7473",
      "timestamp": 1663925557,
      "ems": null
    },
    {
      "latitude": 51.386082,
      "longitude": 19.846878,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 223,
      "squawk": "7473",
      "timestamp": 1663925559,
      "ems": null
    },
    {
      "latitude": 51.385254,
      "longitude": 19.845762,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 220,
      "squawk": "7473",
      "timestamp": 1663925563,
      "ems": null
    },
    {
      "latitude": 51.384453,
      "longitude": 19.844666,
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
      "heading": 218,
      "squawk": "7473",
      "timestamp": 1663925566,
      "ems": null
    },
    {
      "latitude": 51.383663,
      "longitude": 19.843674,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 218,
      "squawk": "7473",
      "timestamp": 1663925569,
      "ems": null
    },
    {
      "latitude": 51.382782,
      "longitude": 19.842571,
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
      "heading": 218,
      "squawk": "7473",
      "timestamp": 1663925572,
      "ems": null
    },
    {
      "latitude": 51.381985,
      "longitude": 19.841537,
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
      "heading": 219,
      "squawk": "7473",
      "timestamp": 1663925575,
      "ems": null
    },
    {
      "latitude": 51.38118,
      "longitude": 19.840418,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7473",
      "timestamp": 1663925578,
      "ems": null
    },
    {
      "latitude": 51.379471,
      "longitude": 19.837799,
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
      "heading": 225,
      "squawk": "7473",
      "timestamp": 1663925584,
      "ems": null
    },
    {
      "latitude": 51.378021,
      "longitude": 19.835297,
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
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925590,
      "ems": null
    },
    {
      "latitude": 51.377243,
      "longitude": 19.833662,
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
      "heading": 233,
      "squawk": "7473",
      "timestamp": 1663925593,
      "ems": null
    },
    {
      "latitude": 51.376633,
      "longitude": 19.832153,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 238,
      "squawk": "7473",
      "timestamp": 1663925596,
      "ems": null
    },
    {
      "latitude": 51.376099,
      "longitude": 19.83062,
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
      "heading": 241,
      "squawk": "7473",
      "timestamp": 1663925599,
      "ems": null
    },
    {
      "latitude": 51.375549,
      "longitude": 19.828913,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "7473",
      "timestamp": 1663925602,
      "ems": null
    },
    {
      "latitude": 51.374954,
      "longitude": 19.827057,
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
      "heading": 241,
      "squawk": "7473",
      "timestamp": 1663925605,
      "ems": null
    },
    {
      "latitude": 51.374397,
      "longitude": 19.825439,
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
      "heading": 240,
      "squawk": "7473",
      "timestamp": 1663925608,
      "ems": null
    },
    {
      "latitude": 51.373795,
      "longitude": 19.823761,
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
      "heading": 238,
      "squawk": "7473",
      "timestamp": 1663925611,
      "ems": null
    },
    {
      "latitude": 51.373077,
      "longitude": 19.822157,
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
      "heading": 235,
      "squawk": "7473",
      "timestamp": 1663925614,
      "ems": null
    },
    {
      "latitude": 51.372437,
      "longitude": 19.820673,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 233,
      "squawk": "7473",
      "timestamp": 1663925617,
      "ems": null
    },
    {
      "latitude": 51.371155,
      "longitude": 19.81748,
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
      "heading": 240,
      "squawk": "7473",
      "timestamp": 1663925623,
      "ems": null
    },
    {
      "latitude": 51.369976,
      "longitude": 19.81369,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 246,
      "squawk": "7473",
      "timestamp": 1663925629,
      "ems": null
    },
    {
      "latitude": 51.369137,
      "longitude": 19.809952,
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
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663925635,
      "ems": null
    },
    {
      "latitude": 51.369049,
      "longitude": 19.807978,
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
      "heading": 270,
      "squawk": "7473",
      "timestamp": 1663925638,
      "ems": null
    },
    {
      "latitude": 51.369324,
      "longitude": 19.806061,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 287,
      "squawk": "7473",
      "timestamp": 1663925641,
      "ems": null
    },
    {
      "latitude": 51.369881,
      "longitude": 19.804077,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 296,
      "squawk": "7473",
      "timestamp": 1663925644,
      "ems": null
    },
    {
      "latitude": 51.370441,
      "longitude": 19.80217,
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
      "heading": 295,
      "squawk": "7473",
      "timestamp": 1663925647,
      "ems": null
    },
    {
      "latitude": 51.370953,
      "longitude": 19.800262,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 293,
      "squawk": "7473",
      "timestamp": 1663925650,
      "ems": null
    },
    {
      "latitude": 51.371429,
      "longitude": 19.798403,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 291,
      "squawk": "7473",
      "timestamp": 1663925653,
      "ems": null
    },
    {
      "latitude": 51.371933,
      "longitude": 19.796175,
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
      "heading": 289,
      "squawk": "7473",
      "timestamp": 1663925656,
      "ems": null
    },
    {
      "latitude": 51.372303,
      "longitude": 19.794235,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 287,
      "squawk": "7473",
      "timestamp": 1663925659,
      "ems": null
    },
    {
      "latitude": 51.372677,
      "longitude": 19.792175,
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
      "heading": 284,
      "squawk": "7473",
      "timestamp": 1663925662,
      "ems": null
    },
    {
      "latitude": 51.372955,
      "longitude": 19.790344,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 282,
      "squawk": "7473",
      "timestamp": 1663925665,
      "ems": null
    },
    {
      "latitude": 51.373234,
      "longitude": 19.788208,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 282,
      "squawk": "7473",
      "timestamp": 1663925668,
      "ems": null
    },
    {
      "latitude": 51.373466,
      "longitude": 19.786377,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 282,
      "squawk": "7473",
      "timestamp": 1663925671,
      "ems": null
    },
    {
      "latitude": 51.373718,
      "longitude": 19.784595,
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
      "heading": 282,
      "squawk": "7473",
      "timestamp": 1663925674,
      "ems": null
    },
    {
      "latitude": 51.373993,
      "longitude": 19.78274,
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
      "heading": 283,
      "squawk": "7473",
      "timestamp": 1663925677,
      "ems": null
    },
    {
      "latitude": 51.374222,
      "longitude": 19.780958,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 280,
      "squawk": "7473",
      "timestamp": 1663925680,
      "ems": null
    },
    {
      "latitude": 51.374397,
      "longitude": 19.779358,
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
      "heading": 280,
      "squawk": "7473",
      "timestamp": 1663925683,
      "ems": null
    },
    {
      "latitude": 51.374634,
      "longitude": 19.777544,
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
      "heading": 281,
      "squawk": "7473",
      "timestamp": 1663925686,
      "ems": null
    },
    {
      "latitude": 51.374908,
      "longitude": 19.775539,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 281,
      "squawk": "7473",
      "timestamp": 1663925689,
      "ems": null
    },
    {
      "latitude": 51.375423,
      "longitude": 19.772034,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 284,
      "squawk": "7473",
      "timestamp": 1663925695,
      "ems": null
    },
    {
      "latitude": 51.376072,
      "longitude": 19.768295,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 287,
      "squawk": "7473",
      "timestamp": 1663925701,
      "ems": null
    },
    {
      "latitude": 51.376785,
      "longitude": 19.764479,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 284,
      "squawk": "7473",
      "timestamp": 1663925707,
      "ems": null
    },
    {
      "latitude": 51.377243,
      "longitude": 19.760841,
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
      "heading": 278,
      "squawk": "7473",
      "timestamp": 1663925713,
      "ems": null
    },
    {
      "latitude": 51.377563,
      "longitude": 19.757156,
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
      "heading": 278,
      "squawk": "7473",
      "timestamp": 1663925719,
      "ems": null
    },
    {
      "latitude": 51.37775,
      "longitude": 19.755249,
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
      "heading": 279,
      "squawk": "7473",
      "timestamp": 1663925722,
      "ems": null
    },
    {
      "latitude": 51.377937,
      "longitude": 19.753494,
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
      "heading": 279,
      "squawk": "7473",
      "timestamp": 1663925725,
      "ems": null
    },
    {
      "latitude": 51.37812,
      "longitude": 19.751511,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 276,
      "squawk": "7473",
      "timestamp": 1663925728,
      "ems": null
    },
    {
      "latitude": 51.37825,
      "longitude": 19.749557,
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
      "heading": 276,
      "squawk": "7473",
      "timestamp": 1663925732,
      "ems": null
    },
    {
      "latitude": 51.378353,
      "longitude": 19.747391,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 275,
      "squawk": "7473",
      "timestamp": 1663925734,
      "ems": null
    },
    {
      "latitude": 51.378448,
      "longitude": 19.745255,
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
      "heading": 272,
      "squawk": "7473",
      "timestamp": 1663925737,
      "ems": null
    },
    {
      "latitude": 51.378494,
      "longitude": 19.743042,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 271,
      "squawk": "7473",
      "timestamp": 1663925740,
      "ems": null
    },
    {
      "latitude": 51.378479,
      "longitude": 19.740799,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 267,
      "squawk": "7473",
      "timestamp": 1663925743,
      "ems": null
    },
    {
      "latitude": 51.378342,
      "longitude": 19.738571,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663925747,
      "ems": null
    },
    {
      "latitude": 51.378075,
      "longitude": 19.736252,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663925749,
      "ems": null
    },
    {
      "latitude": 51.377701,
      "longitude": 19.734118,
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
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663925752,
      "ems": null
    },
    {
      "latitude": 51.377243,
      "longitude": 19.731817,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663925755,
      "ems": null
    },
    {
      "latitude": 51.376724,
      "longitude": 19.729996,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 245,
      "squawk": "7473",
      "timestamp": 1663925758,
      "ems": null
    },
    {
      "latitude": 51.375961,
      "longitude": 19.727957,
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
      "heading": 237,
      "squawk": "7473",
      "timestamp": 1663925761,
      "ems": null
    },
    {
      "latitude": 51.375137,
      "longitude": 19.726101,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 232,
      "squawk": "7473",
      "timestamp": 1663925764,
      "ems": null
    },
    {
      "latitude": 51.374451,
      "longitude": 19.724615,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 233,
      "squawk": "7473",
      "timestamp": 1663925767,
      "ems": null
    },
    {
      "latitude": 51.373562,
      "longitude": 19.722672,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 233,
      "squawk": "7473",
      "timestamp": 1663925770,
      "ems": null
    },
    {
      "latitude": 51.372803,
      "longitude": 19.721201,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663925773,
      "ems": null
    },
    {
      "latitude": 51.371979,
      "longitude": 19.719772,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663925777,
      "ems": null
    },
    {
      "latitude": 51.371063,
      "longitude": 19.71838,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 223,
      "squawk": "7473",
      "timestamp": 1663925780,
      "ems": null
    },
    {
      "latitude": 51.370285,
      "longitude": 19.717266,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 220,
      "squawk": "7473",
      "timestamp": 1663925782,
      "ems": null
    },
    {
      "latitude": 51.369415,
      "longitude": 19.71611,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 218,
      "squawk": "7473",
      "timestamp": 1663925785,
      "ems": null
    },
    {
      "latitude": 51.368637,
      "longitude": 19.715263,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "7473",
      "timestamp": 1663925788,
      "ems": null
    },
    {
      "latitude": 51.367649,
      "longitude": 19.714279,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663925792,
      "ems": null
    },
    {
      "latitude": 51.36676,
      "longitude": 19.713482,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663925794,
      "ems": null
    },
    {
      "latitude": 51.365891,
      "longitude": 19.712591,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663925797,
      "ems": null
    },
    {
      "latitude": 51.364948,
      "longitude": 19.711761,
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
      "heading": 209,
      "squawk": "7473",
      "timestamp": 1663925800,
      "ems": null
    },
    {
      "latitude": 51.364059,
      "longitude": 19.710957,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 209,
      "squawk": "7473",
      "timestamp": 1663925804,
      "ems": null
    },
    {
      "latitude": 51.363178,
      "longitude": 19.710236,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 209,
      "squawk": "7473",
      "timestamp": 1663925806,
      "ems": null
    },
    {
      "latitude": 51.362366,
      "longitude": 19.709398,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663925809,
      "ems": null
    },
    {
      "latitude": 51.361408,
      "longitude": 19.708633,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 208,
      "squawk": "7473",
      "timestamp": 1663925812,
      "ems": null
    },
    {
      "latitude": 51.36058,
      "longitude": 19.70784,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663925816,
      "ems": null
    },
    {
      "latitude": 51.359802,
      "longitude": 19.706875,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 218,
      "squawk": "7473",
      "timestamp": 1663925818,
      "ems": null
    },
    {
      "latitude": 51.358944,
      "longitude": 19.705811,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663925822,
      "ems": null
    },
    {
      "latitude": 51.357361,
      "longitude": 19.704132,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "7473",
      "timestamp": 1663925828,
      "ems": null
    },
    {
      "latitude": 51.356598,
      "longitude": 19.703089,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 222,
      "squawk": "7473",
      "timestamp": 1663925831,
      "ems": null
    },
    {
      "latitude": 51.355965,
      "longitude": 19.70192,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 232,
      "squawk": "7473",
      "timestamp": 1663925834,
      "ems": null
    },
    {
      "latitude": 51.355408,
      "longitude": 19.700342,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 242,
      "squawk": "7473",
      "timestamp": 1663925837,
      "ems": null
    },
    {
      "latitude": 51.35508,
      "longitude": 19.699097,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663925840,
      "ems": null
    },
    {
      "latitude": 51.354706,
      "longitude": 19.697113,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 257,
      "squawk": "7473",
      "timestamp": 1663925843,
      "ems": null
    },
    {
      "latitude": 51.35466,
      "longitude": 19.695663,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 265,
      "squawk": "7473",
      "timestamp": 1663925845,
      "ems": null
    },
    {
      "latitude": 51.354721,
      "longitude": 19.693735,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 276,
      "squawk": "7473",
      "timestamp": 1663925849,
      "ems": null
    },
    {
      "latitude": 51.354893,
      "longitude": 19.692001,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 281,
      "squawk": "7473",
      "timestamp": 1663925852,
      "ems": null
    },
    {
      "latitude": 51.355171,
      "longitude": 19.690552,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 288,
      "squawk": "7473",
      "timestamp": 1663925855,
      "ems": null
    },
    {
      "latitude": 51.355591,
      "longitude": 19.689133,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "7473",
      "timestamp": 1663925858,
      "ems": null
    },
    {
      "latitude": 51.356186,
      "longitude": 19.687649,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 305,
      "squawk": "7473",
      "timestamp": 1663925861,
      "ems": null
    },
    {
      "latitude": 51.3568,
      "longitude": 19.686432,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 306,
      "squawk": "7473",
      "timestamp": 1663925864,
      "ems": null
    },
    {
      "latitude": 51.35733,
      "longitude": 19.6852,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 306,
      "squawk": "7473",
      "timestamp": 1663925866,
      "ems": null
    },
    {
      "latitude": 51.358017,
      "longitude": 19.683788,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 307,
      "squawk": "7473",
      "timestamp": 1663925870,
      "ems": null
    },
    {
      "latitude": 51.358612,
      "longitude": 19.682526,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 307,
      "squawk": "7473",
      "timestamp": 1663925873,
      "ems": null
    },
    {
      "latitude": 51.359222,
      "longitude": 19.681244,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 307,
      "squawk": "7473",
      "timestamp": 1663925876,
      "ems": null
    },
    {
      "latitude": 51.359848,
      "longitude": 19.679928,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 307,
      "squawk": "7473",
      "timestamp": 1663925879,
      "ems": null
    },
    {
      "latitude": 51.360397,
      "longitude": 19.678741,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 306,
      "squawk": "7473",
      "timestamp": 1663925882,
      "ems": null
    },
    {
      "latitude": 51.361084,
      "longitude": 19.67733,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 308,
      "squawk": "7473",
      "timestamp": 1663925885,
      "ems": null
    },
    {
      "latitude": 51.361725,
      "longitude": 19.676067,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 309,
      "squawk": "7473",
      "timestamp": 1663925888,
      "ems": null
    },
    {
      "latitude": 51.362457,
      "longitude": 19.674955,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 320,
      "squawk": "7473",
      "timestamp": 1663925891,
      "ems": null
    },
    {
      "latitude": 51.363274,
      "longitude": 19.674149,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 331,
      "squawk": "7473",
      "timestamp": 1663925894,
      "ems": null
    },
    {
      "latitude": 51.364243,
      "longitude": 19.673693,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 347,
      "squawk": "7473",
      "timestamp": 1663925897,
      "ems": null
    },
    {
      "latitude": 51.365204,
      "longitude": 19.673544,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 358,
      "squawk": "7473",
      "timestamp": 1663925900,
      "ems": null
    },
    {
      "latitude": 51.366257,
      "longitude": 19.673693,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "7473",
      "timestamp": 1663925903,
      "ems": null
    },
    {
      "latitude": 51.367416,
      "longitude": 19.674149,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 15,
      "squawk": "7473",
      "timestamp": 1663925906,
      "ems": null
    },
    {
      "latitude": 51.368252,
      "longitude": 19.674683,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 24,
      "squawk": "7473",
      "timestamp": 1663925909,
      "ems": null
    },
    {
      "latitude": 51.369091,
      "longitude": 19.675369,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 27,
      "squawk": "7473",
      "timestamp": 1663925912,
      "ems": null
    },
    {
      "latitude": 51.369873,
      "longitude": 19.675995,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663925915,
      "ems": null
    },
    {
      "latitude": 51.370674,
      "longitude": 19.676743,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 29,
      "squawk": "7473",
      "timestamp": 1663925918,
      "ems": null
    },
    {
      "latitude": 51.371464,
      "longitude": 19.677505,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663925921,
      "ems": null
    },
    {
      "latitude": 51.372257,
      "longitude": 19.678192,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 29,
      "squawk": "7473",
      "timestamp": 1663925924,
      "ems": null
    },
    {
      "latitude": 51.373032,
      "longitude": 19.678963,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663925927,
      "ems": null
    },
    {
      "latitude": 51.374027,
      "longitude": 19.679947,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663925930,
      "ems": null
    },
    {
      "latitude": 51.375412,
      "longitude": 19.681339,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663925935,
      "ems": null
    },
    {
      "latitude": 51.376354,
      "longitude": 19.682236,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663925939,
      "ems": null
    },
    {
      "latitude": 51.376957,
      "longitude": 19.682846,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663925941,
      "ems": null
    },
    {
      "latitude": 51.378635,
      "longitude": 19.684601,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663925947,
      "ems": null
    },
    {
      "latitude": 51.387039,
      "longitude": 19.692993,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663925983,
      "ems": null
    },
    {
      "latitude": 51.389008,
      "longitude": 19.694923,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663925990,
      "ems": null
    },
    {
      "latitude": 51.390457,
      "longitude": 19.69635,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663925996,
      "ems": null
    },
    {
      "latitude": 51.392136,
      "longitude": 19.697952,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926002,
      "ems": null
    },
    {
      "latitude": 51.393902,
      "longitude": 19.699707,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926008,
      "ems": null
    },
    {
      "latitude": 51.395508,
      "longitude": 19.701307,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 33,
      "squawk": "7473",
      "timestamp": 1663926014,
      "ems": null
    },
    {
      "latitude": 51.397202,
      "longitude": 19.703089,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926020,
      "ems": null
    },
    {
      "latitude": 51.398712,
      "longitude": 19.704796,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 42,
      "squawk": "7473",
      "timestamp": 1663926026,
      "ems": null
    },
    {
      "latitude": 51.399303,
      "longitude": 19.706039,
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
      "heading": 52,
      "squawk": "7473",
      "timestamp": 1663926029,
      "ems": null
    },
    {
      "latitude": 51.399815,
      "longitude": 19.707413,
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
      "heading": 63,
      "squawk": "7473",
      "timestamp": 1663926032,
      "ems": null
    },
    {
      "latitude": 51.400223,
      "longitude": 19.709101,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 73,
      "squawk": "7473",
      "timestamp": 1663926035,
      "ems": null
    },
    {
      "latitude": 51.400375,
      "longitude": 19.710846,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 83,
      "squawk": "7473",
      "timestamp": 1663926038,
      "ems": null
    },
    {
      "latitude": 51.400406,
      "longitude": 19.712442,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 93,
      "squawk": "7473",
      "timestamp": 1663926041,
      "ems": null
    },
    {
      "latitude": 51.400188,
      "longitude": 19.714203,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 102,
      "squawk": "7473",
      "timestamp": 1663926045,
      "ems": null
    },
    {
      "latitude": 51.399857,
      "longitude": 19.715782,
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
      "heading": 113,
      "squawk": "7473",
      "timestamp": 1663926047,
      "ems": null
    },
    {
      "latitude": 51.399307,
      "longitude": 19.717266,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 124,
      "squawk": "7473",
      "timestamp": 1663926051,
      "ems": null
    },
    {
      "latitude": 51.398666,
      "longitude": 19.718603,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 128,
      "squawk": "7473",
      "timestamp": 1663926053,
      "ems": null
    },
    {
      "latitude": 51.397907,
      "longitude": 19.720154,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 125,
      "squawk": "7473",
      "timestamp": 1663926057,
      "ems": null
    },
    {
      "latitude": 51.397339,
      "longitude": 19.721573,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 123,
      "squawk": "7473",
      "timestamp": 1663926059,
      "ems": null
    },
    {
      "latitude": 51.396744,
      "longitude": 19.723053,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 122,
      "squawk": "7473",
      "timestamp": 1663926063,
      "ems": null
    },
    {
      "latitude": 51.396103,
      "longitude": 19.724615,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 124,
      "squawk": "7473",
      "timestamp": 1663926066,
      "ems": null
    },
    {
      "latitude": 51.395462,
      "longitude": 19.725878,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 133,
      "squawk": "7473",
      "timestamp": 1663926068,
      "ems": null
    },
    {
      "latitude": 51.394455,
      "longitude": 19.72714,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 146,
      "squawk": "7473",
      "timestamp": 1663926072,
      "ems": null
    },
    {
      "latitude": 51.393539,
      "longitude": 19.727882,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 155,
      "squawk": "7473",
      "timestamp": 1663926074,
      "ems": null
    },
    {
      "latitude": 51.392319,
      "longitude": 19.728622,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 163,
      "squawk": "7473",
      "timestamp": 1663926078,
      "ems": null
    },
    {
      "latitude": 51.391251,
      "longitude": 19.728996,
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
      "heading": 169,
      "squawk": "7473",
      "timestamp": 1663926080,
      "ems": null
    },
    {
      "latitude": 51.3899,
      "longitude": 19.729004,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 182,
      "squawk": "7473",
      "timestamp": 1663926084,
      "ems": null
    },
    {
      "latitude": 51.388641,
      "longitude": 19.728622,
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
      "heading": 194,
      "squawk": "7473",
      "timestamp": 1663926087,
      "ems": null
    },
    {
      "latitude": 51.387634,
      "longitude": 19.728031,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 200,
      "squawk": "7473",
      "timestamp": 1663926089,
      "ems": null
    },
    {
      "latitude": 51.386307,
      "longitude": 19.72714,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 203,
      "squawk": "7473",
      "timestamp": 1663926092,
      "ems": null
    },
    {
      "latitude": 51.385059,
      "longitude": 19.726257,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 204,
      "squawk": "7473",
      "timestamp": 1663926095,
      "ems": null
    },
    {
      "latitude": 51.383846,
      "longitude": 19.725418,
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
      "heading": 203,
      "squawk": "7473",
      "timestamp": 1663926098,
      "ems": null
    },
    {
      "latitude": 51.382915,
      "longitude": 19.724731,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 204,
      "squawk": "7473",
      "timestamp": 1663926101,
      "ems": null
    },
    {
      "latitude": 51.381729,
      "longitude": 19.723873,
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
      "heading": 205,
      "squawk": "7473",
      "timestamp": 1663926104,
      "ems": null
    },
    {
      "latitude": 51.380123,
      "longitude": 19.722672,
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
      "heading": 206,
      "squawk": "7473",
      "timestamp": 1663926108,
      "ems": null
    },
    {
      "latitude": 51.37912,
      "longitude": 19.721796,
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
      "heading": 206,
      "squawk": "7473",
      "timestamp": 1663926110,
      "ems": null
    },
    {
      "latitude": 51.377792,
      "longitude": 19.720757,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 207,
      "squawk": "7473",
      "timestamp": 1663926113,
      "ems": null
    },
    {
      "latitude": 51.376602,
      "longitude": 19.719717,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 209,
      "squawk": "7473",
      "timestamp": 1663926116,
      "ems": null
    },
    {
      "latitude": 51.375469,
      "longitude": 19.718628,
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
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663926119,
      "ems": null
    },
    {
      "latitude": 51.374397,
      "longitude": 19.717636,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663926122,
      "ems": null
    },
    {
      "latitude": 51.373188,
      "longitude": 19.716492,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 209,
      "squawk": "7473",
      "timestamp": 1663926126,
      "ems": null
    },
    {
      "latitude": 51.37207,
      "longitude": 19.715424,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 209,
      "squawk": "7473",
      "timestamp": 1663926129,
      "ems": null
    },
    {
      "latitude": 51.371094,
      "longitude": 19.714584,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663926131,
      "ems": null
    },
    {
      "latitude": 51.369919,
      "longitude": 19.713408,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 211,
      "squawk": "7473",
      "timestamp": 1663926135,
      "ems": null
    },
    {
      "latitude": 51.367832,
      "longitude": 19.711456,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663926141,
      "ems": null
    },
    {
      "latitude": 51.365936,
      "longitude": 19.709696,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "7473",
      "timestamp": 1663926147,
      "ems": null
    },
    {
      "latitude": 51.364063,
      "longitude": 19.707947,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663926153,
      "ems": null
    },
    {
      "latitude": 51.362106,
      "longitude": 19.706192,
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
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663926159,
      "ems": null
    },
    {
      "latitude": 51.360306,
      "longitude": 19.704351,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 211,
      "squawk": "7473",
      "timestamp": 1663926165,
      "ems": null
    },
    {
      "latitude": 51.35857,
      "longitude": 19.702835,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 208,
      "squawk": "7473",
      "timestamp": 1663926171,
      "ems": null
    },
    {
      "latitude": 51.356827,
      "longitude": 19.701382,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 205,
      "squawk": "7473",
      "timestamp": 1663926177,
      "ems": null
    },
    {
      "latitude": 51.355179,
      "longitude": 19.6996,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663926183,
      "ems": null
    },
    {
      "latitude": 51.354568,
      "longitude": 19.698257,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 236,
      "squawk": "7473",
      "timestamp": 1663926186,
      "ems": null
    },
    {
      "latitude": 51.35408,
      "longitude": 19.696928,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 244,
      "squawk": "7473",
      "timestamp": 1663926189,
      "ems": null
    },
    {
      "latitude": 51.35376,
      "longitude": 19.695147,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663926192,
      "ems": null
    },
    {
      "latitude": 51.353577,
      "longitude": 19.693291,
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
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663926195,
      "ems": null
    },
    {
      "latitude": 51.353588,
      "longitude": 19.692001,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 274,
      "squawk": "7473",
      "timestamp": 1663926198,
      "ems": null
    },
    {
      "latitude": 51.353867,
      "longitude": 19.690094,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 286,
      "squawk": "7473",
      "timestamp": 1663926201,
      "ems": null
    },
    {
      "latitude": 51.35424,
      "longitude": 19.688568,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 292,
      "squawk": "7473",
      "timestamp": 1663926204,
      "ems": null
    },
    {
      "latitude": 51.354538,
      "longitude": 19.687574,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 294,
      "squawk": "7473",
      "timestamp": 1663926206,
      "ems": null
    },
    {
      "latitude": 51.355171,
      "longitude": 19.685669,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 301,
      "squawk": "7473",
      "timestamp": 1663926210,
      "ems": null
    },
    {
      "latitude": 51.355732,
      "longitude": 19.684372,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 301,
      "squawk": "7473",
      "timestamp": 1663926213,
      "ems": null
    },
    {
      "latitude": 51.356232,
      "longitude": 19.683046,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 302,
      "squawk": "7473",
      "timestamp": 1663926216,
      "ems": null
    },
    {
      "latitude": 51.356781,
      "longitude": 19.681709,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 302,
      "squawk": "7473",
      "timestamp": 1663926219,
      "ems": null
    },
    {
      "latitude": 51.357361,
      "longitude": 19.680252,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 303,
      "squawk": "7473",
      "timestamp": 1663926222,
      "ems": null
    },
    {
      "latitude": 51.357971,
      "longitude": 19.678888,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 304,
      "squawk": "7473",
      "timestamp": 1663926225,
      "ems": null
    },
    {
      "latitude": 51.358566,
      "longitude": 19.677479,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 305,
      "squawk": "7473",
      "timestamp": 1663926228,
      "ems": null
    },
    {
      "latitude": 51.359116,
      "longitude": 19.676216,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 304,
      "squawk": "7473",
      "timestamp": 1663926231,
      "ems": null
    },
    {
      "latitude": 51.359756,
      "longitude": 19.674881,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 306,
      "squawk": "7473",
      "timestamp": 1663926234,
      "ems": null
    },
    {
      "latitude": 51.360386,
      "longitude": 19.673462,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 305,
      "squawk": "7473",
      "timestamp": 1663926237,
      "ems": null
    },
    {
      "latitude": 51.361588,
      "longitude": 19.670797,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 305,
      "squawk": "7473",
      "timestamp": 1663926243,
      "ems": null
    },
    {
      "latitude": 51.362411,
      "longitude": 19.669611,
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
      "heading": 329,
      "squawk": "7473",
      "timestamp": 1663926246,
      "ems": null
    },
    {
      "latitude": 51.363235,
      "longitude": 19.669239,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 354,
      "squawk": "7473",
      "timestamp": 1663926249,
      "ems": null
    },
    {
      "latitude": 51.364342,
      "longitude": 19.669495,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "7473",
      "timestamp": 1663926252,
      "ems": null
    },
    {
      "latitude": 51.36525,
      "longitude": 19.670353,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 35,
      "squawk": "7473",
      "timestamp": 1663926255,
      "ems": null
    },
    {
      "latitude": 51.366028,
      "longitude": 19.671392,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 41,
      "squawk": "7473",
      "timestamp": 1663926258,
      "ems": null
    },
    {
      "latitude": 51.36681,
      "longitude": 19.67247,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 40,
      "squawk": "7473",
      "timestamp": 1663926261,
      "ems": null
    },
    {
      "latitude": 51.367584,
      "longitude": 19.673321,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 35,
      "squawk": "7473",
      "timestamp": 1663926264,
      "ems": null
    },
    {
      "latitude": 51.368393,
      "longitude": 19.674225,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926267,
      "ems": null
    },
    {
      "latitude": 51.369183,
      "longitude": 19.675064,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 34,
      "squawk": "7473",
      "timestamp": 1663926270,
      "ems": null
    },
    {
      "latitude": 51.369965,
      "longitude": 19.675846,
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
      "heading": 34,
      "squawk": "7473",
      "timestamp": 1663926273,
      "ems": null
    },
    {
      "latitude": 51.370605,
      "longitude": 19.676588,
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
      "heading": 33,
      "squawk": "7473",
      "timestamp": 1663926276,
      "ems": null
    },
    {
      "latitude": 51.371464,
      "longitude": 19.677429,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926279,
      "ems": null
    },
    {
      "latitude": 51.372162,
      "longitude": 19.678146,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926282,
      "ems": null
    },
    {
      "latitude": 51.373901,
      "longitude": 19.679779,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926288,
      "ems": null
    },
    {
      "latitude": 51.374771,
      "longitude": 19.68067,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926291,
      "ems": null
    },
    {
      "latitude": 51.376511,
      "longitude": 19.682453,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926298,
      "ems": null
    },
    {
      "latitude": 51.383469,
      "longitude": 19.68943,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 33,
      "squawk": "7473",
      "timestamp": 1663926327,
      "ems": null
    },
    {
      "latitude": 51.384731,
      "longitude": 19.690704,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926332,
      "ems": null
    },
    {
      "latitude": 51.38649,
      "longitude": 19.6924,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663926339,
      "ems": null
    },
    {
      "latitude": 51.388046,
      "longitude": 19.693958,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 29,
      "squawk": "7473",
      "timestamp": 1663926345,
      "ems": null
    },
    {
      "latitude": 51.38974,
      "longitude": 19.695517,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663926352,
      "ems": null
    },
    {
      "latitude": 51.391296,
      "longitude": 19.696928,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 26,
      "squawk": "7473",
      "timestamp": 1663926357,
      "ems": null
    },
    {
      "latitude": 51.393036,
      "longitude": 19.698338,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 27,
      "squawk": "7473",
      "timestamp": 1663926364,
      "ems": null
    },
    {
      "latitude": 51.394787,
      "longitude": 19.699707,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 26,
      "squawk": "7473",
      "timestamp": 1663926370,
      "ems": null
    },
    {
      "latitude": 51.396278,
      "longitude": 19.701157,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926376,
      "ems": null
    },
    {
      "latitude": 51.397907,
      "longitude": 19.702606,
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
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663926382,
      "ems": null
    },
    {
      "latitude": 51.399677,
      "longitude": 19.704056,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 25,
      "squawk": "7473",
      "timestamp": 1663926388,
      "ems": null
    },
    {
      "latitude": 51.401539,
      "longitude": 19.705582,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663926394,
      "ems": null
    },
    {
      "latitude": 51.40329,
      "longitude": 19.707172,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 29,
      "squawk": "7473",
      "timestamp": 1663926400,
      "ems": null
    },
    {
      "latitude": 51.405121,
      "longitude": 19.708879,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663926406,
      "ems": null
    },
    {
      "latitude": 51.406101,
      "longitude": 19.70993,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 36,
      "squawk": "7473",
      "timestamp": 1663926409,
      "ems": null
    },
    {
      "latitude": 51.40686,
      "longitude": 19.71081,
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
      "heading": 34,
      "squawk": "7473",
      "timestamp": 1663926412,
      "ems": null
    },
    {
      "latitude": 51.407776,
      "longitude": 19.711761,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926415,
      "ems": null
    },
    {
      "latitude": 51.408707,
      "longitude": 19.712677,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926418,
      "ems": null
    },
    {
      "latitude": 51.409607,
      "longitude": 19.713629,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926421,
      "ems": null
    },
    {
      "latitude": 51.411346,
      "longitude": 19.715485,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 35,
      "squawk": "7473",
      "timestamp": 1663926427,
      "ems": null
    },
    {
      "latitude": 51.413086,
      "longitude": 19.717266,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663926433,
      "ems": null
    },
    {
      "latitude": 51.415054,
      "longitude": 19.719271,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663926439,
      "ems": null
    },
    {
      "latitude": 51.416016,
      "longitude": 19.720161,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 29,
      "squawk": "7473",
      "timestamp": 1663926442,
      "ems": null
    },
    {
      "latitude": 51.416992,
      "longitude": 19.720993,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 27,
      "squawk": "7473",
      "timestamp": 1663926445,
      "ems": null
    },
    {
      "latitude": 51.417984,
      "longitude": 19.721722,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 24,
      "squawk": "7473",
      "timestamp": 1663926448,
      "ems": null
    },
    {
      "latitude": 51.418949,
      "longitude": 19.722443,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 25,
      "squawk": "7473",
      "timestamp": 1663926451,
      "ems": null
    },
    {
      "latitude": 51.419998,
      "longitude": 19.72328,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 27,
      "squawk": "7473",
      "timestamp": 1663926454,
      "ems": null
    },
    {
      "latitude": 51.420959,
      "longitude": 19.724096,
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
      "heading": 25,
      "squawk": "7473",
      "timestamp": 1663926457,
      "ems": null
    },
    {
      "latitude": 51.422104,
      "longitude": 19.724838,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 23,
      "squawk": "7473",
      "timestamp": 1663926460,
      "ems": null
    },
    {
      "latitude": 51.423183,
      "longitude": 19.725647,
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
      "heading": 24,
      "squawk": "7473",
      "timestamp": 1663926463,
      "ems": null
    },
    {
      "latitude": 51.424347,
      "longitude": 19.72641,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7473",
      "timestamp": 1663926466,
      "ems": null
    },
    {
      "latitude": 51.425327,
      "longitude": 19.72702,
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
      "heading": 20,
      "squawk": "7473",
      "timestamp": 1663926469,
      "ems": null
    },
    {
      "latitude": 51.426498,
      "longitude": 19.727734,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 20,
      "squawk": "7473",
      "timestamp": 1663926472,
      "ems": null
    },
    {
      "latitude": 51.427734,
      "longitude": 19.728401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663926475,
      "ems": null
    },
    {
      "latitude": 51.428959,
      "longitude": 19.72908,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 18,
      "squawk": "7473",
      "timestamp": 1663926478,
      "ems": null
    },
    {
      "latitude": 51.430115,
      "longitude": 19.729664,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 15,
      "squawk": "7473",
      "timestamp": 1663926481,
      "ems": null
    },
    {
      "latitude": 51.431286,
      "longitude": 19.730072,
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
      "heading": 13,
      "squawk": "7473",
      "timestamp": 1663926484,
      "ems": null
    },
    {
      "latitude": 51.432495,
      "longitude": 19.73048,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 10,
      "squawk": "7473",
      "timestamp": 1663926487,
      "ems": null
    },
    {
      "latitude": 51.433613,
      "longitude": 19.730759,
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
      "heading": 5,
      "squawk": "7473",
      "timestamp": 1663926490,
      "ems": null
    },
    {
      "latitude": 51.434967,
      "longitude": 19.730852,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7473",
      "timestamp": 1663926493,
      "ems": null
    },
    {
      "latitude": 51.436127,
      "longitude": 19.730835,
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
      "heading": 1,
      "squawk": "7473",
      "timestamp": 1663926496,
      "ems": null
    },
    {
      "latitude": 51.437382,
      "longitude": 19.730835,
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
      "heading": 359,
      "squawk": "7473",
      "timestamp": 1663926499,
      "ems": null
    },
    {
      "latitude": 51.438778,
      "longitude": 19.730835,
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
      "heading": 358,
      "squawk": "7473",
      "timestamp": 1663926503,
      "ems": null
    },
    {
      "latitude": 51.439911,
      "longitude": 19.730778,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 358,
      "squawk": "7473",
      "timestamp": 1663926505,
      "ems": null
    },
    {
      "latitude": 51.441292,
      "longitude": 19.730759,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 358,
      "squawk": "7473",
      "timestamp": 1663926508,
      "ems": null
    },
    {
      "latitude": 51.442364,
      "longitude": 19.730606,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 355,
      "squawk": "7473",
      "timestamp": 1663926511,
      "ems": null
    },
    {
      "latitude": 51.443802,
      "longitude": 19.730406,
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
      "heading": 352,
      "squawk": "7473",
      "timestamp": 1663926515,
      "ems": null
    },
    {
      "latitude": 51.444946,
      "longitude": 19.730183,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 352,
      "squawk": "7473",
      "timestamp": 1663926517,
      "ems": null
    },
    {
      "latitude": 51.446182,
      "longitude": 19.729887,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 352,
      "squawk": "7473",
      "timestamp": 1663926520,
      "ems": null
    },
    {
      "latitude": 51.447392,
      "longitude": 19.729538,
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
      "heading": 350,
      "squawk": "7473",
      "timestamp": 1663926523,
      "ems": null
    },
    {
      "latitude": 51.448746,
      "longitude": 19.729218,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 350,
      "squawk": "7473",
      "timestamp": 1663926526,
      "ems": null
    },
    {
      "latitude": 51.450073,
      "longitude": 19.728922,
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
      "heading": 352,
      "squawk": "7473",
      "timestamp": 1663926529,
      "ems": null
    },
    {
      "latitude": 51.452744,
      "longitude": 19.72847,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 355,
      "squawk": "7473",
      "timestamp": 1663926536,
      "ems": null
    },
    {
      "latitude": 51.455475,
      "longitude": 19.728106,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 354,
      "squawk": "7473",
      "timestamp": 1663926542,
      "ems": null
    },
    {
      "latitude": 51.458145,
      "longitude": 19.727631,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 353,
      "squawk": "7473",
      "timestamp": 1663926548,
      "ems": null
    },
    {
      "latitude": 51.460751,
      "longitude": 19.727249,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 354,
      "squawk": "7473",
      "timestamp": 1663926553,
      "ems": null
    },
    {
      "latitude": 51.46344,
      "longitude": 19.726471,
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
      "heading": 349,
      "squawk": "7473",
      "timestamp": 1663926560,
      "ems": null
    },
    {
      "latitude": 51.464767,
      "longitude": 19.726027,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 346,
      "squawk": "7473",
      "timestamp": 1663926563,
      "ems": null
    },
    {
      "latitude": 51.466011,
      "longitude": 19.725494,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 343,
      "squawk": "7473",
      "timestamp": 1663926565,
      "ems": null
    },
    {
      "latitude": 51.467285,
      "longitude": 19.724838,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 343,
      "squawk": "7473",
      "timestamp": 1663926569,
      "ems": null
    },
    {
      "latitude": 51.46843,
      "longitude": 19.724319,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 344,
      "squawk": "7473",
      "timestamp": 1663926572,
      "ems": null
    },
    {
      "latitude": 51.469784,
      "longitude": 19.723816,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "7473",
      "timestamp": 1663926575,
      "ems": null
    },
    {
      "latitude": 51.471085,
      "longitude": 19.723354,
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
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926578,
      "ems": null
    },
    {
      "latitude": 51.472202,
      "longitude": 19.722977,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "7473",
      "timestamp": 1663926580,
      "ems": null
    },
    {
      "latitude": 51.474812,
      "longitude": 19.722214,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926587,
      "ems": null
    },
    {
      "latitude": 51.477448,
      "longitude": 19.721275,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "7473",
      "timestamp": 1663926593,
      "ems": null
    },
    {
      "latitude": 51.480057,
      "longitude": 19.720385,
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
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926599,
      "ems": null
    },
    {
      "latitude": 51.482574,
      "longitude": 19.719568,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926605,
      "ems": null
    },
    {
      "latitude": 51.485054,
      "longitude": 19.718781,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 349,
      "squawk": "7473",
      "timestamp": 1663926611,
      "ems": null
    },
    {
      "latitude": 51.48761,
      "longitude": 19.71801,
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
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926617,
      "ems": null
    },
    {
      "latitude": 51.490082,
      "longitude": 19.717102,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "7473",
      "timestamp": 1663926623,
      "ems": null
    },
    {
      "latitude": 51.492455,
      "longitude": 19.716339,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926629,
      "ems": null
    },
    {
      "latitude": 51.494877,
      "longitude": 19.7155,
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
      "heading": 346,
      "squawk": "7473",
      "timestamp": 1663926635,
      "ems": null
    },
    {
      "latitude": 51.497437,
      "longitude": 19.714432,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 345,
      "squawk": "7473",
      "timestamp": 1663926641,
      "ems": null
    },
    {
      "latitude": 51.499786,
      "longitude": 19.713556,
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
      "heading": 347,
      "squawk": "7473",
      "timestamp": 1663926647,
      "ems": null
    },
    {
      "latitude": 51.502232,
      "longitude": 19.712753,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926653,
      "ems": null
    },
    {
      "latitude": 51.504463,
      "longitude": 19.712143,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7473",
      "timestamp": 1663926659,
      "ems": null
    },
    {
      "latitude": 51.506195,
      "longitude": 19.7117,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7473",
      "timestamp": 1663926663,
      "ems": null
    },
    {
      "latitude": 51.508003,
      "longitude": 19.711227,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7473",
      "timestamp": 1663926668,
      "ems": null
    },
    {
      "latitude": 51.509903,
      "longitude": 19.710661,
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
      "heading": 349,
      "squawk": "7473",
      "timestamp": 1663926673,
      "ems": null
    },
    {
      "latitude": 51.513077,
      "longitude": 19.709625,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "7473",
      "timestamp": 1663926680,
      "ems": null
    },
    {
      "latitude": 51.515076,
      "longitude": 19.708954,
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
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926685,
      "ems": null
    },
    {
      "latitude": 51.517685,
      "longitude": 19.708099,
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
      "heading": 349,
      "squawk": "7473",
      "timestamp": 1663926692,
      "ems": null
    },
    {
      "latitude": 51.519928,
      "longitude": 19.707468,
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
      "heading": 351,
      "squawk": "7473",
      "timestamp": 1663926697,
      "ems": null
    },
    {
      "latitude": 51.522583,
      "longitude": 19.706949,
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
      "heading": 353,
      "squawk": "7473",
      "timestamp": 1663926704,
      "ems": null
    },
    {
      "latitude": 51.523689,
      "longitude": 19.706802,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 356,
      "squawk": "7473",
      "timestamp": 1663926707,
      "ems": null
    },
    {
      "latitude": 51.524872,
      "longitude": 19.706726,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 357,
      "squawk": "7473",
      "timestamp": 1663926710,
      "ems": null
    },
    {
      "latitude": 51.526016,
      "longitude": 19.706652,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "7473",
      "timestamp": 1663926713,
      "ems": null
    },
    {
      "latitude": 51.527069,
      "longitude": 19.706652,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "7473",
      "timestamp": 1663926716,
      "ems": null
    },
    {
      "latitude": 51.52816,
      "longitude": 19.706802,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 4,
      "squawk": "7473",
      "timestamp": 1663926719,
      "ems": null
    },
    {
      "latitude": 51.529083,
      "longitude": 19.706949,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 5,
      "squawk": "7473",
      "timestamp": 1663926721,
      "ems": null
    },
    {
      "latitude": 51.530045,
      "longitude": 19.707098,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 4,
      "squawk": "7473",
      "timestamp": 1663926724,
      "ems": null
    },
    {
      "latitude": 51.531605,
      "longitude": 19.707336,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 5,
      "squawk": "7473",
      "timestamp": 1663926728,
      "ems": null
    },
    {
      "latitude": 51.53249,
      "longitude": 19.707565,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "7473",
      "timestamp": 1663926730,
      "ems": null
    },
    {
      "latitude": 51.534073,
      "longitude": 19.707914,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 7,
      "squawk": "7473",
      "timestamp": 1663926735,
      "ems": null
    },
    {
      "latitude": 51.535446,
      "longitude": 19.708284,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 9,
      "squawk": "7473",
      "timestamp": 1663926738,
      "ems": null
    },
    {
      "latitude": 51.536636,
      "longitude": 19.708582,
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
      "heading": 7,
      "squawk": "7473",
      "timestamp": 1663926741,
      "ems": null
    },
    {
      "latitude": 51.53775,
      "longitude": 19.708786,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 6,
      "squawk": "7473",
      "timestamp": 1663926744,
      "ems": null
    },
    {
      "latitude": 51.539101,
      "longitude": 19.709015,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 6,
      "squawk": "7473",
      "timestamp": 1663926747,
      "ems": null
    },
    {
      "latitude": 51.541534,
      "longitude": 19.709398,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 6,
      "squawk": "7473",
      "timestamp": 1663926753,
      "ems": null
    },
    {
      "latitude": 51.54422,
      "longitude": 19.709778,
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
      "heading": 3,
      "squawk": "7473",
      "timestamp": 1663926759,
      "ems": null
    },
    {
      "latitude": 51.546875,
      "longitude": 19.710007,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "7473",
      "timestamp": 1663926765,
      "ems": null
    },
    {
      "latitude": 51.548084,
      "longitude": 19.710083,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "7473",
      "timestamp": 1663926768,
      "ems": null
    },
    {
      "latitude": 51.550224,
      "longitude": 19.710312,
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
      "heading": 3,
      "squawk": "7473",
      "timestamp": 1663926774,
      "ems": null
    },
    {
      "latitude": 51.553574,
      "longitude": 19.710957,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 11,
      "squawk": "7473",
      "timestamp": 1663926783,
      "ems": null
    },
    {
      "latitude": 51.554672,
      "longitude": 19.711329,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 13,
      "squawk": "7473",
      "timestamp": 1663926786,
      "ems": null
    },
    {
      "latitude": 51.555542,
      "longitude": 19.7117,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 15,
      "squawk": "7473",
      "timestamp": 1663926789,
      "ems": null
    },
    {
      "latitude": 51.556549,
      "longitude": 19.712219,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 18,
      "squawk": "7473",
      "timestamp": 1663926792,
      "ems": null
    },
    {
      "latitude": 51.557583,
      "longitude": 19.712753,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 18,
      "squawk": "7473",
      "timestamp": 1663926795,
      "ems": null
    },
    {
      "latitude": 51.558563,
      "longitude": 19.713333,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663926798,
      "ems": null
    },
    {
      "latitude": 51.559479,
      "longitude": 19.713926,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 21,
      "squawk": "7473",
      "timestamp": 1663926801,
      "ems": null
    },
    {
      "latitude": 51.560394,
      "longitude": 19.71452,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 23,
      "squawk": "7473",
      "timestamp": 1663926804,
      "ems": null
    },
    {
      "latitude": 51.56163,
      "longitude": 19.715412,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 23,
      "squawk": "7473",
      "timestamp": 1663926807,
      "ems": null
    },
    {
      "latitude": 51.5625,
      "longitude": 19.715931,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 22,
      "squawk": "7473",
      "timestamp": 1663926810,
      "ems": null
    },
    {
      "latitude": 51.563446,
      "longitude": 19.716568,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 20,
      "squawk": "7473",
      "timestamp": 1663926813,
      "ems": null
    },
    {
      "latitude": 51.563919,
      "longitude": 19.716822,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663926815,
      "ems": null
    },
    {
      "latitude": 51.566238,
      "longitude": 19.718094,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 18,
      "squawk": "7473",
      "timestamp": 1663926822,
      "ems": null
    },
    {
      "latitude": 51.5681,
      "longitude": 19.719009,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 17,
      "squawk": "7473",
      "timestamp": 1663926828,
      "ems": null
    },
    {
      "latitude": 51.569046,
      "longitude": 19.719494,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 13,
      "squawk": "7473",
      "timestamp": 1663926831,
      "ems": null
    },
    {
      "latitude": 51.570198,
      "longitude": 19.719696,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 13,
      "squawk": "7473",
      "timestamp": 1663926834,
      "ems": null
    },
    {
      "latitude": 51.571106,
      "longitude": 19.719568,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 351,
      "squawk": "7473",
      "timestamp": 1663926837,
      "ems": null
    },
    {
      "latitude": 51.572067,
      "longitude": 19.719196,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 347,
      "squawk": "7473",
      "timestamp": 1663926840,
      "ems": null
    },
    {
      "latitude": 51.573029,
      "longitude": 19.718901,
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
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926843,
      "ems": null
    },
    {
      "latitude": 51.573967,
      "longitude": 19.718628,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 349,
      "squawk": "7473",
      "timestamp": 1663926846,
      "ems": null
    },
    {
      "latitude": 51.574677,
      "longitude": 19.71838,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 349,
      "squawk": "7473",
      "timestamp": 1663926848,
      "ems": null
    },
    {
      "latitude": 51.575821,
      "longitude": 19.718084,
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
      "heading": 348,
      "squawk": "7473",
      "timestamp": 1663926852,
      "ems": null
    },
    {
      "latitude": 51.576759,
      "longitude": 19.717712,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 345,
      "squawk": "7473",
      "timestamp": 1663926855,
      "ems": null
    },
    {
      "latitude": 51.577057,
      "longitude": 19.717564,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 345,
      "squawk": "7473",
      "timestamp": 1663926856,
      "ems": null
    },
    {
      "latitude": 51.578388,
      "longitude": 19.716873,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 342,
      "squawk": "7473",
      "timestamp": 1663926861,
      "ems": null
    },
    {
      "latitude": 51.58168,
      "longitude": 19.711922,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 304,
      "squawk": "7473",
      "timestamp": 1663926876,
      "ems": null
    },
    {
      "latitude": 51.582581,
      "longitude": 19.709702,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 303,
      "squawk": "7473",
      "timestamp": 1663926881,
      "ems": null
    },
    {
      "latitude": 51.583145,
      "longitude": 19.70821,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 300,
      "squawk": "7473",
      "timestamp": 1663926886,
      "ems": null
    },
    {
      "latitude": 51.58429,
      "longitude": 19.705687,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 311,
      "squawk": "7473",
      "timestamp": 1663926891,
      "ems": null
    },
    {
      "latitude": 51.585617,
      "longitude": 19.703979,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 322,
      "squawk": "7473",
      "timestamp": 1663926896,
      "ems": null
    },
    {
      "latitude": 51.586899,
      "longitude": 19.703089,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 340,
      "squawk": "7473",
      "timestamp": 1663926901,
      "ems": null
    },
    {
      "latitude": 51.588043,
      "longitude": 19.702717,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 350,
      "squawk": "7473",
      "timestamp": 1663926905,
      "ems": null
    },
    {
      "latitude": 51.58905,
      "longitude": 19.70257,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 357,
      "squawk": "7473",
      "timestamp": 1663926910,
      "ems": null
    },
    {
      "latitude": 51.590725,
      "longitude": 19.702682,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 6,
      "squawk": "7473",
      "timestamp": 1663926914,
      "ems": null
    },
    {
      "latitude": 51.592262,
      "longitude": 19.703369,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 18,
      "squawk": "7473",
      "timestamp": 1663926919,
      "ems": null
    },
    {
      "latitude": 51.593948,
      "longitude": 19.70487,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 34,
      "squawk": "7473",
      "timestamp": 1663926924,
      "ems": null
    },
    {
      "latitude": 51.594864,
      "longitude": 19.706059,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 36,
      "squawk": "7473",
      "timestamp": 1663926928,
      "ems": null
    },
    {
      "latitude": 51.596832,
      "longitude": 19.708359,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 38,
      "squawk": "7473",
      "timestamp": 1663926935,
      "ems": null
    },
    {
      "latitude": 51.59808,
      "longitude": 19.709702,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 36,
      "squawk": "7473",
      "timestamp": 1663926939,
      "ems": null
    },
    {
      "latitude": 51.599625,
      "longitude": 19.710735,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 17,
      "squawk": "7473",
      "timestamp": 1663926944,
      "ems": null
    },
    {
      "latitude": 51.600082,
      "longitude": 19.710882,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 26,
      "squawk": "7473",
      "timestamp": 1663926946,
      "ems": null
    },
    {
      "latitude": 51.600449,
      "longitude": 19.710957,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 10,
      "squawk": "7473",
      "timestamp": 1663926947,
      "ems": null
    },
    {
      "latitude": 51.601665,
      "longitude": 19.71138,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 14,
      "squawk": "7473",
      "timestamp": 1663926952,
      "ems": null
    },
    {
      "latitude": 51.6026,
      "longitude": 19.711773,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 17,
      "squawk": "7473",
      "timestamp": 1663926955,
      "ems": null
    },
    {
      "latitude": 51.604088,
      "longitude": 19.712753,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 23,
      "squawk": "7473",
      "timestamp": 1663926961,
      "ems": null
    },
    {
      "latitude": 51.605713,
      "longitude": 19.714001,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663926966,
      "ems": null
    },
    {
      "latitude": 51.606506,
      "longitude": 19.714813,
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
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926969,
      "ems": null
    },
    {
      "latitude": 51.607021,
      "longitude": 19.715347,
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
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926971,
      "ems": null
    },
    {
      "latitude": 51.607765,
      "longitude": 19.716187,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926976,
      "ems": null
    },
    {
      "latitude": 51.609283,
      "longitude": 19.717638,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926979,
      "ems": null
    },
    {
      "latitude": 51.610233,
      "longitude": 19.718552,
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
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926982,
      "ems": null
    },
    {
      "latitude": 51.610519,
      "longitude": 19.718901,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663926982,
      "ems": null
    },
    {
      "latitude": 51.612045,
      "longitude": 19.720383,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926987,
      "ems": null
    },
    {
      "latitude": 51.614319,
      "longitude": 19.722834,
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
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663926994,
      "ems": null
    },
    {
      "latitude": 51.616516,
      "longitude": 19.725136,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 34,
      "squawk": "7473",
      "timestamp": 1663927000,
      "ems": null
    },
    {
      "latitude": 51.618164,
      "longitude": 19.727066,
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
      "heading": 36,
      "squawk": "7473",
      "timestamp": 1663927004,
      "ems": null
    },
    {
      "latitude": 51.619495,
      "longitude": 19.728622,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 36,
      "squawk": "7473",
      "timestamp": 1663927008,
      "ems": null
    },
    {
      "latitude": 51.621414,
      "longitude": 19.730927,
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
      "heading": 36,
      "squawk": "7473",
      "timestamp": 1663927014,
      "ems": null
    },
    {
      "latitude": 51.624336,
      "longitude": 19.734879,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "7473",
      "timestamp": 1663927023,
      "ems": null
    },
    {
      "latitude": 51.626083,
      "longitude": 19.736715,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 39,
      "squawk": "7473",
      "timestamp": 1663927028,
      "ems": null
    },
    {
      "latitude": 51.62648,
      "longitude": 19.737091,
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
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663927029,
      "ems": null
    },
    {
      "latitude": 51.629242,
      "longitude": 19.739536,
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
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663927037,
      "ems": null
    },
    {
      "latitude": 51.63121,
      "longitude": 19.741318,
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
      "heading": 29,
      "squawk": "7473",
      "timestamp": 1663927042,
      "ems": null
    },
    {
      "latitude": 51.633041,
      "longitude": 19.742966,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663927047,
      "ems": null
    },
    {
      "latitude": 51.634903,
      "longitude": 19.744644,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663927052,
      "ems": null
    },
    {
      "latitude": 51.636627,
      "longitude": 19.746246,
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
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663927057,
      "ems": null
    },
    {
      "latitude": 51.638672,
      "longitude": 19.748444,
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
      "heading": 36,
      "squawk": "7473",
      "timestamp": 1663927063,
      "ems": null
    },
    {
      "latitude": 51.640118,
      "longitude": 19.750366,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 38,
      "squawk": "7473",
      "timestamp": 1663927068,
      "ems": null
    },
    {
      "latitude": 51.64389,
      "longitude": 19.754234,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 24,
      "squawk": "7473",
      "timestamp": 1663927079,
      "ems": null
    },
    {
      "latitude": 51.644588,
      "longitude": 19.754791,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 24,
      "squawk": "7473",
      "timestamp": 1663927081,
      "ems": null
    },
    {
      "latitude": 51.646362,
      "longitude": 19.756239,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 25,
      "squawk": "7473",
      "timestamp": 1663927085,
      "ems": null
    },
    {
      "latitude": 51.649567,
      "longitude": 19.758987,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 26,
      "squawk": "7473",
      "timestamp": 1663927094,
      "ems": null
    },
    {
      "latitude": 51.650711,
      "longitude": 19.759802,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 24,
      "squawk": "7473",
      "timestamp": 1663927096,
      "ems": null
    },
    {
      "latitude": 51.651615,
      "longitude": 19.760437,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "7473",
      "timestamp": 1663927098,
      "ems": null
    },
    {
      "latitude": 51.653477,
      "longitude": 19.761658,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 22,
      "squawk": "7473",
      "timestamp": 1663927103,
      "ems": null
    },
    {
      "latitude": 51.654968,
      "longitude": 19.762802,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 26,
      "squawk": "7473",
      "timestamp": 1663927106,
      "ems": null
    },
    {
      "latitude": 51.658356,
      "longitude": 19.765667,
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
      "heading": 27,
      "squawk": "7473",
      "timestamp": 1663927115,
      "ems": null
    },
    {
      "latitude": 51.661606,
      "longitude": 19.769304,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 40,
      "squawk": "7473",
      "timestamp": 1663927123,
      "ems": null
    },
    {
      "latitude": 51.663071,
      "longitude": 19.771235,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 40,
      "squawk": "7473",
      "timestamp": 1663927127,
      "ems": null
    },
    {
      "latitude": 51.664791,
      "longitude": 19.773178,
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
      "heading": 33,
      "squawk": "7473",
      "timestamp": 1663927132,
      "ems": null
    },
    {
      "latitude": 51.666367,
      "longitude": 19.774797,
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
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663927136,
      "ems": null
    },
    {
      "latitude": 51.668518,
      "longitude": 19.776728,
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
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663927142,
      "ems": null
    },
    {
      "latitude": 51.671589,
      "longitude": 19.779282,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 26,
      "squawk": "7473",
      "timestamp": 1663927149,
      "ems": null
    },
    {
      "latitude": 51.672752,
      "longitude": 19.780197,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 26,
      "squawk": "7473",
      "timestamp": 1663927153,
      "ems": null
    },
    {
      "latitude": 51.674377,
      "longitude": 19.781403,
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
      "heading": 22,
      "squawk": "7473",
      "timestamp": 1663927156,
      "ems": null
    },
    {
      "latitude": 51.675591,
      "longitude": 19.782104,
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
      "heading": 20,
      "squawk": "7473",
      "timestamp": 1663927159,
      "ems": null
    },
    {
      "latitude": 51.67662,
      "longitude": 19.78274,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663927162,
      "ems": null
    },
    {
      "latitude": 51.678246,
      "longitude": 19.78363,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 18,
      "squawk": "7473",
      "timestamp": 1663927166,
      "ems": null
    },
    {
      "latitude": 51.679409,
      "longitude": 19.784241,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663927169,
      "ems": null
    },
    {
      "latitude": 51.68042,
      "longitude": 19.784819,
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
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663927171,
      "ems": null
    },
    {
      "latitude": 51.681503,
      "longitude": 19.785461,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663927174,
      "ems": null
    },
    {
      "latitude": 51.683041,
      "longitude": 19.786377,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 21,
      "squawk": "7473",
      "timestamp": 1663927178,
      "ems": null
    },
    {
      "latitude": 51.685226,
      "longitude": 19.787827,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 21,
      "squawk": "7473",
      "timestamp": 1663927183,
      "ems": null
    },
    {
      "latitude": 51.687183,
      "longitude": 19.789124,
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
      "heading": 21,
      "squawk": "7473",
      "timestamp": 1663927189,
      "ems": null
    },
    {
      "latitude": 51.689835,
      "longitude": 19.790649,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663927196,
      "ems": null
    },
    {
      "latitude": 51.692459,
      "longitude": 19.792316,
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
      "heading": 21,
      "squawk": "7473",
      "timestamp": 1663927202,
      "ems": null
    },
    {
      "latitude": 51.694702,
      "longitude": 19.793652,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 20,
      "squawk": "7473",
      "timestamp": 1663927207,
      "ems": null
    },
    {
      "latitude": 51.696762,
      "longitude": 19.794989,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 21,
      "squawk": "7473",
      "timestamp": 1663927212,
      "ems": null
    },
    {
      "latitude": 51.699471,
      "longitude": 19.7966,
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
      "heading": 20,
      "squawk": "7473",
      "timestamp": 1663927219,
      "ems": null
    },
    {
      "latitude": 51.701706,
      "longitude": 19.79805,
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
      "heading": 22,
      "squawk": "7473",
      "timestamp": 1663927225,
      "ems": null
    },
    {
      "latitude": 51.703995,
      "longitude": 19.799442,
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
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663927232,
      "ems": null
    },
    {
      "latitude": 51.706146,
      "longitude": 19.800777,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 21,
      "squawk": "7473",
      "timestamp": 1663927237,
      "ems": null
    },
    {
      "latitude": 51.70871,
      "longitude": 19.802263,
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
      "heading": 18,
      "squawk": "7473",
      "timestamp": 1663927244,
      "ems": null
    },
    {
      "latitude": 51.710876,
      "longitude": 19.803543,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "7473",
      "timestamp": 1663927249,
      "ems": null
    },
    {
      "latitude": 51.713196,
      "longitude": 19.804861,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "7473",
      "timestamp": 1663927256,
      "ems": null
    },
    {
      "latitude": 51.715439,
      "longitude": 19.806049,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 17,
      "squawk": "7473",
      "timestamp": 1663927262,
      "ems": null
    },
    {
      "latitude": 51.717442,
      "longitude": 19.807587,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663927268,
      "ems": null
    },
    {
      "latitude": 51.718281,
      "longitude": 19.808426,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663927270,
      "ems": null
    },
    {
      "latitude": 51.719055,
      "longitude": 19.809166,
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
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663927272,
      "ems": null
    },
    {
      "latitude": 51.719925,
      "longitude": 19.810057,
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
      "heading": 32,
      "squawk": "7473",
      "timestamp": 1663927275,
      "ems": null
    },
    {
      "latitude": 51.721069,
      "longitude": 19.811245,
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
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663927279,
      "ems": null
    },
    {
      "latitude": 51.721619,
      "longitude": 19.811764,
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
      "heading": 29,
      "squawk": "7473",
      "timestamp": 1663927283,
      "ems": null
    },
    {
      "latitude": 51.72345,
      "longitude": 19.813324,
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
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663927286,
      "ems": null
    },
    {
      "latitude": 51.724888,
      "longitude": 19.814606,
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
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663927290,
      "ems": null
    },
    {
      "latitude": 51.725216,
      "longitude": 19.814835,
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
      "heading": 26,
      "squawk": "7473",
      "timestamp": 1663927291,
      "ems": null
    },
    {
      "latitude": 51.726883,
      "longitude": 19.816143,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 25,
      "squawk": "7473",
      "timestamp": 1663927295,
      "ems": null
    },
    {
      "latitude": 51.729267,
      "longitude": 19.817657,
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
      "heading": 17,
      "squawk": "7473",
      "timestamp": 1663927302,
      "ems": null
    },
    {
      "latitude": 51.730942,
      "longitude": 19.818039,
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
      "heading": 10,
      "squawk": "7473",
      "timestamp": 1663927306,
      "ems": null
    },
    {
      "latitude": 51.73201,
      "longitude": 19.818073,
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
      "heading": 359,
      "squawk": "7473",
      "timestamp": 1663927310,
      "ems": null
    },
    {
      "latitude": 51.732376,
      "longitude": 19.818073,
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
      "heading": 357,
      "squawk": "7473",
      "timestamp": 1663927311,
      "ems": null
    },
    {
      "latitude": 51.734154,
      "longitude": 19.817581,
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
      "heading": 349,
      "squawk": "7473",
      "timestamp": 1663927316,
      "ems": null
    },
    {
      "latitude": 51.73558,
      "longitude": 19.816366,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 326,
      "squawk": "7473",
      "timestamp": 1663927320,
      "ems": null
    },
    {
      "latitude": 51.736713,
      "longitude": 19.814529,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 312,
      "squawk": "7473",
      "timestamp": 1663927325,
      "ems": null
    },
    {
      "latitude": 51.737274,
      "longitude": 19.812927,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "7473",
      "timestamp": 1663927329,
      "ems": null
    },
    {
      "latitude": 51.737549,
      "longitude": 19.810429,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 275,
      "squawk": "7473",
      "timestamp": 1663927334,
      "ems": null
    },
    {
      "latitude": 51.737225,
      "longitude": 19.807739,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663927339,
      "ems": null
    },
    {
      "latitude": 51.736679,
      "longitude": 19.805901,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663927342,
      "ems": null
    },
    {
      "latitude": 51.735271,
      "longitude": 19.803314,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 224,
      "squawk": "7473",
      "timestamp": 1663927348,
      "ems": null
    },
    {
      "latitude": 51.734245,
      "longitude": 19.80217,
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
      "heading": 210,
      "squawk": "7473",
      "timestamp": 1663927352,
      "ems": null
    },
    {
      "latitude": 51.732559,
      "longitude": 19.801298,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 194,
      "squawk": "7473",
      "timestamp": 1663927357,
      "ems": null
    },
    {
      "latitude": 51.731033,
      "longitude": 19.801102,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 180,
      "squawk": "7473",
      "timestamp": 1663927361,
      "ems": null
    },
    {
      "latitude": 51.72963,
      "longitude": 19.801519,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 169,
      "squawk": "7473",
      "timestamp": 1663927365,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.80278,
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
      "heading": 146,
      "squawk": "7473",
      "timestamp": 1663927369,
      "ems": null
    },
    {
      "latitude": 51.727112,
      "longitude": 19.804266,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 137,
      "squawk": "7473",
      "timestamp": 1663927373,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 19.805908,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 127,
      "squawk": "7473",
      "timestamp": 1663927376,
      "ems": null
    },
    {
      "latitude": 51.725693,
      "longitude": 19.807756,
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
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 111,
      "squawk": "7473",
      "timestamp": 1663927379,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.808722,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 98,
      "squawk": "7473",
      "timestamp": 1663927381,
      "ems": null
    },
    {
      "latitude": 51.725464,
      "longitude": 19.810799,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 89,
      "squawk": "7473",
      "timestamp": 1663927384,
      "ems": null
    },
    {
      "latitude": 51.72583,
      "longitude": 19.814882,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 81,
      "squawk": "7473",
      "timestamp": 1663927388,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.817123,
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
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 71,
      "squawk": "7473",
      "timestamp": 1663927391,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.820099,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 51,
      "squawk": "7473",
      "timestamp": 1663927397,
      "ems": null
    },
    {
      "latitude": 51.728714,
      "longitude": 19.822676,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 40,
      "squawk": "7473",
      "timestamp": 1663927400,
      "ems": null
    },
    {
      "latitude": 51.731548,
      "longitude": 19.825287,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 24,
      "squawk": "7473",
      "timestamp": 1663927408,
      "ems": null
    },
    {
      "latitude": 51.73341,
      "longitude": 19.825821,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 5,
      "squawk": "7473",
      "timestamp": 1663927412,
      "ems": null
    },
    {
      "latitude": 51.733643,
      "longitude": 19.825821,
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
      "heading": 3,
      "squawk": "7473",
      "timestamp": 1663927413,
      "ems": null
    },
    {
      "latitude": 51.73558,
      "longitude": 19.825571,
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
      "heading": 350,
      "squawk": "7473",
      "timestamp": 1663927418,
      "ems": null
    },
    {
      "latitude": 51.737,
      "longitude": 19.824903,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "7473",
      "timestamp": 1663927422,
      "ems": null
    },
    {
      "latitude": 51.738438,
      "longitude": 19.823914,
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
      "heading": 331,
      "squawk": "7473",
      "timestamp": 1663927426,
      "ems": null
    },
    {
      "latitude": 51.739788,
      "longitude": 19.822388,
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
      "heading": 316,
      "squawk": "7473",
      "timestamp": 1663927431,
      "ems": null
    },
    {
      "latitude": 51.74123,
      "longitude": 19.819183,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 297,
      "squawk": "7473",
      "timestamp": 1663927437,
      "ems": null
    },
    {
      "latitude": 51.741741,
      "longitude": 19.816742,
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
      "heading": 285,
      "squawk": "7473",
      "timestamp": 1663927442,
      "ems": null
    },
    {
      "latitude": 51.741806,
      "longitude": 19.812433,
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
      "heading": 265,
      "squawk": "7473",
      "timestamp": 1663927449,
      "ems": null
    },
    {
      "latitude": 51.741669,
      "longitude": 19.809389,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 266,
      "squawk": "7473",
      "timestamp": 1663927454,
      "ems": null
    },
    {
      "latitude": 51.741554,
      "longitude": 19.806519,
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
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663927459,
      "ems": null
    },
    {
      "latitude": 51.741394,
      "longitude": 19.804638,
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
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663927464,
      "ems": null
    },
    {
      "latitude": 51.741165,
      "longitude": 19.801743,
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
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927469,
      "ems": null
    },
    {
      "latitude": 51.740845,
      "longitude": 19.799219,
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
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663927473,
      "ems": null
    },
    {
      "latitude": 51.740578,
      "longitude": 19.797516,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663927476,
      "ems": null
    },
    {
      "latitude": 51.740341,
      "longitude": 19.796026,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663927479,
      "ems": null
    },
    {
      "latitude": 51.739929,
      "longitude": 19.793577,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663927484,
      "ems": null
    },
    {
      "latitude": 51.73946,
      "longitude": 19.790802,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663927488,
      "ems": null
    },
    {
      "latitude": 51.739197,
      "longitude": 19.7889,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "7473",
      "timestamp": 1663927492,
      "ems": null
    },
    {
      "latitude": 51.738857,
      "longitude": 19.786835,
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
      "heading": 253,
      "squawk": "7473",
      "timestamp": 1663927496,
      "ems": null
    },
    {
      "latitude": 51.738419,
      "longitude": 19.784595,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "7473",
      "timestamp": 1663927499,
      "ems": null
    },
    {
      "latitude": 51.737507,
      "longitude": 19.778824,
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
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663927509,
      "ems": null
    },
    {
      "latitude": 51.736542,
      "longitude": 19.774351,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663927517,
      "ems": null
    },
    {
      "latitude": 51.735828,
      "longitude": 19.771271,
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
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663927522,
      "ems": null
    },
    {
      "latitude": 51.734528,
      "longitude": 19.765244,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663927532,
      "ems": null
    },
    {
      "latitude": 51.733177,
      "longitude": 19.758759,
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
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663927543,
      "ems": null
    },
    {
      "latitude": 51.732056,
      "longitude": 19.753195,
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
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663927551,
      "ems": null
    },
    {
      "latitude": 51.731277,
      "longitude": 19.749039,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "7473",
      "timestamp": 1663927557,
      "ems": null
    },
    {
      "latitude": 51.730942,
      "longitude": 19.74678,
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
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663927561,
      "ems": null
    },
    {
      "latitude": 51.730801,
      "longitude": 19.744873,
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
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927564,
      "ems": null
    },
    {
      "latitude": 51.730637,
      "longitude": 19.74295,
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
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927567,
      "ems": null
    },
    {
      "latitude": 51.730453,
      "longitude": 19.740427,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927571,
      "ems": null
    },
    {
      "latitude": 51.730316,
      "longitude": 19.738571,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927573,
      "ems": null
    },
    {
      "latitude": 51.730289,
      "longitude": 19.738312,
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
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927574,
      "ems": null
    },
    {
      "latitude": 51.730057,
      "longitude": 19.735107,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663927579,
      "ems": null
    },
    {
      "latitude": 51.729965,
      "longitude": 19.733429,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663927583,
      "ems": null
    },
    {
      "latitude": 51.729404,
      "longitude": 19.725952,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927592,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.721603,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663927598,
      "ems": null
    },
    {
      "latitude": 51.728806,
      "longitude": 19.717415,
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
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663927604,
      "ems": null
    },
    {
      "latitude": 51.728439,
      "longitude": 19.712591,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927611,
      "ems": null
    },
    {
      "latitude": 51.728073,
      "longitude": 19.708582,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927617,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.705276,
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
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663927622,
      "ems": null
    },
    {
      "latitude": 51.727798,
      "longitude": 19.70257,
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
      "heading": 270,
      "squawk": "7473",
      "timestamp": 1663927626,
      "ems": null
    },
    {
      "latitude": 51.727871,
      "longitude": 19.70047,
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
      "heading": 273,
      "squawk": "7473",
      "timestamp": 1663927629,
      "ems": null
    },
    {
      "latitude": 51.727661,
      "longitude": 19.696407,
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
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663927635,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.692154,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927641,
      "ems": null
    },
    {
      "latitude": 51.726936,
      "longitude": 19.687881,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927647,
      "ems": null
    },
    {
      "latitude": 51.726517,
      "longitude": 19.683937,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927653,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.682007,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927656,
      "ems": null
    },
    {
      "latitude": 51.726151,
      "longitude": 19.680002,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927659,
      "ems": null
    },
    {
      "latitude": 51.72596,
      "longitude": 19.678574,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927661,
      "ems": null
    },
    {
      "latitude": 51.725449,
      "longitude": 19.673767,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663927668,
      "ems": null
    },
    {
      "latitude": 51.725006,
      "longitude": 19.669758,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927674,
      "ems": null
    },
    {
      "latitude": 51.724472,
      "longitude": 19.665527,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663927680,
      "ems": null
    },
    {
      "latitude": 51.723953,
      "longitude": 19.661444,
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
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663927686,
      "ems": null
    },
    {
      "latitude": 51.723587,
      "longitude": 19.657059,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927692,
      "ems": null
    },
    {
      "latitude": 51.723267,
      "longitude": 19.653057,
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
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927698,
      "ems": null
    },
    {
      "latitude": 51.722946,
      "longitude": 19.649345,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927704,
      "ems": null
    },
    {
      "latitude": 51.722515,
      "longitude": 19.645233,
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
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927710,
      "ems": null
    },
    {
      "latitude": 51.722095,
      "longitude": 19.641418,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927716,
      "ems": null
    },
    {
      "latitude": 51.72171,
      "longitude": 19.637543,
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
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663927722,
      "ems": null
    },
    {
      "latitude": 51.721165,
      "longitude": 19.63295,
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
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663927730,
      "ems": null
    },
    {
      "latitude": 51.720608,
      "longitude": 19.628296,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663927737,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.624847,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663927743,
      "ems": null
    },
    {
      "latitude": 51.719814,
      "longitude": 19.621201,
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
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927749,
      "ems": null
    },
    {
      "latitude": 51.719421,
      "longitude": 19.616831,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927757,
      "ems": null
    },
    {
      "latitude": 51.718792,
      "longitude": 19.611511,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927765,
      "ems": null
    },
    {
      "latitude": 51.718414,
      "longitude": 19.607552,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927773,
      "ems": null
    },
    {
      "latitude": 51.717911,
      "longitude": 19.601688,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663927781,
      "ems": null
    },
    {
      "latitude": 51.717682,
      "longitude": 19.598793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927786,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.593151,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663927793,
      "ems": null
    },
    {
      "latitude": 51.717224,
      "longitude": 19.592409,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 265,
      "squawk": "7473",
      "timestamp": 1663927794,
      "ems": null
    },
    {
      "latitude": 51.716835,
      "longitude": 19.587021,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 262,
      "squawk": "7473",
      "timestamp": 1663927802,
      "ems": null
    },
    {
      "latitude": 51.716557,
      "longitude": 19.583969,
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
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927806,
      "ems": null
    },
    {
      "latitude": 51.716091,
      "longitude": 19.578476,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927814,
      "ems": null
    },
    {
      "latitude": 51.715759,
      "longitude": 19.575039,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927820,
      "ems": null
    },
    {
      "latitude": 51.715717,
      "longitude": 19.574738,
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
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663927822,
      "ems": null
    },
    {
      "latitude": 51.715393,
      "longitude": 19.571762,
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
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663927825,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.567392,
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
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663927832,
      "ems": null
    },
    {
      "latitude": 51.714138,
      "longitude": 19.561768,
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
      "heading": 257,
      "squawk": "7473",
      "timestamp": 1663927841,
      "ems": null
    },
    {
      "latitude": 51.713425,
      "longitude": 19.55648,
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
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663927849,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.551315,
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
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663927857,
      "ems": null
    },
    {
      "latitude": 51.712234,
      "longitude": 19.547052,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663927863,
      "ems": null
    },
    {
      "latitude": 51.711685,
      "longitude": 19.543341,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663927869,
      "ems": null
    },
    {
      "latitude": 51.711411,
      "longitude": 19.541412,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663927872,
      "ems": null
    },
    {
      "latitude": 51.710678,
      "longitude": 19.537552,
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
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663927878,
      "ems": null
    },
    {
      "latitude": 51.710312,
      "longitude": 19.53577,
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
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663927881,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.533844,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663927884,
      "ems": null
    },
    {
      "latitude": 51.70948,
      "longitude": 19.532089,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663927887,
      "ems": null
    },
    {
      "latitude": 51.709076,
      "longitude": 19.52998,
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
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663927891,
      "ems": null
    },
    {
      "latitude": 51.708645,
      "longitude": 19.528122,
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
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663927893,
      "ems": null
    },
    {
      "latitude": 51.708271,
      "longitude": 19.526443,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663927896,
      "ems": null
    },
    {
      "latitude": 51.707382,
      "longitude": 19.522186,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663927903,
      "ems": null
    },
    {
      "latitude": 51.70665,
      "longitude": 19.518251,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663927908,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.516247,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663927911,
      "ems": null
    },
    {
      "latitude": 51.706055,
      "longitude": 19.514168,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663927915,
      "ems": null
    },
    {
      "latitude": 51.705368,
      "longitude": 19.510235,
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
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663927921,
      "ems": null
    },
    {
      "latitude": 51.705048,
      "longitude": 19.50823,
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
      "heading": 254,
      "squawk": "7473",
      "timestamp": 1663927924,
      "ems": null
    },
    {
      "latitude": 51.704453,
      "longitude": 19.504318,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "7473",
      "timestamp": 1663927930,
      "ems": null
    },
    {
      "latitude": 51.704266,
      "longitude": 19.502106,
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
      "heading": 263,
      "squawk": "7473",
      "timestamp": 1663927933,
      "ems": null
    },
    {
      "latitude": 51.704132,
      "longitude": 19.500065,
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
      "heading": 264,
      "squawk": "7473",
      "timestamp": 1663927936,
      "ems": null
    },
    {
      "latitude": 51.703987,
      "longitude": 19.498215,
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
      "heading": 261,
      "squawk": "7473",
      "timestamp": 1663927939,
      "ems": null
    },
    {
      "latitude": 51.703217,
      "longitude": 19.494349,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7473",
      "timestamp": 1663927945,
      "ems": null
    },
    {
      "latitude": 51.702591,
      "longitude": 19.492493,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7473",
      "timestamp": 1663927948,
      "ems": null
    },
    {
      "latitude": 51.701984,
      "longitude": 19.490814,
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
      "heading": 238,
      "squawk": "7473",
      "timestamp": 1663927951,
      "ems": null
    },
    {
      "latitude": 51.701427,
      "longitude": 19.489288,
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
      "heading": 239,
      "squawk": "7473",
      "timestamp": 1663927953,
      "ems": null
    },
    {
      "latitude": 51.700745,
      "longitude": 19.487297,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 242,
      "squawk": "7473",
      "timestamp": 1663927957,
      "ems": null
    },
    {
      "latitude": 51.700123,
      "longitude": 19.485245,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 245,
      "squawk": "7473",
      "timestamp": 1663927960,
      "ems": null
    },
    {
      "latitude": 51.699646,
      "longitude": 19.483511,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 246,
      "squawk": "7473",
      "timestamp": 1663927963,
      "ems": null
    },
    {
      "latitude": 51.699234,
      "longitude": 19.481878,
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
      "heading": 247,
      "squawk": "7473",
      "timestamp": 1663927965,
      "ems": null
    },
    {
      "latitude": 51.69873,
      "longitude": 19.479948,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 248,
      "squawk": "7473",
      "timestamp": 1663927969,
      "ems": null
    },
    {
      "latitude": 51.698215,
      "longitude": 19.477921,
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
      "heading": 247,
      "squawk": "7473",
      "timestamp": 1663927972,
      "ems": null
    },
    {
      "latitude": 51.697815,
      "longitude": 19.476311,
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
      "heading": 246,
      "squawk": "7473",
      "timestamp": 1663927975,
      "ems": null
    },
    {
      "latitude": 51.696671,
      "longitude": 19.472748,
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
      "heading": 241,
      "squawk": "7473",
      "timestamp": 1663927981,
      "ems": null
    },
    {
      "latitude": 51.69548,
      "longitude": 19.469406,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 241,
      "squawk": "7473",
      "timestamp": 1663927987,
      "ems": null
    },
    {
      "latitude": 51.694427,
      "longitude": 19.465843,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 246,
      "squawk": "7473",
      "timestamp": 1663927993,
      "ems": null
    },
    {
      "latitude": 51.693512,
      "longitude": 19.462429,
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
      "heading": 247,
      "squawk": "7473",
      "timestamp": 1663927999,
      "ems": null
    },
    {
      "latitude": 51.692631,
      "longitude": 19.458771,
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
      "heading": 247,
      "squawk": "7473",
      "timestamp": 1663928005,
      "ems": null
    },
    {
      "latitude": 51.692184,
      "longitude": 19.456936,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "7473",
      "timestamp": 1663928008,
      "ems": null
    },
    {
      "latitude": 51.691746,
      "longitude": 19.455109,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663928011,
      "ems": null
    },
    {
      "latitude": 51.691372,
      "longitude": 19.453354,
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
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663928014,
      "ems": null
    },
    {
      "latitude": 51.69104,
      "longitude": 19.451887,
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
      "heading": 248,
      "squawk": "7473",
      "timestamp": 1663928016,
      "ems": null
    },
    {
      "latitude": 51.689896,
      "longitude": 19.448101,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "7473",
      "timestamp": 1663928023,
      "ems": null
    },
    {
      "latitude": 51.689232,
      "longitude": 19.446487,
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
      "heading": 236,
      "squawk": "7473",
      "timestamp": 1663928026,
      "ems": null
    },
    {
      "latitude": 51.68858,
      "longitude": 19.444809,
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
      "heading": 240,
      "squawk": "7473",
      "timestamp": 1663928029,
      "ems": null
    },
    {
      "latitude": 51.68816,
      "longitude": 19.443054,
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
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663928032,
      "ems": null
    },
    {
      "latitude": 51.688065,
      "longitude": 19.440975,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 268,
      "squawk": "7473",
      "timestamp": 1663928035,
      "ems": null
    },
    {
      "latitude": 51.688251,
      "longitude": 19.439087,
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
      "heading": 283,
      "squawk": "7473",
      "timestamp": 1663928038,
      "ems": null
    },
    {
      "latitude": 51.688717,
      "longitude": 19.437485,
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
      "heading": 300,
      "squawk": "7473",
      "timestamp": 1663928041,
      "ems": null
    },
    {
      "latitude": 51.689419,
      "longitude": 19.436111,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "7473",
      "timestamp": 1663928044,
      "ems": null
    },
    {
      "latitude": 51.69035,
      "longitude": 19.43512,
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
      "heading": 329,
      "squawk": "7473",
      "timestamp": 1663928047,
      "ems": null
    },
    {
      "latitude": 51.691498,
      "longitude": 19.434443,
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
      "heading": 344,
      "squawk": "7473",
      "timestamp": 1663928050,
      "ems": null
    },
    {
      "latitude": 51.692642,
      "longitude": 19.434368,
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
      "heading": 3,
      "squawk": "7473",
      "timestamp": 1663928053,
      "ems": null
    },
    {
      "latitude": 51.693787,
      "longitude": 19.434963,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 24,
      "squawk": "7473",
      "timestamp": 1663928056,
      "ems": null
    },
    {
      "latitude": 51.694725,
      "longitude": 19.435806,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663928059,
      "ems": null
    },
    {
      "latitude": 51.695709,
      "longitude": 19.437263,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 47,
      "squawk": "7473",
      "timestamp": 1663928062,
      "ems": null
    },
    {
      "latitude": 51.6964,
      "longitude": 19.438705,
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
      "heading": 58,
      "squawk": "7473",
      "timestamp": 1663928065,
      "ems": null
    },
    {
      "latitude": 51.696991,
      "longitude": 19.44068,
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
      "heading": 69,
      "squawk": "7473",
      "timestamp": 1663928068,
      "ems": null
    },
    {
      "latitude": 51.69733,
      "longitude": 19.442749,
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
      "heading": 76,
      "squawk": "7473",
      "timestamp": 1663928071,
      "ems": null
    },
    {
      "latitude": 51.697422,
      "longitude": 19.444962,
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
      "heading": 90,
      "squawk": "7473",
      "timestamp": 1663928074,
      "ems": null
    },
    {
      "latitude": 51.697311,
      "longitude": 19.446989,
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
      "heading": 98,
      "squawk": "7473",
      "timestamp": 1663928077,
      "ems": null
    },
    {
      "latitude": 51.696991,
      "longitude": 19.449066,
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
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663928080,
      "ems": null
    },
    {
      "latitude": 51.696396,
      "longitude": 19.450996,
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
      "heading": 121,
      "squawk": "7473",
      "timestamp": 1663928083,
      "ems": null
    },
    {
      "latitude": 51.695572,
      "longitude": 19.452703,
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
      "heading": 133,
      "squawk": "7473",
      "timestamp": 1663928086,
      "ems": null
    },
    {
      "latitude": 51.694675,
      "longitude": 19.453964,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "7473",
      "timestamp": 1663928089,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.45508,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 158,
      "squawk": "7473",
      "timestamp": 1663928092,
      "ems": null
    },
    {
      "latitude": 51.692024,
      "longitude": 19.455643,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 167,
      "squawk": "7473",
      "timestamp": 1663928095,
      "ems": null
    },
    {
      "latitude": 51.690765,
      "longitude": 19.455795,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 180,
      "squawk": "7473",
      "timestamp": 1663928098,
      "ems": null
    },
    {
      "latitude": 51.689556,
      "longitude": 19.455566,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 187,
      "squawk": "7473",
      "timestamp": 1663928101,
      "ems": null
    },
    {
      "latitude": 51.688431,
      "longitude": 19.454931,
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
      "heading": 204,
      "squawk": "7473",
      "timestamp": 1663928104,
      "ems": null
    },
    {
      "latitude": 51.687378,
      "longitude": 19.453892,
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
      "heading": 216,
      "squawk": "7473",
      "timestamp": 1663928107,
      "ems": null
    },
    {
      "latitude": 51.686531,
      "longitude": 19.452667,
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
      "heading": 227,
      "squawk": "7473",
      "timestamp": 1663928110,
      "ems": null
    },
    {
      "latitude": 51.685787,
      "longitude": 19.450989,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 233,
      "squawk": "7473",
      "timestamp": 1663928113,
      "ems": null
    },
    {
      "latitude": 51.685272,
      "longitude": 19.44931,
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
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663928116,
      "ems": null
    },
    {
      "latitude": 51.684952,
      "longitude": 19.447359,
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
      "heading": 259,
      "squawk": "7473",
      "timestamp": 1663928119,
      "ems": null
    },
    {
      "latitude": 51.684856,
      "longitude": 19.445572,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 270,
      "squawk": "7473",
      "timestamp": 1663928122,
      "ems": null
    },
    {
      "latitude": 51.68504,
      "longitude": 19.443741,
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
      "heading": 283,
      "squawk": "7473",
      "timestamp": 1663928125,
      "ems": null
    },
    {
      "latitude": 51.68541,
      "longitude": 19.442163,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 297,
      "squawk": "7473",
      "timestamp": 1663928128,
      "ems": null
    },
    {
      "latitude": 51.686188,
      "longitude": 19.440456,
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
      "heading": 310,
      "squawk": "7473",
      "timestamp": 1663928131,
      "ems": null
    },
    {
      "latitude": 51.686905,
      "longitude": 19.439468,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 321,
      "squawk": "7473",
      "timestamp": 1663928134,
      "ems": null
    },
    {
      "latitude": 51.688019,
      "longitude": 19.438553,
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
      "heading": 340,
      "squawk": "7473",
      "timestamp": 1663928137,
      "ems": null
    },
    {
      "latitude": 51.689137,
      "longitude": 19.438248,
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
      "heading": 356,
      "squawk": "7473",
      "timestamp": 1663928140,
      "ems": null
    },
    {
      "latitude": 51.69035,
      "longitude": 19.438324,
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
      "heading": 8,
      "squawk": "7473",
      "timestamp": 1663928143,
      "ems": null
    },
    {
      "latitude": 51.692165,
      "longitude": 19.439468,
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
      "heading": 30,
      "squawk": "7473",
      "timestamp": 1663928148,
      "ems": null
    },
    {
      "latitude": 51.693001,
      "longitude": 19.44046,
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
      "heading": 28,
      "squawk": "7473",
      "timestamp": 1663928152,
      "ems": null
    },
    {
      "latitude": 51.694336,
      "longitude": 19.44298,
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
      "heading": 54,
      "squawk": "7473",
      "timestamp": 1663928156,
      "ems": null
    },
    {
      "latitude": 51.694977,
      "longitude": 19.445652,
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
      "heading": 75,
      "squawk": "7473",
      "timestamp": 1663928160,
      "ems": null
    },
    {
      "latitude": 51.69516,
      "longitude": 19.448473,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 88,
      "squawk": "7473",
      "timestamp": 1663928164,
      "ems": null
    },
    {
      "latitude": 51.695023,
      "longitude": 19.450478,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 99,
      "squawk": "7473",
      "timestamp": 1663928167,
      "ems": null
    },
    {
      "latitude": 51.694771,
      "longitude": 19.452057,
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
      "heading": 109,
      "squawk": "7473",
      "timestamp": 1663928170,
      "ems": null
    },
    {
      "latitude": 51.694244,
      "longitude": 19.453669,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 120,
      "squawk": "7473",
      "timestamp": 1663928172,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.455643,
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
      "heading": 133,
      "squawk": "7473",
      "timestamp": 1663928176,
      "ems": null
    },
    {
      "latitude": 51.692825,
      "longitude": 19.456341,
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
      "heading": 136,
      "squawk": "7473",
      "timestamp": 1663928177,
      "ems": null
    },
    {
      "latitude": 51.691746,
      "longitude": 19.45755,
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
      "heading": 152,
      "squawk": "7473",
      "timestamp": 1663928181,
      "ems": null
    },
    {
      "latitude": 51.689976,
      "longitude": 19.458389,
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
      "heading": 170,
      "squawk": "7473",
      "timestamp": 1663928185,
      "ems": null
    },
    {
      "latitude": 51.688484,
      "longitude": 19.458237,
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
      "heading": 184,
      "squawk": "7473",
      "timestamp": 1663928189,
      "ems": null
    },
    {
      "latitude": 51.687416,
      "longitude": 19.457779,
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
      "heading": 196,
      "squawk": "7473",
      "timestamp": 1663928191,
      "ems": null
    },
    {
      "latitude": 51.686325,
      "longitude": 19.45701,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 206,
      "squawk": "7473",
      "timestamp": 1663928194,
      "ems": null
    },
    {
      "latitude": 51.685455,
      "longitude": 19.455971,
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
      "heading": 218,
      "squawk": "7473",
      "timestamp": 1663928197,
      "ems": null
    },
    {
      "latitude": 51.684677,
      "longitude": 19.454634,
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
      "heading": 230,
      "squawk": "7473",
      "timestamp": 1663928200,
      "ems": null
    },
    {
      "latitude": 51.684128,
      "longitude": 19.453299,
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
      "heading": 242,
      "squawk": "7473",
      "timestamp": 1663928203,
      "ems": null
    },
    {
      "latitude": 51.683739,
      "longitude": 19.451599,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663928206,
      "ems": null
    },
    {
      "latitude": 51.683552,
      "longitude": 19.449387,
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
      "heading": 266,
      "squawk": "7473",
      "timestamp": 1663928210,
      "ems": null
    },
    {
      "latitude": 51.683598,
      "longitude": 19.447708,
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
      "heading": 274,
      "squawk": "7473",
      "timestamp": 1663928212,
      "ems": null
    },
    {
      "latitude": 51.683784,
      "longitude": 19.445953,
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
      "heading": 281,
      "squawk": "7473",
      "timestamp": 1663928215,
      "ems": null
    },
    {
      "latitude": 51.684082,
      "longitude": 19.444168,
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
      "heading": 285,
      "squawk": "7473",
      "timestamp": 1663928218,
      "ems": null
    },
    {
      "latitude": 51.684448,
      "longitude": 19.442461,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 291,
      "squawk": "7473",
      "timestamp": 1663928221,
      "ems": null
    },
    {
      "latitude": 51.68486,
      "longitude": 19.441124,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 296,
      "squawk": "7473",
      "timestamp": 1663928224,
      "ems": null
    },
    {
      "latitude": 51.685593,
      "longitude": 19.439417,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 312,
      "squawk": "7473",
      "timestamp": 1663928227,
      "ems": null
    },
    {
      "latitude": 51.686508,
      "longitude": 19.438154,
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
      "heading": 322,
      "squawk": "7473",
      "timestamp": 1663928230,
      "ems": null
    },
    {
      "latitude": 51.687698,
      "longitude": 19.437263,
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
      "heading": 339,
      "squawk": "7473",
      "timestamp": 1663928234,
      "ems": null
    },
    {
      "latitude": 51.688904,
      "longitude": 19.436951,
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
      "heading": 355,
      "squawk": "7473",
      "timestamp": 1663928237,
      "ems": null
    },
    {
      "latitude": 51.690033,
      "longitude": 19.437115,
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
      "heading": 9,
      "squawk": "7473",
      "timestamp": 1663928240,
      "ems": null
    },
    {
      "latitude": 51.691139,
      "longitude": 19.437714,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 22,
      "squawk": "7473",
      "timestamp": 1663928242,
      "ems": null
    },
    {
      "latitude": 51.692165,
      "longitude": 19.438782,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 31,
      "squawk": "7473",
      "timestamp": 1663928246,
      "ems": null
    },
    {
      "latitude": 51.693001,
      "longitude": 19.440155,
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
      "heading": 47,
      "squawk": "7473",
      "timestamp": 1663928249,
      "ems": null
    },
    {
      "latitude": 51.693741,
      "longitude": 19.441866,
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
      "heading": 59,
      "squawk": "7473",
      "timestamp": 1663928252,
      "ems": null
    },
    {
      "latitude": 51.694164,
      "longitude": 19.443436,
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
      "heading": 66,
      "squawk": "7473",
      "timestamp": 1663928254,
      "ems": null
    },
    {
      "latitude": 51.694443,
      "longitude": 19.445496,
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
      "heading": 80,
      "squawk": "7473",
      "timestamp": 1663928257,
      "ems": null
    },
    {
      "latitude": 51.694492,
      "longitude": 19.447708,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7473",
      "timestamp": 1663928261,
      "ems": null
    },
    {
      "latitude": 51.69429,
      "longitude": 19.449661,
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
      "heading": 101,
      "squawk": "7473",
      "timestamp": 1663928263,
      "ems": null
    },
    {
      "latitude": 51.693878,
      "longitude": 19.451517,
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
      "heading": 112,
      "squawk": "7473",
      "timestamp": 1663928266,
      "ems": null
    },
    {
      "latitude": 51.693188,
      "longitude": 19.453278,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 124,
      "squawk": "7473",
      "timestamp": 1663928269,
      "ems": null
    },
    {
      "latitude": 51.692303,
      "longitude": 19.45488,
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
      "heading": 133,
      "squawk": "7473",
      "timestamp": 1663928273,
      "ems": null
    },
    {
      "latitude": 51.691418,
      "longitude": 19.4561,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7473",
      "timestamp": 1663928276,
      "ems": null
    },
    {
      "latitude": 51.690395,
      "longitude": 19.457092,
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
      "heading": 150,
      "squawk": "7473",
      "timestamp": 1663928279,
      "ems": null
    },
    {
      "latitude": 51.689278,
      "longitude": 19.457855,
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
      "heading": 161,
      "squawk": "7473",
      "timestamp": 1663928281,
      "ems": null
    },
    {
      "latitude": 51.688065,
      "longitude": 19.458197,
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
      "heading": 174,
      "squawk": "7473",
      "timestamp": 1663928285,
      "ems": null
    },
    {
      "latitude": 51.686996,
      "longitude": 19.458237,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 182,
      "squawk": "7473",
      "timestamp": 1663928287,
      "ems": null
    },
    {
      "latitude": 51.685776,
      "longitude": 19.457827,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 194,
      "squawk": "7473",
      "timestamp": 1663928291,
      "ems": null
    },
    {
      "latitude": 51.684669,
      "longitude": 19.457092,
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
      "heading": 204,
      "squawk": "7473",
      "timestamp": 1663928294,
      "ems": null
    },
    {
      "latitude": 51.683716,
      "longitude": 19.456194,
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
      "heading": 212,
      "squawk": "7473",
      "timestamp": 1663928297,
      "ems": null
    },
    {
      "latitude": 51.682892,
      "longitude": 19.45508,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7473",
      "timestamp": 1663928300,
      "ems": null
    },
    {
      "latitude": 51.682343,
      "longitude": 19.453659,
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
      "heading": 242,
      "squawk": "7473",
      "timestamp": 1663928303,
      "ems": null
    },
    {
      "latitude": 51.682014,
      "longitude": 19.452133,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "7473",
      "timestamp": 1663928305,
      "ems": null
    },
    {
      "latitude": 51.681931,
      "longitude": 19.450403,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "7473",
      "timestamp": 1663928309,
      "ems": null
    },
    {
      "latitude": 51.682014,
      "longitude": 19.4487,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 278,
      "squawk": "7473",
      "timestamp": 1663928312,
      "ems": null
    },
    {
      "latitude": 51.682297,
      "longitude": 19.44721,
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
      "heading": 288,
      "squawk": "7473",
      "timestamp": 1663928315,
      "ems": null
    },
    {
      "latitude": 51.682758,
      "longitude": 19.445572,
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
      "heading": 297,
      "squawk": "7473",
      "timestamp": 1663928318,
      "ems": null
    },
    {
      "latitude": 51.683395,
      "longitude": 19.444242,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 311,
      "squawk": "7473",
      "timestamp": 1663928321,
      "ems": null
    },
    {
      "latitude": 51.684311,
      "longitude": 19.44298,
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
      "heading": 321,
      "squawk": "7473",
      "timestamp": 1663928324,
      "ems": null
    },
    {
      "latitude": 51.685181,
      "longitude": 19.442015,
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
      "heading": 326,
      "squawk": "7473",
      "timestamp": 1663928327,
      "ems": null
    },
    {
      "latitude": 51.686253,
      "longitude": 19.441071,
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
      "heading": 334,
      "squawk": "7473",
      "timestamp": 1663928330,
      "ems": null
    },
    {
      "latitude": 51.687138,
      "longitude": 19.440613,
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
      "heading": 345,
      "squawk": "7473",
      "timestamp": 1663928333,
      "ems": null
    },
    {
      "latitude": 51.688293,
      "longitude": 19.440605,
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
      "heading": 5,
      "squawk": "7473",
      "timestamp": 1663928336,
      "ems": null
    },
    {
      "latitude": 51.689419,
      "longitude": 19.441223,
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
      "heading": 27,
      "squawk": "7473",
      "timestamp": 1663928339,
      "ems": null
    },
    {
      "latitude": 51.690125,
      "longitude": 19.442015,
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
      "heading": 35,
      "squawk": "7473",
      "timestamp": 1663928341,
      "ems": null
    },
    {
      "latitude": 51.690815,
      "longitude": 19.443054,
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
      "heading": 44,
      "squawk": "7473",
      "timestamp": 1663928343,
      "ems": null
    },
    {
      "latitude": 51.691544,
      "longitude": 19.444168,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 43,
      "squawk": "7473",
      "timestamp": 1663928346,
      "ems": null
    },
    {
      "latitude": 51.692368,
      "longitude": 19.445059,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 33,
      "squawk": "7473",
      "timestamp": 1663928348,
      "ems": null
    },
    {
      "latitude": 51.693054,
      "longitude": 19.445726,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 27,
      "squawk": "7473",
      "timestamp": 1663928350,
      "ems": null
    },
    {
      "latitude": 51.694382,
      "longitude": 19.44632,
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
      "heading": 10,
      "squawk": "7473",
      "timestamp": 1663928354,
      "ems": null
    },
    {
      "latitude": 51.69556,
      "longitude": 19.446335,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 356,
      "squawk": "7473",
      "timestamp": 1663928357,
      "ems": null
    },
    {
      "latitude": 51.696724,
      "longitude": 19.445801,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 343,
      "squawk": "7473",
      "timestamp": 1663928360,
      "ems": null
    },
    {
      "latitude": 51.697937,
      "longitude": 19.445038,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 337,
      "squawk": "7473",
      "timestamp": 1663928363,
      "ems": null
    },
    {
      "latitude": 51.699005,
      "longitude": 19.444275,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 333,
      "squawk": "7473",
      "timestamp": 1663928366,
      "ems": null
    },
    {
      "latitude": 51.700287,
      "longitude": 19.443203,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 332,
      "squawk": "7473",
      "timestamp": 1663928369,
      "ems": null
    },
    {
      "latitude": 51.701382,
      "longitude": 19.442291,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 332,
      "squawk": "7473",
      "timestamp": 1663928372,
      "ems": null
    },
    {
      "latitude": 51.70245,
      "longitude": 19.441376,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 332,
      "squawk": "7473",
      "timestamp": 1663928375,
      "ems": null
    },
    {
      "latitude": 51.70343,
      "longitude": 19.440613,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 334,
      "squawk": "7473",
      "timestamp": 1663928378,
      "ems": null
    },
    {
      "latitude": 51.704731,
      "longitude": 19.43985,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 344,
      "squawk": "7473",
      "timestamp": 1663928381,
      "ems": null
    },
    {
      "latitude": 51.705963,
      "longitude": 19.439714,
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
      "heading": 357,
      "squawk": "7473",
      "timestamp": 1663928384,
      "ems": null
    },
    {
      "latitude": 51.707062,
      "longitude": 19.440084,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 17,
      "squawk": "7473",
      "timestamp": 1663928387,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 19.440901,
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
      "heading": 29,
      "squawk": "7473",
      "timestamp": 1663928390,
      "ems": null
    },
    {
      "latitude": 51.708893,
      "longitude": 19.44194,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 40,
      "squawk": "7473",
      "timestamp": 1663928393,
      "ems": null
    },
    {
      "latitude": 51.709526,
      "longitude": 19.442978,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 47,
      "squawk": "7473",
      "timestamp": 1663928396,
      "ems": null
    },
    {
      "latitude": 51.710224,
      "longitude": 19.444275,
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
      "heading": 49,
      "squawk": "7473",
      "timestamp": 1663928399,
      "ems": null
    },
    {
      "latitude": 51.710785,
      "longitude": 19.445496,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 52,
      "squawk": "7473",
      "timestamp": 1663928402,
      "ems": null
    },
    {
      "latitude": 51.711319,
      "longitude": 19.446617,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 54,
      "squawk": "7473",
      "timestamp": 1663928405,
      "ems": null
    },
    {
      "latitude": 51.711868,
      "longitude": 19.448029,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "7473",
      "timestamp": 1663928408,
      "ems": null
    },
    {
      "latitude": 51.712326,
      "longitude": 19.449736,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 69,
      "squawk": "7473",
      "timestamp": 1663928411,
      "ems": null
    },
    {
      "latitude": 51.712646,
      "longitude": 19.451443,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 73,
      "squawk": "7473",
      "timestamp": 1663928414,
      "ems": null
    },
    {
      "latitude": 51.712971,
      "longitude": 19.453201,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 74,
      "squawk": "7473",
      "timestamp": 1663928417,
      "ems": null
    },
    {
      "latitude": 51.713253,
      "longitude": 19.45488,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 72,
      "squawk": "7473",
      "timestamp": 1663928420,
      "ems": null
    },
    {
      "latitude": 51.713577,
      "longitude": 19.456558,
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
      "heading": 73,
      "squawk": "7473",
      "timestamp": 1663928423,
      "ems": null
    },
    {
      "latitude": 51.713928,
      "longitude": 19.458197,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 68,
      "squawk": "7473",
      "timestamp": 1663928426,
      "ems": null
    },
    {
      "latitude": 51.714432,
      "longitude": 19.459831,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 59,
      "squawk": "7473",
      "timestamp": 1663928429,
      "ems": null
    },
    {
      "latitude": 51.715252,
      "longitude": 19.461212,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 41,
      "squawk": "7473",
      "timestamp": 1663928432,
      "ems": null
    },
    {
      "latitude": 51.716,
      "longitude": 19.461899,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "7473",
      "timestamp": 1663928435,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.462357,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 9,
      "squawk": "7473",
      "timestamp": 1663928438,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.46228,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 355,
      "squawk": "7473",
      "timestamp": 1663928441,
      "ems": null
    },
    {
      "latitude": 51.719303,
      "longitude": 19.461975,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "7473",
      "timestamp": 1663928444,
      "ems": null
    },
    {
      "latitude": 51.720329,
      "longitude": 19.461441,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "7473",
      "timestamp": 1663928447,
      "ems": null
    },
    {
      "latitude": 51.721165,
      "longitude": 19.460983,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 341,
      "squawk": "7473",
      "timestamp": 1663928450,
      "ems": null
    },
    {
      "latitude": 51.72226,
      "longitude": 19.46035,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "7473",
      "timestamp": 1663928453,
      "ems": null
    },
    {
      "latitude": 51.7229,
      "longitude": 19.45998,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7473",
      "timestamp": 1663928456,
      "ems": null
    },
    {
      "latitude": 51.724045,
      "longitude": 19.459236,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 338,
      "squawk": "7473",
      "timestamp": 1663928459,
      "ems": null
    },
    {
      "latitude": 51.724915,
      "longitude": 19.458569,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 332,
      "squawk": "7473",
      "timestamp": 1663928462,
      "ems": null
    },
    {
      "latitude": 51.725773,
      "longitude": 19.457779,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "7473",
      "timestamp": 1663928465,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.457169,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 328,
      "squawk": "7473",
      "timestamp": 1663928468,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 19.456415,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 331,
      "squawk": "7473",
      "timestamp": 1663928471,
      "ems": null
    },
    {
      "latitude": 51.728195,
      "longitude": 19.455566,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 329,
      "squawk": "7473",
      "timestamp": 1663928474,
      "ems": null
    },
    {
      "latitude": 51.728989,
      "longitude": 19.454782,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 328,
      "squawk": "7473",
      "timestamp": 1663928477,
      "ems": null
    },
    {
      "latitude": 51.729824,
      "longitude": 19.453888,
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
      "heading": 324,
      "squawk": "7473",
      "timestamp": 1663928480,
      "ems": null
    },
    {
      "latitude": 51.730476,
      "longitude": 19.452972,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 318,
      "squawk": "7473",
      "timestamp": 1663928483,
      "ems": null
    },
    {
      "latitude": 51.731174,
      "longitude": 19.451599,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "7473",
      "timestamp": 1663928486,
      "ems": null
    },
    {
      "latitude": 51.731644,
      "longitude": 19.449957,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 290,
      "squawk": "7473",
      "timestamp": 1663928489,
      "ems": null
    },
    {
      "latitude": 51.731827,
      "longitude": 19.448547,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 279,
      "squawk": "7473",
      "timestamp": 1663928492,
      "ems": null
    },
    {
      "latitude": 51.731873,
      "longitude": 19.447098,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 266,
      "squawk": "7473",
      "timestamp": 1663928495,
      "ems": null
    },
    {
      "latitude": 51.731686,
      "longitude": 19.44519,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 260,
      "squawk": "7473",
      "timestamp": 1663928498,
      "ems": null
    },
    {
      "latitude": 51.731453,
      "longitude": 19.443359,
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
      "heading": 256,
      "squawk": "7473",
      "timestamp": 1663928501,
      "ems": null
    },
    {
      "latitude": 51.731174,
      "longitude": 19.441833,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "7473",
      "timestamp": 1663928504,
      "ems": null
    },
    {
      "latitude": 51.730865,
      "longitude": 19.440382,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663928507,
      "ems": null
    },
    {
      "latitude": 51.730591,
      "longitude": 19.438971,
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
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663928510,
      "ems": null
    },
    {
      "latitude": 51.730335,
      "longitude": 19.437866,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663928513,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.436447,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 253,
      "squawk": "7473",
      "timestamp": 1663928516,
      "ems": null
    },
    {
      "latitude": 51.729858,
      "longitude": 19.435261,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663928518,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.433289,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663928522,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.43244,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663928525,
      "ems": null
    },
    {
      "latitude": 51.729126,
      "longitude": 19.431696,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 252,
      "squawk": "7473",
      "timestamp": 1663928526,
      "ems": null
    },
    {
      "latitude": 51.72876,
      "longitude": 19.42984,
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
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663928530,
      "ems": null
    },
    {
      "latitude": 51.728008,
      "longitude": 19.426346,
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
      "heading": 251,
      "squawk": "7473",
      "timestamp": 1663928538,
      "ems": null
    },
    {
      "latitude": 51.727295,
      "longitude": 19.423086,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663928546,
      "ems": null
    },
    {
      "latitude": 51.726658,
      "longitude": 19.420166,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663928554,
      "ems": null
    },
    {
      "latitude": 51.725681,
      "longitude": 19.415512,
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
      "heading": 249,
      "squawk": "7473",
      "timestamp": 1663928565,
      "ems": null
    },
    {
      "latitude": 51.72517,
      "longitude": 19.413376,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663928571,
      "ems": null
    },
    {
      "latitude": 51.72464,
      "longitude": 19.410837,
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
      "squawk": "7473",
      "timestamp": 1663928577,
      "ems": null
    },
    {
      "latitude": 51.723587,
      "longitude": 19.405975,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663928588,
      "ems": null
    },
    {
      "latitude": 51.722626,
      "longitude": 19.401632,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 250,
      "squawk": "7473",
      "timestamp": 1663928600,
      "ems": null
    }
  ]
};
