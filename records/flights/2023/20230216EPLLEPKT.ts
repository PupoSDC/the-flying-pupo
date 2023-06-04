import { RawFlight } from "../../../src/types/Flight";

export const flight: RawFlight = {
  identification: {
    id: "20230216EPLLEPKT",
    callsign: "BNI6L",
    name: "ME/CPL check ride",
    description: "",
  },
  pilotLog: {
    departure: new Date(2023, 1, 16, 9, 39).getTime(),
    arrival: new Date(2023, 1, 16, 11, 42).getTime(),
    singleEnginePistonTime: 0,
    multiEnginePistonTime: 123,
    picTime: 0,
    dualTime: 123,
    ifrTime: 0,
    landings: {
      day: 5,
      night: 0,
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
      name: "Katowice International Airport",
      code: "EPKT",
      position: {
        latitude: 50.474251,
        longitude
          :
          19.080009
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
  track:   [
    {
      "latitude": 51.720562,
      "longitude": 19.392395,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1676541220,
      "ems": null
    },
    {
      "latitude": 51.719955,
      "longitude": 19.389572,
      "altitude": {
        "feet": 575,
        "meters": 175
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
      "heading": 250,
      "squawk": "7000",
      "timestamp": 1676541225,
      "ems": null
    },
    {
      "latitude": 51.719212,
      "longitude": 19.385834,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 251,
      "squawk": "7000",
      "timestamp": 1676541232,
      "ems": null
    },
    {
      "latitude": 51.718559,
      "longitude": 19.382706,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1676541238,
      "ems": null
    },
    {
      "latitude": 51.718002,
      "longitude": 19.379585,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1676541244,
      "ems": null
    },
    {
      "latitude": 51.717583,
      "longitude": 19.377441,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 254,
      "squawk": "7000",
      "timestamp": 1676541250,
      "ems": null
    },
    {
      "latitude": 51.716675,
      "longitude": 19.372459,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1676541256,
      "ems": null
    },
    {
      "latitude": 51.715988,
      "longitude": 19.368673,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1676541262,
      "ems": null
    },
    {
      "latitude": 51.715302,
      "longitude": 19.364962,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1676541268,
      "ems": null
    },
    {
      "latitude": 51.714661,
      "longitude": 19.360954,
      "altitude": {
        "feet": 1225,
        "meters": 373
      },
      "speed": {
        "kmh": 157.4,
        "kts": 85,
        "mph": 97.8
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1676541274,
      "ems": null
    },
    {
      "latitude": 51.713837,
      "longitude": 19.357391,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1676541280,
      "ems": null
    },
    {
      "latitude": 51.713203,
      "longitude": 19.35585,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676541283,
      "ems": null
    },
    {
      "latitude": 51.712463,
      "longitude": 19.354422,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1676541286,
      "ems": null
    },
    {
      "latitude": 51.711502,
      "longitude": 19.353159,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676541289,
      "ems": null
    },
    {
      "latitude": 51.710403,
      "longitude": 19.352045,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676541292,
      "ems": null
    },
    {
      "latitude": 51.709248,
      "longitude": 19.351273,
      "altitude": {
        "feet": 1475,
        "meters": 450
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1676541295,
      "ems": null
    },
    {
      "latitude": 51.707932,
      "longitude": 19.35071,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676541298,
      "ems": null
    },
    {
      "latitude": 51.706558,
      "longitude": 19.350487,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1676541301,
      "ems": null
    },
    {
      "latitude": 51.705196,
      "longitude": 19.35051,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1676541304,
      "ems": null
    },
    {
      "latitude": 51.703754,
      "longitude": 19.350815,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1676541307,
      "ems": null
    },
    {
      "latitude": 51.702217,
      "longitude": 19.351349,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1676541310,
      "ems": null
    },
    {
      "latitude": 51.700699,
      "longitude": 19.352119,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1676541313,
      "ems": null
    },
    {
      "latitude": 51.699425,
      "longitude": 19.352951,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 201.9,
        "kts": 109,
        "mph": 125.4
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1676541316,
      "ems": null
    },
    {
      "latitude": 51.698044,
      "longitude": 19.354124,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 207.4,
        "kts": 112,
        "mph": 128.9
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1676541319,
      "ems": null
    },
    {
      "latitude": 51.696716,
      "longitude": 19.355536,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541322,
      "ems": null
    },
    {
      "latitude": 51.695328,
      "longitude": 19.357147,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 224.1,
        "kts": 121,
        "mph": 139.2
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1676541325,
      "ems": null
    },
    {
      "latitude": 51.694118,
      "longitude": 19.358826,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 227.8,
        "kts": 123,
        "mph": 141.5
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1676541328,
      "ems": null
    },
    {
      "latitude": 51.692871,
      "longitude": 19.360954,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1676541331,
      "ems": null
    },
    {
      "latitude": 51.691727,
      "longitude": 19.363031,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1676541334,
      "ems": null
    },
    {
      "latitude": 51.690533,
      "longitude": 19.365463,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676541337,
      "ems": null
    },
    {
      "latitude": 51.689575,
      "longitude": 19.367708,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676541340,
      "ems": null
    },
    {
      "latitude": 51.68858,
      "longitude": 19.370193,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676541343,
      "ems": null
    },
    {
      "latitude": 51.687607,
      "longitude": 19.372683,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676541346,
      "ems": null
    },
    {
      "latitude": 51.686718,
      "longitude": 19.375076,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676541349,
      "ems": null
    },
    {
      "latitude": 51.685959,
      "longitude": 19.377359,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1676541352,
      "ems": null
    },
    {
      "latitude": 51.685043,
      "longitude": 19.380032,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1676541355,
      "ems": null
    },
    {
      "latitude": 51.684265,
      "longitude": 19.382704,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1676541358,
      "ems": null
    },
    {
      "latitude": 51.683533,
      "longitude": 19.385302,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1676541361,
      "ems": null
    },
    {
      "latitude": 51.682846,
      "longitude": 19.387974,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 113,
      "squawk": "7000",
      "timestamp": 1676541364,
      "ems": null
    },
    {
      "latitude": 51.682114,
      "longitude": 19.390795,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1676541367,
      "ems": null
    },
    {
      "latitude": 51.681519,
      "longitude": 19.393318,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1676541370,
      "ems": null
    },
    {
      "latitude": 51.680878,
      "longitude": 19.39599,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1676541373,
      "ems": null
    },
    {
      "latitude": 51.680244,
      "longitude": 19.398956,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1676541377,
      "ems": null
    },
    {
      "latitude": 51.679642,
      "longitude": 19.401703,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1676541380,
      "ems": null
    },
    {
      "latitude": 51.679176,
      "longitude": 19.404068,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1676541382,
      "ems": null
    },
    {
      "latitude": 51.678589,
      "longitude": 19.406977,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1676541385,
      "ems": null
    },
    {
      "latitude": 51.678013,
      "longitude": 19.409866,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1676541388,
      "ems": null
    },
    {
      "latitude": 51.677547,
      "longitude": 19.412537,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1676541391,
      "ems": null
    },
    {
      "latitude": 51.676941,
      "longitude": 19.415812,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1676541395,
      "ems": null
    },
    {
      "latitude": 51.676529,
      "longitude": 19.418335,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1676541397,
      "ems": null
    },
    {
      "latitude": 51.676102,
      "longitude": 19.421158,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1676541400,
      "ems": null
    },
    {
      "latitude": 51.675613,
      "longitude": 19.42457,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1676541404,
      "ems": null
    },
    {
      "latitude": 51.675404,
      "longitude": 19.425964,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1676541405,
      "ems": null
    },
    {
      "latitude": 51.674427,
      "longitude": 19.431839,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1676541411,
      "ems": null
    },
    {
      "latitude": 51.673309,
      "longitude": 19.438629,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 104,
      "squawk": "7000",
      "timestamp": 1676541418,
      "ems": null
    },
    {
      "latitude": 51.672333,
      "longitude": 19.444122,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1676541424,
      "ems": null
    },
    {
      "latitude": 51.671768,
      "longitude": 19.446989,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 109,
      "squawk": "7000",
      "timestamp": 1676541427,
      "ems": null
    },
    {
      "latitude": 51.671074,
      "longitude": 19.449539,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 112,
      "squawk": "7000",
      "timestamp": 1676541430,
      "ems": null
    },
    {
      "latitude": 51.670349,
      "longitude": 19.452333,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1676541433,
      "ems": null
    },
    {
      "latitude": 51.669479,
      "longitude": 19.455154,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1676541437,
      "ems": null
    },
    {
      "latitude": 51.668564,
      "longitude": 19.457975,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1676541440,
      "ems": null
    },
    {
      "latitude": 51.667679,
      "longitude": 19.460449,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1676541443,
      "ems": null
    },
    {
      "latitude": 51.666744,
      "longitude": 19.462967,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676541446,
      "ems": null
    },
    {
      "latitude": 51.66568,
      "longitude": 19.465546,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676541449,
      "ems": null
    },
    {
      "latitude": 51.664745,
      "longitude": 19.467697,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676541452,
      "ems": null
    },
    {
      "latitude": 51.663483,
      "longitude": 19.470074,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1676541455,
      "ems": null
    },
    {
      "latitude": 51.662247,
      "longitude": 19.472153,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1676541458,
      "ems": null
    },
    {
      "latitude": 51.660919,
      "longitude": 19.474083,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1676541461,
      "ems": null
    },
    {
      "latitude": 51.659775,
      "longitude": 19.475716,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676541463,
      "ems": null
    },
    {
      "latitude": 51.65831,
      "longitude": 19.477571,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1676541467,
      "ems": null
    },
    {
      "latitude": 51.656784,
      "longitude": 19.479446,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1676541470,
      "ems": null
    },
    {
      "latitude": 51.655621,
      "longitude": 19.480972,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676541473,
      "ems": null
    },
    {
      "latitude": 51.654224,
      "longitude": 19.482803,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1676541476,
      "ems": null
    },
    {
      "latitude": 51.652733,
      "longitude": 19.48494,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1676541479,
      "ems": null
    },
    {
      "latitude": 51.651443,
      "longitude": 19.486776,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1676541482,
      "ems": null
    },
    {
      "latitude": 51.650116,
      "longitude": 19.488781,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1676541485,
      "ems": null
    },
    {
      "latitude": 51.647461,
      "longitude": 19.492865,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1676541491,
      "ems": null
    },
    {
      "latitude": 51.644989,
      "longitude": 19.496428,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1676541497,
      "ems": null
    },
    {
      "latitude": 51.642212,
      "longitude": 19.499893,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1676541503,
      "ems": null
    },
    {
      "latitude": 51.640537,
      "longitude": 19.501724,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676541506,
      "ems": null
    },
    {
      "latitude": 51.639187,
      "longitude": 19.50325,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541509,
      "ems": null
    },
    {
      "latitude": 51.637604,
      "longitude": 19.504929,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676541512,
      "ems": null
    },
    {
      "latitude": 51.636162,
      "longitude": 19.506454,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541515,
      "ems": null
    },
    {
      "latitude": 51.634689,
      "longitude": 19.508081,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541518,
      "ems": null
    },
    {
      "latitude": 51.633183,
      "longitude": 19.509659,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541521,
      "ems": null
    },
    {
      "latitude": 51.631924,
      "longitude": 19.510956,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541524,
      "ems": null
    },
    {
      "latitude": 51.630295,
      "longitude": 19.512609,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541527,
      "ems": null
    },
    {
      "latitude": 51.628784,
      "longitude": 19.514093,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541530,
      "ems": null
    },
    {
      "latitude": 51.626339,
      "longitude": 19.516525,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541535,
      "ems": null
    },
    {
      "latitude": 51.622696,
      "longitude": 19.520256,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541543,
      "ems": null
    },
    {
      "latitude": 51.618656,
      "longitude": 19.52446,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541551,
      "ems": null
    },
    {
      "latitude": 51.615646,
      "longitude": 19.527456,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541557,
      "ems": null
    },
    {
      "latitude": 51.612671,
      "longitude": 19.530426,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541563,
      "ems": null
    },
    {
      "latitude": 51.610016,
      "longitude": 19.533098,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541569,
      "ems": null
    },
    {
      "latitude": 51.606674,
      "longitude": 19.536438,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541575,
      "ems": null
    },
    {
      "latitude": 51.603901,
      "longitude": 19.539261,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541581,
      "ems": null
    },
    {
      "latitude": 51.600643,
      "longitude": 19.542465,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541587,
      "ems": null
    },
    {
      "latitude": 51.597847,
      "longitude": 19.545288,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "timestamp": 1676541593,
      "ems": null
    },
    {
      "latitude": 51.59491,
      "longitude": 19.548166,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541599,
      "ems": null
    },
    {
      "latitude": 51.592121,
      "longitude": 19.550934,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541605,
      "ems": null
    },
    {
      "latitude": 51.589279,
      "longitude": 19.55418,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676541611,
      "ems": null
    },
    {
      "latitude": 51.588226,
      "longitude": 19.555738,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1676541614,
      "ems": null
    },
    {
      "latitude": 51.58691,
      "longitude": 19.558182,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1676541618,
      "ems": null
    },
    {
      "latitude": 51.58593,
      "longitude": 19.560242,
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676541620,
      "ems": null
    },
    {
      "latitude": 51.584885,
      "longitude": 19.562641,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676541623,
      "ems": null
    },
    {
      "latitude": 51.583923,
      "longitude": 19.565018,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676541626,
      "ems": null
    },
    {
      "latitude": 51.583,
      "longitude": 19.56749,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676541630,
      "ems": null
    },
    {
      "latitude": 51.582066,
      "longitude": 19.569931,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676541633,
      "ems": null
    },
    {
      "latitude": 51.58123,
      "longitude": 19.572144,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676541635,
      "ems": null
    },
    {
      "latitude": 51.580345,
      "longitude": 19.574585,
      "altitude": {
        "feet": 1675,
        "meters": 511
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676541638,
      "ems": null
    },
    {
      "latitude": 51.579414,
      "longitude": 19.577026,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676541641,
      "ems": null
    },
    {
      "latitude": 51.578705,
      "longitude": 19.579121,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1676541644,
      "ems": null
    },
    {
      "latitude": 51.577606,
      "longitude": 19.58209,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676541647,
      "ems": null
    },
    {
      "latitude": 51.576645,
      "longitude": 19.584688,
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676541651,
      "ems": null
    },
    {
      "latitude": 51.575176,
      "longitude": 19.588013,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676541655,
      "ems": null
    },
    {
      "latitude": 51.573532,
      "longitude": 19.591146,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 131,
      "squawk": "7000",
      "timestamp": 1676541659,
      "ems": null
    },
    {
      "latitude": 51.572296,
      "longitude": 19.593151,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 135,
      "squawk": "7000",
      "timestamp": 1676541663,
      "ems": null
    },
    {
      "latitude": 51.571243,
      "longitude": 19.594635,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1676541666,
      "ems": null
    },
    {
      "latitude": 51.56987,
      "longitude": 19.596481,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676541669,
      "ems": null
    },
    {
      "latitude": 51.56852,
      "longitude": 19.59816,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1676541672,
      "ems": null
    },
    {
      "latitude": 51.567307,
      "longitude": 19.599609,
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1676541675,
      "ems": null
    },
    {
      "latitude": 51.566471,
      "longitude": 19.600525,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676541678,
      "ems": null
    },
    {
      "latitude": 51.564789,
      "longitude": 19.602356,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676541680,
      "ems": null
    },
    {
      "latitude": 51.563461,
      "longitude": 19.603693,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541683,
      "ems": null
    },
    {
      "latitude": 51.56284,
      "longitude": 19.604416,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541685,
      "ems": null
    },
    {
      "latitude": 51.561905,
      "longitude": 19.605326,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541687,
      "ems": null
    },
    {
      "latitude": 51.56012,
      "longitude": 19.607107,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541691,
      "ems": null
    },
    {
      "latitude": 51.558655,
      "longitude": 19.608517,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676541694,
      "ems": null
    },
    {
      "latitude": 51.557163,
      "longitude": 19.609985,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1676541698,
      "ems": null
    },
    {
      "latitude": 51.555725,
      "longitude": 19.611263,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1676541701,
      "ems": null
    },
    {
      "latitude": 51.554367,
      "longitude": 19.612503,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1676541704,
      "ems": null
    },
    {
      "latitude": 51.551716,
      "longitude": 19.615173,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541709,
      "ems": null
    },
    {
      "latitude": 51.54895,
      "longitude": 19.618317,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1676541716,
      "ems": null
    },
    {
      "latitude": 51.546295,
      "longitude": 19.621433,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1676541722,
      "ems": null
    },
    {
      "latitude": 51.545059,
      "longitude": 19.622919,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1676541725,
      "ems": null
    },
    {
      "latitude": 51.543777,
      "longitude": 19.624552,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1676541728,
      "ems": null
    },
    {
      "latitude": 51.540962,
      "longitude": 19.627609,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541734,
      "ems": null
    },
    {
      "latitude": 51.538216,
      "longitude": 19.630356,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541740,
      "ems": null
    },
    {
      "latitude": 51.535469,
      "longitude": 19.633331,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1676541746,
      "ems": null
    },
    {
      "latitude": 51.533112,
      "longitude": 19.636131,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1676541752,
      "ems": null
    },
    {
      "latitude": 51.5303,
      "longitude": 19.639435,
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1676541758,
      "ems": null
    },
    {
      "latitude": 51.527664,
      "longitude": 19.64259,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1676541764,
      "ems": null
    },
    {
      "latitude": 51.526199,
      "longitude": 19.644445,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676541768,
      "ems": null
    },
    {
      "latitude": 51.525146,
      "longitude": 19.645855,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676541770,
      "ems": null
    },
    {
      "latitude": 51.522537,
      "longitude": 19.649494,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1676541777,
      "ems": null
    },
    {
      "latitude": 51.521317,
      "longitude": 19.651337,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1676541780,
      "ems": null
    },
    {
      "latitude": 51.520153,
      "longitude": 19.653244,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1676541783,
      "ems": null
    },
    {
      "latitude": 51.51899,
      "longitude": 19.655151,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1676541786,
      "ems": null
    },
    {
      "latitude": 51.517868,
      "longitude": 19.656916,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1676541789,
      "ems": null
    },
    {
      "latitude": 51.516708,
      "longitude": 19.658661,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 137,
      "squawk": "7000",
      "timestamp": 1676541792,
      "ems": null
    },
    {
      "latitude": 51.514206,
      "longitude": 19.66189,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1676541798,
      "ems": null
    },
    {
      "latitude": 51.512787,
      "longitude": 19.663597,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676541801,
      "ems": null
    },
    {
      "latitude": 51.511448,
      "longitude": 19.664993,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541804,
      "ems": null
    },
    {
      "latitude": 51.510269,
      "longitude": 19.666195,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541807,
      "ems": null
    },
    {
      "latitude": 51.508804,
      "longitude": 19.667606,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 149,
      "squawk": "7000",
      "timestamp": 1676541810,
      "ems": null
    },
    {
      "latitude": 51.507584,
      "longitude": 19.668732,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1676541813,
      "ems": null
    },
    {
      "latitude": 51.506241,
      "longitude": 19.669832,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1676541816,
      "ems": null
    },
    {
      "latitude": 51.504776,
      "longitude": 19.671169,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1676541819,
      "ems": null
    },
    {
      "latitude": 51.503441,
      "longitude": 19.672318,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1676541823,
      "ems": null
    },
    {
      "latitude": 51.500881,
      "longitude": 19.674759,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541829,
      "ems": null
    },
    {
      "latitude": 51.498367,
      "longitude": 19.677429,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676541834,
      "ems": null
    },
    {
      "latitude": 51.495941,
      "longitude": 19.680077,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541840,
      "ems": null
    },
    {
      "latitude": 51.49334,
      "longitude": 19.682693,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676541847,
      "ems": null
    },
    {
      "latitude": 51.492096,
      "longitude": 19.684086,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541850,
      "ems": null
    },
    {
      "latitude": 51.490677,
      "longitude": 19.685644,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676541853,
      "ems": null
    },
    {
      "latitude": 51.488251,
      "longitude": 19.688465,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1676541859,
      "ems": null
    },
    {
      "latitude": 51.485458,
      "longitude": 19.691656,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1676541866,
      "ems": null
    },
    {
      "latitude": 51.482632,
      "longitude": 19.694824,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1676541872,
      "ems": null
    },
    {
      "latitude": 51.479736,
      "longitude": 19.698561,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1676541879,
      "ems": null
    },
    {
      "latitude": 51.479507,
      "longitude": 19.698858,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1676541880,
      "ems": null
    },
    {
      "latitude": 51.478134,
      "longitude": 19.700714,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 139,
      "squawk": "7000",
      "timestamp": 1676541883,
      "ems": null
    },
    {
      "latitude": 51.474857,
      "longitude": 19.704895,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1676541891,
      "ems": null
    },
    {
      "latitude": 51.472389,
      "longitude": 19.707794,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 146,
      "squawk": "7000",
      "timestamp": 1676541897,
      "ems": null
    },
    {
      "latitude": 51.471039,
      "longitude": 19.708954,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 152,
      "squawk": "7000",
      "timestamp": 1676541900,
      "ems": null
    },
    {
      "latitude": 51.469711,
      "longitude": 19.709919,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 157,
      "squawk": "7000",
      "timestamp": 1676541903,
      "ems": null
    },
    {
      "latitude": 51.468292,
      "longitude": 19.710693,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1676541906,
      "ems": null
    },
    {
      "latitude": 51.466782,
      "longitude": 19.711329,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 166,
      "squawk": "7000",
      "timestamp": 1676541910,
      "ems": null
    },
    {
      "latitude": 51.465363,
      "longitude": 19.711761,
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1676541913,
      "ems": null
    },
    {
      "latitude": 51.464432,
      "longitude": 19.71199,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1676541915,
      "ems": null
    },
    {
      "latitude": 51.462524,
      "longitude": 19.712368,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1676541919,
      "ems": null
    },
    {
      "latitude": 51.461216,
      "longitude": 19.712677,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1676541922,
      "ems": null
    },
    {
      "latitude": 51.45982,
      "longitude": 19.713135,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 167,
      "squawk": "7000",
      "timestamp": 1676541925,
      "ems": null
    },
    {
      "latitude": 51.458405,
      "longitude": 19.713703,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1676541928,
      "ems": null
    },
    {
      "latitude": 51.457123,
      "longitude": 19.714224,
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
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1676541931,
      "ems": null
    },
    {
      "latitude": 51.45554,
      "longitude": 19.714966,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 164,
      "squawk": "7000",
      "timestamp": 1676541934,
      "ems": null
    },
    {
      "latitude": 51.452866,
      "longitude": 19.715931,
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1676541940,
      "ems": null
    },
    {
      "latitude": 51.450027,
      "longitude": 19.71645,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 174,
      "squawk": "7000",
      "timestamp": 1676541946,
      "ems": null
    },
    {
      "latitude": 51.448601,
      "longitude": 19.716568,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1676541949,
      "ems": null
    },
    {
      "latitude": 51.447533,
      "longitude": 19.716644,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1676541951,
      "ems": null
    },
    {
      "latitude": 51.445862,
      "longitude": 19.716599,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1676541955,
      "ems": null
    },
    {
      "latitude": 51.444599,
      "longitude": 19.716492,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1676541958,
      "ems": null
    },
    {
      "latitude": 51.443157,
      "longitude": 19.716492,
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1676541961,
      "ems": null
    },
    {
      "latitude": 51.441879,
      "longitude": 19.71645,
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1676541964,
      "ems": null
    },
    {
      "latitude": 51.440548,
      "longitude": 19.716339,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1676541967,
      "ems": null
    },
    {
      "latitude": 51.439106,
      "longitude": 19.715881,
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676541970,
      "ems": null
    },
    {
      "latitude": 51.43808,
      "longitude": 19.715559,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1676541973,
      "ems": null
    },
    {
      "latitude": 51.436661,
      "longitude": 19.714966,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1676541976,
      "ems": null
    },
    {
      "latitude": 51.435516,
      "longitude": 19.714447,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1676541979,
      "ems": null
    },
    {
      "latitude": 51.434357,
      "longitude": 19.713821,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1676541983,
      "ems": null
    },
    {
      "latitude": 51.433334,
      "longitude": 19.713211,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1676541985,
      "ems": null
    },
    {
      "latitude": 51.432404,
      "longitude": 19.712738,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1676541988,
      "ems": null
    },
    {
      "latitude": 51.43103,
      "longitude": 19.712219,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1676541991,
      "ems": null
    },
    {
      "latitude": 51.429932,
      "longitude": 19.7117,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1676541994,
      "ems": null
    },
    {
      "latitude": 51.427654,
      "longitude": 19.71077,
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1676542000,
      "ems": null
    },
    {
      "latitude": 51.425125,
      "longitude": 19.70977,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1676542007,
      "ems": null
    },
    {
      "latitude": 51.422974,
      "longitude": 19.708954,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1676542012,
      "ems": null
    },
    {
      "latitude": 51.421555,
      "longitude": 19.708359,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676542015,
      "ems": null
    },
    {
      "latitude": 51.418762,
      "longitude": 19.707468,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676542022,
      "ems": null
    },
    {
      "latitude": 51.416107,
      "longitude": 19.706503,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676542028,
      "ems": null
    },
    {
      "latitude": 51.413315,
      "longitude": 19.705463,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1676542034,
      "ems": null
    },
    {
      "latitude": 51.410706,
      "longitude": 19.704426,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1676542040,
      "ems": null
    },
    {
      "latitude": 51.408474,
      "longitude": 19.703445,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1676542045,
      "ems": null
    },
    {
      "latitude": 51.406952,
      "longitude": 19.702642,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1676542049,
      "ems": null
    },
    {
      "latitude": 51.403976,
      "longitude": 19.702049,
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
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1676542055,
      "ems": null
    },
    {
      "latitude": 51.40274,
      "longitude": 19.702198,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1676542058,
      "ems": null
    },
    {
      "latitude": 51.40123,
      "longitude": 19.70257,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1676542061,
      "ems": null
    },
    {
      "latitude": 51.400131,
      "longitude": 19.702791,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1676542063,
      "ems": null
    },
    {
      "latitude": 51.398232,
      "longitude": 19.703217,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1676542067,
      "ems": null
    },
    {
      "latitude": 51.397064,
      "longitude": 19.703461,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1676542070,
      "ems": null
    },
    {
      "latitude": 51.395718,
      "longitude": 19.703751,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1676542073,
      "ems": null
    },
    {
      "latitude": 51.39418,
      "longitude": 19.704128,
      "altitude": {
        "feet": 2075,
        "meters": 632
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1676542076,
      "ems": null
    },
    {
      "latitude": 51.392506,
      "longitude": 19.70459,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1676542080,
      "ems": null
    },
    {
      "latitude": 51.389511,
      "longitude": 19.705168,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1676542086,
      "ems": null
    },
    {
      "latitude": 51.386688,
      "longitude": 19.705658,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 173,
      "squawk": "7000",
      "timestamp": 1676542091,
      "ems": null
    },
    {
      "latitude": 51.383755,
      "longitude": 19.706421,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1676542097,
      "ems": null
    },
    {
      "latitude": 51.380859,
      "longitude": 19.707319,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1676542103,
      "ems": null
    },
    {
      "latitude": 51.379395,
      "longitude": 19.708136,
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
      "heading": 159,
      "squawk": "7000",
      "timestamp": 1676542107,
      "ems": null
    },
    {
      "latitude": 51.378075,
      "longitude": 19.709091,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 155,
      "squawk": "7000",
      "timestamp": 1676542110,
      "ems": null
    },
    {
      "latitude": 51.37682,
      "longitude": 19.710083,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1676542113,
      "ems": null
    },
    {
      "latitude": 51.375595,
      "longitude": 19.711329,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676542116,
      "ems": null
    },
    {
      "latitude": 51.374496,
      "longitude": 19.712738,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1676542119,
      "ems": null
    },
    {
      "latitude": 51.373562,
      "longitude": 19.714432,
      "altitude": {
        "feet": 1625,
        "meters": 495
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676542122,
      "ems": null
    },
    {
      "latitude": 51.372711,
      "longitude": 19.716524,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676542125,
      "ems": null
    },
    {
      "latitude": 51.37207,
      "longitude": 19.719086,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1676542128,
      "ems": null
    },
    {
      "latitude": 51.371792,
      "longitude": 19.721451,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 96,
      "squawk": "7000",
      "timestamp": 1676542131,
      "ems": null
    },
    {
      "latitude": 51.37175,
      "longitude": 19.724096,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1676542134,
      "ems": null
    },
    {
      "latitude": 51.372025,
      "longitude": 19.726768,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 77,
      "squawk": "7000",
      "timestamp": 1676542137,
      "ems": null
    },
    {
      "latitude": 51.372574,
      "longitude": 19.729071,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 66,
      "squawk": "7000",
      "timestamp": 1676542140,
      "ems": null
    },
    {
      "latitude": 51.373535,
      "longitude": 19.73152,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 55,
      "squawk": "7000",
      "timestamp": 1676542143,
      "ems": null
    },
    {
      "latitude": 51.374352,
      "longitude": 19.733124,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1676542146,
      "ems": null
    },
    {
      "latitude": 51.375504,
      "longitude": 19.734934,
      "altitude": {
        "feet": 1575,
        "meters": 480
      },
      "speed": {
        "kmh": 179.6,
        "kts": 97,
        "mph": 111.6
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676542149,
      "ems": null
    },
    {
      "latitude": 51.376053,
      "longitude": 19.735676,
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
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676542152,
      "ems": null
    },
    {
      "latitude": 51.37738,
      "longitude": 19.737162,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676542155,
      "ems": null
    },
    {
      "latitude": 51.37854,
      "longitude": 19.738388,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1676542158,
      "ems": null
    },
    {
      "latitude": 51.379486,
      "longitude": 19.739462,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676542161,
      "ems": null
    },
    {
      "latitude": 51.38063,
      "longitude": 19.740725,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676542164,
      "ems": null
    },
    {
      "latitude": 51.381638,
      "longitude": 19.741838,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676542167,
      "ems": null
    },
    {
      "latitude": 51.382416,
      "longitude": 19.742729,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676542170,
      "ems": null
    },
    {
      "latitude": 51.383606,
      "longitude": 19.74399,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676542173,
      "ems": null
    },
    {
      "latitude": 51.384659,
      "longitude": 19.745104,
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1676542177,
      "ems": null
    },
    {
      "latitude": 51.385712,
      "longitude": 19.746017,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676542180,
      "ems": null
    },
    {
      "latitude": 51.386627,
      "longitude": 19.746885,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676542182,
      "ems": null
    },
    {
      "latitude": 51.387711,
      "longitude": 19.747849,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676542185,
      "ems": null
    },
    {
      "latitude": 51.390198,
      "longitude": 19.750004,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1676542191,
      "ems": null
    },
    {
      "latitude": 51.391342,
      "longitude": 19.750824,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1676542195,
      "ems": null
    },
    {
      "latitude": 51.392487,
      "longitude": 19.751562,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1676542197,
      "ems": null
    },
    {
      "latitude": 51.393631,
      "longitude": 19.752304,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1676542201,
      "ems": null
    },
    {
      "latitude": 51.394913,
      "longitude": 19.75312,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1676542204,
      "ems": null
    },
    {
      "latitude": 51.396286,
      "longitude": 19.754011,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1676542207,
      "ems": null
    },
    {
      "latitude": 51.397488,
      "longitude": 19.754639,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1676542210,
      "ems": null
    },
    {
      "latitude": 51.398651,
      "longitude": 19.75502,
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1676542213,
      "ems": null
    },
    {
      "latitude": 51.40004,
      "longitude": 19.754902,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1676542216,
      "ems": null
    },
    {
      "latitude": 51.401119,
      "longitude": 19.75441,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1676542219,
      "ems": null
    },
    {
      "latitude": 51.402283,
      "longitude": 19.753342,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 325,
      "squawk": "7000",
      "timestamp": 1676542222,
      "ems": null
    },
    {
      "latitude": 51.403015,
      "longitude": 19.752304,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 317,
      "squawk": "7000",
      "timestamp": 1676542225,
      "ems": null
    },
    {
      "latitude": 51.403679,
      "longitude": 19.751053,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1676542227,
      "ems": null
    },
    {
      "latitude": 51.404434,
      "longitude": 19.749039,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676542231,
      "ems": null
    },
    {
      "latitude": 51.404938,
      "longitude": 19.74762,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676542234,
      "ems": null
    },
    {
      "latitude": 51.405487,
      "longitude": 19.745995,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676542237,
      "ems": null
    },
    {
      "latitude": 51.405991,
      "longitude": 19.744362,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1676542240,
      "ems": null
    },
    {
      "latitude": 51.406448,
      "longitude": 19.742655,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1676542243,
      "ems": null
    },
    {
      "latitude": 51.40686,
      "longitude": 19.741022,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1676542246,
      "ems": null
    },
    {
      "latitude": 51.40731,
      "longitude": 19.739456,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1676542249,
      "ems": null
    },
    {
      "latitude": 51.407635,
      "longitude": 19.738083,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1676542252,
      "ems": null
    },
    {
      "latitude": 51.4081,
      "longitude": 19.736252,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1676542255,
      "ems": null
    },
    {
      "latitude": 51.40815,
      "longitude": 19.73587,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1676542256,
      "ems": null
    },
    {
      "latitude": 51.408325,
      "longitude": 19.734934,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1676542257,
      "ems": null
    },
    {
      "latitude": 51.408737,
      "longitude": 19.733078,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1676542261,
      "ems": null
    },
    {
      "latitude": 51.409103,
      "longitude": 19.730999,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1676542264,
      "ems": null
    },
    {
      "latitude": 51.409378,
      "longitude": 19.729589,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1676542267,
      "ems": null
    },
    {
      "latitude": 51.409546,
      "longitude": 19.728775,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 287,
      "squawk": "7000",
      "timestamp": 1676542268,
      "ems": null
    },
    {
      "latitude": 51.409916,
      "longitude": 19.726715,
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
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1676542272,
      "ems": null
    },
    {
      "latitude": 51.410244,
      "longitude": 19.724731,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 286,
      "squawk": "7000",
      "timestamp": 1676542275,
      "ems": null
    },
    {
      "latitude": 51.410568,
      "longitude": 19.723053,
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1676542278,
      "ems": null
    },
    {
      "latitude": 51.410797,
      "longitude": 19.721424,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1676542281,
      "ems": null
    },
    {
      "latitude": 51.410801,
      "longitude": 19.719849,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1676542284,
      "ems": null
    },
    {
      "latitude": 51.410522,
      "longitude": 19.718454,
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1676542287,
      "ems": null
    },
    {
      "latitude": 51.410011,
      "longitude": 19.717178,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676542290,
      "ems": null
    },
    {
      "latitude": 51.409378,
      "longitude": 19.716154,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676542293,
      "ems": null
    },
    {
      "latitude": 51.408508,
      "longitude": 19.715115,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676542296,
      "ems": null
    },
    {
      "latitude": 51.407684,
      "longitude": 19.714298,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542299,
      "ems": null
    },
    {
      "latitude": 51.406845,
      "longitude": 19.71344,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676542303,
      "ems": null
    },
    {
      "latitude": 51.405945,
      "longitude": 19.712517,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676542306,
      "ems": null
    },
    {
      "latitude": 51.405167,
      "longitude": 19.7117,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676542309,
      "ems": null
    },
    {
      "latitude": 51.404388,
      "longitude": 19.710735,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676542312,
      "ems": null
    },
    {
      "latitude": 51.403473,
      "longitude": 19.70977,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676542315,
      "ems": null
    },
    {
      "latitude": 51.402649,
      "longitude": 19.708879,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676542318,
      "ems": null
    },
    {
      "latitude": 51.40163,
      "longitude": 19.70787,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676542321,
      "ems": null
    },
    {
      "latitude": 51.4007,
      "longitude": 19.706955,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542324,
      "ems": null
    },
    {
      "latitude": 51.399033,
      "longitude": 19.705168,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676542330,
      "ems": null
    },
    {
      "latitude": 51.397114,
      "longitude": 19.703217,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676542336,
      "ems": null
    },
    {
      "latitude": 51.395233,
      "longitude": 19.701456,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542343,
      "ems": null
    },
    {
      "latitude": 51.393436,
      "longitude": 19.699554,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676542349,
      "ems": null
    },
    {
      "latitude": 51.391708,
      "longitude": 19.697744,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542355,
      "ems": null
    },
    {
      "latitude": 51.390747,
      "longitude": 19.696705,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676542358,
      "ems": null
    },
    {
      "latitude": 51.388271,
      "longitude": 19.694214,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542367,
      "ems": null
    },
    {
      "latitude": 51.386765,
      "longitude": 19.692696,
      "altitude": {
        "feet": 475,
        "meters": 145
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542373,
      "ems": null
    },
    {
      "latitude": 51.379623,
      "longitude": 19.685644,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676542400,
      "ems": null
    },
    {
      "latitude": 51.377888,
      "longitude": 19.683838,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676542406,
      "ems": null
    },
    {
      "latitude": 51.375916,
      "longitude": 19.681709,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676542413,
      "ems": null
    },
    {
      "latitude": 51.37421,
      "longitude": 19.679794,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676542419,
      "ems": null
    },
    {
      "latitude": 51.373188,
      "longitude": 19.678497,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676542422,
      "ems": null
    },
    {
      "latitude": 51.372581,
      "longitude": 19.677811,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676542425,
      "ems": null
    },
    {
      "latitude": 51.371464,
      "longitude": 19.676514,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676542428,
      "ems": null
    },
    {
      "latitude": 51.370533,
      "longitude": 19.675446,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676542431,
      "ems": null
    },
    {
      "latitude": 51.369781,
      "longitude": 19.674509,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676542434,
      "ems": null
    },
    {
      "latitude": 51.367695,
      "longitude": 19.672089,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676542440,
      "ems": null
    },
    {
      "latitude": 51.366531,
      "longitude": 19.671021,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1676542444,
      "ems": null
    },
    {
      "latitude": 51.366028,
      "longitude": 19.670649,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1676542445,
      "ems": null
    },
    {
      "latitude": 51.364883,
      "longitude": 19.67013,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1676542448,
      "ems": null
    },
    {
      "latitude": 51.363689,
      "longitude": 19.669952,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1676542451,
      "ems": null
    },
    {
      "latitude": 51.362389,
      "longitude": 19.669952,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1676542454,
      "ems": null
    },
    {
      "latitude": 51.361267,
      "longitude": 19.670279,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1676542457,
      "ems": null
    },
    {
      "latitude": 51.360294,
      "longitude": 19.670715,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 168,
      "squawk": "7000",
      "timestamp": 1676542459,
      "ems": null
    },
    {
      "latitude": 51.358849,
      "longitude": 19.671707,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1676542463,
      "ems": null
    },
    {
      "latitude": 51.357498,
      "longitude": 19.672928,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676542466,
      "ems": null
    },
    {
      "latitude": 51.356335,
      "longitude": 19.674301,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1676542469,
      "ems": null
    },
    {
      "latitude": 51.355499,
      "longitude": 19.675697,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 134,
      "squawk": "7000",
      "timestamp": 1676542472,
      "ems": null
    },
    {
      "latitude": 51.354427,
      "longitude": 19.677734,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676542475,
      "ems": null
    },
    {
      "latitude": 51.353634,
      "longitude": 19.679413,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676542478,
      "ems": null
    },
    {
      "latitude": 51.352524,
      "longitude": 19.681858,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676542481,
      "ems": null
    },
    {
      "latitude": 51.351791,
      "longitude": 19.683565,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676542484,
      "ems": null
    },
    {
      "latitude": 51.35083,
      "longitude": 19.686312,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676542487,
      "ems": null
    },
    {
      "latitude": 51.350418,
      "longitude": 19.688391,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1676542490,
      "ems": null
    },
    {
      "latitude": 51.350143,
      "longitude": 19.690628,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 98,
      "squawk": "7000",
      "timestamp": 1676542493,
      "ems": null
    },
    {
      "latitude": 51.350189,
      "longitude": 19.694366,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 86,
      "squawk": "7000",
      "timestamp": 1676542496,
      "ems": null
    },
    {
      "latitude": 51.350563,
      "longitude": 19.69696,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 74,
      "squawk": "7000",
      "timestamp": 1676542499,
      "ems": null
    },
    {
      "latitude": 51.351242,
      "longitude": 19.6996,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1676542502,
      "ems": null
    },
    {
      "latitude": 51.351425,
      "longitude": 19.700119,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 68,
      "squawk": "7000",
      "timestamp": 1676542503,
      "ems": null
    },
    {
      "latitude": 51.352657,
      "longitude": 19.703369,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 56,
      "squawk": "7000",
      "timestamp": 1676542507,
      "ems": null
    },
    {
      "latitude": 51.353775,
      "longitude": 19.705505,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1676542510,
      "ems": null
    },
    {
      "latitude": 51.354996,
      "longitude": 19.707691,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1676542513,
      "ems": null
    },
    {
      "latitude": 51.356197,
      "longitude": 19.709549,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1676542516,
      "ems": null
    },
    {
      "latitude": 51.357513,
      "longitude": 19.711552,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1676542519,
      "ems": null
    },
    {
      "latitude": 51.359024,
      "longitude": 19.713629,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676542522,
      "ems": null
    },
    {
      "latitude": 51.36034,
      "longitude": 19.715347,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676542525,
      "ems": null
    },
    {
      "latitude": 51.361549,
      "longitude": 19.716949,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676542528,
      "ems": null
    },
    {
      "latitude": 51.362946,
      "longitude": 19.718857,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676542531,
      "ems": null
    },
    {
      "latitude": 51.364334,
      "longitude": 19.720682,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676542534,
      "ems": null
    },
    {
      "latitude": 51.365601,
      "longitude": 19.722443,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676542537,
      "ems": null
    },
    {
      "latitude": 51.366997,
      "longitude": 19.72435,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1676542541,
      "ems": null
    },
    {
      "latitude": 51.36816,
      "longitude": 19.725876,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676542543,
      "ems": null
    },
    {
      "latitude": 51.370972,
      "longitude": 19.729366,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676542549,
      "ems": null
    },
    {
      "latitude": 51.373699,
      "longitude": 19.732895,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676542556,
      "ems": null
    },
    {
      "latitude": 51.376511,
      "longitude": 19.736492,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676542562,
      "ems": null
    },
    {
      "latitude": 51.379028,
      "longitude": 19.739834,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676542568,
      "ems": null
    },
    {
      "latitude": 51.381332,
      "longitude": 19.743042,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676542574,
      "ems": null
    },
    {
      "latitude": 51.383469,
      "longitude": 19.745846,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1676542580,
      "ems": null
    },
    {
      "latitude": 51.385803,
      "longitude": 19.748518,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1676542586,
      "ems": null
    },
    {
      "latitude": 51.387085,
      "longitude": 19.749334,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1676542589,
      "ems": null
    },
    {
      "latitude": 51.388363,
      "longitude": 19.749756,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1676542592,
      "ems": null
    },
    {
      "latitude": 51.389668,
      "longitude": 19.74968,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 352,
      "squawk": "7000",
      "timestamp": 1676542595,
      "ems": null
    },
    {
      "latitude": 51.390656,
      "longitude": 19.749262,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 341,
      "squawk": "7000",
      "timestamp": 1676542597,
      "ems": null
    },
    {
      "latitude": 51.392029,
      "longitude": 19.748148,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1676542601,
      "ems": null
    },
    {
      "latitude": 51.392925,
      "longitude": 19.746857,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1676542604,
      "ems": null
    },
    {
      "latitude": 51.393669,
      "longitude": 19.745407,
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
      "heading": 306,
      "squawk": "7000",
      "timestamp": 1676542607,
      "ems": null
    },
    {
      "latitude": 51.394318,
      "longitude": 19.743916,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1676542610,
      "ems": null
    },
    {
      "latitude": 51.394958,
      "longitude": 19.742357,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1676542613,
      "ems": null
    },
    {
      "latitude": 51.395626,
      "longitude": 19.740753,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1676542616,
      "ems": null
    },
    {
      "latitude": 51.39624,
      "longitude": 19.739166,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1676542619,
      "ems": null
    },
    {
      "latitude": 51.396881,
      "longitude": 19.737473,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676542622,
      "ems": null
    },
    {
      "latitude": 51.397346,
      "longitude": 19.736328,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676542624,
      "ems": null
    },
    {
      "latitude": 51.398071,
      "longitude": 19.734266,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676542628,
      "ems": null
    },
    {
      "latitude": 51.398697,
      "longitude": 19.732513,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "timestamp": 1676542631,
      "ems": null
    },
    {
      "latitude": 51.398884,
      "longitude": 19.731979,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676542632,
      "ems": null
    },
    {
      "latitude": 51.399628,
      "longitude": 19.729767,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676542636,
      "ems": null
    },
    {
      "latitude": 51.400841,
      "longitude": 19.72641,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1676542642,
      "ems": null
    },
    {
      "latitude": 51.401917,
      "longitude": 19.723131,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1676542648,
      "ems": null
    },
    {
      "latitude": 51.402374,
      "longitude": 19.721527,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "timestamp": 1676542651,
      "ems": null
    },
    {
      "latitude": 51.402748,
      "longitude": 19.71962,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1676542655,
      "ems": null
    },
    {
      "latitude": 51.402969,
      "longitude": 19.717936,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1676542657,
      "ems": null
    },
    {
      "latitude": 51.402981,
      "longitude": 19.716034,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1676542661,
      "ems": null
    },
    {
      "latitude": 51.402889,
      "longitude": 19.714203,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1676542664,
      "ems": null
    },
    {
      "latitude": 51.402657,
      "longitude": 19.712448,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 255,
      "squawk": "7000",
      "timestamp": 1676542667,
      "ems": null
    },
    {
      "latitude": 51.402283,
      "longitude": 19.710735,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 248,
      "squawk": "7000",
      "timestamp": 1676542670,
      "ems": null
    },
    {
      "latitude": 51.401817,
      "longitude": 19.709091,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1676542672,
      "ems": null
    },
    {
      "latitude": 51.401165,
      "longitude": 19.707413,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676542675,
      "ems": null
    },
    {
      "latitude": 51.400326,
      "longitude": 19.706039,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676542679,
      "ems": null
    },
    {
      "latitude": 51.39949,
      "longitude": 19.705019,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676542681,
      "ems": null
    },
    {
      "latitude": 51.398514,
      "longitude": 19.704132,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1676542685,
      "ems": null
    },
    {
      "latitude": 51.397488,
      "longitude": 19.703293,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1676542688,
      "ems": null
    },
    {
      "latitude": 51.396469,
      "longitude": 19.702421,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676542690,
      "ems": null
    },
    {
      "latitude": 51.395416,
      "longitude": 19.70153,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676542693,
      "ems": null
    },
    {
      "latitude": 51.394272,
      "longitude": 19.700491,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676542697,
      "ems": null
    },
    {
      "latitude": 51.393951,
      "longitude": 19.700119,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 161.1,
        "kts": 87,
        "mph": 100.1
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542698,
      "ems": null
    },
    {
      "latitude": 51.392487,
      "longitude": 19.698486,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676542702,
      "ems": null
    },
    {
      "latitude": 51.391342,
      "longitude": 19.697189,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676542707,
      "ems": null
    },
    {
      "latitude": 51.389374,
      "longitude": 19.695293,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676542713,
      "ems": null
    },
    {
      "latitude": 51.388226,
      "longitude": 19.694214,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542716,
      "ems": null
    },
    {
      "latitude": 51.386082,
      "longitude": 19.692078,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676542722,
      "ems": null
    },
    {
      "latitude": 51.384033,
      "longitude": 19.689941,
      "altitude": {
        "feet": 600,
        "meters": 183
      },
      "speed": {
        "kmh": 170.4,
        "kts": 92,
        "mph": 105.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676542728,
      "ems": null
    },
    {
      "latitude": 51.38208,
      "longitude": 19.687805,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676542733,
      "ems": null
    },
    {
      "latitude": 51.379669,
      "longitude": 19.684977,
      "altitude": {
        "feet": 725,
        "meters": 221
      },
      "speed": {
        "kmh": 172.2,
        "kts": 93,
        "mph": 107
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676542740,
      "ems": null
    },
    {
      "latitude": 51.378616,
      "longitude": 19.683788,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676542743,
      "ems": null
    },
    {
      "latitude": 51.377701,
      "longitude": 19.682674,
      "altitude": {
        "feet": 800,
        "meters": 244
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676542746,
      "ems": null
    },
    {
      "latitude": 51.376911,
      "longitude": 19.681702,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676542749,
      "ems": null
    },
    {
      "latitude": 51.375561,
      "longitude": 19.679947,
      "altitude": {
        "feet": 900,
        "meters": 274
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676542752,
      "ems": null
    },
    {
      "latitude": 51.374542,
      "longitude": 19.678518,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676542755,
      "ems": null
    },
    {
      "latitude": 51.372482,
      "longitude": 19.676067,
      "altitude": {
        "feet": 1050,
        "meters": 320
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676542761,
      "ems": null
    },
    {
      "latitude": 51.370514,
      "longitude": 19.673767,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 1280,
        "ms": 6.5
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676542767,
      "ems": null
    },
    {
      "latitude": 51.368534,
      "longitude": 19.671936,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1676542773,
      "ems": null
    },
    {
      "latitude": 51.367229,
      "longitude": 19.671478,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676542776,
      "ems": null
    },
    {
      "latitude": 51.365879,
      "longitude": 19.671555,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 172,
      "squawk": "7000",
      "timestamp": 1676542780,
      "ems": null
    },
    {
      "latitude": 51.364761,
      "longitude": 19.672089,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 161,
      "squawk": "7000",
      "timestamp": 1676542782,
      "ems": null
    },
    {
      "latitude": 51.363373,
      "longitude": 19.673395,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 144,
      "squawk": "7000",
      "timestamp": 1676542786,
      "ems": null
    },
    {
      "latitude": 51.362457,
      "longitude": 19.674807,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 133,
      "squawk": "7000",
      "timestamp": 1676542788,
      "ems": null
    },
    {
      "latitude": 51.361313,
      "longitude": 19.676886,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1676542792,
      "ems": null
    },
    {
      "latitude": 51.360352,
      "longitude": 19.678888,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676542795,
      "ems": null
    },
    {
      "latitude": 51.359436,
      "longitude": 19.680744,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676542797,
      "ems": null
    },
    {
      "latitude": 51.358479,
      "longitude": 19.682693,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676542800,
      "ems": null
    },
    {
      "latitude": 51.357548,
      "longitude": 19.685059,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676542804,
      "ems": null
    },
    {
      "latitude": 51.356689,
      "longitude": 19.687202,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676542806,
      "ems": null
    },
    {
      "latitude": 51.355965,
      "longitude": 19.689865,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1676542810,
      "ems": null
    },
    {
      "latitude": 51.355637,
      "longitude": 19.692251,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1676542812,
      "ems": null
    },
    {
      "latitude": 51.355732,
      "longitude": 19.695511,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1676542816,
      "ems": null
    },
    {
      "latitude": 51.356243,
      "longitude": 19.698257,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1676542819,
      "ems": null
    },
    {
      "latitude": 51.356964,
      "longitude": 19.700491,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1676542822,
      "ems": null
    },
    {
      "latitude": 51.358154,
      "longitude": 19.702791,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1676542825,
      "ems": null
    },
    {
      "latitude": 51.359455,
      "longitude": 19.704437,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1676542828,
      "ems": null
    },
    {
      "latitude": 51.360851,
      "longitude": 19.705963,
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
      "heading": 32,
      "squawk": "7000",
      "timestamp": 1676542831,
      "ems": null
    },
    {
      "latitude": 51.362247,
      "longitude": 19.707413,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676542834,
      "ems": null
    },
    {
      "latitude": 51.363739,
      "longitude": 19.709167,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1676542837,
      "ems": null
    },
    {
      "latitude": 51.364853,
      "longitude": 19.710617,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676542840,
      "ems": null
    },
    {
      "latitude": 51.366344,
      "longitude": 19.712524,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676542843,
      "ems": null
    },
    {
      "latitude": 51.367649,
      "longitude": 19.714203,
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676542846,
      "ems": null
    },
    {
      "latitude": 51.368912,
      "longitude": 19.715857,
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1676542849,
      "ems": null
    },
    {
      "latitude": 51.370102,
      "longitude": 19.717489,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676542852,
      "ems": null
    },
    {
      "latitude": 51.371384,
      "longitude": 19.719271,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676542855,
      "ems": null
    },
    {
      "latitude": 51.374027,
      "longitude": 19.723129,
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1676542861,
      "ems": null
    },
    {
      "latitude": 51.37532,
      "longitude": 19.724987,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676542864,
      "ems": null
    },
    {
      "latitude": 51.377838,
      "longitude": 19.728624,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676542870,
      "ems": null
    },
    {
      "latitude": 51.380081,
      "longitude": 19.731964,
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
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1676542876,
      "ems": null
    },
    {
      "latitude": 51.38237,
      "longitude": 19.735529,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1676542882,
      "ems": null
    },
    {
      "latitude": 51.384705,
      "longitude": 19.739388,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1676542889,
      "ems": null
    },
    {
      "latitude": 51.385757,
      "longitude": 19.741211,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1676542892,
      "ems": null
    },
    {
      "latitude": 51.386673,
      "longitude": 19.742804,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1676542894,
      "ems": null
    },
    {
      "latitude": 51.387711,
      "longitude": 19.744492,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1676542897,
      "ems": null
    },
    {
      "latitude": 51.38974,
      "longitude": 19.747925,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1676542904,
      "ems": null
    },
    {
      "latitude": 51.391853,
      "longitude": 19.751129,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676542910,
      "ems": null
    },
    {
      "latitude": 51.392715,
      "longitude": 19.752155,
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
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676542912,
      "ems": null
    },
    {
      "latitude": 51.394226,
      "longitude": 19.753269,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 22,
      "squawk": "7000",
      "timestamp": 1676542916,
      "ems": null
    },
    {
      "latitude": 51.395508,
      "longitude": 19.75379,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1676542919,
      "ems": null
    },
    {
      "latitude": 51.396698,
      "longitude": 19.753937,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 4,
      "squawk": "7000",
      "timestamp": 1676542921,
      "ems": null
    },
    {
      "latitude": 51.398094,
      "longitude": 19.753571,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 347,
      "squawk": "7000",
      "timestamp": 1676542925,
      "ems": null
    },
    {
      "latitude": 51.399124,
      "longitude": 19.752972,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 338,
      "squawk": "7000",
      "timestamp": 1676542927,
      "ems": null
    },
    {
      "latitude": 51.400269,
      "longitude": 19.751934,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 328,
      "squawk": "7000",
      "timestamp": 1676542931,
      "ems": null
    },
    {
      "latitude": 51.401093,
      "longitude": 19.750746,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "timestamp": 1676542933,
      "ems": null
    },
    {
      "latitude": 51.401917,
      "longitude": 19.749187,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1676542937,
      "ems": null
    },
    {
      "latitude": 51.402603,
      "longitude": 19.747553,
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1676542940,
      "ems": null
    },
    {
      "latitude": 51.403152,
      "longitude": 19.745995,
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676542943,
      "ems": null
    },
    {
      "latitude": 51.403656,
      "longitude": 19.744362,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1676542946,
      "ems": null
    },
    {
      "latitude": 51.40416,
      "longitude": 19.742729,
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
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1676542949,
      "ems": null
    },
    {
      "latitude": 51.404518,
      "longitude": 19.741516,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1676542951,
      "ems": null
    },
    {
      "latitude": 51.405075,
      "longitude": 19.739462,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1676542955,
      "ems": null
    },
    {
      "latitude": 51.405533,
      "longitude": 19.737829,
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
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1676542958,
      "ems": null
    },
    {
      "latitude": 51.405991,
      "longitude": 19.736271,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1676542961,
      "ems": null
    },
    {
      "latitude": 51.406471,
      "longitude": 19.734497,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 292,
      "squawk": "7000",
      "timestamp": 1676542964,
      "ems": null
    },
    {
      "latitude": 51.406937,
      "longitude": 19.732819,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1676542967,
      "ems": null
    },
    {
      "latitude": 51.407089,
      "longitude": 19.732187,
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1676542968,
      "ems": null
    },
    {
      "latitude": 51.40773,
      "longitude": 19.729538,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1676542972,
      "ems": null
    },
    {
      "latitude": 51.408054,
      "longitude": 19.727554,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1676542976,
      "ems": null
    },
    {
      "latitude": 51.408241,
      "longitude": 19.725647,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1676542979,
      "ems": null
    },
    {
      "latitude": 51.408463,
      "longitude": 19.723724,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1676542982,
      "ems": null
    },
    {
      "latitude": 51.408661,
      "longitude": 19.721909,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1676542985,
      "ems": null
    },
    {
      "latitude": 51.408752,
      "longitude": 19.720078,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 272,
      "squawk": "7000",
      "timestamp": 1676542988,
      "ems": null
    },
    {
      "latitude": 51.408566,
      "longitude": 19.718323,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1676542991,
      "ems": null
    },
    {
      "latitude": 51.408142,
      "longitude": 19.716747,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 245,
      "squawk": "7000",
      "timestamp": 1676542994,
      "ems": null
    },
    {
      "latitude": 51.407589,
      "longitude": 19.715271,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676542997,
      "ems": null
    },
    {
      "latitude": 51.406799,
      "longitude": 19.713821,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676543000,
      "ems": null
    },
    {
      "latitude": 51.405945,
      "longitude": 19.712591,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676543003,
      "ems": null
    },
    {
      "latitude": 51.404888,
      "longitude": 19.71138,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676543006,
      "ems": null
    },
    {
      "latitude": 51.404053,
      "longitude": 19.710007,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676543009,
      "ems": null
    },
    {
      "latitude": 51.403381,
      "longitude": 19.708359,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 244,
      "squawk": "7000",
      "timestamp": 1676543012,
      "ems": null
    },
    {
      "latitude": 51.403305,
      "longitude": 19.706497,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1676543015,
      "ems": null
    },
    {
      "latitude": 51.403702,
      "longitude": 19.704498,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1676543018,
      "ems": null
    },
    {
      "latitude": 51.404251,
      "longitude": 19.703312,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1676543020,
      "ems": null
    },
    {
      "latitude": 51.405449,
      "longitude": 19.702072,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 340,
      "squawk": "7000",
      "timestamp": 1676543024,
      "ems": null
    },
    {
      "latitude": 51.406799,
      "longitude": 19.701691,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1676543027,
      "ems": null
    },
    {
      "latitude": 51.408234,
      "longitude": 19.702124,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1676543030,
      "ems": null
    },
    {
      "latitude": 51.4095,
      "longitude": 19.703369,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676543033,
      "ems": null
    },
    {
      "latitude": 51.410336,
      "longitude": 19.705505,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1676543036,
      "ems": null
    },
    {
      "latitude": 51.410614,
      "longitude": 19.707766,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 200,
        "kts": 108,
        "mph": 124.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1676543039,
      "ems": null
    },
    {
      "latitude": 51.410385,
      "longitude": 19.71014,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1676543042,
      "ems": null
    },
    {
      "latitude": 51.409561,
      "longitude": 19.712517,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676543045,
      "ems": null
    },
    {
      "latitude": 51.408646,
      "longitude": 19.713852,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676543048,
      "ems": null
    },
    {
      "latitude": 51.407318,
      "longitude": 19.714668,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1676543051,
      "ems": null
    },
    {
      "latitude": 51.406174,
      "longitude": 19.714594,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676543054,
      "ems": null
    },
    {
      "latitude": 51.405029,
      "longitude": 19.713745,
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
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676543057,
      "ems": null
    },
    {
      "latitude": 51.404144,
      "longitude": 19.712524,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1676543060,
      "ems": null
    },
    {
      "latitude": 51.403355,
      "longitude": 19.711151,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676543063,
      "ems": null
    },
    {
      "latitude": 51.402649,
      "longitude": 19.709547,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676543066,
      "ems": null
    },
    {
      "latitude": 51.401917,
      "longitude": 19.70821,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676543070,
      "ems": null
    },
    {
      "latitude": 51.401073,
      "longitude": 19.707031,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676543073,
      "ems": null
    },
    {
      "latitude": 51.400269,
      "longitude": 19.706133,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676543075,
      "ems": null
    },
    {
      "latitude": 51.399071,
      "longitude": 19.704819,
      "altitude": {
        "feet": 950,
        "meters": 290
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676543079,
      "ems": null
    },
    {
      "latitude": 51.398186,
      "longitude": 19.703751,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676543081,
      "ems": null
    },
    {
      "latitude": 51.396976,
      "longitude": 19.70253,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543085,
      "ems": null
    },
    {
      "latitude": 51.394928,
      "longitude": 19.700623,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543091,
      "ems": null
    },
    {
      "latitude": 51.39418,
      "longitude": 19.699896,
      "altitude": {
        "feet": 775,
        "meters": 236
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676543094,
      "ems": null
    },
    {
      "latitude": 51.392925,
      "longitude": 19.698715,
      "altitude": {
        "feet": 725,
        "meters": 221
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676543097,
      "ems": null
    },
    {
      "latitude": 51.391853,
      "longitude": 19.6978,
      "altitude": {
        "feet": 700,
        "meters": 213
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676543100,
      "ems": null
    },
    {
      "latitude": 51.390793,
      "longitude": 19.696779,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676543103,
      "ems": null
    },
    {
      "latitude": 51.389156,
      "longitude": 19.695129,
      "altitude": {
        "feet": 600,
        "meters": 183
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543108,
      "ems": null
    },
    {
      "latitude": 51.387108,
      "longitude": 19.693069,
      "altitude": {
        "feet": 500,
        "meters": 152
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543114,
      "ems": null
    },
    {
      "latitude": 51.380173,
      "longitude": 19.686163,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "timestamp": 1676543139,
      "ems": null
    },
    {
      "latitude": 51.37854,
      "longitude": 19.684525,
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
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543144,
      "ems": null
    },
    {
      "latitude": 51.376724,
      "longitude": 19.682693,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543151,
      "ems": null
    },
    {
      "latitude": 51.374908,
      "longitude": 19.680786,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676543157,
      "ems": null
    },
    {
      "latitude": 51.37326,
      "longitude": 19.678963,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676543163,
      "ems": null
    },
    {
      "latitude": 51.372444,
      "longitude": 19.677963,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676543166,
      "ems": null
    },
    {
      "latitude": 51.371658,
      "longitude": 19.677032,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676543169,
      "ems": null
    },
    {
      "latitude": 51.370953,
      "longitude": 19.676056,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676543172,
      "ems": null
    },
    {
      "latitude": 51.370468,
      "longitude": 19.675474,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676543175,
      "ems": null
    },
    {
      "latitude": 51.369415,
      "longitude": 19.673916,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676543178,
      "ems": null
    },
    {
      "latitude": 51.36858,
      "longitude": 19.672699,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676543181,
      "ems": null
    },
    {
      "latitude": 51.36795,
      "longitude": 19.671762,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676543184,
      "ems": null
    },
    {
      "latitude": 51.366951,
      "longitude": 19.670486,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676543187,
      "ems": null
    },
    {
      "latitude": 51.365135,
      "longitude": 19.668732,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1676543193,
      "ems": null
    },
    {
      "latitude": 51.364105,
      "longitude": 19.668051,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1676543196,
      "ems": null
    },
    {
      "latitude": 51.362961,
      "longitude": 19.667458,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 195,
      "squawk": "7000",
      "timestamp": 1676543199,
      "ems": null
    },
    {
      "latitude": 51.362,
      "longitude": 19.66716,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676543202,
      "ems": null
    },
    {
      "latitude": 51.360527,
      "longitude": 19.667053,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1676543205,
      "ems": null
    },
    {
      "latitude": 51.35939,
      "longitude": 19.667234,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1676543208,
      "ems": null
    },
    {
      "latitude": 51.3582,
      "longitude": 19.667755,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 162,
      "squawk": "7000",
      "timestamp": 1676543211,
      "ems": null
    },
    {
      "latitude": 51.357605,
      "longitude": 19.668125,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676543212,
      "ems": null
    },
    {
      "latitude": 51.356369,
      "longitude": 19.66909,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676543216,
      "ems": null
    },
    {
      "latitude": 51.355778,
      "longitude": 19.669647,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 147,
      "squawk": "7000",
      "timestamp": 1676543217,
      "ems": null
    },
    {
      "latitude": 51.35408,
      "longitude": 19.671837,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 142,
      "squawk": "7000",
      "timestamp": 1676543222,
      "ems": null
    },
    {
      "latitude": 51.352985,
      "longitude": 19.673386,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1676543225,
      "ems": null
    },
    {
      "latitude": 51.35252,
      "longitude": 19.674225,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 132,
      "squawk": "7000",
      "timestamp": 1676543227,
      "ems": null
    },
    {
      "latitude": 51.351242,
      "longitude": 19.677107,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676543232,
      "ems": null
    },
    {
      "latitude": 51.350601,
      "longitude": 19.679186,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1676543235,
      "ems": null
    },
    {
      "latitude": 51.350098,
      "longitude": 19.681396,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 107,
      "squawk": "7000",
      "timestamp": 1676543239,
      "ems": null
    },
    {
      "latitude": 51.349773,
      "longitude": 19.683609,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 100,
      "squawk": "7000",
      "timestamp": 1676543242,
      "ems": null
    },
    {
      "latitude": 51.34964,
      "longitude": 19.685421,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 95,
      "squawk": "7000",
      "timestamp": 1676543244,
      "ems": null
    },
    {
      "latitude": 51.34964,
      "longitude": 19.687872,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1676543247,
      "ems": null
    },
    {
      "latitude": 51.349869,
      "longitude": 19.690321,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 80,
      "squawk": "7000",
      "timestamp": 1676543250,
      "ems": null
    },
    {
      "latitude": 51.350239,
      "longitude": 19.692307,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1676543253,
      "ems": null
    },
    {
      "latitude": 51.350887,
      "longitude": 19.694595,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 62,
      "squawk": "7000",
      "timestamp": 1676543256,
      "ems": null
    },
    {
      "latitude": 51.351654,
      "longitude": 19.696407,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 53,
      "squawk": "7000",
      "timestamp": 1676543259,
      "ems": null
    },
    {
      "latitude": 51.352753,
      "longitude": 19.698412,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1676543263,
      "ems": null
    },
    {
      "latitude": 51.353775,
      "longitude": 19.69986,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676543266,
      "ems": null
    },
    {
      "latitude": 51.354847,
      "longitude": 19.701309,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676543269,
      "ems": null
    },
    {
      "latitude": 51.355911,
      "longitude": 19.702717,
      "altitude": {
        "feet": 1375,
        "meters": 419
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1676543272,
      "ems": null
    },
    {
      "latitude": 51.3568,
      "longitude": 19.703903,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 175.9,
        "kts": 95,
        "mph": 109.3
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1676543274,
      "ems": null
    },
    {
      "latitude": 51.358017,
      "longitude": 19.705463,
      "altitude": {
        "feet": 1450,
        "meters": 442
      },
      "speed": {
        "kmh": 181.5,
        "kts": 98,
        "mph": 112.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1676543278,
      "ems": null
    },
    {
      "latitude": 51.359081,
      "longitude": 19.706955,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1676543281,
      "ems": null
    },
    {
      "latitude": 51.360123,
      "longitude": 19.708359,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676543284,
      "ems": null
    },
    {
      "latitude": 51.361084,
      "longitude": 19.709621,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676543286,
      "ems": null
    },
    {
      "latitude": 51.362183,
      "longitude": 19.711105,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676543289,
      "ems": null
    },
    {
      "latitude": 51.363373,
      "longitude": 19.712738,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676543292,
      "ems": null
    },
    {
      "latitude": 51.365692,
      "longitude": 19.715958,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1676543299,
      "ems": null
    },
    {
      "latitude": 51.367996,
      "longitude": 19.719271,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "timestamp": 1676543305,
      "ems": null
    },
    {
      "latitude": 51.370056,
      "longitude": 19.72224,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 43,
      "squawk": "7000",
      "timestamp": 1676543310,
      "ems": null
    },
    {
      "latitude": 51.372437,
      "longitude": 19.725878,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1676543317,
      "ems": null
    },
    {
      "latitude": 51.374634,
      "longitude": 19.729292,
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
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1676543322,
      "ems": null
    },
    {
      "latitude": 51.376957,
      "longitude": 19.732971,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 45,
      "squawk": "7000",
      "timestamp": 1676543329,
      "ems": null
    },
    {
      "latitude": 51.37944,
      "longitude": 19.736938,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1676543335,
      "ems": null
    },
    {
      "latitude": 51.381706,
      "longitude": 19.740143,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676543341,
      "ems": null
    },
    {
      "latitude": 51.384338,
      "longitude": 19.743841,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676543347,
      "ems": null
    },
    {
      "latitude": 51.385757,
      "longitude": 19.745625,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1676543350,
      "ems": null
    },
    {
      "latitude": 51.387108,
      "longitude": 19.747009,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676543353,
      "ems": null
    },
    {
      "latitude": 51.388596,
      "longitude": 19.748001,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1676543356,
      "ems": null
    },
    {
      "latitude": 51.390087,
      "longitude": 19.748535,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 10,
      "squawk": "7000",
      "timestamp": 1676543359,
      "ems": null
    },
    {
      "latitude": 51.391762,
      "longitude": 19.748764,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1676543362,
      "ems": null
    },
    {
      "latitude": 51.393436,
      "longitude": 19.748459,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 351,
      "squawk": "7000",
      "timestamp": 1676543365,
      "ems": null
    },
    {
      "latitude": 51.394867,
      "longitude": 19.747776,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 339,
      "squawk": "7000",
      "timestamp": 1676543368,
      "ems": null
    },
    {
      "latitude": 51.396183,
      "longitude": 19.746628,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 330,
      "squawk": "7000",
      "timestamp": 1676543371,
      "ems": null
    },
    {
      "latitude": 51.39743,
      "longitude": 19.745327,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 321,
      "squawk": "7000",
      "timestamp": 1676543374,
      "ems": null
    },
    {
      "latitude": 51.398514,
      "longitude": 19.743576,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1676543377,
      "ems": null
    },
    {
      "latitude": 51.399399,
      "longitude": 19.741838,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1676543380,
      "ems": null
    },
    {
      "latitude": 51.400002,
      "longitude": 19.740524,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1676543382,
      "ems": null
    },
    {
      "latitude": 51.40126,
      "longitude": 19.737778,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1676543386,
      "ems": null
    },
    {
      "latitude": 51.40205,
      "longitude": 19.73587,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1676543389,
      "ems": null
    },
    {
      "latitude": 51.402657,
      "longitude": 19.734039,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1676543392,
      "ems": null
    },
    {
      "latitude": 51.403061,
      "longitude": 19.732336,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1676543395,
      "ems": null
    },
    {
      "latitude": 51.403305,
      "longitude": 19.729843,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1676543398,
      "ems": null
    },
    {
      "latitude": 51.40329,
      "longitude": 19.727734,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1676543401,
      "ems": null
    },
    {
      "latitude": 51.403214,
      "longitude": 19.725494,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1676543405,
      "ems": null
    },
    {
      "latitude": 51.403168,
      "longitude": 19.72374,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1676543407,
      "ems": null
    },
    {
      "latitude": 51.403072,
      "longitude": 19.721527,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 266,
      "squawk": "7000",
      "timestamp": 1676543411,
      "ems": null
    },
    {
      "latitude": 51.402981,
      "longitude": 19.719849,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1676543413,
      "ems": null
    },
    {
      "latitude": 51.402832,
      "longitude": 19.717787,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 262,
      "squawk": "7000",
      "timestamp": 1676543416,
      "ems": null
    },
    {
      "latitude": 51.402702,
      "longitude": 19.71611,
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
      "heading": 259,
      "squawk": "7000",
      "timestamp": 1676543419,
      "ems": null
    },
    {
      "latitude": 51.40242,
      "longitude": 19.714373,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 257,
      "squawk": "7000",
      "timestamp": 1676543422,
      "ems": null
    },
    {
      "latitude": 51.402008,
      "longitude": 19.712368,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 249,
      "squawk": "7000",
      "timestamp": 1676543425,
      "ems": null
    },
    {
      "latitude": 51.401505,
      "longitude": 19.710735,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1676543428,
      "ems": null
    },
    {
      "latitude": 51.400978,
      "longitude": 19.709473,
      "altitude": {
        "feet": 1175,
        "meters": 358
      },
      "speed": {
        "kmh": 144.5,
        "kts": 78,
        "mph": 89.8
      },
      "verticalSpeed": {
        "fpm": -1216,
        "ms": -6.2
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676543431,
      "ems": null
    },
    {
      "latitude": 51.400375,
      "longitude": 19.708023,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676543434,
      "ems": null
    },
    {
      "latitude": 51.399582,
      "longitude": 19.706503,
      "altitude": {
        "feet": 1075,
        "meters": 328
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676543438,
      "ems": null
    },
    {
      "latitude": 51.398979,
      "longitude": 19.705505,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1676543440,
      "ems": null
    },
    {
      "latitude": 51.398209,
      "longitude": 19.704498,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676543443,
      "ems": null
    },
    {
      "latitude": 51.397385,
      "longitude": 19.703533,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 140.8,
        "kts": 76,
        "mph": 87.5
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676543446,
      "ems": null
    },
    {
      "latitude": 51.396515,
      "longitude": 19.702496,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676543449,
      "ems": null
    },
    {
      "latitude": 51.395439,
      "longitude": 19.701309,
      "altitude": {
        "feet": 850,
        "meters": 259
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676543452,
      "ems": null
    },
    {
      "latitude": 51.394775,
      "longitude": 19.70064,
      "altitude": {
        "feet": 825,
        "meters": 251
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543454,
      "ems": null
    },
    {
      "latitude": 51.393669,
      "longitude": 19.699554,
      "altitude": {
        "feet": 775,
        "meters": 236
      },
      "speed": {
        "kmh": 150,
        "kts": 81,
        "mph": 93.2
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543458,
      "ems": null
    },
    {
      "latitude": 51.392807,
      "longitude": 19.698709,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676543461,
      "ems": null
    },
    {
      "latitude": 51.391994,
      "longitude": 19.697952,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543463,
      "ems": null
    },
    {
      "latitude": 51.39061,
      "longitude": 19.696482,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543468,
      "ems": null
    },
    {
      "latitude": 51.389786,
      "longitude": 19.695591,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676543471,
      "ems": null
    },
    {
      "latitude": 51.389015,
      "longitude": 19.694748,
      "altitude": {
        "feet": 650,
        "meters": 198
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676543473,
      "ems": null
    },
    {
      "latitude": 51.386902,
      "longitude": 19.692547,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543480,
      "ems": null
    },
    {
      "latitude": 51.385246,
      "longitude": 19.690933,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543485,
      "ems": null
    },
    {
      "latitude": 51.38343,
      "longitude": 19.689178,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676543492,
      "ems": null
    },
    {
      "latitude": 51.381546,
      "longitude": 19.687426,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543498,
      "ems": null
    },
    {
      "latitude": 51.379799,
      "longitude": 19.685669,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543504,
      "ems": null
    },
    {
      "latitude": 51.378159,
      "longitude": 19.684011,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543510,
      "ems": null
    },
    {
      "latitude": 51.376602,
      "longitude": 19.682453,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676543516,
      "ems": null
    },
    {
      "latitude": 51.37505,
      "longitude": 19.680786,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676543522,
      "ems": null
    },
    {
      "latitude": 51.373466,
      "longitude": 19.679108,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543528,
      "ems": null
    },
    {
      "latitude": 51.37175,
      "longitude": 19.67733,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676543534,
      "ems": null
    },
    {
      "latitude": 51.37001,
      "longitude": 19.675623,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543540,
      "ems": null
    },
    {
      "latitude": 51.368252,
      "longitude": 19.67392,
      "altitude": {
        "feet": 925,
        "meters": 282
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543546,
      "ems": null
    },
    {
      "latitude": 51.366257,
      "longitude": 19.671986,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543552,
      "ems": null
    },
    {
      "latitude": 51.364388,
      "longitude": 19.670258,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1676543558,
      "ems": null
    },
    {
      "latitude": 51.363556,
      "longitude": 19.669683,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1676543560,
      "ems": null
    },
    {
      "latitude": 51.362732,
      "longitude": 19.669313,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1676543563,
      "ems": null
    },
    {
      "latitude": 51.360992,
      "longitude": 19.668884,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1676543567,
      "ems": null
    },
    {
      "latitude": 51.359875,
      "longitude": 19.668808,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 180,
      "squawk": "7000",
      "timestamp": 1676543570,
      "ems": null
    },
    {
      "latitude": 51.358662,
      "longitude": 19.668961,
      "altitude": {
        "feet": 1000,
        "meters": 305
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
      "heading": 176,
      "squawk": "7000",
      "timestamp": 1676543573,
      "ems": null
    },
    {
      "latitude": 51.357422,
      "longitude": 19.669313,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 169,
      "squawk": "7000",
      "timestamp": 1676543576,
      "ems": null
    },
    {
      "latitude": 51.356232,
      "longitude": 19.669832,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1676543579,
      "ems": null
    },
    {
      "latitude": 51.355125,
      "longitude": 19.670563,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 156,
      "squawk": "7000",
      "timestamp": 1676543582,
      "ems": null
    },
    {
      "latitude": 51.353867,
      "longitude": 19.671707,
      "altitude": {
        "feet": 1050,
        "meters": 320
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676543585,
      "ems": null
    },
    {
      "latitude": 51.353683,
      "longitude": 19.671936,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 145,
      "squawk": "7000",
      "timestamp": 1676543586,
      "ems": null
    },
    {
      "latitude": 51.352425,
      "longitude": 19.673538,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676543590,
      "ems": null
    },
    {
      "latitude": 51.3521,
      "longitude": 19.673996,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 140,
      "squawk": "7000",
      "timestamp": 1676543591,
      "ems": null
    },
    {
      "latitude": 51.350739,
      "longitude": 19.676439,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 129,
      "squawk": "7000",
      "timestamp": 1676543595,
      "ems": null
    },
    {
      "latitude": 51.34996,
      "longitude": 19.677923,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676543598,
      "ems": null
    },
    {
      "latitude": 51.349865,
      "longitude": 19.678192,
      "altitude": {
        "feet": 1100,
        "meters": 335
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676543599,
      "ems": null
    },
    {
      "latitude": 51.349045,
      "longitude": 19.680002,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676543603,
      "ems": null
    },
    {
      "latitude": 51.348038,
      "longitude": 19.682304,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676543606,
      "ems": null
    },
    {
      "latitude": 51.347351,
      "longitude": 19.684011,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676543609,
      "ems": null
    },
    {
      "latitude": 51.34684,
      "longitude": 19.68544,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1676543612,
      "ems": null
    },
    {
      "latitude": 51.346207,
      "longitude": 19.687872,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1676543616,
      "ems": null
    },
    {
      "latitude": 51.345978,
      "longitude": 19.6898,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 97,
      "squawk": "7000",
      "timestamp": 1676543618,
      "ems": null
    },
    {
      "latitude": 51.345955,
      "longitude": 19.692307,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 88,
      "squawk": "7000",
      "timestamp": 1676543622,
      "ems": null
    },
    {
      "latitude": 51.346001,
      "longitude": 19.693069,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 90,
      "squawk": "7000",
      "timestamp": 1676543623,
      "ems": null
    },
    {
      "latitude": 51.346527,
      "longitude": 19.697002,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 72,
      "squawk": "7000",
      "timestamp": 1676543628,
      "ems": null
    },
    {
      "latitude": 51.347027,
      "longitude": 19.698868,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 65,
      "squawk": "7000",
      "timestamp": 1676543630,
      "ems": null
    },
    {
      "latitude": 51.347816,
      "longitude": 19.701004,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 60,
      "squawk": "7000",
      "timestamp": 1676543634,
      "ems": null
    },
    {
      "latitude": 51.348587,
      "longitude": 19.702642,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1676543637,
      "ems": null
    },
    {
      "latitude": 51.349503,
      "longitude": 19.704203,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1676543640,
      "ems": null
    },
    {
      "latitude": 51.350372,
      "longitude": 19.705389,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676543642,
      "ems": null
    },
    {
      "latitude": 51.351425,
      "longitude": 19.706726,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1676543645,
      "ems": null
    },
    {
      "latitude": 51.352566,
      "longitude": 19.708099,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676543649,
      "ems": null
    },
    {
      "latitude": 51.353355,
      "longitude": 19.709244,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676543651,
      "ems": null
    },
    {
      "latitude": 51.354446,
      "longitude": 19.710882,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1676543655,
      "ems": null
    },
    {
      "latitude": 51.355358,
      "longitude": 19.712219,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676543658,
      "ems": null
    },
    {
      "latitude": 51.356277,
      "longitude": 19.713482,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 39,
      "squawk": "7000",
      "timestamp": 1676543661,
      "ems": null
    },
    {
      "latitude": 51.357285,
      "longitude": 19.714594,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 34,
      "squawk": "7000",
      "timestamp": 1676543664,
      "ems": null
    },
    {
      "latitude": 51.358337,
      "longitude": 19.715729,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1676543667,
      "ems": null
    },
    {
      "latitude": 51.35939,
      "longitude": 19.716896,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1676543670,
      "ems": null
    },
    {
      "latitude": 51.360443,
      "longitude": 19.717936,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1676543673,
      "ems": null
    },
    {
      "latitude": 51.361549,
      "longitude": 19.719009,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1676543676,
      "ems": null
    },
    {
      "latitude": 51.362526,
      "longitude": 19.719925,
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
      "heading": 30,
      "squawk": "7000",
      "timestamp": 1676543679,
      "ems": null
    },
    {
      "latitude": 51.363689,
      "longitude": 19.720917,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1676543682,
      "ems": null
    },
    {
      "latitude": 51.36467,
      "longitude": 19.721603,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1676543685,
      "ems": null
    },
    {
      "latitude": 51.365845,
      "longitude": 19.722389,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1676543688,
      "ems": null
    },
    {
      "latitude": 51.36681,
      "longitude": 19.722977,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1676543691,
      "ems": null
    },
    {
      "latitude": 51.36795,
      "longitude": 19.723652,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1676543694,
      "ems": null
    },
    {
      "latitude": 51.369095,
      "longitude": 19.724171,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1676543697,
      "ems": null
    },
    {
      "latitude": 51.3703,
      "longitude": 19.724579,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1676543700,
      "ems": null
    },
    {
      "latitude": 51.371475,
      "longitude": 19.724838,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1676543703,
      "ems": null
    },
    {
      "latitude": 51.372723,
      "longitude": 19.725113,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1676543706,
      "ems": null
    },
    {
      "latitude": 51.373718,
      "longitude": 19.725359,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 7,
      "squawk": "7000",
      "timestamp": 1676543709,
      "ems": null
    },
    {
      "latitude": 51.375046,
      "longitude": 19.725655,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1676543712,
      "ems": null
    },
    {
      "latitude": 51.376213,
      "longitude": 19.726181,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1676543715,
      "ems": null
    },
    {
      "latitude": 51.377422,
      "longitude": 19.727097,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 26,
      "squawk": "7000",
      "timestamp": 1676543718,
      "ems": null
    },
    {
      "latitude": 51.378681,
      "longitude": 19.728165,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1676543721,
      "ems": null
    },
    {
      "latitude": 51.379799,
      "longitude": 19.72908,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1676543724,
      "ems": null
    },
    {
      "latitude": 51.381008,
      "longitude": 19.730225,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676543727,
      "ems": null
    },
    {
      "latitude": 51.382187,
      "longitude": 19.731297,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676543730,
      "ems": null
    },
    {
      "latitude": 51.383423,
      "longitude": 19.73241,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676543733,
      "ems": null
    },
    {
      "latitude": 51.384521,
      "longitude": 19.733376,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676543736,
      "ems": null
    },
    {
      "latitude": 51.385944,
      "longitude": 19.734726,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 33,
      "squawk": "7000",
      "timestamp": 1676543739,
      "ems": null
    },
    {
      "latitude": 51.387108,
      "longitude": 19.736099,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1676543742,
      "ems": null
    },
    {
      "latitude": 51.388275,
      "longitude": 19.737532,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1676543745,
      "ems": null
    },
    {
      "latitude": 51.389572,
      "longitude": 19.739075,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1676543749,
      "ems": null
    },
    {
      "latitude": 51.390598,
      "longitude": 19.740372,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1676543751,
      "ems": null
    },
    {
      "latitude": 51.391937,
      "longitude": 19.741985,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1676543754,
      "ems": null
    },
    {
      "latitude": 51.393219,
      "longitude": 19.743471,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 35,
      "squawk": "7000",
      "timestamp": 1676543758,
      "ems": null
    },
    {
      "latitude": 51.395859,
      "longitude": 19.746017,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 27,
      "squawk": "7000",
      "timestamp": 1676543764,
      "ems": null
    },
    {
      "latitude": 51.397202,
      "longitude": 19.746885,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1676543767,
      "ems": null
    },
    {
      "latitude": 51.39856,
      "longitude": 19.74762,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1676543770,
      "ems": null
    },
    {
      "latitude": 51.399902,
      "longitude": 19.748297,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1676543772,
      "ems": null
    },
    {
      "latitude": 51.401306,
      "longitude": 19.748993,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 17,
      "squawk": "7000",
      "timestamp": 1676543776,
      "ems": null
    },
    {
      "latitude": 51.40274,
      "longitude": 19.749706,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1676543779,
      "ems": null
    },
    {
      "latitude": 51.404099,
      "longitude": 19.75029,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 15,
      "squawk": "7000",
      "timestamp": 1676543782,
      "ems": null
    },
    {
      "latitude": 51.405495,
      "longitude": 19.750824,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 13,
      "squawk": "7000",
      "timestamp": 1676543785,
      "ems": null
    },
    {
      "latitude": 51.407043,
      "longitude": 19.751562,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1676543788,
      "ems": null
    },
    {
      "latitude": 51.408382,
      "longitude": 19.75235,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 21,
      "squawk": "7000",
      "timestamp": 1676543791,
      "ems": null
    },
    {
      "latitude": 51.410988,
      "longitude": 19.754105,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 19,
      "squawk": "7000",
      "timestamp": 1676543796,
      "ems": null
    },
    {
      "latitude": 51.412525,
      "longitude": 19.754639,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 8,
      "squawk": "7000",
      "timestamp": 1676543800,
      "ems": null
    },
    {
      "latitude": 51.414093,
      "longitude": 19.754532,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 355,
      "squawk": "7000",
      "timestamp": 1676543803,
      "ems": null
    },
    {
      "latitude": 51.415409,
      "longitude": 19.754105,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 346,
      "squawk": "7000",
      "timestamp": 1676543806,
      "ems": null
    },
    {
      "latitude": 51.416702,
      "longitude": 19.753344,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 337,
      "squawk": "7000",
      "timestamp": 1676543809,
      "ems": null
    },
    {
      "latitude": 51.417786,
      "longitude": 19.752197,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1676543812,
      "ems": null
    },
    {
      "latitude": 51.418621,
      "longitude": 19.7509,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1676543815,
      "ems": null
    },
    {
      "latitude": 51.419319,
      "longitude": 19.749222,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1676543818,
      "ems": null
    },
    {
      "latitude": 51.419632,
      "longitude": 19.748518,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676543820,
      "ems": null
    },
    {
      "latitude": 51.420719,
      "longitude": 19.745636,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676543824,
      "ems": null
    },
    {
      "latitude": 51.42128,
      "longitude": 19.744064,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676543827,
      "ems": null
    },
    {
      "latitude": 51.421974,
      "longitude": 19.742279,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "timestamp": 1676543830,
      "ems": null
    },
    {
      "latitude": 51.422581,
      "longitude": 19.740677,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676543833,
      "ems": null
    },
    {
      "latitude": 51.423279,
      "longitude": 19.738922,
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676543836,
      "ems": null
    },
    {
      "latitude": 51.424072,
      "longitude": 19.736864,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676543839,
      "ems": null
    },
    {
      "latitude": 51.424667,
      "longitude": 19.735231,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676543842,
      "ems": null
    },
    {
      "latitude": 51.425308,
      "longitude": 19.733301,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1676543845,
      "ems": null
    },
    {
      "latitude": 51.425583,
      "longitude": 19.731743,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 280,
      "squawk": "7000",
      "timestamp": 1676543848,
      "ems": null
    },
    {
      "latitude": 51.425583,
      "longitude": 19.729292,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 268,
      "squawk": "7000",
      "timestamp": 1676543851,
      "ems": null
    },
    {
      "latitude": 51.425262,
      "longitude": 19.727289,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 260,
      "squawk": "7000",
      "timestamp": 1676543854,
      "ems": null
    },
    {
      "latitude": 51.424534,
      "longitude": 19.725418,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676543857,
      "ems": null
    },
    {
      "latitude": 51.42379,
      "longitude": 19.72435,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676543860,
      "ems": null
    },
    {
      "latitude": 51.422836,
      "longitude": 19.723577,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1676543863,
      "ems": null
    },
    {
      "latitude": 51.421051,
      "longitude": 19.722982,
      "altitude": {
        "feet": 1500,
        "meters": 457
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676543866,
      "ems": null
    },
    {
      "latitude": 51.419926,
      "longitude": 19.723053,
      "altitude": {
        "feet": 1475,
        "meters": 450
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
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1676543869,
      "ems": null
    },
    {
      "latitude": 51.418259,
      "longitude": 19.723577,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 165,
      "squawk": "7000",
      "timestamp": 1676543872,
      "ems": null
    },
    {
      "latitude": 51.41684,
      "longitude": 19.724022,
      "altitude": {
        "feet": 1425,
        "meters": 434
      },
      "speed": {
        "kmh": 196.3,
        "kts": 106,
        "mph": 122
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 171,
      "squawk": "7000",
      "timestamp": 1676543876,
      "ems": null
    },
    {
      "latitude": 51.415375,
      "longitude": 19.724096,
      "altitude": {
        "feet": 1400,
        "meters": 427
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
      "heading": 181,
      "squawk": "7000",
      "timestamp": 1676543878,
      "ems": null
    },
    {
      "latitude": 51.414368,
      "longitude": 19.723873,
      "altitude": {
        "feet": 1400,
        "meters": 427
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1676543881,
      "ems": null
    },
    {
      "latitude": 51.41272,
      "longitude": 19.723206,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1676543884,
      "ems": null
    },
    {
      "latitude": 51.411621,
      "longitude": 19.722464,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1676543887,
      "ems": null
    },
    {
      "latitude": 51.410294,
      "longitude": 19.720905,
      "altitude": {
        "feet": 1375,
        "meters": 419
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676543890,
      "ems": null
    },
    {
      "latitude": 51.409882,
      "longitude": 19.720161,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676543893,
      "ems": null
    },
    {
      "latitude": 51.40892,
      "longitude": 19.718159,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676543895,
      "ems": null
    },
    {
      "latitude": 51.408325,
      "longitude": 19.716599,
      "altitude": {
        "feet": 1325,
        "meters": 404
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676543899,
      "ems": null
    },
    {
      "latitude": 51.407318,
      "longitude": 19.714149,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676543902,
      "ems": null
    },
    {
      "latitude": 51.406631,
      "longitude": 19.712887,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676543905,
      "ems": null
    },
    {
      "latitude": 51.405586,
      "longitude": 19.711533,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676543909,
      "ems": null
    },
    {
      "latitude": 51.404755,
      "longitude": 19.710438,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676543911,
      "ems": null
    },
    {
      "latitude": 51.403793,
      "longitude": 19.709398,
      "altitude": {
        "feet": 1250,
        "meters": 381
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676543915,
      "ems": null
    },
    {
      "latitude": 51.403214,
      "longitude": 19.70871,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676543917,
      "ems": null
    },
    {
      "latitude": 51.402191,
      "longitude": 19.707642,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543920,
      "ems": null
    },
    {
      "latitude": 51.401306,
      "longitude": 19.706879,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676543923,
      "ems": null
    },
    {
      "latitude": 51.40028,
      "longitude": 19.705963,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676543927,
      "ems": null
    },
    {
      "latitude": 51.399307,
      "longitude": 19.705093,
      "altitude": {
        "feet": 1025,
        "meters": 312
      },
      "speed": {
        "kmh": 148.2,
        "kts": 80,
        "mph": 92.1
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676543930,
      "ems": null
    },
    {
      "latitude": 51.3983,
      "longitude": 19.704203,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676543933,
      "ems": null
    },
    {
      "latitude": 51.397301,
      "longitude": 19.703293,
      "altitude": {
        "feet": 950,
        "meters": 290
      },
      "speed": {
        "kmh": 151.9,
        "kts": 82,
        "mph": 94.4
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676543936,
      "ems": null
    },
    {
      "latitude": 51.396469,
      "longitude": 19.70257,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543938,
      "ems": null
    },
    {
      "latitude": 51.394463,
      "longitude": 19.700546,
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
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543945,
      "ems": null
    },
    {
      "latitude": 51.392578,
      "longitude": 19.698561,
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
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676543951,
      "ems": null
    },
    {
      "latitude": 51.390831,
      "longitude": 19.696732,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543957,
      "ems": null
    },
    {
      "latitude": 51.389526,
      "longitude": 19.695511,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543962,
      "ems": null
    },
    {
      "latitude": 51.388046,
      "longitude": 19.694033,
      "altitude": {
        "feet": 550,
        "meters": 168
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676543967,
      "ems": null
    },
    {
      "latitude": 51.380077,
      "longitude": 19.686127,
      "altitude": {
        "feet": 525,
        "meters": 160
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676543996,
      "ems": null
    },
    {
      "latitude": 51.37825,
      "longitude": 19.684307,
      "altitude": {
        "feet": 625,
        "meters": 191
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676544002,
      "ems": null
    },
    {
      "latitude": 51.37682,
      "longitude": 19.68277,
      "altitude": {
        "feet": 675,
        "meters": 206
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676544008,
      "ems": null
    },
    {
      "latitude": 51.37463,
      "longitude": 19.68071,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676544014,
      "ems": null
    },
    {
      "latitude": 51.372025,
      "longitude": 19.678116,
      "altitude": {
        "feet": 850,
        "meters": 259
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676544023,
      "ems": null
    },
    {
      "latitude": 51.370148,
      "longitude": 19.676216,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676544029,
      "ems": null
    },
    {
      "latitude": 51.369186,
      "longitude": 19.6754,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676544032,
      "ems": null
    },
    {
      "latitude": 51.368114,
      "longitude": 19.674683,
      "altitude": {
        "feet": 1025,
        "meters": 312
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1676544035,
      "ems": null
    },
    {
      "latitude": 51.367081,
      "longitude": 19.674139,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1676544038,
      "ems": null
    },
    {
      "latitude": 51.365788,
      "longitude": 19.673615,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676544041,
      "ems": null
    },
    {
      "latitude": 51.36462,
      "longitude": 19.673233,
      "altitude": {
        "feet": 1125,
        "meters": 343
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676544044,
      "ems": null
    },
    {
      "latitude": 51.363327,
      "longitude": 19.672802,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676544047,
      "ems": null
    },
    {
      "latitude": 51.362,
      "longitude": 19.67243,
      "altitude": {
        "feet": 1200,
        "meters": 366
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1676544050,
      "ems": null
    },
    {
      "latitude": 51.360718,
      "longitude": 19.67206,
      "altitude": {
        "feet": 1250,
        "meters": 381
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1676544053,
      "ems": null
    },
    {
      "latitude": 51.359409,
      "longitude": 19.671783,
      "altitude": {
        "feet": 1275,
        "meters": 389
      },
      "speed": {
        "kmh": 177.8,
        "kts": 96,
        "mph": 110.5
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676544056,
      "ems": null
    },
    {
      "latitude": 51.358109,
      "longitude": 19.671614,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1676544059,
      "ems": null
    },
    {
      "latitude": 51.356567,
      "longitude": 19.671478,
      "altitude": {
        "feet": 1350,
        "meters": 411
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1676544062,
      "ems": null
    },
    {
      "latitude": 51.355133,
      "longitude": 19.671318,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1676544065,
      "ems": null
    },
    {
      "latitude": 51.35376,
      "longitude": 19.671244,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1676544068,
      "ems": null
    },
    {
      "latitude": 51.35252,
      "longitude": 19.671173,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1676544071,
      "ems": null
    },
    {
      "latitude": 51.350967,
      "longitude": 19.671021,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1676544074,
      "ems": null
    },
    {
      "latitude": 51.349548,
      "longitude": 19.670946,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 182,
      "squawk": "7000",
      "timestamp": 1676544078,
      "ems": null
    },
    {
      "latitude": 51.348129,
      "longitude": 19.670797,
      "altitude": {
        "feet": 1525,
        "meters": 465
      },
      "speed": {
        "kmh": 188.9,
        "kts": 102,
        "mph": 117.4
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 183,
      "squawk": "7000",
      "timestamp": 1676544080,
      "ems": null
    },
    {
      "latitude": 51.345428,
      "longitude": 19.670204,
      "altitude": {
        "feet": 1575,
        "meters": 480
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
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1676544086,
      "ems": null
    },
    {
      "latitude": 51.343918,
      "longitude": 19.669758,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676544089,
      "ems": null
    },
    {
      "latitude": 51.34251,
      "longitude": 19.669266,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676544093,
      "ems": null
    },
    {
      "latitude": 51.341301,
      "longitude": 19.668884,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676544095,
      "ems": null
    },
    {
      "latitude": 51.339855,
      "longitude": 19.668427,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1676544098,
      "ems": null
    },
    {
      "latitude": 51.338272,
      "longitude": 19.668045,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1676544102,
      "ems": null
    },
    {
      "latitude": 51.336876,
      "longitude": 19.66774,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676544105,
      "ems": null
    },
    {
      "latitude": 51.335678,
      "longitude": 19.667532,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676544107,
      "ems": null
    },
    {
      "latitude": 51.33427,
      "longitude": 19.66713,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1676544110,
      "ems": null
    },
    {
      "latitude": 51.330963,
      "longitude": 19.666418,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 188,
      "squawk": "7000",
      "timestamp": 1676544116,
      "ems": null
    },
    {
      "latitude": 51.327801,
      "longitude": 19.66568,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676544122,
      "ems": null
    },
    {
      "latitude": 51.324448,
      "longitude": 19.664993,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676544128,
      "ems": null
    },
    {
      "latitude": 51.320908,
      "longitude": 19.664307,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1676544135,
      "ems": null
    },
    {
      "latitude": 51.318302,
      "longitude": 19.663925,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1676544140,
      "ems": null
    },
    {
      "latitude": 51.312855,
      "longitude": 19.662781,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1676544149,
      "ems": null
    },
    {
      "latitude": 51.308441,
      "longitude": 19.66189,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1676544157,
      "ems": null
    },
    {
      "latitude": 51.305313,
      "longitude": 19.660873,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676544162,
      "ems": null
    },
    {
      "latitude": 51.303406,
      "longitude": 19.660257,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676544166,
      "ems": null
    },
    {
      "latitude": 51.299927,
      "longitude": 19.659143,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676544172,
      "ems": null
    },
    {
      "latitude": 51.296448,
      "longitude": 19.65803,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676544178,
      "ems": null
    },
    {
      "latitude": 51.292698,
      "longitude": 19.657059,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1676544184,
      "ems": null
    },
    {
      "latitude": 51.290955,
      "longitude": 19.657064,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1676544187,
      "ems": null
    },
    {
      "latitude": 51.288986,
      "longitude": 19.657436,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1676544190,
      "ems": null
    },
    {
      "latitude": 51.2873,
      "longitude": 19.658127,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1676544193,
      "ems": null
    },
    {
      "latitude": 51.285416,
      "longitude": 19.659367,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 154,
      "squawk": "7000",
      "timestamp": 1676544196,
      "ems": null
    },
    {
      "latitude": 51.284225,
      "longitude": 19.660553,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 148,
      "squawk": "7000",
      "timestamp": 1676544198,
      "ems": null
    },
    {
      "latitude": 51.282211,
      "longitude": 19.663227,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 136,
      "squawk": "7000",
      "timestamp": 1676544202,
      "ems": null
    },
    {
      "latitude": 51.280975,
      "longitude": 19.665602,
      "altitude": {
        "feet": 1775,
        "meters": 541
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676544205,
      "ems": null
    },
    {
      "latitude": 51.279942,
      "longitude": 19.667969,
      "altitude": {
        "feet": 1800,
        "meters": 549
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676544208,
      "ems": null
    },
    {
      "latitude": 51.278824,
      "longitude": 19.670946,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "timestamp": 1676544211,
      "ems": null
    },
    {
      "latitude": 51.277897,
      "longitude": 19.673615,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1676544214,
      "ems": null
    },
    {
      "latitude": 51.276917,
      "longitude": 19.676361,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1676544217,
      "ems": null
    },
    {
      "latitude": 51.275986,
      "longitude": 19.679037,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "timestamp": 1676544220,
      "ems": null
    },
    {
      "latitude": 51.274933,
      "longitude": 19.681932,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676544223,
      "ems": null
    },
    {
      "latitude": 51.273926,
      "longitude": 19.684679,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676544227,
      "ems": null
    },
    {
      "latitude": 51.272728,
      "longitude": 19.687805,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676544230,
      "ems": null
    },
    {
      "latitude": 51.271912,
      "longitude": 19.690098,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676544232,
      "ems": null
    },
    {
      "latitude": 51.270679,
      "longitude": 19.693146,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676544236,
      "ems": null
    },
    {
      "latitude": 51.26857,
      "longitude": 19.698338,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676544242,
      "ems": null
    },
    {
      "latitude": 51.267467,
      "longitude": 19.700851,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544245,
      "ems": null
    },
    {
      "latitude": 51.266396,
      "longitude": 19.703217,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544248,
      "ems": null
    },
    {
      "latitude": 51.265278,
      "longitude": 19.705582,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676544251,
      "ems": null
    },
    {
      "latitude": 51.264175,
      "longitude": 19.707766,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 242.6,
        "kts": 131,
        "mph": 150.8
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676544254,
      "ems": null
    },
    {
      "latitude": 51.263138,
      "longitude": 19.710007,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544257,
      "ems": null
    },
    {
      "latitude": 51.26202,
      "longitude": 19.712296,
      "altitude": {
        "feet": 1700,
        "meters": 518
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544260,
      "ems": null
    },
    {
      "latitude": 51.260902,
      "longitude": 19.714737,
      "altitude": {
        "feet": 1700,
        "meters": 518
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544263,
      "ems": null
    },
    {
      "latitude": 51.260017,
      "longitude": 19.716492,
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544266,
      "ems": null
    },
    {
      "latitude": 51.257786,
      "longitude": 19.721298,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544272,
      "ems": null
    },
    {
      "latitude": 51.255737,
      "longitude": 19.725876,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544279,
      "ems": null
    },
    {
      "latitude": 51.253876,
      "longitude": 19.729843,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544284,
      "ems": null
    },
    {
      "latitude": 51.251965,
      "longitude": 19.733887,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544291,
      "ems": null
    },
    {
      "latitude": 51.250149,
      "longitude": 19.738083,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544297,
      "ems": null
    },
    {
      "latitude": 51.248428,
      "longitude": 19.742134,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544303,
      "ems": null
    },
    {
      "latitude": 51.246552,
      "longitude": 19.746367,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544309,
      "ems": null
    },
    {
      "latitude": 51.244797,
      "longitude": 19.75029,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544315,
      "ems": null
    },
    {
      "latitude": 51.242844,
      "longitude": 19.754755,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544321,
      "ems": null
    },
    {
      "latitude": 51.241013,
      "longitude": 19.75906,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676544327,
      "ems": null
    },
    {
      "latitude": 51.239212,
      "longitude": 19.763412,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544333,
      "ems": null
    },
    {
      "latitude": 51.237255,
      "longitude": 19.767761,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544339,
      "ems": null
    },
    {
      "latitude": 51.235298,
      "longitude": 19.772263,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544345,
      "ems": null
    },
    {
      "latitude": 51.233551,
      "longitude": 19.77643,
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676544351,
      "ems": null
    },
    {
      "latitude": 51.23167,
      "longitude": 19.781036,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544358,
      "ems": null
    },
    {
      "latitude": 51.229752,
      "longitude": 19.784967,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676544363,
      "ems": null
    },
    {
      "latitude": 51.227757,
      "longitude": 19.789047,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544369,
      "ems": null
    },
    {
      "latitude": 51.225895,
      "longitude": 19.793243,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544376,
      "ems": null
    },
    {
      "latitude": 51.224266,
      "longitude": 19.796982,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544381,
      "ems": null
    },
    {
      "latitude": 51.222263,
      "longitude": 19.801483,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544387,
      "ems": null
    },
    {
      "latitude": 51.220497,
      "longitude": 19.805527,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544393,
      "ems": null
    },
    {
      "latitude": 51.219101,
      "longitude": 19.808655,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544398,
      "ems": null
    },
    {
      "latitude": 51.216522,
      "longitude": 19.814289,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544406,
      "ems": null
    },
    {
      "latitude": 51.214691,
      "longitude": 19.818296,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544411,
      "ems": null
    },
    {
      "latitude": 51.212677,
      "longitude": 19.822922,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676544418,
      "ems": null
    },
    {
      "latitude": 51.21072,
      "longitude": 19.827347,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544424,
      "ems": null
    },
    {
      "latitude": 51.208858,
      "longitude": 19.83139,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544430,
      "ems": null
    },
    {
      "latitude": 51.206863,
      "longitude": 19.835741,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544436,
      "ems": null
    },
    {
      "latitude": 51.20504,
      "longitude": 19.839859,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544442,
      "ems": null
    },
    {
      "latitude": 51.202991,
      "longitude": 19.844131,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544448,
      "ems": null
    },
    {
      "latitude": 51.200993,
      "longitude": 19.848404,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544455,
      "ems": null
    },
    {
      "latitude": 51.199036,
      "longitude": 19.852667,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544461,
      "ems": null
    },
    {
      "latitude": 51.197159,
      "longitude": 19.856823,
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544467,
      "ems": null
    },
    {
      "latitude": 51.195236,
      "longitude": 19.860981,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544473,
      "ems": null
    },
    {
      "latitude": 51.193268,
      "longitude": 19.865286,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544479,
      "ems": null
    },
    {
      "latitude": 51.191307,
      "longitude": 19.86969,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544485,
      "ems": null
    },
    {
      "latitude": 51.189587,
      "longitude": 19.873657,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544491,
      "ems": null
    },
    {
      "latitude": 51.187729,
      "longitude": 19.877831,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544497,
      "ems": null
    },
    {
      "latitude": 51.185768,
      "longitude": 19.882431,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676544503,
      "ems": null
    },
    {
      "latitude": 51.183765,
      "longitude": 19.886627,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676544509,
      "ems": null
    },
    {
      "latitude": 51.181824,
      "longitude": 19.890598,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544515,
      "ems": null
    },
    {
      "latitude": 51.180183,
      "longitude": 19.894028,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 126,
      "squawk": "7000",
      "timestamp": 1676544520,
      "ems": null
    },
    {
      "latitude": 51.17807,
      "longitude": 19.898689,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544527,
      "ems": null
    },
    {
      "latitude": 51.176376,
      "longitude": 19.90255,
      "altitude": {
        "feet": 1875,
        "meters": 572
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544533,
      "ems": null
    },
    {
      "latitude": 51.174728,
      "longitude": 19.906336,
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544539,
      "ems": null
    },
    {
      "latitude": 51.172642,
      "longitude": 19.911041,
      "altitude": {
        "feet": 1950,
        "meters": 594
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
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544547,
      "ems": null
    },
    {
      "latitude": 51.171295,
      "longitude": 19.914278,
      "altitude": {
        "feet": 1975,
        "meters": 602
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
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676544553,
      "ems": null
    },
    {
      "latitude": 51.169476,
      "longitude": 19.918823,
      "altitude": {
        "feet": 2050,
        "meters": 625
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
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676544560,
      "ems": null
    },
    {
      "latitude": 51.167706,
      "longitude": 19.923172,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 122,
      "squawk": "7000",
      "timestamp": 1676544567,
      "ems": null
    },
    {
      "latitude": 51.167099,
      "longitude": 19.924698,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676544570,
      "ems": null
    },
    {
      "latitude": 51.166351,
      "longitude": 19.926676,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676544573,
      "ems": null
    },
    {
      "latitude": 51.164932,
      "longitude": 19.929941,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544580,
      "ems": null
    },
    {
      "latitude": 51.163887,
      "longitude": 19.932785,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 118,
      "squawk": "7000",
      "timestamp": 1676544584,
      "ems": null
    },
    {
      "latitude": 51.163239,
      "longitude": 19.934841,
      "altitude": {
        "feet": 2150,
        "meters": 655
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 117,
      "squawk": "7000",
      "timestamp": 1676544587,
      "ems": null
    },
    {
      "latitude": 51.162186,
      "longitude": 19.938255,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1676544591,
      "ems": null
    },
    {
      "latitude": 51.161469,
      "longitude": 19.940643,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 114,
      "squawk": "7000",
      "timestamp": 1676544595,
      "ems": null
    },
    {
      "latitude": 51.161095,
      "longitude": 19.94194,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1676544596,
      "ems": null
    },
    {
      "latitude": 51.159027,
      "longitude": 19.947609,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1676544603,
      "ems": null
    },
    {
      "latitude": 51.157139,
      "longitude": 19.952621,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 120,
      "squawk": "7000",
      "timestamp": 1676544610,
      "ems": null
    },
    {
      "latitude": 51.155323,
      "longitude": 19.957581,
      "altitude": {
        "feet": 2300,
        "meters": 701
      },
      "speed": {
        "kmh": 237.1,
        "kts": 128,
        "mph": 147.3
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 119,
      "squawk": "7000",
      "timestamp": 1676544616,
      "ems": null
    },
    {
      "latitude": 51.153534,
      "longitude": 19.962233,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676544621,
      "ems": null
    },
    {
      "latitude": 51.152435,
      "longitude": 19.964981,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676544625,
      "ems": null
    },
    {
      "latitude": 51.151367,
      "longitude": 19.967499,
      "altitude": {
        "feet": 2375,
        "meters": 724
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544628,
      "ems": null
    },
    {
      "latitude": 51.149086,
      "longitude": 19.972534,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 125,
      "squawk": "7000",
      "timestamp": 1676544634,
      "ems": null
    },
    {
      "latitude": 51.14827,
      "longitude": 19.974258,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544636,
      "ems": null
    },
    {
      "latitude": 51.14769,
      "longitude": 19.975433,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544637,
      "ems": null
    },
    {
      "latitude": 51.145432,
      "longitude": 19.9799,
      "altitude": {
        "feet": 2450,
        "meters": 747
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676544643,
      "ems": null
    },
    {
      "latitude": 51.14447,
      "longitude": 19.981831,
      "altitude": {
        "feet": 2475,
        "meters": 754
      },
      "speed": {
        "kmh": 261.1,
        "kts": 141,
        "mph": 162.3
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 128,
      "squawk": "7000",
      "timestamp": 1676544645,
      "ems": null
    },
    {
      "latitude": 51.143097,
      "longitude": 19.98465,
      "altitude": {
        "feet": 2500,
        "meters": 762
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544649,
      "ems": null
    },
    {
      "latitude": 51.140751,
      "longitude": 19.989624,
      "altitude": {
        "feet": 2550,
        "meters": 777
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 127,
      "squawk": "7000",
      "timestamp": 1676544655,
      "ems": null
    },
    {
      "latitude": 51.138885,
      "longitude": 19.993559,
      "altitude": {
        "feet": 2600,
        "meters": 792
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 123,
      "squawk": "7000",
      "timestamp": 1676544661,
      "ems": null
    },
    {
      "latitude": 51.137421,
      "longitude": 19.997492,
      "altitude": {
        "feet": 2650,
        "meters": 808
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 116,
      "squawk": "7000",
      "timestamp": 1676544664,
      "ems": null
    },
    {
      "latitude": 51.136608,
      "longitude": 20.000534,
      "altitude": {
        "feet": 2675,
        "meters": 815
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1676544667,
      "ems": null
    },
    {
      "latitude": 51.135956,
      "longitude": 20.003967,
      "altitude": {
        "feet": 2700,
        "meters": 823
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 106,
      "squawk": "7000",
      "timestamp": 1676544670,
      "ems": null
    },
    {
      "latitude": 51.135399,
      "longitude": 20.006561,
      "altitude": {
        "feet": 2725,
        "meters": 831
      },
      "speed": {
        "kmh": 264.8,
        "kts": 143,
        "mph": 164.6
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 110,
      "squawk": "7000",
      "timestamp": 1676544673,
      "ems": null
    },
    {
      "latitude": 51.134701,
      "longitude": 20.00946,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 259.3,
        "kts": 140,
        "mph": 161.1
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 111,
      "squawk": "7000",
      "timestamp": 1676544676,
      "ems": null
    },
    {
      "latitude": 51.134125,
      "longitude": 20.012043,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 108,
      "squawk": "7000",
      "timestamp": 1676544678,
      "ems": null
    },
    {
      "latitude": 51.13353,
      "longitude": 20.015753,
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
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 103,
      "squawk": "7000",
      "timestamp": 1676544682,
      "ems": null
    },
    {
      "latitude": 51.133259,
      "longitude": 20.017548,
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
        "fpm": 960,
        "ms": 4.9
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1676544684,
      "ems": null
    },
    {
      "latitude": 51.133118,
      "longitude": 20.018648,
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
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1676544685,
      "ems": null
    },
    {
      "latitude": 51.132793,
      "longitude": 20.021057,
      "altitude": {
        "feet": 2950,
        "meters": 899
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1676544688,
      "ems": null
    },
    {
      "latitude": 51.132561,
      "longitude": 20.022964,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1676544690,
      "ems": null
    },
    {
      "latitude": 51.132187,
      "longitude": 20.025482,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 102,
      "squawk": "7000",
      "timestamp": 1676544692,
      "ems": null
    },
    {
      "latitude": 51.132019,
      "longitude": 20.026888,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 101,
      "squawk": "7000",
      "timestamp": 1676544694,
      "ems": null
    },
    {
      "latitude": 51.131653,
      "longitude": 20.031342,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 94,
      "squawk": "7000",
      "timestamp": 1676544698,
      "ems": null
    },
    {
      "latitude": 51.131653,
      "longitude": 20.03446,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 87,
      "squawk": "7000",
      "timestamp": 1676544703,
      "ems": null
    },
    {
      "latitude": 51.131908,
      "longitude": 20.037842,
      "altitude": {
        "feet": 3025,
        "meters": 922
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
      "heading": 82,
      "squawk": "7000",
      "timestamp": 1676544705,
      "ems": null
    },
    {
      "latitude": 51.13266,
      "longitude": 20.042328,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 71,
      "squawk": "7000",
      "timestamp": 1676544709,
      "ems": null
    },
    {
      "latitude": 51.133301,
      "longitude": 20.044704,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 251.9,
        "kts": 136,
        "mph": 156.5
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1676544712,
      "ems": null
    },
    {
      "latitude": 51.133575,
      "longitude": 20.045595,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 63,
      "squawk": "7000",
      "timestamp": 1676544713,
      "ems": null
    },
    {
      "latitude": 51.134903,
      "longitude": 20.048861,
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
        "fpm": 768,
        "ms": 3.9
      },
      "heading": 57,
      "squawk": "7000",
      "timestamp": 1676544717,
      "ems": null
    },
    {
      "latitude": 51.135956,
      "longitude": 20.050812,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 235.2,
        "kts": 127,
        "mph": 146.1
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1676544720,
      "ems": null
    },
    {
      "latitude": 51.137306,
      "longitude": 20.052795,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 229.6,
        "kts": 124,
        "mph": 142.7
      },
      "verticalSpeed": {
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676544723,
      "ems": null
    },
    {
      "latitude": 51.139683,
      "longitude": 20.055237,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 28,
      "squawk": "7000",
      "timestamp": 1676544728,
      "ems": null
    },
    {
      "latitude": 51.141731,
      "longitude": 20.056458,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 18,
      "squawk": "7000",
      "timestamp": 1676544732,
      "ems": null
    },
    {
      "latitude": 51.143639,
      "longitude": 20.057068,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1676544735,
      "ems": null
    },
    {
      "latitude": 51.144608,
      "longitude": 20.057175,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1676544738,
      "ems": null
    },
    {
      "latitude": 51.147354,
      "longitude": 20.056656,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1676544742,
      "ems": null
    },
    {
      "latitude": 51.148224,
      "longitude": 20.05621,
      "altitude": {
        "feet": 3375,
        "meters": 1029
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
      "heading": 344,
      "squawk": "7000",
      "timestamp": 1676544744,
      "ems": null
    },
    {
      "latitude": 51.149689,
      "longitude": 20.055244,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 334,
      "squawk": "7000",
      "timestamp": 1676544747,
      "ems": null
    },
    {
      "latitude": 51.149921,
      "longitude": 20.055008,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 331,
      "squawk": "7000",
      "timestamp": 1676544748,
      "ems": null
    },
    {
      "latitude": 51.151199,
      "longitude": 20.053686,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 324,
      "squawk": "7000",
      "timestamp": 1676544752,
      "ems": null
    },
    {
      "latitude": 51.152344,
      "longitude": 20.052202,
      "altitude": {
        "feet": 3425,
        "meters": 1044
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1676544755,
      "ems": null
    },
    {
      "latitude": 51.153442,
      "longitude": 20.050642,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1676544757,
      "ems": null
    },
    {
      "latitude": 51.154625,
      "longitude": 20.048828,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1676544760,
      "ems": null
    },
    {
      "latitude": 51.15477,
      "longitude": 20.048565,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1676544761,
      "ems": null
    },
    {
      "latitude": 51.156372,
      "longitude": 20.045965,
      "altitude": {
        "feet": 3475,
        "meters": 1059
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1676544765,
      "ems": null
    },
    {
      "latitude": 51.157379,
      "longitude": 20.044258,
      "altitude": {
        "feet": 3500,
        "meters": 1067
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
      "heading": 313,
      "squawk": "7000",
      "timestamp": 1676544768,
      "ems": null
    },
    {
      "latitude": 51.158386,
      "longitude": 20.042551,
      "altitude": {
        "feet": 3525,
        "meters": 1074
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1676544771,
      "ems": null
    },
    {
      "latitude": 51.159328,
      "longitude": 20.040894,
      "altitude": {
        "feet": 3550,
        "meters": 1082
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1676544774,
      "ems": null
    },
    {
      "latitude": 51.159977,
      "longitude": 20.039749,
      "altitude": {
        "feet": 3575,
        "meters": 1090
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1676544776,
      "ems": null
    },
    {
      "latitude": 51.16119,
      "longitude": 20.037537,
      "altitude": {
        "feet": 3600,
        "meters": 1097
      },
      "speed": {
        "kmh": 190.8,
        "kts": 103,
        "mph": 118.5
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1676544780,
      "ems": null
    },
    {
      "latitude": 51.162094,
      "longitude": 20.035944,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 2112,
        "ms": 10.7
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1676544783,
      "ems": null
    },
    {
      "latitude": 51.162872,
      "longitude": 20.034386,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 164.8,
        "kts": 89,
        "mph": 102.4
      },
      "verticalSpeed": {
        "fpm": 1472,
        "ms": 7.5
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1676544786,
      "ems": null
    },
    {
      "latitude": 51.163559,
      "longitude": 20.032902,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1676544789,
      "ems": null
    },
    {
      "latitude": 51.164017,
      "longitude": 20.031788,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1676544791,
      "ems": null
    },
    {
      "latitude": 51.165005,
      "longitude": 20.029526,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1676544795,
      "ems": null
    },
    {
      "latitude": 51.16571,
      "longitude": 20.027779,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676544799,
      "ems": null
    },
    {
      "latitude": 51.166218,
      "longitude": 20.026245,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1676544801,
      "ems": null
    },
    {
      "latitude": 51.166588,
      "longitude": 20.023727,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1676544805,
      "ems": null
    },
    {
      "latitude": 51.166309,
      "longitude": 20.021667,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 252,
      "squawk": "7000",
      "timestamp": 1676544808,
      "ems": null
    },
    {
      "latitude": 51.166122,
      "longitude": 20.020981,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 263,
      "squawk": "7000",
      "timestamp": 1676544809,
      "ems": null
    },
    {
      "latitude": 51.16547,
      "longitude": 20.019455,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1676544811,
      "ems": null
    },
    {
      "latitude": 51.164337,
      "longitude": 20.018055,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676544814,
      "ems": null
    },
    {
      "latitude": 51.162231,
      "longitude": 20.016718,
      "altitude": {
        "feet": 3925,
        "meters": 1196
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676544818,
      "ems": null
    },
    {
      "latitude": 51.160351,
      "longitude": 20.016403,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676544821,
      "ems": null
    },
    {
      "latitude": 51.158394,
      "longitude": 20.016785,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676544824,
      "ems": null
    },
    {
      "latitude": 51.156555,
      "longitude": 20.017832,
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
      "heading": 163,
      "squawk": "7000",
      "timestamp": 1676544827,
      "ems": null
    },
    {
      "latitude": 51.154766,
      "longitude": 20.019379,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 281.5,
        "kts": 152,
        "mph": 174.9
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 150,
      "squawk": "7000",
      "timestamp": 1676544830,
      "ems": null
    },
    {
      "latitude": 51.154114,
      "longitude": 20.020218,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 143,
      "squawk": "7000",
      "timestamp": 1676544831,
      "ems": null
    },
    {
      "latitude": 51.151611,
      "longitude": 20.024736,
      "altitude": {
        "feet": 3850,
        "meters": 1173
      },
      "speed": {
        "kmh": 301.9,
        "kts": 163,
        "mph": 187.6
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 124,
      "squawk": "7000",
      "timestamp": 1676544836,
      "ems": null
    },
    {
      "latitude": 51.150948,
      "longitude": 20.026779,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1676544838,
      "ems": null
    },
    {
      "latitude": 51.150295,
      "longitude": 20.029755,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 305.6,
        "kts": 165,
        "mph": 189.9
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 115,
      "squawk": "7000",
      "timestamp": 1676544840,
      "ems": null
    },
    {
      "latitude": 51.149872,
      "longitude": 20.034683,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 303.7,
        "kts": 164,
        "mph": 188.7
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 93,
      "squawk": "7000",
      "timestamp": 1676544845,
      "ems": null
    },
    {
      "latitude": 51.150574,
      "longitude": 20.03952,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 70,
      "squawk": "7000",
      "timestamp": 1676544849,
      "ems": null
    },
    {
      "latitude": 51.152344,
      "longitude": 20.042774,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 41,
      "squawk": "7000",
      "timestamp": 1676544853,
      "ems": null
    },
    {
      "latitude": 51.153183,
      "longitude": 20.043488,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1676544854,
      "ems": null
    },
    {
      "latitude": 51.155323,
      "longitude": 20.044174,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 238.9,
        "kts": 129,
        "mph": 148.5
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 11,
      "squawk": "7000",
      "timestamp": 1676544858,
      "ems": null
    },
    {
      "latitude": 51.156906,
      "longitude": 20.043335,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 336,
      "squawk": "7000",
      "timestamp": 1676544861,
      "ems": null
    },
    {
      "latitude": 51.158203,
      "longitude": 20.041735,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1676544864,
      "ems": null
    },
    {
      "latitude": 51.159374,
      "longitude": 20.040207,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 320,
      "squawk": "7000",
      "timestamp": 1676544867,
      "ems": null
    },
    {
      "latitude": 51.160583,
      "longitude": 20.038605,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 319,
      "squawk": "7000",
      "timestamp": 1676544870,
      "ems": null
    },
    {
      "latitude": 51.161793,
      "longitude": 20.036926,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 318,
      "squawk": "7000",
      "timestamp": 1676544873,
      "ems": null
    },
    {
      "latitude": 51.163193,
      "longitude": 20.035276,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 327,
      "squawk": "7000",
      "timestamp": 1676544876,
      "ems": null
    },
    {
      "latitude": 51.164867,
      "longitude": 20.034485,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 348,
      "squawk": "7000",
      "timestamp": 1676544879,
      "ems": null
    },
    {
      "latitude": 51.166122,
      "longitude": 20.034758,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 12,
      "squawk": "7000",
      "timestamp": 1676544882,
      "ems": null
    },
    {
      "latitude": 51.167332,
      "longitude": 20.035629,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 37,
      "squawk": "7000",
      "timestamp": 1676544884,
      "ems": null
    },
    {
      "latitude": 51.169235,
      "longitude": 20.038765,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 277.8,
        "kts": 150,
        "mph": 172.6
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1676544887,
      "ems": null
    },
    {
      "latitude": 51.169941,
      "longitude": 20.042648,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 288.9,
        "kts": 156,
        "mph": 179.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 79,
      "squawk": "7000",
      "timestamp": 1676544891,
      "ems": null
    },
    {
      "latitude": 51.169739,
      "longitude": 20.045965,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 296.3,
        "kts": 160,
        "mph": 184.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 99,
      "squawk": "7000",
      "timestamp": 1676544894,
      "ems": null
    },
    {
      "latitude": 51.168869,
      "longitude": 20.049232,
      "altitude": {
        "feet": 3825,
        "meters": 1166
      },
      "speed": {
        "kmh": 298.2,
        "kts": 161,
        "mph": 185.3
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 121,
      "squawk": "7000",
      "timestamp": 1676544897,
      "ems": null
    },
    {
      "latitude": 51.16713,
      "longitude": 20.052053,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 294.5,
        "kts": 159,
        "mph": 183
      },
      "verticalSpeed": {
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 141,
      "squawk": "7000",
      "timestamp": 1676544900,
      "ems": null
    },
    {
      "latitude": 51.166489,
      "longitude": 20.052647,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 290.8,
        "kts": 157,
        "mph": 180.7
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 151,
      "squawk": "7000",
      "timestamp": 1676544902,
      "ems": null
    },
    {
      "latitude": 51.162552,
      "longitude": 20.053242,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 266.7,
        "kts": 144,
        "mph": 165.7
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 189,
      "squawk": "7000",
      "timestamp": 1676544907,
      "ems": null
    },
    {
      "latitude": 51.161049,
      "longitude": 20.052032,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 263,
        "kts": 142,
        "mph": 163.4
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676544910,
      "ems": null
    },
    {
      "latitude": 51.159668,
      "longitude": 20.048639,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 216.7,
        "kts": 117,
        "mph": 134.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1676544914,
      "ems": null
    },
    {
      "latitude": 51.159668,
      "longitude": 20.04604,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 276,
      "squawk": "7000",
      "timestamp": 1676544917,
      "ems": null
    },
    {
      "latitude": 51.160217,
      "longitude": 20.044109,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676544920,
      "ems": null
    },
    {
      "latitude": 51.161327,
      "longitude": 20.041809,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "timestamp": 1676544924,
      "ems": null
    },
    {
      "latitude": 51.162167,
      "longitude": 20.040131,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1676544926,
      "ems": null
    },
    {
      "latitude": 51.163189,
      "longitude": 20.037842,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1676544930,
      "ems": null
    },
    {
      "latitude": 51.164539,
      "longitude": 20.034866,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676544934,
      "ems": null
    },
    {
      "latitude": 51.165161,
      "longitude": 20.033346,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 198.2,
        "kts": 107,
        "mph": 123.1
      },
      "verticalSpeed": {
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676544936,
      "ems": null
    },
    {
      "latitude": 51.166077,
      "longitude": 20.031342,
      "altitude": {
        "feet": 3900,
        "meters": 1189
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676544940,
      "ems": null
    },
    {
      "latitude": 51.166821,
      "longitude": 20.029602,
      "altitude": {
        "feet": 3900,
        "meters": 1189
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676544942,
      "ems": null
    },
    {
      "latitude": 51.167679,
      "longitude": 20.027704,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1676544946,
      "ems": null
    },
    {
      "latitude": 51.168365,
      "longitude": 20.026146,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676544948,
      "ems": null
    },
    {
      "latitude": 51.169968,
      "longitude": 20.02236,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676544955,
      "ems": null
    },
    {
      "latitude": 51.171249,
      "longitude": 20.01939,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676544960,
      "ems": null
    },
    {
      "latitude": 51.172359,
      "longitude": 20.016785,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1676544967,
      "ems": null
    },
    {
      "latitude": 51.173264,
      "longitude": 20.014492,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1676544972,
      "ems": null
    },
    {
      "latitude": 51.174129,
      "longitude": 20.012283,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 302,
      "squawk": "7000",
      "timestamp": 1676544979,
      "ems": null
    },
    {
      "latitude": 51.174774,
      "longitude": 20.010557,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676544984,
      "ems": null
    },
    {
      "latitude": 51.175644,
      "longitude": 20.008553,
      "altitude": {
        "feet": 3875,
        "meters": 1181
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
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1676544990,
      "ems": null
    },
    {
      "latitude": 51.176319,
      "longitude": 20.006866,
      "altitude": {
        "feet": 3875,
        "meters": 1181
      },
      "speed": {
        "kmh": 90.7,
        "kts": 49,
        "mph": 56.4
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 303,
      "squawk": "7000",
      "timestamp": 1676544996,
      "ems": null
    },
    {
      "latitude": 51.177204,
      "longitude": 20.004883,
      "altitude": {
        "feet": 3850,
        "meters": 1173
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1676545003,
      "ems": null
    },
    {
      "latitude": 51.177612,
      "longitude": 20.004099,
      "altitude": {
        "feet": 3825,
        "meters": 1166
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
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1676545006,
      "ems": null
    },
    {
      "latitude": 51.178116,
      "longitude": 20.003283,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 79.6,
        "kts": 43,
        "mph": 49.5
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 311,
      "squawk": "7000",
      "timestamp": 1676545009,
      "ems": null
    },
    {
      "latitude": 51.178459,
      "longitude": 20.00267,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 312,
      "squawk": "7000",
      "timestamp": 1676545012,
      "ems": null
    },
    {
      "latitude": 51.178787,
      "longitude": 20.002136,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1676545015,
      "ems": null
    },
    {
      "latitude": 51.179531,
      "longitude": 20.000534,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 307,
      "squawk": "7000",
      "timestamp": 1676545021,
      "ems": null
    },
    {
      "latitude": 51.180134,
      "longitude": 19.999237,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": -192,
        "ms": -1
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676545026,
      "ems": null
    },
    {
      "latitude": 51.180588,
      "longitude": 19.998236,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 70.4,
        "kts": 38,
        "mph": 43.7
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676545030,
      "ems": null
    },
    {
      "latitude": 51.180817,
      "longitude": 19.997641,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 68.5,
        "kts": 37,
        "mph": 42.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676545034,
      "ems": null
    },
    {
      "latitude": 51.181091,
      "longitude": 19.996973,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 68.5,
        "kts": 37,
        "mph": 42.6
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 304,
      "squawk": "7000",
      "timestamp": 1676545036,
      "ems": null
    },
    {
      "latitude": 51.181366,
      "longitude": 19.996305,
      "altitude": {
        "feet": 3725,
        "meters": 1135
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676545039,
      "ems": null
    },
    {
      "latitude": 51.181625,
      "longitude": 19.995499,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676545043,
      "ems": null
    },
    {
      "latitude": 51.181915,
      "longitude": 19.99482,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 299,
      "squawk": "7000",
      "timestamp": 1676545046,
      "ems": null
    },
    {
      "latitude": 51.182144,
      "longitude": 19.994078,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 297,
      "squawk": "7000",
      "timestamp": 1676545049,
      "ems": null
    },
    {
      "latitude": 51.182323,
      "longitude": 19.993439,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1676545052,
      "ems": null
    },
    {
      "latitude": 51.182556,
      "longitude": 19.992668,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": 0,
        "ms": 0
      },
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1676545055,
      "ems": null
    },
    {
      "latitude": 51.182739,
      "longitude": 19.991924,
      "altitude": {
        "feet": 3750,
        "meters": 1143
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1676545058,
      "ems": null
    },
    {
      "latitude": 51.182968,
      "longitude": 19.991257,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 295,
      "squawk": "7000",
      "timestamp": 1676545061,
      "ems": null
    },
    {
      "latitude": 51.183163,
      "longitude": 19.99054,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 63,
        "kts": 34,
        "mph": 39.1
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 293,
      "squawk": "7000",
      "timestamp": 1676545064,
      "ems": null
    },
    {
      "latitude": 51.183334,
      "longitude": 19.989773,
      "altitude": {
        "feet": 3775,
        "meters": 1151
      },
      "speed": {
        "kmh": 64.8,
        "kts": 35,
        "mph": 40.3
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 289,
      "squawk": "7000",
      "timestamp": 1676545067,
      "ems": null
    },
    {
      "latitude": 51.183487,
      "longitude": 19.988937,
      "altitude": {
        "feet": 3800,
        "meters": 1158
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1676545070,
      "ems": null
    },
    {
      "latitude": 51.183609,
      "longitude": 19.988214,
      "altitude": {
        "feet": 3800,
        "meters": 1158
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
      "heading": 288,
      "squawk": "7000",
      "timestamp": 1676545073,
      "ems": null
    },
    {
      "latitude": 51.184185,
      "longitude": 19.986343,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 85.2,
        "kts": 46,
        "mph": 52.9
      },
      "verticalSpeed": {
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 296,
      "squawk": "7000",
      "timestamp": 1676545079,
      "ems": null
    },
    {
      "latitude": 51.184525,
      "longitude": 19.985468,
      "altitude": {
        "feet": 3700,
        "meters": 1128
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
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676545082,
      "ems": null
    },
    {
      "latitude": 51.184978,
      "longitude": 19.983749,
      "altitude": {
        "feet": 3700,
        "meters": 1128
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1676545089,
      "ems": null
    },
    {
      "latitude": 51.18549,
      "longitude": 19.982376,
      "altitude": {
        "feet": 3575,
        "meters": 1090
      },
      "speed": {
        "kmh": 66.7,
        "kts": 36,
        "mph": 41.4
      },
      "verticalSpeed": {
        "fpm": -2048,
        "ms": -10.4
      },
      "heading": 316,
      "squawk": "7000",
      "timestamp": 1676545096,
      "ems": null
    },
    {
      "latitude": 51.186035,
      "longitude": 19.98131,
      "altitude": {
        "feet": 3400,
        "meters": 1036
      },
      "speed": {
        "kmh": 124.1,
        "kts": 67,
        "mph": 77.1
      },
      "verticalSpeed": {
        "fpm": -3072,
        "ms": -15.6
      },
      "heading": 301,
      "squawk": "7000",
      "timestamp": 1676545100,
      "ems": null
    },
    {
      "latitude": 51.186493,
      "longitude": 19.979084,
      "altitude": {
        "feet": 3400,
        "meters": 1036
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
      "heading": 284,
      "squawk": "7000",
      "timestamp": 1676545105,
      "ems": null
    },
    {
      "latitude": 51.186722,
      "longitude": 19.977154,
      "altitude": {
        "feet": 3450,
        "meters": 1052
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
      "heading": 277,
      "squawk": "7000",
      "timestamp": 1676545108,
      "ems": null
    },
    {
      "latitude": 51.186745,
      "longitude": 19.975891,
      "altitude": {
        "feet": 3500,
        "meters": 1067
      },
      "speed": {
        "kmh": 88.9,
        "kts": 48,
        "mph": 55.2
      },
      "verticalSpeed": {
        "fpm": 832,
        "ms": 4.2
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1676545112,
      "ems": null
    },
    {
      "latitude": 51.186794,
      "longitude": 19.975052,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 68.5,
        "kts": 37,
        "mph": 42.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1676545115,
      "ems": null
    },
    {
      "latitude": 51.186813,
      "longitude": 19.974333,
      "altitude": {
        "feet": 3525,
        "meters": 1074
      },
      "speed": {
        "kmh": 55.6,
        "kts": 30,
        "mph": 34.5
      },
      "verticalSpeed": {
        "fpm": 192,
        "ms": 1
      },
      "heading": 270,
      "squawk": "7000",
      "timestamp": 1676545118,
      "ems": null
    },
    {
      "latitude": 51.186932,
      "longitude": 19.973145,
      "altitude": {
        "feet": 3450,
        "meters": 1052
      },
      "speed": {
        "kmh": 53.7,
        "kts": 29,
        "mph": 33.4
      },
      "verticalSpeed": {
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676545124,
      "ems": null
    },
    {
      "latitude": 51.187454,
      "longitude": 19.972328,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 113,
        "kts": 61,
        "mph": 70.2
      },
      "verticalSpeed": {
        "fpm": -3968,
        "ms": -20.2
      },
      "heading": 315,
      "squawk": "7000",
      "timestamp": 1676545127,
      "ems": null
    },
    {
      "latitude": 51.188141,
      "longitude": 19.971085,
      "altitude": {
        "feet": 3175,
        "meters": 968
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
      "heading": 310,
      "squawk": "7000",
      "timestamp": 1676545130,
      "ems": null
    },
    {
      "latitude": 51.188702,
      "longitude": 19.970016,
      "altitude": {
        "feet": 3200,
        "meters": 975
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
      "heading": 308,
      "squawk": "7000",
      "timestamp": 1676545133,
      "ems": null
    },
    {
      "latitude": 51.18924,
      "longitude": 19.96884,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 305,
      "squawk": "7000",
      "timestamp": 1676545136,
      "ems": null
    },
    {
      "latitude": 51.189587,
      "longitude": 19.967651,
      "altitude": {
        "feet": 3300,
        "meters": 1006
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
      "heading": 291,
      "squawk": "7000",
      "timestamp": 1676545139,
      "ems": null
    },
    {
      "latitude": 51.189678,
      "longitude": 19.967041,
      "altitude": {
        "feet": 3300,
        "meters": 1006
      },
      "speed": {
        "kmh": 81.5,
        "kts": 44,
        "mph": 50.6
      },
      "verticalSpeed": {
        "fpm": 384,
        "ms": 2
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1676545141,
      "ems": null
    },
    {
      "latitude": 51.189587,
      "longitude": 19.966049,
      "altitude": {
        "feet": 3325,
        "meters": 1013
      },
      "speed": {
        "kmh": 55.6,
        "kts": 30,
        "mph": 34.5
      },
      "verticalSpeed": {
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 264,
      "squawk": "7000",
      "timestamp": 1676545145,
      "ems": null
    },
    {
      "latitude": 51.189697,
      "longitude": 19.965202,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 75.9,
        "kts": 41,
        "mph": 47.2
      },
      "verticalSpeed": {
        "fpm": -2432,
        "ms": -12.4
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1676545148,
      "ems": null
    },
    {
      "latitude": 51.189972,
      "longitude": 19.964014,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 125.9,
        "kts": 68,
        "mph": 78.3
      },
      "verticalSpeed": {
        "fpm": -2688,
        "ms": -13.7
      },
      "heading": 290,
      "squawk": "7000",
      "timestamp": 1676545151,
      "ems": null
    },
    {
      "latitude": 51.190247,
      "longitude": 19.962456,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 285,
      "squawk": "7000",
      "timestamp": 1676545154,
      "ems": null
    },
    {
      "latitude": 51.190472,
      "longitude": 19.960938,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 118.5,
        "kts": 64,
        "mph": 73.6
      },
      "verticalSpeed": {
        "fpm": 1024,
        "ms": 5.2
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1676545157,
      "ems": null
    },
    {
      "latitude": 51.190609,
      "longitude": 19.959641,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 114.8,
        "kts": 62,
        "mph": 71.3
      },
      "verticalSpeed": {
        "fpm": 1344,
        "ms": 6.8
      },
      "heading": 278,
      "squawk": "7000",
      "timestamp": 1676545160,
      "ems": null
    },
    {
      "latitude": 51.190704,
      "longitude": 19.958075,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 275,
      "squawk": "7000",
      "timestamp": 1676545163,
      "ems": null
    },
    {
      "latitude": 51.190796,
      "longitude": 19.956741,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 274,
      "squawk": "7000",
      "timestamp": 1676545166,
      "ems": null
    },
    {
      "latitude": 51.190796,
      "longitude": 19.955597,
      "altitude": {
        "feet": 3250,
        "meters": 991
      },
      "speed": {
        "kmh": 100,
        "kts": 54,
        "mph": 62.1
      },
      "verticalSpeed": {
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 273,
      "squawk": "7000",
      "timestamp": 1676545169,
      "ems": null
    },
    {
      "latitude": 51.190842,
      "longitude": 19.954437,
      "altitude": {
        "feet": 3250,
        "meters": 991
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
      "heading": 271,
      "squawk": "7000",
      "timestamp": 1676545172,
      "ems": null
    },
    {
      "latitude": 51.190796,
      "longitude": 19.952581,
      "altitude": {
        "feet": 3275,
        "meters": 998
      },
      "speed": {
        "kmh": 74.1,
        "kts": 40,
        "mph": 46
      },
      "verticalSpeed": {
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1676545178,
      "ems": null
    },
    {
      "latitude": 51.190842,
      "longitude": 19.951859,
      "altitude": {
        "feet": 3225,
        "meters": 983
      },
      "speed": {
        "kmh": 72.2,
        "kts": 39,
        "mph": 44.9
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 281,
      "squawk": "7000",
      "timestamp": 1676545181,
      "ems": null
    },
    {
      "latitude": 51.191208,
      "longitude": 19.950653,
      "altitude": {
        "feet": 3050,
        "meters": 930
      },
      "speed": {
        "kmh": 116.7,
        "kts": 63,
        "mph": 72.5
      },
      "verticalSpeed": {
        "fpm": -3072,
        "ms": -15.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676545184,
      "ems": null
    },
    {
      "latitude": 51.191868,
      "longitude": 19.949036,
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
        "fpm": -2880,
        "ms": -14.6
      },
      "heading": 300,
      "squawk": "7000",
      "timestamp": 1676545187,
      "ems": null
    },
    {
      "latitude": 51.19252,
      "longitude": 19.947205,
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
        "fpm": -1088,
        "ms": -5.5
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676545190,
      "ems": null
    },
    {
      "latitude": 51.193169,
      "longitude": 19.945221,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676545193,
      "ems": null
    },
    {
      "latitude": 51.193684,
      "longitude": 19.943542,
      "altitude": {
        "feet": 2925,
        "meters": 892
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
      "heading": 294,
      "squawk": "7000",
      "timestamp": 1676545196,
      "ems": null
    },
    {
      "latitude": 51.194092,
      "longitude": 19.941299,
      "altitude": {
        "feet": 2975,
        "meters": 907
      },
      "speed": {
        "kmh": 168.5,
        "kts": 91,
        "mph": 104.7
      },
      "verticalSpeed": {
        "fpm": 896,
        "ms": 4.6
      },
      "heading": 282,
      "squawk": "7000",
      "timestamp": 1676545200,
      "ems": null
    },
    {
      "latitude": 51.193867,
      "longitude": 19.937592,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 256,
      "squawk": "7000",
      "timestamp": 1676545205,
      "ems": null
    },
    {
      "latitude": 51.193169,
      "longitude": 19.93576,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676545208,
      "ems": null
    },
    {
      "latitude": 51.192169,
      "longitude": 19.934246,
      "altitude": {
        "feet": 3075,
        "meters": 937
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676545211,
      "ems": null
    },
    {
      "latitude": 51.190937,
      "longitude": 19.933167,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1676545214,
      "ems": null
    },
    {
      "latitude": 51.189423,
      "longitude": 19.932243,
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
        "fpm": -1408,
        "ms": -7.2
      },
      "heading": 199,
      "squawk": "7000",
      "timestamp": 1676545218,
      "ems": null
    },
    {
      "latitude": 51.187675,
      "longitude": 19.931335,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 231.5,
        "kts": 125,
        "mph": 143.8
      },
      "verticalSpeed": {
        "fpm": -2240,
        "ms": -11.4
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1676545221,
      "ems": null
    },
    {
      "latitude": 51.186813,
      "longitude": 19.930906,
      "altitude": {
        "feet": 2775,
        "meters": 846
      },
      "speed": {
        "kmh": 244.5,
        "kts": 132,
        "mph": 151.9
      },
      "verticalSpeed": {
        "fpm": -2624,
        "ms": -13.3
      },
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1676545222,
      "ems": null
    },
    {
      "latitude": 51.184662,
      "longitude": 19.929867,
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
        "fpm": 3136,
        "ms": 15.9
      },
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1676545227,
      "ems": null
    },
    {
      "latitude": 51.18338,
      "longitude": 19.929274,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 174.1,
        "kts": 94,
        "mph": 108.2
      },
      "verticalSpeed": {
        "fpm": 2560,
        "ms": 13
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1676545230,
      "ems": null
    },
    {
      "latitude": 51.182053,
      "longitude": 19.928976,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 183.3,
        "kts": 99,
        "mph": 113.9
      },
      "verticalSpeed": {
        "fpm": 1152,
        "ms": 5.9
      },
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1676545232,
      "ems": null
    },
    {
      "latitude": 51.18045,
      "longitude": 19.929125,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1676545236,
      "ems": null
    },
    {
      "latitude": 51.179344,
      "longitude": 19.929276,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 214.8,
        "kts": 116,
        "mph": 133.5
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 175,
      "squawk": "7000",
      "timestamp": 1676545238,
      "ems": null
    },
    {
      "latitude": 51.177521,
      "longitude": 19.929422,
      "altitude": {
        "feet": 3050,
        "meters": 930
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
      "heading": 177,
      "squawk": "7000",
      "timestamp": 1676545242,
      "ems": null
    },
    {
      "latitude": 51.17569,
      "longitude": 19.929497,
      "altitude": {
        "feet": 3025,
        "meters": 922
      },
      "speed": {
        "kmh": 233.4,
        "kts": 126,
        "mph": 145
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1676545244,
      "ems": null
    },
    {
      "latitude": 51.174225,
      "longitude": 19.929571,
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
        "fpm": -2112,
        "ms": -10.7
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1676545247,
      "ems": null
    },
    {
      "latitude": 51.171848,
      "longitude": 19.929581,
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
        "fpm": -2304,
        "ms": -11.7
      },
      "heading": 179,
      "squawk": "7000",
      "timestamp": 1676545251,
      "ems": null
    },
    {
      "latitude": 51.170315,
      "longitude": 19.929733,
      "altitude": {
        "feet": 3100,
        "meters": 945
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": 2624,
        "ms": 13.3
      },
      "heading": 178,
      "squawk": "7000",
      "timestamp": 1676545254,
      "ems": null
    },
    {
      "latitude": 51.168823,
      "longitude": 19.93009,
      "altitude": {
        "feet": 3200,
        "meters": 975
      },
      "speed": {
        "kmh": 205.6,
        "kts": 111,
        "mph": 127.7
      },
      "verticalSpeed": {
        "fpm": 2240,
        "ms": 11.4
      },
      "heading": 170,
      "squawk": "7000",
      "timestamp": 1676545256,
      "ems": null
    },
    {
      "latitude": 51.16724,
      "longitude": 19.930954,
      "altitude": {
        "feet": 3225,
        "meters": 983
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
      "heading": 158,
      "squawk": "7000",
      "timestamp": 1676545260,
      "ems": null
    },
    {
      "latitude": 51.165657,
      "longitude": 19.932251,
      "altitude": {
        "feet": 3175,
        "meters": 968
      },
      "speed": {
        "kmh": 240.8,
        "kts": 130,
        "mph": 149.6
      },
      "verticalSpeed": {
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1676545263,
      "ems": null
    },
    {
      "latitude": 51.163982,
      "longitude": 19.933548,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1676545266,
      "ems": null
    },
    {
      "latitude": 51.16333,
      "longitude": 19.934025,
      "altitude": {
        "feet": 3125,
        "meters": 953
      },
      "speed": {
        "kmh": 250,
        "kts": 135,
        "mph": 155.4
      },
      "verticalSpeed": {
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 153,
      "squawk": "7000",
      "timestamp": 1676545267,
      "ems": null
    },
    {
      "latitude": 51.161179,
      "longitude": 19.936548,
      "altitude": {
        "feet": 3125,
        "meters": 953
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
      "heading": 138,
      "squawk": "7000",
      "timestamp": 1676545271,
      "ems": null
    },
    {
      "latitude": 51.160217,
      "longitude": 19.940704,
      "altitude": {
        "feet": 3075,
        "meters": 937
      },
      "speed": {
        "kmh": 246.3,
        "kts": 133,
        "mph": 153.1
      },
      "verticalSpeed": {
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 105,
      "squawk": "7000",
      "timestamp": 1676545276,
      "ems": null
    },
    {
      "latitude": 51.160629,
      "longitude": 19.94323,
      "altitude": {
        "feet": 3000,
        "meters": 914
      },
      "speed": {
        "kmh": 248.2,
        "kts": 134,
        "mph": 154.2
      },
      "verticalSpeed": {
        "fpm": -1792,
        "ms": -9.1
      },
      "heading": 67,
      "squawk": "7000",
      "timestamp": 1676545279,
      "ems": null
    },
    {
      "latitude": 51.161701,
      "longitude": 19.945831,
      "altitude": {
        "feet": 2825,
        "meters": 861
      },
      "speed": {
        "kmh": 257.4,
        "kts": 139,
        "mph": 160
      },
      "verticalSpeed": {
        "fpm": -3328,
        "ms": -16.9
      },
      "heading": 54,
      "squawk": "7000",
      "timestamp": 1676545281,
      "ems": null
    },
    {
      "latitude": 51.16301,
      "longitude": 19.9485,
      "altitude": {
        "feet": 2800,
        "meters": 853
      },
      "speed": {
        "kmh": 255.6,
        "kts": 138,
        "mph": 158.8
      },
      "verticalSpeed": {
        "fpm": -1152,
        "ms": -5.9
      },
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1676545285,
      "ems": null
    },
    {
      "latitude": 51.164154,
      "longitude": 19.9508,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 51,
      "squawk": "7000",
      "timestamp": 1676545288,
      "ems": null
    },
    {
      "latitude": 51.165379,
      "longitude": 19.953156,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 50,
      "squawk": "7000",
      "timestamp": 1676545291,
      "ems": null
    },
    {
      "latitude": 51.166397,
      "longitude": 19.955032,
      "altitude": {
        "feet": 2825,
        "meters": 861
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
      "heading": 48,
      "squawk": "7000",
      "timestamp": 1676545294,
      "ems": null
    },
    {
      "latitude": 51.16777,
      "longitude": 19.957407,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 47,
      "squawk": "7000",
      "timestamp": 1676545297,
      "ems": null
    },
    {
      "latitude": 51.168964,
      "longitude": 19.959412,
      "altitude": {
        "feet": 2800,
        "meters": 853
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
      "heading": 46,
      "squawk": "7000",
      "timestamp": 1676545300,
      "ems": null
    },
    {
      "latitude": 51.170174,
      "longitude": 19.961319,
      "altitude": {
        "feet": 2750,
        "meters": 838
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 44,
      "squawk": "7000",
      "timestamp": 1676545303,
      "ems": null
    },
    {
      "latitude": 51.171295,
      "longitude": 19.962975,
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
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 42,
      "squawk": "7000",
      "timestamp": 1676545306,
      "ems": null
    },
    {
      "latitude": 51.171848,
      "longitude": 19.96376,
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
        "fpm": -960,
        "ms": -4.9
      },
      "heading": 40,
      "squawk": "7000",
      "timestamp": 1676545307,
      "ems": null
    },
    {
      "latitude": 51.173527,
      "longitude": 19.965897,
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
        "fpm": -1280,
        "ms": -6.5
      },
      "heading": 38,
      "squawk": "7000",
      "timestamp": 1676545311,
      "ems": null
    },
    {
      "latitude": 51.174873,
      "longitude": 19.967422,
      "altitude": {
        "feet": 2550,
        "meters": 777
      },
      "speed": {
        "kmh": 209.3,
        "kts": 113,
        "mph": 130
      },
      "verticalSpeed": {
        "fpm": -1024,
        "ms": -5.2
      },
      "heading": 36,
      "squawk": "7000",
      "timestamp": 1676545314,
      "ems": null
    },
    {
      "latitude": 51.176086,
      "longitude": 19.968643,
      "altitude": {
        "feet": 2525,
        "meters": 770
      },
      "speed": {
        "kmh": 203.7,
        "kts": 110,
        "mph": 126.6
      },
      "verticalSpeed": {
        "fpm": -896,
        "ms": -4.6
      },
      "heading": 31,
      "squawk": "7000",
      "timestamp": 1676545317,
      "ems": null
    },
    {
      "latitude": 51.177338,
      "longitude": 19.969805,
      "altitude": {
        "feet": 2475,
        "meters": 754
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
      "heading": 29,
      "squawk": "7000",
      "timestamp": 1676545320,
      "ems": null
    },
    {
      "latitude": 51.17894,
      "longitude": 19.970917,
      "altitude": {
        "feet": 2425,
        "meters": 739
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
      "heading": 23,
      "squawk": "7000",
      "timestamp": 1676545323,
      "ems": null
    },
    {
      "latitude": 51.180229,
      "longitude": 19.971695,
      "altitude": {
        "feet": 2400,
        "meters": 732
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
      "heading": 20,
      "squawk": "7000",
      "timestamp": 1676545326,
      "ems": null
    },
    {
      "latitude": 51.181595,
      "longitude": 19.972403,
      "altitude": {
        "feet": 2350,
        "meters": 716
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
      "heading": 16,
      "squawk": "7000",
      "timestamp": 1676545330,
      "ems": null
    },
    {
      "latitude": 51.182877,
      "longitude": 19.972921,
      "altitude": {
        "feet": 2325,
        "meters": 709
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
      "heading": 14,
      "squawk": "7000",
      "timestamp": 1676545333,
      "ems": null
    },
    {
      "latitude": 51.184067,
      "longitude": 19.973293,
      "altitude": {
        "feet": 2300,
        "meters": 701
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
      "heading": 9,
      "squawk": "7000",
      "timestamp": 1676545335,
      "ems": null
    },
    {
      "latitude": 51.185444,
      "longitude": 19.97345,
      "altitude": {
        "feet": 2275,
        "meters": 693
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
      "heading": 3,
      "squawk": "7000",
      "timestamp": 1676545339,
      "ems": null
    },
    {
      "latitude": 51.186558,
      "longitude": 19.97345,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 359,
      "squawk": "7000",
      "timestamp": 1676545341,
      "ems": null
    },
    {
      "latitude": 51.187771,
      "longitude": 19.973373,
      "altitude": {
        "feet": 2200,
        "meters": 671
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
      "heading": 356,
      "squawk": "7000",
      "timestamp": 1676545344,
      "ems": null
    },
    {
      "latitude": 51.188839,
      "longitude": 19.973221,
      "altitude": {
        "feet": 2175,
        "meters": 663
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
      "heading": 353,
      "squawk": "7000",
      "timestamp": 1676545347,
      "ems": null
    },
    {
      "latitude": 51.190144,
      "longitude": 19.972839,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 350,
      "squawk": "7000",
      "timestamp": 1676545350,
      "ems": null
    },
    {
      "latitude": 51.191353,
      "longitude": 19.972382,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "heading": 345,
      "squawk": "7000",
      "timestamp": 1676545354,
      "ems": null
    },
    {
      "latitude": 51.192444,
      "longitude": 19.971807,
      "altitude": {
        "feet": 2150,
        "meters": 655
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
      "timestamp": 1676545357,
      "ems": null
    },
    {
      "latitude": 51.193451,
      "longitude": 19.970917,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 329,
      "squawk": "7000",
      "timestamp": 1676545360,
      "ems": null
    },
    {
      "latitude": 51.194458,
      "longitude": 19.96973,
      "altitude": {
        "feet": 2125,
        "meters": 648
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
      "timestamp": 1676545363,
      "ems": null
    },
    {
      "latitude": 51.195145,
      "longitude": 19.968468,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 309,
      "squawk": "7000",
      "timestamp": 1676545366,
      "ems": null
    },
    {
      "latitude": 51.195637,
      "longitude": 19.967117,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 298,
      "squawk": "7000",
      "timestamp": 1676545369,
      "ems": null
    },
    {
      "latitude": 51.195923,
      "longitude": 19.965424,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 279,
      "squawk": "7000",
      "timestamp": 1676545372,
      "ems": null
    },
    {
      "latitude": 51.195877,
      "longitude": 19.963791,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 265,
      "squawk": "7000",
      "timestamp": 1676545375,
      "ems": null
    },
    {
      "latitude": 51.195637,
      "longitude": 19.962234,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 253,
      "squawk": "7000",
      "timestamp": 1676545378,
      "ems": null
    },
    {
      "latitude": 51.195171,
      "longitude": 19.960556,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 243,
      "squawk": "7000",
      "timestamp": 1676545381,
      "ems": null
    },
    {
      "latitude": 51.194824,
      "longitude": 19.959635,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676545384,
      "ems": null
    },
    {
      "latitude": 51.193817,
      "longitude": 19.957779,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1676545387,
      "ems": null
    },
    {
      "latitude": 51.193031,
      "longitude": 19.956589,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676545390,
      "ems": null
    },
    {
      "latitude": 51.192238,
      "longitude": 19.955521,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676545393,
      "ems": null
    },
    {
      "latitude": 51.191261,
      "longitude": 19.9543,
      "altitude": {
        "feet": 2025,
        "meters": 617
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676545396,
      "ems": null
    },
    {
      "latitude": 51.190331,
      "longitude": 19.953232,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676545399,
      "ems": null
    },
    {
      "latitude": 51.189632,
      "longitude": 19.952469,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676545401,
      "ems": null
    },
    {
      "latitude": 51.18819,
      "longitude": 19.951096,
      "altitude": {
        "feet": 1925,
        "meters": 587
      },
      "speed": {
        "kmh": 159.3,
        "kts": 86,
        "mph": 99
      },
      "verticalSpeed": {
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676545405,
      "ems": null
    },
    {
      "latitude": 51.18726,
      "longitude": 19.95018,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676545408,
      "ems": null
    },
    {
      "latitude": 51.18663,
      "longitude": 19.949465,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676545410,
      "ems": null
    },
    {
      "latitude": 51.186234,
      "longitude": 19.949036,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676545414,
      "ems": null
    },
    {
      "latitude": 51.184372,
      "longitude": 19.947205,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676545417,
      "ems": null
    },
    {
      "latitude": 51.183254,
      "longitude": 19.946213,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "timestamp": 1676545420,
      "ems": null
    },
    {
      "latitude": 51.182236,
      "longitude": 19.945456,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1676545423,
      "ems": null
    },
    {
      "latitude": 51.180908,
      "longitude": 19.944269,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676545427,
      "ems": null
    },
    {
      "latitude": 51.179718,
      "longitude": 19.94278,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676545431,
      "ems": null
    },
    {
      "latitude": 51.178692,
      "longitude": 19.941406,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676545434,
      "ems": null
    },
    {
      "latitude": 51.17767,
      "longitude": 19.940033,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676545438,
      "ems": null
    },
    {
      "latitude": 51.176926,
      "longitude": 19.939072,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 153.7,
        "kts": 83,
        "mph": 95.5
      },
      "verticalSpeed": {
        "fpm": 1088,
        "ms": 5.5
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676545440,
      "ems": null
    },
    {
      "latitude": 51.175293,
      "longitude": 19.936905,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676545446,
      "ems": null
    },
    {
      "latitude": 51.174179,
      "longitude": 19.935434,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676545450,
      "ems": null
    },
    {
      "latitude": 51.173199,
      "longitude": 19.934158,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676545453,
      "ems": null
    },
    {
      "latitude": 51.171387,
      "longitude": 19.931797,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676545459,
      "ems": null
    },
    {
      "latitude": 51.169476,
      "longitude": 19.929352,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676545465,
      "ems": null
    },
    {
      "latitude": 51.167614,
      "longitude": 19.926834,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676545471,
      "ems": null
    },
    {
      "latitude": 51.166351,
      "longitude": 19.925413,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676545475,
      "ems": null
    },
    {
      "latitude": 51.165703,
      "longitude": 19.924774,
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676545476,
      "ems": null
    },
    {
      "latitude": 51.163937,
      "longitude": 19.923477,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1676545481,
      "ems": null
    },
    {
      "latitude": 51.162586,
      "longitude": 19.922485,
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1676545484,
      "ems": null
    },
    {
      "latitude": 51.161373,
      "longitude": 19.921646,
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
        "fpm": 640,
        "ms": 3.3
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1676545487,
      "ems": null
    },
    {
      "latitude": 51.16021,
      "longitude": 19.920731,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1676545490,
      "ems": null
    },
    {
      "latitude": 51.158955,
      "longitude": 19.919968,
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
        "fpm": 704,
        "ms": 3.6
      },
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1676545493,
      "ems": null
    },
    {
      "latitude": 51.158257,
      "longitude": 19.91951,
      "altitude": {
        "feet": 1825,
        "meters": 556
      },
      "speed": {
        "kmh": 166.7,
        "kts": 90,
        "mph": 103.6
      },
      "verticalSpeed": {
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 200,
      "squawk": "7000",
      "timestamp": 1676545495,
      "ems": null
    },
    {
      "latitude": 51.156673,
      "longitude": 19.918671,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1676545499,
      "ems": null
    },
    {
      "latitude": 51.15564,
      "longitude": 19.918213,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 196,
      "squawk": "7000",
      "timestamp": 1676545501,
      "ems": null
    },
    {
      "latitude": 51.153992,
      "longitude": 19.91762,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676545505,
      "ems": null
    },
    {
      "latitude": 51.153133,
      "longitude": 19.917374,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676545507,
      "ems": null
    },
    {
      "latitude": 51.151474,
      "longitude": 19.916803,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 190,
      "squawk": "7000",
      "timestamp": 1676545511,
      "ems": null
    },
    {
      "latitude": 51.148808,
      "longitude": 19.915848,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 193,
      "squawk": "7000",
      "timestamp": 1676545517,
      "ems": null
    },
    {
      "latitude": 51.147503,
      "longitude": 19.91539,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1676545519,
      "ems": null
    },
    {
      "latitude": 51.146011,
      "longitude": 19.91478,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 192,
      "squawk": "7000",
      "timestamp": 1676545523,
      "ems": null
    },
    {
      "latitude": 51.144653,
      "longitude": 19.914352,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676545525,
      "ems": null
    },
    {
      "latitude": 51.143234,
      "longitude": 19.913982,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676545529,
      "ems": null
    },
    {
      "latitude": 51.141777,
      "longitude": 19.913635,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 187,
      "squawk": "7000",
      "timestamp": 1676545532,
      "ems": null
    },
    {
      "latitude": 51.140892,
      "longitude": 19.913483,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1676545534,
      "ems": null
    },
    {
      "latitude": 51.138931,
      "longitude": 19.913166,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1676545538,
      "ems": null
    },
    {
      "latitude": 51.137402,
      "longitude": 19.912949,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1676545541,
      "ems": null
    },
    {
      "latitude": 51.136189,
      "longitude": 19.91272,
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
      "heading": 185,
      "squawk": "7000",
      "timestamp": 1676545544,
      "ems": null
    },
    {
      "latitude": 51.134491,
      "longitude": 19.912497,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 184,
      "squawk": "7000",
      "timestamp": 1676545546,
      "ems": null
    },
    {
      "latitude": 51.133724,
      "longitude": 19.912415,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 186,
      "squawk": "7000",
      "timestamp": 1676545549,
      "ems": null
    },
    {
      "latitude": 51.130142,
      "longitude": 19.911383,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676545555,
      "ems": null
    },
    {
      "latitude": 51.126938,
      "longitude": 19.910345,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 191,
      "squawk": "7000",
      "timestamp": 1676545561,
      "ems": null
    },
    {
      "latitude": 51.125198,
      "longitude": 19.909676,
      "altitude": {
        "feet": 1900,
        "meters": 579
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
      "heading": 194,
      "squawk": "7000",
      "timestamp": 1676545565,
      "ems": null
    },
    {
      "latitude": 51.123596,
      "longitude": 19.908859,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 197,
      "squawk": "7000",
      "timestamp": 1676545568,
      "ems": null
    },
    {
      "latitude": 51.12241,
      "longitude": 19.908142,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1676545571,
      "ems": null
    },
    {
      "latitude": 51.121078,
      "longitude": 19.907227,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 204,
      "squawk": "7000",
      "timestamp": 1676545574,
      "ems": null
    },
    {
      "latitude": 51.119942,
      "longitude": 19.906311,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1676545576,
      "ems": null
    },
    {
      "latitude": 51.119152,
      "longitude": 19.905624,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676545578,
      "ems": null
    },
    {
      "latitude": 51.117336,
      "longitude": 19.903793,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676545582,
      "ems": null
    },
    {
      "latitude": 51.115986,
      "longitude": 19.902191,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676545586,
      "ems": null
    },
    {
      "latitude": 51.114807,
      "longitude": 19.900768,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676545589,
      "ems": null
    },
    {
      "latitude": 51.113892,
      "longitude": 19.89958,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676545593,
      "ems": null
    },
    {
      "latitude": 51.111328,
      "longitude": 19.896091,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676545598,
      "ems": null
    },
    {
      "latitude": 51.110214,
      "longitude": 19.894409,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676545601,
      "ems": null
    },
    {
      "latitude": 51.109421,
      "longitude": 19.893265,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676545603,
      "ems": null
    },
    {
      "latitude": 51.108032,
      "longitude": 19.891266,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676545607,
      "ems": null
    },
    {
      "latitude": 51.107025,
      "longitude": 19.889782,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676545609,
      "ems": null
    },
    {
      "latitude": 51.10593,
      "longitude": 19.888077,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "timestamp": 1676545613,
      "ems": null
    },
    {
      "latitude": 51.105286,
      "longitude": 19.886961,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676545615,
      "ems": null
    },
    {
      "latitude": 51.104782,
      "longitude": 19.88607,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676545618,
      "ems": null
    },
    {
      "latitude": 51.102768,
      "longitude": 19.88221,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676545623,
      "ems": null
    },
    {
      "latitude": 51.10202,
      "longitude": 19.880753,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676545625,
      "ems": null
    },
    {
      "latitude": 51.101028,
      "longitude": 19.878721,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676545629,
      "ems": null
    },
    {
      "latitude": 51.100433,
      "longitude": 19.877533,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676545631,
      "ems": null
    },
    {
      "latitude": 51.099289,
      "longitude": 19.875307,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676545635,
      "ems": null
    },
    {
      "latitude": 51.09853,
      "longitude": 19.873734,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676545637,
      "ems": null
    },
    {
      "latitude": 51.097553,
      "longitude": 19.871902,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676545640,
      "ems": null
    },
    {
      "latitude": 51.094807,
      "longitude": 19.867325,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676545649,
      "ems": null
    },
    {
      "latitude": 51.093842,
      "longitude": 19.86573,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676545652,
      "ems": null
    },
    {
      "latitude": 51.091827,
      "longitude": 19.862366,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676545658,
      "ems": null
    },
    {
      "latitude": 51.089905,
      "longitude": 19.858828,
      "altitude": {
        "feet": 1725,
        "meters": 526
      },
      "speed": {
        "kmh": 194.5,
        "kts": 105,
        "mph": 120.8
      },
      "verticalSpeed": {
        "fpm": -384,
        "ms": -2
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676545664,
      "ems": null
    },
    {
      "latitude": 51.088055,
      "longitude": 19.855423,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676545670,
      "ems": null
    },
    {
      "latitude": 51.086014,
      "longitude": 19.851849,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676545676,
      "ems": null
    },
    {
      "latitude": 51.084053,
      "longitude": 19.848862,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676545682,
      "ems": null
    },
    {
      "latitude": 51.082214,
      "longitude": 19.845762,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1676545687,
      "ems": null
    },
    {
      "latitude": 51.0802,
      "longitude": 19.842422,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1676545694,
      "ems": null
    },
    {
      "latitude": 51.078415,
      "longitude": 19.839378,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676545700,
      "ems": null
    },
    {
      "latitude": 51.076649,
      "longitude": 19.835968,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676545706,
      "ems": null
    },
    {
      "latitude": 51.075951,
      "longitude": 19.834518,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676545709,
      "ems": null
    },
    {
      "latitude": 51.07502,
      "longitude": 19.832611,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676545712,
      "ems": null
    },
    {
      "latitude": 51.074184,
      "longitude": 19.830856,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676545715,
      "ems": null
    },
    {
      "latitude": 51.072372,
      "longitude": 19.827576,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676545721,
      "ems": null
    },
    {
      "latitude": 51.070736,
      "longitude": 19.824677,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676545727,
      "ems": null
    },
    {
      "latitude": 51.068783,
      "longitude": 19.821167,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676545733,
      "ems": null
    },
    {
      "latitude": 51.067291,
      "longitude": 19.817734,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676545739,
      "ems": null
    },
    {
      "latitude": 51.066879,
      "longitude": 19.816589,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676545741,
      "ems": null
    },
    {
      "latitude": 51.065872,
      "longitude": 19.814436,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676545745,
      "ems": null
    },
    {
      "latitude": 51.06422,
      "longitude": 19.811707,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676545750,
      "ems": null
    },
    {
      "latitude": 51.06189,
      "longitude": 19.808052,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676545757,
      "ems": null
    },
    {
      "latitude": 51.060883,
      "longitude": 19.806494,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676545760,
      "ems": null
    },
    {
      "latitude": 51.060032,
      "longitude": 19.805069,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676545763,
      "ems": null
    },
    {
      "latitude": 51.059006,
      "longitude": 19.803543,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676545766,
      "ems": null
    },
    {
      "latitude": 51.058121,
      "longitude": 19.802017,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676545769,
      "ems": null
    },
    {
      "latitude": 51.056946,
      "longitude": 19.800184,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676545772,
      "ems": null
    },
    {
      "latitude": 51.055939,
      "longitude": 19.7987,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676545775,
      "ems": null
    },
    {
      "latitude": 51.054932,
      "longitude": 19.797363,
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676545778,
      "ems": null
    },
    {
      "latitude": 51.052769,
      "longitude": 19.794312,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676545784,
      "ems": null
    },
    {
      "latitude": 51.05072,
      "longitude": 19.791277,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676545790,
      "ems": null
    },
    {
      "latitude": 51.048813,
      "longitude": 19.787827,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676545796,
      "ems": null
    },
    {
      "latitude": 51.047928,
      "longitude": 19.786148,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676545799,
      "ems": null
    },
    {
      "latitude": 51.047043,
      "longitude": 19.784317,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676545803,
      "ems": null
    },
    {
      "latitude": 51.046299,
      "longitude": 19.782791,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676545805,
      "ems": null
    },
    {
      "latitude": 51.045319,
      "longitude": 19.780807,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676545809,
      "ems": null
    },
    {
      "latitude": 51.044621,
      "longitude": 19.779358,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676545811,
      "ems": null
    },
    {
      "latitude": 51.043736,
      "longitude": 19.777527,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676545814,
      "ems": null
    },
    {
      "latitude": 51.042847,
      "longitude": 19.775614,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676545817,
      "ems": null
    },
    {
      "latitude": 51.042068,
      "longitude": 19.773907,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676545820,
      "ems": null
    },
    {
      "latitude": 51.040386,
      "longitude": 19.770508,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676545826,
      "ems": null
    },
    {
      "latitude": 51.038525,
      "longitude": 19.766846,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676545833,
      "ems": null
    },
    {
      "latitude": 51.036758,
      "longitude": 19.763514,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676545838,
      "ems": null
    },
    {
      "latitude": 51.035065,
      "longitude": 19.760395,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1676545844,
      "ems": null
    },
    {
      "latitude": 51.0341,
      "longitude": 19.758987,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676545847,
      "ems": null
    },
    {
      "latitude": 51.032822,
      "longitude": 19.757427,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676545851,
      "ems": null
    },
    {
      "latitude": 51.03186,
      "longitude": 19.756313,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "squawk": "7000",
      "timestamp": 1676545854,
      "ems": null
    },
    {
      "latitude": 51.030704,
      "longitude": 19.754944,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "squawk": "7000",
      "timestamp": 1676545856,
      "ems": null
    },
    {
      "latitude": 51.029587,
      "longitude": 19.753647,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676545860,
      "ems": null
    },
    {
      "latitude": 51.028336,
      "longitude": 19.752453,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676545862,
      "ems": null
    },
    {
      "latitude": 51.027191,
      "longitude": 19.751413,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676545865,
      "ems": null
    },
    {
      "latitude": 51.025864,
      "longitude": 19.750225,
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676545868,
      "ems": null
    },
    {
      "latitude": 51.024651,
      "longitude": 19.749146,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676545871,
      "ems": null
    },
    {
      "latitude": 51.023346,
      "longitude": 19.748001,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676545875,
      "ems": null
    },
    {
      "latitude": 51.022045,
      "longitude": 19.746704,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676545878,
      "ems": null
    },
    {
      "latitude": 51.02005,
      "longitude": 19.744436,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676545884,
      "ems": null
    },
    {
      "latitude": 51.017529,
      "longitude": 19.741516,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676545890,
      "ems": null
    },
    {
      "latitude": 51.015293,
      "longitude": 19.739227,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676545895,
      "ems": null
    },
    {
      "latitude": 51.013962,
      "longitude": 19.737829,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676545899,
      "ems": null
    },
    {
      "latitude": 51.012909,
      "longitude": 19.736715,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676545902,
      "ems": null
    },
    {
      "latitude": 51.009148,
      "longitude": 19.732895,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676545911,
      "ems": null
    },
    {
      "latitude": 51.007462,
      "longitude": 19.731297,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676545916,
      "ems": null
    },
    {
      "latitude": 51.006451,
      "longitude": 19.730377,
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
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1676545918,
      "ems": null
    },
    {
      "latitude": 51.005127,
      "longitude": 19.729366,
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
      "heading": 206,
      "squawk": "7000",
      "timestamp": 1676545922,
      "ems": null
    },
    {
      "latitude": 51.003983,
      "longitude": 19.72855,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 202,
      "squawk": "7000",
      "timestamp": 1676545925,
      "ems": null
    },
    {
      "latitude": 51.003006,
      "longitude": 19.728012,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 198,
      "squawk": "7000",
      "timestamp": 1676545927,
      "ems": null
    },
    {
      "latitude": 51.001747,
      "longitude": 19.727325,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 201,
      "squawk": "7000",
      "timestamp": 1676545930,
      "ems": null
    },
    {
      "latitude": 50.999542,
      "longitude": 19.725136,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676545937,
      "ems": null
    },
    {
      "latitude": 50.998116,
      "longitude": 19.723434,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676545941,
      "ems": null
    },
    {
      "latitude": 50.996155,
      "longitude": 19.72135,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676545947,
      "ems": null
    },
    {
      "latitude": 50.99501,
      "longitude": 19.720236,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676545950,
      "ems": null
    },
    {
      "latitude": 50.994003,
      "longitude": 19.719271,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676545953,
      "ems": null
    },
    {
      "latitude": 50.99295,
      "longitude": 19.718323,
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676545956,
      "ems": null
    },
    {
      "latitude": 50.991669,
      "longitude": 19.717194,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676545959,
      "ems": null
    },
    {
      "latitude": 50.990616,
      "longitude": 19.716303,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 207,
      "squawk": "7000",
      "timestamp": 1676545962,
      "ems": null
    },
    {
      "latitude": 50.989689,
      "longitude": 19.715576,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 205,
      "squawk": "7000",
      "timestamp": 1676545965,
      "ems": null
    },
    {
      "latitude": 50.988419,
      "longitude": 19.71452,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676545968,
      "ems": null
    },
    {
      "latitude": 50.986572,
      "longitude": 19.712296,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676545974,
      "ems": null
    },
    {
      "latitude": 50.985779,
      "longitude": 19.711151,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676545977,
      "ems": null
    },
    {
      "latitude": 50.984756,
      "longitude": 19.709845,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676545980,
      "ems": null
    },
    {
      "latitude": 50.983887,
      "longitude": 19.708805,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676545983,
      "ems": null
    },
    {
      "latitude": 50.982834,
      "longitude": 19.707617,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676545986,
      "ems": null
    },
    {
      "latitude": 50.98201,
      "longitude": 19.70665,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676545989,
      "ems": null
    },
    {
      "latitude": 50.981033,
      "longitude": 19.705505,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676545992,
      "ems": null
    },
    {
      "latitude": 50.979961,
      "longitude": 19.704361,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676545995,
      "ems": null
    },
    {
      "latitude": 50.978989,
      "longitude": 19.703238,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676545998,
      "ems": null
    },
    {
      "latitude": 50.976791,
      "longitude": 19.700491,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676546004,
      "ems": null
    },
    {
      "latitude": 50.973675,
      "longitude": 19.696655,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546013,
      "ems": null
    },
    {
      "latitude": 50.9702,
      "longitude": 19.692326,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546024,
      "ems": null
    },
    {
      "latitude": 50.968369,
      "longitude": 19.690172,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546030,
      "ems": null
    },
    {
      "latitude": 50.966415,
      "longitude": 19.687805,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546036,
      "ems": null
    },
    {
      "latitude": 50.963806,
      "longitude": 19.684753,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676546043,
      "ems": null
    },
    {
      "latitude": 50.962688,
      "longitude": 19.683609,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676546046,
      "ems": null
    },
    {
      "latitude": 50.960548,
      "longitude": 19.68132,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676546052,
      "ems": null
    },
    {
      "latitude": 50.9585,
      "longitude": 19.679108,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676546058,
      "ems": null
    },
    {
      "latitude": 50.956512,
      "longitude": 19.676737,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546064,
      "ems": null
    },
    {
      "latitude": 50.954681,
      "longitude": 19.674606,
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546070,
      "ems": null
    },
    {
      "latitude": 50.95253,
      "longitude": 19.672134,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676546076,
      "ems": null
    },
    {
      "latitude": 50.950424,
      "longitude": 19.670055,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676546082,
      "ems": null
    },
    {
      "latitude": 50.948502,
      "longitude": 19.667902,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676546088,
      "ems": null
    },
    {
      "latitude": 50.946304,
      "longitude": 19.665604,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676546095,
      "ems": null
    },
    {
      "latitude": 50.944443,
      "longitude": 19.663696,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676546100,
      "ems": null
    },
    {
      "latitude": 50.942459,
      "longitude": 19.661518,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676546107,
      "ems": null
    },
    {
      "latitude": 50.940624,
      "longitude": 19.659653,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676546112,
      "ems": null
    },
    {
      "latitude": 50.93866,
      "longitude": 19.657362,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546118,
      "ems": null
    },
    {
      "latitude": 50.936691,
      "longitude": 19.65506,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546124,
      "ems": null
    },
    {
      "latitude": 50.934677,
      "longitude": 19.652536,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546130,
      "ems": null
    },
    {
      "latitude": 50.933735,
      "longitude": 19.651184,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676546133,
      "ems": null
    },
    {
      "latitude": 50.932526,
      "longitude": 19.649494,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676546137,
      "ems": null
    },
    {
      "latitude": 50.93161,
      "longitude": 19.648157,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676546140,
      "ems": null
    },
    {
      "latitude": 50.930557,
      "longitude": 19.646599,
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
        "fpm": 192,
        "ms": 1
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676546143,
      "ems": null
    },
    {
      "latitude": 50.929688,
      "longitude": 19.645411,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676546146,
      "ems": null
    },
    {
      "latitude": 50.927589,
      "longitude": 19.642563,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546152,
      "ems": null
    },
    {
      "latitude": 50.925705,
      "longitude": 19.640066,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546158,
      "ems": null
    },
    {
      "latitude": 50.923965,
      "longitude": 19.63769,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546163,
      "ems": null
    },
    {
      "latitude": 50.922886,
      "longitude": 19.636383,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546167,
      "ems": null
    },
    {
      "latitude": 50.92186,
      "longitude": 19.635166,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676546170,
      "ems": null
    },
    {
      "latitude": 50.920898,
      "longitude": 19.634127,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676546172,
      "ems": null
    },
    {
      "latitude": 50.91893,
      "longitude": 19.631653,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676546179,
      "ems": null
    },
    {
      "latitude": 50.916977,
      "longitude": 19.629211,
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676546185,
      "ems": null
    },
    {
      "latitude": 50.915161,
      "longitude": 19.627075,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546190,
      "ems": null
    },
    {
      "latitude": 50.913437,
      "longitude": 19.624939,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546196,
      "ems": null
    },
    {
      "latitude": 50.911297,
      "longitude": 19.622345,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546203,
      "ems": null
    },
    {
      "latitude": 50.909294,
      "longitude": 19.620056,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546209,
      "ems": null
    },
    {
      "latitude": 50.9072,
      "longitude": 19.617386,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546215,
      "ems": null
    },
    {
      "latitude": 50.905243,
      "longitude": 19.614752,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546221,
      "ems": null
    },
    {
      "latitude": 50.90332,
      "longitude": 19.61208,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676546227,
      "ems": null
    },
    {
      "latitude": 50.902359,
      "longitude": 19.61067,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1676546230,
      "ems": null
    },
    {
      "latitude": 50.901428,
      "longitude": 19.609375,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676546233,
      "ems": null
    },
    {
      "latitude": 50.900391,
      "longitude": 19.607924,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676546236,
      "ems": null
    },
    {
      "latitude": 50.898262,
      "longitude": 19.605026,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546242,
      "ems": null
    },
    {
      "latitude": 50.896271,
      "longitude": 19.602356,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546248,
      "ems": null
    },
    {
      "latitude": 50.894257,
      "longitude": 19.599684,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676546254,
      "ems": null
    },
    {
      "latitude": 50.89238,
      "longitude": 19.597235,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546260,
      "ems": null
    },
    {
      "latitude": 50.89064,
      "longitude": 19.594709,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676546266,
      "ems": null
    },
    {
      "latitude": 50.88979,
      "longitude": 19.593353,
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546269,
      "ems": null
    },
    {
      "latitude": 50.889137,
      "longitude": 19.592056,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546272,
      "ems": null
    },
    {
      "latitude": 50.888214,
      "longitude": 19.590479,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546275,
      "ems": null
    },
    {
      "latitude": 50.887436,
      "longitude": 19.589069,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546278,
      "ems": null
    },
    {
      "latitude": 50.886658,
      "longitude": 19.587732,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1676546281,
      "ems": null
    },
    {
      "latitude": 50.885834,
      "longitude": 19.586411,
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
        "fpm": 576,
        "ms": 2.9
      },
      "heading": 226,
      "squawk": "7000",
      "timestamp": 1676546284,
      "ems": null
    },
    {
      "latitude": 50.885056,
      "longitude": 19.585135,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676546287,
      "ems": null
    },
    {
      "latitude": 50.883457,
      "longitude": 19.58252,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546293,
      "ems": null
    },
    {
      "latitude": 50.881805,
      "longitude": 19.579716,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676546299,
      "ems": null
    },
    {
      "latitude": 50.881073,
      "longitude": 19.578527,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676546302,
      "ems": null
    },
    {
      "latitude": 50.879314,
      "longitude": 19.575806,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "squawk": "7000",
      "timestamp": 1676546308,
      "ems": null
    },
    {
      "latitude": 50.877502,
      "longitude": 19.57296,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676546314,
      "ems": null
    },
    {
      "latitude": 50.875824,
      "longitude": 19.570236,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676546320,
      "ems": null
    },
    {
      "latitude": 50.874115,
      "longitude": 19.567541,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676546326,
      "ems": null
    },
    {
      "latitude": 50.872238,
      "longitude": 19.564285,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "squawk": "7000",
      "timestamp": 1676546332,
      "ems": null
    },
    {
      "latitude": 50.87146,
      "longitude": 19.56279,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546335,
      "ems": null
    },
    {
      "latitude": 50.870655,
      "longitude": 19.56131,
      "altitude": {
        "feet": 1875,
        "meters": 572
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546338,
      "ems": null
    },
    {
      "latitude": 50.868851,
      "longitude": 19.558262,
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
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676546344,
      "ems": null
    },
    {
      "latitude": 50.866932,
      "longitude": 19.555664,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676546350,
      "ems": null
    },
    {
      "latitude": 50.865955,
      "longitude": 19.554443,
      "altitude": {
        "feet": 1850,
        "meters": 564
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546353,
      "ems": null
    },
    {
      "latitude": 50.864868,
      "longitude": 19.553066,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546356,
      "ems": null
    },
    {
      "latitude": 50.863811,
      "longitude": 19.551773,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546359,
      "ems": null
    },
    {
      "latitude": 50.862762,
      "longitude": 19.55032,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546362,
      "ems": null
    },
    {
      "latitude": 50.861763,
      "longitude": 19.54895,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676546365,
      "ems": null
    },
    {
      "latitude": 50.860741,
      "longitude": 19.547424,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1676546368,
      "ems": null
    },
    {
      "latitude": 50.858826,
      "longitude": 19.54438,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676546374,
      "ems": null
    },
    {
      "latitude": 50.856949,
      "longitude": 19.541559,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676546380,
      "ems": null
    },
    {
      "latitude": 50.8559,
      "longitude": 19.540024,
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676546383,
      "ems": null
    },
    {
      "latitude": 50.853989,
      "longitude": 19.537277,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676546389,
      "ems": null
    },
    {
      "latitude": 50.851242,
      "longitude": 19.533463,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546399,
      "ems": null
    },
    {
      "latitude": 50.849213,
      "longitude": 19.531168,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546404,
      "ems": null
    },
    {
      "latitude": 50.84697,
      "longitude": 19.528049,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 222,
      "squawk": "7000",
      "timestamp": 1676546411,
      "ems": null
    },
    {
      "latitude": 50.845367,
      "longitude": 19.525452,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546417,
      "ems": null
    },
    {
      "latitude": 50.844307,
      "longitude": 19.523544,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676546420,
      "ems": null
    },
    {
      "latitude": 50.843655,
      "longitude": 19.522324,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546423,
      "ems": null
    },
    {
      "latitude": 50.842804,
      "longitude": 19.5207,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546426,
      "ems": null
    },
    {
      "latitude": 50.842026,
      "longitude": 19.519068,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546430,
      "ems": null
    },
    {
      "latitude": 50.841373,
      "longitude": 19.517593,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546432,
      "ems": null
    },
    {
      "latitude": 50.840725,
      "longitude": 19.515915,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1676546435,
      "ems": null
    },
    {
      "latitude": 50.840073,
      "longitude": 19.513931,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 242,
      "squawk": "7000",
      "timestamp": 1676546439,
      "ems": null
    },
    {
      "latitude": 50.839508,
      "longitude": 19.512238,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1676546441,
      "ems": null
    },
    {
      "latitude": 50.838955,
      "longitude": 19.510803,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "squawk": "7000",
      "timestamp": 1676546444,
      "ems": null
    },
    {
      "latitude": 50.838257,
      "longitude": 19.508667,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1676546448,
      "ems": null
    },
    {
      "latitude": 50.837723,
      "longitude": 19.507265,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1676546450,
      "ems": null
    },
    {
      "latitude": 50.836952,
      "longitude": 19.505234,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676546454,
      "ems": null
    },
    {
      "latitude": 50.8363,
      "longitude": 19.503708,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546456,
      "ems": null
    },
    {
      "latitude": 50.834839,
      "longitude": 19.50036,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676546462,
      "ems": null
    },
    {
      "latitude": 50.833973,
      "longitude": 19.498367,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546466,
      "ems": null
    },
    {
      "latitude": 50.833275,
      "longitude": 19.496841,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546468,
      "ems": null
    },
    {
      "latitude": 50.83255,
      "longitude": 19.495165,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546472,
      "ems": null
    },
    {
      "latitude": 50.831268,
      "longitude": 19.492046,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546477,
      "ems": null
    },
    {
      "latitude": 50.829643,
      "longitude": 19.488144,
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
        "fpm": 512,
        "ms": 2.6
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546484,
      "ems": null
    },
    {
      "latitude": 50.828293,
      "longitude": 19.485245,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546490,
      "ems": null
    },
    {
      "latitude": 50.826851,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676546496,
      "ems": null
    },
    {
      "latitude": 50.825546,
      "longitude": 19.478685,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546502,
      "ems": null
    },
    {
      "latitude": 50.824081,
      "longitude": 19.475271,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546508,
      "ems": null
    },
    {
      "latitude": 50.822613,
      "longitude": 19.472122,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546514,
      "ems": null
    },
    {
      "latitude": 50.821682,
      "longitude": 19.47052,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546517,
      "ems": null
    },
    {
      "latitude": 50.820831,
      "longitude": 19.46911,
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
      "heading": 225,
      "squawk": "7000",
      "timestamp": 1676546520,
      "ems": null
    },
    {
      "latitude": 50.819729,
      "longitude": 19.467316,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676546523,
      "ems": null
    },
    {
      "latitude": 50.818985,
      "longitude": 19.465866,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546526,
      "ems": null
    },
    {
      "latitude": 50.817993,
      "longitude": 19.464062,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676546529,
      "ems": null
    },
    {
      "latitude": 50.817074,
      "longitude": 19.46228,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546532,
      "ems": null
    },
    {
      "latitude": 50.815353,
      "longitude": 19.459,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676546538,
      "ems": null
    },
    {
      "latitude": 50.813644,
      "longitude": 19.455599,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546544,
      "ems": null
    },
    {
      "latitude": 50.812775,
      "longitude": 19.453966,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546547,
      "ems": null
    },
    {
      "latitude": 50.811127,
      "longitude": 19.450775,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546553,
      "ems": null
    },
    {
      "latitude": 50.809441,
      "longitude": 19.447479,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546559,
      "ems": null
    },
    {
      "latitude": 50.807877,
      "longitude": 19.444242,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546565,
      "ems": null
    },
    {
      "latitude": 50.806183,
      "longitude": 19.440975,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546572,
      "ems": null
    },
    {
      "latitude": 50.804646,
      "longitude": 19.437714,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546578,
      "ems": null
    },
    {
      "latitude": 50.803062,
      "longitude": 19.434357,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676546584,
      "ems": null
    },
    {
      "latitude": 50.802319,
      "longitude": 19.432602,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546587,
      "ems": null
    },
    {
      "latitude": 50.80069,
      "longitude": 19.428787,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546593,
      "ems": null
    },
    {
      "latitude": 50.799866,
      "longitude": 19.426798,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546596,
      "ems": null
    },
    {
      "latitude": 50.799107,
      "longitude": 19.425049,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546599,
      "ems": null
    },
    {
      "latitude": 50.797623,
      "longitude": 19.421749,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676546605,
      "ems": null
    },
    {
      "latitude": 50.796066,
      "longitude": 19.418335,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676546611,
      "ems": null
    },
    {
      "latitude": 50.79451,
      "longitude": 19.414921,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546617,
      "ems": null
    },
    {
      "latitude": 50.793098,
      "longitude": 19.411087,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1676546623,
      "ems": null
    },
    {
      "latitude": 50.792496,
      "longitude": 19.409409,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1676546626,
      "ems": null
    },
    {
      "latitude": 50.791809,
      "longitude": 19.407497,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 241,
      "squawk": "7000",
      "timestamp": 1676546629,
      "ems": null
    },
    {
      "latitude": 50.791168,
      "longitude": 19.405716,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1676546632,
      "ems": null
    },
    {
      "latitude": 50.789703,
      "longitude": 19.40239,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546638,
      "ems": null
    },
    {
      "latitude": 50.787888,
      "longitude": 19.398956,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546645,
      "ems": null
    },
    {
      "latitude": 50.787189,
      "longitude": 19.397507,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546647,
      "ems": null
    },
    {
      "latitude": 50.786442,
      "longitude": 19.395905,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "squawk": "7000",
      "timestamp": 1676546650,
      "ems": null
    },
    {
      "latitude": 50.785698,
      "longitude": 19.394226,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546654,
      "ems": null
    },
    {
      "latitude": 50.784943,
      "longitude": 19.392427,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546656,
      "ems": null
    },
    {
      "latitude": 50.784119,
      "longitude": 19.390497,
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
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546660,
      "ems": null
    },
    {
      "latitude": 50.783512,
      "longitude": 19.389114,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676546662,
      "ems": null
    },
    {
      "latitude": 50.781784,
      "longitude": 19.385674,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546669,
      "ems": null
    },
    {
      "latitude": 50.780113,
      "longitude": 19.382248,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546675,
      "ems": null
    },
    {
      "latitude": 50.778534,
      "longitude": 19.378992,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546681,
      "ems": null
    },
    {
      "latitude": 50.776993,
      "longitude": 19.375763,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546687,
      "ems": null
    },
    {
      "latitude": 50.775455,
      "longitude": 19.372635,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546693,
      "ems": null
    },
    {
      "latitude": 50.773956,
      "longitude": 19.369713,
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546698,
      "ems": null
    },
    {
      "latitude": 50.772537,
      "longitude": 19.366447,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676546704,
      "ems": null
    },
    {
      "latitude": 50.771851,
      "longitude": 19.364592,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1676546707,
      "ems": null
    },
    {
      "latitude": 50.77121,
      "longitude": 19.36281,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1676546710,
      "ems": null
    },
    {
      "latitude": 50.770615,
      "longitude": 19.361191,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 240,
      "squawk": "7000",
      "timestamp": 1676546713,
      "ems": null
    },
    {
      "latitude": 50.770248,
      "longitude": 19.36021,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "squawk": "7000",
      "timestamp": 1676546715,
      "ems": null
    },
    {
      "latitude": 50.769379,
      "longitude": 19.35791,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676546719,
      "ems": null
    },
    {
      "latitude": 50.768753,
      "longitude": 19.356461,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "timestamp": 1676546722,
      "ems": null
    },
    {
      "latitude": 50.767914,
      "longitude": 19.354324,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1676546726,
      "ems": null
    },
    {
      "latitude": 50.767273,
      "longitude": 19.35264,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1676546728,
      "ems": null
    },
    {
      "latitude": 50.766659,
      "longitude": 19.350967,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1676546731,
      "ems": null
    },
    {
      "latitude": 50.765442,
      "longitude": 19.34774,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1676546737,
      "ems": null
    },
    {
      "latitude": 50.764069,
      "longitude": 19.34388,
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
      "heading": 239,
      "squawk": "7000",
      "timestamp": 1676546743,
      "ems": null
    },
    {
      "latitude": 50.762794,
      "longitude": 19.341049,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546749,
      "ems": null
    },
    {
      "latitude": 50.761631,
      "longitude": 19.338913,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676546752,
      "ems": null
    },
    {
      "latitude": 50.761024,
      "longitude": 19.337845,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546754,
      "ems": null
    },
    {
      "latitude": 50.759949,
      "longitude": 19.335938,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546758,
      "ems": null
    },
    {
      "latitude": 50.758713,
      "longitude": 19.333858,
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
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676546762,
      "ems": null
    },
    {
      "latitude": 50.757858,
      "longitude": 19.332275,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676546765,
      "ems": null
    },
    {
      "latitude": 50.757114,
      "longitude": 19.330826,
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676546768,
      "ems": null
    },
    {
      "latitude": 50.756241,
      "longitude": 19.329182,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 229,
      "squawk": "7000",
      "timestamp": 1676546771,
      "ems": null
    },
    {
      "latitude": 50.755417,
      "longitude": 19.327623,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546774,
      "ems": null
    },
    {
      "latitude": 50.75386,
      "longitude": 19.324505,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676546780,
      "ems": null
    },
    {
      "latitude": 50.753017,
      "longitude": 19.322739,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676546783,
      "ems": null
    },
    {
      "latitude": 50.752228,
      "longitude": 19.320984,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546786,
      "ems": null
    },
    {
      "latitude": 50.751484,
      "longitude": 19.319229,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 236,
      "squawk": "7000",
      "timestamp": 1676546789,
      "ems": null
    },
    {
      "latitude": 50.75069,
      "longitude": 19.317322,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676546792,
      "ems": null
    },
    {
      "latitude": 50.749947,
      "longitude": 19.315338,
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
      "heading": 238,
      "squawk": "7000",
      "timestamp": 1676546796,
      "ems": null
    },
    {
      "latitude": 50.749283,
      "longitude": 19.313593,
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
      "heading": 237,
      "squawk": "7000",
      "timestamp": 1676546799,
      "ems": null
    },
    {
      "latitude": 50.748505,
      "longitude": 19.311737,
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
      "heading": 235,
      "squawk": "7000",
      "timestamp": 1676546802,
      "ems": null
    },
    {
      "latitude": 50.746811,
      "longitude": 19.308025,
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676546808,
      "ems": null
    },
    {
      "latitude": 50.745293,
      "longitude": 19.304657,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 234,
      "squawk": "7000",
      "timestamp": 1676546814,
      "ems": null
    },
    {
      "latitude": 50.743607,
      "longitude": 19.301048,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676546820,
      "ems": null
    },
    {
      "latitude": 50.742825,
      "longitude": 19.299469,
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
      "heading": 233,
      "squawk": "7000",
      "timestamp": 1676546822,
      "ems": null
    },
    {
      "latitude": 50.741867,
      "longitude": 19.297485,
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
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546826,
      "ems": null
    },
    {
      "latitude": 50.740952,
      "longitude": 19.29563,
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
      "heading": 231,
      "squawk": "7000",
      "timestamp": 1676546829,
      "ems": null
    },
    {
      "latitude": 50.739147,
      "longitude": 19.291992,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 232,
      "squawk": "7000",
      "timestamp": 1676546835,
      "ems": null
    },
    {
      "latitude": 50.738262,
      "longitude": 19.290237,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546838,
      "ems": null
    },
    {
      "latitude": 50.737381,
      "longitude": 19.288652,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 230,
      "squawk": "7000",
      "timestamp": 1676546841,
      "ems": null
    },
    {
      "latitude": 50.736446,
      "longitude": 19.28688,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676546844,
      "ems": null
    },
    {
      "latitude": 50.735516,
      "longitude": 19.285202,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 228,
      "squawk": "7000",
      "timestamp": 1676546847,
      "ems": null
    },
    {
      "latitude": 50.734539,
      "longitude": 19.2836,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 227,
      "squawk": "7000",
      "timestamp": 1676546850,
      "ems": null
    },
    {
      "latitude": 50.733536,
      "longitude": 19.281971,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 224,
      "squawk": "7000",
      "timestamp": 1676546853,
      "ems": null
    },
    {
      "latitude": 50.732536,
      "longitude": 19.280472,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 223,
      "squawk": "7000",
      "timestamp": 1676546856,
      "ems": null
    },
    {
      "latitude": 50.731373,
      "longitude": 19.278946,
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546859,
      "ems": null
    },
    {
      "latitude": 50.730331,
      "longitude": 19.277592,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546862,
      "ems": null
    },
    {
      "latitude": 50.729141,
      "longitude": 19.276106,
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676546865,
      "ems": null
    },
    {
      "latitude": 50.728161,
      "longitude": 19.274979,
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676546868,
      "ems": null
    },
    {
      "latitude": 50.72699,
      "longitude": 19.273731,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676546871,
      "ems": null
    },
    {
      "latitude": 50.725845,
      "longitude": 19.272543,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676546874,
      "ems": null
    },
    {
      "latitude": 50.724609,
      "longitude": 19.271429,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676546877,
      "ems": null
    },
    {
      "latitude": 50.723366,
      "longitude": 19.270248,
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676546880,
      "ems": null
    },
    {
      "latitude": 50.722183,
      "longitude": 19.269054,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676546883,
      "ems": null
    },
    {
      "latitude": 50.720989,
      "longitude": 19.267807,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676546886,
      "ems": null
    },
    {
      "latitude": 50.719711,
      "longitude": 19.266382,
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
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676546890,
      "ems": null
    },
    {
      "latitude": 50.716381,
      "longitude": 19.262543,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546899,
      "ems": null
    },
    {
      "latitude": 50.714054,
      "longitude": 19.259949,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 213,
      "squawk": "7000",
      "timestamp": 1676546905,
      "ems": null
    },
    {
      "latitude": 50.711586,
      "longitude": 19.25766,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676546911,
      "ems": null
    },
    {
      "latitude": 50.709137,
      "longitude": 19.255396,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676546917,
      "ems": null
    },
    {
      "latitude": 50.706699,
      "longitude": 19.253082,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676546923,
      "ems": null
    },
    {
      "latitude": 50.705536,
      "longitude": 19.252014,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676546926,
      "ems": null
    },
    {
      "latitude": 50.703255,
      "longitude": 19.249725,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676546932,
      "ems": null
    },
    {
      "latitude": 50.702091,
      "longitude": 19.248352,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546935,
      "ems": null
    },
    {
      "latitude": 50.700928,
      "longitude": 19.246979,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546938,
      "ems": null
    },
    {
      "latitude": 50.69989,
      "longitude": 19.245819,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676546941,
      "ems": null
    },
    {
      "latitude": 50.698792,
      "longitude": 19.244484,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676546944,
      "ems": null
    },
    {
      "latitude": 50.697601,
      "longitude": 19.242851,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546947,
      "ems": null
    },
    {
      "latitude": 50.696735,
      "longitude": 19.241714,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546950,
      "ems": null
    },
    {
      "latitude": 50.695572,
      "longitude": 19.240189,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546953,
      "ems": null
    },
    {
      "latitude": 50.694534,
      "longitude": 19.238768,
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676546957,
      "ems": null
    },
    {
      "latitude": 50.692547,
      "longitude": 19.236069,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "squawk": "7000",
      "timestamp": 1676546962,
      "ems": null
    },
    {
      "latitude": 50.691662,
      "longitude": 19.234848,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 221,
      "squawk": "7000",
      "timestamp": 1676546965,
      "ems": null
    },
    {
      "latitude": 50.689568,
      "longitude": 19.232025,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676546971,
      "ems": null
    },
    {
      "latitude": 50.687473,
      "longitude": 19.229355,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676546978,
      "ems": null
    },
    {
      "latitude": 50.685333,
      "longitude": 19.226837,
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676546984,
      "ems": null
    },
    {
      "latitude": 50.68412,
      "longitude": 19.225616,
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
      "heading": 212,
      "squawk": "7000",
      "timestamp": 1676546987,
      "ems": null
    },
    {
      "latitude": 50.682911,
      "longitude": 19.224472,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676546990,
      "ems": null
    },
    {
      "latitude": 50.681839,
      "longitude": 19.22348,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676546993,
      "ems": null
    },
    {
      "latitude": 50.680584,
      "longitude": 19.222336,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 210,
      "squawk": "7000",
      "timestamp": 1676546996,
      "ems": null
    },
    {
      "latitude": 50.679611,
      "longitude": 19.221397,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676546999,
      "ems": null
    },
    {
      "latitude": 50.677326,
      "longitude": 19.218903,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676547005,
      "ems": null
    },
    {
      "latitude": 50.675262,
      "longitude": 19.216497,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 216,
      "squawk": "7000",
      "timestamp": 1676547011,
      "ems": null
    },
    {
      "latitude": 50.674065,
      "longitude": 19.215088,
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
        "fpm": 448,
        "ms": 2.3
      },
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676547014,
      "ems": null
    },
    {
      "latitude": 50.673111,
      "longitude": 19.213825,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676547017,
      "ems": null
    },
    {
      "latitude": 50.672249,
      "longitude": 19.212799,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 219,
      "squawk": "7000",
      "timestamp": 1676547020,
      "ems": null
    },
    {
      "latitude": 50.671188,
      "longitude": 19.211473,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 217,
      "squawk": "7000",
      "timestamp": 1676547023,
      "ems": null
    },
    {
      "latitude": 50.6702,
      "longitude": 19.210337,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 215,
      "squawk": "7000",
      "timestamp": 1676547026,
      "ems": null
    },
    {
      "latitude": 50.668304,
      "longitude": 19.208076,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676547032,
      "ems": null
    },
    {
      "latitude": 50.66629,
      "longitude": 19.205734,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676547038,
      "ems": null
    },
    {
      "latitude": 50.664185,
      "longitude": 19.203451,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 214,
      "squawk": "7000",
      "timestamp": 1676547044,
      "ems": null
    },
    {
      "latitude": 50.663086,
      "longitude": 19.202368,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676547047,
      "ems": null
    },
    {
      "latitude": 50.661915,
      "longitude": 19.201281,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676547050,
      "ems": null
    },
    {
      "latitude": 50.660751,
      "longitude": 19.200342,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 208,
      "squawk": "7000",
      "timestamp": 1676547053,
      "ems": null
    },
    {
      "latitude": 50.659542,
      "longitude": 19.199276,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676547056,
      "ems": null
    },
    {
      "latitude": 50.658417,
      "longitude": 19.198318,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 209,
      "squawk": "7000",
      "timestamp": 1676547060,
      "ems": null
    },
    {
      "latitude": 50.657169,
      "longitude": 19.197124,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 211,
      "squawk": "7000",
      "timestamp": 1676547063,
      "ems": null
    },
    {
      "latitude": 50.65498,
      "longitude": 19.194599,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 218,
      "squawk": "7000",
      "timestamp": 1676547069,
      "ems": null
    },
    {
      "latitude": 50.654095,
      "longitude": 19.193413,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 220,
      "squawk": "7000",
      "timestamp": 1676547071,
      "ems": null
    },
    {
      "latitude": 50.653118,
      "longitude": 19.192001,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547075,
      "ems": null
    },
    {
      "latitude": 50.652187,
      "longitude": 19.190369,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 230,
      "squawk": "4154",
      "timestamp": 1676547078,
      "ems": null
    },
    {
      "latitude": 50.651321,
      "longitude": 19.188562,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "squawk": "4154",
      "timestamp": 1676547081,
      "ems": null
    },
    {
      "latitude": 50.650589,
      "longitude": 19.186899,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 235,
      "squawk": "4154",
      "timestamp": 1676547084,
      "ems": null
    },
    {
      "latitude": 50.64986,
      "longitude": 19.185247,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 233,
      "squawk": "4154",
      "timestamp": 1676547087,
      "ems": null
    },
    {
      "latitude": 50.649033,
      "longitude": 19.183647,
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
      "heading": 229,
      "squawk": "4154",
      "timestamp": 1676547090,
      "ems": null
    },
    {
      "latitude": 50.648163,
      "longitude": 19.182129,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "squawk": "4154",
      "timestamp": 1676547093,
      "ems": null
    },
    {
      "latitude": 50.647202,
      "longitude": 19.180538,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547096,
      "ems": null
    },
    {
      "latitude": 50.646229,
      "longitude": 19.178864,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547099,
      "ems": null
    },
    {
      "latitude": 50.645344,
      "longitude": 19.177378,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 226,
      "squawk": "4154",
      "timestamp": 1676547102,
      "ems": null
    },
    {
      "latitude": 50.643539,
      "longitude": 19.17454,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 224,
      "squawk": "4154",
      "timestamp": 1676547108,
      "ems": null
    },
    {
      "latitude": 50.642551,
      "longitude": 19.172998,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547111,
      "ems": null
    },
    {
      "latitude": 50.641708,
      "longitude": 19.171432,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "squawk": "4154",
      "timestamp": 1676547114,
      "ems": null
    },
    {
      "latitude": 50.640038,
      "longitude": 19.168247,
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
      "heading": 231,
      "squawk": "4154",
      "timestamp": 1676547120,
      "ems": null
    },
    {
      "latitude": 50.639198,
      "longitude": 19.166391,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 235,
      "squawk": "4154",
      "timestamp": 1676547124,
      "ems": null
    },
    {
      "latitude": 50.638546,
      "longitude": 19.164982,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 235,
      "squawk": "4154",
      "timestamp": 1676547126,
      "ems": null
    },
    {
      "latitude": 50.637756,
      "longitude": 19.1632,
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
      "heading": 235,
      "squawk": "4154",
      "timestamp": 1676547129,
      "ems": null
    },
    {
      "latitude": 50.637131,
      "longitude": 19.161674,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 237,
      "squawk": "4154",
      "timestamp": 1676547132,
      "ems": null
    },
    {
      "latitude": 50.63649,
      "longitude": 19.160011,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 238,
      "squawk": "4154",
      "timestamp": 1676547135,
      "ems": null
    },
    {
      "latitude": 50.635757,
      "longitude": 19.158278,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "heading": 235,
      "squawk": "4154",
      "timestamp": 1676547138,
      "ems": null
    },
    {
      "latitude": 50.635056,
      "longitude": 19.156668,
      "altitude": {
        "feet": 1825,
        "meters": 556
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
      "squawk": "4154",
      "timestamp": 1676547141,
      "ems": null
    },
    {
      "latitude": 50.633377,
      "longitude": 19.153362,
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
      "heading": 226,
      "squawk": "4154",
      "timestamp": 1676547148,
      "ems": null
    },
    {
      "latitude": 50.632462,
      "longitude": 19.151917,
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
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547151,
      "ems": null
    },
    {
      "latitude": 50.631516,
      "longitude": 19.150358,
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
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547154,
      "ems": null
    },
    {
      "latitude": 50.630585,
      "longitude": 19.148952,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547157,
      "ems": null
    },
    {
      "latitude": 50.629608,
      "longitude": 19.147388,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547160,
      "ems": null
    },
    {
      "latitude": 50.628586,
      "longitude": 19.145756,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547163,
      "ems": null
    },
    {
      "latitude": 50.627701,
      "longitude": 19.144196,
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
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547166,
      "ems": null
    },
    {
      "latitude": 50.62674,
      "longitude": 19.142593,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 226,
      "squawk": "4154",
      "timestamp": 1676547169,
      "ems": null
    },
    {
      "latitude": 50.62579,
      "longitude": 19.141079,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547172,
      "ems": null
    },
    {
      "latitude": 50.624908,
      "longitude": 19.139593,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547175,
      "ems": null
    },
    {
      "latitude": 50.62286,
      "longitude": 19.136402,
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
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547181,
      "ems": null
    },
    {
      "latitude": 50.620903,
      "longitude": 19.133062,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 226,
      "squawk": "4154",
      "timestamp": 1676547187,
      "ems": null
    },
    {
      "latitude": 50.61895,
      "longitude": 19.129795,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547193,
      "ems": null
    },
    {
      "latitude": 50.617081,
      "longitude": 19.126692,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547199,
      "ems": null
    },
    {
      "latitude": 50.615177,
      "longitude": 19.123262,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 228,
      "squawk": "4154",
      "timestamp": 1676547205,
      "ems": null
    },
    {
      "latitude": 50.613464,
      "longitude": 19.11997,
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
      "heading": 232,
      "squawk": "4154",
      "timestamp": 1676547211,
      "ems": null
    },
    {
      "latitude": 50.612663,
      "longitude": 19.11829,
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
      "heading": 234,
      "squawk": "4154",
      "timestamp": 1676547214,
      "ems": null
    },
    {
      "latitude": 50.611965,
      "longitude": 19.116657,
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
      "heading": 234,
      "squawk": "4154",
      "timestamp": 1676547217,
      "ems": null
    },
    {
      "latitude": 50.610077,
      "longitude": 19.113031,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 229,
      "squawk": "4154",
      "timestamp": 1676547223,
      "ems": null
    },
    {
      "latitude": 50.608334,
      "longitude": 19.109678,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 232,
      "squawk": "4154",
      "timestamp": 1676547230,
      "ems": null
    },
    {
      "latitude": 50.60675,
      "longitude": 19.106487,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 230,
      "squawk": "4154",
      "timestamp": 1676547235,
      "ems": null
    },
    {
      "latitude": 50.604935,
      "longitude": 19.103369,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547241,
      "ems": null
    },
    {
      "latitude": 50.60405,
      "longitude": 19.10181,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547244,
      "ems": null
    },
    {
      "latitude": 50.603119,
      "longitude": 19.100164,
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
      "heading": 226,
      "squawk": "4154",
      "timestamp": 1676547248,
      "ems": null
    },
    {
      "latitude": 50.602158,
      "longitude": 19.098648,
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
      "heading": 226,
      "squawk": "4154",
      "timestamp": 1676547251,
      "ems": null
    },
    {
      "latitude": 50.600143,
      "longitude": 19.095394,
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
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547257,
      "ems": null
    },
    {
      "latitude": 50.599258,
      "longitude": 19.09409,
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
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547260,
      "ems": null
    },
    {
      "latitude": 50.598312,
      "longitude": 19.092505,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547263,
      "ems": null
    },
    {
      "latitude": 50.596371,
      "longitude": 19.089264,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 227,
      "squawk": "4154",
      "timestamp": 1676547269,
      "ems": null
    },
    {
      "latitude": 50.594604,
      "longitude": 19.086071,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 230,
      "squawk": "4154",
      "timestamp": 1676547275,
      "ems": null
    },
    {
      "latitude": 50.592831,
      "longitude": 19.083029,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 226,
      "squawk": "4154",
      "timestamp": 1676547281,
      "ems": null
    },
    {
      "latitude": 50.591202,
      "longitude": 19.080282,
      "altitude": {
        "feet": 1650,
        "meters": 503
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
      "heading": 226,
      "squawk": "4154",
      "timestamp": 1676547288,
      "ems": null
    },
    {
      "latitude": 50.588875,
      "longitude": 19.076275,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 228,
      "squawk": "4154",
      "timestamp": 1676547294,
      "ems": null
    },
    {
      "latitude": 50.587418,
      "longitude": 19.073639,
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
      "heading": 228,
      "squawk": "4154",
      "timestamp": 1676547300,
      "ems": null
    },
    {
      "latitude": 50.585632,
      "longitude": 19.070459,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "squawk": "4154",
      "timestamp": 1676547306,
      "ems": null
    },
    {
      "latitude": 50.584034,
      "longitude": 19.067738,
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
      "heading": 225,
      "squawk": "4154",
      "timestamp": 1676547312,
      "ems": null
    },
    {
      "latitude": 50.582382,
      "longitude": 19.06576,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 213,
      "squawk": "4154",
      "timestamp": 1676547317,
      "ems": null
    },
    {
      "latitude": 50.580963,
      "longitude": 19.064472,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 210,
      "squawk": "4154",
      "timestamp": 1676547321,
      "ems": null
    },
    {
      "latitude": 50.579224,
      "longitude": 19.063375,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "4154",
      "timestamp": 1676547324,
      "ems": null
    },
    {
      "latitude": 50.57785,
      "longitude": 19.062798,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 201,
      "squawk": "4154",
      "timestamp": 1676547328,
      "ems": null
    },
    {
      "latitude": 50.576706,
      "longitude": 19.062435,
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
      "heading": 190,
      "squawk": "4154",
      "timestamp": 1676547330,
      "ems": null
    },
    {
      "latitude": 50.575375,
      "longitude": 19.06217,
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
      "heading": 184,
      "squawk": "4154",
      "timestamp": 1676547333,
      "ems": null
    },
    {
      "latitude": 50.573933,
      "longitude": 19.06217,
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
      "heading": 180,
      "squawk": "4154",
      "timestamp": 1676547336,
      "ems": null
    },
    {
      "latitude": 50.572632,
      "longitude": 19.06222,
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
      "heading": 177,
      "squawk": "4154",
      "timestamp": 1676547339,
      "ems": null
    },
    {
      "latitude": 50.57135,
      "longitude": 19.062363,
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
      "heading": 175,
      "squawk": "4154",
      "timestamp": 1676547342,
      "ems": null
    },
    {
      "latitude": 50.569977,
      "longitude": 19.062653,
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
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676547345,
      "ems": null
    },
    {
      "latitude": 50.568531,
      "longitude": 19.062838,
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
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676547348,
      "ems": null
    },
    {
      "latitude": 50.566017,
      "longitude": 19.063135,
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
      "heading": 175,
      "squawk": "4154",
      "timestamp": 1676547354,
      "ems": null
    },
    {
      "latitude": 50.56485,
      "longitude": 19.063375,
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
        "fpm": 384,
        "ms": 2
      },
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676547356,
      "ems": null
    },
    {
      "latitude": 50.56369,
      "longitude": 19.063507,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676547360,
      "ems": null
    },
    {
      "latitude": 50.562016,
      "longitude": 19.063803,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676547362,
      "ems": null
    },
    {
      "latitude": 50.560593,
      "longitude": 19.064026,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676547366,
      "ems": null
    },
    {
      "latitude": 50.557827,
      "longitude": 19.064472,
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
        "fpm": -576,
        "ms": -2.9
      },
      "heading": 173,
      "squawk": "4154",
      "timestamp": 1676547371,
      "ems": null
    },
    {
      "latitude": 50.554939,
      "longitude": 19.064917,
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
      "heading": 176,
      "squawk": "4154",
      "timestamp": 1676547378,
      "ems": null
    },
    {
      "latitude": 50.552471,
      "longitude": 19.065065,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 177,
      "squawk": "4154",
      "timestamp": 1676547383,
      "ems": null
    },
    {
      "latitude": 50.548885,
      "longitude": 19.065435,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676547390,
      "ems": null
    },
    {
      "latitude": 50.545956,
      "longitude": 19.066031,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 172,
      "squawk": "4154",
      "timestamp": 1676547396,
      "ems": null
    },
    {
      "latitude": 50.543472,
      "longitude": 19.066483,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 173,
      "squawk": "4154",
      "timestamp": 1676547401,
      "ems": null
    },
    {
      "latitude": 50.540833,
      "longitude": 19.066921,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 174,
      "squawk": "4154",
      "timestamp": 1676547406,
      "ems": null
    },
    {
      "latitude": 50.536606,
      "longitude": 19.067568,
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
      "heading": 173,
      "squawk": "4154",
      "timestamp": 1676547415,
      "ems": null
    },
    {
      "latitude": 50.533806,
      "longitude": 19.067961,
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
        "fpm": 0,
        "ms": 0
      },
      "heading": 176,
      "squawk": "4154",
      "timestamp": 1676547421,
      "ems": null
    },
    {
      "latitude": 50.529709,
      "longitude": 19.068331,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 176,
      "squawk": "4154",
      "timestamp": 1676547430,
      "ems": null
    },
    {
      "latitude": 50.526855,
      "longitude": 19.068579,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 176,
      "squawk": "4154",
      "timestamp": 1676547436,
      "ems": null
    },
    {
      "latitude": 50.523788,
      "longitude": 19.068941,
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
      "heading": 176,
      "squawk": "4154",
      "timestamp": 1676547442,
      "ems": null
    },
    {
      "latitude": 50.521088,
      "longitude": 19.069374,
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
        "fpm": 320,
        "ms": 1.6
      },
      "heading": 172,
      "squawk": "4154",
      "timestamp": 1676547447,
      "ems": null
    },
    {
      "latitude": 50.517975,
      "longitude": 19.069965,
      "altitude": {
        "feet": 1725,
        "meters": 526
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
      "heading": 173,
      "squawk": "4154",
      "timestamp": 1676547454,
      "ems": null
    },
    {
      "latitude": 50.515278,
      "longitude": 19.070261,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 176,
      "squawk": "4154",
      "timestamp": 1676547459,
      "ems": null
    },
    {
      "latitude": 50.512253,
      "longitude": 19.070532,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 177,
      "squawk": "4154",
      "timestamp": 1676547466,
      "ems": null
    },
    {
      "latitude": 50.509365,
      "longitude": 19.070782,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 177,
      "squawk": "4154",
      "timestamp": 1676547472,
      "ems": null
    },
    {
      "latitude": 50.506531,
      "longitude": 19.07111,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 175,
      "squawk": "4154",
      "timestamp": 1676547478,
      "ems": null
    },
    {
      "latitude": 50.503464,
      "longitude": 19.071398,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 176,
      "squawk": "4154",
      "timestamp": 1676547484,
      "ems": null
    },
    {
      "latitude": 50.50209,
      "longitude": 19.071688,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 170,
      "squawk": "4154",
      "timestamp": 1676547487,
      "ems": null
    },
    {
      "latitude": 50.500614,
      "longitude": 19.072489,
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
      "heading": 156,
      "squawk": "4154",
      "timestamp": 1676547490,
      "ems": null
    },
    {
      "latitude": 50.49931,
      "longitude": 19.074047,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 137,
      "squawk": "4154",
      "timestamp": 1676547493,
      "ems": null
    },
    {
      "latitude": 50.49847,
      "longitude": 19.075903,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 123,
      "squawk": "4154",
      "timestamp": 1676547496,
      "ems": null
    },
    {
      "latitude": 50.497925,
      "longitude": 19.078192,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 108,
      "squawk": "4154",
      "timestamp": 1676547499,
      "ems": null
    },
    {
      "latitude": 50.497604,
      "longitude": 19.08065,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 97,
      "squawk": "4154",
      "timestamp": 1676547502,
      "ems": null
    },
    {
      "latitude": 50.497585,
      "longitude": 19.083326,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "squawk": "4154",
      "timestamp": 1676547505,
      "ems": null
    },
    {
      "latitude": 50.497696,
      "longitude": 19.085999,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 86,
      "squawk": "4154",
      "timestamp": 1676547508,
      "ems": null
    },
    {
      "latitude": 50.497787,
      "longitude": 19.087154,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 85,
      "squawk": "4154",
      "timestamp": 1676547509,
      "ems": null
    },
    {
      "latitude": 50.497971,
      "longitude": 19.090986,
      "altitude": {
        "feet": 1750,
        "meters": 533
      },
      "speed": {
        "kmh": 220.4,
        "kts": 119,
        "mph": 136.9
      },
      "verticalSpeed": {
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 84,
      "squawk": "4154",
      "timestamp": 1676547514,
      "ems": null
    },
    {
      "latitude": 50.498192,
      "longitude": 19.094164,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 83,
      "squawk": "4154",
      "timestamp": 1676547518,
      "ems": null
    },
    {
      "latitude": 50.498291,
      "longitude": 19.098068,
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
        "fpm": -64,
        "ms": -0.3
      },
      "heading": 89,
      "squawk": "4154",
      "timestamp": 1676547522,
      "ems": null
    },
    {
      "latitude": 50.498199,
      "longitude": 19.101683,
      "altitude": {
        "feet": 1750,
        "meters": 533
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
      "heading": 89,
      "squawk": "4154",
      "timestamp": 1676547526,
      "ems": null
    },
    {
      "latitude": 50.497818,
      "longitude": 19.106932,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "squawk": "4154",
      "timestamp": 1676547532,
      "ems": null
    },
    {
      "latitude": 50.497635,
      "longitude": 19.109753,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 96,
      "squawk": "4154",
      "timestamp": 1676547536,
      "ems": null
    },
    {
      "latitude": 50.497448,
      "longitude": 19.112202,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "squawk": "4154",
      "timestamp": 1676547539,
      "ems": null
    },
    {
      "latitude": 50.497192,
      "longitude": 19.114548,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 100,
      "squawk": "4154",
      "timestamp": 1676547542,
      "ems": null
    },
    {
      "latitude": 50.496918,
      "longitude": 19.117006,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 99,
      "squawk": "4154",
      "timestamp": 1676547545,
      "ems": null
    },
    {
      "latitude": 50.496689,
      "longitude": 19.11939,
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
        "fpm": 128,
        "ms": 0.7
      },
      "heading": 98,
      "squawk": "4154",
      "timestamp": 1676547548,
      "ems": null
    },
    {
      "latitude": 50.496468,
      "longitude": 19.121927,
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
      "heading": 96,
      "squawk": "4154",
      "timestamp": 1676547551,
      "ems": null
    },
    {
      "latitude": 50.496277,
      "longitude": 19.124378,
      "altitude": {
        "feet": 1800,
        "meters": 549
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
      "heading": 97,
      "squawk": "4154",
      "timestamp": 1676547554,
      "ems": null
    },
    {
      "latitude": 50.495865,
      "longitude": 19.129572,
      "altitude": {
        "feet": 1775,
        "meters": 541
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
      "heading": 96,
      "squawk": "4154",
      "timestamp": 1676547560,
      "ems": null
    },
    {
      "latitude": 50.49559,
      "longitude": 19.133991,
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
        "fpm": 64,
        "ms": 0.3
      },
      "heading": 96,
      "squawk": "4154",
      "timestamp": 1676547566,
      "ems": null
    },
    {
      "latitude": 50.495224,
      "longitude": 19.137606,
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
        "fpm": -768,
        "ms": -3.9
      },
      "heading": 99,
      "squawk": "4154",
      "timestamp": 1676547571,
      "ems": null
    },
    {
      "latitude": 50.494675,
      "longitude": 19.140135,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 114,
      "squawk": "4154",
      "timestamp": 1676547574,
      "ems": null
    },
    {
      "latitude": 50.493896,
      "longitude": 19.14187,
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
        "fpm": -384,
        "ms": -2
      },
      "heading": 128,
      "squawk": "4154",
      "timestamp": 1676547577,
      "ems": null
    },
    {
      "latitude": 50.493256,
      "longitude": 19.14286,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 133,
      "squawk": "4154",
      "timestamp": 1676547580,
      "ems": null
    },
    {
      "latitude": 50.491627,
      "longitude": 19.144493,
      "altitude": {
        "feet": 1675,
        "meters": 511
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
      "heading": 154,
      "squawk": "4154",
      "timestamp": 1676547584,
      "ems": null
    },
    {
      "latitude": 50.490417,
      "longitude": 19.145123,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 163,
      "squawk": "4154",
      "timestamp": 1676547588,
      "ems": null
    },
    {
      "latitude": 50.488586,
      "longitude": 19.145411,
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
      "heading": 177,
      "squawk": "4154",
      "timestamp": 1676547592,
      "ems": null
    },
    {
      "latitude": 50.487488,
      "longitude": 19.14534,
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
      "heading": 182,
      "squawk": "4154",
      "timestamp": 1676547595,
      "ems": null
    },
    {
      "latitude": 50.486462,
      "longitude": 19.145235,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "4154",
      "timestamp": 1676547598,
      "ems": null
    },
    {
      "latitude": 50.485291,
      "longitude": 19.145123,
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
        "fpm": -192,
        "ms": -1
      },
      "heading": 184,
      "squawk": "4154",
      "timestamp": 1676547601,
      "ems": null
    },
    {
      "latitude": 50.484238,
      "longitude": 19.144978,
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
      "heading": 182,
      "squawk": "4154",
      "timestamp": 1676547604,
      "ems": null
    },
    {
      "latitude": 50.48325,
      "longitude": 19.144939,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 183,
      "squawk": "4154",
      "timestamp": 1676547606,
      "ems": null
    },
    {
      "latitude": 50.481667,
      "longitude": 19.144716,
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
        "fpm": -448,
        "ms": -2.3
      },
      "heading": 185,
      "squawk": "4154",
      "timestamp": 1676547610,
      "ems": null
    },
    {
      "latitude": 50.480595,
      "longitude": 19.144493,
      "altitude": {
        "feet": 1550,
        "meters": 472
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
      "heading": 187,
      "squawk": "4154",
      "timestamp": 1676547613,
      "ems": null
    },
    {
      "latitude": 50.479431,
      "longitude": 19.144123,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 193,
      "squawk": "4154",
      "timestamp": 1676547615,
      "ems": null
    },
    {
      "latitude": 50.478592,
      "longitude": 19.143677,
      "altitude": {
        "feet": 1525,
        "meters": 465
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
      "heading": 199,
      "squawk": "4154",
      "timestamp": 1676547619,
      "ems": null
    },
    {
      "latitude": 50.477802,
      "longitude": 19.142935,
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
        "fpm": -512,
        "ms": -2.6
      },
      "heading": 211,
      "squawk": "4154",
      "timestamp": 1676547621,
      "ems": null
    },
    {
      "latitude": 50.476871,
      "longitude": 19.141376,
      "altitude": {
        "feet": 1450,
        "meters": 442
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
      "heading": 236,
      "squawk": "4154",
      "timestamp": 1676547625,
      "ems": null
    },
    {
      "latitude": 50.476318,
      "longitude": 19.139339,
      "altitude": {
        "feet": 1425,
        "meters": 434
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
      "heading": 253,
      "squawk": "4154",
      "timestamp": 1676547629,
      "ems": null
    },
    {
      "latitude": 50.476135,
      "longitude": 19.137461,
      "altitude": {
        "feet": 1350,
        "meters": 411
      },
      "speed": {
        "kmh": 146.3,
        "kts": 79,
        "mph": 90.9
      },
      "verticalSpeed": {
        "fpm": -832,
        "ms": -4.2
      },
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676547634,
      "ems": null
    },
    {
      "latitude": 50.476128,
      "longitude": 19.134918,
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
        "fpm": -704,
        "ms": -3.6
      },
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547638,
      "ems": null
    },
    {
      "latitude": 50.476128,
      "longitude": 19.134027,
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
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547639,
      "ems": null
    },
    {
      "latitude": 50.476128,
      "longitude": 19.131502,
      "altitude": {
        "feet": 1275,
        "meters": 389
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547643,
      "ems": null
    },
    {
      "latitude": 50.476181,
      "longitude": 19.130089,
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
        "fpm": -320,
        "ms": -1.6
      },
      "heading": 272,
      "squawk": "4154",
      "timestamp": 1676547646,
      "ems": null
    },
    {
      "latitude": 50.476128,
      "longitude": 19.128607,
      "altitude": {
        "feet": 1225,
        "meters": 373
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
      "squawk": "4154",
      "timestamp": 1676547649,
      "ems": null
    },
    {
      "latitude": 50.476044,
      "longitude": 19.126692,
      "altitude": {
        "feet": 1175,
        "meters": 358
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
      "heading": 264,
      "squawk": "4154",
      "timestamp": 1676547652,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.125118,
      "altitude": {
        "feet": 1150,
        "meters": 351
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
      "heading": 267,
      "squawk": "4154",
      "timestamp": 1676547655,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.123295,
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547658,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.11968,
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
        "fpm": -128,
        "ms": -0.7
      },
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547664,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.116285,
      "altitude": {
        "feet": 1075,
        "meters": 328
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
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547670,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.113092,
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
        "fpm": -640,
        "ms": -3.3
      },
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547676,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.111513,
      "altitude": {
        "feet": 975,
        "meters": 297
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547679,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.108189,
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
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547686,
      "ems": null
    },
    {
      "latitude": 50.475952,
      "longitude": 19.105007,
      "altitude": {
        "feet": 875,
        "meters": 267
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
      "heading": 268,
      "squawk": "4154",
      "timestamp": 1676547691,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.097357,
      "altitude": {
        "feet": 750,
        "meters": 229
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
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547706,
      "ems": null
    },
    {
      "latitude": 50.475998,
      "longitude": 19.092937,
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
        "fpm": -256,
        "ms": -1.3
      },
      "heading": 270,
      "squawk": "4154",
      "timestamp": 1676547715,
      "ems": null
    },
    {
      "latitude": 50.475986,
      "longitude": 19.08392,
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
        "fpm": 256,
        "ms": 1.3
      },
      "heading": 269,
      "squawk": "4154",
      "timestamp": 1676547736,
      "ems": null
    },
  ]
}