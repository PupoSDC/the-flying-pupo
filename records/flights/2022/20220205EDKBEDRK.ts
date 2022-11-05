import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20220205EDKBEDRK",
    callsign: "DEFCZ",
    name: "",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 1, 5, 13, 55).getTime(),
    arrival: new Date(2022, 1, 5, 14, 30).getTime(),
    singleEnginePistonTime: 35,
    picTime: 35,
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
      modes: "3D1229",
      registration: "D-EFCZ",
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
      name: "Koblenz",
      code: "EDRK",
      position: {
        latitude: 50.195,
        longitude: 7.317,
      },
    },
  },
  track: [
    {
      "latitude": 50.770477,
      "longitude": 7.156925,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 290,
      "squawk": "0",
      "timestamp": 1644069919,
      "ems": null
    },
    {
      "latitude": 50.770988,
      "longitude": 7.154541,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 288,
      "squawk": "0",
      "timestamp": 1644069925,
      "ems": null
    },
    {
      "latitude": 50.771454,
      "longitude": 7.152023,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 284,
      "squawk": "0",
      "timestamp": 1644069931,
      "ems": null
    },
    {
      "latitude": 50.771641,
      "longitude": 7.150726,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 281,
      "squawk": "0",
      "timestamp": 1644069934,
      "ems": null
    },
    {
      "latitude": 50.771824,
      "longitude": 7.149353,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 283,
      "squawk": "0",
      "timestamp": 1644069938,
      "ems": null
    },
    {
      "latitude": 50.772198,
      "longitude": 7.147064,
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
      "heading": 283,
      "squawk": "0",
      "timestamp": 1644069943,
      "ems": null
    },
    {
      "latitude": 50.772354,
      "longitude": 7.146013,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 282,
      "squawk": "0",
      "timestamp": 1644069946,
      "ems": null
    },
    {
      "latitude": 50.772537,
      "longitude": 7.144528,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 281,
      "squawk": "0",
      "timestamp": 1644069950,
      "ems": null
    },
    {
      "latitude": 50.772617,
      "longitude": 7.143402,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 273,
      "squawk": "0",
      "timestamp": 1644069952,
      "ems": null
    },
    {
      "latitude": 50.772491,
      "longitude": 7.141856,
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
      "heading": 257,
      "squawk": "0",
      "timestamp": 1644069956,
      "ems": null
    },
    {
      "latitude": 50.772171,
      "longitude": 7.140445,
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
      "heading": 245,
      "squawk": "0",
      "timestamp": 1644069959,
      "ems": null
    },
    {
      "latitude": 50.771824,
      "longitude": 7.139435,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1644069962,
      "ems": null
    },
    {
      "latitude": 50.77121,
      "longitude": 7.13807,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1644069965,
      "ems": null
    },
    {
      "latitude": 50.77066,
      "longitude": 7.136956,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1644069968,
      "ems": null
    },
    {
      "latitude": 50.770149,
      "longitude": 7.135925,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1644069971,
      "ems": null
    },
    {
      "latitude": 50.769608,
      "longitude": 7.134878,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1644069974,
      "ems": null
    },
    {
      "latitude": 50.76894,
      "longitude": 7.133713,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1644069977,
      "ems": null
    },
    {
      "latitude": 50.768429,
      "longitude": 7.132797,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1644069980,
      "ems": null
    },
    {
      "latitude": 50.767868,
      "longitude": 7.131653,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1644069983,
      "ems": null
    },
    {
      "latitude": 50.767227,
      "longitude": 7.130275,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1644069986,
      "ems": null
    },
    {
      "latitude": 50.766815,
      "longitude": 7.129385,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1644069989,
      "ems": null
    },
    {
      "latitude": 50.765717,
      "longitude": 7.126787,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1644069995,
      "ems": null
    },
    {
      "latitude": 50.764656,
      "longitude": 7.124329,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1644070001,
      "ems": null
    },
    {
      "latitude": 50.76416,
      "longitude": 7.123149,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1644070004,
      "ems": null
    },
    {
      "latitude": 50.763771,
      "longitude": 7.122192,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1644070007,
      "ems": null
    },
    {
      "latitude": 50.763306,
      "longitude": 7.120895,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1644070010,
      "ems": null
    },
    {
      "latitude": 50.762936,
      "longitude": 7.119675,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1644070013,
      "ems": null
    },
    {
      "latitude": 50.762604,
      "longitude": 7.118547,
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1644070016,
      "ems": null
    },
    {
      "latitude": 50.762238,
      "longitude": 7.11731,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1644070019,
      "ems": null
    },
    {
      "latitude": 50.761864,
      "longitude": 7.115936,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1644070022,
      "ems": null
    },
    {
      "latitude": 50.761505,
      "longitude": 7.114613,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1644070025,
      "ems": null
    },
    {
      "latitude": 50.761093,
      "longitude": 7.11335,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1644070028,
      "ems": null
    },
    {
      "latitude": 50.760281,
      "longitude": 7.110901,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1644070034,
      "ems": null
    },
    {
      "latitude": 50.75972,
      "longitude": 7.109787,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1644070037,
      "ems": null
    },
    {
      "latitude": 50.759125,
      "longitude": 7.108748,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1644070040,
      "ems": null
    },
    {
      "latitude": 50.758484,
      "longitude": 7.108006,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1644070043,
      "ems": null
    },
    {
      "latitude": 50.757675,
      "longitude": 7.107315,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1644070046,
      "ems": null
    },
    {
      "latitude": 50.75679,
      "longitude": 7.106893,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1644070049,
      "ems": null
    },
    {
      "latitude": 50.755737,
      "longitude": 7.106596,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1644070052,
      "ems": null
    },
    {
      "latitude": 50.754822,
      "longitude": 7.106521,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1644070055,
      "ems": null
    },
    {
      "latitude": 50.753723,
      "longitude": 7.106744,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1644070058,
      "ems": null
    },
    {
      "latitude": 50.752808,
      "longitude": 7.107041,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1644070061,
      "ems": null
    },
    {
      "latitude": 50.751617,
      "longitude": 7.107709,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1644070064,
      "ems": null
    },
    {
      "latitude": 50.750786,
      "longitude": 7.108231,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1644070067,
      "ems": null
    },
    {
      "latitude": 50.74976,
      "longitude": 7.10907,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1644070070,
      "ems": null
    },
    {
      "latitude": 50.748642,
      "longitude": 7.110062,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1644070073,
      "ems": null
    },
    {
      "latitude": 50.747452,
      "longitude": 7.111198,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1644070076,
      "ems": null
    },
    {
      "latitude": 50.746399,
      "longitude": 7.112237,
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1644070079,
      "ems": null
    },
    {
      "latitude": 50.745438,
      "longitude": 7.11335,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1644070082,
      "ems": null
    },
    {
      "latitude": 50.744453,
      "longitude": 7.114639,
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1644070085,
      "ems": null
    },
    {
      "latitude": 50.743477,
      "longitude": 7.11586,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1644070088,
      "ems": null
    },
    {
      "latitude": 50.742508,
      "longitude": 7.11721,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644070091,
      "ems": null
    },
    {
      "latitude": 50.741707,
      "longitude": 7.118225,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644070094,
      "ems": null
    },
    {
      "latitude": 50.740681,
      "longitude": 7.119675,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644070097,
      "ems": null
    },
    {
      "latitude": 50.73975,
      "longitude": 7.120972,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644070100,
      "ems": null
    },
    {
      "latitude": 50.738754,
      "longitude": 7.122333,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644070103,
      "ems": null
    },
    {
      "latitude": 50.737843,
      "longitude": 7.123718,
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
      "heading": 135,
      "squawk": "7742",
      "timestamp": 1644070106,
      "ems": null
    },
    {
      "latitude": 50.736912,
      "longitude": 7.125244,
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
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1644070109,
      "ems": null
    },
    {
      "latitude": 50.735981,
      "longitude": 7.126694,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 134,
      "squawk": "7742",
      "timestamp": 1644070112,
      "ems": null
    },
    {
      "latitude": 50.735096,
      "longitude": 7.12822,
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
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1644070115,
      "ems": null
    },
    {
      "latitude": 50.734306,
      "longitude": 7.129669,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1644070118,
      "ems": null
    },
    {
      "latitude": 50.733421,
      "longitude": 7.131271,
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
      "heading": 130,
      "squawk": "7742",
      "timestamp": 1644070121,
      "ems": null
    },
    {
      "latitude": 50.73262,
      "longitude": 7.132725,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 132,
      "squawk": "7742",
      "timestamp": 1644070124,
      "ems": null
    },
    {
      "latitude": 50.731697,
      "longitude": 7.134323,
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
      "heading": 131,
      "squawk": "7742",
      "timestamp": 1644070127,
      "ems": null
    },
    {
      "latitude": 50.730812,
      "longitude": 7.135849,
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
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1644070130,
      "ems": null
    },
    {
      "latitude": 50.730148,
      "longitude": 7.136882,
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
      "heading": 133,
      "squawk": "7742",
      "timestamp": 1644070133,
      "ems": null
    },
    {
      "latitude": 50.728207,
      "longitude": 7.140045,
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
      "heading": 136,
      "squawk": "7742",
      "timestamp": 1644070139,
      "ems": null
    },
    {
      "latitude": 50.726112,
      "longitude": 7.143021,
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
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1644070145,
      "ems": null
    },
    {
      "latitude": 50.725182,
      "longitude": 7.144165,
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
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1644070148,
      "ems": null
    },
    {
      "latitude": 50.724152,
      "longitude": 7.145567,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644070151,
      "ems": null
    },
    {
      "latitude": 50.723087,
      "longitude": 7.146988,
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
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644070154,
      "ems": null
    },
    {
      "latitude": 50.722248,
      "longitude": 7.148132,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 141,
      "squawk": "7742",
      "timestamp": 1644070157,
      "ems": null
    },
    {
      "latitude": 50.721085,
      "longitude": 7.149576,
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
      "heading": 140,
      "squawk": "7742",
      "timestamp": 1644070160,
      "ems": null
    },
    {
      "latitude": 50.720078,
      "longitude": 7.150838,
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
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644070163,
      "ems": null
    },
    {
      "latitude": 50.719116,
      "longitude": 7.152174,
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
      "heading": 139,
      "squawk": "7742",
      "timestamp": 1644070166,
      "ems": null
    },
    {
      "latitude": 50.71722,
      "longitude": 7.15477,
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
      "heading": 138,
      "squawk": "7742",
      "timestamp": 1644070172,
      "ems": null
    },
    {
      "latitude": 50.715263,
      "longitude": 7.157593,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1644070178,
      "ems": null
    },
    {
      "latitude": 50.713123,
      "longitude": 7.160492,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1644070184,
      "ems": null
    },
    {
      "latitude": 50.711105,
      "longitude": 7.163012,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1644070190,
      "ems": null
    },
    {
      "latitude": 50.710098,
      "longitude": 7.164154,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070193,
      "ems": null
    },
    {
      "latitude": 50.70805,
      "longitude": 7.166672,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1644070199,
      "ems": null
    },
    {
      "latitude": 50.706234,
      "longitude": 7.169495,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1644070205,
      "ems": null
    },
    {
      "latitude": 50.705349,
      "longitude": 7.171021,
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
      "heading": 132,
      "squawk": "4451",
      "timestamp": 1644070208,
      "ems": null
    },
    {
      "latitude": 50.704514,
      "longitude": 7.172513,
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
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1644070211,
      "ems": null
    },
    {
      "latitude": 50.703873,
      "longitude": 7.173627,
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
      "heading": 130,
      "squawk": "4451",
      "timestamp": 1644070214,
      "ems": null
    },
    {
      "latitude": 50.703003,
      "longitude": 7.175334,
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
      "heading": 129,
      "squawk": "4451",
      "timestamp": 1644070217,
      "ems": null
    },
    {
      "latitude": 50.70195,
      "longitude": 7.177277,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 131,
      "squawk": "4451",
      "timestamp": 1644070220,
      "ems": null
    },
    {
      "latitude": 50.701065,
      "longitude": 7.17865,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 135,
      "squawk": "4451",
      "timestamp": 1644070223,
      "ems": null
    },
    {
      "latitude": 50.699345,
      "longitude": 7.181015,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1644070229,
      "ems": null
    },
    {
      "latitude": 50.698227,
      "longitude": 7.182388,
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
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1644070232,
      "ems": null
    },
    {
      "latitude": 50.697418,
      "longitude": 7.183425,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1644070235,
      "ems": null
    },
    {
      "latitude": 50.69627,
      "longitude": 7.184677,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070238,
      "ems": null
    },
    {
      "latitude": 50.695293,
      "longitude": 7.185669,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070241,
      "ems": null
    },
    {
      "latitude": 50.694504,
      "longitude": 7.186584,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1644070244,
      "ems": null
    },
    {
      "latitude": 50.693253,
      "longitude": 7.188028,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070247,
      "ems": null
    },
    {
      "latitude": 50.692245,
      "longitude": 7.189141,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070250,
      "ems": null
    },
    {
      "latitude": 50.691338,
      "longitude": 7.190094,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070254,
      "ems": null
    },
    {
      "latitude": 50.690266,
      "longitude": 7.191315,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070256,
      "ems": null
    },
    {
      "latitude": 50.688126,
      "longitude": 7.193595,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1644070262,
      "ems": null
    },
    {
      "latitude": 50.686264,
      "longitude": 7.19574,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070269,
      "ems": null
    },
    {
      "latitude": 50.684143,
      "longitude": 7.198049,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070274,
      "ems": null
    },
    {
      "latitude": 50.681763,
      "longitude": 7.20035,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070281,
      "ems": null
    },
    {
      "latitude": 50.680664,
      "longitude": 7.201241,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070284,
      "ems": null
    },
    {
      "latitude": 50.679703,
      "longitude": 7.202058,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070286,
      "ems": null
    },
    {
      "latitude": 50.678535,
      "longitude": 7.202988,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644070290,
      "ems": null
    },
    {
      "latitude": 50.677368,
      "longitude": 7.203914,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644070292,
      "ems": null
    },
    {
      "latitude": 50.676163,
      "longitude": 7.204895,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070296,
      "ems": null
    },
    {
      "latitude": 50.675091,
      "longitude": 7.205887,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070299,
      "ems": null
    },
    {
      "latitude": 50.674347,
      "longitude": 7.206497,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070302,
      "ems": null
    },
    {
      "latitude": 50.673065,
      "longitude": 7.207551,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070304,
      "ems": null
    },
    {
      "latitude": 50.671738,
      "longitude": 7.208557,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644070308,
      "ems": null
    },
    {
      "latitude": 50.669495,
      "longitude": 7.210356,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070314,
      "ems": null
    },
    {
      "latitude": 50.667297,
      "longitude": 7.212307,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070319,
      "ems": null
    },
    {
      "latitude": 50.666199,
      "longitude": 7.213341,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070323,
      "ems": null
    },
    {
      "latitude": 50.664047,
      "longitude": 7.215415,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070328,
      "ems": null
    },
    {
      "latitude": 50.661804,
      "longitude": 7.217439,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070335,
      "ems": null
    },
    {
      "latitude": 50.659401,
      "longitude": 7.219576,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070341,
      "ems": null
    },
    {
      "latitude": 50.657169,
      "longitude": 7.221729,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070347,
      "ems": null
    },
    {
      "latitude": 50.655071,
      "longitude": 7.223882,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070353,
      "ems": null
    },
    {
      "latitude": 50.653072,
      "longitude": 7.22596,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070359,
      "ems": null
    },
    {
      "latitude": 50.650681,
      "longitude": 7.228281,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070365,
      "ems": null
    },
    {
      "latitude": 50.648575,
      "longitude": 7.230305,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070371,
      "ems": null
    },
    {
      "latitude": 50.64624,
      "longitude": 7.232473,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070377,
      "ems": null
    },
    {
      "latitude": 50.644039,
      "longitude": 7.234571,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070383,
      "ems": null
    },
    {
      "latitude": 50.641617,
      "longitude": 7.236738,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070389,
      "ems": null
    },
    {
      "latitude": 50.639431,
      "longitude": 7.238654,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070395,
      "ems": null
    },
    {
      "latitude": 50.637085,
      "longitude": 7.240641,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644070401,
      "ems": null
    },
    {
      "latitude": 50.63475,
      "longitude": 7.242448,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1644070407,
      "ems": null
    },
    {
      "latitude": 50.633614,
      "longitude": 7.243257,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1644070410,
      "ems": null
    },
    {
      "latitude": 50.6311,
      "longitude": 7.245261,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070416,
      "ems": null
    },
    {
      "latitude": 50.628891,
      "longitude": 7.247074,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070422,
      "ems": null
    },
    {
      "latitude": 50.626465,
      "longitude": 7.248953,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070428,
      "ems": null
    },
    {
      "latitude": 50.624302,
      "longitude": 7.250754,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070434,
      "ems": null
    },
    {
      "latitude": 50.62151,
      "longitude": 7.252981,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070440,
      "ems": null
    },
    {
      "latitude": 50.619228,
      "longitude": 7.254985,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070446,
      "ems": null
    },
    {
      "latitude": 50.616669,
      "longitude": 7.257212,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070452,
      "ems": null
    },
    {
      "latitude": 50.614288,
      "longitude": 7.259289,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070458,
      "ems": null
    },
    {
      "latitude": 50.612106,
      "longitude": 7.261072,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070464,
      "ems": null
    },
    {
      "latitude": 50.609573,
      "longitude": 7.263409,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070470,
      "ems": null
    },
    {
      "latitude": 50.607311,
      "longitude": 7.2656,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070476,
      "ems": null
    },
    {
      "latitude": 50.605122,
      "longitude": 7.267679,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070482,
      "ems": null
    },
    {
      "latitude": 50.602936,
      "longitude": 7.269697,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070488,
      "ems": null
    },
    {
      "latitude": 50.60051,
      "longitude": 7.271937,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070494,
      "ems": null
    },
    {
      "latitude": 50.598186,
      "longitude": 7.274211,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070500,
      "ems": null
    },
    {
      "latitude": 50.595978,
      "longitude": 7.276346,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070506,
      "ems": null
    },
    {
      "latitude": 50.59367,
      "longitude": 7.278517,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070512,
      "ems": null
    },
    {
      "latitude": 50.591156,
      "longitude": 7.280892,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070518,
      "ems": null
    },
    {
      "latitude": 50.589108,
      "longitude": 7.283045,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070524,
      "ems": null
    },
    {
      "latitude": 50.586548,
      "longitude": 7.28567,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070530,
      "ems": null
    },
    {
      "latitude": 50.584221,
      "longitude": 7.288018,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070536,
      "ems": null
    },
    {
      "latitude": 50.58194,
      "longitude": 7.290171,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070542,
      "ems": null
    },
    {
      "latitude": 50.579563,
      "longitude": 7.292398,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070548,
      "ems": null
    },
    {
      "latitude": 50.577072,
      "longitude": 7.294849,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070554,
      "ems": null
    },
    {
      "latitude": 50.574875,
      "longitude": 7.297163,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070560,
      "ems": null
    },
    {
      "latitude": 50.572815,
      "longitude": 7.299302,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070566,
      "ems": null
    },
    {
      "latitude": 50.570297,
      "longitude": 7.301788,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070572,
      "ems": null
    },
    {
      "latitude": 50.567833,
      "longitude": 7.304127,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070578,
      "ems": null
    },
    {
      "latitude": 50.565491,
      "longitude": 7.306197,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070584,
      "ems": null
    },
    {
      "latitude": 50.56332,
      "longitude": 7.308135,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070590,
      "ems": null
    },
    {
      "latitude": 50.561874,
      "longitude": 7.309397,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070593,
      "ems": null
    },
    {
      "latitude": 50.55954,
      "longitude": 7.311474,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070599,
      "ems": null
    },
    {
      "latitude": 50.557205,
      "longitude": 7.313715,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070605,
      "ems": null
    },
    {
      "latitude": 50.554893,
      "longitude": 7.316004,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070611,
      "ems": null
    },
    {
      "latitude": 50.552704,
      "longitude": 7.318156,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070617,
      "ems": null
    },
    {
      "latitude": 50.550339,
      "longitude": 7.320147,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070623,
      "ems": null
    },
    {
      "latitude": 50.548096,
      "longitude": 7.322026,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070629,
      "ems": null
    },
    {
      "latitude": 50.54586,
      "longitude": 7.323873,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070635,
      "ems": null
    },
    {
      "latitude": 50.543488,
      "longitude": 7.325951,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070641,
      "ems": null
    },
    {
      "latitude": 50.541206,
      "longitude": 7.327955,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070647,
      "ems": null
    },
    {
      "latitude": 50.539169,
      "longitude": 7.329905,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070653,
      "ems": null
    },
    {
      "latitude": 50.537853,
      "longitude": 7.331221,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070656,
      "ems": null
    },
    {
      "latitude": 50.53669,
      "longitude": 7.332483,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070659,
      "ems": null
    },
    {
      "latitude": 50.53569,
      "longitude": 7.333591,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070662,
      "ems": null
    },
    {
      "latitude": 50.534637,
      "longitude": 7.334747,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070665,
      "ems": null
    },
    {
      "latitude": 50.532547,
      "longitude": 7.336937,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070671,
      "ems": null
    },
    {
      "latitude": 50.530453,
      "longitude": 7.338793,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070677,
      "ems": null
    },
    {
      "latitude": 50.529243,
      "longitude": 7.339684,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070680,
      "ems": null
    },
    {
      "latitude": 50.528137,
      "longitude": 7.340674,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070683,
      "ems": null
    },
    {
      "latitude": 50.52713,
      "longitude": 7.341469,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070686,
      "ems": null
    },
    {
      "latitude": 50.525848,
      "longitude": 7.342554,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070689,
      "ems": null
    },
    {
      "latitude": 50.524727,
      "longitude": 7.34347,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070692,
      "ems": null
    },
    {
      "latitude": 50.523609,
      "longitude": 7.344509,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070695,
      "ems": null
    },
    {
      "latitude": 50.521362,
      "longitude": 7.346745,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070701,
      "ems": null
    },
    {
      "latitude": 50.519188,
      "longitude": 7.348963,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070707,
      "ems": null
    },
    {
      "latitude": 50.518158,
      "longitude": 7.350142,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070710,
      "ems": null
    },
    {
      "latitude": 50.516922,
      "longitude": 7.351516,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070714,
      "ems": null
    },
    {
      "latitude": 50.516006,
      "longitude": 7.352528,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070716,
      "ems": null
    },
    {
      "latitude": 50.515457,
      "longitude": 7.353179,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070718,
      "ems": null
    },
    {
      "latitude": 50.512573,
      "longitude": 7.355925,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070726,
      "ems": null
    },
    {
      "latitude": 50.510559,
      "longitude": 7.358021,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070731,
      "ems": null
    },
    {
      "latitude": 50.508526,
      "longitude": 7.360097,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070737,
      "ems": null
    },
    {
      "latitude": 50.506432,
      "longitude": 7.36225,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070743,
      "ems": null
    },
    {
      "latitude": 50.50415,
      "longitude": 7.364743,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070750,
      "ems": null
    },
    {
      "latitude": 50.503174,
      "longitude": 7.365813,
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
      "heading": 143,
      "squawk": "4451",
      "timestamp": 1644070752,
      "ems": null
    },
    {
      "latitude": 50.502045,
      "longitude": 7.3672,
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
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1644070756,
      "ems": null
    },
    {
      "latitude": 50.499962,
      "longitude": 7.369451,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070761,
      "ems": null
    },
    {
      "latitude": 50.497742,
      "longitude": 7.37132,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1644070767,
      "ems": null
    },
    {
      "latitude": 50.496517,
      "longitude": 7.372272,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070771,
      "ems": null
    },
    {
      "latitude": 50.495537,
      "longitude": 7.373088,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644070773,
      "ems": null
    },
    {
      "latitude": 50.4944,
      "longitude": 7.37385,
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
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1644070776,
      "ems": null
    },
    {
      "latitude": 50.493118,
      "longitude": 7.374862,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644070780,
      "ems": null
    },
    {
      "latitude": 50.49202,
      "longitude": 7.375729,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644070783,
      "ems": null
    },
    {
      "latitude": 50.490929,
      "longitude": 7.376577,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070785,
      "ems": null
    },
    {
      "latitude": 50.489777,
      "longitude": 7.377536,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070789,
      "ems": null
    },
    {
      "latitude": 50.487579,
      "longitude": 7.379416,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070795,
      "ems": null
    },
    {
      "latitude": 50.485344,
      "longitude": 7.381551,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070801,
      "ems": null
    },
    {
      "latitude": 50.484192,
      "longitude": 7.382668,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070804,
      "ems": null
    },
    {
      "latitude": 50.483154,
      "longitude": 7.383703,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070807,
      "ems": null
    },
    {
      "latitude": 50.482132,
      "longitude": 7.384692,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070809,
      "ems": null
    },
    {
      "latitude": 50.480988,
      "longitude": 7.385848,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070813,
      "ems": null
    },
    {
      "latitude": 50.479851,
      "longitude": 7.38697,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070816,
      "ems": null
    },
    {
      "latitude": 50.477554,
      "longitude": 7.389101,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070822,
      "ems": null
    },
    {
      "latitude": 50.475288,
      "longitude": 7.391127,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070828,
      "ems": null
    },
    {
      "latitude": 50.473022,
      "longitude": 7.393148,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070834,
      "ems": null
    },
    {
      "latitude": 50.470772,
      "longitude": 7.395209,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070839,
      "ems": null
    },
    {
      "latitude": 50.468491,
      "longitude": 7.397288,
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
      "heading": 148,
      "squawk": "4451",
      "timestamp": 1644070845,
      "ems": null
    },
    {
      "latitude": 50.466118,
      "longitude": 7.399589,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070852,
      "ems": null
    },
    {
      "latitude": 50.464005,
      "longitude": 7.401605,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070858,
      "ems": null
    },
    {
      "latitude": 50.461601,
      "longitude": 7.403746,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070864,
      "ems": null
    },
    {
      "latitude": 50.459366,
      "longitude": 7.40575,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070870,
      "ems": null
    },
    {
      "latitude": 50.457138,
      "longitude": 7.407749,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070876,
      "ems": null
    },
    {
      "latitude": 50.455948,
      "longitude": 7.408688,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070879,
      "ems": null
    },
    {
      "latitude": 50.453934,
      "longitude": 7.410351,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070885,
      "ems": null
    },
    {
      "latitude": 50.451733,
      "longitude": 7.412282,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070891,
      "ems": null
    },
    {
      "latitude": 50.449825,
      "longitude": 7.414138,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070896,
      "ems": null
    },
    {
      "latitude": 50.448055,
      "longitude": 7.415994,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070903,
      "ems": null
    },
    {
      "latitude": 50.446705,
      "longitude": 7.417479,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070906,
      "ems": null
    },
    {
      "latitude": 50.44574,
      "longitude": 7.418518,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070909,
      "ems": null
    },
    {
      "latitude": 50.444611,
      "longitude": 7.41978,
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
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644070912,
      "ems": null
    },
    {
      "latitude": 50.442608,
      "longitude": 7.421784,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644070918,
      "ems": null
    },
    {
      "latitude": 50.440475,
      "longitude": 7.423867,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070924,
      "ems": null
    },
    {
      "latitude": 50.438644,
      "longitude": 7.425529,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070929,
      "ems": null
    },
    {
      "latitude": 50.437347,
      "longitude": 7.426758,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070933,
      "ems": null
    },
    {
      "latitude": 50.435997,
      "longitude": 7.42802,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070936,
      "ems": null
    },
    {
      "latitude": 50.434929,
      "longitude": 7.428836,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070939,
      "ems": null
    },
    {
      "latitude": 50.433949,
      "longitude": 7.429653,
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
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644070942,
      "ems": null
    },
    {
      "latitude": 50.431961,
      "longitude": 7.431384,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070948,
      "ems": null
    },
    {
      "latitude": 50.429668,
      "longitude": 7.433587,
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
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070954,
      "ems": null
    },
    {
      "latitude": 50.427567,
      "longitude": 7.435648,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644070960,
      "ems": null
    },
    {
      "latitude": 50.426559,
      "longitude": 7.436804,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070963,
      "ems": null
    },
    {
      "latitude": 50.425461,
      "longitude": 7.438178,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1644070966,
      "ems": null
    },
    {
      "latitude": 50.424683,
      "longitude": 7.43919,
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
      "heading": 138,
      "squawk": "4451",
      "timestamp": 1644070968,
      "ems": null
    },
    {
      "latitude": 50.423428,
      "longitude": 7.440862,
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
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1644070972,
      "ems": null
    },
    {
      "latitude": 50.42244,
      "longitude": 7.442008,
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
      "heading": 144,
      "squawk": "4451",
      "timestamp": 1644070975,
      "ems": null
    },
    {
      "latitude": 50.42017,
      "longitude": 7.444202,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070981,
      "ems": null
    },
    {
      "latitude": 50.417953,
      "longitude": 7.446128,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070987,
      "ems": null
    },
    {
      "latitude": 50.416866,
      "longitude": 7.447097,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644070990,
      "ems": null
    },
    {
      "latitude": 50.415848,
      "longitude": 7.448008,
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
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644070993,
      "ems": null
    },
    {
      "latitude": 50.414722,
      "longitude": 7.448953,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644070996,
      "ems": null
    },
    {
      "latitude": 50.413742,
      "longitude": 7.449742,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644070999,
      "ems": null
    },
    {
      "latitude": 50.412964,
      "longitude": 7.450321,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 154,
      "squawk": "4451",
      "timestamp": 1644071002,
      "ems": null
    },
    {
      "latitude": 50.412163,
      "longitude": 7.450957,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644071005,
      "ems": null
    },
    {
      "latitude": 50.410995,
      "longitude": 7.45191,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644071008,
      "ems": null
    },
    {
      "latitude": 50.408627,
      "longitude": 7.453778,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644071014,
      "ems": null
    },
    {
      "latitude": 50.407516,
      "longitude": 7.454657,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644071019,
      "ems": null
    },
    {
      "latitude": 50.40564,
      "longitude": 7.45603,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1644071024,
      "ems": null
    },
    {
      "latitude": 50.403442,
      "longitude": 7.457549,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1644071032,
      "ems": null
    },
    {
      "latitude": 50.400803,
      "longitude": 7.459494,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644071040,
      "ems": null
    },
    {
      "latitude": 50.400192,
      "longitude": 7.460006,
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
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644071043,
      "ems": null
    },
    {
      "latitude": 50.398476,
      "longitude": 7.461573,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644071048,
      "ems": null
    },
    {
      "latitude": 50.397034,
      "longitude": 7.463131,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644071053,
      "ems": null
    },
    {
      "latitude": 50.396027,
      "longitude": 7.46427,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1644071057,
      "ems": null
    },
    {
      "latitude": 50.394836,
      "longitude": 7.465716,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1644071061,
      "ems": null
    },
    {
      "latitude": 50.392776,
      "longitude": 7.468174,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644071067,
      "ems": null
    },
    {
      "latitude": 50.390797,
      "longitude": 7.470258,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 146,
      "squawk": "4451",
      "timestamp": 1644071075,
      "ems": null
    },
    {
      "latitude": 50.38884,
      "longitude": 7.472188,
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
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644071080,
      "ems": null
    },
    {
      "latitude": 50.386139,
      "longitude": 7.475256,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 142,
      "squawk": "4451",
      "timestamp": 1644071089,
      "ems": null
    },
    {
      "latitude": 50.384464,
      "longitude": 7.477013,
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
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644071095,
      "ems": null
    },
    {
      "latitude": 50.382751,
      "longitude": 7.478076,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 163,
      "squawk": "4451",
      "timestamp": 1644071100,
      "ems": null
    },
    {
      "latitude": 50.381195,
      "longitude": 7.478798,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1644071105,
      "ems": null
    },
    {
      "latitude": 50.379684,
      "longitude": 7.479738,
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
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1644071111,
      "ems": null
    },
    {
      "latitude": 50.379158,
      "longitude": 7.479982,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1644071114,
      "ems": null
    },
    {
      "latitude": 50.376225,
      "longitude": 7.481987,
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
      "heading": 157,
      "squawk": "4451",
      "timestamp": 1644071122,
      "ems": null
    },
    {
      "latitude": 50.373184,
      "longitude": 7.483786,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 158,
      "squawk": "4451",
      "timestamp": 1644071131,
      "ems": null
    },
    {
      "latitude": 50.371399,
      "longitude": 7.485086,
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
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644071138,
      "ems": null
    },
    {
      "latitude": 50.369942,
      "longitude": 7.486292,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644071143,
      "ems": null
    },
    {
      "latitude": 50.368515,
      "longitude": 7.487616,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644071148,
      "ems": null
    },
    {
      "latitude": 50.367279,
      "longitude": 7.488845,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644071152,
      "ems": null
    },
    {
      "latitude": 50.365891,
      "longitude": 7.4903,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644071157,
      "ems": null
    },
    {
      "latitude": 50.36467,
      "longitude": 7.491302,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "4451",
      "timestamp": 1644071162,
      "ems": null
    },
    {
      "latitude": 50.364029,
      "longitude": 7.491637,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 161,
      "squawk": "4451",
      "timestamp": 1644071164,
      "ems": null
    },
    {
      "latitude": 50.36277,
      "longitude": 7.492305,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 160,
      "squawk": "4451",
      "timestamp": 1644071168,
      "ems": null
    },
    {
      "latitude": 50.361885,
      "longitude": 7.492824,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 156,
      "squawk": "4451",
      "timestamp": 1644071172,
      "ems": null
    },
    {
      "latitude": 50.360138,
      "longitude": 7.494049,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "4451",
      "timestamp": 1644071177,
      "ems": null
    },
    {
      "latitude": 50.359726,
      "longitude": 7.494411,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644071181,
      "ems": null
    },
    {
      "latitude": 50.357605,
      "longitude": 7.496239,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644071185,
      "ems": null
    },
    {
      "latitude": 50.356705,
      "longitude": 7.497157,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "4451",
      "timestamp": 1644071189,
      "ems": null
    },
    {
      "latitude": 50.355324,
      "longitude": 7.49854,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 149,
      "squawk": "4451",
      "timestamp": 1644071193,
      "ems": null
    },
    {
      "latitude": 50.354553,
      "longitude": 7.499398,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "4451",
      "timestamp": 1644071196,
      "ems": null
    },
    {
      "latitude": 50.35281,
      "longitude": 7.501435,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 141,
      "squawk": "4451",
      "timestamp": 1644071201,
      "ems": null
    },
    {
      "latitude": 50.351852,
      "longitude": 7.502722,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "4451",
      "timestamp": 1644071205,
      "ems": null
    },
    {
      "latitude": 50.350342,
      "longitude": 7.504776,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 137,
      "squawk": "4451",
      "timestamp": 1644071210,
      "ems": null
    },
    {
      "latitude": 50.349224,
      "longitude": 7.506854,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 124,
      "squawk": "4451",
      "timestamp": 1644071215,
      "ems": null
    },
    {
      "latitude": 50.348339,
      "longitude": 7.509304,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 120,
      "squawk": "4451",
      "timestamp": 1644071220,
      "ems": null
    },
    {
      "latitude": 50.347919,
      "longitude": 7.512496,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 103,
      "squawk": "4451",
      "timestamp": 1644071226,
      "ems": null
    },
    {
      "latitude": 50.348385,
      "longitude": 7.516875,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 72,
      "squawk": "4451",
      "timestamp": 1644071233,
      "ems": null
    },
    {
      "latitude": 50.349243,
      "longitude": 7.519997,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 66,
      "squawk": "4451",
      "timestamp": 1644071238,
      "ems": null
    },
    {
      "latitude": 50.349876,
      "longitude": 7.523259,
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
      "heading": 80,
      "squawk": "4451",
      "timestamp": 1644071244,
      "ems": null
    },
    {
      "latitude": 50.349922,
      "longitude": 7.5266,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 94,
      "squawk": "4451",
      "timestamp": 1644071249,
      "ems": null
    },
    {
      "latitude": 50.349365,
      "longitude": 7.529717,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 111,
      "squawk": "4451",
      "timestamp": 1644071255,
      "ems": null
    },
    {
      "latitude": 50.348526,
      "longitude": 7.532316,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 119,
      "squawk": "4451",
      "timestamp": 1644071260,
      "ems": null
    },
    {
      "latitude": 50.347504,
      "longitude": 7.534617,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 125,
      "squawk": "4451",
      "timestamp": 1644071266,
      "ems": null
    },
    {
      "latitude": 50.346405,
      "longitude": 7.53691,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 129,
      "squawk": "4451",
      "timestamp": 1644071271,
      "ems": null
    },
    {
      "latitude": 50.345306,
      "longitude": 7.538645,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 139,
      "squawk": "4451",
      "timestamp": 1644071276,
      "ems": null
    },
    {
      "latitude": 50.343826,
      "longitude": 7.540036,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644071282,
      "ems": null
    },
    {
      "latitude": 50.342468,
      "longitude": 7.541174,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644071287,
      "ems": null
    },
    {
      "latitude": 50.341095,
      "longitude": 7.542331,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 151,
      "squawk": "4451",
      "timestamp": 1644071293,
      "ems": null
    },
    {
      "latitude": 50.339775,
      "longitude": 7.543525,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 150,
      "squawk": "4451",
      "timestamp": 1644071298,
      "ems": null
    },
    {
      "latitude": 50.338566,
      "longitude": 7.544564,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 152,
      "squawk": "4451",
      "timestamp": 1644071303,
      "ems": null
    },
    {
      "latitude": 50.336098,
      "longitude": 7.546494,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 155,
      "squawk": "4451",
      "timestamp": 1644071314,
      "ems": null
    },
    {
      "latitude": 50.334652,
      "longitude": 7.547088,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 174,
      "squawk": "4451",
      "timestamp": 1644071319,
      "ems": null
    },
    {
      "latitude": 50.333496,
      "longitude": 7.546668,
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
      "heading": 203,
      "squawk": "4451",
      "timestamp": 1644071324,
      "ems": null
    },
    {
      "latitude": 50.332466,
      "longitude": 7.545084,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 231,
      "squawk": "4451",
      "timestamp": 1644071330,
      "ems": null
    },
    {
      "latitude": 50.331985,
      "longitude": 7.543921,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 237,
      "squawk": "4451",
      "timestamp": 1644071334,
      "ems": null
    },
    {
      "latitude": 50.330933,
      "longitude": 7.541825,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 225,
      "squawk": "4451",
      "timestamp": 1644071341,
      "ems": null
    }
  ],
};
