import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230103EPLLEPLL",
    callsign: "BNI6D",
    name: "4th IFR flight: 2D approaches",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 0, 3, 12, 55).getTime(),
    arrival: new Date(2023, 0, 3, 15, 31).getTime(),
    multiEnginePistonTime: 120 + 36,
    nightTime: 22,
    picTime: 0,
    dualTime: 120 + 36,
    landings: {
      day: 3,
      night: 1,
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
      "latitude": 51.721298,
      "longitude": 19.395174,
      "altitude": {
        "feet": 350,
        "meters": 107
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
      "heading": 255,
      "squawk": "0",
      "timestamp": 1672751118,
      "ems": null
    },
    {
      "latitude": 51.720654,
      "longitude": 19.391556,
      "altitude": {
        "feet": 450,
        "meters": 137
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672751126,
      "ems": null
    },
    {
      "latitude": 51.719833,
      "longitude": 19.388048,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672751132,
      "ems": null
    },
    {
      "latitude": 51.719303,
      "longitude": 19.385223,
      "altitude": {
        "feet": 575,
        "meters": 175
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672751138,
      "ems": null
    },
    {
      "latitude": 51.718597,
      "longitude": 19.381962,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672751144,
      "ems": null
    },
    {
      "latitude": 51.718414,
      "longitude": 19.381145,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672751146,
      "ems": null
    },
    {
      "latitude": 51.718185,
      "longitude": 19.380341,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672751147,
      "ems": null
    },
    {
      "latitude": 51.717911,
      "longitude": 19.379141,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672751150,
      "ems": null
    },
    {
      "latitude": 51.717068,
      "longitude": 19.375839,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672751156,
      "ems": null
    },
    {
      "latitude": 51.716309,
      "longitude": 19.372608,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672751162,
      "ems": null
    },
    {
      "latitude": 51.715897,
      "longitude": 19.370901,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672751165,
      "ems": null
    },
    {
      "latitude": 51.715115,
      "longitude": 19.367599,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672751171,
      "ems": null
    },
    {
      "latitude": 51.714111,
      "longitude": 19.363552,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672751177,
      "ems": null
    },
    {
      "latitude": 51.713837,
      "longitude": 19.361399,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672751181,
      "ems": null
    },
    {
      "latitude": 51.713764,
      "longitude": 19.359512,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672751184,
      "ems": null
    },
    {
      "latitude": 51.713882,
      "longitude": 19.357613,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672751187,
      "ems": null
    },
    {
      "latitude": 51.714088,
      "longitude": 19.355774,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672751189,
      "ems": null
    },
    {
      "latitude": 51.714386,
      "longitude": 19.354496,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672751191,
      "ems": null
    },
    {
      "latitude": 51.715069,
      "longitude": 19.352493,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672751195,
      "ems": null
    },
    {
      "latitude": 51.716045,
      "longitude": 19.350739,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672751199,
      "ems": null
    },
    {
      "latitude": 51.717068,
      "longitude": 19.349518,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672751202,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.348705,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672751205,
      "ems": null
    },
    {
      "latitude": 51.719421,
      "longitude": 19.348186,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672751207,
      "ems": null
    },
    {
      "latitude": 51.72084,
      "longitude": 19.347963,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1672751211,
      "ems": null
    },
    {
      "latitude": 51.722141,
      "longitude": 19.348068,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672751214,
      "ems": null
    },
    {
      "latitude": 51.723541,
      "longitude": 19.34845,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672751217,
      "ems": null
    },
    {
      "latitude": 51.724983,
      "longitude": 19.348755,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672751220,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.349003,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672751223,
      "ems": null
    },
    {
      "latitude": 51.727524,
      "longitude": 19.349152,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1672751226,
      "ems": null
    },
    {
      "latitude": 51.728897,
      "longitude": 19.349224,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1672751229,
      "ems": null
    },
    {
      "latitude": 51.730289,
      "longitude": 19.349365,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1672751232,
      "ems": null
    },
    {
      "latitude": 51.731873,
      "longitude": 19.349596,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1672751235,
      "ems": null
    },
    {
      "latitude": 51.733082,
      "longitude": 19.34967,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1672751238,
      "ems": null
    },
    {
      "latitude": 51.736221,
      "longitude": 19.34967,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672751244,
      "ems": null
    },
    {
      "latitude": 51.737778,
      "longitude": 19.349596,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672751247,
      "ems": null
    },
    {
      "latitude": 51.739426,
      "longitude": 19.349596,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672751250,
      "ems": null
    },
    {
      "latitude": 51.740891,
      "longitude": 19.349447,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672751253,
      "ems": null
    },
    {
      "latitude": 51.742355,
      "longitude": 19.349447,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672751256,
      "ems": null
    },
    {
      "latitude": 51.74514,
      "longitude": 19.349365,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672751262,
      "ems": null
    },
    {
      "latitude": 51.746628,
      "longitude": 19.349365,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672751265,
      "ems": null
    },
    {
      "latitude": 51.749634,
      "longitude": 19.349447,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672751271,
      "ems": null
    },
    {
      "latitude": 51.752426,
      "longitude": 19.349447,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1672751277,
      "ems": null
    },
    {
      "latitude": 51.75515,
      "longitude": 19.349289,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672751283,
      "ems": null
    },
    {
      "latitude": 51.758011,
      "longitude": 19.349152,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672751289,
      "ems": null
    },
    {
      "latitude": 51.760593,
      "longitude": 19.348831,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672751295,
      "ems": null
    },
    {
      "latitude": 51.761856,
      "longitude": 19.348631,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672751298,
      "ems": null
    },
    {
      "latitude": 51.763062,
      "longitude": 19.348297,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672751301,
      "ems": null
    },
    {
      "latitude": 51.76442,
      "longitude": 19.348038,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672751304,
      "ems": null
    },
    {
      "latitude": 51.765717,
      "longitude": 19.347687,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672751307,
      "ems": null
    },
    {
      "latitude": 51.766937,
      "longitude": 19.34737,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672751310,
      "ems": null
    },
    {
      "latitude": 51.768173,
      "longitude": 19.347073,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672751313,
      "ems": null
    },
    {
      "latitude": 51.769581,
      "longitude": 19.346695,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672751317,
      "ems": null
    },
    {
      "latitude": 51.772156,
      "longitude": 19.346405,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1672751323,
      "ems": null
    },
    {
      "latitude": 51.773445,
      "longitude": 19.346466,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672751326,
      "ems": null
    },
    {
      "latitude": 51.774628,
      "longitude": 19.346405,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1672751328,
      "ems": null
    },
    {
      "latitude": 51.776051,
      "longitude": 19.34639,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672751332,
      "ems": null
    },
    {
      "latitude": 51.777283,
      "longitude": 19.346256,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672751335,
      "ems": null
    },
    {
      "latitude": 51.780029,
      "longitude": 19.34581,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672751341,
      "ems": null
    },
    {
      "latitude": 51.782639,
      "longitude": 19.345217,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672751346,
      "ems": null
    },
    {
      "latitude": 51.785477,
      "longitude": 19.344475,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672751353,
      "ems": null
    },
    {
      "latitude": 51.786713,
      "longitude": 19.344025,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672751356,
      "ems": null
    },
    {
      "latitude": 51.788132,
      "longitude": 19.34351,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1672751359,
      "ems": null
    },
    {
      "latitude": 51.789368,
      "longitude": 19.342768,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672751362,
      "ems": null
    },
    {
      "latitude": 51.790649,
      "longitude": 19.341728,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672751364,
      "ems": null
    },
    {
      "latitude": 51.792019,
      "longitude": 19.340286,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672751368,
      "ems": null
    },
    {
      "latitude": 51.792995,
      "longitude": 19.338989,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672751371,
      "ems": null
    },
    {
      "latitude": 51.793972,
      "longitude": 19.337463,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672751374,
      "ems": null
    },
    {
      "latitude": 51.794861,
      "longitude": 19.335863,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1672751377,
      "ems": null
    },
    {
      "latitude": 51.795788,
      "longitude": 19.334106,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672751380,
      "ems": null
    },
    {
      "latitude": 51.796627,
      "longitude": 19.332275,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672751383,
      "ems": null
    },
    {
      "latitude": 51.79747,
      "longitude": 19.330221,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672751386,
      "ems": null
    },
    {
      "latitude": 51.798248,
      "longitude": 19.328291,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672751389,
      "ems": null
    },
    {
      "latitude": 51.798954,
      "longitude": 19.326477,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672751392,
      "ems": null
    },
    {
      "latitude": 51.799698,
      "longitude": 19.324341,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672751395,
      "ems": null
    },
    {
      "latitude": 51.800396,
      "longitude": 19.322357,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672751398,
      "ems": null
    },
    {
      "latitude": 51.801003,
      "longitude": 19.320374,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672751401,
      "ems": null
    },
    {
      "latitude": 51.801636,
      "longitude": 19.318195,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672751404,
      "ems": null
    },
    {
      "latitude": 51.802166,
      "longitude": 19.316101,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672751407,
      "ems": null
    },
    {
      "latitude": 51.802677,
      "longitude": 19.313965,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672751410,
      "ems": null
    },
    {
      "latitude": 51.803143,
      "longitude": 19.312134,
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672751413,
      "ems": null
    },
    {
      "latitude": 51.803696,
      "longitude": 19.309956,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672751416,
      "ems": null
    },
    {
      "latitude": 51.80426,
      "longitude": 19.307632,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672751419,
      "ems": null
    },
    {
      "latitude": 51.804775,
      "longitude": 19.305496,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672751422,
      "ems": null
    },
    {
      "latitude": 51.805332,
      "longitude": 19.30336,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672751425,
      "ems": null
    },
    {
      "latitude": 51.80645,
      "longitude": 19.299316,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672751431,
      "ems": null
    },
    {
      "latitude": 51.807724,
      "longitude": 19.295555,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1672751437,
      "ems": null
    },
    {
      "latitude": 51.808403,
      "longitude": 19.293823,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672751440,
      "ems": null
    },
    {
      "latitude": 51.809242,
      "longitude": 19.291916,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672751443,
      "ems": null
    },
    {
      "latitude": 51.810059,
      "longitude": 19.290434,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672751446,
      "ems": null
    },
    {
      "latitude": 51.811058,
      "longitude": 19.288864,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672751449,
      "ems": null
    },
    {
      "latitude": 51.812119,
      "longitude": 19.287539,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672751452,
      "ems": null
    },
    {
      "latitude": 51.8134,
      "longitude": 19.28635,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672751455,
      "ems": null
    },
    {
      "latitude": 51.814735,
      "longitude": 19.285431,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672751458,
      "ems": null
    },
    {
      "latitude": 51.816132,
      "longitude": 19.284897,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672751461,
      "ems": null
    },
    {
      "latitude": 51.817703,
      "longitude": 19.285015,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672751464,
      "ems": null
    },
    {
      "latitude": 51.819157,
      "longitude": 19.285812,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672751467,
      "ems": null
    },
    {
      "latitude": 51.820541,
      "longitude": 19.287241,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1672751470,
      "ems": null
    },
    {
      "latitude": 51.821823,
      "longitude": 19.289394,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1672751473,
      "ems": null
    },
    {
      "latitude": 51.822739,
      "longitude": 19.291843,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 61,
      "squawk": "7000",
      "timestamp": 1672751476,
      "ems": null
    },
    {
      "latitude": 51.823395,
      "longitude": 19.294357,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1672751479,
      "ems": null
    },
    {
      "latitude": 51.824295,
      "longitude": 19.298376,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672751484,
      "ems": null
    },
    {
      "latitude": 51.824883,
      "longitude": 19.301147,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672751487,
      "ems": null
    },
    {
      "latitude": 51.825397,
      "longitude": 19.303436,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672751490,
      "ems": null
    },
    {
      "latitude": 51.826096,
      "longitude": 19.306488,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1672751493,
      "ems": null
    },
    {
      "latitude": 51.826698,
      "longitude": 19.309006,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1672751496,
      "ems": null
    },
    {
      "latitude": 51.827351,
      "longitude": 19.311752,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672751499,
      "ems": null
    },
    {
      "latitude": 51.828049,
      "longitude": 19.314558,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672751502,
      "ems": null
    },
    {
      "latitude": 51.82869,
      "longitude": 19.317305,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751505,
      "ems": null
    },
    {
      "latitude": 51.830097,
      "longitude": 19.32251,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751511,
      "ems": null
    },
    {
      "latitude": 51.831619,
      "longitude": 19.32807,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751517,
      "ems": null
    },
    {
      "latitude": 51.833076,
      "longitude": 19.333572,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751523,
      "ems": null
    },
    {
      "latitude": 51.834503,
      "longitude": 19.339056,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751529,
      "ems": null
    },
    {
      "latitude": 51.835693,
      "longitude": 19.344177,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672751535,
      "ems": null
    },
    {
      "latitude": 51.836334,
      "longitude": 19.347458,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1672751538,
      "ems": null
    },
    {
      "latitude": 51.836708,
      "longitude": 19.350128,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672751541,
      "ems": null
    },
    {
      "latitude": 51.836987,
      "longitude": 19.353027,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1672751544,
      "ems": null
    },
    {
      "latitude": 51.837219,
      "longitude": 19.356003,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1672751547,
      "ems": null
    },
    {
      "latitude": 51.837341,
      "longitude": 19.359024,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1672751550,
      "ems": null
    },
    {
      "latitude": 51.837341,
      "longitude": 19.361994,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1672751553,
      "ems": null
    },
    {
      "latitude": 51.83725,
      "longitude": 19.365185,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1672751556,
      "ems": null
    },
    {
      "latitude": 51.837112,
      "longitude": 19.367931,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1672751559,
      "ems": null
    },
    {
      "latitude": 51.836929,
      "longitude": 19.370901,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1672751562,
      "ems": null
    },
    {
      "latitude": 51.8367,
      "longitude": 19.373796,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1672751565,
      "ems": null
    },
    {
      "latitude": 51.836472,
      "longitude": 19.376839,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1672751568,
      "ems": null
    },
    {
      "latitude": 51.836334,
      "longitude": 19.379364,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1672751571,
      "ems": null
    },
    {
      "latitude": 51.836151,
      "longitude": 19.382553,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1672751574,
      "ems": null
    },
    {
      "latitude": 51.836056,
      "longitude": 19.385757,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1672751577,
      "ems": null
    },
    {
      "latitude": 51.836243,
      "longitude": 19.391388,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1672751583,
      "ems": null
    },
    {
      "latitude": 51.83638,
      "longitude": 19.394358,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1672751586,
      "ems": null
    },
    {
      "latitude": 51.836517,
      "longitude": 19.397327,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 85,
      "squawk": "7000",
      "timestamp": 1672751589,
      "ems": null
    },
    {
      "latitude": 51.836662,
      "longitude": 19.40033,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1672751592,
      "ems": null
    },
    {
      "latitude": 51.836754,
      "longitude": 19.403305,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1672751595,
      "ems": null
    },
    {
      "latitude": 51.8368,
      "longitude": 19.406357,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1672751598,
      "ems": null
    },
    {
      "latitude": 51.836792,
      "longitude": 19.409428,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 89,
      "squawk": "7000",
      "timestamp": 1672751601,
      "ems": null
    },
    {
      "latitude": 51.836838,
      "longitude": 19.415365,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1672751607,
      "ems": null
    },
    {
      "latitude": 51.837204,
      "longitude": 19.421528,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1672751613,
      "ems": null
    },
    {
      "latitude": 51.837547,
      "longitude": 19.424057,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 76,
      "squawk": "7000",
      "timestamp": 1672751616,
      "ems": null
    },
    {
      "latitude": 51.83812,
      "longitude": 19.426947,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1672751619,
      "ems": null
    },
    {
      "latitude": 51.838806,
      "longitude": 19.429693,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672751623,
      "ems": null
    },
    {
      "latitude": 51.839447,
      "longitude": 19.43244,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751625,
      "ems": null
    },
    {
      "latitude": 51.840153,
      "longitude": 19.435196,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672751628,
      "ems": null
    },
    {
      "latitude": 51.84082,
      "longitude": 19.437859,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751631,
      "ems": null
    },
    {
      "latitude": 51.841549,
      "longitude": 19.440689,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751634,
      "ems": null
    },
    {
      "latitude": 51.841877,
      "longitude": 19.441986,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751636,
      "ems": null
    },
    {
      "latitude": 51.842434,
      "longitude": 19.444122,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751638,
      "ems": null
    },
    {
      "latitude": 51.843201,
      "longitude": 19.447138,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751641,
      "ems": null
    },
    {
      "latitude": 51.843739,
      "longitude": 19.449081,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751644,
      "ems": null
    },
    {
      "latitude": 51.844902,
      "longitude": 19.453659,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751651,
      "ems": null
    },
    {
      "latitude": 51.846588,
      "longitude": 19.460648,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1672751656,
      "ems": null
    },
    {
      "latitude": 51.84816,
      "longitude": 19.46701,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672751664,
      "ems": null
    },
    {
      "latitude": 51.850117,
      "longitude": 19.475861,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672751672,
      "ems": null
    },
    {
      "latitude": 51.851048,
      "longitude": 19.480209,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672751680,
      "ems": null
    },
    {
      "latitude": 51.853363,
      "longitude": 19.490265,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751688,
      "ems": null
    },
    {
      "latitude": 51.854507,
      "longitude": 19.49472,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751693,
      "ems": null
    },
    {
      "latitude": 51.856121,
      "longitude": 19.500732,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751699,
      "ems": null
    },
    {
      "latitude": 51.856911,
      "longitude": 19.503479,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1672751702,
      "ems": null
    },
    {
      "latitude": 51.857666,
      "longitude": 19.506151,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1672751705,
      "ems": null
    },
    {
      "latitude": 51.859333,
      "longitude": 19.512177,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751711,
      "ems": null
    },
    {
      "latitude": 51.860779,
      "longitude": 19.517731,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751717,
      "ems": null
    },
    {
      "latitude": 51.862217,
      "longitude": 19.523163,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751723,
      "ems": null
    },
    {
      "latitude": 51.863197,
      "longitude": 19.526901,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751728,
      "ems": null
    },
    {
      "latitude": 51.8652,
      "longitude": 19.535065,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672751736,
      "ems": null
    },
    {
      "latitude": 51.867096,
      "longitude": 19.542377,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751744,
      "ems": null
    },
    {
      "latitude": 51.868362,
      "longitude": 19.547119,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751749,
      "ems": null
    },
    {
      "latitude": 51.870209,
      "longitude": 19.554401,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672751756,
      "ems": null
    },
    {
      "latitude": 51.871483,
      "longitude": 19.560089,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1672751763,
      "ems": null
    },
    {
      "latitude": 51.872864,
      "longitude": 19.566204,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1672751768,
      "ems": null
    },
    {
      "latitude": 51.874695,
      "longitude": 19.573822,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672751776,
      "ems": null
    },
    {
      "latitude": 51.876022,
      "longitude": 19.578899,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1672751782,
      "ems": null
    },
    {
      "latitude": 51.877674,
      "longitude": 19.585037,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672751788,
      "ems": null
    },
    {
      "latitude": 51.878998,
      "longitude": 19.590998,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672751794,
      "ems": null
    },
    {
      "latitude": 51.880188,
      "longitude": 19.596939,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1672751800,
      "ems": null
    },
    {
      "latitude": 51.880737,
      "longitude": 19.599833,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1672751803,
      "ems": null
    },
    {
      "latitude": 51.881351,
      "longitude": 19.602966,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1672751806,
      "ems": null
    },
    {
      "latitude": 51.882515,
      "longitude": 19.608612,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1672751813,
      "ems": null
    },
    {
      "latitude": 51.88382,
      "longitude": 19.615021,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1672751818,
      "ems": null
    },
    {
      "latitude": 51.885086,
      "longitude": 19.621136,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1672751824,
      "ems": null
    },
    {
      "latitude": 51.886147,
      "longitude": 19.627151,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672751830,
      "ems": null
    },
    {
      "latitude": 51.886414,
      "longitude": 19.630489,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 84,
      "squawk": "7000",
      "timestamp": 1672751833,
      "ems": null
    },
    {
      "latitude": 51.886414,
      "longitude": 19.633459,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1672751836,
      "ems": null
    },
    {
      "latitude": 51.886147,
      "longitude": 19.636993,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1672751840,
      "ems": null
    },
    {
      "latitude": 51.885822,
      "longitude": 19.63913,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1672751842,
      "ems": null
    },
    {
      "latitude": 51.884995,
      "longitude": 19.642813,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672751845,
      "ems": null
    },
    {
      "latitude": 51.884098,
      "longitude": 19.645538,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672751848,
      "ems": null
    },
    {
      "latitude": 51.882797,
      "longitude": 19.64838,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1672751851,
      "ems": null
    },
    {
      "latitude": 51.881493,
      "longitude": 19.650726,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1672751855,
      "ems": null
    },
    {
      "latitude": 51.880142,
      "longitude": 19.652834,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1672751857,
      "ems": null
    },
    {
      "latitude": 51.878838,
      "longitude": 19.654694,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751860,
      "ems": null
    },
    {
      "latitude": 51.877209,
      "longitude": 19.656982,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751864,
      "ems": null
    },
    {
      "latitude": 51.875671,
      "longitude": 19.659119,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751867,
      "ems": null
    },
    {
      "latitude": 51.874237,
      "longitude": 19.660999,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751870,
      "ems": null
    },
    {
      "latitude": 51.872787,
      "longitude": 19.66301,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751873,
      "ems": null
    },
    {
      "latitude": 51.871399,
      "longitude": 19.665009,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751876,
      "ems": null
    },
    {
      "latitude": 51.86998,
      "longitude": 19.667011,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751878,
      "ems": null
    },
    {
      "latitude": 51.868515,
      "longitude": 19.66909,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751881,
      "ems": null
    },
    {
      "latitude": 51.867004,
      "longitude": 19.671244,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751885,
      "ems": null
    },
    {
      "latitude": 51.864174,
      "longitude": 19.675217,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751891,
      "ems": null
    },
    {
      "latitude": 51.861286,
      "longitude": 19.67926,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751897,
      "ems": null
    },
    {
      "latitude": 51.858402,
      "longitude": 19.683228,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751903,
      "ems": null
    },
    {
      "latitude": 51.856308,
      "longitude": 19.686279,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751907,
      "ems": null
    },
    {
      "latitude": 51.853134,
      "longitude": 19.690693,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751914,
      "ems": null
    },
    {
      "latitude": 51.850208,
      "longitude": 19.694748,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751920,
      "ems": null
    },
    {
      "latitude": 51.847092,
      "longitude": 19.698933,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672751926,
      "ems": null
    },
    {
      "latitude": 51.844482,
      "longitude": 19.702454,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751932,
      "ems": null
    },
    {
      "latitude": 51.841129,
      "longitude": 19.707184,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672751939,
      "ems": null
    },
    {
      "latitude": 51.838074,
      "longitude": 19.71118,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672751945,
      "ems": null
    },
    {
      "latitude": 51.836521,
      "longitude": 19.712906,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672751948,
      "ems": null
    },
    {
      "latitude": 51.83522,
      "longitude": 19.714355,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1672751951,
      "ems": null
    },
    {
      "latitude": 51.833683,
      "longitude": 19.716034,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1672751954,
      "ems": null
    },
    {
      "latitude": 51.831848,
      "longitude": 19.718084,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672751957,
      "ems": null
    },
    {
      "latitude": 51.830292,
      "longitude": 19.719791,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672751960,
      "ems": null
    },
    {
      "latitude": 51.828781,
      "longitude": 19.721498,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672751963,
      "ems": null
    },
    {
      "latitude": 51.827629,
      "longitude": 19.722824,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672751966,
      "ems": null
    },
    {
      "latitude": 51.824558,
      "longitude": 19.726944,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751972,
      "ems": null
    },
    {
      "latitude": 51.823116,
      "longitude": 19.728928,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672751975,
      "ems": null
    },
    {
      "latitude": 51.82172,
      "longitude": 19.730835,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672751978,
      "ems": null
    },
    {
      "latitude": 51.820084,
      "longitude": 19.732855,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672751981,
      "ems": null
    },
    {
      "latitude": 51.817108,
      "longitude": 19.736567,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672751987,
      "ems": null
    },
    {
      "latitude": 51.814224,
      "longitude": 19.739685,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1672751993,
      "ems": null
    },
    {
      "latitude": 51.810966,
      "longitude": 19.743271,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672751999,
      "ems": null
    },
    {
      "latitude": 51.809475,
      "longitude": 19.745026,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672752002,
      "ems": null
    },
    {
      "latitude": 51.80687,
      "longitude": 19.748077,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752008,
      "ems": null
    },
    {
      "latitude": 51.803471,
      "longitude": 19.752121,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672752014,
      "ems": null
    },
    {
      "latitude": 51.800446,
      "longitude": 19.755867,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672752020,
      "ems": null
    },
    {
      "latitude": 51.79747,
      "longitude": 19.759579,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752026,
      "ems": null
    },
    {
      "latitude": 51.794586,
      "longitude": 19.763365,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752032,
      "ems": null
    },
    {
      "latitude": 51.79184,
      "longitude": 19.767002,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752038,
      "ems": null
    },
    {
      "latitude": 51.788807,
      "longitude": 19.770966,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752044,
      "ems": null
    },
    {
      "latitude": 51.785782,
      "longitude": 19.77478,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752051,
      "ems": null
    },
    {
      "latitude": 51.783314,
      "longitude": 19.777756,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672752056,
      "ems": null
    },
    {
      "latitude": 51.780006,
      "longitude": 19.781494,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672752062,
      "ems": null
    },
    {
      "latitude": 51.777027,
      "longitude": 19.785004,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752068,
      "ems": null
    },
    {
      "latitude": 51.773849,
      "longitude": 19.788677,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672752074,
      "ems": null
    },
    {
      "latitude": 51.770744,
      "longitude": 19.792099,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672752081,
      "ems": null
    },
    {
      "latitude": 51.767624,
      "longitude": 19.795609,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672752087,
      "ems": null
    },
    {
      "latitude": 51.76469,
      "longitude": 19.799042,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672752093,
      "ems": null
    },
    {
      "latitude": 51.761993,
      "longitude": 19.802485,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752098,
      "ems": null
    },
    {
      "latitude": 51.759293,
      "longitude": 19.805832,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752104,
      "ems": null
    },
    {
      "latitude": 51.755676,
      "longitude": 19.810205,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752111,
      "ems": null
    },
    {
      "latitude": 51.752747,
      "longitude": 19.813843,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752117,
      "ems": null
    },
    {
      "latitude": 51.749844,
      "longitude": 19.817657,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752123,
      "ems": null
    },
    {
      "latitude": 51.747421,
      "longitude": 19.820862,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752129,
      "ems": null
    },
    {
      "latitude": 51.744022,
      "longitude": 19.825134,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672752135,
      "ems": null
    },
    {
      "latitude": 51.741257,
      "longitude": 19.828466,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752140,
      "ems": null
    },
    {
      "latitude": 51.737877,
      "longitude": 19.832535,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752147,
      "ems": null
    },
    {
      "latitude": 51.734898,
      "longitude": 19.836197,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672752153,
      "ems": null
    },
    {
      "latitude": 51.731964,
      "longitude": 19.839783,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672752159,
      "ems": null
    },
    {
      "latitude": 51.728802,
      "longitude": 19.843597,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752165,
      "ems": null
    },
    {
      "latitude": 51.72583,
      "longitude": 19.846951,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672752171,
      "ems": null
    },
    {
      "latitude": 51.722992,
      "longitude": 19.85029,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752177,
      "ems": null
    },
    {
      "latitude": 51.719833,
      "longitude": 19.854076,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672752183,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.857254,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672752189,
      "ems": null
    },
    {
      "latitude": 51.713974,
      "longitude": 19.860683,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672752195,
      "ems": null
    },
    {
      "latitude": 51.710953,
      "longitude": 19.864023,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672752201,
      "ems": null
    },
    {
      "latitude": 51.707851,
      "longitude": 19.867554,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672752209,
      "ems": null
    },
    {
      "latitude": 51.703217,
      "longitude": 19.872858,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672752216,
      "ems": null
    },
    {
      "latitude": 51.700378,
      "longitude": 19.875975,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672752222,
      "ems": null
    },
    {
      "latitude": 51.697376,
      "longitude": 19.879074,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1672752228,
      "ems": null
    },
    {
      "latitude": 51.695515,
      "longitude": 19.880371,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1672752231,
      "ems": null
    },
    {
      "latitude": 51.694473,
      "longitude": 19.881023,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1672752234,
      "ems": null
    },
    {
      "latitude": 51.692276,
      "longitude": 19.88184,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1672752237,
      "ems": null
    },
    {
      "latitude": 51.690533,
      "longitude": 19.882355,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1672752240,
      "ems": null
    },
    {
      "latitude": 51.688934,
      "longitude": 19.88273,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1672752243,
      "ems": null
    },
    {
      "latitude": 51.687508,
      "longitude": 19.883041,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1672752246,
      "ems": null
    },
    {
      "latitude": 51.685822,
      "longitude": 19.883324,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1672752250,
      "ems": null
    },
    {
      "latitude": 51.68383,
      "longitude": 19.883728,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1672752252,
      "ems": null
    },
    {
      "latitude": 51.681427,
      "longitude": 19.884214,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1672752256,
      "ems": null
    },
    {
      "latitude": 51.679138,
      "longitude": 19.884661,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1672752260,
      "ems": null
    },
    {
      "latitude": 51.677361,
      "longitude": 19.885101,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1672752264,
      "ems": null
    },
    {
      "latitude": 51.674927,
      "longitude": 19.8857,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1672752268,
      "ems": null
    },
    {
      "latitude": 51.672363,
      "longitude": 19.886368,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1672752273,
      "ems": null
    },
    {
      "latitude": 51.667912,
      "longitude": 19.887772,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1672752280,
      "ems": null
    },
    {
      "latitude": 51.666687,
      "longitude": 19.888149,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1672752282,
      "ems": null
    },
    {
      "latitude": 51.665909,
      "longitude": 19.888447,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1672752283,
      "ems": null
    },
    {
      "latitude": 51.664169,
      "longitude": 19.889114,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1672752287,
      "ems": null
    },
    {
      "latitude": 51.663116,
      "longitude": 19.889559,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1672752289,
      "ems": null
    },
    {
      "latitude": 51.656937,
      "longitude": 19.891712,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1672752299,
      "ems": null
    },
    {
      "latitude": 51.65469,
      "longitude": 19.892578,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1672752304,
      "ems": null
    },
    {
      "latitude": 51.650986,
      "longitude": 19.894012,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1672752309,
      "ems": null
    },
    {
      "latitude": 51.645264,
      "longitude": 19.896463,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1672752319,
      "ems": null
    },
    {
      "latitude": 51.641144,
      "longitude": 19.898224,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1672752326,
      "ems": null
    },
    {
      "latitude": 51.636208,
      "longitude": 19.900742,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1672752334,
      "ems": null
    },
    {
      "latitude": 51.634018,
      "longitude": 19.901962,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672752338,
      "ems": null
    },
    {
      "latitude": 51.632019,
      "longitude": 19.903107,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752342,
      "ems": null
    },
    {
      "latitude": 51.629971,
      "longitude": 19.904327,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752346,
      "ems": null
    },
    {
      "latitude": 51.625397,
      "longitude": 19.907003,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672752354,
      "ems": null
    },
    {
      "latitude": 51.620472,
      "longitude": 19.909897,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752362,
      "ems": null
    },
    {
      "latitude": 51.616241,
      "longitude": 19.912348,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752370,
      "ems": null
    },
    {
      "latitude": 51.611618,
      "longitude": 19.914873,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1672752378,
      "ems": null
    },
    {
      "latitude": 51.607315,
      "longitude": 19.917545,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752386,
      "ems": null
    },
    {
      "latitude": 51.602783,
      "longitude": 19.920578,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1672752394,
      "ems": null
    },
    {
      "latitude": 51.598034,
      "longitude": 19.92363,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752402,
      "ems": null
    },
    {
      "latitude": 51.594727,
      "longitude": 19.925636,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752408,
      "ems": null
    },
    {
      "latitude": 51.591518,
      "longitude": 19.927521,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672752414,
      "ems": null
    },
    {
      "latitude": 51.587002,
      "longitude": 19.930115,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672752422,
      "ems": null
    },
    {
      "latitude": 51.584209,
      "longitude": 19.93187,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752429,
      "ems": null
    },
    {
      "latitude": 51.579483,
      "longitude": 19.934841,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752435,
      "ems": null
    },
    {
      "latitude": 51.576096,
      "longitude": 19.936993,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752441,
      "ems": null
    },
    {
      "latitude": 51.572758,
      "longitude": 19.939194,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752447,
      "ems": null
    },
    {
      "latitude": 51.570477,
      "longitude": 19.940567,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752451,
      "ems": null
    },
    {
      "latitude": 51.564705,
      "longitude": 19.943924,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672752461,
      "ems": null
    },
    {
      "latitude": 51.561398,
      "longitude": 19.945755,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672752467,
      "ems": null
    },
    {
      "latitude": 51.55806,
      "longitude": 19.947758,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752473,
      "ems": null
    },
    {
      "latitude": 51.553665,
      "longitude": 19.950579,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752481,
      "ems": null
    },
    {
      "latitude": 51.55069,
      "longitude": 19.952393,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752486,
      "ems": null
    },
    {
      "latitude": 51.546547,
      "longitude": 19.954987,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752493,
      "ems": null
    },
    {
      "latitude": 51.54364,
      "longitude": 19.956739,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752498,
      "ems": null
    },
    {
      "latitude": 51.541122,
      "longitude": 19.958223,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752503,
      "ems": null
    },
    {
      "latitude": 51.536041,
      "longitude": 19.961416,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752512,
      "ems": null
    },
    {
      "latitude": 51.531372,
      "longitude": 19.964294,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752520,
      "ems": null
    },
    {
      "latitude": 51.527088,
      "longitude": 19.967041,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752528,
      "ems": null
    },
    {
      "latitude": 51.523499,
      "longitude": 19.96921,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752534,
      "ems": null
    },
    {
      "latitude": 51.521271,
      "longitude": 19.970551,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752539,
      "ems": null
    },
    {
      "latitude": 51.51685,
      "longitude": 19.973221,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752546,
      "ems": null
    },
    {
      "latitude": 51.513428,
      "longitude": 19.975298,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1672752552,
      "ems": null
    },
    {
      "latitude": 51.510609,
      "longitude": 19.977036,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752556,
      "ems": null
    },
    {
      "latitude": 51.505188,
      "longitude": 19.980419,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752566,
      "ems": null
    },
    {
      "latitude": 51.502853,
      "longitude": 19.981903,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752570,
      "ems": null
    },
    {
      "latitude": 51.496876,
      "longitude": 19.985657,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752580,
      "ems": null
    },
    {
      "latitude": 51.492455,
      "longitude": 19.988556,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1672752588,
      "ems": null
    },
    {
      "latitude": 51.48724,
      "longitude": 19.991913,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1672752597,
      "ems": null
    },
    {
      "latitude": 51.483627,
      "longitude": 19.994301,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1672752603,
      "ems": null
    },
    {
      "latitude": 51.481514,
      "longitude": 19.99588,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1672752607,
      "ems": null
    },
    {
      "latitude": 51.479931,
      "longitude": 19.997406,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1672752610,
      "ems": null
    },
    {
      "latitude": 51.478317,
      "longitude": 19.999201,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1672752613,
      "ems": null
    },
    {
      "latitude": 51.476761,
      "longitude": 20.001057,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672752616,
      "ems": null
    },
    {
      "latitude": 51.475231,
      "longitude": 20.003052,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752619,
      "ems": null
    },
    {
      "latitude": 51.473835,
      "longitude": 20.004883,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752622,
      "ems": null
    },
    {
      "latitude": 51.472275,
      "longitude": 20.00692,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752625,
      "ems": null
    },
    {
      "latitude": 51.471085,
      "longitude": 20.008553,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752627,
      "ems": null
    },
    {
      "latitude": 51.469456,
      "longitude": 20.010757,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752630,
      "ems": null
    },
    {
      "latitude": 51.468201,
      "longitude": 20.012413,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752633,
      "ems": null
    },
    {
      "latitude": 51.466339,
      "longitude": 20.014877,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752637,
      "ems": null
    },
    {
      "latitude": 51.464664,
      "longitude": 20.017166,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752640,
      "ems": null
    },
    {
      "latitude": 51.463264,
      "longitude": 20.018997,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752643,
      "ems": null
    },
    {
      "latitude": 51.460236,
      "longitude": 20.023029,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752649,
      "ems": null
    },
    {
      "latitude": 51.45726,
      "longitude": 20.027037,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752655,
      "ems": null
    },
    {
      "latitude": 51.454285,
      "longitude": 20.031046,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752661,
      "ems": null
    },
    {
      "latitude": 51.451309,
      "longitude": 20.035053,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752667,
      "ems": null
    },
    {
      "latitude": 51.448105,
      "longitude": 20.039434,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752673,
      "ems": null
    },
    {
      "latitude": 51.445808,
      "longitude": 20.042572,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752678,
      "ems": null
    },
    {
      "latitude": 51.443344,
      "longitude": 20.045818,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752683,
      "ems": null
    },
    {
      "latitude": 51.438595,
      "longitude": 20.052032,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672752692,
      "ems": null
    },
    {
      "latitude": 51.435425,
      "longitude": 20.056284,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752699,
      "ems": null
    },
    {
      "latitude": 51.431305,
      "longitude": 20.061852,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752707,
      "ems": null
    },
    {
      "latitude": 51.427048,
      "longitude": 20.067596,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752715,
      "ems": null
    },
    {
      "latitude": 51.422745,
      "longitude": 20.073431,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752724,
      "ems": null
    },
    {
      "latitude": 51.419785,
      "longitude": 20.077438,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752730,
      "ems": null
    },
    {
      "latitude": 51.41629,
      "longitude": 20.082043,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752737,
      "ems": null
    },
    {
      "latitude": 51.413456,
      "longitude": 20.085907,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752743,
      "ems": null
    },
    {
      "latitude": 51.411407,
      "longitude": 20.088577,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752747,
      "ems": null
    },
    {
      "latitude": 51.406845,
      "longitude": 20.094757,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752756,
      "ems": null
    },
    {
      "latitude": 51.403793,
      "longitude": 20.098969,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752762,
      "ems": null
    },
    {
      "latitude": 51.400955,
      "longitude": 20.102827,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752767,
      "ems": null
    },
    {
      "latitude": 51.397953,
      "longitude": 20.106812,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752773,
      "ems": null
    },
    {
      "latitude": 51.394409,
      "longitude": 20.111364,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752780,
      "ems": null
    },
    {
      "latitude": 51.392834,
      "longitude": 20.113525,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752783,
      "ems": null
    },
    {
      "latitude": 51.387405,
      "longitude": 20.121237,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1672752794,
      "ems": null
    },
    {
      "latitude": 51.384842,
      "longitude": 20.124874,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752800,
      "ems": null
    },
    {
      "latitude": 51.380867,
      "longitude": 20.130234,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752807,
      "ems": null
    },
    {
      "latitude": 51.378029,
      "longitude": 20.134048,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752813,
      "ems": null
    },
    {
      "latitude": 51.375137,
      "longitude": 20.138088,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752819,
      "ems": null
    },
    {
      "latitude": 51.372345,
      "longitude": 20.141949,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752825,
      "ems": null
    },
    {
      "latitude": 51.369324,
      "longitude": 20.146179,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752830,
      "ems": null
    },
    {
      "latitude": 51.366211,
      "longitude": 20.150484,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752837,
      "ems": null
    },
    {
      "latitude": 51.36319,
      "longitude": 20.154716,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752843,
      "ems": null
    },
    {
      "latitude": 51.360199,
      "longitude": 20.158997,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752849,
      "ems": null
    },
    {
      "latitude": 51.357513,
      "longitude": 20.162807,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752854,
      "ems": null
    },
    {
      "latitude": 51.354355,
      "longitude": 20.167187,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752861,
      "ems": null
    },
    {
      "latitude": 51.352386,
      "longitude": 20.169933,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752865,
      "ems": null
    },
    {
      "latitude": 51.34845,
      "longitude": 20.175426,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752873,
      "ems": null
    },
    {
      "latitude": 51.345428,
      "longitude": 20.179731,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752879,
      "ems": null
    },
    {
      "latitude": 51.34259,
      "longitude": 20.183741,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752885,
      "ems": null
    },
    {
      "latitude": 51.339436,
      "longitude": 20.188217,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752891,
      "ems": null
    },
    {
      "latitude": 51.336971,
      "longitude": 20.19165,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752896,
      "ems": null
    },
    {
      "latitude": 51.333664,
      "longitude": 20.196381,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752903,
      "ems": null
    },
    {
      "latitude": 51.33165,
      "longitude": 20.199255,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752909,
      "ems": null
    },
    {
      "latitude": 51.32785,
      "longitude": 20.204525,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752915,
      "ems": null
    },
    {
      "latitude": 51.325378,
      "longitude": 20.207941,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752921,
      "ems": null
    },
    {
      "latitude": 51.322037,
      "longitude": 20.212469,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752927,
      "ems": null
    },
    {
      "latitude": 51.318832,
      "longitude": 20.216997,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752933,
      "ems": null
    },
    {
      "latitude": 51.314766,
      "longitude": 20.222626,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752942,
      "ems": null
    },
    {
      "latitude": 51.311691,
      "longitude": 20.226944,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752948,
      "ems": null
    },
    {
      "latitude": 51.308853,
      "longitude": 20.230656,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672752954,
      "ems": null
    },
    {
      "latitude": 51.305641,
      "longitude": 20.235062,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752960,
      "ems": null
    },
    {
      "latitude": 51.302719,
      "longitude": 20.239265,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752966,
      "ems": null
    },
    {
      "latitude": 51.299561,
      "longitude": 20.243647,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672752973,
      "ems": null
    },
    {
      "latitude": 51.296329,
      "longitude": 20.248108,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752979,
      "ems": null
    },
    {
      "latitude": 51.293564,
      "longitude": 20.251812,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752985,
      "ems": null
    },
    {
      "latitude": 51.291023,
      "longitude": 20.255203,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672752990,
      "ems": null
    },
    {
      "latitude": 51.287346,
      "longitude": 20.260468,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1672752997,
      "ems": null
    },
    {
      "latitude": 51.2845,
      "longitude": 20.26458,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753003,
      "ems": null
    },
    {
      "latitude": 51.28157,
      "longitude": 20.268661,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753009,
      "ems": null
    },
    {
      "latitude": 51.27887,
      "longitude": 20.272596,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1672753015,
      "ems": null
    },
    {
      "latitude": 51.27475,
      "longitude": 20.278534,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1672753023,
      "ems": null
    },
    {
      "latitude": 51.272449,
      "longitude": 20.28183,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753029,
      "ems": null
    },
    {
      "latitude": 51.268204,
      "longitude": 20.287739,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753037,
      "ems": null
    },
    {
      "latitude": 51.265606,
      "longitude": 20.291367,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753042,
      "ems": null
    },
    {
      "latitude": 51.263123,
      "longitude": 20.294792,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753047,
      "ems": null
    },
    {
      "latitude": 51.258575,
      "longitude": 20.301132,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753057,
      "ems": null
    },
    {
      "latitude": 51.255363,
      "longitude": 20.305252,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753063,
      "ems": null
    },
    {
      "latitude": 51.252411,
      "longitude": 20.309267,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753068,
      "ems": null
    },
    {
      "latitude": 51.249298,
      "longitude": 20.313572,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753075,
      "ems": null
    },
    {
      "latitude": 51.246426,
      "longitude": 20.317383,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753080,
      "ems": null
    },
    {
      "latitude": 51.243576,
      "longitude": 20.321218,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753086,
      "ems": null
    },
    {
      "latitude": 51.239025,
      "longitude": 20.327911,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1672753095,
      "ems": null
    },
    {
      "latitude": 51.23637,
      "longitude": 20.331726,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753101,
      "ems": null
    },
    {
      "latitude": 51.231297,
      "longitude": 20.338669,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753111,
      "ems": null
    },
    {
      "latitude": 51.22847,
      "longitude": 20.342745,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753117,
      "ems": null
    },
    {
      "latitude": 51.225895,
      "longitude": 20.346298,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753122,
      "ems": null
    },
    {
      "latitude": 51.22229,
      "longitude": 20.351357,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753129,
      "ems": null
    },
    {
      "latitude": 51.219543,
      "longitude": 20.355217,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753135,
      "ems": null
    },
    {
      "latitude": 51.216431,
      "longitude": 20.359522,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753141,
      "ems": null
    },
    {
      "latitude": 51.213745,
      "longitude": 20.363083,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753146,
      "ems": null
    },
    {
      "latitude": 51.210342,
      "longitude": 20.367613,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753153,
      "ems": null
    },
    {
      "latitude": 51.207088,
      "longitude": 20.372086,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753159,
      "ems": null
    },
    {
      "latitude": 51.20462,
      "longitude": 20.375408,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753165,
      "ems": null
    },
    {
      "latitude": 51.201176,
      "longitude": 20.380173,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753171,
      "ems": null
    },
    {
      "latitude": 51.19812,
      "longitude": 20.38439,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753177,
      "ems": null
    },
    {
      "latitude": 51.195099,
      "longitude": 20.388546,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753183,
      "ems": null
    },
    {
      "latitude": 51.192032,
      "longitude": 20.39263,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753189,
      "ems": null
    },
    {
      "latitude": 51.188934,
      "longitude": 20.396729,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753195,
      "ems": null
    },
    {
      "latitude": 51.186188,
      "longitude": 20.400314,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753201,
      "ems": null
    },
    {
      "latitude": 51.183563,
      "longitude": 20.403765,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753206,
      "ems": null
    },
    {
      "latitude": 51.179718,
      "longitude": 20.408812,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753213,
      "ems": null
    },
    {
      "latitude": 51.177017,
      "longitude": 20.412449,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753219,
      "ems": null
    },
    {
      "latitude": 51.173676,
      "longitude": 20.416903,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753226,
      "ems": null
    },
    {
      "latitude": 51.170498,
      "longitude": 20.421219,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753232,
      "ems": null
    },
    {
      "latitude": 51.167633,
      "longitude": 20.425068,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753238,
      "ems": null
    },
    {
      "latitude": 51.164703,
      "longitude": 20.429152,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1672753244,
      "ems": null
    },
    {
      "latitude": 51.161636,
      "longitude": 20.433605,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753250,
      "ems": null
    },
    {
      "latitude": 51.158615,
      "longitude": 20.437689,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753256,
      "ems": null
    },
    {
      "latitude": 51.155647,
      "longitude": 20.441589,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753262,
      "ems": null
    },
    {
      "latitude": 51.152668,
      "longitude": 20.445709,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753268,
      "ems": null
    },
    {
      "latitude": 51.147949,
      "longitude": 20.452164,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753277,
      "ems": null
    },
    {
      "latitude": 51.1455,
      "longitude": 20.455399,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753282,
      "ems": null
    },
    {
      "latitude": 51.141907,
      "longitude": 20.46018,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753289,
      "ems": null
    },
    {
      "latitude": 51.138889,
      "longitude": 20.464172,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753295,
      "ems": null
    },
    {
      "latitude": 51.135864,
      "longitude": 20.468271,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753301,
      "ems": null
    },
    {
      "latitude": 51.133026,
      "longitude": 20.472132,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753307,
      "ems": null
    },
    {
      "latitude": 51.130829,
      "longitude": 20.474953,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753312,
      "ems": null
    },
    {
      "latitude": 51.127998,
      "longitude": 20.478439,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753317,
      "ems": null
    },
    {
      "latitude": 51.123714,
      "longitude": 20.484161,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753325,
      "ems": null
    },
    {
      "latitude": 51.120987,
      "longitude": 20.488018,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753331,
      "ems": null
    },
    {
      "latitude": 51.118011,
      "longitude": 20.492249,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753337,
      "ems": null
    },
    {
      "latitude": 51.115242,
      "longitude": 20.495834,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753343,
      "ems": null
    },
    {
      "latitude": 51.112061,
      "longitude": 20.500042,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753349,
      "ems": null
    },
    {
      "latitude": 51.109051,
      "longitude": 20.503769,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753355,
      "ems": null
    },
    {
      "latitude": 51.106258,
      "longitude": 20.507126,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672753361,
      "ems": null
    },
    {
      "latitude": 51.103271,
      "longitude": 20.510733,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753367,
      "ems": null
    },
    {
      "latitude": 51.099136,
      "longitude": 20.516205,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753376,
      "ems": null
    },
    {
      "latitude": 51.095581,
      "longitude": 20.520903,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753382,
      "ems": null
    },
    {
      "latitude": 51.092663,
      "longitude": 20.524521,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753388,
      "ems": null
    },
    {
      "latitude": 51.089722,
      "longitude": 20.52788,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672753394,
      "ems": null
    },
    {
      "latitude": 51.085915,
      "longitude": 20.532303,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672753401,
      "ems": null
    },
    {
      "latitude": 51.082764,
      "longitude": 20.536045,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672753407,
      "ems": null
    },
    {
      "latitude": 51.08028,
      "longitude": 20.539017,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753413,
      "ems": null
    },
    {
      "latitude": 51.076355,
      "longitude": 20.544136,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753420,
      "ems": null
    },
    {
      "latitude": 51.073902,
      "longitude": 20.547333,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753425,
      "ems": null
    },
    {
      "latitude": 51.070404,
      "longitude": 20.551931,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753433,
      "ems": null
    },
    {
      "latitude": 51.06636,
      "longitude": 20.557404,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753441,
      "ems": null
    },
    {
      "latitude": 51.062126,
      "longitude": 20.562973,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753449,
      "ems": null
    },
    {
      "latitude": 51.058777,
      "longitude": 20.567371,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753457,
      "ems": null
    },
    {
      "latitude": 51.05505,
      "longitude": 20.572052,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753464,
      "ems": null
    },
    {
      "latitude": 51.052322,
      "longitude": 20.575314,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753469,
      "ems": null
    },
    {
      "latitude": 51.04895,
      "longitude": 20.579529,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753476,
      "ems": null
    },
    {
      "latitude": 51.045685,
      "longitude": 20.583851,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753482,
      "ems": null
    },
    {
      "latitude": 51.043365,
      "longitude": 20.587082,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753487,
      "ems": null
    },
    {
      "latitude": 51.039963,
      "longitude": 20.591497,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753494,
      "ems": null
    },
    {
      "latitude": 51.036804,
      "longitude": 20.595579,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753500,
      "ems": null
    },
    {
      "latitude": 51.033737,
      "longitude": 20.599812,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753507,
      "ems": null
    },
    {
      "latitude": 51.029892,
      "longitude": 20.60471,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753514,
      "ems": null
    },
    {
      "latitude": 51.025211,
      "longitude": 20.610504,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753523,
      "ems": null
    },
    {
      "latitude": 51.020649,
      "longitude": 20.616302,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753532,
      "ems": null
    },
    {
      "latitude": 51.016411,
      "longitude": 20.621643,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753540,
      "ems": null
    },
    {
      "latitude": 51.013824,
      "longitude": 20.624826,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753545,
      "ems": null
    },
    {
      "latitude": 51.0098,
      "longitude": 20.629883,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753553,
      "ems": null
    },
    {
      "latitude": 51.006638,
      "longitude": 20.633957,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753559,
      "ems": null
    },
    {
      "latitude": 51.003342,
      "longitude": 20.638264,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753565,
      "ems": null
    },
    {
      "latitude": 51.001095,
      "longitude": 20.641098,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753571,
      "ems": null
    },
    {
      "latitude": 50.997326,
      "longitude": 20.645828,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753577,
      "ems": null
    },
    {
      "latitude": 50.994717,
      "longitude": 20.649185,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753583,
      "ems": null
    },
    {
      "latitude": 50.990993,
      "longitude": 20.653763,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1672753590,
      "ems": null
    },
    {
      "latitude": 50.985489,
      "longitude": 20.660236,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753599,
      "ems": null
    },
    {
      "latitude": 50.981449,
      "longitude": 20.665207,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753607,
      "ems": null
    },
    {
      "latitude": 50.978985,
      "longitude": 20.668564,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753612,
      "ems": null
    },
    {
      "latitude": 50.974281,
      "longitude": 20.675049,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672753621,
      "ems": null
    },
    {
      "latitude": 50.970139,
      "longitude": 20.679092,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1672753629,
      "ems": null
    },
    {
      "latitude": 50.968185,
      "longitude": 20.680204,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1672753632,
      "ems": null
    },
    {
      "latitude": 50.966553,
      "longitude": 20.680847,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1672753635,
      "ems": null
    },
    {
      "latitude": 50.965202,
      "longitude": 20.681152,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1672753637,
      "ems": null
    },
    {
      "latitude": 50.963425,
      "longitude": 20.681391,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1672753641,
      "ems": null
    },
    {
      "latitude": 50.959488,
      "longitude": 20.681316,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1672753646,
      "ems": null
    },
    {
      "latitude": 50.95784,
      "longitude": 20.680946,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1672753649,
      "ems": null
    },
    {
      "latitude": 50.956009,
      "longitude": 20.680426,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1672753652,
      "ems": null
    },
    {
      "latitude": 50.954964,
      "longitude": 20.680008,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1672753654,
      "ems": null
    },
    {
      "latitude": 50.953217,
      "longitude": 20.678867,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1672753658,
      "ems": null
    },
    {
      "latitude": 50.951706,
      "longitude": 20.677532,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1672753661,
      "ems": null
    },
    {
      "latitude": 50.950539,
      "longitude": 20.675888,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1672753664,
      "ems": null
    },
    {
      "latitude": 50.949562,
      "longitude": 20.673981,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1672753667,
      "ems": null
    },
    {
      "latitude": 50.94873,
      "longitude": 20.672186,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1672753670,
      "ems": null
    },
    {
      "latitude": 50.947906,
      "longitude": 20.67033,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1672753673,
      "ems": null
    },
    {
      "latitude": 50.947002,
      "longitude": 20.66864,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1672753676,
      "ems": null
    },
    {
      "latitude": 50.946026,
      "longitude": 20.666962,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672753679,
      "ems": null
    },
    {
      "latitude": 50.945045,
      "longitude": 20.665283,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1672753682,
      "ems": null
    },
    {
      "latitude": 50.94397,
      "longitude": 20.663204,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1672753686,
      "ems": null
    },
    {
      "latitude": 50.942963,
      "longitude": 20.661497,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1672753689,
      "ems": null
    },
    {
      "latitude": 50.941929,
      "longitude": 20.660019,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672753692,
      "ems": null
    },
    {
      "latitude": 50.940765,
      "longitude": 20.658602,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1672753695,
      "ems": null
    },
    {
      "latitude": 50.939392,
      "longitude": 20.657267,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1672753698,
      "ems": null
    },
    {
      "latitude": 50.938065,
      "longitude": 20.656281,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1672753701,
      "ems": null
    },
    {
      "latitude": 50.936646,
      "longitude": 20.655485,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1672753703,
      "ems": null
    },
    {
      "latitude": 50.93486,
      "longitude": 20.654669,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1672753707,
      "ems": null
    },
    {
      "latitude": 50.933441,
      "longitude": 20.654222,
      "altitude": {
        "feet": 2250,
        "meters": 686
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1672753710,
      "ems": null
    },
    {
      "latitude": 50.931473,
      "longitude": 20.653704,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1672753713,
      "ems": null
    },
    {
      "latitude": 50.929962,
      "longitude": 20.653406,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1672753715,
      "ems": null
    },
    {
      "latitude": 50.92804,
      "longitude": 20.653109,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1672753719,
      "ems": null
    },
    {
      "latitude": 50.926071,
      "longitude": 20.652887,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1672753722,
      "ems": null
    },
    {
      "latitude": 50.924332,
      "longitude": 20.652739,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1672753725,
      "ems": null
    },
    {
      "latitude": 50.922375,
      "longitude": 20.652695,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1672753728,
      "ems": null
    },
    {
      "latitude": 50.920441,
      "longitude": 20.652887,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1672753731,
      "ems": null
    },
    {
      "latitude": 50.918793,
      "longitude": 20.653332,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1672753733,
      "ems": null
    },
    {
      "latitude": 50.916603,
      "longitude": 20.654373,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672753737,
      "ems": null
    },
    {
      "latitude": 50.914833,
      "longitude": 20.655518,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1672753740,
      "ems": null
    },
    {
      "latitude": 50.913162,
      "longitude": 20.656895,
      "altitude": {
        "feet": 2100,
        "meters": 640
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1672753743,
      "ems": null
    },
    {
      "latitude": 50.912018,
      "longitude": 20.657934,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1672753745,
      "ems": null
    },
    {
      "latitude": 50.909912,
      "longitude": 20.659864,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1672753749,
      "ems": null
    },
    {
      "latitude": 50.90799,
      "longitude": 20.661469,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1672753752,
      "ems": null
    },
    {
      "latitude": 50.906433,
      "longitude": 20.66276,
      "altitude": {
        "feet": 2025,
        "meters": 617
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1672753755,
      "ems": null
    },
    {
      "latitude": 50.904419,
      "longitude": 20.664244,
      "altitude": {
        "feet": 2000,
        "meters": 610
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1672753758,
      "ems": null
    },
    {
      "latitude": 50.902908,
      "longitude": 20.665506,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1672753761,
      "ems": null
    },
    {
      "latitude": 50.902451,
      "longitude": 20.665951,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1672753762,
      "ems": null
    },
    {
      "latitude": 50.899426,
      "longitude": 20.669174,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672753767,
      "ems": null
    },
    {
      "latitude": 50.895794,
      "longitude": 20.673599,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672753774,
      "ems": null
    },
    {
      "latitude": 50.894257,
      "longitude": 20.67543,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672753777,
      "ems": null
    },
    {
      "latitude": 50.8927,
      "longitude": 20.677458,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672753780,
      "ems": null
    },
    {
      "latitude": 50.891232,
      "longitude": 20.679474,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672753783,
      "ems": null
    },
    {
      "latitude": 50.889771,
      "longitude": 20.681763,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1672753786,
      "ems": null
    },
    {
      "latitude": 50.888535,
      "longitude": 20.684212,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1672753789,
      "ems": null
    },
    {
      "latitude": 50.88739,
      "longitude": 20.686958,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1672753792,
      "ems": null
    },
    {
      "latitude": 50.886703,
      "longitude": 20.688889,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1672753795,
      "ems": null
    },
    {
      "latitude": 50.88588,
      "longitude": 20.691486,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1672753798,
      "ems": null
    },
    {
      "latitude": 50.884903,
      "longitude": 20.695038,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672753802,
      "ems": null
    },
    {
      "latitude": 50.884232,
      "longitude": 20.697723,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672753805,
      "ems": null
    },
    {
      "latitude": 50.883636,
      "longitude": 20.700247,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672753808,
      "ems": null
    },
    {
      "latitude": 50.882996,
      "longitude": 20.702845,
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672753811,
      "ems": null
    },
    {
      "latitude": 50.882401,
      "longitude": 20.705294,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672753814,
      "ems": null
    },
    {
      "latitude": 50.881924,
      "longitude": 20.707092,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672753816,
      "ems": null
    },
    {
      "latitude": 50.881393,
      "longitude": 20.709377,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672753819,
      "ems": null
    },
    {
      "latitude": 50.880619,
      "longitude": 20.712509,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672753823,
      "ems": null
    },
    {
      "latitude": 50.880108,
      "longitude": 20.714798,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672753826,
      "ems": null
    },
    {
      "latitude": 50.879547,
      "longitude": 20.717087,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672753829,
      "ems": null
    },
    {
      "latitude": 50.878326,
      "longitude": 20.721996,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672753835,
      "ems": null
    },
    {
      "latitude": 50.877228,
      "longitude": 20.726301,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672753841,
      "ems": null
    },
    {
      "latitude": 50.875916,
      "longitude": 20.731277,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672753848,
      "ems": null
    },
    {
      "latitude": 50.874893,
      "longitude": 20.735626,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672753853,
      "ems": null
    },
    {
      "latitude": 50.873962,
      "longitude": 20.740051,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672753859,
      "ems": null
    },
    {
      "latitude": 50.873447,
      "longitude": 20.742798,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672753863,
      "ems": null
    },
    {
      "latitude": 50.872742,
      "longitude": 20.746641,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672753868,
      "ems": null
    },
    {
      "latitude": 50.872101,
      "longitude": 20.749908,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672753872,
      "ems": null
    },
    {
      "latitude": 50.871262,
      "longitude": 20.754471,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "squawk": "7000",
      "timestamp": 1672753878,
      "ems": null
    },
    {
      "latitude": 50.871029,
      "longitude": 20.75676,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1672753881,
      "ems": null
    },
    {
      "latitude": 50.870911,
      "longitude": 20.759113,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1672753884,
      "ems": null
    },
    {
      "latitude": 50.871048,
      "longitude": 20.761786,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 81,
      "squawk": "7000",
      "timestamp": 1672753888,
      "ems": null
    },
    {
      "latitude": 50.87146,
      "longitude": 20.76416,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1672753891,
      "ems": null
    },
    {
      "latitude": 50.872055,
      "longitude": 20.766165,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672753893,
      "ems": null
    },
    {
      "latitude": 50.87289,
      "longitude": 20.768051,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672753897,
      "ems": null
    },
    {
      "latitude": 50.873917,
      "longitude": 20.769653,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1672753900,
      "ems": null
    },
    {
      "latitude": 50.875168,
      "longitude": 20.770916,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1672753903,
      "ems": null
    },
    {
      "latitude": 50.876175,
      "longitude": 20.771658,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1672753905,
      "ems": null
    },
    {
      "latitude": 50.877365,
      "longitude": 20.772326,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672753908,
      "ems": null
    },
    {
      "latitude": 50.878616,
      "longitude": 20.772934,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1672753912,
      "ems": null
    },
    {
      "latitude": 50.87978,
      "longitude": 20.773468,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1672753915,
      "ems": null
    },
    {
      "latitude": 50.881073,
      "longitude": 20.773884,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1672753918,
      "ems": null
    },
    {
      "latitude": 50.882263,
      "longitude": 20.774181,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672753921,
      "ems": null
    },
    {
      "latitude": 50.883408,
      "longitude": 20.774256,
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1672753924,
      "ems": null
    },
    {
      "latitude": 50.884621,
      "longitude": 20.774002,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672753927,
      "ems": null
    },
    {
      "latitude": 50.885647,
      "longitude": 20.773468,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672753930,
      "ems": null
    },
    {
      "latitude": 50.886475,
      "longitude": 20.772623,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672753933,
      "ems": null
    },
    {
      "latitude": 50.887321,
      "longitude": 20.771332,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672753936,
      "ems": null
    },
    {
      "latitude": 50.887848,
      "longitude": 20.769951,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672753939,
      "ems": null
    },
    {
      "latitude": 50.888348,
      "longitude": 20.768356,
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672753942,
      "ems": null
    },
    {
      "latitude": 50.888763,
      "longitude": 20.766754,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672753945,
      "ems": null
    },
    {
      "latitude": 50.889137,
      "longitude": 20.765381,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672753948,
      "ems": null
    },
    {
      "latitude": 50.889542,
      "longitude": 20.763788,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672753951,
      "ems": null
    },
    {
      "latitude": 50.889816,
      "longitude": 20.762527,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672753954,
      "ems": null
    },
    {
      "latitude": 50.890209,
      "longitude": 20.760956,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672753957,
      "ems": null
    },
    {
      "latitude": 50.890533,
      "longitude": 20.759811,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672753960,
      "ems": null
    },
    {
      "latitude": 50.890812,
      "longitude": 20.758438,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672753963,
      "ems": null
    },
    {
      "latitude": 50.891094,
      "longitude": 20.757065,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672753966,
      "ems": null
    },
    {
      "latitude": 50.891418,
      "longitude": 20.755548,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672753969,
      "ems": null
    },
    {
      "latitude": 50.891693,
      "longitude": 20.754139,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672753972,
      "ems": null
    },
    {
      "latitude": 50.892349,
      "longitude": 20.751114,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672753978,
      "ems": null
    },
    {
      "latitude": 50.892956,
      "longitude": 20.748215,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672753984,
      "ems": null
    },
    {
      "latitude": 50.8937,
      "longitude": 20.745239,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672753990,
      "ems": null
    },
    {
      "latitude": 50.894302,
      "longitude": 20.742485,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672753996,
      "ems": null
    },
    {
      "latitude": 50.895004,
      "longitude": 20.739365,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754002,
      "ems": null
    },
    {
      "latitude": 50.89563,
      "longitude": 20.736546,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754008,
      "ems": null
    },
    {
      "latitude": 50.896122,
      "longitude": 20.734406,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754013,
      "ems": null
    },
    {
      "latitude": 50.897095,
      "longitude": 20.730385,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754023,
      "ems": null
    },
    {
      "latitude": 50.897842,
      "longitude": 20.727081,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754029,
      "ems": null
    },
    {
      "latitude": 50.898636,
      "longitude": 20.724258,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754035,
      "ems": null
    },
    {
      "latitude": 50.899017,
      "longitude": 20.722887,
      "altitude": {
        "feet": 875,
        "meters": 267
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672754038,
      "ems": null
    },
    {
      "latitude": 50.899799,
      "longitude": 20.720139,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754045,
      "ems": null
    },
    {
      "latitude": 50.900162,
      "longitude": 20.718878,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754047,
      "ems": null
    },
    {
      "latitude": 50.900574,
      "longitude": 20.717617,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672754050,
      "ems": null
    },
    {
      "latitude": 50.901077,
      "longitude": 20.716059,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754054,
      "ems": null
    },
    {
      "latitude": 50.901855,
      "longitude": 20.713312,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754060,
      "ems": null
    },
    {
      "latitude": 50.902496,
      "longitude": 20.710861,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754065,
      "ems": null
    },
    {
      "latitude": 50.903194,
      "longitude": 20.708008,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754072,
      "ems": null
    },
    {
      "latitude": 50.903896,
      "longitude": 20.705338,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672754078,
      "ems": null
    },
    {
      "latitude": 50.904312,
      "longitude": 20.703888,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754081,
      "ems": null
    },
    {
      "latitude": 50.90506,
      "longitude": 20.701138,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672754087,
      "ems": null
    },
    {
      "latitude": 50.905708,
      "longitude": 20.697784,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1672754093,
      "ems": null
    },
    {
      "latitude": 50.905746,
      "longitude": 20.696163,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672754096,
      "ems": null
    },
    {
      "latitude": 50.905525,
      "longitude": 20.694046,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672754099,
      "ems": null
    },
    {
      "latitude": 50.905151,
      "longitude": 20.692451,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672754102,
      "ems": null
    },
    {
      "latitude": 50.90451,
      "longitude": 20.69067,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1672754105,
      "ems": null
    },
    {
      "latitude": 50.903687,
      "longitude": 20.689186,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1672754108,
      "ems": null
    },
    {
      "latitude": 50.902679,
      "longitude": 20.687849,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1672754111,
      "ems": null
    },
    {
      "latitude": 50.901661,
      "longitude": 20.686874,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1672754114,
      "ems": null
    },
    {
      "latitude": 50.900253,
      "longitude": 20.685772,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1672754117,
      "ems": null
    },
    {
      "latitude": 50.898914,
      "longitude": 20.68512,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1672754120,
      "ems": null
    },
    {
      "latitude": 50.897377,
      "longitude": 20.684586,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1672754123,
      "ems": null
    },
    {
      "latitude": 50.895515,
      "longitude": 20.68428,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1672754126,
      "ems": null
    },
    {
      "latitude": 50.893982,
      "longitude": 20.684286,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1672754129,
      "ems": null
    },
    {
      "latitude": 50.892288,
      "longitude": 20.684286,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1672754132,
      "ems": null
    },
    {
      "latitude": 50.890549,
      "longitude": 20.684286,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1672754135,
      "ems": null
    },
    {
      "latitude": 50.888809,
      "longitude": 20.684435,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1672754138,
      "ems": null
    },
    {
      "latitude": 50.887135,
      "longitude": 20.684586,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1672754141,
      "ems": null
    },
    {
      "latitude": 50.885086,
      "longitude": 20.684891,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1672754144,
      "ems": null
    },
    {
      "latitude": 50.883362,
      "longitude": 20.685177,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1672754147,
      "ems": null
    },
    {
      "latitude": 50.881531,
      "longitude": 20.685474,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1672754150,
      "ems": null
    },
    {
      "latitude": 50.879745,
      "longitude": 20.686216,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672754153,
      "ems": null
    },
    {
      "latitude": 50.877918,
      "longitude": 20.687561,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1672754156,
      "ems": null
    },
    {
      "latitude": 50.876431,
      "longitude": 20.689316,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1672754159,
      "ems": null
    },
    {
      "latitude": 50.874847,
      "longitude": 20.69191,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1672754163,
      "ems": null
    },
    {
      "latitude": 50.873684,
      "longitude": 20.694504,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1672754166,
      "ems": null
    },
    {
      "latitude": 50.87289,
      "longitude": 20.697021,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672754168,
      "ems": null
    },
    {
      "latitude": 50.872334,
      "longitude": 20.699997,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1672754171,
      "ems": null
    },
    {
      "latitude": 50.872005,
      "longitude": 20.702972,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1672754174,
      "ems": null
    },
    {
      "latitude": 50.871826,
      "longitude": 20.706036,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1672754177,
      "ems": null
    },
    {
      "latitude": 50.871689,
      "longitude": 20.709377,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1672754181,
      "ems": null
    },
    {
      "latitude": 50.87146,
      "longitude": 20.712273,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1672754184,
      "ems": null
    },
    {
      "latitude": 50.87117,
      "longitude": 20.714874,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1672754186,
      "ems": null
    },
    {
      "latitude": 50.870773,
      "longitude": 20.717766,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672754189,
      "ems": null
    },
    {
      "latitude": 50.870316,
      "longitude": 20.720661,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1672754193,
      "ems": null
    },
    {
      "latitude": 50.869865,
      "longitude": 20.723419,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1672754196,
      "ems": null
    },
    {
      "latitude": 50.869492,
      "longitude": 20.725559,
      "altitude": {
        "feet": 1650,
        "meters": 503
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1672754199,
      "ems": null
    },
    {
      "latitude": 50.868668,
      "longitude": 20.730978,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672754205,
      "ems": null
    },
    {
      "latitude": 50.868282,
      "longitude": 20.73349,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672754208,
      "ems": null
    },
    {
      "latitude": 50.867954,
      "longitude": 20.735855,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672754211,
      "ems": null
    },
    {
      "latitude": 50.867676,
      "longitude": 20.737991,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "timestamp": 1672754214,
      "ems": null
    },
    {
      "latitude": 50.86702,
      "longitude": 20.742781,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1672754220,
      "ems": null
    },
    {
      "latitude": 50.866379,
      "longitude": 20.747532,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1672754226,
      "ems": null
    },
    {
      "latitude": 50.865738,
      "longitude": 20.75206,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672754231,
      "ems": null
    },
    {
      "latitude": 50.865025,
      "longitude": 20.757141,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1672754238,
      "ems": null
    },
    {
      "latitude": 50.864883,
      "longitude": 20.759506,
      "altitude": {
        "feet": 1600,
        "meters": 488
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
      "heading": 92,
      "squawk": "7000",
      "timestamp": 1672754241,
      "ems": null
    },
    {
      "latitude": 50.865051,
      "longitude": 20.761637,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672754244,
      "ems": null
    },
    {
      "latitude": 50.865627,
      "longitude": 20.763931,
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
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672754247,
      "ems": null
    },
    {
      "latitude": 50.866421,
      "longitude": 20.76561,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1672754250,
      "ems": null
    },
    {
      "latitude": 50.867294,
      "longitude": 20.766907,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1672754253,
      "ems": null
    },
    {
      "latitude": 50.868347,
      "longitude": 20.768021,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1672754256,
      "ems": null
    },
    {
      "latitude": 50.869446,
      "longitude": 20.769119,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1672754259,
      "ems": null
    },
    {
      "latitude": 50.870564,
      "longitude": 20.770187,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1672754262,
      "ems": null
    },
    {
      "latitude": 50.871735,
      "longitude": 20.771137,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1672754265,
      "ems": null
    },
    {
      "latitude": 50.872787,
      "longitude": 20.772028,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1672754268,
      "ems": null
    },
    {
      "latitude": 50.873886,
      "longitude": 20.772919,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "squawk": "7000",
      "timestamp": 1672754271,
      "ems": null
    },
    {
      "latitude": 50.875031,
      "longitude": 20.773849,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1672754274,
      "ems": null
    },
    {
      "latitude": 50.876194,
      "longitude": 20.774765,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1672754277,
      "ems": null
    },
    {
      "latitude": 50.877274,
      "longitude": 20.775593,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1672754280,
      "ems": null
    },
    {
      "latitude": 50.878601,
      "longitude": 20.776556,
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1672754283,
      "ems": null
    },
    {
      "latitude": 50.87978,
      "longitude": 20.777359,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672754286,
      "ems": null
    },
    {
      "latitude": 50.880852,
      "longitude": 20.778046,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1672754289,
      "ems": null
    },
    {
      "latitude": 50.88208,
      "longitude": 20.778486,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1672754292,
      "ems": null
    },
    {
      "latitude": 50.88327,
      "longitude": 20.778412,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1672754295,
      "ems": null
    },
    {
      "latitude": 50.884277,
      "longitude": 20.777967,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672754298,
      "ems": null
    },
    {
      "latitude": 50.885193,
      "longitude": 20.777002,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672754301,
      "ems": null
    },
    {
      "latitude": 50.885971,
      "longitude": 20.775833,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672754304,
      "ems": null
    },
    {
      "latitude": 50.886578,
      "longitude": 20.774536,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672754307,
      "ems": null
    },
    {
      "latitude": 50.887043,
      "longitude": 20.773163,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672754310,
      "ems": null
    },
    {
      "latitude": 50.887508,
      "longitude": 20.771637,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672754313,
      "ems": null
    },
    {
      "latitude": 50.887882,
      "longitude": 20.77034,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672754316,
      "ems": null
    },
    {
      "latitude": 50.888306,
      "longitude": 20.768911,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672754319,
      "ems": null
    },
    {
      "latitude": 50.888626,
      "longitude": 20.767574,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754323,
      "ems": null
    },
    {
      "latitude": 50.88895,
      "longitude": 20.76622,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754326,
      "ems": null
    },
    {
      "latitude": 50.889267,
      "longitude": 20.765051,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754328,
      "ems": null
    },
    {
      "latitude": 50.889557,
      "longitude": 20.763779,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754331,
      "ems": null
    },
    {
      "latitude": 50.889881,
      "longitude": 20.762482,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754335,
      "ems": null
    },
    {
      "latitude": 50.890209,
      "longitude": 20.760956,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672754338,
      "ems": null
    },
    {
      "latitude": 50.890442,
      "longitude": 20.759735,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754340,
      "ems": null
    },
    {
      "latitude": 50.890766,
      "longitude": 20.758209,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754343,
      "ems": null
    },
    {
      "latitude": 50.891418,
      "longitude": 20.755474,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754349,
      "ems": null
    },
    {
      "latitude": 50.891743,
      "longitude": 20.753937,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672754352,
      "ems": null
    },
    {
      "latitude": 50.892059,
      "longitude": 20.752357,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672754356,
      "ems": null
    },
    {
      "latitude": 50.892349,
      "longitude": 20.750885,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672754359,
      "ems": null
    },
    {
      "latitude": 50.893021,
      "longitude": 20.747829,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754365,
      "ems": null
    },
    {
      "latitude": 50.893745,
      "longitude": 20.744629,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754371,
      "ems": null
    },
    {
      "latitude": 50.89444,
      "longitude": 20.741594,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754377,
      "ems": null
    },
    {
      "latitude": 50.895172,
      "longitude": 20.738476,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754383,
      "ems": null
    },
    {
      "latitude": 50.895905,
      "longitude": 20.735357,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754389,
      "ems": null
    },
    {
      "latitude": 50.896587,
      "longitude": 20.732498,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754395,
      "ems": null
    },
    {
      "latitude": 50.896957,
      "longitude": 20.731276,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 109.3,
        "kts": 59,
        "mph": 67.9
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754398,
      "ems": null
    },
    {
      "latitude": 50.897598,
      "longitude": 20.728973,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754404,
      "ems": null
    },
    {
      "latitude": 50.897934,
      "longitude": 20.727921,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672754407,
      "ems": null
    },
    {
      "latitude": 50.898651,
      "longitude": 20.725559,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754413,
      "ems": null
    },
    {
      "latitude": 50.89938,
      "longitude": 20.722961,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754419,
      "ems": null
    },
    {
      "latitude": 50.899841,
      "longitude": 20.721254,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754422,
      "ems": null
    },
    {
      "latitude": 50.900681,
      "longitude": 20.718384,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754428,
      "ems": null
    },
    {
      "latitude": 50.901489,
      "longitude": 20.715538,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754434,
      "ems": null
    },
    {
      "latitude": 50.902313,
      "longitude": 20.712717,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672754440,
      "ems": null
    },
    {
      "latitude": 50.903011,
      "longitude": 20.709763,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672754446,
      "ems": null
    },
    {
      "latitude": 50.90332,
      "longitude": 20.708189,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754449,
      "ems": null
    },
    {
      "latitude": 50.903614,
      "longitude": 20.706711,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754452,
      "ems": null
    },
    {
      "latitude": 50.904034,
      "longitude": 20.704956,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754455,
      "ems": null
    },
    {
      "latitude": 50.904373,
      "longitude": 20.703217,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754458,
      "ems": null
    },
    {
      "latitude": 50.904732,
      "longitude": 20.701447,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754461,
      "ems": null
    },
    {
      "latitude": 50.905014,
      "longitude": 20.699726,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672754464,
      "ems": null
    },
    {
      "latitude": 50.90506,
      "longitude": 20.697649,
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672754468,
      "ems": null
    },
    {
      "latitude": 50.904873,
      "longitude": 20.695877,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672754470,
      "ems": null
    },
    {
      "latitude": 50.904373,
      "longitude": 20.694012,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1672754473,
      "ems": null
    },
    {
      "latitude": 50.903801,
      "longitude": 20.692673,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1672754476,
      "ems": null
    },
    {
      "latitude": 50.902725,
      "longitude": 20.691042,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1672754479,
      "ems": null
    },
    {
      "latitude": 50.901627,
      "longitude": 20.689854,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1672754483,
      "ems": null
    },
    {
      "latitude": 50.900356,
      "longitude": 20.689087,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1672754485,
      "ems": null
    },
    {
      "latitude": 50.899101,
      "longitude": 20.688553,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1672754489,
      "ems": null
    },
    {
      "latitude": 50.897507,
      "longitude": 20.687998,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1672754491,
      "ems": null
    },
    {
      "latitude": 50.896088,
      "longitude": 20.687479,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1672754494,
      "ems": null
    },
    {
      "latitude": 50.894485,
      "longitude": 20.686884,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1672754498,
      "ems": null
    },
    {
      "latitude": 50.893143,
      "longitude": 20.686417,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1672754500,
      "ems": null
    },
    {
      "latitude": 50.891605,
      "longitude": 20.686188,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1672754504,
      "ems": null
    },
    {
      "latitude": 50.889954,
      "longitude": 20.68644,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1672754506,
      "ems": null
    },
    {
      "latitude": 50.888535,
      "longitude": 20.686884,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1672754509,
      "ems": null
    },
    {
      "latitude": 50.886566,
      "longitude": 20.688295,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1672754513,
      "ems": null
    },
    {
      "latitude": 50.885147,
      "longitude": 20.689854,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672754516,
      "ems": null
    },
    {
      "latitude": 50.884003,
      "longitude": 20.691561,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1672754519,
      "ems": null
    },
    {
      "latitude": 50.882904,
      "longitude": 20.693937,
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1672754522,
      "ems": null
    },
    {
      "latitude": 50.882107,
      "longitude": 20.696411,
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672754525,
      "ems": null
    },
    {
      "latitude": 50.88155,
      "longitude": 20.698547,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672754527,
      "ems": null
    },
    {
      "latitude": 50.880981,
      "longitude": 20.701361,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672754531,
      "ems": null
    },
    {
      "latitude": 50.880524,
      "longitude": 20.703884,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1672754534,
      "ems": null
    },
    {
      "latitude": 50.880108,
      "longitude": 20.706329,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1672754537,
      "ems": null
    },
    {
      "latitude": 50.879734,
      "longitude": 20.708618,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1672754539,
      "ems": null
    },
    {
      "latitude": 50.879314,
      "longitude": 20.711212,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1672754543,
      "ems": null
    },
    {
      "latitude": 50.878876,
      "longitude": 20.713831,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1672754546,
      "ems": null
    },
    {
      "latitude": 50.878601,
      "longitude": 20.71591,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1672754549,
      "ems": null
    },
    {
      "latitude": 50.878242,
      "longitude": 20.718231,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1672754552,
      "ems": null
    },
    {
      "latitude": 50.877777,
      "longitude": 20.720825,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672754555,
      "ems": null
    },
    {
      "latitude": 50.876907,
      "longitude": 20.725262,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672754561,
      "ems": null
    },
    {
      "latitude": 50.875946,
      "longitude": 20.729864,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672754567,
      "ems": null
    },
    {
      "latitude": 50.875496,
      "longitude": 20.731964,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672754570,
      "ems": null
    },
    {
      "latitude": 50.874565,
      "longitude": 20.736465,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672754576,
      "ems": null
    },
    {
      "latitude": 50.873634,
      "longitude": 20.741119,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672754582,
      "ems": null
    },
    {
      "latitude": 50.872833,
      "longitude": 20.745527,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672754588,
      "ems": null
    },
    {
      "latitude": 50.871826,
      "longitude": 20.749981,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672754594,
      "ems": null
    },
    {
      "latitude": 50.870937,
      "longitude": 20.754623,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1672754600,
      "ems": null
    },
    {
      "latitude": 50.870911,
      "longitude": 20.756886,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1672754603,
      "ems": null
    },
    {
      "latitude": 50.871353,
      "longitude": 20.759125,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1672754606,
      "ems": null
    },
    {
      "latitude": 50.872147,
      "longitude": 20.761185,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672754609,
      "ems": null
    },
    {
      "latitude": 50.873016,
      "longitude": 20.762453,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1672754612,
      "ems": null
    },
    {
      "latitude": 50.874115,
      "longitude": 20.763418,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1672754615,
      "ems": null
    },
    {
      "latitude": 50.875168,
      "longitude": 20.76416,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672754618,
      "ems": null
    },
    {
      "latitude": 50.876266,
      "longitude": 20.764828,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672754621,
      "ems": null
    },
    {
      "latitude": 50.877457,
      "longitude": 20.76557,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672754625,
      "ems": null
    },
    {
      "latitude": 50.878475,
      "longitude": 20.766144,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672754627,
      "ems": null
    },
    {
      "latitude": 50.879562,
      "longitude": 20.766684,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1672754630,
      "ems": null
    },
    {
      "latitude": 50.880756,
      "longitude": 20.767212,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672754633,
      "ems": null
    },
    {
      "latitude": 50.881874,
      "longitude": 20.767746,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672754636,
      "ems": null
    },
    {
      "latitude": 50.883087,
      "longitude": 20.76828,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1672754639,
      "ems": null
    },
    {
      "latitude": 50.884201,
      "longitude": 20.768661,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1672754643,
      "ems": null
    },
    {
      "latitude": 50.885284,
      "longitude": 20.768986,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1672754645,
      "ems": null
    },
    {
      "latitude": 50.886623,
      "longitude": 20.769196,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672754649,
      "ems": null
    },
    {
      "latitude": 50.887619,
      "longitude": 20.768763,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672754652,
      "ems": null
    },
    {
      "latitude": 50.888306,
      "longitude": 20.767723,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672754655,
      "ems": null
    },
    {
      "latitude": 50.888672,
      "longitude": 20.766535,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672754657,
      "ems": null
    },
    {
      "latitude": 50.889084,
      "longitude": 20.764902,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754661,
      "ems": null
    },
    {
      "latitude": 50.88945,
      "longitude": 20.763493,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754664,
      "ems": null
    },
    {
      "latitude": 50.889771,
      "longitude": 20.76223,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754667,
      "ems": null
    },
    {
      "latitude": 50.890068,
      "longitude": 20.760803,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754670,
      "ems": null
    },
    {
      "latitude": 50.890366,
      "longitude": 20.759558,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672754673,
      "ems": null
    },
    {
      "latitude": 50.890629,
      "longitude": 20.758209,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754676,
      "ems": null
    },
    {
      "latitude": 50.890915,
      "longitude": 20.75696,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754679,
      "ems": null
    },
    {
      "latitude": 50.891281,
      "longitude": 20.755623,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754682,
      "ems": null
    },
    {
      "latitude": 50.891647,
      "longitude": 20.754139,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672754685,
      "ems": null
    },
    {
      "latitude": 50.892303,
      "longitude": 20.751266,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1672754691,
      "ems": null
    },
    {
      "latitude": 50.892883,
      "longitude": 20.748497,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754697,
      "ems": null
    },
    {
      "latitude": 50.893524,
      "longitude": 20.745676,
      "altitude": {
        "feet": 925,
        "meters": 282
      },
      "speed": {
        "kmh": 129.6,
        "kts": 70,
        "mph": 80.6
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754703,
      "ems": null
    },
    {
      "latitude": 50.894257,
      "longitude": 20.742569,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754709,
      "ems": null
    },
    {
      "latitude": 50.894577,
      "longitude": 20.741074,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672754712,
      "ems": null
    },
    {
      "latitude": 50.895329,
      "longitude": 20.737991,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754718,
      "ems": null
    },
    {
      "latitude": 50.895889,
      "longitude": 20.735474,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754724,
      "ems": null
    },
    {
      "latitude": 50.896271,
      "longitude": 20.733799,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754728,
      "ems": null
    },
    {
      "latitude": 50.897003,
      "longitude": 20.730515,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754736,
      "ems": null
    },
    {
      "latitude": 50.897701,
      "longitude": 20.727768,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754742,
      "ems": null
    },
    {
      "latitude": 50.898403,
      "longitude": 20.725327,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 120.4,
        "kts": 65,
        "mph": 74.8
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672754748,
      "ems": null
    },
    {
      "latitude": 50.898869,
      "longitude": 20.723877,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754751,
      "ems": null
    },
    {
      "latitude": 50.899284,
      "longitude": 20.722504,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754754,
      "ems": null
    },
    {
      "latitude": 50.899704,
      "longitude": 20.721254,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754757,
      "ems": null
    },
    {
      "latitude": 50.900116,
      "longitude": 20.719843,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672754760,
      "ems": null
    },
    {
      "latitude": 50.900543,
      "longitude": 20.71846,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672754763,
      "ems": null
    },
    {
      "latitude": 50.901306,
      "longitude": 20.715836,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672754770,
      "ems": null
    },
    {
      "latitude": 50.902031,
      "longitude": 20.713272,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754775,
      "ems": null
    },
    {
      "latitude": 50.902779,
      "longitude": 20.710678,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672754781,
      "ems": null
    },
    {
      "latitude": 50.903614,
      "longitude": 20.707855,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754787,
      "ems": null
    },
    {
      "latitude": 50.904282,
      "longitude": 20.705145,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754794,
      "ems": null
    },
    {
      "latitude": 50.905014,
      "longitude": 20.702696,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754800,
      "ems": null
    },
    {
      "latitude": 50.905838,
      "longitude": 20.700098,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672754806,
      "ems": null
    },
    {
      "latitude": 50.906643,
      "longitude": 20.697098,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754812,
      "ems": null
    },
    {
      "latitude": 50.907433,
      "longitude": 20.694351,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754817,
      "ems": null
    },
    {
      "latitude": 50.90799,
      "longitude": 20.692673,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754821,
      "ems": null
    },
    {
      "latitude": 50.908951,
      "longitude": 20.689779,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672754827,
      "ems": null
    },
    {
      "latitude": 50.909958,
      "longitude": 20.686884,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672754833,
      "ems": null
    },
    {
      "latitude": 50.910965,
      "longitude": 20.683842,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672754839,
      "ems": null
    },
    {
      "latitude": 50.9119,
      "longitude": 20.681,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672754845,
      "ems": null
    },
    {
      "latitude": 50.91288,
      "longitude": 20.678177,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672754851,
      "ems": null
    },
    {
      "latitude": 50.913757,
      "longitude": 20.675007,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672754857,
      "ems": null
    },
    {
      "latitude": 50.914124,
      "longitude": 20.673523,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672754860,
      "ems": null
    },
    {
      "latitude": 50.91423,
      "longitude": 20.673065,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672754861,
      "ems": null
    },
    {
      "latitude": 50.914509,
      "longitude": 20.671539,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672754864,
      "ems": null
    },
    {
      "latitude": 50.914742,
      "longitude": 20.670471,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672754866,
      "ems": null
    },
    {
      "latitude": 50.915066,
      "longitude": 20.668335,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672754870,
      "ems": null
    },
    {
      "latitude": 50.915314,
      "longitude": 20.66662,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672754873,
      "ems": null
    },
    {
      "latitude": 50.915531,
      "longitude": 20.665131,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 135.2,
        "kts": 73,
        "mph": 84
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672754876,
      "ems": null
    },
    {
      "latitude": 50.915771,
      "longitude": 20.663502,
      "altitude": {
        "feet": 2425,
        "meters": 739
      },
      "speed": {
        "kmh": 131.5,
        "kts": 71,
        "mph": 81.7
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1672754879,
      "ems": null
    },
    {
      "latitude": 50.916046,
      "longitude": 20.661943,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672754882,
      "ems": null
    },
    {
      "latitude": 50.916325,
      "longitude": 20.660477,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672754885,
      "ems": null
    },
    {
      "latitude": 50.916603,
      "longitude": 20.658722,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672754888,
      "ems": null
    },
    {
      "latitude": 50.917255,
      "longitude": 20.655441,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754894,
      "ems": null
    },
    {
      "latitude": 50.917923,
      "longitude": 20.65259,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672754900,
      "ems": null
    },
    {
      "latitude": 50.918327,
      "longitude": 20.65094,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "timestamp": 1672754903,
      "ems": null
    },
    {
      "latitude": 50.918655,
      "longitude": 20.649176,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672754906,
      "ems": null
    },
    {
      "latitude": 50.919113,
      "longitude": 20.64628,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672754912,
      "ems": null
    },
    {
      "latitude": 50.919159,
      "longitude": 20.643978,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672754915,
      "ems": null
    },
    {
      "latitude": 50.919071,
      "longitude": 20.642242,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1672754918,
      "ems": null
    },
    {
      "latitude": 50.91893,
      "longitude": 20.640182,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672754921,
      "ems": null
    },
    {
      "latitude": 50.918743,
      "longitude": 20.63858,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672754924,
      "ems": null
    },
    {
      "latitude": 50.91856,
      "longitude": 20.636368,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672754927,
      "ems": null
    },
    {
      "latitude": 50.918278,
      "longitude": 20.63446,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672754930,
      "ems": null
    },
    {
      "latitude": 50.918015,
      "longitude": 20.632547,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672754933,
      "ems": null
    },
    {
      "latitude": 50.917694,
      "longitude": 20.630766,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672754936,
      "ems": null
    },
    {
      "latitude": 50.917255,
      "longitude": 20.62851,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672754940,
      "ems": null
    },
    {
      "latitude": 50.916927,
      "longitude": 20.626602,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672754943,
      "ems": null
    },
    {
      "latitude": 50.916557,
      "longitude": 20.624619,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672754946,
      "ems": null
    },
    {
      "latitude": 50.916183,
      "longitude": 20.622526,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672754949,
      "ems": null
    },
    {
      "latitude": 50.915771,
      "longitude": 20.620596,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672754951,
      "ems": null
    },
    {
      "latitude": 50.915359,
      "longitude": 20.618443,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672754955,
      "ems": null
    },
    {
      "latitude": 50.914974,
      "longitude": 20.616455,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "squawk": "7000",
      "timestamp": 1672754957,
      "ems": null
    },
    {
      "latitude": 50.914536,
      "longitude": 20.614286,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672754961,
      "ems": null
    },
    {
      "latitude": 50.913712,
      "longitude": 20.610054,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672754967,
      "ems": null
    },
    {
      "latitude": 50.912739,
      "longitude": 20.605392,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672754973,
      "ems": null
    },
    {
      "latitude": 50.911926,
      "longitude": 20.601147,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672754979,
      "ems": null
    },
    {
      "latitude": 50.910923,
      "longitude": 20.596466,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672754985,
      "ems": null
    },
    {
      "latitude": 50.910038,
      "longitude": 20.592346,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672754991,
      "ems": null
    },
    {
      "latitude": 50.909016,
      "longitude": 20.587616,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672754997,
      "ems": null
    },
    {
      "latitude": 50.908218,
      "longitude": 20.583109,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672755003,
      "ems": null
    },
    {
      "latitude": 50.907478,
      "longitude": 20.578995,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672755009,
      "ems": null
    },
    {
      "latitude": 50.906662,
      "longitude": 20.5742,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1672755015,
      "ems": null
    },
    {
      "latitude": 50.906406,
      "longitude": 20.571899,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672755018,
      "ems": null
    },
    {
      "latitude": 50.906342,
      "longitude": 20.569376,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755021,
      "ems": null
    },
    {
      "latitude": 50.90625,
      "longitude": 20.566778,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755024,
      "ems": null
    },
    {
      "latitude": 50.906204,
      "longitude": 20.564402,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755027,
      "ems": null
    },
    {
      "latitude": 50.906158,
      "longitude": 20.562027,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755030,
      "ems": null
    },
    {
      "latitude": 50.906113,
      "longitude": 20.55965,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1672755033,
      "ems": null
    },
    {
      "latitude": 50.906036,
      "longitude": 20.557556,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1672755036,
      "ems": null
    },
    {
      "latitude": 50.905884,
      "longitude": 20.554974,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1672755039,
      "ems": null
    },
    {
      "latitude": 50.905525,
      "longitude": 20.550308,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672755045,
      "ems": null
    },
    {
      "latitude": 50.905293,
      "longitude": 20.547943,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672755048,
      "ems": null
    },
    {
      "latitude": 50.90506,
      "longitude": 20.545578,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672755052,
      "ems": null
    },
    {
      "latitude": 50.904785,
      "longitude": 20.543097,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672755054,
      "ems": null
    },
    {
      "latitude": 50.904499,
      "longitude": 20.540695,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672755057,
      "ems": null
    },
    {
      "latitude": 50.904266,
      "longitude": 20.538483,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672755061,
      "ems": null
    },
    {
      "latitude": 50.903942,
      "longitude": 20.536194,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672755063,
      "ems": null
    },
    {
      "latitude": 50.903641,
      "longitude": 20.533819,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672755066,
      "ems": null
    },
    {
      "latitude": 50.903194,
      "longitude": 20.529556,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1672755072,
      "ems": null
    },
    {
      "latitude": 50.90287,
      "longitude": 20.524597,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672755078,
      "ems": null
    },
    {
      "latitude": 50.902405,
      "longitude": 20.519638,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672755085,
      "ems": null
    },
    {
      "latitude": 50.902031,
      "longitude": 20.515213,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672755091,
      "ems": null
    },
    {
      "latitude": 50.901894,
      "longitude": 20.513,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1672755093,
      "ems": null
    },
    {
      "latitude": 50.901752,
      "longitude": 20.511017,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1672755096,
      "ems": null
    },
    {
      "latitude": 50.901672,
      "longitude": 20.508282,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755100,
      "ems": null
    },
    {
      "latitude": 50.901627,
      "longitude": 20.505907,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755103,
      "ems": null
    },
    {
      "latitude": 50.901627,
      "longitude": 20.503458,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755106,
      "ems": null
    },
    {
      "latitude": 50.901627,
      "longitude": 20.501305,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755108,
      "ems": null
    },
    {
      "latitude": 50.901661,
      "longitude": 20.498734,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755112,
      "ems": null
    },
    {
      "latitude": 50.901661,
      "longitude": 20.496445,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755115,
      "ems": null
    },
    {
      "latitude": 50.901627,
      "longitude": 20.494104,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755118,
      "ems": null
    },
    {
      "latitude": 50.901661,
      "longitude": 20.49202,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755121,
      "ems": null
    },
    {
      "latitude": 50.901672,
      "longitude": 20.489799,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755124,
      "ems": null
    },
    {
      "latitude": 50.901718,
      "longitude": 20.487202,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755127,
      "ems": null
    },
    {
      "latitude": 50.901752,
      "longitude": 20.482559,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755133,
      "ems": null
    },
    {
      "latitude": 50.901752,
      "longitude": 20.478058,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672755139,
      "ems": null
    },
    {
      "latitude": 50.901627,
      "longitude": 20.473541,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755145,
      "ems": null
    },
    {
      "latitude": 50.901535,
      "longitude": 20.469162,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755151,
      "ems": null
    },
    {
      "latitude": 50.90152,
      "longitude": 20.464935,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755157,
      "ems": null
    },
    {
      "latitude": 50.901566,
      "longitude": 20.461349,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755163,
      "ems": null
    },
    {
      "latitude": 50.901566,
      "longitude": 20.458145,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755169,
      "ems": null
    },
    {
      "latitude": 50.901428,
      "longitude": 20.45517,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1672755175,
      "ems": null
    },
    {
      "latitude": 50.901333,
      "longitude": 20.452347,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755181,
      "ems": null
    },
    {
      "latitude": 50.90126,
      "longitude": 20.449492,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755187,
      "ems": null
    },
    {
      "latitude": 50.90126,
      "longitude": 20.446671,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755193,
      "ems": null
    },
    {
      "latitude": 50.901287,
      "longitude": 20.445175,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1672755197,
      "ems": null
    },
    {
      "latitude": 50.901306,
      "longitude": 20.443998,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1672755199,
      "ems": null
    },
    {
      "latitude": 50.901352,
      "longitude": 20.442736,
      "altitude": {
        "feet": 1950,
        "meters": 594
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1672755202,
      "ems": null
    },
    {
      "latitude": 50.901382,
      "longitude": 20.441818,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1672755204,
      "ems": null
    },
    {
      "latitude": 50.901474,
      "longitude": 20.438614,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672755210,
      "ems": null
    },
    {
      "latitude": 50.901672,
      "longitude": 20.437168,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672755213,
      "ems": null
    },
    {
      "latitude": 50.902039,
      "longitude": 20.436203,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672755216,
      "ems": null
    },
    {
      "latitude": 50.902725,
      "longitude": 20.435163,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672755219,
      "ems": null
    },
    {
      "latitude": 50.903568,
      "longitude": 20.43457,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672755222,
      "ems": null
    },
    {
      "latitude": 50.904785,
      "longitude": 20.434273,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -1664,
        "ms": -8.5
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672755225,
      "ems": null
    },
    {
      "latitude": 50.905895,
      "longitude": 20.434418,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -1728,
        "ms": -8.8
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672755228,
      "ems": null
    },
    {
      "latitude": 50.906891,
      "longitude": 20.434793,
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
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672755231,
      "ems": null
    },
    {
      "latitude": 50.908081,
      "longitude": 20.435461,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1672755234,
      "ems": null
    },
    {
      "latitude": 50.909248,
      "longitude": 20.436478,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1672755237,
      "ems": null
    },
    {
      "latitude": 50.910271,
      "longitude": 20.437622,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 163,
        "kts": 88,
        "mph": 101.3
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1672755240,
      "ems": null
    },
    {
      "latitude": 50.910969,
      "longitude": 20.438766,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1672755243,
      "ems": null
    },
    {
      "latitude": 50.911606,
      "longitude": 20.439989,
      "altitude": {
        "feet": 1000,
        "meters": 305
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672755245,
      "ems": null
    },
    {
      "latitude": 50.91275,
      "longitude": 20.442661,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1672755249,
      "ems": null
    },
    {
      "latitude": 50.913624,
      "longitude": 20.444641,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1672755252,
      "ems": null
    },
    {
      "latitude": 50.91449,
      "longitude": 20.446596,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1672755256,
      "ems": null
    },
    {
      "latitude": 50.915314,
      "longitude": 20.448378,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672755258,
      "ems": null
    },
    {
      "latitude": 50.916046,
      "longitude": 20.449905,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672755261,
      "ems": null
    },
    {
      "latitude": 50.916927,
      "longitude": 20.451736,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 52,
      "squawk": "7000",
      "timestamp": 1672755264,
      "ems": null
    },
    {
      "latitude": 50.918015,
      "longitude": 20.453871,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1672755267,
      "ems": null
    },
    {
      "latitude": 50.91893,
      "longitude": 20.455652,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1672755270,
      "ems": null
    },
    {
      "latitude": 50.919846,
      "longitude": 20.457434,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1672755273,
      "ems": null
    },
    {
      "latitude": 50.921631,
      "longitude": 20.460773,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1672755279,
      "ems": null
    },
    {
      "latitude": 50.922684,
      "longitude": 20.462629,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1672755282,
      "ems": null
    },
    {
      "latitude": 50.923737,
      "longitude": 20.46456,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1672755286,
      "ems": null
    },
    {
      "latitude": 50.92543,
      "longitude": 20.467976,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1672755292,
      "ems": null
    },
    {
      "latitude": 50.927032,
      "longitude": 20.471685,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1672755298,
      "ems": null
    },
    {
      "latitude": 50.927822,
      "longitude": 20.473709,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 192.6,
        "kts": 104,
        "mph": 119.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1672755301,
      "ems": null
    },
    {
      "latitude": 50.928406,
      "longitude": 20.475471,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672755303,
      "ems": null
    },
    {
      "latitude": 50.929092,
      "longitude": 20.477625,
      "altitude": {
        "feet": 1850,
        "meters": 564
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1672755307,
      "ems": null
    },
    {
      "latitude": 50.929688,
      "longitude": 20.479481,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1672755309,
      "ems": null
    },
    {
      "latitude": 50.930336,
      "longitude": 20.481644,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 64,
      "squawk": "7000",
      "timestamp": 1672755312,
      "ems": null
    },
    {
      "latitude": 50.930878,
      "longitude": 20.48386,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1672755316,
      "ems": null
    },
    {
      "latitude": 50.93129,
      "longitude": 20.486309,
      "altitude": {
        "feet": 1975,
        "meters": 602
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1672755319,
      "ems": null
    },
    {
      "latitude": 50.931454,
      "longitude": 20.488586,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1672755322,
      "ems": null
    },
    {
      "latitude": 50.931362,
      "longitude": 20.491028,
      "altitude": {
        "feet": 2050,
        "meters": 625
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1672755325,
      "ems": null
    },
    {
      "latitude": 50.930923,
      "longitude": 20.493288,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1672755328,
      "ems": null
    },
    {
      "latitude": 50.930195,
      "longitude": 20.495529,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1672755331,
      "ems": null
    },
    {
      "latitude": 50.929127,
      "longitude": 20.497513,
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1672755334,
      "ems": null
    },
    {
      "latitude": 50.927914,
      "longitude": 20.498886,
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1672755337,
      "ems": null
    },
    {
      "latitude": 50.926437,
      "longitude": 20.499746,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1672755340,
      "ems": null
    },
    {
      "latitude": 50.924927,
      "longitude": 20.499895,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1672755343,
      "ems": null
    },
    {
      "latitude": 50.923508,
      "longitude": 20.499523,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1672755346,
      "ems": null
    },
    {
      "latitude": 50.922283,
      "longitude": 20.498657,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1672755349,
      "ems": null
    },
    {
      "latitude": 50.921307,
      "longitude": 20.497208,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1672755352,
      "ems": null
    },
    {
      "latitude": 50.92067,
      "longitude": 20.495514,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1672755355,
      "ems": null
    },
    {
      "latitude": 50.920422,
      "longitude": 20.493546,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1672755358,
      "ems": null
    },
    {
      "latitude": 50.920486,
      "longitude": 20.491507,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672755361,
      "ems": null
    },
    {
      "latitude": 50.920578,
      "longitude": 20.489651,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672755364,
      "ems": null
    },
    {
      "latitude": 50.920761,
      "longitude": 20.487497,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 155.6,
        "kts": 84,
        "mph": 96.7
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755367,
      "ems": null
    },
    {
      "latitude": 50.920898,
      "longitude": 20.485939,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755370,
      "ems": null
    },
    {
      "latitude": 50.921173,
      "longitude": 20.483934,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1672755373,
      "ems": null
    },
    {
      "latitude": 50.921356,
      "longitude": 20.482302,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672755376,
      "ems": null
    },
    {
      "latitude": 50.921631,
      "longitude": 20.480446,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672755379,
      "ems": null
    },
    {
      "latitude": 50.921906,
      "longitude": 20.478739,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672755382,
      "ems": null
    },
    {
      "latitude": 50.922188,
      "longitude": 20.47699,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672755385,
      "ems": null
    },
    {
      "latitude": 50.922546,
      "longitude": 20.47525,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672755388,
      "ems": null
    },
    {
      "latitude": 50.922821,
      "longitude": 20.473839,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672755391,
      "ems": null
    },
    {
      "latitude": 50.922935,
      "longitude": 20.473328,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672755392,
      "ems": null
    },
    {
      "latitude": 50.923141,
      "longitude": 20.472281,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672755394,
      "ems": null
    },
    {
      "latitude": 50.923725,
      "longitude": 20.46669,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672755403,
      "ems": null
    },
    {
      "latitude": 50.92382,
      "longitude": 20.465164,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1672755405,
      "ems": null
    },
    {
      "latitude": 50.923912,
      "longitude": 20.462799,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672755409,
      "ems": null
    },
    {
      "latitude": 50.924004,
      "longitude": 20.460968,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1672755412,
      "ems": null
    },
    {
      "latitude": 50.924099,
      "longitude": 20.459061,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1672755415,
      "ems": null
    },
    {
      "latitude": 50.924191,
      "longitude": 20.457001,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1672755418,
      "ems": null
    },
    {
      "latitude": 50.924286,
      "longitude": 20.455322,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672755421,
      "ems": null
    },
    {
      "latitude": 50.924377,
      "longitude": 20.453873,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672755424,
      "ems": null
    },
    {
      "latitude": 50.924652,
      "longitude": 20.450382,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672755430,
      "ems": null
    },
    {
      "latitude": 50.924835,
      "longitude": 20.447264,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1672755436,
      "ems": null
    },
    {
      "latitude": 50.925018,
      "longitude": 20.445482,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755440,
      "ems": null
    },
    {
      "latitude": 50.925167,
      "longitude": 20.443954,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1672755442,
      "ems": null
    },
    {
      "latitude": 50.925354,
      "longitude": 20.4422,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1672755445,
      "ems": null
    },
    {
      "latitude": 50.925522,
      "longitude": 20.43895,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755451,
      "ems": null
    },
    {
      "latitude": 50.925568,
      "longitude": 20.436871,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755455,
      "ems": null
    },
    {
      "latitude": 50.925568,
      "longitude": 20.435089,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755457,
      "ems": null
    },
    {
      "latitude": 50.925632,
      "longitude": 20.43129,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755463,
      "ems": null
    },
    {
      "latitude": 50.925682,
      "longitude": 20.429382,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755466,
      "ems": null
    },
    {
      "latitude": 50.925705,
      "longitude": 20.427814,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755469,
      "ems": null
    },
    {
      "latitude": 50.925705,
      "longitude": 20.425737,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755472,
      "ems": null
    },
    {
      "latitude": 50.925751,
      "longitude": 20.423882,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755475,
      "ems": null
    },
    {
      "latitude": 50.925728,
      "longitude": 20.421829,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755479,
      "ems": null
    },
    {
      "latitude": 50.925751,
      "longitude": 20.417498,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755486,
      "ems": null
    },
    {
      "latitude": 50.926006,
      "longitude": 20.413818,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755492,
      "ems": null
    },
    {
      "latitude": 50.926239,
      "longitude": 20.411987,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672755495,
      "ems": null
    },
    {
      "latitude": 50.926392,
      "longitude": 20.410667,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672755497,
      "ems": null
    },
    {
      "latitude": 50.926575,
      "longitude": 20.409479,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1672755499,
      "ems": null
    },
    {
      "latitude": 50.926804,
      "longitude": 20.40703,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1672755503,
      "ems": null
    },
    {
      "latitude": 50.927124,
      "longitude": 20.404209,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1672755507,
      "ems": null
    },
    {
      "latitude": 50.927307,
      "longitude": 20.402279,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755510,
      "ems": null
    },
    {
      "latitude": 50.927402,
      "longitude": 20.400314,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672755513,
      "ems": null
    },
    {
      "latitude": 50.927444,
      "longitude": 20.399979,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672755514,
      "ems": null
    },
    {
      "latitude": 50.927589,
      "longitude": 20.395432,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755521,
      "ems": null
    },
    {
      "latitude": 50.927628,
      "longitude": 20.39389,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755523,
      "ems": null
    },
    {
      "latitude": 50.927635,
      "longitude": 20.391693,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755527,
      "ems": null
    },
    {
      "latitude": 50.927635,
      "longitude": 20.389709,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755530,
      "ems": null
    },
    {
      "latitude": 50.927589,
      "longitude": 20.388031,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755532,
      "ems": null
    },
    {
      "latitude": 50.927536,
      "longitude": 20.386023,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755536,
      "ems": null
    },
    {
      "latitude": 50.927536,
      "longitude": 20.383944,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755539,
      "ems": null
    },
    {
      "latitude": 50.927498,
      "longitude": 20.38208,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672755542,
      "ems": null
    },
    {
      "latitude": 50.927448,
      "longitude": 20.380325,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755545,
      "ems": null
    },
    {
      "latitude": 50.927402,
      "longitude": 20.376511,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755551,
      "ems": null
    },
    {
      "latitude": 50.927307,
      "longitude": 20.372662,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755557,
      "ems": null
    },
    {
      "latitude": 50.927265,
      "longitude": 20.368805,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755563,
      "ems": null
    },
    {
      "latitude": 50.927265,
      "longitude": 20.36499,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "timestamp": 1672755569,
      "ems": null
    },
    {
      "latitude": 50.927216,
      "longitude": 20.361023,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672755574,
      "ems": null
    },
    {
      "latitude": 50.92717,
      "longitude": 20.357443,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755580,
      "ems": null
    },
    {
      "latitude": 50.927078,
      "longitude": 20.353546,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755586,
      "ems": null
    },
    {
      "latitude": 50.927032,
      "longitude": 20.349873,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755592,
      "ems": null
    },
    {
      "latitude": 50.926937,
      "longitude": 20.345764,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755598,
      "ems": null
    },
    {
      "latitude": 50.926846,
      "longitude": 20.342026,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755604,
      "ems": null
    },
    {
      "latitude": 50.926758,
      "longitude": 20.338217,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755610,
      "ems": null
    },
    {
      "latitude": 50.926704,
      "longitude": 20.334854,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755616,
      "ems": null
    },
    {
      "latitude": 50.92662,
      "longitude": 20.330572,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755623,
      "ems": null
    },
    {
      "latitude": 50.926567,
      "longitude": 20.32608,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755630,
      "ems": null
    },
    {
      "latitude": 50.926472,
      "longitude": 20.322495,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755636,
      "ems": null
    },
    {
      "latitude": 50.92638,
      "longitude": 20.318527,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755643,
      "ems": null
    },
    {
      "latitude": 50.926285,
      "longitude": 20.314636,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755649,
      "ems": null
    },
    {
      "latitude": 50.926208,
      "longitude": 20.310232,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672755656,
      "ems": null
    },
    {
      "latitude": 50.926147,
      "longitude": 20.306168,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755665,
      "ems": null
    },
    {
      "latitude": 50.926006,
      "longitude": 20.299149,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755674,
      "ems": null
    },
    {
      "latitude": 50.925888,
      "longitude": 20.29546,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755680,
      "ems": null
    },
    {
      "latitude": 50.925797,
      "longitude": 20.292046,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755686,
      "ems": null
    },
    {
      "latitude": 50.925659,
      "longitude": 20.288334,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672755692,
      "ems": null
    },
    {
      "latitude": 50.925613,
      "longitude": 20.284918,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672755697,
      "ems": null
    },
    {
      "latitude": 50.925568,
      "longitude": 20.281059,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672755704,
      "ems": null
    },
    {
      "latitude": 50.925659,
      "longitude": 20.277941,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1672755710,
      "ems": null
    },
    {
      "latitude": 50.925682,
      "longitude": 20.277176,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672755712,
      "ems": null
    },
    {
      "latitude": 50.925819,
      "longitude": 20.27565,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672755716,
      "ems": null
    },
    {
      "latitude": 50.926006,
      "longitude": 20.273514,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755719,
      "ems": null
    },
    {
      "latitude": 50.926163,
      "longitude": 20.272224,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1672755722,
      "ems": null
    },
    {
      "latitude": 50.926254,
      "longitude": 20.271557,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672755724,
      "ems": null
    },
    {
      "latitude": 50.926613,
      "longitude": 20.269318,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672755729,
      "ems": null
    },
    {
      "latitude": 50.926846,
      "longitude": 20.267715,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1672755733,
      "ems": null
    },
    {
      "latitude": 50.927078,
      "longitude": 20.266361,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672755736,
      "ems": null
    },
    {
      "latitude": 50.927353,
      "longitude": 20.265099,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672755739,
      "ems": null
    },
    {
      "latitude": 50.927589,
      "longitude": 20.263901,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672755742,
      "ems": null
    },
    {
      "latitude": 50.927811,
      "longitude": 20.262798,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1672755744,
      "ems": null
    },
    {
      "latitude": 50.928085,
      "longitude": 20.261312,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1672755748,
      "ems": null
    },
    {
      "latitude": 50.92836,
      "longitude": 20.260052,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672755751,
      "ems": null
    },
    {
      "latitude": 50.928616,
      "longitude": 20.258713,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672755754,
      "ems": null
    },
    {
      "latitude": 50.929047,
      "longitude": 20.256117,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1672755760,
      "ems": null
    },
    {
      "latitude": 50.929405,
      "longitude": 20.253525,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672755766,
      "ems": null
    },
    {
      "latitude": 50.929592,
      "longitude": 20.252151,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672755769,
      "ems": null
    },
    {
      "latitude": 50.929733,
      "longitude": 20.250996,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672755772,
      "ems": null
    },
    {
      "latitude": 50.929916,
      "longitude": 20.249557,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672755775,
      "ems": null
    },
    {
      "latitude": 50.930008,
      "longitude": 20.248396,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755777,
      "ems": null
    },
    {
      "latitude": 50.930195,
      "longitude": 20.246887,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672755781,
      "ems": null
    },
    {
      "latitude": 50.930374,
      "longitude": 20.245575,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672755784,
      "ems": null
    },
    {
      "latitude": 50.930832,
      "longitude": 20.243126,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672755790,
      "ems": null
    },
    {
      "latitude": 50.931152,
      "longitude": 20.241863,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672755793,
      "ems": null
    },
    {
      "latitude": 50.931267,
      "longitude": 20.241241,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672755794,
      "ems": null
    },
    {
      "latitude": 50.931747,
      "longitude": 20.23934,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672755799,
      "ems": null
    },
    {
      "latitude": 50.932011,
      "longitude": 20.238342,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672755802,
      "ems": null
    },
    {
      "latitude": 50.932293,
      "longitude": 20.237045,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672755805,
      "ems": null
    },
    {
      "latitude": 50.932571,
      "longitude": 20.235748,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672755808,
      "ems": null
    },
    {
      "latitude": 50.932892,
      "longitude": 20.234367,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672755811,
      "ems": null
    },
    {
      "latitude": 50.933128,
      "longitude": 20.233154,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672755814,
      "ems": null
    },
    {
      "latitude": 50.933689,
      "longitude": 20.230484,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672755820,
      "ems": null
    },
    {
      "latitude": 50.933872,
      "longitude": 20.229187,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672755823,
      "ems": null
    },
    {
      "latitude": 50.934036,
      "longitude": 20.227835,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672755826,
      "ems": null
    },
    {
      "latitude": 50.9342,
      "longitude": 20.22644,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1672755829,
      "ems": null
    },
    {
      "latitude": 50.934292,
      "longitude": 20.225143,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755832,
      "ems": null
    },
    {
      "latitude": 50.934433,
      "longitude": 20.223618,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1672755835,
      "ems": null
    },
    {
      "latitude": 50.93454,
      "longitude": 20.222118,
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672755838,
      "ems": null
    },
    {
      "latitude": 50.934586,
      "longitude": 20.220856,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672755841,
      "ems": null
    },
    {
      "latitude": 50.934677,
      "longitude": 20.219669,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1672755844,
      "ems": null
    },
    {
      "latitude": 50.934757,
      "longitude": 20.217819,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1672755847,
      "ems": null
    },
    {
      "latitude": 50.934807,
      "longitude": 20.216293,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672755850,
      "ems": null
    },
    {
      "latitude": 50.934807,
      "longitude": 20.21492,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755853,
      "ems": null
    },
    {
      "latitude": 50.934807,
      "longitude": 20.213852,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755855,
      "ems": null
    },
    {
      "latitude": 50.934814,
      "longitude": 20.21232,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672755858,
      "ems": null
    },
    {
      "latitude": 50.934814,
      "longitude": 20.210167,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672755862,
      "ems": null
    },
    {
      "latitude": 50.935223,
      "longitude": 20.206223,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672755870,
      "ems": null
    },
    {
      "latitude": 50.935501,
      "longitude": 20.20512,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672755872,
      "ems": null
    },
    {
      "latitude": 50.936016,
      "longitude": 20.203857,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1672755875,
      "ems": null
    },
    {
      "latitude": 50.93676,
      "longitude": 20.202255,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1672755879,
      "ems": null
    },
    {
      "latitude": 50.937321,
      "longitude": 20.201111,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1672755882,
      "ems": null
    },
    {
      "latitude": 50.937691,
      "longitude": 20.200424,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1672755884,
      "ems": null
    },
    {
      "latitude": 50.938576,
      "longitude": 20.198822,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1672755888,
      "ems": null
    },
    {
      "latitude": 50.939087,
      "longitude": 20.197906,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1672755890,
      "ems": null
    },
    {
      "latitude": 50.939575,
      "longitude": 20.197027,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1672755892,
      "ems": null
    },
    {
      "latitude": 50.940674,
      "longitude": 20.194876,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672755897,
      "ems": null
    },
    {
      "latitude": 50.941269,
      "longitude": 20.193613,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672755899,
      "ems": null
    },
    {
      "latitude": 50.941864,
      "longitude": 20.192352,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672755903,
      "ems": null
    },
    {
      "latitude": 50.943138,
      "longitude": 20.188446,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672755911,
      "ems": null
    },
    {
      "latitude": 50.943649,
      "longitude": 20.185699,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1672755916,
      "ems": null
    },
    {
      "latitude": 50.94416,
      "longitude": 20.1828,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672755921,
      "ems": null
    },
    {
      "latitude": 50.94458,
      "longitude": 20.180511,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672755925,
      "ems": null
    },
    {
      "latitude": 50.944908,
      "longitude": 20.17868,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672755928,
      "ems": null
    },
    {
      "latitude": 50.945068,
      "longitude": 20.178024,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672755929,
      "ems": null
    },
    {
      "latitude": 50.945419,
      "longitude": 20.176163,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672755933,
      "ems": null
    },
    {
      "latitude": 50.945892,
      "longitude": 20.173645,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672755937,
      "ems": null
    },
    {
      "latitude": 50.94635,
      "longitude": 20.170364,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672755943,
      "ems": null
    },
    {
      "latitude": 50.946396,
      "longitude": 20.169561,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672755944,
      "ems": null
    },
    {
      "latitude": 50.946579,
      "longitude": 20.167038,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672755949,
      "ems": null
    },
    {
      "latitude": 50.946716,
      "longitude": 20.165852,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672755952,
      "ems": null
    },
    {
      "latitude": 50.947372,
      "longitude": 20.161972,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672755958,
      "ems": null
    },
    {
      "latitude": 50.947861,
      "longitude": 20.16021,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672755961,
      "ems": null
    },
    {
      "latitude": 50.948181,
      "longitude": 20.15917,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672755963,
      "ems": null
    },
    {
      "latitude": 50.94849,
      "longitude": 20.15831,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672755965,
      "ems": null
    },
    {
      "latitude": 50.949284,
      "longitude": 20.155792,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672755970,
      "ems": null
    },
    {
      "latitude": 50.949749,
      "longitude": 20.154419,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672755972,
      "ems": null
    },
    {
      "latitude": 50.950447,
      "longitude": 20.152283,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672755976,
      "ems": null
    },
    {
      "latitude": 50.950912,
      "longitude": 20.150681,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672755980,
      "ems": null
    },
    {
      "latitude": 50.951935,
      "longitude": 20.147934,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672755985,
      "ems": null
    },
    {
      "latitude": 50.952896,
      "longitude": 20.145586,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672755989,
      "ems": null
    },
    {
      "latitude": 50.953354,
      "longitude": 20.144547,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672755991,
      "ems": null
    },
    {
      "latitude": 50.954216,
      "longitude": 20.14267,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672755994,
      "ems": null
    },
    {
      "latitude": 50.954681,
      "longitude": 20.141726,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "timestamp": 1672755998,
      "ems": null
    },
    {
      "latitude": 50.955734,
      "longitude": 20.139423,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672756001,
      "ems": null
    },
    {
      "latitude": 50.956558,
      "longitude": 20.137791,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672756004,
      "ems": null
    },
    {
      "latitude": 50.957245,
      "longitude": 20.136381,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672756007,
      "ems": null
    },
    {
      "latitude": 50.958069,
      "longitude": 20.134821,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672756010,
      "ems": null
    },
    {
      "latitude": 50.958664,
      "longitude": 20.13356,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672756013,
      "ems": null
    },
    {
      "latitude": 50.960358,
      "longitude": 20.130146,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "7000",
      "timestamp": 1672756019,
      "ems": null
    },
    {
      "latitude": 50.961777,
      "longitude": 20.127176,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672756025,
      "ems": null
    },
    {
      "latitude": 50.962921,
      "longitude": 20.124355,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672756030,
      "ems": null
    },
    {
      "latitude": 50.963947,
      "longitude": 20.121994,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672756035,
      "ems": null
    },
    {
      "latitude": 50.964504,
      "longitude": 20.120773,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672756037,
      "ems": null
    },
    {
      "latitude": 50.966354,
      "longitude": 20.116709,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672756045,
      "ems": null
    },
    {
      "latitude": 50.967957,
      "longitude": 20.113518,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672756052,
      "ems": null
    },
    {
      "latitude": 50.968647,
      "longitude": 20.112076,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672756055,
      "ems": null
    },
    {
      "latitude": 50.969421,
      "longitude": 20.110548,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672756058,
      "ems": null
    },
    {
      "latitude": 50.970978,
      "longitude": 20.107727,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672756064,
      "ems": null
    },
    {
      "latitude": 50.971802,
      "longitude": 20.10639,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672756067,
      "ems": null
    },
    {
      "latitude": 50.972652,
      "longitude": 20.105209,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "timestamp": 1672756070,
      "ems": null
    },
    {
      "latitude": 50.973442,
      "longitude": 20.103989,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672756073,
      "ems": null
    },
    {
      "latitude": 50.974468,
      "longitude": 20.102768,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672756076,
      "ems": null
    },
    {
      "latitude": 50.975464,
      "longitude": 20.101788,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672756079,
      "ems": null
    },
    {
      "latitude": 50.976563,
      "longitude": 20.10075,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672756082,
      "ems": null
    },
    {
      "latitude": 50.977539,
      "longitude": 20.099945,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672756085,
      "ems": null
    },
    {
      "latitude": 50.978714,
      "longitude": 20.098894,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672756088,
      "ems": null
    },
    {
      "latitude": 50.97963,
      "longitude": 20.09815,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672756091,
      "ems": null
    },
    {
      "latitude": 50.980728,
      "longitude": 20.097334,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756094,
      "ems": null
    },
    {
      "latitude": 50.981964,
      "longitude": 20.096518,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "squawk": "7000",
      "timestamp": 1672756097,
      "ems": null
    },
    {
      "latitude": 50.983063,
      "longitude": 20.09585,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672756100,
      "ems": null
    },
    {
      "latitude": 50.98407,
      "longitude": 20.095257,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672756103,
      "ems": null
    },
    {
      "latitude": 50.985214,
      "longitude": 20.094587,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1672756106,
      "ems": null
    },
    {
      "latitude": 50.986385,
      "longitude": 20.09407,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1672756109,
      "ems": null
    },
    {
      "latitude": 50.987362,
      "longitude": 20.093765,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672756112,
      "ems": null
    },
    {
      "latitude": 50.988602,
      "longitude": 20.093327,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672756115,
      "ems": null
    },
    {
      "latitude": 50.98938,
      "longitude": 20.093178,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672756117,
      "ems": null
    },
    {
      "latitude": 50.990902,
      "longitude": 20.092773,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756121,
      "ems": null
    },
    {
      "latitude": 50.99197,
      "longitude": 20.092392,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672756124,
      "ems": null
    },
    {
      "latitude": 50.993134,
      "longitude": 20.091934,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "squawk": "7000",
      "timestamp": 1672756127,
      "ems": null
    },
    {
      "latitude": 50.995239,
      "longitude": 20.090801,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672756133,
      "ems": null
    },
    {
      "latitude": 50.9963,
      "longitude": 20.090256,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672756136,
      "ems": null
    },
    {
      "latitude": 50.997463,
      "longitude": 20.089493,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672756139,
      "ems": null
    },
    {
      "latitude": 50.998489,
      "longitude": 20.088873,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "squawk": "7000",
      "timestamp": 1672756142,
      "ems": null
    },
    {
      "latitude": 50.999588,
      "longitude": 20.088352,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672756145,
      "ems": null
    },
    {
      "latitude": 51.000725,
      "longitude": 20.087738,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672756148,
      "ems": null
    },
    {
      "latitude": 51.001511,
      "longitude": 20.087387,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672756151,
      "ems": null
    },
    {
      "latitude": 51.00412,
      "longitude": 20.086052,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "squawk": "7000",
      "timestamp": 1672756158,
      "ems": null
    },
    {
      "latitude": 51.006123,
      "longitude": 20.084915,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1672756164,
      "ems": null
    },
    {
      "latitude": 51.00845,
      "longitude": 20.083771,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672756169,
      "ems": null
    },
    {
      "latitude": 51.010803,
      "longitude": 20.082489,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672756176,
      "ems": null
    },
    {
      "latitude": 51.011902,
      "longitude": 20.08182,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672756179,
      "ems": null
    },
    {
      "latitude": 51.012779,
      "longitude": 20.081177,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "squawk": "7000",
      "timestamp": 1672756181,
      "ems": null
    },
    {
      "latitude": 51.01387,
      "longitude": 20.080336,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672756184,
      "ems": null
    },
    {
      "latitude": 51.01506,
      "longitude": 20.07937,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672756188,
      "ems": null
    },
    {
      "latitude": 51.016113,
      "longitude": 20.07848,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672756191,
      "ems": null
    },
    {
      "latitude": 51.017155,
      "longitude": 20.077667,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672756194,
      "ems": null
    },
    {
      "latitude": 51.018356,
      "longitude": 20.076773,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672756197,
      "ems": null
    },
    {
      "latitude": 51.019272,
      "longitude": 20.076031,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672756199,
      "ems": null
    },
    {
      "latitude": 51.02037,
      "longitude": 20.07514,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672756203,
      "ems": null
    },
    {
      "latitude": 51.022522,
      "longitude": 20.073505,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672756209,
      "ems": null
    },
    {
      "latitude": 51.024559,
      "longitude": 20.072174,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "7000",
      "timestamp": 1672756214,
      "ems": null
    },
    {
      "latitude": 51.025681,
      "longitude": 20.071503,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672756217,
      "ems": null
    },
    {
      "latitude": 51.027863,
      "longitude": 20.070038,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672756224,
      "ems": null
    },
    {
      "latitude": 51.02898,
      "longitude": 20.069275,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672756227,
      "ems": null
    },
    {
      "latitude": 51.030029,
      "longitude": 20.068682,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "7000",
      "timestamp": 1672756230,
      "ems": null
    },
    {
      "latitude": 51.032181,
      "longitude": 20.067196,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756236,
      "ems": null
    },
    {
      "latitude": 51.034515,
      "longitude": 20.065712,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672756242,
      "ems": null
    },
    {
      "latitude": 51.035591,
      "longitude": 20.065231,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672756245,
      "ems": null
    },
    {
      "latitude": 51.036804,
      "longitude": 20.065044,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672756248,
      "ems": null
    },
    {
      "latitude": 51.03801,
      "longitude": 20.065079,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672756251,
      "ems": null
    },
    {
      "latitude": 51.039368,
      "longitude": 20.065266,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672756254,
      "ems": null
    },
    {
      "latitude": 51.040649,
      "longitude": 20.065638,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1672756257,
      "ems": null
    },
    {
      "latitude": 51.042015,
      "longitude": 20.066147,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1672756260,
      "ems": null
    },
    {
      "latitude": 51.04327,
      "longitude": 20.066681,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1672756263,
      "ems": null
    },
    {
      "latitude": 51.044632,
      "longitude": 20.067345,
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672756266,
      "ems": null
    },
    {
      "latitude": 51.046005,
      "longitude": 20.068012,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1672756269,
      "ems": null
    },
    {
      "latitude": 51.04723,
      "longitude": 20.068665,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672756272,
      "ems": null
    },
    {
      "latitude": 51.048431,
      "longitude": 20.069201,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672756275,
      "ems": null
    },
    {
      "latitude": 51.049698,
      "longitude": 20.069733,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1672756278,
      "ems": null
    },
    {
      "latitude": 51.051231,
      "longitude": 20.070419,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1672756281,
      "ems": null
    },
    {
      "latitude": 51.052689,
      "longitude": 20.071131,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672756284,
      "ems": null
    },
    {
      "latitude": 51.054062,
      "longitude": 20.071724,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672756287,
      "ems": null
    },
    {
      "latitude": 51.056725,
      "longitude": 20.072937,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672756293,
      "ems": null
    },
    {
      "latitude": 51.059566,
      "longitude": 20.074387,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672756299,
      "ems": null
    },
    {
      "latitude": 51.06221,
      "longitude": 20.075882,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1672756305,
      "ems": null
    },
    {
      "latitude": 51.063629,
      "longitude": 20.076773,
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672756308,
      "ems": null
    },
    {
      "latitude": 51.064873,
      "longitude": 20.077667,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1672756311,
      "ems": null
    },
    {
      "latitude": 51.06636,
      "longitude": 20.078735,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1672756314,
      "ems": null
    },
    {
      "latitude": 51.067657,
      "longitude": 20.079594,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672756317,
      "ems": null
    },
    {
      "latitude": 51.06897,
      "longitude": 20.080414,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672756320,
      "ems": null
    },
    {
      "latitude": 51.071777,
      "longitude": 20.082117,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1672756326,
      "ems": null
    },
    {
      "latitude": 51.074478,
      "longitude": 20.083601,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1672756332,
      "ems": null
    },
    {
      "latitude": 51.075859,
      "longitude": 20.084229,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1672756335,
      "ems": null
    },
    {
      "latitude": 51.077164,
      "longitude": 20.084686,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1672756338,
      "ems": null
    },
    {
      "latitude": 51.07856,
      "longitude": 20.085144,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1672756341,
      "ems": null
    },
    {
      "latitude": 51.07988,
      "longitude": 20.085531,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1672756344,
      "ems": null
    },
    {
      "latitude": 51.081257,
      "longitude": 20.085907,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672756347,
      "ems": null
    },
    {
      "latitude": 51.082626,
      "longitude": 20.086126,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672756350,
      "ems": null
    },
    {
      "latitude": 51.084,
      "longitude": 20.086348,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672756353,
      "ems": null
    },
    {
      "latitude": 51.085327,
      "longitude": 20.086645,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672756356,
      "ems": null
    },
    {
      "latitude": 51.0867,
      "longitude": 20.086943,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672756359,
      "ems": null
    },
    {
      "latitude": 51.088074,
      "longitude": 20.087313,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672756362,
      "ems": null
    },
    {
      "latitude": 51.089451,
      "longitude": 20.087585,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672756365,
      "ems": null
    },
    {
      "latitude": 51.091873,
      "longitude": 20.088043,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672756371,
      "ems": null
    },
    {
      "latitude": 51.094803,
      "longitude": 20.088724,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672756377,
      "ems": null
    },
    {
      "latitude": 51.097549,
      "longitude": 20.089317,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672756383,
      "ems": null
    },
    {
      "latitude": 51.101696,
      "longitude": 20.090408,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1672756392,
      "ems": null
    },
    {
      "latitude": 51.104416,
      "longitude": 20.091024,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672756398,
      "ems": null
    },
    {
      "latitude": 51.106907,
      "longitude": 20.091553,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672756403,
      "ems": null
    },
    {
      "latitude": 51.109818,
      "longitude": 20.092213,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1672756410,
      "ems": null
    },
    {
      "latitude": 51.113068,
      "longitude": 20.093103,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672756417,
      "ems": null
    },
    {
      "latitude": 51.115768,
      "longitude": 20.093327,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "squawk": "7000",
      "timestamp": 1672756424,
      "ems": null
    },
    {
      "latitude": 51.117188,
      "longitude": 20.093401,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672756427,
      "ems": null
    },
    {
      "latitude": 51.118652,
      "longitude": 20.093401,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672756430,
      "ems": null
    },
    {
      "latitude": 51.119709,
      "longitude": 20.093384,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672756432,
      "ems": null
    },
    {
      "latitude": 51.121262,
      "longitude": 20.093178,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672756436,
      "ems": null
    },
    {
      "latitude": 51.122551,
      "longitude": 20.092697,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1672756439,
      "ems": null
    },
    {
      "latitude": 51.123856,
      "longitude": 20.092087,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672756442,
      "ems": null
    },
    {
      "latitude": 51.124557,
      "longitude": 20.091619,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672756444,
      "ems": null
    },
    {
      "latitude": 51.125793,
      "longitude": 20.090654,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672756447,
      "ems": null
    },
    {
      "latitude": 51.126835,
      "longitude": 20.089874,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672756450,
      "ems": null
    },
    {
      "latitude": 51.127438,
      "longitude": 20.089417,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672756452,
      "ems": null
    },
    {
      "latitude": 51.12888,
      "longitude": 20.088196,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672756456,
      "ems": null
    },
    {
      "latitude": 51.130138,
      "longitude": 20.08728,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "squawk": "7000",
      "timestamp": 1672756459,
      "ems": null
    },
    {
      "latitude": 51.131241,
      "longitude": 20.086422,
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672756462,
      "ems": null
    },
    {
      "latitude": 51.132374,
      "longitude": 20.085602,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672756465,
      "ems": null
    },
    {
      "latitude": 51.133396,
      "longitude": 20.084915,
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756468,
      "ems": null
    },
    {
      "latitude": 51.135818,
      "longitude": 20.083237,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756475,
      "ems": null
    },
    {
      "latitude": 51.138016,
      "longitude": 20.081745,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756481,
      "ems": null
    },
    {
      "latitude": 51.140335,
      "longitude": 20.080185,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756487,
      "ems": null
    },
    {
      "latitude": 51.142181,
      "longitude": 20.078777,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672756492,
      "ems": null
    },
    {
      "latitude": 51.144653,
      "longitude": 20.077068,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672756499,
      "ems": null
    },
    {
      "latitude": 51.1474,
      "longitude": 20.075436,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672756506,
      "ems": null
    },
    {
      "latitude": 51.149921,
      "longitude": 20.074158,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672756512,
      "ems": null
    },
    {
      "latitude": 51.150513,
      "longitude": 20.073877,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672756514,
      "ems": null
    },
    {
      "latitude": 51.152111,
      "longitude": 20.073318,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "squawk": "7000",
      "timestamp": 1672756517,
      "ems": null
    },
    {
      "latitude": 51.153488,
      "longitude": 20.072838,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "squawk": "7000",
      "timestamp": 1672756521,
      "ems": null
    },
    {
      "latitude": 51.154953,
      "longitude": 20.072468,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "squawk": "7000",
      "timestamp": 1672756524,
      "ems": null
    },
    {
      "latitude": 51.155548,
      "longitude": 20.072319,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756527,
      "ems": null
    },
    {
      "latitude": 51.157558,
      "longitude": 20.071793,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756530,
      "ems": null
    },
    {
      "latitude": 51.159027,
      "longitude": 20.071428,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756534,
      "ems": null
    },
    {
      "latitude": 51.159805,
      "longitude": 20.07128,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756536,
      "ems": null
    },
    {
      "latitude": 51.161747,
      "longitude": 20.070724,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756540,
      "ems": null
    },
    {
      "latitude": 51.163052,
      "longitude": 20.070419,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672756543,
      "ems": null
    },
    {
      "latitude": 51.164429,
      "longitude": 20.070166,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672756546,
      "ems": null
    },
    {
      "latitude": 51.165756,
      "longitude": 20.069942,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672756549,
      "ems": null
    },
    {
      "latitude": 51.168457,
      "longitude": 20.069349,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672756555,
      "ems": null
    },
    {
      "latitude": 51.170517,
      "longitude": 20.068977,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672756560,
      "ems": null
    },
    {
      "latitude": 51.173721,
      "longitude": 20.06831,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672756567,
      "ems": null
    },
    {
      "latitude": 51.176468,
      "longitude": 20.067717,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672756573,
      "ems": null
    },
    {
      "latitude": 51.17902,
      "longitude": 20.067139,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672756579,
      "ems": null
    },
    {
      "latitude": 51.181858,
      "longitude": 20.066605,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672756585,
      "ems": null
    },
    {
      "latitude": 51.18465,
      "longitude": 20.065994,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672756591,
      "ems": null
    },
    {
      "latitude": 51.186905,
      "longitude": 20.065489,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672756597,
      "ems": null
    },
    {
      "latitude": 51.189354,
      "longitude": 20.06485,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672756602,
      "ems": null
    },
    {
      "latitude": 51.191402,
      "longitude": 20.064316,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756607,
      "ems": null
    },
    {
      "latitude": 51.195591,
      "longitude": 20.063324,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756616,
      "ems": null
    },
    {
      "latitude": 51.198669,
      "longitude": 20.062742,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672756624,
      "ems": null
    },
    {
      "latitude": 51.201736,
      "longitude": 20.062256,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672756631,
      "ems": null
    },
    {
      "latitude": 51.204483,
      "longitude": 20.061703,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672756637,
      "ems": null
    },
    {
      "latitude": 51.207047,
      "longitude": 20.061407,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672756643,
      "ems": null
    },
    {
      "latitude": 51.209885,
      "longitude": 20.061258,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672756649,
      "ems": null
    },
    {
      "latitude": 51.210114,
      "longitude": 20.061188,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672756650,
      "ems": null
    },
    {
      "latitude": 51.211945,
      "longitude": 20.061184,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1672756654,
      "ems": null
    },
    {
      "latitude": 51.213776,
      "longitude": 20.061184,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672756658,
      "ems": null
    },
    {
      "latitude": 51.215103,
      "longitude": 20.061258,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672756661,
      "ems": null
    },
    {
      "latitude": 51.2164,
      "longitude": 20.061264,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672756664,
      "ems": null
    },
    {
      "latitude": 51.217705,
      "longitude": 20.06134,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1672756667,
      "ems": null
    },
    {
      "latitude": 51.219269,
      "longitude": 20.061481,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1672756670,
      "ems": null
    },
    {
      "latitude": 51.220413,
      "longitude": 20.061703,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672756673,
      "ems": null
    },
    {
      "latitude": 51.222015,
      "longitude": 20.062223,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1672756676,
      "ems": null
    },
    {
      "latitude": 51.223522,
      "longitude": 20.062943,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672756680,
      "ems": null
    },
    {
      "latitude": 51.224964,
      "longitude": 20.063858,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1672756682,
      "ems": null
    },
    {
      "latitude": 51.226456,
      "longitude": 20.064926,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1672756685,
      "ems": null
    },
    {
      "latitude": 51.227829,
      "longitude": 20.065861,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672756688,
      "ems": null
    },
    {
      "latitude": 51.229477,
      "longitude": 20.066826,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672756692,
      "ems": null
    },
    {
      "latitude": 51.230644,
      "longitude": 20.067596,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1672756694,
      "ems": null
    },
    {
      "latitude": 51.232224,
      "longitude": 20.068459,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1672756697,
      "ems": null
    },
    {
      "latitude": 51.23378,
      "longitude": 20.069424,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1672756701,
      "ems": null
    },
    {
      "latitude": 51.235207,
      "longitude": 20.070267,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1672756704,
      "ems": null
    },
    {
      "latitude": 51.236664,
      "longitude": 20.071131,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672756707,
      "ems": null
    },
    {
      "latitude": 51.239319,
      "longitude": 20.072912,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672756713,
      "ems": null
    },
    {
      "latitude": 51.242096,
      "longitude": 20.074844,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1672756719,
      "ems": null
    },
    {
      "latitude": 51.244766,
      "longitude": 20.076698,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1672756725,
      "ems": null
    },
    {
      "latitude": 51.246147,
      "longitude": 20.07782,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1672756728,
      "ems": null
    },
    {
      "latitude": 51.247498,
      "longitude": 20.078888,
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1672756731,
      "ems": null
    },
    {
      "latitude": 51.248753,
      "longitude": 20.079803,
      "altitude": {
        "feet": 2700,
        "meters": 823
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1672756734,
      "ems": null
    },
    {
      "latitude": 51.251595,
      "longitude": 20.082016,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1672756740,
      "ems": null
    },
    {
      "latitude": 51.25415,
      "longitude": 20.084122,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1672756746,
      "ems": null
    },
    {
      "latitude": 51.255203,
      "longitude": 20.085087,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1672756748,
      "ems": null
    },
    {
      "latitude": 51.258224,
      "longitude": 20.08672,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1672756755,
      "ems": null
    },
    {
      "latitude": 51.259785,
      "longitude": 20.086899,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "7000",
      "timestamp": 1672756758,
      "ems": null
    },
    {
      "latitude": 51.260902,
      "longitude": 20.086823,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1672756761,
      "ems": null
    },
    {
      "latitude": 51.262161,
      "longitude": 20.086496,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672756764,
      "ems": null
    },
    {
      "latitude": 51.263462,
      "longitude": 20.085907,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672756767,
      "ems": null
    },
    {
      "latitude": 51.26458,
      "longitude": 20.085144,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756770,
      "ems": null
    },
    {
      "latitude": 51.265652,
      "longitude": 20.084229,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672756773,
      "ems": null
    },
    {
      "latitude": 51.266582,
      "longitude": 20.083313,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672756776,
      "ems": null
    },
    {
      "latitude": 51.267746,
      "longitude": 20.082016,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672756779,
      "ems": null
    },
    {
      "latitude": 51.268799,
      "longitude": 20.080929,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672756782,
      "ems": null
    },
    {
      "latitude": 51.269852,
      "longitude": 20.079889,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672756785,
      "ems": null
    },
    {
      "latitude": 51.270634,
      "longitude": 20.079117,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672756788,
      "ems": null
    },
    {
      "latitude": 51.271912,
      "longitude": 20.077812,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672756791,
      "ems": null
    },
    {
      "latitude": 51.272827,
      "longitude": 20.076996,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672756794,
      "ems": null
    },
    {
      "latitude": 51.273148,
      "longitude": 20.076698,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672756795,
      "ems": null
    },
    {
      "latitude": 51.274498,
      "longitude": 20.075455,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672756799,
      "ems": null
    },
    {
      "latitude": 51.277103,
      "longitude": 20.07309,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672756806,
      "ems": null
    },
    {
      "latitude": 51.279011,
      "longitude": 20.071106,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1672756812,
      "ems": null
    },
    {
      "latitude": 51.280128,
      "longitude": 20.069809,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672756815,
      "ems": null
    },
    {
      "latitude": 51.281067,
      "longitude": 20.068682,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672756818,
      "ems": null
    },
    {
      "latitude": 51.282074,
      "longitude": 20.067419,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672756822,
      "ems": null
    },
    {
      "latitude": 51.284039,
      "longitude": 20.06546,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672756827,
      "ems": null
    },
    {
      "latitude": 51.285049,
      "longitude": 20.064672,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672756830,
      "ems": null
    },
    {
      "latitude": 51.286137,
      "longitude": 20.063934,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672756833,
      "ems": null
    },
    {
      "latitude": 51.287251,
      "longitude": 20.063324,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672756837,
      "ems": null
    },
    {
      "latitude": 51.288254,
      "longitude": 20.062742,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672756840,
      "ems": null
    },
    {
      "latitude": 51.289352,
      "longitude": 20.062223,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672756843,
      "ems": null
    },
    {
      "latitude": 51.290588,
      "longitude": 20.061628,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672756846,
      "ems": null
    },
    {
      "latitude": 51.291687,
      "longitude": 20.06111,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672756849,
      "ems": null
    },
    {
      "latitude": 51.292831,
      "longitude": 20.060589,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1672756852,
      "ems": null
    },
    {
      "latitude": 51.29393,
      "longitude": 20.060144,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1672756855,
      "ems": null
    },
    {
      "latitude": 51.295074,
      "longitude": 20.059772,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672756858,
      "ems": null
    },
    {
      "latitude": 51.296188,
      "longitude": 20.059357,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "squawk": "7000",
      "timestamp": 1672756861,
      "ems": null
    },
    {
      "latitude": 51.298279,
      "longitude": 20.058214,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672756867,
      "ems": null
    },
    {
      "latitude": 51.300613,
      "longitude": 20.056805,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672756873,
      "ems": null
    },
    {
      "latitude": 51.30162,
      "longitude": 20.056135,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672756876,
      "ems": null
    },
    {
      "latitude": 51.302708,
      "longitude": 20.055466,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672756879,
      "ems": null
    },
    {
      "latitude": 51.303726,
      "longitude": 20.0548,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "7000",
      "timestamp": 1672756882,
      "ems": null
    },
    {
      "latitude": 51.304802,
      "longitude": 20.054092,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "7000",
      "timestamp": 1672756885,
      "ems": null
    },
    {
      "latitude": 51.30574,
      "longitude": 20.053463,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "7000",
      "timestamp": 1672756888,
      "ems": null
    },
    {
      "latitude": 51.306885,
      "longitude": 20.052795,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672756891,
      "ems": null
    },
    {
      "latitude": 51.308945,
      "longitude": 20.051498,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672756897,
      "ems": null
    },
    {
      "latitude": 51.311188,
      "longitude": 20.050049,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672756903,
      "ems": null
    },
    {
      "latitude": 51.313274,
      "longitude": 20.048599,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756909,
      "ems": null
    },
    {
      "latitude": 51.315182,
      "longitude": 20.047379,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756915,
      "ems": null
    },
    {
      "latitude": 51.317558,
      "longitude": 20.0457,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672756921,
      "ems": null
    },
    {
      "latitude": 51.319702,
      "longitude": 20.044037,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672756927,
      "ems": null
    },
    {
      "latitude": 51.321747,
      "longitude": 20.042343,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672756933,
      "ems": null
    },
    {
      "latitude": 51.323959,
      "longitude": 20.04077,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672756939,
      "ems": null
    },
    {
      "latitude": 51.325146,
      "longitude": 20.040131,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672756942,
      "ems": null
    },
    {
      "latitude": 51.326355,
      "longitude": 20.039597,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "timestamp": 1672756945,
      "ems": null
    },
    {
      "latitude": 51.327667,
      "longitude": 20.039211,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672756949,
      "ems": null
    },
    {
      "latitude": 51.329086,
      "longitude": 20.038914,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1672756952,
      "ems": null
    },
    {
      "latitude": 51.330185,
      "longitude": 20.038616,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756954,
      "ems": null
    },
    {
      "latitude": 51.331604,
      "longitude": 20.038246,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672756958,
      "ems": null
    },
    {
      "latitude": 51.332596,
      "longitude": 20.037918,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "squawk": "7000",
      "timestamp": 1672756960,
      "ems": null
    },
    {
      "latitude": 51.334084,
      "longitude": 20.037537,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "timestamp": 1672756964,
      "ems": null
    },
    {
      "latitude": 51.33522,
      "longitude": 20.037207,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672756966,
      "ems": null
    },
    {
      "latitude": 51.336643,
      "longitude": 20.036697,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672756970,
      "ems": null
    },
    {
      "latitude": 51.337646,
      "longitude": 20.03639,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672756973,
      "ems": null
    },
    {
      "latitude": 51.340229,
      "longitude": 20.0354,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1672756979,
      "ems": null
    },
    {
      "latitude": 51.341217,
      "longitude": 20.034979,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1672756982,
      "ems": null
    },
    {
      "latitude": 51.343815,
      "longitude": 20.034027,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1672756988,
      "ems": null
    },
    {
      "latitude": 51.346329,
      "longitude": 20.032959,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "squawk": "7000",
      "timestamp": 1672756994,
      "ems": null
    },
    {
      "latitude": 51.347626,
      "longitude": 20.032381,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1672756997,
      "ems": null
    },
    {
      "latitude": 51.349957,
      "longitude": 20.031433,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672757003,
      "ems": null
    },
    {
      "latitude": 51.352386,
      "longitude": 20.030525,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "timestamp": 1672757009,
      "ems": null
    },
    {
      "latitude": 51.354767,
      "longitude": 20.029486,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "timestamp": 1672757015,
      "ems": null
    },
    {
      "latitude": 51.357056,
      "longitude": 20.028595,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672757021,
      "ems": null
    },
    {
      "latitude": 51.35936,
      "longitude": 20.027466,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1672757027,
      "ems": null
    },
    {
      "latitude": 51.360386,
      "longitude": 20.026932,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672757030,
      "ems": null
    },
    {
      "latitude": 51.361736,
      "longitude": 20.02594,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672757033,
      "ems": null
    },
    {
      "latitude": 51.362946,
      "longitude": 20.025024,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672757036,
      "ems": null
    },
    {
      "latitude": 51.364014,
      "longitude": 20.024141,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672757039,
      "ems": null
    },
    {
      "latitude": 51.365204,
      "longitude": 20.023102,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672757043,
      "ems": null
    },
    {
      "latitude": 51.366253,
      "longitude": 20.022202,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672757045,
      "ems": null
    },
    {
      "latitude": 51.367229,
      "longitude": 20.021133,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672757048,
      "ems": null
    },
    {
      "latitude": 51.368225,
      "longitude": 20.019911,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672757052,
      "ems": null
    },
    {
      "latitude": 51.369091,
      "longitude": 20.018692,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672757054,
      "ems": null
    },
    {
      "latitude": 51.369965,
      "longitude": 20.017239,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672757058,
      "ems": null
    },
    {
      "latitude": 51.370743,
      "longitude": 20.015827,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672757060,
      "ems": null
    },
    {
      "latitude": 51.371567,
      "longitude": 20.014046,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672757064,
      "ems": null
    },
    {
      "latitude": 51.372211,
      "longitude": 20.012665,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672757066,
      "ems": null
    },
    {
      "latitude": 51.372849,
      "longitude": 20.010855,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672757070,
      "ems": null
    },
    {
      "latitude": 51.373398,
      "longitude": 20.009369,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672757073,
      "ems": null
    },
    {
      "latitude": 51.374039,
      "longitude": 20.007587,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672757076,
      "ems": null
    },
    {
      "latitude": 51.37468,
      "longitude": 20.005955,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1672757079,
      "ems": null
    },
    {
      "latitude": 51.375328,
      "longitude": 20.004272,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672757082,
      "ems": null
    },
    {
      "latitude": 51.375824,
      "longitude": 20.002911,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672757085,
      "ems": null
    },
    {
      "latitude": 51.376492,
      "longitude": 20.001144,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672757088,
      "ems": null
    },
    {
      "latitude": 51.377007,
      "longitude": 19.999542,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672757091,
      "ems": null
    },
    {
      "latitude": 51.377472,
      "longitude": 19.997938,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672757094,
      "ems": null
    },
    {
      "latitude": 51.377796,
      "longitude": 19.996796,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672757096,
      "ems": null
    },
    {
      "latitude": 51.378448,
      "longitude": 19.994507,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672757100,
      "ems": null
    },
    {
      "latitude": 51.378937,
      "longitude": 19.992743,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672757103,
      "ems": null
    },
    {
      "latitude": 51.379349,
      "longitude": 19.991182,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672757106,
      "ems": null
    },
    {
      "latitude": 51.379761,
      "longitude": 19.98955,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672757109,
      "ems": null
    },
    {
      "latitude": 51.380264,
      "longitude": 19.987694,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1672757112,
      "ems": null
    },
    {
      "latitude": 51.38063,
      "longitude": 19.986135,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672757115,
      "ems": null
    },
    {
      "latitude": 51.381008,
      "longitude": 19.98436,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672757118,
      "ems": null
    },
    {
      "latitude": 51.381363,
      "longitude": 19.982721,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672757121,
      "ems": null
    },
    {
      "latitude": 51.381454,
      "longitude": 19.982201,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672757122,
      "ems": null
    },
    {
      "latitude": 51.381847,
      "longitude": 19.97963,
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672757127,
      "ems": null
    },
    {
      "latitude": 51.382278,
      "longitude": 19.976856,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672757131,
      "ems": null
    },
    {
      "latitude": 51.382545,
      "longitude": 19.975128,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1672757134,
      "ems": null
    },
    {
      "latitude": 51.382824,
      "longitude": 19.973373,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672757137,
      "ems": null
    },
    {
      "latitude": 51.383057,
      "longitude": 19.971512,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672757140,
      "ems": null
    },
    {
      "latitude": 51.383331,
      "longitude": 19.96973,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672757143,
      "ems": null
    },
    {
      "latitude": 51.383522,
      "longitude": 19.968109,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1672757146,
      "ems": null
    },
    {
      "latitude": 51.383835,
      "longitude": 19.965498,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672757150,
      "ems": null
    },
    {
      "latitude": 51.384064,
      "longitude": 19.963272,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672757154,
      "ems": null
    },
    {
      "latitude": 51.384247,
      "longitude": 19.96097,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672757158,
      "ems": null
    },
    {
      "latitude": 51.384384,
      "longitude": 19.959337,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1672757160,
      "ems": null
    },
    {
      "latitude": 51.38443,
      "longitude": 19.958744,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1672757161,
      "ems": null
    },
    {
      "latitude": 51.384705,
      "longitude": 19.955626,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672757166,
      "ems": null
    },
    {
      "latitude": 51.384781,
      "longitude": 19.953766,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672757169,
      "ems": null
    },
    {
      "latitude": 51.384842,
      "longitude": 19.952435,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1672757171,
      "ems": null
    },
    {
      "latitude": 51.384964,
      "longitude": 19.949493,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1672757176,
      "ems": null
    },
    {
      "latitude": 51.385025,
      "longitude": 19.94746,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1672757178,
      "ems": null
    },
    {
      "latitude": 51.385025,
      "longitude": 19.945456,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672757182,
      "ems": null
    },
    {
      "latitude": 51.385025,
      "longitude": 19.943972,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672757184,
      "ems": null
    },
    {
      "latitude": 51.385014,
      "longitude": 19.941788,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672757188,
      "ems": null
    },
    {
      "latitude": 51.384964,
      "longitude": 19.939651,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672757190,
      "ems": null
    },
    {
      "latitude": 51.384979,
      "longitude": 19.937588,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672757193,
      "ems": null
    },
    {
      "latitude": 51.385117,
      "longitude": 19.933578,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1672757200,
      "ems": null
    },
    {
      "latitude": 51.385338,
      "longitude": 19.930191,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1672757205,
      "ems": null
    },
    {
      "latitude": 51.385483,
      "longitude": 19.926081,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1672757211,
      "ems": null
    },
    {
      "latitude": 51.385345,
      "longitude": 19.921999,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "squawk": "7000",
      "timestamp": 1672757217,
      "ems": null
    },
    {
      "latitude": 51.385014,
      "longitude": 19.919357,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672757221,
      "ems": null
    },
    {
      "latitude": 51.384781,
      "longitude": 19.917374,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672757224,
      "ems": null
    },
    {
      "latitude": 51.384567,
      "longitude": 19.915466,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "squawk": "7000",
      "timestamp": 1672757227,
      "ems": null
    },
    {
      "latitude": 51.384407,
      "longitude": 19.914017,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672757229,
      "ems": null
    },
    {
      "latitude": 51.384018,
      "longitude": 19.911236,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1672757233,
      "ems": null
    },
    {
      "latitude": 51.383663,
      "longitude": 19.90921,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672757236,
      "ems": null
    },
    {
      "latitude": 51.383377,
      "longitude": 19.90745,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672757238,
      "ems": null
    },
    {
      "latitude": 51.383102,
      "longitude": 19.906158,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672757240,
      "ems": null
    },
    {
      "latitude": 51.382553,
      "longitude": 19.903664,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672757244,
      "ems": null
    },
    {
      "latitude": 51.381821,
      "longitude": 19.900917,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672757248,
      "ems": null
    },
    {
      "latitude": 51.381195,
      "longitude": 19.898834,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672757251,
      "ems": null
    },
    {
      "latitude": 51.38073,
      "longitude": 19.897156,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672757253,
      "ems": null
    },
    {
      "latitude": 51.379944,
      "longitude": 19.894682,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1672757257,
      "ems": null
    },
    {
      "latitude": 51.379333,
      "longitude": 19.892807,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1672757259,
      "ems": null
    },
    {
      "latitude": 51.378635,
      "longitude": 19.890671,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1672757262,
      "ems": null
    },
    {
      "latitude": 51.377838,
      "longitude": 19.887926,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672757266,
      "ems": null
    },
    {
      "latitude": 51.377243,
      "longitude": 19.8857,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672757269,
      "ems": null
    },
    {
      "latitude": 51.376259,
      "longitude": 19.881363,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672757275,
      "ems": null
    },
    {
      "latitude": 51.375191,
      "longitude": 19.87709,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672757281,
      "ems": null
    },
    {
      "latitude": 51.374817,
      "longitude": 19.875107,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672757284,
      "ems": null
    },
    {
      "latitude": 51.374443,
      "longitude": 19.872818,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672757287,
      "ems": null
    },
    {
      "latitude": 51.374268,
      "longitude": 19.871447,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1672757289,
      "ems": null
    },
    {
      "latitude": 51.373932,
      "longitude": 19.868622,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1672757293,
      "ems": null
    },
    {
      "latitude": 51.373699,
      "longitude": 19.866409,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672757296,
      "ems": null
    },
    {
      "latitude": 51.373466,
      "longitude": 19.864044,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1672757299,
      "ems": null
    },
    {
      "latitude": 51.373306,
      "longitude": 19.862167,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1672757301,
      "ems": null
    },
    {
      "latitude": 51.373123,
      "longitude": 19.860016,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1672757304,
      "ems": null
    },
    {
      "latitude": 51.37294,
      "longitude": 19.857342,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1672757308,
      "ems": null
    },
    {
      "latitude": 51.372803,
      "longitude": 19.855339,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1672757311,
      "ems": null
    },
    {
      "latitude": 51.372677,
      "longitude": 19.852905,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1672757314,
      "ems": null
    },
    {
      "latitude": 51.372581,
      "longitude": 19.851151,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672757316,
      "ems": null
    },
    {
      "latitude": 51.372536,
      "longitude": 19.848404,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 267,
      "squawk": "7000",
      "timestamp": 1672757320,
      "ems": null
    },
    {
      "latitude": 51.37249,
      "longitude": 19.846191,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1672757323,
      "ems": null
    },
    {
      "latitude": 51.372536,
      "longitude": 19.844055,
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1672757326,
      "ems": null
    },
    {
      "latitude": 51.37262,
      "longitude": 19.842051,
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672757329,
      "ems": null
    },
    {
      "latitude": 51.372768,
      "longitude": 19.840393,
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672757331,
      "ems": null
    },
    {
      "latitude": 51.373047,
      "longitude": 19.838181,
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672757335,
      "ems": null
    },
    {
      "latitude": 51.373375,
      "longitude": 19.836121,
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1672757338,
      "ems": null
    },
    {
      "latitude": 51.373672,
      "longitude": 19.834257,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1672757341,
      "ems": null
    },
    {
      "latitude": 51.374027,
      "longitude": 19.832306,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1672757344,
      "ems": null
    },
    {
      "latitude": 51.374397,
      "longitude": 19.830399,
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672757347,
      "ems": null
    },
    {
      "latitude": 51.374771,
      "longitude": 19.82869,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672757350,
      "ems": null
    },
    {
      "latitude": 51.375183,
      "longitude": 19.826834,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672757353,
      "ems": null
    },
    {
      "latitude": 51.375641,
      "longitude": 19.824903,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1672757356,
      "ems": null
    },
    {
      "latitude": 51.376026,
      "longitude": 19.822998,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672757359,
      "ems": null
    },
    {
      "latitude": 51.376373,
      "longitude": 19.821341,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1672757362,
      "ems": null
    },
    {
      "latitude": 51.376678,
      "longitude": 19.81987,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672757364,
      "ems": null
    },
    {
      "latitude": 51.37719,
      "longitude": 19.817734,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672757368,
      "ems": null
    },
    {
      "latitude": 51.377655,
      "longitude": 19.815922,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672757371,
      "ems": null
    },
    {
      "latitude": 51.378067,
      "longitude": 19.814289,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672757374,
      "ems": null
    },
    {
      "latitude": 51.37854,
      "longitude": 19.812469,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672757377,
      "ems": null
    },
    {
      "latitude": 51.379055,
      "longitude": 19.810791,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672757380,
      "ems": null
    },
    {
      "latitude": 51.379715,
      "longitude": 19.808943,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672757383,
      "ems": null
    },
    {
      "latitude": 51.380356,
      "longitude": 19.807434,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672757386,
      "ems": null
    },
    {
      "latitude": 51.380962,
      "longitude": 19.806061,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672757389,
      "ems": null
    },
    {
      "latitude": 51.381802,
      "longitude": 19.80423,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672757392,
      "ems": null
    },
    {
      "latitude": 51.382313,
      "longitude": 19.803085,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672757395,
      "ems": null
    },
    {
      "latitude": 51.382874,
      "longitude": 19.801966,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672757397,
      "ems": null
    },
    {
      "latitude": 51.383743,
      "longitude": 19.800259,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1672757401,
      "ems": null
    },
    {
      "latitude": 51.384499,
      "longitude": 19.798965,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672757404,
      "ems": null
    },
    {
      "latitude": 51.385429,
      "longitude": 19.797363,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672757407,
      "ems": null
    },
    {
      "latitude": 51.386078,
      "longitude": 19.796249,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672757410,
      "ems": null
    },
    {
      "latitude": 51.38681,
      "longitude": 19.795063,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672757413,
      "ems": null
    },
    {
      "latitude": 51.387619,
      "longitude": 19.793549,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672757416,
      "ems": null
    },
    {
      "latitude": 51.388084,
      "longitude": 19.792786,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672757418,
      "ems": null
    },
    {
      "latitude": 51.389248,
      "longitude": 19.790878,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1672757422,
      "ems": null
    },
    {
      "latitude": 51.39006,
      "longitude": 19.789495,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1672757425,
      "ems": null
    },
    {
      "latitude": 51.390884,
      "longitude": 19.788233,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672757428,
      "ems": null
    },
    {
      "latitude": 51.391388,
      "longitude": 19.787521,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672757430,
      "ems": null
    },
    {
      "latitude": 51.393764,
      "longitude": 19.783401,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672757439,
      "ems": null
    },
    {
      "latitude": 51.394508,
      "longitude": 19.781876,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672757442,
      "ems": null
    },
    {
      "latitude": 51.395206,
      "longitude": 19.78035,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672757445,
      "ems": null
    },
    {
      "latitude": 51.39592,
      "longitude": 19.77873,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672757448,
      "ems": null
    },
    {
      "latitude": 51.396603,
      "longitude": 19.777222,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672757451,
      "ems": null
    },
    {
      "latitude": 51.397255,
      "longitude": 19.775543,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672757454,
      "ems": null
    },
    {
      "latitude": 51.397842,
      "longitude": 19.773981,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672757457,
      "ems": null
    },
    {
      "latitude": 51.39856,
      "longitude": 19.772186,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672757460,
      "ems": null
    },
    {
      "latitude": 51.399117,
      "longitude": 19.770737,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672757463,
      "ems": null
    },
    {
      "latitude": 51.399719,
      "longitude": 19.768932,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672757466,
      "ems": null
    },
    {
      "latitude": 51.400234,
      "longitude": 19.767456,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672757469,
      "ems": null
    },
    {
      "latitude": 51.400818,
      "longitude": 19.765667,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672757472,
      "ems": null
    },
    {
      "latitude": 51.401352,
      "longitude": 19.764099,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672757475,
      "ems": null
    },
    {
      "latitude": 51.401825,
      "longitude": 19.7624,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672757478,
      "ems": null
    },
    {
      "latitude": 51.402374,
      "longitude": 19.760666,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672757481,
      "ems": null
    },
    {
      "latitude": 51.403538,
      "longitude": 19.757614,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672757487,
      "ems": null
    },
    {
      "latitude": 51.404144,
      "longitude": 19.756317,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672757490,
      "ems": null
    },
    {
      "latitude": 51.404842,
      "longitude": 19.754868,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672757493,
      "ems": null
    },
    {
      "latitude": 51.405533,
      "longitude": 19.753567,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672757496,
      "ems": null
    },
    {
      "latitude": 51.406193,
      "longitude": 19.75235,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1672757499,
      "ems": null
    },
    {
      "latitude": 51.406799,
      "longitude": 19.751282,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672757502,
      "ems": null
    },
    {
      "latitude": 51.407497,
      "longitude": 19.75029,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672757505,
      "ems": null
    },
    {
      "latitude": 51.408142,
      "longitude": 19.749262,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672757508,
      "ems": null
    },
    {
      "latitude": 51.408829,
      "longitude": 19.748074,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672757511,
      "ems": null
    },
    {
      "latitude": 51.40947,
      "longitude": 19.747034,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672757514,
      "ems": null
    },
    {
      "latitude": 51.410057,
      "longitude": 19.746017,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672757517,
      "ems": null
    },
    {
      "latitude": 51.411362,
      "longitude": 19.743729,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1672757524,
      "ems": null
    },
    {
      "latitude": 51.412247,
      "longitude": 19.741898,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672757528,
      "ems": null
    },
    {
      "latitude": 51.412857,
      "longitude": 19.740353,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672757532,
      "ems": null
    },
    {
      "latitude": 51.413269,
      "longitude": 19.738943,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672757536,
      "ems": null
    },
    {
      "latitude": 51.413589,
      "longitude": 19.737532,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672757539,
      "ems": null
    },
    {
      "latitude": 51.413818,
      "longitude": 19.736122,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672757542,
      "ems": null
    },
    {
      "latitude": 51.414013,
      "longitude": 19.734573,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1672757545,
      "ems": null
    },
    {
      "latitude": 51.414093,
      "longitude": 19.733152,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1672757548,
      "ems": null
    },
    {
      "latitude": 51.414093,
      "longitude": 19.731668,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 269,
      "squawk": "7000",
      "timestamp": 1672757551,
      "ems": null
    },
    {
      "latitude": 51.414047,
      "longitude": 19.730036,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1672757554,
      "ems": null
    },
    {
      "latitude": 51.413921,
      "longitude": 19.72847,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1672757557,
      "ems": null
    },
    {
      "latitude": 51.413818,
      "longitude": 19.72714,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 261,
      "squawk": "7000",
      "timestamp": 1672757560,
      "ems": null
    },
    {
      "latitude": 51.413635,
      "longitude": 19.725655,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672757563,
      "ems": null
    },
    {
      "latitude": 51.413315,
      "longitude": 19.724171,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672757566,
      "ems": null
    },
    {
      "latitude": 51.412949,
      "longitude": 19.722538,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672757569,
      "ems": null
    },
    {
      "latitude": 51.412628,
      "longitude": 19.721127,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672757572,
      "ems": null
    },
    {
      "latitude": 51.412151,
      "longitude": 19.71962,
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1672757575,
      "ems": null
    },
    {
      "latitude": 51.411545,
      "longitude": 19.718246,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1672757578,
      "ems": null
    },
    {
      "latitude": 51.410706,
      "longitude": 19.716896,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1672757581,
      "ems": null
    },
    {
      "latitude": 51.409824,
      "longitude": 19.715805,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1672757584,
      "ems": null
    },
    {
      "latitude": 51.408829,
      "longitude": 19.714743,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1672757587,
      "ems": null
    },
    {
      "latitude": 51.407822,
      "longitude": 19.713745,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1672757590,
      "ems": null
    },
    {
      "latitude": 51.406769,
      "longitude": 19.712961,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1672757593,
      "ems": null
    },
    {
      "latitude": 51.405716,
      "longitude": 19.711996,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1672757596,
      "ems": null
    },
    {
      "latitude": 51.404846,
      "longitude": 19.711105,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1672757599,
      "ems": null
    },
    {
      "latitude": 51.403839,
      "longitude": 19.71014,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1672757602,
      "ems": null
    },
    {
      "latitude": 51.402649,
      "longitude": 19.708879,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1672757605,
      "ems": null
    },
    {
      "latitude": 51.401688,
      "longitude": 19.707914,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1672757608,
      "ems": null
    },
    {
      "latitude": 51.400791,
      "longitude": 19.706955,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1672757611,
      "ems": null
    },
    {
      "latitude": 51.399719,
      "longitude": 19.70591,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1672757614,
      "ems": null
    },
    {
      "latitude": 51.397842,
      "longitude": 19.703979,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1672757620,
      "ems": null
    },
    {
      "latitude": 51.395905,
      "longitude": 19.70192,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1672757626,
      "ems": null
    },
    {
      "latitude": 51.393902,
      "longitude": 19.699783,
      "altitude": {
        "feet": 575,
        "meters": 175
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1672757632,
      "ems": null
    },
    {
      "latitude": 51.391949,
      "longitude": 19.697952,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1672757638,
      "ems": null
    },
    {
      "latitude": 51.389992,
      "longitude": 19.695969,
      "altitude": {
        "feet": 475,
        "meters": 145
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1672757644,
      "ems": null
    },
    {
      "latitude": 51.388084,
      "longitude": 19.693985,
      "altitude": {
        "feet": 400,
        "meters": 122
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1672757651,
      "ems": null
    },
    {
      "latitude": 51.387295,
      "longitude": 19.693222,
      "altitude": {
        "feet": 400,
        "meters": 122
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1672757653,
      "ems": null
    },
    {
      "latitude": 51.378754,
      "longitude": 19.684753,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1672757681,
      "ems": null
    },
    {
      "latitude": 51.376968,
      "longitude": 19.682972,
      "altitude": {
        "feet": 475,
        "meters": 145
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1672757687,
      "ems": null
    },
    {
      "latitude": 51.375229,
      "longitude": 19.68119,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1672757693,
      "ems": null
    },
    {
      "latitude": 51.373234,
      "longitude": 19.679184,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1672757699,
      "ems": null
    },
    {
      "latitude": 51.371326,
      "longitude": 19.677277,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1672757706,
      "ems": null
    },
    {
      "latitude": 51.36937,
      "longitude": 19.674988,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1672757712,
      "ems": null
    },
    {
      "latitude": 51.368546,
      "longitude": 19.673916,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1672757715,
      "ems": null
    },
    {
      "latitude": 51.367722,
      "longitude": 19.672876,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1672757717,
      "ems": null
    },
    {
      "latitude": 51.366623,
      "longitude": 19.671478,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1672757721,
      "ems": null
    },
    {
      "latitude": 51.364483,
      "longitude": 19.669571,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 203,
      "squawk": "7000",
      "timestamp": 1672757726,
      "ems": null
    },
    {
      "latitude": 51.363644,
      "longitude": 19.669189,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1672757729,
      "ems": null
    },
    {
      "latitude": 51.362293,
      "longitude": 19.668884,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1672757731,
      "ems": null
    },
    {
      "latitude": 51.360489,
      "longitude": 19.66909,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1672757735,
      "ems": null
    },
    {
      "latitude": 51.359081,
      "longitude": 19.669571,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1672757738,
      "ems": null
    },
    {
      "latitude": 51.357651,
      "longitude": 19.670574,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1672757741,
      "ems": null
    },
    {
      "latitude": 51.356335,
      "longitude": 19.67186,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1672757744,
      "ems": null
    },
    {
      "latitude": 51.355034,
      "longitude": 19.673767,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1672757747,
      "ems": null
    },
    {
      "latitude": 51.354008,
      "longitude": 19.675598,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1672757750,
      "ems": null
    },
    {
      "latitude": 51.353027,
      "longitude": 19.678072,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1672757753,
      "ems": null
    },
    {
      "latitude": 51.352432,
      "longitude": 19.680151,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672757756,
      "ems": null
    },
    {
      "latitude": 51.351822,
      "longitude": 19.68277,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672757759,
      "ems": null
    },
    {
      "latitude": 51.351379,
      "longitude": 19.685421,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1672757762,
      "ems": null
    },
    {
      "latitude": 51.35117,
      "longitude": 19.688263,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1672757765,
      "ems": null
    },
    {
      "latitude": 51.351307,
      "longitude": 19.690933,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 83,
      "squawk": "7000",
      "timestamp": 1672757768,
      "ems": null
    },
    {
      "latitude": 51.3517,
      "longitude": 19.693512,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1672757771,
      "ems": null
    },
    {
      "latitude": 51.352295,
      "longitude": 19.695889,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1672757774,
      "ems": null
    },
    {
      "latitude": 51.35321,
      "longitude": 19.698412,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1672757778,
      "ems": null
    },
    {
      "latitude": 51.354149,
      "longitude": 19.700241,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 49,
      "squawk": "7000",
      "timestamp": 1672757780,
      "ems": null
    },
    {
      "latitude": 51.355171,
      "longitude": 19.702072,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1672757783,
      "ems": null
    },
    {
      "latitude": 51.356277,
      "longitude": 19.703905,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1672757787,
      "ems": null
    },
    {
      "latitude": 51.357361,
      "longitude": 19.705582,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1672757789,
      "ems": null
    },
    {
      "latitude": 51.358524,
      "longitude": 19.707336,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1672757792,
      "ems": null
    },
    {
      "latitude": 51.359711,
      "longitude": 19.708879,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1672757795,
      "ems": null
    },
    {
      "latitude": 51.360947,
      "longitude": 19.710512,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1672757798,
      "ems": null
    },
    {
      "latitude": 51.362247,
      "longitude": 19.712143,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1672757801,
      "ems": null
    },
    {
      "latitude": 51.363464,
      "longitude": 19.713703,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1672757805,
      "ems": null
    },
    {
      "latitude": 51.364746,
      "longitude": 19.715115,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1672757807,
      "ems": null
    },
    {
      "latitude": 51.366112,
      "longitude": 19.716492,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1672757811,
      "ems": null
    },
    {
      "latitude": 51.367367,
      "longitude": 19.717712,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1672757813,
      "ems": null
    },
    {
      "latitude": 51.368813,
      "longitude": 19.719009,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1672757817,
      "ems": null
    },
    {
      "latitude": 51.37001,
      "longitude": 19.720087,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1672757819,
      "ems": null
    },
    {
      "latitude": 51.371521,
      "longitude": 19.721275,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1672757822,
      "ems": null
    },
    {
      "latitude": 51.37294,
      "longitude": 19.722389,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1672757825,
      "ems": null
    },
    {
      "latitude": 51.374496,
      "longitude": 19.723354,
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672757829,
      "ems": null
    },
    {
      "latitude": 51.375935,
      "longitude": 19.724197,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672757832,
      "ems": null
    },
    {
      "latitude": 51.377609,
      "longitude": 19.725037,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672757835,
      "ems": null
    },
    {
      "latitude": 51.379028,
      "longitude": 19.72558,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1672757838,
      "ems": null
    },
    {
      "latitude": 51.380493,
      "longitude": 19.725952,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672757841,
      "ems": null
    },
    {
      "latitude": 51.381985,
      "longitude": 19.726257,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1672757844,
      "ems": null
    },
    {
      "latitude": 51.383377,
      "longitude": 19.72625,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1672757847,
      "ems": null
    },
    {
      "latitude": 51.384827,
      "longitude": 19.726181,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672757850,
      "ems": null
    },
    {
      "latitude": 51.386127,
      "longitude": 19.726181,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672757853,
      "ems": null
    },
    {
      "latitude": 51.38776,
      "longitude": 19.726028,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672757856,
      "ems": null
    },
    {
      "latitude": 51.389008,
      "longitude": 19.725803,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672757859,
      "ems": null
    },
    {
      "latitude": 51.390553,
      "longitude": 19.725571,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672757862,
      "ems": null
    },
    {
      "latitude": 51.391853,
      "longitude": 19.725266,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672757865,
      "ems": null
    },
    {
      "latitude": 51.393345,
      "longitude": 19.725113,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672757868,
      "ems": null
    },
    {
      "latitude": 51.394787,
      "longitude": 19.72496,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672757871,
      "ems": null
    },
    {
      "latitude": 51.396332,
      "longitude": 19.724913,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672757874,
      "ems": null
    },
    {
      "latitude": 51.397907,
      "longitude": 19.724731,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672757877,
      "ems": null
    },
    {
      "latitude": 51.400558,
      "longitude": 19.724655,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1672757882,
      "ems": null
    },
    {
      "latitude": 51.401306,
      "longitude": 19.724655,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672757884,
      "ems": null
    },
    {
      "latitude": 51.403976,
      "longitude": 19.724764,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 2,
      "squawk": "7000",
      "timestamp": 1672757889,
      "ems": null
    },
    {
      "latitude": 51.404472,
      "longitude": 19.724808,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672757890,
      "ems": null
    },
    {
      "latitude": 51.406471,
      "longitude": 19.724884,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672757894,
      "ems": null
    },
    {
      "latitude": 51.408054,
      "longitude": 19.72496,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672757897,
      "ems": null
    },
    {
      "latitude": 51.411255,
      "longitude": 19.725061,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672757903,
      "ems": null
    },
    {
      "latitude": 51.412857,
      "longitude": 19.725136,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 1,
      "squawk": "7000",
      "timestamp": 1672757906,
      "ems": null
    },
    {
      "latitude": 51.415878,
      "longitude": 19.725061,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1672757911,
      "ems": null
    },
    {
      "latitude": 51.419182,
      "longitude": 19.724884,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672757917,
      "ems": null
    },
    {
      "latitude": 51.422626,
      "longitude": 19.724655,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672757924,
      "ems": null
    },
    {
      "latitude": 51.424393,
      "longitude": 19.724394,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672757927,
      "ems": null
    },
    {
      "latitude": 51.425812,
      "longitude": 19.724245,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672757930,
      "ems": null
    },
    {
      "latitude": 51.427467,
      "longitude": 19.724045,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672757933,
      "ems": null
    },
    {
      "latitude": 51.429382,
      "longitude": 19.723873,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672757936,
      "ems": null
    },
    {
      "latitude": 51.432678,
      "longitude": 19.723577,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1672757942,
      "ems": null
    },
    {
      "latitude": 51.435883,
      "longitude": 19.722982,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672757948,
      "ems": null
    },
    {
      "latitude": 51.437393,
      "longitude": 19.722687,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672757951,
      "ems": null
    },
    {
      "latitude": 51.440781,
      "longitude": 19.722612,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1672757957,
      "ems": null
    },
    {
      "latitude": 51.442131,
      "longitude": 19.722977,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1672757960,
      "ems": null
    },
    {
      "latitude": 51.444088,
      "longitude": 19.723892,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672757963,
      "ems": null
    },
    {
      "latitude": 51.445679,
      "longitude": 19.724913,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672757966,
      "ems": null
    },
    {
      "latitude": 51.446648,
      "longitude": 19.725571,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672757969,
      "ems": null
    },
    {
      "latitude": 51.4487,
      "longitude": 19.726843,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1672757972,
      "ems": null
    },
    {
      "latitude": 51.450256,
      "longitude": 19.727659,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1672757975,
      "ems": null
    },
    {
      "latitude": 51.452087,
      "longitude": 19.728476,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1672757979,
      "ems": null
    },
    {
      "latitude": 51.45369,
      "longitude": 19.729292,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1672757982,
      "ems": null
    },
    {
      "latitude": 51.456894,
      "longitude": 19.730629,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1672757988,
      "ems": null
    },
    {
      "latitude": 51.458424,
      "longitude": 19.731064,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1672757990,
      "ems": null
    },
    {
      "latitude": 51.460007,
      "longitude": 19.731371,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672757993,
      "ems": null
    },
    {
      "latitude": 51.461563,
      "longitude": 19.731594,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 5,
      "squawk": "7000",
      "timestamp": 1672757996,
      "ems": null
    },
    {
      "latitude": 51.463257,
      "longitude": 19.731892,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672758000,
      "ems": null
    },
    {
      "latitude": 51.464756,
      "longitude": 19.732132,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672758003,
      "ems": null
    },
    {
      "latitude": 51.466553,
      "longitude": 19.732559,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672758006,
      "ems": null
    },
    {
      "latitude": 51.468155,
      "longitude": 19.732895,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672758009,
      "ems": null
    },
    {
      "latitude": 51.469597,
      "longitude": 19.7332,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672758012,
      "ems": null
    },
    {
      "latitude": 51.473274,
      "longitude": 19.734573,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1672758019,
      "ems": null
    },
    {
      "latitude": 51.474625,
      "longitude": 19.735336,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1672758021,
      "ems": null
    },
    {
      "latitude": 51.476486,
      "longitude": 19.736328,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1672758025,
      "ems": null
    },
    {
      "latitude": 51.477814,
      "longitude": 19.736864,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1672758028,
      "ems": null
    },
    {
      "latitude": 51.480537,
      "longitude": 19.737244,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672758033,
      "ems": null
    },
    {
      "latitude": 51.481979,
      "longitude": 19.736938,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672758036,
      "ems": null
    },
    {
      "latitude": 51.483006,
      "longitude": 19.736481,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672758039,
      "ems": null
    },
    {
      "latitude": 51.483582,
      "longitude": 19.736122,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672758039,
      "ems": null
    },
    {
      "latitude": 51.485138,
      "longitude": 19.734934,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672758043,
      "ems": null
    },
    {
      "latitude": 51.486263,
      "longitude": 19.733734,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1672758046,
      "ems": null
    },
    {
      "latitude": 51.487335,
      "longitude": 19.732437,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672758049,
      "ems": null
    },
    {
      "latitude": 51.48848,
      "longitude": 19.730852,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672758052,
      "ems": null
    },
    {
      "latitude": 51.489395,
      "longitude": 19.729441,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672758055,
      "ems": null
    },
    {
      "latitude": 51.490452,
      "longitude": 19.727859,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "timestamp": 1672758058,
      "ems": null
    },
    {
      "latitude": 51.491428,
      "longitude": 19.726257,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672758061,
      "ems": null
    },
    {
      "latitude": 51.492279,
      "longitude": 19.724764,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1672758064,
      "ems": null
    },
    {
      "latitude": 51.493195,
      "longitude": 19.722908,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672758067,
      "ems": null
    },
    {
      "latitude": 51.493992,
      "longitude": 19.721222,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672758070,
      "ems": null
    },
    {
      "latitude": 51.494549,
      "longitude": 19.719849,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672758072,
      "ems": null
    },
    {
      "latitude": 51.495438,
      "longitude": 19.717712,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672758076,
      "ems": null
    },
    {
      "latitude": 51.495945,
      "longitude": 19.716415,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672758079,
      "ems": null
    },
    {
      "latitude": 51.496319,
      "longitude": 19.7155,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672758080,
      "ems": null
    },
    {
      "latitude": 51.497528,
      "longitude": 19.712601,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672758085,
      "ems": null
    },
    {
      "latitude": 51.498322,
      "longitude": 19.71077,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672758087,
      "ems": null
    },
    {
      "latitude": 51.498878,
      "longitude": 19.709473,
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672758090,
      "ems": null
    },
    {
      "latitude": 51.499603,
      "longitude": 19.70784,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672758093,
      "ems": null
    },
    {
      "latitude": 51.501068,
      "longitude": 19.70459,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672758099,
      "ems": null
    },
    {
      "latitude": 51.502743,
      "longitude": 19.701004,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1672758104,
      "ems": null
    },
    {
      "latitude": 51.504883,
      "longitude": 19.695969,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672758112,
      "ems": null
    },
    {
      "latitude": 51.506378,
      "longitude": 19.692102,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1672758118,
      "ems": null
    },
    {
      "latitude": 51.507889,
      "longitude": 19.688168,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672758124,
      "ems": null
    },
    {
      "latitude": 51.508575,
      "longitude": 19.686237,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672758127,
      "ems": null
    },
    {
      "latitude": 51.509171,
      "longitude": 19.68453,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672758130,
      "ems": null
    },
    {
      "latitude": 51.509911,
      "longitude": 19.682236,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672758133,
      "ems": null
    },
    {
      "latitude": 51.510452,
      "longitude": 19.680523,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672758136,
      "ems": null
    },
    {
      "latitude": 51.51123,
      "longitude": 19.678221,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1672758139,
      "ems": null
    },
    {
      "latitude": 51.511772,
      "longitude": 19.676285,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672758142,
      "ems": null
    },
    {
      "latitude": 51.512333,
      "longitude": 19.674301,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672758145,
      "ems": null
    },
    {
      "latitude": 51.512787,
      "longitude": 19.67243,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672758148,
      "ems": null
    },
    {
      "latitude": 51.513355,
      "longitude": 19.67041,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672758151,
      "ems": null
    },
    {
      "latitude": 51.513962,
      "longitude": 19.668274,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672758154,
      "ems": null
    },
    {
      "latitude": 51.514526,
      "longitude": 19.666195,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672758157,
      "ems": null
    },
    {
      "latitude": 51.51503,
      "longitude": 19.66419,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1672758160,
      "ems": null
    },
    {
      "latitude": 51.515545,
      "longitude": 19.662094,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1672758163,
      "ems": null
    },
    {
      "latitude": 51.515869,
      "longitude": 19.66011,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672758166,
      "ems": null
    },
    {
      "latitude": 51.51622,
      "longitude": 19.657955,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672758169,
      "ems": null
    },
    {
      "latitude": 51.516586,
      "longitude": 19.655804,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1672758172,
      "ems": null
    },
    {
      "latitude": 51.517593,
      "longitude": 19.651571,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1672758179,
      "ems": null
    },
    {
      "latitude": 51.518921,
      "longitude": 19.647564,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672758185,
      "ems": null
    },
    {
      "latitude": 51.519547,
      "longitude": 19.645691,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672758188,
      "ems": null
    },
    {
      "latitude": 51.520157,
      "longitude": 19.644001,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672758191,
      "ems": null
    },
    {
      "latitude": 51.520844,
      "longitude": 19.641996,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672758194,
      "ems": null
    },
    {
      "latitude": 51.521484,
      "longitude": 19.639992,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672758197,
      "ems": null
    },
    {
      "latitude": 51.522079,
      "longitude": 19.638136,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672758200,
      "ems": null
    },
    {
      "latitude": 51.52272,
      "longitude": 19.636206,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672758203,
      "ems": null
    },
    {
      "latitude": 51.523041,
      "longitude": 19.635241,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1672758204,
      "ems": null
    },
    {
      "latitude": 51.52446,
      "longitude": 19.630194,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672758212,
      "ems": null
    },
    {
      "latitude": 51.525692,
      "longitude": 19.626465,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1672758217,
      "ems": null
    },
    {
      "latitude": 51.527161,
      "longitude": 19.62277,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672758224,
      "ems": null
    },
    {
      "latitude": 51.528019,
      "longitude": 19.620972,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672758227,
      "ems": null
    },
    {
      "latitude": 51.528904,
      "longitude": 19.61937,
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1672758230,
      "ems": null
    },
    {
      "latitude": 51.529835,
      "longitude": 19.617767,
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672758232,
      "ems": null
    },
    {
      "latitude": 51.530823,
      "longitude": 19.616089,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 314,
      "squawk": "7000",
      "timestamp": 1672758236,
      "ems": null
    },
    {
      "latitude": 51.531784,
      "longitude": 19.614531,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672758239,
      "ems": null
    },
    {
      "latitude": 51.532677,
      "longitude": 19.613342,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758241,
      "ems": null
    },
    {
      "latitude": 51.534073,
      "longitude": 19.611664,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672758245,
      "ems": null
    },
    {
      "latitude": 51.534943,
      "longitude": 19.610819,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672758248,
      "ems": null
    },
    {
      "latitude": 51.536499,
      "longitude": 19.609482,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672758251,
      "ems": null
    },
    {
      "latitude": 51.537796,
      "longitude": 19.608536,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672758254,
      "ems": null
    },
    {
      "latitude": 51.539101,
      "longitude": 19.60762,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672758257,
      "ems": null
    },
    {
      "latitude": 51.54031,
      "longitude": 19.606781,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672758260,
      "ems": null
    },
    {
      "latitude": 51.54166,
      "longitude": 19.605942,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672758263,
      "ems": null
    },
    {
      "latitude": 51.543091,
      "longitude": 19.605028,
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672758266,
      "ems": null
    },
    {
      "latitude": 51.544361,
      "longitude": 19.604263,
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672758269,
      "ems": null
    },
    {
      "latitude": 51.5457,
      "longitude": 19.60347,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672758272,
      "ems": null
    },
    {
      "latitude": 51.546982,
      "longitude": 19.602579,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672758275,
      "ems": null
    },
    {
      "latitude": 51.547852,
      "longitude": 19.602051,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "timestamp": 1672758278,
      "ems": null
    },
    {
      "latitude": 51.549294,
      "longitude": 19.601135,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672758281,
      "ems": null
    },
    {
      "latitude": 51.550457,
      "longitude": 19.600525,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1672758284,
      "ems": null
    },
    {
      "latitude": 51.551437,
      "longitude": 19.599991,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1672758287,
      "ems": null
    },
    {
      "latitude": 51.552647,
      "longitude": 19.59938,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672758290,
      "ems": null
    },
    {
      "latitude": 51.553711,
      "longitude": 19.598942,
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1672758293,
      "ems": null
    },
    {
      "latitude": 51.554764,
      "longitude": 19.598421,
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672758296,
      "ems": null
    },
    {
      "latitude": 51.55687,
      "longitude": 19.597382,
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1672758302,
      "ems": null
    },
    {
      "latitude": 51.557968,
      "longitude": 19.596937,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1672758305,
      "ems": null
    },
    {
      "latitude": 51.559071,
      "longitude": 19.596405,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672758308,
      "ems": null
    },
    {
      "latitude": 51.560932,
      "longitude": 19.59549,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672758314,
      "ems": null
    },
    {
      "latitude": 51.563095,
      "longitude": 19.594414,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1672758320,
      "ems": null
    },
    {
      "latitude": 51.564983,
      "longitude": 19.59343,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672758326,
      "ems": null
    },
    {
      "latitude": 51.567169,
      "longitude": 19.592285,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672758332,
      "ems": null
    },
    {
      "latitude": 51.568039,
      "longitude": 19.591667,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672758335,
      "ems": null
    },
    {
      "latitude": 51.569035,
      "longitude": 19.590912,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672758338,
      "ems": null
    },
    {
      "latitude": 51.569824,
      "longitude": 19.590378,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672758341,
      "ems": null
    },
    {
      "latitude": 51.570942,
      "longitude": 19.589615,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672758344,
      "ems": null
    },
    {
      "latitude": 51.571884,
      "longitude": 19.588995,
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
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672758347,
      "ems": null
    },
    {
      "latitude": 51.572895,
      "longitude": 19.588242,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672758350,
      "ems": null
    },
    {
      "latitude": 51.573826,
      "longitude": 19.587402,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672758353,
      "ems": null
    },
    {
      "latitude": 51.57486,
      "longitude": 19.586544,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672758356,
      "ems": null
    },
    {
      "latitude": 51.575829,
      "longitude": 19.585648,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672758359,
      "ems": null
    },
    {
      "latitude": 51.576668,
      "longitude": 19.584885,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672758362,
      "ems": null
    },
    {
      "latitude": 51.57774,
      "longitude": 19.583893,
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672758366,
      "ems": null
    },
    {
      "latitude": 51.578659,
      "longitude": 19.583055,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672758368,
      "ems": null
    },
    {
      "latitude": 51.579575,
      "longitude": 19.582165,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672758371,
      "ems": null
    },
    {
      "latitude": 51.58049,
      "longitude": 19.581348,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672758374,
      "ems": null
    },
    {
      "latitude": 51.581406,
      "longitude": 19.580458,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672758377,
      "ems": null
    },
    {
      "latitude": 51.582367,
      "longitude": 19.579418,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672758380,
      "ems": null
    },
    {
      "latitude": 51.583233,
      "longitude": 19.5784,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672758383,
      "ems": null
    },
    {
      "latitude": 51.584061,
      "longitude": 19.577339,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758386,
      "ems": null
    },
    {
      "latitude": 51.585068,
      "longitude": 19.576078,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672758390,
      "ems": null
    },
    {
      "latitude": 51.585938,
      "longitude": 19.574965,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758393,
      "ems": null
    },
    {
      "latitude": 51.58667,
      "longitude": 19.573925,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672758395,
      "ems": null
    },
    {
      "latitude": 51.587654,
      "longitude": 19.572601,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672758399,
      "ems": null
    },
    {
      "latitude": 51.588493,
      "longitude": 19.571533,
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672758402,
      "ems": null
    },
    {
      "latitude": 51.589237,
      "longitude": 19.570541,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758404,
      "ems": null
    },
    {
      "latitude": 51.590122,
      "longitude": 19.569244,
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672758408,
      "ems": null
    },
    {
      "latitude": 51.591888,
      "longitude": 19.567022,
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758414,
      "ems": null
    },
    {
      "latitude": 51.593754,
      "longitude": 19.564667,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672758420,
      "ems": null
    },
    {
      "latitude": 51.595474,
      "longitude": 19.562378,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672758426,
      "ems": null
    },
    {
      "latitude": 51.597149,
      "longitude": 19.560242,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672758431,
      "ems": null
    },
    {
      "latitude": 51.598892,
      "longitude": 19.557817,
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672758438,
      "ems": null
    },
    {
      "latitude": 51.599716,
      "longitude": 19.55648,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672758441,
      "ems": null
    },
    {
      "latitude": 51.600548,
      "longitude": 19.555283,
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672758443,
      "ems": null
    },
    {
      "latitude": 51.601341,
      "longitude": 19.553986,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672758446,
      "ems": null
    },
    {
      "latitude": 51.602188,
      "longitude": 19.55262,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672758450,
      "ems": null
    },
    {
      "latitude": 51.602924,
      "longitude": 19.551468,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672758453,
      "ems": null
    },
    {
      "latitude": 51.603855,
      "longitude": 19.550018,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672758456,
      "ems": null
    },
    {
      "latitude": 51.604645,
      "longitude": 19.548798,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672758459,
      "ems": null
    },
    {
      "latitude": 51.606354,
      "longitude": 19.546015,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672758465,
      "ems": null
    },
    {
      "latitude": 51.608044,
      "longitude": 19.543228,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672758471,
      "ems": null
    },
    {
      "latitude": 51.609833,
      "longitude": 19.540522,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672758477,
      "ems": null
    },
    {
      "latitude": 51.611664,
      "longitude": 19.537848,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672758483,
      "ems": null
    },
    {
      "latitude": 51.613541,
      "longitude": 19.53525,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758489,
      "ems": null
    },
    {
      "latitude": 51.614792,
      "longitude": 19.533463,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758493,
      "ems": null
    },
    {
      "latitude": 51.615875,
      "longitude": 19.532059,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672758497,
      "ems": null
    },
    {
      "latitude": 51.61684,
      "longitude": 19.530869,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "squawk": "7000",
      "timestamp": 1672758501,
      "ems": null
    },
    {
      "latitude": 51.617981,
      "longitude": 19.529461,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758504,
      "ems": null
    },
    {
      "latitude": 51.619076,
      "longitude": 19.528275,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672758507,
      "ems": null
    },
    {
      "latitude": 51.620102,
      "longitude": 19.527054,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672758510,
      "ems": null
    },
    {
      "latitude": 51.620865,
      "longitude": 19.526194,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672758513,
      "ems": null
    },
    {
      "latitude": 51.621826,
      "longitude": 19.525005,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672758515,
      "ems": null
    },
    {
      "latitude": 51.623886,
      "longitude": 19.522556,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672758523,
      "ems": null
    },
    {
      "latitude": 51.626804,
      "longitude": 19.518814,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758531,
      "ems": null
    },
    {
      "latitude": 51.62862,
      "longitude": 19.51622,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672758537,
      "ems": null
    },
    {
      "latitude": 51.629425,
      "longitude": 19.515059,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672758540,
      "ems": null
    },
    {
      "latitude": 51.630432,
      "longitude": 19.513575,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1672758543,
      "ems": null
    },
    {
      "latitude": 51.631348,
      "longitude": 19.512165,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672758546,
      "ems": null
    },
    {
      "latitude": 51.632019,
      "longitude": 19.51088,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672758549,
      "ems": null
    },
    {
      "latitude": 51.632721,
      "longitude": 19.509344,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672758552,
      "ems": null
    },
    {
      "latitude": 51.633362,
      "longitude": 19.507858,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672758555,
      "ems": null
    },
    {
      "latitude": 51.634003,
      "longitude": 19.5063,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1672758558,
      "ems": null
    },
    {
      "latitude": 51.634766,
      "longitude": 19.504852,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672758561,
      "ems": null
    },
    {
      "latitude": 51.635468,
      "longitude": 19.503479,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1672758564,
      "ems": null
    },
    {
      "latitude": 51.636208,
      "longitude": 19.502029,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1672758567,
      "ems": null
    },
    {
      "latitude": 51.637115,
      "longitude": 19.500509,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1672758570,
      "ems": null
    },
    {
      "latitude": 51.638767,
      "longitude": 19.49791,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672758576,
      "ems": null
    },
    {
      "latitude": 51.639698,
      "longitude": 19.496613,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758579,
      "ems": null
    },
    {
      "latitude": 51.640537,
      "longitude": 19.495544,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672758582,
      "ems": null
    },
    {
      "latitude": 51.641464,
      "longitude": 19.494497,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672758585,
      "ems": null
    },
    {
      "latitude": 51.642517,
      "longitude": 19.493607,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672758588,
      "ems": null
    },
    {
      "latitude": 51.643661,
      "longitude": 19.492865,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672758591,
      "ems": null
    },
    {
      "latitude": 51.644867,
      "longitude": 19.49234,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1672758594,
      "ems": null
    },
    {
      "latitude": 51.64603,
      "longitude": 19.491882,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672758597,
      "ems": null
    },
    {
      "latitude": 51.647141,
      "longitude": 19.491528,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672758600,
      "ems": null
    },
    {
      "latitude": 51.648312,
      "longitude": 19.491272,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672758603,
      "ems": null
    },
    {
      "latitude": 51.649384,
      "longitude": 19.490934,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672758606,
      "ems": null
    },
    {
      "latitude": 51.650436,
      "longitude": 19.490637,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672758609,
      "ems": null
    },
    {
      "latitude": 51.651615,
      "longitude": 19.49028,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672758612,
      "ems": null
    },
    {
      "latitude": 51.652542,
      "longitude": 19.489969,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672758615,
      "ems": null
    },
    {
      "latitude": 51.653618,
      "longitude": 19.489594,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672758618,
      "ems": null
    },
    {
      "latitude": 51.654644,
      "longitude": 19.489288,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672758621,
      "ems": null
    },
    {
      "latitude": 51.656754,
      "longitude": 19.488337,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672758628,
      "ems": null
    },
    {
      "latitude": 51.657528,
      "longitude": 19.487762,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672758630,
      "ems": null
    },
    {
      "latitude": 51.65863,
      "longitude": 19.487,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672758634,
      "ems": null
    },
    {
      "latitude": 51.6595,
      "longitude": 19.486406,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672758636,
      "ems": null
    },
    {
      "latitude": 51.660599,
      "longitude": 19.485737,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672758640,
      "ems": null
    },
    {
      "latitude": 51.661625,
      "longitude": 19.485092,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672758643,
      "ems": null
    },
    {
      "latitude": 51.662521,
      "longitude": 19.48455,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672758645,
      "ems": null
    },
    {
      "latitude": 51.6633,
      "longitude": 19.483948,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672758648,
      "ems": null
    },
    {
      "latitude": 51.664463,
      "longitude": 19.483032,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672758651,
      "ems": null
    },
    {
      "latitude": 51.665359,
      "longitude": 19.482248,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 332,
      "squawk": "7000",
      "timestamp": 1672758654,
      "ems": null
    },
    {
      "latitude": 51.666229,
      "longitude": 19.481432,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672758657,
      "ems": null
    },
    {
      "latitude": 51.666977,
      "longitude": 19.480515,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758660,
      "ems": null
    },
    {
      "latitude": 51.667969,
      "longitude": 19.479279,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672758663,
      "ems": null
    },
    {
      "latitude": 51.668842,
      "longitude": 19.478226,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758667,
      "ems": null
    },
    {
      "latitude": 51.669708,
      "longitude": 19.477127,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758670,
      "ems": null
    },
    {
      "latitude": 51.670471,
      "longitude": 19.476166,
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672758672,
      "ems": null
    },
    {
      "latitude": 51.671356,
      "longitude": 19.474899,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758676,
      "ems": null
    },
    {
      "latitude": 51.67218,
      "longitude": 19.47386,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758679,
      "ems": null
    },
    {
      "latitude": 51.672939,
      "longitude": 19.472809,
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758682,
      "ems": null
    },
    {
      "latitude": 51.673683,
      "longitude": 19.471741,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1672758684,
      "ems": null
    },
    {
      "latitude": 51.674515,
      "longitude": 19.470594,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672758688,
      "ems": null
    },
    {
      "latitude": 51.675293,
      "longitude": 19.469555,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1672758690,
      "ems": null
    },
    {
      "latitude": 51.677032,
      "longitude": 19.46718,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758697,
      "ems": null
    },
    {
      "latitude": 51.678711,
      "longitude": 19.465103,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758703,
      "ems": null
    },
    {
      "latitude": 51.680328,
      "longitude": 19.463171,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672758709,
      "ems": null
    },
    {
      "latitude": 51.681225,
      "longitude": 19.462204,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1672758712,
      "ems": null
    },
    {
      "latitude": 51.682159,
      "longitude": 19.461166,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672758715,
      "ems": null
    },
    {
      "latitude": 51.682983,
      "longitude": 19.460201,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672758718,
      "ems": null
    },
    {
      "latitude": 51.68383,
      "longitude": 19.459229,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 322,
      "squawk": "7000",
      "timestamp": 1672758721,
      "ems": null
    },
    {
      "latitude": 51.685501,
      "longitude": 19.457085,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672758727,
      "ems": null
    },
    {
      "latitude": 51.687103,
      "longitude": 19.455154,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672758733,
      "ems": null
    },
    {
      "latitude": 51.689045,
      "longitude": 19.453049,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672758739,
      "ems": null
    },
    {
      "latitude": 51.689804,
      "longitude": 19.45211,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1672758742,
      "ems": null
    },
    {
      "latitude": 51.690628,
      "longitude": 19.450701,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1672758745,
      "ems": null
    },
    {
      "latitude": 51.691315,
      "longitude": 19.449141,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672758748,
      "ems": null
    },
    {
      "latitude": 51.691929,
      "longitude": 19.447632,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1672758751,
      "ems": null
    },
    {
      "latitude": 51.692581,
      "longitude": 19.446182,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1672758754,
      "ems": null
    },
    {
      "latitude": 51.694492,
      "longitude": 19.444351,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672758760,
      "ems": null
    },
    {
      "latitude": 51.695702,
      "longitude": 19.443893,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1672758763,
      "ems": null
    },
    {
      "latitude": 51.696945,
      "longitude": 19.443573,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672758766,
      "ems": null
    },
    {
      "latitude": 51.698135,
      "longitude": 19.443426,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672758769,
      "ems": null
    },
    {
      "latitude": 51.699333,
      "longitude": 19.443588,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 6,
      "squawk": "7000",
      "timestamp": 1672758772,
      "ems": null
    },
    {
      "latitude": 51.700775,
      "longitude": 19.444046,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1672758775,
      "ems": null
    },
    {
      "latitude": 51.702209,
      "longitude": 19.444687,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672758778,
      "ems": null
    },
    {
      "latitude": 51.703476,
      "longitude": 19.445496,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1672758781,
      "ems": null
    },
    {
      "latitude": 51.70491,
      "longitude": 19.446543,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 24,
      "squawk": "7000",
      "timestamp": 1672758784,
      "ems": null
    },
    {
      "latitude": 51.706268,
      "longitude": 19.447632,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1672758787,
      "ems": null
    },
    {
      "latitude": 51.70752,
      "longitude": 19.448771,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1672758790,
      "ems": null
    },
    {
      "latitude": 51.708691,
      "longitude": 19.449921,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1672758793,
      "ems": null
    },
    {
      "latitude": 51.710178,
      "longitude": 19.451294,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1672758796,
      "ems": null
    },
    {
      "latitude": 51.711437,
      "longitude": 19.452362,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 25,
      "squawk": "7000",
      "timestamp": 1672758799,
      "ems": null
    },
    {
      "latitude": 51.712692,
      "longitude": 19.453125,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1672758802,
      "ems": null
    },
    {
      "latitude": 51.714798,
      "longitude": 19.453817,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672758806,
      "ems": null
    },
    {
      "latitude": 51.716721,
      "longitude": 19.453817,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1672758811,
      "ems": null
    },
    {
      "latitude": 51.716949,
      "longitude": 19.453743,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 343,
      "squawk": "7000",
      "timestamp": 1672758815,
      "ems": null
    },
    {
      "latitude": 51.719788,
      "longitude": 19.452333,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672758819,
      "ems": null
    },
    {
      "latitude": 51.721344,
      "longitude": 19.451368,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1672758823,
      "ems": null
    },
    {
      "latitude": 51.722351,
      "longitude": 19.450701,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672758827,
      "ems": null
    },
    {
      "latitude": 51.723633,
      "longitude": 19.449997,
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
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1672758830,
      "ems": null
    },
    {
      "latitude": 51.724548,
      "longitude": 19.449438,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672758832,
      "ems": null
    },
    {
      "latitude": 51.725681,
      "longitude": 19.448776,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672758836,
      "ems": null
    },
    {
      "latitude": 51.726612,
      "longitude": 19.44809,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672758839,
      "ems": null
    },
    {
      "latitude": 51.727589,
      "longitude": 19.447327,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672758842,
      "ems": null
    },
    {
      "latitude": 51.728428,
      "longitude": 19.446487,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1672758844,
      "ems": null
    },
    {
      "latitude": 51.729313,
      "longitude": 19.445343,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1672758848,
      "ems": null
    },
    {
      "latitude": 51.729996,
      "longitude": 19.444019,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1672758851,
      "ems": null
    },
    {
      "latitude": 51.730453,
      "longitude": 19.442535,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1672758854,
      "ems": null
    },
    {
      "latitude": 51.730663,
      "longitude": 19.440994,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1672758857,
      "ems": null
    },
    {
      "latitude": 51.730709,
      "longitude": 19.439163,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1672758860,
      "ems": null
    },
    {
      "latitude": 51.730453,
      "longitude": 19.437412,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672758862,
      "ems": null
    },
    {
      "latitude": 51.730057,
      "longitude": 19.435654,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672758865,
      "ems": null
    },
    {
      "latitude": 51.729637,
      "longitude": 19.433823,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672758869,
      "ems": null
    },
    {
      "latitude": 51.729267,
      "longitude": 19.43222,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672758872,
      "ems": null
    },
    {
      "latitude": 51.728985,
      "longitude": 19.430771,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672758874,
      "ems": null
    },
    {
      "latitude": 51.728485,
      "longitude": 19.428356,
      "altitude": {
        "feet": 650,
        "meters": 198
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672758878,
      "ems": null
    },
    {
      "latitude": 51.728054,
      "longitude": 19.426422,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672758881,
      "ems": null
    },
    {
      "latitude": 51.72773,
      "longitude": 19.42482,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672758883,
      "ems": null
    },
    {
      "latitude": 51.72731,
      "longitude": 19.422913,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672758887,
      "ems": null
    },
    {
      "latitude": 51.72702,
      "longitude": 19.421379,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "squawk": "7000",
      "timestamp": 1672758890,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.417877,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672758895,
      "ems": null
    },
    {
      "latitude": 51.72551,
      "longitude": 19.414104,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672758902,
      "ems": null
    },
    {
      "latitude": 51.724705,
      "longitude": 19.410782,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672758908,
      "ems": null
    },
    {
      "latitude": 51.724091,
      "longitude": 19.407646,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672758914,
      "ems": null
    },
    {
      "latitude": 51.723492,
      "longitude": 19.404526,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672758919,
      "ems": null
    },
    {
      "latitude": 51.7229,
      "longitude": 19.401337,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672758926,
      "ems": null
    },
    {
      "latitude": 51.722328,
      "longitude": 19.398346,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672758932,
      "ems": null
    },
    {
      "latitude": 51.722122,
      "longitude": 19.396955,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672758935,
      "ems": null
    },
    {
      "latitude": 51.721939,
      "longitude": 19.395546,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672758938,
      "ems": null
    },
    {
      "latitude": 51.721756,
      "longitude": 19.393988,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 258,
      "squawk": "7000",
      "timestamp": 1672758941,
      "ems": null
    },
    {
      "latitude": 51.721161,
      "longitude": 19.391315,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672758947,
      "ems": null
    },
    {
      "latitude": 51.720745,
      "longitude": 19.389954,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1672758950,
      "ems": null
    },
    {
      "latitude": 51.720329,
      "longitude": 19.388504,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672758953,
      "ems": null
    },
    {
      "latitude": 51.719879,
      "longitude": 19.387009,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672758956,
      "ems": null
    },
    {
      "latitude": 51.719513,
      "longitude": 19.385748,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672758958,
      "ems": null
    },
    {
      "latitude": 51.719025,
      "longitude": 19.383926,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672758962,
      "ems": null
    },
    {
      "latitude": 51.718651,
      "longitude": 19.382324,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672758965,
      "ems": null
    },
    {
      "latitude": 51.718231,
      "longitude": 19.38055,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672758968,
      "ems": null
    },
    {
      "latitude": 51.717861,
      "longitude": 19.379044,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672758971,
      "ems": null
    },
    {
      "latitude": 51.717487,
      "longitude": 19.37767,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672758974,
      "ems": null
    },
    {
      "latitude": 51.716492,
      "longitude": 19.374166,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672758980,
      "ems": null
    },
    {
      "latitude": 51.715626,
      "longitude": 19.370956,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 246,
      "squawk": "7000",
      "timestamp": 1672758986,
      "ems": null
    },
    {
      "latitude": 51.714741,
      "longitude": 19.367752,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1672758992,
      "ems": null
    },
    {
      "latitude": 51.713764,
      "longitude": 19.364548,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1672758998,
      "ems": null
    },
    {
      "latitude": 51.712788,
      "longitude": 19.361649,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1672759004,
      "ems": null
    },
    {
      "latitude": 51.712273,
      "longitude": 19.360275,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1672759007,
      "ems": null
    },
    {
      "latitude": 51.711548,
      "longitude": 19.358875,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1672759010,
      "ems": null
    },
    {
      "latitude": 51.710724,
      "longitude": 19.357613,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1672759013,
      "ems": null
    },
    {
      "latitude": 51.709808,
      "longitude": 19.356461,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1672759016,
      "ems": null
    },
    {
      "latitude": 51.70871,
      "longitude": 19.355536,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1672759019,
      "ems": null
    },
    {
      "latitude": 51.707611,
      "longitude": 19.354866,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1672759022,
      "ems": null
    },
    {
      "latitude": 51.706329,
      "longitude": 19.354422,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1672759025,
      "ems": null
    },
    {
      "latitude": 51.704918,
      "longitude": 19.354248,
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
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1672759028,
      "ems": null
    },
    {
      "latitude": 51.703583,
      "longitude": 19.354273,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1672759031,
      "ems": null
    },
    {
      "latitude": 51.702209,
      "longitude": 19.35457,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1672759034,
      "ems": null
    },
    {
      "latitude": 51.700653,
      "longitude": 19.355089,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1672759037,
      "ems": null
    },
    {
      "latitude": 51.699192,
      "longitude": 19.35585,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 160,
      "squawk": "7000",
      "timestamp": 1672759040,
      "ems": null
    },
    {
      "latitude": 51.697891,
      "longitude": 19.356766,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1672759043,
      "ems": null
    },
    {
      "latitude": 51.696487,
      "longitude": 19.358059,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1672759046,
      "ems": null
    },
    {
      "latitude": 51.695251,
      "longitude": 19.359617,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1672759049,
      "ems": null
    },
    {
      "latitude": 51.694153,
      "longitude": 19.361399,
      "altitude": {
        "feet": 1125,
        "meters": 343
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1672759052,
      "ems": null
    },
    {
      "latitude": 51.693146,
      "longitude": 19.363478,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1672759055,
      "ems": null
    },
    {
      "latitude": 51.692211,
      "longitude": 19.365845,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1672759058,
      "ems": null
    },
    {
      "latitude": 51.691452,
      "longitude": 19.36808,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1672759061,
      "ems": null
    },
    {
      "latitude": 51.690674,
      "longitude": 19.370499,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1672759064,
      "ems": null
    },
    {
      "latitude": 51.68993,
      "longitude": 19.373016,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1672759067,
      "ems": null
    },
    {
      "latitude": 51.689323,
      "longitude": 19.375305,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672759070,
      "ems": null
    },
    {
      "latitude": 51.688614,
      "longitude": 19.378101,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672759073,
      "ems": null
    },
    {
      "latitude": 51.688019,
      "longitude": 19.38055,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672759076,
      "ems": null
    },
    {
      "latitude": 51.687469,
      "longitude": 19.382704,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1672759079,
      "ems": null
    },
    {
      "latitude": 51.686874,
      "longitude": 19.385376,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672759082,
      "ems": null
    },
    {
      "latitude": 51.686344,
      "longitude": 19.387741,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672759085,
      "ems": null
    },
    {
      "latitude": 51.685787,
      "longitude": 19.390259,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1672759088,
      "ems": null
    },
    {
      "latitude": 51.685181,
      "longitude": 19.393158,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1672759091,
      "ems": null
    },
    {
      "latitude": 51.684715,
      "longitude": 19.395447,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672759094,
      "ems": null
    },
    {
      "latitude": 51.684158,
      "longitude": 19.39827,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672759097,
      "ems": null
    },
    {
      "latitude": 51.683689,
      "longitude": 19.400711,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 225.9,
        "kts": 122,
        "mph": 140.4
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1672759100,
      "ems": null
    },
    {
      "latitude": 51.682663,
      "longitude": 19.405939,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1672759106,
      "ems": null
    },
    {
      "latitude": 51.68169,
      "longitude": 19.411469,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1672759112,
      "ems": null
    },
    {
      "latitude": 51.681316,
      "longitude": 19.414139,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1672759115,
      "ems": null
    },
    {
      "latitude": 51.681107,
      "longitude": 19.416405,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1672759118,
      "ems": null
    },
    {
      "latitude": 51.680786,
      "longitude": 19.419374,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1672759121,
      "ems": null
    },
    {
      "latitude": 51.680511,
      "longitude": 19.422195,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1672759124,
      "ems": null
    },
    {
      "latitude": 51.680199,
      "longitude": 19.425049,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1672759127,
      "ems": null
    },
    {
      "latitude": 51.679871,
      "longitude": 19.427763,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1672759130,
      "ems": null
    },
    {
      "latitude": 51.679642,
      "longitude": 19.430584,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1672759133,
      "ems": null
    },
    {
      "latitude": 51.679363,
      "longitude": 19.433289,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1672759136,
      "ems": null
    },
    {
      "latitude": 51.679138,
      "longitude": 19.436298,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1672759139,
      "ems": null
    },
    {
      "latitude": 51.678635,
      "longitude": 19.442089,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1672759146,
      "ems": null
    },
    {
      "latitude": 51.678543,
      "longitude": 19.444538,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1672759148,
      "ems": null
    },
    {
      "latitude": 51.678452,
      "longitude": 19.447359,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1672759151,
      "ems": null
    },
    {
      "latitude": 51.677639,
      "longitude": 19.45343,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "timestamp": 1672759158,
      "ems": null
    },
    {
      "latitude": 51.676941,
      "longitude": 19.456024,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1672759161,
      "ems": null
    },
    {
      "latitude": 51.676056,
      "longitude": 19.458466,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1672759164,
      "ems": null
    },
    {
      "latitude": 51.675247,
      "longitude": 19.460276,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1672759166,
      "ems": null
    },
    {
      "latitude": 51.673916,
      "longitude": 19.462738,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1672759169,
      "ems": null
    },
    {
      "latitude": 51.672565,
      "longitude": 19.464874,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1672759173,
      "ems": null
    },
    {
      "latitude": 51.671356,
      "longitude": 19.466553,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1672759176,
      "ems": null
    },
    {
      "latitude": 51.670052,
      "longitude": 19.468231,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1672759178,
      "ems": null
    },
    {
      "latitude": 51.66893,
      "longitude": 19.469332,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1672759181,
      "ems": null
    },
    {
      "latitude": 51.667027,
      "longitude": 19.470444,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1672759184,
      "ems": null
    },
    {
      "latitude": 51.665443,
      "longitude": 19.470825,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1672759187,
      "ems": null
    },
    {
      "latitude": 51.66394,
      "longitude": 19.470892,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1672759191,
      "ems": null
    },
    {
      "latitude": 51.662418,
      "longitude": 19.470673,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1672759194,
      "ems": null
    },
    {
      "latitude": 51.660965,
      "longitude": 19.470148,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1672759197,
      "ems": null
    },
    {
      "latitude": 51.659729,
      "longitude": 19.469481,
      "altitude": {
        "feet": 1300,
        "meters": 396
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1672759200,
      "ems": null
    },
    {
      "latitude": 51.658554,
      "longitude": 19.46846,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1672759203,
      "ems": null
    },
    {
      "latitude": 51.657482,
      "longitude": 19.467163,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672759206,
      "ems": null
    },
    {
      "latitude": 51.656693,
      "longitude": 19.465485,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1672759209,
      "ems": null
    },
    {
      "latitude": 51.656204,
      "longitude": 19.464062,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1672759211,
      "ems": null
    },
    {
      "latitude": 51.655838,
      "longitude": 19.462206,
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672759215,
      "ems": null
    },
    {
      "latitude": 51.655655,
      "longitude": 19.46035,
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
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1672759218,
      "ems": null
    },
    {
      "latitude": 51.655701,
      "longitude": 19.458494,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1672759221,
      "ems": null
    },
    {
      "latitude": 51.655975,
      "longitude": 19.456713,
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1672759224,
      "ems": null
    },
    {
      "latitude": 51.656551,
      "longitude": 19.455185,
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1672759227,
      "ems": null
    },
    {
      "latitude": 51.657249,
      "longitude": 19.453888,
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1672759230,
      "ems": null
    },
    {
      "latitude": 51.658134,
      "longitude": 19.45282,
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
      "heading": 323,
      "squawk": "7000",
      "timestamp": 1672759233,
      "ems": null
    },
    {
      "latitude": 51.659088,
      "longitude": 19.451962,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672759236,
      "ems": null
    },
    {
      "latitude": 51.660233,
      "longitude": 19.451368,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1672759239,
      "ems": null
    },
    {
      "latitude": 51.661377,
      "longitude": 19.45122,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 358,
      "squawk": "7000",
      "timestamp": 1672759242,
      "ems": null
    },
    {
      "latitude": 51.662796,
      "longitude": 19.451443,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1672759245,
      "ems": null
    },
    {
      "latitude": 51.664093,
      "longitude": 19.451904,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1672759248,
      "ems": null
    },
    {
      "latitude": 51.665497,
      "longitude": 19.452778,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1672759251,
      "ems": null
    },
    {
      "latitude": 51.666595,
      "longitude": 19.453669,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1672759254,
      "ems": null
    },
    {
      "latitude": 51.667912,
      "longitude": 19.455338,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1672759257,
      "ems": null
    },
    {
      "latitude": 51.668793,
      "longitude": 19.456787,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1672759260,
      "ems": null
    },
    {
      "latitude": 51.67012,
      "longitude": 19.459906,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1672759264,
      "ems": null
    },
    {
      "latitude": 51.670944,
      "longitude": 19.463097,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 69,
      "squawk": "7000",
      "timestamp": 1672759269,
      "ems": null
    },
    {
      "latitude": 51.671494,
      "longitude": 19.466957,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "timestamp": 1672759274,
      "ems": null
    },
    {
      "latitude": 51.671585,
      "longitude": 19.47052,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 91,
      "squawk": "7000",
      "timestamp": 1672759278,
      "ems": null
    },
    {
      "latitude": 51.671356,
      "longitude": 19.473572,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "timestamp": 1672759282,
      "ems": null
    },
    {
      "latitude": 51.670715,
      "longitude": 19.476904,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1672759286,
      "ems": null
    },
    {
      "latitude": 51.669724,
      "longitude": 19.479599,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1672759290,
      "ems": null
    },
    {
      "latitude": 51.668236,
      "longitude": 19.482193,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1672759294,
      "ems": null
    },
    {
      "latitude": 51.667259,
      "longitude": 19.483643,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1672759297,
      "ems": null
    },
    {
      "latitude": 51.666046,
      "longitude": 19.485441,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1672759300,
      "ems": null
    },
    {
      "latitude": 51.665222,
      "longitude": 19.486406,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672759302,
      "ems": null
    },
    {
      "latitude": 51.664604,
      "longitude": 19.487076,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1672759303,
      "ems": null
    },
    {
      "latitude": 51.662933,
      "longitude": 19.488337,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "squawk": "7000",
      "timestamp": 1672759307,
      "ems": null
    },
    {
      "latitude": 51.661377,
      "longitude": 19.489004,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1672759311,
      "ems": null
    },
    {
      "latitude": 51.659592,
      "longitude": 19.489374,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1672759315,
      "ems": null
    },
    {
      "latitude": 51.658272,
      "longitude": 19.489365,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1672759318,
      "ems": null
    },
    {
      "latitude": 51.658035,
      "longitude": 19.4893,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1672759318,
      "ems": null
    },
    {
      "latitude": 51.656067,
      "longitude": 19.488632,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1672759323,
      "ems": null
    },
    {
      "latitude": 51.655014,
      "longitude": 19.487762,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1672759326,
      "ems": null
    },
    {
      "latitude": 51.654236,
      "longitude": 19.486702,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1672759329,
      "ems": null
    },
    {
      "latitude": 51.653618,
      "longitude": 19.485397,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1672759332,
      "ems": null
    },
    {
      "latitude": 51.653294,
      "longitude": 19.484024,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672759335,
      "ems": null
    },
    {
      "latitude": 51.653229,
      "longitude": 19.482769,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1672759338,
      "ems": null
    },
    {
      "latitude": 51.65332,
      "longitude": 19.481209,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 283,
      "squawk": "7000",
      "timestamp": 1672759341,
      "ems": null
    },
    {
      "latitude": 51.653664,
      "longitude": 19.479828,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1672759344,
      "ems": null
    },
    {
      "latitude": 51.654179,
      "longitude": 19.478607,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1672759347,
      "ems": null
    },
    {
      "latitude": 51.654877,
      "longitude": 19.477615,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1672759350,
      "ems": null
    },
    {
      "latitude": 51.655701,
      "longitude": 19.476755,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672759353,
      "ems": null
    },
    {
      "latitude": 51.65646,
      "longitude": 19.475937,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672759356,
      "ems": null
    },
    {
      "latitude": 51.65712,
      "longitude": 19.475197,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1672759359,
      "ems": null
    },
    {
      "latitude": 51.658035,
      "longitude": 19.474232,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672759362,
      "ems": null
    },
    {
      "latitude": 51.658924,
      "longitude": 19.473267,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672759365,
      "ems": null
    },
    {
      "latitude": 51.659729,
      "longitude": 19.472376,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 326,
      "squawk": "7000",
      "timestamp": 1672759369,
      "ems": null
    },
    {
      "latitude": 51.660461,
      "longitude": 19.471708,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1672759371,
      "ems": null
    },
    {
      "latitude": 51.661331,
      "longitude": 19.470818,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1672759375,
      "ems": null
    },
    {
      "latitude": 51.662136,
      "longitude": 19.470139,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1672759377,
      "ems": null
    },
    {
      "latitude": 51.662842,
      "longitude": 19.469555,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672759380,
      "ems": null
    },
    {
      "latitude": 51.663815,
      "longitude": 19.468842,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672759384,
      "ems": null
    },
    {
      "latitude": 51.664719,
      "longitude": 19.46822,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672759387,
      "ems": null
    },
    {
      "latitude": 51.665543,
      "longitude": 19.46755,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672759390,
      "ems": null
    },
    {
      "latitude": 51.66642,
      "longitude": 19.467087,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672759392,
      "ems": null
    },
    {
      "latitude": 51.667419,
      "longitude": 19.466808,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 354,
      "squawk": "7000",
      "timestamp": 1672759396,
      "ems": null
    },
    {
      "latitude": 51.668423,
      "longitude": 19.466934,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1672759398,
      "ems": null
    },
    {
      "latitude": 51.669491,
      "longitude": 19.467163,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1672759402,
      "ems": null
    },
    {
      "latitude": 51.670517,
      "longitude": 19.467316,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1672759404,
      "ems": null
    },
    {
      "latitude": 51.67168,
      "longitude": 19.467316,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1672759407,
      "ems": null
    },
    {
      "latitude": 51.672775,
      "longitude": 19.46718,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672759411,
      "ems": null
    },
    {
      "latitude": 51.673828,
      "longitude": 19.466957,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672759414,
      "ems": null
    },
    {
      "latitude": 51.674881,
      "longitude": 19.466883,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1672759417,
      "ems": null
    },
    {
      "latitude": 51.675919,
      "longitude": 19.466705,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1672759419,
      "ems": null
    },
    {
      "latitude": 51.676895,
      "longitude": 19.466585,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1672759422,
      "ems": null
    },
    {
      "latitude": 51.679035,
      "longitude": 19.466324,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672759429,
      "ems": null
    },
    {
      "latitude": 51.680054,
      "longitude": 19.466215,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1672759432,
      "ems": null
    },
    {
      "latitude": 51.681084,
      "longitude": 19.465942,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1672759434,
      "ems": null
    },
    {
      "latitude": 51.682156,
      "longitude": 19.465637,
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
      "heading": 349,
      "squawk": "7000",
      "timestamp": 1672759438,
      "ems": null
    },
    {
      "latitude": 51.684265,
      "longitude": 19.465101,
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
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672759444,
      "ems": null
    },
    {
      "latitude": 51.686203,
      "longitude": 19.464722,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1672759449,
      "ems": null
    },
    {
      "latitude": 51.688251,
      "longitude": 19.46434,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1672759456,
      "ems": null
    },
    {
      "latitude": 51.690395,
      "longitude": 19.464111,
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672759462,
      "ems": null
    },
    {
      "latitude": 51.691315,
      "longitude": 19.464062,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1672759465,
      "ems": null
    },
    {
      "latitude": 51.692368,
      "longitude": 19.463987,
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
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672759468,
      "ems": null
    },
    {
      "latitude": 51.693329,
      "longitude": 19.463959,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 357,
      "squawk": "7000",
      "timestamp": 1672759470,
      "ems": null
    },
    {
      "latitude": 51.694565,
      "longitude": 19.463913,
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
      "heading": 360,
      "squawk": "7000",
      "timestamp": 1672759474,
      "ems": null
    },
    {
      "latitude": 51.695515,
      "longitude": 19.463882,
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
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1672759477,
      "ems": null
    },
    {
      "latitude": 51.697563,
      "longitude": 19.463501,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672759483,
      "ems": null
    },
    {
      "latitude": 51.698502,
      "longitude": 19.463022,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672759486,
      "ems": null
    },
    {
      "latitude": 51.699463,
      "longitude": 19.462429,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1672759489,
      "ems": null
    },
    {
      "latitude": 51.700497,
      "longitude": 19.461823,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672759492,
      "ems": null
    },
    {
      "latitude": 51.701477,
      "longitude": 19.461241,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672759495,
      "ems": null
    },
    {
      "latitude": 51.702404,
      "longitude": 19.460678,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672759498,
      "ems": null
    },
    {
      "latitude": 51.703384,
      "longitude": 19.460068,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672759501,
      "ems": null
    },
    {
      "latitude": 51.704361,
      "longitude": 19.459534,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672759504,
      "ems": null
    },
    {
      "latitude": 51.705196,
      "longitude": 19.459,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1672759507,
      "ems": null
    },
    {
      "latitude": 51.706131,
      "longitude": 19.458389,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672759510,
      "ems": null
    },
    {
      "latitude": 51.707245,
      "longitude": 19.457603,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672759513,
      "ems": null
    },
    {
      "latitude": 51.708069,
      "longitude": 19.457085,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672759516,
      "ems": null
    },
    {
      "latitude": 51.70903,
      "longitude": 19.456341,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672759519,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 19.455599,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 333,
      "squawk": "7000",
      "timestamp": 1672759522,
      "ems": null
    },
    {
      "latitude": 51.710922,
      "longitude": 19.454803,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672759525,
      "ems": null
    },
    {
      "latitude": 51.711823,
      "longitude": 19.453966,
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672759528,
      "ems": null
    },
    {
      "latitude": 51.712833,
      "longitude": 19.453125,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1672759531,
      "ems": null
    },
    {
      "latitude": 51.71489,
      "longitude": 19.451666,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 335,
      "squawk": "7000",
      "timestamp": 1672759537,
      "ems": null
    },
    {
      "latitude": 51.716698,
      "longitude": 19.450378,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1672759542,
      "ems": null
    },
    {
      "latitude": 51.718781,
      "longitude": 19.449066,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672759549,
      "ems": null
    },
    {
      "latitude": 51.720795,
      "longitude": 19.447731,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672759555,
      "ems": null
    },
    {
      "latitude": 51.721771,
      "longitude": 19.447174,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672759558,
      "ems": null
    },
    {
      "latitude": 51.722702,
      "longitude": 19.446716,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 342,
      "squawk": "7000",
      "timestamp": 1672759561,
      "ems": null
    },
    {
      "latitude": 51.723633,
      "longitude": 19.44632,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1672759564,
      "ems": null
    },
    {
      "latitude": 51.724731,
      "longitude": 19.445875,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1672759567,
      "ems": null
    },
    {
      "latitude": 51.725636,
      "longitude": 19.445496,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1672759570,
      "ems": null
    },
    {
      "latitude": 51.727871,
      "longitude": 19.444351,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1672759576,
      "ems": null
    },
    {
      "latitude": 51.728806,
      "longitude": 19.443501,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1672759580,
      "ems": null
    },
    {
      "latitude": 51.7295,
      "longitude": 19.442444,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "squawk": "7000",
      "timestamp": 1672759583,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 19.441273,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1672759585,
      "ems": null
    },
    {
      "latitude": 51.73027,
      "longitude": 19.439714,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1672759589,
      "ems": null
    },
    {
      "latitude": 51.730316,
      "longitude": 19.438303,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1672759591,
      "ems": null
    },
    {
      "latitude": 51.730087,
      "longitude": 19.436819,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1672759594,
      "ems": null
    },
    {
      "latitude": 51.729675,
      "longitude": 19.435112,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 247,
      "squawk": "7000",
      "timestamp": 1672759598,
      "ems": null
    },
    {
      "latitude": 51.729313,
      "longitude": 19.433517,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1672759601,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.431839,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1672759603,
      "ems": null
    },
    {
      "latitude": 51.728752,
      "longitude": 19.430161,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1672759606,
      "ems": null
    },
    {
      "latitude": 51.728474,
      "longitude": 19.428558,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672759609,
      "ems": null
    },
    {
      "latitude": 51.728382,
      "longitude": 19.427795,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1672759611,
      "ems": null
    },
    {
      "latitude": 51.727798,
      "longitude": 19.425016,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672759616,
      "ems": null
    },
    {
      "latitude": 51.727264,
      "longitude": 19.42276,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672759620,
      "ems": null
    },
    {
      "latitude": 51.726101,
      "longitude": 19.417343,
      "altitude": {
        "feet": 450,
        "meters": 137
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672759629,
      "ems": null
    },
    {
      "latitude": 51.725647,
      "longitude": 19.415291,
      "altitude": {
        "feet": 425,
        "meters": 130
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
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1672759632,
      "ems": null
    },
    {
      "latitude": 51.724869,
      "longitude": 19.411877,
      "altitude": {
        "feet": 375,
        "meters": 114
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1672759638,
      "ems": null
    },
    {
      "latitude": 51.724472,
      "longitude": 19.410019,
      "altitude": {
        "feet": 350,
        "meters": 107
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1672759641,
      "ems": null
    },
    {
      "latitude": 51.723953,
      "longitude": 19.407795,
      "altitude": {
        "feet": 325,
        "meters": 99
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1672759646,
      "ems": null
    },
    {
      "latitude": 51.722073,
      "longitude": 19.407978,
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
      "timestamp": 1672759829,
      "ems": null
    },
    {
      "latitude": 51.72179,
      "longitude": 19.408258,
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1672759836,
      "ems": null
    },
    {
      "latitude": 51.721504,
      "longitude": 19.40836,
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
      "timestamp": 1672759842,
      "ems": null
    },
    {
      "latitude": 51.72126,
      "longitude": 19.408417,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1672759847,
      "ems": null
    },
    {
      "latitude": 51.720989,
      "longitude": 19.408443,
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1672759854,
      "ems": null
    },
    {
      "latitude": 51.720749,
      "longitude": 19.408482,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1672759858,
      "ems": null
    },
    {
      "latitude": 51.720501,
      "longitude": 19.408531,
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
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1672759863,
      "ems": null
    }
  ],
};
