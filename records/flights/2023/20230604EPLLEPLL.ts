import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230604EPLLEPLL",
    callsign: "BNI8T",
    name: "Re-familiarization flight",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 5, 4, 14, 25).getTime(),
    arrival: new Date(2023, 5, 4, 15, 21).getTime(),
    singleEnginePistonTime: 56,
    multiEnginePistonTime: 0,
    picTime: 0,
    dualTime: 56,
    ifrTime: 0,
    nightTime: 0,
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
      modes: "48B048",
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
      "latitude": 51.721207,
      "longitude": 19.395174,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1685889215,
      "ems": null
    },
    {
      "latitude": 51.716537,
      "longitude": 19.373943,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1685889268,
      "ems": null
    },
    {
      "latitude": 51.71553,
      "longitude": 19.369638,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1685889277,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.365408,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1685889285,
      "ems": null
    },
    {
      "latitude": 51.714417,
      "longitude": 19.363861,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1685889288,
      "ems": null
    },
    {
      "latitude": 51.713562,
      "longitude": 19.359692,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1685889297,
      "ems": null
    },
    {
      "latitude": 51.712601,
      "longitude": 19.355312,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1685889306,
      "ems": null
    },
    {
      "latitude": 51.711483,
      "longitude": 19.350662,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1685889315,
      "ems": null
    },
    {
      "latitude": 51.710953,
      "longitude": 19.349224,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1685889319,
      "ems": null
    },
    {
      "latitude": 51.710224,
      "longitude": 19.347992,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1685889322,
      "ems": null
    },
    {
      "latitude": 51.709396,
      "longitude": 19.346998,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1685889325,
      "ems": null
    },
    {
      "latitude": 51.708645,
      "longitude": 19.34639,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1685889327,
      "ems": null
    },
    {
      "latitude": 51.707565,
      "longitude": 19.345884,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1685889330,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.345736,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1685889334,
      "ems": null
    },
    {
      "latitude": 51.705524,
      "longitude": 19.345932,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1685889336,
      "ems": null
    },
    {
      "latitude": 51.704453,
      "longitude": 19.346619,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1685889340,
      "ems": null
    },
    {
      "latitude": 51.703663,
      "longitude": 19.347458,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1685889342,
      "ems": null
    },
    {
      "latitude": 51.702732,
      "longitude": 19.34845,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1685889345,
      "ems": null
    },
    {
      "latitude": 51.701984,
      "longitude": 19.349289,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1685889348,
      "ems": null
    },
    {
      "latitude": 51.700974,
      "longitude": 19.350412,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1685889352,
      "ems": null
    },
    {
      "latitude": 51.700169,
      "longitude": 19.351425,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1685889354,
      "ems": null
    },
    {
      "latitude": 51.699326,
      "longitude": 19.352491,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1685889357,
      "ems": null
    },
    {
      "latitude": 51.698448,
      "longitude": 19.353561,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1685889360,
      "ems": null
    },
    {
      "latitude": 51.697563,
      "longitude": 19.354553,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1685889364,
      "ems": null
    },
    {
      "latitude": 51.696671,
      "longitude": 19.355461,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1685889366,
      "ems": null
    },
    {
      "latitude": 51.693886,
      "longitude": 19.358215,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1685889376,
      "ems": null
    },
    {
      "latitude": 51.693192,
      "longitude": 19.359173,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1685889379,
      "ems": null
    },
    {
      "latitude": 51.692398,
      "longitude": 19.360352,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1685889382,
      "ems": null
    },
    {
      "latitude": 51.690765,
      "longitude": 19.362364,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1685889388,
      "ems": null
    },
    {
      "latitude": 51.689804,
      "longitude": 19.363329,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1685889391,
      "ems": null
    },
    {
      "latitude": 51.688889,
      "longitude": 19.364145,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1685889394,
      "ems": null
    },
    {
      "latitude": 51.686005,
      "longitude": 19.366669,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1685889403,
      "ems": null
    },
    {
      "latitude": 51.685089,
      "longitude": 19.367371,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1685889406,
      "ems": null
    },
    {
      "latitude": 51.684174,
      "longitude": 19.368229,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1685889409,
      "ems": null
    },
    {
      "latitude": 51.683304,
      "longitude": 19.368971,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1685889412,
      "ems": null
    },
    {
      "latitude": 51.682388,
      "longitude": 19.369787,
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1685889415,
      "ems": null
    },
    {
      "latitude": 51.679501,
      "longitude": 19.372635,
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
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1685889424,
      "ems": null
    },
    {
      "latitude": 51.676521,
      "longitude": 19.375305,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1685889433,
      "ems": null
    },
    {
      "latitude": 51.673233,
      "longitude": 19.378473,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1685889442,
      "ems": null
    },
    {
      "latitude": 51.672237,
      "longitude": 19.379807,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1685889445,
      "ems": null
    },
    {
      "latitude": 51.671356,
      "longitude": 19.381292,
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1685889448,
      "ems": null
    },
    {
      "latitude": 51.670563,
      "longitude": 19.383011,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1685889451,
      "ems": null
    },
    {
      "latitude": 51.669865,
      "longitude": 19.384766,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1685889454,
      "ems": null
    },
    {
      "latitude": 51.669296,
      "longitude": 19.38649,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1685889457,
      "ems": null
    },
    {
      "latitude": 51.668655,
      "longitude": 19.388657,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889460,
      "ems": null
    },
    {
      "latitude": 51.668049,
      "longitude": 19.390564,
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1685889463,
      "ems": null
    },
    {
      "latitude": 51.667446,
      "longitude": 19.392471,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1685889466,
      "ems": null
    },
    {
      "latitude": 51.666931,
      "longitude": 19.394073,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1685889469,
      "ems": null
    },
    {
      "latitude": 51.666321,
      "longitude": 19.396214,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889472,
      "ems": null
    },
    {
      "latitude": 51.665768,
      "longitude": 19.397964,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889475,
      "ems": null
    },
    {
      "latitude": 51.665165,
      "longitude": 19.400024,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1685889478,
      "ems": null
    },
    {
      "latitude": 51.664581,
      "longitude": 19.401855,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1685889481,
      "ems": null
    },
    {
      "latitude": 51.663986,
      "longitude": 19.404083,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1685889484,
      "ems": null
    },
    {
      "latitude": 51.662292,
      "longitude": 19.409872,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889493,
      "ems": null
    },
    {
      "latitude": 51.660648,
      "longitude": 19.415741,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685889502,
      "ems": null
    },
    {
      "latitude": 51.659019,
      "longitude": 19.421463,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889511,
      "ems": null
    },
    {
      "latitude": 51.657436,
      "longitude": 19.427109,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685889520,
      "ems": null
    },
    {
      "latitude": 51.656021,
      "longitude": 19.432735,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685889529,
      "ems": null
    },
    {
      "latitude": 51.654602,
      "longitude": 19.438229,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1685889538,
      "ems": null
    },
    {
      "latitude": 51.653183,
      "longitude": 19.443647,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1685889547,
      "ems": null
    },
    {
      "latitude": 51.651718,
      "longitude": 19.449215,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1685889556,
      "ems": null
    },
    {
      "latitude": 51.651123,
      "longitude": 19.451145,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1685889559,
      "ems": null
    },
    {
      "latitude": 51.650452,
      "longitude": 19.453049,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1685889562,
      "ems": null
    },
    {
      "latitude": 51.649849,
      "longitude": 19.455032,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1685889565,
      "ems": null
    },
    {
      "latitude": 51.647984,
      "longitude": 19.46106,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889574,
      "ems": null
    },
    {
      "latitude": 51.64682,
      "longitude": 19.464952,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1685889580,
      "ems": null
    },
    {
      "latitude": 51.644897,
      "longitude": 19.470594,
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1685889590,
      "ems": null
    },
    {
      "latitude": 51.643021,
      "longitude": 19.476311,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1685889598,
      "ems": null
    },
    {
      "latitude": 51.642105,
      "longitude": 19.480097,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1685889605,
      "ems": null
    },
    {
      "latitude": 51.641747,
      "longitude": 19.481812,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1685889607,
      "ems": null
    },
    {
      "latitude": 51.641376,
      "longitude": 19.483566,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1685889610,
      "ems": null
    },
    {
      "latitude": 51.641048,
      "longitude": 19.485245,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1685889613,
      "ems": null
    },
    {
      "latitude": 51.640583,
      "longitude": 19.487228,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1685889617,
      "ems": null
    },
    {
      "latitude": 51.640182,
      "longitude": 19.488855,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1685889619,
      "ems": null
    },
    {
      "latitude": 51.639793,
      "longitude": 19.490585,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1685889622,
      "ems": null
    },
    {
      "latitude": 51.639374,
      "longitude": 19.492416,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1685889625,
      "ems": null
    },
    {
      "latitude": 51.638115,
      "longitude": 19.497299,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1685889634,
      "ems": null
    },
    {
      "latitude": 51.637699,
      "longitude": 19.498978,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685889638,
      "ems": null
    },
    {
      "latitude": 51.63644,
      "longitude": 19.504013,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1685889646,
      "ems": null
    },
    {
      "latitude": 51.63533,
      "longitude": 19.509121,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1685889655,
      "ems": null
    },
    {
      "latitude": 51.63414,
      "longitude": 19.514317,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1685889665,
      "ems": null
    },
    {
      "latitude": 51.632996,
      "longitude": 19.518585,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685889673,
      "ems": null
    },
    {
      "latitude": 51.63176,
      "longitude": 19.523077,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1685889683,
      "ems": null
    },
    {
      "latitude": 51.631367,
      "longitude": 19.52446,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1685889686,
      "ems": null
    },
    {
      "latitude": 51.630901,
      "longitude": 19.525909,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889689,
      "ems": null
    },
    {
      "latitude": 51.630615,
      "longitude": 19.52701,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889691,
      "ems": null
    },
    {
      "latitude": 51.629272,
      "longitude": 19.532013,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1685889701,
      "ems": null
    },
    {
      "latitude": 51.628059,
      "longitude": 19.536362,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1685889710,
      "ems": null
    },
    {
      "latitude": 51.626953,
      "longitude": 19.540224,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1685889718,
      "ems": null
    },
    {
      "latitude": 51.62558,
      "longitude": 19.544529,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1685889726,
      "ems": null
    },
    {
      "latitude": 51.624199,
      "longitude": 19.548874,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1685889734,
      "ems": null
    },
    {
      "latitude": 51.62294,
      "longitude": 19.553833,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1685889743,
      "ems": null
    },
    {
      "latitude": 51.622616,
      "longitude": 19.55574,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1685889746,
      "ems": null
    },
    {
      "latitude": 51.622383,
      "longitude": 19.557419,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1685889749,
      "ems": null
    },
    {
      "latitude": 51.622055,
      "longitude": 19.55945,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1685889752,
      "ems": null
    },
    {
      "latitude": 51.621826,
      "longitude": 19.561008,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1685889755,
      "ems": null
    },
    {
      "latitude": 51.621643,
      "longitude": 19.562271,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1685889758,
      "ems": null
    },
    {
      "latitude": 51.62114,
      "longitude": 19.566057,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "timestamp": 1685889763,
      "ems": null
    },
    {
      "latitude": 51.620892,
      "longitude": 19.567566,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1685889765,
      "ems": null
    },
    {
      "latitude": 51.6208,
      "longitude": 19.568253,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1685889766,
      "ems": null
    },
    {
      "latitude": 51.618984,
      "longitude": 19.57222,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1685889774,
      "ems": null
    },
    {
      "latitude": 51.617634,
      "longitude": 19.571075,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1685889778,
      "ems": null
    },
    {
      "latitude": 51.617958,
      "longitude": 19.568405,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1685889782,
      "ems": null
    },
    {
      "latitude": 51.618439,
      "longitude": 19.567839,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1685889785,
      "ems": null
    },
    {
      "latitude": 51.619961,
      "longitude": 19.568253,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1685889788,
      "ems": null
    },
    {
      "latitude": 51.620426,
      "longitude": 19.569855,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1685889791,
      "ems": null
    },
    {
      "latitude": 51.620087,
      "longitude": 19.571402,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1685889794,
      "ems": null
    },
    {
      "latitude": 51.619076,
      "longitude": 19.572601,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1685889797,
      "ems": null
    },
    {
      "latitude": 51.618423,
      "longitude": 19.572906,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1685889800,
      "ems": null
    },
    {
      "latitude": 51.616974,
      "longitude": 19.573553,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1685889803,
      "ems": null
    },
    {
      "latitude": 51.615967,
      "longitude": 19.574074,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1685889806,
      "ems": null
    },
    {
      "latitude": 51.614792,
      "longitude": 19.574661,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1685889809,
      "ems": null
    },
    {
      "latitude": 51.613583,
      "longitude": 19.575272,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1685889812,
      "ems": null
    },
    {
      "latitude": 51.612488,
      "longitude": 19.575855,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1685889815,
      "ems": null
    },
    {
      "latitude": 51.611488,
      "longitude": 19.576263,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1685889818,
      "ems": null
    },
    {
      "latitude": 51.610382,
      "longitude": 19.57682,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1685889821,
      "ems": null
    },
    {
      "latitude": 51.609055,
      "longitude": 19.577414,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1685889824,
      "ems": null
    },
    {
      "latitude": 51.607811,
      "longitude": 19.577866,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1685889827,
      "ems": null
    },
    {
      "latitude": 51.604294,
      "longitude": 19.579344,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1685889836,
      "ems": null
    },
    {
      "latitude": 51.602051,
      "longitude": 19.581125,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1685889842,
      "ems": null
    },
    {
      "latitude": 51.601959,
      "longitude": 19.582981,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1685889845,
      "ems": null
    },
    {
      "latitude": 51.602596,
      "longitude": 19.584122,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1685889848,
      "ems": null
    },
    {
      "latitude": 51.604523,
      "longitude": 19.583055,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1685889853,
      "ems": null
    },
    {
      "latitude": 51.604599,
      "longitude": 19.580307,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1685889857,
      "ems": null
    },
    {
      "latitude": 51.603806,
      "longitude": 19.578934,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1685889860,
      "ems": null
    },
    {
      "latitude": 51.602783,
      "longitude": 19.578602,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1685889863,
      "ems": null
    },
    {
      "latitude": 51.601776,
      "longitude": 19.578974,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1685889866,
      "ems": null
    },
    {
      "latitude": 51.600456,
      "longitude": 19.579697,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1685889869,
      "ems": null
    },
    {
      "latitude": 51.599487,
      "longitude": 19.580235,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1685889872,
      "ems": null
    },
    {
      "latitude": 51.598343,
      "longitude": 19.58083,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1685889875,
      "ems": null
    },
    {
      "latitude": 51.597149,
      "longitude": 19.581375,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1685889878,
      "ems": null
    },
    {
      "latitude": 51.595963,
      "longitude": 19.581942,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1685889881,
      "ems": null
    },
    {
      "latitude": 51.594864,
      "longitude": 19.582537,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1685889884,
      "ems": null
    },
    {
      "latitude": 51.5938,
      "longitude": 19.58313,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1685889887,
      "ems": null
    },
    {
      "latitude": 51.592621,
      "longitude": 19.583723,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1685889891,
      "ems": null
    },
    {
      "latitude": 51.591705,
      "longitude": 19.584122,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1685889893,
      "ems": null
    },
    {
      "latitude": 51.591286,
      "longitude": 19.584198,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1685889894,
      "ems": null
    },
    {
      "latitude": 51.589607,
      "longitude": 19.583282,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1685889898,
      "ems": null
    },
    {
      "latitude": 51.589417,
      "longitude": 19.580902,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1685889902,
      "ems": null
    },
    {
      "latitude": 51.590214,
      "longitude": 19.579544,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1685889905,
      "ems": null
    },
    {
      "latitude": 51.590725,
      "longitude": 19.579315,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1685889907,
      "ems": null
    },
    {
      "latitude": 51.592121,
      "longitude": 19.580154,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1685889911,
      "ems": null
    },
    {
      "latitude": 51.592621,
      "longitude": 19.581867,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1685889914,
      "ems": null
    },
    {
      "latitude": 51.592449,
      "longitude": 19.583664,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1685889917,
      "ems": null
    },
    {
      "latitude": 51.591705,
      "longitude": 19.584961,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1685889920,
      "ems": null
    },
    {
      "latitude": 51.590652,
      "longitude": 19.585728,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1685889924,
      "ems": null
    },
    {
      "latitude": 51.589657,
      "longitude": 19.586487,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1685889926,
      "ems": null
    },
    {
      "latitude": 51.588585,
      "longitude": 19.587173,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1685889930,
      "ems": null
    },
    {
      "latitude": 51.587494,
      "longitude": 19.587955,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1685889933,
      "ems": null
    },
    {
      "latitude": 51.586533,
      "longitude": 19.588697,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1685889935,
      "ems": null
    },
    {
      "latitude": 51.58556,
      "longitude": 19.589386,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1685889938,
      "ems": null
    },
    {
      "latitude": 51.584442,
      "longitude": 19.590073,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1685889941,
      "ems": null
    },
    {
      "latitude": 51.583466,
      "longitude": 19.590776,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1685889945,
      "ems": null
    },
    {
      "latitude": 51.582253,
      "longitude": 19.591522,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1685889947,
      "ems": null
    },
    {
      "latitude": 51.581085,
      "longitude": 19.59226,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1685889951,
      "ems": null
    },
    {
      "latitude": 51.579926,
      "longitude": 19.592819,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1685889954,
      "ems": null
    },
    {
      "latitude": 51.578842,
      "longitude": 19.5933,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1685889957,
      "ems": null
    },
    {
      "latitude": 51.577831,
      "longitude": 19.593658,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1685889959,
      "ems": null
    },
    {
      "latitude": 51.576481,
      "longitude": 19.594193,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1685889963,
      "ems": null
    },
    {
      "latitude": 51.575409,
      "longitude": 19.594498,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1685889965,
      "ems": null
    },
    {
      "latitude": 51.574173,
      "longitude": 19.594858,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1685889969,
      "ems": null
    },
    {
      "latitude": 51.573082,
      "longitude": 19.595184,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1685889972,
      "ems": null
    },
    {
      "latitude": 51.571976,
      "longitude": 19.595453,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1685889975,
      "ems": null
    },
    {
      "latitude": 51.570877,
      "longitude": 19.595749,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1685889978,
      "ems": null
    },
    {
      "latitude": 51.569824,
      "longitude": 19.595972,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1685889981,
      "ems": null
    },
    {
      "latitude": 51.568863,
      "longitude": 19.596195,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1685889983,
      "ems": null
    },
    {
      "latitude": 51.567776,
      "longitude": 19.596329,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1685889987,
      "ems": null
    },
    {
      "latitude": 51.566845,
      "longitude": 19.596481,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1685889990,
      "ems": null
    },
    {
      "latitude": 51.565933,
      "longitude": 19.59664,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1685889993,
      "ems": null
    },
    {
      "latitude": 51.564983,
      "longitude": 19.596786,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1685889996,
      "ems": null
    },
    {
      "latitude": 51.562363,
      "longitude": 19.597456,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1685890005,
      "ems": null
    },
    {
      "latitude": 51.559677,
      "longitude": 19.59816,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1685890014,
      "ems": null
    },
    {
      "latitude": 51.558048,
      "longitude": 19.598618,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1685890019,
      "ems": null
    },
    {
      "latitude": 51.557114,
      "longitude": 19.598923,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1685890023,
      "ems": null
    },
    {
      "latitude": 51.55632,
      "longitude": 19.599237,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1685890025,
      "ems": null
    },
    {
      "latitude": 51.555313,
      "longitude": 19.599609,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1685890029,
      "ems": null
    },
    {
      "latitude": 51.552601,
      "longitude": 19.600449,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1685890038,
      "ems": null
    },
    {
      "latitude": 51.5499,
      "longitude": 19.601212,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1685890047,
      "ems": null
    },
    {
      "latitude": 51.546967,
      "longitude": 19.601822,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1685890056,
      "ems": null
    },
    {
      "latitude": 51.546036,
      "longitude": 19.602051,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1685890059,
      "ems": null
    },
    {
      "latitude": 51.543045,
      "longitude": 19.602728,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1685890068,
      "ems": null
    },
    {
      "latitude": 51.540169,
      "longitude": 19.603271,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1685890077,
      "ems": null
    },
    {
      "latitude": 51.537331,
      "longitude": 19.603806,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1685890086,
      "ems": null
    },
    {
      "latitude": 51.53561,
      "longitude": 19.604034,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1685890091,
      "ems": null
    },
    {
      "latitude": 51.534725,
      "longitude": 19.604111,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1685890094,
      "ems": null
    },
    {
      "latitude": 51.533699,
      "longitude": 19.604111,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1685890098,
      "ems": null
    },
    {
      "latitude": 51.532955,
      "longitude": 19.604111,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1685890101,
      "ems": null
    },
    {
      "latitude": 51.530685,
      "longitude": 19.604361,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1685890110,
      "ems": null
    },
    {
      "latitude": 51.528252,
      "longitude": 19.604874,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1685890119,
      "ems": null
    },
    {
      "latitude": 51.527435,
      "longitude": 19.605103,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1685890122,
      "ems": null
    },
    {
      "latitude": 51.526657,
      "longitude": 19.605251,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1685890125,
      "ems": null
    },
    {
      "latitude": 51.525833,
      "longitude": 19.605484,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1685890128,
      "ems": null
    },
    {
      "latitude": 51.524902,
      "longitude": 19.605789,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1685890131,
      "ems": null
    },
    {
      "latitude": 51.523972,
      "longitude": 19.606094,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1685890134,
      "ems": null
    },
    {
      "latitude": 51.522995,
      "longitude": 19.60644,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1685890137,
      "ems": null
    },
    {
      "latitude": 51.520157,
      "longitude": 19.606291,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1685890145,
      "ems": null
    },
    {
      "latitude": 51.519131,
      "longitude": 19.604492,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1685890149,
      "ems": null
    },
    {
      "latitude": 51.518803,
      "longitude": 19.603119,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1685890152,
      "ems": null
    },
    {
      "latitude": 51.518803,
      "longitude": 19.601364,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1685890155,
      "ems": null
    },
    {
      "latitude": 51.519241,
      "longitude": 19.599684,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1685890158,
      "ems": null
    },
    {
      "latitude": 51.520111,
      "longitude": 19.598421,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1685890161,
      "ems": null
    },
    {
      "latitude": 51.521347,
      "longitude": 19.597902,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1685890164,
      "ems": null
    },
    {
      "latitude": 51.522667,
      "longitude": 19.598007,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1685890167,
      "ems": null
    },
    {
      "latitude": 51.52383,
      "longitude": 19.598083,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1685890170,
      "ems": null
    },
    {
      "latitude": 51.524761,
      "longitude": 19.598236,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1685890173,
      "ems": null
    },
    {
      "latitude": 51.526108,
      "longitude": 19.598421,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1685890176,
      "ems": null
    },
    {
      "latitude": 51.527252,
      "longitude": 19.59857,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1685890179,
      "ems": null
    },
    {
      "latitude": 51.528347,
      "longitude": 19.59877,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1685890182,
      "ems": null
    },
    {
      "latitude": 51.529221,
      "longitude": 19.598867,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1685890185,
      "ems": null
    },
    {
      "latitude": 51.529861,
      "longitude": 19.599016,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1685890187,
      "ems": null
    },
    {
      "latitude": 51.531235,
      "longitude": 19.599312,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1685890191,
      "ems": null
    },
    {
      "latitude": 51.53207,
      "longitude": 19.599457,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1685890194,
      "ems": null
    },
    {
      "latitude": 51.532791,
      "longitude": 19.599684,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1685890197,
      "ems": null
    },
    {
      "latitude": 51.533478,
      "longitude": 19.599981,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1685890200,
      "ems": null
    },
    {
      "latitude": 51.53421,
      "longitude": 19.600203,
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
        "fpm": -2432,
        "ms": -12.4
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1685890203,
      "ems": null
    },
    {
      "latitude": 51.537323,
      "longitude": 19.600649,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1685890212,
      "ems": null
    },
    {
      "latitude": 51.539749,
      "longitude": 19.600946,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1685890218,
      "ems": null
    },
    {
      "latitude": 51.540802,
      "longitude": 19.601019,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1685890221,
      "ems": null
    },
    {
      "latitude": 51.541672,
      "longitude": 19.601093,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1685890224,
      "ems": null
    },
    {
      "latitude": 51.54277,
      "longitude": 19.601168,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1685890227,
      "ems": null
    },
    {
      "latitude": 51.543709,
      "longitude": 19.601212,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1685890230,
      "ems": null
    },
    {
      "latitude": 51.546112,
      "longitude": 19.601465,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1685890239,
      "ems": null
    },
    {
      "latitude": 51.547577,
      "longitude": 19.601763,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1685890245,
      "ems": null
    },
    {
      "latitude": 51.550785,
      "longitude": 19.602203,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1685890254,
      "ems": null
    },
    {
      "latitude": 51.553757,
      "longitude": 19.602579,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1685890263,
      "ems": null
    },
    {
      "latitude": 51.557053,
      "longitude": 19.603098,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1685890272,
      "ems": null
    },
    {
      "latitude": 51.558884,
      "longitude": 19.603577,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1685890278,
      "ems": null
    },
    {
      "latitude": 51.559677,
      "longitude": 19.603882,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "squawk": "7000",
      "timestamp": 1685890281,
      "ems": null
    },
    {
      "latitude": 51.561398,
      "longitude": 19.604034,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": -1920,
        "ms": -9.8
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1685890288,
      "ems": null
    },
    {
      "latitude": 51.562546,
      "longitude": 19.603914,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1685890291,
      "ems": null
    },
    {
      "latitude": 51.563736,
      "longitude": 19.603765,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1685890294,
      "ems": null
    },
    {
      "latitude": 51.564655,
      "longitude": 19.603653,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1685890296,
      "ems": null
    },
    {
      "latitude": 51.565216,
      "longitude": 19.6035,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1685890298,
      "ems": null
    },
    {
      "latitude": 51.566891,
      "longitude": 19.603271,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1685890302,
      "ems": null
    },
    {
      "latitude": 51.568176,
      "longitude": 19.603172,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1685890306,
      "ems": null
    },
    {
      "latitude": 51.5695,
      "longitude": 19.603043,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1685890310,
      "ems": null
    },
    {
      "latitude": 51.571335,
      "longitude": 19.602949,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1685890315,
      "ems": null
    },
    {
      "latitude": 51.573166,
      "longitude": 19.602949,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1685890320,
      "ems": null
    },
    {
      "latitude": 51.574173,
      "longitude": 19.603098,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1685890324,
      "ems": null
    },
    {
      "latitude": 51.574997,
      "longitude": 19.603172,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1685890327,
      "ems": null
    },
    {
      "latitude": 51.575821,
      "longitude": 19.602949,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -2432,
        "ms": -12.4
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1685890330,
      "ems": null
    },
    {
      "latitude": 51.576828,
      "longitude": 19.602654,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1685890332,
      "ems": null
    },
    {
      "latitude": 51.577923,
      "longitude": 19.602203,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1685890336,
      "ems": null
    },
    {
      "latitude": 51.579086,
      "longitude": 19.601669,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 1536,
        "ms": 7.8
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1685890338,
      "ems": null
    },
    {
      "latitude": 51.580158,
      "longitude": 19.601212,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1685890342,
      "ems": null
    },
    {
      "latitude": 51.58123,
      "longitude": 19.600983,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1685890344,
      "ems": null
    },
    {
      "latitude": 51.583511,
      "longitude": 19.601135,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1685890351,
      "ems": null
    },
    {
      "latitude": 51.585434,
      "longitude": 19.601688,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1685890357,
      "ems": null
    },
    {
      "latitude": 51.586349,
      "longitude": 19.60191,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1685890360,
      "ems": null
    },
    {
      "latitude": 51.587143,
      "longitude": 19.602203,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1685890363,
      "ems": null
    },
    {
      "latitude": 51.587978,
      "longitude": 19.602509,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1685890366,
      "ems": null
    },
    {
      "latitude": 51.588547,
      "longitude": 19.602949,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1685890368,
      "ems": null
    },
    {
      "latitude": 51.589142,
      "longitude": 19.603693,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -3200,
        "ms": -16.3
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1685890371,
      "ems": null
    },
    {
      "latitude": 51.590073,
      "longitude": 19.604645,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1685890374,
      "ems": null
    },
    {
      "latitude": 51.591293,
      "longitude": 19.605696,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1685890378,
      "ems": null
    },
    {
      "latitude": 51.592209,
      "longitude": 19.60644,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1685890381,
      "ems": null
    },
    {
      "latitude": 51.593193,
      "longitude": 19.607239,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1685890383,
      "ems": null
    },
    {
      "latitude": 51.594269,
      "longitude": 19.607998,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1685890387,
      "ems": null
    },
    {
      "latitude": 51.59523,
      "longitude": 19.608665,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1685890390,
      "ems": null
    },
    {
      "latitude": 51.596268,
      "longitude": 19.609299,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1685890393,
      "ems": null
    },
    {
      "latitude": 51.59729,
      "longitude": 19.609833,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1685890396,
      "ems": null
    },
    {
      "latitude": 51.598297,
      "longitude": 19.610298,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1685890399,
      "ems": null
    },
    {
      "latitude": 51.599293,
      "longitude": 19.610748,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1685890402,
      "ems": null
    },
    {
      "latitude": 51.600361,
      "longitude": 19.61113,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1685890405,
      "ems": null
    },
    {
      "latitude": 51.601547,
      "longitude": 19.611635,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1685890408,
      "ems": null
    },
    {
      "latitude": 51.602505,
      "longitude": 19.611893,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1685890411,
      "ems": null
    },
    {
      "latitude": 51.603424,
      "longitude": 19.61208,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1685890413,
      "ems": null
    },
    {
      "latitude": 51.604645,
      "longitude": 19.611893,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1685890416,
      "ems": null
    },
    {
      "latitude": 51.60585,
      "longitude": 19.611115,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1685890420,
      "ems": null
    },
    {
      "latitude": 51.606766,
      "longitude": 19.609928,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1685890423,
      "ems": null
    },
    {
      "latitude": 51.607624,
      "longitude": 19.608536,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1685890426,
      "ems": null
    },
    {
      "latitude": 51.608418,
      "longitude": 19.607086,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685890429,
      "ems": null
    },
    {
      "latitude": 51.609146,
      "longitude": 19.60577,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1685890432,
      "ems": null
    },
    {
      "latitude": 51.609814,
      "longitude": 19.604645,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1685890434,
      "ems": null
    },
    {
      "latitude": 51.61084,
      "longitude": 19.602875,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1685890438,
      "ems": null
    },
    {
      "latitude": 51.611618,
      "longitude": 19.60154,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1685890441,
      "ems": null
    },
    {
      "latitude": 51.612488,
      "longitude": 19.600056,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1685890443,
      "ems": null
    },
    {
      "latitude": 51.613403,
      "longitude": 19.598495,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685890447,
      "ems": null
    },
    {
      "latitude": 51.614273,
      "longitude": 19.596714,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1685890450,
      "ems": null
    },
    {
      "latitude": 51.615005,
      "longitude": 19.59523,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1685890453,
      "ems": null
    },
    {
      "latitude": 51.615677,
      "longitude": 19.593658,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1685890456,
      "ems": null
    },
    {
      "latitude": 51.616425,
      "longitude": 19.59198,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1685890459,
      "ems": null
    },
    {
      "latitude": 51.618759,
      "longitude": 19.587584,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1685890468,
      "ems": null
    },
    {
      "latitude": 51.620987,
      "longitude": 19.584198,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1685890476,
      "ems": null
    },
    {
      "latitude": 51.621735,
      "longitude": 19.583279,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1685890480,
      "ems": null
    },
    {
      "latitude": 51.62294,
      "longitude": 19.581909,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1685890482,
      "ems": null
    },
    {
      "latitude": 51.62384,
      "longitude": 19.581125,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1685890485,
      "ems": null
    },
    {
      "latitude": 51.624985,
      "longitude": 19.58016,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1685890489,
      "ems": null
    },
    {
      "latitude": 51.625351,
      "longitude": 19.579937,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1685890490,
      "ems": null
    },
    {
      "latitude": 51.627045,
      "longitude": 19.578676,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1685890495,
      "ems": null
    },
    {
      "latitude": 51.628281,
      "longitude": 19.577934,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1685890499,
      "ems": null
    },
    {
      "latitude": 51.629837,
      "longitude": 19.57682,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1685890503,
      "ems": null
    },
    {
      "latitude": 51.631073,
      "longitude": 19.576004,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1685890507,
      "ems": null
    },
    {
      "latitude": 51.632671,
      "longitude": 19.574051,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1685890512,
      "ems": null
    },
    {
      "latitude": 51.633274,
      "longitude": 19.572525,
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1685890515,
      "ems": null
    },
    {
      "latitude": 51.633602,
      "longitude": 19.570999,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1685890517,
      "ems": null
    },
    {
      "latitude": 51.633739,
      "longitude": 19.568939,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1685890521,
      "ems": null
    },
    {
      "latitude": 51.633499,
      "longitude": 19.567097,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1685890524,
      "ems": null
    },
    {
      "latitude": 51.633087,
      "longitude": 19.56576,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1685890526,
      "ems": null
    },
    {
      "latitude": 51.632622,
      "longitude": 19.564896,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1685890528,
      "ems": null
    },
    {
      "latitude": 51.631599,
      "longitude": 19.563828,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1685890531,
      "ems": null
    },
    {
      "latitude": 51.630386,
      "longitude": 19.563311,
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1685890535,
      "ems": null
    },
    {
      "latitude": 51.628876,
      "longitude": 19.563681,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1685890539,
      "ems": null
    },
    {
      "latitude": 51.627876,
      "longitude": 19.564743,
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1685890543,
      "ems": null
    },
    {
      "latitude": 51.627178,
      "longitude": 19.56604,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1685890545,
      "ems": null
    },
    {
      "latitude": 51.626713,
      "longitude": 19.567795,
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1685890548,
      "ems": null
    },
    {
      "latitude": 51.626633,
      "longitude": 19.569546,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1685890551,
      "ems": null
    },
    {
      "latitude": 51.626678,
      "longitude": 19.569916,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1685890552,
      "ems": null
    },
    {
      "latitude": 51.627136,
      "longitude": 19.57192,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1685890556,
      "ems": null
    },
    {
      "latitude": 51.628342,
      "longitude": 19.574127,
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1685890560,
      "ems": null
    },
    {
      "latitude": 51.629829,
      "longitude": 19.575043,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1685890564,
      "ems": null
    },
    {
      "latitude": 51.631393,
      "longitude": 19.575039,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1685890568,
      "ems": null
    },
    {
      "latitude": 51.632401,
      "longitude": 19.574741,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1685890572,
      "ems": null
    },
    {
      "latitude": 51.633728,
      "longitude": 19.573553,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1685890576,
      "ems": null
    },
    {
      "latitude": 51.634918,
      "longitude": 19.571625,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1685890580,
      "ems": null
    },
    {
      "latitude": 51.636017,
      "longitude": 19.569546,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1685890584,
      "ems": null
    },
    {
      "latitude": 51.636795,
      "longitude": 19.567839,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1685890588,
      "ems": null
    },
    {
      "latitude": 51.63728,
      "longitude": 19.566727,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1685890591,
      "ems": null
    },
    {
      "latitude": 51.638077,
      "longitude": 19.564869,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1685890593,
      "ems": null
    },
    {
      "latitude": 51.638863,
      "longitude": 19.562912,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1685890597,
      "ems": null
    },
    {
      "latitude": 51.639328,
      "longitude": 19.561539,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1685890599,
      "ems": null
    },
    {
      "latitude": 51.640091,
      "longitude": 19.559525,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1685890603,
      "ems": null
    },
    {
      "latitude": 51.640457,
      "longitude": 19.558485,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1685890606,
      "ems": null
    },
    {
      "latitude": 51.641556,
      "longitude": 19.555367,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1685890610,
      "ems": null
    },
    {
      "latitude": 51.642307,
      "longitude": 19.552994,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1685890614,
      "ems": null
    },
    {
      "latitude": 51.642975,
      "longitude": 19.550543,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1685890618,
      "ems": null
    },
    {
      "latitude": 51.643517,
      "longitude": 19.548645,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1685890621,
      "ems": null
    },
    {
      "latitude": 51.643982,
      "longitude": 19.546906,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1685890624,
      "ems": null
    },
    {
      "latitude": 51.644539,
      "longitude": 19.544983,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1685890627,
      "ems": null
    },
    {
      "latitude": 51.6451,
      "longitude": 19.542999,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1685890630,
      "ems": null
    },
    {
      "latitude": 51.645401,
      "longitude": 19.542006,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1685890632,
      "ems": null
    },
    {
      "latitude": 51.64682,
      "longitude": 19.537254,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1685890640,
      "ems": null
    },
    {
      "latitude": 51.648285,
      "longitude": 19.531836,
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1685890649,
      "ems": null
    },
    {
      "latitude": 51.649841,
      "longitude": 19.52664,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1685890658,
      "ems": null
    },
    {
      "latitude": 51.650345,
      "longitude": 19.525229,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1685890660,
      "ems": null
    },
    {
      "latitude": 51.65213,
      "longitude": 19.52033,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1685890670,
      "ems": null
    },
    {
      "latitude": 51.652679,
      "longitude": 19.518919,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1685890673,
      "ems": null
    },
    {
      "latitude": 51.653229,
      "longitude": 19.517361,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1685890676,
      "ems": null
    },
    {
      "latitude": 51.653805,
      "longitude": 19.515915,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1685890679,
      "ems": null
    },
    {
      "latitude": 51.654327,
      "longitude": 19.514391,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1685890682,
      "ems": null
    },
    {
      "latitude": 51.655884,
      "longitude": 19.509937,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1685890691,
      "ems": null
    },
    {
      "latitude": 51.657436,
      "longitude": 19.505539,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1685890700,
      "ems": null
    },
    {
      "latitude": 51.65799,
      "longitude": 19.503851,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1685890703,
      "ems": null
    },
    {
      "latitude": 51.658413,
      "longitude": 19.502487,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1685890706,
      "ems": null
    },
    {
      "latitude": 51.660141,
      "longitude": 19.497763,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1685890715,
      "ems": null
    },
    {
      "latitude": 51.660835,
      "longitude": 19.496078,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1685890718,
      "ems": null
    },
    {
      "latitude": 51.661533,
      "longitude": 19.494553,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1685890721,
      "ems": null
    },
    {
      "latitude": 51.662247,
      "longitude": 19.492939,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1685890724,
      "ems": null
    },
    {
      "latitude": 51.662975,
      "longitude": 19.491425,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1685890727,
      "ems": null
    },
    {
      "latitude": 51.663803,
      "longitude": 19.489746,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1685890730,
      "ems": null
    },
    {
      "latitude": 51.664536,
      "longitude": 19.488188,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1685890733,
      "ems": null
    },
    {
      "latitude": 51.665257,
      "longitude": 19.486771,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1685890736,
      "ems": null
    },
    {
      "latitude": 51.666142,
      "longitude": 19.48494,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1685890739,
      "ems": null
    },
    {
      "latitude": 51.666885,
      "longitude": 19.48349,
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1685890742,
      "ems": null
    },
    {
      "latitude": 51.66774,
      "longitude": 19.481953,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685890745,
      "ems": null
    },
    {
      "latitude": 51.668289,
      "longitude": 19.480988,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685890747,
      "ems": null
    },
    {
      "latitude": 51.669296,
      "longitude": 19.479206,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685890751,
      "ems": null
    },
    {
      "latitude": 51.671028,
      "longitude": 19.476013,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685890757,
      "ems": null
    },
    {
      "latitude": 51.673691,
      "longitude": 19.471262,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685890766,
      "ems": null
    },
    {
      "latitude": 51.676334,
      "longitude": 19.466782,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1685890775,
      "ems": null
    },
    {
      "latitude": 51.679035,
      "longitude": 19.462509,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1685890784,
      "ems": null
    },
    {
      "latitude": 51.681839,
      "longitude": 19.45805,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1685890793,
      "ems": null
    },
    {
      "latitude": 51.684814,
      "longitude": 19.453447,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1685890802,
      "ems": null
    },
    {
      "latitude": 51.687698,
      "longitude": 19.448696,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1685890811,
      "ems": null
    },
    {
      "latitude": 51.689529,
      "longitude": 19.445282,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1685890817,
      "ems": null
    },
    {
      "latitude": 51.690399,
      "longitude": 19.443501,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1685890820,
      "ems": null
    },
    {
      "latitude": 51.691223,
      "longitude": 19.441717,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1685890823,
      "ems": null
    },
    {
      "latitude": 51.692093,
      "longitude": 19.439861,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1685890826,
      "ems": null
    },
    {
      "latitude": 51.692863,
      "longitude": 19.438324,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1685890829,
      "ems": null
    },
    {
      "latitude": 51.693653,
      "longitude": 19.436646,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1685890832,
      "ems": null
    },
    {
      "latitude": 51.694382,
      "longitude": 19.434963,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1685890835,
      "ems": null
    },
    {
      "latitude": 51.695004,
      "longitude": 19.433136,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1685890838,
      "ems": null
    },
    {
      "latitude": 51.69548,
      "longitude": 19.431177,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1685890841,
      "ems": null
    },
    {
      "latitude": 51.695889,
      "longitude": 19.429245,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1685890844,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.427391,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1685890847,
      "ems": null
    },
    {
      "latitude": 51.6964,
      "longitude": 19.425507,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1685890850,
      "ems": null
    },
    {
      "latitude": 51.696533,
      "longitude": 19.423679,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1685890853,
      "ems": null
    },
    {
      "latitude": 51.696487,
      "longitude": 19.421675,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1685890856,
      "ems": null
    },
    {
      "latitude": 51.696442,
      "longitude": 19.419819,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1685890859,
      "ems": null
    },
    {
      "latitude": 51.696308,
      "longitude": 19.418106,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685890862,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.41633,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685890865,
      "ems": null
    },
    {
      "latitude": 51.69598,
      "longitude": 19.414444,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685890868,
      "ems": null
    },
    {
      "latitude": 51.695847,
      "longitude": 19.412767,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685890871,
      "ems": null
    },
    {
      "latitude": 51.695709,
      "longitude": 19.410986,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685890874,
      "ems": null
    },
    {
      "latitude": 51.695572,
      "longitude": 19.40913,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685890877,
      "ems": null
    },
    {
      "latitude": 51.695389,
      "longitude": 19.407274,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685890880,
      "ems": null
    },
    {
      "latitude": 51.695236,
      "longitude": 19.405441,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685890883,
      "ems": null
    },
    {
      "latitude": 51.694725,
      "longitude": 19.400024,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1685890892,
      "ems": null
    },
    {
      "latitude": 51.694164,
      "longitude": 19.394531,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1685890902,
      "ems": null
    },
    {
      "latitude": 51.693699,
      "longitude": 19.389191,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1685890910,
      "ems": null
    },
    {
      "latitude": 51.693466,
      "longitude": 19.383743,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1685890919,
      "ems": null
    },
    {
      "latitude": 51.69342,
      "longitude": 19.381962,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1685890922,
      "ems": null
    },
    {
      "latitude": 51.693375,
      "longitude": 19.380402,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1685890925,
      "ems": null
    },
    {
      "latitude": 51.693279,
      "longitude": 19.378586,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1685890928,
      "ems": null
    },
    {
      "latitude": 51.693188,
      "longitude": 19.376755,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1685890932,
      "ems": null
    },
    {
      "latitude": 51.693142,
      "longitude": 19.375305,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1685890935,
      "ems": null
    },
    {
      "latitude": 51.693008,
      "longitude": 19.370085,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1685890944,
      "ems": null
    },
    {
      "latitude": 51.692768,
      "longitude": 19.366608,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685890950,
      "ems": null
    },
    {
      "latitude": 51.692677,
      "longitude": 19.365158,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685890952,
      "ems": null
    },
    {
      "latitude": 51.692211,
      "longitude": 19.359436,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685890962,
      "ems": null
    },
    {
      "latitude": 51.69207,
      "longitude": 19.354401,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1685890971,
      "ems": null
    },
    {
      "latitude": 51.692093,
      "longitude": 19.351154,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1685890977,
      "ems": null
    },
    {
      "latitude": 51.692368,
      "longitude": 19.349596,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1685890980,
      "ems": null
    },
    {
      "latitude": 51.69278,
      "longitude": 19.348261,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1685890982,
      "ems": null
    },
    {
      "latitude": 51.69342,
      "longitude": 19.346924,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1685890986,
      "ems": null
    },
    {
      "latitude": 51.694164,
      "longitude": 19.345856,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1685890988,
      "ems": null
    },
    {
      "latitude": 51.694931,
      "longitude": 19.344845,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1685890992,
      "ems": null
    },
    {
      "latitude": 51.695702,
      "longitude": 19.344101,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1685890995,
      "ems": null
    },
    {
      "latitude": 51.696587,
      "longitude": 19.343338,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1685890998,
      "ems": null
    },
    {
      "latitude": 51.697563,
      "longitude": 19.342575,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1685891001,
      "ems": null
    },
    {
      "latitude": 51.698456,
      "longitude": 19.342024,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1685891004,
      "ems": null
    },
    {
      "latitude": 51.699371,
      "longitude": 19.341579,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1685891006,
      "ems": null
    },
    {
      "latitude": 51.700516,
      "longitude": 19.341133,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1685891010,
      "ems": null
    },
    {
      "latitude": 51.701477,
      "longitude": 19.340837,
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1685891013,
      "ems": null
    },
    {
      "latitude": 51.702499,
      "longitude": 19.340439,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1685891016,
      "ems": null
    },
    {
      "latitude": 51.703583,
      "longitude": 19.340168,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1685891019,
      "ems": null
    },
    {
      "latitude": 51.704594,
      "longitude": 19.340134,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1685891022,
      "ems": null
    },
    {
      "latitude": 51.705597,
      "longitude": 19.340317,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1685891024,
      "ems": null
    },
    {
      "latitude": 51.706688,
      "longitude": 19.340897,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1685891028,
      "ems": null
    },
    {
      "latitude": 51.707657,
      "longitude": 19.341654,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1685891031,
      "ems": null
    },
    {
      "latitude": 51.708618,
      "longitude": 19.342619,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1685891034,
      "ems": null
    },
    {
      "latitude": 51.709488,
      "longitude": 19.343731,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1685891037,
      "ems": null
    },
    {
      "latitude": 51.710312,
      "longitude": 19.345142,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1685891040,
      "ems": null
    },
    {
      "latitude": 51.710815,
      "longitude": 19.346775,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1685891043,
      "ems": null
    },
    {
      "latitude": 51.711044,
      "longitude": 19.348112,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1685891045,
      "ems": null
    },
    {
      "latitude": 51.711319,
      "longitude": 19.349968,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1685891049,
      "ems": null
    },
    {
      "latitude": 51.711575,
      "longitude": 19.351349,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1685891052,
      "ems": null
    },
    {
      "latitude": 51.711948,
      "longitude": 19.352875,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1685891055,
      "ems": null
    },
    {
      "latitude": 51.712227,
      "longitude": 19.354095,
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
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891058,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 19.355545,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1685891061,
      "ems": null
    },
    {
      "latitude": 51.712879,
      "longitude": 19.356842,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1685891064,
      "ems": null
    },
    {
      "latitude": 51.713196,
      "longitude": 19.358282,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1685891067,
      "ems": null
    },
    {
      "latitude": 51.71347,
      "longitude": 19.359468,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1685891070,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 19.361919,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891076,
      "ems": null
    },
    {
      "latitude": 51.714836,
      "longitude": 19.365616,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1685891084,
      "ems": null
    },
    {
      "latitude": 51.71595,
      "longitude": 19.371109,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1685891093,
      "ems": null
    },
    {
      "latitude": 51.719879,
      "longitude": 19.389088,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1685891133,
      "ems": null
    },
    {
      "latitude": 51.720654,
      "longitude": 19.392242,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1685891142,
      "ems": null
    },
    {
      "latitude": 51.72139,
      "longitude": 19.395695,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1685891147,
      "ems": null
    },
    {
      "latitude": 51.721725,
      "longitude": 19.39743,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1685891151,
      "ems": null
    },
    {
      "latitude": 51.722031,
      "longitude": 19.399035,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1685891154,
      "ems": null
    },
    {
      "latitude": 51.722946,
      "longitude": 19.403414,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1685891163,
      "ems": null
    },
    {
      "latitude": 51.724144,
      "longitude": 19.408875,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1685891172,
      "ems": null
    },
    {
      "latitude": 51.725281,
      "longitude": 19.413658,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891181,
      "ems": null
    },
    {
      "latitude": 51.726059,
      "longitude": 19.416925,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1685891187,
      "ems": null
    },
    {
      "latitude": 51.726654,
      "longitude": 19.418707,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1685891191,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 19.420042,
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1685891194,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.421005,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1685891197,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.421749,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1685891199,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.422195,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1685891203,
      "ems": null
    },
    {
      "latitude": 51.731129,
      "longitude": 19.422302,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1685891205,
      "ems": null
    },
    {
      "latitude": 51.732147,
      "longitude": 19.422195,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1685891208,
      "ems": null
    },
    {
      "latitude": 51.733063,
      "longitude": 19.421824,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1685891211,
      "ems": null
    },
    {
      "latitude": 51.734161,
      "longitude": 19.421305,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1685891214,
      "ems": null
    },
    {
      "latitude": 51.735077,
      "longitude": 19.420858,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1685891217,
      "ems": null
    },
    {
      "latitude": 51.736038,
      "longitude": 19.42034,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1685891220,
      "ems": null
    },
    {
      "latitude": 51.736992,
      "longitude": 19.419861,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1685891224,
      "ems": null
    },
    {
      "latitude": 51.737823,
      "longitude": 19.419077,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1685891226,
      "ems": null
    },
    {
      "latitude": 51.738556,
      "longitude": 19.417889,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685891230,
      "ems": null
    },
    {
      "latitude": 51.73904,
      "longitude": 19.416656,
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1685891232,
      "ems": null
    },
    {
      "latitude": 51.73938,
      "longitude": 19.414846,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1685891235,
      "ems": null
    },
    {
      "latitude": 51.739517,
      "longitude": 19.412842,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1685891238,
      "ems": null
    },
    {
      "latitude": 51.739368,
      "longitude": 19.410858,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1685891241,
      "ems": null
    },
    {
      "latitude": 51.739136,
      "longitude": 19.408875,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1685891244,
      "ems": null
    },
    {
      "latitude": 51.738785,
      "longitude": 19.406902,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1685891247,
      "ems": null
    },
    {
      "latitude": 51.738388,
      "longitude": 19.404984,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1685891250,
      "ems": null
    },
    {
      "latitude": 51.737961,
      "longitude": 19.402746,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1685891254,
      "ems": null
    },
    {
      "latitude": 51.737549,
      "longitude": 19.40089,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1685891256,
      "ems": null
    },
    {
      "latitude": 51.737087,
      "longitude": 19.398804,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1685891260,
      "ems": null
    },
    {
      "latitude": 51.736668,
      "longitude": 19.39682,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1685891263,
      "ems": null
    },
    {
      "latitude": 51.736294,
      "longitude": 19.394913,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1685891266,
      "ems": null
    },
    {
      "latitude": 51.736015,
      "longitude": 19.393387,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1685891268,
      "ems": null
    },
    {
      "latitude": 51.735691,
      "longitude": 19.391174,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1685891272,
      "ems": null
    },
    {
      "latitude": 51.735226,
      "longitude": 19.387207,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1685891277,
      "ems": null
    },
    {
      "latitude": 51.735031,
      "longitude": 19.385599,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1685891280,
      "ems": null
    },
    {
      "latitude": 51.734756,
      "longitude": 19.383371,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1685891284,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.381485,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685891287,
      "ems": null
    },
    {
      "latitude": 51.73439,
      "longitude": 19.37966,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1685891289,
      "ems": null
    },
    {
      "latitude": 51.734207,
      "longitude": 19.377804,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685891292,
      "ems": null
    },
    {
      "latitude": 51.734062,
      "longitude": 19.375763,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685891296,
      "ems": null
    },
    {
      "latitude": 51.733921,
      "longitude": 19.373932,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1685891299,
      "ems": null
    },
    {
      "latitude": 51.733337,
      "longitude": 19.368599,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1685891308,
      "ems": null
    },
    {
      "latitude": 51.732803,
      "longitude": 19.363403,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685891317,
      "ems": null
    },
    {
      "latitude": 51.732292,
      "longitude": 19.358292,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1685891326,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.353382,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685891335,
      "ems": null
    },
    {
      "latitude": 51.731594,
      "longitude": 19.34845,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685891344,
      "ems": null
    },
    {
      "latitude": 51.731033,
      "longitude": 19.343491,
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1685891353,
      "ems": null
    },
    {
      "latitude": 51.730801,
      "longitude": 19.342041,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1685891356,
      "ems": null
    },
    {
      "latitude": 51.730618,
      "longitude": 19.340439,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1685891359,
      "ems": null
    },
    {
      "latitude": 51.730362,
      "longitude": 19.338907,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1685891362,
      "ems": null
    },
    {
      "latitude": 51.730042,
      "longitude": 19.337421,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1685891365,
      "ems": null
    },
    {
      "latitude": 51.729683,
      "longitude": 19.335861,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1685891368,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.334305,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1685891371,
      "ems": null
    },
    {
      "latitude": 51.72876,
      "longitude": 19.332968,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1685891374,
      "ems": null
    },
    {
      "latitude": 51.728256,
      "longitude": 19.332003,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1685891376,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 19.330891,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1685891380,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.330292,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1685891383,
      "ems": null
    },
    {
      "latitude": 51.725636,
      "longitude": 19.329987,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1685891385,
      "ems": null
    },
    {
      "latitude": 51.724457,
      "longitude": 19.329851,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1685891389,
      "ems": null
    },
    {
      "latitude": 51.723221,
      "longitude": 19.329777,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1685891392,
      "ems": null
    },
    {
      "latitude": 51.72205,
      "longitude": 19.329681,
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1685891395,
      "ems": null
    },
    {
      "latitude": 51.721027,
      "longitude": 19.329605,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1685891398,
      "ems": null
    },
    {
      "latitude": 51.719879,
      "longitude": 19.329479,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1685891401,
      "ems": null
    },
    {
      "latitude": 51.718781,
      "longitude": 19.329405,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1685891404,
      "ems": null
    },
    {
      "latitude": 51.717766,
      "longitude": 19.3293,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1685891407,
      "ems": null
    },
    {
      "latitude": 51.716698,
      "longitude": 19.3293,
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1685891410,
      "ems": null
    },
    {
      "latitude": 51.715576,
      "longitude": 19.32933,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1685891413,
      "ems": null
    },
    {
      "latitude": 51.714603,
      "longitude": 19.329529,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1685891416,
      "ems": null
    },
    {
      "latitude": 51.713562,
      "longitude": 19.329851,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1685891419,
      "ems": null
    },
    {
      "latitude": 51.712601,
      "longitude": 19.330742,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1685891422,
      "ems": null
    },
    {
      "latitude": 51.711948,
      "longitude": 19.331818,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1685891425,
      "ems": null
    },
    {
      "latitude": 51.711365,
      "longitude": 19.333414,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1685891428,
      "ems": null
    },
    {
      "latitude": 51.710876,
      "longitude": 19.334946,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1685891431,
      "ems": null
    },
    {
      "latitude": 51.710506,
      "longitude": 19.336548,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1685891434,
      "ems": null
    },
    {
      "latitude": 51.71022,
      "longitude": 19.338017,
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1685891437,
      "ems": null
    },
    {
      "latitude": 51.709991,
      "longitude": 19.339649,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1685891440,
      "ems": null
    },
    {
      "latitude": 51.709854,
      "longitude": 19.341505,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1685891443,
      "ems": null
    },
    {
      "latitude": 51.7099,
      "longitude": 19.343109,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1685891446,
      "ems": null
    },
    {
      "latitude": 51.710087,
      "longitude": 19.344482,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1685891449,
      "ems": null
    },
    {
      "latitude": 51.710495,
      "longitude": 19.346256,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1685891452,
      "ems": null
    },
    {
      "latitude": 51.710861,
      "longitude": 19.347666,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1685891455,
      "ems": null
    },
    {
      "latitude": 51.711296,
      "longitude": 19.349289,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1685891458,
      "ems": null
    },
    {
      "latitude": 51.711624,
      "longitude": 19.350739,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1685891461,
      "ems": null
    },
    {
      "latitude": 51.711868,
      "longitude": 19.351824,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891464,
      "ems": null
    },
    {
      "latitude": 51.712326,
      "longitude": 19.353975,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1685891467,
      "ems": null
    },
    {
      "latitude": 51.712601,
      "longitude": 19.355545,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1685891470,
      "ems": null
    },
    {
      "latitude": 51.712833,
      "longitude": 19.356918,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1685891473,
      "ems": null
    },
    {
      "latitude": 51.71315,
      "longitude": 19.358503,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1685891476,
      "ems": null
    },
    {
      "latitude": 51.71347,
      "longitude": 19.359989,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891479,
      "ems": null
    },
    {
      "latitude": 51.714203,
      "longitude": 19.363031,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891485,
      "ems": null
    },
    {
      "latitude": 51.715206,
      "longitude": 19.367752,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1685891494,
      "ems": null
    },
    {
      "latitude": 51.716324,
      "longitude": 19.372635,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891504,
      "ems": null
    },
    {
      "latitude": 51.721344,
      "longitude": 19.396065,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1685891554,
      "ems": null
    },
    {
      "latitude": 51.722076,
      "longitude": 19.4,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1685891562,
      "ems": null
    },
    {
      "latitude": 51.722763,
      "longitude": 19.402969,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891567,
      "ems": null
    },
    {
      "latitude": 51.723129,
      "longitude": 19.404602,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891570,
      "ems": null
    },
    {
      "latitude": 51.724045,
      "longitude": 19.409279,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1685891579,
      "ems": null
    },
    {
      "latitude": 51.724915,
      "longitude": 19.4144,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1685891588,
      "ems": null
    },
    {
      "latitude": 51.726055,
      "longitude": 19.418411,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1685891596,
      "ems": null
    },
    {
      "latitude": 51.727112,
      "longitude": 19.419968,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1685891600,
      "ems": null
    },
    {
      "latitude": 51.728027,
      "longitude": 19.420858,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1685891603,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.421453,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1685891606,
      "ems": null
    },
    {
      "latitude": 51.730011,
      "longitude": 19.421692,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1685891608,
      "ems": null
    },
    {
      "latitude": 51.731033,
      "longitude": 19.421768,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1685891611,
      "ems": null
    },
    {
      "latitude": 51.732059,
      "longitude": 19.421692,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1685891615,
      "ems": null
    },
    {
      "latitude": 51.733109,
      "longitude": 19.421379,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1685891618,
      "ems": null
    },
    {
      "latitude": 51.734207,
      "longitude": 19.420933,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1685891621,
      "ems": null
    },
    {
      "latitude": 51.735271,
      "longitude": 19.420547,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1685891624,
      "ems": null
    },
    {
      "latitude": 51.736221,
      "longitude": 19.420116,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1685891627,
      "ems": null
    },
    {
      "latitude": 51.737041,
      "longitude": 19.419632,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1685891630,
      "ems": null
    },
    {
      "latitude": 51.737831,
      "longitude": 19.418945,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1685891633,
      "ems": null
    },
    {
      "latitude": 51.738857,
      "longitude": 19.417419,
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1685891636,
      "ems": null
    },
    {
      "latitude": 51.739426,
      "longitude": 19.415737,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1685891639,
      "ems": null
    },
    {
      "latitude": 51.739693,
      "longitude": 19.414063,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1685891642,
      "ems": null
    },
    {
      "latitude": 51.739647,
      "longitude": 19.412308,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1685891645,
      "ems": null
    },
    {
      "latitude": 51.739414,
      "longitude": 19.410782,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1685891648,
      "ems": null
    },
    {
      "latitude": 51.738968,
      "longitude": 19.408833,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1685891651,
      "ems": null
    },
    {
      "latitude": 51.738575,
      "longitude": 19.407196,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1685891653,
      "ems": null
    },
    {
      "latitude": 51.73811,
      "longitude": 19.405289,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1685891657,
      "ems": null
    },
    {
      "latitude": 51.73764,
      "longitude": 19.403488,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1685891660,
      "ems": null
    },
    {
      "latitude": 51.737091,
      "longitude": 19.401409,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1685891663,
      "ems": null
    },
    {
      "latitude": 51.736633,
      "longitude": 19.399555,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1685891666,
      "ems": null
    },
    {
      "latitude": 51.736248,
      "longitude": 19.397736,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1685891669,
      "ems": null
    },
    {
      "latitude": 51.735855,
      "longitude": 19.395769,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1685891672,
      "ems": null
    },
    {
      "latitude": 51.735489,
      "longitude": 19.393913,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1685891675,
      "ems": null
    },
    {
      "latitude": 51.734898,
      "longitude": 19.390259,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1685891681,
      "ems": null
    },
    {
      "latitude": 51.734573,
      "longitude": 19.388046,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1685891684,
      "ems": null
    },
    {
      "latitude": 51.734295,
      "longitude": 19.386368,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1685891687,
      "ems": null
    },
    {
      "latitude": 51.733967,
      "longitude": 19.384079,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1685891690,
      "ems": null
    },
    {
      "latitude": 51.733795,
      "longitude": 19.382332,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1685891693,
      "ems": null
    },
    {
      "latitude": 51.733566,
      "longitude": 19.380255,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1685891696,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 19.378204,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1685891699,
      "ems": null
    },
    {
      "latitude": 51.733036,
      "longitude": 19.376144,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1685891702,
      "ems": null
    },
    {
      "latitude": 51.732849,
      "longitude": 19.374466,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1685891705,
      "ems": null
    },
    {
      "latitude": 51.732101,
      "longitude": 19.368303,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1685891714,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.366596,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1685891717,
      "ems": null
    },
    {
      "latitude": 51.731499,
      "longitude": 19.360962,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1685891726,
      "ems": null
    },
    {
      "latitude": 51.731407,
      "longitude": 19.359283,
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685891729,
      "ems": null
    },
    {
      "latitude": 51.731266,
      "longitude": 19.357452,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1685891732,
      "ems": null
    },
    {
      "latitude": 51.730728,
      "longitude": 19.351898,
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1685891741,
      "ems": null
    },
    {
      "latitude": 51.730362,
      "longitude": 19.346626,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1685891750,
      "ems": null
    },
    {
      "latitude": 51.730198,
      "longitude": 19.344864,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1685891753,
      "ems": null
    },
    {
      "latitude": 51.729824,
      "longitude": 19.343338,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1685891756,
      "ems": null
    },
    {
      "latitude": 51.729263,
      "longitude": 19.341949,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1685891759,
      "ems": null
    },
    {
      "latitude": 51.728348,
      "longitude": 19.340763,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1685891762,
      "ems": null
    },
    {
      "latitude": 51.727497,
      "longitude": 19.34021,
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1685891765,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 19.340094,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1685891768,
      "ems": null
    },
    {
      "latitude": 51.725357,
      "longitude": 19.340439,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1685891771,
      "ems": null
    },
    {
      "latitude": 51.724331,
      "longitude": 19.341278,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1685891774,
      "ems": null
    },
    {
      "latitude": 51.723541,
      "longitude": 19.342247,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1685891777,
      "ems": null
    },
    {
      "latitude": 51.722794,
      "longitude": 19.343414,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1685891780,
      "ems": null
    },
    {
      "latitude": 51.722168,
      "longitude": 19.34477,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1685891783,
      "ems": null
    },
    {
      "latitude": 51.721676,
      "longitude": 19.346161,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1685891786,
      "ems": null
    },
    {
      "latitude": 51.72121,
      "longitude": 19.347687,
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1685891789,
      "ems": null
    },
    {
      "latitude": 51.72084,
      "longitude": 19.349152,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685891792,
      "ems": null
    },
    {
      "latitude": 51.720474,
      "longitude": 19.350561,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685891795,
      "ems": null
    },
    {
      "latitude": 51.720097,
      "longitude": 19.352112,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685891798,
      "ems": null
    },
    {
      "latitude": 51.719723,
      "longitude": 19.353561,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685891801,
      "ems": null
    },
    {
      "latitude": 51.719349,
      "longitude": 19.355011,
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1685891804,
      "ems": null
    },
    {
      "latitude": 51.719025,
      "longitude": 19.356384,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1685891807,
      "ems": null
    },
    {
      "latitude": 51.718559,
      "longitude": 19.358521,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1685891811,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.359894,
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1685891813,
      "ems": null
    },
    {
      "latitude": 51.717953,
      "longitude": 19.361343,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1685891816,
      "ems": null
    },
    {
      "latitude": 51.716858,
      "longitude": 19.366001,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1685891824,
      "ems": null
    },
    {
      "latitude": 51.716263,
      "longitude": 19.372311,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1685891836,
      "ems": null
    },
    {
      "latitude": 51.716648,
      "longitude": 19.374161,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1685891839,
      "ems": null
    },
    {
      "latitude": 51.716766,
      "longitude": 19.374687,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1685891840,
      "ems": null
    }
  ],
};
