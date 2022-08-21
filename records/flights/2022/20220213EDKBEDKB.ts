import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220213EDKBEDKB",
    callsign: "DETCY",
    name: "Cross country, LO app EDDK",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 1, 13, 10, 25).getTime(),
    arrival: new Date(2022, 1, 13, 13, 0).getTime(),
    singleEnginePistonTime: 155,
    picTime: 155,
    dualTime: 0,
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
      modes: "3D3720",
      registration: "D-ETCY",
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
      "latitude": 50.758438,
      "longitude": 7.19174,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 168,
      "squawk": "0",
      "timestamp": 1644748357,
      "ems": null
    },
    {
      "latitude": 50.756927,
      "longitude": 7.191772,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 186,
      "squawk": "0",
      "timestamp": 1644748363,
      "ems": null
    },
    {
      "latitude": 50.756229,
      "longitude": 7.191544,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "0",
      "timestamp": 1644748366,
      "ems": null
    },
    {
      "latitude": 50.755508,
      "longitude": 7.19122,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 201,
      "squawk": "0",
      "timestamp": 1644748369,
      "ems": null
    },
    {
      "latitude": 50.754833,
      "longitude": 7.190704,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 207,
      "squawk": "0",
      "timestamp": 1644748372,
      "ems": null
    },
    {
      "latitude": 50.754089,
      "longitude": 7.190094,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 209,
      "squawk": "0",
      "timestamp": 1644748375,
      "ems": null
    },
    {
      "latitude": 50.753532,
      "longitude": 7.189484,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 220,
      "squawk": "0",
      "timestamp": 1644748378,
      "ems": null
    },
    {
      "latitude": 50.752972,
      "longitude": 7.188568,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 226,
      "squawk": "0",
      "timestamp": 1644748381,
      "ems": null
    },
    {
      "latitude": 50.752415,
      "longitude": 7.187653,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 228,
      "squawk": "0",
      "timestamp": 1644748384,
      "ems": null
    },
    {
      "latitude": 50.751854,
      "longitude": 7.186584,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "0",
      "timestamp": 1644748387,
      "ems": null
    },
    {
      "latitude": 50.751343,
      "longitude": 7.185516,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 232,
      "squawk": "0",
      "timestamp": 1644748390,
      "ems": null
    },
    {
      "latitude": 50.750923,
      "longitude": 7.184601,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 237,
      "squawk": "0",
      "timestamp": 1644748393,
      "ems": null
    },
    {
      "latitude": 50.750473,
      "longitude": 7.183203,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 245,
      "squawk": "0",
      "timestamp": 1644748396,
      "ems": null
    },
    {
      "latitude": 50.750179,
      "longitude": 7.182007,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "0",
      "timestamp": 1644748399,
      "ems": null
    },
    {
      "latitude": 50.749878,
      "longitude": 7.180604,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1644748402,
      "ems": null
    },
    {
      "latitude": 50.749619,
      "longitude": 7.17926,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1644748405,
      "ems": null
    },
    {
      "latitude": 50.749557,
      "longitude": 7.177635,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1644748408,
      "ems": null
    },
    {
      "latitude": 50.749573,
      "longitude": 7.17598,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1644748411,
      "ems": null
    },
    {
      "latitude": 50.749603,
      "longitude": 7.174518,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1644748414,
      "ems": null
    },
    {
      "latitude": 50.749714,
      "longitude": 7.172699,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1644748417,
      "ems": null
    },
    {
      "latitude": 50.749832,
      "longitude": 7.171177,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1644748420,
      "ems": null
    },
    {
      "latitude": 50.749924,
      "longitude": 7.169618,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1644748423,
      "ems": null
    },
    {
      "latitude": 50.749947,
      "longitude": 7.168121,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1644748426,
      "ems": null
    },
    {
      "latitude": 50.749947,
      "longitude": 7.166748,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1644748429,
      "ems": null
    },
    {
      "latitude": 50.750015,
      "longitude": 7.164793,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1644748432,
      "ems": null
    },
    {
      "latitude": 50.750107,
      "longitude": 7.163531,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1644748435,
      "ems": null
    },
    {
      "latitude": 50.750271,
      "longitude": 7.162094,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1644748438,
      "ems": null
    },
    {
      "latitude": 50.750458,
      "longitude": 7.15889,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1644748444,
      "ems": null
    },
    {
      "latitude": 50.750504,
      "longitude": 7.155685,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1644748450,
      "ems": null
    },
    {
      "latitude": 50.750504,
      "longitude": 7.154236,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1644748453,
      "ems": null
    },
    {
      "latitude": 50.750519,
      "longitude": 7.151432,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1644748459,
      "ems": null
    },
    {
      "latitude": 50.75061,
      "longitude": 7.149279,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1644748465,
      "ems": null
    },
    {
      "latitude": 50.750565,
      "longitude": 7.147572,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1644748468,
      "ems": null
    },
    {
      "latitude": 50.750553,
      "longitude": 7.146378,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1644748471,
      "ems": null
    },
    {
      "latitude": 50.750504,
      "longitude": 7.144928,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1644748474,
      "ems": null
    },
    {
      "latitude": 50.750473,
      "longitude": 7.143489,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1644748477,
      "ems": null
    },
    {
      "latitude": 50.750412,
      "longitude": 7.140656,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1644748483,
      "ems": null
    },
    {
      "latitude": 50.750381,
      "longitude": 7.137847,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1644748489,
      "ems": null
    },
    {
      "latitude": 50.750473,
      "longitude": 7.135323,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1644748495,
      "ems": null
    },
    {
      "latitude": 50.750519,
      "longitude": 7.13421,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1644748498,
      "ems": null
    },
    {
      "latitude": 50.75061,
      "longitude": 7.13176,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1644748504,
      "ems": null
    },
    {
      "latitude": 50.75061,
      "longitude": 7.130943,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1644748507,
      "ems": null
    },
    {
      "latitude": 50.750645,
      "longitude": 7.128448,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1644748513,
      "ems": null
    },
    {
      "latitude": 50.750599,
      "longitude": 7.12616,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1644748519,
      "ems": null
    },
    {
      "latitude": 50.750565,
      "longitude": 7.125154,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1644748522,
      "ems": null
    },
    {
      "latitude": 50.750519,
      "longitude": 7.124114,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1644748525,
      "ems": null
    },
    {
      "latitude": 50.750412,
      "longitude": 7.123184,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1644748528,
      "ems": null
    },
    {
      "latitude": 50.750271,
      "longitude": 7.122269,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1644748531,
      "ems": null
    },
    {
      "latitude": 50.750153,
      "longitude": 7.121294,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1644748534,
      "ems": null
    },
    {
      "latitude": 50.749992,
      "longitude": 7.120285,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1644748537,
      "ems": null
    },
    {
      "latitude": 50.749901,
      "longitude": 7.119446,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1644748540,
      "ems": null
    },
    {
      "latitude": 50.749741,
      "longitude": 7.118473,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1644748543,
      "ems": null
    },
    {
      "latitude": 50.749573,
      "longitude": 7.117462,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1644748546,
      "ems": null
    },
    {
      "latitude": 50.749466,
      "longitude": 7.116542,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1644748549,
      "ems": null
    },
    {
      "latitude": 50.749329,
      "longitude": 7.115503,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1644748552,
      "ems": null
    },
    {
      "latitude": 50.749153,
      "longitude": 7.114563,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1644748555,
      "ems": null
    },
    {
      "latitude": 50.748962,
      "longitude": 7.113796,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1644748558,
      "ems": null
    },
    {
      "latitude": 50.748737,
      "longitude": 7.112961,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1644748561,
      "ems": null
    },
    {
      "latitude": 50.748322,
      "longitude": 7.112014,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1644748564,
      "ems": null
    },
    {
      "latitude": 50.748047,
      "longitude": 7.111049,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1644748567,
      "ems": null
    },
    {
      "latitude": 50.747757,
      "longitude": 7.110138,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1644748570,
      "ems": null
    },
    {
      "latitude": 50.747478,
      "longitude": 7.109299,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1644748573,
      "ems": null
    },
    {
      "latitude": 50.747131,
      "longitude": 7.108303,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1644748576,
      "ems": null
    },
    {
      "latitude": 50.746811,
      "longitude": 7.107412,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1644748579,
      "ems": null
    },
    {
      "latitude": 50.746536,
      "longitude": 7.106373,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1644748582,
      "ems": null
    },
    {
      "latitude": 50.746315,
      "longitude": 7.105484,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1644748585,
      "ems": null
    },
    {
      "latitude": 50.746082,
      "longitude": 7.104568,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "timestamp": 1644748588,
      "ems": null
    },
    {
      "latitude": 50.745895,
      "longitude": 7.103348,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1644748591,
      "ems": null
    },
    {
      "latitude": 50.745804,
      "longitude": 7.102216,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1644748594,
      "ems": null
    },
    {
      "latitude": 50.745804,
      "longitude": 7.101102,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1644748597,
      "ems": null
    },
    {
      "latitude": 50.746037,
      "longitude": 7.099762,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1644748600,
      "ems": null
    },
    {
      "latitude": 50.74649,
      "longitude": 7.098356,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1644748603,
      "ems": null
    },
    {
      "latitude": 50.747013,
      "longitude": 7.097321,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1644748606,
      "ems": null
    },
    {
      "latitude": 50.747665,
      "longitude": 7.096176,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1644748609,
      "ems": null
    },
    {
      "latitude": 50.748318,
      "longitude": 7.094879,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1644748612,
      "ems": null
    },
    {
      "latitude": 50.748779,
      "longitude": 7.093902,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1644748615,
      "ems": null
    },
    {
      "latitude": 50.749386,
      "longitude": 7.092361,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1644748618,
      "ems": null
    },
    {
      "latitude": 50.749851,
      "longitude": 7.090988,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1644748621,
      "ems": null
    },
    {
      "latitude": 50.750366,
      "longitude": 7.089462,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1644748624,
      "ems": null
    },
    {
      "latitude": 50.750877,
      "longitude": 7.088013,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1644748627,
      "ems": null
    },
    {
      "latitude": 50.751343,
      "longitude": 7.086716,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1644748630,
      "ems": null
    },
    {
      "latitude": 50.752441,
      "longitude": 7.084103,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1644748636,
      "ems": null
    },
    {
      "latitude": 50.752945,
      "longitude": 7.082915,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1644748639,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 7.080765,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1644748645,
      "ems": null
    },
    {
      "latitude": 50.754501,
      "longitude": 7.079649,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1644748648,
      "ems": null
    },
    {
      "latitude": 50.755051,
      "longitude": 7.07861,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644748651,
      "ems": null
    },
    {
      "latitude": 50.7556,
      "longitude": 7.077571,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644748654,
      "ems": null
    },
    {
      "latitude": 50.756184,
      "longitude": 7.076416,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 310,
      "squawk": "7040",
      "timestamp": 1644748657,
      "ems": null
    },
    {
      "latitude": 50.756744,
      "longitude": 7.075344,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 311,
      "squawk": "7040",
      "timestamp": 1644748660,
      "ems": null
    },
    {
      "latitude": 50.757858,
      "longitude": 7.073212,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 301,
      "squawk": "7040",
      "timestamp": 1644748666,
      "ems": null
    },
    {
      "latitude": 50.758232,
      "longitude": 7.072067,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 298,
      "squawk": "7040",
      "timestamp": 1644748669,
      "ems": null
    },
    {
      "latitude": 50.758621,
      "longitude": 7.071038,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 301,
      "squawk": "7040",
      "timestamp": 1644748672,
      "ems": null
    },
    {
      "latitude": 50.759724,
      "longitude": 7.068634,
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
      "heading": 306,
      "squawk": "7040",
      "timestamp": 1644748678,
      "ems": null
    },
    {
      "latitude": 50.760864,
      "longitude": 7.066288,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 308,
      "squawk": "7040",
      "timestamp": 1644748684,
      "ems": null
    },
    {
      "latitude": 50.762146,
      "longitude": 7.064135,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "7040",
      "timestamp": 1644748690,
      "ems": null
    },
    {
      "latitude": 50.762833,
      "longitude": 7.063096,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644748693,
      "ems": null
    },
    {
      "latitude": 50.763771,
      "longitude": 7.061996,
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
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644748696,
      "ems": null
    },
    {
      "latitude": 50.764618,
      "longitude": 7.060869,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7040",
      "timestamp": 1644748699,
      "ems": null
    },
    {
      "latitude": 50.765396,
      "longitude": 7.059978,
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
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644748702,
      "ems": null
    },
    {
      "latitude": 50.766495,
      "longitude": 7.05879,
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
      "heading": 326,
      "squawk": "7040",
      "timestamp": 1644748705,
      "ems": null
    },
    {
      "latitude": 50.767498,
      "longitude": 7.0578,
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
      "heading": 329,
      "squawk": "7040",
      "timestamp": 1644748708,
      "ems": null
    },
    {
      "latitude": 50.76852,
      "longitude": 7.056961,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 332,
      "squawk": "7040",
      "timestamp": 1644748711,
      "ems": null
    },
    {
      "latitude": 50.769653,
      "longitude": 7.056192,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644748714,
      "ems": null
    },
    {
      "latitude": 50.770523,
      "longitude": 7.05574,
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
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644748717,
      "ems": null
    },
    {
      "latitude": 50.771358,
      "longitude": 7.055206,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644748720,
      "ems": null
    },
    {
      "latitude": 50.772804,
      "longitude": 7.054443,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644748723,
      "ems": null
    },
    {
      "latitude": 50.773911,
      "longitude": 7.053742,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644748726,
      "ems": null
    },
    {
      "latitude": 50.774944,
      "longitude": 7.053223,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644748729,
      "ems": null
    },
    {
      "latitude": 50.776016,
      "longitude": 7.052612,
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
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644748732,
      "ems": null
    },
    {
      "latitude": 50.777023,
      "longitude": 7.051961,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644748735,
      "ems": null
    },
    {
      "latitude": 50.778111,
      "longitude": 7.051239,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "7040",
      "timestamp": 1644748738,
      "ems": null
    },
    {
      "latitude": 50.781143,
      "longitude": 7.048917,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644748747,
      "ems": null
    },
    {
      "latitude": 50.782207,
      "longitude": 7.048035,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7040",
      "timestamp": 1644748751,
      "ems": null
    },
    {
      "latitude": 50.783569,
      "longitude": 7.046913,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 332,
      "squawk": "7040",
      "timestamp": 1644748755,
      "ems": null
    },
    {
      "latitude": 50.784714,
      "longitude": 7.045948,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 329,
      "squawk": "7040",
      "timestamp": 1644748759,
      "ems": null
    },
    {
      "latitude": 50.785557,
      "longitude": 7.045059,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 325,
      "squawk": "7040",
      "timestamp": 1644748762,
      "ems": null
    },
    {
      "latitude": 50.786537,
      "longitude": 7.043915,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 323,
      "squawk": "7040",
      "timestamp": 1644748765,
      "ems": null
    },
    {
      "latitude": 50.787422,
      "longitude": 7.042847,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7040",
      "timestamp": 1644748768,
      "ems": null
    },
    {
      "latitude": 50.788258,
      "longitude": 7.041855,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 322,
      "squawk": "7040",
      "timestamp": 1644748771,
      "ems": null
    },
    {
      "latitude": 50.789154,
      "longitude": 7.040678,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644748774,
      "ems": null
    },
    {
      "latitude": 50.790024,
      "longitude": 7.039564,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644748777,
      "ems": null
    },
    {
      "latitude": 50.790756,
      "longitude": 7.038525,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644748780,
      "ems": null
    },
    {
      "latitude": 50.791611,
      "longitude": 7.037354,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644748783,
      "ems": null
    },
    {
      "latitude": 50.79245,
      "longitude": 7.036285,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644748786,
      "ems": null
    },
    {
      "latitude": 50.79332,
      "longitude": 7.03511,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644748789,
      "ems": null
    },
    {
      "latitude": 50.793594,
      "longitude": 7.034739,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644748790,
      "ems": null
    },
    {
      "latitude": 50.795895,
      "longitude": 7.031937,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 325,
      "squawk": "7040",
      "timestamp": 1644748798,
      "ems": null
    },
    {
      "latitude": 50.79678,
      "longitude": 7.031021,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 329,
      "squawk": "7040",
      "timestamp": 1644748801,
      "ems": null
    },
    {
      "latitude": 50.797852,
      "longitude": 7.030062,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "7040",
      "timestamp": 1644748804,
      "ems": null
    },
    {
      "latitude": 50.79892,
      "longitude": 7.029266,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7040",
      "timestamp": 1644748807,
      "ems": null
    },
    {
      "latitude": 50.800037,
      "longitude": 7.028503,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "7040",
      "timestamp": 1644748810,
      "ems": null
    },
    {
      "latitude": 50.801105,
      "longitude": 7.027817,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "7040",
      "timestamp": 1644748813,
      "ems": null
    },
    {
      "latitude": 50.802177,
      "longitude": 7.02713,
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
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644748816,
      "ems": null
    },
    {
      "latitude": 50.803253,
      "longitude": 7.026499,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644748818,
      "ems": null
    },
    {
      "latitude": 50.804489,
      "longitude": 7.025831,
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
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644748822,
      "ems": null
    },
    {
      "latitude": 50.805679,
      "longitude": 7.025163,
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
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644748825,
      "ems": null
    },
    {
      "latitude": 50.806648,
      "longitude": 7.024536,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644748828,
      "ems": null
    },
    {
      "latitude": 50.807858,
      "longitude": 7.023849,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644748831,
      "ems": null
    },
    {
      "latitude": 50.808929,
      "longitude": 7.023233,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644748834,
      "ems": null
    },
    {
      "latitude": 50.811024,
      "longitude": 7.021713,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644748840,
      "ems": null
    },
    {
      "latitude": 50.813095,
      "longitude": 7.020115,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644748846,
      "ems": null
    },
    {
      "latitude": 50.81414,
      "longitude": 7.019348,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644748849,
      "ems": null
    },
    {
      "latitude": 50.815155,
      "longitude": 7.018556,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644748852,
      "ems": null
    },
    {
      "latitude": 50.816238,
      "longitude": 7.017822,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644748855,
      "ems": null
    },
    {
      "latitude": 50.817074,
      "longitude": 7.017136,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "7040",
      "timestamp": 1644748858,
      "ems": null
    },
    {
      "latitude": 50.818237,
      "longitude": 7.016144,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "7040",
      "timestamp": 1644748861,
      "ems": null
    },
    {
      "latitude": 50.819229,
      "longitude": 7.015364,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "7040",
      "timestamp": 1644748864,
      "ems": null
    },
    {
      "latitude": 50.820286,
      "longitude": 7.014389,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 330,
      "squawk": "7040",
      "timestamp": 1644748867,
      "ems": null
    },
    {
      "latitude": 50.821079,
      "longitude": 7.013626,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "7040",
      "timestamp": 1644748870,
      "ems": null
    },
    {
      "latitude": 50.823452,
      "longitude": 7.011719,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "7040",
      "timestamp": 1644748877,
      "ems": null
    },
    {
      "latitude": 50.824356,
      "longitude": 7.011208,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644748879,
      "ems": null
    },
    {
      "latitude": 50.825546,
      "longitude": 7.010574,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "7040",
      "timestamp": 1644748883,
      "ems": null
    },
    {
      "latitude": 50.826645,
      "longitude": 7.010168,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7040",
      "timestamp": 1644748885,
      "ems": null
    },
    {
      "latitude": 50.827873,
      "longitude": 7.009659,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 347,
      "squawk": "7040",
      "timestamp": 1644748888,
      "ems": null
    },
    {
      "latitude": 50.829163,
      "longitude": 7.009277,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748892,
      "ems": null
    },
    {
      "latitude": 50.830261,
      "longitude": 7.00898,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748895,
      "ems": null
    },
    {
      "latitude": 50.831505,
      "longitude": 7.008667,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748898,
      "ems": null
    },
    {
      "latitude": 50.832809,
      "longitude": 7.008362,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 351,
      "squawk": "7040",
      "timestamp": 1644748901,
      "ems": null
    },
    {
      "latitude": 50.833927,
      "longitude": 7.008133,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "7040",
      "timestamp": 1644748904,
      "ems": null
    },
    {
      "latitude": 50.835114,
      "longitude": 7.007792,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748907,
      "ems": null
    },
    {
      "latitude": 50.836349,
      "longitude": 7.007496,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748910,
      "ems": null
    },
    {
      "latitude": 50.83754,
      "longitude": 7.007199,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748913,
      "ems": null
    },
    {
      "latitude": 50.838768,
      "longitude": 7.006912,
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
      "heading": 352,
      "squawk": "7040",
      "timestamp": 1644748916,
      "ems": null
    },
    {
      "latitude": 50.839977,
      "longitude": 7.006683,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7040",
      "timestamp": 1644748919,
      "ems": null
    },
    {
      "latitude": 50.842354,
      "longitude": 7.006149,
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
      "heading": 352,
      "squawk": "7040",
      "timestamp": 1644748925,
      "ems": null
    },
    {
      "latitude": 50.844727,
      "longitude": 7.005566,
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
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748931,
      "ems": null
    },
    {
      "latitude": 50.847061,
      "longitude": 7.004972,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748937,
      "ems": null
    },
    {
      "latitude": 50.849476,
      "longitude": 7.004318,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748943,
      "ems": null
    },
    {
      "latitude": 50.851959,
      "longitude": 7.00371,
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
      "heading": 352,
      "squawk": "7040",
      "timestamp": 1644748949,
      "ems": null
    },
    {
      "latitude": 50.85413,
      "longitude": 7.00325,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 352,
      "squawk": "7040",
      "timestamp": 1644748955,
      "ems": null
    },
    {
      "latitude": 50.856503,
      "longitude": 7.002716,
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
      "heading": 352,
      "squawk": "7040",
      "timestamp": 1644748961,
      "ems": null
    },
    {
      "latitude": 50.859009,
      "longitude": 7.002151,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "7040",
      "timestamp": 1644748967,
      "ems": null
    },
    {
      "latitude": 50.861347,
      "longitude": 7.001419,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "7040",
      "timestamp": 1644748973,
      "ems": null
    },
    {
      "latitude": 50.862396,
      "longitude": 7.000963,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 343,
      "squawk": "7040",
      "timestamp": 1644748976,
      "ems": null
    },
    {
      "latitude": 50.863403,
      "longitude": 7.000444,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644748979,
      "ems": null
    },
    {
      "latitude": 50.864594,
      "longitude": 6.999924,
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
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644748982,
      "ems": null
    },
    {
      "latitude": 50.865646,
      "longitude": 6.99933,
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
      "heading": 341,
      "squawk": "7040",
      "timestamp": 1644748985,
      "ems": null
    },
    {
      "latitude": 50.866699,
      "longitude": 6.998749,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644748988,
      "ems": null
    },
    {
      "latitude": 50.867798,
      "longitude": 6.998143,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644748991,
      "ems": null
    },
    {
      "latitude": 50.868702,
      "longitude": 6.997604,
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
      "heading": 341,
      "squawk": "7040",
      "timestamp": 1644748994,
      "ems": null
    },
    {
      "latitude": 50.86977,
      "longitude": 6.99707,
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
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644748997,
      "ems": null
    },
    {
      "latitude": 50.870773,
      "longitude": 6.996583,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644749000,
      "ems": null
    },
    {
      "latitude": 50.872971,
      "longitude": 6.995544,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644749006,
      "ems": null
    },
    {
      "latitude": 50.875122,
      "longitude": 6.994505,
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
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644749012,
      "ems": null
    },
    {
      "latitude": 50.87722,
      "longitude": 6.993484,
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
      "heading": 341,
      "squawk": "7040",
      "timestamp": 1644749018,
      "ems": null
    },
    {
      "latitude": 50.879456,
      "longitude": 6.992188,
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
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644749024,
      "ems": null
    },
    {
      "latitude": 50.881531,
      "longitude": 6.99109,
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
      "heading": 341,
      "squawk": "7040",
      "timestamp": 1644749030,
      "ems": null
    },
    {
      "latitude": 50.883499,
      "longitude": 6.990051,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 341,
      "squawk": "7040",
      "timestamp": 1644749036,
      "ems": null
    },
    {
      "latitude": 50.885376,
      "longitude": 6.988938,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644749042,
      "ems": null
    },
    {
      "latitude": 50.887367,
      "longitude": 6.987686,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644749048,
      "ems": null
    },
    {
      "latitude": 50.889496,
      "longitude": 6.986488,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 338,
      "squawk": "7040",
      "timestamp": 1644749054,
      "ems": null
    },
    {
      "latitude": 50.891693,
      "longitude": 6.985152,
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
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644749060,
      "ems": null
    },
    {
      "latitude": 50.893887,
      "longitude": 6.983948,
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
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644749066,
      "ems": null
    },
    {
      "latitude": 50.896259,
      "longitude": 6.982651,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644749072,
      "ems": null
    },
    {
      "latitude": 50.898636,
      "longitude": 6.981354,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644749078,
      "ems": null
    },
    {
      "latitude": 50.900894,
      "longitude": 6.980178,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644749084,
      "ems": null
    },
    {
      "latitude": 50.903137,
      "longitude": 6.978917,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "7040",
      "timestamp": 1644749090,
      "ems": null
    },
    {
      "latitude": 50.90543,
      "longitude": 6.977692,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 341,
      "squawk": "7040",
      "timestamp": 1644749096,
      "ems": null
    },
    {
      "latitude": 50.907761,
      "longitude": 6.976393,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 339,
      "squawk": "7040",
      "timestamp": 1644749102,
      "ems": null
    },
    {
      "latitude": 50.910038,
      "longitude": 6.975021,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644749108,
      "ems": null
    },
    {
      "latitude": 50.91243,
      "longitude": 6.973869,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644749114,
      "ems": null
    },
    {
      "latitude": 50.914883,
      "longitude": 6.972504,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644749120,
      "ems": null
    },
    {
      "latitude": 50.917328,
      "longitude": 6.971122,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644749126,
      "ems": null
    },
    {
      "latitude": 50.919617,
      "longitude": 6.969786,
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
      "heading": 340,
      "squawk": "7040",
      "timestamp": 1644749132,
      "ems": null
    },
    {
      "latitude": 50.922043,
      "longitude": 6.968598,
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
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644749138,
      "ems": null
    },
    {
      "latitude": 50.924698,
      "longitude": 6.967262,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 342,
      "squawk": "7040",
      "timestamp": 1644749144,
      "ems": null
    },
    {
      "latitude": 50.927307,
      "longitude": 6.966074,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "7040",
      "timestamp": 1644749150,
      "ems": null
    },
    {
      "latitude": 50.929546,
      "longitude": 6.964645,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644749156,
      "ems": null
    },
    {
      "latitude": 50.930893,
      "longitude": 6.963577,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "7040",
      "timestamp": 1644749159,
      "ems": null
    },
    {
      "latitude": 50.932011,
      "longitude": 6.962662,
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
      "heading": 333,
      "squawk": "7040",
      "timestamp": 1644749162,
      "ems": null
    },
    {
      "latitude": 50.933037,
      "longitude": 6.961899,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "7040",
      "timestamp": 1644749165,
      "ems": null
    },
    {
      "latitude": 50.934311,
      "longitude": 6.960878,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 333,
      "squawk": "7040",
      "timestamp": 1644749168,
      "ems": null
    },
    {
      "latitude": 50.935364,
      "longitude": 6.960062,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 332,
      "squawk": "7040",
      "timestamp": 1644749171,
      "ems": null
    },
    {
      "latitude": 50.936436,
      "longitude": 6.959152,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 332,
      "squawk": "7040",
      "timestamp": 1644749174,
      "ems": null
    },
    {
      "latitude": 50.937698,
      "longitude": 6.958131,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 331,
      "squawk": "7040",
      "timestamp": 1644749177,
      "ems": null
    },
    {
      "latitude": 50.938717,
      "longitude": 6.957245,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 331,
      "squawk": "7040",
      "timestamp": 1644749180,
      "ems": null
    },
    {
      "latitude": 50.939835,
      "longitude": 6.956253,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "7040",
      "timestamp": 1644749183,
      "ems": null
    },
    {
      "latitude": 50.942066,
      "longitude": 6.954269,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "7040",
      "timestamp": 1644749189,
      "ems": null
    },
    {
      "latitude": 50.943008,
      "longitude": 6.953381,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 328,
      "squawk": "7040",
      "timestamp": 1644749192,
      "ems": null
    },
    {
      "latitude": 50.944153,
      "longitude": 6.952193,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 327,
      "squawk": "7040",
      "timestamp": 1644749195,
      "ems": null
    },
    {
      "latitude": 50.94516,
      "longitude": 6.951154,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7040",
      "timestamp": 1644749198,
      "ems": null
    },
    {
      "latitude": 50.946167,
      "longitude": 6.95004,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 325,
      "squawk": "7040",
      "timestamp": 1644749201,
      "ems": null
    },
    {
      "latitude": 50.947048,
      "longitude": 6.949081,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 323,
      "squawk": "7040",
      "timestamp": 1644749204,
      "ems": null
    },
    {
      "latitude": 50.948044,
      "longitude": 6.947887,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644749207,
      "ems": null
    },
    {
      "latitude": 50.949005,
      "longitude": 6.946869,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644749210,
      "ems": null
    },
    {
      "latitude": 50.949966,
      "longitude": 6.945809,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644749213,
      "ems": null
    },
    {
      "latitude": 50.951099,
      "longitude": 6.944504,
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
      "heading": 325,
      "squawk": "7040",
      "timestamp": 1644749216,
      "ems": null
    },
    {
      "latitude": 50.952915,
      "longitude": 6.94252,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 324,
      "squawk": "7040",
      "timestamp": 1644749222,
      "ems": null
    },
    {
      "latitude": 50.954731,
      "longitude": 6.940384,
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
      "heading": 321,
      "squawk": "7040",
      "timestamp": 1644749228,
      "ems": null
    },
    {
      "latitude": 50.955597,
      "longitude": 6.939202,
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
      "heading": 320,
      "squawk": "7040",
      "timestamp": 1644749231,
      "ems": null
    },
    {
      "latitude": 50.957245,
      "longitude": 6.937027,
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
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644749237,
      "ems": null
    },
    {
      "latitude": 50.958221,
      "longitude": 6.935654,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644749240,
      "ems": null
    },
    {
      "latitude": 50.958965,
      "longitude": 6.934662,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644749243,
      "ems": null
    },
    {
      "latitude": 50.959854,
      "longitude": 6.933486,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644749246,
      "ems": null
    },
    {
      "latitude": 50.960724,
      "longitude": 6.932299,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644749249,
      "ems": null
    },
    {
      "latitude": 50.961548,
      "longitude": 6.931185,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644749252,
      "ems": null
    },
    {
      "latitude": 50.962326,
      "longitude": 6.930072,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 318,
      "squawk": "7040",
      "timestamp": 1644749255,
      "ems": null
    },
    {
      "latitude": 50.963902,
      "longitude": 6.927795,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7040",
      "timestamp": 1644749261,
      "ems": null
    },
    {
      "latitude": 50.965393,
      "longitude": 6.925618,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "7040",
      "timestamp": 1644749267,
      "ems": null
    },
    {
      "latitude": 50.966995,
      "longitude": 6.923465,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 317,
      "squawk": "7040",
      "timestamp": 1644749273,
      "ems": null
    },
    {
      "latitude": 50.969112,
      "longitude": 6.920166,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 315,
      "squawk": "7044",
      "timestamp": 1644749281,
      "ems": null
    },
    {
      "latitude": 50.97065,
      "longitude": 6.917648,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 315,
      "squawk": "7044",
      "timestamp": 1644749288,
      "ems": null
    },
    {
      "latitude": 50.972351,
      "longitude": 6.915003,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 313,
      "squawk": "7044",
      "timestamp": 1644749294,
      "ems": null
    },
    {
      "latitude": 50.973026,
      "longitude": 6.913834,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 312,
      "squawk": "7044",
      "timestamp": 1644749297,
      "ems": null
    },
    {
      "latitude": 50.973907,
      "longitude": 6.912331,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7044",
      "timestamp": 1644749300,
      "ems": null
    },
    {
      "latitude": 50.975445,
      "longitude": 6.90979,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 315,
      "squawk": "7044",
      "timestamp": 1644749306,
      "ems": null
    },
    {
      "latitude": 50.977119,
      "longitude": 6.907349,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 317,
      "squawk": "7044",
      "timestamp": 1644749312,
      "ems": null
    },
    {
      "latitude": 50.978798,
      "longitude": 6.904984,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 319,
      "squawk": "7044",
      "timestamp": 1644749318,
      "ems": null
    },
    {
      "latitude": 50.980381,
      "longitude": 6.902618,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 314,
      "squawk": "7044",
      "timestamp": 1644749324,
      "ems": null
    },
    {
      "latitude": 50.981781,
      "longitude": 6.900305,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 313,
      "squawk": "7044",
      "timestamp": 1644749330,
      "ems": null
    },
    {
      "latitude": 50.983246,
      "longitude": 6.897855,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 312,
      "squawk": "7044",
      "timestamp": 1644749336,
      "ems": null
    },
    {
      "latitude": 50.983963,
      "longitude": 6.896591,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 311,
      "squawk": "7044",
      "timestamp": 1644749339,
      "ems": null
    },
    {
      "latitude": 50.984619,
      "longitude": 6.895406,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1644749342,
      "ems": null
    },
    {
      "latitude": 50.985268,
      "longitude": 6.894226,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1644749345,
      "ems": null
    },
    {
      "latitude": 50.985901,
      "longitude": 6.89303,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1644749348,
      "ems": null
    },
    {
      "latitude": 50.986477,
      "longitude": 6.892014,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644749351,
      "ems": null
    },
    {
      "latitude": 50.987873,
      "longitude": 6.88942,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644749356,
      "ems": null
    },
    {
      "latitude": 50.989197,
      "longitude": 6.886795,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1644749363,
      "ems": null
    },
    {
      "latitude": 50.989784,
      "longitude": 6.885605,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1644749366,
      "ems": null
    },
    {
      "latitude": 50.990295,
      "longitude": 6.88446,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1644749369,
      "ems": null
    },
    {
      "latitude": 50.990936,
      "longitude": 6.883083,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1644749372,
      "ems": null
    },
    {
      "latitude": 50.992218,
      "longitude": 6.880633,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1644749378,
      "ems": null
    },
    {
      "latitude": 50.993546,
      "longitude": 6.878258,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1644749384,
      "ems": null
    },
    {
      "latitude": 50.994812,
      "longitude": 6.875992,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1644749390,
      "ems": null
    },
    {
      "latitude": 50.995975,
      "longitude": 6.873703,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1644749396,
      "ems": null
    },
    {
      "latitude": 50.997116,
      "longitude": 6.871206,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1644749402,
      "ems": null
    },
    {
      "latitude": 50.998211,
      "longitude": 6.868744,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1644749408,
      "ems": null
    },
    {
      "latitude": 50.998672,
      "longitude": 6.867643,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1644749411,
      "ems": null
    },
    {
      "latitude": 50.999313,
      "longitude": 6.866232,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1644749414,
      "ems": null
    },
    {
      "latitude": 51.000549,
      "longitude": 6.863634,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644749420,
      "ems": null
    },
    {
      "latitude": 51.001888,
      "longitude": 6.861343,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1644749426,
      "ems": null
    },
    {
      "latitude": 51.002655,
      "longitude": 6.860294,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1644749429,
      "ems": null
    },
    {
      "latitude": 51.003662,
      "longitude": 6.85918,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1644749432,
      "ems": null
    },
    {
      "latitude": 51.004635,
      "longitude": 6.858368,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1644749435,
      "ems": null
    },
    {
      "latitude": 51.005753,
      "longitude": 6.857681,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644749438,
      "ems": null
    },
    {
      "latitude": 51.006958,
      "longitude": 6.857102,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1644749441,
      "ems": null
    },
    {
      "latitude": 51.008171,
      "longitude": 6.856461,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1644749444,
      "ems": null
    },
    {
      "latitude": 51.009247,
      "longitude": 6.855914,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1644749447,
      "ems": null
    },
    {
      "latitude": 51.010452,
      "longitude": 6.855316,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1644749450,
      "ems": null
    },
    {
      "latitude": 51.011581,
      "longitude": 6.854801,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1644749453,
      "ems": null
    },
    {
      "latitude": 51.012772,
      "longitude": 6.854133,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "7003",
      "timestamp": 1644749456,
      "ems": null
    },
    {
      "latitude": 51.013916,
      "longitude": 6.853613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "7003",
      "timestamp": 1644749459,
      "ems": null
    },
    {
      "latitude": 51.014923,
      "longitude": 6.853093,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "7003",
      "timestamp": 1644749462,
      "ems": null
    },
    {
      "latitude": 51.016224,
      "longitude": 6.852417,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 342,
      "squawk": "7003",
      "timestamp": 1644749465,
      "ems": null
    },
    {
      "latitude": 51.018459,
      "longitude": 6.851273,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749471,
      "ems": null
    },
    {
      "latitude": 51.020737,
      "longitude": 6.849976,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "7003",
      "timestamp": 1644749477,
      "ems": null
    },
    {
      "latitude": 51.022888,
      "longitude": 6.848788,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749483,
      "ems": null
    },
    {
      "latitude": 51.025116,
      "longitude": 6.847534,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749489,
      "ems": null
    },
    {
      "latitude": 51.027023,
      "longitude": 6.846466,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749495,
      "ems": null
    },
    {
      "latitude": 51.029537,
      "longitude": 6.845016,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 338,
      "squawk": "7003",
      "timestamp": 1644749501,
      "ems": null
    },
    {
      "latitude": 51.031681,
      "longitude": 6.843643,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 337,
      "squawk": "7003",
      "timestamp": 1644749507,
      "ems": null
    },
    {
      "latitude": 51.033634,
      "longitude": 6.842499,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749513,
      "ems": null
    },
    {
      "latitude": 51.035778,
      "longitude": 6.841278,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7003",
      "timestamp": 1644749519,
      "ems": null
    },
    {
      "latitude": 51.03801,
      "longitude": 6.839752,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "7003",
      "timestamp": 1644749525,
      "ems": null
    },
    {
      "latitude": 51.040058,
      "longitude": 6.838303,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749531,
      "ems": null
    },
    {
      "latitude": 51.041969,
      "longitude": 6.836929,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7003",
      "timestamp": 1644749537,
      "ems": null
    },
    {
      "latitude": 51.044174,
      "longitude": 6.835352,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "7003",
      "timestamp": 1644749543,
      "ems": null
    },
    {
      "latitude": 51.046299,
      "longitude": 6.833954,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 337,
      "squawk": "7003",
      "timestamp": 1644749549,
      "ems": null
    },
    {
      "latitude": 51.04834,
      "longitude": 6.832457,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749555,
      "ems": null
    },
    {
      "latitude": 51.050346,
      "longitude": 6.830978,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749561,
      "ems": null
    },
    {
      "latitude": 51.052395,
      "longitude": 6.829605,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "7003",
      "timestamp": 1644749567,
      "ems": null
    },
    {
      "latitude": 51.054474,
      "longitude": 6.828226,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 336,
      "squawk": "7003",
      "timestamp": 1644749573,
      "ems": null
    },
    {
      "latitude": 51.056396,
      "longitude": 6.82689,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749579,
      "ems": null
    },
    {
      "latitude": 51.058502,
      "longitude": 6.825331,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749585,
      "ems": null
    },
    {
      "latitude": 51.060497,
      "longitude": 6.823959,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749591,
      "ems": null
    },
    {
      "latitude": 51.062496,
      "longitude": 6.822433,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "7003",
      "timestamp": 1644749597,
      "ems": null
    },
    {
      "latitude": 51.064728,
      "longitude": 6.820951,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749603,
      "ems": null
    },
    {
      "latitude": 51.06601,
      "longitude": 6.820506,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644749606,
      "ems": null
    },
    {
      "latitude": 51.067108,
      "longitude": 6.820145,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7003",
      "timestamp": 1644749609,
      "ems": null
    },
    {
      "latitude": 51.068253,
      "longitude": 6.819838,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "7003",
      "timestamp": 1644749612,
      "ems": null
    },
    {
      "latitude": 51.069305,
      "longitude": 6.819466,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7003",
      "timestamp": 1644749615,
      "ems": null
    },
    {
      "latitude": 51.070503,
      "longitude": 6.819077,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "7003",
      "timestamp": 1644749618,
      "ems": null
    },
    {
      "latitude": 51.07164,
      "longitude": 6.818724,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 349,
      "squawk": "7003",
      "timestamp": 1644749621,
      "ems": null
    },
    {
      "latitude": 51.073017,
      "longitude": 6.818314,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "7003",
      "timestamp": 1644749625,
      "ems": null
    },
    {
      "latitude": 51.074249,
      "longitude": 6.817907,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644749628,
      "ems": null
    },
    {
      "latitude": 51.076584,
      "longitude": 6.817165,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 348,
      "squawk": "7003",
      "timestamp": 1644749634,
      "ems": null
    },
    {
      "latitude": 51.078964,
      "longitude": 6.816349,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644749640,
      "ems": null
    },
    {
      "latitude": 51.081352,
      "longitude": 6.815491,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 346,
      "squawk": "7003",
      "timestamp": 1644749646,
      "ems": null
    },
    {
      "latitude": 51.083633,
      "longitude": 6.814575,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 344,
      "squawk": "7003",
      "timestamp": 1644749651,
      "ems": null
    },
    {
      "latitude": 51.084751,
      "longitude": 6.814041,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "7003",
      "timestamp": 1644749655,
      "ems": null
    },
    {
      "latitude": 51.086929,
      "longitude": 6.813082,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 344,
      "squawk": "7003",
      "timestamp": 1644749660,
      "ems": null
    },
    {
      "latitude": 51.089951,
      "longitude": 6.811894,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "7003",
      "timestamp": 1644749668,
      "ems": null
    },
    {
      "latitude": 51.092709,
      "longitude": 6.810684,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 344,
      "squawk": "7003",
      "timestamp": 1644749676,
      "ems": null
    },
    {
      "latitude": 51.09462,
      "longitude": 6.80989,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 345,
      "squawk": "7003",
      "timestamp": 1644749680,
      "ems": null
    },
    {
      "latitude": 51.097412,
      "longitude": 6.808777,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 346,
      "squawk": "7003",
      "timestamp": 1644749687,
      "ems": null
    },
    {
      "latitude": 51.09993,
      "longitude": 6.807812,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644749693,
      "ems": null
    },
    {
      "latitude": 51.102348,
      "longitude": 6.806946,
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
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644749699,
      "ems": null
    },
    {
      "latitude": 51.104721,
      "longitude": 6.806107,
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
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644749705,
      "ems": null
    },
    {
      "latitude": 51.107513,
      "longitude": 6.805191,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7003",
      "timestamp": 1644749711,
      "ems": null
    },
    {
      "latitude": 51.108864,
      "longitude": 6.80481,
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
      "heading": 350,
      "squawk": "7003",
      "timestamp": 1644749715,
      "ems": null
    },
    {
      "latitude": 51.111282,
      "longitude": 6.803952,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "7003",
      "timestamp": 1644749720,
      "ems": null
    },
    {
      "latitude": 51.112518,
      "longitude": 6.803432,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "7003",
      "timestamp": 1644749723,
      "ems": null
    },
    {
      "latitude": 51.113892,
      "longitude": 6.802764,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7003",
      "timestamp": 1644749727,
      "ems": null
    },
    {
      "latitude": 51.116272,
      "longitude": 6.801576,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 342,
      "squawk": "7003",
      "timestamp": 1644749733,
      "ems": null
    },
    {
      "latitude": 51.117477,
      "longitude": 6.801071,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7003",
      "timestamp": 1644749735,
      "ems": null
    },
    {
      "latitude": 51.118652,
      "longitude": 6.800463,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 343,
      "squawk": "7003",
      "timestamp": 1644749739,
      "ems": null
    },
    {
      "latitude": 51.120026,
      "longitude": 6.799795,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 342,
      "squawk": "7003",
      "timestamp": 1644749742,
      "ems": null
    },
    {
      "latitude": 51.121078,
      "longitude": 6.799349,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7003",
      "timestamp": 1644749745,
      "ems": null
    },
    {
      "latitude": 51.123573,
      "longitude": 6.798248,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7003",
      "timestamp": 1644749750,
      "ems": null
    },
    {
      "latitude": 51.126205,
      "longitude": 6.797048,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 344,
      "squawk": "7003",
      "timestamp": 1644749757,
      "ems": null
    },
    {
      "latitude": 51.128555,
      "longitude": 6.796036,
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
      "heading": 344,
      "squawk": "7003",
      "timestamp": 1644749763,
      "ems": null
    },
    {
      "latitude": 51.131115,
      "longitude": 6.794968,
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
      "heading": 344,
      "squawk": "7003",
      "timestamp": 1644749768,
      "ems": null
    },
    {
      "latitude": 51.13353,
      "longitude": 6.793856,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 342,
      "squawk": "7003",
      "timestamp": 1644749774,
      "ems": null
    },
    {
      "latitude": 51.135956,
      "longitude": 6.792594,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 343,
      "squawk": "7003",
      "timestamp": 1644749780,
      "ems": null
    },
    {
      "latitude": 51.138428,
      "longitude": 6.791407,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 341,
      "squawk": "7003",
      "timestamp": 1644749786,
      "ems": null
    },
    {
      "latitude": 51.140984,
      "longitude": 6.790009,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749793,
      "ems": null
    },
    {
      "latitude": 51.143326,
      "longitude": 6.788734,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 341,
      "squawk": "7003",
      "timestamp": 1644749798,
      "ems": null
    },
    {
      "latitude": 51.145752,
      "longitude": 6.787398,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749805,
      "ems": null
    },
    {
      "latitude": 51.147949,
      "longitude": 6.786211,
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
      "heading": 340,
      "squawk": "7003",
      "timestamp": 1644749811,
      "ems": null
    },
    {
      "latitude": 51.15065,
      "longitude": 6.784577,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 338,
      "squawk": "7003",
      "timestamp": 1644749817,
      "ems": null
    },
    {
      "latitude": 51.15303,
      "longitude": 6.783019,
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
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749823,
      "ems": null
    },
    {
      "latitude": 51.15416,
      "longitude": 6.78215,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749826,
      "ems": null
    },
    {
      "latitude": 51.155231,
      "longitude": 6.781235,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 332,
      "squawk": "7003",
      "timestamp": 1644749828,
      "ems": null
    },
    {
      "latitude": 51.1563,
      "longitude": 6.780396,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749832,
      "ems": null
    },
    {
      "latitude": 51.157379,
      "longitude": 6.77953,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 334,
      "squawk": "7003",
      "timestamp": 1644749834,
      "ems": null
    },
    {
      "latitude": 51.159653,
      "longitude": 6.777878,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749841,
      "ems": null
    },
    {
      "latitude": 51.161865,
      "longitude": 6.776263,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7003",
      "timestamp": 1644749847,
      "ems": null
    },
    {
      "latitude": 51.164017,
      "longitude": 6.774556,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "7003",
      "timestamp": 1644749853,
      "ems": null
    },
    {
      "latitude": 51.166031,
      "longitude": 6.773071,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7003",
      "timestamp": 1644749859,
      "ems": null
    },
    {
      "latitude": 51.168274,
      "longitude": 6.77129,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749865,
      "ems": null
    },
    {
      "latitude": 51.170452,
      "longitude": 6.769562,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749871,
      "ems": null
    },
    {
      "latitude": 51.172531,
      "longitude": 6.767875,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749877,
      "ems": null
    },
    {
      "latitude": 51.174549,
      "longitude": 6.766205,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "7003",
      "timestamp": 1644749883,
      "ems": null
    },
    {
      "latitude": 51.176559,
      "longitude": 6.764609,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 332,
      "squawk": "7003",
      "timestamp": 1644749889,
      "ems": null
    },
    {
      "latitude": 51.178574,
      "longitude": 6.762901,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749895,
      "ems": null
    },
    {
      "latitude": 51.180725,
      "longitude": 6.761194,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749901,
      "ems": null
    },
    {
      "latitude": 51.182693,
      "longitude": 6.759635,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749906,
      "ems": null
    },
    {
      "latitude": 51.184799,
      "longitude": 6.757928,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 333,
      "squawk": "7003",
      "timestamp": 1644749913,
      "ems": null
    },
    {
      "latitude": 51.186951,
      "longitude": 6.756369,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 335,
      "squawk": "7003",
      "timestamp": 1644749919,
      "ems": null
    },
    {
      "latitude": 51.189072,
      "longitude": 6.754837,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 336,
      "squawk": "7003",
      "timestamp": 1644749925,
      "ems": null
    },
    {
      "latitude": 51.190144,
      "longitude": 6.75415,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 337,
      "squawk": "7003",
      "timestamp": 1644749928,
      "ems": null
    },
    {
      "latitude": 51.19075,
      "longitude": 6.753769,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7003",
      "timestamp": 1644749930,
      "ems": null
    },
    {
      "latitude": 51.192535,
      "longitude": 6.752954,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 348,
      "squawk": "7003",
      "timestamp": 1644749934,
      "ems": null
    },
    {
      "latitude": 51.193542,
      "longitude": 6.752701,
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
      "heading": 357,
      "squawk": "7003",
      "timestamp": 1644749937,
      "ems": null
    },
    {
      "latitude": 51.194798,
      "longitude": 6.752701,
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
      "heading": 1,
      "squawk": "7003",
      "timestamp": 1644749940,
      "ems": null
    },
    {
      "latitude": 51.196198,
      "longitude": 6.753082,
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
      "heading": 11,
      "squawk": "7003",
      "timestamp": 1644749943,
      "ems": null
    },
    {
      "latitude": 51.197731,
      "longitude": 6.753616,
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644749946,
      "ems": null
    },
    {
      "latitude": 51.199081,
      "longitude": 6.754068,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 13,
      "squawk": "7003",
      "timestamp": 1644749949,
      "ems": null
    },
    {
      "latitude": 51.20034,
      "longitude": 6.754608,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "7003",
      "timestamp": 1644749952,
      "ems": null
    },
    {
      "latitude": 51.200729,
      "longitude": 6.754736,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "7003",
      "timestamp": 1644749953,
      "ems": null
    },
    {
      "latitude": 51.202652,
      "longitude": 6.755404,
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644749957,
      "ems": null
    },
    {
      "latitude": 51.204063,
      "longitude": 6.755905,
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644749961,
      "ems": null
    },
    {
      "latitude": 51.205692,
      "longitude": 6.756439,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644749965,
      "ems": null
    },
    {
      "latitude": 51.207649,
      "longitude": 6.757126,
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644749969,
      "ems": null
    },
    {
      "latitude": 51.211044,
      "longitude": 6.75827,
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644749977,
      "ems": null
    },
    {
      "latitude": 51.214417,
      "longitude": 6.759413,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "7003",
      "timestamp": 1644749985,
      "ems": null
    },
    {
      "latitude": 51.217896,
      "longitude": 6.7606,
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644749993,
      "ems": null
    },
    {
      "latitude": 51.221333,
      "longitude": 6.762009,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 14,
      "squawk": "7003",
      "timestamp": 1644750001,
      "ems": null
    },
    {
      "latitude": 51.224442,
      "longitude": 6.763198,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644750009,
      "ems": null
    },
    {
      "latitude": 51.228241,
      "longitude": 6.764534,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 13,
      "squawk": "7003",
      "timestamp": 1644750017,
      "ems": null
    },
    {
      "latitude": 51.231766,
      "longitude": 6.765871,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 12,
      "squawk": "7003",
      "timestamp": 1644750025,
      "ems": null
    },
    {
      "latitude": 51.233643,
      "longitude": 6.766613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 13,
      "squawk": "7003",
      "timestamp": 1644750033,
      "ems": null
    },
    {
      "latitude": 51.23822,
      "longitude": 6.767875,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 9,
      "squawk": "7003",
      "timestamp": 1644750040,
      "ems": null
    },
    {
      "latitude": 51.240601,
      "longitude": 6.768543,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 9,
      "squawk": "7003",
      "timestamp": 1644750046,
      "ems": null
    },
    {
      "latitude": 51.243301,
      "longitude": 6.769286,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 9,
      "squawk": "7003",
      "timestamp": 1644750052,
      "ems": null
    },
    {
      "latitude": 51.244473,
      "longitude": 6.769562,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "7003",
      "timestamp": 1644750055,
      "ems": null
    },
    {
      "latitude": 51.246002,
      "longitude": 6.769954,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "7003",
      "timestamp": 1644750058,
      "ems": null
    },
    {
      "latitude": 51.248337,
      "longitude": 6.770547,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 9,
      "squawk": "7003",
      "timestamp": 1644750064,
      "ems": null
    },
    {
      "latitude": 51.2509,
      "longitude": 6.771215,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 8,
      "squawk": "7003",
      "timestamp": 1644750070,
      "ems": null
    },
    {
      "latitude": 51.253326,
      "longitude": 6.771661,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 5,
      "squawk": "7003",
      "timestamp": 1644750076,
      "ems": null
    },
    {
      "latitude": 51.25597,
      "longitude": 6.772156,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 6,
      "squawk": "7003",
      "timestamp": 1644750082,
      "ems": null
    },
    {
      "latitude": 51.258297,
      "longitude": 6.772614,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "7003",
      "timestamp": 1644750088,
      "ems": null
    },
    {
      "latitude": 51.260998,
      "longitude": 6.773224,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "7003",
      "timestamp": 1644750094,
      "ems": null
    },
    {
      "latitude": 51.263557,
      "longitude": 6.773758,
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
      "heading": 6,
      "squawk": "7003",
      "timestamp": 1644750100,
      "ems": null
    },
    {
      "latitude": 51.266144,
      "longitude": 6.774259,
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
      "heading": 6,
      "squawk": "7003",
      "timestamp": 1644750106,
      "ems": null
    },
    {
      "latitude": 51.268845,
      "longitude": 6.774704,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "7003",
      "timestamp": 1644750112,
      "ems": null
    },
    {
      "latitude": 51.2715,
      "longitude": 6.77515,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 7,
      "squawk": "7003",
      "timestamp": 1644750118,
      "ems": null
    },
    {
      "latitude": 51.274033,
      "longitude": 6.775818,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "7003",
      "timestamp": 1644750124,
      "ems": null
    },
    {
      "latitude": 51.276901,
      "longitude": 6.776263,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7003",
      "timestamp": 1644750130,
      "ems": null
    },
    {
      "latitude": 51.278229,
      "longitude": 6.776338,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "7003",
      "timestamp": 1644750133,
      "ems": null
    },
    {
      "latitude": 51.280334,
      "longitude": 6.776412,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "7003",
      "timestamp": 1644750139,
      "ems": null
    },
    {
      "latitude": 51.282177,
      "longitude": 6.776352,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "7003",
      "timestamp": 1644750142,
      "ems": null
    },
    {
      "latitude": 51.283482,
      "longitude": 6.776199,
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
      "heading": 356,
      "squawk": "7003",
      "timestamp": 1644750145,
      "ems": null
    },
    {
      "latitude": 51.284729,
      "longitude": 6.776041,
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
      "heading": 353,
      "squawk": "7003",
      "timestamp": 1644750148,
      "ems": null
    },
    {
      "latitude": 51.285854,
      "longitude": 6.775894,
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
      "heading": 354,
      "squawk": "7003",
      "timestamp": 1644750151,
      "ems": null
    },
    {
      "latitude": 51.287521,
      "longitude": 6.775595,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 353,
      "squawk": "7003",
      "timestamp": 1644750154,
      "ems": null
    },
    {
      "latitude": 51.288788,
      "longitude": 6.77536,
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
      "heading": 353,
      "squawk": "7003",
      "timestamp": 1644750157,
      "ems": null
    },
    {
      "latitude": 51.290131,
      "longitude": 6.775075,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "7003",
      "timestamp": 1644750160,
      "ems": null
    },
    {
      "latitude": 51.291397,
      "longitude": 6.774826,
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
      "heading": 353,
      "squawk": "7003",
      "timestamp": 1644750163,
      "ems": null
    },
    {
      "latitude": 51.292648,
      "longitude": 6.774704,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 356,
      "squawk": "7003",
      "timestamp": 1644750166,
      "ems": null
    },
    {
      "latitude": 51.295307,
      "longitude": 6.774445,
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
      "heading": 356,
      "squawk": "7003",
      "timestamp": 1644750172,
      "ems": null
    },
    {
      "latitude": 51.297913,
      "longitude": 6.774259,
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
      "heading": 357,
      "squawk": "7003",
      "timestamp": 1644750178,
      "ems": null
    },
    {
      "latitude": 51.299057,
      "longitude": 6.774185,
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
      "heading": 359,
      "squawk": "7003",
      "timestamp": 1644750181,
      "ems": null
    },
    {
      "latitude": 51.30043,
      "longitude": 6.774185,
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
      "heading": 359,
      "squawk": "7003",
      "timestamp": 1644750184,
      "ems": null
    },
    {
      "latitude": 51.301682,
      "longitude": 6.774216,
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
      "heading": 359,
      "squawk": "7003",
      "timestamp": 1644750187,
      "ems": null
    },
    {
      "latitude": 51.302986,
      "longitude": 6.774292,
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
      "heading": 1,
      "squawk": "7003",
      "timestamp": 1644750190,
      "ems": null
    },
    {
      "latitude": 51.304367,
      "longitude": 6.774333,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 1,
      "squawk": "7003",
      "timestamp": 1644750193,
      "ems": null
    },
    {
      "latitude": 51.305546,
      "longitude": 6.774368,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "7003",
      "timestamp": 1644750196,
      "ems": null
    },
    {
      "latitude": 51.308258,
      "longitude": 6.774185,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "7003",
      "timestamp": 1644750202,
      "ems": null
    },
    {
      "latitude": 51.310947,
      "longitude": 6.773987,
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
      "heading": 357,
      "squawk": "7003",
      "timestamp": 1644750208,
      "ems": null
    },
    {
      "latitude": 51.313553,
      "longitude": 6.773834,
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
      "heading": 358,
      "squawk": "7003",
      "timestamp": 1644750214,
      "ems": null
    },
    {
      "latitude": 51.316177,
      "longitude": 6.773739,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 359,
      "squawk": "7003",
      "timestamp": 1644750220,
      "ems": null
    },
    {
      "latitude": 51.3181,
      "longitude": 6.773739,
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
      "heading": 356,
      "squawk": "7003",
      "timestamp": 1644750226,
      "ems": null
    },
    {
      "latitude": 51.320629,
      "longitude": 6.773376,
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
      "heading": 352,
      "squawk": "7003",
      "timestamp": 1644750232,
      "ems": null
    },
    {
      "latitude": 51.322357,
      "longitude": 6.772923,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 351,
      "squawk": "7003",
      "timestamp": 1644750235,
      "ems": null
    },
    {
      "latitude": 51.324913,
      "longitude": 6.772385,
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
      "heading": 355,
      "squawk": "7003",
      "timestamp": 1644750241,
      "ems": null
    },
    {
      "latitude": 51.327801,
      "longitude": 6.772385,
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
      "heading": 1,
      "squawk": "7003",
      "timestamp": 1644750247,
      "ems": null
    },
    {
      "latitude": 51.330093,
      "longitude": 6.772403,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "7003",
      "timestamp": 1644750253,
      "ems": null
    },
    {
      "latitude": 51.331429,
      "longitude": 6.772385,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "7003",
      "timestamp": 1644750256,
      "ems": null
    },
    {
      "latitude": 51.333012,
      "longitude": 6.772308,
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
      "heading": 358,
      "squawk": "7003",
      "timestamp": 1644750259,
      "ems": null
    },
    {
      "latitude": 51.334396,
      "longitude": 6.772329,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "7003",
      "timestamp": 1644750262,
      "ems": null
    },
    {
      "latitude": 51.335758,
      "longitude": 6.772232,
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
      "heading": 359,
      "squawk": "7003",
      "timestamp": 1644750265,
      "ems": null
    },
    {
      "latitude": 51.338226,
      "longitude": 6.772156,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 358,
      "squawk": "7003",
      "timestamp": 1644750271,
      "ems": null
    },
    {
      "latitude": 51.341125,
      "longitude": 6.771958,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 357,
      "squawk": "7003",
      "timestamp": 1644750277,
      "ems": null
    },
    {
      "latitude": 51.344193,
      "longitude": 6.771958,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "7003",
      "timestamp": 1644750284,
      "ems": null
    },
    {
      "latitude": 51.34758,
      "longitude": 6.771513,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 350,
      "squawk": "7003",
      "timestamp": 1644750292,
      "ems": null
    },
    {
      "latitude": 51.349228,
      "longitude": 6.771067,
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
      "heading": 349,
      "squawk": "7003",
      "timestamp": 1644750296,
      "ems": null
    },
    {
      "latitude": 51.350704,
      "longitude": 6.77063,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "7003",
      "timestamp": 1644750300,
      "ems": null
    },
    {
      "latitude": 51.354008,
      "longitude": 6.770172,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 355,
      "squawk": "7003",
      "timestamp": 1644750306,
      "ems": null
    },
    {
      "latitude": 51.355316,
      "longitude": 6.769954,
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
      "heading": 353,
      "squawk": "7003",
      "timestamp": 1644750310,
      "ems": null
    },
    {
      "latitude": 51.357605,
      "longitude": 6.769434,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "7003",
      "timestamp": 1644750315,
      "ems": null
    },
    {
      "latitude": 51.360535,
      "longitude": 6.768766,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "7003",
      "timestamp": 1644750322,
      "ems": null
    },
    {
      "latitude": 51.361404,
      "longitude": 6.768617,
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
      "heading": 354,
      "squawk": "7003",
      "timestamp": 1644750324,
      "ems": null
    },
    {
      "latitude": 51.363041,
      "longitude": 6.76857,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 358,
      "squawk": "7003",
      "timestamp": 1644750328,
      "ems": null
    },
    {
      "latitude": 51.365524,
      "longitude": 6.768394,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "7003",
      "timestamp": 1644750334,
      "ems": null
    },
    {
      "latitude": 51.368271,
      "longitude": 6.767875,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "7003",
      "timestamp": 1644750339,
      "ems": null
    },
    {
      "latitude": 51.370239,
      "longitude": 6.76743,
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
      "heading": 351,
      "squawk": "7003",
      "timestamp": 1644750346,
      "ems": null
    },
    {
      "latitude": 51.372986,
      "longitude": 6.766762,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "7003",
      "timestamp": 1644750351,
      "ems": null
    },
    {
      "latitude": 51.376099,
      "longitude": 6.765945,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "7003",
      "timestamp": 1644750358,
      "ems": null
    },
    {
      "latitude": 51.377331,
      "longitude": 6.765594,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 350,
      "squawk": "7003",
      "timestamp": 1644750361,
      "ems": null
    },
    {
      "latitude": 51.379898,
      "longitude": 6.764832,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 348,
      "squawk": "7003",
      "timestamp": 1644750367,
      "ems": null
    },
    {
      "latitude": 51.381042,
      "longitude": 6.764386,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644750370,
      "ems": null
    },
    {
      "latitude": 51.381847,
      "longitude": 6.764145,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7003",
      "timestamp": 1644750373,
      "ems": null
    },
    {
      "latitude": 51.383709,
      "longitude": 6.763382,
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
      "heading": 346,
      "squawk": "7003",
      "timestamp": 1644750376,
      "ems": null
    },
    {
      "latitude": 51.385059,
      "longitude": 6.762924,
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
      "heading": 346,
      "squawk": "7003",
      "timestamp": 1644750379,
      "ems": null
    },
    {
      "latitude": 51.387405,
      "longitude": 6.762011,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7003",
      "timestamp": 1644750385,
      "ems": null
    },
    {
      "latitude": 51.389946,
      "longitude": 6.761093,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644750391,
      "ems": null
    },
    {
      "latitude": 51.392319,
      "longitude": 6.760254,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 347,
      "squawk": "7003",
      "timestamp": 1644750397,
      "ems": null
    },
    {
      "latitude": 51.394913,
      "longitude": 6.759413,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "7003",
      "timestamp": 1644750402,
      "ems": null
    },
    {
      "latitude": 51.39772,
      "longitude": 6.758652,
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
      "heading": 351,
      "squawk": "7003",
      "timestamp": 1644750409,
      "ems": null
    },
    {
      "latitude": 51.39893,
      "longitude": 6.758347,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 352,
      "squawk": "7003",
      "timestamp": 1644750412,
      "ems": null
    },
    {
      "latitude": 51.400314,
      "longitude": 6.758077,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7003",
      "timestamp": 1644750415,
      "ems": null
    },
    {
      "latitude": 51.401596,
      "longitude": 6.757854,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "7003",
      "timestamp": 1644750418,
      "ems": null
    },
    {
      "latitude": 51.40284,
      "longitude": 6.757584,
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
      "heading": 353,
      "squawk": "7003",
      "timestamp": 1644750421,
      "ems": null
    },
    {
      "latitude": 51.404099,
      "longitude": 6.757355,
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
      "heading": 353,
      "squawk": "7003",
      "timestamp": 1644750424,
      "ems": null
    },
    {
      "latitude": 51.406631,
      "longitude": 6.756814,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "7003",
      "timestamp": 1644750430,
      "ems": null
    },
    {
      "latitude": 51.409126,
      "longitude": 6.755981,
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
      "heading": 349,
      "squawk": "7003",
      "timestamp": 1644750436,
      "ems": null
    },
    {
      "latitude": 51.411407,
      "longitude": 6.755295,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7003",
      "timestamp": 1644750442,
      "ems": null
    },
    {
      "latitude": 51.414013,
      "longitude": 6.754456,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1644750448,
      "ems": null
    },
    {
      "latitude": 51.416248,
      "longitude": 6.753845,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1644750454,
      "ems": null
    },
    {
      "latitude": 51.418579,
      "longitude": 6.7534,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1644750460,
      "ems": null
    },
    {
      "latitude": 51.419678,
      "longitude": 6.753177,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1644750463,
      "ems": null
    },
    {
      "latitude": 51.420914,
      "longitude": 6.752954,
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1644750466,
      "ems": null
    },
    {
      "latitude": 51.422859,
      "longitude": 6.752472,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1644750472,
      "ems": null
    },
    {
      "latitude": 51.425373,
      "longitude": 6.751633,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1644750478,
      "ems": null
    },
    {
      "latitude": 51.426727,
      "longitude": 6.751099,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644750482,
      "ems": null
    },
    {
      "latitude": 51.427792,
      "longitude": 6.750641,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644750484,
      "ems": null
    },
    {
      "latitude": 51.429108,
      "longitude": 6.750134,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1644750488,
      "ems": null
    },
    {
      "latitude": 51.430305,
      "longitude": 6.749649,
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1644750491,
      "ems": null
    },
    {
      "latitude": 51.431519,
      "longitude": 6.749115,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644750493,
      "ems": null
    },
    {
      "latitude": 51.432774,
      "longitude": 6.748581,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1644750497,
      "ems": null
    },
    {
      "latitude": 51.435242,
      "longitude": 6.747437,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1644750503,
      "ems": null
    },
    {
      "latitude": 51.436249,
      "longitude": 6.746867,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644750506,
      "ems": null
    },
    {
      "latitude": 51.437622,
      "longitude": 6.746125,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644750509,
      "ems": null
    },
    {
      "latitude": 51.439957,
      "longitude": 6.745012,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644750515,
      "ems": null
    },
    {
      "latitude": 51.442318,
      "longitude": 6.744003,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644750522,
      "ems": null
    },
    {
      "latitude": 51.445312,
      "longitude": 6.742933,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1644750530,
      "ems": null
    },
    {
      "latitude": 51.44632,
      "longitude": 6.742562,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1644750533,
      "ems": null
    },
    {
      "latitude": 51.447205,
      "longitude": 6.742249,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1644750535,
      "ems": null
    },
    {
      "latitude": 51.448463,
      "longitude": 6.741867,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1644750538,
      "ems": null
    },
    {
      "latitude": 51.450073,
      "longitude": 6.741226,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1644750543,
      "ems": null
    },
    {
      "latitude": 51.453629,
      "longitude": 6.73996,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1644750553,
      "ems": null
    },
    {
      "latitude": 51.455841,
      "longitude": 6.739296,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1644750559,
      "ems": null
    },
    {
      "latitude": 51.458176,
      "longitude": 6.738627,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1644750565,
      "ems": null
    },
    {
      "latitude": 51.460285,
      "longitude": 6.738205,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 353,
      "squawk": "7742",
      "timestamp": 1644750571,
      "ems": null
    },
    {
      "latitude": 51.461472,
      "longitude": 6.737959,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1644750574,
      "ems": null
    },
    {
      "latitude": 51.463871,
      "longitude": 6.737289,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1644750580,
      "ems": null
    },
    {
      "latitude": 51.465965,
      "longitude": 6.736679,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1644750586,
      "ems": null
    },
    {
      "latitude": 51.468475,
      "longitude": 6.735955,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1644750592,
      "ems": null
    },
    {
      "latitude": 51.470856,
      "longitude": 6.735382,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "7742",
      "timestamp": 1644750598,
      "ems": null
    },
    {
      "latitude": 51.473099,
      "longitude": 6.734767,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 349,
      "squawk": "7742",
      "timestamp": 1644750604,
      "ems": null
    },
    {
      "latitude": 51.476028,
      "longitude": 6.734025,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1644750610,
      "ems": null
    },
    {
      "latitude": 51.478489,
      "longitude": 6.733398,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 351,
      "squawk": "7742",
      "timestamp": 1644750616,
      "ems": null
    },
    {
      "latitude": 51.481293,
      "longitude": 6.732838,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "7742",
      "timestamp": 1644750622,
      "ems": null
    },
    {
      "latitude": 51.484074,
      "longitude": 6.73233,
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
      "heading": 353,
      "squawk": "7742",
      "timestamp": 1644750628,
      "ems": null
    },
    {
      "latitude": 51.485229,
      "longitude": 6.73217,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 355,
      "squawk": "7742",
      "timestamp": 1644750631,
      "ems": null
    },
    {
      "latitude": 51.486916,
      "longitude": 6.732025,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "7742",
      "timestamp": 1644750634,
      "ems": null
    },
    {
      "latitude": 51.488171,
      "longitude": 6.731949,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 358,
      "squawk": "7742",
      "timestamp": 1644750637,
      "ems": null
    },
    {
      "latitude": 51.489807,
      "longitude": 6.731947,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1644750640,
      "ems": null
    },
    {
      "latitude": 51.491043,
      "longitude": 6.731947,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1644750643,
      "ems": null
    },
    {
      "latitude": 51.492733,
      "longitude": 6.731949,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1644750646,
      "ems": null
    },
    {
      "latitude": 51.493805,
      "longitude": 6.731949,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1644750649,
      "ems": null
    },
    {
      "latitude": 51.495621,
      "longitude": 6.732095,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1644750652,
      "ems": null
    },
    {
      "latitude": 51.496399,
      "longitude": 6.73217,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1644750654,
      "ems": null
    },
    {
      "latitude": 51.498734,
      "longitude": 6.732392,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1644750658,
      "ems": null
    },
    {
      "latitude": 51.49995,
      "longitude": 6.732559,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1644750661,
      "ems": null
    },
    {
      "latitude": 51.501526,
      "longitude": 6.732763,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1644750664,
      "ems": null
    },
    {
      "latitude": 51.50251,
      "longitude": 6.732941,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1644750666,
      "ems": null
    },
    {
      "latitude": 51.504696,
      "longitude": 6.733246,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1644750670,
      "ems": null
    },
    {
      "latitude": 51.506187,
      "longitude": 6.733475,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1644750673,
      "ems": null
    },
    {
      "latitude": 51.507584,
      "longitude": 6.733704,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 5,
      "squawk": "7742",
      "timestamp": 1644750676,
      "ems": null
    },
    {
      "latitude": 51.510609,
      "longitude": 6.734085,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1644750682,
      "ems": null
    },
    {
      "latitude": 51.512287,
      "longitude": 6.734314,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1644750688,
      "ems": null
    },
    {
      "latitude": 51.516384,
      "longitude": 6.734848,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1644750694,
      "ems": null
    },
    {
      "latitude": 51.51915,
      "longitude": 6.73499,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750700,
      "ems": null
    },
    {
      "latitude": 51.521828,
      "longitude": 6.735077,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750706,
      "ems": null
    },
    {
      "latitude": 51.525696,
      "longitude": 6.735213,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750713,
      "ems": null
    },
    {
      "latitude": 51.527527,
      "longitude": 6.735287,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750718,
      "ems": null
    },
    {
      "latitude": 51.532257,
      "longitude": 6.735687,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1644750726,
      "ems": null
    },
    {
      "latitude": 51.535721,
      "longitude": 6.736327,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1644750734,
      "ems": null
    },
    {
      "latitude": 51.538822,
      "longitude": 6.736679,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1644750740,
      "ems": null
    },
    {
      "latitude": 51.541752,
      "longitude": 6.736679,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750747,
      "ems": null
    },
    {
      "latitude": 51.545151,
      "longitude": 6.736832,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750754,
      "ems": null
    },
    {
      "latitude": 51.547943,
      "longitude": 6.736995,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750760,
      "ems": null
    },
    {
      "latitude": 51.549343,
      "longitude": 6.736984,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1644750763,
      "ems": null
    },
    {
      "latitude": 51.551994,
      "longitude": 6.737137,
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
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1644750769,
      "ems": null
    },
    {
      "latitude": 51.554443,
      "longitude": 6.73744,
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
      "heading": 4,
      "squawk": "7742",
      "timestamp": 1644750775,
      "ems": null
    },
    {
      "latitude": 51.557114,
      "longitude": 6.737747,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 3,
      "squawk": "7742",
      "timestamp": 1644750781,
      "ems": null
    },
    {
      "latitude": 51.559845,
      "longitude": 6.738034,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1644750787,
      "ems": null
    },
    {
      "latitude": 51.562561,
      "longitude": 6.738129,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750793,
      "ems": null
    },
    {
      "latitude": 51.565449,
      "longitude": 6.738205,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750800,
      "ems": null
    },
    {
      "latitude": 51.566658,
      "longitude": 6.738205,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1644750803,
      "ems": null
    },
    {
      "latitude": 51.56813,
      "longitude": 6.738182,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "7742",
      "timestamp": 1644750806,
      "ems": null
    },
    {
      "latitude": 51.569359,
      "longitude": 6.738129,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "7742",
      "timestamp": 1644750809,
      "ems": null
    },
    {
      "latitude": 51.572205,
      "longitude": 6.738182,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750815,
      "ems": null
    },
    {
      "latitude": 51.575272,
      "longitude": 6.738331,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1644750821,
      "ems": null
    },
    {
      "latitude": 51.578247,
      "longitude": 6.738405,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750827,
      "ems": null
    },
    {
      "latitude": 51.581177,
      "longitude": 6.738331,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 358,
      "squawk": "7742",
      "timestamp": 1644750833,
      "ems": null
    },
    {
      "latitude": 51.584209,
      "longitude": 6.738281,
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
      "heading": 360,
      "squawk": "7742",
      "timestamp": 1644750839,
      "ems": null
    },
    {
      "latitude": 51.587189,
      "longitude": 6.738358,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750845,
      "ems": null
    },
    {
      "latitude": 51.590881,
      "longitude": 6.738405,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750853,
      "ems": null
    },
    {
      "latitude": 51.593628,
      "longitude": 6.738479,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750858,
      "ems": null
    },
    {
      "latitude": 51.5965,
      "longitude": 6.738586,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750865,
      "ems": null
    },
    {
      "latitude": 51.59967,
      "longitude": 6.738776,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750871,
      "ems": null
    },
    {
      "latitude": 51.6026,
      "longitude": 6.738925,
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
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750877,
      "ems": null
    },
    {
      "latitude": 51.60511,
      "longitude": 6.738968,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750883,
      "ems": null
    },
    {
      "latitude": 51.608276,
      "longitude": 6.739044,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750889,
      "ems": null
    },
    {
      "latitude": 51.612095,
      "longitude": 6.739197,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 1,
      "squawk": "7742",
      "timestamp": 1644750897,
      "ems": null
    },
    {
      "latitude": 51.615818,
      "longitude": 6.739426,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 2,
      "squawk": "7742",
      "timestamp": 1644750904,
      "ems": null
    },
    {
      "latitude": 51.617214,
      "longitude": 6.739655,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "7742",
      "timestamp": 1644750907,
      "ems": null
    },
    {
      "latitude": 51.618164,
      "longitude": 6.73989,
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
      "heading": 6,
      "squawk": "7742",
      "timestamp": 1644750909,
      "ems": null
    },
    {
      "latitude": 51.620361,
      "longitude": 6.740632,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 12,
      "squawk": "7742",
      "timestamp": 1644750913,
      "ems": null
    },
    {
      "latitude": 51.621048,
      "longitude": 6.740929,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 13,
      "squawk": "7742",
      "timestamp": 1644750914,
      "ems": null
    },
    {
      "latitude": 51.622421,
      "longitude": 6.741448,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "7742",
      "timestamp": 1644750918,
      "ems": null
    },
    {
      "latitude": 51.622894,
      "longitude": 6.741638,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 13,
      "squawk": "7742",
      "timestamp": 1644750921,
      "ems": null
    },
    {
      "latitude": 51.625687,
      "longitude": 6.742706,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 13,
      "squawk": "7742",
      "timestamp": 1644750924,
      "ems": null
    },
    {
      "latitude": 51.628189,
      "longitude": 6.743675,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "7742",
      "timestamp": 1644750929,
      "ems": null
    },
    {
      "latitude": 51.631714,
      "longitude": 6.744863,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 10,
      "squawk": "7742",
      "timestamp": 1644750936,
      "ems": null
    },
    {
      "latitude": 51.6343,
      "longitude": 6.745605,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 12,
      "squawk": "7742",
      "timestamp": 1644750941,
      "ems": null
    },
    {
      "latitude": 51.63652,
      "longitude": 6.746422,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 12,
      "squawk": "7542",
      "timestamp": 1644750948,
      "ems": null
    },
    {
      "latitude": 51.639633,
      "longitude": 6.74761,
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
      "heading": 13,
      "squawk": "7542",
      "timestamp": 1644750955,
      "ems": null
    },
    {
      "latitude": 51.644989,
      "longitude": 6.749614,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "7542",
      "timestamp": 1644750963,
      "ems": null
    },
    {
      "latitude": 51.649288,
      "longitude": 6.75148,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 15,
      "squawk": "7542",
      "timestamp": 1644750971,
      "ems": null
    },
    {
      "latitude": 51.653061,
      "longitude": 6.753311,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "7542",
      "timestamp": 1644750979,
      "ems": null
    },
    {
      "latitude": 51.65506,
      "longitude": 6.754439,
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
      "heading": 18,
      "squawk": "7542",
      "timestamp": 1644750983,
      "ems": null
    },
    {
      "latitude": 51.657166,
      "longitude": 6.755627,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 20,
      "squawk": "7542",
      "timestamp": 1644750987,
      "ems": null
    },
    {
      "latitude": 51.658691,
      "longitude": 6.756592,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 20,
      "squawk": "7742",
      "timestamp": 1644750991,
      "ems": null
    },
    {
      "latitude": 51.66124,
      "longitude": 6.758225,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1644750995,
      "ems": null
    },
    {
      "latitude": 51.662888,
      "longitude": 6.759338,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1644750999,
      "ems": null
    },
    {
      "latitude": 51.664902,
      "longitude": 6.760749,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1644751003,
      "ems": null
    },
    {
      "latitude": 51.667877,
      "longitude": 6.762827,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1644751009,
      "ems": null
    },
    {
      "latitude": 51.670898,
      "longitude": 6.764683,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1644751015,
      "ems": null
    },
    {
      "latitude": 51.673874,
      "longitude": 6.76691,
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
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1644751022,
      "ems": null
    },
    {
      "latitude": 51.676056,
      "longitude": 6.768417,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1644751028,
      "ems": null
    },
    {
      "latitude": 51.679504,
      "longitude": 6.770918,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1644751036,
      "ems": null
    },
    {
      "latitude": 51.682709,
      "longitude": 6.77322,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1644751044,
      "ems": null
    },
    {
      "latitude": 51.685913,
      "longitude": 6.775002,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "7742",
      "timestamp": 1644751048,
      "ems": null
    },
    {
      "latitude": 51.687183,
      "longitude": 6.775665,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1644751052,
      "ems": null
    },
    {
      "latitude": 51.689556,
      "longitude": 6.776886,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "7742",
      "timestamp": 1644751056,
      "ems": null
    },
    {
      "latitude": 51.691315,
      "longitude": 6.777674,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 16,
      "squawk": "7742",
      "timestamp": 1644751060,
      "ems": null
    },
    {
      "latitude": 51.6931,
      "longitude": 6.778564,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 16,
      "squawk": "7742",
      "timestamp": 1644751064,
      "ems": null
    },
    {
      "latitude": 51.695251,
      "longitude": 6.779603,
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
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1644751068,
      "ems": null
    },
    {
      "latitude": 51.698124,
      "longitude": 6.781082,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1644751076,
      "ems": null
    },
    {
      "latitude": 51.702667,
      "longitude": 6.78339,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 16,
      "squawk": "7742",
      "timestamp": 1644751084,
      "ems": null
    },
    {
      "latitude": 51.706177,
      "longitude": 6.785126,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 19,
      "squawk": "7742",
      "timestamp": 1644751091,
      "ems": null
    },
    {
      "latitude": 51.709061,
      "longitude": 6.786652,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 16,
      "squawk": "7742",
      "timestamp": 1644751097,
      "ems": null
    },
    {
      "latitude": 51.710587,
      "longitude": 6.787398,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1644751105,
      "ems": null
    },
    {
      "latitude": 51.716,
      "longitude": 6.790085,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 18,
      "squawk": "7742",
      "timestamp": 1644751111,
      "ems": null
    },
    {
      "latitude": 51.718964,
      "longitude": 6.791778,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "7742",
      "timestamp": 1644751117,
      "ems": null
    },
    {
      "latitude": 51.721939,
      "longitude": 6.793485,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 19,
      "squawk": "7742",
      "timestamp": 1644751123,
      "ems": null
    },
    {
      "latitude": 51.72464,
      "longitude": 6.795118,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1644751129,
      "ems": null
    },
    {
      "latitude": 51.726101,
      "longitude": 6.796036,
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
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1644751132,
      "ems": null
    },
    {
      "latitude": 51.727451,
      "longitude": 6.796951,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1644751135,
      "ems": null
    },
    {
      "latitude": 51.728806,
      "longitude": 6.797865,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1644751138,
      "ems": null
    },
    {
      "latitude": 51.730728,
      "longitude": 6.799201,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1644751142,
      "ems": null
    },
    {
      "latitude": 51.731174,
      "longitude": 6.799545,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1644751144,
      "ems": null
    },
    {
      "latitude": 51.73513,
      "longitude": 6.802292,
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
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1644751152,
      "ems": null
    },
    {
      "latitude": 51.738968,
      "longitude": 6.804917,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751160,
      "ems": null
    },
    {
      "latitude": 51.742859,
      "longitude": 6.807785,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1644751168,
      "ems": null
    },
    {
      "latitude": 51.747025,
      "longitude": 6.810781,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1644751176,
      "ems": null
    },
    {
      "latitude": 51.750401,
      "longitude": 6.813126,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751184,
      "ems": null
    },
    {
      "latitude": 51.753296,
      "longitude": 6.815309,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751189,
      "ems": null
    },
    {
      "latitude": 51.755848,
      "longitude": 6.817398,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1644751196,
      "ems": null
    },
    {
      "latitude": 51.759247,
      "longitude": 6.82045,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 29,
      "squawk": "7742",
      "timestamp": 1644751202,
      "ems": null
    },
    {
      "latitude": 51.760712,
      "longitude": 6.821842,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1644751206,
      "ems": null
    },
    {
      "latitude": 51.762829,
      "longitude": 6.824112,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1644751211,
      "ems": null
    },
    {
      "latitude": 51.76432,
      "longitude": 6.825638,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1644751215,
      "ems": null
    },
    {
      "latitude": 51.766296,
      "longitude": 6.827632,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 32,
      "squawk": "7742",
      "timestamp": 1644751219,
      "ems": null
    },
    {
      "latitude": 51.768089,
      "longitude": 6.829453,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 31,
      "squawk": "7742",
      "timestamp": 1644751223,
      "ems": null
    },
    {
      "latitude": 51.771862,
      "longitude": 6.832581,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751231,
      "ems": null
    },
    {
      "latitude": 51.773849,
      "longitude": 6.834164,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751235,
      "ems": null
    },
    {
      "latitude": 51.775539,
      "longitude": 6.83548,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1644751239,
      "ems": null
    },
    {
      "latitude": 51.777832,
      "longitude": 6.837356,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 27,
      "squawk": "7742",
      "timestamp": 1644751244,
      "ems": null
    },
    {
      "latitude": 51.779022,
      "longitude": 6.838247,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1644751246,
      "ems": null
    },
    {
      "latitude": 51.780472,
      "longitude": 6.839371,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751250,
      "ems": null
    },
    {
      "latitude": 51.781635,
      "longitude": 6.840286,
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
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751252,
      "ems": null
    },
    {
      "latitude": 51.784245,
      "longitude": 6.84227,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751258,
      "ems": null
    },
    {
      "latitude": 51.787594,
      "longitude": 6.844635,
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
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1644751266,
      "ems": null
    },
    {
      "latitude": 51.790295,
      "longitude": 6.846619,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 24,
      "squawk": "7742",
      "timestamp": 1644751274,
      "ems": null
    },
    {
      "latitude": 51.795322,
      "longitude": 6.850204,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 23,
      "squawk": "7742",
      "timestamp": 1644751282,
      "ems": null
    },
    {
      "latitude": 51.799759,
      "longitude": 6.853019,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 21,
      "squawk": "7742",
      "timestamp": 1644751292,
      "ems": null
    },
    {
      "latitude": 51.802307,
      "longitude": 6.85463,
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
      "heading": 20,
      "squawk": "7742",
      "timestamp": 1644751297,
      "ems": null
    },
    {
      "latitude": 51.805344,
      "longitude": 6.856508,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1644751304,
      "ems": null
    },
    {
      "latitude": 51.807987,
      "longitude": 6.858368,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 22,
      "squawk": "7742",
      "timestamp": 1644751309,
      "ems": null
    },
    {
      "latitude": 51.811615,
      "longitude": 6.860591,
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
      "heading": 20,
      "squawk": "7742",
      "timestamp": 1644751316,
      "ems": null
    },
    {
      "latitude": 51.814922,
      "longitude": 6.862564,
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
      "heading": 19,
      "squawk": "7742",
      "timestamp": 1644751324,
      "ems": null
    },
    {
      "latitude": 51.818527,
      "longitude": 6.864377,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 17,
      "squawk": "7742",
      "timestamp": 1644751332,
      "ems": null
    },
    {
      "latitude": 51.820835,
      "longitude": 6.86554,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 16,
      "squawk": "7742",
      "timestamp": 1644751336,
      "ems": null
    },
    {
      "latitude": 51.824707,
      "longitude": 6.868088,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 25,
      "squawk": "7742",
      "timestamp": 1644751344,
      "ems": null
    },
    {
      "latitude": 51.826046,
      "longitude": 6.869202,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1644751348,
      "ems": null
    },
    {
      "latitude": 51.828514,
      "longitude": 6.871185,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 26,
      "squawk": "7742",
      "timestamp": 1644751352,
      "ems": null
    },
    {
      "latitude": 51.830936,
      "longitude": 6.873703,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 33,
      "squawk": "7742",
      "timestamp": 1644751358,
      "ems": null
    },
    {
      "latitude": 51.832333,
      "longitude": 6.876144,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 45,
      "squawk": "7742",
      "timestamp": 1644751362,
      "ems": null
    },
    {
      "latitude": 51.833588,
      "longitude": 6.878662,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 51,
      "squawk": "7742",
      "timestamp": 1644751366,
      "ems": null
    },
    {
      "latitude": 51.834286,
      "longitude": 6.880035,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 50,
      "squawk": "7742",
      "timestamp": 1644751370,
      "ems": null
    },
    {
      "latitude": 51.835918,
      "longitude": 6.883316,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 52,
      "squawk": "7742",
      "timestamp": 1644751375,
      "ems": null
    },
    {
      "latitude": 51.836708,
      "longitude": 6.886368,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 52,
      "squawk": "7742",
      "timestamp": 1644751379,
      "ems": null
    },
    {
      "latitude": 51.836151,
      "longitude": 6.889572,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644751383,
      "ems": null
    },
    {
      "latitude": 51.835602,
      "longitude": 6.891545,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644751387,
      "ems": null
    },
    {
      "latitude": 51.834892,
      "longitude": 6.894073,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644751391,
      "ems": null
    },
    {
      "latitude": 51.833916,
      "longitude": 6.895981,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1644751395,
      "ems": null
    },
    {
      "latitude": 51.833172,
      "longitude": 6.896439,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644751399,
      "ems": null
    },
    {
      "latitude": 51.831821,
      "longitude": 6.896286,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644751403,
      "ems": null
    },
    {
      "latitude": 51.830425,
      "longitude": 6.896057,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1644751408,
      "ems": null
    },
    {
      "latitude": 51.829586,
      "longitude": 6.895905,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644751412,
      "ems": null
    },
    {
      "latitude": 51.82869,
      "longitude": 6.895777,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644751416,
      "ems": null
    },
    {
      "latitude": 51.827629,
      "longitude": 6.895676,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1644751420,
      "ems": null
    },
    {
      "latitude": 51.827179,
      "longitude": 6.895628,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1644751424,
      "ems": null
    },
    {
      "latitude": 51.825813,
      "longitude": 6.89537,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644751428,
      "ems": null
    },
    {
      "latitude": 51.824978,
      "longitude": 6.89537,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644751432,
      "ems": null
    },
    {
      "latitude": 51.823929,
      "longitude": 6.895851,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644751437,
      "ems": null
    },
    {
      "latitude": 51.82283,
      "longitude": 6.896667,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644751441,
      "ems": null
    },
    {
      "latitude": 51.821812,
      "longitude": 6.897736,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1644751445,
      "ems": null
    },
    {
      "latitude": 51.820881,
      "longitude": 6.898804,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644751449,
      "ems": null
    },
    {
      "latitude": 51.820042,
      "longitude": 6.900101,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1644751453,
      "ems": null
    },
    {
      "latitude": 51.819252,
      "longitude": 6.901703,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1644751457,
      "ems": null
    },
    {
      "latitude": 51.818756,
      "longitude": 6.90268,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1644751459,
      "ems": null
    },
    {
      "latitude": 51.818321,
      "longitude": 6.90361,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1644751461,
      "ems": null
    },
    {
      "latitude": 51.817932,
      "longitude": 6.904387,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1644751463,
      "ems": null
    },
    {
      "latitude": 51.816971,
      "longitude": 6.906204,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1644751468,
      "ems": null
    },
    {
      "latitude": 51.816605,
      "longitude": 6.906911,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1644751469,
      "ems": null
    },
    {
      "latitude": 51.815109,
      "longitude": 6.909637,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1644751477,
      "ems": null
    },
    {
      "latitude": 51.81469,
      "longitude": 6.910324,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1644751478,
      "ems": null
    },
    {
      "latitude": 51.813759,
      "longitude": 6.911697,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644751483,
      "ems": null
    },
    {
      "latitude": 51.812714,
      "longitude": 6.913147,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644751487,
      "ems": null
    },
    {
      "latitude": 51.812035,
      "longitude": 6.914139,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644751491,
      "ems": null
    },
    {
      "latitude": 51.811111,
      "longitude": 6.915226,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1644751495,
      "ems": null
    },
    {
      "latitude": 51.810059,
      "longitude": 6.916487,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1644751499,
      "ems": null
    },
    {
      "latitude": 51.809101,
      "longitude": 6.917572,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 143,
      "squawk": "7742",
      "timestamp": 1644751503,
      "ems": null
    },
    {
      "latitude": 51.808136,
      "longitude": 6.918788,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1644751507,
      "ems": null
    },
    {
      "latitude": 51.806404,
      "longitude": 6.921463,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1644751514,
      "ems": null
    },
    {
      "latitude": 51.805054,
      "longitude": 6.923447,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1644751520,
      "ems": null
    },
    {
      "latitude": 51.804634,
      "longitude": 6.924057,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1644751522,
      "ems": null
    },
    {
      "latitude": 51.802727,
      "longitude": 6.926498,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1644751530,
      "ems": null
    },
    {
      "latitude": 51.801819,
      "longitude": 6.9274,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644751534,
      "ems": null
    },
    {
      "latitude": 51.8004,
      "longitude": 6.929255,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1644751540,
      "ems": null
    },
    {
      "latitude": 51.799374,
      "longitude": 6.931076,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1644751545,
      "ems": null
    },
    {
      "latitude": 51.798203,
      "longitude": 6.933115,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1644751551,
      "ems": null
    },
    {
      "latitude": 51.796921,
      "longitude": 6.935194,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1644751557,
      "ems": null
    },
    {
      "latitude": 51.796299,
      "longitude": 6.936264,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1644751561,
      "ems": null
    },
    {
      "latitude": 51.795731,
      "longitude": 6.937346,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1644751564,
      "ems": null
    },
    {
      "latitude": 51.79388,
      "longitude": 6.940384,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1644751572,
      "ems": null
    },
    {
      "latitude": 51.792156,
      "longitude": 6.943207,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1644751580,
      "ems": null
    },
    {
      "latitude": 51.790527,
      "longitude": 6.945877,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 136,
      "squawk": "7742",
      "timestamp": 1644751588,
      "ems": null
    },
    {
      "latitude": 51.788635,
      "longitude": 6.94863,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644751596,
      "ems": null
    },
    {
      "latitude": 51.787399,
      "longitude": 6.950263,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644751601,
      "ems": null
    },
    {
      "latitude": 51.786015,
      "longitude": 6.952515,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1644751607,
      "ems": null
    },
    {
      "latitude": 51.785034,
      "longitude": 6.954346,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1644751613,
      "ems": null
    },
    {
      "latitude": 51.784103,
      "longitude": 6.956499,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644751619,
      "ems": null
    },
    {
      "latitude": 51.783463,
      "longitude": 6.957983,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644751621,
      "ems": null
    },
    {
      "latitude": 51.782913,
      "longitude": 6.959468,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644751625,
      "ems": null
    },
    {
      "latitude": 51.781998,
      "longitude": 6.961992,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644751629,
      "ems": null
    },
    {
      "latitude": 51.780991,
      "longitude": 6.964516,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644751633,
      "ems": null
    },
    {
      "latitude": 51.78067,
      "longitude": 6.965332,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751637,
      "ems": null
    },
    {
      "latitude": 51.780075,
      "longitude": 6.966817,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751640,
      "ems": null
    },
    {
      "latitude": 51.778839,
      "longitude": 6.970009,
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751644,
      "ems": null
    },
    {
      "latitude": 51.777512,
      "longitude": 6.973572,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644751652,
      "ems": null
    },
    {
      "latitude": 51.776505,
      "longitude": 6.97617,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644751658,
      "ems": null
    },
    {
      "latitude": 51.775211,
      "longitude": 6.979141,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1644751664,
      "ems": null
    },
    {
      "latitude": 51.774445,
      "longitude": 6.980772,
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
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1644751667,
      "ems": null
    },
    {
      "latitude": 51.773895,
      "longitude": 6.981886,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1644751670,
      "ems": null
    },
    {
      "latitude": 51.773071,
      "longitude": 6.98349,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1644751674,
      "ems": null
    },
    {
      "latitude": 51.772465,
      "longitude": 6.984787,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1644751677,
      "ems": null
    },
    {
      "latitude": 51.771114,
      "longitude": 6.989059,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644751685,
      "ems": null
    },
    {
      "latitude": 51.770462,
      "longitude": 6.991684,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644751689,
      "ems": null
    },
    {
      "latitude": 51.77005,
      "longitude": 6.993318,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644751693,
      "ems": null
    },
    {
      "latitude": 51.769272,
      "longitude": 6.995619,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644751697,
      "ems": null
    },
    {
      "latitude": 51.768631,
      "longitude": 6.997623,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644751701,
      "ems": null
    },
    {
      "latitude": 51.767067,
      "longitude": 7.000351,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644751709,
      "ems": null
    },
    {
      "latitude": 51.765762,
      "longitude": 7.002106,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644751713,
      "ems": null
    },
    {
      "latitude": 51.765015,
      "longitude": 7.003191,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644751716,
      "ems": null
    },
    {
      "latitude": 51.764645,
      "longitude": 7.003708,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644751717,
      "ems": null
    },
    {
      "latitude": 51.76442,
      "longitude": 7.004007,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644751721,
      "ems": null
    },
    {
      "latitude": 51.762691,
      "longitude": 7.006378,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1644751725,
      "ems": null
    },
    {
      "latitude": 51.761574,
      "longitude": 7.00798,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644751730,
      "ems": null
    },
    {
      "latitude": 51.759842,
      "longitude": 7.011356,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1644751738,
      "ems": null
    },
    {
      "latitude": 51.758873,
      "longitude": 7.013168,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1644751742,
      "ems": null
    },
    {
      "latitude": 51.758194,
      "longitude": 7.014993,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751746,
      "ems": null
    },
    {
      "latitude": 51.757942,
      "longitude": 7.015991,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644751748,
      "ems": null
    },
    {
      "latitude": 51.757462,
      "longitude": 7.017888,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644751751,
      "ems": null
    },
    {
      "latitude": 51.757004,
      "longitude": 7.019967,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644751755,
      "ems": null
    },
    {
      "latitude": 51.756359,
      "longitude": 7.022858,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644751760,
      "ems": null
    },
    {
      "latitude": 51.756042,
      "longitude": 7.024346,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644751764,
      "ems": null
    },
    {
      "latitude": 51.755287,
      "longitude": 7.028427,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "7742",
      "timestamp": 1644751769,
      "ems": null
    },
    {
      "latitude": 51.75499,
      "longitude": 7.030879,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "7742",
      "timestamp": 1644751773,
      "ems": null
    },
    {
      "latitude": 51.754761,
      "longitude": 7.032512,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 101,
      "squawk": "7742",
      "timestamp": 1644751776,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 7.034813,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1644751779,
      "ems": null
    },
    {
      "latitude": 51.754028,
      "longitude": 7.037189,
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
      "heading": 103,
      "squawk": "7742",
      "timestamp": 1644751783,
      "ems": null
    },
    {
      "latitude": 51.753147,
      "longitude": 7.041397,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1644751791,
      "ems": null
    },
    {
      "latitude": 51.752495,
      "longitude": 7.043457,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644751795,
      "ems": null
    },
    {
      "latitude": 51.751705,
      "longitude": 7.045898,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644751799,
      "ems": null
    },
    {
      "latitude": 51.75119,
      "longitude": 7.047507,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644751803,
      "ems": null
    },
    {
      "latitude": 51.750866,
      "longitude": 7.048492,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644751805,
      "ems": null
    },
    {
      "latitude": 51.750168,
      "longitude": 7.050705,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644751809,
      "ems": null
    },
    {
      "latitude": 51.749725,
      "longitude": 7.052332,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644751812,
      "ems": null
    },
    {
      "latitude": 51.749405,
      "longitude": 7.053371,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644751814,
      "ems": null
    },
    {
      "latitude": 51.749004,
      "longitude": 7.054672,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644751816,
      "ems": null
    },
    {
      "latitude": 51.748119,
      "longitude": 7.057343,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1644751821,
      "ems": null
    },
    {
      "latitude": 51.747047,
      "longitude": 7.061005,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1644751828,
      "ems": null
    },
    {
      "latitude": 51.746677,
      "longitude": 7.062683,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1644751831,
      "ems": null
    },
    {
      "latitude": 51.746338,
      "longitude": 7.064209,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644751835,
      "ems": null
    },
    {
      "latitude": 51.74514,
      "longitude": 7.068481,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644751843,
      "ems": null
    },
    {
      "latitude": 51.744022,
      "longitude": 7.072144,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644751851,
      "ems": null
    },
    {
      "latitude": 51.742252,
      "longitude": 7.077789,
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644751860,
      "ems": null
    },
    {
      "latitude": 51.741787,
      "longitude": 7.079239,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644751863,
      "ems": null
    },
    {
      "latitude": 51.741322,
      "longitude": 7.080765,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644751866,
      "ems": null
    },
    {
      "latitude": 51.740902,
      "longitude": 7.082062,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644751868,
      "ems": null
    },
    {
      "latitude": 51.7397,
      "longitude": 7.085143,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1644751876,
      "ems": null
    },
    {
      "latitude": 51.73867,
      "longitude": 7.087479,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1644751880,
      "ems": null
    },
    {
      "latitude": 51.737877,
      "longitude": 7.089462,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751884,
      "ems": null
    },
    {
      "latitude": 51.736526,
      "longitude": 7.093582,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644751892,
      "ems": null
    },
    {
      "latitude": 51.735924,
      "longitude": 7.096176,
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644751896,
      "ems": null
    },
    {
      "latitude": 51.73526,
      "longitude": 7.098653,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644751901,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 7.100954,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644751905,
      "ems": null
    },
    {
      "latitude": 51.734341,
      "longitude": 7.102509,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644751908,
      "ems": null
    },
    {
      "latitude": 51.734062,
      "longitude": 7.103577,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644751910,
      "ems": null
    },
    {
      "latitude": 51.733566,
      "longitude": 7.105927,
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
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1644751914,
      "ems": null
    },
    {
      "latitude": 51.733246,
      "longitude": 7.107709,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1644751917,
      "ems": null
    },
    {
      "latitude": 51.732571,
      "longitude": 7.110748,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644751923,
      "ems": null
    },
    {
      "latitude": 51.731827,
      "longitude": 7.114316,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1644751928,
      "ems": null
    },
    {
      "latitude": 51.731033,
      "longitude": 7.118149,
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
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1644751935,
      "ems": null
    },
    {
      "latitude": 51.730728,
      "longitude": 7.120106,
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
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1644751938,
      "ems": null
    },
    {
      "latitude": 51.730431,
      "longitude": 7.121811,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "7742",
      "timestamp": 1644751941,
      "ems": null
    },
    {
      "latitude": 51.729824,
      "longitude": 7.124939,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644751946,
      "ems": null
    },
    {
      "latitude": 51.729492,
      "longitude": 7.126119,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644751950,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 7.12822,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644751953,
      "ems": null
    },
    {
      "latitude": 51.728382,
      "longitude": 7.129745,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644751956,
      "ems": null
    },
    {
      "latitude": 51.727798,
      "longitude": 7.131315,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751959,
      "ems": null
    },
    {
      "latitude": 51.727219,
      "longitude": 7.132797,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751962,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 7.133865,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751964,
      "ems": null
    },
    {
      "latitude": 51.726105,
      "longitude": 7.135546,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751968,
      "ems": null
    },
    {
      "latitude": 51.72554,
      "longitude": 7.136917,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751971,
      "ems": null
    },
    {
      "latitude": 51.72496,
      "longitude": 7.138367,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644751974,
      "ems": null
    },
    {
      "latitude": 51.724411,
      "longitude": 7.139852,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644751977,
      "ems": null
    },
    {
      "latitude": 51.723866,
      "longitude": 7.141266,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644751980,
      "ems": null
    },
    {
      "latitude": 51.7234,
      "longitude": 7.142563,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644751983,
      "ems": null
    },
    {
      "latitude": 51.722534,
      "longitude": 7.145345,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644751988,
      "ems": null
    },
    {
      "latitude": 51.721909,
      "longitude": 7.147751,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644751993,
      "ems": null
    },
    {
      "latitude": 51.72126,
      "longitude": 7.150574,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644751998,
      "ems": null
    },
    {
      "latitude": 51.720703,
      "longitude": 7.15299,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752002,
      "ems": null
    },
    {
      "latitude": 51.720291,
      "longitude": 7.154475,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752004,
      "ems": null
    },
    {
      "latitude": 51.719696,
      "longitude": 7.156628,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752008,
      "ems": null
    },
    {
      "latitude": 51.719444,
      "longitude": 7.157669,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752010,
      "ems": null
    },
    {
      "latitude": 51.718918,
      "longitude": 7.159671,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752014,
      "ems": null
    },
    {
      "latitude": 51.717682,
      "longitude": 7.164719,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752022,
      "ems": null
    },
    {
      "latitude": 51.716583,
      "longitude": 7.168802,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752030,
      "ems": null
    },
    {
      "latitude": 51.715252,
      "longitude": 7.173615,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752037,
      "ems": null
    },
    {
      "latitude": 51.714321,
      "longitude": 7.176971,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752043,
      "ems": null
    },
    {
      "latitude": 51.713425,
      "longitude": 7.180011,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752048,
      "ems": null
    },
    {
      "latitude": 51.712368,
      "longitude": 7.183533,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644752055,
      "ems": null
    },
    {
      "latitude": 51.711456,
      "longitude": 7.186766,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752061,
      "ems": null
    },
    {
      "latitude": 51.710632,
      "longitude": 7.189809,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752066,
      "ems": null
    },
    {
      "latitude": 51.709667,
      "longitude": 7.193451,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752073,
      "ems": null
    },
    {
      "latitude": 51.708481,
      "longitude": 7.19701,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752079,
      "ems": null
    },
    {
      "latitude": 51.707573,
      "longitude": 7.200165,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752085,
      "ems": null
    },
    {
      "latitude": 51.706688,
      "longitude": 7.203293,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752091,
      "ems": null
    },
    {
      "latitude": 51.705711,
      "longitude": 7.207184,
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
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752097,
      "ems": null
    },
    {
      "latitude": 51.705013,
      "longitude": 7.210464,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 106,
      "squawk": "7742",
      "timestamp": 1644752103,
      "ems": null
    },
    {
      "latitude": 51.704731,
      "longitude": 7.212143,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1644752106,
      "ems": null
    },
    {
      "latitude": 51.704498,
      "longitude": 7.213516,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1644752109,
      "ems": null
    },
    {
      "latitude": 51.704178,
      "longitude": 7.215419,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1644752112,
      "ems": null
    },
    {
      "latitude": 51.703941,
      "longitude": 7.216949,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 105,
      "squawk": "7742",
      "timestamp": 1644752115,
      "ems": null
    },
    {
      "latitude": 51.703629,
      "longitude": 7.218537,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1644752118,
      "ems": null
    },
    {
      "latitude": 51.702942,
      "longitude": 7.221655,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752124,
      "ems": null
    },
    {
      "latitude": 51.702358,
      "longitude": 7.224274,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1644752130,
      "ems": null
    },
    {
      "latitude": 51.701569,
      "longitude": 7.228241,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 108,
      "squawk": "7742",
      "timestamp": 1644752136,
      "ems": null
    },
    {
      "latitude": 51.700916,
      "longitude": 7.231216,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752142,
      "ems": null
    },
    {
      "latitude": 51.700562,
      "longitude": 7.23279,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752145,
      "ems": null
    },
    {
      "latitude": 51.699657,
      "longitude": 7.236328,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752151,
      "ems": null
    },
    {
      "latitude": 51.699192,
      "longitude": 7.237854,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752154,
      "ems": null
    },
    {
      "latitude": 51.698727,
      "longitude": 7.239075,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644752157,
      "ems": null
    },
    {
      "latitude": 51.698135,
      "longitude": 7.24051,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1644752160,
      "ems": null
    },
    {
      "latitude": 51.697472,
      "longitude": 7.241974,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 126,
      "squawk": "7742",
      "timestamp": 1644752163,
      "ems": null
    },
    {
      "latitude": 51.696957,
      "longitude": 7.242966,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1644752166,
      "ems": null
    },
    {
      "latitude": 51.696259,
      "longitude": 7.244444,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 128,
      "squawk": "7742",
      "timestamp": 1644752169,
      "ems": null
    },
    {
      "latitude": 51.695656,
      "longitude": 7.245636,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1644752172,
      "ems": null
    },
    {
      "latitude": 51.695004,
      "longitude": 7.246857,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1644752175,
      "ems": null
    },
    {
      "latitude": 51.694443,
      "longitude": 7.248154,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1644752178,
      "ems": null
    },
    {
      "latitude": 51.694016,
      "longitude": 7.249195,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644752181,
      "ems": null
    },
    {
      "latitude": 51.693008,
      "longitude": 7.252461,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752187,
      "ems": null
    },
    {
      "latitude": 51.692596,
      "longitude": 7.253946,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752190,
      "ems": null
    },
    {
      "latitude": 51.692184,
      "longitude": 7.255653,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752193,
      "ems": null
    },
    {
      "latitude": 51.691746,
      "longitude": 7.257309,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752196,
      "ems": null
    },
    {
      "latitude": 51.691315,
      "longitude": 7.258994,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752199,
      "ems": null
    },
    {
      "latitude": 51.690815,
      "longitude": 7.26059,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752202,
      "ems": null
    },
    {
      "latitude": 51.690353,
      "longitude": 7.26226,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752205,
      "ems": null
    },
    {
      "latitude": 51.689896,
      "longitude": 7.263819,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752208,
      "ems": null
    },
    {
      "latitude": 51.689465,
      "longitude": 7.26532,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752211,
      "ems": null
    },
    {
      "latitude": 51.688625,
      "longitude": 7.268219,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752217,
      "ems": null
    },
    {
      "latitude": 51.687786,
      "longitude": 7.271271,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752223,
      "ems": null
    },
    {
      "latitude": 51.686829,
      "longitude": 7.274508,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752229,
      "ems": null
    },
    {
      "latitude": 51.686325,
      "longitude": 7.275918,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644752232,
      "ems": null
    },
    {
      "latitude": 51.685867,
      "longitude": 7.277181,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644752235,
      "ems": null
    },
    {
      "latitude": 51.68486,
      "longitude": 7.280892,
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752241,
      "ems": null
    },
    {
      "latitude": 51.684574,
      "longitude": 7.282333,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752244,
      "ems": null
    },
    {
      "latitude": 51.683739,
      "longitude": 7.285919,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752250,
      "ems": null
    },
    {
      "latitude": 51.683533,
      "longitude": 7.286979,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752253,
      "ems": null
    },
    {
      "latitude": 51.682571,
      "longitude": 7.290468,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752259,
      "ems": null
    },
    {
      "latitude": 51.682201,
      "longitude": 7.291718,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752263,
      "ems": null
    },
    {
      "latitude": 51.681782,
      "longitude": 7.293243,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752265,
      "ems": null
    },
    {
      "latitude": 51.680992,
      "longitude": 7.296143,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644752271,
      "ems": null
    },
    {
      "latitude": 51.680237,
      "longitude": 7.299153,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752277,
      "ems": null
    },
    {
      "latitude": 51.679829,
      "longitude": 7.300644,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752280,
      "ems": null
    },
    {
      "latitude": 51.678989,
      "longitude": 7.303848,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752286,
      "ems": null
    },
    {
      "latitude": 51.678616,
      "longitude": 7.305527,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752290,
      "ems": null
    },
    {
      "latitude": 51.677902,
      "longitude": 7.308729,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752295,
      "ems": null
    },
    {
      "latitude": 51.677078,
      "longitude": 7.312218,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644752302,
      "ems": null
    },
    {
      "latitude": 51.6763,
      "longitude": 7.315336,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752307,
      "ems": null
    },
    {
      "latitude": 51.675476,
      "longitude": 7.318453,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752313,
      "ems": null
    },
    {
      "latitude": 51.675064,
      "longitude": 7.320012,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752316,
      "ems": null
    },
    {
      "latitude": 51.674606,
      "longitude": 7.321794,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752319,
      "ems": null
    },
    {
      "latitude": 51.674103,
      "longitude": 7.32338,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752323,
      "ems": null
    },
    {
      "latitude": 51.673588,
      "longitude": 7.325134,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644752325,
      "ems": null
    },
    {
      "latitude": 51.673004,
      "longitude": 7.326842,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "squawk": "7742",
      "timestamp": 1644752329,
      "ems": null
    },
    {
      "latitude": 51.672501,
      "longitude": 7.328401,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752332,
      "ems": null
    },
    {
      "latitude": 51.672054,
      "longitude": 7.329788,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752334,
      "ems": null
    },
    {
      "latitude": 51.671539,
      "longitude": 7.331295,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644752337,
      "ems": null
    },
    {
      "latitude": 51.670944,
      "longitude": 7.333003,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644752341,
      "ems": null
    },
    {
      "latitude": 51.670395,
      "longitude": 7.334413,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644752343,
      "ems": null
    },
    {
      "latitude": 51.670238,
      "longitude": 7.3349,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644752344,
      "ems": null
    },
    {
      "latitude": 51.669571,
      "longitude": 7.336566,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644752348,
      "ems": null
    },
    {
      "latitude": 51.66898,
      "longitude": 7.338104,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644752352,
      "ems": null
    },
    {
      "latitude": 51.668423,
      "longitude": 7.339554,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644752355,
      "ems": null
    },
    {
      "latitude": 51.667923,
      "longitude": 7.340649,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1644752357,
      "ems": null
    },
    {
      "latitude": 51.667007,
      "longitude": 7.342653,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 124,
      "squawk": "7742",
      "timestamp": 1644752361,
      "ems": null
    },
    {
      "latitude": 51.666279,
      "longitude": 7.344589,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 122,
      "squawk": "7742",
      "timestamp": 1644752365,
      "ems": null
    },
    {
      "latitude": 51.665314,
      "longitude": 7.347181,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644752370,
      "ems": null
    },
    {
      "latitude": 51.664417,
      "longitude": 7.350006,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644752375,
      "ems": null
    },
    {
      "latitude": 51.664032,
      "longitude": 7.351264,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752379,
      "ems": null
    },
    {
      "latitude": 51.662979,
      "longitude": 7.354827,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752384,
      "ems": null
    },
    {
      "latitude": 51.662464,
      "longitude": 7.356644,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752387,
      "ems": null
    },
    {
      "latitude": 51.662186,
      "longitude": 7.357712,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752389,
      "ems": null
    },
    {
      "latitude": 51.661484,
      "longitude": 7.360535,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644752394,
      "ems": null
    },
    {
      "latitude": 51.660881,
      "longitude": 7.362976,
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
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752398,
      "ems": null
    },
    {
      "latitude": 51.66037,
      "longitude": 7.365417,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752402,
      "ems": null
    },
    {
      "latitude": 51.659763,
      "longitude": 7.368088,
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
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752406,
      "ems": null
    },
    {
      "latitude": 51.659683,
      "longitude": 7.368412,
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
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752408,
      "ems": null
    },
    {
      "latitude": 51.659019,
      "longitude": 7.37114,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752412,
      "ems": null
    },
    {
      "latitude": 51.658272,
      "longitude": 7.374725,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752417,
      "ems": null
    },
    {
      "latitude": 51.656971,
      "longitude": 7.379761,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752425,
      "ems": null
    },
    {
      "latitude": 51.65646,
      "longitude": 7.381592,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752428,
      "ems": null
    },
    {
      "latitude": 51.655899,
      "longitude": 7.383499,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752431,
      "ems": null
    },
    {
      "latitude": 51.65538,
      "longitude": 7.385262,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752434,
      "ems": null
    },
    {
      "latitude": 51.654877,
      "longitude": 7.38678,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752437,
      "ems": null
    },
    {
      "latitude": 51.654316,
      "longitude": 7.388535,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752440,
      "ems": null
    },
    {
      "latitude": 51.653732,
      "longitude": 7.390236,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1644752443,
      "ems": null
    },
    {
      "latitude": 51.653107,
      "longitude": 7.391968,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644752446,
      "ems": null
    },
    {
      "latitude": 51.652596,
      "longitude": 7.39357,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644752449,
      "ems": null
    },
    {
      "latitude": 51.651581,
      "longitude": 7.397139,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752455,
      "ems": null
    },
    {
      "latitude": 51.65062,
      "longitude": 7.400851,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752461,
      "ems": null
    },
    {
      "latitude": 51.649708,
      "longitude": 7.404251,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752467,
      "ems": null
    },
    {
      "latitude": 51.649246,
      "longitude": 7.406047,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752469,
      "ems": null
    },
    {
      "latitude": 51.64817,
      "longitude": 7.409821,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752476,
      "ems": null
    },
    {
      "latitude": 51.647141,
      "longitude": 7.413396,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752482,
      "ems": null
    },
    {
      "latitude": 51.646133,
      "longitude": 7.416885,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752488,
      "ems": null
    },
    {
      "latitude": 51.645081,
      "longitude": 7.420522,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752494,
      "ems": null
    },
    {
      "latitude": 51.644165,
      "longitude": 7.42364,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752499,
      "ems": null
    },
    {
      "latitude": 51.643066,
      "longitude": 7.427351,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752505,
      "ems": null
    },
    {
      "latitude": 51.641876,
      "longitude": 7.430989,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752512,
      "ems": null
    },
    {
      "latitude": 51.640862,
      "longitude": 7.434464,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752518,
      "ems": null
    },
    {
      "latitude": 51.640091,
      "longitude": 7.43715,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752523,
      "ems": null
    },
    {
      "latitude": 51.638813,
      "longitude": 7.442627,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1644752531,
      "ems": null
    },
    {
      "latitude": 51.638489,
      "longitude": 7.444499,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1644752534,
      "ems": null
    },
    {
      "latitude": 51.638115,
      "longitude": 7.446365,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752537,
      "ems": null
    },
    {
      "latitude": 51.637711,
      "longitude": 7.448062,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752540,
      "ems": null
    },
    {
      "latitude": 51.63686,
      "longitude": 7.451553,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644752546,
      "ems": null
    },
    {
      "latitude": 51.63644,
      "longitude": 7.453308,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752549,
      "ems": null
    },
    {
      "latitude": 51.635601,
      "longitude": 7.45697,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644752555,
      "ems": null
    },
    {
      "latitude": 51.634735,
      "longitude": 7.460533,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752561,
      "ems": null
    },
    {
      "latitude": 51.634186,
      "longitude": 7.463502,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 107,
      "squawk": "7742",
      "timestamp": 1644752567,
      "ems": null
    },
    {
      "latitude": 51.633415,
      "longitude": 7.467041,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752573,
      "ems": null
    },
    {
      "latitude": 51.632401,
      "longitude": 7.471519,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644752581,
      "ems": null
    },
    {
      "latitude": 51.631622,
      "longitude": 7.474638,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752587,
      "ems": null
    },
    {
      "latitude": 51.63089,
      "longitude": 7.477904,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752593,
      "ems": null
    },
    {
      "latitude": 51.630108,
      "longitude": 7.481308,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752599,
      "ems": null
    },
    {
      "latitude": 51.629288,
      "longitude": 7.484733,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752605,
      "ems": null
    },
    {
      "latitude": 51.628601,
      "longitude": 7.487851,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 109,
      "squawk": "7742",
      "timestamp": 1644752611,
      "ems": null
    },
    {
      "latitude": 51.627823,
      "longitude": 7.491265,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752617,
      "ems": null
    },
    {
      "latitude": 51.627365,
      "longitude": 7.492973,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752620,
      "ems": null
    },
    {
      "latitude": 51.626816,
      "longitude": 7.494754,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752623,
      "ems": null
    },
    {
      "latitude": 51.626358,
      "longitude": 7.496313,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752626,
      "ems": null
    },
    {
      "latitude": 51.625919,
      "longitude": 7.497787,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644752629,
      "ems": null
    },
    {
      "latitude": 51.624939,
      "longitude": 7.501138,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752635,
      "ems": null
    },
    {
      "latitude": 51.624477,
      "longitude": 7.502747,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752638,
      "ems": null
    },
    {
      "latitude": 51.624069,
      "longitude": 7.504107,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752641,
      "ems": null
    },
    {
      "latitude": 51.623081,
      "longitude": 7.507629,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752647,
      "ems": null
    },
    {
      "latitude": 51.622101,
      "longitude": 7.51091,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752653,
      "ems": null
    },
    {
      "latitude": 51.621185,
      "longitude": 7.514055,
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644752659,
      "ems": null
    },
    {
      "latitude": 51.620052,
      "longitude": 7.517319,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644752665,
      "ems": null
    },
    {
      "latitude": 51.619537,
      "longitude": 7.518731,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 121,
      "squawk": "7742",
      "timestamp": 1644752668,
      "ems": null
    },
    {
      "latitude": 51.619076,
      "longitude": 7.520065,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644752671,
      "ems": null
    },
    {
      "latitude": 51.618027,
      "longitude": 7.523111,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644752677,
      "ems": null
    },
    {
      "latitude": 51.61702,
      "longitude": 7.52608,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644752683,
      "ems": null
    },
    {
      "latitude": 51.615959,
      "longitude": 7.529221,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1644752689,
      "ems": null
    },
    {
      "latitude": 51.614822,
      "longitude": 7.53239,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1644752695,
      "ems": null
    },
    {
      "latitude": 51.613956,
      "longitude": 7.535095,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644752701,
      "ems": null
    },
    {
      "latitude": 51.61293,
      "longitude": 7.538223,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752707,
      "ems": null
    },
    {
      "latitude": 51.612,
      "longitude": 7.541275,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752713,
      "ems": null
    },
    {
      "latitude": 51.611069,
      "longitude": 7.544327,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752719,
      "ems": null
    },
    {
      "latitude": 51.610565,
      "longitude": 7.546197,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752722,
      "ems": null
    },
    {
      "latitude": 51.610107,
      "longitude": 7.54783,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 111,
      "squawk": "7742",
      "timestamp": 1644752725,
      "ems": null
    },
    {
      "latitude": 51.609253,
      "longitude": 7.551041,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752731,
      "ems": null
    },
    {
      "latitude": 51.608322,
      "longitude": 7.554214,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752737,
      "ems": null
    },
    {
      "latitude": 51.607487,
      "longitude": 7.557297,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752743,
      "ems": null
    },
    {
      "latitude": 51.606647,
      "longitude": 7.560654,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752749,
      "ems": null
    },
    {
      "latitude": 51.605804,
      "longitude": 7.564087,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752755,
      "ems": null
    },
    {
      "latitude": 51.604786,
      "longitude": 7.567291,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 116,
      "squawk": "7742",
      "timestamp": 1644752761,
      "ems": null
    },
    {
      "latitude": 51.603855,
      "longitude": 7.570267,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752767,
      "ems": null
    },
    {
      "latitude": 51.602875,
      "longitude": 7.573514,
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752773,
      "ems": null
    },
    {
      "latitude": 51.601944,
      "longitude": 7.576675,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644752779,
      "ems": null
    },
    {
      "latitude": 51.601456,
      "longitude": 7.578117,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "7742",
      "timestamp": 1644752782,
      "ems": null
    },
    {
      "latitude": 51.600502,
      "longitude": 7.581406,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752788,
      "ems": null
    },
    {
      "latitude": 51.60022,
      "longitude": 7.582571,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "squawk": "7742",
      "timestamp": 1644752791,
      "ems": null
    },
    {
      "latitude": 51.599258,
      "longitude": 7.586431,
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
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752797,
      "ems": null
    },
    {
      "latitude": 51.598343,
      "longitude": 7.589549,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752803,
      "ems": null
    },
    {
      "latitude": 51.597427,
      "longitude": 7.592889,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752809,
      "ems": null
    },
    {
      "latitude": 51.597057,
      "longitude": 7.594528,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "7742",
      "timestamp": 1644752812,
      "ems": null
    },
    {
      "latitude": 51.596268,
      "longitude": 7.597809,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "7742",
      "timestamp": 1644752818,
      "ems": null
    },
    {
      "latitude": 51.595242,
      "longitude": 7.601547,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "7742",
      "timestamp": 1644752824,
      "ems": null
    },
    {
      "latitude": 51.594315,
      "longitude": 7.604915,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752830,
      "ems": null
    },
    {
      "latitude": 51.593262,
      "longitude": 7.608626,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7742",
      "timestamp": 1644752836,
      "ems": null
    },
    {
      "latitude": 51.592216,
      "longitude": 7.612076,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752842,
      "ems": null
    },
    {
      "latitude": 51.591751,
      "longitude": 7.613748,
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
      "heading": 115,
      "squawk": "7742",
      "timestamp": 1644752845,
      "ems": null
    },
    {
      "latitude": 51.590744,
      "longitude": 7.617014,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 118,
      "squawk": "7742",
      "timestamp": 1644752852,
      "ems": null
    },
    {
      "latitude": 51.590122,
      "longitude": 7.61879,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "7742",
      "timestamp": 1644752855,
      "ems": null
    },
    {
      "latitude": 51.589554,
      "longitude": 7.62028,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 120,
      "squawk": "7742",
      "timestamp": 1644752857,
      "ems": null
    },
    {
      "latitude": 51.589005,
      "longitude": 7.621613,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644752860,
      "ems": null
    },
    {
      "latitude": 51.588364,
      "longitude": 7.623101,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1644752863,
      "ems": null
    },
    {
      "latitude": 51.587654,
      "longitude": 7.624664,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 123,
      "squawk": "7742",
      "timestamp": 1644752867,
      "ems": null
    },
    {
      "latitude": 51.587093,
      "longitude": 7.625961,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 125,
      "squawk": "7742",
      "timestamp": 1644752869,
      "ems": null
    },
    {
      "latitude": 51.586395,
      "longitude": 7.627411,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 127,
      "squawk": "7742",
      "timestamp": 1644752872,
      "ems": null
    },
    {
      "latitude": 51.5858,
      "longitude": 7.628669,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 129,
      "squawk": "7742",
      "timestamp": 1644752875,
      "ems": null
    },
    {
      "latitude": 51.585114,
      "longitude": 7.62993,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1644752878,
      "ems": null
    },
    {
      "latitude": 51.584427,
      "longitude": 7.631193,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1644752881,
      "ems": null
    },
    {
      "latitude": 51.583744,
      "longitude": 7.632294,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1644752884,
      "ems": null
    },
    {
      "latitude": 51.582916,
      "longitude": 7.633568,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644752887,
      "ems": null
    },
    {
      "latitude": 51.582138,
      "longitude": 7.634682,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 137,
      "squawk": "7742",
      "timestamp": 1644752890,
      "ems": null
    },
    {
      "latitude": 51.581367,
      "longitude": 7.63588,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 136,
      "squawk": "7742",
      "timestamp": 1644752893,
      "ems": null
    },
    {
      "latitude": 51.580578,
      "longitude": 7.637024,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "squawk": "7742",
      "timestamp": 1644752896,
      "ems": null
    },
    {
      "latitude": 51.579758,
      "longitude": 7.63817,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644752899,
      "ems": null
    },
    {
      "latitude": 51.578854,
      "longitude": 7.639313,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1644752903,
      "ems": null
    },
    {
      "latitude": 51.578018,
      "longitude": 7.640381,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1644752906,
      "ems": null
    },
    {
      "latitude": 51.577179,
      "longitude": 7.641144,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644752908,
      "ems": null
    },
    {
      "latitude": 51.576248,
      "longitude": 7.641754,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644752911,
      "ems": null
    },
    {
      "latitude": 51.575272,
      "longitude": 7.642105,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644752914,
      "ems": null
    },
    {
      "latitude": 51.57431,
      "longitude": 7.642476,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644752917,
      "ems": null
    },
    {
      "latitude": 51.573029,
      "longitude": 7.642921,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644752922,
      "ems": null
    },
    {
      "latitude": 51.57193,
      "longitude": 7.643144,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644752926,
      "ems": null
    },
    {
      "latitude": 51.570328,
      "longitude": 7.643441,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644752930,
      "ems": null
    },
    {
      "latitude": 51.569405,
      "longitude": 7.643585,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644752932,
      "ems": null
    },
    {
      "latitude": 51.568451,
      "longitude": 7.643812,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644752935,
      "ems": null
    },
    {
      "latitude": 51.567307,
      "longitude": 7.644035,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644752939,
      "ems": null
    },
    {
      "latitude": 51.566288,
      "longitude": 7.644196,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 174,
      "squawk": "7742",
      "timestamp": 1644752942,
      "ems": null
    },
    {
      "latitude": 51.565201,
      "longitude": 7.644331,
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1644752945,
      "ems": null
    },
    {
      "latitude": 51.564148,
      "longitude": 7.64448,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1644752948,
      "ems": null
    },
    {
      "latitude": 51.563076,
      "longitude": 7.644501,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644752951,
      "ems": null
    },
    {
      "latitude": 51.562141,
      "longitude": 7.644501,
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
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644752953,
      "ems": null
    },
    {
      "latitude": 51.560989,
      "longitude": 7.64448,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1644752957,
      "ems": null
    },
    {
      "latitude": 51.560001,
      "longitude": 7.644424,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644752959,
      "ems": null
    },
    {
      "latitude": 51.558929,
      "longitude": 7.644406,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1644752962,
      "ems": null
    },
    {
      "latitude": 51.557816,
      "longitude": 7.644196,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644752966,
      "ems": null
    },
    {
      "latitude": 51.556931,
      "longitude": 7.643967,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1644752968,
      "ems": null
    },
    {
      "latitude": 51.555725,
      "longitude": 7.643441,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644752972,
      "ems": null
    },
    {
      "latitude": 51.554672,
      "longitude": 7.642847,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644752975,
      "ems": null
    },
    {
      "latitude": 51.553619,
      "longitude": 7.642327,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644752978,
      "ems": null
    },
    {
      "latitude": 51.552521,
      "longitude": 7.641808,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644752981,
      "ems": null
    },
    {
      "latitude": 51.551483,
      "longitude": 7.641373,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1644752983,
      "ems": null
    },
    {
      "latitude": 51.550179,
      "longitude": 7.640991,
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1644752987,
      "ems": null
    },
    {
      "latitude": 51.549107,
      "longitude": 7.640762,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644752989,
      "ems": null
    },
    {
      "latitude": 51.547897,
      "longitude": 7.640457,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644752992,
      "ems": null
    },
    {
      "latitude": 51.54538,
      "longitude": 7.640026,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644752999,
      "ems": null
    },
    {
      "latitude": 51.544189,
      "longitude": 7.639878,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644753002,
      "ems": null
    },
    {
      "latitude": 51.542999,
      "longitude": 7.639655,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644753005,
      "ems": null
    },
    {
      "latitude": 51.541801,
      "longitude": 7.639465,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644753008,
      "ems": null
    },
    {
      "latitude": 51.540684,
      "longitude": 7.63916,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1644753011,
      "ems": null
    },
    {
      "latitude": 51.538403,
      "longitude": 7.638626,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1644753017,
      "ems": null
    },
    {
      "latitude": 51.537239,
      "longitude": 7.63855,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1644753020,
      "ems": null
    },
    {
      "latitude": 51.536121,
      "longitude": 7.63855,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 180,
      "squawk": "7742",
      "timestamp": 1644753023,
      "ems": null
    },
    {
      "latitude": 51.53508,
      "longitude": 7.638542,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1644753025,
      "ems": null
    },
    {
      "latitude": 51.533932,
      "longitude": 7.63855,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1644753029,
      "ems": null
    },
    {
      "latitude": 51.531605,
      "longitude": 7.638397,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644753035,
      "ems": null
    },
    {
      "latitude": 51.530411,
      "longitude": 7.638096,
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
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1644753038,
      "ems": null
    },
    {
      "latitude": 51.529449,
      "longitude": 7.637651,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644753040,
      "ems": null
    },
    {
      "latitude": 51.528214,
      "longitude": 7.636834,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753044,
      "ems": null
    },
    {
      "latitude": 51.527206,
      "longitude": 7.635795,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1644753047,
      "ems": null
    },
    {
      "latitude": 51.526291,
      "longitude": 7.634385,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1644753050,
      "ems": null
    },
    {
      "latitude": 51.525604,
      "longitude": 7.632751,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1644753053,
      "ems": null
    },
    {
      "latitude": 51.524994,
      "longitude": 7.63092,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1644753056,
      "ems": null
    },
    {
      "latitude": 51.524368,
      "longitude": 7.629189,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1644753058,
      "ems": null
    },
    {
      "latitude": 51.523552,
      "longitude": 7.627029,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644753062,
      "ems": null
    },
    {
      "latitude": 51.522903,
      "longitude": 7.62518,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644753065,
      "ems": null
    },
    {
      "latitude": 51.5224,
      "longitude": 7.623769,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644753067,
      "ems": null
    },
    {
      "latitude": 51.521713,
      "longitude": 7.621765,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644753070,
      "ems": null
    },
    {
      "latitude": 51.520992,
      "longitude": 7.619553,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644753074,
      "ems": null
    },
    {
      "latitude": 51.520752,
      "longitude": 7.618944,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644753075,
      "ems": null
    },
    {
      "latitude": 51.519791,
      "longitude": 7.616272,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 239,
      "squawk": "7742",
      "timestamp": 1644753079,
      "ems": null
    },
    {
      "latitude": 51.518829,
      "longitude": 7.6136,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644753084,
      "ems": null
    },
    {
      "latitude": 51.51741,
      "longitude": 7.609591,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1644753090,
      "ems": null
    },
    {
      "latitude": 51.516102,
      "longitude": 7.605743,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1644753097,
      "ems": null
    },
    {
      "latitude": 51.514893,
      "longitude": 7.602316,
      "altitude": {
        "feet": 500,
        "meters": 152
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644753103,
      "ems": null
    },
    {
      "latitude": 51.513962,
      "longitude": 7.599564,
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
        "fpm": 2240,
        "ms": 11.4
      },
      "heading": 242,
      "squawk": "7742",
      "timestamp": 1644753109,
      "ems": null
    },
    {
      "latitude": 51.513611,
      "longitude": 7.598382,
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
        "fpm": 2240,
        "ms": 11.4
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1644753112,
      "ems": null
    },
    {
      "latitude": 51.512924,
      "longitude": 7.59623,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1644753118,
      "ems": null
    },
    {
      "latitude": 51.512657,
      "longitude": 7.595215,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 251,
      "squawk": "7742",
      "timestamp": 1644753121,
      "ems": null
    },
    {
      "latitude": 51.512424,
      "longitude": 7.594223,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 248,
      "squawk": "7742",
      "timestamp": 1644753124,
      "ems": null
    },
    {
      "latitude": 51.511826,
      "longitude": 7.592072,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 243,
      "squawk": "7742",
      "timestamp": 1644753130,
      "ems": null
    },
    {
      "latitude": 51.511539,
      "longitude": 7.591095,
      "altitude": {
        "feet": 1100,
        "meters": 335
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 246,
      "squawk": "7742",
      "timestamp": 1644753133,
      "ems": null
    },
    {
      "latitude": 51.511307,
      "longitude": 7.590103,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 252,
      "squawk": "7742",
      "timestamp": 1644753136,
      "ems": null
    },
    {
      "latitude": 51.511093,
      "longitude": 7.588954,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644753139,
      "ems": null
    },
    {
      "latitude": 51.510563,
      "longitude": 7.586746,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 249,
      "squawk": "7742",
      "timestamp": 1644753145,
      "ems": null
    },
    {
      "latitude": 51.510006,
      "longitude": 7.58461,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644753151,
      "ems": null
    },
    {
      "latitude": 51.509537,
      "longitude": 7.582348,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 250,
      "squawk": "7742",
      "timestamp": 1644753157,
      "ems": null
    },
    {
      "latitude": 51.509262,
      "longitude": 7.581383,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 240,
      "squawk": "7742",
      "timestamp": 1644753160,
      "ems": null
    },
    {
      "latitude": 51.50885,
      "longitude": 7.580492,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1644753163,
      "ems": null
    },
    {
      "latitude": 51.508347,
      "longitude": 7.579601,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1644753166,
      "ems": null
    },
    {
      "latitude": 51.507843,
      "longitude": 7.578785,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644753169,
      "ems": null
    },
    {
      "latitude": 51.507259,
      "longitude": 7.578201,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753172,
      "ems": null
    },
    {
      "latitude": 51.506653,
      "longitude": 7.57782,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644753175,
      "ems": null
    },
    {
      "latitude": 51.506096,
      "longitude": 7.577591,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1644753178,
      "ems": null
    },
    {
      "latitude": 51.505554,
      "longitude": 7.577449,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1644753181,
      "ems": null
    },
    {
      "latitude": 51.504913,
      "longitude": 7.577449,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644753184,
      "ems": null
    },
    {
      "latitude": 51.504326,
      "longitude": 7.577515,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1644753187,
      "ems": null
    },
    {
      "latitude": 51.503494,
      "longitude": 7.577597,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1644753190,
      "ems": null
    },
    {
      "latitude": 51.502762,
      "longitude": 7.577745,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 171,
      "squawk": "7742",
      "timestamp": 1644753193,
      "ems": null
    },
    {
      "latitude": 51.50209,
      "longitude": 7.577972,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644753196,
      "ems": null
    },
    {
      "latitude": 51.501389,
      "longitude": 7.578265,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 166,
      "squawk": "7742",
      "timestamp": 1644753199,
      "ems": null
    },
    {
      "latitude": 51.500648,
      "longitude": 7.578659,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644753202,
      "ems": null
    },
    {
      "latitude": 51.499855,
      "longitude": 7.579269,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 152,
      "squawk": "7742",
      "timestamp": 1644753205,
      "ems": null
    },
    {
      "latitude": 51.499111,
      "longitude": 7.57988,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 111.1,
        "kts": 60,
        "mph": 69
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1644753208,
      "ems": null
    },
    {
      "latitude": 51.498322,
      "longitude": 7.580344,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644753211,
      "ems": null
    },
    {
      "latitude": 51.497543,
      "longitude": 7.580789,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644753214,
      "ems": null
    },
    {
      "latitude": 51.496857,
      "longitude": 7.581234,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644753217,
      "ems": null
    },
    {
      "latitude": 51.496132,
      "longitude": 7.581787,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 157,
      "squawk": "7742",
      "timestamp": 1644753220,
      "ems": null
    },
    {
      "latitude": 51.495483,
      "longitude": 7.5822,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1644753223,
      "ems": null
    },
    {
      "latitude": 51.495026,
      "longitude": 7.582571,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 156,
      "squawk": "7742",
      "timestamp": 1644753225,
      "ems": null
    },
    {
      "latitude": 51.494362,
      "longitude": 7.583008,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644753228,
      "ems": null
    },
    {
      "latitude": 51.492462,
      "longitude": 7.584055,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644753235,
      "ems": null
    },
    {
      "latitude": 51.491711,
      "longitude": 7.584457,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644753238,
      "ems": null
    },
    {
      "latitude": 51.490265,
      "longitude": 7.585392,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644753244,
      "ems": null
    },
    {
      "latitude": 51.489567,
      "longitude": 7.585754,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644753247,
      "ems": null
    },
    {
      "latitude": 51.488846,
      "longitude": 7.58606,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644753250,
      "ems": null
    },
    {
      "latitude": 51.487984,
      "longitude": 7.586288,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644753254,
      "ems": null
    },
    {
      "latitude": 51.487289,
      "longitude": 7.586431,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644753256,
      "ems": null
    },
    {
      "latitude": 51.48645,
      "longitude": 7.586594,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1644753259,
      "ems": null
    },
    {
      "latitude": 51.485687,
      "longitude": 7.586653,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 178,
      "squawk": "7742",
      "timestamp": 1644753262,
      "ems": null
    },
    {
      "latitude": 51.484818,
      "longitude": 7.586728,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 176,
      "squawk": "7742",
      "timestamp": 1644753265,
      "ems": null
    },
    {
      "latitude": 51.483994,
      "longitude": 7.587025,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 165,
      "squawk": "7742",
      "timestamp": 1644753269,
      "ems": null
    },
    {
      "latitude": 51.482346,
      "longitude": 7.588212,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644753275,
      "ems": null
    },
    {
      "latitude": 51.481522,
      "longitude": 7.589029,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644753278,
      "ems": null
    },
    {
      "latitude": 51.48077,
      "longitude": 7.589722,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644753280,
      "ems": null
    },
    {
      "latitude": 51.479782,
      "longitude": 7.590514,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644753284,
      "ems": null
    },
    {
      "latitude": 51.478912,
      "longitude": 7.591256,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644753287,
      "ems": null
    },
    {
      "latitude": 51.478134,
      "longitude": 7.592072,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644753289,
      "ems": null
    },
    {
      "latitude": 51.47723,
      "longitude": 7.592926,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644753293,
      "ems": null
    },
    {
      "latitude": 51.476349,
      "longitude": 7.593765,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644753296,
      "ems": null
    },
    {
      "latitude": 51.475479,
      "longitude": 7.594596,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644753299,
      "ems": null
    },
    {
      "latitude": 51.474625,
      "longitude": 7.595444,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644753302,
      "ems": null
    },
    {
      "latitude": 51.472996,
      "longitude": 7.597046,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644753308,
      "ems": null
    },
    {
      "latitude": 51.471272,
      "longitude": 7.598648,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7742",
      "timestamp": 1644753314,
      "ems": null
    },
    {
      "latitude": 51.469692,
      "longitude": 7.600174,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1644753320,
      "ems": null
    },
    {
      "latitude": 51.468155,
      "longitude": 7.601945,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 144,
      "squawk": "7742",
      "timestamp": 1644753326,
      "ems": null
    },
    {
      "latitude": 51.467503,
      "longitude": 7.602692,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7742",
      "timestamp": 1644753329,
      "ems": null
    },
    {
      "latitude": 51.465965,
      "longitude": 7.604446,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1644753335,
      "ems": null
    },
    {
      "latitude": 51.465267,
      "longitude": 7.605286,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 145,
      "squawk": "7742",
      "timestamp": 1644753338,
      "ems": null
    },
    {
      "latitude": 51.463779,
      "longitude": 7.606735,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644753344,
      "ems": null
    },
    {
      "latitude": 51.462383,
      "longitude": 7.608032,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7742",
      "timestamp": 1644753350,
      "ems": null
    },
    {
      "latitude": 51.460892,
      "longitude": 7.609558,
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
      "heading": 146,
      "squawk": "7742",
      "timestamp": 1644753356,
      "ems": null
    },
    {
      "latitude": 51.46019,
      "longitude": 7.610259,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 147,
      "squawk": "7742",
      "timestamp": 1644753359,
      "ems": null
    },
    {
      "latitude": 51.45945,
      "longitude": 7.610931,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644753362,
      "ems": null
    },
    {
      "latitude": 51.458706,
      "longitude": 7.611465,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1644753365,
      "ems": null
    },
    {
      "latitude": 51.458145,
      "longitude": 7.611923,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644753368,
      "ems": null
    },
    {
      "latitude": 51.456657,
      "longitude": 7.613068,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 153,
      "squawk": "7742",
      "timestamp": 1644753374,
      "ems": null
    },
    {
      "latitude": 51.455933,
      "longitude": 7.613674,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 154,
      "squawk": "7742",
      "timestamp": 1644753377,
      "ems": null
    },
    {
      "latitude": 51.455257,
      "longitude": 7.614136,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1644753380,
      "ems": null
    },
    {
      "latitude": 51.454468,
      "longitude": 7.614713,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 155,
      "squawk": "7742",
      "timestamp": 1644753383,
      "ems": null
    },
    {
      "latitude": 51.45377,
      "longitude": 7.615204,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 158,
      "squawk": "7742",
      "timestamp": 1644753386,
      "ems": null
    },
    {
      "latitude": 51.453026,
      "longitude": 7.615662,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 161,
      "squawk": "7742",
      "timestamp": 1644753389,
      "ems": null
    },
    {
      "latitude": 51.452278,
      "longitude": 7.616043,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "7742",
      "timestamp": 1644753392,
      "ems": null
    },
    {
      "latitude": 51.451584,
      "longitude": 7.61642,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 162,
      "squawk": "7742",
      "timestamp": 1644753395,
      "ems": null
    },
    {
      "latitude": 51.450851,
      "longitude": 7.616717,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 170,
      "squawk": "7742",
      "timestamp": 1644753398,
      "ems": null
    },
    {
      "latitude": 51.450184,
      "longitude": 7.616806,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 175,
      "squawk": "7742",
      "timestamp": 1644753401,
      "ems": null
    },
    {
      "latitude": 51.44957,
      "longitude": 7.616717,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644753404,
      "ems": null
    },
    {
      "latitude": 51.448742,
      "longitude": 7.616425,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1644753407,
      "ems": null
    },
    {
      "latitude": 51.44809,
      "longitude": 7.615967,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753410,
      "ems": null
    },
    {
      "latitude": 51.447578,
      "longitude": 7.61528,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644753413,
      "ems": null
    },
    {
      "latitude": 51.447067,
      "longitude": 7.614441,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 227,
      "squawk": "7742",
      "timestamp": 1644753416,
      "ems": null
    },
    {
      "latitude": 51.446594,
      "longitude": 7.613674,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644753419,
      "ems": null
    },
    {
      "latitude": 51.445995,
      "longitude": 7.612762,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1644753422,
      "ems": null
    },
    {
      "latitude": 51.445438,
      "longitude": 7.612152,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644753425,
      "ems": null
    },
    {
      "latitude": 51.444691,
      "longitude": 7.611618,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753428,
      "ems": null
    },
    {
      "latitude": 51.443993,
      "longitude": 7.61116,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753431,
      "ems": null
    },
    {
      "latitude": 51.443295,
      "longitude": 7.610703,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753434,
      "ems": null
    },
    {
      "latitude": 51.442596,
      "longitude": 7.610168,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644753437,
      "ems": null
    },
    {
      "latitude": 51.44199,
      "longitude": 7.609711,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644753440,
      "ems": null
    },
    {
      "latitude": 51.441341,
      "longitude": 7.609177,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753443,
      "ems": null
    },
    {
      "latitude": 51.440735,
      "longitude": 7.608566,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644753446,
      "ems": null
    },
    {
      "latitude": 51.440048,
      "longitude": 7.607884,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644753449,
      "ems": null
    },
    {
      "latitude": 51.439106,
      "longitude": 7.606735,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1644753455,
      "ems": null
    },
    {
      "latitude": 51.438446,
      "longitude": 7.605805,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1644753458,
      "ems": null
    },
    {
      "latitude": 51.437943,
      "longitude": 7.605063,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644753461,
      "ems": null
    },
    {
      "latitude": 51.437431,
      "longitude": 7.60437,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644753464,
      "ems": null
    },
    {
      "latitude": 51.436871,
      "longitude": 7.603607,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1644753467,
      "ems": null
    },
    {
      "latitude": 51.436478,
      "longitude": 7.602836,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1644753470,
      "ems": null
    },
    {
      "latitude": 51.43594,
      "longitude": 7.601776,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "7742",
      "timestamp": 1644753473,
      "ems": null
    },
    {
      "latitude": 51.435661,
      "longitude": 7.601166,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 236,
      "squawk": "7742",
      "timestamp": 1644753476,
      "ems": null
    },
    {
      "latitude": 51.435242,
      "longitude": 7.60009,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 236,
      "squawk": "7742",
      "timestamp": 1644753479,
      "ems": null
    },
    {
      "latitude": 51.434738,
      "longitude": 7.598976,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 235,
      "squawk": "7742",
      "timestamp": 1644753482,
      "ems": null
    },
    {
      "latitude": 51.434235,
      "longitude": 7.597937,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 232,
      "squawk": "7742",
      "timestamp": 1644753485,
      "ems": null
    },
    {
      "latitude": 51.434006,
      "longitude": 7.597491,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 233,
      "squawk": "7742",
      "timestamp": 1644753488,
      "ems": null
    },
    {
      "latitude": 51.433411,
      "longitude": 7.596007,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 237,
      "squawk": "7742",
      "timestamp": 1644753491,
      "ems": null
    },
    {
      "latitude": 51.433052,
      "longitude": 7.59491,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 244,
      "squawk": "7742",
      "timestamp": 1644753494,
      "ems": null
    },
    {
      "latitude": 51.432728,
      "longitude": 7.593765,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644753497,
      "ems": null
    },
    {
      "latitude": 51.432354,
      "longitude": 7.592697,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 241,
      "squawk": "7742",
      "timestamp": 1644753500,
      "ems": null
    },
    {
      "latitude": 51.43203,
      "longitude": 7.591782,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 238,
      "squawk": "7742",
      "timestamp": 1644753503,
      "ems": null
    },
    {
      "latitude": 51.431351,
      "longitude": 7.589697,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644753509,
      "ems": null
    },
    {
      "latitude": 51.431076,
      "longitude": 7.588658,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 247,
      "squawk": "7742",
      "timestamp": 1644753512,
      "ems": null
    },
    {
      "latitude": 51.430206,
      "longitude": 7.587099,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644753518,
      "ems": null
    },
    {
      "latitude": 51.429749,
      "longitude": 7.58667,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644753521,
      "ems": null
    },
    {
      "latitude": 51.429005,
      "longitude": 7.586136,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753524,
      "ems": null
    },
    {
      "latitude": 51.428329,
      "longitude": 7.585689,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753527,
      "ems": null
    },
    {
      "latitude": 51.427643,
      "longitude": 7.585317,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753530,
      "ems": null
    },
    {
      "latitude": 51.427048,
      "longitude": 7.585021,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753533,
      "ems": null
    },
    {
      "latitude": 51.42635,
      "longitude": 7.584534,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753536,
      "ems": null
    },
    {
      "latitude": 51.425793,
      "longitude": 7.584229,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644753539,
      "ems": null
    },
    {
      "latitude": 51.425034,
      "longitude": 7.583684,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753542,
      "ems": null
    },
    {
      "latitude": 51.424438,
      "longitude": 7.583239,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644753545,
      "ems": null
    },
    {
      "latitude": 51.423138,
      "longitude": 7.582245,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644753551,
      "ems": null
    },
    {
      "latitude": 51.422581,
      "longitude": 7.581711,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644753554,
      "ems": null
    },
    {
      "latitude": 51.421967,
      "longitude": 7.58116,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644753557,
      "ems": null
    },
    {
      "latitude": 51.421371,
      "longitude": 7.580566,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644753560,
      "ems": null
    },
    {
      "latitude": 51.420719,
      "longitude": 7.57988,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644753564,
      "ems": null
    },
    {
      "latitude": 51.420204,
      "longitude": 7.579422,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753566,
      "ems": null
    },
    {
      "latitude": 51.419693,
      "longitude": 7.578888,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644753569,
      "ems": null
    },
    {
      "latitude": 51.418716,
      "longitude": 7.578125,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753575,
      "ems": null
    },
    {
      "latitude": 51.418121,
      "longitude": 7.577523,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644753578,
      "ems": null
    },
    {
      "latitude": 51.417599,
      "longitude": 7.576981,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644753581,
      "ems": null
    },
    {
      "latitude": 51.417068,
      "longitude": 7.576335,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644753584,
      "ems": null
    },
    {
      "latitude": 51.416565,
      "longitude": 7.575741,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644753587,
      "ems": null
    },
    {
      "latitude": 51.415363,
      "longitude": 7.574768,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644753593,
      "ems": null
    },
    {
      "latitude": 51.414871,
      "longitude": 7.57448,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644753596,
      "ems": null
    },
    {
      "latitude": 51.414322,
      "longitude": 7.574108,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753599,
      "ems": null
    },
    {
      "latitude": 51.412949,
      "longitude": 7.573292,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644753605,
      "ems": null
    },
    {
      "latitude": 51.412338,
      "longitude": 7.572784,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644753609,
      "ems": null
    },
    {
      "latitude": 51.412033,
      "longitude": 7.572549,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644753610,
      "ems": null
    },
    {
      "latitude": 51.411221,
      "longitude": 7.571869,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644753615,
      "ems": null
    },
    {
      "latitude": 51.41066,
      "longitude": 7.571362,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644753617,
      "ems": null
    },
    {
      "latitude": 51.409592,
      "longitude": 7.570343,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644753623,
      "ems": null
    },
    {
      "latitude": 51.409012,
      "longitude": 7.569803,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753626,
      "ems": null
    },
    {
      "latitude": 51.408096,
      "longitude": 7.56906,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644753631,
      "ems": null
    },
    {
      "latitude": 51.406612,
      "longitude": 7.567673,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644753639,
      "ems": null
    },
    {
      "latitude": 51.406174,
      "longitude": 7.567204,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644753641,
      "ems": null
    },
    {
      "latitude": 51.405533,
      "longitude": 7.566463,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1644753645,
      "ems": null
    },
    {
      "latitude": 51.405075,
      "longitude": 7.565868,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644753647,
      "ems": null
    },
    {
      "latitude": 51.404564,
      "longitude": 7.565231,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644753650,
      "ems": null
    },
    {
      "latitude": 51.403492,
      "longitude": 7.564087,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644753656,
      "ems": null
    },
    {
      "latitude": 51.402328,
      "longitude": 7.562973,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753663,
      "ems": null
    },
    {
      "latitude": 51.401733,
      "longitude": 7.562676,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753666,
      "ems": null
    },
    {
      "latitude": 51.401306,
      "longitude": 7.562408,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644753668,
      "ems": null
    },
    {
      "latitude": 51.400745,
      "longitude": 7.562027,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753671,
      "ems": null
    },
    {
      "latitude": 51.40004,
      "longitude": 7.561563,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753674,
      "ems": null
    },
    {
      "latitude": 51.399673,
      "longitude": 7.561266,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 83.3,
        "kts": 45,
        "mph": 51.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753676,
      "ems": null
    },
    {
      "latitude": 51.398575,
      "longitude": 7.560079,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644753683,
      "ems": null
    },
    {
      "latitude": 51.397812,
      "longitude": 7.559052,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644753687,
      "ems": null
    },
    {
      "latitude": 51.397247,
      "longitude": 7.558371,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644753690,
      "ems": null
    },
    {
      "latitude": 51.396744,
      "longitude": 7.557602,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1644753693,
      "ems": null
    },
    {
      "latitude": 51.396278,
      "longitude": 7.556992,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1644753695,
      "ems": null
    },
    {
      "latitude": 51.395645,
      "longitude": 7.556144,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644753699,
      "ems": null
    },
    {
      "latitude": 51.395142,
      "longitude": 7.555624,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644753702,
      "ems": null
    },
    {
      "latitude": 51.394592,
      "longitude": 7.555031,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644753705,
      "ems": null
    },
    {
      "latitude": 51.393997,
      "longitude": 7.554398,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644753708,
      "ems": null
    },
    {
      "latitude": 51.392879,
      "longitude": 7.553177,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644753714,
      "ems": null
    },
    {
      "latitude": 51.3918,
      "longitude": 7.551913,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644753720,
      "ems": null
    },
    {
      "latitude": 51.391342,
      "longitude": 7.551498,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644753722,
      "ems": null
    },
    {
      "latitude": 51.390644,
      "longitude": 7.550888,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644753726,
      "ems": null
    },
    {
      "latitude": 51.390041,
      "longitude": 7.55043,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 87,
        "kts": 47,
        "mph": 54.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644753729,
      "ems": null
    },
    {
      "latitude": 51.389435,
      "longitude": 7.550049,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644753731,
      "ems": null
    },
    {
      "latitude": 51.388779,
      "longitude": 7.549612,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644753734,
      "ems": null
    },
    {
      "latitude": 51.388092,
      "longitude": 7.549241,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753737,
      "ems": null
    },
    {
      "latitude": 51.387386,
      "longitude": 7.548828,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644753741,
      "ems": null
    },
    {
      "latitude": 51.386688,
      "longitude": 7.548447,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644753744,
      "ems": null
    },
    {
      "latitude": 51.38599,
      "longitude": 7.547989,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753747,
      "ems": null
    },
    {
      "latitude": 51.3853,
      "longitude": 7.547533,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644753750,
      "ems": null
    },
    {
      "latitude": 51.384266,
      "longitude": 7.546692,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753755,
      "ems": null
    },
    {
      "latitude": 51.382782,
      "longitude": 7.545306,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644753762,
      "ems": null
    },
    {
      "latitude": 51.382141,
      "longitude": 7.544786,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753764,
      "ems": null
    },
    {
      "latitude": 51.381409,
      "longitude": 7.544118,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753768,
      "ems": null
    },
    {
      "latitude": 51.380768,
      "longitude": 7.543525,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753771,
      "ems": null
    },
    {
      "latitude": 51.380169,
      "longitude": 7.54303,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753774,
      "ems": null
    },
    {
      "latitude": 51.379471,
      "longitude": 7.542419,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644753777,
      "ems": null
    },
    {
      "latitude": 51.378891,
      "longitude": 7.541817,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644753779,
      "ems": null
    },
    {
      "latitude": 51.377655,
      "longitude": 7.540665,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753786,
      "ems": null
    },
    {
      "latitude": 51.3764,
      "longitude": 7.539444,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753791,
      "ems": null
    },
    {
      "latitude": 51.375046,
      "longitude": 7.538329,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753798,
      "ems": null
    },
    {
      "latitude": 51.373608,
      "longitude": 7.537384,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644753804,
      "ems": null
    },
    {
      "latitude": 51.373032,
      "longitude": 7.536992,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644753807,
      "ems": null
    },
    {
      "latitude": 51.371796,
      "longitude": 7.535953,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753813,
      "ems": null
    },
    {
      "latitude": 51.370533,
      "longitude": 7.534866,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644753819,
      "ems": null
    },
    {
      "latitude": 51.36937,
      "longitude": 7.533722,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753825,
      "ems": null
    },
    {
      "latitude": 51.368088,
      "longitude": 7.532687,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644753831,
      "ems": null
    },
    {
      "latitude": 51.367462,
      "longitude": 7.532196,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644753834,
      "ems": null
    },
    {
      "latitude": 51.366898,
      "longitude": 7.531722,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644753837,
      "ems": null
    },
    {
      "latitude": 51.365662,
      "longitude": 7.530608,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753843,
      "ems": null
    },
    {
      "latitude": 51.365112,
      "longitude": 7.530237,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753846,
      "ems": null
    },
    {
      "latitude": 51.364517,
      "longitude": 7.529866,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753849,
      "ems": null
    },
    {
      "latitude": 51.363831,
      "longitude": 7.52942,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753852,
      "ems": null
    },
    {
      "latitude": 51.363235,
      "longitude": 7.529049,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644753855,
      "ems": null
    },
    {
      "latitude": 51.362061,
      "longitude": 7.528152,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644753861,
      "ems": null
    },
    {
      "latitude": 51.360992,
      "longitude": 7.527008,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1644753867,
      "ems": null
    },
    {
      "latitude": 51.360535,
      "longitude": 7.526377,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1644753870,
      "ems": null
    },
    {
      "latitude": 51.359985,
      "longitude": 7.525709,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644753873,
      "ems": null
    },
    {
      "latitude": 51.358757,
      "longitude": 7.524872,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644753879,
      "ems": null
    },
    {
      "latitude": 51.358063,
      "longitude": 7.524521,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644753882,
      "ems": null
    },
    {
      "latitude": 51.3568,
      "longitude": 7.523727,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753888,
      "ems": null
    },
    {
      "latitude": 51.35614,
      "longitude": 7.523334,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644753891,
      "ems": null
    },
    {
      "latitude": 51.355408,
      "longitude": 7.522888,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753894,
      "ems": null
    },
    {
      "latitude": 51.354767,
      "longitude": 7.522443,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644753897,
      "ems": null
    },
    {
      "latitude": 51.354034,
      "longitude": 7.521849,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644753900,
      "ems": null
    },
    {
      "latitude": 51.353485,
      "longitude": 7.521478,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644753903,
      "ems": null
    },
    {
      "latitude": 51.352753,
      "longitude": 7.520884,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644753906,
      "ems": null
    },
    {
      "latitude": 51.352192,
      "longitude": 7.52037,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644753909,
      "ems": null
    },
    {
      "latitude": 51.351517,
      "longitude": 7.519474,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644753912,
      "ems": null
    },
    {
      "latitude": 51.35117,
      "longitude": 7.519073,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1644753914,
      "ems": null
    },
    {
      "latitude": 51.350555,
      "longitude": 7.518286,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644753917,
      "ems": null
    },
    {
      "latitude": 51.350052,
      "longitude": 7.517853,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644753920,
      "ems": null
    },
    {
      "latitude": 51.34877,
      "longitude": 7.51695,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753925,
      "ems": null
    },
    {
      "latitude": 51.347958,
      "longitude": 7.516556,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644753929,
      "ems": null
    },
    {
      "latitude": 51.347672,
      "longitude": 7.516356,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644753933,
      "ems": null
    },
    {
      "latitude": 51.346161,
      "longitude": 7.515316,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644753937,
      "ems": null
    },
    {
      "latitude": 51.345108,
      "longitude": 7.514574,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644753941,
      "ems": null
    },
    {
      "latitude": 51.344238,
      "longitude": 7.51398,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644753945,
      "ems": null
    },
    {
      "latitude": 51.343643,
      "longitude": 7.513535,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644753948,
      "ems": null
    },
    {
      "latitude": 51.342865,
      "longitude": 7.512867,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644753951,
      "ems": null
    },
    {
      "latitude": 51.342182,
      "longitude": 7.512207,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7342",
      "timestamp": 1644753954,
      "ems": null
    },
    {
      "latitude": 51.341484,
      "longitude": 7.511673,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 207,
      "squawk": "7342",
      "timestamp": 1644753957,
      "ems": null
    },
    {
      "latitude": 51.340786,
      "longitude": 7.511063,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 206,
      "squawk": "7342",
      "timestamp": 1644753960,
      "ems": null
    },
    {
      "latitude": 51.340183,
      "longitude": 7.510529,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 208,
      "squawk": "7342",
      "timestamp": 1644753963,
      "ems": null
    },
    {
      "latitude": 51.338879,
      "longitude": 7.509384,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 210,
      "squawk": "7342",
      "timestamp": 1644753969,
      "ems": null
    },
    {
      "latitude": 51.338226,
      "longitude": 7.508698,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 214,
      "squawk": "7342",
      "timestamp": 1644753972,
      "ems": null
    },
    {
      "latitude": 51.337902,
      "longitude": 7.508392,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 213,
      "squawk": "7342",
      "timestamp": 1644753974,
      "ems": null
    },
    {
      "latitude": 51.337063,
      "longitude": 7.507553,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 210,
      "squawk": "7342",
      "timestamp": 1644753978,
      "ems": null
    },
    {
      "latitude": 51.335678,
      "longitude": 7.506112,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 214,
      "squawk": "7342",
      "timestamp": 1644753984,
      "ems": null
    },
    {
      "latitude": 51.335083,
      "longitude": 7.505444,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 220,
      "squawk": "7342",
      "timestamp": 1644753987,
      "ems": null
    },
    {
      "latitude": 51.334488,
      "longitude": 7.504627,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 217,
      "squawk": "7342",
      "timestamp": 1644753990,
      "ems": null
    },
    {
      "latitude": 51.333023,
      "longitude": 7.503588,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 198,
      "squawk": "7342",
      "timestamp": 1644753996,
      "ems": null
    },
    {
      "latitude": 51.332291,
      "longitude": 7.503217,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644753999,
      "ems": null
    },
    {
      "latitude": 51.331512,
      "longitude": 7.502846,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 198,
      "squawk": "7742",
      "timestamp": 1644754002,
      "ems": null
    },
    {
      "latitude": 51.33073,
      "longitude": 7.502518,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1644754005,
      "ems": null
    },
    {
      "latitude": 51.330002,
      "longitude": 7.502252,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1644754008,
      "ems": null
    },
    {
      "latitude": 51.329224,
      "longitude": 7.501881,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644754011,
      "ems": null
    },
    {
      "latitude": 51.328545,
      "longitude": 7.50145,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644754014,
      "ems": null
    },
    {
      "latitude": 51.327942,
      "longitude": 7.501064,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644754017,
      "ems": null
    },
    {
      "latitude": 51.327255,
      "longitude": 7.500618,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644754020,
      "ems": null
    },
    {
      "latitude": 51.325935,
      "longitude": 7.499619,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754026,
      "ems": null
    },
    {
      "latitude": 51.325287,
      "longitude": 7.498985,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644754029,
      "ems": null
    },
    {
      "latitude": 51.324692,
      "longitude": 7.498317,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754032,
      "ems": null
    },
    {
      "latitude": 51.324169,
      "longitude": 7.497711,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644754035,
      "ems": null
    },
    {
      "latitude": 51.323456,
      "longitude": 7.496833,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1644754038,
      "ems": null
    },
    {
      "latitude": 51.322906,
      "longitude": 7.496313,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644754041,
      "ems": null
    },
    {
      "latitude": 51.322632,
      "longitude": 7.495956,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754043,
      "ems": null
    },
    {
      "latitude": 51.321716,
      "longitude": 7.494903,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644754046,
      "ems": null
    },
    {
      "latitude": 51.320957,
      "longitude": 7.494049,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754050,
      "ems": null
    },
    {
      "latitude": 51.320526,
      "longitude": 7.493641,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754053,
      "ems": null
    },
    {
      "latitude": 51.319607,
      "longitude": 7.492828,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754056,
      "ems": null
    },
    {
      "latitude": 51.318954,
      "longitude": 7.492294,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644754059,
      "ems": null
    },
    {
      "latitude": 51.318581,
      "longitude": 7.492065,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644754061,
      "ems": null
    },
    {
      "latitude": 51.317696,
      "longitude": 7.491226,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754065,
      "ems": null
    },
    {
      "latitude": 51.317047,
      "longitude": 7.490616,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754068,
      "ems": null
    },
    {
      "latitude": 51.315788,
      "longitude": 7.489319,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754074,
      "ems": null
    },
    {
      "latitude": 51.314484,
      "longitude": 7.487793,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644754080,
      "ems": null
    },
    {
      "latitude": 51.313229,
      "longitude": 7.486725,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754086,
      "ems": null
    },
    {
      "latitude": 51.311966,
      "longitude": 7.485698,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644754092,
      "ems": null
    },
    {
      "latitude": 51.310574,
      "longitude": 7.484512,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754098,
      "ems": null
    },
    {
      "latitude": 51.309952,
      "longitude": 7.483991,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754101,
      "ems": null
    },
    {
      "latitude": 51.309319,
      "longitude": 7.483368,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754104,
      "ems": null
    },
    {
      "latitude": 51.308716,
      "longitude": 7.482728,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754107,
      "ems": null
    },
    {
      "latitude": 51.307503,
      "longitude": 7.481461,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644754113,
      "ems": null
    },
    {
      "latitude": 51.306885,
      "longitude": 7.480724,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1644754116,
      "ems": null
    },
    {
      "latitude": 51.306335,
      "longitude": 7.479982,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644754119,
      "ems": null
    },
    {
      "latitude": 51.305054,
      "longitude": 7.478795,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754125,
      "ems": null
    },
    {
      "latitude": 51.303589,
      "longitude": 7.47731,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644754131,
      "ems": null
    },
    {
      "latitude": 51.302307,
      "longitude": 7.476196,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644754137,
      "ems": null
    },
    {
      "latitude": 51.300705,
      "longitude": 7.474747,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754144,
      "ems": null
    },
    {
      "latitude": 51.300007,
      "longitude": 7.474136,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644754147,
      "ems": null
    },
    {
      "latitude": 51.299355,
      "longitude": 7.473602,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754149,
      "ems": null
    },
    {
      "latitude": 51.298191,
      "longitude": 7.47261,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754156,
      "ems": null
    },
    {
      "latitude": 51.297272,
      "longitude": 7.471891,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754158,
      "ems": null
    },
    {
      "latitude": 51.295677,
      "longitude": 7.470856,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754165,
      "ems": null
    },
    {
      "latitude": 51.294937,
      "longitude": 7.470332,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754167,
      "ems": null
    },
    {
      "latitude": 51.29425,
      "longitude": 7.469812,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754170,
      "ems": null
    },
    {
      "latitude": 51.292793,
      "longitude": 7.468643,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754176,
      "ems": null
    },
    {
      "latitude": 51.291229,
      "longitude": 7.467363,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754182,
      "ems": null
    },
    {
      "latitude": 51.289581,
      "longitude": 7.465973,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754189,
      "ems": null
    },
    {
      "latitude": 51.28894,
      "longitude": 7.465433,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754191,
      "ems": null
    },
    {
      "latitude": 51.288181,
      "longitude": 7.464752,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754194,
      "ems": null
    },
    {
      "latitude": 51.28688,
      "longitude": 7.463608,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754199,
      "ems": null
    },
    {
      "latitude": 51.285828,
      "longitude": 7.462686,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754204,
      "ems": null
    },
    {
      "latitude": 51.283585,
      "longitude": 7.460756,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754212,
      "ems": null
    },
    {
      "latitude": 51.281433,
      "longitude": 7.459123,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 207,
      "squawk": "7342",
      "timestamp": 1644754220,
      "ems": null
    },
    {
      "latitude": 51.279236,
      "longitude": 7.457045,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 209,
      "squawk": "7342",
      "timestamp": 1644754228,
      "ems": null
    },
    {
      "latitude": 51.277897,
      "longitude": 7.455673,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 216,
      "squawk": "7342",
      "timestamp": 1644754234,
      "ems": null
    },
    {
      "latitude": 51.277336,
      "longitude": 7.45491,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7342",
      "timestamp": 1644754237,
      "ems": null
    },
    {
      "latitude": 51.276581,
      "longitude": 7.454001,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 215,
      "squawk": "7342",
      "timestamp": 1644754240,
      "ems": null
    },
    {
      "latitude": 51.275055,
      "longitude": 7.45285,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "7342",
      "timestamp": 1644754246,
      "ems": null
    },
    {
      "latitude": 51.274216,
      "longitude": 7.452316,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "7342",
      "timestamp": 1644754249,
      "ems": null
    },
    {
      "latitude": 51.273426,
      "longitude": 7.451859,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "7342",
      "timestamp": 1644754252,
      "ems": null
    },
    {
      "latitude": 51.272449,
      "longitude": 7.451477,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "7342",
      "timestamp": 1644754255,
      "ems": null
    },
    {
      "latitude": 51.271545,
      "longitude": 7.451254,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 185,
      "squawk": "7342",
      "timestamp": 1644754258,
      "ems": null
    },
    {
      "latitude": 51.270813,
      "longitude": 7.45118,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 185,
      "squawk": "7342",
      "timestamp": 1644754261,
      "ems": null
    },
    {
      "latitude": 51.269714,
      "longitude": 7.451032,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644754264,
      "ems": null
    },
    {
      "latitude": 51.268845,
      "longitude": 7.450883,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644754267,
      "ems": null
    },
    {
      "latitude": 51.268021,
      "longitude": 7.450809,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644754270,
      "ems": null
    },
    {
      "latitude": 51.267235,
      "longitude": 7.450638,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644754273,
      "ems": null
    },
    {
      "latitude": 51.266258,
      "longitude": 7.450485,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644754276,
      "ems": null
    },
    {
      "latitude": 51.265327,
      "longitude": 7.450333,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1644754279,
      "ems": null
    },
    {
      "latitude": 51.264442,
      "longitude": 7.450256,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1644754282,
      "ems": null
    },
    {
      "latitude": 51.263416,
      "longitude": 7.45018,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1644754285,
      "ems": null
    },
    {
      "latitude": 51.261429,
      "longitude": 7.449769,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 188,
      "squawk": "7742",
      "timestamp": 1644754291,
      "ems": null
    },
    {
      "latitude": 51.260532,
      "longitude": 7.449493,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644754294,
      "ems": null
    },
    {
      "latitude": 51.258621,
      "longitude": 7.449188,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 183,
      "squawk": "7742",
      "timestamp": 1644754300,
      "ems": null
    },
    {
      "latitude": 51.25676,
      "longitude": 7.448953,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1644754306,
      "ems": null
    },
    {
      "latitude": 51.255039,
      "longitude": 7.448654,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644754312,
      "ems": null
    },
    {
      "latitude": 51.254154,
      "longitude": 7.448349,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644754315,
      "ems": null
    },
    {
      "latitude": 51.253326,
      "longitude": 7.448137,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644754318,
      "ems": null
    },
    {
      "latitude": 51.25177,
      "longitude": 7.447617,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1644754324,
      "ems": null
    },
    {
      "latitude": 51.250854,
      "longitude": 7.44732,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 193,
      "squawk": "7742",
      "timestamp": 1644754327,
      "ems": null
    },
    {
      "latitude": 51.249966,
      "longitude": 7.446976,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1644754330,
      "ems": null
    },
    {
      "latitude": 51.249126,
      "longitude": 7.446671,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644754333,
      "ems": null
    },
    {
      "latitude": 51.248287,
      "longitude": 7.446365,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "7742",
      "timestamp": 1644754336,
      "ems": null
    },
    {
      "latitude": 51.247559,
      "longitude": 7.446207,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "7742",
      "timestamp": 1644754339,
      "ems": null
    },
    {
      "latitude": 51.246658,
      "longitude": 7.44606,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1644754342,
      "ems": null
    },
    {
      "latitude": 51.245819,
      "longitude": 7.446207,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "7742",
      "timestamp": 1644754345,
      "ems": null
    },
    {
      "latitude": 51.244995,
      "longitude": 7.446504,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 168,
      "squawk": "7742",
      "timestamp": 1644754348,
      "ems": null
    },
    {
      "latitude": 51.24419,
      "longitude": 7.446747,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 169,
      "squawk": "7742",
      "timestamp": 1644754351,
      "ems": null
    },
    {
      "latitude": 51.243305,
      "longitude": 7.446976,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 172,
      "squawk": "7742",
      "timestamp": 1644754354,
      "ems": null
    },
    {
      "latitude": 51.242477,
      "longitude": 7.447023,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 179,
      "squawk": "7742",
      "timestamp": 1644754357,
      "ems": null
    },
    {
      "latitude": 51.241676,
      "longitude": 7.446976,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 181,
      "squawk": "7742",
      "timestamp": 1644754360,
      "ems": null
    },
    {
      "latitude": 51.240932,
      "longitude": 7.446899,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644754363,
      "ems": null
    },
    {
      "latitude": 51.240189,
      "longitude": 7.4468,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644754366,
      "ems": null
    },
    {
      "latitude": 51.238651,
      "longitude": 7.446518,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644754372,
      "ems": null
    },
    {
      "latitude": 51.237946,
      "longitude": 7.446355,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1644754375,
      "ems": null
    },
    {
      "latitude": 51.237164,
      "longitude": 7.44606,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644754378,
      "ems": null
    },
    {
      "latitude": 51.236511,
      "longitude": 7.445602,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644754381,
      "ems": null
    },
    {
      "latitude": 51.235748,
      "longitude": 7.445019,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644754384,
      "ems": null
    },
    {
      "latitude": 51.235062,
      "longitude": 7.444573,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644754387,
      "ems": null
    },
    {
      "latitude": 51.234367,
      "longitude": 7.444153,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644754390,
      "ems": null
    },
    {
      "latitude": 51.233597,
      "longitude": 7.443757,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644754393,
      "ems": null
    },
    {
      "latitude": 51.232834,
      "longitude": 7.443161,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754396,
      "ems": null
    },
    {
      "latitude": 51.232136,
      "longitude": 7.442551,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754399,
      "ems": null
    },
    {
      "latitude": 51.231483,
      "longitude": 7.441864,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644754402,
      "ems": null
    },
    {
      "latitude": 51.230831,
      "longitude": 7.441177,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754405,
      "ems": null
    },
    {
      "latitude": 51.230225,
      "longitude": 7.440414,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1644754408,
      "ems": null
    },
    {
      "latitude": 51.229752,
      "longitude": 7.439748,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1644754411,
      "ems": null
    },
    {
      "latitude": 51.229156,
      "longitude": 7.438858,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1644754414,
      "ems": null
    },
    {
      "latitude": 51.228642,
      "longitude": 7.438126,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1644754417,
      "ems": null
    },
    {
      "latitude": 51.228039,
      "longitude": 7.43721,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1644754420,
      "ems": null
    },
    {
      "latitude": 51.227524,
      "longitude": 7.436371,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644754423,
      "ems": null
    },
    {
      "latitude": 51.227058,
      "longitude": 7.435608,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644754426,
      "ems": null
    },
    {
      "latitude": 51.226456,
      "longitude": 7.434616,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644754429,
      "ems": null
    },
    {
      "latitude": 51.225861,
      "longitude": 7.433661,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 222,
      "squawk": "7742",
      "timestamp": 1644754432,
      "ems": null
    },
    {
      "latitude": 51.225479,
      "longitude": 7.433167,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754435,
      "ems": null
    },
    {
      "latitude": 51.224762,
      "longitude": 7.432696,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 194,
      "squawk": "7742",
      "timestamp": 1644754438,
      "ems": null
    },
    {
      "latitude": 51.223755,
      "longitude": 7.43248,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644754441,
      "ems": null
    },
    {
      "latitude": 51.22287,
      "longitude": 7.432327,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1644754444,
      "ems": null
    },
    {
      "latitude": 51.222015,
      "longitude": 7.432251,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 182,
      "squawk": "7742",
      "timestamp": 1644754447,
      "ems": null
    },
    {
      "latitude": 51.221195,
      "longitude": 7.432175,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 184,
      "squawk": "7742",
      "timestamp": 1644754450,
      "ems": null
    },
    {
      "latitude": 51.220322,
      "longitude": 7.432028,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644754453,
      "ems": null
    },
    {
      "latitude": 51.219612,
      "longitude": 7.43187,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644754456,
      "ems": null
    },
    {
      "latitude": 51.218719,
      "longitude": 7.431731,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 185,
      "squawk": "7742",
      "timestamp": 1644754459,
      "ems": null
    },
    {
      "latitude": 51.217983,
      "longitude": 7.431564,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644754462,
      "ems": null
    },
    {
      "latitude": 51.21719,
      "longitude": 7.431488,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 186,
      "squawk": "7742",
      "timestamp": 1644754465,
      "ems": null
    },
    {
      "latitude": 51.216305,
      "longitude": 7.431259,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1644754468,
      "ems": null
    },
    {
      "latitude": 51.214737,
      "longitude": 7.43084,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 187,
      "squawk": "7742",
      "timestamp": 1644754474,
      "ems": null
    },
    {
      "latitude": 51.213745,
      "longitude": 7.430649,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 189,
      "squawk": "7742",
      "timestamp": 1644754478,
      "ems": null
    },
    {
      "latitude": 51.212906,
      "longitude": 7.430395,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644754480,
      "ems": null
    },
    {
      "latitude": 51.211212,
      "longitude": 7.429801,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 191,
      "squawk": "7742",
      "timestamp": 1644754486,
      "ems": null
    },
    {
      "latitude": 51.210346,
      "longitude": 7.429504,
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644754489,
      "ems": null
    },
    {
      "latitude": 51.209518,
      "longitude": 7.429059,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644754493,
      "ems": null
    },
    {
      "latitude": 51.208557,
      "longitude": 7.428614,
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644754495,
      "ems": null
    },
    {
      "latitude": 51.207825,
      "longitude": 7.428243,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644754498,
      "ems": null
    },
    {
      "latitude": 51.206818,
      "longitude": 7.427723,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644754501,
      "ems": null
    },
    {
      "latitude": 51.205971,
      "longitude": 7.427139,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644754505,
      "ems": null
    },
    {
      "latitude": 51.205124,
      "longitude": 7.42661,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754508,
      "ems": null
    },
    {
      "latitude": 51.2043,
      "longitude": 7.425941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754510,
      "ems": null
    },
    {
      "latitude": 51.203785,
      "longitude": 7.425537,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644754513,
      "ems": null
    },
    {
      "latitude": 51.202713,
      "longitude": 7.424622,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754517,
      "ems": null
    },
    {
      "latitude": 51.201965,
      "longitude": 7.424086,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644754519,
      "ems": null
    },
    {
      "latitude": 51.20034,
      "longitude": 7.423096,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 197,
      "squawk": "7742",
      "timestamp": 1644754526,
      "ems": null
    },
    {
      "latitude": 51.198853,
      "longitude": 7.422378,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 199,
      "squawk": "7342",
      "timestamp": 1644754531,
      "ems": null
    },
    {
      "latitude": 51.197311,
      "longitude": 7.421265,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 208,
      "squawk": "7342",
      "timestamp": 1644754538,
      "ems": null
    },
    {
      "latitude": 51.195778,
      "longitude": 7.419968,
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
      "heading": 206,
      "squawk": "7342",
      "timestamp": 1644754544,
      "ems": null
    },
    {
      "latitude": 51.194241,
      "longitude": 7.418671,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7342",
      "timestamp": 1644754550,
      "ems": null
    },
    {
      "latitude": 51.193542,
      "longitude": 7.418073,
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
      "heading": 209,
      "squawk": "7342",
      "timestamp": 1644754553,
      "ems": null
    },
    {
      "latitude": 51.192764,
      "longitude": 7.41733,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 212,
      "squawk": "7342",
      "timestamp": 1644754555,
      "ems": null
    },
    {
      "latitude": 51.192078,
      "longitude": 7.416588,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 213,
      "squawk": "7342",
      "timestamp": 1644754559,
      "ems": null
    },
    {
      "latitude": 51.191391,
      "longitude": 7.415846,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 212,
      "squawk": "7342",
      "timestamp": 1644754561,
      "ems": null
    },
    {
      "latitude": 51.190704,
      "longitude": 7.415161,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 212,
      "squawk": "7342",
      "timestamp": 1644754564,
      "ems": null
    },
    {
      "latitude": 51.189957,
      "longitude": 7.414322,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 213,
      "squawk": "7342",
      "timestamp": 1644754568,
      "ems": null
    },
    {
      "latitude": 51.189304,
      "longitude": 7.413635,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 214,
      "squawk": "7342",
      "timestamp": 1644754570,
      "ems": null
    },
    {
      "latitude": 51.187775,
      "longitude": 7.41206,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644754577,
      "ems": null
    },
    {
      "latitude": 51.186279,
      "longitude": 7.410583,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644754583,
      "ems": null
    },
    {
      "latitude": 51.18465,
      "longitude": 7.408981,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754589,
      "ems": null
    },
    {
      "latitude": 51.183254,
      "longitude": 7.407532,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644754594,
      "ems": null
    },
    {
      "latitude": 51.181732,
      "longitude": 7.405899,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754600,
      "ems": null
    },
    {
      "latitude": 51.180275,
      "longitude": 7.404251,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754607,
      "ems": null
    },
    {
      "latitude": 51.178574,
      "longitude": 7.402484,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754613,
      "ems": null
    },
    {
      "latitude": 51.177807,
      "longitude": 7.401886,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644754616,
      "ems": null
    },
    {
      "latitude": 51.176922,
      "longitude": 7.401276,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644754618,
      "ems": null
    },
    {
      "latitude": 51.17601,
      "longitude": 7.400628,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754621,
      "ems": null
    },
    {
      "latitude": 51.175156,
      "longitude": 7.399826,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754625,
      "ems": null
    },
    {
      "latitude": 51.174271,
      "longitude": 7.398995,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754628,
      "ems": null
    },
    {
      "latitude": 51.173538,
      "longitude": 7.398401,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754631,
      "ems": null
    },
    {
      "latitude": 51.172592,
      "longitude": 7.397537,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754634,
      "ems": null
    },
    {
      "latitude": 51.171848,
      "longitude": 7.396851,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754637,
      "ems": null
    },
    {
      "latitude": 51.171066,
      "longitude": 7.3961,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754640,
      "ems": null
    },
    {
      "latitude": 51.170265,
      "longitude": 7.395401,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754643,
      "ems": null
    },
    {
      "latitude": 51.168636,
      "longitude": 7.39418,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754649,
      "ems": null
    },
    {
      "latitude": 51.167038,
      "longitude": 7.392908,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754655,
      "ems": null
    },
    {
      "latitude": 51.165424,
      "longitude": 7.391357,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754661,
      "ems": null
    },
    {
      "latitude": 51.163834,
      "longitude": 7.389864,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754667,
      "ems": null
    },
    {
      "latitude": 51.162323,
      "longitude": 7.388306,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754673,
      "ems": null
    },
    {
      "latitude": 51.161469,
      "longitude": 7.387314,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754676,
      "ems": null
    },
    {
      "latitude": 51.160858,
      "longitude": 7.386598,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754679,
      "ems": null
    },
    {
      "latitude": 51.160172,
      "longitude": 7.385856,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644754681,
      "ems": null
    },
    {
      "latitude": 51.158478,
      "longitude": 7.384223,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644754688,
      "ems": null
    },
    {
      "latitude": 51.157093,
      "longitude": 7.382507,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644754694,
      "ems": null
    },
    {
      "latitude": 51.156345,
      "longitude": 7.381592,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644754697,
      "ems": null
    },
    {
      "latitude": 51.154724,
      "longitude": 7.380066,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754703,
      "ems": null
    },
    {
      "latitude": 51.153946,
      "longitude": 7.379472,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754706,
      "ems": null
    },
    {
      "latitude": 51.152527,
      "longitude": 7.377913,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754712,
      "ems": null
    },
    {
      "latitude": 51.151134,
      "longitude": 7.376404,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644754718,
      "ems": null
    },
    {
      "latitude": 51.149643,
      "longitude": 7.374944,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754724,
      "ems": null
    },
    {
      "latitude": 51.148865,
      "longitude": 7.374202,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754727,
      "ems": null
    },
    {
      "latitude": 51.148155,
      "longitude": 7.373657,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754730,
      "ems": null
    },
    {
      "latitude": 51.1474,
      "longitude": 7.373088,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754733,
      "ems": null
    },
    {
      "latitude": 51.14653,
      "longitude": 7.372569,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644754736,
      "ems": null
    },
    {
      "latitude": 51.145798,
      "longitude": 7.372123,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644754739,
      "ems": null
    },
    {
      "latitude": 51.144928,
      "longitude": 7.371678,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644754742,
      "ems": null
    },
    {
      "latitude": 51.144337,
      "longitude": 7.371292,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754744,
      "ems": null
    },
    {
      "latitude": 51.143463,
      "longitude": 7.370564,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644754748,
      "ems": null
    },
    {
      "latitude": 51.142639,
      "longitude": 7.36997,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644754751,
      "ems": null
    },
    {
      "latitude": 51.141907,
      "longitude": 7.369525,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 201,
      "squawk": "7742",
      "timestamp": 1644754754,
      "ems": null
    },
    {
      "latitude": 51.141266,
      "longitude": 7.36908,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644754756,
      "ems": null
    },
    {
      "latitude": 51.139755,
      "longitude": 7.367966,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754763,
      "ems": null
    },
    {
      "latitude": 51.138885,
      "longitude": 7.366853,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1644754766,
      "ems": null
    },
    {
      "latitude": 51.138336,
      "longitude": 7.365813,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "7742",
      "timestamp": 1644754769,
      "ems": null
    },
    {
      "latitude": 51.137695,
      "longitude": 7.364625,
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
      "heading": 229,
      "squawk": "7742",
      "timestamp": 1644754772,
      "ems": null
    },
    {
      "latitude": 51.137054,
      "longitude": 7.363661,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1644754775,
      "ems": null
    },
    {
      "latitude": 51.136471,
      "longitude": 7.362823,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 221,
      "squawk": "7742",
      "timestamp": 1644754778,
      "ems": null
    },
    {
      "latitude": 51.135677,
      "longitude": 7.361755,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644754781,
      "ems": null
    },
    {
      "latitude": 51.134995,
      "longitude": 7.36084,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644754784,
      "ems": null
    },
    {
      "latitude": 51.134327,
      "longitude": 7.359924,
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
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1644754787,
      "ems": null
    },
    {
      "latitude": 51.133583,
      "longitude": 7.358932,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644754790,
      "ems": null
    },
    {
      "latitude": 51.132885,
      "longitude": 7.358017,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644754793,
      "ems": null
    },
    {
      "latitude": 51.132294,
      "longitude": 7.357277,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644754796,
      "ems": null
    },
    {
      "latitude": 51.131424,
      "longitude": 7.356237,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644754799,
      "ems": null
    },
    {
      "latitude": 51.130783,
      "longitude": 7.355347,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644754802,
      "ems": null
    },
    {
      "latitude": 51.129997,
      "longitude": 7.354584,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754805,
      "ems": null
    },
    {
      "latitude": 51.129116,
      "longitude": 7.353821,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754808,
      "ems": null
    },
    {
      "latitude": 51.128265,
      "longitude": 7.353045,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754811,
      "ems": null
    },
    {
      "latitude": 51.127533,
      "longitude": 7.352448,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754814,
      "ems": null
    },
    {
      "latitude": 51.12674,
      "longitude": 7.351761,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754817,
      "ems": null
    },
    {
      "latitude": 51.125931,
      "longitude": 7.350967,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644754820,
      "ems": null
    },
    {
      "latitude": 51.124458,
      "longitude": 7.349243,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644754826,
      "ems": null
    },
    {
      "latitude": 51.123108,
      "longitude": 7.347412,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 219,
      "squawk": "7742",
      "timestamp": 1644754832,
      "ems": null
    },
    {
      "latitude": 51.122318,
      "longitude": 7.346497,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754835,
      "ems": null
    },
    {
      "latitude": 51.120987,
      "longitude": 7.345177,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754841,
      "ems": null
    },
    {
      "latitude": 51.12027,
      "longitude": 7.344437,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754844,
      "ems": null
    },
    {
      "latitude": 51.119526,
      "longitude": 7.343521,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644754847,
      "ems": null
    },
    {
      "latitude": 51.118927,
      "longitude": 7.342802,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644754850,
      "ems": null
    },
    {
      "latitude": 51.117477,
      "longitude": 7.341232,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754856,
      "ems": null
    },
    {
      "latitude": 51.116871,
      "longitude": 7.340546,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754859,
      "ems": null
    },
    {
      "latitude": 51.115383,
      "longitude": 7.33902,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754865,
      "ems": null
    },
    {
      "latitude": 51.113983,
      "longitude": 7.337457,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644754871,
      "ems": null
    },
    {
      "latitude": 51.112637,
      "longitude": 7.335892,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644754877,
      "ems": null
    },
    {
      "latitude": 51.111889,
      "longitude": 7.335205,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754880,
      "ems": null
    },
    {
      "latitude": 51.110355,
      "longitude": 7.333679,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754886,
      "ems": null
    },
    {
      "latitude": 51.109653,
      "longitude": 7.333069,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644754889,
      "ems": null
    },
    {
      "latitude": 51.108166,
      "longitude": 7.331543,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644754895,
      "ems": null
    },
    {
      "latitude": 51.107422,
      "longitude": 7.33078,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754898,
      "ems": null
    },
    {
      "latitude": 51.106674,
      "longitude": 7.330093,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644754901,
      "ems": null
    },
    {
      "latitude": 51.10524,
      "longitude": 7.328475,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754907,
      "ems": null
    },
    {
      "latitude": 51.10379,
      "longitude": 7.326889,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754913,
      "ems": null
    },
    {
      "latitude": 51.102207,
      "longitude": 7.325439,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644754919,
      "ems": null
    },
    {
      "latitude": 51.101368,
      "longitude": 7.324905,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644754922,
      "ems": null
    },
    {
      "latitude": 51.100525,
      "longitude": 7.324318,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644754925,
      "ems": null
    },
    {
      "latitude": 51.098923,
      "longitude": 7.322907,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644754931,
      "ems": null
    },
    {
      "latitude": 51.097366,
      "longitude": 7.321396,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644754937,
      "ems": null
    },
    {
      "latitude": 51.095901,
      "longitude": 7.319789,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644754943,
      "ems": null
    },
    {
      "latitude": 51.095169,
      "longitude": 7.318825,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644754946,
      "ems": null
    },
    {
      "latitude": 51.094387,
      "longitude": 7.317581,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644754950,
      "ems": null
    },
    {
      "latitude": 51.093887,
      "longitude": 7.316746,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 226,
      "squawk": "7742",
      "timestamp": 1644754952,
      "ems": null
    },
    {
      "latitude": 51.093063,
      "longitude": 7.315336,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644754955,
      "ems": null
    },
    {
      "latitude": 51.092384,
      "longitude": 7.314301,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 225,
      "squawk": "7742",
      "timestamp": 1644754958,
      "ems": null
    },
    {
      "latitude": 51.09169,
      "longitude": 7.313183,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 224,
      "squawk": "7742",
      "timestamp": 1644754961,
      "ems": null
    },
    {
      "latitude": 51.09108,
      "longitude": 7.312241,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 223,
      "squawk": "7742",
      "timestamp": 1644754964,
      "ems": null
    },
    {
      "latitude": 51.090271,
      "longitude": 7.311104,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644754967,
      "ems": null
    },
    {
      "latitude": 51.088894,
      "longitude": 7.309341,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1644754973,
      "ems": null
    },
    {
      "latitude": 51.08725,
      "longitude": 7.307467,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644754979,
      "ems": null
    },
    {
      "latitude": 51.086472,
      "longitude": 7.306747,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644754983,
      "ems": null
    },
    {
      "latitude": 51.085636,
      "longitude": 7.306137,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644754985,
      "ems": null
    },
    {
      "latitude": 51.084869,
      "longitude": 7.305686,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "7742",
      "timestamp": 1644754988,
      "ems": null
    },
    {
      "latitude": 51.084236,
      "longitude": 7.305222,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644754992,
      "ems": null
    },
    {
      "latitude": 51.08284,
      "longitude": 7.304306,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644754996,
      "ems": null
    },
    {
      "latitude": 51.081676,
      "longitude": 7.303391,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644755000,
      "ems": null
    },
    {
      "latitude": 51.080608,
      "longitude": 7.302551,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644755004,
      "ems": null
    },
    {
      "latitude": 51.078697,
      "longitude": 7.300949,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644755012,
      "ems": null
    },
    {
      "latitude": 51.076977,
      "longitude": 7.299728,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644755019,
      "ems": null
    },
    {
      "latitude": 51.076557,
      "longitude": 7.2995,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 196,
      "squawk": "7742",
      "timestamp": 1644755022,
      "ems": null
    },
    {
      "latitude": 51.075394,
      "longitude": 7.298965,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 195,
      "squawk": "7742",
      "timestamp": 1644755025,
      "ems": null
    },
    {
      "latitude": 51.074753,
      "longitude": 7.298634,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 199,
      "squawk": "7742",
      "timestamp": 1644755028,
      "ems": null
    },
    {
      "latitude": 51.073204,
      "longitude": 7.297592,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644755033,
      "ems": null
    },
    {
      "latitude": 51.071869,
      "longitude": 7.296555,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644755039,
      "ems": null
    },
    {
      "latitude": 51.071274,
      "longitude": 7.295961,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644755043,
      "ems": null
    },
    {
      "latitude": 51.070599,
      "longitude": 7.295303,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644755046,
      "ems": null
    },
    {
      "latitude": 51.069855,
      "longitude": 7.29454,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644755049,
      "ems": null
    },
    {
      "latitude": 51.069294,
      "longitude": 7.29393,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644755052,
      "ems": null
    },
    {
      "latitude": 51.068737,
      "longitude": 7.29332,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644755054,
      "ems": null
    },
    {
      "latitude": 51.067806,
      "longitude": 7.29248,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644755058,
      "ems": null
    },
    {
      "latitude": 51.0672,
      "longitude": 7.291946,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644755060,
      "ems": null
    },
    {
      "latitude": 51.065781,
      "longitude": 7.29069,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644755067,
      "ems": null
    },
    {
      "latitude": 51.06514,
      "longitude": 7.290171,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644755070,
      "ems": null
    },
    {
      "latitude": 51.064362,
      "longitude": 7.289503,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644755073,
      "ems": null
    },
    {
      "latitude": 51.063675,
      "longitude": 7.288983,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644755076,
      "ems": null
    },
    {
      "latitude": 51.062916,
      "longitude": 7.288437,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644755079,
      "ems": null
    },
    {
      "latitude": 51.062313,
      "longitude": 7.287979,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644755082,
      "ems": null
    },
    {
      "latitude": 51.060776,
      "longitude": 7.286758,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644755088,
      "ems": null
    },
    {
      "latitude": 51.059326,
      "longitude": 7.28542,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644755094,
      "ems": null
    },
    {
      "latitude": 51.057888,
      "longitude": 7.284088,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644755100,
      "ems": null
    },
    {
      "latitude": 51.057236,
      "longitude": 7.283325,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644755103,
      "ems": null
    },
    {
      "latitude": 51.056534,
      "longitude": 7.282525,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 217,
      "squawk": "7742",
      "timestamp": 1644755106,
      "ems": null
    },
    {
      "latitude": 51.055893,
      "longitude": 7.281709,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644755109,
      "ems": null
    },
    {
      "latitude": 51.055191,
      "longitude": 7.281036,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 210,
      "squawk": "7742",
      "timestamp": 1644755112,
      "ems": null
    },
    {
      "latitude": 51.053513,
      "longitude": 7.279408,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644755118,
      "ems": null
    },
    {
      "latitude": 51.052116,
      "longitude": 7.277985,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644755124,
      "ems": null
    },
    {
      "latitude": 51.051453,
      "longitude": 7.277181,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644755127,
      "ems": null
    },
    {
      "latitude": 51.050022,
      "longitude": 7.275467,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644755133,
      "ems": null
    },
    {
      "latitude": 51.048626,
      "longitude": 7.273865,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644755139,
      "ems": null
    },
    {
      "latitude": 51.047508,
      "longitude": 7.272644,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644755145,
      "ems": null
    },
    {
      "latitude": 51.046017,
      "longitude": 7.271118,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644755151,
      "ems": null
    },
    {
      "latitude": 51.045273,
      "longitude": 7.270432,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644755154,
      "ems": null
    },
    {
      "latitude": 51.044586,
      "longitude": 7.269906,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7742",
      "timestamp": 1644755157,
      "ems": null
    },
    {
      "latitude": 51.044109,
      "longitude": 7.269516,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 206,
      "squawk": "7742",
      "timestamp": 1644755159,
      "ems": null
    },
    {
      "latitude": 51.043179,
      "longitude": 7.268829,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644755163,
      "ems": null
    },
    {
      "latitude": 51.042572,
      "longitude": 7.268295,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 208,
      "squawk": "7742",
      "timestamp": 1644755166,
      "ems": null
    },
    {
      "latitude": 51.041199,
      "longitude": 7.266936,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644755172,
      "ems": null
    },
    {
      "latitude": 51.040058,
      "longitude": 7.265625,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644755178,
      "ems": null
    },
    {
      "latitude": 51.039459,
      "longitude": 7.265007,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644755181,
      "ems": null
    },
    {
      "latitude": 51.038773,
      "longitude": 7.26419,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 214,
      "squawk": "7742",
      "timestamp": 1644755184,
      "ems": null
    },
    {
      "latitude": 51.038132,
      "longitude": 7.263522,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 213,
      "squawk": "7742",
      "timestamp": 1644755187,
      "ems": null
    },
    {
      "latitude": 51.037491,
      "longitude": 7.262854,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 212,
      "squawk": "7742",
      "timestamp": 1644755190,
      "ems": null
    },
    {
      "latitude": 51.036896,
      "longitude": 7.262334,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 211,
      "squawk": "7742",
      "timestamp": 1644755193,
      "ems": null
    },
    {
      "latitude": 51.035706,
      "longitude": 7.261072,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 215,
      "squawk": "7742",
      "timestamp": 1644755199,
      "ems": null
    },
    {
      "latitude": 51.034149,
      "longitude": 7.259513,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 209,
      "squawk": "7742",
      "timestamp": 1644755205,
      "ems": null
    },
    {
      "latitude": 51.033543,
      "longitude": 7.259064,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 203,
      "squawk": "7742",
      "timestamp": 1644755208,
      "ems": null
    },
    {
      "latitude": 51.032593,
      "longitude": 7.258474,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644755211,
      "ems": null
    },
    {
      "latitude": 51.031818,
      "longitude": 7.257919,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 202,
      "squawk": "7742",
      "timestamp": 1644755214,
      "ems": null
    },
    {
      "latitude": 51.031075,
      "longitude": 7.257385,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644755217,
      "ems": null
    },
    {
      "latitude": 51.030422,
      "longitude": 7.256851,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 204,
      "squawk": "7742",
      "timestamp": 1644755220,
      "ems": null
    },
    {
      "latitude": 51.029587,
      "longitude": 7.256241,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7742",
      "timestamp": 1644755223,
      "ems": null
    },
    {
      "latitude": 51.028244,
      "longitude": 7.254688,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 220,
      "squawk": "7742",
      "timestamp": 1644755229,
      "ems": null
    },
    {
      "latitude": 51.02774,
      "longitude": 7.25402,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 218,
      "squawk": "7742",
      "timestamp": 1644755231,
      "ems": null
    },
    {
      "latitude": 51.026978,
      "longitude": 7.253113,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 216,
      "squawk": "7742",
      "timestamp": 1644755235,
      "ems": null
    },
    {
      "latitude": 51.026421,
      "longitude": 7.252426,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1644755238,
      "ems": null
    },
    {
      "latitude": 51.025723,
      "longitude": 7.251587,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1644755241,
      "ems": null
    },
    {
      "latitude": 51.025131,
      "longitude": 7.250902,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1644755244,
      "ems": null
    },
    {
      "latitude": 51.023952,
      "longitude": 7.249908,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1644755249,
      "ems": null
    },
    {
      "latitude": 51.022976,
      "longitude": 7.248993,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1644755256,
      "ems": null
    },
    {
      "latitude": 51.022045,
      "longitude": 7.248154,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1644755259,
      "ems": null
    },
    {
      "latitude": 51.021347,
      "longitude": 7.247467,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1644755262,
      "ems": null
    },
    {
      "latitude": 51.020832,
      "longitude": 7.247009,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1644755265,
      "ems": null
    },
    {
      "latitude": 51.020187,
      "longitude": 7.246522,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1644755267,
      "ems": null
    },
    {
      "latitude": 51.019409,
      "longitude": 7.245854,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1644755271,
      "ems": null
    },
    {
      "latitude": 51.018036,
      "longitude": 7.24437,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1644755277,
      "ems": null
    },
    {
      "latitude": 51.017441,
      "longitude": 7.243702,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1644755280,
      "ems": null
    },
    {
      "latitude": 51.016663,
      "longitude": 7.242811,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1644755283,
      "ems": null
    },
    {
      "latitude": 51.015572,
      "longitude": 7.241592,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1644755289,
      "ems": null
    },
    {
      "latitude": 51.014549,
      "longitude": 7.240448,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1644755292,
      "ems": null
    },
    {
      "latitude": 51.013897,
      "longitude": 7.239685,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1644755295,
      "ems": null
    },
    {
      "latitude": 51.013386,
      "longitude": 7.239075,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1644755298,
      "ems": null
    },
    {
      "latitude": 51.011993,
      "longitude": 7.237541,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1644755305,
      "ems": null
    },
    {
      "latitude": 51.010826,
      "longitude": 7.236328,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1644755311,
      "ems": null
    },
    {
      "latitude": 51.010174,
      "longitude": 7.23587,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1644755314,
      "ems": null
    },
    {
      "latitude": 51.00938,
      "longitude": 7.235184,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1644755317,
      "ems": null
    },
    {
      "latitude": 51.008881,
      "longitude": 7.23472,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1644755320,
      "ems": null
    },
    {
      "latitude": 51.008125,
      "longitude": 7.234116,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1644755323,
      "ems": null
    },
    {
      "latitude": 51.007462,
      "longitude": 7.233532,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7044",
      "timestamp": 1644755326,
      "ems": null
    },
    {
      "latitude": 51.006916,
      "longitude": 7.233047,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7044",
      "timestamp": 1644755329,
      "ems": null
    },
    {
      "latitude": 51.005424,
      "longitude": 7.231674,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1644755335,
      "ems": null
    },
    {
      "latitude": 51.00412,
      "longitude": 7.230453,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1644755341,
      "ems": null
    },
    {
      "latitude": 51.003563,
      "longitude": 7.229919,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1644755344,
      "ems": null
    },
    {
      "latitude": 51.002258,
      "longitude": 7.228622,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 212,
      "squawk": "7044",
      "timestamp": 1644755350,
      "ems": null
    },
    {
      "latitude": 51.001514,
      "longitude": 7.227859,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1644755353,
      "ems": null
    },
    {
      "latitude": 51.00087,
      "longitude": 7.227148,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7044",
      "timestamp": 1644755356,
      "ems": null
    },
    {
      "latitude": 51.00032,
      "longitude": 7.226554,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1644755359,
      "ems": null
    },
    {
      "latitude": 50.999039,
      "longitude": 7.225441,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755365,
      "ems": null
    },
    {
      "latitude": 50.998352,
      "longitude": 7.224996,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1644755368,
      "ems": null
    },
    {
      "latitude": 50.997696,
      "longitude": 7.224579,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755371,
      "ems": null
    },
    {
      "latitude": 50.996487,
      "longitude": 7.223358,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1644755377,
      "ems": null
    },
    {
      "latitude": 50.995232,
      "longitude": 7.222061,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 213,
      "squawk": "7044",
      "timestamp": 1644755383,
      "ems": null
    },
    {
      "latitude": 50.993973,
      "longitude": 7.220612,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 215,
      "squawk": "7044",
      "timestamp": 1644755389,
      "ems": null
    },
    {
      "latitude": 50.993271,
      "longitude": 7.219873,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7044",
      "timestamp": 1644755392,
      "ems": null
    },
    {
      "latitude": 50.99263,
      "longitude": 7.219205,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1644755395,
      "ems": null
    },
    {
      "latitude": 50.99197,
      "longitude": 7.218475,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 212,
      "squawk": "7044",
      "timestamp": 1644755398,
      "ems": null
    },
    {
      "latitude": 50.99057,
      "longitude": 7.217275,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755404,
      "ems": null
    },
    {
      "latitude": 50.989288,
      "longitude": 7.216013,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1644755410,
      "ems": null
    },
    {
      "latitude": 50.987968,
      "longitude": 7.214432,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 218,
      "squawk": "7044",
      "timestamp": 1644755416,
      "ems": null
    },
    {
      "latitude": 50.986542,
      "longitude": 7.212821,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1644755422,
      "ems": null
    },
    {
      "latitude": 50.985779,
      "longitude": 7.212067,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1644755425,
      "ems": null
    },
    {
      "latitude": 50.984253,
      "longitude": 7.21052,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 216,
      "squawk": "7044",
      "timestamp": 1644755431,
      "ems": null
    },
    {
      "latitude": 50.98288,
      "longitude": 7.209184,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755437,
      "ems": null
    },
    {
      "latitude": 50.982056,
      "longitude": 7.208633,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1644755440,
      "ems": null
    },
    {
      "latitude": 50.981369,
      "longitude": 7.208219,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1644755443,
      "ems": null
    },
    {
      "latitude": 50.980637,
      "longitude": 7.207848,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644755446,
      "ems": null
    },
    {
      "latitude": 50.979916,
      "longitude": 7.207413,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644755449,
      "ems": null
    },
    {
      "latitude": 50.979218,
      "longitude": 7.206957,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1644755452,
      "ems": null
    },
    {
      "latitude": 50.977936,
      "longitude": 7.206141,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755458,
      "ems": null
    },
    {
      "latitude": 50.977215,
      "longitude": 7.205658,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1644755461,
      "ems": null
    },
    {
      "latitude": 50.976608,
      "longitude": 7.20525,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755464,
      "ems": null
    },
    {
      "latitude": 50.975922,
      "longitude": 7.20473,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755467,
      "ems": null
    },
    {
      "latitude": 50.974606,
      "longitude": 7.203827,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1644755473,
      "ems": null
    },
    {
      "latitude": 50.973175,
      "longitude": 7.203097,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 197,
      "squawk": "7044",
      "timestamp": 1644755479,
      "ems": null
    },
    {
      "latitude": 50.971756,
      "longitude": 7.202281,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1644755485,
      "ems": null
    },
    {
      "latitude": 50.970337,
      "longitude": 7.201464,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644755491,
      "ems": null
    },
    {
      "latitude": 50.968918,
      "longitude": 7.200573,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755497,
      "ems": null
    },
    {
      "latitude": 50.968277,
      "longitude": 7.199905,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1644755500,
      "ems": null
    },
    {
      "latitude": 50.967625,
      "longitude": 7.198944,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 227,
      "squawk": "7044",
      "timestamp": 1644755503,
      "ems": null
    },
    {
      "latitude": 50.967087,
      "longitude": 7.198049,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 227,
      "squawk": "7044",
      "timestamp": 1644755506,
      "ems": null
    },
    {
      "latitude": 50.966492,
      "longitude": 7.197084,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 223,
      "squawk": "7044",
      "timestamp": 1644755509,
      "ems": null
    },
    {
      "latitude": 50.9659,
      "longitude": 7.196198,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 222,
      "squawk": "7044",
      "timestamp": 1644755512,
      "ems": null
    },
    {
      "latitude": 50.965347,
      "longitude": 7.195451,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 222,
      "squawk": "7044",
      "timestamp": 1644755515,
      "ems": null
    },
    {
      "latitude": 50.964691,
      "longitude": 7.194443,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 222,
      "squawk": "7044",
      "timestamp": 1644755518,
      "ems": null
    },
    {
      "latitude": 50.964111,
      "longitude": 7.193595,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 224,
      "squawk": "7044",
      "timestamp": 1644755521,
      "ems": null
    },
    {
      "latitude": 50.963528,
      "longitude": 7.192688,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 226,
      "squawk": "7044",
      "timestamp": 1644755524,
      "ems": null
    },
    {
      "latitude": 50.962967,
      "longitude": 7.191665,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 229,
      "squawk": "7044",
      "timestamp": 1644755527,
      "ems": null
    },
    {
      "latitude": 50.962463,
      "longitude": 7.1907,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 229,
      "squawk": "7044",
      "timestamp": 1644755530,
      "ems": null
    },
    {
      "latitude": 50.961365,
      "longitude": 7.18877,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 224,
      "squawk": "7044",
      "timestamp": 1644755536,
      "ems": null
    },
    {
      "latitude": 50.960083,
      "longitude": 7.18689,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 225,
      "squawk": "7044",
      "timestamp": 1644755542,
      "ems": null
    },
    {
      "latitude": 50.958893,
      "longitude": 7.185133,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 222,
      "squawk": "7044",
      "timestamp": 1644755548,
      "ems": null
    },
    {
      "latitude": 50.958252,
      "longitude": 7.184242,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7044",
      "timestamp": 1644755551,
      "ems": null
    },
    {
      "latitude": 50.957615,
      "longitude": 7.183456,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 215,
      "squawk": "7044",
      "timestamp": 1644755554,
      "ems": null
    },
    {
      "latitude": 50.956825,
      "longitude": 7.182541,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 213,
      "squawk": "7044",
      "timestamp": 1644755557,
      "ems": null
    },
    {
      "latitude": 50.956081,
      "longitude": 7.181778,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 212,
      "squawk": "7044",
      "timestamp": 1644755560,
      "ems": null
    },
    {
      "latitude": 50.955368,
      "longitude": 7.181124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1644755563,
      "ems": null
    },
    {
      "latitude": 50.95459,
      "longitude": 7.180405,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1644755566,
      "ems": null
    },
    {
      "latitude": 50.953846,
      "longitude": 7.179718,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "7044",
      "timestamp": 1644755569,
      "ems": null
    },
    {
      "latitude": 50.953148,
      "longitude": 7.179108,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 205,
      "squawk": "7044",
      "timestamp": 1644755572,
      "ems": null
    },
    {
      "latitude": 50.952301,
      "longitude": 7.178675,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 195,
      "squawk": "7044",
      "timestamp": 1644755575,
      "ems": null
    },
    {
      "latitude": 50.951431,
      "longitude": 7.178526,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 181,
      "squawk": "7044",
      "timestamp": 1644755578,
      "ems": null
    },
    {
      "latitude": 50.950539,
      "longitude": 7.178726,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 165,
      "squawk": "7044",
      "timestamp": 1644755581,
      "ems": null
    },
    {
      "latitude": 50.949692,
      "longitude": 7.17912,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 165,
      "squawk": "7044",
      "timestamp": 1644755584,
      "ems": null
    },
    {
      "latitude": 50.948864,
      "longitude": 7.179337,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 173,
      "squawk": "7044",
      "timestamp": 1644755587,
      "ems": null
    },
    {
      "latitude": 50.947998,
      "longitude": 7.179491,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 173,
      "squawk": "7044",
      "timestamp": 1644755590,
      "ems": null
    },
    {
      "latitude": 50.94714,
      "longitude": 7.179718,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 166,
      "squawk": "7044",
      "timestamp": 1644755593,
      "ems": null
    },
    {
      "latitude": 50.946209,
      "longitude": 7.180252,
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
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1644755596,
      "ems": null
    },
    {
      "latitude": 50.945328,
      "longitude": 7.180786,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1644755599,
      "ems": null
    },
    {
      "latitude": 50.944427,
      "longitude": 7.181347,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1644755602,
      "ems": null
    },
    {
      "latitude": 50.943649,
      "longitude": 7.181718,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 161,
      "squawk": "7044",
      "timestamp": 1644755605,
      "ems": null
    },
    {
      "latitude": 50.942825,
      "longitude": 7.182164,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1644755608,
      "ems": null
    },
    {
      "latitude": 50.942093,
      "longitude": 7.182609,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1644755611,
      "ems": null
    },
    {
      "latitude": 50.941277,
      "longitude": 7.183075,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "7044",
      "timestamp": 1644755614,
      "ems": null
    },
    {
      "latitude": 50.940533,
      "longitude": 7.183533,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 160,
      "squawk": "7044",
      "timestamp": 1644755617,
      "ems": null
    },
    {
      "latitude": 50.939926,
      "longitude": 7.183838,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1644755620,
      "ems": null
    },
    {
      "latitude": 50.938995,
      "longitude": 7.184372,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 159,
      "squawk": "7044",
      "timestamp": 1644755623,
      "ems": null
    },
    {
      "latitude": 50.937515,
      "longitude": 7.185207,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 160,
      "squawk": "7044",
      "timestamp": 1644755630,
      "ems": null
    },
    {
      "latitude": 50.936142,
      "longitude": 7.185949,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 164,
      "squawk": "7044",
      "timestamp": 1644755636,
      "ems": null
    },
    {
      "latitude": 50.935455,
      "longitude": 7.186172,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 167,
      "squawk": "7044",
      "timestamp": 1644755639,
      "ems": null
    },
    {
      "latitude": 50.934677,
      "longitude": 7.186469,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 168,
      "squawk": "7044",
      "timestamp": 1644755641,
      "ems": null
    },
    {
      "latitude": 50.933922,
      "longitude": 7.186737,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 167,
      "squawk": "7044",
      "timestamp": 1644755645,
      "ems": null
    },
    {
      "latitude": 50.932526,
      "longitude": 7.187347,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 163,
      "squawk": "7044",
      "timestamp": 1644755651,
      "ems": null
    },
    {
      "latitude": 50.931175,
      "longitude": 7.188034,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 163,
      "squawk": "7044",
      "timestamp": 1644755656,
      "ems": null
    },
    {
      "latitude": 50.93042,
      "longitude": 7.188325,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 165,
      "squawk": "7044",
      "timestamp": 1644755660,
      "ems": null
    },
    {
      "latitude": 50.929733,
      "longitude": 7.188548,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 166,
      "squawk": "7044",
      "timestamp": 1644755663,
      "ems": null
    },
    {
      "latitude": 50.92836,
      "longitude": 7.189141,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 165,
      "squawk": "7044",
      "timestamp": 1644755669,
      "ems": null
    },
    {
      "latitude": 50.926987,
      "longitude": 7.189438,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 182,
      "squawk": "7044",
      "timestamp": 1644755674,
      "ems": null
    },
    {
      "latitude": 50.926147,
      "longitude": 7.189178,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644755678,
      "ems": null
    },
    {
      "latitude": 50.925495,
      "longitude": 7.188644,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1644755681,
      "ems": null
    },
    {
      "latitude": 50.924934,
      "longitude": 7.188034,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1644755684,
      "ems": null
    },
    {
      "latitude": 50.92424,
      "longitude": 7.187508,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1644755687,
      "ems": null
    },
    {
      "latitude": 50.923599,
      "longitude": 7.187137,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1644755690,
      "ems": null
    },
    {
      "latitude": 50.922886,
      "longitude": 7.186661,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1644755693,
      "ems": null
    },
    {
      "latitude": 50.922283,
      "longitude": 7.186279,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1644755695,
      "ems": null
    },
    {
      "latitude": 50.921585,
      "longitude": 7.185727,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7044",
      "timestamp": 1644755699,
      "ems": null
    },
    {
      "latitude": 50.920898,
      "longitude": 7.185207,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 206,
      "squawk": "7044",
      "timestamp": 1644755702,
      "ems": null
    },
    {
      "latitude": 50.920235,
      "longitude": 7.184753,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 205,
      "squawk": "7044",
      "timestamp": 1644755705,
      "ems": null
    },
    {
      "latitude": 50.919617,
      "longitude": 7.184316,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1644755707,
      "ems": null
    },
    {
      "latitude": 50.918186,
      "longitude": 7.183151,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755714,
      "ems": null
    },
    {
      "latitude": 50.916824,
      "longitude": 7.182089,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755720,
      "ems": null
    },
    {
      "latitude": 50.916138,
      "longitude": 7.181496,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755723,
      "ems": null
    },
    {
      "latitude": 50.914764,
      "longitude": 7.180382,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 206,
      "squawk": "7044",
      "timestamp": 1644755729,
      "ems": null
    },
    {
      "latitude": 50.913158,
      "longitude": 7.179108,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 208,
      "squawk": "7044",
      "timestamp": 1644755736,
      "ems": null
    },
    {
      "latitude": 50.911343,
      "longitude": 7.177582,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755744,
      "ems": null
    },
    {
      "latitude": 50.909821,
      "longitude": 7.176522,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644755750,
      "ems": null
    },
    {
      "latitude": 50.909088,
      "longitude": 7.176076,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1644755753,
      "ems": null
    },
    {
      "latitude": 50.907669,
      "longitude": 7.175037,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1644755759,
      "ems": null
    },
    {
      "latitude": 50.90625,
      "longitude": 7.173924,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755765,
      "ems": null
    },
    {
      "latitude": 50.904778,
      "longitude": 7.172699,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 207,
      "squawk": "7044",
      "timestamp": 1644755771,
      "ems": null
    },
    {
      "latitude": 50.904034,
      "longitude": 7.172089,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 208,
      "squawk": "7044",
      "timestamp": 1644755774,
      "ems": null
    },
    {
      "latitude": 50.902546,
      "longitude": 7.170792,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "7044",
      "timestamp": 1644755780,
      "ems": null
    },
    {
      "latitude": 50.901894,
      "longitude": 7.170181,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1644755783,
      "ems": null
    },
    {
      "latitude": 50.901169,
      "longitude": 7.169544,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1644755786,
      "ems": null
    },
    {
      "latitude": 50.900402,
      "longitude": 7.168808,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 211,
      "squawk": "7044",
      "timestamp": 1644755789,
      "ems": null
    },
    {
      "latitude": 50.899704,
      "longitude": 7.168134,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 212,
      "squawk": "7044",
      "timestamp": 1644755792,
      "ems": null
    },
    {
      "latitude": 50.898308,
      "longitude": 7.166824,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 211,
      "squawk": "7044",
      "timestamp": 1644755798,
      "ems": null
    },
    {
      "latitude": 50.896774,
      "longitude": 7.165239,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 213,
      "squawk": "7044",
      "timestamp": 1644755804,
      "ems": null
    },
    {
      "latitude": 50.895374,
      "longitude": 7.164001,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 211,
      "squawk": "7044",
      "timestamp": 1644755810,
      "ems": null
    },
    {
      "latitude": 50.893799,
      "longitude": 7.16227,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7044",
      "timestamp": 1644755816,
      "ems": null
    },
    {
      "latitude": 50.893234,
      "longitude": 7.161636,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7044",
      "timestamp": 1644755819,
      "ems": null
    },
    {
      "latitude": 50.892582,
      "longitude": 7.160797,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 217,
      "squawk": "7044",
      "timestamp": 1644755822,
      "ems": null
    },
    {
      "latitude": 50.891792,
      "longitude": 7.159882,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 217,
      "squawk": "7044",
      "timestamp": 1644755825,
      "ems": null
    },
    {
      "latitude": 50.891186,
      "longitude": 7.159119,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "7044",
      "timestamp": 1644755828,
      "ems": null
    },
    {
      "latitude": 50.890503,
      "longitude": 7.158186,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 219,
      "squawk": "7044",
      "timestamp": 1644755831,
      "ems": null
    },
    {
      "latitude": 50.889835,
      "longitude": 7.157288,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 221,
      "squawk": "7044",
      "timestamp": 1644755834,
      "ems": null
    },
    {
      "latitude": 50.889324,
      "longitude": 7.156525,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 221,
      "squawk": "7044",
      "timestamp": 1644755837,
      "ems": null
    },
    {
      "latitude": 50.88858,
      "longitude": 7.155589,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 219,
      "squawk": "7044",
      "timestamp": 1644755840,
      "ems": null
    },
    {
      "latitude": 50.887848,
      "longitude": 7.154624,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 221,
      "squawk": "7044",
      "timestamp": 1644755843,
      "ems": null
    },
    {
      "latitude": 50.88723,
      "longitude": 7.153625,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 222,
      "squawk": "7044",
      "timestamp": 1644755846,
      "ems": null
    },
    {
      "latitude": 50.885925,
      "longitude": 7.151947,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 219,
      "squawk": "7044",
      "timestamp": 1644755852,
      "ems": null
    },
    {
      "latitude": 50.88446,
      "longitude": 7.150021,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 220,
      "squawk": "7044",
      "timestamp": 1644755858,
      "ems": null
    },
    {
      "latitude": 50.883087,
      "longitude": 7.148056,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 223,
      "squawk": "7044",
      "timestamp": 1644755864,
      "ems": null
    },
    {
      "latitude": 50.881805,
      "longitude": 7.146161,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 223,
      "squawk": "7044",
      "timestamp": 1644755870,
      "ems": null
    },
    {
      "latitude": 50.880478,
      "longitude": 7.144089,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 224,
      "squawk": "7044",
      "timestamp": 1644755876,
      "ems": null
    },
    {
      "latitude": 50.878941,
      "longitude": 7.1418,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 223,
      "squawk": "7044",
      "timestamp": 1644755882,
      "ems": null
    },
    {
      "latitude": 50.878384,
      "longitude": 7.140884,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 225,
      "squawk": "7044",
      "timestamp": 1644755885,
      "ems": null
    },
    {
      "latitude": 50.87764,
      "longitude": 7.139587,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 228,
      "squawk": "7044",
      "timestamp": 1644755888,
      "ems": null
    },
    {
      "latitude": 50.877045,
      "longitude": 7.138515,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 229,
      "squawk": "7044",
      "timestamp": 1644755891,
      "ems": null
    },
    {
      "latitude": 50.876335,
      "longitude": 7.137146,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 230,
      "squawk": "7044",
      "timestamp": 1644755894,
      "ems": null
    },
    {
      "latitude": 50.875683,
      "longitude": 7.136002,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 231,
      "squawk": "7044",
      "timestamp": 1644755897,
      "ems": null
    },
    {
      "latitude": 50.875126,
      "longitude": 7.134857,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 231,
      "squawk": "7044",
      "timestamp": 1644755900,
      "ems": null
    },
    {
      "latitude": 50.874573,
      "longitude": 7.13369,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 233,
      "squawk": "7044",
      "timestamp": 1644755903,
      "ems": null
    },
    {
      "latitude": 50.873962,
      "longitude": 7.132263,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 232,
      "squawk": "7044",
      "timestamp": 1644755906,
      "ems": null
    },
    {
      "latitude": 50.873337,
      "longitude": 7.131166,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 230,
      "squawk": "7044",
      "timestamp": 1644755909,
      "ems": null
    },
    {
      "latitude": 50.872051,
      "longitude": 7.129059,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 222,
      "squawk": "7044",
      "timestamp": 1644755915,
      "ems": null
    },
    {
      "latitude": 50.871307,
      "longitude": 7.12822,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 211,
      "squawk": "7044",
      "timestamp": 1644755918,
      "ems": null
    },
    {
      "latitude": 50.870468,
      "longitude": 7.127686,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 195,
      "squawk": "7044",
      "timestamp": 1644755921,
      "ems": null
    },
    {
      "latitude": 50.869446,
      "longitude": 7.12738,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 189,
      "squawk": "7044",
      "timestamp": 1644755924,
      "ems": null
    },
    {
      "latitude": 50.868607,
      "longitude": 7.127151,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 190,
      "squawk": "7044",
      "timestamp": 1644755927,
      "ems": null
    },
    {
      "latitude": 50.867615,
      "longitude": 7.126787,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 192,
      "squawk": "7044",
      "timestamp": 1644755930,
      "ems": null
    },
    {
      "latitude": 50.866653,
      "longitude": 7.12649,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 189,
      "squawk": "7044",
      "timestamp": 1644755933,
      "ems": null
    },
    {
      "latitude": 50.86586,
      "longitude": 7.126389,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 185,
      "squawk": "7044",
      "timestamp": 1644755936,
      "ems": null
    },
    {
      "latitude": 50.864792,
      "longitude": 7.12616,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 188,
      "squawk": "7044",
      "timestamp": 1644755939,
      "ems": null
    },
    {
      "latitude": 50.863815,
      "longitude": 7.125822,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 194,
      "squawk": "7044",
      "timestamp": 1644755942,
      "ems": null
    },
    {
      "latitude": 50.862976,
      "longitude": 7.125397,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 196,
      "squawk": "7044",
      "timestamp": 1644755945,
      "ems": null
    },
    {
      "latitude": 50.862091,
      "longitude": 7.125015,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 195,
      "squawk": "7044",
      "timestamp": 1644755948,
      "ems": null
    },
    {
      "latitude": 50.860336,
      "longitude": 7.124263,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 193,
      "squawk": "7044",
      "timestamp": 1644755954,
      "ems": null
    },
    {
      "latitude": 50.858601,
      "longitude": 7.123642,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 194,
      "squawk": "7044",
      "timestamp": 1644755960,
      "ems": null
    },
    {
      "latitude": 50.857716,
      "longitude": 7.12326,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 194,
      "squawk": "7044",
      "timestamp": 1644755963,
      "ems": null
    },
    {
      "latitude": 50.856922,
      "longitude": 7.122879,
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
      "heading": 197,
      "squawk": "7044",
      "timestamp": 1644755966,
      "ems": null
    },
    {
      "latitude": 50.855988,
      "longitude": 7.122333,
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
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755969,
      "ems": null
    },
    {
      "latitude": 50.855164,
      "longitude": 7.121739,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "7044",
      "timestamp": 1644755972,
      "ems": null
    },
    {
      "latitude": 50.854362,
      "longitude": 7.121048,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "7044",
      "timestamp": 1644755975,
      "ems": null
    },
    {
      "latitude": 50.853516,
      "longitude": 7.120402,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "7044",
      "timestamp": 1644755978,
      "ems": null
    },
    {
      "latitude": 50.852737,
      "longitude": 7.119734,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 208,
      "squawk": "7044",
      "timestamp": 1644755981,
      "ems": null
    },
    {
      "latitude": 50.851894,
      "longitude": 7.119064,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 205,
      "squawk": "7044",
      "timestamp": 1644755984,
      "ems": null
    },
    {
      "latitude": 50.851059,
      "longitude": 7.118454,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1644755987,
      "ems": null
    },
    {
      "latitude": 50.85022,
      "longitude": 7.117844,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755990,
      "ems": null
    },
    {
      "latitude": 50.849533,
      "longitude": 7.117359,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755993,
      "ems": null
    },
    {
      "latitude": 50.848526,
      "longitude": 7.116691,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644755996,
      "ems": null
    },
    {
      "latitude": 50.846924,
      "longitude": 7.115503,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1644756002,
      "ems": null
    },
    {
      "latitude": 50.845238,
      "longitude": 7.114029,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 211,
      "squawk": "7044",
      "timestamp": 1644756008,
      "ems": null
    },
    {
      "latitude": 50.844406,
      "longitude": 7.113202,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 215,
      "squawk": "7044",
      "timestamp": 1644756011,
      "ems": null
    },
    {
      "latitude": 50.843704,
      "longitude": 7.11235,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 218,
      "squawk": "7044",
      "timestamp": 1644756014,
      "ems": null
    },
    {
      "latitude": 50.843002,
      "longitude": 7.111435,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 216,
      "squawk": "7044",
      "timestamp": 1644756017,
      "ems": null
    },
    {
      "latitude": 50.842255,
      "longitude": 7.110604,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "7044",
      "timestamp": 1644756020,
      "ems": null
    },
    {
      "latitude": 50.841705,
      "longitude": 7.11001,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 213,
      "squawk": "7044",
      "timestamp": 1644756023,
      "ems": null
    },
    {
      "latitude": 50.840725,
      "longitude": 7.10907,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 209,
      "squawk": "7044",
      "timestamp": 1644756026,
      "ems": null
    },
    {
      "latitude": 50.839142,
      "longitude": 7.108006,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1644756032,
      "ems": null
    },
    {
      "latitude": 50.838348,
      "longitude": 7.107468,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1644756035,
      "ems": null
    },
    {
      "latitude": 50.837494,
      "longitude": 7.106893,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644756038,
      "ems": null
    },
    {
      "latitude": 50.836674,
      "longitude": 7.106323,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1644756041,
      "ems": null
    },
    {
      "latitude": 50.835892,
      "longitude": 7.105853,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1644756044,
      "ems": null
    },
    {
      "latitude": 50.835022,
      "longitude": 7.105259,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1644756047,
      "ems": null
    },
    {
      "latitude": 50.834297,
      "longitude": 7.104721,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 205,
      "squawk": "7044",
      "timestamp": 1644756050,
      "ems": null
    },
    {
      "latitude": 50.833553,
      "longitude": 7.104263,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644756053,
      "ems": null
    },
    {
      "latitude": 50.832779,
      "longitude": 7.1037,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 204,
      "squawk": "7044",
      "timestamp": 1644756056,
      "ems": null
    },
    {
      "latitude": 50.832066,
      "longitude": 7.103119,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 208,
      "squawk": "7044",
      "timestamp": 1644756059,
      "ems": null
    },
    {
      "latitude": 50.83136,
      "longitude": 7.102513,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1644756062,
      "ems": null
    },
    {
      "latitude": 50.830719,
      "longitude": 7.101845,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 215,
      "squawk": "7044",
      "timestamp": 1644756065,
      "ems": null
    },
    {
      "latitude": 50.830032,
      "longitude": 7.101176,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 210,
      "squawk": "7044",
      "timestamp": 1644756068,
      "ems": null
    },
    {
      "latitude": 50.828434,
      "longitude": 7.100067,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644756074,
      "ems": null
    },
    {
      "latitude": 50.826645,
      "longitude": 7.099024,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 202,
      "squawk": "7044",
      "timestamp": 1644756080,
      "ems": null
    },
    {
      "latitude": 50.824768,
      "longitude": 7.097836,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 200,
      "squawk": "7044",
      "timestamp": 1644756086,
      "ems": null
    },
    {
      "latitude": 50.823872,
      "longitude": 7.097321,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1644756089,
      "ems": null
    },
    {
      "latitude": 50.822983,
      "longitude": 7.096871,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 196,
      "squawk": "7044",
      "timestamp": 1644756092,
      "ems": null
    },
    {
      "latitude": 50.822113,
      "longitude": 7.0965,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 196,
      "squawk": "7044",
      "timestamp": 1644756095,
      "ems": null
    },
    {
      "latitude": 50.821125,
      "longitude": 7.096024,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1644756098,
      "ems": null
    },
    {
      "latitude": 50.819504,
      "longitude": 7.094941,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 205,
      "squawk": "7044",
      "timestamp": 1644756104,
      "ems": null
    },
    {
      "latitude": 50.817772,
      "longitude": 7.093735,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644756110,
      "ems": null
    },
    {
      "latitude": 50.816025,
      "longitude": 7.09264,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644756116,
      "ems": null
    },
    {
      "latitude": 50.814423,
      "longitude": 7.091823,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1644756122,
      "ems": null
    },
    {
      "latitude": 50.81279,
      "longitude": 7.090912,
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
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644756128,
      "ems": null
    },
    {
      "latitude": 50.811954,
      "longitude": 7.09053,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1644756131,
      "ems": null
    },
    {
      "latitude": 50.811115,
      "longitude": 7.090073,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644756134,
      "ems": null
    },
    {
      "latitude": 50.810276,
      "longitude": 7.089539,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644756137,
      "ems": null
    },
    {
      "latitude": 50.808647,
      "longitude": 7.088699,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 199,
      "squawk": "7044",
      "timestamp": 1644756143,
      "ems": null
    },
    {
      "latitude": 50.807144,
      "longitude": 7.08774,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 203,
      "squawk": "7044",
      "timestamp": 1644756149,
      "ems": null
    },
    {
      "latitude": 50.805542,
      "longitude": 7.086701,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1644756155,
      "ems": null
    },
    {
      "latitude": 50.804031,
      "longitude": 7.085736,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "7044",
      "timestamp": 1644756161,
      "ems": null
    },
    {
      "latitude": 50.802292,
      "longitude": 7.084771,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 198,
      "squawk": "7044",
      "timestamp": 1644756167,
      "ems": null
    },
    {
      "latitude": 50.800735,
      "longitude": 7.084122,
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
      "heading": 193,
      "squawk": "7044",
      "timestamp": 1644756174,
      "ems": null
    },
    {
      "latitude": 50.799942,
      "longitude": 7.083817,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "7044",
      "timestamp": 1644756177,
      "ems": null
    },
    {
      "latitude": 50.79929,
      "longitude": 7.083664,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 187,
      "squawk": "7044",
      "timestamp": 1644756180,
      "ems": null
    },
    {
      "latitude": 50.7985,
      "longitude": 7.083511,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1644756183,
      "ems": null
    },
    {
      "latitude": 50.796936,
      "longitude": 7.082767,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1644756189,
      "ems": null
    },
    {
      "latitude": 50.795521,
      "longitude": 7.081909,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1644756195,
      "ems": null
    },
    {
      "latitude": 50.794739,
      "longitude": 7.081431,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1644756198,
      "ems": null
    },
    {
      "latitude": 50.793961,
      "longitude": 7.080911,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1644756201,
      "ems": null
    },
    {
      "latitude": 50.793194,
      "longitude": 7.080383,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1644756204,
      "ems": null
    },
    {
      "latitude": 50.792542,
      "longitude": 7.08002,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1644756207,
      "ems": null
    },
    {
      "latitude": 50.791702,
      "longitude": 7.07962,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1644756210,
      "ems": null
    },
    {
      "latitude": 50.790802,
      "longitude": 7.079204,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1644756213,
      "ems": null
    },
    {
      "latitude": 50.789238,
      "longitude": 7.078247,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1644756219,
      "ems": null
    },
    {
      "latitude": 50.787781,
      "longitude": 7.077274,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1644756225,
      "ems": null
    },
    {
      "latitude": 50.786957,
      "longitude": 7.07695,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1644756228,
      "ems": null
    },
    {
      "latitude": 50.786072,
      "longitude": 7.076721,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1644756231,
      "ems": null
    },
    {
      "latitude": 50.785324,
      "longitude": 7.076416,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1644756234,
      "ems": null
    },
    {
      "latitude": 50.783791,
      "longitude": 7.075653,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1644756240,
      "ems": null
    },
    {
      "latitude": 50.782997,
      "longitude": 7.075195,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1644756243,
      "ems": null
    },
    {
      "latitude": 50.781418,
      "longitude": 7.074082,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1644756249,
      "ems": null
    },
    {
      "latitude": 50.779999,
      "longitude": 7.073117,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1644756255,
      "ems": null
    },
    {
      "latitude": 50.779175,
      "longitude": 7.072449,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1644756258,
      "ems": null
    },
    {
      "latitude": 50.778389,
      "longitude": 7.071838,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1644756261,
      "ems": null
    },
    {
      "latitude": 50.777756,
      "longitude": 7.071335,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1644756264,
      "ems": null
    },
    {
      "latitude": 50.776993,
      "longitude": 7.07077,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1644756267,
      "ems": null
    },
    {
      "latitude": 50.775467,
      "longitude": 7.069628,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1644756273,
      "ems": null
    },
    {
      "latitude": 50.773865,
      "longitude": 7.068366,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1644756279,
      "ems": null
    },
    {
      "latitude": 50.77243,
      "longitude": 7.067337,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1644756285,
      "ems": null
    },
    {
      "latitude": 50.770844,
      "longitude": 7.06599,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1644756291,
      "ems": null
    },
    {
      "latitude": 50.76947,
      "longitude": 7.064803,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1644756297,
      "ems": null
    },
    {
      "latitude": 50.767963,
      "longitude": 7.063599,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1644756303,
      "ems": null
    },
    {
      "latitude": 50.766541,
      "longitude": 7.062576,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1644756309,
      "ems": null
    },
    {
      "latitude": 50.76503,
      "longitude": 7.061462,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1644756315,
      "ems": null
    },
    {
      "latitude": 50.764252,
      "longitude": 7.061017,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1644756318,
      "ems": null
    },
    {
      "latitude": 50.763382,
      "longitude": 7.060869,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1644756321,
      "ems": null
    },
    {
      "latitude": 50.762604,
      "longitude": 7.061091,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1644756324,
      "ems": null
    },
    {
      "latitude": 50.76178,
      "longitude": 7.061611,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1644756327,
      "ems": null
    },
    {
      "latitude": 50.760979,
      "longitude": 7.062149,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1644756330,
      "ems": null
    },
    {
      "latitude": 50.760315,
      "longitude": 7.062576,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1644756333,
      "ems": null
    },
    {
      "latitude": 50.759491,
      "longitude": 7.063096,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1644756336,
      "ems": null
    },
    {
      "latitude": 50.758667,
      "longitude": 7.063615,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1644756339,
      "ems": null
    },
    {
      "latitude": 50.757908,
      "longitude": 7.064133,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1644756341,
      "ems": null
    },
    {
      "latitude": 50.757065,
      "longitude": 7.064654,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1644756345,
      "ems": null
    },
    {
      "latitude": 50.756279,
      "longitude": 7.065201,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1644756348,
      "ems": null
    },
    {
      "latitude": 50.755508,
      "longitude": 7.065694,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1644756351,
      "ems": null
    },
    {
      "latitude": 50.754639,
      "longitude": 7.066436,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1644756354,
      "ems": null
    },
    {
      "latitude": 50.752991,
      "longitude": 7.067698,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1644756360,
      "ems": null
    },
    {
      "latitude": 50.75148,
      "longitude": 7.068737,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1644756366,
      "ems": null
    },
    {
      "latitude": 50.749947,
      "longitude": 7.069778,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1644756372,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 7.070667,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1644756378,
      "ems": null
    },
    {
      "latitude": 50.747543,
      "longitude": 7.071113,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1644756381,
      "ems": null
    },
    {
      "latitude": 50.746735,
      "longitude": 7.071381,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1644756384,
      "ems": null
    },
    {
      "latitude": 50.746078,
      "longitude": 7.071706,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1644756387,
      "ems": null
    },
    {
      "latitude": 50.745152,
      "longitude": 7.072067,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1644756390,
      "ems": null
    },
    {
      "latitude": 50.744408,
      "longitude": 7.072449,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1644756393,
      "ems": null
    },
    {
      "latitude": 50.742916,
      "longitude": 7.073288,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1644756399,
      "ems": null
    },
    {
      "latitude": 50.741135,
      "longitude": 7.074602,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1644756405,
      "ems": null
    },
    {
      "latitude": 50.740219,
      "longitude": 7.075492,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1644756408,
      "ems": null
    },
    {
      "latitude": 50.739578,
      "longitude": 7.076012,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1644756411,
      "ems": null
    },
    {
      "latitude": 50.738632,
      "longitude": 7.076797,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1644756414,
      "ems": null
    },
    {
      "latitude": 50.737888,
      "longitude": 7.077332,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1644756417,
      "ems": null
    },
    {
      "latitude": 50.737152,
      "longitude": 7.077794,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1644756420,
      "ems": null
    },
    {
      "latitude": 50.736694,
      "longitude": 7.07809,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1644756423,
      "ems": null
    },
    {
      "latitude": 50.734818,
      "longitude": 7.079315,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1644756429,
      "ems": null
    },
    {
      "latitude": 50.73317,
      "longitude": 7.080466,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1644756435,
      "ems": null
    },
    {
      "latitude": 50.732437,
      "longitude": 7.080837,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1644756438,
      "ems": null
    },
    {
      "latitude": 50.73151,
      "longitude": 7.081451,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1644756441,
      "ems": null
    },
    {
      "latitude": 50.730011,
      "longitude": 7.082693,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1644756447,
      "ems": null
    },
    {
      "latitude": 50.729324,
      "longitude": 7.083282,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1644756450,
      "ems": null
    },
    {
      "latitude": 50.72858,
      "longitude": 7.083969,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1644756453,
      "ems": null
    },
    {
      "latitude": 50.727859,
      "longitude": 7.084697,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1644756456,
      "ems": null
    },
    {
      "latitude": 50.727219,
      "longitude": 7.085291,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1644756459,
      "ems": null
    },
    {
      "latitude": 50.725739,
      "longitude": 7.086487,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1644756465,
      "ems": null
    },
    {
      "latitude": 50.724472,
      "longitude": 7.087072,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1644756470,
      "ems": null
    },
    {
      "latitude": 50.723553,
      "longitude": 7.087631,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1644756474,
      "ems": null
    },
    {
      "latitude": 50.722855,
      "longitude": 7.088089,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1644756477,
      "ems": null
    },
    {
      "latitude": 50.722153,
      "longitude": 7.088623,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1644756480,
      "ems": null
    },
    {
      "latitude": 50.721455,
      "longitude": 7.089157,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1644756483,
      "ems": null
    },
    {
      "latitude": 50.720806,
      "longitude": 7.089615,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1644756486,
      "ems": null
    },
    {
      "latitude": 50.720108,
      "longitude": 7.090073,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1644756489,
      "ems": null
    },
    {
      "latitude": 50.718708,
      "longitude": 7.090988,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1644756495,
      "ems": null
    },
    {
      "latitude": 50.71801,
      "longitude": 7.091827,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1644756498,
      "ems": null
    },
    {
      "latitude": 50.717422,
      "longitude": 7.092714,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1644756501,
      "ems": null
    },
    {
      "latitude": 50.716755,
      "longitude": 7.093811,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1644756504,
      "ems": null
    },
    {
      "latitude": 50.716148,
      "longitude": 7.094803,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1644756507,
      "ems": null
    },
    {
      "latitude": 50.715546,
      "longitude": 7.095642,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1644756510,
      "ems": null
    },
    {
      "latitude": 50.714752,
      "longitude": 7.096558,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1644756513,
      "ems": null
    },
    {
      "latitude": 50.7141,
      "longitude": 7.097092,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1644756516,
      "ems": null
    },
    {
      "latitude": 50.713348,
      "longitude": 7.097762,
      "altitude": {
        "feet": 2000,
        "meters": 610
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1644756519,
      "ems": null
    },
    {
      "latitude": 50.712566,
      "longitude": 7.098389,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1644756522,
      "ems": null
    },
    {
      "latitude": 50.711914,
      "longitude": 7.098999,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1644756525,
      "ems": null
    },
    {
      "latitude": 50.711151,
      "longitude": 7.099544,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1644756528,
      "ems": null
    },
    {
      "latitude": 50.710518,
      "longitude": 7.099991,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1644756531,
      "ems": null
    },
    {
      "latitude": 50.709679,
      "longitude": 7.100296,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1644756534,
      "ems": null
    },
    {
      "latitude": 50.708908,
      "longitude": 7.100286,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1644756537,
      "ems": null
    },
    {
      "latitude": 50.707947,
      "longitude": 7.100137,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1644756540,
      "ems": null
    },
    {
      "latitude": 50.707165,
      "longitude": 7.099762,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1644756543,
      "ems": null
    },
    {
      "latitude": 50.70639,
      "longitude": 7.099172,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1644756546,
      "ems": null
    },
    {
      "latitude": 50.705673,
      "longitude": 7.098618,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1644756549,
      "ems": null
    },
    {
      "latitude": 50.70507,
      "longitude": 7.097778,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1644756552,
      "ems": null
    },
    {
      "latitude": 50.70451,
      "longitude": 7.096558,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1644756555,
      "ems": null
    },
    {
      "latitude": 50.704285,
      "longitude": 7.095238,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1644756558,
      "ems": null
    },
    {
      "latitude": 50.70433,
      "longitude": 7.093828,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1644756561,
      "ems": null
    },
    {
      "latitude": 50.704651,
      "longitude": 7.091823,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1644756564,
      "ems": null
    },
    {
      "latitude": 50.705116,
      "longitude": 7.090302,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1644756567,
      "ems": null
    },
    {
      "latitude": 50.705582,
      "longitude": 7.088699,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1644756570,
      "ems": null
    },
    {
      "latitude": 50.706161,
      "longitude": 7.087072,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1644756573,
      "ems": null
    },
    {
      "latitude": 50.706848,
      "longitude": 7.085514,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1644756576,
      "ems": null
    },
    {
      "latitude": 50.707539,
      "longitude": 7.084122,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1644756579,
      "ems": null
    },
    {
      "latitude": 50.708588,
      "longitude": 7.082544,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1644756582,
      "ems": null
    },
    {
      "latitude": 50.709679,
      "longitude": 7.081223,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1644756585,
      "ems": null
    },
    {
      "latitude": 50.710785,
      "longitude": 7.080095,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1644756588,
      "ems": null
    },
    {
      "latitude": 50.711975,
      "longitude": 7.079278,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644756591,
      "ems": null
    },
    {
      "latitude": 50.713348,
      "longitude": 7.07861,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644756594,
      "ems": null
    },
    {
      "latitude": 50.714905,
      "longitude": 7.078239,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1644756597,
      "ems": null
    },
    {
      "latitude": 50.716381,
      "longitude": 7.078171,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1644756600,
      "ems": null
    },
    {
      "latitude": 50.717777,
      "longitude": 7.078323,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1644756603,
      "ems": null
    },
    {
      "latitude": 50.718941,
      "longitude": 7.078552,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1644756606,
      "ems": null
    },
    {
      "latitude": 50.720573,
      "longitude": 7.078934,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1644756609,
      "ems": null
    },
    {
      "latitude": 50.722015,
      "longitude": 7.079468,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1644756612,
      "ems": null
    },
    {
      "latitude": 50.723412,
      "longitude": 7.080078,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1644756615,
      "ems": null
    },
    {
      "latitude": 50.724667,
      "longitude": 7.080841,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1644756618,
      "ems": null
    },
    {
      "latitude": 50.725845,
      "longitude": 7.08195,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1644756621,
      "ems": null
    },
    {
      "latitude": 50.726898,
      "longitude": 7.083509,
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1644756624,
      "ems": null
    },
    {
      "latitude": 50.727631,
      "longitude": 7.085217,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1644756627,
      "ems": null
    },
    {
      "latitude": 50.72802,
      "longitude": 7.086945,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1644756630,
      "ems": null
    },
    {
      "latitude": 50.728115,
      "longitude": 7.088623,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1644756633,
      "ems": null
    },
    {
      "latitude": 50.727974,
      "longitude": 7.090378,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1644756636,
      "ems": null
    },
    {
      "latitude": 50.727814,
      "longitude": 7.091823,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1644756639,
      "ems": null
    },
    {
      "latitude": 50.727539,
      "longitude": 7.093308,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1644756642,
      "ems": null
    },
    {
      "latitude": 50.72731,
      "longitude": 7.094792,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1644756645,
      "ems": null
    },
    {
      "latitude": 50.727081,
      "longitude": 7.096352,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1644756648,
      "ems": null
    },
    {
      "latitude": 50.727081,
      "longitude": 7.098133,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1644756651,
      "ems": null
    },
    {
      "latitude": 50.727173,
      "longitude": 7.099692,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1644756654,
      "ems": null
    },
    {
      "latitude": 50.727402,
      "longitude": 7.101696,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1644756657,
      "ems": null
    },
    {
      "latitude": 50.727539,
      "longitude": 7.103477,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1644756660,
      "ems": null
    },
    {
      "latitude": 50.727554,
      "longitude": 7.106705,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1644756666,
      "ems": null
    },
    {
      "latitude": 50.727695,
      "longitude": 7.108383,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1644756669,
      "ems": null
    },
    {
      "latitude": 50.728065,
      "longitude": 7.110214,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1644756672,
      "ems": null
    },
    {
      "latitude": 50.728546,
      "longitude": 7.111717,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1644756675,
      "ems": null
    },
    {
      "latitude": 50.729095,
      "longitude": 7.113054,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1644756678,
      "ems": null
    },
    {
      "latitude": 50.729691,
      "longitude": 7.114538,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1644756681,
      "ems": null
    },
    {
      "latitude": 50.730488,
      "longitude": 7.116241,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1644756684,
      "ems": null
    },
    {
      "latitude": 50.73114,
      "longitude": 7.117615,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1644756687,
      "ems": null
    },
    {
      "latitude": 50.731796,
      "longitude": 7.119066,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1644756690,
      "ems": null
    },
    {
      "latitude": 50.732258,
      "longitude": 7.120056,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1644756693,
      "ems": null
    },
    {
      "latitude": 50.732723,
      "longitude": 7.121124,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1644756696,
      "ems": null
    },
    {
      "latitude": 50.733559,
      "longitude": 7.123032,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1644756699,
      "ems": null
    },
    {
      "latitude": 50.734131,
      "longitude": 7.124337,
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
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1644756702,
      "ems": null
    },
    {
      "latitude": 50.735374,
      "longitude": 7.126999,
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1644756708,
      "ems": null
    },
    {
      "latitude": 50.736725,
      "longitude": 7.129745,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1644756714,
      "ems": null
    },
    {
      "latitude": 50.738022,
      "longitude": 7.132428,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1644756720,
      "ems": null
    },
    {
      "latitude": 50.739304,
      "longitude": 7.135026,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1644756726,
      "ems": null
    },
    {
      "latitude": 50.740128,
      "longitude": 7.136585,
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1644756730,
      "ems": null
    },
    {
      "latitude": 50.740822,
      "longitude": 7.13768,
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1644756733,
      "ems": null
    },
    {
      "latitude": 50.741661,
      "longitude": 7.138824,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1644756736,
      "ems": null
    },
    {
      "latitude": 50.742405,
      "longitude": 7.139511,
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1644756739,
      "ems": null
    },
    {
      "latitude": 50.743744,
      "longitude": 7.140223,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1644756742,
      "ems": null
    },
    {
      "latitude": 50.744499,
      "longitude": 7.140274,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1644756745,
      "ems": null
    },
    {
      "latitude": 50.745571,
      "longitude": 7.140274,
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1644756747,
      "ems": null
    },
    {
      "latitude": 50.74678,
      "longitude": 7.140198,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1644756751,
      "ems": null
    },
    {
      "latitude": 50.747864,
      "longitude": 7.140223,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1644756754,
      "ems": null
    },
    {
      "latitude": 50.748917,
      "longitude": 7.140223,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1644756757,
      "ems": null
    },
    {
      "latitude": 50.749805,
      "longitude": 7.140121,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1644756759,
      "ems": null
    },
    {
      "latitude": 50.75111,
      "longitude": 7.139816,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1644756763,
      "ems": null
    },
    {
      "latitude": 50.752075,
      "longitude": 7.139332,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644756766,
      "ems": null
    },
    {
      "latitude": 50.752945,
      "longitude": 7.138738,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1644756769,
      "ems": null
    },
    {
      "latitude": 50.753948,
      "longitude": 7.138062,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1644756772,
      "ems": null
    },
    {
      "latitude": 50.754879,
      "longitude": 7.137451,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644756774,
      "ems": null
    },
    {
      "latitude": 50.75592,
      "longitude": 7.136808,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1644756778,
      "ems": null
    },
    {
      "latitude": 50.756836,
      "longitude": 7.136078,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1644756781,
      "ems": null
    },
    {
      "latitude": 50.757767,
      "longitude": 7.135391,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1644756784,
      "ems": null
    },
    {
      "latitude": 50.75853,
      "longitude": 7.134804,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1644756787,
      "ems": null
    },
    {
      "latitude": 50.759766,
      "longitude": 7.133987,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644756790,
      "ems": null
    },
    {
      "latitude": 50.761677,
      "longitude": 7.133102,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1644756796,
      "ems": null
    },
    {
      "latitude": 50.762653,
      "longitude": 7.132721,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1644756799,
      "ems": null
    },
    {
      "latitude": 50.763657,
      "longitude": 7.132428,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1644756802,
      "ems": null
    },
    {
      "latitude": 50.764481,
      "longitude": 7.132205,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1644756805,
      "ems": null
    },
    {
      "latitude": 50.765167,
      "longitude": 7.132057,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1644756806,
      "ems": null
    },
    {
      "latitude": 50.766678,
      "longitude": 7.132131,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1644756810,
      "ems": null
    },
    {
      "latitude": 50.767685,
      "longitude": 7.13228,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1644756813,
      "ems": null
    },
    {
      "latitude": 50.768738,
      "longitude": 7.132725,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1644756817,
      "ems": null
    },
    {
      "latitude": 50.769699,
      "longitude": 7.133171,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1644756820,
      "ems": null
    },
    {
      "latitude": 50.770569,
      "longitude": 7.133636,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1644756823,
      "ems": null
    },
    {
      "latitude": 50.771545,
      "longitude": 7.134399,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1644756826,
      "ems": null
    },
    {
      "latitude": 50.772263,
      "longitude": 7.135249,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1644756829,
      "ems": null
    },
    {
      "latitude": 50.77285,
      "longitude": 7.136383,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1644756831,
      "ems": null
    },
    {
      "latitude": 50.773315,
      "longitude": 7.137699,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1644756835,
      "ems": null
    },
    {
      "latitude": 50.773548,
      "longitude": 7.13913,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1644756838,
      "ems": null
    },
    {
      "latitude": 50.77364,
      "longitude": 7.140427,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1644756840,
      "ems": null
    },
    {
      "latitude": 50.77359,
      "longitude": 7.141781,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1644756844,
      "ems": null
    },
    {
      "latitude": 50.773315,
      "longitude": 7.143097,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1644756847,
      "ems": null
    },
    {
      "latitude": 50.773083,
      "longitude": 7.144165,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1644756849,
      "ems": null
    },
    {
      "latitude": 50.77285,
      "longitude": 7.145157,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1644756852,
      "ems": null
    },
    {
      "latitude": 50.772537,
      "longitude": 7.146532,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1644756855,
      "ems": null
    },
    {
      "latitude": 50.772308,
      "longitude": 7.14772,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1644756859,
      "ems": null
    },
    {
      "latitude": 50.771988,
      "longitude": 7.148982,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1644756861,
      "ems": null
    },
    {
      "latitude": 50.771873,
      "longitude": 7.149429,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1644756863,
      "ems": null
    },
    {
      "latitude": 50.771454,
      "longitude": 7.151413,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1644756868,
      "ems": null
    },
    {
      "latitude": 50.77108,
      "longitude": 7.153244,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1644756872,
      "ems": null
    },
    {
      "latitude": 50.770386,
      "longitude": 7.156479,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1644756881,
      "ems": null
    },
    {
      "latitude": 50.767963,
      "longitude": 7.167435,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1644756912,
      "ems": null
    },
    {
      "latitude": 50.767181,
      "longitude": 7.170732,
      "altitude": {
        "feet": 300,
        "meters": 91
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1644756919,
      "ems": null
    },
    {
      "latitude": 50.766567,
      "longitude": 7.173233,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1644756925,
      "ems": null
    },
    {
      "latitude": 50.765442,
      "longitude": 7.177487,
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
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1644756934,
      "ems": null
    },
    {
      "latitude": 50.765076,
      "longitude": 7.17865,
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
        "fpm": 1920,
        "ms": 9.8
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1644756937,
      "ems": null
    },
    {
      "latitude": 50.764751,
      "longitude": 7.179718,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1644756940,
      "ems": null
    },
    {
      "latitude": 50.764332,
      "longitude": 7.180862,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1644756943,
      "ems": null
    },
    {
      "latitude": 50.763958,
      "longitude": 7.181778,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1644756946,
      "ems": null
    },
    {
      "latitude": 50.763519,
      "longitude": 7.182906,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1644756949,
      "ems": null
    },
    {
      "latitude": 50.763062,
      "longitude": 7.184093,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1644756952,
      "ems": null
    },
    {
      "latitude": 50.762516,
      "longitude": 7.185211,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1644756955,
      "ems": null
    },
    {
      "latitude": 50.761917,
      "longitude": 7.186395,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1644756958,
      "ems": null
    },
    {
      "latitude": 50.761211,
      "longitude": 7.1875,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1644756961,
      "ems": null
    },
    {
      "latitude": 50.760468,
      "longitude": 7.188568,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1644756964,
      "ems": null
    },
    {
      "latitude": 50.759583,
      "longitude": 7.189438,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1644756967,
      "ems": null
    },
    {
      "latitude": 50.758606,
      "longitude": 7.189865,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1644756970,
      "ems": null
    },
    {
      "latitude": 50.757626,
      "longitude": 7.189941,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1644756973,
      "ems": null
    },
    {
      "latitude": 50.757111,
      "longitude": 7.189884,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1644756974,
      "ems": null
    },
    {
      "latitude": 50.755875,
      "longitude": 7.18929,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1644756978,
      "ems": null
    },
    {
      "latitude": 50.754822,
      "longitude": 7.188473,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1644756982,
      "ems": null
    },
    {
      "latitude": 50.753998,
      "longitude": 7.187729,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1644756985,
      "ems": null
    },
    {
      "latitude": 50.75325,
      "longitude": 7.187042,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1644756988,
      "ems": null
    },
    {
      "latitude": 50.752579,
      "longitude": 7.18632,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1644756991,
      "ems": null
    },
    {
      "latitude": 50.751667,
      "longitude": 7.185211,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1644756994,
      "ems": null
    },
    {
      "latitude": 50.750839,
      "longitude": 7.184316,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1644756997,
      "ems": null
    },
    {
      "latitude": 50.750107,
      "longitude": 7.183351,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1644757000,
      "ems": null
    },
    {
      "latitude": 50.749386,
      "longitude": 7.182236,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1644757003,
      "ems": null
    },
    {
      "latitude": 50.748779,
      "longitude": 7.181199,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1644757006,
      "ems": null
    },
    {
      "latitude": 50.748131,
      "longitude": 7.180099,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1644757009,
      "ems": null
    },
    {
      "latitude": 50.747433,
      "longitude": 7.178955,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1644757012,
      "ems": null
    },
    {
      "latitude": 50.746735,
      "longitude": 7.177963,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1644757015,
      "ems": null
    },
    {
      "latitude": 50.745991,
      "longitude": 7.176819,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1644757018,
      "ems": null
    },
    {
      "latitude": 50.745338,
      "longitude": 7.175522,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1644757021,
      "ems": null
    },
    {
      "latitude": 50.744797,
      "longitude": 7.174147,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1644757024,
      "ems": null
    },
    {
      "latitude": 50.744293,
      "longitude": 7.172513,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1644757027,
      "ems": null
    },
    {
      "latitude": 50.743988,
      "longitude": 7.171021,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1644757030,
      "ems": null
    },
    {
      "latitude": 50.743942,
      "longitude": 7.169266,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1644757033,
      "ems": null
    },
    {
      "latitude": 50.744175,
      "longitude": 7.16774,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1644757036,
      "ems": null
    },
    {
      "latitude": 50.744751,
      "longitude": 7.165833,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1644757039,
      "ems": null
    },
    {
      "latitude": 50.745438,
      "longitude": 7.164348,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1644757042,
      "ems": null
    },
    {
      "latitude": 50.745987,
      "longitude": 7.163086,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1644757045,
      "ems": null
    },
    {
      "latitude": 50.746735,
      "longitude": 7.161636,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1644757048,
      "ems": null
    },
    {
      "latitude": 50.747452,
      "longitude": 7.160339,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1644757051,
      "ems": null
    },
    {
      "latitude": 50.748039,
      "longitude": 7.159271,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1644757054,
      "ems": null
    },
    {
      "latitude": 50.748783,
      "longitude": 7.158127,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1644757057,
      "ems": null
    },
    {
      "latitude": 50.74942,
      "longitude": 7.156999,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1644757060,
      "ems": null
    },
    {
      "latitude": 50.749786,
      "longitude": 7.156257,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1644757063,
      "ems": null
    },
    {
      "latitude": 50.750427,
      "longitude": 7.154772,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1644757066,
      "ems": null
    },
    {
      "latitude": 50.751251,
      "longitude": 7.152397,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1644757072,
      "ems": null
    },
    {
      "latitude": 50.751755,
      "longitude": 7.151134,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1644757075,
      "ems": null
    },
    {
      "latitude": 50.752182,
      "longitude": 7.149963,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1644757078,
      "ems": null
    },
    {
      "latitude": 50.75267,
      "longitude": 7.148759,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1644757081,
      "ems": null
    },
    {
      "latitude": 50.753036,
      "longitude": 7.147572,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1644757084,
      "ems": null
    },
    {
      "latitude": 50.753494,
      "longitude": 7.146384,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1644757087,
      "ems": null
    },
    {
      "latitude": 50.753948,
      "longitude": 7.145233,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1644757090,
      "ems": null
    },
    {
      "latitude": 50.754929,
      "longitude": 7.142868,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1644757096,
      "ems": null
    },
    {
      "latitude": 50.755875,
      "longitude": 7.140445,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1644757102,
      "ems": null
    },
    {
      "latitude": 50.756462,
      "longitude": 7.139053,
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
      "timestamp": 1644757105,
      "ems": null
    },
    {
      "latitude": 50.756977,
      "longitude": 7.138138,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1644757108,
      "ems": null
    },
    {
      "latitude": 50.757751,
      "longitude": 7.137179,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1644757111,
      "ems": null
    },
    {
      "latitude": 50.758621,
      "longitude": 7.136288,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1644757114,
      "ems": null
    },
    {
      "latitude": 50.759537,
      "longitude": 7.135544,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1644757117,
      "ems": null
    },
    {
      "latitude": 50.760452,
      "longitude": 7.134952,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1644757120,
      "ems": null
    },
    {
      "latitude": 50.761444,
      "longitude": 7.134399,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1644757123,
      "ems": null
    },
    {
      "latitude": 50.762283,
      "longitude": 7.133987,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1644757126,
      "ems": null
    },
    {
      "latitude": 50.763382,
      "longitude": 7.133542,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1644757129,
      "ems": null
    },
    {
      "latitude": 50.764252,
      "longitude": 7.133319,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1644757132,
      "ems": null
    },
    {
      "latitude": 50.765442,
      "longitude": 7.133171,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1644757135,
      "ems": null
    },
    {
      "latitude": 50.766659,
      "longitude": 7.133255,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1644757138,
      "ems": null
    },
    {
      "latitude": 50.76759,
      "longitude": 7.13356,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1644757141,
      "ems": null
    },
    {
      "latitude": 50.768738,
      "longitude": 7.134061,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1644757144,
      "ems": null
    },
    {
      "latitude": 50.769638,
      "longitude": 7.134628,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1644757147,
      "ems": null
    },
    {
      "latitude": 50.77066,
      "longitude": 7.135391,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1644757150,
      "ems": null
    },
    {
      "latitude": 50.771484,
      "longitude": 7.136288,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1644757153,
      "ems": null
    },
    {
      "latitude": 50.772354,
      "longitude": 7.137624,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1644757156,
      "ems": null
    },
    {
      "latitude": 50.772812,
      "longitude": 7.138664,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1644757159,
      "ems": null
    },
    {
      "latitude": 50.77327,
      "longitude": 7.140274,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1644757162,
      "ems": null
    },
    {
      "latitude": 50.773544,
      "longitude": 7.141781,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1644757165,
      "ems": null
    },
    {
      "latitude": 50.773453,
      "longitude": 7.143117,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1644757168,
      "ems": null
    },
    {
      "latitude": 50.773178,
      "longitude": 7.144305,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1644757171,
      "ems": null
    },
    {
      "latitude": 50.772804,
      "longitude": 7.145386,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1644757174,
      "ems": null
    },
    {
      "latitude": 50.772491,
      "longitude": 7.146384,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1644757177,
      "ems": null
    },
    {
      "latitude": 50.772243,
      "longitude": 7.147446,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1644757180,
      "ems": null
    },
    {
      "latitude": 50.772011,
      "longitude": 7.148743,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1644757183,
      "ems": null
    },
    {
      "latitude": 50.771873,
      "longitude": 7.149658,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1644757186,
      "ems": null
    },
    {
      "latitude": 50.771778,
      "longitude": 7.15004,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1644757187,
      "ems": null
    },
    {
      "latitude": 50.771393,
      "longitude": 7.151803,
      "altitude": {
        "feet": 200,
        "meters": 61
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1644757191,
      "ems": null
    },
    {
      "latitude": 50.770935,
      "longitude": 7.153807,
      "altitude": {
        "feet": 200,
        "meters": 61
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1644757196,
      "ems": null
    },
    {
      "latitude": 50.770195,
      "longitude": 7.157135,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1644757205,
      "ems": null
    },
    {
      "latitude": 50.769562,
      "longitude": 7.160191,
      "altitude": {
        "feet": 100,
        "meters": 30
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1644757216,
      "ems": null
    }
  ],
};
