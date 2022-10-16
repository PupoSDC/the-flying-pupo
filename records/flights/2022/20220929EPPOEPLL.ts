import { Flight } from "../../../src/types/Flight";

export const flight: Flight = {
  identification: {
    id: "20220929EPPOEPLL",
    callsign: "BNI8AX",
    name: "Hour building flight to Poznan (return)",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 8, 29, 11, 12).getTime(),
    arrival: new Date(2022, 8, 29, 12, 47).getTime(),
    singleEnginePistonTime: 95,
    multiEnginePistonTime: 0,
    picTime: 95,
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
      registration: "SP-ELT",
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
      name: "Poznan Lawica Airport",
      code: "EPPO",
      position: {
        latitude: 52.421028,
        longitude: 16.826321,
      },
    },
  },
  track: [
    {
      "latitude": 52.416832,
      "longitude": 16.840178,
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
      "heading": 354,
      "squawk": "0",
      "timestamp": 1664450248,
      "ems": null
    },
    {
      "latitude": 52.417065,
      "longitude": 16.840267,
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
      "heading": 19,
      "squawk": "0",
      "timestamp": 1664450253,
      "ems": null
    },
    {
      "latitude": 52.417328,
      "longitude": 16.84042,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 19,
      "squawk": "0",
      "timestamp": 1664450258,
      "ems": null
    },
    {
      "latitude": 52.41758,
      "longitude": 16.840572,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 19,
      "squawk": "0",
      "timestamp": 1664450262,
      "ems": null
    },
    {
      "latitude": 52.417831,
      "longitude": 16.840727,
      "altitude": {
        "feet": 0,
        "meters": 0
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
      "heading": 22,
      "squawk": "0",
      "timestamp": 1664450266,
      "ems": null
    },
    {
      "latitude": 52.418087,
      "longitude": 16.840923,
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
      "heading": 33,
      "squawk": "0",
      "timestamp": 1664450270,
      "ems": null
    },
    {
      "latitude": 52.418262,
      "longitude": 16.840649,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664450394,
      "ems": null
    },
    {
      "latitude": 52.418541,
      "longitude": 16.839199,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664450401,
      "ems": null
    },
    {
      "latitude": 52.419075,
      "longitude": 16.83647,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664450408,
      "ems": null
    },
    {
      "latitude": 52.419525,
      "longitude": 16.833801,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664450414,
      "ems": null
    },
    {
      "latitude": 52.420029,
      "longitude": 16.831055,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664450420,
      "ems": null
    },
    {
      "latitude": 52.420532,
      "longitude": 16.828613,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664450426,
      "ems": null
    },
    {
      "latitude": 52.421078,
      "longitude": 16.825954,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1664450432,
      "ems": null
    },
    {
      "latitude": 52.421638,
      "longitude": 16.823286,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664450438,
      "ems": null
    },
    {
      "latitude": 52.421906,
      "longitude": 16.821976,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1664450441,
      "ems": null
    },
    {
      "latitude": 52.422546,
      "longitude": 16.818924,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1664450447,
      "ems": null
    },
    {
      "latitude": 52.423187,
      "longitude": 16.815948,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1664450453,
      "ems": null
    },
    {
      "latitude": 52.423687,
      "longitude": 16.81332,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1664450459,
      "ems": null
    },
    {
      "latitude": 52.424152,
      "longitude": 16.810652,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664450465,
      "ems": null
    },
    {
      "latitude": 52.424385,
      "longitude": 16.809553,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1664450468,
      "ems": null
    },
    {
      "latitude": 52.424568,
      "longitude": 16.808062,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1664450471,
      "ems": null
    },
    {
      "latitude": 52.424755,
      "longitude": 16.806728,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664450474,
      "ems": null
    },
    {
      "latitude": 52.424927,
      "longitude": 16.80542,
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1664450477,
      "ems": null
    },
    {
      "latitude": 52.424973,
      "longitude": 16.804123,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1664450480,
      "ems": null
    },
    {
      "latitude": 52.424881,
      "longitude": 16.802673,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1664450483,
      "ems": null
    },
    {
      "latitude": 52.424568,
      "longitude": 16.80147,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1664450486,
      "ems": null
    },
    {
      "latitude": 52.424149,
      "longitude": 16.800156,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1664450490,
      "ems": null
    },
    {
      "latitude": 52.423733,
      "longitude": 16.79888,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1664450492,
      "ems": null
    },
    {
      "latitude": 52.423187,
      "longitude": 16.797485,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1664450496,
      "ems": null
    },
    {
      "latitude": 52.422661,
      "longitude": 16.796213,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1664450499,
      "ems": null
    },
    {
      "latitude": 52.422226,
      "longitude": 16.795044,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1664450501,
      "ems": null
    },
    {
      "latitude": 52.421631,
      "longitude": 16.793289,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1664450505,
      "ems": null
    },
    {
      "latitude": 52.421082,
      "longitude": 16.791916,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664450508,
      "ems": null
    },
    {
      "latitude": 52.420578,
      "longitude": 16.790543,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664450511,
      "ems": null
    },
    {
      "latitude": 52.420147,
      "longitude": 16.789385,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664450513,
      "ems": null
    },
    {
      "latitude": 52.419479,
      "longitude": 16.787796,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1664450517,
      "ems": null
    },
    {
      "latitude": 52.418884,
      "longitude": 16.786346,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1664450520,
      "ems": null
    },
    {
      "latitude": 52.418335,
      "longitude": 16.785202,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1664450522,
      "ems": null
    },
    {
      "latitude": 52.417587,
      "longitude": 16.783892,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1664450525,
      "ems": null
    },
    {
      "latitude": 52.416641,
      "longitude": 16.782608,
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
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1664450529,
      "ems": null
    },
    {
      "latitude": 52.415726,
      "longitude": 16.781235,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1664450532,
      "ems": null
    },
    {
      "latitude": 52.414795,
      "longitude": 16.779812,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1664450535,
      "ems": null
    },
    {
      "latitude": 52.414078,
      "longitude": 16.778488,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1664450537,
      "ems": null
    },
    {
      "latitude": 52.413166,
      "longitude": 16.776594,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1664450541,
      "ems": null
    },
    {
      "latitude": 52.412418,
      "longitude": 16.774946,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1664450544,
      "ems": null
    },
    {
      "latitude": 52.411011,
      "longitude": 16.771622,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1664450550,
      "ems": null
    },
    {
      "latitude": 52.410465,
      "longitude": 16.770002,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1664450552,
      "ems": null
    },
    {
      "latitude": 52.409954,
      "longitude": 16.76804,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664450555,
      "ems": null
    },
    {
      "latitude": 52.409546,
      "longitude": 16.766052,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664450559,
      "ems": null
    },
    {
      "latitude": 52.409206,
      "longitude": 16.764116,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664450561,
      "ems": null
    },
    {
      "latitude": 52.408836,
      "longitude": 16.762075,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664450565,
      "ems": null
    },
    {
      "latitude": 52.408539,
      "longitude": 16.760101,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664450568,
      "ems": null
    },
    {
      "latitude": 52.40823,
      "longitude": 16.758074,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1664450571,
      "ems": null
    },
    {
      "latitude": 52.407856,
      "longitude": 16.755798,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664450573,
      "ems": null
    },
    {
      "latitude": 52.407486,
      "longitude": 16.753601,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664450576,
      "ems": null
    },
    {
      "latitude": 52.407021,
      "longitude": 16.751404,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664450580,
      "ems": null
    },
    {
      "latitude": 52.406601,
      "longitude": 16.749363,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664450582,
      "ems": null
    },
    {
      "latitude": 52.405807,
      "longitude": 16.745205,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664450588,
      "ems": null
    },
    {
      "latitude": 52.404968,
      "longitude": 16.740646,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664450595,
      "ems": null
    },
    {
      "latitude": 52.404228,
      "longitude": 16.736572,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664450600,
      "ems": null
    },
    {
      "latitude": 52.403458,
      "longitude": 16.732178,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1664450607,
      "ems": null
    },
    {
      "latitude": 52.403137,
      "longitude": 16.730118,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1664450610,
      "ems": null
    },
    {
      "latitude": 52.402954,
      "longitude": 16.727982,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1664450613,
      "ems": null
    },
    {
      "latitude": 52.402782,
      "longitude": 16.725742,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664450616,
      "ems": null
    },
    {
      "latitude": 52.402634,
      "longitude": 16.723633,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1664450619,
      "ems": null
    },
    {
      "latitude": 52.402542,
      "longitude": 16.721497,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1664450622,
      "ems": null
    },
    {
      "latitude": 52.402412,
      "longitude": 16.719465,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1664450624,
      "ems": null
    },
    {
      "latitude": 52.402317,
      "longitude": 16.716953,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664450628,
      "ems": null
    },
    {
      "latitude": 52.402267,
      "longitude": 16.714783,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664450631,
      "ems": null
    },
    {
      "latitude": 52.402222,
      "longitude": 16.712723,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664450634,
      "ems": null
    },
    {
      "latitude": 52.40218,
      "longitude": 16.710205,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664450637,
      "ems": null
    },
    {
      "latitude": 52.402176,
      "longitude": 16.708221,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664450640,
      "ems": null
    },
    {
      "latitude": 52.402176,
      "longitude": 16.70578,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664450643,
      "ems": null
    },
    {
      "latitude": 52.40218,
      "longitude": 16.704006,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664450646,
      "ems": null
    },
    {
      "latitude": 52.402176,
      "longitude": 16.701584,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664450649,
      "ems": null
    },
    {
      "latitude": 52.40213,
      "longitude": 16.6971,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664450655,
      "ems": null
    },
    {
      "latitude": 52.40213,
      "longitude": 16.692627,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1664450661,
      "ems": null
    },
    {
      "latitude": 52.401993,
      "longitude": 16.687998,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1664450667,
      "ems": null
    },
    {
      "latitude": 52.401947,
      "longitude": 16.683523,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664450673,
      "ems": null
    },
    {
      "latitude": 52.401947,
      "longitude": 16.679209,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664450679,
      "ems": null
    },
    {
      "latitude": 52.402039,
      "longitude": 16.675049,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1664450685,
      "ems": null
    },
    {
      "latitude": 52.402267,
      "longitude": 16.670837,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1664450691,
      "ems": null
    },
    {
      "latitude": 52.402363,
      "longitude": 16.668535,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1664450694,
      "ems": null
    },
    {
      "latitude": 52.402458,
      "longitude": 16.666416,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1664450697,
      "ems": null
    },
    {
      "latitude": 52.402542,
      "longitude": 16.664429,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1664450700,
      "ems": null
    },
    {
      "latitude": 52.402725,
      "longitude": 16.66008,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1664450706,
      "ems": null
    },
    {
      "latitude": 52.403,
      "longitude": 16.655884,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664450712,
      "ems": null
    },
    {
      "latitude": 52.403275,
      "longitude": 16.651764,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1664450718,
      "ems": null
    },
    {
      "latitude": 52.403549,
      "longitude": 16.64772,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1664450724,
      "ems": null
    },
    {
      "latitude": 52.403687,
      "longitude": 16.643372,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1664450730,
      "ems": null
    },
    {
      "latitude": 52.403667,
      "longitude": 16.6395,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664450736,
      "ems": null
    },
    {
      "latitude": 52.403641,
      "longitude": 16.637192,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664450739,
      "ems": null
    },
    {
      "latitude": 52.403595,
      "longitude": 16.634979,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664450742,
      "ems": null
    },
    {
      "latitude": 52.403595,
      "longitude": 16.632843,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1664450745,
      "ems": null
    },
    {
      "latitude": 52.403576,
      "longitude": 16.630711,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664450748,
      "ems": null
    },
    {
      "latitude": 52.40353,
      "longitude": 16.62875,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1664450751,
      "ems": null
    },
    {
      "latitude": 52.403503,
      "longitude": 16.624222,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1664450757,
      "ems": null
    },
    {
      "latitude": 52.403343,
      "longitude": 16.622236,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1664450760,
      "ems": null
    },
    {
      "latitude": 52.403015,
      "longitude": 16.620039,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1664450763,
      "ems": null
    },
    {
      "latitude": 52.40255,
      "longitude": 16.618469,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1664450766,
      "ems": null
    },
    {
      "latitude": 52.401718,
      "longitude": 16.616592,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1664450769,
      "ems": null
    },
    {
      "latitude": 52.400734,
      "longitude": 16.615173,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664450772,
      "ems": null
    },
    {
      "latitude": 52.399666,
      "longitude": 16.614075,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1664450775,
      "ems": null
    },
    {
      "latitude": 52.398605,
      "longitude": 16.613312,
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1664450778,
      "ems": null
    },
    {
      "latitude": 52.397369,
      "longitude": 16.612625,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1664450781,
      "ems": null
    },
    {
      "latitude": 52.396172,
      "longitude": 16.612034,
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1664450784,
      "ems": null
    },
    {
      "latitude": 52.395054,
      "longitude": 16.611485,
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1664450787,
      "ems": null
    },
    {
      "latitude": 52.393845,
      "longitude": 16.611099,
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1664450790,
      "ems": null
    },
    {
      "latitude": 52.392609,
      "longitude": 16.611099,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664450793,
      "ems": null
    },
    {
      "latitude": 52.391331,
      "longitude": 16.611406,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664450796,
      "ems": null
    },
    {
      "latitude": 52.390045,
      "longitude": 16.611938,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664450800,
      "ems": null
    },
    {
      "latitude": 52.388855,
      "longitude": 16.61232,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450802,
      "ems": null
    },
    {
      "latitude": 52.387619,
      "longitude": 16.612701,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664450805,
      "ems": null
    },
    {
      "latitude": 52.386337,
      "longitude": 16.613159,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450808,
      "ems": null
    },
    {
      "latitude": 52.385056,
      "longitude": 16.613617,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664450811,
      "ems": null
    },
    {
      "latitude": 52.383774,
      "longitude": 16.614151,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664450814,
      "ems": null
    },
    {
      "latitude": 52.382446,
      "longitude": 16.614761,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664450817,
      "ems": null
    },
    {
      "latitude": 52.381229,
      "longitude": 16.61533,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664450820,
      "ems": null
    },
    {
      "latitude": 52.379787,
      "longitude": 16.616037,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664450824,
      "ems": null
    },
    {
      "latitude": 52.378693,
      "longitude": 16.616516,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664450826,
      "ems": null
    },
    {
      "latitude": 52.377506,
      "longitude": 16.617214,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664450829,
      "ems": null
    },
    {
      "latitude": 52.376129,
      "longitude": 16.617889,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664450833,
      "ems": null
    },
    {
      "latitude": 52.374847,
      "longitude": 16.618576,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664450836,
      "ems": null
    },
    {
      "latitude": 52.373501,
      "longitude": 16.619253,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664450839,
      "ems": null
    },
    {
      "latitude": 52.370987,
      "longitude": 16.620588,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664450845,
      "ems": null
    },
    {
      "latitude": 52.368484,
      "longitude": 16.621704,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664450851,
      "ems": null
    },
    {
      "latitude": 52.365822,
      "longitude": 16.622629,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450857,
      "ems": null
    },
    {
      "latitude": 52.364471,
      "longitude": 16.62302,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664450860,
      "ems": null
    },
    {
      "latitude": 52.362946,
      "longitude": 16.623535,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450863,
      "ems": null
    },
    {
      "latitude": 52.361679,
      "longitude": 16.623962,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450866,
      "ems": null
    },
    {
      "latitude": 52.360374,
      "longitude": 16.624434,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450869,
      "ems": null
    },
    {
      "latitude": 52.359146,
      "longitude": 16.624832,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450872,
      "ems": null
    },
    {
      "latitude": 52.356674,
      "longitude": 16.625671,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450877,
      "ems": null
    },
    {
      "latitude": 52.353973,
      "longitude": 16.626511,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664450884,
      "ems": null
    },
    {
      "latitude": 52.351345,
      "longitude": 16.627258,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664450890,
      "ems": null
    },
    {
      "latitude": 52.348709,
      "longitude": 16.627884,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664450896,
      "ems": null
    },
    {
      "latitude": 52.347382,
      "longitude": 16.628189,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664450899,
      "ems": null
    },
    {
      "latitude": 52.345989,
      "longitude": 16.628357,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1664450902,
      "ems": null
    },
    {
      "latitude": 52.344685,
      "longitude": 16.628592,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664450905,
      "ems": null
    },
    {
      "latitude": 52.343307,
      "longitude": 16.628723,
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664450908,
      "ems": null
    },
    {
      "latitude": 52.342033,
      "longitude": 16.628906,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664450911,
      "ems": null
    },
    {
      "latitude": 52.340652,
      "longitude": 16.629028,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664450914,
      "ems": null
    },
    {
      "latitude": 52.339333,
      "longitude": 16.629141,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664450917,
      "ems": null
    },
    {
      "latitude": 52.338078,
      "longitude": 16.629221,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664450920,
      "ems": null
    },
    {
      "latitude": 52.336727,
      "longitude": 16.629377,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1664450923,
      "ems": null
    },
    {
      "latitude": 52.335331,
      "longitude": 16.629456,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1664450926,
      "ems": null
    },
    {
      "latitude": 52.333969,
      "longitude": 16.629486,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1664450929,
      "ems": null
    },
    {
      "latitude": 52.331543,
      "longitude": 16.629944,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664450934,
      "ems": null
    },
    {
      "latitude": 52.330124,
      "longitude": 16.630478,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664450938,
      "ems": null
    },
    {
      "latitude": 52.32909,
      "longitude": 16.630789,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664450940,
      "ems": null
    },
    {
      "latitude": 52.327606,
      "longitude": 16.631317,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450944,
      "ems": null
    },
    {
      "latitude": 52.32637,
      "longitude": 16.631775,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664450947,
      "ems": null
    },
    {
      "latitude": 52.325043,
      "longitude": 16.632124,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664450949,
      "ems": null
    },
    {
      "latitude": 52.323551,
      "longitude": 16.632517,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664450953,
      "ems": null
    },
    {
      "latitude": 52.32074,
      "longitude": 16.632996,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1664450959,
      "ems": null
    },
    {
      "latitude": 52.318039,
      "longitude": 16.63353,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664450965,
      "ems": null
    },
    {
      "latitude": 52.315247,
      "longitude": 16.63414,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664450971,
      "ems": null
    },
    {
      "latitude": 52.312798,
      "longitude": 16.634792,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664450977,
      "ems": null
    },
    {
      "latitude": 52.310379,
      "longitude": 16.635498,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664450983,
      "ems": null
    },
    {
      "latitude": 52.308933,
      "longitude": 16.635891,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664450986,
      "ems": null
    },
    {
      "latitude": 52.306503,
      "longitude": 16.636658,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664450992,
      "ems": null
    },
    {
      "latitude": 52.30545,
      "longitude": 16.637115,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664450995,
      "ems": null
    },
    {
      "latitude": 52.30426,
      "longitude": 16.637726,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664450998,
      "ems": null
    },
    {
      "latitude": 52.303116,
      "longitude": 16.638479,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451000,
      "ems": null
    },
    {
      "latitude": 52.301765,
      "longitude": 16.639421,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451004,
      "ems": null
    },
    {
      "latitude": 52.300461,
      "longitude": 16.640285,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451007,
      "ems": null
    },
    {
      "latitude": 52.299297,
      "longitude": 16.641069,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451010,
      "ems": null
    },
    {
      "latitude": 52.298126,
      "longitude": 16.641846,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451013,
      "ems": null
    },
    {
      "latitude": 52.297028,
      "longitude": 16.642609,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664451016,
      "ems": null
    },
    {
      "latitude": 52.295807,
      "longitude": 16.643503,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664451019,
      "ems": null
    },
    {
      "latitude": 52.294735,
      "longitude": 16.644209,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451022,
      "ems": null
    },
    {
      "latitude": 52.293457,
      "longitude": 16.64505,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664451025,
      "ems": null
    },
    {
      "latitude": 52.29092,
      "longitude": 16.646719,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451031,
      "ems": null
    },
    {
      "latitude": 52.288467,
      "longitude": 16.648331,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1664451037,
      "ems": null
    },
    {
      "latitude": 52.286133,
      "longitude": 16.649704,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1664451043,
      "ems": null
    },
    {
      "latitude": 52.28347,
      "longitude": 16.651194,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664451049,
      "ems": null
    },
    {
      "latitude": 52.281048,
      "longitude": 16.65292,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664451055,
      "ems": null
    },
    {
      "latitude": 52.278946,
      "longitude": 16.654434,
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1664451060,
      "ems": null
    },
    {
      "latitude": 52.276253,
      "longitude": 16.656294,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451067,
      "ems": null
    },
    {
      "latitude": 52.273415,
      "longitude": 16.658098,
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
      "squawk": "7000",
      "timestamp": 1664451073,
      "ems": null
    },
    {
      "latitude": 52.270935,
      "longitude": 16.659927,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664451079,
      "ems": null
    },
    {
      "latitude": 52.269653,
      "longitude": 16.660995,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1664451082,
      "ems": null
    },
    {
      "latitude": 52.267132,
      "longitude": 16.663042,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664451088,
      "ems": null
    },
    {
      "latitude": 52.264477,
      "longitude": 16.664927,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1664451094,
      "ems": null
    },
    {
      "latitude": 52.261639,
      "longitude": 16.666809,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664451100,
      "ems": null
    },
    {
      "latitude": 52.258942,
      "longitude": 16.66832,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664451106,
      "ems": null
    },
    {
      "latitude": 52.257633,
      "longitude": 16.669006,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664451109,
      "ems": null
    },
    {
      "latitude": 52.256241,
      "longitude": 16.669693,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664451112,
      "ems": null
    },
    {
      "latitude": 52.254978,
      "longitude": 16.670183,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1664451115,
      "ems": null
    },
    {
      "latitude": 52.253723,
      "longitude": 16.670732,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451118,
      "ems": null
    },
    {
      "latitude": 52.25235,
      "longitude": 16.671295,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451121,
      "ems": null
    },
    {
      "latitude": 52.251022,
      "longitude": 16.671831,
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664451124,
      "ems": null
    },
    {
      "latitude": 52.249649,
      "longitude": 16.672287,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664451127,
      "ems": null
    },
    {
      "latitude": 52.248322,
      "longitude": 16.672668,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451130,
      "ems": null
    },
    {
      "latitude": 52.246975,
      "longitude": 16.673008,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664451133,
      "ems": null
    },
    {
      "latitude": 52.245712,
      "longitude": 16.673355,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451136,
      "ems": null
    },
    {
      "latitude": 52.244507,
      "longitude": 16.673794,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664451139,
      "ems": null
    },
    {
      "latitude": 52.241993,
      "longitude": 16.674734,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451145,
      "ems": null
    },
    {
      "latitude": 52.239212,
      "longitude": 16.675949,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451151,
      "ems": null
    },
    {
      "latitude": 52.236546,
      "longitude": 16.676931,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664451157,
      "ems": null
    },
    {
      "latitude": 52.233612,
      "longitude": 16.677952,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664451164,
      "ems": null
    },
    {
      "latitude": 52.230789,
      "longitude": 16.678848,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664451170,
      "ems": null
    },
    {
      "latitude": 52.228119,
      "longitude": 16.679678,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664451176,
      "ems": null
    },
    {
      "latitude": 52.225616,
      "longitude": 16.680679,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451182,
      "ems": null
    },
    {
      "latitude": 52.223186,
      "longitude": 16.681719,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451188,
      "ems": null
    },
    {
      "latitude": 52.220856,
      "longitude": 16.682663,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451193,
      "ems": null
    },
    {
      "latitude": 52.218342,
      "longitude": 16.683681,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664451199,
      "ems": null
    },
    {
      "latitude": 52.21582,
      "longitude": 16.684418,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451206,
      "ems": null
    },
    {
      "latitude": 52.213211,
      "longitude": 16.685257,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664451212,
      "ems": null
    },
    {
      "latitude": 52.210785,
      "longitude": 16.68602,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451217,
      "ems": null
    },
    {
      "latitude": 52.209091,
      "longitude": 16.686401,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451221,
      "ems": null
    },
    {
      "latitude": 52.207901,
      "longitude": 16.686707,
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1664451223,
      "ems": null
    },
    {
      "latitude": 52.205063,
      "longitude": 16.687469,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664451230,
      "ems": null
    },
    {
      "latitude": 52.202469,
      "longitude": 16.688311,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451235,
      "ems": null
    },
    {
      "latitude": 52.200886,
      "longitude": 16.689016,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664451239,
      "ems": null
    },
    {
      "latitude": 52.199581,
      "longitude": 16.689802,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664451242,
      "ems": null
    },
    {
      "latitude": 52.198425,
      "longitude": 16.690445,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664451245,
      "ems": null
    },
    {
      "latitude": 52.197067,
      "longitude": 16.691214,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664451248,
      "ems": null
    },
    {
      "latitude": 52.195862,
      "longitude": 16.691971,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664451251,
      "ems": null
    },
    {
      "latitude": 52.194553,
      "longitude": 16.692783,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1664451254,
      "ems": null
    },
    {
      "latitude": 52.193481,
      "longitude": 16.69342,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664451256,
      "ems": null
    },
    {
      "latitude": 52.192089,
      "longitude": 16.694118,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664451259,
      "ems": null
    },
    {
      "latitude": 52.190689,
      "longitude": 16.69487,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1664451263,
      "ems": null
    },
    {
      "latitude": 52.188225,
      "longitude": 16.696079,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664451269,
      "ems": null
    },
    {
      "latitude": 52.185699,
      "longitude": 16.697159,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451275,
      "ems": null
    },
    {
      "latitude": 52.184315,
      "longitude": 16.697727,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451278,
      "ems": null
    },
    {
      "latitude": 52.182964,
      "longitude": 16.698277,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451281,
      "ems": null
    },
    {
      "latitude": 52.181763,
      "longitude": 16.698761,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451284,
      "ems": null
    },
    {
      "latitude": 52.180573,
      "longitude": 16.699142,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664451287,
      "ems": null
    },
    {
      "latitude": 52.179291,
      "longitude": 16.699677,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664451290,
      "ems": null
    },
    {
      "latitude": 52.17659,
      "longitude": 16.700745,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451296,
      "ems": null
    },
    {
      "latitude": 52.174072,
      "longitude": 16.701736,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451301,
      "ems": null
    },
    {
      "latitude": 52.17128,
      "longitude": 16.702749,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451308,
      "ems": null
    },
    {
      "latitude": 52.168858,
      "longitude": 16.703691,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451314,
      "ems": null
    },
    {
      "latitude": 52.166565,
      "longitude": 16.704559,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1664451320,
      "ems": null
    },
    {
      "latitude": 52.164413,
      "longitude": 16.705322,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451326,
      "ems": null
    },
    {
      "latitude": 52.161804,
      "longitude": 16.706314,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1664451332,
      "ems": null
    },
    {
      "latitude": 52.159241,
      "longitude": 16.70723,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664451338,
      "ems": null
    },
    {
      "latitude": 52.15657,
      "longitude": 16.708008,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451344,
      "ems": null
    },
    {
      "latitude": 52.153885,
      "longitude": 16.708832,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664451350,
      "ems": null
    },
    {
      "latitude": 52.151493,
      "longitude": 16.709578,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664451356,
      "ems": null
    },
    {
      "latitude": 52.148941,
      "longitude": 16.710281,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451362,
      "ems": null
    },
    {
      "latitude": 52.146469,
      "longitude": 16.710968,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451368,
      "ems": null
    },
    {
      "latitude": 52.143997,
      "longitude": 16.711655,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1664451374,
      "ems": null
    },
    {
      "latitude": 52.141533,
      "longitude": 16.712246,
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1664451380,
      "ems": null
    },
    {
      "latitude": 52.138962,
      "longitude": 16.712952,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1664451386,
      "ems": null
    },
    {
      "latitude": 52.136627,
      "longitude": 16.713715,
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1664451392,
      "ems": null
    },
    {
      "latitude": 52.135254,
      "longitude": 16.714401,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1664451395,
      "ems": null
    },
    {
      "latitude": 52.133945,
      "longitude": 16.715384,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664451399,
      "ems": null
    },
    {
      "latitude": 52.133011,
      "longitude": 16.716232,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1664451401,
      "ems": null
    },
    {
      "latitude": 52.132641,
      "longitude": 16.716719,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664451402,
      "ems": null
    },
    {
      "latitude": 52.131618,
      "longitude": 16.71813,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664451405,
      "ems": null
    },
    {
      "latitude": 52.130768,
      "longitude": 16.719971,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664451408,
      "ems": null
    },
    {
      "latitude": 52.130035,
      "longitude": 16.721819,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451411,
      "ems": null
    },
    {
      "latitude": 52.129852,
      "longitude": 16.722412,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664451414,
      "ems": null
    },
    {
      "latitude": 52.128937,
      "longitude": 16.725693,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664451417,
      "ems": null
    },
    {
      "latitude": 52.12825,
      "longitude": 16.728745,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664451421,
      "ems": null
    },
    {
      "latitude": 52.127472,
      "longitude": 16.731873,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664451426,
      "ems": null
    },
    {
      "latitude": 52.127007,
      "longitude": 16.733904,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664451429,
      "ems": null
    },
    {
      "latitude": 52.126465,
      "longitude": 16.736298,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664451431,
      "ems": null
    },
    {
      "latitude": 52.125984,
      "longitude": 16.738455,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664451434,
      "ems": null
    },
    {
      "latitude": 52.125687,
      "longitude": 16.739502,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664451436,
      "ems": null
    },
    {
      "latitude": 52.124912,
      "longitude": 16.742929,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664451441,
      "ems": null
    },
    {
      "latitude": 52.12389,
      "longitude": 16.747087,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664451446,
      "ems": null
    },
    {
      "latitude": 52.122677,
      "longitude": 16.751404,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664451453,
      "ems": null
    },
    {
      "latitude": 52.121704,
      "longitude": 16.755066,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664451458,
      "ems": null
    },
    {
      "latitude": 52.120491,
      "longitude": 16.759409,
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
      "squawk": "7000",
      "timestamp": 1664451464,
      "ems": null
    },
    {
      "latitude": 52.119873,
      "longitude": 16.761398,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664451467,
      "ems": null
    },
    {
      "latitude": 52.119415,
      "longitude": 16.762924,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664451469,
      "ems": null
    },
    {
      "latitude": 52.118675,
      "longitude": 16.765137,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664451474,
      "ems": null
    },
    {
      "latitude": 52.117493,
      "longitude": 16.76857,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451478,
      "ems": null
    },
    {
      "latitude": 52.117035,
      "longitude": 16.769943,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451482,
      "ems": null
    },
    {
      "latitude": 52.114437,
      "longitude": 16.777849,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451491,
      "ems": null
    },
    {
      "latitude": 52.113461,
      "longitude": 16.780518,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451496,
      "ems": null
    },
    {
      "latitude": 52.112137,
      "longitude": 16.784058,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451501,
      "ems": null
    },
    {
      "latitude": 52.110855,
      "longitude": 16.787567,
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
      "squawk": "7000",
      "timestamp": 1664451506,
      "ems": null
    },
    {
      "latitude": 52.108665,
      "longitude": 16.793545,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451516,
      "ems": null
    },
    {
      "latitude": 52.107269,
      "longitude": 16.797468,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451522,
      "ems": null
    },
    {
      "latitude": 52.106003,
      "longitude": 16.800842,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451527,
      "ems": null
    },
    {
      "latitude": 52.104263,
      "longitude": 16.805496,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451534,
      "ems": null
    },
    {
      "latitude": 52.103035,
      "longitude": 16.808689,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451538,
      "ems": null
    },
    {
      "latitude": 52.101265,
      "longitude": 16.813398,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664451546,
      "ems": null
    },
    {
      "latitude": 52.099773,
      "longitude": 16.817322,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664451552,
      "ems": null
    },
    {
      "latitude": 52.098221,
      "longitude": 16.821136,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451558,
      "ems": null
    },
    {
      "latitude": 52.096703,
      "longitude": 16.824697,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451563,
      "ems": null
    },
    {
      "latitude": 52.095016,
      "longitude": 16.82869,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451570,
      "ems": null
    },
    {
      "latitude": 52.093491,
      "longitude": 16.832468,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664451576,
      "ems": null
    },
    {
      "latitude": 52.092049,
      "longitude": 16.835999,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664451582,
      "ems": null
    },
    {
      "latitude": 52.090652,
      "longitude": 16.839451,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664451587,
      "ems": null
    },
    {
      "latitude": 52.089115,
      "longitude": 16.843061,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451593,
      "ems": null
    },
    {
      "latitude": 52.087532,
      "longitude": 16.846907,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451600,
      "ems": null
    },
    {
      "latitude": 52.085999,
      "longitude": 16.850662,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451606,
      "ems": null
    },
    {
      "latitude": 52.084599,
      "longitude": 16.854597,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451612,
      "ems": null
    },
    {
      "latitude": 52.083252,
      "longitude": 16.858368,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451618,
      "ems": null
    },
    {
      "latitude": 52.081879,
      "longitude": 16.862335,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451624,
      "ems": null
    },
    {
      "latitude": 52.080269,
      "longitude": 16.866995,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451630,
      "ems": null
    },
    {
      "latitude": 52.078873,
      "longitude": 16.870998,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451637,
      "ems": null
    },
    {
      "latitude": 52.077335,
      "longitude": 16.875235,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451643,
      "ems": null
    },
    {
      "latitude": 52.075974,
      "longitude": 16.87912,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451649,
      "ems": null
    },
    {
      "latitude": 52.074638,
      "longitude": 16.882925,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451654,
      "ems": null
    },
    {
      "latitude": 52.07309,
      "longitude": 16.887207,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451661,
      "ems": null
    },
    {
      "latitude": 52.071671,
      "longitude": 16.891098,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451667,
      "ems": null
    },
    {
      "latitude": 52.070206,
      "longitude": 16.894989,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451673,
      "ems": null
    },
    {
      "latitude": 52.068787,
      "longitude": 16.898499,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664451679,
      "ems": null
    },
    {
      "latitude": 52.068054,
      "longitude": 16.90033,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451682,
      "ems": null
    },
    {
      "latitude": 52.066536,
      "longitude": 16.904192,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451688,
      "ems": null
    },
    {
      "latitude": 52.065216,
      "longitude": 16.90773,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664451694,
      "ems": null
    },
    {
      "latitude": 52.063931,
      "longitude": 16.911648,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664451700,
      "ems": null
    },
    {
      "latitude": 52.063202,
      "longitude": 16.913757,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664451703,
      "ems": null
    },
    {
      "latitude": 52.06258,
      "longitude": 16.915806,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664451706,
      "ems": null
    },
    {
      "latitude": 52.062012,
      "longitude": 16.917801,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664451709,
      "ems": null
    },
    {
      "latitude": 52.061462,
      "longitude": 16.919785,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664451712,
      "ems": null
    },
    {
      "latitude": 52.060913,
      "longitude": 16.921844,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664451715,
      "ems": null
    },
    {
      "latitude": 52.060272,
      "longitude": 16.924133,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664451718,
      "ems": null
    },
    {
      "latitude": 52.059692,
      "longitude": 16.926321,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664451721,
      "ems": null
    },
    {
      "latitude": 52.059135,
      "longitude": 16.928362,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664451724,
      "ems": null
    },
    {
      "latitude": 52.058762,
      "longitude": 16.929855,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664451727,
      "ems": null
    },
    {
      "latitude": 52.058109,
      "longitude": 16.9326,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664451730,
      "ems": null
    },
    {
      "latitude": 52.057709,
      "longitude": 16.934357,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664451733,
      "ems": null
    },
    {
      "latitude": 52.057205,
      "longitude": 16.936417,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664451736,
      "ems": null
    },
    {
      "latitude": 52.056152,
      "longitude": 16.940689,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664451742,
      "ems": null
    },
    {
      "latitude": 52.055099,
      "longitude": 16.944885,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664451748,
      "ems": null
    },
    {
      "latitude": 52.054199,
      "longitude": 16.948843,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664451754,
      "ems": null
    },
    {
      "latitude": 52.05378,
      "longitude": 16.95104,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664451757,
      "ems": null
    },
    {
      "latitude": 52.053452,
      "longitude": 16.953049,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664451760,
      "ems": null
    },
    {
      "latitude": 52.053085,
      "longitude": 16.955109,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664451763,
      "ems": null
    },
    {
      "latitude": 52.052765,
      "longitude": 16.957169,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664451766,
      "ems": null
    },
    {
      "latitude": 52.052399,
      "longitude": 16.959381,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664451769,
      "ems": null
    },
    {
      "latitude": 52.051987,
      "longitude": 16.96167,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664451772,
      "ems": null
    },
    {
      "latitude": 52.051163,
      "longitude": 16.965942,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664451778,
      "ems": null
    },
    {
      "latitude": 52.050751,
      "longitude": 16.968079,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664451781,
      "ems": null
    },
    {
      "latitude": 52.049965,
      "longitude": 16.972229,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664451787,
      "ems": null
    },
    {
      "latitude": 52.04908,
      "longitude": 16.976858,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664451793,
      "ems": null
    },
    {
      "latitude": 52.048553,
      "longitude": 16.978912,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664451796,
      "ems": null
    },
    {
      "latitude": 52.048096,
      "longitude": 16.980743,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664451799,
      "ems": null
    },
    {
      "latitude": 52.047592,
      "longitude": 16.982803,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664451802,
      "ems": null
    },
    {
      "latitude": 52.046986,
      "longitude": 16.985256,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664451805,
      "ems": null
    },
    {
      "latitude": 52.046474,
      "longitude": 16.987217,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664451808,
      "ems": null
    },
    {
      "latitude": 52.045898,
      "longitude": 16.989288,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664451811,
      "ems": null
    },
    {
      "latitude": 52.045303,
      "longitude": 16.991196,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664451814,
      "ems": null
    },
    {
      "latitude": 52.044609,
      "longitude": 16.993181,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664451817,
      "ems": null
    },
    {
      "latitude": 52.044067,
      "longitude": 16.994705,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451820,
      "ems": null
    },
    {
      "latitude": 52.043198,
      "longitude": 16.99707,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451823,
      "ems": null
    },
    {
      "latitude": 52.04274,
      "longitude": 16.998367,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451826,
      "ems": null
    },
    {
      "latitude": 52.041912,
      "longitude": 17.000715,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451829,
      "ems": null
    },
    {
      "latitude": 52.041367,
      "longitude": 17.002182,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451832,
      "ems": null
    },
    {
      "latitude": 52.040512,
      "longitude": 17.004482,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664451835,
      "ems": null
    },
    {
      "latitude": 52.039955,
      "longitude": 17.00613,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451838,
      "ems": null
    },
    {
      "latitude": 52.039078,
      "longitude": 17.008438,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451841,
      "ems": null
    },
    {
      "latitude": 52.037796,
      "longitude": 17.011795,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451847,
      "ems": null
    },
    {
      "latitude": 52.036278,
      "longitude": 17.015625,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451853,
      "ems": null
    },
    {
      "latitude": 52.03474,
      "longitude": 17.019627,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451859,
      "ems": null
    },
    {
      "latitude": 52.033401,
      "longitude": 17.023087,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451865,
      "ems": null
    },
    {
      "latitude": 52.031761,
      "longitude": 17.027161,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451872,
      "ems": null
    },
    {
      "latitude": 52.030472,
      "longitude": 17.030792,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664451877,
      "ems": null
    },
    {
      "latitude": 52.029015,
      "longitude": 17.034536,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451883,
      "ems": null
    },
    {
      "latitude": 52.027542,
      "longitude": 17.038116,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451890,
      "ems": null
    },
    {
      "latitude": 52.026077,
      "longitude": 17.041626,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664451896,
      "ems": null
    },
    {
      "latitude": 52.024685,
      "longitude": 17.045132,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451902,
      "ems": null
    },
    {
      "latitude": 52.023285,
      "longitude": 17.048874,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451908,
      "ems": null
    },
    {
      "latitude": 52.021847,
      "longitude": 17.052429,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664451914,
      "ems": null
    },
    {
      "latitude": 52.020309,
      "longitude": 17.056196,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451920,
      "ems": null
    },
    {
      "latitude": 52.018822,
      "longitude": 17.05957,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664451925,
      "ems": null
    },
    {
      "latitude": 52.017288,
      "longitude": 17.063446,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451932,
      "ems": null
    },
    {
      "latitude": 52.016006,
      "longitude": 17.066803,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451938,
      "ems": null
    },
    {
      "latitude": 52.014446,
      "longitude": 17.071028,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451944,
      "ems": null
    },
    {
      "latitude": 52.013123,
      "longitude": 17.074356,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664451949,
      "ems": null
    },
    {
      "latitude": 52.011475,
      "longitude": 17.0784,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451955,
      "ems": null
    },
    {
      "latitude": 52.00993,
      "longitude": 17.082014,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664451962,
      "ems": null
    },
    {
      "latitude": 52.008347,
      "longitude": 17.085781,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664451968,
      "ems": null
    },
    {
      "latitude": 52.007603,
      "longitude": 17.087429,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664451971,
      "ems": null
    },
    {
      "latitude": 52.005981,
      "longitude": 17.091141,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664451977,
      "ems": null
    },
    {
      "latitude": 52.004562,
      "longitude": 17.094574,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451982,
      "ems": null
    },
    {
      "latitude": 52.003178,
      "longitude": 17.098337,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664451989,
      "ems": null
    },
    {
      "latitude": 52.001595,
      "longitude": 17.102339,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664451995,
      "ems": null
    },
    {
      "latitude": 51.999874,
      "longitude": 17.106497,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664452001,
      "ems": null
    },
    {
      "latitude": 51.998291,
      "longitude": 17.110367,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452007,
      "ems": null
    },
    {
      "latitude": 51.996689,
      "longitude": 17.114029,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664452013,
      "ems": null
    },
    {
      "latitude": 51.995823,
      "longitude": 17.115835,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664452016,
      "ems": null
    },
    {
      "latitude": 51.994938,
      "longitude": 17.11772,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664452019,
      "ems": null
    },
    {
      "latitude": 51.993256,
      "longitude": 17.121353,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664452025,
      "ems": null
    },
    {
      "latitude": 51.992386,
      "longitude": 17.123108,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664452028,
      "ems": null
    },
    {
      "latitude": 51.991493,
      "longitude": 17.124939,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664452031,
      "ems": null
    },
    {
      "latitude": 51.990608,
      "longitude": 17.126743,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664452034,
      "ems": null
    },
    {
      "latitude": 51.988796,
      "longitude": 17.130198,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664452040,
      "ems": null
    },
    {
      "latitude": 51.986938,
      "longitude": 17.133713,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664452046,
      "ems": null
    },
    {
      "latitude": 51.985954,
      "longitude": 17.135532,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1664452049,
      "ems": null
    },
    {
      "latitude": 51.984833,
      "longitude": 17.137375,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664452052,
      "ems": null
    },
    {
      "latitude": 51.983917,
      "longitude": 17.138901,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664452055,
      "ems": null
    },
    {
      "latitude": 51.982773,
      "longitude": 17.140808,
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664452058,
      "ems": null
    },
    {
      "latitude": 51.982044,
      "longitude": 17.141968,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664452060,
      "ems": null
    },
    {
      "latitude": 51.980804,
      "longitude": 17.143784,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664452064,
      "ems": null
    },
    {
      "latitude": 51.979671,
      "longitude": 17.145578,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664452067,
      "ems": null
    },
    {
      "latitude": 51.978745,
      "longitude": 17.146988,
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664452070,
      "ems": null
    },
    {
      "latitude": 51.9776,
      "longitude": 17.148666,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1664452073,
      "ems": null
    },
    {
      "latitude": 51.976597,
      "longitude": 17.150208,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664452076,
      "ems": null
    },
    {
      "latitude": 51.97554,
      "longitude": 17.151718,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1664452079,
      "ems": null
    },
    {
      "latitude": 51.974457,
      "longitude": 17.153189,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664452082,
      "ems": null
    },
    {
      "latitude": 51.97316,
      "longitude": 17.154922,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664452085,
      "ems": null
    },
    {
      "latitude": 51.972107,
      "longitude": 17.156219,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664452088,
      "ems": null
    },
    {
      "latitude": 51.970917,
      "longitude": 17.157663,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1664452091,
      "ems": null
    },
    {
      "latitude": 51.969707,
      "longitude": 17.159075,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664452094,
      "ems": null
    },
    {
      "latitude": 51.968731,
      "longitude": 17.16033,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664452096,
      "ems": null
    },
    {
      "latitude": 51.967484,
      "longitude": 17.161942,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664452100,
      "ems": null
    },
    {
      "latitude": 51.966522,
      "longitude": 17.163162,
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
      "squawk": "7000",
      "timestamp": 1664452103,
      "ems": null
    },
    {
      "latitude": 51.96426,
      "longitude": 17.166059,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1664452108,
      "ems": null
    },
    {
      "latitude": 51.962311,
      "longitude": 17.168884,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1664452114,
      "ems": null
    },
    {
      "latitude": 51.961441,
      "longitude": 17.170715,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452118,
      "ems": null
    },
    {
      "latitude": 51.960709,
      "longitude": 17.173157,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452121,
      "ems": null
    },
    {
      "latitude": 51.960213,
      "longitude": 17.175398,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664452124,
      "ems": null
    },
    {
      "latitude": 51.959702,
      "longitude": 17.177811,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664452127,
      "ems": null
    },
    {
      "latitude": 51.959381,
      "longitude": 17.179337,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1664452130,
      "ems": null
    },
    {
      "latitude": 51.958767,
      "longitude": 17.182146,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664452133,
      "ems": null
    },
    {
      "latitude": 51.958237,
      "longitude": 17.184219,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452136,
      "ems": null
    },
    {
      "latitude": 51.95779,
      "longitude": 17.185991,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664452139,
      "ems": null
    },
    {
      "latitude": 51.957092,
      "longitude": 17.188644,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452142,
      "ems": null
    },
    {
      "latitude": 51.956589,
      "longitude": 17.190628,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452145,
      "ems": null
    },
    {
      "latitude": 51.956039,
      "longitude": 17.192688,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452148,
      "ems": null
    },
    {
      "latitude": 51.95517,
      "longitude": 17.196121,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452153,
      "ems": null
    },
    {
      "latitude": 51.954163,
      "longitude": 17.200241,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452160,
      "ems": null
    },
    {
      "latitude": 51.952995,
      "longitude": 17.205139,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452166,
      "ems": null
    },
    {
      "latitude": 51.951965,
      "longitude": 17.209091,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664452172,
      "ems": null
    },
    {
      "latitude": 51.951275,
      "longitude": 17.211653,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452176,
      "ems": null
    },
    {
      "latitude": 51.949738,
      "longitude": 17.217459,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452184,
      "ems": null
    },
    {
      "latitude": 51.947968,
      "longitude": 17.223816,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452193,
      "ems": null
    },
    {
      "latitude": 51.94685,
      "longitude": 17.227583,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452199,
      "ems": null
    },
    {
      "latitude": 51.945873,
      "longitude": 17.23135,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452204,
      "ems": null
    },
    {
      "latitude": 51.94471,
      "longitude": 17.236057,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452211,
      "ems": null
    },
    {
      "latitude": 51.943588,
      "longitude": 17.240219,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664452217,
      "ems": null
    },
    {
      "latitude": 51.94252,
      "longitude": 17.244219,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664452223,
      "ems": null
    },
    {
      "latitude": 51.941357,
      "longitude": 17.248379,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664452229,
      "ems": null
    },
    {
      "latitude": 51.940247,
      "longitude": 17.252121,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452235,
      "ems": null
    },
    {
      "latitude": 51.93959,
      "longitude": 17.254107,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452238,
      "ems": null
    },
    {
      "latitude": 51.938656,
      "longitude": 17.25701,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664452243,
      "ems": null
    },
    {
      "latitude": 51.937729,
      "longitude": 17.259598,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664452247,
      "ems": null
    },
    {
      "latitude": 51.93689,
      "longitude": 17.261953,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452250,
      "ems": null
    },
    {
      "latitude": 51.936562,
      "longitude": 17.262896,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452253,
      "ems": null
    },
    {
      "latitude": 51.935303,
      "longitude": 17.265854,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664452257,
      "ems": null
    },
    {
      "latitude": 51.934563,
      "longitude": 17.267605,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452260,
      "ems": null
    },
    {
      "latitude": 51.933815,
      "longitude": 17.269331,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452263,
      "ems": null
    },
    {
      "latitude": 51.932098,
      "longitude": 17.273102,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664452269,
      "ems": null
    },
    {
      "latitude": 51.931351,
      "longitude": 17.274981,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452272,
      "ems": null
    },
    {
      "latitude": 51.930138,
      "longitude": 17.278748,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452278,
      "ems": null
    },
    {
      "latitude": 51.92894,
      "longitude": 17.282639,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452284,
      "ems": null
    },
    {
      "latitude": 51.928276,
      "longitude": 17.284634,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452287,
      "ems": null
    },
    {
      "latitude": 51.927612,
      "longitude": 17.286606,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664452290,
      "ems": null
    },
    {
      "latitude": 51.926971,
      "longitude": 17.288479,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452293,
      "ems": null
    },
    {
      "latitude": 51.926285,
      "longitude": 17.290497,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452296,
      "ems": null
    },
    {
      "latitude": 51.925671,
      "longitude": 17.292402,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452299,
      "ems": null
    },
    {
      "latitude": 51.92432,
      "longitude": 17.296404,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452305,
      "ems": null
    },
    {
      "latitude": 51.923218,
      "longitude": 17.299881,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452311,
      "ems": null
    },
    {
      "latitude": 51.921707,
      "longitude": 17.304153,
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
      "timestamp": 1664452317,
      "ems": null
    },
    {
      "latitude": 51.920269,
      "longitude": 17.308096,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664452323,
      "ems": null
    },
    {
      "latitude": 51.918827,
      "longitude": 17.311941,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452329,
      "ems": null
    },
    {
      "latitude": 51.917358,
      "longitude": 17.315903,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452335,
      "ems": null
    },
    {
      "latitude": 51.916672,
      "longitude": 17.317505,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664452338,
      "ems": null
    },
    {
      "latitude": 51.915802,
      "longitude": 17.319565,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452341,
      "ems": null
    },
    {
      "latitude": 51.91507,
      "longitude": 17.321243,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664452344,
      "ems": null
    },
    {
      "latitude": 51.913288,
      "longitude": 17.325205,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664452350,
      "ems": null
    },
    {
      "latitude": 51.912506,
      "longitude": 17.326965,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664452353,
      "ems": null
    },
    {
      "latitude": 51.911655,
      "longitude": 17.328735,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664452356,
      "ems": null
    },
    {
      "latitude": 51.91082,
      "longitude": 17.330462,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664452359,
      "ems": null
    },
    {
      "latitude": 51.910076,
      "longitude": 17.332031,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664452362,
      "ems": null
    },
    {
      "latitude": 51.909191,
      "longitude": 17.333836,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664452365,
      "ems": null
    },
    {
      "latitude": 51.908493,
      "longitude": 17.335093,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664452368,
      "ems": null
    },
    {
      "latitude": 51.907516,
      "longitude": 17.337036,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664452371,
      "ems": null
    },
    {
      "latitude": 51.906738,
      "longitude": 17.338562,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664452374,
      "ems": null
    },
    {
      "latitude": 51.905823,
      "longitude": 17.34024,
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664452377,
      "ems": null
    },
    {
      "latitude": 51.904404,
      "longitude": 17.34314,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664452382,
      "ems": null
    },
    {
      "latitude": 51.903671,
      "longitude": 17.345276,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452386,
      "ems": null
    },
    {
      "latitude": 51.903046,
      "longitude": 17.347097,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452389,
      "ems": null
    },
    {
      "latitude": 51.902435,
      "longitude": 17.348938,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452391,
      "ems": null
    },
    {
      "latitude": 51.901794,
      "longitude": 17.35054,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452395,
      "ems": null
    },
    {
      "latitude": 51.900925,
      "longitude": 17.352753,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452398,
      "ems": null
    },
    {
      "latitude": 51.900112,
      "longitude": 17.354788,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452401,
      "ems": null
    },
    {
      "latitude": 51.899506,
      "longitude": 17.356358,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664452403,
      "ems": null
    },
    {
      "latitude": 51.898636,
      "longitude": 17.358322,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452407,
      "ems": null
    },
    {
      "latitude": 51.898041,
      "longitude": 17.359772,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452409,
      "ems": null
    },
    {
      "latitude": 51.897079,
      "longitude": 17.361908,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664452413,
      "ems": null
    },
    {
      "latitude": 51.896343,
      "longitude": 17.363657,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664452416,
      "ems": null
    },
    {
      "latitude": 51.89555,
      "longitude": 17.365305,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664452418,
      "ems": null
    },
    {
      "latitude": 51.894573,
      "longitude": 17.367188,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664452422,
      "ems": null
    },
    {
      "latitude": 51.893829,
      "longitude": 17.368622,
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664452424,
      "ems": null
    },
    {
      "latitude": 51.892822,
      "longitude": 17.370794,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664452428,
      "ems": null
    },
    {
      "latitude": 51.892151,
      "longitude": 17.372284,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664452430,
      "ems": null
    },
    {
      "latitude": 51.890709,
      "longitude": 17.375946,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664452436,
      "ems": null
    },
    {
      "latitude": 51.889683,
      "longitude": 17.378769,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452443,
      "ems": null
    },
    {
      "latitude": 51.888977,
      "longitude": 17.380669,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452446,
      "ems": null
    },
    {
      "latitude": 51.887405,
      "longitude": 17.385025,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452451,
      "ems": null
    },
    {
      "latitude": 51.88652,
      "longitude": 17.387543,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452455,
      "ems": null
    },
    {
      "latitude": 51.885818,
      "longitude": 17.389353,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664452458,
      "ems": null
    },
    {
      "latitude": 51.885075,
      "longitude": 17.391434,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664452461,
      "ems": null
    },
    {
      "latitude": 51.883774,
      "longitude": 17.394943,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664452466,
      "ems": null
    },
    {
      "latitude": 51.882706,
      "longitude": 17.397593,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452473,
      "ems": null
    },
    {
      "latitude": 51.880886,
      "longitude": 17.401886,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664452478,
      "ems": null
    },
    {
      "latitude": 51.879089,
      "longitude": 17.4065,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664452485,
      "ems": null
    },
    {
      "latitude": 51.877861,
      "longitude": 17.409973,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452491,
      "ems": null
    },
    {
      "latitude": 51.876434,
      "longitude": 17.414146,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452497,
      "ems": null
    },
    {
      "latitude": 51.875748,
      "longitude": 17.416225,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452500,
      "ems": null
    },
    {
      "latitude": 51.875114,
      "longitude": 17.41806,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452503,
      "ems": null
    },
    {
      "latitude": 51.873856,
      "longitude": 17.421494,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452508,
      "ems": null
    },
    {
      "latitude": 51.872272,
      "longitude": 17.425766,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664452515,
      "ems": null
    },
    {
      "latitude": 51.870876,
      "longitude": 17.429276,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452521,
      "ems": null
    },
    {
      "latitude": 51.870041,
      "longitude": 17.431412,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664452524,
      "ems": null
    },
    {
      "latitude": 51.869385,
      "longitude": 17.433002,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664452526,
      "ems": null
    },
    {
      "latitude": 51.868362,
      "longitude": 17.435379,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452530,
      "ems": null
    },
    {
      "latitude": 51.867645,
      "longitude": 17.437084,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1664452533,
      "ems": null
    },
    {
      "latitude": 51.866776,
      "longitude": 17.439014,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664452536,
      "ems": null
    },
    {
      "latitude": 51.866177,
      "longitude": 17.440262,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1664452539,
      "ems": null
    },
    {
      "latitude": 51.865105,
      "longitude": 17.442627,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664452542,
      "ems": null
    },
    {
      "latitude": 51.864304,
      "longitude": 17.44421,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664452545,
      "ems": null
    },
    {
      "latitude": 51.863434,
      "longitude": 17.44614,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664452548,
      "ems": null
    },
    {
      "latitude": 51.86261,
      "longitude": 17.447773,
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664452551,
      "ems": null
    },
    {
      "latitude": 51.861053,
      "longitude": 17.451172,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664452557,
      "ems": null
    },
    {
      "latitude": 51.859543,
      "longitude": 17.45542,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452563,
      "ems": null
    },
    {
      "latitude": 51.859287,
      "longitude": 17.456284,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452565,
      "ems": null
    },
    {
      "latitude": 51.858356,
      "longitude": 17.459259,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452569,
      "ems": null
    },
    {
      "latitude": 51.857983,
      "longitude": 17.46048,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452571,
      "ems": null
    },
    {
      "latitude": 51.857098,
      "longitude": 17.463226,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452575,
      "ems": null
    },
    {
      "latitude": 51.856354,
      "longitude": 17.465286,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452578,
      "ems": null
    },
    {
      "latitude": 51.855934,
      "longitude": 17.46666,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452580,
      "ems": null
    },
    {
      "latitude": 51.85437,
      "longitude": 17.471306,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452587,
      "ems": null
    },
    {
      "latitude": 51.854259,
      "longitude": 17.471619,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452588,
      "ems": null
    },
    {
      "latitude": 51.852219,
      "longitude": 17.477318,
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664452597,
      "ems": null
    },
    {
      "latitude": 51.851532,
      "longitude": 17.479025,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452599,
      "ems": null
    },
    {
      "latitude": 51.850021,
      "longitude": 17.482986,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452605,
      "ems": null
    },
    {
      "latitude": 51.848671,
      "longitude": 17.48642,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452612,
      "ems": null
    },
    {
      "latitude": 51.847321,
      "longitude": 17.490011,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452617,
      "ems": null
    },
    {
      "latitude": 51.846542,
      "longitude": 17.492016,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452620,
      "ems": null
    },
    {
      "latitude": 51.845226,
      "longitude": 17.495117,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664452625,
      "ems": null
    },
    {
      "latitude": 51.843693,
      "longitude": 17.499084,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1664452631,
      "ems": null
    },
    {
      "latitude": 51.842377,
      "longitude": 17.503374,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452638,
      "ems": null
    },
    {
      "latitude": 51.841736,
      "longitude": 17.505798,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452641,
      "ems": null
    },
    {
      "latitude": 51.841232,
      "longitude": 17.507679,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452644,
      "ems": null
    },
    {
      "latitude": 51.840664,
      "longitude": 17.509918,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452647,
      "ems": null
    },
    {
      "latitude": 51.840134,
      "longitude": 17.511984,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664452650,
      "ems": null
    },
    {
      "latitude": 51.839546,
      "longitude": 17.514038,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664452653,
      "ems": null
    },
    {
      "latitude": 51.839314,
      "longitude": 17.514877,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452654,
      "ems": null
    },
    {
      "latitude": 51.83857,
      "longitude": 17.517166,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452657,
      "ems": null
    },
    {
      "latitude": 51.836987,
      "longitude": 17.522278,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452665,
      "ems": null
    },
    {
      "latitude": 51.83606,
      "longitude": 17.524975,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452669,
      "ems": null
    },
    {
      "latitude": 51.835373,
      "longitude": 17.526979,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452672,
      "ems": null
    },
    {
      "latitude": 51.834751,
      "longitude": 17.528915,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452675,
      "ems": null
    },
    {
      "latitude": 51.834091,
      "longitude": 17.53084,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664452678,
      "ems": null
    },
    {
      "latitude": 51.833359,
      "longitude": 17.53277,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452681,
      "ems": null
    },
    {
      "latitude": 51.831913,
      "longitude": 17.53685,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452687,
      "ems": null
    },
    {
      "latitude": 51.831161,
      "longitude": 17.538931,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452690,
      "ems": null
    },
    {
      "latitude": 51.829727,
      "longitude": 17.542877,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452696,
      "ems": null
    },
    {
      "latitude": 51.828369,
      "longitude": 17.546576,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1664452702,
      "ems": null
    },
    {
      "latitude": 51.826748,
      "longitude": 17.550812,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1664452708,
      "ems": null
    },
    {
      "latitude": 51.825535,
      "longitude": 17.554169,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664452714,
      "ems": null
    },
    {
      "latitude": 51.823952,
      "longitude": 17.558746,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452720,
      "ems": null
    },
    {
      "latitude": 51.823334,
      "longitude": 17.560829,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452723,
      "ems": null
    },
    {
      "latitude": 51.822739,
      "longitude": 17.562834,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452726,
      "ems": null
    },
    {
      "latitude": 51.822235,
      "longitude": 17.56469,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664452729,
      "ems": null
    },
    {
      "latitude": 51.82164,
      "longitude": 17.567064,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452732,
      "ems": null
    },
    {
      "latitude": 51.821457,
      "longitude": 17.567732,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452735,
      "ems": null
    },
    {
      "latitude": 51.820816,
      "longitude": 17.570404,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452737,
      "ems": null
    },
    {
      "latitude": 51.820137,
      "longitude": 17.57309,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452741,
      "ems": null
    },
    {
      "latitude": 51.81958,
      "longitude": 17.57523,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452744,
      "ems": null
    },
    {
      "latitude": 51.819031,
      "longitude": 17.577383,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452747,
      "ems": null
    },
    {
      "latitude": 51.818069,
      "longitude": 17.581244,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1664452753,
      "ems": null
    },
    {
      "latitude": 51.817108,
      "longitude": 17.585068,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452759,
      "ems": null
    },
    {
      "latitude": 51.816101,
      "longitude": 17.589483,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664452765,
      "ems": null
    },
    {
      "latitude": 51.81514,
      "longitude": 17.593342,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664452771,
      "ems": null
    },
    {
      "latitude": 51.813858,
      "longitude": 17.598019,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664452777,
      "ems": null
    },
    {
      "latitude": 51.8125,
      "longitude": 17.602768,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452783,
      "ems": null
    },
    {
      "latitude": 51.811337,
      "longitude": 17.606812,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452789,
      "ems": null
    },
    {
      "latitude": 51.810608,
      "longitude": 17.609303,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452792,
      "ems": null
    },
    {
      "latitude": 51.809986,
      "longitude": 17.611313,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452795,
      "ems": null
    },
    {
      "latitude": 51.809151,
      "longitude": 17.613983,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452801,
      "ems": null
    },
    {
      "latitude": 51.807472,
      "longitude": 17.619247,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452807,
      "ems": null
    },
    {
      "latitude": 51.806263,
      "longitude": 17.622757,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452812,
      "ems": null
    },
    {
      "latitude": 51.804913,
      "longitude": 17.626953,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452819,
      "ems": null
    },
    {
      "latitude": 51.803467,
      "longitude": 17.631275,
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664452825,
      "ems": null
    },
    {
      "latitude": 51.802231,
      "longitude": 17.635357,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452831,
      "ems": null
    },
    {
      "latitude": 51.801041,
      "longitude": 17.639366,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452837,
      "ems": null
    },
    {
      "latitude": 51.799747,
      "longitude": 17.643585,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664452844,
      "ems": null
    },
    {
      "latitude": 51.798477,
      "longitude": 17.647532,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664452849,
      "ems": null
    },
    {
      "latitude": 51.797241,
      "longitude": 17.651541,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1664452855,
      "ems": null
    },
    {
      "latitude": 51.79686,
      "longitude": 17.653046,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664452858,
      "ems": null
    },
    {
      "latitude": 51.796463,
      "longitude": 17.655401,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664452861,
      "ems": null
    },
    {
      "latitude": 51.796394,
      "longitude": 17.656479,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664452863,
      "ems": null
    },
    {
      "latitude": 51.79628,
      "longitude": 17.659483,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664452867,
      "ems": null
    },
    {
      "latitude": 51.79628,
      "longitude": 17.660969,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664452869,
      "ems": null
    },
    {
      "latitude": 51.796417,
      "longitude": 17.663788,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664452872,
      "ems": null
    },
    {
      "latitude": 51.796509,
      "longitude": 17.666016,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664452876,
      "ems": null
    },
    {
      "latitude": 51.796555,
      "longitude": 17.667797,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664452878,
      "ems": null
    },
    {
      "latitude": 51.796692,
      "longitude": 17.669653,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664452881,
      "ems": null
    },
    {
      "latitude": 51.796783,
      "longitude": 17.672325,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664452884,
      "ems": null
    },
    {
      "latitude": 51.79686,
      "longitude": 17.673416,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664452886,
      "ems": null
    },
    {
      "latitude": 51.796951,
      "longitude": 17.676315,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664452890,
      "ems": null
    },
    {
      "latitude": 51.796967,
      "longitude": 17.677076,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664452893,
      "ems": null
    },
    {
      "latitude": 51.797104,
      "longitude": 17.680788,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664452896,
      "ems": null
    },
    {
      "latitude": 51.797241,
      "longitude": 17.685019,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664452901,
      "ems": null
    },
    {
      "latitude": 51.797234,
      "longitude": 17.689743,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664452908,
      "ems": null
    },
    {
      "latitude": 51.797195,
      "longitude": 17.692293,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664452911,
      "ems": null
    },
    {
      "latitude": 51.797325,
      "longitude": 17.696762,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664452917,
      "ems": null
    },
    {
      "latitude": 51.797516,
      "longitude": 17.701721,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664452924,
      "ems": null
    },
    {
      "latitude": 51.797699,
      "longitude": 17.707289,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664452931,
      "ems": null
    },
    {
      "latitude": 51.797699,
      "longitude": 17.712097,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664452937,
      "ems": null
    },
    {
      "latitude": 51.797653,
      "longitude": 17.717012,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664452943,
      "ems": null
    },
    {
      "latitude": 51.797512,
      "longitude": 17.720413,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664452948,
      "ems": null
    },
    {
      "latitude": 51.797466,
      "longitude": 17.722092,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664452950,
      "ems": null
    },
    {
      "latitude": 51.797325,
      "longitude": 17.724686,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664452953,
      "ems": null
    },
    {
      "latitude": 51.797195,
      "longitude": 17.727182,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664452957,
      "ems": null
    },
    {
      "latitude": 51.797012,
      "longitude": 17.729261,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664452959,
      "ems": null
    },
    {
      "latitude": 51.796875,
      "longitude": 17.73134,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664452963,
      "ems": null
    },
    {
      "latitude": 51.796673,
      "longitude": 17.733917,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664452966,
      "ems": null
    },
    {
      "latitude": 51.796509,
      "longitude": 17.73609,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664452969,
      "ems": null
    },
    {
      "latitude": 51.796253,
      "longitude": 17.738419,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664452972,
      "ems": null
    },
    {
      "latitude": 51.796051,
      "longitude": 17.740471,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664452974,
      "ems": null
    },
    {
      "latitude": 51.795731,
      "longitude": 17.742994,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664452978,
      "ems": null
    },
    {
      "latitude": 51.795502,
      "longitude": 17.74522,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664452981,
      "ems": null
    },
    {
      "latitude": 51.795231,
      "longitude": 17.747345,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664452984,
      "ems": null
    },
    {
      "latitude": 51.794998,
      "longitude": 17.749557,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664452987,
      "ems": null
    },
    {
      "latitude": 51.794487,
      "longitude": 17.753983,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664452993,
      "ems": null
    },
    {
      "latitude": 51.794083,
      "longitude": 17.758434,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664452999,
      "ems": null
    },
    {
      "latitude": 51.793671,
      "longitude": 17.763186,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453005,
      "ems": null
    },
    {
      "latitude": 51.793274,
      "longitude": 17.767563,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453011,
      "ems": null
    },
    {
      "latitude": 51.792892,
      "longitude": 17.771795,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453016,
      "ems": null
    },
    {
      "latitude": 51.792763,
      "longitude": 17.774811,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664453020,
      "ems": null
    },
    {
      "latitude": 51.792709,
      "longitude": 17.776472,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664453023,
      "ems": null
    },
    {
      "latitude": 51.792622,
      "longitude": 17.779388,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664453026,
      "ems": null
    },
    {
      "latitude": 51.792576,
      "longitude": 17.780151,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664453029,
      "ems": null
    },
    {
      "latitude": 51.79253,
      "longitude": 17.784119,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453032,
      "ems": null
    },
    {
      "latitude": 51.792526,
      "longitude": 17.786568,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664453035,
      "ems": null
    },
    {
      "latitude": 51.792526,
      "longitude": 17.78887,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664453038,
      "ems": null
    },
    {
      "latitude": 51.79253,
      "longitude": 17.790985,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664453041,
      "ems": null
    },
    {
      "latitude": 51.792572,
      "longitude": 17.793768,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664453044,
      "ems": null
    },
    {
      "latitude": 51.79253,
      "longitude": 17.796783,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664453048,
      "ems": null
    },
    {
      "latitude": 51.792389,
      "longitude": 17.802305,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453056,
      "ems": null
    },
    {
      "latitude": 51.792297,
      "longitude": 17.806931,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453061,
      "ems": null
    },
    {
      "latitude": 51.792156,
      "longitude": 17.812119,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664453068,
      "ems": null
    },
    {
      "latitude": 51.791931,
      "longitude": 17.817152,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453074,
      "ems": null
    },
    {
      "latitude": 51.791656,
      "longitude": 17.821606,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453080,
      "ems": null
    },
    {
      "latitude": 51.791458,
      "longitude": 17.824326,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453083,
      "ems": null
    },
    {
      "latitude": 51.79129,
      "longitude": 17.826283,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453086,
      "ems": null
    },
    {
      "latitude": 51.791061,
      "longitude": 17.828583,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453089,
      "ems": null
    },
    {
      "latitude": 51.790833,
      "longitude": 17.831329,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453092,
      "ems": null
    },
    {
      "latitude": 51.790649,
      "longitude": 17.833334,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453095,
      "ems": null
    },
    {
      "latitude": 51.790249,
      "longitude": 17.83844,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453101,
      "ems": null
    },
    {
      "latitude": 51.789963,
      "longitude": 17.84306,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664453107,
      "ems": null
    },
    {
      "latitude": 51.789917,
      "longitude": 17.845509,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664453110,
      "ems": null
    },
    {
      "latitude": 51.789734,
      "longitude": 17.850555,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453116,
      "ems": null
    },
    {
      "latitude": 51.789459,
      "longitude": 17.855988,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453122,
      "ems": null
    },
    {
      "latitude": 51.78923,
      "longitude": 17.860651,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664453128,
      "ems": null
    },
    {
      "latitude": 51.78904,
      "longitude": 17.865829,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664453134,
      "ems": null
    },
    {
      "latitude": 51.788807,
      "longitude": 17.870331,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453140,
      "ems": null
    },
    {
      "latitude": 51.788544,
      "longitude": 17.872826,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453143,
      "ems": null
    },
    {
      "latitude": 51.788296,
      "longitude": 17.874756,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453145,
      "ems": null
    },
    {
      "latitude": 51.787994,
      "longitude": 17.877205,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453148,
      "ems": null
    },
    {
      "latitude": 51.787735,
      "longitude": 17.879105,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453151,
      "ems": null
    },
    {
      "latitude": 51.78727,
      "longitude": 17.882462,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664453155,
      "ems": null
    },
    {
      "latitude": 51.787083,
      "longitude": 17.883911,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453158,
      "ems": null
    },
    {
      "latitude": 51.786758,
      "longitude": 17.886658,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453160,
      "ems": null
    },
    {
      "latitude": 51.78653,
      "longitude": 17.888712,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453163,
      "ems": null
    },
    {
      "latitude": 51.786247,
      "longitude": 17.891083,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453166,
      "ems": null
    },
    {
      "latitude": 51.785706,
      "longitude": 17.895319,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453173,
      "ems": null
    },
    {
      "latitude": 51.78511,
      "longitude": 17.901554,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453178,
      "ems": null
    },
    {
      "latitude": 51.784515,
      "longitude": 17.906973,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453185,
      "ems": null
    },
    {
      "latitude": 51.784058,
      "longitude": 17.912094,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453191,
      "ems": null
    },
    {
      "latitude": 51.783501,
      "longitude": 17.916946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453197,
      "ems": null
    },
    {
      "latitude": 51.78294,
      "longitude": 17.92244,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453203,
      "ems": null
    },
    {
      "latitude": 51.782429,
      "longitude": 17.927322,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453209,
      "ems": null
    },
    {
      "latitude": 51.781776,
      "longitude": 17.932358,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453215,
      "ems": null
    },
    {
      "latitude": 51.781403,
      "longitude": 17.936554,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453220,
      "ems": null
    },
    {
      "latitude": 51.780937,
      "longitude": 17.942429,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453227,
      "ems": null
    },
    {
      "latitude": 51.780579,
      "longitude": 17.945944,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453233,
      "ems": null
    },
    {
      "latitude": 51.779572,
      "longitude": 17.954184,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453242,
      "ems": null
    },
    {
      "latitude": 51.778656,
      "longitude": 17.962498,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453251,
      "ems": null
    },
    {
      "latitude": 51.77774,
      "longitude": 17.970293,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453260,
      "ems": null
    },
    {
      "latitude": 51.777145,
      "longitude": 17.97497,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453266,
      "ems": null
    },
    {
      "latitude": 51.776505,
      "longitude": 17.979645,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664453273,
      "ems": null
    },
    {
      "latitude": 51.775681,
      "longitude": 17.984991,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664453279,
      "ems": null
    },
    {
      "latitude": 51.775398,
      "longitude": 17.986908,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664453281,
      "ems": null
    },
    {
      "latitude": 51.774582,
      "longitude": 17.991894,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664453287,
      "ems": null
    },
    {
      "latitude": 51.774002,
      "longitude": 17.996368,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453293,
      "ems": null
    },
    {
      "latitude": 51.773392,
      "longitude": 18.001247,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453299,
      "ems": null
    },
    {
      "latitude": 51.772888,
      "longitude": 18.005775,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453305,
      "ems": null
    },
    {
      "latitude": 51.772606,
      "longitude": 18.008194,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453308,
      "ems": null
    },
    {
      "latitude": 51.772373,
      "longitude": 18.010559,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453311,
      "ems": null
    },
    {
      "latitude": 51.771835,
      "longitude": 18.015129,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453317,
      "ems": null
    },
    {
      "latitude": 51.771423,
      "longitude": 18.019434,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453323,
      "ems": null
    },
    {
      "latitude": 51.770836,
      "longitude": 18.024521,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453329,
      "ems": null
    },
    {
      "latitude": 51.770233,
      "longitude": 18.029251,
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453335,
      "ems": null
    },
    {
      "latitude": 51.769627,
      "longitude": 18.033676,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664453341,
      "ems": null
    },
    {
      "latitude": 51.768906,
      "longitude": 18.03866,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664453347,
      "ems": null
    },
    {
      "latitude": 51.768585,
      "longitude": 18.040888,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664453351,
      "ems": null
    },
    {
      "latitude": 51.767853,
      "longitude": 18.045416,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664453356,
      "ems": null
    },
    {
      "latitude": 51.767204,
      "longitude": 18.049469,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664453362,
      "ems": null
    },
    {
      "latitude": 51.766342,
      "longitude": 18.054249,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664453369,
      "ems": null
    },
    {
      "latitude": 51.765484,
      "longitude": 18.058853,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664453375,
      "ems": null
    },
    {
      "latitude": 51.764832,
      "longitude": 18.063278,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453380,
      "ems": null
    },
    {
      "latitude": 51.764694,
      "longitude": 18.065828,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664453383,
      "ems": null
    },
    {
      "latitude": 51.764648,
      "longitude": 18.068205,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453386,
      "ems": null
    },
    {
      "latitude": 51.764645,
      "longitude": 18.070602,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453389,
      "ems": null
    },
    {
      "latitude": 51.764645,
      "longitude": 18.073044,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664453392,
      "ems": null
    },
    {
      "latitude": 51.764645,
      "longitude": 18.075562,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664453395,
      "ems": null
    },
    {
      "latitude": 51.764603,
      "longitude": 18.0783,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664453399,
      "ems": null
    },
    {
      "latitude": 51.764599,
      "longitude": 18.080597,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664453401,
      "ems": null
    },
    {
      "latitude": 51.764603,
      "longitude": 18.082977,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453404,
      "ems": null
    },
    {
      "latitude": 51.764557,
      "longitude": 18.085501,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453407,
      "ems": null
    },
    {
      "latitude": 51.764465,
      "longitude": 18.090919,
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664453414,
      "ems": null
    },
    {
      "latitude": 51.76432,
      "longitude": 18.096008,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453420,
      "ems": null
    },
    {
      "latitude": 51.764179,
      "longitude": 18.098221,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664453422,
      "ems": null
    },
    {
      "latitude": 51.763947,
      "longitude": 18.10318,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453428,
      "ems": null
    },
    {
      "latitude": 51.763714,
      "longitude": 18.108215,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453435,
      "ems": null
    },
    {
      "latitude": 51.763527,
      "longitude": 18.113251,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664453441,
      "ems": null
    },
    {
      "latitude": 51.763275,
      "longitude": 18.117939,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453447,
      "ems": null
    },
    {
      "latitude": 51.763016,
      "longitude": 18.122482,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664453452,
      "ems": null
    },
    {
      "latitude": 51.762726,
      "longitude": 18.127516,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453459,
      "ems": null
    },
    {
      "latitude": 51.762363,
      "longitude": 18.132172,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453465,
      "ems": null
    },
    {
      "latitude": 51.761993,
      "longitude": 18.136795,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453471,
      "ems": null
    },
    {
      "latitude": 51.761665,
      "longitude": 18.141632,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664453477,
      "ems": null
    },
    {
      "latitude": 51.761261,
      "longitude": 18.146593,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453483,
      "ems": null
    },
    {
      "latitude": 51.760876,
      "longitude": 18.151321,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453489,
      "ems": null
    },
    {
      "latitude": 51.760529,
      "longitude": 18.155947,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453494,
      "ems": null
    },
    {
      "latitude": 51.760128,
      "longitude": 18.161087,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453501,
      "ems": null
    },
    {
      "latitude": 51.75975,
      "longitude": 18.165894,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453507,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 18.170496,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453513,
      "ems": null
    },
    {
      "latitude": 51.758926,
      "longitude": 18.175024,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453519,
      "ems": null
    },
    {
      "latitude": 51.758549,
      "longitude": 18.179321,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453525,
      "ems": null
    },
    {
      "latitude": 51.758034,
      "longitude": 18.183975,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453531,
      "ems": null
    },
    {
      "latitude": 51.757523,
      "longitude": 18.188705,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453537,
      "ems": null
    },
    {
      "latitude": 51.757057,
      "longitude": 18.192902,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453543,
      "ems": null
    },
    {
      "latitude": 51.756546,
      "longitude": 18.197327,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453549,
      "ems": null
    },
    {
      "latitude": 51.756035,
      "longitude": 18.202057,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453555,
      "ems": null
    },
    {
      "latitude": 51.755493,
      "longitude": 18.206499,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664453561,
      "ems": null
    },
    {
      "latitude": 51.754852,
      "longitude": 18.211248,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664453567,
      "ems": null
    },
    {
      "latitude": 51.754303,
      "longitude": 18.215258,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664453573,
      "ems": null
    },
    {
      "latitude": 51.753521,
      "longitude": 18.220825,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664453579,
      "ems": null
    },
    {
      "latitude": 51.753147,
      "longitude": 18.223038,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664453582,
      "ems": null
    },
    {
      "latitude": 51.752308,
      "longitude": 18.228378,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664453588,
      "ems": null
    },
    {
      "latitude": 51.751923,
      "longitude": 18.232183,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453593,
      "ems": null
    },
    {
      "latitude": 51.751785,
      "longitude": 18.234484,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453595,
      "ems": null
    },
    {
      "latitude": 51.751694,
      "longitude": 18.238047,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453599,
      "ems": null
    },
    {
      "latitude": 51.751694,
      "longitude": 18.240868,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664453603,
      "ems": null
    },
    {
      "latitude": 51.751694,
      "longitude": 18.243244,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453606,
      "ems": null
    },
    {
      "latitude": 51.751602,
      "longitude": 18.245768,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664453609,
      "ems": null
    },
    {
      "latitude": 51.751518,
      "longitude": 18.248367,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664453612,
      "ems": null
    },
    {
      "latitude": 51.751423,
      "longitude": 18.250427,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453614,
      "ems": null
    },
    {
      "latitude": 51.751053,
      "longitude": 18.255997,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453621,
      "ems": null
    },
    {
      "latitude": 51.750687,
      "longitude": 18.26091,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453627,
      "ems": null
    },
    {
      "latitude": 51.750504,
      "longitude": 18.263287,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453630,
      "ems": null
    },
    {
      "latitude": 51.750355,
      "longitude": 18.265686,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453633,
      "ems": null
    },
    {
      "latitude": 51.750183,
      "longitude": 18.267815,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453636,
      "ems": null
    },
    {
      "latitude": 51.749844,
      "longitude": 18.272629,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453642,
      "ems": null
    },
    {
      "latitude": 51.749561,
      "longitude": 18.276443,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664453647,
      "ems": null
    },
    {
      "latitude": 51.749268,
      "longitude": 18.281918,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453654,
      "ems": null
    },
    {
      "latitude": 51.749084,
      "longitude": 18.28511,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453659,
      "ems": null
    },
    {
      "latitude": 51.748676,
      "longitude": 18.290863,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453666,
      "ems": null
    },
    {
      "latitude": 51.748306,
      "longitude": 18.295502,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664453672,
      "ems": null
    },
    {
      "latitude": 51.747841,
      "longitude": 18.300171,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453678,
      "ems": null
    },
    {
      "latitude": 51.747437,
      "longitude": 18.304707,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453684,
      "ems": null
    },
    {
      "latitude": 51.747025,
      "longitude": 18.309309,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453690,
      "ems": null
    },
    {
      "latitude": 51.746658,
      "longitude": 18.31406,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664453696,
      "ems": null
    },
    {
      "latitude": 51.746395,
      "longitude": 18.318939,
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664453702,
      "ems": null
    },
    {
      "latitude": 51.746025,
      "longitude": 18.323135,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453708,
      "ems": null
    },
    {
      "latitude": 51.745514,
      "longitude": 18.328476,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453714,
      "ems": null
    },
    {
      "latitude": 51.745049,
      "longitude": 18.332977,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453720,
      "ems": null
    },
    {
      "latitude": 51.744232,
      "longitude": 18.340265,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453729,
      "ems": null
    },
    {
      "latitude": 51.743881,
      "longitude": 18.343811,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453734,
      "ems": null
    },
    {
      "latitude": 51.743183,
      "longitude": 18.350143,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664453741,
      "ems": null
    },
    {
      "latitude": 51.742626,
      "longitude": 18.355255,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453747,
      "ems": null
    },
    {
      "latitude": 51.742115,
      "longitude": 18.360672,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453754,
      "ems": null
    },
    {
      "latitude": 51.741695,
      "longitude": 18.365402,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664453759,
      "ems": null
    },
    {
      "latitude": 51.741211,
      "longitude": 18.369957,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453765,
      "ems": null
    },
    {
      "latitude": 51.740765,
      "longitude": 18.374405,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453771,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 18.379608,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1664453777,
      "ems": null
    },
    {
      "latitude": 51.739834,
      "longitude": 18.384094,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664453783,
      "ems": null
    },
    {
      "latitude": 51.739563,
      "longitude": 18.389109,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664453789,
      "ems": null
    },
    {
      "latitude": 51.739471,
      "longitude": 18.391485,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664453792,
      "ems": null
    },
    {
      "latitude": 51.739555,
      "longitude": 18.393707,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664453795,
      "ems": null
    },
    {
      "latitude": 51.739792,
      "longitude": 18.396088,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664453799,
      "ems": null
    },
    {
      "latitude": 51.740112,
      "longitude": 18.398361,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664453801,
      "ems": null
    },
    {
      "latitude": 51.740479,
      "longitude": 18.400616,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664453804,
      "ems": null
    },
    {
      "latitude": 51.740982,
      "longitude": 18.402916,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1664453807,
      "ems": null
    },
    {
      "latitude": 51.741577,
      "longitude": 18.405069,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664453810,
      "ems": null
    },
    {
      "latitude": 51.742207,
      "longitude": 18.40744,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664453813,
      "ems": null
    },
    {
      "latitude": 51.742722,
      "longitude": 18.4093,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664453816,
      "ems": null
    },
    {
      "latitude": 51.743362,
      "longitude": 18.411749,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664453819,
      "ems": null
    },
    {
      "latitude": 51.743958,
      "longitude": 18.414125,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664453822,
      "ems": null
    },
    {
      "latitude": 51.744644,
      "longitude": 18.416649,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664453826,
      "ems": null
    },
    {
      "latitude": 51.745094,
      "longitude": 18.418579,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664453828,
      "ems": null
    },
    {
      "latitude": 51.746109,
      "longitude": 18.42333,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664453834,
      "ems": null
    },
    {
      "latitude": 51.747116,
      "longitude": 18.427784,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664453840,
      "ems": null
    },
    {
      "latitude": 51.748165,
      "longitude": 18.432617,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664453846,
      "ems": null
    },
    {
      "latitude": 51.748672,
      "longitude": 18.435207,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664453850,
      "ems": null
    },
    {
      "latitude": 51.74905,
      "longitude": 18.437347,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664453852,
      "ems": null
    },
    {
      "latitude": 51.749405,
      "longitude": 18.439884,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664453856,
      "ems": null
    },
    {
      "latitude": 51.749771,
      "longitude": 18.442259,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664453858,
      "ems": null
    },
    {
      "latitude": 51.750504,
      "longitude": 18.446787,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664453864,
      "ems": null
    },
    {
      "latitude": 51.75087,
      "longitude": 18.449163,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664453868,
      "ems": null
    },
    {
      "latitude": 51.75124,
      "longitude": 18.451614,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664453870,
      "ems": null
    },
    {
      "latitude": 51.751648,
      "longitude": 18.453987,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664453874,
      "ems": null
    },
    {
      "latitude": 51.752449,
      "longitude": 18.458633,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664453880,
      "ems": null
    },
    {
      "latitude": 51.753193,
      "longitude": 18.463211,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664453886,
      "ems": null
    },
    {
      "latitude": 51.753845,
      "longitude": 18.467794,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664453892,
      "ems": null
    },
    {
      "latitude": 51.754452,
      "longitude": 18.472214,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664453897,
      "ems": null
    },
    {
      "latitude": 51.755009,
      "longitude": 18.476486,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664453903,
      "ems": null
    },
    {
      "latitude": 51.75563,
      "longitude": 18.481379,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664453909,
      "ems": null
    },
    {
      "latitude": 51.756268,
      "longitude": 18.485489,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664453915,
      "ems": null
    },
    {
      "latitude": 51.756916,
      "longitude": 18.490601,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664453922,
      "ems": null
    },
    {
      "latitude": 51.757416,
      "longitude": 18.49489,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664453927,
      "ems": null
    },
    {
      "latitude": 51.757965,
      "longitude": 18.499863,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664453934,
      "ems": null
    },
    {
      "latitude": 51.758408,
      "longitude": 18.504562,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664453940,
      "ems": null
    },
    {
      "latitude": 51.758652,
      "longitude": 18.506767,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664453943,
      "ems": null
    },
    {
      "latitude": 51.759151,
      "longitude": 18.511353,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664453949,
      "ems": null
    },
    {
      "latitude": 51.759617,
      "longitude": 18.516159,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664453955,
      "ems": null
    },
    {
      "latitude": 51.760071,
      "longitude": 18.521168,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664453961,
      "ems": null
    },
    {
      "latitude": 51.760529,
      "longitude": 18.526587,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664453967,
      "ems": null
    },
    {
      "latitude": 51.760921,
      "longitude": 18.531723,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664453973,
      "ems": null
    },
    {
      "latitude": 51.761215,
      "longitude": 18.537201,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664453979,
      "ems": null
    },
    {
      "latitude": 51.761353,
      "longitude": 18.539801,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664453982,
      "ems": null
    },
    {
      "latitude": 51.761574,
      "longitude": 18.544922,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664453988,
      "ems": null
    },
    {
      "latitude": 51.761806,
      "longitude": 18.549881,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664453993,
      "ems": null
    },
    {
      "latitude": 51.762131,
      "longitude": 18.555527,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454000,
      "ems": null
    },
    {
      "latitude": 51.76236,
      "longitude": 18.560511,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454006,
      "ems": null
    },
    {
      "latitude": 51.762505,
      "longitude": 18.565674,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664454012,
      "ems": null
    },
    {
      "latitude": 51.762642,
      "longitude": 18.570633,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664454018,
      "ems": null
    },
    {
      "latitude": 51.762642,
      "longitude": 18.575439,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664454024,
      "ems": null
    },
    {
      "latitude": 51.762642,
      "longitude": 18.577194,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1664454027,
      "ems": null
    },
    {
      "latitude": 51.762596,
      "longitude": 18.580322,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664454029,
      "ems": null
    },
    {
      "latitude": 51.762505,
      "longitude": 18.583603,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664454033,
      "ems": null
    },
    {
      "latitude": 51.762363,
      "longitude": 18.585968,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664454035,
      "ems": null
    },
    {
      "latitude": 51.762272,
      "longitude": 18.588562,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664454038,
      "ems": null
    },
    {
      "latitude": 51.762085,
      "longitude": 18.591465,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664454042,
      "ems": null
    },
    {
      "latitude": 51.761902,
      "longitude": 18.594212,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664454045,
      "ems": null
    },
    {
      "latitude": 51.761806,
      "longitude": 18.595886,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664454047,
      "ems": null
    },
    {
      "latitude": 51.76162,
      "longitude": 18.598175,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664454051,
      "ems": null
    },
    {
      "latitude": 51.761387,
      "longitude": 18.601074,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664454054,
      "ems": null
    },
    {
      "latitude": 51.761124,
      "longitude": 18.603937,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664454057,
      "ems": null
    },
    {
      "latitude": 51.760941,
      "longitude": 18.605865,
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664454059,
      "ems": null
    },
    {
      "latitude": 51.760803,
      "longitude": 18.610989,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454066,
      "ems": null
    },
    {
      "latitude": 51.760921,
      "longitude": 18.61351,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454069,
      "ems": null
    },
    {
      "latitude": 51.761063,
      "longitude": 18.615875,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454072,
      "ems": null
    },
    {
      "latitude": 51.7612,
      "longitude": 18.618317,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454075,
      "ems": null
    },
    {
      "latitude": 51.761295,
      "longitude": 18.620453,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664454078,
      "ems": null
    },
    {
      "latitude": 51.761387,
      "longitude": 18.623276,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454081,
      "ems": null
    },
    {
      "latitude": 51.761478,
      "longitude": 18.625336,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454084,
      "ems": null
    },
    {
      "latitude": 51.761627,
      "longitude": 18.627691,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454087,
      "ems": null
    },
    {
      "latitude": 51.761719,
      "longitude": 18.629917,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454089,
      "ems": null
    },
    {
      "latitude": 51.761852,
      "longitude": 18.632889,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454093,
      "ems": null
    },
    {
      "latitude": 51.762039,
      "longitude": 18.637638,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454099,
      "ems": null
    },
    {
      "latitude": 51.762226,
      "longitude": 18.642273,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664454105,
      "ems": null
    },
    {
      "latitude": 51.762451,
      "longitude": 18.646769,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664454111,
      "ems": null
    },
    {
      "latitude": 51.762634,
      "longitude": 18.651222,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664454117,
      "ems": null
    },
    {
      "latitude": 51.762737,
      "longitude": 18.655624,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454123,
      "ems": null
    },
    {
      "latitude": 51.762909,
      "longitude": 18.660946,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454129,
      "ems": null
    },
    {
      "latitude": 51.763046,
      "longitude": 18.665253,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454135,
      "ems": null
    },
    {
      "latitude": 51.763107,
      "longitude": 18.670349,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454141,
      "ems": null
    },
    {
      "latitude": 51.763294,
      "longitude": 18.676605,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454148,
      "ems": null
    },
    {
      "latitude": 51.763435,
      "longitude": 18.684464,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664454158,
      "ems": null
    },
    {
      "latitude": 51.763481,
      "longitude": 18.68988,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664454166,
      "ems": null
    },
    {
      "latitude": 51.763596,
      "longitude": 18.696651,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664454174,
      "ems": null
    },
    {
      "latitude": 51.763687,
      "longitude": 18.701775,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454180,
      "ems": null
    },
    {
      "latitude": 51.76387,
      "longitude": 18.706005,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664454186,
      "ems": null
    },
    {
      "latitude": 51.764225,
      "longitude": 18.710861,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454192,
      "ems": null
    },
    {
      "latitude": 51.764328,
      "longitude": 18.712166,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454194,
      "ems": null
    },
    {
      "latitude": 51.764507,
      "longitude": 18.714371,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664454198,
      "ems": null
    },
    {
      "latitude": 51.764877,
      "longitude": 18.717499,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664454201,
      "ems": null
    },
    {
      "latitude": 51.76511,
      "longitude": 18.71994,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664454204,
      "ems": null
    },
    {
      "latitude": 51.765427,
      "longitude": 18.724712,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1664454210,
      "ems": null
    },
    {
      "latitude": 51.765518,
      "longitude": 18.728794,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1664454215,
      "ems": null
    },
    {
      "latitude": 51.765575,
      "longitude": 18.731918,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664454219,
      "ems": null
    },
    {
      "latitude": 51.765472,
      "longitude": 18.734138,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "squawk": "7000",
      "timestamp": 1664454222,
      "ems": null
    },
    {
      "latitude": 51.765343,
      "longitude": 18.736267,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664454225,
      "ems": null
    },
    {
      "latitude": 51.76511,
      "longitude": 18.73848,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1664454228,
      "ems": null
    },
    {
      "latitude": 51.764877,
      "longitude": 18.740921,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664454231,
      "ems": null
    },
    {
      "latitude": 51.764557,
      "longitude": 18.743343,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664454234,
      "ems": null
    },
    {
      "latitude": 51.764328,
      "longitude": 18.745199,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454237,
      "ems": null
    },
    {
      "latitude": 51.763947,
      "longitude": 18.747787,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454240,
      "ems": null
    },
    {
      "latitude": 51.763687,
      "longitude": 18.749802,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1664454243,
      "ems": null
    },
    {
      "latitude": 51.763367,
      "longitude": 18.752178,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664454246,
      "ems": null
    },
    {
      "latitude": 51.763046,
      "longitude": 18.754181,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454249,
      "ems": null
    },
    {
      "latitude": 51.762783,
      "longitude": 18.755646,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454251,
      "ems": null
    },
    {
      "latitude": 51.762318,
      "longitude": 18.758469,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454255,
      "ems": null
    },
    {
      "latitude": 51.761948,
      "longitude": 18.760862,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664454258,
      "ems": null
    },
    {
      "latitude": 51.761124,
      "longitude": 18.76539,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664454264,
      "ems": null
    },
    {
      "latitude": 51.760345,
      "longitude": 18.769844,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664454271,
      "ems": null
    },
    {
      "latitude": 51.75948,
      "longitude": 18.774643,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664454276,
      "ems": null
    },
    {
      "latitude": 51.758743,
      "longitude": 18.778975,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454282,
      "ems": null
    },
    {
      "latitude": 51.757942,
      "longitude": 18.783722,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1664454288,
      "ems": null
    },
    {
      "latitude": 51.757149,
      "longitude": 18.788147,
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
      "heading": 105,
      "squawk": "6320",
      "timestamp": 1664454294,
      "ems": null
    },
    {
      "latitude": 51.756313,
      "longitude": 18.793182,
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
      "heading": 105,
      "squawk": "6320",
      "timestamp": 1664454300,
      "ems": null
    },
    {
      "latitude": 51.755539,
      "longitude": 18.797607,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 106,
      "squawk": "6320",
      "timestamp": 1664454306,
      "ems": null
    },
    {
      "latitude": 51.754807,
      "longitude": 18.802061,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 104,
      "squawk": "6320",
      "timestamp": 1664454313,
      "ems": null
    },
    {
      "latitude": 51.753799,
      "longitude": 18.808441,
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
      "heading": 103,
      "squawk": "6320",
      "timestamp": 1664454321,
      "ems": null
    },
    {
      "latitude": 51.752682,
      "longitude": 18.815689,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 104,
      "squawk": "6320",
      "timestamp": 1664454330,
      "ems": null
    },
    {
      "latitude": 51.751968,
      "longitude": 18.820322,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454336,
      "ems": null
    },
    {
      "latitude": 51.751282,
      "longitude": 18.82485,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454342,
      "ems": null
    },
    {
      "latitude": 51.750458,
      "longitude": 18.829527,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664454348,
      "ems": null
    },
    {
      "latitude": 51.749748,
      "longitude": 18.834152,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454354,
      "ems": null
    },
    {
      "latitude": 51.749084,
      "longitude": 18.839178,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664454361,
      "ems": null
    },
    {
      "latitude": 51.748398,
      "longitude": 18.843927,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454366,
      "ems": null
    },
    {
      "latitude": 51.747894,
      "longitude": 18.847713,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454373,
      "ems": null
    },
    {
      "latitude": 51.747253,
      "longitude": 18.852762,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1664454378,
      "ems": null
    },
    {
      "latitude": 51.746956,
      "longitude": 18.855743,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664454382,
      "ems": null
    },
    {
      "latitude": 51.746796,
      "longitude": 18.85766,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664454384,
      "ems": null
    },
    {
      "latitude": 51.746628,
      "longitude": 18.85994,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664454388,
      "ems": null
    },
    {
      "latitude": 51.746429,
      "longitude": 18.86256,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664454391,
      "ems": null
    },
    {
      "latitude": 51.746338,
      "longitude": 18.864788,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664454393,
      "ems": null
    },
    {
      "latitude": 51.745926,
      "longitude": 18.869537,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1664454399,
      "ems": null
    },
    {
      "latitude": 51.745285,
      "longitude": 18.874437,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454406,
      "ems": null
    },
    {
      "latitude": 51.745239,
      "longitude": 18.874884,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454408,
      "ems": null
    },
    {
      "latitude": 51.744598,
      "longitude": 18.879189,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664454412,
      "ems": null
    },
    {
      "latitude": 51.744278,
      "longitude": 18.881414,
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454414,
      "ems": null
    },
    {
      "latitude": 51.743931,
      "longitude": 18.883286,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1664454417,
      "ems": null
    },
    {
      "latitude": 51.743416,
      "longitude": 18.885803,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664454420,
      "ems": null
    },
    {
      "latitude": 51.74295,
      "longitude": 18.887711,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664454423,
      "ems": null
    },
    {
      "latitude": 51.742302,
      "longitude": 18.890305,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1664454427,
      "ems": null
    },
    {
      "latitude": 51.741714,
      "longitude": 18.89255,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1664454430,
      "ems": null
    },
    {
      "latitude": 51.74123,
      "longitude": 18.894653,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664454433,
      "ems": null
    },
    {
      "latitude": 51.740486,
      "longitude": 18.898621,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454438,
      "ems": null
    },
    {
      "latitude": 51.739693,
      "longitude": 18.903732,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664454445,
      "ems": null
    },
    {
      "latitude": 51.739059,
      "longitude": 18.907917,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664454450,
      "ems": null
    },
    {
      "latitude": 51.738739,
      "longitude": 18.910143,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664454453,
      "ems": null
    },
    {
      "latitude": 51.738342,
      "longitude": 18.912582,
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664454457,
      "ems": null
    },
    {
      "latitude": 51.738064,
      "longitude": 18.914795,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454460,
      "ems": null
    },
    {
      "latitude": 51.737831,
      "longitude": 18.916626,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454463,
      "ems": null
    },
    {
      "latitude": 51.737137,
      "longitude": 18.921576,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454469,
      "ems": null
    },
    {
      "latitude": 51.736496,
      "longitude": 18.926104,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1664454475,
      "ems": null
    },
    {
      "latitude": 51.735783,
      "longitude": 18.930664,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664454481,
      "ems": null
    },
    {
      "latitude": 51.734985,
      "longitude": 18.935308,
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664454487,
      "ems": null
    },
    {
      "latitude": 51.734207,
      "longitude": 18.939983,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1664454493,
      "ems": null
    },
    {
      "latitude": 51.733501,
      "longitude": 18.944244,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1664454498,
      "ems": null
    },
    {
      "latitude": 51.732944,
      "longitude": 18.948975,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1664454505,
      "ems": null
    },
    {
      "latitude": 51.732742,
      "longitude": 18.952009,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1664454507,
      "ems": null
    },
    {
      "latitude": 51.732605,
      "longitude": 18.954681,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1664454510,
      "ems": null
    },
    {
      "latitude": 51.732525,
      "longitude": 18.957977,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664454513,
      "ems": null
    },
    {
      "latitude": 51.732468,
      "longitude": 18.959805,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664454517,
      "ems": null
    },
    {
      "latitude": 51.732468,
      "longitude": 18.962626,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1664454519,
      "ems": null
    },
    {
      "latitude": 51.732479,
      "longitude": 18.96553,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454522,
      "ems": null
    },
    {
      "latitude": 51.732697,
      "longitude": 18.968861,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454526,
      "ems": null
    },
    {
      "latitude": 51.732895,
      "longitude": 18.971558,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454529,
      "ems": null
    },
    {
      "latitude": 51.733063,
      "longitude": 18.973982,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454532,
      "ems": null
    },
    {
      "latitude": 51.733223,
      "longitude": 18.976593,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454535,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 18.977814,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664454537,
      "ems": null
    },
    {
      "latitude": 51.73341,
      "longitude": 18.980865,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664454540,
      "ems": null
    },
    {
      "latitude": 51.733612,
      "longitude": 18.984301,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1664454544,
      "ems": null
    },
    {
      "latitude": 51.73378,
      "longitude": 18.986206,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454546,
      "ems": null
    },
    {
      "latitude": 51.734024,
      "longitude": 18.989052,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664454550,
      "ems": null
    },
    {
      "latitude": 51.734207,
      "longitude": 18.991352,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664454553,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 18.996103,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454558,
      "ems": null
    },
    {
      "latitude": 51.735085,
      "longitude": 19.001236,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454565,
      "ems": null
    },
    {
      "latitude": 51.735397,
      "longitude": 19.005457,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454570,
      "ems": null
    },
    {
      "latitude": 51.735855,
      "longitude": 19.010283,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664454577,
      "ems": null
    },
    {
      "latitude": 51.736294,
      "longitude": 19.014511,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664454582,
      "ems": null
    },
    {
      "latitude": 51.736759,
      "longitude": 19.020004,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454589,
      "ems": null
    },
    {
      "latitude": 51.737133,
      "longitude": 19.024582,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664454594,
      "ems": null
    },
    {
      "latitude": 51.737598,
      "longitude": 19.02977,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454601,
      "ems": null
    },
    {
      "latitude": 51.738052,
      "longitude": 19.034853,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "squawk": "7000",
      "timestamp": 1664454607,
      "ems": null
    },
    {
      "latitude": 51.73851,
      "longitude": 19.040197,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454613,
      "ems": null
    },
    {
      "latitude": 51.738808,
      "longitude": 19.044266,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454619,
      "ems": null
    },
    {
      "latitude": 51.739197,
      "longitude": 19.049774,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454625,
      "ems": null
    },
    {
      "latitude": 51.739517,
      "longitude": 19.054228,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454630,
      "ems": null
    },
    {
      "latitude": 51.739975,
      "longitude": 19.05987,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454637,
      "ems": null
    },
    {
      "latitude": 51.740765,
      "longitude": 19.066849,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664454646,
      "ems": null
    },
    {
      "latitude": 51.741165,
      "longitude": 19.070038,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1664454650,
      "ems": null
    },
    {
      "latitude": 51.741787,
      "longitude": 19.075165,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1664454657,
      "ems": null
    },
    {
      "latitude": 51.74231,
      "longitude": 19.079987,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664454663,
      "ems": null
    },
    {
      "latitude": 51.742813,
      "longitude": 19.084661,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1664454669,
      "ems": null
    },
    {
      "latitude": 51.743088,
      "longitude": 19.087557,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664454672,
      "ems": null
    },
    {
      "latitude": 51.743637,
      "longitude": 19.094387,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454681,
      "ems": null
    },
    {
      "latitude": 51.744324,
      "longitude": 19.102255,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1664454690,
      "ems": null
    },
    {
      "latitude": 51.744644,
      "longitude": 19.106339,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454695,
      "ems": null
    },
    {
      "latitude": 51.745094,
      "longitude": 19.112854,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664454703,
      "ems": null
    },
    {
      "latitude": 51.745464,
      "longitude": 19.115601,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1664454707,
      "ems": null
    },
    {
      "latitude": 51.746155,
      "longitude": 19.118883,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1664454711,
      "ems": null
    },
    {
      "latitude": 51.74691,
      "longitude": 19.121399,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664454715,
      "ems": null
    },
    {
      "latitude": 51.748074,
      "longitude": 19.124832,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664454720,
      "ems": null
    },
    {
      "latitude": 51.749237,
      "longitude": 19.128113,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454724,
      "ems": null
    },
    {
      "latitude": 51.749954,
      "longitude": 19.130316,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454727,
      "ems": null
    },
    {
      "latitude": 51.750641,
      "longitude": 19.132393,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454730,
      "ems": null
    },
    {
      "latitude": 51.751842,
      "longitude": 19.135895,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664454736,
      "ems": null
    },
    {
      "latitude": 51.753021,
      "longitude": 19.139372,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454741,
      "ems": null
    },
    {
      "latitude": 51.754807,
      "longitude": 19.144791,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454748,
      "ems": null
    },
    {
      "latitude": 51.756081,
      "longitude": 19.148636,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454754,
      "ems": null
    },
    {
      "latitude": 51.757568,
      "longitude": 19.15329,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664454761,
      "ems": null
    },
    {
      "latitude": 51.758781,
      "longitude": 19.15741,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1664454766,
      "ems": null
    },
    {
      "latitude": 51.760036,
      "longitude": 19.161758,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664454772,
      "ems": null
    },
    {
      "latitude": 51.761124,
      "longitude": 19.165277,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1664454777,
      "ems": null
    },
    {
      "latitude": 51.762772,
      "longitude": 19.170696,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664454785,
      "ems": null
    },
    {
      "latitude": 51.764557,
      "longitude": 19.176189,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664454793,
      "ems": null
    },
    {
      "latitude": 51.766415,
      "longitude": 19.181671,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664454801,
      "ems": null
    },
    {
      "latitude": 51.768311,
      "longitude": 19.187696,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664454810,
      "ems": null
    },
    {
      "latitude": 51.770325,
      "longitude": 19.193783,
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664454818,
      "ems": null
    },
    {
      "latitude": 51.772202,
      "longitude": 19.199127,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454826,
      "ems": null
    },
    {
      "latitude": 51.774048,
      "longitude": 19.204636,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664454834,
      "ems": null
    },
    {
      "latitude": 51.775177,
      "longitude": 19.208185,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1664454839,
      "ems": null
    },
    {
      "latitude": 51.7771,
      "longitude": 19.213825,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664454847,
      "ems": null
    },
    {
      "latitude": 51.779572,
      "longitude": 19.220804,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1664454856,
      "ems": null
    },
    {
      "latitude": 51.781868,
      "longitude": 19.227371,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1664454865,
      "ems": null
    },
    {
      "latitude": 51.784149,
      "longitude": 19.23378,
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
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454876,
      "ems": null
    },
    {
      "latitude": 51.78598,
      "longitude": 19.23914,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1664454884,
      "ems": null
    },
    {
      "latitude": 51.789642,
      "longitude": 19.249903,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664454897,
      "ems": null
    },
    {
      "latitude": 51.790714,
      "longitude": 19.253769,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1664454903,
      "ems": null
    },
    {
      "latitude": 51.791553,
      "longitude": 19.256592,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1664454907,
      "ems": null
    },
    {
      "latitude": 51.792343,
      "longitude": 19.259338,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1664454911,
      "ems": null
    },
    {
      "latitude": 51.79303,
      "longitude": 19.262522,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1664454915,
      "ems": null
    },
    {
      "latitude": 51.793488,
      "longitude": 19.265417,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664454919,
      "ems": null
    },
    {
      "latitude": 51.793552,
      "longitude": 19.265823,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1664454919,
      "ems": null
    },
    {
      "latitude": 51.79388,
      "longitude": 19.269562,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1664454924,
      "ems": null
    },
    {
      "latitude": 51.793991,
      "longitude": 19.273582,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1664454929,
      "ems": null
    },
    {
      "latitude": 51.794037,
      "longitude": 19.276701,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1664454933,
      "ems": null
    },
    {
      "latitude": 51.793972,
      "longitude": 19.279404,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1664454937,
      "ems": null
    },
    {
      "latitude": 51.793762,
      "longitude": 19.282564,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1664454941,
      "ems": null
    },
    {
      "latitude": 51.793396,
      "longitude": 19.285608,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664454945,
      "ems": null
    },
    {
      "latitude": 51.792755,
      "longitude": 19.289246,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1664454949,
      "ems": null
    },
    {
      "latitude": 51.792252,
      "longitude": 19.291473,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664454953,
      "ems": null
    },
    {
      "latitude": 51.791412,
      "longitude": 19.294586,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664454957,
      "ems": null
    },
    {
      "latitude": 51.790558,
      "longitude": 19.297262,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1664454961,
      "ems": null
    },
    {
      "latitude": 51.789505,
      "longitude": 19.300156,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664454965,
      "ems": null
    },
    {
      "latitude": 51.788406,
      "longitude": 19.302607,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1664454969,
      "ems": null
    },
    {
      "latitude": 51.786896,
      "longitude": 19.305496,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664454973,
      "ems": null
    },
    {
      "latitude": 51.785549,
      "longitude": 19.307938,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1664454977,
      "ems": null
    },
    {
      "latitude": 51.784378,
      "longitude": 19.310179,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664454981,
      "ems": null
    },
    {
      "latitude": 51.782616,
      "longitude": 19.313202,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664454986,
      "ems": null
    },
    {
      "latitude": 51.781128,
      "longitude": 19.315598,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1664454990,
      "ems": null
    },
    {
      "latitude": 51.779846,
      "longitude": 19.317528,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1664454994,
      "ems": null
    },
    {
      "latitude": 51.778198,
      "longitude": 19.31983,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664454998,
      "ems": null
    },
    {
      "latitude": 51.77647,
      "longitude": 19.321976,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1664455002,
      "ems": null
    },
    {
      "latitude": 51.775074,
      "longitude": 19.323654,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1664455006,
      "ems": null
    },
    {
      "latitude": 51.77293,
      "longitude": 19.32579,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664455011,
      "ems": null
    },
    {
      "latitude": 51.77158,
      "longitude": 19.327087,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1664455015,
      "ems": null
    },
    {
      "latitude": 51.769718,
      "longitude": 19.32869,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1664455019,
      "ems": null
    },
    {
      "latitude": 51.768135,
      "longitude": 19.329987,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664455023,
      "ems": null
    },
    {
      "latitude": 51.766602,
      "longitude": 19.331207,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664455027,
      "ems": null
    },
    {
      "latitude": 51.764366,
      "longitude": 19.332886,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664455032,
      "ems": null
    },
    {
      "latitude": 51.763458,
      "longitude": 19.333563,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1664455036,
      "ems": null
    },
    {
      "latitude": 51.761215,
      "longitude": 19.335419,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1664455040,
      "ems": null
    },
    {
      "latitude": 51.757755,
      "longitude": 19.338303,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664455049,
      "ems": null
    },
    {
      "latitude": 51.75499,
      "longitude": 19.340614,
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1664455057,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 19.34351,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664455065,
      "ems": null
    },
    {
      "latitude": 51.749954,
      "longitude": 19.344919,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1664455069,
      "ems": null
    },
    {
      "latitude": 51.747116,
      "longitude": 19.347889,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1664455077,
      "ems": null
    },
    {
      "latitude": 51.745884,
      "longitude": 19.349365,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1664455081,
      "ems": null
    },
    {
      "latitude": 51.744507,
      "longitude": 19.351303,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1664455085,
      "ems": null
    },
    {
      "latitude": 51.743279,
      "longitude": 19.353256,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1664455089,
      "ems": null
    },
    {
      "latitude": 51.742348,
      "longitude": 19.355392,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1664455093,
      "ems": null
    },
    {
      "latitude": 51.741348,
      "longitude": 19.357391,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1664455097,
      "ems": null
    },
    {
      "latitude": 51.740295,
      "longitude": 19.359468,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1664455101,
      "ems": null
    },
    {
      "latitude": 51.73909,
      "longitude": 19.362183,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664455106,
      "ems": null
    },
    {
      "latitude": 51.738281,
      "longitude": 19.364592,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1664455110,
      "ems": null
    },
    {
      "latitude": 51.73732,
      "longitude": 19.367447,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664455114,
      "ems": null
    },
    {
      "latitude": 51.736496,
      "longitude": 19.369713,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1664455118,
      "ems": null
    },
    {
      "latitude": 51.735828,
      "longitude": 19.371719,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664455122,
      "ems": null
    },
    {
      "latitude": 51.735031,
      "longitude": 19.374315,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1664455126,
      "ems": null
    },
    {
      "latitude": 51.7342,
      "longitude": 19.376831,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664455130,
      "ems": null
    },
    {
      "latitude": 51.733429,
      "longitude": 19.37929,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1664455134,
      "ems": null
    },
    {
      "latitude": 51.73243,
      "longitude": 19.382782,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1664455139,
      "ems": null
    },
    {
      "latitude": 51.732376,
      "longitude": 19.384485,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1664455143,
      "ems": null
    },
    {
      "latitude": 51.732788,
      "longitude": 19.387529,
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
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664455147,
      "ems": null
    },
    {
      "latitude": 51.733177,
      "longitude": 19.389725,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664455151,
      "ems": null
    },
    {
      "latitude": 51.733501,
      "longitude": 19.391632,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664455155,
      "ems": null
    },
    {
      "latitude": 51.734116,
      "longitude": 19.39473,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664455160,
      "ems": null
    },
    {
      "latitude": 51.734711,
      "longitude": 19.397476,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1664455165,
      "ems": null
    },
    {
      "latitude": 51.735077,
      "longitude": 19.399035,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664455169,
      "ems": null
    },
    {
      "latitude": 51.73555,
      "longitude": 19.401398,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1664455173,
      "ems": null
    },
    {
      "latitude": 51.736015,
      "longitude": 19.403458,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664455177,
      "ems": null
    },
    {
      "latitude": 51.736542,
      "longitude": 19.405716,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1664455181,
      "ems": null
    },
    {
      "latitude": 51.737411,
      "longitude": 19.409872,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664455189,
      "ems": null
    },
    {
      "latitude": 51.738235,
      "longitude": 19.414251,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1664455197,
      "ems": null
    },
    {
      "latitude": 51.73909,
      "longitude": 19.418564,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1664455205,
      "ems": null
    },
    {
      "latitude": 51.73946,
      "longitude": 19.420929,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1664455209,
      "ems": null
    },
    {
      "latitude": 51.739693,
      "longitude": 19.422913,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1664455213,
      "ems": null
    },
    {
      "latitude": 51.739555,
      "longitude": 19.426117,
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1664455218,
      "ems": null
    },
    {
      "latitude": 51.739059,
      "longitude": 19.428207,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1664455222,
      "ems": null
    },
    {
      "latitude": 51.73811,
      "longitude": 19.430313,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1664455226,
      "ems": null
    },
    {
      "latitude": 51.7369,
      "longitude": 19.431763,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1664455230,
      "ems": null
    },
    {
      "latitude": 51.73558,
      "longitude": 19.432587,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1664455234,
      "ems": null
    },
    {
      "latitude": 51.734161,
      "longitude": 19.433182,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1664455238,
      "ems": null
    },
    {
      "latitude": 51.732422,
      "longitude": 19.433182,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1664455242,
      "ems": null
    },
    {
      "latitude": 51.730957,
      "longitude": 19.43244,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1664455246,
      "ems": null
    },
    {
      "latitude": 51.729683,
      "longitude": 19.431076,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1664455250,
      "ems": null
    },
    {
      "latitude": 51.728714,
      "longitude": 19.429098,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1664455254,
      "ems": null
    },
    {
      "latitude": 51.728256,
      "longitude": 19.427317,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1664455258,
      "ems": null
    },
    {
      "latitude": 51.727844,
      "longitude": 19.425684,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1664455262,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 19.423605,
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
        "fpm": -1600,
        "ms": -8.1
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664455266,
      "ems": null
    },
    {
      "latitude": 51.726986,
      "longitude": 19.421692,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664455270,
      "ems": null
    },
    {
      "latitude": 51.726566,
      "longitude": 19.419708,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1664455274,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 19.41803,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664455278,
      "ems": null
    },
    {
      "latitude": 51.725868,
      "longitude": 19.416428,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664455282,
      "ems": null
    },
    {
      "latitude": 51.725098,
      "longitude": 19.413065,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1664455290,
      "ems": null
    },
    {
      "latitude": 51.724144,
      "longitude": 19.408569,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664455299,
      "ems": null
    },
    {
      "latitude": 51.723495,
      "longitude": 19.405642,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1664455305,
      "ems": null
    },
    {
      "latitude": 51.72261,
      "longitude": 19.40155,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1664455316,
      "ems": null
    }
  ]
};
