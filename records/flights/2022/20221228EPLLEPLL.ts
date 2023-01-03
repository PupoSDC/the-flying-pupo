import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20221228EPLLEPLL",
    callsign: "BNI6D",
    name: "CPL advanced flight",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 11, 28, 14, 11).getTime(),
    arrival: new Date(2022, 11, 28, 15, 29).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 78,
    picTime: 0,
    dualTime: 78,
    nightTime: 21,
    landings: {
      day: 2,
      night: 2,
    },
  },
  aircraft: {
    model: {
      code: "P06T",
      text: "Tecnam P-2006T",
    },
    identification: {
      modes: "48B048",
      registration: "SP-SID",
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
      "latitude": 51.721027,
      "longitude": 19.393463,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672237329,
      "ems": null
    },
    {
      "latitude": 51.720375,
      "longitude": 19.389801,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672237336,
      "ems": null
    },
    {
      "latitude": 51.719742,
      "longitude": 19.38649,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672237343,
      "ems": null
    },
    {
      "latitude": 51.719212,
      "longitude": 19.383621,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672237349,
      "ems": null
    },
    {
      "latitude": 51.718651,
      "longitude": 19.380798,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672237355,
      "ems": null
    },
    {
      "latitude": 51.718048,
      "longitude": 19.378052,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672237360,
      "ems": null
    },
    {
      "latitude": 51.717224,
      "longitude": 19.374166,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672237367,
      "ems": null
    },
    {
      "latitude": 51.716858,
      "longitude": 19.372608,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672237370,
      "ems": null
    },
    {
      "latitude": 51.716137,
      "longitude": 19.369431,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672237376,
      "ems": null
    },
    {
      "latitude": 51.715393,
      "longitude": 19.366074,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672237382,
      "ems": null
    },
    {
      "latitude": 51.714935,
      "longitude": 19.36474,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1672237385,
      "ems": null
    },
    {
      "latitude": 51.71434,
      "longitude": 19.363329,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1672237388,
      "ems": null
    },
    {
      "latitude": 51.713764,
      "longitude": 19.362183,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672237391,
      "ems": null
    },
    {
      "latitude": 51.713104,
      "longitude": 19.361176,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1672237394,
      "ems": null
    },
    {
      "latitude": 51.712368,
      "longitude": 19.360352,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1672237397,
      "ems": null
    },
    {
      "latitude": 51.711483,
      "longitude": 19.359818,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1672237400,
      "ems": null
    },
    {
      "latitude": 51.710495,
      "longitude": 19.359468,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1672237403,
      "ems": null
    },
    {
      "latitude": 51.709526,
      "longitude": 19.35936,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1672237406,
      "ems": null
    },
    {
      "latitude": 51.708504,
      "longitude": 19.359512,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1672237409,
      "ems": null
    },
    {
      "latitude": 51.707428,
      "longitude": 19.359989,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1672237412,
      "ems": null
    },
    {
      "latitude": 51.706375,
      "longitude": 19.360657,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1672237415,
      "ems": null
    },
    {
      "latitude": 51.705231,
      "longitude": 19.361845,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1672237418,
      "ems": null
    },
    {
      "latitude": 51.70422,
      "longitude": 19.363174,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672237421,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.364319,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1672237423,
      "ems": null
    },
    {
      "latitude": 51.702637,
      "longitude": 19.365845,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1672237426,
      "ems": null
    },
    {
      "latitude": 51.702301,
      "longitude": 19.366522,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1672237427,
      "ems": null
    },
    {
      "latitude": 51.701202,
      "longitude": 19.368896,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1672237431,
      "ems": null
    },
    {
      "latitude": 51.700378,
      "longitude": 19.370975,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1672237434,
      "ems": null
    },
    {
      "latitude": 51.69952,
      "longitude": 19.373245,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1672237437,
      "ems": null
    },
    {
      "latitude": 51.698727,
      "longitude": 19.375458,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1672237440,
      "ems": null
    },
    {
      "latitude": 51.698044,
      "longitude": 19.377729,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237443,
      "ems": null
    },
    {
      "latitude": 51.69733,
      "longitude": 19.380112,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237446,
      "ems": null
    },
    {
      "latitude": 51.696671,
      "longitude": 19.382481,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1672237449,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.384783,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672237451,
      "ems": null
    },
    {
      "latitude": 51.69548,
      "longitude": 19.387232,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672237455,
      "ems": null
    },
    {
      "latitude": 51.694885,
      "longitude": 19.389904,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672237458,
      "ems": null
    },
    {
      "latitude": 51.694382,
      "longitude": 19.392279,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1672237461,
      "ems": null
    },
    {
      "latitude": 51.693924,
      "longitude": 19.394878,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1672237464,
      "ems": null
    },
    {
      "latitude": 51.693466,
      "longitude": 19.39743,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672237466,
      "ems": null
    },
    {
      "latitude": 51.692909,
      "longitude": 19.400024,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672237469,
      "ems": null
    },
    {
      "latitude": 51.690952,
      "longitude": 19.406815,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672237478,
      "ems": null
    },
    {
      "latitude": 51.689621,
      "longitude": 19.411432,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237484,
      "ems": null
    },
    {
      "latitude": 51.688705,
      "longitude": 19.414549,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672237488,
      "ems": null
    },
    {
      "latitude": 51.688019,
      "longitude": 19.416809,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237491,
      "ems": null
    },
    {
      "latitude": 51.687275,
      "longitude": 19.419327,
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672237494,
      "ems": null
    },
    {
      "latitude": 51.6866,
      "longitude": 19.421824,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237497,
      "ems": null
    },
    {
      "latitude": 51.686142,
      "longitude": 19.423456,
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237499,
      "ems": null
    },
    {
      "latitude": 51.684761,
      "longitude": 19.428558,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672237505,
      "ems": null
    },
    {
      "latitude": 51.683578,
      "longitude": 19.433552,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672237511,
      "ems": null
    },
    {
      "latitude": 51.682991,
      "longitude": 19.436035,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672237514,
      "ems": null
    },
    {
      "latitude": 51.682343,
      "longitude": 19.438971,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672237518,
      "ems": null
    },
    {
      "latitude": 51.681747,
      "longitude": 19.441496,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672237521,
      "ems": null
    },
    {
      "latitude": 51.680477,
      "longitude": 19.446182,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672237527,
      "ems": null
    },
    {
      "latitude": 51.679184,
      "longitude": 19.45122,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672237533,
      "ems": null
    },
    {
      "latitude": 51.67815,
      "longitude": 19.455338,
      "altitude": {
        "feet": 1900,
        "meters": 579
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672237538,
      "ems": null
    },
    {
      "latitude": 51.676617,
      "longitude": 19.461288,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1672237545,
      "ems": null
    },
    {
      "latitude": 51.674835,
      "longitude": 19.467848,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672237553,
      "ems": null
    },
    {
      "latitude": 51.674057,
      "longitude": 19.470446,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1672237557,
      "ems": null
    },
    {
      "latitude": 51.673004,
      "longitude": 19.473341,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1672237561,
      "ems": null
    },
    {
      "latitude": 51.671913,
      "longitude": 19.475784,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1672237565,
      "ems": null
    },
    {
      "latitude": 51.670517,
      "longitude": 19.478455,
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1672237569,
      "ems": null
    },
    {
      "latitude": 51.669113,
      "longitude": 19.48069,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1672237573,
      "ems": null
    },
    {
      "latitude": 51.667786,
      "longitude": 19.482843,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1672237577,
      "ems": null
    },
    {
      "latitude": 51.666458,
      "longitude": 19.484772,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672237581,
      "ems": null
    },
    {
      "latitude": 51.664883,
      "longitude": 19.486847,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672237585,
      "ems": null
    },
    {
      "latitude": 51.663071,
      "longitude": 19.489374,
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672237590,
      "ems": null
    },
    {
      "latitude": 51.661697,
      "longitude": 19.491156,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672237594,
      "ems": null
    },
    {
      "latitude": 51.660233,
      "longitude": 19.492939,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672237598,
      "ems": null
    },
    {
      "latitude": 51.658722,
      "longitude": 19.494497,
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1672237602,
      "ems": null
    },
    {
      "latitude": 51.657158,
      "longitude": 19.49585,
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
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1672237606,
      "ems": null
    },
    {
      "latitude": 51.655563,
      "longitude": 19.497095,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1672237610,
      "ems": null
    },
    {
      "latitude": 51.653896,
      "longitude": 19.498291,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1672237614,
      "ems": null
    },
    {
      "latitude": 51.652641,
      "longitude": 19.49913,
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672237617,
      "ems": null
    },
    {
      "latitude": 51.651478,
      "longitude": 19.499817,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672237620,
      "ems": null
    },
    {
      "latitude": 51.650253,
      "longitude": 19.500658,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672237623,
      "ems": null
    },
    {
      "latitude": 51.649155,
      "longitude": 19.501326,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672237627,
      "ems": null
    },
    {
      "latitude": 51.647964,
      "longitude": 19.501995,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1672237629,
      "ems": null
    },
    {
      "latitude": 51.646774,
      "longitude": 19.502588,
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1672237632,
      "ems": null
    },
    {
      "latitude": 51.645519,
      "longitude": 19.50325,
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1672237635,
      "ems": null
    },
    {
      "latitude": 51.644356,
      "longitude": 19.503937,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672237639,
      "ems": null
    },
    {
      "latitude": 51.641933,
      "longitude": 19.505463,
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1672237645,
      "ems": null
    },
    {
      "latitude": 51.64119,
      "longitude": 19.506077,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1672237648,
      "ems": null
    },
    {
      "latitude": 51.639744,
      "longitude": 19.507446,
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1672237650,
      "ems": null
    },
    {
      "latitude": 51.638397,
      "longitude": 19.509121,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672237654,
      "ems": null
    },
    {
      "latitude": 51.637325,
      "longitude": 19.510727,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1672237657,
      "ems": null
    },
    {
      "latitude": 51.636383,
      "longitude": 19.512461,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 130,
      "squawk": "7000",
      "timestamp": 1672237660,
      "ems": null
    },
    {
      "latitude": 51.636063,
      "longitude": 19.513056,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1672237661,
      "ems": null
    },
    {
      "latitude": 51.635376,
      "longitude": 19.51454,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1672237663,
      "ems": null
    },
    {
      "latitude": 51.634094,
      "longitude": 19.517731,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1672237667,
      "ems": null
    },
    {
      "latitude": 51.633274,
      "longitude": 19.520111,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1672237671,
      "ems": null
    },
    {
      "latitude": 51.632298,
      "longitude": 19.523239,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1672237675,
      "ems": null
    },
    {
      "latitude": 51.631599,
      "longitude": 19.525375,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1672237677,
      "ems": null
    },
    {
      "latitude": 51.630936,
      "longitude": 19.527531,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237680,
      "ems": null
    },
    {
      "latitude": 51.630112,
      "longitude": 19.530128,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672237684,
      "ems": null
    },
    {
      "latitude": 51.629471,
      "longitude": 19.532429,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237686,
      "ems": null
    },
    {
      "latitude": 51.62883,
      "longitude": 19.534657,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237690,
      "ems": null
    },
    {
      "latitude": 51.628143,
      "longitude": 19.537031,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672237692,
      "ems": null
    },
    {
      "latitude": 51.626663,
      "longitude": 19.541473,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672237699,
      "ems": null
    },
    {
      "latitude": 51.625671,
      "longitude": 19.544231,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1672237702,
      "ems": null
    },
    {
      "latitude": 51.622799,
      "longitude": 19.552078,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1672237714,
      "ems": null
    },
    {
      "latitude": 51.621643,
      "longitude": 19.555145,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1672237718,
      "ems": null
    },
    {
      "latitude": 51.620865,
      "longitude": 19.557371,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1672237721,
      "ems": null
    },
    {
      "latitude": 51.619263,
      "longitude": 19.56175,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672237727,
      "ems": null
    },
    {
      "latitude": 51.617661,
      "longitude": 19.566204,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672237733,
      "ems": null
    },
    {
      "latitude": 51.616096,
      "longitude": 19.570541,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1672237739,
      "ems": null
    },
    {
      "latitude": 51.614456,
      "longitude": 19.57489,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1672237745,
      "ems": null
    },
    {
      "latitude": 51.612839,
      "longitude": 19.57901,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1672237751,
      "ems": null
    },
    {
      "latitude": 51.611206,
      "longitude": 19.583055,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1672237757,
      "ems": null
    },
    {
      "latitude": 51.609581,
      "longitude": 19.587479,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1672237764,
      "ems": null
    },
    {
      "latitude": 51.608185,
      "longitude": 19.591751,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1672237769,
      "ems": null
    },
    {
      "latitude": 51.606766,
      "longitude": 19.596195,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1672237775,
      "ems": null
    },
    {
      "latitude": 51.606033,
      "longitude": 19.59857,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237779,
      "ems": null
    },
    {
      "latitude": 51.605621,
      "longitude": 19.599981,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237780,
      "ems": null
    },
    {
      "latitude": 51.604843,
      "longitude": 19.602356,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237783,
      "ems": null
    },
    {
      "latitude": 51.603241,
      "longitude": 19.607477,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237790,
      "ems": null
    },
    {
      "latitude": 51.602005,
      "longitude": 19.611635,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237796,
      "ems": null
    },
    {
      "latitude": 51.599991,
      "longitude": 19.618464,
      "altitude": {
        "feet": 2550,
        "meters": 777
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672237804,
      "ems": null
    },
    {
      "latitude": 51.59864,
      "longitude": 19.623413,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672237810,
      "ems": null
    },
    {
      "latitude": 51.598068,
      "longitude": 19.625813,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672237813,
      "ems": null
    },
    {
      "latitude": 51.597473,
      "longitude": 19.628263,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672237816,
      "ems": null
    },
    {
      "latitude": 51.596966,
      "longitude": 19.630508,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672237819,
      "ems": null
    },
    {
      "latitude": 51.596313,
      "longitude": 19.633179,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672237822,
      "ems": null
    },
    {
      "latitude": 51.596172,
      "longitude": 19.634018,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672237823,
      "ems": null
    },
    {
      "latitude": 51.595825,
      "longitude": 19.635464,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672237825,
      "ems": null
    },
    {
      "latitude": 51.595093,
      "longitude": 19.638803,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672237829,
      "ems": null
    },
    {
      "latitude": 51.593765,
      "longitude": 19.643778,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237835,
      "ems": null
    },
    {
      "latitude": 51.592587,
      "longitude": 19.648132,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1672237840,
      "ems": null
    },
    {
      "latitude": 51.591248,
      "longitude": 19.652908,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1672237846,
      "ems": null
    },
    {
      "latitude": 51.58992,
      "longitude": 19.657734,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672237852,
      "ems": null
    },
    {
      "latitude": 51.589142,
      "longitude": 19.660263,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237855,
      "ems": null
    },
    {
      "latitude": 51.588409,
      "longitude": 19.662558,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237858,
      "ems": null
    },
    {
      "latitude": 51.587036,
      "longitude": 19.667234,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672237864,
      "ems": null
    },
    {
      "latitude": 51.585419,
      "longitude": 19.672394,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672237871,
      "ems": null
    },
    {
      "latitude": 51.583923,
      "longitude": 19.676886,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1672237876,
      "ems": null
    },
    {
      "latitude": 51.583046,
      "longitude": 19.679489,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1672237880,
      "ems": null
    },
    {
      "latitude": 51.581406,
      "longitude": 19.684235,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672237886,
      "ems": null
    },
    {
      "latitude": 51.579647,
      "longitude": 19.689255,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672237892,
      "ems": null
    },
    {
      "latitude": 51.577881,
      "longitude": 19.694256,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672237898,
      "ems": null
    },
    {
      "latitude": 51.576233,
      "longitude": 19.699005,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672237904,
      "ems": null
    },
    {
      "latitude": 51.574432,
      "longitude": 19.704132,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672237910,
      "ems": null
    },
    {
      "latitude": 51.572891,
      "longitude": 19.70821,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1672237915,
      "ems": null
    },
    {
      "latitude": 51.570568,
      "longitude": 19.714279,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1672237922,
      "ems": null
    },
    {
      "latitude": 51.569641,
      "longitude": 19.71645,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1672237925,
      "ems": null
    },
    {
      "latitude": 51.568661,
      "longitude": 19.718781,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1672237928,
      "ems": null
    },
    {
      "latitude": 51.567497,
      "longitude": 19.721527,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1672237931,
      "ems": null
    },
    {
      "latitude": 51.566471,
      "longitude": 19.723969,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1672237934,
      "ems": null
    },
    {
      "latitude": 51.565384,
      "longitude": 19.726471,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1672237937,
      "ems": null
    },
    {
      "latitude": 51.564423,
      "longitude": 19.728241,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1672237939,
      "ems": null
    },
    {
      "latitude": 51.563354,
      "longitude": 19.729767,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -2624,
        "ms": -13.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672237942,
      "ems": null
    },
    {
      "latitude": 51.562237,
      "longitude": 19.730835,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1672237945,
      "ems": null
    },
    {
      "latitude": 51.559769,
      "longitude": 19.731903,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 4416,
        "ms": 22.4
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1672237949,
      "ems": null
    },
    {
      "latitude": 51.558746,
      "longitude": 19.731817,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 3264,
        "ms": 16.6
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1672237952,
      "ems": null
    },
    {
      "latitude": 51.557861,
      "longitude": 19.731522,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1672237955,
      "ems": null
    },
    {
      "latitude": 51.556931,
      "longitude": 19.730835,
      "altitude": {
        "feet": 3625,
        "meters": 1105
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -1856,
        "ms": -9.4
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1672237958,
      "ems": null
    },
    {
      "latitude": 51.555817,
      "longitude": 19.729738,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1672237961,
      "ems": null
    },
    {
      "latitude": 51.55481,
      "longitude": 19.728848,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1672237964,
      "ems": null
    },
    {
      "latitude": 51.553665,
      "longitude": 19.727808,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1672237967,
      "ems": null
    },
    {
      "latitude": 51.552555,
      "longitude": 19.726868,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1672237970,
      "ems": null
    },
    {
      "latitude": 51.551342,
      "longitude": 19.7258,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "squawk": "7000",
      "timestamp": 1672237973,
      "ems": null
    },
    {
      "latitude": 51.550278,
      "longitude": 19.724987,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1672237976,
      "ems": null
    },
    {
      "latitude": 51.549042,
      "longitude": 19.724022,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1672237979,
      "ems": null
    },
    {
      "latitude": 51.548038,
      "longitude": 19.723206,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1672237982,
      "ems": null
    },
    {
      "latitude": 51.546734,
      "longitude": 19.722137,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1672237985,
      "ems": null
    },
    {
      "latitude": 51.544281,
      "longitude": 19.72031,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -3200,
        "ms": -16.3
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1672237992,
      "ems": null
    },
    {
      "latitude": 51.542824,
      "longitude": 19.719315,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -2944,
        "ms": -15
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1672237994,
      "ems": null
    },
    {
      "latitude": 51.541752,
      "longitude": 19.718323,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1672237997,
      "ems": null
    },
    {
      "latitude": 51.540962,
      "longitude": 19.717026,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 4608,
        "ms": 23.4
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1672238000,
      "ems": null
    },
    {
      "latitude": 51.540588,
      "longitude": 19.715958,
      "altitude": {
        "feet": 3675,
        "meters": 1120
      },
      "speed": {
        "kmh": 98.2,
        "kts": 53,
        "mph": 61
      },
      "verticalSpeed": {
        "fpm": 2752,
        "ms": 14
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1672238004,
      "ems": null
    },
    {
      "latitude": 51.540298,
      "longitude": 19.714743,
      "altitude": {
        "feet": 3650,
        "meters": 1113
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672238006,
      "ems": null
    },
    {
      "latitude": 51.539986,
      "longitude": 19.713364,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672238009,
      "ems": null
    },
    {
      "latitude": 51.539703,
      "longitude": 19.7117,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672238013,
      "ems": null
    },
    {
      "latitude": 51.539425,
      "longitude": 19.710083,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672238015,
      "ems": null
    },
    {
      "latitude": 51.539146,
      "longitude": 19.708252,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672238019,
      "ems": null
    },
    {
      "latitude": 51.539017,
      "longitude": 19.706577,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1672238021,
      "ems": null
    },
    {
      "latitude": 51.539192,
      "longitude": 19.70459,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1672238024,
      "ems": null
    },
    {
      "latitude": 51.539795,
      "longitude": 19.702496,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -2304,
        "ms": -11.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672238027,
      "ems": null
    },
    {
      "latitude": 51.540985,
      "longitude": 19.700787,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -1792,
        "ms": -9.1
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672238031,
      "ems": null
    },
    {
      "latitude": 51.542126,
      "longitude": 19.700165,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672238033,
      "ems": null
    },
    {
      "latitude": 51.544418,
      "longitude": 19.700491,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 1792,
        "ms": 9.1
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1672238036,
      "ems": null
    },
    {
      "latitude": 51.546127,
      "longitude": 19.701691,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1672238039,
      "ems": null
    },
    {
      "latitude": 51.547619,
      "longitude": 19.70314,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1672238042,
      "ems": null
    },
    {
      "latitude": 51.549683,
      "longitude": 19.705389,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1672238046,
      "ems": null
    },
    {
      "latitude": 51.551342,
      "longitude": 19.707413,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1672238049,
      "ems": null
    },
    {
      "latitude": 51.552429,
      "longitude": 19.708805,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1672238051,
      "ems": null
    },
    {
      "latitude": 51.554169,
      "longitude": 19.71118,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1672238054,
      "ems": null
    },
    {
      "latitude": 51.555908,
      "longitude": 19.713629,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1672238058,
      "ems": null
    },
    {
      "latitude": 51.556835,
      "longitude": 19.714966,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1672238061,
      "ems": null
    },
    {
      "latitude": 51.558651,
      "longitude": 19.71756,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1672238064,
      "ems": null
    },
    {
      "latitude": 51.560375,
      "longitude": 19.720154,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1672238067,
      "ems": null
    },
    {
      "latitude": 51.561813,
      "longitude": 19.72224,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1672238070,
      "ems": null
    },
    {
      "latitude": 51.56282,
      "longitude": 19.723652,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1672238073,
      "ems": null
    },
    {
      "latitude": 51.564697,
      "longitude": 19.726324,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1672238075,
      "ems": null
    },
    {
      "latitude": 51.568176,
      "longitude": 19.730927,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1672238082,
      "ems": null
    },
    {
      "latitude": 51.572388,
      "longitude": 19.735306,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672238089,
      "ems": null
    },
    {
      "latitude": 51.574631,
      "longitude": 19.735676,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672238093,
      "ems": null
    },
    {
      "latitude": 51.576187,
      "longitude": 19.734266,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672238097,
      "ems": null
    },
    {
      "latitude": 51.57634,
      "longitude": 19.731979,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1672238100,
      "ems": null
    },
    {
      "latitude": 51.575775,
      "longitude": 19.730555,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1672238102,
      "ems": null
    },
    {
      "latitude": 51.574722,
      "longitude": 19.728996,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1672238105,
      "ems": null
    },
    {
      "latitude": 51.573944,
      "longitude": 19.727882,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672238108,
      "ems": null
    },
    {
      "latitude": 51.573036,
      "longitude": 19.726562,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672238111,
      "ems": null
    },
    {
      "latitude": 51.571781,
      "longitude": 19.724655,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672238115,
      "ems": null
    },
    {
      "latitude": 51.570831,
      "longitude": 19.72328,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672238118,
      "ems": null
    },
    {
      "latitude": 51.569916,
      "longitude": 19.721909,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1672238120,
      "ems": null
    },
    {
      "latitude": 51.568954,
      "longitude": 19.720459,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672238124,
      "ems": null
    },
    {
      "latitude": 51.568195,
      "longitude": 19.719391,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672238126,
      "ems": null
    },
    {
      "latitude": 51.567078,
      "longitude": 19.717787,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672238130,
      "ems": null
    },
    {
      "latitude": 51.566288,
      "longitude": 19.716644,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672238132,
      "ems": null
    },
    {
      "latitude": 51.564606,
      "longitude": 19.714149,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672238139,
      "ems": null
    },
    {
      "latitude": 51.562866,
      "longitude": 19.711552,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1672238145,
      "ems": null
    },
    {
      "latitude": 51.561172,
      "longitude": 19.708954,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1672238151,
      "ems": null
    },
    {
      "latitude": 51.559525,
      "longitude": 19.706059,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1672238157,
      "ems": null
    },
    {
      "latitude": 51.559582,
      "longitude": 19.704208,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -2368,
        "ms": -12
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672238160,
      "ems": null
    },
    {
      "latitude": 51.56076,
      "longitude": 19.702198,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -1856,
        "ms": -9.4
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672238163,
      "ems": null
    },
    {
      "latitude": 51.562283,
      "longitude": 19.700699,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -2176,
        "ms": -11.1
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672238166,
      "ems": null
    },
    {
      "latitude": 51.563774,
      "longitude": 19.699326,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672238169,
      "ems": null
    },
    {
      "latitude": 51.564983,
      "longitude": 19.698181,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 1408,
        "ms": 7.2
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672238171,
      "ems": null
    },
    {
      "latitude": 51.566483,
      "longitude": 19.696779,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672238175,
      "ems": null
    },
    {
      "latitude": 51.568085,
      "longitude": 19.695368,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672238179,
      "ems": null
    },
    {
      "latitude": 51.56955,
      "longitude": 19.693958,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672238182,
      "ems": null
    },
    {
      "latitude": 51.570847,
      "longitude": 19.692688,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672238185,
      "ems": null
    },
    {
      "latitude": 51.572014,
      "longitude": 19.69162,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672238188,
      "ems": null
    },
    {
      "latitude": 51.573257,
      "longitude": 19.69047,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672238191,
      "ems": null
    },
    {
      "latitude": 51.575737,
      "longitude": 19.687653,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672238197,
      "ems": null
    },
    {
      "latitude": 51.576202,
      "longitude": 19.685516,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -2176,
        "ms": -11.1
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672238200,
      "ems": null
    },
    {
      "latitude": 51.575729,
      "longitude": 19.683788,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1672238203,
      "ems": null
    },
    {
      "latitude": 51.574402,
      "longitude": 19.681932,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1672238206,
      "ems": null
    },
    {
      "latitude": 51.573395,
      "longitude": 19.68067,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1672238208,
      "ems": null
    },
    {
      "latitude": 51.572105,
      "longitude": 19.678802,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672238212,
      "ems": null
    },
    {
      "latitude": 51.571175,
      "longitude": 19.677582,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672238215,
      "ems": null
    },
    {
      "latitude": 51.570007,
      "longitude": 19.675846,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672238218,
      "ems": null
    },
    {
      "latitude": 51.569218,
      "longitude": 19.674683,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672238221,
      "ems": null
    },
    {
      "latitude": 51.568333,
      "longitude": 19.673538,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1672238224,
      "ems": null
    },
    {
      "latitude": 51.567444,
      "longitude": 19.672283,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1672238227,
      "ems": null
    },
    {
      "latitude": 51.566849,
      "longitude": 19.671467,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1672238229,
      "ems": null
    },
    {
      "latitude": 51.565659,
      "longitude": 19.669832,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1672238233,
      "ems": null
    },
    {
      "latitude": 51.564007,
      "longitude": 19.667587,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1672238239,
      "ems": null
    },
    {
      "latitude": 51.561951,
      "longitude": 19.66486,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1672238245,
      "ems": null
    },
    {
      "latitude": 51.560932,
      "longitude": 19.66362,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1672238248,
      "ems": null
    },
    {
      "latitude": 51.559982,
      "longitude": 19.663153,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -2240,
        "ms": -11.4
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1672238251,
      "ems": null
    },
    {
      "latitude": 51.558014,
      "longitude": 19.664118,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -2112,
        "ms": -10.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672238254,
      "ems": null
    },
    {
      "latitude": 51.556602,
      "longitude": 19.668503,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 311.1,
        "kts": 168,
        "mph": 193.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1672238258,
      "ems": null
    },
    {
      "latitude": 51.556641,
      "longitude": 19.672504,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 322.2,
        "kts": 174,
        "mph": 200.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1672238261,
      "ems": null
    },
    {
      "latitude": 51.556744,
      "longitude": 19.675827,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 322.2,
        "kts": 174,
        "mph": 200.2
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1672238264,
      "ems": null
    },
    {
      "latitude": 51.556778,
      "longitude": 19.678444,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1672238267,
      "ems": null
    },
    {
      "latitude": 51.556824,
      "longitude": 19.68364,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": 1856,
        "ms": 9.4
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1672238270,
      "ems": null
    },
    {
      "latitude": 51.556835,
      "longitude": 19.687119,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 1728,
        "ms": 8.8
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1672238273,
      "ems": null
    },
    {
      "latitude": 51.556835,
      "longitude": 19.69017,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1672238276,
      "ems": null
    },
    {
      "latitude": 51.556881,
      "longitude": 19.693604,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1672238279,
      "ems": null
    },
    {
      "latitude": 51.55687,
      "longitude": 19.696556,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1672238282,
      "ems": null
    },
    {
      "latitude": 51.55687,
      "longitude": 19.699896,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1672238285,
      "ems": null
    },
    {
      "latitude": 51.55687,
      "longitude": 19.704498,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1672238291,
      "ems": null
    },
    {
      "latitude": 51.55687,
      "longitude": 19.712145,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1672238297,
      "ems": null
    },
    {
      "latitude": 51.55687,
      "longitude": 19.718084,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1672238302,
      "ems": null
    },
    {
      "latitude": 51.556458,
      "longitude": 19.722389,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1672238306,
      "ems": null
    },
    {
      "latitude": 51.555908,
      "longitude": 19.725433,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1672238309,
      "ems": null
    },
    {
      "latitude": 51.555038,
      "longitude": 19.72818,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1672238312,
      "ems": null
    },
    {
      "latitude": 51.553997,
      "longitude": 19.730606,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1672238315,
      "ems": null
    },
    {
      "latitude": 51.55307,
      "longitude": 19.732262,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1672238317,
      "ems": null
    },
    {
      "latitude": 51.551376,
      "longitude": 19.734638,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672238321,
      "ems": null
    },
    {
      "latitude": 51.549992,
      "longitude": 19.736023,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1672238324,
      "ems": null
    },
    {
      "latitude": 51.549545,
      "longitude": 19.73642,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1672238326,
      "ems": null
    },
    {
      "latitude": 51.54734,
      "longitude": 19.737625,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672238329,
      "ems": null
    },
    {
      "latitude": 51.545517,
      "longitude": 19.737978,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1672238333,
      "ems": null
    },
    {
      "latitude": 51.544083,
      "longitude": 19.737854,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1672238336,
      "ems": null
    },
    {
      "latitude": 51.542953,
      "longitude": 19.737385,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1672238338,
      "ems": null
    },
    {
      "latitude": 51.541397,
      "longitude": 19.736197,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1672238342,
      "ems": null
    },
    {
      "latitude": 51.54039,
      "longitude": 19.735008,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "squawk": "7000",
      "timestamp": 1672238344,
      "ems": null
    },
    {
      "latitude": 51.53952,
      "longitude": 19.733301,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672238348,
      "ems": null
    },
    {
      "latitude": 51.538879,
      "longitude": 19.731892,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "timestamp": 1672238350,
      "ems": null
    },
    {
      "latitude": 51.538055,
      "longitude": 19.729813,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1672238354,
      "ems": null
    },
    {
      "latitude": 51.537506,
      "longitude": 19.728401,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "timestamp": 1672238356,
      "ems": null
    },
    {
      "latitude": 51.536957,
      "longitude": 19.726843,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1672238359,
      "ems": null
    },
    {
      "latitude": 51.536541,
      "longitude": 19.725647,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1672238363,
      "ems": null
    },
    {
      "latitude": 51.536041,
      "longitude": 19.724245,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1672238366,
      "ems": null
    },
    {
      "latitude": 51.535721,
      "longitude": 19.723354,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1672238368,
      "ems": null
    },
    {
      "latitude": 51.535309,
      "longitude": 19.722092,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1672238372,
      "ems": null
    },
    {
      "latitude": 51.53508,
      "longitude": 19.721424,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1672238374,
      "ems": null
    },
    {
      "latitude": 51.534805,
      "longitude": 19.720608,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1672238377,
      "ems": null
    },
    {
      "latitude": 51.534485,
      "longitude": 19.719568,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1672238380,
      "ems": null
    },
    {
      "latitude": 51.533844,
      "longitude": 19.717787,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1672238387,
      "ems": null
    },
    {
      "latitude": 51.532333,
      "longitude": 19.713778,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1672238393,
      "ems": null
    },
    {
      "latitude": 51.531281,
      "longitude": 19.711075,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1672238399,
      "ems": null
    },
    {
      "latitude": 51.530685,
      "longitude": 19.709621,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1672238402,
      "ems": null
    },
    {
      "latitude": 51.530209,
      "longitude": 19.708405,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1672238405,
      "ems": null
    },
    {
      "latitude": 51.528858,
      "longitude": 19.705048,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1672238411,
      "ems": null
    },
    {
      "latitude": 51.527985,
      "longitude": 19.702717,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1672238417,
      "ems": null
    },
    {
      "latitude": 51.527321,
      "longitude": 19.701157,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1672238423,
      "ems": null
    },
    {
      "latitude": 51.526428,
      "longitude": 19.69908,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1672238429,
      "ems": null
    },
    {
      "latitude": 51.525742,
      "longitude": 19.69767,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1672238432,
      "ems": null
    },
    {
      "latitude": 51.525146,
      "longitude": 19.696333,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1672238435,
      "ems": null
    },
    {
      "latitude": 51.524048,
      "longitude": 19.693735,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1672238440,
      "ems": null
    },
    {
      "latitude": 51.522812,
      "longitude": 19.69084,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1672238447,
      "ems": null
    },
    {
      "latitude": 51.521641,
      "longitude": 19.687576,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1672238453,
      "ems": null
    },
    {
      "latitude": 51.520752,
      "longitude": 19.685051,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1672238459,
      "ems": null
    },
    {
      "latitude": 51.520386,
      "longitude": 19.68416,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1672238461,
      "ems": null
    },
    {
      "latitude": 51.520012,
      "longitude": 19.683151,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1672238464,
      "ems": null
    },
    {
      "latitude": 51.519409,
      "longitude": 19.681473,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1672238471,
      "ems": null
    },
    {
      "latitude": 51.518326,
      "longitude": 19.678667,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1672238477,
      "ems": null
    },
    {
      "latitude": 51.517361,
      "longitude": 19.675751,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1672238483,
      "ems": null
    },
    {
      "latitude": 51.516495,
      "longitude": 19.672951,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672238489,
      "ems": null
    },
    {
      "latitude": 51.516056,
      "longitude": 19.671478,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672238492,
      "ems": null
    },
    {
      "latitude": 51.515625,
      "longitude": 19.669907,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672238495,
      "ems": null
    },
    {
      "latitude": 51.515266,
      "longitude": 19.668655,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672238498,
      "ems": null
    },
    {
      "latitude": 51.514893,
      "longitude": 19.667206,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672238501,
      "ems": null
    },
    {
      "latitude": 51.514473,
      "longitude": 19.665451,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672238504,
      "ems": null
    },
    {
      "latitude": 51.514114,
      "longitude": 19.664043,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672238507,
      "ems": null
    },
    {
      "latitude": 51.513821,
      "longitude": 19.662704,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "timestamp": 1672238510,
      "ems": null
    },
    {
      "latitude": 51.513542,
      "longitude": 19.661407,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672238513,
      "ems": null
    },
    {
      "latitude": 51.513336,
      "longitude": 19.660406,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672238516,
      "ems": null
    },
    {
      "latitude": 51.513168,
      "longitude": 19.659576,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672238519,
      "ems": null
    },
    {
      "latitude": 51.51297,
      "longitude": 19.658476,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 77.8,
        "kts": 42,
        "mph": 48.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672238522,
      "ems": null
    },
    {
      "latitude": 51.512703,
      "longitude": 19.657288,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 101.9,
        "kts": 55,
        "mph": 63.3
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672238525,
      "ems": null
    },
    {
      "latitude": 51.512054,
      "longitude": 19.654615,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672238531,
      "ems": null
    },
    {
      "latitude": 51.511322,
      "longitude": 19.651794,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672238537,
      "ems": null
    },
    {
      "latitude": 51.511261,
      "longitude": 19.651566,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672238538,
      "ems": null
    },
    {
      "latitude": 51.510422,
      "longitude": 19.648285,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672238544,
      "ems": null
    },
    {
      "latitude": 51.51004,
      "longitude": 19.646894,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672238548,
      "ems": null
    },
    {
      "latitude": 51.509586,
      "longitude": 19.645386,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672238550,
      "ems": null
    },
    {
      "latitude": 51.509167,
      "longitude": 19.643784,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672238554,
      "ems": null
    },
    {
      "latitude": 51.508942,
      "longitude": 19.642071,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1672238557,
      "ems": null
    },
    {
      "latitude": 51.509075,
      "longitude": 19.640656,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672238559,
      "ems": null
    },
    {
      "latitude": 51.510223,
      "longitude": 19.639101,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672238563,
      "ems": null
    },
    {
      "latitude": 51.511539,
      "longitude": 19.639053,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672238565,
      "ems": null
    },
    {
      "latitude": 51.513428,
      "longitude": 19.641327,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1672238569,
      "ems": null
    },
    {
      "latitude": 51.514751,
      "longitude": 19.644165,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -1792,
        "ms": -9.1
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672238572,
      "ems": null
    },
    {
      "latitude": 51.516037,
      "longitude": 19.646969,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672238575,
      "ems": null
    },
    {
      "latitude": 51.517452,
      "longitude": 19.649963,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238578,
      "ems": null
    },
    {
      "latitude": 51.518803,
      "longitude": 19.652786,
      "altitude": {
        "feet": 3375,
        "meters": 1029
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238581,
      "ems": null
    },
    {
      "latitude": 51.520061,
      "longitude": 19.655457,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238584,
      "ems": null
    },
    {
      "latitude": 51.521347,
      "longitude": 19.658178,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238587,
      "ems": null
    },
    {
      "latitude": 51.5229,
      "longitude": 19.661407,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238590,
      "ems": null
    },
    {
      "latitude": 51.524063,
      "longitude": 19.663849,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238593,
      "ems": null
    },
    {
      "latitude": 51.525421,
      "longitude": 19.666641,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238596,
      "ems": null
    },
    {
      "latitude": 51.526718,
      "longitude": 19.669342,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238599,
      "ems": null
    },
    {
      "latitude": 51.529369,
      "longitude": 19.674911,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672238605,
      "ems": null
    },
    {
      "latitude": 51.532013,
      "longitude": 19.680597,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1672238611,
      "ems": null
    },
    {
      "latitude": 51.533295,
      "longitude": 19.683714,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1672238614,
      "ems": null
    },
    {
      "latitude": 51.534584,
      "longitude": 19.68689,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 287.1,
        "kts": 155,
        "mph": 178.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1672238617,
      "ems": null
    },
    {
      "latitude": 51.535748,
      "longitude": 19.689789,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1672238620,
      "ems": null
    },
    {
      "latitude": 51.537937,
      "longitude": 19.695053,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1672238626,
      "ems": null
    },
    {
      "latitude": 51.540253,
      "longitude": 19.700565,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1672238632,
      "ems": null
    },
    {
      "latitude": 51.542217,
      "longitude": 19.705124,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1672238638,
      "ems": null
    },
    {
      "latitude": 51.545338,
      "longitude": 19.711914,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 283.4,
        "kts": 153,
        "mph": 176.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672238644,
      "ems": null
    },
    {
      "latitude": 51.546707,
      "longitude": 19.714668,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1672238647,
      "ems": null
    },
    {
      "latitude": 51.548035,
      "longitude": 19.71645,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 285.2,
        "kts": 154,
        "mph": 177.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1672238649,
      "ems": null
    },
    {
      "latitude": 51.550369,
      "longitude": 19.718159,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1672238653,
      "ems": null
    },
    {
      "latitude": 51.552273,
      "longitude": 19.719391,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1672238656,
      "ems": null
    },
    {
      "latitude": 51.554077,
      "longitude": 19.720385,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1672238659,
      "ems": null
    },
    {
      "latitude": 51.555859,
      "longitude": 19.721222,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -1600,
        "ms": -8.1
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1672238662,
      "ems": null
    },
    {
      "latitude": 51.558094,
      "longitude": 19.722137,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1672238665,
      "ems": null
    },
    {
      "latitude": 51.560234,
      "longitude": 19.722519,
      "altitude": {
        "feet": 3350,
        "meters": 1021
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672238669,
      "ems": null
    },
    {
      "latitude": 51.562363,
      "longitude": 19.719717,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672238674,
      "ems": null
    },
    {
      "latitude": 51.561726,
      "longitude": 19.716949,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1672238678,
      "ems": null
    },
    {
      "latitude": 51.560669,
      "longitude": 19.715115,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672238681,
      "ems": null
    },
    {
      "latitude": 51.559662,
      "longitude": 19.713259,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1672238684,
      "ems": null
    },
    {
      "latitude": 51.558838,
      "longitude": 19.711456,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1672238687,
      "ems": null
    },
    {
      "latitude": 51.55814,
      "longitude": 19.709854,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1672238690,
      "ems": null
    },
    {
      "latitude": 51.557419,
      "longitude": 19.708359,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1672238693,
      "ems": null
    },
    {
      "latitude": 51.556744,
      "longitude": 19.706879,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1672238696,
      "ems": null
    },
    {
      "latitude": 51.556,
      "longitude": 19.705389,
      "altitude": {
        "feet": 3275,
        "meters": 998
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1672238699,
      "ems": null
    },
    {
      "latitude": 51.555313,
      "longitude": 19.703979,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1672238702,
      "ems": null
    },
    {
      "latitude": 51.553856,
      "longitude": 19.700928,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1672238708,
      "ems": null
    },
    {
      "latitude": 51.553299,
      "longitude": 19.699783,
      "altitude": {
        "feet": 3425,
        "meters": 1044
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1672238711,
      "ems": null
    },
    {
      "latitude": 51.551994,
      "longitude": 19.697266,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1672238717,
      "ems": null
    },
    {
      "latitude": 51.55069,
      "longitude": 19.694923,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672238723,
      "ems": null
    },
    {
      "latitude": 51.549911,
      "longitude": 19.693586,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672238726,
      "ems": null
    },
    {
      "latitude": 51.548447,
      "longitude": 19.69084,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1672238732,
      "ems": null
    },
    {
      "latitude": 51.547153,
      "longitude": 19.688187,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1672238738,
      "ems": null
    },
    {
      "latitude": 51.546341,
      "longitude": 19.68646,
      "altitude": {
        "feet": 3625,
        "meters": 1105
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1672238744,
      "ems": null
    },
    {
      "latitude": 51.545616,
      "longitude": 19.685135,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1672238749,
      "ems": null
    },
    {
      "latitude": 51.544361,
      "longitude": 19.682999,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672238756,
      "ems": null
    },
    {
      "latitude": 51.542862,
      "longitude": 19.680449,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1672238762,
      "ems": null
    },
    {
      "latitude": 51.542126,
      "longitude": 19.679184,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1672238765,
      "ems": null
    },
    {
      "latitude": 51.541286,
      "longitude": 19.677811,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1672238768,
      "ems": null
    },
    {
      "latitude": 51.540573,
      "longitude": 19.676588,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1672238771,
      "ems": null
    },
    {
      "latitude": 51.539055,
      "longitude": 19.673996,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1672238777,
      "ems": null
    },
    {
      "latitude": 51.537643,
      "longitude": 19.671392,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1672238783,
      "ems": null
    },
    {
      "latitude": 51.536213,
      "longitude": 19.668732,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1672238789,
      "ems": null
    },
    {
      "latitude": 51.535469,
      "longitude": 19.667282,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1672238792,
      "ems": null
    },
    {
      "latitude": 51.534805,
      "longitude": 19.665974,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1672238795,
      "ems": null
    },
    {
      "latitude": 51.534119,
      "longitude": 19.664459,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1672238798,
      "ems": null
    },
    {
      "latitude": 51.533562,
      "longitude": 19.662933,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1672238801,
      "ems": null
    },
    {
      "latitude": 51.533112,
      "longitude": 19.661444,
      "altitude": {
        "feet": 3550,
        "meters": 1082
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1672238804,
      "ems": null
    },
    {
      "latitude": 51.5327,
      "longitude": 19.659737,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672238807,
      "ems": null
    },
    {
      "latitude": 51.532654,
      "longitude": 19.657436,
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
        "fpm": -2560,
        "ms": -13
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672238810,
      "ems": null
    },
    {
      "latitude": 51.533142,
      "longitude": 19.655151,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672238813,
      "ems": null
    },
    {
      "latitude": 51.534027,
      "longitude": 19.653576,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672238816,
      "ems": null
    },
    {
      "latitude": 51.534805,
      "longitude": 19.653057,
      "altitude": {
        "feet": 3475,
        "meters": 1059
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 3584,
        "ms": 18.2
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672238818,
      "ems": null
    },
    {
      "latitude": 51.536407,
      "longitude": 19.652536,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 3904,
        "ms": 19.8
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672238822,
      "ems": null
    },
    {
      "latitude": 51.537643,
      "longitude": 19.652388,
      "altitude": {
        "feet": 3775,
        "meters": 1151
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672238825,
      "ems": null
    },
    {
      "latitude": 51.539337,
      "longitude": 19.652536,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672238828,
      "ems": null
    },
    {
      "latitude": 51.540939,
      "longitude": 19.652908,
      "altitude": {
        "feet": 3650,
        "meters": 1113
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672238831,
      "ems": null
    },
    {
      "latitude": 51.542313,
      "longitude": 19.653168,
      "altitude": {
        "feet": 3675,
        "meters": 1120
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672238834,
      "ems": null
    },
    {
      "latitude": 51.544098,
      "longitude": 19.653502,
      "altitude": {
        "feet": 3650,
        "meters": 1113
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672238837,
      "ems": null
    },
    {
      "latitude": 51.545757,
      "longitude": 19.653854,
      "altitude": {
        "feet": 3625,
        "meters": 1105
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672238840,
      "ems": null
    },
    {
      "latitude": 51.547573,
      "longitude": 19.654236,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672238843,
      "ems": null
    },
    {
      "latitude": 51.549248,
      "longitude": 19.654541,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672238846,
      "ems": null
    },
    {
      "latitude": 51.550919,
      "longitude": 19.654913,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672238849,
      "ems": null
    },
    {
      "latitude": 51.552521,
      "longitude": 19.655357,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1672238852,
      "ems": null
    },
    {
      "latitude": 51.554276,
      "longitude": 19.655914,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1672238855,
      "ems": null
    },
    {
      "latitude": 51.556,
      "longitude": 19.656525,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1672238858,
      "ems": null
    },
    {
      "latitude": 51.559258,
      "longitude": 19.657516,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672238864,
      "ems": null
    },
    {
      "latitude": 51.560486,
      "longitude": 19.65766,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1672238867,
      "ems": null
    },
    {
      "latitude": 51.562656,
      "longitude": 19.657516,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672238870,
      "ems": null
    },
    {
      "latitude": 51.563492,
      "longitude": 19.657364,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672238872,
      "ems": null
    },
    {
      "latitude": 51.564743,
      "longitude": 19.65699,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672238875,
      "ems": null
    },
    {
      "latitude": 51.567307,
      "longitude": 19.656322,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672238880,
      "ems": null
    },
    {
      "latitude": 51.568661,
      "longitude": 19.655991,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672238883,
      "ems": null
    },
    {
      "latitude": 51.569733,
      "longitude": 19.655762,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672238886,
      "ems": null
    },
    {
      "latitude": 51.571079,
      "longitude": 19.655457,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672238889,
      "ems": null
    },
    {
      "latitude": 51.572113,
      "longitude": 19.65506,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1672238892,
      "ems": null
    },
    {
      "latitude": 51.573082,
      "longitude": 19.654388,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -1600,
        "ms": -8.1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672238895,
      "ems": null
    },
    {
      "latitude": 51.57378,
      "longitude": 19.653625,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672238898,
      "ems": null
    },
    {
      "latitude": 51.574387,
      "longitude": 19.652405,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -1920,
        "ms": -9.8
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672238901,
      "ems": null
    },
    {
      "latitude": 51.574574,
      "longitude": 19.651184,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 96.3,
        "kts": 52,
        "mph": 59.8
      },
      "verticalSpeed": {
        "fpm": -1920,
        "ms": -9.8
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672238904,
      "ems": null
    },
    {
      "latitude": 51.574448,
      "longitude": 19.650162,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -1856,
        "ms": -9.4
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672238907,
      "ems": null
    },
    {
      "latitude": 51.574013,
      "longitude": 19.649353,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": -1984,
        "ms": -10.1
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672238910,
      "ems": null
    },
    {
      "latitude": 51.573269,
      "longitude": 19.648819,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 94.5,
        "kts": 51,
        "mph": 58.7
      },
      "verticalSpeed": {
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1672238913,
      "ems": null
    },
    {
      "latitude": 51.572617,
      "longitude": 19.648666,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1672238916,
      "ems": null
    },
    {
      "latitude": 51.571827,
      "longitude": 19.648743,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1672238919,
      "ems": null
    },
    {
      "latitude": 51.570942,
      "longitude": 19.648895,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1672238922,
      "ems": null
    },
    {
      "latitude": 51.570057,
      "longitude": 19.649124,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1672238925,
      "ems": null
    },
    {
      "latitude": 51.569183,
      "longitude": 19.649345,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1672238928,
      "ems": null
    },
    {
      "latitude": 51.568333,
      "longitude": 19.649658,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1672238931,
      "ems": null
    },
    {
      "latitude": 51.567169,
      "longitude": 19.649939,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1672238934,
      "ems": null
    },
    {
      "latitude": 51.566288,
      "longitude": 19.65004,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1672238937,
      "ems": null
    },
    {
      "latitude": 51.564285,
      "longitude": 19.65004,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1672238943,
      "ems": null
    },
    {
      "latitude": 51.563232,
      "longitude": 19.649641,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1672238946,
      "ems": null
    },
    {
      "latitude": 51.562283,
      "longitude": 19.648819,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1672238949,
      "ems": null
    },
    {
      "latitude": 51.561447,
      "longitude": 19.647711,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1672238952,
      "ems": null
    },
    {
      "latitude": 51.560944,
      "longitude": 19.646748,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "squawk": "7000",
      "timestamp": 1672238955,
      "ems": null
    },
    {
      "latitude": 51.560421,
      "longitude": 19.645462,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1672238958,
      "ems": null
    },
    {
      "latitude": 51.560028,
      "longitude": 19.643778,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672238961,
      "ems": null
    },
    {
      "latitude": 51.559982,
      "longitude": 19.641996,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672238964,
      "ems": null
    },
    {
      "latitude": 51.560028,
      "longitude": 19.641031,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672238966,
      "ems": null
    },
    {
      "latitude": 51.560394,
      "longitude": 19.638803,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1672238970,
      "ems": null
    },
    {
      "latitude": 51.560898,
      "longitude": 19.636799,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672238973,
      "ems": null
    },
    {
      "latitude": 51.561443,
      "longitude": 19.63501,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672238976,
      "ems": null
    },
    {
      "latitude": 51.562088,
      "longitude": 19.63331,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672238979,
      "ems": null
    },
    {
      "latitude": 51.562889,
      "longitude": 19.631653,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1672238982,
      "ems": null
    },
    {
      "latitude": 51.563866,
      "longitude": 19.630127,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672238985,
      "ems": null
    },
    {
      "latitude": 51.565063,
      "longitude": 19.628708,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1672238988,
      "ems": null
    },
    {
      "latitude": 51.566162,
      "longitude": 19.627594,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672238990,
      "ems": null
    },
    {
      "latitude": 51.567635,
      "longitude": 19.626236,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672238994,
      "ems": null
    },
    {
      "latitude": 51.568802,
      "longitude": 19.62532,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672238997,
      "ems": null
    },
    {
      "latitude": 51.570328,
      "longitude": 19.62418,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672239000,
      "ems": null
    },
    {
      "latitude": 51.571289,
      "longitude": 19.623512,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672239002,
      "ems": null
    },
    {
      "latitude": 51.573395,
      "longitude": 19.62188,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672239006,
      "ems": null
    },
    {
      "latitude": 51.574677,
      "longitude": 19.620617,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672239010,
      "ems": null
    },
    {
      "latitude": 51.5755,
      "longitude": 19.619726,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1672239012,
      "ems": null
    },
    {
      "latitude": 51.577789,
      "longitude": 19.61698,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672239018,
      "ems": null
    },
    {
      "latitude": 51.578903,
      "longitude": 19.615631,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672239021,
      "ems": null
    },
    {
      "latitude": 51.579926,
      "longitude": 19.614258,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672239024,
      "ems": null
    },
    {
      "latitude": 51.580902,
      "longitude": 19.612896,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672239027,
      "ems": null
    },
    {
      "latitude": 51.581928,
      "longitude": 19.611435,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672239030,
      "ems": null
    },
    {
      "latitude": 51.582905,
      "longitude": 19.610138,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672239033,
      "ems": null
    },
    {
      "latitude": 51.584106,
      "longitude": 19.608591,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672239037,
      "ems": null
    },
    {
      "latitude": 51.585186,
      "longitude": 19.607086,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672239040,
      "ems": null
    },
    {
      "latitude": 51.587559,
      "longitude": 19.604187,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672239046,
      "ems": null
    },
    {
      "latitude": 51.589966,
      "longitude": 19.60154,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672239052,
      "ems": null
    },
    {
      "latitude": 51.591286,
      "longitude": 19.60022,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672239055,
      "ems": null
    },
    {
      "latitude": 51.592529,
      "longitude": 19.598867,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672239058,
      "ems": null
    },
    {
      "latitude": 51.594589,
      "longitude": 19.596046,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672239064,
      "ems": null
    },
    {
      "latitude": 51.595566,
      "longitude": 19.594421,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1672239067,
      "ems": null
    },
    {
      "latitude": 51.59642,
      "longitude": 19.592928,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672239070,
      "ems": null
    },
    {
      "latitude": 51.597382,
      "longitude": 19.59137,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1672239073,
      "ems": null
    },
    {
      "latitude": 51.598408,
      "longitude": 19.589691,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672239076,
      "ems": null
    },
    {
      "latitude": 51.599339,
      "longitude": 19.588318,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672239079,
      "ems": null
    },
    {
      "latitude": 51.600361,
      "longitude": 19.586792,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672239082,
      "ems": null
    },
    {
      "latitude": 51.601501,
      "longitude": 19.585283,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672239085,
      "ems": null
    },
    {
      "latitude": 51.602551,
      "longitude": 19.58374,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672239088,
      "ems": null
    },
    {
      "latitude": 51.603607,
      "longitude": 19.581942,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672239091,
      "ems": null
    },
    {
      "latitude": 51.605621,
      "longitude": 19.578323,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672239097,
      "ems": null
    },
    {
      "latitude": 51.607719,
      "longitude": 19.574661,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672239103,
      "ems": null
    },
    {
      "latitude": 51.609859,
      "longitude": 19.571152,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "timestamp": 1672239109,
      "ems": null
    },
    {
      "latitude": 51.612122,
      "longitude": 19.56769,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672239115,
      "ems": null
    },
    {
      "latitude": 51.614365,
      "longitude": 19.564276,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672239121,
      "ems": null
    },
    {
      "latitude": 51.615353,
      "longitude": 19.562759,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672239124,
      "ems": null
    },
    {
      "latitude": 51.617538,
      "longitude": 19.559326,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672239130,
      "ems": null
    },
    {
      "latitude": 51.619915,
      "longitude": 19.555664,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672239136,
      "ems": null
    },
    {
      "latitude": 51.622192,
      "longitude": 19.55262,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672239142,
      "ems": null
    },
    {
      "latitude": 51.623337,
      "longitude": 19.551062,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672239145,
      "ems": null
    },
    {
      "latitude": 51.623779,
      "longitude": 19.550552,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672239146,
      "ems": null
    },
    {
      "latitude": 51.625305,
      "longitude": 19.548834,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1672239150,
      "ems": null
    },
    {
      "latitude": 51.626312,
      "longitude": 19.547796,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672239152,
      "ems": null
    },
    {
      "latitude": 51.627686,
      "longitude": 19.546236,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672239156,
      "ems": null
    },
    {
      "latitude": 51.628784,
      "longitude": 19.544752,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672239159,
      "ems": null
    },
    {
      "latitude": 51.630798,
      "longitude": 19.541338,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672239165,
      "ems": null
    },
    {
      "latitude": 51.631504,
      "longitude": 19.539795,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672239168,
      "ems": null
    },
    {
      "latitude": 51.632309,
      "longitude": 19.537996,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672239171,
      "ems": null
    },
    {
      "latitude": 51.632996,
      "longitude": 19.536289,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672239174,
      "ems": null
    },
    {
      "latitude": 51.633553,
      "longitude": 19.534912,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672239176,
      "ems": null
    },
    {
      "latitude": 51.633881,
      "longitude": 19.534149,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672239178,
      "ems": null
    },
    {
      "latitude": 51.634872,
      "longitude": 19.531612,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672239182,
      "ems": null
    },
    {
      "latitude": 51.635193,
      "longitude": 19.53087,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672239184,
      "ems": null
    },
    {
      "latitude": 51.635975,
      "longitude": 19.528809,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672239188,
      "ems": null
    },
    {
      "latitude": 51.636719,
      "longitude": 19.52652,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672239192,
      "ems": null
    },
    {
      "latitude": 51.637482,
      "longitude": 19.524042,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672239196,
      "ems": null
    },
    {
      "latitude": 51.638115,
      "longitude": 19.52179,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672239200,
      "ems": null
    },
    {
      "latitude": 51.638813,
      "longitude": 19.519348,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672239204,
      "ems": null
    },
    {
      "latitude": 51.639359,
      "longitude": 19.517361,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672239208,
      "ems": null
    },
    {
      "latitude": 51.640182,
      "longitude": 19.514465,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "squawk": "7000",
      "timestamp": 1672239212,
      "ems": null
    },
    {
      "latitude": 51.641327,
      "longitude": 19.511185,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672239219,
      "ems": null
    },
    {
      "latitude": 51.642883,
      "longitude": 19.506744,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672239225,
      "ems": null
    },
    {
      "latitude": 51.644169,
      "longitude": 19.502563,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672239233,
      "ems": null
    },
    {
      "latitude": 51.645493,
      "longitude": 19.498579,
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1672239238,
      "ems": null
    },
    {
      "latitude": 51.646309,
      "longitude": 19.496689,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672239241,
      "ems": null
    },
    {
      "latitude": 51.647186,
      "longitude": 19.49509,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672239245,
      "ems": null
    },
    {
      "latitude": 51.648285,
      "longitude": 19.493309,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672239248,
      "ems": null
    },
    {
      "latitude": 51.649429,
      "longitude": 19.49173,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672239251,
      "ems": null
    },
    {
      "latitude": 51.650497,
      "longitude": 19.490204,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672239254,
      "ems": null
    },
    {
      "latitude": 51.651382,
      "longitude": 19.488983,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672239256,
      "ems": null
    },
    {
      "latitude": 51.652454,
      "longitude": 19.487381,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672239260,
      "ems": null
    },
    {
      "latitude": 51.653412,
      "longitude": 19.486034,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672239263,
      "ems": null
    },
    {
      "latitude": 51.654419,
      "longitude": 19.484476,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "timestamp": 1672239266,
      "ems": null
    },
    {
      "latitude": 51.655289,
      "longitude": 19.482916,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1672239269,
      "ems": null
    },
    {
      "latitude": 51.656178,
      "longitude": 19.481506,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672239272,
      "ems": null
    },
    {
      "latitude": 51.657166,
      "longitude": 19.480169,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672239275,
      "ems": null
    },
    {
      "latitude": 51.658218,
      "longitude": 19.478834,
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672239278,
      "ems": null
    },
    {
      "latitude": 51.659485,
      "longitude": 19.477463,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672239281,
      "ems": null
    },
    {
      "latitude": 51.660645,
      "longitude": 19.476311,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672239284,
      "ems": null
    },
    {
      "latitude": 51.661835,
      "longitude": 19.475122,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672239287,
      "ems": null
    },
    {
      "latitude": 51.662979,
      "longitude": 19.474083,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672239290,
      "ems": null
    },
    {
      "latitude": 51.66423,
      "longitude": 19.472885,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672239293,
      "ems": null
    },
    {
      "latitude": 51.665451,
      "longitude": 19.471708,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672239296,
      "ems": null
    },
    {
      "latitude": 51.666698,
      "longitude": 19.47052,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "timestamp": 1672239299,
      "ems": null
    },
    {
      "latitude": 51.667816,
      "longitude": 19.469223,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672239302,
      "ems": null
    },
    {
      "latitude": 51.67012,
      "longitude": 19.466364,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672239308,
      "ems": null
    },
    {
      "latitude": 51.670982,
      "longitude": 19.465256,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672239310,
      "ems": null
    },
    {
      "latitude": 51.672287,
      "longitude": 19.463501,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672239314,
      "ems": null
    },
    {
      "latitude": 51.673279,
      "longitude": 19.462057,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672239317,
      "ems": null
    },
    {
      "latitude": 51.67424,
      "longitude": 19.460722,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672239320,
      "ems": null
    },
    {
      "latitude": 51.675339,
      "longitude": 19.459162,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672239323,
      "ems": null
    },
    {
      "latitude": 51.676254,
      "longitude": 19.457752,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672239326,
      "ems": null
    },
    {
      "latitude": 51.677261,
      "longitude": 19.45612,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1672239329,
      "ems": null
    },
    {
      "latitude": 51.678196,
      "longitude": 19.454498,
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672239332,
      "ems": null
    },
    {
      "latitude": 51.678909,
      "longitude": 19.452852,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672239335,
      "ems": null
    },
    {
      "latitude": 51.679642,
      "longitude": 19.450996,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672239338,
      "ems": null
    },
    {
      "latitude": 51.680199,
      "longitude": 19.449615,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672239341,
      "ems": null
    },
    {
      "latitude": 51.680878,
      "longitude": 19.447805,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672239344,
      "ems": null
    },
    {
      "latitude": 51.681656,
      "longitude": 19.446024,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672239347,
      "ems": null
    },
    {
      "latitude": 51.682343,
      "longitude": 19.444351,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672239350,
      "ems": null
    },
    {
      "latitude": 51.683132,
      "longitude": 19.442673,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672239353,
      "ems": null
    },
    {
      "latitude": 51.683945,
      "longitude": 19.440901,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672239356,
      "ems": null
    },
    {
      "latitude": 51.684761,
      "longitude": 19.439316,
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672239359,
      "ems": null
    },
    {
      "latitude": 51.686371,
      "longitude": 19.435854,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672239365,
      "ems": null
    },
    {
      "latitude": 51.688019,
      "longitude": 19.432373,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672239371,
      "ems": null
    },
    {
      "latitude": 51.688858,
      "longitude": 19.430618,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672239374,
      "ems": null
    },
    {
      "latitude": 51.690399,
      "longitude": 19.427168,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672239380,
      "ems": null
    },
    {
      "latitude": 51.691929,
      "longitude": 19.423523,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672239386,
      "ems": null
    },
    {
      "latitude": 51.692551,
      "longitude": 19.422047,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672239388,
      "ems": null
    },
    {
      "latitude": 51.694164,
      "longitude": 19.41803,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672239395,
      "ems": null
    },
    {
      "latitude": 51.695572,
      "longitude": 19.414474,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672239401,
      "ems": null
    },
    {
      "latitude": 51.697239,
      "longitude": 19.410858,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672239407,
      "ems": null
    },
    {
      "latitude": 51.698181,
      "longitude": 19.409576,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672239410,
      "ems": null
    },
    {
      "latitude": 51.69952,
      "longitude": 19.408417,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672239413,
      "ems": null
    },
    {
      "latitude": 51.701019,
      "longitude": 19.407942,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672239416,
      "ems": null
    },
    {
      "latitude": 51.702576,
      "longitude": 19.408016,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672239419,
      "ems": null
    },
    {
      "latitude": 51.704033,
      "longitude": 19.408646,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1672239422,
      "ems": null
    },
    {
      "latitude": 51.705479,
      "longitude": 19.409714,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1672239425,
      "ems": null
    },
    {
      "latitude": 51.706642,
      "longitude": 19.410858,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1672239428,
      "ems": null
    },
    {
      "latitude": 51.708206,
      "longitude": 19.412619,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1672239431,
      "ems": null
    },
    {
      "latitude": 51.709343,
      "longitude": 19.414139,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1672239434,
      "ems": null
    },
    {
      "latitude": 51.710457,
      "longitude": 19.41597,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1672239437,
      "ems": null
    },
    {
      "latitude": 51.711529,
      "longitude": 19.417725,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1672239440,
      "ems": null
    },
    {
      "latitude": 51.712463,
      "longitude": 19.419523,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1672239443,
      "ems": null
    },
    {
      "latitude": 51.713287,
      "longitude": 19.421379,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672239446,
      "ems": null
    },
    {
      "latitude": 51.714157,
      "longitude": 19.423456,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1672239449,
      "ems": null
    },
    {
      "latitude": 51.714836,
      "longitude": 19.42543,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1672239453,
      "ems": null
    },
    {
      "latitude": 51.715626,
      "longitude": 19.42749,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1672239455,
      "ems": null
    },
    {
      "latitude": 51.716415,
      "longitude": 19.42955,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 58,
      "squawk": "7000",
      "timestamp": 1672239458,
      "ems": null
    },
    {
      "latitude": 51.7173,
      "longitude": 19.431839,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1672239461,
      "ems": null
    },
    {
      "latitude": 51.717999,
      "longitude": 19.433899,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239464,
      "ems": null
    },
    {
      "latitude": 51.718697,
      "longitude": 19.436188,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239467,
      "ems": null
    },
    {
      "latitude": 51.719536,
      "longitude": 19.438782,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239471,
      "ems": null
    },
    {
      "latitude": 51.72028,
      "longitude": 19.441147,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239474,
      "ems": null
    },
    {
      "latitude": 51.721024,
      "longitude": 19.443501,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239477,
      "ems": null
    },
    {
      "latitude": 51.722717,
      "longitude": 19.447582,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1672239483,
      "ems": null
    },
    {
      "latitude": 51.724045,
      "longitude": 19.449587,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1672239486,
      "ems": null
    },
    {
      "latitude": 51.725403,
      "longitude": 19.45076,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1672239489,
      "ems": null
    },
    {
      "latitude": 51.726986,
      "longitude": 19.451599,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1672239492,
      "ems": null
    },
    {
      "latitude": 51.728474,
      "longitude": 19.451828,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1672239495,
      "ems": null
    },
    {
      "latitude": 51.729538,
      "longitude": 19.451666,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672239497,
      "ems": null
    },
    {
      "latitude": 51.730865,
      "longitude": 19.450626,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672239501,
      "ems": null
    },
    {
      "latitude": 51.731686,
      "longitude": 19.449234,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672239504,
      "ems": null
    },
    {
      "latitude": 51.732059,
      "longitude": 19.447784,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672239506,
      "ems": null
    },
    {
      "latitude": 51.732101,
      "longitude": 19.446394,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1672239510,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.444761,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672239513,
      "ems": null
    },
    {
      "latitude": 51.731731,
      "longitude": 19.443207,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672239516,
      "ems": null
    },
    {
      "latitude": 51.731598,
      "longitude": 19.441866,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672239519,
      "ems": null
    },
    {
      "latitude": 51.731415,
      "longitude": 19.440605,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672239522,
      "ems": null
    },
    {
      "latitude": 51.73122,
      "longitude": 19.439392,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672239525,
      "ems": null
    },
    {
      "latitude": 51.731094,
      "longitude": 19.438675,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672239528,
      "ems": null
    },
    {
      "latitude": 51.730774,
      "longitude": 19.437561,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672239530,
      "ems": null
    },
    {
      "latitude": 51.730335,
      "longitude": 19.436264,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1672239533,
      "ems": null
    },
    {
      "latitude": 51.729858,
      "longitude": 19.434666,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672239537,
      "ems": null
    },
    {
      "latitude": 51.729767,
      "longitude": 19.434221,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672239539,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.432142,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672239543,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.43088,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672239545,
      "ems": null
    },
    {
      "latitude": 51.72876,
      "longitude": 19.42947,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672239548,
      "ems": null
    },
    {
      "latitude": 51.728439,
      "longitude": 19.427984,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672239551,
      "ems": null
    },
    {
      "latitude": 51.728054,
      "longitude": 19.42627,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672239554,
      "ems": null
    },
    {
      "latitude": 51.727295,
      "longitude": 19.423235,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672239561,
      "ems": null
    },
    {
      "latitude": 51.727032,
      "longitude": 19.421997,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672239563,
      "ems": null
    },
    {
      "latitude": 51.726612,
      "longitude": 19.42009,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672239567,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 19.418707,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672239569,
      "ems": null
    },
    {
      "latitude": 51.725647,
      "longitude": 19.415291,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672239575,
      "ems": null
    },
    {
      "latitude": 51.724888,
      "longitude": 19.412155,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672239582,
      "ems": null
    },
    {
      "latitude": 51.724319,
      "longitude": 19.409428,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672239587,
      "ems": null
    },
    {
      "latitude": 51.719723,
      "longitude": 19.388046,
      "altitude": {
        "feet": 650,
        "meters": 198
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672239630,
      "ems": null
    },
    {
      "latitude": 51.719349,
      "longitude": 19.385681,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672239634,
      "ems": null
    },
    {
      "latitude": 51.718781,
      "longitude": 19.38159,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1672239642,
      "ems": null
    },
    {
      "latitude": 51.718418,
      "longitude": 19.378586,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1672239648,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.376678,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1672239651,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 19.375206,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1672239654,
      "ems": null
    },
    {
      "latitude": 51.717957,
      "longitude": 19.373722,
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
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672239657,
      "ems": null
    },
    {
      "latitude": 51.717487,
      "longitude": 19.370499,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672239663,
      "ems": null
    },
    {
      "latitude": 51.717087,
      "longitude": 19.368822,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672239666,
      "ems": null
    },
    {
      "latitude": 51.716648,
      "longitude": 19.367142,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672239670,
      "ems": null
    },
    {
      "latitude": 51.716278,
      "longitude": 19.365845,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672239672,
      "ems": null
    },
    {
      "latitude": 51.715851,
      "longitude": 19.364294,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1672239675,
      "ems": null
    },
    {
      "latitude": 51.715256,
      "longitude": 19.362957,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1672239678,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.361994,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672239681,
      "ems": null
    },
    {
      "latitude": 51.713837,
      "longitude": 19.361103,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1672239685,
      "ems": null
    },
    {
      "latitude": 51.712967,
      "longitude": 19.360582,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1672239688,
      "ems": null
    },
    {
      "latitude": 51.712051,
      "longitude": 19.360138,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1672239691,
      "ems": null
    },
    {
      "latitude": 51.711182,
      "longitude": 19.359989,
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1672239693,
      "ems": null
    },
    {
      "latitude": 51.710037,
      "longitude": 19.359989,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1672239697,
      "ems": null
    },
    {
      "latitude": 51.708939,
      "longitude": 19.360285,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1672239700,
      "ems": null
    },
    {
      "latitude": 51.707851,
      "longitude": 19.360809,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672239703,
      "ems": null
    },
    {
      "latitude": 51.706833,
      "longitude": 19.361622,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1672239705,
      "ems": null
    },
    {
      "latitude": 51.705734,
      "longitude": 19.363031,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1672239709,
      "ems": null
    },
    {
      "latitude": 51.70491,
      "longitude": 19.36474,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1672239712,
      "ems": null
    },
    {
      "latitude": 51.704132,
      "longitude": 19.367041,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672239715,
      "ems": null
    },
    {
      "latitude": 51.703629,
      "longitude": 19.369343,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1672239717,
      "ems": null
    },
    {
      "latitude": 51.703243,
      "longitude": 19.371872,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1672239720,
      "ems": null
    },
    {
      "latitude": 51.702915,
      "longitude": 19.374847,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1672239724,
      "ems": null
    },
    {
      "latitude": 51.70245,
      "longitude": 19.377518,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672239727,
      "ems": null
    },
    {
      "latitude": 51.701935,
      "longitude": 19.380255,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672239730,
      "ems": null
    },
    {
      "latitude": 51.701431,
      "longitude": 19.382778,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672239733,
      "ems": null
    },
    {
      "latitude": 51.701008,
      "longitude": 19.385147,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672239736,
      "ems": null
    },
    {
      "latitude": 51.700562,
      "longitude": 19.387676,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1672239739,
      "ems": null
    },
    {
      "latitude": 51.700287,
      "longitude": 19.389904,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "timestamp": 1672239741,
      "ems": null
    },
    {
      "latitude": 51.700169,
      "longitude": 19.392548,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1672239745,
      "ems": null
    },
    {
      "latitude": 51.70031,
      "longitude": 19.395523,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1672239748,
      "ems": null
    },
    {
      "latitude": 51.700745,
      "longitude": 19.397995,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672239751,
      "ems": null
    },
    {
      "latitude": 51.701336,
      "longitude": 19.400406,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1672239754,
      "ems": null
    },
    {
      "latitude": 51.701984,
      "longitude": 19.402695,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672239757,
      "ems": null
    },
    {
      "latitude": 51.702591,
      "longitude": 19.405212,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672239760,
      "ems": null
    },
    {
      "latitude": 51.703262,
      "longitude": 19.407867,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672239763,
      "ems": null
    },
    {
      "latitude": 51.70385,
      "longitude": 19.410019,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672239766,
      "ems": null
    },
    {
      "latitude": 51.704498,
      "longitude": 19.412395,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1672239769,
      "ems": null
    },
    {
      "latitude": 51.705246,
      "longitude": 19.415131,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672239772,
      "ems": null
    },
    {
      "latitude": 51.705944,
      "longitude": 19.417572,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1672239775,
      "ems": null
    },
    {
      "latitude": 51.706604,
      "longitude": 19.419893,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1672239778,
      "ems": null
    },
    {
      "latitude": 51.70734,
      "longitude": 19.422302,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239781,
      "ems": null
    },
    {
      "latitude": 51.708847,
      "longitude": 19.427021,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239787,
      "ems": null
    },
    {
      "latitude": 51.709579,
      "longitude": 19.429321,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239790,
      "ems": null
    },
    {
      "latitude": 51.710312,
      "longitude": 19.431549,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239793,
      "ems": null
    },
    {
      "latitude": 51.711716,
      "longitude": 19.436188,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1672239799,
      "ems": null
    },
    {
      "latitude": 51.713058,
      "longitude": 19.44068,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672239805,
      "ems": null
    },
    {
      "latitude": 51.714706,
      "longitude": 19.445208,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 59,
      "squawk": "7000",
      "timestamp": 1672239811,
      "ems": null
    },
    {
      "latitude": 51.716511,
      "longitude": 19.449844,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672239817,
      "ems": null
    },
    {
      "latitude": 51.71772,
      "longitude": 19.451752,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1672239820,
      "ems": null
    },
    {
      "latitude": 51.719116,
      "longitude": 19.453201,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1672239823,
      "ems": null
    },
    {
      "latitude": 51.720886,
      "longitude": 19.454041,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1672239827,
      "ems": null
    },
    {
      "latitude": 51.72205,
      "longitude": 19.454269,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672239829,
      "ems": null
    },
    {
      "latitude": 51.723953,
      "longitude": 19.454115,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672239832,
      "ems": null
    },
    {
      "latitude": 51.725494,
      "longitude": 19.453812,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672239836,
      "ems": null
    },
    {
      "latitude": 51.726929,
      "longitude": 19.453447,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672239839,
      "ems": null
    },
    {
      "latitude": 51.728302,
      "longitude": 19.453075,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672239841,
      "ems": null
    },
    {
      "latitude": 51.729683,
      "longitude": 19.452438,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 185.2,
        "kts": 100,
        "mph": 115.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1672239844,
      "ems": null
    },
    {
      "latitude": 51.73082,
      "longitude": 19.451443,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672239847,
      "ems": null
    },
    {
      "latitude": 51.731686,
      "longitude": 19.449921,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672239850,
      "ems": null
    },
    {
      "latitude": 51.732197,
      "longitude": 19.448166,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672239853,
      "ems": null
    },
    {
      "latitude": 51.732422,
      "longitude": 19.446247,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672239857,
      "ems": null
    },
    {
      "latitude": 51.732422,
      "longitude": 19.446024,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1672239859,
      "ems": null
    },
    {
      "latitude": 51.732105,
      "longitude": 19.443436,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672239862,
      "ems": null
    },
    {
      "latitude": 51.731548,
      "longitude": 19.441452,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672239866,
      "ems": null
    },
    {
      "latitude": 51.731094,
      "longitude": 19.44001,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1672239869,
      "ems": null
    },
    {
      "latitude": 51.730637,
      "longitude": 19.438749,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1672239871,
      "ems": null
    },
    {
      "latitude": 51.730225,
      "longitude": 19.437561,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1672239874,
      "ems": null
    },
    {
      "latitude": 51.72987,
      "longitude": 19.43573,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1672239877,
      "ems": null
    },
    {
      "latitude": 51.729675,
      "longitude": 19.433924,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672239881,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.432526,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672239884,
      "ems": null
    },
    {
      "latitude": 51.729263,
      "longitude": 19.431326,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672239886,
      "ems": null
    },
    {
      "latitude": 51.728802,
      "longitude": 19.429703,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672239890,
      "ems": null
    },
    {
      "latitude": 51.728531,
      "longitude": 19.428728,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672239892,
      "ems": null
    },
    {
      "latitude": 51.727936,
      "longitude": 19.426426,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672239897,
      "ems": null
    },
    {
      "latitude": 51.727589,
      "longitude": 19.42482,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672239900,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.42337,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672239903,
      "ems": null
    },
    {
      "latitude": 51.726791,
      "longitude": 19.420191,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672239909,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.418707,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672239912,
      "ems": null
    },
    {
      "latitude": 51.726105,
      "longitude": 19.417147,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672239915,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.41507,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672239919,
      "ems": null
    },
    {
      "latitude": 51.724609,
      "longitude": 19.410629,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672239927,
      "ems": null
    },
    {
      "latitude": 51.723774,
      "longitude": 19.407043,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672239933,
      "ems": null
    },
    {
      "latitude": 51.719284,
      "longitude": 19.386118,
      "altitude": {
        "feet": 650,
        "meters": 198
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672239978,
      "ems": null
    },
    {
      "latitude": 51.718735,
      "longitude": 19.382704,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672239984,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 19.378918,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672239992,
      "ems": null
    },
    {
      "latitude": 51.71772,
      "longitude": 19.375839,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672239998,
      "ems": null
    },
    {
      "latitude": 51.717453,
      "longitude": 19.374464,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672240001,
      "ems": null
    },
    {
      "latitude": 51.717117,
      "longitude": 19.373322,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672240005,
      "ems": null
    },
    {
      "latitude": 51.716789,
      "longitude": 19.372101,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 107.4,
        "kts": 58,
        "mph": 66.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672240007,
      "ems": null
    },
    {
      "latitude": 51.716492,
      "longitude": 19.370901,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672240010,
      "ems": null
    },
    {
      "latitude": 51.716171,
      "longitude": 19.369787,
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
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672240014,
      "ems": null
    },
    {
      "latitude": 51.715904,
      "longitude": 19.368744,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 92.6,
        "kts": 50,
        "mph": 57.5
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672240016,
      "ems": null
    },
    {
      "latitude": 51.71558,
      "longitude": 19.367752,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1672240019,
      "ems": null
    },
    {
      "latitude": 51.715115,
      "longitude": 19.367065,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1672240023,
      "ems": null
    },
    {
      "latitude": 51.714478,
      "longitude": 19.366596,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1672240026,
      "ems": null
    },
    {
      "latitude": 51.71381,
      "longitude": 19.366455,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1672240028,
      "ems": null
    },
    {
      "latitude": 51.712925,
      "longitude": 19.366608,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1672240032,
      "ems": null
    },
    {
      "latitude": 51.71204,
      "longitude": 19.366913,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1672240035,
      "ems": null
    },
    {
      "latitude": 51.711018,
      "longitude": 19.367447,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672240038,
      "ems": null
    },
    {
      "latitude": 51.710083,
      "longitude": 19.368303,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1672240040,
      "ems": null
    },
    {
      "latitude": 51.708893,
      "longitude": 19.369638,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672240043,
      "ems": null
    },
    {
      "latitude": 51.707943,
      "longitude": 19.371414,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1672240046,
      "ems": null
    },
    {
      "latitude": 51.707108,
      "longitude": 19.373722,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672240050,
      "ems": null
    },
    {
      "latitude": 51.706512,
      "longitude": 19.376245,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1672240052,
      "ems": null
    },
    {
      "latitude": 51.70599,
      "longitude": 19.379044,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672240056,
      "ems": null
    },
    {
      "latitude": 51.705383,
      "longitude": 19.381943,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1672240059,
      "ems": null
    },
    {
      "latitude": 51.704865,
      "longitude": 19.384411,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1672240061,
      "ems": null
    },
    {
      "latitude": 51.70422,
      "longitude": 19.387436,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672240065,
      "ems": null
    },
    {
      "latitude": 51.703709,
      "longitude": 19.390182,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672240068,
      "ems": null
    },
    {
      "latitude": 51.703262,
      "longitude": 19.393097,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672240071,
      "ems": null
    },
    {
      "latitude": 51.703033,
      "longitude": 19.39562,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1672240074,
      "ems": null
    },
    {
      "latitude": 51.703056,
      "longitude": 19.398727,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1672240077,
      "ems": null
    },
    {
      "latitude": 51.703262,
      "longitude": 19.402079,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1672240080,
      "ems": null
    },
    {
      "latitude": 51.7034,
      "longitude": 19.405121,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1672240083,
      "ems": null
    },
    {
      "latitude": 51.703445,
      "longitude": 19.405493,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1672240084,
      "ems": null
    },
    {
      "latitude": 51.703663,
      "longitude": 19.408646,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1672240086,
      "ems": null
    },
    {
      "latitude": 51.703754,
      "longitude": 19.409637,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1672240087,
      "ems": null
    },
    {
      "latitude": 51.704041,
      "longitude": 19.412693,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1672240091,
      "ems": null
    },
    {
      "latitude": 51.704315,
      "longitude": 19.415514,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1672240093,
      "ems": null
    },
    {
      "latitude": 51.704685,
      "longitude": 19.418564,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1672240096,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 19.421692,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672240100,
      "ems": null
    },
    {
      "latitude": 51.705505,
      "longitude": 19.424421,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1672240103,
      "ems": null
    },
    {
      "latitude": 51.705898,
      "longitude": 19.426956,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1672240105,
      "ems": null
    },
    {
      "latitude": 51.706329,
      "longitude": 19.429619,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1672240108,
      "ems": null
    },
    {
      "latitude": 51.706879,
      "longitude": 19.432735,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672240111,
      "ems": null
    },
    {
      "latitude": 51.707336,
      "longitude": 19.435038,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672240114,
      "ems": null
    },
    {
      "latitude": 51.707851,
      "longitude": 19.438171,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1672240118,
      "ems": null
    },
    {
      "latitude": 51.708225,
      "longitude": 19.440765,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1672240121,
      "ems": null
    },
    {
      "latitude": 51.708923,
      "longitude": 19.445343,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1672240126,
      "ems": null
    },
    {
      "latitude": 51.709991,
      "longitude": 19.450775,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672240132,
      "ems": null
    },
    {
      "latitude": 51.710831,
      "longitude": 19.453049,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1672240135,
      "ems": null
    },
    {
      "latitude": 51.712143,
      "longitude": 19.455229,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1672240139,
      "ems": null
    },
    {
      "latitude": 51.713562,
      "longitude": 19.456787,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1672240142,
      "ems": null
    },
    {
      "latitude": 51.714798,
      "longitude": 19.457752,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672240145,
      "ems": null
    },
    {
      "latitude": 51.716602,
      "longitude": 19.458618,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1672240148,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 19.459015,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672240151,
      "ems": null
    },
    {
      "latitude": 51.719833,
      "longitude": 19.459087,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1672240154,
      "ems": null
    },
    {
      "latitude": 51.72126,
      "longitude": 19.458771,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672240157,
      "ems": null
    },
    {
      "latitude": 51.72261,
      "longitude": 19.45816,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672240160,
      "ems": null
    },
    {
      "latitude": 51.723866,
      "longitude": 19.457245,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672240163,
      "ems": null
    },
    {
      "latitude": 51.725052,
      "longitude": 19.456194,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672240166,
      "ems": null
    },
    {
      "latitude": 51.725914,
      "longitude": 19.455338,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672240169,
      "ems": null
    },
    {
      "latitude": 51.727341,
      "longitude": 19.453817,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672240172,
      "ems": null
    },
    {
      "latitude": 51.728394,
      "longitude": 19.452631,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672240175,
      "ems": null
    },
    {
      "latitude": 51.729446,
      "longitude": 19.451294,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672240178,
      "ems": null
    },
    {
      "latitude": 51.730244,
      "longitude": 19.449921,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1672240181,
      "ems": null
    },
    {
      "latitude": 51.730709,
      "longitude": 19.448929,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672240183,
      "ems": null
    },
    {
      "latitude": 51.731232,
      "longitude": 19.44684,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672240187,
      "ems": null
    },
    {
      "latitude": 51.731453,
      "longitude": 19.445267,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1672240190,
      "ems": null
    },
    {
      "latitude": 51.731453,
      "longitude": 19.443665,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672240193,
      "ems": null
    },
    {
      "latitude": 51.731277,
      "longitude": 19.442015,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672240196,
      "ems": null
    },
    {
      "latitude": 51.731049,
      "longitude": 19.440754,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672240199,
      "ems": null
    },
    {
      "latitude": 51.73085,
      "longitude": 19.439468,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672240202,
      "ems": null
    },
    {
      "latitude": 51.730545,
      "longitude": 19.437933,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672240205,
      "ems": null
    },
    {
      "latitude": 51.730381,
      "longitude": 19.437103,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672240208,
      "ems": null
    },
    {
      "latitude": 51.730057,
      "longitude": 19.435272,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672240211,
      "ems": null
    },
    {
      "latitude": 51.729813,
      "longitude": 19.433998,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240214,
      "ems": null
    },
    {
      "latitude": 51.729492,
      "longitude": 19.432735,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672240217,
      "ems": null
    },
    {
      "latitude": 51.729172,
      "longitude": 19.4314,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672240220,
      "ems": null
    },
    {
      "latitude": 51.728802,
      "longitude": 19.429932,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672240224,
      "ems": null
    },
    {
      "latitude": 51.728485,
      "longitude": 19.428654,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672240227,
      "ems": null
    },
    {
      "latitude": 51.727936,
      "longitude": 19.425833,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 122.2,
        "kts": 66,
        "mph": 76
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672240233,
      "ems": null
    },
    {
      "latitude": 51.727402,
      "longitude": 19.423065,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240238,
      "ems": null
    },
    {
      "latitude": 51.726746,
      "longitude": 19.420191,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672240245,
      "ems": null
    },
    {
      "latitude": 51.726059,
      "longitude": 19.417295,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672240251,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.414921,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672240255,
      "ems": null
    },
    {
      "latitude": 51.724564,
      "longitude": 19.410477,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240264,
      "ems": null
    },
    {
      "latitude": 51.724319,
      "longitude": 19.409428,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672240266,
      "ems": null
    },
    {
      "latitude": 51.718506,
      "longitude": 19.382481,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240326,
      "ems": null
    },
    {
      "latitude": 51.717911,
      "longitude": 19.37929,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240333,
      "ems": null
    },
    {
      "latitude": 51.71735,
      "longitude": 19.376144,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240338,
      "ems": null
    },
    {
      "latitude": 51.716885,
      "longitude": 19.373093,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672240345,
      "ems": null
    },
    {
      "latitude": 51.716675,
      "longitude": 19.371494,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672240348,
      "ems": null
    },
    {
      "latitude": 51.716537,
      "longitude": 19.370159,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672240350,
      "ems": null
    },
    {
      "latitude": 51.716,
      "longitude": 19.366837,
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672240356,
      "ems": null
    },
    {
      "latitude": 51.715256,
      "longitude": 19.363552,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1672240362,
      "ems": null
    },
    {
      "latitude": 51.714569,
      "longitude": 19.361994,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 137,
        "kts": 74,
        "mph": 85.2
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1672240366,
      "ems": null
    },
    {
      "latitude": 51.713951,
      "longitude": 19.361038,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672240368,
      "ems": null
    },
    {
      "latitude": 51.71302,
      "longitude": 19.360046,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1672240372,
      "ems": null
    },
    {
      "latitude": 51.712051,
      "longitude": 19.359468,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1672240375,
      "ems": null
    },
    {
      "latitude": 51.711063,
      "longitude": 19.359055,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1672240378,
      "ems": null
    },
    {
      "latitude": 51.709991,
      "longitude": 19.358875,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1672240381,
      "ems": null
    },
    {
      "latitude": 51.708801,
      "longitude": 19.35895,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1672240384,
      "ems": null
    },
    {
      "latitude": 51.707664,
      "longitude": 19.359283,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1672240387,
      "ems": null
    },
    {
      "latitude": 51.706467,
      "longitude": 19.359692,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1672240390,
      "ems": null
    },
    {
      "latitude": 51.705338,
      "longitude": 19.360199,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1672240393,
      "ems": null
    },
    {
      "latitude": 51.704269,
      "longitude": 19.360731,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1672240396,
      "ems": null
    },
    {
      "latitude": 51.703011,
      "longitude": 19.361572,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "timestamp": 1672240399,
      "ems": null
    },
    {
      "latitude": 51.701847,
      "longitude": 19.362411,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1672240402,
      "ems": null
    },
    {
      "latitude": 51.700653,
      "longitude": 19.363478,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "squawk": "7000",
      "timestamp": 1672240405,
      "ems": null
    },
    {
      "latitude": 51.699554,
      "longitude": 19.36474,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672240408,
      "ems": null
    },
    {
      "latitude": 51.698448,
      "longitude": 19.366379,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1672240411,
      "ems": null
    },
    {
      "latitude": 51.69775,
      "longitude": 19.368057,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1672240413,
      "ems": null
    },
    {
      "latitude": 51.696945,
      "longitude": 19.370901,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672240417,
      "ems": null
    },
    {
      "latitude": 51.696491,
      "longitude": 19.37355,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672240420,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.376617,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1672240423,
      "ems": null
    },
    {
      "latitude": 51.696167,
      "longitude": 19.378546,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1672240426,
      "ems": null
    },
    {
      "latitude": 51.696121,
      "longitude": 19.382095,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1672240429,
      "ems": null
    },
    {
      "latitude": 51.696259,
      "longitude": 19.385376,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1672240432,
      "ems": null
    },
    {
      "latitude": 51.696491,
      "longitude": 19.388123,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1672240435,
      "ems": null
    },
    {
      "latitude": 51.696808,
      "longitude": 19.391241,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1672240438,
      "ems": null
    },
    {
      "latitude": 51.69722,
      "longitude": 19.394209,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672240441,
      "ems": null
    },
    {
      "latitude": 51.697586,
      "longitude": 19.396809,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1672240444,
      "ems": null
    },
    {
      "latitude": 51.697937,
      "longitude": 19.398727,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1672240446,
      "ems": null
    },
    {
      "latitude": 51.698635,
      "longitude": 19.402618,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1672240450,
      "ems": null
    },
    {
      "latitude": 51.6991,
      "longitude": 19.405212,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672240452,
      "ems": null
    },
    {
      "latitude": 51.699799,
      "longitude": 19.408951,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672240456,
      "ems": null
    },
    {
      "latitude": 51.70031,
      "longitude": 19.411926,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1672240459,
      "ems": null
    },
    {
      "latitude": 51.700653,
      "longitude": 19.413733,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672240461,
      "ems": null
    },
    {
      "latitude": 51.701801,
      "longitude": 19.420853,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672240469,
      "ems": null
    },
    {
      "latitude": 51.70245,
      "longitude": 19.425964,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1672240474,
      "ems": null
    },
    {
      "latitude": 51.702869,
      "longitude": 19.429474,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1672240477,
      "ems": null
    },
    {
      "latitude": 51.703197,
      "longitude": 19.432297,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1672240481,
      "ems": null
    },
    {
      "latitude": 51.703335,
      "longitude": 19.433746,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1672240482,
      "ems": null
    },
    {
      "latitude": 51.703663,
      "longitude": 19.436722,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1672240486,
      "ems": null
    },
    {
      "latitude": 51.704041,
      "longitude": 19.440159,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1672240490,
      "ems": null
    },
    {
      "latitude": 51.704361,
      "longitude": 19.443573,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1672240494,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 19.45076,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1672240502,
      "ems": null
    },
    {
      "latitude": 51.705849,
      "longitude": 19.457397,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1672240510,
      "ems": null
    },
    {
      "latitude": 51.706921,
      "longitude": 19.463959,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1672240518,
      "ems": null
    },
    {
      "latitude": 51.707851,
      "longitude": 19.466324,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1672240522,
      "ems": null
    },
    {
      "latitude": 51.709808,
      "longitude": 19.468842,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1672240526,
      "ems": null
    },
    {
      "latitude": 51.712097,
      "longitude": 19.470074,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1672240531,
      "ems": null
    },
    {
      "latitude": 51.714462,
      "longitude": 19.470215,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672240535,
      "ems": null
    },
    {
      "latitude": 51.715904,
      "longitude": 19.469757,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672240538,
      "ems": null
    },
    {
      "latitude": 51.717255,
      "longitude": 19.46907,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672240541,
      "ems": null
    },
    {
      "latitude": 51.718513,
      "longitude": 19.468231,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672240544,
      "ems": null
    },
    {
      "latitude": 51.71965,
      "longitude": 19.467327,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672240547,
      "ems": null
    },
    {
      "latitude": 51.720291,
      "longitude": 19.466808,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672240550,
      "ems": null
    },
    {
      "latitude": 51.722076,
      "longitude": 19.46525,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "timestamp": 1672240553,
      "ems": null
    },
    {
      "latitude": 51.722855,
      "longitude": 19.464581,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672240556,
      "ems": null
    },
    {
      "latitude": 51.724331,
      "longitude": 19.46312,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672240559,
      "ems": null
    },
    {
      "latitude": 51.725075,
      "longitude": 19.462357,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672240561,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.460831,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672240565,
      "ems": null
    },
    {
      "latitude": 51.72702,
      "longitude": 19.459757,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672240568,
      "ems": null
    },
    {
      "latitude": 51.727451,
      "longitude": 19.459152,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672240569,
      "ems": null
    },
    {
      "latitude": 51.728806,
      "longitude": 19.456936,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672240574,
      "ems": null
    },
    {
      "latitude": 51.729591,
      "longitude": 19.455338,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672240578,
      "ems": null
    },
    {
      "latitude": 51.730499,
      "longitude": 19.453299,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672240582,
      "ems": null
    },
    {
      "latitude": 51.73122,
      "longitude": 19.451294,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672240586,
      "ems": null
    },
    {
      "latitude": 51.731827,
      "longitude": 19.448547,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1672240590,
      "ems": null
    },
    {
      "latitude": 51.732014,
      "longitude": 19.446945,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672240594,
      "ems": null
    },
    {
      "latitude": 51.731873,
      "longitude": 19.444391,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672240598,
      "ems": null
    },
    {
      "latitude": 51.73164,
      "longitude": 19.442673,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1672240602,
      "ems": null
    },
    {
      "latitude": 51.731407,
      "longitude": 19.441376,
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672240606,
      "ems": null
    },
    {
      "latitude": 51.731003,
      "longitude": 19.438824,
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672240610,
      "ems": null
    },
    {
      "latitude": 51.730381,
      "longitude": 19.436417,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672240615,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 19.434591,
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672240619,
      "ems": null
    },
    {
      "latitude": 51.729546,
      "longitude": 19.433136,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672240623,
      "ems": null
    },
    {
      "latitude": 51.729313,
      "longitude": 19.432144,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672240625,
      "ems": null
    },
    {
      "latitude": 51.728943,
      "longitude": 19.430435,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240628,
      "ems": null
    },
    {
      "latitude": 51.728714,
      "longitude": 19.429173,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "timestamp": 1672240631,
      "ems": null
    },
    {
      "latitude": 51.728394,
      "longitude": 19.427689,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672240635,
      "ems": null
    },
    {
      "latitude": 51.727661,
      "longitude": 19.424719,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672240641,
      "ems": null
    },
    {
      "latitude": 51.72702,
      "longitude": 19.421675,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672240647,
      "ems": null
    },
    {
      "latitude": 51.726753,
      "longitude": 19.420319,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240649,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.418633,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240653,
      "ems": null
    },
    {
      "latitude": 51.725784,
      "longitude": 19.415812,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672240659,
      "ems": null
    },
    {
      "latitude": 51.725143,
      "longitude": 19.412991,
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672240664,
      "ems": null
    },
    {
      "latitude": 51.724518,
      "longitude": 19.409943,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240670,
      "ems": null
    },
    {
      "latitude": 51.723862,
      "longitude": 19.407274,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672240676,
      "ems": null
    },
    {
      "latitude": 51.719376,
      "longitude": 19.386044,
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
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240722,
      "ems": null
    },
    {
      "latitude": 51.718872,
      "longitude": 19.383371,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672240728,
      "ems": null
    },
    {
      "latitude": 51.718185,
      "longitude": 19.380341,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672240734,
      "ems": null
    },
    {
      "latitude": 51.717545,
      "longitude": 19.377359,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672240740,
      "ems": null
    },
    {
      "latitude": 51.716885,
      "longitude": 19.374313,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672240746,
      "ems": null
    },
    {
      "latitude": 51.716232,
      "longitude": 19.37149,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672240752,
      "ems": null
    },
    {
      "latitude": 51.715622,
      "longitude": 19.368599,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672240758,
      "ems": null
    },
    {
      "latitude": 51.715393,
      "longitude": 19.367218,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672240761,
      "ems": null
    },
    {
      "latitude": 51.71521,
      "longitude": 19.365778,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1672240764,
      "ems": null
    },
    {
      "latitude": 51.715027,
      "longitude": 19.364368,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672240767,
      "ems": null
    },
    {
      "latitude": 51.714836,
      "longitude": 19.362411,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672240770,
      "ems": null
    },
    {
      "latitude": 51.714615,
      "longitude": 19.360657,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672240774,
      "ems": null
    },
    {
      "latitude": 51.714417,
      "longitude": 19.359055,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672240776,
      "ems": null
    },
    {
      "latitude": 51.714275,
      "longitude": 19.357605,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672240779,
      "ems": null
    },
    {
      "latitude": 51.714088,
      "longitude": 19.35585,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672240782,
      "ems": null
    },
    {
      "latitude": 51.713902,
      "longitude": 19.354248,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672240786,
      "ems": null
    },
    {
      "latitude": 51.713764,
      "longitude": 19.352951,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672240788,
      "ems": null
    },
    {
      "latitude": 51.713669,
      "longitude": 19.351654,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1672240791,
      "ems": null
    },
    {
      "latitude": 51.713345,
      "longitude": 19.348984,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672240797,
      "ems": null
    },
    {
      "latitude": 51.713013,
      "longitude": 19.34774,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672240801,
      "ems": null
    },
    {
      "latitude": 51.712601,
      "longitude": 19.346695,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1672240804,
      "ems": null
    },
    {
      "latitude": 51.71209,
      "longitude": 19.345779,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672240807,
      "ems": null
    },
    {
      "latitude": 51.711548,
      "longitude": 19.344994,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1672240810,
      "ems": null
    },
    {
      "latitude": 51.710907,
      "longitude": 19.3444,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "squawk": "7000",
      "timestamp": 1672240812,
      "ems": null
    },
    {
      "latitude": 51.71022,
      "longitude": 19.34388,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "squawk": "7000",
      "timestamp": 1672240815,
      "ems": null
    },
    {
      "latitude": 51.709579,
      "longitude": 19.343361,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1672240819,
      "ems": null
    },
    {
      "latitude": 51.708801,
      "longitude": 19.342989,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1672240821,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 19.34284,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1672240825,
      "ems": null
    },
    {
      "latitude": 51.707291,
      "longitude": 19.342693,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1672240827,
      "ems": null
    },
    {
      "latitude": 51.706364,
      "longitude": 19.342651,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1672240831,
      "ems": null
    },
    {
      "latitude": 51.705597,
      "longitude": 19.342693,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1672240834,
      "ems": null
    },
    {
      "latitude": 51.704727,
      "longitude": 19.34284,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1672240837,
      "ems": null
    },
    {
      "latitude": 51.70385,
      "longitude": 19.343185,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1672240840,
      "ems": null
    },
    {
      "latitude": 51.703033,
      "longitude": 19.343731,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1672240843,
      "ems": null
    },
    {
      "latitude": 51.702171,
      "longitude": 19.344406,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1672240846,
      "ems": null
    },
    {
      "latitude": 51.701286,
      "longitude": 19.345016,
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1672240849,
      "ems": null
    },
    {
      "latitude": 51.700451,
      "longitude": 19.345779,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1672240852,
      "ems": null
    },
    {
      "latitude": 51.699471,
      "longitude": 19.346848,
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672240855,
      "ems": null
    },
    {
      "latitude": 51.698685,
      "longitude": 19.347815,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672240858,
      "ems": null
    },
    {
      "latitude": 51.697769,
      "longitude": 19.349224,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1672240861,
      "ems": null
    },
    {
      "latitude": 51.696991,
      "longitude": 19.350859,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1672240864,
      "ems": null
    },
    {
      "latitude": 51.696442,
      "longitude": 19.352936,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672240867,
      "ems": null
    },
    {
      "latitude": 51.696075,
      "longitude": 19.355164,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672240870,
      "ems": null
    },
    {
      "latitude": 51.695889,
      "longitude": 19.357376,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1672240873,
      "ems": null
    },
    {
      "latitude": 51.695934,
      "longitude": 19.35997,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1672240876,
      "ems": null
    },
    {
      "latitude": 51.696213,
      "longitude": 19.362661,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1672240879,
      "ems": null
    },
    {
      "latitude": 51.696579,
      "longitude": 19.365334,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672240882,
      "ems": null
    },
    {
      "latitude": 51.696945,
      "longitude": 19.367931,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1672240885,
      "ems": null
    },
    {
      "latitude": 51.697376,
      "longitude": 19.370499,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1672240888,
      "ems": null
    },
    {
      "latitude": 51.697891,
      "longitude": 19.373474,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672240891,
      "ems": null
    },
    {
      "latitude": 51.698364,
      "longitude": 19.376022,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672240894,
      "ems": null
    },
    {
      "latitude": 51.698868,
      "longitude": 19.378843,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1672240897,
      "ems": null
    },
    {
      "latitude": 51.699333,
      "longitude": 19.381485,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 73,
      "squawk": "7000",
      "timestamp": 1672240900,
      "ems": null
    },
    {
      "latitude": 51.69989,
      "longitude": 19.384308,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1672240903,
      "ems": null
    },
    {
      "latitude": 51.700378,
      "longitude": 19.386713,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1672240906,
      "ems": null
    },
    {
      "latitude": 51.700928,
      "longitude": 19.38946,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1672240909,
      "ems": null
    },
    {
      "latitude": 51.701519,
      "longitude": 19.392242,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672240912,
      "ems": null
    },
    {
      "latitude": 51.702499,
      "longitude": 19.397583,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1672240918,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.403458,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1672240924,
      "ems": null
    },
    {
      "latitude": 51.704269,
      "longitude": 19.408611,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 75,
      "squawk": "7000",
      "timestamp": 1672240930,
      "ems": null
    },
    {
      "latitude": 51.705093,
      "longitude": 19.41403,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672240936,
      "ems": null
    },
    {
      "latitude": 51.705429,
      "longitude": 19.41658,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 78,
      "squawk": "7000",
      "timestamp": 1672240939,
      "ems": null
    },
    {
      "latitude": 51.705551,
      "longitude": 19.417519,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1672240940,
      "ems": null
    },
    {
      "latitude": 51.705898,
      "longitude": 19.421158,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1672240944,
      "ems": null
    },
    {
      "latitude": 51.706036,
      "longitude": 19.422531,
      "altitude": {
        "feet": 1600,
        "meters": 488
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1672240946,
      "ems": null
    },
    {
      "latitude": 51.706501,
      "longitude": 19.427338,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1672240951,
      "ems": null
    },
    {
      "latitude": 51.706734,
      "longitude": 19.430161,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1672240954,
      "ems": null
    },
    {
      "latitude": 51.706924,
      "longitude": 19.432661,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1672240957,
      "ems": null
    },
    {
      "latitude": 51.70776,
      "longitude": 19.438171,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672240963,
      "ems": null
    },
    {
      "latitude": 51.708504,
      "longitude": 19.440689,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1672240966,
      "ems": null
    },
    {
      "latitude": 51.709488,
      "longitude": 19.443129,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1672240970,
      "ems": null
    },
    {
      "latitude": 51.710506,
      "longitude": 19.444962,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1672240972,
      "ems": null
    },
    {
      "latitude": 51.71228,
      "longitude": 19.446915,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1672240976,
      "ems": null
    },
    {
      "latitude": 51.713699,
      "longitude": 19.44788,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1672240978,
      "ems": null
    },
    {
      "latitude": 51.715622,
      "longitude": 19.448473,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672240982,
      "ems": null
    },
    {
      "latitude": 51.717087,
      "longitude": 19.448473,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672240984,
      "ems": null
    },
    {
      "latitude": 51.718689,
      "longitude": 19.448101,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672240987,
      "ems": null
    },
    {
      "latitude": 51.720337,
      "longitude": 19.447582,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672240990,
      "ems": null
    },
    {
      "latitude": 51.721676,
      "longitude": 19.447098,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672240993,
      "ems": null
    },
    {
      "latitude": 51.723213,
      "longitude": 19.44664,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672240996,
      "ems": null
    },
    {
      "latitude": 51.724915,
      "longitude": 19.446098,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672241000,
      "ems": null
    },
    {
      "latitude": 51.726151,
      "longitude": 19.445503,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672241002,
      "ems": null
    },
    {
      "latitude": 51.727543,
      "longitude": 19.44458,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672241005,
      "ems": null
    },
    {
      "latitude": 51.728519,
      "longitude": 19.443436,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672241008,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.441866,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672241011,
      "ems": null
    },
    {
      "latitude": 51.729721,
      "longitude": 19.440084,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672241014,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 19.438601,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1672241017,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 19.437042,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672241020,
      "ems": null
    },
    {
      "latitude": 51.729824,
      "longitude": 19.435425,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672241024,
      "ems": null
    },
    {
      "latitude": 51.729591,
      "longitude": 19.433975,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672241026,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.432514,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672241029,
      "ems": null
    },
    {
      "latitude": 51.728943,
      "longitude": 19.431028,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672241032,
      "ems": null
    },
    {
      "latitude": 51.728577,
      "longitude": 19.429544,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672241035,
      "ems": null
    },
    {
      "latitude": 51.728149,
      "longitude": 19.428101,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672241038,
      "ems": null
    },
    {
      "latitude": 51.727936,
      "longitude": 19.427168,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672241040,
      "ems": null
    },
    {
      "latitude": 51.727478,
      "longitude": 19.425091,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672241044,
      "ems": null
    },
    {
      "latitude": 51.727249,
      "longitude": 19.423977,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672241048,
      "ems": null
    },
    {
      "latitude": 51.727032,
      "longitude": 19.422913,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672241050,
      "ems": null
    },
    {
      "latitude": 51.726704,
      "longitude": 19.421005,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672241060,
      "ems": null
    },
    {
      "latitude": 51.725098,
      "longitude": 19.412916,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672241066,
      "ems": null
    },
    {
      "latitude": 51.724472,
      "longitude": 19.409943,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672241071,
      "ems": null
    },
    {
      "latitude": 51.723267,
      "longitude": 19.404602,
      "altitude": {
        "feet": 575,
        "meters": 175
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672241082,
      "ems": null
    },
    {
      "latitude": 51.723507,
      "longitude": 19.406124,
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672241242,
      "ems": null
    },
    {
      "latitude": 51.722061,
      "longitude": 19.407997,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672241288,
      "ems": null
    },
    {
      "latitude": 51.721848,
      "longitude": 19.40822,
      "altitude": {
        "feet": 0,
        "meters": 0
      },
      "speed": {
        "kmh": 20.4,
        "kts": 11,
        "mph": 12.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1672241293,
      "ems": null
    },
    {
      "latitude": 51.721607,
      "longitude": 19.40834,
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1672241298,
      "ems": null
    },
    {
      "latitude": 51.721149,
      "longitude": 19.408424,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1672241306,
      "ems": null
    },
    {
      "latitude": 51.720932,
      "longitude": 19.408463,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1672241312,
      "ems": null
    },
    {
      "latitude": 51.720711,
      "longitude": 19.40836,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1672241318,
      "ems": null
    },
    {
      "latitude": 51.72052,
      "longitude": 19.407906,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1672241327,
      "ems": null
    },
    {
      "latitude": 51.720211,
      "longitude": 19.4067,
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1672241350,
      "ems": null
    },
    {
      "latitude": 51.719971,
      "longitude": 19.406736,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672241370,
      "ems": null
    },
    {
      "latitude": 51.722042,
      "longitude": 19.408016,
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672241383,
      "ems": null
    }
  ]
};
