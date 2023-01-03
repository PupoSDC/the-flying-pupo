import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20221230EPLLEPLL",
    callsign: "BNI6L",
    name: "Third IFR flight: 2D approaches",
    description: "",
  },
  pilotLog: {
    departure: new Date(2022, 11, 30, 8, 47).getTime(),
    arrival: new Date(2022, 11, 30, 11, 2).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 120 + 15,
    picTime: 0,
    dualTime: 120 + 15,
    nightTime: 0,
    landings: {
      day: 4,
      night: 0
    },
  },
  aircraft: {
    model: {
      code: "P06T",
      text: "Tecnam P-2006T",
    },
    identification: {
      modes: "48B048",
      registration: "SP-MEL",
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
  track:[
    {
      "latitude": 51.721024,
      "longitude": 19.393988,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 251,
      "squawk": "0",
      "timestamp": 1672390893,
      "ems": null
    },
    {
      "latitude": 51.720329,
      "longitude": 19.390488,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 253,
      "squawk": "0",
      "timestamp": 1672390900,
      "ems": null
    },
    {
      "latitude": 51.719723,
      "longitude": 19.38736,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 251,
      "squawk": "0",
      "timestamp": 1672390906,
      "ems": null
    },
    {
      "latitude": 51.718918,
      "longitude": 19.38352,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 250,
      "squawk": "0",
      "timestamp": 1672390913,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 19.380255,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 247,
      "squawk": "0",
      "timestamp": 1672390920,
      "ems": null
    },
    {
      "latitude": 51.71772,
      "longitude": 19.378738,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 246,
      "squawk": "0",
      "timestamp": 1672390922,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.377211,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 245,
      "squawk": "0",
      "timestamp": 1672390925,
      "ems": null
    },
    {
      "latitude": 51.716858,
      "longitude": 19.375727,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 244,
      "squawk": "0",
      "timestamp": 1672390928,
      "ems": null
    },
    {
      "latitude": 51.716415,
      "longitude": 19.374313,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 244,
      "squawk": "0",
      "timestamp": 1672390931,
      "ems": null
    },
    {
      "latitude": 51.715858,
      "longitude": 19.372482,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 242,
      "squawk": "0",
      "timestamp": 1672390935,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 19.370956,
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
      "heading": 242,
      "squawk": "0",
      "timestamp": 1672390938,
      "ems": null
    },
    {
      "latitude": 51.714844,
      "longitude": 19.369415,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 240,
      "squawk": "0",
      "timestamp": 1672390940,
      "ems": null
    },
    {
      "latitude": 51.714249,
      "longitude": 19.367783,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672390944,
      "ems": null
    },
    {
      "latitude": 51.713253,
      "longitude": 19.364853,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672390950,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 19.362717,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672390954,
      "ems": null
    },
    {
      "latitude": 51.711437,
      "longitude": 19.35936,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672390960,
      "ems": null
    },
    {
      "latitude": 51.710632,
      "longitude": 19.356277,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672390966,
      "ems": null
    },
    {
      "latitude": 51.710365,
      "longitude": 19.35463,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672390969,
      "ems": null
    },
    {
      "latitude": 51.710274,
      "longitude": 19.353027,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 265,
      "squawk": "2651",
      "timestamp": 1672390972,
      "ems": null
    },
    {
      "latitude": 51.710274,
      "longitude": 19.351425,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 272,
      "squawk": "2651",
      "timestamp": 1672390975,
      "ems": null
    },
    {
      "latitude": 51.710358,
      "longitude": 19.349819,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 275,
      "squawk": "2651",
      "timestamp": 1672390978,
      "ems": null
    },
    {
      "latitude": 51.710449,
      "longitude": 19.348631,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 280,
      "squawk": "2651",
      "timestamp": 1672390981,
      "ems": null
    },
    {
      "latitude": 51.710678,
      "longitude": 19.34737,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 284,
      "squawk": "2651",
      "timestamp": 1672390983,
      "ems": null
    },
    {
      "latitude": 51.710907,
      "longitude": 19.346256,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 288,
      "squawk": "2651",
      "timestamp": 1672390986,
      "ems": null
    },
    {
      "latitude": 51.711342,
      "longitude": 19.344635,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 295,
      "squawk": "2651",
      "timestamp": 1672390989,
      "ems": null
    },
    {
      "latitude": 51.711823,
      "longitude": 19.34351,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 304,
      "squawk": "2651",
      "timestamp": 1672390992,
      "ems": null
    },
    {
      "latitude": 51.712505,
      "longitude": 19.342346,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 316,
      "squawk": "2651",
      "timestamp": 1672390995,
      "ems": null
    },
    {
      "latitude": 51.713425,
      "longitude": 19.341282,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 327,
      "squawk": "2651",
      "timestamp": 1672390999,
      "ems": null
    },
    {
      "latitude": 51.714249,
      "longitude": 19.340614,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 335,
      "squawk": "2651",
      "timestamp": 1672391001,
      "ems": null
    },
    {
      "latitude": 51.715302,
      "longitude": 19.340168,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 335,
      "squawk": "2651",
      "timestamp": 1672391004,
      "ems": null
    },
    {
      "latitude": 51.71637,
      "longitude": 19.339905,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 356,
      "squawk": "2651",
      "timestamp": 1672391008,
      "ems": null
    },
    {
      "latitude": 51.71759,
      "longitude": 19.340021,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 3,
      "squawk": "2651",
      "timestamp": 1672391010,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.340242,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 11,
      "squawk": "2651",
      "timestamp": 1672391013,
      "ems": null
    },
    {
      "latitude": 51.720047,
      "longitude": 19.341049,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 19,
      "squawk": "2651",
      "timestamp": 1672391016,
      "ems": null
    },
    {
      "latitude": 51.720886,
      "longitude": 19.341654,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 24,
      "squawk": "2651",
      "timestamp": 1672391019,
      "ems": null
    },
    {
      "latitude": 51.722488,
      "longitude": 19.343212,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 34,
      "squawk": "2651",
      "timestamp": 1672391023,
      "ems": null
    },
    {
      "latitude": 51.723309,
      "longitude": 19.344254,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 40,
      "squawk": "2651",
      "timestamp": 1672391025,
      "ems": null
    },
    {
      "latitude": 51.724472,
      "longitude": 19.346161,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 44,
      "squawk": "2651",
      "timestamp": 1672391028,
      "ems": null
    },
    {
      "latitude": 51.725281,
      "longitude": 19.347591,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 48,
      "squawk": "2651",
      "timestamp": 1672391031,
      "ems": null
    },
    {
      "latitude": 51.726379,
      "longitude": 19.349894,
      "altitude": {
        "feet": 2525,
        "meters": 770
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
      "heading": 53,
      "squawk": "2651",
      "timestamp": 1672391034,
      "ems": null
    },
    {
      "latitude": 51.727066,
      "longitude": 19.351675,
      "altitude": {
        "feet": 2550,
        "meters": 777
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 57,
      "squawk": "2651",
      "timestamp": 1672391037,
      "ems": null
    },
    {
      "latitude": 51.727776,
      "longitude": 19.35379,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391040,
      "ems": null
    },
    {
      "latitude": 51.728119,
      "longitude": 19.35494,
      "altitude": {
        "feet": 2625,
        "meters": 800
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672391043,
      "ems": null
    },
    {
      "latitude": 51.728989,
      "longitude": 19.35895,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672391046,
      "ems": null
    },
    {
      "latitude": 51.729313,
      "longitude": 19.36142,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 79,
      "squawk": "2651",
      "timestamp": 1672391049,
      "ems": null
    },
    {
      "latitude": 51.729401,
      "longitude": 19.362438,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672391050,
      "ems": null
    },
    {
      "latitude": 51.729538,
      "longitude": 19.364592,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 84,
      "squawk": "2651",
      "timestamp": 1672391053,
      "ems": null
    },
    {
      "latitude": 51.729675,
      "longitude": 19.367634,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 85,
      "squawk": "2651",
      "timestamp": 1672391056,
      "ems": null
    },
    {
      "latitude": 51.72987,
      "longitude": 19.370346,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 81,
      "squawk": "2651",
      "timestamp": 1672391059,
      "ems": null
    },
    {
      "latitude": 51.730198,
      "longitude": 19.373169,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 78,
      "squawk": "2651",
      "timestamp": 1672391063,
      "ems": null
    },
    {
      "latitude": 51.730545,
      "longitude": 19.375652,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672391065,
      "ems": null
    },
    {
      "latitude": 51.730911,
      "longitude": 19.37825,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672391068,
      "ems": null
    },
    {
      "latitude": 51.73122,
      "longitude": 19.380264,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 76,
      "squawk": "2651",
      "timestamp": 1672391072,
      "ems": null
    },
    {
      "latitude": 51.732105,
      "longitude": 19.386139,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 76,
      "squawk": "2651",
      "timestamp": 1672391077,
      "ems": null
    },
    {
      "latitude": 51.733128,
      "longitude": 19.392929,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672391085,
      "ems": null
    },
    {
      "latitude": 51.733658,
      "longitude": 19.396139,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672391088,
      "ems": null
    },
    {
      "latitude": 51.734619,
      "longitude": 19.401703,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672391094,
      "ems": null
    },
    {
      "latitude": 51.735641,
      "longitude": 19.406967,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672391100,
      "ems": null
    },
    {
      "latitude": 51.73613,
      "longitude": 19.409353,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672391103,
      "ems": null
    },
    {
      "latitude": 51.737183,
      "longitude": 19.414921,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672391109,
      "ems": null
    },
    {
      "latitude": 51.73811,
      "longitude": 19.42009,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672391115,
      "ems": null
    },
    {
      "latitude": 51.739136,
      "longitude": 19.425964,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672391121,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 19.430771,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672391127,
      "ems": null
    },
    {
      "latitude": 51.741257,
      "longitude": 19.436596,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672391133,
      "ems": null
    },
    {
      "latitude": 51.742493,
      "longitude": 19.442312,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672391140,
      "ems": null
    },
    {
      "latitude": 51.743637,
      "longitude": 19.447657,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672391146,
      "ems": null
    },
    {
      "latitude": 51.74472,
      "longitude": 19.452896,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672391151,
      "ems": null
    },
    {
      "latitude": 51.74588,
      "longitude": 19.45842,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672391158,
      "ems": null
    },
    {
      "latitude": 51.746956,
      "longitude": 19.463654,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672391164,
      "ems": null
    },
    {
      "latitude": 51.748074,
      "longitude": 19.468536,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672391170,
      "ems": null
    },
    {
      "latitude": 51.749313,
      "longitude": 19.47386,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672391175,
      "ems": null
    },
    {
      "latitude": 51.750633,
      "longitude": 19.479141,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672391181,
      "ems": null
    },
    {
      "latitude": 51.751923,
      "longitude": 19.48455,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672391188,
      "ems": null
    },
    {
      "latitude": 51.753334,
      "longitude": 19.490051,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672391194,
      "ems": null
    },
    {
      "latitude": 51.754032,
      "longitude": 19.492645,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672391197,
      "ems": null
    },
    {
      "latitude": 51.755428,
      "longitude": 19.497299,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672391202,
      "ems": null
    },
    {
      "latitude": 51.756916,
      "longitude": 19.502106,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672391208,
      "ems": null
    },
    {
      "latitude": 51.757736,
      "longitude": 19.504742,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672391212,
      "ems": null
    },
    {
      "latitude": 51.758377,
      "longitude": 19.506893,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672391214,
      "ems": null
    },
    {
      "latitude": 51.759151,
      "longitude": 19.509201,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391218,
      "ems": null
    },
    {
      "latitude": 51.759945,
      "longitude": 19.511566,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672391221,
      "ems": null
    },
    {
      "latitude": 51.760689,
      "longitude": 19.51355,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 59,
      "squawk": "2651",
      "timestamp": 1672391224,
      "ems": null
    },
    {
      "latitude": 51.761444,
      "longitude": 19.515505,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 58,
      "squawk": "2651",
      "timestamp": 1672391226,
      "ems": null
    },
    {
      "latitude": 51.762268,
      "longitude": 19.517658,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 57,
      "squawk": "2651",
      "timestamp": 1672391229,
      "ems": null
    },
    {
      "latitude": 51.763157,
      "longitude": 19.519806,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 56,
      "squawk": "2651",
      "timestamp": 1672391233,
      "ems": null
    },
    {
      "latitude": 51.764042,
      "longitude": 19.521866,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 54,
      "squawk": "2651",
      "timestamp": 1672391236,
      "ems": null
    },
    {
      "latitude": 51.764973,
      "longitude": 19.523849,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 52,
      "squawk": "2651",
      "timestamp": 1672391239,
      "ems": null
    },
    {
      "latitude": 51.766022,
      "longitude": 19.526045,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 52,
      "squawk": "2651",
      "timestamp": 1672391242,
      "ems": null
    },
    {
      "latitude": 51.766788,
      "longitude": 19.527893,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 55,
      "squawk": "2651",
      "timestamp": 1672391245,
      "ems": null
    },
    {
      "latitude": 51.768463,
      "longitude": 19.532852,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672391251,
      "ems": null
    },
    {
      "latitude": 51.76902,
      "longitude": 19.53537,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672391254,
      "ems": null
    },
    {
      "latitude": 51.769627,
      "longitude": 19.538193,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672391257,
      "ems": null
    },
    {
      "latitude": 51.77,
      "longitude": 19.540634,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 76,
      "squawk": "2651",
      "timestamp": 1672391260,
      "ems": null
    },
    {
      "latitude": 51.770416,
      "longitude": 19.54401,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 80,
      "squawk": "2651",
      "timestamp": 1672391263,
      "ems": null
    },
    {
      "latitude": 51.770599,
      "longitude": 19.546906,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672391266,
      "ems": null
    },
    {
      "latitude": 51.770782,
      "longitude": 19.549725,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 85,
      "squawk": "2651",
      "timestamp": 1672391269,
      "ems": null
    },
    {
      "latitude": 51.770882,
      "longitude": 19.552841,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 86,
      "squawk": "2651",
      "timestamp": 1672391272,
      "ems": null
    },
    {
      "latitude": 51.770977,
      "longitude": 19.555893,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 87,
      "squawk": "2651",
      "timestamp": 1672391275,
      "ems": null
    },
    {
      "latitude": 51.771103,
      "longitude": 19.559004,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 86,
      "squawk": "2651",
      "timestamp": 1672391278,
      "ems": null
    },
    {
      "latitude": 51.771194,
      "longitude": 19.561899,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 86,
      "squawk": "2651",
      "timestamp": 1672391281,
      "ems": null
    },
    {
      "latitude": 51.771347,
      "longitude": 19.565048,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 85,
      "squawk": "2651",
      "timestamp": 1672391284,
      "ems": null
    },
    {
      "latitude": 51.771534,
      "longitude": 19.568329,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 85,
      "squawk": "2651",
      "timestamp": 1672391287,
      "ems": null
    },
    {
      "latitude": 51.771652,
      "longitude": 19.571253,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 85,
      "squawk": "2651",
      "timestamp": 1672391290,
      "ems": null
    },
    {
      "latitude": 51.772064,
      "longitude": 19.577562,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672391296,
      "ems": null
    },
    {
      "latitude": 51.772514,
      "longitude": 19.583511,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672391302,
      "ems": null
    },
    {
      "latitude": 51.772747,
      "longitude": 19.586563,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672391305,
      "ems": null
    },
    {
      "latitude": 51.773254,
      "longitude": 19.592409,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672391311,
      "ems": null
    },
    {
      "latitude": 51.773849,
      "longitude": 19.598644,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 80,
      "squawk": "2651",
      "timestamp": 1672391317,
      "ems": null
    },
    {
      "latitude": 51.77417,
      "longitude": 19.601614,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 79,
      "squawk": "2651",
      "timestamp": 1672391320,
      "ems": null
    },
    {
      "latitude": 51.774902,
      "longitude": 19.607849,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 79,
      "squawk": "2651",
      "timestamp": 1672391326,
      "ems": null
    },
    {
      "latitude": 51.775589,
      "longitude": 19.613861,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 79,
      "squawk": "2651",
      "timestamp": 1672391332,
      "ems": null
    },
    {
      "latitude": 51.776047,
      "longitude": 19.619875,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 84,
      "squawk": "2651",
      "timestamp": 1672391338,
      "ems": null
    },
    {
      "latitude": 51.776562,
      "longitude": 19.626846,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672391347,
      "ems": null
    },
    {
      "latitude": 51.777634,
      "longitude": 19.637299,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 78,
      "squawk": "2651",
      "timestamp": 1672391355,
      "ems": null
    },
    {
      "latitude": 51.778336,
      "longitude": 19.641254,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672391359,
      "ems": null
    },
    {
      "latitude": 51.778473,
      "longitude": 19.641848,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672391359,
      "ems": null
    },
    {
      "latitude": 51.779404,
      "longitude": 19.645538,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672391363,
      "ems": null
    },
    {
      "latitude": 51.780075,
      "longitude": 19.648083,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672391367,
      "ems": null
    },
    {
      "latitude": 51.781403,
      "longitude": 19.652481,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672391371,
      "ems": null
    },
    {
      "latitude": 51.782227,
      "longitude": 19.655283,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672391374,
      "ems": null
    },
    {
      "latitude": 51.783451,
      "longitude": 19.659271,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391378,
      "ems": null
    },
    {
      "latitude": 51.783733,
      "longitude": 19.66011,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391379,
      "ems": null
    },
    {
      "latitude": 51.784569,
      "longitude": 19.662704,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672391382,
      "ems": null
    },
    {
      "latitude": 51.785294,
      "longitude": 19.665081,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391385,
      "ems": null
    },
    {
      "latitude": 51.786072,
      "longitude": 19.667458,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391388,
      "ems": null
    },
    {
      "latitude": 51.787083,
      "longitude": 19.670715,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672391391,
      "ems": null
    },
    {
      "latitude": 51.788807,
      "longitude": 19.675903,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672391397,
      "ems": null
    },
    {
      "latitude": 51.790527,
      "longitude": 19.680939,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672391403,
      "ems": null
    },
    {
      "latitude": 51.792252,
      "longitude": 19.68609,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391409,
      "ems": null
    },
    {
      "latitude": 51.794205,
      "longitude": 19.692078,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391416,
      "ems": null
    },
    {
      "latitude": 51.795914,
      "longitude": 19.697372,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672391422,
      "ems": null
    },
    {
      "latitude": 51.797092,
      "longitude": 19.70108,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672391427,
      "ems": null
    },
    {
      "latitude": 51.799026,
      "longitude": 19.707172,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672391434,
      "ems": null
    },
    {
      "latitude": 51.800678,
      "longitude": 19.712219,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672391440,
      "ems": null
    },
    {
      "latitude": 51.802494,
      "longitude": 19.717178,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 58,
      "squawk": "2651",
      "timestamp": 1672391446,
      "ems": null
    },
    {
      "latitude": 51.803471,
      "longitude": 19.719543,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 53,
      "squawk": "2651",
      "timestamp": 1672391449,
      "ems": null
    },
    {
      "latitude": 51.804749,
      "longitude": 19.721796,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 47,
      "squawk": "2651",
      "timestamp": 1672391452,
      "ems": null
    },
    {
      "latitude": 51.805843,
      "longitude": 19.723358,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 41,
      "squawk": "2651",
      "timestamp": 1672391455,
      "ems": null
    },
    {
      "latitude": 51.807129,
      "longitude": 19.724987,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 36,
      "squawk": "2651",
      "timestamp": 1672391458,
      "ems": null
    },
    {
      "latitude": 51.808456,
      "longitude": 19.72625,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 29,
      "squawk": "2651",
      "timestamp": 1672391461,
      "ems": null
    },
    {
      "latitude": 51.809784,
      "longitude": 19.727215,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 23,
      "squawk": "2651",
      "timestamp": 1672391464,
      "ems": null
    },
    {
      "latitude": 51.811199,
      "longitude": 19.727936,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 13,
      "squawk": "2651",
      "timestamp": 1672391467,
      "ems": null
    },
    {
      "latitude": 51.812302,
      "longitude": 19.72818,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 6,
      "squawk": "2651",
      "timestamp": 1672391470,
      "ems": null
    },
    {
      "latitude": 51.813538,
      "longitude": 19.728252,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 359,
      "squawk": "2651",
      "timestamp": 1672391473,
      "ems": null
    },
    {
      "latitude": 51.814735,
      "longitude": 19.728012,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672391476,
      "ems": null
    },
    {
      "latitude": 51.815945,
      "longitude": 19.727478,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "squawk": "2651",
      "timestamp": 1672391479,
      "ems": null
    },
    {
      "latitude": 51.816738,
      "longitude": 19.726868,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 332,
      "squawk": "2651",
      "timestamp": 1672391482,
      "ems": null
    },
    {
      "latitude": 51.817623,
      "longitude": 19.7258,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 320,
      "squawk": "2651",
      "timestamp": 1672391485,
      "ems": null
    },
    {
      "latitude": 51.818272,
      "longitude": 19.724655,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 310,
      "squawk": "2651",
      "timestamp": 1672391488,
      "ems": null
    },
    {
      "latitude": 51.818802,
      "longitude": 19.72328,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 298,
      "squawk": "2651",
      "timestamp": 1672391491,
      "ems": null
    },
    {
      "latitude": 51.819065,
      "longitude": 19.722061,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 288,
      "squawk": "2651",
      "timestamp": 1672391493,
      "ems": null
    },
    {
      "latitude": 51.819206,
      "longitude": 19.720078,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 273,
      "squawk": "2651",
      "timestamp": 1672391497,
      "ems": null
    },
    {
      "latitude": 51.819168,
      "longitude": 19.718975,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 263,
      "squawk": "2651",
      "timestamp": 1672391499,
      "ems": null
    },
    {
      "latitude": 51.818878,
      "longitude": 19.717178,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672391503,
      "ems": null
    },
    {
      "latitude": 51.818665,
      "longitude": 19.71645,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672391504,
      "ems": null
    },
    {
      "latitude": 51.817856,
      "longitude": 19.714508,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 232,
      "squawk": "2651",
      "timestamp": 1672391508,
      "ems": null
    },
    {
      "latitude": 51.816971,
      "longitude": 19.71311,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 221,
      "squawk": "2651",
      "timestamp": 1672391512,
      "ems": null
    },
    {
      "latitude": 51.815666,
      "longitude": 19.711685,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 209,
      "squawk": "2651",
      "timestamp": 1672391516,
      "ems": null
    },
    {
      "latitude": 51.814877,
      "longitude": 19.711075,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 209,
      "squawk": "2651",
      "timestamp": 1672391518,
      "ems": null
    },
    {
      "latitude": 51.813583,
      "longitude": 19.710289,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 199,
      "squawk": "2651",
      "timestamp": 1672391521,
      "ems": null
    },
    {
      "latitude": 51.811756,
      "longitude": 19.709473,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 194,
      "squawk": "2651",
      "timestamp": 1672391525,
      "ems": null
    },
    {
      "latitude": 51.810406,
      "longitude": 19.708939,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 192,
      "squawk": "2651",
      "timestamp": 1672391528,
      "ems": null
    },
    {
      "latitude": 51.809189,
      "longitude": 19.708508,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "squawk": "2651",
      "timestamp": 1672391530,
      "ems": null
    },
    {
      "latitude": 51.808044,
      "longitude": 19.708136,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 191,
      "squawk": "2651",
      "timestamp": 1672391533,
      "ems": null
    },
    {
      "latitude": 51.805984,
      "longitude": 19.707489,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 190,
      "squawk": "2651",
      "timestamp": 1672391537,
      "ems": null
    },
    {
      "latitude": 51.804447,
      "longitude": 19.706879,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 194,
      "squawk": "2651",
      "timestamp": 1672391540,
      "ems": null
    },
    {
      "latitude": 51.803055,
      "longitude": 19.706207,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 198,
      "squawk": "2651",
      "timestamp": 1672391543,
      "ems": null
    },
    {
      "latitude": 51.801701,
      "longitude": 19.705276,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 204,
      "squawk": "2651",
      "timestamp": 1672391546,
      "ems": null
    },
    {
      "latitude": 51.799419,
      "longitude": 19.702911,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 216,
      "squawk": "2651",
      "timestamp": 1672391552,
      "ems": null
    },
    {
      "latitude": 51.798431,
      "longitude": 19.701605,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 221,
      "squawk": "2651",
      "timestamp": 1672391555,
      "ems": null
    },
    {
      "latitude": 51.797649,
      "longitude": 19.700394,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 223,
      "squawk": "2651",
      "timestamp": 1672391557,
      "ems": null
    },
    {
      "latitude": 51.796646,
      "longitude": 19.698412,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 233,
      "squawk": "2651",
      "timestamp": 1672391561,
      "ems": null
    },
    {
      "latitude": 51.796417,
      "longitude": 19.697819,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 236,
      "squawk": "2651",
      "timestamp": 1672391562,
      "ems": null
    },
    {
      "latitude": 51.795696,
      "longitude": 19.695511,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "squawk": "2651",
      "timestamp": 1672391566,
      "ems": null
    },
    {
      "latitude": 51.795231,
      "longitude": 19.693756,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "squawk": "2651",
      "timestamp": 1672391569,
      "ems": null
    },
    {
      "latitude": 51.794769,
      "longitude": 19.691954,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672391572,
      "ems": null
    },
    {
      "latitude": 51.7943,
      "longitude": 19.690323,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672391575,
      "ems": null
    },
    {
      "latitude": 51.793808,
      "longitude": 19.68854,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391578,
      "ems": null
    },
    {
      "latitude": 51.79332,
      "longitude": 19.686813,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672391582,
      "ems": null
    },
    {
      "latitude": 51.79303,
      "longitude": 19.685942,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "2651",
      "timestamp": 1672391583,
      "ems": null
    },
    {
      "latitude": 51.792297,
      "longitude": 19.683609,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672391587,
      "ems": null
    },
    {
      "latitude": 51.791748,
      "longitude": 19.681858,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672391590,
      "ems": null
    },
    {
      "latitude": 51.791599,
      "longitude": 19.681396,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391593,
      "ems": null
    },
    {
      "latitude": 51.790283,
      "longitude": 19.676886,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672391599,
      "ems": null
    },
    {
      "latitude": 51.789318,
      "longitude": 19.673538,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672391606,
      "ems": null
    },
    {
      "latitude": 51.788544,
      "longitude": 19.670502,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672391611,
      "ems": null
    },
    {
      "latitude": 51.787689,
      "longitude": 19.667282,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "squawk": "2651",
      "timestamp": 1672391617,
      "ems": null
    },
    {
      "latitude": 51.786526,
      "longitude": 19.663086,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672391625,
      "ems": null
    },
    {
      "latitude": 51.785934,
      "longitude": 19.661148,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "squawk": "2651",
      "timestamp": 1672391630,
      "ems": null
    },
    {
      "latitude": 51.784523,
      "longitude": 19.656754,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391636,
      "ems": null
    },
    {
      "latitude": 51.783451,
      "longitude": 19.653244,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391643,
      "ems": null
    },
    {
      "latitude": 51.78241,
      "longitude": 19.650013,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "squawk": "2651",
      "timestamp": 1672391649,
      "ems": null
    },
    {
      "latitude": 51.781952,
      "longitude": 19.64838,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672391652,
      "ems": null
    },
    {
      "latitude": 51.781586,
      "longitude": 19.646524,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672391655,
      "ems": null
    },
    {
      "latitude": 51.781265,
      "longitude": 19.645081,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672391657,
      "ems": null
    },
    {
      "latitude": 51.780899,
      "longitude": 19.643257,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672391660,
      "ems": null
    },
    {
      "latitude": 51.780472,
      "longitude": 19.641342,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672391664,
      "ems": null
    },
    {
      "latitude": 51.779587,
      "longitude": 19.637756,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672391670,
      "ems": null
    },
    {
      "latitude": 51.779449,
      "longitude": 19.637299,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672391671,
      "ems": null
    },
    {
      "latitude": 51.778656,
      "longitude": 19.634323,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672391676,
      "ems": null
    },
    {
      "latitude": 51.777725,
      "longitude": 19.630966,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391682,
      "ems": null
    },
    {
      "latitude": 51.777191,
      "longitude": 19.62908,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672391685,
      "ems": null
    },
    {
      "latitude": 51.776825,
      "longitude": 19.627668,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391688,
      "ems": null
    },
    {
      "latitude": 51.776562,
      "longitude": 19.626846,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391691,
      "ems": null
    },
    {
      "latitude": 51.775772,
      "longitude": 19.624176,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672391694,
      "ems": null
    },
    {
      "latitude": 51.774765,
      "longitude": 19.62084,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672391700,
      "ems": null
    },
    {
      "latitude": 51.774281,
      "longitude": 19.619446,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672391702,
      "ems": null
    },
    {
      "latitude": 51.773628,
      "longitude": 19.617462,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672391706,
      "ems": null
    },
    {
      "latitude": 51.773117,
      "longitude": 19.61594,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672391709,
      "ems": null
    },
    {
      "latitude": 51.77256,
      "longitude": 19.614258,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672391712,
      "ems": null
    },
    {
      "latitude": 51.77158,
      "longitude": 19.611206,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391717,
      "ems": null
    },
    {
      "latitude": 51.77037,
      "longitude": 19.60733,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672391724,
      "ems": null
    },
    {
      "latitude": 51.769485,
      "longitude": 19.604187,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391730,
      "ems": null
    },
    {
      "latitude": 51.768539,
      "longitude": 19.600872,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391736,
      "ems": null
    },
    {
      "latitude": 51.767624,
      "longitude": 19.597679,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391742,
      "ems": null
    },
    {
      "latitude": 51.766647,
      "longitude": 19.594498,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391748,
      "ems": null
    },
    {
      "latitude": 51.765671,
      "longitude": 19.591064,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391754,
      "ems": null
    },
    {
      "latitude": 51.76474,
      "longitude": 19.58786,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672391760,
      "ems": null
    },
    {
      "latitude": 51.763809,
      "longitude": 19.584808,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391766,
      "ems": null
    },
    {
      "latitude": 51.762955,
      "longitude": 19.582016,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391772,
      "ems": null
    },
    {
      "latitude": 51.761902,
      "longitude": 19.578676,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672391778,
      "ems": null
    },
    {
      "latitude": 51.760921,
      "longitude": 19.575653,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391784,
      "ems": null
    },
    {
      "latitude": 51.759979,
      "longitude": 19.572515,
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391791,
      "ems": null
    },
    {
      "latitude": 51.75906,
      "longitude": 19.569702,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672391796,
      "ems": null
    },
    {
      "latitude": 51.758129,
      "longitude": 19.566803,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391802,
      "ems": null
    },
    {
      "latitude": 51.757187,
      "longitude": 19.563681,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391809,
      "ems": null
    },
    {
      "latitude": 51.756271,
      "longitude": 19.560564,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672391814,
      "ems": null
    },
    {
      "latitude": 51.755539,
      "longitude": 19.557743,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672391820,
      "ems": null
    },
    {
      "latitude": 51.755196,
      "longitude": 19.556351,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672391823,
      "ems": null
    },
    {
      "latitude": 51.754868,
      "longitude": 19.554825,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672391826,
      "ems": null
    },
    {
      "latitude": 51.754543,
      "longitude": 19.553223,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672391829,
      "ems": null
    },
    {
      "latitude": 51.754211,
      "longitude": 19.551804,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672391832,
      "ems": null
    },
    {
      "latitude": 51.753845,
      "longitude": 19.55032,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672391835,
      "ems": null
    },
    {
      "latitude": 51.753056,
      "longitude": 19.547348,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672391841,
      "ems": null
    },
    {
      "latitude": 51.752216,
      "longitude": 19.544296,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "squawk": "2651",
      "timestamp": 1672391848,
      "ems": null
    },
    {
      "latitude": 51.751842,
      "longitude": 19.543076,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672391850,
      "ems": null
    },
    {
      "latitude": 51.751419,
      "longitude": 19.541708,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391853,
      "ems": null
    },
    {
      "latitude": 51.750957,
      "longitude": 19.540329,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672391856,
      "ems": null
    },
    {
      "latitude": 51.750549,
      "longitude": 19.53911,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672391859,
      "ems": null
    },
    {
      "latitude": 51.750046,
      "longitude": 19.537626,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672391863,
      "ems": null
    },
    {
      "latitude": 51.749657,
      "longitude": 19.536362,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672391866,
      "ems": null
    },
    {
      "latitude": 51.748909,
      "longitude": 19.533539,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672391872,
      "ems": null
    },
    {
      "latitude": 51.748672,
      "longitude": 19.532133,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672391875,
      "ems": null
    },
    {
      "latitude": 51.748489,
      "longitude": 19.530722,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672391878,
      "ems": null
    },
    {
      "latitude": 51.74826,
      "longitude": 19.529343,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672391881,
      "ems": null
    },
    {
      "latitude": 51.748074,
      "longitude": 19.528046,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672391883,
      "ems": null
    },
    {
      "latitude": 51.74794,
      "longitude": 19.526491,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672391887,
      "ems": null
    },
    {
      "latitude": 51.747803,
      "longitude": 19.525229,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672391890,
      "ems": null
    },
    {
      "latitude": 51.747665,
      "longitude": 19.523745,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 261,
      "squawk": "2651",
      "timestamp": 1672391893,
      "ems": null
    },
    {
      "latitude": 51.747562,
      "longitude": 19.522629,
      "altitude": {
        "feet": 2125,
        "meters": 648
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 262,
      "squawk": "2651",
      "timestamp": 1672391895,
      "ems": null
    },
    {
      "latitude": 51.747467,
      "longitude": 19.521408,
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
      "heading": 262,
      "squawk": "2651",
      "timestamp": 1672391899,
      "ems": null
    },
    {
      "latitude": 51.747375,
      "longitude": 19.520264,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 264,
      "squawk": "2651",
      "timestamp": 1672391902,
      "ems": null
    },
    {
      "latitude": 51.747299,
      "longitude": 19.519217,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 261,
      "squawk": "2651",
      "timestamp": 1672391905,
      "ems": null
    },
    {
      "latitude": 51.746979,
      "longitude": 19.516766,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672391911,
      "ems": null
    },
    {
      "latitude": 51.74675,
      "longitude": 19.515654,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672391914,
      "ems": null
    },
    {
      "latitude": 51.746429,
      "longitude": 19.514391,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672391917,
      "ems": null
    },
    {
      "latitude": 51.746162,
      "longitude": 19.513168,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672391920,
      "ems": null
    },
    {
      "latitude": 51.745884,
      "longitude": 19.512177,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672391923,
      "ems": null
    },
    {
      "latitude": 51.74556,
      "longitude": 19.510828,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672391926,
      "ems": null
    },
    {
      "latitude": 51.745331,
      "longitude": 19.50964,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672391929,
      "ems": null
    },
    {
      "latitude": 51.745094,
      "longitude": 19.508438,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672391932,
      "ems": null
    },
    {
      "latitude": 51.744862,
      "longitude": 19.507294,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 103.7,
        "kts": 56,
        "mph": 64.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672391935,
      "ems": null
    },
    {
      "latitude": 51.744583,
      "longitude": 19.505997,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "squawk": "2651",
      "timestamp": 1672391938,
      "ems": null
    },
    {
      "latitude": 51.744141,
      "longitude": 19.503777,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672391944,
      "ems": null
    },
    {
      "latitude": 51.743603,
      "longitude": 19.501343,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672391950,
      "ems": null
    },
    {
      "latitude": 51.743088,
      "longitude": 19.499025,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672391956,
      "ems": null
    },
    {
      "latitude": 51.74263,
      "longitude": 19.496502,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672391962,
      "ems": null
    },
    {
      "latitude": 51.742218,
      "longitude": 19.493977,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672391968,
      "ems": null
    },
    {
      "latitude": 51.74176,
      "longitude": 19.491751,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672391974,
      "ems": null
    },
    {
      "latitude": 51.741257,
      "longitude": 19.489079,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672391980,
      "ems": null
    },
    {
      "latitude": 51.740799,
      "longitude": 19.486776,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672391986,
      "ems": null
    },
    {
      "latitude": 51.740391,
      "longitude": 19.484253,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672391992,
      "ems": null
    },
    {
      "latitude": 51.739925,
      "longitude": 19.481659,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672391998,
      "ems": null
    },
    {
      "latitude": 51.739368,
      "longitude": 19.479065,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672392004,
      "ems": null
    },
    {
      "latitude": 51.738785,
      "longitude": 19.476606,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672392010,
      "ems": null
    },
    {
      "latitude": 51.738556,
      "longitude": 19.475567,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672392013,
      "ems": null
    },
    {
      "latitude": 51.738144,
      "longitude": 19.47386,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672392016,
      "ems": null
    },
    {
      "latitude": 51.737507,
      "longitude": 19.471283,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "squawk": "2651",
      "timestamp": 1672392022,
      "ems": null
    },
    {
      "latitude": 51.736855,
      "longitude": 19.468689,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672392028,
      "ems": null
    },
    {
      "latitude": 51.736343,
      "longitude": 19.466019,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672392034,
      "ems": null
    },
    {
      "latitude": 51.735809,
      "longitude": 19.463245,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672392040,
      "ems": null
    },
    {
      "latitude": 51.73526,
      "longitude": 19.460648,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672392046,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 19.457752,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672392052,
      "ems": null
    },
    {
      "latitude": 51.734013,
      "longitude": 19.455032,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672392058,
      "ems": null
    },
    {
      "latitude": 51.733337,
      "longitude": 19.452185,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672392064,
      "ems": null
    },
    {
      "latitude": 51.732662,
      "longitude": 19.44931,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672392070,
      "ems": null
    },
    {
      "latitude": 51.732285,
      "longitude": 19.44721,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672392076,
      "ems": null
    },
    {
      "latitude": 51.731781,
      "longitude": 19.444538,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672392082,
      "ems": null
    },
    {
      "latitude": 51.730896,
      "longitude": 19.440384,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672392089,
      "ems": null
    },
    {
      "latitude": 51.730453,
      "longitude": 19.438007,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672392093,
      "ems": null
    },
    {
      "latitude": 51.72995,
      "longitude": 19.435261,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672392099,
      "ems": null
    },
    {
      "latitude": 51.729309,
      "longitude": 19.431919,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672392106,
      "ems": null
    },
    {
      "latitude": 51.728615,
      "longitude": 19.428482,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672392113,
      "ems": null
    },
    {
      "latitude": 51.728008,
      "longitude": 19.425201,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672392120,
      "ems": null
    },
    {
      "latitude": 51.727402,
      "longitude": 19.42215,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672392126,
      "ems": null
    },
    {
      "latitude": 51.726845,
      "longitude": 19.419785,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672392130,
      "ems": null
    },
    {
      "latitude": 51.725967,
      "longitude": 19.416628,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672392137,
      "ems": null
    },
    {
      "latitude": 51.725098,
      "longitude": 19.412991,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672392145,
      "ems": null
    },
    {
      "latitude": 51.724422,
      "longitude": 19.409866,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672392151,
      "ems": null
    },
    {
      "latitude": 51.718964,
      "longitude": 19.384039,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672392207,
      "ems": null
    },
    {
      "latitude": 51.718323,
      "longitude": 19.380848,
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
      "squawk": "2651",
      "timestamp": 1672392213,
      "ems": null
    },
    {
      "latitude": 51.717545,
      "longitude": 19.377211,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672392221,
      "ems": null
    },
    {
      "latitude": 51.716858,
      "longitude": 19.37439,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672392226,
      "ems": null
    },
    {
      "latitude": 51.716446,
      "longitude": 19.372757,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672392230,
      "ems": null
    },
    {
      "latitude": 51.716034,
      "longitude": 19.371197,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672392233,
      "ems": null
    },
    {
      "latitude": 51.71558,
      "longitude": 19.369507,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672392236,
      "ems": null
    },
    {
      "latitude": 51.71521,
      "longitude": 19.368229,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672392239,
      "ems": null
    },
    {
      "latitude": 51.714706,
      "longitude": 19.366373,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672392242,
      "ems": null
    },
    {
      "latitude": 51.714275,
      "longitude": 19.3647,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672392245,
      "ems": null
    },
    {
      "latitude": 51.713379,
      "longitude": 19.361399,
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672392251,
      "ems": null
    },
    {
      "latitude": 51.712555,
      "longitude": 19.358139,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672392257,
      "ems": null
    },
    {
      "latitude": 51.711716,
      "longitude": 19.354858,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672392263,
      "ems": null
    },
    {
      "latitude": 51.710953,
      "longitude": 19.351526,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672392269,
      "ems": null
    },
    {
      "latitude": 51.710587,
      "longitude": 19.349894,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672392272,
      "ems": null
    },
    {
      "latitude": 51.710266,
      "longitude": 19.348186,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672392275,
      "ems": null
    },
    {
      "latitude": 51.709991,
      "longitude": 19.346626,
      "altitude": {
        "feet": 1550,
        "meters": 472
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672392278,
      "ems": null
    },
    {
      "latitude": 51.709717,
      "longitude": 19.34477,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672392281,
      "ems": null
    },
    {
      "latitude": 51.70948,
      "longitude": 19.343185,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672392284,
      "ems": null
    },
    {
      "latitude": 51.709248,
      "longitude": 19.341278,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 261,
      "squawk": "2651",
      "timestamp": 1672392288,
      "ems": null
    },
    {
      "latitude": 51.709156,
      "longitude": 19.339523,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 266,
      "squawk": "2651",
      "timestamp": 1672392291,
      "ems": null
    },
    {
      "latitude": 51.709167,
      "longitude": 19.337719,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 272,
      "squawk": "2651",
      "timestamp": 1672392294,
      "ems": null
    },
    {
      "latitude": 51.709202,
      "longitude": 19.337234,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 272,
      "squawk": "2651",
      "timestamp": 1672392295,
      "ems": null
    },
    {
      "latitude": 51.709293,
      "longitude": 19.33609,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 278,
      "squawk": "2651",
      "timestamp": 1672392297,
      "ems": null
    },
    {
      "latitude": 51.709625,
      "longitude": 19.333784,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 285,
      "squawk": "2651",
      "timestamp": 1672392301,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 19.3323,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 289,
      "squawk": "2651",
      "timestamp": 1672392303,
      "ems": null
    },
    {
      "latitude": 51.710312,
      "longitude": 19.330816,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 133.3,
        "kts": 72,
        "mph": 82.9
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 294,
      "squawk": "2651",
      "timestamp": 1672392307,
      "ems": null
    },
    {
      "latitude": 51.710785,
      "longitude": 19.329453,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 298,
      "squawk": "2651",
      "timestamp": 1672392309,
      "ems": null
    },
    {
      "latitude": 51.711205,
      "longitude": 19.328308,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 301,
      "squawk": "2651",
      "timestamp": 1672392313,
      "ems": null
    },
    {
      "latitude": 51.711761,
      "longitude": 19.326935,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 304,
      "squawk": "2651",
      "timestamp": 1672392315,
      "ems": null
    },
    {
      "latitude": 51.712601,
      "longitude": 19.325485,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 313,
      "squawk": "2651",
      "timestamp": 1672392319,
      "ems": null
    },
    {
      "latitude": 51.713345,
      "longitude": 19.324493,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 320,
      "squawk": "2651",
      "timestamp": 1672392322,
      "ems": null
    },
    {
      "latitude": 51.714157,
      "longitude": 19.323542,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 326,
      "squawk": "2651",
      "timestamp": 1672392325,
      "ems": null
    },
    {
      "latitude": 51.714973,
      "longitude": 19.322891,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 331,
      "squawk": "2651",
      "timestamp": 1672392327,
      "ems": null
    },
    {
      "latitude": 51.716278,
      "longitude": 19.321976,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 340,
      "squawk": "2651",
      "timestamp": 1672392331,
      "ems": null
    },
    {
      "latitude": 51.717255,
      "longitude": 19.321594,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 346,
      "squawk": "2651",
      "timestamp": 1672392333,
      "ems": null
    },
    {
      "latitude": 51.718552,
      "longitude": 19.321165,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392337,
      "ems": null
    },
    {
      "latitude": 51.719559,
      "longitude": 19.320868,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392339,
      "ems": null
    },
    {
      "latitude": 51.720932,
      "longitude": 19.320526,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392343,
      "ems": null
    },
    {
      "latitude": 51.722004,
      "longitude": 19.320145,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392346,
      "ems": null
    },
    {
      "latitude": 51.723167,
      "longitude": 19.319839,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672392349,
      "ems": null
    },
    {
      "latitude": 51.724274,
      "longitude": 19.319681,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 353,
      "squawk": "2651",
      "timestamp": 1672392352,
      "ems": null
    },
    {
      "latitude": 51.72554,
      "longitude": 19.319458,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 354,
      "squawk": "2651",
      "timestamp": 1672392355,
      "ems": null
    },
    {
      "latitude": 51.726791,
      "longitude": 19.319235,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 354,
      "squawk": "2651",
      "timestamp": 1672392358,
      "ems": null
    },
    {
      "latitude": 51.727821,
      "longitude": 19.319153,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 354,
      "squawk": "2651",
      "timestamp": 1672392361,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.318939,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 354,
      "squawk": "2651",
      "timestamp": 1672392363,
      "ems": null
    },
    {
      "latitude": 51.731594,
      "longitude": 19.318314,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392370,
      "ems": null
    },
    {
      "latitude": 51.73378,
      "longitude": 19.317703,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392375,
      "ems": null
    },
    {
      "latitude": 51.736313,
      "longitude": 19.317083,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 352,
      "squawk": "2651",
      "timestamp": 1672392382,
      "ems": null
    },
    {
      "latitude": 51.738621,
      "longitude": 19.316559,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392388,
      "ems": null
    },
    {
      "latitude": 51.739838,
      "longitude": 19.316193,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392391,
      "ems": null
    },
    {
      "latitude": 51.740891,
      "longitude": 19.315895,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392394,
      "ems": null
    },
    {
      "latitude": 51.743179,
      "longitude": 19.315153,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672392400,
      "ems": null
    },
    {
      "latitude": 51.745377,
      "longitude": 19.314484,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392406,
      "ems": null
    },
    {
      "latitude": 51.7477,
      "longitude": 19.313889,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392412,
      "ems": null
    },
    {
      "latitude": 51.749844,
      "longitude": 19.313202,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672392417,
      "ems": null
    },
    {
      "latitude": 51.752121,
      "longitude": 19.312515,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672392424,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 19.311811,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392430,
      "ems": null
    },
    {
      "latitude": 51.756821,
      "longitude": 19.311069,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672392436,
      "ems": null
    },
    {
      "latitude": 51.759151,
      "longitude": 19.310226,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 346,
      "squawk": "2651",
      "timestamp": 1672392442,
      "ems": null
    },
    {
      "latitude": 51.761353,
      "longitude": 19.309362,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 344,
      "squawk": "2651",
      "timestamp": 1672392448,
      "ems": null
    },
    {
      "latitude": 51.764648,
      "longitude": 19.308174,
      "altitude": {
        "feet": 3650,
        "meters": 1113
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
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392456,
      "ems": null
    },
    {
      "latitude": 51.767212,
      "longitude": 19.307507,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392462,
      "ems": null
    },
    {
      "latitude": 51.769547,
      "longitude": 19.306839,
      "altitude": {
        "feet": 3775,
        "meters": 1151
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
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392468,
      "ems": null
    },
    {
      "latitude": 51.772064,
      "longitude": 19.306023,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672392474,
      "ems": null
    },
    {
      "latitude": 51.77449,
      "longitude": 19.305279,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392480,
      "ems": null
    },
    {
      "latitude": 51.776917,
      "longitude": 19.304611,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392486,
      "ems": null
    },
    {
      "latitude": 51.780075,
      "longitude": 19.303646,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392494,
      "ems": null
    },
    {
      "latitude": 51.782429,
      "longitude": 19.302902,
      "altitude": {
        "feet": 4125,
        "meters": 1257
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
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672392500,
      "ems": null
    },
    {
      "latitude": 51.784927,
      "longitude": 19.302162,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672392506,
      "ems": null
    },
    {
      "latitude": 51.787399,
      "longitude": 19.301569,
      "altitude": {
        "feet": 4250,
        "meters": 1295
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392512,
      "ems": null
    },
    {
      "latitude": 51.790009,
      "longitude": 19.300825,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672392518,
      "ems": null
    },
    {
      "latitude": 51.79248,
      "longitude": 19.300009,
      "altitude": {
        "feet": 4350,
        "meters": 1326
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
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672392524,
      "ems": null
    },
    {
      "latitude": 51.794857,
      "longitude": 19.299088,
      "altitude": {
        "feet": 4425,
        "meters": 1349
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
      "heading": 346,
      "squawk": "2651",
      "timestamp": 1672392529,
      "ems": null
    },
    {
      "latitude": 51.797241,
      "longitude": 19.298079,
      "altitude": {
        "feet": 4450,
        "meters": 1356
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
      "heading": 344,
      "squawk": "2651",
      "timestamp": 1672392535,
      "ems": null
    },
    {
      "latitude": 51.798752,
      "longitude": 19.297411,
      "altitude": {
        "feet": 4475,
        "meters": 1364
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 343,
      "squawk": "2651",
      "timestamp": 1672392539,
      "ems": null
    },
    {
      "latitude": 51.800026,
      "longitude": 19.296799,
      "altitude": {
        "feet": 4525,
        "meters": 1379
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 345,
      "squawk": "2651",
      "timestamp": 1672392542,
      "ems": null
    },
    {
      "latitude": 51.801189,
      "longitude": 19.296341,
      "altitude": {
        "feet": 4550,
        "meters": 1387
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 345,
      "squawk": "2651",
      "timestamp": 1672392545,
      "ems": null
    },
    {
      "latitude": 51.803703,
      "longitude": 19.295425,
      "altitude": {
        "feet": 4575,
        "meters": 1394
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
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672392551,
      "ems": null
    },
    {
      "latitude": 51.806541,
      "longitude": 19.294586,
      "altitude": {
        "feet": 4625,
        "meters": 1410
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
      "heading": 350,
      "squawk": "2651",
      "timestamp": 1672392557,
      "ems": null
    },
    {
      "latitude": 51.807938,
      "longitude": 19.294205,
      "altitude": {
        "feet": 4650,
        "meters": 1417
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
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672392560,
      "ems": null
    },
    {
      "latitude": 51.809326,
      "longitude": 19.293922,
      "altitude": {
        "feet": 4700,
        "meters": 1433
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672392563,
      "ems": null
    },
    {
      "latitude": 51.809895,
      "longitude": 19.293747,
      "altitude": {
        "feet": 4725,
        "meters": 1440
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672392564,
      "ems": null
    },
    {
      "latitude": 51.811523,
      "longitude": 19.293402,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 352,
      "squawk": "2651",
      "timestamp": 1672392568,
      "ems": null
    },
    {
      "latitude": 51.812576,
      "longitude": 19.29318,
      "altitude": {
        "feet": 4825,
        "meters": 1471
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 352,
      "squawk": "2651",
      "timestamp": 1672392570,
      "ems": null
    },
    {
      "latitude": 51.81395,
      "longitude": 19.292883,
      "altitude": {
        "feet": 4875,
        "meters": 1486
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 352,
      "squawk": "2651",
      "timestamp": 1672392574,
      "ems": null
    },
    {
      "latitude": 51.815109,
      "longitude": 19.292679,
      "altitude": {
        "feet": 4875,
        "meters": 1486
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
      "heading": 352,
      "squawk": "2651",
      "timestamp": 1672392576,
      "ems": null
    },
    {
      "latitude": 51.817795,
      "longitude": 19.291992,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672392582,
      "ems": null
    },
    {
      "latitude": 51.820679,
      "longitude": 19.291473,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 356,
      "squawk": "2651",
      "timestamp": 1672392588,
      "ems": null
    },
    {
      "latitude": 51.821766,
      "longitude": 19.291458,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 359,
      "squawk": "2651",
      "timestamp": 1672392591,
      "ems": null
    },
    {
      "latitude": 51.823067,
      "longitude": 19.291534,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 1,
      "squawk": "2651",
      "timestamp": 1672392593,
      "ems": null
    },
    {
      "latitude": 51.825027,
      "longitude": 19.291769,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 5,
      "squawk": "2651",
      "timestamp": 1672392597,
      "ems": null
    },
    {
      "latitude": 51.826653,
      "longitude": 19.292145,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 7,
      "squawk": "2651",
      "timestamp": 1672392601,
      "ems": null
    },
    {
      "latitude": 51.827911,
      "longitude": 19.292511,
      "altitude": {
        "feet": 5050,
        "meters": 1539
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 7,
      "squawk": "2651",
      "timestamp": 1672392603,
      "ems": null
    },
    {
      "latitude": 51.829514,
      "longitude": 19.293032,
      "altitude": {
        "feet": 5025,
        "meters": 1532
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
      "heading": 11,
      "squawk": "2651",
      "timestamp": 1672392607,
      "ems": null
    },
    {
      "latitude": 51.831215,
      "longitude": 19.293747,
      "altitude": {
        "feet": 5025,
        "meters": 1532
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
      "heading": 14,
      "squawk": "2651",
      "timestamp": 1672392610,
      "ems": null
    },
    {
      "latitude": 51.832798,
      "longitude": 19.294586,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 18,
      "squawk": "2651",
      "timestamp": 1672392613,
      "ems": null
    },
    {
      "latitude": 51.834274,
      "longitude": 19.295704,
      "altitude": {
        "feet": 5025,
        "meters": 1532
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
      "heading": 26,
      "squawk": "2651",
      "timestamp": 1672392615,
      "ems": null
    },
    {
      "latitude": 51.835785,
      "longitude": 19.297188,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 31,
      "squawk": "2651",
      "timestamp": 1672392618,
      "ems": null
    },
    {
      "latitude": 51.837067,
      "longitude": 19.298599,
      "altitude": {
        "feet": 5025,
        "meters": 1532
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
      "heading": 36,
      "squawk": "2651",
      "timestamp": 1672392621,
      "ems": null
    },
    {
      "latitude": 51.838757,
      "longitude": 19.300766,
      "altitude": {
        "feet": 5050,
        "meters": 1539
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
      "heading": 39,
      "squawk": "2651",
      "timestamp": 1672392625,
      "ems": null
    },
    {
      "latitude": 51.840153,
      "longitude": 19.302673,
      "altitude": {
        "feet": 5050,
        "meters": 1539
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
      "heading": 41,
      "squawk": "2651",
      "timestamp": 1672392628,
      "ems": null
    },
    {
      "latitude": 51.841553,
      "longitude": 19.30476,
      "altitude": {
        "feet": 5050,
        "meters": 1539
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
      "heading": 42,
      "squawk": "2651",
      "timestamp": 1672392631,
      "ems": null
    },
    {
      "latitude": 51.842834,
      "longitude": 19.30669,
      "altitude": {
        "feet": 5075,
        "meters": 1547
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
      "heading": 44,
      "squawk": "2651",
      "timestamp": 1672392633,
      "ems": null
    },
    {
      "latitude": 51.844109,
      "longitude": 19.309006,
      "altitude": {
        "feet": 5075,
        "meters": 1547
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
      "heading": 48,
      "squawk": "2651",
      "timestamp": 1672392637,
      "ems": null
    },
    {
      "latitude": 51.845215,
      "longitude": 19.311218,
      "altitude": {
        "feet": 5075,
        "meters": 1547
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
      "heading": 53,
      "squawk": "2651",
      "timestamp": 1672392640,
      "ems": null
    },
    {
      "latitude": 51.846359,
      "longitude": 19.313965,
      "altitude": {
        "feet": 5075,
        "meters": 1547
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
      "heading": 56,
      "squawk": "2651",
      "timestamp": 1672392642,
      "ems": null
    },
    {
      "latitude": 51.847046,
      "longitude": 19.315746,
      "altitude": {
        "feet": 5050,
        "meters": 1539
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
      "heading": 59,
      "squawk": "2651",
      "timestamp": 1672392645,
      "ems": null
    },
    {
      "latitude": 51.848419,
      "longitude": 19.319756,
      "altitude": {
        "feet": 5050,
        "meters": 1539
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672392649,
      "ems": null
    },
    {
      "latitude": 51.849277,
      "longitude": 19.322662,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672392652,
      "ems": null
    },
    {
      "latitude": 51.850021,
      "longitude": 19.325693,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672392654,
      "ems": null
    },
    {
      "latitude": 51.850674,
      "longitude": 19.32869,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672392657,
      "ems": null
    },
    {
      "latitude": 51.851212,
      "longitude": 19.331633,
      "altitude": {
        "feet": 5050,
        "meters": 1539
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672392660,
      "ems": null
    },
    {
      "latitude": 51.851715,
      "longitude": 19.33527,
      "altitude": {
        "feet": 5050,
        "meters": 1539
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
      "heading": 78,
      "squawk": "2651",
      "timestamp": 1672392664,
      "ems": null
    },
    {
      "latitude": 51.852024,
      "longitude": 19.338684,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672392667,
      "ems": null
    },
    {
      "latitude": 51.852127,
      "longitude": 19.341282,
      "altitude": {
        "feet": 5025,
        "meters": 1532
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 87,
      "squawk": "2651",
      "timestamp": 1672392669,
      "ems": null
    },
    {
      "latitude": 51.852116,
      "longitude": 19.345169,
      "altitude": {
        "feet": 5000,
        "meters": 1524
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 92,
      "squawk": "2651",
      "timestamp": 1672392672,
      "ems": null
    },
    {
      "latitude": 51.851898,
      "longitude": 19.348928,
      "altitude": {
        "feet": 4975,
        "meters": 1516
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 94,
      "squawk": "2651",
      "timestamp": 1672392676,
      "ems": null
    },
    {
      "latitude": 51.851559,
      "longitude": 19.351883,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 102,
      "squawk": "2651",
      "timestamp": 1672392679,
      "ems": null
    },
    {
      "latitude": 51.850906,
      "longitude": 19.355469,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 106,
      "squawk": "2651",
      "timestamp": 1672392682,
      "ems": null
    },
    {
      "latitude": 51.8503,
      "longitude": 19.358368,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "2651",
      "timestamp": 1672392685,
      "ems": null
    },
    {
      "latitude": 51.849789,
      "longitude": 19.361115,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 107,
      "squawk": "2651",
      "timestamp": 1672392687,
      "ems": null
    },
    {
      "latitude": 51.84906,
      "longitude": 19.36474,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "2651",
      "timestamp": 1672392691,
      "ems": null
    },
    {
      "latitude": 51.848557,
      "longitude": 19.367413,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 106,
      "squawk": "2651",
      "timestamp": 1672392694,
      "ems": null
    },
    {
      "latitude": 51.847973,
      "longitude": 19.370651,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 106,
      "squawk": "2651",
      "timestamp": 1672392696,
      "ems": null
    },
    {
      "latitude": 51.847462,
      "longitude": 19.373322,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 107,
      "squawk": "2651",
      "timestamp": 1672392699,
      "ems": null
    },
    {
      "latitude": 51.846718,
      "longitude": 19.376526,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 110,
      "squawk": "2651",
      "timestamp": 1672392702,
      "ems": null
    },
    {
      "latitude": 51.845787,
      "longitude": 19.379959,
      "altitude": {
        "feet": 4875,
        "meters": 1486
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
      "heading": 110,
      "squawk": "2651",
      "timestamp": 1672392706,
      "ems": null
    },
    {
      "latitude": 51.844669,
      "longitude": 19.38385,
      "altitude": {
        "feet": 4850,
        "meters": 1478
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 115,
      "squawk": "2651",
      "timestamp": 1672392710,
      "ems": null
    },
    {
      "latitude": 51.84407,
      "longitude": 19.385895,
      "altitude": {
        "feet": 4825,
        "meters": 1471
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 115,
      "squawk": "2651",
      "timestamp": 1672392712,
      "ems": null
    },
    {
      "latitude": 51.842991,
      "longitude": 19.389572,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 115,
      "squawk": "2651",
      "timestamp": 1672392716,
      "ems": null
    },
    {
      "latitude": 51.842201,
      "longitude": 19.392319,
      "altitude": {
        "feet": 4800,
        "meters": 1463
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 115,
      "squawk": "2651",
      "timestamp": 1672392719,
      "ems": null
    },
    {
      "latitude": 51.841316,
      "longitude": 19.395218,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 116,
      "squawk": "2651",
      "timestamp": 1672392721,
      "ems": null
    },
    {
      "latitude": 51.840454,
      "longitude": 19.397995,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 117,
      "squawk": "2651",
      "timestamp": 1672392724,
      "ems": null
    },
    {
      "latitude": 51.839401,
      "longitude": 19.401114,
      "altitude": {
        "feet": 4825,
        "meters": 1471
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 118,
      "squawk": "2651",
      "timestamp": 1672392727,
      "ems": null
    },
    {
      "latitude": 51.838486,
      "longitude": 19.403786,
      "altitude": {
        "feet": 4850,
        "meters": 1478
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
      "heading": 119,
      "squawk": "2651",
      "timestamp": 1672392731,
      "ems": null
    },
    {
      "latitude": 51.837547,
      "longitude": 19.406357,
      "altitude": {
        "feet": 4825,
        "meters": 1471
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
      "heading": 121,
      "squawk": "2651",
      "timestamp": 1672392733,
      "ems": null
    },
    {
      "latitude": 51.836472,
      "longitude": 19.408981,
      "altitude": {
        "feet": 4825,
        "meters": 1471
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
      "heading": 122,
      "squawk": "2651",
      "timestamp": 1672392736,
      "ems": null
    },
    {
      "latitude": 51.835464,
      "longitude": 19.411505,
      "altitude": {
        "feet": 4825,
        "meters": 1471
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
      "heading": 124,
      "squawk": "2651",
      "timestamp": 1672392740,
      "ems": null
    },
    {
      "latitude": 51.834457,
      "longitude": 19.413807,
      "altitude": {
        "feet": 4850,
        "meters": 1478
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
      "heading": 125,
      "squawk": "2651",
      "timestamp": 1672392743,
      "ems": null
    },
    {
      "latitude": 51.833405,
      "longitude": 19.416122,
      "altitude": {
        "feet": 4875,
        "meters": 1486
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 126,
      "squawk": "2651",
      "timestamp": 1672392745,
      "ems": null
    },
    {
      "latitude": 51.832169,
      "longitude": 19.418928,
      "altitude": {
        "feet": 4875,
        "meters": 1486
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
      "heading": 125,
      "squawk": "2651",
      "timestamp": 1672392749,
      "ems": null
    },
    {
      "latitude": 51.831024,
      "longitude": 19.421453,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 126,
      "squawk": "2651",
      "timestamp": 1672392752,
      "ems": null
    },
    {
      "latitude": 51.829926,
      "longitude": 19.423754,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 128,
      "squawk": "2651",
      "timestamp": 1672392755,
      "ems": null
    },
    {
      "latitude": 51.828827,
      "longitude": 19.426056,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 127,
      "squawk": "2651",
      "timestamp": 1672392758,
      "ems": null
    },
    {
      "latitude": 51.827774,
      "longitude": 19.428356,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 126,
      "squawk": "2651",
      "timestamp": 1672392761,
      "ems": null
    },
    {
      "latitude": 51.826721,
      "longitude": 19.430731,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 126,
      "squawk": "2651",
      "timestamp": 1672392764,
      "ems": null
    },
    {
      "latitude": 51.824512,
      "longitude": 19.435425,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 127,
      "squawk": "2651",
      "timestamp": 1672392770,
      "ems": null
    },
    {
      "latitude": 51.822372,
      "longitude": 19.440084,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 126,
      "squawk": "2651",
      "timestamp": 1672392776,
      "ems": null
    },
    {
      "latitude": 51.820221,
      "longitude": 19.444984,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "squawk": "2651",
      "timestamp": 1672392782,
      "ems": null
    },
    {
      "latitude": 51.818069,
      "longitude": 19.450031,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 124,
      "squawk": "2651",
      "timestamp": 1672392788,
      "ems": null
    },
    {
      "latitude": 51.815807,
      "longitude": 19.455643,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 123,
      "squawk": "2651",
      "timestamp": 1672392794,
      "ems": null
    },
    {
      "latitude": 51.813812,
      "longitude": 19.460648,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 122,
      "squawk": "2651",
      "timestamp": 1672392800,
      "ems": null
    },
    {
      "latitude": 51.811844,
      "longitude": 19.465769,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 120,
      "squawk": "2651",
      "timestamp": 1672392806,
      "ems": null
    },
    {
      "latitude": 51.809647,
      "longitude": 19.471783,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 120,
      "squawk": "2651",
      "timestamp": 1672392812,
      "ems": null
    },
    {
      "latitude": 51.807938,
      "longitude": 19.476395,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 120,
      "squawk": "2651",
      "timestamp": 1672392819,
      "ems": null
    },
    {
      "latitude": 51.806774,
      "longitude": 19.479752,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 116,
      "squawk": "2651",
      "timestamp": 1672392821,
      "ems": null
    },
    {
      "latitude": 51.805939,
      "longitude": 19.48262,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 114,
      "squawk": "2651",
      "timestamp": 1672392824,
      "ems": null
    },
    {
      "latitude": 51.805008,
      "longitude": 19.485931,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 113,
      "squawk": "2651",
      "timestamp": 1672392827,
      "ems": null
    },
    {
      "latitude": 51.804306,
      "longitude": 19.488754,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 113,
      "squawk": "2651",
      "timestamp": 1672392830,
      "ems": null
    },
    {
      "latitude": 51.803516,
      "longitude": 19.49173,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 112,
      "squawk": "2651",
      "timestamp": 1672392833,
      "ems": null
    },
    {
      "latitude": 51.802689,
      "longitude": 19.495016,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 111,
      "squawk": "2651",
      "timestamp": 1672392837,
      "ems": null
    },
    {
      "latitude": 51.802074,
      "longitude": 19.497528,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 111,
      "squawk": "2651",
      "timestamp": 1672392840,
      "ems": null
    },
    {
      "latitude": 51.801189,
      "longitude": 19.501114,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 111,
      "squawk": "2651",
      "timestamp": 1672392843,
      "ems": null
    },
    {
      "latitude": 51.800537,
      "longitude": 19.503777,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 111,
      "squawk": "2651",
      "timestamp": 1672392845,
      "ems": null
    },
    {
      "latitude": 51.799839,
      "longitude": 19.506683,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 111,
      "squawk": "2651",
      "timestamp": 1672392848,
      "ems": null
    },
    {
      "latitude": 51.799,
      "longitude": 19.510193,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 111,
      "squawk": "2651",
      "timestamp": 1672392852,
      "ems": null
    },
    {
      "latitude": 51.797512,
      "longitude": 19.516296,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 111,
      "squawk": "2651",
      "timestamp": 1672392858,
      "ems": null
    },
    {
      "latitude": 51.796021,
      "longitude": 19.522476,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 111,
      "squawk": "2651",
      "timestamp": 1672392864,
      "ems": null
    },
    {
      "latitude": 51.794632,
      "longitude": 19.528496,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 110,
      "squawk": "2651",
      "timestamp": 1672392870,
      "ems": null
    },
    {
      "latitude": 51.793274,
      "longitude": 19.53476,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 108,
      "squawk": "2651",
      "timestamp": 1672392876,
      "ems": null
    },
    {
      "latitude": 51.791973,
      "longitude": 19.540863,
      "altitude": {
        "feet": 4875,
        "meters": 1486
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 108,
      "squawk": "2651",
      "timestamp": 1672392882,
      "ems": null
    },
    {
      "latitude": 51.790806,
      "longitude": 19.546661,
      "altitude": {
        "feet": 4875,
        "meters": 1486
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 107,
      "squawk": "2651",
      "timestamp": 1672392887,
      "ems": null
    },
    {
      "latitude": 51.790062,
      "longitude": 19.55101,
      "altitude": {
        "feet": 4875,
        "meters": 1486
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
      "heading": 105,
      "squawk": "2651",
      "timestamp": 1672392891,
      "ems": null
    },
    {
      "latitude": 51.789597,
      "longitude": 19.553833,
      "altitude": {
        "feet": 4875,
        "meters": 1486
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 104,
      "squawk": "2651",
      "timestamp": 1672392894,
      "ems": null
    },
    {
      "latitude": 51.789093,
      "longitude": 19.557222,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 103,
      "squawk": "2651",
      "timestamp": 1672392897,
      "ems": null
    },
    {
      "latitude": 51.788574,
      "longitude": 19.560776,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 103,
      "squawk": "2651",
      "timestamp": 1672392900,
      "ems": null
    },
    {
      "latitude": 51.788109,
      "longitude": 19.563751,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 104,
      "squawk": "2651",
      "timestamp": 1672392903,
      "ems": null
    },
    {
      "latitude": 51.787079,
      "longitude": 19.570288,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 104,
      "squawk": "2651",
      "timestamp": 1672392909,
      "ems": null
    },
    {
      "latitude": 51.78598,
      "longitude": 19.576895,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "2651",
      "timestamp": 1672392915,
      "ems": null
    },
    {
      "latitude": 51.784897,
      "longitude": 19.583206,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "2651",
      "timestamp": 1672392921,
      "ems": null
    },
    {
      "latitude": 51.783875,
      "longitude": 19.588921,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 105,
      "squawk": "2651",
      "timestamp": 1672392926,
      "ems": null
    },
    {
      "latitude": 51.782639,
      "longitude": 19.595749,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 106,
      "squawk": "2651",
      "timestamp": 1672392933,
      "ems": null
    },
    {
      "latitude": 51.781311,
      "longitude": 19.602654,
      "altitude": {
        "feet": 4900,
        "meters": 1494
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 106,
      "squawk": "2651",
      "timestamp": 1672392939,
      "ems": null
    },
    {
      "latitude": 51.780193,
      "longitude": 19.60907,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 105,
      "squawk": "2651",
      "timestamp": 1672392945,
      "ems": null
    },
    {
      "latitude": 51.779068,
      "longitude": 19.615717,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 104,
      "squawk": "2651",
      "timestamp": 1672392951,
      "ems": null
    },
    {
      "latitude": 51.778053,
      "longitude": 19.622345,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "2651",
      "timestamp": 1672392957,
      "ems": null
    },
    {
      "latitude": 51.777008,
      "longitude": 19.628782,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 103,
      "squawk": "2651",
      "timestamp": 1672392963,
      "ems": null
    },
    {
      "latitude": 51.776657,
      "longitude": 19.6315,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672392966,
      "ems": null
    },
    {
      "latitude": 51.776237,
      "longitude": 19.635696,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 98,
      "squawk": "2651",
      "timestamp": 1672392969,
      "ems": null
    },
    {
      "latitude": 51.776093,
      "longitude": 19.638508,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 279.7,
        "kts": 151,
        "mph": 173.8
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 93,
      "squawk": "2651",
      "timestamp": 1672392972,
      "ems": null
    },
    {
      "latitude": 51.776138,
      "longitude": 19.642145,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 88,
      "squawk": "2651",
      "timestamp": 1672392975,
      "ems": null
    },
    {
      "latitude": 51.776321,
      "longitude": 19.645039,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 81,
      "squawk": "2651",
      "timestamp": 1672392978,
      "ems": null
    },
    {
      "latitude": 51.776749,
      "longitude": 19.648895,
      "altitude": {
        "feet": 4975,
        "meters": 1516
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 78,
      "squawk": "2651",
      "timestamp": 1672392981,
      "ems": null
    },
    {
      "latitude": 51.777309,
      "longitude": 19.652328,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672392984,
      "ems": null
    },
    {
      "latitude": 51.777866,
      "longitude": 19.655304,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672392987,
      "ems": null
    },
    {
      "latitude": 51.778702,
      "longitude": 19.658995,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672392990,
      "ems": null
    },
    {
      "latitude": 51.778797,
      "longitude": 19.6595,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672392991,
      "ems": null
    },
    {
      "latitude": 51.779682,
      "longitude": 19.662933,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672392994,
      "ems": null
    },
    {
      "latitude": 51.780472,
      "longitude": 19.66568,
      "altitude": {
        "feet": 4975,
        "meters": 1516
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672392997,
      "ems": null
    },
    {
      "latitude": 51.781219,
      "longitude": 19.668274,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672393000,
      "ems": null
    },
    {
      "latitude": 51.782272,
      "longitude": 19.671837,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672393003,
      "ems": null
    },
    {
      "latitude": 51.783142,
      "longitude": 19.674583,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672393006,
      "ems": null
    },
    {
      "latitude": 51.784012,
      "longitude": 19.677353,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672393009,
      "ems": null
    },
    {
      "latitude": 51.78479,
      "longitude": 19.679707,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672393012,
      "ems": null
    },
    {
      "latitude": 51.785919,
      "longitude": 19.683075,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672393015,
      "ems": null
    },
    {
      "latitude": 51.786896,
      "longitude": 19.68609,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672393018,
      "ems": null
    },
    {
      "latitude": 51.787857,
      "longitude": 19.688984,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672393021,
      "ems": null
    },
    {
      "latitude": 51.788944,
      "longitude": 19.692154,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672393025,
      "ems": null
    },
    {
      "latitude": 51.789505,
      "longitude": 19.693909,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672393026,
      "ems": null
    },
    {
      "latitude": 51.792717,
      "longitude": 19.702988,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672393036,
      "ems": null
    },
    {
      "latitude": 51.794487,
      "longitude": 19.707947,
      "altitude": {
        "feet": 4925,
        "meters": 1501
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 59,
      "squawk": "2651",
      "timestamp": 1672393041,
      "ems": null
    },
    {
      "latitude": 51.797333,
      "longitude": 19.71452,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 50,
      "squawk": "2651",
      "timestamp": 1672393049,
      "ems": null
    },
    {
      "latitude": 51.797512,
      "longitude": 19.71489,
      "altitude": {
        "feet": 4950,
        "meters": 1509
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 48,
      "squawk": "2651",
      "timestamp": 1672393050,
      "ems": null
    },
    {
      "latitude": 51.799419,
      "longitude": 19.718094,
      "altitude": {
        "feet": 4975,
        "meters": 1516
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 43,
      "squawk": "2651",
      "timestamp": 1672393054,
      "ems": null
    },
    {
      "latitude": 51.800903,
      "longitude": 19.720087,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 39,
      "squawk": "2651",
      "timestamp": 1672393057,
      "ems": null
    },
    {
      "latitude": 51.802322,
      "longitude": 19.721796,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 33,
      "squawk": "2651",
      "timestamp": 1672393060,
      "ems": null
    },
    {
      "latitude": 51.803879,
      "longitude": 19.723206,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 28,
      "squawk": "2651",
      "timestamp": 1672393063,
      "ems": null
    },
    {
      "latitude": 51.805378,
      "longitude": 19.724274,
      "altitude": {
        "feet": 4975,
        "meters": 1516
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 22,
      "squawk": "2651",
      "timestamp": 1672393066,
      "ems": null
    },
    {
      "latitude": 51.806915,
      "longitude": 19.725113,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 16,
      "squawk": "2651",
      "timestamp": 1672393069,
      "ems": null
    },
    {
      "latitude": 51.808403,
      "longitude": 19.725571,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 10,
      "squawk": "2651",
      "timestamp": 1672393071,
      "ems": null
    },
    {
      "latitude": 51.809967,
      "longitude": 19.725803,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 3,
      "squawk": "2651",
      "timestamp": 1672393075,
      "ems": null
    },
    {
      "latitude": 51.811245,
      "longitude": 19.7258,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 356,
      "squawk": "2651",
      "timestamp": 1672393078,
      "ems": null
    },
    {
      "latitude": 51.813034,
      "longitude": 19.725506,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672393081,
      "ems": null
    },
    {
      "latitude": 51.81427,
      "longitude": 19.725113,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 346,
      "squawk": "2651",
      "timestamp": 1672393083,
      "ems": null
    },
    {
      "latitude": 51.815826,
      "longitude": 19.724319,
      "altitude": {
        "feet": 5000,
        "meters": 1524
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
      "heading": 340,
      "squawk": "2651",
      "timestamp": 1672393087,
      "ems": null
    },
    {
      "latitude": 51.816879,
      "longitude": 19.723577,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 334,
      "squawk": "2651",
      "timestamp": 1672393090,
      "ems": null
    },
    {
      "latitude": 51.818024,
      "longitude": 19.722464,
      "altitude": {
        "feet": 4975,
        "meters": 1516
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
      "heading": 325,
      "squawk": "2651",
      "timestamp": 1672393093,
      "ems": null
    },
    {
      "latitude": 51.819077,
      "longitude": 19.721052,
      "altitude": {
        "feet": 4950,
        "meters": 1509
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
      "heading": 317,
      "squawk": "2651",
      "timestamp": 1672393096,
      "ems": null
    },
    {
      "latitude": 51.819904,
      "longitude": 19.719467,
      "altitude": {
        "feet": 4925,
        "meters": 1501
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
      "heading": 306,
      "squawk": "2651",
      "timestamp": 1672393099,
      "ems": null
    },
    {
      "latitude": 51.820496,
      "longitude": 19.717787,
      "altitude": {
        "feet": 4900,
        "meters": 1494
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
      "heading": 296,
      "squawk": "2651",
      "timestamp": 1672393102,
      "ems": null
    },
    {
      "latitude": 51.820908,
      "longitude": 19.715708,
      "altitude": {
        "feet": 4850,
        "meters": 1478
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
      "heading": 285,
      "squawk": "2651",
      "timestamp": 1672393105,
      "ems": null
    },
    {
      "latitude": 51.821091,
      "longitude": 19.713629,
      "altitude": {
        "feet": 4825,
        "meters": 1471
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
      "heading": 274,
      "squawk": "2651",
      "timestamp": 1672393108,
      "ems": null
    },
    {
      "latitude": 51.821068,
      "longitude": 19.711838,
      "altitude": {
        "feet": 4825,
        "meters": 1471
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
      "heading": 268,
      "squawk": "2651",
      "timestamp": 1672393111,
      "ems": null
    },
    {
      "latitude": 51.820862,
      "longitude": 19.709621,
      "altitude": {
        "feet": 4825,
        "meters": 1471
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
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672393114,
      "ems": null
    },
    {
      "latitude": 51.820553,
      "longitude": 19.707718,
      "altitude": {
        "feet": 4800,
        "meters": 1463
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393117,
      "ems": null
    },
    {
      "latitude": 51.820038,
      "longitude": 19.705687,
      "altitude": {
        "feet": 4775,
        "meters": 1455
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672393120,
      "ems": null
    },
    {
      "latitude": 51.819489,
      "longitude": 19.704054,
      "altitude": {
        "feet": 4750,
        "meters": 1448
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672393123,
      "ems": null
    },
    {
      "latitude": 51.818665,
      "longitude": 19.702124,
      "altitude": {
        "feet": 4700,
        "meters": 1433
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
      "heading": 230,
      "squawk": "2651",
      "timestamp": 1672393126,
      "ems": null
    },
    {
      "latitude": 51.817574,
      "longitude": 19.700394,
      "altitude": {
        "feet": 4675,
        "meters": 1425
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 222,
      "squawk": "2651",
      "timestamp": 1672393129,
      "ems": null
    },
    {
      "latitude": 51.816742,
      "longitude": 19.699377,
      "altitude": {
        "feet": 4650,
        "meters": 1417
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 216,
      "squawk": "2651",
      "timestamp": 1672393131,
      "ems": null
    },
    {
      "latitude": 51.815048,
      "longitude": 19.69767,
      "altitude": {
        "feet": 4600,
        "meters": 1402
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 209,
      "squawk": "2651",
      "timestamp": 1672393135,
      "ems": null
    },
    {
      "latitude": 51.813812,
      "longitude": 19.69663,
      "altitude": {
        "feet": 4575,
        "meters": 1394
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
      "heading": 208,
      "squawk": "2651",
      "timestamp": 1672393138,
      "ems": null
    },
    {
      "latitude": 51.812439,
      "longitude": 19.695517,
      "altitude": {
        "feet": 4525,
        "meters": 1379
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 206,
      "squawk": "2651",
      "timestamp": 1672393141,
      "ems": null
    },
    {
      "latitude": 51.811058,
      "longitude": 19.694443,
      "altitude": {
        "feet": 4500,
        "meters": 1372
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 204,
      "squawk": "2651",
      "timestamp": 1672393144,
      "ems": null
    },
    {
      "latitude": 51.809555,
      "longitude": 19.693365,
      "altitude": {
        "feet": 4450,
        "meters": 1356
      },
      "speed": {
        "kmh": 211.1,
        "kts": 114,
        "mph": 131.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 203,
      "squawk": "2651",
      "timestamp": 1672393147,
      "ems": null
    },
    {
      "latitude": 51.808033,
      "longitude": 19.692383,
      "altitude": {
        "feet": 4425,
        "meters": 1349
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 202,
      "squawk": "2651",
      "timestamp": 1672393150,
      "ems": null
    },
    {
      "latitude": 51.807312,
      "longitude": 19.691879,
      "altitude": {
        "feet": 4400,
        "meters": 1341
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
      "heading": 204,
      "squawk": "2651",
      "timestamp": 1672393152,
      "ems": null
    },
    {
      "latitude": 51.804977,
      "longitude": 19.690321,
      "altitude": {
        "feet": 4325,
        "meters": 1318
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 201,
      "squawk": "2651",
      "timestamp": 1672393156,
      "ems": null
    },
    {
      "latitude": 51.803471,
      "longitude": 19.689484,
      "altitude": {
        "feet": 4300,
        "meters": 1311
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 200,
      "squawk": "2651",
      "timestamp": 1672393159,
      "ems": null
    },
    {
      "latitude": 51.801865,
      "longitude": 19.68854,
      "altitude": {
        "feet": 4250,
        "meters": 1295
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 198,
      "squawk": "2651",
      "timestamp": 1672393162,
      "ems": null
    },
    {
      "latitude": 51.80035,
      "longitude": 19.687729,
      "altitude": {
        "feet": 4225,
        "meters": 1288
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 197,
      "squawk": "2651",
      "timestamp": 1672393165,
      "ems": null
    },
    {
      "latitude": 51.79863,
      "longitude": 19.68689,
      "altitude": {
        "feet": 4200,
        "meters": 1280
      },
      "speed": {
        "kmh": 222.2,
        "kts": 120,
        "mph": 138.1
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 197,
      "squawk": "2651",
      "timestamp": 1672393168,
      "ems": null
    },
    {
      "latitude": 51.797184,
      "longitude": 19.686127,
      "altitude": {
        "feet": 4175,
        "meters": 1273
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
      "heading": 197,
      "squawk": "2651",
      "timestamp": 1672393171,
      "ems": null
    },
    {
      "latitude": 51.794312,
      "longitude": 19.683788,
      "altitude": {
        "feet": 4100,
        "meters": 1250
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 213,
      "squawk": "2651",
      "timestamp": 1672393177,
      "ems": null
    },
    {
      "latitude": 51.793213,
      "longitude": 19.682156,
      "altitude": {
        "feet": 4050,
        "meters": 1234
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 224,
      "squawk": "2651",
      "timestamp": 1672393180,
      "ems": null
    },
    {
      "latitude": 51.792252,
      "longitude": 19.680176,
      "altitude": {
        "feet": 4000,
        "meters": 1219
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 234,
      "squawk": "2651",
      "timestamp": 1672393183,
      "ems": null
    },
    {
      "latitude": 51.791599,
      "longitude": 19.678268,
      "altitude": {
        "feet": 3950,
        "meters": 1204
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672393186,
      "ems": null
    },
    {
      "latitude": 51.79097,
      "longitude": 19.676067,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672393189,
      "ems": null
    },
    {
      "latitude": 51.790249,
      "longitude": 19.673767,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393192,
      "ems": null
    },
    {
      "latitude": 51.789783,
      "longitude": 19.672241,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393195,
      "ems": null
    },
    {
      "latitude": 51.789047,
      "longitude": 19.669907,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672393198,
      "ems": null
    },
    {
      "latitude": 51.788635,
      "longitude": 19.668571,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672393201,
      "ems": null
    },
    {
      "latitude": 51.787876,
      "longitude": 19.666138,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393205,
      "ems": null
    },
    {
      "latitude": 51.787411,
      "longitude": 19.664688,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393207,
      "ems": null
    },
    {
      "latitude": 51.786758,
      "longitude": 19.662558,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393210,
      "ems": null
    },
    {
      "latitude": 51.785549,
      "longitude": 19.658966,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "squawk": "2651",
      "timestamp": 1672393216,
      "ems": null
    },
    {
      "latitude": 51.784477,
      "longitude": 19.655609,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672393223,
      "ems": null
    },
    {
      "latitude": 51.783268,
      "longitude": 19.652252,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672393228,
      "ems": null
    },
    {
      "latitude": 51.782227,
      "longitude": 19.649345,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672393234,
      "ems": null
    },
    {
      "latitude": 51.780846,
      "longitude": 19.645157,
      "altitude": {
        "feet": 4000,
        "meters": 1219
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672393241,
      "ems": null
    },
    {
      "latitude": 51.779663,
      "longitude": 19.641699,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672393247,
      "ems": null
    },
    {
      "latitude": 51.778519,
      "longitude": 19.637985,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393254,
      "ems": null
    },
    {
      "latitude": 51.777466,
      "longitude": 19.634647,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393260,
      "ems": null
    },
    {
      "latitude": 51.776367,
      "longitude": 19.631159,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393266,
      "ems": null
    },
    {
      "latitude": 51.775269,
      "longitude": 19.627743,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672393272,
      "ems": null
    },
    {
      "latitude": 51.77417,
      "longitude": 19.624477,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672393278,
      "ems": null
    },
    {
      "latitude": 51.77298,
      "longitude": 19.621063,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672393284,
      "ems": null
    },
    {
      "latitude": 51.772095,
      "longitude": 19.61792,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672393290,
      "ems": null
    },
    {
      "latitude": 51.771862,
      "longitude": 19.615936,
      "altitude": {
        "feet": 3975,
        "meters": 1212
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
      "heading": 264,
      "squawk": "2651",
      "timestamp": 1672393293,
      "ems": null
    },
    {
      "latitude": 51.771927,
      "longitude": 19.613935,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 276,
      "squawk": "2651",
      "timestamp": 1672393296,
      "ems": null
    },
    {
      "latitude": 51.771954,
      "longitude": 19.613647,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 281,
      "squawk": "2651",
      "timestamp": 1672393296,
      "ems": null
    },
    {
      "latitude": 51.772465,
      "longitude": 19.611435,
      "altitude": {
        "feet": 3950,
        "meters": 1204
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
      "heading": 295,
      "squawk": "2651",
      "timestamp": 1672393300,
      "ems": null
    },
    {
      "latitude": 51.773163,
      "longitude": 19.609779,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 307,
      "squawk": "2651",
      "timestamp": 1672393303,
      "ems": null
    },
    {
      "latitude": 51.773758,
      "longitude": 19.608889,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 315,
      "squawk": "2651",
      "timestamp": 1672393305,
      "ems": null
    },
    {
      "latitude": 51.77504,
      "longitude": 19.607403,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "squawk": "2651",
      "timestamp": 1672393309,
      "ems": null
    },
    {
      "latitude": 51.776093,
      "longitude": 19.606586,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 335,
      "squawk": "2651",
      "timestamp": 1672393311,
      "ems": null
    },
    {
      "latitude": 51.777355,
      "longitude": 19.605865,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 344,
      "squawk": "2651",
      "timestamp": 1672393315,
      "ems": null
    },
    {
      "latitude": 51.778706,
      "longitude": 19.605484,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 353,
      "squawk": "2651",
      "timestamp": 1672393318,
      "ems": null
    },
    {
      "latitude": 51.780212,
      "longitude": 19.605474,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 1,
      "squawk": "2651",
      "timestamp": 1672393321,
      "ems": null
    },
    {
      "latitude": 51.781868,
      "longitude": 19.605865,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 10,
      "squawk": "2651",
      "timestamp": 1672393324,
      "ems": null
    },
    {
      "latitude": 51.783234,
      "longitude": 19.606512,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 18,
      "squawk": "2651",
      "timestamp": 1672393326,
      "ems": null
    },
    {
      "latitude": 51.784882,
      "longitude": 19.607775,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 26,
      "squawk": "2651",
      "timestamp": 1672393330,
      "ems": null
    },
    {
      "latitude": 51.786293,
      "longitude": 19.609222,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 34,
      "squawk": "2651",
      "timestamp": 1672393333,
      "ems": null
    },
    {
      "latitude": 51.787628,
      "longitude": 19.610968,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 42,
      "squawk": "2651",
      "timestamp": 1672393336,
      "ems": null
    },
    {
      "latitude": 51.788807,
      "longitude": 19.613113,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 48,
      "squawk": "2651",
      "timestamp": 1672393338,
      "ems": null
    },
    {
      "latitude": 51.789925,
      "longitude": 19.615631,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 56,
      "squawk": "2651",
      "timestamp": 1672393341,
      "ems": null
    },
    {
      "latitude": 51.790878,
      "longitude": 19.618464,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672393345,
      "ems": null
    },
    {
      "latitude": 51.79174,
      "longitude": 19.621429,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672393348,
      "ems": null
    },
    {
      "latitude": 51.792576,
      "longitude": 19.624329,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672393351,
      "ems": null
    },
    {
      "latitude": 51.793488,
      "longitude": 19.627224,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672393354,
      "ems": null
    },
    {
      "latitude": 51.794266,
      "longitude": 19.629971,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672393357,
      "ems": null
    },
    {
      "latitude": 51.795135,
      "longitude": 19.633015,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672393360,
      "ems": null
    },
    {
      "latitude": 51.795914,
      "longitude": 19.635687,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672393363,
      "ems": null
    },
    {
      "latitude": 51.796814,
      "longitude": 19.638748,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672393366,
      "ems": null
    },
    {
      "latitude": 51.797562,
      "longitude": 19.641254,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672393369,
      "ems": null
    },
    {
      "latitude": 51.798443,
      "longitude": 19.644089,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672393372,
      "ems": null
    },
    {
      "latitude": 51.800171,
      "longitude": 19.649567,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672393378,
      "ems": null
    },
    {
      "latitude": 51.80191,
      "longitude": 19.654913,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672393384,
      "ems": null
    },
    {
      "latitude": 51.803608,
      "longitude": 19.66011,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672393390,
      "ems": null
    },
    {
      "latitude": 51.805481,
      "longitude": 19.665676,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672393396,
      "ems": null
    },
    {
      "latitude": 51.807312,
      "longitude": 19.670946,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672393402,
      "ems": null
    },
    {
      "latitude": 51.809101,
      "longitude": 19.676132,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672393408,
      "ems": null
    },
    {
      "latitude": 51.810825,
      "longitude": 19.681854,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672393414,
      "ems": null
    },
    {
      "latitude": 51.811386,
      "longitude": 19.684753,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672393417,
      "ems": null
    },
    {
      "latitude": 51.811798,
      "longitude": 19.687946,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 80,
      "squawk": "2651",
      "timestamp": 1672393420,
      "ems": null
    },
    {
      "latitude": 51.811989,
      "longitude": 19.691391,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 86,
      "squawk": "2651",
      "timestamp": 1672393423,
      "ems": null
    },
    {
      "latitude": 51.811989,
      "longitude": 19.694443,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 275.9,
        "kts": 149,
        "mph": 171.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 92,
      "squawk": "2651",
      "timestamp": 1672393426,
      "ems": null
    },
    {
      "latitude": 51.811844,
      "longitude": 19.697447,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 97,
      "squawk": "2651",
      "timestamp": 1672393429,
      "ems": null
    },
    {
      "latitude": 51.811291,
      "longitude": 19.701385,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 104,
      "squawk": "2651",
      "timestamp": 1672393432,
      "ems": null
    },
    {
      "latitude": 51.810871,
      "longitude": 19.703445,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 112,
      "squawk": "2651",
      "timestamp": 1672393435,
      "ems": null
    },
    {
      "latitude": 51.809738,
      "longitude": 19.707098,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 118,
      "squawk": "2651",
      "timestamp": 1672393438,
      "ems": null
    },
    {
      "latitude": 51.80896,
      "longitude": 19.708805,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 130,
      "squawk": "2651",
      "timestamp": 1672393441,
      "ems": null
    },
    {
      "latitude": 51.807358,
      "longitude": 19.711552,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 135,
      "squawk": "2651",
      "timestamp": 1672393444,
      "ems": null
    },
    {
      "latitude": 51.805752,
      "longitude": 19.713516,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 145,
      "squawk": "2651",
      "timestamp": 1672393447,
      "ems": null
    },
    {
      "latitude": 51.804199,
      "longitude": 19.714891,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 153,
      "squawk": "2651",
      "timestamp": 1672393450,
      "ems": null
    },
    {
      "latitude": 51.802074,
      "longitude": 19.716034,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 165,
      "squawk": "2651",
      "timestamp": 1672393454,
      "ems": null
    },
    {
      "latitude": 51.800724,
      "longitude": 19.716339,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 168,
      "squawk": "2651",
      "timestamp": 1672393456,
      "ems": null
    },
    {
      "latitude": 51.799255,
      "longitude": 19.71645,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 182,
      "squawk": "2651",
      "timestamp": 1672393460,
      "ems": null
    },
    {
      "latitude": 51.798347,
      "longitude": 19.716339,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 182,
      "squawk": "2651",
      "timestamp": 1672393461,
      "ems": null
    },
    {
      "latitude": 51.796738,
      "longitude": 19.715633,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 200,
      "squawk": "2651",
      "timestamp": 1672393465,
      "ems": null
    },
    {
      "latitude": 51.794952,
      "longitude": 19.713974,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 218,
      "squawk": "2651",
      "timestamp": 1672393470,
      "ems": null
    },
    {
      "latitude": 51.793625,
      "longitude": 19.711626,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 230,
      "squawk": "2651",
      "timestamp": 1672393474,
      "ems": null
    },
    {
      "latitude": 51.792847,
      "longitude": 19.709919,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 235,
      "squawk": "2651",
      "timestamp": 1672393477,
      "ems": null
    },
    {
      "latitude": 51.792206,
      "longitude": 19.708405,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672393480,
      "ems": null
    },
    {
      "latitude": 51.791473,
      "longitude": 19.706354,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672393484,
      "ems": null
    },
    {
      "latitude": 51.79097,
      "longitude": 19.704796,
      "altitude": {
        "feet": 3750,
        "meters": 1143
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672393486,
      "ems": null
    },
    {
      "latitude": 51.790512,
      "longitude": 19.70294,
      "altitude": {
        "feet": 3725,
        "meters": 1135
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393489,
      "ems": null
    },
    {
      "latitude": 51.7901,
      "longitude": 19.700861,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672393492,
      "ems": null
    },
    {
      "latitude": 51.789825,
      "longitude": 19.698933,
      "altitude": {
        "feet": 3675,
        "meters": 1120
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672393495,
      "ems": null
    },
    {
      "latitude": 51.789551,
      "longitude": 19.697149,
      "altitude": {
        "feet": 3650,
        "meters": 1113
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672393498,
      "ems": null
    },
    {
      "latitude": 51.789276,
      "longitude": 19.695072,
      "altitude": {
        "feet": 3625,
        "meters": 1105
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672393501,
      "ems": null
    },
    {
      "latitude": 51.78904,
      "longitude": 19.693451,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672393504,
      "ems": null
    },
    {
      "latitude": 51.788712,
      "longitude": 19.691391,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672393507,
      "ems": null
    },
    {
      "latitude": 51.788406,
      "longitude": 19.689281,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672393511,
      "ems": null
    },
    {
      "latitude": 51.788132,
      "longitude": 19.687351,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672393514,
      "ems": null
    },
    {
      "latitude": 51.787876,
      "longitude": 19.68544,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672393516,
      "ems": null
    },
    {
      "latitude": 51.787643,
      "longitude": 19.683609,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672393519,
      "ems": null
    },
    {
      "latitude": 51.787411,
      "longitude": 19.681473,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672393522,
      "ems": null
    },
    {
      "latitude": 51.786942,
      "longitude": 19.677553,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672393528,
      "ems": null
    },
    {
      "latitude": 51.786385,
      "longitude": 19.673309,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672393535,
      "ems": null
    },
    {
      "latitude": 51.785889,
      "longitude": 19.669313,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672393541,
      "ems": null
    },
    {
      "latitude": 51.785385,
      "longitude": 19.665155,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672393547,
      "ems": null
    },
    {
      "latitude": 51.784836,
      "longitude": 19.661148,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672393553,
      "ems": null
    },
    {
      "latitude": 51.784336,
      "longitude": 19.656982,
      "altitude": {
        "feet": 3150,
        "meters": 960
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
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672393559,
      "ems": null
    },
    {
      "latitude": 51.783916,
      "longitude": 19.653168,
      "altitude": {
        "feet": 3100,
        "meters": 945
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
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672393565,
      "ems": null
    },
    {
      "latitude": 51.783508,
      "longitude": 19.648825,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 261,
      "squawk": "2651",
      "timestamp": 1672393571,
      "ems": null
    },
    {
      "latitude": 51.783081,
      "longitude": 19.644699,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 261,
      "squawk": "2651",
      "timestamp": 1672393577,
      "ems": null
    },
    {
      "latitude": 51.782661,
      "longitude": 19.640656,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672393583,
      "ems": null
    },
    {
      "latitude": 51.782364,
      "longitude": 19.638952,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393586,
      "ems": null
    },
    {
      "latitude": 51.781822,
      "longitude": 19.636765,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672393589,
      "ems": null
    },
    {
      "latitude": 51.781128,
      "longitude": 19.634722,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672393592,
      "ems": null
    },
    {
      "latitude": 51.780579,
      "longitude": 19.633087,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672393595,
      "ems": null
    },
    {
      "latitude": 51.779984,
      "longitude": 19.631454,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672393598,
      "ems": null
    },
    {
      "latitude": 51.779251,
      "longitude": 19.629375,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672393601,
      "ems": null
    },
    {
      "latitude": 51.778473,
      "longitude": 19.627298,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672393604,
      "ems": null
    },
    {
      "latitude": 51.777775,
      "longitude": 19.625397,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672393607,
      "ems": null
    },
    {
      "latitude": 51.7771,
      "longitude": 19.623661,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672393610,
      "ems": null
    },
    {
      "latitude": 51.77647,
      "longitude": 19.621735,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672393613,
      "ems": null
    },
    {
      "latitude": 51.776001,
      "longitude": 19.620173,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672393615,
      "ems": null
    },
    {
      "latitude": 51.77512,
      "longitude": 19.615936,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "squawk": "2651",
      "timestamp": 1672393622,
      "ems": null
    },
    {
      "latitude": 51.774673,
      "longitude": 19.614084,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672393625,
      "ems": null
    },
    {
      "latitude": 51.773483,
      "longitude": 19.61067,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 235,
      "squawk": "2651",
      "timestamp": 1672393631,
      "ems": null
    },
    {
      "latitude": 51.772793,
      "longitude": 19.609146,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 233,
      "squawk": "2651",
      "timestamp": 1672393633,
      "ems": null
    },
    {
      "latitude": 51.771835,
      "longitude": 19.607033,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 232,
      "squawk": "2651",
      "timestamp": 1672393637,
      "ems": null
    },
    {
      "latitude": 51.771023,
      "longitude": 19.605408,
      "altitude": {
        "feet": 2675,
        "meters": 815
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
      "heading": 231,
      "squawk": "2651",
      "timestamp": 1672393640,
      "ems": null
    },
    {
      "latitude": 51.770233,
      "longitude": 19.603882,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 229,
      "squawk": "2651",
      "timestamp": 1672393643,
      "ems": null
    },
    {
      "latitude": 51.76944,
      "longitude": 19.602432,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 228,
      "squawk": "2651",
      "timestamp": 1672393646,
      "ems": null
    },
    {
      "latitude": 51.768631,
      "longitude": 19.600798,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 233,
      "squawk": "2651",
      "timestamp": 1672393649,
      "ems": null
    },
    {
      "latitude": 51.767944,
      "longitude": 19.599163,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 234,
      "squawk": "2651",
      "timestamp": 1672393652,
      "ems": null
    },
    {
      "latitude": 51.767204,
      "longitude": 19.597473,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 235,
      "squawk": "2651",
      "timestamp": 1672393655,
      "ems": null
    },
    {
      "latitude": 51.765839,
      "longitude": 19.594116,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672393661,
      "ems": null
    },
    {
      "latitude": 51.765152,
      "longitude": 19.59226,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672393664,
      "ems": null
    },
    {
      "latitude": 51.764507,
      "longitude": 19.590607,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672393667,
      "ems": null
    },
    {
      "latitude": 51.763916,
      "longitude": 19.588995,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672393670,
      "ems": null
    },
    {
      "latitude": 51.763157,
      "longitude": 19.586945,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672393673,
      "ems": null
    },
    {
      "latitude": 51.76255,
      "longitude": 19.585342,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672393676,
      "ems": null
    },
    {
      "latitude": 51.761993,
      "longitude": 19.583502,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672393679,
      "ems": null
    },
    {
      "latitude": 51.76149,
      "longitude": 19.58172,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672393682,
      "ems": null
    },
    {
      "latitude": 51.761032,
      "longitude": 19.579865,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "squawk": "2651",
      "timestamp": 1672393685,
      "ems": null
    },
    {
      "latitude": 51.760643,
      "longitude": 19.578247,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672393688,
      "ems": null
    },
    {
      "latitude": 51.760162,
      "longitude": 19.576227,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672393691,
      "ems": null
    },
    {
      "latitude": 51.759758,
      "longitude": 19.574509,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393694,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.573059,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393697,
      "ems": null
    },
    {
      "latitude": 51.758881,
      "longitude": 19.57103,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672393700,
      "ems": null
    },
    {
      "latitude": 51.758362,
      "longitude": 19.569016,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672393703,
      "ems": null
    },
    {
      "latitude": 51.757896,
      "longitude": 19.567108,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672393706,
      "ems": null
    },
    {
      "latitude": 51.757523,
      "longitude": 19.565201,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "squawk": "2651",
      "timestamp": 1672393709,
      "ems": null
    },
    {
      "latitude": 51.757244,
      "longitude": 19.563675,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672393712,
      "ems": null
    },
    {
      "latitude": 51.756824,
      "longitude": 19.561462,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672393715,
      "ems": null
    },
    {
      "latitude": 51.755997,
      "longitude": 19.557371,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393721,
      "ems": null
    },
    {
      "latitude": 51.755081,
      "longitude": 19.553585,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393727,
      "ems": null
    },
    {
      "latitude": 51.754265,
      "longitude": 19.549789,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393733,
      "ems": null
    },
    {
      "latitude": 51.753342,
      "longitude": 19.546087,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672393739,
      "ems": null
    },
    {
      "latitude": 51.752563,
      "longitude": 19.542377,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393745,
      "ems": null
    },
    {
      "latitude": 51.751785,
      "longitude": 19.539333,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672393751,
      "ems": null
    },
    {
      "latitude": 51.751144,
      "longitude": 19.536512,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393757,
      "ems": null
    },
    {
      "latitude": 51.750587,
      "longitude": 19.533539,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672393764,
      "ems": null
    },
    {
      "latitude": 51.750401,
      "longitude": 19.532242,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672393767,
      "ems": null
    },
    {
      "latitude": 51.749817,
      "longitude": 19.529387,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393772,
      "ems": null
    },
    {
      "latitude": 51.749176,
      "longitude": 19.526491,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393778,
      "ems": null
    },
    {
      "latitude": 51.748585,
      "longitude": 19.523697,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393784,
      "ems": null
    },
    {
      "latitude": 51.74794,
      "longitude": 19.520924,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393791,
      "ems": null
    },
    {
      "latitude": 51.747467,
      "longitude": 19.518509,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672393796,
      "ems": null
    },
    {
      "latitude": 51.747047,
      "longitude": 19.516068,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672393802,
      "ems": null
    },
    {
      "latitude": 51.746887,
      "longitude": 19.514837,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672393806,
      "ems": null
    },
    {
      "latitude": 51.746723,
      "longitude": 19.513626,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672393808,
      "ems": null
    },
    {
      "latitude": 51.74649,
      "longitude": 19.512405,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672393812,
      "ems": null
    },
    {
      "latitude": 51.746338,
      "longitude": 19.5112,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672393815,
      "ems": null
    },
    {
      "latitude": 51.746155,
      "longitude": 19.509937,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672393818,
      "ems": null
    },
    {
      "latitude": 51.746071,
      "longitude": 19.508743,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672393821,
      "ems": null
    },
    {
      "latitude": 51.745926,
      "longitude": 19.507488,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672393824,
      "ems": null
    },
    {
      "latitude": 51.745605,
      "longitude": 19.504929,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672393829,
      "ems": null
    },
    {
      "latitude": 51.745285,
      "longitude": 19.502216,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 261,
      "squawk": "2651",
      "timestamp": 1672393836,
      "ems": null
    },
    {
      "latitude": 51.744907,
      "longitude": 19.499588,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 105.6,
        "kts": 57,
        "mph": 65.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393842,
      "ems": null
    },
    {
      "latitude": 51.744644,
      "longitude": 19.498432,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672393845,
      "ems": null
    },
    {
      "latitude": 51.74437,
      "longitude": 19.497318,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393848,
      "ems": null
    },
    {
      "latitude": 51.744022,
      "longitude": 19.495773,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393851,
      "ems": null
    },
    {
      "latitude": 51.743729,
      "longitude": 19.494497,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393854,
      "ems": null
    },
    {
      "latitude": 51.743408,
      "longitude": 19.493235,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393857,
      "ems": null
    },
    {
      "latitude": 51.743179,
      "longitude": 19.491899,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672393860,
      "ems": null
    },
    {
      "latitude": 51.742905,
      "longitude": 19.490637,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393863,
      "ems": null
    },
    {
      "latitude": 51.742538,
      "longitude": 19.489227,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672393866,
      "ems": null
    },
    {
      "latitude": 51.742302,
      "longitude": 19.487991,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393869,
      "ems": null
    },
    {
      "latitude": 51.741741,
      "longitude": 19.485397,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393875,
      "ems": null
    },
    {
      "latitude": 51.741135,
      "longitude": 19.482727,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393881,
      "ems": null
    },
    {
      "latitude": 51.740662,
      "longitude": 19.481432,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672393884,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 19.480022,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672393887,
      "ems": null
    },
    {
      "latitude": 51.739746,
      "longitude": 19.478685,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672393890,
      "ems": null
    },
    {
      "latitude": 51.739243,
      "longitude": 19.477276,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672393893,
      "ems": null
    },
    {
      "latitude": 51.738831,
      "longitude": 19.476236,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672393895,
      "ems": null
    },
    {
      "latitude": 51.738144,
      "longitude": 19.474455,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672393899,
      "ems": null
    },
    {
      "latitude": 51.737686,
      "longitude": 19.473267,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672393902,
      "ems": null
    },
    {
      "latitude": 51.737091,
      "longitude": 19.471634,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672393905,
      "ems": null
    },
    {
      "latitude": 51.736526,
      "longitude": 19.468613,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672393911,
      "ems": null
    },
    {
      "latitude": 51.736248,
      "longitude": 19.467087,
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672393914,
      "ems": null
    },
    {
      "latitude": 51.735992,
      "longitude": 19.465843,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393917,
      "ems": null
    },
    {
      "latitude": 51.735672,
      "longitude": 19.464359,
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393920,
      "ems": null
    },
    {
      "latitude": 51.735363,
      "longitude": 19.462967,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "squawk": "2651",
      "timestamp": 1672393923,
      "ems": null
    },
    {
      "latitude": 51.735085,
      "longitude": 19.461594,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393926,
      "ems": null
    },
    {
      "latitude": 51.734802,
      "longitude": 19.460276,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672393929,
      "ems": null
    },
    {
      "latitude": 51.734482,
      "longitude": 19.458866,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672393932,
      "ems": null
    },
    {
      "latitude": 51.7342,
      "longitude": 19.457474,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393935,
      "ems": null
    },
    {
      "latitude": 51.733658,
      "longitude": 19.454634,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672393941,
      "ems": null
    },
    {
      "latitude": 51.733475,
      "longitude": 19.453001,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672393944,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 19.451523,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672393947,
      "ems": null
    },
    {
      "latitude": 51.733063,
      "longitude": 19.450106,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "squawk": "2651",
      "timestamp": 1672393950,
      "ems": null
    },
    {
      "latitude": 51.732571,
      "longitude": 19.447403,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672393956,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.444464,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393962,
      "ems": null
    },
    {
      "latitude": 51.731083,
      "longitude": 19.440918,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672393969,
      "ems": null
    },
    {
      "latitude": 51.730774,
      "longitude": 19.439714,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393972,
      "ems": null
    },
    {
      "latitude": 51.730362,
      "longitude": 19.437933,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672393975,
      "ems": null
    },
    {
      "latitude": 51.730148,
      "longitude": 19.436951,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672393977,
      "ems": null
    },
    {
      "latitude": 51.729492,
      "longitude": 19.433477,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672393985,
      "ems": null
    },
    {
      "latitude": 51.729034,
      "longitude": 19.430771,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672393991,
      "ems": null
    },
    {
      "latitude": 51.728394,
      "longitude": 19.427912,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672393997,
      "ems": null
    },
    {
      "latitude": 51.727776,
      "longitude": 19.425049,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672394003,
      "ems": null
    },
    {
      "latitude": 51.727112,
      "longitude": 19.421972,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394009,
      "ems": null
    },
    {
      "latitude": 51.726471,
      "longitude": 19.419226,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672394014,
      "ems": null
    },
    {
      "latitude": 51.726101,
      "longitude": 19.417419,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672394018,
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
        "kmh": 138.9,
        "kts": 75,
        "mph": 86.3
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394022,
      "ems": null
    },
    {
      "latitude": 51.724655,
      "longitude": 19.410782,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394030,
      "ems": null
    },
    {
      "latitude": 51.723953,
      "longitude": 19.407721,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394036,
      "ems": null
    },
    {
      "latitude": 51.719101,
      "longitude": 19.384336,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672394087,
      "ems": null
    },
    {
      "latitude": 51.718464,
      "longitude": 19.381485,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394093,
      "ems": null
    },
    {
      "latitude": 51.717636,
      "longitude": 19.378176,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672394099,
      "ems": null
    },
    {
      "latitude": 51.716858,
      "longitude": 19.375132,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672394105,
      "ems": null
    },
    {
      "latitude": 51.716183,
      "longitude": 19.37233,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672394111,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.369278,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672394117,
      "ems": null
    },
    {
      "latitude": 51.715019,
      "longitude": 19.367218,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394121,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.365259,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672394125,
      "ems": null
    },
    {
      "latitude": 51.714321,
      "longitude": 19.363556,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672394128,
      "ems": null
    },
    {
      "latitude": 51.71402,
      "longitude": 19.361845,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672394131,
      "ems": null
    },
    {
      "latitude": 51.713718,
      "longitude": 19.359818,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672394134,
      "ems": null
    },
    {
      "latitude": 51.713486,
      "longitude": 19.358292,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672394137,
      "ems": null
    },
    {
      "latitude": 51.713287,
      "longitude": 19.356501,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 262,
      "squawk": "2651",
      "timestamp": 1672394140,
      "ems": null
    },
    {
      "latitude": 51.71315,
      "longitude": 19.354717,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 264,
      "squawk": "2651",
      "timestamp": 1672394143,
      "ems": null
    },
    {
      "latitude": 51.713158,
      "longitude": 19.352875,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 271,
      "squawk": "2651",
      "timestamp": 1672394146,
      "ems": null
    },
    {
      "latitude": 51.713203,
      "longitude": 19.351273,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 275,
      "squawk": "2651",
      "timestamp": 1672394149,
      "ems": null
    },
    {
      "latitude": 51.71339,
      "longitude": 19.349365,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 278,
      "squawk": "2651",
      "timestamp": 1672394152,
      "ems": null
    },
    {
      "latitude": 51.713623,
      "longitude": 19.347763,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 286,
      "squawk": "2651",
      "timestamp": 1672394155,
      "ems": null
    },
    {
      "latitude": 51.714066,
      "longitude": 19.345884,
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
      "heading": 294,
      "squawk": "2651",
      "timestamp": 1672394158,
      "ems": null
    },
    {
      "latitude": 51.714706,
      "longitude": 19.344252,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 303,
      "squawk": "2651",
      "timestamp": 1672394161,
      "ems": null
    },
    {
      "latitude": 51.715347,
      "longitude": 19.342989,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 311,
      "squawk": "2651",
      "timestamp": 1672394164,
      "ems": null
    },
    {
      "latitude": 51.716171,
      "longitude": 19.341803,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 318,
      "squawk": "2651",
      "timestamp": 1672394167,
      "ems": null
    },
    {
      "latitude": 51.717117,
      "longitude": 19.340668,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 326,
      "squawk": "2651",
      "timestamp": 1672394170,
      "ems": null
    },
    {
      "latitude": 51.718094,
      "longitude": 19.339724,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 330,
      "squawk": "2651",
      "timestamp": 1672394173,
      "ems": null
    },
    {
      "latitude": 51.719116,
      "longitude": 19.338913,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 334,
      "squawk": "2651",
      "timestamp": 1672394176,
      "ems": null
    },
    {
      "latitude": 51.720154,
      "longitude": 19.338165,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 335,
      "squawk": "2651",
      "timestamp": 1672394179,
      "ems": null
    },
    {
      "latitude": 51.720383,
      "longitude": 19.338017,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 335,
      "squawk": "2651",
      "timestamp": 1672394180,
      "ems": null
    },
    {
      "latitude": 51.721207,
      "longitude": 19.337347,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 333,
      "squawk": "2651",
      "timestamp": 1672394182,
      "ems": null
    },
    {
      "latitude": 51.722469,
      "longitude": 19.336319,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 333,
      "squawk": "2651",
      "timestamp": 1672394186,
      "ems": null
    },
    {
      "latitude": 51.722992,
      "longitude": 19.335938,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 333,
      "squawk": "2651",
      "timestamp": 1672394188,
      "ems": null
    },
    {
      "latitude": 51.724182,
      "longitude": 19.334972,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 334,
      "squawk": "2651",
      "timestamp": 1672394191,
      "ems": null
    },
    {
      "latitude": 51.725262,
      "longitude": 19.334183,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 333,
      "squawk": "2651",
      "timestamp": 1672394194,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.333267,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 332,
      "squawk": "2651",
      "timestamp": 1672394198,
      "ems": null
    },
    {
      "latitude": 51.728302,
      "longitude": 19.331707,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 333,
      "squawk": "2651",
      "timestamp": 1672394204,
      "ems": null
    },
    {
      "latitude": 51.73027,
      "longitude": 19.330147,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 334,
      "squawk": "2651",
      "timestamp": 1672394210,
      "ems": null
    },
    {
      "latitude": 51.732014,
      "longitude": 19.328918,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 336,
      "squawk": "2651",
      "timestamp": 1672394216,
      "ems": null
    },
    {
      "latitude": 51.734245,
      "longitude": 19.327393,
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
      "heading": 336,
      "squawk": "2651",
      "timestamp": 1672394221,
      "ems": null
    },
    {
      "latitude": 51.735535,
      "longitude": 19.326584,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 340,
      "squawk": "2651",
      "timestamp": 1672394225,
      "ems": null
    },
    {
      "latitude": 51.736633,
      "longitude": 19.326139,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 347,
      "squawk": "2651",
      "timestamp": 1672394228,
      "ems": null
    },
    {
      "latitude": 51.737823,
      "longitude": 19.325768,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672394231,
      "ems": null
    },
    {
      "latitude": 51.73904,
      "longitude": 19.325485,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672394234,
      "ems": null
    },
    {
      "latitude": 51.740204,
      "longitude": 19.325249,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672394237,
      "ems": null
    },
    {
      "latitude": 51.741508,
      "longitude": 19.324951,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 352,
      "squawk": "2651",
      "timestamp": 1672394240,
      "ems": null
    },
    {
      "latitude": 51.742161,
      "longitude": 19.324875,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 353,
      "squawk": "2651",
      "timestamp": 1672394242,
      "ems": null
    },
    {
      "latitude": 51.743744,
      "longitude": 19.32457,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 354,
      "squawk": "2651",
      "timestamp": 1672394246,
      "ems": null
    },
    {
      "latitude": 51.744736,
      "longitude": 19.324358,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 353,
      "squawk": "2651",
      "timestamp": 1672394248,
      "ems": null
    },
    {
      "latitude": 51.746117,
      "longitude": 19.324036,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 349,
      "squawk": "2651",
      "timestamp": 1672394252,
      "ems": null
    },
    {
      "latitude": 51.747234,
      "longitude": 19.323654,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672394255,
      "ems": null
    },
    {
      "latitude": 51.749405,
      "longitude": 19.322947,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 347,
      "squawk": "2651",
      "timestamp": 1672394261,
      "ems": null
    },
    {
      "latitude": 51.751751,
      "longitude": 19.322052,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 347,
      "squawk": "2651",
      "timestamp": 1672394266,
      "ems": null
    },
    {
      "latitude": 51.752823,
      "longitude": 19.321671,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 347,
      "squawk": "2651",
      "timestamp": 1672394269,
      "ems": null
    },
    {
      "latitude": 51.754028,
      "longitude": 19.321239,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 347,
      "squawk": "2651",
      "timestamp": 1672394272,
      "ems": null
    },
    {
      "latitude": 51.755173,
      "longitude": 19.320795,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 346,
      "squawk": "2651",
      "timestamp": 1672394275,
      "ems": null
    },
    {
      "latitude": 51.756134,
      "longitude": 19.320423,
      "altitude": {
        "feet": 3150,
        "meters": 960
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 345,
      "squawk": "2651",
      "timestamp": 1672394278,
      "ems": null
    },
    {
      "latitude": 51.758732,
      "longitude": 19.319305,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 344,
      "squawk": "2651",
      "timestamp": 1672394285,
      "ems": null
    },
    {
      "latitude": 51.760921,
      "longitude": 19.318314,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 343,
      "squawk": "2651",
      "timestamp": 1672394291,
      "ems": null
    },
    {
      "latitude": 51.762085,
      "longitude": 19.31778,
      "altitude": {
        "feet": 3325,
        "meters": 1013
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
      "heading": 342,
      "squawk": "2651",
      "timestamp": 1672394294,
      "ems": null
    },
    {
      "latitude": 51.763275,
      "longitude": 19.317158,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 342,
      "squawk": "2651",
      "timestamp": 1672394297,
      "ems": null
    },
    {
      "latitude": 51.764236,
      "longitude": 19.316637,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 342,
      "squawk": "2651",
      "timestamp": 1672394300,
      "ems": null
    },
    {
      "latitude": 51.765484,
      "longitude": 19.315948,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 340,
      "squawk": "2651",
      "timestamp": 1672394303,
      "ems": null
    },
    {
      "latitude": 51.766602,
      "longitude": 19.315262,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 338,
      "squawk": "2651",
      "timestamp": 1672394306,
      "ems": null
    },
    {
      "latitude": 51.76767,
      "longitude": 19.314558,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 337,
      "squawk": "2651",
      "timestamp": 1672394309,
      "ems": null
    },
    {
      "latitude": 51.768723,
      "longitude": 19.31389,
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
      "heading": 339,
      "squawk": "2651",
      "timestamp": 1672394312,
      "ems": null
    },
    {
      "latitude": 51.771114,
      "longitude": 19.312515,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 340,
      "squawk": "2651",
      "timestamp": 1672394318,
      "ems": null
    },
    {
      "latitude": 51.773163,
      "longitude": 19.311367,
      "altitude": {
        "feet": 3675,
        "meters": 1120
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
      "heading": 341,
      "squawk": "2651",
      "timestamp": 1672394324,
      "ems": null
    },
    {
      "latitude": 51.775585,
      "longitude": 19.31015,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 343,
      "squawk": "2651",
      "timestamp": 1672394330,
      "ems": null
    },
    {
      "latitude": 51.777214,
      "longitude": 19.309387,
      "altitude": {
        "feet": 3750,
        "meters": 1143
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
      "heading": 344,
      "squawk": "2651",
      "timestamp": 1672394334,
      "ems": null
    },
    {
      "latitude": 51.778244,
      "longitude": 19.308918,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 343,
      "squawk": "2651",
      "timestamp": 1672394336,
      "ems": null
    },
    {
      "latitude": 51.779846,
      "longitude": 19.308174,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 344,
      "squawk": "2651",
      "timestamp": 1672394341,
      "ems": null
    },
    {
      "latitude": 51.783005,
      "longitude": 19.306765,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 344,
      "squawk": "2651",
      "timestamp": 1672394349,
      "ems": null
    },
    {
      "latitude": 51.78598,
      "longitude": 19.305428,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "squawk": "2651",
      "timestamp": 1672394356,
      "ems": null
    },
    {
      "latitude": 51.788544,
      "longitude": 19.304316,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "squawk": "2651",
      "timestamp": 1672394362,
      "ems": null
    },
    {
      "latitude": 51.791153,
      "longitude": 19.30335,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 351,
      "squawk": "2651",
      "timestamp": 1672394368,
      "ems": null
    },
    {
      "latitude": 51.792343,
      "longitude": 19.303202,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 354,
      "squawk": "2651",
      "timestamp": 1672394371,
      "ems": null
    },
    {
      "latitude": 51.793789,
      "longitude": 19.303055,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 357,
      "squawk": "2651",
      "timestamp": 1672394374,
      "ems": null
    },
    {
      "latitude": 51.795135,
      "longitude": 19.303055,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "squawk": "2651",
      "timestamp": 1672394377,
      "ems": null
    },
    {
      "latitude": 51.796535,
      "longitude": 19.303131,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 3,
      "squawk": "2651",
      "timestamp": 1672394380,
      "ems": null
    },
    {
      "latitude": 51.797836,
      "longitude": 19.303284,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 5,
      "squawk": "2651",
      "timestamp": 1672394383,
      "ems": null
    },
    {
      "latitude": 51.799232,
      "longitude": 19.303589,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 8,
      "squawk": "2651",
      "timestamp": 1672394386,
      "ems": null
    },
    {
      "latitude": 51.800724,
      "longitude": 19.304047,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 11,
      "squawk": "2651",
      "timestamp": 1672394389,
      "ems": null
    },
    {
      "latitude": 51.802074,
      "longitude": 19.304581,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 14,
      "squawk": "2651",
      "timestamp": 1672394392,
      "ems": null
    },
    {
      "latitude": 51.803741,
      "longitude": 19.305502,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 19,
      "squawk": "2651",
      "timestamp": 1672394395,
      "ems": null
    },
    {
      "latitude": 51.805099,
      "longitude": 19.306488,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 26,
      "squawk": "2651",
      "timestamp": 1672394398,
      "ems": null
    },
    {
      "latitude": 51.806496,
      "longitude": 19.307785,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 32,
      "squawk": "2651",
      "timestamp": 1672394401,
      "ems": null
    },
    {
      "latitude": 51.807861,
      "longitude": 19.309362,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 37,
      "squawk": "2651",
      "timestamp": 1672394404,
      "ems": null
    },
    {
      "latitude": 51.809101,
      "longitude": 19.310989,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 40,
      "squawk": "2651",
      "timestamp": 1672394407,
      "ems": null
    },
    {
      "latitude": 51.810333,
      "longitude": 19.313,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 47,
      "squawk": "2651",
      "timestamp": 1672394410,
      "ems": null
    },
    {
      "latitude": 51.811432,
      "longitude": 19.315153,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 52,
      "squawk": "2651",
      "timestamp": 1672394413,
      "ems": null
    },
    {
      "latitude": 51.812347,
      "longitude": 19.317453,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 58,
      "squawk": "2651",
      "timestamp": 1672394416,
      "ems": null
    },
    {
      "latitude": 51.813263,
      "longitude": 19.320274,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672394419,
      "ems": null
    },
    {
      "latitude": 51.813896,
      "longitude": 19.322739,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672394422,
      "ems": null
    },
    {
      "latitude": 51.814503,
      "longitude": 19.32579,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672394425,
      "ems": null
    },
    {
      "latitude": 51.814781,
      "longitude": 19.328766,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672394428,
      "ems": null
    },
    {
      "latitude": 51.814877,
      "longitude": 19.33197,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 90,
      "squawk": "2651",
      "timestamp": 1672394431,
      "ems": null
    },
    {
      "latitude": 51.814728,
      "longitude": 19.334972,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 95,
      "squawk": "2651",
      "timestamp": 1672394434,
      "ems": null
    },
    {
      "latitude": 51.814545,
      "longitude": 19.337793,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 95,
      "squawk": "2651",
      "timestamp": 1672394437,
      "ems": null
    },
    {
      "latitude": 51.814362,
      "longitude": 19.341431,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 95,
      "squawk": "2651",
      "timestamp": 1672394441,
      "ems": null
    },
    {
      "latitude": 51.814133,
      "longitude": 19.344549,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 96,
      "squawk": "2651",
      "timestamp": 1672394444,
      "ems": null
    },
    {
      "latitude": 51.813992,
      "longitude": 19.347076,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 96,
      "squawk": "2651",
      "timestamp": 1672394446,
      "ems": null
    },
    {
      "latitude": 51.813675,
      "longitude": 19.350636,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 98,
      "squawk": "2651",
      "timestamp": 1672394450,
      "ems": null
    },
    {
      "latitude": 51.813354,
      "longitude": 19.353605,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 100,
      "squawk": "2651",
      "timestamp": 1672394453,
      "ems": null
    },
    {
      "latitude": 51.812943,
      "longitude": 19.356426,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 102,
      "squawk": "2651",
      "timestamp": 1672394456,
      "ems": null
    },
    {
      "latitude": 51.8125,
      "longitude": 19.35936,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 105,
      "squawk": "2651",
      "timestamp": 1672394458,
      "ems": null
    },
    {
      "latitude": 51.811943,
      "longitude": 19.362564,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 106,
      "squawk": "2651",
      "timestamp": 1672394462,
      "ems": null
    },
    {
      "latitude": 51.81134,
      "longitude": 19.365408,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 108,
      "squawk": "2651",
      "timestamp": 1672394465,
      "ems": null
    },
    {
      "latitude": 51.810654,
      "longitude": 19.368599,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 109,
      "squawk": "2651",
      "timestamp": 1672394468,
      "ems": null
    },
    {
      "latitude": 51.810081,
      "longitude": 19.371262,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 109,
      "squawk": "2651",
      "timestamp": 1672394470,
      "ems": null
    },
    {
      "latitude": 51.809429,
      "longitude": 19.374237,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 109,
      "squawk": "2651",
      "timestamp": 1672394473,
      "ems": null
    },
    {
      "latitude": 51.808731,
      "longitude": 19.377285,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 110,
      "squawk": "2651",
      "timestamp": 1672394477,
      "ems": null
    },
    {
      "latitude": 51.808044,
      "longitude": 19.380329,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 109,
      "squawk": "2651",
      "timestamp": 1672394480,
      "ems": null
    },
    {
      "latitude": 51.807285,
      "longitude": 19.383621,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 109,
      "squawk": "2651",
      "timestamp": 1672394483,
      "ems": null
    },
    {
      "latitude": 51.801609,
      "longitude": 19.415207,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 103,
      "squawk": "2651",
      "timestamp": 1672394514,
      "ems": null
    },
    {
      "latitude": 51.800678,
      "longitude": 19.421539,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 102,
      "squawk": "2651",
      "timestamp": 1672394520,
      "ems": null
    },
    {
      "latitude": 51.79985,
      "longitude": 19.427763,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 102,
      "squawk": "2651",
      "timestamp": 1672394526,
      "ems": null
    },
    {
      "latitude": 51.799046,
      "longitude": 19.433975,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394532,
      "ems": null
    },
    {
      "latitude": 51.798164,
      "longitude": 19.440536,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394538,
      "ems": null
    },
    {
      "latitude": 51.797371,
      "longitude": 19.446945,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394544,
      "ems": null
    },
    {
      "latitude": 51.796535,
      "longitude": 19.453354,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394550,
      "ems": null
    },
    {
      "latitude": 51.795731,
      "longitude": 19.459385,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "squawk": "2651",
      "timestamp": 1672394555,
      "ems": null
    },
    {
      "latitude": 51.795044,
      "longitude": 19.464878,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394562,
      "ems": null
    },
    {
      "latitude": 51.794128,
      "longitude": 19.472525,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "squawk": "2651",
      "timestamp": 1672394568,
      "ems": null
    },
    {
      "latitude": 51.793304,
      "longitude": 19.478834,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394574,
      "ems": null
    },
    {
      "latitude": 51.792526,
      "longitude": 19.484995,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 102,
      "squawk": "2651",
      "timestamp": 1672394580,
      "ems": null
    },
    {
      "latitude": 51.791691,
      "longitude": 19.491196,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 102,
      "squawk": "2651",
      "timestamp": 1672394586,
      "ems": null
    },
    {
      "latitude": 51.790806,
      "longitude": 19.497528,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 103,
      "squawk": "2651",
      "timestamp": 1672394592,
      "ems": null
    },
    {
      "latitude": 51.789783,
      "longitude": 19.504318,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 103,
      "squawk": "2651",
      "timestamp": 1672394598,
      "ems": null
    },
    {
      "latitude": 51.788864,
      "longitude": 19.510679,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 103,
      "squawk": "2651",
      "timestamp": 1672394604,
      "ems": null
    },
    {
      "latitude": 51.788013,
      "longitude": 19.516754,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 102,
      "squawk": "2651",
      "timestamp": 1672394610,
      "ems": null
    },
    {
      "latitude": 51.787128,
      "longitude": 19.523315,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 102,
      "squawk": "2651",
      "timestamp": 1672394616,
      "ems": null
    },
    {
      "latitude": 51.786346,
      "longitude": 19.528866,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394622,
      "ems": null
    },
    {
      "latitude": 51.785431,
      "longitude": 19.536066,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394628,
      "ems": null
    },
    {
      "latitude": 51.784698,
      "longitude": 19.541782,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394634,
      "ems": null
    },
    {
      "latitude": 51.783875,
      "longitude": 19.548166,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394640,
      "ems": null
    },
    {
      "latitude": 51.783081,
      "longitude": 19.554672,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394645,
      "ems": null
    },
    {
      "latitude": 51.782227,
      "longitude": 19.56138,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394652,
      "ems": null
    },
    {
      "latitude": 51.781498,
      "longitude": 19.567413,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394657,
      "ems": null
    },
    {
      "latitude": 51.780704,
      "longitude": 19.574051,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394664,
      "ems": null
    },
    {
      "latitude": 51.780006,
      "longitude": 19.579773,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394670,
      "ems": null
    },
    {
      "latitude": 51.77903,
      "longitude": 19.587936,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "2651",
      "timestamp": 1672394677,
      "ems": null
    },
    {
      "latitude": 51.77829,
      "longitude": 19.594265,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 100,
      "squawk": "2651",
      "timestamp": 1672394683,
      "ems": null
    },
    {
      "latitude": 51.777328,
      "longitude": 19.602133,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 101,
      "squawk": "2651",
      "timestamp": 1672394690,
      "ems": null
    },
    {
      "latitude": 51.77655,
      "longitude": 19.60874,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 100,
      "squawk": "2651",
      "timestamp": 1672394696,
      "ems": null
    },
    {
      "latitude": 51.775909,
      "longitude": 19.613876,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 100,
      "squawk": "2651",
      "timestamp": 1672394701,
      "ems": null
    },
    {
      "latitude": 51.775211,
      "longitude": 19.621582,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 96,
      "squawk": "2651",
      "timestamp": 1672394708,
      "ems": null
    },
    {
      "latitude": 51.775166,
      "longitude": 19.624863,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 90,
      "squawk": "2651",
      "timestamp": 1672394711,
      "ems": null
    },
    {
      "latitude": 51.775269,
      "longitude": 19.627892,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 85,
      "squawk": "2651",
      "timestamp": 1672394714,
      "ems": null
    },
    {
      "latitude": 51.775585,
      "longitude": 19.631119,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 79,
      "squawk": "2651",
      "timestamp": 1672394717,
      "ems": null
    },
    {
      "latitude": 51.776093,
      "longitude": 19.634275,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672394720,
      "ems": null
    },
    {
      "latitude": 51.776703,
      "longitude": 19.636917,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672394723,
      "ems": null
    },
    {
      "latitude": 51.777374,
      "longitude": 19.63925,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672394726,
      "ems": null
    },
    {
      "latitude": 51.778191,
      "longitude": 19.641953,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672394729,
      "ems": null
    },
    {
      "latitude": 51.779297,
      "longitude": 19.645336,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672394732,
      "ems": null
    },
    {
      "latitude": 51.780212,
      "longitude": 19.648008,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672394735,
      "ems": null
    },
    {
      "latitude": 51.78038,
      "longitude": 19.648438,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672394738,
      "ems": null
    },
    {
      "latitude": 51.782089,
      "longitude": 19.653427,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672394741,
      "ems": null
    },
    {
      "latitude": 51.782894,
      "longitude": 19.655609,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672394744,
      "ems": null
    },
    {
      "latitude": 51.784286,
      "longitude": 19.659662,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672394748,
      "ems": null
    },
    {
      "latitude": 51.78513,
      "longitude": 19.662018,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672394751,
      "ems": null
    },
    {
      "latitude": 51.785889,
      "longitude": 19.664265,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672394753,
      "ems": null
    },
    {
      "latitude": 51.787968,
      "longitude": 19.67041,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672394760,
      "ems": null
    },
    {
      "latitude": 51.789734,
      "longitude": 19.675772,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672394766,
      "ems": null
    },
    {
      "latitude": 51.791412,
      "longitude": 19.681015,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672394772,
      "ems": null
    },
    {
      "latitude": 51.79332,
      "longitude": 19.685822,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 54,
      "squawk": "2651",
      "timestamp": 1672394778,
      "ems": null
    },
    {
      "latitude": 51.793671,
      "longitude": 19.68646,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 51,
      "squawk": "2651",
      "timestamp": 1672394779,
      "ems": null
    },
    {
      "latitude": 51.795547,
      "longitude": 19.689505,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 42,
      "squawk": "2651",
      "timestamp": 1672394784,
      "ems": null
    },
    {
      "latitude": 51.797417,
      "longitude": 19.691391,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 28,
      "squawk": "2651",
      "timestamp": 1672394788,
      "ems": null
    },
    {
      "latitude": 51.799419,
      "longitude": 19.692612,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 15,
      "squawk": "2651",
      "timestamp": 1672394792,
      "ems": null
    },
    {
      "latitude": 51.801559,
      "longitude": 19.693146,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 3,
      "squawk": "2651",
      "timestamp": 1672394796,
      "ems": null
    },
    {
      "latitude": 51.80291,
      "longitude": 19.692993,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 355,
      "squawk": "2651",
      "timestamp": 1672394799,
      "ems": null
    },
    {
      "latitude": 51.804214,
      "longitude": 19.692612,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 347,
      "squawk": "2651",
      "timestamp": 1672394802,
      "ems": null
    },
    {
      "latitude": 51.805424,
      "longitude": 19.692001,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 339,
      "squawk": "2651",
      "timestamp": 1672394805,
      "ems": null
    },
    {
      "latitude": 51.806442,
      "longitude": 19.691286,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 334,
      "squawk": "2651",
      "timestamp": 1672394808,
      "ems": null
    },
    {
      "latitude": 51.807426,
      "longitude": 19.690323,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 328,
      "squawk": "2651",
      "timestamp": 1672394812,
      "ems": null
    },
    {
      "latitude": 51.808544,
      "longitude": 19.689178,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 325,
      "squawk": "2651",
      "timestamp": 1672394814,
      "ems": null
    },
    {
      "latitude": 51.809464,
      "longitude": 19.688019,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 320,
      "squawk": "2651",
      "timestamp": 1672394817,
      "ems": null
    },
    {
      "latitude": 51.810287,
      "longitude": 19.686758,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 316,
      "squawk": "2651",
      "timestamp": 1672394820,
      "ems": null
    },
    {
      "latitude": 51.811111,
      "longitude": 19.685421,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 312,
      "squawk": "2651",
      "timestamp": 1672394823,
      "ems": null
    },
    {
      "latitude": 51.811756,
      "longitude": 19.684143,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 307,
      "squawk": "2651",
      "timestamp": 1672394827,
      "ems": null
    },
    {
      "latitude": 51.812393,
      "longitude": 19.682674,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 303,
      "squawk": "2651",
      "timestamp": 1672394829,
      "ems": null
    },
    {
      "latitude": 51.813034,
      "longitude": 19.680967,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 299,
      "squawk": "2651",
      "timestamp": 1672394833,
      "ems": null
    },
    {
      "latitude": 51.813431,
      "longitude": 19.679642,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 295,
      "squawk": "2651",
      "timestamp": 1672394835,
      "ems": null
    },
    {
      "latitude": 51.813896,
      "longitude": 19.677658,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 289,
      "squawk": "2651",
      "timestamp": 1672394838,
      "ems": null
    },
    {
      "latitude": 51.814224,
      "longitude": 19.675903,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 284,
      "squawk": "2651",
      "timestamp": 1672394841,
      "ems": null
    },
    {
      "latitude": 51.814407,
      "longitude": 19.674286,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 278,
      "squawk": "2651",
      "timestamp": 1672394845,
      "ems": null
    },
    {
      "latitude": 51.814499,
      "longitude": 19.672283,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 274,
      "squawk": "2651",
      "timestamp": 1672394848,
      "ems": null
    },
    {
      "latitude": 51.814545,
      "longitude": 19.670797,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 270,
      "squawk": "2651",
      "timestamp": 1672394850,
      "ems": null
    },
    {
      "latitude": 51.814453,
      "longitude": 19.669165,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 265,
      "squawk": "2651",
      "timestamp": 1672394854,
      "ems": null
    },
    {
      "latitude": 51.81427,
      "longitude": 19.667086,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672394857,
      "ems": null
    },
    {
      "latitude": 51.813995,
      "longitude": 19.665304,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672394860,
      "ems": null
    },
    {
      "latitude": 51.813629,
      "longitude": 19.663746,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672394863,
      "ems": null
    },
    {
      "latitude": 51.813263,
      "longitude": 19.662409,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672394866,
      "ems": null
    },
    {
      "latitude": 51.812546,
      "longitude": 19.660416,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672394869,
      "ems": null
    },
    {
      "latitude": 51.812035,
      "longitude": 19.659195,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 232,
      "squawk": "2651",
      "timestamp": 1672394872,
      "ems": null
    },
    {
      "latitude": 51.811104,
      "longitude": 19.65744,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 229,
      "squawk": "2651",
      "timestamp": 1672394875,
      "ems": null
    },
    {
      "latitude": 51.810173,
      "longitude": 19.655991,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 225,
      "squawk": "2651",
      "timestamp": 1672394878,
      "ems": null
    },
    {
      "latitude": 51.809418,
      "longitude": 19.654987,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 220,
      "squawk": "2651",
      "timestamp": 1672394880,
      "ems": null
    },
    {
      "latitude": 51.807999,
      "longitude": 19.653576,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 210,
      "squawk": "2651",
      "timestamp": 1672394884,
      "ems": null
    },
    {
      "latitude": 51.807426,
      "longitude": 19.653015,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 207,
      "squawk": "2651",
      "timestamp": 1672394885,
      "ems": null
    },
    {
      "latitude": 51.805664,
      "longitude": 19.651869,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 200,
      "squawk": "2651",
      "timestamp": 1672394890,
      "ems": null
    },
    {
      "latitude": 51.80452,
      "longitude": 19.651276,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 198,
      "squawk": "2651",
      "timestamp": 1672394892,
      "ems": null
    },
    {
      "latitude": 51.803787,
      "longitude": 19.650829,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 198,
      "squawk": "2651",
      "timestamp": 1672394895,
      "ems": null
    },
    {
      "latitude": 51.802029,
      "longitude": 19.649887,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 198,
      "squawk": "2651",
      "timestamp": 1672394898,
      "ems": null
    },
    {
      "latitude": 51.800213,
      "longitude": 19.648895,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 199,
      "squawk": "2651",
      "timestamp": 1672394902,
      "ems": null
    },
    {
      "latitude": 51.798862,
      "longitude": 19.648132,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "squawk": "2651",
      "timestamp": 1672394905,
      "ems": null
    },
    {
      "latitude": 51.797653,
      "longitude": 19.647415,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 200,
      "squawk": "2651",
      "timestamp": 1672394907,
      "ems": null
    },
    {
      "latitude": 51.796417,
      "longitude": 19.646599,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 200,
      "squawk": "2651",
      "timestamp": 1672394910,
      "ems": null
    },
    {
      "latitude": 51.794998,
      "longitude": 19.645708,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 201,
      "squawk": "2651",
      "timestamp": 1672394913,
      "ems": null
    },
    {
      "latitude": 51.793671,
      "longitude": 19.644892,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "2651",
      "timestamp": 1672394916,
      "ems": null
    },
    {
      "latitude": 51.790901,
      "longitude": 19.643173,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 201,
      "squawk": "2651",
      "timestamp": 1672394923,
      "ems": null
    },
    {
      "latitude": 51.788528,
      "longitude": 19.641647,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 201,
      "squawk": "2651",
      "timestamp": 1672394928,
      "ems": null
    },
    {
      "latitude": 51.785686,
      "longitude": 19.639893,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 201,
      "squawk": "2651",
      "timestamp": 1672394935,
      "ems": null
    },
    {
      "latitude": 51.783081,
      "longitude": 19.638062,
      "altitude": {
        "feet": 3725,
        "meters": 1135
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
      "heading": 206,
      "squawk": "2651",
      "timestamp": 1672394940,
      "ems": null
    },
    {
      "latitude": 51.781815,
      "longitude": 19.636948,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 211,
      "squawk": "2651",
      "timestamp": 1672394943,
      "ems": null
    },
    {
      "latitude": 51.780304,
      "longitude": 19.635017,
      "altitude": {
        "feet": 3650,
        "meters": 1113
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
      "heading": 219,
      "squawk": "2651",
      "timestamp": 1672394947,
      "ems": null
    },
    {
      "latitude": 51.779404,
      "longitude": 19.63356,
      "altitude": {
        "feet": 3625,
        "meters": 1105
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
      "heading": 227,
      "squawk": "2651",
      "timestamp": 1672394949,
      "ems": null
    },
    {
      "latitude": 51.77861,
      "longitude": 19.631678,
      "altitude": {
        "feet": 3600,
        "meters": 1097
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
      "heading": 233,
      "squawk": "2651",
      "timestamp": 1672394953,
      "ems": null
    },
    {
      "latitude": 51.777924,
      "longitude": 19.629673,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672394956,
      "ems": null
    },
    {
      "latitude": 51.777821,
      "longitude": 19.629364,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672394958,
      "ems": null
    },
    {
      "latitude": 51.777054,
      "longitude": 19.625961,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394961,
      "ems": null
    },
    {
      "latitude": 51.776608,
      "longitude": 19.623871,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672394964,
      "ems": null
    },
    {
      "latitude": 51.776367,
      "longitude": 19.622622,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394966,
      "ems": null
    },
    {
      "latitude": 51.775726,
      "longitude": 19.619875,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672394970,
      "ems": null
    },
    {
      "latitude": 51.774887,
      "longitude": 19.617386,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672394974,
      "ems": null
    },
    {
      "latitude": 51.774124,
      "longitude": 19.615421,
      "altitude": {
        "feet": 3350,
        "meters": 1021
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
      "heading": 234,
      "squawk": "2651",
      "timestamp": 1672394978,
      "ems": null
    },
    {
      "latitude": 51.772522,
      "longitude": 19.612005,
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
        "fpm": -1472,
        "ms": -7.5
      },
      "heading": 232,
      "squawk": "2651",
      "timestamp": 1672394984,
      "ems": null
    },
    {
      "latitude": 51.77179,
      "longitude": 19.610447,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 233,
      "squawk": "2651",
      "timestamp": 1672394987,
      "ems": null
    },
    {
      "latitude": 51.771011,
      "longitude": 19.60874,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": -1536,
        "ms": -7.8
      },
      "heading": 233,
      "squawk": "2651",
      "timestamp": 1672394990,
      "ems": null
    },
    {
      "latitude": 51.770279,
      "longitude": 19.607086,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 235,
      "squawk": "2651",
      "timestamp": 1672394993,
      "ems": null
    },
    {
      "latitude": 51.769581,
      "longitude": 19.605408,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672394995,
      "ems": null
    },
    {
      "latitude": 51.76886,
      "longitude": 19.603619,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672394999,
      "ems": null
    },
    {
      "latitude": 51.767578,
      "longitude": 19.600203,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672395005,
      "ems": null
    },
    {
      "latitude": 51.767029,
      "longitude": 19.598495,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672395008,
      "ems": null
    },
    {
      "latitude": 51.766506,
      "longitude": 19.596863,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672395010,
      "ems": null
    },
    {
      "latitude": 51.765976,
      "longitude": 19.595156,
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
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672395014,
      "ems": null
    },
    {
      "latitude": 51.765484,
      "longitude": 19.593582,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672395016,
      "ems": null
    },
    {
      "latitude": 51.764923,
      "longitude": 19.591827,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672395019,
      "ems": null
    },
    {
      "latitude": 51.764374,
      "longitude": 19.590033,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672395023,
      "ems": null
    },
    {
      "latitude": 51.763809,
      "longitude": 19.588242,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672395026,
      "ems": null
    },
    {
      "latitude": 51.763275,
      "longitude": 19.586618,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672395029,
      "ems": null
    },
    {
      "latitude": 51.762634,
      "longitude": 19.584614,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672395032,
      "ems": null
    },
    {
      "latitude": 51.76162,
      "longitude": 19.581528,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672395037,
      "ems": null
    },
    {
      "latitude": 51.760529,
      "longitude": 19.57786,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672395044,
      "ems": null
    },
    {
      "latitude": 51.760071,
      "longitude": 19.576153,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672395047,
      "ems": null
    },
    {
      "latitude": 51.759663,
      "longitude": 19.574203,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395050,
      "ems": null
    },
    {
      "latitude": 51.759384,
      "longitude": 19.572515,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395053,
      "ems": null
    },
    {
      "latitude": 51.75906,
      "longitude": 19.570923,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395056,
      "ems": null
    },
    {
      "latitude": 51.75864,
      "longitude": 19.568939,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395059,
      "ems": null
    },
    {
      "latitude": 51.758331,
      "longitude": 19.567318,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395062,
      "ems": null
    },
    {
      "latitude": 51.757965,
      "longitude": 19.565388,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "squawk": "2651",
      "timestamp": 1672395065,
      "ems": null
    },
    {
      "latitude": 51.757645,
      "longitude": 19.563606,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672395068,
      "ems": null
    },
    {
      "latitude": 51.757336,
      "longitude": 19.561768,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672395071,
      "ems": null
    },
    {
      "latitude": 51.756638,
      "longitude": 19.558336,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395077,
      "ems": null
    },
    {
      "latitude": 51.755997,
      "longitude": 19.554996,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "squawk": "2651",
      "timestamp": 1672395083,
      "ems": null
    },
    {
      "latitude": 51.755337,
      "longitude": 19.551468,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "squawk": "2651",
      "timestamp": 1672395089,
      "ems": null
    },
    {
      "latitude": 51.754669,
      "longitude": 19.548166,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395095,
      "ems": null
    },
    {
      "latitude": 51.754032,
      "longitude": 19.54483,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395101,
      "ems": null
    },
    {
      "latitude": 51.753334,
      "longitude": 19.541473,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395107,
      "ems": null
    },
    {
      "latitude": 51.752975,
      "longitude": 19.540001,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "squawk": "2651",
      "timestamp": 1672395110,
      "ems": null
    },
    {
      "latitude": 51.752262,
      "longitude": 19.536819,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395116,
      "ems": null
    },
    {
      "latitude": 51.751556,
      "longitude": 19.533766,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395122,
      "ems": null
    },
    {
      "latitude": 51.750866,
      "longitude": 19.53064,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395128,
      "ems": null
    },
    {
      "latitude": 51.750214,
      "longitude": 19.527588,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395134,
      "ems": null
    },
    {
      "latitude": 51.749561,
      "longitude": 19.524689,
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395140,
      "ems": null
    },
    {
      "latitude": 51.748959,
      "longitude": 19.521866,
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395146,
      "ems": null
    },
    {
      "latitude": 51.748352,
      "longitude": 19.519142,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395153,
      "ems": null
    },
    {
      "latitude": 51.747665,
      "longitude": 19.516396,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672395159,
      "ems": null
    },
    {
      "latitude": 51.747047,
      "longitude": 19.513702,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395164,
      "ems": null
    },
    {
      "latitude": 51.746384,
      "longitude": 19.511051,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672395170,
      "ems": null
    },
    {
      "latitude": 51.745697,
      "longitude": 19.508305,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395176,
      "ems": null
    },
    {
      "latitude": 51.745102,
      "longitude": 19.505558,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395183,
      "ems": null
    },
    {
      "latitude": 51.744553,
      "longitude": 19.502811,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395189,
      "ems": null
    },
    {
      "latitude": 51.744049,
      "longitude": 19.500214,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395194,
      "ems": null
    },
    {
      "latitude": 51.743744,
      "longitude": 19.498749,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672395198,
      "ems": null
    },
    {
      "latitude": 51.743511,
      "longitude": 19.497299,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672395201,
      "ems": null
    },
    {
      "latitude": 51.743233,
      "longitude": 19.495697,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672395204,
      "ems": null
    },
    {
      "latitude": 51.743046,
      "longitude": 19.494324,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672395207,
      "ems": null
    },
    {
      "latitude": 51.742439,
      "longitude": 19.491043,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672395213,
      "ems": null
    },
    {
      "latitude": 51.741898,
      "longitude": 19.488262,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672395219,
      "ems": null
    },
    {
      "latitude": 51.741302,
      "longitude": 19.484995,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672395225,
      "ems": null
    },
    {
      "latitude": 51.740799,
      "longitude": 19.4821,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672395231,
      "ems": null
    },
    {
      "latitude": 51.740341,
      "longitude": 19.479057,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672395237,
      "ems": null
    },
    {
      "latitude": 51.739834,
      "longitude": 19.476166,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672395243,
      "ems": null
    },
    {
      "latitude": 51.739288,
      "longitude": 19.472748,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672395249,
      "ems": null
    },
    {
      "latitude": 51.738831,
      "longitude": 19.469927,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672395255,
      "ems": null
    },
    {
      "latitude": 51.738064,
      "longitude": 19.467239,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672395261,
      "ems": null
    },
    {
      "latitude": 51.737411,
      "longitude": 19.465546,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672395264,
      "ems": null
    },
    {
      "latitude": 51.736954,
      "longitude": 19.464285,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672395267,
      "ems": null
    },
    {
      "latitude": 51.73645,
      "longitude": 19.462873,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672395270,
      "ems": null
    },
    {
      "latitude": 51.736202,
      "longitude": 19.461823,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672395273,
      "ems": null
    },
    {
      "latitude": 51.735764,
      "longitude": 19.45998,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672395276,
      "ems": null
    },
    {
      "latitude": 51.735352,
      "longitude": 19.45842,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672395279,
      "ems": null
    },
    {
      "latitude": 51.734665,
      "longitude": 19.455673,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395285,
      "ems": null
    },
    {
      "latitude": 51.734341,
      "longitude": 19.454117,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395288,
      "ems": null
    },
    {
      "latitude": 51.733967,
      "longitude": 19.452744,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672395291,
      "ems": null
    },
    {
      "latitude": 51.733501,
      "longitude": 19.450989,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672395294,
      "ems": null
    },
    {
      "latitude": 51.733109,
      "longitude": 19.449438,
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672395297,
      "ems": null
    },
    {
      "latitude": 51.732803,
      "longitude": 19.448242,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672395300,
      "ems": null
    },
    {
      "latitude": 51.731964,
      "longitude": 19.44491,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "squawk": "2651",
      "timestamp": 1672395306,
      "ems": null
    },
    {
      "latitude": 51.731415,
      "longitude": 19.442312,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395312,
      "ems": null
    },
    {
      "latitude": 51.730774,
      "longitude": 19.439119,
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395318,
      "ems": null
    },
    {
      "latitude": 51.730408,
      "longitude": 19.437487,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395324,
      "ems": null
    },
    {
      "latitude": 51.729683,
      "longitude": 19.433975,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395330,
      "ems": null
    },
    {
      "latitude": 51.729359,
      "longitude": 19.432526,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672395332,
      "ems": null
    },
    {
      "latitude": 51.728519,
      "longitude": 19.428482,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395340,
      "ems": null
    },
    {
      "latitude": 51.727871,
      "longitude": 19.425735,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395346,
      "ems": null
    },
    {
      "latitude": 51.727219,
      "longitude": 19.422684,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395352,
      "ems": null
    },
    {
      "latitude": 51.726654,
      "longitude": 19.419968,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395357,
      "ems": null
    },
    {
      "latitude": 51.726055,
      "longitude": 19.417114,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395363,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.414995,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395368,
      "ems": null
    },
    {
      "latitude": 51.724422,
      "longitude": 19.409866,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395379,
      "ems": null
    },
    {
      "latitude": 51.723957,
      "longitude": 19.407654,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395383,
      "ems": null
    },
    {
      "latitude": 51.718838,
      "longitude": 19.383621,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672395436,
      "ems": null
    },
    {
      "latitude": 51.718048,
      "longitude": 19.379425,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672395444,
      "ems": null
    },
    {
      "latitude": 51.71727,
      "longitude": 19.375652,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395451,
      "ems": null
    },
    {
      "latitude": 51.716602,
      "longitude": 19.372406,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395457,
      "ems": null
    },
    {
      "latitude": 51.716263,
      "longitude": 19.370827,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672395460,
      "ems": null
    },
    {
      "latitude": 51.715393,
      "longitude": 19.367523,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672395466,
      "ems": null
    },
    {
      "latitude": 51.714935,
      "longitude": 19.365852,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672395469,
      "ems": null
    },
    {
      "latitude": 51.714523,
      "longitude": 19.364145,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672395472,
      "ems": null
    },
    {
      "latitude": 51.714138,
      "longitude": 19.36264,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672395475,
      "ems": null
    },
    {
      "latitude": 51.713345,
      "longitude": 19.359131,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395481,
      "ems": null
    },
    {
      "latitude": 51.712646,
      "longitude": 19.356129,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395487,
      "ems": null
    },
    {
      "latitude": 51.711868,
      "longitude": 19.352789,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395493,
      "ems": null
    },
    {
      "latitude": 51.711529,
      "longitude": 19.351196,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672395496,
      "ems": null
    },
    {
      "latitude": 51.71125,
      "longitude": 19.349823,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "squawk": "2651",
      "timestamp": 1672395499,
      "ems": null
    },
    {
      "latitude": 51.710495,
      "longitude": 19.346331,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672395505,
      "ems": null
    },
    {
      "latitude": 51.709808,
      "longitude": 19.343338,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672395511,
      "ems": null
    },
    {
      "latitude": 51.709435,
      "longitude": 19.341354,
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672395515,
      "ems": null
    },
    {
      "latitude": 51.709248,
      "longitude": 19.34021,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672395517,
      "ems": null
    },
    {
      "latitude": 51.70903,
      "longitude": 19.338091,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 262,
      "squawk": "2651",
      "timestamp": 1672395521,
      "ems": null
    },
    {
      "latitude": 51.708969,
      "longitude": 19.336395,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 268,
      "squawk": "2651",
      "timestamp": 1672395524,
      "ems": null
    },
    {
      "latitude": 51.708939,
      "longitude": 19.334749,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 266,
      "squawk": "2651",
      "timestamp": 1672395527,
      "ems": null
    },
    {
      "latitude": 51.708878,
      "longitude": 19.333344,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 265,
      "squawk": "2651",
      "timestamp": 1672395530,
      "ems": null
    },
    {
      "latitude": 51.708755,
      "longitude": 19.331633,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 263,
      "squawk": "2651",
      "timestamp": 1672395533,
      "ems": null
    },
    {
      "latitude": 51.708618,
      "longitude": 19.329702,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 262,
      "squawk": "2651",
      "timestamp": 1672395536,
      "ems": null
    },
    {
      "latitude": 51.708481,
      "longitude": 19.328144,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672395539,
      "ems": null
    },
    {
      "latitude": 51.708252,
      "longitude": 19.326139,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672395542,
      "ems": null
    },
    {
      "latitude": 51.70813,
      "longitude": 19.32457,
      "altitude": {
        "feet": 2200,
        "meters": 671
      },
      "speed": {
        "kmh": 142.6,
        "kts": 77,
        "mph": 88.6
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 262,
      "squawk": "2651",
      "timestamp": 1672395545,
      "ems": null
    },
    {
      "latitude": 51.707993,
      "longitude": 19.322815,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 265,
      "squawk": "2651",
      "timestamp": 1672395548,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 19.321091,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 271,
      "squawk": "2651",
      "timestamp": 1672395551,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 19.3202,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 274,
      "squawk": "2651",
      "timestamp": 1672395553,
      "ems": null
    },
    {
      "latitude": 51.708298,
      "longitude": 19.317974,
      "altitude": {
        "feet": 2375,
        "meters": 724
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
      "heading": 285,
      "squawk": "2651",
      "timestamp": 1672395557,
      "ems": null
    },
    {
      "latitude": 51.708736,
      "longitude": 19.31633,
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
      "heading": 295,
      "squawk": "2651",
      "timestamp": 1672395560,
      "ems": null
    },
    {
      "latitude": 51.709259,
      "longitude": 19.31493,
      "altitude": {
        "feet": 2450,
        "meters": 747
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
      "heading": 302,
      "squawk": "2651",
      "timestamp": 1672395563,
      "ems": null
    },
    {
      "latitude": 51.709946,
      "longitude": 19.31366,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 312,
      "squawk": "2651",
      "timestamp": 1672395565,
      "ems": null
    },
    {
      "latitude": 51.710785,
      "longitude": 19.312515,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 325,
      "squawk": "2651",
      "timestamp": 1672395569,
      "ems": null
    },
    {
      "latitude": 51.711716,
      "longitude": 19.311752,
      "altitude": {
        "feet": 2575,
        "meters": 785
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 335,
      "squawk": "2651",
      "timestamp": 1672395571,
      "ems": null
    },
    {
      "latitude": 51.712879,
      "longitude": 19.311218,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672395575,
      "ems": null
    },
    {
      "latitude": 51.714275,
      "longitude": 19.311066,
      "altitude": {
        "feet": 2600,
        "meters": 792
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
      "squawk": "2651",
      "timestamp": 1672395577,
      "ems": null
    },
    {
      "latitude": 51.715668,
      "longitude": 19.311367,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 13,
      "squawk": "2651",
      "timestamp": 1672395581,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.31221,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 22,
      "squawk": "2651",
      "timestamp": 1672395583,
      "ems": null
    },
    {
      "latitude": 51.718559,
      "longitude": 19.313583,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 32,
      "squawk": "2651",
      "timestamp": 1672395587,
      "ems": null
    },
    {
      "latitude": 51.719864,
      "longitude": 19.315109,
      "altitude": {
        "feet": 2725,
        "meters": 831
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
      "heading": 38,
      "squawk": "2651",
      "timestamp": 1672395590,
      "ems": null
    },
    {
      "latitude": 51.720932,
      "longitude": 19.316711,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 44,
      "squawk": "2651",
      "timestamp": 1672395593,
      "ems": null
    },
    {
      "latitude": 51.722214,
      "longitude": 19.318865,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 47,
      "squawk": "2651",
      "timestamp": 1672395596,
      "ems": null
    },
    {
      "latitude": 51.723267,
      "longitude": 19.320795,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 48,
      "squawk": "2651",
      "timestamp": 1672395599,
      "ems": null
    },
    {
      "latitude": 51.724182,
      "longitude": 19.322577,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 50,
      "squawk": "2651",
      "timestamp": 1672395601,
      "ems": null
    },
    {
      "latitude": 51.724869,
      "longitude": 19.323986,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 50,
      "squawk": "2651",
      "timestamp": 1672395603,
      "ems": null
    },
    {
      "latitude": 51.726334,
      "longitude": 19.326881,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 51,
      "squawk": "2651",
      "timestamp": 1672395607,
      "ems": null
    },
    {
      "latitude": 51.72773,
      "longitude": 19.329758,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 52,
      "squawk": "2651",
      "timestamp": 1672395611,
      "ems": null
    },
    {
      "latitude": 51.728893,
      "longitude": 19.332275,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 53,
      "squawk": "2651",
      "timestamp": 1672395614,
      "ems": null
    },
    {
      "latitude": 51.729813,
      "longitude": 19.334305,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 53,
      "squawk": "2651",
      "timestamp": 1672395617,
      "ems": null
    },
    {
      "latitude": 51.730957,
      "longitude": 19.336828,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 54,
      "squawk": "2651",
      "timestamp": 1672395620,
      "ems": null
    },
    {
      "latitude": 51.731781,
      "longitude": 19.338833,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 55,
      "squawk": "2651",
      "timestamp": 1672395622,
      "ems": null
    },
    {
      "latitude": 51.732944,
      "longitude": 19.341583,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 55,
      "squawk": "2651",
      "timestamp": 1672395626,
      "ems": null
    },
    {
      "latitude": 51.733932,
      "longitude": 19.343954,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 56,
      "squawk": "2651",
      "timestamp": 1672395629,
      "ems": null
    },
    {
      "latitude": 51.734985,
      "longitude": 19.346626,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 57,
      "squawk": "2651",
      "timestamp": 1672395632,
      "ems": null
    },
    {
      "latitude": 51.735947,
      "longitude": 19.349224,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 59,
      "squawk": "2651",
      "timestamp": 1672395635,
      "ems": null
    },
    {
      "latitude": 51.736771,
      "longitude": 19.351898,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672395638,
      "ems": null
    },
    {
      "latitude": 51.737411,
      "longitude": 19.35463,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672395641,
      "ems": null
    },
    {
      "latitude": 51.737961,
      "longitude": 19.357538,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395644,
      "ems": null
    },
    {
      "latitude": 51.738388,
      "longitude": 19.360886,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 79,
      "squawk": "2651",
      "timestamp": 1672395647,
      "ems": null
    },
    {
      "latitude": 51.738647,
      "longitude": 19.363775,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 81,
      "squawk": "2651",
      "timestamp": 1672395650,
      "ems": null
    },
    {
      "latitude": 51.738922,
      "longitude": 19.367338,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672395653,
      "ems": null
    },
    {
      "latitude": 51.739197,
      "longitude": 19.370306,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672395656,
      "ems": null
    },
    {
      "latitude": 51.73946,
      "longitude": 19.373703,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672395659,
      "ems": null
    },
    {
      "latitude": 51.739738,
      "longitude": 19.376907,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672395662,
      "ems": null
    },
    {
      "latitude": 51.740021,
      "longitude": 19.380341,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672395665,
      "ems": null
    },
    {
      "latitude": 51.74025,
      "longitude": 19.383446,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672395668,
      "ems": null
    },
    {
      "latitude": 51.740479,
      "longitude": 19.386415,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672395671,
      "ems": null
    },
    {
      "latitude": 51.740719,
      "longitude": 19.389725,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672395674,
      "ems": null
    },
    {
      "latitude": 51.74123,
      "longitude": 19.396133,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672395680,
      "ems": null
    },
    {
      "latitude": 51.741695,
      "longitude": 19.402847,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672395686,
      "ems": null
    },
    {
      "latitude": 51.742115,
      "longitude": 19.409103,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 83,
      "squawk": "2651",
      "timestamp": 1672395692,
      "ems": null
    },
    {
      "latitude": 51.74258,
      "longitude": 19.415817,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 82,
      "squawk": "2651",
      "timestamp": 1672395698,
      "ems": null
    },
    {
      "latitude": 51.743279,
      "longitude": 19.422226,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 78,
      "squawk": "2651",
      "timestamp": 1672395704,
      "ems": null
    },
    {
      "latitude": 51.743683,
      "longitude": 19.425535,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395707,
      "ems": null
    },
    {
      "latitude": 51.744141,
      "longitude": 19.428728,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395710,
      "ems": null
    },
    {
      "latitude": 51.744553,
      "longitude": 19.431696,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395713,
      "ems": null
    },
    {
      "latitude": 51.744965,
      "longitude": 19.434889,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 78,
      "squawk": "2651",
      "timestamp": 1672395716,
      "ems": null
    },
    {
      "latitude": 51.745422,
      "longitude": 19.438452,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 78,
      "squawk": "2651",
      "timestamp": 1672395719,
      "ems": null
    },
    {
      "latitude": 51.745789,
      "longitude": 19.441198,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395722,
      "ems": null
    },
    {
      "latitude": 51.746201,
      "longitude": 19.444317,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395725,
      "ems": null
    },
    {
      "latitude": 51.747097,
      "longitude": 19.45076,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 76,
      "squawk": "2651",
      "timestamp": 1672395731,
      "ems": null
    },
    {
      "latitude": 51.748077,
      "longitude": 19.457233,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395737,
      "ems": null
    },
    {
      "latitude": 51.749142,
      "longitude": 19.463577,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 268.5,
        "kts": 145,
        "mph": 166.9
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395743,
      "ems": null
    },
    {
      "latitude": 51.750122,
      "longitude": 19.469681,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395749,
      "ems": null
    },
    {
      "latitude": 51.75119,
      "longitude": 19.476013,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395755,
      "ems": null
    },
    {
      "latitude": 51.752262,
      "longitude": 19.482117,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395761,
      "ems": null
    },
    {
      "latitude": 51.753426,
      "longitude": 19.488754,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395767,
      "ems": null
    },
    {
      "latitude": 51.754486,
      "longitude": 19.494942,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395773,
      "ems": null
    },
    {
      "latitude": 51.755539,
      "longitude": 19.501251,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395779,
      "ems": null
    },
    {
      "latitude": 51.756683,
      "longitude": 19.507446,
      "altitude": {
        "feet": 2850,
        "meters": 869
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672395785,
      "ems": null
    },
    {
      "latitude": 51.757801,
      "longitude": 19.513168,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672395792,
      "ems": null
    },
    {
      "latitude": 51.758835,
      "longitude": 19.51877,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672395796,
      "ems": null
    },
    {
      "latitude": 51.760548,
      "longitude": 19.528351,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672395806,
      "ems": null
    },
    {
      "latitude": 51.761581,
      "longitude": 19.534359,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395812,
      "ems": null
    },
    {
      "latitude": 51.762459,
      "longitude": 19.539566,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395817,
      "ems": null
    },
    {
      "latitude": 51.763527,
      "longitude": 19.546051,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395825,
      "ems": null
    },
    {
      "latitude": 51.764923,
      "longitude": 19.554773,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395832,
      "ems": null
    },
    {
      "latitude": 51.76593,
      "longitude": 19.56086,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395838,
      "ems": null
    },
    {
      "latitude": 51.767113,
      "longitude": 19.567261,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672395844,
      "ems": null
    },
    {
      "latitude": 51.768265,
      "longitude": 19.573481,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672395850,
      "ems": null
    },
    {
      "latitude": 51.769409,
      "longitude": 19.579195,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672395856,
      "ems": null
    },
    {
      "latitude": 51.770508,
      "longitude": 19.585283,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395862,
      "ems": null
    },
    {
      "latitude": 51.771378,
      "longitude": 19.59137,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395868,
      "ems": null
    },
    {
      "latitude": 51.772247,
      "longitude": 19.597754,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395874,
      "ems": null
    },
    {
      "latitude": 51.773163,
      "longitude": 19.604361,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395880,
      "ems": null
    },
    {
      "latitude": 51.773621,
      "longitude": 19.607775,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 77,
      "squawk": "2651",
      "timestamp": 1672395883,
      "ems": null
    },
    {
      "latitude": 51.774654,
      "longitude": 19.614105,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 272.2,
        "kts": 147,
        "mph": 169.2
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395889,
      "ems": null
    },
    {
      "latitude": 51.775539,
      "longitude": 19.619904,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 274.1,
        "kts": 148,
        "mph": 170.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 76,
      "squawk": "2651",
      "timestamp": 1672395894,
      "ems": null
    },
    {
      "latitude": 51.776562,
      "longitude": 19.626923,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 270.4,
        "kts": 146,
        "mph": 168
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 76,
      "squawk": "2651",
      "timestamp": 1672395901,
      "ems": null
    },
    {
      "latitude": 51.777512,
      "longitude": 19.63294,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672395907,
      "ems": null
    },
    {
      "latitude": 51.778473,
      "longitude": 19.637764,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672395912,
      "ems": null
    },
    {
      "latitude": 51.779449,
      "longitude": 19.641037,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672395916,
      "ems": null
    },
    {
      "latitude": 51.780899,
      "longitude": 19.645039,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 57,
      "squawk": "2651",
      "timestamp": 1672395920,
      "ems": null
    },
    {
      "latitude": 51.781452,
      "longitude": 19.646225,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 53,
      "squawk": "2651",
      "timestamp": 1672395922,
      "ems": null
    },
    {
      "latitude": 51.783142,
      "longitude": 19.64979,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 52,
      "squawk": "2651",
      "timestamp": 1672395926,
      "ems": null
    },
    {
      "latitude": 51.784195,
      "longitude": 19.65172,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 48,
      "squawk": "2651",
      "timestamp": 1672395928,
      "ems": null
    },
    {
      "latitude": 51.784801,
      "longitude": 19.652863,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 48,
      "squawk": "2651",
      "timestamp": 1672395930,
      "ems": null
    },
    {
      "latitude": 51.785431,
      "longitude": 19.653948,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 48,
      "squawk": "2651",
      "timestamp": 1672395931,
      "ems": null
    },
    {
      "latitude": 51.78717,
      "longitude": 19.657734,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 54,
      "squawk": "2651",
      "timestamp": 1672395936,
      "ems": null
    },
    {
      "latitude": 51.789047,
      "longitude": 19.662632,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 59,
      "squawk": "2651",
      "timestamp": 1672395941,
      "ems": null
    },
    {
      "latitude": 51.790283,
      "longitude": 19.666046,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672395945,
      "ems": null
    },
    {
      "latitude": 51.792068,
      "longitude": 19.671539,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672395951,
      "ems": null
    },
    {
      "latitude": 51.792995,
      "longitude": 19.674301,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672395954,
      "ems": null
    },
    {
      "latitude": 51.793854,
      "longitude": 19.677032,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672395957,
      "ems": null
    },
    {
      "latitude": 51.79472,
      "longitude": 19.679871,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672395960,
      "ems": null
    },
    {
      "latitude": 51.795418,
      "longitude": 19.682083,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 63,
      "squawk": "2651",
      "timestamp": 1672395963,
      "ems": null
    },
    {
      "latitude": 51.796371,
      "longitude": 19.685347,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672395966,
      "ems": null
    },
    {
      "latitude": 51.797047,
      "longitude": 19.687881,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672395969,
      "ems": null
    },
    {
      "latitude": 51.797836,
      "longitude": 19.690765,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672395972,
      "ems": null
    },
    {
      "latitude": 51.79858,
      "longitude": 19.693604,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672395975,
      "ems": null
    },
    {
      "latitude": 51.799328,
      "longitude": 19.696426,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672395978,
      "ems": null
    },
    {
      "latitude": 51.800072,
      "longitude": 19.699326,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672395981,
      "ems": null
    },
    {
      "latitude": 51.801498,
      "longitude": 19.705093,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672395987,
      "ems": null
    },
    {
      "latitude": 51.802166,
      "longitude": 19.708023,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672395990,
      "ems": null
    },
    {
      "latitude": 51.80365,
      "longitude": 19.713333,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672395996,
      "ems": null
    },
    {
      "latitude": 51.804634,
      "longitude": 19.716263,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672395999,
      "ems": null
    },
    {
      "latitude": 51.805424,
      "longitude": 19.718246,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 57,
      "squawk": "2651",
      "timestamp": 1672396002,
      "ems": null
    },
    {
      "latitude": 51.806671,
      "longitude": 19.720978,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 51,
      "squawk": "2651",
      "timestamp": 1672396005,
      "ems": null
    },
    {
      "latitude": 51.807846,
      "longitude": 19.722977,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 46,
      "squawk": "2651",
      "timestamp": 1672396008,
      "ems": null
    },
    {
      "latitude": 51.809101,
      "longitude": 19.724731,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 40,
      "squawk": "2651",
      "timestamp": 1672396011,
      "ems": null
    },
    {
      "latitude": 51.810608,
      "longitude": 19.726398,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 32,
      "squawk": "2651",
      "timestamp": 1672396015,
      "ems": null
    },
    {
      "latitude": 51.811989,
      "longitude": 19.727631,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 26,
      "squawk": "2651",
      "timestamp": 1672396017,
      "ems": null
    },
    {
      "latitude": 51.813431,
      "longitude": 19.728622,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "squawk": "2651",
      "timestamp": 1672396021,
      "ems": null
    },
    {
      "latitude": 51.814781,
      "longitude": 19.729309,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 16,
      "squawk": "2651",
      "timestamp": 1672396023,
      "ems": null
    },
    {
      "latitude": 51.81633,
      "longitude": 19.729813,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 10,
      "squawk": "2651",
      "timestamp": 1672396026,
      "ems": null
    },
    {
      "latitude": 51.81776,
      "longitude": 19.730072,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 5,
      "squawk": "2651",
      "timestamp": 1672396029,
      "ems": null
    },
    {
      "latitude": 51.819214,
      "longitude": 19.730108,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 3,
      "squawk": "2651",
      "timestamp": 1672396032,
      "ems": null
    },
    {
      "latitude": 51.820553,
      "longitude": 19.729767,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 348,
      "squawk": "2651",
      "timestamp": 1672396035,
      "ems": null
    },
    {
      "latitude": 51.821812,
      "longitude": 19.729156,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 339,
      "squawk": "2651",
      "timestamp": 1672396038,
      "ems": null
    },
    {
      "latitude": 51.822693,
      "longitude": 19.728401,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 334,
      "squawk": "2651",
      "timestamp": 1672396041,
      "ems": null
    },
    {
      "latitude": 51.8237,
      "longitude": 19.727215,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 329,
      "squawk": "2651",
      "timestamp": 1672396044,
      "ems": null
    },
    {
      "latitude": 51.824604,
      "longitude": 19.7258,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 315,
      "squawk": "2651",
      "timestamp": 1672396047,
      "ems": null
    },
    {
      "latitude": 51.825256,
      "longitude": 19.724171,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 299,
      "squawk": "2651",
      "timestamp": 1672396050,
      "ems": null
    },
    {
      "latitude": 51.825535,
      "longitude": 19.723053,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 295,
      "squawk": "2651",
      "timestamp": 1672396051,
      "ems": null
    },
    {
      "latitude": 51.825806,
      "longitude": 19.721127,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 277,
      "squawk": "2651",
      "timestamp": 1672396055,
      "ems": null
    },
    {
      "latitude": 51.825813,
      "longitude": 19.718933,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 265,
      "squawk": "2651",
      "timestamp": 1672396058,
      "ems": null
    },
    {
      "latitude": 51.82576,
      "longitude": 19.718603,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 263,
      "squawk": "2651",
      "timestamp": 1672396059,
      "ems": null
    },
    {
      "latitude": 51.82563,
      "longitude": 19.717712,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672396060,
      "ems": null
    },
    {
      "latitude": 51.824982,
      "longitude": 19.715189,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672396064,
      "ems": null
    },
    {
      "latitude": 51.824295,
      "longitude": 19.713703,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 231,
      "squawk": "2651",
      "timestamp": 1672396067,
      "ems": null
    },
    {
      "latitude": 51.823334,
      "longitude": 19.712219,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 222,
      "squawk": "2651",
      "timestamp": 1672396070,
      "ems": null
    },
    {
      "latitude": 51.822144,
      "longitude": 19.710957,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 213,
      "squawk": "2651",
      "timestamp": 1672396073,
      "ems": null
    },
    {
      "latitude": 51.820602,
      "longitude": 19.709854,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 201,
      "squawk": "2651",
      "timestamp": 1672396076,
      "ems": null
    },
    {
      "latitude": 51.819344,
      "longitude": 19.709244,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 197,
      "squawk": "2651",
      "timestamp": 1672396079,
      "ems": null
    },
    {
      "latitude": 51.817978,
      "longitude": 19.708731,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 192,
      "squawk": "2651",
      "timestamp": 1672396082,
      "ems": null
    },
    {
      "latitude": 51.816467,
      "longitude": 19.708359,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 188,
      "squawk": "2651",
      "timestamp": 1672396085,
      "ems": null
    },
    {
      "latitude": 51.814362,
      "longitude": 19.707766,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 190,
      "squawk": "2651",
      "timestamp": 1672396088,
      "ems": null
    },
    {
      "latitude": 51.812828,
      "longitude": 19.707336,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 190,
      "squawk": "2651",
      "timestamp": 1672396091,
      "ems": null
    },
    {
      "latitude": 51.812531,
      "longitude": 19.707245,
      "altitude": {
        "feet": 2775,
        "meters": 846
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
      "heading": 189,
      "squawk": "2651",
      "timestamp": 1672396092,
      "ems": null
    },
    {
      "latitude": 51.810452,
      "longitude": 19.70665,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 189,
      "squawk": "2651",
      "timestamp": 1672396096,
      "ems": null
    },
    {
      "latitude": 51.809055,
      "longitude": 19.706268,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 191,
      "squawk": "2651",
      "timestamp": 1672396099,
      "ems": null
    },
    {
      "latitude": 51.807541,
      "longitude": 19.705687,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 194,
      "squawk": "2651",
      "timestamp": 1672396102,
      "ems": null
    },
    {
      "latitude": 51.806404,
      "longitude": 19.705124,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 196,
      "squawk": "2651",
      "timestamp": 1672396104,
      "ems": null
    },
    {
      "latitude": 51.804886,
      "longitude": 19.704203,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 202,
      "squawk": "2651",
      "timestamp": 1672396108,
      "ems": null
    },
    {
      "latitude": 51.803703,
      "longitude": 19.703293,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 207,
      "squawk": "2651",
      "timestamp": 1672396111,
      "ems": null
    },
    {
      "latitude": 51.802597,
      "longitude": 19.702198,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 212,
      "squawk": "2651",
      "timestamp": 1672396114,
      "ems": null
    },
    {
      "latitude": 51.801281,
      "longitude": 19.700775,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 216,
      "squawk": "2651",
      "timestamp": 1672396117,
      "ems": null
    },
    {
      "latitude": 51.8004,
      "longitude": 19.699526,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 221,
      "squawk": "2651",
      "timestamp": 1672396120,
      "ems": null
    },
    {
      "latitude": 51.799465,
      "longitude": 19.698105,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 224,
      "squawk": "2651",
      "timestamp": 1672396123,
      "ems": null
    },
    {
      "latitude": 51.798534,
      "longitude": 19.696503,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 226,
      "squawk": "2651",
      "timestamp": 1672396126,
      "ems": null
    },
    {
      "latitude": 51.797699,
      "longitude": 19.695072,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 228,
      "squawk": "2651",
      "timestamp": 1672396129,
      "ems": null
    },
    {
      "latitude": 51.797001,
      "longitude": 19.693756,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 229,
      "squawk": "2651",
      "timestamp": 1672396131,
      "ems": null
    },
    {
      "latitude": 51.796207,
      "longitude": 19.691849,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672396135,
      "ems": null
    },
    {
      "latitude": 51.795685,
      "longitude": 19.690395,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672396137,
      "ems": null
    },
    {
      "latitude": 51.795277,
      "longitude": 19.689102,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396141,
      "ems": null
    },
    {
      "latitude": 51.794624,
      "longitude": 19.686661,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672396144,
      "ems": null
    },
    {
      "latitude": 51.794174,
      "longitude": 19.684753,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672396147,
      "ems": null
    },
    {
      "latitude": 51.794128,
      "longitude": 19.68453,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672396148,
      "ems": null
    },
    {
      "latitude": 51.793415,
      "longitude": 19.681702,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672396152,
      "ems": null
    },
    {
      "latitude": 51.793274,
      "longitude": 19.681091,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396153,
      "ems": null
    },
    {
      "latitude": 51.792572,
      "longitude": 19.678593,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396157,
      "ems": null
    },
    {
      "latitude": 51.792019,
      "longitude": 19.676819,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396161,
      "ems": null
    },
    {
      "latitude": 51.791794,
      "longitude": 19.67592,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396162,
      "ems": null
    },
    {
      "latitude": 51.79039,
      "longitude": 19.671021,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396170,
      "ems": null
    },
    {
      "latitude": 51.789318,
      "longitude": 19.667053,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672396177,
      "ems": null
    },
    {
      "latitude": 51.788269,
      "longitude": 19.6633,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672396183,
      "ems": null
    },
    {
      "latitude": 51.787354,
      "longitude": 19.659441,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672396189,
      "ems": null
    },
    {
      "latitude": 51.786438,
      "longitude": 19.655878,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396195,
      "ems": null
    },
    {
      "latitude": 51.785294,
      "longitude": 19.652388,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672396201,
      "ems": null
    },
    {
      "latitude": 51.784561,
      "longitude": 19.650311,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672396204,
      "ems": null
    },
    {
      "latitude": 51.783916,
      "longitude": 19.648514,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672396207,
      "ems": null
    },
    {
      "latitude": 51.783268,
      "longitude": 19.646606,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672396210,
      "ems": null
    },
    {
      "latitude": 51.782661,
      "longitude": 19.645004,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672396213,
      "ems": null
    },
    {
      "latitude": 51.781963,
      "longitude": 19.64325,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672396216,
      "ems": null
    },
    {
      "latitude": 51.781219,
      "longitude": 19.64119,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "squawk": "2651",
      "timestamp": 1672396219,
      "ems": null
    },
    {
      "latitude": 51.779984,
      "longitude": 19.637543,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672396226,
      "ems": null
    },
    {
      "latitude": 51.778885,
      "longitude": 19.633978,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396231,
      "ems": null
    },
    {
      "latitude": 51.778378,
      "longitude": 19.632111,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396234,
      "ems": null
    },
    {
      "latitude": 51.777786,
      "longitude": 19.630194,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396237,
      "ems": null
    },
    {
      "latitude": 51.777237,
      "longitude": 19.628338,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396240,
      "ems": null
    },
    {
      "latitude": 51.776657,
      "longitude": 19.626389,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396243,
      "ems": null
    },
    {
      "latitude": 51.776096,
      "longitude": 19.624481,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396247,
      "ems": null
    },
    {
      "latitude": 51.774841,
      "longitude": 19.620285,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396253,
      "ems": null
    },
    {
      "latitude": 51.773895,
      "longitude": 19.61698,
      "altitude": {
        "feet": 2625,
        "meters": 800
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396258,
      "ems": null
    },
    {
      "latitude": 51.772514,
      "longitude": 19.61235,
      "altitude": {
        "feet": 2550,
        "meters": 777
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672396264,
      "ems": null
    },
    {
      "latitude": 51.771301,
      "longitude": 19.608307,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396271,
      "ems": null
    },
    {
      "latitude": 51.769958,
      "longitude": 19.604212,
      "altitude": {
        "feet": 2400,
        "meters": 732
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672396277,
      "ems": null
    },
    {
      "latitude": 51.7686,
      "longitude": 19.600067,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672396283,
      "ems": null
    },
    {
      "latitude": 51.767212,
      "longitude": 19.596046,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672396289,
      "ems": null
    },
    {
      "latitude": 51.76593,
      "longitude": 19.592112,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672396294,
      "ems": null
    },
    {
      "latitude": 51.764599,
      "longitude": 19.587555,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396301,
      "ems": null
    },
    {
      "latitude": 51.763435,
      "longitude": 19.583588,
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396307,
      "ems": null
    },
    {
      "latitude": 51.762268,
      "longitude": 19.579716,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672396313,
      "ems": null
    },
    {
      "latitude": 51.761169,
      "longitude": 19.575781,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396319,
      "ems": null
    },
    {
      "latitude": 51.760036,
      "longitude": 19.571838,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396325,
      "ems": null
    },
    {
      "latitude": 51.75906,
      "longitude": 19.568253,
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672396330,
      "ems": null
    },
    {
      "latitude": 51.757874,
      "longitude": 19.563755,
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672396337,
      "ems": null
    },
    {
      "latitude": 51.757431,
      "longitude": 19.56192,
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672396340,
      "ems": null
    },
    {
      "latitude": 51.756451,
      "longitude": 19.557724,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672396346,
      "ems": null
    },
    {
      "latitude": 51.755402,
      "longitude": 19.553734,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672396352,
      "ems": null
    },
    {
      "latitude": 51.754257,
      "longitude": 19.549948,
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672396358,
      "ems": null
    },
    {
      "latitude": 51.753616,
      "longitude": 19.548018,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672396361,
      "ems": null
    },
    {
      "latitude": 51.752869,
      "longitude": 19.545975,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672396364,
      "ems": null
    },
    {
      "latitude": 51.752262,
      "longitude": 19.544144,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672396367,
      "ems": null
    },
    {
      "latitude": 51.751656,
      "longitude": 19.54216,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396370,
      "ems": null
    },
    {
      "latitude": 51.750774,
      "longitude": 19.538727,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672396376,
      "ems": null
    },
    {
      "latitude": 51.749908,
      "longitude": 19.535398,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672396382,
      "ems": null
    },
    {
      "latitude": 51.749542,
      "longitude": 19.533617,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672396385,
      "ems": null
    },
    {
      "latitude": 51.749191,
      "longitude": 19.532166,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672396388,
      "ems": null
    },
    {
      "latitude": 51.748817,
      "longitude": 19.530716,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672396391,
      "ems": null
    },
    {
      "latitude": 51.748489,
      "longitude": 19.529238,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672396394,
      "ems": null
    },
    {
      "latitude": 51.748211,
      "longitude": 19.528046,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672396397,
      "ems": null
    },
    {
      "latitude": 51.747887,
      "longitude": 19.526291,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672396400,
      "ems": null
    },
    {
      "latitude": 51.747574,
      "longitude": 19.52471,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672396403,
      "ems": null
    },
    {
      "latitude": 51.747047,
      "longitude": 19.521866,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672396409,
      "ems": null
    },
    {
      "latitude": 51.746815,
      "longitude": 19.52034,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672396412,
      "ems": null
    },
    {
      "latitude": 51.746628,
      "longitude": 19.518967,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 127.8,
        "kts": 69,
        "mph": 79.4
      },
      "verticalSpeed": {
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672396415,
      "ems": null
    },
    {
      "latitude": 51.746304,
      "longitude": 19.517136,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672396418,
      "ems": null
    },
    {
      "latitude": 51.745697,
      "longitude": 19.514008,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672396424,
      "ems": null
    },
    {
      "latitude": 51.745049,
      "longitude": 19.510651,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672396430,
      "ems": null
    },
    {
      "latitude": 51.744415,
      "longitude": 19.507635,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672396437,
      "ems": null
    },
    {
      "latitude": 51.743835,
      "longitude": 19.504623,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672396442,
      "ems": null
    },
    {
      "latitude": 51.743233,
      "longitude": 19.501419,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672396448,
      "ems": null
    },
    {
      "latitude": 51.742676,
      "longitude": 19.498209,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "squawk": "2651",
      "timestamp": 1672396454,
      "ems": null
    },
    {
      "latitude": 51.741928,
      "longitude": 19.494705,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672396461,
      "ems": null
    },
    {
      "latitude": 51.741417,
      "longitude": 19.492874,
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
      "heading": 244,
      "squawk": "2651",
      "timestamp": 1672396464,
      "ems": null
    },
    {
      "latitude": 51.740856,
      "longitude": 19.491272,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672396467,
      "ems": null
    },
    {
      "latitude": 51.740299,
      "longitude": 19.489822,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "squawk": "2651",
      "timestamp": 1672396469,
      "ems": null
    },
    {
      "latitude": 51.739647,
      "longitude": 19.48822,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672396473,
      "ems": null
    },
    {
      "latitude": 51.739105,
      "longitude": 19.486925,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 235,
      "squawk": "2651",
      "timestamp": 1672396475,
      "ems": null
    },
    {
      "latitude": 51.738419,
      "longitude": 19.485292,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 235,
      "squawk": "2651",
      "timestamp": 1672396478,
      "ems": null
    },
    {
      "latitude": 51.737686,
      "longitude": 19.483585,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672396482,
      "ems": null
    },
    {
      "latitude": 51.737087,
      "longitude": 19.48204,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672396485,
      "ems": null
    },
    {
      "latitude": 51.73645,
      "longitude": 19.480541,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 236,
      "squawk": "2651",
      "timestamp": 1672396488,
      "ems": null
    },
    {
      "latitude": 51.735855,
      "longitude": 19.479057,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 236,
      "squawk": "2651",
      "timestamp": 1672396490,
      "ems": null
    },
    {
      "latitude": 51.735168,
      "longitude": 19.477423,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 236,
      "squawk": "2651",
      "timestamp": 1672396494,
      "ems": null
    },
    {
      "latitude": 51.734013,
      "longitude": 19.474258,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672396499,
      "ems": null
    },
    {
      "latitude": 51.732788,
      "longitude": 19.470966,
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672396506,
      "ems": null
    },
    {
      "latitude": 51.73164,
      "longitude": 19.467773,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672396512,
      "ems": null
    },
    {
      "latitude": 51.731094,
      "longitude": 19.466066,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672396515,
      "ems": null
    },
    {
      "latitude": 51.730522,
      "longitude": 19.46434,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672396518,
      "ems": null
    },
    {
      "latitude": 51.730042,
      "longitude": 19.462727,
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672396521,
      "ems": null
    },
    {
      "latitude": 51.72945,
      "longitude": 19.46106,
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672396524,
      "ems": null
    },
    {
      "latitude": 51.72908,
      "longitude": 19.459305,
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672396527,
      "ems": null
    },
    {
      "latitude": 51.728939,
      "longitude": 19.457779,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 261,
      "squawk": "2651",
      "timestamp": 1672396530,
      "ems": null
    },
    {
      "latitude": 51.728851,
      "longitude": 19.45612,
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
      "heading": 267,
      "squawk": "2651",
      "timestamp": 1672396532,
      "ems": null
    },
    {
      "latitude": 51.728806,
      "longitude": 19.454264,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 268,
      "squawk": "2651",
      "timestamp": 1672396536,
      "ems": null
    },
    {
      "latitude": 51.728848,
      "longitude": 19.452286,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 271,
      "squawk": "2651",
      "timestamp": 1672396539,
      "ems": null
    },
    {
      "latitude": 51.728802,
      "longitude": 19.450455,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 265,
      "squawk": "2651",
      "timestamp": 1672396542,
      "ems": null
    },
    {
      "latitude": 51.728615,
      "longitude": 19.448624,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672396545,
      "ems": null
    },
    {
      "latitude": 51.728256,
      "longitude": 19.446766,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672396548,
      "ems": null
    },
    {
      "latitude": 51.727158,
      "longitude": 19.443352,
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
      "heading": 236,
      "squawk": "2651",
      "timestamp": 1672396554,
      "ems": null
    },
    {
      "latitude": 51.726288,
      "longitude": 19.441866,
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
      "heading": 225,
      "squawk": "2651",
      "timestamp": 1672396557,
      "ems": null
    },
    {
      "latitude": 51.725327,
      "longitude": 19.440826,
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
      "heading": 211,
      "squawk": "2651",
      "timestamp": 1672396560,
      "ems": null
    },
    {
      "latitude": 51.724098,
      "longitude": 19.439697,
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
      "heading": 207,
      "squawk": "2651",
      "timestamp": 1672396563,
      "ems": null
    },
    {
      "latitude": 51.723026,
      "longitude": 19.438934,
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
      "heading": 203,
      "squawk": "2651",
      "timestamp": 1672396566,
      "ems": null
    },
    {
      "latitude": 51.722191,
      "longitude": 19.438324,
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
      "heading": 204,
      "squawk": "2651",
      "timestamp": 1672396568,
      "ems": null
    },
    {
      "latitude": 51.720745,
      "longitude": 19.437332,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 203,
      "squawk": "2651",
      "timestamp": 1672396572,
      "ems": null
    },
    {
      "latitude": 51.71949,
      "longitude": 19.436493,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 203,
      "squawk": "2651",
      "timestamp": 1672396575,
      "ems": null
    },
    {
      "latitude": 51.718323,
      "longitude": 19.435705,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 201,
      "squawk": "2651",
      "timestamp": 1672396578,
      "ems": null
    },
    {
      "latitude": 51.717209,
      "longitude": 19.434967,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 202,
      "squawk": "2651",
      "timestamp": 1672396581,
      "ems": null
    },
    {
      "latitude": 51.71608,
      "longitude": 19.434147,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 203,
      "squawk": "2651",
      "timestamp": 1672396584,
      "ems": null
    },
    {
      "latitude": 51.714981,
      "longitude": 19.433477,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 202,
      "squawk": "2651",
      "timestamp": 1672396587,
      "ems": null
    },
    {
      "latitude": 51.713974,
      "longitude": 19.432661,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 206,
      "squawk": "2651",
      "timestamp": 1672396590,
      "ems": null
    },
    {
      "latitude": 51.711903,
      "longitude": 19.430771,
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
      "heading": 212,
      "squawk": "2651",
      "timestamp": 1672396596,
      "ems": null
    },
    {
      "latitude": 51.710972,
      "longitude": 19.429703,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 214,
      "squawk": "2651",
      "timestamp": 1672396599,
      "ems": null
    },
    {
      "latitude": 51.710133,
      "longitude": 19.428711,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 218,
      "squawk": "2651",
      "timestamp": 1672396602,
      "ems": null
    },
    {
      "latitude": 51.709248,
      "longitude": 19.427338,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 227,
      "squawk": "2651",
      "timestamp": 1672396605,
      "ems": null
    },
    {
      "latitude": 51.708549,
      "longitude": 19.425812,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 234,
      "squawk": "2651",
      "timestamp": 1672396608,
      "ems": null
    },
    {
      "latitude": 51.708023,
      "longitude": 19.424347,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672396611,
      "ems": null
    },
    {
      "latitude": 51.707611,
      "longitude": 19.422789,
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672396614,
      "ems": null
    },
    {
      "latitude": 51.707199,
      "longitude": 19.421379,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672396617,
      "ems": null
    },
    {
      "latitude": 51.706779,
      "longitude": 19.419708,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672396620,
      "ems": null
    },
    {
      "latitude": 51.706364,
      "longitude": 19.418106,
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672396623,
      "ems": null
    },
    {
      "latitude": 51.706009,
      "longitude": 19.416479,
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672396626,
      "ems": null
    },
    {
      "latitude": 51.705688,
      "longitude": 19.414921,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672396629,
      "ems": null
    },
    {
      "latitude": 51.705292,
      "longitude": 19.4133,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672396632,
      "ems": null
    },
    {
      "latitude": 51.704918,
      "longitude": 19.411545,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672396635,
      "ems": null
    },
    {
      "latitude": 51.704636,
      "longitude": 19.409946,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672396638,
      "ems": null
    },
    {
      "latitude": 51.704407,
      "longitude": 19.408463,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672396641,
      "ems": null
    },
    {
      "latitude": 51.704224,
      "longitude": 19.406607,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672396644,
      "ems": null
    },
    {
      "latitude": 51.704041,
      "longitude": 19.405048,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672396647,
      "ems": null
    },
    {
      "latitude": 51.7038,
      "longitude": 19.403381,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672396650,
      "ems": null
    },
    {
      "latitude": 51.703568,
      "longitude": 19.401779,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672396653,
      "ems": null
    },
    {
      "latitude": 51.703384,
      "longitude": 19.400177,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672396656,
      "ems": null
    },
    {
      "latitude": 51.703217,
      "longitude": 19.398663,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 259,
      "squawk": "2651",
      "timestamp": 1672396659,
      "ems": null
    },
    {
      "latitude": 51.702965,
      "longitude": 19.39682,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672396662,
      "ems": null
    },
    {
      "latitude": 51.702759,
      "longitude": 19.395174,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672396665,
      "ems": null
    },
    {
      "latitude": 51.702393,
      "longitude": 19.391834,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 260,
      "squawk": "2651",
      "timestamp": 1672396672,
      "ems": null
    },
    {
      "latitude": 51.702072,
      "longitude": 19.38842,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 261,
      "squawk": "2651",
      "timestamp": 1672396677,
      "ems": null
    },
    {
      "latitude": 51.701752,
      "longitude": 19.3853,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672396683,
      "ems": null
    },
    {
      "latitude": 51.701286,
      "longitude": 19.381943,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672396690,
      "ems": null
    },
    {
      "latitude": 51.700916,
      "longitude": 19.378815,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672396695,
      "ems": null
    },
    {
      "latitude": 51.70047,
      "longitude": 19.375652,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672396702,
      "ems": null
    },
    {
      "latitude": 51.700195,
      "longitude": 19.374241,
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672396704,
      "ems": null
    },
    {
      "latitude": 51.699966,
      "longitude": 19.372683,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672396707,
      "ems": null
    },
    {
      "latitude": 51.699703,
      "longitude": 19.371185,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672396710,
      "ems": null
    },
    {
      "latitude": 51.699371,
      "longitude": 19.369564,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672396713,
      "ems": null
    },
    {
      "latitude": 51.699055,
      "longitude": 19.368057,
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672396717,
      "ems": null
    },
    {
      "latitude": 51.698772,
      "longitude": 19.366531,
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672396719,
      "ems": null
    },
    {
      "latitude": 51.698494,
      "longitude": 19.365005,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672396722,
      "ems": null
    },
    {
      "latitude": 51.698215,
      "longitude": 19.363403,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672396725,
      "ems": null
    },
    {
      "latitude": 51.697891,
      "longitude": 19.361801,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672396728,
      "ems": null
    },
    {
      "latitude": 51.697495,
      "longitude": 19.358503,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 262,
      "squawk": "2651",
      "timestamp": 1672396735,
      "ems": null
    },
    {
      "latitude": 51.697472,
      "longitude": 19.357071,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 270,
      "squawk": "2651",
      "timestamp": 1672396737,
      "ems": null
    },
    {
      "latitude": 51.697563,
      "longitude": 19.355469,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 278,
      "squawk": "2651",
      "timestamp": 1672396740,
      "ems": null
    },
    {
      "latitude": 51.697891,
      "longitude": 19.353867,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 290,
      "squawk": "2651",
      "timestamp": 1672396743,
      "ems": null
    },
    {
      "latitude": 51.69841,
      "longitude": 19.352343,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 304,
      "squawk": "2651",
      "timestamp": 1672396747,
      "ems": null
    },
    {
      "latitude": 51.6991,
      "longitude": 19.351044,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 316,
      "squawk": "2651",
      "timestamp": 1672396750,
      "ems": null
    },
    {
      "latitude": 51.700058,
      "longitude": 19.349894,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 327,
      "squawk": "2651",
      "timestamp": 1672396753,
      "ems": null
    },
    {
      "latitude": 51.701157,
      "longitude": 19.349152,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 338,
      "squawk": "2651",
      "timestamp": 1672396756,
      "ems": null
    },
    {
      "latitude": 51.70245,
      "longitude": 19.348755,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 352,
      "squawk": "2651",
      "timestamp": 1672396759,
      "ems": null
    },
    {
      "latitude": 51.703663,
      "longitude": 19.348755,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 4,
      "squawk": "2651",
      "timestamp": 1672396762,
      "ems": null
    },
    {
      "latitude": 51.705105,
      "longitude": 19.349136,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 9,
      "squawk": "2651",
      "timestamp": 1672396765,
      "ems": null
    },
    {
      "latitude": 51.706238,
      "longitude": 19.34967,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 17,
      "squawk": "2651",
      "timestamp": 1672396767,
      "ems": null
    },
    {
      "latitude": 51.707851,
      "longitude": 19.350739,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 24,
      "squawk": "2651",
      "timestamp": 1672396771,
      "ems": null
    },
    {
      "latitude": 51.70903,
      "longitude": 19.351749,
      "altitude": {
        "feet": 1150,
        "meters": 351
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 29,
      "squawk": "2651",
      "timestamp": 1672396774,
      "ems": null
    },
    {
      "latitude": 51.710365,
      "longitude": 19.35318,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 36,
      "squawk": "2651",
      "timestamp": 1672396777,
      "ems": null
    },
    {
      "latitude": 51.711529,
      "longitude": 19.354782,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 42,
      "squawk": "2651",
      "timestamp": 1672396780,
      "ems": null
    },
    {
      "latitude": 51.712509,
      "longitude": 19.356647,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 52,
      "squawk": "2651",
      "timestamp": 1672396783,
      "ems": null
    },
    {
      "latitude": 51.712738,
      "longitude": 19.3573,
      "altitude": {
        "feet": 975,
        "meters": 297
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672396785,
      "ems": null
    },
    {
      "latitude": 51.713997,
      "longitude": 19.362183,
      "altitude": {
        "feet": 825,
        "meters": 251
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672396790,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.364962,
      "altitude": {
        "feet": 750,
        "meters": 229
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672396794,
      "ems": null
    },
    {
      "latitude": 51.715073,
      "longitude": 19.367041,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672396797,
      "ems": null
    },
    {
      "latitude": 51.715485,
      "longitude": 19.369045,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": -1344,
        "ms": -6.8
      },
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672396800,
      "ems": null
    },
    {
      "latitude": 51.715851,
      "longitude": 19.370604,
      "altitude": {
        "feet": 625,
        "meters": 191
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672396802,
      "ems": null
    },
    {
      "latitude": 51.716537,
      "longitude": 19.373722,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672396806,
      "ems": null
    },
    {
      "latitude": 51.717022,
      "longitude": 19.375839,
      "altitude": {
        "feet": 675,
        "meters": 206
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672396809,
      "ems": null
    },
    {
      "latitude": 51.717545,
      "longitude": 19.377878,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672396812,
      "ems": null
    },
    {
      "latitude": 51.717999,
      "longitude": 19.379959,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 187.1,
        "kts": 101,
        "mph": 116.2
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672396815,
      "ems": null
    },
    {
      "latitude": 51.718826,
      "longitude": 19.383743,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672396821,
      "ems": null
    },
    {
      "latitude": 51.719769,
      "longitude": 19.388275,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672396827,
      "ems": null
    },
    {
      "latitude": 51.720566,
      "longitude": 19.392799,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 75,
      "squawk": "2651",
      "timestamp": 1672396833,
      "ems": null
    },
    {
      "latitude": 51.720795,
      "longitude": 19.393845,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 74,
      "squawk": "2651",
      "timestamp": 1672396835,
      "ems": null
    },
    {
      "latitude": 51.722095,
      "longitude": 19.399414,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672396843,
      "ems": null
    },
    {
      "latitude": 51.723679,
      "longitude": 19.405642,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672396851,
      "ems": null
    },
    {
      "latitude": 51.725262,
      "longitude": 19.411697,
      "altitude": {
        "feet": 1300,
        "meters": 396
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 1216,
        "ms": 6.2
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672396858,
      "ems": null
    },
    {
      "latitude": 51.72583,
      "longitude": 19.413956,
      "altitude": {
        "feet": 1325,
        "meters": 404
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672396861,
      "ems": null
    },
    {
      "latitude": 51.726425,
      "longitude": 19.416405,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672396864,
      "ems": null
    },
    {
      "latitude": 51.727032,
      "longitude": 19.418793,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672396867,
      "ems": null
    },
    {
      "latitude": 51.728104,
      "longitude": 19.422989,
      "altitude": {
        "feet": 1500,
        "meters": 457
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672396873,
      "ems": null
    },
    {
      "latitude": 51.729359,
      "longitude": 19.427643,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672396879,
      "ems": null
    },
    {
      "latitude": 51.730709,
      "longitude": 19.43222,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672396885,
      "ems": null
    },
    {
      "latitude": 51.731918,
      "longitude": 19.43667,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672396891,
      "ems": null
    },
    {
      "latitude": 51.733658,
      "longitude": 19.442905,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672396899,
      "ems": null
    },
    {
      "latitude": 51.735176,
      "longitude": 19.448318,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672396905,
      "ems": null
    },
    {
      "latitude": 51.736343,
      "longitude": 19.453125,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672396911,
      "ems": null
    },
    {
      "latitude": 51.737595,
      "longitude": 19.45805,
      "altitude": {
        "feet": 2075,
        "meters": 632
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672396918,
      "ems": null
    },
    {
      "latitude": 51.738785,
      "longitude": 19.462948,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672396924,
      "ems": null
    },
    {
      "latitude": 51.740067,
      "longitude": 19.467773,
      "altitude": {
        "feet": 2225,
        "meters": 678
      },
      "speed": {
        "kmh": 213,
        "kts": 115,
        "mph": 132.3
      },
      "verticalSpeed": {
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672396930,
      "ems": null
    },
    {
      "latitude": 51.741322,
      "longitude": 19.472351,
      "altitude": {
        "feet": 2275,
        "meters": 693
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672396935,
      "ems": null
    },
    {
      "latitude": 51.742676,
      "longitude": 19.47735,
      "altitude": {
        "feet": 2325,
        "meters": 709
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672396942,
      "ems": null
    },
    {
      "latitude": 51.744022,
      "longitude": 19.48288,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672396948,
      "ems": null
    },
    {
      "latitude": 51.745049,
      "longitude": 19.487534,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 218.5,
        "kts": 118,
        "mph": 135.8
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672396954,
      "ems": null
    },
    {
      "latitude": 51.746063,
      "longitude": 19.492121,
      "altitude": {
        "feet": 2575,
        "meters": 785
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
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672396959,
      "ems": null
    },
    {
      "latitude": 51.74675,
      "longitude": 19.495314,
      "altitude": {
        "feet": 2650,
        "meters": 808
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
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672396963,
      "ems": null
    },
    {
      "latitude": 51.747375,
      "longitude": 19.498291,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672396967,
      "ems": null
    },
    {
      "latitude": 51.74881,
      "longitude": 19.50526,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672396975,
      "ems": null
    },
    {
      "latitude": 51.749794,
      "longitude": 19.510498,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 73,
      "squawk": "2651",
      "timestamp": 1672396981,
      "ems": null
    },
    {
      "latitude": 51.750824,
      "longitude": 19.515802,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672396987,
      "ems": null
    },
    {
      "latitude": 51.751923,
      "longitude": 19.520998,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672396993,
      "ems": null
    },
    {
      "latitude": 51.753159,
      "longitude": 19.526714,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 69,
      "squawk": "2651",
      "timestamp": 1672396999,
      "ems": null
    },
    {
      "latitude": 51.754402,
      "longitude": 19.53186,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672397005,
      "ems": null
    },
    {
      "latitude": 51.755035,
      "longitude": 19.534433,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672397008,
      "ems": null
    },
    {
      "latitude": 51.755814,
      "longitude": 19.537403,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672397011,
      "ems": null
    },
    {
      "latitude": 51.756454,
      "longitude": 19.54015,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672397014,
      "ems": null
    },
    {
      "latitude": 51.757198,
      "longitude": 19.542923,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672397017,
      "ems": null
    },
    {
      "latitude": 51.758514,
      "longitude": 19.548315,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672397023,
      "ems": null
    },
    {
      "latitude": 51.759979,
      "longitude": 19.553808,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672397029,
      "ems": null
    },
    {
      "latitude": 51.761444,
      "longitude": 19.559376,
      "altitude": {
        "feet": 3000,
        "meters": 914
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
      "squawk": "2651",
      "timestamp": 1672397035,
      "ems": null
    },
    {
      "latitude": 51.762924,
      "longitude": 19.564896,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672397041,
      "ems": null
    },
    {
      "latitude": 51.764374,
      "longitude": 19.570511,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 68,
      "squawk": "2651",
      "timestamp": 1672397047,
      "ems": null
    },
    {
      "latitude": 51.765884,
      "longitude": 19.5763,
      "altitude": {
        "feet": 2975,
        "meters": 907
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
      "heading": 67,
      "squawk": "2651",
      "timestamp": 1672397053,
      "ems": null
    },
    {
      "latitude": 51.767487,
      "longitude": 19.582443,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "squawk": "2651",
      "timestamp": 1672397059,
      "ems": null
    },
    {
      "latitude": 51.768677,
      "longitude": 19.587658,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672397065,
      "ems": null
    },
    {
      "latitude": 51.769958,
      "longitude": 19.593819,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672397071,
      "ems": null
    },
    {
      "latitude": 51.770649,
      "longitude": 19.597397,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672397074,
      "ems": null
    },
    {
      "latitude": 51.771255,
      "longitude": 19.600372,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672397077,
      "ems": null
    },
    {
      "latitude": 51.771816,
      "longitude": 19.603348,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672397080,
      "ems": null
    },
    {
      "latitude": 51.772419,
      "longitude": 19.606323,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "squawk": "2651",
      "timestamp": 1672397083,
      "ems": null
    },
    {
      "latitude": 51.773621,
      "longitude": 19.612377,
      "altitude": {
        "feet": 2925,
        "meters": 892
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672397090,
      "ems": null
    },
    {
      "latitude": 51.774719,
      "longitude": 19.618019,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672397095,
      "ems": null
    },
    {
      "latitude": 51.775864,
      "longitude": 19.623947,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 72,
      "squawk": "2651",
      "timestamp": 1672397101,
      "ems": null
    },
    {
      "latitude": 51.777168,
      "longitude": 19.630356,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 71,
      "squawk": "2651",
      "timestamp": 1672397107,
      "ems": null
    },
    {
      "latitude": 51.778427,
      "longitude": 19.636354,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 70,
      "squawk": "2651",
      "timestamp": 1672397114,
      "ems": null
    },
    {
      "latitude": 51.779774,
      "longitude": 19.64119,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672397119,
      "ems": null
    },
    {
      "latitude": 51.780991,
      "longitude": 19.64452,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 58,
      "squawk": "2651",
      "timestamp": 1672397123,
      "ems": null
    },
    {
      "latitude": 51.781822,
      "longitude": 19.646683,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 57,
      "squawk": "2651",
      "timestamp": 1672397125,
      "ems": null
    },
    {
      "latitude": 51.782894,
      "longitude": 19.649353,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 57,
      "squawk": "2651",
      "timestamp": 1672397128,
      "ems": null
    },
    {
      "latitude": 51.783371,
      "longitude": 19.650681,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 60,
      "squawk": "2651",
      "timestamp": 1672397131,
      "ems": null
    },
    {
      "latitude": 51.784336,
      "longitude": 19.653625,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672397133,
      "ems": null
    },
    {
      "latitude": 51.78479,
      "longitude": 19.654987,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 253.7,
        "kts": 137,
        "mph": 157.7
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 61,
      "squawk": "2651",
      "timestamp": 1672397135,
      "ems": null
    },
    {
      "latitude": 51.785614,
      "longitude": 19.657734,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672397138,
      "ems": null
    },
    {
      "latitude": 51.786575,
      "longitude": 19.661074,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672397141,
      "ems": null
    },
    {
      "latitude": 51.787128,
      "longitude": 19.66301,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 64,
      "squawk": "2651",
      "timestamp": 1672397143,
      "ems": null
    },
    {
      "latitude": 51.789185,
      "longitude": 19.670353,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672397151,
      "ems": null
    },
    {
      "latitude": 51.790146,
      "longitude": 19.673841,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672397155,
      "ems": null
    },
    {
      "latitude": 51.791245,
      "longitude": 19.677851,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 66,
      "squawk": "2651",
      "timestamp": 1672397159,
      "ems": null
    },
    {
      "latitude": 51.792755,
      "longitude": 19.683344,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672397165,
      "ems": null
    },
    {
      "latitude": 51.794254,
      "longitude": 19.688568,
      "altitude": {
        "feet": 2875,
        "meters": 876
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672397171,
      "ems": null
    },
    {
      "latitude": 51.795502,
      "longitude": 19.693068,
      "altitude": {
        "feet": 2900,
        "meters": 884
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 65,
      "squawk": "2651",
      "timestamp": 1672397176,
      "ems": null
    },
    {
      "latitude": 51.797649,
      "longitude": 19.70047,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 62,
      "squawk": "2651",
      "timestamp": 1672397185,
      "ems": null
    },
    {
      "latitude": 51.799,
      "longitude": 19.703751,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 51,
      "squawk": "2651",
      "timestamp": 1672397189,
      "ems": null
    },
    {
      "latitude": 51.800217,
      "longitude": 19.705687,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 42,
      "squawk": "2651",
      "timestamp": 1672397193,
      "ems": null
    },
    {
      "latitude": 51.802074,
      "longitude": 19.707718,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 31,
      "squawk": "2651",
      "timestamp": 1672397197,
      "ems": null
    },
    {
      "latitude": 51.804028,
      "longitude": 19.708939,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 21,
      "squawk": "2651",
      "timestamp": 1672397201,
      "ems": null
    },
    {
      "latitude": 51.805206,
      "longitude": 19.709398,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 13,
      "squawk": "2651",
      "timestamp": 1672397203,
      "ems": null
    },
    {
      "latitude": 51.806355,
      "longitude": 19.709625,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 7,
      "squawk": "2651",
      "timestamp": 1672397206,
      "ems": null
    },
    {
      "latitude": 51.808136,
      "longitude": 19.709547,
      "altitude": {
        "feet": 2950,
        "meters": 899
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
      "heading": 5,
      "squawk": "2651",
      "timestamp": 1672397210,
      "ems": null
    },
    {
      "latitude": 51.808731,
      "longitude": 19.709324,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 5,
      "squawk": "2651",
      "timestamp": 1672397211,
      "ems": null
    },
    {
      "latitude": 51.809372,
      "longitude": 19.709026,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 342,
      "squawk": "2651",
      "timestamp": 1672397213,
      "ems": null
    },
    {
      "latitude": 51.810654,
      "longitude": 19.70784,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 338,
      "squawk": "2651",
      "timestamp": 1672397216,
      "ems": null
    },
    {
      "latitude": 51.811523,
      "longitude": 19.706497,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 311,
      "squawk": "2651",
      "timestamp": 1672397220,
      "ems": null
    },
    {
      "latitude": 51.812347,
      "longitude": 19.704573,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 299,
      "squawk": "2651",
      "timestamp": 1672397223,
      "ems": null
    },
    {
      "latitude": 51.812805,
      "longitude": 19.702642,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 287,
      "squawk": "2651",
      "timestamp": 1672397226,
      "ems": null
    },
    {
      "latitude": 51.812965,
      "longitude": 19.700623,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 274,
      "squawk": "2651",
      "timestamp": 1672397229,
      "ems": null
    },
    {
      "latitude": 51.81292,
      "longitude": 19.698715,
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
      "heading": 264,
      "squawk": "2651",
      "timestamp": 1672397231,
      "ems": null
    },
    {
      "latitude": 51.812531,
      "longitude": 19.696482,
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397235,
      "ems": null
    },
    {
      "latitude": 51.811935,
      "longitude": 19.694775,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 233,
      "squawk": "2651",
      "timestamp": 1672397238,
      "ems": null
    },
    {
      "latitude": 51.810928,
      "longitude": 19.693142,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 222,
      "squawk": "2651",
      "timestamp": 1672397241,
      "ems": null
    },
    {
      "latitude": 51.80994,
      "longitude": 19.691925,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 215,
      "squawk": "2651",
      "timestamp": 1672397243,
      "ems": null
    },
    {
      "latitude": 51.808685,
      "longitude": 19.690781,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 208,
      "squawk": "2651",
      "timestamp": 1672397246,
      "ems": null
    },
    {
      "latitude": 51.80724,
      "longitude": 19.689636,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 205,
      "squawk": "2651",
      "timestamp": 1672397250,
      "ems": null
    },
    {
      "latitude": 51.806854,
      "longitude": 19.689356,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 205,
      "squawk": "2651",
      "timestamp": 1672397251,
      "ems": null
    },
    {
      "latitude": 51.804703,
      "longitude": 19.687946,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 200,
      "squawk": "2651",
      "timestamp": 1672397255,
      "ems": null
    },
    {
      "latitude": 51.803284,
      "longitude": 19.687119,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 198,
      "squawk": "2651",
      "timestamp": 1672397258,
      "ems": null
    },
    {
      "latitude": 51.801773,
      "longitude": 19.686312,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 198,
      "squawk": "2651",
      "timestamp": 1672397262,
      "ems": null
    },
    {
      "latitude": 51.800308,
      "longitude": 19.68557,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 197,
      "squawk": "2651",
      "timestamp": 1672397265,
      "ems": null
    },
    {
      "latitude": 51.799187,
      "longitude": 19.685059,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 197,
      "squawk": "2651",
      "timestamp": 1672397268,
      "ems": null
    },
    {
      "latitude": 51.797791,
      "longitude": 19.684296,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 198,
      "squawk": "2651",
      "timestamp": 1672397271,
      "ems": null
    },
    {
      "latitude": 51.796535,
      "longitude": 19.683609,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "squawk": "2651",
      "timestamp": 1672397274,
      "ems": null
    },
    {
      "latitude": 51.793926,
      "longitude": 19.681396,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 214,
      "squawk": "2651",
      "timestamp": 1672397280,
      "ems": null
    },
    {
      "latitude": 51.792995,
      "longitude": 19.680099,
      "altitude": {
        "feet": 2850,
        "meters": 869
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
      "heading": 222,
      "squawk": "2651",
      "timestamp": 1672397283,
      "ems": null
    },
    {
      "latitude": 51.792065,
      "longitude": 19.678421,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 229,
      "squawk": "2651",
      "timestamp": 1672397286,
      "ems": null
    },
    {
      "latitude": 51.791321,
      "longitude": 19.676895,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "squawk": "2651",
      "timestamp": 1672397289,
      "ems": null
    },
    {
      "latitude": 51.790604,
      "longitude": 19.675177,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672397292,
      "ems": null
    },
    {
      "latitude": 51.789963,
      "longitude": 19.67347,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 238,
      "squawk": "2651",
      "timestamp": 1672397295,
      "ems": null
    },
    {
      "latitude": 51.789318,
      "longitude": 19.671631,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "squawk": "2651",
      "timestamp": 1672397298,
      "ems": null
    },
    {
      "latitude": 51.788712,
      "longitude": 19.669952,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672397301,
      "ems": null
    },
    {
      "latitude": 51.7882,
      "longitude": 19.668579,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672397304,
      "ems": null
    },
    {
      "latitude": 51.787502,
      "longitude": 19.666519,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672397307,
      "ems": null
    },
    {
      "latitude": 51.787033,
      "longitude": 19.665081,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672397310,
      "ems": null
    },
    {
      "latitude": 51.786385,
      "longitude": 19.66301,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672397313,
      "ems": null
    },
    {
      "latitude": 51.785965,
      "longitude": 19.661484,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 246,
      "squawk": "2651",
      "timestamp": 1672397316,
      "ems": null
    },
    {
      "latitude": 51.785568,
      "longitude": 19.659811,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672397319,
      "ems": null
    },
    {
      "latitude": 51.785065,
      "longitude": 19.657881,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397322,
      "ems": null
    },
    {
      "latitude": 51.784615,
      "longitude": 19.656143,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397325,
      "ems": null
    },
    {
      "latitude": 51.784103,
      "longitude": 19.65416,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397328,
      "ems": null
    },
    {
      "latitude": 51.783691,
      "longitude": 19.652536,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397331,
      "ems": null
    },
    {
      "latitude": 51.783218,
      "longitude": 19.650726,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397334,
      "ems": null
    },
    {
      "latitude": 51.782803,
      "longitude": 19.648895,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397337,
      "ems": null
    },
    {
      "latitude": 51.782333,
      "longitude": 19.647141,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397340,
      "ems": null
    },
    {
      "latitude": 51.781906,
      "longitude": 19.645336,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397343,
      "ems": null
    },
    {
      "latitude": 51.781036,
      "longitude": 19.641773,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397349,
      "ems": null
    },
    {
      "latitude": 51.780148,
      "longitude": 19.638138,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "2651",
      "timestamp": 1672397355,
      "ems": null
    },
    {
      "latitude": 51.779297,
      "longitude": 19.634424,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "squawk": "2651",
      "timestamp": 1672397361,
      "ems": null
    },
    {
      "latitude": 51.778519,
      "longitude": 19.631042,
      "altitude": {
        "feet": 2900,
        "meters": 884
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
      "squawk": "2651",
      "timestamp": 1672397367,
      "ems": null
    },
    {
      "latitude": 51.777603,
      "longitude": 19.627373,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397373,
      "ems": null
    },
    {
      "latitude": 51.776642,
      "longitude": 19.623735,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672397379,
      "ems": null
    },
    {
      "latitude": 51.776005,
      "longitude": 19.621735,
      "altitude": {
        "feet": 2875,
        "meters": 876
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672397382,
      "ems": null
    },
    {
      "latitude": 51.775543,
      "longitude": 19.620098,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672397385,
      "ems": null
    },
    {
      "latitude": 51.774563,
      "longitude": 19.61647,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397391,
      "ems": null
    },
    {
      "latitude": 51.774033,
      "longitude": 19.614456,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672397394,
      "ems": null
    },
    {
      "latitude": 51.773537,
      "longitude": 19.612885,
      "altitude": {
        "feet": 2750,
        "meters": 838
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672397397,
      "ems": null
    },
    {
      "latitude": 51.772522,
      "longitude": 19.609259,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672397403,
      "ems": null
    },
    {
      "latitude": 51.771397,
      "longitude": 19.605637,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672397409,
      "ems": null
    },
    {
      "latitude": 51.770508,
      "longitude": 19.602133,
      "altitude": {
        "feet": 2500,
        "meters": 762
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672397415,
      "ems": null
    },
    {
      "latitude": 51.769768,
      "longitude": 19.598694,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397421,
      "ems": null
    },
    {
      "latitude": 51.76944,
      "longitude": 19.597168,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397424,
      "ems": null
    },
    {
      "latitude": 51.769089,
      "longitude": 19.59523,
      "altitude": {
        "feet": 2350,
        "meters": 716
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397427,
      "ems": null
    },
    {
      "latitude": 51.768787,
      "longitude": 19.593277,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672397430,
      "ems": null
    },
    {
      "latitude": 51.768539,
      "longitude": 19.591667,
      "altitude": {
        "feet": 2250,
        "meters": 686
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
      "heading": 256,
      "squawk": "2651",
      "timestamp": 1672397433,
      "ems": null
    },
    {
      "latitude": 51.76823,
      "longitude": 19.58992,
      "altitude": {
        "feet": 2225,
        "meters": 678
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397436,
      "ems": null
    },
    {
      "latitude": 51.767902,
      "longitude": 19.587936,
      "altitude": {
        "feet": 2175,
        "meters": 663
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672397439,
      "ems": null
    },
    {
      "latitude": 51.767204,
      "longitude": 19.584732,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672397445,
      "ems": null
    },
    {
      "latitude": 51.766369,
      "longitude": 19.581223,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "squawk": "2651",
      "timestamp": 1672397451,
      "ems": null
    },
    {
      "latitude": 51.765839,
      "longitude": 19.579493,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672397455,
      "ems": null
    },
    {
      "latitude": 51.765297,
      "longitude": 19.577942,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672397457,
      "ems": null
    },
    {
      "latitude": 51.76474,
      "longitude": 19.576263,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 241,
      "squawk": "2651",
      "timestamp": 1672397460,
      "ems": null
    },
    {
      "latitude": 51.764133,
      "longitude": 19.574661,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 240,
      "squawk": "2651",
      "timestamp": 1672397463,
      "ems": null
    },
    {
      "latitude": 51.763641,
      "longitude": 19.573183,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 239,
      "squawk": "2651",
      "timestamp": 1672397466,
      "ems": null
    },
    {
      "latitude": 51.76297,
      "longitude": 19.571533,
      "altitude": {
        "feet": 2100,
        "meters": 640
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
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672397469,
      "ems": null
    },
    {
      "latitude": 51.762272,
      "longitude": 19.569778,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 237,
      "squawk": "2651",
      "timestamp": 1672397473,
      "ems": null
    },
    {
      "latitude": 51.761627,
      "longitude": 19.568283,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 235,
      "squawk": "2651",
      "timestamp": 1672397476,
      "ems": null
    },
    {
      "latitude": 51.760941,
      "longitude": 19.56665,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 234,
      "squawk": "2651",
      "timestamp": 1672397479,
      "ems": null
    },
    {
      "latitude": 51.7603,
      "longitude": 19.565166,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 235,
      "squawk": "2651",
      "timestamp": 1672397481,
      "ems": null
    },
    {
      "latitude": 51.759613,
      "longitude": 19.563606,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 234,
      "squawk": "2651",
      "timestamp": 1672397484,
      "ems": null
    },
    {
      "latitude": 51.758873,
      "longitude": 19.562073,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 232,
      "squawk": "2651",
      "timestamp": 1672397488,
      "ems": null
    },
    {
      "latitude": 51.758102,
      "longitude": 19.560415,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 231,
      "squawk": "2651",
      "timestamp": 1672397490,
      "ems": null
    },
    {
      "latitude": 51.75737,
      "longitude": 19.558857,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 231,
      "squawk": "2651",
      "timestamp": 1672397493,
      "ems": null
    },
    {
      "latitude": 51.756546,
      "longitude": 19.557114,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 233,
      "squawk": "2651",
      "timestamp": 1672397497,
      "ems": null
    },
    {
      "latitude": 51.755493,
      "longitude": 19.553808,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "squawk": "2651",
      "timestamp": 1672397503,
      "ems": null
    },
    {
      "latitude": 51.7551,
      "longitude": 19.551926,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397506,
      "ems": null
    },
    {
      "latitude": 51.754776,
      "longitude": 19.550476,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397508,
      "ems": null
    },
    {
      "latitude": 51.754395,
      "longitude": 19.548834,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397512,
      "ems": null
    },
    {
      "latitude": 51.754124,
      "longitude": 19.546967,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672397514,
      "ems": null
    },
    {
      "latitude": 51.753891,
      "longitude": 19.545271,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 258,
      "squawk": "2651",
      "timestamp": 1672397517,
      "ems": null
    },
    {
      "latitude": 51.753662,
      "longitude": 19.543415,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672397520,
      "ems": null
    },
    {
      "latitude": 51.753426,
      "longitude": 19.541779,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 257,
      "squawk": "2651",
      "timestamp": 1672397523,
      "ems": null
    },
    {
      "latitude": 51.753159,
      "longitude": 19.540224,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672397526,
      "ems": null
    },
    {
      "latitude": 51.752838,
      "longitude": 19.538219,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672397530,
      "ems": null
    },
    {
      "latitude": 51.752197,
      "longitude": 19.535028,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397536,
      "ems": null
    },
    {
      "latitude": 51.751511,
      "longitude": 19.531984,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672397542,
      "ems": null
    },
    {
      "latitude": 51.751144,
      "longitude": 19.530487,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397545,
      "ems": null
    },
    {
      "latitude": 51.75082,
      "longitude": 19.529037,
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397548,
      "ems": null
    },
    {
      "latitude": 51.750595,
      "longitude": 19.528049,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397550,
      "ems": null
    },
    {
      "latitude": 51.750259,
      "longitude": 19.52652,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397553,
      "ems": null
    },
    {
      "latitude": 51.749908,
      "longitude": 19.525154,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397557,
      "ems": null
    },
    {
      "latitude": 51.749561,
      "longitude": 19.523773,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397560,
      "ems": null
    },
    {
      "latitude": 51.748909,
      "longitude": 19.52095,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397566,
      "ems": null
    },
    {
      "latitude": 51.748352,
      "longitude": 19.518103,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "squawk": "2651",
      "timestamp": 1672397572,
      "ems": null
    },
    {
      "latitude": 51.747711,
      "longitude": 19.515505,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672397578,
      "ems": null
    },
    {
      "latitude": 51.747253,
      "longitude": 19.513056,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672397584,
      "ems": null
    },
    {
      "latitude": 51.746979,
      "longitude": 19.51157,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397587,
      "ems": null
    },
    {
      "latitude": 51.74675,
      "longitude": 19.510309,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397590,
      "ems": null
    },
    {
      "latitude": 51.746212,
      "longitude": 19.507751,
      "altitude": {
        "feet": 1925,
        "meters": 587
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397596,
      "ems": null
    },
    {
      "latitude": 51.745651,
      "longitude": 19.505005,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397602,
      "ems": null
    },
    {
      "latitude": 51.745049,
      "longitude": 19.502411,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397608,
      "ems": null
    },
    {
      "latitude": 51.744442,
      "longitude": 19.499664,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397614,
      "ems": null
    },
    {
      "latitude": 51.743835,
      "longitude": 19.496918,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397620,
      "ems": null
    },
    {
      "latitude": 51.743324,
      "longitude": 19.494171,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672397626,
      "ems": null
    },
    {
      "latitude": 51.742813,
      "longitude": 19.491272,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397632,
      "ems": null
    },
    {
      "latitude": 51.742207,
      "longitude": 19.488449,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397638,
      "ems": null
    },
    {
      "latitude": 51.74165,
      "longitude": 19.485779,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397644,
      "ems": null
    },
    {
      "latitude": 51.741211,
      "longitude": 19.483362,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 254,
      "squawk": "2651",
      "timestamp": 1672397650,
      "ems": null
    },
    {
      "latitude": 51.74057,
      "longitude": 19.479799,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397656,
      "ems": null
    },
    {
      "latitude": 51.739929,
      "longitude": 19.476904,
      "altitude": {
        "feet": 1625,
        "meters": 495
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397662,
      "ems": null
    },
    {
      "latitude": 51.739288,
      "longitude": 19.47386,
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397668,
      "ems": null
    },
    {
      "latitude": 51.738762,
      "longitude": 19.471436,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397674,
      "ems": null
    },
    {
      "latitude": 51.738327,
      "longitude": 19.469927,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "squawk": "2651",
      "timestamp": 1672397677,
      "ems": null
    },
    {
      "latitude": 51.737961,
      "longitude": 19.468515,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672397680,
      "ems": null
    },
    {
      "latitude": 51.737598,
      "longitude": 19.467316,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672397683,
      "ems": null
    },
    {
      "latitude": 51.737228,
      "longitude": 19.465992,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672397686,
      "ems": null
    },
    {
      "latitude": 51.736862,
      "longitude": 19.464804,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672397689,
      "ems": null
    },
    {
      "latitude": 51.73645,
      "longitude": 19.463543,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672397692,
      "ems": null
    },
    {
      "latitude": 51.73613,
      "longitude": 19.462503,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 242,
      "squawk": "2651",
      "timestamp": 1672397695,
      "ems": null
    },
    {
      "latitude": 51.735672,
      "longitude": 19.461018,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 243,
      "squawk": "2651",
      "timestamp": 1672397698,
      "ems": null
    },
    {
      "latitude": 51.734482,
      "longitude": 19.457159,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 245,
      "squawk": "2651",
      "timestamp": 1672397707,
      "ems": null
    },
    {
      "latitude": 51.73378,
      "longitude": 19.454346,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 249,
      "squawk": "2651",
      "timestamp": 1672397713,
      "ems": null
    },
    {
      "latitude": 51.733597,
      "longitude": 19.453278,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397715,
      "ems": null
    },
    {
      "latitude": 51.733269,
      "longitude": 19.451675,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397719,
      "ems": null
    },
    {
      "latitude": 51.733017,
      "longitude": 19.450254,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397722,
      "ems": null
    },
    {
      "latitude": 51.732788,
      "longitude": 19.449141,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397725,
      "ems": null
    },
    {
      "latitude": 51.732697,
      "longitude": 19.448771,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397726,
      "ems": null
    },
    {
      "latitude": 51.732376,
      "longitude": 19.446915,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397730,
      "ems": null
    },
    {
      "latitude": 51.732059,
      "longitude": 19.44519,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 253,
      "squawk": "2651",
      "timestamp": 1672397734,
      "ems": null
    },
    {
      "latitude": 51.731781,
      "longitude": 19.443871,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397737,
      "ems": null
    },
    {
      "latitude": 51.731499,
      "longitude": 19.442673,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397740,
      "ems": null
    },
    {
      "latitude": 51.731049,
      "longitude": 19.439936,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 255,
      "squawk": "2651",
      "timestamp": 1672397746,
      "ems": null
    },
    {
      "latitude": 51.730431,
      "longitude": 19.437408,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397751,
      "ems": null
    },
    {
      "latitude": 51.730103,
      "longitude": 19.436111,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 247,
      "squawk": "2651",
      "timestamp": 1672397755,
      "ems": null
    },
    {
      "latitude": 51.729359,
      "longitude": 19.432831,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397761,
      "ems": null
    },
    {
      "latitude": 51.728661,
      "longitude": 19.429703,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397767,
      "ems": null
    },
    {
      "latitude": 51.728104,
      "longitude": 19.42688,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397773,
      "ems": null
    },
    {
      "latitude": 51.727402,
      "longitude": 19.423828,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 250,
      "squawk": "2651",
      "timestamp": 1672397779,
      "ems": null
    },
    {
      "latitude": 51.727066,
      "longitude": 19.422195,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397782,
      "ems": null
    },
    {
      "latitude": 51.726799,
      "longitude": 19.4207,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397785,
      "ems": null
    },
    {
      "latitude": 51.726242,
      "longitude": 19.418186,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 252,
      "squawk": "2651",
      "timestamp": 1672397790,
      "ems": null
    },
    {
      "latitude": 51.725555,
      "longitude": 19.414995,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397797,
      "ems": null
    },
    {
      "latitude": 51.72517,
      "longitude": 19.413147,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 251,
      "squawk": "2651",
      "timestamp": 1672397801,
      "ems": null
    },
    {
      "latitude": 51.724457,
      "longitude": 19.410021,
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
      "heading": 248,
      "squawk": "2651",
      "timestamp": 1672397809,
      "ems": null
    },
    {
      "latitude": 51.723866,
      "longitude": 19.407272,
      "altitude": {
        "feet": 575,
        "meters": 175
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
      "squawk": "2651",
      "timestamp": 1672397815,
      "ems": null
    },
    {
      "latitude": 51.721802,
      "longitude": 19.408239,
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
      "heading": 154,
      "squawk": "2651",
      "timestamp": 1672397990,
      "ems": null
    },
    {
      "latitude": 51.721458,
      "longitude": 19.408388,
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
      "heading": 174,
      "squawk": "2651",
      "timestamp": 1672397997,
      "ems": null
    },
    {
      "latitude": 51.720863,
      "longitude": 19.408482,
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
      "heading": 174,
      "squawk": "2651",
      "timestamp": 1672398005,
      "ems": null
    },
    {
      "latitude": 51.720512,
      "longitude": 19.408531,
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
      "heading": 171,
      "squawk": "2651",
      "timestamp": 1672398011,
      "ems": null
    },
    {
      "latitude": 51.720341,
      "longitude": 19.407825,
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
      "heading": 326,
      "squawk": "2651",
      "timestamp": 1672398042,
      "ems": null
    },
    {
      "latitude": 51.720024,
      "longitude": 19.406414,
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
      "heading": 157,
      "squawk": "2651",
      "timestamp": 1672398086,
      "ems": null
    }
  ]
};
