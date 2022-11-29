import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20221128EPLLEPLL",
    callsign: "BNI8AX",
    name: "Hour building with Tomek",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 10, 28, 11, 30).getTime(),
    arrival: new Date(2022, 10, 28, 13, 30).getTime(),
    singleEnginePistonTime: 120,
    multiEnginePistonTime: 0,
    picTime: 120,
    dualTime: 0,
    nightTime: 0,
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
      registration: "SP-HSI",
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
      "latitude": 51.721165,
      "longitude": 19.394531,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 254,
      "squawk": "0",
      "timestamp": 1669634883,
      "ems": null
    },
    {
      "latitude": 51.720329,
      "longitude": 19.390488,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1669634891,
      "ems": null
    },
    {
      "latitude": 51.719723,
      "longitude": 19.388046,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669634896,
      "ems": null
    },
    {
      "latitude": 51.71907,
      "longitude": 19.384613,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669634904,
      "ems": null
    },
    {
      "latitude": 51.71846,
      "longitude": 19.381071,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669634911,
      "ems": null
    },
    {
      "latitude": 51.718281,
      "longitude": 19.379501,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669634914,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 19.378027,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669634917,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.376678,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669634919,
      "ems": null
    },
    {
      "latitude": 51.717041,
      "longitude": 19.372683,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669634926,
      "ems": null
    },
    {
      "latitude": 51.716309,
      "longitude": 19.36912,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669634932,
      "ems": null
    },
    {
      "latitude": 51.715672,
      "longitude": 19.365387,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669634938,
      "ems": null
    },
    {
      "latitude": 51.71521,
      "longitude": 19.361919,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669634944,
      "ems": null
    },
    {
      "latitude": 51.714695,
      "longitude": 19.358292,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669634950,
      "ems": null
    },
    {
      "latitude": 51.714478,
      "longitude": 19.356647,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669634953,
      "ems": null
    },
    {
      "latitude": 51.713654,
      "longitude": 19.353456,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669634959,
      "ems": null
    },
    {
      "latitude": 51.713104,
      "longitude": 19.35264,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1669634962,
      "ems": null
    },
    {
      "latitude": 51.712368,
      "longitude": 19.352036,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1669634965,
      "ems": null
    },
    {
      "latitude": 51.711624,
      "longitude": 19.35173,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1669634968,
      "ems": null
    },
    {
      "latitude": 51.710815,
      "longitude": 19.351452,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1669634971,
      "ems": null
    },
    {
      "latitude": 51.710083,
      "longitude": 19.351303,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1669634974,
      "ems": null
    },
    {
      "latitude": 51.709213,
      "longitude": 19.351229,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1669634977,
      "ems": null
    },
    {
      "latitude": 51.708458,
      "longitude": 19.351196,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1669634980,
      "ems": null
    },
    {
      "latitude": 51.707619,
      "longitude": 19.351196,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1669634983,
      "ems": null
    },
    {
      "latitude": 51.706779,
      "longitude": 19.35112,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1669634986,
      "ems": null
    },
    {
      "latitude": 51.706131,
      "longitude": 19.350967,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1669634989,
      "ems": null
    },
    {
      "latitude": 51.705414,
      "longitude": 19.350859,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1669634992,
      "ems": null
    },
    {
      "latitude": 51.704781,
      "longitude": 19.350815,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1669634994,
      "ems": null
    },
    {
      "latitude": 51.70385,
      "longitude": 19.350739,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1669634998,
      "ems": null
    },
    {
      "latitude": 51.703079,
      "longitude": 19.350784,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1669635001,
      "ems": null
    },
    {
      "latitude": 51.702267,
      "longitude": 19.350739,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1669635004,
      "ems": null
    },
    {
      "latitude": 51.701248,
      "longitude": 19.350784,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1669635007,
      "ems": null
    },
    {
      "latitude": 51.700424,
      "longitude": 19.350859,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1669635010,
      "ems": null
    },
    {
      "latitude": 51.699554,
      "longitude": 19.351007,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1669635013,
      "ems": null
    },
    {
      "latitude": 51.698685,
      "longitude": 19.351377,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1669635016,
      "ems": null
    },
    {
      "latitude": 51.697906,
      "longitude": 19.351749,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1669635019,
      "ems": null
    },
    {
      "latitude": 51.697083,
      "longitude": 19.352194,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1669635022,
      "ems": null
    },
    {
      "latitude": 51.696259,
      "longitude": 19.352646,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1669635025,
      "ems": null
    },
    {
      "latitude": 51.695377,
      "longitude": 19.35318,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1669635028,
      "ems": null
    },
    {
      "latitude": 51.694397,
      "longitude": 19.353714,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1669635031,
      "ems": null
    },
    {
      "latitude": 51.693512,
      "longitude": 19.354124,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1669635034,
      "ems": null
    },
    {
      "latitude": 51.692596,
      "longitude": 19.35457,
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1669635038,
      "ems": null
    },
    {
      "latitude": 51.69165,
      "longitude": 19.354935,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1669635040,
      "ems": null
    },
    {
      "latitude": 51.690861,
      "longitude": 19.355392,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1669635043,
      "ems": null
    },
    {
      "latitude": 51.690033,
      "longitude": 19.356203,
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
      "squawk": "7000",
      "timestamp": 1669635046,
      "ems": null
    },
    {
      "latitude": 51.689323,
      "longitude": 19.3573,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1669635049,
      "ems": null
    },
    {
      "latitude": 51.688858,
      "longitude": 19.358368,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1669635052,
      "ems": null
    },
    {
      "latitude": 51.688431,
      "longitude": 19.359766,
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1669635055,
      "ems": null
    },
    {
      "latitude": 51.68816,
      "longitude": 19.36142,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1669635058,
      "ems": null
    },
    {
      "latitude": 51.68811,
      "longitude": 19.363106,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1669635061,
      "ems": null
    },
    {
      "latitude": 51.688248,
      "longitude": 19.365185,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635065,
      "ems": null
    },
    {
      "latitude": 51.688484,
      "longitude": 19.367065,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635068,
      "ems": null
    },
    {
      "latitude": 51.688797,
      "longitude": 19.369045,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635071,
      "ems": null
    },
    {
      "latitude": 51.689091,
      "longitude": 19.370575,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635073,
      "ems": null
    },
    {
      "latitude": 51.689438,
      "longitude": 19.372534,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669635076,
      "ems": null
    },
    {
      "latitude": 51.68985,
      "longitude": 19.374762,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635080,
      "ems": null
    },
    {
      "latitude": 51.690163,
      "longitude": 19.376602,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635082,
      "ems": null
    },
    {
      "latitude": 51.690487,
      "longitude": 19.378281,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635085,
      "ems": null
    },
    {
      "latitude": 51.690857,
      "longitude": 19.380329,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635089,
      "ems": null
    },
    {
      "latitude": 51.691223,
      "longitude": 19.382111,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669635091,
      "ems": null
    },
    {
      "latitude": 51.691681,
      "longitude": 19.384113,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635095,
      "ems": null
    },
    {
      "latitude": 51.692024,
      "longitude": 19.385757,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635097,
      "ems": null
    },
    {
      "latitude": 51.692677,
      "longitude": 19.389801,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635103,
      "ems": null
    },
    {
      "latitude": 51.69278,
      "longitude": 19.39176,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1669635106,
      "ems": null
    },
    {
      "latitude": 51.692734,
      "longitude": 19.393913,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1669635110,
      "ems": null
    },
    {
      "latitude": 51.692551,
      "longitude": 19.395844,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1669635113,
      "ems": null
    },
    {
      "latitude": 51.692368,
      "longitude": 19.397551,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1669635116,
      "ems": null
    },
    {
      "latitude": 51.692093,
      "longitude": 19.399481,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1669635119,
      "ems": null
    },
    {
      "latitude": 51.691883,
      "longitude": 19.401016,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1669635121,
      "ems": null
    },
    {
      "latitude": 51.69165,
      "longitude": 19.403,
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1669635125,
      "ems": null
    },
    {
      "latitude": 51.691406,
      "longitude": 19.405048,
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1669635128,
      "ems": null
    },
    {
      "latitude": 51.691269,
      "longitude": 19.406977,
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1669635131,
      "ems": null
    },
    {
      "latitude": 51.691139,
      "longitude": 19.408798,
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1669635134,
      "ems": null
    },
    {
      "latitude": 51.691048,
      "longitude": 19.410553,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1669635136,
      "ems": null
    },
    {
      "latitude": 51.690861,
      "longitude": 19.414291,
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1669635143,
      "ems": null
    },
    {
      "latitude": 51.690861,
      "longitude": 19.414902,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1669635144,
      "ems": null
    },
    {
      "latitude": 51.690765,
      "longitude": 19.416809,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1669635147,
      "ems": null
    },
    {
      "latitude": 51.690765,
      "longitude": 19.418781,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1669635150,
      "ems": null
    },
    {
      "latitude": 51.69072,
      "longitude": 19.421453,
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1669635154,
      "ems": null
    },
    {
      "latitude": 51.690674,
      "longitude": 19.423382,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1669635157,
      "ems": null
    },
    {
      "latitude": 51.690491,
      "longitude": 19.427242,
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1669635163,
      "ems": null
    },
    {
      "latitude": 51.690445,
      "longitude": 19.430658,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1669635169,
      "ems": null
    },
    {
      "latitude": 51.690441,
      "longitude": 19.432678,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1669635172,
      "ems": null
    },
    {
      "latitude": 51.690582,
      "longitude": 19.434586,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635175,
      "ems": null
    },
    {
      "latitude": 51.69072,
      "longitude": 19.436264,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635178,
      "ems": null
    },
    {
      "latitude": 51.690811,
      "longitude": 19.437338,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635180,
      "ems": null
    },
    {
      "latitude": 51.691048,
      "longitude": 19.440002,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635184,
      "ems": null
    },
    {
      "latitude": 51.69128,
      "longitude": 19.441757,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635187,
      "ems": null
    },
    {
      "latitude": 51.691406,
      "longitude": 19.443054,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635189,
      "ems": null
    },
    {
      "latitude": 51.69165,
      "longitude": 19.444962,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635192,
      "ems": null
    },
    {
      "latitude": 51.691956,
      "longitude": 19.447359,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635196,
      "ems": null
    },
    {
      "latitude": 51.692139,
      "longitude": 19.449066,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635199,
      "ems": null
    },
    {
      "latitude": 51.692368,
      "longitude": 19.450922,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635202,
      "ems": null
    },
    {
      "latitude": 51.692722,
      "longitude": 19.454803,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635208,
      "ems": null
    },
    {
      "latitude": 51.693008,
      "longitude": 19.458643,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635214,
      "ems": null
    },
    {
      "latitude": 51.693233,
      "longitude": 19.462357,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635220,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.464211,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635223,
      "ems": null
    },
    {
      "latitude": 51.693375,
      "longitude": 19.465843,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635226,
      "ems": null
    },
    {
      "latitude": 51.693466,
      "longitude": 19.467087,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635229,
      "ems": null
    },
    {
      "latitude": 51.693745,
      "longitude": 19.471893,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635235,
      "ems": null
    },
    {
      "latitude": 51.694118,
      "longitude": 19.475479,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635242,
      "ems": null
    },
    {
      "latitude": 51.694565,
      "longitude": 19.479206,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669635248,
      "ems": null
    },
    {
      "latitude": 51.694748,
      "longitude": 19.480616,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669635250,
      "ems": null
    },
    {
      "latitude": 51.695004,
      "longitude": 19.482346,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669635253,
      "ems": null
    },
    {
      "latitude": 51.695145,
      "longitude": 19.483414,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635257,
      "ems": null
    },
    {
      "latitude": 51.695423,
      "longitude": 19.485703,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635259,
      "ems": null
    },
    {
      "latitude": 51.695747,
      "longitude": 19.487839,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635263,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.49123,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635269,
      "ems": null
    },
    {
      "latitude": 51.696625,
      "longitude": 19.49472,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635274,
      "ems": null
    },
    {
      "latitude": 51.697098,
      "longitude": 19.498367,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669635281,
      "ems": null
    },
    {
      "latitude": 51.69754,
      "longitude": 19.501995,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635287,
      "ems": null
    },
    {
      "latitude": 51.697937,
      "longitude": 19.505692,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635293,
      "ems": null
    },
    {
      "latitude": 51.698318,
      "longitude": 19.509121,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635298,
      "ems": null
    },
    {
      "latitude": 51.698589,
      "longitude": 19.512177,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635303,
      "ems": null
    },
    {
      "latitude": 51.6991,
      "longitude": 19.517822,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635313,
      "ems": null
    },
    {
      "latitude": 51.69928,
      "longitude": 19.52033,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635318,
      "ems": null
    },
    {
      "latitude": 51.699612,
      "longitude": 19.524918,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635324,
      "ems": null
    },
    {
      "latitude": 51.699921,
      "longitude": 19.528496,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635330,
      "ems": null
    },
    {
      "latitude": 51.700333,
      "longitude": 19.533024,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635338,
      "ems": null
    },
    {
      "latitude": 51.700638,
      "longitude": 19.536667,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635344,
      "ems": null
    },
    {
      "latitude": 51.700974,
      "longitude": 19.540373,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635350,
      "ems": null
    },
    {
      "latitude": 51.701286,
      "longitude": 19.543839,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635356,
      "ems": null
    },
    {
      "latitude": 51.701569,
      "longitude": 19.547577,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635362,
      "ems": null
    },
    {
      "latitude": 51.701843,
      "longitude": 19.551062,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635368,
      "ems": null
    },
    {
      "latitude": 51.701981,
      "longitude": 19.553215,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635371,
      "ems": null
    },
    {
      "latitude": 51.702026,
      "longitude": 19.555145,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1669635374,
      "ems": null
    },
    {
      "latitude": 51.70208,
      "longitude": 19.556808,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1669635377,
      "ems": null
    },
    {
      "latitude": 51.702267,
      "longitude": 19.560165,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635383,
      "ems": null
    },
    {
      "latitude": 51.702499,
      "longitude": 19.563065,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635388,
      "ems": null
    },
    {
      "latitude": 51.702805,
      "longitude": 19.565462,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669635392,
      "ems": null
    },
    {
      "latitude": 51.703079,
      "longitude": 19.567244,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669635395,
      "ems": null
    },
    {
      "latitude": 51.703335,
      "longitude": 19.568939,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669635398,
      "ems": null
    },
    {
      "latitude": 51.703617,
      "longitude": 19.570694,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635401,
      "ems": null
    },
    {
      "latitude": 51.70385,
      "longitude": 19.572144,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635403,
      "ems": null
    },
    {
      "latitude": 51.704266,
      "longitude": 19.574432,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635407,
      "ems": null
    },
    {
      "latitude": 51.704548,
      "longitude": 19.575958,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635410,
      "ems": null
    },
    {
      "latitude": 51.704826,
      "longitude": 19.577866,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635413,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 19.579544,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635416,
      "ems": null
    },
    {
      "latitude": 51.705688,
      "longitude": 19.583353,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635422,
      "ems": null
    },
    {
      "latitude": 51.706238,
      "longitude": 19.58699,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669635428,
      "ems": null
    },
    {
      "latitude": 51.70665,
      "longitude": 19.589811,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669635433,
      "ems": null
    },
    {
      "latitude": 51.707199,
      "longitude": 19.594116,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635440,
      "ems": null
    },
    {
      "latitude": 51.707432,
      "longitude": 19.596405,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635444,
      "ems": null
    },
    {
      "latitude": 51.707619,
      "longitude": 19.598618,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635447,
      "ems": null
    },
    {
      "latitude": 51.707806,
      "longitude": 19.600601,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635450,
      "ems": null
    },
    {
      "latitude": 51.707977,
      "longitude": 19.602802,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635453,
      "ems": null
    },
    {
      "latitude": 51.708115,
      "longitude": 19.604805,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635456,
      "ems": null
    },
    {
      "latitude": 51.708252,
      "longitude": 19.606884,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635459,
      "ems": null
    },
    {
      "latitude": 51.708618,
      "longitude": 19.611189,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635465,
      "ems": null
    },
    {
      "latitude": 51.70903,
      "longitude": 19.614752,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635471,
      "ems": null
    },
    {
      "latitude": 51.709621,
      "longitude": 19.619293,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635476,
      "ems": null
    },
    {
      "latitude": 51.710129,
      "longitude": 19.623587,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635482,
      "ems": null
    },
    {
      "latitude": 51.710587,
      "longitude": 19.627522,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635488,
      "ems": null
    },
    {
      "latitude": 51.711109,
      "longitude": 19.632034,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635494,
      "ems": null
    },
    {
      "latitude": 51.711575,
      "longitude": 19.636307,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635501,
      "ems": null
    },
    {
      "latitude": 51.711994,
      "longitude": 19.640732,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635506,
      "ems": null
    },
    {
      "latitude": 51.712372,
      "longitude": 19.645113,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669635512,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.649582,
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635519,
      "ems": null
    },
    {
      "latitude": 51.713158,
      "longitude": 19.653931,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635525,
      "ems": null
    },
    {
      "latitude": 51.713516,
      "longitude": 19.658178,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635530,
      "ems": null
    },
    {
      "latitude": 51.71381,
      "longitude": 19.662628,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1669635537,
      "ems": null
    },
    {
      "latitude": 51.713951,
      "longitude": 19.666824,
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1669635543,
      "ems": null
    },
    {
      "latitude": 51.714157,
      "longitude": 19.671021,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1669635549,
      "ems": null
    },
    {
      "latitude": 51.714432,
      "longitude": 19.675549,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1669635555,
      "ems": null
    },
    {
      "latitude": 51.714649,
      "longitude": 19.679184,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635560,
      "ems": null
    },
    {
      "latitude": 51.715073,
      "longitude": 19.68416,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635567,
      "ems": null
    },
    {
      "latitude": 51.715252,
      "longitude": 19.686203,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635570,
      "ems": null
    },
    {
      "latitude": 51.715439,
      "longitude": 19.687649,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635573,
      "ems": null
    },
    {
      "latitude": 51.715714,
      "longitude": 19.690172,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635576,
      "ems": null
    },
    {
      "latitude": 51.715988,
      "longitude": 19.692621,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635579,
      "ems": null
    },
    {
      "latitude": 51.716232,
      "longitude": 19.694519,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635582,
      "ems": null
    },
    {
      "latitude": 51.716415,
      "longitude": 19.69635,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635585,
      "ems": null
    },
    {
      "latitude": 51.71693,
      "longitude": 19.700928,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635591,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.704351,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635596,
      "ems": null
    },
    {
      "latitude": 51.717815,
      "longitude": 19.710312,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669635605,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.715633,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635613,
      "ems": null
    },
    {
      "latitude": 51.718464,
      "longitude": 19.71962,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669635618,
      "ems": null
    },
    {
      "latitude": 51.718735,
      "longitude": 19.723873,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635624,
      "ems": null
    },
    {
      "latitude": 51.718826,
      "longitude": 19.726175,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635629,
      "ems": null
    },
    {
      "latitude": 51.718979,
      "longitude": 19.729843,
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1669635633,
      "ems": null
    },
    {
      "latitude": 51.719009,
      "longitude": 19.731817,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1669635636,
      "ems": null
    },
    {
      "latitude": 51.719009,
      "longitude": 19.733078,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1669635638,
      "ems": null
    },
    {
      "latitude": 51.719009,
      "longitude": 19.734564,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1669635640,
      "ems": null
    },
    {
      "latitude": 51.719009,
      "longitude": 19.737457,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1669635644,
      "ems": null
    },
    {
      "latitude": 51.719009,
      "longitude": 19.739908,
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
      "squawk": "7000",
      "timestamp": 1669635648,
      "ems": null
    },
    {
      "latitude": 51.718964,
      "longitude": 19.743248,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1669635653,
      "ems": null
    },
    {
      "latitude": 51.718929,
      "longitude": 19.74617,
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
      "squawk": "7000",
      "timestamp": 1669635657,
      "ems": null
    },
    {
      "latitude": 51.718918,
      "longitude": 19.750597,
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1669635663,
      "ems": null
    },
    {
      "latitude": 51.718964,
      "longitude": 19.753344,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1669635667,
      "ems": null
    },
    {
      "latitude": 51.71907,
      "longitude": 19.758606,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1669635675,
      "ems": null
    },
    {
      "latitude": 51.71907,
      "longitude": 19.762573,
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1669635681,
      "ems": null
    },
    {
      "latitude": 51.719101,
      "longitude": 19.766483,
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1669635687,
      "ems": null
    },
    {
      "latitude": 51.719212,
      "longitude": 19.768219,
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669635690,
      "ems": null
    },
    {
      "latitude": 51.719467,
      "longitude": 19.772198,
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1669635696,
      "ems": null
    },
    {
      "latitude": 51.719582,
      "longitude": 19.77356,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669635699,
      "ems": null
    },
    {
      "latitude": 51.719955,
      "longitude": 19.776688,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669635703,
      "ems": null
    },
    {
      "latitude": 51.7202,
      "longitude": 19.77873,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635707,
      "ems": null
    },
    {
      "latitude": 51.720566,
      "longitude": 19.781626,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669635711,
      "ems": null
    },
    {
      "latitude": 51.721027,
      "longitude": 19.784241,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669635715,
      "ems": null
    },
    {
      "latitude": 51.721539,
      "longitude": 19.786224,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669635718,
      "ems": null
    },
    {
      "latitude": 51.721802,
      "longitude": 19.787193,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669635719,
      "ems": null
    },
    {
      "latitude": 51.722397,
      "longitude": 19.789272,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1669635723,
      "ems": null
    },
    {
      "latitude": 51.723221,
      "longitude": 19.792019,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669635727,
      "ems": null
    },
    {
      "latitude": 51.7234,
      "longitude": 19.792557,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669635728,
      "ems": null
    },
    {
      "latitude": 51.724274,
      "longitude": 19.795582,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669635733,
      "ems": null
    },
    {
      "latitude": 51.725189,
      "longitude": 19.798626,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669635738,
      "ems": null
    },
    {
      "latitude": 51.725822,
      "longitude": 19.80072,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669635743,
      "ems": null
    },
    {
      "latitude": 51.727432,
      "longitude": 19.806717,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669635751,
      "ems": null
    },
    {
      "latitude": 51.727917,
      "longitude": 19.808655,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669635755,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.809647,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635756,
      "ems": null
    },
    {
      "latitude": 51.728569,
      "longitude": 19.811554,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669635759,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.813919,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669635762,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.816055,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669635766,
      "ems": null
    },
    {
      "latitude": 51.730225,
      "longitude": 19.819633,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669635771,
      "ems": null
    },
    {
      "latitude": 51.730289,
      "longitude": 19.819946,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635772,
      "ems": null
    },
    {
      "latitude": 51.730774,
      "longitude": 19.822157,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635775,
      "ems": null
    },
    {
      "latitude": 51.731964,
      "longitude": 19.826982,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669635783,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 19.832153,
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669635791,
      "ems": null
    },
    {
      "latitude": 51.734711,
      "longitude": 19.837969,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669635799,
      "ems": null
    },
    {
      "latitude": 51.736313,
      "longitude": 19.843683,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669635808,
      "ems": null
    },
    {
      "latitude": 51.737549,
      "longitude": 19.848955,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669635816,
      "ems": null
    },
    {
      "latitude": 51.738098,
      "longitude": 19.851702,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635820,
      "ems": null
    },
    {
      "latitude": 51.738556,
      "longitude": 19.854151,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635824,
      "ems": null
    },
    {
      "latitude": 51.739136,
      "longitude": 19.85733,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635829,
      "ems": null
    },
    {
      "latitude": 51.739609,
      "longitude": 19.860312,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635833,
      "ems": null
    },
    {
      "latitude": 51.740158,
      "longitude": 19.863968,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669635839,
      "ems": null
    },
    {
      "latitude": 51.740479,
      "longitude": 19.866474,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669635844,
      "ems": null
    },
    {
      "latitude": 51.741463,
      "longitude": 19.872665,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635852,
      "ems": null
    },
    {
      "latitude": 51.742252,
      "longitude": 19.876938,
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669635858,
      "ems": null
    },
    {
      "latitude": 51.742905,
      "longitude": 19.87999,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635862,
      "ems": null
    },
    {
      "latitude": 51.743454,
      "longitude": 19.882284,
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
      "timestamp": 1669635866,
      "ems": null
    },
    {
      "latitude": 51.744114,
      "longitude": 19.884796,
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669635870,
      "ems": null
    },
    {
      "latitude": 51.744862,
      "longitude": 19.88739,
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669635874,
      "ems": null
    },
    {
      "latitude": 51.745651,
      "longitude": 19.89006,
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669635878,
      "ems": null
    },
    {
      "latitude": 51.746677,
      "longitude": 19.895554,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669635887,
      "ems": null
    },
    {
      "latitude": 51.747162,
      "longitude": 19.898615,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635891,
      "ems": null
    },
    {
      "latitude": 51.74762,
      "longitude": 19.901215,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635895,
      "ems": null
    },
    {
      "latitude": 51.748028,
      "longitude": 19.903488,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669635899,
      "ems": null
    },
    {
      "latitude": 51.748581,
      "longitude": 19.906113,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635903,
      "ems": null
    },
    {
      "latitude": 51.749039,
      "longitude": 19.909008,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635907,
      "ems": null
    },
    {
      "latitude": 51.749748,
      "longitude": 19.914093,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669635915,
      "ems": null
    },
    {
      "latitude": 51.750542,
      "longitude": 19.919586,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635923,
      "ems": null
    },
    {
      "latitude": 51.751472,
      "longitude": 19.925232,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669635932,
      "ems": null
    },
    {
      "latitude": 51.752426,
      "longitude": 19.930758,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635940,
      "ems": null
    },
    {
      "latitude": 51.753387,
      "longitude": 19.93729,
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669635950,
      "ems": null
    },
    {
      "latitude": 51.754257,
      "longitude": 19.942858,
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669635958,
      "ems": null
    },
    {
      "latitude": 51.755173,
      "longitude": 19.948202,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635966,
      "ems": null
    },
    {
      "latitude": 51.756218,
      "longitude": 19.953384,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669635974,
      "ems": null
    },
    {
      "latitude": 51.756866,
      "longitude": 19.956293,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635978,
      "ems": null
    },
    {
      "latitude": 51.757381,
      "longitude": 19.958649,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635982,
      "ems": null
    },
    {
      "latitude": 51.758377,
      "longitude": 19.964014,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669635990,
      "ems": null
    },
    {
      "latitude": 51.759521,
      "longitude": 19.96973,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669635998,
      "ems": null
    },
    {
      "latitude": 51.76083,
      "longitude": 19.97467,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669636006,
      "ems": null
    },
    {
      "latitude": 51.761673,
      "longitude": 19.977301,
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1669636010,
      "ems": null
    },
    {
      "latitude": 51.763,
      "longitude": 19.982573,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636018,
      "ems": null
    },
    {
      "latitude": 51.763687,
      "longitude": 19.98658,
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669636026,
      "ems": null
    },
    {
      "latitude": 51.764145,
      "longitude": 19.990961,
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1669636030,
      "ems": null
    },
    {
      "latitude": 51.764328,
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669636035,
      "ems": null
    },
    {
      "latitude": 51.764645,
      "longitude": 19.996872,
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669636039,
      "ems": null
    },
    {
      "latitude": 51.764973,
      "longitude": 19.999313,
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636043,
      "ems": null
    },
    {
      "latitude": 51.76593,
      "longitude": 20.004915,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636052,
      "ems": null
    },
    {
      "latitude": 51.766388,
      "longitude": 20.007513,
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636056,
      "ems": null
    },
    {
      "latitude": 51.76688,
      "longitude": 20.009995,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669636060,
      "ems": null
    },
    {
      "latitude": 51.767532,
      "longitude": 20.012665,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669636064,
      "ems": null
    },
    {
      "latitude": 51.767944,
      "longitude": 20.014269,
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669636068,
      "ems": null
    },
    {
      "latitude": 51.768463,
      "longitude": 20.016403,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669636071,
      "ems": null
    },
    {
      "latitude": 51.769302,
      "longitude": 20.020142,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636078,
      "ems": null
    },
    {
      "latitude": 51.769867,
      "longitude": 20.022732,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636083,
      "ems": null
    },
    {
      "latitude": 51.770782,
      "longitude": 20.026667,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636090,
      "ems": null
    },
    {
      "latitude": 51.77158,
      "longitude": 20.029984,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669636096,
      "ems": null
    },
    {
      "latitude": 51.772247,
      "longitude": 20.033123,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669636102,
      "ems": null
    },
    {
      "latitude": 51.772839,
      "longitude": 20.03624,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636108,
      "ems": null
    },
    {
      "latitude": 51.773575,
      "longitude": 20.039581,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669636114,
      "ems": null
    },
    {
      "latitude": 51.774445,
      "longitude": 20.042551,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1669636120,
      "ems": null
    },
    {
      "latitude": 51.774933,
      "longitude": 20.043945,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1669636123,
      "ems": null
    },
    {
      "latitude": 51.775539,
      "longitude": 20.045395,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1669636126,
      "ems": null
    },
    {
      "latitude": 51.776142,
      "longitude": 20.046844,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1669636130,
      "ems": null
    },
    {
      "latitude": 51.776642,
      "longitude": 20.048044,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1669636132,
      "ems": null
    },
    {
      "latitude": 51.777237,
      "longitude": 20.04953,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1669636135,
      "ems": null
    },
    {
      "latitude": 51.777821,
      "longitude": 20.050964,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1669636138,
      "ems": null
    },
    {
      "latitude": 51.778473,
      "longitude": 20.05249,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1669636141,
      "ems": null
    },
    {
      "latitude": 51.779114,
      "longitude": 20.053909,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1669636144,
      "ems": null
    },
    {
      "latitude": 51.779819,
      "longitude": 20.055618,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1669636148,
      "ems": null
    },
    {
      "latitude": 51.780762,
      "longitude": 20.058214,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1669636153,
      "ems": null
    },
    {
      "latitude": 51.781357,
      "longitude": 20.059967,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1669636156,
      "ems": null
    },
    {
      "latitude": 51.781815,
      "longitude": 20.061554,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669636159,
      "ems": null
    },
    {
      "latitude": 51.782242,
      "longitude": 20.063019,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669636162,
      "ems": null
    },
    {
      "latitude": 51.782593,
      "longitude": 20.064598,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636166,
      "ems": null
    },
    {
      "latitude": 51.782894,
      "longitude": 20.066147,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636169,
      "ems": null
    },
    {
      "latitude": 51.783142,
      "longitude": 20.067938,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636172,
      "ems": null
    },
    {
      "latitude": 51.783371,
      "longitude": 20.069349,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636174,
      "ems": null
    },
    {
      "latitude": 51.783638,
      "longitude": 20.071335,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636178,
      "ems": null
    },
    {
      "latitude": 51.783875,
      "longitude": 20.072689,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636180,
      "ems": null
    },
    {
      "latitude": 51.784012,
      "longitude": 20.074005,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669636183,
      "ems": null
    },
    {
      "latitude": 51.784199,
      "longitude": 20.075912,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669636187,
      "ems": null
    },
    {
      "latitude": 51.784336,
      "longitude": 20.077744,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1669636190,
      "ems": null
    },
    {
      "latitude": 51.784378,
      "longitude": 20.079073,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "squawk": "7000",
      "timestamp": 1669636192,
      "ems": null
    },
    {
      "latitude": 51.784431,
      "longitude": 20.079346,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669636193,
      "ems": null
    },
    {
      "latitude": 51.784424,
      "longitude": 20.080187,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1669636194,
      "ems": null
    },
    {
      "latitude": 51.784382,
      "longitude": 20.082474,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1669636199,
      "ems": null
    },
    {
      "latitude": 51.78429,
      "longitude": 20.084152,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1669636202,
      "ems": null
    },
    {
      "latitude": 51.784149,
      "longitude": 20.085829,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1669636205,
      "ems": null
    },
    {
      "latitude": 51.784012,
      "longitude": 20.087509,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1669636208,
      "ems": null
    },
    {
      "latitude": 51.783875,
      "longitude": 20.089169,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1669636211,
      "ems": null
    },
    {
      "latitude": 51.783783,
      "longitude": 20.09095,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1669636214,
      "ems": null
    },
    {
      "latitude": 51.783737,
      "longitude": 20.092731,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1669636217,
      "ems": null
    },
    {
      "latitude": 51.783684,
      "longitude": 20.094681,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1669636220,
      "ems": null
    },
    {
      "latitude": 51.783684,
      "longitude": 20.098572,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1669636226,
      "ems": null
    },
    {
      "latitude": 51.783825,
      "longitude": 20.10025,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669636229,
      "ems": null
    },
    {
      "latitude": 51.784149,
      "longitude": 20.102463,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636232,
      "ems": null
    },
    {
      "latitude": 51.784477,
      "longitude": 20.10437,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636235,
      "ems": null
    },
    {
      "latitude": 51.784615,
      "longitude": 20.105057,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669636236,
      "ems": null
    },
    {
      "latitude": 51.785156,
      "longitude": 20.108025,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636241,
      "ems": null
    },
    {
      "latitude": 51.785568,
      "longitude": 20.110399,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636245,
      "ems": null
    },
    {
      "latitude": 51.786106,
      "longitude": 20.113449,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636249,
      "ems": null
    },
    {
      "latitude": 51.786572,
      "longitude": 20.116119,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636253,
      "ems": null
    },
    {
      "latitude": 51.787033,
      "longitude": 20.119085,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636257,
      "ems": null
    },
    {
      "latitude": 51.788315,
      "longitude": 20.125914,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636266,
      "ems": null
    },
    {
      "latitude": 51.789093,
      "longitude": 20.130219,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636272,
      "ems": null
    },
    {
      "latitude": 51.789642,
      "longitude": 20.133362,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636277,
      "ems": null
    },
    {
      "latitude": 51.791061,
      "longitude": 20.140835,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636286,
      "ems": null
    },
    {
      "latitude": 51.791924,
      "longitude": 20.145416,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636292,
      "ems": null
    },
    {
      "latitude": 51.792622,
      "longitude": 20.149231,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636297,
      "ems": null
    },
    {
      "latitude": 51.793648,
      "longitude": 20.154266,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "7000",
      "timestamp": 1669636304,
      "ems": null
    },
    {
      "latitude": 51.794487,
      "longitude": 20.158691,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636310,
      "ems": null
    },
    {
      "latitude": 51.795322,
      "longitude": 20.162888,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636316,
      "ems": null
    },
    {
      "latitude": 51.796097,
      "longitude": 20.166964,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636322,
      "ems": null
    },
    {
      "latitude": 51.79686,
      "longitude": 20.171051,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636328,
      "ems": null
    },
    {
      "latitude": 51.797325,
      "longitude": 20.174103,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636333,
      "ems": null
    },
    {
      "latitude": 51.797653,
      "longitude": 20.17654,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636337,
      "ems": null
    },
    {
      "latitude": 51.798443,
      "longitude": 20.181503,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636343,
      "ems": null
    },
    {
      "latitude": 51.799118,
      "longitude": 20.185522,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636349,
      "ems": null
    },
    {
      "latitude": 51.799896,
      "longitude": 20.189457,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669636355,
      "ems": null
    },
    {
      "latitude": 51.800304,
      "longitude": 20.191498,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669636358,
      "ems": null
    },
    {
      "latitude": 51.80072,
      "longitude": 20.193464,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636361,
      "ems": null
    },
    {
      "latitude": 51.801559,
      "longitude": 20.197678,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636368,
      "ems": null
    },
    {
      "latitude": 51.802368,
      "longitude": 20.201853,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636373,
      "ems": null
    },
    {
      "latitude": 51.803146,
      "longitude": 20.206011,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636379,
      "ems": null
    },
    {
      "latitude": 51.803925,
      "longitude": 20.210241,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669636386,
      "ems": null
    },
    {
      "latitude": 51.80468,
      "longitude": 20.214233,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636392,
      "ems": null
    },
    {
      "latitude": 51.805527,
      "longitude": 20.218332,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669636398,
      "ems": null
    },
    {
      "latitude": 51.806309,
      "longitude": 20.222244,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669636403,
      "ems": null
    },
    {
      "latitude": 51.807083,
      "longitude": 20.226349,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669636410,
      "ems": null
    },
    {
      "latitude": 51.807907,
      "longitude": 20.230284,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636416,
      "ems": null
    },
    {
      "latitude": 51.808777,
      "longitude": 20.234442,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669636422,
      "ems": null
    },
    {
      "latitude": 51.809692,
      "longitude": 20.238598,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636428,
      "ems": null
    },
    {
      "latitude": 51.809895,
      "longitude": 20.240555,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669636431,
      "ems": null
    },
    {
      "latitude": 51.809799,
      "longitude": 20.242462,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1669636434,
      "ems": null
    },
    {
      "latitude": 51.809429,
      "longitude": 20.244064,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1669636437,
      "ems": null
    },
    {
      "latitude": 51.808914,
      "longitude": 20.245649,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1669636440,
      "ems": null
    },
    {
      "latitude": 51.808311,
      "longitude": 20.247192,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1669636443,
      "ems": null
    },
    {
      "latitude": 51.807953,
      "longitude": 20.248693,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1669636446,
      "ems": null
    },
    {
      "latitude": 51.807846,
      "longitude": 20.25032,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1669636449,
      "ems": null
    },
    {
      "latitude": 51.808079,
      "longitude": 20.252304,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636452,
      "ems": null
    },
    {
      "latitude": 51.808453,
      "longitude": 20.253906,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1669636455,
      "ems": null
    },
    {
      "latitude": 51.809151,
      "longitude": 20.255814,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "7000",
      "timestamp": 1669636458,
      "ems": null
    },
    {
      "latitude": 51.809692,
      "longitude": 20.25738,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1669636461,
      "ems": null
    },
    {
      "latitude": 51.810406,
      "longitude": 20.259247,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1669636464,
      "ems": null
    },
    {
      "latitude": 51.811012,
      "longitude": 20.261002,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1669636467,
      "ems": null
    },
    {
      "latitude": 51.811569,
      "longitude": 20.262575,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1669636470,
      "ems": null
    },
    {
      "latitude": 51.812302,
      "longitude": 20.264505,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1669636473,
      "ems": null
    },
    {
      "latitude": 51.81292,
      "longitude": 20.266037,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1669636476,
      "ems": null
    },
    {
      "latitude": 51.813583,
      "longitude": 20.267696,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1669636479,
      "ems": null
    },
    {
      "latitude": 51.81427,
      "longitude": 20.269478,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1669636482,
      "ems": null
    },
    {
      "latitude": 51.814877,
      "longitude": 20.270996,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1669636485,
      "ems": null
    },
    {
      "latitude": 51.816132,
      "longitude": 20.274506,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1669636491,
      "ems": null
    },
    {
      "latitude": 51.817291,
      "longitude": 20.278164,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669636497,
      "ems": null
    },
    {
      "latitude": 51.817932,
      "longitude": 20.280315,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669636500,
      "ems": null
    },
    {
      "latitude": 51.818436,
      "longitude": 20.282171,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669636503,
      "ems": null
    },
    {
      "latitude": 51.818985,
      "longitude": 20.284027,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669636506,
      "ems": null
    },
    {
      "latitude": 51.81953,
      "longitude": 20.285797,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "7000",
      "timestamp": 1669636509,
      "ems": null
    },
    {
      "latitude": 51.820221,
      "longitude": 20.287962,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1669636512,
      "ems": null
    },
    {
      "latitude": 51.820862,
      "longitude": 20.289892,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1669636515,
      "ems": null
    },
    {
      "latitude": 51.821411,
      "longitude": 20.291822,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669636518,
      "ems": null
    },
    {
      "latitude": 51.822418,
      "longitude": 20.295609,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "timestamp": 1669636524,
      "ems": null
    },
    {
      "latitude": 51.822834,
      "longitude": 20.297775,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "timestamp": 1669636527,
      "ems": null
    },
    {
      "latitude": 51.823162,
      "longitude": 20.29953,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636530,
      "ems": null
    },
    {
      "latitude": 51.823532,
      "longitude": 20.301514,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "timestamp": 1669636533,
      "ems": null
    },
    {
      "latitude": 51.823837,
      "longitude": 20.303625,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636536,
      "ems": null
    },
    {
      "latitude": 51.824184,
      "longitude": 20.305862,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636539,
      "ems": null
    },
    {
      "latitude": 51.824478,
      "longitude": 20.307781,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636542,
      "ems": null
    },
    {
      "latitude": 51.824753,
      "longitude": 20.30986,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669636545,
      "ems": null
    },
    {
      "latitude": 51.825027,
      "longitude": 20.312014,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669636549,
      "ems": null
    },
    {
      "latitude": 51.825256,
      "longitude": 20.31395,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669636551,
      "ems": null
    },
    {
      "latitude": 51.825485,
      "longitude": 20.316021,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669636555,
      "ems": null
    },
    {
      "latitude": 51.825714,
      "longitude": 20.318026,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669636558,
      "ems": null
    },
    {
      "latitude": 51.825943,
      "longitude": 20.319807,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669636560,
      "ems": null
    },
    {
      "latitude": 51.826447,
      "longitude": 20.323593,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636567,
      "ems": null
    },
    {
      "latitude": 51.827118,
      "longitude": 20.327682,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636572,
      "ems": null
    },
    {
      "latitude": 51.827499,
      "longitude": 20.329681,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636576,
      "ems": null
    },
    {
      "latitude": 51.828094,
      "longitude": 20.333633,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636582,
      "ems": null
    },
    {
      "latitude": 51.828644,
      "longitude": 20.337475,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669636588,
      "ems": null
    },
    {
      "latitude": 51.829147,
      "longitude": 20.341261,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636593,
      "ems": null
    },
    {
      "latitude": 51.82988,
      "longitude": 20.345121,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636599,
      "ems": null
    },
    {
      "latitude": 51.830704,
      "longitude": 20.349197,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636606,
      "ems": null
    },
    {
      "latitude": 51.831345,
      "longitude": 20.352989,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636612,
      "ems": null
    },
    {
      "latitude": 51.832077,
      "longitude": 20.35685,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636618,
      "ems": null
    },
    {
      "latitude": 51.832443,
      "longitude": 20.35878,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636621,
      "ems": null
    },
    {
      "latitude": 51.833221,
      "longitude": 20.36264,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636627,
      "ems": null
    },
    {
      "latitude": 51.833954,
      "longitude": 20.366425,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636633,
      "ems": null
    },
    {
      "latitude": 51.83466,
      "longitude": 20.370407,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636639,
      "ems": null
    },
    {
      "latitude": 51.835358,
      "longitude": 20.374527,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636645,
      "ems": null
    },
    {
      "latitude": 51.836102,
      "longitude": 20.378265,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636651,
      "ems": null
    },
    {
      "latitude": 51.836754,
      "longitude": 20.38208,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636657,
      "ems": null
    },
    {
      "latitude": 51.837452,
      "longitude": 20.3862,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636663,
      "ems": null
    },
    {
      "latitude": 51.838211,
      "longitude": 20.390032,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "timestamp": 1669636669,
      "ems": null
    },
    {
      "latitude": 51.838943,
      "longitude": 20.394058,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636675,
      "ems": null
    },
    {
      "latitude": 51.839596,
      "longitude": 20.397949,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636681,
      "ems": null
    },
    {
      "latitude": 51.840244,
      "longitude": 20.40184,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636687,
      "ems": null
    },
    {
      "latitude": 51.840775,
      "longitude": 20.405695,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636693,
      "ems": null
    },
    {
      "latitude": 51.841316,
      "longitude": 20.409546,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636699,
      "ems": null
    },
    {
      "latitude": 51.841919,
      "longitude": 20.413637,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636705,
      "ems": null
    },
    {
      "latitude": 51.842651,
      "longitude": 20.417719,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636711,
      "ems": null
    },
    {
      "latitude": 51.843018,
      "longitude": 20.419724,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669636714,
      "ems": null
    },
    {
      "latitude": 51.84343,
      "longitude": 20.421728,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "timestamp": 1669636717,
      "ems": null
    },
    {
      "latitude": 51.844116,
      "longitude": 20.425514,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636723,
      "ems": null
    },
    {
      "latitude": 51.844856,
      "longitude": 20.429306,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669636729,
      "ems": null
    },
    {
      "latitude": 51.845692,
      "longitude": 20.433426,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "timestamp": 1669636736,
      "ems": null
    },
    {
      "latitude": 51.846451,
      "longitude": 20.437168,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669636741,
      "ems": null
    },
    {
      "latitude": 51.847458,
      "longitude": 20.441103,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669636748,
      "ems": null
    },
    {
      "latitude": 51.847973,
      "longitude": 20.443039,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1669636751,
      "ems": null
    },
    {
      "latitude": 51.848484,
      "longitude": 20.444717,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669636753,
      "ems": null
    },
    {
      "latitude": 51.849091,
      "longitude": 20.447006,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669636757,
      "ems": null
    },
    {
      "latitude": 51.849976,
      "longitude": 20.45105,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669636763,
      "ems": null
    },
    {
      "latitude": 51.850719,
      "longitude": 20.45517,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636768,
      "ems": null
    },
    {
      "latitude": 51.851093,
      "longitude": 20.45723,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636772,
      "ems": null
    },
    {
      "latitude": 51.85144,
      "longitude": 20.459364,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636775,
      "ems": null
    },
    {
      "latitude": 51.851791,
      "longitude": 20.461502,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636778,
      "ems": null
    },
    {
      "latitude": 51.85207,
      "longitude": 20.463409,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636780,
      "ems": null
    },
    {
      "latitude": 51.852448,
      "longitude": 20.465673,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636784,
      "ems": null
    },
    {
      "latitude": 51.852722,
      "longitude": 20.467752,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636787,
      "ems": null
    },
    {
      "latitude": 51.852997,
      "longitude": 20.469904,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669636790,
      "ems": null
    },
    {
      "latitude": 51.853546,
      "longitude": 20.473988,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636795,
      "ems": null
    },
    {
      "latitude": 51.854233,
      "longitude": 20.478218,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636801,
      "ems": null
    },
    {
      "latitude": 51.854919,
      "longitude": 20.482599,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636808,
      "ems": null
    },
    {
      "latitude": 51.855423,
      "longitude": 20.486458,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636814,
      "ems": null
    },
    {
      "latitude": 51.856075,
      "longitude": 20.490952,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636820,
      "ems": null
    },
    {
      "latitude": 51.856632,
      "longitude": 20.494919,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636826,
      "ems": null
    },
    {
      "latitude": 51.857162,
      "longitude": 20.499004,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669636832,
      "ems": null
    },
    {
      "latitude": 51.857346,
      "longitude": 20.50123,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "7000",
      "timestamp": 1669636835,
      "ems": null
    },
    {
      "latitude": 51.857758,
      "longitude": 20.505535,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669636841,
      "ems": null
    },
    {
      "latitude": 51.858356,
      "longitude": 20.509567,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636847,
      "ems": null
    },
    {
      "latitude": 51.859222,
      "longitude": 20.513924,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "7000",
      "timestamp": 1669636853,
      "ems": null
    },
    {
      "latitude": 51.85968,
      "longitude": 20.516077,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636856,
      "ems": null
    },
    {
      "latitude": 51.860184,
      "longitude": 20.518156,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669636859,
      "ems": null
    },
    {
      "latitude": 51.860638,
      "longitude": 20.520172,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636862,
      "ems": null
    },
    {
      "latitude": 51.861195,
      "longitude": 20.522537,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669636865,
      "ems": null
    },
    {
      "latitude": 51.861603,
      "longitude": 20.52454,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669636868,
      "ems": null
    },
    {
      "latitude": 51.862061,
      "longitude": 20.526321,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636871,
      "ems": null
    },
    {
      "latitude": 51.862591,
      "longitude": 20.528793,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636874,
      "ems": null
    },
    {
      "latitude": 51.863525,
      "longitude": 20.53278,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636880,
      "ems": null
    },
    {
      "latitude": 51.864361,
      "longitude": 20.53688,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636886,
      "ems": null
    },
    {
      "latitude": 51.864731,
      "longitude": 20.53894,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636889,
      "ems": null
    },
    {
      "latitude": 51.865479,
      "longitude": 20.542908,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "squawk": "7000",
      "timestamp": 1669636895,
      "ems": null
    },
    {
      "latitude": 51.866318,
      "longitude": 20.54718,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636901,
      "ems": null
    },
    {
      "latitude": 51.867096,
      "longitude": 20.551485,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636907,
      "ems": null
    },
    {
      "latitude": 51.867805,
      "longitude": 20.555573,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669636913,
      "ems": null
    },
    {
      "latitude": 51.868561,
      "longitude": 20.560097,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636919,
      "ems": null
    },
    {
      "latitude": 51.869247,
      "longitude": 20.564499,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636925,
      "ems": null
    },
    {
      "latitude": 51.869888,
      "longitude": 20.569004,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "7000",
      "timestamp": 1669636931,
      "ems": null
    },
    {
      "latitude": 51.870506,
      "longitude": 20.573502,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669636938,
      "ems": null
    },
    {
      "latitude": 51.871109,
      "longitude": 20.577545,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636943,
      "ems": null
    },
    {
      "latitude": 51.871857,
      "longitude": 20.581818,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669636949,
      "ems": null
    },
    {
      "latitude": 51.872505,
      "longitude": 20.58609,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669636955,
      "ems": null
    },
    {
      "latitude": 51.873047,
      "longitude": 20.590458,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669636961,
      "ems": null
    },
    {
      "latitude": 51.873486,
      "longitude": 20.594635,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669636967,
      "ems": null
    },
    {
      "latitude": 51.873997,
      "longitude": 20.599289,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669636974,
      "ems": null
    },
    {
      "latitude": 51.874554,
      "longitude": 20.603256,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669636979,
      "ems": null
    },
    {
      "latitude": 51.875427,
      "longitude": 20.607382,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636986,
      "ems": null
    },
    {
      "latitude": 51.875977,
      "longitude": 20.609684,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636989,
      "ems": null
    },
    {
      "latitude": 51.876434,
      "longitude": 20.611689,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "7000",
      "timestamp": 1669636991,
      "ems": null
    },
    {
      "latitude": 51.876892,
      "longitude": 20.613766,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636994,
      "ems": null
    },
    {
      "latitude": 51.877396,
      "longitude": 20.615997,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669636998,
      "ems": null
    },
    {
      "latitude": 51.877861,
      "longitude": 20.617981,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669637000,
      "ems": null
    },
    {
      "latitude": 51.878357,
      "longitude": 20.620001,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669637003,
      "ems": null
    },
    {
      "latitude": 51.878815,
      "longitude": 20.622154,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669637006,
      "ems": null
    },
    {
      "latitude": 51.879581,
      "longitude": 20.626602,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669637013,
      "ems": null
    },
    {
      "latitude": 51.87991,
      "longitude": 20.628891,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669637016,
      "ems": null
    },
    {
      "latitude": 51.880234,
      "longitude": 20.631359,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669637019,
      "ems": null
    },
    {
      "latitude": 51.880512,
      "longitude": 20.633469,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669637022,
      "ems": null
    },
    {
      "latitude": 51.880783,
      "longitude": 20.635664,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1669637025,
      "ems": null
    },
    {
      "latitude": 51.881073,
      "longitude": 20.638351,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669637028,
      "ems": null
    },
    {
      "latitude": 51.881351,
      "longitude": 20.640411,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669637031,
      "ems": null
    },
    {
      "latitude": 51.882282,
      "longitude": 20.644531,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669637037,
      "ems": null
    },
    {
      "latitude": 51.882843,
      "longitude": 20.646667,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669637040,
      "ems": null
    },
    {
      "latitude": 51.883446,
      "longitude": 20.648956,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669637043,
      "ems": null
    },
    {
      "latitude": 51.883987,
      "longitude": 20.650957,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669637046,
      "ems": null
    },
    {
      "latitude": 51.884518,
      "longitude": 20.653076,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669637049,
      "ems": null
    },
    {
      "latitude": 51.88504,
      "longitude": 20.655039,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669637052,
      "ems": null
    },
    {
      "latitude": 51.885635,
      "longitude": 20.657192,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669637055,
      "ems": null
    },
    {
      "latitude": 51.886185,
      "longitude": 20.659122,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669637058,
      "ems": null
    },
    {
      "latitude": 51.886753,
      "longitude": 20.661163,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "squawk": "7000",
      "timestamp": 1669637061,
      "ems": null
    },
    {
      "latitude": 51.887787,
      "longitude": 20.665283,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669637067,
      "ems": null
    },
    {
      "latitude": 51.888611,
      "longitude": 20.668995,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669637073,
      "ems": null
    },
    {
      "latitude": 51.889591,
      "longitude": 20.673294,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669637079,
      "ems": null
    },
    {
      "latitude": 51.890385,
      "longitude": 20.677109,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669637085,
      "ems": null
    },
    {
      "latitude": 51.890762,
      "longitude": 20.678942,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669637088,
      "ems": null
    },
    {
      "latitude": 51.891174,
      "longitude": 20.681076,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "timestamp": 1669637091,
      "ems": null
    },
    {
      "latitude": 51.891541,
      "longitude": 20.683025,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669637094,
      "ems": null
    },
    {
      "latitude": 51.891907,
      "longitude": 20.685102,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669637097,
      "ems": null
    },
    {
      "latitude": 51.892246,
      "longitude": 20.687103,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669637100,
      "ems": null
    },
    {
      "latitude": 51.89299,
      "longitude": 20.691452,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "7000",
      "timestamp": 1669637106,
      "ems": null
    },
    {
      "latitude": 51.893734,
      "longitude": 20.695652,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669637112,
      "ems": null
    },
    {
      "latitude": 51.894608,
      "longitude": 20.699997,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "squawk": "7000",
      "timestamp": 1669637118,
      "ems": null
    },
    {
      "latitude": 51.895458,
      "longitude": 20.704285,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669637124,
      "ems": null
    },
    {
      "latitude": 51.896347,
      "longitude": 20.708847,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669637130,
      "ems": null
    },
    {
      "latitude": 51.897171,
      "longitude": 20.71312,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669637136,
      "ems": null
    },
    {
      "latitude": 51.897949,
      "longitude": 20.717773,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669637142,
      "ems": null
    },
    {
      "latitude": 51.898773,
      "longitude": 20.722427,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669637148,
      "ems": null
    },
    {
      "latitude": 51.899689,
      "longitude": 20.726929,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669637154,
      "ems": null
    },
    {
      "latitude": 51.900787,
      "longitude": 20.73143,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1669637160,
      "ems": null
    },
    {
      "latitude": 51.901508,
      "longitude": 20.733398,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1669637164,
      "ems": null
    },
    {
      "latitude": 51.902252,
      "longitude": 20.735092,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1669637166,
      "ems": null
    },
    {
      "latitude": 51.903214,
      "longitude": 20.736771,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1669637169,
      "ems": null
    },
    {
      "latitude": 51.904301,
      "longitude": 20.73842,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1669637173,
      "ems": null
    },
    {
      "latitude": 51.905502,
      "longitude": 20.739899,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1669637175,
      "ems": null
    },
    {
      "latitude": 51.906677,
      "longitude": 20.741089,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1669637178,
      "ems": null
    },
    {
      "latitude": 51.907978,
      "longitude": 20.742109,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1669637181,
      "ems": null
    },
    {
      "latitude": 51.909393,
      "longitude": 20.743027,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1669637184,
      "ems": null
    },
    {
      "latitude": 51.910858,
      "longitude": 20.743637,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1669637188,
      "ems": null
    },
    {
      "latitude": 51.912262,
      "longitude": 20.743992,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1669637191,
      "ems": null
    },
    {
      "latitude": 51.913799,
      "longitude": 20.74407,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1669637194,
      "ems": null
    },
    {
      "latitude": 51.914978,
      "longitude": 20.743866,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1669637197,
      "ems": null
    },
    {
      "latitude": 51.916592,
      "longitude": 20.743364,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1669637200,
      "ems": null
    },
    {
      "latitude": 51.917862,
      "longitude": 20.742722,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1669637203,
      "ems": null
    },
    {
      "latitude": 51.919247,
      "longitude": 20.741795,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1669637205,
      "ems": null
    },
    {
      "latitude": 51.920471,
      "longitude": 20.740891,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1669637209,
      "ems": null
    },
    {
      "latitude": 51.921844,
      "longitude": 20.739822,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1669637212,
      "ems": null
    },
    {
      "latitude": 51.923016,
      "longitude": 20.738735,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1669637215,
      "ems": null
    },
    {
      "latitude": 51.924225,
      "longitude": 20.737322,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1669637218,
      "ems": null
    },
    {
      "latitude": 51.925186,
      "longitude": 20.735855,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637221,
      "ems": null
    },
    {
      "latitude": 51.92609,
      "longitude": 20.734262,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1669637224,
      "ems": null
    },
    {
      "latitude": 51.927021,
      "longitude": 20.732222,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1669637227,
      "ems": null
    },
    {
      "latitude": 51.927811,
      "longitude": 20.730337,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1669637230,
      "ems": null
    },
    {
      "latitude": 51.928528,
      "longitude": 20.728455,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1669637233,
      "ems": null
    },
    {
      "latitude": 51.929077,
      "longitude": 20.726776,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1669637236,
      "ems": null
    },
    {
      "latitude": 51.929672,
      "longitude": 20.724766,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1669637239,
      "ems": null
    },
    {
      "latitude": 51.930325,
      "longitude": 20.72249,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1669637242,
      "ems": null
    },
    {
      "latitude": 51.930836,
      "longitude": 20.720371,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1669637245,
      "ems": null
    },
    {
      "latitude": 51.93132,
      "longitude": 20.718231,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1669637248,
      "ems": null
    },
    {
      "latitude": 51.931778,
      "longitude": 20.716095,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1669637251,
      "ems": null
    },
    {
      "latitude": 51.93214,
      "longitude": 20.714407,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1669637254,
      "ems": null
    },
    {
      "latitude": 51.932747,
      "longitude": 20.712053,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1669637257,
      "ems": null
    },
    {
      "latitude": 51.933212,
      "longitude": 20.709934,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1669637260,
      "ems": null
    },
    {
      "latitude": 51.933678,
      "longitude": 20.708052,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1669637263,
      "ems": null
    },
    {
      "latitude": 51.934799,
      "longitude": 20.703964,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1669637269,
      "ems": null
    },
    {
      "latitude": 51.935863,
      "longitude": 20.699575,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1669637275,
      "ems": null
    },
    {
      "latitude": 51.936951,
      "longitude": 20.695267,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1669637281,
      "ems": null
    },
    {
      "latitude": 51.938053,
      "longitude": 20.691179,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1669637287,
      "ems": null
    },
    {
      "latitude": 51.939262,
      "longitude": 20.687021,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1669637293,
      "ems": null
    },
    {
      "latitude": 51.940426,
      "longitude": 20.682705,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1669637299,
      "ems": null
    },
    {
      "latitude": 51.941574,
      "longitude": 20.678406,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1669637305,
      "ems": null
    },
    {
      "latitude": 51.942627,
      "longitude": 20.67421,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1669637311,
      "ems": null
    },
    {
      "latitude": 51.943726,
      "longitude": 20.669708,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1669637318,
      "ems": null
    },
    {
      "latitude": 51.94471,
      "longitude": 20.66544,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1669637324,
      "ems": null
    },
    {
      "latitude": 51.945782,
      "longitude": 20.661282,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1669637330,
      "ems": null
    },
    {
      "latitude": 51.946381,
      "longitude": 20.659256,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1669637333,
      "ems": null
    },
    {
      "latitude": 51.947067,
      "longitude": 20.657196,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1669637336,
      "ems": null
    },
    {
      "latitude": 51.9478,
      "longitude": 20.655136,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1669637339,
      "ems": null
    },
    {
      "latitude": 51.948574,
      "longitude": 20.652964,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1669637342,
      "ems": null
    },
    {
      "latitude": 51.949131,
      "longitude": 20.651628,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1669637345,
      "ems": null
    },
    {
      "latitude": 51.950226,
      "longitude": 20.64888,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1669637348,
      "ems": null
    },
    {
      "latitude": 51.951042,
      "longitude": 20.646921,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1669637351,
      "ems": null
    },
    {
      "latitude": 51.951832,
      "longitude": 20.64488,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1669637354,
      "ems": null
    },
    {
      "latitude": 51.952576,
      "longitude": 20.642761,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1669637357,
      "ems": null
    },
    {
      "latitude": 51.953972,
      "longitude": 20.63876,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1669637363,
      "ems": null
    },
    {
      "latitude": 51.955601,
      "longitude": 20.634521,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1669637369,
      "ems": null
    },
    {
      "latitude": 51.957371,
      "longitude": 20.630442,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1669637375,
      "ems": null
    },
    {
      "latitude": 51.959095,
      "longitude": 20.626596,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1669637381,
      "ems": null
    },
    {
      "latitude": 51.959839,
      "longitude": 20.624924,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1669637384,
      "ems": null
    },
    {
      "latitude": 51.960892,
      "longitude": 20.622787,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1669637387,
      "ems": null
    },
    {
      "latitude": 51.96199,
      "longitude": 20.620651,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637390,
      "ems": null
    },
    {
      "latitude": 51.962677,
      "longitude": 20.619455,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637393,
      "ems": null
    },
    {
      "latitude": 51.963982,
      "longitude": 20.6171,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637396,
      "ems": null
    },
    {
      "latitude": 51.964966,
      "longitude": 20.615463,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637399,
      "ems": null
    },
    {
      "latitude": 51.965424,
      "longitude": 20.6147,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637402,
      "ems": null
    },
    {
      "latitude": 51.966934,
      "longitude": 20.612106,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637405,
      "ems": null
    },
    {
      "latitude": 51.967438,
      "longitude": 20.611267,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637408,
      "ems": null
    },
    {
      "latitude": 51.968918,
      "longitude": 20.608782,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637411,
      "ems": null
    },
    {
      "latitude": 51.969803,
      "longitude": 20.60737,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637414,
      "ems": null
    },
    {
      "latitude": 51.971012,
      "longitude": 20.60533,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637417,
      "ems": null
    },
    {
      "latitude": 51.973015,
      "longitude": 20.601797,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637423,
      "ems": null
    },
    {
      "latitude": 51.974991,
      "longitude": 20.598221,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637429,
      "ems": null
    },
    {
      "latitude": 51.977203,
      "longitude": 20.594421,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637435,
      "ems": null
    },
    {
      "latitude": 51.979294,
      "longitude": 20.590439,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637441,
      "ems": null
    },
    {
      "latitude": 51.981216,
      "longitude": 20.587082,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1669637447,
      "ems": null
    },
    {
      "latitude": 51.982544,
      "longitude": 20.585251,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1669637450,
      "ems": null
    },
    {
      "latitude": 51.983768,
      "longitude": 20.583591,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1669637453,
      "ems": null
    },
    {
      "latitude": 51.984882,
      "longitude": 20.58218,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1669637456,
      "ems": null
    },
    {
      "latitude": 51.985909,
      "longitude": 20.580845,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1669637459,
      "ems": null
    },
    {
      "latitude": 51.987213,
      "longitude": 20.579224,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1669637462,
      "ems": null
    },
    {
      "latitude": 51.988377,
      "longitude": 20.577627,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1669637465,
      "ems": null
    },
    {
      "latitude": 51.989456,
      "longitude": 20.576096,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1669637468,
      "ems": null
    },
    {
      "latitude": 51.990704,
      "longitude": 20.574331,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1669637471,
      "ems": null
    },
    {
      "latitude": 51.991516,
      "longitude": 20.573273,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1669637474,
      "ems": null
    },
    {
      "latitude": 51.99408,
      "longitude": 20.569916,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1669637480,
      "ems": null
    },
    {
      "latitude": 51.996616,
      "longitude": 20.566641,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1669637486,
      "ems": null
    },
    {
      "latitude": 51.998989,
      "longitude": 20.563345,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1669637492,
      "ems": null
    },
    {
      "latitude": 52.001179,
      "longitude": 20.560129,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1669637498,
      "ems": null
    },
    {
      "latitude": 52.00383,
      "longitude": 20.556412,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1669637504,
      "ems": null
    },
    {
      "latitude": 52.006302,
      "longitude": 20.552979,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1669637510,
      "ems": null
    },
    {
      "latitude": 52.008858,
      "longitude": 20.54977,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1669637516,
      "ems": null
    },
    {
      "latitude": 52.011326,
      "longitude": 20.546631,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1669637522,
      "ems": null
    },
    {
      "latitude": 52.014027,
      "longitude": 20.5431,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1669637528,
      "ems": null
    },
    {
      "latitude": 52.016327,
      "longitude": 20.539703,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637534,
      "ems": null
    },
    {
      "latitude": 52.018494,
      "longitude": 20.536194,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637540,
      "ems": null
    },
    {
      "latitude": 52.019753,
      "longitude": 20.534153,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637544,
      "ems": null
    },
    {
      "latitude": 52.02095,
      "longitude": 20.532303,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637547,
      "ems": null
    },
    {
      "latitude": 52.022034,
      "longitude": 20.530544,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637550,
      "ems": null
    },
    {
      "latitude": 52.023148,
      "longitude": 20.528717,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637553,
      "ems": null
    },
    {
      "latitude": 52.025291,
      "longitude": 20.525442,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1669637559,
      "ems": null
    },
    {
      "latitude": 52.027405,
      "longitude": 20.522156,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637565,
      "ems": null
    },
    {
      "latitude": 52.029739,
      "longitude": 20.518112,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1669637571,
      "ems": null
    },
    {
      "latitude": 52.031845,
      "longitude": 20.51445,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637577,
      "ems": null
    },
    {
      "latitude": 52.034088,
      "longitude": 20.51116,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1669637583,
      "ems": null
    },
    {
      "latitude": 52.036194,
      "longitude": 20.50766,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637589,
      "ems": null
    },
    {
      "latitude": 52.038559,
      "longitude": 20.503784,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637595,
      "ems": null
    },
    {
      "latitude": 52.040634,
      "longitude": 20.500259,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637601,
      "ems": null
    },
    {
      "latitude": 52.042793,
      "longitude": 20.496565,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637607,
      "ems": null
    },
    {
      "latitude": 52.044846,
      "longitude": 20.493011,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1669637613,
      "ems": null
    },
    {
      "latitude": 52.046906,
      "longitude": 20.489349,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637619,
      "ems": null
    },
    {
      "latitude": 52.048893,
      "longitude": 20.485579,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1669637625,
      "ems": null
    },
    {
      "latitude": 52.050941,
      "longitude": 20.481577,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637631,
      "ems": null
    },
    {
      "latitude": 52.05299,
      "longitude": 20.477732,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1669637637,
      "ems": null
    },
    {
      "latitude": 52.054993,
      "longitude": 20.473886,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637643,
      "ems": null
    },
    {
      "latitude": 52.057224,
      "longitude": 20.470041,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637649,
      "ems": null
    },
    {
      "latitude": 52.059357,
      "longitude": 20.466232,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637655,
      "ems": null
    },
    {
      "latitude": 52.0616,
      "longitude": 20.462265,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637661,
      "ems": null
    },
    {
      "latitude": 52.06258,
      "longitude": 20.460623,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637664,
      "ems": null
    },
    {
      "latitude": 52.064804,
      "longitude": 20.456924,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1669637670,
      "ems": null
    },
    {
      "latitude": 52.066956,
      "longitude": 20.452957,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637676,
      "ems": null
    },
    {
      "latitude": 52.069016,
      "longitude": 20.448837,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637682,
      "ems": null
    },
    {
      "latitude": 52.070911,
      "longitude": 20.445086,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637688,
      "ems": null
    },
    {
      "latitude": 52.07259,
      "longitude": 20.441868,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637694,
      "ems": null
    },
    {
      "latitude": 52.074963,
      "longitude": 20.43771,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1669637700,
      "ems": null
    },
    {
      "latitude": 52.076935,
      "longitude": 20.434265,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637706,
      "ems": null
    },
    {
      "latitude": 52.078129,
      "longitude": 20.432217,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637709,
      "ems": null
    },
    {
      "latitude": 52.079269,
      "longitude": 20.430298,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637712,
      "ems": null
    },
    {
      "latitude": 52.08041,
      "longitude": 20.428528,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637715,
      "ems": null
    },
    {
      "latitude": 52.081467,
      "longitude": 20.426788,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637718,
      "ems": null
    },
    {
      "latitude": 52.083622,
      "longitude": 20.423113,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1669637724,
      "ems": null
    },
    {
      "latitude": 52.085861,
      "longitude": 20.419464,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637730,
      "ems": null
    },
    {
      "latitude": 52.087856,
      "longitude": 20.416128,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637736,
      "ems": null
    },
    {
      "latitude": 52.090046,
      "longitude": 20.412519,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637742,
      "ems": null
    },
    {
      "latitude": 52.092041,
      "longitude": 20.409088,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637748,
      "ems": null
    },
    {
      "latitude": 52.094376,
      "longitude": 20.405045,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637755,
      "ems": null
    },
    {
      "latitude": 52.096756,
      "longitude": 20.401077,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637761,
      "ems": null
    },
    {
      "latitude": 52.09903,
      "longitude": 20.397373,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637767,
      "ems": null
    },
    {
      "latitude": 52.101265,
      "longitude": 20.393764,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637773,
      "ems": null
    },
    {
      "latitude": 52.103256,
      "longitude": 20.390549,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637779,
      "ems": null
    },
    {
      "latitude": 52.105408,
      "longitude": 20.386858,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1669637785,
      "ems": null
    },
    {
      "latitude": 52.107697,
      "longitude": 20.383148,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637791,
      "ems": null
    },
    {
      "latitude": 52.109894,
      "longitude": 20.379486,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637797,
      "ems": null
    },
    {
      "latitude": 52.111877,
      "longitude": 20.376186,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1669637803,
      "ems": null
    },
    {
      "latitude": 52.114113,
      "longitude": 20.372419,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637809,
      "ems": null
    },
    {
      "latitude": 52.115185,
      "longitude": 20.3703,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1669637812,
      "ems": null
    },
    {
      "latitude": 52.115936,
      "longitude": 20.368805,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1669637815,
      "ems": null
    },
    {
      "latitude": 52.117035,
      "longitude": 20.366592,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637818,
      "ems": null
    },
    {
      "latitude": 52.11821,
      "longitude": 20.364336,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637821,
      "ems": null
    },
    {
      "latitude": 52.118912,
      "longitude": 20.363007,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637824,
      "ems": null
    },
    {
      "latitude": 52.119965,
      "longitude": 20.360947,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669637827,
      "ems": null
    },
    {
      "latitude": 52.120743,
      "longitude": 20.359344,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1669637830,
      "ems": null
    },
    {
      "latitude": 52.121609,
      "longitude": 20.35751,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1669637833,
      "ems": null
    },
    {
      "latitude": 52.122398,
      "longitude": 20.355862,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1669637836,
      "ems": null
    },
    {
      "latitude": 52.124123,
      "longitude": 20.352566,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637842,
      "ems": null
    },
    {
      "latitude": 52.125984,
      "longitude": 20.349192,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637848,
      "ems": null
    },
    {
      "latitude": 52.127884,
      "longitude": 20.345993,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637854,
      "ems": null
    },
    {
      "latitude": 52.128799,
      "longitude": 20.344543,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1669637857,
      "ems": null
    },
    {
      "latitude": 52.13063,
      "longitude": 20.341263,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1669637863,
      "ems": null
    },
    {
      "latitude": 52.132462,
      "longitude": 20.337982,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637869,
      "ems": null
    },
    {
      "latitude": 52.134247,
      "longitude": 20.334778,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637875,
      "ems": null
    },
    {
      "latitude": 52.135994,
      "longitude": 20.331455,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1669637881,
      "ems": null
    },
    {
      "latitude": 52.13781,
      "longitude": 20.328081,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637887,
      "ems": null
    },
    {
      "latitude": 52.139671,
      "longitude": 20.324629,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1669637893,
      "ems": null
    },
    {
      "latitude": 52.14167,
      "longitude": 20.321018,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1669637899,
      "ems": null
    },
    {
      "latitude": 52.143585,
      "longitude": 20.31723,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1669637905,
      "ems": null
    },
    {
      "latitude": 52.145302,
      "longitude": 20.313486,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1669637911,
      "ems": null
    },
    {
      "latitude": 52.14624,
      "longitude": 20.311127,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1669637914,
      "ems": null
    },
    {
      "latitude": 52.146881,
      "longitude": 20.309296,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1669637917,
      "ems": null
    },
    {
      "latitude": 52.147678,
      "longitude": 20.306658,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1669637920,
      "ems": null
    },
    {
      "latitude": 52.148235,
      "longitude": 20.304382,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1669637923,
      "ems": null
    },
    {
      "latitude": 52.148666,
      "longitude": 20.3022,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1669637926,
      "ems": null
    },
    {
      "latitude": 52.148933,
      "longitude": 20.299988,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1669637929,
      "ems": null
    },
    {
      "latitude": 52.149078,
      "longitude": 20.298157,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1669637932,
      "ems": null
    },
    {
      "latitude": 52.149075,
      "longitude": 20.295593,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1669637935,
      "ems": null
    },
    {
      "latitude": 52.148941,
      "longitude": 20.293579,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1669637938,
      "ems": null
    },
    {
      "latitude": 52.148655,
      "longitude": 20.291592,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1669637941,
      "ems": null
    },
    {
      "latitude": 52.148281,
      "longitude": 20.289865,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669637944,
      "ems": null
    },
    {
      "latitude": 52.147842,
      "longitude": 20.288315,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669637947,
      "ems": null
    },
    {
      "latitude": 52.147293,
      "longitude": 20.286865,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669637950,
      "ems": null
    },
    {
      "latitude": 52.146652,
      "longitude": 20.285416,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669637953,
      "ems": null
    },
    {
      "latitude": 52.146103,
      "longitude": 20.284271,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669637956,
      "ems": null
    },
    {
      "latitude": 52.145462,
      "longitude": 20.282822,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669637959,
      "ems": null
    },
    {
      "latitude": 52.144882,
      "longitude": 20.281546,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669637962,
      "ems": null
    },
    {
      "latitude": 52.144279,
      "longitude": 20.280291,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669637965,
      "ems": null
    },
    {
      "latitude": 52.143677,
      "longitude": 20.278931,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669637968,
      "ems": null
    },
    {
      "latitude": 52.143173,
      "longitude": 20.277786,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669637971,
      "ems": null
    },
    {
      "latitude": 52.142555,
      "longitude": 20.276524,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669637974,
      "ems": null
    },
    {
      "latitude": 52.141998,
      "longitude": 20.27519,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669637977,
      "ems": null
    },
    {
      "latitude": 52.141022,
      "longitude": 20.272287,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669637983,
      "ems": null
    },
    {
      "latitude": 52.14061,
      "longitude": 20.271072,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669637986,
      "ems": null
    },
    {
      "latitude": 52.140091,
      "longitude": 20.269619,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669637989,
      "ems": null
    },
    {
      "latitude": 52.139557,
      "longitude": 20.268173,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669637992,
      "ems": null
    },
    {
      "latitude": 52.139111,
      "longitude": 20.266951,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669637995,
      "ems": null
    },
    {
      "latitude": 52.138554,
      "longitude": 20.265537,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669637999,
      "ems": null
    },
    {
      "latitude": 52.138088,
      "longitude": 20.264204,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669638002,
      "ems": null
    },
    {
      "latitude": 52.137131,
      "longitude": 20.261688,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669638008,
      "ems": null
    },
    {
      "latitude": 52.135944,
      "longitude": 20.258554,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669638014,
      "ems": null
    },
    {
      "latitude": 52.135342,
      "longitude": 20.257141,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638017,
      "ems": null
    },
    {
      "latitude": 52.134064,
      "longitude": 20.254135,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638023,
      "ems": null
    },
    {
      "latitude": 52.132782,
      "longitude": 20.250784,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638029,
      "ems": null
    },
    {
      "latitude": 52.131409,
      "longitude": 20.24765,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638035,
      "ems": null
    },
    {
      "latitude": 52.130035,
      "longitude": 20.24435,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638041,
      "ems": null
    },
    {
      "latitude": 52.128708,
      "longitude": 20.241013,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638047,
      "ems": null
    },
    {
      "latitude": 52.127239,
      "longitude": 20.237288,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669638053,
      "ems": null
    },
    {
      "latitude": 52.125916,
      "longitude": 20.233994,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638059,
      "ems": null
    },
    {
      "latitude": 52.124542,
      "longitude": 20.230865,
      "altitude": {
        "feet": 4300,
        "meters": 1311
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638065,
      "ems": null
    },
    {
      "latitude": 52.123005,
      "longitude": 20.227243,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638071,
      "ems": null
    },
    {
      "latitude": 52.121513,
      "longitude": 20.223476,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669638077,
      "ems": null
    },
    {
      "latitude": 52.120865,
      "longitude": 20.221279,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669638080,
      "ems": null
    },
    {
      "latitude": 52.120396,
      "longitude": 20.219238,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669638083,
      "ems": null
    },
    {
      "latitude": 52.119919,
      "longitude": 20.216827,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669638086,
      "ems": null
    },
    {
      "latitude": 52.119553,
      "longitude": 20.214539,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669638089,
      "ems": null
    },
    {
      "latitude": 52.119186,
      "longitude": 20.212555,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669638092,
      "ems": null
    },
    {
      "latitude": 52.118729,
      "longitude": 20.210114,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669638095,
      "ems": null
    },
    {
      "latitude": 52.118317,
      "longitude": 20.208359,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1669638098,
      "ems": null
    },
    {
      "latitude": 52.117603,
      "longitude": 20.205898,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "squawk": "7000",
      "timestamp": 1669638101,
      "ems": null
    },
    {
      "latitude": 52.116302,
      "longitude": 20.202366,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638107,
      "ems": null
    },
    {
      "latitude": 52.115276,
      "longitude": 20.200012,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638110,
      "ems": null
    },
    {
      "latitude": 52.114471,
      "longitude": 20.198288,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669638113,
      "ems": null
    },
    {
      "latitude": 52.113602,
      "longitude": 20.196457,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1669638116,
      "ems": null
    },
    {
      "latitude": 52.112732,
      "longitude": 20.194626,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638119,
      "ems": null
    },
    {
      "latitude": 52.111816,
      "longitude": 20.192795,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638122,
      "ems": null
    },
    {
      "latitude": 52.110809,
      "longitude": 20.19083,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638125,
      "ems": null
    },
    {
      "latitude": 52.109879,
      "longitude": 20.189104,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1669638128,
      "ems": null
    },
    {
      "latitude": 52.108887,
      "longitude": 20.187302,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1669638131,
      "ems": null
    },
    {
      "latitude": 52.108295,
      "longitude": 20.186123,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638134,
      "ems": null
    },
    {
      "latitude": 52.10643,
      "longitude": 20.182278,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638140,
      "ems": null
    },
    {
      "latitude": 52.104904,
      "longitude": 20.178757,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638146,
      "ems": null
    },
    {
      "latitude": 52.10408,
      "longitude": 20.17662,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669638149,
      "ems": null
    },
    {
      "latitude": 52.103359,
      "longitude": 20.174822,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638152,
      "ems": null
    },
    {
      "latitude": 52.101685,
      "longitude": 20.171213,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669638158,
      "ems": null
    },
    {
      "latitude": 52.101013,
      "longitude": 20.169678,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638161,
      "ems": null
    },
    {
      "latitude": 52.100239,
      "longitude": 20.167837,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638164,
      "ems": null
    },
    {
      "latitude": 52.099457,
      "longitude": 20.165787,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669638167,
      "ems": null
    },
    {
      "latitude": 52.097958,
      "longitude": 20.161638,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "squawk": "7000",
      "timestamp": 1669638173,
      "ems": null
    },
    {
      "latitude": 52.096657,
      "longitude": 20.157637,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669638179,
      "ems": null
    },
    {
      "latitude": 52.096096,
      "longitude": 20.155989,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669638182,
      "ems": null
    },
    {
      "latitude": 52.09552,
      "longitude": 20.15419,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669638185,
      "ems": null
    },
    {
      "latitude": 52.09465,
      "longitude": 20.151596,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669638188,
      "ems": null
    },
    {
      "latitude": 52.094002,
      "longitude": 20.149632,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669638191,
      "ems": null
    },
    {
      "latitude": 52.092606,
      "longitude": 20.145786,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669638197,
      "ems": null
    },
    {
      "latitude": 52.091171,
      "longitude": 20.142059,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669638203,
      "ems": null
    },
    {
      "latitude": 52.089706,
      "longitude": 20.138245,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669638209,
      "ems": null
    },
    {
      "latitude": 52.088882,
      "longitude": 20.136213,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638212,
      "ems": null
    },
    {
      "latitude": 52.087532,
      "longitude": 20.132603,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669638218,
      "ems": null
    },
    {
      "latitude": 52.086273,
      "longitude": 20.128174,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669638224,
      "ems": null
    },
    {
      "latitude": 52.08577,
      "longitude": 20.126343,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669638227,
      "ems": null
    },
    {
      "latitude": 52.084259,
      "longitude": 20.122223,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1669638233,
      "ems": null
    },
    {
      "latitude": 52.083298,
      "longitude": 20.120697,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1669638237,
      "ems": null
    },
    {
      "latitude": 52.082363,
      "longitude": 20.119656,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1669638240,
      "ems": null
    },
    {
      "latitude": 52.081013,
      "longitude": 20.11887,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1669638243,
      "ems": null
    },
    {
      "latitude": 52.079773,
      "longitude": 20.118637,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1669638246,
      "ems": null
    },
    {
      "latitude": 52.07872,
      "longitude": 20.118866,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1669638249,
      "ems": null
    },
    {
      "latitude": 52.077988,
      "longitude": 20.119324,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1669638252,
      "ems": null
    },
    {
      "latitude": 52.077011,
      "longitude": 20.120283,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1669638255,
      "ems": null
    },
    {
      "latitude": 52.075974,
      "longitude": 20.122147,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1669638258,
      "ems": null
    },
    {
      "latitude": 52.075569,
      "longitude": 20.123814,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "squawk": "7000",
      "timestamp": 1669638261,
      "ems": null
    },
    {
      "latitude": 52.075562,
      "longitude": 20.125961,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1669638264,
      "ems": null
    },
    {
      "latitude": 52.075939,
      "longitude": 20.127974,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669638267,
      "ems": null
    },
    {
      "latitude": 52.076687,
      "longitude": 20.1297,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1669638270,
      "ems": null
    },
    {
      "latitude": 52.077568,
      "longitude": 20.130955,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1669638273,
      "ems": null
    },
    {
      "latitude": 52.078812,
      "longitude": 20.132065,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1669638276,
      "ems": null
    },
    {
      "latitude": 52.080322,
      "longitude": 20.132523,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1669638279,
      "ems": null
    },
    {
      "latitude": 52.081806,
      "longitude": 20.132368,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1669638282,
      "ems": null
    },
    {
      "latitude": 52.083206,
      "longitude": 20.131607,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1669638285,
      "ems": null
    },
    {
      "latitude": 52.084507,
      "longitude": 20.130327,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1669638288,
      "ems": null
    },
    {
      "latitude": 52.085625,
      "longitude": 20.128601,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1669638291,
      "ems": null
    },
    {
      "latitude": 52.086365,
      "longitude": 20.126801,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1669638294,
      "ems": null
    },
    {
      "latitude": 52.086971,
      "longitude": 20.124363,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1669638297,
      "ems": null
    },
    {
      "latitude": 52.087158,
      "longitude": 20.122009,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1669638300,
      "ems": null
    },
    {
      "latitude": 52.086971,
      "longitude": 20.119812,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669638303,
      "ems": null
    },
    {
      "latitude": 52.086414,
      "longitude": 20.117693,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669638306,
      "ems": null
    },
    {
      "latitude": 52.08609,
      "longitude": 20.117065,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638308,
      "ems": null
    },
    {
      "latitude": 52.084553,
      "longitude": 20.115261,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1669638312,
      "ems": null
    },
    {
      "latitude": 52.083618,
      "longitude": 20.114899,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1669638315,
      "ems": null
    },
    {
      "latitude": 52.08252,
      "longitude": 20.115051,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1669638318,
      "ems": null
    },
    {
      "latitude": 52.082317,
      "longitude": 20.115183,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1669638319,
      "ems": null
    },
    {
      "latitude": 52.080826,
      "longitude": 20.117493,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1669638324,
      "ems": null
    },
    {
      "latitude": 52.080547,
      "longitude": 20.119263,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1669638327,
      "ems": null
    },
    {
      "latitude": 52.080231,
      "longitude": 20.121155,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1669638330,
      "ems": null
    },
    {
      "latitude": 52.080002,
      "longitude": 20.122986,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1669638333,
      "ems": null
    },
    {
      "latitude": 52.079727,
      "longitude": 20.124817,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1669638336,
      "ems": null
    },
    {
      "latitude": 52.079384,
      "longitude": 20.126638,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1669638339,
      "ems": null
    },
    {
      "latitude": 52.078812,
      "longitude": 20.128098,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1669638342,
      "ems": null
    },
    {
      "latitude": 52.077896,
      "longitude": 20.12915,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1669638345,
      "ems": null
    },
    {
      "latitude": 52.07687,
      "longitude": 20.129465,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1669638348,
      "ems": null
    },
    {
      "latitude": 52.075882,
      "longitude": 20.129089,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1669638351,
      "ems": null
    },
    {
      "latitude": 52.075104,
      "longitude": 20.127487,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "timestamp": 1669638354,
      "ems": null
    },
    {
      "latitude": 52.07515,
      "longitude": 20.125305,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1669638357,
      "ems": null
    },
    {
      "latitude": 52.07579,
      "longitude": 20.123672,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1669638360,
      "ems": null
    },
    {
      "latitude": 52.077942,
      "longitude": 20.122402,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1669638364,
      "ems": null
    },
    {
      "latitude": 52.079151,
      "longitude": 20.124441,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669638369,
      "ems": null
    },
    {
      "latitude": 52.078629,
      "longitude": 20.126114,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1669638372,
      "ems": null
    },
    {
      "latitude": 52.077621,
      "longitude": 20.126114,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1669638375,
      "ems": null
    },
    {
      "latitude": 52.07687,
      "longitude": 20.124363,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669638378,
      "ems": null
    },
    {
      "latitude": 52.076752,
      "longitude": 20.12207,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1669638381,
      "ems": null
    },
    {
      "latitude": 52.076614,
      "longitude": 20.120239,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1669638384,
      "ems": null
    },
    {
      "latitude": 52.076248,
      "longitude": 20.11795,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669638387,
      "ems": null
    },
    {
      "latitude": 52.075848,
      "longitude": 20.115967,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669638390,
      "ems": null
    },
    {
      "latitude": 52.075474,
      "longitude": 20.114004,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669638393,
      "ems": null
    },
    {
      "latitude": 52.075054,
      "longitude": 20.112043,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669638396,
      "ems": null
    },
    {
      "latitude": 52.074692,
      "longitude": 20.110016,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669638399,
      "ems": null
    },
    {
      "latitude": 52.074371,
      "longitude": 20.108032,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669638402,
      "ems": null
    },
    {
      "latitude": 52.073986,
      "longitude": 20.106079,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669638405,
      "ems": null
    },
    {
      "latitude": 52.073055,
      "longitude": 20.102156,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1669638411,
      "ems": null
    },
    {
      "latitude": 52.07259,
      "longitude": 20.100115,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669638414,
      "ems": null
    },
    {
      "latitude": 52.072083,
      "longitude": 20.09819,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1669638417,
      "ems": null
    },
    {
      "latitude": 52.071167,
      "longitude": 20.094223,
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
        "fpm": 1856,
        "ms": 9.4
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669638423,
      "ems": null
    },
    {
      "latitude": 52.070435,
      "longitude": 20.09079,
      "altitude": {
        "feet": 4200,
        "meters": 1280
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669638429,
      "ems": null
    },
    {
      "latitude": 52.069611,
      "longitude": 20.086899,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669638435,
      "ems": null
    },
    {
      "latitude": 52.068512,
      "longitude": 20.083008,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669638441,
      "ems": null
    },
    {
      "latitude": 52.067932,
      "longitude": 20.081282,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669638444,
      "ems": null
    },
    {
      "latitude": 52.067421,
      "longitude": 20.079868,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669638447,
      "ems": null
    },
    {
      "latitude": 52.066544,
      "longitude": 20.077591,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "squawk": "7000",
      "timestamp": 1669638450,
      "ems": null
    },
    {
      "latitude": 52.065838,
      "longitude": 20.075945,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638453,
      "ems": null
    },
    {
      "latitude": 52.065079,
      "longitude": 20.074158,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638456,
      "ems": null
    },
    {
      "latitude": 52.06435,
      "longitude": 20.072493,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638459,
      "ems": null
    },
    {
      "latitude": 52.063698,
      "longitude": 20.071079,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638462,
      "ems": null
    },
    {
      "latitude": 52.062813,
      "longitude": 20.068882,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638465,
      "ems": null
    },
    {
      "latitude": 52.062195,
      "longitude": 20.067444,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638468,
      "ems": null
    },
    {
      "latitude": 52.061325,
      "longitude": 20.06546,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638471,
      "ems": null
    },
    {
      "latitude": 52.060577,
      "longitude": 20.063938,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669638474,
      "ems": null
    },
    {
      "latitude": 52.05986,
      "longitude": 20.06279,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1669638477,
      "ems": null
    },
    {
      "latitude": 52.059082,
      "longitude": 20.061417,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1669638480,
      "ems": null
    },
    {
      "latitude": 52.058296,
      "longitude": 20.060015,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638483,
      "ems": null
    },
    {
      "latitude": 52.056931,
      "longitude": 20.056534,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669638490,
      "ems": null
    },
    {
      "latitude": 52.056435,
      "longitude": 20.054678,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669638493,
      "ems": null
    },
    {
      "latitude": 52.055969,
      "longitude": 20.05303,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669638496,
      "ems": null
    },
    {
      "latitude": 52.055504,
      "longitude": 20.051304,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669638499,
      "ems": null
    },
    {
      "latitude": 52.054962,
      "longitude": 20.049744,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669638502,
      "ems": null
    },
    {
      "latitude": 52.054295,
      "longitude": 20.048008,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638505,
      "ems": null
    },
    {
      "latitude": 52.053635,
      "longitude": 20.046539,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638508,
      "ems": null
    },
    {
      "latitude": 52.052307,
      "longitude": 20.043488,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638514,
      "ems": null
    },
    {
      "latitude": 52.051208,
      "longitude": 20.040512,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669638520,
      "ems": null
    },
    {
      "latitude": 52.050663,
      "longitude": 20.038906,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669638523,
      "ems": null
    },
    {
      "latitude": 52.050102,
      "longitude": 20.037336,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669638526,
      "ems": null
    },
    {
      "latitude": 52.049515,
      "longitude": 20.035706,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669638529,
      "ems": null
    },
    {
      "latitude": 52.048325,
      "longitude": 20.03273,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638535,
      "ems": null
    },
    {
      "latitude": 52.047543,
      "longitude": 20.031372,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "squawk": "7000",
      "timestamp": 1669638538,
      "ems": null
    },
    {
      "latitude": 52.046768,
      "longitude": 20.030365,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1669638541,
      "ems": null
    },
    {
      "latitude": 52.045761,
      "longitude": 20.029678,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1669638544,
      "ems": null
    },
    {
      "latitude": 52.044891,
      "longitude": 20.029409,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1669638547,
      "ems": null
    },
    {
      "latitude": 52.043911,
      "longitude": 20.029646,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1669638550,
      "ems": null
    },
    {
      "latitude": 52.043308,
      "longitude": 20.030117,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "timestamp": 1669638553,
      "ems": null
    },
    {
      "latitude": 52.042515,
      "longitude": 20.031294,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1669638556,
      "ems": null
    },
    {
      "latitude": 52.042145,
      "longitude": 20.032501,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1669638559,
      "ems": null
    },
    {
      "latitude": 52.041916,
      "longitude": 20.033875,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1669638562,
      "ems": null
    },
    {
      "latitude": 52.041779,
      "longitude": 20.035095,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1669638565,
      "ems": null
    },
    {
      "latitude": 52.041584,
      "longitude": 20.03616,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1669638568,
      "ems": null
    },
    {
      "latitude": 52.041397,
      "longitude": 20.03718,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1669638571,
      "ems": null
    },
    {
      "latitude": 52.041275,
      "longitude": 20.0383,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1669638574,
      "ems": null
    },
    {
      "latitude": 52.041138,
      "longitude": 20.039444,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1669638577,
      "ems": null
    },
    {
      "latitude": 52.041,
      "longitude": 20.04097,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1669638580,
      "ems": null
    },
    {
      "latitude": 52.040886,
      "longitude": 20.042202,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1669638583,
      "ems": null
    },
    {
      "latitude": 52.040771,
      "longitude": 20.043335,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1669638586,
      "ems": null
    },
    {
      "latitude": 52.040726,
      "longitude": 20.044556,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1669638589,
      "ems": null
    },
    {
      "latitude": 52.04068,
      "longitude": 20.045929,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1669638592,
      "ems": null
    },
    {
      "latitude": 52.040588,
      "longitude": 20.047073,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1669638595,
      "ems": null
    },
    {
      "latitude": 52.040497,
      "longitude": 20.04837,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1669638598,
      "ems": null
    },
    {
      "latitude": 52.040451,
      "longitude": 20.049667,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1669638601,
      "ems": null
    },
    {
      "latitude": 52.040405,
      "longitude": 20.050964,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1669638604,
      "ems": null
    },
    {
      "latitude": 52.040405,
      "longitude": 20.052185,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1669638607,
      "ems": null
    },
    {
      "latitude": 52.040421,
      "longitude": 20.053423,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1669638610,
      "ems": null
    },
    {
      "latitude": 52.040466,
      "longitude": 20.054678,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1669638613,
      "ems": null
    },
    {
      "latitude": 52.040512,
      "longitude": 20.056013,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1669638616,
      "ems": null
    },
    {
      "latitude": 52.040562,
      "longitude": 20.057112,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1669638619,
      "ems": null
    },
    {
      "latitude": 52.040607,
      "longitude": 20.057896,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1669638622,
      "ems": null
    },
    {
      "latitude": 52.040771,
      "longitude": 20.059128,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669638625,
      "ems": null
    },
    {
      "latitude": 52.040886,
      "longitude": 20.060171,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1669638628,
      "ems": null
    },
    {
      "latitude": 52.041119,
      "longitude": 20.06127,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669638631,
      "ems": null
    },
    {
      "latitude": 52.041275,
      "longitude": 20.062332,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669638634,
      "ems": null
    },
    {
      "latitude": 52.041447,
      "longitude": 20.063311,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669638637,
      "ems": null
    },
    {
      "latitude": 52.041641,
      "longitude": 20.064392,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669638640,
      "ems": null
    },
    {
      "latitude": 52.041862,
      "longitude": 20.065586,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669638643,
      "ems": null
    },
    {
      "latitude": 52.042095,
      "longitude": 20.066607,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669638646,
      "ems": null
    },
    {
      "latitude": 52.042469,
      "longitude": 20.067862,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1669638649,
      "ems": null
    },
    {
      "latitude": 52.043106,
      "longitude": 20.068893,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1669638652,
      "ems": null
    },
    {
      "latitude": 52.043865,
      "longitude": 20.069431,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1669638655,
      "ems": null
    },
    {
      "latitude": 52.044617,
      "longitude": 20.06958,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1669638658,
      "ems": null
    },
    {
      "latitude": 52.045914,
      "longitude": 20.069275,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1669638661,
      "ems": null
    },
    {
      "latitude": 52.046753,
      "longitude": 20.068726,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1669638664,
      "ems": null
    },
    {
      "latitude": 52.047775,
      "longitude": 20.067549,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1669638667,
      "ems": null
    },
    {
      "latitude": 52.048473,
      "longitude": 20.066294,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1669638670,
      "ems": null
    },
    {
      "latitude": 52.049332,
      "longitude": 20.064545,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1669638673,
      "ems": null
    },
    {
      "latitude": 52.049965,
      "longitude": 20.063076,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1669638676,
      "ems": null
    },
    {
      "latitude": 52.050659,
      "longitude": 20.061188,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1669638679,
      "ems": null
    },
    {
      "latitude": 52.051208,
      "longitude": 20.059509,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1669638682,
      "ems": null
    },
    {
      "latitude": 52.05162,
      "longitude": 20.057831,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1669638685,
      "ems": null
    },
    {
      "latitude": 52.051941,
      "longitude": 20.055923,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1669638688,
      "ems": null
    },
    {
      "latitude": 52.052078,
      "longitude": 20.054092,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1669638691,
      "ems": null
    },
    {
      "latitude": 52.052105,
      "longitude": 20.052561,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1669638694,
      "ems": null
    },
    {
      "latitude": 52.052105,
      "longitude": 20.050283,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1669638697,
      "ems": null
    },
    {
      "latitude": 52.052078,
      "longitude": 20.048904,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1669638700,
      "ems": null
    },
    {
      "latitude": 52.051987,
      "longitude": 20.046921,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1669638703,
      "ems": null
    },
    {
      "latitude": 52.051918,
      "longitude": 20.045027,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1669638706,
      "ems": null
    },
    {
      "latitude": 52.051872,
      "longitude": 20.043535,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1669638709,
      "ems": null
    },
    {
      "latitude": 52.051826,
      "longitude": 20.041809,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1669638713,
      "ems": null
    },
    {
      "latitude": 52.051712,
      "longitude": 20.039825,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1669638716,
      "ems": null
    },
    {
      "latitude": 52.051594,
      "longitude": 20.038198,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1669638719,
      "ems": null
    },
    {
      "latitude": 52.051392,
      "longitude": 20.036545,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669638722,
      "ems": null
    },
    {
      "latitude": 52.051071,
      "longitude": 20.034866,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669638725,
      "ems": null
    },
    {
      "latitude": 52.050659,
      "longitude": 20.033188,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669638728,
      "ems": null
    },
    {
      "latitude": 52.050247,
      "longitude": 20.031967,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669638731,
      "ems": null
    },
    {
      "latitude": 52.049652,
      "longitude": 20.030594,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638734,
      "ems": null
    },
    {
      "latitude": 52.04892,
      "longitude": 20.028839,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638737,
      "ems": null
    },
    {
      "latitude": 52.048416,
      "longitude": 20.027771,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1669638740,
      "ems": null
    },
    {
      "latitude": 52.047638,
      "longitude": 20.026272,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638743,
      "ems": null
    },
    {
      "latitude": 52.04689,
      "longitude": 20.024858,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638746,
      "ems": null
    },
    {
      "latitude": 52.046288,
      "longitude": 20.023682,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669638749,
      "ems": null
    },
    {
      "latitude": 52.04554,
      "longitude": 20.022268,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1669638752,
      "ems": null
    },
    {
      "latitude": 52.044846,
      "longitude": 20.020828,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638755,
      "ems": null
    },
    {
      "latitude": 52.044159,
      "longitude": 20.019455,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669638758,
      "ems": null
    },
    {
      "latitude": 52.0434,
      "longitude": 20.018032,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669638761,
      "ems": null
    },
    {
      "latitude": 52.042702,
      "longitude": 20.016775,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669638764,
      "ems": null
    },
    {
      "latitude": 52.042049,
      "longitude": 20.01552,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1669638767,
      "ems": null
    },
    {
      "latitude": 52.041138,
      "longitude": 20.013885,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1669638770,
      "ems": null
    },
    {
      "latitude": 52.040234,
      "longitude": 20.012381,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1669638773,
      "ems": null
    },
    {
      "latitude": 52.039398,
      "longitude": 20.011063,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1669638776,
      "ems": null
    },
    {
      "latitude": 52.037704,
      "longitude": 20.007858,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638782,
      "ems": null
    },
    {
      "latitude": 52.03624,
      "longitude": 20.004883,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669638788,
      "ems": null
    },
    {
      "latitude": 52.034637,
      "longitude": 20.001297,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638794,
      "ems": null
    },
    {
      "latitude": 52.033905,
      "longitude": 19.999542,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638797,
      "ems": null
    },
    {
      "latitude": 52.033218,
      "longitude": 19.997711,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669638800,
      "ems": null
    },
    {
      "latitude": 52.032578,
      "longitude": 19.995728,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669638803,
      "ems": null
    },
    {
      "latitude": 52.032028,
      "longitude": 19.993896,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669638806,
      "ems": null
    },
    {
      "latitude": 52.031525,
      "longitude": 19.991913,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669638809,
      "ems": null
    },
    {
      "latitude": 52.030972,
      "longitude": 19.989702,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669638812,
      "ems": null
    },
    {
      "latitude": 52.030411,
      "longitude": 19.987661,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669638815,
      "ems": null
    },
    {
      "latitude": 52.029945,
      "longitude": 19.986013,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669638818,
      "ems": null
    },
    {
      "latitude": 52.029373,
      "longitude": 19.983978,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1669638821,
      "ems": null
    },
    {
      "latitude": 52.028782,
      "longitude": 19.98209,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669638824,
      "ems": null
    },
    {
      "latitude": 52.027451,
      "longitude": 19.978256,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669638830,
      "ems": null
    },
    {
      "latitude": 52.026131,
      "longitude": 19.974558,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669638836,
      "ems": null
    },
    {
      "latitude": 52.025436,
      "longitude": 19.972839,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638839,
      "ems": null
    },
    {
      "latitude": 52.024734,
      "longitude": 19.971104,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638842,
      "ems": null
    },
    {
      "latitude": 52.024017,
      "longitude": 19.969254,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669638845,
      "ems": null
    },
    {
      "latitude": 52.022919,
      "longitude": 19.965454,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1669638851,
      "ems": null
    },
    {
      "latitude": 52.022499,
      "longitude": 19.963335,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669638854,
      "ems": null
    },
    {
      "latitude": 52.022324,
      "longitude": 19.960938,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1669638857,
      "ems": null
    },
    {
      "latitude": 52.022049,
      "longitude": 19.958801,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669638860,
      "ems": null
    },
    {
      "latitude": 52.021336,
      "longitude": 19.95698,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638863,
      "ems": null
    },
    {
      "latitude": 52.020355,
      "longitude": 19.955645,
      "altitude": {
        "feet": 4200,
        "meters": 1280
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1669638866,
      "ems": null
    },
    {
      "latitude": 52.019394,
      "longitude": 19.95491,
      "altitude": {
        "feet": 4100,
        "meters": 1250
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1669638869,
      "ems": null
    },
    {
      "latitude": 52.01825,
      "longitude": 19.953842,
      "altitude": {
        "feet": 4200,
        "meters": 1280
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1669638872,
      "ems": null
    },
    {
      "latitude": 52.017334,
      "longitude": 19.952393,
      "altitude": {
        "feet": 4200,
        "meters": 1280
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1669638875,
      "ems": null
    },
    {
      "latitude": 52.016262,
      "longitude": 19.948896,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669638881,
      "ems": null
    },
    {
      "latitude": 52.015915,
      "longitude": 19.946823,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669638885,
      "ems": null
    },
    {
      "latitude": 52.015003,
      "longitude": 19.942854,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669638891,
      "ems": null
    },
    {
      "latitude": 52.014267,
      "longitude": 19.941254,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669638894,
      "ems": null
    },
    {
      "latitude": 52.013397,
      "longitude": 19.939728,
      "altitude": {
        "feet": 4200,
        "meters": 1280
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1669638897,
      "ems": null
    },
    {
      "latitude": 52.012489,
      "longitude": 19.938066,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1669638900,
      "ems": null
    },
    {
      "latitude": 52.010769,
      "longitude": 19.934692,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669638906,
      "ems": null
    },
    {
      "latitude": 52.009834,
      "longitude": 19.93273,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638909,
      "ems": null
    },
    {
      "latitude": 52.009094,
      "longitude": 19.930878,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638912,
      "ems": null
    },
    {
      "latitude": 52.008347,
      "longitude": 19.929043,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669638915,
      "ems": null
    },
    {
      "latitude": 52.007629,
      "longitude": 19.927139,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669638918,
      "ems": null
    },
    {
      "latitude": 52.006897,
      "longitude": 19.925156,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669638921,
      "ems": null
    },
    {
      "latitude": 52.006111,
      "longitude": 19.923157,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638924,
      "ems": null
    },
    {
      "latitude": 52.005295,
      "longitude": 19.921188,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638927,
      "ems": null
    },
    {
      "latitude": 52.004528,
      "longitude": 19.91939,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638930,
      "ems": null
    },
    {
      "latitude": 52.003693,
      "longitude": 19.917349,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638933,
      "ems": null
    },
    {
      "latitude": 52.00206,
      "longitude": 19.913662,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638939,
      "ems": null
    },
    {
      "latitude": 52.000397,
      "longitude": 19.909897,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638945,
      "ems": null
    },
    {
      "latitude": 51.998932,
      "longitude": 19.906235,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638951,
      "ems": null
    },
    {
      "latitude": 51.99736,
      "longitude": 19.902517,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669638957,
      "ems": null
    },
    {
      "latitude": 51.995731,
      "longitude": 19.898909,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638963,
      "ems": null
    },
    {
      "latitude": 51.99408,
      "longitude": 19.89502,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638969,
      "ems": null
    },
    {
      "latitude": 51.992611,
      "longitude": 19.891218,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669638975,
      "ems": null
    },
    {
      "latitude": 51.991074,
      "longitude": 19.887451,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669638981,
      "ems": null
    },
    {
      "latitude": 51.989819,
      "longitude": 19.88439,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638987,
      "ems": null
    },
    {
      "latitude": 51.98822,
      "longitude": 19.8806,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669638993,
      "ems": null
    },
    {
      "latitude": 51.986885,
      "longitude": 19.877563,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669638997,
      "ems": null
    },
    {
      "latitude": 51.985977,
      "longitude": 19.875717,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669639000,
      "ems": null
    },
    {
      "latitude": 51.985535,
      "longitude": 19.874739,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669639002,
      "ems": null
    },
    {
      "latitude": 51.98378,
      "longitude": 19.870834,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639009,
      "ems": null
    },
    {
      "latitude": 51.982269,
      "longitude": 19.867325,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669639015,
      "ems": null
    },
    {
      "latitude": 51.980694,
      "longitude": 19.863674,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669639021,
      "ems": null
    },
    {
      "latitude": 51.979252,
      "longitude": 19.860535,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669639026,
      "ems": null
    },
    {
      "latitude": 51.977436,
      "longitude": 19.856455,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669639033,
      "ems": null
    },
    {
      "latitude": 51.97604,
      "longitude": 19.852922,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639039,
      "ems": null
    },
    {
      "latitude": 51.974854,
      "longitude": 19.850159,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639044,
      "ems": null
    },
    {
      "latitude": 51.973106,
      "longitude": 19.846096,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639051,
      "ems": null
    },
    {
      "latitude": 51.971786,
      "longitude": 19.842682,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639057,
      "ems": null
    },
    {
      "latitude": 51.971146,
      "longitude": 19.840851,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639060,
      "ems": null
    },
    {
      "latitude": 51.970917,
      "longitude": 19.840088,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639062,
      "ems": null
    },
    {
      "latitude": 51.970139,
      "longitude": 19.837494,
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1669639066,
      "ems": null
    },
    {
      "latitude": 51.970036,
      "longitude": 19.837149,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639069,
      "ems": null
    },
    {
      "latitude": 51.969086,
      "longitude": 19.834137,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639072,
      "ems": null
    },
    {
      "latitude": 51.968857,
      "longitude": 19.833374,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639075,
      "ems": null
    },
    {
      "latitude": 51.968124,
      "longitude": 19.831028,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639078,
      "ems": null
    },
    {
      "latitude": 51.96698,
      "longitude": 19.827728,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639084,
      "ems": null
    },
    {
      "latitude": 51.966339,
      "longitude": 19.826279,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639087,
      "ems": null
    },
    {
      "latitude": 51.965752,
      "longitude": 19.824829,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639090,
      "ems": null
    },
    {
      "latitude": 51.96524,
      "longitude": 19.823608,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639093,
      "ems": null
    },
    {
      "latitude": 51.964737,
      "longitude": 19.822388,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639095,
      "ems": null
    },
    {
      "latitude": 51.964096,
      "longitude": 19.820633,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639099,
      "ems": null
    },
    {
      "latitude": 51.962769,
      "longitude": 19.816895,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639106,
      "ems": null
    },
    {
      "latitude": 51.961655,
      "longitude": 19.813765,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639112,
      "ems": null
    },
    {
      "latitude": 51.960571,
      "longitude": 19.810638,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669639118,
      "ems": null
    },
    {
      "latitude": 51.959373,
      "longitude": 19.807407,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669639124,
      "ems": null
    },
    {
      "latitude": 51.958237,
      "longitude": 19.804382,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639129,
      "ems": null
    },
    {
      "latitude": 51.957596,
      "longitude": 19.80278,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639133,
      "ems": null
    },
    {
      "latitude": 51.956543,
      "longitude": 19.800339,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639137,
      "ems": null
    },
    {
      "latitude": 51.955185,
      "longitude": 19.797129,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639143,
      "ems": null
    },
    {
      "latitude": 51.953888,
      "longitude": 19.794083,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669639148,
      "ems": null
    },
    {
      "latitude": 51.953293,
      "longitude": 19.792786,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669639151,
      "ems": null
    },
    {
      "latitude": 51.952652,
      "longitude": 19.791412,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669639154,
      "ems": null
    },
    {
      "latitude": 51.951645,
      "longitude": 19.789429,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669639158,
      "ems": null
    },
    {
      "latitude": 51.950901,
      "longitude": 19.787947,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669639161,
      "ems": null
    },
    {
      "latitude": 51.950272,
      "longitude": 19.786758,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669639163,
      "ems": null
    },
    {
      "latitude": 51.948624,
      "longitude": 19.783173,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639170,
      "ems": null
    },
    {
      "latitude": 51.947315,
      "longitude": 19.779942,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639176,
      "ems": null
    },
    {
      "latitude": 51.946014,
      "longitude": 19.776567,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639181,
      "ems": null
    },
    {
      "latitude": 51.945267,
      "longitude": 19.774685,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639185,
      "ems": null
    },
    {
      "latitude": 51.944382,
      "longitude": 19.772409,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639189,
      "ems": null
    },
    {
      "latitude": 51.943546,
      "longitude": 19.77029,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639193,
      "ems": null
    },
    {
      "latitude": 51.94173,
      "longitude": 19.765659,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639201,
      "ems": null
    },
    {
      "latitude": 51.93996,
      "longitude": 19.760874,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669639209,
      "ems": null
    },
    {
      "latitude": 51.938095,
      "longitude": 19.756851,
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1669639216,
      "ems": null
    },
    {
      "latitude": 51.93718,
      "longitude": 19.755402,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1669639220,
      "ems": null
    },
    {
      "latitude": 51.936375,
      "longitude": 19.754124,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1669639223,
      "ems": null
    },
    {
      "latitude": 51.935989,
      "longitude": 19.753494,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1669639224,
      "ems": null
    },
    {
      "latitude": 51.934891,
      "longitude": 19.751663,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1669639228,
      "ems": null
    },
    {
      "latitude": 51.93391,
      "longitude": 19.750122,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1669639232,
      "ems": null
    },
    {
      "latitude": 51.933105,
      "longitude": 19.74884,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1669639235,
      "ems": null
    },
    {
      "latitude": 51.932419,
      "longitude": 19.747768,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1669639238,
      "ems": null
    },
    {
      "latitude": 51.93187,
      "longitude": 19.74678,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1669639239,
      "ems": null
    },
    {
      "latitude": 51.930931,
      "longitude": 19.745022,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1669639243,
      "ems": null
    },
    {
      "latitude": 51.930038,
      "longitude": 19.743195,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669639247,
      "ems": null
    },
    {
      "latitude": 51.929161,
      "longitude": 19.741098,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639251,
      "ems": null
    },
    {
      "latitude": 51.928509,
      "longitude": 19.739529,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639253,
      "ems": null
    },
    {
      "latitude": 51.927841,
      "longitude": 19.737778,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639256,
      "ems": null
    },
    {
      "latitude": 51.927292,
      "longitude": 19.736328,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669639259,
      "ems": null
    },
    {
      "latitude": 51.926601,
      "longitude": 19.73427,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639263,
      "ems": null
    },
    {
      "latitude": 51.926369,
      "longitude": 19.733721,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639264,
      "ems": null
    },
    {
      "latitude": 51.925644,
      "longitude": 19.731522,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639267,
      "ems": null
    },
    {
      "latitude": 51.92482,
      "longitude": 19.72908,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639271,
      "ems": null
    },
    {
      "latitude": 51.924133,
      "longitude": 19.72702,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639275,
      "ems": null
    },
    {
      "latitude": 51.923344,
      "longitude": 19.724619,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639279,
      "ems": null
    },
    {
      "latitude": 51.922623,
      "longitude": 19.722366,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639283,
      "ems": null
    },
    {
      "latitude": 51.920876,
      "longitude": 19.716928,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639291,
      "ems": null
    },
    {
      "latitude": 51.919247,
      "longitude": 19.712141,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669639299,
      "ems": null
    },
    {
      "latitude": 51.91729,
      "longitude": 19.706882,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639310,
      "ems": null
    },
    {
      "latitude": 51.91452,
      "longitude": 19.699783,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639320,
      "ems": null
    },
    {
      "latitude": 51.913658,
      "longitude": 19.697466,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639325,
      "ems": null
    },
    {
      "latitude": 51.911892,
      "longitude": 19.692129,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639333,
      "ems": null
    },
    {
      "latitude": 51.910217,
      "longitude": 19.686966,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639342,
      "ems": null
    },
    {
      "latitude": 51.908585,
      "longitude": 19.681772,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639351,
      "ems": null
    },
    {
      "latitude": 51.90733,
      "longitude": 19.677927,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639357,
      "ems": null
    },
    {
      "latitude": 51.905792,
      "longitude": 19.673689,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639365,
      "ems": null
    },
    {
      "latitude": 51.905048,
      "longitude": 19.671804,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639368,
      "ems": null
    },
    {
      "latitude": 51.904022,
      "longitude": 19.669294,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639373,
      "ems": null
    },
    {
      "latitude": 51.902481,
      "longitude": 19.665222,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639380,
      "ems": null
    },
    {
      "latitude": 51.901276,
      "longitude": 19.662231,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639385,
      "ems": null
    },
    {
      "latitude": 51.900558,
      "longitude": 19.660645,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1669639389,
      "ems": null
    },
    {
      "latitude": 51.900055,
      "longitude": 19.659729,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1669639390,
      "ems": null
    },
    {
      "latitude": 51.898903,
      "longitude": 19.658152,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1669639394,
      "ems": null
    },
    {
      "latitude": 51.898342,
      "longitude": 19.657602,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1669639396,
      "ems": null
    },
    {
      "latitude": 51.897125,
      "longitude": 19.656601,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1669639400,
      "ems": null
    },
    {
      "latitude": 51.895935,
      "longitude": 19.656143,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1669639404,
      "ems": null
    },
    {
      "latitude": 51.89502,
      "longitude": 19.655991,
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1669639408,
      "ems": null
    },
    {
      "latitude": 51.893082,
      "longitude": 19.655838,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1669639412,
      "ems": null
    },
    {
      "latitude": 51.892136,
      "longitude": 19.655283,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1669639416,
      "ems": null
    },
    {
      "latitude": 51.890663,
      "longitude": 19.652863,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639422,
      "ems": null
    },
    {
      "latitude": 51.890152,
      "longitude": 19.651184,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669639425,
      "ems": null
    },
    {
      "latitude": 51.889755,
      "longitude": 19.648899,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669639428,
      "ems": null
    },
    {
      "latitude": 51.889683,
      "longitude": 19.64859,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669639429,
      "ems": null
    },
    {
      "latitude": 51.889389,
      "longitude": 19.645559,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1669639433,
      "ems": null
    },
    {
      "latitude": 51.889126,
      "longitude": 19.64325,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1669639437,
      "ems": null
    },
    {
      "latitude": 51.888931,
      "longitude": 19.64155,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1669639439,
      "ems": null
    },
    {
      "latitude": 51.88884,
      "longitude": 19.640362,
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1669639442,
      "ems": null
    },
    {
      "latitude": 51.888802,
      "longitude": 19.639359,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1669639443,
      "ems": null
    },
    {
      "latitude": 51.888702,
      "longitude": 19.636652,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1669639447,
      "ems": null
    },
    {
      "latitude": 51.88866,
      "longitude": 19.63562,
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1669639449,
      "ems": null
    },
    {
      "latitude": 51.888657,
      "longitude": 19.632866,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1669639452,
      "ems": null
    },
    {
      "latitude": 51.888657,
      "longitude": 19.63101,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1669639455,
      "ems": null
    },
    {
      "latitude": 51.88866,
      "longitude": 19.629364,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1669639458,
      "ems": null
    },
    {
      "latitude": 51.888752,
      "longitude": 19.626923,
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1669639462,
      "ems": null
    },
    {
      "latitude": 51.888939,
      "longitude": 19.623413,
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
      "timestamp": 1669639466,
      "ems": null
    },
    {
      "latitude": 51.88908,
      "longitude": 19.620895,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1669639470,
      "ems": null
    },
    {
      "latitude": 51.889172,
      "longitude": 19.619217,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1669639472,
      "ems": null
    },
    {
      "latitude": 51.889297,
      "longitude": 19.617054,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1669639475,
      "ems": null
    },
    {
      "latitude": 51.889359,
      "longitude": 19.615784,
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1669639477,
      "ems": null
    },
    {
      "latitude": 51.889172,
      "longitude": 19.609604,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1669639487,
      "ems": null
    },
    {
      "latitude": 51.888794,
      "longitude": 19.607182,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669639491,
      "ems": null
    },
    {
      "latitude": 51.888103,
      "longitude": 19.604034,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1669639496,
      "ems": null
    },
    {
      "latitude": 51.887543,
      "longitude": 19.601822,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669639500,
      "ems": null
    },
    {
      "latitude": 51.886799,
      "longitude": 19.598923,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639505,
      "ems": null
    },
    {
      "latitude": 51.886238,
      "longitude": 19.596863,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639509,
      "ems": null
    },
    {
      "latitude": 51.885635,
      "longitude": 19.59465,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669639513,
      "ems": null
    },
    {
      "latitude": 51.884903,
      "longitude": 19.592186,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669639517,
      "ems": null
    },
    {
      "latitude": 51.883633,
      "longitude": 19.587631,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669639525,
      "ems": null
    },
    {
      "latitude": 51.882294,
      "longitude": 19.583279,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639533,
      "ems": null
    },
    {
      "latitude": 51.88168,
      "longitude": 19.581375,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639537,
      "ems": null
    },
    {
      "latitude": 51.881104,
      "longitude": 19.579716,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639540,
      "ems": null
    },
    {
      "latitude": 51.8806,
      "longitude": 19.57823,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639543,
      "ems": null
    },
    {
      "latitude": 51.879501,
      "longitude": 19.57489,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639549,
      "ems": null
    },
    {
      "latitude": 51.878448,
      "longitude": 19.571327,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639555,
      "ems": null
    },
    {
      "latitude": 51.877213,
      "longitude": 19.567839,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639561,
      "ems": null
    },
    {
      "latitude": 51.876114,
      "longitude": 19.565018,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639567,
      "ems": null
    },
    {
      "latitude": 51.874882,
      "longitude": 19.561768,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639573,
      "ems": null
    },
    {
      "latitude": 51.873688,
      "longitude": 19.558485,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639579,
      "ems": null
    },
    {
      "latitude": 51.872555,
      "longitude": 19.555206,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639585,
      "ems": null
    },
    {
      "latitude": 51.871353,
      "longitude": 19.551952,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669639591,
      "ems": null
    },
    {
      "latitude": 51.870552,
      "longitude": 19.549866,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639596,
      "ems": null
    },
    {
      "latitude": 51.8699,
      "longitude": 19.547729,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639600,
      "ems": null
    },
    {
      "latitude": 51.869621,
      "longitude": 19.545822,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669639602,
      "ems": null
    },
    {
      "latitude": 51.869568,
      "longitude": 19.543936,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1669639605,
      "ems": null
    },
    {
      "latitude": 51.869568,
      "longitude": 19.542229,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1669639608,
      "ems": null
    },
    {
      "latitude": 51.869576,
      "longitude": 19.540253,
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1669639611,
      "ems": null
    },
    {
      "latitude": 51.869576,
      "longitude": 19.537888,
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1669639615,
      "ems": null
    },
    {
      "latitude": 51.869434,
      "longitude": 19.536438,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1669639617,
      "ems": null
    },
    {
      "latitude": 51.869156,
      "longitude": 19.534805,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669639620,
      "ems": null
    },
    {
      "latitude": 51.86869,
      "longitude": 19.533081,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639623,
      "ems": null
    },
    {
      "latitude": 51.868271,
      "longitude": 19.531708,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1669639626,
      "ems": null
    },
    {
      "latitude": 51.867619,
      "longitude": 19.528809,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639632,
      "ems": null
    },
    {
      "latitude": 51.867325,
      "longitude": 19.527605,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669639636,
      "ems": null
    },
    {
      "latitude": 51.866867,
      "longitude": 19.5256,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639639,
      "ems": null
    },
    {
      "latitude": 51.866409,
      "longitude": 19.524155,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639642,
      "ems": null
    },
    {
      "latitude": 51.865944,
      "longitude": 19.522705,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639645,
      "ems": null
    },
    {
      "latitude": 51.865494,
      "longitude": 19.521442,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639648,
      "ems": null
    },
    {
      "latitude": 51.86515,
      "longitude": 19.520416,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669639651,
      "ems": null
    },
    {
      "latitude": 51.864174,
      "longitude": 19.517212,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639657,
      "ems": null
    },
    {
      "latitude": 51.86343,
      "longitude": 19.513855,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669639663,
      "ems": null
    },
    {
      "latitude": 51.863197,
      "longitude": 19.512253,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669639666,
      "ems": null
    },
    {
      "latitude": 51.862965,
      "longitude": 19.510651,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669639669,
      "ems": null
    },
    {
      "latitude": 51.862732,
      "longitude": 19.50882,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669639672,
      "ems": null
    },
    {
      "latitude": 51.862499,
      "longitude": 19.507217,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669639675,
      "ems": null
    },
    {
      "latitude": 51.862289,
      "longitude": 19.505707,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669639678,
      "ems": null
    },
    {
      "latitude": 51.861938,
      "longitude": 19.504013,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669639681,
      "ems": null
    },
    {
      "latitude": 51.861603,
      "longitude": 19.502365,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669639684,
      "ems": null
    },
    {
      "latitude": 51.860641,
      "longitude": 19.499174,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1669639690,
      "ems": null
    },
    {
      "latitude": 51.860184,
      "longitude": 19.497911,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669639693,
      "ems": null
    },
    {
      "latitude": 51.85968,
      "longitude": 19.496576,
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1669639696,
      "ems": null
    },
    {
      "latitude": 51.859333,
      "longitude": 19.495087,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669639699,
      "ems": null
    },
    {
      "latitude": 51.859177,
      "longitude": 19.494423,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639700,
      "ems": null
    },
    {
      "latitude": 51.858398,
      "longitude": 19.489672,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669639708,
      "ems": null
    },
    {
      "latitude": 51.857376,
      "longitude": 19.484253,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639716,
      "ems": null
    },
    {
      "latitude": 51.85696,
      "longitude": 19.481964,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669639720,
      "ems": null
    },
    {
      "latitude": 51.85643,
      "longitude": 19.479427,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639724,
      "ems": null
    },
    {
      "latitude": 51.85524,
      "longitude": 19.474529,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669639732,
      "ems": null
    },
    {
      "latitude": 51.854492,
      "longitude": 19.471741,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639737,
      "ems": null
    },
    {
      "latitude": 51.853729,
      "longitude": 19.468962,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639741,
      "ems": null
    },
    {
      "latitude": 51.853271,
      "longitude": 19.46718,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669639744,
      "ems": null
    },
    {
      "latitude": 51.852722,
      "longitude": 19.465408,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669639747,
      "ems": null
    },
    {
      "latitude": 51.85231,
      "longitude": 19.463987,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669639750,
      "ems": null
    },
    {
      "latitude": 51.851326,
      "longitude": 19.460144,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669639756,
      "ems": null
    },
    {
      "latitude": 51.850433,
      "longitude": 19.456713,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669639762,
      "ems": null
    },
    {
      "latitude": 51.849651,
      "longitude": 19.453506,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1669639768,
      "ems": null
    },
    {
      "latitude": 51.848671,
      "longitude": 19.449539,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1669639774,
      "ems": null
    },
    {
      "latitude": 51.847778,
      "longitude": 19.445875,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639781,
      "ems": null
    },
    {
      "latitude": 51.846764,
      "longitude": 19.442596,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1669639787,
      "ems": null
    },
    {
      "latitude": 51.845879,
      "longitude": 19.439545,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639792,
      "ems": null
    },
    {
      "latitude": 51.844948,
      "longitude": 19.436111,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639799,
      "ems": null
    },
    {
      "latitude": 51.844158,
      "longitude": 19.432831,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669639804,
      "ems": null
    },
    {
      "latitude": 51.843292,
      "longitude": 19.429173,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639811,
      "ems": null
    },
    {
      "latitude": 51.842945,
      "longitude": 19.427414,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639814,
      "ems": null
    },
    {
      "latitude": 51.842525,
      "longitude": 19.425583,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669639817,
      "ems": null
    },
    {
      "latitude": 51.842194,
      "longitude": 19.423828,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639819,
      "ems": null
    },
    {
      "latitude": 51.841827,
      "longitude": 19.421972,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639822,
      "ems": null
    },
    {
      "latitude": 51.841503,
      "longitude": 19.420242,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669639825,
      "ems": null
    },
    {
      "latitude": 51.840683,
      "longitude": 19.416479,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639831,
      "ems": null
    },
    {
      "latitude": 51.83992,
      "longitude": 19.412766,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639838,
      "ems": null
    },
    {
      "latitude": 51.839218,
      "longitude": 19.409056,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639844,
      "ems": null
    },
    {
      "latitude": 51.838524,
      "longitude": 19.405518,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669639850,
      "ems": null
    },
    {
      "latitude": 51.837917,
      "longitude": 19.401703,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669639856,
      "ems": null
    },
    {
      "latitude": 51.837639,
      "longitude": 19.399948,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669639858,
      "ems": null
    },
    {
      "latitude": 51.837315,
      "longitude": 19.397354,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669639862,
      "ems": null
    },
    {
      "latitude": 51.837032,
      "longitude": 19.395523,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669639865,
      "ems": null
    },
    {
      "latitude": 51.836426,
      "longitude": 19.391388,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1669639871,
      "ems": null
    },
    {
      "latitude": 51.835777,
      "longitude": 19.38797,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669639877,
      "ems": null
    },
    {
      "latitude": 51.835373,
      "longitude": 19.386341,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669639880,
      "ems": null
    },
    {
      "latitude": 51.834915,
      "longitude": 19.384708,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1669639883,
      "ems": null
    },
    {
      "latitude": 51.834381,
      "longitude": 19.38324,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1669639886,
      "ems": null
    },
    {
      "latitude": 51.833817,
      "longitude": 19.381887,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669639889,
      "ems": null
    },
    {
      "latitude": 51.833172,
      "longitude": 19.380341,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639892,
      "ems": null
    },
    {
      "latitude": 51.832706,
      "longitude": 19.379196,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639894,
      "ems": null
    },
    {
      "latitude": 51.832005,
      "longitude": 19.377518,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639898,
      "ems": null
    },
    {
      "latitude": 51.831448,
      "longitude": 19.376221,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669639901,
      "ems": null
    },
    {
      "latitude": 51.830887,
      "longitude": 19.374908,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669639904,
      "ems": null
    },
    {
      "latitude": 51.830246,
      "longitude": 19.373276,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639907,
      "ems": null
    },
    {
      "latitude": 51.829773,
      "longitude": 19.371948,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669639910,
      "ems": null
    },
    {
      "latitude": 51.82869,
      "longitude": 19.368971,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1669639916,
      "ems": null
    },
    {
      "latitude": 51.827583,
      "longitude": 19.366455,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1669639922,
      "ems": null
    },
    {
      "latitude": 51.826466,
      "longitude": 19.363251,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669639928,
      "ems": null
    },
    {
      "latitude": 51.82608,
      "longitude": 19.361622,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639931,
      "ems": null
    },
    {
      "latitude": 51.82576,
      "longitude": 19.359989,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669639934,
      "ems": null
    },
    {
      "latitude": 51.825397,
      "longitude": 19.358139,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669639937,
      "ems": null
    },
    {
      "latitude": 51.825024,
      "longitude": 19.356232,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639940,
      "ems": null
    },
    {
      "latitude": 51.824699,
      "longitude": 19.354553,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639943,
      "ems": null
    },
    {
      "latitude": 51.824417,
      "longitude": 19.352875,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669639946,
      "ems": null
    },
    {
      "latitude": 51.824139,
      "longitude": 19.351349,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669639949,
      "ems": null
    },
    {
      "latitude": 51.823814,
      "longitude": 19.349365,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639952,
      "ems": null
    },
    {
      "latitude": 51.823021,
      "longitude": 19.345932,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639958,
      "ems": null
    },
    {
      "latitude": 51.822327,
      "longitude": 19.342693,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669639964,
      "ems": null
    },
    {
      "latitude": 51.821548,
      "longitude": 19.339203,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669639970,
      "ems": null
    },
    {
      "latitude": 51.820835,
      "longitude": 19.335709,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669639977,
      "ems": null
    },
    {
      "latitude": 51.820129,
      "longitude": 19.3323,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639983,
      "ems": null
    },
    {
      "latitude": 51.819485,
      "longitude": 19.328995,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669639989,
      "ems": null
    },
    {
      "latitude": 51.818756,
      "longitude": 19.325693,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669639995,
      "ems": null
    },
    {
      "latitude": 51.817932,
      "longitude": 19.322353,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669640000,
      "ems": null
    },
    {
      "latitude": 51.81752,
      "longitude": 19.320646,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669640003,
      "ems": null
    },
    {
      "latitude": 51.817062,
      "longitude": 19.318924,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669640007,
      "ems": null
    },
    {
      "latitude": 51.816551,
      "longitude": 19.317093,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669640010,
      "ems": null
    },
    {
      "latitude": 51.816086,
      "longitude": 19.315414,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669640013,
      "ems": null
    },
    {
      "latitude": 51.815666,
      "longitude": 19.313812,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669640016,
      "ems": null
    },
    {
      "latitude": 51.814774,
      "longitude": 19.310402,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669640022,
      "ems": null
    },
    {
      "latitude": 51.81385,
      "longitude": 19.306946,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1669640028,
      "ems": null
    },
    {
      "latitude": 51.812965,
      "longitude": 19.303207,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669640034,
      "ems": null
    },
    {
      "latitude": 51.811943,
      "longitude": 19.298401,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669640042,
      "ems": null
    },
    {
      "latitude": 51.811569,
      "longitude": 19.296669,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669640045,
      "ems": null
    },
    {
      "latitude": 51.810837,
      "longitude": 19.293032,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669640051,
      "ems": null
    },
    {
      "latitude": 51.810516,
      "longitude": 19.291325,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669640054,
      "ems": null
    },
    {
      "latitude": 51.809753,
      "longitude": 19.287491,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1669640060,
      "ems": null
    },
    {
      "latitude": 51.809235,
      "longitude": 19.285906,
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1669640063,
      "ems": null
    },
    {
      "latitude": 51.808502,
      "longitude": 19.284494,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1669640066,
      "ems": null
    },
    {
      "latitude": 51.807659,
      "longitude": 19.283524,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1669640069,
      "ems": null
    },
    {
      "latitude": 51.806683,
      "longitude": 19.283218,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1669640072,
      "ems": null
    },
    {
      "latitude": 51.805939,
      "longitude": 19.283447,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1669640075,
      "ems": null
    },
    {
      "latitude": 51.804913,
      "longitude": 19.28421,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1669640078,
      "ems": null
    },
    {
      "latitude": 51.804245,
      "longitude": 19.285089,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1669640081,
      "ems": null
    },
    {
      "latitude": 51.80389,
      "longitude": 19.285507,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1669640083,
      "ems": null
    },
    {
      "latitude": 51.803238,
      "longitude": 19.286425,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1669640086,
      "ems": null
    },
    {
      "latitude": 51.802494,
      "longitude": 19.287415,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1669640089,
      "ems": null
    },
    {
      "latitude": 51.801819,
      "longitude": 19.288355,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1669640092,
      "ems": null
    },
    {
      "latitude": 51.800903,
      "longitude": 19.289618,
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1669640096,
      "ems": null
    },
    {
      "latitude": 51.800262,
      "longitude": 19.290508,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1669640099,
      "ems": null
    },
    {
      "latitude": 51.799652,
      "longitude": 19.291382,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1669640102,
      "ems": null
    },
    {
      "latitude": 51.799,
      "longitude": 19.292221,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1669640106,
      "ems": null
    },
    {
      "latitude": 51.79834,
      "longitude": 19.293032,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1669640108,
      "ems": null
    },
    {
      "latitude": 51.796951,
      "longitude": 19.294586,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1669640114,
      "ems": null
    },
    {
      "latitude": 51.796299,
      "longitude": 19.295349,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1669640117,
      "ems": null
    },
    {
      "latitude": 51.795593,
      "longitude": 19.296148,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1669640121,
      "ems": null
    },
    {
      "latitude": 51.794903,
      "longitude": 19.296951,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1669640123,
      "ems": null
    },
    {
      "latitude": 51.794205,
      "longitude": 19.297714,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1669640126,
      "ems": null
    },
    {
      "latitude": 51.793552,
      "longitude": 19.298477,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1669640129,
      "ems": null
    },
    {
      "latitude": 51.792156,
      "longitude": 19.300156,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1669640136,
      "ems": null
    },
    {
      "latitude": 51.790947,
      "longitude": 19.301605,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1669640142,
      "ems": null
    },
    {
      "latitude": 51.789642,
      "longitude": 19.303207,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1669640148,
      "ems": null
    },
    {
      "latitude": 51.788944,
      "longitude": 19.304199,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1669640151,
      "ems": null
    },
    {
      "latitude": 51.788361,
      "longitude": 19.305132,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1669640154,
      "ems": null
    },
    {
      "latitude": 51.787766,
      "longitude": 19.306023,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1669640157,
      "ems": null
    },
    {
      "latitude": 51.78717,
      "longitude": 19.306913,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1669640160,
      "ems": null
    },
    {
      "latitude": 51.785732,
      "longitude": 19.308624,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1669640166,
      "ems": null
    },
    {
      "latitude": 51.785034,
      "longitude": 19.309311,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1669640169,
      "ems": null
    },
    {
      "latitude": 51.784199,
      "longitude": 19.310074,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1669640172,
      "ems": null
    },
    {
      "latitude": 51.783463,
      "longitude": 19.310772,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1669640175,
      "ems": null
    },
    {
      "latitude": 51.78273,
      "longitude": 19.311516,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1669640178,
      "ems": null
    },
    {
      "latitude": 51.781906,
      "longitude": 19.312332,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1669640181,
      "ems": null
    },
    {
      "latitude": 51.78117,
      "longitude": 19.312973,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1669640184,
      "ems": null
    },
    {
      "latitude": 51.78038,
      "longitude": 19.313583,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1669640187,
      "ems": null
    },
    {
      "latitude": 51.779572,
      "longitude": 19.314262,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1669640190,
      "ems": null
    },
    {
      "latitude": 51.778839,
      "longitude": 19.31493,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1669640193,
      "ems": null
    },
    {
      "latitude": 51.777493,
      "longitude": 19.31633,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1669640199,
      "ems": null
    },
    {
      "latitude": 51.776871,
      "longitude": 19.317158,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1669640202,
      "ems": null
    },
    {
      "latitude": 51.776424,
      "longitude": 19.317703,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1669640204,
      "ems": null
    },
    {
      "latitude": 51.775959,
      "longitude": 19.318466,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1669640207,
      "ems": null
    },
    {
      "latitude": 51.775772,
      "longitude": 19.318771,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1669640208,
      "ems": null
    },
    {
      "latitude": 51.774979,
      "longitude": 19.319839,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1669640212,
      "ems": null
    },
    {
      "latitude": 51.774281,
      "longitude": 19.320755,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1669640215,
      "ems": null
    },
    {
      "latitude": 51.773582,
      "longitude": 19.321594,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1669640218,
      "ems": null
    },
    {
      "latitude": 51.773396,
      "longitude": 19.321823,
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1669640219,
      "ems": null
    },
    {
      "latitude": 51.771721,
      "longitude": 19.32373,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1669640227,
      "ems": null
    },
    {
      "latitude": 51.771488,
      "longitude": 19.324036,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1669640228,
      "ems": null
    },
    {
      "latitude": 51.770599,
      "longitude": 19.324877,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1669640231,
      "ems": null
    },
    {
      "latitude": 51.77037,
      "longitude": 19.325174,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1669640232,
      "ems": null
    },
    {
      "latitude": 51.769318,
      "longitude": 19.326214,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1669640236,
      "ems": null
    },
    {
      "latitude": 51.768696,
      "longitude": 19.326935,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1669640239,
      "ems": null
    },
    {
      "latitude": 51.767391,
      "longitude": 19.328613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1669640245,
      "ems": null
    },
    {
      "latitude": 51.766159,
      "longitude": 19.330147,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1669640251,
      "ems": null
    },
    {
      "latitude": 51.764832,
      "longitude": 19.331781,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1669640257,
      "ems": null
    },
    {
      "latitude": 51.763412,
      "longitude": 19.333191,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1669640263,
      "ems": null
    },
    {
      "latitude": 51.761993,
      "longitude": 19.334717,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1669640269,
      "ems": null
    },
    {
      "latitude": 51.7612,
      "longitude": 19.33548,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1669640272,
      "ems": null
    },
    {
      "latitude": 51.76041,
      "longitude": 19.336243,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1669640275,
      "ems": null
    },
    {
      "latitude": 51.759617,
      "longitude": 19.336929,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1669640278,
      "ems": null
    },
    {
      "latitude": 51.758827,
      "longitude": 19.337692,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1669640281,
      "ems": null
    },
    {
      "latitude": 51.75737,
      "longitude": 19.339056,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1669640287,
      "ems": null
    },
    {
      "latitude": 51.755753,
      "longitude": 19.340744,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1669640294,
      "ems": null
    },
    {
      "latitude": 51.754402,
      "longitude": 19.34227,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1669640299,
      "ems": null
    },
    {
      "latitude": 51.753616,
      "longitude": 19.343138,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1669640302,
      "ems": null
    },
    {
      "latitude": 51.752884,
      "longitude": 19.344028,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1669640305,
      "ems": null
    },
    {
      "latitude": 51.752216,
      "longitude": 19.344864,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1669640308,
      "ems": null
    },
    {
      "latitude": 51.751465,
      "longitude": 19.345736,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1669640312,
      "ems": null
    },
    {
      "latitude": 51.751007,
      "longitude": 19.346331,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1669640313,
      "ems": null
    },
    {
      "latitude": 51.750168,
      "longitude": 19.347382,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1669640317,
      "ems": null
    },
    {
      "latitude": 51.74947,
      "longitude": 19.348297,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1669640320,
      "ems": null
    },
    {
      "latitude": 51.748817,
      "longitude": 19.349136,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1669640323,
      "ems": null
    },
    {
      "latitude": 51.748123,
      "longitude": 19.350117,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1669640326,
      "ems": null
    },
    {
      "latitude": 51.747482,
      "longitude": 19.35108,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1669640329,
      "ems": null
    },
    {
      "latitude": 51.746769,
      "longitude": 19.352036,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1669640332,
      "ems": null
    },
    {
      "latitude": 51.745285,
      "longitude": 19.353827,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1669640339,
      "ems": null
    },
    {
      "latitude": 51.744442,
      "longitude": 19.354553,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1669640342,
      "ems": null
    },
    {
      "latitude": 51.743729,
      "longitude": 19.355089,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1669640344,
      "ems": null
    },
    {
      "latitude": 51.743092,
      "longitude": 19.355545,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1669640346,
      "ems": null
    },
    {
      "latitude": 51.742126,
      "longitude": 19.356129,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1669640349,
      "ems": null
    },
    {
      "latitude": 51.741184,
      "longitude": 19.356689,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1669640353,
      "ems": null
    },
    {
      "latitude": 51.740486,
      "longitude": 19.357147,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1669640356,
      "ems": null
    },
    {
      "latitude": 51.739883,
      "longitude": 19.357464,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1669640357,
      "ems": null
    },
    {
      "latitude": 51.73867,
      "longitude": 19.358139,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1669640361,
      "ems": null
    },
    {
      "latitude": 51.737644,
      "longitude": 19.358597,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1669640364,
      "ems": null
    },
    {
      "latitude": 51.73732,
      "longitude": 19.358673,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1669640365,
      "ems": null
    },
    {
      "latitude": 51.736038,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1669640369,
      "ems": null
    },
    {
      "latitude": 51.735176,
      "longitude": 19.359283,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1669640372,
      "ems": null
    },
    {
      "latitude": 51.7342,
      "longitude": 19.35936,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1669640375,
      "ems": null
    },
    {
      "latitude": 51.733337,
      "longitude": 19.359098,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1669640378,
      "ems": null
    },
    {
      "latitude": 51.732422,
      "longitude": 19.358578,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1669640381,
      "ems": null
    },
    {
      "latitude": 51.731731,
      "longitude": 19.357834,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1669640384,
      "ems": null
    },
    {
      "latitude": 51.731083,
      "longitude": 19.356766,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1669640387,
      "ems": null
    },
    {
      "latitude": 51.730545,
      "longitude": 19.355757,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669640390,
      "ems": null
    },
    {
      "latitude": 51.729965,
      "longitude": 19.354706,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1669640393,
      "ems": null
    },
    {
      "latitude": 51.729355,
      "longitude": 19.353456,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1669640396,
      "ems": null
    },
    {
      "latitude": 51.728893,
      "longitude": 19.352493,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1669640399,
      "ems": null
    },
    {
      "latitude": 51.728348,
      "longitude": 19.351229,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669640402,
      "ems": null
    },
    {
      "latitude": 51.727798,
      "longitude": 19.349894,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1669640405,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.348755,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1669640408,
      "ems": null
    },
    {
      "latitude": 51.72596,
      "longitude": 19.346695,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1669640414,
      "ems": null
    },
    {
      "latitude": 51.724411,
      "longitude": 19.346107,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1669640420,
      "ems": null
    },
    {
      "latitude": 51.7234,
      "longitude": 19.346085,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1669640423,
      "ems": null
    },
    {
      "latitude": 51.722561,
      "longitude": 19.346161,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1669640426,
      "ems": null
    },
    {
      "latitude": 51.721676,
      "longitude": 19.346237,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1669640429,
      "ems": null
    },
    {
      "latitude": 51.720886,
      "longitude": 19.34639,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1669640432,
      "ems": null
    },
    {
      "latitude": 51.719955,
      "longitude": 19.346619,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1669640435,
      "ems": null
    },
    {
      "latitude": 51.719147,
      "longitude": 19.346775,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1669640438,
      "ems": null
    },
    {
      "latitude": 51.718327,
      "longitude": 19.347,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1669640441,
      "ems": null
    },
    {
      "latitude": 51.717396,
      "longitude": 19.347229,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1669640444,
      "ems": null
    },
    {
      "latitude": 51.716648,
      "longitude": 19.347458,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1669640447,
      "ems": null
    },
    {
      "latitude": 51.715668,
      "longitude": 19.347815,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1669640450,
      "ems": null
    },
    {
      "latitude": 51.715069,
      "longitude": 19.348297,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1669640453,
      "ems": null
    },
    {
      "latitude": 51.714371,
      "longitude": 19.349213,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1669640456,
      "ems": null
    },
    {
      "latitude": 51.713837,
      "longitude": 19.350338,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1669640459,
      "ems": null
    },
    {
      "latitude": 51.713486,
      "longitude": 19.351349,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1669640462,
      "ems": null
    },
    {
      "latitude": 51.71315,
      "longitude": 19.35264,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1669640465,
      "ems": null
    },
    {
      "latitude": 51.71302,
      "longitude": 19.354019,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1669640468,
      "ems": null
    },
    {
      "latitude": 51.713066,
      "longitude": 19.355545,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1669640472,
      "ems": null
    },
    {
      "latitude": 51.713196,
      "longitude": 19.356796,
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669640475,
      "ems": null
    },
    {
      "latitude": 51.713379,
      "longitude": 19.358133,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669640477,
      "ems": null
    },
    {
      "latitude": 51.713608,
      "longitude": 19.359394,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669640480,
      "ems": null
    },
    {
      "latitude": 51.713764,
      "longitude": 19.360199,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669640483,
      "ems": null
    },
    {
      "latitude": 51.714157,
      "longitude": 19.361919,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669640487,
      "ems": null
    },
    {
      "latitude": 51.714386,
      "longitude": 19.363031,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669640490,
      "ems": null
    },
    {
      "latitude": 51.714554,
      "longitude": 19.364166,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669640492,
      "ems": null
    },
    {
      "latitude": 51.714836,
      "longitude": 19.365616,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669640496,
      "ems": null
    },
    {
      "latitude": 51.715069,
      "longitude": 19.36676,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669640498,
      "ems": null
    },
    {
      "latitude": 51.715302,
      "longitude": 19.367708,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669640501,
      "ems": null
    },
    {
      "latitude": 51.715668,
      "longitude": 19.369564,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669640505,
      "ems": null
    },
    {
      "latitude": 51.716183,
      "longitude": 19.371872,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669640511,
      "ems": null
    },
    {
      "latitude": 51.716648,
      "longitude": 19.374161,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669640516,
      "ems": null
    },
    {
      "latitude": 51.719193,
      "longitude": 19.385895,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669640551,
      "ems": null
    },
    {
      "latitude": 51.719631,
      "longitude": 19.387894,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669640556,
      "ems": null
    },
    {
      "latitude": 51.720097,
      "longitude": 19.389496,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1669640561,
      "ems": null
    },
    {
      "latitude": 51.720795,
      "longitude": 19.392319,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669640568,
      "ems": null
    },
    {
      "latitude": 51.721024,
      "longitude": 19.393467,
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669640571,
      "ems": null
    },
    {
      "latitude": 51.721119,
      "longitude": 19.394073,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669640573,
      "ems": null
    },
    {
      "latitude": 51.721443,
      "longitude": 19.395905,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669640577,
      "ems": null
    },
    {
      "latitude": 51.721676,
      "longitude": 19.396973,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669640580,
      "ems": null
    },
    {
      "latitude": 51.721939,
      "longitude": 19.398293,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669640583,
      "ems": null
    },
    {
      "latitude": 51.722214,
      "longitude": 19.399406,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669640586,
      "ems": null
    },
    {
      "latitude": 51.7229,
      "longitude": 19.402227,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669640592,
      "ems": null
    },
    {
      "latitude": 51.723495,
      "longitude": 19.404751,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669640598,
      "ems": null
    },
    {
      "latitude": 51.724098,
      "longitude": 19.407425,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669640604,
      "ems": null
    },
    {
      "latitude": 51.724422,
      "longitude": 19.408722,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669640607,
      "ems": null
    },
    {
      "latitude": 51.724751,
      "longitude": 19.410019,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669640610,
      "ems": null
    },
    {
      "latitude": 51.725281,
      "longitude": 19.412395,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669640616,
      "ems": null
    },
    {
      "latitude": 51.725464,
      "longitude": 19.413658,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1669640619,
      "ems": null
    },
    {
      "latitude": 51.72554,
      "longitude": 19.414902,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1669640622,
      "ems": null
    },
    {
      "latitude": 51.725494,
      "longitude": 19.416351,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1669640625,
      "ems": null
    },
    {
      "latitude": 51.725357,
      "longitude": 19.417572,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1669640628,
      "ems": null
    },
    {
      "latitude": 51.725098,
      "longitude": 19.418633,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1669640631,
      "ems": null
    },
    {
      "latitude": 51.724796,
      "longitude": 19.419708,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1669640634,
      "ems": null
    },
    {
      "latitude": 51.724365,
      "longitude": 19.42071,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1669640637,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.421616,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1669640640,
      "ems": null
    },
    {
      "latitude": 51.723076,
      "longitude": 19.42215,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1669640643,
      "ems": null
    },
    {
      "latitude": 51.722237,
      "longitude": 19.422684,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1669640646,
      "ems": null
    },
    {
      "latitude": 51.721436,
      "longitude": 19.423309,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1669640649,
      "ems": null
    },
    {
      "latitude": 51.720612,
      "longitude": 19.423977,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1669640652,
      "ems": null
    },
    {
      "latitude": 51.719677,
      "longitude": 19.424667,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1669640655,
      "ems": null
    },
    {
      "latitude": 51.718735,
      "longitude": 19.425016,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1669640658,
      "ems": null
    },
    {
      "latitude": 51.717815,
      "longitude": 19.425125,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1669640661,
      "ems": null
    },
    {
      "latitude": 51.716812,
      "longitude": 19.424868,
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1669640664,
      "ems": null
    },
    {
      "latitude": 51.715805,
      "longitude": 19.424274,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1669640668,
      "ems": null
    },
    {
      "latitude": 51.714973,
      "longitude": 19.42337,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1669640670,
      "ems": null
    },
    {
      "latitude": 51.714111,
      "longitude": 19.421898,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669640674,
      "ems": null
    },
    {
      "latitude": 51.713425,
      "longitude": 19.420265,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669640676,
      "ems": null
    },
    {
      "latitude": 51.71302,
      "longitude": 19.418716,
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1669640679,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 19.416702,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669640682,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 19.414623,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669640685,
      "ems": null
    },
    {
      "latitude": 51.711777,
      "longitude": 19.412693,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669640688,
      "ems": null
    },
    {
      "latitude": 51.711342,
      "longitude": 19.410629,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669640691,
      "ems": null
    },
    {
      "latitude": 51.710907,
      "longitude": 19.408611,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1669640694,
      "ems": null
    },
    {
      "latitude": 51.710411,
      "longitude": 19.406281,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669640698,
      "ems": null
    },
    {
      "latitude": 51.709991,
      "longitude": 19.404305,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669640701,
      "ems": null
    },
    {
      "latitude": 51.709579,
      "longitude": 19.402302,
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1669640703,
      "ems": null
    },
    {
      "latitude": 51.709156,
      "longitude": 19.400177,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669640707,
      "ems": null
    },
    {
      "latitude": 51.708782,
      "longitude": 19.398117,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669640710,
      "ems": null
    },
    {
      "latitude": 51.708069,
      "longitude": 19.393913,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669640716,
      "ems": null
    },
    {
      "latitude": 51.707474,
      "longitude": 19.389755,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669640722,
      "ems": null
    },
    {
      "latitude": 51.707153,
      "longitude": 19.387676,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669640725,
      "ems": null
    },
    {
      "latitude": 51.706833,
      "longitude": 19.385525,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669640728,
      "ems": null
    },
    {
      "latitude": 51.706596,
      "longitude": 19.383774,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669640731,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.381739,
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1669640734,
      "ems": null
    },
    {
      "latitude": 51.706192,
      "longitude": 19.379808,
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1669640737,
      "ems": null
    },
    {
      "latitude": 51.706009,
      "longitude": 19.377953,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1669640740,
      "ems": null
    },
    {
      "latitude": 51.705849,
      "longitude": 19.376068,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1669640743,
      "ems": null
    },
    {
      "latitude": 51.705429,
      "longitude": 19.37233,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1669640749,
      "ems": null
    },
    {
      "latitude": 51.705002,
      "longitude": 19.368599,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1669640755,
      "ems": null
    },
    {
      "latitude": 51.704594,
      "longitude": 19.365082,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669640761,
      "ems": null
    },
    {
      "latitude": 51.704041,
      "longitude": 19.361324,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669640767,
      "ems": null
    },
    {
      "latitude": 51.70372,
      "longitude": 19.357613,
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1669640773,
      "ems": null
    },
    {
      "latitude": 51.7038,
      "longitude": 19.355545,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1669640776,
      "ems": null
    },
    {
      "latitude": 51.704033,
      "longitude": 19.353638,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1669640779,
      "ems": null
    },
    {
      "latitude": 51.704544,
      "longitude": 19.351824,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1669640782,
      "ems": null
    },
    {
      "latitude": 51.705196,
      "longitude": 19.349976,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1669640785,
      "ems": null
    },
    {
      "latitude": 51.70578,
      "longitude": 19.348705,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669640787,
      "ems": null
    },
    {
      "latitude": 51.706879,
      "longitude": 19.347073,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1669640791,
      "ems": null
    },
    {
      "latitude": 51.708038,
      "longitude": 19.345856,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1669640794,
      "ems": null
    },
    {
      "latitude": 51.70903,
      "longitude": 19.345217,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1669640797,
      "ems": null
    },
    {
      "latitude": 51.710178,
      "longitude": 19.345093,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1669640800,
      "ems": null
    },
    {
      "latitude": 51.711155,
      "longitude": 19.345627,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1669640803,
      "ems": null
    },
    {
      "latitude": 51.711857,
      "longitude": 19.346695,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1669640806,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 19.348112,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1669640809,
      "ems": null
    },
    {
      "latitude": 51.712181,
      "longitude": 19.349289,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1669640812,
      "ems": null
    },
    {
      "latitude": 51.712181,
      "longitude": 19.350967,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1669640815,
      "ems": null
    },
    {
      "latitude": 51.712234,
      "longitude": 19.352194,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1669640818,
      "ems": null
    },
    {
      "latitude": 51.712418,
      "longitude": 19.353827,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1669640821,
      "ems": null
    },
    {
      "latitude": 51.712692,
      "longitude": 19.35524,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669640824,
      "ems": null
    },
    {
      "latitude": 51.712921,
      "longitude": 19.356352,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669640827,
      "ems": null
    },
    {
      "latitude": 51.71315,
      "longitude": 19.357538,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669640830,
      "ems": null
    },
    {
      "latitude": 51.71339,
      "longitude": 19.358749,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669640833,
      "ems": null
    },
    {
      "latitude": 51.713608,
      "longitude": 19.35984,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669640836,
      "ems": null
    },
    {
      "latitude": 51.713882,
      "longitude": 19.36125,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669640839,
      "ems": null
    },
    {
      "latitude": 51.714111,
      "longitude": 19.362289,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669640842,
      "ems": null
    },
    {
      "latitude": 51.714386,
      "longitude": 19.363478,
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669640845,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.366001,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669640851,
      "ems": null
    },
    {
      "latitude": 51.71516,
      "longitude": 19.367371,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669640855,
      "ems": null
    },
    {
      "latitude": 51.715858,
      "longitude": 19.370422,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 70,
      "squawk": "4261",
      "timestamp": 1669640862,
      "ems": null
    },
    {
      "latitude": 51.716354,
      "longitude": 19.372831,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 70,
      "squawk": "4261",
      "timestamp": 1669640868,
      "ems": null
    },
    {
      "latitude": 51.719582,
      "longitude": 19.38736,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669640910,
      "ems": null
    },
    {
      "latitude": 51.720097,
      "longitude": 19.389496,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669640916,
      "ems": null
    },
    {
      "latitude": 51.720703,
      "longitude": 19.392057,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669640923,
      "ems": null
    },
    {
      "latitude": 51.721161,
      "longitude": 19.393988,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669640928,
      "ems": null
    },
    {
      "latitude": 51.721909,
      "longitude": 19.39682,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669640935,
      "ems": null
    },
    {
      "latitude": 51.722488,
      "longitude": 19.399332,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669640941,
      "ems": null
    },
    {
      "latitude": 51.72298,
      "longitude": 19.40155,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669640947,
      "ems": null
    },
    {
      "latitude": 51.723633,
      "longitude": 19.404221,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669640952,
      "ems": null
    },
    {
      "latitude": 51.724274,
      "longitude": 19.407423,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669640959,
      "ems": null
    },
    {
      "latitude": 51.724869,
      "longitude": 19.410021,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669640965,
      "ems": null
    },
    {
      "latitude": 51.72559,
      "longitude": 19.412766,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1669640971,
      "ems": null
    },
    {
      "latitude": 51.725967,
      "longitude": 19.414179,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1669640974,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.415142,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1669640977,
      "ems": null
    },
    {
      "latitude": 51.727169,
      "longitude": 19.416504,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1669640980,
      "ems": null
    },
    {
      "latitude": 51.727982,
      "longitude": 19.417667,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1669640983,
      "ems": null
    },
    {
      "latitude": 51.72876,
      "longitude": 19.418558,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1669640986,
      "ems": null
    },
    {
      "latitude": 51.729733,
      "longitude": 19.419403,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1669640989,
      "ems": null
    },
    {
      "latitude": 51.730865,
      "longitude": 19.420116,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1669640992,
      "ems": null
    },
    {
      "latitude": 51.73201,
      "longitude": 19.420563,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1669640995,
      "ems": null
    },
    {
      "latitude": 51.732971,
      "longitude": 19.42071,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1669640998,
      "ems": null
    },
    {
      "latitude": 51.734161,
      "longitude": 19.420635,
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1669641001,
      "ems": null
    },
    {
      "latitude": 51.73558,
      "longitude": 19.420265,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1669641005,
      "ems": null
    },
    {
      "latitude": 51.736771,
      "longitude": 19.419819,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1669641007,
      "ems": null
    },
    {
      "latitude": 51.738144,
      "longitude": 19.419003,
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1669641010,
      "ems": null
    },
    {
      "latitude": 51.739414,
      "longitude": 19.418106,
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1669641013,
      "ems": null
    },
    {
      "latitude": 51.740719,
      "longitude": 19.416885,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1669641017,
      "ems": null
    },
    {
      "latitude": 51.741695,
      "longitude": 19.415512,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1669641019,
      "ems": null
    },
    {
      "latitude": 51.74263,
      "longitude": 19.413584,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1669641022,
      "ems": null
    },
    {
      "latitude": 51.743137,
      "longitude": 19.411392,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1669641026,
      "ems": null
    },
    {
      "latitude": 51.743279,
      "longitude": 19.40918,
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1669641029,
      "ems": null
    },
    {
      "latitude": 51.743134,
      "longitude": 19.4072,
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669641031,
      "ems": null
    },
    {
      "latitude": 51.742813,
      "longitude": 19.405136,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669641034,
      "ems": null
    },
    {
      "latitude": 51.742401,
      "longitude": 19.402746,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669641038,
      "ems": null
    },
    {
      "latitude": 51.741989,
      "longitude": 19.400518,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669641041,
      "ems": null
    },
    {
      "latitude": 51.741623,
      "longitude": 19.398367,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669641044,
      "ems": null
    },
    {
      "latitude": 51.741257,
      "longitude": 19.396288,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669641047,
      "ems": null
    },
    {
      "latitude": 51.740952,
      "longitude": 19.394379,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669641049,
      "ems": null
    },
    {
      "latitude": 51.74057,
      "longitude": 19.392132,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669641053,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 19.390106,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669641056,
      "ems": null
    },
    {
      "latitude": 51.73988,
      "longitude": 19.388428,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669641058,
      "ems": null
    },
    {
      "latitude": 51.739426,
      "longitude": 19.386118,
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1669641061,
      "ems": null
    },
    {
      "latitude": 51.738693,
      "longitude": 19.381962,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669641068,
      "ems": null
    },
    {
      "latitude": 51.738144,
      "longitude": 19.377953,
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669641074,
      "ems": null
    },
    {
      "latitude": 51.737598,
      "longitude": 19.373779,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669641080,
      "ems": null
    },
    {
      "latitude": 51.737137,
      "longitude": 19.370234,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669641086,
      "ems": null
    },
    {
      "latitude": 51.736908,
      "longitude": 19.36845,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1669641089,
      "ems": null
    },
    {
      "latitude": 51.736343,
      "longitude": 19.365005,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1669641095,
      "ems": null
    },
    {
      "latitude": 51.735691,
      "longitude": 19.361115,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669641101,
      "ems": null
    },
    {
      "latitude": 51.735176,
      "longitude": 19.357681,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1669641107,
      "ems": null
    },
    {
      "latitude": 51.734711,
      "longitude": 19.353975,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669641113,
      "ems": null
    },
    {
      "latitude": 51.734253,
      "longitude": 19.350042,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1669641119,
      "ems": null
    },
    {
      "latitude": 51.733887,
      "longitude": 19.346552,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1669641125,
      "ems": null
    },
    {
      "latitude": 51.733749,
      "longitude": 19.344549,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1669641128,
      "ems": null
    },
    {
      "latitude": 51.733643,
      "longitude": 19.342651,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1669641131,
      "ems": null
    },
    {
      "latitude": 51.733566,
      "longitude": 19.341133,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1669641134,
      "ems": null
    },
    {
      "latitude": 51.733597,
      "longitude": 19.339294,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1669641137,
      "ems": null
    },
    {
      "latitude": 51.733795,
      "longitude": 19.3372,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1669641140,
      "ems": null
    },
    {
      "latitude": 51.7342,
      "longitude": 19.335327,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1669641143,
      "ems": null
    },
    {
      "latitude": 51.73476,
      "longitude": 19.333572,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1669641146,
      "ems": null
    },
    {
      "latitude": 51.735409,
      "longitude": 19.332047,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1669641149,
      "ems": null
    },
    {
      "latitude": 51.736267,
      "longitude": 19.330742,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1669641152,
      "ems": null
    },
    {
      "latitude": 51.737183,
      "longitude": 19.329777,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1669641155,
      "ems": null
    },
    {
      "latitude": 51.738621,
      "longitude": 19.328995,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1669641158,
      "ems": null
    },
    {
      "latitude": 51.739738,
      "longitude": 19.328842,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1669641161,
      "ems": null
    },
    {
      "latitude": 51.740952,
      "longitude": 19.3293,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1669641164,
      "ems": null
    },
    {
      "latitude": 51.741928,
      "longitude": 19.330292,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1669641168,
      "ems": null
    },
    {
      "latitude": 51.742535,
      "longitude": 19.331589,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1669641171,
      "ems": null
    },
    {
      "latitude": 51.742718,
      "longitude": 19.333038,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1669641174,
      "ems": null
    },
    {
      "latitude": 51.742535,
      "longitude": 19.334488,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1669641177,
      "ems": null
    },
    {
      "latitude": 51.742035,
      "longitude": 19.335491,
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1669641180,
      "ems": null
    },
    {
      "latitude": 51.741276,
      "longitude": 19.336548,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1669641183,
      "ems": null
    },
    {
      "latitude": 51.740532,
      "longitude": 19.337311,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1669641186,
      "ems": null
    },
    {
      "latitude": 51.739788,
      "longitude": 19.337921,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1669641188,
      "ems": null
    },
    {
      "latitude": 51.738968,
      "longitude": 19.33861,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1669641192,
      "ems": null
    },
    {
      "latitude": 51.738144,
      "longitude": 19.339277,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1669641195,
      "ems": null
    },
    {
      "latitude": 51.73732,
      "longitude": 19.339828,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1669641198,
      "ems": null
    },
    {
      "latitude": 51.73645,
      "longitude": 19.340317,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1669641201,
      "ems": null
    },
    {
      "latitude": 51.735626,
      "longitude": 19.340763,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1669641204,
      "ems": null
    },
    {
      "latitude": 51.734711,
      "longitude": 19.341059,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1669641207,
      "ems": null
    },
    {
      "latitude": 51.733734,
      "longitude": 19.341354,
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1669641210,
      "ems": null
    },
    {
      "latitude": 51.732803,
      "longitude": 19.341354,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1669641213,
      "ems": null
    },
    {
      "latitude": 51.731873,
      "longitude": 19.341208,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1669641215,
      "ems": null
    },
    {
      "latitude": 51.73082,
      "longitude": 19.340689,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1669641219,
      "ems": null
    },
    {
      "latitude": 51.72987,
      "longitude": 19.339828,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1669641222,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.338837,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1669641225,
      "ems": null
    },
    {
      "latitude": 51.728348,
      "longitude": 19.33757,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1669641228,
      "ems": null
    },
    {
      "latitude": 51.727661,
      "longitude": 19.336161,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1669641231,
      "ems": null
    },
    {
      "latitude": 51.727158,
      "longitude": 19.334749,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1669641234,
      "ems": null
    },
    {
      "latitude": 51.726654,
      "longitude": 19.333191,
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1669641237,
      "ems": null
    },
    {
      "latitude": 51.726238,
      "longitude": 19.33136,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1669641240,
      "ems": null
    },
    {
      "latitude": 51.726055,
      "longitude": 19.329453,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1669641243,
      "ems": null
    },
    {
      "latitude": 51.726006,
      "longitude": 19.327545,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1669641246,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.325485,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1669641249,
      "ems": null
    },
    {
      "latitude": 51.726936,
      "longitude": 19.323578,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1669641252,
      "ems": null
    },
    {
      "latitude": 51.727844,
      "longitude": 19.322279,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1669641255,
      "ems": null
    },
    {
      "latitude": 51.728989,
      "longitude": 19.321314,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1669641258,
      "ems": null
    },
    {
      "latitude": 51.729404,
      "longitude": 19.321136,
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
      "heading": 343,
      "squawk": "4261",
      "timestamp": 1669641259,
      "ems": null
    },
    {
      "latitude": 51.731277,
      "longitude": 19.321239,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1669641264,
      "ems": null
    },
    {
      "latitude": 51.73233,
      "longitude": 19.32213,
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1669641267,
      "ems": null
    },
    {
      "latitude": 51.732571,
      "longitude": 19.32251,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1669641269,
      "ems": null
    },
    {
      "latitude": 51.733456,
      "longitude": 19.324722,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669641273,
      "ems": null
    },
    {
      "latitude": 51.733547,
      "longitude": 19.326019,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1669641276,
      "ems": null
    },
    {
      "latitude": 51.733315,
      "longitude": 19.327469,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1669641280,
      "ems": null
    },
    {
      "latitude": 51.732788,
      "longitude": 19.328737,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1669641282,
      "ems": null
    },
    {
      "latitude": 51.73201,
      "longitude": 19.329554,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1669641285,
      "ems": null
    },
    {
      "latitude": 51.73122,
      "longitude": 19.330063,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1669641288,
      "ems": null
    },
    {
      "latitude": 51.730362,
      "longitude": 19.330444,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1669641291,
      "ems": null
    },
    {
      "latitude": 51.7295,
      "longitude": 19.330902,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1669641294,
      "ems": null
    },
    {
      "latitude": 51.728615,
      "longitude": 19.331284,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1669641297,
      "ems": null
    },
    {
      "latitude": 51.727661,
      "longitude": 19.331633,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1669641300,
      "ems": null
    },
    {
      "latitude": 51.726704,
      "longitude": 19.332047,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1669641303,
      "ems": null
    },
    {
      "latitude": 51.725784,
      "longitude": 19.332523,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1669641306,
      "ems": null
    },
    {
      "latitude": 51.724823,
      "longitude": 19.332968,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1669641309,
      "ems": null
    },
    {
      "latitude": 51.723953,
      "longitude": 19.33334,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1669641313,
      "ems": null
    },
    {
      "latitude": 51.722992,
      "longitude": 19.333858,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1669641315,
      "ems": null
    },
    {
      "latitude": 51.721119,
      "longitude": 19.334717,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1669641322,
      "ems": null
    },
    {
      "latitude": 51.71933,
      "longitude": 19.335566,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1669641327,
      "ems": null
    },
    {
      "latitude": 51.717407,
      "longitude": 19.336531,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1669641333,
      "ems": null
    },
    {
      "latitude": 51.71553,
      "longitude": 19.337496,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1669641339,
      "ems": null
    },
    {
      "latitude": 51.713669,
      "longitude": 19.338608,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1669641346,
      "ems": null
    },
    {
      "latitude": 51.71283,
      "longitude": 19.33913,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1669641349,
      "ems": null
    },
    {
      "latitude": 51.712051,
      "longitude": 19.339798,
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1669641352,
      "ems": null
    },
    {
      "latitude": 51.711342,
      "longitude": 19.34082,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1669641355,
      "ems": null
    },
    {
      "latitude": 51.710861,
      "longitude": 19.341877,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1669641358,
      "ems": null
    },
    {
      "latitude": 51.710541,
      "longitude": 19.343435,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1669641361,
      "ems": null
    },
    {
      "latitude": 51.710457,
      "longitude": 19.344711,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1669641364,
      "ems": null
    },
    {
      "latitude": 51.710644,
      "longitude": 19.346161,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1669641367,
      "ems": null
    },
    {
      "latitude": 51.710953,
      "longitude": 19.347666,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669641370,
      "ems": null
    },
    {
      "latitude": 51.711319,
      "longitude": 19.349077,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1669641373,
      "ems": null
    },
    {
      "latitude": 51.711685,
      "longitude": 19.350561,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669641376,
      "ems": null
    },
    {
      "latitude": 51.711948,
      "longitude": 19.351807,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669641379,
      "ems": null
    },
    {
      "latitude": 51.712234,
      "longitude": 19.35301,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669641382,
      "ems": null
    },
    {
      "latitude": 51.712463,
      "longitude": 19.354273,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669641385,
      "ems": null
    },
    {
      "latitude": 51.712646,
      "longitude": 19.355469,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669641388,
      "ems": null
    },
    {
      "latitude": 51.712833,
      "longitude": 19.356461,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1669641391,
      "ems": null
    },
    {
      "latitude": 51.713112,
      "longitude": 19.357834,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669641394,
      "ems": null
    },
    {
      "latitude": 51.71339,
      "longitude": 19.358978,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1669641397,
      "ems": null
    },
    {
      "latitude": 51.713882,
      "longitude": 19.361103,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669641403,
      "ems": null
    },
    {
      "latitude": 51.714275,
      "longitude": 19.363251,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669641409,
      "ems": null
    },
    {
      "latitude": 51.714836,
      "longitude": 19.365692,
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669641415,
      "ems": null
    },
    {
      "latitude": 51.715164,
      "longitude": 19.367115,
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1669641418,
      "ems": null
    },
    {
      "latitude": 51.715714,
      "longitude": 19.369787,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1669641424,
      "ems": null
    },
    {
      "latitude": 51.716263,
      "longitude": 19.372385,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1669641430,
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
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1669641435,
      "ems": null
    }
  ]
};
